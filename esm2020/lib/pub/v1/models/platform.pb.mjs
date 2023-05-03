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
            source: Sources[this.source === null || this.source === undefined ? 0 : this.source],
            ip: this.ip,
            clientVersion: this.clientVersion,
            applicationName: this.applicationName
        };
    }
}
Platform.id = 'proto.pub.v1.models.Platform';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhdGZvcm0ucGIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wcm90by9zcmMvbGliL3B1Yi92MS9tb2RlbHMvcGxhdGZvcm0ucGIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV0EsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQWMsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RSxNQUFNLENBQU4sSUFBWSxhQU9YO0FBUEQsV0FBWSxhQUFhO0lBQ3ZCLHVEQUFXLENBQUE7SUFDWCwrQ0FBTyxDQUFBO0lBQ1AscURBQVUsQ0FBQTtJQUNWLG1EQUFTLENBQUE7SUFDVCx1REFBVyxDQUFBO0lBQ1gsK0NBQU8sQ0FBQTtBQUNULENBQUMsRUFQVyxhQUFhLEtBQWIsYUFBYSxRQU94QjtBQUNELE1BQU0sQ0FBTixJQUFZLFlBS1g7QUFMRCxXQUFZLFlBQVk7SUFDdEIsMkNBQU0sQ0FBQTtJQUNOLCtDQUFRLENBQUE7SUFDUiwrQ0FBUSxDQUFBO0lBQ1IsNkNBQU8sQ0FBQTtBQUNULENBQUMsRUFMVyxZQUFZLEtBQVosWUFBWSxRQUt2QjtBQUNELE1BQU0sQ0FBTixJQUFZLE9BTVg7QUFORCxXQUFZLE9BQU87SUFDakIseUNBQVUsQ0FBQTtJQUNWLG1EQUFlLENBQUE7SUFDZix1Q0FBUyxDQUFBO0lBQ1QsMkNBQVcsQ0FBQTtJQUNYLG1EQUFlLENBQUE7QUFDakIsQ0FBQyxFQU5XLE9BQU8sS0FBUCxPQUFPLFFBTWxCO0FBQ0Q7O0dBRUc7QUFDSCxNQUFNLE9BQU8sUUFBUTtJQWtIbkI7OztPQUdHO0lBQ0gsWUFBWSxNQUE0QztRQUN0RCxNQUFNLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7UUFDeEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxXQUFXLEdB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LENBQ3RCO1lBQ0gsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLFdBQVcsRUFDVCxZQUFZLENBQ1YsSUFBSSxDQUFDLFdBQVcsS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxTQUFTO2dCQUN6RCxDQUFDLENBQUMsQ0FBQztnQkFDSCxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FDckI7WUFDSCxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsTUFBTSxFQUNKLE9BQU8sQ0FDTCxJQUFJLENBQUMsTUFBTSxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUNwRTtZQUNILEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNYLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUNqQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7U0FDdEMsQ0FBQztJQUNKLENBQUM7O0FBblBNLFdBQUUsR0FBRyw4QkFBOEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuLy8gQHRzLW5vY2hlY2tcbi8vXG4vLyBUSElTIElTIEEgR0VORVJBVEVEIEZJTEVcbi8vIERPIE5PVCBNT0RJRlkgSVQhIFlPVVIgQ0hBTkdFUyBXSUxMIEJFIExPU1RcbmltcG9ydCB7XG4gIEdycGNNZXNzYWdlLFxuICBSZWN1cnNpdmVQYXJ0aWFsLFxuICBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbn0gZnJvbSAnQG5neC1ncnBjL2NvbW1vbic7XG5pbXBvcnQgeyBCaW5hcnlSZWFkZXIsIEJpbmFyeVdyaXRlciwgQnl0ZVNvdXJjZSB9IGZyb20gJ2dvb2dsZS1wcm90b2J1Zic7XG5leHBvcnQgZW51bSBQbGF0Zm9ybXNUeXBlIHtcbiAgQU5EUk9JRCA9IDAsXG4gIElPUyA9IDEsXG4gIE1BQ19PUyA9IDIsXG4gIExJTlVYID0gMyxcbiAgV0lORE9XUyA9IDQsXG4gIFdFQiA9IDVcbn1cbmV4cG9ydCBlbnVtIEFwcGxpY2F0aW9ucyB7XG4gIHdlID0gMCxcbiAgaW50YSA9IDEsXG4gIG5vb3IgPSAyLFxuICBibWsgPSAzXG59XG5leHBvcnQgZW51bSBTb3VyY2VzIHtcbiAgRElSRUNUID0gMCxcbiAgQ0FGRV9CQVpBQVIgPSAxLFxuICBNWUtFVCA9IDIsXG4gIFNJQl9BUFAgPSAzLFxuICBHT09HTEVfUExBWSA9IDRcbn1cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3IgcHJvdG8ucHViLnYxLm1vZGVscy5QbGF0Zm9ybVxuICovXG5leHBvcnQgY2xhc3MgUGxhdGZvcm0gaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdwcm90by5wdWIudjEubW9kZWxzLlBsYXRmb3JtJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgUGxhdGZvcm0oKTtcbiAgICBQbGF0Zm9ybS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IFBsYXRmb3JtKSB7XG4gICAgX2luc3RhbmNlLnBsYXRmb3JtVHlwZSA9IF9pbnN0YW5jZS5wbGF0Zm9ybVR5cGUgfHwgMDtcbiAgICBfaW5zdGFuY2Uub3NWZXJzaW9uID0gX2luc3RhbmNlLm9zVmVyc2lvbiB8fCAnJztcbiAgICBfaW5zdGFuY2UuYXBwbGljYXRpb24gPSBfaW5zdGFuY2UuYXBwbGljYXRpb24gfHwgMDtcbiAgICBfaW5zdGFuY2UudmVyc2lvbiA9IF9pbnN0YW5jZS52ZXJzaW9uIHx8IDA7XG4gICAgX2luc3RhbmNlLnNvdXJjZSA9IF9pbnN0YW5jZS5zb3VyY2UgfHwgMDtcbiAgICBfaW5zdGFuY2UuaXAgPSBfaW5zdGFuY2UuaXAgfHwgJyc7XG4gICAgX2luc3RhbmNlLmNsaWVudFZlcnNpb24gPSBfaW5zdGFuY2UuY2xpZW50VmVyc2lvbiB8fCAnJztcbiAgICBfaW5zdGFuY2UuYXBwbGljYXRpb25OYW1lID0gX2luc3RhbmNlLmFwcGxpY2F0aW9uTmFtZSB8fCAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IFBsYXRmb3JtLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5wbGF0Zm9ybVR5cGUgPSBfcmVhZGVyLnJlYWRFbnVtKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2Uub3NWZXJzaW9uID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBfaW5zdGFuY2UuYXBwbGljYXRpb24gPSBfcmVhZGVyLnJlYWRFbnVtKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICBfaW5zdGFuY2UudmVyc2lvbiA9IF9yZWFkZXIucmVhZEludDMyKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNzpcbiAgICAgICAgICBfaW5zdGFuY2Uuc291cmNlID0gX3JlYWRlci5yZWFkRW51bSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgX2luc3RhbmNlLmlwID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBfaW5zdGFuY2UuY2xpZW50VmVyc2lvbiA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgX2luc3RhbmNlLmFwcGxpY2F0aW9uTmFtZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgUGxhdGZvcm0ucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoX2luc3RhbmNlOiBQbGF0Zm9ybSwgX3dyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5wbGF0Zm9ybVR5cGUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVFbnVtKDEsIF9pbnN0YW5jZS5wbGF0Zm9ybVR5cGUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLm9zVmVyc2lvbikge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygyLCBfaW5zdGFuY2Uub3NWZXJzaW9uKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5hcHBsaWNhdGlvbikge1xuICAgICAgX3dyaXRlci53cml0ZUVudW0oNSwgX2luc3RhbmNlLmFwcGxpY2F0aW9uKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS52ZXJzaW9uKSB7XG4gICAgICBfd3JpdGVyLndyaXRlSW50MzIoNiwgX2luc3RhbmNlLnZlcnNpb24pO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnNvdXJjZSkge1xuICAgICAgX3dyaXRlci53cml0ZUVudW0oNywgX2luc3RhbmNlLnNvdXJjZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuaXApIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoOCwgX2luc3RhbmNlLmlwKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5jbGllbnRWZXJzaW9uKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDMsIF9pbnN0YW5jZS5jbGllbnRWZXJzaW9uKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5hcHBsaWNhdGlvbk5hbWUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoNCwgX2luc3RhbmNlLmFwcGxpY2F0aW9uTmFtZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcGxhdGZvcm1UeXBlPzogUGxhdGZvcm1zVHlwZTtcbiAgcHJpdmF0ZSBfb3NWZXJzaW9uPzogc3RyaW5nO1xuICBwcml2YXRlIF9hcHBsaWNhdGlvbj86IEFwcGxpY2F0aW9ucztcbiAgcHJpdmF0ZSBfdmVyc2lvbj86IG51bWJlcjtcbiAgcHJpdmF0ZSBfc291cmNlPzogU291cmNlcztcbiAgcHJpdmF0ZSBfaXA/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2NsaWVudFZlcnNpb24/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2FwcGxpY2F0aW9uTmFtZT86IHN0cmluZztcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIFBsYXRmb3JtIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFBsYXRmb3JtLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnBsYXRmb3JtVHlwZSA9IF92YWx1ZS5wbGF0Zm9ybVR5cGU7XG4gICAgdGhpcy5vc1ZlcnNpb24gPSBfdmFsdWUub3NWZXJzaW9uO1xuICAgIHRoaXMuYXBwbGljYXRpb24gPSBfdmFsdWUuYXBwbGljYXRpb247XG4gICAgdGhpcy52ZXJzaW9uID0gX3ZhbHVlLnZlcnNpb247XG4gICAgdGhpcy5zb3VyY2UgPSBfdmFsdWUuc291cmNlO1xuICAgIHRoaXMuaXAgPSBfdmFsdWUuaXA7XG4gICAgdGhpcy5jbGllbnRWZXJzaW9uID0gX3ZhbHVlLmNsaWVudFZlcnNpb247XG4gICAgdGhpcy5hcHBsaWNhdGlvbk5hbWUgPSBfdmFsdWUuYXBwbGljYXRpb25OYW1lO1xuICAgIFBsYXRmb3JtLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgcGxhdGZvcm1UeXBlKCk6IFBsYXRmb3Jtc1R5cGUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wbGF0Zm9ybVR5cGU7XG4gIH1cbiAgc2V0IHBsYXRmb3JtVHlwZSh2YWx1ZTogUGxhdGZvcm1zVHlwZSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3BsYXRmb3JtVHlwZSA9IHZhbHVlO1xuICB9XG4gIGdldCBvc1ZlcnNpb24oKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb3NWZXJzaW9uO1xuICB9XG4gIHNldCBvc1ZlcnNpb24odmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX29zVmVyc2lvbiA9IHZhbHVlO1xuICB9XG4gIGdldCBhcHBsaWNhdGlvbigpOiBBcHBsaWNhdGlvbnMgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9hcHBsaWNhdGlvbjtcbiAgfVxuICBzZXQgYXBwbGljYXRpb24odmFsdWU6IEFwcGxpY2F0aW9ucyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2FwcGxpY2F0aW9uID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHZlcnNpb24oKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdmVyc2lvbjtcbiAgfVxuICBzZXQgdmVyc2lvbih2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdmVyc2lvbiA9IHZhbHVlO1xuICB9XG4gIGdldCBzb3VyY2UoKTogU291cmNlcyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3NvdXJjZTtcbiAgfVxuICBzZXQgc291cmNlKHZhbHVlOiBTb3VyY2VzIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fc291cmNlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGlwKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2lwO1xuICB9XG4gIHNldCBpcCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5faXAgPSB2YWx1ZTtcbiAgfVxuICBnZXQgY2xpZW50VmVyc2lvbigpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9jbGllbnRWZXJzaW9uO1xuICB9XG4gIHNldCBjbGllbnRWZXJzaW9uKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9jbGllbnRWZXJzaW9uID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGFwcGxpY2F0aW9uTmFtZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9hcHBsaWNhdGlvbk5hbWU7XG4gIH1cbiAgc2V0IGFwcGxpY2F0aW9uTmFtZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fYXBwbGljYXRpb25OYW1lID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgUGxhdGZvcm0uc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogUGxhdGZvcm0uQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBwbGF0Zm9ybVR5cGU6IHRoaXMucGxhdGZvcm1UeXBlLFxuICAgICAgb3NWZXJzaW9uOiB0aGlzLm9zVmVyc2lvbixcbiAgICAgIGFwcGxpY2F0aW9uOiB0aGlzLmFwcGxpY2F0aW9uLFxuICAgICAgdmVyc2lvbjogdGhpcy52ZXJzaW9uLFxuICAgICAgc291cmNlOiB0aGlzLnNvdXJjZSxcbiAgICAgIGlwOiB0aGlzLmlwLFxuICAgICAgY2xpZW50VmVyc2lvbjogdGhpcy5jbGllbnRWZXJzaW9uLFxuICAgICAgYXBwbGljYXRpb25OYW1lOiB0aGlzLmFwcGxpY2F0aW9uTmFtZVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IFBsYXRmb3JtLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGxhdGZvcm1UeXBlOlxuICAgICAgICBQbGF0Zm9ybXNUeXBlW1xuICAgICAgICAgIHRoaXMucGxhdGZvcm1UeXBlID09PSBudWxsIHx8IHRoaXMucGxhdGZvcm1UeXBlID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgOiB0aGlzLnBsYXRmb3JtVHlwZVxuICAgICAgICBdLFxuICAgICAgb3NWZXJzaW9uOiB0aGlzLm9zVmVyc2lvbixcbiAgICAgIGFwcGxpY2F0aW9uOlxuICAgICAgICBBcHBsaWNhdGlvbnNbXG4gICAgICAgICAgdGhpcy5hcHBsaWNhdGlvbiA9PT0gbnVsbCB8fCB0aGlzLmFwcGxpY2F0aW9uID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgOiB0aGlzLmFwcGxpY2F0aW9uXG4gICAgICAgIF0sXG4gICAgICB2ZXJzaW9uOiB0aGlzLnZlcnNpb24sXG4gICAgICBzb3VyY2U6XG4gICAgICAgIFNvdXJjZXNbXG4gICAgICAgICAgdGhpcy5zb3VyY2UgPT09IG51bGwgfHwgdGhpcy5zb3VyY2UgPT09IHVuZGVmaW5lZCA/IDAgOiB0aGlzLnNvdXJjZVxuICAgICAgICBdLFxuICAgICAgaXA6IHRoaXMuaXAsXG4gICAgICBjbGllbnRWZXJzaW9uOiB0aGlzLmNsaWVudFZlcnNpb24sXG4gICAgICBhcHBsaWNhdGlvbk5hbWU6IHRoaXMuYXBwbGljYXRpb25OYW1lXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBQbGF0Zm9ybSB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgUGxhdGZvcm1cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIHBsYXRmb3JtVHlwZT86IFBsYXRmb3Jtc1R5cGU7XG4gICAgb3NWZXJzaW9uPzogc3RyaW5nO1xuICAgIGFwcGxpY2F0aW9uPzogQXBwbGljYXRpb25zO1xuICAgIHZlcnNpb24/OiBudW1iZXI7XG4gICAgc291cmNlPzogU291cmNlcztcbiAgICBpcD86IHN0cmluZztcbiAgICBjbGllbnRWZXJzaW9uPzogc3RyaW5nO1xuICAgIGFwcGxpY2F0aW9uTmFtZT86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBQbGF0Zm9ybVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgcGxhdGZvcm1UeXBlPzogc3RyaW5nO1xuICAgIG9zVmVyc2lvbj86IHN0cmluZztcbiAgICBhcHBsaWNhdGlvbj86IHN0cmluZztcbiAgICB2ZXJzaW9uPzogbnVtYmVyO1xuICAgIHNvdXJjZT86IHN0cmluZztcbiAgICBpcD86IHN0cmluZztcbiAgICBjbGllbnRWZXJzaW9uPzogc3RyaW5nO1xuICAgIGFwcGxpY2F0aW9uTmFtZT86IHN0cmluZztcbiAgfVxufVxuIl19