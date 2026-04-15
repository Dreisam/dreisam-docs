# Android 接入指南

本文档为 **DreisamSDK** 的 Android 平台标准集成指南，默认读者已熟悉 Android Studio 的基本操作，并具备一定的 Android 编程基础。

## 示例工程下载

> [下载 SDK](https://github.com/Dreisam/Dreisam_Off_Android)

- `Demo` 文件夹：包含完整的 Android 项目，演示 SDK 的基础用法，可供开发参考。
- `libs` 文件夹：内含 `DreisamLib` 库文件。

## Android SDK 版本要求

当前 SDK 仅支持 `Android 8.0` 及以上版本。

## 项目配置及集成步骤

1. 解压集成压缩包 `DreisamDemo V X.X.X.rar`。
2. 将文件 `libs/DreisamLib-release_xxx.aar` 复制到工程的 `libs/` 目录下。
3. 修改工程的 `dependencies` 配置，添加 `implementation(files("libs/DreisamLib-release_1.0.1_2512311723.aar"))`。

## 完整的 `build.gradle` 配置文件

```kotlin
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

    buildTypes {
        release {
            isShrinkResources = true
            isMinifyEnabled = true
            isDebuggable = false
            proguardFiles(
                getDefaultProguardFile("proguard-android-optimize.txt"),
                "proguard-rules.pro",
            )
        }
        debug {
            isShrinkResources = false
            isMinifyEnabled = false
            isDebuggable = true
            proguardFiles(
                getDefaultProguardFile("proguard-android-optimize.txt"),
                "proguard-rules.pro",
            )
        }
    }

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }
}

dependencies {
    implementation(files("libs/DreisamLib-release_1.0.1_2512311723.aar"))

    implementation("androidx.activity:activity:1.8.0")
    implementation("androidx.core:core-ktx:1.8.0")
    implementation("androidx.appcompat:appcompat:1.6.1")
    implementation("com.google.android.material:material:1.8.0")
    implementation("androidx.constraintlayout:constraintlayout:2.1.4")
    implementation("com.google.code.gson:gson:2.13.2")
    implementation("me.dm7.barcodescanner:zxing:1.9.4")
    implementation("com.github.getActivity:XXPermissions:26.0")
    implementation("androidx.room:room-runtime:2.6.1")
    implementation("androidx.room:room-ktx:2.6.1")
    kapt("androidx.room:room-compiler:2.6.1")
}
```

## 添加基础权限

在 `AndroidManifest.xml` 文件中添加以下权限声明：

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

## 混淆规则设置

在工程的混淆配置文件 `proguard-rules.pro` 中添加以下规则：

```text
-keep class com.dreisamlib.lib.* {*;}
```
