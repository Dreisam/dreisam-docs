# iOS SDK Integration Guide

This guide explains how to integrate `DreisamLibPro` into an iOS project and complete the basic setup.

## Requirements

- Minimum version: `iOS 11`
- Development environment: `Xcode`
- Delivery format: `DreisamLibPro.framework`

## Download the SDK

> [DreisamLibPro-iOS](https://github.com/Dreisam/DreisamLibPro-iOS)

Repository contents:

- `Demo`: sample project
- `DreisamLib`: `DreisamLibPro.framework`

## Integration Steps

### 1. Add the Framework

Add `DreisamLibPro.framework` to your Xcode project and make sure the target links it correctly.

### 2. Configure Bluetooth Permissions

Add the following keys to `Info.plist`:

- `Privacy - Bluetooth Peripheral Usage Description`
- `Privacy - Bluetooth Always Usage Description`

### 3. Initialize the SDK

```objective-c
DreisamBuilderParam *builder = DreisamBuilderParam.new;
builder.hideLog = NO;
builder.appId = @"******";
[[DreisamLibManage shareLib] initSDKBuilderParam:builder];
```

### 4. User Login

```objective-c
[DreisamLibManage.shareLib
    loginUserToken:token
         callback:^(DreisamEnumState state, DreisamDeviceModel * _Nonnull deviceModel) {
         }];
```

### 5. Bind or Connect Device

See [DreisamLib API](./dreisamlib-api) for the full interface details.
