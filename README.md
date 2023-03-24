# Jitsi Meet API library with NPM and TypeScript support

## This package is currently in BETA.

This is a NPM wrapper of [lib-jitsi-meet](https://github.com/jitsi/lib-jitsi-meet) library with couple of improvements and bug fixes for better integration with Webpack and TypeScript.

## Installation

```bash
npm i --save @joinera/lib-jitsi-meet
```

## Imports

TypeScript types are stored in `@joinera/lib-jitsi-meet/types/auto/` folder.

Import examples
```TypeScript
import JitsiMeetJS from "@joinera/lib-jitsi-meet"
import JitsiLocalTrack from "@joinera/lib-jitsi-meet/types/auto/modules/RTC/JitsiLocalTrack"
import { MediaType } from "@joinera/lib-jitsi-meet/types/auto/service/RTC/MediaType"
import { JitsiConnectionEvents } from "@joinera/lib-jitsi-meet/types/auto/JitsiConnectionEvents"
```
