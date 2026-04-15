

---

## 📘 Integration Guide

### 1. Overview

This API is designed for **Partner developers** to integrate with the glucose device platform.

Main capabilities include:

- User registration & token management
- Device information query
- User glucose data query
- Device glucose data query

All APIs use **HTTPS + JSON**.

---

### 2. API Endpoint

```
https://test-api.dreisamtech.com
```

---

## 🔐 Authentication & Signature Mechanism

To ensure platform security, all Partner APIs use an **AppId + AppSecret request signature mechanism**.

Before calling APIs, partners must:

1. Register on the Partner Platform
2. Create an Application
3. Obtain `app_id` and `app_secret`
4. Sign every API request

---

## Terminology

| Term       | Description                      |
| :--------- | :------------------------------- |
| app_id     | Application identifier (public)  |
| app_secret | Application secret key (private) |
| signature  | Request signature                |

---

## Required HTTP Headers

Each API request must include the following headers:

| Header      | Required | Description                      |
| :---------- | :------- | :------------------------------- |
| X-App-Id    | ✅        | Application ID                   |
| X-Timestamp | ✅        | Current timestamp (milliseconds) |
| X-Nonce     | ✅        | Random string (anti-replay)      |
| X-Signature | ✅        | Request signature                |

Example:

```
X-App-Id: app_123456
X-Timestamp: 1700000000000
X-Nonce: a8f93k2l
X-Signature: 9f4e3c...
```

---

## Signature Data Scope

The signature is generated from the following components:

1. HTTP Method
2. URL Path (without domain)
3. Query parameters
4. Public header parameters
5. Request body (POST / PUT only)

---

## Signature Generation Process

### Step 1 — Collect Parameters

Include:

- Header parameters:
    - X-App-Id
    - X-Timestamp
    - X-Nonce
- Query parameters, for example:

```
open_id=xxx&device_sn=yyy
```

> ⚠️ `X-Signature` itself must NOT participate in signing.

---

### Step 2 — Sort Parameters

Sort all parameter names in **ASCII ascending order**.

Example:

```
app_id
nonce
open_id
timestamp
```

---

### Step 3 — Build Signature String

Concatenation rule:

```
{METHOD}{PATH}{key1}{value1}{key2}{value2}...{BODY}
```

Example:

```
POST
/partner/v1/user/token
X-App-Idapp_123
X-Nonceabcd1234
X-Timestamp1700000000000
open_iduser_xxx
{"region":"CN"}
```

Rules:

- HTTP method must be uppercase
- Path excludes protocol and domain
- No separators between keys and values
- Body must be the raw JSON string

---

### Step 4 — HMAC-SHA256

```
HMAC-SHA256(app_secret, sign_string)
```

Convert the result to:

```
lowercase hex string
```

---

## Go Signature Example

```
func GenerateSignature(secret, method, path string,
    queryParams url.Values,
    headerParams map[string]string,
    body []byte) string {

    allParams := make(map[string]string)

    for k, v := range headerParams {
        allParams[k] = v
    }

    for k, v := range queryParams {
        if len(v) > 0 {
            allParams[k] = v[0]
        }
    }

    var keys []string
    for k := range allParams {
        keys = append(keys, k)
    }
    sort.Strings(keys)

    var sb strings.Builder
    sb.WriteString(strings.ToUpper(method))
    sb.WriteString(path)

    for _, k := range keys {
        sb.WriteString(k)
        sb.WriteString(allParams[k])
    }

    if len(body) > 0 {
        sb.Write(body)
    }

    h := hmac.New(sha256.New, []byte(secret))
    h.Write([]byte(sb.String()))

    return hex.EncodeToString(h.Sum(nil))
}
```

---

## Example Request

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

## Security Recommendations

- ❗ Never expose `app_secret` in frontend code
- ❗ Do not store secrets in plaintext
- ✅ Use server-side signing only
- ✅ Rotate secrets periodically
- ✅ Requests older than **5 minutes** will be rejected

---

## Common Response Format

```
{
  "code": 0,
  "msg": "ok",
  "data": {}
}
```

| Field | Description      |
| :---- | :--------------- |
| code  | 0 means success  |
| msg   | Business message |
| data  | Response payload |

---

## Common Error Codes

| Code | Description                  |
| :--- | :--------------------------- |
| 0    | Success                      |
| 1001 | Unauthorized / token invalid |
| 1002 | Permission denied            |

---

## Time Format

All timestamps are:

```
Unix timestamp in milliseconds
```

Example:

```
1700000000000
```

---

## Recommended Integration Flow

```
Partner Registration
        ↓
Create Application (app_id / app_secret)
        ↓
Generate Request Signature
        ↓
Invoke Partner APIs
```

---

✅ **Document generated on: 2026-01-30**