import { BinaryReader, BinaryWriter } from 'google-protobuf';
import * as protoPubV1Models000 from '../../pub/v1/models/uid.pb';
import * as protoPubV1Models003 from '../../pub/v1/models/location.pb';
import * as protoPubV1Models010 from '../../pub/v1/models/call.pb';
import * as protoPubV1Models013 from '../../pub/v1/models/seen.pb';
import * as protoPubV1Models014 from '../../pub/v1/models/activity.pb';
import * as protoPubV1Models015 from '../../pub/v1/models/message.pb';
import * as protoPubV1Models016 from '../../pub/v1/models/room-metadata.pb';
/**
 * Message implementation for proto.pub.v1.core.EstablishServerSideStreamReq
 */
export class EstablishServerSideStreamReq {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of EstablishServerSideStreamReq to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        EstablishServerSideStreamReq.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new EstablishServerSideStreamReq();
        EstablishServerSideStreamReq.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) { }
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
                default:
                    _reader.skipField();
            }
        }
        EstablishServerSideStreamReq.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) { }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        EstablishServerSideStreamReq.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {};
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
        return {};
    }
}
EstablishServerSideStreamReq.id = 'proto.pub.v1.core.EstablishServerSideStreamReq';
/**
 * Message implementation for proto.pub.v1.core.SendClientPacketRes
 */
export class SendClientPacketRes {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of SendClientPacketRes to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        SendClientPacketRes.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new SendClientPacketRes();
        SendClientPacketRes.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) { }
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
                default:
                    _reader.skipField();
            }
        }
        SendClientPacketRes.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) { }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        SendClientPacketRes.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {};
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
        return {};
    }
}
SendClientPacketRes.id = 'proto.pub.v1.core.SendClientPacketRes';
/**
 * Message implementation for proto.pub.v1.core.Ping
 */
export class Ping {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Ping to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.lastPongTime = _value.lastPongTime;
        this.clientIsActive = _value.clientIsActive;
        Ping.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new Ping();
        Ping.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.lastPongTime = _instance.lastPongTime || '0';
        _instance.clientIsActive = _instance.clientIsActive || false;
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
                    _instance.lastPongTime = _reader.readInt64String();
                    break;
                case 2:
                    _instance.clientIsActive = _reader.readBool();
                    break;
                default:
                    _reader.skipField();
            }
        }
        Ping.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.lastPongTime) {
            _writer.writeInt64String(1, _instance.lastPongTime);
        }
        if (_instance.clientIsActive) {
            _writer.writeBool(2, _instance.clientIsActive);
        }
    }
    get lastPongTime() {
        return this._lastPongTime;
    }
    set lastPongTime(value) {
        this._lastPongTime = value;
    }
    get clientIsActive() {
        return this._clientIsActive;
    }
    set clientIsActive(value) {
        this._clientIsActive = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        Ping.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            lastPongTime: this.lastPongTime,
            clientIsActive: this.clientIsActive
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
            lastPongTime: this.lastPongTime,
            clientIsActive: this.clientIsActive
        };
    }
}
Ping.id = 'proto.pub.v1.core.Ping';
/**
 * Message implementation for proto.pub.v1.core.Pong
 */
export class Pong {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Pong to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.packetId = _value.packetId;
        this.serverTime = _value.serverTime;
        this.streamInputCapabilityStatus = _value.streamInputCapabilityStatus;
        Pong.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new Pong();
        Pong.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.packetId = _instance.packetId || '';
        _instance.serverTime = _instance.serverTime || '0';
        _instance.streamInputCapabilityStatus =
            _instance.streamInputCapabilityStatus || 0;
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
                    _instance.packetId = _reader.readString();
                    break;
                case 2:
                    _instance.serverTime = _reader.readInt64String();
                    break;
                case 3:
                    _instance.streamInputCapabilityStatus = _reader.readEnum();
                    break;
                default:
                    _reader.skipField();
            }
        }
        Pong.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.packetId) {
            _writer.writeString(1, _instance.packetId);
        }
        if (_instance.serverTime) {
            _writer.writeInt64String(2, _instance.serverTime);
        }
        if (_instance.streamInputCapabilityStatus) {
            _writer.writeEnum(3, _instance.streamInputCapabilityStatus);
        }
    }
    get packetId() {
        return this._packetId;
    }
    set packetId(value) {
        this._packetId = value;
    }
    get serverTime() {
        return this._serverTime;
    }
    set serverTime(value) {
        this._serverTime = value;
    }
    get streamInputCapabilityStatus() {
        return this._streamInputCapabilityStatus;
    }
    set streamInputCapabilityStatus(value) {
        this._streamInputCapabilityStatus = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        Pong.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            packetId: this.packetId,
            serverTime: this.serverTime,
            streamInputCapabilityStatus: this.streamInputCapabilityStatus
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
            packetId: this.packetId,
            serverTime: this.serverTime,
            streamInputCapabilityStatus: Pong.StreamInputCapabilityStatus[this.streamInputCapabilityStatus === null ||
                this.streamInputCapabilityStatus === undefined
                ? 0
                : this.streamInputCapabilityStatus]
        };
    }
}
Pong.id = 'proto.pub.v1.core.Pong';
(function (Pong) {
    let StreamInputCapabilityStatus;
    (function (StreamInputCapabilityStatus) {
        StreamInputCapabilityStatus[StreamInputCapabilityStatus["HIGH_AVAILABILITY"] = 0] = "HIGH_AVAILABILITY";
        StreamInputCapabilityStatus[StreamInputCapabilityStatus["NOT_AVAILABLE"] = 1] = "NOT_AVAILABLE";
        StreamInputCapabilityStatus[StreamInputCapabilityStatus["LOW_AVAILABILITY"] = 2] = "LOW_AVAILABILITY";
    })(StreamInputCapabilityStatus = Pong.StreamInputCapabilityStatus || (Pong.StreamInputCapabilityStatus = {}));
})(Pong || (Pong = {}));
/**
 * Message implementation for proto.pub.v1.core.ExpletivePacket
 */
export class ExpletivePacket {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ExpletivePacket to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.body = _value.body;
        ExpletivePacket.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ExpletivePacket();
        ExpletivePacket.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.body = _instance.body || '';
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
                    _instance.body = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        ExpletivePacket.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.body) {
            _writer.writeString(1, _instance.body);
        }
    }
    get body() {
        return this._body;
    }
    set body(value) {
        this._body = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        ExpletivePacket.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            body: this.body
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
            body: this.body
        };
    }
}
ExpletivePacket.id = 'proto.pub.v1.core.ExpletivePacket';
/**
 * Message implementation for proto.pub.v1.core.RoomPresenceTypeChanged
 */
export class RoomPresenceTypeChanged {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of RoomPresenceTypeChanged to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.uid = _value.uid ? new protoPubV1Models000.Uid(_value.uid) : undefined;
        this.presenceType = _value.presenceType;
        RoomPresenceTypeChanged.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new RoomPresenceTypeChanged();
        RoomPresenceTypeChanged.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.uid = _instance.uid || undefined;
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
                    _instance.uid = new protoPubV1Models000.Uid();
                    _reader.readMessage(_instance.uid, protoPubV1Models000.Uid.deserializeBinaryFromReader);
                    break;
                case 2:
                    _instance.presenceType = _reader.readEnum();
                    break;
                default:
                    _reader.skipField();
            }
        }
        RoomPresenceTypeChanged.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.uid) {
            _writer.writeMessage(1, _instance.uid, protoPubV1Models000.Uid.serializeBinaryToWriter);
        }
        if (_instance.presenceType) {
            _writer.writeEnum(2, _instance.presenceType);
        }
    }
    get uid() {
        return this._uid;
    }
    set uid(value) {
        this._uid = value;
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
        RoomPresenceTypeChanged.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            uid: this.uid ? this.uid.toObject() : undefined,
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
            uid: this.uid ? this.uid.toProtobufJSON(options) : null,
            presenceType: protoPubV1Models016.PresenceType[this.presenceType === null || this.presenceType === undefined
                ? 0
                : this.presenceType]
        };
    }
}
RoomPresenceTypeChanged.id = 'proto.pub.v1.core.RoomPresenceTypeChanged';
/**
 * Message implementation for proto.pub.v1.core.ErrorOnPacket
 */
export class ErrorOnPacket {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ErrorOnPacket to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.packetId = _value.packetId;
        this.error = _value.error;
        ErrorOnPacket.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ErrorOnPacket();
        ErrorOnPacket.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.packetId = _instance.packetId || '';
        _instance.error = _instance.error || 0;
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
                    _instance.packetId = _reader.readString();
                    break;
                case 2:
                    _instance.error = _reader.readEnum();
                    break;
                default:
                    _reader.skipField();
            }
        }
        ErrorOnPacket.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.packetId) {
            _writer.writeString(1, _instance.packetId);
        }
        if (_instance.error) {
            _writer.writeEnum(2, _instance.error);
        }
    }
    get packetId() {
        return this._packetId;
    }
    set packetId(value) {
        this._packetId = value;
    }
    get error() {
        return this._error;
    }
    set error(value) {
        this._error = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        ErrorOnPacket.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            packetId: this.packetId,
            error: this.error
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
            packetId: this.packetId,
            error: ErrorOnPacket.Error[this.error === null || this.error === undefined ? 0 : this.error]
        };
    }
}
ErrorOnPacket.id = 'proto.pub.v1.core.ErrorOnPacket';
(function (ErrorOnPacket) {
    let Error;
    (function (Error) {
        Error[Error["UNKNOWN"] = 0] = "UNKNOWN";
        Error[Error["BAD_REQUEST"] = 1] = "BAD_REQUEST";
        Error[Error["UNAUTHENTICATED"] = 2] = "UNAUTHENTICATED";
        Error[Error["PERMISSION_DENIED"] = 3] = "PERMISSION_DENIED";
        Error[Error["NOT_FOUND"] = 4] = "NOT_FOUND";
        Error[Error["CONFLICT"] = 5] = "CONFLICT";
        Error[Error["RESOURCE_EXHAUSTED"] = 6] = "RESOURCE_EXHAUSTED";
        Error[Error["INTERNAL"] = 7] = "INTERNAL";
        Error[Error["UNIMPLEMENTED"] = 8] = "UNIMPLEMENTED";
        Error[Error["UNAVAILABLE"] = 9] = "UNAVAILABLE";
        Error[Error["DEADLINE_EXCEEDED"] = 10] = "DEADLINE_EXCEEDED";
    })(Error = ErrorOnPacket.Error || (ErrorOnPacket.Error = {}));
})(ErrorOnPacket || (ErrorOnPacket = {}));
/**
 * Message implementation for proto.pub.v1.core.ServerPacket
 */
export class ServerPacket {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ServerPacket to deeply clone from
     */
    constructor(_value) {
        this._type = ServerPacket.TypeCase.none;
        _value = _value || {};
        this.error = _value.error ? new ErrorOnPacket(_value.error) : undefined;
        this.message = _value.message
            ? new protoPubV1Models015.Message(_value.message)
            : undefined;
        this.seen = _value.seen
            ? new protoPubV1Models013.Seen(_value.seen)
            : undefined;
        this.activity = _value.activity
            ? new protoPubV1Models014.Activity(_value.activity)
            : undefined;
        this.roomPresenceTypeChanged = _value.roomPresenceTypeChanged
            ? new RoomPresenceTypeChanged(_value.roomPresenceTypeChanged)
            : undefined;
        this.liveLocationStatusChanged = _value.liveLocationStatusChanged
            ? new protoPubV1Models003.LiveLocation(_value.liveLocationStatusChanged)
            : undefined;
        this.pong = _value.pong ? new Pong(_value.pong) : undefined;
        this.messageDeliveryAck = _value.messageDeliveryAck
            ? new protoPubV1Models015.MessageDeliveryAck(_value.messageDeliveryAck)
            : undefined;
        this.callOffer = _value.callOffer
            ? new protoPubV1Models010.CallOffer(_value.callOffer)
            : undefined;
        this.callAnswer = _value.callAnswer
            ? new protoPubV1Models010.CallAnswer(_value.callAnswer)
            : undefined;
        this.expletivePacket = _value.expletivePacket
            ? new ExpletivePacket(_value.expletivePacket)
            : undefined;
        this.packetPadding = _value.packetPadding;
        ServerPacket.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ServerPacket();
        ServerPacket.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.packetPadding = _instance.packetPadding || '';
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
                    _instance.error = new ErrorOnPacket();
                    _reader.readMessage(_instance.error, ErrorOnPacket.deserializeBinaryFromReader);
                    break;
                case 2:
                    _instance.message = new protoPubV1Models015.Message();
                    _reader.readMessage(_instance.message, protoPubV1Models015.Message.deserializeBinaryFromReader);
                    break;
                case 3:
                    _instance.seen = new protoPubV1Models013.Seen();
                    _reader.readMessage(_instance.seen, protoPubV1Models013.Seen.deserializeBinaryFromReader);
                    break;
                case 4:
                    _instance.activity = new protoPubV1Models014.Activity();
                    _reader.readMessage(_instance.activity, protoPubV1Models014.Activity.deserializeBinaryFromReader);
                    break;
                case 5:
                    _instance.roomPresenceTypeChanged = new RoomPresenceTypeChanged();
                    _reader.readMessage(_instance.roomPresenceTypeChanged, RoomPresenceTypeChanged.deserializeBinaryFromReader);
                    break;
                case 7:
                    _instance.liveLocationStatusChanged = new protoPubV1Models003.LiveLocation();
                    _reader.readMessage(_instance.liveLocationStatusChanged, protoPubV1Models003.LiveLocation.deserializeBinaryFromReader);
                    break;
                case 8:
                    _instance.pong = new Pong();
                    _reader.readMessage(_instance.pong, Pong.deserializeBinaryFromReader);
                    break;
                case 9:
                    _instance.messageDeliveryAck = new protoPubV1Models015.MessageDeliveryAck();
                    _reader.readMessage(_instance.messageDeliveryAck, protoPubV1Models015.MessageDeliveryAck.deserializeBinaryFromReader);
                    break;
                case 10:
                    _instance.callOffer = new protoPubV1Models010.CallOffer();
                    _reader.readMessage(_instance.callOffer, protoPubV1Models010.CallOffer.deserializeBinaryFromReader);
                    break;
                case 11:
                    _instance.callAnswer = new protoPubV1Models010.CallAnswer();
                    _reader.readMessage(_instance.callAnswer, protoPubV1Models010.CallAnswer.deserializeBinaryFromReader);
                    break;
                case 12:
                    _instance.expletivePacket = new ExpletivePacket();
                    _reader.readMessage(_instance.expletivePacket, ExpletivePacket.deserializeBinaryFromReader);
                    break;
                case 6:
                    _instance.packetPadding = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        ServerPacket.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.error) {
            _writer.writeMessage(1, _instance.error, ErrorOnPacket.serializeBinaryToWriter);
        }
        if (_instance.message) {
            _writer.writeMessage(2, _instance.message, protoPubV1Models015.Message.serializeBinaryToWriter);
        }
        if (_instance.seen) {
            _writer.writeMessage(3, _instance.seen, protoPubV1Models013.Seen.serializeBinaryToWriter);
        }
        if (_instance.activity) {
            _writer.writeMessage(4, _instance.activity, protoPubV1Models014.Activity.serializeBinaryToWriter);
        }
        if (_instance.roomPresenceTypeChanged) {
            _writer.writeMessage(5, _instance.roomPresenceTypeChanged, RoomPresenceTypeChanged.serializeBinaryToWriter);
        }
        if (_instance.liveLocationStatusChanged) {
            _writer.writeMessage(7, _instance.liveLocationStatusChanged, protoPubV1Models003.LiveLocation.serializeBinaryToWriter);
        }
        if (_instance.pong) {
            _writer.writeMessage(8, _instance.pong, Pong.serializeBinaryToWriter);
        }
        if (_instance.messageDeliveryAck) {
            _writer.writeMessage(9, _instance.messageDeliveryAck, protoPubV1Models015.MessageDeliveryAck.serializeBinaryToWriter);
        }
        if (_instance.callOffer) {
            _writer.writeMessage(10, _instance.callOffer, protoPubV1Models010.CallOffer.serializeBinaryToWriter);
        }
        if (_instance.callAnswer) {
            _writer.writeMessage(11, _instance.callAnswer, protoPubV1Models010.CallAnswer.serializeBinaryToWriter);
        }
        if (_instance.expletivePacket) {
            _writer.writeMessage(12, _instance.expletivePacket, ExpletivePacket.serializeBinaryToWriter);
        }
        if (_instance.packetPadding) {
            _writer.writeString(6, _instance.packetPadding);
        }
    }
    get error() {
        return this._error;
    }
    set error(value) {
        if (value !== undefined && value !== null) {
            this._message = this._seen = this._activity = this._roomPresenceTypeChanged = this._liveLocationStatusChanged = this._pong = this._messageDeliveryAck = this._callOffer = this._callAnswer = this._expletivePacket = undefined;
            this._type = ServerPacket.TypeCase.error;
        }
        this._error = value;
    }
    get message() {
        return this._message;
    }
    set message(value) {
        if (value !== undefined && value !== null) {
            this._error = this._seen = this._activity = this._roomPresenceTypeChanged = this._liveLocationStatusChanged = this._pong = this._messageDeliveryAck = this._callOffer = this._callAnswer = this._expletivePacket = undefined;
            this._type = ServerPacket.TypeCase.message;
        }
        this._message = value;
    }
    get seen() {
        return this._seen;
    }
    set seen(value) {
        if (value !== undefined && value !== null) {
            this._error = this._message = this._activity = this._roomPresenceTypeChanged = this._liveLocationStatusChanged = this._pong = this._messageDeliveryAck = this._callOffer = this._callAnswer = this._expletivePacket = undefined;
            this._type = ServerPacket.TypeCase.seen;
        }
        this._seen = value;
    }
    get activity() {
        return this._activity;
    }
    set activity(value) {
        if (value !== undefined && value !== null) {
            this._error = this._message = this._seen = this._roomPresenceTypeChanged = this._liveLocationStatusChanged = this._pong = this._messageDeliveryAck = this._callOffer = this._callAnswer = this._expletivePacket = undefined;
            this._type = ServerPacket.TypeCase.activity;
        }
        this._activity = value;
    }
    get roomPresenceTypeChanged() {
        return this._roomPresenceTypeChanged;
    }
    set roomPresenceTypeChanged(value) {
        if (value !== undefined && value !== null) {
            this._error = this._message = this._seen = this._activity = this._liveLocationStatusChanged = this._pong = this._messageDeliveryAck = this._callOffer = this._callAnswer = this._expletivePacket = undefined;
            this._type = ServerPacket.TypeCase.roomPresenceTypeChanged;
        }
        this._roomPresenceTypeChanged = value;
    }
    get liveLocationStatusChanged() {
        return this._liveLocationStatusChanged;
    }
    set liveLocationStatusChanged(value) {
        if (value !== undefined && value !== null) {
            this._error = this._message = this._seen = this._activity = this._roomPresenceTypeChanged = this._pong = this._messageDeliveryAck = this._callOffer = this._callAnswer = this._expletivePacket = undefined;
            this._type = ServerPacket.TypeCase.liveLocationStatusChanged;
        }
        this._liveLocationStatusChanged = value;
    }
    get pong() {
        return this._pong;
    }
    set pong(value) {
        if (value !== undefined && value !== null) {
            this._error = this._message = this._seen = this._activity = this._roomPresenceTypeChanged = this._liveLocationStatusChanged = this._messageDeliveryAck = this._callOffer = this._callAnswer = this._expletivePacket = undefined;
            this._type = ServerPacket.TypeCase.pong;
        }
        this._pong = value;
    }
    get messageDeliveryAck() {
        return this._messageDeliveryAck;
    }
    set messageDeliveryAck(value) {
        if (value !== undefined && value !== null) {
            this._error = this._message = this._seen = this._activity = this._roomPresenceTypeChanged = this._liveLocationStatusChanged = this._pong = this._callOffer = this._callAnswer = this._expletivePacket = undefined;
            this._type = ServerPacket.TypeCase.messageDeliveryAck;
        }
        this._messageDeliveryAck = value;
    }
    get callOffer() {
        return this._callOffer;
    }
    set callOffer(value) {
        if (value !== undefined && value !== null) {
            this._error = this._message = this._seen = this._activity = this._roomPresenceTypeChanged = this._liveLocationStatusChanged = this._pong = this._messageDeliveryAck = this._callAnswer = this._expletivePacket = undefined;
            this._type = ServerPacket.TypeCase.callOffer;
        }
        this._callOffer = value;
    }
    get callAnswer() {
        return this._callAnswer;
    }
    set callAnswer(value) {
        if (value !== undefined && value !== null) {
            this._error = this._message = this._seen = this._activity = this._roomPresenceTypeChanged = this._liveLocationStatusChanged = this._pong = this._messageDeliveryAck = this._callOffer = this._expletivePacket = undefined;
            this._type = ServerPacket.TypeCase.callAnswer;
        }
        this._callAnswer = value;
    }
    get expletivePacket() {
        return this._expletivePacket;
    }
    set expletivePacket(value) {
        if (value !== undefined && value !== null) {
            this._error = this._message = this._seen = this._activity = this._roomPresenceTypeChanged = this._liveLocationStatusChanged = this._pong = this._messageDeliveryAck = this._callOffer = this._callAnswer = undefined;
            this._type = ServerPacket.TypeCase.expletivePacket;
        }
        this._expletivePacket = value;
    }
    get packetPadding() {
        return this._packetPadding;
    }
    set packetPadding(value) {
        this._packetPadding = value;
    }
    get type() {
        return this._type;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        ServerPacket.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            error: this.error ? this.error.toObject() : undefined,
            message: this.message ? this.message.toObject() : undefined,
            seen: this.seen ? this.seen.toObject() : undefined,
            activity: this.activity ? this.activity.toObject() : undefined,
            roomPresenceTypeChanged: this.roomPresenceTypeChanged
                ? this.roomPresenceTypeChanged.toObject()
                : undefined,
            liveLocationStatusChanged: this.liveLocationStatusChanged
                ? this.liveLocationStatusChanged.toObject()
                : undefined,
            pong: this.pong ? this.pong.toObject() : undefined,
            messageDeliveryAck: this.messageDeliveryAck
                ? this.messageDeliveryAck.toObject()
                : undefined,
            callOffer: this.callOffer ? this.callOffer.toObject() : undefined,
            callAnswer: this.callAnswer ? this.callAnswer.toObject() : undefined,
            expletivePacket: this.expletivePacket
                ? this.expletivePacket.toObject()
                : undefined,
            packetPadding: this.packetPadding
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
            error: this.error ? this.error.toProtobufJSON(options) : null,
            message: this.message ? this.message.toProtobufJSON(options) : null,
            seen: this.seen ? this.seen.toProtobufJSON(options) : null,
            activity: this.activity ? this.activity.toProtobufJSON(options) : null,
            roomPresenceTypeChanged: this.roomPresenceTypeChanged
                ? this.roomPresenceTypeChanged.toProtobufJSON(options)
                : null,
            liveLocationStatusChanged: this.liveLocationStatusChanged
                ? this.liveLocationStatusChanged.toProtobufJSON(options)
                : null,
            pong: this.pong ? this.pong.toProtobufJSON(options) : null,
            messageDeliveryAck: this.messageDeliveryAck
                ? this.messageDeliveryAck.toProtobufJSON(options)
                : null,
            callOffer: this.callOffer ? this.callOffer.toProtobufJSON(options) : null,
            callAnswer: this.callAnswer
                ? this.callAnswer.toProtobufJSON(options)
                : null,
            expletivePacket: this.expletivePacket
                ? this.expletivePacket.toProtobufJSON(options)
                : null,
            packetPadding: this.packetPadding
        };
    }
}
ServerPacket.id = 'proto.pub.v1.core.ServerPacket';
(function (ServerPacket) {
    let TypeCase;
    (function (TypeCase) {
        TypeCase[TypeCase["none"] = 0] = "none";
        TypeCase[TypeCase["error"] = 1] = "error";
        TypeCase[TypeCase["message"] = 2] = "message";
        TypeCase[TypeCase["seen"] = 3] = "seen";
        TypeCase[TypeCase["activity"] = 4] = "activity";
        TypeCase[TypeCase["roomPresenceTypeChanged"] = 5] = "roomPresenceTypeChanged";
        TypeCase[TypeCase["liveLocationStatusChanged"] = 6] = "liveLocationStatusChanged";
        TypeCase[TypeCase["pong"] = 7] = "pong";
        TypeCase[TypeCase["messageDeliveryAck"] = 8] = "messageDeliveryAck";
        TypeCase[TypeCase["callOffer"] = 9] = "callOffer";
        TypeCase[TypeCase["callAnswer"] = 10] = "callAnswer";
        TypeCase[TypeCase["expletivePacket"] = 11] = "expletivePacket";
    })(TypeCase = ServerPacket.TypeCase || (ServerPacket.TypeCase = {}));
})(ServerPacket || (ServerPacket = {}));
/**
 * Message implementation for proto.pub.v1.core.ClientPacket
 */
export class ClientPacket {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ClientPacket to deeply clone from
     */
    constructor(_value) {
        this._type = ClientPacket.TypeCase.none;
        _value = _value || {};
        this.id = _value.id;
        this.message = _value.message
            ? new protoPubV1Models015.MessageByClient(_value.message)
            : undefined;
        this.seen = _value.seen
            ? new protoPubV1Models013.SeenByClient(_value.seen)
            : undefined;
        this.activity = _value.activity
            ? new protoPubV1Models014.ActivityByClient(_value.activity)
            : undefined;
        this.ping = _value.ping ? new Ping(_value.ping) : undefined;
        this.callOffer = _value.callOffer
            ? new protoPubV1Models010.CallOfferByClient(_value.callOffer)
            : undefined;
        this.callAnswer = _value.callAnswer
            ? new protoPubV1Models010.CallAnswerByClient(_value.callAnswer)
            : undefined;
        ClientPacket.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ClientPacket();
        ClientPacket.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.id = _instance.id || '';
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
                    _instance.id = _reader.readString();
                    break;
                case 2:
                    _instance.message = new protoPubV1Models015.MessageByClient();
                    _reader.readMessage(_instance.message, protoPubV1Models015.MessageByClient.deserializeBinaryFromReader);
                    break;
                case 3:
                    _instance.seen = new protoPubV1Models013.SeenByClient();
                    _reader.readMessage(_instance.seen, protoPubV1Models013.SeenByClient.deserializeBinaryFromReader);
                    break;
                case 4:
                    _instance.activity = new protoPubV1Models014.ActivityByClient();
                    _reader.readMessage(_instance.activity, protoPubV1Models014.ActivityByClient.deserializeBinaryFromReader);
                    break;
                case 5:
                    _instance.ping = new Ping();
                    _reader.readMessage(_instance.ping, Ping.deserializeBinaryFromReader);
                    break;
                case 6:
                    _instance.callOffer = new protoPubV1Models010.CallOfferByClient();
                    _reader.readMessage(_instance.callOffer, protoPubV1Models010.CallOfferByClient.deserializeBinaryFromReader);
                    break;
                case 7:
                    _instance.callAnswer = new protoPubV1Models010.CallAnswerByClient();
                    _reader.readMessage(_instance.callAnswer, protoPubV1Models010.CallAnswerByClient.deserializeBinaryFromReader);
                    break;
                default:
                    _reader.skipField();
            }
        }
        ClientPacket.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.id) {
            _writer.writeString(1, _instance.id);
        }
        if (_instance.message) {
            _writer.writeMessage(2, _instance.message, protoPubV1Models015.MessageByClient.serializeBinaryToWriter);
        }
        if (_instance.seen) {
            _writer.writeMessage(3, _instance.seen, protoPubV1Models013.SeenByClient.serializeBinaryToWriter);
        }
        if (_instance.activity) {
            _writer.writeMessage(4, _instance.activity, protoPubV1Models014.ActivityByClient.serializeBinaryToWriter);
        }
        if (_instance.ping) {
            _writer.writeMessage(5, _instance.ping, Ping.serializeBinaryToWriter);
        }
        if (_instance.callOffer) {
            _writer.writeMessage(6, _instance.callOffer, protoPubV1Models010.CallOfferByClient.serializeBinaryToWriter);
        }
        if (_instance.callAnswer) {
            _writer.writeMessage(7, _instance.callAnswer, protoPubV1Models010.CallAnswerByClient.serializeBinaryToWriter);
        }
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get message() {
        return this._message;
    }
    set message(value) {
        if (value !== undefined && value !== null) {
            this._seen = this._activity = this._ping = this._callOffer = this._callAnswer = undefined;
            this._type = ClientPacket.TypeCase.message;
        }
        this._message = value;
    }
    get seen() {
        return this._seen;
    }
    set seen(value) {
        if (value !== undefined && value !== null) {
            this._message = this._activity = this._ping = this._callOffer = this._callAnswer = undefined;
            this._type = ClientPacket.TypeCase.seen;
        }
        this._seen = value;
    }
    get activity() {
        return this._activity;
    }
    set activity(value) {
        if (value !== undefined && value !== null) {
            this._message = this._seen = this._ping = this._callOffer = this._callAnswer = undefined;
            this._type = ClientPacket.TypeCase.activity;
        }
        this._activity = value;
    }
    get ping() {
        return this._ping;
    }
    set ping(value) {
        if (value !== undefined && value !== null) {
            this._message = this._seen = this._activity = this._callOffer = this._callAnswer = undefined;
            this._type = ClientPacket.TypeCase.ping;
        }
        this._ping = value;
    }
    get callOffer() {
        return this._callOffer;
    }
    set callOffer(value) {
        if (value !== undefined && value !== null) {
            this._message = this._seen = this._activity = this._ping = this._callAnswer = undefined;
            this._type = ClientPacket.TypeCase.callOffer;
        }
        this._callOffer = value;
    }
    get callAnswer() {
        return this._callAnswer;
    }
    set callAnswer(value) {
        if (value !== undefined && value !== null) {
            this._message = this._seen = this._activity = this._ping = this._callOffer = undefined;
            this._type = ClientPacket.TypeCase.callAnswer;
        }
        this._callAnswer = value;
    }
    get type() {
        return this._type;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        ClientPacket.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            id: this.id,
            message: this.message ? this.message.toObject() : undefined,
            seen: this.seen ? this.seen.toObject() : undefined,
            activity: this.activity ? this.activity.toObject() : undefined,
            ping: this.ping ? this.ping.toObject() : undefined,
            callOffer: this.callOffer ? this.callOffer.toObject() : undefined,
            callAnswer: this.callAnswer ? this.callAnswer.toObject() : undefined
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
            id: this.id,
            message: this.message ? this.message.toProtobufJSON(options) : null,
            seen: this.seen ? this.seen.toProtobufJSON(options) : null,
            activity: this.activity ? this.activity.toProtobufJSON(options) : null,
            ping: this.ping ? this.ping.toProtobufJSON(options) : null,
            callOffer: this.callOffer ? this.callOffer.toProtobufJSON(options) : null,
            callAnswer: this.callAnswer
                ? this.callAnswer.toProtobufJSON(options)
                : null
        };
    }
}
ClientPacket.id = 'proto.pub.v1.core.ClientPacket';
(function (ClientPacket) {
    let TypeCase;
    (function (TypeCase) {
        TypeCase[TypeCase["none"] = 0] = "none";
        TypeCase[TypeCase["message"] = 1] = "message";
        TypeCase[TypeCase["seen"] = 2] = "seen";
        TypeCase[TypeCase["activity"] = 3] = "activity";
        TypeCase[TypeCase["ping"] = 4] = "ping";
        TypeCase[TypeCase["callOffer"] = 5] = "callOffer";
        TypeCase[TypeCase["callAnswer"] = 6] = "callAnswer";
    })(TypeCase = ClientPacket.TypeCase || (ClientPacket.TypeCase = {}));
})(ClientPacket || (ClientPacket = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5wYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Byb3RvL3NyYy9saWIvcHViL3YxL2NvcmUucGIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV0EsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQWMsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RSxPQUFPLEtBQUssbUJBQW1CLE1BQU0sNEJBQTRCLENBQUM7QUFHbEUsT0FBTyxLQUFLLG1CQUFtQixNQUFNLGlDQUFpQyxDQUFDO0FBT3ZFLE9BQU8sS0FBSyxtQkFBbUIsTUFBTSw2QkFBNkIsQ0FBQztBQUduRSxPQUFPLEtBQUssbUJBQW1CLE1BQU0sNkJBQTZCLENBQUM7QUFDbkUsT0FBTyxLQUFLLG1CQUFtQixNQUFNLGlDQUFpQyxDQUFDO0FBQ3ZFLE9BQU8sS0FBSyxtQkFBbUIsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN0RSxPQUFPLEtBQUssbUJBQW1CLE1BQU0sc0NBQXNDLENBQUM7QUFDNUU7O0dBRUc7QUFDSCxNQUFNLE9BQU8sNEJBQTRCO0lBcUR2Qzs7O09BR0c7SUFDSCxZQUNFLE1BQWdFO1FBRWhFLE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO1FBQ3RCLDRCQUE0QixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBM0REOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFpQjtRQUN4QyxNQUFNLFFBQVEsR0FBRyxJQUFJLDRCQUE0QixFQUFFLENBQUM7UUFDcEQsNEJBQTRCLENBQUMsMkJBQTJCLENBQ3RELFFBQVEsRUFDUixJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FDeEIsQ0FBQztRQUNGLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQXVDLElBQUcsQ0FBQztJQUUvRDs7OztPQUlHO0lBQ0gs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QUFVLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQztnQkFDekMsQ0FBQyxDQUFDLElBQUk7U0FDVCxDQUFDO0lBQ0osQ0FBQzs7QUF4U00sZUFBRSxHQUFHLGdDQUFnQyxDQUFDO0FBMFMvQyxXQUFjLFlBQVk7SUEwQnhCLElBQVksUUFRWDtJQVJELFdBQVksUUFBUTtRQUNsQix1Q0FBUSxDQUFBO1FBQ1IsNkNBQVcsQ0FBQTtRQUNYLHVDQUFRLENBQUE7UUFDUiwrQ0FBWSxDQUFBO1FBQ1osdUNBQVEsQ0FBQTtRQUNSLGlEQUFhLENBQUE7UUFDYixtREFBYyxDQUFBO0lBQ2hCLENBQUMsRUFSVyxRQUFRLEdBQVIscUJBQVEsS0FBUixxQkFBUSxRQVFuQjtBQUNILENBQUMsRUFuQ2EsWUFBWSxLQUFaLFlBQVksUUFtQ3pCIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGUgKi9cbi8qIGVzbGludC1kaXNhYmxlICovXG4vLyBAdHMtbm9jaGVja1xuLy9cbi8vIFRISVMgSVMgQSBHRU5FUkFURUQgRklMRVxuLy8gRE8gTk9UIE1PRElGWSBJVCEgWU9VUiBDSEFOR0VTIFdJTEwgQkUgTE9TVFxuaW1wb3J0IHtcbiAgR3JwY01lc3NhZ2UsXG4gIFJlY3Vyc2l2ZVBhcnRpYWwsXG4gIFRvUHJvdG9idWZKU09OT3B0aW9uc1xufSBmcm9tICdAbmd4LWdycGMvY29tbW9uJztcbmltcG9ydCB7IEJpbmFyeVJlYWRlciwgQmluYXJ5V3JpdGVyLCBCeXRlU291cmNlIH0gZnJvbSAnZ29vZ2xlLXByb3RvYnVmJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMDAgZnJvbSAnLi4vLi4vcHViL3YxL21vZGVscy91aWQucGInO1xuaW1wb3J0ICogYXMgcHJvdG9QdWJWMU1vZGVsczAwMSBmcm9tICcuLi8uLi9wdWIvdjEvbW9kZWxzL2ZpbGUucGInO1xuaW1wb3J0ICogYXMgcHJvdG9QdWJWMU1vZGVsczAwMiBmcm9tICcuLi8uLi9wdWIvdjEvbW9kZWxzL3N0aWNrZXIucGInO1xuaW1wb3J0ICogYXMgcHJvdG9QdWJWMU1vZGVsczAwMyBmcm9tICcuLi8uLi9wdWIvdjEvbW9kZWxzL2xvY2F0aW9uLnBiJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMDQgZnJvbSAnLi4vLi4vcHViL3YxL21vZGVscy9wYXltZW50LnBiJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMDUgZnJvbSAnLi4vLi4vcHViL3YxL21vZGVscy9wZXJzaXN0ZW50LWV2ZW50LnBiJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMDYgZnJvbSAnLi4vLi4vcHViL3YxL21vZGVscy9zaGFyZS1wcml2YXRlLWRhdGEucGInO1xuaW1wb3J0ICogYXMgcHJvdG9QdWJWMU1vZGVsczAwNyBmcm9tICcuLi8uLi9wdWIvdjEvbW9kZWxzL2Zvcm0ucGInO1xuaW1wb3J0ICogYXMgcHJvdG9QdWJWMU1vZGVsczAwOCBmcm9tICcuLi8uLi9wdWIvdjEvbW9kZWxzL3BvbGwucGInO1xuaW1wb3J0ICogYXMgcHJvdG9QdWJWMU1vZGVsczAwOSBmcm9tICcuLi8uLi9wdWIvdjEvbW9kZWxzL211Yy5wYic7XG5pbXBvcnQgKiBhcyBwcm90b1B1YlYxTW9kZWxzMDEwIGZyb20gJy4uLy4uL3B1Yi92MS9tb2RlbHMvY2FsbC5wYic7XG5pbXBvcnQgKiBhcyBwcm90b1B1YlYxTW9kZWxzMDExIGZyb20gJy4uLy4uL3B1Yi92MS9tb2RlbHMvbWFya3VwLnBiJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMTIgZnJvbSAnLi4vLi4vcHViL3YxL21vZGVscy9jYXRlZ29yaWVzLnBiJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMTMgZnJvbSAnLi4vLi4vcHViL3YxL21vZGVscy9zZWVuLnBiJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMTQgZnJvbSAnLi4vLi4vcHViL3YxL21vZGVscy9hY3Rpdml0eS5wYic7XG5pbXBvcnQgKiBhcyBwcm90b1B1YlYxTW9kZWxzMDE1IGZyb20gJy4uLy4uL3B1Yi92MS9tb2RlbHMvbWVzc2FnZS5wYic7XG5pbXBvcnQgKiBhcyBwcm90b1B1YlYxTW9kZWxzMDE2IGZyb20gJy4uLy4uL3B1Yi92MS9tb2RlbHMvcm9vbS1tZXRhZGF0YS5wYic7XG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIHByb3RvLnB1Yi52MS5jb3JlLkVzdGFibGlzaFNlcnZlclNpZGVTdHJlYW1SZXFcbiAqL1xuZXhwb3J0IGNsYXNzIEVzdGFibGlzaFNlcnZlclNpZGVTdHJlYW1SZXEgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdwcm90by5wdWIudjEuY29yZS5Fc3RhYmxpc2hTZXJ2ZXJTaWRlU3RyZWFtUmVxJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgRXN0YWJsaXNoU2VydmVyU2lkZVN0cmVhbVJlcSgpO1xuICAgIEVzdGFibGlzaFNlcnZlclNpZGVTdHJlYW1SZXEuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBFc3RhYmxpc2hTZXJ2ZXJTaWRlU3RyZWFtUmVxKSB7fVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IEVzdGFibGlzaFNlcnZlclNpZGVTdHJlYW1SZXEsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgRXN0YWJsaXNoU2VydmVyU2lkZVN0cmVhbVJlcS5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IEVzdGFibGlzaFNlcnZlclNpZGVTdHJlYW1SZXEsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge31cblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIEVzdGFibGlzaFNlcnZlclNpZGVTdHJlYW1SZXEgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8RXN0YWJsaXNoU2VydmVyU2lkZVN0cmVhbVJlcS5Bc09iamVjdD5cbiAgKSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIEVzdGFibGlzaFNlcnZlclNpZGVTdHJlYW1SZXEucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIEVzdGFibGlzaFNlcnZlclNpZGVTdHJlYW1SZXEuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogRXN0YWJsaXNoU2VydmVyU2lkZVN0cmVhbVJlcS5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBFc3RhYmxpc2hTZXJ2ZXJTaWRlU3RyZWFtUmVxLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge307XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgRXN0YWJsaXNoU2VydmVyU2lkZVN0cmVhbVJlcSB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgRXN0YWJsaXNoU2VydmVyU2lkZVN0cmVhbVJlcVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7fVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBFc3RhYmxpc2hTZXJ2ZXJTaWRlU3RyZWFtUmVxXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHt9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3IgcHJvdG8ucHViLnYxLmNvcmUuU2VuZENsaWVudFBhY2tldFJlc1xuICovXG5leHBvcnQgY2xhc3MgU2VuZENsaWVudFBhY2tldFJlcyBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ3Byb3RvLnB1Yi52MS5jb3JlLlNlbmRDbGllbnRQYWNrZXRSZXMnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBTZW5kQ2xpZW50UGFja2V0UmVzKCk7XG4gICAgU2VuZENsaWVudFBhY2tldFJlcy5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IFNlbmRDbGllbnRQYWNrZXRSZXMpIHt9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogU2VuZENsaWVudFBhY2tldFJlcyxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBTZW5kQ2xpZW50UGFja2V0UmVzLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogU2VuZENsaWVudFBhY2tldFJlcyxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgU2VuZENsaWVudFBhY2tldFJlcyB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxTZW5kQ2xpZW50UGFja2V0UmVzLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICBTZW5kQ2xpZW50UGFja2V0UmVzLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBTZW5kQ2xpZW50UGFja2V0UmVzLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IFNlbmRDbGllbnRQYWNrZXRSZXMuQXNPYmplY3Qge1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogU2VuZENsaWVudFBhY2tldFJlcy5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIFNlbmRDbGllbnRQYWNrZXRSZXMge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIFNlbmRDbGllbnRQYWNrZXRSZXNcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge31cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgU2VuZENsaWVudFBhY2tldFJlc1xuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7fVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIHByb3RvLnB1Yi52MS5jb3JlLlBpbmdcbiAqL1xuZXhwb3J0IGNsYXNzIFBpbmcgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdwcm90by5wdWIudjEuY29yZS5QaW5nJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgUGluZygpO1xuICAgIFBpbmcuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBQaW5nKSB7XG4gICAgX2luc3RhbmNlLmxhc3RQb25nVGltZSA9IF9pbnN0YW5jZS5sYXN0UG9uZ1RpbWUgfHwgJzAnO1xuICAgIF9pbnN0YW5jZS5jbGllbnRJc0FjdGl2ZSA9IF9pbnN0YW5jZS5jbGllbnRJc0FjdGl2ZSB8fCBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihfaW5zdGFuY2U6IFBpbmcsIF9yZWFkZXI6IEJpbmFyeVJlYWRlcikge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLmxhc3RQb25nVGltZSA9IF9yZWFkZXIucmVhZEludDY0U3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UuY2xpZW50SXNBY3RpdmUgPSBfcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBQaW5nLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKF9pbnN0YW5jZTogUGluZywgX3dyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5sYXN0UG9uZ1RpbWUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQ2NFN0cmluZygxLCBfaW5zdGFuY2UubGFzdFBvbmdUaW1lKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5jbGllbnRJc0FjdGl2ZSkge1xuICAgICAgX3dyaXRlci53cml0ZUJvb2woMiwgX2luc3RhbmNlLmNsaWVudElzQWN0aXZlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9sYXN0UG9uZ1RpbWU/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2NsaWVudElzQWN0aXZlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIFBpbmcgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8UGluZy5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5sYXN0UG9uZ1RpbWUgPSBfdmFsdWUubGFzdFBvbmdUaW1lO1xuICAgIHRoaXMuY2xpZW50SXNBY3RpdmUgPSBfdmFsdWUuY2xpZW50SXNBY3RpdmU7XG4gICAgUGluZy5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGxhc3RQb25nVGltZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9sYXN0UG9uZ1RpbWU7XG4gIH1cbiAgc2V0IGxhc3RQb25nVGltZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbGFzdFBvbmdUaW1lID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGNsaWVudElzQWN0aXZlKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9jbGllbnRJc0FjdGl2ZTtcbiAgfVxuICBzZXQgY2xpZW50SXNBY3RpdmUodmFsdWU6IGJvb2xlYW4gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9jbGllbnRJc0FjdGl2ZSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFBpbmcuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogUGluZy5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxhc3RQb25nVGltZTogdGhpcy5sYXN0UG9uZ1RpbWUsXG4gICAgICBjbGllbnRJc0FjdGl2ZTogdGhpcy5jbGllbnRJc0FjdGl2ZVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IFBpbmcuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBsYXN0UG9uZ1RpbWU6IHRoaXMubGFzdFBvbmdUaW1lLFxuICAgICAgY2xpZW50SXNBY3RpdmU6IHRoaXMuY2xpZW50SXNBY3RpdmVcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIFBpbmcge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIFBpbmdcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIGxhc3RQb25nVGltZT86IHN0cmluZztcbiAgICBjbGllbnRJc0FjdGl2ZT86IGJvb2xlYW47XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgUGluZ1xuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgbGFzdFBvbmdUaW1lPzogc3RyaW5nO1xuICAgIGNsaWVudElzQWN0aXZlPzogYm9vbGVhbjtcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIHByb3RvLnB1Yi52MS5jb3JlLlBvbmdcbiAqL1xuZXhwb3J0IGNsYXNzIFBvbmcgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdwcm90by5wdWIudjEuY29yZS5Qb25nJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgUG9uZygpO1xuICAgIFBvbmcuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBQb25nKSB7XG4gICAgX2luc3RhbmNlLnBhY2tldElkID0gX2luc3RhbmNlLnBhY2tldElkIHx8ICcnO1xuICAgIF9pbnN0YW5jZS5zZXJ2ZXJUaW1lID0gX2luc3RhbmNlLnNlcnZlclRpbWUgfHwgJzAnO1xuICAgIF9pbnN0YW5jZS5zdHJlYW1JbnB1dENhcGFiaWxpdHlTdGF0dXMgPVxuICAgICAgX2luc3RhbmNlLnN0cmVhbUlucHV0Q2FwYWJpbGl0eVN0YXR1cyB8fCAwO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKF9pbnN0YW5jZTogUG9uZywgX3JlYWRlcjogQmluYXJ5UmVhZGVyKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UucGFja2V0SWQgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5zZXJ2ZXJUaW1lID0gX3JlYWRlci5yZWFkSW50NjRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIF9pbnN0YW5jZS5zdHJlYW1JbnB1dENhcGFiaWxpdHlTdGF0dXMgPSBfcmVhZGVyLnJlYWRFbnVtKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBQb25nLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKF9pbnN0YW5jZTogUG9uZywgX3dyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5wYWNrZXRJZCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2UucGFja2V0SWQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnNlcnZlclRpbWUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQ2NFN0cmluZygyLCBfaW5zdGFuY2Uuc2VydmVyVGltZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uuc3RyZWFtSW5wdXRDYXBhYmlsaXR5U3RhdHVzKSB7XG4gICAgICBfd3JpdGVyLndyaXRlRW51bSgzLCBfaW5zdGFuY2Uuc3RyZWFtSW5wdXRDYXBhYmlsaXR5U3RhdHVzKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9wYWNrZXRJZD86IHN0cmluZztcbiAgcHJpdmF0ZSBfc2VydmVyVGltZT86IHN0cmluZztcbiAgcHJpdmF0ZSBfc3RyZWFtSW5wdXRDYXBhYmlsaXR5U3RhdHVzPzogUG9uZy5TdHJlYW1JbnB1dENhcGFiaWxpdHlTdGF0dXM7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBQb25nIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFBvbmcuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMucGFja2V0SWQgPSBfdmFsdWUucGFja2V0SWQ7XG4gICAgdGhpcy5zZXJ2ZXJUaW1lID0gX3ZhbHVlLnNlcnZlclRpbWU7XG4gICAgdGhpcy5zdHJlYW1JbnB1dENhcGFiaWxpdHlTdGF0dXMgPSBfdmFsdWUuc3RyZWFtSW5wdXRDYXBhYmlsaXR5U3RhdHVzO1xuICAgIFBvbmcucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBwYWNrZXRJZCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wYWNrZXRJZDtcbiAgfVxuICBzZXQgcGFja2V0SWQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3BhY2tldElkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHNlcnZlclRpbWUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc2VydmVyVGltZTtcbiAgfVxuICBzZXQgc2VydmVyVGltZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fc2VydmVyVGltZSA9IHZhbHVlO1xuICB9XG4gIGdldCBzdHJlYW1JbnB1dENhcGFiaWxpdHlTdGF0dXMoKTpcbiAgICB8IFBvbmcuU3RyZWFtSW5wdXRDYXBhYmlsaXR5U3RhdHVzXG4gICAgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zdHJlYW1JbnB1dENhcGFiaWxpdHlTdGF0dXM7XG4gIH1cbiAgc2V0IHN0cmVhbUlucHV0Q2FwYWJpbGl0eVN0YXR1cyhcbiAgICB2YWx1ZTogUG9uZy5TdHJlYW1JbnB1dENhcGFiaWxpdHlTdGF0dXMgfCB1bmRlZmluZWRcbiAgKSB7XG4gICAgdGhpcy5fc3RyZWFtSW5wdXRDYXBhYmlsaXR5U3RhdHVzID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgUG9uZy5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBQb25nLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFja2V0SWQ6IHRoaXMucGFja2V0SWQsXG4gICAgICBzZXJ2ZXJUaW1lOiB0aGlzLnNlcnZlclRpbWUsXG4gICAgICBzdHJlYW1JbnB1dENhcGFiaWxpdHlTdGF0dXM6IHRoaXMuc3RyZWFtSW5wdXRDYXBhYmlsaXR5U3RhdHVzXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogUG9uZy5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhY2tldElkOiB0aGlzLnBhY2tldElkLFxuICAgICAgc2VydmVyVGltZTogdGhpcy5zZXJ2ZXJUaW1lLFxuICAgICAgc3RyZWFtSW5wdXRDYXBhYmlsaXR5U3RhdHVzOlxuICAgICAgICBQb25nLlN0cmVhbUlucHV0Q2FwYWJpbGl0eVN0YXR1c1tcbiAgICAgICAgICB0aGlzLnN0cmVhbUlucHV0Q2FwYWJpbGl0eVN0YXR1cyA9PT0gbnVsbCB8fFxuICAgICAgICAgIHRoaXMuc3RyZWFtSW5wdXRDYXBhYmlsaXR5U3RhdHVzID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgOiB0aGlzLnN0cmVhbUlucHV0Q2FwYWJpbGl0eVN0YXR1c1xuICAgICAgICBdXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBQb25nIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBQb25nXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBwYWNrZXRJZD86IHN0cmluZztcbiAgICBzZXJ2ZXJUaW1lPzogc3RyaW5nO1xuICAgIHN0cmVhbUlucHV0Q2FwYWJpbGl0eVN0YXR1cz86IFBvbmcuU3RyZWFtSW5wdXRDYXBhYmlsaXR5U3RhdHVzO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIFBvbmdcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHBhY2tldElkPzogc3RyaW5nO1xuICAgIHNlcnZlclRpbWU/OiBzdHJpbmc7XG4gICAgc3RyZWFtSW5wdXRDYXBhYmlsaXR5U3RhdHVzPzogc3RyaW5nO1xuICB9XG4gIGV4cG9ydCBlbnVtIFN0cmVhbUlucHV0Q2FwYWJpbGl0eVN0YXR1cyB7XG4gICAgSElHSF9BVkFJTEFCSUxJVFkgPSAwLFxuICAgIE5PVF9BVkFJTEFCTEUgPSAxLFxuICAgIExPV19BVkFJTEFCSUxJVFkgPSAyXG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBwcm90by5wdWIudjEuY29yZS5FeHBsZXRpdmVQYWNrZXRcbiAqL1xuZXhwb3J0IGNsYXNzIEV4cGxldGl2ZVBhY2tldCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ3Byb3RvLnB1Yi52MS5jb3JlLkV4cGxldGl2ZVBhY2tldCc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEV4cGxldGl2ZVBhY2tldCgpO1xuICAgIEV4cGxldGl2ZVBhY2tldC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IEV4cGxldGl2ZVBhY2tldCkge1xuICAgIF9pbnN0YW5jZS5ib2R5ID0gX2luc3RhbmNlLmJvZHkgfHwgJyc7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBFeHBsZXRpdmVQYWNrZXQsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLmJvZHkgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEV4cGxldGl2ZVBhY2tldC5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IEV4cGxldGl2ZVBhY2tldCxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5ib2R5KSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS5ib2R5KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9ib2R5Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgRXhwbGV0aXZlUGFja2V0IHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEV4cGxldGl2ZVBhY2tldC5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5ib2R5ID0gX3ZhbHVlLmJvZHk7XG4gICAgRXhwbGV0aXZlUGFja2V0LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgYm9keSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9ib2R5O1xuICB9XG4gIHNldCBib2R5KHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9ib2R5ID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgRXhwbGV0aXZlUGFja2V0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IEV4cGxldGl2ZVBhY2tldC5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJvZHk6IHRoaXMuYm9keVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IEV4cGxldGl2ZVBhY2tldC5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJvZHk6IHRoaXMuYm9keVxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgRXhwbGV0aXZlUGFja2V0IHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBFeHBsZXRpdmVQYWNrZXRcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIGJvZHk/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgRXhwbGV0aXZlUGFja2V0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBib2R5Pzogc3RyaW5nO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3IgcHJvdG8ucHViLnYxLmNvcmUuUm9vbVByZXNlbmNlVHlwZUNoYW5nZWRcbiAqL1xuZXhwb3J0IGNsYXNzIFJvb21QcmVzZW5jZVR5cGVDaGFuZ2VkIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAncHJvdG8ucHViLnYxLmNvcmUuUm9vbVByZXNlbmNlVHlwZUNoYW5nZWQnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBSb29tUHJlc2VuY2VUeXBlQ2hhbmdlZCgpO1xuICAgIFJvb21QcmVzZW5jZVR5cGVDaGFuZ2VkLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogUm9vbVByZXNlbmNlVHlwZUNoYW5nZWQpIHtcbiAgICBfaW5zdGFuY2UudWlkID0gX2luc3RhbmNlLnVpZCB8fCB1bmRlZmluZWQ7XG4gICAgX2luc3RhbmNlLnByZXNlbmNlVHlwZSA9IF9pbnN0YW5jZS5wcmVzZW5jZVR5cGUgfHwgMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IFJvb21QcmVzZW5jZVR5cGVDaGFuZ2VkLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS51aWQgPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMC5VaWQoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLnVpZCxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDAuVWlkLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UucHJlc2VuY2VUeXBlID0gX3JlYWRlci5yZWFkRW51bSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgUm9vbVByZXNlbmNlVHlwZUNoYW5nZWQucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBSb29tUHJlc2VuY2VUeXBlQ2hhbmdlZCxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS51aWQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAxLFxuICAgICAgICBfaW5zdGFuY2UudWlkIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMC5VaWQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UucHJlc2VuY2VUeXBlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlRW51bSgyLCBfaW5zdGFuY2UucHJlc2VuY2VUeXBlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF91aWQ/OiBwcm90b1B1YlYxTW9kZWxzMDAwLlVpZDtcbiAgcHJpdmF0ZSBfcHJlc2VuY2VUeXBlPzogcHJvdG9QdWJWMU1vZGVsczAxNi5QcmVzZW5jZVR5cGU7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBSb29tUHJlc2VuY2VUeXBlQ2hhbmdlZCB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxSb29tUHJlc2VuY2VUeXBlQ2hhbmdlZC5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy51aWQgPSBfdmFsdWUudWlkID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMDAuVWlkKF92YWx1ZS51aWQpIDogdW5kZWZpbmVkO1xuICAgIHRoaXMucHJlc2VuY2VUeXBlID0gX3ZhbHVlLnByZXNlbmNlVHlwZTtcbiAgICBSb29tUHJlc2VuY2VUeXBlQ2hhbmdlZC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHVpZCgpOiBwcm90b1B1YlYxTW9kZWxzMDAwLlVpZCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3VpZDtcbiAgfVxuICBzZXQgdWlkKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDAwLlVpZCB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3VpZCA9IHZhbHVlO1xuICB9XG4gIGdldCBwcmVzZW5jZVR5cGUoKTogcHJvdG9QdWJWMU1vZGVsczAxNi5QcmVzZW5jZVR5cGUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wcmVzZW5jZVR5cGU7XG4gIH1cbiAgc2V0IHByZXNlbmNlVHlwZSh2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAxNi5QcmVzZW5jZVR5cGUgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9wcmVzZW5jZVR5cGUgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBSb29tUHJlc2VuY2VUeXBlQ2hhbmdlZC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBSb29tUHJlc2VuY2VUeXBlQ2hhbmdlZC5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVpZDogdGhpcy51aWQgPyB0aGlzLnVpZC50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgcHJlc2VuY2VUeXBlOiB0aGlzLnByZXNlbmNlVHlwZVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IFJvb21QcmVzZW5jZVR5cGVDaGFuZ2VkLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgdWlkOiB0aGlzLnVpZCA/IHRoaXMudWlkLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIHByZXNlbmNlVHlwZTpcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxNi5QcmVzZW5jZVR5cGVbXG4gICAgICAgICAgdGhpcy5wcmVzZW5jZVR5cGUgPT09IG51bGwgfHwgdGhpcy5wcmVzZW5jZVR5cGUgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyAwXG4gICAgICAgICAgICA6IHRoaXMucHJlc2VuY2VUeXBlXG4gICAgICAgIF1cbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIFJvb21QcmVzZW5jZVR5cGVDaGFuZ2VkIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBSb29tUHJlc2VuY2VUeXBlQ2hhbmdlZFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgdWlkPzogcHJvdG9QdWJWMU1vZGVsczAwMC5VaWQuQXNPYmplY3Q7XG4gICAgcHJlc2VuY2VUeXBlPzogcHJvdG9QdWJWMU1vZGVsczAxNi5QcmVzZW5jZVR5cGU7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgUm9vbVByZXNlbmNlVHlwZUNoYW5nZWRcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHVpZD86IHByb3RvUHViVjFNb2RlbHMwMDAuVWlkLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBwcmVzZW5jZVR5cGU/OiBzdHJpbmc7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBwcm90by5wdWIudjEuY29yZS5FcnJvck9uUGFja2V0XG4gKi9cbmV4cG9ydCBjbGFzcyBFcnJvck9uUGFja2V0IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAncHJvdG8ucHViLnYxLmNvcmUuRXJyb3JPblBhY2tldCc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEVycm9yT25QYWNrZXQoKTtcbiAgICBFcnJvck9uUGFja2V0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogRXJyb3JPblBhY2tldCkge1xuICAgIF9pbnN0YW5jZS5wYWNrZXRJZCA9IF9pbnN0YW5jZS5wYWNrZXRJZCB8fCAnJztcbiAgICBfaW5zdGFuY2UuZXJyb3IgPSBfaW5zdGFuY2UuZXJyb3IgfHwgMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IEVycm9yT25QYWNrZXQsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLnBhY2tldElkID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UuZXJyb3IgPSBfcmVhZGVyLnJlYWRFbnVtKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBFcnJvck9uUGFja2V0LnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogRXJyb3JPblBhY2tldCxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5wYWNrZXRJZCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2UucGFja2V0SWQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmVycm9yKSB7XG4gICAgICBfd3JpdGVyLndyaXRlRW51bSgyLCBfaW5zdGFuY2UuZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3BhY2tldElkPzogc3RyaW5nO1xuICBwcml2YXRlIF9lcnJvcj86IEVycm9yT25QYWNrZXQuRXJyb3I7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBFcnJvck9uUGFja2V0IHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEVycm9yT25QYWNrZXQuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMucGFja2V0SWQgPSBfdmFsdWUucGFja2V0SWQ7XG4gICAgdGhpcy5lcnJvciA9IF92YWx1ZS5lcnJvcjtcbiAgICBFcnJvck9uUGFja2V0LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgcGFja2V0SWQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcGFja2V0SWQ7XG4gIH1cbiAgc2V0IHBhY2tldElkKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9wYWNrZXRJZCA9IHZhbHVlO1xuICB9XG4gIGdldCBlcnJvcigpOiBFcnJvck9uUGFja2V0LkVycm9yIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZXJyb3I7XG4gIH1cbiAgc2V0IGVycm9yKHZhbHVlOiBFcnJvck9uUGFja2V0LkVycm9yIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZXJyb3IgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBFcnJvck9uUGFja2V0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IEVycm9yT25QYWNrZXQuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBwYWNrZXRJZDogdGhpcy5wYWNrZXRJZCxcbiAgICAgIGVycm9yOiB0aGlzLmVycm9yXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogRXJyb3JPblBhY2tldC5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhY2tldElkOiB0aGlzLnBhY2tldElkLFxuICAgICAgZXJyb3I6XG4gICAgICAgIEVycm9yT25QYWNrZXQuRXJyb3JbXG4gICAgICAgICAgdGhpcy5lcnJvciA9PT0gbnVsbCB8fCB0aGlzLmVycm9yID09PSB1bmRlZmluZWQgPyAwIDogdGhpcy5lcnJvclxuICAgICAgICBdXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBFcnJvck9uUGFja2V0IHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBFcnJvck9uUGFja2V0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBwYWNrZXRJZD86IHN0cmluZztcbiAgICBlcnJvcj86IEVycm9yT25QYWNrZXQuRXJyb3I7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgRXJyb3JPblBhY2tldFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgcGFja2V0SWQ/OiBzdHJpbmc7XG4gICAgZXJyb3I/OiBzdHJpbmc7XG4gIH1cbiAgZXhwb3J0IGVudW0gRXJyb3Ige1xuICAgIFVOS05PV04gPSAwLFxuICAgIEJBRF9SRVFVRVNUID0gMSxcbiAgICBVTkFVVEhFTlRJQ0FURUQgPSAyLFxuICAgIFBFUk1JU1NJT05fREVOSUVEID0gMyxcbiAgICBOT1RfRk9VTkQgPSA0LFxuICAgIENPTkZMSUNUID0gNSxcbiAgICBSRVNPVVJDRV9FWEhBVVNURUQgPSA2LFxuICAgIElOVEVSTkFMID0gNyxcbiAgICBVTklNUExFTUVOVEVEID0gOCxcbiAgICBVTkFWQUlMQUJMRSA9IDksXG4gICAgREVBRExJTkVfRVhDRUVERUQgPSAxMFxuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3IgcHJvdG8ucHViLnYxLmNvcmUuU2VydmVyUGFja2V0XG4gKi9cbmV4cG9ydCBjbGFzcyBTZXJ2ZXJQYWNrZXQgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdwcm90by5wdWIudjEuY29yZS5TZXJ2ZXJQYWNrZXQnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBTZXJ2ZXJQYWNrZXQoKTtcbiAgICBTZXJ2ZXJQYWNrZXQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBTZXJ2ZXJQYWNrZXQpIHtcbiAgICBfaW5zdGFuY2UucGFja2V0UGFkZGluZyA9IF9pbnN0YW5jZS5wYWNrZXRQYWRkaW5nIHx8ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogU2VydmVyUGFja2V0LFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5lcnJvciA9IG5ldyBFcnJvck9uUGFja2V0KCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5lcnJvcixcbiAgICAgICAgICAgIEVycm9yT25QYWNrZXQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5tZXNzYWdlID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMTUuTWVzc2FnZSgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UubWVzc2FnZSxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMTUuTWVzc2FnZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgX2luc3RhbmNlLnNlZW4gPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAxMy5TZWVuKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5zZWVuLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxMy5TZWVuLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBfaW5zdGFuY2UuYWN0aXZpdHkgPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAxNC5BY3Rpdml0eSgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuYWN0aXZpdHksXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDE0LkFjdGl2aXR5LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBfaW5zdGFuY2Uucm9vbVByZXNlbmNlVHlwZUNoYW5nZWQgPSBuZXcgUm9vbVByZXNlbmNlVHlwZUNoYW5nZWQoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLnJvb21QcmVzZW5jZVR5cGVDaGFuZ2VkLFxuICAgICAgICAgICAgUm9vbVByZXNlbmNlVHlwZUNoYW5nZWQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA3OlxuICAgICAgICAgIF9pbnN0YW5jZS5saXZlTG9jYXRpb25TdGF0dXNDaGFuZ2VkID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDMuTGl2ZUxvY2F0aW9uKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5saXZlTG9jYXRpb25TdGF0dXNDaGFuZ2VkLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMy5MaXZlTG9jYXRpb24uZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA4OlxuICAgICAgICAgIF9pbnN0YW5jZS5wb25nID0gbmV3IFBvbmcoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKF9pbnN0YW5jZS5wb25nLCBQb25nLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgOTpcbiAgICAgICAgICBfaW5zdGFuY2UubWVzc2FnZURlbGl2ZXJ5QWNrID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMTUuTWVzc2FnZURlbGl2ZXJ5QWNrKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5tZXNzYWdlRGVsaXZlcnlBY2ssXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDE1Lk1lc3NhZ2VEZWxpdmVyeUFjay5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgIF9pbnN0YW5jZS5jYWxsT2ZmZXIgPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAxMC5DYWxsT2ZmZXIoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmNhbGxPZmZlcixcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMTAuQ2FsbE9mZmVyLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgX2luc3RhbmNlLmNhbGxBbnN3ZXIgPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAxMC5DYWxsQW5zd2VyKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5jYWxsQW5zd2VyLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxMC5DYWxsQW5zd2VyLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgX2luc3RhbmNlLmV4cGxldGl2ZVBhY2tldCA9IG5ldyBFeHBsZXRpdmVQYWNrZXQoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmV4cGxldGl2ZVBhY2tldCxcbiAgICAgICAgICAgIEV4cGxldGl2ZVBhY2tldC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgX2luc3RhbmNlLnBhY2tldFBhZGRpbmcgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFNlcnZlclBhY2tldC5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IFNlcnZlclBhY2tldCxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5lcnJvcikge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDEsXG4gICAgICAgIF9pbnN0YW5jZS5lcnJvciBhcyBhbnksXG4gICAgICAgIEVycm9yT25QYWNrZXQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UubWVzc2FnZSkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDIsXG4gICAgICAgIF9pbnN0YW5jZS5tZXNzYWdlIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxNS5NZXNzYWdlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnNlZW4pIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAzLFxuICAgICAgICBfaW5zdGFuY2Uuc2VlbiBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMTMuU2Vlbi5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5hY3Rpdml0eSkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDQsXG4gICAgICAgIF9pbnN0YW5jZS5hY3Rpdml0eSBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMTQuQWN0aXZpdHkuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uucm9vbVByZXNlbmNlVHlwZUNoYW5nZWQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA1LFxuICAgICAgICBfaW5zdGFuY2Uucm9vbVByZXNlbmNlVHlwZUNoYW5nZWQgYXMgYW55LFxuICAgICAgICBSb29tUHJlc2VuY2VUeXBlQ2hhbmdlZC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5saXZlTG9jYXRpb25TdGF0dXNDaGFuZ2VkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgNyxcbiAgICAgICAgX2luc3RhbmNlLmxpdmVMb2NhdGlvblN0YXR1c0NoYW5nZWQgYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAzLkxpdmVMb2NhdGlvbi5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5wb25nKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgOCxcbiAgICAgICAgX2luc3RhbmNlLnBvbmcgYXMgYW55LFxuICAgICAgICBQb25nLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLm1lc3NhZ2VEZWxpdmVyeUFjaykge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDksXG4gICAgICAgIF9pbnN0YW5jZS5tZXNzYWdlRGVsaXZlcnlBY2sgYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDE1Lk1lc3NhZ2VEZWxpdmVyeUFjay5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5jYWxsT2ZmZXIpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAxMCxcbiAgICAgICAgX2luc3RhbmNlLmNhbGxPZmZlciBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMTAuQ2FsbE9mZmVyLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmNhbGxBbnN3ZXIpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAxMSxcbiAgICAgICAgX2luc3RhbmNlLmNhbGxBbnN3ZXIgYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDEwLkNhbGxBbnN3ZXIuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZXhwbGV0aXZlUGFja2V0KSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMTIsXG4gICAgICAgIF9pbnN0YW5jZS5leHBsZXRpdmVQYWNrZXQgYXMgYW55LFxuICAgICAgICBFeHBsZXRpdmVQYWNrZXQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UucGFja2V0UGFkZGluZykge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZyg2LCBfaW5zdGFuY2UucGFja2V0UGFkZGluZyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZXJyb3I/OiBFcnJvck9uUGFja2V0O1xuICBwcml2YXRlIF9tZXNzYWdlPzogcHJvdG9QdWJWMU1vZGVsczAxNS5NZXNzYWdlO1xuICBwcml2YXRlIF9zZWVuPzogcHJvdG9QdWJWMU1vZGVsczAxMy5TZWVuO1xuICBwcml2YXRlIF9hY3Rpdml0eT86IHByb3RvUHViVjFNb2RlbHMwMTQuQWN0aXZpdHk7XG4gIHByaXZhdGUgX3Jvb21QcmVzZW5jZVR5cGVDaGFuZ2VkPzogUm9vbVByZXNlbmNlVHlwZUNoYW5nZWQ7XG4gIHByaXZhdGUgX2xpdmVMb2NhdGlvblN0YXR1c0NoYW5nZWQ/OiBwcm90b1B1YlYxTW9kZWxzMDAzLkxpdmVMb2NhdGlvbjtcbiAgcHJpdmF0ZSBfcG9uZz86IFBvbmc7XG4gIHByaXZhdGUgX21lc3NhZ2VEZWxpdmVyeUFjaz86IHByb3RvUHViVjFNb2RlbHMwMTUuTWVzc2FnZURlbGl2ZXJ5QWNrO1xuICBwcml2YXRlIF9jYWxsT2ZmZXI/OiBwcm90b1B1YlYxTW9kZWxzMDEwLkNhbGxPZmZlcjtcbiAgcHJpdmF0ZSBfY2FsbEFuc3dlcj86IHByb3RvUHViVjFNb2RlbHMwMTAuQ2FsbEFuc3dlcjtcbiAgcHJpdmF0ZSBfZXhwbGV0aXZlUGFja2V0PzogRXhwbGV0aXZlUGFja2V0O1xuICBwcml2YXRlIF9wYWNrZXRQYWRkaW5nPzogc3RyaW5nO1xuXG4gIHByaXZhdGUgX3R5cGU6IFNlcnZlclBhY2tldC5UeXBlQ2FzZSA9IFNlcnZlclBhY2tldC5UeXBlQ2FzZS5ub25lO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgU2VydmVyUGFja2V0IHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFNlcnZlclBhY2tldC5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5lcnJvciA9IF92YWx1ZS5lcnJvciA/IG5ldyBFcnJvck9uUGFja2V0KF92YWx1ZS5lcnJvcikgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5tZXNzYWdlID0gX3ZhbHVlLm1lc3NhZ2VcbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMTUuTWVzc2FnZShfdmFsdWUubWVzc2FnZSlcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuc2VlbiA9IF92YWx1ZS5zZWVuXG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDEzLlNlZW4oX3ZhbHVlLnNlZW4pXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmFjdGl2aXR5ID0gX3ZhbHVlLmFjdGl2aXR5XG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDE0LkFjdGl2aXR5KF92YWx1ZS5hY3Rpdml0eSlcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMucm9vbVByZXNlbmNlVHlwZUNoYW5nZWQgPSBfdmFsdWUucm9vbVByZXNlbmNlVHlwZUNoYW5nZWRcbiAgICAgID8gbmV3IFJvb21QcmVzZW5jZVR5cGVDaGFuZ2VkKF92YWx1ZS5yb29tUHJlc2VuY2VUeXBlQ2hhbmdlZClcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMubGl2ZUxvY2F0aW9uU3RhdHVzQ2hhbmdlZCA9IF92YWx1ZS5saXZlTG9jYXRpb25TdGF0dXNDaGFuZ2VkXG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAzLkxpdmVMb2NhdGlvbihfdmFsdWUubGl2ZUxvY2F0aW9uU3RhdHVzQ2hhbmdlZClcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMucG9uZyA9IF92YWx1ZS5wb25nID8gbmV3IFBvbmcoX3ZhbHVlLnBvbmcpIDogdW5kZWZpbmVkO1xuICAgIHRoaXMubWVzc2FnZURlbGl2ZXJ5QWNrID0gX3ZhbHVlLm1lc3NhZ2VEZWxpdmVyeUFja1xuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAxNS5NZXNzYWdlRGVsaXZlcnlBY2soX3ZhbHVlLm1lc3NhZ2VEZWxpdmVyeUFjaylcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuY2FsbE9mZmVyID0gX3ZhbHVlLmNhbGxPZmZlclxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAxMC5DYWxsT2ZmZXIoX3ZhbHVlLmNhbGxPZmZlcilcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuY2FsbEFuc3dlciA9IF92YWx1ZS5jYWxsQW5zd2VyXG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDEwLkNhbGxBbnN3ZXIoX3ZhbHVlLmNhbGxBbnN3ZXIpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmV4cGxldGl2ZVBhY2tldCA9IF92YWx1ZS5leHBsZXRpdmVQYWNrZXRcbiAgICAgID8gbmV3IEV4cGxldGl2ZVBhY2tldChfdmFsdWUuZXhwbGV0aXZlUGFja2V0KVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5wYWNrZXRQYWRkaW5nID0gX3ZhbHVlLnBhY2tldFBhZGRpbmc7XG4gICAgU2VydmVyUGFja2V0LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgZXJyb3IoKTogRXJyb3JPblBhY2tldCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2Vycm9yO1xuICB9XG4gIHNldCBlcnJvcih2YWx1ZTogRXJyb3JPblBhY2tldCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9tZXNzYWdlID0gdGhpcy5fc2VlbiA9IHRoaXMuX2FjdGl2aXR5ID0gdGhpcy5fcm9vbVByZXNlbmNlVHlwZUNoYW5nZWQgPSB0aGlzLl9saXZlTG9jYXRpb25TdGF0dXNDaGFuZ2VkID0gdGhpcy5fcG9uZyA9IHRoaXMuX21lc3NhZ2VEZWxpdmVyeUFjayA9IHRoaXMuX2NhbGxPZmZlciA9IHRoaXMuX2NhbGxBbnN3ZXIgPSB0aGlzLl9leHBsZXRpdmVQYWNrZXQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gU2VydmVyUGFja2V0LlR5cGVDYXNlLmVycm9yO1xuICAgIH1cbiAgICB0aGlzLl9lcnJvciA9IHZhbHVlO1xuICB9XG4gIGdldCBtZXNzYWdlKCk6IHByb3RvUHViVjFNb2RlbHMwMTUuTWVzc2FnZSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX21lc3NhZ2U7XG4gIH1cbiAgc2V0IG1lc3NhZ2UodmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMTUuTWVzc2FnZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9lcnJvciA9IHRoaXMuX3NlZW4gPSB0aGlzLl9hY3Rpdml0eSA9IHRoaXMuX3Jvb21QcmVzZW5jZVR5cGVDaGFuZ2VkID0gdGhpcy5fbGl2ZUxvY2F0aW9uU3RhdHVzQ2hhbmdlZCA9IHRoaXMuX3BvbmcgPSB0aGlzLl9tZXNzYWdlRGVsaXZlcnlBY2sgPSB0aGlzLl9jYWxsT2ZmZXIgPSB0aGlzLl9jYWxsQW5zd2VyID0gdGhpcy5fZXhwbGV0aXZlUGFja2V0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IFNlcnZlclBhY2tldC5UeXBlQ2FzZS5tZXNzYWdlO1xuICAgIH1cbiAgICB0aGlzLl9tZXNzYWdlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHNlZW4oKTogcHJvdG9QdWJWMU1vZGVsczAxMy5TZWVuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc2VlbjtcbiAgfVxuICBzZXQgc2Vlbih2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAxMy5TZWVuIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX2Vycm9yID0gdGhpcy5fbWVzc2FnZSA9IHRoaXMuX2FjdGl2aXR5ID0gdGhpcy5fcm9vbVByZXNlbmNlVHlwZUNoYW5nZWQgPSB0aGlzLl9saXZlTG9jYXRpb25TdGF0dXNDaGFuZ2VkID0gdGhpcy5fcG9uZyA9IHRoaXMuX21lc3NhZ2VEZWxpdmVyeUFjayA9IHRoaXMuX2NhbGxPZmZlciA9IHRoaXMuX2NhbGxBbnN3ZXIgPSB0aGlzLl9leHBsZXRpdmVQYWNrZXQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gU2VydmVyUGFja2V0LlR5cGVDYXNlLnNlZW47XG4gICAgfVxuICAgIHRoaXMuX3NlZW4gPSB2YWx1ZTtcbiAgfVxuICBnZXQgYWN0aXZpdHkoKTogcHJvdG9QdWJWMU1vZGVsczAxNC5BY3Rpdml0eSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2aXR5O1xuICB9XG4gIHNldCBhY3Rpdml0eSh2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAxNC5BY3Rpdml0eSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9lcnJvciA9IHRoaXMuX21lc3NhZ2UgPSB0aGlzLl9zZWVuID0gdGhpcy5fcm9vbVByZXNlbmNlVHlwZUNoYW5nZWQgPSB0aGlzLl9saXZlTG9jYXRpb25TdGF0dXNDaGFuZ2VkID0gdGhpcy5fcG9uZyA9IHRoaXMuX21lc3NhZ2VEZWxpdmVyeUFjayA9IHRoaXMuX2NhbGxPZmZlciA9IHRoaXMuX2NhbGxBbnN3ZXIgPSB0aGlzLl9leHBsZXRpdmVQYWNrZXQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gU2VydmVyUGFja2V0LlR5cGVDYXNlLmFjdGl2aXR5O1xuICAgIH1cbiAgICB0aGlzLl9hY3Rpdml0eSA9IHZhbHVlO1xuICB9XG4gIGdldCByb29tUHJlc2VuY2VUeXBlQ2hhbmdlZCgpOiBSb29tUHJlc2VuY2VUeXBlQ2hhbmdlZCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3Jvb21QcmVzZW5jZVR5cGVDaGFuZ2VkO1xuICB9XG4gIHNldCByb29tUHJlc2VuY2VUeXBlQ2hhbmdlZCh2YWx1ZTogUm9vbVByZXNlbmNlVHlwZUNoYW5nZWQgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fZXJyb3IgPSB0aGlzLl9tZXNzYWdlID0gdGhpcy5fc2VlbiA9IHRoaXMuX2FjdGl2aXR5ID0gdGhpcy5fbGl2ZUxvY2F0aW9uU3RhdHVzQ2hhbmdlZCA9IHRoaXMuX3BvbmcgPSB0aGlzLl9tZXNzYWdlRGVsaXZlcnlBY2sgPSB0aGlzLl9jYWxsT2ZmZXIgPSB0aGlzLl9jYWxsQW5zd2VyID0gdGhpcy5fZXhwbGV0aXZlUGFja2V0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IFNlcnZlclBhY2tldC5UeXBlQ2FzZS5yb29tUHJlc2VuY2VUeXBlQ2hhbmdlZDtcbiAgICB9XG4gICAgdGhpcy5fcm9vbVByZXNlbmNlVHlwZUNoYW5nZWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbGl2ZUxvY2F0aW9uU3RhdHVzQ2hhbmdlZCgpOlxuICAgIHwgcHJvdG9QdWJWMU1vZGVsczAwMy5MaXZlTG9jYXRpb25cbiAgICB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2xpdmVMb2NhdGlvblN0YXR1c0NoYW5nZWQ7XG4gIH1cbiAgc2V0IGxpdmVMb2NhdGlvblN0YXR1c0NoYW5nZWQoXG4gICAgdmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMDMuTGl2ZUxvY2F0aW9uIHwgdW5kZWZpbmVkXG4gICkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9lcnJvciA9IHRoaXMuX21lc3NhZ2UgPSB0aGlzLl9zZWVuID0gdGhpcy5fYWN0aXZpdHkgPSB0aGlzLl9yb29tUHJlc2VuY2VUeXBlQ2hhbmdlZCA9IHRoaXMuX3BvbmcgPSB0aGlzLl9tZXNzYWdlRGVsaXZlcnlBY2sgPSB0aGlzLl9jYWxsT2ZmZXIgPSB0aGlzLl9jYWxsQW5zd2VyID0gdGhpcy5fZXhwbGV0aXZlUGFja2V0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IFNlcnZlclBhY2tldC5UeXBlQ2FzZS5saXZlTG9jYXRpb25TdGF0dXNDaGFuZ2VkO1xuICAgIH1cbiAgICB0aGlzLl9saXZlTG9jYXRpb25TdGF0dXNDaGFuZ2VkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHBvbmcoKTogUG9uZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3Bvbmc7XG4gIH1cbiAgc2V0IHBvbmcodmFsdWU6IFBvbmcgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fZXJyb3IgPSB0aGlzLl9tZXNzYWdlID0gdGhpcy5fc2VlbiA9IHRoaXMuX2FjdGl2aXR5ID0gdGhpcy5fcm9vbVByZXNlbmNlVHlwZUNoYW5nZWQgPSB0aGlzLl9saXZlTG9jYXRpb25TdGF0dXNDaGFuZ2VkID0gdGhpcy5fbWVzc2FnZURlbGl2ZXJ5QWNrID0gdGhpcy5fY2FsbE9mZmVyID0gdGhpcy5fY2FsbEFuc3dlciA9IHRoaXMuX2V4cGxldGl2ZVBhY2tldCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBTZXJ2ZXJQYWNrZXQuVHlwZUNhc2UucG9uZztcbiAgICB9XG4gICAgdGhpcy5fcG9uZyA9IHZhbHVlO1xuICB9XG4gIGdldCBtZXNzYWdlRGVsaXZlcnlBY2soKTogcHJvdG9QdWJWMU1vZGVsczAxNS5NZXNzYWdlRGVsaXZlcnlBY2sgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9tZXNzYWdlRGVsaXZlcnlBY2s7XG4gIH1cbiAgc2V0IG1lc3NhZ2VEZWxpdmVyeUFjayhcbiAgICB2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAxNS5NZXNzYWdlRGVsaXZlcnlBY2sgfCB1bmRlZmluZWRcbiAgKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX2Vycm9yID0gdGhpcy5fbWVzc2FnZSA9IHRoaXMuX3NlZW4gPSB0aGlzLl9hY3Rpdml0eSA9IHRoaXMuX3Jvb21QcmVzZW5jZVR5cGVDaGFuZ2VkID0gdGhpcy5fbGl2ZUxvY2F0aW9uU3RhdHVzQ2hhbmdlZCA9IHRoaXMuX3BvbmcgPSB0aGlzLl9jYWxsT2ZmZXIgPSB0aGlzLl9jYWxsQW5zd2VyID0gdGhpcy5fZXhwbGV0aXZlUGFja2V0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IFNlcnZlclBhY2tldC5UeXBlQ2FzZS5tZXNzYWdlRGVsaXZlcnlBY2s7XG4gICAgfVxuICAgIHRoaXMuX21lc3NhZ2VEZWxpdmVyeUFjayA9IHZhbHVlO1xuICB9XG4gIGdldCBjYWxsT2ZmZXIoKTogcHJvdG9QdWJWMU1vZGVsczAxMC5DYWxsT2ZmZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9jYWxsT2ZmZXI7XG4gIH1cbiAgc2V0IGNhbGxPZmZlcih2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAxMC5DYWxsT2ZmZXIgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fZXJyb3IgPSB0aGlzLl9tZXNzYWdlID0gdGhpcy5fc2VlbiA9IHRoaXMuX2FjdGl2aXR5ID0gdGhpcy5fcm9vbVByZXNlbmNlVHlwZUNoYW5nZWQgPSB0aGlzLl9saXZlTG9jYXRpb25TdGF0dXNDaGFuZ2VkID0gdGhpcy5fcG9uZyA9IHRoaXMuX21lc3NhZ2VEZWxpdmVyeUFjayA9IHRoaXMuX2NhbGxBbnN3ZXIgPSB0aGlzLl9leHBsZXRpdmVQYWNrZXQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gU2VydmVyUGFja2V0LlR5cGVDYXNlLmNhbGxPZmZlcjtcbiAgICB9XG4gICAgdGhpcy5fY2FsbE9mZmVyID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGNhbGxBbnN3ZXIoKTogcHJvdG9QdWJWMU1vZGVsczAxMC5DYWxsQW5zd2VyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fY2FsbEFuc3dlcjtcbiAgfVxuICBzZXQgY2FsbEFuc3dlcih2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAxMC5DYWxsQW5zd2VyIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX2Vycm9yID0gdGhpcy5fbWVzc2FnZSA9IHRoaXMuX3NlZW4gPSB0aGlzLl9hY3Rpdml0eSA9IHRoaXMuX3Jvb21QcmVzZW5jZVR5cGVDaGFuZ2VkID0gdGhpcy5fbGl2ZUxvY2F0aW9uU3RhdHVzQ2hhbmdlZCA9IHRoaXMuX3BvbmcgPSB0aGlzLl9tZXNzYWdlRGVsaXZlcnlBY2sgPSB0aGlzLl9jYWxsT2ZmZXIgPSB0aGlzLl9leHBsZXRpdmVQYWNrZXQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gU2VydmVyUGFja2V0LlR5cGVDYXNlLmNhbGxBbnN3ZXI7XG4gICAgfVxuICAgIHRoaXMuX2NhbGxBbnN3ZXIgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZXhwbGV0aXZlUGFja2V0KCk6IEV4cGxldGl2ZVBhY2tldCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2V4cGxldGl2ZVBhY2tldDtcbiAgfVxuICBzZXQgZXhwbGV0aXZlUGFja2V0KHZhbHVlOiBFeHBsZXRpdmVQYWNrZXQgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fZXJyb3IgPSB0aGlzLl9tZXNzYWdlID0gdGhpcy5fc2VlbiA9IHRoaXMuX2FjdGl2aXR5ID0gdGhpcy5fcm9vbVByZXNlbmNlVHlwZUNoYW5nZWQgPSB0aGlzLl9saXZlTG9jYXRpb25TdGF0dXNDaGFuZ2VkID0gdGhpcy5fcG9uZyA9IHRoaXMuX21lc3NhZ2VEZWxpdmVyeUFjayA9IHRoaXMuX2NhbGxPZmZlciA9IHRoaXMuX2NhbGxBbnN3ZXIgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gU2VydmVyUGFja2V0LlR5cGVDYXNlLmV4cGxldGl2ZVBhY2tldDtcbiAgICB9XG4gICAgdGhpcy5fZXhwbGV0aXZlUGFja2V0ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHBhY2tldFBhZGRpbmcoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcGFja2V0UGFkZGluZztcbiAgfVxuICBzZXQgcGFja2V0UGFkZGluZyh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcGFja2V0UGFkZGluZyA9IHZhbHVlO1xuICB9XG4gIGdldCB0eXBlKCkge1xuICAgIHJldHVybiB0aGlzLl90eXBlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFNlcnZlclBhY2tldC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBTZXJ2ZXJQYWNrZXQuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBlcnJvcjogdGhpcy5lcnJvciA/IHRoaXMuZXJyb3IudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZSA/IHRoaXMubWVzc2FnZS50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgc2VlbjogdGhpcy5zZWVuID8gdGhpcy5zZWVuLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBhY3Rpdml0eTogdGhpcy5hY3Rpdml0eSA/IHRoaXMuYWN0aXZpdHkudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIHJvb21QcmVzZW5jZVR5cGVDaGFuZ2VkOiB0aGlzLnJvb21QcmVzZW5jZVR5cGVDaGFuZ2VkXG4gICAgICAgID8gdGhpcy5yb29tUHJlc2VuY2VUeXBlQ2hhbmdlZC50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgbGl2ZUxvY2F0aW9uU3RhdHVzQ2hhbmdlZDogdGhpcy5saXZlTG9jYXRpb25TdGF0dXNDaGFuZ2VkXG4gICAgICAgID8gdGhpcy5saXZlTG9jYXRpb25TdGF0dXNDaGFuZ2VkLnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICBwb25nOiB0aGlzLnBvbmcgPyB0aGlzLnBvbmcudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIG1lc3NhZ2VEZWxpdmVyeUFjazogdGhpcy5tZXNzYWdlRGVsaXZlcnlBY2tcbiAgICAgICAgPyB0aGlzLm1lc3NhZ2VEZWxpdmVyeUFjay50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgY2FsbE9mZmVyOiB0aGlzLmNhbGxPZmZlciA/IHRoaXMuY2FsbE9mZmVyLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBjYWxsQW5zd2VyOiB0aGlzLmNhbGxBbnN3ZXIgPyB0aGlzLmNhbGxBbnN3ZXIudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGV4cGxldGl2ZVBhY2tldDogdGhpcy5leHBsZXRpdmVQYWNrZXRcbiAgICAgICAgPyB0aGlzLmV4cGxldGl2ZVBhY2tldC50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgcGFja2V0UGFkZGluZzogdGhpcy5wYWNrZXRQYWRkaW5nXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogU2VydmVyUGFja2V0LkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgZXJyb3I6IHRoaXMuZXJyb3IgPyB0aGlzLmVycm9yLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZSA/IHRoaXMubWVzc2FnZS50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICBzZWVuOiB0aGlzLnNlZW4gPyB0aGlzLnNlZW4udG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgYWN0aXZpdHk6IHRoaXMuYWN0aXZpdHkgPyB0aGlzLmFjdGl2aXR5LnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIHJvb21QcmVzZW5jZVR5cGVDaGFuZ2VkOiB0aGlzLnJvb21QcmVzZW5jZVR5cGVDaGFuZ2VkXG4gICAgICAgID8gdGhpcy5yb29tUHJlc2VuY2VUeXBlQ2hhbmdlZC50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICBsaXZlTG9jYXRpb25TdGF0dXNDaGFuZ2VkOiB0aGlzLmxpdmVMb2NhdGlvblN0YXR1c0NoYW5nZWRcbiAgICAgICAgPyB0aGlzLmxpdmVMb2NhdGlvblN0YXR1c0NoYW5nZWQudG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsLFxuICAgICAgcG9uZzogdGhpcy5wb25nID8gdGhpcy5wb25nLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIG1lc3NhZ2VEZWxpdmVyeUFjazogdGhpcy5tZXNzYWdlRGVsaXZlcnlBY2tcbiAgICAgICAgPyB0aGlzLm1lc3NhZ2VEZWxpdmVyeUFjay50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICBjYWxsT2ZmZXI6IHRoaXMuY2FsbE9mZmVyID8gdGhpcy5jYWxsT2ZmZXIudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgY2FsbEFuc3dlcjogdGhpcy5jYWxsQW5zd2VyXG4gICAgICAgID8gdGhpcy5jYWxsQW5zd2VyLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbCxcbiAgICAgIGV4cGxldGl2ZVBhY2tldDogdGhpcy5leHBsZXRpdmVQYWNrZXRcbiAgICAgICAgPyB0aGlzLmV4cGxldGl2ZVBhY2tldC50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICBwYWNrZXRQYWRkaW5nOiB0aGlzLnBhY2tldFBhZGRpbmdcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIFNlcnZlclBhY2tldCB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgU2VydmVyUGFja2V0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBlcnJvcj86IEVycm9yT25QYWNrZXQuQXNPYmplY3Q7XG4gICAgbWVzc2FnZT86IHByb3RvUHViVjFNb2RlbHMwMTUuTWVzc2FnZS5Bc09iamVjdDtcbiAgICBzZWVuPzogcHJvdG9QdWJWMU1vZGVsczAxMy5TZWVuLkFzT2JqZWN0O1xuICAgIGFjdGl2aXR5PzogcHJvdG9QdWJWMU1vZGVsczAxNC5BY3Rpdml0eS5Bc09iamVjdDtcbiAgICByb29tUHJlc2VuY2VUeXBlQ2hhbmdlZD86IFJvb21QcmVzZW5jZVR5cGVDaGFuZ2VkLkFzT2JqZWN0O1xuICAgIGxpdmVMb2NhdGlvblN0YXR1c0NoYW5nZWQ/OiBwcm90b1B1YlYxTW9kZWxzMDAzLkxpdmVMb2NhdGlvbi5Bc09iamVjdDtcbiAgICBwb25nPzogUG9uZy5Bc09iamVjdDtcbiAgICBtZXNzYWdlRGVsaXZlcnlBY2s/OiBwcm90b1B1YlYxTW9kZWxzMDE1Lk1lc3NhZ2VEZWxpdmVyeUFjay5Bc09iamVjdDtcbiAgICBjYWxsT2ZmZXI/OiBwcm90b1B1YlYxTW9kZWxzMDEwLkNhbGxPZmZlci5Bc09iamVjdDtcbiAgICBjYWxsQW5zd2VyPzogcHJvdG9QdWJWMU1vZGVsczAxMC5DYWxsQW5zd2VyLkFzT2JqZWN0O1xuICAgIGV4cGxldGl2ZVBhY2tldD86IEV4cGxldGl2ZVBhY2tldC5Bc09iamVjdDtcbiAgICBwYWNrZXRQYWRkaW5nPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIFNlcnZlclBhY2tldFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgZXJyb3I/OiBFcnJvck9uUGFja2V0LkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBtZXNzYWdlPzogcHJvdG9QdWJWMU1vZGVsczAxNS5NZXNzYWdlLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBzZWVuPzogcHJvdG9QdWJWMU1vZGVsczAxMy5TZWVuLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBhY3Rpdml0eT86IHByb3RvUHViVjFNb2RlbHMwMTQuQWN0aXZpdHkuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHJvb21QcmVzZW5jZVR5cGVDaGFuZ2VkPzogUm9vbVByZXNlbmNlVHlwZUNoYW5nZWQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIGxpdmVMb2NhdGlvblN0YXR1c0NoYW5nZWQ/OiBwcm90b1B1YlYxTW9kZWxzMDAzLkxpdmVMb2NhdGlvbi5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgcG9uZz86IFBvbmcuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIG1lc3NhZ2VEZWxpdmVyeUFjaz86IHByb3RvUHViVjFNb2RlbHMwMTUuTWVzc2FnZURlbGl2ZXJ5QWNrLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBjYWxsT2ZmZXI/OiBwcm90b1B1YlYxTW9kZWxzMDEwLkNhbGxPZmZlci5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgY2FsbEFuc3dlcj86IHByb3RvUHViVjFNb2RlbHMwMTAuQ2FsbEFuc3dlci5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgZXhwbGV0aXZlUGFja2V0PzogRXhwbGV0aXZlUGFja2V0LkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBwYWNrZXRQYWRkaW5nPzogc3RyaW5nO1xuICB9XG4gIGV4cG9ydCBlbnVtIFR5cGVDYXNlIHtcbiAgICBub25lID0gMCxcbiAgICBlcnJvciA9IDEsXG4gICAgbWVzc2FnZSA9IDIsXG4gICAgc2VlbiA9IDMsXG4gICAgYWN0aXZpdHkgPSA0LFxuICAgIHJvb21QcmVzZW5jZVR5cGVDaGFuZ2VkID0gNSxcbiAgICBsaXZlTG9jYXRpb25TdGF0dXNDaGFuZ2VkID0gNixcbiAgICBwb25nID0gNyxcbiAgICBtZXNzYWdlRGVsaXZlcnlBY2sgPSA4LFxuICAgIGNhbGxPZmZlciA9IDksXG4gICAgY2FsbEFuc3dlciA9IDEwLFxuICAgIGV4cGxldGl2ZVBhY2tldCA9IDExXG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBwcm90by5wdWIudjEuY29yZS5DbGllbnRQYWNrZXRcbiAqL1xuZXhwb3J0IGNsYXNzIENsaWVudFBhY2tldCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ3Byb3RvLnB1Yi52MS5jb3JlLkNsaWVudFBhY2tldCc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IENsaWVudFBhY2tldCgpO1xuICAgIENsaWVudFBhY2tldC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IENsaWVudFBhY2tldCkge1xuICAgIF9pbnN0YW5jZS5pZCA9IF9pbnN0YW5jZS5pZCB8fCAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IENsaWVudFBhY2tldCxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UuaWQgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5tZXNzYWdlID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMTUuTWVzc2FnZUJ5Q2xpZW50KCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5tZXNzYWdlLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxNS5NZXNzYWdlQnlDbGllbnQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIF9pbnN0YW5jZS5zZWVuID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMTMuU2VlbkJ5Q2xpZW50KCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5zZWVuLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxMy5TZWVuQnlDbGllbnQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIF9pbnN0YW5jZS5hY3Rpdml0eSA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDE0LkFjdGl2aXR5QnlDbGllbnQoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmFjdGl2aXR5LFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxNC5BY3Rpdml0eUJ5Q2xpZW50LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBfaW5zdGFuY2UucGluZyA9IG5ldyBQaW5nKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShfaW5zdGFuY2UucGluZywgUGluZy5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgX2luc3RhbmNlLmNhbGxPZmZlciA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDEwLkNhbGxPZmZlckJ5Q2xpZW50KCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5jYWxsT2ZmZXIsXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDEwLkNhbGxPZmZlckJ5Q2xpZW50LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNzpcbiAgICAgICAgICBfaW5zdGFuY2UuY2FsbEFuc3dlciA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDEwLkNhbGxBbnN3ZXJCeUNsaWVudCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuY2FsbEFuc3dlcixcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMTAuQ2FsbEFuc3dlckJ5Q2xpZW50LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBDbGllbnRQYWNrZXQucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBDbGllbnRQYWNrZXQsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UuaWQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLmlkKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5tZXNzYWdlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMixcbiAgICAgICAgX2luc3RhbmNlLm1lc3NhZ2UgYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDE1Lk1lc3NhZ2VCeUNsaWVudC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5zZWVuKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMyxcbiAgICAgICAgX2luc3RhbmNlLnNlZW4gYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDEzLlNlZW5CeUNsaWVudC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5hY3Rpdml0eSkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDQsXG4gICAgICAgIF9pbnN0YW5jZS5hY3Rpdml0eSBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMTQuQWN0aXZpdHlCeUNsaWVudC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5waW5nKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgNSxcbiAgICAgICAgX2luc3RhbmNlLnBpbmcgYXMgYW55LFxuICAgICAgICBQaW5nLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmNhbGxPZmZlcikge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDYsXG4gICAgICAgIF9pbnN0YW5jZS5jYWxsT2ZmZXIgYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDEwLkNhbGxPZmZlckJ5Q2xpZW50LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmNhbGxBbnN3ZXIpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA3LFxuICAgICAgICBfaW5zdGFuY2UuY2FsbEFuc3dlciBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMTAuQ2FsbEFuc3dlckJ5Q2xpZW50LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2lkPzogc3RyaW5nO1xuICBwcml2YXRlIF9tZXNzYWdlPzogcHJvdG9QdWJWMU1vZGVsczAxNS5NZXNzYWdlQnlDbGllbnQ7XG4gIHByaXZhdGUgX3NlZW4/OiBwcm90b1B1YlYxTW9kZWxzMDEzLlNlZW5CeUNsaWVudDtcbiAgcHJpdmF0ZSBfYWN0aXZpdHk/OiBwcm90b1B1YlYxTW9kZWxzMDE0LkFjdGl2aXR5QnlDbGllbnQ7XG4gIHByaXZhdGUgX3Bpbmc/OiBQaW5nO1xuICBwcml2YXRlIF9jYWxsT2ZmZXI/OiBwcm90b1B1YlYxTW9kZWxzMDEwLkNhbGxPZmZlckJ5Q2xpZW50O1xuICBwcml2YXRlIF9jYWxsQW5zd2VyPzogcHJvdG9QdWJWMU1vZGVsczAxMC5DYWxsQW5zd2VyQnlDbGllbnQ7XG5cbiAgcHJpdmF0ZSBfdHlwZTogQ2xpZW50UGFja2V0LlR5cGVDYXNlID0gQ2xpZW50UGFja2V0LlR5cGVDYXNlLm5vbmU7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBDbGllbnRQYWNrZXQgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8Q2xpZW50UGFja2V0LkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmlkID0gX3ZhbHVlLmlkO1xuICAgIHRoaXMubWVzc2FnZSA9IF92YWx1ZS5tZXNzYWdlXG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDE1Lk1lc3NhZ2VCeUNsaWVudChfdmFsdWUubWVzc2FnZSlcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuc2VlbiA9IF92YWx1ZS5zZWVuXG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDEzLlNlZW5CeUNsaWVudChfdmFsdWUuc2VlbilcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuYWN0aXZpdHkgPSBfdmFsdWUuYWN0aXZpdHlcbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMTQuQWN0aXZpdHlCeUNsaWVudChfdmFsdWUuYWN0aXZpdHkpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnBpbmcgPSBfdmFsdWUucGluZyA/IG5ldyBQaW5nKF92YWx1ZS5waW5nKSA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmNhbGxPZmZlciA9IF92YWx1ZS5jYWxsT2ZmZXJcbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMTAuQ2FsbE9mZmVyQnlDbGllbnQoX3ZhbHVlLmNhbGxPZmZlcilcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuY2FsbEFuc3dlciA9IF92YWx1ZS5jYWxsQW5zd2VyXG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDEwLkNhbGxBbnN3ZXJCeUNsaWVudChfdmFsdWUuY2FsbEFuc3dlcilcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIENsaWVudFBhY2tldC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGlkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2lkO1xuICB9XG4gIHNldCBpZCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5faWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbWVzc2FnZSgpOiBwcm90b1B1YlYxTW9kZWxzMDE1Lk1lc3NhZ2VCeUNsaWVudCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX21lc3NhZ2U7XG4gIH1cbiAgc2V0IG1lc3NhZ2UodmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMTUuTWVzc2FnZUJ5Q2xpZW50IHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3NlZW4gPSB0aGlzLl9hY3Rpdml0eSA9IHRoaXMuX3BpbmcgPSB0aGlzLl9jYWxsT2ZmZXIgPSB0aGlzLl9jYWxsQW5zd2VyID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IENsaWVudFBhY2tldC5UeXBlQ2FzZS5tZXNzYWdlO1xuICAgIH1cbiAgICB0aGlzLl9tZXNzYWdlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHNlZW4oKTogcHJvdG9QdWJWMU1vZGVsczAxMy5TZWVuQnlDbGllbnQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zZWVuO1xuICB9XG4gIHNldCBzZWVuKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDEzLlNlZW5CeUNsaWVudCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9tZXNzYWdlID0gdGhpcy5fYWN0aXZpdHkgPSB0aGlzLl9waW5nID0gdGhpcy5fY2FsbE9mZmVyID0gdGhpcy5fY2FsbEFuc3dlciA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBDbGllbnRQYWNrZXQuVHlwZUNhc2Uuc2VlbjtcbiAgICB9XG4gICAgdGhpcy5fc2VlbiA9IHZhbHVlO1xuICB9XG4gIGdldCBhY3Rpdml0eSgpOiBwcm90b1B1YlYxTW9kZWxzMDE0LkFjdGl2aXR5QnlDbGllbnQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9hY3Rpdml0eTtcbiAgfVxuICBzZXQgYWN0aXZpdHkodmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMTQuQWN0aXZpdHlCeUNsaWVudCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9tZXNzYWdlID0gdGhpcy5fc2VlbiA9IHRoaXMuX3BpbmcgPSB0aGlzLl9jYWxsT2ZmZXIgPSB0aGlzLl9jYWxsQW5zd2VyID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IENsaWVudFBhY2tldC5UeXBlQ2FzZS5hY3Rpdml0eTtcbiAgICB9XG4gICAgdGhpcy5fYWN0aXZpdHkgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcGluZygpOiBQaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcGluZztcbiAgfVxuICBzZXQgcGluZyh2YWx1ZTogUGluZyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9tZXNzYWdlID0gdGhpcy5fc2VlbiA9IHRoaXMuX2FjdGl2aXR5ID0gdGhpcy5fY2FsbE9mZmVyID0gdGhpcy5fY2FsbEFuc3dlciA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBDbGllbnRQYWNrZXQuVHlwZUNhc2UucGluZztcbiAgICB9XG4gICAgdGhpcy5fcGluZyA9IHZhbHVlO1xuICB9XG4gIGdldCBjYWxsT2ZmZXIoKTogcHJvdG9QdWJWMU1vZGVsczAxMC5DYWxsT2ZmZXJCeUNsaWVudCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2NhbGxPZmZlcjtcbiAgfVxuICBzZXQgY2FsbE9mZmVyKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDEwLkNhbGxPZmZlckJ5Q2xpZW50IHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX21lc3NhZ2UgPSB0aGlzLl9zZWVuID0gdGhpcy5fYWN0aXZpdHkgPSB0aGlzLl9waW5nID0gdGhpcy5fY2FsbEFuc3dlciA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBDbGllbnRQYWNrZXQuVHlwZUNhc2UuY2FsbE9mZmVyO1xuICAgIH1cbiAgICB0aGlzLl9jYWxsT2ZmZXIgPSB2YWx1ZTtcbiAgfVxuICBnZXQgY2FsbEFuc3dlcigpOiBwcm90b1B1YlYxTW9kZWxzMDEwLkNhbGxBbnN3ZXJCeUNsaWVudCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2NhbGxBbnN3ZXI7XG4gIH1cbiAgc2V0IGNhbGxBbnN3ZXIodmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMTAuQ2FsbEFuc3dlckJ5Q2xpZW50IHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX21lc3NhZ2UgPSB0aGlzLl9zZWVuID0gdGhpcy5fYWN0aXZpdHkgPSB0aGlzLl9waW5nID0gdGhpcy5fY2FsbE9mZmVyID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IENsaWVudFBhY2tldC5UeXBlQ2FzZS5jYWxsQW5zd2VyO1xuICAgIH1cbiAgICB0aGlzLl9jYWxsQW5zd2VyID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgQ2xpZW50UGFja2V0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IENsaWVudFBhY2tldC5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlID8gdGhpcy5tZXNzYWdlLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBzZWVuOiB0aGlzLnNlZW4gPyB0aGlzLnNlZW4udG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGFjdGl2aXR5OiB0aGlzLmFjdGl2aXR5ID8gdGhpcy5hY3Rpdml0eS50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgcGluZzogdGhpcy5waW5nID8gdGhpcy5waW5nLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBjYWxsT2ZmZXI6IHRoaXMuY2FsbE9mZmVyID8gdGhpcy5jYWxsT2ZmZXIudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGNhbGxBbnN3ZXI6IHRoaXMuY2FsbEFuc3dlciA/IHRoaXMuY2FsbEFuc3dlci50b09iamVjdCgpIDogdW5kZWZpbmVkXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogQ2xpZW50UGFja2V0LkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2UgPyB0aGlzLm1lc3NhZ2UudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgc2VlbjogdGhpcy5zZWVuID8gdGhpcy5zZWVuLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIGFjdGl2aXR5OiB0aGlzLmFjdGl2aXR5ID8gdGhpcy5hY3Rpdml0eS50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICBwaW5nOiB0aGlzLnBpbmcgPyB0aGlzLnBpbmcudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgY2FsbE9mZmVyOiB0aGlzLmNhbGxPZmZlciA/IHRoaXMuY2FsbE9mZmVyLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIGNhbGxBbnN3ZXI6IHRoaXMuY2FsbEFuc3dlclxuICAgICAgICA/IHRoaXMuY2FsbEFuc3dlci50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGxcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIENsaWVudFBhY2tldCB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgQ2xpZW50UGFja2V0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBpZD86IHN0cmluZztcbiAgICBtZXNzYWdlPzogcHJvdG9QdWJWMU1vZGVsczAxNS5NZXNzYWdlQnlDbGllbnQuQXNPYmplY3Q7XG4gICAgc2Vlbj86IHByb3RvUHViVjFNb2RlbHMwMTMuU2VlbkJ5Q2xpZW50LkFzT2JqZWN0O1xuICAgIGFjdGl2aXR5PzogcHJvdG9QdWJWMU1vZGVsczAxNC5BY3Rpdml0eUJ5Q2xpZW50LkFzT2JqZWN0O1xuICAgIHBpbmc/OiBQaW5nLkFzT2JqZWN0O1xuICAgIGNhbGxPZmZlcj86IHByb3RvUHViVjFNb2RlbHMwMTAuQ2FsbE9mZmVyQnlDbGllbnQuQXNPYmplY3Q7XG4gICAgY2FsbEFuc3dlcj86IHByb3RvUHViVjFNb2RlbHMwMTAuQ2FsbEFuc3dlckJ5Q2xpZW50LkFzT2JqZWN0O1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIENsaWVudFBhY2tldFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgaWQ/OiBzdHJpbmc7XG4gICAgbWVzc2FnZT86IHByb3RvUHViVjFNb2RlbHMwMTUuTWVzc2FnZUJ5Q2xpZW50LkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBzZWVuPzogcHJvdG9QdWJWMU1vZGVsczAxMy5TZWVuQnlDbGllbnQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIGFjdGl2aXR5PzogcHJvdG9QdWJWMU1vZGVsczAxNC5BY3Rpdml0eUJ5Q2xpZW50LkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBwaW5nPzogUGluZy5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgY2FsbE9mZmVyPzogcHJvdG9QdWJWMU1vZGVsczAxMC5DYWxsT2ZmZXJCeUNsaWVudC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgY2FsbEFuc3dlcj86IHByb3RvUHViVjFNb2RlbHMwMTAuQ2FsbEFuc3dlckJ5Q2xpZW50LkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgfVxuICBleHBvcnQgZW51bSBUeXBlQ2FzZSB7XG4gICAgbm9uZSA9IDAsXG4gICAgbWVzc2FnZSA9IDEsXG4gICAgc2VlbiA9IDIsXG4gICAgYWN0aXZpdHkgPSAzLFxuICAgIHBpbmcgPSA0LFxuICAgIGNhbGxPZmZlciA9IDUsXG4gICAgY2FsbEFuc3dlciA9IDZcbiAgfVxufVxuIl19