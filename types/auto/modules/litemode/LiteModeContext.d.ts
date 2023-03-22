/**
 * This module implements a discard-all insertable stream.  Use to reduce decoder CPU load for testing.
 */
export class LiteModeContext {
    /**
     * A constructor.
     * @param {JitsiConference} conference - The conference instance for which lite mode is to be enabled.
     */
    constructor(conference: any);
    enabled: boolean;
    /**
     * Setup Lite Mode for a track.
     *
     * @private
     */
    private _setupLiteModeForTrack;
}
