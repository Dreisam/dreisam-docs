# FAQ

## Why is there a discrepancy in the retrieved time when logging in from different mobile phones?

Because the device reports minute-level counts, there will be errors when converting these counts into specific times.

Recommendation: When displaying time to users, adopt a minute-level display format, for example `11:22`.

## Why is the interval between retrieved historical data and real-time reported data sometimes not 3 minutes?

The core reason is that the device's counting is at the minute level, and the device's own counting also has errors. The longer the device runs, the larger the error may be, which will also cause errors when the SDK calculates time based on the device's counting, and ultimately make the data interval deviate from `3` minutes.

## Why is the time of the retrieved blood glucose data inaccurate sometimes after logging in from different mobile phones?

It is most likely that the device has been restarted, and the time data before the restart will no longer be accurate.

Solution: Developers can discard the historical data before that time point according to the last saved time on the server.

## Why is all data updated instead of the latest unupdated data after logging in from different mobile phones?

After logging in with a new mobile phone, the SDK on the new device has no historical data cache, so it will retrieve all data from the device.

Solution: Developers can discard the historical data before that time point according to the last saved time on the server, and only retain the latest unupdated data.
