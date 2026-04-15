# Android DreisamLib API

## 概述

DreisamLib 是一款用于设备连接与数据交互的 SDK，提供设备连接管理、数据同步、历史数据获取等功能，适用于需要与特定设备进行通信的应用开发。

## 初始化相关方法

### 预初始化

```java
void preInit(Application context)
```

- 功能：SDK 预初始化，必须在 `Application.onCreate` 函数主线程中调用。
- 特点：
  - 耗时极少，不影响 App 首次冷启动体验。
  - 不采集设备信息。
- 参数：`context` - 应用上下文（Application 实例）。

### 正式初始化

```java
void initSDK(String appId, DreisamLibBuilder builder)
```

- 功能：完成 SDK 的正式初始化。
- 调用时机：可在预初始化后调用，耗时极少，不影响主线程，必须调用。
- 参数：
  - `appId` - 开放平台生成的 `appId`
  - `builder` - 配置构建器（用于配置 SDK 参数）

### 反初始化

```java
void unInit()
```

- 功能：反初始化 SDK，释放相关资源，退出时候调用，该方法会清除所有数据。

## 设备连接管理

### 检查连接前置条件

```java
void checkPreConditions(OnPreCheckListener listener)
```

- 功能：检查系统授权及网络鉴权等连接前置条件。
- 参数：`listener` - 前置检查监听器，用于接收检查结果。

### 连接指定设备

```java
void connectDevice(String deviceInfo)
```

- 功能：连接指定名称的设备。
- 参数：`deviceName` - 待连接的设备名称。

### 设置连接状态监听器

```java
void connectListener(OnConnectListener onConnectListener)
```

- 功能：设置设备连接状态监听器。
- 参数：`onConnectListener` - 连接状态监听器实例。

### 检查设备连接状态

```java
boolean isDeviceConnected()
```

- 功能：检查设备是否已连接。
- 返回值：`true` 表示已连接，`false` 表示未连接。

### 断开设备连接

```java
void disconnect()
```

- 功能：断开当前设备连接。

## 心跳检测

### 启动心跳检测

```java
void startHeartbeat()
```

- 功能：启动设备心跳检测。

### 停止心跳检测

```java
void stopHeartbeat()
```

- 功能：停止设备心跳检测。

## 数据相关方法

### 设置数据同步监听器

```java
void setSyncDatasListener(OnSyncDatasCallBack callBack)
```

- 功能：设置数据同步状态监听器。
- 参数：`callBack` - 同步状态监听器实例。

### 获取历史数据

```java
void getHistory(long startTime, long endTime, OnHistoryDatasCallBack callBack)
```

- 功能：获取指定时间范围内的历史数据。
- 参数：
  - `startTime` - 开始时间戳（秒级）
  - `endTime` - 结束时间戳（秒级）
  - `callBack` - 历史数据回调接口

### 设置实时数据回调

```java
void realTimeDataCallBack(OnAnalzeDatatListener listener)
```

- 功能：设置实时数据回调监听器。
- 参数：`listener` - 实时数据分析回调实例。

## 获取连接的设备信息

```java
DreisamDeviceInfo getDeviceInfo()
```

- 功能：获取连接的设备信息，连接成功后延迟 1s 获取。
