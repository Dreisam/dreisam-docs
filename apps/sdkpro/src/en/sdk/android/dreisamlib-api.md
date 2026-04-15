# Android DreisamLib API

## Overview

`DreisamLib` is the Android SDK for device connectivity, binding, login, connection management, data synchronization, and heartbeat detection.

## Initialization

```java
public static void preInit(Application context)
public static void initSDK(String appdId, DreisamLibBuilder builder)
```

## Core Interfaces

```java
void checkPreConditions(OnPreCheckListener listener)
void login(String areaCode, String userToken, OnLoginListener listener)
void logout()
void bindDevice(String deviceName, OnBindListener listener)
boolean cancleBindDevice()
void connectDevice()
boolean isDeviceConnected()
void disconnect()
void finishDevice(ValueCallBack<Boolean> valueCallBack)
void connectListener(OnConnectListener onConnectListener)
void startHeartbeat()
void stopHeartbeat()
void setSyncDatasListener(OnSyncDatasCallBack callBack)
void realTimeDataCallBack(OnAnalzeDatatListener listener)
```
