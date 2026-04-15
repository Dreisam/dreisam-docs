# iOS DreisamLib API

## Public Classes

- `DreisamLib`
- `DreisamLibManage`
- `DreisamBuilderParam`
- `BleManage`
- `DreisamGlucoseModel`
- `DreisamDeviceModel`
- `DreisamEnum`

## Initialization

```objective-c
DreisamBuilderParam *builder = DreisamBuilderParam.new;
builder.hideLog = NO;
builder.appId = @"******";
[[DreisamLibManage shareLib] initSDKBuilderParam:builder];
```

## Login

```objective-c
[DreisamLibManage.shareLib
    loginUserToken:token
         callback:^(DreisamEnumState state, DreisamDeviceModel * _Nonnull deviceModel) {
         }];
```

## Logout

```objective-c
[DreisamLibManage.shareLib logout];
```

## Device Binding

```objective-c
[DreisamLibManage.shareLib.bleManage bindDevice:result processProgress:^(DreisamBindingProcessState state) {
} successCallback:^(DreisamDeviceModel *deviceModel) {
} errorCallback:^(NSInteger code, NSString *msg) {
}];
```

## Device Connection

```objective-c
[DreisamLibManage.shareLib.bleManage connectDeviceCallback:^(DreisamEnumState state) {
}];
```

## Status Callback

```objective-c
[[DreisamLibManage shareLib].bleManage connectBleStateWithExceptionEventCallback:^(DreisamEnumState state) {
}];
```

## Data Sync

```objective-c
[[DreisamLibManage shareLib].bleManage dataSyncStartCallback:^(int totalCount) {
}];

[[DreisamLibManage shareLib].bleManage dataSyncProgressCallback:^(int progress) {
}];

[[DreisamLibManage shareLib].bleManage dataSyncCompleteCallback:^(NSArray<DreisamGlucoseModel *> *glucoseModelAry) {
}];
```

## Real-Time Data

```objective-c
[[DreisamLibManage shareLib].bleManage realTimeDataCallBack:^(DreisamGlucoseModel *glucoseModel) {
}];
```
