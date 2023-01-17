import { BinaryReader, BinaryWriter } from 'google-protobuf';
import * as protoPubV1Models001 from '../../../pub/v1/models/uid.pb';
export var PresenceType;
(function (PresenceType) {
    PresenceType[PresenceType["ACTIVE"] = 0] = "ACTIVE";
    PresenceType[PresenceType["DELETED"] = 1] = "DELETED";
    PresenceType[PresenceType["KICKED"] = 2] = "KICKED";
    PresenceType[PresenceType["LEFT"] = 3] = "LEFT";
    PresenceType[PresenceType["BANNED"] = 4] = "BANNED";
})(PresenceType || (PresenceType = {}));
/**
 * Message implementation for proto.pub.v1.models.RoomMetadata
 */
export class RoomMetadata {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of RoomMetadata to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.roomUid = _value.roomUid
            ? new protoPubV1Models001.Uid(_value.roomUid)
            : undefined;
        this.lastMessageId = _value.lastMessageId;
        this.lastUpdate = _value.lastUpdate;
        this.lastCurrentUserSentMessageId = _value.lastCurrentUserSentMessageId;
        this.lastCurrentUserSentMessagePacketId =
            _value.lastCurrentUserSentMessagePacketId;
        this.lastSeenId = _value.lastSeenId;
        this.firstMessageId = _value.firstMessageId;
        this.presenceType = _value.presenceType;
        RoomMetadata.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new RoomMetadata();
        RoomMetadata.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.roomUid = _instance.roomUid || undefined;
        _instance.lastMessageId = _instance.lastMessageId || '0';
        _instance.lastUpdate = _instance.lastUpdate || '0';
        _instance.lastCurrentUserSentMessageId =
            _instance.lastCurrentUserSentMessageId || '0';
        _instance.lastCurrentUserSentMessagePacketId =
            _instance.lastCurrentUserSentMessagePacketId || '0';
        _instance.lastSeenId = _instance.lastSeenId || '0';
        _instance.firstMessageId = _instance.firstMessageId || '0';
        _instance.presenceType = _instance.presenceType || 0;
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
                    _instance.roomUid = new protoPubV1Models001.Uid();
                    _reader.readMessage(_instance.roomUid, protoPubV1Models001.Uid.deserializeBinaryFromReader);
                    break;
                case 2:
                    _instance.lastMessageId = _reader.readInt64String();
                    break;
                case 3:
                    _instance.lastUpdate = _reader.readInt64String();
                    break;
                case 4:
                    _instance.lastCurrentUserSentMessageId = _reader.readInt64String();
                    break;
                case 8:
                    _instance.lastCurrentUserSentMessagePacketId = _reader.readInt64String();
                    break;
                case 7:
                    _instance.lastSeenId = _reader.readInt64String();
                    break;
                case 5:
                    _instance.firstMessageId = _reader.readInt64String();
                    break;
                case 6:
                    _instance.presenceType = _reader.readEnum();
                    break;
                default:
                    _reader.skipField();
            }
        }
        RoomMetadata.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.roomUid) {
            _writer.writeMessage(1, _instance.roomUid, protoPubV1Models001.Uid.serializeBinaryToWriter);
        }
        if (_instance.lastMessageId) {
            _writer.writeInt64String(2, _instance.lastMessageId);
        }
        if (_instance.lastUpdate) {
            _writer.writeInt64String(3, _instance.lastUpdate);
        }
        if (_instance.lastCurrentUserSentMessageId) {
            _writer.writeInt64String(4, _instance.lastCurrentUserSentMessageId);
        }
        if (_instance.lastCurrentUserSentMessagePacketId) {
            _writer.writeInt64String(8, _instance.lastCurrentUserSentMessagePacketId);
        }
        if (_instance.lastSeenId) {
            _writer.writeInt64String(7, _instance.lastSeenId);
        }
        if (_instance.firstMessageId) {
            _writer.writeInt64String(5, _instance.firstMessageId);
        }
        if (_instance.presenceType) {
            _writer.writeEnum(6, _instance.presenceType);
        }
    }
    get roomUid() {
        return this._roomUid;
    }
    set roomUid(value) {
        this._roomUid = value;
    }
    get lastMessageId() {
        return this._lastMessageId;
    }
    set lastMessageId(value) {
        this._lastMessageId = value;
    }
    get lastUpdate() {
        return this._lastUpdate;
    }
    set lastUpdate(value) {
        this._lastUpdate = value;
    }
    get lastCurrentUserSentMessageId() {
        return this._lastCurrentUserSentMessageId;
    }
    set lastCurrentUserSentMessageId(value) {
        this._lastCurrentUserSentMessageId = value;
    }
    get lastCurrentUserSentMessagePacketId() {
        return this._lastCurrentUserSentMessagePacketId;
    }
    set lastCurrentUserSentMessagePacketId(value) {
        this._lastCurrentUserSentMessagePacketId = value;
    }
    get lastSeenId() {
        return this._lastSeenId;
    }
    set lastSeenId(value) {
        this._lastSeenId = value;
    }
    get firstMessageId() {
        return this._firstMessageId;
    }
    set firstMessageId(value) {
        this._firstMessageId = value;
    }
    get presenceType() {
        return this._presenceType;
    }
    set presenceType(value) {
        this._presenceType = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        RoomMetadata.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            roomUid: this.roomUid ? this.roomUid.toObject() : undefined,
            lastMessageId: this.lastMessageId,
            lastUpdate: this.lastUpdate,
            lastCurrentUserSentMessageId: this.lastCurrentUserSentMessageId,
            lastCurrentUserSentMessagePacketId: this
                .lastCurrentUserSentMessagePacketId,
            lastSeenId: this.lastSeenId,
            firstMessageId: this.firstMessageId,
            presenceType: this.presenceType
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
            roomUid: this.roomUid ? this.roomUid.toProtobufJSON(options) : null,
            lastMessageId: this.lastMessageId,
            lastUpdate: this.lastUpdate,
            lastCurrentUserSentMessageId: this.lastCurrentUserSentMessageId,
            lastCurrentUserSentMessagePacketId: this
                .lastCurrentUserSentMessagePacketId,
            lastSeenId: this.lastSeenId,
            firstMessageId: this.firstMessageId,
            presenceType: PresenceType[this.presenceType === null || this.presenceType === undefined
                ? 0
                : this.presenceType]
        };
    }
}
RoomMetadata.id = 'proto.pub.v1.models.RoomMetadata';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vbS1tZXRhZGF0YS5wYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Byb3RvL3NyYy9saWIvcHViL3YxL21vZGVscy9yb29tLW1ldGFkYXRhLnBiLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdBLE9BQU8sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFjLE1BQU0saUJBQWlCLENBQUM7QUFFekUsT0FBTyxLQUFLLG1CQUFtQixNQUFNLCtCQUErQixDQUFDO0FBQ3JFLE1BQU0sQ0FBTixJQUFZLFlBTVg7QUFORCxXQUFZLFlBQVk7SUFDdEIsbURBQVUsQ0FBQTtJQUNWLHFEQUFXLENBQUE7SUFDWCxtREFBVSxDQUFBO0lBQ1YsK0NBQVEsQ0FBQTtJQUNSLG1EQUFVLENBQUE7QUFDWixDQUFDLEVBTlcsWUFBWSxLQUFaLFlBQVksUUFNdkI7QUFDRDs7R0FFRztBQUNILE1BQU0sT0FBTyxZQUFZO0lBK0h2Qjs7O09BR0c7SUFDSCxZQUFZLE1BQWdEO1FBQzFELE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU87WUFDM0IsQ0FBQyxDQUFDLElBQUksbUJBQW1CLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFDN0MsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNkLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQztRQUMxQyxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFDcEMsSUFBSSxDQUFDLDRCQUE0QixHQUFHLE1BQU0sQ0FBQyw0QkFBNEIsQ0FBQztRQUN4RSxJQUFJLENBQUMsa0NBQWtDO1lBQ3JDLE1BQU0sQ0FBQyxrQ0FBa0MsQ0FBQztRQUM1QyxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFDcEMsSUFBSSxD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SSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7WUFDbkUsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQiw0QkFBNEIsRUFBRSxJQUFJLENBQUMsNEJBQTRCO1lBQy9ELGtDQUFrQyxFQUFFLElBQUk7aUJBQ3JDLGtDQUFrQztZQUNyQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO1lBQ25DLFlBQVksRUFDVixZQUFZLENBQ1YsSUFBSSxDQUFDLFlBQVksS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxTQUFTO2dCQUMzRCxDQUFDLENBQUMsQ0FBQztnQkFDSCxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FDdEI7U0FDSixDQUFDO0lBQ0osQ0FBQzs7QUE3UE0sZUFBRSxHQUFHLGtDQUFrQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGUgKi9cbi8qIGVzbGludC1kaXNhYmxlICovXG4vLyBAdHMtbm9jaGVja1xuLy9cbi8vIFRISVMgSVMgQSBHRU5FUkFURUQgRklMRVxuLy8gRE8gTk9UIE1PRElGWSBJVCEgWU9VUiBDSEFOR0VTIFdJTEwgQkUgTE9TVFxuaW1wb3J0IHtcbiAgR3JwY01lc3NhZ2UsXG4gIFJlY3Vyc2l2ZVBhcnRpYWwsXG4gIFRvUHJvdG9idWZKU09OT3B0aW9uc1xufSBmcm9tICdAbmd4LWdycGMvY29tbW9uJztcbmltcG9ydCB7IEJpbmFyeVJlYWRlciwgQmluYXJ5V3JpdGVyLCBCeXRlU291cmNlIH0gZnJvbSAnZ29vZ2xlLXByb3RvYnVmJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMDAgZnJvbSAnLi4vLi4vLi4vcHViL3YxL21vZGVscy9jYXRlZ29yaWVzLnBiJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMDEgZnJvbSAnLi4vLi4vLi4vcHViL3YxL21vZGVscy91aWQucGInO1xuZXhwb3J0IGVudW0gUHJlc2VuY2VUeXBlIHtcbiAgQUNUSVZFID0gMCxcbiAgREVMRVRFRCA9IDEsXG4gIEtJQ0tFRCA9IDIsXG4gIExFRlQgPSAzLFxuICBCQU5ORUQgPSA0XG59XG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIHByb3RvLnB1Yi52MS5tb2RlbHMuUm9vbU1ldGFkYXRhXG4gKi9cbmV4cG9ydCBjbGFzcyBSb29tTWV0YWRhdGEgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdwcm90by5wdWIudjEubW9kZWxzLlJvb21NZXRhZGF0YSc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFJvb21NZXRhZGF0YSgpO1xuICAgIFJvb21NZXRhZGF0YS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IFJvb21NZXRhZGF0YSkge1xuICAgIF9pbnN0YW5jZS5yb29tVWlkID0gX2luc3RhbmNlLnJvb21VaWQgfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5sYXN0TWVzc2FnZUlkID0gX2luc3RhbmNlLmxhc3RNZXNzYWdlSWQgfHwgJzAnO1xuICAgIF9pbnN0YW5jZS5sYXN0VXBkYXRlID0gX2luc3RhbmNlLmxhc3RVcGRhdGUgfHwgJzAnO1xuICAgIF9pbnN0YW5jZS5sYXN0Q3VycmVudFVzZXJTZW50TWVzc2FnZUlkID1cbiAgICAgIF9pbnN0YW5jZS5sYXN0Q3VycmVudFVzZXJTZW50TWVzc2FnZUlkIHx8ICcwJztcbiAgICBfaW5zdGFuY2UubGFzdEN1cnJlbnRVc2VyU2VudE1lc3NhZ2VQYWNrZXRJZCA9XG4gICAgICBfaW5zdGFuY2UubGFzdEN1cnJlbnRVc2VyU2VudE1lc3NhZ2VQYWNrZXRJZCB8fCAnMCc7XG4gICAgX2luc3RhbmNlLmxhc3RTZWVuSWQgPSBfaW5zdGFuY2UubGFzdFNlZW5JZCB8fCAnMCc7XG4gICAgX2luc3RhbmNlLmZpcnN0TWVzc2FnZUlkID0gX2luc3RhbmNlLmZpcnN0TWVzc2FnZUlkIHx8ICcwJztcbiAgICBfaW5zdGFuY2UucHJlc2VuY2VUeXBlID0gX2luc3RhbmNlLnByZXNlbmNlVHlwZSB8fCAwO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogUm9vbU1ldGFkYXRhLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5yb29tVWlkID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDEuVWlkKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5yb29tVWlkLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5sYXN0TWVzc2FnZUlkID0gX3JlYWRlci5yZWFkSW50NjRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIF9pbnN0YW5jZS5sYXN0VXBkYXRlID0gX3JlYWRlci5yZWFkSW50NjRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIF9pbnN0YW5jZS5sYXN0Q3VycmVudFVzZXJTZW50TWVzc2FnZUlkID0gX3JlYWRlci5yZWFkSW50NjRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA4OlxuICAgICAgICAgIF9pbnN0YW5jZS5sYXN0Q3VycmVudFVzZXJTZW50TWVzc2FnZVBhY2tldElkID0gX3JlYWRlci5yZWFkSW50NjRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA3OlxuICAgICAgICAgIF9pbnN0YW5jZS5sYXN0U2VlbklkID0gX3JlYWRlci5yZWFkSW50NjRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIF9pbnN0YW5jZS5maXJzdE1lc3NhZ2VJZCA9IF9yZWFkZXIucmVhZEludDY0U3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICBfaW5zdGFuY2UucHJlc2VuY2VUeXBlID0gX3JlYWRlci5yZWFkRW51bSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgUm9vbU1ldGFkYXRhLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogUm9vbU1ldGFkYXRhLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLnJvb21VaWQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAxLFxuICAgICAgICBfaW5zdGFuY2Uucm9vbVVpZCBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDEuVWlkLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmxhc3RNZXNzYWdlSWQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQ2NFN0cmluZygyLCBfaW5zdGFuY2UubGFzdE1lc3NhZ2VJZCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UubGFzdFVwZGF0ZSkge1xuICAgICAgX3dyaXRlci53cml0ZUludDY0U3RyaW5nKDMsIF9pbnN0YW5jZS5sYXN0VXBkYXRlKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5sYXN0Q3VycmVudFVzZXJTZW50TWVzc2FnZUlkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlSW50NjRTdHJpbmcoNCwgX2luc3RhbmNlLmxhc3RDdXJyZW50VXNlclNlbnRNZXNzYWdlSWQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmxhc3RDdXJyZW50VXNlclNlbnRNZXNzYWdlUGFja2V0SWQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQ2NFN0cmluZyg4LCBfaW5zdGFuY2UubGFzdEN1cnJlbnRVc2VyU2VudE1lc3NhZ2VQYWNrZXRJZCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UubGFzdFNlZW5JZCkge1xuICAgICAgX3dyaXRlci53cml0ZUludDY0U3RyaW5nKDcsIF9pbnN0YW5jZS5sYXN0U2VlbklkKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5maXJzdE1lc3NhZ2VJZCkge1xuICAgICAgX3dyaXRlci53cml0ZUludDY0U3RyaW5nKDUsIF9pbnN0YW5jZS5maXJzdE1lc3NhZ2VJZCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UucHJlc2VuY2VUeXBlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlRW51bSg2LCBfaW5zdGFuY2UucHJlc2VuY2VUeXBlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9yb29tVWlkPzogcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQ7XG4gIHByaXZhdGUgX2xhc3RNZXNzYWdlSWQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2xhc3RVcGRhdGU/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2xhc3RDdXJyZW50VXNlclNlbnRNZXNzYWdlSWQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2xhc3RDdXJyZW50VXNlclNlbnRNZXNzYWdlUGFja2V0SWQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2xhc3RTZWVuSWQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2ZpcnN0TWVzc2FnZUlkPzogc3RyaW5nO1xuICBwcml2YXRlIF9wcmVzZW5jZVR5cGU/OiBQcmVzZW5jZVR5cGU7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBSb29tTWV0YWRhdGEgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8Um9vbU1ldGFkYXRhLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnJvb21VaWQgPSBfdmFsdWUucm9vbVVpZFxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQoX3ZhbHVlLnJvb21VaWQpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmxhc3RNZXNzYWdlSWQgPSBfdmFsdWUubGFzdE1lc3NhZ2VJZDtcbiAgICB0aGlzLmxhc3RVcGRhdGUgPSBfdmFsdWUubGFzdFVwZGF0ZTtcbiAgICB0aGlzLmxhc3RDdXJyZW50VXNlclNlbnRNZXNzYWdlSWQgPSBfdmFsdWUubGFzdEN1cnJlbnRVc2VyU2VudE1lc3NhZ2VJZDtcbiAgICB0aGlzLmxhc3RDdXJyZW50VXNlclNlbnRNZXNzYWdlUGFja2V0SWQgPVxuICAgICAgX3ZhbHVlLmxhc3RDdXJyZW50VXNlclNlbnRNZXNzYWdlUGFja2V0SWQ7XG4gICAgdGhpcy5sYXN0U2VlbklkID0gX3ZhbHVlLmxhc3RTZWVuSWQ7XG4gICAgdGhpcy5maXJzdE1lc3NhZ2VJZCA9IF92YWx1ZS5maXJzdE1lc3NhZ2VJZDtcbiAgICB0aGlzLnByZXNlbmNlVHlwZSA9IF92YWx1ZS5wcmVzZW5jZVR5cGU7XG4gICAgUm9vbU1ldGFkYXRhLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgcm9vbVVpZCgpOiBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3Jvb21VaWQ7XG4gIH1cbiAgc2V0IHJvb21VaWQodmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMDEuVWlkIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcm9vbVVpZCA9IHZhbHVlO1xuICB9XG4gIGdldCBsYXN0TWVzc2FnZUlkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2xhc3RNZXNzYWdlSWQ7XG4gIH1cbiAgc2V0IGxhc3RNZXNzYWdlSWQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2xhc3RNZXNzYWdlSWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbGFzdFVwZGF0ZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9sYXN0VXBkYXRlO1xuICB9XG4gIHNldCBsYXN0VXBkYXRlKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9sYXN0VXBkYXRlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGxhc3RDdXJyZW50VXNlclNlbnRNZXNzYWdlSWQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbGFzdEN1cnJlbnRVc2VyU2VudE1lc3NhZ2VJZDtcbiAgfVxuICBzZXQgbGFzdEN1cnJlbnRVc2VyU2VudE1lc3NhZ2VJZCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbGFzdEN1cnJlbnRVc2VyU2VudE1lc3NhZ2VJZCA9IHZhbHVlO1xuICB9XG4gIGdldCBsYXN0Q3VycmVudFVzZXJTZW50TWVzc2FnZVBhY2tldElkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2xhc3RDdXJyZW50VXNlclNlbnRNZXNzYWdlUGFja2V0SWQ7XG4gIH1cbiAgc2V0IGxhc3RDdXJyZW50VXNlclNlbnRNZXNzYWdlUGFja2V0SWQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2xhc3RDdXJyZW50VXNlclNlbnRNZXNzYWdlUGFja2V0SWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbGFzdFNlZW5JZCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9sYXN0U2VlbklkO1xuICB9XG4gIHNldCBsYXN0U2VlbklkKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9sYXN0U2VlbklkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGZpcnN0TWVzc2FnZUlkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpcnN0TWVzc2FnZUlkO1xuICB9XG4gIHNldCBmaXJzdE1lc3NhZ2VJZCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZmlyc3RNZXNzYWdlSWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcHJlc2VuY2VUeXBlKCk6IFByZXNlbmNlVHlwZSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3ByZXNlbmNlVHlwZTtcbiAgfVxuICBzZXQgcHJlc2VuY2VUeXBlKHZhbHVlOiBQcmVzZW5jZVR5cGUgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9wcmVzZW5jZVR5cGUgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBSb29tTWV0YWRhdGEuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogUm9vbU1ldGFkYXRhLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgcm9vbVVpZDogdGhpcy5yb29tVWlkID8gdGhpcy5yb29tVWlkLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBsYXN0TWVzc2FnZUlkOiB0aGlzLmxhc3RNZXNzYWdlSWQsXG4gICAgICBsYXN0VXBkYXRlOiB0aGlzLmxhc3RVcGRhdGUsXG4gICAgICBsYXN0Q3VycmVudFVzZXJTZW50TWVzc2FnZUlkOiB0aGlzLmxhc3RDdXJyZW50VXNlclNlbnRNZXNzYWdlSWQsXG4gICAgICBsYXN0Q3VycmVudFVzZXJTZW50TWVzc2FnZVBhY2tldElkOiB0aGlzXG4gICAgICAgIC5sYXN0Q3VycmVudFVzZXJTZW50TWVzc2FnZVBhY2tldElkLFxuICAgICAgbGFzdFNlZW5JZDogdGhpcy5sYXN0U2VlbklkLFxuICAgICAgZmlyc3RNZXNzYWdlSWQ6IHRoaXMuZmlyc3RNZXNzYWdlSWQsXG4gICAgICBwcmVzZW5jZVR5cGU6IHRoaXMucHJlc2VuY2VUeXBlXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogUm9vbU1ldGFkYXRhLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgcm9vbVVpZDogdGhpcy5yb29tVWlkID8gdGhpcy5yb29tVWlkLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIGxhc3RNZXNzYWdlSWQ6IHRoaXMubGFzdE1lc3NhZ2VJZCxcbiAgICAgIGxhc3RVcGRhdGU6IHRoaXMubGFzdFVwZGF0ZSxcbiAgICAgIGxhc3RDdXJyZW50VXNlclNlbnRNZXNzYWdlSWQ6IHRoaXMubGFzdEN1cnJlbnRVc2VyU2VudE1lc3NhZ2VJZCxcbiAgICAgIGxhc3RDdXJyZW50VXNlclNlbnRNZXNzYWdlUGFja2V0SWQ6IHRoaXNcbiAgICAgICAgLmxhc3RDdXJyZW50VXNlclNlbnRNZXNzYWdlUGFja2V0SWQsXG4gICAgICBsYXN0U2VlbklkOiB0aGlzLmxhc3RTZWVuSWQsXG4gICAgICBmaXJzdE1lc3NhZ2VJZDogdGhpcy5maXJzdE1lc3NhZ2VJZCxcbiAgICAgIHByZXNlbmNlVHlwZTpcbiAgICAgICAgUHJlc2VuY2VUeXBlW1xuICAgICAgICAgIHRoaXMucHJlc2VuY2VUeXBlID09PSBudWxsIHx8IHRoaXMucHJlc2VuY2VUeXBlID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgOiB0aGlzLnByZXNlbmNlVHlwZVxuICAgICAgICBdXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBSb29tTWV0YWRhdGEge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIFJvb21NZXRhZGF0YVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgcm9vbVVpZD86IHByb3RvUHViVjFNb2RlbHMwMDEuVWlkLkFzT2JqZWN0O1xuICAgIGxhc3RNZXNzYWdlSWQ/OiBzdHJpbmc7XG4gICAgbGFzdFVwZGF0ZT86IHN0cmluZztcbiAgICBsYXN0Q3VycmVudFVzZXJTZW50TWVzc2FnZUlkPzogc3RyaW5nO1xuICAgIGxhc3RDdXJyZW50VXNlclNlbnRNZXNzYWdlUGFja2V0SWQ/OiBzdHJpbmc7XG4gICAgbGFzdFNlZW5JZD86IHN0cmluZztcbiAgICBmaXJzdE1lc3NhZ2VJZD86IHN0cmluZztcbiAgICBwcmVzZW5jZVR5cGU/OiBQcmVzZW5jZVR5cGU7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgUm9vbU1ldGFkYXRhXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICByb29tVWlkPzogcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIGxhc3RNZXNzYWdlSWQ/OiBzdHJpbmc7XG4gICAgbGFzdFVwZGF0ZT86IHN0cmluZztcbiAgICBsYXN0Q3VycmVudFVzZXJTZW50TWVzc2FnZUlkPzogc3RyaW5nO1xuICAgIGxhc3RDdXJyZW50VXNlclNlbnRNZXNzYWdlUGFja2V0SWQ/OiBzdHJpbmc7XG4gICAgbGFzdFNlZW5JZD86IHN0cmluZztcbiAgICBmaXJzdE1lc3NhZ2VJZD86IHN0cmluZztcbiAgICBwcmVzZW5jZVR5cGU/OiBzdHJpbmc7XG4gIH1cbn1cbiJdfQ==