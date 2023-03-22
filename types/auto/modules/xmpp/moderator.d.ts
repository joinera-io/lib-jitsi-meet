/**
 *
 * @param roomName
 * @param xmpp
 * @param emitter
 * @param options
 */
export default function Moderator(roomName: any, xmpp: any, emitter: any, options: any): void;
export default class Moderator {
    /**
     *
     * @param roomName
     * @param xmpp
     * @param emitter
     * @param options
     */
    constructor(roomName: any, xmpp: any, emitter: any, options: any);
    roomName: any;
    getNextTimeout: (reset: any) => number;
    getNextErrorTimeout: (reset: any) => number;
    options: any;
    externalAuthEnabled: boolean;
    sipGatewayEnabled: boolean;
    eventEmitter: any;
    connection: any;
    targetJid: any;
    targetUrl: any;
    mode: string;
    focusUserJids: Set<any>;
    isFocusJid(jid: any): boolean;
    isExternalAuthEnabled(): boolean;
    isSipGatewayEnabled(): boolean;
    /**
     * Create a conference request based on the configured options and saved Settings.
     *
     * A conference request has the following format:
     * {
     *   room: "room@example.com",
     *   sessionId: "foo", // optional
     *   machineUdi: "bar", // optional
     *   identity: "baz", // optional
     *   properties: { } // map string to string
     * }
     *
     * It can be encoded in either JSON or and IQ.
     *
     * @returns the created conference request.
     */
    _createConferenceRequest(): {
        properties: {
            startAudioMuted: any;
            startVideoMuted: any;
            rtcstatsEnabled: boolean;
        };
        machineUid: string;
        room: any;
    };
    /**
     * Create a conference request and encode it as an IQ.
     */
    _createConferenceIq(): any;
    _parseConferenceIq(resultIq: any): {
        properties: {};
    };
    /**
     * Allocates the conference focus.
     *
     * @param {Function} callback - the function to be called back upon the
     * successful allocation of the conference focus
     * @returns {Promise} - Resolved when Jicofo allows to join the room. It's never
     * rejected and it'll keep on pinging Jicofo forever.
     */
    sendConferenceRequest(): Promise<any>;
    _handleSuccess(conferenceRequest: any, callback: any): void;
    _handleError(sessionError: any, notAuthorized: any, callback: any): void;
    /**
     * Invoked by {@link #sendConferenecRequest} upon its request receiving an
     * error result.
     *
     * @param error - the error result of the request that {@link sendConferenceRequest} sent
     * @param {Function} callback - the function to be called back upon the
     * successful allocation of the conference focus
     */
    _handleIqError(error: any, callback: Function): void;
    /**
     * Invoked by {@link #sendConferenecRequest} upon its request receiving a
     * success (i.e. non-error) result.
     *
     * @param result - the success (i.e. non-error) result of the request that {@link #sendConferenecRequest} sent
     * @param {Function} callback - the function to be called back upon the
     * successful allocation of the conference focus
     */
    _handleIqSuccess(result: any, callback: Function): void;
    authenticate(): Promise<any>;
    getLoginUrl(urlCallback: any, failureCallback: any): void;
    /**
     *
     * @param {boolean} popup false for {@link Moderator#getLoginUrl} or true for
     * {@link Moderator#getPopupLoginUrl}
     * @param urlCb
     * @param failureCb
     */
    _getLoginUrl(popup: boolean, urlCb: any, failureCb: any): void;
    getPopupLoginUrl(urlCallback: any, failureCallback: any): void;
    logout(callback: any): void;
}
