import { BinaryReader, BinaryWriter } from 'google-protobuf';
import * as protoPubV1Models001 from '../../../pub/v1/models/file.pb';
import * as protoPubV1Models002 from '../../../pub/v1/models/uid.pb';
import * as protoPubV1Models005 from '../../../pub/v1/models/sticker.pb';
import * as protoPubV1Models006 from '../../../pub/v1/models/location.pb';
import * as protoPubV1Models007 from '../../../pub/v1/models/payment.pb';
import * as protoPubV1Models008 from '../../../pub/v1/models/persistent-event.pb';
import * as protoPubV1Models009 from '../../../pub/v1/models/share-private-data.pb';
import * as protoPubV1Models010 from '../../../pub/v1/models/form.pb';
import * as protoPubV1Models011 from '../../../pub/v1/models/poll.pb';
import * as protoPubV1Models012 from '../../../pub/v1/models/muc.pb';
import * as protoPubV1Models013 from '../../../pub/v1/models/call.pb';
import * as protoPubV1Models014 from '../../../pub/v1/models/markup.pb';
/**
 * Message implementation for proto.pub.v1.models.Text
 */
export class Text {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Text to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.text = _value.text;
        Text.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new Text();
        Text.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.text = _instance.text || '';
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
                    _instance.text = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        Text.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.text) {
            _writer.writeString(1, _instance.text);
        }
    }
    get text() {
        return this._text;
    }
    set text(value) {
        this._text = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        Text.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            text: this.text
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
            text: this.text
        };
    }
}
Text.id = 'proto.pub.v1.models.Text';
/**
 * Message implementation for proto.pub.v1.models.ShareUid
 */
export class ShareUid {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ShareUid to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.uid = _value.uid ? new protoPubV1Models002.Uid(_value.uid) : undefined;
        this.phoneNumber = _value.phoneNumber;
        this.name = _value.name;
        this.joinToken = _value.joinToken;
        ShareUid.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ShareUid();
        ShareUid.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.uid = _instance.uid || undefined;
        _instance.phoneNumber = _instance.phoneNumber || '';
        _instance.name = _instance.name || '';
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
                    _instance.uid = new protoPubV1Models002.Uid();
                    _reader.readMessage(_instance.uid, protoPubV1Models002.Uid.deserializeBinaryFromReader);
                    break;
                case 2:
                    _instance.phoneNumber = _reader.readString();
                    break;
                case 3:
                    _instance.name = _reader.readString();
                    break;
                case 4:
                    _instance.joinToken = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        ShareUid.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.uid) {
            _writer.writeMessage(1, _instance.uid, protoPubV1Models002.Uid.serializeBinaryToWriter);
        }
        if (_instance.phoneNumber) {
            _writer.writeString(2, _instance.phoneNumber);
        }
        if (_instance.name) {
            _writer.writeString(3, _instance.name);
        }
        if (_instance.joinToken) {
            _writer.writeString(4, _instance.joinToken);
        }
    }
    get uid() {
        return this._uid;
    }
    set uid(value) {
        this._uid = value;
    }
    get phoneNumber() {
        return this._phoneNumber;
    }
    set phoneNumber(value) {
        this._phoneNumber = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
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
        ShareUid.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            uid: this.uid ? this.uid.toObject() : undefined,
            phoneNumber: this.phoneNumber,
            name: this.name,
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
            uid: this.uid ? this.uid.toProtobufJSON(options) : null,
            phoneNumber: this.phoneNumber,
            name: this.name,
            joinToken: this.joinToken
        };
    }
}
ShareUid.id = 'proto.pub.v1.models.ShareUid';
/**
 * Message implementation for proto.pub.v1.models.MessageDeliveryAck
 */
export class MessageDeliveryAck {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of MessageDeliveryAck to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.packetId = _value.packetId;
        this.id = _value.id;
        this.time = _value.time;
        this.from = _value.from
            ? new protoPubV1Models002.Uid(_value.from)
            : undefined;
        this.to = _value.to ? new protoPubV1Models002.Uid(_value.to) : undefined;
        this.ackOnLocalMessage = _value.ackOnLocalMessage;
        MessageDeliveryAck.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new MessageDeliveryAck();
        MessageDeliveryAck.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.packetId = _instance.packetId || '';
        _instance.id = _instance.id || '0';
        _instance.time = _instance.time || '0';
        _instance.from = _instance.from || undefined;
        _instance.to = _instance.to || undefined;
        _instance.ackOnLocalMessage = _instance.ackOnLocalMessage || false;
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
                    _instance.id = _reader.readInt64String();
                    break;
                case 3:
                    _instance.time = _reader.readInt64String();
                    break;
                case 4:
                    _instance.from = new protoPubV1Models002.Uid();
                    _reader.readMessage(_instance.from, protoPubV1Models002.Uid.deserializeBinaryFromReader);
                    break;
                case 5:
                    _instance.to = new protoPubV1Models002.Uid();
                    _reader.readMessage(_instance.to, protoPubV1Models002.Uid.deserializeBinaryFromReader);
                    break;
                case 6:
                    _instance.ackOnLocalMessage = _reader.readBool();
                    break;
                default:
                    _reader.skipField();
            }
        }
        MessageDeliveryAck.refineValues(_instance);
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
        if (_instance.id) {
            _writer.writeInt64String(2, _instance.id);
        }
        if (_instance.time) {
            _writer.writeInt64String(3, _instance.time);
        }
        if (_instance.from) {
            _writer.writeMessage(4, _instance.from, protoPubV1Models002.Uid.serializeBinaryToWriter);
        }
        if (_instance.to) {
            _writer.writeMessage(5, _instance.to, protoPubV1Models002.Uid.serializeBinaryToWriter);
        }
        if (_instance.ackOnLocalMessage) {
            _writer.writeBool(6, _instance.ackOnLocalMessage);
        }
    }
    get packetId() {
        return this._packetId;
    }
    set packetId(value) {
        this._packetId = value;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get time() {
        return this._time;
    }
    set time(value) {
        this._time = value;
    }
    get from() {
        return this._from;
    }
    set from(value) {
        this._from = value;
    }
    get to() {
        return this._to;
    }
    set to(value) {
        this._to = value;
    }
    get ackOnLocalMessage() {
        return this._ackOnLocalMessage;
    }
    set ackOnLocalMessage(value) {
        this._ackOnLocalMessage = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        MessageDeliveryAck.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            packetId: this.packetId,
            id: this.id,
            time: this.time,
            from: this.from ? this.from.toObject() : undefined,
            to: this.to ? this.to.toObject() : undefined,
            ackOnLocalMessage: this.ackOnLocalMessage
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
            id: this.id,
            time: this.time,
            from: this.from ? this.from.toProtobufJSON(options) : null,
            to: this.to ? this.to.toProtobufJSON(options) : null,
            ackOnLocalMessage: this.ackOnLocalMessage
        };
    }
}
MessageDeliveryAck.id = 'proto.pub.v1.models.MessageDeliveryAck';
/**
 * Message implementation for proto.pub.v1.models.MessageBrief
 */
export class MessageBrief {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of MessageBrief to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.packetId = _value.packetId;
        this.id = _value.id;
        this.time = _value.time;
        this.from = _value.from
            ? new protoPubV1Models002.Uid(_value.from)
            : undefined;
        this.to = _value.to ? new protoPubV1Models002.Uid(_value.to) : undefined;
        this.messageType = _value.messageType;
        this.text = _value.text;
        this.thumbnailReference = _value.thumbnailReference
            ? new protoPubV1Models001.File(_value.thumbnailReference)
            : undefined;
        this.isLocalMessage = _value.isLocalMessage;
        MessageBrief.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new MessageBrief();
        MessageBrief.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.packetId = _instance.packetId || '';
        _instance.id = _instance.id || '0';
        _instance.time = _instance.time || '0';
        _instance.from = _instance.from || undefined;
        _instance.to = _instance.to || undefined;
        _instance.messageType = _instance.messageType || 0;
        _instance.text = _instance.text || '';
        _instance.thumbnailReference = _instance.thumbnailReference || undefined;
        _instance.isLocalMessage = _instance.isLocalMessage || false;
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
                    _instance.id = _reader.readInt64String();
                    break;
                case 3:
                    _instance.time = _reader.readInt64String();
                    break;
                case 4:
                    _instance.from = new protoPubV1Models002.Uid();
                    _reader.readMessage(_instance.from, protoPubV1Models002.Uid.deserializeBinaryFromReader);
                    break;
                case 5:
                    _instance.to = new protoPubV1Models002.Uid();
                    _reader.readMessage(_instance.to, protoPubV1Models002.Uid.deserializeBinaryFromReader);
                    break;
                case 6:
                    _instance.messageType = _reader.readEnum();
                    break;
                case 7:
                    _instance.text = _reader.readString();
                    break;
                case 8:
                    _instance.thumbnailReference = new protoPubV1Models001.File();
                    _reader.readMessage(_instance.thumbnailReference, protoPubV1Models001.File.deserializeBinaryFromReader);
                    break;
                case 9:
                    _instance.isLocalMessage = _reader.readBool();
                    break;
                default:
                    _reader.skipField();
            }
        }
        MessageBrief.refineValues(_instance);
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
        if (_instance.id) {
            _writer.writeInt64String(2, _instance.id);
        }
        if (_instance.time) {
            _writer.writeInt64String(3, _instance.time);
        }
        if (_instance.from) {
            _writer.writeMessage(4, _instance.from, protoPubV1Models002.Uid.serializeBinaryToWriter);
        }
        if (_instance.to) {
            _writer.writeMessage(5, _instance.to, protoPubV1Models002.Uid.serializeBinaryToWriter);
        }
        if (_instance.messageType) {
            _writer.writeEnum(6, _instance.messageType);
        }
        if (_instance.text) {
            _writer.writeString(7, _instance.text);
        }
        if (_instance.thumbnailReference) {
            _writer.writeMessage(8, _instance.thumbnailReference, protoPubV1Models001.File.serializeBinaryToWriter);
        }
        if (_instance.isLocalMessage) {
            _writer.writeBool(9, _instance.isLocalMessage);
        }
    }
    get packetId() {
        return this._packetId;
    }
    set packetId(value) {
        this._packetId = value;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get time() {
        return this._time;
    }
    set time(value) {
        this._time = value;
    }
    get from() {
        return this._from;
    }
    set from(value) {
        this._from = value;
    }
    get to() {
        return this._to;
    }
    set to(value) {
        this._to = value;
    }
    get messageType() {
        return this._messageType;
    }
    set messageType(value) {
        this._messageType = value;
    }
    get text() {
        return this._text;
    }
    set text(value) {
        this._text = value;
    }
    get thumbnailReference() {
        return this._thumbnailReference;
    }
    set thumbnailReference(value) {
        this._thumbnailReference = value;
    }
    get isLocalMessage() {
        return this._isLocalMessage;
    }
    set isLocalMessage(value) {
        this._isLocalMessage = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        MessageBrief.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            packetId: this.packetId,
            id: this.id,
            time: this.time,
            from: this.from ? this.from.toObject() : undefined,
            to: this.to ? this.to.toObject() : undefined,
            messageType: this.messageType,
            text: this.text,
            thumbnailReference: this.thumbnailReference
                ? this.thumbnailReference.toObject()
                : undefined,
            isLocalMessage: this.isLocalMessage
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
            id: this.id,
            time: this.time,
            from: this.from ? this.from.toProtobufJSON(options) : null,
            to: this.to ? this.to.toProtobufJSON(options) : null,
            messageType: MessageBrief.MessageTypes[this.messageType === null || this.messageType === undefined
                ? 0
                : this.messageType],
            text: this.text,
            thumbnailReference: this.thumbnailReference
                ? this.thumbnailReference.toProtobufJSON(options)
                : null,
            isLocalMessage: this.isLocalMessage
        };
    }
}
MessageBrief.id = 'proto.pub.v1.models.MessageBrief';
(function (MessageBrief) {
    let MessageTypes;
    (function (MessageTypes) {
        MessageTypes[MessageTypes["NOT_SET"] = 0] = "NOT_SET";
        MessageTypes[MessageTypes["TEXT"] = 1] = "TEXT";
        MessageTypes[MessageTypes["FILE"] = 2] = "FILE";
        MessageTypes[MessageTypes["STICKER"] = 3] = "STICKER";
        MessageTypes[MessageTypes["LOCATION"] = 4] = "LOCATION";
        MessageTypes[MessageTypes["LIVE_LOCATION"] = 5] = "LIVE_LOCATION";
        MessageTypes[MessageTypes["POLL"] = 6] = "POLL";
        MessageTypes[MessageTypes["TRANSACTION"] = 7] = "TRANSACTION";
        MessageTypes[MessageTypes["FORM"] = 8] = "FORM";
        MessageTypes[MessageTypes["BUTTONS"] = 9] = "BUTTONS";
        MessageTypes[MessageTypes["SHARE_UID"] = 10] = "SHARE_UID";
        MessageTypes[MessageTypes["FORM_RESULT"] = 11] = "FORM_RESULT";
        MessageTypes[MessageTypes["CALL_END"] = 12] = "CALL_END";
        MessageTypes[MessageTypes["CALL_BUSY"] = 13] = "CALL_BUSY";
        MessageTypes[MessageTypes["CALL_DECLINED"] = 14] = "CALL_DECLINED";
        MessageTypes[MessageTypes["TABLE"] = 15] = "TABLE";
        MessageTypes[MessageTypes["PE_AS_NEW_CONTACT_ADDED"] = 16] = "PE_AS_NEW_CONTACT_ADDED";
        MessageTypes[MessageTypes["PE_BS_BOT_NOT_RESPONDING"] = 17] = "PE_BS_BOT_NOT_RESPONDING";
        MessageTypes[MessageTypes["PE_MS_KICK_USER"] = 18] = "PE_MS_KICK_USER";
        MessageTypes[MessageTypes["PE_MS_ADD_USER"] = 19] = "PE_MS_ADD_USER";
        MessageTypes[MessageTypes["PE_MS_PIN_MESSAGE"] = 20] = "PE_MS_PIN_MESSAGE";
        MessageTypes[MessageTypes["PE_MS_NAME_CHANGED"] = 21] = "PE_MS_NAME_CHANGED";
        MessageTypes[MessageTypes["PE_MS_AVATAR_CHANGED"] = 22] = "PE_MS_AVATAR_CHANGED";
        MessageTypes[MessageTypes["PE_MS_MUC_CREATED"] = 23] = "PE_MS_MUC_CREATED";
        MessageTypes[MessageTypes["PE_MS_LEAVE_USER"] = 24] = "PE_MS_LEAVE_USER";
        MessageTypes[MessageTypes["PE_MS_JOINED_USER"] = 25] = "PE_MS_JOINED_USER";
        MessageTypes[MessageTypes["PE_MS_DELETED"] = 26] = "PE_MS_DELETED";
        MessageTypes[MessageTypes["PDT_PHONE_NUMBER"] = 27] = "PDT_PHONE_NUMBER";
        MessageTypes[MessageTypes["PDT_USERNAME"] = 28] = "PDT_USERNAME";
        MessageTypes[MessageTypes["PDT_EMAIL"] = 29] = "PDT_EMAIL";
        MessageTypes[MessageTypes["PDT_NAME"] = 30] = "PDT_NAME";
        MessageTypes[MessageTypes["PAYMENT_INFORMATION"] = 31] = "PAYMENT_INFORMATION";
        MessageTypes[MessageTypes["SEARCH_ABLE"] = 32] = "SEARCH_ABLE";
    })(MessageTypes = MessageBrief.MessageTypes || (MessageBrief.MessageTypes = {}));
})(MessageBrief || (MessageBrief = {}));
/**
 * Message implementation for proto.pub.v1.models.Message
 */
export class Message {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Message to deeply clone from
     */
    constructor(_value) {
        this._type = Message.TypeCase.none;
        _value = _value || {};
        this.packetId = _value.packetId;
        this.id = _value.id;
        this.time = _value.time;
        this.from = _value.from
            ? new protoPubV1Models002.Uid(_value.from)
            : undefined;
        this.to = _value.to ? new protoPubV1Models002.Uid(_value.to) : undefined;
        this.replyToId = _value.replyToId;
        this.repliedMessageBrief = _value.repliedMessageBrief
            ? new MessageBrief(_value.repliedMessageBrief)
            : undefined;
        this.forwardFrom = _value.forwardFrom
            ? new protoPubV1Models002.Uid(_value.forwardFrom)
            : undefined;
        this.generatedBy = _value.generatedBy
            ? new protoPubV1Models002.Uid(_value.generatedBy)
            : undefined;
        this.edited = _value.edited;
        this.encrypted = _value.encrypted;
        this.ttl = _value.ttl;
        this.thread = _value.thread;
        this.shouldBeQuiet = _value.shouldBeQuiet;
        this.mucMinimumAccessLevel = _value.mucMinimumAccessLevel;
        this.specialTarget = _value.specialTarget
            ? new protoPubV1Models002.Uid(_value.specialTarget)
            : undefined;
        this.messageMarkup = _value.messageMarkup
            ? new protoPubV1Models014.MessageMarkup(_value.messageMarkup)
            : undefined;
        this.isLocalMessage = _value.isLocalMessage;
        this.text = _value.text ? new Text(_value.text) : undefined;
        this.file = _value.file
            ? new protoPubV1Models001.File(_value.file)
            : undefined;
        this.sticker = _value.sticker
            ? new protoPubV1Models005.Sticker(_value.sticker)
            : undefined;
        this.location = _value.location
            ? new protoPubV1Models006.Location(_value.location)
            : undefined;
        this.liveLocation = _value.liveLocation
            ? new protoPubV1Models006.LiveLocation(_value.liveLocation)
            : undefined;
        this.poll = _value.poll
            ? new protoPubV1Models011.Poll(_value.poll)
            : undefined;
        this.transaction = _value.transaction
            ? new protoPubV1Models007.Transaction(_value.transaction)
            : undefined;
        this.form = _value.form
            ? new protoPubV1Models010.Form(_value.form)
            : undefined;
        this.persistEvent = _value.persistEvent
            ? new protoPubV1Models008.PersistentEvent(_value.persistEvent)
            : undefined;
        this.buttons = _value.buttons
            ? new protoPubV1Models010.Buttons(_value.buttons)
            : undefined;
        this.shareUid = _value.shareUid ? new ShareUid(_value.shareUid) : undefined;
        this.formResult = _value.formResult
            ? new protoPubV1Models010.FormResult(_value.formResult)
            : undefined;
        this.sharePrivateDataRequest = _value.sharePrivateDataRequest
            ? new protoPubV1Models009.SharePrivateDataRequest(_value.sharePrivateDataRequest)
            : undefined;
        this.sharePrivateDataAcceptance = _value.sharePrivateDataAcceptance
            ? new protoPubV1Models009.SharePrivateDataAcceptance(_value.sharePrivateDataAcceptance)
            : undefined;
        this.callEvent = _value.callEvent
            ? new protoPubV1Models013.CallEvent(_value.callEvent)
            : undefined;
        this.callLog = _value.callLog
            ? new protoPubV1Models013.CallLog(_value.callLog)
            : undefined;
        this.table = _value.table
            ? new protoPubV1Models010.Table(_value.table)
            : undefined;
        this.paymentInformation = _value.paymentInformation
            ? new protoPubV1Models007.PaymentInformation(_value.paymentInformation)
            : undefined;
        Message.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new Message();
        Message.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.packetId = _instance.packetId || '';
        _instance.id = _instance.id || '0';
        _instance.time = _instance.time || '0';
        _instance.from = _instance.from || undefined;
        _instance.to = _instance.to || undefined;
        _instance.replyToId = _instance.replyToId || '0';
        _instance.repliedMessageBrief = _instance.repliedMessageBrief || undefined;
        _instance.forwardFrom = _instance.forwardFrom || undefined;
        _instance.generatedBy = _instance.generatedBy || undefined;
        _instance.edited = _instance.edited || false;
        _instance.encrypted = _instance.encrypted || false;
        _instance.ttl = _instance.ttl || 0;
        _instance.thread = _instance.thread || '0';
        _instance.shouldBeQuiet = _instance.shouldBeQuiet || false;
        _instance.mucMinimumAccessLevel = _instance.mucMinimumAccessLevel || 0;
        _instance.specialTarget = _instance.specialTarget || undefined;
        _instance.messageMarkup = _instance.messageMarkup || undefined;
        _instance.isLocalMessage = _instance.isLocalMessage || false;
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
                    _instance.id = _reader.readInt64String();
                    break;
                case 4:
                    _instance.time = _reader.readInt64String();
                    break;
                case 5:
                    _instance.from = new protoPubV1Models002.Uid();
                    _reader.readMessage(_instance.from, protoPubV1Models002.Uid.deserializeBinaryFromReader);
                    break;
                case 6:
                    _instance.to = new protoPubV1Models002.Uid();
                    _reader.readMessage(_instance.to, protoPubV1Models002.Uid.deserializeBinaryFromReader);
                    break;
                case 7:
                    _instance.replyToId = _reader.readInt64String();
                    break;
                case 30:
                    _instance.repliedMessageBrief = new MessageBrief();
                    _reader.readMessage(_instance.repliedMessageBrief, MessageBrief.deserializeBinaryFromReader);
                    break;
                case 8:
                    _instance.forwardFrom = new protoPubV1Models002.Uid();
                    _reader.readMessage(_instance.forwardFrom, protoPubV1Models002.Uid.deserializeBinaryFromReader);
                    break;
                case 33:
                    _instance.generatedBy = new protoPubV1Models002.Uid();
                    _reader.readMessage(_instance.generatedBy, protoPubV1Models002.Uid.deserializeBinaryFromReader);
                    break;
                case 9:
                    _instance.edited = _reader.readBool();
                    break;
                case 10:
                    _instance.encrypted = _reader.readBool();
                    break;
                case 23:
                    _instance.ttl = _reader.readInt32();
                    break;
                case 28:
                    _instance.thread = _reader.readInt64String();
                    break;
                case 29:
                    _instance.shouldBeQuiet = _reader.readBool();
                    break;
                case 24:
                    _instance.mucMinimumAccessLevel = _reader.readEnum();
                    break;
                case 25:
                    _instance.specialTarget = new protoPubV1Models002.Uid();
                    _reader.readMessage(_instance.specialTarget, protoPubV1Models002.Uid.deserializeBinaryFromReader);
                    break;
                case 34:
                    _instance.messageMarkup = new protoPubV1Models014.MessageMarkup();
                    _reader.readMessage(_instance.messageMarkup, protoPubV1Models014.MessageMarkup.deserializeBinaryFromReader);
                    break;
                case 37:
                    _instance.isLocalMessage = _reader.readBool();
                    break;
                case 11:
                    _instance.text = new Text();
                    _reader.readMessage(_instance.text, Text.deserializeBinaryFromReader);
                    break;
                case 12:
                    _instance.file = new protoPubV1Models001.File();
                    _reader.readMessage(_instance.file, protoPubV1Models001.File.deserializeBinaryFromReader);
                    break;
                case 13:
                    _instance.sticker = new protoPubV1Models005.Sticker();
                    _reader.readMessage(_instance.sticker, protoPubV1Models005.Sticker.deserializeBinaryFromReader);
                    break;
                case 14:
                    _instance.location = new protoPubV1Models006.Location();
                    _reader.readMessage(_instance.location, protoPubV1Models006.Location.deserializeBinaryFromReader);
                    break;
                case 15:
                    _instance.liveLocation = new protoPubV1Models006.LiveLocation();
                    _reader.readMessage(_instance.liveLocation, protoPubV1Models006.LiveLocation.deserializeBinaryFromReader);
                    break;
                case 16:
                    _instance.poll = new protoPubV1Models011.Poll();
                    _reader.readMessage(_instance.poll, protoPubV1Models011.Poll.deserializeBinaryFromReader);
                    break;
                case 17:
                    _instance.transaction = new protoPubV1Models007.Transaction();
                    _reader.readMessage(_instance.transaction, protoPubV1Models007.Transaction.deserializeBinaryFromReader);
                    break;
                case 18:
                    _instance.form = new protoPubV1Models010.Form();
                    _reader.readMessage(_instance.form, protoPubV1Models010.Form.deserializeBinaryFromReader);
                    break;
                case 19:
                    _instance.persistEvent = new protoPubV1Models008.PersistentEvent();
                    _reader.readMessage(_instance.persistEvent, protoPubV1Models008.PersistentEvent.deserializeBinaryFromReader);
                    break;
                case 20:
                    _instance.buttons = new protoPubV1Models010.Buttons();
                    _reader.readMessage(_instance.buttons, protoPubV1Models010.Buttons.deserializeBinaryFromReader);
                    break;
                case 21:
                    _instance.shareUid = new ShareUid();
                    _reader.readMessage(_instance.shareUid, ShareUid.deserializeBinaryFromReader);
                    break;
                case 22:
                    _instance.formResult = new protoPubV1Models010.FormResult();
                    _reader.readMessage(_instance.formResult, protoPubV1Models010.FormResult.deserializeBinaryFromReader);
                    break;
                case 26:
                    _instance.sharePrivateDataRequest = new protoPubV1Models009.SharePrivateDataRequest();
                    _reader.readMessage(_instance.sharePrivateDataRequest, protoPubV1Models009.SharePrivateDataRequest
                        .deserializeBinaryFromReader);
                    break;
                case 27:
                    _instance.sharePrivateDataAcceptance = new protoPubV1Models009.SharePrivateDataAcceptance();
                    _reader.readMessage(_instance.sharePrivateDataAcceptance, protoPubV1Models009.SharePrivateDataAcceptance
                        .deserializeBinaryFromReader);
                    break;
                case 31:
                    _instance.callEvent = new protoPubV1Models013.CallEvent();
                    _reader.readMessage(_instance.callEvent, protoPubV1Models013.CallEvent.deserializeBinaryFromReader);
                    break;
                case 36:
                    _instance.callLog = new protoPubV1Models013.CallLog();
                    _reader.readMessage(_instance.callLog, protoPubV1Models013.CallLog.deserializeBinaryFromReader);
                    break;
                case 32:
                    _instance.table = new protoPubV1Models010.Table();
                    _reader.readMessage(_instance.table, protoPubV1Models010.Table.deserializeBinaryFromReader);
                    break;
                case 35:
                    _instance.paymentInformation = new protoPubV1Models007.PaymentInformation();
                    _reader.readMessage(_instance.paymentInformation, protoPubV1Models007.PaymentInformation.deserializeBinaryFromReader);
                    break;
                default:
                    _reader.skipField();
            }
        }
        Message.refineValues(_instance);
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
        if (_instance.id) {
            _writer.writeInt64String(2, _instance.id);
        }
        if (_instance.time) {
            _writer.writeInt64String(4, _instance.time);
        }
        if (_instance.from) {
            _writer.writeMessage(5, _instance.from, protoPubV1Models002.Uid.serializeBinaryToWriter);
        }
        if (_instance.to) {
            _writer.writeMessage(6, _instance.to, protoPubV1Models002.Uid.serializeBinaryToWriter);
        }
        if (_instance.replyToId) {
            _writer.writeInt64String(7, _instance.replyToId);
        }
        if (_instance.repliedMessageBrief) {
            _writer.writeMessage(30, _instance.repliedMessageBrief, MessageBrief.serializeBinaryToWriter);
        }
        if (_instance.forwardFrom) {
            _writer.writeMessage(8, _instance.forwardFrom, protoPubV1Models002.Uid.serializeBinaryToWriter);
        }
        if (_instance.generatedBy) {
            _writer.writeMessage(33, _instance.generatedBy, protoPubV1Models002.Uid.serializeBinaryToWriter);
        }
        if (_instance.edited) {
            _writer.writeBool(9, _instance.edited);
        }
        if (_instance.encrypted) {
            _writer.writeBool(10, _instance.encrypted);
        }
        if (_instance.ttl) {
            _writer.writeInt32(23, _instance.ttl);
        }
        if (_instance.thread) {
            _writer.writeInt64String(28, _instance.thread);
        }
        if (_instance.shouldBeQuiet) {
            _writer.writeBool(29, _instance.shouldBeQuiet);
        }
        if (_instance.mucMinimumAccessLevel) {
            _writer.writeEnum(24, _instance.mucMinimumAccessLevel);
        }
        if (_instance.specialTarget) {
            _writer.writeMessage(25, _instance.specialTarget, protoPubV1Models002.Uid.serializeBinaryToWriter);
        }
        if (_instance.messageMarkup) {
            _writer.writeMessage(34, _instance.messageMarkup, protoPubV1Models014.MessageMarkup.serializeBinaryToWriter);
        }
        if (_instance.isLocalMessage) {
            _writer.writeBool(37, _instance.isLocalMessage);
        }
        if (_instance.text) {
            _writer.writeMessage(11, _instance.text, Text.serializeBinaryToWriter);
        }
        if (_instance.file) {
            _writer.writeMessage(12, _instance.file, protoPubV1Models001.File.serializeBinaryToWriter);
        }
        if (_instance.sticker) {
            _writer.writeMessage(13, _instance.sticker, protoPubV1Models005.Sticker.serializeBinaryToWriter);
        }
        if (_instance.location) {
            _writer.writeMessage(14, _instance.location, protoPubV1Models006.Location.serializeBinaryToWriter);
        }
        if (_instance.liveLocation) {
            _writer.writeMessage(15, _instance.liveLocation, protoPubV1Models006.LiveLocation.serializeBinaryToWriter);
        }
        if (_instance.poll) {
            _writer.writeMessage(16, _instance.poll, protoPubV1Models011.Poll.serializeBinaryToWriter);
        }
        if (_instance.transaction) {
            _writer.writeMessage(17, _instance.transaction, protoPubV1Models007.Transaction.serializeBinaryToWriter);
        }
        if (_instance.form) {
            _writer.writeMessage(18, _instance.form, protoPubV1Models010.Form.serializeBinaryToWriter);
        }
        if (_instance.persistEvent) {
            _writer.writeMessage(19, _instance.persistEvent, protoPubV1Models008.PersistentEvent.serializeBinaryToWriter);
        }
        if (_instance.buttons) {
            _writer.writeMessage(20, _instance.buttons, protoPubV1Models010.Buttons.serializeBinaryToWriter);
        }
        if (_instance.shareUid) {
            _writer.writeMessage(21, _instance.shareUid, ShareUid.serializeBinaryToWriter);
        }
        if (_instance.formResult) {
            _writer.writeMessage(22, _instance.formResult, protoPubV1Models010.FormResult.serializeBinaryToWriter);
        }
        if (_instance.sharePrivateDataRequest) {
            _writer.writeMessage(26, _instance.sharePrivateDataRequest, protoPubV1Models009.SharePrivateDataRequest.serializeBinaryToWriter);
        }
        if (_instance.sharePrivateDataAcceptance) {
            _writer.writeMessage(27, _instance.sharePrivateDataAcceptance, protoPubV1Models009.SharePrivateDataAcceptance.serializeBinaryToWriter);
        }
        if (_instance.callEvent) {
            _writer.writeMessage(31, _instance.callEvent, protoPubV1Models013.CallEvent.serializeBinaryToWriter);
        }
        if (_instance.callLog) {
            _writer.writeMessage(36, _instance.callLog, protoPubV1Models013.CallLog.serializeBinaryToWriter);
        }
        if (_instance.table) {
            _writer.writeMessage(32, _instance.table, protoPubV1Models010.Table.serializeBinaryToWriter);
        }
        if (_instance.paymentInformation) {
            _writer.writeMessage(35, _instance.paymentInformation, protoPubV1Models007.PaymentInformation.serializeBinaryToWriter);
        }
    }
    get packetId() {
        return this._packetId;
    }
    set packetId(value) {
        this._packetId = value;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get time() {
        return this._time;
    }
    set time(value) {
        this._time = value;
    }
    get from() {
        return this._from;
    }
    set from(value) {
        this._from = value;
    }
    get to() {
        return this._to;
    }
    set to(value) {
        this._to = value;
    }
    get replyToId() {
        return this._replyToId;
    }
    set replyToId(value) {
        this._replyToId = value;
    }
    get repliedMessageBrief() {
        return this._repliedMessageBrief;
    }
    set repliedMessageBrief(value) {
        this._repliedMessageBrief = value;
    }
    get forwardFrom() {
        return this._forwardFrom;
    }
    set forwardFrom(value) {
        this._forwardFrom = value;
    }
    get generatedBy() {
        return this._generatedBy;
    }
    set generatedBy(value) {
        this._generatedBy = value;
    }
    get edited() {
        return this._edited;
    }
    set edited(value) {
        this._edited = value;
    }
    get encrypted() {
        return this._encrypted;
    }
    set encrypted(value) {
        this._encrypted = value;
    }
    get ttl() {
        return this._ttl;
    }
    set ttl(value) {
        this._ttl = value;
    }
    get thread() {
        return this._thread;
    }
    set thread(value) {
        this._thread = value;
    }
    get shouldBeQuiet() {
        return this._shouldBeQuiet;
    }
    set shouldBeQuiet(value) {
        this._shouldBeQuiet = value;
    }
    get mucMinimumAccessLevel() {
        return this._mucMinimumAccessLevel;
    }
    set mucMinimumAccessLevel(value) {
        this._mucMinimumAccessLevel = value;
    }
    get specialTarget() {
        return this._specialTarget;
    }
    set specialTarget(value) {
        this._specialTarget = value;
    }
    get messageMarkup() {
        return this._messageMarkup;
    }
    set messageMarkup(value) {
        this._messageMarkup = value;
    }
    get isLocalMessage() {
        return this._isLocalMessage;
    }
    set isLocalMessage(value) {
        this._isLocalMessage = value;
    }
    get text() {
        return this._text;
    }
    set text(value) {
        if (value !== undefined && value !== null) {
            this._file = this._sticker = this._location = this._liveLocation = this._poll = this._transaction = this._form = this._persistEvent = this._buttons = this._shareUid = this._formResult = this._sharePrivateDataRequest = this._sharePrivateDataAcceptance = this._callEvent = this._callLog = this._table = this._paymentInformation = undefined;
            this._type = Message.TypeCase.text;
        }
        this._text = value;
    }
    get file() {
        return this._file;
    }
    set file(value) {
        if (value !== undefined && value !== null) {
            this._text = this._sticker = this._location = this._liveLocation = this._poll = this._transaction = this._form = this._persistEvent = this._buttons = this._shareUid = this._formResult = this._sharePrivateDataRequest = this._sharePrivateDataAcceptance = this._callEvent = this._callLog = this._table = this._paymentInformation = undefined;
            this._type = Message.TypeCase.file;
        }
        this._file = value;
    }
    get sticker() {
        return this._sticker;
    }
    set sticker(value) {
        if (value !== undefined && value !== null) {
            this._text = this._file = this._location = this._liveLocation = this._poll = this._transaction = this._form = this._persistEvent = this._buttons = this._shareUid = this._formResult = this._sharePrivateDataRequest = this._sharePrivateDataAcceptance = this._callEvent = this._callLog = this._table = this._paymentInformation = undefined;
            this._type = Message.TypeCase.sticker;
        }
        this._sticker = value;
    }
    get location() {
        return this._location;
    }
    set location(value) {
        if (value !== undefined && value !== null) {
            this._text = this._file = this._sticker = this._liveLocation = this._poll = this._transaction = this._form = this._persistEvent = this._buttons = this._shareUid = this._formResult = this._sharePrivateDataRequest = this._sharePrivateDataAcceptance = this._callEvent = this._callLog = this._table = this._paymentInformation = undefined;
            this._type = Message.TypeCase.location;
        }
        this._location = value;
    }
    get liveLocation() {
        return this._liveLocation;
    }
    set liveLocation(value) {
        if (value !== undefined && value !== null) {
            this._text = this._file = this._sticker = this._location = this._poll = this._transaction = this._form = this._persistEvent = this._buttons = this._shareUid = this._formResult = this._sharePrivateDataRequest = this._sharePrivateDataAcceptance = this._callEvent = this._callLog = this._table = this._paymentInformation = undefined;
            this._type = Message.TypeCase.liveLocation;
        }
        this._liveLocation = value;
    }
    get poll() {
        return this._poll;
    }
    set poll(value) {
        if (value !== undefined && value !== null) {
            this._text = this._file = this._sticker = this._location = this._liveLocation = this._transaction = this._form = this._persistEvent = this._buttons = this._shareUid = this._formResult = this._sharePrivateDataRequest = this._sharePrivateDataAcceptance = this._callEvent = this._callLog = this._table = this._paymentInformation = undefined;
            this._type = Message.TypeCase.poll;
        }
        this._poll = value;
    }
    get transaction() {
        return this._transaction;
    }
    set transaction(value) {
        if (value !== undefined && value !== null) {
            this._text = this._file = this._sticker = this._location = this._liveLocation = this._poll = this._form = this._persistEvent = this._buttons = this._shareUid = this._formResult = this._sharePrivateDataRequest = this._sharePrivateDataAcceptance = this._callEvent = this._callLog = this._table = this._paymentInformation = undefined;
            this._type = Message.TypeCase.transaction;
        }
        this._transaction = value;
    }
    get form() {
        return this._form;
    }
    set form(value) {
        if (value !== undefined && value !== null) {
            this._text = this._file = this._sticker = this._location = this._liveLocation = this._poll = this._transaction = this._persistEvent = this._buttons = this._shareUid = this._formResult = this._sharePrivateDataRequest = this._sharePrivateDataAcceptance = this._callEvent = this._callLog = this._table = this._paymentInformation = undefined;
            this._type = Message.TypeCase.form;
        }
        this._form = value;
    }
    get persistEvent() {
        return this._persistEvent;
    }
    set persistEvent(value) {
        if (value !== undefined && value !== null) {
            this._text = this._file = this._sticker = this._location = this._liveLocation = this._poll = this._transaction = this._form = this._buttons = this._shareUid = this._formResult = this._sharePrivateDataRequest = this._sharePrivateDataAcceptance = this._callEvent = this._callLog = this._table = this._paymentInformation = undefined;
            this._type = Message.TypeCase.persistEvent;
        }
        this._persistEvent = value;
    }
    get buttons() {
        return this._buttons;
    }
    set buttons(value) {
        if (value !== undefined && value !== null) {
            this._text = this._file = this._sticker = this._location = this._liveLocation = this._poll = this._transaction = this._form = this._persistEvent = this._shareUid = this._formResult = this._sharePrivateDataRequest = this._sharePrivateDataAcceptance = this._callEvent = this._callLog = this._table = this._paymentInformation = undefined;
            this._type = Message.TypeCase.buttons;
        }
        this._buttons = value;
    }
    get shareUid() {
        return this._shareUid;
    }
    set shareUid(value) {
        if (value !== undefined && value !== null) {
            this._text = this._file = this._sticker = this._location = this._liveLocation = this._poll = this._transaction = this._form = this._persistEvent = this._buttons = this._formResult = this._sharePrivateDataRequest = this._sharePrivateDataAcceptance = this._callEvent = this._callLog = this._table = this._paymentInformation = undefined;
            this._type = Message.TypeCase.shareUid;
        }
        this._shareUid = value;
    }
    get formResult() {
        return this._formResult;
    }
    set formResult(value) {
        if (value !== undefined && value !== null) {
            this._text = this._file = this._sticker = this._location = this._liveLocation = this._poll = this._transaction = this._form = this._persistEvent = this._buttons = this._shareUid = this._sharePrivateDataRequest = this._sharePrivateDataAcceptance = this._callEvent = this._callLog = this._table = this._paymentInformation = undefined;
            this._type = Message.TypeCase.formResult;
        }
        this._formResult = value;
    }
    get sharePrivateDataRequest() {
        return this._sharePrivateDataRequest;
    }
    set sharePrivateDataRequest(value) {
        if (value !== undefined && value !== null) {
            this._text = this._file = this._sticker = this._location = this._liveLocation = this._poll = this._transaction = this._form = this._persistEvent = this._buttons = this._shareUid = this._formResult = this._sharePrivateDataAcceptance = this._callEvent = this._callLog = this._table = this._paymentInformation = undefined;
            this._type = Message.TypeCase.sharePrivateDataRequest;
        }
        this._sharePrivateDataRequest = value;
    }
    get sharePrivateDataAcceptance() {
        return this._sharePrivateDataAcceptance;
    }
    set sharePrivateDataAcceptance(value) {
        if (value !== undefined && value !== null) {
            this._text = this._file = this._sticker = this._location = this._liveLocation = this._poll = this._transaction = this._form = this._persistEvent = this._buttons = this._shareUid = this._formResult = this._sharePrivateDataRequest = this._callEvent = this._callLog = this._table = this._paymentInformation = undefined;
            this._type = Message.TypeCase.sharePrivateDataAcceptance;
        }
        this._sharePrivateDataAcceptance = value;
    }
    get callEvent() {
        return this._callEvent;
    }
    set callEvent(value) {
        if (value !== undefined && value !== null) {
            this._text = this._file = this._sticker = this._location = this._liveLocation = this._poll = this._transaction = this._form = this._persistEvent = this._buttons = this._shareUid = this._formResult = this._sharePrivateDataRequest = this._sharePrivateDataAcceptance = this._callLog = this._table = this._paymentInformation = undefined;
            this._type = Message.TypeCase.callEvent;
        }
        this._callEvent = value;
    }
    get callLog() {
        return this._callLog;
    }
    set callLog(value) {
        if (value !== undefined && value !== null) {
            this._text = this._file = this._sticker = this._location = this._liveLocation = this._poll = this._transaction = this._form = this._persistEvent = this._buttons = this._shareUid = this._formResult = this._sharePrivateDataRequest = this._sharePrivateDataAcceptance = this._callEvent = this._table = this._paymentInformation = undefined;
            this._type = Message.TypeCase.callLog;
        }
        this._callLog = value;
    }
    get table() {
        return this._table;
    }
    set table(value) {
        if (value !== undefined && value !== null) {
            this._text = this._file = this._sticker = this._location = this._liveLocation = this._poll = this._transaction = this._form = this._persistEvent = this._buttons = this._shareUid = this._formResult = this._sharePrivateDataRequest = this._sharePrivateDataAcceptance = this._callEvent = this._callLog = this._paymentInformation = undefined;
            this._type = Message.TypeCase.table;
        }
        this._table = value;
    }
    get paymentInformation() {
        return this._paymentInformation;
    }
    set paymentInformation(value) {
        if (value !== undefined && value !== null) {
            this._text = this._file = this._sticker = this._location = this._liveLocation = this._poll = this._transaction = this._form = this._persistEvent = this._buttons = this._shareUid = this._formResult = this._sharePrivateDataRequest = this._sharePrivateDataAcceptance = this._callEvent = this._callLog = this._table = undefined;
            this._type = Message.TypeCase.paymentInformation;
        }
        this._paymentInformation = value;
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
        Message.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            packetId: this.packetId,
            id: this.id,
            time: this.time,
            from: this.from ? this.from.toObject() : undefined,
            to: this.to ? this.to.toObject() : undefined,
            replyToId: this.replyToId,
            repliedMessageBrief: this.repliedMessageBrief
                ? this.repliedMessageBrief.toObject()
                : undefined,
            forwardFrom: this.forwardFrom ? this.forwardFrom.toObject() : undefined,
            generatedBy: this.generatedBy ? this.generatedBy.toObject() : undefined,
            edited: this.edited,
            encrypted: this.encrypted,
            ttl: this.ttl,
            thread: this.thread,
            shouldBeQuiet: this.shouldBeQuiet,
            mucMinimumAccessLevel: this.mucMinimumAccessLevel,
            specialTarget: this.specialTarget
                ? this.specialTarget.toObject()
                : undefined,
            messageMarkup: this.messageMarkup
                ? this.messageMarkup.toObject()
                : undefined,
            isLocalMessage: this.isLocalMessage,
            text: this.text ? this.text.toObject() : undefined,
            file: this.file ? this.file.toObject() : undefined,
            sticker: this.sticker ? this.sticker.toObject() : undefined,
            location: this.location ? this.location.toObject() : undefined,
            liveLocation: this.liveLocation
                ? this.liveLocation.toObject()
                : undefined,
            poll: this.poll ? this.poll.toObject() : undefined,
            transaction: this.transaction ? this.transaction.toObject() : undefined,
            form: this.form ? this.form.toObject() : undefined,
            persistEvent: this.persistEvent
                ? this.persistEvent.toObject()
                : undefined,
            buttons: this.buttons ? this.buttons.toObject() : undefined,
            shareUid: this.shareUid ? this.shareUid.toObject() : undefined,
            formResult: this.formResult ? this.formResult.toObject() : undefined,
            sharePrivateDataRequest: this.sharePrivateDataRequest
                ? this.sharePrivateDataRequest.toObject()
                : undefined,
            sharePrivateDataAcceptance: this.sharePrivateDataAcceptance
                ? this.sharePrivateDataAcceptance.toObject()
                : undefined,
            callEvent: this.callEvent ? this.callEvent.toObject() : undefined,
            callLog: this.callLog ? this.callLog.toObject() : undefined,
            table: this.table ? this.table.toObject() : undefined,
            paymentInformation: this.paymentInformation
                ? this.paymentInformation.toObject()
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
            packetId: this.packetId,
            id: this.id,
            time: this.time,
            from: this.from ? this.from.toProtobufJSON(options) : null,
            to: this.to ? this.to.toProtobufJSON(options) : null,
            replyToId: this.replyToId,
            repliedMessageBrief: this.repliedMessageBrief
                ? this.repliedMessageBrief.toProtobufJSON(options)
                : null,
            forwardFrom: this.forwardFrom
                ? this.forwardFrom.toProtobufJSON(options)
                : null,
            generatedBy: this.generatedBy
                ? this.generatedBy.toProtobufJSON(options)
                : null,
            edited: this.edited,
            encrypted: this.encrypted,
            ttl: this.ttl,
            thread: this.thread,
            shouldBeQuiet: this.shouldBeQuiet,
            mucMinimumAccessLevel: protoPubV1Models012.Role[this.mucMinimumAccessLevel === null ||
                this.mucMinimumAccessLevel === undefined
                ? 0
                : this.mucMinimumAccessLevel],
            specialTarget: this.specialTarget
                ? this.specialTarget.toProtobufJSON(options)
                : null,
            messageMarkup: this.messageMarkup
                ? this.messageMarkup.toProtobufJSON(options)
                : null,
            isLocalMessage: this.isLocalMessage,
            text: this.text ? this.text.toProtobufJSON(options) : null,
            file: this.file ? this.file.toProtobufJSON(options) : null,
            sticker: this.sticker ? this.sticker.toProtobufJSON(options) : null,
            location: this.location ? this.location.toProtobufJSON(options) : null,
            liveLocation: this.liveLocation
                ? this.liveLocation.toProtobufJSON(options)
                : null,
            poll: this.poll ? this.poll.toProtobufJSON(options) : null,
            transaction: this.transaction
                ? this.transaction.toProtobufJSON(options)
                : null,
            form: this.form ? this.form.toProtobufJSON(options) : null,
            persistEvent: this.persistEvent
                ? this.persistEvent.toProtobufJSON(options)
                : null,
            buttons: this.buttons ? this.buttons.toProtobufJSON(options) : null,
            shareUid: this.shareUid ? this.shareUid.toProtobufJSON(options) : null,
            formResult: this.formResult
                ? this.formResult.toProtobufJSON(options)
                : null,
            sharePrivateDataRequest: this.sharePrivateDataRequest
                ? this.sharePrivateDataRequest.toProtobufJSON(options)
                : null,
            sharePrivateDataAcceptance: this.sharePrivateDataAcceptance
                ? this.sharePrivateDataAcceptance.toProtobufJSON(options)
                : null,
            callEvent: this.callEvent ? this.callEvent.toProtobufJSON(options) : null,
            callLog: this.callLog ? this.callLog.toProtobufJSON(options) : null,
            table: this.table ? this.table.toProtobufJSON(options) : null,
            paymentInformation: this.paymentInformation
                ? this.paymentInformation.toProtobufJSON(options)
                : null
        };
    }
}
Message.id = 'proto.pub.v1.models.Message';
(function (Message) {
    let TypeCase;
    (function (TypeCase) {
        TypeCase[TypeCase["none"] = 0] = "none";
        TypeCase[TypeCase["text"] = 1] = "text";
        TypeCase[TypeCase["file"] = 2] = "file";
        TypeCase[TypeCase["sticker"] = 3] = "sticker";
        TypeCase[TypeCase["location"] = 4] = "location";
        TypeCase[TypeCase["liveLocation"] = 5] = "liveLocation";
        TypeCase[TypeCase["poll"] = 6] = "poll";
        TypeCase[TypeCase["transaction"] = 7] = "transaction";
        TypeCase[TypeCase["form"] = 8] = "form";
        TypeCase[TypeCase["persistEvent"] = 9] = "persistEvent";
        TypeCase[TypeCase["buttons"] = 10] = "buttons";
        TypeCase[TypeCase["shareUid"] = 11] = "shareUid";
        TypeCase[TypeCase["formResult"] = 12] = "formResult";
        TypeCase[TypeCase["sharePrivateDataRequest"] = 13] = "sharePrivateDataRequest";
        TypeCase[TypeCase["sharePrivateDataAcceptance"] = 14] = "sharePrivateDataAcceptance";
        TypeCase[TypeCase["callEvent"] = 15] = "callEvent";
        TypeCase[TypeCase["callLog"] = 16] = "callLog";
        TypeCase[TypeCase["table"] = 17] = "table";
        TypeCase[TypeCase["paymentInformation"] = 18] = "paymentInformation";
    })(TypeCase = Message.TypeCase || (Message.TypeCase = {}));
})(Message || (Message = {}));
/**
 * Message implementation for proto.pub.v1.models.MessageByClient
 */
export class MessageByClient {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of MessageByClient to deeply clone from
     */
    constructor(_value) {
        this._type = MessageByClient.TypeCase.none;
        _value = _value || {};
        this.packetId = _value.packetId;
        this.to = _value.to ? new protoPubV1Models002.Uid(_value.to) : undefined;
        this.replyToId = _value.replyToId;
        this.forwardFrom = _value.forwardFrom
            ? new protoPubV1Models002.Uid(_value.forwardFrom)
            : undefined;
        this.encrypted = _value.encrypted;
        this.ttl = _value.ttl;
        this.thread = _value.thread;
        this.shouldBeQuiet = _value.shouldBeQuiet;
        this.generatedBy = _value.generatedBy
            ? new protoPubV1Models002.Uid(_value.generatedBy)
            : undefined;
        this.isLocalMessage = _value.isLocalMessage;
        this.text = _value.text ? new Text(_value.text) : undefined;
        this.file = _value.file
            ? new protoPubV1Models001.File(_value.file)
            : undefined;
        this.sticker = _value.sticker
            ? new protoPubV1Models005.Sticker(_value.sticker)
            : undefined;
        this.location = _value.location
            ? new protoPubV1Models006.Location(_value.location)
            : undefined;
        this.liveLocation = _value.liveLocation
            ? new protoPubV1Models006.LiveLocation(_value.liveLocation)
            : undefined;
        this.poll = _value.poll
            ? new protoPubV1Models011.Poll(_value.poll)
            : undefined;
        this.form = _value.form
            ? new protoPubV1Models010.Form(_value.form)
            : undefined;
        this.buttons = _value.buttons
            ? new protoPubV1Models010.Buttons(_value.buttons)
            : undefined;
        this.shareUid = _value.shareUid ? new ShareUid(_value.shareUid) : undefined;
        this.formResult = _value.formResult
            ? new protoPubV1Models010.FormResult(_value.formResult)
            : undefined;
        this.sharePrivateDataRequest = _value.sharePrivateDataRequest
            ? new protoPubV1Models009.SharePrivateDataRequest(_value.sharePrivateDataRequest)
            : undefined;
        this.sharePrivateDataAcceptance = _value.sharePrivateDataAcceptance
            ? new protoPubV1Models009.SharePrivateDataAcceptance(_value.sharePrivateDataAcceptance)
            : undefined;
        this.callEvent = _value.callEvent
            ? new protoPubV1Models013.CallEvent(_value.callEvent)
            : undefined;
        this.table = _value.table
            ? new protoPubV1Models010.Table(_value.table)
            : undefined;
        MessageByClient.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new MessageByClient();
        MessageByClient.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.packetId = _instance.packetId || '';
        _instance.to = _instance.to || undefined;
        _instance.replyToId = _instance.replyToId || '0';
        _instance.forwardFrom = _instance.forwardFrom || undefined;
        _instance.encrypted = _instance.encrypted || false;
        _instance.ttl = _instance.ttl || 0;
        _instance.thread = _instance.thread || '0';
        _instance.shouldBeQuiet = _instance.shouldBeQuiet || false;
        _instance.generatedBy = _instance.generatedBy || undefined;
        _instance.isLocalMessage = _instance.isLocalMessage || false;
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
                case 6:
                    _instance.to = new protoPubV1Models002.Uid();
                    _reader.readMessage(_instance.to, protoPubV1Models002.Uid.deserializeBinaryFromReader);
                    break;
                case 7:
                    _instance.replyToId = _reader.readInt64String();
                    break;
                case 8:
                    _instance.forwardFrom = new protoPubV1Models002.Uid();
                    _reader.readMessage(_instance.forwardFrom, protoPubV1Models002.Uid.deserializeBinaryFromReader);
                    break;
                case 10:
                    _instance.encrypted = _reader.readBool();
                    break;
                case 23:
                    _instance.ttl = _reader.readInt32();
                    break;
                case 28:
                    _instance.thread = _reader.readInt64String();
                    break;
                case 29:
                    _instance.shouldBeQuiet = _reader.readBool();
                    break;
                case 33:
                    _instance.generatedBy = new protoPubV1Models002.Uid();
                    _reader.readMessage(_instance.generatedBy, protoPubV1Models002.Uid.deserializeBinaryFromReader);
                    break;
                case 34:
                    _instance.isLocalMessage = _reader.readBool();
                    break;
                case 11:
                    _instance.text = new Text();
                    _reader.readMessage(_instance.text, Text.deserializeBinaryFromReader);
                    break;
                case 12:
                    _instance.file = new protoPubV1Models001.File();
                    _reader.readMessage(_instance.file, protoPubV1Models001.File.deserializeBinaryFromReader);
                    break;
                case 13:
                    _instance.sticker = new protoPubV1Models005.Sticker();
                    _reader.readMessage(_instance.sticker, protoPubV1Models005.Sticker.deserializeBinaryFromReader);
                    break;
                case 14:
                    _instance.location = new protoPubV1Models006.Location();
                    _reader.readMessage(_instance.location, protoPubV1Models006.Location.deserializeBinaryFromReader);
                    break;
                case 15:
                    _instance.liveLocation = new protoPubV1Models006.LiveLocation();
                    _reader.readMessage(_instance.liveLocation, protoPubV1Models006.LiveLocation.deserializeBinaryFromReader);
                    break;
                case 16:
                    _instance.poll = new protoPubV1Models011.Poll();
                    _reader.readMessage(_instance.poll, protoPubV1Models011.Poll.deserializeBinaryFromReader);
                    break;
                case 18:
                    _instance.form = new protoPubV1Models010.Form();
                    _reader.readMessage(_instance.form, protoPubV1Models010.Form.deserializeBinaryFromReader);
                    break;
                case 20:
                    _instance.buttons = new protoPubV1Models010.Buttons();
                    _reader.readMessage(_instance.buttons, protoPubV1Models010.Buttons.deserializeBinaryFromReader);
                    break;
                case 21:
                    _instance.shareUid = new ShareUid();
                    _reader.readMessage(_instance.shareUid, ShareUid.deserializeBinaryFromReader);
                    break;
                case 22:
                    _instance.formResult = new protoPubV1Models010.FormResult();
                    _reader.readMessage(_instance.formResult, protoPubV1Models010.FormResult.deserializeBinaryFromReader);
                    break;
                case 26:
                    _instance.sharePrivateDataRequest = new protoPubV1Models009.SharePrivateDataRequest();
                    _reader.readMessage(_instance.sharePrivateDataRequest, protoPubV1Models009.SharePrivateDataRequest
                        .deserializeBinaryFromReader);
                    break;
                case 27:
                    _instance.sharePrivateDataAcceptance = new protoPubV1Models009.SharePrivateDataAcceptance();
                    _reader.readMessage(_instance.sharePrivateDataAcceptance, protoPubV1Models009.SharePrivateDataAcceptance
                        .deserializeBinaryFromReader);
                    break;
                case 31:
                    _instance.callEvent = new protoPubV1Models013.CallEvent();
                    _reader.readMessage(_instance.callEvent, protoPubV1Models013.CallEvent.deserializeBinaryFromReader);
                    break;
                case 32:
                    _instance.table = new protoPubV1Models010.Table();
                    _reader.readMessage(_instance.table, protoPubV1Models010.Table.deserializeBinaryFromReader);
                    break;
                default:
                    _reader.skipField();
            }
        }
        MessageByClient.refineValues(_instance);
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
        if (_instance.to) {
            _writer.writeMessage(6, _instance.to, protoPubV1Models002.Uid.serializeBinaryToWriter);
        }
        if (_instance.replyToId) {
            _writer.writeInt64String(7, _instance.replyToId);
        }
        if (_instance.forwardFrom) {
            _writer.writeMessage(8, _instance.forwardFrom, protoPubV1Models002.Uid.serializeBinaryToWriter);
        }
        if (_instance.encrypted) {
            _writer.writeBool(10, _instance.encrypted);
        }
        if (_instance.ttl) {
            _writer.writeInt32(23, _instance.ttl);
        }
        if (_instance.thread) {
            _writer.writeInt64String(28, _instance.thread);
        }
        if (_instance.shouldBeQuiet) {
            _writer.writeBool(29, _instance.shouldBeQuiet);
        }
        if (_instance.generatedBy) {
            _writer.writeMessage(33, _instance.generatedBy, protoPubV1Models002.Uid.serializeBinaryToWriter);
        }
        if (_instance.isLocalMessage) {
            _writer.writeBool(34, _instance.isLocalMessage);
        }
        if (_instance.text) {
            _writer.writeMessage(11, _instance.text, Text.serializeBinaryToWriter);
        }
        if (_instance.file) {
            _writer.writeMessage(12, _instance.file, protoPubV1Models001.File.serializeBinaryToWriter);
        }
        if (_instance.sticker) {
            _writer.writeMessage(13, _instance.sticker, protoPubV1Models005.Sticker.serializeBinaryToWriter);
        }
        if (_instance.location) {
            _writer.writeMessage(14, _instance.location, protoPubV1Models006.Location.serializeBinaryToWriter);
        }
        if (_instance.liveLocation) {
            _writer.writeMessage(15, _instance.liveLocation, protoPubV1Models006.LiveLocation.serializeBinaryToWriter);
        }
        if (_instance.poll) {
            _writer.writeMessage(16, _instance.poll, protoPubV1Models011.Poll.serializeBinaryToWriter);
        }
        if (_instance.form) {
            _writer.writeMessage(18, _instance.form, protoPubV1Models010.Form.serializeBinaryToWriter);
        }
        if (_instance.buttons) {
            _writer.writeMessage(20, _instance.buttons, protoPubV1Models010.Buttons.serializeBinaryToWriter);
        }
        if (_instance.shareUid) {
            _writer.writeMessage(21, _instance.shareUid, ShareUid.serializeBinaryToWriter);
        }
        if (_instance.formResult) {
            _writer.writeMessage(22, _instance.formResult, protoPubV1Models010.FormResult.serializeBinaryToWriter);
        }
        if (_instance.sharePrivateDataRequest) {
            _writer.writeMessage(26, _instance.sharePrivateDataRequest, protoPubV1Models009.SharePrivateDataRequest.serializeBinaryToWriter);
        }
        if (_instance.sharePrivateDataAcceptance) {
            _writer.writeMessage(27, _instance.sharePrivateDataAcceptance, protoPubV1Models009.SharePrivateDataAcceptance.serializeBinaryToWriter);
        }
        if (_instance.callEvent) {
            _writer.writeMessage(31, _instance.callEvent, protoPubV1Models013.CallEvent.serializeBinaryToWriter);
        }
        if (_instance.table) {
            _writer.writeMessage(32, _instance.table, protoPubV1Models010.Table.serializeBinaryToWriter);
        }
    }
    get packetId() {
        return this._packetId;
    }
    set packetId(value) {
        this._packetId = value;
    }
    get to() {
        return this._to;
    }
    set to(value) {
        this._to = value;
    }
    get replyToId() {
        return this._replyToId;
    }
    set replyToId(value) {
        this._replyToId = value;
    }
    get forwardFrom() {
        return this._forwardFrom;
    }
    set forwardFrom(value) {
        this._forwardFrom = value;
    }
    get encrypted() {
        return this._encrypted;
    }
    set encrypted(value) {
        this._encrypted = value;
    }
    get ttl() {
        return this._ttl;
    }
    set ttl(value) {
        this._ttl = value;
    }
    get thread() {
        return this._thread;
    }
    set thread(value) {
        this._thread = value;
    }
    get shouldBeQuiet() {
        return this._shouldBeQuiet;
    }
    set shouldBeQuiet(value) {
        this._shouldBeQuiet = value;
    }
    get generatedBy() {
        return this._generatedBy;
    }
    set generatedBy(value) {
        this._generatedBy = value;
    }
    get isLocalMessage() {
        return this._isLocalMessage;
    }
    set isLocalMessage(value) {
        this._isLocalMessage = value;
    }
    get text() {
        return this._text;
    }
    set text(value) {
        if (value !== undefined && value !== null) {
            this._file = this._sticker = this._location = this._liveLocation = this._poll = this._form = this._buttons = this._shareUid = this._formResult = this._sharePrivateDataRequest = this._sharePrivateDataAcceptance = this._callEvent = this._table = undefined;
            this._type = MessageByClient.TypeCase.text;
        }
        this._text = value;
    }
    get file() {
        return this._file;
    }
    set file(value) {
        if (value !== undefined && value !== null) {
            this._text = this._sticker = this._location = this._liveLocation = this._poll = this._form = this._buttons = this._shareUid = this._formResult = this._sharePrivateDataRequest = this._sharePrivateDataAcceptance = this._callEvent = this._table = undefined;
            this._type = MessageByClient.TypeCase.file;
        }
        this._file = value;
    }
    get sticker() {
        return this._sticker;
    }
    set sticker(value) {
        if (value !== undefined && value !== null) {
            this._text = this._file = this._location = this._liveLocation = this._poll = this._form = this._buttons = this._shareUid = this._formResult = this._sharePrivateDataRequest = this._sharePrivateDataAcceptance = this._callEvent = this._table = undefined;
            this._type = MessageByClient.TypeCase.sticker;
        }
        this._sticker = value;
    }
    get location() {
        return this._location;
    }
    set location(value) {
        if (value !== undefined && value !== null) {
            this._text = this._file = this._sticker = this._liveLocation = this._poll = this._form = this._buttons = this._shareUid = this._formResult = this._sharePrivateDataRequest = this._sharePrivateDataAcceptance = this._callEvent = this._table = undefined;
            this._type = MessageByClient.TypeCase.location;
        }
        this._location = value;
    }
    get liveLocation() {
        return this._liveLocation;
    }
    set liveLocation(value) {
        if (value !== undefined && value !== null) {
            this._text = this._file = this._sticker = this._location = this._poll = this._form = this._buttons = this._shareUid = this._formResult = this._sharePrivateDataRequest = this._sharePrivateDataAcceptance = this._callEvent = this._table = undefined;
            this._type = MessageByClient.TypeCase.liveLocation;
        }
        this._liveLocation = value;
    }
    get poll() {
        return this._poll;
    }
    set poll(value) {
        if (value !== undefined && value !== null) {
            this._text = this._file = this._sticker = this._location = this._liveLocation = this._form = this._buttons = this._shareUid = this._formResult = this._sharePrivateDataRequest = this._sharePrivateDataAcceptance = this._callEvent = this._table = undefined;
            this._type = MessageByClient.TypeCase.poll;
        }
        this._poll = value;
    }
    get form() {
        return this._form;
    }
    set form(value) {
        if (value !== undefined && value !== null) {
            this._text = this._file = this._sticker = this._location = this._liveLocation = this._poll = this._buttons = this._shareUid = this._formResult = this._sharePrivateDataRequest = this._sharePrivateDataAcceptance = this._callEvent = this._table = undefined;
            this._type = MessageByClient.TypeCase.form;
        }
        this._form = value;
    }
    get buttons() {
        return this._buttons;
    }
    set buttons(value) {
        if (value !== undefined && value !== null) {
            this._text = this._file = this._sticker = this._location = this._liveLocation = this._poll = this._form = this._shareUid = this._formResult = this._sharePrivateDataRequest = this._sharePrivateDataAcceptance = this._callEvent = this._table = undefined;
            this._type = MessageByClient.TypeCase.buttons;
        }
        this._buttons = value;
    }
    get shareUid() {
        return this._shareUid;
    }
    set shareUid(value) {
        if (value !== undefined && value !== null) {
            this._text = this._file = this._sticker = this._location = this._liveLocation = this._poll = this._form = this._buttons = this._formResult = this._sharePrivateDataRequest = this._sharePrivateDataAcceptance = this._callEvent = this._table = undefined;
            this._type = MessageByClient.TypeCase.shareUid;
        }
        this._shareUid = value;
    }
    get formResult() {
        return this._formResult;
    }
    set formResult(value) {
        if (value !== undefined && value !== null) {
            this._text = this._file = this._sticker = this._location = this._liveLocation = this._poll = this._form = this._buttons = this._shareUid = this._sharePrivateDataRequest = this._sharePrivateDataAcceptance = this._callEvent = this._table = undefined;
            this._type = MessageByClient.TypeCase.formResult;
        }
        this._formResult = value;
    }
    get sharePrivateDataRequest() {
        return this._sharePrivateDataRequest;
    }
    set sharePrivateDataRequest(value) {
        if (value !== undefined && value !== null) {
            this._text = this._file = this._sticker = this._location = this._liveLocation = this._poll = this._form = this._buttons = this._shareUid = this._formResult = this._sharePrivateDataAcceptance = this._callEvent = this._table = undefined;
            this._type = MessageByClient.TypeCase.sharePrivateDataRequest;
        }
        this._sharePrivateDataRequest = value;
    }
    get sharePrivateDataAcceptance() {
        return this._sharePrivateDataAcceptance;
    }
    set sharePrivateDataAcceptance(value) {
        if (value !== undefined && value !== null) {
            this._text = this._file = this._sticker = this._location = this._liveLocation = this._poll = this._form = this._buttons = this._shareUid = this._formResult = this._sharePrivateDataRequest = this._callEvent = this._table = undefined;
            this._type = MessageByClient.TypeCase.sharePrivateDataAcceptance;
        }
        this._sharePrivateDataAcceptance = value;
    }
    get callEvent() {
        return this._callEvent;
    }
    set callEvent(value) {
        if (value !== undefined && value !== null) {
            this._text = this._file = this._sticker = this._location = this._liveLocation = this._poll = this._form = this._buttons = this._shareUid = this._formResult = this._sharePrivateDataRequest = this._sharePrivateDataAcceptance = this._table = undefined;
            this._type = MessageByClient.TypeCase.callEvent;
        }
        this._callEvent = value;
    }
    get table() {
        return this._table;
    }
    set table(value) {
        if (value !== undefined && value !== null) {
            this._text = this._file = this._sticker = this._location = this._liveLocation = this._poll = this._form = this._buttons = this._shareUid = this._formResult = this._sharePrivateDataRequest = this._sharePrivateDataAcceptance = this._callEvent = undefined;
            this._type = MessageByClient.TypeCase.table;
        }
        this._table = value;
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
        MessageByClient.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            packetId: this.packetId,
            to: this.to ? this.to.toObject() : undefined,
            replyToId: this.replyToId,
            forwardFrom: this.forwardFrom ? this.forwardFrom.toObject() : undefined,
            encrypted: this.encrypted,
            ttl: this.ttl,
            thread: this.thread,
            shouldBeQuiet: this.shouldBeQuiet,
            generatedBy: this.generatedBy ? this.generatedBy.toObject() : undefined,
            isLocalMessage: this.isLocalMessage,
            text: this.text ? this.text.toObject() : undefined,
            file: this.file ? this.file.toObject() : undefined,
            sticker: this.sticker ? this.sticker.toObject() : undefined,
            location: this.location ? this.location.toObject() : undefined,
            liveLocation: this.liveLocation
                ? this.liveLocation.toObject()
                : undefined,
            poll: this.poll ? this.poll.toObject() : undefined,
            form: this.form ? this.form.toObject() : undefined,
            buttons: this.buttons ? this.buttons.toObject() : undefined,
            shareUid: this.shareUid ? this.shareUid.toObject() : undefined,
            formResult: this.formResult ? this.formResult.toObject() : undefined,
            sharePrivateDataRequest: this.sharePrivateDataRequest
                ? this.sharePrivateDataRequest.toObject()
                : undefined,
            sharePrivateDataAcceptance: this.sharePrivateDataAcceptance
                ? this.sharePrivateDataAcceptance.toObject()
                : undefined,
            callEvent: this.callEvent ? this.callEvent.toObject() : undefined,
            table: this.table ? this.table.toObject() : undefined
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
            to: this.to ? this.to.toProtobufJSON(options) : null,
            replyToId: this.replyToId,
            forwardFrom: this.forwardFrom
                ? this.forwardFrom.toProtobufJSON(options)
                : null,
            encrypted: this.encrypted,
            ttl: this.ttl,
            thread: this.thread,
            shouldBeQuiet: this.shouldBeQuiet,
            generatedBy: this.generatedBy
                ? this.generatedBy.toProtobufJSON(options)
                : null,
            isLocalMessage: this.isLocalMessage,
            text: this.text ? this.text.toProtobufJSON(options) : null,
            file: this.file ? this.file.toProtobufJSON(options) : null,
            sticker: this.sticker ? this.sticker.toProtobufJSON(options) : null,
            location: this.location ? this.location.toProtobufJSON(options) : null,
            liveLocation: this.liveLocation
                ? this.liveLocation.toProtobufJSON(options)
                : null,
            poll: this.poll ? this.poll.toProtobufJSON(options) : null,
            form: this.form ? this.form.toProtobufJSON(options) : null,
            buttons: this.buttons ? this.buttons.toProtobufJSON(options) : null,
            shareUid: this.shareUid ? this.shareUid.toProtobufJSON(options) : null,
            formResult: this.formResult
                ? this.formResult.toProtobufJSON(options)
                : null,
            sharePrivateDataRequest: this.sharePrivateDataRequest
                ? this.sharePrivateDataRequest.toProtobufJSON(options)
                : null,
            sharePrivateDataAcceptance: this.sharePrivateDataAcceptance
                ? this.sharePrivateDataAcceptance.toProtobufJSON(options)
                : null,
            callEvent: this.callEvent ? this.callEvent.toProtobufJSON(options) : null,
            table: this.table ? this.table.toProtobufJSON(options) : null
        };
    }
}
MessageByClient.id = 'proto.pub.v1.models.MessageByClient';
(function (MessageByClient) {
    let TypeCase;
    (function (TypeCase) {
        TypeCase[TypeCase["none"] = 0] = "none";
        TypeCase[TypeCase["text"] = 1] = "text";
        TypeCase[TypeCase["file"] = 2] = "file";
        TypeCase[TypeCase["sticker"] = 3] = "sticker";
        TypeCase[TypeCase["location"] = 4] = "location";
        TypeCase[TypeCase["liveLocation"] = 5] = "liveLocation";
        TypeCase[TypeCase["poll"] = 6] = "poll";
        TypeCase[TypeCase["form"] = 7] = "form";
        TypeCase[TypeCase["buttons"] = 8] = "buttons";
        TypeCase[TypeCase["shareUid"] = 9] = "shareUid";
        TypeCase[TypeCase["formResult"] = 10] = "formResult";
        TypeCase[TypeCase["sharePrivateDataRequest"] = 11] = "sharePrivateDataRequest";
        TypeCase[TypeCase["sharePrivateDataAcceptance"] = 12] = "sharePrivateDataAcceptance";
        TypeCase[TypeCase["callEvent"] = 13] = "callEvent";
        TypeCase[TypeCase["table"] = 14] = "table";
    })(TypeCase = MessageByClient.TypeCase || (MessageByClient.TypeCase = {}));
})(MessageByClient || (MessageByClient = {}));
/**
 * Message implementation for proto.pub.v1.models.LocalNetworkEmptyMessage
 */
export class LocalNetworkEmptyMessage {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of LocalNetworkEmptyMessage to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.to = _value.to ? new protoPubV1Models002.Uid(_value.to) : undefined;
        LocalNetworkEmptyMessage.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new LocalNetworkEmptyMessage();
        LocalNetworkEmptyMessage.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.to = _instance.to || undefined;
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
                case 6:
                    _instance.to = new protoPubV1Models002.Uid();
                    _reader.readMessage(_instance.to, protoPubV1Models002.Uid.deserializeBinaryFromReader);
                    break;
                default:
                    _reader.skipField();
            }
        }
        LocalNetworkEmptyMessage.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.to) {
            _writer.writeMessage(6, _instance.to, protoPubV1Models002.Uid.serializeBinaryToWriter);
        }
    }
    get to() {
        return this._to;
    }
    set to(value) {
        this._to = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        LocalNetworkEmptyMessage.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            to: this.to ? this.to.toObject() : undefined
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
            to: this.to ? this.to.toProtobufJSON(options) : null
        };
    }
}
LocalNetworkEmptyMessage.id = 'proto.pub.v1.models.LocalNetworkEmptyMessage';
/**
 * Message implementation for proto.pub.v1.models.MessageByBot
 */
export class MessageByBot {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of MessageByBot to deeply clone from
     */
    constructor(_value) {
        this._type = MessageByBot.TypeCase.none;
        _value = _value || {};
        this.packetId = _value.packetId;
        this.from = _value.from
            ? new protoPubV1Models002.Uid(_value.from)
            : undefined;
        this.to = _value.to ? new protoPubV1Models002.Uid(_value.to) : undefined;
        this.replyToId = _value.replyToId;
        this.forwardFrom = _value.forwardFrom
            ? new protoPubV1Models002.Uid(_value.forwardFrom)
            : undefined;
        this.encrypted = _value.encrypted;
        this.ttl = _value.ttl;
        this.thread = _value.thread;
        this.shouldBeQuiet = _value.shouldBeQuiet;
        this.messageMarkup = _value.messageMarkup
            ? new protoPubV1Models014.MessageMarkup(_value.messageMarkup)
            : undefined;
        this.text = _value.text ? new Text(_value.text) : undefined;
        this.file = _value.file
            ? new protoPubV1Models001.File(_value.file)
            : undefined;
        this.sticker = _value.sticker
            ? new protoPubV1Models005.Sticker(_value.sticker)
            : undefined;
        this.location = _value.location
            ? new protoPubV1Models006.Location(_value.location)
            : undefined;
        this.form = _value.form
            ? new protoPubV1Models010.Form(_value.form)
            : undefined;
        this.buttons = _value.buttons
            ? new protoPubV1Models010.Buttons(_value.buttons)
            : undefined;
        this.shareUid = _value.shareUid ? new ShareUid(_value.shareUid) : undefined;
        this.sharePrivateDataRequest = _value.sharePrivateDataRequest
            ? new protoPubV1Models009.SharePrivateDataRequest(_value.sharePrivateDataRequest)
            : undefined;
        this.botSpecificPersistentEvent = _value.botSpecificPersistentEvent
            ? new protoPubV1Models008.BotSpecificPersistentEvent(_value.botSpecificPersistentEvent)
            : undefined;
        this.table = _value.table
            ? new protoPubV1Models010.Table(_value.table)
            : undefined;
        MessageByBot.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new MessageByBot();
        MessageByBot.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.packetId = _instance.packetId || '';
        _instance.from = _instance.from || undefined;
        _instance.to = _instance.to || undefined;
        _instance.replyToId = _instance.replyToId || '0';
        _instance.forwardFrom = _instance.forwardFrom || undefined;
        _instance.encrypted = _instance.encrypted || false;
        _instance.ttl = _instance.ttl || 0;
        _instance.thread = _instance.thread || '0';
        _instance.shouldBeQuiet = _instance.shouldBeQuiet || false;
        _instance.messageMarkup = _instance.messageMarkup || undefined;
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
                case 5:
                    _instance.from = new protoPubV1Models002.Uid();
                    _reader.readMessage(_instance.from, protoPubV1Models002.Uid.deserializeBinaryFromReader);
                    break;
                case 6:
                    _instance.to = new protoPubV1Models002.Uid();
                    _reader.readMessage(_instance.to, protoPubV1Models002.Uid.deserializeBinaryFromReader);
                    break;
                case 7:
                    _instance.replyToId = _reader.readInt64String();
                    break;
                case 8:
                    _instance.forwardFrom = new protoPubV1Models002.Uid();
                    _reader.readMessage(_instance.forwardFrom, protoPubV1Models002.Uid.deserializeBinaryFromReader);
                    break;
                case 10:
                    _instance.encrypted = _reader.readBool();
                    break;
                case 23:
                    _instance.ttl = _reader.readInt32();
                    break;
                case 28:
                    _instance.thread = _reader.readInt64String();
                    break;
                case 29:
                    _instance.shouldBeQuiet = _reader.readBool();
                    break;
                case 34:
                    _instance.messageMarkup = new protoPubV1Models014.MessageMarkup();
                    _reader.readMessage(_instance.messageMarkup, protoPubV1Models014.MessageMarkup.deserializeBinaryFromReader);
                    break;
                case 11:
                    _instance.text = new Text();
                    _reader.readMessage(_instance.text, Text.deserializeBinaryFromReader);
                    break;
                case 12:
                    _instance.file = new protoPubV1Models001.File();
                    _reader.readMessage(_instance.file, protoPubV1Models001.File.deserializeBinaryFromReader);
                    break;
                case 13:
                    _instance.sticker = new protoPubV1Models005.Sticker();
                    _reader.readMessage(_instance.sticker, protoPubV1Models005.Sticker.deserializeBinaryFromReader);
                    break;
                case 14:
                    _instance.location = new protoPubV1Models006.Location();
                    _reader.readMessage(_instance.location, protoPubV1Models006.Location.deserializeBinaryFromReader);
                    break;
                case 18:
                    _instance.form = new protoPubV1Models010.Form();
                    _reader.readMessage(_instance.form, protoPubV1Models010.Form.deserializeBinaryFromReader);
                    break;
                case 20:
                    _instance.buttons = new protoPubV1Models010.Buttons();
                    _reader.readMessage(_instance.buttons, protoPubV1Models010.Buttons.deserializeBinaryFromReader);
                    break;
                case 21:
                    _instance.shareUid = new ShareUid();
                    _reader.readMessage(_instance.shareUid, ShareUid.deserializeBinaryFromReader);
                    break;
                case 26:
                    _instance.sharePrivateDataRequest = new protoPubV1Models009.SharePrivateDataRequest();
                    _reader.readMessage(_instance.sharePrivateDataRequest, protoPubV1Models009.SharePrivateDataRequest
                        .deserializeBinaryFromReader);
                    break;
                case 19:
                    _instance.botSpecificPersistentEvent = new protoPubV1Models008.BotSpecificPersistentEvent();
                    _reader.readMessage(_instance.botSpecificPersistentEvent, protoPubV1Models008.BotSpecificPersistentEvent
                        .deserializeBinaryFromReader);
                    break;
                case 32:
                    _instance.table = new protoPubV1Models010.Table();
                    _reader.readMessage(_instance.table, protoPubV1Models010.Table.deserializeBinaryFromReader);
                    break;
                default:
                    _reader.skipField();
            }
        }
        MessageByBot.refineValues(_instance);
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
        if (_instance.from) {
            _writer.writeMessage(5, _instance.from, protoPubV1Models002.Uid.serializeBinaryToWriter);
        }
        if (_instance.to) {
            _writer.writeMessage(6, _instance.to, protoPubV1Models002.Uid.serializeBinaryToWriter);
        }
        if (_instance.replyToId) {
            _writer.writeInt64String(7, _instance.replyToId);
        }
        if (_instance.forwardFrom) {
            _writer.writeMessage(8, _instance.forwardFrom, protoPubV1Models002.Uid.serializeBinaryToWriter);
        }
        if (_instance.encrypted) {
            _writer.writeBool(10, _instance.encrypted);
        }
        if (_instance.ttl) {
            _writer.writeInt32(23, _instance.ttl);
        }
        if (_instance.thread) {
            _writer.writeInt64String(28, _instance.thread);
        }
        if (_instance.shouldBeQuiet) {
            _writer.writeBool(29, _instance.shouldBeQuiet);
        }
        if (_instance.messageMarkup) {
            _writer.writeMessage(34, _instance.messageMarkup, protoPubV1Models014.MessageMarkup.serializeBinaryToWriter);
        }
        if (_instance.text) {
            _writer.writeMessage(11, _instance.text, Text.serializeBinaryToWriter);
        }
        if (_instance.file) {
            _writer.writeMessage(12, _instance.file, protoPubV1Models001.File.serializeBinaryToWriter);
        }
        if (_instance.sticker) {
            _writer.writeMessage(13, _instance.sticker, protoPubV1Models005.Sticker.serializeBinaryToWriter);
        }
        if (_instance.location) {
            _writer.writeMessage(14, _instance.location, protoPubV1Models006.Location.serializeBinaryToWriter);
        }
        if (_instance.form) {
            _writer.writeMessage(18, _instance.form, protoPubV1Models010.Form.serializeBinaryToWriter);
        }
        if (_instance.buttons) {
            _writer.writeMessage(20, _instance.buttons, protoPubV1Models010.Buttons.serializeBinaryToWriter);
        }
        if (_instance.shareUid) {
            _writer.writeMessage(21, _instance.shareUid, ShareUid.serializeBinaryToWriter);
        }
        if (_instance.sharePrivateDataRequest) {
            _writer.writeMessage(26, _instance.sharePrivateDataRequest, protoPubV1Models009.SharePrivateDataRequest.serializeBinaryToWriter);
        }
        if (_instance.botSpecificPersistentEvent) {
            _writer.writeMessage(19, _instance.botSpecificPersistentEvent, protoPubV1Models008.BotSpecificPersistentEvent.serializeBinaryToWriter);
        }
        if (_instance.table) {
            _writer.writeMessage(32, _instance.table, protoPubV1Models010.Table.serializeBinaryToWriter);
        }
    }
    get packetId() {
        return this._packetId;
    }
    set packetId(value) {
        this._packetId = value;
    }
    get from() {
        return this._from;
    }
    set from(value) {
        this._from = value;
    }
    get to() {
        return this._to;
    }
    set to(value) {
        this._to = value;
    }
    get replyToId() {
        return this._replyToId;
    }
    set replyToId(value) {
        this._replyToId = value;
    }
    get forwardFrom() {
        return this._forwardFrom;
    }
    set forwardFrom(value) {
        this._forwardFrom = value;
    }
    get encrypted() {
        return this._encrypted;
    }
    set encrypted(value) {
        this._encrypted = value;
    }
    get ttl() {
        return this._ttl;
    }
    set ttl(value) {
        this._ttl = value;
    }
    get thread() {
        return this._thread;
    }
    set thread(value) {
        this._thread = value;
    }
    get shouldBeQuiet() {
        return this._shouldBeQuiet;
    }
    set shouldBeQuiet(value) {
        this._shouldBeQuiet = value;
    }
    get messageMarkup() {
        return this._messageMarkup;
    }
    set messageMarkup(value) {
        this._messageMarkup = value;
    }
    get text() {
        return this._text;
    }
    set text(value) {
        if (value !== undefined && value !== null) {
            this._file = this._sticker = this._location = this._form = this._buttons = this._shareUid = this._sharePrivateDataRequest = this._botSpecificPersistentEvent = this._table = undefined;
            this._type = MessageByBot.TypeCase.text;
        }
        this._text = value;
    }
    get file() {
        return this._file;
    }
    set file(value) {
        if (value !== undefined && value !== null) {
            this._text = this._sticker = this._location = this._form = this._buttons = this._shareUid = this._sharePrivateDataRequest = this._botSpecificPersistentEvent = this._table = undefined;
            this._type = MessageByBot.TypeCase.file;
        }
        this._file = value;
    }
    get sticker() {
        return this._sticker;
    }
    set sticker(value) {
        if (value !== undefined && value !== null) {
            this._text = this._file = this._location = this._form = this._buttons = this._shareUid = this._sharePrivateDataRequest = this._botSpecificPersistentEvent = this._table = undefined;
            this._type = MessageByBot.TypeCase.sticker;
        }
        this._sticker = value;
    }
    get location() {
        return this._location;
    }
    set location(value) {
        if (value !== undefined && value !== null) {
            this._text = this._file = this._sticker = this._form = this._buttons = this._shareUid = this._sharePrivateDataRequest = this._botSpecificPersistentEvent = this._table = undefined;
            this._type = MessageByBot.TypeCase.location;
        }
        this._location = value;
    }
    get form() {
        return this._form;
    }
    set form(value) {
        if (value !== undefined && value !== null) {
            this._text = this._file = this._sticker = this._location = this._buttons = this._shareUid = this._sharePrivateDataRequest = this._botSpecificPersistentEvent = this._table = undefined;
            this._type = MessageByBot.TypeCase.form;
        }
        this._form = value;
    }
    get buttons() {
        return this._buttons;
    }
    set buttons(value) {
        if (value !== undefined && value !== null) {
            this._text = this._file = this._sticker = this._location = this._form = this._shareUid = this._sharePrivateDataRequest = this._botSpecificPersistentEvent = this._table = undefined;
            this._type = MessageByBot.TypeCase.buttons;
        }
        this._buttons = value;
    }
    get shareUid() {
        return this._shareUid;
    }
    set shareUid(value) {
        if (value !== undefined && value !== null) {
            this._text = this._file = this._sticker = this._location = this._form = this._buttons = this._sharePrivateDataRequest = this._botSpecificPersistentEvent = this._table = undefined;
            this._type = MessageByBot.TypeCase.shareUid;
        }
        this._shareUid = value;
    }
    get sharePrivateDataRequest() {
        return this._sharePrivateDataRequest;
    }
    set sharePrivateDataRequest(value) {
        if (value !== undefined && value !== null) {
            this._text = this._file = this._sticker = this._location = this._form = this._buttons = this._shareUid = this._botSpecificPersistentEvent = this._table = undefined;
            this._type = MessageByBot.TypeCase.sharePrivateDataRequest;
        }
        this._sharePrivateDataRequest = value;
    }
    get botSpecificPersistentEvent() {
        return this._botSpecificPersistentEvent;
    }
    set botSpecificPersistentEvent(value) {
        if (value !== undefined && value !== null) {
            this._text = this._file = this._sticker = this._location = this._form = this._buttons = this._shareUid = this._sharePrivateDataRequest = this._table = undefined;
            this._type = MessageByBot.TypeCase.botSpecificPersistentEvent;
        }
        this._botSpecificPersistentEvent = value;
    }
    get table() {
        return this._table;
    }
    set table(value) {
        if (value !== undefined && value !== null) {
            this._text = this._file = this._sticker = this._location = this._form = this._buttons = this._shareUid = this._sharePrivateDataRequest = this._botSpecificPersistentEvent = undefined;
            this._type = MessageByBot.TypeCase.table;
        }
        this._table = value;
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
        MessageByBot.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            packetId: this.packetId,
            from: this.from ? this.from.toObject() : undefined,
            to: this.to ? this.to.toObject() : undefined,
            replyToId: this.replyToId,
            forwardFrom: this.forwardFrom ? this.forwardFrom.toObject() : undefined,
            encrypted: this.encrypted,
            ttl: this.ttl,
            thread: this.thread,
            shouldBeQuiet: this.shouldBeQuiet,
            messageMarkup: this.messageMarkup
                ? this.messageMarkup.toObject()
                : undefined,
            text: this.text ? this.text.toObject() : undefined,
            file: this.file ? this.file.toObject() : undefined,
            sticker: this.sticker ? this.sticker.toObject() : undefined,
            location: this.location ? this.location.toObject() : undefined,
            form: this.form ? this.form.toObject() : undefined,
            buttons: this.buttons ? this.buttons.toObject() : undefined,
            shareUid: this.shareUid ? this.shareUid.toObject() : undefined,
            sharePrivateDataRequest: this.sharePrivateDataRequest
                ? this.sharePrivateDataRequest.toObject()
                : undefined,
            botSpecificPersistentEvent: this.botSpecificPersistentEvent
                ? this.botSpecificPersistentEvent.toObject()
                : undefined,
            table: this.table ? this.table.toObject() : undefined
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
            from: this.from ? this.from.toProtobufJSON(options) : null,
            to: this.to ? this.to.toProtobufJSON(options) : null,
            replyToId: this.replyToId,
            forwardFrom: this.forwardFrom
                ? this.forwardFrom.toProtobufJSON(options)
                : null,
            encrypted: this.encrypted,
            ttl: this.ttl,
            thread: this.thread,
            shouldBeQuiet: this.shouldBeQuiet,
            messageMarkup: this.messageMarkup
                ? this.messageMarkup.toProtobufJSON(options)
                : null,
            text: this.text ? this.text.toProtobufJSON(options) : null,
            file: this.file ? this.file.toProtobufJSON(options) : null,
            sticker: this.sticker ? this.sticker.toProtobufJSON(options) : null,
            location: this.location ? this.location.toProtobufJSON(options) : null,
            form: this.form ? this.form.toProtobufJSON(options) : null,
            buttons: this.buttons ? this.buttons.toProtobufJSON(options) : null,
            shareUid: this.shareUid ? this.shareUid.toProtobufJSON(options) : null,
            sharePrivateDataRequest: this.sharePrivateDataRequest
                ? this.sharePrivateDataRequest.toProtobufJSON(options)
                : null,
            botSpecificPersistentEvent: this.botSpecificPersistentEvent
                ? this.botSpecificPersistentEvent.toProtobufJSON(options)
                : null,
            table: this.table ? this.table.toProtobufJSON(options) : null
        };
    }
}
MessageByBot.id = 'proto.pub.v1.models.MessageByBot';
(function (MessageByBot) {
    let TypeCase;
    (function (TypeCase) {
        TypeCase[TypeCase["none"] = 0] = "none";
        TypeCase[TypeCase["text"] = 1] = "text";
        TypeCase[TypeCase["file"] = 2] = "file";
        TypeCase[TypeCase["sticker"] = 3] = "sticker";
        TypeCase[TypeCase["location"] = 4] = "location";
        TypeCase[TypeCase["form"] = 5] = "form";
        TypeCase[TypeCase["buttons"] = 6] = "buttons";
        TypeCase[TypeCase["shareUid"] = 7] = "shareUid";
        TypeCase[TypeCase["sharePrivateDataRequest"] = 8] = "sharePrivateDataRequest";
        TypeCase[TypeCase["botSpecificPersistentEvent"] = 9] = "botSpecificPersistentEvent";
        TypeCase[TypeCase["table"] = 10] = "table";
    })(TypeCase = MessageByBot.TypeCase || (MessageByBot.TypeCase = {}));
})(MessageByBot || (MessageByBot = {}));
/**
 * Message implementation for proto.pub.v1.models.LocalChatMessage
 */
export class LocalChatMessage {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of LocalChatMessage to deeply clone from
     */
    constructor(_value) {
        this._packet = LocalChatMessage.PacketCase.none;
        _value = _value || {};
        this.from = _value.from
            ? new protoPubV1Models002.Uid(_value.from)
            : undefined;
        this.time = _value.time;
        this.localNetworkId = _value.localNetworkId;
        this.messageByClient = _value.messageByClient
            ? new MessageByClient(_value.messageByClient)
            : undefined;
        this.callEvent = _value.callEvent
            ? new protoPubV1Models013.CallEventV2(_value.callEvent)
            : undefined;
        this.localNetworkEmptyMessage = _value.localNetworkEmptyMessage
            ? new LocalNetworkEmptyMessage(_value.localNetworkEmptyMessage)
            : undefined;
        LocalChatMessage.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new LocalChatMessage();
        LocalChatMessage.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.from = _instance.from || undefined;
        _instance.time = _instance.time || '0';
        _instance.localNetworkId = _instance.localNetworkId || '0';
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
                    _instance.from = new protoPubV1Models002.Uid();
                    _reader.readMessage(_instance.from, protoPubV1Models002.Uid.deserializeBinaryFromReader);
                    break;
                case 2:
                    _instance.time = _reader.readInt64String();
                    break;
                case 5:
                    _instance.localNetworkId = _reader.readInt64String();
                    break;
                case 3:
                    _instance.messageByClient = new MessageByClient();
                    _reader.readMessage(_instance.messageByClient, MessageByClient.deserializeBinaryFromReader);
                    break;
                case 4:
                    _instance.callEvent = new protoPubV1Models013.CallEventV2();
                    _reader.readMessage(_instance.callEvent, protoPubV1Models013.CallEventV2.deserializeBinaryFromReader);
                    break;
                case 6:
                    _instance.localNetworkEmptyMessage = new LocalNetworkEmptyMessage();
                    _reader.readMessage(_instance.localNetworkEmptyMessage, LocalNetworkEmptyMessage.deserializeBinaryFromReader);
                    break;
                default:
                    _reader.skipField();
            }
        }
        LocalChatMessage.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.from) {
            _writer.writeMessage(1, _instance.from, protoPubV1Models002.Uid.serializeBinaryToWriter);
        }
        if (_instance.time) {
            _writer.writeInt64String(2, _instance.time);
        }
        if (_instance.localNetworkId) {
            _writer.writeInt64String(5, _instance.localNetworkId);
        }
        if (_instance.messageByClient) {
            _writer.writeMessage(3, _instance.messageByClient, MessageByClient.serializeBinaryToWriter);
        }
        if (_instance.callEvent) {
            _writer.writeMessage(4, _instance.callEvent, protoPubV1Models013.CallEventV2.serializeBinaryToWriter);
        }
        if (_instance.localNetworkEmptyMessage) {
            _writer.writeMessage(6, _instance.localNetworkEmptyMessage, LocalNetworkEmptyMessage.serializeBinaryToWriter);
        }
    }
    get from() {
        return this._from;
    }
    set from(value) {
        this._from = value;
    }
    get time() {
        return this._time;
    }
    set time(value) {
        this._time = value;
    }
    get localNetworkId() {
        return this._localNetworkId;
    }
    set localNetworkId(value) {
        this._localNetworkId = value;
    }
    get messageByClient() {
        return this._messageByClient;
    }
    set messageByClient(value) {
        if (value !== undefined && value !== null) {
            this._callEvent = this._localNetworkEmptyMessage = undefined;
            this._packet = LocalChatMessage.PacketCase.messageByClient;
        }
        this._messageByClient = value;
    }
    get callEvent() {
        return this._callEvent;
    }
    set callEvent(value) {
        if (value !== undefined && value !== null) {
            this._messageByClient = this._localNetworkEmptyMessage = undefined;
            this._packet = LocalChatMessage.PacketCase.callEvent;
        }
        this._callEvent = value;
    }
    get localNetworkEmptyMessage() {
        return this._localNetworkEmptyMessage;
    }
    set localNetworkEmptyMessage(value) {
        if (value !== undefined && value !== null) {
            this._messageByClient = this._callEvent = undefined;
            this._packet = LocalChatMessage.PacketCase.localNetworkEmptyMessage;
        }
        this._localNetworkEmptyMessage = value;
    }
    get packet() {
        return this._packet;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        LocalChatMessage.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            from: this.from ? this.from.toObject() : undefined,
            time: this.time,
            localNetworkId: this.localNetworkId,
            messageByClient: this.messageByClient
                ? this.messageByClient.toObject()
                : undefined,
            callEvent: this.callEvent ? this.callEvent.toObject() : undefined,
            localNetworkEmptyMessage: this.localNetworkEmptyMessage
                ? this.localNetworkEmptyMessage.toObject()
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
            from: this.from ? this.from.toProtobufJSON(options) : null,
            time: this.time,
            localNetworkId: this.localNetworkId,
            messageByClient: this.messageByClient
                ? this.messageByClient.toProtobufJSON(options)
                : null,
            callEvent: this.callEvent ? this.callEvent.toProtobufJSON(options) : null,
            localNetworkEmptyMessage: this.localNetworkEmptyMessage
                ? this.localNetworkEmptyMessage.toProtobufJSON(options)
                : null
        };
    }
}
LocalChatMessage.id = 'proto.pub.v1.models.LocalChatMessage';
(function (LocalChatMessage) {
    let PacketCase;
    (function (PacketCase) {
        PacketCase[PacketCase["none"] = 0] = "none";
        PacketCase[PacketCase["messageByClient"] = 1] = "messageByClient";
        PacketCase[PacketCase["callEvent"] = 2] = "callEvent";
        PacketCase[PacketCase["localNetworkEmptyMessage"] = 3] = "localNetworkEmptyMessage";
    })(PacketCase = LocalChatMessage.PacketCase || (LocalChatMessage.PacketCase = {}));
})(LocalChatMessage || (LocalChatMessage = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5wYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Byb3RvL3NyYy9saWIvcHViL3YxL21vZGVscy9tZXNzYWdlLnBiLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdBLE9BQU8sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFjLE1BQU0saUJBQWlCLENBQUM7QUFFekUsT0FBTyxLQUFLLG1CQUFtQixNQUFNLGdDQUFnQyxDQUFDO0FBQ3RFLE9BQU8sS0FBSyxtQkFBbUIsTUFBTSwrQkFBK0IsQ0FBQztBQUdyRSxPQUFPLEtBQUssbUJBQW1CLE1BQU0sbUNBQW1DLENBQUM7QUFDekUsT0FBTyxLQUFLLG1CQUFtQixNQUFNLG9DQUFvQyxDQUFDO0FBQzFFLE9BQU8sS0FBSyxtQkFBbUIsTUFBTSxtQ0FBbUMsQ0FBQztBQUN6RSxPQUFPLEtBQUssbUJBQW1CLE1BQU0sNENBQTRDLENBQUM7QUFDbEYsT0FBTyxLQUFLLG1CQUFtQixNQUFNLDhDQUE4QyxDQUFDO0FBQ3BGLE9BQU8sS0FBSyxtQkFBbUIsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN0RSxPQUFPLEtBQUssbUJBQW1CLE1BQU0sZ0NBQWdDLENBQUM7QUFDdEUsT0FBTyxLQUFLLG1CQUFtQixNQUFNLCtCQUErQixDQUFDO0FBQ3JFLE9BQU8sS0FBSyxtQkFBbUIsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN0RSxPQUFPLEtBQUssbUJBQW1CLE1BQU0sa0NBQWtDLENBQUM7QUFDeEU7O0dBRUc7QUFDSCxNQUFNLE9BQU8sSUFBSTtJQXVEZjs7O09BR0c7SUFDSCxZQUFZLE1BQXdDO1FBQ2xELE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUE1REQ7OztPQUdH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V0FBVyxHQUFHLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLENBQUMsMkJBQTJCLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixHQUFHLFNBQVMsQ0FBQztZQUNsVixJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1NBQ3BDO1FBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUNELElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDO0lBQ0QsSUFBSSxZQUFZLENBQUMsS0FBc0Q7UUFDckUsSUFBSSxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUU7WUFDekMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLENBQUMsMkJBQTJCLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixHQUFHLFNBQVMsQ0FBQztZQUMxVSxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDO1NBQzVDO1FBQ0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUNELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FB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QUEyUXJELFdBQWMsZ0JBQWdCO0lBd0I1QixJQUFZLFVBS1g7SUFMRCxXQUFZLFVBQVU7UUFDcEIsMkNBQVEsQ0FBQTtRQUNSLGlFQUFtQixDQUFBO1FBQ25CLHFEQUFhLENBQUE7UUFDYixtRkFBNEIsQ0FBQTtJQUM5QixDQUFDLEVBTFcsVUFBVSxHQUFWLDJCQUFVLEtBQVYsMkJBQVUsUUFLckI7QUFDSCxDQUFDLEVBOUJhLGdCQUFnQixLQUFoQixnQkFBZ0IsUUE4QjdCIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGUgKi9cbi8qIGVzbGludC1kaXNhYmxlICovXG4vLyBAdHMtbm9jaGVja1xuLy9cbi8vIFRISVMgSVMgQSBHRU5FUkFURUQgRklMRVxuLy8gRE8gTk9UIE1PRElGWSBJVCEgWU9VUiBDSEFOR0VTIFdJTEwgQkUgTE9TVFxuaW1wb3J0IHtcbiAgR3JwY01lc3NhZ2UsXG4gIFJlY3Vyc2l2ZVBhcnRpYWwsXG4gIFRvUHJvdG9idWZKU09OT3B0aW9uc1xufSBmcm9tICdAbmd4LWdycGMvY29tbW9uJztcbmltcG9ydCB7IEJpbmFyeVJlYWRlciwgQmluYXJ5V3JpdGVyLCBCeXRlU291cmNlIH0gZnJvbSAnZ29vZ2xlLXByb3RvYnVmJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMDAgZnJvbSAnLi4vLi4vLi4vcHViL3YxL21vZGVscy9jYXRlZ29yaWVzLnBiJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMDEgZnJvbSAnLi4vLi4vLi4vcHViL3YxL21vZGVscy9maWxlLnBiJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMDIgZnJvbSAnLi4vLi4vLi4vcHViL3YxL21vZGVscy91aWQucGInO1xuaW1wb3J0ICogYXMgcHJvdG9QdWJWMU1vZGVsczAwMyBmcm9tICcuLi8uLi8uLi9wdWIvdjEvbW9kZWxzL2F2YXRhci5wYic7XG5pbXBvcnQgKiBhcyBwcm90b1B1YlYxTW9kZWxzMDA0IGZyb20gJy4uLy4uLy4uL3B1Yi92MS9tb2RlbHMvcGluLWNvZGUtc2V0dGluZ3MucGInO1xuaW1wb3J0ICogYXMgcHJvdG9QdWJWMU1vZGVsczAwNSBmcm9tICcuLi8uLi8uLi9wdWIvdjEvbW9kZWxzL3N0aWNrZXIucGInO1xuaW1wb3J0ICogYXMgcHJvdG9QdWJWMU1vZGVsczAwNiBmcm9tICcuLi8uLi8uLi9wdWIvdjEvbW9kZWxzL2xvY2F0aW9uLnBiJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMDcgZnJvbSAnLi4vLi4vLi4vcHViL3YxL21vZGVscy9wYXltZW50LnBiJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMDggZnJvbSAnLi4vLi4vLi4vcHViL3YxL21vZGVscy9wZXJzaXN0ZW50LWV2ZW50LnBiJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMDkgZnJvbSAnLi4vLi4vLi4vcHViL3YxL21vZGVscy9zaGFyZS1wcml2YXRlLWRhdGEucGInO1xuaW1wb3J0ICogYXMgcHJvdG9QdWJWMU1vZGVsczAxMCBmcm9tICcuLi8uLi8uLi9wdWIvdjEvbW9kZWxzL2Zvcm0ucGInO1xuaW1wb3J0ICogYXMgcHJvdG9QdWJWMU1vZGVsczAxMSBmcm9tICcuLi8uLi8uLi9wdWIvdjEvbW9kZWxzL3BvbGwucGInO1xuaW1wb3J0ICogYXMgcHJvdG9QdWJWMU1vZGVsczAxMiBmcm9tICcuLi8uLi8uLi9wdWIvdjEvbW9kZWxzL211Yy5wYic7XG5pbXBvcnQgKiBhcyBwcm90b1B1YlYxTW9kZWxzMDEzIGZyb20gJy4uLy4uLy4uL3B1Yi92MS9tb2RlbHMvY2FsbC5wYic7XG5pbXBvcnQgKiBhcyBwcm90b1B1YlYxTW9kZWxzMDE0IGZyb20gJy4uLy4uLy4uL3B1Yi92MS9tb2RlbHMvbWFya3VwLnBiJztcbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3IgcHJvdG8ucHViLnYxLm1vZGVscy5UZXh0XG4gKi9cbmV4cG9ydCBjbGFzcyBUZXh0IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAncHJvdG8ucHViLnYxLm1vZGVscy5UZXh0JztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgVGV4dCgpO1xuICAgIFRleHQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBUZXh0KSB7XG4gICAgX2luc3RhbmNlLnRleHQgPSBfaW5zdGFuY2UudGV4dCB8fCAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihfaW5zdGFuY2U6IFRleHQsIF9yZWFkZXI6IEJpbmFyeVJlYWRlcikge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLnRleHQgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFRleHQucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoX2luc3RhbmNlOiBUZXh0LCBfd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoX2luc3RhbmNlLnRleHQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLnRleHQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3RleHQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBUZXh0IHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFRleHQuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMudGV4dCA9IF92YWx1ZS50ZXh0O1xuICAgIFRleHQucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCB0ZXh0KCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3RleHQ7XG4gIH1cbiAgc2V0IHRleHQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3RleHQgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBUZXh0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IFRleHQuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICB0ZXh0OiB0aGlzLnRleHRcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBUZXh0LkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGV4dDogdGhpcy50ZXh0XG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBUZXh0IHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBUZXh0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICB0ZXh0Pzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIFRleHRcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHRleHQ/OiBzdHJpbmc7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBwcm90by5wdWIudjEubW9kZWxzLlNoYXJlVWlkXG4gKi9cbmV4cG9ydCBjbGFzcyBTaGFyZVVpZCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ3Byb3RvLnB1Yi52MS5tb2RlbHMuU2hhcmVVaWQnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBTaGFyZVVpZCgpO1xuICAgIFNoYXJlVWlkLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogU2hhcmVVaWQpIHtcbiAgICBfaW5zdGFuY2UudWlkID0gX2luc3RhbmNlLnVpZCB8fCB1bmRlZmluZWQ7XG4gICAgX2luc3RhbmNlLnBob25lTnVtYmVyID0gX2luc3RhbmNlLnBob25lTnVtYmVyIHx8ICcnO1xuICAgIF9pbnN0YW5jZS5uYW1lID0gX2luc3RhbmNlLm5hbWUgfHwgJyc7XG4gICAgX2luc3RhbmNlLmpvaW5Ub2tlbiA9IF9pbnN0YW5jZS5qb2luVG9rZW4gfHwgJyc7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBTaGFyZVVpZCxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UudWlkID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS51aWQsXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLnBob25lTnVtYmVyID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBfaW5zdGFuY2UubmFtZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgX2luc3RhbmNlLmpvaW5Ub2tlbiA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgU2hhcmVVaWQucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoX2luc3RhbmNlOiBTaGFyZVVpZCwgX3dyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKF9pbnN0YW5jZS51aWQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAxLFxuICAgICAgICBfaW5zdGFuY2UudWlkIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UucGhvbmVOdW1iZXIpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMiwgX2luc3RhbmNlLnBob25lTnVtYmVyKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5uYW1lKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDMsIF9pbnN0YW5jZS5uYW1lKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5qb2luVG9rZW4pIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoNCwgX2luc3RhbmNlLmpvaW5Ub2tlbik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdWlkPzogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQ7XG4gIHByaXZhdGUgX3Bob25lTnVtYmVyPzogc3RyaW5nO1xuICBwcml2YXRlIF9uYW1lPzogc3RyaW5nO1xuICBwcml2YXRlIF9qb2luVG9rZW4/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBTaGFyZVVpZCB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxTaGFyZVVpZC5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy51aWQgPSBfdmFsdWUudWlkID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkKF92YWx1ZS51aWQpIDogdW5kZWZpbmVkO1xuICAgIHRoaXMucGhvbmVOdW1iZXIgPSBfdmFsdWUucGhvbmVOdW1iZXI7XG4gICAgdGhpcy5uYW1lID0gX3ZhbHVlLm5hbWU7XG4gICAgdGhpcy5qb2luVG9rZW4gPSBfdmFsdWUuam9pblRva2VuO1xuICAgIFNoYXJlVWlkLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgdWlkKCk6IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdWlkO1xuICB9XG4gIHNldCB1aWQodmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdWlkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHBob25lTnVtYmVyKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3Bob25lTnVtYmVyO1xuICB9XG4gIHNldCBwaG9uZU51bWJlcih2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcGhvbmVOdW1iZXIgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbmFtZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG4gIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGpvaW5Ub2tlbigpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9qb2luVG9rZW47XG4gIH1cbiAgc2V0IGpvaW5Ub2tlbih2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fam9pblRva2VuID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgU2hhcmVVaWQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogU2hhcmVVaWQuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICB1aWQ6IHRoaXMudWlkID8gdGhpcy51aWQudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIHBob25lTnVtYmVyOiB0aGlzLnBob25lTnVtYmVyLFxuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgam9pblRva2VuOiB0aGlzLmpvaW5Ub2tlblxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IFNoYXJlVWlkLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgdWlkOiB0aGlzLnVpZCA/IHRoaXMudWlkLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIHBob25lTnVtYmVyOiB0aGlzLnBob25lTnVtYmVyLFxuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgam9pblRva2VuOiB0aGlzLmpvaW5Ub2tlblxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgU2hhcmVVaWQge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIFNoYXJlVWlkXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICB1aWQ/OiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5Bc09iamVjdDtcbiAgICBwaG9uZU51bWJlcj86IHN0cmluZztcbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIGpvaW5Ub2tlbj86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBTaGFyZVVpZFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgdWlkPzogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHBob25lTnVtYmVyPzogc3RyaW5nO1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgam9pblRva2VuPzogc3RyaW5nO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3IgcHJvdG8ucHViLnYxLm1vZGVscy5NZXNzYWdlRGVsaXZlcnlBY2tcbiAqL1xuZXhwb3J0IGNsYXNzIE1lc3NhZ2VEZWxpdmVyeUFjayBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ3Byb3RvLnB1Yi52MS5tb2RlbHMuTWVzc2FnZURlbGl2ZXJ5QWNrJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgTWVzc2FnZURlbGl2ZXJ5QWNrKCk7XG4gICAgTWVzc2FnZURlbGl2ZXJ5QWNrLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogTWVzc2FnZURlbGl2ZXJ5QWNrKSB7XG4gICAgX2luc3RhbmNlLnBhY2tldElkID0gX2luc3RhbmNlLnBhY2tldElkIHx8ICcnO1xuICAgIF9pbnN0YW5jZS5pZCA9IF9pbnN0YW5jZS5pZCB8fCAnMCc7XG4gICAgX2luc3RhbmNlLnRpbWUgPSBfaW5zdGFuY2UudGltZSB8fCAnMCc7XG4gICAgX2luc3RhbmNlLmZyb20gPSBfaW5zdGFuY2UuZnJvbSB8fCB1bmRlZmluZWQ7XG4gICAgX2luc3RhbmNlLnRvID0gX2luc3RhbmNlLnRvIHx8IHVuZGVmaW5lZDtcbiAgICBfaW5zdGFuY2UuYWNrT25Mb2NhbE1lc3NhZ2UgPSBfaW5zdGFuY2UuYWNrT25Mb2NhbE1lc3NhZ2UgfHwgZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBNZXNzYWdlRGVsaXZlcnlBY2ssXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLnBhY2tldElkID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UuaWQgPSBfcmVhZGVyLnJlYWRJbnQ2NFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgX2luc3RhbmNlLnRpbWUgPSBfcmVhZGVyLnJlYWRJbnQ2NFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgX2luc3RhbmNlLmZyb20gPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmZyb20sXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgX2luc3RhbmNlLnRvID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS50byxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICBfaW5zdGFuY2UuYWNrT25Mb2NhbE1lc3NhZ2UgPSBfcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBNZXNzYWdlRGVsaXZlcnlBY2sucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBNZXNzYWdlRGVsaXZlcnlBY2ssXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UucGFja2V0SWQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLnBhY2tldElkKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5pZCkge1xuICAgICAgX3dyaXRlci53cml0ZUludDY0U3RyaW5nKDIsIF9pbnN0YW5jZS5pZCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UudGltZSkge1xuICAgICAgX3dyaXRlci53cml0ZUludDY0U3RyaW5nKDMsIF9pbnN0YW5jZS50aW1lKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5mcm9tKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgNCxcbiAgICAgICAgX2luc3RhbmNlLmZyb20gYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS50bykge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDUsXG4gICAgICAgIF9pbnN0YW5jZS50byBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmFja09uTG9jYWxNZXNzYWdlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlQm9vbCg2LCBfaW5zdGFuY2UuYWNrT25Mb2NhbE1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3BhY2tldElkPzogc3RyaW5nO1xuICBwcml2YXRlIF9pZD86IHN0cmluZztcbiAgcHJpdmF0ZSBfdGltZT86IHN0cmluZztcbiAgcHJpdmF0ZSBfZnJvbT86IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkO1xuICBwcml2YXRlIF90bz86IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkO1xuICBwcml2YXRlIF9hY2tPbkxvY2FsTWVzc2FnZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBNZXNzYWdlRGVsaXZlcnlBY2sgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8TWVzc2FnZURlbGl2ZXJ5QWNrLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnBhY2tldElkID0gX3ZhbHVlLnBhY2tldElkO1xuICAgIHRoaXMuaWQgPSBfdmFsdWUuaWQ7XG4gICAgdGhpcy50aW1lID0gX3ZhbHVlLnRpbWU7XG4gICAgdGhpcy5mcm9tID0gX3ZhbHVlLmZyb21cbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkKF92YWx1ZS5mcm9tKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy50byA9IF92YWx1ZS50byA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZChfdmFsdWUudG8pIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuYWNrT25Mb2NhbE1lc3NhZ2UgPSBfdmFsdWUuYWNrT25Mb2NhbE1lc3NhZ2U7XG4gICAgTWVzc2FnZURlbGl2ZXJ5QWNrLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgcGFja2V0SWQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcGFja2V0SWQ7XG4gIH1cbiAgc2V0IHBhY2tldElkKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9wYWNrZXRJZCA9IHZhbHVlO1xuICB9XG4gIGdldCBpZCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9pZDtcbiAgfVxuICBzZXQgaWQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHRpbWUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdGltZTtcbiAgfVxuICBzZXQgdGltZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdGltZSA9IHZhbHVlO1xuICB9XG4gIGdldCBmcm9tKCk6IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZnJvbTtcbiAgfVxuICBzZXQgZnJvbSh2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9mcm9tID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHRvKCk6IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdG87XG4gIH1cbiAgc2V0IHRvKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZCB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3RvID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGFja09uTG9jYWxNZXNzYWdlKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9hY2tPbkxvY2FsTWVzc2FnZTtcbiAgfVxuICBzZXQgYWNrT25Mb2NhbE1lc3NhZ2UodmFsdWU6IGJvb2xlYW4gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9hY2tPbkxvY2FsTWVzc2FnZSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIE1lc3NhZ2VEZWxpdmVyeUFjay5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBNZXNzYWdlRGVsaXZlcnlBY2suQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBwYWNrZXRJZDogdGhpcy5wYWNrZXRJZCxcbiAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgdGltZTogdGhpcy50aW1lLFxuICAgICAgZnJvbTogdGhpcy5mcm9tID8gdGhpcy5mcm9tLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICB0bzogdGhpcy50byA/IHRoaXMudG8udG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGFja09uTG9jYWxNZXNzYWdlOiB0aGlzLmFja09uTG9jYWxNZXNzYWdlXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogTWVzc2FnZURlbGl2ZXJ5QWNrLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFja2V0SWQ6IHRoaXMucGFja2V0SWQsXG4gICAgICBpZDogdGhpcy5pZCxcbiAgICAgIHRpbWU6IHRoaXMudGltZSxcbiAgICAgIGZyb206IHRoaXMuZnJvbSA/IHRoaXMuZnJvbS50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICB0bzogdGhpcy50byA/IHRoaXMudG8udG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgYWNrT25Mb2NhbE1lc3NhZ2U6IHRoaXMuYWNrT25Mb2NhbE1lc3NhZ2VcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIE1lc3NhZ2VEZWxpdmVyeUFjayB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgTWVzc2FnZURlbGl2ZXJ5QWNrXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBwYWNrZXRJZD86IHN0cmluZztcbiAgICBpZD86IHN0cmluZztcbiAgICB0aW1lPzogc3RyaW5nO1xuICAgIGZyb20/OiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5Bc09iamVjdDtcbiAgICB0bz86IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLkFzT2JqZWN0O1xuICAgIGFja09uTG9jYWxNZXNzYWdlPzogYm9vbGVhbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBNZXNzYWdlRGVsaXZlcnlBY2tcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHBhY2tldElkPzogc3RyaW5nO1xuICAgIGlkPzogc3RyaW5nO1xuICAgIHRpbWU/OiBzdHJpbmc7XG4gICAgZnJvbT86IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICB0bz86IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBhY2tPbkxvY2FsTWVzc2FnZT86IGJvb2xlYW47XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBwcm90by5wdWIudjEubW9kZWxzLk1lc3NhZ2VCcmllZlxuICovXG5leHBvcnQgY2xhc3MgTWVzc2FnZUJyaWVmIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAncHJvdG8ucHViLnYxLm1vZGVscy5NZXNzYWdlQnJpZWYnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBNZXNzYWdlQnJpZWYoKTtcbiAgICBNZXNzYWdlQnJpZWYuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBNZXNzYWdlQnJpZWYpIHtcbiAgICBfaW5zdGFuY2UucGFja2V0SWQgPSBfaW5zdGFuY2UucGFja2V0SWQgfHwgJyc7XG4gICAgX2luc3RhbmNlLmlkID0gX2luc3RhbmNlLmlkIHx8ICcwJztcbiAgICBfaW5zdGFuY2UudGltZSA9IF9pbnN0YW5jZS50aW1lIHx8ICcwJztcbiAgICBfaW5zdGFuY2UuZnJvbSA9IF9pbnN0YW5jZS5mcm9tIHx8IHVuZGVmaW5lZDtcbiAgICBfaW5zdGFuY2UudG8gPSBfaW5zdGFuY2UudG8gfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5tZXNzYWdlVHlwZSA9IF9pbnN0YW5jZS5tZXNzYWdlVHlwZSB8fCAwO1xuICAgIF9pbnN0YW5jZS50ZXh0ID0gX2luc3RhbmNlLnRleHQgfHwgJyc7XG4gICAgX2luc3RhbmNlLnRodW1ibmFpbFJlZmVyZW5jZSA9IF9pbnN0YW5jZS50aHVtYm5haWxSZWZlcmVuY2UgfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5pc0xvY2FsTWVzc2FnZSA9IF9pbnN0YW5jZS5pc0xvY2FsTWVzc2FnZSB8fCBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IE1lc3NhZ2VCcmllZixcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UucGFja2V0SWQgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5pZCA9IF9yZWFkZXIucmVhZEludDY0U3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBfaW5zdGFuY2UudGltZSA9IF9yZWFkZXIucmVhZEludDY0U3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBfaW5zdGFuY2UuZnJvbSA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuZnJvbSxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBfaW5zdGFuY2UudG8gPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLnRvLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIF9pbnN0YW5jZS5tZXNzYWdlVHlwZSA9IF9yZWFkZXIucmVhZEVudW0oKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA3OlxuICAgICAgICAgIF9pbnN0YW5jZS50ZXh0ID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgODpcbiAgICAgICAgICBfaW5zdGFuY2UudGh1bWJuYWlsUmVmZXJlbmNlID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDEuRmlsZSgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UudGh1bWJuYWlsUmVmZXJlbmNlLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMS5GaWxlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgOTpcbiAgICAgICAgICBfaW5zdGFuY2UuaXNMb2NhbE1lc3NhZ2UgPSBfcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBNZXNzYWdlQnJpZWYucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBNZXNzYWdlQnJpZWYsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UucGFja2V0SWQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLnBhY2tldElkKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5pZCkge1xuICAgICAgX3dyaXRlci53cml0ZUludDY0U3RyaW5nKDIsIF9pbnN0YW5jZS5pZCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UudGltZSkge1xuICAgICAgX3dyaXRlci53cml0ZUludDY0U3RyaW5nKDMsIF9pbnN0YW5jZS50aW1lKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5mcm9tKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgNCxcbiAgICAgICAgX2luc3RhbmNlLmZyb20gYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS50bykge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDUsXG4gICAgICAgIF9pbnN0YW5jZS50byBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLm1lc3NhZ2VUeXBlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlRW51bSg2LCBfaW5zdGFuY2UubWVzc2FnZVR5cGUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnRleHQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoNywgX2luc3RhbmNlLnRleHQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnRodW1ibmFpbFJlZmVyZW5jZSkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDgsXG4gICAgICAgIF9pbnN0YW5jZS50aHVtYm5haWxSZWZlcmVuY2UgYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAxLkZpbGUuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuaXNMb2NhbE1lc3NhZ2UpIHtcbiAgICAgIF93cml0ZXIud3JpdGVCb29sKDksIF9pbnN0YW5jZS5pc0xvY2FsTWVzc2FnZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcGFja2V0SWQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2lkPzogc3RyaW5nO1xuICBwcml2YXRlIF90aW1lPzogc3RyaW5nO1xuICBwcml2YXRlIF9mcm9tPzogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQ7XG4gIHByaXZhdGUgX3RvPzogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQ7XG4gIHByaXZhdGUgX21lc3NhZ2VUeXBlPzogTWVzc2FnZUJyaWVmLk1lc3NhZ2VUeXBlcztcbiAgcHJpdmF0ZSBfdGV4dD86IHN0cmluZztcbiAgcHJpdmF0ZSBfdGh1bWJuYWlsUmVmZXJlbmNlPzogcHJvdG9QdWJWMU1vZGVsczAwMS5GaWxlO1xuICBwcml2YXRlIF9pc0xvY2FsTWVzc2FnZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBNZXNzYWdlQnJpZWYgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8TWVzc2FnZUJyaWVmLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnBhY2tldElkID0gX3ZhbHVlLnBhY2tldElkO1xuICAgIHRoaXMuaWQgPSBfdmFsdWUuaWQ7XG4gICAgdGhpcy50aW1lID0gX3ZhbHVlLnRpbWU7XG4gICAgdGhpcy5mcm9tID0gX3ZhbHVlLmZyb21cbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkKF92YWx1ZS5mcm9tKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy50byA9IF92YWx1ZS50byA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZChfdmFsdWUudG8pIDogdW5kZWZpbmVkO1xuICAgIHRoaXMubWVzc2FnZVR5cGUgPSBfdmFsdWUubWVzc2FnZVR5cGU7XG4gICAgdGhpcy50ZXh0ID0gX3ZhbHVlLnRleHQ7XG4gICAgdGhpcy50aHVtYm5haWxSZWZlcmVuY2UgPSBfdmFsdWUudGh1bWJuYWlsUmVmZXJlbmNlXG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAxLkZpbGUoX3ZhbHVlLnRodW1ibmFpbFJlZmVyZW5jZSlcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuaXNMb2NhbE1lc3NhZ2UgPSBfdmFsdWUuaXNMb2NhbE1lc3NhZ2U7XG4gICAgTWVzc2FnZUJyaWVmLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgcGFja2V0SWQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcGFja2V0SWQ7XG4gIH1cbiAgc2V0IHBhY2tldElkKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9wYWNrZXRJZCA9IHZhbHVlO1xuICB9XG4gIGdldCBpZCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9pZDtcbiAgfVxuICBzZXQgaWQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHRpbWUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdGltZTtcbiAgfVxuICBzZXQgdGltZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdGltZSA9IHZhbHVlO1xuICB9XG4gIGdldCBmcm9tKCk6IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZnJvbTtcbiAgfVxuICBzZXQgZnJvbSh2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9mcm9tID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHRvKCk6IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdG87XG4gIH1cbiAgc2V0IHRvKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZCB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3RvID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG1lc3NhZ2VUeXBlKCk6IE1lc3NhZ2VCcmllZi5NZXNzYWdlVHlwZXMgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9tZXNzYWdlVHlwZTtcbiAgfVxuICBzZXQgbWVzc2FnZVR5cGUodmFsdWU6IE1lc3NhZ2VCcmllZi5NZXNzYWdlVHlwZXMgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9tZXNzYWdlVHlwZSA9IHZhbHVlO1xuICB9XG4gIGdldCB0ZXh0KCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3RleHQ7XG4gIH1cbiAgc2V0IHRleHQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3RleHQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdGh1bWJuYWlsUmVmZXJlbmNlKCk6IHByb3RvUHViVjFNb2RlbHMwMDEuRmlsZSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3RodW1ibmFpbFJlZmVyZW5jZTtcbiAgfVxuICBzZXQgdGh1bWJuYWlsUmVmZXJlbmNlKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDAxLkZpbGUgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl90aHVtYm5haWxSZWZlcmVuY2UgPSB2YWx1ZTtcbiAgfVxuICBnZXQgaXNMb2NhbE1lc3NhZ2UoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2lzTG9jYWxNZXNzYWdlO1xuICB9XG4gIHNldCBpc0xvY2FsTWVzc2FnZSh2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2lzTG9jYWxNZXNzYWdlID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgTWVzc2FnZUJyaWVmLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IE1lc3NhZ2VCcmllZi5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhY2tldElkOiB0aGlzLnBhY2tldElkLFxuICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICB0aW1lOiB0aGlzLnRpbWUsXG4gICAgICBmcm9tOiB0aGlzLmZyb20gPyB0aGlzLmZyb20udG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIHRvOiB0aGlzLnRvID8gdGhpcy50by50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgbWVzc2FnZVR5cGU6IHRoaXMubWVzc2FnZVR5cGUsXG4gICAgICB0ZXh0OiB0aGlzLnRleHQsXG4gICAgICB0aHVtYm5haWxSZWZlcmVuY2U6IHRoaXMudGh1bWJuYWlsUmVmZXJlbmNlXG4gICAgICAgID8gdGhpcy50aHVtYm5haWxSZWZlcmVuY2UudG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIGlzTG9jYWxNZXNzYWdlOiB0aGlzLmlzTG9jYWxNZXNzYWdlXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogTWVzc2FnZUJyaWVmLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFja2V0SWQ6IHRoaXMucGFja2V0SWQsXG4gICAgICBpZDogdGhpcy5pZCxcbiAgICAgIHRpbWU6IHRoaXMudGltZSxcbiAgICAgIGZyb206IHRoaXMuZnJvbSA/IHRoaXMuZnJvbS50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICB0bzogdGhpcy50byA/IHRoaXMudG8udG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgbWVzc2FnZVR5cGU6XG4gICAgICAgIE1lc3NhZ2VCcmllZi5NZXNzYWdlVHlwZXNbXG4gICAgICAgICAgdGhpcy5tZXNzYWdlVHlwZSA9PT0gbnVsbCB8fCB0aGlzLm1lc3NhZ2VUeXBlID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgOiB0aGlzLm1lc3NhZ2VUeXBlXG4gICAgICAgIF0sXG4gICAgICB0ZXh0OiB0aGlzLnRleHQsXG4gICAgICB0aHVtYm5haWxSZWZlcmVuY2U6IHRoaXMudGh1bWJuYWlsUmVmZXJlbmNlXG4gICAgICAgID8gdGhpcy50aHVtYm5haWxSZWZlcmVuY2UudG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsLFxuICAgICAgaXNMb2NhbE1lc3NhZ2U6IHRoaXMuaXNMb2NhbE1lc3NhZ2VcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIE1lc3NhZ2VCcmllZiB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgTWVzc2FnZUJyaWVmXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBwYWNrZXRJZD86IHN0cmluZztcbiAgICBpZD86IHN0cmluZztcbiAgICB0aW1lPzogc3RyaW5nO1xuICAgIGZyb20/OiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5Bc09iamVjdDtcbiAgICB0bz86IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLkFzT2JqZWN0O1xuICAgIG1lc3NhZ2VUeXBlPzogTWVzc2FnZUJyaWVmLk1lc3NhZ2VUeXBlcztcbiAgICB0ZXh0Pzogc3RyaW5nO1xuICAgIHRodW1ibmFpbFJlZmVyZW5jZT86IHByb3RvUHViVjFNb2RlbHMwMDEuRmlsZS5Bc09iamVjdDtcbiAgICBpc0xvY2FsTWVzc2FnZT86IGJvb2xlYW47XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgTWVzc2FnZUJyaWVmXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBwYWNrZXRJZD86IHN0cmluZztcbiAgICBpZD86IHN0cmluZztcbiAgICB0aW1lPzogc3RyaW5nO1xuICAgIGZyb20/OiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgdG8/OiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgbWVzc2FnZVR5cGU/OiBzdHJpbmc7XG4gICAgdGV4dD86IHN0cmluZztcbiAgICB0aHVtYm5haWxSZWZlcmVuY2U/OiBwcm90b1B1YlYxTW9kZWxzMDAxLkZpbGUuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIGlzTG9jYWxNZXNzYWdlPzogYm9vbGVhbjtcbiAgfVxuICBleHBvcnQgZW51bSBNZXNzYWdlVHlwZXMge1xuICAgIE5PVF9TRVQgPSAwLFxuICAgIFRFWFQgPSAxLFxuICAgIEZJTEUgPSAyLFxuICAgIFNUSUNLRVIgPSAzLFxuICAgIExPQ0FUSU9OID0gNCxcbiAgICBMSVZFX0xPQ0FUSU9OID0gNSxcbiAgICBQT0xMID0gNixcbiAgICBUUkFOU0FDVElPTiA9IDcsXG4gICAgRk9STSA9IDgsXG4gICAgQlVUVE9OUyA9IDksXG4gICAgU0hBUkVfVUlEID0gMTAsXG4gICAgRk9STV9SRVNVTFQgPSAxMSxcbiAgICBDQUxMX0VORCA9IDEyLFxuICAgIENBTExfQlVTWSA9IDEzLFxuICAgIENBTExfREVDTElORUQgPSAxNCxcbiAgICBUQUJMRSA9IDE1LFxuICAgIFBFX0FTX05FV19DT05UQUNUX0FEREVEID0gMTYsXG4gICAgUEVfQlNfQk9UX05PVF9SRVNQT05ESU5HID0gMTcsXG4gICAgUEVfTVNfS0lDS19VU0VSID0gMTgsXG4gICAgUEVfTVNfQUREX1VTRVIgPSAxOSxcbiAgICBQRV9NU19QSU5fTUVTU0FHRSA9IDIwLFxuICAgIFBFX01TX05BTUVfQ0hBTkdFRCA9IDIxLFxuICAgIFBFX01TX0FWQVRBUl9DSEFOR0VEID0gMjIsXG4gICAgUEVfTVNfTVVDX0NSRUFURUQgPSAyMyxcbiAgICBQRV9NU19MRUFWRV9VU0VSID0gMjQsXG4gICAgUEVfTVNfSk9JTkVEX1VTRVIgPSAyNSxcbiAgICBQRV9NU19ERUxFVEVEID0gMjYsXG4gICAgUERUX1BIT05FX05VTUJFUiA9IDI3LFxuICAgIFBEVF9VU0VSTkFNRSA9IDI4LFxuICAgIFBEVF9FTUFJTCA9IDI5LFxuICAgIFBEVF9OQU1FID0gMzAsXG4gICAgUEFZTUVOVF9JTkZPUk1BVElPTiA9IDMxLFxuICAgIFNFQVJDSF9BQkxFID0gMzJcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIHByb3RvLnB1Yi52MS5tb2RlbHMuTWVzc2FnZVxuICovXG5leHBvcnQgY2xhc3MgTWVzc2FnZSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ3Byb3RvLnB1Yi52MS5tb2RlbHMuTWVzc2FnZSc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IE1lc3NhZ2UoKTtcbiAgICBNZXNzYWdlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogTWVzc2FnZSkge1xuICAgIF9pbnN0YW5jZS5wYWNrZXRJZCA9IF9pbnN0YW5jZS5wYWNrZXRJZCB8fCAnJztcbiAgICBfaW5zdGFuY2UuaWQgPSBfaW5zdGFuY2UuaWQgfHwgJzAnO1xuICAgIF9pbnN0YW5jZS50aW1lID0gX2luc3RhbmNlLnRpbWUgfHwgJzAnO1xuICAgIF9pbnN0YW5jZS5mcm9tID0gX2luc3RhbmNlLmZyb20gfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS50byA9IF9pbnN0YW5jZS50byB8fCB1bmRlZmluZWQ7XG4gICAgX2luc3RhbmNlLnJlcGx5VG9JZCA9IF9pbnN0YW5jZS5yZXBseVRvSWQgfHwgJzAnO1xuICAgIF9pbnN0YW5jZS5yZXBsaWVkTWVzc2FnZUJyaWVmID0gX2luc3RhbmNlLnJlcGxpZWRNZXNzYWdlQnJpZWYgfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5mb3J3YXJkRnJvbSA9IF9pbnN0YW5jZS5mb3J3YXJkRnJvbSB8fCB1bmRlZmluZWQ7XG4gICAgX2luc3RhbmNlLmdlbmVyYXRlZEJ5ID0gX2luc3RhbmNlLmdlbmVyYXRlZEJ5IHx8IHVuZGVmaW5lZDtcbiAgICBfaW5zdGFuY2UuZWRpdGVkID0gX2luc3RhbmNlLmVkaXRlZCB8fCBmYWxzZTtcbiAgICBfaW5zdGFuY2UuZW5jcnlwdGVkID0gX2luc3RhbmNlLmVuY3J5cHRlZCB8fCBmYWxzZTtcbiAgICBfaW5zdGFuY2UudHRsID0gX2luc3RhbmNlLnR0bCB8fCAwO1xuICAgIF9pbnN0YW5jZS50aHJlYWQgPSBfaW5zdGFuY2UudGhyZWFkIHx8ICcwJztcbiAgICBfaW5zdGFuY2Uuc2hvdWxkQmVRdWlldCA9IF9pbnN0YW5jZS5zaG91bGRCZVF1aWV0IHx8IGZhbHNlO1xuICAgIF9pbnN0YW5jZS5tdWNNaW5pbXVtQWNjZXNzTGV2ZWwgPSBfaW5zdGFuY2UubXVjTWluaW11bUFjY2Vzc0xldmVsIHx8IDA7XG4gICAgX2luc3RhbmNlLnNwZWNpYWxUYXJnZXQgPSBfaW5zdGFuY2Uuc3BlY2lhbFRhcmdldCB8fCB1bmRlZmluZWQ7XG4gICAgX2luc3RhbmNlLm1lc3NhZ2VNYXJrdXAgPSBfaW5zdGFuY2UubWVzc2FnZU1hcmt1cCB8fCB1bmRlZmluZWQ7XG4gICAgX2luc3RhbmNlLmlzTG9jYWxNZXNzYWdlID0gX2luc3RhbmNlLmlzTG9jYWxNZXNzYWdlIHx8IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogTWVzc2FnZSxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UucGFja2V0SWQgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5pZCA9IF9yZWFkZXIucmVhZEludDY0U3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBfaW5zdGFuY2UudGltZSA9IF9yZWFkZXIucmVhZEludDY0U3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBfaW5zdGFuY2UuZnJvbSA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuZnJvbSxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICBfaW5zdGFuY2UudG8gPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLnRvLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA3OlxuICAgICAgICAgIF9pbnN0YW5jZS5yZXBseVRvSWQgPSBfcmVhZGVyLnJlYWRJbnQ2NFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDMwOlxuICAgICAgICAgIF9pbnN0YW5jZS5yZXBsaWVkTWVzc2FnZUJyaWVmID0gbmV3IE1lc3NhZ2VCcmllZigpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UucmVwbGllZE1lc3NhZ2VCcmllZixcbiAgICAgICAgICAgIE1lc3NhZ2VCcmllZi5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgX2luc3RhbmNlLmZvcndhcmRGcm9tID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5mb3J3YXJkRnJvbSxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzM6XG4gICAgICAgICAgX2luc3RhbmNlLmdlbmVyYXRlZEJ5ID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5nZW5lcmF0ZWRCeSxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgOTpcbiAgICAgICAgICBfaW5zdGFuY2UuZWRpdGVkID0gX3JlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgIF9pbnN0YW5jZS5lbmNyeXB0ZWQgPSBfcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjM6XG4gICAgICAgICAgX2luc3RhbmNlLnR0bCA9IF9yZWFkZXIucmVhZEludDMyKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjg6XG4gICAgICAgICAgX2luc3RhbmNlLnRocmVhZCA9IF9yZWFkZXIucmVhZEludDY0U3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjk6XG4gICAgICAgICAgX2luc3RhbmNlLnNob3VsZEJlUXVpZXQgPSBfcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjQ6XG4gICAgICAgICAgX2luc3RhbmNlLm11Y01pbmltdW1BY2Nlc3NMZXZlbCA9IF9yZWFkZXIucmVhZEVudW0oKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyNTpcbiAgICAgICAgICBfaW5zdGFuY2Uuc3BlY2lhbFRhcmdldCA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2Uuc3BlY2lhbFRhcmdldCxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzQ6XG4gICAgICAgICAgX2luc3RhbmNlLm1lc3NhZ2VNYXJrdXAgPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAxNC5NZXNzYWdlTWFya3VwKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5tZXNzYWdlTWFya3VwLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxNC5NZXNzYWdlTWFya3VwLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgX2luc3RhbmNlLmlzTG9jYWxNZXNzYWdlID0gX3JlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDExOlxuICAgICAgICAgIF9pbnN0YW5jZS50ZXh0ID0gbmV3IFRleHQoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKF9pbnN0YW5jZS50ZXh0LCBUZXh0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgX2luc3RhbmNlLmZpbGUgPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMS5GaWxlKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5maWxlLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMS5GaWxlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgX2luc3RhbmNlLnN0aWNrZXIgPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAwNS5TdGlja2VyKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5zdGlja2VyLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwNS5TdGlja2VyLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTQ6XG4gICAgICAgICAgX2luc3RhbmNlLmxvY2F0aW9uID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDYuTG9jYXRpb24oKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmxvY2F0aW9uLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwNi5Mb2NhdGlvbi5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE1OlxuICAgICAgICAgIF9pbnN0YW5jZS5saXZlTG9jYXRpb24gPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAwNi5MaXZlTG9jYXRpb24oKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmxpdmVMb2NhdGlvbixcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDYuTGl2ZUxvY2F0aW9uLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTY6XG4gICAgICAgICAgX2luc3RhbmNlLnBvbGwgPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAxMS5Qb2xsKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5wb2xsLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxMS5Qb2xsLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTc6XG4gICAgICAgICAgX2luc3RhbmNlLnRyYW5zYWN0aW9uID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDcuVHJhbnNhY3Rpb24oKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLnRyYW5zYWN0aW9uLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwNy5UcmFuc2FjdGlvbi5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE4OlxuICAgICAgICAgIF9pbnN0YW5jZS5mb3JtID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMTAuRm9ybSgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuZm9ybSxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMTAuRm9ybS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE5OlxuICAgICAgICAgIF9pbnN0YW5jZS5wZXJzaXN0RXZlbnQgPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAwOC5QZXJzaXN0ZW50RXZlbnQoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLnBlcnNpc3RFdmVudCxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDguUGVyc2lzdGVudEV2ZW50LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjA6XG4gICAgICAgICAgX2luc3RhbmNlLmJ1dHRvbnMgPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAxMC5CdXR0b25zKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5idXR0b25zLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxMC5CdXR0b25zLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjE6XG4gICAgICAgICAgX2luc3RhbmNlLnNoYXJlVWlkID0gbmV3IFNoYXJlVWlkKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5zaGFyZVVpZCxcbiAgICAgICAgICAgIFNoYXJlVWlkLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjI6XG4gICAgICAgICAgX2luc3RhbmNlLmZvcm1SZXN1bHQgPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAxMC5Gb3JtUmVzdWx0KCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5mb3JtUmVzdWx0LFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxMC5Gb3JtUmVzdWx0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjY6XG4gICAgICAgICAgX2luc3RhbmNlLnNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0ID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDkuU2hhcmVQcml2YXRlRGF0YVJlcXVlc3QoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLnNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0LFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwOS5TaGFyZVByaXZhdGVEYXRhUmVxdWVzdFxuICAgICAgICAgICAgICAuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyNzpcbiAgICAgICAgICBfaW5zdGFuY2Uuc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UgPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAwOS5TaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZSgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2Uuc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UsXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDA5LlNoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlXG4gICAgICAgICAgICAgIC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDMxOlxuICAgICAgICAgIF9pbnN0YW5jZS5jYWxsRXZlbnQgPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAxMy5DYWxsRXZlbnQoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmNhbGxFdmVudCxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMTMuQ2FsbEV2ZW50LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzY6XG4gICAgICAgICAgX2luc3RhbmNlLmNhbGxMb2cgPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAxMy5DYWxsTG9nKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5jYWxsTG9nLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxMy5DYWxsTG9nLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzI6XG4gICAgICAgICAgX2luc3RhbmNlLnRhYmxlID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMTAuVGFibGUoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLnRhYmxlLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxMC5UYWJsZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM1OlxuICAgICAgICAgIF9pbnN0YW5jZS5wYXltZW50SW5mb3JtYXRpb24gPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAwNy5QYXltZW50SW5mb3JtYXRpb24oKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLnBheW1lbnRJbmZvcm1hdGlvbixcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDcuUGF5bWVudEluZm9ybWF0aW9uLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBNZXNzYWdlLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKF9pbnN0YW5jZTogTWVzc2FnZSwgX3dyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5wYWNrZXRJZCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2UucGFja2V0SWQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmlkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlSW50NjRTdHJpbmcoMiwgX2luc3RhbmNlLmlkKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS50aW1lKSB7XG4gICAgICBfd3JpdGVyLndyaXRlSW50NjRTdHJpbmcoNCwgX2luc3RhbmNlLnRpbWUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmZyb20pIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA1LFxuICAgICAgICBfaW5zdGFuY2UuZnJvbSBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnRvKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgNixcbiAgICAgICAgX2luc3RhbmNlLnRvIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UucmVwbHlUb0lkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlSW50NjRTdHJpbmcoNywgX2luc3RhbmNlLnJlcGx5VG9JZCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UucmVwbGllZE1lc3NhZ2VCcmllZikge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDMwLFxuICAgICAgICBfaW5zdGFuY2UucmVwbGllZE1lc3NhZ2VCcmllZiBhcyBhbnksXG4gICAgICAgIE1lc3NhZ2VCcmllZi5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5mb3J3YXJkRnJvbSkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDgsXG4gICAgICAgIF9pbnN0YW5jZS5mb3J3YXJkRnJvbSBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmdlbmVyYXRlZEJ5KSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMzMsXG4gICAgICAgIF9pbnN0YW5jZS5nZW5lcmF0ZWRCeSBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmVkaXRlZCkge1xuICAgICAgX3dyaXRlci53cml0ZUJvb2woOSwgX2luc3RhbmNlLmVkaXRlZCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZW5jcnlwdGVkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlQm9vbCgxMCwgX2luc3RhbmNlLmVuY3J5cHRlZCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UudHRsKSB7XG4gICAgICBfd3JpdGVyLndyaXRlSW50MzIoMjMsIF9pbnN0YW5jZS50dGwpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnRocmVhZCkge1xuICAgICAgX3dyaXRlci53cml0ZUludDY0U3RyaW5nKDI4LCBfaW5zdGFuY2UudGhyZWFkKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5zaG91bGRCZVF1aWV0KSB7XG4gICAgICBfd3JpdGVyLndyaXRlQm9vbCgyOSwgX2luc3RhbmNlLnNob3VsZEJlUXVpZXQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLm11Y01pbmltdW1BY2Nlc3NMZXZlbCkge1xuICAgICAgX3dyaXRlci53cml0ZUVudW0oMjQsIF9pbnN0YW5jZS5tdWNNaW5pbXVtQWNjZXNzTGV2ZWwpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnNwZWNpYWxUYXJnZXQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAyNSxcbiAgICAgICAgX2luc3RhbmNlLnNwZWNpYWxUYXJnZXQgYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5tZXNzYWdlTWFya3VwKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMzQsXG4gICAgICAgIF9pbnN0YW5jZS5tZXNzYWdlTWFya3VwIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxNC5NZXNzYWdlTWFya3VwLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmlzTG9jYWxNZXNzYWdlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlQm9vbCgzNywgX2luc3RhbmNlLmlzTG9jYWxNZXNzYWdlKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS50ZXh0KSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMTEsXG4gICAgICAgIF9pbnN0YW5jZS50ZXh0IGFzIGFueSxcbiAgICAgICAgVGV4dC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5maWxlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMTIsXG4gICAgICAgIF9pbnN0YW5jZS5maWxlIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMS5GaWxlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnN0aWNrZXIpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAxMyxcbiAgICAgICAgX2luc3RhbmNlLnN0aWNrZXIgYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDA1LlN0aWNrZXIuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UubG9jYXRpb24pIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAxNCxcbiAgICAgICAgX2luc3RhbmNlLmxvY2F0aW9uIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwNi5Mb2NhdGlvbi5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5saXZlTG9jYXRpb24pIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAxNSxcbiAgICAgICAgX2luc3RhbmNlLmxpdmVMb2NhdGlvbiBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDYuTGl2ZUxvY2F0aW9uLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnBvbGwpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAxNixcbiAgICAgICAgX2luc3RhbmNlLnBvbGwgYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDExLlBvbGwuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UudHJhbnNhY3Rpb24pIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAxNyxcbiAgICAgICAgX2luc3RhbmNlLnRyYW5zYWN0aW9uIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwNy5UcmFuc2FjdGlvbi5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5mb3JtKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMTgsXG4gICAgICAgIF9pbnN0YW5jZS5mb3JtIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxMC5Gb3JtLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnBlcnNpc3RFdmVudCkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDE5LFxuICAgICAgICBfaW5zdGFuY2UucGVyc2lzdEV2ZW50IGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwOC5QZXJzaXN0ZW50RXZlbnQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuYnV0dG9ucykge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDIwLFxuICAgICAgICBfaW5zdGFuY2UuYnV0dG9ucyBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMTAuQnV0dG9ucy5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5zaGFyZVVpZCkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDIxLFxuICAgICAgICBfaW5zdGFuY2Uuc2hhcmVVaWQgYXMgYW55LFxuICAgICAgICBTaGFyZVVpZC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5mb3JtUmVzdWx0KSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMjIsXG4gICAgICAgIF9pbnN0YW5jZS5mb3JtUmVzdWx0IGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxMC5Gb3JtUmVzdWx0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0KSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMjYsXG4gICAgICAgIF9pbnN0YW5jZS5zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDkuU2hhcmVQcml2YXRlRGF0YVJlcXVlc3Quc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uuc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAyNyxcbiAgICAgICAgX2luc3RhbmNlLnNoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwOS5TaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5jYWxsRXZlbnQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAzMSxcbiAgICAgICAgX2luc3RhbmNlLmNhbGxFdmVudCBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMTMuQ2FsbEV2ZW50LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmNhbGxMb2cpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAzNixcbiAgICAgICAgX2luc3RhbmNlLmNhbGxMb2cgYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDEzLkNhbGxMb2cuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UudGFibGUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAzMixcbiAgICAgICAgX2luc3RhbmNlLnRhYmxlIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxMC5UYWJsZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5wYXltZW50SW5mb3JtYXRpb24pIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAzNSxcbiAgICAgICAgX2luc3RhbmNlLnBheW1lbnRJbmZvcm1hdGlvbiBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDcuUGF5bWVudEluZm9ybWF0aW9uLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3BhY2tldElkPzogc3RyaW5nO1xuICBwcml2YXRlIF9pZD86IHN0cmluZztcbiAgcHJpdmF0ZSBfdGltZT86IHN0cmluZztcbiAgcHJpdmF0ZSBfZnJvbT86IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkO1xuICBwcml2YXRlIF90bz86IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkO1xuICBwcml2YXRlIF9yZXBseVRvSWQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3JlcGxpZWRNZXNzYWdlQnJpZWY/OiBNZXNzYWdlQnJpZWY7XG4gIHByaXZhdGUgX2ZvcndhcmRGcm9tPzogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQ7XG4gIHByaXZhdGUgX2dlbmVyYXRlZEJ5PzogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQ7XG4gIHByaXZhdGUgX2VkaXRlZD86IGJvb2xlYW47XG4gIHByaXZhdGUgX2VuY3J5cHRlZD86IGJvb2xlYW47XG4gIHByaXZhdGUgX3R0bD86IG51bWJlcjtcbiAgcHJpdmF0ZSBfdGhyZWFkPzogc3RyaW5nO1xuICBwcml2YXRlIF9zaG91bGRCZVF1aWV0PzogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfbXVjTWluaW11bUFjY2Vzc0xldmVsPzogcHJvdG9QdWJWMU1vZGVsczAxMi5Sb2xlO1xuICBwcml2YXRlIF9zcGVjaWFsVGFyZ2V0PzogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQ7XG4gIHByaXZhdGUgX21lc3NhZ2VNYXJrdXA/OiBwcm90b1B1YlYxTW9kZWxzMDE0Lk1lc3NhZ2VNYXJrdXA7XG4gIHByaXZhdGUgX2lzTG9jYWxNZXNzYWdlPzogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfdGV4dD86IFRleHQ7XG4gIHByaXZhdGUgX2ZpbGU/OiBwcm90b1B1YlYxTW9kZWxzMDAxLkZpbGU7XG4gIHByaXZhdGUgX3N0aWNrZXI/OiBwcm90b1B1YlYxTW9kZWxzMDA1LlN0aWNrZXI7XG4gIHByaXZhdGUgX2xvY2F0aW9uPzogcHJvdG9QdWJWMU1vZGVsczAwNi5Mb2NhdGlvbjtcbiAgcHJpdmF0ZSBfbGl2ZUxvY2F0aW9uPzogcHJvdG9QdWJWMU1vZGVsczAwNi5MaXZlTG9jYXRpb247XG4gIHByaXZhdGUgX3BvbGw/OiBwcm90b1B1YlYxTW9kZWxzMDExLlBvbGw7XG4gIHByaXZhdGUgX3RyYW5zYWN0aW9uPzogcHJvdG9QdWJWMU1vZGVsczAwNy5UcmFuc2FjdGlvbjtcbiAgcHJpdmF0ZSBfZm9ybT86IHByb3RvUHViVjFNb2RlbHMwMTAuRm9ybTtcbiAgcHJpdmF0ZSBfcGVyc2lzdEV2ZW50PzogcHJvdG9QdWJWMU1vZGVsczAwOC5QZXJzaXN0ZW50RXZlbnQ7XG4gIHByaXZhdGUgX2J1dHRvbnM/OiBwcm90b1B1YlYxTW9kZWxzMDEwLkJ1dHRvbnM7XG4gIHByaXZhdGUgX3NoYXJlVWlkPzogU2hhcmVVaWQ7XG4gIHByaXZhdGUgX2Zvcm1SZXN1bHQ/OiBwcm90b1B1YlYxTW9kZWxzMDEwLkZvcm1SZXN1bHQ7XG4gIHByaXZhdGUgX3NoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0PzogcHJvdG9QdWJWMU1vZGVsczAwOS5TaGFyZVByaXZhdGVEYXRhUmVxdWVzdDtcbiAgcHJpdmF0ZSBfc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2U/OiBwcm90b1B1YlYxTW9kZWxzMDA5LlNoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlO1xuICBwcml2YXRlIF9jYWxsRXZlbnQ/OiBwcm90b1B1YlYxTW9kZWxzMDEzLkNhbGxFdmVudDtcbiAgcHJpdmF0ZSBfY2FsbExvZz86IHByb3RvUHViVjFNb2RlbHMwMTMuQ2FsbExvZztcbiAgcHJpdmF0ZSBfdGFibGU/OiBwcm90b1B1YlYxTW9kZWxzMDEwLlRhYmxlO1xuICBwcml2YXRlIF9wYXltZW50SW5mb3JtYXRpb24/OiBwcm90b1B1YlYxTW9kZWxzMDA3LlBheW1lbnRJbmZvcm1hdGlvbjtcblxuICBwcml2YXRlIF90eXBlOiBNZXNzYWdlLlR5cGVDYXNlID0gTWVzc2FnZS5UeXBlQ2FzZS5ub25lO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgTWVzc2FnZSB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxNZXNzYWdlLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnBhY2tldElkID0gX3ZhbHVlLnBhY2tldElkO1xuICAgIHRoaXMuaWQgPSBfdmFsdWUuaWQ7XG4gICAgdGhpcy50aW1lID0gX3ZhbHVlLnRpbWU7XG4gICAgdGhpcy5mcm9tID0gX3ZhbHVlLmZyb21cbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkKF92YWx1ZS5mcm9tKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy50byA9IF92YWx1ZS50byA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZChfdmFsdWUudG8pIDogdW5kZWZpbmVkO1xuICAgIHRoaXMucmVwbHlUb0lkID0gX3ZhbHVlLnJlcGx5VG9JZDtcbiAgICB0aGlzLnJlcGxpZWRNZXNzYWdlQnJpZWYgPSBfdmFsdWUucmVwbGllZE1lc3NhZ2VCcmllZlxuICAgICAgPyBuZXcgTWVzc2FnZUJyaWVmKF92YWx1ZS5yZXBsaWVkTWVzc2FnZUJyaWVmKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5mb3J3YXJkRnJvbSA9IF92YWx1ZS5mb3J3YXJkRnJvbVxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQoX3ZhbHVlLmZvcndhcmRGcm9tKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5nZW5lcmF0ZWRCeSA9IF92YWx1ZS5nZW5lcmF0ZWRCeVxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQoX3ZhbHVlLmdlbmVyYXRlZEJ5KVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5lZGl0ZWQgPSBfdmFsdWUuZWRpdGVkO1xuICAgIHRoaXMuZW5jcnlwdGVkID0gX3ZhbHVlLmVuY3J5cHRlZDtcbiAgICB0aGlzLnR0bCA9IF92YWx1ZS50dGw7XG4gICAgdGhpcy50aHJlYWQgPSBfdmFsdWUudGhyZWFkO1xuICAgIHRoaXMuc2hvdWxkQmVRdWlldCA9IF92YWx1ZS5zaG91bGRCZVF1aWV0O1xuICAgIHRoaXMubXVjTWluaW11bUFjY2Vzc0xldmVsID0gX3ZhbHVlLm11Y01pbmltdW1BY2Nlc3NMZXZlbDtcbiAgICB0aGlzLnNwZWNpYWxUYXJnZXQgPSBfdmFsdWUuc3BlY2lhbFRhcmdldFxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQoX3ZhbHVlLnNwZWNpYWxUYXJnZXQpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1lc3NhZ2VNYXJrdXAgPSBfdmFsdWUubWVzc2FnZU1hcmt1cFxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAxNC5NZXNzYWdlTWFya3VwKF92YWx1ZS5tZXNzYWdlTWFya3VwKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5pc0xvY2FsTWVzc2FnZSA9IF92YWx1ZS5pc0xvY2FsTWVzc2FnZTtcbiAgICB0aGlzLnRleHQgPSBfdmFsdWUudGV4dCA/IG5ldyBUZXh0KF92YWx1ZS50ZXh0KSA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmZpbGUgPSBfdmFsdWUuZmlsZVxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMS5GaWxlKF92YWx1ZS5maWxlKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5zdGlja2VyID0gX3ZhbHVlLnN0aWNrZXJcbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMDUuU3RpY2tlcihfdmFsdWUuc3RpY2tlcilcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMubG9jYXRpb24gPSBfdmFsdWUubG9jYXRpb25cbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMDYuTG9jYXRpb24oX3ZhbHVlLmxvY2F0aW9uKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5saXZlTG9jYXRpb24gPSBfdmFsdWUubGl2ZUxvY2F0aW9uXG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDA2LkxpdmVMb2NhdGlvbihfdmFsdWUubGl2ZUxvY2F0aW9uKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5wb2xsID0gX3ZhbHVlLnBvbGxcbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMTEuUG9sbChfdmFsdWUucG9sbClcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMudHJhbnNhY3Rpb24gPSBfdmFsdWUudHJhbnNhY3Rpb25cbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMDcuVHJhbnNhY3Rpb24oX3ZhbHVlLnRyYW5zYWN0aW9uKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5mb3JtID0gX3ZhbHVlLmZvcm1cbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMTAuRm9ybShfdmFsdWUuZm9ybSlcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMucGVyc2lzdEV2ZW50ID0gX3ZhbHVlLnBlcnNpc3RFdmVudFxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAwOC5QZXJzaXN0ZW50RXZlbnQoX3ZhbHVlLnBlcnNpc3RFdmVudClcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuYnV0dG9ucyA9IF92YWx1ZS5idXR0b25zXG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDEwLkJ1dHRvbnMoX3ZhbHVlLmJ1dHRvbnMpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNoYXJlVWlkID0gX3ZhbHVlLnNoYXJlVWlkID8gbmV3IFNoYXJlVWlkKF92YWx1ZS5zaGFyZVVpZCkgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5mb3JtUmVzdWx0ID0gX3ZhbHVlLmZvcm1SZXN1bHRcbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMTAuRm9ybVJlc3VsdChfdmFsdWUuZm9ybVJlc3VsdClcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QgPSBfdmFsdWUuc2hhcmVQcml2YXRlRGF0YVJlcXVlc3RcbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMDkuU2hhcmVQcml2YXRlRGF0YVJlcXVlc3QoXG4gICAgICAgICAgX3ZhbHVlLnNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0XG4gICAgICAgIClcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UgPSBfdmFsdWUuc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2VcbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMDkuU2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UoXG4gICAgICAgICAgX3ZhbHVlLnNoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlXG4gICAgICAgIClcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuY2FsbEV2ZW50ID0gX3ZhbHVlLmNhbGxFdmVudFxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAxMy5DYWxsRXZlbnQoX3ZhbHVlLmNhbGxFdmVudClcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuY2FsbExvZyA9IF92YWx1ZS5jYWxsTG9nXG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDEzLkNhbGxMb2coX3ZhbHVlLmNhbGxMb2cpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnRhYmxlID0gX3ZhbHVlLnRhYmxlXG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDEwLlRhYmxlKF92YWx1ZS50YWJsZSlcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMucGF5bWVudEluZm9ybWF0aW9uID0gX3ZhbHVlLnBheW1lbnRJbmZvcm1hdGlvblxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAwNy5QYXltZW50SW5mb3JtYXRpb24oX3ZhbHVlLnBheW1lbnRJbmZvcm1hdGlvbilcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIE1lc3NhZ2UucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBwYWNrZXRJZCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wYWNrZXRJZDtcbiAgfVxuICBzZXQgcGFja2V0SWQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3BhY2tldElkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGlkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2lkO1xuICB9XG4gIHNldCBpZCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5faWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdGltZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90aW1lO1xuICB9XG4gIHNldCB0aW1lKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl90aW1lID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGZyb20oKTogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9mcm9tO1xuICB9XG4gIHNldCBmcm9tKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZCB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2Zyb20gPSB2YWx1ZTtcbiAgfVxuICBnZXQgdG8oKTogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90bztcbiAgfVxuICBzZXQgdG8odmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdG8gPSB2YWx1ZTtcbiAgfVxuICBnZXQgcmVwbHlUb0lkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcGx5VG9JZDtcbiAgfVxuICBzZXQgcmVwbHlUb0lkKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9yZXBseVRvSWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcmVwbGllZE1lc3NhZ2VCcmllZigpOiBNZXNzYWdlQnJpZWYgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9yZXBsaWVkTWVzc2FnZUJyaWVmO1xuICB9XG4gIHNldCByZXBsaWVkTWVzc2FnZUJyaWVmKHZhbHVlOiBNZXNzYWdlQnJpZWYgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9yZXBsaWVkTWVzc2FnZUJyaWVmID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGZvcndhcmRGcm9tKCk6IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZm9yd2FyZEZyb207XG4gIH1cbiAgc2V0IGZvcndhcmRGcm9tKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZCB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2ZvcndhcmRGcm9tID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGdlbmVyYXRlZEJ5KCk6IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZ2VuZXJhdGVkQnk7XG4gIH1cbiAgc2V0IGdlbmVyYXRlZEJ5KHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZCB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2dlbmVyYXRlZEJ5ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGVkaXRlZCgpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZWRpdGVkO1xuICB9XG4gIHNldCBlZGl0ZWQodmFsdWU6IGJvb2xlYW4gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9lZGl0ZWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZW5jcnlwdGVkKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9lbmNyeXB0ZWQ7XG4gIH1cbiAgc2V0IGVuY3J5cHRlZCh2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2VuY3J5cHRlZCA9IHZhbHVlO1xuICB9XG4gIGdldCB0dGwoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdHRsO1xuICB9XG4gIHNldCB0dGwodmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3R0bCA9IHZhbHVlO1xuICB9XG4gIGdldCB0aHJlYWQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdGhyZWFkO1xuICB9XG4gIHNldCB0aHJlYWQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3RocmVhZCA9IHZhbHVlO1xuICB9XG4gIGdldCBzaG91bGRCZVF1aWV0KCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zaG91bGRCZVF1aWV0O1xuICB9XG4gIHNldCBzaG91bGRCZVF1aWV0KHZhbHVlOiBib29sZWFuIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fc2hvdWxkQmVRdWlldCA9IHZhbHVlO1xuICB9XG4gIGdldCBtdWNNaW5pbXVtQWNjZXNzTGV2ZWwoKTogcHJvdG9QdWJWMU1vZGVsczAxMi5Sb2xlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbXVjTWluaW11bUFjY2Vzc0xldmVsO1xuICB9XG4gIHNldCBtdWNNaW5pbXVtQWNjZXNzTGV2ZWwodmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMTIuUm9sZSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX211Y01pbmltdW1BY2Nlc3NMZXZlbCA9IHZhbHVlO1xuICB9XG4gIGdldCBzcGVjaWFsVGFyZ2V0KCk6IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc3BlY2lhbFRhcmdldDtcbiAgfVxuICBzZXQgc3BlY2lhbFRhcmdldCh2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zcGVjaWFsVGFyZ2V0ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG1lc3NhZ2VNYXJrdXAoKTogcHJvdG9QdWJWMU1vZGVsczAxNC5NZXNzYWdlTWFya3VwIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbWVzc2FnZU1hcmt1cDtcbiAgfVxuICBzZXQgbWVzc2FnZU1hcmt1cCh2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAxNC5NZXNzYWdlTWFya3VwIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbWVzc2FnZU1hcmt1cCA9IHZhbHVlO1xuICB9XG4gIGdldCBpc0xvY2FsTWVzc2FnZSgpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5faXNMb2NhbE1lc3NhZ2U7XG4gIH1cbiAgc2V0IGlzTG9jYWxNZXNzYWdlKHZhbHVlOiBib29sZWFuIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5faXNMb2NhbE1lc3NhZ2UgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdGV4dCgpOiBUZXh0IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdGV4dDtcbiAgfVxuICBzZXQgdGV4dCh2YWx1ZTogVGV4dCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9maWxlID0gdGhpcy5fc3RpY2tlciA9IHRoaXMuX2xvY2F0aW9uID0gdGhpcy5fbGl2ZUxvY2F0aW9uID0gdGhpcy5fcG9sbCA9IHRoaXMuX3RyYW5zYWN0aW9uID0gdGhpcy5fZm9ybSA9IHRoaXMuX3BlcnNpc3RFdmVudCA9IHRoaXMuX2J1dHRvbnMgPSB0aGlzLl9zaGFyZVVpZCA9IHRoaXMuX2Zvcm1SZXN1bHQgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlID0gdGhpcy5fY2FsbEV2ZW50ID0gdGhpcy5fY2FsbExvZyA9IHRoaXMuX3RhYmxlID0gdGhpcy5fcGF5bWVudEluZm9ybWF0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IE1lc3NhZ2UuVHlwZUNhc2UudGV4dDtcbiAgICB9XG4gICAgdGhpcy5fdGV4dCA9IHZhbHVlO1xuICB9XG4gIGdldCBmaWxlKCk6IHByb3RvUHViVjFNb2RlbHMwMDEuRmlsZSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbGU7XG4gIH1cbiAgc2V0IGZpbGUodmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMDEuRmlsZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl90ZXh0ID0gdGhpcy5fc3RpY2tlciA9IHRoaXMuX2xvY2F0aW9uID0gdGhpcy5fbGl2ZUxvY2F0aW9uID0gdGhpcy5fcG9sbCA9IHRoaXMuX3RyYW5zYWN0aW9uID0gdGhpcy5fZm9ybSA9IHRoaXMuX3BlcnNpc3RFdmVudCA9IHRoaXMuX2J1dHRvbnMgPSB0aGlzLl9zaGFyZVVpZCA9IHRoaXMuX2Zvcm1SZXN1bHQgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlID0gdGhpcy5fY2FsbEV2ZW50ID0gdGhpcy5fY2FsbExvZyA9IHRoaXMuX3RhYmxlID0gdGhpcy5fcGF5bWVudEluZm9ybWF0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IE1lc3NhZ2UuVHlwZUNhc2UuZmlsZTtcbiAgICB9XG4gICAgdGhpcy5fZmlsZSA9IHZhbHVlO1xuICB9XG4gIGdldCBzdGlja2VyKCk6IHByb3RvUHViVjFNb2RlbHMwMDUuU3RpY2tlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3N0aWNrZXI7XG4gIH1cbiAgc2V0IHN0aWNrZXIodmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMDUuU3RpY2tlciB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl90ZXh0ID0gdGhpcy5fZmlsZSA9IHRoaXMuX2xvY2F0aW9uID0gdGhpcy5fbGl2ZUxvY2F0aW9uID0gdGhpcy5fcG9sbCA9IHRoaXMuX3RyYW5zYWN0aW9uID0gdGhpcy5fZm9ybSA9IHRoaXMuX3BlcnNpc3RFdmVudCA9IHRoaXMuX2J1dHRvbnMgPSB0aGlzLl9zaGFyZVVpZCA9IHRoaXMuX2Zvcm1SZXN1bHQgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlID0gdGhpcy5fY2FsbEV2ZW50ID0gdGhpcy5fY2FsbExvZyA9IHRoaXMuX3RhYmxlID0gdGhpcy5fcGF5bWVudEluZm9ybWF0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IE1lc3NhZ2UuVHlwZUNhc2Uuc3RpY2tlcjtcbiAgICB9XG4gICAgdGhpcy5fc3RpY2tlciA9IHZhbHVlO1xuICB9XG4gIGdldCBsb2NhdGlvbigpOiBwcm90b1B1YlYxTW9kZWxzMDA2LkxvY2F0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbG9jYXRpb247XG4gIH1cbiAgc2V0IGxvY2F0aW9uKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDA2LkxvY2F0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3RleHQgPSB0aGlzLl9maWxlID0gdGhpcy5fc3RpY2tlciA9IHRoaXMuX2xpdmVMb2NhdGlvbiA9IHRoaXMuX3BvbGwgPSB0aGlzLl90cmFuc2FjdGlvbiA9IHRoaXMuX2Zvcm0gPSB0aGlzLl9wZXJzaXN0RXZlbnQgPSB0aGlzLl9idXR0b25zID0gdGhpcy5fc2hhcmVVaWQgPSB0aGlzLl9mb3JtUmVzdWx0ID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZSA9IHRoaXMuX2NhbGxFdmVudCA9IHRoaXMuX2NhbGxMb2cgPSB0aGlzLl90YWJsZSA9IHRoaXMuX3BheW1lbnRJbmZvcm1hdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBNZXNzYWdlLlR5cGVDYXNlLmxvY2F0aW9uO1xuICAgIH1cbiAgICB0aGlzLl9sb2NhdGlvbiA9IHZhbHVlO1xuICB9XG4gIGdldCBsaXZlTG9jYXRpb24oKTogcHJvdG9QdWJWMU1vZGVsczAwNi5MaXZlTG9jYXRpb24gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9saXZlTG9jYXRpb247XG4gIH1cbiAgc2V0IGxpdmVMb2NhdGlvbih2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAwNi5MaXZlTG9jYXRpb24gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fdGV4dCA9IHRoaXMuX2ZpbGUgPSB0aGlzLl9zdGlja2VyID0gdGhpcy5fbG9jYXRpb24gPSB0aGlzLl9wb2xsID0gdGhpcy5fdHJhbnNhY3Rpb24gPSB0aGlzLl9mb3JtID0gdGhpcy5fcGVyc2lzdEV2ZW50ID0gdGhpcy5fYnV0dG9ucyA9IHRoaXMuX3NoYXJlVWlkID0gdGhpcy5fZm9ybVJlc3VsdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0ID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UgPSB0aGlzLl9jYWxsRXZlbnQgPSB0aGlzLl9jYWxsTG9nID0gdGhpcy5fdGFibGUgPSB0aGlzLl9wYXltZW50SW5mb3JtYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gTWVzc2FnZS5UeXBlQ2FzZS5saXZlTG9jYXRpb247XG4gICAgfVxuICAgIHRoaXMuX2xpdmVMb2NhdGlvbiA9IHZhbHVlO1xuICB9XG4gIGdldCBwb2xsKCk6IHByb3RvUHViVjFNb2RlbHMwMTEuUG9sbCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3BvbGw7XG4gIH1cbiAgc2V0IHBvbGwodmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMTEuUG9sbCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl90ZXh0ID0gdGhpcy5fZmlsZSA9IHRoaXMuX3N0aWNrZXIgPSB0aGlzLl9sb2NhdGlvbiA9IHRoaXMuX2xpdmVMb2NhdGlvbiA9IHRoaXMuX3RyYW5zYWN0aW9uID0gdGhpcy5fZm9ybSA9IHRoaXMuX3BlcnNpc3RFdmVudCA9IHRoaXMuX2J1dHRvbnMgPSB0aGlzLl9zaGFyZVVpZCA9IHRoaXMuX2Zvcm1SZXN1bHQgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlID0gdGhpcy5fY2FsbEV2ZW50ID0gdGhpcy5fY2FsbExvZyA9IHRoaXMuX3RhYmxlID0gdGhpcy5fcGF5bWVudEluZm9ybWF0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IE1lc3NhZ2UuVHlwZUNhc2UucG9sbDtcbiAgICB9XG4gICAgdGhpcy5fcG9sbCA9IHZhbHVlO1xuICB9XG4gIGdldCB0cmFuc2FjdGlvbigpOiBwcm90b1B1YlYxTW9kZWxzMDA3LlRyYW5zYWN0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdHJhbnNhY3Rpb247XG4gIH1cbiAgc2V0IHRyYW5zYWN0aW9uKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDA3LlRyYW5zYWN0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3RleHQgPSB0aGlzLl9maWxlID0gdGhpcy5fc3RpY2tlciA9IHRoaXMuX2xvY2F0aW9uID0gdGhpcy5fbGl2ZUxvY2F0aW9uID0gdGhpcy5fcG9sbCA9IHRoaXMuX2Zvcm0gPSB0aGlzLl9wZXJzaXN0RXZlbnQgPSB0aGlzLl9idXR0b25zID0gdGhpcy5fc2hhcmVVaWQgPSB0aGlzLl9mb3JtUmVzdWx0ID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZSA9IHRoaXMuX2NhbGxFdmVudCA9IHRoaXMuX2NhbGxMb2cgPSB0aGlzLl90YWJsZSA9IHRoaXMuX3BheW1lbnRJbmZvcm1hdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBNZXNzYWdlLlR5cGVDYXNlLnRyYW5zYWN0aW9uO1xuICAgIH1cbiAgICB0aGlzLl90cmFuc2FjdGlvbiA9IHZhbHVlO1xuICB9XG4gIGdldCBmb3JtKCk6IHByb3RvUHViVjFNb2RlbHMwMTAuRm9ybSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2Zvcm07XG4gIH1cbiAgc2V0IGZvcm0odmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMTAuRm9ybSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl90ZXh0ID0gdGhpcy5fZmlsZSA9IHRoaXMuX3N0aWNrZXIgPSB0aGlzLl9sb2NhdGlvbiA9IHRoaXMuX2xpdmVMb2NhdGlvbiA9IHRoaXMuX3BvbGwgPSB0aGlzLl90cmFuc2FjdGlvbiA9IHRoaXMuX3BlcnNpc3RFdmVudCA9IHRoaXMuX2J1dHRvbnMgPSB0aGlzLl9zaGFyZVVpZCA9IHRoaXMuX2Zvcm1SZXN1bHQgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlID0gdGhpcy5fY2FsbEV2ZW50ID0gdGhpcy5fY2FsbExvZyA9IHRoaXMuX3RhYmxlID0gdGhpcy5fcGF5bWVudEluZm9ybWF0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IE1lc3NhZ2UuVHlwZUNhc2UuZm9ybTtcbiAgICB9XG4gICAgdGhpcy5fZm9ybSA9IHZhbHVlO1xuICB9XG4gIGdldCBwZXJzaXN0RXZlbnQoKTogcHJvdG9QdWJWMU1vZGVsczAwOC5QZXJzaXN0ZW50RXZlbnQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wZXJzaXN0RXZlbnQ7XG4gIH1cbiAgc2V0IHBlcnNpc3RFdmVudCh2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAwOC5QZXJzaXN0ZW50RXZlbnQgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fdGV4dCA9IHRoaXMuX2ZpbGUgPSB0aGlzLl9zdGlja2VyID0gdGhpcy5fbG9jYXRpb24gPSB0aGlzLl9saXZlTG9jYXRpb24gPSB0aGlzLl9wb2xsID0gdGhpcy5fdHJhbnNhY3Rpb24gPSB0aGlzLl9mb3JtID0gdGhpcy5fYnV0dG9ucyA9IHRoaXMuX3NoYXJlVWlkID0gdGhpcy5fZm9ybVJlc3VsdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0ID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UgPSB0aGlzLl9jYWxsRXZlbnQgPSB0aGlzLl9jYWxsTG9nID0gdGhpcy5fdGFibGUgPSB0aGlzLl9wYXltZW50SW5mb3JtYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gTWVzc2FnZS5UeXBlQ2FzZS5wZXJzaXN0RXZlbnQ7XG4gICAgfVxuICAgIHRoaXMuX3BlcnNpc3RFdmVudCA9IHZhbHVlO1xuICB9XG4gIGdldCBidXR0b25zKCk6IHByb3RvUHViVjFNb2RlbHMwMTAuQnV0dG9ucyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2J1dHRvbnM7XG4gIH1cbiAgc2V0IGJ1dHRvbnModmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMTAuQnV0dG9ucyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl90ZXh0ID0gdGhpcy5fZmlsZSA9IHRoaXMuX3N0aWNrZXIgPSB0aGlzLl9sb2NhdGlvbiA9IHRoaXMuX2xpdmVMb2NhdGlvbiA9IHRoaXMuX3BvbGwgPSB0aGlzLl90cmFuc2FjdGlvbiA9IHRoaXMuX2Zvcm0gPSB0aGlzLl9wZXJzaXN0RXZlbnQgPSB0aGlzLl9zaGFyZVVpZCA9IHRoaXMuX2Zvcm1SZXN1bHQgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlID0gdGhpcy5fY2FsbEV2ZW50ID0gdGhpcy5fY2FsbExvZyA9IHRoaXMuX3RhYmxlID0gdGhpcy5fcGF5bWVudEluZm9ybWF0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IE1lc3NhZ2UuVHlwZUNhc2UuYnV0dG9ucztcbiAgICB9XG4gICAgdGhpcy5fYnV0dG9ucyA9IHZhbHVlO1xuICB9XG4gIGdldCBzaGFyZVVpZCgpOiBTaGFyZVVpZCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3NoYXJlVWlkO1xuICB9XG4gIHNldCBzaGFyZVVpZCh2YWx1ZTogU2hhcmVVaWQgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fdGV4dCA9IHRoaXMuX2ZpbGUgPSB0aGlzLl9zdGlja2VyID0gdGhpcy5fbG9jYXRpb24gPSB0aGlzLl9saXZlTG9jYXRpb24gPSB0aGlzLl9wb2xsID0gdGhpcy5fdHJhbnNhY3Rpb24gPSB0aGlzLl9mb3JtID0gdGhpcy5fcGVyc2lzdEV2ZW50ID0gdGhpcy5fYnV0dG9ucyA9IHRoaXMuX2Zvcm1SZXN1bHQgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlID0gdGhpcy5fY2FsbEV2ZW50ID0gdGhpcy5fY2FsbExvZyA9IHRoaXMuX3RhYmxlID0gdGhpcy5fcGF5bWVudEluZm9ybWF0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IE1lc3NhZ2UuVHlwZUNhc2Uuc2hhcmVVaWQ7XG4gICAgfVxuICAgIHRoaXMuX3NoYXJlVWlkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGZvcm1SZXN1bHQoKTogcHJvdG9QdWJWMU1vZGVsczAxMC5Gb3JtUmVzdWx0IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZm9ybVJlc3VsdDtcbiAgfVxuICBzZXQgZm9ybVJlc3VsdCh2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAxMC5Gb3JtUmVzdWx0IHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3RleHQgPSB0aGlzLl9maWxlID0gdGhpcy5fc3RpY2tlciA9IHRoaXMuX2xvY2F0aW9uID0gdGhpcy5fbGl2ZUxvY2F0aW9uID0gdGhpcy5fcG9sbCA9IHRoaXMuX3RyYW5zYWN0aW9uID0gdGhpcy5fZm9ybSA9IHRoaXMuX3BlcnNpc3RFdmVudCA9IHRoaXMuX2J1dHRvbnMgPSB0aGlzLl9zaGFyZVVpZCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0ID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UgPSB0aGlzLl9jYWxsRXZlbnQgPSB0aGlzLl9jYWxsTG9nID0gdGhpcy5fdGFibGUgPSB0aGlzLl9wYXltZW50SW5mb3JtYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gTWVzc2FnZS5UeXBlQ2FzZS5mb3JtUmVzdWx0O1xuICAgIH1cbiAgICB0aGlzLl9mb3JtUmVzdWx0ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0KCk6XG4gICAgfCBwcm90b1B1YlYxTW9kZWxzMDA5LlNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0XG4gICAgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zaGFyZVByaXZhdGVEYXRhUmVxdWVzdDtcbiAgfVxuICBzZXQgc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QoXG4gICAgdmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMDkuU2hhcmVQcml2YXRlRGF0YVJlcXVlc3QgfCB1bmRlZmluZWRcbiAgKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3RleHQgPSB0aGlzLl9maWxlID0gdGhpcy5fc3RpY2tlciA9IHRoaXMuX2xvY2F0aW9uID0gdGhpcy5fbGl2ZUxvY2F0aW9uID0gdGhpcy5fcG9sbCA9IHRoaXMuX3RyYW5zYWN0aW9uID0gdGhpcy5fZm9ybSA9IHRoaXMuX3BlcnNpc3RFdmVudCA9IHRoaXMuX2J1dHRvbnMgPSB0aGlzLl9zaGFyZVVpZCA9IHRoaXMuX2Zvcm1SZXN1bHQgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZSA9IHRoaXMuX2NhbGxFdmVudCA9IHRoaXMuX2NhbGxMb2cgPSB0aGlzLl90YWJsZSA9IHRoaXMuX3BheW1lbnRJbmZvcm1hdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBNZXNzYWdlLlR5cGVDYXNlLnNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0O1xuICAgIH1cbiAgICB0aGlzLl9zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCA9IHZhbHVlO1xuICB9XG4gIGdldCBzaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZSgpOlxuICAgIHwgcHJvdG9QdWJWMU1vZGVsczAwOS5TaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZVxuICAgIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2U7XG4gIH1cbiAgc2V0IHNoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlKFxuICAgIHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDA5LlNoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlIHwgdW5kZWZpbmVkXG4gICkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl90ZXh0ID0gdGhpcy5fZmlsZSA9IHRoaXMuX3N0aWNrZXIgPSB0aGlzLl9sb2NhdGlvbiA9IHRoaXMuX2xpdmVMb2NhdGlvbiA9IHRoaXMuX3BvbGwgPSB0aGlzLl90cmFuc2FjdGlvbiA9IHRoaXMuX2Zvcm0gPSB0aGlzLl9wZXJzaXN0RXZlbnQgPSB0aGlzLl9idXR0b25zID0gdGhpcy5fc2hhcmVVaWQgPSB0aGlzLl9mb3JtUmVzdWx0ID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QgPSB0aGlzLl9jYWxsRXZlbnQgPSB0aGlzLl9jYWxsTG9nID0gdGhpcy5fdGFibGUgPSB0aGlzLl9wYXltZW50SW5mb3JtYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gTWVzc2FnZS5UeXBlQ2FzZS5zaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZTtcbiAgICB9XG4gICAgdGhpcy5fc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UgPSB2YWx1ZTtcbiAgfVxuICBnZXQgY2FsbEV2ZW50KCk6IHByb3RvUHViVjFNb2RlbHMwMTMuQ2FsbEV2ZW50IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fY2FsbEV2ZW50O1xuICB9XG4gIHNldCBjYWxsRXZlbnQodmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMTMuQ2FsbEV2ZW50IHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3RleHQgPSB0aGlzLl9maWxlID0gdGhpcy5fc3RpY2tlciA9IHRoaXMuX2xvY2F0aW9uID0gdGhpcy5fbGl2ZUxvY2F0aW9uID0gdGhpcy5fcG9sbCA9IHRoaXMuX3RyYW5zYWN0aW9uID0gdGhpcy5fZm9ybSA9IHRoaXMuX3BlcnNpc3RFdmVudCA9IHRoaXMuX2J1dHRvbnMgPSB0aGlzLl9zaGFyZVVpZCA9IHRoaXMuX2Zvcm1SZXN1bHQgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlID0gdGhpcy5fY2FsbExvZyA9IHRoaXMuX3RhYmxlID0gdGhpcy5fcGF5bWVudEluZm9ybWF0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IE1lc3NhZ2UuVHlwZUNhc2UuY2FsbEV2ZW50O1xuICAgIH1cbiAgICB0aGlzLl9jYWxsRXZlbnQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgY2FsbExvZygpOiBwcm90b1B1YlYxTW9kZWxzMDEzLkNhbGxMb2cgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9jYWxsTG9nO1xuICB9XG4gIHNldCBjYWxsTG9nKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDEzLkNhbGxMb2cgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fdGV4dCA9IHRoaXMuX2ZpbGUgPSB0aGlzLl9zdGlja2VyID0gdGhpcy5fbG9jYXRpb24gPSB0aGlzLl9saXZlTG9jYXRpb24gPSB0aGlzLl9wb2xsID0gdGhpcy5fdHJhbnNhY3Rpb24gPSB0aGlzLl9mb3JtID0gdGhpcy5fcGVyc2lzdEV2ZW50ID0gdGhpcy5fYnV0dG9ucyA9IHRoaXMuX3NoYXJlVWlkID0gdGhpcy5fZm9ybVJlc3VsdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0ID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UgPSB0aGlzLl9jYWxsRXZlbnQgPSB0aGlzLl90YWJsZSA9IHRoaXMuX3BheW1lbnRJbmZvcm1hdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBNZXNzYWdlLlR5cGVDYXNlLmNhbGxMb2c7XG4gICAgfVxuICAgIHRoaXMuX2NhbGxMb2cgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdGFibGUoKTogcHJvdG9QdWJWMU1vZGVsczAxMC5UYWJsZSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3RhYmxlO1xuICB9XG4gIHNldCB0YWJsZSh2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAxMC5UYWJsZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl90ZXh0ID0gdGhpcy5fZmlsZSA9IHRoaXMuX3N0aWNrZXIgPSB0aGlzLl9sb2NhdGlvbiA9IHRoaXMuX2xpdmVMb2NhdGlvbiA9IHRoaXMuX3BvbGwgPSB0aGlzLl90cmFuc2FjdGlvbiA9IHRoaXMuX2Zvcm0gPSB0aGlzLl9wZXJzaXN0RXZlbnQgPSB0aGlzLl9idXR0b25zID0gdGhpcy5fc2hhcmVVaWQgPSB0aGlzLl9mb3JtUmVzdWx0ID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZSA9IHRoaXMuX2NhbGxFdmVudCA9IHRoaXMuX2NhbGxMb2cgPSB0aGlzLl9wYXltZW50SW5mb3JtYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gTWVzc2FnZS5UeXBlQ2FzZS50YWJsZTtcbiAgICB9XG4gICAgdGhpcy5fdGFibGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcGF5bWVudEluZm9ybWF0aW9uKCk6IHByb3RvUHViVjFNb2RlbHMwMDcuUGF5bWVudEluZm9ybWF0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcGF5bWVudEluZm9ybWF0aW9uO1xuICB9XG4gIHNldCBwYXltZW50SW5mb3JtYXRpb24oXG4gICAgdmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMDcuUGF5bWVudEluZm9ybWF0aW9uIHwgdW5kZWZpbmVkXG4gICkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl90ZXh0ID0gdGhpcy5fZmlsZSA9IHRoaXMuX3N0aWNrZXIgPSB0aGlzLl9sb2NhdGlvbiA9IHRoaXMuX2xpdmVMb2NhdGlvbiA9IHRoaXMuX3BvbGwgPSB0aGlzLl90cmFuc2FjdGlvbiA9IHRoaXMuX2Zvcm0gPSB0aGlzLl9wZXJzaXN0RXZlbnQgPSB0aGlzLl9idXR0b25zID0gdGhpcy5fc2hhcmVVaWQgPSB0aGlzLl9mb3JtUmVzdWx0ID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZSA9IHRoaXMuX2NhbGxFdmVudCA9IHRoaXMuX2NhbGxMb2cgPSB0aGlzLl90YWJsZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBNZXNzYWdlLlR5cGVDYXNlLnBheW1lbnRJbmZvcm1hdGlvbjtcbiAgICB9XG4gICAgdGhpcy5fcGF5bWVudEluZm9ybWF0aW9uID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgTWVzc2FnZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBNZXNzYWdlLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFja2V0SWQ6IHRoaXMucGFja2V0SWQsXG4gICAgICBpZDogdGhpcy5pZCxcbiAgICAgIHRpbWU6IHRoaXMudGltZSxcbiAgICAgIGZyb206IHRoaXMuZnJvbSA/IHRoaXMuZnJvbS50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgdG86IHRoaXMudG8gPyB0aGlzLnRvLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICByZXBseVRvSWQ6IHRoaXMucmVwbHlUb0lkLFxuICAgICAgcmVwbGllZE1lc3NhZ2VCcmllZjogdGhpcy5yZXBsaWVkTWVzc2FnZUJyaWVmXG4gICAgICAgID8gdGhpcy5yZXBsaWVkTWVzc2FnZUJyaWVmLnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICBmb3J3YXJkRnJvbTogdGhpcy5mb3J3YXJkRnJvbSA/IHRoaXMuZm9yd2FyZEZyb20udG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGdlbmVyYXRlZEJ5OiB0aGlzLmdlbmVyYXRlZEJ5ID8gdGhpcy5nZW5lcmF0ZWRCeS50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgZWRpdGVkOiB0aGlzLmVkaXRlZCxcbiAgICAgIGVuY3J5cHRlZDogdGhpcy5lbmNyeXB0ZWQsXG4gICAgICB0dGw6IHRoaXMudHRsLFxuICAgICAgdGhyZWFkOiB0aGlzLnRocmVhZCxcbiAgICAgIHNob3VsZEJlUXVpZXQ6IHRoaXMuc2hvdWxkQmVRdWlldCxcbiAgICAgIG11Y01pbmltdW1BY2Nlc3NMZXZlbDogdGhpcy5tdWNNaW5pbXVtQWNjZXNzTGV2ZWwsXG4gICAgICBzcGVjaWFsVGFyZ2V0OiB0aGlzLnNwZWNpYWxUYXJnZXRcbiAgICAgICAgPyB0aGlzLnNwZWNpYWxUYXJnZXQudG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIG1lc3NhZ2VNYXJrdXA6IHRoaXMubWVzc2FnZU1hcmt1cFxuICAgICAgICA/IHRoaXMubWVzc2FnZU1hcmt1cC50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgaXNMb2NhbE1lc3NhZ2U6IHRoaXMuaXNMb2NhbE1lc3NhZ2UsXG4gICAgICB0ZXh0OiB0aGlzLnRleHQgPyB0aGlzLnRleHQudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGZpbGU6IHRoaXMuZmlsZSA/IHRoaXMuZmlsZS50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgc3RpY2tlcjogdGhpcy5zdGlja2VyID8gdGhpcy5zdGlja2VyLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBsb2NhdGlvbjogdGhpcy5sb2NhdGlvbiA/IHRoaXMubG9jYXRpb24udG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGxpdmVMb2NhdGlvbjogdGhpcy5saXZlTG9jYXRpb25cbiAgICAgICAgPyB0aGlzLmxpdmVMb2NhdGlvbi50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgcG9sbDogdGhpcy5wb2xsID8gdGhpcy5wb2xsLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICB0cmFuc2FjdGlvbjogdGhpcy50cmFuc2FjdGlvbiA/IHRoaXMudHJhbnNhY3Rpb24udG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGZvcm06IHRoaXMuZm9ybSA/IHRoaXMuZm9ybS50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgcGVyc2lzdEV2ZW50OiB0aGlzLnBlcnNpc3RFdmVudFxuICAgICAgICA/IHRoaXMucGVyc2lzdEV2ZW50LnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICBidXR0b25zOiB0aGlzLmJ1dHRvbnMgPyB0aGlzLmJ1dHRvbnMudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIHNoYXJlVWlkOiB0aGlzLnNoYXJlVWlkID8gdGhpcy5zaGFyZVVpZC50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgZm9ybVJlc3VsdDogdGhpcy5mb3JtUmVzdWx0ID8gdGhpcy5mb3JtUmVzdWx0LnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBzaGFyZVByaXZhdGVEYXRhUmVxdWVzdDogdGhpcy5zaGFyZVByaXZhdGVEYXRhUmVxdWVzdFxuICAgICAgICA/IHRoaXMuc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QudG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIHNoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlOiB0aGlzLnNoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlXG4gICAgICAgID8gdGhpcy5zaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZS50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgY2FsbEV2ZW50OiB0aGlzLmNhbGxFdmVudCA/IHRoaXMuY2FsbEV2ZW50LnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBjYWxsTG9nOiB0aGlzLmNhbGxMb2cgPyB0aGlzLmNhbGxMb2cudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIHRhYmxlOiB0aGlzLnRhYmxlID8gdGhpcy50YWJsZS50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgcGF5bWVudEluZm9ybWF0aW9uOiB0aGlzLnBheW1lbnRJbmZvcm1hdGlvblxuICAgICAgICA/IHRoaXMucGF5bWVudEluZm9ybWF0aW9uLnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWRcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBNZXNzYWdlLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFja2V0SWQ6IHRoaXMucGFja2V0SWQsXG4gICAgICBpZDogdGhpcy5pZCxcbiAgICAgIHRpbWU6IHRoaXMudGltZSxcbiAgICAgIGZyb206IHRoaXMuZnJvbSA/IHRoaXMuZnJvbS50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICB0bzogdGhpcy50byA/IHRoaXMudG8udG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgcmVwbHlUb0lkOiB0aGlzLnJlcGx5VG9JZCxcbiAgICAgIHJlcGxpZWRNZXNzYWdlQnJpZWY6IHRoaXMucmVwbGllZE1lc3NhZ2VCcmllZlxuICAgICAgICA/IHRoaXMucmVwbGllZE1lc3NhZ2VCcmllZi50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICBmb3J3YXJkRnJvbTogdGhpcy5mb3J3YXJkRnJvbVxuICAgICAgICA/IHRoaXMuZm9yd2FyZEZyb20udG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsLFxuICAgICAgZ2VuZXJhdGVkQnk6IHRoaXMuZ2VuZXJhdGVkQnlcbiAgICAgICAgPyB0aGlzLmdlbmVyYXRlZEJ5LnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbCxcbiAgICAgIGVkaXRlZDogdGhpcy5lZGl0ZWQsXG4gICAgICBlbmNyeXB0ZWQ6IHRoaXMuZW5jcnlwdGVkLFxuICAgICAgdHRsOiB0aGlzLnR0bCxcbiAgICAgIHRocmVhZDogdGhpcy50aHJlYWQsXG4gICAgICBzaG91bGRCZVF1aWV0OiB0aGlzLnNob3VsZEJlUXVpZXQsXG4gICAgICBtdWNNaW5pbXVtQWNjZXNzTGV2ZWw6XG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMTIuUm9sZVtcbiAgICAgICAgICB0aGlzLm11Y01pbmltdW1BY2Nlc3NMZXZlbCA9PT0gbnVsbCB8fFxuICAgICAgICAgIHRoaXMubXVjTWluaW11bUFjY2Vzc0xldmVsID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgOiB0aGlzLm11Y01pbmltdW1BY2Nlc3NMZXZlbFxuICAgICAgICBdLFxuICAgICAgc3BlY2lhbFRhcmdldDogdGhpcy5zcGVjaWFsVGFyZ2V0XG4gICAgICAgID8gdGhpcy5zcGVjaWFsVGFyZ2V0LnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbCxcbiAgICAgIG1lc3NhZ2VNYXJrdXA6IHRoaXMubWVzc2FnZU1hcmt1cFxuICAgICAgICA/IHRoaXMubWVzc2FnZU1hcmt1cC50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICBpc0xvY2FsTWVzc2FnZTogdGhpcy5pc0xvY2FsTWVzc2FnZSxcbiAgICAgIHRleHQ6IHRoaXMudGV4dCA/IHRoaXMudGV4dC50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICBmaWxlOiB0aGlzLmZpbGUgPyB0aGlzLmZpbGUudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgc3RpY2tlcjogdGhpcy5zdGlja2VyID8gdGhpcy5zdGlja2VyLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIGxvY2F0aW9uOiB0aGlzLmxvY2F0aW9uID8gdGhpcy5sb2NhdGlvbi50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICBsaXZlTG9jYXRpb246IHRoaXMubGl2ZUxvY2F0aW9uXG4gICAgICAgID8gdGhpcy5saXZlTG9jYXRpb24udG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsLFxuICAgICAgcG9sbDogdGhpcy5wb2xsID8gdGhpcy5wb2xsLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIHRyYW5zYWN0aW9uOiB0aGlzLnRyYW5zYWN0aW9uXG4gICAgICAgID8gdGhpcy50cmFuc2FjdGlvbi50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICBmb3JtOiB0aGlzLmZvcm0gPyB0aGlzLmZvcm0udG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgcGVyc2lzdEV2ZW50OiB0aGlzLnBlcnNpc3RFdmVudFxuICAgICAgICA/IHRoaXMucGVyc2lzdEV2ZW50LnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbCxcbiAgICAgIGJ1dHRvbnM6IHRoaXMuYnV0dG9ucyA/IHRoaXMuYnV0dG9ucy50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICBzaGFyZVVpZDogdGhpcy5zaGFyZVVpZCA/IHRoaXMuc2hhcmVVaWQudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgZm9ybVJlc3VsdDogdGhpcy5mb3JtUmVzdWx0XG4gICAgICAgID8gdGhpcy5mb3JtUmVzdWx0LnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbCxcbiAgICAgIHNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0OiB0aGlzLnNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0XG4gICAgICAgID8gdGhpcy5zaGFyZVByaXZhdGVEYXRhUmVxdWVzdC50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICBzaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZTogdGhpcy5zaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZVxuICAgICAgICA/IHRoaXMuc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UudG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsLFxuICAgICAgY2FsbEV2ZW50OiB0aGlzLmNhbGxFdmVudCA/IHRoaXMuY2FsbEV2ZW50LnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIGNhbGxMb2c6IHRoaXMuY2FsbExvZyA/IHRoaXMuY2FsbExvZy50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICB0YWJsZTogdGhpcy50YWJsZSA/IHRoaXMudGFibGUudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgcGF5bWVudEluZm9ybWF0aW9uOiB0aGlzLnBheW1lbnRJbmZvcm1hdGlvblxuICAgICAgICA/IHRoaXMucGF5bWVudEluZm9ybWF0aW9uLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbFxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgTWVzc2FnZVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgcGFja2V0SWQ/OiBzdHJpbmc7XG4gICAgaWQ/OiBzdHJpbmc7XG4gICAgdGltZT86IHN0cmluZztcbiAgICBmcm9tPzogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuQXNPYmplY3Q7XG4gICAgdG8/OiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5Bc09iamVjdDtcbiAgICByZXBseVRvSWQ/OiBzdHJpbmc7XG4gICAgcmVwbGllZE1lc3NhZ2VCcmllZj86IE1lc3NhZ2VCcmllZi5Bc09iamVjdDtcbiAgICBmb3J3YXJkRnJvbT86IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLkFzT2JqZWN0O1xuICAgIGdlbmVyYXRlZEJ5PzogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuQXNPYmplY3Q7XG4gICAgZWRpdGVkPzogYm9vbGVhbjtcbiAgICBlbmNyeXB0ZWQ/OiBib29sZWFuO1xuICAgIHR0bD86IG51bWJlcjtcbiAgICB0aHJlYWQ/OiBzdHJpbmc7XG4gICAgc2hvdWxkQmVRdWlldD86IGJvb2xlYW47XG4gICAgbXVjTWluaW11bUFjY2Vzc0xldmVsPzogcHJvdG9QdWJWMU1vZGVsczAxMi5Sb2xlO1xuICAgIHNwZWNpYWxUYXJnZXQ/OiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5Bc09iamVjdDtcbiAgICBtZXNzYWdlTWFya3VwPzogcHJvdG9QdWJWMU1vZGVsczAxNC5NZXNzYWdlTWFya3VwLkFzT2JqZWN0O1xuICAgIGlzTG9jYWxNZXNzYWdlPzogYm9vbGVhbjtcbiAgICB0ZXh0PzogVGV4dC5Bc09iamVjdDtcbiAgICBmaWxlPzogcHJvdG9QdWJWMU1vZGVsczAwMS5GaWxlLkFzT2JqZWN0O1xuICAgIHN0aWNrZXI/OiBwcm90b1B1YlYxTW9kZWxzMDA1LlN0aWNrZXIuQXNPYmplY3Q7XG4gICAgbG9jYXRpb24/OiBwcm90b1B1YlYxTW9kZWxzMDA2LkxvY2F0aW9uLkFzT2JqZWN0O1xuICAgIGxpdmVMb2NhdGlvbj86IHByb3RvUHViVjFNb2RlbHMwMDYuTGl2ZUxvY2F0aW9uLkFzT2JqZWN0O1xuICAgIHBvbGw/OiBwcm90b1B1YlYxTW9kZWxzMDExLlBvbGwuQXNPYmplY3Q7XG4gICAgdHJhbnNhY3Rpb24/OiBwcm90b1B1YlYxTW9kZWxzMDA3LlRyYW5zYWN0aW9uLkFzT2JqZWN0O1xuICAgIGZvcm0/OiBwcm90b1B1YlYxTW9kZWxzMDEwLkZvcm0uQXNPYmplY3Q7XG4gICAgcGVyc2lzdEV2ZW50PzogcHJvdG9QdWJWMU1vZGVsczAwOC5QZXJzaXN0ZW50RXZlbnQuQXNPYmplY3Q7XG4gICAgYnV0dG9ucz86IHByb3RvUHViVjFNb2RlbHMwMTAuQnV0dG9ucy5Bc09iamVjdDtcbiAgICBzaGFyZVVpZD86IFNoYXJlVWlkLkFzT2JqZWN0O1xuICAgIGZvcm1SZXN1bHQ/OiBwcm90b1B1YlYxTW9kZWxzMDEwLkZvcm1SZXN1bHQuQXNPYmplY3Q7XG4gICAgc2hhcmVQcml2YXRlRGF0YVJlcXVlc3Q/OiBwcm90b1B1YlYxTW9kZWxzMDA5LlNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0LkFzT2JqZWN0O1xuICAgIHNoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlPzogcHJvdG9QdWJWMU1vZGVsczAwOS5TaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZS5Bc09iamVjdDtcbiAgICBjYWxsRXZlbnQ/OiBwcm90b1B1YlYxTW9kZWxzMDEzLkNhbGxFdmVudC5Bc09iamVjdDtcbiAgICBjYWxsTG9nPzogcHJvdG9QdWJWMU1vZGVsczAxMy5DYWxsTG9nLkFzT2JqZWN0O1xuICAgIHRhYmxlPzogcHJvdG9QdWJWMU1vZGVsczAxMC5UYWJsZS5Bc09iamVjdDtcbiAgICBwYXltZW50SW5mb3JtYXRpb24/OiBwcm90b1B1YlYxTW9kZWxzMDA3LlBheW1lbnRJbmZvcm1hdGlvbi5Bc09iamVjdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBNZXNzYWdlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBwYWNrZXRJZD86IHN0cmluZztcbiAgICBpZD86IHN0cmluZztcbiAgICB0aW1lPzogc3RyaW5nO1xuICAgIGZyb20/OiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgdG8/OiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgcmVwbHlUb0lkPzogc3RyaW5nO1xuICAgIHJlcGxpZWRNZXNzYWdlQnJpZWY/OiBNZXNzYWdlQnJpZWYuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIGZvcndhcmRGcm9tPzogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIGdlbmVyYXRlZEJ5PzogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIGVkaXRlZD86IGJvb2xlYW47XG4gICAgZW5jcnlwdGVkPzogYm9vbGVhbjtcbiAgICB0dGw/OiBudW1iZXI7XG4gICAgdGhyZWFkPzogc3RyaW5nO1xuICAgIHNob3VsZEJlUXVpZXQ/OiBib29sZWFuO1xuICAgIG11Y01pbmltdW1BY2Nlc3NMZXZlbD86IHN0cmluZztcbiAgICBzcGVjaWFsVGFyZ2V0PzogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIG1lc3NhZ2VNYXJrdXA/OiBwcm90b1B1YlYxTW9kZWxzMDE0Lk1lc3NhZ2VNYXJrdXAuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIGlzTG9jYWxNZXNzYWdlPzogYm9vbGVhbjtcbiAgICB0ZXh0PzogVGV4dC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgZmlsZT86IHByb3RvUHViVjFNb2RlbHMwMDEuRmlsZS5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgc3RpY2tlcj86IHByb3RvUHViVjFNb2RlbHMwMDUuU3RpY2tlci5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgbG9jYXRpb24/OiBwcm90b1B1YlYxTW9kZWxzMDA2LkxvY2F0aW9uLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBsaXZlTG9jYXRpb24/OiBwcm90b1B1YlYxTW9kZWxzMDA2LkxpdmVMb2NhdGlvbi5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgcG9sbD86IHByb3RvUHViVjFNb2RlbHMwMTEuUG9sbC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgdHJhbnNhY3Rpb24/OiBwcm90b1B1YlYxTW9kZWxzMDA3LlRyYW5zYWN0aW9uLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBmb3JtPzogcHJvdG9QdWJWMU1vZGVsczAxMC5Gb3JtLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBwZXJzaXN0RXZlbnQ/OiBwcm90b1B1YlYxTW9kZWxzMDA4LlBlcnNpc3RlbnRFdmVudC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgYnV0dG9ucz86IHByb3RvUHViVjFNb2RlbHMwMTAuQnV0dG9ucy5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgc2hhcmVVaWQ/OiBTaGFyZVVpZC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgZm9ybVJlc3VsdD86IHByb3RvUHViVjFNb2RlbHMwMTAuRm9ybVJlc3VsdC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgc2hhcmVQcml2YXRlRGF0YVJlcXVlc3Q/OiBwcm90b1B1YlYxTW9kZWxzMDA5LlNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0LkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBzaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZT86IHByb3RvUHViVjFNb2RlbHMwMDkuU2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIGNhbGxFdmVudD86IHByb3RvUHViVjFNb2RlbHMwMTMuQ2FsbEV2ZW50LkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBjYWxsTG9nPzogcHJvdG9QdWJWMU1vZGVsczAxMy5DYWxsTG9nLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICB0YWJsZT86IHByb3RvUHViVjFNb2RlbHMwMTAuVGFibGUuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHBheW1lbnRJbmZvcm1hdGlvbj86IHByb3RvUHViVjFNb2RlbHMwMDcuUGF5bWVudEluZm9ybWF0aW9uLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgfVxuICBleHBvcnQgZW51bSBUeXBlQ2FzZSB7XG4gICAgbm9uZSA9IDAsXG4gICAgdGV4dCA9IDEsXG4gICAgZmlsZSA9IDIsXG4gICAgc3RpY2tlciA9IDMsXG4gICAgbG9jYXRpb24gPSA0LFxuICAgIGxpdmVMb2NhdGlvbiA9IDUsXG4gICAgcG9sbCA9IDYsXG4gICAgdHJhbnNhY3Rpb24gPSA3LFxuICAgIGZvcm0gPSA4LFxuICAgIHBlcnNpc3RFdmVudCA9IDksXG4gICAgYnV0dG9ucyA9IDEwLFxuICAgIHNoYXJlVWlkID0gMTEsXG4gICAgZm9ybVJlc3VsdCA9IDEyLFxuICAgIHNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0ID0gMTMsXG4gICAgc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UgPSAxNCxcbiAgICBjYWxsRXZlbnQgPSAxNSxcbiAgICBjYWxsTG9nID0gMTYsXG4gICAgdGFibGUgPSAxNyxcbiAgICBwYXltZW50SW5mb3JtYXRpb24gPSAxOFxuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3IgcHJvdG8ucHViLnYxLm1vZGVscy5NZXNzYWdlQnlDbGllbnRcbiAqL1xuZXhwb3J0IGNsYXNzIE1lc3NhZ2VCeUNsaWVudCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ3Byb3RvLnB1Yi52MS5tb2RlbHMuTWVzc2FnZUJ5Q2xpZW50JztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgTWVzc2FnZUJ5Q2xpZW50KCk7XG4gICAgTWVzc2FnZUJ5Q2xpZW50LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogTWVzc2FnZUJ5Q2xpZW50KSB7XG4gICAgX2luc3RhbmNlLnBhY2tldElkID0gX2luc3RhbmNlLnBhY2tldElkIHx8ICcnO1xuICAgIF9pbnN0YW5jZS50byA9IF9pbnN0YW5jZS50byB8fCB1bmRlZmluZWQ7XG4gICAgX2luc3RhbmNlLnJlcGx5VG9JZCA9IF9pbnN0YW5jZS5yZXBseVRvSWQgfHwgJzAnO1xuICAgIF9pbnN0YW5jZS5mb3J3YXJkRnJvbSA9IF9pbnN0YW5jZS5mb3J3YXJkRnJvbSB8fCB1bmRlZmluZWQ7XG4gICAgX2luc3RhbmNlLmVuY3J5cHRlZCA9IF9pbnN0YW5jZS5lbmNyeXB0ZWQgfHwgZmFsc2U7XG4gICAgX2luc3RhbmNlLnR0bCA9IF9pbnN0YW5jZS50dGwgfHwgMDtcbiAgICBfaW5zdGFuY2UudGhyZWFkID0gX2luc3RhbmNlLnRocmVhZCB8fCAnMCc7XG4gICAgX2luc3RhbmNlLnNob3VsZEJlUXVpZXQgPSBfaW5zdGFuY2Uuc2hvdWxkQmVRdWlldCB8fCBmYWxzZTtcbiAgICBfaW5zdGFuY2UuZ2VuZXJhdGVkQnkgPSBfaW5zdGFuY2UuZ2VuZXJhdGVkQnkgfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5pc0xvY2FsTWVzc2FnZSA9IF9pbnN0YW5jZS5pc0xvY2FsTWVzc2FnZSB8fCBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IE1lc3NhZ2VCeUNsaWVudCxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UucGFja2V0SWQgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIF9pbnN0YW5jZS50byA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UudG8sXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgX2luc3RhbmNlLnJlcGx5VG9JZCA9IF9yZWFkZXIucmVhZEludDY0U3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgODpcbiAgICAgICAgICBfaW5zdGFuY2UuZm9yd2FyZEZyb20gPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmZvcndhcmRGcm9tLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICBfaW5zdGFuY2UuZW5jcnlwdGVkID0gX3JlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDIzOlxuICAgICAgICAgIF9pbnN0YW5jZS50dGwgPSBfcmVhZGVyLnJlYWRJbnQzMigpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI4OlxuICAgICAgICAgIF9pbnN0YW5jZS50aHJlYWQgPSBfcmVhZGVyLnJlYWRJbnQ2NFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI5OlxuICAgICAgICAgIF9pbnN0YW5jZS5zaG91bGRCZVF1aWV0ID0gX3JlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDMzOlxuICAgICAgICAgIF9pbnN0YW5jZS5nZW5lcmF0ZWRCeSA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuZ2VuZXJhdGVkQnksXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM0OlxuICAgICAgICAgIF9pbnN0YW5jZS5pc0xvY2FsTWVzc2FnZSA9IF9yZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICBfaW5zdGFuY2UudGV4dCA9IG5ldyBUZXh0KCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShfaW5zdGFuY2UudGV4dCwgVGV4dC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgIF9pbnN0YW5jZS5maWxlID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDEuRmlsZSgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuZmlsZSxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDEuRmlsZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgIF9pbnN0YW5jZS5zdGlja2VyID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDUuU3RpY2tlcigpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2Uuc3RpY2tlcixcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDUuU3RpY2tlci5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE0OlxuICAgICAgICAgIF9pbnN0YW5jZS5sb2NhdGlvbiA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDA2LkxvY2F0aW9uKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5sb2NhdGlvbixcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDYuTG9jYXRpb24uZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxNTpcbiAgICAgICAgICBfaW5zdGFuY2UubGl2ZUxvY2F0aW9uID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDYuTGl2ZUxvY2F0aW9uKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5saXZlTG9jYXRpb24sXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDA2LkxpdmVMb2NhdGlvbi5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE2OlxuICAgICAgICAgIF9pbnN0YW5jZS5wb2xsID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMTEuUG9sbCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UucG9sbCxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMTEuUG9sbC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE4OlxuICAgICAgICAgIF9pbnN0YW5jZS5mb3JtID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMTAuRm9ybSgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuZm9ybSxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMTAuRm9ybS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDIwOlxuICAgICAgICAgIF9pbnN0YW5jZS5idXR0b25zID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMTAuQnV0dG9ucygpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuYnV0dG9ucyxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMTAuQnV0dG9ucy5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDIxOlxuICAgICAgICAgIF9pbnN0YW5jZS5zaGFyZVVpZCA9IG5ldyBTaGFyZVVpZCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2Uuc2hhcmVVaWQsXG4gICAgICAgICAgICBTaGFyZVVpZC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDIyOlxuICAgICAgICAgIF9pbnN0YW5jZS5mb3JtUmVzdWx0ID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMTAuRm9ybVJlc3VsdCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuZm9ybVJlc3VsdCxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMTAuRm9ybVJlc3VsdC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI2OlxuICAgICAgICAgIF9pbnN0YW5jZS5zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDA5LlNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0KCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDkuU2hhcmVQcml2YXRlRGF0YVJlcXVlc3RcbiAgICAgICAgICAgICAgLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjc6XG4gICAgICAgICAgX2luc3RhbmNlLnNoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDkuU2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLnNoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwOS5TaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZVxuICAgICAgICAgICAgICAuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzMTpcbiAgICAgICAgICBfaW5zdGFuY2UuY2FsbEV2ZW50ID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMTMuQ2FsbEV2ZW50KCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5jYWxsRXZlbnQsXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDEzLkNhbGxFdmVudC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgIF9pbnN0YW5jZS50YWJsZSA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDEwLlRhYmxlKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS50YWJsZSxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMTAuVGFibGUuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIE1lc3NhZ2VCeUNsaWVudC5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IE1lc3NhZ2VCeUNsaWVudCxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5wYWNrZXRJZCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2UucGFja2V0SWQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnRvKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgNixcbiAgICAgICAgX2luc3RhbmNlLnRvIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UucmVwbHlUb0lkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlSW50NjRTdHJpbmcoNywgX2luc3RhbmNlLnJlcGx5VG9JZCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZm9yd2FyZEZyb20pIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA4LFxuICAgICAgICBfaW5zdGFuY2UuZm9yd2FyZEZyb20gYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5lbmNyeXB0ZWQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVCb29sKDEwLCBfaW5zdGFuY2UuZW5jcnlwdGVkKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS50dGwpIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQzMigyMywgX2luc3RhbmNlLnR0bCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UudGhyZWFkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlSW50NjRTdHJpbmcoMjgsIF9pbnN0YW5jZS50aHJlYWQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnNob3VsZEJlUXVpZXQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVCb29sKDI5LCBfaW5zdGFuY2Uuc2hvdWxkQmVRdWlldCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZ2VuZXJhdGVkQnkpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAzMyxcbiAgICAgICAgX2luc3RhbmNlLmdlbmVyYXRlZEJ5IGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuaXNMb2NhbE1lc3NhZ2UpIHtcbiAgICAgIF93cml0ZXIud3JpdGVCb29sKDM0LCBfaW5zdGFuY2UuaXNMb2NhbE1lc3NhZ2UpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnRleHQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAxMSxcbiAgICAgICAgX2luc3RhbmNlLnRleHQgYXMgYW55LFxuICAgICAgICBUZXh0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmZpbGUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAxMixcbiAgICAgICAgX2luc3RhbmNlLmZpbGUgYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAxLkZpbGUuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uuc3RpY2tlcikge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDEzLFxuICAgICAgICBfaW5zdGFuY2Uuc3RpY2tlciBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDUuU3RpY2tlci5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5sb2NhdGlvbikge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDE0LFxuICAgICAgICBfaW5zdGFuY2UubG9jYXRpb24gYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDA2LkxvY2F0aW9uLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmxpdmVMb2NhdGlvbikge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDE1LFxuICAgICAgICBfaW5zdGFuY2UubGl2ZUxvY2F0aW9uIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwNi5MaXZlTG9jYXRpb24uc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UucG9sbCkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDE2LFxuICAgICAgICBfaW5zdGFuY2UucG9sbCBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMTEuUG9sbC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5mb3JtKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMTgsXG4gICAgICAgIF9pbnN0YW5jZS5mb3JtIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxMC5Gb3JtLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmJ1dHRvbnMpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAyMCxcbiAgICAgICAgX2luc3RhbmNlLmJ1dHRvbnMgYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDEwLkJ1dHRvbnMuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uuc2hhcmVVaWQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAyMSxcbiAgICAgICAgX2luc3RhbmNlLnNoYXJlVWlkIGFzIGFueSxcbiAgICAgICAgU2hhcmVVaWQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZm9ybVJlc3VsdCkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDIyLFxuICAgICAgICBfaW5zdGFuY2UuZm9ybVJlc3VsdCBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMTAuRm9ybVJlc3VsdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDI2LFxuICAgICAgICBfaW5zdGFuY2Uuc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QgYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDA5LlNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnNoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMjcsXG4gICAgICAgIF9pbnN0YW5jZS5zaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZSBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDkuU2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2Uuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuY2FsbEV2ZW50KSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMzEsXG4gICAgICAgIF9pbnN0YW5jZS5jYWxsRXZlbnQgYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDEzLkNhbGxFdmVudC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS50YWJsZSkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDMyLFxuICAgICAgICBfaW5zdGFuY2UudGFibGUgYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDEwLlRhYmxlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3BhY2tldElkPzogc3RyaW5nO1xuICBwcml2YXRlIF90bz86IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkO1xuICBwcml2YXRlIF9yZXBseVRvSWQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2ZvcndhcmRGcm9tPzogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQ7XG4gIHByaXZhdGUgX2VuY3J5cHRlZD86IGJvb2xlYW47XG4gIHByaXZhdGUgX3R0bD86IG51bWJlcjtcbiAgcHJpdmF0ZSBfdGhyZWFkPzogc3RyaW5nO1xuICBwcml2YXRlIF9zaG91bGRCZVF1aWV0PzogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfZ2VuZXJhdGVkQnk/OiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZDtcbiAgcHJpdmF0ZSBfaXNMb2NhbE1lc3NhZ2U/OiBib29sZWFuO1xuICBwcml2YXRlIF90ZXh0PzogVGV4dDtcbiAgcHJpdmF0ZSBfZmlsZT86IHByb3RvUHViVjFNb2RlbHMwMDEuRmlsZTtcbiAgcHJpdmF0ZSBfc3RpY2tlcj86IHByb3RvUHViVjFNb2RlbHMwMDUuU3RpY2tlcjtcbiAgcHJpdmF0ZSBfbG9jYXRpb24/OiBwcm90b1B1YlYxTW9kZWxzMDA2LkxvY2F0aW9uO1xuICBwcml2YXRlIF9saXZlTG9jYXRpb24/OiBwcm90b1B1YlYxTW9kZWxzMDA2LkxpdmVMb2NhdGlvbjtcbiAgcHJpdmF0ZSBfcG9sbD86IHByb3RvUHViVjFNb2RlbHMwMTEuUG9sbDtcbiAgcHJpdmF0ZSBfZm9ybT86IHByb3RvUHViVjFNb2RlbHMwMTAuRm9ybTtcbiAgcHJpdmF0ZSBfYnV0dG9ucz86IHByb3RvUHViVjFNb2RlbHMwMTAuQnV0dG9ucztcbiAgcHJpdmF0ZSBfc2hhcmVVaWQ/OiBTaGFyZVVpZDtcbiAgcHJpdmF0ZSBfZm9ybVJlc3VsdD86IHByb3RvUHViVjFNb2RlbHMwMTAuRm9ybVJlc3VsdDtcbiAgcHJpdmF0ZSBfc2hhcmVQcml2YXRlRGF0YVJlcXVlc3Q/OiBwcm90b1B1YlYxTW9kZWxzMDA5LlNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0O1xuICBwcml2YXRlIF9zaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZT86IHByb3RvUHViVjFNb2RlbHMwMDkuU2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2U7XG4gIHByaXZhdGUgX2NhbGxFdmVudD86IHByb3RvUHViVjFNb2RlbHMwMTMuQ2FsbEV2ZW50O1xuICBwcml2YXRlIF90YWJsZT86IHByb3RvUHViVjFNb2RlbHMwMTAuVGFibGU7XG5cbiAgcHJpdmF0ZSBfdHlwZTogTWVzc2FnZUJ5Q2xpZW50LlR5cGVDYXNlID0gTWVzc2FnZUJ5Q2xpZW50LlR5cGVDYXNlLm5vbmU7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBNZXNzYWdlQnlDbGllbnQgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8TWVzc2FnZUJ5Q2xpZW50LkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnBhY2tldElkID0gX3ZhbHVlLnBhY2tldElkO1xuICAgIHRoaXMudG8gPSBfdmFsdWUudG8gPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQoX3ZhbHVlLnRvKSA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnJlcGx5VG9JZCA9IF92YWx1ZS5yZXBseVRvSWQ7XG4gICAgdGhpcy5mb3J3YXJkRnJvbSA9IF92YWx1ZS5mb3J3YXJkRnJvbVxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQoX3ZhbHVlLmZvcndhcmRGcm9tKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5lbmNyeXB0ZWQgPSBfdmFsdWUuZW5jcnlwdGVkO1xuICAgIHRoaXMudHRsID0gX3ZhbHVlLnR0bDtcbiAgICB0aGlzLnRocmVhZCA9IF92YWx1ZS50aHJlYWQ7XG4gICAgdGhpcy5zaG91bGRCZVF1aWV0ID0gX3ZhbHVlLnNob3VsZEJlUXVpZXQ7XG4gICAgdGhpcy5nZW5lcmF0ZWRCeSA9IF92YWx1ZS5nZW5lcmF0ZWRCeVxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQoX3ZhbHVlLmdlbmVyYXRlZEJ5KVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5pc0xvY2FsTWVzc2FnZSA9IF92YWx1ZS5pc0xvY2FsTWVzc2FnZTtcbiAgICB0aGlzLnRleHQgPSBfdmFsdWUudGV4dCA/IG5ldyBUZXh0KF92YWx1ZS50ZXh0KSA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmZpbGUgPSBfdmFsdWUuZmlsZVxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMS5GaWxlKF92YWx1ZS5maWxlKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5zdGlja2VyID0gX3ZhbHVlLnN0aWNrZXJcbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMDUuU3RpY2tlcihfdmFsdWUuc3RpY2tlcilcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMubG9jYXRpb24gPSBfdmFsdWUubG9jYXRpb25cbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMDYuTG9jYXRpb24oX3ZhbHVlLmxvY2F0aW9uKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5saXZlTG9jYXRpb24gPSBfdmFsdWUubGl2ZUxvY2F0aW9uXG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDA2LkxpdmVMb2NhdGlvbihfdmFsdWUubGl2ZUxvY2F0aW9uKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5wb2xsID0gX3ZhbHVlLnBvbGxcbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMTEuUG9sbChfdmFsdWUucG9sbClcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuZm9ybSA9IF92YWx1ZS5mb3JtXG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDEwLkZvcm0oX3ZhbHVlLmZvcm0pXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmJ1dHRvbnMgPSBfdmFsdWUuYnV0dG9uc1xuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAxMC5CdXR0b25zKF92YWx1ZS5idXR0b25zKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5zaGFyZVVpZCA9IF92YWx1ZS5zaGFyZVVpZCA/IG5ldyBTaGFyZVVpZChfdmFsdWUuc2hhcmVVaWQpIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuZm9ybVJlc3VsdCA9IF92YWx1ZS5mb3JtUmVzdWx0XG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDEwLkZvcm1SZXN1bHQoX3ZhbHVlLmZvcm1SZXN1bHQpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0ID0gX3ZhbHVlLnNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0XG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDA5LlNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0KFxuICAgICAgICAgIF92YWx1ZS5zaGFyZVByaXZhdGVEYXRhUmVxdWVzdFxuICAgICAgICApXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlID0gX3ZhbHVlLnNoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlXG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDA5LlNoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlKFxuICAgICAgICAgIF92YWx1ZS5zaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZVxuICAgICAgICApXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmNhbGxFdmVudCA9IF92YWx1ZS5jYWxsRXZlbnRcbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMTMuQ2FsbEV2ZW50KF92YWx1ZS5jYWxsRXZlbnQpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnRhYmxlID0gX3ZhbHVlLnRhYmxlXG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDEwLlRhYmxlKF92YWx1ZS50YWJsZSlcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIE1lc3NhZ2VCeUNsaWVudC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHBhY2tldElkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3BhY2tldElkO1xuICB9XG4gIHNldCBwYWNrZXRJZCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcGFja2V0SWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdG8oKTogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90bztcbiAgfVxuICBzZXQgdG8odmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdG8gPSB2YWx1ZTtcbiAgfVxuICBnZXQgcmVwbHlUb0lkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcGx5VG9JZDtcbiAgfVxuICBzZXQgcmVwbHlUb0lkKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9yZXBseVRvSWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZm9yd2FyZEZyb20oKTogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9mb3J3YXJkRnJvbTtcbiAgfVxuICBzZXQgZm9yd2FyZEZyb20odmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZm9yd2FyZEZyb20gPSB2YWx1ZTtcbiAgfVxuICBnZXQgZW5jcnlwdGVkKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9lbmNyeXB0ZWQ7XG4gIH1cbiAgc2V0IGVuY3J5cHRlZCh2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2VuY3J5cHRlZCA9IHZhbHVlO1xuICB9XG4gIGdldCB0dGwoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdHRsO1xuICB9XG4gIHNldCB0dGwodmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3R0bCA9IHZhbHVlO1xuICB9XG4gIGdldCB0aHJlYWQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdGhyZWFkO1xuICB9XG4gIHNldCB0aHJlYWQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3RocmVhZCA9IHZhbHVlO1xuICB9XG4gIGdldCBzaG91bGRCZVF1aWV0KCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zaG91bGRCZVF1aWV0O1xuICB9XG4gIHNldCBzaG91bGRCZVF1aWV0KHZhbHVlOiBib29sZWFuIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fc2hvdWxkQmVRdWlldCA9IHZhbHVlO1xuICB9XG4gIGdldCBnZW5lcmF0ZWRCeSgpOiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2dlbmVyYXRlZEJ5O1xuICB9XG4gIHNldCBnZW5lcmF0ZWRCeSh2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9nZW5lcmF0ZWRCeSA9IHZhbHVlO1xuICB9XG4gIGdldCBpc0xvY2FsTWVzc2FnZSgpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5faXNMb2NhbE1lc3NhZ2U7XG4gIH1cbiAgc2V0IGlzTG9jYWxNZXNzYWdlKHZhbHVlOiBib29sZWFuIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5faXNMb2NhbE1lc3NhZ2UgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdGV4dCgpOiBUZXh0IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdGV4dDtcbiAgfVxuICBzZXQgdGV4dCh2YWx1ZTogVGV4dCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9maWxlID0gdGhpcy5fc3RpY2tlciA9IHRoaXMuX2xvY2F0aW9uID0gdGhpcy5fbGl2ZUxvY2F0aW9uID0gdGhpcy5fcG9sbCA9IHRoaXMuX2Zvcm0gPSB0aGlzLl9idXR0b25zID0gdGhpcy5fc2hhcmVVaWQgPSB0aGlzLl9mb3JtUmVzdWx0ID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZSA9IHRoaXMuX2NhbGxFdmVudCA9IHRoaXMuX3RhYmxlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IE1lc3NhZ2VCeUNsaWVudC5UeXBlQ2FzZS50ZXh0O1xuICAgIH1cbiAgICB0aGlzLl90ZXh0ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGZpbGUoKTogcHJvdG9QdWJWMU1vZGVsczAwMS5GaWxlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZmlsZTtcbiAgfVxuICBzZXQgZmlsZSh2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAwMS5GaWxlIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3RleHQgPSB0aGlzLl9zdGlja2VyID0gdGhpcy5fbG9jYXRpb24gPSB0aGlzLl9saXZlTG9jYXRpb24gPSB0aGlzLl9wb2xsID0gdGhpcy5fZm9ybSA9IHRoaXMuX2J1dHRvbnMgPSB0aGlzLl9zaGFyZVVpZCA9IHRoaXMuX2Zvcm1SZXN1bHQgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlID0gdGhpcy5fY2FsbEV2ZW50ID0gdGhpcy5fdGFibGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gTWVzc2FnZUJ5Q2xpZW50LlR5cGVDYXNlLmZpbGU7XG4gICAgfVxuICAgIHRoaXMuX2ZpbGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc3RpY2tlcigpOiBwcm90b1B1YlYxTW9kZWxzMDA1LlN0aWNrZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zdGlja2VyO1xuICB9XG4gIHNldCBzdGlja2VyKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDA1LlN0aWNrZXIgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fdGV4dCA9IHRoaXMuX2ZpbGUgPSB0aGlzLl9sb2NhdGlvbiA9IHRoaXMuX2xpdmVMb2NhdGlvbiA9IHRoaXMuX3BvbGwgPSB0aGlzLl9mb3JtID0gdGhpcy5fYnV0dG9ucyA9IHRoaXMuX3NoYXJlVWlkID0gdGhpcy5fZm9ybVJlc3VsdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0ID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UgPSB0aGlzLl9jYWxsRXZlbnQgPSB0aGlzLl90YWJsZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBNZXNzYWdlQnlDbGllbnQuVHlwZUNhc2Uuc3RpY2tlcjtcbiAgICB9XG4gICAgdGhpcy5fc3RpY2tlciA9IHZhbHVlO1xuICB9XG4gIGdldCBsb2NhdGlvbigpOiBwcm90b1B1YlYxTW9kZWxzMDA2LkxvY2F0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbG9jYXRpb247XG4gIH1cbiAgc2V0IGxvY2F0aW9uKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDA2LkxvY2F0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3RleHQgPSB0aGlzLl9maWxlID0gdGhpcy5fc3RpY2tlciA9IHRoaXMuX2xpdmVMb2NhdGlvbiA9IHRoaXMuX3BvbGwgPSB0aGlzLl9mb3JtID0gdGhpcy5fYnV0dG9ucyA9IHRoaXMuX3NoYXJlVWlkID0gdGhpcy5fZm9ybVJlc3VsdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0ID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UgPSB0aGlzLl9jYWxsRXZlbnQgPSB0aGlzLl90YWJsZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBNZXNzYWdlQnlDbGllbnQuVHlwZUNhc2UubG9jYXRpb247XG4gICAgfVxuICAgIHRoaXMuX2xvY2F0aW9uID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGxpdmVMb2NhdGlvbigpOiBwcm90b1B1YlYxTW9kZWxzMDA2LkxpdmVMb2NhdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2xpdmVMb2NhdGlvbjtcbiAgfVxuICBzZXQgbGl2ZUxvY2F0aW9uKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDA2LkxpdmVMb2NhdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl90ZXh0ID0gdGhpcy5fZmlsZSA9IHRoaXMuX3N0aWNrZXIgPSB0aGlzLl9sb2NhdGlvbiA9IHRoaXMuX3BvbGwgPSB0aGlzLl9mb3JtID0gdGhpcy5fYnV0dG9ucyA9IHRoaXMuX3NoYXJlVWlkID0gdGhpcy5fZm9ybVJlc3VsdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0ID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UgPSB0aGlzLl9jYWxsRXZlbnQgPSB0aGlzLl90YWJsZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBNZXNzYWdlQnlDbGllbnQuVHlwZUNhc2UubGl2ZUxvY2F0aW9uO1xuICAgIH1cbiAgICB0aGlzLl9saXZlTG9jYXRpb24gPSB2YWx1ZTtcbiAgfVxuICBnZXQgcG9sbCgpOiBwcm90b1B1YlYxTW9kZWxzMDExLlBvbGwgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wb2xsO1xuICB9XG4gIHNldCBwb2xsKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDExLlBvbGwgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fdGV4dCA9IHRoaXMuX2ZpbGUgPSB0aGlzLl9zdGlja2VyID0gdGhpcy5fbG9jYXRpb24gPSB0aGlzLl9saXZlTG9jYXRpb24gPSB0aGlzLl9mb3JtID0gdGhpcy5fYnV0dG9ucyA9IHRoaXMuX3NoYXJlVWlkID0gdGhpcy5fZm9ybVJlc3VsdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0ID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UgPSB0aGlzLl9jYWxsRXZlbnQgPSB0aGlzLl90YWJsZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBNZXNzYWdlQnlDbGllbnQuVHlwZUNhc2UucG9sbDtcbiAgICB9XG4gICAgdGhpcy5fcG9sbCA9IHZhbHVlO1xuICB9XG4gIGdldCBmb3JtKCk6IHByb3RvUHViVjFNb2RlbHMwMTAuRm9ybSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2Zvcm07XG4gIH1cbiAgc2V0IGZvcm0odmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMTAuRm9ybSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl90ZXh0ID0gdGhpcy5fZmlsZSA9IHRoaXMuX3N0aWNrZXIgPSB0aGlzLl9sb2NhdGlvbiA9IHRoaXMuX2xpdmVMb2NhdGlvbiA9IHRoaXMuX3BvbGwgPSB0aGlzLl9idXR0b25zID0gdGhpcy5fc2hhcmVVaWQgPSB0aGlzLl9mb3JtUmVzdWx0ID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZSA9IHRoaXMuX2NhbGxFdmVudCA9IHRoaXMuX3RhYmxlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IE1lc3NhZ2VCeUNsaWVudC5UeXBlQ2FzZS5mb3JtO1xuICAgIH1cbiAgICB0aGlzLl9mb3JtID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGJ1dHRvbnMoKTogcHJvdG9QdWJWMU1vZGVsczAxMC5CdXR0b25zIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fYnV0dG9ucztcbiAgfVxuICBzZXQgYnV0dG9ucyh2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAxMC5CdXR0b25zIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3RleHQgPSB0aGlzLl9maWxlID0gdGhpcy5fc3RpY2tlciA9IHRoaXMuX2xvY2F0aW9uID0gdGhpcy5fbGl2ZUxvY2F0aW9uID0gdGhpcy5fcG9sbCA9IHRoaXMuX2Zvcm0gPSB0aGlzLl9zaGFyZVVpZCA9IHRoaXMuX2Zvcm1SZXN1bHQgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlID0gdGhpcy5fY2FsbEV2ZW50ID0gdGhpcy5fdGFibGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gTWVzc2FnZUJ5Q2xpZW50LlR5cGVDYXNlLmJ1dHRvbnM7XG4gICAgfVxuICAgIHRoaXMuX2J1dHRvbnMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc2hhcmVVaWQoKTogU2hhcmVVaWQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zaGFyZVVpZDtcbiAgfVxuICBzZXQgc2hhcmVVaWQodmFsdWU6IFNoYXJlVWlkIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3RleHQgPSB0aGlzLl9maWxlID0gdGhpcy5fc3RpY2tlciA9IHRoaXMuX2xvY2F0aW9uID0gdGhpcy5fbGl2ZUxvY2F0aW9uID0gdGhpcy5fcG9sbCA9IHRoaXMuX2Zvcm0gPSB0aGlzLl9idXR0b25zID0gdGhpcy5fZm9ybVJlc3VsdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0ID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UgPSB0aGlzLl9jYWxsRXZlbnQgPSB0aGlzLl90YWJsZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBNZXNzYWdlQnlDbGllbnQuVHlwZUNhc2Uuc2hhcmVVaWQ7XG4gICAgfVxuICAgIHRoaXMuX3NoYXJlVWlkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGZvcm1SZXN1bHQoKTogcHJvdG9QdWJWMU1vZGVsczAxMC5Gb3JtUmVzdWx0IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZm9ybVJlc3VsdDtcbiAgfVxuICBzZXQgZm9ybVJlc3VsdCh2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAxMC5Gb3JtUmVzdWx0IHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3RleHQgPSB0aGlzLl9maWxlID0gdGhpcy5fc3RpY2tlciA9IHRoaXMuX2xvY2F0aW9uID0gdGhpcy5fbGl2ZUxvY2F0aW9uID0gdGhpcy5fcG9sbCA9IHRoaXMuX2Zvcm0gPSB0aGlzLl9idXR0b25zID0gdGhpcy5fc2hhcmVVaWQgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlID0gdGhpcy5fY2FsbEV2ZW50ID0gdGhpcy5fdGFibGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gTWVzc2FnZUJ5Q2xpZW50LlR5cGVDYXNlLmZvcm1SZXN1bHQ7XG4gICAgfVxuICAgIHRoaXMuX2Zvcm1SZXN1bHQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QoKTpcbiAgICB8IHByb3RvUHViVjFNb2RlbHMwMDkuU2hhcmVQcml2YXRlRGF0YVJlcXVlc3RcbiAgICB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0O1xuICB9XG4gIHNldCBzaGFyZVByaXZhdGVEYXRhUmVxdWVzdChcbiAgICB2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAwOS5TaGFyZVByaXZhdGVEYXRhUmVxdWVzdCB8IHVuZGVmaW5lZFxuICApIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fdGV4dCA9IHRoaXMuX2ZpbGUgPSB0aGlzLl9zdGlja2VyID0gdGhpcy5fbG9jYXRpb24gPSB0aGlzLl9saXZlTG9jYXRpb24gPSB0aGlzLl9wb2xsID0gdGhpcy5fZm9ybSA9IHRoaXMuX2J1dHRvbnMgPSB0aGlzLl9zaGFyZVVpZCA9IHRoaXMuX2Zvcm1SZXN1bHQgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZSA9IHRoaXMuX2NhbGxFdmVudCA9IHRoaXMuX3RhYmxlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IE1lc3NhZ2VCeUNsaWVudC5UeXBlQ2FzZS5zaGFyZVByaXZhdGVEYXRhUmVxdWVzdDtcbiAgICB9XG4gICAgdGhpcy5fc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UoKTpcbiAgICB8IHByb3RvUHViVjFNb2RlbHMwMDkuU2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2VcbiAgICB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlO1xuICB9XG4gIHNldCBzaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZShcbiAgICB2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAwOS5TaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZSB8IHVuZGVmaW5lZFxuICApIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fdGV4dCA9IHRoaXMuX2ZpbGUgPSB0aGlzLl9zdGlja2VyID0gdGhpcy5fbG9jYXRpb24gPSB0aGlzLl9saXZlTG9jYXRpb24gPSB0aGlzLl9wb2xsID0gdGhpcy5fZm9ybSA9IHRoaXMuX2J1dHRvbnMgPSB0aGlzLl9zaGFyZVVpZCA9IHRoaXMuX2Zvcm1SZXN1bHQgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCA9IHRoaXMuX2NhbGxFdmVudCA9IHRoaXMuX3RhYmxlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IE1lc3NhZ2VCeUNsaWVudC5UeXBlQ2FzZS5zaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZTtcbiAgICB9XG4gICAgdGhpcy5fc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UgPSB2YWx1ZTtcbiAgfVxuICBnZXQgY2FsbEV2ZW50KCk6IHByb3RvUHViVjFNb2RlbHMwMTMuQ2FsbEV2ZW50IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fY2FsbEV2ZW50O1xuICB9XG4gIHNldCBjYWxsRXZlbnQodmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMTMuQ2FsbEV2ZW50IHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3RleHQgPSB0aGlzLl9maWxlID0gdGhpcy5fc3RpY2tlciA9IHRoaXMuX2xvY2F0aW9uID0gdGhpcy5fbGl2ZUxvY2F0aW9uID0gdGhpcy5fcG9sbCA9IHRoaXMuX2Zvcm0gPSB0aGlzLl9idXR0b25zID0gdGhpcy5fc2hhcmVVaWQgPSB0aGlzLl9mb3JtUmVzdWx0ID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZSA9IHRoaXMuX3RhYmxlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IE1lc3NhZ2VCeUNsaWVudC5UeXBlQ2FzZS5jYWxsRXZlbnQ7XG4gICAgfVxuICAgIHRoaXMuX2NhbGxFdmVudCA9IHZhbHVlO1xuICB9XG4gIGdldCB0YWJsZSgpOiBwcm90b1B1YlYxTW9kZWxzMDEwLlRhYmxlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdGFibGU7XG4gIH1cbiAgc2V0IHRhYmxlKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDEwLlRhYmxlIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3RleHQgPSB0aGlzLl9maWxlID0gdGhpcy5fc3RpY2tlciA9IHRoaXMuX2xvY2F0aW9uID0gdGhpcy5fbGl2ZUxvY2F0aW9uID0gdGhpcy5fcG9sbCA9IHRoaXMuX2Zvcm0gPSB0aGlzLl9idXR0b25zID0gdGhpcy5fc2hhcmVVaWQgPSB0aGlzLl9mb3JtUmVzdWx0ID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZSA9IHRoaXMuX2NhbGxFdmVudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBNZXNzYWdlQnlDbGllbnQuVHlwZUNhc2UudGFibGU7XG4gICAgfVxuICAgIHRoaXMuX3RhYmxlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgTWVzc2FnZUJ5Q2xpZW50LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IE1lc3NhZ2VCeUNsaWVudC5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhY2tldElkOiB0aGlzLnBhY2tldElkLFxuICAgICAgdG86IHRoaXMudG8gPyB0aGlzLnRvLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICByZXBseVRvSWQ6IHRoaXMucmVwbHlUb0lkLFxuICAgICAgZm9yd2FyZEZyb206IHRoaXMuZm9yd2FyZEZyb20gPyB0aGlzLmZvcndhcmRGcm9tLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBlbmNyeXB0ZWQ6IHRoaXMuZW5jcnlwdGVkLFxuICAgICAgdHRsOiB0aGlzLnR0bCxcbiAgICAgIHRocmVhZDogdGhpcy50aHJlYWQsXG4gICAgICBzaG91bGRCZVF1aWV0OiB0aGlzLnNob3VsZEJlUXVpZXQsXG4gICAgICBnZW5lcmF0ZWRCeTogdGhpcy5nZW5lcmF0ZWRCeSA/IHRoaXMuZ2VuZXJhdGVkQnkudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGlzTG9jYWxNZXNzYWdlOiB0aGlzLmlzTG9jYWxNZXNzYWdlLFxuICAgICAgdGV4dDogdGhpcy50ZXh0ID8gdGhpcy50ZXh0LnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBmaWxlOiB0aGlzLmZpbGUgPyB0aGlzLmZpbGUudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIHN0aWNrZXI6IHRoaXMuc3RpY2tlciA/IHRoaXMuc3RpY2tlci50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgbG9jYXRpb246IHRoaXMubG9jYXRpb24gPyB0aGlzLmxvY2F0aW9uLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBsaXZlTG9jYXRpb246IHRoaXMubGl2ZUxvY2F0aW9uXG4gICAgICAgID8gdGhpcy5saXZlTG9jYXRpb24udG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIHBvbGw6IHRoaXMucG9sbCA/IHRoaXMucG9sbC50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgZm9ybTogdGhpcy5mb3JtID8gdGhpcy5mb3JtLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBidXR0b25zOiB0aGlzLmJ1dHRvbnMgPyB0aGlzLmJ1dHRvbnMudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIHNoYXJlVWlkOiB0aGlzLnNoYXJlVWlkID8gdGhpcy5zaGFyZVVpZC50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgZm9ybVJlc3VsdDogdGhpcy5mb3JtUmVzdWx0ID8gdGhpcy5mb3JtUmVzdWx0LnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBzaGFyZVByaXZhdGVEYXRhUmVxdWVzdDogdGhpcy5zaGFyZVByaXZhdGVEYXRhUmVxdWVzdFxuICAgICAgICA/IHRoaXMuc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QudG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIHNoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlOiB0aGlzLnNoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlXG4gICAgICAgID8gdGhpcy5zaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZS50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgY2FsbEV2ZW50OiB0aGlzLmNhbGxFdmVudCA/IHRoaXMuY2FsbEV2ZW50LnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICB0YWJsZTogdGhpcy50YWJsZSA/IHRoaXMudGFibGUudG9PYmplY3QoKSA6IHVuZGVmaW5lZFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IE1lc3NhZ2VCeUNsaWVudC5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhY2tldElkOiB0aGlzLnBhY2tldElkLFxuICAgICAgdG86IHRoaXMudG8gPyB0aGlzLnRvLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIHJlcGx5VG9JZDogdGhpcy5yZXBseVRvSWQsXG4gICAgICBmb3J3YXJkRnJvbTogdGhpcy5mb3J3YXJkRnJvbVxuICAgICAgICA/IHRoaXMuZm9yd2FyZEZyb20udG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsLFxuICAgICAgZW5jcnlwdGVkOiB0aGlzLmVuY3J5cHRlZCxcbiAgICAgIHR0bDogdGhpcy50dGwsXG4gICAgICB0aHJlYWQ6IHRoaXMudGhyZWFkLFxuICAgICAgc2hvdWxkQmVRdWlldDogdGhpcy5zaG91bGRCZVF1aWV0LFxuICAgICAgZ2VuZXJhdGVkQnk6IHRoaXMuZ2VuZXJhdGVkQnlcbiAgICAgICAgPyB0aGlzLmdlbmVyYXRlZEJ5LnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbCxcbiAgICAgIGlzTG9jYWxNZXNzYWdlOiB0aGlzLmlzTG9jYWxNZXNzYWdlLFxuICAgICAgdGV4dDogdGhpcy50ZXh0ID8gdGhpcy50ZXh0LnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIGZpbGU6IHRoaXMuZmlsZSA/IHRoaXMuZmlsZS50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICBzdGlja2VyOiB0aGlzLnN0aWNrZXIgPyB0aGlzLnN0aWNrZXIudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgbG9jYXRpb246IHRoaXMubG9jYXRpb24gPyB0aGlzLmxvY2F0aW9uLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIGxpdmVMb2NhdGlvbjogdGhpcy5saXZlTG9jYXRpb25cbiAgICAgICAgPyB0aGlzLmxpdmVMb2NhdGlvbi50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICBwb2xsOiB0aGlzLnBvbGwgPyB0aGlzLnBvbGwudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgZm9ybTogdGhpcy5mb3JtID8gdGhpcy5mb3JtLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIGJ1dHRvbnM6IHRoaXMuYnV0dG9ucyA/IHRoaXMuYnV0dG9ucy50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICBzaGFyZVVpZDogdGhpcy5zaGFyZVVpZCA/IHRoaXMuc2hhcmVVaWQudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgZm9ybVJlc3VsdDogdGhpcy5mb3JtUmVzdWx0XG4gICAgICAgID8gdGhpcy5mb3JtUmVzdWx0LnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbCxcbiAgICAgIHNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0OiB0aGlzLnNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0XG4gICAgICAgID8gdGhpcy5zaGFyZVByaXZhdGVEYXRhUmVxdWVzdC50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICBzaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZTogdGhpcy5zaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZVxuICAgICAgICA/IHRoaXMuc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UudG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsLFxuICAgICAgY2FsbEV2ZW50OiB0aGlzLmNhbGxFdmVudCA/IHRoaXMuY2FsbEV2ZW50LnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIHRhYmxlOiB0aGlzLnRhYmxlID8gdGhpcy50YWJsZS50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGxcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIE1lc3NhZ2VCeUNsaWVudCB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgTWVzc2FnZUJ5Q2xpZW50XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBwYWNrZXRJZD86IHN0cmluZztcbiAgICB0bz86IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLkFzT2JqZWN0O1xuICAgIHJlcGx5VG9JZD86IHN0cmluZztcbiAgICBmb3J3YXJkRnJvbT86IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLkFzT2JqZWN0O1xuICAgIGVuY3J5cHRlZD86IGJvb2xlYW47XG4gICAgdHRsPzogbnVtYmVyO1xuICAgIHRocmVhZD86IHN0cmluZztcbiAgICBzaG91bGRCZVF1aWV0PzogYm9vbGVhbjtcbiAgICBnZW5lcmF0ZWRCeT86IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLkFzT2JqZWN0O1xuICAgIGlzTG9jYWxNZXNzYWdlPzogYm9vbGVhbjtcbiAgICB0ZXh0PzogVGV4dC5Bc09iamVjdDtcbiAgICBmaWxlPzogcHJvdG9QdWJWMU1vZGVsczAwMS5GaWxlLkFzT2JqZWN0O1xuICAgIHN0aWNrZXI/OiBwcm90b1B1YlYxTW9kZWxzMDA1LlN0aWNrZXIuQXNPYmplY3Q7XG4gICAgbG9jYXRpb24/OiBwcm90b1B1YlYxTW9kZWxzMDA2LkxvY2F0aW9uLkFzT2JqZWN0O1xuICAgIGxpdmVMb2NhdGlvbj86IHByb3RvUHViVjFNb2RlbHMwMDYuTGl2ZUxvY2F0aW9uLkFzT2JqZWN0O1xuICAgIHBvbGw/OiBwcm90b1B1YlYxTW9kZWxzMDExLlBvbGwuQXNPYmplY3Q7XG4gICAgZm9ybT86IHByb3RvUHViVjFNb2RlbHMwMTAuRm9ybS5Bc09iamVjdDtcbiAgICBidXR0b25zPzogcHJvdG9QdWJWMU1vZGVsczAxMC5CdXR0b25zLkFzT2JqZWN0O1xuICAgIHNoYXJlVWlkPzogU2hhcmVVaWQuQXNPYmplY3Q7XG4gICAgZm9ybVJlc3VsdD86IHByb3RvUHViVjFNb2RlbHMwMTAuRm9ybVJlc3VsdC5Bc09iamVjdDtcbiAgICBzaGFyZVByaXZhdGVEYXRhUmVxdWVzdD86IHByb3RvUHViVjFNb2RlbHMwMDkuU2hhcmVQcml2YXRlRGF0YVJlcXVlc3QuQXNPYmplY3Q7XG4gICAgc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2U/OiBwcm90b1B1YlYxTW9kZWxzMDA5LlNoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlLkFzT2JqZWN0O1xuICAgIGNhbGxFdmVudD86IHByb3RvUHViVjFNb2RlbHMwMTMuQ2FsbEV2ZW50LkFzT2JqZWN0O1xuICAgIHRhYmxlPzogcHJvdG9QdWJWMU1vZGVsczAxMC5UYWJsZS5Bc09iamVjdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBNZXNzYWdlQnlDbGllbnRcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHBhY2tldElkPzogc3RyaW5nO1xuICAgIHRvPzogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHJlcGx5VG9JZD86IHN0cmluZztcbiAgICBmb3J3YXJkRnJvbT86IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBlbmNyeXB0ZWQ/OiBib29sZWFuO1xuICAgIHR0bD86IG51bWJlcjtcbiAgICB0aHJlYWQ/OiBzdHJpbmc7XG4gICAgc2hvdWxkQmVRdWlldD86IGJvb2xlYW47XG4gICAgZ2VuZXJhdGVkQnk/OiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgaXNMb2NhbE1lc3NhZ2U/OiBib29sZWFuO1xuICAgIHRleHQ/OiBUZXh0LkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBmaWxlPzogcHJvdG9QdWJWMU1vZGVsczAwMS5GaWxlLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBzdGlja2VyPzogcHJvdG9QdWJWMU1vZGVsczAwNS5TdGlja2VyLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBsb2NhdGlvbj86IHByb3RvUHViVjFNb2RlbHMwMDYuTG9jYXRpb24uQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIGxpdmVMb2NhdGlvbj86IHByb3RvUHViVjFNb2RlbHMwMDYuTGl2ZUxvY2F0aW9uLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBwb2xsPzogcHJvdG9QdWJWMU1vZGVsczAxMS5Qb2xsLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBmb3JtPzogcHJvdG9QdWJWMU1vZGVsczAxMC5Gb3JtLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBidXR0b25zPzogcHJvdG9QdWJWMU1vZGVsczAxMC5CdXR0b25zLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBzaGFyZVVpZD86IFNoYXJlVWlkLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBmb3JtUmVzdWx0PzogcHJvdG9QdWJWMU1vZGVsczAxMC5Gb3JtUmVzdWx0LkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBzaGFyZVByaXZhdGVEYXRhUmVxdWVzdD86IHByb3RvUHViVjFNb2RlbHMwMDkuU2hhcmVQcml2YXRlRGF0YVJlcXVlc3QuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHNoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlPzogcHJvdG9QdWJWMU1vZGVsczAwOS5TaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZS5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgY2FsbEV2ZW50PzogcHJvdG9QdWJWMU1vZGVsczAxMy5DYWxsRXZlbnQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHRhYmxlPzogcHJvdG9QdWJWMU1vZGVsczAxMC5UYWJsZS5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gIH1cbiAgZXhwb3J0IGVudW0gVHlwZUNhc2Uge1xuICAgIG5vbmUgPSAwLFxuICAgIHRleHQgPSAxLFxuICAgIGZpbGUgPSAyLFxuICAgIHN0aWNrZXIgPSAzLFxuICAgIGxvY2F0aW9uID0gNCxcbiAgICBsaXZlTG9jYXRpb24gPSA1LFxuICAgIHBvbGwgPSA2LFxuICAgIGZvcm0gPSA3LFxuICAgIGJ1dHRvbnMgPSA4LFxuICAgIHNoYXJlVWlkID0gOSxcbiAgICBmb3JtUmVzdWx0ID0gMTAsXG4gICAgc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QgPSAxMSxcbiAgICBzaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZSA9IDEyLFxuICAgIGNhbGxFdmVudCA9IDEzLFxuICAgIHRhYmxlID0gMTRcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIHByb3RvLnB1Yi52MS5tb2RlbHMuTG9jYWxOZXR3b3JrRW1wdHlNZXNzYWdlXG4gKi9cbmV4cG9ydCBjbGFzcyBMb2NhbE5ldHdvcmtFbXB0eU1lc3NhZ2UgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdwcm90by5wdWIudjEubW9kZWxzLkxvY2FsTmV0d29ya0VtcHR5TWVzc2FnZSc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IExvY2FsTmV0d29ya0VtcHR5TWVzc2FnZSgpO1xuICAgIExvY2FsTmV0d29ya0VtcHR5TWVzc2FnZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IExvY2FsTmV0d29ya0VtcHR5TWVzc2FnZSkge1xuICAgIF9pbnN0YW5jZS50byA9IF9pbnN0YW5jZS50byB8fCB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBMb2NhbE5ldHdvcmtFbXB0eU1lc3NhZ2UsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgX2luc3RhbmNlLnRvID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS50byxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBMb2NhbE5ldHdvcmtFbXB0eU1lc3NhZ2UucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBMb2NhbE5ldHdvcmtFbXB0eU1lc3NhZ2UsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UudG8pIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA2LFxuICAgICAgICBfaW5zdGFuY2UudG8gYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF90bz86IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgTG9jYWxOZXR3b3JrRW1wdHlNZXNzYWdlIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPExvY2FsTmV0d29ya0VtcHR5TWVzc2FnZS5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy50byA9IF92YWx1ZS50byA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZChfdmFsdWUudG8pIDogdW5kZWZpbmVkO1xuICAgIExvY2FsTmV0d29ya0VtcHR5TWVzc2FnZS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHRvKCk6IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdG87XG4gIH1cbiAgc2V0IHRvKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZCB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3RvID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgTG9jYWxOZXR3b3JrRW1wdHlNZXNzYWdlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IExvY2FsTmV0d29ya0VtcHR5TWVzc2FnZS5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRvOiB0aGlzLnRvID8gdGhpcy50by50b09iamVjdCgpIDogdW5kZWZpbmVkXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogTG9jYWxOZXR3b3JrRW1wdHlNZXNzYWdlLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgdG86IHRoaXMudG8gPyB0aGlzLnRvLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbFxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgTG9jYWxOZXR3b3JrRW1wdHlNZXNzYWdlIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBMb2NhbE5ldHdvcmtFbXB0eU1lc3NhZ2VcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIHRvPzogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuQXNPYmplY3Q7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgTG9jYWxOZXR3b3JrRW1wdHlNZXNzYWdlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICB0bz86IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIHByb3RvLnB1Yi52MS5tb2RlbHMuTWVzc2FnZUJ5Qm90XG4gKi9cbmV4cG9ydCBjbGFzcyBNZXNzYWdlQnlCb3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdwcm90by5wdWIudjEubW9kZWxzLk1lc3NhZ2VCeUJvdCc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IE1lc3NhZ2VCeUJvdCgpO1xuICAgIE1lc3NhZ2VCeUJvdC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IE1lc3NhZ2VCeUJvdCkge1xuICAgIF9pbnN0YW5jZS5wYWNrZXRJZCA9IF9pbnN0YW5jZS5wYWNrZXRJZCB8fCAnJztcbiAgICBfaW5zdGFuY2UuZnJvbSA9IF9pbnN0YW5jZS5mcm9tIHx8IHVuZGVmaW5lZDtcbiAgICBfaW5zdGFuY2UudG8gPSBfaW5zdGFuY2UudG8gfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5yZXBseVRvSWQgPSBfaW5zdGFuY2UucmVwbHlUb0lkIHx8ICcwJztcbiAgICBfaW5zdGFuY2UuZm9yd2FyZEZyb20gPSBfaW5zdGFuY2UuZm9yd2FyZEZyb20gfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5lbmNyeXB0ZWQgPSBfaW5zdGFuY2UuZW5jcnlwdGVkIHx8IGZhbHNlO1xuICAgIF9pbnN0YW5jZS50dGwgPSBfaW5zdGFuY2UudHRsIHx8IDA7XG4gICAgX2luc3RhbmNlLnRocmVhZCA9IF9pbnN0YW5jZS50aHJlYWQgfHwgJzAnO1xuICAgIF9pbnN0YW5jZS5zaG91bGRCZVF1aWV0ID0gX2luc3RhbmNlLnNob3VsZEJlUXVpZXQgfHwgZmFsc2U7XG4gICAgX2luc3RhbmNlLm1lc3NhZ2VNYXJrdXAgPSBfaW5zdGFuY2UubWVzc2FnZU1hcmt1cCB8fCB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBNZXNzYWdlQnlCb3QsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLnBhY2tldElkID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBfaW5zdGFuY2UuZnJvbSA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuZnJvbSxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICBfaW5zdGFuY2UudG8gPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLnRvLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA3OlxuICAgICAgICAgIF9pbnN0YW5jZS5yZXBseVRvSWQgPSBfcmVhZGVyLnJlYWRJbnQ2NFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgX2luc3RhbmNlLmZvcndhcmRGcm9tID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5mb3J3YXJkRnJvbSxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgX2luc3RhbmNlLmVuY3J5cHRlZCA9IF9yZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyMzpcbiAgICAgICAgICBfaW5zdGFuY2UudHRsID0gX3JlYWRlci5yZWFkSW50MzIoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyODpcbiAgICAgICAgICBfaW5zdGFuY2UudGhyZWFkID0gX3JlYWRlci5yZWFkSW50NjRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOTpcbiAgICAgICAgICBfaW5zdGFuY2Uuc2hvdWxkQmVRdWlldCA9IF9yZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzNDpcbiAgICAgICAgICBfaW5zdGFuY2UubWVzc2FnZU1hcmt1cCA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDE0Lk1lc3NhZ2VNYXJrdXAoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLm1lc3NhZ2VNYXJrdXAsXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDE0Lk1lc3NhZ2VNYXJrdXAuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICBfaW5zdGFuY2UudGV4dCA9IG5ldyBUZXh0KCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShfaW5zdGFuY2UudGV4dCwgVGV4dC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgIF9pbnN0YW5jZS5maWxlID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDEuRmlsZSgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuZmlsZSxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDEuRmlsZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgIF9pbnN0YW5jZS5zdGlja2VyID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDUuU3RpY2tlcigpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2Uuc3RpY2tlcixcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDUuU3RpY2tlci5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE0OlxuICAgICAgICAgIF9pbnN0YW5jZS5sb2NhdGlvbiA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDA2LkxvY2F0aW9uKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5sb2NhdGlvbixcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDYuTG9jYXRpb24uZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxODpcbiAgICAgICAgICBfaW5zdGFuY2UuZm9ybSA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDEwLkZvcm0oKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmZvcm0sXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDEwLkZvcm0uZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyMDpcbiAgICAgICAgICBfaW5zdGFuY2UuYnV0dG9ucyA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDEwLkJ1dHRvbnMoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmJ1dHRvbnMsXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDEwLkJ1dHRvbnMuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyMTpcbiAgICAgICAgICBfaW5zdGFuY2Uuc2hhcmVVaWQgPSBuZXcgU2hhcmVVaWQoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLnNoYXJlVWlkLFxuICAgICAgICAgICAgU2hhcmVVaWQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyNjpcbiAgICAgICAgICBfaW5zdGFuY2Uuc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QgPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAwOS5TaGFyZVByaXZhdGVEYXRhUmVxdWVzdCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2Uuc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QsXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDA5LlNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0XG4gICAgICAgICAgICAgIC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE5OlxuICAgICAgICAgIF9pbnN0YW5jZS5ib3RTcGVjaWZpY1BlcnNpc3RlbnRFdmVudCA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDA4LkJvdFNwZWNpZmljUGVyc2lzdGVudEV2ZW50KCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5ib3RTcGVjaWZpY1BlcnNpc3RlbnRFdmVudCxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDguQm90U3BlY2lmaWNQZXJzaXN0ZW50RXZlbnRcbiAgICAgICAgICAgICAgLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzI6XG4gICAgICAgICAgX2luc3RhbmNlLnRhYmxlID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMTAuVGFibGUoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLnRhYmxlLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxMC5UYWJsZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgTWVzc2FnZUJ5Qm90LnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogTWVzc2FnZUJ5Qm90LFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLnBhY2tldElkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS5wYWNrZXRJZCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZnJvbSkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDUsXG4gICAgICAgIF9pbnN0YW5jZS5mcm9tIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UudG8pIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA2LFxuICAgICAgICBfaW5zdGFuY2UudG8gYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5yZXBseVRvSWQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQ2NFN0cmluZyg3LCBfaW5zdGFuY2UucmVwbHlUb0lkKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5mb3J3YXJkRnJvbSkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDgsXG4gICAgICAgIF9pbnN0YW5jZS5mb3J3YXJkRnJvbSBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmVuY3J5cHRlZCkge1xuICAgICAgX3dyaXRlci53cml0ZUJvb2woMTAsIF9pbnN0YW5jZS5lbmNyeXB0ZWQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnR0bCkge1xuICAgICAgX3dyaXRlci53cml0ZUludDMyKDIzLCBfaW5zdGFuY2UudHRsKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS50aHJlYWQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQ2NFN0cmluZygyOCwgX2luc3RhbmNlLnRocmVhZCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uuc2hvdWxkQmVRdWlldCkge1xuICAgICAgX3dyaXRlci53cml0ZUJvb2woMjksIF9pbnN0YW5jZS5zaG91bGRCZVF1aWV0KTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5tZXNzYWdlTWFya3VwKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMzQsXG4gICAgICAgIF9pbnN0YW5jZS5tZXNzYWdlTWFya3VwIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxNC5NZXNzYWdlTWFya3VwLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnRleHQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAxMSxcbiAgICAgICAgX2luc3RhbmNlLnRleHQgYXMgYW55LFxuICAgICAgICBUZXh0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmZpbGUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAxMixcbiAgICAgICAgX2luc3RhbmNlLmZpbGUgYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAxLkZpbGUuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uuc3RpY2tlcikge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDEzLFxuICAgICAgICBfaW5zdGFuY2Uuc3RpY2tlciBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDUuU3RpY2tlci5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5sb2NhdGlvbikge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDE0LFxuICAgICAgICBfaW5zdGFuY2UubG9jYXRpb24gYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDA2LkxvY2F0aW9uLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmZvcm0pIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAxOCxcbiAgICAgICAgX2luc3RhbmNlLmZvcm0gYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDEwLkZvcm0uc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuYnV0dG9ucykge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDIwLFxuICAgICAgICBfaW5zdGFuY2UuYnV0dG9ucyBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMTAuQnV0dG9ucy5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5zaGFyZVVpZCkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDIxLFxuICAgICAgICBfaW5zdGFuY2Uuc2hhcmVVaWQgYXMgYW55LFxuICAgICAgICBTaGFyZVVpZC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDI2LFxuICAgICAgICBfaW5zdGFuY2Uuc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QgYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDA5LlNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmJvdFNwZWNpZmljUGVyc2lzdGVudEV2ZW50KSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMTksXG4gICAgICAgIF9pbnN0YW5jZS5ib3RTcGVjaWZpY1BlcnNpc3RlbnRFdmVudCBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDguQm90U3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UudGFibGUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAzMixcbiAgICAgICAgX2luc3RhbmNlLnRhYmxlIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxMC5UYWJsZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9wYWNrZXRJZD86IHN0cmluZztcbiAgcHJpdmF0ZSBfZnJvbT86IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkO1xuICBwcml2YXRlIF90bz86IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkO1xuICBwcml2YXRlIF9yZXBseVRvSWQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2ZvcndhcmRGcm9tPzogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQ7XG4gIHByaXZhdGUgX2VuY3J5cHRlZD86IGJvb2xlYW47XG4gIHByaXZhdGUgX3R0bD86IG51bWJlcjtcbiAgcHJpdmF0ZSBfdGhyZWFkPzogc3RyaW5nO1xuICBwcml2YXRlIF9zaG91bGRCZVF1aWV0PzogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfbWVzc2FnZU1hcmt1cD86IHByb3RvUHViVjFNb2RlbHMwMTQuTWVzc2FnZU1hcmt1cDtcbiAgcHJpdmF0ZSBfdGV4dD86IFRleHQ7XG4gIHByaXZhdGUgX2ZpbGU/OiBwcm90b1B1YlYxTW9kZWxzMDAxLkZpbGU7XG4gIHByaXZhdGUgX3N0aWNrZXI/OiBwcm90b1B1YlYxTW9kZWxzMDA1LlN0aWNrZXI7XG4gIHByaXZhdGUgX2xvY2F0aW9uPzogcHJvdG9QdWJWMU1vZGVsczAwNi5Mb2NhdGlvbjtcbiAgcHJpdmF0ZSBfZm9ybT86IHByb3RvUHViVjFNb2RlbHMwMTAuRm9ybTtcbiAgcHJpdmF0ZSBfYnV0dG9ucz86IHByb3RvUHViVjFNb2RlbHMwMTAuQnV0dG9ucztcbiAgcHJpdmF0ZSBfc2hhcmVVaWQ/OiBTaGFyZVVpZDtcbiAgcHJpdmF0ZSBfc2hhcmVQcml2YXRlRGF0YVJlcXVlc3Q/OiBwcm90b1B1YlYxTW9kZWxzMDA5LlNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0O1xuICBwcml2YXRlIF9ib3RTcGVjaWZpY1BlcnNpc3RlbnRFdmVudD86IHByb3RvUHViVjFNb2RlbHMwMDguQm90U3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQ7XG4gIHByaXZhdGUgX3RhYmxlPzogcHJvdG9QdWJWMU1vZGVsczAxMC5UYWJsZTtcblxuICBwcml2YXRlIF90eXBlOiBNZXNzYWdlQnlCb3QuVHlwZUNhc2UgPSBNZXNzYWdlQnlCb3QuVHlwZUNhc2Uubm9uZTtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIE1lc3NhZ2VCeUJvdCB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxNZXNzYWdlQnlCb3QuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMucGFja2V0SWQgPSBfdmFsdWUucGFja2V0SWQ7XG4gICAgdGhpcy5mcm9tID0gX3ZhbHVlLmZyb21cbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkKF92YWx1ZS5mcm9tKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy50byA9IF92YWx1ZS50byA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZChfdmFsdWUudG8pIDogdW5kZWZpbmVkO1xuICAgIHRoaXMucmVwbHlUb0lkID0gX3ZhbHVlLnJlcGx5VG9JZDtcbiAgICB0aGlzLmZvcndhcmRGcm9tID0gX3ZhbHVlLmZvcndhcmRGcm9tXG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZChfdmFsdWUuZm9yd2FyZEZyb20pXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmVuY3J5cHRlZCA9IF92YWx1ZS5lbmNyeXB0ZWQ7XG4gICAgdGhpcy50dGwgPSBfdmFsdWUudHRsO1xuICAgIHRoaXMudGhyZWFkID0gX3ZhbHVlLnRocmVhZDtcbiAgICB0aGlzLnNob3VsZEJlUXVpZXQgPSBfdmFsdWUuc2hvdWxkQmVRdWlldDtcbiAgICB0aGlzLm1lc3NhZ2VNYXJrdXAgPSBfdmFsdWUubWVzc2FnZU1hcmt1cFxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAxNC5NZXNzYWdlTWFya3VwKF92YWx1ZS5tZXNzYWdlTWFya3VwKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy50ZXh0ID0gX3ZhbHVlLnRleHQgPyBuZXcgVGV4dChfdmFsdWUudGV4dCkgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5maWxlID0gX3ZhbHVlLmZpbGVcbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMDEuRmlsZShfdmFsdWUuZmlsZSlcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuc3RpY2tlciA9IF92YWx1ZS5zdGlja2VyXG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDA1LlN0aWNrZXIoX3ZhbHVlLnN0aWNrZXIpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmxvY2F0aW9uID0gX3ZhbHVlLmxvY2F0aW9uXG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDA2LkxvY2F0aW9uKF92YWx1ZS5sb2NhdGlvbilcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuZm9ybSA9IF92YWx1ZS5mb3JtXG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDEwLkZvcm0oX3ZhbHVlLmZvcm0pXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmJ1dHRvbnMgPSBfdmFsdWUuYnV0dG9uc1xuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAxMC5CdXR0b25zKF92YWx1ZS5idXR0b25zKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5zaGFyZVVpZCA9IF92YWx1ZS5zaGFyZVVpZCA/IG5ldyBTaGFyZVVpZChfdmFsdWUuc2hhcmVVaWQpIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QgPSBfdmFsdWUuc2hhcmVQcml2YXRlRGF0YVJlcXVlc3RcbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMDkuU2hhcmVQcml2YXRlRGF0YVJlcXVlc3QoXG4gICAgICAgICAgX3ZhbHVlLnNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0XG4gICAgICAgIClcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuYm90U3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQgPSBfdmFsdWUuYm90U3BlY2lmaWNQZXJzaXN0ZW50RXZlbnRcbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMDguQm90U3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQoXG4gICAgICAgICAgX3ZhbHVlLmJvdFNwZWNpZmljUGVyc2lzdGVudEV2ZW50XG4gICAgICAgIClcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMudGFibGUgPSBfdmFsdWUudGFibGVcbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMTAuVGFibGUoX3ZhbHVlLnRhYmxlKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgTWVzc2FnZUJ5Qm90LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgcGFja2V0SWQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcGFja2V0SWQ7XG4gIH1cbiAgc2V0IHBhY2tldElkKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9wYWNrZXRJZCA9IHZhbHVlO1xuICB9XG4gIGdldCBmcm9tKCk6IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZnJvbTtcbiAgfVxuICBzZXQgZnJvbSh2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9mcm9tID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHRvKCk6IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdG87XG4gIH1cbiAgc2V0IHRvKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZCB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3RvID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHJlcGx5VG9JZCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9yZXBseVRvSWQ7XG4gIH1cbiAgc2V0IHJlcGx5VG9JZCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcmVwbHlUb0lkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGZvcndhcmRGcm9tKCk6IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZm9yd2FyZEZyb207XG4gIH1cbiAgc2V0IGZvcndhcmRGcm9tKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZCB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2ZvcndhcmRGcm9tID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGVuY3J5cHRlZCgpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZW5jcnlwdGVkO1xuICB9XG4gIHNldCBlbmNyeXB0ZWQodmFsdWU6IGJvb2xlYW4gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9lbmNyeXB0ZWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdHRsKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3R0bDtcbiAgfVxuICBzZXQgdHRsKHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl90dGwgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdGhyZWFkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3RocmVhZDtcbiAgfVxuICBzZXQgdGhyZWFkKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl90aHJlYWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc2hvdWxkQmVRdWlldCgpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvdWxkQmVRdWlldDtcbiAgfVxuICBzZXQgc2hvdWxkQmVRdWlldCh2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3Nob3VsZEJlUXVpZXQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbWVzc2FnZU1hcmt1cCgpOiBwcm90b1B1YlYxTW9kZWxzMDE0Lk1lc3NhZ2VNYXJrdXAgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9tZXNzYWdlTWFya3VwO1xuICB9XG4gIHNldCBtZXNzYWdlTWFya3VwKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDE0Lk1lc3NhZ2VNYXJrdXAgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9tZXNzYWdlTWFya3VwID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHRleHQoKTogVGV4dCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3RleHQ7XG4gIH1cbiAgc2V0IHRleHQodmFsdWU6IFRleHQgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fZmlsZSA9IHRoaXMuX3N0aWNrZXIgPSB0aGlzLl9sb2NhdGlvbiA9IHRoaXMuX2Zvcm0gPSB0aGlzLl9idXR0b25zID0gdGhpcy5fc2hhcmVVaWQgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCA9IHRoaXMuX2JvdFNwZWNpZmljUGVyc2lzdGVudEV2ZW50ID0gdGhpcy5fdGFibGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gTWVzc2FnZUJ5Qm90LlR5cGVDYXNlLnRleHQ7XG4gICAgfVxuICAgIHRoaXMuX3RleHQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZmlsZSgpOiBwcm90b1B1YlYxTW9kZWxzMDAxLkZpbGUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9maWxlO1xuICB9XG4gIHNldCBmaWxlKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDAxLkZpbGUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fdGV4dCA9IHRoaXMuX3N0aWNrZXIgPSB0aGlzLl9sb2NhdGlvbiA9IHRoaXMuX2Zvcm0gPSB0aGlzLl9idXR0b25zID0gdGhpcy5fc2hhcmVVaWQgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCA9IHRoaXMuX2JvdFNwZWNpZmljUGVyc2lzdGVudEV2ZW50ID0gdGhpcy5fdGFibGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gTWVzc2FnZUJ5Qm90LlR5cGVDYXNlLmZpbGU7XG4gICAgfVxuICAgIHRoaXMuX2ZpbGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc3RpY2tlcigpOiBwcm90b1B1YlYxTW9kZWxzMDA1LlN0aWNrZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zdGlja2VyO1xuICB9XG4gIHNldCBzdGlja2VyKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDA1LlN0aWNrZXIgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fdGV4dCA9IHRoaXMuX2ZpbGUgPSB0aGlzLl9sb2NhdGlvbiA9IHRoaXMuX2Zvcm0gPSB0aGlzLl9idXR0b25zID0gdGhpcy5fc2hhcmVVaWQgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCA9IHRoaXMuX2JvdFNwZWNpZmljUGVyc2lzdGVudEV2ZW50ID0gdGhpcy5fdGFibGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gTWVzc2FnZUJ5Qm90LlR5cGVDYXNlLnN0aWNrZXI7XG4gICAgfVxuICAgIHRoaXMuX3N0aWNrZXIgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbG9jYXRpb24oKTogcHJvdG9QdWJWMU1vZGVsczAwNi5Mb2NhdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2xvY2F0aW9uO1xuICB9XG4gIHNldCBsb2NhdGlvbih2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAwNi5Mb2NhdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl90ZXh0ID0gdGhpcy5fZmlsZSA9IHRoaXMuX3N0aWNrZXIgPSB0aGlzLl9mb3JtID0gdGhpcy5fYnV0dG9ucyA9IHRoaXMuX3NoYXJlVWlkID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QgPSB0aGlzLl9ib3RTcGVjaWZpY1BlcnNpc3RlbnRFdmVudCA9IHRoaXMuX3RhYmxlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IE1lc3NhZ2VCeUJvdC5UeXBlQ2FzZS5sb2NhdGlvbjtcbiAgICB9XG4gICAgdGhpcy5fbG9jYXRpb24gPSB2YWx1ZTtcbiAgfVxuICBnZXQgZm9ybSgpOiBwcm90b1B1YlYxTW9kZWxzMDEwLkZvcm0gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9mb3JtO1xuICB9XG4gIHNldCBmb3JtKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDEwLkZvcm0gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fdGV4dCA9IHRoaXMuX2ZpbGUgPSB0aGlzLl9zdGlja2VyID0gdGhpcy5fbG9jYXRpb24gPSB0aGlzLl9idXR0b25zID0gdGhpcy5fc2hhcmVVaWQgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCA9IHRoaXMuX2JvdFNwZWNpZmljUGVyc2lzdGVudEV2ZW50ID0gdGhpcy5fdGFibGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gTWVzc2FnZUJ5Qm90LlR5cGVDYXNlLmZvcm07XG4gICAgfVxuICAgIHRoaXMuX2Zvcm0gPSB2YWx1ZTtcbiAgfVxuICBnZXQgYnV0dG9ucygpOiBwcm90b1B1YlYxTW9kZWxzMDEwLkJ1dHRvbnMgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9idXR0b25zO1xuICB9XG4gIHNldCBidXR0b25zKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDEwLkJ1dHRvbnMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fdGV4dCA9IHRoaXMuX2ZpbGUgPSB0aGlzLl9zdGlja2VyID0gdGhpcy5fbG9jYXRpb24gPSB0aGlzLl9mb3JtID0gdGhpcy5fc2hhcmVVaWQgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCA9IHRoaXMuX2JvdFNwZWNpZmljUGVyc2lzdGVudEV2ZW50ID0gdGhpcy5fdGFibGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gTWVzc2FnZUJ5Qm90LlR5cGVDYXNlLmJ1dHRvbnM7XG4gICAgfVxuICAgIHRoaXMuX2J1dHRvbnMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc2hhcmVVaWQoKTogU2hhcmVVaWQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zaGFyZVVpZDtcbiAgfVxuICBzZXQgc2hhcmVVaWQodmFsdWU6IFNoYXJlVWlkIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3RleHQgPSB0aGlzLl9maWxlID0gdGhpcy5fc3RpY2tlciA9IHRoaXMuX2xvY2F0aW9uID0gdGhpcy5fZm9ybSA9IHRoaXMuX2J1dHRvbnMgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCA9IHRoaXMuX2JvdFNwZWNpZmljUGVyc2lzdGVudEV2ZW50ID0gdGhpcy5fdGFibGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gTWVzc2FnZUJ5Qm90LlR5cGVDYXNlLnNoYXJlVWlkO1xuICAgIH1cbiAgICB0aGlzLl9zaGFyZVVpZCA9IHZhbHVlO1xuICB9XG4gIGdldCBzaGFyZVByaXZhdGVEYXRhUmVxdWVzdCgpOlxuICAgIHwgcHJvdG9QdWJWMU1vZGVsczAwOS5TaGFyZVByaXZhdGVEYXRhUmVxdWVzdFxuICAgIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc2hhcmVQcml2YXRlRGF0YVJlcXVlc3Q7XG4gIH1cbiAgc2V0IHNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0KFxuICAgIHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDA5LlNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0IHwgdW5kZWZpbmVkXG4gICkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl90ZXh0ID0gdGhpcy5fZmlsZSA9IHRoaXMuX3N0aWNrZXIgPSB0aGlzLl9sb2NhdGlvbiA9IHRoaXMuX2Zvcm0gPSB0aGlzLl9idXR0b25zID0gdGhpcy5fc2hhcmVVaWQgPSB0aGlzLl9ib3RTcGVjaWZpY1BlcnNpc3RlbnRFdmVudCA9IHRoaXMuX3RhYmxlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IE1lc3NhZ2VCeUJvdC5UeXBlQ2FzZS5zaGFyZVByaXZhdGVEYXRhUmVxdWVzdDtcbiAgICB9XG4gICAgdGhpcy5fc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QgPSB2YWx1ZTtcbiAgfVxuICBnZXQgYm90U3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQoKTpcbiAgICB8IHByb3RvUHViVjFNb2RlbHMwMDguQm90U3BlY2lmaWNQZXJzaXN0ZW50RXZlbnRcbiAgICB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2JvdFNwZWNpZmljUGVyc2lzdGVudEV2ZW50O1xuICB9XG4gIHNldCBib3RTcGVjaWZpY1BlcnNpc3RlbnRFdmVudChcbiAgICB2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAwOC5Cb3RTcGVjaWZpY1BlcnNpc3RlbnRFdmVudCB8IHVuZGVmaW5lZFxuICApIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fdGV4dCA9IHRoaXMuX2ZpbGUgPSB0aGlzLl9zdGlja2VyID0gdGhpcy5fbG9jYXRpb24gPSB0aGlzLl9mb3JtID0gdGhpcy5fYnV0dG9ucyA9IHRoaXMuX3NoYXJlVWlkID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QgPSB0aGlzLl90YWJsZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBNZXNzYWdlQnlCb3QuVHlwZUNhc2UuYm90U3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQ7XG4gICAgfVxuICAgIHRoaXMuX2JvdFNwZWNpZmljUGVyc2lzdGVudEV2ZW50ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHRhYmxlKCk6IHByb3RvUHViVjFNb2RlbHMwMTAuVGFibGUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90YWJsZTtcbiAgfVxuICBzZXQgdGFibGUodmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMTAuVGFibGUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fdGV4dCA9IHRoaXMuX2ZpbGUgPSB0aGlzLl9zdGlja2VyID0gdGhpcy5fbG9jYXRpb24gPSB0aGlzLl9mb3JtID0gdGhpcy5fYnV0dG9ucyA9IHRoaXMuX3NoYXJlVWlkID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QgPSB0aGlzLl9ib3RTcGVjaWZpY1BlcnNpc3RlbnRFdmVudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBNZXNzYWdlQnlCb3QuVHlwZUNhc2UudGFibGU7XG4gICAgfVxuICAgIHRoaXMuX3RhYmxlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgTWVzc2FnZUJ5Qm90LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IE1lc3NhZ2VCeUJvdC5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhY2tldElkOiB0aGlzLnBhY2tldElkLFxuICAgICAgZnJvbTogdGhpcy5mcm9tID8gdGhpcy5mcm9tLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICB0bzogdGhpcy50byA/IHRoaXMudG8udG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIHJlcGx5VG9JZDogdGhpcy5yZXBseVRvSWQsXG4gICAgICBmb3J3YXJkRnJvbTogdGhpcy5mb3J3YXJkRnJvbSA/IHRoaXMuZm9yd2FyZEZyb20udG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGVuY3J5cHRlZDogdGhpcy5lbmNyeXB0ZWQsXG4gICAgICB0dGw6IHRoaXMudHRsLFxuICAgICAgdGhyZWFkOiB0aGlzLnRocmVhZCxcbiAgICAgIHNob3VsZEJlUXVpZXQ6IHRoaXMuc2hvdWxkQmVRdWlldCxcbiAgICAgIG1lc3NhZ2VNYXJrdXA6IHRoaXMubWVzc2FnZU1hcmt1cFxuICAgICAgICA/IHRoaXMubWVzc2FnZU1hcmt1cC50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgdGV4dDogdGhpcy50ZXh0ID8gdGhpcy50ZXh0LnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBmaWxlOiB0aGlzLmZpbGUgPyB0aGlzLmZpbGUudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIHN0aWNrZXI6IHRoaXMuc3RpY2tlciA/IHRoaXMuc3RpY2tlci50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgbG9jYXRpb246IHRoaXMubG9jYXRpb24gPyB0aGlzLmxvY2F0aW9uLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBmb3JtOiB0aGlzLmZvcm0gPyB0aGlzLmZvcm0udG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGJ1dHRvbnM6IHRoaXMuYnV0dG9ucyA/IHRoaXMuYnV0dG9ucy50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgc2hhcmVVaWQ6IHRoaXMuc2hhcmVVaWQgPyB0aGlzLnNoYXJlVWlkLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBzaGFyZVByaXZhdGVEYXRhUmVxdWVzdDogdGhpcy5zaGFyZVByaXZhdGVEYXRhUmVxdWVzdFxuICAgICAgICA/IHRoaXMuc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QudG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIGJvdFNwZWNpZmljUGVyc2lzdGVudEV2ZW50OiB0aGlzLmJvdFNwZWNpZmljUGVyc2lzdGVudEV2ZW50XG4gICAgICAgID8gdGhpcy5ib3RTcGVjaWZpY1BlcnNpc3RlbnRFdmVudC50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgdGFibGU6IHRoaXMudGFibGUgPyB0aGlzLnRhYmxlLnRvT2JqZWN0KCkgOiB1bmRlZmluZWRcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBNZXNzYWdlQnlCb3QuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBwYWNrZXRJZDogdGhpcy5wYWNrZXRJZCxcbiAgICAgIGZyb206IHRoaXMuZnJvbSA/IHRoaXMuZnJvbS50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICB0bzogdGhpcy50byA/IHRoaXMudG8udG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgcmVwbHlUb0lkOiB0aGlzLnJlcGx5VG9JZCxcbiAgICAgIGZvcndhcmRGcm9tOiB0aGlzLmZvcndhcmRGcm9tXG4gICAgICAgID8gdGhpcy5mb3J3YXJkRnJvbS50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICBlbmNyeXB0ZWQ6IHRoaXMuZW5jcnlwdGVkLFxuICAgICAgdHRsOiB0aGlzLnR0bCxcbiAgICAgIHRocmVhZDogdGhpcy50aHJlYWQsXG4gICAgICBzaG91bGRCZVF1aWV0OiB0aGlzLnNob3VsZEJlUXVpZXQsXG4gICAgICBtZXNzYWdlTWFya3VwOiB0aGlzLm1lc3NhZ2VNYXJrdXBcbiAgICAgICAgPyB0aGlzLm1lc3NhZ2VNYXJrdXAudG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsLFxuICAgICAgdGV4dDogdGhpcy50ZXh0ID8gdGhpcy50ZXh0LnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIGZpbGU6IHRoaXMuZmlsZSA/IHRoaXMuZmlsZS50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICBzdGlja2VyOiB0aGlzLnN0aWNrZXIgPyB0aGlzLnN0aWNrZXIudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgbG9jYXRpb246IHRoaXMubG9jYXRpb24gPyB0aGlzLmxvY2F0aW9uLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIGZvcm06IHRoaXMuZm9ybSA/IHRoaXMuZm9ybS50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICBidXR0b25zOiB0aGlzLmJ1dHRvbnMgPyB0aGlzLmJ1dHRvbnMudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgc2hhcmVVaWQ6IHRoaXMuc2hhcmVVaWQgPyB0aGlzLnNoYXJlVWlkLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIHNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0OiB0aGlzLnNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0XG4gICAgICAgID8gdGhpcy5zaGFyZVByaXZhdGVEYXRhUmVxdWVzdC50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICBib3RTcGVjaWZpY1BlcnNpc3RlbnRFdmVudDogdGhpcy5ib3RTcGVjaWZpY1BlcnNpc3RlbnRFdmVudFxuICAgICAgICA/IHRoaXMuYm90U3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQudG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsLFxuICAgICAgdGFibGU6IHRoaXMudGFibGUgPyB0aGlzLnRhYmxlLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbFxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgTWVzc2FnZUJ5Qm90IHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBNZXNzYWdlQnlCb3RcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIHBhY2tldElkPzogc3RyaW5nO1xuICAgIGZyb20/OiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5Bc09iamVjdDtcbiAgICB0bz86IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLkFzT2JqZWN0O1xuICAgIHJlcGx5VG9JZD86IHN0cmluZztcbiAgICBmb3J3YXJkRnJvbT86IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLkFzT2JqZWN0O1xuICAgIGVuY3J5cHRlZD86IGJvb2xlYW47XG4gICAgdHRsPzogbnVtYmVyO1xuICAgIHRocmVhZD86IHN0cmluZztcbiAgICBzaG91bGRCZVF1aWV0PzogYm9vbGVhbjtcbiAgICBtZXNzYWdlTWFya3VwPzogcHJvdG9QdWJWMU1vZGVsczAxNC5NZXNzYWdlTWFya3VwLkFzT2JqZWN0O1xuICAgIHRleHQ/OiBUZXh0LkFzT2JqZWN0O1xuICAgIGZpbGU/OiBwcm90b1B1YlYxTW9kZWxzMDAxLkZpbGUuQXNPYmplY3Q7XG4gICAgc3RpY2tlcj86IHByb3RvUHViVjFNb2RlbHMwMDUuU3RpY2tlci5Bc09iamVjdDtcbiAgICBsb2NhdGlvbj86IHByb3RvUHViVjFNb2RlbHMwMDYuTG9jYXRpb24uQXNPYmplY3Q7XG4gICAgZm9ybT86IHByb3RvUHViVjFNb2RlbHMwMTAuRm9ybS5Bc09iamVjdDtcbiAgICBidXR0b25zPzogcHJvdG9QdWJWMU1vZGVsczAxMC5CdXR0b25zLkFzT2JqZWN0O1xuICAgIHNoYXJlVWlkPzogU2hhcmVVaWQuQXNPYmplY3Q7XG4gICAgc2hhcmVQcml2YXRlRGF0YVJlcXVlc3Q/OiBwcm90b1B1YlYxTW9kZWxzMDA5LlNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0LkFzT2JqZWN0O1xuICAgIGJvdFNwZWNpZmljUGVyc2lzdGVudEV2ZW50PzogcHJvdG9QdWJWMU1vZGVsczAwOC5Cb3RTcGVjaWZpY1BlcnNpc3RlbnRFdmVudC5Bc09iamVjdDtcbiAgICB0YWJsZT86IHByb3RvUHViVjFNb2RlbHMwMTAuVGFibGUuQXNPYmplY3Q7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgTWVzc2FnZUJ5Qm90XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBwYWNrZXRJZD86IHN0cmluZztcbiAgICBmcm9tPzogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHRvPzogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHJlcGx5VG9JZD86IHN0cmluZztcbiAgICBmb3J3YXJkRnJvbT86IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBlbmNyeXB0ZWQ/OiBib29sZWFuO1xuICAgIHR0bD86IG51bWJlcjtcbiAgICB0aHJlYWQ/OiBzdHJpbmc7XG4gICAgc2hvdWxkQmVRdWlldD86IGJvb2xlYW47XG4gICAgbWVzc2FnZU1hcmt1cD86IHByb3RvUHViVjFNb2RlbHMwMTQuTWVzc2FnZU1hcmt1cC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgdGV4dD86IFRleHQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIGZpbGU/OiBwcm90b1B1YlYxTW9kZWxzMDAxLkZpbGUuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHN0aWNrZXI/OiBwcm90b1B1YlYxTW9kZWxzMDA1LlN0aWNrZXIuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIGxvY2F0aW9uPzogcHJvdG9QdWJWMU1vZGVsczAwNi5Mb2NhdGlvbi5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgZm9ybT86IHByb3RvUHViVjFNb2RlbHMwMTAuRm9ybS5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgYnV0dG9ucz86IHByb3RvUHViVjFNb2RlbHMwMTAuQnV0dG9ucy5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgc2hhcmVVaWQ/OiBTaGFyZVVpZC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgc2hhcmVQcml2YXRlRGF0YVJlcXVlc3Q/OiBwcm90b1B1YlYxTW9kZWxzMDA5LlNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0LkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBib3RTcGVjaWZpY1BlcnNpc3RlbnRFdmVudD86IHByb3RvUHViVjFNb2RlbHMwMDguQm90U3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHRhYmxlPzogcHJvdG9QdWJWMU1vZGVsczAxMC5UYWJsZS5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gIH1cbiAgZXhwb3J0IGVudW0gVHlwZUNhc2Uge1xuICAgIG5vbmUgPSAwLFxuICAgIHRleHQgPSAxLFxuICAgIGZpbGUgPSAyLFxuICAgIHN0aWNrZXIgPSAzLFxuICAgIGxvY2F0aW9uID0gNCxcbiAgICBmb3JtID0gNSxcbiAgICBidXR0b25zID0gNixcbiAgICBzaGFyZVVpZCA9IDcsXG4gICAgc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QgPSA4LFxuICAgIGJvdFNwZWNpZmljUGVyc2lzdGVudEV2ZW50ID0gOSxcbiAgICB0YWJsZSA9IDEwXG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBwcm90by5wdWIudjEubW9kZWxzLkxvY2FsQ2hhdE1lc3NhZ2VcbiAqL1xuZXhwb3J0IGNsYXNzIExvY2FsQ2hhdE1lc3NhZ2UgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdwcm90by5wdWIudjEubW9kZWxzLkxvY2FsQ2hhdE1lc3NhZ2UnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBMb2NhbENoYXRNZXNzYWdlKCk7XG4gICAgTG9jYWxDaGF0TWVzc2FnZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IExvY2FsQ2hhdE1lc3NhZ2UpIHtcbiAgICBfaW5zdGFuY2UuZnJvbSA9IF9pbnN0YW5jZS5mcm9tIHx8IHVuZGVmaW5lZDtcbiAgICBfaW5zdGFuY2UudGltZSA9IF9pbnN0YW5jZS50aW1lIHx8ICcwJztcbiAgICBfaW5zdGFuY2UubG9jYWxOZXR3b3JrSWQgPSBfaW5zdGFuY2UubG9jYWxOZXR3b3JrSWQgfHwgJzAnO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogTG9jYWxDaGF0TWVzc2FnZSxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UuZnJvbSA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuZnJvbSxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UudGltZSA9IF9yZWFkZXIucmVhZEludDY0U3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBfaW5zdGFuY2UubG9jYWxOZXR3b3JrSWQgPSBfcmVhZGVyLnJlYWRJbnQ2NFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgX2luc3RhbmNlLm1lc3NhZ2VCeUNsaWVudCA9IG5ldyBNZXNzYWdlQnlDbGllbnQoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLm1lc3NhZ2VCeUNsaWVudCxcbiAgICAgICAgICAgIE1lc3NhZ2VCeUNsaWVudC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgX2luc3RhbmNlLmNhbGxFdmVudCA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDEzLkNhbGxFdmVudFYyKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5jYWxsRXZlbnQsXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDEzLkNhbGxFdmVudFYyLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICBfaW5zdGFuY2UubG9jYWxOZXR3b3JrRW1wdHlNZXNzYWdlID0gbmV3IExvY2FsTmV0d29ya0VtcHR5TWVzc2FnZSgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UubG9jYWxOZXR3b3JrRW1wdHlNZXNzYWdlLFxuICAgICAgICAgICAgTG9jYWxOZXR3b3JrRW1wdHlNZXNzYWdlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBMb2NhbENoYXRNZXNzYWdlLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogTG9jYWxDaGF0TWVzc2FnZSxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5mcm9tKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMSxcbiAgICAgICAgX2luc3RhbmNlLmZyb20gYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS50aW1lKSB7XG4gICAgICBfd3JpdGVyLndyaXRlSW50NjRTdHJpbmcoMiwgX2luc3RhbmNlLnRpbWUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmxvY2FsTmV0d29ya0lkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlSW50NjRTdHJpbmcoNSwgX2luc3RhbmNlLmxvY2FsTmV0d29ya0lkKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5tZXNzYWdlQnlDbGllbnQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAzLFxuICAgICAgICBfaW5zdGFuY2UubWVzc2FnZUJ5Q2xpZW50IGFzIGFueSxcbiAgICAgICAgTWVzc2FnZUJ5Q2xpZW50LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmNhbGxFdmVudCkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDQsXG4gICAgICAgIF9pbnN0YW5jZS5jYWxsRXZlbnQgYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDEzLkNhbGxFdmVudFYyLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmxvY2FsTmV0d29ya0VtcHR5TWVzc2FnZSkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDYsXG4gICAgICAgIF9pbnN0YW5jZS5sb2NhbE5ldHdvcmtFbXB0eU1lc3NhZ2UgYXMgYW55LFxuICAgICAgICBMb2NhbE5ldHdvcmtFbXB0eU1lc3NhZ2Uuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZnJvbT86IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkO1xuICBwcml2YXRlIF90aW1lPzogc3RyaW5nO1xuICBwcml2YXRlIF9sb2NhbE5ldHdvcmtJZD86IHN0cmluZztcbiAgcHJpdmF0ZSBfbWVzc2FnZUJ5Q2xpZW50PzogTWVzc2FnZUJ5Q2xpZW50O1xuICBwcml2YXRlIF9jYWxsRXZlbnQ/OiBwcm90b1B1YlYxTW9kZWxzMDEzLkNhbGxFdmVudFYyO1xuICBwcml2YXRlIF9sb2NhbE5ldHdvcmtFbXB0eU1lc3NhZ2U/OiBMb2NhbE5ldHdvcmtFbXB0eU1lc3NhZ2U7XG5cbiAgcHJpdmF0ZSBfcGFja2V0OiBMb2NhbENoYXRNZXNzYWdlLlBhY2tldENhc2UgPVxuICAgIExvY2FsQ2hhdE1lc3NhZ2UuUGFja2V0Q2FzZS5ub25lO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgTG9jYWxDaGF0TWVzc2FnZSB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxMb2NhbENoYXRNZXNzYWdlLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmZyb20gPSBfdmFsdWUuZnJvbVxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQoX3ZhbHVlLmZyb20pXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnRpbWUgPSBfdmFsdWUudGltZTtcbiAgICB0aGlzLmxvY2FsTmV0d29ya0lkID0gX3ZhbHVlLmxvY2FsTmV0d29ya0lkO1xuICAgIHRoaXMubWVzc2FnZUJ5Q2xpZW50ID0gX3ZhbHVlLm1lc3NhZ2VCeUNsaWVudFxuICAgICAgPyBuZXcgTWVzc2FnZUJ5Q2xpZW50KF92YWx1ZS5tZXNzYWdlQnlDbGllbnQpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmNhbGxFdmVudCA9IF92YWx1ZS5jYWxsRXZlbnRcbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMTMuQ2FsbEV2ZW50VjIoX3ZhbHVlLmNhbGxFdmVudClcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMubG9jYWxOZXR3b3JrRW1wdHlNZXNzYWdlID0gX3ZhbHVlLmxvY2FsTmV0d29ya0VtcHR5TWVzc2FnZVxuICAgICAgPyBuZXcgTG9jYWxOZXR3b3JrRW1wdHlNZXNzYWdlKF92YWx1ZS5sb2NhbE5ldHdvcmtFbXB0eU1lc3NhZ2UpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICBMb2NhbENoYXRNZXNzYWdlLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgZnJvbSgpOiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2Zyb207XG4gIH1cbiAgc2V0IGZyb20odmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZnJvbSA9IHZhbHVlO1xuICB9XG4gIGdldCB0aW1lKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3RpbWU7XG4gIH1cbiAgc2V0IHRpbWUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3RpbWUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbG9jYWxOZXR3b3JrSWQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbG9jYWxOZXR3b3JrSWQ7XG4gIH1cbiAgc2V0IGxvY2FsTmV0d29ya0lkKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9sb2NhbE5ldHdvcmtJZCA9IHZhbHVlO1xuICB9XG4gIGdldCBtZXNzYWdlQnlDbGllbnQoKTogTWVzc2FnZUJ5Q2xpZW50IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbWVzc2FnZUJ5Q2xpZW50O1xuICB9XG4gIHNldCBtZXNzYWdlQnlDbGllbnQodmFsdWU6IE1lc3NhZ2VCeUNsaWVudCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9jYWxsRXZlbnQgPSB0aGlzLl9sb2NhbE5ldHdvcmtFbXB0eU1lc3NhZ2UgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9wYWNrZXQgPSBMb2NhbENoYXRNZXNzYWdlLlBhY2tldENhc2UubWVzc2FnZUJ5Q2xpZW50O1xuICAgIH1cbiAgICB0aGlzLl9tZXNzYWdlQnlDbGllbnQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgY2FsbEV2ZW50KCk6IHByb3RvUHViVjFNb2RlbHMwMTMuQ2FsbEV2ZW50VjIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9jYWxsRXZlbnQ7XG4gIH1cbiAgc2V0IGNhbGxFdmVudCh2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAxMy5DYWxsRXZlbnRWMiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9tZXNzYWdlQnlDbGllbnQgPSB0aGlzLl9sb2NhbE5ldHdvcmtFbXB0eU1lc3NhZ2UgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9wYWNrZXQgPSBMb2NhbENoYXRNZXNzYWdlLlBhY2tldENhc2UuY2FsbEV2ZW50O1xuICAgIH1cbiAgICB0aGlzLl9jYWxsRXZlbnQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbG9jYWxOZXR3b3JrRW1wdHlNZXNzYWdlKCk6IExvY2FsTmV0d29ya0VtcHR5TWVzc2FnZSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2xvY2FsTmV0d29ya0VtcHR5TWVzc2FnZTtcbiAgfVxuICBzZXQgbG9jYWxOZXR3b3JrRW1wdHlNZXNzYWdlKHZhbHVlOiBMb2NhbE5ldHdvcmtFbXB0eU1lc3NhZ2UgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fbWVzc2FnZUJ5Q2xpZW50ID0gdGhpcy5fY2FsbEV2ZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcGFja2V0ID0gTG9jYWxDaGF0TWVzc2FnZS5QYWNrZXRDYXNlLmxvY2FsTmV0d29ya0VtcHR5TWVzc2FnZTtcbiAgICB9XG4gICAgdGhpcy5fbG9jYWxOZXR3b3JrRW1wdHlNZXNzYWdlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHBhY2tldCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGFja2V0O1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIExvY2FsQ2hhdE1lc3NhZ2Uuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogTG9jYWxDaGF0TWVzc2FnZS5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZyb206IHRoaXMuZnJvbSA/IHRoaXMuZnJvbS50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgdGltZTogdGhpcy50aW1lLFxuICAgICAgbG9jYWxOZXR3b3JrSWQ6IHRoaXMubG9jYWxOZXR3b3JrSWQsXG4gICAgICBtZXNzYWdlQnlDbGllbnQ6IHRoaXMubWVzc2FnZUJ5Q2xpZW50XG4gICAgICAgID8gdGhpcy5tZXNzYWdlQnlDbGllbnQudG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIGNhbGxFdmVudDogdGhpcy5jYWxsRXZlbnQgPyB0aGlzLmNhbGxFdmVudC50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgbG9jYWxOZXR3b3JrRW1wdHlNZXNzYWdlOiB0aGlzLmxvY2FsTmV0d29ya0VtcHR5TWVzc2FnZVxuICAgICAgICA/IHRoaXMubG9jYWxOZXR3b3JrRW1wdHlNZXNzYWdlLnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWRcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBMb2NhbENoYXRNZXNzYWdlLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgZnJvbTogdGhpcy5mcm9tID8gdGhpcy5mcm9tLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIHRpbWU6IHRoaXMudGltZSxcbiAgICAgIGxvY2FsTmV0d29ya0lkOiB0aGlzLmxvY2FsTmV0d29ya0lkLFxuICAgICAgbWVzc2FnZUJ5Q2xpZW50OiB0aGlzLm1lc3NhZ2VCeUNsaWVudFxuICAgICAgICA/IHRoaXMubWVzc2FnZUJ5Q2xpZW50LnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbCxcbiAgICAgIGNhbGxFdmVudDogdGhpcy5jYWxsRXZlbnQgPyB0aGlzLmNhbGxFdmVudC50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICBsb2NhbE5ldHdvcmtFbXB0eU1lc3NhZ2U6IHRoaXMubG9jYWxOZXR3b3JrRW1wdHlNZXNzYWdlXG4gICAgICAgID8gdGhpcy5sb2NhbE5ldHdvcmtFbXB0eU1lc3NhZ2UudG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBMb2NhbENoYXRNZXNzYWdlIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBMb2NhbENoYXRNZXNzYWdlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBmcm9tPzogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuQXNPYmplY3Q7XG4gICAgdGltZT86IHN0cmluZztcbiAgICBsb2NhbE5ldHdvcmtJZD86IHN0cmluZztcbiAgICBtZXNzYWdlQnlDbGllbnQ/OiBNZXNzYWdlQnlDbGllbnQuQXNPYmplY3Q7XG4gICAgY2FsbEV2ZW50PzogcHJvdG9QdWJWMU1vZGVsczAxMy5DYWxsRXZlbnRWMi5Bc09iamVjdDtcbiAgICBsb2NhbE5ldHdvcmtFbXB0eU1lc3NhZ2U/OiBMb2NhbE5ldHdvcmtFbXB0eU1lc3NhZ2UuQXNPYmplY3Q7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgTG9jYWxDaGF0TWVzc2FnZVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgZnJvbT86IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICB0aW1lPzogc3RyaW5nO1xuICAgIGxvY2FsTmV0d29ya0lkPzogc3RyaW5nO1xuICAgIG1lc3NhZ2VCeUNsaWVudD86IE1lc3NhZ2VCeUNsaWVudC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgY2FsbEV2ZW50PzogcHJvdG9QdWJWMU1vZGVsczAxMy5DYWxsRXZlbnRWMi5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgbG9jYWxOZXR3b3JrRW1wdHlNZXNzYWdlPzogTG9jYWxOZXR3b3JrRW1wdHlNZXNzYWdlLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgfVxuICBleHBvcnQgZW51bSBQYWNrZXRDYXNlIHtcbiAgICBub25lID0gMCxcbiAgICBtZXNzYWdlQnlDbGllbnQgPSAxLFxuICAgIGNhbGxFdmVudCA9IDIsXG4gICAgbG9jYWxOZXR3b3JrRW1wdHlNZXNzYWdlID0gM1xuICB9XG59XG4iXX0=