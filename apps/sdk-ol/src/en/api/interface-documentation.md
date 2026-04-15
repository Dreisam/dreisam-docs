# Interface Documentation

## Overview

`DreisamLibPro` provides device connection management, data synchronization, and historical data retrieval.

## Public Classes

- `DreisamLib`
- `DreisamLibManage`
- `DreisamBuilderParam`
- `BleManage`
- `DreisamGlucoseModel`
- `DreisamDeviceModel`
- `DreisamEnum`

## Main Interfaces

```objective-c
[[DreisamLibManage shareLib] initSDKBuilderParam:builder];
[DreisamLibManage.shareLib loginUserToken:token callback:^(DreisamEnumState state, DreisamDeviceModel * _Nonnull deviceModel) {}];
[DreisamLibManage.shareLib logout];
[DreisamLibManage.shareLib.bleManage bindDevice:result processProgress:^(DreisamBindingProcessState state) {} successCallback:^(DreisamDeviceModel *deviceModel) {} errorCallback:^(NSInteger code, NSString *msg) {}];
[DreisamLibManage.shareLib.bleManage connectDeviceCallback:^(DreisamEnumState state) {}];
```
