# Partner API 接口文档

## 📘 接入指南

### 1. 接口概述

本接口用于 **第三方合作伙伴（Partner）** 接入 Dreisam 平台，主要能力包括：

- 用户注册与 Token 获取
- 设备信息查询
- 用户血糖数据查询
- 设备血糖数据查询

接口采用 **HTTPS + JSON** 通信方式。

### 2. 接口域名

```
https://test-api.dreisamtech.com
```

### 3. 认证方式（非常重要）

所有业务接口（除注册接口外）均需要在 Header 中携带：

```
Authorization: Bearer {access_token}
```

### 4. 统一响应结构

```
{
  "code": 0,
  "msg": "ok",
  "data": {}
}
```

| 字段 | 类型 | 说明 |
| :-- | :-- | :-- |
| code | int | 0 表示成功 |
| msg | string | 错误或业务提示 |
| data | object | 实际返回数据 |

#### 常见错误码

| code | 说明 |
| :-- | :-- |
| 0 | 成功 |
| 1001 | 未登录 / Token 无效 |
| 1002 | 无权限操作 |

### 5. 时间字段说明

接口中所有时间均为：

```
Unix 时间戳（毫秒）
```

示例：

```
1700000000000
```

## 👤 用户相关接口

## 1️⃣ 用户注册

### 接口说明

用于将合作方用户注册为平台用户。

### 请求信息

- **URL**

```
POST /partner/v1/user/register
```

- **Content-Type**

```
application/json
```

### 请求参数

```
{
  "partner_uid": "string",
  "region": "CN"
}
```

| 字段 | 必填 | 说明 |
| :-- | :-- | :-- |
| partner_uid | ✅ | 合作方用户唯一 ID |
| region | ❌ | 用户区域，默认 CN |

### 返回结果

```
{
  "code": 0,
  "msg": "ok",
  "data": {
    "open_id": "string",
    "access_token": "string",
    "expire_in": 7200
  }
}
```

| 字段 | 说明 |
| :-- | :-- |
| open_id | 平台用户唯一标识 |
| access_token | 用户访问 Token |
| expire_in | 有效期（秒） |

## 2️⃣ 获取用户 Token

### 接口说明

用于根据 open_id 换取新的 access_token。

### 请求信息

```
GET /partner/v1/user/token
```

### 请求参数

| 参数 | 必填 | 说明 |
| :-- | :-- | :-- |
| open_id | ✅ | 用户 open_id |

### 返回示例

```
{
  "code": 0,
  "msg": "ok",
  "data": {
    "open_id": "string",
    "access_token": "string",
    "expire_in": 7200
  }
}
```

## 3️⃣ 用户血糖数据查询

### 接口说明

查询某个用户在指定时间范围内的血糖数据。

⚠️ 时间跨度最大 **30 天**。

### 请求信息

```
GET /partner/v1/user/glucose
```

### 请求参数

| 参数 | 必填 | 说明 |
| :-- | :-- | :-- |
| open_id | ✅ | 用户 ID |
| start_time | ✅ | 开始时间（ms） |
| end_time | ✅ | 结束时间（ms） |

### 返回字段说明

```
{
  "open_id": "string",
  "records": [
    {
      "app_id": "string",
      "device_sn": "string",
      "open_id": "string",
      "type": 1,
      "value": 6.2,
      "trend": 1,
      "package_num": 123,
      "measured_at": 1700000000000,
      "app_received_at": 1700000005000
    }
  ]
}
```

#### 血糖趋势说明

| 值 | 含义 |
| :-- | :-- |
| 1 | 平稳 |
| 5 | 斜升 |
| 10 | 斜降 |
| 15 | 直升 |
| 20 | 直降 |

## 🩺 设备相关接口

## 4️⃣ 查询设备信息

### 请求

```
GET /partner/v1/device/info
```

### 参数

| 参数 | 必填 | 说明 |
| :-- | :-- | :-- |
| device_sn | ✅ | 设备序列号 |

### 返回数据

```
{
  "device_sn": "string",
  "status": 2,
  "bound_at": 1700000000000,
  "activated_at": 1700001000000,
  "estimated_end_at": 1701200000000,
  "ended_at": 1701300000000,
  "partner_id": "string",
  "app_id": "string",
  "open_id": "string"
}
```

#### 设备状态说明

| 状态值 | 含义 |
| :-- | :-- |
| 0 | 未绑定 |
| 1 | 已绑定 |
| 2 | 已激活 |
| 3 | 已结束 |

## 5️⃣ 查询设备血糖数据

### 接口说明

根据设备序列号查询血糖数据。

若不传时间参数，则返回设备全部历史数据。

### 请求

```
GET /partner/v1/device/glucose
```

### 请求参数

| 参数 | 必填 | 说明 |
| :-- | :-- | :-- |
| device_sn | ✅ | 设备 SN |
| start_time | ❌ | 起始时间 |
| end_time | ❌ | 结束时间 |

### 返回结构

与「用户血糖接口」完全一致。

## 🔁 推荐接入流程

```
1. Partner 用户注册
        ↓
2. 获取 open_id + access_token
        ↓
3. 调用业务接口
        ↓
4. Token 过期后刷新
```
