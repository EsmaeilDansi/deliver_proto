import { BinaryReader, BinaryWriter } from 'google-protobuf';
export var SettingsAvailabilityStatus;
(function (SettingsAvailabilityStatus) {
    SettingsAvailabilityStatus[SettingsAvailabilityStatus["ALL"] = 0] = "ALL";
    SettingsAvailabilityStatus[SettingsAvailabilityStatus["NO_ONE"] = 1] = "NO_ONE";
    SettingsAvailabilityStatus[SettingsAvailabilityStatus["CONTACT"] = 2] = "CONTACT";
})(SettingsAvailabilityStatus || (SettingsAvailabilityStatus = {}));
/**
 * Message implementation for proto.pub.v1.models.MuteSettings
 */
export class MuteSettings {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of MuteSettings to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.isAllMuted = _value.isAllMuted;
        MuteSettings.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new MuteSettings();
        MuteSettings.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.isAllMuted = _instance.isAllMuted || false;
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.isAllMuted = _reader.readBool();
                    break;
                default:
                    _reader.skipField();
            }
        }
        MuteSettings.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.isAllMuted) {
            _writer.writeBool(1, _instance.isAllMuted);
        }
    }
    get isAllMuted() {
        return this._isAllMuted;
    }
    set isAllMuted(value) {
        this._isAllMuted = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        MuteSettings.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            isAllMuted: this.isAllMuted
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            isAllMuted: this.isAllMuted
        };
    }
}
MuteSettings.id = 'proto.pub.v1.models.MuteSettings';
/**
 * Message implementation for proto.pub.v1.models.Settings
 */
export class Settings {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Settings to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.lastSeenAvailabilityStatus = _value.lastSeenAvailabilityStatus;
        this.callAvailabilityStatus = _value.callAvailabilityStatus;
        Settings.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new Settings();
        Settings.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.lastSeenAvailabilityStatus =
            _instance.lastSeenAvailabilityStatus || 0;
        _instance.callAvailabilityStatus = _instance.callAvailabilityStatus || 0;
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.lastSeenAvailabilityStatus = _reader.readEnum();
                    break;
                case 2:
                    _instance.callAvailabilityStatus = _reader.readEnum();
                    break;
                default:
                    _reader.skipField();
            }
        }
        Settings.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.lastSeenAvailabilityStatus) {
            _writer.writeEnum(1, _instance.lastSeenAvailabilityStatus);
        }
        if (_instance.callAvailabilityStatus) {
            _writer.writeEnum(2, _instance.callAvailabilityStatus);
        }
    }
    get lastSeenAvailabilityStatus() {
        return this._lastSeenAvailabilityStatus;
    }
    set lastSeenAvailabilityStatus(value) {
        this._lastSeenAvailabilityStatus = value;
    }
    get callAvailabilityStatus() {
        return this._callAvailabilityStatus;
    }
    set callAvailabilityStatus(value) {
        this._callAvailabilityStatus = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        Settings.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            lastSeenAvailabilityStatus: this.lastSeenAvailabilityStatus,
            callAvailabilityStatus: this.callAvailabilityStatus
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            lastSeenAvailabilityStatus: SettingsAvailabilityStatus[this.lastSeenAvailabilityStatus === null ||
                this.lastSeenAvailabilityStatus === undefined
                ? 0
                : this.lastSeenAvailabilityStatus],
            callAvailabilityStatus: SettingsAvailabilityStatus[this.callAvailabilityStatus === null ||
                this.callAvailabilityStatus === undefined
                ? 0
                : this.callAvailabilityStatus]
        };
    }
}
Settings.id = 'proto.pub.v1.models.Settings';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MucGIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wcm90by9zcmMvbGliL3B1Yi92MS9tb2RlbHMvc2V0dGluZ3MucGIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV0EsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQWMsTUFBTSxpQkFBaUIsQ0FBQztBQUd6RSxNQUFNLENBQU4sSUFBWSwwQkFJWDtBQUpELFdBQVksMEJBQTBCO0lBQ3BDLHlFQUFPLENBQUE7SUFDUCwrRUFBVSxDQUFBO0lBQ1YsaUZBQVcsQ0FBQTtBQUNiLENBQUMsRUFKVywwQkFBMEIsS0FBMUIsMEJBQTBCLFFBSXJDO0FBQ0Q7O0dBRUc7QUFDSCxNQUFNLE9BQU8sWUFBWTtJQTZEdkI7OztPQUdHO0lBQ0gsWUFBWSxNQUFnRDtRQUMxRCxNQUFNLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFDcEMsWUFBWSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBbEVEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFpQjtRQUN4QyxNQUFNLFFBQVEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3BDLFlBQVksQ0FBQywyQkFBMkIsQ0FBQyxRQUFRLEVBQUUsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUM1RSxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUF1QjtRQUN6QyxTQUFTLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQyxVQUFVLElBQUksS0FBSyxDQUFDO0lBQ3ZELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLDJCQUEyQixDQUNoQyxTQUF1QixFQUN2QixP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QztRQUNsQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQy9DLE9BQU8sTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7T0FFRztJQUNILFFBQVE7UUFDTixPQUFPO1lBQ0wsMEJBQTBCLEVBQUUsSUFBSSxDQUFDLDBCQUEwQjtZQUMzRCxzQkFBc0IsRUFBRSxJQUFJLENBQUMsc0JBQXNCO1NBQ3BELENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxjQUFjO0lBQ1osYUFBYTtJQUNiLE9BQStCO1FBRS9CLE9BQU87WUFDTCwwQkFBMEIsRUFDeEIsMEJBQTBCLENBQ3hCLElBQUksQ0FBQywwQkFBMEIsS0FBSyxJQUFJO2dCQUN4QyxJQUFJLENBQUMsMEJBQTBCLEtBQUssU0FBUztnQkFDM0MsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsQ0FBQyxDQUFDLElBQUksQ0FBQywwQkFBMEIsQ0FDcEM7WUFDSCxzQkFBc0IsRUFDcEIsMEJBQTBCLENBQ3hCLElBQUksQ0FBQyxzQkFBc0IsS0FBSyxJQUFJO2dCQUNwQyxJQUFJLENBQUMsc0JBQXNCLEtBQUssU0FBUztnQkFDdkMsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsQ0FBQyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FDaEM7U0FDSixDQUFDO0lBQ0osQ0FBQzs7QUEvSU0sV0FBRSxHQUFHLDhCQUE4QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGUgKi9cbi8qIGVzbGludC1kaXNhYmxlICovXG4vLyBAdHMtbm9jaGVja1xuLy9cbi8vIFRISVMgSVMgQSBHRU5FUkFURUQgRklMRVxuLy8gRE8gTk9UIE1PRElGWSBJVCEgWU9VUiBDSEFOR0VTIFdJTEwgQkUgTE9TVFxuaW1wb3J0IHtcbiAgR3JwY01lc3NhZ2UsXG4gIFJlY3Vyc2l2ZVBhcnRpYWwsXG4gIFRvUHJvdG9idWZKU09OT3B0aW9uc1xufSBmcm9tICdAbmd4LWdycGMvY29tbW9uJztcbmltcG9ydCB7IEJpbmFyeVJlYWRlciwgQmluYXJ5V3JpdGVyLCBCeXRlU291cmNlIH0gZnJvbSAnZ29vZ2xlLXByb3RvYnVmJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMDAgZnJvbSAnLi4vLi4vLi4vcHViL3YxL21vZGVscy9jYXRlZ29yaWVzLnBiJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMDEgZnJvbSAnLi4vLi4vLi4vcHViL3YxL21vZGVscy91aWQucGInO1xuZXhwb3J0IGVudW0gU2V0dGluZ3NBdmFpbGFiaWxpdHlTdGF0dXMge1xuICBBTEwgPSAwLFxuICBOT19PTkUgPSAxLFxuICBDT05UQUNUID0gMlxufVxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBwcm90by5wdWIudjEubW9kZWxzLk11dGVTZXR0aW5nc1xuICovXG5leHBvcnQgY2xhc3MgTXV0ZVNldHRpbmdzIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAncHJvdG8ucHViLnYxLm1vZGVscy5NdXRlU2V0dGluZ3MnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBNdXRlU2V0dGluZ3MoKTtcbiAgICBNdXRlU2V0dGluZ3MuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBNdXRlU2V0dGluZ3MpIHtcbiAgICBfaW5zdGFuY2UuaXNBbGxNdXRlZCA9IF9pbnN0YW5jZS5pc0FsbE11dGVkIHx8IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogTXV0ZVNldHRpbmdzLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5pc0FsbE11dGVkID0gX3JlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgTXV0ZVNldHRpbmdzLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogTXV0ZVNldHRpbmdzLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLmlzQWxsTXV0ZWQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVCb29sKDEsIF9pbnN0YW5jZS5pc0FsbE11dGVkKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9pc0FsbE11dGVkPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIE11dGVTZXR0aW5ncyB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxNdXRlU2V0dGluZ3MuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMuaXNBbGxNdXRlZCA9IF92YWx1ZS5pc0FsbE11dGVkO1xuICAgIE11dGVTZXR0aW5ncy5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGlzQWxsTXV0ZWQoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2lzQWxsTXV0ZWQ7XG4gIH1cbiAgc2V0IGlzQWxsTXV0ZWQodmFsdWU6IGJvb2xlYW4gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9pc0FsbE11dGVkID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgTXV0ZVNldHRpbmdzLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IE11dGVTZXR0aW5ncy5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzQWxsTXV0ZWQ6IHRoaXMuaXNBbGxNdXRlZFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IE11dGVTZXR0aW5ncy5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzQWxsTXV0ZWQ6IHRoaXMuaXNBbGxNdXRlZFxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgTXV0ZVNldHRpbmdzIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBNdXRlU2V0dGluZ3NcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIGlzQWxsTXV0ZWQ/OiBib29sZWFuO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIE11dGVTZXR0aW5nc1xuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgaXNBbGxNdXRlZD86IGJvb2xlYW47XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBwcm90by5wdWIudjEubW9kZWxzLlNldHRpbmdzXG4gKi9cbmV4cG9ydCBjbGFzcyBTZXR0aW5ncyBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ3Byb3RvLnB1Yi52MS5tb2RlbHMuU2V0dGluZ3MnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBTZXR0aW5ncygpO1xuICAgIFNldHRpbmdzLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogU2V0dGluZ3MpIHtcbiAgICBfaW5zdGFuY2UubGFzdFNlZW5BdmFpbGFiaWxpdHlTdGF0dXMgPVxuICAgICAgX2luc3RhbmNlLmxhc3RTZWVuQXZhaWxhYmlsaXR5U3RhdHVzIHx8IDA7XG4gICAgX2luc3RhbmNlLmNhbGxBdmFpbGFiaWxpdHlTdGF0dXMgPSBfaW5zdGFuY2UuY2FsbEF2YWlsYWJpbGl0eVN0YXR1cyB8fCAwO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogU2V0dGluZ3MsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLmxhc3RTZWVuQXZhaWxhYmlsaXR5U3RhdHVzID0gX3JlYWRlci5yZWFkRW51bSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLmNhbGxBdmFpbGFiaWxpdHlTdGF0dXMgPSBfcmVhZGVyLnJlYWRFbnVtKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBTZXR0aW5ncy5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihfaW5zdGFuY2U6IFNldHRpbmdzLCBfd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoX2luc3RhbmNlLmxhc3RTZWVuQXZhaWxhYmlsaXR5U3RhdHVzKSB7XG4gICAgICBfd3JpdGVyLndyaXRlRW51bSgxLCBfaW5zdGFuY2UubGFzdFNlZW5BdmFpbGFiaWxpdHlTdGF0dXMpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmNhbGxBdmFpbGFiaWxpdHlTdGF0dXMpIHtcbiAgICAgIF93cml0ZXIud3JpdGVFbnVtKDIsIF9pbnN0YW5jZS5jYWxsQXZhaWxhYmlsaXR5U3RhdHVzKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9sYXN0U2VlbkF2YWlsYWJpbGl0eVN0YXR1cz86IFNldHRpbmdzQXZhaWxhYmlsaXR5U3RhdHVzO1xuICBwcml2YXRlIF9jYWxsQXZhaWxhYmlsaXR5U3RhdHVzPzogU2V0dGluZ3NBdmFpbGFiaWxpdHlTdGF0dXM7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBTZXR0aW5ncyB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxTZXR0aW5ncy5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5sYXN0U2VlbkF2YWlsYWJpbGl0eVN0YXR1cyA9IF92YWx1ZS5sYXN0U2VlbkF2YWlsYWJpbGl0eVN0YXR1cztcbiAgICB0aGlzLmNhbGxBdmFpbGFiaWxpdHlTdGF0dXMgPSBfdmFsdWUuY2FsbEF2YWlsYWJpbGl0eVN0YXR1cztcbiAgICBTZXR0aW5ncy5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGxhc3RTZWVuQXZhaWxhYmlsaXR5U3RhdHVzKCk6IFNldHRpbmdzQXZhaWxhYmlsaXR5U3RhdHVzIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbGFzdFNlZW5BdmFpbGFiaWxpdHlTdGF0dXM7XG4gIH1cbiAgc2V0IGxhc3RTZWVuQXZhaWxhYmlsaXR5U3RhdHVzKFxuICAgIHZhbHVlOiBTZXR0aW5nc0F2YWlsYWJpbGl0eVN0YXR1cyB8IHVuZGVmaW5lZFxuICApIHtcbiAgICB0aGlzLl9sYXN0U2VlbkF2YWlsYWJpbGl0eVN0YXR1cyA9IHZhbHVlO1xuICB9XG4gIGdldCBjYWxsQXZhaWxhYmlsaXR5U3RhdHVzKCk6IFNldHRpbmdzQXZhaWxhYmlsaXR5U3RhdHVzIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fY2FsbEF2YWlsYWJpbGl0eVN0YXR1cztcbiAgfVxuICBzZXQgY2FsbEF2YWlsYWJpbGl0eVN0YXR1cyh2YWx1ZTogU2V0dGluZ3NBdmFpbGFiaWxpdHlTdGF0dXMgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9jYWxsQXZhaWxhYmlsaXR5U3RhdHVzID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgU2V0dGluZ3Muc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogU2V0dGluZ3MuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBsYXN0U2VlbkF2YWlsYWJpbGl0eVN0YXR1czogdGhpcy5sYXN0U2VlbkF2YWlsYWJpbGl0eVN0YXR1cyxcbiAgICAgIGNhbGxBdmFpbGFiaWxpdHlTdGF0dXM6IHRoaXMuY2FsbEF2YWlsYWJpbGl0eVN0YXR1c1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IFNldHRpbmdzLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGFzdFNlZW5BdmFpbGFiaWxpdHlTdGF0dXM6XG4gICAgICAgIFNldHRpbmdzQXZhaWxhYmlsaXR5U3RhdHVzW1xuICAgICAgICAgIHRoaXMubGFzdFNlZW5BdmFpbGFiaWxpdHlTdGF0dXMgPT09IG51bGwgfHxcbiAgICAgICAgICB0aGlzLmxhc3RTZWVuQXZhaWxhYmlsaXR5U3RhdHVzID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgOiB0aGlzLmxhc3RTZWVuQXZhaWxhYmlsaXR5U3RhdHVzXG4gICAgICAgIF0sXG4gICAgICBjYWxsQXZhaWxhYmlsaXR5U3RhdHVzOlxuICAgICAgICBTZXR0aW5nc0F2YWlsYWJpbGl0eVN0YXR1c1tcbiAgICAgICAgICB0aGlzLmNhbGxBdmFpbGFiaWxpdHlTdGF0dXMgPT09IG51bGwgfHxcbiAgICAgICAgICB0aGlzLmNhbGxBdmFpbGFiaWxpdHlTdGF0dXMgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyAwXG4gICAgICAgICAgICA6IHRoaXMuY2FsbEF2YWlsYWJpbGl0eVN0YXR1c1xuICAgICAgICBdXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBTZXR0aW5ncyB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgU2V0dGluZ3NcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIGxhc3RTZWVuQXZhaWxhYmlsaXR5U3RhdHVzPzogU2V0dGluZ3NBdmFpbGFiaWxpdHlTdGF0dXM7XG4gICAgY2FsbEF2YWlsYWJpbGl0eVN0YXR1cz86IFNldHRpbmdzQXZhaWxhYmlsaXR5U3RhdHVzO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIFNldHRpbmdzXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBsYXN0U2VlbkF2YWlsYWJpbGl0eVN0YXR1cz86IHN0cmluZztcbiAgICBjYWxsQXZhaWxhYmlsaXR5U3RhdHVzPzogc3RyaW5nO1xuICB9XG59XG4iXX0=