import { BinaryReader, BinaryWriter } from 'google-protobuf';
export var PlatformsType;
(function (PlatformsType) {
    PlatformsType[PlatformsType["ANDROID"] = 0] = "ANDROID";
    PlatformsType[PlatformsType["IOS"] = 1] = "IOS";
    PlatformsType[PlatformsType["MAC_OS"] = 2] = "MAC_OS";
    PlatformsType[PlatformsType["LINUX"] = 3] = "LINUX";
    PlatformsType[PlatformsType["WINDOWS"] = 4] = "WINDOWS";
    PlatformsType[PlatformsType["WEB"] = 5] = "WEB";
})(PlatformsType || (PlatformsType = {}));
export var Applications;
(function (Applications) {
    Applications[Applications["we"] = 0] = "we";
    Applications[Applications["inta"] = 1] = "inta";
    Applications[Applications["noor"] = 2] = "noor";
    Applications[Applications["bmk"] = 3] = "bmk";
})(Applications || (Applications = {}));
export var Sources;
(function (Sources) {
    Sources[Sources["DIRECT"] = 0] = "DIRECT";
    Sources[Sources["CAFE_BAZAAR"] = 1] = "CAFE_BAZAAR";
    Sources[Sources["MYKET"] = 2] = "MYKET";
    Sources[Sources["SIB_APP"] = 3] = "SIB_APP";
    Sources[Sources["GOOGLE_PLAY"] = 4] = "GOOGLE_PLAY";
})(Sources || (Sources = {}));
/**
 * Message implementation for proto.pub.v1.models.Platform
 */
export class Platform {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Platform to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.platformType = _value.platformType;
        this.osVersion = _value.osVersion;
        this.application = _value.application;
        this.version = _value.version;
        this.revision = _value.revision;
        this.source = _value.source;
        this.ip = _value.ip;
        this.clientVersion = _value.clientVersion;
        this.applicationName = _value.applicationName;
        Platform.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new Platform();
        Platform.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.platformType = _instance.platformType || 0;
        _instance.osVersion = _instance.osVersion || '';
        _instance.application = _instance.application || 0;
        _instance.version = _instance.version || 0;
        _instance.revision = _instance.revision || 0;
        _instance.source = _instance.source || 0;
        _instance.ip = _instance.ip || '';
        _instance.clientVersion = _instance.clientVersion || '';
        _instance.applicationName = _instance.applicationName || '';
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
                    _instance.platformType = _reader.readEnum();
                    break;
                case 2:
                    _instance.osVersion = _reader.readString();
                    break;
                case 5:
                    _instance.application = _reader.readEnum();
                    break;
                case 6:
                    _instance.version = _reader.readInt32();
                    break;
                case 9:
                    _instance.revision = _reader.readInt32();
                    break;
                case 7:
                    _instance.source = _reader.readEnum();
                    break;
                case 8:
                    _instance.ip = _reader.readString();
                    break;
                case 3:
                    _instance.clientVersion = _reader.readString();
                    break;
                case 4:
                    _instance.applicationName = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        Platform.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.platformType) {
            _writer.writeEnum(1, _instance.platformType);
        }
        if (_instance.osVersion) {
            _writer.writeString(2, _instance.osVersion);
        }
        if (_instance.application) {
            _writer.writeEnum(5, _instance.application);
        }
        if (_instance.version) {
            _writer.writeInt32(6, _instance.version);
        }
        if (_instance.revision) {
            _writer.writeInt32(9, _instance.revision);
        }
        if (_instance.source) {
            _writer.writeEnum(7, _instance.source);
        }
        if (_instance.ip) {
            _writer.writeString(8, _instance.ip);
        }
        if (_instance.clientVersion) {
            _writer.writeString(3, _instance.clientVersion);
        }
        if (_instance.applicationName) {
            _writer.writeString(4, _instance.applicationName);
        }
    }
    get platformType() {
        return this._platformType;
    }
    set platformType(value) {
        this._platformType = value;
    }
    get osVersion() {
        return this._osVersion;
    }
    set osVersion(value) {
        this._osVersion = value;
    }
    get application() {
        return this._application;
    }
    set application(value) {
        this._application = value;
    }
    get version() {
        return this._version;
    }
    set version(value) {
        this._version = value;
    }
    get revision() {
        return this._revision;
    }
    set revision(value) {
        this._revision = value;
    }
    get source() {
        return this._source;
    }
    set source(value) {
        this._source = value;
    }
    get ip() {
        return this._ip;
    }
    set ip(value) {
        this._ip = value;
    }
    get clientVersion() {
        return this._clientVersion;
    }
    set clientVersion(value) {
        this._clientVersion = value;
    }
    get applicationName() {
        return this._applicationName;
    }
    set applicationName(value) {
        this._applicationName = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        Platform.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            platformType: this.platformType,
            osVersion: this.osVersion,
            application: this.application,
            version: this.version,
            revision: this.revision,
            source: this.source,
            ip: this.ip,
            clientVersion: this.clientVersion,
            applicationName: this.applicationName
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
            platformType: PlatformsType[this.platformType === null || this.platformType === undefined
                ? 0
                : this.platformType],
            osVersion: this.osVersion,
            application: Applications[this.application === null || this.application === undefined
                ? 0
                : this.application],
            version: this.version,
            revision: this.revision,
            source: Sources[this.source === null || this.source === undefined ? 0 : this.source],
            ip: this.ip,
            clientVersion: this.clientVersion,
            applicationName: this.applicationName
        };
    }
}
Platform.id = 'proto.pub.v1.models.Platform';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhdGZvcm0ucGIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wcm90by9zcmMvbGliL3B1Yi92MS9tb2RlbHMvcGxhdGZvcm0ucGIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV0EsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQWMsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RSxNQUFNLENBQU4sSUFBWSxhQU9YO0FBUEQsV0FBWSxhQUFhO0lBQ3ZCLHVEQUFXLENBQUE7SUFDWCwrQ0FBTyxDQUFBO0lBQ1AscURBQVUsQ0FBQTtJQUNWLG1EQUFTLENBQUE7SUFDVCx1REFBVyxDQUFBO0lBQ1gsK0NBQU8sQ0FBQTtBQUNULENBQUMsRUFQVyxhQUFhLEtBQWIsYUFBYSxRQU94QjtBQUNELE1BQU0sQ0FBTixJQUFZLFlBS1g7QUFMRCxXQUFZLFlBQVk7SUFDdEIsMkNBQU0sQ0FBQTtJQUNOLCtDQUFRLENBQUE7SUFDUiwrQ0FBUSxDQUFBO0lBQ1IsNkNBQU8sQ0FBQTtBQUNULENBQUMsRUFMVyxZQUFZLEtBQVosWUFBWSxRQUt2QjtBQUNELE1BQU0sQ0FBTixJQUFZLE9BTVg7QUFORCxXQUFZLE9BQU87SUFDakIseUNBQVUsQ0FBQTtJQUNWLG1EQUFlLENBQUE7SUFDZix1Q0FBUyxDQUFBO0lBQ1QsMkNBQVcsQ0FBQTtJQUNYLG1EQUFlLENBQUE7QUFDakIsQ0FBQyxFQU5XLE9BQU8sS0FBUCxPQUFPLFFBTWxCO0FBQ0Q7O0dBRUc7QUFDSCxNQUFNLE9BQU8sUUFBUTtJQTBIbkI7OztPQUdHO0lBQ0gsWUFBWSxNQUE0QztRQUN0RCxNQUFNLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7UUFDeEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxXQUFXLEdB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QUFlO1NBQ3RDLENBQUM7SUFDSixDQUFDOztBQXBRTSxXQUFFLEdBQUcsOEJBQThCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgKi9cbi8vIEB0cy1ub2NoZWNrXG4vL1xuLy8gVEhJUyBJUyBBIEdFTkVSQVRFRCBGSUxFXG4vLyBETyBOT1QgTU9ESUZZIElUISBZT1VSIENIQU5HRVMgV0lMTCBCRSBMT1NUXG5pbXBvcnQge1xuICBHcnBjTWVzc2FnZSxcbiAgUmVjdXJzaXZlUGFydGlhbCxcbiAgVG9Qcm90b2J1ZkpTT05PcHRpb25zXG59IGZyb20gJ0BuZ3gtZ3JwYy9jb21tb24nO1xuaW1wb3J0IHsgQmluYXJ5UmVhZGVyLCBCaW5hcnlXcml0ZXIsIEJ5dGVTb3VyY2UgfSBmcm9tICdnb29nbGUtcHJvdG9idWYnO1xuZXhwb3J0IGVudW0gUGxhdGZvcm1zVHlwZSB7XG4gIEFORFJPSUQgPSAwLFxuICBJT1MgPSAxLFxuICBNQUNfT1MgPSAyLFxuICBMSU5VWCA9IDMsXG4gIFdJTkRPV1MgPSA0LFxuICBXRUIgPSA1XG59XG5leHBvcnQgZW51bSBBcHBsaWNhdGlvbnMge1xuICB3ZSA9IDAsXG4gIGludGEgPSAxLFxuICBub29yID0gMixcbiAgYm1rID0gM1xufVxuZXhwb3J0IGVudW0gU291cmNlcyB7XG4gIERJUkVDVCA9IDAsXG4gIENBRkVfQkFaQUFSID0gMSxcbiAgTVlLRVQgPSAyLFxuICBTSUJfQVBQID0gMyxcbiAgR09PR0xFX1BMQVkgPSA0XG59XG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIHByb3RvLnB1Yi52MS5tb2RlbHMuUGxhdGZvcm1cbiAqL1xuZXhwb3J0IGNsYXNzIFBsYXRmb3JtIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAncHJvdG8ucHViLnYxLm1vZGVscy5QbGF0Zm9ybSc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFBsYXRmb3JtKCk7XG4gICAgUGxhdGZvcm0uZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBQbGF0Zm9ybSkge1xuICAgIF9pbnN0YW5jZS5wbGF0Zm9ybVR5cGUgPSBfaW5zdGFuY2UucGxhdGZvcm1UeXBlIHx8IDA7XG4gICAgX2luc3RhbmNlLm9zVmVyc2lvbiA9IF9pbnN0YW5jZS5vc1ZlcnNpb24gfHwgJyc7XG4gICAgX2luc3RhbmNlLmFwcGxpY2F0aW9uID0gX2luc3RhbmNlLmFwcGxpY2F0aW9uIHx8IDA7XG4gICAgX2luc3RhbmNlLnZlcnNpb24gPSBfaW5zdGFuY2UudmVyc2lvbiB8fCAwO1xuICAgIF9pbnN0YW5jZS5yZXZpc2lvbiA9IF9pbnN0YW5jZS5yZXZpc2lvbiB8fCAwO1xuICAgIF9pbnN0YW5jZS5zb3VyY2UgPSBfaW5zdGFuY2Uuc291cmNlIHx8IDA7XG4gICAgX2luc3RhbmNlLmlwID0gX2luc3RhbmNlLmlwIHx8ICcnO1xuICAgIF9pbnN0YW5jZS5jbGllbnRWZXJzaW9uID0gX2luc3RhbmNlLmNsaWVudFZlcnNpb24gfHwgJyc7XG4gICAgX2luc3RhbmNlLmFwcGxpY2F0aW9uTmFtZSA9IF9pbnN0YW5jZS5hcHBsaWNhdGlvbk5hbWUgfHwgJyc7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBQbGF0Zm9ybSxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UucGxhdGZvcm1UeXBlID0gX3JlYWRlci5yZWFkRW51bSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLm9zVmVyc2lvbiA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgX2luc3RhbmNlLmFwcGxpY2F0aW9uID0gX3JlYWRlci5yZWFkRW51bSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgX2luc3RhbmNlLnZlcnNpb24gPSBfcmVhZGVyLnJlYWRJbnQzMigpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgX2luc3RhbmNlLnJldmlzaW9uID0gX3JlYWRlci5yZWFkSW50MzIoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA3OlxuICAgICAgICAgIF9pbnN0YW5jZS5zb3VyY2UgPSBfcmVhZGVyLnJlYWRFbnVtKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgODpcbiAgICAgICAgICBfaW5zdGFuY2UuaXAgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIF9pbnN0YW5jZS5jbGllbnRWZXJzaW9uID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBfaW5zdGFuY2UuYXBwbGljYXRpb25OYW1lID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBQbGF0Zm9ybS5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihfaW5zdGFuY2U6IFBsYXRmb3JtLCBfd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoX2luc3RhbmNlLnBsYXRmb3JtVHlwZSkge1xuICAgICAgX3dyaXRlci53cml0ZUVudW0oMSwgX2luc3RhbmNlLnBsYXRmb3JtVHlwZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uub3NWZXJzaW9uKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDIsIF9pbnN0YW5jZS5vc1ZlcnNpb24pO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmFwcGxpY2F0aW9uKSB7XG4gICAgICBfd3JpdGVyLndyaXRlRW51bSg1LCBfaW5zdGFuY2UuYXBwbGljYXRpb24pO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnZlcnNpb24pIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQzMig2LCBfaW5zdGFuY2UudmVyc2lvbik7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UucmV2aXNpb24pIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQzMig5LCBfaW5zdGFuY2UucmV2aXNpb24pO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnNvdXJjZSkge1xuICAgICAgX3dyaXRlci53cml0ZUVudW0oNywgX2luc3RhbmNlLnNvdXJjZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuaXApIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoOCwgX2luc3RhbmNlLmlwKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5jbGllbnRWZXJzaW9uKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDMsIF9pbnN0YW5jZS5jbGllbnRWZXJzaW9uKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5hcHBsaWNhdGlvbk5hbWUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoNCwgX2luc3RhbmNlLmFwcGxpY2F0aW9uTmFtZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcGxhdGZvcm1UeXBlPzogUGxhdGZvcm1zVHlwZTtcbiAgcHJpdmF0ZSBfb3NWZXJzaW9uPzogc3RyaW5nO1xuICBwcml2YXRlIF9hcHBsaWNhdGlvbj86IEFwcGxpY2F0aW9ucztcbiAgcHJpdmF0ZSBfdmVyc2lvbj86IG51bWJlcjtcbiAgcHJpdmF0ZSBfcmV2aXNpb24/OiBudW1iZXI7XG4gIHByaXZhdGUgX3NvdXJjZT86IFNvdXJjZXM7XG4gIHByaXZhdGUgX2lwPzogc3RyaW5nO1xuICBwcml2YXRlIF9jbGllbnRWZXJzaW9uPzogc3RyaW5nO1xuICBwcml2YXRlIF9hcHBsaWNhdGlvbk5hbWU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBQbGF0Zm9ybSB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxQbGF0Zm9ybS5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5wbGF0Zm9ybVR5cGUgPSBfdmFsdWUucGxhdGZvcm1UeXBlO1xuICAgIHRoaXMub3NWZXJzaW9uID0gX3ZhbHVlLm9zVmVyc2lvbjtcbiAgICB0aGlzLmFwcGxpY2F0aW9uID0gX3ZhbHVlLmFwcGxpY2F0aW9uO1xuICAgIHRoaXMudmVyc2lvbiA9IF92YWx1ZS52ZXJzaW9uO1xuICAgIHRoaXMucmV2aXNpb24gPSBfdmFsdWUucmV2aXNpb247XG4gICAgdGhpcy5zb3VyY2UgPSBfdmFsdWUuc291cmNlO1xuICAgIHRoaXMuaXAgPSBfdmFsdWUuaXA7XG4gICAgdGhpcy5jbGllbnRWZXJzaW9uID0gX3ZhbHVlLmNsaWVudFZlcnNpb247XG4gICAgdGhpcy5hcHBsaWNhdGlvbk5hbWUgPSBfdmFsdWUuYXBwbGljYXRpb25OYW1lO1xuICAgIFBsYXRmb3JtLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgcGxhdGZvcm1UeXBlKCk6IFBsYXRmb3Jtc1R5cGUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wbGF0Zm9ybVR5cGU7XG4gIH1cbiAgc2V0IHBsYXRmb3JtVHlwZSh2YWx1ZTogUGxhdGZvcm1zVHlwZSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3BsYXRmb3JtVHlwZSA9IHZhbHVlO1xuICB9XG4gIGdldCBvc1ZlcnNpb24oKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb3NWZXJzaW9uO1xuICB9XG4gIHNldCBvc1ZlcnNpb24odmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX29zVmVyc2lvbiA9IHZhbHVlO1xuICB9XG4gIGdldCBhcHBsaWNhdGlvbigpOiBBcHBsaWNhdGlvbnMgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9hcHBsaWNhdGlvbjtcbiAgfVxuICBzZXQgYXBwbGljYXRpb24odmFsdWU6IEFwcGxpY2F0aW9ucyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2FwcGxpY2F0aW9uID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHZlcnNpb24oKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdmVyc2lvbjtcbiAgfVxuICBzZXQgdmVyc2lvbih2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdmVyc2lvbiA9IHZhbHVlO1xuICB9XG4gIGdldCByZXZpc2lvbigpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9yZXZpc2lvbjtcbiAgfVxuICBzZXQgcmV2aXNpb24odmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3JldmlzaW9uID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHNvdXJjZSgpOiBTb3VyY2VzIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc291cmNlO1xuICB9XG4gIHNldCBzb3VyY2UodmFsdWU6IFNvdXJjZXMgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zb3VyY2UgPSB2YWx1ZTtcbiAgfVxuICBnZXQgaXAoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5faXA7XG4gIH1cbiAgc2V0IGlwKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9pcCA9IHZhbHVlO1xuICB9XG4gIGdldCBjbGllbnRWZXJzaW9uKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2NsaWVudFZlcnNpb247XG4gIH1cbiAgc2V0IGNsaWVudFZlcnNpb24odmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2NsaWVudFZlcnNpb24gPSB2YWx1ZTtcbiAgfVxuICBnZXQgYXBwbGljYXRpb25OYW1lKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2FwcGxpY2F0aW9uTmFtZTtcbiAgfVxuICBzZXQgYXBwbGljYXRpb25OYW1lKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9hcHBsaWNhdGlvbk5hbWUgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBQbGF0Zm9ybS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBQbGF0Zm9ybS5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBsYXRmb3JtVHlwZTogdGhpcy5wbGF0Zm9ybVR5cGUsXG4gICAgICBvc1ZlcnNpb246IHRoaXMub3NWZXJzaW9uLFxuICAgICAgYXBwbGljYXRpb246IHRoaXMuYXBwbGljYXRpb24sXG4gICAgICB2ZXJzaW9uOiB0aGlzLnZlcnNpb24sXG4gICAgICByZXZpc2lvbjogdGhpcy5yZXZpc2lvbixcbiAgICAgIHNvdXJjZTogdGhpcy5zb3VyY2UsXG4gICAgICBpcDogdGhpcy5pcCxcbiAgICAgIGNsaWVudFZlcnNpb246IHRoaXMuY2xpZW50VmVyc2lvbixcbiAgICAgIGFwcGxpY2F0aW9uTmFtZTogdGhpcy5hcHBsaWNhdGlvbk5hbWVcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBQbGF0Zm9ybS5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBsYXRmb3JtVHlwZTpcbiAgICAgICAgUGxhdGZvcm1zVHlwZVtcbiAgICAgICAgICB0aGlzLnBsYXRmb3JtVHlwZSA9PT0gbnVsbCB8fCB0aGlzLnBsYXRmb3JtVHlwZSA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IDBcbiAgICAgICAgICAgIDogdGhpcy5wbGF0Zm9ybVR5cGVcbiAgICAgICAgXSxcbiAgICAgIG9zVmVyc2lvbjogdGhpcy5vc1ZlcnNpb24sXG4gICAgICBhcHBsaWNhdGlvbjpcbiAgICAgICAgQXBwbGljYXRpb25zW1xuICAgICAgICAgIHRoaXMuYXBwbGljYXRpb24gPT09IG51bGwgfHwgdGhpcy5hcHBsaWNhdGlvbiA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IDBcbiAgICAgICAgICAgIDogdGhpcy5hcHBsaWNhdGlvblxuICAgICAgICBdLFxuICAgICAgdmVyc2lvbjogdGhpcy52ZXJzaW9uLFxuICAgICAgcmV2aXNpb246IHRoaXMucmV2aXNpb24sXG4gICAgICBzb3VyY2U6XG4gICAgICAgIFNvdXJjZXNbXG4gICAgICAgICAgdGhpcy5zb3VyY2UgPT09IG51bGwgfHwgdGhpcy5zb3VyY2UgPT09IHVuZGVmaW5lZCA/IDAgOiB0aGlzLnNvdXJjZVxuICAgICAgICBdLFxuICAgICAgaXA6IHRoaXMuaXAsXG4gICAgICBjbGllbnRWZXJzaW9uOiB0aGlzLmNsaWVudFZlcnNpb24sXG4gICAgICBhcHBsaWNhdGlvbk5hbWU6IHRoaXMuYXBwbGljYXRpb25OYW1lXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBQbGF0Zm9ybSB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgUGxhdGZvcm1cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIHBsYXRmb3JtVHlwZT86IFBsYXRmb3Jtc1R5cGU7XG4gICAgb3NWZXJzaW9uPzogc3RyaW5nO1xuICAgIGFwcGxpY2F0aW9uPzogQXBwbGljYXRpb25zO1xuICAgIHZlcnNpb24/OiBudW1iZXI7XG4gICAgcmV2aXNpb24/OiBudW1iZXI7XG4gICAgc291cmNlPzogU291cmNlcztcbiAgICBpcD86IHN0cmluZztcbiAgICBjbGllbnRWZXJzaW9uPzogc3RyaW5nO1xuICAgIGFwcGxpY2F0aW9uTmFtZT86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBQbGF0Zm9ybVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgcGxhdGZvcm1UeXBlPzogc3RyaW5nO1xuICAgIG9zVmVyc2lvbj86IHN0cmluZztcbiAgICBhcHBsaWNhdGlvbj86IHN0cmluZztcbiAgICB2ZXJzaW9uPzogbnVtYmVyO1xuICAgIHJldmlzaW9uPzogbnVtYmVyO1xuICAgIHNvdXJjZT86IHN0cmluZztcbiAgICBpcD86IHN0cmluZztcbiAgICBjbGllbnRWZXJzaW9uPzogc3RyaW5nO1xuICAgIGFwcGxpY2F0aW9uTmFtZT86IHN0cmluZztcbiAgfVxufVxuIl19