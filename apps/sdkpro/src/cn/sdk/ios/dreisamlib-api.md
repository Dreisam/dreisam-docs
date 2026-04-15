# iOS DreisamLib API

## SDK 公开类

### `DreisamLib`

SDK 主引用头文件：

```objective-c
#import <DreisamLibPro/DreisamLibPro>
```

### `DreisamLibManage`

SDK 管理入口，负责初始化、登录、退出，以及提供 `bleManage` 能力。

### `DreisamBuilderParam`

初始化参数对象，用于设置 `appId`、日志开关等配置。

### `BleManage`

蓝牙模块控制类，使用入口：

```objective-c
[DreisamLibManage shareLib].bleManage
```

### `DreisamGlucoseModel`

血糖数据模型，包含血糖值、产生时间等字段。

### `DreisamDeviceModel`

设备模型，用于表示已绑定设备及其相关信息。

### `DreisamEnum`

状态枚举，SDK 通过回调将状态码传递给上层应用。

## 初始化相关

### 初始化 SDK

```objective-c
DreisamBuilderParam *builder = DreisamBuilderParam.new;
builder.hideLog = NO;
builder.appId = @"******";
[[DreisamLibManage shareLib] initSDKBuilderParam:builder];
```

### 用户登录

```objective-c
[DreisamLibManage.shareLib
    loginUserToken:token
         callback:^(DreisamEnumState state, DreisamDeviceModel * _Nonnull deviceModel) {
         }];
```

### 退出登录

```objective-c
[DreisamLibManage.shareLib logout];
```

## 设备管理

### 绑定设备

```objective-c
[DreisamLibManage.shareLib.bleManage
    bindDevice:result
processProgress:^(DreisamBindingProcessState state) {
  if (state == DreisamBindingProcessStateScanning) {
    [ListHub showLoadingText:@"Scanning" maskBackgroudEdit:NO showForever:YES];
  } else if (state == DreisamBindingProcessStateConnecting) {
    [ListHub showLoadingText:@"Connecting" maskBackgroudEdit:NO showForever:YES];
  } else if (state == DreisamBindingProcessStateInBinding) {
    [ListHub showLoadingText:@"InBinding" maskBackgroudEdit:NO showForever:YES];
  }
}
successCallback:^(DreisamDeviceModel *deviceModel) {
  [ListHub showText:@"Binding successful" maskBackgroudEdit:YES];
  NSLog(@"resultCallback = %@", deviceModel.device_sn);
}
errorCallback:^(NSInteger code, NSString *msg) {
  [ListHub showText:@"Binding failure" maskBackgroudEdit:YES];
}];
```

### 连接设备

```objective-c
[DreisamLibManage.shareLib
    loginUserToken:token
         callback:^(DreisamEnumState state, DreisamDeviceModel * _Nonnull deviceModel) {
           if (state == DreisamEnumStateLoginSucceed) {
             [DreisamLibManage.shareLib.bleManage
                 connectDeviceCallback:^(DreisamEnumState state) {
                 }];
           } else {
             [ListHub showText:@"login failure" maskBackgroudEdit:YES];
           }
         }];
```

### 获取 RSSI

```objective-c
[[DreisamLibManage shareLib].bleManage getRSSICallback:^(NSNumber *rssi) {
}];
```

### 完成设备生命周期

```objective-c
[DreisamLibManage.shareLib.bleManage
    finshDeviceSuccessCallback:^{
      [ListHub showText:@"operation succeeded" maskBackgroudEdit:YES];
      [weakSelf clearDeviceAllData];
    }
    errorCallback:^(NSInteger code, NSString *msg) {
      [ListHub showText:@"operation failure" maskBackgroudEdit:YES];
    }];
```

## 状态监听

### 蓝牙状态和异常状态回调

```objective-c
[[DreisamLibManage shareLib].bleManage
    connectBleStateWithExceptionEventCallback:^(DreisamEnumState state) {
      if (state == DreisamEnumStateConnected) {
        ////////
      } else if (state == DreisamEnumStateTokenInvalid ||
                 state == DreisamEnumStateTokenExpiration) {
        [weakSelf logOut];
      } else if (state == DreisamEnumStateUnDeviceExpire) {
      }
    }];
```

常见状态枚举：

- `DreisamEnumStateAuthenticationFailure`
- `DreisamEnumStateDisconnect`
- `DreisamEnumStateConnected`
- `DreisamEnumStateIndicateLoading`
- `DreisamEnumBleStatePoweredOn`
- `DreisamEnumBleStatePoweredOff`
- `DreisamEnumBleStateUnauthorized`
- `DreisamEnumStateUnDeviceAvailable`
- `DreisamEnumStateUnDeviceExpire`
- `DreisamEnumStateLoginSucceed`
- `DreisamEnumStateLoginFailure`
- `DreisamEnumStateLoginNotLoggedOn`
- `DreisamEnumStateTokenExpiration`
- `DreisamEnumStateTokenInvalid`

## 数据同步

### 同步开始

```objective-c
[[DreisamLibManage shareLib].bleManage dataSyncStartCallback:^(int totalCount) {
}];
```

### 同步进度

```objective-c
[[DreisamLibManage shareLib].bleManage dataSyncProgressCallback:^(int progress) {
  NSLog(@"dataSyncProgressCallback = %d", progress);
}];
```

### 同步完成

```objective-c
[[DreisamLibManage shareLib].bleManage
    dataSyncCompleteCallback:^(NSArray<DreisamGlucoseModel *> *glucoseModelAry) {
      weakSelf.headerView.dataSyncLabel.text = @"Data sync: 100%";
    }];
```

### 实时数据回调

```objective-c
[[DreisamLibManage shareLib].bleManage
    realTimeDataCallBack:^(DreisamGlucoseModel *glucoseModel) {
      weakSelf.headerView.dataSyncLabel.text = @"Data sync: 100%";
    }];
```

说明：实时数据大约每 `3` 分钟上报一次。
