# API 接入指南

本文档基于 `DreisamAPIPro` 原始接入文档整理，用于说明 API 相关的基础接入要求。

## 环境要求

- 最低系统版本：`iOS 11`
- 开发环境：`Xcode`
- 交付形式：`DreisamLibPro.framework`

## 下载 SDK

> [DreisamLibPro-iOS](https://github.com/Dreisam/DreisamLibPro-iOS)

仓库中包含：

- `Demo`：示例工程
- `DreisamLib`：`DreisamLibPro.framework`

## 接入步骤

### 1. 添加 Framework

将 `DreisamLibPro.framework` 加入工程并完成链接。

### 2. 配置 `Info.plist`

增加以下权限说明：

- `Privacy - Bluetooth Peripheral Usage Description`
- `Privacy - Bluetooth Always Usage Description`

### 3. 初始化 SDK

```objective-c
DreisamBuilderParam *builder = DreisamBuilderParam.new;
builder.hideLog = NO;
builder.appId = @"******";
[[DreisamLibManage shareLib] initSDKBuilderParam:builder];
```

## 说明

原始文档中的截图资源未随仓库提供，因此这里改为结构化文字说明。
