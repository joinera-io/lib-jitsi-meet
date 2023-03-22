export const HD_BITRATE: 2500000;
export const HD_SCALE_FACTOR: 1;
export const LD_SCALE_FACTOR: 4;
export const SD_SCALE_FACTOR: 2;
export const SIM_LAYER_RIDS: string[];
/**
 * Handles track related operations on TraceablePeerConnection when browser is
 * running in unified plan mode.
 */
export class TPCUtils {
    /**
     * Creates a new instance for a given TraceablePeerConnection
     *
     * @param peerconnection - the tpc instance for which we have utility functions.
     */
    constructor(peerconnection: any);
    pc: any;
    videoBitrates: any;
    encodingBitrates: any;
    /**
     * Obtains stream encodings that need to be configured on the given track based
     * on the track media type and the simulcast setting.
     * @param {JitsiLocalTrack} localTrack
     */
    _getStreamEncodings(localTrack: any): {
        active: any;
        maxBitrate: any;
        rid: string;
        scaleResolutionDownBy: number;
    }[] | {
        active: any;
        maxBitrate: any;
    }[] | {
        active: any;
    }[];
    /**
     * The startup configuration for the stream encodings that are applicable to
     * the video stream when a new sender is created on the peerconnection. The initial
     * config takes into account the differences in browser's simulcast implementation.
     *
     * Encoding parameters:
     * active - determine the on/off state of a particular encoding.
     * maxBitrate - max. bitrate value to be applied to that particular encoding
     *  based on the encoding's resolution and config.js videoQuality settings if applicable.
     * rid - Rtp Stream ID that is configured for a particular simulcast stream.
     * scaleResolutionDownBy - the factor by which the encoding is scaled down from the
     *  original resolution of the captured video.
     *
     *  @param {VideoType} videoType
     */
    _getVideoStreamEncodings(videoType: VideoType): {
        active: any;
        maxBitrate: any;
        rid: string;
        scaleResolutionDownBy: number;
    }[];
    /**
     * Ensures that the ssrcs associated with a FID ssrc-group appear in the correct order, i.e.,
     * the primary ssrc first and the secondary rtx ssrc later. This is important for unified
     * plan since we have only one FID group per media description.
     * @param {Object} description the webRTC session description instance for the remote
     * description.
     * @private
     */
    private ensureCorrectOrderOfSsrcs;
    /**
     * Returns the transceiver associated with a given RTCRtpSender/RTCRtpReceiver.
     *
     * @param {string} mediaType - type of track associated with the transceiver 'audio' or 'video'.
     * @param {JitsiLocalTrack} localTrack - local track to be used for lookup.
     * @returns {RTCRtpTransceiver}
     */
    findTransceiver(mediaType: string, localTrack?: any): RTCRtpTransceiver;
    /**
     * Takes in a *unified plan* offer and inserts the appropriate
     * parameters for adding simulcast receive support.
     * @param {Object} desc - A session description object
     * @param {String} desc.type - the type (offer/answer)
     * @param {String} desc.sdp - the sdp content
     *
     * @return {Object} A session description (same format as above) object
     * with its sdp field modified to advertise simulcast receive support
     */
    insertUnifiedPlanSimulcastReceive(desc: {
        type: string;
        sdp: string;
    }): any;
    /**
    * Adds {@link JitsiLocalTrack} to the WebRTC peerconnection for the first time.
    * @param {JitsiLocalTrack} track - track to be added to the peerconnection.
    * @param {boolean} isInitiator - boolean that indicates if the endpoint is offerer in a p2p connection.
    * @returns {void}
    */
    addTrack(localTrack: any, isInitiator: boolean): void;
    /**
     * Returns the calculated active state of the simulcast encodings based on the frame height requested for the send
     * stream. All the encodings that have a resolution lower than the frame height requested will be enabled.
     *
     * @param {JitsiLocalTrack} localVideoTrack The local video track.
     * @param {number} newHeight The resolution requested for the video track.
     * @returns {Array<boolean>}
     */
    calculateEncodingsActiveState(localVideoTrack: any, newHeight: number): Array<boolean>;
    /**
     * Returns the calculates max bitrates that need to be configured on the simulcast encodings based on the video
     * type and other considerations associated with screenshare.
     *
     * @param {JitsiLocalTrack} localVideoTrack The local video track.
     * @returns {Array<number>}
     */
    calculateEncodingsBitrates(localVideoTrack: any): Array<number>;
    /**
     * Returns the max resolution that the client is configured to encode for a given local video track. The actual
     * send resolution might be downscaled based on cpu and bandwidth constraints.
     *
     * @param {JitsiLocalTrack} localVideoTrack - The local video track.
     * @returns {number} The max encoded resolution for the given video track.
     */
    getConfiguredEncodeResolution(localVideoTrack: any): number;
    /**
     * Replaces the existing track on a RTCRtpSender with the given track.
     *
     * @param {JitsiLocalTrack} oldTrack - existing track on the sender that needs to be removed.
     * @param {JitsiLocalTrack} newTrack - new track that needs to be added to the sender.
     * @returns {Promise<RTCRtpTransceiver>} - resolved with the associated transceiver when done, rejected otherwise.
     */
    replaceTrack(oldTrack: any, newTrack: any): Promise<RTCRtpTransceiver>;
    /**
     * Set the simulcast stream encoding properties on the RTCRtpSender.
     * @param {JitsiLocalTrack} track - the current track in use for which
     * the encodings are to be set.
     * @returns {Promise<void>} - resolved when done.
     */
    setEncodings(track: any): Promise<void>;
    /**
     * Resumes or suspends media on the peerconnection by setting the active state on RTCRtpEncodingParameters
     * associated with all the senders that have a track attached to it.
     *
     * @param {boolean} enable - whether media needs to be enabled or suspended.
     * @returns {Promise} - A promise that is resolved when the change is succesful on all the senders, rejected
     * otherwise.
     */
    setMediaTransferActive(enable: boolean): Promise<any>;
    /**
     * Enables/disables video media transmission on the peer connection. When disabled the SDP video media direction in
     * the local SDP will be adjusted to 'inactive' which means that no data will be sent nor accepted, but the
     * connection should be kept alive. This is used for setting lastn=0 on p2p connection.
     *
     * @param {boolean} active - true to enable media transmission or false to disable.
     * @returns {void}
     */
    setVideoTransferActive(active: boolean): void;
    /**
     * Ensures that the resolution of the stream encodings are consistent with the values
     * that were configured on the RTCRtpSender when the source was added to the peerconnection.
     * This should prevent us from overriding the default values if the browser returns
     * erroneous values when RTCRtpSender.getParameters is used for getting the encodings info.
     * @param {JitsiLocalTrack} localVideoTrack The local video track.
     * @param {Object} parameters - the RTCRtpEncodingParameters obtained from the browser.
     * @returns {void}
     */
    updateEncodingsResolution(localVideoTrack: any, parameters: any): void;
}
import { VideoType } from "../../service/RTC/VideoType";
