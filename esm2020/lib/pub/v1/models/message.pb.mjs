import { BinaryReader, BinaryWriter } from 'google-protobuf';
import * as protoPubV1Models001 from '../../../pub/v1/models/file.pb';
import * as protoPubV1Models002 from '../../../pub/v1/models/uid.pb';
import * as protoPubV1Models004 from '../../../pub/v1/models/sticker.pb';
import * as protoPubV1Models005 from '../../../pub/v1/models/location.pb';
import * as protoPubV1Models006 from '../../../pub/v1/models/payment.pb';
import * as protoPubV1Models007 from '../../../pub/v1/models/persistent-event.pb';
import * as protoPubV1Models008 from '../../../pub/v1/models/share-private-data.pb';
import * as protoPubV1Models009 from '../../../pub/v1/models/form.pb';
import * as protoPubV1Models010 from '../../../pub/v1/models/poll.pb';
import * as protoPubV1Models011 from '../../../pub/v1/models/muc.pb';
import * as protoPubV1Models012 from '../../../pub/v1/models/call.pb';
import * as protoPubV1Models013 from '../../../pub/v1/models/markup.pb';
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
            packetId: this.packetId,
            id: this.id,
            time: this.time,
            from: this.from ? this.from.toProtobufJSON(options) : null,
            to: this.to ? this.to.toProtobufJSON(options) : null
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
            messageType: MessageBrief.MessageTypes[this.messageType === null || this.messageType === undefined
                ? 0
                : this.messageType],
            text: this.text,
            thumbnailReference: this.thumbnailReference
                ? this.thumbnailReference.toProtobufJSON(options)
                : null
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
        MessageTypes[MessageTypes["SHARE_PRIVATE_DATA_REQUEST"] = 12] = "SHARE_PRIVATE_DATA_REQUEST";
        MessageTypes[MessageTypes["SHARE_PRIVATE_DATA_ACCEPTANCE"] = 13] = "SHARE_PRIVATE_DATA_ACCEPTANCE";
        MessageTypes[MessageTypes["CALL_END"] = 14] = "CALL_END";
        MessageTypes[MessageTypes["CALL_BUSY"] = 15] = "CALL_BUSY";
        MessageTypes[MessageTypes["CALL_DECLINED"] = 16] = "CALL_DECLINED";
        MessageTypes[MessageTypes["TABLE"] = 17] = "TABLE";
        MessageTypes[MessageTypes["PE_AS_NEW_CONTACT_ADDED"] = 18] = "PE_AS_NEW_CONTACT_ADDED";
        MessageTypes[MessageTypes["PE_BS_BOT_NOT_RESPONDING"] = 19] = "PE_BS_BOT_NOT_RESPONDING";
        MessageTypes[MessageTypes["PE_MS_KICK_USER"] = 20] = "PE_MS_KICK_USER";
        MessageTypes[MessageTypes["PE_MS_ADD_USER"] = 21] = "PE_MS_ADD_USER";
        MessageTypes[MessageTypes["PE_MS_PIN_MESSAGE"] = 22] = "PE_MS_PIN_MESSAGE";
        MessageTypes[MessageTypes["PE_MS_NAME_CHANGED"] = 23] = "PE_MS_NAME_CHANGED";
        MessageTypes[MessageTypes["PE_MS_AVATAR_CHANGED"] = 24] = "PE_MS_AVATAR_CHANGED";
        MessageTypes[MessageTypes["PE_MS_MUC_CREATED"] = 25] = "PE_MS_MUC_CREATED";
        MessageTypes[MessageTypes["PE_MS_LEAVE_USER"] = 26] = "PE_MS_LEAVE_USER";
        MessageTypes[MessageTypes["PE_MS_JOINED_USER"] = 27] = "PE_MS_JOINED_USER";
        MessageTypes[MessageTypes["PE_MS_DELETED"] = 28] = "PE_MS_DELETED";
        MessageTypes[MessageTypes["PDT_PHONE_NUMBER"] = 29] = "PDT_PHONE_NUMBER";
        MessageTypes[MessageTypes["PDT_USERNAME"] = 30] = "PDT_USERNAME";
        MessageTypes[MessageTypes["PDT_EMAIL"] = 31] = "PDT_EMAIL";
        MessageTypes[MessageTypes["PDT_NAME"] = 32] = "PDT_NAME";
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
            ? new protoPubV1Models013.MessageMarkup(_value.messageMarkup)
            : undefined;
        this.text = _value.text ? new Text(_value.text) : undefined;
        this.file = _value.file
            ? new protoPubV1Models001.File(_value.file)
            : undefined;
        this.sticker = _value.sticker
            ? new protoPubV1Models004.Sticker(_value.sticker)
            : undefined;
        this.location = _value.location
            ? new protoPubV1Models005.Location(_value.location)
            : undefined;
        this.liveLocation = _value.liveLocation
            ? new protoPubV1Models005.LiveLocation(_value.liveLocation)
            : undefined;
        this.poll = _value.poll
            ? new protoPubV1Models010.Poll(_value.poll)
            : undefined;
        this.transaction = _value.transaction
            ? new protoPubV1Models006.Transaction(_value.transaction)
            : undefined;
        this.form = _value.form
            ? new protoPubV1Models009.Form(_value.form)
            : undefined;
        this.persistEvent = _value.persistEvent
            ? new protoPubV1Models007.PersistentEvent(_value.persistEvent)
            : undefined;
        this.buttons = _value.buttons
            ? new protoPubV1Models009.Buttons(_value.buttons)
            : undefined;
        this.shareUid = _value.shareUid ? new ShareUid(_value.shareUid) : undefined;
        this.formResult = _value.formResult
            ? new protoPubV1Models009.FormResult(_value.formResult)
            : undefined;
        this.sharePrivateDataRequest = _value.sharePrivateDataRequest
            ? new protoPubV1Models008.SharePrivateDataRequest(_value.sharePrivateDataRequest)
            : undefined;
        this.sharePrivateDataAcceptance = _value.sharePrivateDataAcceptance
            ? new protoPubV1Models008.SharePrivateDataAcceptance(_value.sharePrivateDataAcceptance)
            : undefined;
        this.callEvent = _value.callEvent
            ? new protoPubV1Models012.CallEvent(_value.callEvent)
            : undefined;
        this.table = _value.table
            ? new protoPubV1Models009.Table(_value.table)
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
                    _instance.messageMarkup = new protoPubV1Models013.MessageMarkup();
                    _reader.readMessage(_instance.messageMarkup, protoPubV1Models013.MessageMarkup.deserializeBinaryFromReader);
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
                    _instance.sticker = new protoPubV1Models004.Sticker();
                    _reader.readMessage(_instance.sticker, protoPubV1Models004.Sticker.deserializeBinaryFromReader);
                    break;
                case 14:
                    _instance.location = new protoPubV1Models005.Location();
                    _reader.readMessage(_instance.location, protoPubV1Models005.Location.deserializeBinaryFromReader);
                    break;
                case 15:
                    _instance.liveLocation = new protoPubV1Models005.LiveLocation();
                    _reader.readMessage(_instance.liveLocation, protoPubV1Models005.LiveLocation.deserializeBinaryFromReader);
                    break;
                case 16:
                    _instance.poll = new protoPubV1Models010.Poll();
                    _reader.readMessage(_instance.poll, protoPubV1Models010.Poll.deserializeBinaryFromReader);
                    break;
                case 17:
                    _instance.transaction = new protoPubV1Models006.Transaction();
                    _reader.readMessage(_instance.transaction, protoPubV1Models006.Transaction.deserializeBinaryFromReader);
                    break;
                case 18:
                    _instance.form = new protoPubV1Models009.Form();
                    _reader.readMessage(_instance.form, protoPubV1Models009.Form.deserializeBinaryFromReader);
                    break;
                case 19:
                    _instance.persistEvent = new protoPubV1Models007.PersistentEvent();
                    _reader.readMessage(_instance.persistEvent, protoPubV1Models007.PersistentEvent.deserializeBinaryFromReader);
                    break;
                case 20:
                    _instance.buttons = new protoPubV1Models009.Buttons();
                    _reader.readMessage(_instance.buttons, protoPubV1Models009.Buttons.deserializeBinaryFromReader);
                    break;
                case 21:
                    _instance.shareUid = new ShareUid();
                    _reader.readMessage(_instance.shareUid, ShareUid.deserializeBinaryFromReader);
                    break;
                case 22:
                    _instance.formResult = new protoPubV1Models009.FormResult();
                    _reader.readMessage(_instance.formResult, protoPubV1Models009.FormResult.deserializeBinaryFromReader);
                    break;
                case 26:
                    _instance.sharePrivateDataRequest = new protoPubV1Models008.SharePrivateDataRequest();
                    _reader.readMessage(_instance.sharePrivateDataRequest, protoPubV1Models008.SharePrivateDataRequest
                        .deserializeBinaryFromReader);
                    break;
                case 27:
                    _instance.sharePrivateDataAcceptance = new protoPubV1Models008.SharePrivateDataAcceptance();
                    _reader.readMessage(_instance.sharePrivateDataAcceptance, protoPubV1Models008.SharePrivateDataAcceptance
                        .deserializeBinaryFromReader);
                    break;
                case 31:
                    _instance.callEvent = new protoPubV1Models012.CallEvent();
                    _reader.readMessage(_instance.callEvent, protoPubV1Models012.CallEvent.deserializeBinaryFromReader);
                    break;
                case 32:
                    _instance.table = new protoPubV1Models009.Table();
                    _reader.readMessage(_instance.table, protoPubV1Models009.Table.deserializeBinaryFromReader);
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
            _writer.writeMessage(34, _instance.messageMarkup, protoPubV1Models013.MessageMarkup.serializeBinaryToWriter);
        }
        if (_instance.text) {
            _writer.writeMessage(11, _instance.text, Text.serializeBinaryToWriter);
        }
        if (_instance.file) {
            _writer.writeMessage(12, _instance.file, protoPubV1Models001.File.serializeBinaryToWriter);
        }
        if (_instance.sticker) {
            _writer.writeMessage(13, _instance.sticker, protoPubV1Models004.Sticker.serializeBinaryToWriter);
        }
        if (_instance.location) {
            _writer.writeMessage(14, _instance.location, protoPubV1Models005.Location.serializeBinaryToWriter);
        }
        if (_instance.liveLocation) {
            _writer.writeMessage(15, _instance.liveLocation, protoPubV1Models005.LiveLocation.serializeBinaryToWriter);
        }
        if (_instance.poll) {
            _writer.writeMessage(16, _instance.poll, protoPubV1Models010.Poll.serializeBinaryToWriter);
        }
        if (_instance.transaction) {
            _writer.writeMessage(17, _instance.transaction, protoPubV1Models006.Transaction.serializeBinaryToWriter);
        }
        if (_instance.form) {
            _writer.writeMessage(18, _instance.form, protoPubV1Models009.Form.serializeBinaryToWriter);
        }
        if (_instance.persistEvent) {
            _writer.writeMessage(19, _instance.persistEvent, protoPubV1Models007.PersistentEvent.serializeBinaryToWriter);
        }
        if (_instance.buttons) {
            _writer.writeMessage(20, _instance.buttons, protoPubV1Models009.Buttons.serializeBinaryToWriter);
        }
        if (_instance.shareUid) {
            _writer.writeMessage(21, _instance.shareUid, ShareUid.serializeBinaryToWriter);
        }
        if (_instance.formResult) {
            _writer.writeMessage(22, _instance.formResult, protoPubV1Models009.FormResult.serializeBinaryToWriter);
        }
        if (_instance.sharePrivateDataRequest) {
            _writer.writeMessage(26, _instance.sharePrivateDataRequest, protoPubV1Models008.SharePrivateDataRequest.serializeBinaryToWriter);
        }
        if (_instance.sharePrivateDataAcceptance) {
            _writer.writeMessage(27, _instance.sharePrivateDataAcceptance, protoPubV1Models008.SharePrivateDataAcceptance.serializeBinaryToWriter);
        }
        if (_instance.callEvent) {
            _writer.writeMessage(31, _instance.callEvent, protoPubV1Models012.CallEvent.serializeBinaryToWriter);
        }
        if (_instance.table) {
            _writer.writeMessage(32, _instance.table, protoPubV1Models009.Table.serializeBinaryToWriter);
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
    get text() {
        return this._text;
    }
    set text(value) {
        if (value !== undefined && value !== null) {
            this._file = this._sticker = this._location = this._liveLocation = this._poll = this._transaction = this._form = this._persistEvent = this._buttons = this._shareUid = this._formResult = this._sharePrivateDataRequest = this._sharePrivateDataAcceptance = this._callEvent = this._table = undefined;
            this._type = Message.TypeCase.text;
        }
        this._text = value;
    }
    get file() {
        return this._file;
    }
    set file(value) {
        if (value !== undefined && value !== null) {
            this._text = this._sticker = this._location = this._liveLocation = this._poll = this._transaction = this._form = this._persistEvent = this._buttons = this._shareUid = this._formResult = this._sharePrivateDataRequest = this._sharePrivateDataAcceptance = this._callEvent = this._table = undefined;
            this._type = Message.TypeCase.file;
        }
        this._file = value;
    }
    get sticker() {
        return this._sticker;
    }
    set sticker(value) {
        if (value !== undefined && value !== null) {
            this._text = this._file = this._location = this._liveLocation = this._poll = this._transaction = this._form = this._persistEvent = this._buttons = this._shareUid = this._formResult = this._sharePrivateDataRequest = this._sharePrivateDataAcceptance = this._callEvent = this._table = undefined;
            this._type = Message.TypeCase.sticker;
        }
        this._sticker = value;
    }
    get location() {
        return this._location;
    }
    set location(value) {
        if (value !== undefined && value !== null) {
            this._text = this._file = this._sticker = this._liveLocation = this._poll = this._transaction = this._form = this._persistEvent = this._buttons = this._shareUid = this._formResult = this._sharePrivateDataRequest = this._sharePrivateDataAcceptance = this._callEvent = this._table = undefined;
            this._type = Message.TypeCase.location;
        }
        this._location = value;
    }
    get liveLocation() {
        return this._liveLocation;
    }
    set liveLocation(value) {
        if (value !== undefined && value !== null) {
            this._text = this._file = this._sticker = this._location = this._poll = this._transaction = this._form = this._persistEvent = this._buttons = this._shareUid = this._formResult = this._sharePrivateDataRequest = this._sharePrivateDataAcceptance = this._callEvent = this._table = undefined;
            this._type = Message.TypeCase.liveLocation;
        }
        this._liveLocation = value;
    }
    get poll() {
        return this._poll;
    }
    set poll(value) {
        if (value !== undefined && value !== null) {
            this._text = this._file = this._sticker = this._location = this._liveLocation = this._transaction = this._form = this._persistEvent = this._buttons = this._shareUid = this._formResult = this._sharePrivateDataRequest = this._sharePrivateDataAcceptance = this._callEvent = this._table = undefined;
            this._type = Message.TypeCase.poll;
        }
        this._poll = value;
    }
    get transaction() {
        return this._transaction;
    }
    set transaction(value) {
        if (value !== undefined && value !== null) {
            this._text = this._file = this._sticker = this._location = this._liveLocation = this._poll = this._form = this._persistEvent = this._buttons = this._shareUid = this._formResult = this._sharePrivateDataRequest = this._sharePrivateDataAcceptance = this._callEvent = this._table = undefined;
            this._type = Message.TypeCase.transaction;
        }
        this._transaction = value;
    }
    get form() {
        return this._form;
    }
    set form(value) {
        if (value !== undefined && value !== null) {
            this._text = this._file = this._sticker = this._location = this._liveLocation = this._poll = this._transaction = this._persistEvent = this._buttons = this._shareUid = this._formResult = this._sharePrivateDataRequest = this._sharePrivateDataAcceptance = this._callEvent = this._table = undefined;
            this._type = Message.TypeCase.form;
        }
        this._form = value;
    }
    get persistEvent() {
        return this._persistEvent;
    }
    set persistEvent(value) {
        if (value !== undefined && value !== null) {
            this._text = this._file = this._sticker = this._location = this._liveLocation = this._poll = this._transaction = this._form = this._buttons = this._shareUid = this._formResult = this._sharePrivateDataRequest = this._sharePrivateDataAcceptance = this._callEvent = this._table = undefined;
            this._type = Message.TypeCase.persistEvent;
        }
        this._persistEvent = value;
    }
    get buttons() {
        return this._buttons;
    }
    set buttons(value) {
        if (value !== undefined && value !== null) {
            this._text = this._file = this._sticker = this._location = this._liveLocation = this._poll = this._transaction = this._form = this._persistEvent = this._shareUid = this._formResult = this._sharePrivateDataRequest = this._sharePrivateDataAcceptance = this._callEvent = this._table = undefined;
            this._type = Message.TypeCase.buttons;
        }
        this._buttons = value;
    }
    get shareUid() {
        return this._shareUid;
    }
    set shareUid(value) {
        if (value !== undefined && value !== null) {
            this._text = this._file = this._sticker = this._location = this._liveLocation = this._poll = this._transaction = this._form = this._persistEvent = this._buttons = this._formResult = this._sharePrivateDataRequest = this._sharePrivateDataAcceptance = this._callEvent = this._table = undefined;
            this._type = Message.TypeCase.shareUid;
        }
        this._shareUid = value;
    }
    get formResult() {
        return this._formResult;
    }
    set formResult(value) {
        if (value !== undefined && value !== null) {
            this._text = this._file = this._sticker = this._location = this._liveLocation = this._poll = this._transaction = this._form = this._persistEvent = this._buttons = this._shareUid = this._sharePrivateDataRequest = this._sharePrivateDataAcceptance = this._callEvent = this._table = undefined;
            this._type = Message.TypeCase.formResult;
        }
        this._formResult = value;
    }
    get sharePrivateDataRequest() {
        return this._sharePrivateDataRequest;
    }
    set sharePrivateDataRequest(value) {
        if (value !== undefined && value !== null) {
            this._text = this._file = this._sticker = this._location = this._liveLocation = this._poll = this._transaction = this._form = this._persistEvent = this._buttons = this._shareUid = this._formResult = this._sharePrivateDataAcceptance = this._callEvent = this._table = undefined;
            this._type = Message.TypeCase.sharePrivateDataRequest;
        }
        this._sharePrivateDataRequest = value;
    }
    get sharePrivateDataAcceptance() {
        return this._sharePrivateDataAcceptance;
    }
    set sharePrivateDataAcceptance(value) {
        if (value !== undefined && value !== null) {
            this._text = this._file = this._sticker = this._location = this._liveLocation = this._poll = this._transaction = this._form = this._persistEvent = this._buttons = this._shareUid = this._formResult = this._sharePrivateDataRequest = this._callEvent = this._table = undefined;
            this._type = Message.TypeCase.sharePrivateDataAcceptance;
        }
        this._sharePrivateDataAcceptance = value;
    }
    get callEvent() {
        return this._callEvent;
    }
    set callEvent(value) {
        if (value !== undefined && value !== null) {
            this._text = this._file = this._sticker = this._location = this._liveLocation = this._poll = this._transaction = this._form = this._persistEvent = this._buttons = this._shareUid = this._formResult = this._sharePrivateDataRequest = this._sharePrivateDataAcceptance = this._table = undefined;
            this._type = Message.TypeCase.callEvent;
        }
        this._callEvent = value;
    }
    get table() {
        return this._table;
    }
    set table(value) {
        if (value !== undefined && value !== null) {
            this._text = this._file = this._sticker = this._location = this._liveLocation = this._poll = this._transaction = this._form = this._persistEvent = this._buttons = this._shareUid = this._formResult = this._sharePrivateDataRequest = this._sharePrivateDataAcceptance = this._callEvent = undefined;
            this._type = Message.TypeCase.table;
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
            mucMinimumAccessLevel: protoPubV1Models011.Role[this.mucMinimumAccessLevel === null ||
                this.mucMinimumAccessLevel === undefined
                ? 0
                : this.mucMinimumAccessLevel],
            specialTarget: this.specialTarget
                ? this.specialTarget.toProtobufJSON(options)
                : null,
            messageMarkup: this.messageMarkup
                ? this.messageMarkup.toProtobufJSON(options)
                : null,
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
            table: this.table ? this.table.toProtobufJSON(options) : null
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
        TypeCase[TypeCase["table"] = 16] = "table";
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
        this.text = _value.text ? new Text(_value.text) : undefined;
        this.file = _value.file
            ? new protoPubV1Models001.File(_value.file)
            : undefined;
        this.sticker = _value.sticker
            ? new protoPubV1Models004.Sticker(_value.sticker)
            : undefined;
        this.location = _value.location
            ? new protoPubV1Models005.Location(_value.location)
            : undefined;
        this.liveLocation = _value.liveLocation
            ? new protoPubV1Models005.LiveLocation(_value.liveLocation)
            : undefined;
        this.poll = _value.poll
            ? new protoPubV1Models010.Poll(_value.poll)
            : undefined;
        this.form = _value.form
            ? new protoPubV1Models009.Form(_value.form)
            : undefined;
        this.buttons = _value.buttons
            ? new protoPubV1Models009.Buttons(_value.buttons)
            : undefined;
        this.shareUid = _value.shareUid ? new ShareUid(_value.shareUid) : undefined;
        this.formResult = _value.formResult
            ? new protoPubV1Models009.FormResult(_value.formResult)
            : undefined;
        this.sharePrivateDataRequest = _value.sharePrivateDataRequest
            ? new protoPubV1Models008.SharePrivateDataRequest(_value.sharePrivateDataRequest)
            : undefined;
        this.sharePrivateDataAcceptance = _value.sharePrivateDataAcceptance
            ? new protoPubV1Models008.SharePrivateDataAcceptance(_value.sharePrivateDataAcceptance)
            : undefined;
        this.callEvent = _value.callEvent
            ? new protoPubV1Models012.CallEvent(_value.callEvent)
            : undefined;
        this.table = _value.table
            ? new protoPubV1Models009.Table(_value.table)
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
                case 11:
                    _instance.text = new Text();
                    _reader.readMessage(_instance.text, Text.deserializeBinaryFromReader);
                    break;
                case 12:
                    _instance.file = new protoPubV1Models001.File();
                    _reader.readMessage(_instance.file, protoPubV1Models001.File.deserializeBinaryFromReader);
                    break;
                case 13:
                    _instance.sticker = new protoPubV1Models004.Sticker();
                    _reader.readMessage(_instance.sticker, protoPubV1Models004.Sticker.deserializeBinaryFromReader);
                    break;
                case 14:
                    _instance.location = new protoPubV1Models005.Location();
                    _reader.readMessage(_instance.location, protoPubV1Models005.Location.deserializeBinaryFromReader);
                    break;
                case 15:
                    _instance.liveLocation = new protoPubV1Models005.LiveLocation();
                    _reader.readMessage(_instance.liveLocation, protoPubV1Models005.LiveLocation.deserializeBinaryFromReader);
                    break;
                case 16:
                    _instance.poll = new protoPubV1Models010.Poll();
                    _reader.readMessage(_instance.poll, protoPubV1Models010.Poll.deserializeBinaryFromReader);
                    break;
                case 18:
                    _instance.form = new protoPubV1Models009.Form();
                    _reader.readMessage(_instance.form, protoPubV1Models009.Form.deserializeBinaryFromReader);
                    break;
                case 20:
                    _instance.buttons = new protoPubV1Models009.Buttons();
                    _reader.readMessage(_instance.buttons, protoPubV1Models009.Buttons.deserializeBinaryFromReader);
                    break;
                case 21:
                    _instance.shareUid = new ShareUid();
                    _reader.readMessage(_instance.shareUid, ShareUid.deserializeBinaryFromReader);
                    break;
                case 22:
                    _instance.formResult = new protoPubV1Models009.FormResult();
                    _reader.readMessage(_instance.formResult, protoPubV1Models009.FormResult.deserializeBinaryFromReader);
                    break;
                case 26:
                    _instance.sharePrivateDataRequest = new protoPubV1Models008.SharePrivateDataRequest();
                    _reader.readMessage(_instance.sharePrivateDataRequest, protoPubV1Models008.SharePrivateDataRequest
                        .deserializeBinaryFromReader);
                    break;
                case 27:
                    _instance.sharePrivateDataAcceptance = new protoPubV1Models008.SharePrivateDataAcceptance();
                    _reader.readMessage(_instance.sharePrivateDataAcceptance, protoPubV1Models008.SharePrivateDataAcceptance
                        .deserializeBinaryFromReader);
                    break;
                case 31:
                    _instance.callEvent = new protoPubV1Models012.CallEvent();
                    _reader.readMessage(_instance.callEvent, protoPubV1Models012.CallEvent.deserializeBinaryFromReader);
                    break;
                case 32:
                    _instance.table = new protoPubV1Models009.Table();
                    _reader.readMessage(_instance.table, protoPubV1Models009.Table.deserializeBinaryFromReader);
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
        if (_instance.text) {
            _writer.writeMessage(11, _instance.text, Text.serializeBinaryToWriter);
        }
        if (_instance.file) {
            _writer.writeMessage(12, _instance.file, protoPubV1Models001.File.serializeBinaryToWriter);
        }
        if (_instance.sticker) {
            _writer.writeMessage(13, _instance.sticker, protoPubV1Models004.Sticker.serializeBinaryToWriter);
        }
        if (_instance.location) {
            _writer.writeMessage(14, _instance.location, protoPubV1Models005.Location.serializeBinaryToWriter);
        }
        if (_instance.liveLocation) {
            _writer.writeMessage(15, _instance.liveLocation, protoPubV1Models005.LiveLocation.serializeBinaryToWriter);
        }
        if (_instance.poll) {
            _writer.writeMessage(16, _instance.poll, protoPubV1Models010.Poll.serializeBinaryToWriter);
        }
        if (_instance.form) {
            _writer.writeMessage(18, _instance.form, protoPubV1Models009.Form.serializeBinaryToWriter);
        }
        if (_instance.buttons) {
            _writer.writeMessage(20, _instance.buttons, protoPubV1Models009.Buttons.serializeBinaryToWriter);
        }
        if (_instance.shareUid) {
            _writer.writeMessage(21, _instance.shareUid, ShareUid.serializeBinaryToWriter);
        }
        if (_instance.formResult) {
            _writer.writeMessage(22, _instance.formResult, protoPubV1Models009.FormResult.serializeBinaryToWriter);
        }
        if (_instance.sharePrivateDataRequest) {
            _writer.writeMessage(26, _instance.sharePrivateDataRequest, protoPubV1Models008.SharePrivateDataRequest.serializeBinaryToWriter);
        }
        if (_instance.sharePrivateDataAcceptance) {
            _writer.writeMessage(27, _instance.sharePrivateDataAcceptance, protoPubV1Models008.SharePrivateDataAcceptance.serializeBinaryToWriter);
        }
        if (_instance.callEvent) {
            _writer.writeMessage(31, _instance.callEvent, protoPubV1Models012.CallEvent.serializeBinaryToWriter);
        }
        if (_instance.table) {
            _writer.writeMessage(32, _instance.table, protoPubV1Models009.Table.serializeBinaryToWriter);
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
            ? new protoPubV1Models013.MessageMarkup(_value.messageMarkup)
            : undefined;
        this.text = _value.text ? new Text(_value.text) : undefined;
        this.file = _value.file
            ? new protoPubV1Models001.File(_value.file)
            : undefined;
        this.sticker = _value.sticker
            ? new protoPubV1Models004.Sticker(_value.sticker)
            : undefined;
        this.location = _value.location
            ? new protoPubV1Models005.Location(_value.location)
            : undefined;
        this.form = _value.form
            ? new protoPubV1Models009.Form(_value.form)
            : undefined;
        this.buttons = _value.buttons
            ? new protoPubV1Models009.Buttons(_value.buttons)
            : undefined;
        this.shareUid = _value.shareUid ? new ShareUid(_value.shareUid) : undefined;
        this.sharePrivateDataRequest = _value.sharePrivateDataRequest
            ? new protoPubV1Models008.SharePrivateDataRequest(_value.sharePrivateDataRequest)
            : undefined;
        this.botSpecificPersistentEvent = _value.botSpecificPersistentEvent
            ? new protoPubV1Models007.BotSpecificPersistentEvent(_value.botSpecificPersistentEvent)
            : undefined;
        this.table = _value.table
            ? new protoPubV1Models009.Table(_value.table)
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
                    _instance.messageMarkup = new protoPubV1Models013.MessageMarkup();
                    _reader.readMessage(_instance.messageMarkup, protoPubV1Models013.MessageMarkup.deserializeBinaryFromReader);
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
                    _instance.sticker = new protoPubV1Models004.Sticker();
                    _reader.readMessage(_instance.sticker, protoPubV1Models004.Sticker.deserializeBinaryFromReader);
                    break;
                case 14:
                    _instance.location = new protoPubV1Models005.Location();
                    _reader.readMessage(_instance.location, protoPubV1Models005.Location.deserializeBinaryFromReader);
                    break;
                case 18:
                    _instance.form = new protoPubV1Models009.Form();
                    _reader.readMessage(_instance.form, protoPubV1Models009.Form.deserializeBinaryFromReader);
                    break;
                case 20:
                    _instance.buttons = new protoPubV1Models009.Buttons();
                    _reader.readMessage(_instance.buttons, protoPubV1Models009.Buttons.deserializeBinaryFromReader);
                    break;
                case 21:
                    _instance.shareUid = new ShareUid();
                    _reader.readMessage(_instance.shareUid, ShareUid.deserializeBinaryFromReader);
                    break;
                case 26:
                    _instance.sharePrivateDataRequest = new protoPubV1Models008.SharePrivateDataRequest();
                    _reader.readMessage(_instance.sharePrivateDataRequest, protoPubV1Models008.SharePrivateDataRequest
                        .deserializeBinaryFromReader);
                    break;
                case 19:
                    _instance.botSpecificPersistentEvent = new protoPubV1Models007.BotSpecificPersistentEvent();
                    _reader.readMessage(_instance.botSpecificPersistentEvent, protoPubV1Models007.BotSpecificPersistentEvent
                        .deserializeBinaryFromReader);
                    break;
                case 32:
                    _instance.table = new protoPubV1Models009.Table();
                    _reader.readMessage(_instance.table, protoPubV1Models009.Table.deserializeBinaryFromReader);
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
            _writer.writeMessage(34, _instance.messageMarkup, protoPubV1Models013.MessageMarkup.serializeBinaryToWriter);
        }
        if (_instance.text) {
            _writer.writeMessage(11, _instance.text, Text.serializeBinaryToWriter);
        }
        if (_instance.file) {
            _writer.writeMessage(12, _instance.file, protoPubV1Models001.File.serializeBinaryToWriter);
        }
        if (_instance.sticker) {
            _writer.writeMessage(13, _instance.sticker, protoPubV1Models004.Sticker.serializeBinaryToWriter);
        }
        if (_instance.location) {
            _writer.writeMessage(14, _instance.location, protoPubV1Models005.Location.serializeBinaryToWriter);
        }
        if (_instance.form) {
            _writer.writeMessage(18, _instance.form, protoPubV1Models009.Form.serializeBinaryToWriter);
        }
        if (_instance.buttons) {
            _writer.writeMessage(20, _instance.buttons, protoPubV1Models009.Buttons.serializeBinaryToWriter);
        }
        if (_instance.shareUid) {
            _writer.writeMessage(21, _instance.shareUid, ShareUid.serializeBinaryToWriter);
        }
        if (_instance.sharePrivateDataRequest) {
            _writer.writeMessage(26, _instance.sharePrivateDataRequest, protoPubV1Models008.SharePrivateDataRequest.serializeBinaryToWriter);
        }
        if (_instance.botSpecificPersistentEvent) {
            _writer.writeMessage(19, _instance.botSpecificPersistentEvent, protoPubV1Models007.BotSpecificPersistentEvent.serializeBinaryToWriter);
        }
        if (_instance.table) {
            _writer.writeMessage(32, _instance.table, protoPubV1Models009.Table.serializeBinaryToWriter);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5wYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Byb3RvL3NyYy9saWIvcHViL3YxL21vZGVscy9tZXNzYWdlLnBiLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdBLE9BQU8sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFjLE1BQU0saUJBQWlCLENBQUM7QUFFekUsT0FBTyxLQUFLLG1CQUFtQixNQUFNLGdDQUFnQyxDQUFDO0FBQ3RFLE9BQU8sS0FBSyxtQkFBbUIsTUFBTSwrQkFBK0IsQ0FBQztBQUVyRSxPQUFPLEtBQUssbUJBQW1CLE1BQU0sbUNBQW1DLENBQUM7QUFDekUsT0FBTyxLQUFLLG1CQUFtQixNQUFNLG9DQUFvQyxDQUFDO0FBQzFFLE9BQU8sS0FBSyxtQkFBbUIsTUFBTSxtQ0FBbUMsQ0FBQztBQUN6RSxPQUFPLEtBQUssbUJBQW1CLE1BQU0sNENBQTRDLENBQUM7QUFDbEYsT0FBTyxLQUFLLG1CQUFtQixNQUFNLDhDQUE4QyxDQUFDO0FBQ3BGLE9BQU8sS0FBSyxtQkFBbUIsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN0RSxPQUFPLEtBQUssbUJBQW1CLE1BQU0sZ0NBQWdDLENBQUM7QUFDdEUsT0FBTyxLQUFLLG1CQUFtQixNQUFNLCtCQUErQixDQUFDO0FBQ3JFLE9BQU8sS0FBSyxtQkFBbUIsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN0RSxPQUFPLEtBQUssbUJBQW1CLE1BQU0sa0NBQWtDLENBQUM7QUFDeEU7O0dBRUc7QUFDSCxNQUFNLE9BQU8sSUFBSTtJQXVEZjs7O09BR0c7SUFDSCxZQUFZLE1BQXdDO1FBQ2xELE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUE1REQ7OztPQUdH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QUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQ3pDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDLDJCQUEyQixHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7WUFDL1IsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQztTQUM1QztRQUNELElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFDRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUNELElBQUksSUFBSSxDQUFDLEtBQTJDO1FBQ2xELElBQUksS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQ3pDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDLDJCQUEyQixHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0s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TyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVM7WUFDM0QsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVM7WUFDOUQsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO2dCQUM3QixDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUU7Z0JBQzlCLENBQUMsQ0FBQyxTQUFTO1lBQ2IsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVM7WUFDbEQsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVM7WUFDdkUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVM7WUFDbEQsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO2dCQUM3QixDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUU7Z0JBQzlCLENBQUMsQ0FBQyxTQUFTO1lBQ2IsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVM7WUFDM0QsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVM7WUFDOUQsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FB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STtZQUNSLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUMxRCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7WUFDMUQsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO1lBQ25FLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUN0RSxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7Z0JBQzdCLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUM7Z0JBQzNDLENBQUMsQ0FBQyxJQUFJO1lBQ1IsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO1lBQzFELElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUMxRCxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7WUFDbkUsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElB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QUMsQ0FBQyxJQUFJO1lBQ1IsMEJBQTBCLEVBQUUsSUFBSSxDQUFDLDBCQUEwQjtnQkFDekQsQ0FBQyxDQUFDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDO2dCQUN6RCxDQUFDLENBQUMsSUFBSTtZQUNSLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtTQUM5RCxDQUFDO0lBQ0osQ0FBQzs7QUF2bkJNLGVBQUUsR0FBRyxrQ0FBa0MsQ0FBQztBQXluQmpELFdBQWMsWUFBWTtJQW9EeEIsSUFBWSxRQVlYO0lBWkQsV0FBWSxRQUFRO1FBQ2xCLHVDQUFRLENBQUE7UUFDUix1Q0FBUSxDQUFBO1FBQ1IsdUNBQVEsQ0FBQTtRQUNSLDZDQUFXLENBQUE7UUFDWCwrQ0FBWSxDQUFBO1FBQ1osdUNBQVEsQ0FBQTtRQUNSLDZDQUFXLENBQUE7UUFDWCwrQ0FBWSxDQUFBO1FBQ1osNkVBQTJCLENBQUE7UUFDM0IsbUZBQThCLENBQUE7UUFDOUIsMENBQVUsQ0FBQTtJQUNaLENBQUMsRUFaVyxRQUFRLEdBQVIscUJBQVEsS0FBUixxQkFBUSxRQVluQjtBQUNILENBQUMsRUFqRWEsWUFBWSxLQUFaLFlBQVksUUFpRXpCIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGUgKi9cbi8qIGVzbGludC1kaXNhYmxlICovXG4vLyBAdHMtbm9jaGVja1xuLy9cbi8vIFRISVMgSVMgQSBHRU5FUkFURUQgRklMRVxuLy8gRE8gTk9UIE1PRElGWSBJVCEgWU9VUiBDSEFOR0VTIFdJTEwgQkUgTE9TVFxuaW1wb3J0IHtcbiAgR3JwY01lc3NhZ2UsXG4gIFJlY3Vyc2l2ZVBhcnRpYWwsXG4gIFRvUHJvdG9idWZKU09OT3B0aW9uc1xufSBmcm9tICdAbmd4LWdycGMvY29tbW9uJztcbmltcG9ydCB7IEJpbmFyeVJlYWRlciwgQmluYXJ5V3JpdGVyLCBCeXRlU291cmNlIH0gZnJvbSAnZ29vZ2xlLXByb3RvYnVmJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMDAgZnJvbSAnLi4vLi4vLi4vcHViL3YxL21vZGVscy9jYXRlZ29yaWVzLnBiJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMDEgZnJvbSAnLi4vLi4vLi4vcHViL3YxL21vZGVscy9maWxlLnBiJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMDIgZnJvbSAnLi4vLi4vLi4vcHViL3YxL21vZGVscy91aWQucGInO1xuaW1wb3J0ICogYXMgcHJvdG9QdWJWMU1vZGVsczAwMyBmcm9tICcuLi8uLi8uLi9wdWIvdjEvbW9kZWxzL2F2YXRhci5wYic7XG5pbXBvcnQgKiBhcyBwcm90b1B1YlYxTW9kZWxzMDA0IGZyb20gJy4uLy4uLy4uL3B1Yi92MS9tb2RlbHMvc3RpY2tlci5wYic7XG5pbXBvcnQgKiBhcyBwcm90b1B1YlYxTW9kZWxzMDA1IGZyb20gJy4uLy4uLy4uL3B1Yi92MS9tb2RlbHMvbG9jYXRpb24ucGInO1xuaW1wb3J0ICogYXMgcHJvdG9QdWJWMU1vZGVsczAwNiBmcm9tICcuLi8uLi8uLi9wdWIvdjEvbW9kZWxzL3BheW1lbnQucGInO1xuaW1wb3J0ICogYXMgcHJvdG9QdWJWMU1vZGVsczAwNyBmcm9tICcuLi8uLi8uLi9wdWIvdjEvbW9kZWxzL3BlcnNpc3RlbnQtZXZlbnQucGInO1xuaW1wb3J0ICogYXMgcHJvdG9QdWJWMU1vZGVsczAwOCBmcm9tICcuLi8uLi8uLi9wdWIvdjEvbW9kZWxzL3NoYXJlLXByaXZhdGUtZGF0YS5wYic7XG5pbXBvcnQgKiBhcyBwcm90b1B1YlYxTW9kZWxzMDA5IGZyb20gJy4uLy4uLy4uL3B1Yi92MS9tb2RlbHMvZm9ybS5wYic7XG5pbXBvcnQgKiBhcyBwcm90b1B1YlYxTW9kZWxzMDEwIGZyb20gJy4uLy4uLy4uL3B1Yi92MS9tb2RlbHMvcG9sbC5wYic7XG5pbXBvcnQgKiBhcyBwcm90b1B1YlYxTW9kZWxzMDExIGZyb20gJy4uLy4uLy4uL3B1Yi92MS9tb2RlbHMvbXVjLnBiJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMTIgZnJvbSAnLi4vLi4vLi4vcHViL3YxL21vZGVscy9jYWxsLnBiJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMTMgZnJvbSAnLi4vLi4vLi4vcHViL3YxL21vZGVscy9tYXJrdXAucGInO1xuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBwcm90by5wdWIudjEubW9kZWxzLlRleHRcbiAqL1xuZXhwb3J0IGNsYXNzIFRleHQgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdwcm90by5wdWIudjEubW9kZWxzLlRleHQnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBUZXh0KCk7XG4gICAgVGV4dC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IFRleHQpIHtcbiAgICBfaW5zdGFuY2UudGV4dCA9IF9pbnN0YW5jZS50ZXh0IHx8ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKF9pbnN0YW5jZTogVGV4dCwgX3JlYWRlcjogQmluYXJ5UmVhZGVyKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UudGV4dCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgVGV4dC5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihfaW5zdGFuY2U6IFRleHQsIF93cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChfaW5zdGFuY2UudGV4dCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2UudGV4dCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdGV4dD86IHN0cmluZztcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIFRleHQgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8VGV4dC5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy50ZXh0ID0gX3ZhbHVlLnRleHQ7XG4gICAgVGV4dC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHRleHQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdGV4dDtcbiAgfVxuICBzZXQgdGV4dCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdGV4dCA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFRleHQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogVGV4dC5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRleHQ6IHRoaXMudGV4dFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IFRleHQuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICB0ZXh0OiB0aGlzLnRleHRcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIFRleHQge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIFRleHRcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIHRleHQ/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgVGV4dFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgdGV4dD86IHN0cmluZztcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIHByb3RvLnB1Yi52MS5tb2RlbHMuU2hhcmVVaWRcbiAqL1xuZXhwb3J0IGNsYXNzIFNoYXJlVWlkIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAncHJvdG8ucHViLnYxLm1vZGVscy5TaGFyZVVpZCc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFNoYXJlVWlkKCk7XG4gICAgU2hhcmVVaWQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBTaGFyZVVpZCkge1xuICAgIF9pbnN0YW5jZS51aWQgPSBfaW5zdGFuY2UudWlkIHx8IHVuZGVmaW5lZDtcbiAgICBfaW5zdGFuY2UucGhvbmVOdW1iZXIgPSBfaW5zdGFuY2UucGhvbmVOdW1iZXIgfHwgJyc7XG4gICAgX2luc3RhbmNlLm5hbWUgPSBfaW5zdGFuY2UubmFtZSB8fCAnJztcbiAgICBfaW5zdGFuY2Uuam9pblRva2VuID0gX2luc3RhbmNlLmpvaW5Ub2tlbiB8fCAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IFNoYXJlVWlkLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS51aWQgPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLnVpZCxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UucGhvbmVOdW1iZXIgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIF9pbnN0YW5jZS5uYW1lID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBfaW5zdGFuY2Uuam9pblRva2VuID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBTaGFyZVVpZC5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihfaW5zdGFuY2U6IFNoYXJlVWlkLCBfd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoX2luc3RhbmNlLnVpZCkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDEsXG4gICAgICAgIF9pbnN0YW5jZS51aWQgYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5waG9uZU51bWJlcikge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygyLCBfaW5zdGFuY2UucGhvbmVOdW1iZXIpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLm5hbWUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMywgX2luc3RhbmNlLm5hbWUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmpvaW5Ub2tlbikge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZyg0LCBfaW5zdGFuY2Uuam9pblRva2VuKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF91aWQ/OiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZDtcbiAgcHJpdmF0ZSBfcGhvbmVOdW1iZXI/OiBzdHJpbmc7XG4gIHByaXZhdGUgX25hbWU/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2pvaW5Ub2tlbj86IHN0cmluZztcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIFNoYXJlVWlkIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFNoYXJlVWlkLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnVpZCA9IF92YWx1ZS51aWQgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQoX3ZhbHVlLnVpZCkgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5waG9uZU51bWJlciA9IF92YWx1ZS5waG9uZU51bWJlcjtcbiAgICB0aGlzLm5hbWUgPSBfdmFsdWUubmFtZTtcbiAgICB0aGlzLmpvaW5Ub2tlbiA9IF92YWx1ZS5qb2luVG9rZW47XG4gICAgU2hhcmVVaWQucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCB1aWQoKTogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl91aWQ7XG4gIH1cbiAgc2V0IHVpZCh2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl91aWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcGhvbmVOdW1iZXIoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcGhvbmVOdW1iZXI7XG4gIH1cbiAgc2V0IHBob25lTnVtYmVyKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9waG9uZU51bWJlciA9IHZhbHVlO1xuICB9XG4gIGdldCBuYW1lKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cbiAgc2V0IG5hbWUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgam9pblRva2VuKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2pvaW5Ub2tlbjtcbiAgfVxuICBzZXQgam9pblRva2VuKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9qb2luVG9rZW4gPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBTaGFyZVVpZC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBTaGFyZVVpZC5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVpZDogdGhpcy51aWQgPyB0aGlzLnVpZC50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgcGhvbmVOdW1iZXI6IHRoaXMucGhvbmVOdW1iZXIsXG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICBqb2luVG9rZW46IHRoaXMuam9pblRva2VuXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogU2hhcmVVaWQuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICB1aWQ6IHRoaXMudWlkID8gdGhpcy51aWQudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgcGhvbmVOdW1iZXI6IHRoaXMucGhvbmVOdW1iZXIsXG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICBqb2luVG9rZW46IHRoaXMuam9pblRva2VuXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBTaGFyZVVpZCB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgU2hhcmVVaWRcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIHVpZD86IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLkFzT2JqZWN0O1xuICAgIHBob25lTnVtYmVyPzogc3RyaW5nO1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgam9pblRva2VuPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIFNoYXJlVWlkXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICB1aWQ/OiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgcGhvbmVOdW1iZXI/OiBzdHJpbmc7XG4gICAgbmFtZT86IHN0cmluZztcbiAgICBqb2luVG9rZW4/OiBzdHJpbmc7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBwcm90by5wdWIudjEubW9kZWxzLk1lc3NhZ2VEZWxpdmVyeUFja1xuICovXG5leHBvcnQgY2xhc3MgTWVzc2FnZURlbGl2ZXJ5QWNrIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAncHJvdG8ucHViLnYxLm1vZGVscy5NZXNzYWdlRGVsaXZlcnlBY2snO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBNZXNzYWdlRGVsaXZlcnlBY2soKTtcbiAgICBNZXNzYWdlRGVsaXZlcnlBY2suZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBNZXNzYWdlRGVsaXZlcnlBY2spIHtcbiAgICBfaW5zdGFuY2UucGFja2V0SWQgPSBfaW5zdGFuY2UucGFja2V0SWQgfHwgJyc7XG4gICAgX2luc3RhbmNlLmlkID0gX2luc3RhbmNlLmlkIHx8ICcwJztcbiAgICBfaW5zdGFuY2UudGltZSA9IF9pbnN0YW5jZS50aW1lIHx8ICcwJztcbiAgICBfaW5zdGFuY2UuZnJvbSA9IF9pbnN0YW5jZS5mcm9tIHx8IHVuZGVmaW5lZDtcbiAgICBfaW5zdGFuY2UudG8gPSBfaW5zdGFuY2UudG8gfHwgdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogTWVzc2FnZURlbGl2ZXJ5QWNrLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5wYWNrZXRJZCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLmlkID0gX3JlYWRlci5yZWFkSW50NjRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIF9pbnN0YW5jZS50aW1lID0gX3JlYWRlci5yZWFkSW50NjRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIF9pbnN0YW5jZS5mcm9tID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5mcm9tLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIF9pbnN0YW5jZS50byA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UudG8sXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgTWVzc2FnZURlbGl2ZXJ5QWNrLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogTWVzc2FnZURlbGl2ZXJ5QWNrLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLnBhY2tldElkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS5wYWNrZXRJZCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuaWQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQ2NFN0cmluZygyLCBfaW5zdGFuY2UuaWQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnRpbWUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQ2NFN0cmluZygzLCBfaW5zdGFuY2UudGltZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZnJvbSkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDQsXG4gICAgICAgIF9pbnN0YW5jZS5mcm9tIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UudG8pIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA1LFxuICAgICAgICBfaW5zdGFuY2UudG8gYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9wYWNrZXRJZD86IHN0cmluZztcbiAgcHJpdmF0ZSBfaWQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3RpbWU/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2Zyb20/OiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZDtcbiAgcHJpdmF0ZSBfdG8/OiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZDtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIE1lc3NhZ2VEZWxpdmVyeUFjayB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxNZXNzYWdlRGVsaXZlcnlBY2suQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMucGFja2V0SWQgPSBfdmFsdWUucGFja2V0SWQ7XG4gICAgdGhpcy5pZCA9IF92YWx1ZS5pZDtcbiAgICB0aGlzLnRpbWUgPSBfdmFsdWUudGltZTtcbiAgICB0aGlzLmZyb20gPSBfdmFsdWUuZnJvbVxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQoX3ZhbHVlLmZyb20pXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnRvID0gX3ZhbHVlLnRvID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkKF92YWx1ZS50bykgOiB1bmRlZmluZWQ7XG4gICAgTWVzc2FnZURlbGl2ZXJ5QWNrLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgcGFja2V0SWQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcGFja2V0SWQ7XG4gIH1cbiAgc2V0IHBhY2tldElkKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9wYWNrZXRJZCA9IHZhbHVlO1xuICB9XG4gIGdldCBpZCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9pZDtcbiAgfVxuICBzZXQgaWQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHRpbWUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdGltZTtcbiAgfVxuICBzZXQgdGltZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdGltZSA9IHZhbHVlO1xuICB9XG4gIGdldCBmcm9tKCk6IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZnJvbTtcbiAgfVxuICBzZXQgZnJvbSh2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9mcm9tID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHRvKCk6IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdG87XG4gIH1cbiAgc2V0IHRvKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZCB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3RvID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgTWVzc2FnZURlbGl2ZXJ5QWNrLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IE1lc3NhZ2VEZWxpdmVyeUFjay5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhY2tldElkOiB0aGlzLnBhY2tldElkLFxuICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICB0aW1lOiB0aGlzLnRpbWUsXG4gICAgICBmcm9tOiB0aGlzLmZyb20gPyB0aGlzLmZyb20udG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIHRvOiB0aGlzLnRvID8gdGhpcy50by50b09iamVjdCgpIDogdW5kZWZpbmVkXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogTWVzc2FnZURlbGl2ZXJ5QWNrLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFja2V0SWQ6IHRoaXMucGFja2V0SWQsXG4gICAgICBpZDogdGhpcy5pZCxcbiAgICAgIHRpbWU6IHRoaXMudGltZSxcbiAgICAgIGZyb206IHRoaXMuZnJvbSA/IHRoaXMuZnJvbS50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICB0bzogdGhpcy50byA/IHRoaXMudG8udG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBNZXNzYWdlRGVsaXZlcnlBY2sge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIE1lc3NhZ2VEZWxpdmVyeUFja1xuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgcGFja2V0SWQ/OiBzdHJpbmc7XG4gICAgaWQ/OiBzdHJpbmc7XG4gICAgdGltZT86IHN0cmluZztcbiAgICBmcm9tPzogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuQXNPYmplY3Q7XG4gICAgdG8/OiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5Bc09iamVjdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBNZXNzYWdlRGVsaXZlcnlBY2tcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHBhY2tldElkPzogc3RyaW5nO1xuICAgIGlkPzogc3RyaW5nO1xuICAgIHRpbWU/OiBzdHJpbmc7XG4gICAgZnJvbT86IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICB0bz86IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIHByb3RvLnB1Yi52MS5tb2RlbHMuTWVzc2FnZUJyaWVmXG4gKi9cbmV4cG9ydCBjbGFzcyBNZXNzYWdlQnJpZWYgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdwcm90by5wdWIudjEubW9kZWxzLk1lc3NhZ2VCcmllZic7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IE1lc3NhZ2VCcmllZigpO1xuICAgIE1lc3NhZ2VCcmllZi5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IE1lc3NhZ2VCcmllZikge1xuICAgIF9pbnN0YW5jZS5wYWNrZXRJZCA9IF9pbnN0YW5jZS5wYWNrZXRJZCB8fCAnJztcbiAgICBfaW5zdGFuY2UuaWQgPSBfaW5zdGFuY2UuaWQgfHwgJzAnO1xuICAgIF9pbnN0YW5jZS50aW1lID0gX2luc3RhbmNlLnRpbWUgfHwgJzAnO1xuICAgIF9pbnN0YW5jZS5mcm9tID0gX2luc3RhbmNlLmZyb20gfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS50byA9IF9pbnN0YW5jZS50byB8fCB1bmRlZmluZWQ7XG4gICAgX2luc3RhbmNlLm1lc3NhZ2VUeXBlID0gX2luc3RhbmNlLm1lc3NhZ2VUeXBlIHx8IDA7XG4gICAgX2luc3RhbmNlLnRleHQgPSBfaW5zdGFuY2UudGV4dCB8fCAnJztcbiAgICBfaW5zdGFuY2UudGh1bWJuYWlsUmVmZXJlbmNlID0gX2luc3RhbmNlLnRodW1ibmFpbFJlZmVyZW5jZSB8fCB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBNZXNzYWdlQnJpZWYsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLnBhY2tldElkID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UuaWQgPSBfcmVhZGVyLnJlYWRJbnQ2NFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgX2luc3RhbmNlLnRpbWUgPSBfcmVhZGVyLnJlYWRJbnQ2NFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgX2luc3RhbmNlLmZyb20gPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmZyb20sXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgX2luc3RhbmNlLnRvID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS50byxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICBfaW5zdGFuY2UubWVzc2FnZVR5cGUgPSBfcmVhZGVyLnJlYWRFbnVtKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNzpcbiAgICAgICAgICBfaW5zdGFuY2UudGV4dCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgX2luc3RhbmNlLnRodW1ibmFpbFJlZmVyZW5jZSA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAxLkZpbGUoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLnRodW1ibmFpbFJlZmVyZW5jZSxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDEuRmlsZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgTWVzc2FnZUJyaWVmLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogTWVzc2FnZUJyaWVmLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLnBhY2tldElkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS5wYWNrZXRJZCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuaWQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQ2NFN0cmluZygyLCBfaW5zdGFuY2UuaWQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnRpbWUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQ2NFN0cmluZygzLCBfaW5zdGFuY2UudGltZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZnJvbSkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDQsXG4gICAgICAgIF9pbnN0YW5jZS5mcm9tIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UudG8pIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA1LFxuICAgICAgICBfaW5zdGFuY2UudG8gYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5tZXNzYWdlVHlwZSkge1xuICAgICAgX3dyaXRlci53cml0ZUVudW0oNiwgX2luc3RhbmNlLm1lc3NhZ2VUeXBlKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS50ZXh0KSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDcsIF9pbnN0YW5jZS50ZXh0KTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS50aHVtYm5haWxSZWZlcmVuY2UpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA4LFxuICAgICAgICBfaW5zdGFuY2UudGh1bWJuYWlsUmVmZXJlbmNlIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMS5GaWxlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3BhY2tldElkPzogc3RyaW5nO1xuICBwcml2YXRlIF9pZD86IHN0cmluZztcbiAgcHJpdmF0ZSBfdGltZT86IHN0cmluZztcbiAgcHJpdmF0ZSBfZnJvbT86IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkO1xuICBwcml2YXRlIF90bz86IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkO1xuICBwcml2YXRlIF9tZXNzYWdlVHlwZT86IE1lc3NhZ2VCcmllZi5NZXNzYWdlVHlwZXM7XG4gIHByaXZhdGUgX3RleHQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3RodW1ibmFpbFJlZmVyZW5jZT86IHByb3RvUHViVjFNb2RlbHMwMDEuRmlsZTtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIE1lc3NhZ2VCcmllZiB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxNZXNzYWdlQnJpZWYuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMucGFja2V0SWQgPSBfdmFsdWUucGFja2V0SWQ7XG4gICAgdGhpcy5pZCA9IF92YWx1ZS5pZDtcbiAgICB0aGlzLnRpbWUgPSBfdmFsdWUudGltZTtcbiAgICB0aGlzLmZyb20gPSBfdmFsdWUuZnJvbVxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQoX3ZhbHVlLmZyb20pXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnRvID0gX3ZhbHVlLnRvID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkKF92YWx1ZS50bykgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5tZXNzYWdlVHlwZSA9IF92YWx1ZS5tZXNzYWdlVHlwZTtcbiAgICB0aGlzLnRleHQgPSBfdmFsdWUudGV4dDtcbiAgICB0aGlzLnRodW1ibmFpbFJlZmVyZW5jZSA9IF92YWx1ZS50aHVtYm5haWxSZWZlcmVuY2VcbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMDEuRmlsZShfdmFsdWUudGh1bWJuYWlsUmVmZXJlbmNlKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgTWVzc2FnZUJyaWVmLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgcGFja2V0SWQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcGFja2V0SWQ7XG4gIH1cbiAgc2V0IHBhY2tldElkKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9wYWNrZXRJZCA9IHZhbHVlO1xuICB9XG4gIGdldCBpZCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9pZDtcbiAgfVxuICBzZXQgaWQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHRpbWUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdGltZTtcbiAgfVxuICBzZXQgdGltZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdGltZSA9IHZhbHVlO1xuICB9XG4gIGdldCBmcm9tKCk6IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZnJvbTtcbiAgfVxuICBzZXQgZnJvbSh2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9mcm9tID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHRvKCk6IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdG87XG4gIH1cbiAgc2V0IHRvKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZCB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3RvID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG1lc3NhZ2VUeXBlKCk6IE1lc3NhZ2VCcmllZi5NZXNzYWdlVHlwZXMgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9tZXNzYWdlVHlwZTtcbiAgfVxuICBzZXQgbWVzc2FnZVR5cGUodmFsdWU6IE1lc3NhZ2VCcmllZi5NZXNzYWdlVHlwZXMgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9tZXNzYWdlVHlwZSA9IHZhbHVlO1xuICB9XG4gIGdldCB0ZXh0KCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3RleHQ7XG4gIH1cbiAgc2V0IHRleHQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3RleHQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdGh1bWJuYWlsUmVmZXJlbmNlKCk6IHByb3RvUHViVjFNb2RlbHMwMDEuRmlsZSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3RodW1ibmFpbFJlZmVyZW5jZTtcbiAgfVxuICBzZXQgdGh1bWJuYWlsUmVmZXJlbmNlKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDAxLkZpbGUgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl90aHVtYm5haWxSZWZlcmVuY2UgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBNZXNzYWdlQnJpZWYuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogTWVzc2FnZUJyaWVmLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFja2V0SWQ6IHRoaXMucGFja2V0SWQsXG4gICAgICBpZDogdGhpcy5pZCxcbiAgICAgIHRpbWU6IHRoaXMudGltZSxcbiAgICAgIGZyb206IHRoaXMuZnJvbSA/IHRoaXMuZnJvbS50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgdG86IHRoaXMudG8gPyB0aGlzLnRvLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBtZXNzYWdlVHlwZTogdGhpcy5tZXNzYWdlVHlwZSxcbiAgICAgIHRleHQ6IHRoaXMudGV4dCxcbiAgICAgIHRodW1ibmFpbFJlZmVyZW5jZTogdGhpcy50aHVtYm5haWxSZWZlcmVuY2VcbiAgICAgICAgPyB0aGlzLnRodW1ibmFpbFJlZmVyZW5jZS50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogTWVzc2FnZUJyaWVmLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFja2V0SWQ6IHRoaXMucGFja2V0SWQsXG4gICAgICBpZDogdGhpcy5pZCxcbiAgICAgIHRpbWU6IHRoaXMudGltZSxcbiAgICAgIGZyb206IHRoaXMuZnJvbSA/IHRoaXMuZnJvbS50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICB0bzogdGhpcy50byA/IHRoaXMudG8udG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgbWVzc2FnZVR5cGU6XG4gICAgICAgIE1lc3NhZ2VCcmllZi5NZXNzYWdlVHlwZXNbXG4gICAgICAgICAgdGhpcy5tZXNzYWdlVHlwZSA9PT0gbnVsbCB8fCB0aGlzLm1lc3NhZ2VUeXBlID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgOiB0aGlzLm1lc3NhZ2VUeXBlXG4gICAgICAgIF0sXG4gICAgICB0ZXh0OiB0aGlzLnRleHQsXG4gICAgICB0aHVtYm5haWxSZWZlcmVuY2U6IHRoaXMudGh1bWJuYWlsUmVmZXJlbmNlXG4gICAgICAgID8gdGhpcy50aHVtYm5haWxSZWZlcmVuY2UudG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBNZXNzYWdlQnJpZWYge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIE1lc3NhZ2VCcmllZlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgcGFja2V0SWQ/OiBzdHJpbmc7XG4gICAgaWQ/OiBzdHJpbmc7XG4gICAgdGltZT86IHN0cmluZztcbiAgICBmcm9tPzogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuQXNPYmplY3Q7XG4gICAgdG8/OiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5Bc09iamVjdDtcbiAgICBtZXNzYWdlVHlwZT86IE1lc3NhZ2VCcmllZi5NZXNzYWdlVHlwZXM7XG4gICAgdGV4dD86IHN0cmluZztcbiAgICB0aHVtYm5haWxSZWZlcmVuY2U/OiBwcm90b1B1YlYxTW9kZWxzMDAxLkZpbGUuQXNPYmplY3Q7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgTWVzc2FnZUJyaWVmXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBwYWNrZXRJZD86IHN0cmluZztcbiAgICBpZD86IHN0cmluZztcbiAgICB0aW1lPzogc3RyaW5nO1xuICAgIGZyb20/OiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgdG8/OiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgbWVzc2FnZVR5cGU/OiBzdHJpbmc7XG4gICAgdGV4dD86IHN0cmluZztcbiAgICB0aHVtYm5haWxSZWZlcmVuY2U/OiBwcm90b1B1YlYxTW9kZWxzMDAxLkZpbGUuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICB9XG4gIGV4cG9ydCBlbnVtIE1lc3NhZ2VUeXBlcyB7XG4gICAgTk9UX1NFVCA9IDAsXG4gICAgVEVYVCA9IDEsXG4gICAgRklMRSA9IDIsXG4gICAgU1RJQ0tFUiA9IDMsXG4gICAgTE9DQVRJT04gPSA0LFxuICAgIExJVkVfTE9DQVRJT04gPSA1LFxuICAgIFBPTEwgPSA2LFxuICAgIFRSQU5TQUNUSU9OID0gNyxcbiAgICBGT1JNID0gOCxcbiAgICBCVVRUT05TID0gOSxcbiAgICBTSEFSRV9VSUQgPSAxMCxcbiAgICBGT1JNX1JFU1VMVCA9IDExLFxuICAgIFNIQVJFX1BSSVZBVEVfREFUQV9SRVFVRVNUID0gMTIsXG4gICAgU0hBUkVfUFJJVkFURV9EQVRBX0FDQ0VQVEFOQ0UgPSAxMyxcbiAgICBDQUxMX0VORCA9IDE0LFxuICAgIENBTExfQlVTWSA9IDE1LFxuICAgIENBTExfREVDTElORUQgPSAxNixcbiAgICBUQUJMRSA9IDE3LFxuICAgIFBFX0FTX05FV19DT05UQUNUX0FEREVEID0gMTgsXG4gICAgUEVfQlNfQk9UX05PVF9SRVNQT05ESU5HID0gMTksXG4gICAgUEVfTVNfS0lDS19VU0VSID0gMjAsXG4gICAgUEVfTVNfQUREX1VTRVIgPSAyMSxcbiAgICBQRV9NU19QSU5fTUVTU0FHRSA9IDIyLFxuICAgIFBFX01TX05BTUVfQ0hBTkdFRCA9IDIzLFxuICAgIFBFX01TX0FWQVRBUl9DSEFOR0VEID0gMjQsXG4gICAgUEVfTVNfTVVDX0NSRUFURUQgPSAyNSxcbiAgICBQRV9NU19MRUFWRV9VU0VSID0gMjYsXG4gICAgUEVfTVNfSk9JTkVEX1VTRVIgPSAyNyxcbiAgICBQRV9NU19ERUxFVEVEID0gMjgsXG4gICAgUERUX1BIT05FX05VTUJFUiA9IDI5LFxuICAgIFBEVF9VU0VSTkFNRSA9IDMwLFxuICAgIFBEVF9FTUFJTCA9IDMxLFxuICAgIFBEVF9OQU1FID0gMzJcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIHByb3RvLnB1Yi52MS5tb2RlbHMuTWVzc2FnZVxuICovXG5leHBvcnQgY2xhc3MgTWVzc2FnZSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ3Byb3RvLnB1Yi52MS5tb2RlbHMuTWVzc2FnZSc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IE1lc3NhZ2UoKTtcbiAgICBNZXNzYWdlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogTWVzc2FnZSkge1xuICAgIF9pbnN0YW5jZS5wYWNrZXRJZCA9IF9pbnN0YW5jZS5wYWNrZXRJZCB8fCAnJztcbiAgICBfaW5zdGFuY2UuaWQgPSBfaW5zdGFuY2UuaWQgfHwgJzAnO1xuICAgIF9pbnN0YW5jZS50aW1lID0gX2luc3RhbmNlLnRpbWUgfHwgJzAnO1xuICAgIF9pbnN0YW5jZS5mcm9tID0gX2luc3RhbmNlLmZyb20gfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS50byA9IF9pbnN0YW5jZS50byB8fCB1bmRlZmluZWQ7XG4gICAgX2luc3RhbmNlLnJlcGx5VG9JZCA9IF9pbnN0YW5jZS5yZXBseVRvSWQgfHwgJzAnO1xuICAgIF9pbnN0YW5jZS5yZXBsaWVkTWVzc2FnZUJyaWVmID0gX2luc3RhbmNlLnJlcGxpZWRNZXNzYWdlQnJpZWYgfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5mb3J3YXJkRnJvbSA9IF9pbnN0YW5jZS5mb3J3YXJkRnJvbSB8fCB1bmRlZmluZWQ7XG4gICAgX2luc3RhbmNlLmdlbmVyYXRlZEJ5ID0gX2luc3RhbmNlLmdlbmVyYXRlZEJ5IHx8IHVuZGVmaW5lZDtcbiAgICBfaW5zdGFuY2UuZWRpdGVkID0gX2luc3RhbmNlLmVkaXRlZCB8fCBmYWxzZTtcbiAgICBfaW5zdGFuY2UuZW5jcnlwdGVkID0gX2luc3RhbmNlLmVuY3J5cHRlZCB8fCBmYWxzZTtcbiAgICBfaW5zdGFuY2UudHRsID0gX2luc3RhbmNlLnR0bCB8fCAwO1xuICAgIF9pbnN0YW5jZS50aHJlYWQgPSBfaW5zdGFuY2UudGhyZWFkIHx8ICcwJztcbiAgICBfaW5zdGFuY2Uuc2hvdWxkQmVRdWlldCA9IF9pbnN0YW5jZS5zaG91bGRCZVF1aWV0IHx8IGZhbHNlO1xuICAgIF9pbnN0YW5jZS5tdWNNaW5pbXVtQWNjZXNzTGV2ZWwgPSBfaW5zdGFuY2UubXVjTWluaW11bUFjY2Vzc0xldmVsIHx8IDA7XG4gICAgX2luc3RhbmNlLnNwZWNpYWxUYXJnZXQgPSBfaW5zdGFuY2Uuc3BlY2lhbFRhcmdldCB8fCB1bmRlZmluZWQ7XG4gICAgX2luc3RhbmNlLm1lc3NhZ2VNYXJrdXAgPSBfaW5zdGFuY2UubWVzc2FnZU1hcmt1cCB8fCB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBNZXNzYWdlLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5wYWNrZXRJZCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLmlkID0gX3JlYWRlci5yZWFkSW50NjRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIF9pbnN0YW5jZS50aW1lID0gX3JlYWRlci5yZWFkSW50NjRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIF9pbnN0YW5jZS5mcm9tID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5mcm9tLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIF9pbnN0YW5jZS50byA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UudG8sXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgX2luc3RhbmNlLnJlcGx5VG9JZCA9IF9yZWFkZXIucmVhZEludDY0U3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzA6XG4gICAgICAgICAgX2luc3RhbmNlLnJlcGxpZWRNZXNzYWdlQnJpZWYgPSBuZXcgTWVzc2FnZUJyaWVmKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5yZXBsaWVkTWVzc2FnZUJyaWVmLFxuICAgICAgICAgICAgTWVzc2FnZUJyaWVmLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgODpcbiAgICAgICAgICBfaW5zdGFuY2UuZm9yd2FyZEZyb20gPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmZvcndhcmRGcm9tLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzMzpcbiAgICAgICAgICBfaW5zdGFuY2UuZ2VuZXJhdGVkQnkgPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmdlbmVyYXRlZEJ5LFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA5OlxuICAgICAgICAgIF9pbnN0YW5jZS5lZGl0ZWQgPSBfcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgX2luc3RhbmNlLmVuY3J5cHRlZCA9IF9yZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyMzpcbiAgICAgICAgICBfaW5zdGFuY2UudHRsID0gX3JlYWRlci5yZWFkSW50MzIoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyODpcbiAgICAgICAgICBfaW5zdGFuY2UudGhyZWFkID0gX3JlYWRlci5yZWFkSW50NjRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOTpcbiAgICAgICAgICBfaW5zdGFuY2Uuc2hvdWxkQmVRdWlldCA9IF9yZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyNDpcbiAgICAgICAgICBfaW5zdGFuY2UubXVjTWluaW11bUFjY2Vzc0xldmVsID0gX3JlYWRlci5yZWFkRW51bSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI1OlxuICAgICAgICAgIF9pbnN0YW5jZS5zcGVjaWFsVGFyZ2V0ID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5zcGVjaWFsVGFyZ2V0LFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzNDpcbiAgICAgICAgICBfaW5zdGFuY2UubWVzc2FnZU1hcmt1cCA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDEzLk1lc3NhZ2VNYXJrdXAoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLm1lc3NhZ2VNYXJrdXAsXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDEzLk1lc3NhZ2VNYXJrdXAuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICBfaW5zdGFuY2UudGV4dCA9IG5ldyBUZXh0KCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShfaW5zdGFuY2UudGV4dCwgVGV4dC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgIF9pbnN0YW5jZS5maWxlID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDEuRmlsZSgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuZmlsZSxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDEuRmlsZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgIF9pbnN0YW5jZS5zdGlja2VyID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDQuU3RpY2tlcigpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2Uuc3RpY2tlcixcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDQuU3RpY2tlci5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE0OlxuICAgICAgICAgIF9pbnN0YW5jZS5sb2NhdGlvbiA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDA1LkxvY2F0aW9uKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5sb2NhdGlvbixcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDUuTG9jYXRpb24uZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxNTpcbiAgICAgICAgICBfaW5zdGFuY2UubGl2ZUxvY2F0aW9uID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDUuTGl2ZUxvY2F0aW9uKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5saXZlTG9jYXRpb24sXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDA1LkxpdmVMb2NhdGlvbi5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE2OlxuICAgICAgICAgIF9pbnN0YW5jZS5wb2xsID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMTAuUG9sbCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UucG9sbCxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMTAuUG9sbC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE3OlxuICAgICAgICAgIF9pbnN0YW5jZS50cmFuc2FjdGlvbiA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDA2LlRyYW5zYWN0aW9uKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS50cmFuc2FjdGlvbixcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDYuVHJhbnNhY3Rpb24uZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxODpcbiAgICAgICAgICBfaW5zdGFuY2UuZm9ybSA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDA5LkZvcm0oKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmZvcm0sXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDA5LkZvcm0uZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOTpcbiAgICAgICAgICBfaW5zdGFuY2UucGVyc2lzdEV2ZW50ID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDcuUGVyc2lzdGVudEV2ZW50KCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5wZXJzaXN0RXZlbnQsXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDA3LlBlcnNpc3RlbnRFdmVudC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDIwOlxuICAgICAgICAgIF9pbnN0YW5jZS5idXR0b25zID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDkuQnV0dG9ucygpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuYnV0dG9ucyxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDkuQnV0dG9ucy5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDIxOlxuICAgICAgICAgIF9pbnN0YW5jZS5zaGFyZVVpZCA9IG5ldyBTaGFyZVVpZCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2Uuc2hhcmVVaWQsXG4gICAgICAgICAgICBTaGFyZVVpZC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDIyOlxuICAgICAgICAgIF9pbnN0YW5jZS5mb3JtUmVzdWx0ID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDkuRm9ybVJlc3VsdCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuZm9ybVJlc3VsdCxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDkuRm9ybVJlc3VsdC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI2OlxuICAgICAgICAgIF9pbnN0YW5jZS5zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDA4LlNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0KCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDguU2hhcmVQcml2YXRlRGF0YVJlcXVlc3RcbiAgICAgICAgICAgICAgLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjc6XG4gICAgICAgICAgX2luc3RhbmNlLnNoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDguU2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLnNoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwOC5TaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZVxuICAgICAgICAgICAgICAuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzMTpcbiAgICAgICAgICBfaW5zdGFuY2UuY2FsbEV2ZW50ID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMTIuQ2FsbEV2ZW50KCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5jYWxsRXZlbnQsXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDEyLkNhbGxFdmVudC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgIF9pbnN0YW5jZS50YWJsZSA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDA5LlRhYmxlKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS50YWJsZSxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDkuVGFibGUuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIE1lc3NhZ2UucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoX2luc3RhbmNlOiBNZXNzYWdlLCBfd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoX2luc3RhbmNlLnBhY2tldElkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS5wYWNrZXRJZCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuaWQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQ2NFN0cmluZygyLCBfaW5zdGFuY2UuaWQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnRpbWUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQ2NFN0cmluZyg0LCBfaW5zdGFuY2UudGltZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZnJvbSkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDUsXG4gICAgICAgIF9pbnN0YW5jZS5mcm9tIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UudG8pIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA2LFxuICAgICAgICBfaW5zdGFuY2UudG8gYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5yZXBseVRvSWQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQ2NFN0cmluZyg3LCBfaW5zdGFuY2UucmVwbHlUb0lkKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5yZXBsaWVkTWVzc2FnZUJyaWVmKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMzAsXG4gICAgICAgIF9pbnN0YW5jZS5yZXBsaWVkTWVzc2FnZUJyaWVmIGFzIGFueSxcbiAgICAgICAgTWVzc2FnZUJyaWVmLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmZvcndhcmRGcm9tKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgOCxcbiAgICAgICAgX2luc3RhbmNlLmZvcndhcmRGcm9tIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZ2VuZXJhdGVkQnkpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAzMyxcbiAgICAgICAgX2luc3RhbmNlLmdlbmVyYXRlZEJ5IGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZWRpdGVkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlQm9vbCg5LCBfaW5zdGFuY2UuZWRpdGVkKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5lbmNyeXB0ZWQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVCb29sKDEwLCBfaW5zdGFuY2UuZW5jcnlwdGVkKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS50dGwpIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQzMigyMywgX2luc3RhbmNlLnR0bCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UudGhyZWFkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlSW50NjRTdHJpbmcoMjgsIF9pbnN0YW5jZS50aHJlYWQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnNob3VsZEJlUXVpZXQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVCb29sKDI5LCBfaW5zdGFuY2Uuc2hvdWxkQmVRdWlldCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UubXVjTWluaW11bUFjY2Vzc0xldmVsKSB7XG4gICAgICBfd3JpdGVyLndyaXRlRW51bSgyNCwgX2luc3RhbmNlLm11Y01pbmltdW1BY2Nlc3NMZXZlbCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uuc3BlY2lhbFRhcmdldCkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDI1LFxuICAgICAgICBfaW5zdGFuY2Uuc3BlY2lhbFRhcmdldCBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLm1lc3NhZ2VNYXJrdXApIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAzNCxcbiAgICAgICAgX2luc3RhbmNlLm1lc3NhZ2VNYXJrdXAgYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDEzLk1lc3NhZ2VNYXJrdXAuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UudGV4dCkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDExLFxuICAgICAgICBfaW5zdGFuY2UudGV4dCBhcyBhbnksXG4gICAgICAgIFRleHQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZmlsZSkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDEyLFxuICAgICAgICBfaW5zdGFuY2UuZmlsZSBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDEuRmlsZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5zdGlja2VyKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMTMsXG4gICAgICAgIF9pbnN0YW5jZS5zdGlja2VyIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwNC5TdGlja2VyLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmxvY2F0aW9uKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMTQsXG4gICAgICAgIF9pbnN0YW5jZS5sb2NhdGlvbiBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDUuTG9jYXRpb24uc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UubGl2ZUxvY2F0aW9uKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMTUsXG4gICAgICAgIF9pbnN0YW5jZS5saXZlTG9jYXRpb24gYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDA1LkxpdmVMb2NhdGlvbi5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5wb2xsKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMTYsXG4gICAgICAgIF9pbnN0YW5jZS5wb2xsIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxMC5Qb2xsLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnRyYW5zYWN0aW9uKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMTcsXG4gICAgICAgIF9pbnN0YW5jZS50cmFuc2FjdGlvbiBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDYuVHJhbnNhY3Rpb24uc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZm9ybSkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDE4LFxuICAgICAgICBfaW5zdGFuY2UuZm9ybSBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDkuRm9ybS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5wZXJzaXN0RXZlbnQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAxOSxcbiAgICAgICAgX2luc3RhbmNlLnBlcnNpc3RFdmVudCBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDcuUGVyc2lzdGVudEV2ZW50LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmJ1dHRvbnMpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAyMCxcbiAgICAgICAgX2luc3RhbmNlLmJ1dHRvbnMgYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDA5LkJ1dHRvbnMuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uuc2hhcmVVaWQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAyMSxcbiAgICAgICAgX2luc3RhbmNlLnNoYXJlVWlkIGFzIGFueSxcbiAgICAgICAgU2hhcmVVaWQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZm9ybVJlc3VsdCkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDIyLFxuICAgICAgICBfaW5zdGFuY2UuZm9ybVJlc3VsdCBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDkuRm9ybVJlc3VsdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDI2LFxuICAgICAgICBfaW5zdGFuY2Uuc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QgYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDA4LlNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnNoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMjcsXG4gICAgICAgIF9pbnN0YW5jZS5zaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZSBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDguU2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2Uuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuY2FsbEV2ZW50KSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMzEsXG4gICAgICAgIF9pbnN0YW5jZS5jYWxsRXZlbnQgYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDEyLkNhbGxFdmVudC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS50YWJsZSkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDMyLFxuICAgICAgICBfaW5zdGFuY2UudGFibGUgYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDA5LlRhYmxlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3BhY2tldElkPzogc3RyaW5nO1xuICBwcml2YXRlIF9pZD86IHN0cmluZztcbiAgcHJpdmF0ZSBfdGltZT86IHN0cmluZztcbiAgcHJpdmF0ZSBfZnJvbT86IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkO1xuICBwcml2YXRlIF90bz86IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkO1xuICBwcml2YXRlIF9yZXBseVRvSWQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3JlcGxpZWRNZXNzYWdlQnJpZWY/OiBNZXNzYWdlQnJpZWY7XG4gIHByaXZhdGUgX2ZvcndhcmRGcm9tPzogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQ7XG4gIHByaXZhdGUgX2dlbmVyYXRlZEJ5PzogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQ7XG4gIHByaXZhdGUgX2VkaXRlZD86IGJvb2xlYW47XG4gIHByaXZhdGUgX2VuY3J5cHRlZD86IGJvb2xlYW47XG4gIHByaXZhdGUgX3R0bD86IG51bWJlcjtcbiAgcHJpdmF0ZSBfdGhyZWFkPzogc3RyaW5nO1xuICBwcml2YXRlIF9zaG91bGRCZVF1aWV0PzogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfbXVjTWluaW11bUFjY2Vzc0xldmVsPzogcHJvdG9QdWJWMU1vZGVsczAxMS5Sb2xlO1xuICBwcml2YXRlIF9zcGVjaWFsVGFyZ2V0PzogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQ7XG4gIHByaXZhdGUgX21lc3NhZ2VNYXJrdXA/OiBwcm90b1B1YlYxTW9kZWxzMDEzLk1lc3NhZ2VNYXJrdXA7XG4gIHByaXZhdGUgX3RleHQ/OiBUZXh0O1xuICBwcml2YXRlIF9maWxlPzogcHJvdG9QdWJWMU1vZGVsczAwMS5GaWxlO1xuICBwcml2YXRlIF9zdGlja2VyPzogcHJvdG9QdWJWMU1vZGVsczAwNC5TdGlja2VyO1xuICBwcml2YXRlIF9sb2NhdGlvbj86IHByb3RvUHViVjFNb2RlbHMwMDUuTG9jYXRpb247XG4gIHByaXZhdGUgX2xpdmVMb2NhdGlvbj86IHByb3RvUHViVjFNb2RlbHMwMDUuTGl2ZUxvY2F0aW9uO1xuICBwcml2YXRlIF9wb2xsPzogcHJvdG9QdWJWMU1vZGVsczAxMC5Qb2xsO1xuICBwcml2YXRlIF90cmFuc2FjdGlvbj86IHByb3RvUHViVjFNb2RlbHMwMDYuVHJhbnNhY3Rpb247XG4gIHByaXZhdGUgX2Zvcm0/OiBwcm90b1B1YlYxTW9kZWxzMDA5LkZvcm07XG4gIHByaXZhdGUgX3BlcnNpc3RFdmVudD86IHByb3RvUHViVjFNb2RlbHMwMDcuUGVyc2lzdGVudEV2ZW50O1xuICBwcml2YXRlIF9idXR0b25zPzogcHJvdG9QdWJWMU1vZGVsczAwOS5CdXR0b25zO1xuICBwcml2YXRlIF9zaGFyZVVpZD86IFNoYXJlVWlkO1xuICBwcml2YXRlIF9mb3JtUmVzdWx0PzogcHJvdG9QdWJWMU1vZGVsczAwOS5Gb3JtUmVzdWx0O1xuICBwcml2YXRlIF9zaGFyZVByaXZhdGVEYXRhUmVxdWVzdD86IHByb3RvUHViVjFNb2RlbHMwMDguU2hhcmVQcml2YXRlRGF0YVJlcXVlc3Q7XG4gIHByaXZhdGUgX3NoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlPzogcHJvdG9QdWJWMU1vZGVsczAwOC5TaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZTtcbiAgcHJpdmF0ZSBfY2FsbEV2ZW50PzogcHJvdG9QdWJWMU1vZGVsczAxMi5DYWxsRXZlbnQ7XG4gIHByaXZhdGUgX3RhYmxlPzogcHJvdG9QdWJWMU1vZGVsczAwOS5UYWJsZTtcblxuICBwcml2YXRlIF90eXBlOiBNZXNzYWdlLlR5cGVDYXNlID0gTWVzc2FnZS5UeXBlQ2FzZS5ub25lO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgTWVzc2FnZSB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxNZXNzYWdlLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnBhY2tldElkID0gX3ZhbHVlLnBhY2tldElkO1xuICAgIHRoaXMuaWQgPSBfdmFsdWUuaWQ7XG4gICAgdGhpcy50aW1lID0gX3ZhbHVlLnRpbWU7XG4gICAgdGhpcy5mcm9tID0gX3ZhbHVlLmZyb21cbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkKF92YWx1ZS5mcm9tKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy50byA9IF92YWx1ZS50byA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZChfdmFsdWUudG8pIDogdW5kZWZpbmVkO1xuICAgIHRoaXMucmVwbHlUb0lkID0gX3ZhbHVlLnJlcGx5VG9JZDtcbiAgICB0aGlzLnJlcGxpZWRNZXNzYWdlQnJpZWYgPSBfdmFsdWUucmVwbGllZE1lc3NhZ2VCcmllZlxuICAgICAgPyBuZXcgTWVzc2FnZUJyaWVmKF92YWx1ZS5yZXBsaWVkTWVzc2FnZUJyaWVmKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5mb3J3YXJkRnJvbSA9IF92YWx1ZS5mb3J3YXJkRnJvbVxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQoX3ZhbHVlLmZvcndhcmRGcm9tKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5nZW5lcmF0ZWRCeSA9IF92YWx1ZS5nZW5lcmF0ZWRCeVxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQoX3ZhbHVlLmdlbmVyYXRlZEJ5KVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5lZGl0ZWQgPSBfdmFsdWUuZWRpdGVkO1xuICAgIHRoaXMuZW5jcnlwdGVkID0gX3ZhbHVlLmVuY3J5cHRlZDtcbiAgICB0aGlzLnR0bCA9IF92YWx1ZS50dGw7XG4gICAgdGhpcy50aHJlYWQgPSBfdmFsdWUudGhyZWFkO1xuICAgIHRoaXMuc2hvdWxkQmVRdWlldCA9IF92YWx1ZS5zaG91bGRCZVF1aWV0O1xuICAgIHRoaXMubXVjTWluaW11bUFjY2Vzc0xldmVsID0gX3ZhbHVlLm11Y01pbmltdW1BY2Nlc3NMZXZlbDtcbiAgICB0aGlzLnNwZWNpYWxUYXJnZXQgPSBfdmFsdWUuc3BlY2lhbFRhcmdldFxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQoX3ZhbHVlLnNwZWNpYWxUYXJnZXQpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1lc3NhZ2VNYXJrdXAgPSBfdmFsdWUubWVzc2FnZU1hcmt1cFxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAxMy5NZXNzYWdlTWFya3VwKF92YWx1ZS5tZXNzYWdlTWFya3VwKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy50ZXh0ID0gX3ZhbHVlLnRleHQgPyBuZXcgVGV4dChfdmFsdWUudGV4dCkgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5maWxlID0gX3ZhbHVlLmZpbGVcbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMDEuRmlsZShfdmFsdWUuZmlsZSlcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuc3RpY2tlciA9IF92YWx1ZS5zdGlja2VyXG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDA0LlN0aWNrZXIoX3ZhbHVlLnN0aWNrZXIpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmxvY2F0aW9uID0gX3ZhbHVlLmxvY2F0aW9uXG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDA1LkxvY2F0aW9uKF92YWx1ZS5sb2NhdGlvbilcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMubGl2ZUxvY2F0aW9uID0gX3ZhbHVlLmxpdmVMb2NhdGlvblxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAwNS5MaXZlTG9jYXRpb24oX3ZhbHVlLmxpdmVMb2NhdGlvbilcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMucG9sbCA9IF92YWx1ZS5wb2xsXG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDEwLlBvbGwoX3ZhbHVlLnBvbGwpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnRyYW5zYWN0aW9uID0gX3ZhbHVlLnRyYW5zYWN0aW9uXG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDA2LlRyYW5zYWN0aW9uKF92YWx1ZS50cmFuc2FjdGlvbilcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuZm9ybSA9IF92YWx1ZS5mb3JtXG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDA5LkZvcm0oX3ZhbHVlLmZvcm0pXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnBlcnNpc3RFdmVudCA9IF92YWx1ZS5wZXJzaXN0RXZlbnRcbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMDcuUGVyc2lzdGVudEV2ZW50KF92YWx1ZS5wZXJzaXN0RXZlbnQpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmJ1dHRvbnMgPSBfdmFsdWUuYnV0dG9uc1xuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAwOS5CdXR0b25zKF92YWx1ZS5idXR0b25zKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5zaGFyZVVpZCA9IF92YWx1ZS5zaGFyZVVpZCA/IG5ldyBTaGFyZVVpZChfdmFsdWUuc2hhcmVVaWQpIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuZm9ybVJlc3VsdCA9IF92YWx1ZS5mb3JtUmVzdWx0XG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDA5LkZvcm1SZXN1bHQoX3ZhbHVlLmZvcm1SZXN1bHQpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0ID0gX3ZhbHVlLnNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0XG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDA4LlNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0KFxuICAgICAgICAgIF92YWx1ZS5zaGFyZVByaXZhdGVEYXRhUmVxdWVzdFxuICAgICAgICApXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlID0gX3ZhbHVlLnNoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlXG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDA4LlNoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlKFxuICAgICAgICAgIF92YWx1ZS5zaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZVxuICAgICAgICApXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmNhbGxFdmVudCA9IF92YWx1ZS5jYWxsRXZlbnRcbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMTIuQ2FsbEV2ZW50KF92YWx1ZS5jYWxsRXZlbnQpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnRhYmxlID0gX3ZhbHVlLnRhYmxlXG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDA5LlRhYmxlKF92YWx1ZS50YWJsZSlcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIE1lc3NhZ2UucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBwYWNrZXRJZCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wYWNrZXRJZDtcbiAgfVxuICBzZXQgcGFja2V0SWQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3BhY2tldElkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGlkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2lkO1xuICB9XG4gIHNldCBpZCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5faWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdGltZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90aW1lO1xuICB9XG4gIHNldCB0aW1lKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl90aW1lID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGZyb20oKTogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9mcm9tO1xuICB9XG4gIHNldCBmcm9tKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZCB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2Zyb20gPSB2YWx1ZTtcbiAgfVxuICBnZXQgdG8oKTogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90bztcbiAgfVxuICBzZXQgdG8odmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdG8gPSB2YWx1ZTtcbiAgfVxuICBnZXQgcmVwbHlUb0lkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcGx5VG9JZDtcbiAgfVxuICBzZXQgcmVwbHlUb0lkKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9yZXBseVRvSWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcmVwbGllZE1lc3NhZ2VCcmllZigpOiBNZXNzYWdlQnJpZWYgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9yZXBsaWVkTWVzc2FnZUJyaWVmO1xuICB9XG4gIHNldCByZXBsaWVkTWVzc2FnZUJyaWVmKHZhbHVlOiBNZXNzYWdlQnJpZWYgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9yZXBsaWVkTWVzc2FnZUJyaWVmID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGZvcndhcmRGcm9tKCk6IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZm9yd2FyZEZyb207XG4gIH1cbiAgc2V0IGZvcndhcmRGcm9tKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZCB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2ZvcndhcmRGcm9tID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGdlbmVyYXRlZEJ5KCk6IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZ2VuZXJhdGVkQnk7XG4gIH1cbiAgc2V0IGdlbmVyYXRlZEJ5KHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZCB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2dlbmVyYXRlZEJ5ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGVkaXRlZCgpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZWRpdGVkO1xuICB9XG4gIHNldCBlZGl0ZWQodmFsdWU6IGJvb2xlYW4gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9lZGl0ZWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZW5jcnlwdGVkKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9lbmNyeXB0ZWQ7XG4gIH1cbiAgc2V0IGVuY3J5cHRlZCh2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2VuY3J5cHRlZCA9IHZhbHVlO1xuICB9XG4gIGdldCB0dGwoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdHRsO1xuICB9XG4gIHNldCB0dGwodmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3R0bCA9IHZhbHVlO1xuICB9XG4gIGdldCB0aHJlYWQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdGhyZWFkO1xuICB9XG4gIHNldCB0aHJlYWQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3RocmVhZCA9IHZhbHVlO1xuICB9XG4gIGdldCBzaG91bGRCZVF1aWV0KCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zaG91bGRCZVF1aWV0O1xuICB9XG4gIHNldCBzaG91bGRCZVF1aWV0KHZhbHVlOiBib29sZWFuIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fc2hvdWxkQmVRdWlldCA9IHZhbHVlO1xuICB9XG4gIGdldCBtdWNNaW5pbXVtQWNjZXNzTGV2ZWwoKTogcHJvdG9QdWJWMU1vZGVsczAxMS5Sb2xlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbXVjTWluaW11bUFjY2Vzc0xldmVsO1xuICB9XG4gIHNldCBtdWNNaW5pbXVtQWNjZXNzTGV2ZWwodmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMTEuUm9sZSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX211Y01pbmltdW1BY2Nlc3NMZXZlbCA9IHZhbHVlO1xuICB9XG4gIGdldCBzcGVjaWFsVGFyZ2V0KCk6IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc3BlY2lhbFRhcmdldDtcbiAgfVxuICBzZXQgc3BlY2lhbFRhcmdldCh2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zcGVjaWFsVGFyZ2V0ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG1lc3NhZ2VNYXJrdXAoKTogcHJvdG9QdWJWMU1vZGVsczAxMy5NZXNzYWdlTWFya3VwIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbWVzc2FnZU1hcmt1cDtcbiAgfVxuICBzZXQgbWVzc2FnZU1hcmt1cCh2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAxMy5NZXNzYWdlTWFya3VwIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbWVzc2FnZU1hcmt1cCA9IHZhbHVlO1xuICB9XG4gIGdldCB0ZXh0KCk6IFRleHQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90ZXh0O1xuICB9XG4gIHNldCB0ZXh0KHZhbHVlOiBUZXh0IHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX2ZpbGUgPSB0aGlzLl9zdGlja2VyID0gdGhpcy5fbG9jYXRpb24gPSB0aGlzLl9saXZlTG9jYXRpb24gPSB0aGlzLl9wb2xsID0gdGhpcy5fdHJhbnNhY3Rpb24gPSB0aGlzLl9mb3JtID0gdGhpcy5fcGVyc2lzdEV2ZW50ID0gdGhpcy5fYnV0dG9ucyA9IHRoaXMuX3NoYXJlVWlkID0gdGhpcy5fZm9ybVJlc3VsdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0ID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UgPSB0aGlzLl9jYWxsRXZlbnQgPSB0aGlzLl90YWJsZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBNZXNzYWdlLlR5cGVDYXNlLnRleHQ7XG4gICAgfVxuICAgIHRoaXMuX3RleHQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZmlsZSgpOiBwcm90b1B1YlYxTW9kZWxzMDAxLkZpbGUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9maWxlO1xuICB9XG4gIHNldCBmaWxlKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDAxLkZpbGUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fdGV4dCA9IHRoaXMuX3N0aWNrZXIgPSB0aGlzLl9sb2NhdGlvbiA9IHRoaXMuX2xpdmVMb2NhdGlvbiA9IHRoaXMuX3BvbGwgPSB0aGlzLl90cmFuc2FjdGlvbiA9IHRoaXMuX2Zvcm0gPSB0aGlzLl9wZXJzaXN0RXZlbnQgPSB0aGlzLl9idXR0b25zID0gdGhpcy5fc2hhcmVVaWQgPSB0aGlzLl9mb3JtUmVzdWx0ID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZSA9IHRoaXMuX2NhbGxFdmVudCA9IHRoaXMuX3RhYmxlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IE1lc3NhZ2UuVHlwZUNhc2UuZmlsZTtcbiAgICB9XG4gICAgdGhpcy5fZmlsZSA9IHZhbHVlO1xuICB9XG4gIGdldCBzdGlja2VyKCk6IHByb3RvUHViVjFNb2RlbHMwMDQuU3RpY2tlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3N0aWNrZXI7XG4gIH1cbiAgc2V0IHN0aWNrZXIodmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMDQuU3RpY2tlciB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl90ZXh0ID0gdGhpcy5fZmlsZSA9IHRoaXMuX2xvY2F0aW9uID0gdGhpcy5fbGl2ZUxvY2F0aW9uID0gdGhpcy5fcG9sbCA9IHRoaXMuX3RyYW5zYWN0aW9uID0gdGhpcy5fZm9ybSA9IHRoaXMuX3BlcnNpc3RFdmVudCA9IHRoaXMuX2J1dHRvbnMgPSB0aGlzLl9zaGFyZVVpZCA9IHRoaXMuX2Zvcm1SZXN1bHQgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlID0gdGhpcy5fY2FsbEV2ZW50ID0gdGhpcy5fdGFibGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gTWVzc2FnZS5UeXBlQ2FzZS5zdGlja2VyO1xuICAgIH1cbiAgICB0aGlzLl9zdGlja2VyID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGxvY2F0aW9uKCk6IHByb3RvUHViVjFNb2RlbHMwMDUuTG9jYXRpb24gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9sb2NhdGlvbjtcbiAgfVxuICBzZXQgbG9jYXRpb24odmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMDUuTG9jYXRpb24gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fdGV4dCA9IHRoaXMuX2ZpbGUgPSB0aGlzLl9zdGlja2VyID0gdGhpcy5fbGl2ZUxvY2F0aW9uID0gdGhpcy5fcG9sbCA9IHRoaXMuX3RyYW5zYWN0aW9uID0gdGhpcy5fZm9ybSA9IHRoaXMuX3BlcnNpc3RFdmVudCA9IHRoaXMuX2J1dHRvbnMgPSB0aGlzLl9zaGFyZVVpZCA9IHRoaXMuX2Zvcm1SZXN1bHQgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlID0gdGhpcy5fY2FsbEV2ZW50ID0gdGhpcy5fdGFibGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gTWVzc2FnZS5UeXBlQ2FzZS5sb2NhdGlvbjtcbiAgICB9XG4gICAgdGhpcy5fbG9jYXRpb24gPSB2YWx1ZTtcbiAgfVxuICBnZXQgbGl2ZUxvY2F0aW9uKCk6IHByb3RvUHViVjFNb2RlbHMwMDUuTGl2ZUxvY2F0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbGl2ZUxvY2F0aW9uO1xuICB9XG4gIHNldCBsaXZlTG9jYXRpb24odmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMDUuTGl2ZUxvY2F0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3RleHQgPSB0aGlzLl9maWxlID0gdGhpcy5fc3RpY2tlciA9IHRoaXMuX2xvY2F0aW9uID0gdGhpcy5fcG9sbCA9IHRoaXMuX3RyYW5zYWN0aW9uID0gdGhpcy5fZm9ybSA9IHRoaXMuX3BlcnNpc3RFdmVudCA9IHRoaXMuX2J1dHRvbnMgPSB0aGlzLl9zaGFyZVVpZCA9IHRoaXMuX2Zvcm1SZXN1bHQgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlID0gdGhpcy5fY2FsbEV2ZW50ID0gdGhpcy5fdGFibGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gTWVzc2FnZS5UeXBlQ2FzZS5saXZlTG9jYXRpb247XG4gICAgfVxuICAgIHRoaXMuX2xpdmVMb2NhdGlvbiA9IHZhbHVlO1xuICB9XG4gIGdldCBwb2xsKCk6IHByb3RvUHViVjFNb2RlbHMwMTAuUG9sbCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3BvbGw7XG4gIH1cbiAgc2V0IHBvbGwodmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMTAuUG9sbCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl90ZXh0ID0gdGhpcy5fZmlsZSA9IHRoaXMuX3N0aWNrZXIgPSB0aGlzLl9sb2NhdGlvbiA9IHRoaXMuX2xpdmVMb2NhdGlvbiA9IHRoaXMuX3RyYW5zYWN0aW9uID0gdGhpcy5fZm9ybSA9IHRoaXMuX3BlcnNpc3RFdmVudCA9IHRoaXMuX2J1dHRvbnMgPSB0aGlzLl9zaGFyZVVpZCA9IHRoaXMuX2Zvcm1SZXN1bHQgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlID0gdGhpcy5fY2FsbEV2ZW50ID0gdGhpcy5fdGFibGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gTWVzc2FnZS5UeXBlQ2FzZS5wb2xsO1xuICAgIH1cbiAgICB0aGlzLl9wb2xsID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHRyYW5zYWN0aW9uKCk6IHByb3RvUHViVjFNb2RlbHMwMDYuVHJhbnNhY3Rpb24gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90cmFuc2FjdGlvbjtcbiAgfVxuICBzZXQgdHJhbnNhY3Rpb24odmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMDYuVHJhbnNhY3Rpb24gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fdGV4dCA9IHRoaXMuX2ZpbGUgPSB0aGlzLl9zdGlja2VyID0gdGhpcy5fbG9jYXRpb24gPSB0aGlzLl9saXZlTG9jYXRpb24gPSB0aGlzLl9wb2xsID0gdGhpcy5fZm9ybSA9IHRoaXMuX3BlcnNpc3RFdmVudCA9IHRoaXMuX2J1dHRvbnMgPSB0aGlzLl9zaGFyZVVpZCA9IHRoaXMuX2Zvcm1SZXN1bHQgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlID0gdGhpcy5fY2FsbEV2ZW50ID0gdGhpcy5fdGFibGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gTWVzc2FnZS5UeXBlQ2FzZS50cmFuc2FjdGlvbjtcbiAgICB9XG4gICAgdGhpcy5fdHJhbnNhY3Rpb24gPSB2YWx1ZTtcbiAgfVxuICBnZXQgZm9ybSgpOiBwcm90b1B1YlYxTW9kZWxzMDA5LkZvcm0gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9mb3JtO1xuICB9XG4gIHNldCBmb3JtKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDA5LkZvcm0gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fdGV4dCA9IHRoaXMuX2ZpbGUgPSB0aGlzLl9zdGlja2VyID0gdGhpcy5fbG9jYXRpb24gPSB0aGlzLl9saXZlTG9jYXRpb24gPSB0aGlzLl9wb2xsID0gdGhpcy5fdHJhbnNhY3Rpb24gPSB0aGlzLl9wZXJzaXN0RXZlbnQgPSB0aGlzLl9idXR0b25zID0gdGhpcy5fc2hhcmVVaWQgPSB0aGlzLl9mb3JtUmVzdWx0ID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZSA9IHRoaXMuX2NhbGxFdmVudCA9IHRoaXMuX3RhYmxlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IE1lc3NhZ2UuVHlwZUNhc2UuZm9ybTtcbiAgICB9XG4gICAgdGhpcy5fZm9ybSA9IHZhbHVlO1xuICB9XG4gIGdldCBwZXJzaXN0RXZlbnQoKTogcHJvdG9QdWJWMU1vZGVsczAwNy5QZXJzaXN0ZW50RXZlbnQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wZXJzaXN0RXZlbnQ7XG4gIH1cbiAgc2V0IHBlcnNpc3RFdmVudCh2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAwNy5QZXJzaXN0ZW50RXZlbnQgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fdGV4dCA9IHRoaXMuX2ZpbGUgPSB0aGlzLl9zdGlja2VyID0gdGhpcy5fbG9jYXRpb24gPSB0aGlzLl9saXZlTG9jYXRpb24gPSB0aGlzLl9wb2xsID0gdGhpcy5fdHJhbnNhY3Rpb24gPSB0aGlzLl9mb3JtID0gdGhpcy5fYnV0dG9ucyA9IHRoaXMuX3NoYXJlVWlkID0gdGhpcy5fZm9ybVJlc3VsdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0ID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UgPSB0aGlzLl9jYWxsRXZlbnQgPSB0aGlzLl90YWJsZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBNZXNzYWdlLlR5cGVDYXNlLnBlcnNpc3RFdmVudDtcbiAgICB9XG4gICAgdGhpcy5fcGVyc2lzdEV2ZW50ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGJ1dHRvbnMoKTogcHJvdG9QdWJWMU1vZGVsczAwOS5CdXR0b25zIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fYnV0dG9ucztcbiAgfVxuICBzZXQgYnV0dG9ucyh2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAwOS5CdXR0b25zIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3RleHQgPSB0aGlzLl9maWxlID0gdGhpcy5fc3RpY2tlciA9IHRoaXMuX2xvY2F0aW9uID0gdGhpcy5fbGl2ZUxvY2F0aW9uID0gdGhpcy5fcG9sbCA9IHRoaXMuX3RyYW5zYWN0aW9uID0gdGhpcy5fZm9ybSA9IHRoaXMuX3BlcnNpc3RFdmVudCA9IHRoaXMuX3NoYXJlVWlkID0gdGhpcy5fZm9ybVJlc3VsdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0ID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UgPSB0aGlzLl9jYWxsRXZlbnQgPSB0aGlzLl90YWJsZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBNZXNzYWdlLlR5cGVDYXNlLmJ1dHRvbnM7XG4gICAgfVxuICAgIHRoaXMuX2J1dHRvbnMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc2hhcmVVaWQoKTogU2hhcmVVaWQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zaGFyZVVpZDtcbiAgfVxuICBzZXQgc2hhcmVVaWQodmFsdWU6IFNoYXJlVWlkIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3RleHQgPSB0aGlzLl9maWxlID0gdGhpcy5fc3RpY2tlciA9IHRoaXMuX2xvY2F0aW9uID0gdGhpcy5fbGl2ZUxvY2F0aW9uID0gdGhpcy5fcG9sbCA9IHRoaXMuX3RyYW5zYWN0aW9uID0gdGhpcy5fZm9ybSA9IHRoaXMuX3BlcnNpc3RFdmVudCA9IHRoaXMuX2J1dHRvbnMgPSB0aGlzLl9mb3JtUmVzdWx0ID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZSA9IHRoaXMuX2NhbGxFdmVudCA9IHRoaXMuX3RhYmxlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IE1lc3NhZ2UuVHlwZUNhc2Uuc2hhcmVVaWQ7XG4gICAgfVxuICAgIHRoaXMuX3NoYXJlVWlkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGZvcm1SZXN1bHQoKTogcHJvdG9QdWJWMU1vZGVsczAwOS5Gb3JtUmVzdWx0IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZm9ybVJlc3VsdDtcbiAgfVxuICBzZXQgZm9ybVJlc3VsdCh2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAwOS5Gb3JtUmVzdWx0IHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3RleHQgPSB0aGlzLl9maWxlID0gdGhpcy5fc3RpY2tlciA9IHRoaXMuX2xvY2F0aW9uID0gdGhpcy5fbGl2ZUxvY2F0aW9uID0gdGhpcy5fcG9sbCA9IHRoaXMuX3RyYW5zYWN0aW9uID0gdGhpcy5fZm9ybSA9IHRoaXMuX3BlcnNpc3RFdmVudCA9IHRoaXMuX2J1dHRvbnMgPSB0aGlzLl9zaGFyZVVpZCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0ID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UgPSB0aGlzLl9jYWxsRXZlbnQgPSB0aGlzLl90YWJsZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBNZXNzYWdlLlR5cGVDYXNlLmZvcm1SZXN1bHQ7XG4gICAgfVxuICAgIHRoaXMuX2Zvcm1SZXN1bHQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QoKTpcbiAgICB8IHByb3RvUHViVjFNb2RlbHMwMDguU2hhcmVQcml2YXRlRGF0YVJlcXVlc3RcbiAgICB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0O1xuICB9XG4gIHNldCBzaGFyZVByaXZhdGVEYXRhUmVxdWVzdChcbiAgICB2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAwOC5TaGFyZVByaXZhdGVEYXRhUmVxdWVzdCB8IHVuZGVmaW5lZFxuICApIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fdGV4dCA9IHRoaXMuX2ZpbGUgPSB0aGlzLl9zdGlja2VyID0gdGhpcy5fbG9jYXRpb24gPSB0aGlzLl9saXZlTG9jYXRpb24gPSB0aGlzLl9wb2xsID0gdGhpcy5fdHJhbnNhY3Rpb24gPSB0aGlzLl9mb3JtID0gdGhpcy5fcGVyc2lzdEV2ZW50ID0gdGhpcy5fYnV0dG9ucyA9IHRoaXMuX3NoYXJlVWlkID0gdGhpcy5fZm9ybVJlc3VsdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlID0gdGhpcy5fY2FsbEV2ZW50ID0gdGhpcy5fdGFibGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gTWVzc2FnZS5UeXBlQ2FzZS5zaGFyZVByaXZhdGVEYXRhUmVxdWVzdDtcbiAgICB9XG4gICAgdGhpcy5fc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UoKTpcbiAgICB8IHByb3RvUHViVjFNb2RlbHMwMDguU2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2VcbiAgICB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlO1xuICB9XG4gIHNldCBzaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZShcbiAgICB2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAwOC5TaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZSB8IHVuZGVmaW5lZFxuICApIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fdGV4dCA9IHRoaXMuX2ZpbGUgPSB0aGlzLl9zdGlja2VyID0gdGhpcy5fbG9jYXRpb24gPSB0aGlzLl9saXZlTG9jYXRpb24gPSB0aGlzLl9wb2xsID0gdGhpcy5fdHJhbnNhY3Rpb24gPSB0aGlzLl9mb3JtID0gdGhpcy5fcGVyc2lzdEV2ZW50ID0gdGhpcy5fYnV0dG9ucyA9IHRoaXMuX3NoYXJlVWlkID0gdGhpcy5fZm9ybVJlc3VsdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0ID0gdGhpcy5fY2FsbEV2ZW50ID0gdGhpcy5fdGFibGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gTWVzc2FnZS5UeXBlQ2FzZS5zaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZTtcbiAgICB9XG4gICAgdGhpcy5fc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UgPSB2YWx1ZTtcbiAgfVxuICBnZXQgY2FsbEV2ZW50KCk6IHByb3RvUHViVjFNb2RlbHMwMTIuQ2FsbEV2ZW50IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fY2FsbEV2ZW50O1xuICB9XG4gIHNldCBjYWxsRXZlbnQodmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMTIuQ2FsbEV2ZW50IHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3RleHQgPSB0aGlzLl9maWxlID0gdGhpcy5fc3RpY2tlciA9IHRoaXMuX2xvY2F0aW9uID0gdGhpcy5fbGl2ZUxvY2F0aW9uID0gdGhpcy5fcG9sbCA9IHRoaXMuX3RyYW5zYWN0aW9uID0gdGhpcy5fZm9ybSA9IHRoaXMuX3BlcnNpc3RFdmVudCA9IHRoaXMuX2J1dHRvbnMgPSB0aGlzLl9zaGFyZVVpZCA9IHRoaXMuX2Zvcm1SZXN1bHQgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlID0gdGhpcy5fdGFibGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gTWVzc2FnZS5UeXBlQ2FzZS5jYWxsRXZlbnQ7XG4gICAgfVxuICAgIHRoaXMuX2NhbGxFdmVudCA9IHZhbHVlO1xuICB9XG4gIGdldCB0YWJsZSgpOiBwcm90b1B1YlYxTW9kZWxzMDA5LlRhYmxlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdGFibGU7XG4gIH1cbiAgc2V0IHRhYmxlKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDA5LlRhYmxlIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3RleHQgPSB0aGlzLl9maWxlID0gdGhpcy5fc3RpY2tlciA9IHRoaXMuX2xvY2F0aW9uID0gdGhpcy5fbGl2ZUxvY2F0aW9uID0gdGhpcy5fcG9sbCA9IHRoaXMuX3RyYW5zYWN0aW9uID0gdGhpcy5fZm9ybSA9IHRoaXMuX3BlcnNpc3RFdmVudCA9IHRoaXMuX2J1dHRvbnMgPSB0aGlzLl9zaGFyZVVpZCA9IHRoaXMuX2Zvcm1SZXN1bHQgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlID0gdGhpcy5fY2FsbEV2ZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IE1lc3NhZ2UuVHlwZUNhc2UudGFibGU7XG4gICAgfVxuICAgIHRoaXMuX3RhYmxlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgTWVzc2FnZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBNZXNzYWdlLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFja2V0SWQ6IHRoaXMucGFja2V0SWQsXG4gICAgICBpZDogdGhpcy5pZCxcbiAgICAgIHRpbWU6IHRoaXMudGltZSxcbiAgICAgIGZyb206IHRoaXMuZnJvbSA/IHRoaXMuZnJvbS50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgdG86IHRoaXMudG8gPyB0aGlzLnRvLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICByZXBseVRvSWQ6IHRoaXMucmVwbHlUb0lkLFxuICAgICAgcmVwbGllZE1lc3NhZ2VCcmllZjogdGhpcy5yZXBsaWVkTWVzc2FnZUJyaWVmXG4gICAgICAgID8gdGhpcy5yZXBsaWVkTWVzc2FnZUJyaWVmLnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICBmb3J3YXJkRnJvbTogdGhpcy5mb3J3YXJkRnJvbSA/IHRoaXMuZm9yd2FyZEZyb20udG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGdlbmVyYXRlZEJ5OiB0aGlzLmdlbmVyYXRlZEJ5ID8gdGhpcy5nZW5lcmF0ZWRCeS50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgZWRpdGVkOiB0aGlzLmVkaXRlZCxcbiAgICAgIGVuY3J5cHRlZDogdGhpcy5lbmNyeXB0ZWQsXG4gICAgICB0dGw6IHRoaXMudHRsLFxuICAgICAgdGhyZWFkOiB0aGlzLnRocmVhZCxcbiAgICAgIHNob3VsZEJlUXVpZXQ6IHRoaXMuc2hvdWxkQmVRdWlldCxcbiAgICAgIG11Y01pbmltdW1BY2Nlc3NMZXZlbDogdGhpcy5tdWNNaW5pbXVtQWNjZXNzTGV2ZWwsXG4gICAgICBzcGVjaWFsVGFyZ2V0OiB0aGlzLnNwZWNpYWxUYXJnZXRcbiAgICAgICAgPyB0aGlzLnNwZWNpYWxUYXJnZXQudG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIG1lc3NhZ2VNYXJrdXA6IHRoaXMubWVzc2FnZU1hcmt1cFxuICAgICAgICA/IHRoaXMubWVzc2FnZU1hcmt1cC50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgdGV4dDogdGhpcy50ZXh0ID8gdGhpcy50ZXh0LnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBmaWxlOiB0aGlzLmZpbGUgPyB0aGlzLmZpbGUudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIHN0aWNrZXI6IHRoaXMuc3RpY2tlciA/IHRoaXMuc3RpY2tlci50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgbG9jYXRpb246IHRoaXMubG9jYXRpb24gPyB0aGlzLmxvY2F0aW9uLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBsaXZlTG9jYXRpb246IHRoaXMubGl2ZUxvY2F0aW9uXG4gICAgICAgID8gdGhpcy5saXZlTG9jYXRpb24udG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIHBvbGw6IHRoaXMucG9sbCA/IHRoaXMucG9sbC50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgdHJhbnNhY3Rpb246IHRoaXMudHJhbnNhY3Rpb24gPyB0aGlzLnRyYW5zYWN0aW9uLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBmb3JtOiB0aGlzLmZvcm0gPyB0aGlzLmZvcm0udG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIHBlcnNpc3RFdmVudDogdGhpcy5wZXJzaXN0RXZlbnRcbiAgICAgICAgPyB0aGlzLnBlcnNpc3RFdmVudC50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgYnV0dG9uczogdGhpcy5idXR0b25zID8gdGhpcy5idXR0b25zLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBzaGFyZVVpZDogdGhpcy5zaGFyZVVpZCA/IHRoaXMuc2hhcmVVaWQudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGZvcm1SZXN1bHQ6IHRoaXMuZm9ybVJlc3VsdCA/IHRoaXMuZm9ybVJlc3VsdC50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgc2hhcmVQcml2YXRlRGF0YVJlcXVlc3Q6IHRoaXMuc2hhcmVQcml2YXRlRGF0YVJlcXVlc3RcbiAgICAgICAgPyB0aGlzLnNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0LnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICBzaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZTogdGhpcy5zaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZVxuICAgICAgICA/IHRoaXMuc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UudG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIGNhbGxFdmVudDogdGhpcy5jYWxsRXZlbnQgPyB0aGlzLmNhbGxFdmVudC50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgdGFibGU6IHRoaXMudGFibGUgPyB0aGlzLnRhYmxlLnRvT2JqZWN0KCkgOiB1bmRlZmluZWRcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBNZXNzYWdlLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFja2V0SWQ6IHRoaXMucGFja2V0SWQsXG4gICAgICBpZDogdGhpcy5pZCxcbiAgICAgIHRpbWU6IHRoaXMudGltZSxcbiAgICAgIGZyb206IHRoaXMuZnJvbSA/IHRoaXMuZnJvbS50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICB0bzogdGhpcy50byA/IHRoaXMudG8udG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgcmVwbHlUb0lkOiB0aGlzLnJlcGx5VG9JZCxcbiAgICAgIHJlcGxpZWRNZXNzYWdlQnJpZWY6IHRoaXMucmVwbGllZE1lc3NhZ2VCcmllZlxuICAgICAgICA/IHRoaXMucmVwbGllZE1lc3NhZ2VCcmllZi50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICBmb3J3YXJkRnJvbTogdGhpcy5mb3J3YXJkRnJvbVxuICAgICAgICA/IHRoaXMuZm9yd2FyZEZyb20udG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsLFxuICAgICAgZ2VuZXJhdGVkQnk6IHRoaXMuZ2VuZXJhdGVkQnlcbiAgICAgICAgPyB0aGlzLmdlbmVyYXRlZEJ5LnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbCxcbiAgICAgIGVkaXRlZDogdGhpcy5lZGl0ZWQsXG4gICAgICBlbmNyeXB0ZWQ6IHRoaXMuZW5jcnlwdGVkLFxuICAgICAgdHRsOiB0aGlzLnR0bCxcbiAgICAgIHRocmVhZDogdGhpcy50aHJlYWQsXG4gICAgICBzaG91bGRCZVF1aWV0OiB0aGlzLnNob3VsZEJlUXVpZXQsXG4gICAgICBtdWNNaW5pbXVtQWNjZXNzTGV2ZWw6XG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMTEuUm9sZVtcbiAgICAgICAgICB0aGlzLm11Y01pbmltdW1BY2Nlc3NMZXZlbCA9PT0gbnVsbCB8fFxuICAgICAgICAgIHRoaXMubXVjTWluaW11bUFjY2Vzc0xldmVsID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgOiB0aGlzLm11Y01pbmltdW1BY2Nlc3NMZXZlbFxuICAgICAgICBdLFxuICAgICAgc3BlY2lhbFRhcmdldDogdGhpcy5zcGVjaWFsVGFyZ2V0XG4gICAgICAgID8gdGhpcy5zcGVjaWFsVGFyZ2V0LnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbCxcbiAgICAgIG1lc3NhZ2VNYXJrdXA6IHRoaXMubWVzc2FnZU1hcmt1cFxuICAgICAgICA/IHRoaXMubWVzc2FnZU1hcmt1cC50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICB0ZXh0OiB0aGlzLnRleHQgPyB0aGlzLnRleHQudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgZmlsZTogdGhpcy5maWxlID8gdGhpcy5maWxlLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIHN0aWNrZXI6IHRoaXMuc3RpY2tlciA/IHRoaXMuc3RpY2tlci50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICBsb2NhdGlvbjogdGhpcy5sb2NhdGlvbiA/IHRoaXMubG9jYXRpb24udG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgbGl2ZUxvY2F0aW9uOiB0aGlzLmxpdmVMb2NhdGlvblxuICAgICAgICA/IHRoaXMubGl2ZUxvY2F0aW9uLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbCxcbiAgICAgIHBvbGw6IHRoaXMucG9sbCA/IHRoaXMucG9sbC50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICB0cmFuc2FjdGlvbjogdGhpcy50cmFuc2FjdGlvblxuICAgICAgICA/IHRoaXMudHJhbnNhY3Rpb24udG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsLFxuICAgICAgZm9ybTogdGhpcy5mb3JtID8gdGhpcy5mb3JtLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIHBlcnNpc3RFdmVudDogdGhpcy5wZXJzaXN0RXZlbnRcbiAgICAgICAgPyB0aGlzLnBlcnNpc3RFdmVudC50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICBidXR0b25zOiB0aGlzLmJ1dHRvbnMgPyB0aGlzLmJ1dHRvbnMudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgc2hhcmVVaWQ6IHRoaXMuc2hhcmVVaWQgPyB0aGlzLnNoYXJlVWlkLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIGZvcm1SZXN1bHQ6IHRoaXMuZm9ybVJlc3VsdFxuICAgICAgICA/IHRoaXMuZm9ybVJlc3VsdC50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICBzaGFyZVByaXZhdGVEYXRhUmVxdWVzdDogdGhpcy5zaGFyZVByaXZhdGVEYXRhUmVxdWVzdFxuICAgICAgICA/IHRoaXMuc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QudG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsLFxuICAgICAgc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2U6IHRoaXMuc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2VcbiAgICAgICAgPyB0aGlzLnNoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbCxcbiAgICAgIGNhbGxFdmVudDogdGhpcy5jYWxsRXZlbnQgPyB0aGlzLmNhbGxFdmVudC50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICB0YWJsZTogdGhpcy50YWJsZSA/IHRoaXMudGFibGUudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBNZXNzYWdlIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBNZXNzYWdlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBwYWNrZXRJZD86IHN0cmluZztcbiAgICBpZD86IHN0cmluZztcbiAgICB0aW1lPzogc3RyaW5nO1xuICAgIGZyb20/OiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5Bc09iamVjdDtcbiAgICB0bz86IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLkFzT2JqZWN0O1xuICAgIHJlcGx5VG9JZD86IHN0cmluZztcbiAgICByZXBsaWVkTWVzc2FnZUJyaWVmPzogTWVzc2FnZUJyaWVmLkFzT2JqZWN0O1xuICAgIGZvcndhcmRGcm9tPzogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuQXNPYmplY3Q7XG4gICAgZ2VuZXJhdGVkQnk/OiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5Bc09iamVjdDtcbiAgICBlZGl0ZWQ/OiBib29sZWFuO1xuICAgIGVuY3J5cHRlZD86IGJvb2xlYW47XG4gICAgdHRsPzogbnVtYmVyO1xuICAgIHRocmVhZD86IHN0cmluZztcbiAgICBzaG91bGRCZVF1aWV0PzogYm9vbGVhbjtcbiAgICBtdWNNaW5pbXVtQWNjZXNzTGV2ZWw/OiBwcm90b1B1YlYxTW9kZWxzMDExLlJvbGU7XG4gICAgc3BlY2lhbFRhcmdldD86IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLkFzT2JqZWN0O1xuICAgIG1lc3NhZ2VNYXJrdXA/OiBwcm90b1B1YlYxTW9kZWxzMDEzLk1lc3NhZ2VNYXJrdXAuQXNPYmplY3Q7XG4gICAgdGV4dD86IFRleHQuQXNPYmplY3Q7XG4gICAgZmlsZT86IHByb3RvUHViVjFNb2RlbHMwMDEuRmlsZS5Bc09iamVjdDtcbiAgICBzdGlja2VyPzogcHJvdG9QdWJWMU1vZGVsczAwNC5TdGlja2VyLkFzT2JqZWN0O1xuICAgIGxvY2F0aW9uPzogcHJvdG9QdWJWMU1vZGVsczAwNS5Mb2NhdGlvbi5Bc09iamVjdDtcbiAgICBsaXZlTG9jYXRpb24/OiBwcm90b1B1YlYxTW9kZWxzMDA1LkxpdmVMb2NhdGlvbi5Bc09iamVjdDtcbiAgICBwb2xsPzogcHJvdG9QdWJWMU1vZGVsczAxMC5Qb2xsLkFzT2JqZWN0O1xuICAgIHRyYW5zYWN0aW9uPzogcHJvdG9QdWJWMU1vZGVsczAwNi5UcmFuc2FjdGlvbi5Bc09iamVjdDtcbiAgICBmb3JtPzogcHJvdG9QdWJWMU1vZGVsczAwOS5Gb3JtLkFzT2JqZWN0O1xuICAgIHBlcnNpc3RFdmVudD86IHByb3RvUHViVjFNb2RlbHMwMDcuUGVyc2lzdGVudEV2ZW50LkFzT2JqZWN0O1xuICAgIGJ1dHRvbnM/OiBwcm90b1B1YlYxTW9kZWxzMDA5LkJ1dHRvbnMuQXNPYmplY3Q7XG4gICAgc2hhcmVVaWQ/OiBTaGFyZVVpZC5Bc09iamVjdDtcbiAgICBmb3JtUmVzdWx0PzogcHJvdG9QdWJWMU1vZGVsczAwOS5Gb3JtUmVzdWx0LkFzT2JqZWN0O1xuICAgIHNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0PzogcHJvdG9QdWJWMU1vZGVsczAwOC5TaGFyZVByaXZhdGVEYXRhUmVxdWVzdC5Bc09iamVjdDtcbiAgICBzaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZT86IHByb3RvUHViVjFNb2RlbHMwMDguU2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UuQXNPYmplY3Q7XG4gICAgY2FsbEV2ZW50PzogcHJvdG9QdWJWMU1vZGVsczAxMi5DYWxsRXZlbnQuQXNPYmplY3Q7XG4gICAgdGFibGU/OiBwcm90b1B1YlYxTW9kZWxzMDA5LlRhYmxlLkFzT2JqZWN0O1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIE1lc3NhZ2VcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHBhY2tldElkPzogc3RyaW5nO1xuICAgIGlkPzogc3RyaW5nO1xuICAgIHRpbWU/OiBzdHJpbmc7XG4gICAgZnJvbT86IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICB0bz86IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICByZXBseVRvSWQ/OiBzdHJpbmc7XG4gICAgcmVwbGllZE1lc3NhZ2VCcmllZj86IE1lc3NhZ2VCcmllZi5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgZm9yd2FyZEZyb20/OiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgZ2VuZXJhdGVkQnk/OiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgZWRpdGVkPzogYm9vbGVhbjtcbiAgICBlbmNyeXB0ZWQ/OiBib29sZWFuO1xuICAgIHR0bD86IG51bWJlcjtcbiAgICB0aHJlYWQ/OiBzdHJpbmc7XG4gICAgc2hvdWxkQmVRdWlldD86IGJvb2xlYW47XG4gICAgbXVjTWluaW11bUFjY2Vzc0xldmVsPzogc3RyaW5nO1xuICAgIHNwZWNpYWxUYXJnZXQ/OiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgbWVzc2FnZU1hcmt1cD86IHByb3RvUHViVjFNb2RlbHMwMTMuTWVzc2FnZU1hcmt1cC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgdGV4dD86IFRleHQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIGZpbGU/OiBwcm90b1B1YlYxTW9kZWxzMDAxLkZpbGUuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHN0aWNrZXI/OiBwcm90b1B1YlYxTW9kZWxzMDA0LlN0aWNrZXIuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIGxvY2F0aW9uPzogcHJvdG9QdWJWMU1vZGVsczAwNS5Mb2NhdGlvbi5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgbGl2ZUxvY2F0aW9uPzogcHJvdG9QdWJWMU1vZGVsczAwNS5MaXZlTG9jYXRpb24uQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHBvbGw/OiBwcm90b1B1YlYxTW9kZWxzMDEwLlBvbGwuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHRyYW5zYWN0aW9uPzogcHJvdG9QdWJWMU1vZGVsczAwNi5UcmFuc2FjdGlvbi5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgZm9ybT86IHByb3RvUHViVjFNb2RlbHMwMDkuRm9ybS5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgcGVyc2lzdEV2ZW50PzogcHJvdG9QdWJWMU1vZGVsczAwNy5QZXJzaXN0ZW50RXZlbnQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIGJ1dHRvbnM/OiBwcm90b1B1YlYxTW9kZWxzMDA5LkJ1dHRvbnMuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHNoYXJlVWlkPzogU2hhcmVVaWQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIGZvcm1SZXN1bHQ/OiBwcm90b1B1YlYxTW9kZWxzMDA5LkZvcm1SZXN1bHQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0PzogcHJvdG9QdWJWMU1vZGVsczAwOC5TaGFyZVByaXZhdGVEYXRhUmVxdWVzdC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2U/OiBwcm90b1B1YlYxTW9kZWxzMDA4LlNoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBjYWxsRXZlbnQ/OiBwcm90b1B1YlYxTW9kZWxzMDEyLkNhbGxFdmVudC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgdGFibGU/OiBwcm90b1B1YlYxTW9kZWxzMDA5LlRhYmxlLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgfVxuICBleHBvcnQgZW51bSBUeXBlQ2FzZSB7XG4gICAgbm9uZSA9IDAsXG4gICAgdGV4dCA9IDEsXG4gICAgZmlsZSA9IDIsXG4gICAgc3RpY2tlciA9IDMsXG4gICAgbG9jYXRpb24gPSA0LFxuICAgIGxpdmVMb2NhdGlvbiA9IDUsXG4gICAgcG9sbCA9IDYsXG4gICAgdHJhbnNhY3Rpb24gPSA3LFxuICAgIGZvcm0gPSA4LFxuICAgIHBlcnNpc3RFdmVudCA9IDksXG4gICAgYnV0dG9ucyA9IDEwLFxuICAgIHNoYXJlVWlkID0gMTEsXG4gICAgZm9ybVJlc3VsdCA9IDEyLFxuICAgIHNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0ID0gMTMsXG4gICAgc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UgPSAxNCxcbiAgICBjYWxsRXZlbnQgPSAxNSxcbiAgICB0YWJsZSA9IDE2XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBwcm90by5wdWIudjEubW9kZWxzLk1lc3NhZ2VCeUNsaWVudFxuICovXG5leHBvcnQgY2xhc3MgTWVzc2FnZUJ5Q2xpZW50IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAncHJvdG8ucHViLnYxLm1vZGVscy5NZXNzYWdlQnlDbGllbnQnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBNZXNzYWdlQnlDbGllbnQoKTtcbiAgICBNZXNzYWdlQnlDbGllbnQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBNZXNzYWdlQnlDbGllbnQpIHtcbiAgICBfaW5zdGFuY2UucGFja2V0SWQgPSBfaW5zdGFuY2UucGFja2V0SWQgfHwgJyc7XG4gICAgX2luc3RhbmNlLnRvID0gX2luc3RhbmNlLnRvIHx8IHVuZGVmaW5lZDtcbiAgICBfaW5zdGFuY2UucmVwbHlUb0lkID0gX2luc3RhbmNlLnJlcGx5VG9JZCB8fCAnMCc7XG4gICAgX2luc3RhbmNlLmZvcndhcmRGcm9tID0gX2luc3RhbmNlLmZvcndhcmRGcm9tIHx8IHVuZGVmaW5lZDtcbiAgICBfaW5zdGFuY2UuZW5jcnlwdGVkID0gX2luc3RhbmNlLmVuY3J5cHRlZCB8fCBmYWxzZTtcbiAgICBfaW5zdGFuY2UudHRsID0gX2luc3RhbmNlLnR0bCB8fCAwO1xuICAgIF9pbnN0YW5jZS50aHJlYWQgPSBfaW5zdGFuY2UudGhyZWFkIHx8ICcwJztcbiAgICBfaW5zdGFuY2Uuc2hvdWxkQmVRdWlldCA9IF9pbnN0YW5jZS5zaG91bGRCZVF1aWV0IHx8IGZhbHNlO1xuICAgIF9pbnN0YW5jZS5nZW5lcmF0ZWRCeSA9IF9pbnN0YW5jZS5nZW5lcmF0ZWRCeSB8fCB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBNZXNzYWdlQnlDbGllbnQsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLnBhY2tldElkID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICBfaW5zdGFuY2UudG8gPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLnRvLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA3OlxuICAgICAgICAgIF9pbnN0YW5jZS5yZXBseVRvSWQgPSBfcmVhZGVyLnJlYWRJbnQ2NFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgX2luc3RhbmNlLmZvcndhcmRGcm9tID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5mb3J3YXJkRnJvbSxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgX2luc3RhbmNlLmVuY3J5cHRlZCA9IF9yZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyMzpcbiAgICAgICAgICBfaW5zdGFuY2UudHRsID0gX3JlYWRlci5yZWFkSW50MzIoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyODpcbiAgICAgICAgICBfaW5zdGFuY2UudGhyZWFkID0gX3JlYWRlci5yZWFkSW50NjRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOTpcbiAgICAgICAgICBfaW5zdGFuY2Uuc2hvdWxkQmVRdWlldCA9IF9yZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzMzpcbiAgICAgICAgICBfaW5zdGFuY2UuZ2VuZXJhdGVkQnkgPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmdlbmVyYXRlZEJ5LFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICBfaW5zdGFuY2UudGV4dCA9IG5ldyBUZXh0KCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShfaW5zdGFuY2UudGV4dCwgVGV4dC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgIF9pbnN0YW5jZS5maWxlID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDEuRmlsZSgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuZmlsZSxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDEuRmlsZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgIF9pbnN0YW5jZS5zdGlja2VyID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDQuU3RpY2tlcigpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2Uuc3RpY2tlcixcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDQuU3RpY2tlci5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE0OlxuICAgICAgICAgIF9pbnN0YW5jZS5sb2NhdGlvbiA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDA1LkxvY2F0aW9uKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5sb2NhdGlvbixcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDUuTG9jYXRpb24uZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxNTpcbiAgICAgICAgICBfaW5zdGFuY2UubGl2ZUxvY2F0aW9uID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDUuTGl2ZUxvY2F0aW9uKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5saXZlTG9jYXRpb24sXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDA1LkxpdmVMb2NhdGlvbi5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE2OlxuICAgICAgICAgIF9pbnN0YW5jZS5wb2xsID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMTAuUG9sbCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UucG9sbCxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMTAuUG9sbC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE4OlxuICAgICAgICAgIF9pbnN0YW5jZS5mb3JtID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDkuRm9ybSgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuZm9ybSxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDkuRm9ybS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDIwOlxuICAgICAgICAgIF9pbnN0YW5jZS5idXR0b25zID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDkuQnV0dG9ucygpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuYnV0dG9ucyxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDkuQnV0dG9ucy5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDIxOlxuICAgICAgICAgIF9pbnN0YW5jZS5zaGFyZVVpZCA9IG5ldyBTaGFyZVVpZCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2Uuc2hhcmVVaWQsXG4gICAgICAgICAgICBTaGFyZVVpZC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDIyOlxuICAgICAgICAgIF9pbnN0YW5jZS5mb3JtUmVzdWx0ID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDkuRm9ybVJlc3VsdCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuZm9ybVJlc3VsdCxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDkuRm9ybVJlc3VsdC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI2OlxuICAgICAgICAgIF9pbnN0YW5jZS5zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDA4LlNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0KCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDguU2hhcmVQcml2YXRlRGF0YVJlcXVlc3RcbiAgICAgICAgICAgICAgLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjc6XG4gICAgICAgICAgX2luc3RhbmNlLnNoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDguU2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLnNoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwOC5TaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZVxuICAgICAgICAgICAgICAuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzMTpcbiAgICAgICAgICBfaW5zdGFuY2UuY2FsbEV2ZW50ID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMTIuQ2FsbEV2ZW50KCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5jYWxsRXZlbnQsXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDEyLkNhbGxFdmVudC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgIF9pbnN0YW5jZS50YWJsZSA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDA5LlRhYmxlKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS50YWJsZSxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDkuVGFibGUuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIE1lc3NhZ2VCeUNsaWVudC5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IE1lc3NhZ2VCeUNsaWVudCxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5wYWNrZXRJZCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2UucGFja2V0SWQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnRvKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgNixcbiAgICAgICAgX2luc3RhbmNlLnRvIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UucmVwbHlUb0lkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlSW50NjRTdHJpbmcoNywgX2luc3RhbmNlLnJlcGx5VG9JZCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZm9yd2FyZEZyb20pIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA4LFxuICAgICAgICBfaW5zdGFuY2UuZm9yd2FyZEZyb20gYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5lbmNyeXB0ZWQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVCb29sKDEwLCBfaW5zdGFuY2UuZW5jcnlwdGVkKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS50dGwpIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQzMigyMywgX2luc3RhbmNlLnR0bCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UudGhyZWFkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlSW50NjRTdHJpbmcoMjgsIF9pbnN0YW5jZS50aHJlYWQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnNob3VsZEJlUXVpZXQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVCb29sKDI5LCBfaW5zdGFuY2Uuc2hvdWxkQmVRdWlldCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZ2VuZXJhdGVkQnkpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAzMyxcbiAgICAgICAgX2luc3RhbmNlLmdlbmVyYXRlZEJ5IGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UudGV4dCkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDExLFxuICAgICAgICBfaW5zdGFuY2UudGV4dCBhcyBhbnksXG4gICAgICAgIFRleHQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZmlsZSkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDEyLFxuICAgICAgICBfaW5zdGFuY2UuZmlsZSBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDEuRmlsZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5zdGlja2VyKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMTMsXG4gICAgICAgIF9pbnN0YW5jZS5zdGlja2VyIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwNC5TdGlja2VyLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmxvY2F0aW9uKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMTQsXG4gICAgICAgIF9pbnN0YW5jZS5sb2NhdGlvbiBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDUuTG9jYXRpb24uc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UubGl2ZUxvY2F0aW9uKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMTUsXG4gICAgICAgIF9pbnN0YW5jZS5saXZlTG9jYXRpb24gYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDA1LkxpdmVMb2NhdGlvbi5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5wb2xsKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMTYsXG4gICAgICAgIF9pbnN0YW5jZS5wb2xsIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxMC5Qb2xsLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmZvcm0pIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAxOCxcbiAgICAgICAgX2luc3RhbmNlLmZvcm0gYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDA5LkZvcm0uc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuYnV0dG9ucykge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDIwLFxuICAgICAgICBfaW5zdGFuY2UuYnV0dG9ucyBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDkuQnV0dG9ucy5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5zaGFyZVVpZCkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDIxLFxuICAgICAgICBfaW5zdGFuY2Uuc2hhcmVVaWQgYXMgYW55LFxuICAgICAgICBTaGFyZVVpZC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5mb3JtUmVzdWx0KSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMjIsXG4gICAgICAgIF9pbnN0YW5jZS5mb3JtUmVzdWx0IGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwOS5Gb3JtUmVzdWx0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0KSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMjYsXG4gICAgICAgIF9pbnN0YW5jZS5zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDguU2hhcmVQcml2YXRlRGF0YVJlcXVlc3Quc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uuc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAyNyxcbiAgICAgICAgX2luc3RhbmNlLnNoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwOC5TaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5jYWxsRXZlbnQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAzMSxcbiAgICAgICAgX2luc3RhbmNlLmNhbGxFdmVudCBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMTIuQ2FsbEV2ZW50LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnRhYmxlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMzIsXG4gICAgICAgIF9pbnN0YW5jZS50YWJsZSBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDkuVGFibGUuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcGFja2V0SWQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3RvPzogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQ7XG4gIHByaXZhdGUgX3JlcGx5VG9JZD86IHN0cmluZztcbiAgcHJpdmF0ZSBfZm9yd2FyZEZyb20/OiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZDtcbiAgcHJpdmF0ZSBfZW5jcnlwdGVkPzogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfdHRsPzogbnVtYmVyO1xuICBwcml2YXRlIF90aHJlYWQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3Nob3VsZEJlUXVpZXQ/OiBib29sZWFuO1xuICBwcml2YXRlIF9nZW5lcmF0ZWRCeT86IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkO1xuICBwcml2YXRlIF90ZXh0PzogVGV4dDtcbiAgcHJpdmF0ZSBfZmlsZT86IHByb3RvUHViVjFNb2RlbHMwMDEuRmlsZTtcbiAgcHJpdmF0ZSBfc3RpY2tlcj86IHByb3RvUHViVjFNb2RlbHMwMDQuU3RpY2tlcjtcbiAgcHJpdmF0ZSBfbG9jYXRpb24/OiBwcm90b1B1YlYxTW9kZWxzMDA1LkxvY2F0aW9uO1xuICBwcml2YXRlIF9saXZlTG9jYXRpb24/OiBwcm90b1B1YlYxTW9kZWxzMDA1LkxpdmVMb2NhdGlvbjtcbiAgcHJpdmF0ZSBfcG9sbD86IHByb3RvUHViVjFNb2RlbHMwMTAuUG9sbDtcbiAgcHJpdmF0ZSBfZm9ybT86IHByb3RvUHViVjFNb2RlbHMwMDkuRm9ybTtcbiAgcHJpdmF0ZSBfYnV0dG9ucz86IHByb3RvUHViVjFNb2RlbHMwMDkuQnV0dG9ucztcbiAgcHJpdmF0ZSBfc2hhcmVVaWQ/OiBTaGFyZVVpZDtcbiAgcHJpdmF0ZSBfZm9ybVJlc3VsdD86IHByb3RvUHViVjFNb2RlbHMwMDkuRm9ybVJlc3VsdDtcbiAgcHJpdmF0ZSBfc2hhcmVQcml2YXRlRGF0YVJlcXVlc3Q/OiBwcm90b1B1YlYxTW9kZWxzMDA4LlNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0O1xuICBwcml2YXRlIF9zaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZT86IHByb3RvUHViVjFNb2RlbHMwMDguU2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2U7XG4gIHByaXZhdGUgX2NhbGxFdmVudD86IHByb3RvUHViVjFNb2RlbHMwMTIuQ2FsbEV2ZW50O1xuICBwcml2YXRlIF90YWJsZT86IHByb3RvUHViVjFNb2RlbHMwMDkuVGFibGU7XG5cbiAgcHJpdmF0ZSBfdHlwZTogTWVzc2FnZUJ5Q2xpZW50LlR5cGVDYXNlID0gTWVzc2FnZUJ5Q2xpZW50LlR5cGVDYXNlLm5vbmU7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBNZXNzYWdlQnlDbGllbnQgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8TWVzc2FnZUJ5Q2xpZW50LkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnBhY2tldElkID0gX3ZhbHVlLnBhY2tldElkO1xuICAgIHRoaXMudG8gPSBfdmFsdWUudG8gPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQoX3ZhbHVlLnRvKSA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnJlcGx5VG9JZCA9IF92YWx1ZS5yZXBseVRvSWQ7XG4gICAgdGhpcy5mb3J3YXJkRnJvbSA9IF92YWx1ZS5mb3J3YXJkRnJvbVxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQoX3ZhbHVlLmZvcndhcmRGcm9tKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5lbmNyeXB0ZWQgPSBfdmFsdWUuZW5jcnlwdGVkO1xuICAgIHRoaXMudHRsID0gX3ZhbHVlLnR0bDtcbiAgICB0aGlzLnRocmVhZCA9IF92YWx1ZS50aHJlYWQ7XG4gICAgdGhpcy5zaG91bGRCZVF1aWV0ID0gX3ZhbHVlLnNob3VsZEJlUXVpZXQ7XG4gICAgdGhpcy5nZW5lcmF0ZWRCeSA9IF92YWx1ZS5nZW5lcmF0ZWRCeVxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQoX3ZhbHVlLmdlbmVyYXRlZEJ5KVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy50ZXh0ID0gX3ZhbHVlLnRleHQgPyBuZXcgVGV4dChfdmFsdWUudGV4dCkgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5maWxlID0gX3ZhbHVlLmZpbGVcbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMDEuRmlsZShfdmFsdWUuZmlsZSlcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuc3RpY2tlciA9IF92YWx1ZS5zdGlja2VyXG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDA0LlN0aWNrZXIoX3ZhbHVlLnN0aWNrZXIpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmxvY2F0aW9uID0gX3ZhbHVlLmxvY2F0aW9uXG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDA1LkxvY2F0aW9uKF92YWx1ZS5sb2NhdGlvbilcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMubGl2ZUxvY2F0aW9uID0gX3ZhbHVlLmxpdmVMb2NhdGlvblxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAwNS5MaXZlTG9jYXRpb24oX3ZhbHVlLmxpdmVMb2NhdGlvbilcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMucG9sbCA9IF92YWx1ZS5wb2xsXG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDEwLlBvbGwoX3ZhbHVlLnBvbGwpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmZvcm0gPSBfdmFsdWUuZm9ybVxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAwOS5Gb3JtKF92YWx1ZS5mb3JtKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5idXR0b25zID0gX3ZhbHVlLmJ1dHRvbnNcbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMDkuQnV0dG9ucyhfdmFsdWUuYnV0dG9ucylcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuc2hhcmVVaWQgPSBfdmFsdWUuc2hhcmVVaWQgPyBuZXcgU2hhcmVVaWQoX3ZhbHVlLnNoYXJlVWlkKSA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmZvcm1SZXN1bHQgPSBfdmFsdWUuZm9ybVJlc3VsdFxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAwOS5Gb3JtUmVzdWx0KF92YWx1ZS5mb3JtUmVzdWx0KVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCA9IF92YWx1ZS5zaGFyZVByaXZhdGVEYXRhUmVxdWVzdFxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAwOC5TaGFyZVByaXZhdGVEYXRhUmVxdWVzdChcbiAgICAgICAgICBfdmFsdWUuc2hhcmVQcml2YXRlRGF0YVJlcXVlc3RcbiAgICAgICAgKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5zaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZSA9IF92YWx1ZS5zaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZVxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAwOC5TaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZShcbiAgICAgICAgICBfdmFsdWUuc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2VcbiAgICAgICAgKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5jYWxsRXZlbnQgPSBfdmFsdWUuY2FsbEV2ZW50XG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDEyLkNhbGxFdmVudChfdmFsdWUuY2FsbEV2ZW50KVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy50YWJsZSA9IF92YWx1ZS50YWJsZVxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAwOS5UYWJsZShfdmFsdWUudGFibGUpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICBNZXNzYWdlQnlDbGllbnQucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBwYWNrZXRJZCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wYWNrZXRJZDtcbiAgfVxuICBzZXQgcGFja2V0SWQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3BhY2tldElkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHRvKCk6IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdG87XG4gIH1cbiAgc2V0IHRvKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZCB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3RvID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHJlcGx5VG9JZCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9yZXBseVRvSWQ7XG4gIH1cbiAgc2V0IHJlcGx5VG9JZCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcmVwbHlUb0lkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGZvcndhcmRGcm9tKCk6IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZm9yd2FyZEZyb207XG4gIH1cbiAgc2V0IGZvcndhcmRGcm9tKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZCB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2ZvcndhcmRGcm9tID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGVuY3J5cHRlZCgpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZW5jcnlwdGVkO1xuICB9XG4gIHNldCBlbmNyeXB0ZWQodmFsdWU6IGJvb2xlYW4gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9lbmNyeXB0ZWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdHRsKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3R0bDtcbiAgfVxuICBzZXQgdHRsKHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl90dGwgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdGhyZWFkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3RocmVhZDtcbiAgfVxuICBzZXQgdGhyZWFkKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl90aHJlYWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc2hvdWxkQmVRdWlldCgpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvdWxkQmVRdWlldDtcbiAgfVxuICBzZXQgc2hvdWxkQmVRdWlldCh2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3Nob3VsZEJlUXVpZXQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZ2VuZXJhdGVkQnkoKTogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9nZW5lcmF0ZWRCeTtcbiAgfVxuICBzZXQgZ2VuZXJhdGVkQnkodmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZ2VuZXJhdGVkQnkgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdGV4dCgpOiBUZXh0IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdGV4dDtcbiAgfVxuICBzZXQgdGV4dCh2YWx1ZTogVGV4dCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9maWxlID0gdGhpcy5fc3RpY2tlciA9IHRoaXMuX2xvY2F0aW9uID0gdGhpcy5fbGl2ZUxvY2F0aW9uID0gdGhpcy5fcG9sbCA9IHRoaXMuX2Zvcm0gPSB0aGlzLl9idXR0b25zID0gdGhpcy5fc2hhcmVVaWQgPSB0aGlzLl9mb3JtUmVzdWx0ID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZSA9IHRoaXMuX2NhbGxFdmVudCA9IHRoaXMuX3RhYmxlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IE1lc3NhZ2VCeUNsaWVudC5UeXBlQ2FzZS50ZXh0O1xuICAgIH1cbiAgICB0aGlzLl90ZXh0ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGZpbGUoKTogcHJvdG9QdWJWMU1vZGVsczAwMS5GaWxlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZmlsZTtcbiAgfVxuICBzZXQgZmlsZSh2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAwMS5GaWxlIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3RleHQgPSB0aGlzLl9zdGlja2VyID0gdGhpcy5fbG9jYXRpb24gPSB0aGlzLl9saXZlTG9jYXRpb24gPSB0aGlzLl9wb2xsID0gdGhpcy5fZm9ybSA9IHRoaXMuX2J1dHRvbnMgPSB0aGlzLl9zaGFyZVVpZCA9IHRoaXMuX2Zvcm1SZXN1bHQgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlID0gdGhpcy5fY2FsbEV2ZW50ID0gdGhpcy5fdGFibGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gTWVzc2FnZUJ5Q2xpZW50LlR5cGVDYXNlLmZpbGU7XG4gICAgfVxuICAgIHRoaXMuX2ZpbGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc3RpY2tlcigpOiBwcm90b1B1YlYxTW9kZWxzMDA0LlN0aWNrZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zdGlja2VyO1xuICB9XG4gIHNldCBzdGlja2VyKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDA0LlN0aWNrZXIgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fdGV4dCA9IHRoaXMuX2ZpbGUgPSB0aGlzLl9sb2NhdGlvbiA9IHRoaXMuX2xpdmVMb2NhdGlvbiA9IHRoaXMuX3BvbGwgPSB0aGlzLl9mb3JtID0gdGhpcy5fYnV0dG9ucyA9IHRoaXMuX3NoYXJlVWlkID0gdGhpcy5fZm9ybVJlc3VsdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0ID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UgPSB0aGlzLl9jYWxsRXZlbnQgPSB0aGlzLl90YWJsZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBNZXNzYWdlQnlDbGllbnQuVHlwZUNhc2Uuc3RpY2tlcjtcbiAgICB9XG4gICAgdGhpcy5fc3RpY2tlciA9IHZhbHVlO1xuICB9XG4gIGdldCBsb2NhdGlvbigpOiBwcm90b1B1YlYxTW9kZWxzMDA1LkxvY2F0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbG9jYXRpb247XG4gIH1cbiAgc2V0IGxvY2F0aW9uKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDA1LkxvY2F0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3RleHQgPSB0aGlzLl9maWxlID0gdGhpcy5fc3RpY2tlciA9IHRoaXMuX2xpdmVMb2NhdGlvbiA9IHRoaXMuX3BvbGwgPSB0aGlzLl9mb3JtID0gdGhpcy5fYnV0dG9ucyA9IHRoaXMuX3NoYXJlVWlkID0gdGhpcy5fZm9ybVJlc3VsdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0ID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UgPSB0aGlzLl9jYWxsRXZlbnQgPSB0aGlzLl90YWJsZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBNZXNzYWdlQnlDbGllbnQuVHlwZUNhc2UubG9jYXRpb247XG4gICAgfVxuICAgIHRoaXMuX2xvY2F0aW9uID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGxpdmVMb2NhdGlvbigpOiBwcm90b1B1YlYxTW9kZWxzMDA1LkxpdmVMb2NhdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2xpdmVMb2NhdGlvbjtcbiAgfVxuICBzZXQgbGl2ZUxvY2F0aW9uKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDA1LkxpdmVMb2NhdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl90ZXh0ID0gdGhpcy5fZmlsZSA9IHRoaXMuX3N0aWNrZXIgPSB0aGlzLl9sb2NhdGlvbiA9IHRoaXMuX3BvbGwgPSB0aGlzLl9mb3JtID0gdGhpcy5fYnV0dG9ucyA9IHRoaXMuX3NoYXJlVWlkID0gdGhpcy5fZm9ybVJlc3VsdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0ID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UgPSB0aGlzLl9jYWxsRXZlbnQgPSB0aGlzLl90YWJsZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBNZXNzYWdlQnlDbGllbnQuVHlwZUNhc2UubGl2ZUxvY2F0aW9uO1xuICAgIH1cbiAgICB0aGlzLl9saXZlTG9jYXRpb24gPSB2YWx1ZTtcbiAgfVxuICBnZXQgcG9sbCgpOiBwcm90b1B1YlYxTW9kZWxzMDEwLlBvbGwgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wb2xsO1xuICB9XG4gIHNldCBwb2xsKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDEwLlBvbGwgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fdGV4dCA9IHRoaXMuX2ZpbGUgPSB0aGlzLl9zdGlja2VyID0gdGhpcy5fbG9jYXRpb24gPSB0aGlzLl9saXZlTG9jYXRpb24gPSB0aGlzLl9mb3JtID0gdGhpcy5fYnV0dG9ucyA9IHRoaXMuX3NoYXJlVWlkID0gdGhpcy5fZm9ybVJlc3VsdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0ID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UgPSB0aGlzLl9jYWxsRXZlbnQgPSB0aGlzLl90YWJsZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBNZXNzYWdlQnlDbGllbnQuVHlwZUNhc2UucG9sbDtcbiAgICB9XG4gICAgdGhpcy5fcG9sbCA9IHZhbHVlO1xuICB9XG4gIGdldCBmb3JtKCk6IHByb3RvUHViVjFNb2RlbHMwMDkuRm9ybSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2Zvcm07XG4gIH1cbiAgc2V0IGZvcm0odmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMDkuRm9ybSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl90ZXh0ID0gdGhpcy5fZmlsZSA9IHRoaXMuX3N0aWNrZXIgPSB0aGlzLl9sb2NhdGlvbiA9IHRoaXMuX2xpdmVMb2NhdGlvbiA9IHRoaXMuX3BvbGwgPSB0aGlzLl9idXR0b25zID0gdGhpcy5fc2hhcmVVaWQgPSB0aGlzLl9mb3JtUmVzdWx0ID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZSA9IHRoaXMuX2NhbGxFdmVudCA9IHRoaXMuX3RhYmxlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IE1lc3NhZ2VCeUNsaWVudC5UeXBlQ2FzZS5mb3JtO1xuICAgIH1cbiAgICB0aGlzLl9mb3JtID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGJ1dHRvbnMoKTogcHJvdG9QdWJWMU1vZGVsczAwOS5CdXR0b25zIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fYnV0dG9ucztcbiAgfVxuICBzZXQgYnV0dG9ucyh2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAwOS5CdXR0b25zIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3RleHQgPSB0aGlzLl9maWxlID0gdGhpcy5fc3RpY2tlciA9IHRoaXMuX2xvY2F0aW9uID0gdGhpcy5fbGl2ZUxvY2F0aW9uID0gdGhpcy5fcG9sbCA9IHRoaXMuX2Zvcm0gPSB0aGlzLl9zaGFyZVVpZCA9IHRoaXMuX2Zvcm1SZXN1bHQgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlID0gdGhpcy5fY2FsbEV2ZW50ID0gdGhpcy5fdGFibGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gTWVzc2FnZUJ5Q2xpZW50LlR5cGVDYXNlLmJ1dHRvbnM7XG4gICAgfVxuICAgIHRoaXMuX2J1dHRvbnMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc2hhcmVVaWQoKTogU2hhcmVVaWQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zaGFyZVVpZDtcbiAgfVxuICBzZXQgc2hhcmVVaWQodmFsdWU6IFNoYXJlVWlkIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3RleHQgPSB0aGlzLl9maWxlID0gdGhpcy5fc3RpY2tlciA9IHRoaXMuX2xvY2F0aW9uID0gdGhpcy5fbGl2ZUxvY2F0aW9uID0gdGhpcy5fcG9sbCA9IHRoaXMuX2Zvcm0gPSB0aGlzLl9idXR0b25zID0gdGhpcy5fZm9ybVJlc3VsdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0ID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UgPSB0aGlzLl9jYWxsRXZlbnQgPSB0aGlzLl90YWJsZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBNZXNzYWdlQnlDbGllbnQuVHlwZUNhc2Uuc2hhcmVVaWQ7XG4gICAgfVxuICAgIHRoaXMuX3NoYXJlVWlkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGZvcm1SZXN1bHQoKTogcHJvdG9QdWJWMU1vZGVsczAwOS5Gb3JtUmVzdWx0IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZm9ybVJlc3VsdDtcbiAgfVxuICBzZXQgZm9ybVJlc3VsdCh2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAwOS5Gb3JtUmVzdWx0IHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3RleHQgPSB0aGlzLl9maWxlID0gdGhpcy5fc3RpY2tlciA9IHRoaXMuX2xvY2F0aW9uID0gdGhpcy5fbGl2ZUxvY2F0aW9uID0gdGhpcy5fcG9sbCA9IHRoaXMuX2Zvcm0gPSB0aGlzLl9idXR0b25zID0gdGhpcy5fc2hhcmVVaWQgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlID0gdGhpcy5fY2FsbEV2ZW50ID0gdGhpcy5fdGFibGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gTWVzc2FnZUJ5Q2xpZW50LlR5cGVDYXNlLmZvcm1SZXN1bHQ7XG4gICAgfVxuICAgIHRoaXMuX2Zvcm1SZXN1bHQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QoKTpcbiAgICB8IHByb3RvUHViVjFNb2RlbHMwMDguU2hhcmVQcml2YXRlRGF0YVJlcXVlc3RcbiAgICB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0O1xuICB9XG4gIHNldCBzaGFyZVByaXZhdGVEYXRhUmVxdWVzdChcbiAgICB2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAwOC5TaGFyZVByaXZhdGVEYXRhUmVxdWVzdCB8IHVuZGVmaW5lZFxuICApIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fdGV4dCA9IHRoaXMuX2ZpbGUgPSB0aGlzLl9zdGlja2VyID0gdGhpcy5fbG9jYXRpb24gPSB0aGlzLl9saXZlTG9jYXRpb24gPSB0aGlzLl9wb2xsID0gdGhpcy5fZm9ybSA9IHRoaXMuX2J1dHRvbnMgPSB0aGlzLl9zaGFyZVVpZCA9IHRoaXMuX2Zvcm1SZXN1bHQgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZSA9IHRoaXMuX2NhbGxFdmVudCA9IHRoaXMuX3RhYmxlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IE1lc3NhZ2VCeUNsaWVudC5UeXBlQ2FzZS5zaGFyZVByaXZhdGVEYXRhUmVxdWVzdDtcbiAgICB9XG4gICAgdGhpcy5fc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UoKTpcbiAgICB8IHByb3RvUHViVjFNb2RlbHMwMDguU2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2VcbiAgICB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlO1xuICB9XG4gIHNldCBzaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZShcbiAgICB2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAwOC5TaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZSB8IHVuZGVmaW5lZFxuICApIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fdGV4dCA9IHRoaXMuX2ZpbGUgPSB0aGlzLl9zdGlja2VyID0gdGhpcy5fbG9jYXRpb24gPSB0aGlzLl9saXZlTG9jYXRpb24gPSB0aGlzLl9wb2xsID0gdGhpcy5fZm9ybSA9IHRoaXMuX2J1dHRvbnMgPSB0aGlzLl9zaGFyZVVpZCA9IHRoaXMuX2Zvcm1SZXN1bHQgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCA9IHRoaXMuX2NhbGxFdmVudCA9IHRoaXMuX3RhYmxlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IE1lc3NhZ2VCeUNsaWVudC5UeXBlQ2FzZS5zaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZTtcbiAgICB9XG4gICAgdGhpcy5fc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UgPSB2YWx1ZTtcbiAgfVxuICBnZXQgY2FsbEV2ZW50KCk6IHByb3RvUHViVjFNb2RlbHMwMTIuQ2FsbEV2ZW50IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fY2FsbEV2ZW50O1xuICB9XG4gIHNldCBjYWxsRXZlbnQodmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMTIuQ2FsbEV2ZW50IHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3RleHQgPSB0aGlzLl9maWxlID0gdGhpcy5fc3RpY2tlciA9IHRoaXMuX2xvY2F0aW9uID0gdGhpcy5fbGl2ZUxvY2F0aW9uID0gdGhpcy5fcG9sbCA9IHRoaXMuX2Zvcm0gPSB0aGlzLl9idXR0b25zID0gdGhpcy5fc2hhcmVVaWQgPSB0aGlzLl9mb3JtUmVzdWx0ID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZSA9IHRoaXMuX3RhYmxlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IE1lc3NhZ2VCeUNsaWVudC5UeXBlQ2FzZS5jYWxsRXZlbnQ7XG4gICAgfVxuICAgIHRoaXMuX2NhbGxFdmVudCA9IHZhbHVlO1xuICB9XG4gIGdldCB0YWJsZSgpOiBwcm90b1B1YlYxTW9kZWxzMDA5LlRhYmxlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdGFibGU7XG4gIH1cbiAgc2V0IHRhYmxlKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDA5LlRhYmxlIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3RleHQgPSB0aGlzLl9maWxlID0gdGhpcy5fc3RpY2tlciA9IHRoaXMuX2xvY2F0aW9uID0gdGhpcy5fbGl2ZUxvY2F0aW9uID0gdGhpcy5fcG9sbCA9IHRoaXMuX2Zvcm0gPSB0aGlzLl9idXR0b25zID0gdGhpcy5fc2hhcmVVaWQgPSB0aGlzLl9mb3JtUmVzdWx0ID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZSA9IHRoaXMuX2NhbGxFdmVudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBNZXNzYWdlQnlDbGllbnQuVHlwZUNhc2UudGFibGU7XG4gICAgfVxuICAgIHRoaXMuX3RhYmxlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgTWVzc2FnZUJ5Q2xpZW50LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IE1lc3NhZ2VCeUNsaWVudC5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhY2tldElkOiB0aGlzLnBhY2tldElkLFxuICAgICAgdG86IHRoaXMudG8gPyB0aGlzLnRvLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICByZXBseVRvSWQ6IHRoaXMucmVwbHlUb0lkLFxuICAgICAgZm9yd2FyZEZyb206IHRoaXMuZm9yd2FyZEZyb20gPyB0aGlzLmZvcndhcmRGcm9tLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBlbmNyeXB0ZWQ6IHRoaXMuZW5jcnlwdGVkLFxuICAgICAgdHRsOiB0aGlzLnR0bCxcbiAgICAgIHRocmVhZDogdGhpcy50aHJlYWQsXG4gICAgICBzaG91bGRCZVF1aWV0OiB0aGlzLnNob3VsZEJlUXVpZXQsXG4gICAgICBnZW5lcmF0ZWRCeTogdGhpcy5nZW5lcmF0ZWRCeSA/IHRoaXMuZ2VuZXJhdGVkQnkudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIHRleHQ6IHRoaXMudGV4dCA/IHRoaXMudGV4dC50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgZmlsZTogdGhpcy5maWxlID8gdGhpcy5maWxlLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBzdGlja2VyOiB0aGlzLnN0aWNrZXIgPyB0aGlzLnN0aWNrZXIudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGxvY2F0aW9uOiB0aGlzLmxvY2F0aW9uID8gdGhpcy5sb2NhdGlvbi50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgbGl2ZUxvY2F0aW9uOiB0aGlzLmxpdmVMb2NhdGlvblxuICAgICAgICA/IHRoaXMubGl2ZUxvY2F0aW9uLnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICBwb2xsOiB0aGlzLnBvbGwgPyB0aGlzLnBvbGwudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGZvcm06IHRoaXMuZm9ybSA/IHRoaXMuZm9ybS50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgYnV0dG9uczogdGhpcy5idXR0b25zID8gdGhpcy5idXR0b25zLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBzaGFyZVVpZDogdGhpcy5zaGFyZVVpZCA/IHRoaXMuc2hhcmVVaWQudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGZvcm1SZXN1bHQ6IHRoaXMuZm9ybVJlc3VsdCA/IHRoaXMuZm9ybVJlc3VsdC50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgc2hhcmVQcml2YXRlRGF0YVJlcXVlc3Q6IHRoaXMuc2hhcmVQcml2YXRlRGF0YVJlcXVlc3RcbiAgICAgICAgPyB0aGlzLnNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0LnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICBzaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZTogdGhpcy5zaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZVxuICAgICAgICA/IHRoaXMuc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UudG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIGNhbGxFdmVudDogdGhpcy5jYWxsRXZlbnQgPyB0aGlzLmNhbGxFdmVudC50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgdGFibGU6IHRoaXMudGFibGUgPyB0aGlzLnRhYmxlLnRvT2JqZWN0KCkgOiB1bmRlZmluZWRcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBNZXNzYWdlQnlDbGllbnQuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBwYWNrZXRJZDogdGhpcy5wYWNrZXRJZCxcbiAgICAgIHRvOiB0aGlzLnRvID8gdGhpcy50by50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICByZXBseVRvSWQ6IHRoaXMucmVwbHlUb0lkLFxuICAgICAgZm9yd2FyZEZyb206IHRoaXMuZm9yd2FyZEZyb21cbiAgICAgICAgPyB0aGlzLmZvcndhcmRGcm9tLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbCxcbiAgICAgIGVuY3J5cHRlZDogdGhpcy5lbmNyeXB0ZWQsXG4gICAgICB0dGw6IHRoaXMudHRsLFxuICAgICAgdGhyZWFkOiB0aGlzLnRocmVhZCxcbiAgICAgIHNob3VsZEJlUXVpZXQ6IHRoaXMuc2hvdWxkQmVRdWlldCxcbiAgICAgIGdlbmVyYXRlZEJ5OiB0aGlzLmdlbmVyYXRlZEJ5XG4gICAgICAgID8gdGhpcy5nZW5lcmF0ZWRCeS50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICB0ZXh0OiB0aGlzLnRleHQgPyB0aGlzLnRleHQudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgZmlsZTogdGhpcy5maWxlID8gdGhpcy5maWxlLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIHN0aWNrZXI6IHRoaXMuc3RpY2tlciA/IHRoaXMuc3RpY2tlci50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICBsb2NhdGlvbjogdGhpcy5sb2NhdGlvbiA/IHRoaXMubG9jYXRpb24udG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgbGl2ZUxvY2F0aW9uOiB0aGlzLmxpdmVMb2NhdGlvblxuICAgICAgICA/IHRoaXMubGl2ZUxvY2F0aW9uLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbCxcbiAgICAgIHBvbGw6IHRoaXMucG9sbCA/IHRoaXMucG9sbC50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICBmb3JtOiB0aGlzLmZvcm0gPyB0aGlzLmZvcm0udG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgYnV0dG9uczogdGhpcy5idXR0b25zID8gdGhpcy5idXR0b25zLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIHNoYXJlVWlkOiB0aGlzLnNoYXJlVWlkID8gdGhpcy5zaGFyZVVpZC50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICBmb3JtUmVzdWx0OiB0aGlzLmZvcm1SZXN1bHRcbiAgICAgICAgPyB0aGlzLmZvcm1SZXN1bHQudG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsLFxuICAgICAgc2hhcmVQcml2YXRlRGF0YVJlcXVlc3Q6IHRoaXMuc2hhcmVQcml2YXRlRGF0YVJlcXVlc3RcbiAgICAgICAgPyB0aGlzLnNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0LnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbCxcbiAgICAgIHNoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlOiB0aGlzLnNoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlXG4gICAgICAgID8gdGhpcy5zaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZS50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICBjYWxsRXZlbnQ6IHRoaXMuY2FsbEV2ZW50ID8gdGhpcy5jYWxsRXZlbnQudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgdGFibGU6IHRoaXMudGFibGUgPyB0aGlzLnRhYmxlLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbFxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgTWVzc2FnZUJ5Q2xpZW50IHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBNZXNzYWdlQnlDbGllbnRcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIHBhY2tldElkPzogc3RyaW5nO1xuICAgIHRvPzogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuQXNPYmplY3Q7XG4gICAgcmVwbHlUb0lkPzogc3RyaW5nO1xuICAgIGZvcndhcmRGcm9tPzogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuQXNPYmplY3Q7XG4gICAgZW5jcnlwdGVkPzogYm9vbGVhbjtcbiAgICB0dGw/OiBudW1iZXI7XG4gICAgdGhyZWFkPzogc3RyaW5nO1xuICAgIHNob3VsZEJlUXVpZXQ/OiBib29sZWFuO1xuICAgIGdlbmVyYXRlZEJ5PzogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuQXNPYmplY3Q7XG4gICAgdGV4dD86IFRleHQuQXNPYmplY3Q7XG4gICAgZmlsZT86IHByb3RvUHViVjFNb2RlbHMwMDEuRmlsZS5Bc09iamVjdDtcbiAgICBzdGlja2VyPzogcHJvdG9QdWJWMU1vZGVsczAwNC5TdGlja2VyLkFzT2JqZWN0O1xuICAgIGxvY2F0aW9uPzogcHJvdG9QdWJWMU1vZGVsczAwNS5Mb2NhdGlvbi5Bc09iamVjdDtcbiAgICBsaXZlTG9jYXRpb24/OiBwcm90b1B1YlYxTW9kZWxzMDA1LkxpdmVMb2NhdGlvbi5Bc09iamVjdDtcbiAgICBwb2xsPzogcHJvdG9QdWJWMU1vZGVsczAxMC5Qb2xsLkFzT2JqZWN0O1xuICAgIGZvcm0/OiBwcm90b1B1YlYxTW9kZWxzMDA5LkZvcm0uQXNPYmplY3Q7XG4gICAgYnV0dG9ucz86IHByb3RvUHViVjFNb2RlbHMwMDkuQnV0dG9ucy5Bc09iamVjdDtcbiAgICBzaGFyZVVpZD86IFNoYXJlVWlkLkFzT2JqZWN0O1xuICAgIGZvcm1SZXN1bHQ/OiBwcm90b1B1YlYxTW9kZWxzMDA5LkZvcm1SZXN1bHQuQXNPYmplY3Q7XG4gICAgc2hhcmVQcml2YXRlRGF0YVJlcXVlc3Q/OiBwcm90b1B1YlYxTW9kZWxzMDA4LlNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0LkFzT2JqZWN0O1xuICAgIHNoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlPzogcHJvdG9QdWJWMU1vZGVsczAwOC5TaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZS5Bc09iamVjdDtcbiAgICBjYWxsRXZlbnQ/OiBwcm90b1B1YlYxTW9kZWxzMDEyLkNhbGxFdmVudC5Bc09iamVjdDtcbiAgICB0YWJsZT86IHByb3RvUHViVjFNb2RlbHMwMDkuVGFibGUuQXNPYmplY3Q7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgTWVzc2FnZUJ5Q2xpZW50XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBwYWNrZXRJZD86IHN0cmluZztcbiAgICB0bz86IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICByZXBseVRvSWQ/OiBzdHJpbmc7XG4gICAgZm9yd2FyZEZyb20/OiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgZW5jcnlwdGVkPzogYm9vbGVhbjtcbiAgICB0dGw/OiBudW1iZXI7XG4gICAgdGhyZWFkPzogc3RyaW5nO1xuICAgIHNob3VsZEJlUXVpZXQ/OiBib29sZWFuO1xuICAgIGdlbmVyYXRlZEJ5PzogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHRleHQ/OiBUZXh0LkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBmaWxlPzogcHJvdG9QdWJWMU1vZGVsczAwMS5GaWxlLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBzdGlja2VyPzogcHJvdG9QdWJWMU1vZGVsczAwNC5TdGlja2VyLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBsb2NhdGlvbj86IHByb3RvUHViVjFNb2RlbHMwMDUuTG9jYXRpb24uQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIGxpdmVMb2NhdGlvbj86IHByb3RvUHViVjFNb2RlbHMwMDUuTGl2ZUxvY2F0aW9uLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBwb2xsPzogcHJvdG9QdWJWMU1vZGVsczAxMC5Qb2xsLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBmb3JtPzogcHJvdG9QdWJWMU1vZGVsczAwOS5Gb3JtLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBidXR0b25zPzogcHJvdG9QdWJWMU1vZGVsczAwOS5CdXR0b25zLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBzaGFyZVVpZD86IFNoYXJlVWlkLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBmb3JtUmVzdWx0PzogcHJvdG9QdWJWMU1vZGVsczAwOS5Gb3JtUmVzdWx0LkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBzaGFyZVByaXZhdGVEYXRhUmVxdWVzdD86IHByb3RvUHViVjFNb2RlbHMwMDguU2hhcmVQcml2YXRlRGF0YVJlcXVlc3QuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHNoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlPzogcHJvdG9QdWJWMU1vZGVsczAwOC5TaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZS5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgY2FsbEV2ZW50PzogcHJvdG9QdWJWMU1vZGVsczAxMi5DYWxsRXZlbnQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHRhYmxlPzogcHJvdG9QdWJWMU1vZGVsczAwOS5UYWJsZS5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gIH1cbiAgZXhwb3J0IGVudW0gVHlwZUNhc2Uge1xuICAgIG5vbmUgPSAwLFxuICAgIHRleHQgPSAxLFxuICAgIGZpbGUgPSAyLFxuICAgIHN0aWNrZXIgPSAzLFxuICAgIGxvY2F0aW9uID0gNCxcbiAgICBsaXZlTG9jYXRpb24gPSA1LFxuICAgIHBvbGwgPSA2LFxuICAgIGZvcm0gPSA3LFxuICAgIGJ1dHRvbnMgPSA4LFxuICAgIHNoYXJlVWlkID0gOSxcbiAgICBmb3JtUmVzdWx0ID0gMTAsXG4gICAgc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QgPSAxMSxcbiAgICBzaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZSA9IDEyLFxuICAgIGNhbGxFdmVudCA9IDEzLFxuICAgIHRhYmxlID0gMTRcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIHByb3RvLnB1Yi52MS5tb2RlbHMuTWVzc2FnZUJ5Qm90XG4gKi9cbmV4cG9ydCBjbGFzcyBNZXNzYWdlQnlCb3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdwcm90by5wdWIudjEubW9kZWxzLk1lc3NhZ2VCeUJvdCc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IE1lc3NhZ2VCeUJvdCgpO1xuICAgIE1lc3NhZ2VCeUJvdC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IE1lc3NhZ2VCeUJvdCkge1xuICAgIF9pbnN0YW5jZS5wYWNrZXRJZCA9IF9pbnN0YW5jZS5wYWNrZXRJZCB8fCAnJztcbiAgICBfaW5zdGFuY2UuZnJvbSA9IF9pbnN0YW5jZS5mcm9tIHx8IHVuZGVmaW5lZDtcbiAgICBfaW5zdGFuY2UudG8gPSBfaW5zdGFuY2UudG8gfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5yZXBseVRvSWQgPSBfaW5zdGFuY2UucmVwbHlUb0lkIHx8ICcwJztcbiAgICBfaW5zdGFuY2UuZm9yd2FyZEZyb20gPSBfaW5zdGFuY2UuZm9yd2FyZEZyb20gfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5lbmNyeXB0ZWQgPSBfaW5zdGFuY2UuZW5jcnlwdGVkIHx8IGZhbHNlO1xuICAgIF9pbnN0YW5jZS50dGwgPSBfaW5zdGFuY2UudHRsIHx8IDA7XG4gICAgX2luc3RhbmNlLnRocmVhZCA9IF9pbnN0YW5jZS50aHJlYWQgfHwgJzAnO1xuICAgIF9pbnN0YW5jZS5zaG91bGRCZVF1aWV0ID0gX2luc3RhbmNlLnNob3VsZEJlUXVpZXQgfHwgZmFsc2U7XG4gICAgX2luc3RhbmNlLm1lc3NhZ2VNYXJrdXAgPSBfaW5zdGFuY2UubWVzc2FnZU1hcmt1cCB8fCB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBNZXNzYWdlQnlCb3QsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLnBhY2tldElkID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBfaW5zdGFuY2UuZnJvbSA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuZnJvbSxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICBfaW5zdGFuY2UudG8gPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLnRvLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA3OlxuICAgICAgICAgIF9pbnN0YW5jZS5yZXBseVRvSWQgPSBfcmVhZGVyLnJlYWRJbnQ2NFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgX2luc3RhbmNlLmZvcndhcmRGcm9tID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5mb3J3YXJkRnJvbSxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgX2luc3RhbmNlLmVuY3J5cHRlZCA9IF9yZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyMzpcbiAgICAgICAgICBfaW5zdGFuY2UudHRsID0gX3JlYWRlci5yZWFkSW50MzIoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyODpcbiAgICAgICAgICBfaW5zdGFuY2UudGhyZWFkID0gX3JlYWRlci5yZWFkSW50NjRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOTpcbiAgICAgICAgICBfaW5zdGFuY2Uuc2hvdWxkQmVRdWlldCA9IF9yZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzNDpcbiAgICAgICAgICBfaW5zdGFuY2UubWVzc2FnZU1hcmt1cCA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDEzLk1lc3NhZ2VNYXJrdXAoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLm1lc3NhZ2VNYXJrdXAsXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDEzLk1lc3NhZ2VNYXJrdXAuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICBfaW5zdGFuY2UudGV4dCA9IG5ldyBUZXh0KCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShfaW5zdGFuY2UudGV4dCwgVGV4dC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgIF9pbnN0YW5jZS5maWxlID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDEuRmlsZSgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuZmlsZSxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDEuRmlsZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgIF9pbnN0YW5jZS5zdGlja2VyID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDQuU3RpY2tlcigpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2Uuc3RpY2tlcixcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDQuU3RpY2tlci5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE0OlxuICAgICAgICAgIF9pbnN0YW5jZS5sb2NhdGlvbiA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDA1LkxvY2F0aW9uKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5sb2NhdGlvbixcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDUuTG9jYXRpb24uZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxODpcbiAgICAgICAgICBfaW5zdGFuY2UuZm9ybSA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDA5LkZvcm0oKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmZvcm0sXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDA5LkZvcm0uZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyMDpcbiAgICAgICAgICBfaW5zdGFuY2UuYnV0dG9ucyA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDA5LkJ1dHRvbnMoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmJ1dHRvbnMsXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDA5LkJ1dHRvbnMuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyMTpcbiAgICAgICAgICBfaW5zdGFuY2Uuc2hhcmVVaWQgPSBuZXcgU2hhcmVVaWQoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLnNoYXJlVWlkLFxuICAgICAgICAgICAgU2hhcmVVaWQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyNjpcbiAgICAgICAgICBfaW5zdGFuY2Uuc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QgPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAwOC5TaGFyZVByaXZhdGVEYXRhUmVxdWVzdCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2Uuc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QsXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDA4LlNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0XG4gICAgICAgICAgICAgIC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE5OlxuICAgICAgICAgIF9pbnN0YW5jZS5ib3RTcGVjaWZpY1BlcnNpc3RlbnRFdmVudCA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDA3LkJvdFNwZWNpZmljUGVyc2lzdGVudEV2ZW50KCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5ib3RTcGVjaWZpY1BlcnNpc3RlbnRFdmVudCxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDcuQm90U3BlY2lmaWNQZXJzaXN0ZW50RXZlbnRcbiAgICAgICAgICAgICAgLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzI6XG4gICAgICAgICAgX2luc3RhbmNlLnRhYmxlID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDkuVGFibGUoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLnRhYmxlLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwOS5UYWJsZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgTWVzc2FnZUJ5Qm90LnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogTWVzc2FnZUJ5Qm90LFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLnBhY2tldElkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS5wYWNrZXRJZCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZnJvbSkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDUsXG4gICAgICAgIF9pbnN0YW5jZS5mcm9tIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UudG8pIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA2LFxuICAgICAgICBfaW5zdGFuY2UudG8gYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5yZXBseVRvSWQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQ2NFN0cmluZyg3LCBfaW5zdGFuY2UucmVwbHlUb0lkKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5mb3J3YXJkRnJvbSkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDgsXG4gICAgICAgIF9pbnN0YW5jZS5mb3J3YXJkRnJvbSBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmVuY3J5cHRlZCkge1xuICAgICAgX3dyaXRlci53cml0ZUJvb2woMTAsIF9pbnN0YW5jZS5lbmNyeXB0ZWQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnR0bCkge1xuICAgICAgX3dyaXRlci53cml0ZUludDMyKDIzLCBfaW5zdGFuY2UudHRsKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS50aHJlYWQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQ2NFN0cmluZygyOCwgX2luc3RhbmNlLnRocmVhZCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uuc2hvdWxkQmVRdWlldCkge1xuICAgICAgX3dyaXRlci53cml0ZUJvb2woMjksIF9pbnN0YW5jZS5zaG91bGRCZVF1aWV0KTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5tZXNzYWdlTWFya3VwKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMzQsXG4gICAgICAgIF9pbnN0YW5jZS5tZXNzYWdlTWFya3VwIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxMy5NZXNzYWdlTWFya3VwLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnRleHQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAxMSxcbiAgICAgICAgX2luc3RhbmNlLnRleHQgYXMgYW55LFxuICAgICAgICBUZXh0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmZpbGUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAxMixcbiAgICAgICAgX2luc3RhbmNlLmZpbGUgYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAxLkZpbGUuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uuc3RpY2tlcikge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDEzLFxuICAgICAgICBfaW5zdGFuY2Uuc3RpY2tlciBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDQuU3RpY2tlci5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5sb2NhdGlvbikge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDE0LFxuICAgICAgICBfaW5zdGFuY2UubG9jYXRpb24gYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDA1LkxvY2F0aW9uLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmZvcm0pIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAxOCxcbiAgICAgICAgX2luc3RhbmNlLmZvcm0gYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDA5LkZvcm0uc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuYnV0dG9ucykge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDIwLFxuICAgICAgICBfaW5zdGFuY2UuYnV0dG9ucyBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDkuQnV0dG9ucy5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5zaGFyZVVpZCkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDIxLFxuICAgICAgICBfaW5zdGFuY2Uuc2hhcmVVaWQgYXMgYW55LFxuICAgICAgICBTaGFyZVVpZC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDI2LFxuICAgICAgICBfaW5zdGFuY2Uuc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QgYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDA4LlNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmJvdFNwZWNpZmljUGVyc2lzdGVudEV2ZW50KSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMTksXG4gICAgICAgIF9pbnN0YW5jZS5ib3RTcGVjaWZpY1BlcnNpc3RlbnRFdmVudCBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDcuQm90U3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UudGFibGUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAzMixcbiAgICAgICAgX2luc3RhbmNlLnRhYmxlIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwOS5UYWJsZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9wYWNrZXRJZD86IHN0cmluZztcbiAgcHJpdmF0ZSBfZnJvbT86IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkO1xuICBwcml2YXRlIF90bz86IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkO1xuICBwcml2YXRlIF9yZXBseVRvSWQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2ZvcndhcmRGcm9tPzogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQ7XG4gIHByaXZhdGUgX2VuY3J5cHRlZD86IGJvb2xlYW47XG4gIHByaXZhdGUgX3R0bD86IG51bWJlcjtcbiAgcHJpdmF0ZSBfdGhyZWFkPzogc3RyaW5nO1xuICBwcml2YXRlIF9zaG91bGRCZVF1aWV0PzogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfbWVzc2FnZU1hcmt1cD86IHByb3RvUHViVjFNb2RlbHMwMTMuTWVzc2FnZU1hcmt1cDtcbiAgcHJpdmF0ZSBfdGV4dD86IFRleHQ7XG4gIHByaXZhdGUgX2ZpbGU/OiBwcm90b1B1YlYxTW9kZWxzMDAxLkZpbGU7XG4gIHByaXZhdGUgX3N0aWNrZXI/OiBwcm90b1B1YlYxTW9kZWxzMDA0LlN0aWNrZXI7XG4gIHByaXZhdGUgX2xvY2F0aW9uPzogcHJvdG9QdWJWMU1vZGVsczAwNS5Mb2NhdGlvbjtcbiAgcHJpdmF0ZSBfZm9ybT86IHByb3RvUHViVjFNb2RlbHMwMDkuRm9ybTtcbiAgcHJpdmF0ZSBfYnV0dG9ucz86IHByb3RvUHViVjFNb2RlbHMwMDkuQnV0dG9ucztcbiAgcHJpdmF0ZSBfc2hhcmVVaWQ/OiBTaGFyZVVpZDtcbiAgcHJpdmF0ZSBfc2hhcmVQcml2YXRlRGF0YVJlcXVlc3Q/OiBwcm90b1B1YlYxTW9kZWxzMDA4LlNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0O1xuICBwcml2YXRlIF9ib3RTcGVjaWZpY1BlcnNpc3RlbnRFdmVudD86IHByb3RvUHViVjFNb2RlbHMwMDcuQm90U3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQ7XG4gIHByaXZhdGUgX3RhYmxlPzogcHJvdG9QdWJWMU1vZGVsczAwOS5UYWJsZTtcblxuICBwcml2YXRlIF90eXBlOiBNZXNzYWdlQnlCb3QuVHlwZUNhc2UgPSBNZXNzYWdlQnlCb3QuVHlwZUNhc2Uubm9uZTtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIE1lc3NhZ2VCeUJvdCB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxNZXNzYWdlQnlCb3QuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMucGFja2V0SWQgPSBfdmFsdWUucGFja2V0SWQ7XG4gICAgdGhpcy5mcm9tID0gX3ZhbHVlLmZyb21cbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkKF92YWx1ZS5mcm9tKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy50byA9IF92YWx1ZS50byA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZChfdmFsdWUudG8pIDogdW5kZWZpbmVkO1xuICAgIHRoaXMucmVwbHlUb0lkID0gX3ZhbHVlLnJlcGx5VG9JZDtcbiAgICB0aGlzLmZvcndhcmRGcm9tID0gX3ZhbHVlLmZvcndhcmRGcm9tXG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZChfdmFsdWUuZm9yd2FyZEZyb20pXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmVuY3J5cHRlZCA9IF92YWx1ZS5lbmNyeXB0ZWQ7XG4gICAgdGhpcy50dGwgPSBfdmFsdWUudHRsO1xuICAgIHRoaXMudGhyZWFkID0gX3ZhbHVlLnRocmVhZDtcbiAgICB0aGlzLnNob3VsZEJlUXVpZXQgPSBfdmFsdWUuc2hvdWxkQmVRdWlldDtcbiAgICB0aGlzLm1lc3NhZ2VNYXJrdXAgPSBfdmFsdWUubWVzc2FnZU1hcmt1cFxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAxMy5NZXNzYWdlTWFya3VwKF92YWx1ZS5tZXNzYWdlTWFya3VwKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy50ZXh0ID0gX3ZhbHVlLnRleHQgPyBuZXcgVGV4dChfdmFsdWUudGV4dCkgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5maWxlID0gX3ZhbHVlLmZpbGVcbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMDEuRmlsZShfdmFsdWUuZmlsZSlcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuc3RpY2tlciA9IF92YWx1ZS5zdGlja2VyXG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDA0LlN0aWNrZXIoX3ZhbHVlLnN0aWNrZXIpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmxvY2F0aW9uID0gX3ZhbHVlLmxvY2F0aW9uXG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDA1LkxvY2F0aW9uKF92YWx1ZS5sb2NhdGlvbilcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuZm9ybSA9IF92YWx1ZS5mb3JtXG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDA5LkZvcm0oX3ZhbHVlLmZvcm0pXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmJ1dHRvbnMgPSBfdmFsdWUuYnV0dG9uc1xuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAwOS5CdXR0b25zKF92YWx1ZS5idXR0b25zKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5zaGFyZVVpZCA9IF92YWx1ZS5zaGFyZVVpZCA/IG5ldyBTaGFyZVVpZChfdmFsdWUuc2hhcmVVaWQpIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QgPSBfdmFsdWUuc2hhcmVQcml2YXRlRGF0YVJlcXVlc3RcbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMDguU2hhcmVQcml2YXRlRGF0YVJlcXVlc3QoXG4gICAgICAgICAgX3ZhbHVlLnNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0XG4gICAgICAgIClcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuYm90U3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQgPSBfdmFsdWUuYm90U3BlY2lmaWNQZXJzaXN0ZW50RXZlbnRcbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMDcuQm90U3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQoXG4gICAgICAgICAgX3ZhbHVlLmJvdFNwZWNpZmljUGVyc2lzdGVudEV2ZW50XG4gICAgICAgIClcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMudGFibGUgPSBfdmFsdWUudGFibGVcbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMDkuVGFibGUoX3ZhbHVlLnRhYmxlKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgTWVzc2FnZUJ5Qm90LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgcGFja2V0SWQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcGFja2V0SWQ7XG4gIH1cbiAgc2V0IHBhY2tldElkKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9wYWNrZXRJZCA9IHZhbHVlO1xuICB9XG4gIGdldCBmcm9tKCk6IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZnJvbTtcbiAgfVxuICBzZXQgZnJvbSh2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9mcm9tID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHRvKCk6IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdG87XG4gIH1cbiAgc2V0IHRvKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZCB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3RvID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHJlcGx5VG9JZCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9yZXBseVRvSWQ7XG4gIH1cbiAgc2V0IHJlcGx5VG9JZCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcmVwbHlUb0lkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGZvcndhcmRGcm9tKCk6IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZm9yd2FyZEZyb207XG4gIH1cbiAgc2V0IGZvcndhcmRGcm9tKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZCB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2ZvcndhcmRGcm9tID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGVuY3J5cHRlZCgpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZW5jcnlwdGVkO1xuICB9XG4gIHNldCBlbmNyeXB0ZWQodmFsdWU6IGJvb2xlYW4gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9lbmNyeXB0ZWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdHRsKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3R0bDtcbiAgfVxuICBzZXQgdHRsKHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl90dGwgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdGhyZWFkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3RocmVhZDtcbiAgfVxuICBzZXQgdGhyZWFkKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl90aHJlYWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc2hvdWxkQmVRdWlldCgpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvdWxkQmVRdWlldDtcbiAgfVxuICBzZXQgc2hvdWxkQmVRdWlldCh2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3Nob3VsZEJlUXVpZXQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbWVzc2FnZU1hcmt1cCgpOiBwcm90b1B1YlYxTW9kZWxzMDEzLk1lc3NhZ2VNYXJrdXAgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9tZXNzYWdlTWFya3VwO1xuICB9XG4gIHNldCBtZXNzYWdlTWFya3VwKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDEzLk1lc3NhZ2VNYXJrdXAgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9tZXNzYWdlTWFya3VwID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHRleHQoKTogVGV4dCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3RleHQ7XG4gIH1cbiAgc2V0IHRleHQodmFsdWU6IFRleHQgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fZmlsZSA9IHRoaXMuX3N0aWNrZXIgPSB0aGlzLl9sb2NhdGlvbiA9IHRoaXMuX2Zvcm0gPSB0aGlzLl9idXR0b25zID0gdGhpcy5fc2hhcmVVaWQgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCA9IHRoaXMuX2JvdFNwZWNpZmljUGVyc2lzdGVudEV2ZW50ID0gdGhpcy5fdGFibGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gTWVzc2FnZUJ5Qm90LlR5cGVDYXNlLnRleHQ7XG4gICAgfVxuICAgIHRoaXMuX3RleHQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZmlsZSgpOiBwcm90b1B1YlYxTW9kZWxzMDAxLkZpbGUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9maWxlO1xuICB9XG4gIHNldCBmaWxlKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDAxLkZpbGUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fdGV4dCA9IHRoaXMuX3N0aWNrZXIgPSB0aGlzLl9sb2NhdGlvbiA9IHRoaXMuX2Zvcm0gPSB0aGlzLl9idXR0b25zID0gdGhpcy5fc2hhcmVVaWQgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCA9IHRoaXMuX2JvdFNwZWNpZmljUGVyc2lzdGVudEV2ZW50ID0gdGhpcy5fdGFibGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gTWVzc2FnZUJ5Qm90LlR5cGVDYXNlLmZpbGU7XG4gICAgfVxuICAgIHRoaXMuX2ZpbGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc3RpY2tlcigpOiBwcm90b1B1YlYxTW9kZWxzMDA0LlN0aWNrZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zdGlja2VyO1xuICB9XG4gIHNldCBzdGlja2VyKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDA0LlN0aWNrZXIgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fdGV4dCA9IHRoaXMuX2ZpbGUgPSB0aGlzLl9sb2NhdGlvbiA9IHRoaXMuX2Zvcm0gPSB0aGlzLl9idXR0b25zID0gdGhpcy5fc2hhcmVVaWQgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCA9IHRoaXMuX2JvdFNwZWNpZmljUGVyc2lzdGVudEV2ZW50ID0gdGhpcy5fdGFibGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gTWVzc2FnZUJ5Qm90LlR5cGVDYXNlLnN0aWNrZXI7XG4gICAgfVxuICAgIHRoaXMuX3N0aWNrZXIgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbG9jYXRpb24oKTogcHJvdG9QdWJWMU1vZGVsczAwNS5Mb2NhdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2xvY2F0aW9uO1xuICB9XG4gIHNldCBsb2NhdGlvbih2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAwNS5Mb2NhdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl90ZXh0ID0gdGhpcy5fZmlsZSA9IHRoaXMuX3N0aWNrZXIgPSB0aGlzLl9mb3JtID0gdGhpcy5fYnV0dG9ucyA9IHRoaXMuX3NoYXJlVWlkID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QgPSB0aGlzLl9ib3RTcGVjaWZpY1BlcnNpc3RlbnRFdmVudCA9IHRoaXMuX3RhYmxlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IE1lc3NhZ2VCeUJvdC5UeXBlQ2FzZS5sb2NhdGlvbjtcbiAgICB9XG4gICAgdGhpcy5fbG9jYXRpb24gPSB2YWx1ZTtcbiAgfVxuICBnZXQgZm9ybSgpOiBwcm90b1B1YlYxTW9kZWxzMDA5LkZvcm0gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9mb3JtO1xuICB9XG4gIHNldCBmb3JtKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDA5LkZvcm0gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fdGV4dCA9IHRoaXMuX2ZpbGUgPSB0aGlzLl9zdGlja2VyID0gdGhpcy5fbG9jYXRpb24gPSB0aGlzLl9idXR0b25zID0gdGhpcy5fc2hhcmVVaWQgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCA9IHRoaXMuX2JvdFNwZWNpZmljUGVyc2lzdGVudEV2ZW50ID0gdGhpcy5fdGFibGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gTWVzc2FnZUJ5Qm90LlR5cGVDYXNlLmZvcm07XG4gICAgfVxuICAgIHRoaXMuX2Zvcm0gPSB2YWx1ZTtcbiAgfVxuICBnZXQgYnV0dG9ucygpOiBwcm90b1B1YlYxTW9kZWxzMDA5LkJ1dHRvbnMgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9idXR0b25zO1xuICB9XG4gIHNldCBidXR0b25zKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDA5LkJ1dHRvbnMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fdGV4dCA9IHRoaXMuX2ZpbGUgPSB0aGlzLl9zdGlja2VyID0gdGhpcy5fbG9jYXRpb24gPSB0aGlzLl9mb3JtID0gdGhpcy5fc2hhcmVVaWQgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCA9IHRoaXMuX2JvdFNwZWNpZmljUGVyc2lzdGVudEV2ZW50ID0gdGhpcy5fdGFibGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gTWVzc2FnZUJ5Qm90LlR5cGVDYXNlLmJ1dHRvbnM7XG4gICAgfVxuICAgIHRoaXMuX2J1dHRvbnMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc2hhcmVVaWQoKTogU2hhcmVVaWQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zaGFyZVVpZDtcbiAgfVxuICBzZXQgc2hhcmVVaWQodmFsdWU6IFNoYXJlVWlkIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3RleHQgPSB0aGlzLl9maWxlID0gdGhpcy5fc3RpY2tlciA9IHRoaXMuX2xvY2F0aW9uID0gdGhpcy5fZm9ybSA9IHRoaXMuX2J1dHRvbnMgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCA9IHRoaXMuX2JvdFNwZWNpZmljUGVyc2lzdGVudEV2ZW50ID0gdGhpcy5fdGFibGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gTWVzc2FnZUJ5Qm90LlR5cGVDYXNlLnNoYXJlVWlkO1xuICAgIH1cbiAgICB0aGlzLl9zaGFyZVVpZCA9IHZhbHVlO1xuICB9XG4gIGdldCBzaGFyZVByaXZhdGVEYXRhUmVxdWVzdCgpOlxuICAgIHwgcHJvdG9QdWJWMU1vZGVsczAwOC5TaGFyZVByaXZhdGVEYXRhUmVxdWVzdFxuICAgIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc2hhcmVQcml2YXRlRGF0YVJlcXVlc3Q7XG4gIH1cbiAgc2V0IHNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0KFxuICAgIHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDA4LlNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0IHwgdW5kZWZpbmVkXG4gICkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl90ZXh0ID0gdGhpcy5fZmlsZSA9IHRoaXMuX3N0aWNrZXIgPSB0aGlzLl9sb2NhdGlvbiA9IHRoaXMuX2Zvcm0gPSB0aGlzLl9idXR0b25zID0gdGhpcy5fc2hhcmVVaWQgPSB0aGlzLl9ib3RTcGVjaWZpY1BlcnNpc3RlbnRFdmVudCA9IHRoaXMuX3RhYmxlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IE1lc3NhZ2VCeUJvdC5UeXBlQ2FzZS5zaGFyZVByaXZhdGVEYXRhUmVxdWVzdDtcbiAgICB9XG4gICAgdGhpcy5fc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QgPSB2YWx1ZTtcbiAgfVxuICBnZXQgYm90U3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQoKTpcbiAgICB8IHByb3RvUHViVjFNb2RlbHMwMDcuQm90U3BlY2lmaWNQZXJzaXN0ZW50RXZlbnRcbiAgICB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2JvdFNwZWNpZmljUGVyc2lzdGVudEV2ZW50O1xuICB9XG4gIHNldCBib3RTcGVjaWZpY1BlcnNpc3RlbnRFdmVudChcbiAgICB2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAwNy5Cb3RTcGVjaWZpY1BlcnNpc3RlbnRFdmVudCB8IHVuZGVmaW5lZFxuICApIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fdGV4dCA9IHRoaXMuX2ZpbGUgPSB0aGlzLl9zdGlja2VyID0gdGhpcy5fbG9jYXRpb24gPSB0aGlzLl9mb3JtID0gdGhpcy5fYnV0dG9ucyA9IHRoaXMuX3NoYXJlVWlkID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QgPSB0aGlzLl90YWJsZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBNZXNzYWdlQnlCb3QuVHlwZUNhc2UuYm90U3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQ7XG4gICAgfVxuICAgIHRoaXMuX2JvdFNwZWNpZmljUGVyc2lzdGVudEV2ZW50ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHRhYmxlKCk6IHByb3RvUHViVjFNb2RlbHMwMDkuVGFibGUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90YWJsZTtcbiAgfVxuICBzZXQgdGFibGUodmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMDkuVGFibGUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fdGV4dCA9IHRoaXMuX2ZpbGUgPSB0aGlzLl9zdGlja2VyID0gdGhpcy5fbG9jYXRpb24gPSB0aGlzLl9mb3JtID0gdGhpcy5fYnV0dG9ucyA9IHRoaXMuX3NoYXJlVWlkID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QgPSB0aGlzLl9ib3RTcGVjaWZpY1BlcnNpc3RlbnRFdmVudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBNZXNzYWdlQnlCb3QuVHlwZUNhc2UudGFibGU7XG4gICAgfVxuICAgIHRoaXMuX3RhYmxlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgTWVzc2FnZUJ5Qm90LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IE1lc3NhZ2VCeUJvdC5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhY2tldElkOiB0aGlzLnBhY2tldElkLFxuICAgICAgZnJvbTogdGhpcy5mcm9tID8gdGhpcy5mcm9tLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICB0bzogdGhpcy50byA/IHRoaXMudG8udG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIHJlcGx5VG9JZDogdGhpcy5yZXBseVRvSWQsXG4gICAgICBmb3J3YXJkRnJvbTogdGhpcy5mb3J3YXJkRnJvbSA/IHRoaXMuZm9yd2FyZEZyb20udG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGVuY3J5cHRlZDogdGhpcy5lbmNyeXB0ZWQsXG4gICAgICB0dGw6IHRoaXMudHRsLFxuICAgICAgdGhyZWFkOiB0aGlzLnRocmVhZCxcbiAgICAgIHNob3VsZEJlUXVpZXQ6IHRoaXMuc2hvdWxkQmVRdWlldCxcbiAgICAgIG1lc3NhZ2VNYXJrdXA6IHRoaXMubWVzc2FnZU1hcmt1cFxuICAgICAgICA/IHRoaXMubWVzc2FnZU1hcmt1cC50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgdGV4dDogdGhpcy50ZXh0ID8gdGhpcy50ZXh0LnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBmaWxlOiB0aGlzLmZpbGUgPyB0aGlzLmZpbGUudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIHN0aWNrZXI6IHRoaXMuc3RpY2tlciA/IHRoaXMuc3RpY2tlci50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgbG9jYXRpb246IHRoaXMubG9jYXRpb24gPyB0aGlzLmxvY2F0aW9uLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBmb3JtOiB0aGlzLmZvcm0gPyB0aGlzLmZvcm0udG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGJ1dHRvbnM6IHRoaXMuYnV0dG9ucyA/IHRoaXMuYnV0dG9ucy50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgc2hhcmVVaWQ6IHRoaXMuc2hhcmVVaWQgPyB0aGlzLnNoYXJlVWlkLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBzaGFyZVByaXZhdGVEYXRhUmVxdWVzdDogdGhpcy5zaGFyZVByaXZhdGVEYXRhUmVxdWVzdFxuICAgICAgICA/IHRoaXMuc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QudG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIGJvdFNwZWNpZmljUGVyc2lzdGVudEV2ZW50OiB0aGlzLmJvdFNwZWNpZmljUGVyc2lzdGVudEV2ZW50XG4gICAgICAgID8gdGhpcy5ib3RTcGVjaWZpY1BlcnNpc3RlbnRFdmVudC50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgdGFibGU6IHRoaXMudGFibGUgPyB0aGlzLnRhYmxlLnRvT2JqZWN0KCkgOiB1bmRlZmluZWRcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBNZXNzYWdlQnlCb3QuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBwYWNrZXRJZDogdGhpcy5wYWNrZXRJZCxcbiAgICAgIGZyb206IHRoaXMuZnJvbSA/IHRoaXMuZnJvbS50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICB0bzogdGhpcy50byA/IHRoaXMudG8udG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgcmVwbHlUb0lkOiB0aGlzLnJlcGx5VG9JZCxcbiAgICAgIGZvcndhcmRGcm9tOiB0aGlzLmZvcndhcmRGcm9tXG4gICAgICAgID8gdGhpcy5mb3J3YXJkRnJvbS50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICBlbmNyeXB0ZWQ6IHRoaXMuZW5jcnlwdGVkLFxuICAgICAgdHRsOiB0aGlzLnR0bCxcbiAgICAgIHRocmVhZDogdGhpcy50aHJlYWQsXG4gICAgICBzaG91bGRCZVF1aWV0OiB0aGlzLnNob3VsZEJlUXVpZXQsXG4gICAgICBtZXNzYWdlTWFya3VwOiB0aGlzLm1lc3NhZ2VNYXJrdXBcbiAgICAgICAgPyB0aGlzLm1lc3NhZ2VNYXJrdXAudG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsLFxuICAgICAgdGV4dDogdGhpcy50ZXh0ID8gdGhpcy50ZXh0LnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIGZpbGU6IHRoaXMuZmlsZSA/IHRoaXMuZmlsZS50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICBzdGlja2VyOiB0aGlzLnN0aWNrZXIgPyB0aGlzLnN0aWNrZXIudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgbG9jYXRpb246IHRoaXMubG9jYXRpb24gPyB0aGlzLmxvY2F0aW9uLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIGZvcm06IHRoaXMuZm9ybSA/IHRoaXMuZm9ybS50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICBidXR0b25zOiB0aGlzLmJ1dHRvbnMgPyB0aGlzLmJ1dHRvbnMudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgc2hhcmVVaWQ6IHRoaXMuc2hhcmVVaWQgPyB0aGlzLnNoYXJlVWlkLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIHNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0OiB0aGlzLnNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0XG4gICAgICAgID8gdGhpcy5zaGFyZVByaXZhdGVEYXRhUmVxdWVzdC50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICBib3RTcGVjaWZpY1BlcnNpc3RlbnRFdmVudDogdGhpcy5ib3RTcGVjaWZpY1BlcnNpc3RlbnRFdmVudFxuICAgICAgICA/IHRoaXMuYm90U3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQudG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsLFxuICAgICAgdGFibGU6IHRoaXMudGFibGUgPyB0aGlzLnRhYmxlLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbFxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgTWVzc2FnZUJ5Qm90IHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBNZXNzYWdlQnlCb3RcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIHBhY2tldElkPzogc3RyaW5nO1xuICAgIGZyb20/OiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5Bc09iamVjdDtcbiAgICB0bz86IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLkFzT2JqZWN0O1xuICAgIHJlcGx5VG9JZD86IHN0cmluZztcbiAgICBmb3J3YXJkRnJvbT86IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLkFzT2JqZWN0O1xuICAgIGVuY3J5cHRlZD86IGJvb2xlYW47XG4gICAgdHRsPzogbnVtYmVyO1xuICAgIHRocmVhZD86IHN0cmluZztcbiAgICBzaG91bGRCZVF1aWV0PzogYm9vbGVhbjtcbiAgICBtZXNzYWdlTWFya3VwPzogcHJvdG9QdWJWMU1vZGVsczAxMy5NZXNzYWdlTWFya3VwLkFzT2JqZWN0O1xuICAgIHRleHQ/OiBUZXh0LkFzT2JqZWN0O1xuICAgIGZpbGU/OiBwcm90b1B1YlYxTW9kZWxzMDAxLkZpbGUuQXNPYmplY3Q7XG4gICAgc3RpY2tlcj86IHByb3RvUHViVjFNb2RlbHMwMDQuU3RpY2tlci5Bc09iamVjdDtcbiAgICBsb2NhdGlvbj86IHByb3RvUHViVjFNb2RlbHMwMDUuTG9jYXRpb24uQXNPYmplY3Q7XG4gICAgZm9ybT86IHByb3RvUHViVjFNb2RlbHMwMDkuRm9ybS5Bc09iamVjdDtcbiAgICBidXR0b25zPzogcHJvdG9QdWJWMU1vZGVsczAwOS5CdXR0b25zLkFzT2JqZWN0O1xuICAgIHNoYXJlVWlkPzogU2hhcmVVaWQuQXNPYmplY3Q7XG4gICAgc2hhcmVQcml2YXRlRGF0YVJlcXVlc3Q/OiBwcm90b1B1YlYxTW9kZWxzMDA4LlNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0LkFzT2JqZWN0O1xuICAgIGJvdFNwZWNpZmljUGVyc2lzdGVudEV2ZW50PzogcHJvdG9QdWJWMU1vZGVsczAwNy5Cb3RTcGVjaWZpY1BlcnNpc3RlbnRFdmVudC5Bc09iamVjdDtcbiAgICB0YWJsZT86IHByb3RvUHViVjFNb2RlbHMwMDkuVGFibGUuQXNPYmplY3Q7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgTWVzc2FnZUJ5Qm90XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBwYWNrZXRJZD86IHN0cmluZztcbiAgICBmcm9tPzogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHRvPzogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHJlcGx5VG9JZD86IHN0cmluZztcbiAgICBmb3J3YXJkRnJvbT86IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBlbmNyeXB0ZWQ/OiBib29sZWFuO1xuICAgIHR0bD86IG51bWJlcjtcbiAgICB0aHJlYWQ/OiBzdHJpbmc7XG4gICAgc2hvdWxkQmVRdWlldD86IGJvb2xlYW47XG4gICAgbWVzc2FnZU1hcmt1cD86IHByb3RvUHViVjFNb2RlbHMwMTMuTWVzc2FnZU1hcmt1cC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgdGV4dD86IFRleHQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIGZpbGU/OiBwcm90b1B1YlYxTW9kZWxzMDAxLkZpbGUuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHN0aWNrZXI/OiBwcm90b1B1YlYxTW9kZWxzMDA0LlN0aWNrZXIuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIGxvY2F0aW9uPzogcHJvdG9QdWJWMU1vZGVsczAwNS5Mb2NhdGlvbi5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgZm9ybT86IHByb3RvUHViVjFNb2RlbHMwMDkuRm9ybS5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgYnV0dG9ucz86IHByb3RvUHViVjFNb2RlbHMwMDkuQnV0dG9ucy5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgc2hhcmVVaWQ/OiBTaGFyZVVpZC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgc2hhcmVQcml2YXRlRGF0YVJlcXVlc3Q/OiBwcm90b1B1YlYxTW9kZWxzMDA4LlNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0LkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBib3RTcGVjaWZpY1BlcnNpc3RlbnRFdmVudD86IHByb3RvUHViVjFNb2RlbHMwMDcuQm90U3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHRhYmxlPzogcHJvdG9QdWJWMU1vZGVsczAwOS5UYWJsZS5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gIH1cbiAgZXhwb3J0IGVudW0gVHlwZUNhc2Uge1xuICAgIG5vbmUgPSAwLFxuICAgIHRleHQgPSAxLFxuICAgIGZpbGUgPSAyLFxuICAgIHN0aWNrZXIgPSAzLFxuICAgIGxvY2F0aW9uID0gNCxcbiAgICBmb3JtID0gNSxcbiAgICBidXR0b25zID0gNixcbiAgICBzaGFyZVVpZCA9IDcsXG4gICAgc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QgPSA4LFxuICAgIGJvdFNwZWNpZmljUGVyc2lzdGVudEV2ZW50ID0gOSxcbiAgICB0YWJsZSA9IDEwXG4gIH1cbn1cbiJdfQ==