# FAQ

## Why is there a discrepancy in retrieved time when logging in from different phones?

Because the device reports minute-level counts, converting them into exact timestamps introduces error.

## Why is the interval between historical data and real-time data sometimes not 3 minutes?

The device counts in minutes and may accumulate timing drift over time, which affects the timestamps calculated by the SDK.

## Why is glucose data time inaccurate after logging in on another phone?

The device may have restarted, and the time data before the restart may no longer be accurate.

## Why does a new phone fetch all data instead of only the latest unsynced data?

The SDK on a new device has no local history cache, so it fetches the full dataset from the device.
