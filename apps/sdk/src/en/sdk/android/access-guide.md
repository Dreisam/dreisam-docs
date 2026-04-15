# Android Access Guide

This document is the standard integration guide for **DreisamSDK** on Android. It assumes the reader is familiar with Android Studio and basic Android development.

## Demo Download

> [Download SDK](https://github.com/Dreisam/Dreisam_Off_Android)

- `Demo` folder: Contains a complete Android project demonstrating the basic usage of the SDK.
- `libs` folder: Contains the `DreisamLib` library file.

## Android Version Requirement

The SDK currently supports `Android 8.0` and above.

## Integration Steps

1. Unzip `DreisamDemo V X.X.X.rar`.
2. Copy `libs/DreisamLib-release_xxx.aar` into your project `libs/` directory.
3. Add `implementation(files("libs/DreisamLib-release_1.0.1_2512311723.aar"))` to the `dependencies` block.

## Full `build.gradle` Example

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

## Basic Permissions

Add the following permissions to your `AndroidManifest.xml`:

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

## ProGuard Rules

Add the following rule to `proguard-rules.pro`:

```text
-keep class com.dreisamlib.lib.* {*;}
```
