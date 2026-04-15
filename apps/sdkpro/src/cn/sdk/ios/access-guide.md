# iOS SDK 接入指南

本文档说明如何将 `DreisamLibPro` 集成到 iOS 项目中，并完成基础初始化。

## 环境要求

- 最低系统版本：`iOS 11`
- 开发环境：`Xcode`
- 交付形式：`DreisamLibPro.framework`

## 下载 SDK

SDK 仓库地址：

> [DreisamLibPro-iOS](https://github.com/Dreisam/DreisamLibPro-iOS)

仓库中包含以下内容：

- `Demo`：完整示例工程，可用于了解标准接入流程。
- `DreisamLib`：包含 `DreisamLibPro.framework`。

## 接入步骤

### 1. 添加 Framework

将 `DreisamLibPro.framework` 加入 Xcode 工程，并确认目标 Target 已正确链接。

### 2. 配置蓝牙权限

在 `Info.plist` 中增加以下权限说明：

- `Privacy - Bluetooth Peripheral Usage Description`
- `Privacy - Bluetooth Always Usage Description`

### 3. 初始化 SDK

```objective-c
DreisamBuilderParam *builder = DreisamBuilderParam.new;
builder.hideLog = NO;
builder.appId = @"******";
[[DreisamLibManage shareLib] initSDKBuilderParam:builder];
```

参数说明：

- `hideLog`：是否隐藏 SDK 日志，默认 `NO`
- `appId`：开放平台生成的应用标识

### 4. 用户登录

```objective-c
[DreisamLibManage.shareLib
    loginUserToken:token
         callback:^(DreisamEnumState state, DreisamDeviceModel * _Nonnull deviceModel) {
         }];
```

### 5. 绑定或连接设备

登录成功后，再继续执行绑定、连接和数据同步。完整能力见 [DreisamLib API](./dreisamlib-api)。

## 推荐顺序

1. 下载 SDK 并导入 `DreisamLibPro.framework`
2. 配置 `Info.plist` 蓝牙权限
3. 初始化 SDK
4. 使用 `token` 登录
5. 绑定设备
6. 连接设备
7. 监听状态与数据回调

## 说明

原始接入文档中的图片使用的是本地绝对路径，当前仓库未提供对应资源，因此这里保留为文字化步骤。
