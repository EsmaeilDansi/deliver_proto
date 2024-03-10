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
        this.localChatMessage = _value.localChatMessage
            ? new protoPubV1Models016.LocalChatMessage(_value.localChatMessage)
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
                case 9:
                    _instance.localChatMessage = new protoPubV1Models016.LocalChatMessage();
                    _reader.readMessage(_instance.localChatMessage, protoPubV1Models016.LocalChatMessage.deserializeBinaryFromReader);
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
        if (_instance.localChatMessage) {
            _writer.writeMessage(9, _instance.localChatMessage, protoPubV1Models016.LocalChatMessage.serializeBinaryToWriter);
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
            this._seen = this._activity = this._ping = this._callOffer = this._callAnswer = this._callEvent = this._localChatMessage = undefined;
            this._type = ClientPacket.TypeCase.message;
        }
        this._message = value;
    }
    get seen() {
        return this._seen;
    }
    set seen(value) {
        if (value !== undefined && value !== null) {
            this._message = this._activity = this._ping = this._callOffer = this._callAnswer = this._callEvent = this._localChatMessage = undefined;
            this._type = ClientPacket.TypeCase.seen;
        }
        this._seen = value;
    }
    get activity() {
        return this._activity;
    }
    set activity(value) {
        if (value !== undefined && value !== null) {
            this._message = this._seen = this._ping = this._callOffer = this._callAnswer = this._callEvent = this._localChatMessage = undefined;
            this._type = ClientPacket.TypeCase.activity;
        }
        this._activity = value;
    }
    get ping() {
        return this._ping;
    }
    set ping(value) {
        if (value !== undefined && value !== null) {
            this._message = this._seen = this._activity = this._callOffer = this._callAnswer = this._callEvent = this._localChatMessage = undefined;
            this._type = ClientPacket.TypeCase.ping;
        }
        this._ping = value;
    }
    get callOffer() {
        return this._callOffer;
    }
    set callOffer(value) {
        if (value !== undefined && value !== null) {
            this._message = this._seen = this._activity = this._ping = this._callAnswer = this._callEvent = this._localChatMessage = undefined;
            this._type = ClientPacket.TypeCase.callOffer;
        }
        this._callOffer = value;
    }
    get callAnswer() {
        return this._callAnswer;
    }
    set callAnswer(value) {
        if (value !== undefined && value !== null) {
            this._message = this._seen = this._activity = this._ping = this._callOffer = this._callEvent = this._localChatMessage = undefined;
            this._type = ClientPacket.TypeCase.callAnswer;
        }
        this._callAnswer = value;
    }
    get callEvent() {
        return this._callEvent;
    }
    set callEvent(value) {
        if (value !== undefined && value !== null) {
            this._message = this._seen = this._activity = this._ping = this._callOffer = this._callAnswer = this._localChatMessage = undefined;
            this._type = ClientPacket.TypeCase.callEvent;
        }
        this._callEvent = value;
    }
    get localChatMessage() {
        return this._localChatMessage;
    }
    set localChatMessage(value) {
        if (value !== undefined && value !== null) {
            this._message = this._seen = this._activity = this._ping = this._callOffer = this._callAnswer = this._callEvent = undefined;
            this._type = ClientPacket.TypeCase.localChatMessage;
        }
        this._localChatMessage = value;
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
            callEvent: this.callEvent ? this.callEvent.toObject() : undefined,
            localChatMessage: this.localChatMessage
                ? this.localChatMessage.toObject()
                : undefined
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
            callEvent: this.callEvent ? this.callEvent.toProtobufJSON(options) : null,
            localChatMessage: this.localChatMessage
                ? this.localChatMessage.toProtobufJSON(options)
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
        TypeCase[TypeCase["callEvent"] = 7] = "callEvent";
        TypeCase[TypeCase["localChatMessage"] = 8] = "localChatMessage";
    })(TypeCase = ClientPacket.TypeCase || (ClientPacket.TypeCase = {}));
})(ClientPacket || (ClientPacket = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5wYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Byb3RvL3NyYy9saWIvcHViL3YxL2NvcmUucGIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV0EsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQWMsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RSxPQUFPLEtBQUssbUJBQW1CLE1BQU0sNEJBQTRCLENBQUM7QUFHbEUsT0FBTyxLQUFLLG1CQUFtQixNQUFNLGlDQUFpQyxDQUFDO0FBT3ZFLE9BQU8sS0FBSyxtQkFBbUIsTUFBTSw2QkFBNkIsQ0FBQztBQUluRSxPQUFPLEtBQUssbUJBQW1CLE1BQU0sNkJBQTZCLENBQUM7QUFDbkUsT0FBTyxLQUFLLG1CQUFtQixNQUFNLGlDQUFpQyxDQUFDO0FBQ3ZFLE9BQU8sS0FBSyxtQkFBbUIsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN0RSxPQUFPLEtBQUssbUJBQW1CLE1BQU0sc0NBQXNDLENBQUM7QUFDNUU7O0dBRUc7QUFDSCxNQUFNLE9BQU8sNEJBQTRCO0lBcUR2Qzs7O09BR0c7SUFDSCxZQUNFLE1BQWdFO1FBRWhFLE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO1FBQ3RCLDRCQUE0QixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBM0REOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFpQjtRQUN4QyxNQUFNLFFBQVEsR0FBRyxJQUFJLDRCQUE0QixFQUFFLENBQUM7UUFDcEQsNEJBQTRCLENBQUMsMkJBQTJCLENBQ3RELFFBQVEsRUFDUixJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FDeEIsQ0FBQztRQUNGLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQXVDLElBQUcsQ0FBQztJQUUvRDs7OztPQUlHO0lBQ0gs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Q0FBQTtRQUNiLCtEQUFvQixDQUFBO0lBQ3RCLENBQUMsRUFWVyxRQUFRLEdBQVIscUJBQVEsS0FBUixxQkFBUSxRQVVuQjtBQUNILENBQUMsRUF6Q2EsWUFBWSxLQUFaLFlBQVksUUF5Q3pCIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGUgKi9cbi8qIGVzbGludC1kaXNhYmxlICovXG4vLyBAdHMtbm9jaGVja1xuLy9cbi8vIFRISVMgSVMgQSBHRU5FUkFURUQgRklMRVxuLy8gRE8gTk9UIE1PRElGWSBJVCEgWU9VUiBDSEFOR0VTIFdJTEwgQkUgTE9TVFxuaW1wb3J0IHtcbiAgR3JwY01lc3NhZ2UsXG4gIFJlY3Vyc2l2ZVBhcnRpYWwsXG4gIFRvUHJvdG9idWZKU09OT3B0aW9uc1xufSBmcm9tICdAbmd4LWdycGMvY29tbW9uJztcbmltcG9ydCB7IEJpbmFyeVJlYWRlciwgQmluYXJ5V3JpdGVyLCBCeXRlU291cmNlIH0gZnJvbSAnZ29vZ2xlLXByb3RvYnVmJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMDAgZnJvbSAnLi4vLi4vcHViL3YxL21vZGVscy91aWQucGInO1xuaW1wb3J0ICogYXMgcHJvdG9QdWJWMU1vZGVsczAwMSBmcm9tICcuLi8uLi9wdWIvdjEvbW9kZWxzL2ZpbGUucGInO1xuaW1wb3J0ICogYXMgcHJvdG9QdWJWMU1vZGVsczAwMiBmcm9tICcuLi8uLi9wdWIvdjEvbW9kZWxzL3N0aWNrZXIucGInO1xuaW1wb3J0ICogYXMgcHJvdG9QdWJWMU1vZGVsczAwMyBmcm9tICcuLi8uLi9wdWIvdjEvbW9kZWxzL2xvY2F0aW9uLnBiJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMDQgZnJvbSAnLi4vLi4vcHViL3YxL21vZGVscy9wYXltZW50LnBiJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMDUgZnJvbSAnLi4vLi4vcHViL3YxL21vZGVscy9wZXJzaXN0ZW50LWV2ZW50LnBiJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMDYgZnJvbSAnLi4vLi4vcHViL3YxL21vZGVscy9zaGFyZS1wcml2YXRlLWRhdGEucGInO1xuaW1wb3J0ICogYXMgcHJvdG9QdWJWMU1vZGVsczAwNyBmcm9tICcuLi8uLi9wdWIvdjEvbW9kZWxzL2Zvcm0ucGInO1xuaW1wb3J0ICogYXMgcHJvdG9QdWJWMU1vZGVsczAwOCBmcm9tICcuLi8uLi9wdWIvdjEvbW9kZWxzL3BvbGwucGInO1xuaW1wb3J0ICogYXMgcHJvdG9QdWJWMU1vZGVsczAwOSBmcm9tICcuLi8uLi9wdWIvdjEvbW9kZWxzL211Yy5wYic7XG5pbXBvcnQgKiBhcyBwcm90b1B1YlYxTW9kZWxzMDEwIGZyb20gJy4uLy4uL3B1Yi92MS9tb2RlbHMvY2FsbC5wYic7XG5pbXBvcnQgKiBhcyBwcm90b1B1YlYxTW9kZWxzMDExIGZyb20gJy4uLy4uL3B1Yi92MS9tb2RlbHMvbWFya3VwLnBiJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMTIgZnJvbSAnLi4vLi4vcHViL3YxL21vZGVscy9jYXRlZ29yaWVzLnBiJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMTMgZnJvbSAnLi4vLi4vcHViL3YxL21vZGVscy9zZXR0aW5ncy5wYic7XG5pbXBvcnQgKiBhcyBwcm90b1B1YlYxTW9kZWxzMDE0IGZyb20gJy4uLy4uL3B1Yi92MS9tb2RlbHMvc2Vlbi5wYic7XG5pbXBvcnQgKiBhcyBwcm90b1B1YlYxTW9kZWxzMDE1IGZyb20gJy4uLy4uL3B1Yi92MS9tb2RlbHMvYWN0aXZpdHkucGInO1xuaW1wb3J0ICogYXMgcHJvdG9QdWJWMU1vZGVsczAxNiBmcm9tICcuLi8uLi9wdWIvdjEvbW9kZWxzL21lc3NhZ2UucGInO1xuaW1wb3J0ICogYXMgcHJvdG9QdWJWMU1vZGVsczAxNyBmcm9tICcuLi8uLi9wdWIvdjEvbW9kZWxzL3Jvb20tbWV0YWRhdGEucGInO1xuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBwcm90by5wdWIudjEuY29yZS5Fc3RhYmxpc2hTZXJ2ZXJTaWRlU3RyZWFtUmVxXG4gKi9cbmV4cG9ydCBjbGFzcyBFc3RhYmxpc2hTZXJ2ZXJTaWRlU3RyZWFtUmVxIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAncHJvdG8ucHViLnYxLmNvcmUuRXN0YWJsaXNoU2VydmVyU2lkZVN0cmVhbVJlcSc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEVzdGFibGlzaFNlcnZlclNpZGVTdHJlYW1SZXEoKTtcbiAgICBFc3RhYmxpc2hTZXJ2ZXJTaWRlU3RyZWFtUmVxLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogRXN0YWJsaXNoU2VydmVyU2lkZVN0cmVhbVJlcSkge31cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBFc3RhYmxpc2hTZXJ2ZXJTaWRlU3RyZWFtUmVxLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEVzdGFibGlzaFNlcnZlclNpZGVTdHJlYW1SZXEucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBFc3RhYmxpc2hTZXJ2ZXJTaWRlU3RyZWFtUmVxLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHt9XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBFc3RhYmxpc2hTZXJ2ZXJTaWRlU3RyZWFtUmVxIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEVzdGFibGlzaFNlcnZlclNpZGVTdHJlYW1SZXEuQXNPYmplY3Q+XG4gICkge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICBFc3RhYmxpc2hTZXJ2ZXJTaWRlU3RyZWFtUmVxLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBFc3RhYmxpc2hTZXJ2ZXJTaWRlU3RyZWFtUmVxLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IEVzdGFibGlzaFNlcnZlclNpZGVTdHJlYW1SZXEuQXNPYmplY3Qge1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogRXN0YWJsaXNoU2VydmVyU2lkZVN0cmVhbVJlcS5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEVzdGFibGlzaFNlcnZlclNpZGVTdHJlYW1SZXEge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIEVzdGFibGlzaFNlcnZlclNpZGVTdHJlYW1SZXFcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge31cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgRXN0YWJsaXNoU2VydmVyU2lkZVN0cmVhbVJlcVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7fVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIHByb3RvLnB1Yi52MS5jb3JlLlNlbmRDbGllbnRQYWNrZXRSZXNcbiAqL1xuZXhwb3J0IGNsYXNzIFNlbmRDbGllbnRQYWNrZXRSZXMgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdwcm90by5wdWIudjEuY29yZS5TZW5kQ2xpZW50UGFja2V0UmVzJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgU2VuZENsaWVudFBhY2tldFJlcygpO1xuICAgIFNlbmRDbGllbnRQYWNrZXRSZXMuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBTZW5kQ2xpZW50UGFja2V0UmVzKSB7fVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IFNlbmRDbGllbnRQYWNrZXRSZXMsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgU2VuZENsaWVudFBhY2tldFJlcy5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IFNlbmRDbGllbnRQYWNrZXRSZXMsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge31cblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIFNlbmRDbGllbnRQYWNrZXRSZXMgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8U2VuZENsaWVudFBhY2tldFJlcy5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgU2VuZENsaWVudFBhY2tldFJlcy5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgU2VuZENsaWVudFBhY2tldFJlcy5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBTZW5kQ2xpZW50UGFja2V0UmVzLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge307XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IFNlbmRDbGllbnRQYWNrZXRSZXMuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7fTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBTZW5kQ2xpZW50UGFja2V0UmVzIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBTZW5kQ2xpZW50UGFja2V0UmVzXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHt9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIFNlbmRDbGllbnRQYWNrZXRSZXNcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge31cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBwcm90by5wdWIudjEuY29yZS5QaW5nXG4gKi9cbmV4cG9ydCBjbGFzcyBQaW5nIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAncHJvdG8ucHViLnYxLmNvcmUuUGluZyc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFBpbmcoKTtcbiAgICBQaW5nLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogUGluZykge1xuICAgIF9pbnN0YW5jZS5sYXN0UG9uZ1RpbWUgPSBfaW5zdGFuY2UubGFzdFBvbmdUaW1lIHx8ICcwJztcbiAgICBfaW5zdGFuY2UuY2xpZW50SXNBY3RpdmUgPSBfaW5zdGFuY2UuY2xpZW50SXNBY3RpdmUgfHwgZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoX2luc3RhbmNlOiBQaW5nLCBfcmVhZGVyOiBCaW5hcnlSZWFkZXIpIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5sYXN0UG9uZ1RpbWUgPSBfcmVhZGVyLnJlYWRJbnQ2NFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLmNsaWVudElzQWN0aXZlID0gX3JlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgUGluZy5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihfaW5zdGFuY2U6IFBpbmcsIF93cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChfaW5zdGFuY2UubGFzdFBvbmdUaW1lKSB7XG4gICAgICBfd3JpdGVyLndyaXRlSW50NjRTdHJpbmcoMSwgX2luc3RhbmNlLmxhc3RQb25nVGltZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuY2xpZW50SXNBY3RpdmUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVCb29sKDIsIF9pbnN0YW5jZS5jbGllbnRJc0FjdGl2ZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfbGFzdFBvbmdUaW1lPzogc3RyaW5nO1xuICBwcml2YXRlIF9jbGllbnRJc0FjdGl2ZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBQaW5nIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFBpbmcuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMubGFzdFBvbmdUaW1lID0gX3ZhbHVlLmxhc3RQb25nVGltZTtcbiAgICB0aGlzLmNsaWVudElzQWN0aXZlID0gX3ZhbHVlLmNsaWVudElzQWN0aXZlO1xuICAgIFBpbmcucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBsYXN0UG9uZ1RpbWUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbGFzdFBvbmdUaW1lO1xuICB9XG4gIHNldCBsYXN0UG9uZ1RpbWUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2xhc3RQb25nVGltZSA9IHZhbHVlO1xuICB9XG4gIGdldCBjbGllbnRJc0FjdGl2ZSgpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fY2xpZW50SXNBY3RpdmU7XG4gIH1cbiAgc2V0IGNsaWVudElzQWN0aXZlKHZhbHVlOiBib29sZWFuIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fY2xpZW50SXNBY3RpdmUgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBQaW5nLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IFBpbmcuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBsYXN0UG9uZ1RpbWU6IHRoaXMubGFzdFBvbmdUaW1lLFxuICAgICAgY2xpZW50SXNBY3RpdmU6IHRoaXMuY2xpZW50SXNBY3RpdmVcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBQaW5nLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGFzdFBvbmdUaW1lOiB0aGlzLmxhc3RQb25nVGltZSxcbiAgICAgIGNsaWVudElzQWN0aXZlOiB0aGlzLmNsaWVudElzQWN0aXZlXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBQaW5nIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBQaW5nXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBsYXN0UG9uZ1RpbWU/OiBzdHJpbmc7XG4gICAgY2xpZW50SXNBY3RpdmU/OiBib29sZWFuO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIFBpbmdcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIGxhc3RQb25nVGltZT86IHN0cmluZztcbiAgICBjbGllbnRJc0FjdGl2ZT86IGJvb2xlYW47XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBwcm90by5wdWIudjEuY29yZS5Qb25nXG4gKi9cbmV4cG9ydCBjbGFzcyBQb25nIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAncHJvdG8ucHViLnYxLmNvcmUuUG9uZyc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFBvbmcoKTtcbiAgICBQb25nLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogUG9uZykge1xuICAgIF9pbnN0YW5jZS5wYWNrZXRJZCA9IF9pbnN0YW5jZS5wYWNrZXRJZCB8fCAnJztcbiAgICBfaW5zdGFuY2Uuc2VydmVyVGltZSA9IF9pbnN0YW5jZS5zZXJ2ZXJUaW1lIHx8ICcwJztcbiAgICBfaW5zdGFuY2Uuc3RyZWFtSW5wdXRDYXBhYmlsaXR5U3RhdHVzID1cbiAgICAgIF9pbnN0YW5jZS5zdHJlYW1JbnB1dENhcGFiaWxpdHlTdGF0dXMgfHwgMDtcbiAgICBfaW5zdGFuY2UubGFzdE1lc3NhZ2VEZWxpdmVyeUFjayA9XG4gICAgICBfaW5zdGFuY2UubGFzdE1lc3NhZ2VEZWxpdmVyeUFjayB8fCB1bmRlZmluZWQ7XG4gICAgX2luc3RhbmNlLmxhc3RSb29tTWV0YWRhdGFVcGRhdGVUaW1lID1cbiAgICAgIF9pbnN0YW5jZS5sYXN0Um9vbU1ldGFkYXRhVXBkYXRlVGltZSB8fCAnMCc7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoX2luc3RhbmNlOiBQb25nLCBfcmVhZGVyOiBCaW5hcnlSZWFkZXIpIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5wYWNrZXRJZCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLnNlcnZlclRpbWUgPSBfcmVhZGVyLnJlYWRJbnQ2NFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgX2luc3RhbmNlLnN0cmVhbUlucHV0Q2FwYWJpbGl0eVN0YXR1cyA9IF9yZWFkZXIucmVhZEVudW0oKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIF9pbnN0YW5jZS5sYXN0TWVzc2FnZURlbGl2ZXJ5QWNrID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMTYuTWVzc2FnZURlbGl2ZXJ5QWNrKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5sYXN0TWVzc2FnZURlbGl2ZXJ5QWNrLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxNi5NZXNzYWdlRGVsaXZlcnlBY2suZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIF9pbnN0YW5jZS5sYXN0Um9vbU1ldGFkYXRhVXBkYXRlVGltZSA9IF9yZWFkZXIucmVhZEludDY0U3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBQb25nLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKF9pbnN0YW5jZTogUG9uZywgX3dyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5wYWNrZXRJZCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2UucGFja2V0SWQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnNlcnZlclRpbWUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQ2NFN0cmluZygyLCBfaW5zdGFuY2Uuc2VydmVyVGltZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uuc3RyZWFtSW5wdXRDYXBhYmlsaXR5U3RhdHVzKSB7XG4gICAgICBfd3JpdGVyLndyaXRlRW51bSgzLCBfaW5zdGFuY2Uuc3RyZWFtSW5wdXRDYXBhYmlsaXR5U3RhdHVzKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5sYXN0TWVzc2FnZURlbGl2ZXJ5QWNrKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgNCxcbiAgICAgICAgX2luc3RhbmNlLmxhc3RNZXNzYWdlRGVsaXZlcnlBY2sgYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDE2Lk1lc3NhZ2VEZWxpdmVyeUFjay5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5sYXN0Um9vbU1ldGFkYXRhVXBkYXRlVGltZSkge1xuICAgICAgX3dyaXRlci53cml0ZUludDY0U3RyaW5nKDUsIF9pbnN0YW5jZS5sYXN0Um9vbU1ldGFkYXRhVXBkYXRlVGltZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcGFja2V0SWQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3NlcnZlclRpbWU/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3N0cmVhbUlucHV0Q2FwYWJpbGl0eVN0YXR1cz86IFBvbmcuU3RyZWFtSW5wdXRDYXBhYmlsaXR5U3RhdHVzO1xuICBwcml2YXRlIF9sYXN0TWVzc2FnZURlbGl2ZXJ5QWNrPzogcHJvdG9QdWJWMU1vZGVsczAxNi5NZXNzYWdlRGVsaXZlcnlBY2s7XG4gIHByaXZhdGUgX2xhc3RSb29tTWV0YWRhdGFVcGRhdGVUaW1lPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgUG9uZyB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxQb25nLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnBhY2tldElkID0gX3ZhbHVlLnBhY2tldElkO1xuICAgIHRoaXMuc2VydmVyVGltZSA9IF92YWx1ZS5zZXJ2ZXJUaW1lO1xuICAgIHRoaXMuc3RyZWFtSW5wdXRDYXBhYmlsaXR5U3RhdHVzID0gX3ZhbHVlLnN0cmVhbUlucHV0Q2FwYWJpbGl0eVN0YXR1cztcbiAgICB0aGlzLmxhc3RNZXNzYWdlRGVsaXZlcnlBY2sgPSBfdmFsdWUubGFzdE1lc3NhZ2VEZWxpdmVyeUFja1xuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAxNi5NZXNzYWdlRGVsaXZlcnlBY2soXG4gICAgICAgICAgX3ZhbHVlLmxhc3RNZXNzYWdlRGVsaXZlcnlBY2tcbiAgICAgICAgKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5sYXN0Um9vbU1ldGFkYXRhVXBkYXRlVGltZSA9IF92YWx1ZS5sYXN0Um9vbU1ldGFkYXRhVXBkYXRlVGltZTtcbiAgICBQb25nLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgcGFja2V0SWQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcGFja2V0SWQ7XG4gIH1cbiAgc2V0IHBhY2tldElkKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9wYWNrZXRJZCA9IHZhbHVlO1xuICB9XG4gIGdldCBzZXJ2ZXJUaW1lKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3NlcnZlclRpbWU7XG4gIH1cbiAgc2V0IHNlcnZlclRpbWUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3NlcnZlclRpbWUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc3RyZWFtSW5wdXRDYXBhYmlsaXR5U3RhdHVzKCk6XG4gICAgfCBQb25nLlN0cmVhbUlucHV0Q2FwYWJpbGl0eVN0YXR1c1xuICAgIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc3RyZWFtSW5wdXRDYXBhYmlsaXR5U3RhdHVzO1xuICB9XG4gIHNldCBzdHJlYW1JbnB1dENhcGFiaWxpdHlTdGF0dXMoXG4gICAgdmFsdWU6IFBvbmcuU3RyZWFtSW5wdXRDYXBhYmlsaXR5U3RhdHVzIHwgdW5kZWZpbmVkXG4gICkge1xuICAgIHRoaXMuX3N0cmVhbUlucHV0Q2FwYWJpbGl0eVN0YXR1cyA9IHZhbHVlO1xuICB9XG4gIGdldCBsYXN0TWVzc2FnZURlbGl2ZXJ5QWNrKCk6XG4gICAgfCBwcm90b1B1YlYxTW9kZWxzMDE2Lk1lc3NhZ2VEZWxpdmVyeUFja1xuICAgIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbGFzdE1lc3NhZ2VEZWxpdmVyeUFjaztcbiAgfVxuICBzZXQgbGFzdE1lc3NhZ2VEZWxpdmVyeUFjayhcbiAgICB2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAxNi5NZXNzYWdlRGVsaXZlcnlBY2sgfCB1bmRlZmluZWRcbiAgKSB7XG4gICAgdGhpcy5fbGFzdE1lc3NhZ2VEZWxpdmVyeUFjayA9IHZhbHVlO1xuICB9XG4gIGdldCBsYXN0Um9vbU1ldGFkYXRhVXBkYXRlVGltZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9sYXN0Um9vbU1ldGFkYXRhVXBkYXRlVGltZTtcbiAgfVxuICBzZXQgbGFzdFJvb21NZXRhZGF0YVVwZGF0ZVRpbWUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2xhc3RSb29tTWV0YWRhdGFVcGRhdGVUaW1lID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgUG9uZy5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBQb25nLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFja2V0SWQ6IHRoaXMucGFja2V0SWQsXG4gICAgICBzZXJ2ZXJUaW1lOiB0aGlzLnNlcnZlclRpbWUsXG4gICAgICBzdHJlYW1JbnB1dENhcGFiaWxpdHlTdGF0dXM6IHRoaXMuc3RyZWFtSW5wdXRDYXBhYmlsaXR5U3RhdHVzLFxuICAgICAgbGFzdE1lc3NhZ2VEZWxpdmVyeUFjazogdGhpcy5sYXN0TWVzc2FnZURlbGl2ZXJ5QWNrXG4gICAgICAgID8gdGhpcy5sYXN0TWVzc2FnZURlbGl2ZXJ5QWNrLnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICBsYXN0Um9vbU1ldGFkYXRhVXBkYXRlVGltZTogdGhpcy5sYXN0Um9vbU1ldGFkYXRhVXBkYXRlVGltZVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IFBvbmcuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBwYWNrZXRJZDogdGhpcy5wYWNrZXRJZCxcbiAgICAgIHNlcnZlclRpbWU6IHRoaXMuc2VydmVyVGltZSxcbiAgICAgIHN0cmVhbUlucHV0Q2FwYWJpbGl0eVN0YXR1czpcbiAgICAgICAgUG9uZy5TdHJlYW1JbnB1dENhcGFiaWxpdHlTdGF0dXNbXG4gICAgICAgICAgdGhpcy5zdHJlYW1JbnB1dENhcGFiaWxpdHlTdGF0dXMgPT09IG51bGwgfHxcbiAgICAgICAgICB0aGlzLnN0cmVhbUlucHV0Q2FwYWJpbGl0eVN0YXR1cyA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IDBcbiAgICAgICAgICAgIDogdGhpcy5zdHJlYW1JbnB1dENhcGFiaWxpdHlTdGF0dXNcbiAgICAgICAgXSxcbiAgICAgIGxhc3RNZXNzYWdlRGVsaXZlcnlBY2s6IHRoaXMubGFzdE1lc3NhZ2VEZWxpdmVyeUFja1xuICAgICAgICA/IHRoaXMubGFzdE1lc3NhZ2VEZWxpdmVyeUFjay50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICBsYXN0Um9vbU1ldGFkYXRhVXBkYXRlVGltZTogdGhpcy5sYXN0Um9vbU1ldGFkYXRhVXBkYXRlVGltZVxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgUG9uZyB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgUG9uZ1xuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgcGFja2V0SWQ/OiBzdHJpbmc7XG4gICAgc2VydmVyVGltZT86IHN0cmluZztcbiAgICBzdHJlYW1JbnB1dENhcGFiaWxpdHlTdGF0dXM/OiBQb25nLlN0cmVhbUlucHV0Q2FwYWJpbGl0eVN0YXR1cztcbiAgICBsYXN0TWVzc2FnZURlbGl2ZXJ5QWNrPzogcHJvdG9QdWJWMU1vZGVsczAxNi5NZXNzYWdlRGVsaXZlcnlBY2suQXNPYmplY3Q7XG4gICAgbGFzdFJvb21NZXRhZGF0YVVwZGF0ZVRpbWU/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgUG9uZ1xuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgcGFja2V0SWQ/OiBzdHJpbmc7XG4gICAgc2VydmVyVGltZT86IHN0cmluZztcbiAgICBzdHJlYW1JbnB1dENhcGFiaWxpdHlTdGF0dXM/OiBzdHJpbmc7XG4gICAgbGFzdE1lc3NhZ2VEZWxpdmVyeUFjaz86IHByb3RvUHViVjFNb2RlbHMwMTYuTWVzc2FnZURlbGl2ZXJ5QWNrLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBsYXN0Um9vbU1ldGFkYXRhVXBkYXRlVGltZT86IHN0cmluZztcbiAgfVxuICBleHBvcnQgZW51bSBTdHJlYW1JbnB1dENhcGFiaWxpdHlTdGF0dXMge1xuICAgIEhJR0hfQVZBSUxBQklMSVRZID0gMCxcbiAgICBOT1RfQVZBSUxBQkxFID0gMSxcbiAgICBMT1dfQVZBSUxBQklMSVRZID0gMlxuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3IgcHJvdG8ucHViLnYxLmNvcmUuRXhwbGV0aXZlUGFja2V0XG4gKi9cbmV4cG9ydCBjbGFzcyBFeHBsZXRpdmVQYWNrZXQgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdwcm90by5wdWIudjEuY29yZS5FeHBsZXRpdmVQYWNrZXQnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBFeHBsZXRpdmVQYWNrZXQoKTtcbiAgICBFeHBsZXRpdmVQYWNrZXQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBFeHBsZXRpdmVQYWNrZXQpIHtcbiAgICBfaW5zdGFuY2UuYm9keSA9IF9pbnN0YW5jZS5ib2R5IHx8ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogRXhwbGV0aXZlUGFja2V0LFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5ib2R5ID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBFeHBsZXRpdmVQYWNrZXQucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBFeHBsZXRpdmVQYWNrZXQsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UuYm9keSkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2UuYm9keSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfYm9keT86IHN0cmluZztcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIEV4cGxldGl2ZVBhY2tldCB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxFeHBsZXRpdmVQYWNrZXQuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMuYm9keSA9IF92YWx1ZS5ib2R5O1xuICAgIEV4cGxldGl2ZVBhY2tldC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGJvZHkoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fYm9keTtcbiAgfVxuICBzZXQgYm9keSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fYm9keSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIEV4cGxldGl2ZVBhY2tldC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBFeHBsZXRpdmVQYWNrZXQuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBib2R5OiB0aGlzLmJvZHlcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBFeHBsZXRpdmVQYWNrZXQuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBib2R5OiB0aGlzLmJvZHlcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEV4cGxldGl2ZVBhY2tldCB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgRXhwbGV0aXZlUGFja2V0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBib2R5Pzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIEV4cGxldGl2ZVBhY2tldFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgYm9keT86IHN0cmluZztcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIHByb3RvLnB1Yi52MS5jb3JlLlJvb21QcmVzZW5jZVR5cGVDaGFuZ2VkXG4gKi9cbmV4cG9ydCBjbGFzcyBSb29tUHJlc2VuY2VUeXBlQ2hhbmdlZCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ3Byb3RvLnB1Yi52MS5jb3JlLlJvb21QcmVzZW5jZVR5cGVDaGFuZ2VkJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgUm9vbVByZXNlbmNlVHlwZUNoYW5nZWQoKTtcbiAgICBSb29tUHJlc2VuY2VUeXBlQ2hhbmdlZC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IFJvb21QcmVzZW5jZVR5cGVDaGFuZ2VkKSB7XG4gICAgX2luc3RhbmNlLnVpZCA9IF9pbnN0YW5jZS51aWQgfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5wcmVzZW5jZVR5cGUgPSBfaW5zdGFuY2UucHJlc2VuY2VUeXBlIHx8IDA7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBSb29tUHJlc2VuY2VUeXBlQ2hhbmdlZCxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UudWlkID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDAuVWlkKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS51aWQsXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAwLlVpZC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLnByZXNlbmNlVHlwZSA9IF9yZWFkZXIucmVhZEVudW0oKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFJvb21QcmVzZW5jZVR5cGVDaGFuZ2VkLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogUm9vbVByZXNlbmNlVHlwZUNoYW5nZWQsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UudWlkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMSxcbiAgICAgICAgX2luc3RhbmNlLnVpZCBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDAuVWlkLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnByZXNlbmNlVHlwZSkge1xuICAgICAgX3dyaXRlci53cml0ZUVudW0oMiwgX2luc3RhbmNlLnByZXNlbmNlVHlwZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdWlkPzogcHJvdG9QdWJWMU1vZGVsczAwMC5VaWQ7XG4gIHByaXZhdGUgX3ByZXNlbmNlVHlwZT86IHByb3RvUHViVjFNb2RlbHMwMTcuUHJlc2VuY2VUeXBlO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgUm9vbVByZXNlbmNlVHlwZUNoYW5nZWQgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8Um9vbVByZXNlbmNlVHlwZUNoYW5nZWQuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMudWlkID0gX3ZhbHVlLnVpZCA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAwLlVpZChfdmFsdWUudWlkKSA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnByZXNlbmNlVHlwZSA9IF92YWx1ZS5wcmVzZW5jZVR5cGU7XG4gICAgUm9vbVByZXNlbmNlVHlwZUNoYW5nZWQucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCB1aWQoKTogcHJvdG9QdWJWMU1vZGVsczAwMC5VaWQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl91aWQ7XG4gIH1cbiAgc2V0IHVpZCh2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAwMC5VaWQgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl91aWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcHJlc2VuY2VUeXBlKCk6IHByb3RvUHViVjFNb2RlbHMwMTcuUHJlc2VuY2VUeXBlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcHJlc2VuY2VUeXBlO1xuICB9XG4gIHNldCBwcmVzZW5jZVR5cGUodmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMTcuUHJlc2VuY2VUeXBlIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcHJlc2VuY2VUeXBlID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgUm9vbVByZXNlbmNlVHlwZUNoYW5nZWQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogUm9vbVByZXNlbmNlVHlwZUNoYW5nZWQuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICB1aWQ6IHRoaXMudWlkID8gdGhpcy51aWQudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIHByZXNlbmNlVHlwZTogdGhpcy5wcmVzZW5jZVR5cGVcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBSb29tUHJlc2VuY2VUeXBlQ2hhbmdlZC5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVpZDogdGhpcy51aWQgPyB0aGlzLnVpZC50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICBwcmVzZW5jZVR5cGU6XG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMTcuUHJlc2VuY2VUeXBlW1xuICAgICAgICAgIHRoaXMucHJlc2VuY2VUeXBlID09PSBudWxsIHx8IHRoaXMucHJlc2VuY2VUeXBlID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgOiB0aGlzLnByZXNlbmNlVHlwZVxuICAgICAgICBdXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBSb29tUHJlc2VuY2VUeXBlQ2hhbmdlZCB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgUm9vbVByZXNlbmNlVHlwZUNoYW5nZWRcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIHVpZD86IHByb3RvUHViVjFNb2RlbHMwMDAuVWlkLkFzT2JqZWN0O1xuICAgIHByZXNlbmNlVHlwZT86IHByb3RvUHViVjFNb2RlbHMwMTcuUHJlc2VuY2VUeXBlO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIFJvb21QcmVzZW5jZVR5cGVDaGFuZ2VkXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICB1aWQ/OiBwcm90b1B1YlYxTW9kZWxzMDAwLlVpZC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgcHJlc2VuY2VUeXBlPzogc3RyaW5nO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3IgcHJvdG8ucHViLnYxLmNvcmUuRXJyb3JPblBhY2tldFxuICovXG5leHBvcnQgY2xhc3MgRXJyb3JPblBhY2tldCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ3Byb3RvLnB1Yi52MS5jb3JlLkVycm9yT25QYWNrZXQnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBFcnJvck9uUGFja2V0KCk7XG4gICAgRXJyb3JPblBhY2tldC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IEVycm9yT25QYWNrZXQpIHtcbiAgICBfaW5zdGFuY2UucGFja2V0SWQgPSBfaW5zdGFuY2UucGFja2V0SWQgfHwgJyc7XG4gICAgX2luc3RhbmNlLmVycm9yID0gX2luc3RhbmNlLmVycm9yIHx8IDA7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBFcnJvck9uUGFja2V0LFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5wYWNrZXRJZCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLmVycm9yID0gX3JlYWRlci5yZWFkRW51bSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgRXJyb3JPblBhY2tldC5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IEVycm9yT25QYWNrZXQsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UucGFja2V0SWQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLnBhY2tldElkKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5lcnJvcikge1xuICAgICAgX3dyaXRlci53cml0ZUVudW0oMiwgX2luc3RhbmNlLmVycm9yKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9wYWNrZXRJZD86IHN0cmluZztcbiAgcHJpdmF0ZSBfZXJyb3I/OiBFcnJvck9uUGFja2V0LkVycm9yO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgRXJyb3JPblBhY2tldCB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxFcnJvck9uUGFja2V0LkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnBhY2tldElkID0gX3ZhbHVlLnBhY2tldElkO1xuICAgIHRoaXMuZXJyb3IgPSBfdmFsdWUuZXJyb3I7XG4gICAgRXJyb3JPblBhY2tldC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHBhY2tldElkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3BhY2tldElkO1xuICB9XG4gIHNldCBwYWNrZXRJZCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcGFja2V0SWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZXJyb3IoKTogRXJyb3JPblBhY2tldC5FcnJvciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2Vycm9yO1xuICB9XG4gIHNldCBlcnJvcih2YWx1ZTogRXJyb3JPblBhY2tldC5FcnJvciB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2Vycm9yID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgRXJyb3JPblBhY2tldC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBFcnJvck9uUGFja2V0LkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFja2V0SWQ6IHRoaXMucGFja2V0SWQsXG4gICAgICBlcnJvcjogdGhpcy5lcnJvclxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IEVycm9yT25QYWNrZXQuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBwYWNrZXRJZDogdGhpcy5wYWNrZXRJZCxcbiAgICAgIGVycm9yOlxuICAgICAgICBFcnJvck9uUGFja2V0LkVycm9yW1xuICAgICAgICAgIHRoaXMuZXJyb3IgPT09IG51bGwgfHwgdGhpcy5lcnJvciA9PT0gdW5kZWZpbmVkID8gMCA6IHRoaXMuZXJyb3JcbiAgICAgICAgXVxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgRXJyb3JPblBhY2tldCB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgRXJyb3JPblBhY2tldFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgcGFja2V0SWQ/OiBzdHJpbmc7XG4gICAgZXJyb3I/OiBFcnJvck9uUGFja2V0LkVycm9yO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIEVycm9yT25QYWNrZXRcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHBhY2tldElkPzogc3RyaW5nO1xuICAgIGVycm9yPzogc3RyaW5nO1xuICB9XG4gIGV4cG9ydCBlbnVtIEVycm9yIHtcbiAgICBVTktOT1dOID0gMCxcbiAgICBCQURfUkVRVUVTVCA9IDEsXG4gICAgVU5BVVRIRU5USUNBVEVEID0gMixcbiAgICBQRVJNSVNTSU9OX0RFTklFRCA9IDMsXG4gICAgTk9UX0ZPVU5EID0gNCxcbiAgICBDT05GTElDVCA9IDUsXG4gICAgUkVTT1VSQ0VfRVhIQVVTVEVEID0gNixcbiAgICBJTlRFUk5BTCA9IDcsXG4gICAgVU5JTVBMRU1FTlRFRCA9IDgsXG4gICAgVU5BVkFJTEFCTEUgPSA5LFxuICAgIERFQURMSU5FX0VYQ0VFREVEID0gMTBcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIHByb3RvLnB1Yi52MS5jb3JlLlNlcnZlclBhY2tldFxuICovXG5leHBvcnQgY2xhc3MgU2VydmVyUGFja2V0IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAncHJvdG8ucHViLnYxLmNvcmUuU2VydmVyUGFja2V0JztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgU2VydmVyUGFja2V0KCk7XG4gICAgU2VydmVyUGFja2V0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogU2VydmVyUGFja2V0KSB7XG4gICAgX2luc3RhbmNlLnBhY2tldFBhZGRpbmcgPSBfaW5zdGFuY2UucGFja2V0UGFkZGluZyB8fCAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IFNlcnZlclBhY2tldCxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UuZXJyb3IgPSBuZXcgRXJyb3JPblBhY2tldCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuZXJyb3IsXG4gICAgICAgICAgICBFcnJvck9uUGFja2V0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UubWVzc2FnZSA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDE2Lk1lc3NhZ2UoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLm1lc3NhZ2UsXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDE2Lk1lc3NhZ2UuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIF9pbnN0YW5jZS5zZWVuID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMTQuU2VlbigpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2Uuc2VlbixcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMTQuU2Vlbi5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgX2luc3RhbmNlLmFjdGl2aXR5ID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMTUuQWN0aXZpdHkoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmFjdGl2aXR5LFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxNS5BY3Rpdml0eS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgX2luc3RhbmNlLnJvb21QcmVzZW5jZVR5cGVDaGFuZ2VkID0gbmV3IFJvb21QcmVzZW5jZVR5cGVDaGFuZ2VkKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5yb29tUHJlc2VuY2VUeXBlQ2hhbmdlZCxcbiAgICAgICAgICAgIFJvb21QcmVzZW5jZVR5cGVDaGFuZ2VkLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNzpcbiAgICAgICAgICBfaW5zdGFuY2UubGl2ZUxvY2F0aW9uU3RhdHVzQ2hhbmdlZCA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAzLkxpdmVMb2NhdGlvbigpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UubGl2ZUxvY2F0aW9uU3RhdHVzQ2hhbmdlZCxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDMuTGl2ZUxvY2F0aW9uLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgODpcbiAgICAgICAgICBfaW5zdGFuY2UucG9uZyA9IG5ldyBQb25nKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShfaW5zdGFuY2UucG9uZywgUG9uZy5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgX2luc3RhbmNlLm1lc3NhZ2VEZWxpdmVyeUFjayA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDE2Lk1lc3NhZ2VEZWxpdmVyeUFjaygpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UubWVzc2FnZURlbGl2ZXJ5QWNrLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxNi5NZXNzYWdlRGVsaXZlcnlBY2suZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICBfaW5zdGFuY2UuY2FsbE9mZmVyID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMTAuQ2FsbE9mZmVyKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5jYWxsT2ZmZXIsXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDEwLkNhbGxPZmZlci5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDExOlxuICAgICAgICAgIF9pbnN0YW5jZS5jYWxsQW5zd2VyID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMTAuQ2FsbEFuc3dlcigpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuY2FsbEFuc3dlcixcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMTAuQ2FsbEFuc3dlci5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgIF9pbnN0YW5jZS5jYWxsRXZlbnQgPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAxMC5DYWxsRXZlbnRWMigpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuY2FsbEV2ZW50LFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxMC5DYWxsRXZlbnRWMi5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgIF9pbnN0YW5jZS5leHBsZXRpdmVQYWNrZXQgPSBuZXcgRXhwbGV0aXZlUGFja2V0KCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5leHBsZXRpdmVQYWNrZXQsXG4gICAgICAgICAgICBFeHBsZXRpdmVQYWNrZXQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIF9pbnN0YW5jZS5wYWNrZXRQYWRkaW5nID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBTZXJ2ZXJQYWNrZXQucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBTZXJ2ZXJQYWNrZXQsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UuZXJyb3IpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAxLFxuICAgICAgICBfaW5zdGFuY2UuZXJyb3IgYXMgYW55LFxuICAgICAgICBFcnJvck9uUGFja2V0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLm1lc3NhZ2UpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAyLFxuICAgICAgICBfaW5zdGFuY2UubWVzc2FnZSBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMTYuTWVzc2FnZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5zZWVuKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMyxcbiAgICAgICAgX2luc3RhbmNlLnNlZW4gYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDE0LlNlZW4uc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuYWN0aXZpdHkpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA0LFxuICAgICAgICBfaW5zdGFuY2UuYWN0aXZpdHkgYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDE1LkFjdGl2aXR5LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnJvb21QcmVzZW5jZVR5cGVDaGFuZ2VkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgNSxcbiAgICAgICAgX2luc3RhbmNlLnJvb21QcmVzZW5jZVR5cGVDaGFuZ2VkIGFzIGFueSxcbiAgICAgICAgUm9vbVByZXNlbmNlVHlwZUNoYW5nZWQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UubGl2ZUxvY2F0aW9uU3RhdHVzQ2hhbmdlZCkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDcsXG4gICAgICAgIF9pbnN0YW5jZS5saXZlTG9jYXRpb25TdGF0dXNDaGFuZ2VkIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMy5MaXZlTG9jYXRpb24uc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UucG9uZykge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDgsXG4gICAgICAgIF9pbnN0YW5jZS5wb25nIGFzIGFueSxcbiAgICAgICAgUG9uZy5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5tZXNzYWdlRGVsaXZlcnlBY2spIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA5LFxuICAgICAgICBfaW5zdGFuY2UubWVzc2FnZURlbGl2ZXJ5QWNrIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxNi5NZXNzYWdlRGVsaXZlcnlBY2suc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuY2FsbE9mZmVyKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMTAsXG4gICAgICAgIF9pbnN0YW5jZS5jYWxsT2ZmZXIgYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDEwLkNhbGxPZmZlci5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5jYWxsQW5zd2VyKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMTEsXG4gICAgICAgIF9pbnN0YW5jZS5jYWxsQW5zd2VyIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxMC5DYWxsQW5zd2VyLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmNhbGxFdmVudCkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDEzLFxuICAgICAgICBfaW5zdGFuY2UuY2FsbEV2ZW50IGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxMC5DYWxsRXZlbnRWMi5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5leHBsZXRpdmVQYWNrZXQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAxMixcbiAgICAgICAgX2luc3RhbmNlLmV4cGxldGl2ZVBhY2tldCBhcyBhbnksXG4gICAgICAgIEV4cGxldGl2ZVBhY2tldC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5wYWNrZXRQYWRkaW5nKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDYsIF9pbnN0YW5jZS5wYWNrZXRQYWRkaW5nKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9lcnJvcj86IEVycm9yT25QYWNrZXQ7XG4gIHByaXZhdGUgX21lc3NhZ2U/OiBwcm90b1B1YlYxTW9kZWxzMDE2Lk1lc3NhZ2U7XG4gIHByaXZhdGUgX3NlZW4/OiBwcm90b1B1YlYxTW9kZWxzMDE0LlNlZW47XG4gIHByaXZhdGUgX2FjdGl2aXR5PzogcHJvdG9QdWJWMU1vZGVsczAxNS5BY3Rpdml0eTtcbiAgcHJpdmF0ZSBfcm9vbVByZXNlbmNlVHlwZUNoYW5nZWQ/OiBSb29tUHJlc2VuY2VUeXBlQ2hhbmdlZDtcbiAgcHJpdmF0ZSBfbGl2ZUxvY2F0aW9uU3RhdHVzQ2hhbmdlZD86IHByb3RvUHViVjFNb2RlbHMwMDMuTGl2ZUxvY2F0aW9uO1xuICBwcml2YXRlIF9wb25nPzogUG9uZztcbiAgcHJpdmF0ZSBfbWVzc2FnZURlbGl2ZXJ5QWNrPzogcHJvdG9QdWJWMU1vZGVsczAxNi5NZXNzYWdlRGVsaXZlcnlBY2s7XG4gIHByaXZhdGUgX2NhbGxPZmZlcj86IHByb3RvUHViVjFNb2RlbHMwMTAuQ2FsbE9mZmVyO1xuICBwcml2YXRlIF9jYWxsQW5zd2VyPzogcHJvdG9QdWJWMU1vZGVsczAxMC5DYWxsQW5zd2VyO1xuICBwcml2YXRlIF9jYWxsRXZlbnQ/OiBwcm90b1B1YlYxTW9kZWxzMDEwLkNhbGxFdmVudFYyO1xuICBwcml2YXRlIF9leHBsZXRpdmVQYWNrZXQ/OiBFeHBsZXRpdmVQYWNrZXQ7XG4gIHByaXZhdGUgX3BhY2tldFBhZGRpbmc/OiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfdHlwZTogU2VydmVyUGFja2V0LlR5cGVDYXNlID0gU2VydmVyUGFja2V0LlR5cGVDYXNlLm5vbmU7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBTZXJ2ZXJQYWNrZXQgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8U2VydmVyUGFja2V0LkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmVycm9yID0gX3ZhbHVlLmVycm9yID8gbmV3IEVycm9yT25QYWNrZXQoX3ZhbHVlLmVycm9yKSA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1lc3NhZ2UgPSBfdmFsdWUubWVzc2FnZVxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAxNi5NZXNzYWdlKF92YWx1ZS5tZXNzYWdlKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5zZWVuID0gX3ZhbHVlLnNlZW5cbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMTQuU2VlbihfdmFsdWUuc2VlbilcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuYWN0aXZpdHkgPSBfdmFsdWUuYWN0aXZpdHlcbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMTUuQWN0aXZpdHkoX3ZhbHVlLmFjdGl2aXR5KVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5yb29tUHJlc2VuY2VUeXBlQ2hhbmdlZCA9IF92YWx1ZS5yb29tUHJlc2VuY2VUeXBlQ2hhbmdlZFxuICAgICAgPyBuZXcgUm9vbVByZXNlbmNlVHlwZUNoYW5nZWQoX3ZhbHVlLnJvb21QcmVzZW5jZVR5cGVDaGFuZ2VkKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5saXZlTG9jYXRpb25TdGF0dXNDaGFuZ2VkID0gX3ZhbHVlLmxpdmVMb2NhdGlvblN0YXR1c0NoYW5nZWRcbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMDMuTGl2ZUxvY2F0aW9uKF92YWx1ZS5saXZlTG9jYXRpb25TdGF0dXNDaGFuZ2VkKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5wb25nID0gX3ZhbHVlLnBvbmcgPyBuZXcgUG9uZyhfdmFsdWUucG9uZykgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5tZXNzYWdlRGVsaXZlcnlBY2sgPSBfdmFsdWUubWVzc2FnZURlbGl2ZXJ5QWNrXG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDE2Lk1lc3NhZ2VEZWxpdmVyeUFjayhfdmFsdWUubWVzc2FnZURlbGl2ZXJ5QWNrKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5jYWxsT2ZmZXIgPSBfdmFsdWUuY2FsbE9mZmVyXG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDEwLkNhbGxPZmZlcihfdmFsdWUuY2FsbE9mZmVyKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5jYWxsQW5zd2VyID0gX3ZhbHVlLmNhbGxBbnN3ZXJcbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMTAuQ2FsbEFuc3dlcihfdmFsdWUuY2FsbEFuc3dlcilcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuY2FsbEV2ZW50ID0gX3ZhbHVlLmNhbGxFdmVudFxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAxMC5DYWxsRXZlbnRWMihfdmFsdWUuY2FsbEV2ZW50KVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5leHBsZXRpdmVQYWNrZXQgPSBfdmFsdWUuZXhwbGV0aXZlUGFja2V0XG4gICAgICA/IG5ldyBFeHBsZXRpdmVQYWNrZXQoX3ZhbHVlLmV4cGxldGl2ZVBhY2tldClcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMucGFja2V0UGFkZGluZyA9IF92YWx1ZS5wYWNrZXRQYWRkaW5nO1xuICAgIFNlcnZlclBhY2tldC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGVycm9yKCk6IEVycm9yT25QYWNrZXQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9lcnJvcjtcbiAgfVxuICBzZXQgZXJyb3IodmFsdWU6IEVycm9yT25QYWNrZXQgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fbWVzc2FnZSA9IHRoaXMuX3NlZW4gPSB0aGlzLl9hY3Rpdml0eSA9IHRoaXMuX3Jvb21QcmVzZW5jZVR5cGVDaGFuZ2VkID0gdGhpcy5fbGl2ZUxvY2F0aW9uU3RhdHVzQ2hhbmdlZCA9IHRoaXMuX3BvbmcgPSB0aGlzLl9tZXNzYWdlRGVsaXZlcnlBY2sgPSB0aGlzLl9jYWxsT2ZmZXIgPSB0aGlzLl9jYWxsQW5zd2VyID0gdGhpcy5fY2FsbEV2ZW50ID0gdGhpcy5fZXhwbGV0aXZlUGFja2V0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IFNlcnZlclBhY2tldC5UeXBlQ2FzZS5lcnJvcjtcbiAgICB9XG4gICAgdGhpcy5fZXJyb3IgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbWVzc2FnZSgpOiBwcm90b1B1YlYxTW9kZWxzMDE2Lk1lc3NhZ2UgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9tZXNzYWdlO1xuICB9XG4gIHNldCBtZXNzYWdlKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDE2Lk1lc3NhZ2UgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fZXJyb3IgPSB0aGlzLl9zZWVuID0gdGhpcy5fYWN0aXZpdHkgPSB0aGlzLl9yb29tUHJlc2VuY2VUeXBlQ2hhbmdlZCA9IHRoaXMuX2xpdmVMb2NhdGlvblN0YXR1c0NoYW5nZWQgPSB0aGlzLl9wb25nID0gdGhpcy5fbWVzc2FnZURlbGl2ZXJ5QWNrID0gdGhpcy5fY2FsbE9mZmVyID0gdGhpcy5fY2FsbEFuc3dlciA9IHRoaXMuX2NhbGxFdmVudCA9IHRoaXMuX2V4cGxldGl2ZVBhY2tldCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBTZXJ2ZXJQYWNrZXQuVHlwZUNhc2UubWVzc2FnZTtcbiAgICB9XG4gICAgdGhpcy5fbWVzc2FnZSA9IHZhbHVlO1xuICB9XG4gIGdldCBzZWVuKCk6IHByb3RvUHViVjFNb2RlbHMwMTQuU2VlbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3NlZW47XG4gIH1cbiAgc2V0IHNlZW4odmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMTQuU2VlbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9lcnJvciA9IHRoaXMuX21lc3NhZ2UgPSB0aGlzLl9hY3Rpdml0eSA9IHRoaXMuX3Jvb21QcmVzZW5jZVR5cGVDaGFuZ2VkID0gdGhpcy5fbGl2ZUxvY2F0aW9uU3RhdHVzQ2hhbmdlZCA9IHRoaXMuX3BvbmcgPSB0aGlzLl9tZXNzYWdlRGVsaXZlcnlBY2sgPSB0aGlzLl9jYWxsT2ZmZXIgPSB0aGlzLl9jYWxsQW5zd2VyID0gdGhpcy5fY2FsbEV2ZW50ID0gdGhpcy5fZXhwbGV0aXZlUGFja2V0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IFNlcnZlclBhY2tldC5UeXBlQ2FzZS5zZWVuO1xuICAgIH1cbiAgICB0aGlzLl9zZWVuID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGFjdGl2aXR5KCk6IHByb3RvUHViVjFNb2RlbHMwMTUuQWN0aXZpdHkgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9hY3Rpdml0eTtcbiAgfVxuICBzZXQgYWN0aXZpdHkodmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMTUuQWN0aXZpdHkgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fZXJyb3IgPSB0aGlzLl9tZXNzYWdlID0gdGhpcy5fc2VlbiA9IHRoaXMuX3Jvb21QcmVzZW5jZVR5cGVDaGFuZ2VkID0gdGhpcy5fbGl2ZUxvY2F0aW9uU3RhdHVzQ2hhbmdlZCA9IHRoaXMuX3BvbmcgPSB0aGlzLl9tZXNzYWdlRGVsaXZlcnlBY2sgPSB0aGlzLl9jYWxsT2ZmZXIgPSB0aGlzLl9jYWxsQW5zd2VyID0gdGhpcy5fY2FsbEV2ZW50ID0gdGhpcy5fZXhwbGV0aXZlUGFja2V0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IFNlcnZlclBhY2tldC5UeXBlQ2FzZS5hY3Rpdml0eTtcbiAgICB9XG4gICAgdGhpcy5fYWN0aXZpdHkgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcm9vbVByZXNlbmNlVHlwZUNoYW5nZWQoKTogUm9vbVByZXNlbmNlVHlwZUNoYW5nZWQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9yb29tUHJlc2VuY2VUeXBlQ2hhbmdlZDtcbiAgfVxuICBzZXQgcm9vbVByZXNlbmNlVHlwZUNoYW5nZWQodmFsdWU6IFJvb21QcmVzZW5jZVR5cGVDaGFuZ2VkIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX2Vycm9yID0gdGhpcy5fbWVzc2FnZSA9IHRoaXMuX3NlZW4gPSB0aGlzLl9hY3Rpdml0eSA9IHRoaXMuX2xpdmVMb2NhdGlvblN0YXR1c0NoYW5nZWQgPSB0aGlzLl9wb25nID0gdGhpcy5fbWVzc2FnZURlbGl2ZXJ5QWNrID0gdGhpcy5fY2FsbE9mZmVyID0gdGhpcy5fY2FsbEFuc3dlciA9IHRoaXMuX2NhbGxFdmVudCA9IHRoaXMuX2V4cGxldGl2ZVBhY2tldCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBTZXJ2ZXJQYWNrZXQuVHlwZUNhc2Uucm9vbVByZXNlbmNlVHlwZUNoYW5nZWQ7XG4gICAgfVxuICAgIHRoaXMuX3Jvb21QcmVzZW5jZVR5cGVDaGFuZ2VkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGxpdmVMb2NhdGlvblN0YXR1c0NoYW5nZWQoKTpcbiAgICB8IHByb3RvUHViVjFNb2RlbHMwMDMuTGl2ZUxvY2F0aW9uXG4gICAgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9saXZlTG9jYXRpb25TdGF0dXNDaGFuZ2VkO1xuICB9XG4gIHNldCBsaXZlTG9jYXRpb25TdGF0dXNDaGFuZ2VkKFxuICAgIHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDAzLkxpdmVMb2NhdGlvbiB8IHVuZGVmaW5lZFxuICApIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fZXJyb3IgPSB0aGlzLl9tZXNzYWdlID0gdGhpcy5fc2VlbiA9IHRoaXMuX2FjdGl2aXR5ID0gdGhpcy5fcm9vbVByZXNlbmNlVHlwZUNoYW5nZWQgPSB0aGlzLl9wb25nID0gdGhpcy5fbWVzc2FnZURlbGl2ZXJ5QWNrID0gdGhpcy5fY2FsbE9mZmVyID0gdGhpcy5fY2FsbEFuc3dlciA9IHRoaXMuX2NhbGxFdmVudCA9IHRoaXMuX2V4cGxldGl2ZVBhY2tldCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBTZXJ2ZXJQYWNrZXQuVHlwZUNhc2UubGl2ZUxvY2F0aW9uU3RhdHVzQ2hhbmdlZDtcbiAgICB9XG4gICAgdGhpcy5fbGl2ZUxvY2F0aW9uU3RhdHVzQ2hhbmdlZCA9IHZhbHVlO1xuICB9XG4gIGdldCBwb25nKCk6IFBvbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wb25nO1xuICB9XG4gIHNldCBwb25nKHZhbHVlOiBQb25nIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX2Vycm9yID0gdGhpcy5fbWVzc2FnZSA9IHRoaXMuX3NlZW4gPSB0aGlzLl9hY3Rpdml0eSA9IHRoaXMuX3Jvb21QcmVzZW5jZVR5cGVDaGFuZ2VkID0gdGhpcy5fbGl2ZUxvY2F0aW9uU3RhdHVzQ2hhbmdlZCA9IHRoaXMuX21lc3NhZ2VEZWxpdmVyeUFjayA9IHRoaXMuX2NhbGxPZmZlciA9IHRoaXMuX2NhbGxBbnN3ZXIgPSB0aGlzLl9jYWxsRXZlbnQgPSB0aGlzLl9leHBsZXRpdmVQYWNrZXQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gU2VydmVyUGFja2V0LlR5cGVDYXNlLnBvbmc7XG4gICAgfVxuICAgIHRoaXMuX3BvbmcgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbWVzc2FnZURlbGl2ZXJ5QWNrKCk6IHByb3RvUHViVjFNb2RlbHMwMTYuTWVzc2FnZURlbGl2ZXJ5QWNrIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbWVzc2FnZURlbGl2ZXJ5QWNrO1xuICB9XG4gIHNldCBtZXNzYWdlRGVsaXZlcnlBY2soXG4gICAgdmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMTYuTWVzc2FnZURlbGl2ZXJ5QWNrIHwgdW5kZWZpbmVkXG4gICkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9lcnJvciA9IHRoaXMuX21lc3NhZ2UgPSB0aGlzLl9zZWVuID0gdGhpcy5fYWN0aXZpdHkgPSB0aGlzLl9yb29tUHJlc2VuY2VUeXBlQ2hhbmdlZCA9IHRoaXMuX2xpdmVMb2NhdGlvblN0YXR1c0NoYW5nZWQgPSB0aGlzLl9wb25nID0gdGhpcy5fY2FsbE9mZmVyID0gdGhpcy5fY2FsbEFuc3dlciA9IHRoaXMuX2NhbGxFdmVudCA9IHRoaXMuX2V4cGxldGl2ZVBhY2tldCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBTZXJ2ZXJQYWNrZXQuVHlwZUNhc2UubWVzc2FnZURlbGl2ZXJ5QWNrO1xuICAgIH1cbiAgICB0aGlzLl9tZXNzYWdlRGVsaXZlcnlBY2sgPSB2YWx1ZTtcbiAgfVxuICBnZXQgY2FsbE9mZmVyKCk6IHByb3RvUHViVjFNb2RlbHMwMTAuQ2FsbE9mZmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fY2FsbE9mZmVyO1xuICB9XG4gIHNldCBjYWxsT2ZmZXIodmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMTAuQ2FsbE9mZmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX2Vycm9yID0gdGhpcy5fbWVzc2FnZSA9IHRoaXMuX3NlZW4gPSB0aGlzLl9hY3Rpdml0eSA9IHRoaXMuX3Jvb21QcmVzZW5jZVR5cGVDaGFuZ2VkID0gdGhpcy5fbGl2ZUxvY2F0aW9uU3RhdHVzQ2hhbmdlZCA9IHRoaXMuX3BvbmcgPSB0aGlzLl9tZXNzYWdlRGVsaXZlcnlBY2sgPSB0aGlzLl9jYWxsQW5zd2VyID0gdGhpcy5fY2FsbEV2ZW50ID0gdGhpcy5fZXhwbGV0aXZlUGFja2V0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IFNlcnZlclBhY2tldC5UeXBlQ2FzZS5jYWxsT2ZmZXI7XG4gICAgfVxuICAgIHRoaXMuX2NhbGxPZmZlciA9IHZhbHVlO1xuICB9XG4gIGdldCBjYWxsQW5zd2VyKCk6IHByb3RvUHViVjFNb2RlbHMwMTAuQ2FsbEFuc3dlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2NhbGxBbnN3ZXI7XG4gIH1cbiAgc2V0IGNhbGxBbnN3ZXIodmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMTAuQ2FsbEFuc3dlciB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9lcnJvciA9IHRoaXMuX21lc3NhZ2UgPSB0aGlzLl9zZWVuID0gdGhpcy5fYWN0aXZpdHkgPSB0aGlzLl9yb29tUHJlc2VuY2VUeXBlQ2hhbmdlZCA9IHRoaXMuX2xpdmVMb2NhdGlvblN0YXR1c0NoYW5nZWQgPSB0aGlzLl9wb25nID0gdGhpcy5fbWVzc2FnZURlbGl2ZXJ5QWNrID0gdGhpcy5fY2FsbE9mZmVyID0gdGhpcy5fY2FsbEV2ZW50ID0gdGhpcy5fZXhwbGV0aXZlUGFja2V0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IFNlcnZlclBhY2tldC5UeXBlQ2FzZS5jYWxsQW5zd2VyO1xuICAgIH1cbiAgICB0aGlzLl9jYWxsQW5zd2VyID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGNhbGxFdmVudCgpOiBwcm90b1B1YlYxTW9kZWxzMDEwLkNhbGxFdmVudFYyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fY2FsbEV2ZW50O1xuICB9XG4gIHNldCBjYWxsRXZlbnQodmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMTAuQ2FsbEV2ZW50VjIgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fZXJyb3IgPSB0aGlzLl9tZXNzYWdlID0gdGhpcy5fc2VlbiA9IHRoaXMuX2FjdGl2aXR5ID0gdGhpcy5fcm9vbVByZXNlbmNlVHlwZUNoYW5nZWQgPSB0aGlzLl9saXZlTG9jYXRpb25TdGF0dXNDaGFuZ2VkID0gdGhpcy5fcG9uZyA9IHRoaXMuX21lc3NhZ2VEZWxpdmVyeUFjayA9IHRoaXMuX2NhbGxPZmZlciA9IHRoaXMuX2NhbGxBbnN3ZXIgPSB0aGlzLl9leHBsZXRpdmVQYWNrZXQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gU2VydmVyUGFja2V0LlR5cGVDYXNlLmNhbGxFdmVudDtcbiAgICB9XG4gICAgdGhpcy5fY2FsbEV2ZW50ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGV4cGxldGl2ZVBhY2tldCgpOiBFeHBsZXRpdmVQYWNrZXQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9leHBsZXRpdmVQYWNrZXQ7XG4gIH1cbiAgc2V0IGV4cGxldGl2ZVBhY2tldCh2YWx1ZTogRXhwbGV0aXZlUGFja2V0IHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX2Vycm9yID0gdGhpcy5fbWVzc2FnZSA9IHRoaXMuX3NlZW4gPSB0aGlzLl9hY3Rpdml0eSA9IHRoaXMuX3Jvb21QcmVzZW5jZVR5cGVDaGFuZ2VkID0gdGhpcy5fbGl2ZUxvY2F0aW9uU3RhdHVzQ2hhbmdlZCA9IHRoaXMuX3BvbmcgPSB0aGlzLl9tZXNzYWdlRGVsaXZlcnlBY2sgPSB0aGlzLl9jYWxsT2ZmZXIgPSB0aGlzLl9jYWxsQW5zd2VyID0gdGhpcy5fY2FsbEV2ZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IFNlcnZlclBhY2tldC5UeXBlQ2FzZS5leHBsZXRpdmVQYWNrZXQ7XG4gICAgfVxuICAgIHRoaXMuX2V4cGxldGl2ZVBhY2tldCA9IHZhbHVlO1xuICB9XG4gIGdldCBwYWNrZXRQYWRkaW5nKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3BhY2tldFBhZGRpbmc7XG4gIH1cbiAgc2V0IHBhY2tldFBhZGRpbmcodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3BhY2tldFBhZGRpbmcgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBTZXJ2ZXJQYWNrZXQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogU2VydmVyUGFja2V0LkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgZXJyb3I6IHRoaXMuZXJyb3IgPyB0aGlzLmVycm9yLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2UgPyB0aGlzLm1lc3NhZ2UudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIHNlZW46IHRoaXMuc2VlbiA/IHRoaXMuc2Vlbi50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgYWN0aXZpdHk6IHRoaXMuYWN0aXZpdHkgPyB0aGlzLmFjdGl2aXR5LnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICByb29tUHJlc2VuY2VUeXBlQ2hhbmdlZDogdGhpcy5yb29tUHJlc2VuY2VUeXBlQ2hhbmdlZFxuICAgICAgICA/IHRoaXMucm9vbVByZXNlbmNlVHlwZUNoYW5nZWQudG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIGxpdmVMb2NhdGlvblN0YXR1c0NoYW5nZWQ6IHRoaXMubGl2ZUxvY2F0aW9uU3RhdHVzQ2hhbmdlZFxuICAgICAgICA/IHRoaXMubGl2ZUxvY2F0aW9uU3RhdHVzQ2hhbmdlZC50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgcG9uZzogdGhpcy5wb25nID8gdGhpcy5wb25nLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBtZXNzYWdlRGVsaXZlcnlBY2s6IHRoaXMubWVzc2FnZURlbGl2ZXJ5QWNrXG4gICAgICAgID8gdGhpcy5tZXNzYWdlRGVsaXZlcnlBY2sudG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIGNhbGxPZmZlcjogdGhpcy5jYWxsT2ZmZXIgPyB0aGlzLmNhbGxPZmZlci50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgY2FsbEFuc3dlcjogdGhpcy5jYWxsQW5zd2VyID8gdGhpcy5jYWxsQW5zd2VyLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBjYWxsRXZlbnQ6IHRoaXMuY2FsbEV2ZW50ID8gdGhpcy5jYWxsRXZlbnQudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGV4cGxldGl2ZVBhY2tldDogdGhpcy5leHBsZXRpdmVQYWNrZXRcbiAgICAgICAgPyB0aGlzLmV4cGxldGl2ZVBhY2tldC50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgcGFja2V0UGFkZGluZzogdGhpcy5wYWNrZXRQYWRkaW5nXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogU2VydmVyUGFja2V0LkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgZXJyb3I6IHRoaXMuZXJyb3IgPyB0aGlzLmVycm9yLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZSA/IHRoaXMubWVzc2FnZS50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICBzZWVuOiB0aGlzLnNlZW4gPyB0aGlzLnNlZW4udG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgYWN0aXZpdHk6IHRoaXMuYWN0aXZpdHkgPyB0aGlzLmFjdGl2aXR5LnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIHJvb21QcmVzZW5jZVR5cGVDaGFuZ2VkOiB0aGlzLnJvb21QcmVzZW5jZVR5cGVDaGFuZ2VkXG4gICAgICAgID8gdGhpcy5yb29tUHJlc2VuY2VUeXBlQ2hhbmdlZC50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICBsaXZlTG9jYXRpb25TdGF0dXNDaGFuZ2VkOiB0aGlzLmxpdmVMb2NhdGlvblN0YXR1c0NoYW5nZWRcbiAgICAgICAgPyB0aGlzLmxpdmVMb2NhdGlvblN0YXR1c0NoYW5nZWQudG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsLFxuICAgICAgcG9uZzogdGhpcy5wb25nID8gdGhpcy5wb25nLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIG1lc3NhZ2VEZWxpdmVyeUFjazogdGhpcy5tZXNzYWdlRGVsaXZlcnlBY2tcbiAgICAgICAgPyB0aGlzLm1lc3NhZ2VEZWxpdmVyeUFjay50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICBjYWxsT2ZmZXI6IHRoaXMuY2FsbE9mZmVyID8gdGhpcy5jYWxsT2ZmZXIudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgY2FsbEFuc3dlcjogdGhpcy5jYWxsQW5zd2VyXG4gICAgICAgID8gdGhpcy5jYWxsQW5zd2VyLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbCxcbiAgICAgIGNhbGxFdmVudDogdGhpcy5jYWxsRXZlbnQgPyB0aGlzLmNhbGxFdmVudC50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICBleHBsZXRpdmVQYWNrZXQ6IHRoaXMuZXhwbGV0aXZlUGFja2V0XG4gICAgICAgID8gdGhpcy5leHBsZXRpdmVQYWNrZXQudG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsLFxuICAgICAgcGFja2V0UGFkZGluZzogdGhpcy5wYWNrZXRQYWRkaW5nXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBTZXJ2ZXJQYWNrZXQge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIFNlcnZlclBhY2tldFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgZXJyb3I/OiBFcnJvck9uUGFja2V0LkFzT2JqZWN0O1xuICAgIG1lc3NhZ2U/OiBwcm90b1B1YlYxTW9kZWxzMDE2Lk1lc3NhZ2UuQXNPYmplY3Q7XG4gICAgc2Vlbj86IHByb3RvUHViVjFNb2RlbHMwMTQuU2Vlbi5Bc09iamVjdDtcbiAgICBhY3Rpdml0eT86IHByb3RvUHViVjFNb2RlbHMwMTUuQWN0aXZpdHkuQXNPYmplY3Q7XG4gICAgcm9vbVByZXNlbmNlVHlwZUNoYW5nZWQ/OiBSb29tUHJlc2VuY2VUeXBlQ2hhbmdlZC5Bc09iamVjdDtcbiAgICBsaXZlTG9jYXRpb25TdGF0dXNDaGFuZ2VkPzogcHJvdG9QdWJWMU1vZGVsczAwMy5MaXZlTG9jYXRpb24uQXNPYmplY3Q7XG4gICAgcG9uZz86IFBvbmcuQXNPYmplY3Q7XG4gICAgbWVzc2FnZURlbGl2ZXJ5QWNrPzogcHJvdG9QdWJWMU1vZGVsczAxNi5NZXNzYWdlRGVsaXZlcnlBY2suQXNPYmplY3Q7XG4gICAgY2FsbE9mZmVyPzogcHJvdG9QdWJWMU1vZGVsczAxMC5DYWxsT2ZmZXIuQXNPYmplY3Q7XG4gICAgY2FsbEFuc3dlcj86IHByb3RvUHViVjFNb2RlbHMwMTAuQ2FsbEFuc3dlci5Bc09iamVjdDtcbiAgICBjYWxsRXZlbnQ/OiBwcm90b1B1YlYxTW9kZWxzMDEwLkNhbGxFdmVudFYyLkFzT2JqZWN0O1xuICAgIGV4cGxldGl2ZVBhY2tldD86IEV4cGxldGl2ZVBhY2tldC5Bc09iamVjdDtcbiAgICBwYWNrZXRQYWRkaW5nPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIFNlcnZlclBhY2tldFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgZXJyb3I/OiBFcnJvck9uUGFja2V0LkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBtZXNzYWdlPzogcHJvdG9QdWJWMU1vZGVsczAxNi5NZXNzYWdlLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBzZWVuPzogcHJvdG9QdWJWMU1vZGVsczAxNC5TZWVuLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBhY3Rpdml0eT86IHByb3RvUHViVjFNb2RlbHMwMTUuQWN0aXZpdHkuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHJvb21QcmVzZW5jZVR5cGVDaGFuZ2VkPzogUm9vbVByZXNlbmNlVHlwZUNoYW5nZWQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIGxpdmVMb2NhdGlvblN0YXR1c0NoYW5nZWQ/OiBwcm90b1B1YlYxTW9kZWxzMDAzLkxpdmVMb2NhdGlvbi5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgcG9uZz86IFBvbmcuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIG1lc3NhZ2VEZWxpdmVyeUFjaz86IHByb3RvUHViVjFNb2RlbHMwMTYuTWVzc2FnZURlbGl2ZXJ5QWNrLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBjYWxsT2ZmZXI/OiBwcm90b1B1YlYxTW9kZWxzMDEwLkNhbGxPZmZlci5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgY2FsbEFuc3dlcj86IHByb3RvUHViVjFNb2RlbHMwMTAuQ2FsbEFuc3dlci5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgY2FsbEV2ZW50PzogcHJvdG9QdWJWMU1vZGVsczAxMC5DYWxsRXZlbnRWMi5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgZXhwbGV0aXZlUGFja2V0PzogRXhwbGV0aXZlUGFja2V0LkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBwYWNrZXRQYWRkaW5nPzogc3RyaW5nO1xuICB9XG4gIGV4cG9ydCBlbnVtIFR5cGVDYXNlIHtcbiAgICBub25lID0gMCxcbiAgICBlcnJvciA9IDEsXG4gICAgbWVzc2FnZSA9IDIsXG4gICAgc2VlbiA9IDMsXG4gICAgYWN0aXZpdHkgPSA0LFxuICAgIHJvb21QcmVzZW5jZVR5cGVDaGFuZ2VkID0gNSxcbiAgICBsaXZlTG9jYXRpb25TdGF0dXNDaGFuZ2VkID0gNixcbiAgICBwb25nID0gNyxcbiAgICBtZXNzYWdlRGVsaXZlcnlBY2sgPSA4LFxuICAgIGNhbGxPZmZlciA9IDksXG4gICAgY2FsbEFuc3dlciA9IDEwLFxuICAgIGNhbGxFdmVudCA9IDExLFxuICAgIGV4cGxldGl2ZVBhY2tldCA9IDEyXG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBwcm90by5wdWIudjEuY29yZS5DbGllbnRQYWNrZXRcbiAqL1xuZXhwb3J0IGNsYXNzIENsaWVudFBhY2tldCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ3Byb3RvLnB1Yi52MS5jb3JlLkNsaWVudFBhY2tldCc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IENsaWVudFBhY2tldCgpO1xuICAgIENsaWVudFBhY2tldC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IENsaWVudFBhY2tldCkge1xuICAgIF9pbnN0YW5jZS5pZCA9IF9pbnN0YW5jZS5pZCB8fCAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IENsaWVudFBhY2tldCxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UuaWQgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5tZXNzYWdlID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMTYuTWVzc2FnZUJ5Q2xpZW50KCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5tZXNzYWdlLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxNi5NZXNzYWdlQnlDbGllbnQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIF9pbnN0YW5jZS5zZWVuID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMTQuU2VlbkJ5Q2xpZW50KCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5zZWVuLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxNC5TZWVuQnlDbGllbnQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIF9pbnN0YW5jZS5hY3Rpdml0eSA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDE1LkFjdGl2aXR5QnlDbGllbnQoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmFjdGl2aXR5LFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxNS5BY3Rpdml0eUJ5Q2xpZW50LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBfaW5zdGFuY2UucGluZyA9IG5ldyBQaW5nKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShfaW5zdGFuY2UucGluZywgUGluZy5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgX2luc3RhbmNlLmNhbGxPZmZlciA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDEwLkNhbGxPZmZlckJ5Q2xpZW50KCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5jYWxsT2ZmZXIsXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDEwLkNhbGxPZmZlckJ5Q2xpZW50LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNzpcbiAgICAgICAgICBfaW5zdGFuY2UuY2FsbEFuc3dlciA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDEwLkNhbGxBbnN3ZXJCeUNsaWVudCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuY2FsbEFuc3dlcixcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMTAuQ2FsbEFuc3dlckJ5Q2xpZW50LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgODpcbiAgICAgICAgICBfaW5zdGFuY2UuY2FsbEV2ZW50ID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMTAuQ2FsbEV2ZW50VjJCeUNsaWVudCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuY2FsbEV2ZW50LFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxMC5DYWxsRXZlbnRWMkJ5Q2xpZW50LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgOTpcbiAgICAgICAgICBfaW5zdGFuY2UubG9jYWxDaGF0TWVzc2FnZSA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDE2LkxvY2FsQ2hhdE1lc3NhZ2UoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmxvY2FsQ2hhdE1lc3NhZ2UsXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDE2LkxvY2FsQ2hhdE1lc3NhZ2UuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIENsaWVudFBhY2tldC5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IENsaWVudFBhY2tldCxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5pZCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2UuaWQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLm1lc3NhZ2UpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAyLFxuICAgICAgICBfaW5zdGFuY2UubWVzc2FnZSBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMTYuTWVzc2FnZUJ5Q2xpZW50LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnNlZW4pIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAzLFxuICAgICAgICBfaW5zdGFuY2Uuc2VlbiBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMTQuU2VlbkJ5Q2xpZW50LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmFjdGl2aXR5KSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgNCxcbiAgICAgICAgX2luc3RhbmNlLmFjdGl2aXR5IGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxNS5BY3Rpdml0eUJ5Q2xpZW50LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnBpbmcpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA1LFxuICAgICAgICBfaW5zdGFuY2UucGluZyBhcyBhbnksXG4gICAgICAgIFBpbmcuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuY2FsbE9mZmVyKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgNixcbiAgICAgICAgX2luc3RhbmNlLmNhbGxPZmZlciBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMTAuQ2FsbE9mZmVyQnlDbGllbnQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuY2FsbEFuc3dlcikge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDcsXG4gICAgICAgIF9pbnN0YW5jZS5jYWxsQW5zd2VyIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxMC5DYWxsQW5zd2VyQnlDbGllbnQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuY2FsbEV2ZW50KSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgOCxcbiAgICAgICAgX2luc3RhbmNlLmNhbGxFdmVudCBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMTAuQ2FsbEV2ZW50VjJCeUNsaWVudC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5sb2NhbENoYXRNZXNzYWdlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgOSxcbiAgICAgICAgX2luc3RhbmNlLmxvY2FsQ2hhdE1lc3NhZ2UgYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDE2LkxvY2FsQ2hhdE1lc3NhZ2Uuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaWQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX21lc3NhZ2U/OiBwcm90b1B1YlYxTW9kZWxzMDE2Lk1lc3NhZ2VCeUNsaWVudDtcbiAgcHJpdmF0ZSBfc2Vlbj86IHByb3RvUHViVjFNb2RlbHMwMTQuU2VlbkJ5Q2xpZW50O1xuICBwcml2YXRlIF9hY3Rpdml0eT86IHByb3RvUHViVjFNb2RlbHMwMTUuQWN0aXZpdHlCeUNsaWVudDtcbiAgcHJpdmF0ZSBfcGluZz86IFBpbmc7XG4gIHByaXZhdGUgX2NhbGxPZmZlcj86IHByb3RvUHViVjFNb2RlbHMwMTAuQ2FsbE9mZmVyQnlDbGllbnQ7XG4gIHByaXZhdGUgX2NhbGxBbnN3ZXI/OiBwcm90b1B1YlYxTW9kZWxzMDEwLkNhbGxBbnN3ZXJCeUNsaWVudDtcbiAgcHJpdmF0ZSBfY2FsbEV2ZW50PzogcHJvdG9QdWJWMU1vZGVsczAxMC5DYWxsRXZlbnRWMkJ5Q2xpZW50O1xuICBwcml2YXRlIF9sb2NhbENoYXRNZXNzYWdlPzogcHJvdG9QdWJWMU1vZGVsczAxNi5Mb2NhbENoYXRNZXNzYWdlO1xuXG4gIHByaXZhdGUgX3R5cGU6IENsaWVudFBhY2tldC5UeXBlQ2FzZSA9IENsaWVudFBhY2tldC5UeXBlQ2FzZS5ub25lO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgQ2xpZW50UGFja2V0IHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPENsaWVudFBhY2tldC5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5pZCA9IF92YWx1ZS5pZDtcbiAgICB0aGlzLm1lc3NhZ2UgPSBfdmFsdWUubWVzc2FnZVxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAxNi5NZXNzYWdlQnlDbGllbnQoX3ZhbHVlLm1lc3NhZ2UpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNlZW4gPSBfdmFsdWUuc2VlblxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAxNC5TZWVuQnlDbGllbnQoX3ZhbHVlLnNlZW4pXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmFjdGl2aXR5ID0gX3ZhbHVlLmFjdGl2aXR5XG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDE1LkFjdGl2aXR5QnlDbGllbnQoX3ZhbHVlLmFjdGl2aXR5KVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5waW5nID0gX3ZhbHVlLnBpbmcgPyBuZXcgUGluZyhfdmFsdWUucGluZykgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5jYWxsT2ZmZXIgPSBfdmFsdWUuY2FsbE9mZmVyXG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDEwLkNhbGxPZmZlckJ5Q2xpZW50KF92YWx1ZS5jYWxsT2ZmZXIpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmNhbGxBbnN3ZXIgPSBfdmFsdWUuY2FsbEFuc3dlclxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAxMC5DYWxsQW5zd2VyQnlDbGllbnQoX3ZhbHVlLmNhbGxBbnN3ZXIpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmNhbGxFdmVudCA9IF92YWx1ZS5jYWxsRXZlbnRcbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMTAuQ2FsbEV2ZW50VjJCeUNsaWVudChfdmFsdWUuY2FsbEV2ZW50KVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5sb2NhbENoYXRNZXNzYWdlID0gX3ZhbHVlLmxvY2FsQ2hhdE1lc3NhZ2VcbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMTYuTG9jYWxDaGF0TWVzc2FnZShfdmFsdWUubG9jYWxDaGF0TWVzc2FnZSlcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIENsaWVudFBhY2tldC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGlkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2lkO1xuICB9XG4gIHNldCBpZCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5faWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbWVzc2FnZSgpOiBwcm90b1B1YlYxTW9kZWxzMDE2Lk1lc3NhZ2VCeUNsaWVudCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX21lc3NhZ2U7XG4gIH1cbiAgc2V0IG1lc3NhZ2UodmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMTYuTWVzc2FnZUJ5Q2xpZW50IHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3NlZW4gPSB0aGlzLl9hY3Rpdml0eSA9IHRoaXMuX3BpbmcgPSB0aGlzLl9jYWxsT2ZmZXIgPSB0aGlzLl9jYWxsQW5zd2VyID0gdGhpcy5fY2FsbEV2ZW50ID0gdGhpcy5fbG9jYWxDaGF0TWVzc2FnZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBDbGllbnRQYWNrZXQuVHlwZUNhc2UubWVzc2FnZTtcbiAgICB9XG4gICAgdGhpcy5fbWVzc2FnZSA9IHZhbHVlO1xuICB9XG4gIGdldCBzZWVuKCk6IHByb3RvUHViVjFNb2RlbHMwMTQuU2VlbkJ5Q2xpZW50IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc2VlbjtcbiAgfVxuICBzZXQgc2Vlbih2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAxNC5TZWVuQnlDbGllbnQgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fbWVzc2FnZSA9IHRoaXMuX2FjdGl2aXR5ID0gdGhpcy5fcGluZyA9IHRoaXMuX2NhbGxPZmZlciA9IHRoaXMuX2NhbGxBbnN3ZXIgPSB0aGlzLl9jYWxsRXZlbnQgPSB0aGlzLl9sb2NhbENoYXRNZXNzYWdlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IENsaWVudFBhY2tldC5UeXBlQ2FzZS5zZWVuO1xuICAgIH1cbiAgICB0aGlzLl9zZWVuID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGFjdGl2aXR5KCk6IHByb3RvUHViVjFNb2RlbHMwMTUuQWN0aXZpdHlCeUNsaWVudCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2aXR5O1xuICB9XG4gIHNldCBhY3Rpdml0eSh2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAxNS5BY3Rpdml0eUJ5Q2xpZW50IHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX21lc3NhZ2UgPSB0aGlzLl9zZWVuID0gdGhpcy5fcGluZyA9IHRoaXMuX2NhbGxPZmZlciA9IHRoaXMuX2NhbGxBbnN3ZXIgPSB0aGlzLl9jYWxsRXZlbnQgPSB0aGlzLl9sb2NhbENoYXRNZXNzYWdlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IENsaWVudFBhY2tldC5UeXBlQ2FzZS5hY3Rpdml0eTtcbiAgICB9XG4gICAgdGhpcy5fYWN0aXZpdHkgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcGluZygpOiBQaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcGluZztcbiAgfVxuICBzZXQgcGluZyh2YWx1ZTogUGluZyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9tZXNzYWdlID0gdGhpcy5fc2VlbiA9IHRoaXMuX2FjdGl2aXR5ID0gdGhpcy5fY2FsbE9mZmVyID0gdGhpcy5fY2FsbEFuc3dlciA9IHRoaXMuX2NhbGxFdmVudCA9IHRoaXMuX2xvY2FsQ2hhdE1lc3NhZ2UgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gQ2xpZW50UGFja2V0LlR5cGVDYXNlLnBpbmc7XG4gICAgfVxuICAgIHRoaXMuX3BpbmcgPSB2YWx1ZTtcbiAgfVxuICBnZXQgY2FsbE9mZmVyKCk6IHByb3RvUHViVjFNb2RlbHMwMTAuQ2FsbE9mZmVyQnlDbGllbnQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9jYWxsT2ZmZXI7XG4gIH1cbiAgc2V0IGNhbGxPZmZlcih2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAxMC5DYWxsT2ZmZXJCeUNsaWVudCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9tZXNzYWdlID0gdGhpcy5fc2VlbiA9IHRoaXMuX2FjdGl2aXR5ID0gdGhpcy5fcGluZyA9IHRoaXMuX2NhbGxBbnN3ZXIgPSB0aGlzLl9jYWxsRXZlbnQgPSB0aGlzLl9sb2NhbENoYXRNZXNzYWdlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IENsaWVudFBhY2tldC5UeXBlQ2FzZS5jYWxsT2ZmZXI7XG4gICAgfVxuICAgIHRoaXMuX2NhbGxPZmZlciA9IHZhbHVlO1xuICB9XG4gIGdldCBjYWxsQW5zd2VyKCk6IHByb3RvUHViVjFNb2RlbHMwMTAuQ2FsbEFuc3dlckJ5Q2xpZW50IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fY2FsbEFuc3dlcjtcbiAgfVxuICBzZXQgY2FsbEFuc3dlcih2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAxMC5DYWxsQW5zd2VyQnlDbGllbnQgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fbWVzc2FnZSA9IHRoaXMuX3NlZW4gPSB0aGlzLl9hY3Rpdml0eSA9IHRoaXMuX3BpbmcgPSB0aGlzLl9jYWxsT2ZmZXIgPSB0aGlzLl9jYWxsRXZlbnQgPSB0aGlzLl9sb2NhbENoYXRNZXNzYWdlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IENsaWVudFBhY2tldC5UeXBlQ2FzZS5jYWxsQW5zd2VyO1xuICAgIH1cbiAgICB0aGlzLl9jYWxsQW5zd2VyID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGNhbGxFdmVudCgpOiBwcm90b1B1YlYxTW9kZWxzMDEwLkNhbGxFdmVudFYyQnlDbGllbnQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9jYWxsRXZlbnQ7XG4gIH1cbiAgc2V0IGNhbGxFdmVudCh2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAxMC5DYWxsRXZlbnRWMkJ5Q2xpZW50IHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX21lc3NhZ2UgPSB0aGlzLl9zZWVuID0gdGhpcy5fYWN0aXZpdHkgPSB0aGlzLl9waW5nID0gdGhpcy5fY2FsbE9mZmVyID0gdGhpcy5fY2FsbEFuc3dlciA9IHRoaXMuX2xvY2FsQ2hhdE1lc3NhZ2UgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gQ2xpZW50UGFja2V0LlR5cGVDYXNlLmNhbGxFdmVudDtcbiAgICB9XG4gICAgdGhpcy5fY2FsbEV2ZW50ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGxvY2FsQ2hhdE1lc3NhZ2UoKTogcHJvdG9QdWJWMU1vZGVsczAxNi5Mb2NhbENoYXRNZXNzYWdlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbG9jYWxDaGF0TWVzc2FnZTtcbiAgfVxuICBzZXQgbG9jYWxDaGF0TWVzc2FnZShcbiAgICB2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAxNi5Mb2NhbENoYXRNZXNzYWdlIHwgdW5kZWZpbmVkXG4gICkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9tZXNzYWdlID0gdGhpcy5fc2VlbiA9IHRoaXMuX2FjdGl2aXR5ID0gdGhpcy5fcGluZyA9IHRoaXMuX2NhbGxPZmZlciA9IHRoaXMuX2NhbGxBbnN3ZXIgPSB0aGlzLl9jYWxsRXZlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gQ2xpZW50UGFja2V0LlR5cGVDYXNlLmxvY2FsQ2hhdE1lc3NhZ2U7XG4gICAgfVxuICAgIHRoaXMuX2xvY2FsQ2hhdE1lc3NhZ2UgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBDbGllbnRQYWNrZXQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogQ2xpZW50UGFja2V0LkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2UgPyB0aGlzLm1lc3NhZ2UudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIHNlZW46IHRoaXMuc2VlbiA/IHRoaXMuc2Vlbi50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgYWN0aXZpdHk6IHRoaXMuYWN0aXZpdHkgPyB0aGlzLmFjdGl2aXR5LnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBwaW5nOiB0aGlzLnBpbmcgPyB0aGlzLnBpbmcudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGNhbGxPZmZlcjogdGhpcy5jYWxsT2ZmZXIgPyB0aGlzLmNhbGxPZmZlci50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgY2FsbEFuc3dlcjogdGhpcy5jYWxsQW5zd2VyID8gdGhpcy5jYWxsQW5zd2VyLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBjYWxsRXZlbnQ6IHRoaXMuY2FsbEV2ZW50ID8gdGhpcy5jYWxsRXZlbnQudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGxvY2FsQ2hhdE1lc3NhZ2U6IHRoaXMubG9jYWxDaGF0TWVzc2FnZVxuICAgICAgICA/IHRoaXMubG9jYWxDaGF0TWVzc2FnZS50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogQ2xpZW50UGFja2V0LkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2UgPyB0aGlzLm1lc3NhZ2UudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgc2VlbjogdGhpcy5zZWVuID8gdGhpcy5zZWVuLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIGFjdGl2aXR5OiB0aGlzLmFjdGl2aXR5ID8gdGhpcy5hY3Rpdml0eS50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICBwaW5nOiB0aGlzLnBpbmcgPyB0aGlzLnBpbmcudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgY2FsbE9mZmVyOiB0aGlzLmNhbGxPZmZlciA/IHRoaXMuY2FsbE9mZmVyLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIGNhbGxBbnN3ZXI6IHRoaXMuY2FsbEFuc3dlclxuICAgICAgICA/IHRoaXMuY2FsbEFuc3dlci50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICBjYWxsRXZlbnQ6IHRoaXMuY2FsbEV2ZW50ID8gdGhpcy5jYWxsRXZlbnQudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgbG9jYWxDaGF0TWVzc2FnZTogdGhpcy5sb2NhbENoYXRNZXNzYWdlXG4gICAgICAgID8gdGhpcy5sb2NhbENoYXRNZXNzYWdlLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbFxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgQ2xpZW50UGFja2V0IHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBDbGllbnRQYWNrZXRcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIGlkPzogc3RyaW5nO1xuICAgIG1lc3NhZ2U/OiBwcm90b1B1YlYxTW9kZWxzMDE2Lk1lc3NhZ2VCeUNsaWVudC5Bc09iamVjdDtcbiAgICBzZWVuPzogcHJvdG9QdWJWMU1vZGVsczAxNC5TZWVuQnlDbGllbnQuQXNPYmplY3Q7XG4gICAgYWN0aXZpdHk/OiBwcm90b1B1YlYxTW9kZWxzMDE1LkFjdGl2aXR5QnlDbGllbnQuQXNPYmplY3Q7XG4gICAgcGluZz86IFBpbmcuQXNPYmplY3Q7XG4gICAgY2FsbE9mZmVyPzogcHJvdG9QdWJWMU1vZGVsczAxMC5DYWxsT2ZmZXJCeUNsaWVudC5Bc09iamVjdDtcbiAgICBjYWxsQW5zd2VyPzogcHJvdG9QdWJWMU1vZGVsczAxMC5DYWxsQW5zd2VyQnlDbGllbnQuQXNPYmplY3Q7XG4gICAgY2FsbEV2ZW50PzogcHJvdG9QdWJWMU1vZGVsczAxMC5DYWxsRXZlbnRWMkJ5Q2xpZW50LkFzT2JqZWN0O1xuICAgIGxvY2FsQ2hhdE1lc3NhZ2U/OiBwcm90b1B1YlYxTW9kZWxzMDE2LkxvY2FsQ2hhdE1lc3NhZ2UuQXNPYmplY3Q7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgQ2xpZW50UGFja2V0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBpZD86IHN0cmluZztcbiAgICBtZXNzYWdlPzogcHJvdG9QdWJWMU1vZGVsczAxNi5NZXNzYWdlQnlDbGllbnQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHNlZW4/OiBwcm90b1B1YlYxTW9kZWxzMDE0LlNlZW5CeUNsaWVudC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgYWN0aXZpdHk/OiBwcm90b1B1YlYxTW9kZWxzMDE1LkFjdGl2aXR5QnlDbGllbnQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHBpbmc/OiBQaW5nLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBjYWxsT2ZmZXI/OiBwcm90b1B1YlYxTW9kZWxzMDEwLkNhbGxPZmZlckJ5Q2xpZW50LkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBjYWxsQW5zd2VyPzogcHJvdG9QdWJWMU1vZGVsczAxMC5DYWxsQW5zd2VyQnlDbGllbnQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIGNhbGxFdmVudD86IHByb3RvUHViVjFNb2RlbHMwMTAuQ2FsbEV2ZW50VjJCeUNsaWVudC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgbG9jYWxDaGF0TWVzc2FnZT86IHByb3RvUHViVjFNb2RlbHMwMTYuTG9jYWxDaGF0TWVzc2FnZS5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gIH1cbiAgZXhwb3J0IGVudW0gVHlwZUNhc2Uge1xuICAgIG5vbmUgPSAwLFxuICAgIG1lc3NhZ2UgPSAxLFxuICAgIHNlZW4gPSAyLFxuICAgIGFjdGl2aXR5ID0gMyxcbiAgICBwaW5nID0gNCxcbiAgICBjYWxsT2ZmZXIgPSA1LFxuICAgIGNhbGxBbnN3ZXIgPSA2LFxuICAgIGNhbGxFdmVudCA9IDcsXG4gICAgbG9jYWxDaGF0TWVzc2FnZSA9IDhcbiAgfVxufVxuIl19