# Jitsi Meet library with NPM and TypeScript support

This is a wrapper of [lib-jitsi-meet](https://github.com/jitsi/lib-jitsi-meet) library with couple of improvements and bug fixes for better integration with NPM, Webpack and TypeScript.

We try to do as minimum changes as possible to make the updates as easy and frequent as possible.

## Versioning

We follow semantic versioning with one exception. The last number (patch) is version of the original Jitsi library, so you know exactly what is included. The number is part of the tag from [Jitsi repository](https://github.com/jitsi/lib-jitsi-meet).

For example:

Joinera version `1.0` + Jitsi tag `v1599.0.0+5d27f73a` = NPM package version `1.0.1599`


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


## Building and publishing the npm package

1. Build the package and generate TypeScript types
```bash
npm run prepack:types
```

2. Check generated types and discard unwanted changes

3. Publish the package
```bash
npm run release
```

Note: Calling `npm publish` calls also `npm prepack` and we don't want to regenerate TS types at this stage because it will overwrite our changes. Therefore scripts for generating TS types are separated.