# Android DreisamLib API

## 概述

`DreisamLib` 是 Android 平台的设备连接 SDK，提供设备绑定、登录、连接管理、数据同步、心跳检测等能力。

## 初始化

### 预初始化

```java
public static void preInit(Application context)
```

示例：

```java
public class MyApplication extends Application {
   @Override
   public void onCreate() {
      super.onCreate();
      DreisamLib.preInit(this);
   }
}
```

### 正式初始化

```java
public static void initSDK(String appdId, DreisamLibBuilder builder)
```

示例：

```java
DreisamLibBuilder builder = new DreisamLibBuilder();
builder.setHideLog(false);
DreisamLib.initSDK("your_appdid", builder);
```

### `DreisamLibBuilder`

- `setHideLog(boolean hideLog)`
- `isHideLog()`

## 核心接口

### 前置条件检查

```java
void checkPreConditions(OnPreCheckListener listener)
```

回调：

- `onSystemPermissionChanged(boolean granted, List<String> missingPermissions)`

### 登录

```java
void login(String areaCode, String userToken, OnLoginListener listener)
```

回调：

- `loginFail(int code, String msg)`
- `loginSucc(boolean hasAvailableDevice, DrisamDeviceModel deviceInfoModel)`

`DrisamDeviceModel` 关键字段：

- `deviceSn`
- `partnerId`
- `estimatedEndAt`
- `iconUrl`
- `status`

### 退出登录

```java
void logout()
```

## 设备绑定

### 绑定设备

```java
void bindDevice(String deviceName, OnBindListener listener)
```

回调：

- `onBindFail(int code, String msg)`
- `onBindSuccess(DrisamDeviceModel deviceInfoModel)`
- `onBinding(DreisamBindingEnum bindingCode)`

`DreisamBindingEnum`：

- `CHEACKING`
- `SCANTING`
- `CONNECTING`
- `BINDTING`

### 取消绑定

```java
boolean cancleBindDevice()
```

## 设备连接管理

### 连接设备

```java
void connectDevice()
```

### 检查连接状态

```java
boolean isDeviceConnected()
```

### 断开连接

```java
void disconnect()
```

### 结束设备使用

```java
void finishDevice(ValueCallBack<Boolean> valueCallBack)
```

### 连接状态监听

```java
void connectListener(OnConnectListener onConnectListener)
```

常见连接状态：

- `AUTHENTICATION_FAIL`
- `LACK_PERMISSION`
- `DEVICE_CONNECTING`
- `SHOW_CONNECTING`
- `BLE_OFF`
- `NO_AVAILABLE_DEVICE`
- `TOKEN_INVALID`
- `DEVICE_FINISH`

## 心跳检测

### 启动心跳

```java
void startHeartbeat()
```

### 停止心跳

```java
void stopHeartbeat()
```

## 数据交互

### 数据同步监听

```java
void setSyncDatasListener(OnSyncDatasCallBack callBack)
```

回调：

- `onSyncStart(int totalCount)`
- `onSyncProgress(int progress)`
- `onSyncComplete(boolean success, List<GlucoseBean> datas)`

### 实时数据回调

```java
void realTimeDataCallBack(OnAnalzeDatatListener listener)
```

回调：

- `analzeData(GlucoseBean data)`
