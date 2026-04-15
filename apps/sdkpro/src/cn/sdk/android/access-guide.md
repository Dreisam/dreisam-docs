# Android SDK 接入指南

本文档说明如何将 `DreisamLib` 集成到 Android 项目中，并完成基础配置。

## 环境要求

- 最低系统版本：`Android 8.0 / API 26`
- 开发环境：`Android Studio`
- JDK：`Java 17`

## 下载 SDK

SDK 仓库地址：

> [DreisamLibPro-Android](https://github.com/Dreisam/DreisamLibPro-Android)

仓库中包含以下内容：

- `Demo`：完整示例工程
- `libs`：包含 `DreisamLib-release_xxx.aar`

## 接入步骤

### 1. 添加 AAR

将 `libs/DreisamLib-release_xxx.aar` 复制到业务工程的 `libs/` 目录，并在 `dependencies` 中引用：

```text
dependencies {
    implementation(files("libs/DreisamLib-release_xxx.aar"))
}
```

### 2. 配置 `build.gradle`

```text
plugins {
    id("com.android.application")
    id("org.jetbrains.kotlin.android")
    id("org.jetbrains.kotlin.kapt")
}

android {
    namespace = "com.dreisamlib.demo"
    compileSdk = 35

    defaultConfig {
        applicationId = "com.dreisam.demo"
        minSdk = 26
        targetSdk = 36
        versionCode = 1
        versionName = "1.0"
    }
}

dependencies {
    implementation(files("libs/DreisamLib-release_xxx.aar"))
    implementation("androidx.work:work-runtime-ktx:2.9.1")
    implementation("androidx.activity:activity:1.8.0")
    implementation("androidx.core:core-ktx:1.8.0")
    implementation("androidx.appcompat:appcompat:1.6.1")
    implementation("com.google.android.material:material:1.8.0")
    implementation("androidx.constraintlayout:constraintlayout:2.1.4")
    implementation("com.google.code.gson:gson:2.13.2")
    implementation("me.dm7.barcodescanner:zxing:1.9.4")
    implementation("com.github.getActivity:XXPermissions:26.0")
}
```

### 3. 添加蓝牙与定位权限

在 `AndroidManifest.xml` 中声明以下权限：

```xml
<uses-permission android:name="android.permission.BLUETOOTH" />
<uses-permission android:name="android.permission.BLUETOOTH_ADMIN" />
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_BACKGROUND_LOCATION" />
<uses-permission
    android:name="android.permission.BLUETOOTH_SCAN"
    android:usesPermissionFlags="neverForLocation" />
<uses-permission android:name="android.permission.BLUETOOTH_CONNECT" />
```

### 4. 配置混淆

在 `proguard-rules.pro` 中添加：

```text
-keep class com.dreisamlib.lib.* {*;}
```

### 5. 初始化 SDK

完整能力见 [DreisamLib API](./dreisamlib-api)。

## 说明

原始 Android 接入文档里的图片资源没有包含在当前仓库，因此这里统一改为文字化步骤。
