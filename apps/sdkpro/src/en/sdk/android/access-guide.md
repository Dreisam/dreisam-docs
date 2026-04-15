# Android SDK Integration Guide

This guide explains how to integrate `DreisamLib` into an Android project and complete the basic setup.

## Requirements

- Minimum version: `Android 8.0 / API 26`
- Development environment: `Android Studio`
- JDK: `Java 17`

## Download the SDK

> [DreisamLibPro-Android](https://github.com/Dreisam/DreisamLibPro-Android)

Repository contents:

- `Demo`: sample project
- `libs`: `DreisamLib-release_xxx.aar`

## Integration Steps

### 1. Add the AAR

```text
dependencies {
    implementation(files("libs/DreisamLib-release_xxx.aar"))
}
```

### 2. Configure Permissions

Add the required Bluetooth and location permissions in `AndroidManifest.xml`.

### 3. Configure ProGuard

```text
-keep class com.dreisamlib.lib.* {*;}
```

### 4. Initialize the SDK

See [DreisamLib API](./dreisamlib-api) for the full interface details.
