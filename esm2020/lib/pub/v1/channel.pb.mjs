import { BinaryReader, BinaryWriter } from 'google-protobuf';
import * as protoPubV1Models001 from '../../pub/v1/models/uid.pb';
import * as protoPubV1Models002 from '../../pub/v1/models/muc.pb';
export var ChannelType;
(function (ChannelType) {
    ChannelType[ChannelType["PRIVATE"] = 0] = "PRIVATE";
    ChannelType[ChannelType["PUBLIC"] = 1] = "PUBLIC";
})(ChannelType || (ChannelType = {}));
/**
 * Message implementation for proto.pub.v1.channel.ChannelInfo
 */
export class ChannelInfo {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ChannelInfo to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.name = _value.name;
        this.info = _value.info;
        this.type = _value.type;
        this.id = _value.id;
        this.lastUpdatedTime = _value.lastUpdatedTime;
        ChannelInfo.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ChannelInfo();
        ChannelInfo.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.name = _instance.name || '';
        _instance.info = _instance.info || '';
        _instance.type = _instance.type || 0;
        _instance.id = _instance.id || '';
        _instance.lastUpdatedTime = _instance.lastUpdatedTime || '0';
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
                    _instance.name = _reader.readString();
                    break;
                case 2:
                    _instance.info = _reader.readString();
                    break;
                case 3:
                    _instance.type = _reader.readEnum();
                    break;
                case 4:
                    _instance.id = _reader.readString();
                    break;
                case 5:
                    _instance.lastUpdatedTime = _reader.readInt64String();
                    break;
                default:
                    _reader.skipField();
            }
        }
        ChannelInfo.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.name) {
            _writer.writeString(1, _instance.name);
        }
        if (_instance.info) {
            _writer.writeString(2, _instance.info);
        }
        if (_instance.type) {
            _writer.writeEnum(3, _instance.type);
        }
        if (_instance.id) {
            _writer.writeString(4, _instance.id);
        }
        if (_instance.lastUpdatedTime) {
            _writer.writeInt64String(5, _instance.lastUpdatedTime);
        }
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get info() {
        return this._info;
    }
    set info(value) {
        this._info = value;
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get lastUpdatedTime() {
        return this._lastUpdatedTime;
    }
    set lastUpdatedTime(value) {
        this._lastUpdatedTime = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        ChannelInfo.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            name: this.name,
            info: this.info,
            type: this.type,
            id: this.id,
            lastUpdatedTime: this.lastUpdatedTime
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
            name: this.name,
            info: this.info,
            type: ChannelType[this.type === null || this.type === undefined ? 0 : this.type],
            id: this.id,
            lastUpdatedTime: this.lastUpdatedTime
        };
    }
}
ChannelInfo.id = 'proto.pub.v1.channel.ChannelInfo';
/**
 * Message implementation for proto.pub.v1.channel.CreateChannelReq
 */
export class CreateChannelReq {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CreateChannelReq to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.id = _value.id;
        this.name = _value.name;
        this.info = _value.info;
        this.type = _value.type;
        CreateChannelReq.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new CreateChannelReq();
        CreateChannelReq.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.id = _instance.id || '';
        _instance.name = _instance.name || '';
        _instance.info = _instance.info || '';
        _instance.type = _instance.type || 0;
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
                    _instance.name = _reader.readString();
                    break;
                case 3:
                    _instance.info = _reader.readString();
                    break;
                case 4:
                    _instance.type = _reader.readEnum();
                    break;
                default:
                    _reader.skipField();
            }
        }
        CreateChannelReq.refineValues(_instance);
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
        if (_instance.name) {
            _writer.writeString(2, _instance.name);
        }
        if (_instance.info) {
            _writer.writeString(3, _instance.info);
        }
        if (_instance.type) {
            _writer.writeEnum(4, _instance.type);
        }
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get info() {
        return this._info;
    }
    set info(value) {
        this._info = value;
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        CreateChannelReq.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            id: this.id,
            name: this.name,
            info: this.info,
            type: this.type
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
            name: this.name,
            info: this.info,
            type: ChannelType[this.type === null || this.type === undefined ? 0 : this.type]
        };
    }
}
CreateChannelReq.id = 'proto.pub.v1.channel.CreateChannelReq';
/**
 * Message implementation for proto.pub.v1.channel.CreateChannelRes
 */
export class CreateChannelRes {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CreateChannelRes to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.uid = _value.uid ? new protoPubV1Models001.Uid(_value.uid) : undefined;
        CreateChannelRes.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new CreateChannelRes();
        CreateChannelRes.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.uid = _instance.uid || undefined;
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
                    _instance.uid = new protoPubV1Models001.Uid();
                    _reader.readMessage(_instance.uid, protoPubV1Models001.Uid.deserializeBinaryFromReader);
                    break;
                default:
                    _reader.skipField();
            }
        }
        CreateChannelRes.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.uid) {
            _writer.writeMessage(1, _instance.uid, protoPubV1Models001.Uid.serializeBinaryToWriter);
        }
    }
    get uid() {
        return this._uid;
    }
    set uid(value) {
        this._uid = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        CreateChannelRes.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            uid: this.uid ? this.uid.toObject() : undefined
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
            uid: this.uid ? this.uid.toProtobufJSON(options) : null
        };
    }
}
CreateChannelRes.id = 'proto.pub.v1.channel.CreateChannelRes';
/**
 * Message implementation for proto.pub.v1.channel.ModifyChannelReq
 */
export class ModifyChannelReq {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ModifyChannelReq to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.uid = _value.uid ? new protoPubV1Models001.Uid(_value.uid) : undefined;
        this.info = _value.info ? new ChannelInfo(_value.info) : undefined;
        ModifyChannelReq.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ModifyChannelReq();
        ModifyChannelReq.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.uid = _instance.uid || undefined;
        _instance.info = _instance.info || undefined;
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
                    _instance.uid = new protoPubV1Models001.Uid();
                    _reader.readMessage(_instance.uid, protoPubV1Models001.Uid.deserializeBinaryFromReader);
                    break;
                case 2:
                    _instance.info = new ChannelInfo();
                    _reader.readMessage(_instance.info, ChannelInfo.deserializeBinaryFromReader);
                    break;
                default:
                    _reader.skipField();
            }
        }
        ModifyChannelReq.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.uid) {
            _writer.writeMessage(1, _instance.uid, protoPubV1Models001.Uid.serializeBinaryToWriter);
        }
        if (_instance.info) {
            _writer.writeMessage(2, _instance.info, ChannelInfo.serializeBinaryToWriter);
        }
    }
    get uid() {
        return this._uid;
    }
    set uid(value) {
        this._uid = value;
    }
    get info() {
        return this._info;
    }
    set info(value) {
        this._info = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        ModifyChannelReq.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            uid: this.uid ? this.uid.toObject() : undefined,
            info: this.info ? this.info.toObject() : undefined
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
            info: this.info ? this.info.toProtobufJSON(options) : null
        };
    }
}
ModifyChannelReq.id = 'proto.pub.v1.channel.ModifyChannelReq';
/**
 * Message implementation for proto.pub.v1.channel.ModifyChannelRes
 */
export class ModifyChannelRes {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ModifyChannelRes to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        ModifyChannelRes.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ModifyChannelRes();
        ModifyChannelRes.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
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
        ModifyChannelRes.refineValues(_instance);
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
        ModifyChannelRes.serializeBinaryToWriter(this, writer);
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
ModifyChannelRes.id = 'proto.pub.v1.channel.ModifyChannelRes';
/**
 * Message implementation for proto.pub.v1.channel.ChangeRoleReq
 */
export class ChangeRoleReq {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ChangeRoleReq to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.channel = _value.channel
            ? new protoPubV1Models001.Uid(_value.channel)
            : undefined;
        this.member = _value.member
            ? new protoPubV1Models002.Member(_value.member)
            : undefined;
        ChangeRoleReq.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ChangeRoleReq();
        ChangeRoleReq.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.channel = _instance.channel || undefined;
        _instance.member = _instance.member || undefined;
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
                    _instance.channel = new protoPubV1Models001.Uid();
                    _reader.readMessage(_instance.channel, protoPubV1Models001.Uid.deserializeBinaryFromReader);
                    break;
                case 2:
                    _instance.member = new protoPubV1Models002.Member();
                    _reader.readMessage(_instance.member, protoPubV1Models002.Member.deserializeBinaryFromReader);
                    break;
                default:
                    _reader.skipField();
            }
        }
        ChangeRoleReq.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.channel) {
            _writer.writeMessage(1, _instance.channel, protoPubV1Models001.Uid.serializeBinaryToWriter);
        }
        if (_instance.member) {
            _writer.writeMessage(2, _instance.member, protoPubV1Models002.Member.serializeBinaryToWriter);
        }
    }
    get channel() {
        return this._channel;
    }
    set channel(value) {
        this._channel = value;
    }
    get member() {
        return this._member;
    }
    set member(value) {
        this._member = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        ChangeRoleReq.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            channel: this.channel ? this.channel.toObject() : undefined,
            member: this.member ? this.member.toObject() : undefined
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
            channel: this.channel ? this.channel.toProtobufJSON(options) : null,
            member: this.member ? this.member.toProtobufJSON(options) : null
        };
    }
}
ChangeRoleReq.id = 'proto.pub.v1.channel.ChangeRoleReq';
/**
 * Message implementation for proto.pub.v1.channel.ChangeRoleRes
 */
export class ChangeRoleRes {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ChangeRoleRes to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        ChangeRoleRes.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ChangeRoleRes();
        ChangeRoleRes.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
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
        ChangeRoleRes.refineValues(_instance);
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
        ChangeRoleRes.serializeBinaryToWriter(this, writer);
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
ChangeRoleRes.id = 'proto.pub.v1.channel.ChangeRoleRes';
/**
 * Message implementation for proto.pub.v1.channel.RemoveChannelReq
 */
export class RemoveChannelReq {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of RemoveChannelReq to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.uid = _value.uid ? new protoPubV1Models001.Uid(_value.uid) : undefined;
        RemoveChannelReq.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new RemoveChannelReq();
        RemoveChannelReq.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.uid = _instance.uid || undefined;
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
                    _instance.uid = new protoPubV1Models001.Uid();
                    _reader.readMessage(_instance.uid, protoPubV1Models001.Uid.deserializeBinaryFromReader);
                    break;
                default:
                    _reader.skipField();
            }
        }
        RemoveChannelReq.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.uid) {
            _writer.writeMessage(1, _instance.uid, protoPubV1Models001.Uid.serializeBinaryToWriter);
        }
    }
    get uid() {
        return this._uid;
    }
    set uid(value) {
        this._uid = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        RemoveChannelReq.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            uid: this.uid ? this.uid.toObject() : undefined
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
            uid: this.uid ? this.uid.toProtobufJSON(options) : null
        };
    }
}
RemoveChannelReq.id = 'proto.pub.v1.channel.RemoveChannelReq';
/**
 * Message implementation for proto.pub.v1.channel.RemoveChannelRes
 */
export class RemoveChannelRes {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of RemoveChannelRes to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        RemoveChannelRes.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new RemoveChannelRes();
        RemoveChannelRes.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
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
        RemoveChannelRes.refineValues(_instance);
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
        RemoveChannelRes.serializeBinaryToWriter(this, writer);
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
RemoveChannelRes.id = 'proto.pub.v1.channel.RemoveChannelRes';
/**
 * Message implementation for proto.pub.v1.channel.AddMembersReq
 */
export class AddMembersReq {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of AddMembersReq to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.channel = _value.channel
            ? new protoPubV1Models001.Uid(_value.channel)
            : undefined;
        this.members = (_value.members || []).map(m => new protoPubV1Models002.Member(m));
        AddMembersReq.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new AddMembersReq();
        AddMembersReq.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.channel = _instance.channel || undefined;
        _instance.members = _instance.members || [];
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
                    _instance.channel = new protoPubV1Models001.Uid();
                    _reader.readMessage(_instance.channel, protoPubV1Models001.Uid.deserializeBinaryFromReader);
                    break;
                case 2:
                    const messageInitializer2 = new protoPubV1Models002.Member();
                    _reader.readMessage(messageInitializer2, protoPubV1Models002.Member.deserializeBinaryFromReader);
                    (_instance.members = _instance.members || []).push(messageInitializer2);
                    break;
                default:
                    _reader.skipField();
            }
        }
        AddMembersReq.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.channel) {
            _writer.writeMessage(1, _instance.channel, protoPubV1Models001.Uid.serializeBinaryToWriter);
        }
        if (_instance.members && _instance.members.length) {
            _writer.writeRepeatedMessage(2, _instance.members, protoPubV1Models002.Member.serializeBinaryToWriter);
        }
    }
    get channel() {
        return this._channel;
    }
    set channel(value) {
        this._channel = value;
    }
    get members() {
        return this._members;
    }
    set members(value) {
        this._members = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        AddMembersReq.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            channel: this.channel ? this.channel.toObject() : undefined,
            members: (this.members || []).map(m => m.toObject())
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
            channel: this.channel ? this.channel.toProtobufJSON(options) : null,
            members: (this.members || []).map(m => m.toProtobufJSON(options))
        };
    }
}
AddMembersReq.id = 'proto.pub.v1.channel.AddMembersReq';
/**
 * Message implementation for proto.pub.v1.channel.AddMemberToLocalMuc
 */
export class AddMemberToLocalMuc {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of AddMemberToLocalMuc to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.mucUid = _value.mucUid
            ? new protoPubV1Models001.Uid(_value.mucUid)
            : undefined;
        this.oldMembers = (_value.oldMembers || []).map(m => new protoPubV1Models002.Member(m));
        this.newMembers = (_value.newMembers || []).map(m => new protoPubV1Models002.Member(m));
        this.name = _value.name;
        this.issuer = _value.issuer
            ? new protoPubV1Models002.Member(_value.issuer)
            : undefined;
        this.lastMessageId = _value.lastMessageId;
        AddMemberToLocalMuc.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new AddMemberToLocalMuc();
        AddMemberToLocalMuc.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.mucUid = _instance.mucUid || undefined;
        _instance.oldMembers = _instance.oldMembers || [];
        _instance.newMembers = _instance.newMembers || [];
        _instance.name = _instance.name || '';
        _instance.issuer = _instance.issuer || undefined;
        _instance.lastMessageId = _instance.lastMessageId || '0';
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
                    _instance.mucUid = new protoPubV1Models001.Uid();
                    _reader.readMessage(_instance.mucUid, protoPubV1Models001.Uid.deserializeBinaryFromReader);
                    break;
                case 2:
                    const messageInitializer2 = new protoPubV1Models002.Member();
                    _reader.readMessage(messageInitializer2, protoPubV1Models002.Member.deserializeBinaryFromReader);
                    (_instance.oldMembers = _instance.oldMembers || []).push(messageInitializer2);
                    break;
                case 3:
                    const messageInitializer3 = new protoPubV1Models002.Member();
                    _reader.readMessage(messageInitializer3, protoPubV1Models002.Member.deserializeBinaryFromReader);
                    (_instance.newMembers = _instance.newMembers || []).push(messageInitializer3);
                    break;
                case 4:
                    _instance.name = _reader.readString();
                    break;
                case 5:
                    _instance.issuer = new protoPubV1Models002.Member();
                    _reader.readMessage(_instance.issuer, protoPubV1Models002.Member.deserializeBinaryFromReader);
                    break;
                case 6:
                    _instance.lastMessageId = _reader.readInt64String();
                    break;
                default:
                    _reader.skipField();
            }
        }
        AddMemberToLocalMuc.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.mucUid) {
            _writer.writeMessage(1, _instance.mucUid, protoPubV1Models001.Uid.serializeBinaryToWriter);
        }
        if (_instance.oldMembers && _instance.oldMembers.length) {
            _writer.writeRepeatedMessage(2, _instance.oldMembers, protoPubV1Models002.Member.serializeBinaryToWriter);
        }
        if (_instance.newMembers && _instance.newMembers.length) {
            _writer.writeRepeatedMessage(3, _instance.newMembers, protoPubV1Models002.Member.serializeBinaryToWriter);
        }
        if (_instance.name) {
            _writer.writeString(4, _instance.name);
        }
        if (_instance.issuer) {
            _writer.writeMessage(5, _instance.issuer, protoPubV1Models002.Member.serializeBinaryToWriter);
        }
        if (_instance.lastMessageId) {
            _writer.writeInt64String(6, _instance.lastMessageId);
        }
    }
    get mucUid() {
        return this._mucUid;
    }
    set mucUid(value) {
        this._mucUid = value;
    }
    get oldMembers() {
        return this._oldMembers;
    }
    set oldMembers(value) {
        this._oldMembers = value;
    }
    get newMembers() {
        return this._newMembers;
    }
    set newMembers(value) {
        this._newMembers = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get issuer() {
        return this._issuer;
    }
    set issuer(value) {
        this._issuer = value;
    }
    get lastMessageId() {
        return this._lastMessageId;
    }
    set lastMessageId(value) {
        this._lastMessageId = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        AddMemberToLocalMuc.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            mucUid: this.mucUid ? this.mucUid.toObject() : undefined,
            oldMembers: (this.oldMembers || []).map(m => m.toObject()),
            newMembers: (this.newMembers || []).map(m => m.toObject()),
            name: this.name,
            issuer: this.issuer ? this.issuer.toObject() : undefined,
            lastMessageId: this.lastMessageId
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
            mucUid: this.mucUid ? this.mucUid.toProtobufJSON(options) : null,
            oldMembers: (this.oldMembers || []).map(m => m.toProtobufJSON(options)),
            newMembers: (this.newMembers || []).map(m => m.toProtobufJSON(options)),
            name: this.name,
            issuer: this.issuer ? this.issuer.toProtobufJSON(options) : null,
            lastMessageId: this.lastMessageId
        };
    }
}
AddMemberToLocalMuc.id = 'proto.pub.v1.channel.AddMemberToLocalMuc';
/**
 * Message implementation for proto.pub.v1.channel.AddMembersRes
 */
export class AddMembersRes {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of AddMembersRes to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        AddMembersRes.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new AddMembersRes();
        AddMembersRes.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
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
        AddMembersRes.refineValues(_instance);
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
        AddMembersRes.serializeBinaryToWriter(this, writer);
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
AddMembersRes.id = 'proto.pub.v1.channel.AddMembersRes';
/**
 * Message implementation for proto.pub.v1.channel.KickMembersReq
 */
export class KickMembersReq {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of KickMembersReq to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.channel = _value.channel
            ? new protoPubV1Models001.Uid(_value.channel)
            : undefined;
        this.members = (_value.members || []).map(m => new protoPubV1Models001.Uid(m));
        KickMembersReq.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new KickMembersReq();
        KickMembersReq.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.channel = _instance.channel || undefined;
        _instance.members = _instance.members || [];
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
                    _instance.channel = new protoPubV1Models001.Uid();
                    _reader.readMessage(_instance.channel, protoPubV1Models001.Uid.deserializeBinaryFromReader);
                    break;
                case 2:
                    const messageInitializer2 = new protoPubV1Models001.Uid();
                    _reader.readMessage(messageInitializer2, protoPubV1Models001.Uid.deserializeBinaryFromReader);
                    (_instance.members = _instance.members || []).push(messageInitializer2);
                    break;
                default:
                    _reader.skipField();
            }
        }
        KickMembersReq.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.channel) {
            _writer.writeMessage(1, _instance.channel, protoPubV1Models001.Uid.serializeBinaryToWriter);
        }
        if (_instance.members && _instance.members.length) {
            _writer.writeRepeatedMessage(2, _instance.members, protoPubV1Models001.Uid.serializeBinaryToWriter);
        }
    }
    get channel() {
        return this._channel;
    }
    set channel(value) {
        this._channel = value;
    }
    get members() {
        return this._members;
    }
    set members(value) {
        this._members = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        KickMembersReq.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            channel: this.channel ? this.channel.toObject() : undefined,
            members: (this.members || []).map(m => m.toObject())
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
            channel: this.channel ? this.channel.toProtobufJSON(options) : null,
            members: (this.members || []).map(m => m.toProtobufJSON(options))
        };
    }
}
KickMembersReq.id = 'proto.pub.v1.channel.KickMembersReq';
/**
 * Message implementation for proto.pub.v1.channel.KickMembersRes
 */
export class KickMembersRes {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of KickMembersRes to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        KickMembersRes.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new KickMembersRes();
        KickMembersRes.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
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
        KickMembersRes.refineValues(_instance);
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
        KickMembersRes.serializeBinaryToWriter(this, writer);
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
KickMembersRes.id = 'proto.pub.v1.channel.KickMembersRes';
/**
 * Message implementation for proto.pub.v1.channel.BanMemberReq
 */
export class BanMemberReq {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of BanMemberReq to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.channel = _value.channel
            ? new protoPubV1Models001.Uid(_value.channel)
            : undefined;
        this.member = _value.member
            ? new protoPubV1Models001.Uid(_value.member)
            : undefined;
        BanMemberReq.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new BanMemberReq();
        BanMemberReq.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.channel = _instance.channel || undefined;
        _instance.member = _instance.member || undefined;
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
                    _instance.channel = new protoPubV1Models001.Uid();
                    _reader.readMessage(_instance.channel, protoPubV1Models001.Uid.deserializeBinaryFromReader);
                    break;
                case 2:
                    _instance.member = new protoPubV1Models001.Uid();
                    _reader.readMessage(_instance.member, protoPubV1Models001.Uid.deserializeBinaryFromReader);
                    break;
                default:
                    _reader.skipField();
            }
        }
        BanMemberReq.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.channel) {
            _writer.writeMessage(1, _instance.channel, protoPubV1Models001.Uid.serializeBinaryToWriter);
        }
        if (_instance.member) {
            _writer.writeMessage(2, _instance.member, protoPubV1Models001.Uid.serializeBinaryToWriter);
        }
    }
    get channel() {
        return this._channel;
    }
    set channel(value) {
        this._channel = value;
    }
    get member() {
        return this._member;
    }
    set member(value) {
        this._member = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        BanMemberReq.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            channel: this.channel ? this.channel.toObject() : undefined,
            member: this.member ? this.member.toObject() : undefined
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
            channel: this.channel ? this.channel.toProtobufJSON(options) : null,
            member: this.member ? this.member.toProtobufJSON(options) : null
        };
    }
}
BanMemberReq.id = 'proto.pub.v1.channel.BanMemberReq';
/**
 * Message implementation for proto.pub.v1.channel.BanMemberRes
 */
export class BanMemberRes {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of BanMemberRes to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        BanMemberRes.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new BanMemberRes();
        BanMemberRes.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
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
        BanMemberRes.refineValues(_instance);
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
        BanMemberRes.serializeBinaryToWriter(this, writer);
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
BanMemberRes.id = 'proto.pub.v1.channel.BanMemberRes';
/**
 * Message implementation for proto.pub.v1.channel.UnbanMemberReq
 */
export class UnbanMemberReq {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of UnbanMemberReq to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.channel = _value.channel
            ? new protoPubV1Models001.Uid(_value.channel)
            : undefined;
        this.member = _value.member
            ? new protoPubV1Models001.Uid(_value.member)
            : undefined;
        UnbanMemberReq.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new UnbanMemberReq();
        UnbanMemberReq.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.channel = _instance.channel || undefined;
        _instance.member = _instance.member || undefined;
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
                    _instance.channel = new protoPubV1Models001.Uid();
                    _reader.readMessage(_instance.channel, protoPubV1Models001.Uid.deserializeBinaryFromReader);
                    break;
                case 2:
                    _instance.member = new protoPubV1Models001.Uid();
                    _reader.readMessage(_instance.member, protoPubV1Models001.Uid.deserializeBinaryFromReader);
                    break;
                default:
                    _reader.skipField();
            }
        }
        UnbanMemberReq.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.channel) {
            _writer.writeMessage(1, _instance.channel, protoPubV1Models001.Uid.serializeBinaryToWriter);
        }
        if (_instance.member) {
            _writer.writeMessage(2, _instance.member, protoPubV1Models001.Uid.serializeBinaryToWriter);
        }
    }
    get channel() {
        return this._channel;
    }
    set channel(value) {
        this._channel = value;
    }
    get member() {
        return this._member;
    }
    set member(value) {
        this._member = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        UnbanMemberReq.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            channel: this.channel ? this.channel.toObject() : undefined,
            member: this.member ? this.member.toObject() : undefined
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
            channel: this.channel ? this.channel.toProtobufJSON(options) : null,
            member: this.member ? this.member.toProtobufJSON(options) : null
        };
    }
}
UnbanMemberReq.id = 'proto.pub.v1.channel.UnbanMemberReq';
/**
 * Message implementation for proto.pub.v1.channel.UnbanMemberRes
 */
export class UnbanMemberRes {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of UnbanMemberRes to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        UnbanMemberRes.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new UnbanMemberRes();
        UnbanMemberRes.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
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
        UnbanMemberRes.refineValues(_instance);
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
        UnbanMemberRes.serializeBinaryToWriter(this, writer);
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
UnbanMemberRes.id = 'proto.pub.v1.channel.UnbanMemberRes';
/**
 * Message implementation for proto.pub.v1.channel.GetChannelReq
 */
export class GetChannelReq {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetChannelReq to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.uid = _value.uid ? new protoPubV1Models001.Uid(_value.uid) : undefined;
        this.token = _value.token;
        GetChannelReq.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new GetChannelReq();
        GetChannelReq.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.uid = _instance.uid || undefined;
        _instance.token = _instance.token || '';
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
                    _instance.uid = new protoPubV1Models001.Uid();
                    _reader.readMessage(_instance.uid, protoPubV1Models001.Uid.deserializeBinaryFromReader);
                    break;
                case 2:
                    _instance.token = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        GetChannelReq.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.uid) {
            _writer.writeMessage(1, _instance.uid, protoPubV1Models001.Uid.serializeBinaryToWriter);
        }
        if (_instance.token) {
            _writer.writeString(2, _instance.token);
        }
    }
    get uid() {
        return this._uid;
    }
    set uid(value) {
        this._uid = value;
    }
    get token() {
        return this._token;
    }
    set token(value) {
        this._token = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        GetChannelReq.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            uid: this.uid ? this.uid.toObject() : undefined,
            token: this.token
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
            token: this.token
        };
    }
}
GetChannelReq.id = 'proto.pub.v1.channel.GetChannelReq';
/**
 * Message implementation for proto.pub.v1.channel.GetChannelRes
 */
export class GetChannelRes {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetChannelRes to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.info = _value.info ? new ChannelInfo(_value.info) : undefined;
        this.population = _value.population;
        this.token = _value.token;
        this.pinMessages = (_value.pinMessages || []).slice();
        this.lastMessageId = _value.lastMessageId;
        this.requesterRole = _value.requesterRole;
        this.lastUpdate = _value.lastUpdate;
        GetChannelRes.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new GetChannelRes();
        GetChannelRes.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.info = _instance.info || undefined;
        _instance.population = _instance.population || '0';
        _instance.token = _instance.token || '';
        _instance.pinMessages = _instance.pinMessages || [];
        _instance.lastMessageId = _instance.lastMessageId || '0';
        _instance.requesterRole = _instance.requesterRole || 0;
        _instance.lastUpdate = _instance.lastUpdate || '0';
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
                    _instance.info = new ChannelInfo();
                    _reader.readMessage(_instance.info, ChannelInfo.deserializeBinaryFromReader);
                    break;
                case 2:
                    _instance.population = _reader.readInt64String();
                    break;
                case 4:
                    _instance.token = _reader.readString();
                    break;
                case 5:
                    (_instance.pinMessages = _instance.pinMessages || []).push(...(_reader.readPackedInt64String() || []));
                    break;
                case 6:
                    _instance.lastMessageId = _reader.readInt64String();
                    break;
                case 3:
                    _instance.requesterRole = _reader.readEnum();
                    break;
                case 7:
                    _instance.lastUpdate = _reader.readInt64String();
                    break;
                default:
                    _reader.skipField();
            }
        }
        GetChannelRes.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.info) {
            _writer.writeMessage(1, _instance.info, ChannelInfo.serializeBinaryToWriter);
        }
        if (_instance.population) {
            _writer.writeInt64String(2, _instance.population);
        }
        if (_instance.token) {
            _writer.writeString(4, _instance.token);
        }
        if (_instance.pinMessages && _instance.pinMessages.length) {
            _writer.writePackedInt64String(5, _instance.pinMessages);
        }
        if (_instance.lastMessageId) {
            _writer.writeInt64String(6, _instance.lastMessageId);
        }
        if (_instance.requesterRole) {
            _writer.writeEnum(3, _instance.requesterRole);
        }
        if (_instance.lastUpdate) {
            _writer.writeInt64String(7, _instance.lastUpdate);
        }
    }
    get info() {
        return this._info;
    }
    set info(value) {
        this._info = value;
    }
    get population() {
        return this._population;
    }
    set population(value) {
        this._population = value;
    }
    get token() {
        return this._token;
    }
    set token(value) {
        this._token = value;
    }
    get pinMessages() {
        return this._pinMessages;
    }
    set pinMessages(value) {
        this._pinMessages = value;
    }
    get lastMessageId() {
        return this._lastMessageId;
    }
    set lastMessageId(value) {
        this._lastMessageId = value;
    }
    get requesterRole() {
        return this._requesterRole;
    }
    set requesterRole(value) {
        this._requesterRole = value;
    }
    get lastUpdate() {
        return this._lastUpdate;
    }
    set lastUpdate(value) {
        this._lastUpdate = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        GetChannelRes.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            info: this.info ? this.info.toObject() : undefined,
            population: this.population,
            token: this.token,
            pinMessages: (this.pinMessages || []).slice(),
            lastMessageId: this.lastMessageId,
            requesterRole: this.requesterRole,
            lastUpdate: this.lastUpdate
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
            info: this.info ? this.info.toProtobufJSON(options) : null,
            population: this.population,
            token: this.token,
            pinMessages: (this.pinMessages || []).slice(),
            lastMessageId: this.lastMessageId,
            requesterRole: protoPubV1Models002.Role[this.requesterRole === null || this.requesterRole === undefined
                ? 0
                : this.requesterRole],
            lastUpdate: this.lastUpdate
        };
    }
}
GetChannelRes.id = 'proto.pub.v1.channel.GetChannelRes';
/**
 * Message implementation for proto.pub.v1.channel.GetMembersReq
 */
export class GetMembersReq {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetMembersReq to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.uid = _value.uid ? new protoPubV1Models001.Uid(_value.uid) : undefined;
        this.pointer = _value.pointer;
        this.limit = _value.limit;
        GetMembersReq.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new GetMembersReq();
        GetMembersReq.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.uid = _instance.uid || undefined;
        _instance.pointer = _instance.pointer || 0;
        _instance.limit = _instance.limit || 0;
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
                    _instance.uid = new protoPubV1Models001.Uid();
                    _reader.readMessage(_instance.uid, protoPubV1Models001.Uid.deserializeBinaryFromReader);
                    break;
                case 3:
                    _instance.pointer = _reader.readInt32();
                    break;
                case 4:
                    _instance.limit = _reader.readInt32();
                    break;
                default:
                    _reader.skipField();
            }
        }
        GetMembersReq.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.uid) {
            _writer.writeMessage(1, _instance.uid, protoPubV1Models001.Uid.serializeBinaryToWriter);
        }
        if (_instance.pointer) {
            _writer.writeInt32(3, _instance.pointer);
        }
        if (_instance.limit) {
            _writer.writeInt32(4, _instance.limit);
        }
    }
    get uid() {
        return this._uid;
    }
    set uid(value) {
        this._uid = value;
    }
    get pointer() {
        return this._pointer;
    }
    set pointer(value) {
        this._pointer = value;
    }
    get limit() {
        return this._limit;
    }
    set limit(value) {
        this._limit = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        GetMembersReq.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            uid: this.uid ? this.uid.toObject() : undefined,
            pointer: this.pointer,
            limit: this.limit
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
            pointer: this.pointer,
            limit: this.limit
        };
    }
}
GetMembersReq.id = 'proto.pub.v1.channel.GetMembersReq';
/**
 * Message implementation for proto.pub.v1.channel.GetMembersRes
 */
export class GetMembersRes {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetMembersRes to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.members = (_value.members || []).map(m => new protoPubV1Models002.Member(m));
        this.finished = _value.finished;
        GetMembersRes.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new GetMembersRes();
        GetMembersRes.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.members = _instance.members || [];
        _instance.finished = _instance.finished || false;
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
                    const messageInitializer1 = new protoPubV1Models002.Member();
                    _reader.readMessage(messageInitializer1, protoPubV1Models002.Member.deserializeBinaryFromReader);
                    (_instance.members = _instance.members || []).push(messageInitializer1);
                    break;
                case 2:
                    _instance.finished = _reader.readBool();
                    break;
                default:
                    _reader.skipField();
            }
        }
        GetMembersRes.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.members && _instance.members.length) {
            _writer.writeRepeatedMessage(1, _instance.members, protoPubV1Models002.Member.serializeBinaryToWriter);
        }
        if (_instance.finished) {
            _writer.writeBool(2, _instance.finished);
        }
    }
    get members() {
        return this._members;
    }
    set members(value) {
        this._members = value;
    }
    get finished() {
        return this._finished;
    }
    set finished(value) {
        this._finished = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        GetMembersRes.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            members: (this.members || []).map(m => m.toObject()),
            finished: this.finished
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
            members: (this.members || []).map(m => m.toProtobufJSON(options)),
            finished: this.finished
        };
    }
}
GetMembersRes.id = 'proto.pub.v1.channel.GetMembersRes';
/**
 * Message implementation for proto.pub.v1.channel.JoinChannelReq
 */
export class JoinChannelReq {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of JoinChannelReq to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.channel = _value.channel
            ? new protoPubV1Models001.Uid(_value.channel)
            : undefined;
        this.token = _value.token;
        JoinChannelReq.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new JoinChannelReq();
        JoinChannelReq.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.channel = _instance.channel || undefined;
        _instance.token = _instance.token || '';
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
                    _instance.channel = new protoPubV1Models001.Uid();
                    _reader.readMessage(_instance.channel, protoPubV1Models001.Uid.deserializeBinaryFromReader);
                    break;
                case 2:
                    _instance.token = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        JoinChannelReq.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.channel) {
            _writer.writeMessage(1, _instance.channel, protoPubV1Models001.Uid.serializeBinaryToWriter);
        }
        if (_instance.token) {
            _writer.writeString(2, _instance.token);
        }
    }
    get channel() {
        return this._channel;
    }
    set channel(value) {
        this._channel = value;
    }
    get token() {
        return this._token;
    }
    set token(value) {
        this._token = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        JoinChannelReq.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            channel: this.channel ? this.channel.toObject() : undefined,
            token: this.token
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
            channel: this.channel ? this.channel.toProtobufJSON(options) : null,
            token: this.token
        };
    }
}
JoinChannelReq.id = 'proto.pub.v1.channel.JoinChannelReq';
/**
 * Message implementation for proto.pub.v1.channel.JoinChannelRes
 */
export class JoinChannelRes {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of JoinChannelRes to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        JoinChannelRes.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new JoinChannelRes();
        JoinChannelRes.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
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
        JoinChannelRes.refineValues(_instance);
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
        JoinChannelRes.serializeBinaryToWriter(this, writer);
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
JoinChannelRes.id = 'proto.pub.v1.channel.JoinChannelRes';
/**
 * Message implementation for proto.pub.v1.channel.LeaveChannelReq
 */
export class LeaveChannelReq {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of LeaveChannelReq to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.channel = _value.channel
            ? new protoPubV1Models001.Uid(_value.channel)
            : undefined;
        LeaveChannelReq.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new LeaveChannelReq();
        LeaveChannelReq.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.channel = _instance.channel || undefined;
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
                    _instance.channel = new protoPubV1Models001.Uid();
                    _reader.readMessage(_instance.channel, protoPubV1Models001.Uid.deserializeBinaryFromReader);
                    break;
                default:
                    _reader.skipField();
            }
        }
        LeaveChannelReq.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.channel) {
            _writer.writeMessage(1, _instance.channel, protoPubV1Models001.Uid.serializeBinaryToWriter);
        }
    }
    get channel() {
        return this._channel;
    }
    set channel(value) {
        this._channel = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        LeaveChannelReq.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            channel: this.channel ? this.channel.toObject() : undefined
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
            channel: this.channel ? this.channel.toProtobufJSON(options) : null
        };
    }
}
LeaveChannelReq.id = 'proto.pub.v1.channel.LeaveChannelReq';
/**
 * Message implementation for proto.pub.v1.channel.LeaveChannelRes
 */
export class LeaveChannelRes {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of LeaveChannelRes to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        LeaveChannelRes.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new LeaveChannelRes();
        LeaveChannelRes.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
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
        LeaveChannelRes.refineValues(_instance);
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
        LeaveChannelRes.serializeBinaryToWriter(this, writer);
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
LeaveChannelRes.id = 'proto.pub.v1.channel.LeaveChannelRes';
/**
 * Message implementation for proto.pub.v1.channel.CreateTokenReq
 */
export class CreateTokenReq {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CreateTokenReq to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.uid = _value.uid ? new protoPubV1Models001.Uid(_value.uid) : undefined;
        this.validUntil = _value.validUntil;
        this.numberOfAvailableJoins = _value.numberOfAvailableJoins;
        CreateTokenReq.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new CreateTokenReq();
        CreateTokenReq.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.uid = _instance.uid || undefined;
        _instance.validUntil = _instance.validUntil || '0';
        _instance.numberOfAvailableJoins = _instance.numberOfAvailableJoins || '0';
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
                    _instance.uid = new protoPubV1Models001.Uid();
                    _reader.readMessage(_instance.uid, protoPubV1Models001.Uid.deserializeBinaryFromReader);
                    break;
                case 2:
                    _instance.validUntil = _reader.readInt64String();
                    break;
                case 3:
                    _instance.numberOfAvailableJoins = _reader.readInt64String();
                    break;
                default:
                    _reader.skipField();
            }
        }
        CreateTokenReq.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.uid) {
            _writer.writeMessage(1, _instance.uid, protoPubV1Models001.Uid.serializeBinaryToWriter);
        }
        if (_instance.validUntil) {
            _writer.writeInt64String(2, _instance.validUntil);
        }
        if (_instance.numberOfAvailableJoins) {
            _writer.writeInt64String(3, _instance.numberOfAvailableJoins);
        }
    }
    get uid() {
        return this._uid;
    }
    set uid(value) {
        this._uid = value;
    }
    get validUntil() {
        return this._validUntil;
    }
    set validUntil(value) {
        this._validUntil = value;
    }
    get numberOfAvailableJoins() {
        return this._numberOfAvailableJoins;
    }
    set numberOfAvailableJoins(value) {
        this._numberOfAvailableJoins = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        CreateTokenReq.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            uid: this.uid ? this.uid.toObject() : undefined,
            validUntil: this.validUntil,
            numberOfAvailableJoins: this.numberOfAvailableJoins
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
            validUntil: this.validUntil,
            numberOfAvailableJoins: this.numberOfAvailableJoins
        };
    }
}
CreateTokenReq.id = 'proto.pub.v1.channel.CreateTokenReq';
/**
 * Message implementation for proto.pub.v1.channel.CreateTokenRes
 */
export class CreateTokenRes {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CreateTokenRes to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.joinToken = _value.joinToken;
        CreateTokenRes.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new CreateTokenRes();
        CreateTokenRes.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.joinToken = _instance.joinToken || '';
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
                    _instance.joinToken = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        CreateTokenRes.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.joinToken) {
            _writer.writeString(1, _instance.joinToken);
        }
    }
    get joinToken() {
        return this._joinToken;
    }
    set joinToken(value) {
        this._joinToken = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        CreateTokenRes.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            joinToken: this.joinToken
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
            joinToken: this.joinToken
        };
    }
}
CreateTokenRes.id = 'proto.pub.v1.channel.CreateTokenRes';
/**
 * Message implementation for proto.pub.v1.channel.DeleteTokenReq
 */
export class DeleteTokenReq {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of DeleteTokenReq to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.uid = _value.uid ? new protoPubV1Models001.Uid(_value.uid) : undefined;
        DeleteTokenReq.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new DeleteTokenReq();
        DeleteTokenReq.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.uid = _instance.uid || undefined;
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
                    _instance.uid = new protoPubV1Models001.Uid();
                    _reader.readMessage(_instance.uid, protoPubV1Models001.Uid.deserializeBinaryFromReader);
                    break;
                default:
                    _reader.skipField();
            }
        }
        DeleteTokenReq.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.uid) {
            _writer.writeMessage(1, _instance.uid, protoPubV1Models001.Uid.serializeBinaryToWriter);
        }
    }
    get uid() {
        return this._uid;
    }
    set uid(value) {
        this._uid = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        DeleteTokenReq.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            uid: this.uid ? this.uid.toObject() : undefined
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
            uid: this.uid ? this.uid.toProtobufJSON(options) : null
        };
    }
}
DeleteTokenReq.id = 'proto.pub.v1.channel.DeleteTokenReq';
/**
 * Message implementation for proto.pub.v1.channel.DeleteTokenRes
 */
export class DeleteTokenRes {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of DeleteTokenRes to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        DeleteTokenRes.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new DeleteTokenRes();
        DeleteTokenRes.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
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
        DeleteTokenRes.refineValues(_instance);
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
        DeleteTokenRes.serializeBinaryToWriter(this, writer);
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
DeleteTokenRes.id = 'proto.pub.v1.channel.DeleteTokenRes';
/**
 * Message implementation for proto.pub.v1.channel.PinMessageReq
 */
export class PinMessageReq {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of PinMessageReq to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.uid = _value.uid ? new protoPubV1Models001.Uid(_value.uid) : undefined;
        this.messageId = _value.messageId;
        PinMessageReq.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new PinMessageReq();
        PinMessageReq.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.uid = _instance.uid || undefined;
        _instance.messageId = _instance.messageId || '0';
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
                    _instance.uid = new protoPubV1Models001.Uid();
                    _reader.readMessage(_instance.uid, protoPubV1Models001.Uid.deserializeBinaryFromReader);
                    break;
                case 2:
                    _instance.messageId = _reader.readInt64String();
                    break;
                default:
                    _reader.skipField();
            }
        }
        PinMessageReq.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.uid) {
            _writer.writeMessage(1, _instance.uid, protoPubV1Models001.Uid.serializeBinaryToWriter);
        }
        if (_instance.messageId) {
            _writer.writeInt64String(2, _instance.messageId);
        }
    }
    get uid() {
        return this._uid;
    }
    set uid(value) {
        this._uid = value;
    }
    get messageId() {
        return this._messageId;
    }
    set messageId(value) {
        this._messageId = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        PinMessageReq.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            uid: this.uid ? this.uid.toObject() : undefined,
            messageId: this.messageId
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
            messageId: this.messageId
        };
    }
}
PinMessageReq.id = 'proto.pub.v1.channel.PinMessageReq';
/**
 * Message implementation for proto.pub.v1.channel.PinMessageRes
 */
export class PinMessageRes {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of PinMessageRes to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        PinMessageRes.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new PinMessageRes();
        PinMessageRes.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
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
        PinMessageRes.refineValues(_instance);
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
        PinMessageRes.serializeBinaryToWriter(this, writer);
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
PinMessageRes.id = 'proto.pub.v1.channel.PinMessageRes';
/**
 * Message implementation for proto.pub.v1.channel.UnpinMessageReq
 */
export class UnpinMessageReq {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of UnpinMessageReq to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.uid = _value.uid ? new protoPubV1Models001.Uid(_value.uid) : undefined;
        this.messageId = _value.messageId;
        UnpinMessageReq.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new UnpinMessageReq();
        UnpinMessageReq.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.uid = _instance.uid || undefined;
        _instance.messageId = _instance.messageId || '0';
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
                    _instance.uid = new protoPubV1Models001.Uid();
                    _reader.readMessage(_instance.uid, protoPubV1Models001.Uid.deserializeBinaryFromReader);
                    break;
                case 2:
                    _instance.messageId = _reader.readInt64String();
                    break;
                default:
                    _reader.skipField();
            }
        }
        UnpinMessageReq.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.uid) {
            _writer.writeMessage(1, _instance.uid, protoPubV1Models001.Uid.serializeBinaryToWriter);
        }
        if (_instance.messageId) {
            _writer.writeInt64String(2, _instance.messageId);
        }
    }
    get uid() {
        return this._uid;
    }
    set uid(value) {
        this._uid = value;
    }
    get messageId() {
        return this._messageId;
    }
    set messageId(value) {
        this._messageId = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        UnpinMessageReq.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            uid: this.uid ? this.uid.toObject() : undefined,
            messageId: this.messageId
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
            messageId: this.messageId
        };
    }
}
UnpinMessageReq.id = 'proto.pub.v1.channel.UnpinMessageReq';
/**
 * Message implementation for proto.pub.v1.channel.UnpinMessageRes
 */
export class UnpinMessageRes {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of UnpinMessageRes to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        UnpinMessageRes.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new UnpinMessageRes();
        UnpinMessageRes.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
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
        UnpinMessageRes.refineValues(_instance);
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
        UnpinMessageRes.serializeBinaryToWriter(this, writer);
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
UnpinMessageRes.id = 'proto.pub.v1.channel.UnpinMessageRes';
/**
 * Message implementation for proto.pub.v1.channel.LastUpdate
 */
export class LastUpdate {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of LastUpdate to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        LastUpdate.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new LastUpdate();
        LastUpdate.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
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
        LastUpdate.refineValues(_instance);
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
        LastUpdate.serializeBinaryToWriter(this, writer);
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
LastUpdate.id = 'proto.pub.v1.channel.LastUpdate';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbm5lbC5wYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Byb3RvL3NyYy9saWIvcHViL3YxL2NoYW5uZWwucGIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV0EsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQWMsTUFBTSxpQkFBaUIsQ0FBQztBQUV6RSxPQUFPLEtBQUssbUJBQW1CLE1BQU0sNEJBQTRCLENBQUM7QUFDbEUsT0FBTyxLQUFLLG1CQUFtQixNQUFNLDRCQUE0QixDQUFDO0FBQ2xFLE1BQU0sQ0FBTixJQUFZLFdBR1g7QUFIRCxXQUFZLFdBQVc7SUFDckIsbURBQVcsQ0FBQTtJQUNYLGlEQUFVLENBQUE7QUFDWixDQUFDLEVBSFcsV0FBVyxLQUFYLFdBQVcsUUFHdEI7QUFDRDs7R0FFRztBQUNILE1BQU0sT0FBTyxXQUFXO0lBNkZ0Qjs7O09BR0c7SUFDSCxZQUFZLE1BQStDO1FBQ3pELE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUM7UUFDOUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBdEdEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFpQjtRQUN4QyxNQUFNLFFBQVEsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1FBQ25DLFdBQVcsQ0FBQywyQkFBMkIsQ0FBQyxRQUFRLEVBQUUsSUFB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QUdHO0lBQ0gsZUFBZTtRQUNiLE1BQU0sTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsVUFBVSxDQUFDLHVCQUF1QixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNqRCxPQUFPLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxRQUFRO1FBQ04sT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRUQ7O09BRUc7SUFDSCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxjQUFjO0lBQ1osYUFBYTtJQUNiLE9BQStCO1FBRS9CLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQzs7QUE1Rk0sYUFBRSxHQUFHLGlDQUFpQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGUgKi9cbi8qIGVzbGludC1kaXNhYmxlICovXG4vLyBAdHMtbm9jaGVja1xuLy9cbi8vIFRISVMgSVMgQSBHRU5FUkFURUQgRklMRVxuLy8gRE8gTk9UIE1PRElGWSBJVCEgWU9VUiBDSEFOR0VTIFdJTEwgQkUgTE9TVFxuaW1wb3J0IHtcbiAgR3JwY01lc3NhZ2UsXG4gIFJlY3Vyc2l2ZVBhcnRpYWwsXG4gIFRvUHJvdG9idWZKU09OT3B0aW9uc1xufSBmcm9tICdAbmd4LWdycGMvY29tbW9uJztcbmltcG9ydCB7IEJpbmFyeVJlYWRlciwgQmluYXJ5V3JpdGVyLCBCeXRlU291cmNlIH0gZnJvbSAnZ29vZ2xlLXByb3RvYnVmJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMDAgZnJvbSAnLi4vLi4vcHViL3YxL21vZGVscy9jYXRlZ29yaWVzLnBiJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMDEgZnJvbSAnLi4vLi4vcHViL3YxL21vZGVscy91aWQucGInO1xuaW1wb3J0ICogYXMgcHJvdG9QdWJWMU1vZGVsczAwMiBmcm9tICcuLi8uLi9wdWIvdjEvbW9kZWxzL211Yy5wYic7XG5leHBvcnQgZW51bSBDaGFubmVsVHlwZSB7XG4gIFBSSVZBVEUgPSAwLFxuICBQVUJMSUMgPSAxXG59XG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIHByb3RvLnB1Yi52MS5jaGFubmVsLkNoYW5uZWxJbmZvXG4gKi9cbmV4cG9ydCBjbGFzcyBDaGFubmVsSW5mbyBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ3Byb3RvLnB1Yi52MS5jaGFubmVsLkNoYW5uZWxJbmZvJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQ2hhbm5lbEluZm8oKTtcbiAgICBDaGFubmVsSW5mby5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IENoYW5uZWxJbmZvKSB7XG4gICAgX2luc3RhbmNlLm5hbWUgPSBfaW5zdGFuY2UubmFtZSB8fCAnJztcbiAgICBfaW5zdGFuY2UuaW5mbyA9IF9pbnN0YW5jZS5pbmZvIHx8ICcnO1xuICAgIF9pbnN0YW5jZS50eXBlID0gX2luc3RhbmNlLnR5cGUgfHwgMDtcbiAgICBfaW5zdGFuY2UuaWQgPSBfaW5zdGFuY2UuaWQgfHwgJyc7XG4gICAgX2luc3RhbmNlLmxhc3RVcGRhdGVkVGltZSA9IF9pbnN0YW5jZS5sYXN0VXBkYXRlZFRpbWUgfHwgJzAnO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogQ2hhbm5lbEluZm8sXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLm5hbWUgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5pbmZvID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBfaW5zdGFuY2UudHlwZSA9IF9yZWFkZXIucmVhZEVudW0oKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIF9pbnN0YW5jZS5pZCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgX2luc3RhbmNlLmxhc3RVcGRhdGVkVGltZSA9IF9yZWFkZXIucmVhZEludDY0U3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBDaGFubmVsSW5mby5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IENoYW5uZWxJbmZvLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLm5hbWUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLm5hbWUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmluZm8pIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMiwgX2luc3RhbmNlLmluZm8pO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnR5cGUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVFbnVtKDMsIF9pbnN0YW5jZS50eXBlKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5pZCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZyg0LCBfaW5zdGFuY2UuaWQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmxhc3RVcGRhdGVkVGltZSkge1xuICAgICAgX3dyaXRlci53cml0ZUludDY0U3RyaW5nKDUsIF9pbnN0YW5jZS5sYXN0VXBkYXRlZFRpbWUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX25hbWU/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2luZm8/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3R5cGU/OiBDaGFubmVsVHlwZTtcbiAgcHJpdmF0ZSBfaWQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2xhc3RVcGRhdGVkVGltZT86IHN0cmluZztcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIENoYW5uZWxJbmZvIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPENoYW5uZWxJbmZvLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLm5hbWUgPSBfdmFsdWUubmFtZTtcbiAgICB0aGlzLmluZm8gPSBfdmFsdWUuaW5mbztcbiAgICB0aGlzLnR5cGUgPSBfdmFsdWUudHlwZTtcbiAgICB0aGlzLmlkID0gX3ZhbHVlLmlkO1xuICAgIHRoaXMubGFzdFVwZGF0ZWRUaW1lID0gX3ZhbHVlLmxhc3RVcGRhdGVkVGltZTtcbiAgICBDaGFubmVsSW5mby5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IG5hbWUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuICBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIGdldCBpbmZvKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2luZm87XG4gIH1cbiAgc2V0IGluZm8odmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2luZm8gPSB2YWx1ZTtcbiAgfVxuICBnZXQgdHlwZSgpOiBDaGFubmVsVHlwZSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gIH1cbiAgc2V0IHR5cGUodmFsdWU6IENoYW5uZWxUeXBlIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdHlwZSA9IHZhbHVlO1xuICB9XG4gIGdldCBpZCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9pZDtcbiAgfVxuICBzZXQgaWQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGxhc3RVcGRhdGVkVGltZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9sYXN0VXBkYXRlZFRpbWU7XG4gIH1cbiAgc2V0IGxhc3RVcGRhdGVkVGltZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbGFzdFVwZGF0ZWRUaW1lID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgQ2hhbm5lbEluZm8uc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogQ2hhbm5lbEluZm8uQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICBpbmZvOiB0aGlzLmluZm8sXG4gICAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgICBpZDogdGhpcy5pZCxcbiAgICAgIGxhc3RVcGRhdGVkVGltZTogdGhpcy5sYXN0VXBkYXRlZFRpbWVcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBDaGFubmVsSW5mby5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIGluZm86IHRoaXMuaW5mbyxcbiAgICAgIHR5cGU6XG4gICAgICAgIENoYW5uZWxUeXBlW1xuICAgICAgICAgIHRoaXMudHlwZSA9PT0gbnVsbCB8fCB0aGlzLnR5cGUgPT09IHVuZGVmaW5lZCA/IDAgOiB0aGlzLnR5cGVcbiAgICAgICAgXSxcbiAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgbGFzdFVwZGF0ZWRUaW1lOiB0aGlzLmxhc3RVcGRhdGVkVGltZVxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgQ2hhbm5lbEluZm8ge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIENoYW5uZWxJbmZvXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIGluZm8/OiBzdHJpbmc7XG4gICAgdHlwZT86IENoYW5uZWxUeXBlO1xuICAgIGlkPzogc3RyaW5nO1xuICAgIGxhc3RVcGRhdGVkVGltZT86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBDaGFubmVsSW5mb1xuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgbmFtZT86IHN0cmluZztcbiAgICBpbmZvPzogc3RyaW5nO1xuICAgIHR5cGU/OiBzdHJpbmc7XG4gICAgaWQ/OiBzdHJpbmc7XG4gICAgbGFzdFVwZGF0ZWRUaW1lPzogc3RyaW5nO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3IgcHJvdG8ucHViLnYxLmNoYW5uZWwuQ3JlYXRlQ2hhbm5lbFJlcVxuICovXG5leHBvcnQgY2xhc3MgQ3JlYXRlQ2hhbm5lbFJlcSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ3Byb3RvLnB1Yi52MS5jaGFubmVsLkNyZWF0ZUNoYW5uZWxSZXEnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBDcmVhdGVDaGFubmVsUmVxKCk7XG4gICAgQ3JlYXRlQ2hhbm5lbFJlcS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IENyZWF0ZUNoYW5uZWxSZXEpIHtcbiAgICBfaW5zdGFuY2UuaWQgPSBfaW5zdGFuY2UuaWQgfHwgJyc7XG4gICAgX2luc3RhbmNlLm5hbWUgPSBfaW5zdGFuY2UubmFtZSB8fCAnJztcbiAgICBfaW5zdGFuY2UuaW5mbyA9IF9pbnN0YW5jZS5pbmZvIHx8ICcnO1xuICAgIF9pbnN0YW5jZS50eXBlID0gX2luc3RhbmNlLnR5cGUgfHwgMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IENyZWF0ZUNoYW5uZWxSZXEsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLmlkID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UubmFtZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgX2luc3RhbmNlLmluZm8gPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIF9pbnN0YW5jZS50eXBlID0gX3JlYWRlci5yZWFkRW51bSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQ3JlYXRlQ2hhbm5lbFJlcS5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IENyZWF0ZUNoYW5uZWxSZXEsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UuaWQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLmlkKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5uYW1lKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDIsIF9pbnN0YW5jZS5uYW1lKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5pbmZvKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDMsIF9pbnN0YW5jZS5pbmZvKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS50eXBlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlRW51bSg0LCBfaW5zdGFuY2UudHlwZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaWQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX25hbWU/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2luZm8/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3R5cGU/OiBDaGFubmVsVHlwZTtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIENyZWF0ZUNoYW5uZWxSZXEgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8Q3JlYXRlQ2hhbm5lbFJlcS5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5pZCA9IF92YWx1ZS5pZDtcbiAgICB0aGlzLm5hbWUgPSBfdmFsdWUubmFtZTtcbiAgICB0aGlzLmluZm8gPSBfdmFsdWUuaW5mbztcbiAgICB0aGlzLnR5cGUgPSBfdmFsdWUudHlwZTtcbiAgICBDcmVhdGVDaGFubmVsUmVxLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgaWQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5faWQ7XG4gIH1cbiAgc2V0IGlkKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9pZCA9IHZhbHVlO1xuICB9XG4gIGdldCBuYW1lKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cbiAgc2V0IG5hbWUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgaW5mbygpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9pbmZvO1xuICB9XG4gIHNldCBpbmZvKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9pbmZvID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHR5cGUoKTogQ2hhbm5lbFR5cGUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90eXBlO1xuICB9XG4gIHNldCB0eXBlKHZhbHVlOiBDaGFubmVsVHlwZSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3R5cGUgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBDcmVhdGVDaGFubmVsUmVxLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IENyZWF0ZUNoYW5uZWxSZXEuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogdGhpcy5pZCxcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIGluZm86IHRoaXMuaW5mbyxcbiAgICAgIHR5cGU6IHRoaXMudHlwZVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IENyZWF0ZUNoYW5uZWxSZXEuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogdGhpcy5pZCxcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIGluZm86IHRoaXMuaW5mbyxcbiAgICAgIHR5cGU6XG4gICAgICAgIENoYW5uZWxUeXBlW1xuICAgICAgICAgIHRoaXMudHlwZSA9PT0gbnVsbCB8fCB0aGlzLnR5cGUgPT09IHVuZGVmaW5lZCA/IDAgOiB0aGlzLnR5cGVcbiAgICAgICAgXVxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgQ3JlYXRlQ2hhbm5lbFJlcSB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgQ3JlYXRlQ2hhbm5lbFJlcVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgaWQ/OiBzdHJpbmc7XG4gICAgbmFtZT86IHN0cmluZztcbiAgICBpbmZvPzogc3RyaW5nO1xuICAgIHR5cGU/OiBDaGFubmVsVHlwZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBDcmVhdGVDaGFubmVsUmVxXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBpZD86IHN0cmluZztcbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIGluZm8/OiBzdHJpbmc7XG4gICAgdHlwZT86IHN0cmluZztcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIHByb3RvLnB1Yi52MS5jaGFubmVsLkNyZWF0ZUNoYW5uZWxSZXNcbiAqL1xuZXhwb3J0IGNsYXNzIENyZWF0ZUNoYW5uZWxSZXMgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdwcm90by5wdWIudjEuY2hhbm5lbC5DcmVhdGVDaGFubmVsUmVzJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQ3JlYXRlQ2hhbm5lbFJlcygpO1xuICAgIENyZWF0ZUNoYW5uZWxSZXMuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBDcmVhdGVDaGFubmVsUmVzKSB7XG4gICAgX2luc3RhbmNlLnVpZCA9IF9pbnN0YW5jZS51aWQgfHwgdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogQ3JlYXRlQ2hhbm5lbFJlcyxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UudWlkID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDEuVWlkKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS51aWQsXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQ3JlYXRlQ2hhbm5lbFJlcy5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IENyZWF0ZUNoYW5uZWxSZXMsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UudWlkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMSxcbiAgICAgICAgX2luc3RhbmNlLnVpZCBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDEuVWlkLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3VpZD86IHByb3RvUHViVjFNb2RlbHMwMDEuVWlkO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgQ3JlYXRlQ2hhbm5lbFJlcyB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxDcmVhdGVDaGFubmVsUmVzLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnVpZCA9IF92YWx1ZS51aWQgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQoX3ZhbHVlLnVpZCkgOiB1bmRlZmluZWQ7XG4gICAgQ3JlYXRlQ2hhbm5lbFJlcy5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHVpZCgpOiBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3VpZDtcbiAgfVxuICBzZXQgdWlkKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZCB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3VpZCA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIENyZWF0ZUNoYW5uZWxSZXMuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogQ3JlYXRlQ2hhbm5lbFJlcy5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVpZDogdGhpcy51aWQgPyB0aGlzLnVpZC50b09iamVjdCgpIDogdW5kZWZpbmVkXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogQ3JlYXRlQ2hhbm5lbFJlcy5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVpZDogdGhpcy51aWQgPyB0aGlzLnVpZC50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGxcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIENyZWF0ZUNoYW5uZWxSZXMge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIENyZWF0ZUNoYW5uZWxSZXNcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIHVpZD86IHByb3RvUHViVjFNb2RlbHMwMDEuVWlkLkFzT2JqZWN0O1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIENyZWF0ZUNoYW5uZWxSZXNcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHVpZD86IHByb3RvUHViVjFNb2RlbHMwMDEuVWlkLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIHByb3RvLnB1Yi52MS5jaGFubmVsLk1vZGlmeUNoYW5uZWxSZXFcbiAqL1xuZXhwb3J0IGNsYXNzIE1vZGlmeUNoYW5uZWxSZXEgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdwcm90by5wdWIudjEuY2hhbm5lbC5Nb2RpZnlDaGFubmVsUmVxJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgTW9kaWZ5Q2hhbm5lbFJlcSgpO1xuICAgIE1vZGlmeUNoYW5uZWxSZXEuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBNb2RpZnlDaGFubmVsUmVxKSB7XG4gICAgX2luc3RhbmNlLnVpZCA9IF9pbnN0YW5jZS51aWQgfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5pbmZvID0gX2luc3RhbmNlLmluZm8gfHwgdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogTW9kaWZ5Q2hhbm5lbFJlcSxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UudWlkID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDEuVWlkKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS51aWQsXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLmluZm8gPSBuZXcgQ2hhbm5lbEluZm8oKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmluZm8sXG4gICAgICAgICAgICBDaGFubmVsSW5mby5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgTW9kaWZ5Q2hhbm5lbFJlcS5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IE1vZGlmeUNoYW5uZWxSZXEsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UudWlkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMSxcbiAgICAgICAgX2luc3RhbmNlLnVpZCBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDEuVWlkLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmluZm8pIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAyLFxuICAgICAgICBfaW5zdGFuY2UuaW5mbyBhcyBhbnksXG4gICAgICAgIENoYW5uZWxJbmZvLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3VpZD86IHByb3RvUHViVjFNb2RlbHMwMDEuVWlkO1xuICBwcml2YXRlIF9pbmZvPzogQ2hhbm5lbEluZm87XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBNb2RpZnlDaGFubmVsUmVxIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPE1vZGlmeUNoYW5uZWxSZXEuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMudWlkID0gX3ZhbHVlLnVpZCA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZChfdmFsdWUudWlkKSA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmluZm8gPSBfdmFsdWUuaW5mbyA/IG5ldyBDaGFubmVsSW5mbyhfdmFsdWUuaW5mbykgOiB1bmRlZmluZWQ7XG4gICAgTW9kaWZ5Q2hhbm5lbFJlcS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHVpZCgpOiBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3VpZDtcbiAgfVxuICBzZXQgdWlkKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZCB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3VpZCA9IHZhbHVlO1xuICB9XG4gIGdldCBpbmZvKCk6IENoYW5uZWxJbmZvIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5faW5mbztcbiAgfVxuICBzZXQgaW5mbyh2YWx1ZTogQ2hhbm5lbEluZm8gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9pbmZvID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgTW9kaWZ5Q2hhbm5lbFJlcS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBNb2RpZnlDaGFubmVsUmVxLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgdWlkOiB0aGlzLnVpZCA/IHRoaXMudWlkLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBpbmZvOiB0aGlzLmluZm8gPyB0aGlzLmluZm8udG9PYmplY3QoKSA6IHVuZGVmaW5lZFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IE1vZGlmeUNoYW5uZWxSZXEuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICB1aWQ6IHRoaXMudWlkID8gdGhpcy51aWQudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgaW5mbzogdGhpcy5pbmZvID8gdGhpcy5pbmZvLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbFxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgTW9kaWZ5Q2hhbm5lbFJlcSB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgTW9kaWZ5Q2hhbm5lbFJlcVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgdWlkPzogcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQuQXNPYmplY3Q7XG4gICAgaW5mbz86IENoYW5uZWxJbmZvLkFzT2JqZWN0O1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIE1vZGlmeUNoYW5uZWxSZXFcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHVpZD86IHByb3RvUHViVjFNb2RlbHMwMDEuVWlkLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBpbmZvPzogQ2hhbm5lbEluZm8uQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3IgcHJvdG8ucHViLnYxLmNoYW5uZWwuTW9kaWZ5Q2hhbm5lbFJlc1xuICovXG5leHBvcnQgY2xhc3MgTW9kaWZ5Q2hhbm5lbFJlcyBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ3Byb3RvLnB1Yi52MS5jaGFubmVsLk1vZGlmeUNoYW5uZWxSZXMnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBNb2RpZnlDaGFubmVsUmVzKCk7XG4gICAgTW9kaWZ5Q2hhbm5lbFJlcy5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IE1vZGlmeUNoYW5uZWxSZXMpIHt9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogTW9kaWZ5Q2hhbm5lbFJlcyxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBNb2RpZnlDaGFubmVsUmVzLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogTW9kaWZ5Q2hhbm5lbFJlcyxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgTW9kaWZ5Q2hhbm5lbFJlcyB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxNb2RpZnlDaGFubmVsUmVzLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICBNb2RpZnlDaGFubmVsUmVzLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBNb2RpZnlDaGFubmVsUmVzLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IE1vZGlmeUNoYW5uZWxSZXMuQXNPYmplY3Qge1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogTW9kaWZ5Q2hhbm5lbFJlcy5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIE1vZGlmeUNoYW5uZWxSZXMge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIE1vZGlmeUNoYW5uZWxSZXNcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge31cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgTW9kaWZ5Q2hhbm5lbFJlc1xuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7fVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIHByb3RvLnB1Yi52MS5jaGFubmVsLkNoYW5nZVJvbGVSZXFcbiAqL1xuZXhwb3J0IGNsYXNzIENoYW5nZVJvbGVSZXEgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdwcm90by5wdWIudjEuY2hhbm5lbC5DaGFuZ2VSb2xlUmVxJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQ2hhbmdlUm9sZVJlcSgpO1xuICAgIENoYW5nZVJvbGVSZXEuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBDaGFuZ2VSb2xlUmVxKSB7XG4gICAgX2luc3RhbmNlLmNoYW5uZWwgPSBfaW5zdGFuY2UuY2hhbm5lbCB8fCB1bmRlZmluZWQ7XG4gICAgX2luc3RhbmNlLm1lbWJlciA9IF9pbnN0YW5jZS5tZW1iZXIgfHwgdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogQ2hhbmdlUm9sZVJlcSxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UuY2hhbm5lbCA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuY2hhbm5lbCxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDEuVWlkLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UubWVtYmVyID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDIuTWVtYmVyKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5tZW1iZXIsXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAyLk1lbWJlci5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQ2hhbmdlUm9sZVJlcS5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IENoYW5nZVJvbGVSZXEsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UuY2hhbm5lbCkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDEsXG4gICAgICAgIF9pbnN0YW5jZS5jaGFubmVsIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UubWVtYmVyKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMixcbiAgICAgICAgX2luc3RhbmNlLm1lbWJlciBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDIuTWVtYmVyLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NoYW5uZWw/OiBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZDtcbiAgcHJpdmF0ZSBfbWVtYmVyPzogcHJvdG9QdWJWMU1vZGVsczAwMi5NZW1iZXI7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBDaGFuZ2VSb2xlUmVxIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPENoYW5nZVJvbGVSZXEuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMuY2hhbm5lbCA9IF92YWx1ZS5jaGFubmVsXG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZChfdmFsdWUuY2hhbm5lbClcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMubWVtYmVyID0gX3ZhbHVlLm1lbWJlclxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMi5NZW1iZXIoX3ZhbHVlLm1lbWJlcilcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIENoYW5nZVJvbGVSZXEucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBjaGFubmVsKCk6IHByb3RvUHViVjFNb2RlbHMwMDEuVWlkIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fY2hhbm5lbDtcbiAgfVxuICBzZXQgY2hhbm5lbCh2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9jaGFubmVsID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG1lbWJlcigpOiBwcm90b1B1YlYxTW9kZWxzMDAyLk1lbWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX21lbWJlcjtcbiAgfVxuICBzZXQgbWVtYmVyKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDAyLk1lbWJlciB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX21lbWJlciA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIENoYW5nZVJvbGVSZXEuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogQ2hhbmdlUm9sZVJlcS5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNoYW5uZWw6IHRoaXMuY2hhbm5lbCA/IHRoaXMuY2hhbm5lbC50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgbWVtYmVyOiB0aGlzLm1lbWJlciA/IHRoaXMubWVtYmVyLnRvT2JqZWN0KCkgOiB1bmRlZmluZWRcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBDaGFuZ2VSb2xlUmVxLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2hhbm5lbDogdGhpcy5jaGFubmVsID8gdGhpcy5jaGFubmVsLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIG1lbWJlcjogdGhpcy5tZW1iZXIgPyB0aGlzLm1lbWJlci50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGxcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIENoYW5nZVJvbGVSZXEge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIENoYW5nZVJvbGVSZXFcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIGNoYW5uZWw/OiBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZC5Bc09iamVjdDtcbiAgICBtZW1iZXI/OiBwcm90b1B1YlYxTW9kZWxzMDAyLk1lbWJlci5Bc09iamVjdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBDaGFuZ2VSb2xlUmVxXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBjaGFubmVsPzogcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIG1lbWJlcj86IHByb3RvUHViVjFNb2RlbHMwMDIuTWVtYmVyLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIHByb3RvLnB1Yi52MS5jaGFubmVsLkNoYW5nZVJvbGVSZXNcbiAqL1xuZXhwb3J0IGNsYXNzIENoYW5nZVJvbGVSZXMgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdwcm90by5wdWIudjEuY2hhbm5lbC5DaGFuZ2VSb2xlUmVzJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQ2hhbmdlUm9sZVJlcygpO1xuICAgIENoYW5nZVJvbGVSZXMuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBDaGFuZ2VSb2xlUmVzKSB7fVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IENoYW5nZVJvbGVSZXMsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQ2hhbmdlUm9sZVJlcy5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IENoYW5nZVJvbGVSZXMsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge31cblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIENoYW5nZVJvbGVSZXMgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8Q2hhbmdlUm9sZVJlcy5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgQ2hhbmdlUm9sZVJlcy5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgQ2hhbmdlUm9sZVJlcy5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBDaGFuZ2VSb2xlUmVzLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge307XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IENoYW5nZVJvbGVSZXMuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7fTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBDaGFuZ2VSb2xlUmVzIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBDaGFuZ2VSb2xlUmVzXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHt9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIENoYW5nZVJvbGVSZXNcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge31cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBwcm90by5wdWIudjEuY2hhbm5lbC5SZW1vdmVDaGFubmVsUmVxXG4gKi9cbmV4cG9ydCBjbGFzcyBSZW1vdmVDaGFubmVsUmVxIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAncHJvdG8ucHViLnYxLmNoYW5uZWwuUmVtb3ZlQ2hhbm5lbFJlcSc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFJlbW92ZUNoYW5uZWxSZXEoKTtcbiAgICBSZW1vdmVDaGFubmVsUmVxLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogUmVtb3ZlQ2hhbm5lbFJlcSkge1xuICAgIF9pbnN0YW5jZS51aWQgPSBfaW5zdGFuY2UudWlkIHx8IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IFJlbW92ZUNoYW5uZWxSZXEsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLnVpZCA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UudWlkLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFJlbW92ZUNoYW5uZWxSZXEucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBSZW1vdmVDaGFubmVsUmVxLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLnVpZCkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDEsXG4gICAgICAgIF9pbnN0YW5jZS51aWQgYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF91aWQ/OiBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZDtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIFJlbW92ZUNoYW5uZWxSZXEgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8UmVtb3ZlQ2hhbm5lbFJlcS5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy51aWQgPSBfdmFsdWUudWlkID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMDEuVWlkKF92YWx1ZS51aWQpIDogdW5kZWZpbmVkO1xuICAgIFJlbW92ZUNoYW5uZWxSZXEucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCB1aWQoKTogcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl91aWQ7XG4gIH1cbiAgc2V0IHVpZCh2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl91aWQgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBSZW1vdmVDaGFubmVsUmVxLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IFJlbW92ZUNoYW5uZWxSZXEuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICB1aWQ6IHRoaXMudWlkID8gdGhpcy51aWQudG9PYmplY3QoKSA6IHVuZGVmaW5lZFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IFJlbW92ZUNoYW5uZWxSZXEuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICB1aWQ6IHRoaXMudWlkID8gdGhpcy51aWQudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBSZW1vdmVDaGFubmVsUmVxIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBSZW1vdmVDaGFubmVsUmVxXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICB1aWQ/OiBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZC5Bc09iamVjdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBSZW1vdmVDaGFubmVsUmVxXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICB1aWQ/OiBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBwcm90by5wdWIudjEuY2hhbm5lbC5SZW1vdmVDaGFubmVsUmVzXG4gKi9cbmV4cG9ydCBjbGFzcyBSZW1vdmVDaGFubmVsUmVzIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAncHJvdG8ucHViLnYxLmNoYW5uZWwuUmVtb3ZlQ2hhbm5lbFJlcyc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFJlbW92ZUNoYW5uZWxSZXMoKTtcbiAgICBSZW1vdmVDaGFubmVsUmVzLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogUmVtb3ZlQ2hhbm5lbFJlcykge31cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBSZW1vdmVDaGFubmVsUmVzLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFJlbW92ZUNoYW5uZWxSZXMucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBSZW1vdmVDaGFubmVsUmVzLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHt9XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBSZW1vdmVDaGFubmVsUmVzIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFJlbW92ZUNoYW5uZWxSZXMuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIFJlbW92ZUNoYW5uZWxSZXMucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFJlbW92ZUNoYW5uZWxSZXMuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogUmVtb3ZlQ2hhbm5lbFJlcy5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBSZW1vdmVDaGFubmVsUmVzLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge307XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgUmVtb3ZlQ2hhbm5lbFJlcyB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgUmVtb3ZlQ2hhbm5lbFJlc1xuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7fVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBSZW1vdmVDaGFubmVsUmVzXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHt9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3IgcHJvdG8ucHViLnYxLmNoYW5uZWwuQWRkTWVtYmVyc1JlcVxuICovXG5leHBvcnQgY2xhc3MgQWRkTWVtYmVyc1JlcSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ3Byb3RvLnB1Yi52MS5jaGFubmVsLkFkZE1lbWJlcnNSZXEnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBBZGRNZW1iZXJzUmVxKCk7XG4gICAgQWRkTWVtYmVyc1JlcS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IEFkZE1lbWJlcnNSZXEpIHtcbiAgICBfaW5zdGFuY2UuY2hhbm5lbCA9IF9pbnN0YW5jZS5jaGFubmVsIHx8IHVuZGVmaW5lZDtcbiAgICBfaW5zdGFuY2UubWVtYmVycyA9IF9pbnN0YW5jZS5tZW1iZXJzIHx8IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogQWRkTWVtYmVyc1JlcSxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UuY2hhbm5lbCA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuY2hhbm5lbCxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDEuVWlkLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBjb25zdCBtZXNzYWdlSW5pdGlhbGl6ZXIyID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDIuTWVtYmVyKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjIsXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAyLk1lbWJlci5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIChfaW5zdGFuY2UubWVtYmVycyA9IF9pbnN0YW5jZS5tZW1iZXJzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMlxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBBZGRNZW1iZXJzUmVxLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogQWRkTWVtYmVyc1JlcSxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5jaGFubmVsKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMSxcbiAgICAgICAgX2luc3RhbmNlLmNoYW5uZWwgYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5tZW1iZXJzICYmIF9pbnN0YW5jZS5tZW1iZXJzLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgMixcbiAgICAgICAgX2luc3RhbmNlLm1lbWJlcnMgYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAyLk1lbWJlci5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jaGFubmVsPzogcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQ7XG4gIHByaXZhdGUgX21lbWJlcnM/OiBwcm90b1B1YlYxTW9kZWxzMDAyLk1lbWJlcltdO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgQWRkTWVtYmVyc1JlcSB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxBZGRNZW1iZXJzUmVxLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmNoYW5uZWwgPSBfdmFsdWUuY2hhbm5lbFxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQoX3ZhbHVlLmNoYW5uZWwpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1lbWJlcnMgPSAoX3ZhbHVlLm1lbWJlcnMgfHwgW10pLm1hcChcbiAgICAgIG0gPT4gbmV3IHByb3RvUHViVjFNb2RlbHMwMDIuTWVtYmVyKG0pXG4gICAgKTtcbiAgICBBZGRNZW1iZXJzUmVxLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgY2hhbm5lbCgpOiBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2NoYW5uZWw7XG4gIH1cbiAgc2V0IGNoYW5uZWwodmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMDEuVWlkIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fY2hhbm5lbCA9IHZhbHVlO1xuICB9XG4gIGdldCBtZW1iZXJzKCk6IHByb3RvUHViVjFNb2RlbHMwMDIuTWVtYmVyW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9tZW1iZXJzO1xuICB9XG4gIHNldCBtZW1iZXJzKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDAyLk1lbWJlcltdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbWVtYmVycyA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIEFkZE1lbWJlcnNSZXEuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogQWRkTWVtYmVyc1JlcS5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNoYW5uZWw6IHRoaXMuY2hhbm5lbCA/IHRoaXMuY2hhbm5lbC50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgbWVtYmVyczogKHRoaXMubWVtYmVycyB8fCBbXSkubWFwKG0gPT4gbS50b09iamVjdCgpKVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IEFkZE1lbWJlcnNSZXEuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBjaGFubmVsOiB0aGlzLmNoYW5uZWwgPyB0aGlzLmNoYW5uZWwudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgbWVtYmVyczogKHRoaXMubWVtYmVycyB8fCBbXSkubWFwKG0gPT4gbS50b1Byb3RvYnVmSlNPTihvcHRpb25zKSlcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEFkZE1lbWJlcnNSZXEge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIEFkZE1lbWJlcnNSZXFcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIGNoYW5uZWw/OiBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZC5Bc09iamVjdDtcbiAgICBtZW1iZXJzPzogcHJvdG9QdWJWMU1vZGVsczAwMi5NZW1iZXIuQXNPYmplY3RbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBBZGRNZW1iZXJzUmVxXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBjaGFubmVsPzogcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIG1lbWJlcnM/OiBwcm90b1B1YlYxTW9kZWxzMDAyLk1lbWJlci5Bc1Byb3RvYnVmSlNPTltdIHwgbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIHByb3RvLnB1Yi52MS5jaGFubmVsLkFkZE1lbWJlclRvTG9jYWxNdWNcbiAqL1xuZXhwb3J0IGNsYXNzIEFkZE1lbWJlclRvTG9jYWxNdWMgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdwcm90by5wdWIudjEuY2hhbm5lbC5BZGRNZW1iZXJUb0xvY2FsTXVjJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQWRkTWVtYmVyVG9Mb2NhbE11YygpO1xuICAgIEFkZE1lbWJlclRvTG9jYWxNdWMuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBBZGRNZW1iZXJUb0xvY2FsTXVjKSB7XG4gICAgX2luc3RhbmNlLm11Y1VpZCA9IF9pbnN0YW5jZS5tdWNVaWQgfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5vbGRNZW1iZXJzID0gX2luc3RhbmNlLm9sZE1lbWJlcnMgfHwgW107XG4gICAgX2luc3RhbmNlLm5ld01lbWJlcnMgPSBfaW5zdGFuY2UubmV3TWVtYmVycyB8fCBbXTtcbiAgICBfaW5zdGFuY2UubmFtZSA9IF9pbnN0YW5jZS5uYW1lIHx8ICcnO1xuICAgIF9pbnN0YW5jZS5pc3N1ZXIgPSBfaW5zdGFuY2UuaXNzdWVyIHx8IHVuZGVmaW5lZDtcbiAgICBfaW5zdGFuY2UubGFzdE1lc3NhZ2VJZCA9IF9pbnN0YW5jZS5sYXN0TWVzc2FnZUlkIHx8ICcwJztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IEFkZE1lbWJlclRvTG9jYWxNdWMsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLm11Y1VpZCA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UubXVjVWlkLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2VJbml0aWFsaXplcjIgPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMi5NZW1iZXIoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMixcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDIuTWVtYmVyLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgKF9pbnN0YW5jZS5vbGRNZW1iZXJzID0gX2luc3RhbmNlLm9sZE1lbWJlcnMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2VJbml0aWFsaXplcjMgPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMi5NZW1iZXIoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMyxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDIuTWVtYmVyLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgKF9pbnN0YW5jZS5uZXdNZW1iZXJzID0gX2luc3RhbmNlLm5ld01lbWJlcnMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIzXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIF9pbnN0YW5jZS5uYW1lID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBfaW5zdGFuY2UuaXNzdWVyID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDIuTWVtYmVyKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5pc3N1ZXIsXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAyLk1lbWJlci5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgX2luc3RhbmNlLmxhc3RNZXNzYWdlSWQgPSBfcmVhZGVyLnJlYWRJbnQ2NFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQWRkTWVtYmVyVG9Mb2NhbE11Yy5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IEFkZE1lbWJlclRvTG9jYWxNdWMsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UubXVjVWlkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMSxcbiAgICAgICAgX2luc3RhbmNlLm11Y1VpZCBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDEuVWlkLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLm9sZE1lbWJlcnMgJiYgX2luc3RhbmNlLm9sZE1lbWJlcnMubGVuZ3RoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgICAyLFxuICAgICAgICBfaW5zdGFuY2Uub2xkTWVtYmVycyBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDIuTWVtYmVyLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLm5ld01lbWJlcnMgJiYgX2luc3RhbmNlLm5ld01lbWJlcnMubGVuZ3RoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgICAzLFxuICAgICAgICBfaW5zdGFuY2UubmV3TWVtYmVycyBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDIuTWVtYmVyLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLm5hbWUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoNCwgX2luc3RhbmNlLm5hbWUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmlzc3Vlcikge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDUsXG4gICAgICAgIF9pbnN0YW5jZS5pc3N1ZXIgYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAyLk1lbWJlci5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5sYXN0TWVzc2FnZUlkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlSW50NjRTdHJpbmcoNiwgX2luc3RhbmNlLmxhc3RNZXNzYWdlSWQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX211Y1VpZD86IHByb3RvUHViVjFNb2RlbHMwMDEuVWlkO1xuICBwcml2YXRlIF9vbGRNZW1iZXJzPzogcHJvdG9QdWJWMU1vZGVsczAwMi5NZW1iZXJbXTtcbiAgcHJpdmF0ZSBfbmV3TWVtYmVycz86IHByb3RvUHViVjFNb2RlbHMwMDIuTWVtYmVyW107XG4gIHByaXZhdGUgX25hbWU/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2lzc3Vlcj86IHByb3RvUHViVjFNb2RlbHMwMDIuTWVtYmVyO1xuICBwcml2YXRlIF9sYXN0TWVzc2FnZUlkPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgQWRkTWVtYmVyVG9Mb2NhbE11YyB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxBZGRNZW1iZXJUb0xvY2FsTXVjLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLm11Y1VpZCA9IF92YWx1ZS5tdWNVaWRcbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMDEuVWlkKF92YWx1ZS5tdWNVaWQpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLm9sZE1lbWJlcnMgPSAoX3ZhbHVlLm9sZE1lbWJlcnMgfHwgW10pLm1hcChcbiAgICAgIG0gPT4gbmV3IHByb3RvUHViVjFNb2RlbHMwMDIuTWVtYmVyKG0pXG4gICAgKTtcbiAgICB0aGlzLm5ld01lbWJlcnMgPSAoX3ZhbHVlLm5ld01lbWJlcnMgfHwgW10pLm1hcChcbiAgICAgIG0gPT4gbmV3IHByb3RvUHViVjFNb2RlbHMwMDIuTWVtYmVyKG0pXG4gICAgKTtcbiAgICB0aGlzLm5hbWUgPSBfdmFsdWUubmFtZTtcbiAgICB0aGlzLmlzc3VlciA9IF92YWx1ZS5pc3N1ZXJcbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMDIuTWVtYmVyKF92YWx1ZS5pc3N1ZXIpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmxhc3RNZXNzYWdlSWQgPSBfdmFsdWUubGFzdE1lc3NhZ2VJZDtcbiAgICBBZGRNZW1iZXJUb0xvY2FsTXVjLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgbXVjVWlkKCk6IHByb3RvUHViVjFNb2RlbHMwMDEuVWlkIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbXVjVWlkO1xuICB9XG4gIHNldCBtdWNVaWQodmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMDEuVWlkIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbXVjVWlkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG9sZE1lbWJlcnMoKTogcHJvdG9QdWJWMU1vZGVsczAwMi5NZW1iZXJbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29sZE1lbWJlcnM7XG4gIH1cbiAgc2V0IG9sZE1lbWJlcnModmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMDIuTWVtYmVyW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9vbGRNZW1iZXJzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG5ld01lbWJlcnMoKTogcHJvdG9QdWJWMU1vZGVsczAwMi5NZW1iZXJbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX25ld01lbWJlcnM7XG4gIH1cbiAgc2V0IG5ld01lbWJlcnModmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMDIuTWVtYmVyW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9uZXdNZW1iZXJzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG5hbWUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuICBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIGdldCBpc3N1ZXIoKTogcHJvdG9QdWJWMU1vZGVsczAwMi5NZW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9pc3N1ZXI7XG4gIH1cbiAgc2V0IGlzc3Vlcih2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAwMi5NZW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9pc3N1ZXIgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbGFzdE1lc3NhZ2VJZCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9sYXN0TWVzc2FnZUlkO1xuICB9XG4gIHNldCBsYXN0TWVzc2FnZUlkKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9sYXN0TWVzc2FnZUlkID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgQWRkTWVtYmVyVG9Mb2NhbE11Yy5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBBZGRNZW1iZXJUb0xvY2FsTXVjLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgbXVjVWlkOiB0aGlzLm11Y1VpZCA/IHRoaXMubXVjVWlkLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBvbGRNZW1iZXJzOiAodGhpcy5vbGRNZW1iZXJzIHx8IFtdKS5tYXAobSA9PiBtLnRvT2JqZWN0KCkpLFxuICAgICAgbmV3TWVtYmVyczogKHRoaXMubmV3TWVtYmVycyB8fCBbXSkubWFwKG0gPT4gbS50b09iamVjdCgpKSxcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIGlzc3VlcjogdGhpcy5pc3N1ZXIgPyB0aGlzLmlzc3Vlci50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgbGFzdE1lc3NhZ2VJZDogdGhpcy5sYXN0TWVzc2FnZUlkXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogQWRkTWVtYmVyVG9Mb2NhbE11Yy5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG11Y1VpZDogdGhpcy5tdWNVaWQgPyB0aGlzLm11Y1VpZC50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICBvbGRNZW1iZXJzOiAodGhpcy5vbGRNZW1iZXJzIHx8IFtdKS5tYXAobSA9PiBtLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpKSxcbiAgICAgIG5ld01lbWJlcnM6ICh0aGlzLm5ld01lbWJlcnMgfHwgW10pLm1hcChtID0+IG0udG9Qcm90b2J1ZkpTT04ob3B0aW9ucykpLFxuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgaXNzdWVyOiB0aGlzLmlzc3VlciA/IHRoaXMuaXNzdWVyLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIGxhc3RNZXNzYWdlSWQ6IHRoaXMubGFzdE1lc3NhZ2VJZFxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgQWRkTWVtYmVyVG9Mb2NhbE11YyB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgQWRkTWVtYmVyVG9Mb2NhbE11Y1xuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgbXVjVWlkPzogcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQuQXNPYmplY3Q7XG4gICAgb2xkTWVtYmVycz86IHByb3RvUHViVjFNb2RlbHMwMDIuTWVtYmVyLkFzT2JqZWN0W107XG4gICAgbmV3TWVtYmVycz86IHByb3RvUHViVjFNb2RlbHMwMDIuTWVtYmVyLkFzT2JqZWN0W107XG4gICAgbmFtZT86IHN0cmluZztcbiAgICBpc3N1ZXI/OiBwcm90b1B1YlYxTW9kZWxzMDAyLk1lbWJlci5Bc09iamVjdDtcbiAgICBsYXN0TWVzc2FnZUlkPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIEFkZE1lbWJlclRvTG9jYWxNdWNcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIG11Y1VpZD86IHByb3RvUHViVjFNb2RlbHMwMDEuVWlkLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBvbGRNZW1iZXJzPzogcHJvdG9QdWJWMU1vZGVsczAwMi5NZW1iZXIuQXNQcm90b2J1ZkpTT05bXSB8IG51bGw7XG4gICAgbmV3TWVtYmVycz86IHByb3RvUHViVjFNb2RlbHMwMDIuTWVtYmVyLkFzUHJvdG9idWZKU09OW10gfCBudWxsO1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgaXNzdWVyPzogcHJvdG9QdWJWMU1vZGVsczAwMi5NZW1iZXIuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIGxhc3RNZXNzYWdlSWQ/OiBzdHJpbmc7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBwcm90by5wdWIudjEuY2hhbm5lbC5BZGRNZW1iZXJzUmVzXG4gKi9cbmV4cG9ydCBjbGFzcyBBZGRNZW1iZXJzUmVzIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAncHJvdG8ucHViLnYxLmNoYW5uZWwuQWRkTWVtYmVyc1Jlcyc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEFkZE1lbWJlcnNSZXMoKTtcbiAgICBBZGRNZW1iZXJzUmVzLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogQWRkTWVtYmVyc1Jlcykge31cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBBZGRNZW1iZXJzUmVzLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEFkZE1lbWJlcnNSZXMucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBBZGRNZW1iZXJzUmVzLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHt9XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBBZGRNZW1iZXJzUmVzIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEFkZE1lbWJlcnNSZXMuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIEFkZE1lbWJlcnNSZXMucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIEFkZE1lbWJlcnNSZXMuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogQWRkTWVtYmVyc1Jlcy5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBBZGRNZW1iZXJzUmVzLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge307XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgQWRkTWVtYmVyc1JlcyB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgQWRkTWVtYmVyc1Jlc1xuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7fVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBBZGRNZW1iZXJzUmVzXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHt9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3IgcHJvdG8ucHViLnYxLmNoYW5uZWwuS2lja01lbWJlcnNSZXFcbiAqL1xuZXhwb3J0IGNsYXNzIEtpY2tNZW1iZXJzUmVxIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAncHJvdG8ucHViLnYxLmNoYW5uZWwuS2lja01lbWJlcnNSZXEnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBLaWNrTWVtYmVyc1JlcSgpO1xuICAgIEtpY2tNZW1iZXJzUmVxLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogS2lja01lbWJlcnNSZXEpIHtcbiAgICBfaW5zdGFuY2UuY2hhbm5lbCA9IF9pbnN0YW5jZS5jaGFubmVsIHx8IHVuZGVmaW5lZDtcbiAgICBfaW5zdGFuY2UubWVtYmVycyA9IF9pbnN0YW5jZS5tZW1iZXJzIHx8IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogS2lja01lbWJlcnNSZXEsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLmNoYW5uZWwgPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmNoYW5uZWwsXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyMiA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIyLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICAoX2luc3RhbmNlLm1lbWJlcnMgPSBfaW5zdGFuY2UubWVtYmVycyB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgS2lja01lbWJlcnNSZXEucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBLaWNrTWVtYmVyc1JlcSxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5jaGFubmVsKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMSxcbiAgICAgICAgX2luc3RhbmNlLmNoYW5uZWwgYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5tZW1iZXJzICYmIF9pbnN0YW5jZS5tZW1iZXJzLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgMixcbiAgICAgICAgX2luc3RhbmNlLm1lbWJlcnMgYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jaGFubmVsPzogcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQ7XG4gIHByaXZhdGUgX21lbWJlcnM/OiBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZFtdO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgS2lja01lbWJlcnNSZXEgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8S2lja01lbWJlcnNSZXEuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMuY2hhbm5lbCA9IF92YWx1ZS5jaGFubmVsXG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZChfdmFsdWUuY2hhbm5lbClcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMubWVtYmVycyA9IChfdmFsdWUubWVtYmVycyB8fCBbXSkubWFwKFxuICAgICAgbSA9PiBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQobSlcbiAgICApO1xuICAgIEtpY2tNZW1iZXJzUmVxLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgY2hhbm5lbCgpOiBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2NoYW5uZWw7XG4gIH1cbiAgc2V0IGNoYW5uZWwodmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMDEuVWlkIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fY2hhbm5lbCA9IHZhbHVlO1xuICB9XG4gIGdldCBtZW1iZXJzKCk6IHByb3RvUHViVjFNb2RlbHMwMDEuVWlkW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9tZW1iZXJzO1xuICB9XG4gIHNldCBtZW1iZXJzKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZFtdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbWVtYmVycyA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIEtpY2tNZW1iZXJzUmVxLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IEtpY2tNZW1iZXJzUmVxLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgY2hhbm5lbDogdGhpcy5jaGFubmVsID8gdGhpcy5jaGFubmVsLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBtZW1iZXJzOiAodGhpcy5tZW1iZXJzIHx8IFtdKS5tYXAobSA9PiBtLnRvT2JqZWN0KCkpXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogS2lja01lbWJlcnNSZXEuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBjaGFubmVsOiB0aGlzLmNoYW5uZWwgPyB0aGlzLmNoYW5uZWwudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgbWVtYmVyczogKHRoaXMubWVtYmVycyB8fCBbXSkubWFwKG0gPT4gbS50b1Byb3RvYnVmSlNPTihvcHRpb25zKSlcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEtpY2tNZW1iZXJzUmVxIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBLaWNrTWVtYmVyc1JlcVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgY2hhbm5lbD86IHByb3RvUHViVjFNb2RlbHMwMDEuVWlkLkFzT2JqZWN0O1xuICAgIG1lbWJlcnM/OiBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZC5Bc09iamVjdFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIEtpY2tNZW1iZXJzUmVxXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBjaGFubmVsPzogcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIG1lbWJlcnM/OiBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZC5Bc1Byb3RvYnVmSlNPTltdIHwgbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIHByb3RvLnB1Yi52MS5jaGFubmVsLktpY2tNZW1iZXJzUmVzXG4gKi9cbmV4cG9ydCBjbGFzcyBLaWNrTWVtYmVyc1JlcyBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ3Byb3RvLnB1Yi52MS5jaGFubmVsLktpY2tNZW1iZXJzUmVzJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgS2lja01lbWJlcnNSZXMoKTtcbiAgICBLaWNrTWVtYmVyc1Jlcy5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IEtpY2tNZW1iZXJzUmVzKSB7fVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IEtpY2tNZW1iZXJzUmVzLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEtpY2tNZW1iZXJzUmVzLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogS2lja01lbWJlcnNSZXMsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge31cblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIEtpY2tNZW1iZXJzUmVzIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEtpY2tNZW1iZXJzUmVzLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICBLaWNrTWVtYmVyc1Jlcy5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgS2lja01lbWJlcnNSZXMuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogS2lja01lbWJlcnNSZXMuQXNPYmplY3Qge1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogS2lja01lbWJlcnNSZXMuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7fTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBLaWNrTWVtYmVyc1JlcyB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgS2lja01lbWJlcnNSZXNcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge31cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgS2lja01lbWJlcnNSZXNcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge31cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBwcm90by5wdWIudjEuY2hhbm5lbC5CYW5NZW1iZXJSZXFcbiAqL1xuZXhwb3J0IGNsYXNzIEJhbk1lbWJlclJlcSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ3Byb3RvLnB1Yi52MS5jaGFubmVsLkJhbk1lbWJlclJlcSc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEJhbk1lbWJlclJlcSgpO1xuICAgIEJhbk1lbWJlclJlcS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IEJhbk1lbWJlclJlcSkge1xuICAgIF9pbnN0YW5jZS5jaGFubmVsID0gX2luc3RhbmNlLmNoYW5uZWwgfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5tZW1iZXIgPSBfaW5zdGFuY2UubWVtYmVyIHx8IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IEJhbk1lbWJlclJlcSxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UuY2hhbm5lbCA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuY2hhbm5lbCxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDEuVWlkLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UubWVtYmVyID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDEuVWlkKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5tZW1iZXIsXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQmFuTWVtYmVyUmVxLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogQmFuTWVtYmVyUmVxLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLmNoYW5uZWwpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAxLFxuICAgICAgICBfaW5zdGFuY2UuY2hhbm5lbCBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDEuVWlkLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLm1lbWJlcikge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDIsXG4gICAgICAgIF9pbnN0YW5jZS5tZW1iZXIgYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jaGFubmVsPzogcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQ7XG4gIHByaXZhdGUgX21lbWJlcj86IHByb3RvUHViVjFNb2RlbHMwMDEuVWlkO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgQmFuTWVtYmVyUmVxIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEJhbk1lbWJlclJlcS5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5jaGFubmVsID0gX3ZhbHVlLmNoYW5uZWxcbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMDEuVWlkKF92YWx1ZS5jaGFubmVsKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5tZW1iZXIgPSBfdmFsdWUubWVtYmVyXG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZChfdmFsdWUubWVtYmVyKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgQmFuTWVtYmVyUmVxLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgY2hhbm5lbCgpOiBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2NoYW5uZWw7XG4gIH1cbiAgc2V0IGNoYW5uZWwodmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMDEuVWlkIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fY2hhbm5lbCA9IHZhbHVlO1xuICB9XG4gIGdldCBtZW1iZXIoKTogcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9tZW1iZXI7XG4gIH1cbiAgc2V0IG1lbWJlcih2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9tZW1iZXIgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBCYW5NZW1iZXJSZXEuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogQmFuTWVtYmVyUmVxLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgY2hhbm5lbDogdGhpcy5jaGFubmVsID8gdGhpcy5jaGFubmVsLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBtZW1iZXI6IHRoaXMubWVtYmVyID8gdGhpcy5tZW1iZXIudG9PYmplY3QoKSA6IHVuZGVmaW5lZFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IEJhbk1lbWJlclJlcS5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNoYW5uZWw6IHRoaXMuY2hhbm5lbCA/IHRoaXMuY2hhbm5lbC50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICBtZW1iZXI6IHRoaXMubWVtYmVyID8gdGhpcy5tZW1iZXIudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBCYW5NZW1iZXJSZXEge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIEJhbk1lbWJlclJlcVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgY2hhbm5lbD86IHByb3RvUHViVjFNb2RlbHMwMDEuVWlkLkFzT2JqZWN0O1xuICAgIG1lbWJlcj86IHByb3RvUHViVjFNb2RlbHMwMDEuVWlkLkFzT2JqZWN0O1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIEJhbk1lbWJlclJlcVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgY2hhbm5lbD86IHByb3RvUHViVjFNb2RlbHMwMDEuVWlkLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBtZW1iZXI/OiBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBwcm90by5wdWIudjEuY2hhbm5lbC5CYW5NZW1iZXJSZXNcbiAqL1xuZXhwb3J0IGNsYXNzIEJhbk1lbWJlclJlcyBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ3Byb3RvLnB1Yi52MS5jaGFubmVsLkJhbk1lbWJlclJlcyc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEJhbk1lbWJlclJlcygpO1xuICAgIEJhbk1lbWJlclJlcy5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IEJhbk1lbWJlclJlcykge31cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBCYW5NZW1iZXJSZXMsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQmFuTWVtYmVyUmVzLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogQmFuTWVtYmVyUmVzLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHt9XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBCYW5NZW1iZXJSZXMgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8QmFuTWVtYmVyUmVzLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICBCYW5NZW1iZXJSZXMucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIEJhbk1lbWJlclJlcy5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBCYW5NZW1iZXJSZXMuQXNPYmplY3Qge1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogQmFuTWVtYmVyUmVzLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge307XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgQmFuTWVtYmVyUmVzIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBCYW5NZW1iZXJSZXNcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge31cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgQmFuTWVtYmVyUmVzXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHt9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3IgcHJvdG8ucHViLnYxLmNoYW5uZWwuVW5iYW5NZW1iZXJSZXFcbiAqL1xuZXhwb3J0IGNsYXNzIFVuYmFuTWVtYmVyUmVxIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAncHJvdG8ucHViLnYxLmNoYW5uZWwuVW5iYW5NZW1iZXJSZXEnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBVbmJhbk1lbWJlclJlcSgpO1xuICAgIFVuYmFuTWVtYmVyUmVxLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogVW5iYW5NZW1iZXJSZXEpIHtcbiAgICBfaW5zdGFuY2UuY2hhbm5lbCA9IF9pbnN0YW5jZS5jaGFubmVsIHx8IHVuZGVmaW5lZDtcbiAgICBfaW5zdGFuY2UubWVtYmVyID0gX2luc3RhbmNlLm1lbWJlciB8fCB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBVbmJhbk1lbWJlclJlcSxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UuY2hhbm5lbCA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuY2hhbm5lbCxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDEuVWlkLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UubWVtYmVyID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDEuVWlkKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5tZW1iZXIsXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgVW5iYW5NZW1iZXJSZXEucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBVbmJhbk1lbWJlclJlcSxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5jaGFubmVsKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMSxcbiAgICAgICAgX2luc3RhbmNlLmNoYW5uZWwgYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5tZW1iZXIpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAyLFxuICAgICAgICBfaW5zdGFuY2UubWVtYmVyIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY2hhbm5lbD86IHByb3RvUHViVjFNb2RlbHMwMDEuVWlkO1xuICBwcml2YXRlIF9tZW1iZXI/OiBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZDtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIFVuYmFuTWVtYmVyUmVxIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFVuYmFuTWVtYmVyUmVxLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmNoYW5uZWwgPSBfdmFsdWUuY2hhbm5lbFxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQoX3ZhbHVlLmNoYW5uZWwpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1lbWJlciA9IF92YWx1ZS5tZW1iZXJcbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMDEuVWlkKF92YWx1ZS5tZW1iZXIpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICBVbmJhbk1lbWJlclJlcS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGNoYW5uZWwoKTogcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9jaGFubmVsO1xuICB9XG4gIHNldCBjaGFubmVsKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZCB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2NoYW5uZWwgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbWVtYmVyKCk6IHByb3RvUHViVjFNb2RlbHMwMDEuVWlkIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbWVtYmVyO1xuICB9XG4gIHNldCBtZW1iZXIodmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMDEuVWlkIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbWVtYmVyID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgVW5iYW5NZW1iZXJSZXEuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogVW5iYW5NZW1iZXJSZXEuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBjaGFubmVsOiB0aGlzLmNoYW5uZWwgPyB0aGlzLmNoYW5uZWwudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIG1lbWJlcjogdGhpcy5tZW1iZXIgPyB0aGlzLm1lbWJlci50b09iamVjdCgpIDogdW5kZWZpbmVkXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogVW5iYW5NZW1iZXJSZXEuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBjaGFubmVsOiB0aGlzLmNoYW5uZWwgPyB0aGlzLmNoYW5uZWwudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgbWVtYmVyOiB0aGlzLm1lbWJlciA/IHRoaXMubWVtYmVyLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbFxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgVW5iYW5NZW1iZXJSZXEge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIFVuYmFuTWVtYmVyUmVxXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBjaGFubmVsPzogcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQuQXNPYmplY3Q7XG4gICAgbWVtYmVyPzogcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQuQXNPYmplY3Q7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgVW5iYW5NZW1iZXJSZXFcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIGNoYW5uZWw/OiBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgbWVtYmVyPzogcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3IgcHJvdG8ucHViLnYxLmNoYW5uZWwuVW5iYW5NZW1iZXJSZXNcbiAqL1xuZXhwb3J0IGNsYXNzIFVuYmFuTWVtYmVyUmVzIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAncHJvdG8ucHViLnYxLmNoYW5uZWwuVW5iYW5NZW1iZXJSZXMnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBVbmJhbk1lbWJlclJlcygpO1xuICAgIFVuYmFuTWVtYmVyUmVzLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogVW5iYW5NZW1iZXJSZXMpIHt9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogVW5iYW5NZW1iZXJSZXMsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgVW5iYW5NZW1iZXJSZXMucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBVbmJhbk1lbWJlclJlcyxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgVW5iYW5NZW1iZXJSZXMgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8VW5iYW5NZW1iZXJSZXMuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIFVuYmFuTWVtYmVyUmVzLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBVbmJhbk1lbWJlclJlcy5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBVbmJhbk1lbWJlclJlcy5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBVbmJhbk1lbWJlclJlcy5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIFVuYmFuTWVtYmVyUmVzIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBVbmJhbk1lbWJlclJlc1xuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7fVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBVbmJhbk1lbWJlclJlc1xuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7fVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIHByb3RvLnB1Yi52MS5jaGFubmVsLkdldENoYW5uZWxSZXFcbiAqL1xuZXhwb3J0IGNsYXNzIEdldENoYW5uZWxSZXEgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdwcm90by5wdWIudjEuY2hhbm5lbC5HZXRDaGFubmVsUmVxJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgR2V0Q2hhbm5lbFJlcSgpO1xuICAgIEdldENoYW5uZWxSZXEuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBHZXRDaGFubmVsUmVxKSB7XG4gICAgX2luc3RhbmNlLnVpZCA9IF9pbnN0YW5jZS51aWQgfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS50b2tlbiA9IF9pbnN0YW5jZS50b2tlbiB8fCAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IEdldENoYW5uZWxSZXEsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLnVpZCA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UudWlkLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS50b2tlbiA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgR2V0Q2hhbm5lbFJlcS5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IEdldENoYW5uZWxSZXEsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UudWlkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMSxcbiAgICAgICAgX2luc3RhbmNlLnVpZCBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDEuVWlkLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnRva2VuKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDIsIF9pbnN0YW5jZS50b2tlbik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdWlkPzogcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQ7XG4gIHByaXZhdGUgX3Rva2VuPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgR2V0Q2hhbm5lbFJlcSB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxHZXRDaGFubmVsUmVxLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnVpZCA9IF92YWx1ZS51aWQgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQoX3ZhbHVlLnVpZCkgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy50b2tlbiA9IF92YWx1ZS50b2tlbjtcbiAgICBHZXRDaGFubmVsUmVxLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgdWlkKCk6IHByb3RvUHViVjFNb2RlbHMwMDEuVWlkIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdWlkO1xuICB9XG4gIHNldCB1aWQodmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMDEuVWlkIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdWlkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHRva2VuKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3Rva2VuO1xuICB9XG4gIHNldCB0b2tlbih2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdG9rZW4gPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBHZXRDaGFubmVsUmVxLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IEdldENoYW5uZWxSZXEuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICB1aWQ6IHRoaXMudWlkID8gdGhpcy51aWQudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIHRva2VuOiB0aGlzLnRva2VuXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogR2V0Q2hhbm5lbFJlcS5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVpZDogdGhpcy51aWQgPyB0aGlzLnVpZC50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICB0b2tlbjogdGhpcy50b2tlblxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgR2V0Q2hhbm5lbFJlcSB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgR2V0Q2hhbm5lbFJlcVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgdWlkPzogcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQuQXNPYmplY3Q7XG4gICAgdG9rZW4/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgR2V0Q2hhbm5lbFJlcVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgdWlkPzogcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHRva2VuPzogc3RyaW5nO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3IgcHJvdG8ucHViLnYxLmNoYW5uZWwuR2V0Q2hhbm5lbFJlc1xuICovXG5leHBvcnQgY2xhc3MgR2V0Q2hhbm5lbFJlcyBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ3Byb3RvLnB1Yi52MS5jaGFubmVsLkdldENoYW5uZWxSZXMnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBHZXRDaGFubmVsUmVzKCk7XG4gICAgR2V0Q2hhbm5lbFJlcy5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IEdldENoYW5uZWxSZXMpIHtcbiAgICBfaW5zdGFuY2UuaW5mbyA9IF9pbnN0YW5jZS5pbmZvIHx8IHVuZGVmaW5lZDtcbiAgICBfaW5zdGFuY2UucG9wdWxhdGlvbiA9IF9pbnN0YW5jZS5wb3B1bGF0aW9uIHx8ICcwJztcbiAgICBfaW5zdGFuY2UudG9rZW4gPSBfaW5zdGFuY2UudG9rZW4gfHwgJyc7XG4gICAgX2luc3RhbmNlLnBpbk1lc3NhZ2VzID0gX2luc3RhbmNlLnBpbk1lc3NhZ2VzIHx8IFtdO1xuICAgIF9pbnN0YW5jZS5sYXN0TWVzc2FnZUlkID0gX2luc3RhbmNlLmxhc3RNZXNzYWdlSWQgfHwgJzAnO1xuICAgIF9pbnN0YW5jZS5yZXF1ZXN0ZXJSb2xlID0gX2luc3RhbmNlLnJlcXVlc3RlclJvbGUgfHwgMDtcbiAgICBfaW5zdGFuY2UubGFzdFVwZGF0ZSA9IF9pbnN0YW5jZS5sYXN0VXBkYXRlIHx8ICcwJztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IEdldENoYW5uZWxSZXMsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLmluZm8gPSBuZXcgQ2hhbm5lbEluZm8oKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmluZm8sXG4gICAgICAgICAgICBDaGFubmVsSW5mby5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLnBvcHVsYXRpb24gPSBfcmVhZGVyLnJlYWRJbnQ2NFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgX2luc3RhbmNlLnRva2VuID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAoX2luc3RhbmNlLnBpbk1lc3NhZ2VzID0gX2luc3RhbmNlLnBpbk1lc3NhZ2VzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgLi4uKF9yZWFkZXIucmVhZFBhY2tlZEludDY0U3RyaW5nKCkgfHwgW10pXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIF9pbnN0YW5jZS5sYXN0TWVzc2FnZUlkID0gX3JlYWRlci5yZWFkSW50NjRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIF9pbnN0YW5jZS5yZXF1ZXN0ZXJSb2xlID0gX3JlYWRlci5yZWFkRW51bSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgX2luc3RhbmNlLmxhc3RVcGRhdGUgPSBfcmVhZGVyLnJlYWRJbnQ2NFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgR2V0Q2hhbm5lbFJlcy5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IEdldENoYW5uZWxSZXMsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UuaW5mbykge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDEsXG4gICAgICAgIF9pbnN0YW5jZS5pbmZvIGFzIGFueSxcbiAgICAgICAgQ2hhbm5lbEluZm8uc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UucG9wdWxhdGlvbikge1xuICAgICAgX3dyaXRlci53cml0ZUludDY0U3RyaW5nKDIsIF9pbnN0YW5jZS5wb3B1bGF0aW9uKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS50b2tlbikge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZyg0LCBfaW5zdGFuY2UudG9rZW4pO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnBpbk1lc3NhZ2VzICYmIF9pbnN0YW5jZS5waW5NZXNzYWdlcy5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVQYWNrZWRJbnQ2NFN0cmluZyg1LCBfaW5zdGFuY2UucGluTWVzc2FnZXMpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmxhc3RNZXNzYWdlSWQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQ2NFN0cmluZyg2LCBfaW5zdGFuY2UubGFzdE1lc3NhZ2VJZCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UucmVxdWVzdGVyUm9sZSkge1xuICAgICAgX3dyaXRlci53cml0ZUVudW0oMywgX2luc3RhbmNlLnJlcXVlc3RlclJvbGUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmxhc3RVcGRhdGUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQ2NFN0cmluZyg3LCBfaW5zdGFuY2UubGFzdFVwZGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaW5mbz86IENoYW5uZWxJbmZvO1xuICBwcml2YXRlIF9wb3B1bGF0aW9uPzogc3RyaW5nO1xuICBwcml2YXRlIF90b2tlbj86IHN0cmluZztcbiAgcHJpdmF0ZSBfcGluTWVzc2FnZXM/OiBzdHJpbmdbXTtcbiAgcHJpdmF0ZSBfbGFzdE1lc3NhZ2VJZD86IHN0cmluZztcbiAgcHJpdmF0ZSBfcmVxdWVzdGVyUm9sZT86IHByb3RvUHViVjFNb2RlbHMwMDIuUm9sZTtcbiAgcHJpdmF0ZSBfbGFzdFVwZGF0ZT86IHN0cmluZztcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIEdldENoYW5uZWxSZXMgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8R2V0Q2hhbm5lbFJlcy5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5pbmZvID0gX3ZhbHVlLmluZm8gPyBuZXcgQ2hhbm5lbEluZm8oX3ZhbHVlLmluZm8pIDogdW5kZWZpbmVkO1xuICAgIHRoaXMucG9wdWxhdGlvbiA9IF92YWx1ZS5wb3B1bGF0aW9uO1xuICAgIHRoaXMudG9rZW4gPSBfdmFsdWUudG9rZW47XG4gICAgdGhpcy5waW5NZXNzYWdlcyA9IChfdmFsdWUucGluTWVzc2FnZXMgfHwgW10pLnNsaWNlKCk7XG4gICAgdGhpcy5sYXN0TWVzc2FnZUlkID0gX3ZhbHVlLmxhc3RNZXNzYWdlSWQ7XG4gICAgdGhpcy5yZXF1ZXN0ZXJSb2xlID0gX3ZhbHVlLnJlcXVlc3RlclJvbGU7XG4gICAgdGhpcy5sYXN0VXBkYXRlID0gX3ZhbHVlLmxhc3RVcGRhdGU7XG4gICAgR2V0Q2hhbm5lbFJlcy5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGluZm8oKTogQ2hhbm5lbEluZm8gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9pbmZvO1xuICB9XG4gIHNldCBpbmZvKHZhbHVlOiBDaGFubmVsSW5mbyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2luZm8gPSB2YWx1ZTtcbiAgfVxuICBnZXQgcG9wdWxhdGlvbigpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wb3B1bGF0aW9uO1xuICB9XG4gIHNldCBwb3B1bGF0aW9uKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9wb3B1bGF0aW9uID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHRva2VuKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3Rva2VuO1xuICB9XG4gIHNldCB0b2tlbih2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdG9rZW4gPSB2YWx1ZTtcbiAgfVxuICBnZXQgcGluTWVzc2FnZXMoKTogc3RyaW5nW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9waW5NZXNzYWdlcztcbiAgfVxuICBzZXQgcGluTWVzc2FnZXModmFsdWU6IHN0cmluZ1tdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcGluTWVzc2FnZXMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbGFzdE1lc3NhZ2VJZCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9sYXN0TWVzc2FnZUlkO1xuICB9XG4gIHNldCBsYXN0TWVzc2FnZUlkKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9sYXN0TWVzc2FnZUlkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHJlcXVlc3RlclJvbGUoKTogcHJvdG9QdWJWMU1vZGVsczAwMi5Sb2xlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcmVxdWVzdGVyUm9sZTtcbiAgfVxuICBzZXQgcmVxdWVzdGVyUm9sZSh2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAwMi5Sb2xlIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcmVxdWVzdGVyUm9sZSA9IHZhbHVlO1xuICB9XG4gIGdldCBsYXN0VXBkYXRlKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2xhc3RVcGRhdGU7XG4gIH1cbiAgc2V0IGxhc3RVcGRhdGUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2xhc3RVcGRhdGUgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBHZXRDaGFubmVsUmVzLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IEdldENoYW5uZWxSZXMuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBpbmZvOiB0aGlzLmluZm8gPyB0aGlzLmluZm8udG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIHBvcHVsYXRpb246IHRoaXMucG9wdWxhdGlvbixcbiAgICAgIHRva2VuOiB0aGlzLnRva2VuLFxuICAgICAgcGluTWVzc2FnZXM6ICh0aGlzLnBpbk1lc3NhZ2VzIHx8IFtdKS5zbGljZSgpLFxuICAgICAgbGFzdE1lc3NhZ2VJZDogdGhpcy5sYXN0TWVzc2FnZUlkLFxuICAgICAgcmVxdWVzdGVyUm9sZTogdGhpcy5yZXF1ZXN0ZXJSb2xlLFxuICAgICAgbGFzdFVwZGF0ZTogdGhpcy5sYXN0VXBkYXRlXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogR2V0Q2hhbm5lbFJlcy5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGluZm86IHRoaXMuaW5mbyA/IHRoaXMuaW5mby50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICBwb3B1bGF0aW9uOiB0aGlzLnBvcHVsYXRpb24sXG4gICAgICB0b2tlbjogdGhpcy50b2tlbixcbiAgICAgIHBpbk1lc3NhZ2VzOiAodGhpcy5waW5NZXNzYWdlcyB8fCBbXSkuc2xpY2UoKSxcbiAgICAgIGxhc3RNZXNzYWdlSWQ6IHRoaXMubGFzdE1lc3NhZ2VJZCxcbiAgICAgIHJlcXVlc3RlclJvbGU6XG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDIuUm9sZVtcbiAgICAgICAgICB0aGlzLnJlcXVlc3RlclJvbGUgPT09IG51bGwgfHwgdGhpcy5yZXF1ZXN0ZXJSb2xlID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgOiB0aGlzLnJlcXVlc3RlclJvbGVcbiAgICAgICAgXSxcbiAgICAgIGxhc3RVcGRhdGU6IHRoaXMubGFzdFVwZGF0ZVxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgR2V0Q2hhbm5lbFJlcyB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgR2V0Q2hhbm5lbFJlc1xuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgaW5mbz86IENoYW5uZWxJbmZvLkFzT2JqZWN0O1xuICAgIHBvcHVsYXRpb24/OiBzdHJpbmc7XG4gICAgdG9rZW4/OiBzdHJpbmc7XG4gICAgcGluTWVzc2FnZXM/OiBzdHJpbmdbXTtcbiAgICBsYXN0TWVzc2FnZUlkPzogc3RyaW5nO1xuICAgIHJlcXVlc3RlclJvbGU/OiBwcm90b1B1YlYxTW9kZWxzMDAyLlJvbGU7XG4gICAgbGFzdFVwZGF0ZT86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBHZXRDaGFubmVsUmVzXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBpbmZvPzogQ2hhbm5lbEluZm8uQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHBvcHVsYXRpb24/OiBzdHJpbmc7XG4gICAgdG9rZW4/OiBzdHJpbmc7XG4gICAgcGluTWVzc2FnZXM/OiBzdHJpbmdbXTtcbiAgICBsYXN0TWVzc2FnZUlkPzogc3RyaW5nO1xuICAgIHJlcXVlc3RlclJvbGU/OiBzdHJpbmc7XG4gICAgbGFzdFVwZGF0ZT86IHN0cmluZztcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIHByb3RvLnB1Yi52MS5jaGFubmVsLkdldE1lbWJlcnNSZXFcbiAqL1xuZXhwb3J0IGNsYXNzIEdldE1lbWJlcnNSZXEgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdwcm90by5wdWIudjEuY2hhbm5lbC5HZXRNZW1iZXJzUmVxJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgR2V0TWVtYmVyc1JlcSgpO1xuICAgIEdldE1lbWJlcnNSZXEuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBHZXRNZW1iZXJzUmVxKSB7XG4gICAgX2luc3RhbmNlLnVpZCA9IF9pbnN0YW5jZS51aWQgfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5wb2ludGVyID0gX2luc3RhbmNlLnBvaW50ZXIgfHwgMDtcbiAgICBfaW5zdGFuY2UubGltaXQgPSBfaW5zdGFuY2UubGltaXQgfHwgMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IEdldE1lbWJlcnNSZXEsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLnVpZCA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UudWlkLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIF9pbnN0YW5jZS5wb2ludGVyID0gX3JlYWRlci5yZWFkSW50MzIoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIF9pbnN0YW5jZS5saW1pdCA9IF9yZWFkZXIucmVhZEludDMyKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBHZXRNZW1iZXJzUmVxLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogR2V0TWVtYmVyc1JlcSxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS51aWQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAxLFxuICAgICAgICBfaW5zdGFuY2UudWlkIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UucG9pbnRlcikge1xuICAgICAgX3dyaXRlci53cml0ZUludDMyKDMsIF9pbnN0YW5jZS5wb2ludGVyKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5saW1pdCkge1xuICAgICAgX3dyaXRlci53cml0ZUludDMyKDQsIF9pbnN0YW5jZS5saW1pdCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdWlkPzogcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQ7XG4gIHByaXZhdGUgX3BvaW50ZXI/OiBudW1iZXI7XG4gIHByaXZhdGUgX2xpbWl0PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgR2V0TWVtYmVyc1JlcSB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxHZXRNZW1iZXJzUmVxLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnVpZCA9IF92YWx1ZS51aWQgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQoX3ZhbHVlLnVpZCkgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5wb2ludGVyID0gX3ZhbHVlLnBvaW50ZXI7XG4gICAgdGhpcy5saW1pdCA9IF92YWx1ZS5saW1pdDtcbiAgICBHZXRNZW1iZXJzUmVxLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgdWlkKCk6IHByb3RvUHViVjFNb2RlbHMwMDEuVWlkIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdWlkO1xuICB9XG4gIHNldCB1aWQodmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMDEuVWlkIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdWlkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHBvaW50ZXIoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcG9pbnRlcjtcbiAgfVxuICBzZXQgcG9pbnRlcih2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcG9pbnRlciA9IHZhbHVlO1xuICB9XG4gIGdldCBsaW1pdCgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9saW1pdDtcbiAgfVxuICBzZXQgbGltaXQodmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2xpbWl0ID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgR2V0TWVtYmVyc1JlcS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBHZXRNZW1iZXJzUmVxLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgdWlkOiB0aGlzLnVpZCA/IHRoaXMudWlkLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBwb2ludGVyOiB0aGlzLnBvaW50ZXIsXG4gICAgICBsaW1pdDogdGhpcy5saW1pdFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IEdldE1lbWJlcnNSZXEuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICB1aWQ6IHRoaXMudWlkID8gdGhpcy51aWQudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgcG9pbnRlcjogdGhpcy5wb2ludGVyLFxuICAgICAgbGltaXQ6IHRoaXMubGltaXRcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEdldE1lbWJlcnNSZXEge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIEdldE1lbWJlcnNSZXFcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIHVpZD86IHByb3RvUHViVjFNb2RlbHMwMDEuVWlkLkFzT2JqZWN0O1xuICAgIHBvaW50ZXI/OiBudW1iZXI7XG4gICAgbGltaXQ/OiBudW1iZXI7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgR2V0TWVtYmVyc1JlcVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgdWlkPzogcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHBvaW50ZXI/OiBudW1iZXI7XG4gICAgbGltaXQ/OiBudW1iZXI7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBwcm90by5wdWIudjEuY2hhbm5lbC5HZXRNZW1iZXJzUmVzXG4gKi9cbmV4cG9ydCBjbGFzcyBHZXRNZW1iZXJzUmVzIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAncHJvdG8ucHViLnYxLmNoYW5uZWwuR2V0TWVtYmVyc1Jlcyc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEdldE1lbWJlcnNSZXMoKTtcbiAgICBHZXRNZW1iZXJzUmVzLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogR2V0TWVtYmVyc1Jlcykge1xuICAgIF9pbnN0YW5jZS5tZW1iZXJzID0gX2luc3RhbmNlLm1lbWJlcnMgfHwgW107XG4gICAgX2luc3RhbmNlLmZpbmlzaGVkID0gX2luc3RhbmNlLmZpbmlzaGVkIHx8IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogR2V0TWVtYmVyc1JlcyxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBjb25zdCBtZXNzYWdlSW5pdGlhbGl6ZXIxID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDIuTWVtYmVyKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjEsXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAyLk1lbWJlci5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIChfaW5zdGFuY2UubWVtYmVycyA9IF9pbnN0YW5jZS5tZW1iZXJzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UuZmluaXNoZWQgPSBfcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBHZXRNZW1iZXJzUmVzLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogR2V0TWVtYmVyc1JlcyxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5tZW1iZXJzICYmIF9pbnN0YW5jZS5tZW1iZXJzLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgMSxcbiAgICAgICAgX2luc3RhbmNlLm1lbWJlcnMgYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAyLk1lbWJlci5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5maW5pc2hlZCkge1xuICAgICAgX3dyaXRlci53cml0ZUJvb2woMiwgX2luc3RhbmNlLmZpbmlzaGVkKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9tZW1iZXJzPzogcHJvdG9QdWJWMU1vZGVsczAwMi5NZW1iZXJbXTtcbiAgcHJpdmF0ZSBfZmluaXNoZWQ/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgR2V0TWVtYmVyc1JlcyB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxHZXRNZW1iZXJzUmVzLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLm1lbWJlcnMgPSAoX3ZhbHVlLm1lbWJlcnMgfHwgW10pLm1hcChcbiAgICAgIG0gPT4gbmV3IHByb3RvUHViVjFNb2RlbHMwMDIuTWVtYmVyKG0pXG4gICAgKTtcbiAgICB0aGlzLmZpbmlzaGVkID0gX3ZhbHVlLmZpbmlzaGVkO1xuICAgIEdldE1lbWJlcnNSZXMucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBtZW1iZXJzKCk6IHByb3RvUHViVjFNb2RlbHMwMDIuTWVtYmVyW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9tZW1iZXJzO1xuICB9XG4gIHNldCBtZW1iZXJzKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDAyLk1lbWJlcltdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbWVtYmVycyA9IHZhbHVlO1xuICB9XG4gIGdldCBmaW5pc2hlZCgpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZmluaXNoZWQ7XG4gIH1cbiAgc2V0IGZpbmlzaGVkKHZhbHVlOiBib29sZWFuIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZmluaXNoZWQgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBHZXRNZW1iZXJzUmVzLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IEdldE1lbWJlcnNSZXMuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBtZW1iZXJzOiAodGhpcy5tZW1iZXJzIHx8IFtdKS5tYXAobSA9PiBtLnRvT2JqZWN0KCkpLFxuICAgICAgZmluaXNoZWQ6IHRoaXMuZmluaXNoZWRcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBHZXRNZW1iZXJzUmVzLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgbWVtYmVyczogKHRoaXMubWVtYmVycyB8fCBbXSkubWFwKG0gPT4gbS50b1Byb3RvYnVmSlNPTihvcHRpb25zKSksXG4gICAgICBmaW5pc2hlZDogdGhpcy5maW5pc2hlZFxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgR2V0TWVtYmVyc1JlcyB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgR2V0TWVtYmVyc1Jlc1xuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgbWVtYmVycz86IHByb3RvUHViVjFNb2RlbHMwMDIuTWVtYmVyLkFzT2JqZWN0W107XG4gICAgZmluaXNoZWQ/OiBib29sZWFuO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIEdldE1lbWJlcnNSZXNcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIG1lbWJlcnM/OiBwcm90b1B1YlYxTW9kZWxzMDAyLk1lbWJlci5Bc1Byb3RvYnVmSlNPTltdIHwgbnVsbDtcbiAgICBmaW5pc2hlZD86IGJvb2xlYW47XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBwcm90by5wdWIudjEuY2hhbm5lbC5Kb2luQ2hhbm5lbFJlcVxuICovXG5leHBvcnQgY2xhc3MgSm9pbkNoYW5uZWxSZXEgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdwcm90by5wdWIudjEuY2hhbm5lbC5Kb2luQ2hhbm5lbFJlcSc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEpvaW5DaGFubmVsUmVxKCk7XG4gICAgSm9pbkNoYW5uZWxSZXEuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBKb2luQ2hhbm5lbFJlcSkge1xuICAgIF9pbnN0YW5jZS5jaGFubmVsID0gX2luc3RhbmNlLmNoYW5uZWwgfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS50b2tlbiA9IF9pbnN0YW5jZS50b2tlbiB8fCAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IEpvaW5DaGFubmVsUmVxLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5jaGFubmVsID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDEuVWlkKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5jaGFubmVsLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS50b2tlbiA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgSm9pbkNoYW5uZWxSZXEucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBKb2luQ2hhbm5lbFJlcSxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5jaGFubmVsKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMSxcbiAgICAgICAgX2luc3RhbmNlLmNoYW5uZWwgYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS50b2tlbikge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygyLCBfaW5zdGFuY2UudG9rZW4pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NoYW5uZWw/OiBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZDtcbiAgcHJpdmF0ZSBfdG9rZW4/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBKb2luQ2hhbm5lbFJlcSB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxKb2luQ2hhbm5lbFJlcS5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5jaGFubmVsID0gX3ZhbHVlLmNoYW5uZWxcbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMDEuVWlkKF92YWx1ZS5jaGFubmVsKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy50b2tlbiA9IF92YWx1ZS50b2tlbjtcbiAgICBKb2luQ2hhbm5lbFJlcS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGNoYW5uZWwoKTogcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9jaGFubmVsO1xuICB9XG4gIHNldCBjaGFubmVsKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZCB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2NoYW5uZWwgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdG9rZW4oKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdG9rZW47XG4gIH1cbiAgc2V0IHRva2VuKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl90b2tlbiA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIEpvaW5DaGFubmVsUmVxLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IEpvaW5DaGFubmVsUmVxLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgY2hhbm5lbDogdGhpcy5jaGFubmVsID8gdGhpcy5jaGFubmVsLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICB0b2tlbjogdGhpcy50b2tlblxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IEpvaW5DaGFubmVsUmVxLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2hhbm5lbDogdGhpcy5jaGFubmVsID8gdGhpcy5jaGFubmVsLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIHRva2VuOiB0aGlzLnRva2VuXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBKb2luQ2hhbm5lbFJlcSB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgSm9pbkNoYW5uZWxSZXFcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIGNoYW5uZWw/OiBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZC5Bc09iamVjdDtcbiAgICB0b2tlbj86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBKb2luQ2hhbm5lbFJlcVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgY2hhbm5lbD86IHByb3RvUHViVjFNb2RlbHMwMDEuVWlkLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICB0b2tlbj86IHN0cmluZztcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIHByb3RvLnB1Yi52MS5jaGFubmVsLkpvaW5DaGFubmVsUmVzXG4gKi9cbmV4cG9ydCBjbGFzcyBKb2luQ2hhbm5lbFJlcyBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ3Byb3RvLnB1Yi52MS5jaGFubmVsLkpvaW5DaGFubmVsUmVzJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgSm9pbkNoYW5uZWxSZXMoKTtcbiAgICBKb2luQ2hhbm5lbFJlcy5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IEpvaW5DaGFubmVsUmVzKSB7fVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IEpvaW5DaGFubmVsUmVzLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEpvaW5DaGFubmVsUmVzLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogSm9pbkNoYW5uZWxSZXMsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge31cblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIEpvaW5DaGFubmVsUmVzIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEpvaW5DaGFubmVsUmVzLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICBKb2luQ2hhbm5lbFJlcy5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgSm9pbkNoYW5uZWxSZXMuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogSm9pbkNoYW5uZWxSZXMuQXNPYmplY3Qge1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogSm9pbkNoYW5uZWxSZXMuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7fTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBKb2luQ2hhbm5lbFJlcyB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgSm9pbkNoYW5uZWxSZXNcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge31cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgSm9pbkNoYW5uZWxSZXNcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge31cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBwcm90by5wdWIudjEuY2hhbm5lbC5MZWF2ZUNoYW5uZWxSZXFcbiAqL1xuZXhwb3J0IGNsYXNzIExlYXZlQ2hhbm5lbFJlcSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ3Byb3RvLnB1Yi52MS5jaGFubmVsLkxlYXZlQ2hhbm5lbFJlcSc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IExlYXZlQ2hhbm5lbFJlcSgpO1xuICAgIExlYXZlQ2hhbm5lbFJlcS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IExlYXZlQ2hhbm5lbFJlcSkge1xuICAgIF9pbnN0YW5jZS5jaGFubmVsID0gX2luc3RhbmNlLmNoYW5uZWwgfHwgdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogTGVhdmVDaGFubmVsUmVxLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5jaGFubmVsID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDEuVWlkKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5jaGFubmVsLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIExlYXZlQ2hhbm5lbFJlcS5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IExlYXZlQ2hhbm5lbFJlcSxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5jaGFubmVsKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMSxcbiAgICAgICAgX2luc3RhbmNlLmNoYW5uZWwgYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jaGFubmVsPzogcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQ7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBMZWF2ZUNoYW5uZWxSZXEgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8TGVhdmVDaGFubmVsUmVxLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmNoYW5uZWwgPSBfdmFsdWUuY2hhbm5lbFxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQoX3ZhbHVlLmNoYW5uZWwpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICBMZWF2ZUNoYW5uZWxSZXEucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBjaGFubmVsKCk6IHByb3RvUHViVjFNb2RlbHMwMDEuVWlkIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fY2hhbm5lbDtcbiAgfVxuICBzZXQgY2hhbm5lbCh2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9jaGFubmVsID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgTGVhdmVDaGFubmVsUmVxLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IExlYXZlQ2hhbm5lbFJlcS5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNoYW5uZWw6IHRoaXMuY2hhbm5lbCA/IHRoaXMuY2hhbm5lbC50b09iamVjdCgpIDogdW5kZWZpbmVkXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogTGVhdmVDaGFubmVsUmVxLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2hhbm5lbDogdGhpcy5jaGFubmVsID8gdGhpcy5jaGFubmVsLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbFxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgTGVhdmVDaGFubmVsUmVxIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBMZWF2ZUNoYW5uZWxSZXFcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIGNoYW5uZWw/OiBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZC5Bc09iamVjdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBMZWF2ZUNoYW5uZWxSZXFcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIGNoYW5uZWw/OiBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBwcm90by5wdWIudjEuY2hhbm5lbC5MZWF2ZUNoYW5uZWxSZXNcbiAqL1xuZXhwb3J0IGNsYXNzIExlYXZlQ2hhbm5lbFJlcyBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ3Byb3RvLnB1Yi52MS5jaGFubmVsLkxlYXZlQ2hhbm5lbFJlcyc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IExlYXZlQ2hhbm5lbFJlcygpO1xuICAgIExlYXZlQ2hhbm5lbFJlcy5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IExlYXZlQ2hhbm5lbFJlcykge31cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBMZWF2ZUNoYW5uZWxSZXMsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgTGVhdmVDaGFubmVsUmVzLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogTGVhdmVDaGFubmVsUmVzLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHt9XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBMZWF2ZUNoYW5uZWxSZXMgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8TGVhdmVDaGFubmVsUmVzLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICBMZWF2ZUNoYW5uZWxSZXMucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIExlYXZlQ2hhbm5lbFJlcy5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBMZWF2ZUNoYW5uZWxSZXMuQXNPYmplY3Qge1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogTGVhdmVDaGFubmVsUmVzLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge307XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgTGVhdmVDaGFubmVsUmVzIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBMZWF2ZUNoYW5uZWxSZXNcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge31cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgTGVhdmVDaGFubmVsUmVzXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHt9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3IgcHJvdG8ucHViLnYxLmNoYW5uZWwuQ3JlYXRlVG9rZW5SZXFcbiAqL1xuZXhwb3J0IGNsYXNzIENyZWF0ZVRva2VuUmVxIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAncHJvdG8ucHViLnYxLmNoYW5uZWwuQ3JlYXRlVG9rZW5SZXEnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBDcmVhdGVUb2tlblJlcSgpO1xuICAgIENyZWF0ZVRva2VuUmVxLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogQ3JlYXRlVG9rZW5SZXEpIHtcbiAgICBfaW5zdGFuY2UudWlkID0gX2luc3RhbmNlLnVpZCB8fCB1bmRlZmluZWQ7XG4gICAgX2luc3RhbmNlLnZhbGlkVW50aWwgPSBfaW5zdGFuY2UudmFsaWRVbnRpbCB8fCAnMCc7XG4gICAgX2luc3RhbmNlLm51bWJlck9mQXZhaWxhYmxlSm9pbnMgPSBfaW5zdGFuY2UubnVtYmVyT2ZBdmFpbGFibGVKb2lucyB8fCAnMCc7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBDcmVhdGVUb2tlblJlcSxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UudWlkID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDEuVWlkKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS51aWQsXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLnZhbGlkVW50aWwgPSBfcmVhZGVyLnJlYWRJbnQ2NFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgX2luc3RhbmNlLm51bWJlck9mQXZhaWxhYmxlSm9pbnMgPSBfcmVhZGVyLnJlYWRJbnQ2NFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQ3JlYXRlVG9rZW5SZXEucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBDcmVhdGVUb2tlblJlcSxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS51aWQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAxLFxuICAgICAgICBfaW5zdGFuY2UudWlkIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UudmFsaWRVbnRpbCkge1xuICAgICAgX3dyaXRlci53cml0ZUludDY0U3RyaW5nKDIsIF9pbnN0YW5jZS52YWxpZFVudGlsKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5udW1iZXJPZkF2YWlsYWJsZUpvaW5zKSB7XG4gICAgICBfd3JpdGVyLndyaXRlSW50NjRTdHJpbmcoMywgX2luc3RhbmNlLm51bWJlck9mQXZhaWxhYmxlSm9pbnMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3VpZD86IHByb3RvUHViVjFNb2RlbHMwMDEuVWlkO1xuICBwcml2YXRlIF92YWxpZFVudGlsPzogc3RyaW5nO1xuICBwcml2YXRlIF9udW1iZXJPZkF2YWlsYWJsZUpvaW5zPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgQ3JlYXRlVG9rZW5SZXEgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8Q3JlYXRlVG9rZW5SZXEuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMudWlkID0gX3ZhbHVlLnVpZCA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZChfdmFsdWUudWlkKSA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnZhbGlkVW50aWwgPSBfdmFsdWUudmFsaWRVbnRpbDtcbiAgICB0aGlzLm51bWJlck9mQXZhaWxhYmxlSm9pbnMgPSBfdmFsdWUubnVtYmVyT2ZBdmFpbGFibGVKb2lucztcbiAgICBDcmVhdGVUb2tlblJlcS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHVpZCgpOiBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3VpZDtcbiAgfVxuICBzZXQgdWlkKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZCB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3VpZCA9IHZhbHVlO1xuICB9XG4gIGdldCB2YWxpZFVudGlsKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbGlkVW50aWw7XG4gIH1cbiAgc2V0IHZhbGlkVW50aWwodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3ZhbGlkVW50aWwgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbnVtYmVyT2ZBdmFpbGFibGVKb2lucygpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9udW1iZXJPZkF2YWlsYWJsZUpvaW5zO1xuICB9XG4gIHNldCBudW1iZXJPZkF2YWlsYWJsZUpvaW5zKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9udW1iZXJPZkF2YWlsYWJsZUpvaW5zID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgQ3JlYXRlVG9rZW5SZXEuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogQ3JlYXRlVG9rZW5SZXEuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICB1aWQ6IHRoaXMudWlkID8gdGhpcy51aWQudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIHZhbGlkVW50aWw6IHRoaXMudmFsaWRVbnRpbCxcbiAgICAgIG51bWJlck9mQXZhaWxhYmxlSm9pbnM6IHRoaXMubnVtYmVyT2ZBdmFpbGFibGVKb2luc1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IENyZWF0ZVRva2VuUmVxLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgdWlkOiB0aGlzLnVpZCA/IHRoaXMudWlkLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIHZhbGlkVW50aWw6IHRoaXMudmFsaWRVbnRpbCxcbiAgICAgIG51bWJlck9mQXZhaWxhYmxlSm9pbnM6IHRoaXMubnVtYmVyT2ZBdmFpbGFibGVKb2luc1xuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgQ3JlYXRlVG9rZW5SZXEge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIENyZWF0ZVRva2VuUmVxXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICB1aWQ/OiBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZC5Bc09iamVjdDtcbiAgICB2YWxpZFVudGlsPzogc3RyaW5nO1xuICAgIG51bWJlck9mQXZhaWxhYmxlSm9pbnM/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgQ3JlYXRlVG9rZW5SZXFcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHVpZD86IHByb3RvUHViVjFNb2RlbHMwMDEuVWlkLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICB2YWxpZFVudGlsPzogc3RyaW5nO1xuICAgIG51bWJlck9mQXZhaWxhYmxlSm9pbnM/OiBzdHJpbmc7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBwcm90by5wdWIudjEuY2hhbm5lbC5DcmVhdGVUb2tlblJlc1xuICovXG5leHBvcnQgY2xhc3MgQ3JlYXRlVG9rZW5SZXMgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdwcm90by5wdWIudjEuY2hhbm5lbC5DcmVhdGVUb2tlblJlcyc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IENyZWF0ZVRva2VuUmVzKCk7XG4gICAgQ3JlYXRlVG9rZW5SZXMuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBDcmVhdGVUb2tlblJlcykge1xuICAgIF9pbnN0YW5jZS5qb2luVG9rZW4gPSBfaW5zdGFuY2Uuam9pblRva2VuIHx8ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogQ3JlYXRlVG9rZW5SZXMsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLmpvaW5Ub2tlbiA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQ3JlYXRlVG9rZW5SZXMucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBDcmVhdGVUb2tlblJlcyxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5qb2luVG9rZW4pIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLmpvaW5Ub2tlbik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfam9pblRva2VuPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgQ3JlYXRlVG9rZW5SZXMgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8Q3JlYXRlVG9rZW5SZXMuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMuam9pblRva2VuID0gX3ZhbHVlLmpvaW5Ub2tlbjtcbiAgICBDcmVhdGVUb2tlblJlcy5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGpvaW5Ub2tlbigpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9qb2luVG9rZW47XG4gIH1cbiAgc2V0IGpvaW5Ub2tlbih2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fam9pblRva2VuID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgQ3JlYXRlVG9rZW5SZXMuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogQ3JlYXRlVG9rZW5SZXMuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBqb2luVG9rZW46IHRoaXMuam9pblRva2VuXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogQ3JlYXRlVG9rZW5SZXMuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBqb2luVG9rZW46IHRoaXMuam9pblRva2VuXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBDcmVhdGVUb2tlblJlcyB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgQ3JlYXRlVG9rZW5SZXNcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIGpvaW5Ub2tlbj86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBDcmVhdGVUb2tlblJlc1xuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgam9pblRva2VuPzogc3RyaW5nO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3IgcHJvdG8ucHViLnYxLmNoYW5uZWwuRGVsZXRlVG9rZW5SZXFcbiAqL1xuZXhwb3J0IGNsYXNzIERlbGV0ZVRva2VuUmVxIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAncHJvdG8ucHViLnYxLmNoYW5uZWwuRGVsZXRlVG9rZW5SZXEnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBEZWxldGVUb2tlblJlcSgpO1xuICAgIERlbGV0ZVRva2VuUmVxLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogRGVsZXRlVG9rZW5SZXEpIHtcbiAgICBfaW5zdGFuY2UudWlkID0gX2luc3RhbmNlLnVpZCB8fCB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBEZWxldGVUb2tlblJlcSxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UudWlkID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDEuVWlkKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS51aWQsXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgRGVsZXRlVG9rZW5SZXEucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBEZWxldGVUb2tlblJlcSxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS51aWQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAxLFxuICAgICAgICBfaW5zdGFuY2UudWlkIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdWlkPzogcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQ7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBEZWxldGVUb2tlblJlcSB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxEZWxldGVUb2tlblJlcS5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy51aWQgPSBfdmFsdWUudWlkID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMDEuVWlkKF92YWx1ZS51aWQpIDogdW5kZWZpbmVkO1xuICAgIERlbGV0ZVRva2VuUmVxLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgdWlkKCk6IHByb3RvUHViVjFNb2RlbHMwMDEuVWlkIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdWlkO1xuICB9XG4gIHNldCB1aWQodmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMDEuVWlkIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdWlkID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgRGVsZXRlVG9rZW5SZXEuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogRGVsZXRlVG9rZW5SZXEuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICB1aWQ6IHRoaXMudWlkID8gdGhpcy51aWQudG9PYmplY3QoKSA6IHVuZGVmaW5lZFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IERlbGV0ZVRva2VuUmVxLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgdWlkOiB0aGlzLnVpZCA/IHRoaXMudWlkLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbFxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgRGVsZXRlVG9rZW5SZXEge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIERlbGV0ZVRva2VuUmVxXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICB1aWQ/OiBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZC5Bc09iamVjdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBEZWxldGVUb2tlblJlcVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgdWlkPzogcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3IgcHJvdG8ucHViLnYxLmNoYW5uZWwuRGVsZXRlVG9rZW5SZXNcbiAqL1xuZXhwb3J0IGNsYXNzIERlbGV0ZVRva2VuUmVzIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAncHJvdG8ucHViLnYxLmNoYW5uZWwuRGVsZXRlVG9rZW5SZXMnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBEZWxldGVUb2tlblJlcygpO1xuICAgIERlbGV0ZVRva2VuUmVzLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogRGVsZXRlVG9rZW5SZXMpIHt9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogRGVsZXRlVG9rZW5SZXMsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgRGVsZXRlVG9rZW5SZXMucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBEZWxldGVUb2tlblJlcyxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgRGVsZXRlVG9rZW5SZXMgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8RGVsZXRlVG9rZW5SZXMuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIERlbGV0ZVRva2VuUmVzLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBEZWxldGVUb2tlblJlcy5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBEZWxldGVUb2tlblJlcy5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBEZWxldGVUb2tlblJlcy5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIERlbGV0ZVRva2VuUmVzIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBEZWxldGVUb2tlblJlc1xuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7fVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBEZWxldGVUb2tlblJlc1xuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7fVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIHByb3RvLnB1Yi52MS5jaGFubmVsLlBpbk1lc3NhZ2VSZXFcbiAqL1xuZXhwb3J0IGNsYXNzIFBpbk1lc3NhZ2VSZXEgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdwcm90by5wdWIudjEuY2hhbm5lbC5QaW5NZXNzYWdlUmVxJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgUGluTWVzc2FnZVJlcSgpO1xuICAgIFBpbk1lc3NhZ2VSZXEuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBQaW5NZXNzYWdlUmVxKSB7XG4gICAgX2luc3RhbmNlLnVpZCA9IF9pbnN0YW5jZS51aWQgfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5tZXNzYWdlSWQgPSBfaW5zdGFuY2UubWVzc2FnZUlkIHx8ICcwJztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IFBpbk1lc3NhZ2VSZXEsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLnVpZCA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UudWlkLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5tZXNzYWdlSWQgPSBfcmVhZGVyLnJlYWRJbnQ2NFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgUGluTWVzc2FnZVJlcS5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IFBpbk1lc3NhZ2VSZXEsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UudWlkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMSxcbiAgICAgICAgX2luc3RhbmNlLnVpZCBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDEuVWlkLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLm1lc3NhZ2VJZCkge1xuICAgICAgX3dyaXRlci53cml0ZUludDY0U3RyaW5nKDIsIF9pbnN0YW5jZS5tZXNzYWdlSWQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3VpZD86IHByb3RvUHViVjFNb2RlbHMwMDEuVWlkO1xuICBwcml2YXRlIF9tZXNzYWdlSWQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBQaW5NZXNzYWdlUmVxIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFBpbk1lc3NhZ2VSZXEuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMudWlkID0gX3ZhbHVlLnVpZCA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZChfdmFsdWUudWlkKSA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1lc3NhZ2VJZCA9IF92YWx1ZS5tZXNzYWdlSWQ7XG4gICAgUGluTWVzc2FnZVJlcS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHVpZCgpOiBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3VpZDtcbiAgfVxuICBzZXQgdWlkKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZCB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3VpZCA9IHZhbHVlO1xuICB9XG4gIGdldCBtZXNzYWdlSWQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbWVzc2FnZUlkO1xuICB9XG4gIHNldCBtZXNzYWdlSWQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX21lc3NhZ2VJZCA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFBpbk1lc3NhZ2VSZXEuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogUGluTWVzc2FnZVJlcS5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVpZDogdGhpcy51aWQgPyB0aGlzLnVpZC50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgbWVzc2FnZUlkOiB0aGlzLm1lc3NhZ2VJZFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IFBpbk1lc3NhZ2VSZXEuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICB1aWQ6IHRoaXMudWlkID8gdGhpcy51aWQudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgbWVzc2FnZUlkOiB0aGlzLm1lc3NhZ2VJZFxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgUGluTWVzc2FnZVJlcSB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgUGluTWVzc2FnZVJlcVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgdWlkPzogcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQuQXNPYmplY3Q7XG4gICAgbWVzc2FnZUlkPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIFBpbk1lc3NhZ2VSZXFcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHVpZD86IHByb3RvUHViVjFNb2RlbHMwMDEuVWlkLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBtZXNzYWdlSWQ/OiBzdHJpbmc7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBwcm90by5wdWIudjEuY2hhbm5lbC5QaW5NZXNzYWdlUmVzXG4gKi9cbmV4cG9ydCBjbGFzcyBQaW5NZXNzYWdlUmVzIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAncHJvdG8ucHViLnYxLmNoYW5uZWwuUGluTWVzc2FnZVJlcyc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFBpbk1lc3NhZ2VSZXMoKTtcbiAgICBQaW5NZXNzYWdlUmVzLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogUGluTWVzc2FnZVJlcykge31cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBQaW5NZXNzYWdlUmVzLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFBpbk1lc3NhZ2VSZXMucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBQaW5NZXNzYWdlUmVzLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHt9XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBQaW5NZXNzYWdlUmVzIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFBpbk1lc3NhZ2VSZXMuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIFBpbk1lc3NhZ2VSZXMucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFBpbk1lc3NhZ2VSZXMuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogUGluTWVzc2FnZVJlcy5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBQaW5NZXNzYWdlUmVzLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge307XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgUGluTWVzc2FnZVJlcyB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgUGluTWVzc2FnZVJlc1xuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7fVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBQaW5NZXNzYWdlUmVzXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHt9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3IgcHJvdG8ucHViLnYxLmNoYW5uZWwuVW5waW5NZXNzYWdlUmVxXG4gKi9cbmV4cG9ydCBjbGFzcyBVbnBpbk1lc3NhZ2VSZXEgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdwcm90by5wdWIudjEuY2hhbm5lbC5VbnBpbk1lc3NhZ2VSZXEnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBVbnBpbk1lc3NhZ2VSZXEoKTtcbiAgICBVbnBpbk1lc3NhZ2VSZXEuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBVbnBpbk1lc3NhZ2VSZXEpIHtcbiAgICBfaW5zdGFuY2UudWlkID0gX2luc3RhbmNlLnVpZCB8fCB1bmRlZmluZWQ7XG4gICAgX2luc3RhbmNlLm1lc3NhZ2VJZCA9IF9pbnN0YW5jZS5tZXNzYWdlSWQgfHwgJzAnO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogVW5waW5NZXNzYWdlUmVxLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS51aWQgPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLnVpZCxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDEuVWlkLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UubWVzc2FnZUlkID0gX3JlYWRlci5yZWFkSW50NjRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFVucGluTWVzc2FnZVJlcS5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IFVucGluTWVzc2FnZVJlcSxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS51aWQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAxLFxuICAgICAgICBfaW5zdGFuY2UudWlkIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UubWVzc2FnZUlkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlSW50NjRTdHJpbmcoMiwgX2luc3RhbmNlLm1lc3NhZ2VJZCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdWlkPzogcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQ7XG4gIHByaXZhdGUgX21lc3NhZ2VJZD86IHN0cmluZztcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIFVucGluTWVzc2FnZVJlcSB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxVbnBpbk1lc3NhZ2VSZXEuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMudWlkID0gX3ZhbHVlLnVpZCA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZChfdmFsdWUudWlkKSA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1lc3NhZ2VJZCA9IF92YWx1ZS5tZXNzYWdlSWQ7XG4gICAgVW5waW5NZXNzYWdlUmVxLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgdWlkKCk6IHByb3RvUHViVjFNb2RlbHMwMDEuVWlkIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdWlkO1xuICB9XG4gIHNldCB1aWQodmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMDEuVWlkIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdWlkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG1lc3NhZ2VJZCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9tZXNzYWdlSWQ7XG4gIH1cbiAgc2V0IG1lc3NhZ2VJZCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbWVzc2FnZUlkID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgVW5waW5NZXNzYWdlUmVxLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IFVucGluTWVzc2FnZVJlcS5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVpZDogdGhpcy51aWQgPyB0aGlzLnVpZC50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgbWVzc2FnZUlkOiB0aGlzLm1lc3NhZ2VJZFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IFVucGluTWVzc2FnZVJlcS5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVpZDogdGhpcy51aWQgPyB0aGlzLnVpZC50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICBtZXNzYWdlSWQ6IHRoaXMubWVzc2FnZUlkXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBVbnBpbk1lc3NhZ2VSZXEge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIFVucGluTWVzc2FnZVJlcVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgdWlkPzogcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQuQXNPYmplY3Q7XG4gICAgbWVzc2FnZUlkPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIFVucGluTWVzc2FnZVJlcVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgdWlkPzogcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIG1lc3NhZ2VJZD86IHN0cmluZztcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIHByb3RvLnB1Yi52MS5jaGFubmVsLlVucGluTWVzc2FnZVJlc1xuICovXG5leHBvcnQgY2xhc3MgVW5waW5NZXNzYWdlUmVzIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAncHJvdG8ucHViLnYxLmNoYW5uZWwuVW5waW5NZXNzYWdlUmVzJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgVW5waW5NZXNzYWdlUmVzKCk7XG4gICAgVW5waW5NZXNzYWdlUmVzLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogVW5waW5NZXNzYWdlUmVzKSB7fVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IFVucGluTWVzc2FnZVJlcyxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBVbnBpbk1lc3NhZ2VSZXMucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBVbnBpbk1lc3NhZ2VSZXMsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge31cblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIFVucGluTWVzc2FnZVJlcyB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxVbnBpbk1lc3NhZ2VSZXMuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIFVucGluTWVzc2FnZVJlcy5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgVW5waW5NZXNzYWdlUmVzLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IFVucGluTWVzc2FnZVJlcy5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBVbnBpbk1lc3NhZ2VSZXMuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7fTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBVbnBpbk1lc3NhZ2VSZXMge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIFVucGluTWVzc2FnZVJlc1xuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7fVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBVbnBpbk1lc3NhZ2VSZXNcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge31cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBwcm90by5wdWIudjEuY2hhbm5lbC5MYXN0VXBkYXRlXG4gKi9cbmV4cG9ydCBjbGFzcyBMYXN0VXBkYXRlIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAncHJvdG8ucHViLnYxLmNoYW5uZWwuTGFzdFVwZGF0ZSc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IExhc3RVcGRhdGUoKTtcbiAgICBMYXN0VXBkYXRlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogTGFzdFVwZGF0ZSkge31cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBMYXN0VXBkYXRlLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIExhc3RVcGRhdGUucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBMYXN0VXBkYXRlLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHt9XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBMYXN0VXBkYXRlIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPExhc3RVcGRhdGUuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIExhc3RVcGRhdGUucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIExhc3RVcGRhdGUuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogTGFzdFVwZGF0ZS5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBMYXN0VXBkYXRlLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge307XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgTGFzdFVwZGF0ZSB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgTGFzdFVwZGF0ZVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7fVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBMYXN0VXBkYXRlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHt9XG59XG4iXX0=