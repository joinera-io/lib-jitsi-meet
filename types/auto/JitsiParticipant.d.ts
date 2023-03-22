/**
 * Represents a participant in (i.e. a member of) a conference.
 */
export default class JitsiParticipant {
    /**
     * Initializes a new JitsiParticipant instance.
     *
     * @constructor
     * @param jid the conference XMPP jid
     * @param conference
     * @param displayName
     * @param {Boolean} hidden - True if the new JitsiParticipant instance is to
     * represent a hidden participant; otherwise, false.
     * @param {string} statsID - optional participant statsID
     * @param {string} status - the initial status if any.
     * @param {object} identity - the xmpp identity
     * @param {boolean?} isReplacing - whether this is a participant replacing another into the meeting.
     * @param {boolean?} isReplaced - whether this is a participant to be kicked and replaced into the meeting.
     */
    constructor(jid: any, conference: any, displayName: any, hidden: boolean, statsID: string, status: string, identity: object, isReplacing: boolean | null, isReplaced: boolean | null);
    _jid: any;
    _id: any;
    _conference: any;
    _displayName: any;
    _supportsDTMF: boolean;
    _tracks: any[];
    _role: string;
    _status: string;
    _hidden: boolean;
    _statsID: string;
    _properties: {};
    _identity: any;
    _isReplacing: boolean;
    _isReplaced: boolean;
    _features: Set<any>;
    /**
     * Remote sources associated with the participant in the following format.
     * Map<mediaType, Map<sourceName, sourceInfo>>
     *
     * mediaType - 'audio' or 'video'.
     * sourceName - name of the remote source.
     * sourceInfo: {
     *   muted: boolean;
     *   videoType: string;
     * }
     */
    _sources: Map<any, any>;
    /**
     * Determines whether all JitsiTracks which are of a specific MediaType and which belong to this
     * JitsiParticipant are muted.
     *
     * @param {MediaType} mediaType - The MediaType of the JitsiTracks to be checked.
     * @private
     * @returns {Boolean} True if all JitsiTracks which are of the specified mediaType and which belong to this
     * JitsiParticipant are muted; otherwise, false.
     */
    private _isMediaTypeMuted;
    /**
     * Sets source info.
     * @param {MediaType} mediaType The media type, 'audio' or 'video'.
     * @param {boolean} muted The new muted state.
     * @param {string} sourceName The name of the source.
     * @param {string} videoType The video type of the source.
     * @returns {void}
     */
    _setSources(mediaType: MediaType, muted: boolean, sourceName: string, videoType: string): void;
    /**
     * Returns the bot type for the participant.
     *
     * @returns {string|undefined} - The bot type of the participant.
     */
    getBotType(): string | undefined;
    /**
     * @returns {JitsiConference} The conference that this participant belongs
     * to.
     */
    getConference(): any;
    /**
     * Returns the connection jid for the participant.
     *
     * @returns {string|undefined} - The connection jid of the participant.
     */
    getConnectionJid(): string | undefined;
    /**
     * @returns {String} The human-readable display name of this participant.
     */
    getDisplayName(): string;
    /**
     * Returns a set with the features for the participant.
     * @returns {Promise<Set<String>, Error>}
     */
    getFeatures(): Promise<Set<string>, Error>;
    /**
     * @returns {String} The ID of this participant.
     */
    getId(): string;
    /**
     * @returns {String} The JID of this participant.
     */
    getJid(): string;
    /**
     * Gets the value of a property of this participant.
     */
    getProperty(name: any): any;
    /**
     * @returns {String} The role of this participant.
     */
    getRole(): string;
    /**
     * Returns the sources associated with this participant.
     * @returns Map<string, Map<string, Object>>
     */
    getSources(): Map<any, any>;
    /**
     * @returns {String} The stats ID of this participant.
     */
    getStatsID(): string;
    /**
     * @returns {String} The status of the participant.
     */
    getStatus(): string;
    /**
     * @returns {Array.<JitsiTrack>} The list of media tracks for this
     * participant.
     */
    getTracks(): Array<any>;
    /**
     * @param {MediaType} mediaType
     * @returns {Array.<JitsiTrack>} an array of media tracks for this
     * participant, for given media type.
     */
    getTracksByMediaType(mediaType: MediaType): Array<any>;
    /**
     * Checks current set features.
     * @param {String} feature - the feature to check.
     * @return {boolean} <tt>true</tt> if this <tt>participant</tt> contains the
     * <tt>feature</tt>.
     */
    hasFeature(feature: string): boolean;
    /**
     * @returns {Boolean} Whether this participant has muted their audio.
     */
    isAudioMuted(): boolean;
    /**
     * @returns {Boolean} Whether this participant is a hidden participant. Some
     * special system participants may want to join hidden (like for example the
     * recorder).
     */
    isHidden(): boolean;
    /**
     * @returns {Boolean} Whether this participant is a hidden participant. Some
     * special system participants may want to join hidden (like for example the
     * recorder).
     */
    isHiddenFromRecorder(): boolean;
    /**
     * @returns {Boolean} Whether this participant is a moderator or not.
     */
    isModerator(): boolean;
    /**
     * @returns {Boolean} Wheter this participants will be replaced by another
     * participant in the meeting.
     */
    isReplaced(): boolean;
    /**
     * @returns {Boolean} Whether this participant replaces another participant
     * from the meeting.
     */
    isReplacing(): boolean;
    /**
     * @returns {Boolean} Whether this participant has muted their video.
     */
    isVideoMuted(): boolean;
    /**
     * Sets the bot type for the participant.
     * @param {String} newBotType - The new bot type to set.
     */
    setBotType(newBotType: string): void;
    _botType: string;
    /**
     * Sets the connection jid for the participant.
     * @param {String} newJid - The connection jid to set.
     */
    setConnectionJid(newJid: string): void;
    _connectionJid: string;
    /**
     * Set new features.
     * @param {Set<String>|undefined} newFeatures - Sets new features.
     */
    setFeatures(newFeatures: Set<string> | undefined): void;
    /**
     * Sets whether participant is being replaced by another based on jwt.
     * @param {boolean} newIsReplaced - whether is being replaced.
     */
    setIsReplaced(newIsReplaced: boolean): void;
    /**
     * Sets whether participant is replacing another based on jwt.
     * @param {String} newIsReplacing - whether is replacing.
     */
    setIsReplacing(newIsReplacing: string): void;
    /**
     * Sets the value of a property of this participant, and fires an event if
     * the value has changed.
     * @name the name of the property.
     * @value the value to set.
     */
    setProperty(name: any, value: any): void;
    /**
     * Sets a new participant role.
     * @param {String} newRole - the new role.
     */
    setRole(newRole: string): void;
    /**
     *
     */
    supportsDTMF(): boolean;
}
import { MediaType } from "./service/RTC/MediaType";
