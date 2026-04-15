

## 📘 接入指南

---

## 🔐 接口签名认证机制

为保障接口安全性，Partner 平台所有接口均采用 **AppKey + AppSecret 签名认证机制**。

合作方在平台完成注册后，需要：

1. 创建应用（Application）
2. 获取 `app_id` 与 `app_secret`
3. 使用本文档所述签名算法，对每一次 API 请求进行签名

---

## 一、名词说明

| 名称         | 说明               |
| :--------- | :--------------- |
| app_id     | 应用唯一标识（公开）       |
| app_secret | 应用密钥（仅用于签名，不可泄露） |
| signature  | 请求签名值            |

---

## 二、请求 Header 规范

所有接口请求必须在 Header 中携带以下公共参数：

| Header      | 必填 | 说明         |
| :---------- | :-- | :--------- |
| X-App-Id    | ✅  | 应用 ID      |
| X-Timestamp | ✅  | 当前时间戳（毫秒）  |
| X-Nonce     | ✅  | 随机字符串（防重放） |
| X-Signature | ✅  | 请求签名       |

示例：

```
X-App-Id: app_123456
X-Timestamp: 1700000000000
X-Nonce: a8f93k2l
X-Signature: 9f4e3c...
```

---

## 三、签名参与参数说明

签名计算包含以下五部分：

1. HTTP Method
2. URL Path（不包含域名）
3. Query 参数
4. Header 公共参数
5. 请求 Body（仅 POST/PUT）

---

## 四、签名算法流程

### 1️⃣ 收集所有参数

参与签名的参数包括：

- Header 参数：
    - X-App-Id
    - X-Timestamp
    - X-Nonce
- URL Query 参数，例如：

```
open_id=xxx&device_sn=yyy
```

> ❗ 不包含 signature 本身

---

### 2️⃣ 参数字典序排序

对所有参数名按 **ASCII 字典序升序排序**。

示例：

```
app_id
nonce
open_id
timestamp
```

---

### 3️⃣ 构造签名原串

拼接规则如下：

```
{METHOD}{PATH}{key1}{value1}{key2}{value2}...{BODY}
```

#### 示例

```
POST
/partner/v1/user/token
X-App-Idapp_123
X-Nonceabcd1234
X-Timestamp1700000000000
open_iduser_xxx
{"region":"CN"}
```

说明：

- Method 必须为大写
- Path 不包含域名
- Key 与 Value 之间无任何分隔符
- Body 为原始 JSON 字符串

---

### 4️⃣ HMAC-SHA256 加密

使用：

```
HMAC-SHA256(secret, sign_string)
```

并将结果转为：

```
hex string（小写）
```

---

## 五、Go 签名算法示例

```
// GenerateSignature 生成签名
// secret: app_secret
// method: HTTP Method，例如 GET / POST
// path: URL Path，例如 /partner/v1/user/token
// queryParams: URL 查询参数
// headerParams: 公共 Header 参数
// body: POST Body（json）
func GenerateSignature(secret, method, path string,
    queryParams url.Values,
    headerParams map[string]string,
    body []byte) string {

    // 1. 合并参数
    allParams := make(map[string]string)

    for k, v := range headerParams {
        allParams[k] = v
    }

    for k, v := range queryParams {
        if len(v) > 0 {
            allParams[k] = v[0]
        }
    }

    // 2. 字典序排序
    var keys []string
    for k := range allParams {
        keys = append(keys, k)
    }
    sort.Strings(keys)

    // 3. 构造签名原串
    var sb strings.Builder
    sb.WriteString(strings.ToUpper(method))
    sb.WriteString(path)

    for _, k := range keys {
        sb.WriteString(k)
        sb.WriteString(allParams[k])
    }

    // 4. 拼接 body
    if len(body) > 0 {
        sb.Write(body)
    }

    // 5. HMAC-SHA256
    h := hmac.New(sha256.New, []byte(secret))
    h.Write([]byte(sb.String()))

    return hex.EncodeToString(h.Sum(nil))
}
```

---

## 六、完整请求示例

### 请求

```
POST /partner/v1/user/token?open_id=user_xxx HTTP/1.1
Host: example.com
Content-Type: application/json

X-App-Id: app_123
X-Timestamp: 1700000000000
X-Nonce: abcd1234
X-Signature: 8f1c9a...
```

---

## 七、安全建议

- ❗ app_secret **严禁出现在前端代码**
- ❗ 不得明文存储在客户端
- ✅ 仅允许在服务端使用
- ✅ 建议定期轮换 app_secret
- ✅ timestamp 超过 5 分钟的请求将被拒绝

---

## 八、推荐接入流程（签名版）

```
Partner 注册
      ↓
创建应用（获取 app_id / app_secret）
      ↓
服务端生成签名
      ↓
调用 Partner API
```