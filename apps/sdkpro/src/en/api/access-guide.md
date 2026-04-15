# Partner API Reference

## 📘 Overview

This document describes the **Partner Open API**, which allows external developers to integrate with the glucose device platform.

Main features:

- User registration and authentication
- User glucose data query
- Device information query
- Device glucose data query

All APIs use **HTTPS** and exchange data in **JSON** format.

## 🌐 API Endpoint

```
https://test-api.dreisamtech.com
```

## 🔐 Authentication

All APIs (except user registration) require an access token.

```
Authorization: Bearer {access_token}
```

The access token is obtained from:

- User registration API
- Get user token API

## 📦 Common Response Format

```
{
  "code": 0,
  "msg": "ok",
  "data": {}
}
```

| Field | Type | Description |
| :-- | :-- | :-- |
| code | int | 0 indicates success |
| msg | string | Business message |
| data | object | Response payload |

### Common Error Codes

| Code | Description |
| :-- | :-- |
| 0 | Success |
| 1001 | Unauthorized / token invalid |
| 1002 | Permission denied |

## ⏱ Time Format

All time fields are represented as:

```
Unix timestamp in milliseconds
```

Example:

```
1700000000000
```

## 👤 User APIs

## 1. Register User

Register a partner user in the platform.

### Endpoint

```
POST /partner/v1/user/register
```

### Content-Type

```
application/json
```

### Request Body

```
{
  "partner_uid": "string",
  "region": "CN"
}
```

| Field | Required | Description |
| :-- | :-- | :-- |
| partner_uid | Yes | Partner system user ID |
| region | No | User region (default: CN) |

### Response Example

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

| Field | Description |
| :-- | :-- |
| open_id | Platform user identifier |
| access_token | Access token |
| expire_in | Token validity (seconds) |

## 2. Get User Token

Retrieve a new access token using `open_id`.

### Endpoint

```
GET /partner/v1/user/token
```

### Query Parameters

| Name | Required | Description |
| :-- | :-- | :-- |
| open_id | Yes | User open_id |

### Response

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

## 3. Query User Glucose Records

Query glucose records of a user within a time range.

> ⚠️ Maximum time range: **30 days**

### Endpoint

```
GET /partner/v1/user/glucose
```

### Query Parameters

| Name | Required | Description |
| :-- | :-- | :-- |
| open_id | Yes | User open_id |
| start_time | Yes | Start timestamp (ms) |
| end_time | Yes | End timestamp (ms) |

### Response Data Structure

```
{
  "open_id": "string",
  "records": [
    {
      "app_id": "string",
      "device_sn": "string",
      "open_id": "string",
      "type": 1,
      "value": 6.3,
      "trend": 1,
      "package_num": 100,
      "measured_at": 1700000000000,
      "app_received_at": 1700000005000
    }
  ]
}
```

### Glucose Trend Values

| Value | Description |
| :-- | :-- |
| 1 | Stable |
| 5 | Slowly rising |
| 10 | Slowly falling |
| 15 | Rapid rise |
| 20 | Rapid drop |

## 🩺 Device APIs

## 4. Query Device Information

Retrieve lifecycle and binding information of a device.

### Endpoint

```
GET /partner/v1/device/info
```

### Query Parameters

| Name | Required | Description |
| :-- | :-- | :-- |
| device_sn | Yes | Device serial number |

### Response Data

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

### Device Status

| Status | Description |
| :-- | :-- |
| 0 | Unbound |
| 1 | Bound |
| 2 | Activated |
| 3 | Ended |

## 5. Query Device Glucose Records

Query glucose records by device serial number.

If `start_time` and `end_time` are not provided, all historical data will be returned.

### Endpoint

```
GET /partner/v1/device/glucose
```

### Query Parameters

| Name | Required | Description |
| :-- | :-- | :-- |
| device_sn | Yes | Device SN |
| start_time | No | Start timestamp (ms) |
| end_time | No | End timestamp (ms) |

### Response

The response structure is identical to **User Glucose Records API**.

## 🔁 Recommended Integration Flow

```
Register Partner Account
        ↓
Create Application (app_id / app_secret)
        ↓
Call Partner APIs
```
