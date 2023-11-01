import { BinaryReader, BinaryWriter } from 'google-protobuf';
import * as protoPubV1Models000 from '../../pub/v1/models/uid.pb';
import * as protoPubV1Models003 from '../../pub/v1/models/location.pb';
import * as protoPubV1Models010 from '../../pub/v1/models/call.pb';
import * as protoPubV1Models014 from '../../pub/v1/models/seen.pb';
import * as protoPubV1Models015 from '../../pub/v1/models/activity.pb';
import * as protoPubV1Models016 from '../../pub/v1/models/message.pb';
import * as protoPubV1Models017 from '../../pub/v1/models/room-metadata.pb';
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
        this.lastMessageDeliveryAck = _value.lastMessageDeliveryAck
            ? new protoPubV1Models016.MessageDeliveryAck(_value.lastMessageDeliveryAck)
            : undefined;
        this.lastRoomMetadataUpdateTime = _value.lastRoomMetadataUpdateTime;
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
        _instance.lastMessageDeliveryAck =
            _instance.lastMessageDeliveryAck || undefined;
        _instance.lastRoomMetadataUpdateTime =
            _instance.lastRoomMetadataUpdateTime || '0';
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
                case 4:
                    _instance.lastMessageDeliveryAck = new protoPubV1Models016.MessageDeliveryAck();
                    _reader.readMessage(_instance.lastMessageDeliveryAck, protoPubV1Models016.MessageDeliveryAck.deserializeBinaryFromReader);
                    break;
                case 5:
                    _instance.lastRoomMetadataUpdateTime = _reader.readInt64String();
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
        if (_instance.lastMessageDeliveryAck) {
            _writer.writeMessage(4, _instance.lastMessageDeliveryAck, protoPubV1Models016.MessageDeliveryAck.serializeBinaryToWriter);
        }
        if (_instance.lastRoomMetadataUpdateTime) {
            _writer.writeInt64String(5, _instance.lastRoomMetadataUpdateTime);
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
    get lastMessageDeliveryAck() {
        return this._lastMessageDeliveryAck;
    }
    set lastMessageDeliveryAck(value) {
        this._lastMessageDeliveryAck = value;
    }
    get lastRoomMetadataUpdateTime() {
        return this._lastRoomMetadataUpdateTime;
    }
    set lastRoomMetadataUpdateTime(value) {
        this._lastRoomMetadataUpdateTime = value;
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
            streamInputCapabilityStatus: this.streamInputCapabilityStatus,
            lastMessageDeliveryAck: this.lastMessageDeliveryAck
                ? this.lastMessageDeliveryAck.toObject()
                : undefined,
            lastRoomMetadataUpdateTime: this.lastRoomMetadataUpdateTime
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
                : this.streamInputCapabilityStatus],
            lastMessageDeliveryAck: this.lastMessageDeliveryAck
                ? this.lastMessageDeliveryAck.toProtobufJSON(options)
                : null,
            lastRoomMetadataUpdateTime: this.lastRoomMetadataUpdateTime
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
            presenceType: protoPubV1Models017.PresenceType[this.presenceType === null || this.presenceType === undefined
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
            ? new protoPubV1Models016.Message(_value.message)
            : undefined;
        this.seen = _value.seen
            ? new protoPubV1Models014.Seen(_value.seen)
            : undefined;
        this.activity = _value.activity
            ? new protoPubV1Models015.Activity(_value.activity)
            : undefined;
        this.roomPresenceTypeChanged = _value.roomPresenceTypeChanged
            ? new RoomPresenceTypeChanged(_value.roomPresenceTypeChanged)
            : undefined;
        this.liveLocationStatusChanged = _value.liveLocationStatusChanged
            ? new protoPubV1Models003.LiveLocation(_value.liveLocationStatusChanged)
            : undefined;
        this.pong = _value.pong ? new Pong(_value.pong) : undefined;
        this.messageDeliveryAck = _value.messageDeliveryAck
            ? new protoPubV1Models016.MessageDeliveryAck(_value.messageDeliveryAck)
            : undefined;
        this.callOffer = _value.callOffer
            ? new protoPubV1Models010.CallOffer(_value.callOffer)
            : undefined;
        this.callAnswer = _value.callAnswer
            ? new protoPubV1Models010.CallAnswer(_value.callAnswer)
            : undefined;
        this.callEvent = _value.callEvent
            ? new protoPubV1Models010.CallEventV2(_value.callEvent)
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
                    _instance.message = new protoPubV1Models016.Message();
                    _reader.readMessage(_instance.message, protoPubV1Models016.Message.deserializeBinaryFromReader);
                    break;
                case 3:
                    _instance.seen = new protoPubV1Models014.Seen();
                    _reader.readMessage(_instance.seen, protoPubV1Models014.Seen.deserializeBinaryFromReader);
                    break;
                case 4:
                    _instance.activity = new protoPubV1Models015.Activity();
                    _reader.readMessage(_instance.activity, protoPubV1Models015.Activity.deserializeBinaryFromReader);
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
                    _instance.messageDeliveryAck = new protoPubV1Models016.MessageDeliveryAck();
                    _reader.readMessage(_instance.messageDeliveryAck, protoPubV1Models016.MessageDeliveryAck.deserializeBinaryFromReader);
                    break;
                case 10:
                    _instance.callOffer = new protoPubV1Models010.CallOffer();
                    _reader.readMessage(_instance.callOffer, protoPubV1Models010.CallOffer.deserializeBinaryFromReader);
                    break;
                case 11:
                    _instance.callAnswer = new protoPubV1Models010.CallAnswer();
                    _reader.readMessage(_instance.callAnswer, protoPubV1Models010.CallAnswer.deserializeBinaryFromReader);
                    break;
                case 13:
                    _instance.callEvent = new protoPubV1Models010.CallEventV2();
                    _reader.readMessage(_instance.callEvent, protoPubV1Models010.CallEventV2.deserializeBinaryFromReader);
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
            _writer.writeMessage(2, _instance.message, protoPubV1Models016.Message.serializeBinaryToWriter);
        }
        if (_instance.seen) {
            _writer.writeMessage(3, _instance.seen, protoPubV1Models014.Seen.serializeBinaryToWriter);
        }
        if (_instance.activity) {
            _writer.writeMessage(4, _instance.activity, protoPubV1Models015.Activity.serializeBinaryToWriter);
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
            _writer.writeMessage(9, _instance.messageDeliveryAck, protoPubV1Models016.MessageDeliveryAck.serializeBinaryToWriter);
        }
        if (_instance.callOffer) {
            _writer.writeMessage(10, _instance.callOffer, protoPubV1Models010.CallOffer.serializeBinaryToWriter);
        }
        if (_instance.callAnswer) {
            _writer.writeMessage(11, _instance.callAnswer, protoPubV1Models010.CallAnswer.serializeBinaryToWriter);
        }
        if (_instance.callEvent) {
            _writer.writeMessage(13, _instance.callEvent, protoPubV1Models010.CallEventV2.serializeBinaryToWriter);
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
            this._message = this._seen = this._activity = this._roomPresenceTypeChanged = this._liveLocationStatusChanged = this._pong = this._messageDeliveryAck = this._callOffer = this._callAnswer = this._callEvent = this._expletivePacket = undefined;
            this._type = ServerPacket.TypeCase.error;
        }
        this._error = value;
    }
    get message() {
        return this._message;
    }
    set message(value) {
        if (value !== undefined && value !== null) {
            this._error = this._seen = this._activity = this._roomPresenceTypeChanged = this._liveLocationStatusChanged = this._pong = this._messageDeliveryAck = this._callOffer = this._callAnswer = this._callEvent = this._expletivePacket = undefined;
            this._type = ServerPacket.TypeCase.message;
        }
        this._message = value;
    }
    get seen() {
        return this._seen;
    }
    set seen(value) {
        if (value !== undefined && value !== null) {
            this._error = this._message = this._activity = this._roomPresenceTypeChanged = this._liveLocationStatusChanged = this._pong = this._messageDeliveryAck = this._callOffer = this._callAnswer = this._callEvent = this._expletivePacket = undefined;
            this._type = ServerPacket.TypeCase.seen;
        }
        this._seen = value;
    }
    get activity() {
        return this._activity;
    }
    set activity(value) {
        if (value !== undefined && value !== null) {
            this._error = this._message = this._seen = this._roomPresenceTypeChanged = this._liveLocationStatusChanged = this._pong = this._messageDeliveryAck = this._callOffer = this._callAnswer = this._callEvent = this._expletivePacket = undefined;
            this._type = ServerPacket.TypeCase.activity;
        }
        this._activity = value;
    }
    get roomPresenceTypeChanged() {
        return this._roomPresenceTypeChanged;
    }
    set roomPresenceTypeChanged(value) {
        if (value !== undefined && value !== null) {
            this._error = this._message = this._seen = this._activity = this._liveLocationStatusChanged = this._pong = this._messageDeliveryAck = this._callOffer = this._callAnswer = this._callEvent = this._expletivePacket = undefined;
            this._type = ServerPacket.TypeCase.roomPresenceTypeChanged;
        }
        this._roomPresenceTypeChanged = value;
    }
    get liveLocationStatusChanged() {
        return this._liveLocationStatusChanged;
    }
    set liveLocationStatusChanged(value) {
        if (value !== undefined && value !== null) {
            this._error = this._message = this._seen = this._activity = this._roomPresenceTypeChanged = this._pong = this._messageDeliveryAck = this._callOffer = this._callAnswer = this._callEvent = this._expletivePacket = undefined;
            this._type = ServerPacket.TypeCase.liveLocationStatusChanged;
        }
        this._liveLocationStatusChanged = value;
    }
    get pong() {
        return this._pong;
    }
    set pong(value) {
        if (value !== undefined && value !== null) {
            this._error = this._message = this._seen = this._activity = this._roomPresenceTypeChanged = this._liveLocationStatusChanged = this._messageDeliveryAck = this._callOffer = this._callAnswer = this._callEvent = this._expletivePacket = undefined;
            this._type = ServerPacket.TypeCase.pong;
        }
        this._pong = value;
    }
    get messageDeliveryAck() {
        return this._messageDeliveryAck;
    }
    set messageDeliveryAck(value) {
        if (value !== undefined && value !== null) {
            this._error = this._message = this._seen = this._activity = this._roomPresenceTypeChanged = this._liveLocationStatusChanged = this._pong = this._callOffer = this._callAnswer = this._callEvent = this._expletivePacket = undefined;
            this._type = ServerPacket.TypeCase.messageDeliveryAck;
        }
        this._messageDeliveryAck = value;
    }
    get callOffer() {
        return this._callOffer;
    }
    set callOffer(value) {
        if (value !== undefined && value !== null) {
            this._error = this._message = this._seen = this._activity = this._roomPresenceTypeChanged = this._liveLocationStatusChanged = this._pong = this._messageDeliveryAck = this._callAnswer = this._callEvent = this._expletivePacket = undefined;
            this._type = ServerPacket.TypeCase.callOffer;
        }
        this._callOffer = value;
    }
    get callAnswer() {
        return this._callAnswer;
    }
    set callAnswer(value) {
        if (value !== undefined && value !== null) {
            this._error = this._message = this._seen = this._activity = this._roomPresenceTypeChanged = this._liveLocationStatusChanged = this._pong = this._messageDeliveryAck = this._callOffer = this._callEvent = this._expletivePacket = undefined;
            this._type = ServerPacket.TypeCase.callAnswer;
        }
        this._callAnswer = value;
    }
    get callEvent() {
        return this._callEvent;
    }
    set callEvent(value) {
        if (value !== undefined && value !== null) {
            this._error = this._message = this._seen = this._activity = this._roomPresenceTypeChanged = this._liveLocationStatusChanged = this._pong = this._messageDeliveryAck = this._callOffer = this._callAnswer = this._expletivePacket = undefined;
            this._type = ServerPacket.TypeCase.callEvent;
        }
        this._callEvent = value;
    }
    get expletivePacket() {
        return this._expletivePacket;
    }
    set expletivePacket(value) {
        if (value !== undefined && value !== null) {
            this._error = this._message = this._seen = this._activity = this._roomPresenceTypeChanged = this._liveLocationStatusChanged = this._pong = this._messageDeliveryAck = this._callOffer = this._callAnswer = this._callEvent = undefined;
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
            callEvent: this.callEvent ? this.callEvent.toObject() : undefined,
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
            callEvent: this.callEvent ? this.callEvent.toProtobufJSON(options) : null,
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
        TypeCase[TypeCase["callEvent"] = 11] = "callEvent";
        TypeCase[TypeCase["expletivePacket"] = 12] = "expletivePacket";
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
            ? new protoPubV1Models016.MessageByClient(_value.message)
            : undefined;
        this.seen = _value.seen
            ? new protoPubV1Models014.SeenByClient(_value.seen)
            : undefined;
        this.activity = _value.activity
            ? new protoPubV1Models015.ActivityByClient(_value.activity)
            : undefined;
        this.ping = _value.ping ? new Ping(_value.ping) : undefined;
        this.callOffer = _value.callOffer
            ? new protoPubV1Models010.CallOfferByClient(_value.callOffer)
            : undefined;
        this.callAnswer = _value.callAnswer
            ? new protoPubV1Models010.CallAnswerByClient(_value.callAnswer)
            : undefined;
        this.callEvent = _value.callEvent
            ? new protoPubV1Models010.CallEventV2ByClient(_value.callEvent)
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
                    _instance.message = new protoPubV1Models016.MessageByClient();
                    _reader.readMessage(_instance.message, protoPubV1Models016.MessageByClient.deserializeBinaryFromReader);
                    break;
                case 3:
                    _instance.seen = new protoPubV1Models014.SeenByClient();
                    _reader.readMessage(_instance.seen, protoPubV1Models014.SeenByClient.deserializeBinaryFromReader);
                    break;
                case 4:
                    _instance.activity = new protoPubV1Models015.ActivityByClient();
                    _reader.readMessage(_instance.activity, protoPubV1Models015.ActivityByClient.deserializeBinaryFromReader);
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
                case 8:
                    _instance.callEvent = new protoPubV1Models010.CallEventV2ByClient();
                    _reader.readMessage(_instance.callEvent, protoPubV1Models010.CallEventV2ByClient.deserializeBinaryFromReader);
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
            _writer.writeMessage(2, _instance.message, protoPubV1Models016.MessageByClient.serializeBinaryToWriter);
        }
        if (_instance.seen) {
            _writer.writeMessage(3, _instance.seen, protoPubV1Models014.SeenByClient.serializeBinaryToWriter);
        }
        if (_instance.activity) {
            _writer.writeMessage(4, _instance.activity, protoPubV1Models015.ActivityByClient.serializeBinaryToWriter);
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
        if (_instance.callEvent) {
            _writer.writeMessage(8, _instance.callEvent, protoPubV1Models010.CallEventV2ByClient.serializeBinaryToWriter);
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
            this._seen = this._activity = this._ping = this._callOffer = this._callAnswer = this._callEvent = undefined;
            this._type = ClientPacket.TypeCase.message;
        }
        this._message = value;
    }
    get seen() {
        return this._seen;
    }
    set seen(value) {
        if (value !== undefined && value !== null) {
            this._message = this._activity = this._ping = this._callOffer = this._callAnswer = this._callEvent = undefined;
            this._type = ClientPacket.TypeCase.seen;
        }
        this._seen = value;
    }
    get activity() {
        return this._activity;
    }
    set activity(value) {
        if (value !== undefined && value !== null) {
            this._message = this._seen = this._ping = this._callOffer = this._callAnswer = this._callEvent = undefined;
            this._type = ClientPacket.TypeCase.activity;
        }
        this._activity = value;
    }
    get ping() {
        return this._ping;
    }
    set ping(value) {
        if (value !== undefined && value !== null) {
            this._message = this._seen = this._activity = this._callOffer = this._callAnswer = this._callEvent = undefined;
            this._type = ClientPacket.TypeCase.ping;
        }
        this._ping = value;
    }
    get callOffer() {
        return this._callOffer;
    }
    set callOffer(value) {
        if (value !== undefined && value !== null) {
            this._message = this._seen = this._activity = this._ping = this._callAnswer = this._callEvent = undefined;
            this._type = ClientPacket.TypeCase.callOffer;
        }
        this._callOffer = value;
    }
    get callAnswer() {
        return this._callAnswer;
    }
    set callAnswer(value) {
        if (value !== undefined && value !== null) {
            this._message = this._seen = this._activity = this._ping = this._callOffer = this._callEvent = undefined;
            this._type = ClientPacket.TypeCase.callAnswer;
        }
        this._callAnswer = value;
    }
    get callEvent() {
        return this._callEvent;
    }
    set callEvent(value) {
        if (value !== undefined && value !== null) {
            this._message = this._seen = this._activity = this._ping = this._callOffer = this._callAnswer = undefined;
            this._type = ClientPacket.TypeCase.callEvent;
        }
        this._callEvent = value;
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
            callAnswer: this.callAnswer ? this.callAnswer.toObject() : undefined,
            callEvent: this.callEvent ? this.callEvent.toObject() : undefined
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
                : null,
            callEvent: this.callEvent ? this.callEvent.toProtobufJSON(options) : null
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
        TypeCase[TypeCase["callEvent"] = 7] = "callEvent";
    })(TypeCase = ClientPacket.TypeCase || (ClientPacket.TypeCase = {}));
})(ClientPacket || (ClientPacket = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5wYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Byb3RvL3NyYy9saWIvcHViL3YxL2NvcmUucGIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV0EsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQWMsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RSxPQUFPLEtBQUssbUJBQW1CLE1BQU0sNEJBQTRCLENBQUM7QUFHbEUsT0FBTyxLQUFLLG1CQUFtQixNQUFNLGlDQUFpQyxDQUFDO0FBT3ZFLE9BQU8sS0FBSyxtQkFBbUIsTUFBTSw2QkFBNkIsQ0FBQztBQUluRSxPQUFPLEtBQUssbUJBQW1CLE1BQU0sNkJBQTZCLENBQUM7QUFDbkUsT0FBTyxLQUFLLG1CQUFtQixNQUFNLGlDQUFpQyxDQUFDO0FBQ3ZFLE9BQU8sS0FBSyxtQkFBbUIsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN0RSxPQUFPLEtBQUssbUJBQW1CLE1BQU0sc0NBQXNDLENBQUM7QUFDNUU7O0dBRUc7QUFDSCxNQUFNLE9BQU8sNEJBQTRCO0lBcUR2Qzs7O09BR0c7SUFDSCxZQUNFLE1BQWdFO1FBRWhFLE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO1FBQ3RCLDRCQUE0QixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBM0REOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFpQjtRQUN4QyxNQUFNLFFBQVEsR0FBRyxJQUFJLDRCQUE0QixFQUFFLENBQUM7UUFDcEQsNEJBQTRCLENBQUMsMkJBQTJCLENBQ3RELFFBQVEsRUFDUixJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FDeEIsQ0FBQztRQUNGLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQXVDLElBQUcsQ0FBQztJQUUvRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLDJCQUEyQixDQUNoQyxTQUF1QyxFQUN2QyxPQUFxQjtRQUVyQixPQUFPLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUMxQixJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7Z0JBQUUsTUFBTTtZQUVoQyxRQUFRLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRTtnQkFDaEM7b0JBQ0UsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3ZCO1NBQ0Y7UUFFRCw0QkFBNEIsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsdUJBQXVCLENBQzVCLFNBQXVDLEVBQ3ZDLE9BQXFCLElBQ3BCLENBQUM7SUFhSjs7O09BR0c7SUFDSCxlQUFlO1FBQ2IsTUFBTSxNQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsQyw0QkFBNEIsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDbkUsT0FBTyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsUUFBUTtRQUNOLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUVEOztPQUVHO0lBQ0gsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsY0FBYztJQUNaLGFBQWE7SUFDYixPQUErQjtRQUUvQixPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7O0FBakdNLCtCQUFFLEdBQUcsZ0RBQWdELENBQUM7QUErRy9EOztHQUVHO0FBQ0gsTUFBTSxPQUFPLG1CQUFtQjtJQXFEOUI7OztPQUdHO0lBQ0gsWUFBWSxNQUF1RDtRQUNqRSxNQUFNLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUN0QixtQkFBbUIsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQXpERDs7O09BR0c7SUFDSCxNQUFNLENBQUMsaUJBQWlCLENBQUMsS0FBaUI7UUFDeEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxtQkFBbUIsRUFBRSxDQUFDO1FBQzNDLG1CQUFtQixDQUFDLDJCQUEyQixDQUM3QyxRQUFRLEVBQ1IsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQ3hCLENBQUM7UUFDRixPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUE4QixJQUFHLENBQUM7SUFFdEQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQywyQkFBMkIsQ0FDaEMsU0FBOEIsRUFDOUIsT0FBcUI7UUFFckIsT0FBTyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDMUIsSUFBSSxPQUFPLENBQUMsVUFBVSxFQUFFO2dCQUFFLE1BQU07WUFFaEMsUUFBUSxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUU7Z0JBQ2hDO29CQUNFLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUN2QjtTQUNGO1FBRUQsbUJBQW1CLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLHVCQUF1QixDQUM1QixTQUE4QixFQUM5QixPQUFxQixJQUNwQixDQUFDO0lBV0o7OztPQUdHO0lBQ0gsZUFBZTtRQUNiLE1BQU0sTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsbUJBQW1CLENBQUMsdUJBQXVCLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzFELE9BQU8sTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7T0FFRztJQUNILFFBQVE7UUFDTixPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFRDs7T0FFRztJQUNILE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGNBQWM7SUFDWixhQUFhO0lBQ2IsT0FBK0I7UUFFL0IsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDOztBQS9GTSxzQkFBRSxHQUFHLHVDQUF1QyxDQUFDO0FBNkd0RDs7R0FFRztBQUNILE1BQU0sT0FBTyxJQUFJO0lBK0RmOzs7T0FHRztJQUNILFlBQVksTUFBd0M7UUFDbEQsTUFBTSxHQUFHLE1BQU0sSUFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQztRQUM1QyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFyRUQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEtBQWlCO1FBQ3hDLE1BQU0sUUFBUSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLDJCQUEyQixDQUFDLFFBQVEsRUFBRSxJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3BFLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQWU7UUFDakMsU0FBUyxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUMsWUFBWSxJQUFJLEdBQUcsQ0FBQztRQUN2RCxTQUFTLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQyxjQUFjLElBQUksS0FBSyxDQUFDO0lBQy9ELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLDJCQUEyQixDQUFDLFNBQWUsRUFBRSxPQUFxQjtRQUN2RSxPQUFPLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUMxQixJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7Z0JBQUUsTUFBTTtZQUVoQyxRQUFRLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRTtnQkFDaEMsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUNuRCxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDOUMsTUFBTTtnQkFDUjtvQkFDRSxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdkI7U0FDRjtRQUVELElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsdUJBQXVCLENBQUMsU0FBZSxFQUFFLE9BQXFCO1FBQ25FLElBQUksU0FBUyxDQUFDLFlBQVksRUFBRTtZQUMxQixPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNyRDtRQUNELElBQUksU0FBUyxDQUFDLGNBQWMsRUFBRTtZQUM1QixPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDaEQ7SUFDSCxDQUFDO0lBZUQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7SUFDRCxJQUFJLFlBQVksQ0FBQyxLQUF5QjtRQUN4QyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBQ0QsSUFBSSxjQUFjO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDO0lBQ0QsSUFBSSxjQUFjLENBQUMsS0FBMEI7UUFDM0MsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQUVEOzs7T0FHRztJQUNILGVBQWU7UUFDYixNQUFNLE1BQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDM0MsT0FBTyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsUUFBUTtRQUNOLE9BQU87WUFDTCxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDL0IsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO1NBQ3BDLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxjQUFjO0lBQ1osYUFBYTtJQUNiLE9BQStCO1FBRS9CLE9BQU87WUFDTCxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDL0IsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO1NBQ3BDLENBQUM7SUFDSixDQUFDOztBQTdITSxPQUFFLEdBQUcsd0JBQXdCLENBQUM7QUFpSnZDOztHQUVHO0FBQ0gsTUFBTSxPQUFPLElBQUk7SUFrR2Y7OztPQUdHO0lBQ0gsWUFBWSxNQUF3QztRQUNsRCxNQUFNLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ3BDLElBQUksQ0FBQywyQkFBMkIsR0FBRyxNQUFNLENBQUMsMkJBQTJCLENBQUM7UUFDdEUsSUFBSSxDQUFDLHNCQUFzQixHQUFHLE1BQU0sQ0FBQyxzQkFBc0I7WUFDekQsQ0FBQyxDQUFDLElBQUksbUJBQW1CLENBQUMsa0JBQWtCLENBQ3hDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FDOUI7WUFDSCxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ2QsSUFBSSxDQUFDLDBCQUEwQixHQUFHLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQztRQUNwRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUEvR0Q7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEtBQWlCO1FBQ3hDLE1BQU0sUUFBUSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLDJCQUEyQixDQUFDLFFBQVEsRUFBRSxJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3BFLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQWU7UUFDakMsU0FBUyxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQztRQUM5QyxTQUFTLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQyxVQUFVLElBQUksR0FBRyxDQUFDO1FBQ25ELFNBQVMsQ0FBQywyQkFBMkI7WUFDbkMsU0FBUyxDQUFDLDJCQUEyQixJQUFJLENBQUMsQ0FBQztRQUM3QyxTQUFTLENBQUMsc0JBQXNCO1lBQzlCLFNBQVMsQ0FBQyxzQkFBc0IsSUFBSSxTQUFTLENBQUM7UUFDaEQsU0FBUyxDQUFDLDBCQUEwQjtZQUNsQyxTQUFTLENBQUMsMEJBQTBCLElBQUksR0FBRyxDQUFDO0lBQ2hELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLDJCQUEyQixDQUFDLFNBQWUsRUFBRSxPQUFxQjtRQUN2RSxPQUFPLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUMxQixJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7Z0JBQUUsTUFBTTtZQUVoQyxRQUFRLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRTtnQkFDaEMsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO29CQUMxQyxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxlQUFlLEVBQUUsQ0FBQztvQkFDakQsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLDJCQUEyQixHQUFHLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDM0QsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLHNCQUFzQixHQUFHLElBQUksbUJBQW1CLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztvQkFDaEYsT0FBTyxDQUFDLFdBQVcsQ0FDakIsU0FBUyxDQUFDLHNCQUFzQixFQUNoQyxtQkFBbUIsQ0FBQyxrQkFBa0IsQ0FBQywyQkFBMkIsQ0FDbkUsQ0FBQztvQkFDRixNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsMEJBQTBCLEdBQUcsT0FBTyxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUNqRSxNQUFNO2dCQUNSO29CQUNFLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUN2QjtTQUNGO1FBRUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxTQUFlLEVBQUUsT0FBcUI7UUFDbkUsSUFBSSxTQUFTLENBQUMsUUFBUSxFQUFFO1lBQ3RCLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUM1QztRQUNELElBQUksU0FBUyxDQUFDLFVBQVUsRUFBRTtZQUN4QixPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUNuRDtRQUNELElBQUksU0FBUyxDQUFDLDJCQUEyQixFQUFFO1lBQ3pDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1NBQzdEO1FBQ0QsSUFBSSxTQUFTLENBQUMsc0JBQXNCLEVBQUU7WUFDcEMsT0FBTyxDQUFDLFlBQVksQ0FDbEIsQ0FBQyxFQUNELFNBQVMsQ0FBQyxzQkFBNkIsRUFDdkMsbUJBQW1CLENBQUMsa0JBQWtCLENBQUMsdUJBQXVCLENBQy9ELENBQUM7U0FDSDtRQUNELElBQUksU0FBUyxDQUFDLDBCQUEwQixFQUFFO1lBQ3hDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLDBCQUEwQixDQUFDLENBQUM7U0FDbkU7SUFDSCxDQUFDO0lBeUJELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBQ0QsSUFBSSxRQUFRLENBQUMsS0FBeUI7UUFDcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQUNELElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0lBQ0QsSUFBSSxVQUFVLENBQUMsS0FBeUI7UUFDdEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQUNELElBQUksMkJBQTJCO1FBRzdCLE9BQU8sSUFBSSxDQUFDLDRCQUE0QixDQUFDO0lBQzNDLENBQUM7SUFDRCxJQUFJLDJCQUEyQixDQUM3QixLQUFtRDtRQUVuRCxJQUFJLENBQUMsNEJBQTRCLEdBQUcsS0FBSyxDQUFDO0lBQzVDLENBQUM7SUFDRCxJQUFJLHNCQUFzQjtRQUd4QixPQUFPLElBQUksQ0FBQyx1QkFBdUIsQ0FBQztJQUN0QyxDQUFDO0lBQ0QsSUFBSSxzQkFBc0IsQ0FDeEIsS0FBeUQ7UUFFekQsSUFBSSxDQUFDLHVCQUF1QixHQUFHLEtBQUssQ0FBQztJQUN2QyxDQUFDO0lBQ0QsSUFBSSwwQkFBMEI7UUFDNUIsT0FBTyxJQUFJLENBQUMsMkJBQTJCLENBQUM7SUFDMUMsQ0FBQztJQUNELElBQUksMEJBQTBCLENBQUMsS0FBeUI7UUFDdEQsSUFBSSxDQUFDLDJCQUEyQixHQUFHLEtBQUssQ0FBQztJQUMzQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZUFBZTtRQUNiLE1BQU0sTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMzQyxPQUFPLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxRQUFRO1FBQ04sT0FBTztZQUNMLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsMkJBQTJCLEVBQUUsSUFBSSxDQUFDLDJCQUEyQjtZQUM3RCxzQkFBc0IsRUFBRSxJQUFJLENBQUMsc0JBQXNCO2dCQUNqRCxDQUFDLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFFBQVEsRUFBRTtnQkFDeEMsQ0FBQyxDQUFDLFNBQVM7WUFDYiwwQkFBMEIsRUFBRSxJQUFJLENBQUMsMEJBQTBCO1NBQzVELENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxjQUFjO0lBQ1osYUFBYTtJQUNiLE9BQStCO1FBRS9CLE9BQU87WUFDTCxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzNCLDJCQUEyQixFQUN6QixJQUFJLENBQUMsMkJBQTJCLENBQzlCLElBQUksQ0FBQywyQkFBMkIsS0FBSyxJQUFJO2dCQUN6QyxJQUFJLENBQUMsMkJBQTJCLEtBQUssU0FBUztnQkFDNUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsQ0FBQyxDQUFDLElBQUksQ0FBQywyQkFBMkIsQ0FDckM7WUFDSCxzQkFBc0IsRUFBRSxJQUFJLENBQUMsc0JBQXNCO2dCQUNqRCxDQUFDLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUM7Z0JBQ3JELENBQUMsQ0FBQyxJQUFJO1lBQ1IsMEJBQTBCLEVBQUUsSUFBSSxDQUFDLDBCQUEwQjtTQUM1RCxDQUFDO0lBQ0osQ0FBQzs7QUFqTk0sT0FBRSxHQUFHLHdCQUF3QixDQUFDO0FBbU52QyxXQUFjLElBQUk7SUFzQmhCLElBQVksMkJBSVg7SUFKRCxXQUFZLDJCQUEyQjtRQUNyQyx1R0FBcUIsQ0FBQTtRQUNyQiwrRkFBaUIsQ0FBQTtRQUNqQixxR0FBb0IsQ0FBQTtJQUN0QixDQUFDLEVBSlcsMkJBQTJCLEdBQTNCLGdDQUEyQixLQUEzQixnQ0FBMkIsUUFJdEM7QUFDSCxDQUFDLEVBM0JhLElBQUksS0FBSixJQUFJLFFBMkJqQjtBQUVEOztHQUVHO0FBQ0gsTUFBTSxPQUFPLGVBQWU7SUFnRTFCOzs7T0FHRztJQUNILFlBQVksTUFBbUQ7UUFDN0QsTUFBTSxHQUFHLE1BQU0sSUFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ3hCLGVBQWUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQXJFRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsaUJBQWlCLENBQUMsS0FBaUI7UUFDeEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxlQUFlLEVBQUUsQ0FBQztRQUN2QyxlQUFlLENBQUMsMkJBQTJCLENBQ3pDLFFBQVEsRUFDUixJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FDeEIsQ0FBQztRQUNGLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQTBCO1FBQzVDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsMkJBQTJCLENBQ2hDLFNBQTBCLEVBQzFCLE9BQXFCO1FBRXJCLE9BQU8sT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQzFCLElBQUksT0FBTyxDQUFDLFVBQVUsRUFBRTtnQkFBRSxNQUFNO1lBRWhDLFFBQVEsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFFO2dCQUNoQyxLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQ3RDLE1BQU07Z0JBQ1I7b0JBQ0UsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3ZCO1NBQ0Y7UUFFRCxlQUFlLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLHVCQUF1QixDQUM1QixTQUEwQixFQUMxQixPQUFxQjtRQUVyQixJQUFJLFNBQVMsQ0FBQyxJQUFJLEVBQUU7WUFDbEIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3hDO0lBQ0gsQ0FBQztJQWFELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBQ0QsSUFBSSxJQUFJLENBQUMsS0FBeUI7UUFDaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUVEOzs7T0FHRztJQUNILGVBQWU7UUFDYixNQUFNLE1BQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xDLGVBQWUsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDdEQsT0FBTyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsUUFBUTtRQUNOLE9BQU87WUFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7U0FDaEIsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGNBQWM7SUFDWixhQUFhO0lBQ2IsT0FBK0I7UUFFL0IsT0FBTztZQUNMLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtTQUNoQixDQUFDO0lBQ0osQ0FBQzs7QUFySE0sa0JBQUUsR0FBRyxtQ0FBbUMsQ0FBQztBQXVJbEQ7O0dBRUc7QUFDSCxNQUFNLE9BQU8sdUJBQXVCO0lBZ0ZsQzs7O09BR0c7SUFDSCxZQUFZLE1BQTJEO1FBQ3JFLE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDNUUsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDO1FBQ3hDLHVCQUF1QixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBdEZEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFpQjtRQUN4QyxNQUFNLFFBQVEsR0FBRyxJQUFJLHVCQUF1QixFQUFFLENBQUM7UUFDL0MsdUJBQXVCLENBQUMsMkJBQTJCLENBQ2pELFFBQVEsRUFDUixJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FDeEIsQ0FBQztRQUNGLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQWtDO1FBQ3BELFNBQVMsQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDLEdBQUcsSUFBSSxTQUFTLENBQUM7UUFDM0MsU0FBUyxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUMsWUFBWSxJQUFJLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQywyQkFBMkIsQ0FDaEMsU0FBa0MsRUFDbEMsT0FBcUI7UUFFckIsT0FBTyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDMUIsSUFBSSxPQUFPLENBQUMsVUFBVSxFQUFFO2dCQUFFLE1BQU07WUFFaEMsUUFBUSxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUU7Z0JBQ2hDLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsR0FBRyxHQUFHLElBQUksbUJBQW1CLENBQUMsR0FBRyxFQUFFLENBQUM7b0JBQzlDLE9BQU8sQ0FBQyxXQUFXLENBQ2pCLFNBQVMsQ0FBQyxHQUFHLEVBQ2IsbUJBQW1CLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUNwRCxDQUFDO29CQUNGLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUM1QyxNQUFNO2dCQUNSO29CQUNFLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUN2QjtTQUNGO1FBRUQsdUJBQXVCLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLHVCQUF1QixDQUM1QixTQUFrQyxFQUNsQyxPQUFxQjtRQUVyQixJQUFJLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDakIsT0FBTyxDQUFDLFlBQVksQ0FDbEIsQ0FBQyxFQUNELFNBQVMsQ0FBQyxHQUFVLEVBQ3BCLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FDaEQsQ0FBQztTQUNIO1FBQ0QsSUFBSSxTQUFTLENBQUMsWUFBWSxFQUFFO1lBQzFCLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUM5QztJQUNILENBQUM7SUFlRCxJQUFJLEdBQUc7UUFDTCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUNELElBQUksR0FBRyxDQUFDLEtBQTBDO1FBQ2hELElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFDRCxJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDNUIsQ0FBQztJQUNELElBQUksWUFBWSxDQUFDLEtBQW1EO1FBQ2xFLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxlQUFlO1FBQ2IsTUFBTSxNQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsQyx1QkFBdUIsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDOUQsT0FBTyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsUUFBUTtRQUNOLE9BQU87WUFDTCxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUztZQUMvQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7U0FDaEMsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGNBQWM7SUFDWixhQUFhO0lBQ2IsT0FBK0I7UUFFL0IsT0FBTztZQUNMLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUN2RCxZQUFZLEVBQ1YsbUJBQW1CLENBQUMsWUFBWSxDQUM5QixJQUFJLENBQUMsWUFBWSxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLFNBQVM7Z0JBQzNELENBQUMsQ0FBQyxDQUFDO2dCQUNILENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUN0QjtTQUNKLENBQUM7SUFDSixDQUFDOztBQW5KTSwwQkFBRSxHQUFHLDJDQUEyQyxDQUFDO0FBdUsxRDs7R0FFRztBQUNILE1BQU0sT0FBTyxhQUFhO0lBd0V4Qjs7O09BR0c7SUFDSCxZQUFZLE1BQWlEO1FBQzNELE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNoQyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDMUIsYUFBYSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBOUVEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFpQjtRQUN4QyxNQUFNLFFBQVEsR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO1FBQ3JDLGFBQWEsQ0FBQywyQkFBMkIsQ0FDdkMsUUFBUSxFQUNSLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUN4QixDQUFDO1FBQ0YsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBd0I7UUFDMUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQztRQUM5QyxTQUFTLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLDJCQUEyQixDQUNoQyxTQUF3QixFQUN4QixPQUFxQjtRQUVyQixPQUFPLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUMxQixJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7Z0JBQUUsTUFBTTtZQUVoQyxRQUFRLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRTtnQkFDaEMsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO29CQUMxQyxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDckMsTUFBTTtnQkFDUjtvQkFDRSxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdkI7U0FDRjtRQUVELGFBQWEsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsdUJBQXVCLENBQzVCLFNBQXdCLEVBQ3hCLE9BQXFCO1FBRXJCLElBQUksU0FBUyxDQUFDLFFBQVEsRUFBRTtZQUN0QixPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDNUM7UUFDRCxJQUFJLFNBQVMsQ0FBQyxLQUFLLEVBQUU7WUFDbkIsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQztJQWVELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBQ0QsSUFBSSxRQUFRLENBQUMsS0FBeUI7UUFDcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQUNELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBQ0QsSUFBSSxLQUFLLENBQUMsS0FBc0M7UUFDOUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVEOzs7T0FHRztJQUNILGVBQWU7UUFDYixNQUFNLE1BQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDcEQsT0FBTyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsUUFBUTtRQUNOLE9BQU87WUFDTCxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1NBQ2xCLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxjQUFjO0lBQ1osYUFBYTtJQUNiLE9BQStCO1FBRS9CLE9BQU87WUFDTCxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsS0FBSyxFQUNILGFBQWEsQ0FBQyxLQUFLLENBQ2pCLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQ2pFO1NBQ0osQ0FBQztJQUNKLENBQUM7O0FBeklNLGdCQUFFLEdBQUcsaUNBQWlDLENBQUM7QUEySWhELFdBQWMsYUFBYTtJQWdCekIsSUFBWSxLQVlYO0lBWkQsV0FBWSxLQUFLO1FBQ2YsdUNBQVcsQ0FBQTtRQUNYLCtDQUFlLENBQUE7UUFDZix1REFBbUIsQ0FBQTtRQUNuQiwyREFBcUIsQ0FBQTtRQUNyQiwyQ0FBYSxDQUFBO1FBQ2IseUNBQVksQ0FBQTtRQUNaLDZEQUFzQixDQUFBO1FBQ3RCLHlDQUFZLENBQUE7UUFDWixtREFBaUIsQ0FBQTtRQUNqQiwrQ0FBZSxDQUFBO1FBQ2YsNERBQXNCLENBQUE7SUFDeEIsQ0FBQyxFQVpXLEtBQUssR0FBTCxtQkFBSyxLQUFMLG1CQUFLLFFBWWhCO0FBQ0gsQ0FBQyxFQTdCYSxhQUFhLEtBQWIsYUFBYSxRQTZCMUI7QUFFRDs7R0FFRztBQUNILE1BQU0sT0FBTyxZQUFZO0lBZ1B2Qjs7O09BR0c7SUFDSCxZQUFZLE1BQWdEO1FBTnBELFVBQUssR0FBMEIsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFPaEUsTUFBTSxHQUFHLE1BQU0sSUFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLGFBQWEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUN4RSxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPO1lBQzNCLENBQUMsQ0FBQyxJQUFJLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO1lBQ2pELENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDZCxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJO1lBQ3JCLENBQUMsQ0FBQyxJQUFJLG1CQUFtQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQzNDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDZCxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRO1lBQzdCLENBQUMsQ0FBQyxJQUFJLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO1lBQ25ELENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDZCxJQUFJLENBQUMsdUJBQXVCLEdBQUcsTUFBTSxDQUFDLHVCQUF1QjtZQUMzRCxDQUFDLENBQUMsSUFBSSx1QkFBdUIsQ0FBQyxNQUFNLENBQUMsdUJBQXVCLENBQUM7WUFDN0QsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNkLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxNQUFNLENBQUMseUJBQXlCO1lBQy9ELENBQUMsQ0FBQyxJQUFJLG1CQUFtQixDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMseUJBQXlCLENBQUM7WUFDeEUsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNkLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDNUQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLE1BQU0sQ0FBQyxrQkFBa0I7WUFDakQsQ0FBQyxDQUFDLElBQUksbUJBQW1CLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDO1lBQ3ZFLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDZCxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTO1lBQy9CLENBQUMsQ0FBQyxJQUFJLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO1lBQ3JELENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDZCxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVO1lBQ2pDLENBQUMsQ0FBQyxJQUFJLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO1lBQ3ZELENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDZCxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTO1lBQy9CLENBQUMsQ0FBQyxJQUFJLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO1lBQ3ZELENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDZCxJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxlQUFlO1lBQzNDLENBQUMsQ0FBQyxJQUFJLGVBQWUsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDO1lBQzdDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDZCxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUM7UUFDMUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBclJEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFpQjtRQUN4QyxNQUFNLFFBQVEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3BDLFlBQVksQ0FBQywyQkFBMkIsQ0FBQyxRQUFRLEVBQUUsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUM1RSxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUF1QjtRQUN6QyxTQUFTLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQyxhQUFhLElBQUksRUFBRSxDQUFDO0lBQzFELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLDJCQUEyQixDQUNoQyxTQUF1QixFQUN2QixPQUFxQjtRQUVyQixPQUFPLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUMxQixJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7Z0JBQUUsTUFBTTtZQUVoQyxRQUFRLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRTtnQkFDaEMsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztvQkFDdEMsT0FBTyxDQUFDLFdBQVcsQ0FDakIsU0FBUyxDQUFDLEtBQUssRUFDZixhQUFhLENBQUMsMkJBQTJCLENBQzFDLENBQUM7b0JBQ0YsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLE9BQU8sR0FBRyxJQUFJLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUN0RCxPQUFPLENBQUMsV0FBVyxDQUNqQixTQUFTLENBQUMsT0FBTyxFQUNqQixtQkFBbUIsQ0FBQyxPQUFPLENBQUMsMkJBQTJCLENBQ3hELENBQUM7b0JBQ0YsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLElBQUksR0FBRyxJQUFJLG1CQUFtQixDQUFDLElBQUksRUFBRSxDQUFDO29CQUNoRCxPQUFPLENBQUMsV0FBVyxDQUNqQixTQUFTLENBQUMsSUFBSSxFQUNkLG1CQUFtQixDQUFDLElBQUksQ0FBQywyQkFBMkIsQ0FDckQsQ0FBQztvQkFDRixNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsUUFBUSxHQUFHLElBQUksbUJBQW1CLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQ3hELE9BQU8sQ0FBQyxXQUFXLENBQ2pCLFNBQVMsQ0FBQyxRQUFRLEVBQ2xCLG1CQUFtQixDQUFDLFFBQVEsQ0FBQywyQkFBMkIsQ0FDekQsQ0FBQztvQkFDRixNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsdUJBQXVCLEdBQUcsSUFBSSx1QkFBdUIsRUFBRSxDQUFDO29CQUNsRSxPQUFPLENBQUMsV0FBVyxDQUNqQixTQUFTLENBQUMsdUJBQXVCLEVBQ2pDLHVCQUF1QixDQUFDLDJCQUEyQixDQUNwRCxDQUFDO29CQUNGLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyx5QkFBeUIsR0FBRyxJQUFJLG1CQUFtQixDQUFDLFlBQVksRUFBRSxDQUFDO29CQUM3RSxPQUFPLENBQUMsV0FBVyxDQUNqQixTQUFTLENBQUMseUJBQXlCLEVBQ25DLG1CQUFtQixDQUFDLFlBQVksQ0FBQywyQkFBMkIsQ0FDN0QsQ0FBQztvQkFDRixNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7b0JBQzVCLE9BQU8sQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsMkJBQTJCLENBQUMsQ0FBQztvQkFDdEUsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLGtCQUFrQixHQUFHLElBQUksbUJBQW1CLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztvQkFDNUUsT0FBTyxDQUFDLFdBQVcsQ0FDakIsU0FBUyxDQUFDLGtCQUFrQixFQUM1QixtQkFBbUIsQ0FBQyxrQkFBa0IsQ0FBQywyQkFBMkIsQ0FDbkUsQ0FBQztvQkFDRixNQUFNO2dCQUNSLEtBQUssRUFBRTtvQkFDTCxTQUFTLENBQUMsU0FBUyxHQUFHLElBQUksbUJBQW1CLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQzFELE9BQU8sQ0FBQyxXQUFXLENBQ2pCLFNBQVMsQ0FBQyxTQUFTLEVBQ25CLG1CQUFtQixDQUFDLFNBQVMsQ0FBQywyQkFBMkIsQ0FDMUQsQ0FBQztvQkFDRixNQUFNO2dCQUNSLEtBQUssRUFBRTtvQkFDTCxTQUFTLENBQUMsVUFBVSxHQUFHLElBQUksbUJBQW1CLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQzVELE9BQU8sQ0FBQyxXQUFXLENBQ2pCLFNBQVMsQ0FBQyxVQUFVLEVBQ3BCLG1CQUFtQixDQUFDLFVBQVUsQ0FBQywyQkFBMkIsQ0FDM0QsQ0FBQztvQkFDRixNQUFNO2dCQUNSLEtBQUssRUFBRTtvQkFDTCxTQUFTLENBQUMsU0FBUyxHQUFHLElBQUksbUJBQW1CLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBQzVELE9BQU8sQ0FBQyxXQUFXLENBQ2pCLFNBQVMsQ0FBQyxTQUFTLEVBQ25CLG1CQUFtQixDQUFDLFdBQVcsQ0FBQywyQkFBMkIsQ0FDNUQsQ0FBQztvQkFDRixNQUFNO2dCQUNSLEtBQUssRUFBRTtvQkFDTCxTQUFTLENBQUMsZUFBZSxHQUFHLElBQUksZUFBZSxFQUFFLENBQUM7b0JBQ2xELE9BQU8sQ0FBQyxXQUFXLENBQ2pCLFNBQVMsQ0FBQyxlQUFlLEVBQ3pCLGVBQWUsQ0FBQywyQkFBMkIsQ0FDNUMsQ0FBQztvQkFDRixNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDL0MsTUFBTTtnQkFDUjtvQkFDRSxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdkI7U0FDRjtRQUVELFlBQVksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsdUJBQXVCLENBQzVCLFNBQXVCLEVBQ3ZCLE9BQXFCO1FBRXJCLElBQUksU0FBUyxDQUFDLEtBQUssRUFBRTtZQUNuQixPQUFPLENBQUMsWUFBWSxDQUNsQixDQUFDLEVBQ0QsU0FBUyxDQUFDLEtBQVksRUFDdEIsYUFBYSxDQUFDLHVCQUF1QixDQUN0QyxDQUFDO1NBQ0g7UUFDRCxJQUFJLFNBQVMsQ0FBQyxPQUFPLEVBQUU7WUFDckIsT0FBTyxDQUFDLFlBQVksQ0FDbEIsQ0FBQyxFQUNELFNBQVMsQ0FBQyxPQUFjLEVBQ3hCLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsQ0FDcEQsQ0FBQztTQUNIO1FBQ0QsSUFBSSxTQUFTLENBQUMsSUFBSSxFQUFFO1lBQ2xCLE9BQU8sQ0FBQyxZQUFZLENBQ2xCLENBQUMsRUFDRCxTQUFTLENBQUMsSUFBVyxFQUNyQixtQkFBbUIsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQ2pELENBQUM7U0FDSDtRQUNELElBQUksU0FBUyxDQUFDLFFBQVEsRUFBRTtZQUN0QixPQUFPLENBQUMsWUFBWSxDQUNsQixDQUFDLEVBQ0QsU0FBUyxDQUFDLFFBQWUsRUFDekIsbUJBQW1CLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUNyRCxDQUFDO1NBQ0g7UUFDRCxJQUFJLFNBQVMsQ0FBQyx1QkFBdUIsRUFBRTtZQUNyQyxPQUFPLENBQUMsWUFBWSxDQUNsQixDQUFDLEVBQ0QsU0FBUyxDQUFDLHVCQUE4QixFQUN4Qyx1QkFBdUIsQ0FBQyx1QkFBdUIsQ0FDaEQsQ0FBQztTQUNIO1FBQ0QsSUFBSSxTQUFTLENBQUMseUJBQXlCLEVBQUU7WUFDdkMsT0FBTyxDQUFDLFlBQVksQ0FDbEIsQ0FBQyxFQUNELFNBQVMsQ0FBQyx5QkFBZ0MsRUFDMUMsbUJBQW1CLENBQUMsWUFBWSxDQUFDLHVCQUF1QixDQUN6RCxDQUFDO1NBQ0g7UUFDRCxJQUFJLFNBQVMsQ0FBQyxJQUFJLEVBQUU7WUFDbEIsT0FBTyxDQUFDLFlBQVksQ0FDbEIsQ0FBQyxFQUNELFNBQVMsQ0FBQyxJQUFXLEVBQ3JCLElBQUksQ0FBQyx1QkFBdUIsQ0FDN0IsQ0FBQztTQUNIO1FBQ0QsSUFBSSxTQUFTLENBQUMsa0JBQWtCLEVBQUU7WUFDaEMsT0FBTyxDQUFDLFlBQVksQ0FDbEIsQ0FBQyxFQUNELFNBQVMsQ0FBQyxrQkFBeUIsRUFDbkMsbUJBQW1CLENBQUMsa0JBQWtCLENBQUMsdUJBQXVCLENBQy9ELENBQUM7U0FDSDtRQUNELElBQUksU0FBUyxDQUFDLFNBQVMsRUFBRTtZQUN2QixPQUFPLENBQUMsWUFBWSxDQUNsQixFQUFFLEVBQ0YsU0FBUyxDQUFDLFNBQWdCLEVBQzFCLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FDdEQsQ0FBQztTQUNIO1FBQ0QsSUFBSSxTQUFTLENBQUMsVUFBVSxFQUFFO1lBQ3hCLE9BQU8sQ0FBQyxZQUFZLENBQ2xCLEVBQUUsRUFDRixTQUFTLENBQUMsVUFBaUIsRUFDM0IsbUJBQW1CLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUN2RCxDQUFDO1NBQ0g7UUFDRCxJQUFJLFNBQVMsQ0FBQyxTQUFTLEVBQUU7WUFDdkIsT0FBTyxDQUFDLFlBQVksQ0FDbEIsRUFBRSxFQUNGLFNBQVMsQ0FBQyxTQUFnQixFQUMxQixtQkFBbUIsQ0FBQyxXQUFXLENBQUMsdUJBQXVCLENBQ3hELENBQUM7U0FDSDtRQUNELElBQUksU0FBUyxDQUFDLGVBQWUsRUFBRTtZQUM3QixPQUFPLENBQUMsWUFBWSxDQUNsQixFQUFFLEVBQ0YsU0FBUyxDQUFDLGVBQXNCLEVBQ2hDLGVBQWUsQ0FBQyx1QkFBdUIsQ0FDeEMsQ0FBQztTQUNIO1FBQ0QsSUFBSSxTQUFTLENBQUMsYUFBYSxFQUFFO1lBQzNCLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUNqRDtJQUNILENBQUM7SUEyREQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFDRCxJQUFJLEtBQUssQ0FBQyxLQUFnQztRQUN4QyxJQUFJLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxLQUFLLElBQUksRUFBRTtZQUN6QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUM7WUFDalAsSUFBSSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztTQUMxQztRQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFDRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUNELElBQUksT0FBTyxDQUFDLEtBQThDO1FBQ3hELElBQUksS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQ3pDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLENBQUMsMEJBQTBCLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFNBQVMsQ0FBQztZQUMvTyxJQUFJLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO1NBQzVDO1FBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQUNELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBQ0QsSUFBSSxJQUFJLENBQUMsS0FBMkM7UUFDbEQsSUFBSSxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUU7WUFDekMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixHQUFHLElBQUksQ0FBQywwQkFBMEIsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDO1lBQ2xQLElBQUksQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7U0FDekM7UUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBQ0QsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFDRCxJQUFJLFFBQVEsQ0FBQyxLQUErQztRQUMxRCxJQUFJLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxLQUFLLElBQUksRUFBRTtZQUN6QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUM7WUFDOU8sSUFBSSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztTQUM3QztRQUNELElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7SUFDRCxJQUFJLHVCQUF1QjtRQUN6QixPQUFPLElBQUksQ0FBQyx3QkFBd0IsQ0FBQztJQUN2QyxDQUFDO0lBQ0QsSUFBSSx1QkFBdUIsQ0FBQyxLQUEwQztRQUNwRSxJQUFJLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxLQUFLLElBQUksRUFBRTtZQUN6QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQywwQkFBMEIsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDO1lBQy9OLElBQUksQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQztTQUM1RDtRQUNELElBQUksQ0FBQyx3QkFBd0IsR0FBRyxLQUFLLENBQUM7SUFDeEMsQ0FBQztJQUNELElBQUkseUJBQXlCO1FBRzNCLE9BQU8sSUFBSSxDQUFDLDBCQUEwQixDQUFDO0lBQ3pDLENBQUM7SUFDRCxJQUFJLHlCQUF5QixDQUMzQixLQUFtRDtRQUVuRCxJQUFJLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxLQUFLLElBQUksRUFBRTtZQUN6QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDO1lBQzdOLElBQUksQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQyx5QkFBeUIsQ0FBQztTQUM5RDtRQUNELElBQUksQ0FBQywwQkFBMEIsR0FBRyxLQUFLLENBQUM7SUFDMUMsQ0FBQztJQUNELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBQ0QsSUFBSSxJQUFJLENBQUMsS0FBdUI7UUFDOUIsSUFBSSxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUU7WUFDekMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDO1lBQ2xQLElBQUksQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7U0FDekM7UUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBQ0QsSUFBSSxrQkFBa0I7UUFDcEIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUM7SUFDbEMsQ0FBQztJQUNELElBQUksa0JBQWtCLENBQ3BCLEtBQXlEO1FBRXpELElBQUksS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQ3pDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixHQUFHLElBQUksQ0FBQywwQkFBMEIsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUM7WUFDcE8sSUFBSSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDO1NBQ3ZEO1FBQ0QsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQztJQUNuQyxDQUFDO0lBQ0QsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFDRCxJQUFJLFNBQVMsQ0FBQyxLQUFnRDtRQUM1RCxJQUFJLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxLQUFLLElBQUksRUFBRTtZQUN6QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLENBQUMsMEJBQTBCLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUM7WUFDN08sSUFBSSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQztTQUM5QztRQUNELElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFDRCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztJQUNELElBQUksVUFBVSxDQUFDLEtBQWlEO1FBQzlELElBQUksS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQ3pDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixHQUFHLElBQUksQ0FBQywwQkFBMEIsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFNBQVMsQ0FBQztZQUM1TyxJQUFJLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDO1NBQy9DO1FBQ0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQUNELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBQ0QsSUFBSSxTQUFTLENBQUMsS0FBa0Q7UUFDOUQsSUFBSSxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUU7WUFDekMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDO1lBQzdPLElBQUksQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUM7U0FDOUM7UUFDRCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBQ0QsSUFBSSxlQUFlO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQy9CLENBQUM7SUFDRCxJQUFJLGVBQWUsQ0FBQyxLQUFrQztRQUNwRCxJQUFJLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxLQUFLLElBQUksRUFBRTtZQUN6QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLENBQUMsMEJBQTBCLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1lBQ3ZPLElBQUksQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUM7U0FDcEQ7UUFDRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLENBQUM7SUFDRCxJQUFJLGFBQWE7UUFDZixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDN0IsQ0FBQztJQUNELElBQUksYUFBYSxDQUFDLEtBQXlCO1FBQ3pDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO0lBQzlCLENBQUM7SUFDRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVEOzs7T0FHRztJQUNILGVBQWU7UUFDYixNQUFNLE1BQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xDLFlBQVksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDbkQsT0FBTyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsUUFBUTtRQUNOLE9BQU87WUFDTCxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUztZQUNyRCxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUztZQUMzRCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUztZQUNsRCxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUztZQUM5RCx1QkFBdUIsRUFBRSxJQUFJLENBQUMsdUJBQXVCO2dCQUNuRCxDQUFDLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFFBQVEsRUFBRTtnQkFDekMsQ0FBQyxDQUFDLFNBQVM7WUFDYix5QkFBeUIsRUFBRSxJQUFJLENBQUMseUJBQXlCO2dCQUN2RCxDQUFDLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFFBQVEsRUFBRTtnQkFDM0MsQ0FBQyxDQUFDLFNBQVM7WUFDYixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUztZQUNsRCxrQkFBa0IsRUFBRSxJQUFJLENBQUMsa0JBQWtCO2dCQUN6QyxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsRUFBRTtnQkFDcEMsQ0FBQyxDQUFDLFNBQVM7WUFDYixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUztZQUNqRSxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUztZQUNwRSxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUztZQUNqRSxlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7Z0JBQ25DLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsRUFBRTtnQkFDakMsQ0FBQyxDQUFDLFNBQVM7WUFDYixhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7U0FDbEMsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGNBQWM7SUFDWixhQUFhO0lBQ2IsT0FBK0I7UUFFL0IsT0FBTztZQUNMLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUM3RCxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7WUFDbkUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO1lBQzFELFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUN0RSx1QkFBdUIsRUFBRSxJQUFJLENBQUMsdUJBQXVCO2dCQUNuRCxDQUFDLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUM7Z0JBQ3RELENBQUMsQ0FBQyxJQUFJO1lBQ1IseUJBQXlCLEVBQUUsSUFBSSxDQUFDLHlCQUF5QjtnQkFDdkQsQ0FBQyxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDO2dCQUN4RCxDQUFDLENBQUMsSUFBSTtZQUNSLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUMxRCxrQkFBa0IsRUFBRSxJQUFJLENBQUMsa0JBQWtCO2dCQUN6QyxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUM7Z0JBQ2pELENBQUMsQ0FBQyxJQUFJO1lBQ1IsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO1lBQ3pFLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtnQkFDekIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQztnQkFDekMsQ0FBQyxDQUFDLElBQUk7WUFDUixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7WUFDekUsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO2dCQUNuQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDO2dCQUM5QyxDQUFDLENBQUMsSUFBSTtZQUNSLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtTQUNsQyxDQUFDO0lBQ0osQ0FBQzs7QUFoZk0sZUFBRSxHQUFHLGdDQUFnQyxDQUFDO0FBa2YvQyxXQUFjLFlBQVk7SUFzQ3hCLElBQVksUUFjWDtJQWRELFdBQVksUUFBUTtRQUNsQix1Q0FBUSxDQUFBO1FBQ1IseUNBQVMsQ0FBQTtRQUNULDZDQUFXLENBQUE7UUFDWCx1Q0FBUSxDQUFBO1FBQ1IsK0NBQVksQ0FBQTtRQUNaLDZFQUEyQixDQUFBO1FBQzNCLGlGQUE2QixDQUFBO1FBQzdCLHVDQUFRLENBQUE7UUFDUixtRUFBc0IsQ0FBQTtRQUN0QixpREFBYSxDQUFBO1FBQ2Isb0RBQWUsQ0FBQTtRQUNmLGtEQUFjLENBQUE7UUFDZCw4REFBb0IsQ0FBQTtJQUN0QixDQUFDLEVBZFcsUUFBUSxHQUFSLHFCQUFRLEtBQVIscUJBQVEsUUFjbkI7QUFDSCxDQUFDLEVBckRhLFlBQVksS0FBWixZQUFZLFFBcUR6QjtBQUVEOztHQUVHO0FBQ0gsTUFBTSxPQUFPLFlBQVk7SUFxS3ZCOzs7T0FHRztJQUNILFlBQVksTUFBZ0Q7UUFOcEQsVUFBSyxHQUEwQixZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztRQU9oRSxNQUFNLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTztZQUMzQixDQUFDLENBQUMsSUFBSSxtQkFBbUIsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUN6RCxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ2QsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSTtZQUNyQixDQUFDLENBQUMsSUFBSSxtQkFBbUIsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNuRCxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ2QsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUTtZQUM3QixDQUFDLENBQUMsSUFBSSxtQkFBbUIsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO1lBQzNELENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDZCxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQzVELElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVM7WUFDL0IsQ0FBQyxDQUFDLElBQUksbUJBQW1CLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztZQUM3RCxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ2QsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsVUFBVTtZQUNqQyxDQUFDLENBQUMsSUFBSSxtQkFBbUIsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO1lBQy9ELENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDZCxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTO1lBQy9CLENBQUMsQ0FBQyxJQUFJLG1CQUFtQixDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7WUFDL0QsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNkLFlBQVksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQTdMRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsaUJBQWlCLENBQUMsS0FBaUI7UUFDeEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNwQyxZQUFZLENBQUMsMkJBQTJCLENBQUMsUUFBUSxFQUFFLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDNUUsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBdUI7UUFDekMsU0FBUyxDQUFDLEVBQUUsR0FBRyxTQUFTLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQywyQkFBMkIsQ0FDaEMsU0FBdUIsRUFDdkIsT0FBcUI7UUFFckIsT0FBTyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDMUIsSUFBSSxPQUFPLENBQUMsVUFBVSxFQUFFO2dCQUFFLE1BQU07WUFFaEMsUUFBUSxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUU7Z0JBQ2hDLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDcEMsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLE9BQU8sR0FBRyxJQUFJLG1CQUFtQixDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUM5RCxPQUFPLENBQUMsV0FBVyxDQUNqQixTQUFTLENBQUMsT0FBTyxFQUNqQixtQkFBbUIsQ0FBQyxlQUFlLENBQUMsMkJBQTJCLENBQ2hFLENBQUM7b0JBQ0YsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLElBQUksR0FBRyxJQUFJLG1CQUFtQixDQUFDLFlBQVksRUFBRSxDQUFDO29CQUN4RCxPQUFPLENBQUMsV0FBVyxDQUNqQixTQUFTLENBQUMsSUFBSSxFQUNkLG1CQUFtQixDQUFDLFlBQVksQ0FBQywyQkFBMkIsQ0FDN0QsQ0FBQztvQkFDRixNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsUUFBUSxHQUFHLElBQUksbUJBQW1CLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztvQkFDaEUsT0FBTyxDQUFDLFdBQVcsQ0FDakIsU0FBUyxDQUFDLFFBQVEsRUFDbEIsbUJBQW1CLENBQUMsZ0JBQWdCLENBQUMsMkJBQTJCLENBQ2pFLENBQUM7b0JBQ0YsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO29CQUM1QixPQUFPLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLDJCQUEyQixDQUFDLENBQUM7b0JBQ3RFLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxtQkFBbUIsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO29CQUNsRSxPQUFPLENBQUMsV0FBVyxDQUNqQixTQUFTLENBQUMsU0FBUyxFQUNuQixtQkFBbUIsQ0FBQyxpQkFBaUIsQ0FBQywyQkFBMkIsQ0FDbEUsQ0FBQztvQkFDRixNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsVUFBVSxHQUFHLElBQUksbUJBQW1CLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztvQkFDcEUsT0FBTyxDQUFDLFdBQVcsQ0FDakIsU0FBUyxDQUFDLFVBQVUsRUFDcEIsbUJBQW1CLENBQUMsa0JBQWtCLENBQUMsMkJBQTJCLENBQ25FLENBQUM7b0JBQ0YsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLFNBQVMsR0FBRyxJQUFJLG1CQUFtQixDQUFDLG1CQUFtQixFQUFFLENBQUM7b0JBQ3BFLE9BQU8sQ0FBQyxXQUFXLENBQ2pCLFNBQVMsQ0FBQyxTQUFTLEVBQ25CLG1CQUFtQixDQUFDLG1CQUFtQixDQUFDLDJCQUEyQixDQUNwRSxDQUFDO29CQUNGLE1BQU07Z0JBQ1I7b0JBQ0UsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3ZCO1NBQ0Y7UUFFRCxZQUFZLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLHVCQUF1QixDQUM1QixTQUF1QixFQUN2QixPQUFxQjtRQUVyQixJQUFJLFNBQVMsQ0FBQyxFQUFFLEVBQUU7WUFDaEIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3RDO1FBQ0QsSUFBSSxTQUFTLENBQUMsT0FBTyxFQUFFO1lBQ3JCLE9BQU8sQ0FBQyxZQUFZLENBQ2xCLENBQUMsRUFDRCxTQUFTLENBQUMsT0FBYyxFQUN4QixtQkFBbUIsQ0FBQyxlQUFlLENBQUMsdUJBQXVCLENBQzVELENBQUM7U0FDSDtRQUNELElBQUksU0FBUyxDQUFDLElBQUksRUFBRTtZQUNsQixPQUFPLENBQUMsWUFBWSxDQUNsQixDQUFDLEVBQ0QsU0FBUyxDQUFDLElBQVcsRUFDckIsbUJBQW1CLENBQUMsWUFBWSxDQUFDLHVCQUF1QixDQUN6RCxDQUFDO1NBQ0g7UUFDRCxJQUFJLFNBQVMsQ0FBQyxRQUFRLEVBQUU7WUFDdEIsT0FBTyxDQUFDLFlBQVksQ0FDbEIsQ0FBQyxFQUNELFNBQVMsQ0FBQyxRQUFlLEVBQ3pCLG1CQUFtQixDQUFDLGdCQUFnQixDQUFDLHVCQUF1QixDQUM3RCxDQUFDO1NBQ0g7UUFDRCxJQUFJLFNBQVMsQ0FBQyxJQUFJLEVBQUU7WUFDbEIsT0FBTyxDQUFDLFlBQVksQ0FDbEIsQ0FBQyxFQUNELFNBQVMsQ0FBQyxJQUFXLEVBQ3JCLElBQUksQ0FBQyx1QkFBdUIsQ0FDN0IsQ0FBQztTQUNIO1FBQ0QsSUFBSSxTQUFTLENBQUMsU0FBUyxFQUFFO1lBQ3ZCLE9BQU8sQ0FBQyxZQUFZLENBQ2xCLENBQUMsRUFDRCxTQUFTLENBQUMsU0FBZ0IsRUFDMUIsbUJBQW1CLENBQUMsaUJBQWlCLENBQUMsdUJBQXVCLENBQzlELENBQUM7U0FDSDtRQUNELElBQUksU0FBUyxDQUFDLFVBQVUsRUFBRTtZQUN4QixPQUFPLENBQUMsWUFBWSxDQUNsQixDQUFDLEVBQ0QsU0FBUyxDQUFDLFVBQWlCLEVBQzNCLG1CQUFtQixDQUFDLGtCQUFrQixDQUFDLHVCQUF1QixDQUMvRCxDQUFDO1NBQ0g7UUFDRCxJQUFJLFNBQVMsQ0FBQyxTQUFTLEVBQUU7WUFDdkIsT0FBTyxDQUFDLFlBQVksQ0FDbEIsQ0FBQyxFQUNELFNBQVMsQ0FBQyxTQUFnQixFQUMxQixtQkFBbUIsQ0FBQyxtQkFBbUIsQ0FBQyx1QkFBdUIsQ0FDaEUsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQXlDRCxJQUFJLEVBQUU7UUFDSixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDbEIsQ0FBQztJQUNELElBQUksRUFBRSxDQUFDLEtBQXlCO1FBQzlCLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO0lBQ25CLENBQUM7SUFDRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUNELElBQUksT0FBTyxDQUFDLEtBQXNEO1FBQ2hFLElBQUksS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQ3pDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztZQUM1RyxJQUFJLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO1NBQzVDO1FBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQUNELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBQ0QsSUFBSSxJQUFJLENBQUMsS0FBbUQ7UUFDMUQsSUFBSSxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUU7WUFDekMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1lBQy9HLElBQUksQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7U0FDekM7UUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBQ0QsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFDRCxJQUFJLFFBQVEsQ0FBQyxLQUF1RDtRQUNsRSxJQUFJLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxLQUFLLElBQUksRUFBRTtZQUN6QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7WUFDM0csSUFBSSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztTQUM3QztRQUNELElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7SUFDRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUNELElBQUksSUFBSSxDQUFDLEtBQXVCO1FBQzlCLElBQUksS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQ3pDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztZQUMvRyxJQUFJLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1NBQ3pDO1FBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUNELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBQ0QsSUFBSSxTQUFTLENBQUMsS0FBd0Q7UUFDcEUsSUFBSSxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUU7WUFDekMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1lBQzFHLElBQUksQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUM7U0FDOUM7UUFDRCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBQ0QsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7SUFDRCxJQUFJLFVBQVUsQ0FBQyxLQUF5RDtRQUN0RSxJQUFJLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxLQUFLLElBQUksRUFBRTtZQUN6QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7WUFDekcsSUFBSSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztTQUMvQztRQUNELElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQzNCLENBQUM7SUFDRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztJQUNELElBQUksU0FBUyxDQUFDLEtBQTBEO1FBQ3RFLElBQUksS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQ3pDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztZQUMxRyxJQUFJLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDO1NBQzlDO1FBQ0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUNELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZUFBZTtRQUNiLE1BQU0sTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsWUFBWSxDQUFDLHVCQUF1QixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNuRCxPQUFPLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxRQUFRO1FBQ04sT0FBTztZQUNMLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNYLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTO1lBQzNELElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTO1lBQ2xELFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTO1lBQzlELElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTO1lBQ2xELFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTO1lBQ2pFLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTO1lBQ3BFLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTO1NBQ2xFLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxjQUFjO0lBQ1osYUFBYTtJQUNiLE9BQStCO1FBRS9CLE9BQU87WUFDTCxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUU7WUFDWCxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7WUFDbkUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO1lBQzFELFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUN0RSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7WUFDMUQsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO1lBQ3pFLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtnQkFDekIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQztnQkFDekMsQ0FBQyxDQUFDLElBQUk7WUFDUixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7U0FDMUUsQ0FBQztJQUNKLENBQUM7O0FBdFVNLGVBQUUsR0FBRyxnQ0FBZ0MsQ0FBQztBQXdVL0MsV0FBYyxZQUFZO0lBNEJ4QixJQUFZLFFBU1g7SUFURCxXQUFZLFFBQVE7UUFDbEIsdUNBQVEsQ0FBQTtRQUNSLDZDQUFXLENBQUE7UUFDWCx1Q0FBUSxDQUFBO1FBQ1IsK0NBQVksQ0FBQTtRQUNaLHVDQUFRLENBQUE7UUFDUixpREFBYSxDQUFBO1FBQ2IsbURBQWMsQ0FBQTtRQUNkLGlEQUFhLENBQUE7SUFDZixDQUFDLEVBVFcsUUFBUSxHQUFSLHFCQUFRLEtBQVIscUJBQVEsUUFTbkI7QUFDSCxDQUFDLEVBdENhLFlBQVksS0FBWixZQUFZLFFBc0N6QiIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuLy8gQHRzLW5vY2hlY2tcbi8vXG4vLyBUSElTIElTIEEgR0VORVJBVEVEIEZJTEVcbi8vIERPIE5PVCBNT0RJRlkgSVQhIFlPVVIgQ0hBTkdFUyBXSUxMIEJFIExPU1RcbmltcG9ydCB7XG4gIEdycGNNZXNzYWdlLFxuICBSZWN1cnNpdmVQYXJ0aWFsLFxuICBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbn0gZnJvbSAnQG5neC1ncnBjL2NvbW1vbic7XG5pbXBvcnQgeyBCaW5hcnlSZWFkZXIsIEJpbmFyeVdyaXRlciwgQnl0ZVNvdXJjZSB9IGZyb20gJ2dvb2dsZS1wcm90b2J1Zic7XG5pbXBvcnQgKiBhcyBwcm90b1B1YlYxTW9kZWxzMDAwIGZyb20gJy4uLy4uL3B1Yi92MS9tb2RlbHMvdWlkLnBiJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMDEgZnJvbSAnLi4vLi4vcHViL3YxL21vZGVscy9maWxlLnBiJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMDIgZnJvbSAnLi4vLi4vcHViL3YxL21vZGVscy9zdGlja2VyLnBiJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMDMgZnJvbSAnLi4vLi4vcHViL3YxL21vZGVscy9sb2NhdGlvbi5wYic7XG5pbXBvcnQgKiBhcyBwcm90b1B1YlYxTW9kZWxzMDA0IGZyb20gJy4uLy4uL3B1Yi92MS9tb2RlbHMvcGF5bWVudC5wYic7XG5pbXBvcnQgKiBhcyBwcm90b1B1YlYxTW9kZWxzMDA1IGZyb20gJy4uLy4uL3B1Yi92MS9tb2RlbHMvcGVyc2lzdGVudC1ldmVudC5wYic7XG5pbXBvcnQgKiBhcyBwcm90b1B1YlYxTW9kZWxzMDA2IGZyb20gJy4uLy4uL3B1Yi92MS9tb2RlbHMvc2hhcmUtcHJpdmF0ZS1kYXRhLnBiJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMDcgZnJvbSAnLi4vLi4vcHViL3YxL21vZGVscy9mb3JtLnBiJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMDggZnJvbSAnLi4vLi4vcHViL3YxL21vZGVscy9wb2xsLnBiJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMDkgZnJvbSAnLi4vLi4vcHViL3YxL21vZGVscy9tdWMucGInO1xuaW1wb3J0ICogYXMgcHJvdG9QdWJWMU1vZGVsczAxMCBmcm9tICcuLi8uLi9wdWIvdjEvbW9kZWxzL2NhbGwucGInO1xuaW1wb3J0ICogYXMgcHJvdG9QdWJWMU1vZGVsczAxMSBmcm9tICcuLi8uLi9wdWIvdjEvbW9kZWxzL21hcmt1cC5wYic7XG5pbXBvcnQgKiBhcyBwcm90b1B1YlYxTW9kZWxzMDEyIGZyb20gJy4uLy4uL3B1Yi92MS9tb2RlbHMvY2F0ZWdvcmllcy5wYic7XG5pbXBvcnQgKiBhcyBwcm90b1B1YlYxTW9kZWxzMDEzIGZyb20gJy4uLy4uL3B1Yi92MS9tb2RlbHMvc2V0dGluZ3MucGInO1xuaW1wb3J0ICogYXMgcHJvdG9QdWJWMU1vZGVsczAxNCBmcm9tICcuLi8uLi9wdWIvdjEvbW9kZWxzL3NlZW4ucGInO1xuaW1wb3J0ICogYXMgcHJvdG9QdWJWMU1vZGVsczAxNSBmcm9tICcuLi8uLi9wdWIvdjEvbW9kZWxzL2FjdGl2aXR5LnBiJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMTYgZnJvbSAnLi4vLi4vcHViL3YxL21vZGVscy9tZXNzYWdlLnBiJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMTcgZnJvbSAnLi4vLi4vcHViL3YxL21vZGVscy9yb29tLW1ldGFkYXRhLnBiJztcbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3IgcHJvdG8ucHViLnYxLmNvcmUuRXN0YWJsaXNoU2VydmVyU2lkZVN0cmVhbVJlcVxuICovXG5leHBvcnQgY2xhc3MgRXN0YWJsaXNoU2VydmVyU2lkZVN0cmVhbVJlcSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ3Byb3RvLnB1Yi52MS5jb3JlLkVzdGFibGlzaFNlcnZlclNpZGVTdHJlYW1SZXEnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBFc3RhYmxpc2hTZXJ2ZXJTaWRlU3RyZWFtUmVxKCk7XG4gICAgRXN0YWJsaXNoU2VydmVyU2lkZVN0cmVhbVJlcS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IEVzdGFibGlzaFNlcnZlclNpZGVTdHJlYW1SZXEpIHt9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogRXN0YWJsaXNoU2VydmVyU2lkZVN0cmVhbVJlcSxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBFc3RhYmxpc2hTZXJ2ZXJTaWRlU3RyZWFtUmVxLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogRXN0YWJsaXNoU2VydmVyU2lkZVN0cmVhbVJlcSxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgRXN0YWJsaXNoU2VydmVyU2lkZVN0cmVhbVJlcSB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxFc3RhYmxpc2hTZXJ2ZXJTaWRlU3RyZWFtUmVxLkFzT2JqZWN0PlxuICApIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgRXN0YWJsaXNoU2VydmVyU2lkZVN0cmVhbVJlcS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgRXN0YWJsaXNoU2VydmVyU2lkZVN0cmVhbVJlcS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBFc3RhYmxpc2hTZXJ2ZXJTaWRlU3RyZWFtUmVxLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge307XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IEVzdGFibGlzaFNlcnZlclNpZGVTdHJlYW1SZXEuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7fTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBFc3RhYmxpc2hTZXJ2ZXJTaWRlU3RyZWFtUmVxIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBFc3RhYmxpc2hTZXJ2ZXJTaWRlU3RyZWFtUmVxXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHt9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIEVzdGFibGlzaFNlcnZlclNpZGVTdHJlYW1SZXFcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge31cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBwcm90by5wdWIudjEuY29yZS5TZW5kQ2xpZW50UGFja2V0UmVzXG4gKi9cbmV4cG9ydCBjbGFzcyBTZW5kQ2xpZW50UGFja2V0UmVzIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAncHJvdG8ucHViLnYxLmNvcmUuU2VuZENsaWVudFBhY2tldFJlcyc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFNlbmRDbGllbnRQYWNrZXRSZXMoKTtcbiAgICBTZW5kQ2xpZW50UGFja2V0UmVzLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogU2VuZENsaWVudFBhY2tldFJlcykge31cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBTZW5kQ2xpZW50UGFja2V0UmVzLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFNlbmRDbGllbnRQYWNrZXRSZXMucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBTZW5kQ2xpZW50UGFja2V0UmVzLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHt9XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBTZW5kQ2xpZW50UGFja2V0UmVzIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFNlbmRDbGllbnRQYWNrZXRSZXMuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIFNlbmRDbGllbnRQYWNrZXRSZXMucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFNlbmRDbGllbnRQYWNrZXRSZXMuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogU2VuZENsaWVudFBhY2tldFJlcy5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBTZW5kQ2xpZW50UGFja2V0UmVzLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge307XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgU2VuZENsaWVudFBhY2tldFJlcyB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgU2VuZENsaWVudFBhY2tldFJlc1xuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7fVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBTZW5kQ2xpZW50UGFja2V0UmVzXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHt9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3IgcHJvdG8ucHViLnYxLmNvcmUuUGluZ1xuICovXG5leHBvcnQgY2xhc3MgUGluZyBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ3Byb3RvLnB1Yi52MS5jb3JlLlBpbmcnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBQaW5nKCk7XG4gICAgUGluZy5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IFBpbmcpIHtcbiAgICBfaW5zdGFuY2UubGFzdFBvbmdUaW1lID0gX2luc3RhbmNlLmxhc3RQb25nVGltZSB8fCAnMCc7XG4gICAgX2luc3RhbmNlLmNsaWVudElzQWN0aXZlID0gX2luc3RhbmNlLmNsaWVudElzQWN0aXZlIHx8IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKF9pbnN0YW5jZTogUGluZywgX3JlYWRlcjogQmluYXJ5UmVhZGVyKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UubGFzdFBvbmdUaW1lID0gX3JlYWRlci5yZWFkSW50NjRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5jbGllbnRJc0FjdGl2ZSA9IF9yZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFBpbmcucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoX2luc3RhbmNlOiBQaW5nLCBfd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoX2luc3RhbmNlLmxhc3RQb25nVGltZSkge1xuICAgICAgX3dyaXRlci53cml0ZUludDY0U3RyaW5nKDEsIF9pbnN0YW5jZS5sYXN0UG9uZ1RpbWUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmNsaWVudElzQWN0aXZlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlQm9vbCgyLCBfaW5zdGFuY2UuY2xpZW50SXNBY3RpdmUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2xhc3RQb25nVGltZT86IHN0cmluZztcbiAgcHJpdmF0ZSBfY2xpZW50SXNBY3RpdmU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgUGluZyB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxQaW5nLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmxhc3RQb25nVGltZSA9IF92YWx1ZS5sYXN0UG9uZ1RpbWU7XG4gICAgdGhpcy5jbGllbnRJc0FjdGl2ZSA9IF92YWx1ZS5jbGllbnRJc0FjdGl2ZTtcbiAgICBQaW5nLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgbGFzdFBvbmdUaW1lKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2xhc3RQb25nVGltZTtcbiAgfVxuICBzZXQgbGFzdFBvbmdUaW1lKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9sYXN0UG9uZ1RpbWUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgY2xpZW50SXNBY3RpdmUoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2NsaWVudElzQWN0aXZlO1xuICB9XG4gIHNldCBjbGllbnRJc0FjdGl2ZSh2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2NsaWVudElzQWN0aXZlID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgUGluZy5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBQaW5nLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgbGFzdFBvbmdUaW1lOiB0aGlzLmxhc3RQb25nVGltZSxcbiAgICAgIGNsaWVudElzQWN0aXZlOiB0aGlzLmNsaWVudElzQWN0aXZlXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogUGluZy5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxhc3RQb25nVGltZTogdGhpcy5sYXN0UG9uZ1RpbWUsXG4gICAgICBjbGllbnRJc0FjdGl2ZTogdGhpcy5jbGllbnRJc0FjdGl2ZVxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgUGluZyB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgUGluZ1xuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgbGFzdFBvbmdUaW1lPzogc3RyaW5nO1xuICAgIGNsaWVudElzQWN0aXZlPzogYm9vbGVhbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBQaW5nXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBsYXN0UG9uZ1RpbWU/OiBzdHJpbmc7XG4gICAgY2xpZW50SXNBY3RpdmU/OiBib29sZWFuO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3IgcHJvdG8ucHViLnYxLmNvcmUuUG9uZ1xuICovXG5leHBvcnQgY2xhc3MgUG9uZyBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ3Byb3RvLnB1Yi52MS5jb3JlLlBvbmcnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBQb25nKCk7XG4gICAgUG9uZy5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IFBvbmcpIHtcbiAgICBfaW5zdGFuY2UucGFja2V0SWQgPSBfaW5zdGFuY2UucGFja2V0SWQgfHwgJyc7XG4gICAgX2luc3RhbmNlLnNlcnZlclRpbWUgPSBfaW5zdGFuY2Uuc2VydmVyVGltZSB8fCAnMCc7XG4gICAgX2luc3RhbmNlLnN0cmVhbUlucHV0Q2FwYWJpbGl0eVN0YXR1cyA9XG4gICAgICBfaW5zdGFuY2Uuc3RyZWFtSW5wdXRDYXBhYmlsaXR5U3RhdHVzIHx8IDA7XG4gICAgX2luc3RhbmNlLmxhc3RNZXNzYWdlRGVsaXZlcnlBY2sgPVxuICAgICAgX2luc3RhbmNlLmxhc3RNZXNzYWdlRGVsaXZlcnlBY2sgfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5sYXN0Um9vbU1ldGFkYXRhVXBkYXRlVGltZSA9XG4gICAgICBfaW5zdGFuY2UubGFzdFJvb21NZXRhZGF0YVVwZGF0ZVRpbWUgfHwgJzAnO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKF9pbnN0YW5jZTogUG9uZywgX3JlYWRlcjogQmluYXJ5UmVhZGVyKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UucGFja2V0SWQgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5zZXJ2ZXJUaW1lID0gX3JlYWRlci5yZWFkSW50NjRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIF9pbnN0YW5jZS5zdHJlYW1JbnB1dENhcGFiaWxpdHlTdGF0dXMgPSBfcmVhZGVyLnJlYWRFbnVtKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBfaW5zdGFuY2UubGFzdE1lc3NhZ2VEZWxpdmVyeUFjayA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDE2Lk1lc3NhZ2VEZWxpdmVyeUFjaygpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UubGFzdE1lc3NhZ2VEZWxpdmVyeUFjayxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMTYuTWVzc2FnZURlbGl2ZXJ5QWNrLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBfaW5zdGFuY2UubGFzdFJvb21NZXRhZGF0YVVwZGF0ZVRpbWUgPSBfcmVhZGVyLnJlYWRJbnQ2NFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgUG9uZy5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihfaW5zdGFuY2U6IFBvbmcsIF93cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChfaW5zdGFuY2UucGFja2V0SWQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLnBhY2tldElkKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5zZXJ2ZXJUaW1lKSB7XG4gICAgICBfd3JpdGVyLndyaXRlSW50NjRTdHJpbmcoMiwgX2luc3RhbmNlLnNlcnZlclRpbWUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnN0cmVhbUlucHV0Q2FwYWJpbGl0eVN0YXR1cykge1xuICAgICAgX3dyaXRlci53cml0ZUVudW0oMywgX2luc3RhbmNlLnN0cmVhbUlucHV0Q2FwYWJpbGl0eVN0YXR1cyk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UubGFzdE1lc3NhZ2VEZWxpdmVyeUFjaykge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDQsXG4gICAgICAgIF9pbnN0YW5jZS5sYXN0TWVzc2FnZURlbGl2ZXJ5QWNrIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxNi5NZXNzYWdlRGVsaXZlcnlBY2suc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UubGFzdFJvb21NZXRhZGF0YVVwZGF0ZVRpbWUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQ2NFN0cmluZyg1LCBfaW5zdGFuY2UubGFzdFJvb21NZXRhZGF0YVVwZGF0ZVRpbWUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3BhY2tldElkPzogc3RyaW5nO1xuICBwcml2YXRlIF9zZXJ2ZXJUaW1lPzogc3RyaW5nO1xuICBwcml2YXRlIF9zdHJlYW1JbnB1dENhcGFiaWxpdHlTdGF0dXM/OiBQb25nLlN0cmVhbUlucHV0Q2FwYWJpbGl0eVN0YXR1cztcbiAgcHJpdmF0ZSBfbGFzdE1lc3NhZ2VEZWxpdmVyeUFjaz86IHByb3RvUHViVjFNb2RlbHMwMTYuTWVzc2FnZURlbGl2ZXJ5QWNrO1xuICBwcml2YXRlIF9sYXN0Um9vbU1ldGFkYXRhVXBkYXRlVGltZT86IHN0cmluZztcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIFBvbmcgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8UG9uZy5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5wYWNrZXRJZCA9IF92YWx1ZS5wYWNrZXRJZDtcbiAgICB0aGlzLnNlcnZlclRpbWUgPSBfdmFsdWUuc2VydmVyVGltZTtcbiAgICB0aGlzLnN0cmVhbUlucHV0Q2FwYWJpbGl0eVN0YXR1cyA9IF92YWx1ZS5zdHJlYW1JbnB1dENhcGFiaWxpdHlTdGF0dXM7XG4gICAgdGhpcy5sYXN0TWVzc2FnZURlbGl2ZXJ5QWNrID0gX3ZhbHVlLmxhc3RNZXNzYWdlRGVsaXZlcnlBY2tcbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMTYuTWVzc2FnZURlbGl2ZXJ5QWNrKFxuICAgICAgICAgIF92YWx1ZS5sYXN0TWVzc2FnZURlbGl2ZXJ5QWNrXG4gICAgICAgIClcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMubGFzdFJvb21NZXRhZGF0YVVwZGF0ZVRpbWUgPSBfdmFsdWUubGFzdFJvb21NZXRhZGF0YVVwZGF0ZVRpbWU7XG4gICAgUG9uZy5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHBhY2tldElkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3BhY2tldElkO1xuICB9XG4gIHNldCBwYWNrZXRJZCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcGFja2V0SWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc2VydmVyVGltZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zZXJ2ZXJUaW1lO1xuICB9XG4gIHNldCBzZXJ2ZXJUaW1lKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zZXJ2ZXJUaW1lID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHN0cmVhbUlucHV0Q2FwYWJpbGl0eVN0YXR1cygpOlxuICAgIHwgUG9uZy5TdHJlYW1JbnB1dENhcGFiaWxpdHlTdGF0dXNcbiAgICB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3N0cmVhbUlucHV0Q2FwYWJpbGl0eVN0YXR1cztcbiAgfVxuICBzZXQgc3RyZWFtSW5wdXRDYXBhYmlsaXR5U3RhdHVzKFxuICAgIHZhbHVlOiBQb25nLlN0cmVhbUlucHV0Q2FwYWJpbGl0eVN0YXR1cyB8IHVuZGVmaW5lZFxuICApIHtcbiAgICB0aGlzLl9zdHJlYW1JbnB1dENhcGFiaWxpdHlTdGF0dXMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbGFzdE1lc3NhZ2VEZWxpdmVyeUFjaygpOlxuICAgIHwgcHJvdG9QdWJWMU1vZGVsczAxNi5NZXNzYWdlRGVsaXZlcnlBY2tcbiAgICB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2xhc3RNZXNzYWdlRGVsaXZlcnlBY2s7XG4gIH1cbiAgc2V0IGxhc3RNZXNzYWdlRGVsaXZlcnlBY2soXG4gICAgdmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMTYuTWVzc2FnZURlbGl2ZXJ5QWNrIHwgdW5kZWZpbmVkXG4gICkge1xuICAgIHRoaXMuX2xhc3RNZXNzYWdlRGVsaXZlcnlBY2sgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbGFzdFJvb21NZXRhZGF0YVVwZGF0ZVRpbWUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbGFzdFJvb21NZXRhZGF0YVVwZGF0ZVRpbWU7XG4gIH1cbiAgc2V0IGxhc3RSb29tTWV0YWRhdGFVcGRhdGVUaW1lKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9sYXN0Um9vbU1ldGFkYXRhVXBkYXRlVGltZSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFBvbmcuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogUG9uZy5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhY2tldElkOiB0aGlzLnBhY2tldElkLFxuICAgICAgc2VydmVyVGltZTogdGhpcy5zZXJ2ZXJUaW1lLFxuICAgICAgc3RyZWFtSW5wdXRDYXBhYmlsaXR5U3RhdHVzOiB0aGlzLnN0cmVhbUlucHV0Q2FwYWJpbGl0eVN0YXR1cyxcbiAgICAgIGxhc3RNZXNzYWdlRGVsaXZlcnlBY2s6IHRoaXMubGFzdE1lc3NhZ2VEZWxpdmVyeUFja1xuICAgICAgICA/IHRoaXMubGFzdE1lc3NhZ2VEZWxpdmVyeUFjay50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgbGFzdFJvb21NZXRhZGF0YVVwZGF0ZVRpbWU6IHRoaXMubGFzdFJvb21NZXRhZGF0YVVwZGF0ZVRpbWVcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBQb25nLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFja2V0SWQ6IHRoaXMucGFja2V0SWQsXG4gICAgICBzZXJ2ZXJUaW1lOiB0aGlzLnNlcnZlclRpbWUsXG4gICAgICBzdHJlYW1JbnB1dENhcGFiaWxpdHlTdGF0dXM6XG4gICAgICAgIFBvbmcuU3RyZWFtSW5wdXRDYXBhYmlsaXR5U3RhdHVzW1xuICAgICAgICAgIHRoaXMuc3RyZWFtSW5wdXRDYXBhYmlsaXR5U3RhdHVzID09PSBudWxsIHx8XG4gICAgICAgICAgdGhpcy5zdHJlYW1JbnB1dENhcGFiaWxpdHlTdGF0dXMgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyAwXG4gICAgICAgICAgICA6IHRoaXMuc3RyZWFtSW5wdXRDYXBhYmlsaXR5U3RhdHVzXG4gICAgICAgIF0sXG4gICAgICBsYXN0TWVzc2FnZURlbGl2ZXJ5QWNrOiB0aGlzLmxhc3RNZXNzYWdlRGVsaXZlcnlBY2tcbiAgICAgICAgPyB0aGlzLmxhc3RNZXNzYWdlRGVsaXZlcnlBY2sudG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsLFxuICAgICAgbGFzdFJvb21NZXRhZGF0YVVwZGF0ZVRpbWU6IHRoaXMubGFzdFJvb21NZXRhZGF0YVVwZGF0ZVRpbWVcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIFBvbmcge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIFBvbmdcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIHBhY2tldElkPzogc3RyaW5nO1xuICAgIHNlcnZlclRpbWU/OiBzdHJpbmc7XG4gICAgc3RyZWFtSW5wdXRDYXBhYmlsaXR5U3RhdHVzPzogUG9uZy5TdHJlYW1JbnB1dENhcGFiaWxpdHlTdGF0dXM7XG4gICAgbGFzdE1lc3NhZ2VEZWxpdmVyeUFjaz86IHByb3RvUHViVjFNb2RlbHMwMTYuTWVzc2FnZURlbGl2ZXJ5QWNrLkFzT2JqZWN0O1xuICAgIGxhc3RSb29tTWV0YWRhdGFVcGRhdGVUaW1lPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIFBvbmdcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHBhY2tldElkPzogc3RyaW5nO1xuICAgIHNlcnZlclRpbWU/OiBzdHJpbmc7XG4gICAgc3RyZWFtSW5wdXRDYXBhYmlsaXR5U3RhdHVzPzogc3RyaW5nO1xuICAgIGxhc3RNZXNzYWdlRGVsaXZlcnlBY2s/OiBwcm90b1B1YlYxTW9kZWxzMDE2Lk1lc3NhZ2VEZWxpdmVyeUFjay5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgbGFzdFJvb21NZXRhZGF0YVVwZGF0ZVRpbWU/OiBzdHJpbmc7XG4gIH1cbiAgZXhwb3J0IGVudW0gU3RyZWFtSW5wdXRDYXBhYmlsaXR5U3RhdHVzIHtcbiAgICBISUdIX0FWQUlMQUJJTElUWSA9IDAsXG4gICAgTk9UX0FWQUlMQUJMRSA9IDEsXG4gICAgTE9XX0FWQUlMQUJJTElUWSA9IDJcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIHByb3RvLnB1Yi52MS5jb3JlLkV4cGxldGl2ZVBhY2tldFxuICovXG5leHBvcnQgY2xhc3MgRXhwbGV0aXZlUGFja2V0IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAncHJvdG8ucHViLnYxLmNvcmUuRXhwbGV0aXZlUGFja2V0JztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgRXhwbGV0aXZlUGFja2V0KCk7XG4gICAgRXhwbGV0aXZlUGFja2V0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogRXhwbGV0aXZlUGFja2V0KSB7XG4gICAgX2luc3RhbmNlLmJvZHkgPSBfaW5zdGFuY2UuYm9keSB8fCAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IEV4cGxldGl2ZVBhY2tldCxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UuYm9keSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgRXhwbGV0aXZlUGFja2V0LnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogRXhwbGV0aXZlUGFja2V0LFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLmJvZHkpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLmJvZHkpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2JvZHk/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBFeHBsZXRpdmVQYWNrZXQgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8RXhwbGV0aXZlUGFja2V0LkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmJvZHkgPSBfdmFsdWUuYm9keTtcbiAgICBFeHBsZXRpdmVQYWNrZXQucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBib2R5KCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2JvZHk7XG4gIH1cbiAgc2V0IGJvZHkodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2JvZHkgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBFeHBsZXRpdmVQYWNrZXQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogRXhwbGV0aXZlUGFja2V0LkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgYm9keTogdGhpcy5ib2R5XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogRXhwbGV0aXZlUGFja2V0LkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgYm9keTogdGhpcy5ib2R5XG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBFeHBsZXRpdmVQYWNrZXQge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIEV4cGxldGl2ZVBhY2tldFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgYm9keT86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBFeHBsZXRpdmVQYWNrZXRcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIGJvZHk/OiBzdHJpbmc7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBwcm90by5wdWIudjEuY29yZS5Sb29tUHJlc2VuY2VUeXBlQ2hhbmdlZFxuICovXG5leHBvcnQgY2xhc3MgUm9vbVByZXNlbmNlVHlwZUNoYW5nZWQgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdwcm90by5wdWIudjEuY29yZS5Sb29tUHJlc2VuY2VUeXBlQ2hhbmdlZCc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFJvb21QcmVzZW5jZVR5cGVDaGFuZ2VkKCk7XG4gICAgUm9vbVByZXNlbmNlVHlwZUNoYW5nZWQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBSb29tUHJlc2VuY2VUeXBlQ2hhbmdlZCkge1xuICAgIF9pbnN0YW5jZS51aWQgPSBfaW5zdGFuY2UudWlkIHx8IHVuZGVmaW5lZDtcbiAgICBfaW5zdGFuY2UucHJlc2VuY2VUeXBlID0gX2luc3RhbmNlLnByZXNlbmNlVHlwZSB8fCAwO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogUm9vbVByZXNlbmNlVHlwZUNoYW5nZWQsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLnVpZCA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAwLlVpZCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UudWlkLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMC5VaWQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5wcmVzZW5jZVR5cGUgPSBfcmVhZGVyLnJlYWRFbnVtKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb29tUHJlc2VuY2VUeXBlQ2hhbmdlZC5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IFJvb21QcmVzZW5jZVR5cGVDaGFuZ2VkLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLnVpZCkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDEsXG4gICAgICAgIF9pbnN0YW5jZS51aWQgYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAwLlVpZC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5wcmVzZW5jZVR5cGUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVFbnVtKDIsIF9pbnN0YW5jZS5wcmVzZW5jZVR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3VpZD86IHByb3RvUHViVjFNb2RlbHMwMDAuVWlkO1xuICBwcml2YXRlIF9wcmVzZW5jZVR5cGU/OiBwcm90b1B1YlYxTW9kZWxzMDE3LlByZXNlbmNlVHlwZTtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIFJvb21QcmVzZW5jZVR5cGVDaGFuZ2VkIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFJvb21QcmVzZW5jZVR5cGVDaGFuZ2VkLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnVpZCA9IF92YWx1ZS51aWQgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMC5VaWQoX3ZhbHVlLnVpZCkgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5wcmVzZW5jZVR5cGUgPSBfdmFsdWUucHJlc2VuY2VUeXBlO1xuICAgIFJvb21QcmVzZW5jZVR5cGVDaGFuZ2VkLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgdWlkKCk6IHByb3RvUHViVjFNb2RlbHMwMDAuVWlkIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdWlkO1xuICB9XG4gIHNldCB1aWQodmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMDAuVWlkIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdWlkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHByZXNlbmNlVHlwZSgpOiBwcm90b1B1YlYxTW9kZWxzMDE3LlByZXNlbmNlVHlwZSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3ByZXNlbmNlVHlwZTtcbiAgfVxuICBzZXQgcHJlc2VuY2VUeXBlKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDE3LlByZXNlbmNlVHlwZSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3ByZXNlbmNlVHlwZSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFJvb21QcmVzZW5jZVR5cGVDaGFuZ2VkLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IFJvb21QcmVzZW5jZVR5cGVDaGFuZ2VkLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgdWlkOiB0aGlzLnVpZCA/IHRoaXMudWlkLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBwcmVzZW5jZVR5cGU6IHRoaXMucHJlc2VuY2VUeXBlXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogUm9vbVByZXNlbmNlVHlwZUNoYW5nZWQuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICB1aWQ6IHRoaXMudWlkID8gdGhpcy51aWQudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgcHJlc2VuY2VUeXBlOlxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDE3LlByZXNlbmNlVHlwZVtcbiAgICAgICAgICB0aGlzLnByZXNlbmNlVHlwZSA9PT0gbnVsbCB8fCB0aGlzLnByZXNlbmNlVHlwZSA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IDBcbiAgICAgICAgICAgIDogdGhpcy5wcmVzZW5jZVR5cGVcbiAgICAgICAgXVxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgUm9vbVByZXNlbmNlVHlwZUNoYW5nZWQge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIFJvb21QcmVzZW5jZVR5cGVDaGFuZ2VkXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICB1aWQ/OiBwcm90b1B1YlYxTW9kZWxzMDAwLlVpZC5Bc09iamVjdDtcbiAgICBwcmVzZW5jZVR5cGU/OiBwcm90b1B1YlYxTW9kZWxzMDE3LlByZXNlbmNlVHlwZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBSb29tUHJlc2VuY2VUeXBlQ2hhbmdlZFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgdWlkPzogcHJvdG9QdWJWMU1vZGVsczAwMC5VaWQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHByZXNlbmNlVHlwZT86IHN0cmluZztcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIHByb3RvLnB1Yi52MS5jb3JlLkVycm9yT25QYWNrZXRcbiAqL1xuZXhwb3J0IGNsYXNzIEVycm9yT25QYWNrZXQgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdwcm90by5wdWIudjEuY29yZS5FcnJvck9uUGFja2V0JztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgRXJyb3JPblBhY2tldCgpO1xuICAgIEVycm9yT25QYWNrZXQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBFcnJvck9uUGFja2V0KSB7XG4gICAgX2luc3RhbmNlLnBhY2tldElkID0gX2luc3RhbmNlLnBhY2tldElkIHx8ICcnO1xuICAgIF9pbnN0YW5jZS5lcnJvciA9IF9pbnN0YW5jZS5lcnJvciB8fCAwO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogRXJyb3JPblBhY2tldCxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UucGFja2V0SWQgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5lcnJvciA9IF9yZWFkZXIucmVhZEVudW0oKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEVycm9yT25QYWNrZXQucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBFcnJvck9uUGFja2V0LFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLnBhY2tldElkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS5wYWNrZXRJZCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZXJyb3IpIHtcbiAgICAgIF93cml0ZXIud3JpdGVFbnVtKDIsIF9pbnN0YW5jZS5lcnJvcik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcGFja2V0SWQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2Vycm9yPzogRXJyb3JPblBhY2tldC5FcnJvcjtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIEVycm9yT25QYWNrZXQgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8RXJyb3JPblBhY2tldC5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5wYWNrZXRJZCA9IF92YWx1ZS5wYWNrZXRJZDtcbiAgICB0aGlzLmVycm9yID0gX3ZhbHVlLmVycm9yO1xuICAgIEVycm9yT25QYWNrZXQucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBwYWNrZXRJZCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wYWNrZXRJZDtcbiAgfVxuICBzZXQgcGFja2V0SWQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3BhY2tldElkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGVycm9yKCk6IEVycm9yT25QYWNrZXQuRXJyb3IgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9lcnJvcjtcbiAgfVxuICBzZXQgZXJyb3IodmFsdWU6IEVycm9yT25QYWNrZXQuRXJyb3IgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9lcnJvciA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIEVycm9yT25QYWNrZXQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogRXJyb3JPblBhY2tldC5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhY2tldElkOiB0aGlzLnBhY2tldElkLFxuICAgICAgZXJyb3I6IHRoaXMuZXJyb3JcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBFcnJvck9uUGFja2V0LkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFja2V0SWQ6IHRoaXMucGFja2V0SWQsXG4gICAgICBlcnJvcjpcbiAgICAgICAgRXJyb3JPblBhY2tldC5FcnJvcltcbiAgICAgICAgICB0aGlzLmVycm9yID09PSBudWxsIHx8IHRoaXMuZXJyb3IgPT09IHVuZGVmaW5lZCA/IDAgOiB0aGlzLmVycm9yXG4gICAgICAgIF1cbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEVycm9yT25QYWNrZXQge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIEVycm9yT25QYWNrZXRcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIHBhY2tldElkPzogc3RyaW5nO1xuICAgIGVycm9yPzogRXJyb3JPblBhY2tldC5FcnJvcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBFcnJvck9uUGFja2V0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBwYWNrZXRJZD86IHN0cmluZztcbiAgICBlcnJvcj86IHN0cmluZztcbiAgfVxuICBleHBvcnQgZW51bSBFcnJvciB7XG4gICAgVU5LTk9XTiA9IDAsXG4gICAgQkFEX1JFUVVFU1QgPSAxLFxuICAgIFVOQVVUSEVOVElDQVRFRCA9IDIsXG4gICAgUEVSTUlTU0lPTl9ERU5JRUQgPSAzLFxuICAgIE5PVF9GT1VORCA9IDQsXG4gICAgQ09ORkxJQ1QgPSA1LFxuICAgIFJFU09VUkNFX0VYSEFVU1RFRCA9IDYsXG4gICAgSU5URVJOQUwgPSA3LFxuICAgIFVOSU1QTEVNRU5URUQgPSA4LFxuICAgIFVOQVZBSUxBQkxFID0gOSxcbiAgICBERUFETElORV9FWENFRURFRCA9IDEwXG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBwcm90by5wdWIudjEuY29yZS5TZXJ2ZXJQYWNrZXRcbiAqL1xuZXhwb3J0IGNsYXNzIFNlcnZlclBhY2tldCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ3Byb3RvLnB1Yi52MS5jb3JlLlNlcnZlclBhY2tldCc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFNlcnZlclBhY2tldCgpO1xuICAgIFNlcnZlclBhY2tldC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IFNlcnZlclBhY2tldCkge1xuICAgIF9pbnN0YW5jZS5wYWNrZXRQYWRkaW5nID0gX2luc3RhbmNlLnBhY2tldFBhZGRpbmcgfHwgJyc7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBTZXJ2ZXJQYWNrZXQsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLmVycm9yID0gbmV3IEVycm9yT25QYWNrZXQoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmVycm9yLFxuICAgICAgICAgICAgRXJyb3JPblBhY2tldC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLm1lc3NhZ2UgPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAxNi5NZXNzYWdlKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5tZXNzYWdlLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxNi5NZXNzYWdlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBfaW5zdGFuY2Uuc2VlbiA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDE0LlNlZW4oKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLnNlZW4sXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDE0LlNlZW4uZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIF9pbnN0YW5jZS5hY3Rpdml0eSA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDE1LkFjdGl2aXR5KCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5hY3Rpdml0eSxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMTUuQWN0aXZpdHkuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIF9pbnN0YW5jZS5yb29tUHJlc2VuY2VUeXBlQ2hhbmdlZCA9IG5ldyBSb29tUHJlc2VuY2VUeXBlQ2hhbmdlZCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2Uucm9vbVByZXNlbmNlVHlwZUNoYW5nZWQsXG4gICAgICAgICAgICBSb29tUHJlc2VuY2VUeXBlQ2hhbmdlZC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgX2luc3RhbmNlLmxpdmVMb2NhdGlvblN0YXR1c0NoYW5nZWQgPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMy5MaXZlTG9jYXRpb24oKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmxpdmVMb2NhdGlvblN0YXR1c0NoYW5nZWQsXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAzLkxpdmVMb2NhdGlvbi5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgX2luc3RhbmNlLnBvbmcgPSBuZXcgUG9uZygpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoX2luc3RhbmNlLnBvbmcsIFBvbmcuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA5OlxuICAgICAgICAgIF9pbnN0YW5jZS5tZXNzYWdlRGVsaXZlcnlBY2sgPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAxNi5NZXNzYWdlRGVsaXZlcnlBY2soKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLm1lc3NhZ2VEZWxpdmVyeUFjayxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMTYuTWVzc2FnZURlbGl2ZXJ5QWNrLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgX2luc3RhbmNlLmNhbGxPZmZlciA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDEwLkNhbGxPZmZlcigpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuY2FsbE9mZmVyLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxMC5DYWxsT2ZmZXIuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICBfaW5zdGFuY2UuY2FsbEFuc3dlciA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDEwLkNhbGxBbnN3ZXIoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmNhbGxBbnN3ZXIsXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDEwLkNhbGxBbnN3ZXIuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICBfaW5zdGFuY2UuY2FsbEV2ZW50ID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMTAuQ2FsbEV2ZW50VjIoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmNhbGxFdmVudCxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMTAuQ2FsbEV2ZW50VjIuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICBfaW5zdGFuY2UuZXhwbGV0aXZlUGFja2V0ID0gbmV3IEV4cGxldGl2ZVBhY2tldCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuZXhwbGV0aXZlUGFja2V0LFxuICAgICAgICAgICAgRXhwbGV0aXZlUGFja2V0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICBfaW5zdGFuY2UucGFja2V0UGFkZGluZyA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgU2VydmVyUGFja2V0LnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogU2VydmVyUGFja2V0LFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLmVycm9yKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMSxcbiAgICAgICAgX2luc3RhbmNlLmVycm9yIGFzIGFueSxcbiAgICAgICAgRXJyb3JPblBhY2tldC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5tZXNzYWdlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMixcbiAgICAgICAgX2luc3RhbmNlLm1lc3NhZ2UgYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDE2Lk1lc3NhZ2Uuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uuc2Vlbikge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDMsXG4gICAgICAgIF9pbnN0YW5jZS5zZWVuIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxNC5TZWVuLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmFjdGl2aXR5KSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgNCxcbiAgICAgICAgX2luc3RhbmNlLmFjdGl2aXR5IGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxNS5BY3Rpdml0eS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5yb29tUHJlc2VuY2VUeXBlQ2hhbmdlZCkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDUsXG4gICAgICAgIF9pbnN0YW5jZS5yb29tUHJlc2VuY2VUeXBlQ2hhbmdlZCBhcyBhbnksXG4gICAgICAgIFJvb21QcmVzZW5jZVR5cGVDaGFuZ2VkLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmxpdmVMb2NhdGlvblN0YXR1c0NoYW5nZWQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA3LFxuICAgICAgICBfaW5zdGFuY2UubGl2ZUxvY2F0aW9uU3RhdHVzQ2hhbmdlZCBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDMuTGl2ZUxvY2F0aW9uLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnBvbmcpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA4LFxuICAgICAgICBfaW5zdGFuY2UucG9uZyBhcyBhbnksXG4gICAgICAgIFBvbmcuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UubWVzc2FnZURlbGl2ZXJ5QWNrKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgOSxcbiAgICAgICAgX2luc3RhbmNlLm1lc3NhZ2VEZWxpdmVyeUFjayBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMTYuTWVzc2FnZURlbGl2ZXJ5QWNrLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmNhbGxPZmZlcikge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDEwLFxuICAgICAgICBfaW5zdGFuY2UuY2FsbE9mZmVyIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxMC5DYWxsT2ZmZXIuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuY2FsbEFuc3dlcikge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDExLFxuICAgICAgICBfaW5zdGFuY2UuY2FsbEFuc3dlciBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMTAuQ2FsbEFuc3dlci5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5jYWxsRXZlbnQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAxMyxcbiAgICAgICAgX2luc3RhbmNlLmNhbGxFdmVudCBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMTAuQ2FsbEV2ZW50VjIuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZXhwbGV0aXZlUGFja2V0KSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMTIsXG4gICAgICAgIF9pbnN0YW5jZS5leHBsZXRpdmVQYWNrZXQgYXMgYW55LFxuICAgICAgICBFeHBsZXRpdmVQYWNrZXQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UucGFja2V0UGFkZGluZykge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZyg2LCBfaW5zdGFuY2UucGFja2V0UGFkZGluZyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZXJyb3I/OiBFcnJvck9uUGFja2V0O1xuICBwcml2YXRlIF9tZXNzYWdlPzogcHJvdG9QdWJWMU1vZGVsczAxNi5NZXNzYWdlO1xuICBwcml2YXRlIF9zZWVuPzogcHJvdG9QdWJWMU1vZGVsczAxNC5TZWVuO1xuICBwcml2YXRlIF9hY3Rpdml0eT86IHByb3RvUHViVjFNb2RlbHMwMTUuQWN0aXZpdHk7XG4gIHByaXZhdGUgX3Jvb21QcmVzZW5jZVR5cGVDaGFuZ2VkPzogUm9vbVByZXNlbmNlVHlwZUNoYW5nZWQ7XG4gIHByaXZhdGUgX2xpdmVMb2NhdGlvblN0YXR1c0NoYW5nZWQ/OiBwcm90b1B1YlYxTW9kZWxzMDAzLkxpdmVMb2NhdGlvbjtcbiAgcHJpdmF0ZSBfcG9uZz86IFBvbmc7XG4gIHByaXZhdGUgX21lc3NhZ2VEZWxpdmVyeUFjaz86IHByb3RvUHViVjFNb2RlbHMwMTYuTWVzc2FnZURlbGl2ZXJ5QWNrO1xuICBwcml2YXRlIF9jYWxsT2ZmZXI/OiBwcm90b1B1YlYxTW9kZWxzMDEwLkNhbGxPZmZlcjtcbiAgcHJpdmF0ZSBfY2FsbEFuc3dlcj86IHByb3RvUHViVjFNb2RlbHMwMTAuQ2FsbEFuc3dlcjtcbiAgcHJpdmF0ZSBfY2FsbEV2ZW50PzogcHJvdG9QdWJWMU1vZGVsczAxMC5DYWxsRXZlbnRWMjtcbiAgcHJpdmF0ZSBfZXhwbGV0aXZlUGFja2V0PzogRXhwbGV0aXZlUGFja2V0O1xuICBwcml2YXRlIF9wYWNrZXRQYWRkaW5nPzogc3RyaW5nO1xuXG4gIHByaXZhdGUgX3R5cGU6IFNlcnZlclBhY2tldC5UeXBlQ2FzZSA9IFNlcnZlclBhY2tldC5UeXBlQ2FzZS5ub25lO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgU2VydmVyUGFja2V0IHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFNlcnZlclBhY2tldC5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5lcnJvciA9IF92YWx1ZS5lcnJvciA/IG5ldyBFcnJvck9uUGFja2V0KF92YWx1ZS5lcnJvcikgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5tZXNzYWdlID0gX3ZhbHVlLm1lc3NhZ2VcbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMTYuTWVzc2FnZShfdmFsdWUubWVzc2FnZSlcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuc2VlbiA9IF92YWx1ZS5zZWVuXG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDE0LlNlZW4oX3ZhbHVlLnNlZW4pXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmFjdGl2aXR5ID0gX3ZhbHVlLmFjdGl2aXR5XG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDE1LkFjdGl2aXR5KF92YWx1ZS5hY3Rpdml0eSlcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMucm9vbVByZXNlbmNlVHlwZUNoYW5nZWQgPSBfdmFsdWUucm9vbVByZXNlbmNlVHlwZUNoYW5nZWRcbiAgICAgID8gbmV3IFJvb21QcmVzZW5jZVR5cGVDaGFuZ2VkKF92YWx1ZS5yb29tUHJlc2VuY2VUeXBlQ2hhbmdlZClcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMubGl2ZUxvY2F0aW9uU3RhdHVzQ2hhbmdlZCA9IF92YWx1ZS5saXZlTG9jYXRpb25TdGF0dXNDaGFuZ2VkXG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAzLkxpdmVMb2NhdGlvbihfdmFsdWUubGl2ZUxvY2F0aW9uU3RhdHVzQ2hhbmdlZClcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMucG9uZyA9IF92YWx1ZS5wb25nID8gbmV3IFBvbmcoX3ZhbHVlLnBvbmcpIDogdW5kZWZpbmVkO1xuICAgIHRoaXMubWVzc2FnZURlbGl2ZXJ5QWNrID0gX3ZhbHVlLm1lc3NhZ2VEZWxpdmVyeUFja1xuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAxNi5NZXNzYWdlRGVsaXZlcnlBY2soX3ZhbHVlLm1lc3NhZ2VEZWxpdmVyeUFjaylcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuY2FsbE9mZmVyID0gX3ZhbHVlLmNhbGxPZmZlclxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAxMC5DYWxsT2ZmZXIoX3ZhbHVlLmNhbGxPZmZlcilcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuY2FsbEFuc3dlciA9IF92YWx1ZS5jYWxsQW5zd2VyXG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDEwLkNhbGxBbnN3ZXIoX3ZhbHVlLmNhbGxBbnN3ZXIpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmNhbGxFdmVudCA9IF92YWx1ZS5jYWxsRXZlbnRcbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMTAuQ2FsbEV2ZW50VjIoX3ZhbHVlLmNhbGxFdmVudClcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuZXhwbGV0aXZlUGFja2V0ID0gX3ZhbHVlLmV4cGxldGl2ZVBhY2tldFxuICAgICAgPyBuZXcgRXhwbGV0aXZlUGFja2V0KF92YWx1ZS5leHBsZXRpdmVQYWNrZXQpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnBhY2tldFBhZGRpbmcgPSBfdmFsdWUucGFja2V0UGFkZGluZztcbiAgICBTZXJ2ZXJQYWNrZXQucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBlcnJvcigpOiBFcnJvck9uUGFja2V0IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZXJyb3I7XG4gIH1cbiAgc2V0IGVycm9yKHZhbHVlOiBFcnJvck9uUGFja2V0IHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX21lc3NhZ2UgPSB0aGlzLl9zZWVuID0gdGhpcy5fYWN0aXZpdHkgPSB0aGlzLl9yb29tUHJlc2VuY2VUeXBlQ2hhbmdlZCA9IHRoaXMuX2xpdmVMb2NhdGlvblN0YXR1c0NoYW5nZWQgPSB0aGlzLl9wb25nID0gdGhpcy5fbWVzc2FnZURlbGl2ZXJ5QWNrID0gdGhpcy5fY2FsbE9mZmVyID0gdGhpcy5fY2FsbEFuc3dlciA9IHRoaXMuX2NhbGxFdmVudCA9IHRoaXMuX2V4cGxldGl2ZVBhY2tldCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBTZXJ2ZXJQYWNrZXQuVHlwZUNhc2UuZXJyb3I7XG4gICAgfVxuICAgIHRoaXMuX2Vycm9yID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG1lc3NhZ2UoKTogcHJvdG9QdWJWMU1vZGVsczAxNi5NZXNzYWdlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbWVzc2FnZTtcbiAgfVxuICBzZXQgbWVzc2FnZSh2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAxNi5NZXNzYWdlIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX2Vycm9yID0gdGhpcy5fc2VlbiA9IHRoaXMuX2FjdGl2aXR5ID0gdGhpcy5fcm9vbVByZXNlbmNlVHlwZUNoYW5nZWQgPSB0aGlzLl9saXZlTG9jYXRpb25TdGF0dXNDaGFuZ2VkID0gdGhpcy5fcG9uZyA9IHRoaXMuX21lc3NhZ2VEZWxpdmVyeUFjayA9IHRoaXMuX2NhbGxPZmZlciA9IHRoaXMuX2NhbGxBbnN3ZXIgPSB0aGlzLl9jYWxsRXZlbnQgPSB0aGlzLl9leHBsZXRpdmVQYWNrZXQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gU2VydmVyUGFja2V0LlR5cGVDYXNlLm1lc3NhZ2U7XG4gICAgfVxuICAgIHRoaXMuX21lc3NhZ2UgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc2VlbigpOiBwcm90b1B1YlYxTW9kZWxzMDE0LlNlZW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zZWVuO1xuICB9XG4gIHNldCBzZWVuKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDE0LlNlZW4gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fZXJyb3IgPSB0aGlzLl9tZXNzYWdlID0gdGhpcy5fYWN0aXZpdHkgPSB0aGlzLl9yb29tUHJlc2VuY2VUeXBlQ2hhbmdlZCA9IHRoaXMuX2xpdmVMb2NhdGlvblN0YXR1c0NoYW5nZWQgPSB0aGlzLl9wb25nID0gdGhpcy5fbWVzc2FnZURlbGl2ZXJ5QWNrID0gdGhpcy5fY2FsbE9mZmVyID0gdGhpcy5fY2FsbEFuc3dlciA9IHRoaXMuX2NhbGxFdmVudCA9IHRoaXMuX2V4cGxldGl2ZVBhY2tldCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBTZXJ2ZXJQYWNrZXQuVHlwZUNhc2Uuc2VlbjtcbiAgICB9XG4gICAgdGhpcy5fc2VlbiA9IHZhbHVlO1xuICB9XG4gIGdldCBhY3Rpdml0eSgpOiBwcm90b1B1YlYxTW9kZWxzMDE1LkFjdGl2aXR5IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZpdHk7XG4gIH1cbiAgc2V0IGFjdGl2aXR5KHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDE1LkFjdGl2aXR5IHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX2Vycm9yID0gdGhpcy5fbWVzc2FnZSA9IHRoaXMuX3NlZW4gPSB0aGlzLl9yb29tUHJlc2VuY2VUeXBlQ2hhbmdlZCA9IHRoaXMuX2xpdmVMb2NhdGlvblN0YXR1c0NoYW5nZWQgPSB0aGlzLl9wb25nID0gdGhpcy5fbWVzc2FnZURlbGl2ZXJ5QWNrID0gdGhpcy5fY2FsbE9mZmVyID0gdGhpcy5fY2FsbEFuc3dlciA9IHRoaXMuX2NhbGxFdmVudCA9IHRoaXMuX2V4cGxldGl2ZVBhY2tldCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBTZXJ2ZXJQYWNrZXQuVHlwZUNhc2UuYWN0aXZpdHk7XG4gICAgfVxuICAgIHRoaXMuX2FjdGl2aXR5ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHJvb21QcmVzZW5jZVR5cGVDaGFuZ2VkKCk6IFJvb21QcmVzZW5jZVR5cGVDaGFuZ2VkIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcm9vbVByZXNlbmNlVHlwZUNoYW5nZWQ7XG4gIH1cbiAgc2V0IHJvb21QcmVzZW5jZVR5cGVDaGFuZ2VkKHZhbHVlOiBSb29tUHJlc2VuY2VUeXBlQ2hhbmdlZCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9lcnJvciA9IHRoaXMuX21lc3NhZ2UgPSB0aGlzLl9zZWVuID0gdGhpcy5fYWN0aXZpdHkgPSB0aGlzLl9saXZlTG9jYXRpb25TdGF0dXNDaGFuZ2VkID0gdGhpcy5fcG9uZyA9IHRoaXMuX21lc3NhZ2VEZWxpdmVyeUFjayA9IHRoaXMuX2NhbGxPZmZlciA9IHRoaXMuX2NhbGxBbnN3ZXIgPSB0aGlzLl9jYWxsRXZlbnQgPSB0aGlzLl9leHBsZXRpdmVQYWNrZXQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gU2VydmVyUGFja2V0LlR5cGVDYXNlLnJvb21QcmVzZW5jZVR5cGVDaGFuZ2VkO1xuICAgIH1cbiAgICB0aGlzLl9yb29tUHJlc2VuY2VUeXBlQ2hhbmdlZCA9IHZhbHVlO1xuICB9XG4gIGdldCBsaXZlTG9jYXRpb25TdGF0dXNDaGFuZ2VkKCk6XG4gICAgfCBwcm90b1B1YlYxTW9kZWxzMDAzLkxpdmVMb2NhdGlvblxuICAgIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbGl2ZUxvY2F0aW9uU3RhdHVzQ2hhbmdlZDtcbiAgfVxuICBzZXQgbGl2ZUxvY2F0aW9uU3RhdHVzQ2hhbmdlZChcbiAgICB2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAwMy5MaXZlTG9jYXRpb24gfCB1bmRlZmluZWRcbiAgKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX2Vycm9yID0gdGhpcy5fbWVzc2FnZSA9IHRoaXMuX3NlZW4gPSB0aGlzLl9hY3Rpdml0eSA9IHRoaXMuX3Jvb21QcmVzZW5jZVR5cGVDaGFuZ2VkID0gdGhpcy5fcG9uZyA9IHRoaXMuX21lc3NhZ2VEZWxpdmVyeUFjayA9IHRoaXMuX2NhbGxPZmZlciA9IHRoaXMuX2NhbGxBbnN3ZXIgPSB0aGlzLl9jYWxsRXZlbnQgPSB0aGlzLl9leHBsZXRpdmVQYWNrZXQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gU2VydmVyUGFja2V0LlR5cGVDYXNlLmxpdmVMb2NhdGlvblN0YXR1c0NoYW5nZWQ7XG4gICAgfVxuICAgIHRoaXMuX2xpdmVMb2NhdGlvblN0YXR1c0NoYW5nZWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcG9uZygpOiBQb25nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcG9uZztcbiAgfVxuICBzZXQgcG9uZyh2YWx1ZTogUG9uZyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9lcnJvciA9IHRoaXMuX21lc3NhZ2UgPSB0aGlzLl9zZWVuID0gdGhpcy5fYWN0aXZpdHkgPSB0aGlzLl9yb29tUHJlc2VuY2VUeXBlQ2hhbmdlZCA9IHRoaXMuX2xpdmVMb2NhdGlvblN0YXR1c0NoYW5nZWQgPSB0aGlzLl9tZXNzYWdlRGVsaXZlcnlBY2sgPSB0aGlzLl9jYWxsT2ZmZXIgPSB0aGlzLl9jYWxsQW5zd2VyID0gdGhpcy5fY2FsbEV2ZW50ID0gdGhpcy5fZXhwbGV0aXZlUGFja2V0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IFNlcnZlclBhY2tldC5UeXBlQ2FzZS5wb25nO1xuICAgIH1cbiAgICB0aGlzLl9wb25nID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG1lc3NhZ2VEZWxpdmVyeUFjaygpOiBwcm90b1B1YlYxTW9kZWxzMDE2Lk1lc3NhZ2VEZWxpdmVyeUFjayB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX21lc3NhZ2VEZWxpdmVyeUFjaztcbiAgfVxuICBzZXQgbWVzc2FnZURlbGl2ZXJ5QWNrKFxuICAgIHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDE2Lk1lc3NhZ2VEZWxpdmVyeUFjayB8IHVuZGVmaW5lZFxuICApIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fZXJyb3IgPSB0aGlzLl9tZXNzYWdlID0gdGhpcy5fc2VlbiA9IHRoaXMuX2FjdGl2aXR5ID0gdGhpcy5fcm9vbVByZXNlbmNlVHlwZUNoYW5nZWQgPSB0aGlzLl9saXZlTG9jYXRpb25TdGF0dXNDaGFuZ2VkID0gdGhpcy5fcG9uZyA9IHRoaXMuX2NhbGxPZmZlciA9IHRoaXMuX2NhbGxBbnN3ZXIgPSB0aGlzLl9jYWxsRXZlbnQgPSB0aGlzLl9leHBsZXRpdmVQYWNrZXQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gU2VydmVyUGFja2V0LlR5cGVDYXNlLm1lc3NhZ2VEZWxpdmVyeUFjaztcbiAgICB9XG4gICAgdGhpcy5fbWVzc2FnZURlbGl2ZXJ5QWNrID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGNhbGxPZmZlcigpOiBwcm90b1B1YlYxTW9kZWxzMDEwLkNhbGxPZmZlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2NhbGxPZmZlcjtcbiAgfVxuICBzZXQgY2FsbE9mZmVyKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDEwLkNhbGxPZmZlciB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9lcnJvciA9IHRoaXMuX21lc3NhZ2UgPSB0aGlzLl9zZWVuID0gdGhpcy5fYWN0aXZpdHkgPSB0aGlzLl9yb29tUHJlc2VuY2VUeXBlQ2hhbmdlZCA9IHRoaXMuX2xpdmVMb2NhdGlvblN0YXR1c0NoYW5nZWQgPSB0aGlzLl9wb25nID0gdGhpcy5fbWVzc2FnZURlbGl2ZXJ5QWNrID0gdGhpcy5fY2FsbEFuc3dlciA9IHRoaXMuX2NhbGxFdmVudCA9IHRoaXMuX2V4cGxldGl2ZVBhY2tldCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBTZXJ2ZXJQYWNrZXQuVHlwZUNhc2UuY2FsbE9mZmVyO1xuICAgIH1cbiAgICB0aGlzLl9jYWxsT2ZmZXIgPSB2YWx1ZTtcbiAgfVxuICBnZXQgY2FsbEFuc3dlcigpOiBwcm90b1B1YlYxTW9kZWxzMDEwLkNhbGxBbnN3ZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9jYWxsQW5zd2VyO1xuICB9XG4gIHNldCBjYWxsQW5zd2VyKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDEwLkNhbGxBbnN3ZXIgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fZXJyb3IgPSB0aGlzLl9tZXNzYWdlID0gdGhpcy5fc2VlbiA9IHRoaXMuX2FjdGl2aXR5ID0gdGhpcy5fcm9vbVByZXNlbmNlVHlwZUNoYW5nZWQgPSB0aGlzLl9saXZlTG9jYXRpb25TdGF0dXNDaGFuZ2VkID0gdGhpcy5fcG9uZyA9IHRoaXMuX21lc3NhZ2VEZWxpdmVyeUFjayA9IHRoaXMuX2NhbGxPZmZlciA9IHRoaXMuX2NhbGxFdmVudCA9IHRoaXMuX2V4cGxldGl2ZVBhY2tldCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBTZXJ2ZXJQYWNrZXQuVHlwZUNhc2UuY2FsbEFuc3dlcjtcbiAgICB9XG4gICAgdGhpcy5fY2FsbEFuc3dlciA9IHZhbHVlO1xuICB9XG4gIGdldCBjYWxsRXZlbnQoKTogcHJvdG9QdWJWMU1vZGVsczAxMC5DYWxsRXZlbnRWMiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2NhbGxFdmVudDtcbiAgfVxuICBzZXQgY2FsbEV2ZW50KHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDEwLkNhbGxFdmVudFYyIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX2Vycm9yID0gdGhpcy5fbWVzc2FnZSA9IHRoaXMuX3NlZW4gPSB0aGlzLl9hY3Rpdml0eSA9IHRoaXMuX3Jvb21QcmVzZW5jZVR5cGVDaGFuZ2VkID0gdGhpcy5fbGl2ZUxvY2F0aW9uU3RhdHVzQ2hhbmdlZCA9IHRoaXMuX3BvbmcgPSB0aGlzLl9tZXNzYWdlRGVsaXZlcnlBY2sgPSB0aGlzLl9jYWxsT2ZmZXIgPSB0aGlzLl9jYWxsQW5zd2VyID0gdGhpcy5fZXhwbGV0aXZlUGFja2V0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IFNlcnZlclBhY2tldC5UeXBlQ2FzZS5jYWxsRXZlbnQ7XG4gICAgfVxuICAgIHRoaXMuX2NhbGxFdmVudCA9IHZhbHVlO1xuICB9XG4gIGdldCBleHBsZXRpdmVQYWNrZXQoKTogRXhwbGV0aXZlUGFja2V0IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZXhwbGV0aXZlUGFja2V0O1xuICB9XG4gIHNldCBleHBsZXRpdmVQYWNrZXQodmFsdWU6IEV4cGxldGl2ZVBhY2tldCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9lcnJvciA9IHRoaXMuX21lc3NhZ2UgPSB0aGlzLl9zZWVuID0gdGhpcy5fYWN0aXZpdHkgPSB0aGlzLl9yb29tUHJlc2VuY2VUeXBlQ2hhbmdlZCA9IHRoaXMuX2xpdmVMb2NhdGlvblN0YXR1c0NoYW5nZWQgPSB0aGlzLl9wb25nID0gdGhpcy5fbWVzc2FnZURlbGl2ZXJ5QWNrID0gdGhpcy5fY2FsbE9mZmVyID0gdGhpcy5fY2FsbEFuc3dlciA9IHRoaXMuX2NhbGxFdmVudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBTZXJ2ZXJQYWNrZXQuVHlwZUNhc2UuZXhwbGV0aXZlUGFja2V0O1xuICAgIH1cbiAgICB0aGlzLl9leHBsZXRpdmVQYWNrZXQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcGFja2V0UGFkZGluZygpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wYWNrZXRQYWRkaW5nO1xuICB9XG4gIHNldCBwYWNrZXRQYWRkaW5nKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9wYWNrZXRQYWRkaW5nID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgU2VydmVyUGFja2V0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IFNlcnZlclBhY2tldC5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVycm9yOiB0aGlzLmVycm9yID8gdGhpcy5lcnJvci50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlID8gdGhpcy5tZXNzYWdlLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBzZWVuOiB0aGlzLnNlZW4gPyB0aGlzLnNlZW4udG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGFjdGl2aXR5OiB0aGlzLmFjdGl2aXR5ID8gdGhpcy5hY3Rpdml0eS50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgcm9vbVByZXNlbmNlVHlwZUNoYW5nZWQ6IHRoaXMucm9vbVByZXNlbmNlVHlwZUNoYW5nZWRcbiAgICAgICAgPyB0aGlzLnJvb21QcmVzZW5jZVR5cGVDaGFuZ2VkLnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICBsaXZlTG9jYXRpb25TdGF0dXNDaGFuZ2VkOiB0aGlzLmxpdmVMb2NhdGlvblN0YXR1c0NoYW5nZWRcbiAgICAgICAgPyB0aGlzLmxpdmVMb2NhdGlvblN0YXR1c0NoYW5nZWQudG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIHBvbmc6IHRoaXMucG9uZyA/IHRoaXMucG9uZy50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgbWVzc2FnZURlbGl2ZXJ5QWNrOiB0aGlzLm1lc3NhZ2VEZWxpdmVyeUFja1xuICAgICAgICA/IHRoaXMubWVzc2FnZURlbGl2ZXJ5QWNrLnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICBjYWxsT2ZmZXI6IHRoaXMuY2FsbE9mZmVyID8gdGhpcy5jYWxsT2ZmZXIudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGNhbGxBbnN3ZXI6IHRoaXMuY2FsbEFuc3dlciA/IHRoaXMuY2FsbEFuc3dlci50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgY2FsbEV2ZW50OiB0aGlzLmNhbGxFdmVudCA/IHRoaXMuY2FsbEV2ZW50LnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBleHBsZXRpdmVQYWNrZXQ6IHRoaXMuZXhwbGV0aXZlUGFja2V0XG4gICAgICAgID8gdGhpcy5leHBsZXRpdmVQYWNrZXQudG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIHBhY2tldFBhZGRpbmc6IHRoaXMucGFja2V0UGFkZGluZ1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IFNlcnZlclBhY2tldC5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVycm9yOiB0aGlzLmVycm9yID8gdGhpcy5lcnJvci50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2UgPyB0aGlzLm1lc3NhZ2UudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgc2VlbjogdGhpcy5zZWVuID8gdGhpcy5zZWVuLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIGFjdGl2aXR5OiB0aGlzLmFjdGl2aXR5ID8gdGhpcy5hY3Rpdml0eS50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICByb29tUHJlc2VuY2VUeXBlQ2hhbmdlZDogdGhpcy5yb29tUHJlc2VuY2VUeXBlQ2hhbmdlZFxuICAgICAgICA/IHRoaXMucm9vbVByZXNlbmNlVHlwZUNoYW5nZWQudG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsLFxuICAgICAgbGl2ZUxvY2F0aW9uU3RhdHVzQ2hhbmdlZDogdGhpcy5saXZlTG9jYXRpb25TdGF0dXNDaGFuZ2VkXG4gICAgICAgID8gdGhpcy5saXZlTG9jYXRpb25TdGF0dXNDaGFuZ2VkLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbCxcbiAgICAgIHBvbmc6IHRoaXMucG9uZyA/IHRoaXMucG9uZy50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICBtZXNzYWdlRGVsaXZlcnlBY2s6IHRoaXMubWVzc2FnZURlbGl2ZXJ5QWNrXG4gICAgICAgID8gdGhpcy5tZXNzYWdlRGVsaXZlcnlBY2sudG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsLFxuICAgICAgY2FsbE9mZmVyOiB0aGlzLmNhbGxPZmZlciA/IHRoaXMuY2FsbE9mZmVyLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIGNhbGxBbnN3ZXI6IHRoaXMuY2FsbEFuc3dlclxuICAgICAgICA/IHRoaXMuY2FsbEFuc3dlci50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICBjYWxsRXZlbnQ6IHRoaXMuY2FsbEV2ZW50ID8gdGhpcy5jYWxsRXZlbnQudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgZXhwbGV0aXZlUGFja2V0OiB0aGlzLmV4cGxldGl2ZVBhY2tldFxuICAgICAgICA/IHRoaXMuZXhwbGV0aXZlUGFja2V0LnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbCxcbiAgICAgIHBhY2tldFBhZGRpbmc6IHRoaXMucGFja2V0UGFkZGluZ1xuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgU2VydmVyUGFja2V0IHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBTZXJ2ZXJQYWNrZXRcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIGVycm9yPzogRXJyb3JPblBhY2tldC5Bc09iamVjdDtcbiAgICBtZXNzYWdlPzogcHJvdG9QdWJWMU1vZGVsczAxNi5NZXNzYWdlLkFzT2JqZWN0O1xuICAgIHNlZW4/OiBwcm90b1B1YlYxTW9kZWxzMDE0LlNlZW4uQXNPYmplY3Q7XG4gICAgYWN0aXZpdHk/OiBwcm90b1B1YlYxTW9kZWxzMDE1LkFjdGl2aXR5LkFzT2JqZWN0O1xuICAgIHJvb21QcmVzZW5jZVR5cGVDaGFuZ2VkPzogUm9vbVByZXNlbmNlVHlwZUNoYW5nZWQuQXNPYmplY3Q7XG4gICAgbGl2ZUxvY2F0aW9uU3RhdHVzQ2hhbmdlZD86IHByb3RvUHViVjFNb2RlbHMwMDMuTGl2ZUxvY2F0aW9uLkFzT2JqZWN0O1xuICAgIHBvbmc/OiBQb25nLkFzT2JqZWN0O1xuICAgIG1lc3NhZ2VEZWxpdmVyeUFjaz86IHByb3RvUHViVjFNb2RlbHMwMTYuTWVzc2FnZURlbGl2ZXJ5QWNrLkFzT2JqZWN0O1xuICAgIGNhbGxPZmZlcj86IHByb3RvUHViVjFNb2RlbHMwMTAuQ2FsbE9mZmVyLkFzT2JqZWN0O1xuICAgIGNhbGxBbnN3ZXI/OiBwcm90b1B1YlYxTW9kZWxzMDEwLkNhbGxBbnN3ZXIuQXNPYmplY3Q7XG4gICAgY2FsbEV2ZW50PzogcHJvdG9QdWJWMU1vZGVsczAxMC5DYWxsRXZlbnRWMi5Bc09iamVjdDtcbiAgICBleHBsZXRpdmVQYWNrZXQ/OiBFeHBsZXRpdmVQYWNrZXQuQXNPYmplY3Q7XG4gICAgcGFja2V0UGFkZGluZz86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBTZXJ2ZXJQYWNrZXRcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIGVycm9yPzogRXJyb3JPblBhY2tldC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgbWVzc2FnZT86IHByb3RvUHViVjFNb2RlbHMwMTYuTWVzc2FnZS5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgc2Vlbj86IHByb3RvUHViVjFNb2RlbHMwMTQuU2Vlbi5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgYWN0aXZpdHk/OiBwcm90b1B1YlYxTW9kZWxzMDE1LkFjdGl2aXR5LkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICByb29tUHJlc2VuY2VUeXBlQ2hhbmdlZD86IFJvb21QcmVzZW5jZVR5cGVDaGFuZ2VkLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBsaXZlTG9jYXRpb25TdGF0dXNDaGFuZ2VkPzogcHJvdG9QdWJWMU1vZGVsczAwMy5MaXZlTG9jYXRpb24uQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHBvbmc/OiBQb25nLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBtZXNzYWdlRGVsaXZlcnlBY2s/OiBwcm90b1B1YlYxTW9kZWxzMDE2Lk1lc3NhZ2VEZWxpdmVyeUFjay5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgY2FsbE9mZmVyPzogcHJvdG9QdWJWMU1vZGVsczAxMC5DYWxsT2ZmZXIuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIGNhbGxBbnN3ZXI/OiBwcm90b1B1YlYxTW9kZWxzMDEwLkNhbGxBbnN3ZXIuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIGNhbGxFdmVudD86IHByb3RvUHViVjFNb2RlbHMwMTAuQ2FsbEV2ZW50VjIuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIGV4cGxldGl2ZVBhY2tldD86IEV4cGxldGl2ZVBhY2tldC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgcGFja2V0UGFkZGluZz86IHN0cmluZztcbiAgfVxuICBleHBvcnQgZW51bSBUeXBlQ2FzZSB7XG4gICAgbm9uZSA9IDAsXG4gICAgZXJyb3IgPSAxLFxuICAgIG1lc3NhZ2UgPSAyLFxuICAgIHNlZW4gPSAzLFxuICAgIGFjdGl2aXR5ID0gNCxcbiAgICByb29tUHJlc2VuY2VUeXBlQ2hhbmdlZCA9IDUsXG4gICAgbGl2ZUxvY2F0aW9uU3RhdHVzQ2hhbmdlZCA9IDYsXG4gICAgcG9uZyA9IDcsXG4gICAgbWVzc2FnZURlbGl2ZXJ5QWNrID0gOCxcbiAgICBjYWxsT2ZmZXIgPSA5LFxuICAgIGNhbGxBbnN3ZXIgPSAxMCxcbiAgICBjYWxsRXZlbnQgPSAxMSxcbiAgICBleHBsZXRpdmVQYWNrZXQgPSAxMlxuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3IgcHJvdG8ucHViLnYxLmNvcmUuQ2xpZW50UGFja2V0XG4gKi9cbmV4cG9ydCBjbGFzcyBDbGllbnRQYWNrZXQgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdwcm90by5wdWIudjEuY29yZS5DbGllbnRQYWNrZXQnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBDbGllbnRQYWNrZXQoKTtcbiAgICBDbGllbnRQYWNrZXQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBDbGllbnRQYWNrZXQpIHtcbiAgICBfaW5zdGFuY2UuaWQgPSBfaW5zdGFuY2UuaWQgfHwgJyc7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBDbGllbnRQYWNrZXQsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLmlkID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UubWVzc2FnZSA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDE2Lk1lc3NhZ2VCeUNsaWVudCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UubWVzc2FnZSxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMTYuTWVzc2FnZUJ5Q2xpZW50LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBfaW5zdGFuY2Uuc2VlbiA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDE0LlNlZW5CeUNsaWVudCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2Uuc2VlbixcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMTQuU2VlbkJ5Q2xpZW50LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBfaW5zdGFuY2UuYWN0aXZpdHkgPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAxNS5BY3Rpdml0eUJ5Q2xpZW50KCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5hY3Rpdml0eSxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMTUuQWN0aXZpdHlCeUNsaWVudC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgX2luc3RhbmNlLnBpbmcgPSBuZXcgUGluZygpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoX2luc3RhbmNlLnBpbmcsIFBpbmcuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIF9pbnN0YW5jZS5jYWxsT2ZmZXIgPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAxMC5DYWxsT2ZmZXJCeUNsaWVudCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuY2FsbE9mZmVyLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxMC5DYWxsT2ZmZXJCeUNsaWVudC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgX2luc3RhbmNlLmNhbGxBbnN3ZXIgPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAxMC5DYWxsQW5zd2VyQnlDbGllbnQoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmNhbGxBbnN3ZXIsXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDEwLkNhbGxBbnN3ZXJCeUNsaWVudC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgX2luc3RhbmNlLmNhbGxFdmVudCA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDEwLkNhbGxFdmVudFYyQnlDbGllbnQoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmNhbGxFdmVudCxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMTAuQ2FsbEV2ZW50VjJCeUNsaWVudC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQ2xpZW50UGFja2V0LnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogQ2xpZW50UGFja2V0LFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLmlkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS5pZCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UubWVzc2FnZSkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDIsXG4gICAgICAgIF9pbnN0YW5jZS5tZXNzYWdlIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxNi5NZXNzYWdlQnlDbGllbnQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uuc2Vlbikge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDMsXG4gICAgICAgIF9pbnN0YW5jZS5zZWVuIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxNC5TZWVuQnlDbGllbnQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuYWN0aXZpdHkpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA0LFxuICAgICAgICBfaW5zdGFuY2UuYWN0aXZpdHkgYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDE1LkFjdGl2aXR5QnlDbGllbnQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UucGluZykge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDUsXG4gICAgICAgIF9pbnN0YW5jZS5waW5nIGFzIGFueSxcbiAgICAgICAgUGluZy5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5jYWxsT2ZmZXIpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA2LFxuICAgICAgICBfaW5zdGFuY2UuY2FsbE9mZmVyIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxMC5DYWxsT2ZmZXJCeUNsaWVudC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5jYWxsQW5zd2VyKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgNyxcbiAgICAgICAgX2luc3RhbmNlLmNhbGxBbnN3ZXIgYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDEwLkNhbGxBbnN3ZXJCeUNsaWVudC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5jYWxsRXZlbnQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA4LFxuICAgICAgICBfaW5zdGFuY2UuY2FsbEV2ZW50IGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxMC5DYWxsRXZlbnRWMkJ5Q2xpZW50LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2lkPzogc3RyaW5nO1xuICBwcml2YXRlIF9tZXNzYWdlPzogcHJvdG9QdWJWMU1vZGVsczAxNi5NZXNzYWdlQnlDbGllbnQ7XG4gIHByaXZhdGUgX3NlZW4/OiBwcm90b1B1YlYxTW9kZWxzMDE0LlNlZW5CeUNsaWVudDtcbiAgcHJpdmF0ZSBfYWN0aXZpdHk/OiBwcm90b1B1YlYxTW9kZWxzMDE1LkFjdGl2aXR5QnlDbGllbnQ7XG4gIHByaXZhdGUgX3Bpbmc/OiBQaW5nO1xuICBwcml2YXRlIF9jYWxsT2ZmZXI/OiBwcm90b1B1YlYxTW9kZWxzMDEwLkNhbGxPZmZlckJ5Q2xpZW50O1xuICBwcml2YXRlIF9jYWxsQW5zd2VyPzogcHJvdG9QdWJWMU1vZGVsczAxMC5DYWxsQW5zd2VyQnlDbGllbnQ7XG4gIHByaXZhdGUgX2NhbGxFdmVudD86IHByb3RvUHViVjFNb2RlbHMwMTAuQ2FsbEV2ZW50VjJCeUNsaWVudDtcblxuICBwcml2YXRlIF90eXBlOiBDbGllbnRQYWNrZXQuVHlwZUNhc2UgPSBDbGllbnRQYWNrZXQuVHlwZUNhc2Uubm9uZTtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIENsaWVudFBhY2tldCB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxDbGllbnRQYWNrZXQuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMuaWQgPSBfdmFsdWUuaWQ7XG4gICAgdGhpcy5tZXNzYWdlID0gX3ZhbHVlLm1lc3NhZ2VcbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMTYuTWVzc2FnZUJ5Q2xpZW50KF92YWx1ZS5tZXNzYWdlKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5zZWVuID0gX3ZhbHVlLnNlZW5cbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMTQuU2VlbkJ5Q2xpZW50KF92YWx1ZS5zZWVuKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5hY3Rpdml0eSA9IF92YWx1ZS5hY3Rpdml0eVxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAxNS5BY3Rpdml0eUJ5Q2xpZW50KF92YWx1ZS5hY3Rpdml0eSlcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMucGluZyA9IF92YWx1ZS5waW5nID8gbmV3IFBpbmcoX3ZhbHVlLnBpbmcpIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuY2FsbE9mZmVyID0gX3ZhbHVlLmNhbGxPZmZlclxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAxMC5DYWxsT2ZmZXJCeUNsaWVudChfdmFsdWUuY2FsbE9mZmVyKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5jYWxsQW5zd2VyID0gX3ZhbHVlLmNhbGxBbnN3ZXJcbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMTAuQ2FsbEFuc3dlckJ5Q2xpZW50KF92YWx1ZS5jYWxsQW5zd2VyKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5jYWxsRXZlbnQgPSBfdmFsdWUuY2FsbEV2ZW50XG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDEwLkNhbGxFdmVudFYyQnlDbGllbnQoX3ZhbHVlLmNhbGxFdmVudClcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIENsaWVudFBhY2tldC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGlkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2lkO1xuICB9XG4gIHNldCBpZCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5faWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbWVzc2FnZSgpOiBwcm90b1B1YlYxTW9kZWxzMDE2Lk1lc3NhZ2VCeUNsaWVudCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX21lc3NhZ2U7XG4gIH1cbiAgc2V0IG1lc3NhZ2UodmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMTYuTWVzc2FnZUJ5Q2xpZW50IHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3NlZW4gPSB0aGlzLl9hY3Rpdml0eSA9IHRoaXMuX3BpbmcgPSB0aGlzLl9jYWxsT2ZmZXIgPSB0aGlzLl9jYWxsQW5zd2VyID0gdGhpcy5fY2FsbEV2ZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IENsaWVudFBhY2tldC5UeXBlQ2FzZS5tZXNzYWdlO1xuICAgIH1cbiAgICB0aGlzLl9tZXNzYWdlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHNlZW4oKTogcHJvdG9QdWJWMU1vZGVsczAxNC5TZWVuQnlDbGllbnQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zZWVuO1xuICB9XG4gIHNldCBzZWVuKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDE0LlNlZW5CeUNsaWVudCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9tZXNzYWdlID0gdGhpcy5fYWN0aXZpdHkgPSB0aGlzLl9waW5nID0gdGhpcy5fY2FsbE9mZmVyID0gdGhpcy5fY2FsbEFuc3dlciA9IHRoaXMuX2NhbGxFdmVudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBDbGllbnRQYWNrZXQuVHlwZUNhc2Uuc2VlbjtcbiAgICB9XG4gICAgdGhpcy5fc2VlbiA9IHZhbHVlO1xuICB9XG4gIGdldCBhY3Rpdml0eSgpOiBwcm90b1B1YlYxTW9kZWxzMDE1LkFjdGl2aXR5QnlDbGllbnQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9hY3Rpdml0eTtcbiAgfVxuICBzZXQgYWN0aXZpdHkodmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMTUuQWN0aXZpdHlCeUNsaWVudCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9tZXNzYWdlID0gdGhpcy5fc2VlbiA9IHRoaXMuX3BpbmcgPSB0aGlzLl9jYWxsT2ZmZXIgPSB0aGlzLl9jYWxsQW5zd2VyID0gdGhpcy5fY2FsbEV2ZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IENsaWVudFBhY2tldC5UeXBlQ2FzZS5hY3Rpdml0eTtcbiAgICB9XG4gICAgdGhpcy5fYWN0aXZpdHkgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcGluZygpOiBQaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcGluZztcbiAgfVxuICBzZXQgcGluZyh2YWx1ZTogUGluZyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9tZXNzYWdlID0gdGhpcy5fc2VlbiA9IHRoaXMuX2FjdGl2aXR5ID0gdGhpcy5fY2FsbE9mZmVyID0gdGhpcy5fY2FsbEFuc3dlciA9IHRoaXMuX2NhbGxFdmVudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBDbGllbnRQYWNrZXQuVHlwZUNhc2UucGluZztcbiAgICB9XG4gICAgdGhpcy5fcGluZyA9IHZhbHVlO1xuICB9XG4gIGdldCBjYWxsT2ZmZXIoKTogcHJvdG9QdWJWMU1vZGVsczAxMC5DYWxsT2ZmZXJCeUNsaWVudCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2NhbGxPZmZlcjtcbiAgfVxuICBzZXQgY2FsbE9mZmVyKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDEwLkNhbGxPZmZlckJ5Q2xpZW50IHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX21lc3NhZ2UgPSB0aGlzLl9zZWVuID0gdGhpcy5fYWN0aXZpdHkgPSB0aGlzLl9waW5nID0gdGhpcy5fY2FsbEFuc3dlciA9IHRoaXMuX2NhbGxFdmVudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBDbGllbnRQYWNrZXQuVHlwZUNhc2UuY2FsbE9mZmVyO1xuICAgIH1cbiAgICB0aGlzLl9jYWxsT2ZmZXIgPSB2YWx1ZTtcbiAgfVxuICBnZXQgY2FsbEFuc3dlcigpOiBwcm90b1B1YlYxTW9kZWxzMDEwLkNhbGxBbnN3ZXJCeUNsaWVudCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2NhbGxBbnN3ZXI7XG4gIH1cbiAgc2V0IGNhbGxBbnN3ZXIodmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMTAuQ2FsbEFuc3dlckJ5Q2xpZW50IHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX21lc3NhZ2UgPSB0aGlzLl9zZWVuID0gdGhpcy5fYWN0aXZpdHkgPSB0aGlzLl9waW5nID0gdGhpcy5fY2FsbE9mZmVyID0gdGhpcy5fY2FsbEV2ZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IENsaWVudFBhY2tldC5UeXBlQ2FzZS5jYWxsQW5zd2VyO1xuICAgIH1cbiAgICB0aGlzLl9jYWxsQW5zd2VyID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGNhbGxFdmVudCgpOiBwcm90b1B1YlYxTW9kZWxzMDEwLkNhbGxFdmVudFYyQnlDbGllbnQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9jYWxsRXZlbnQ7XG4gIH1cbiAgc2V0IGNhbGxFdmVudCh2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAxMC5DYWxsRXZlbnRWMkJ5Q2xpZW50IHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX21lc3NhZ2UgPSB0aGlzLl9zZWVuID0gdGhpcy5fYWN0aXZpdHkgPSB0aGlzLl9waW5nID0gdGhpcy5fY2FsbE9mZmVyID0gdGhpcy5fY2FsbEFuc3dlciA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBDbGllbnRQYWNrZXQuVHlwZUNhc2UuY2FsbEV2ZW50O1xuICAgIH1cbiAgICB0aGlzLl9jYWxsRXZlbnQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBDbGllbnRQYWNrZXQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogQ2xpZW50UGFja2V0LkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2UgPyB0aGlzLm1lc3NhZ2UudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIHNlZW46IHRoaXMuc2VlbiA/IHRoaXMuc2Vlbi50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgYWN0aXZpdHk6IHRoaXMuYWN0aXZpdHkgPyB0aGlzLmFjdGl2aXR5LnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBwaW5nOiB0aGlzLnBpbmcgPyB0aGlzLnBpbmcudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGNhbGxPZmZlcjogdGhpcy5jYWxsT2ZmZXIgPyB0aGlzLmNhbGxPZmZlci50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgY2FsbEFuc3dlcjogdGhpcy5jYWxsQW5zd2VyID8gdGhpcy5jYWxsQW5zd2VyLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBjYWxsRXZlbnQ6IHRoaXMuY2FsbEV2ZW50ID8gdGhpcy5jYWxsRXZlbnQudG9PYmplY3QoKSA6IHVuZGVmaW5lZFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IENsaWVudFBhY2tldC5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlID8gdGhpcy5tZXNzYWdlLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIHNlZW46IHRoaXMuc2VlbiA/IHRoaXMuc2Vlbi50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICBhY3Rpdml0eTogdGhpcy5hY3Rpdml0eSA/IHRoaXMuYWN0aXZpdHkudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgcGluZzogdGhpcy5waW5nID8gdGhpcy5waW5nLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIGNhbGxPZmZlcjogdGhpcy5jYWxsT2ZmZXIgPyB0aGlzLmNhbGxPZmZlci50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICBjYWxsQW5zd2VyOiB0aGlzLmNhbGxBbnN3ZXJcbiAgICAgICAgPyB0aGlzLmNhbGxBbnN3ZXIudG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsLFxuICAgICAgY2FsbEV2ZW50OiB0aGlzLmNhbGxFdmVudCA/IHRoaXMuY2FsbEV2ZW50LnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbFxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgQ2xpZW50UGFja2V0IHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBDbGllbnRQYWNrZXRcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIGlkPzogc3RyaW5nO1xuICAgIG1lc3NhZ2U/OiBwcm90b1B1YlYxTW9kZWxzMDE2Lk1lc3NhZ2VCeUNsaWVudC5Bc09iamVjdDtcbiAgICBzZWVuPzogcHJvdG9QdWJWMU1vZGVsczAxNC5TZWVuQnlDbGllbnQuQXNPYmplY3Q7XG4gICAgYWN0aXZpdHk/OiBwcm90b1B1YlYxTW9kZWxzMDE1LkFjdGl2aXR5QnlDbGllbnQuQXNPYmplY3Q7XG4gICAgcGluZz86IFBpbmcuQXNPYmplY3Q7XG4gICAgY2FsbE9mZmVyPzogcHJvdG9QdWJWMU1vZGVsczAxMC5DYWxsT2ZmZXJCeUNsaWVudC5Bc09iamVjdDtcbiAgICBjYWxsQW5zd2VyPzogcHJvdG9QdWJWMU1vZGVsczAxMC5DYWxsQW5zd2VyQnlDbGllbnQuQXNPYmplY3Q7XG4gICAgY2FsbEV2ZW50PzogcHJvdG9QdWJWMU1vZGVsczAxMC5DYWxsRXZlbnRWMkJ5Q2xpZW50LkFzT2JqZWN0O1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIENsaWVudFBhY2tldFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgaWQ/OiBzdHJpbmc7XG4gICAgbWVzc2FnZT86IHByb3RvUHViVjFNb2RlbHMwMTYuTWVzc2FnZUJ5Q2xpZW50LkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBzZWVuPzogcHJvdG9QdWJWMU1vZGVsczAxNC5TZWVuQnlDbGllbnQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIGFjdGl2aXR5PzogcHJvdG9QdWJWMU1vZGVsczAxNS5BY3Rpdml0eUJ5Q2xpZW50LkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBwaW5nPzogUGluZy5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgY2FsbE9mZmVyPzogcHJvdG9QdWJWMU1vZGVsczAxMC5DYWxsT2ZmZXJCeUNsaWVudC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgY2FsbEFuc3dlcj86IHByb3RvUHViVjFNb2RlbHMwMTAuQ2FsbEFuc3dlckJ5Q2xpZW50LkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBjYWxsRXZlbnQ/OiBwcm90b1B1YlYxTW9kZWxzMDEwLkNhbGxFdmVudFYyQnlDbGllbnQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICB9XG4gIGV4cG9ydCBlbnVtIFR5cGVDYXNlIHtcbiAgICBub25lID0gMCxcbiAgICBtZXNzYWdlID0gMSxcbiAgICBzZWVuID0gMixcbiAgICBhY3Rpdml0eSA9IDMsXG4gICAgcGluZyA9IDQsXG4gICAgY2FsbE9mZmVyID0gNSxcbiAgICBjYWxsQW5zd2VyID0gNixcbiAgICBjYWxsRXZlbnQgPSA3XG4gIH1cbn1cbiJdfQ==