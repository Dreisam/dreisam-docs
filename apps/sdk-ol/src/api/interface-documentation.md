# 接口文档

## 概述

`DreisamLibPro` 提供设备连接管理、数据同步、历史数据获取等能力，适用于与特定设备通信的应用开发。

## 公开类

- `DreisamLib`
- `DreisamLibManage`
- `DreisamBuilderParam`
- `BleManage`
- `DreisamGlucoseModel`
- `DreisamDeviceModel`
- `DreisamEnum`

## 初始化

```objective-c
DreisamBuilderParam *builder = DreisamBuilderParam.new;
builder.hideLog = NO;
builder.appId = @"******";
[[DreisamLibManage shareLib] initSDKBuilderParam:builder];
```

## 用户登录

```objective-c
[DreisamLibManage.shareLib loginUserToken:token callback:^(DreisamEnumState state, DreisamDeviceModel * _Nonnull deviceModel) {}];
```

## 退出登录

```objective-c
[DreisamLibManage.shareLib logout];
```

## 绑定设备

```objective-c
[DreisamLibManage.shareLib.bleManage bindDevice:result processProgress:^(DreisamBindingProcessState state) {
} successCallback:^(DreisamDeviceModel *deviceModel) {
} errorCallback:^(NSInteger code, NSString *msg) {
}];
```

## 连接设备

```objective-c
[DreisamLibManage.shareLib.bleManage connectDeviceCallback:^(DreisamEnumState state) {
}];
```

## 状态回调

```objective-c
[[DreisamLibManage shareLib].bleManage connectBleStateWithExceptionEventCallback:^(DreisamEnumState state) {
}];
```

常见状态：

- `DreisamEnumStateAuthenticationFailure`
- `DreisamEnumStateDisconnect`
- `DreisamEnumStateConnected`
- `DreisamEnumStateUnDeviceAvailable`
- `DreisamEnumStateUnDeviceExpire`
- `DreisamEnumStateLoginSucceed`
- `DreisamEnumStateLoginFailure`
- `DreisamEnumStateTokenExpiration`
- `DreisamEnumStateTokenInvalid`

## 数据同步

```objective-c
[[DreisamLibManage shareLib].bleManage dataSyncStartCallback:^(int totalCount) {
}];

[[DreisamLibManage shareLib].bleManage dataSyncProgressCallback:^(int progress) {
}];

[[DreisamLibManage shareLib].bleManage dataSyncCompleteCallback:^(NSArray<DreisamGlucoseModel *> *glucoseModelAry) {
}];
```

## 实时数据

```objective-c
[[DreisamLibManage shareLib].bleManage realTimeDataCallBack:^(DreisamGlucoseModel *glucoseModel) {
}];
```

说明：实时数据大约每 `3` 分钟上报一次。
