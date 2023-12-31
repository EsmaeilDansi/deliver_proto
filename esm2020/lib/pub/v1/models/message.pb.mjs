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
        _value = _value || {};
        this.from = _value.from
            ? new protoPubV1Models002.Uid(_value.from)
            : undefined;
        this.messageByClient = _value.messageByClient
            ? new MessageByClient(_value.messageByClient)
            : undefined;
        this.time = _value.time;
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
        _instance.messageByClient = _instance.messageByClient || undefined;
        _instance.time = _instance.time || '0';
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
                    _instance.messageByClient = new MessageByClient();
                    _reader.readMessage(_instance.messageByClient, MessageByClient.deserializeBinaryFromReader);
                    break;
                case 3:
                    _instance.time = _reader.readInt64String();
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
        if (_instance.messageByClient) {
            _writer.writeMessage(2, _instance.messageByClient, MessageByClient.serializeBinaryToWriter);
        }
        if (_instance.time) {
            _writer.writeInt64String(3, _instance.time);
        }
    }
    get from() {
        return this._from;
    }
    set from(value) {
        this._from = value;
    }
    get messageByClient() {
        return this._messageByClient;
    }
    set messageByClient(value) {
        this._messageByClient = value;
    }
    get time() {
        return this._time;
    }
    set time(value) {
        this._time = value;
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
            messageByClient: this.messageByClient
                ? this.messageByClient.toObject()
                : undefined,
            time: this.time
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
            messageByClient: this.messageByClient
                ? this.messageByClient.toProtobufJSON(options)
                : null,
            time: this.time
        };
    }
}
LocalChatMessage.id = 'proto.pub.v1.models.LocalChatMessage';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5wYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Byb3RvL3NyYy9saWIvcHViL3YxL21vZGVscy9tZXNzYWdlLnBiLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdBLE9BQU8sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFjLE1BQU0saUJBQWlCLENBQUM7QUFFekUsT0FBTyxLQUFLLG1CQUFtQixNQUFNLGdDQUFnQyxDQUFDO0FBQ3RFLE9BQU8sS0FBSyxtQkFBbUIsTUFBTSwrQkFBK0IsQ0FBQztBQUdyRSxPQUFPLEtBQUssbUJBQW1CLE1BQU0sbUNBQW1DLENBQUM7QUFDekUsT0FBTyxLQUFLLG1CQUFtQixNQUFNLG9DQUFvQyxDQUFDO0FBQzFFLE9BQU8sS0FBSyxtQkFBbUIsTUFBTSxtQ0FBbUMsQ0FBQztBQUN6RSxPQUFPLEtBQUssbUJBQW1CLE1BQU0sNENBQTRDLENBQUM7QUFDbEYsT0FBTyxLQUFLLG1CQUFtQixNQUFNLDhDQUE4QyxDQUFDO0FBQ3BGLE9BQU8sS0FBSyxtQkFBbUIsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN0RSxPQUFPLEtBQUssbUJBQW1CLE1BQU0sZ0NBQWdDLENBQUM7QUFDdEUsT0FBTyxLQUFLLG1CQUFtQixNQUFNLCtCQUErQixDQUFDO0FBQ3JFLE9BQU8sS0FBSyxtQkFBbUIsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN0RSxPQUFPLEtBQUssbUJBQW1CLE1BQU0sa0NBQWtDLENBQUM7QUFDeEU7O0dBRUc7QUFDSCxNQUFNLE9BQU8sSUFBSTtJQXVEZjs7O09BR0c7SUFDSCxZQUFZLE1BQXdDO1FBQ2xELE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUE1REQ7OztPQUdH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QUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUztZQUNsRCxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUztZQUMzRCxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUztZQUM5RCxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7Z0JBQzdCLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRTtnQkFDOUIsQ0FBQyxDQUFDLFNBQVM7WUFDYixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUztZQUNsRCxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUztZQUN2RSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUztZQUNsRCxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7Z0JBQzdCLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRTtnQkFDOUIsQ0FBQyxDQUFDLFNBQVM7WUFDYixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUztZQUMzRCxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxD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QyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUM1RCxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJO1lBQ3JCLENBQUMsQ0FBQyxJQUFJLG1CQUFtQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQzNDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDZCxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPO1lBQzNCLENBQUMsQ0FBQyxJQUFJLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO1lBQ2pELENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDZCxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRO1lBQzdCLENBQUMsQ0FBQyxJQUFJLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO1lBQ25ELENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDZCxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxZQUFZO1lBQ3JDLENBQUMsQ0FBQyxJQUFJLG1CQUFtQixDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDO1lBQzNELENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDZCxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJO1lBQ3JCLENBQUMsQ0FBQyxJQUFJLG1CQUFtQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQzNDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDZCxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJO1lBQ3JCLENBQUMsQ0FBQyxJQUFJLG1CQUFtQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQzNDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDZCxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPO1lBQzNCLENBQUMsQ0FBQyxJQUFJLG1C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TUFBTSxDQUFDLENBQUM7UUFDdkQsT0FBTyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsUUFBUTtRQUNOLE9BQU87WUFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUztZQUNsRCxlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7Z0JBQ25DLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsRUFBRTtnQkFDakMsQ0FBQyxDQUFDLFNBQVM7WUFDYixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7U0FDaEIsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGNBQWM7SUFDWixhQUFhO0lBQ2IsT0FBK0I7UUFFL0IsT0FBTztZQUNMLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUMxRCxlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7Z0JBQ25DLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUM7Z0JBQzlDLENBQUMsQ0FBQyxJQUFJO1lBQ1IsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1NBQ2hCLENBQUM7SUFDSixDQUFDOztBQS9LTSxtQkFBRSxHQUFHLHNDQUFzQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGUgKi9cbi8qIGVzbGludC1kaXNhYmxlICovXG4vLyBAdHMtbm9jaGVja1xuLy9cbi8vIFRISVMgSVMgQSBHRU5FUkFURUQgRklMRVxuLy8gRE8gTk9UIE1PRElGWSBJVCEgWU9VUiBDSEFOR0VTIFdJTEwgQkUgTE9TVFxuaW1wb3J0IHtcbiAgR3JwY01lc3NhZ2UsXG4gIFJlY3Vyc2l2ZVBhcnRpYWwsXG4gIFRvUHJvdG9idWZKU09OT3B0aW9uc1xufSBmcm9tICdAbmd4LWdycGMvY29tbW9uJztcbmltcG9ydCB7IEJpbmFyeVJlYWRlciwgQmluYXJ5V3JpdGVyLCBCeXRlU291cmNlIH0gZnJvbSAnZ29vZ2xlLXByb3RvYnVmJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMDAgZnJvbSAnLi4vLi4vLi4vcHViL3YxL21vZGVscy9jYXRlZ29yaWVzLnBiJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMDEgZnJvbSAnLi4vLi4vLi4vcHViL3YxL21vZGVscy9maWxlLnBiJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMDIgZnJvbSAnLi4vLi4vLi4vcHViL3YxL21vZGVscy91aWQucGInO1xuaW1wb3J0ICogYXMgcHJvdG9QdWJWMU1vZGVsczAwMyBmcm9tICcuLi8uLi8uLi9wdWIvdjEvbW9kZWxzL2F2YXRhci5wYic7XG5pbXBvcnQgKiBhcyBwcm90b1B1YlYxTW9kZWxzMDA0IGZyb20gJy4uLy4uLy4uL3B1Yi92MS9tb2RlbHMvcGluLWNvZGUtc2V0dGluZ3MucGInO1xuaW1wb3J0ICogYXMgcHJvdG9QdWJWMU1vZGVsczAwNSBmcm9tICcuLi8uLi8uLi9wdWIvdjEvbW9kZWxzL3N0aWNrZXIucGInO1xuaW1wb3J0ICogYXMgcHJvdG9QdWJWMU1vZGVsczAwNiBmcm9tICcuLi8uLi8uLi9wdWIvdjEvbW9kZWxzL2xvY2F0aW9uLnBiJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMDcgZnJvbSAnLi4vLi4vLi4vcHViL3YxL21vZGVscy9wYXltZW50LnBiJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMDggZnJvbSAnLi4vLi4vLi4vcHViL3YxL21vZGVscy9wZXJzaXN0ZW50LWV2ZW50LnBiJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMDkgZnJvbSAnLi4vLi4vLi4vcHViL3YxL21vZGVscy9zaGFyZS1wcml2YXRlLWRhdGEucGInO1xuaW1wb3J0ICogYXMgcHJvdG9QdWJWMU1vZGVsczAxMCBmcm9tICcuLi8uLi8uLi9wdWIvdjEvbW9kZWxzL2Zvcm0ucGInO1xuaW1wb3J0ICogYXMgcHJvdG9QdWJWMU1vZGVsczAxMSBmcm9tICcuLi8uLi8uLi9wdWIvdjEvbW9kZWxzL3BvbGwucGInO1xuaW1wb3J0ICogYXMgcHJvdG9QdWJWMU1vZGVsczAxMiBmcm9tICcuLi8uLi8uLi9wdWIvdjEvbW9kZWxzL211Yy5wYic7XG5pbXBvcnQgKiBhcyBwcm90b1B1YlYxTW9kZWxzMDEzIGZyb20gJy4uLy4uLy4uL3B1Yi92MS9tb2RlbHMvY2FsbC5wYic7XG5pbXBvcnQgKiBhcyBwcm90b1B1YlYxTW9kZWxzMDE0IGZyb20gJy4uLy4uLy4uL3B1Yi92MS9tb2RlbHMvbWFya3VwLnBiJztcbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3IgcHJvdG8ucHViLnYxLm1vZGVscy5UZXh0XG4gKi9cbmV4cG9ydCBjbGFzcyBUZXh0IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAncHJvdG8ucHViLnYxLm1vZGVscy5UZXh0JztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgVGV4dCgpO1xuICAgIFRleHQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBUZXh0KSB7XG4gICAgX2luc3RhbmNlLnRleHQgPSBfaW5zdGFuY2UudGV4dCB8fCAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihfaW5zdGFuY2U6IFRleHQsIF9yZWFkZXI6IEJpbmFyeVJlYWRlcikge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLnRleHQgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFRleHQucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoX2luc3RhbmNlOiBUZXh0LCBfd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoX2luc3RhbmNlLnRleHQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLnRleHQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3RleHQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBUZXh0IHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFRleHQuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMudGV4dCA9IF92YWx1ZS50ZXh0O1xuICAgIFRleHQucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCB0ZXh0KCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3RleHQ7XG4gIH1cbiAgc2V0IHRleHQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3RleHQgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBUZXh0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IFRleHQuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICB0ZXh0OiB0aGlzLnRleHRcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBUZXh0LkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGV4dDogdGhpcy50ZXh0XG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBUZXh0IHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBUZXh0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICB0ZXh0Pzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIFRleHRcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHRleHQ/OiBzdHJpbmc7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBwcm90by5wdWIudjEubW9kZWxzLlNoYXJlVWlkXG4gKi9cbmV4cG9ydCBjbGFzcyBTaGFyZVVpZCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ3Byb3RvLnB1Yi52MS5tb2RlbHMuU2hhcmVVaWQnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBTaGFyZVVpZCgpO1xuICAgIFNoYXJlVWlkLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogU2hhcmVVaWQpIHtcbiAgICBfaW5zdGFuY2UudWlkID0gX2luc3RhbmNlLnVpZCB8fCB1bmRlZmluZWQ7XG4gICAgX2luc3RhbmNlLnBob25lTnVtYmVyID0gX2luc3RhbmNlLnBob25lTnVtYmVyIHx8ICcnO1xuICAgIF9pbnN0YW5jZS5uYW1lID0gX2luc3RhbmNlLm5hbWUgfHwgJyc7XG4gICAgX2luc3RhbmNlLmpvaW5Ub2tlbiA9IF9pbnN0YW5jZS5qb2luVG9rZW4gfHwgJyc7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBTaGFyZVVpZCxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UudWlkID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS51aWQsXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLnBob25lTnVtYmVyID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBfaW5zdGFuY2UubmFtZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgX2luc3RhbmNlLmpvaW5Ub2tlbiA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgU2hhcmVVaWQucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoX2luc3RhbmNlOiBTaGFyZVVpZCwgX3dyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKF9pbnN0YW5jZS51aWQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAxLFxuICAgICAgICBfaW5zdGFuY2UudWlkIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UucGhvbmVOdW1iZXIpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMiwgX2luc3RhbmNlLnBob25lTnVtYmVyKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5uYW1lKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDMsIF9pbnN0YW5jZS5uYW1lKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5qb2luVG9rZW4pIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoNCwgX2luc3RhbmNlLmpvaW5Ub2tlbik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdWlkPzogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQ7XG4gIHByaXZhdGUgX3Bob25lTnVtYmVyPzogc3RyaW5nO1xuICBwcml2YXRlIF9uYW1lPzogc3RyaW5nO1xuICBwcml2YXRlIF9qb2luVG9rZW4/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBTaGFyZVVpZCB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxTaGFyZVVpZC5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy51aWQgPSBfdmFsdWUudWlkID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkKF92YWx1ZS51aWQpIDogdW5kZWZpbmVkO1xuICAgIHRoaXMucGhvbmVOdW1iZXIgPSBfdmFsdWUucGhvbmVOdW1iZXI7XG4gICAgdGhpcy5uYW1lID0gX3ZhbHVlLm5hbWU7XG4gICAgdGhpcy5qb2luVG9rZW4gPSBfdmFsdWUuam9pblRva2VuO1xuICAgIFNoYXJlVWlkLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgdWlkKCk6IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdWlkO1xuICB9XG4gIHNldCB1aWQodmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdWlkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHBob25lTnVtYmVyKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3Bob25lTnVtYmVyO1xuICB9XG4gIHNldCBwaG9uZU51bWJlcih2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcGhvbmVOdW1iZXIgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbmFtZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG4gIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGpvaW5Ub2tlbigpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9qb2luVG9rZW47XG4gIH1cbiAgc2V0IGpvaW5Ub2tlbih2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fam9pblRva2VuID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgU2hhcmVVaWQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogU2hhcmVVaWQuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICB1aWQ6IHRoaXMudWlkID8gdGhpcy51aWQudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIHBob25lTnVtYmVyOiB0aGlzLnBob25lTnVtYmVyLFxuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgam9pblRva2VuOiB0aGlzLmpvaW5Ub2tlblxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IFNoYXJlVWlkLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgdWlkOiB0aGlzLnVpZCA/IHRoaXMudWlkLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIHBob25lTnVtYmVyOiB0aGlzLnBob25lTnVtYmVyLFxuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgam9pblRva2VuOiB0aGlzLmpvaW5Ub2tlblxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgU2hhcmVVaWQge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIFNoYXJlVWlkXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICB1aWQ/OiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5Bc09iamVjdDtcbiAgICBwaG9uZU51bWJlcj86IHN0cmluZztcbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIGpvaW5Ub2tlbj86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBTaGFyZVVpZFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgdWlkPzogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHBob25lTnVtYmVyPzogc3RyaW5nO1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgam9pblRva2VuPzogc3RyaW5nO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3IgcHJvdG8ucHViLnYxLm1vZGVscy5NZXNzYWdlRGVsaXZlcnlBY2tcbiAqL1xuZXhwb3J0IGNsYXNzIE1lc3NhZ2VEZWxpdmVyeUFjayBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ3Byb3RvLnB1Yi52MS5tb2RlbHMuTWVzc2FnZURlbGl2ZXJ5QWNrJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgTWVzc2FnZURlbGl2ZXJ5QWNrKCk7XG4gICAgTWVzc2FnZURlbGl2ZXJ5QWNrLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogTWVzc2FnZURlbGl2ZXJ5QWNrKSB7XG4gICAgX2luc3RhbmNlLnBhY2tldElkID0gX2luc3RhbmNlLnBhY2tldElkIHx8ICcnO1xuICAgIF9pbnN0YW5jZS5pZCA9IF9pbnN0YW5jZS5pZCB8fCAnMCc7XG4gICAgX2luc3RhbmNlLnRpbWUgPSBfaW5zdGFuY2UudGltZSB8fCAnMCc7XG4gICAgX2luc3RhbmNlLmZyb20gPSBfaW5zdGFuY2UuZnJvbSB8fCB1bmRlZmluZWQ7XG4gICAgX2luc3RhbmNlLnRvID0gX2luc3RhbmNlLnRvIHx8IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IE1lc3NhZ2VEZWxpdmVyeUFjayxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UucGFja2V0SWQgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5pZCA9IF9yZWFkZXIucmVhZEludDY0U3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBfaW5zdGFuY2UudGltZSA9IF9yZWFkZXIucmVhZEludDY0U3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBfaW5zdGFuY2UuZnJvbSA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuZnJvbSxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBfaW5zdGFuY2UudG8gPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLnRvLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIE1lc3NhZ2VEZWxpdmVyeUFjay5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IE1lc3NhZ2VEZWxpdmVyeUFjayxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5wYWNrZXRJZCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2UucGFja2V0SWQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmlkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlSW50NjRTdHJpbmcoMiwgX2luc3RhbmNlLmlkKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS50aW1lKSB7XG4gICAgICBfd3JpdGVyLndyaXRlSW50NjRTdHJpbmcoMywgX2luc3RhbmNlLnRpbWUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmZyb20pIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA0LFxuICAgICAgICBfaW5zdGFuY2UuZnJvbSBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnRvKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgNSxcbiAgICAgICAgX2luc3RhbmNlLnRvIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcGFja2V0SWQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2lkPzogc3RyaW5nO1xuICBwcml2YXRlIF90aW1lPzogc3RyaW5nO1xuICBwcml2YXRlIF9mcm9tPzogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQ7XG4gIHByaXZhdGUgX3RvPzogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQ7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBNZXNzYWdlRGVsaXZlcnlBY2sgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8TWVzc2FnZURlbGl2ZXJ5QWNrLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnBhY2tldElkID0gX3ZhbHVlLnBhY2tldElkO1xuICAgIHRoaXMuaWQgPSBfdmFsdWUuaWQ7XG4gICAgdGhpcy50aW1lID0gX3ZhbHVlLnRpbWU7XG4gICAgdGhpcy5mcm9tID0gX3ZhbHVlLmZyb21cbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkKF92YWx1ZS5mcm9tKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy50byA9IF92YWx1ZS50byA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZChfdmFsdWUudG8pIDogdW5kZWZpbmVkO1xuICAgIE1lc3NhZ2VEZWxpdmVyeUFjay5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHBhY2tldElkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3BhY2tldElkO1xuICB9XG4gIHNldCBwYWNrZXRJZCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcGFja2V0SWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgaWQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5faWQ7XG4gIH1cbiAgc2V0IGlkKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9pZCA9IHZhbHVlO1xuICB9XG4gIGdldCB0aW1lKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3RpbWU7XG4gIH1cbiAgc2V0IHRpbWUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3RpbWUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZnJvbSgpOiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2Zyb207XG4gIH1cbiAgc2V0IGZyb20odmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZnJvbSA9IHZhbHVlO1xuICB9XG4gIGdldCB0bygpOiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3RvO1xuICB9XG4gIHNldCB0byh2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl90byA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIE1lc3NhZ2VEZWxpdmVyeUFjay5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBNZXNzYWdlRGVsaXZlcnlBY2suQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBwYWNrZXRJZDogdGhpcy5wYWNrZXRJZCxcbiAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgdGltZTogdGhpcy50aW1lLFxuICAgICAgZnJvbTogdGhpcy5mcm9tID8gdGhpcy5mcm9tLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICB0bzogdGhpcy50byA/IHRoaXMudG8udG9PYmplY3QoKSA6IHVuZGVmaW5lZFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IE1lc3NhZ2VEZWxpdmVyeUFjay5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhY2tldElkOiB0aGlzLnBhY2tldElkLFxuICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICB0aW1lOiB0aGlzLnRpbWUsXG4gICAgICBmcm9tOiB0aGlzLmZyb20gPyB0aGlzLmZyb20udG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgdG86IHRoaXMudG8gPyB0aGlzLnRvLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbFxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgTWVzc2FnZURlbGl2ZXJ5QWNrIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBNZXNzYWdlRGVsaXZlcnlBY2tcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIHBhY2tldElkPzogc3RyaW5nO1xuICAgIGlkPzogc3RyaW5nO1xuICAgIHRpbWU/OiBzdHJpbmc7XG4gICAgZnJvbT86IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLkFzT2JqZWN0O1xuICAgIHRvPzogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuQXNPYmplY3Q7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgTWVzc2FnZURlbGl2ZXJ5QWNrXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBwYWNrZXRJZD86IHN0cmluZztcbiAgICBpZD86IHN0cmluZztcbiAgICB0aW1lPzogc3RyaW5nO1xuICAgIGZyb20/OiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgdG8/OiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBwcm90by5wdWIudjEubW9kZWxzLk1lc3NhZ2VCcmllZlxuICovXG5leHBvcnQgY2xhc3MgTWVzc2FnZUJyaWVmIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAncHJvdG8ucHViLnYxLm1vZGVscy5NZXNzYWdlQnJpZWYnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBNZXNzYWdlQnJpZWYoKTtcbiAgICBNZXNzYWdlQnJpZWYuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBNZXNzYWdlQnJpZWYpIHtcbiAgICBfaW5zdGFuY2UucGFja2V0SWQgPSBfaW5zdGFuY2UucGFja2V0SWQgfHwgJyc7XG4gICAgX2luc3RhbmNlLmlkID0gX2luc3RhbmNlLmlkIHx8ICcwJztcbiAgICBfaW5zdGFuY2UudGltZSA9IF9pbnN0YW5jZS50aW1lIHx8ICcwJztcbiAgICBfaW5zdGFuY2UuZnJvbSA9IF9pbnN0YW5jZS5mcm9tIHx8IHVuZGVmaW5lZDtcbiAgICBfaW5zdGFuY2UudG8gPSBfaW5zdGFuY2UudG8gfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5tZXNzYWdlVHlwZSA9IF9pbnN0YW5jZS5tZXNzYWdlVHlwZSB8fCAwO1xuICAgIF9pbnN0YW5jZS50ZXh0ID0gX2luc3RhbmNlLnRleHQgfHwgJyc7XG4gICAgX2luc3RhbmNlLnRodW1ibmFpbFJlZmVyZW5jZSA9IF9pbnN0YW5jZS50aHVtYm5haWxSZWZlcmVuY2UgfHwgdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogTWVzc2FnZUJyaWVmLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5wYWNrZXRJZCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLmlkID0gX3JlYWRlci5yZWFkSW50NjRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIF9pbnN0YW5jZS50aW1lID0gX3JlYWRlci5yZWFkSW50NjRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIF9pbnN0YW5jZS5mcm9tID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5mcm9tLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIF9pbnN0YW5jZS50byA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UudG8sXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgX2luc3RhbmNlLm1lc3NhZ2VUeXBlID0gX3JlYWRlci5yZWFkRW51bSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgX2luc3RhbmNlLnRleHQgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA4OlxuICAgICAgICAgIF9pbnN0YW5jZS50aHVtYm5haWxSZWZlcmVuY2UgPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMS5GaWxlKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS50aHVtYm5haWxSZWZlcmVuY2UsXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAxLkZpbGUuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIE1lc3NhZ2VCcmllZi5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IE1lc3NhZ2VCcmllZixcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5wYWNrZXRJZCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2UucGFja2V0SWQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmlkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlSW50NjRTdHJpbmcoMiwgX2luc3RhbmNlLmlkKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS50aW1lKSB7XG4gICAgICBfd3JpdGVyLndyaXRlSW50NjRTdHJpbmcoMywgX2luc3RhbmNlLnRpbWUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmZyb20pIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA0LFxuICAgICAgICBfaW5zdGFuY2UuZnJvbSBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnRvKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgNSxcbiAgICAgICAgX2luc3RhbmNlLnRvIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UubWVzc2FnZVR5cGUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVFbnVtKDYsIF9pbnN0YW5jZS5tZXNzYWdlVHlwZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UudGV4dCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZyg3LCBfaW5zdGFuY2UudGV4dCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UudGh1bWJuYWlsUmVmZXJlbmNlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgOCxcbiAgICAgICAgX2luc3RhbmNlLnRodW1ibmFpbFJlZmVyZW5jZSBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDEuRmlsZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9wYWNrZXRJZD86IHN0cmluZztcbiAgcHJpdmF0ZSBfaWQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3RpbWU/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2Zyb20/OiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZDtcbiAgcHJpdmF0ZSBfdG8/OiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZDtcbiAgcHJpdmF0ZSBfbWVzc2FnZVR5cGU/OiBNZXNzYWdlQnJpZWYuTWVzc2FnZVR5cGVzO1xuICBwcml2YXRlIF90ZXh0Pzogc3RyaW5nO1xuICBwcml2YXRlIF90aHVtYm5haWxSZWZlcmVuY2U/OiBwcm90b1B1YlYxTW9kZWxzMDAxLkZpbGU7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBNZXNzYWdlQnJpZWYgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8TWVzc2FnZUJyaWVmLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnBhY2tldElkID0gX3ZhbHVlLnBhY2tldElkO1xuICAgIHRoaXMuaWQgPSBfdmFsdWUuaWQ7XG4gICAgdGhpcy50aW1lID0gX3ZhbHVlLnRpbWU7XG4gICAgdGhpcy5mcm9tID0gX3ZhbHVlLmZyb21cbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkKF92YWx1ZS5mcm9tKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy50byA9IF92YWx1ZS50byA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZChfdmFsdWUudG8pIDogdW5kZWZpbmVkO1xuICAgIHRoaXMubWVzc2FnZVR5cGUgPSBfdmFsdWUubWVzc2FnZVR5cGU7XG4gICAgdGhpcy50ZXh0ID0gX3ZhbHVlLnRleHQ7XG4gICAgdGhpcy50aHVtYm5haWxSZWZlcmVuY2UgPSBfdmFsdWUudGh1bWJuYWlsUmVmZXJlbmNlXG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAxLkZpbGUoX3ZhbHVlLnRodW1ibmFpbFJlZmVyZW5jZSlcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIE1lc3NhZ2VCcmllZi5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHBhY2tldElkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3BhY2tldElkO1xuICB9XG4gIHNldCBwYWNrZXRJZCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcGFja2V0SWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgaWQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5faWQ7XG4gIH1cbiAgc2V0IGlkKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9pZCA9IHZhbHVlO1xuICB9XG4gIGdldCB0aW1lKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3RpbWU7XG4gIH1cbiAgc2V0IHRpbWUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3RpbWUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZnJvbSgpOiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2Zyb207XG4gIH1cbiAgc2V0IGZyb20odmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZnJvbSA9IHZhbHVlO1xuICB9XG4gIGdldCB0bygpOiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3RvO1xuICB9XG4gIHNldCB0byh2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl90byA9IHZhbHVlO1xuICB9XG4gIGdldCBtZXNzYWdlVHlwZSgpOiBNZXNzYWdlQnJpZWYuTWVzc2FnZVR5cGVzIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbWVzc2FnZVR5cGU7XG4gIH1cbiAgc2V0IG1lc3NhZ2VUeXBlKHZhbHVlOiBNZXNzYWdlQnJpZWYuTWVzc2FnZVR5cGVzIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbWVzc2FnZVR5cGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdGV4dCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90ZXh0O1xuICB9XG4gIHNldCB0ZXh0KHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl90ZXh0ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHRodW1ibmFpbFJlZmVyZW5jZSgpOiBwcm90b1B1YlYxTW9kZWxzMDAxLkZpbGUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90aHVtYm5haWxSZWZlcmVuY2U7XG4gIH1cbiAgc2V0IHRodW1ibmFpbFJlZmVyZW5jZSh2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAwMS5GaWxlIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdGh1bWJuYWlsUmVmZXJlbmNlID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgTWVzc2FnZUJyaWVmLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IE1lc3NhZ2VCcmllZi5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhY2tldElkOiB0aGlzLnBhY2tldElkLFxuICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICB0aW1lOiB0aGlzLnRpbWUsXG4gICAgICBmcm9tOiB0aGlzLmZyb20gPyB0aGlzLmZyb20udG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIHRvOiB0aGlzLnRvID8gdGhpcy50by50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgbWVzc2FnZVR5cGU6IHRoaXMubWVzc2FnZVR5cGUsXG4gICAgICB0ZXh0OiB0aGlzLnRleHQsXG4gICAgICB0aHVtYm5haWxSZWZlcmVuY2U6IHRoaXMudGh1bWJuYWlsUmVmZXJlbmNlXG4gICAgICAgID8gdGhpcy50aHVtYm5haWxSZWZlcmVuY2UudG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IE1lc3NhZ2VCcmllZi5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhY2tldElkOiB0aGlzLnBhY2tldElkLFxuICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICB0aW1lOiB0aGlzLnRpbWUsXG4gICAgICBmcm9tOiB0aGlzLmZyb20gPyB0aGlzLmZyb20udG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgdG86IHRoaXMudG8gPyB0aGlzLnRvLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIG1lc3NhZ2VUeXBlOlxuICAgICAgICBNZXNzYWdlQnJpZWYuTWVzc2FnZVR5cGVzW1xuICAgICAgICAgIHRoaXMubWVzc2FnZVR5cGUgPT09IG51bGwgfHwgdGhpcy5tZXNzYWdlVHlwZSA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IDBcbiAgICAgICAgICAgIDogdGhpcy5tZXNzYWdlVHlwZVxuICAgICAgICBdLFxuICAgICAgdGV4dDogdGhpcy50ZXh0LFxuICAgICAgdGh1bWJuYWlsUmVmZXJlbmNlOiB0aGlzLnRodW1ibmFpbFJlZmVyZW5jZVxuICAgICAgICA/IHRoaXMudGh1bWJuYWlsUmVmZXJlbmNlLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbFxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgTWVzc2FnZUJyaWVmIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBNZXNzYWdlQnJpZWZcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIHBhY2tldElkPzogc3RyaW5nO1xuICAgIGlkPzogc3RyaW5nO1xuICAgIHRpbWU/OiBzdHJpbmc7XG4gICAgZnJvbT86IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLkFzT2JqZWN0O1xuICAgIHRvPzogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuQXNPYmplY3Q7XG4gICAgbWVzc2FnZVR5cGU/OiBNZXNzYWdlQnJpZWYuTWVzc2FnZVR5cGVzO1xuICAgIHRleHQ/OiBzdHJpbmc7XG4gICAgdGh1bWJuYWlsUmVmZXJlbmNlPzogcHJvdG9QdWJWMU1vZGVsczAwMS5GaWxlLkFzT2JqZWN0O1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIE1lc3NhZ2VCcmllZlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgcGFja2V0SWQ/OiBzdHJpbmc7XG4gICAgaWQ/OiBzdHJpbmc7XG4gICAgdGltZT86IHN0cmluZztcbiAgICBmcm9tPzogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHRvPzogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIG1lc3NhZ2VUeXBlPzogc3RyaW5nO1xuICAgIHRleHQ/OiBzdHJpbmc7XG4gICAgdGh1bWJuYWlsUmVmZXJlbmNlPzogcHJvdG9QdWJWMU1vZGVsczAwMS5GaWxlLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgfVxuICBleHBvcnQgZW51bSBNZXNzYWdlVHlwZXMge1xuICAgIE5PVF9TRVQgPSAwLFxuICAgIFRFWFQgPSAxLFxuICAgIEZJTEUgPSAyLFxuICAgIFNUSUNLRVIgPSAzLFxuICAgIExPQ0FUSU9OID0gNCxcbiAgICBMSVZFX0xPQ0FUSU9OID0gNSxcbiAgICBQT0xMID0gNixcbiAgICBUUkFOU0FDVElPTiA9IDcsXG4gICAgRk9STSA9IDgsXG4gICAgQlVUVE9OUyA9IDksXG4gICAgU0hBUkVfVUlEID0gMTAsXG4gICAgRk9STV9SRVNVTFQgPSAxMSxcbiAgICBDQUxMX0VORCA9IDEyLFxuICAgIENBTExfQlVTWSA9IDEzLFxuICAgIENBTExfREVDTElORUQgPSAxNCxcbiAgICBUQUJMRSA9IDE1LFxuICAgIFBFX0FTX05FV19DT05UQUNUX0FEREVEID0gMTYsXG4gICAgUEVfQlNfQk9UX05PVF9SRVNQT05ESU5HID0gMTcsXG4gICAgUEVfTVNfS0lDS19VU0VSID0gMTgsXG4gICAgUEVfTVNfQUREX1VTRVIgPSAxOSxcbiAgICBQRV9NU19QSU5fTUVTU0FHRSA9IDIwLFxuICAgIFBFX01TX05BTUVfQ0hBTkdFRCA9IDIxLFxuICAgIFBFX01TX0FWQVRBUl9DSEFOR0VEID0gMjIsXG4gICAgUEVfTVNfTVVDX0NSRUFURUQgPSAyMyxcbiAgICBQRV9NU19MRUFWRV9VU0VSID0gMjQsXG4gICAgUEVfTVNfSk9JTkVEX1VTRVIgPSAyNSxcbiAgICBQRV9NU19ERUxFVEVEID0gMjYsXG4gICAgUERUX1BIT05FX05VTUJFUiA9IDI3LFxuICAgIFBEVF9VU0VSTkFNRSA9IDI4LFxuICAgIFBEVF9FTUFJTCA9IDI5LFxuICAgIFBEVF9OQU1FID0gMzAsXG4gICAgUEFZTUVOVF9JTkZPUk1BVElPTiA9IDMxLFxuICAgIFNFQVJDSF9BQkxFID0gMzJcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIHByb3RvLnB1Yi52MS5tb2RlbHMuTWVzc2FnZVxuICovXG5leHBvcnQgY2xhc3MgTWVzc2FnZSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ3Byb3RvLnB1Yi52MS5tb2RlbHMuTWVzc2FnZSc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IE1lc3NhZ2UoKTtcbiAgICBNZXNzYWdlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogTWVzc2FnZSkge1xuICAgIF9pbnN0YW5jZS5wYWNrZXRJZCA9IF9pbnN0YW5jZS5wYWNrZXRJZCB8fCAnJztcbiAgICBfaW5zdGFuY2UuaWQgPSBfaW5zdGFuY2UuaWQgfHwgJzAnO1xuICAgIF9pbnN0YW5jZS50aW1lID0gX2luc3RhbmNlLnRpbWUgfHwgJzAnO1xuICAgIF9pbnN0YW5jZS5mcm9tID0gX2luc3RhbmNlLmZyb20gfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS50byA9IF9pbnN0YW5jZS50byB8fCB1bmRlZmluZWQ7XG4gICAgX2luc3RhbmNlLnJlcGx5VG9JZCA9IF9pbnN0YW5jZS5yZXBseVRvSWQgfHwgJzAnO1xuICAgIF9pbnN0YW5jZS5yZXBsaWVkTWVzc2FnZUJyaWVmID0gX2luc3RhbmNlLnJlcGxpZWRNZXNzYWdlQnJpZWYgfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5mb3J3YXJkRnJvbSA9IF9pbnN0YW5jZS5mb3J3YXJkRnJvbSB8fCB1bmRlZmluZWQ7XG4gICAgX2luc3RhbmNlLmdlbmVyYXRlZEJ5ID0gX2luc3RhbmNlLmdlbmVyYXRlZEJ5IHx8IHVuZGVmaW5lZDtcbiAgICBfaW5zdGFuY2UuZWRpdGVkID0gX2luc3RhbmNlLmVkaXRlZCB8fCBmYWxzZTtcbiAgICBfaW5zdGFuY2UuZW5jcnlwdGVkID0gX2luc3RhbmNlLmVuY3J5cHRlZCB8fCBmYWxzZTtcbiAgICBfaW5zdGFuY2UudHRsID0gX2luc3RhbmNlLnR0bCB8fCAwO1xuICAgIF9pbnN0YW5jZS50aHJlYWQgPSBfaW5zdGFuY2UudGhyZWFkIHx8ICcwJztcbiAgICBfaW5zdGFuY2Uuc2hvdWxkQmVRdWlldCA9IF9pbnN0YW5jZS5zaG91bGRCZVF1aWV0IHx8IGZhbHNlO1xuICAgIF9pbnN0YW5jZS5tdWNNaW5pbXVtQWNjZXNzTGV2ZWwgPSBfaW5zdGFuY2UubXVjTWluaW11bUFjY2Vzc0xldmVsIHx8IDA7XG4gICAgX2luc3RhbmNlLnNwZWNpYWxUYXJnZXQgPSBfaW5zdGFuY2Uuc3BlY2lhbFRhcmdldCB8fCB1bmRlZmluZWQ7XG4gICAgX2luc3RhbmNlLm1lc3NhZ2VNYXJrdXAgPSBfaW5zdGFuY2UubWVzc2FnZU1hcmt1cCB8fCB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBNZXNzYWdlLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5wYWNrZXRJZCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLmlkID0gX3JlYWRlci5yZWFkSW50NjRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIF9pbnN0YW5jZS50aW1lID0gX3JlYWRlci5yZWFkSW50NjRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIF9pbnN0YW5jZS5mcm9tID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5mcm9tLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIF9pbnN0YW5jZS50byA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UudG8sXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgX2luc3RhbmNlLnJlcGx5VG9JZCA9IF9yZWFkZXIucmVhZEludDY0U3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzA6XG4gICAgICAgICAgX2luc3RhbmNlLnJlcGxpZWRNZXNzYWdlQnJpZWYgPSBuZXcgTWVzc2FnZUJyaWVmKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5yZXBsaWVkTWVzc2FnZUJyaWVmLFxuICAgICAgICAgICAgTWVzc2FnZUJyaWVmLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgODpcbiAgICAgICAgICBfaW5zdGFuY2UuZm9yd2FyZEZyb20gPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmZvcndhcmRGcm9tLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzMzpcbiAgICAgICAgICBfaW5zdGFuY2UuZ2VuZXJhdGVkQnkgPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmdlbmVyYXRlZEJ5LFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA5OlxuICAgICAgICAgIF9pbnN0YW5jZS5lZGl0ZWQgPSBfcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgX2luc3RhbmNlLmVuY3J5cHRlZCA9IF9yZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyMzpcbiAgICAgICAgICBfaW5zdGFuY2UudHRsID0gX3JlYWRlci5yZWFkSW50MzIoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyODpcbiAgICAgICAgICBfaW5zdGFuY2UudGhyZWFkID0gX3JlYWRlci5yZWFkSW50NjRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOTpcbiAgICAgICAgICBfaW5zdGFuY2Uuc2hvdWxkQmVRdWlldCA9IF9yZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyNDpcbiAgICAgICAgICBfaW5zdGFuY2UubXVjTWluaW11bUFjY2Vzc0xldmVsID0gX3JlYWRlci5yZWFkRW51bSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI1OlxuICAgICAgICAgIF9pbnN0YW5jZS5zcGVjaWFsVGFyZ2V0ID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5zcGVjaWFsVGFyZ2V0LFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzNDpcbiAgICAgICAgICBfaW5zdGFuY2UubWVzc2FnZU1hcmt1cCA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDE0Lk1lc3NhZ2VNYXJrdXAoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLm1lc3NhZ2VNYXJrdXAsXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDE0Lk1lc3NhZ2VNYXJrdXAuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICBfaW5zdGFuY2UudGV4dCA9IG5ldyBUZXh0KCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShfaW5zdGFuY2UudGV4dCwgVGV4dC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgIF9pbnN0YW5jZS5maWxlID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDEuRmlsZSgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuZmlsZSxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDEuRmlsZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgIF9pbnN0YW5jZS5zdGlja2VyID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDUuU3RpY2tlcigpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2Uuc3RpY2tlcixcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDUuU3RpY2tlci5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE0OlxuICAgICAgICAgIF9pbnN0YW5jZS5sb2NhdGlvbiA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDA2LkxvY2F0aW9uKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5sb2NhdGlvbixcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDYuTG9jYXRpb24uZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxNTpcbiAgICAgICAgICBfaW5zdGFuY2UubGl2ZUxvY2F0aW9uID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDYuTGl2ZUxvY2F0aW9uKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5saXZlTG9jYXRpb24sXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDA2LkxpdmVMb2NhdGlvbi5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE2OlxuICAgICAgICAgIF9pbnN0YW5jZS5wb2xsID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMTEuUG9sbCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UucG9sbCxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMTEuUG9sbC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE3OlxuICAgICAgICAgIF9pbnN0YW5jZS50cmFuc2FjdGlvbiA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDA3LlRyYW5zYWN0aW9uKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS50cmFuc2FjdGlvbixcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDcuVHJhbnNhY3Rpb24uZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxODpcbiAgICAgICAgICBfaW5zdGFuY2UuZm9ybSA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDEwLkZvcm0oKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmZvcm0sXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDEwLkZvcm0uZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOTpcbiAgICAgICAgICBfaW5zdGFuY2UucGVyc2lzdEV2ZW50ID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDguUGVyc2lzdGVudEV2ZW50KCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5wZXJzaXN0RXZlbnQsXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDA4LlBlcnNpc3RlbnRFdmVudC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDIwOlxuICAgICAgICAgIF9pbnN0YW5jZS5idXR0b25zID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMTAuQnV0dG9ucygpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuYnV0dG9ucyxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMTAuQnV0dG9ucy5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDIxOlxuICAgICAgICAgIF9pbnN0YW5jZS5zaGFyZVVpZCA9IG5ldyBTaGFyZVVpZCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2Uuc2hhcmVVaWQsXG4gICAgICAgICAgICBTaGFyZVVpZC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDIyOlxuICAgICAgICAgIF9pbnN0YW5jZS5mb3JtUmVzdWx0ID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMTAuRm9ybVJlc3VsdCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuZm9ybVJlc3VsdCxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMTAuRm9ybVJlc3VsdC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI2OlxuICAgICAgICAgIF9pbnN0YW5jZS5zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDA5LlNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0KCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDkuU2hhcmVQcml2YXRlRGF0YVJlcXVlc3RcbiAgICAgICAgICAgICAgLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjc6XG4gICAgICAgICAgX2luc3RhbmNlLnNoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDkuU2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLnNoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwOS5TaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZVxuICAgICAgICAgICAgICAuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzMTpcbiAgICAgICAgICBfaW5zdGFuY2UuY2FsbEV2ZW50ID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMTMuQ2FsbEV2ZW50KCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5jYWxsRXZlbnQsXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDEzLkNhbGxFdmVudC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM2OlxuICAgICAgICAgIF9pbnN0YW5jZS5jYWxsTG9nID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMTMuQ2FsbExvZygpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuY2FsbExvZyxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMTMuQ2FsbExvZy5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgIF9pbnN0YW5jZS50YWJsZSA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDEwLlRhYmxlKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS50YWJsZSxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMTAuVGFibGUuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzNTpcbiAgICAgICAgICBfaW5zdGFuY2UucGF5bWVudEluZm9ybWF0aW9uID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDcuUGF5bWVudEluZm9ybWF0aW9uKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5wYXltZW50SW5mb3JtYXRpb24sXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDA3LlBheW1lbnRJbmZvcm1hdGlvbi5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgTWVzc2FnZS5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihfaW5zdGFuY2U6IE1lc3NhZ2UsIF93cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChfaW5zdGFuY2UucGFja2V0SWQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLnBhY2tldElkKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5pZCkge1xuICAgICAgX3dyaXRlci53cml0ZUludDY0U3RyaW5nKDIsIF9pbnN0YW5jZS5pZCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UudGltZSkge1xuICAgICAgX3dyaXRlci53cml0ZUludDY0U3RyaW5nKDQsIF9pbnN0YW5jZS50aW1lKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5mcm9tKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgNSxcbiAgICAgICAgX2luc3RhbmNlLmZyb20gYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS50bykge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDYsXG4gICAgICAgIF9pbnN0YW5jZS50byBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnJlcGx5VG9JZCkge1xuICAgICAgX3dyaXRlci53cml0ZUludDY0U3RyaW5nKDcsIF9pbnN0YW5jZS5yZXBseVRvSWQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnJlcGxpZWRNZXNzYWdlQnJpZWYpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAzMCxcbiAgICAgICAgX2luc3RhbmNlLnJlcGxpZWRNZXNzYWdlQnJpZWYgYXMgYW55LFxuICAgICAgICBNZXNzYWdlQnJpZWYuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZm9yd2FyZEZyb20pIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA4LFxuICAgICAgICBfaW5zdGFuY2UuZm9yd2FyZEZyb20gYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5nZW5lcmF0ZWRCeSkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDMzLFxuICAgICAgICBfaW5zdGFuY2UuZ2VuZXJhdGVkQnkgYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5lZGl0ZWQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVCb29sKDksIF9pbnN0YW5jZS5lZGl0ZWQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmVuY3J5cHRlZCkge1xuICAgICAgX3dyaXRlci53cml0ZUJvb2woMTAsIF9pbnN0YW5jZS5lbmNyeXB0ZWQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnR0bCkge1xuICAgICAgX3dyaXRlci53cml0ZUludDMyKDIzLCBfaW5zdGFuY2UudHRsKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS50aHJlYWQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQ2NFN0cmluZygyOCwgX2luc3RhbmNlLnRocmVhZCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uuc2hvdWxkQmVRdWlldCkge1xuICAgICAgX3dyaXRlci53cml0ZUJvb2woMjksIF9pbnN0YW5jZS5zaG91bGRCZVF1aWV0KTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5tdWNNaW5pbXVtQWNjZXNzTGV2ZWwpIHtcbiAgICAgIF93cml0ZXIud3JpdGVFbnVtKDI0LCBfaW5zdGFuY2UubXVjTWluaW11bUFjY2Vzc0xldmVsKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5zcGVjaWFsVGFyZ2V0KSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMjUsXG4gICAgICAgIF9pbnN0YW5jZS5zcGVjaWFsVGFyZ2V0IGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UubWVzc2FnZU1hcmt1cCkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDM0LFxuICAgICAgICBfaW5zdGFuY2UubWVzc2FnZU1hcmt1cCBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMTQuTWVzc2FnZU1hcmt1cC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS50ZXh0KSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMTEsXG4gICAgICAgIF9pbnN0YW5jZS50ZXh0IGFzIGFueSxcbiAgICAgICAgVGV4dC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5maWxlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMTIsXG4gICAgICAgIF9pbnN0YW5jZS5maWxlIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMS5GaWxlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnN0aWNrZXIpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAxMyxcbiAgICAgICAgX2luc3RhbmNlLnN0aWNrZXIgYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDA1LlN0aWNrZXIuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UubG9jYXRpb24pIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAxNCxcbiAgICAgICAgX2luc3RhbmNlLmxvY2F0aW9uIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwNi5Mb2NhdGlvbi5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5saXZlTG9jYXRpb24pIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAxNSxcbiAgICAgICAgX2luc3RhbmNlLmxpdmVMb2NhdGlvbiBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDYuTGl2ZUxvY2F0aW9uLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnBvbGwpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAxNixcbiAgICAgICAgX2luc3RhbmNlLnBvbGwgYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDExLlBvbGwuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UudHJhbnNhY3Rpb24pIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAxNyxcbiAgICAgICAgX2luc3RhbmNlLnRyYW5zYWN0aW9uIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwNy5UcmFuc2FjdGlvbi5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5mb3JtKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMTgsXG4gICAgICAgIF9pbnN0YW5jZS5mb3JtIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxMC5Gb3JtLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnBlcnNpc3RFdmVudCkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDE5LFxuICAgICAgICBfaW5zdGFuY2UucGVyc2lzdEV2ZW50IGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwOC5QZXJzaXN0ZW50RXZlbnQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuYnV0dG9ucykge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDIwLFxuICAgICAgICBfaW5zdGFuY2UuYnV0dG9ucyBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMTAuQnV0dG9ucy5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5zaGFyZVVpZCkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDIxLFxuICAgICAgICBfaW5zdGFuY2Uuc2hhcmVVaWQgYXMgYW55LFxuICAgICAgICBTaGFyZVVpZC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5mb3JtUmVzdWx0KSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMjIsXG4gICAgICAgIF9pbnN0YW5jZS5mb3JtUmVzdWx0IGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxMC5Gb3JtUmVzdWx0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0KSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMjYsXG4gICAgICAgIF9pbnN0YW5jZS5zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDkuU2hhcmVQcml2YXRlRGF0YVJlcXVlc3Quc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uuc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAyNyxcbiAgICAgICAgX2luc3RhbmNlLnNoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwOS5TaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5jYWxsRXZlbnQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAzMSxcbiAgICAgICAgX2luc3RhbmNlLmNhbGxFdmVudCBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMTMuQ2FsbEV2ZW50LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmNhbGxMb2cpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAzNixcbiAgICAgICAgX2luc3RhbmNlLmNhbGxMb2cgYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDEzLkNhbGxMb2cuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UudGFibGUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAzMixcbiAgICAgICAgX2luc3RhbmNlLnRhYmxlIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxMC5UYWJsZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5wYXltZW50SW5mb3JtYXRpb24pIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAzNSxcbiAgICAgICAgX2luc3RhbmNlLnBheW1lbnRJbmZvcm1hdGlvbiBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDcuUGF5bWVudEluZm9ybWF0aW9uLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3BhY2tldElkPzogc3RyaW5nO1xuICBwcml2YXRlIF9pZD86IHN0cmluZztcbiAgcHJpdmF0ZSBfdGltZT86IHN0cmluZztcbiAgcHJpdmF0ZSBfZnJvbT86IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkO1xuICBwcml2YXRlIF90bz86IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkO1xuICBwcml2YXRlIF9yZXBseVRvSWQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3JlcGxpZWRNZXNzYWdlQnJpZWY/OiBNZXNzYWdlQnJpZWY7XG4gIHByaXZhdGUgX2ZvcndhcmRGcm9tPzogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQ7XG4gIHByaXZhdGUgX2dlbmVyYXRlZEJ5PzogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQ7XG4gIHByaXZhdGUgX2VkaXRlZD86IGJvb2xlYW47XG4gIHByaXZhdGUgX2VuY3J5cHRlZD86IGJvb2xlYW47XG4gIHByaXZhdGUgX3R0bD86IG51bWJlcjtcbiAgcHJpdmF0ZSBfdGhyZWFkPzogc3RyaW5nO1xuICBwcml2YXRlIF9zaG91bGRCZVF1aWV0PzogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfbXVjTWluaW11bUFjY2Vzc0xldmVsPzogcHJvdG9QdWJWMU1vZGVsczAxMi5Sb2xlO1xuICBwcml2YXRlIF9zcGVjaWFsVGFyZ2V0PzogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQ7XG4gIHByaXZhdGUgX21lc3NhZ2VNYXJrdXA/OiBwcm90b1B1YlYxTW9kZWxzMDE0Lk1lc3NhZ2VNYXJrdXA7XG4gIHByaXZhdGUgX3RleHQ/OiBUZXh0O1xuICBwcml2YXRlIF9maWxlPzogcHJvdG9QdWJWMU1vZGVsczAwMS5GaWxlO1xuICBwcml2YXRlIF9zdGlja2VyPzogcHJvdG9QdWJWMU1vZGVsczAwNS5TdGlja2VyO1xuICBwcml2YXRlIF9sb2NhdGlvbj86IHByb3RvUHViVjFNb2RlbHMwMDYuTG9jYXRpb247XG4gIHByaXZhdGUgX2xpdmVMb2NhdGlvbj86IHByb3RvUHViVjFNb2RlbHMwMDYuTGl2ZUxvY2F0aW9uO1xuICBwcml2YXRlIF9wb2xsPzogcHJvdG9QdWJWMU1vZGVsczAxMS5Qb2xsO1xuICBwcml2YXRlIF90cmFuc2FjdGlvbj86IHByb3RvUHViVjFNb2RlbHMwMDcuVHJhbnNhY3Rpb247XG4gIHByaXZhdGUgX2Zvcm0/OiBwcm90b1B1YlYxTW9kZWxzMDEwLkZvcm07XG4gIHByaXZhdGUgX3BlcnNpc3RFdmVudD86IHByb3RvUHViVjFNb2RlbHMwMDguUGVyc2lzdGVudEV2ZW50O1xuICBwcml2YXRlIF9idXR0b25zPzogcHJvdG9QdWJWMU1vZGVsczAxMC5CdXR0b25zO1xuICBwcml2YXRlIF9zaGFyZVVpZD86IFNoYXJlVWlkO1xuICBwcml2YXRlIF9mb3JtUmVzdWx0PzogcHJvdG9QdWJWMU1vZGVsczAxMC5Gb3JtUmVzdWx0O1xuICBwcml2YXRlIF9zaGFyZVByaXZhdGVEYXRhUmVxdWVzdD86IHByb3RvUHViVjFNb2RlbHMwMDkuU2hhcmVQcml2YXRlRGF0YVJlcXVlc3Q7XG4gIHByaXZhdGUgX3NoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlPzogcHJvdG9QdWJWMU1vZGVsczAwOS5TaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZTtcbiAgcHJpdmF0ZSBfY2FsbEV2ZW50PzogcHJvdG9QdWJWMU1vZGVsczAxMy5DYWxsRXZlbnQ7XG4gIHByaXZhdGUgX2NhbGxMb2c/OiBwcm90b1B1YlYxTW9kZWxzMDEzLkNhbGxMb2c7XG4gIHByaXZhdGUgX3RhYmxlPzogcHJvdG9QdWJWMU1vZGVsczAxMC5UYWJsZTtcbiAgcHJpdmF0ZSBfcGF5bWVudEluZm9ybWF0aW9uPzogcHJvdG9QdWJWMU1vZGVsczAwNy5QYXltZW50SW5mb3JtYXRpb247XG5cbiAgcHJpdmF0ZSBfdHlwZTogTWVzc2FnZS5UeXBlQ2FzZSA9IE1lc3NhZ2UuVHlwZUNhc2Uubm9uZTtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIE1lc3NhZ2UgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8TWVzc2FnZS5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5wYWNrZXRJZCA9IF92YWx1ZS5wYWNrZXRJZDtcbiAgICB0aGlzLmlkID0gX3ZhbHVlLmlkO1xuICAgIHRoaXMudGltZSA9IF92YWx1ZS50aW1lO1xuICAgIHRoaXMuZnJvbSA9IF92YWx1ZS5mcm9tXG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZChfdmFsdWUuZnJvbSlcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMudG8gPSBfdmFsdWUudG8gPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQoX3ZhbHVlLnRvKSA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnJlcGx5VG9JZCA9IF92YWx1ZS5yZXBseVRvSWQ7XG4gICAgdGhpcy5yZXBsaWVkTWVzc2FnZUJyaWVmID0gX3ZhbHVlLnJlcGxpZWRNZXNzYWdlQnJpZWZcbiAgICAgID8gbmV3IE1lc3NhZ2VCcmllZihfdmFsdWUucmVwbGllZE1lc3NhZ2VCcmllZilcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuZm9yd2FyZEZyb20gPSBfdmFsdWUuZm9yd2FyZEZyb21cbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkKF92YWx1ZS5mb3J3YXJkRnJvbSlcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuZ2VuZXJhdGVkQnkgPSBfdmFsdWUuZ2VuZXJhdGVkQnlcbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkKF92YWx1ZS5nZW5lcmF0ZWRCeSlcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuZWRpdGVkID0gX3ZhbHVlLmVkaXRlZDtcbiAgICB0aGlzLmVuY3J5cHRlZCA9IF92YWx1ZS5lbmNyeXB0ZWQ7XG4gICAgdGhpcy50dGwgPSBfdmFsdWUudHRsO1xuICAgIHRoaXMudGhyZWFkID0gX3ZhbHVlLnRocmVhZDtcbiAgICB0aGlzLnNob3VsZEJlUXVpZXQgPSBfdmFsdWUuc2hvdWxkQmVRdWlldDtcbiAgICB0aGlzLm11Y01pbmltdW1BY2Nlc3NMZXZlbCA9IF92YWx1ZS5tdWNNaW5pbXVtQWNjZXNzTGV2ZWw7XG4gICAgdGhpcy5zcGVjaWFsVGFyZ2V0ID0gX3ZhbHVlLnNwZWNpYWxUYXJnZXRcbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkKF92YWx1ZS5zcGVjaWFsVGFyZ2V0KVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5tZXNzYWdlTWFya3VwID0gX3ZhbHVlLm1lc3NhZ2VNYXJrdXBcbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMTQuTWVzc2FnZU1hcmt1cChfdmFsdWUubWVzc2FnZU1hcmt1cClcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMudGV4dCA9IF92YWx1ZS50ZXh0ID8gbmV3IFRleHQoX3ZhbHVlLnRleHQpIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuZmlsZSA9IF92YWx1ZS5maWxlXG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAxLkZpbGUoX3ZhbHVlLmZpbGUpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnN0aWNrZXIgPSBfdmFsdWUuc3RpY2tlclxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAwNS5TdGlja2VyKF92YWx1ZS5zdGlja2VyKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5sb2NhdGlvbiA9IF92YWx1ZS5sb2NhdGlvblxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAwNi5Mb2NhdGlvbihfdmFsdWUubG9jYXRpb24pXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmxpdmVMb2NhdGlvbiA9IF92YWx1ZS5saXZlTG9jYXRpb25cbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMDYuTGl2ZUxvY2F0aW9uKF92YWx1ZS5saXZlTG9jYXRpb24pXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnBvbGwgPSBfdmFsdWUucG9sbFxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAxMS5Qb2xsKF92YWx1ZS5wb2xsKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy50cmFuc2FjdGlvbiA9IF92YWx1ZS50cmFuc2FjdGlvblxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAwNy5UcmFuc2FjdGlvbihfdmFsdWUudHJhbnNhY3Rpb24pXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmZvcm0gPSBfdmFsdWUuZm9ybVxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAxMC5Gb3JtKF92YWx1ZS5mb3JtKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5wZXJzaXN0RXZlbnQgPSBfdmFsdWUucGVyc2lzdEV2ZW50XG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDA4LlBlcnNpc3RlbnRFdmVudChfdmFsdWUucGVyc2lzdEV2ZW50KVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5idXR0b25zID0gX3ZhbHVlLmJ1dHRvbnNcbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMTAuQnV0dG9ucyhfdmFsdWUuYnV0dG9ucylcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuc2hhcmVVaWQgPSBfdmFsdWUuc2hhcmVVaWQgPyBuZXcgU2hhcmVVaWQoX3ZhbHVlLnNoYXJlVWlkKSA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmZvcm1SZXN1bHQgPSBfdmFsdWUuZm9ybVJlc3VsdFxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAxMC5Gb3JtUmVzdWx0KF92YWx1ZS5mb3JtUmVzdWx0KVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCA9IF92YWx1ZS5zaGFyZVByaXZhdGVEYXRhUmVxdWVzdFxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAwOS5TaGFyZVByaXZhdGVEYXRhUmVxdWVzdChcbiAgICAgICAgICBfdmFsdWUuc2hhcmVQcml2YXRlRGF0YVJlcXVlc3RcbiAgICAgICAgKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5zaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZSA9IF92YWx1ZS5zaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZVxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAwOS5TaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZShcbiAgICAgICAgICBfdmFsdWUuc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2VcbiAgICAgICAgKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5jYWxsRXZlbnQgPSBfdmFsdWUuY2FsbEV2ZW50XG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDEzLkNhbGxFdmVudChfdmFsdWUuY2FsbEV2ZW50KVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5jYWxsTG9nID0gX3ZhbHVlLmNhbGxMb2dcbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMTMuQ2FsbExvZyhfdmFsdWUuY2FsbExvZylcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMudGFibGUgPSBfdmFsdWUudGFibGVcbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMTAuVGFibGUoX3ZhbHVlLnRhYmxlKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5wYXltZW50SW5mb3JtYXRpb24gPSBfdmFsdWUucGF5bWVudEluZm9ybWF0aW9uXG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDA3LlBheW1lbnRJbmZvcm1hdGlvbihfdmFsdWUucGF5bWVudEluZm9ybWF0aW9uKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgTWVzc2FnZS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHBhY2tldElkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3BhY2tldElkO1xuICB9XG4gIHNldCBwYWNrZXRJZCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcGFja2V0SWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgaWQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5faWQ7XG4gIH1cbiAgc2V0IGlkKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9pZCA9IHZhbHVlO1xuICB9XG4gIGdldCB0aW1lKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3RpbWU7XG4gIH1cbiAgc2V0IHRpbWUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3RpbWUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZnJvbSgpOiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2Zyb207XG4gIH1cbiAgc2V0IGZyb20odmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZnJvbSA9IHZhbHVlO1xuICB9XG4gIGdldCB0bygpOiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3RvO1xuICB9XG4gIHNldCB0byh2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl90byA9IHZhbHVlO1xuICB9XG4gIGdldCByZXBseVRvSWQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcmVwbHlUb0lkO1xuICB9XG4gIHNldCByZXBseVRvSWQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3JlcGx5VG9JZCA9IHZhbHVlO1xuICB9XG4gIGdldCByZXBsaWVkTWVzc2FnZUJyaWVmKCk6IE1lc3NhZ2VCcmllZiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcGxpZWRNZXNzYWdlQnJpZWY7XG4gIH1cbiAgc2V0IHJlcGxpZWRNZXNzYWdlQnJpZWYodmFsdWU6IE1lc3NhZ2VCcmllZiB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3JlcGxpZWRNZXNzYWdlQnJpZWYgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZm9yd2FyZEZyb20oKTogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9mb3J3YXJkRnJvbTtcbiAgfVxuICBzZXQgZm9yd2FyZEZyb20odmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZm9yd2FyZEZyb20gPSB2YWx1ZTtcbiAgfVxuICBnZXQgZ2VuZXJhdGVkQnkoKTogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9nZW5lcmF0ZWRCeTtcbiAgfVxuICBzZXQgZ2VuZXJhdGVkQnkodmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZ2VuZXJhdGVkQnkgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZWRpdGVkKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9lZGl0ZWQ7XG4gIH1cbiAgc2V0IGVkaXRlZCh2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2VkaXRlZCA9IHZhbHVlO1xuICB9XG4gIGdldCBlbmNyeXB0ZWQoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2VuY3J5cHRlZDtcbiAgfVxuICBzZXQgZW5jcnlwdGVkKHZhbHVlOiBib29sZWFuIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZW5jcnlwdGVkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHR0bCgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90dGw7XG4gIH1cbiAgc2V0IHR0bCh2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdHRsID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHRocmVhZCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90aHJlYWQ7XG4gIH1cbiAgc2V0IHRocmVhZCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdGhyZWFkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHNob3VsZEJlUXVpZXQoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3VsZEJlUXVpZXQ7XG4gIH1cbiAgc2V0IHNob3VsZEJlUXVpZXQodmFsdWU6IGJvb2xlYW4gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zaG91bGRCZVF1aWV0ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG11Y01pbmltdW1BY2Nlc3NMZXZlbCgpOiBwcm90b1B1YlYxTW9kZWxzMDEyLlJvbGUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9tdWNNaW5pbXVtQWNjZXNzTGV2ZWw7XG4gIH1cbiAgc2V0IG11Y01pbmltdW1BY2Nlc3NMZXZlbCh2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAxMi5Sb2xlIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbXVjTWluaW11bUFjY2Vzc0xldmVsID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHNwZWNpYWxUYXJnZXQoKTogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zcGVjaWFsVGFyZ2V0O1xuICB9XG4gIHNldCBzcGVjaWFsVGFyZ2V0KHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZCB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3NwZWNpYWxUYXJnZXQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbWVzc2FnZU1hcmt1cCgpOiBwcm90b1B1YlYxTW9kZWxzMDE0Lk1lc3NhZ2VNYXJrdXAgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9tZXNzYWdlTWFya3VwO1xuICB9XG4gIHNldCBtZXNzYWdlTWFya3VwKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDE0Lk1lc3NhZ2VNYXJrdXAgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9tZXNzYWdlTWFya3VwID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHRleHQoKTogVGV4dCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3RleHQ7XG4gIH1cbiAgc2V0IHRleHQodmFsdWU6IFRleHQgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fZmlsZSA9IHRoaXMuX3N0aWNrZXIgPSB0aGlzLl9sb2NhdGlvbiA9IHRoaXMuX2xpdmVMb2NhdGlvbiA9IHRoaXMuX3BvbGwgPSB0aGlzLl90cmFuc2FjdGlvbiA9IHRoaXMuX2Zvcm0gPSB0aGlzLl9wZXJzaXN0RXZlbnQgPSB0aGlzLl9idXR0b25zID0gdGhpcy5fc2hhcmVVaWQgPSB0aGlzLl9mb3JtUmVzdWx0ID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZSA9IHRoaXMuX2NhbGxFdmVudCA9IHRoaXMuX2NhbGxMb2cgPSB0aGlzLl90YWJsZSA9IHRoaXMuX3BheW1lbnRJbmZvcm1hdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBNZXNzYWdlLlR5cGVDYXNlLnRleHQ7XG4gICAgfVxuICAgIHRoaXMuX3RleHQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZmlsZSgpOiBwcm90b1B1YlYxTW9kZWxzMDAxLkZpbGUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9maWxlO1xuICB9XG4gIHNldCBmaWxlKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDAxLkZpbGUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fdGV4dCA9IHRoaXMuX3N0aWNrZXIgPSB0aGlzLl9sb2NhdGlvbiA9IHRoaXMuX2xpdmVMb2NhdGlvbiA9IHRoaXMuX3BvbGwgPSB0aGlzLl90cmFuc2FjdGlvbiA9IHRoaXMuX2Zvcm0gPSB0aGlzLl9wZXJzaXN0RXZlbnQgPSB0aGlzLl9idXR0b25zID0gdGhpcy5fc2hhcmVVaWQgPSB0aGlzLl9mb3JtUmVzdWx0ID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZSA9IHRoaXMuX2NhbGxFdmVudCA9IHRoaXMuX2NhbGxMb2cgPSB0aGlzLl90YWJsZSA9IHRoaXMuX3BheW1lbnRJbmZvcm1hdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBNZXNzYWdlLlR5cGVDYXNlLmZpbGU7XG4gICAgfVxuICAgIHRoaXMuX2ZpbGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc3RpY2tlcigpOiBwcm90b1B1YlYxTW9kZWxzMDA1LlN0aWNrZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zdGlja2VyO1xuICB9XG4gIHNldCBzdGlja2VyKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDA1LlN0aWNrZXIgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fdGV4dCA9IHRoaXMuX2ZpbGUgPSB0aGlzLl9sb2NhdGlvbiA9IHRoaXMuX2xpdmVMb2NhdGlvbiA9IHRoaXMuX3BvbGwgPSB0aGlzLl90cmFuc2FjdGlvbiA9IHRoaXMuX2Zvcm0gPSB0aGlzLl9wZXJzaXN0RXZlbnQgPSB0aGlzLl9idXR0b25zID0gdGhpcy5fc2hhcmVVaWQgPSB0aGlzLl9mb3JtUmVzdWx0ID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZSA9IHRoaXMuX2NhbGxFdmVudCA9IHRoaXMuX2NhbGxMb2cgPSB0aGlzLl90YWJsZSA9IHRoaXMuX3BheW1lbnRJbmZvcm1hdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBNZXNzYWdlLlR5cGVDYXNlLnN0aWNrZXI7XG4gICAgfVxuICAgIHRoaXMuX3N0aWNrZXIgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbG9jYXRpb24oKTogcHJvdG9QdWJWMU1vZGVsczAwNi5Mb2NhdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2xvY2F0aW9uO1xuICB9XG4gIHNldCBsb2NhdGlvbih2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAwNi5Mb2NhdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl90ZXh0ID0gdGhpcy5fZmlsZSA9IHRoaXMuX3N0aWNrZXIgPSB0aGlzLl9saXZlTG9jYXRpb24gPSB0aGlzLl9wb2xsID0gdGhpcy5fdHJhbnNhY3Rpb24gPSB0aGlzLl9mb3JtID0gdGhpcy5fcGVyc2lzdEV2ZW50ID0gdGhpcy5fYnV0dG9ucyA9IHRoaXMuX3NoYXJlVWlkID0gdGhpcy5fZm9ybVJlc3VsdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0ID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UgPSB0aGlzLl9jYWxsRXZlbnQgPSB0aGlzLl9jYWxsTG9nID0gdGhpcy5fdGFibGUgPSB0aGlzLl9wYXltZW50SW5mb3JtYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gTWVzc2FnZS5UeXBlQ2FzZS5sb2NhdGlvbjtcbiAgICB9XG4gICAgdGhpcy5fbG9jYXRpb24gPSB2YWx1ZTtcbiAgfVxuICBnZXQgbGl2ZUxvY2F0aW9uKCk6IHByb3RvUHViVjFNb2RlbHMwMDYuTGl2ZUxvY2F0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbGl2ZUxvY2F0aW9uO1xuICB9XG4gIHNldCBsaXZlTG9jYXRpb24odmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMDYuTGl2ZUxvY2F0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3RleHQgPSB0aGlzLl9maWxlID0gdGhpcy5fc3RpY2tlciA9IHRoaXMuX2xvY2F0aW9uID0gdGhpcy5fcG9sbCA9IHRoaXMuX3RyYW5zYWN0aW9uID0gdGhpcy5fZm9ybSA9IHRoaXMuX3BlcnNpc3RFdmVudCA9IHRoaXMuX2J1dHRvbnMgPSB0aGlzLl9zaGFyZVVpZCA9IHRoaXMuX2Zvcm1SZXN1bHQgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlID0gdGhpcy5fY2FsbEV2ZW50ID0gdGhpcy5fY2FsbExvZyA9IHRoaXMuX3RhYmxlID0gdGhpcy5fcGF5bWVudEluZm9ybWF0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IE1lc3NhZ2UuVHlwZUNhc2UubGl2ZUxvY2F0aW9uO1xuICAgIH1cbiAgICB0aGlzLl9saXZlTG9jYXRpb24gPSB2YWx1ZTtcbiAgfVxuICBnZXQgcG9sbCgpOiBwcm90b1B1YlYxTW9kZWxzMDExLlBvbGwgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wb2xsO1xuICB9XG4gIHNldCBwb2xsKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDExLlBvbGwgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fdGV4dCA9IHRoaXMuX2ZpbGUgPSB0aGlzLl9zdGlja2VyID0gdGhpcy5fbG9jYXRpb24gPSB0aGlzLl9saXZlTG9jYXRpb24gPSB0aGlzLl90cmFuc2FjdGlvbiA9IHRoaXMuX2Zvcm0gPSB0aGlzLl9wZXJzaXN0RXZlbnQgPSB0aGlzLl9idXR0b25zID0gdGhpcy5fc2hhcmVVaWQgPSB0aGlzLl9mb3JtUmVzdWx0ID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZSA9IHRoaXMuX2NhbGxFdmVudCA9IHRoaXMuX2NhbGxMb2cgPSB0aGlzLl90YWJsZSA9IHRoaXMuX3BheW1lbnRJbmZvcm1hdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBNZXNzYWdlLlR5cGVDYXNlLnBvbGw7XG4gICAgfVxuICAgIHRoaXMuX3BvbGwgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdHJhbnNhY3Rpb24oKTogcHJvdG9QdWJWMU1vZGVsczAwNy5UcmFuc2FjdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3RyYW5zYWN0aW9uO1xuICB9XG4gIHNldCB0cmFuc2FjdGlvbih2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAwNy5UcmFuc2FjdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl90ZXh0ID0gdGhpcy5fZmlsZSA9IHRoaXMuX3N0aWNrZXIgPSB0aGlzLl9sb2NhdGlvbiA9IHRoaXMuX2xpdmVMb2NhdGlvbiA9IHRoaXMuX3BvbGwgPSB0aGlzLl9mb3JtID0gdGhpcy5fcGVyc2lzdEV2ZW50ID0gdGhpcy5fYnV0dG9ucyA9IHRoaXMuX3NoYXJlVWlkID0gdGhpcy5fZm9ybVJlc3VsdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0ID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UgPSB0aGlzLl9jYWxsRXZlbnQgPSB0aGlzLl9jYWxsTG9nID0gdGhpcy5fdGFibGUgPSB0aGlzLl9wYXltZW50SW5mb3JtYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gTWVzc2FnZS5UeXBlQ2FzZS50cmFuc2FjdGlvbjtcbiAgICB9XG4gICAgdGhpcy5fdHJhbnNhY3Rpb24gPSB2YWx1ZTtcbiAgfVxuICBnZXQgZm9ybSgpOiBwcm90b1B1YlYxTW9kZWxzMDEwLkZvcm0gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9mb3JtO1xuICB9XG4gIHNldCBmb3JtKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDEwLkZvcm0gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fdGV4dCA9IHRoaXMuX2ZpbGUgPSB0aGlzLl9zdGlja2VyID0gdGhpcy5fbG9jYXRpb24gPSB0aGlzLl9saXZlTG9jYXRpb24gPSB0aGlzLl9wb2xsID0gdGhpcy5fdHJhbnNhY3Rpb24gPSB0aGlzLl9wZXJzaXN0RXZlbnQgPSB0aGlzLl9idXR0b25zID0gdGhpcy5fc2hhcmVVaWQgPSB0aGlzLl9mb3JtUmVzdWx0ID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZSA9IHRoaXMuX2NhbGxFdmVudCA9IHRoaXMuX2NhbGxMb2cgPSB0aGlzLl90YWJsZSA9IHRoaXMuX3BheW1lbnRJbmZvcm1hdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBNZXNzYWdlLlR5cGVDYXNlLmZvcm07XG4gICAgfVxuICAgIHRoaXMuX2Zvcm0gPSB2YWx1ZTtcbiAgfVxuICBnZXQgcGVyc2lzdEV2ZW50KCk6IHByb3RvUHViVjFNb2RlbHMwMDguUGVyc2lzdGVudEV2ZW50IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcGVyc2lzdEV2ZW50O1xuICB9XG4gIHNldCBwZXJzaXN0RXZlbnQodmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMDguUGVyc2lzdGVudEV2ZW50IHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3RleHQgPSB0aGlzLl9maWxlID0gdGhpcy5fc3RpY2tlciA9IHRoaXMuX2xvY2F0aW9uID0gdGhpcy5fbGl2ZUxvY2F0aW9uID0gdGhpcy5fcG9sbCA9IHRoaXMuX3RyYW5zYWN0aW9uID0gdGhpcy5fZm9ybSA9IHRoaXMuX2J1dHRvbnMgPSB0aGlzLl9zaGFyZVVpZCA9IHRoaXMuX2Zvcm1SZXN1bHQgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlID0gdGhpcy5fY2FsbEV2ZW50ID0gdGhpcy5fY2FsbExvZyA9IHRoaXMuX3RhYmxlID0gdGhpcy5fcGF5bWVudEluZm9ybWF0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IE1lc3NhZ2UuVHlwZUNhc2UucGVyc2lzdEV2ZW50O1xuICAgIH1cbiAgICB0aGlzLl9wZXJzaXN0RXZlbnQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgYnV0dG9ucygpOiBwcm90b1B1YlYxTW9kZWxzMDEwLkJ1dHRvbnMgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9idXR0b25zO1xuICB9XG4gIHNldCBidXR0b25zKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDEwLkJ1dHRvbnMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fdGV4dCA9IHRoaXMuX2ZpbGUgPSB0aGlzLl9zdGlja2VyID0gdGhpcy5fbG9jYXRpb24gPSB0aGlzLl9saXZlTG9jYXRpb24gPSB0aGlzLl9wb2xsID0gdGhpcy5fdHJhbnNhY3Rpb24gPSB0aGlzLl9mb3JtID0gdGhpcy5fcGVyc2lzdEV2ZW50ID0gdGhpcy5fc2hhcmVVaWQgPSB0aGlzLl9mb3JtUmVzdWx0ID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZSA9IHRoaXMuX2NhbGxFdmVudCA9IHRoaXMuX2NhbGxMb2cgPSB0aGlzLl90YWJsZSA9IHRoaXMuX3BheW1lbnRJbmZvcm1hdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBNZXNzYWdlLlR5cGVDYXNlLmJ1dHRvbnM7XG4gICAgfVxuICAgIHRoaXMuX2J1dHRvbnMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc2hhcmVVaWQoKTogU2hhcmVVaWQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zaGFyZVVpZDtcbiAgfVxuICBzZXQgc2hhcmVVaWQodmFsdWU6IFNoYXJlVWlkIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3RleHQgPSB0aGlzLl9maWxlID0gdGhpcy5fc3RpY2tlciA9IHRoaXMuX2xvY2F0aW9uID0gdGhpcy5fbGl2ZUxvY2F0aW9uID0gdGhpcy5fcG9sbCA9IHRoaXMuX3RyYW5zYWN0aW9uID0gdGhpcy5fZm9ybSA9IHRoaXMuX3BlcnNpc3RFdmVudCA9IHRoaXMuX2J1dHRvbnMgPSB0aGlzLl9mb3JtUmVzdWx0ID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZSA9IHRoaXMuX2NhbGxFdmVudCA9IHRoaXMuX2NhbGxMb2cgPSB0aGlzLl90YWJsZSA9IHRoaXMuX3BheW1lbnRJbmZvcm1hdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBNZXNzYWdlLlR5cGVDYXNlLnNoYXJlVWlkO1xuICAgIH1cbiAgICB0aGlzLl9zaGFyZVVpZCA9IHZhbHVlO1xuICB9XG4gIGdldCBmb3JtUmVzdWx0KCk6IHByb3RvUHViVjFNb2RlbHMwMTAuRm9ybVJlc3VsdCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2Zvcm1SZXN1bHQ7XG4gIH1cbiAgc2V0IGZvcm1SZXN1bHQodmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMTAuRm9ybVJlc3VsdCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl90ZXh0ID0gdGhpcy5fZmlsZSA9IHRoaXMuX3N0aWNrZXIgPSB0aGlzLl9sb2NhdGlvbiA9IHRoaXMuX2xpdmVMb2NhdGlvbiA9IHRoaXMuX3BvbGwgPSB0aGlzLl90cmFuc2FjdGlvbiA9IHRoaXMuX2Zvcm0gPSB0aGlzLl9wZXJzaXN0RXZlbnQgPSB0aGlzLl9idXR0b25zID0gdGhpcy5fc2hhcmVVaWQgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlID0gdGhpcy5fY2FsbEV2ZW50ID0gdGhpcy5fY2FsbExvZyA9IHRoaXMuX3RhYmxlID0gdGhpcy5fcGF5bWVudEluZm9ybWF0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IE1lc3NhZ2UuVHlwZUNhc2UuZm9ybVJlc3VsdDtcbiAgICB9XG4gICAgdGhpcy5fZm9ybVJlc3VsdCA9IHZhbHVlO1xuICB9XG4gIGdldCBzaGFyZVByaXZhdGVEYXRhUmVxdWVzdCgpOlxuICAgIHwgcHJvdG9QdWJWMU1vZGVsczAwOS5TaGFyZVByaXZhdGVEYXRhUmVxdWVzdFxuICAgIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc2hhcmVQcml2YXRlRGF0YVJlcXVlc3Q7XG4gIH1cbiAgc2V0IHNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0KFxuICAgIHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDA5LlNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0IHwgdW5kZWZpbmVkXG4gICkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl90ZXh0ID0gdGhpcy5fZmlsZSA9IHRoaXMuX3N0aWNrZXIgPSB0aGlzLl9sb2NhdGlvbiA9IHRoaXMuX2xpdmVMb2NhdGlvbiA9IHRoaXMuX3BvbGwgPSB0aGlzLl90cmFuc2FjdGlvbiA9IHRoaXMuX2Zvcm0gPSB0aGlzLl9wZXJzaXN0RXZlbnQgPSB0aGlzLl9idXR0b25zID0gdGhpcy5fc2hhcmVVaWQgPSB0aGlzLl9mb3JtUmVzdWx0ID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UgPSB0aGlzLl9jYWxsRXZlbnQgPSB0aGlzLl9jYWxsTG9nID0gdGhpcy5fdGFibGUgPSB0aGlzLl9wYXltZW50SW5mb3JtYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gTWVzc2FnZS5UeXBlQ2FzZS5zaGFyZVByaXZhdGVEYXRhUmVxdWVzdDtcbiAgICB9XG4gICAgdGhpcy5fc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UoKTpcbiAgICB8IHByb3RvUHViVjFNb2RlbHMwMDkuU2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2VcbiAgICB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlO1xuICB9XG4gIHNldCBzaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZShcbiAgICB2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAwOS5TaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZSB8IHVuZGVmaW5lZFxuICApIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fdGV4dCA9IHRoaXMuX2ZpbGUgPSB0aGlzLl9zdGlja2VyID0gdGhpcy5fbG9jYXRpb24gPSB0aGlzLl9saXZlTG9jYXRpb24gPSB0aGlzLl9wb2xsID0gdGhpcy5fdHJhbnNhY3Rpb24gPSB0aGlzLl9mb3JtID0gdGhpcy5fcGVyc2lzdEV2ZW50ID0gdGhpcy5fYnV0dG9ucyA9IHRoaXMuX3NoYXJlVWlkID0gdGhpcy5fZm9ybVJlc3VsdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0ID0gdGhpcy5fY2FsbEV2ZW50ID0gdGhpcy5fY2FsbExvZyA9IHRoaXMuX3RhYmxlID0gdGhpcy5fcGF5bWVudEluZm9ybWF0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IE1lc3NhZ2UuVHlwZUNhc2Uuc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2U7XG4gICAgfVxuICAgIHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGNhbGxFdmVudCgpOiBwcm90b1B1YlYxTW9kZWxzMDEzLkNhbGxFdmVudCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2NhbGxFdmVudDtcbiAgfVxuICBzZXQgY2FsbEV2ZW50KHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDEzLkNhbGxFdmVudCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl90ZXh0ID0gdGhpcy5fZmlsZSA9IHRoaXMuX3N0aWNrZXIgPSB0aGlzLl9sb2NhdGlvbiA9IHRoaXMuX2xpdmVMb2NhdGlvbiA9IHRoaXMuX3BvbGwgPSB0aGlzLl90cmFuc2FjdGlvbiA9IHRoaXMuX2Zvcm0gPSB0aGlzLl9wZXJzaXN0RXZlbnQgPSB0aGlzLl9idXR0b25zID0gdGhpcy5fc2hhcmVVaWQgPSB0aGlzLl9mb3JtUmVzdWx0ID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZSA9IHRoaXMuX2NhbGxMb2cgPSB0aGlzLl90YWJsZSA9IHRoaXMuX3BheW1lbnRJbmZvcm1hdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBNZXNzYWdlLlR5cGVDYXNlLmNhbGxFdmVudDtcbiAgICB9XG4gICAgdGhpcy5fY2FsbEV2ZW50ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGNhbGxMb2coKTogcHJvdG9QdWJWMU1vZGVsczAxMy5DYWxsTG9nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fY2FsbExvZztcbiAgfVxuICBzZXQgY2FsbExvZyh2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAxMy5DYWxsTG9nIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3RleHQgPSB0aGlzLl9maWxlID0gdGhpcy5fc3RpY2tlciA9IHRoaXMuX2xvY2F0aW9uID0gdGhpcy5fbGl2ZUxvY2F0aW9uID0gdGhpcy5fcG9sbCA9IHRoaXMuX3RyYW5zYWN0aW9uID0gdGhpcy5fZm9ybSA9IHRoaXMuX3BlcnNpc3RFdmVudCA9IHRoaXMuX2J1dHRvbnMgPSB0aGlzLl9zaGFyZVVpZCA9IHRoaXMuX2Zvcm1SZXN1bHQgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlID0gdGhpcy5fY2FsbEV2ZW50ID0gdGhpcy5fdGFibGUgPSB0aGlzLl9wYXltZW50SW5mb3JtYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gTWVzc2FnZS5UeXBlQ2FzZS5jYWxsTG9nO1xuICAgIH1cbiAgICB0aGlzLl9jYWxsTG9nID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHRhYmxlKCk6IHByb3RvUHViVjFNb2RlbHMwMTAuVGFibGUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90YWJsZTtcbiAgfVxuICBzZXQgdGFibGUodmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMTAuVGFibGUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fdGV4dCA9IHRoaXMuX2ZpbGUgPSB0aGlzLl9zdGlja2VyID0gdGhpcy5fbG9jYXRpb24gPSB0aGlzLl9saXZlTG9jYXRpb24gPSB0aGlzLl9wb2xsID0gdGhpcy5fdHJhbnNhY3Rpb24gPSB0aGlzLl9mb3JtID0gdGhpcy5fcGVyc2lzdEV2ZW50ID0gdGhpcy5fYnV0dG9ucyA9IHRoaXMuX3NoYXJlVWlkID0gdGhpcy5fZm9ybVJlc3VsdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0ID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UgPSB0aGlzLl9jYWxsRXZlbnQgPSB0aGlzLl9jYWxsTG9nID0gdGhpcy5fcGF5bWVudEluZm9ybWF0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IE1lc3NhZ2UuVHlwZUNhc2UudGFibGU7XG4gICAgfVxuICAgIHRoaXMuX3RhYmxlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHBheW1lbnRJbmZvcm1hdGlvbigpOiBwcm90b1B1YlYxTW9kZWxzMDA3LlBheW1lbnRJbmZvcm1hdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3BheW1lbnRJbmZvcm1hdGlvbjtcbiAgfVxuICBzZXQgcGF5bWVudEluZm9ybWF0aW9uKFxuICAgIHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDA3LlBheW1lbnRJbmZvcm1hdGlvbiB8IHVuZGVmaW5lZFxuICApIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fdGV4dCA9IHRoaXMuX2ZpbGUgPSB0aGlzLl9zdGlja2VyID0gdGhpcy5fbG9jYXRpb24gPSB0aGlzLl9saXZlTG9jYXRpb24gPSB0aGlzLl9wb2xsID0gdGhpcy5fdHJhbnNhY3Rpb24gPSB0aGlzLl9mb3JtID0gdGhpcy5fcGVyc2lzdEV2ZW50ID0gdGhpcy5fYnV0dG9ucyA9IHRoaXMuX3NoYXJlVWlkID0gdGhpcy5fZm9ybVJlc3VsdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0ID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UgPSB0aGlzLl9jYWxsRXZlbnQgPSB0aGlzLl9jYWxsTG9nID0gdGhpcy5fdGFibGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gTWVzc2FnZS5UeXBlQ2FzZS5wYXltZW50SW5mb3JtYXRpb247XG4gICAgfVxuICAgIHRoaXMuX3BheW1lbnRJbmZvcm1hdGlvbiA9IHZhbHVlO1xuICB9XG4gIGdldCB0eXBlKCkge1xuICAgIHJldHVybiB0aGlzLl90eXBlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIE1lc3NhZ2Uuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogTWVzc2FnZS5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhY2tldElkOiB0aGlzLnBhY2tldElkLFxuICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICB0aW1lOiB0aGlzLnRpbWUsXG4gICAgICBmcm9tOiB0aGlzLmZyb20gPyB0aGlzLmZyb20udG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIHRvOiB0aGlzLnRvID8gdGhpcy50by50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgcmVwbHlUb0lkOiB0aGlzLnJlcGx5VG9JZCxcbiAgICAgIHJlcGxpZWRNZXNzYWdlQnJpZWY6IHRoaXMucmVwbGllZE1lc3NhZ2VCcmllZlxuICAgICAgICA/IHRoaXMucmVwbGllZE1lc3NhZ2VCcmllZi50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgZm9yd2FyZEZyb206IHRoaXMuZm9yd2FyZEZyb20gPyB0aGlzLmZvcndhcmRGcm9tLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBnZW5lcmF0ZWRCeTogdGhpcy5nZW5lcmF0ZWRCeSA/IHRoaXMuZ2VuZXJhdGVkQnkudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGVkaXRlZDogdGhpcy5lZGl0ZWQsXG4gICAgICBlbmNyeXB0ZWQ6IHRoaXMuZW5jcnlwdGVkLFxuICAgICAgdHRsOiB0aGlzLnR0bCxcbiAgICAgIHRocmVhZDogdGhpcy50aHJlYWQsXG4gICAgICBzaG91bGRCZVF1aWV0OiB0aGlzLnNob3VsZEJlUXVpZXQsXG4gICAgICBtdWNNaW5pbXVtQWNjZXNzTGV2ZWw6IHRoaXMubXVjTWluaW11bUFjY2Vzc0xldmVsLFxuICAgICAgc3BlY2lhbFRhcmdldDogdGhpcy5zcGVjaWFsVGFyZ2V0XG4gICAgICAgID8gdGhpcy5zcGVjaWFsVGFyZ2V0LnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICBtZXNzYWdlTWFya3VwOiB0aGlzLm1lc3NhZ2VNYXJrdXBcbiAgICAgICAgPyB0aGlzLm1lc3NhZ2VNYXJrdXAudG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIHRleHQ6IHRoaXMudGV4dCA/IHRoaXMudGV4dC50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgZmlsZTogdGhpcy5maWxlID8gdGhpcy5maWxlLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBzdGlja2VyOiB0aGlzLnN0aWNrZXIgPyB0aGlzLnN0aWNrZXIudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGxvY2F0aW9uOiB0aGlzLmxvY2F0aW9uID8gdGhpcy5sb2NhdGlvbi50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgbGl2ZUxvY2F0aW9uOiB0aGlzLmxpdmVMb2NhdGlvblxuICAgICAgICA/IHRoaXMubGl2ZUxvY2F0aW9uLnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICBwb2xsOiB0aGlzLnBvbGwgPyB0aGlzLnBvbGwudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIHRyYW5zYWN0aW9uOiB0aGlzLnRyYW5zYWN0aW9uID8gdGhpcy50cmFuc2FjdGlvbi50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgZm9ybTogdGhpcy5mb3JtID8gdGhpcy5mb3JtLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBwZXJzaXN0RXZlbnQ6IHRoaXMucGVyc2lzdEV2ZW50XG4gICAgICAgID8gdGhpcy5wZXJzaXN0RXZlbnQudG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIGJ1dHRvbnM6IHRoaXMuYnV0dG9ucyA/IHRoaXMuYnV0dG9ucy50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgc2hhcmVVaWQ6IHRoaXMuc2hhcmVVaWQgPyB0aGlzLnNoYXJlVWlkLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBmb3JtUmVzdWx0OiB0aGlzLmZvcm1SZXN1bHQgPyB0aGlzLmZvcm1SZXN1bHQudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIHNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0OiB0aGlzLnNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0XG4gICAgICAgID8gdGhpcy5zaGFyZVByaXZhdGVEYXRhUmVxdWVzdC50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2U6IHRoaXMuc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2VcbiAgICAgICAgPyB0aGlzLnNoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlLnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICBjYWxsRXZlbnQ6IHRoaXMuY2FsbEV2ZW50ID8gdGhpcy5jYWxsRXZlbnQudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGNhbGxMb2c6IHRoaXMuY2FsbExvZyA/IHRoaXMuY2FsbExvZy50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgdGFibGU6IHRoaXMudGFibGUgPyB0aGlzLnRhYmxlLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBwYXltZW50SW5mb3JtYXRpb246IHRoaXMucGF5bWVudEluZm9ybWF0aW9uXG4gICAgICAgID8gdGhpcy5wYXltZW50SW5mb3JtYXRpb24udG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IE1lc3NhZ2UuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBwYWNrZXRJZDogdGhpcy5wYWNrZXRJZCxcbiAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgdGltZTogdGhpcy50aW1lLFxuICAgICAgZnJvbTogdGhpcy5mcm9tID8gdGhpcy5mcm9tLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIHRvOiB0aGlzLnRvID8gdGhpcy50by50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICByZXBseVRvSWQ6IHRoaXMucmVwbHlUb0lkLFxuICAgICAgcmVwbGllZE1lc3NhZ2VCcmllZjogdGhpcy5yZXBsaWVkTWVzc2FnZUJyaWVmXG4gICAgICAgID8gdGhpcy5yZXBsaWVkTWVzc2FnZUJyaWVmLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbCxcbiAgICAgIGZvcndhcmRGcm9tOiB0aGlzLmZvcndhcmRGcm9tXG4gICAgICAgID8gdGhpcy5mb3J3YXJkRnJvbS50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICBnZW5lcmF0ZWRCeTogdGhpcy5nZW5lcmF0ZWRCeVxuICAgICAgICA/IHRoaXMuZ2VuZXJhdGVkQnkudG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsLFxuICAgICAgZWRpdGVkOiB0aGlzLmVkaXRlZCxcbiAgICAgIGVuY3J5cHRlZDogdGhpcy5lbmNyeXB0ZWQsXG4gICAgICB0dGw6IHRoaXMudHRsLFxuICAgICAgdGhyZWFkOiB0aGlzLnRocmVhZCxcbiAgICAgIHNob3VsZEJlUXVpZXQ6IHRoaXMuc2hvdWxkQmVRdWlldCxcbiAgICAgIG11Y01pbmltdW1BY2Nlc3NMZXZlbDpcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxMi5Sb2xlW1xuICAgICAgICAgIHRoaXMubXVjTWluaW11bUFjY2Vzc0xldmVsID09PSBudWxsIHx8XG4gICAgICAgICAgdGhpcy5tdWNNaW5pbXVtQWNjZXNzTGV2ZWwgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyAwXG4gICAgICAgICAgICA6IHRoaXMubXVjTWluaW11bUFjY2Vzc0xldmVsXG4gICAgICAgIF0sXG4gICAgICBzcGVjaWFsVGFyZ2V0OiB0aGlzLnNwZWNpYWxUYXJnZXRcbiAgICAgICAgPyB0aGlzLnNwZWNpYWxUYXJnZXQudG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsLFxuICAgICAgbWVzc2FnZU1hcmt1cDogdGhpcy5tZXNzYWdlTWFya3VwXG4gICAgICAgID8gdGhpcy5tZXNzYWdlTWFya3VwLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbCxcbiAgICAgIHRleHQ6IHRoaXMudGV4dCA/IHRoaXMudGV4dC50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICBmaWxlOiB0aGlzLmZpbGUgPyB0aGlzLmZpbGUudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgc3RpY2tlcjogdGhpcy5zdGlja2VyID8gdGhpcy5zdGlja2VyLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIGxvY2F0aW9uOiB0aGlzLmxvY2F0aW9uID8gdGhpcy5sb2NhdGlvbi50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICBsaXZlTG9jYXRpb246IHRoaXMubGl2ZUxvY2F0aW9uXG4gICAgICAgID8gdGhpcy5saXZlTG9jYXRpb24udG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsLFxuICAgICAgcG9sbDogdGhpcy5wb2xsID8gdGhpcy5wb2xsLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIHRyYW5zYWN0aW9uOiB0aGlzLnRyYW5zYWN0aW9uXG4gICAgICAgID8gdGhpcy50cmFuc2FjdGlvbi50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICBmb3JtOiB0aGlzLmZvcm0gPyB0aGlzLmZvcm0udG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgcGVyc2lzdEV2ZW50OiB0aGlzLnBlcnNpc3RFdmVudFxuICAgICAgICA/IHRoaXMucGVyc2lzdEV2ZW50LnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbCxcbiAgICAgIGJ1dHRvbnM6IHRoaXMuYnV0dG9ucyA/IHRoaXMuYnV0dG9ucy50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICBzaGFyZVVpZDogdGhpcy5zaGFyZVVpZCA/IHRoaXMuc2hhcmVVaWQudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgZm9ybVJlc3VsdDogdGhpcy5mb3JtUmVzdWx0XG4gICAgICAgID8gdGhpcy5mb3JtUmVzdWx0LnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbCxcbiAgICAgIHNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0OiB0aGlzLnNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0XG4gICAgICAgID8gdGhpcy5zaGFyZVByaXZhdGVEYXRhUmVxdWVzdC50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICBzaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZTogdGhpcy5zaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZVxuICAgICAgICA/IHRoaXMuc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UudG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsLFxuICAgICAgY2FsbEV2ZW50OiB0aGlzLmNhbGxFdmVudCA/IHRoaXMuY2FsbEV2ZW50LnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIGNhbGxMb2c6IHRoaXMuY2FsbExvZyA/IHRoaXMuY2FsbExvZy50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICB0YWJsZTogdGhpcy50YWJsZSA/IHRoaXMudGFibGUudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgcGF5bWVudEluZm9ybWF0aW9uOiB0aGlzLnBheW1lbnRJbmZvcm1hdGlvblxuICAgICAgICA/IHRoaXMucGF5bWVudEluZm9ybWF0aW9uLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbFxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgTWVzc2FnZVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgcGFja2V0SWQ/OiBzdHJpbmc7XG4gICAgaWQ/OiBzdHJpbmc7XG4gICAgdGltZT86IHN0cmluZztcbiAgICBmcm9tPzogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuQXNPYmplY3Q7XG4gICAgdG8/OiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5Bc09iamVjdDtcbiAgICByZXBseVRvSWQ/OiBzdHJpbmc7XG4gICAgcmVwbGllZE1lc3NhZ2VCcmllZj86IE1lc3NhZ2VCcmllZi5Bc09iamVjdDtcbiAgICBmb3J3YXJkRnJvbT86IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLkFzT2JqZWN0O1xuICAgIGdlbmVyYXRlZEJ5PzogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuQXNPYmplY3Q7XG4gICAgZWRpdGVkPzogYm9vbGVhbjtcbiAgICBlbmNyeXB0ZWQ/OiBib29sZWFuO1xuICAgIHR0bD86IG51bWJlcjtcbiAgICB0aHJlYWQ/OiBzdHJpbmc7XG4gICAgc2hvdWxkQmVRdWlldD86IGJvb2xlYW47XG4gICAgbXVjTWluaW11bUFjY2Vzc0xldmVsPzogcHJvdG9QdWJWMU1vZGVsczAxMi5Sb2xlO1xuICAgIHNwZWNpYWxUYXJnZXQ/OiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5Bc09iamVjdDtcbiAgICBtZXNzYWdlTWFya3VwPzogcHJvdG9QdWJWMU1vZGVsczAxNC5NZXNzYWdlTWFya3VwLkFzT2JqZWN0O1xuICAgIHRleHQ/OiBUZXh0LkFzT2JqZWN0O1xuICAgIGZpbGU/OiBwcm90b1B1YlYxTW9kZWxzMDAxLkZpbGUuQXNPYmplY3Q7XG4gICAgc3RpY2tlcj86IHByb3RvUHViVjFNb2RlbHMwMDUuU3RpY2tlci5Bc09iamVjdDtcbiAgICBsb2NhdGlvbj86IHByb3RvUHViVjFNb2RlbHMwMDYuTG9jYXRpb24uQXNPYmplY3Q7XG4gICAgbGl2ZUxvY2F0aW9uPzogcHJvdG9QdWJWMU1vZGVsczAwNi5MaXZlTG9jYXRpb24uQXNPYmplY3Q7XG4gICAgcG9sbD86IHByb3RvUHViVjFNb2RlbHMwMTEuUG9sbC5Bc09iamVjdDtcbiAgICB0cmFuc2FjdGlvbj86IHByb3RvUHViVjFNb2RlbHMwMDcuVHJhbnNhY3Rpb24uQXNPYmplY3Q7XG4gICAgZm9ybT86IHByb3RvUHViVjFNb2RlbHMwMTAuRm9ybS5Bc09iamVjdDtcbiAgICBwZXJzaXN0RXZlbnQ/OiBwcm90b1B1YlYxTW9kZWxzMDA4LlBlcnNpc3RlbnRFdmVudC5Bc09iamVjdDtcbiAgICBidXR0b25zPzogcHJvdG9QdWJWMU1vZGVsczAxMC5CdXR0b25zLkFzT2JqZWN0O1xuICAgIHNoYXJlVWlkPzogU2hhcmVVaWQuQXNPYmplY3Q7XG4gICAgZm9ybVJlc3VsdD86IHByb3RvUHViVjFNb2RlbHMwMTAuRm9ybVJlc3VsdC5Bc09iamVjdDtcbiAgICBzaGFyZVByaXZhdGVEYXRhUmVxdWVzdD86IHByb3RvUHViVjFNb2RlbHMwMDkuU2hhcmVQcml2YXRlRGF0YVJlcXVlc3QuQXNPYmplY3Q7XG4gICAgc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2U/OiBwcm90b1B1YlYxTW9kZWxzMDA5LlNoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlLkFzT2JqZWN0O1xuICAgIGNhbGxFdmVudD86IHByb3RvUHViVjFNb2RlbHMwMTMuQ2FsbEV2ZW50LkFzT2JqZWN0O1xuICAgIGNhbGxMb2c/OiBwcm90b1B1YlYxTW9kZWxzMDEzLkNhbGxMb2cuQXNPYmplY3Q7XG4gICAgdGFibGU/OiBwcm90b1B1YlYxTW9kZWxzMDEwLlRhYmxlLkFzT2JqZWN0O1xuICAgIHBheW1lbnRJbmZvcm1hdGlvbj86IHByb3RvUHViVjFNb2RlbHMwMDcuUGF5bWVudEluZm9ybWF0aW9uLkFzT2JqZWN0O1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIE1lc3NhZ2VcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHBhY2tldElkPzogc3RyaW5nO1xuICAgIGlkPzogc3RyaW5nO1xuICAgIHRpbWU/OiBzdHJpbmc7XG4gICAgZnJvbT86IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICB0bz86IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICByZXBseVRvSWQ/OiBzdHJpbmc7XG4gICAgcmVwbGllZE1lc3NhZ2VCcmllZj86IE1lc3NhZ2VCcmllZi5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgZm9yd2FyZEZyb20/OiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgZ2VuZXJhdGVkQnk/OiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgZWRpdGVkPzogYm9vbGVhbjtcbiAgICBlbmNyeXB0ZWQ/OiBib29sZWFuO1xuICAgIHR0bD86IG51bWJlcjtcbiAgICB0aHJlYWQ/OiBzdHJpbmc7XG4gICAgc2hvdWxkQmVRdWlldD86IGJvb2xlYW47XG4gICAgbXVjTWluaW11bUFjY2Vzc0xldmVsPzogc3RyaW5nO1xuICAgIHNwZWNpYWxUYXJnZXQ/OiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgbWVzc2FnZU1hcmt1cD86IHByb3RvUHViVjFNb2RlbHMwMTQuTWVzc2FnZU1hcmt1cC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgdGV4dD86IFRleHQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIGZpbGU/OiBwcm90b1B1YlYxTW9kZWxzMDAxLkZpbGUuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHN0aWNrZXI/OiBwcm90b1B1YlYxTW9kZWxzMDA1LlN0aWNrZXIuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIGxvY2F0aW9uPzogcHJvdG9QdWJWMU1vZGVsczAwNi5Mb2NhdGlvbi5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgbGl2ZUxvY2F0aW9uPzogcHJvdG9QdWJWMU1vZGVsczAwNi5MaXZlTG9jYXRpb24uQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHBvbGw/OiBwcm90b1B1YlYxTW9kZWxzMDExLlBvbGwuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHRyYW5zYWN0aW9uPzogcHJvdG9QdWJWMU1vZGVsczAwNy5UcmFuc2FjdGlvbi5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgZm9ybT86IHByb3RvUHViVjFNb2RlbHMwMTAuRm9ybS5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgcGVyc2lzdEV2ZW50PzogcHJvdG9QdWJWMU1vZGVsczAwOC5QZXJzaXN0ZW50RXZlbnQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIGJ1dHRvbnM/OiBwcm90b1B1YlYxTW9kZWxzMDEwLkJ1dHRvbnMuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHNoYXJlVWlkPzogU2hhcmVVaWQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIGZvcm1SZXN1bHQ/OiBwcm90b1B1YlYxTW9kZWxzMDEwLkZvcm1SZXN1bHQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0PzogcHJvdG9QdWJWMU1vZGVsczAwOS5TaGFyZVByaXZhdGVEYXRhUmVxdWVzdC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2U/OiBwcm90b1B1YlYxTW9kZWxzMDA5LlNoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBjYWxsRXZlbnQ/OiBwcm90b1B1YlYxTW9kZWxzMDEzLkNhbGxFdmVudC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgY2FsbExvZz86IHByb3RvUHViVjFNb2RlbHMwMTMuQ2FsbExvZy5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgdGFibGU/OiBwcm90b1B1YlYxTW9kZWxzMDEwLlRhYmxlLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBwYXltZW50SW5mb3JtYXRpb24/OiBwcm90b1B1YlYxTW9kZWxzMDA3LlBheW1lbnRJbmZvcm1hdGlvbi5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gIH1cbiAgZXhwb3J0IGVudW0gVHlwZUNhc2Uge1xuICAgIG5vbmUgPSAwLFxuICAgIHRleHQgPSAxLFxuICAgIGZpbGUgPSAyLFxuICAgIHN0aWNrZXIgPSAzLFxuICAgIGxvY2F0aW9uID0gNCxcbiAgICBsaXZlTG9jYXRpb24gPSA1LFxuICAgIHBvbGwgPSA2LFxuICAgIHRyYW5zYWN0aW9uID0gNyxcbiAgICBmb3JtID0gOCxcbiAgICBwZXJzaXN0RXZlbnQgPSA5LFxuICAgIGJ1dHRvbnMgPSAxMCxcbiAgICBzaGFyZVVpZCA9IDExLFxuICAgIGZvcm1SZXN1bHQgPSAxMixcbiAgICBzaGFyZVByaXZhdGVEYXRhUmVxdWVzdCA9IDEzLFxuICAgIHNoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlID0gMTQsXG4gICAgY2FsbEV2ZW50ID0gMTUsXG4gICAgY2FsbExvZyA9IDE2LFxuICAgIHRhYmxlID0gMTcsXG4gICAgcGF5bWVudEluZm9ybWF0aW9uID0gMThcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIHByb3RvLnB1Yi52MS5tb2RlbHMuTWVzc2FnZUJ5Q2xpZW50XG4gKi9cbmV4cG9ydCBjbGFzcyBNZXNzYWdlQnlDbGllbnQgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdwcm90by5wdWIudjEubW9kZWxzLk1lc3NhZ2VCeUNsaWVudCc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IE1lc3NhZ2VCeUNsaWVudCgpO1xuICAgIE1lc3NhZ2VCeUNsaWVudC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IE1lc3NhZ2VCeUNsaWVudCkge1xuICAgIF9pbnN0YW5jZS5wYWNrZXRJZCA9IF9pbnN0YW5jZS5wYWNrZXRJZCB8fCAnJztcbiAgICBfaW5zdGFuY2UudG8gPSBfaW5zdGFuY2UudG8gfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5yZXBseVRvSWQgPSBfaW5zdGFuY2UucmVwbHlUb0lkIHx8ICcwJztcbiAgICBfaW5zdGFuY2UuZm9yd2FyZEZyb20gPSBfaW5zdGFuY2UuZm9yd2FyZEZyb20gfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5lbmNyeXB0ZWQgPSBfaW5zdGFuY2UuZW5jcnlwdGVkIHx8IGZhbHNlO1xuICAgIF9pbnN0YW5jZS50dGwgPSBfaW5zdGFuY2UudHRsIHx8IDA7XG4gICAgX2luc3RhbmNlLnRocmVhZCA9IF9pbnN0YW5jZS50aHJlYWQgfHwgJzAnO1xuICAgIF9pbnN0YW5jZS5zaG91bGRCZVF1aWV0ID0gX2luc3RhbmNlLnNob3VsZEJlUXVpZXQgfHwgZmFsc2U7XG4gICAgX2luc3RhbmNlLmdlbmVyYXRlZEJ5ID0gX2luc3RhbmNlLmdlbmVyYXRlZEJ5IHx8IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IE1lc3NhZ2VCeUNsaWVudCxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UucGFja2V0SWQgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIF9pbnN0YW5jZS50byA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UudG8sXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgX2luc3RhbmNlLnJlcGx5VG9JZCA9IF9yZWFkZXIucmVhZEludDY0U3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgODpcbiAgICAgICAgICBfaW5zdGFuY2UuZm9yd2FyZEZyb20gPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmZvcndhcmRGcm9tLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICBfaW5zdGFuY2UuZW5jcnlwdGVkID0gX3JlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDIzOlxuICAgICAgICAgIF9pbnN0YW5jZS50dGwgPSBfcmVhZGVyLnJlYWRJbnQzMigpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI4OlxuICAgICAgICAgIF9pbnN0YW5jZS50aHJlYWQgPSBfcmVhZGVyLnJlYWRJbnQ2NFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI5OlxuICAgICAgICAgIF9pbnN0YW5jZS5zaG91bGRCZVF1aWV0ID0gX3JlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDMzOlxuICAgICAgICAgIF9pbnN0YW5jZS5nZW5lcmF0ZWRCeSA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuZ2VuZXJhdGVkQnksXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDExOlxuICAgICAgICAgIF9pbnN0YW5jZS50ZXh0ID0gbmV3IFRleHQoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKF9pbnN0YW5jZS50ZXh0LCBUZXh0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgX2luc3RhbmNlLmZpbGUgPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMS5GaWxlKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5maWxlLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMS5GaWxlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgX2luc3RhbmNlLnN0aWNrZXIgPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAwNS5TdGlja2VyKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5zdGlja2VyLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwNS5TdGlja2VyLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTQ6XG4gICAgICAgICAgX2luc3RhbmNlLmxvY2F0aW9uID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDYuTG9jYXRpb24oKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmxvY2F0aW9uLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwNi5Mb2NhdGlvbi5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE1OlxuICAgICAgICAgIF9pbnN0YW5jZS5saXZlTG9jYXRpb24gPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAwNi5MaXZlTG9jYXRpb24oKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmxpdmVMb2NhdGlvbixcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDYuTGl2ZUxvY2F0aW9uLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTY6XG4gICAgICAgICAgX2luc3RhbmNlLnBvbGwgPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAxMS5Qb2xsKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5wb2xsLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxMS5Qb2xsLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTg6XG4gICAgICAgICAgX2luc3RhbmNlLmZvcm0gPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAxMC5Gb3JtKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5mb3JtLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxMC5Gb3JtLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjA6XG4gICAgICAgICAgX2luc3RhbmNlLmJ1dHRvbnMgPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAxMC5CdXR0b25zKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5idXR0b25zLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxMC5CdXR0b25zLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjE6XG4gICAgICAgICAgX2luc3RhbmNlLnNoYXJlVWlkID0gbmV3IFNoYXJlVWlkKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5zaGFyZVVpZCxcbiAgICAgICAgICAgIFNoYXJlVWlkLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjI6XG4gICAgICAgICAgX2luc3RhbmNlLmZvcm1SZXN1bHQgPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAxMC5Gb3JtUmVzdWx0KCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5mb3JtUmVzdWx0LFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxMC5Gb3JtUmVzdWx0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjY6XG4gICAgICAgICAgX2luc3RhbmNlLnNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0ID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDkuU2hhcmVQcml2YXRlRGF0YVJlcXVlc3QoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLnNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0LFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwOS5TaGFyZVByaXZhdGVEYXRhUmVxdWVzdFxuICAgICAgICAgICAgICAuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyNzpcbiAgICAgICAgICBfaW5zdGFuY2Uuc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UgPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAwOS5TaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZSgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2Uuc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UsXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDA5LlNoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlXG4gICAgICAgICAgICAgIC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDMxOlxuICAgICAgICAgIF9pbnN0YW5jZS5jYWxsRXZlbnQgPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAxMy5DYWxsRXZlbnQoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmNhbGxFdmVudCxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMTMuQ2FsbEV2ZW50LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzI6XG4gICAgICAgICAgX2luc3RhbmNlLnRhYmxlID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMTAuVGFibGUoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLnRhYmxlLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxMC5UYWJsZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgTWVzc2FnZUJ5Q2xpZW50LnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogTWVzc2FnZUJ5Q2xpZW50LFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLnBhY2tldElkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS5wYWNrZXRJZCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UudG8pIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA2LFxuICAgICAgICBfaW5zdGFuY2UudG8gYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5yZXBseVRvSWQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQ2NFN0cmluZyg3LCBfaW5zdGFuY2UucmVwbHlUb0lkKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5mb3J3YXJkRnJvbSkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDgsXG4gICAgICAgIF9pbnN0YW5jZS5mb3J3YXJkRnJvbSBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmVuY3J5cHRlZCkge1xuICAgICAgX3dyaXRlci53cml0ZUJvb2woMTAsIF9pbnN0YW5jZS5lbmNyeXB0ZWQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnR0bCkge1xuICAgICAgX3dyaXRlci53cml0ZUludDMyKDIzLCBfaW5zdGFuY2UudHRsKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS50aHJlYWQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQ2NFN0cmluZygyOCwgX2luc3RhbmNlLnRocmVhZCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uuc2hvdWxkQmVRdWlldCkge1xuICAgICAgX3dyaXRlci53cml0ZUJvb2woMjksIF9pbnN0YW5jZS5zaG91bGRCZVF1aWV0KTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5nZW5lcmF0ZWRCeSkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDMzLFxuICAgICAgICBfaW5zdGFuY2UuZ2VuZXJhdGVkQnkgYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS50ZXh0KSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMTEsXG4gICAgICAgIF9pbnN0YW5jZS50ZXh0IGFzIGFueSxcbiAgICAgICAgVGV4dC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5maWxlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMTIsXG4gICAgICAgIF9pbnN0YW5jZS5maWxlIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMS5GaWxlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnN0aWNrZXIpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAxMyxcbiAgICAgICAgX2luc3RhbmNlLnN0aWNrZXIgYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDA1LlN0aWNrZXIuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UubG9jYXRpb24pIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAxNCxcbiAgICAgICAgX2luc3RhbmNlLmxvY2F0aW9uIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwNi5Mb2NhdGlvbi5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5saXZlTG9jYXRpb24pIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAxNSxcbiAgICAgICAgX2luc3RhbmNlLmxpdmVMb2NhdGlvbiBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDYuTGl2ZUxvY2F0aW9uLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnBvbGwpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAxNixcbiAgICAgICAgX2luc3RhbmNlLnBvbGwgYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDExLlBvbGwuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZm9ybSkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDE4LFxuICAgICAgICBfaW5zdGFuY2UuZm9ybSBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMTAuRm9ybS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5idXR0b25zKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMjAsXG4gICAgICAgIF9pbnN0YW5jZS5idXR0b25zIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxMC5CdXR0b25zLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnNoYXJlVWlkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMjEsXG4gICAgICAgIF9pbnN0YW5jZS5zaGFyZVVpZCBhcyBhbnksXG4gICAgICAgIFNoYXJlVWlkLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmZvcm1SZXN1bHQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAyMixcbiAgICAgICAgX2luc3RhbmNlLmZvcm1SZXN1bHQgYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDEwLkZvcm1SZXN1bHQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uuc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAyNixcbiAgICAgICAgX2luc3RhbmNlLnNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0IGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwOS5TaGFyZVByaXZhdGVEYXRhUmVxdWVzdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5zaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZSkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDI3LFxuICAgICAgICBfaW5zdGFuY2Uuc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UgYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDA5LlNoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmNhbGxFdmVudCkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDMxLFxuICAgICAgICBfaW5zdGFuY2UuY2FsbEV2ZW50IGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxMy5DYWxsRXZlbnQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UudGFibGUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAzMixcbiAgICAgICAgX2luc3RhbmNlLnRhYmxlIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxMC5UYWJsZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9wYWNrZXRJZD86IHN0cmluZztcbiAgcHJpdmF0ZSBfdG8/OiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZDtcbiAgcHJpdmF0ZSBfcmVwbHlUb0lkPzogc3RyaW5nO1xuICBwcml2YXRlIF9mb3J3YXJkRnJvbT86IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkO1xuICBwcml2YXRlIF9lbmNyeXB0ZWQ/OiBib29sZWFuO1xuICBwcml2YXRlIF90dGw/OiBudW1iZXI7XG4gIHByaXZhdGUgX3RocmVhZD86IHN0cmluZztcbiAgcHJpdmF0ZSBfc2hvdWxkQmVRdWlldD86IGJvb2xlYW47XG4gIHByaXZhdGUgX2dlbmVyYXRlZEJ5PzogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQ7XG4gIHByaXZhdGUgX3RleHQ/OiBUZXh0O1xuICBwcml2YXRlIF9maWxlPzogcHJvdG9QdWJWMU1vZGVsczAwMS5GaWxlO1xuICBwcml2YXRlIF9zdGlja2VyPzogcHJvdG9QdWJWMU1vZGVsczAwNS5TdGlja2VyO1xuICBwcml2YXRlIF9sb2NhdGlvbj86IHByb3RvUHViVjFNb2RlbHMwMDYuTG9jYXRpb247XG4gIHByaXZhdGUgX2xpdmVMb2NhdGlvbj86IHByb3RvUHViVjFNb2RlbHMwMDYuTGl2ZUxvY2F0aW9uO1xuICBwcml2YXRlIF9wb2xsPzogcHJvdG9QdWJWMU1vZGVsczAxMS5Qb2xsO1xuICBwcml2YXRlIF9mb3JtPzogcHJvdG9QdWJWMU1vZGVsczAxMC5Gb3JtO1xuICBwcml2YXRlIF9idXR0b25zPzogcHJvdG9QdWJWMU1vZGVsczAxMC5CdXR0b25zO1xuICBwcml2YXRlIF9zaGFyZVVpZD86IFNoYXJlVWlkO1xuICBwcml2YXRlIF9mb3JtUmVzdWx0PzogcHJvdG9QdWJWMU1vZGVsczAxMC5Gb3JtUmVzdWx0O1xuICBwcml2YXRlIF9zaGFyZVByaXZhdGVEYXRhUmVxdWVzdD86IHByb3RvUHViVjFNb2RlbHMwMDkuU2hhcmVQcml2YXRlRGF0YVJlcXVlc3Q7XG4gIHByaXZhdGUgX3NoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlPzogcHJvdG9QdWJWMU1vZGVsczAwOS5TaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZTtcbiAgcHJpdmF0ZSBfY2FsbEV2ZW50PzogcHJvdG9QdWJWMU1vZGVsczAxMy5DYWxsRXZlbnQ7XG4gIHByaXZhdGUgX3RhYmxlPzogcHJvdG9QdWJWMU1vZGVsczAxMC5UYWJsZTtcblxuICBwcml2YXRlIF90eXBlOiBNZXNzYWdlQnlDbGllbnQuVHlwZUNhc2UgPSBNZXNzYWdlQnlDbGllbnQuVHlwZUNhc2Uubm9uZTtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIE1lc3NhZ2VCeUNsaWVudCB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxNZXNzYWdlQnlDbGllbnQuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMucGFja2V0SWQgPSBfdmFsdWUucGFja2V0SWQ7XG4gICAgdGhpcy50byA9IF92YWx1ZS50byA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZChfdmFsdWUudG8pIDogdW5kZWZpbmVkO1xuICAgIHRoaXMucmVwbHlUb0lkID0gX3ZhbHVlLnJlcGx5VG9JZDtcbiAgICB0aGlzLmZvcndhcmRGcm9tID0gX3ZhbHVlLmZvcndhcmRGcm9tXG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZChfdmFsdWUuZm9yd2FyZEZyb20pXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmVuY3J5cHRlZCA9IF92YWx1ZS5lbmNyeXB0ZWQ7XG4gICAgdGhpcy50dGwgPSBfdmFsdWUudHRsO1xuICAgIHRoaXMudGhyZWFkID0gX3ZhbHVlLnRocmVhZDtcbiAgICB0aGlzLnNob3VsZEJlUXVpZXQgPSBfdmFsdWUuc2hvdWxkQmVRdWlldDtcbiAgICB0aGlzLmdlbmVyYXRlZEJ5ID0gX3ZhbHVlLmdlbmVyYXRlZEJ5XG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZChfdmFsdWUuZ2VuZXJhdGVkQnkpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnRleHQgPSBfdmFsdWUudGV4dCA/IG5ldyBUZXh0KF92YWx1ZS50ZXh0KSA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmZpbGUgPSBfdmFsdWUuZmlsZVxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMS5GaWxlKF92YWx1ZS5maWxlKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5zdGlja2VyID0gX3ZhbHVlLnN0aWNrZXJcbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMDUuU3RpY2tlcihfdmFsdWUuc3RpY2tlcilcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMubG9jYXRpb24gPSBfdmFsdWUubG9jYXRpb25cbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMDYuTG9jYXRpb24oX3ZhbHVlLmxvY2F0aW9uKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5saXZlTG9jYXRpb24gPSBfdmFsdWUubGl2ZUxvY2F0aW9uXG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDA2LkxpdmVMb2NhdGlvbihfdmFsdWUubGl2ZUxvY2F0aW9uKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5wb2xsID0gX3ZhbHVlLnBvbGxcbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMTEuUG9sbChfdmFsdWUucG9sbClcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuZm9ybSA9IF92YWx1ZS5mb3JtXG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDEwLkZvcm0oX3ZhbHVlLmZvcm0pXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmJ1dHRvbnMgPSBfdmFsdWUuYnV0dG9uc1xuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAxMC5CdXR0b25zKF92YWx1ZS5idXR0b25zKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5zaGFyZVVpZCA9IF92YWx1ZS5zaGFyZVVpZCA/IG5ldyBTaGFyZVVpZChfdmFsdWUuc2hhcmVVaWQpIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuZm9ybVJlc3VsdCA9IF92YWx1ZS5mb3JtUmVzdWx0XG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDEwLkZvcm1SZXN1bHQoX3ZhbHVlLmZvcm1SZXN1bHQpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0ID0gX3ZhbHVlLnNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0XG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDA5LlNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0KFxuICAgICAgICAgIF92YWx1ZS5zaGFyZVByaXZhdGVEYXRhUmVxdWVzdFxuICAgICAgICApXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlID0gX3ZhbHVlLnNoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlXG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDA5LlNoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlKFxuICAgICAgICAgIF92YWx1ZS5zaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZVxuICAgICAgICApXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmNhbGxFdmVudCA9IF92YWx1ZS5jYWxsRXZlbnRcbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMTMuQ2FsbEV2ZW50KF92YWx1ZS5jYWxsRXZlbnQpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnRhYmxlID0gX3ZhbHVlLnRhYmxlXG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDEwLlRhYmxlKF92YWx1ZS50YWJsZSlcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIE1lc3NhZ2VCeUNsaWVudC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHBhY2tldElkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3BhY2tldElkO1xuICB9XG4gIHNldCBwYWNrZXRJZCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcGFja2V0SWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdG8oKTogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90bztcbiAgfVxuICBzZXQgdG8odmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdG8gPSB2YWx1ZTtcbiAgfVxuICBnZXQgcmVwbHlUb0lkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcGx5VG9JZDtcbiAgfVxuICBzZXQgcmVwbHlUb0lkKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9yZXBseVRvSWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZm9yd2FyZEZyb20oKTogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9mb3J3YXJkRnJvbTtcbiAgfVxuICBzZXQgZm9yd2FyZEZyb20odmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZm9yd2FyZEZyb20gPSB2YWx1ZTtcbiAgfVxuICBnZXQgZW5jcnlwdGVkKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9lbmNyeXB0ZWQ7XG4gIH1cbiAgc2V0IGVuY3J5cHRlZCh2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2VuY3J5cHRlZCA9IHZhbHVlO1xuICB9XG4gIGdldCB0dGwoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdHRsO1xuICB9XG4gIHNldCB0dGwodmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3R0bCA9IHZhbHVlO1xuICB9XG4gIGdldCB0aHJlYWQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdGhyZWFkO1xuICB9XG4gIHNldCB0aHJlYWQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3RocmVhZCA9IHZhbHVlO1xuICB9XG4gIGdldCBzaG91bGRCZVF1aWV0KCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zaG91bGRCZVF1aWV0O1xuICB9XG4gIHNldCBzaG91bGRCZVF1aWV0KHZhbHVlOiBib29sZWFuIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fc2hvdWxkQmVRdWlldCA9IHZhbHVlO1xuICB9XG4gIGdldCBnZW5lcmF0ZWRCeSgpOiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2dlbmVyYXRlZEJ5O1xuICB9XG4gIHNldCBnZW5lcmF0ZWRCeSh2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9nZW5lcmF0ZWRCeSA9IHZhbHVlO1xuICB9XG4gIGdldCB0ZXh0KCk6IFRleHQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90ZXh0O1xuICB9XG4gIHNldCB0ZXh0KHZhbHVlOiBUZXh0IHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX2ZpbGUgPSB0aGlzLl9zdGlja2VyID0gdGhpcy5fbG9jYXRpb24gPSB0aGlzLl9saXZlTG9jYXRpb24gPSB0aGlzLl9wb2xsID0gdGhpcy5fZm9ybSA9IHRoaXMuX2J1dHRvbnMgPSB0aGlzLl9zaGFyZVVpZCA9IHRoaXMuX2Zvcm1SZXN1bHQgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlID0gdGhpcy5fY2FsbEV2ZW50ID0gdGhpcy5fdGFibGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gTWVzc2FnZUJ5Q2xpZW50LlR5cGVDYXNlLnRleHQ7XG4gICAgfVxuICAgIHRoaXMuX3RleHQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZmlsZSgpOiBwcm90b1B1YlYxTW9kZWxzMDAxLkZpbGUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9maWxlO1xuICB9XG4gIHNldCBmaWxlKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDAxLkZpbGUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fdGV4dCA9IHRoaXMuX3N0aWNrZXIgPSB0aGlzLl9sb2NhdGlvbiA9IHRoaXMuX2xpdmVMb2NhdGlvbiA9IHRoaXMuX3BvbGwgPSB0aGlzLl9mb3JtID0gdGhpcy5fYnV0dG9ucyA9IHRoaXMuX3NoYXJlVWlkID0gdGhpcy5fZm9ybVJlc3VsdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0ID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UgPSB0aGlzLl9jYWxsRXZlbnQgPSB0aGlzLl90YWJsZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBNZXNzYWdlQnlDbGllbnQuVHlwZUNhc2UuZmlsZTtcbiAgICB9XG4gICAgdGhpcy5fZmlsZSA9IHZhbHVlO1xuICB9XG4gIGdldCBzdGlja2VyKCk6IHByb3RvUHViVjFNb2RlbHMwMDUuU3RpY2tlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3N0aWNrZXI7XG4gIH1cbiAgc2V0IHN0aWNrZXIodmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMDUuU3RpY2tlciB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl90ZXh0ID0gdGhpcy5fZmlsZSA9IHRoaXMuX2xvY2F0aW9uID0gdGhpcy5fbGl2ZUxvY2F0aW9uID0gdGhpcy5fcG9sbCA9IHRoaXMuX2Zvcm0gPSB0aGlzLl9idXR0b25zID0gdGhpcy5fc2hhcmVVaWQgPSB0aGlzLl9mb3JtUmVzdWx0ID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZSA9IHRoaXMuX2NhbGxFdmVudCA9IHRoaXMuX3RhYmxlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IE1lc3NhZ2VCeUNsaWVudC5UeXBlQ2FzZS5zdGlja2VyO1xuICAgIH1cbiAgICB0aGlzLl9zdGlja2VyID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGxvY2F0aW9uKCk6IHByb3RvUHViVjFNb2RlbHMwMDYuTG9jYXRpb24gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9sb2NhdGlvbjtcbiAgfVxuICBzZXQgbG9jYXRpb24odmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMDYuTG9jYXRpb24gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fdGV4dCA9IHRoaXMuX2ZpbGUgPSB0aGlzLl9zdGlja2VyID0gdGhpcy5fbGl2ZUxvY2F0aW9uID0gdGhpcy5fcG9sbCA9IHRoaXMuX2Zvcm0gPSB0aGlzLl9idXR0b25zID0gdGhpcy5fc2hhcmVVaWQgPSB0aGlzLl9mb3JtUmVzdWx0ID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZSA9IHRoaXMuX2NhbGxFdmVudCA9IHRoaXMuX3RhYmxlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IE1lc3NhZ2VCeUNsaWVudC5UeXBlQ2FzZS5sb2NhdGlvbjtcbiAgICB9XG4gICAgdGhpcy5fbG9jYXRpb24gPSB2YWx1ZTtcbiAgfVxuICBnZXQgbGl2ZUxvY2F0aW9uKCk6IHByb3RvUHViVjFNb2RlbHMwMDYuTGl2ZUxvY2F0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbGl2ZUxvY2F0aW9uO1xuICB9XG4gIHNldCBsaXZlTG9jYXRpb24odmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMDYuTGl2ZUxvY2F0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3RleHQgPSB0aGlzLl9maWxlID0gdGhpcy5fc3RpY2tlciA9IHRoaXMuX2xvY2F0aW9uID0gdGhpcy5fcG9sbCA9IHRoaXMuX2Zvcm0gPSB0aGlzLl9idXR0b25zID0gdGhpcy5fc2hhcmVVaWQgPSB0aGlzLl9mb3JtUmVzdWx0ID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZSA9IHRoaXMuX2NhbGxFdmVudCA9IHRoaXMuX3RhYmxlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IE1lc3NhZ2VCeUNsaWVudC5UeXBlQ2FzZS5saXZlTG9jYXRpb247XG4gICAgfVxuICAgIHRoaXMuX2xpdmVMb2NhdGlvbiA9IHZhbHVlO1xuICB9XG4gIGdldCBwb2xsKCk6IHByb3RvUHViVjFNb2RlbHMwMTEuUG9sbCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3BvbGw7XG4gIH1cbiAgc2V0IHBvbGwodmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMTEuUG9sbCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl90ZXh0ID0gdGhpcy5fZmlsZSA9IHRoaXMuX3N0aWNrZXIgPSB0aGlzLl9sb2NhdGlvbiA9IHRoaXMuX2xpdmVMb2NhdGlvbiA9IHRoaXMuX2Zvcm0gPSB0aGlzLl9idXR0b25zID0gdGhpcy5fc2hhcmVVaWQgPSB0aGlzLl9mb3JtUmVzdWx0ID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZSA9IHRoaXMuX2NhbGxFdmVudCA9IHRoaXMuX3RhYmxlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IE1lc3NhZ2VCeUNsaWVudC5UeXBlQ2FzZS5wb2xsO1xuICAgIH1cbiAgICB0aGlzLl9wb2xsID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGZvcm0oKTogcHJvdG9QdWJWMU1vZGVsczAxMC5Gb3JtIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZm9ybTtcbiAgfVxuICBzZXQgZm9ybSh2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAxMC5Gb3JtIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3RleHQgPSB0aGlzLl9maWxlID0gdGhpcy5fc3RpY2tlciA9IHRoaXMuX2xvY2F0aW9uID0gdGhpcy5fbGl2ZUxvY2F0aW9uID0gdGhpcy5fcG9sbCA9IHRoaXMuX2J1dHRvbnMgPSB0aGlzLl9zaGFyZVVpZCA9IHRoaXMuX2Zvcm1SZXN1bHQgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlID0gdGhpcy5fY2FsbEV2ZW50ID0gdGhpcy5fdGFibGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gTWVzc2FnZUJ5Q2xpZW50LlR5cGVDYXNlLmZvcm07XG4gICAgfVxuICAgIHRoaXMuX2Zvcm0gPSB2YWx1ZTtcbiAgfVxuICBnZXQgYnV0dG9ucygpOiBwcm90b1B1YlYxTW9kZWxzMDEwLkJ1dHRvbnMgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9idXR0b25zO1xuICB9XG4gIHNldCBidXR0b25zKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDEwLkJ1dHRvbnMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fdGV4dCA9IHRoaXMuX2ZpbGUgPSB0aGlzLl9zdGlja2VyID0gdGhpcy5fbG9jYXRpb24gPSB0aGlzLl9saXZlTG9jYXRpb24gPSB0aGlzLl9wb2xsID0gdGhpcy5fZm9ybSA9IHRoaXMuX3NoYXJlVWlkID0gdGhpcy5fZm9ybVJlc3VsdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0ID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UgPSB0aGlzLl9jYWxsRXZlbnQgPSB0aGlzLl90YWJsZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBNZXNzYWdlQnlDbGllbnQuVHlwZUNhc2UuYnV0dG9ucztcbiAgICB9XG4gICAgdGhpcy5fYnV0dG9ucyA9IHZhbHVlO1xuICB9XG4gIGdldCBzaGFyZVVpZCgpOiBTaGFyZVVpZCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3NoYXJlVWlkO1xuICB9XG4gIHNldCBzaGFyZVVpZCh2YWx1ZTogU2hhcmVVaWQgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fdGV4dCA9IHRoaXMuX2ZpbGUgPSB0aGlzLl9zdGlja2VyID0gdGhpcy5fbG9jYXRpb24gPSB0aGlzLl9saXZlTG9jYXRpb24gPSB0aGlzLl9wb2xsID0gdGhpcy5fZm9ybSA9IHRoaXMuX2J1dHRvbnMgPSB0aGlzLl9mb3JtUmVzdWx0ID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZSA9IHRoaXMuX2NhbGxFdmVudCA9IHRoaXMuX3RhYmxlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IE1lc3NhZ2VCeUNsaWVudC5UeXBlQ2FzZS5zaGFyZVVpZDtcbiAgICB9XG4gICAgdGhpcy5fc2hhcmVVaWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZm9ybVJlc3VsdCgpOiBwcm90b1B1YlYxTW9kZWxzMDEwLkZvcm1SZXN1bHQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9mb3JtUmVzdWx0O1xuICB9XG4gIHNldCBmb3JtUmVzdWx0KHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDEwLkZvcm1SZXN1bHQgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fdGV4dCA9IHRoaXMuX2ZpbGUgPSB0aGlzLl9zdGlja2VyID0gdGhpcy5fbG9jYXRpb24gPSB0aGlzLl9saXZlTG9jYXRpb24gPSB0aGlzLl9wb2xsID0gdGhpcy5fZm9ybSA9IHRoaXMuX2J1dHRvbnMgPSB0aGlzLl9zaGFyZVVpZCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0ID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UgPSB0aGlzLl9jYWxsRXZlbnQgPSB0aGlzLl90YWJsZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBNZXNzYWdlQnlDbGllbnQuVHlwZUNhc2UuZm9ybVJlc3VsdDtcbiAgICB9XG4gICAgdGhpcy5fZm9ybVJlc3VsdCA9IHZhbHVlO1xuICB9XG4gIGdldCBzaGFyZVByaXZhdGVEYXRhUmVxdWVzdCgpOlxuICAgIHwgcHJvdG9QdWJWMU1vZGVsczAwOS5TaGFyZVByaXZhdGVEYXRhUmVxdWVzdFxuICAgIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc2hhcmVQcml2YXRlRGF0YVJlcXVlc3Q7XG4gIH1cbiAgc2V0IHNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0KFxuICAgIHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDA5LlNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0IHwgdW5kZWZpbmVkXG4gICkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl90ZXh0ID0gdGhpcy5fZmlsZSA9IHRoaXMuX3N0aWNrZXIgPSB0aGlzLl9sb2NhdGlvbiA9IHRoaXMuX2xpdmVMb2NhdGlvbiA9IHRoaXMuX3BvbGwgPSB0aGlzLl9mb3JtID0gdGhpcy5fYnV0dG9ucyA9IHRoaXMuX3NoYXJlVWlkID0gdGhpcy5fZm9ybVJlc3VsdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlID0gdGhpcy5fY2FsbEV2ZW50ID0gdGhpcy5fdGFibGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gTWVzc2FnZUJ5Q2xpZW50LlR5cGVDYXNlLnNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0O1xuICAgIH1cbiAgICB0aGlzLl9zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCA9IHZhbHVlO1xuICB9XG4gIGdldCBzaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZSgpOlxuICAgIHwgcHJvdG9QdWJWMU1vZGVsczAwOS5TaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZVxuICAgIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2U7XG4gIH1cbiAgc2V0IHNoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlKFxuICAgIHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDA5LlNoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlIHwgdW5kZWZpbmVkXG4gICkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl90ZXh0ID0gdGhpcy5fZmlsZSA9IHRoaXMuX3N0aWNrZXIgPSB0aGlzLl9sb2NhdGlvbiA9IHRoaXMuX2xpdmVMb2NhdGlvbiA9IHRoaXMuX3BvbGwgPSB0aGlzLl9mb3JtID0gdGhpcy5fYnV0dG9ucyA9IHRoaXMuX3NoYXJlVWlkID0gdGhpcy5fZm9ybVJlc3VsdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0ID0gdGhpcy5fY2FsbEV2ZW50ID0gdGhpcy5fdGFibGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gTWVzc2FnZUJ5Q2xpZW50LlR5cGVDYXNlLnNoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlO1xuICAgIH1cbiAgICB0aGlzLl9zaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZSA9IHZhbHVlO1xuICB9XG4gIGdldCBjYWxsRXZlbnQoKTogcHJvdG9QdWJWMU1vZGVsczAxMy5DYWxsRXZlbnQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9jYWxsRXZlbnQ7XG4gIH1cbiAgc2V0IGNhbGxFdmVudCh2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAxMy5DYWxsRXZlbnQgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fdGV4dCA9IHRoaXMuX2ZpbGUgPSB0aGlzLl9zdGlja2VyID0gdGhpcy5fbG9jYXRpb24gPSB0aGlzLl9saXZlTG9jYXRpb24gPSB0aGlzLl9wb2xsID0gdGhpcy5fZm9ybSA9IHRoaXMuX2J1dHRvbnMgPSB0aGlzLl9zaGFyZVVpZCA9IHRoaXMuX2Zvcm1SZXN1bHQgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlID0gdGhpcy5fdGFibGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gTWVzc2FnZUJ5Q2xpZW50LlR5cGVDYXNlLmNhbGxFdmVudDtcbiAgICB9XG4gICAgdGhpcy5fY2FsbEV2ZW50ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHRhYmxlKCk6IHByb3RvUHViVjFNb2RlbHMwMTAuVGFibGUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90YWJsZTtcbiAgfVxuICBzZXQgdGFibGUodmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMTAuVGFibGUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fdGV4dCA9IHRoaXMuX2ZpbGUgPSB0aGlzLl9zdGlja2VyID0gdGhpcy5fbG9jYXRpb24gPSB0aGlzLl9saXZlTG9jYXRpb24gPSB0aGlzLl9wb2xsID0gdGhpcy5fZm9ybSA9IHRoaXMuX2J1dHRvbnMgPSB0aGlzLl9zaGFyZVVpZCA9IHRoaXMuX2Zvcm1SZXN1bHQgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlID0gdGhpcy5fY2FsbEV2ZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IE1lc3NhZ2VCeUNsaWVudC5UeXBlQ2FzZS50YWJsZTtcbiAgICB9XG4gICAgdGhpcy5fdGFibGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBNZXNzYWdlQnlDbGllbnQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogTWVzc2FnZUJ5Q2xpZW50LkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFja2V0SWQ6IHRoaXMucGFja2V0SWQsXG4gICAgICB0bzogdGhpcy50byA/IHRoaXMudG8udG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIHJlcGx5VG9JZDogdGhpcy5yZXBseVRvSWQsXG4gICAgICBmb3J3YXJkRnJvbTogdGhpcy5mb3J3YXJkRnJvbSA/IHRoaXMuZm9yd2FyZEZyb20udG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGVuY3J5cHRlZDogdGhpcy5lbmNyeXB0ZWQsXG4gICAgICB0dGw6IHRoaXMudHRsLFxuICAgICAgdGhyZWFkOiB0aGlzLnRocmVhZCxcbiAgICAgIHNob3VsZEJlUXVpZXQ6IHRoaXMuc2hvdWxkQmVRdWlldCxcbiAgICAgIGdlbmVyYXRlZEJ5OiB0aGlzLmdlbmVyYXRlZEJ5ID8gdGhpcy5nZW5lcmF0ZWRCeS50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgdGV4dDogdGhpcy50ZXh0ID8gdGhpcy50ZXh0LnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBmaWxlOiB0aGlzLmZpbGUgPyB0aGlzLmZpbGUudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIHN0aWNrZXI6IHRoaXMuc3RpY2tlciA/IHRoaXMuc3RpY2tlci50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgbG9jYXRpb246IHRoaXMubG9jYXRpb24gPyB0aGlzLmxvY2F0aW9uLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBsaXZlTG9jYXRpb246IHRoaXMubGl2ZUxvY2F0aW9uXG4gICAgICAgID8gdGhpcy5saXZlTG9jYXRpb24udG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIHBvbGw6IHRoaXMucG9sbCA/IHRoaXMucG9sbC50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgZm9ybTogdGhpcy5mb3JtID8gdGhpcy5mb3JtLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBidXR0b25zOiB0aGlzLmJ1dHRvbnMgPyB0aGlzLmJ1dHRvbnMudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIHNoYXJlVWlkOiB0aGlzLnNoYXJlVWlkID8gdGhpcy5zaGFyZVVpZC50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgZm9ybVJlc3VsdDogdGhpcy5mb3JtUmVzdWx0ID8gdGhpcy5mb3JtUmVzdWx0LnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBzaGFyZVByaXZhdGVEYXRhUmVxdWVzdDogdGhpcy5zaGFyZVByaXZhdGVEYXRhUmVxdWVzdFxuICAgICAgICA/IHRoaXMuc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QudG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIHNoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlOiB0aGlzLnNoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlXG4gICAgICAgID8gdGhpcy5zaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZS50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgY2FsbEV2ZW50OiB0aGlzLmNhbGxFdmVudCA/IHRoaXMuY2FsbEV2ZW50LnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICB0YWJsZTogdGhpcy50YWJsZSA/IHRoaXMudGFibGUudG9PYmplY3QoKSA6IHVuZGVmaW5lZFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IE1lc3NhZ2VCeUNsaWVudC5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhY2tldElkOiB0aGlzLnBhY2tldElkLFxuICAgICAgdG86IHRoaXMudG8gPyB0aGlzLnRvLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIHJlcGx5VG9JZDogdGhpcy5yZXBseVRvSWQsXG4gICAgICBmb3J3YXJkRnJvbTogdGhpcy5mb3J3YXJkRnJvbVxuICAgICAgICA/IHRoaXMuZm9yd2FyZEZyb20udG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsLFxuICAgICAgZW5jcnlwdGVkOiB0aGlzLmVuY3J5cHRlZCxcbiAgICAgIHR0bDogdGhpcy50dGwsXG4gICAgICB0aHJlYWQ6IHRoaXMudGhyZWFkLFxuICAgICAgc2hvdWxkQmVRdWlldDogdGhpcy5zaG91bGRCZVF1aWV0LFxuICAgICAgZ2VuZXJhdGVkQnk6IHRoaXMuZ2VuZXJhdGVkQnlcbiAgICAgICAgPyB0aGlzLmdlbmVyYXRlZEJ5LnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbCxcbiAgICAgIHRleHQ6IHRoaXMudGV4dCA/IHRoaXMudGV4dC50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICBmaWxlOiB0aGlzLmZpbGUgPyB0aGlzLmZpbGUudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgc3RpY2tlcjogdGhpcy5zdGlja2VyID8gdGhpcy5zdGlja2VyLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIGxvY2F0aW9uOiB0aGlzLmxvY2F0aW9uID8gdGhpcy5sb2NhdGlvbi50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICBsaXZlTG9jYXRpb246IHRoaXMubGl2ZUxvY2F0aW9uXG4gICAgICAgID8gdGhpcy5saXZlTG9jYXRpb24udG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsLFxuICAgICAgcG9sbDogdGhpcy5wb2xsID8gdGhpcy5wb2xsLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIGZvcm06IHRoaXMuZm9ybSA/IHRoaXMuZm9ybS50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICBidXR0b25zOiB0aGlzLmJ1dHRvbnMgPyB0aGlzLmJ1dHRvbnMudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgc2hhcmVVaWQ6IHRoaXMuc2hhcmVVaWQgPyB0aGlzLnNoYXJlVWlkLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIGZvcm1SZXN1bHQ6IHRoaXMuZm9ybVJlc3VsdFxuICAgICAgICA/IHRoaXMuZm9ybVJlc3VsdC50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICBzaGFyZVByaXZhdGVEYXRhUmVxdWVzdDogdGhpcy5zaGFyZVByaXZhdGVEYXRhUmVxdWVzdFxuICAgICAgICA/IHRoaXMuc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QudG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsLFxuICAgICAgc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2U6IHRoaXMuc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2VcbiAgICAgICAgPyB0aGlzLnNoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbCxcbiAgICAgIGNhbGxFdmVudDogdGhpcy5jYWxsRXZlbnQgPyB0aGlzLmNhbGxFdmVudC50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICB0YWJsZTogdGhpcy50YWJsZSA/IHRoaXMudGFibGUudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBNZXNzYWdlQnlDbGllbnQge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIE1lc3NhZ2VCeUNsaWVudFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgcGFja2V0SWQ/OiBzdHJpbmc7XG4gICAgdG8/OiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5Bc09iamVjdDtcbiAgICByZXBseVRvSWQ/OiBzdHJpbmc7XG4gICAgZm9yd2FyZEZyb20/OiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5Bc09iamVjdDtcbiAgICBlbmNyeXB0ZWQ/OiBib29sZWFuO1xuICAgIHR0bD86IG51bWJlcjtcbiAgICB0aHJlYWQ/OiBzdHJpbmc7XG4gICAgc2hvdWxkQmVRdWlldD86IGJvb2xlYW47XG4gICAgZ2VuZXJhdGVkQnk/OiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5Bc09iamVjdDtcbiAgICB0ZXh0PzogVGV4dC5Bc09iamVjdDtcbiAgICBmaWxlPzogcHJvdG9QdWJWMU1vZGVsczAwMS5GaWxlLkFzT2JqZWN0O1xuICAgIHN0aWNrZXI/OiBwcm90b1B1YlYxTW9kZWxzMDA1LlN0aWNrZXIuQXNPYmplY3Q7XG4gICAgbG9jYXRpb24/OiBwcm90b1B1YlYxTW9kZWxzMDA2LkxvY2F0aW9uLkFzT2JqZWN0O1xuICAgIGxpdmVMb2NhdGlvbj86IHByb3RvUHViVjFNb2RlbHMwMDYuTGl2ZUxvY2F0aW9uLkFzT2JqZWN0O1xuICAgIHBvbGw/OiBwcm90b1B1YlYxTW9kZWxzMDExLlBvbGwuQXNPYmplY3Q7XG4gICAgZm9ybT86IHByb3RvUHViVjFNb2RlbHMwMTAuRm9ybS5Bc09iamVjdDtcbiAgICBidXR0b25zPzogcHJvdG9QdWJWMU1vZGVsczAxMC5CdXR0b25zLkFzT2JqZWN0O1xuICAgIHNoYXJlVWlkPzogU2hhcmVVaWQuQXNPYmplY3Q7XG4gICAgZm9ybVJlc3VsdD86IHByb3RvUHViVjFNb2RlbHMwMTAuRm9ybVJlc3VsdC5Bc09iamVjdDtcbiAgICBzaGFyZVByaXZhdGVEYXRhUmVxdWVzdD86IHByb3RvUHViVjFNb2RlbHMwMDkuU2hhcmVQcml2YXRlRGF0YVJlcXVlc3QuQXNPYmplY3Q7XG4gICAgc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2U/OiBwcm90b1B1YlYxTW9kZWxzMDA5LlNoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlLkFzT2JqZWN0O1xuICAgIGNhbGxFdmVudD86IHByb3RvUHViVjFNb2RlbHMwMTMuQ2FsbEV2ZW50LkFzT2JqZWN0O1xuICAgIHRhYmxlPzogcHJvdG9QdWJWMU1vZGVsczAxMC5UYWJsZS5Bc09iamVjdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBNZXNzYWdlQnlDbGllbnRcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHBhY2tldElkPzogc3RyaW5nO1xuICAgIHRvPzogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHJlcGx5VG9JZD86IHN0cmluZztcbiAgICBmb3J3YXJkRnJvbT86IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBlbmNyeXB0ZWQ/OiBib29sZWFuO1xuICAgIHR0bD86IG51bWJlcjtcbiAgICB0aHJlYWQ/OiBzdHJpbmc7XG4gICAgc2hvdWxkQmVRdWlldD86IGJvb2xlYW47XG4gICAgZ2VuZXJhdGVkQnk/OiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgdGV4dD86IFRleHQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIGZpbGU/OiBwcm90b1B1YlYxTW9kZWxzMDAxLkZpbGUuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHN0aWNrZXI/OiBwcm90b1B1YlYxTW9kZWxzMDA1LlN0aWNrZXIuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIGxvY2F0aW9uPzogcHJvdG9QdWJWMU1vZGVsczAwNi5Mb2NhdGlvbi5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgbGl2ZUxvY2F0aW9uPzogcHJvdG9QdWJWMU1vZGVsczAwNi5MaXZlTG9jYXRpb24uQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHBvbGw/OiBwcm90b1B1YlYxTW9kZWxzMDExLlBvbGwuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIGZvcm0/OiBwcm90b1B1YlYxTW9kZWxzMDEwLkZvcm0uQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIGJ1dHRvbnM/OiBwcm90b1B1YlYxTW9kZWxzMDEwLkJ1dHRvbnMuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHNoYXJlVWlkPzogU2hhcmVVaWQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIGZvcm1SZXN1bHQ/OiBwcm90b1B1YlYxTW9kZWxzMDEwLkZvcm1SZXN1bHQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0PzogcHJvdG9QdWJWMU1vZGVsczAwOS5TaGFyZVByaXZhdGVEYXRhUmVxdWVzdC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2U/OiBwcm90b1B1YlYxTW9kZWxzMDA5LlNoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBjYWxsRXZlbnQ/OiBwcm90b1B1YlYxTW9kZWxzMDEzLkNhbGxFdmVudC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgdGFibGU/OiBwcm90b1B1YlYxTW9kZWxzMDEwLlRhYmxlLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgfVxuICBleHBvcnQgZW51bSBUeXBlQ2FzZSB7XG4gICAgbm9uZSA9IDAsXG4gICAgdGV4dCA9IDEsXG4gICAgZmlsZSA9IDIsXG4gICAgc3RpY2tlciA9IDMsXG4gICAgbG9jYXRpb24gPSA0LFxuICAgIGxpdmVMb2NhdGlvbiA9IDUsXG4gICAgcG9sbCA9IDYsXG4gICAgZm9ybSA9IDcsXG4gICAgYnV0dG9ucyA9IDgsXG4gICAgc2hhcmVVaWQgPSA5LFxuICAgIGZvcm1SZXN1bHQgPSAxMCxcbiAgICBzaGFyZVByaXZhdGVEYXRhUmVxdWVzdCA9IDExLFxuICAgIHNoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlID0gMTIsXG4gICAgY2FsbEV2ZW50ID0gMTMsXG4gICAgdGFibGUgPSAxNFxuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3IgcHJvdG8ucHViLnYxLm1vZGVscy5NZXNzYWdlQnlCb3RcbiAqL1xuZXhwb3J0IGNsYXNzIE1lc3NhZ2VCeUJvdCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ3Byb3RvLnB1Yi52MS5tb2RlbHMuTWVzc2FnZUJ5Qm90JztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgTWVzc2FnZUJ5Qm90KCk7XG4gICAgTWVzc2FnZUJ5Qm90LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogTWVzc2FnZUJ5Qm90KSB7XG4gICAgX2luc3RhbmNlLnBhY2tldElkID0gX2luc3RhbmNlLnBhY2tldElkIHx8ICcnO1xuICAgIF9pbnN0YW5jZS5mcm9tID0gX2luc3RhbmNlLmZyb20gfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS50byA9IF9pbnN0YW5jZS50byB8fCB1bmRlZmluZWQ7XG4gICAgX2luc3RhbmNlLnJlcGx5VG9JZCA9IF9pbnN0YW5jZS5yZXBseVRvSWQgfHwgJzAnO1xuICAgIF9pbnN0YW5jZS5mb3J3YXJkRnJvbSA9IF9pbnN0YW5jZS5mb3J3YXJkRnJvbSB8fCB1bmRlZmluZWQ7XG4gICAgX2luc3RhbmNlLmVuY3J5cHRlZCA9IF9pbnN0YW5jZS5lbmNyeXB0ZWQgfHwgZmFsc2U7XG4gICAgX2luc3RhbmNlLnR0bCA9IF9pbnN0YW5jZS50dGwgfHwgMDtcbiAgICBfaW5zdGFuY2UudGhyZWFkID0gX2luc3RhbmNlLnRocmVhZCB8fCAnMCc7XG4gICAgX2luc3RhbmNlLnNob3VsZEJlUXVpZXQgPSBfaW5zdGFuY2Uuc2hvdWxkQmVRdWlldCB8fCBmYWxzZTtcbiAgICBfaW5zdGFuY2UubWVzc2FnZU1hcmt1cCA9IF9pbnN0YW5jZS5tZXNzYWdlTWFya3VwIHx8IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IE1lc3NhZ2VCeUJvdCxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UucGFja2V0SWQgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIF9pbnN0YW5jZS5mcm9tID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5mcm9tLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIF9pbnN0YW5jZS50byA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UudG8sXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgX2luc3RhbmNlLnJlcGx5VG9JZCA9IF9yZWFkZXIucmVhZEludDY0U3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgODpcbiAgICAgICAgICBfaW5zdGFuY2UuZm9yd2FyZEZyb20gPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmZvcndhcmRGcm9tLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICBfaW5zdGFuY2UuZW5jcnlwdGVkID0gX3JlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDIzOlxuICAgICAgICAgIF9pbnN0YW5jZS50dGwgPSBfcmVhZGVyLnJlYWRJbnQzMigpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI4OlxuICAgICAgICAgIF9pbnN0YW5jZS50aHJlYWQgPSBfcmVhZGVyLnJlYWRJbnQ2NFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI5OlxuICAgICAgICAgIF9pbnN0YW5jZS5zaG91bGRCZVF1aWV0ID0gX3JlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM0OlxuICAgICAgICAgIF9pbnN0YW5jZS5tZXNzYWdlTWFya3VwID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMTQuTWVzc2FnZU1hcmt1cCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UubWVzc2FnZU1hcmt1cCxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMTQuTWVzc2FnZU1hcmt1cC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDExOlxuICAgICAgICAgIF9pbnN0YW5jZS50ZXh0ID0gbmV3IFRleHQoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKF9pbnN0YW5jZS50ZXh0LCBUZXh0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgX2luc3RhbmNlLmZpbGUgPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMS5GaWxlKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5maWxlLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMS5GaWxlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgX2luc3RhbmNlLnN0aWNrZXIgPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAwNS5TdGlja2VyKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5zdGlja2VyLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwNS5TdGlja2VyLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTQ6XG4gICAgICAgICAgX2luc3RhbmNlLmxvY2F0aW9uID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDYuTG9jYXRpb24oKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmxvY2F0aW9uLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwNi5Mb2NhdGlvbi5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE4OlxuICAgICAgICAgIF9pbnN0YW5jZS5mb3JtID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMTAuRm9ybSgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuZm9ybSxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMTAuRm9ybS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDIwOlxuICAgICAgICAgIF9pbnN0YW5jZS5idXR0b25zID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMTAuQnV0dG9ucygpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuYnV0dG9ucyxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMTAuQnV0dG9ucy5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDIxOlxuICAgICAgICAgIF9pbnN0YW5jZS5zaGFyZVVpZCA9IG5ldyBTaGFyZVVpZCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2Uuc2hhcmVVaWQsXG4gICAgICAgICAgICBTaGFyZVVpZC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI2OlxuICAgICAgICAgIF9pbnN0YW5jZS5zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDA5LlNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0KCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDkuU2hhcmVQcml2YXRlRGF0YVJlcXVlc3RcbiAgICAgICAgICAgICAgLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTk6XG4gICAgICAgICAgX2luc3RhbmNlLmJvdFNwZWNpZmljUGVyc2lzdGVudEV2ZW50ID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDguQm90U3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmJvdFNwZWNpZmljUGVyc2lzdGVudEV2ZW50LFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwOC5Cb3RTcGVjaWZpY1BlcnNpc3RlbnRFdmVudFxuICAgICAgICAgICAgICAuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgICBfaW5zdGFuY2UudGFibGUgPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAxMC5UYWJsZSgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UudGFibGUsXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDEwLlRhYmxlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBNZXNzYWdlQnlCb3QucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBNZXNzYWdlQnlCb3QsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UucGFja2V0SWQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLnBhY2tldElkKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5mcm9tKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgNSxcbiAgICAgICAgX2luc3RhbmNlLmZyb20gYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS50bykge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDYsXG4gICAgICAgIF9pbnN0YW5jZS50byBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnJlcGx5VG9JZCkge1xuICAgICAgX3dyaXRlci53cml0ZUludDY0U3RyaW5nKDcsIF9pbnN0YW5jZS5yZXBseVRvSWQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmZvcndhcmRGcm9tKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgOCxcbiAgICAgICAgX2luc3RhbmNlLmZvcndhcmRGcm9tIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZW5jcnlwdGVkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlQm9vbCgxMCwgX2luc3RhbmNlLmVuY3J5cHRlZCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UudHRsKSB7XG4gICAgICBfd3JpdGVyLndyaXRlSW50MzIoMjMsIF9pbnN0YW5jZS50dGwpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnRocmVhZCkge1xuICAgICAgX3dyaXRlci53cml0ZUludDY0U3RyaW5nKDI4LCBfaW5zdGFuY2UudGhyZWFkKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5zaG91bGRCZVF1aWV0KSB7XG4gICAgICBfd3JpdGVyLndyaXRlQm9vbCgyOSwgX2luc3RhbmNlLnNob3VsZEJlUXVpZXQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLm1lc3NhZ2VNYXJrdXApIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAzNCxcbiAgICAgICAgX2luc3RhbmNlLm1lc3NhZ2VNYXJrdXAgYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDE0Lk1lc3NhZ2VNYXJrdXAuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UudGV4dCkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDExLFxuICAgICAgICBfaW5zdGFuY2UudGV4dCBhcyBhbnksXG4gICAgICAgIFRleHQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZmlsZSkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDEyLFxuICAgICAgICBfaW5zdGFuY2UuZmlsZSBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDEuRmlsZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5zdGlja2VyKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMTMsXG4gICAgICAgIF9pbnN0YW5jZS5zdGlja2VyIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwNS5TdGlja2VyLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmxvY2F0aW9uKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMTQsXG4gICAgICAgIF9pbnN0YW5jZS5sb2NhdGlvbiBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDYuTG9jYXRpb24uc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZm9ybSkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDE4LFxuICAgICAgICBfaW5zdGFuY2UuZm9ybSBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMTAuRm9ybS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5idXR0b25zKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMjAsXG4gICAgICAgIF9pbnN0YW5jZS5idXR0b25zIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxMC5CdXR0b25zLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnNoYXJlVWlkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMjEsXG4gICAgICAgIF9pbnN0YW5jZS5zaGFyZVVpZCBhcyBhbnksXG4gICAgICAgIFNoYXJlVWlkLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0KSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMjYsXG4gICAgICAgIF9pbnN0YW5jZS5zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDkuU2hhcmVQcml2YXRlRGF0YVJlcXVlc3Quc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuYm90U3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAxOSxcbiAgICAgICAgX2luc3RhbmNlLmJvdFNwZWNpZmljUGVyc2lzdGVudEV2ZW50IGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwOC5Cb3RTcGVjaWZpY1BlcnNpc3RlbnRFdmVudC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS50YWJsZSkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDMyLFxuICAgICAgICBfaW5zdGFuY2UudGFibGUgYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDEwLlRhYmxlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3BhY2tldElkPzogc3RyaW5nO1xuICBwcml2YXRlIF9mcm9tPzogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQ7XG4gIHByaXZhdGUgX3RvPzogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQ7XG4gIHByaXZhdGUgX3JlcGx5VG9JZD86IHN0cmluZztcbiAgcHJpdmF0ZSBfZm9yd2FyZEZyb20/OiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZDtcbiAgcHJpdmF0ZSBfZW5jcnlwdGVkPzogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfdHRsPzogbnVtYmVyO1xuICBwcml2YXRlIF90aHJlYWQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3Nob3VsZEJlUXVpZXQ/OiBib29sZWFuO1xuICBwcml2YXRlIF9tZXNzYWdlTWFya3VwPzogcHJvdG9QdWJWMU1vZGVsczAxNC5NZXNzYWdlTWFya3VwO1xuICBwcml2YXRlIF90ZXh0PzogVGV4dDtcbiAgcHJpdmF0ZSBfZmlsZT86IHByb3RvUHViVjFNb2RlbHMwMDEuRmlsZTtcbiAgcHJpdmF0ZSBfc3RpY2tlcj86IHByb3RvUHViVjFNb2RlbHMwMDUuU3RpY2tlcjtcbiAgcHJpdmF0ZSBfbG9jYXRpb24/OiBwcm90b1B1YlYxTW9kZWxzMDA2LkxvY2F0aW9uO1xuICBwcml2YXRlIF9mb3JtPzogcHJvdG9QdWJWMU1vZGVsczAxMC5Gb3JtO1xuICBwcml2YXRlIF9idXR0b25zPzogcHJvdG9QdWJWMU1vZGVsczAxMC5CdXR0b25zO1xuICBwcml2YXRlIF9zaGFyZVVpZD86IFNoYXJlVWlkO1xuICBwcml2YXRlIF9zaGFyZVByaXZhdGVEYXRhUmVxdWVzdD86IHByb3RvUHViVjFNb2RlbHMwMDkuU2hhcmVQcml2YXRlRGF0YVJlcXVlc3Q7XG4gIHByaXZhdGUgX2JvdFNwZWNpZmljUGVyc2lzdGVudEV2ZW50PzogcHJvdG9QdWJWMU1vZGVsczAwOC5Cb3RTcGVjaWZpY1BlcnNpc3RlbnRFdmVudDtcbiAgcHJpdmF0ZSBfdGFibGU/OiBwcm90b1B1YlYxTW9kZWxzMDEwLlRhYmxlO1xuXG4gIHByaXZhdGUgX3R5cGU6IE1lc3NhZ2VCeUJvdC5UeXBlQ2FzZSA9IE1lc3NhZ2VCeUJvdC5UeXBlQ2FzZS5ub25lO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgTWVzc2FnZUJ5Qm90IHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPE1lc3NhZ2VCeUJvdC5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5wYWNrZXRJZCA9IF92YWx1ZS5wYWNrZXRJZDtcbiAgICB0aGlzLmZyb20gPSBfdmFsdWUuZnJvbVxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQoX3ZhbHVlLmZyb20pXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnRvID0gX3ZhbHVlLnRvID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkKF92YWx1ZS50bykgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5yZXBseVRvSWQgPSBfdmFsdWUucmVwbHlUb0lkO1xuICAgIHRoaXMuZm9yd2FyZEZyb20gPSBfdmFsdWUuZm9yd2FyZEZyb21cbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkKF92YWx1ZS5mb3J3YXJkRnJvbSlcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuZW5jcnlwdGVkID0gX3ZhbHVlLmVuY3J5cHRlZDtcbiAgICB0aGlzLnR0bCA9IF92YWx1ZS50dGw7XG4gICAgdGhpcy50aHJlYWQgPSBfdmFsdWUudGhyZWFkO1xuICAgIHRoaXMuc2hvdWxkQmVRdWlldCA9IF92YWx1ZS5zaG91bGRCZVF1aWV0O1xuICAgIHRoaXMubWVzc2FnZU1hcmt1cCA9IF92YWx1ZS5tZXNzYWdlTWFya3VwXG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDE0Lk1lc3NhZ2VNYXJrdXAoX3ZhbHVlLm1lc3NhZ2VNYXJrdXApXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnRleHQgPSBfdmFsdWUudGV4dCA/IG5ldyBUZXh0KF92YWx1ZS50ZXh0KSA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmZpbGUgPSBfdmFsdWUuZmlsZVxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMS5GaWxlKF92YWx1ZS5maWxlKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5zdGlja2VyID0gX3ZhbHVlLnN0aWNrZXJcbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMDUuU3RpY2tlcihfdmFsdWUuc3RpY2tlcilcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMubG9jYXRpb24gPSBfdmFsdWUubG9jYXRpb25cbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMDYuTG9jYXRpb24oX3ZhbHVlLmxvY2F0aW9uKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5mb3JtID0gX3ZhbHVlLmZvcm1cbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMTAuRm9ybShfdmFsdWUuZm9ybSlcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuYnV0dG9ucyA9IF92YWx1ZS5idXR0b25zXG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDEwLkJ1dHRvbnMoX3ZhbHVlLmJ1dHRvbnMpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNoYXJlVWlkID0gX3ZhbHVlLnNoYXJlVWlkID8gbmV3IFNoYXJlVWlkKF92YWx1ZS5zaGFyZVVpZCkgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCA9IF92YWx1ZS5zaGFyZVByaXZhdGVEYXRhUmVxdWVzdFxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAwOS5TaGFyZVByaXZhdGVEYXRhUmVxdWVzdChcbiAgICAgICAgICBfdmFsdWUuc2hhcmVQcml2YXRlRGF0YVJlcXVlc3RcbiAgICAgICAgKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5ib3RTcGVjaWZpY1BlcnNpc3RlbnRFdmVudCA9IF92YWx1ZS5ib3RTcGVjaWZpY1BlcnNpc3RlbnRFdmVudFxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAwOC5Cb3RTcGVjaWZpY1BlcnNpc3RlbnRFdmVudChcbiAgICAgICAgICBfdmFsdWUuYm90U3BlY2lmaWNQZXJzaXN0ZW50RXZlbnRcbiAgICAgICAgKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy50YWJsZSA9IF92YWx1ZS50YWJsZVxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAxMC5UYWJsZShfdmFsdWUudGFibGUpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICBNZXNzYWdlQnlCb3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBwYWNrZXRJZCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wYWNrZXRJZDtcbiAgfVxuICBzZXQgcGFja2V0SWQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3BhY2tldElkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGZyb20oKTogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9mcm9tO1xuICB9XG4gIHNldCBmcm9tKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZCB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2Zyb20gPSB2YWx1ZTtcbiAgfVxuICBnZXQgdG8oKTogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90bztcbiAgfVxuICBzZXQgdG8odmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdG8gPSB2YWx1ZTtcbiAgfVxuICBnZXQgcmVwbHlUb0lkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcGx5VG9JZDtcbiAgfVxuICBzZXQgcmVwbHlUb0lkKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9yZXBseVRvSWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZm9yd2FyZEZyb20oKTogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9mb3J3YXJkRnJvbTtcbiAgfVxuICBzZXQgZm9yd2FyZEZyb20odmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZm9yd2FyZEZyb20gPSB2YWx1ZTtcbiAgfVxuICBnZXQgZW5jcnlwdGVkKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9lbmNyeXB0ZWQ7XG4gIH1cbiAgc2V0IGVuY3J5cHRlZCh2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2VuY3J5cHRlZCA9IHZhbHVlO1xuICB9XG4gIGdldCB0dGwoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdHRsO1xuICB9XG4gIHNldCB0dGwodmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3R0bCA9IHZhbHVlO1xuICB9XG4gIGdldCB0aHJlYWQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdGhyZWFkO1xuICB9XG4gIHNldCB0aHJlYWQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3RocmVhZCA9IHZhbHVlO1xuICB9XG4gIGdldCBzaG91bGRCZVF1aWV0KCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zaG91bGRCZVF1aWV0O1xuICB9XG4gIHNldCBzaG91bGRCZVF1aWV0KHZhbHVlOiBib29sZWFuIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fc2hvdWxkQmVRdWlldCA9IHZhbHVlO1xuICB9XG4gIGdldCBtZXNzYWdlTWFya3VwKCk6IHByb3RvUHViVjFNb2RlbHMwMTQuTWVzc2FnZU1hcmt1cCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX21lc3NhZ2VNYXJrdXA7XG4gIH1cbiAgc2V0IG1lc3NhZ2VNYXJrdXAodmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMTQuTWVzc2FnZU1hcmt1cCB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX21lc3NhZ2VNYXJrdXAgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdGV4dCgpOiBUZXh0IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdGV4dDtcbiAgfVxuICBzZXQgdGV4dCh2YWx1ZTogVGV4dCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9maWxlID0gdGhpcy5fc3RpY2tlciA9IHRoaXMuX2xvY2F0aW9uID0gdGhpcy5fZm9ybSA9IHRoaXMuX2J1dHRvbnMgPSB0aGlzLl9zaGFyZVVpZCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0ID0gdGhpcy5fYm90U3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQgPSB0aGlzLl90YWJsZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBNZXNzYWdlQnlCb3QuVHlwZUNhc2UudGV4dDtcbiAgICB9XG4gICAgdGhpcy5fdGV4dCA9IHZhbHVlO1xuICB9XG4gIGdldCBmaWxlKCk6IHByb3RvUHViVjFNb2RlbHMwMDEuRmlsZSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbGU7XG4gIH1cbiAgc2V0IGZpbGUodmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMDEuRmlsZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl90ZXh0ID0gdGhpcy5fc3RpY2tlciA9IHRoaXMuX2xvY2F0aW9uID0gdGhpcy5fZm9ybSA9IHRoaXMuX2J1dHRvbnMgPSB0aGlzLl9zaGFyZVVpZCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0ID0gdGhpcy5fYm90U3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQgPSB0aGlzLl90YWJsZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBNZXNzYWdlQnlCb3QuVHlwZUNhc2UuZmlsZTtcbiAgICB9XG4gICAgdGhpcy5fZmlsZSA9IHZhbHVlO1xuICB9XG4gIGdldCBzdGlja2VyKCk6IHByb3RvUHViVjFNb2RlbHMwMDUuU3RpY2tlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3N0aWNrZXI7XG4gIH1cbiAgc2V0IHN0aWNrZXIodmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMDUuU3RpY2tlciB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl90ZXh0ID0gdGhpcy5fZmlsZSA9IHRoaXMuX2xvY2F0aW9uID0gdGhpcy5fZm9ybSA9IHRoaXMuX2J1dHRvbnMgPSB0aGlzLl9zaGFyZVVpZCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0ID0gdGhpcy5fYm90U3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQgPSB0aGlzLl90YWJsZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBNZXNzYWdlQnlCb3QuVHlwZUNhc2Uuc3RpY2tlcjtcbiAgICB9XG4gICAgdGhpcy5fc3RpY2tlciA9IHZhbHVlO1xuICB9XG4gIGdldCBsb2NhdGlvbigpOiBwcm90b1B1YlYxTW9kZWxzMDA2LkxvY2F0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbG9jYXRpb247XG4gIH1cbiAgc2V0IGxvY2F0aW9uKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDA2LkxvY2F0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3RleHQgPSB0aGlzLl9maWxlID0gdGhpcy5fc3RpY2tlciA9IHRoaXMuX2Zvcm0gPSB0aGlzLl9idXR0b25zID0gdGhpcy5fc2hhcmVVaWQgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCA9IHRoaXMuX2JvdFNwZWNpZmljUGVyc2lzdGVudEV2ZW50ID0gdGhpcy5fdGFibGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gTWVzc2FnZUJ5Qm90LlR5cGVDYXNlLmxvY2F0aW9uO1xuICAgIH1cbiAgICB0aGlzLl9sb2NhdGlvbiA9IHZhbHVlO1xuICB9XG4gIGdldCBmb3JtKCk6IHByb3RvUHViVjFNb2RlbHMwMTAuRm9ybSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2Zvcm07XG4gIH1cbiAgc2V0IGZvcm0odmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMTAuRm9ybSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl90ZXh0ID0gdGhpcy5fZmlsZSA9IHRoaXMuX3N0aWNrZXIgPSB0aGlzLl9sb2NhdGlvbiA9IHRoaXMuX2J1dHRvbnMgPSB0aGlzLl9zaGFyZVVpZCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0ID0gdGhpcy5fYm90U3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQgPSB0aGlzLl90YWJsZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBNZXNzYWdlQnlCb3QuVHlwZUNhc2UuZm9ybTtcbiAgICB9XG4gICAgdGhpcy5fZm9ybSA9IHZhbHVlO1xuICB9XG4gIGdldCBidXR0b25zKCk6IHByb3RvUHViVjFNb2RlbHMwMTAuQnV0dG9ucyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2J1dHRvbnM7XG4gIH1cbiAgc2V0IGJ1dHRvbnModmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMTAuQnV0dG9ucyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl90ZXh0ID0gdGhpcy5fZmlsZSA9IHRoaXMuX3N0aWNrZXIgPSB0aGlzLl9sb2NhdGlvbiA9IHRoaXMuX2Zvcm0gPSB0aGlzLl9zaGFyZVVpZCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0ID0gdGhpcy5fYm90U3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQgPSB0aGlzLl90YWJsZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBNZXNzYWdlQnlCb3QuVHlwZUNhc2UuYnV0dG9ucztcbiAgICB9XG4gICAgdGhpcy5fYnV0dG9ucyA9IHZhbHVlO1xuICB9XG4gIGdldCBzaGFyZVVpZCgpOiBTaGFyZVVpZCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3NoYXJlVWlkO1xuICB9XG4gIHNldCBzaGFyZVVpZCh2YWx1ZTogU2hhcmVVaWQgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fdGV4dCA9IHRoaXMuX2ZpbGUgPSB0aGlzLl9zdGlja2VyID0gdGhpcy5fbG9jYXRpb24gPSB0aGlzLl9mb3JtID0gdGhpcy5fYnV0dG9ucyA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0ID0gdGhpcy5fYm90U3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQgPSB0aGlzLl90YWJsZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBNZXNzYWdlQnlCb3QuVHlwZUNhc2Uuc2hhcmVVaWQ7XG4gICAgfVxuICAgIHRoaXMuX3NoYXJlVWlkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0KCk6XG4gICAgfCBwcm90b1B1YlYxTW9kZWxzMDA5LlNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0XG4gICAgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zaGFyZVByaXZhdGVEYXRhUmVxdWVzdDtcbiAgfVxuICBzZXQgc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QoXG4gICAgdmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMDkuU2hhcmVQcml2YXRlRGF0YVJlcXVlc3QgfCB1bmRlZmluZWRcbiAgKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3RleHQgPSB0aGlzLl9maWxlID0gdGhpcy5fc3RpY2tlciA9IHRoaXMuX2xvY2F0aW9uID0gdGhpcy5fZm9ybSA9IHRoaXMuX2J1dHRvbnMgPSB0aGlzLl9zaGFyZVVpZCA9IHRoaXMuX2JvdFNwZWNpZmljUGVyc2lzdGVudEV2ZW50ID0gdGhpcy5fdGFibGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gTWVzc2FnZUJ5Qm90LlR5cGVDYXNlLnNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0O1xuICAgIH1cbiAgICB0aGlzLl9zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCA9IHZhbHVlO1xuICB9XG4gIGdldCBib3RTcGVjaWZpY1BlcnNpc3RlbnRFdmVudCgpOlxuICAgIHwgcHJvdG9QdWJWMU1vZGVsczAwOC5Cb3RTcGVjaWZpY1BlcnNpc3RlbnRFdmVudFxuICAgIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fYm90U3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQ7XG4gIH1cbiAgc2V0IGJvdFNwZWNpZmljUGVyc2lzdGVudEV2ZW50KFxuICAgIHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDA4LkJvdFNwZWNpZmljUGVyc2lzdGVudEV2ZW50IHwgdW5kZWZpbmVkXG4gICkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl90ZXh0ID0gdGhpcy5fZmlsZSA9IHRoaXMuX3N0aWNrZXIgPSB0aGlzLl9sb2NhdGlvbiA9IHRoaXMuX2Zvcm0gPSB0aGlzLl9idXR0b25zID0gdGhpcy5fc2hhcmVVaWQgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCA9IHRoaXMuX3RhYmxlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IE1lc3NhZ2VCeUJvdC5UeXBlQ2FzZS5ib3RTcGVjaWZpY1BlcnNpc3RlbnRFdmVudDtcbiAgICB9XG4gICAgdGhpcy5fYm90U3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdGFibGUoKTogcHJvdG9QdWJWMU1vZGVsczAxMC5UYWJsZSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3RhYmxlO1xuICB9XG4gIHNldCB0YWJsZSh2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAxMC5UYWJsZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl90ZXh0ID0gdGhpcy5fZmlsZSA9IHRoaXMuX3N0aWNrZXIgPSB0aGlzLl9sb2NhdGlvbiA9IHRoaXMuX2Zvcm0gPSB0aGlzLl9idXR0b25zID0gdGhpcy5fc2hhcmVVaWQgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCA9IHRoaXMuX2JvdFNwZWNpZmljUGVyc2lzdGVudEV2ZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IE1lc3NhZ2VCeUJvdC5UeXBlQ2FzZS50YWJsZTtcbiAgICB9XG4gICAgdGhpcy5fdGFibGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBNZXNzYWdlQnlCb3Quc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogTWVzc2FnZUJ5Qm90LkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFja2V0SWQ6IHRoaXMucGFja2V0SWQsXG4gICAgICBmcm9tOiB0aGlzLmZyb20gPyB0aGlzLmZyb20udG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIHRvOiB0aGlzLnRvID8gdGhpcy50by50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgcmVwbHlUb0lkOiB0aGlzLnJlcGx5VG9JZCxcbiAgICAgIGZvcndhcmRGcm9tOiB0aGlzLmZvcndhcmRGcm9tID8gdGhpcy5mb3J3YXJkRnJvbS50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgZW5jcnlwdGVkOiB0aGlzLmVuY3J5cHRlZCxcbiAgICAgIHR0bDogdGhpcy50dGwsXG4gICAgICB0aHJlYWQ6IHRoaXMudGhyZWFkLFxuICAgICAgc2hvdWxkQmVRdWlldDogdGhpcy5zaG91bGRCZVF1aWV0LFxuICAgICAgbWVzc2FnZU1hcmt1cDogdGhpcy5tZXNzYWdlTWFya3VwXG4gICAgICAgID8gdGhpcy5tZXNzYWdlTWFya3VwLnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICB0ZXh0OiB0aGlzLnRleHQgPyB0aGlzLnRleHQudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGZpbGU6IHRoaXMuZmlsZSA/IHRoaXMuZmlsZS50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgc3RpY2tlcjogdGhpcy5zdGlja2VyID8gdGhpcy5zdGlja2VyLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBsb2NhdGlvbjogdGhpcy5sb2NhdGlvbiA/IHRoaXMubG9jYXRpb24udG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGZvcm06IHRoaXMuZm9ybSA/IHRoaXMuZm9ybS50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgYnV0dG9uczogdGhpcy5idXR0b25zID8gdGhpcy5idXR0b25zLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBzaGFyZVVpZDogdGhpcy5zaGFyZVVpZCA/IHRoaXMuc2hhcmVVaWQudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIHNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0OiB0aGlzLnNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0XG4gICAgICAgID8gdGhpcy5zaGFyZVByaXZhdGVEYXRhUmVxdWVzdC50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgYm90U3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQ6IHRoaXMuYm90U3BlY2lmaWNQZXJzaXN0ZW50RXZlbnRcbiAgICAgICAgPyB0aGlzLmJvdFNwZWNpZmljUGVyc2lzdGVudEV2ZW50LnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICB0YWJsZTogdGhpcy50YWJsZSA/IHRoaXMudGFibGUudG9PYmplY3QoKSA6IHVuZGVmaW5lZFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IE1lc3NhZ2VCeUJvdC5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhY2tldElkOiB0aGlzLnBhY2tldElkLFxuICAgICAgZnJvbTogdGhpcy5mcm9tID8gdGhpcy5mcm9tLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIHRvOiB0aGlzLnRvID8gdGhpcy50by50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICByZXBseVRvSWQ6IHRoaXMucmVwbHlUb0lkLFxuICAgICAgZm9yd2FyZEZyb206IHRoaXMuZm9yd2FyZEZyb21cbiAgICAgICAgPyB0aGlzLmZvcndhcmRGcm9tLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbCxcbiAgICAgIGVuY3J5cHRlZDogdGhpcy5lbmNyeXB0ZWQsXG4gICAgICB0dGw6IHRoaXMudHRsLFxuICAgICAgdGhyZWFkOiB0aGlzLnRocmVhZCxcbiAgICAgIHNob3VsZEJlUXVpZXQ6IHRoaXMuc2hvdWxkQmVRdWlldCxcbiAgICAgIG1lc3NhZ2VNYXJrdXA6IHRoaXMubWVzc2FnZU1hcmt1cFxuICAgICAgICA/IHRoaXMubWVzc2FnZU1hcmt1cC50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICB0ZXh0OiB0aGlzLnRleHQgPyB0aGlzLnRleHQudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgZmlsZTogdGhpcy5maWxlID8gdGhpcy5maWxlLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIHN0aWNrZXI6IHRoaXMuc3RpY2tlciA/IHRoaXMuc3RpY2tlci50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICBsb2NhdGlvbjogdGhpcy5sb2NhdGlvbiA/IHRoaXMubG9jYXRpb24udG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgZm9ybTogdGhpcy5mb3JtID8gdGhpcy5mb3JtLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIGJ1dHRvbnM6IHRoaXMuYnV0dG9ucyA/IHRoaXMuYnV0dG9ucy50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICBzaGFyZVVpZDogdGhpcy5zaGFyZVVpZCA/IHRoaXMuc2hhcmVVaWQudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgc2hhcmVQcml2YXRlRGF0YVJlcXVlc3Q6IHRoaXMuc2hhcmVQcml2YXRlRGF0YVJlcXVlc3RcbiAgICAgICAgPyB0aGlzLnNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0LnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbCxcbiAgICAgIGJvdFNwZWNpZmljUGVyc2lzdGVudEV2ZW50OiB0aGlzLmJvdFNwZWNpZmljUGVyc2lzdGVudEV2ZW50XG4gICAgICAgID8gdGhpcy5ib3RTcGVjaWZpY1BlcnNpc3RlbnRFdmVudC50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICB0YWJsZTogdGhpcy50YWJsZSA/IHRoaXMudGFibGUudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBNZXNzYWdlQnlCb3Qge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIE1lc3NhZ2VCeUJvdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgcGFja2V0SWQ/OiBzdHJpbmc7XG4gICAgZnJvbT86IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLkFzT2JqZWN0O1xuICAgIHRvPzogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuQXNPYmplY3Q7XG4gICAgcmVwbHlUb0lkPzogc3RyaW5nO1xuICAgIGZvcndhcmRGcm9tPzogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuQXNPYmplY3Q7XG4gICAgZW5jcnlwdGVkPzogYm9vbGVhbjtcbiAgICB0dGw/OiBudW1iZXI7XG4gICAgdGhyZWFkPzogc3RyaW5nO1xuICAgIHNob3VsZEJlUXVpZXQ/OiBib29sZWFuO1xuICAgIG1lc3NhZ2VNYXJrdXA/OiBwcm90b1B1YlYxTW9kZWxzMDE0Lk1lc3NhZ2VNYXJrdXAuQXNPYmplY3Q7XG4gICAgdGV4dD86IFRleHQuQXNPYmplY3Q7XG4gICAgZmlsZT86IHByb3RvUHViVjFNb2RlbHMwMDEuRmlsZS5Bc09iamVjdDtcbiAgICBzdGlja2VyPzogcHJvdG9QdWJWMU1vZGVsczAwNS5TdGlja2VyLkFzT2JqZWN0O1xuICAgIGxvY2F0aW9uPzogcHJvdG9QdWJWMU1vZGVsczAwNi5Mb2NhdGlvbi5Bc09iamVjdDtcbiAgICBmb3JtPzogcHJvdG9QdWJWMU1vZGVsczAxMC5Gb3JtLkFzT2JqZWN0O1xuICAgIGJ1dHRvbnM/OiBwcm90b1B1YlYxTW9kZWxzMDEwLkJ1dHRvbnMuQXNPYmplY3Q7XG4gICAgc2hhcmVVaWQ/OiBTaGFyZVVpZC5Bc09iamVjdDtcbiAgICBzaGFyZVByaXZhdGVEYXRhUmVxdWVzdD86IHByb3RvUHViVjFNb2RlbHMwMDkuU2hhcmVQcml2YXRlRGF0YVJlcXVlc3QuQXNPYmplY3Q7XG4gICAgYm90U3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQ/OiBwcm90b1B1YlYxTW9kZWxzMDA4LkJvdFNwZWNpZmljUGVyc2lzdGVudEV2ZW50LkFzT2JqZWN0O1xuICAgIHRhYmxlPzogcHJvdG9QdWJWMU1vZGVsczAxMC5UYWJsZS5Bc09iamVjdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBNZXNzYWdlQnlCb3RcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHBhY2tldElkPzogc3RyaW5nO1xuICAgIGZyb20/OiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgdG8/OiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgcmVwbHlUb0lkPzogc3RyaW5nO1xuICAgIGZvcndhcmRGcm9tPzogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIGVuY3J5cHRlZD86IGJvb2xlYW47XG4gICAgdHRsPzogbnVtYmVyO1xuICAgIHRocmVhZD86IHN0cmluZztcbiAgICBzaG91bGRCZVF1aWV0PzogYm9vbGVhbjtcbiAgICBtZXNzYWdlTWFya3VwPzogcHJvdG9QdWJWMU1vZGVsczAxNC5NZXNzYWdlTWFya3VwLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICB0ZXh0PzogVGV4dC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgZmlsZT86IHByb3RvUHViVjFNb2RlbHMwMDEuRmlsZS5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgc3RpY2tlcj86IHByb3RvUHViVjFNb2RlbHMwMDUuU3RpY2tlci5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgbG9jYXRpb24/OiBwcm90b1B1YlYxTW9kZWxzMDA2LkxvY2F0aW9uLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBmb3JtPzogcHJvdG9QdWJWMU1vZGVsczAxMC5Gb3JtLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBidXR0b25zPzogcHJvdG9QdWJWMU1vZGVsczAxMC5CdXR0b25zLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBzaGFyZVVpZD86IFNoYXJlVWlkLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBzaGFyZVByaXZhdGVEYXRhUmVxdWVzdD86IHByb3RvUHViVjFNb2RlbHMwMDkuU2hhcmVQcml2YXRlRGF0YVJlcXVlc3QuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIGJvdFNwZWNpZmljUGVyc2lzdGVudEV2ZW50PzogcHJvdG9QdWJWMU1vZGVsczAwOC5Cb3RTcGVjaWZpY1BlcnNpc3RlbnRFdmVudC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgdGFibGU/OiBwcm90b1B1YlYxTW9kZWxzMDEwLlRhYmxlLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgfVxuICBleHBvcnQgZW51bSBUeXBlQ2FzZSB7XG4gICAgbm9uZSA9IDAsXG4gICAgdGV4dCA9IDEsXG4gICAgZmlsZSA9IDIsXG4gICAgc3RpY2tlciA9IDMsXG4gICAgbG9jYXRpb24gPSA0LFxuICAgIGZvcm0gPSA1LFxuICAgIGJ1dHRvbnMgPSA2LFxuICAgIHNoYXJlVWlkID0gNyxcbiAgICBzaGFyZVByaXZhdGVEYXRhUmVxdWVzdCA9IDgsXG4gICAgYm90U3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQgPSA5LFxuICAgIHRhYmxlID0gMTBcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIHByb3RvLnB1Yi52MS5tb2RlbHMuTG9jYWxDaGF0TWVzc2FnZVxuICovXG5leHBvcnQgY2xhc3MgTG9jYWxDaGF0TWVzc2FnZSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ3Byb3RvLnB1Yi52MS5tb2RlbHMuTG9jYWxDaGF0TWVzc2FnZSc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IExvY2FsQ2hhdE1lc3NhZ2UoKTtcbiAgICBMb2NhbENoYXRNZXNzYWdlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogTG9jYWxDaGF0TWVzc2FnZSkge1xuICAgIF9pbnN0YW5jZS5mcm9tID0gX2luc3RhbmNlLmZyb20gfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5tZXNzYWdlQnlDbGllbnQgPSBfaW5zdGFuY2UubWVzc2FnZUJ5Q2xpZW50IHx8IHVuZGVmaW5lZDtcbiAgICBfaW5zdGFuY2UudGltZSA9IF9pbnN0YW5jZS50aW1lIHx8ICcwJztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IExvY2FsQ2hhdE1lc3NhZ2UsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLmZyb20gPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmZyb20sXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLm1lc3NhZ2VCeUNsaWVudCA9IG5ldyBNZXNzYWdlQnlDbGllbnQoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLm1lc3NhZ2VCeUNsaWVudCxcbiAgICAgICAgICAgIE1lc3NhZ2VCeUNsaWVudC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgX2luc3RhbmNlLnRpbWUgPSBfcmVhZGVyLnJlYWRJbnQ2NFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgTG9jYWxDaGF0TWVzc2FnZS5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IExvY2FsQ2hhdE1lc3NhZ2UsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UuZnJvbSkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDEsXG4gICAgICAgIF9pbnN0YW5jZS5mcm9tIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UubWVzc2FnZUJ5Q2xpZW50KSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMixcbiAgICAgICAgX2luc3RhbmNlLm1lc3NhZ2VCeUNsaWVudCBhcyBhbnksXG4gICAgICAgIE1lc3NhZ2VCeUNsaWVudC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS50aW1lKSB7XG4gICAgICBfd3JpdGVyLndyaXRlSW50NjRTdHJpbmcoMywgX2luc3RhbmNlLnRpbWUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2Zyb20/OiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZDtcbiAgcHJpdmF0ZSBfbWVzc2FnZUJ5Q2xpZW50PzogTWVzc2FnZUJ5Q2xpZW50O1xuICBwcml2YXRlIF90aW1lPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgTG9jYWxDaGF0TWVzc2FnZSB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxMb2NhbENoYXRNZXNzYWdlLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmZyb20gPSBfdmFsdWUuZnJvbVxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQoX3ZhbHVlLmZyb20pXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1lc3NhZ2VCeUNsaWVudCA9IF92YWx1ZS5tZXNzYWdlQnlDbGllbnRcbiAgICAgID8gbmV3IE1lc3NhZ2VCeUNsaWVudChfdmFsdWUubWVzc2FnZUJ5Q2xpZW50KVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy50aW1lID0gX3ZhbHVlLnRpbWU7XG4gICAgTG9jYWxDaGF0TWVzc2FnZS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGZyb20oKTogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9mcm9tO1xuICB9XG4gIHNldCBmcm9tKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZCB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2Zyb20gPSB2YWx1ZTtcbiAgfVxuICBnZXQgbWVzc2FnZUJ5Q2xpZW50KCk6IE1lc3NhZ2VCeUNsaWVudCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX21lc3NhZ2VCeUNsaWVudDtcbiAgfVxuICBzZXQgbWVzc2FnZUJ5Q2xpZW50KHZhbHVlOiBNZXNzYWdlQnlDbGllbnQgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9tZXNzYWdlQnlDbGllbnQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdGltZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90aW1lO1xuICB9XG4gIHNldCB0aW1lKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl90aW1lID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgTG9jYWxDaGF0TWVzc2FnZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBMb2NhbENoYXRNZXNzYWdlLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgZnJvbTogdGhpcy5mcm9tID8gdGhpcy5mcm9tLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBtZXNzYWdlQnlDbGllbnQ6IHRoaXMubWVzc2FnZUJ5Q2xpZW50XG4gICAgICAgID8gdGhpcy5tZXNzYWdlQnlDbGllbnQudG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIHRpbWU6IHRoaXMudGltZVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IExvY2FsQ2hhdE1lc3NhZ2UuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBmcm9tOiB0aGlzLmZyb20gPyB0aGlzLmZyb20udG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgbWVzc2FnZUJ5Q2xpZW50OiB0aGlzLm1lc3NhZ2VCeUNsaWVudFxuICAgICAgICA/IHRoaXMubWVzc2FnZUJ5Q2xpZW50LnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbCxcbiAgICAgIHRpbWU6IHRoaXMudGltZVxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgTG9jYWxDaGF0TWVzc2FnZSB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgTG9jYWxDaGF0TWVzc2FnZVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgZnJvbT86IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLkFzT2JqZWN0O1xuICAgIG1lc3NhZ2VCeUNsaWVudD86IE1lc3NhZ2VCeUNsaWVudC5Bc09iamVjdDtcbiAgICB0aW1lPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIExvY2FsQ2hhdE1lc3NhZ2VcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIGZyb20/OiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgbWVzc2FnZUJ5Q2xpZW50PzogTWVzc2FnZUJ5Q2xpZW50LkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICB0aW1lPzogc3RyaW5nO1xuICB9XG59XG4iXX0=