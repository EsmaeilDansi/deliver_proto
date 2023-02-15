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
            this._file = this._sticker = this._location = this._liveLocation = this._poll = this._transaction = this._form = this._persistEvent = this._buttons = this._shareUid = this._formResult = this._sharePrivateDataRequest = this._sharePrivateDataAcceptance = this._callEvent = this._table = this._paymentInformation = undefined;
            this._type = Message.TypeCase.text;
        }
        this._text = value;
    }
    get file() {
        return this._file;
    }
    set file(value) {
        if (value !== undefined && value !== null) {
            this._text = this._sticker = this._location = this._liveLocation = this._poll = this._transaction = this._form = this._persistEvent = this._buttons = this._shareUid = this._formResult = this._sharePrivateDataRequest = this._sharePrivateDataAcceptance = this._callEvent = this._table = this._paymentInformation = undefined;
            this._type = Message.TypeCase.file;
        }
        this._file = value;
    }
    get sticker() {
        return this._sticker;
    }
    set sticker(value) {
        if (value !== undefined && value !== null) {
            this._text = this._file = this._location = this._liveLocation = this._poll = this._transaction = this._form = this._persistEvent = this._buttons = this._shareUid = this._formResult = this._sharePrivateDataRequest = this._sharePrivateDataAcceptance = this._callEvent = this._table = this._paymentInformation = undefined;
            this._type = Message.TypeCase.sticker;
        }
        this._sticker = value;
    }
    get location() {
        return this._location;
    }
    set location(value) {
        if (value !== undefined && value !== null) {
            this._text = this._file = this._sticker = this._liveLocation = this._poll = this._transaction = this._form = this._persistEvent = this._buttons = this._shareUid = this._formResult = this._sharePrivateDataRequest = this._sharePrivateDataAcceptance = this._callEvent = this._table = this._paymentInformation = undefined;
            this._type = Message.TypeCase.location;
        }
        this._location = value;
    }
    get liveLocation() {
        return this._liveLocation;
    }
    set liveLocation(value) {
        if (value !== undefined && value !== null) {
            this._text = this._file = this._sticker = this._location = this._poll = this._transaction = this._form = this._persistEvent = this._buttons = this._shareUid = this._formResult = this._sharePrivateDataRequest = this._sharePrivateDataAcceptance = this._callEvent = this._table = this._paymentInformation = undefined;
            this._type = Message.TypeCase.liveLocation;
        }
        this._liveLocation = value;
    }
    get poll() {
        return this._poll;
    }
    set poll(value) {
        if (value !== undefined && value !== null) {
            this._text = this._file = this._sticker = this._location = this._liveLocation = this._transaction = this._form = this._persistEvent = this._buttons = this._shareUid = this._formResult = this._sharePrivateDataRequest = this._sharePrivateDataAcceptance = this._callEvent = this._table = this._paymentInformation = undefined;
            this._type = Message.TypeCase.poll;
        }
        this._poll = value;
    }
    get transaction() {
        return this._transaction;
    }
    set transaction(value) {
        if (value !== undefined && value !== null) {
            this._text = this._file = this._sticker = this._location = this._liveLocation = this._poll = this._form = this._persistEvent = this._buttons = this._shareUid = this._formResult = this._sharePrivateDataRequest = this._sharePrivateDataAcceptance = this._callEvent = this._table = this._paymentInformation = undefined;
            this._type = Message.TypeCase.transaction;
        }
        this._transaction = value;
    }
    get form() {
        return this._form;
    }
    set form(value) {
        if (value !== undefined && value !== null) {
            this._text = this._file = this._sticker = this._location = this._liveLocation = this._poll = this._transaction = this._persistEvent = this._buttons = this._shareUid = this._formResult = this._sharePrivateDataRequest = this._sharePrivateDataAcceptance = this._callEvent = this._table = this._paymentInformation = undefined;
            this._type = Message.TypeCase.form;
        }
        this._form = value;
    }
    get persistEvent() {
        return this._persistEvent;
    }
    set persistEvent(value) {
        if (value !== undefined && value !== null) {
            this._text = this._file = this._sticker = this._location = this._liveLocation = this._poll = this._transaction = this._form = this._buttons = this._shareUid = this._formResult = this._sharePrivateDataRequest = this._sharePrivateDataAcceptance = this._callEvent = this._table = this._paymentInformation = undefined;
            this._type = Message.TypeCase.persistEvent;
        }
        this._persistEvent = value;
    }
    get buttons() {
        return this._buttons;
    }
    set buttons(value) {
        if (value !== undefined && value !== null) {
            this._text = this._file = this._sticker = this._location = this._liveLocation = this._poll = this._transaction = this._form = this._persistEvent = this._shareUid = this._formResult = this._sharePrivateDataRequest = this._sharePrivateDataAcceptance = this._callEvent = this._table = this._paymentInformation = undefined;
            this._type = Message.TypeCase.buttons;
        }
        this._buttons = value;
    }
    get shareUid() {
        return this._shareUid;
    }
    set shareUid(value) {
        if (value !== undefined && value !== null) {
            this._text = this._file = this._sticker = this._location = this._liveLocation = this._poll = this._transaction = this._form = this._persistEvent = this._buttons = this._formResult = this._sharePrivateDataRequest = this._sharePrivateDataAcceptance = this._callEvent = this._table = this._paymentInformation = undefined;
            this._type = Message.TypeCase.shareUid;
        }
        this._shareUid = value;
    }
    get formResult() {
        return this._formResult;
    }
    set formResult(value) {
        if (value !== undefined && value !== null) {
            this._text = this._file = this._sticker = this._location = this._liveLocation = this._poll = this._transaction = this._form = this._persistEvent = this._buttons = this._shareUid = this._sharePrivateDataRequest = this._sharePrivateDataAcceptance = this._callEvent = this._table = this._paymentInformation = undefined;
            this._type = Message.TypeCase.formResult;
        }
        this._formResult = value;
    }
    get sharePrivateDataRequest() {
        return this._sharePrivateDataRequest;
    }
    set sharePrivateDataRequest(value) {
        if (value !== undefined && value !== null) {
            this._text = this._file = this._sticker = this._location = this._liveLocation = this._poll = this._transaction = this._form = this._persistEvent = this._buttons = this._shareUid = this._formResult = this._sharePrivateDataAcceptance = this._callEvent = this._table = this._paymentInformation = undefined;
            this._type = Message.TypeCase.sharePrivateDataRequest;
        }
        this._sharePrivateDataRequest = value;
    }
    get sharePrivateDataAcceptance() {
        return this._sharePrivateDataAcceptance;
    }
    set sharePrivateDataAcceptance(value) {
        if (value !== undefined && value !== null) {
            this._text = this._file = this._sticker = this._location = this._liveLocation = this._poll = this._transaction = this._form = this._persistEvent = this._buttons = this._shareUid = this._formResult = this._sharePrivateDataRequest = this._callEvent = this._table = this._paymentInformation = undefined;
            this._type = Message.TypeCase.sharePrivateDataAcceptance;
        }
        this._sharePrivateDataAcceptance = value;
    }
    get callEvent() {
        return this._callEvent;
    }
    set callEvent(value) {
        if (value !== undefined && value !== null) {
            this._text = this._file = this._sticker = this._location = this._liveLocation = this._poll = this._transaction = this._form = this._persistEvent = this._buttons = this._shareUid = this._formResult = this._sharePrivateDataRequest = this._sharePrivateDataAcceptance = this._table = this._paymentInformation = undefined;
            this._type = Message.TypeCase.callEvent;
        }
        this._callEvent = value;
    }
    get table() {
        return this._table;
    }
    set table(value) {
        if (value !== undefined && value !== null) {
            this._text = this._file = this._sticker = this._location = this._liveLocation = this._poll = this._transaction = this._form = this._persistEvent = this._buttons = this._shareUid = this._formResult = this._sharePrivateDataRequest = this._sharePrivateDataAcceptance = this._callEvent = this._paymentInformation = undefined;
            this._type = Message.TypeCase.table;
        }
        this._table = value;
    }
    get paymentInformation() {
        return this._paymentInformation;
    }
    set paymentInformation(value) {
        if (value !== undefined && value !== null) {
            this._text = this._file = this._sticker = this._location = this._liveLocation = this._poll = this._transaction = this._form = this._persistEvent = this._buttons = this._shareUid = this._formResult = this._sharePrivateDataRequest = this._sharePrivateDataAcceptance = this._callEvent = this._table = undefined;
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
        TypeCase[TypeCase["table"] = 16] = "table";
        TypeCase[TypeCase["paymentInformation"] = 17] = "paymentInformation";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5wYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Byb3RvL3NyYy9saWIvcHViL3YxL21vZGVscy9tZXNzYWdlLnBiLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdBLE9BQU8sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFjLE1BQU0saUJBQWlCLENBQUM7QUFFekUsT0FBTyxLQUFLLG1CQUFtQixNQUFNLGdDQUFnQyxDQUFDO0FBQ3RFLE9BQU8sS0FBSyxtQkFBbUIsTUFBTSwrQkFBK0IsQ0FBQztBQUdyRSxPQUFPLEtBQUssbUJBQW1CLE1BQU0sbUNBQW1DLENBQUM7QUFDekUsT0FBTyxLQUFLLG1CQUFtQixNQUFNLG9DQUFvQyxDQUFDO0FBQzFFLE9BQU8sS0FBSyxtQkFBbUIsTUFBTSxtQ0FBbUMsQ0FBQztBQUN6RSxPQUFPLEtBQUssbUJBQW1CLE1BQU0sNENBQTRDLENBQUM7QUFDbEYsT0FBTyxLQUFLLG1CQUFtQixNQUFNLDhDQUE4QyxDQUFDO0FBQ3BGLE9BQU8sS0FBSyxtQkFBbUIsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN0RSxPQUFPLEtBQUssbUJBQW1CLE1BQU0sZ0NBQWdDLENBQUM7QUFDdEUsT0FBTyxLQUFLLG1CQUFtQixNQUFNLCtCQUErQixDQUFDO0FBQ3JFLE9BQU8sS0FBSyxtQkFBbUIsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN0RSxPQUFPLEtBQUssbUJBQW1CLE1BQU0sa0NBQWtDLENBQUM7QUFDeEU7O0dBRUc7QUFDSCxNQUFNLE9BQU8sSUFBSTtJQXVEZjs7O09BR0c7SUFDSCxZQUFZLE1BQXdDO1FBQ2xELE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUE1REQ7OztPQUdH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UyxDQUFDO1FBQ2QsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUM1RCxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJO1lBQ3JCLENBQUMsQ0FBQyxJQUFJLG1CQUFtQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQzNDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDZCxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPO1lBQzNCLENBQUMsQ0FBQyxJQUFJLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO1lBQ2pELENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDZCxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRO1lBQzdCLENBQUMsQ0FBQyxJQUFJLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO1lBQ25ELENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDZCxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJO1lBQ3JCLENBQUMsQ0FBQyxJQUFJLG1CQUFtQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQzNDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDZCxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPO1lBQzNCLENBQUMsQ0FBQyxJQUFJLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO1lBQ2pELENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDZCxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQzVFLElBQUksQ0FBQyx1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LENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtTQUM5RCxDQUFDO0lBQ0osQ0FBQzs7QUF2bkJNLGVBQUUsR0FBRyxrQ0FBa0MsQ0FBQztBQXluQmpELFdBQWMsWUFBWTtJQW9EeEIsSUFBWSxRQVlYO0lBWkQsV0FBWSxRQUFRO1FBQ2xCLHVDQUFRLENBQUE7UUFDUix1Q0FBUSxDQUFBO1FBQ1IsdUNBQVEsQ0FBQTtRQUNSLDZDQUFXLENBQUE7UUFDWCwrQ0FBWSxDQUFBO1FBQ1osdUNBQVEsQ0FBQTtRQUNSLDZDQUFXLENBQUE7UUFDWCwrQ0FBWSxDQUFBO1FBQ1osNkVBQTJCLENBQUE7UUFDM0IsbUZBQThCLENBQUE7UUFDOUIsMENBQVUsQ0FBQTtJQUNaLENBQUMsRUFaVyxRQUFRLEdBQVIscUJBQVEsS0FBUixxQkFBUSxRQVluQjtBQUNILENBQUMsRUFqRWEsWUFBWSxLQUFaLFlBQVksUUFpRXpCIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGUgKi9cbi8qIGVzbGludC1kaXNhYmxlICovXG4vLyBAdHMtbm9jaGVja1xuLy9cbi8vIFRISVMgSVMgQSBHRU5FUkFURUQgRklMRVxuLy8gRE8gTk9UIE1PRElGWSBJVCEgWU9VUiBDSEFOR0VTIFdJTEwgQkUgTE9TVFxuaW1wb3J0IHtcbiAgR3JwY01lc3NhZ2UsXG4gIFJlY3Vyc2l2ZVBhcnRpYWwsXG4gIFRvUHJvdG9idWZKU09OT3B0aW9uc1xufSBmcm9tICdAbmd4LWdycGMvY29tbW9uJztcbmltcG9ydCB7IEJpbmFyeVJlYWRlciwgQmluYXJ5V3JpdGVyLCBCeXRlU291cmNlIH0gZnJvbSAnZ29vZ2xlLXByb3RvYnVmJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMDAgZnJvbSAnLi4vLi4vLi4vcHViL3YxL21vZGVscy9jYXRlZ29yaWVzLnBiJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMDEgZnJvbSAnLi4vLi4vLi4vcHViL3YxL21vZGVscy9maWxlLnBiJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMDIgZnJvbSAnLi4vLi4vLi4vcHViL3YxL21vZGVscy91aWQucGInO1xuaW1wb3J0ICogYXMgcHJvdG9QdWJWMU1vZGVsczAwMyBmcm9tICcuLi8uLi8uLi9wdWIvdjEvbW9kZWxzL2F2YXRhci5wYic7XG5pbXBvcnQgKiBhcyBwcm90b1B1YlYxTW9kZWxzMDA0IGZyb20gJy4uLy4uLy4uL3B1Yi92MS9tb2RlbHMvcGluLWNvZGUtc2V0dGluZ3MucGInO1xuaW1wb3J0ICogYXMgcHJvdG9QdWJWMU1vZGVsczAwNSBmcm9tICcuLi8uLi8uLi9wdWIvdjEvbW9kZWxzL3N0aWNrZXIucGInO1xuaW1wb3J0ICogYXMgcHJvdG9QdWJWMU1vZGVsczAwNiBmcm9tICcuLi8uLi8uLi9wdWIvdjEvbW9kZWxzL2xvY2F0aW9uLnBiJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMDcgZnJvbSAnLi4vLi4vLi4vcHViL3YxL21vZGVscy9wYXltZW50LnBiJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMDggZnJvbSAnLi4vLi4vLi4vcHViL3YxL21vZGVscy9wZXJzaXN0ZW50LWV2ZW50LnBiJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMDkgZnJvbSAnLi4vLi4vLi4vcHViL3YxL21vZGVscy9zaGFyZS1wcml2YXRlLWRhdGEucGInO1xuaW1wb3J0ICogYXMgcHJvdG9QdWJWMU1vZGVsczAxMCBmcm9tICcuLi8uLi8uLi9wdWIvdjEvbW9kZWxzL2Zvcm0ucGInO1xuaW1wb3J0ICogYXMgcHJvdG9QdWJWMU1vZGVsczAxMSBmcm9tICcuLi8uLi8uLi9wdWIvdjEvbW9kZWxzL3BvbGwucGInO1xuaW1wb3J0ICogYXMgcHJvdG9QdWJWMU1vZGVsczAxMiBmcm9tICcuLi8uLi8uLi9wdWIvdjEvbW9kZWxzL211Yy5wYic7XG5pbXBvcnQgKiBhcyBwcm90b1B1YlYxTW9kZWxzMDEzIGZyb20gJy4uLy4uLy4uL3B1Yi92MS9tb2RlbHMvY2FsbC5wYic7XG5pbXBvcnQgKiBhcyBwcm90b1B1YlYxTW9kZWxzMDE0IGZyb20gJy4uLy4uLy4uL3B1Yi92MS9tb2RlbHMvbWFya3VwLnBiJztcbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3IgcHJvdG8ucHViLnYxLm1vZGVscy5UZXh0XG4gKi9cbmV4cG9ydCBjbGFzcyBUZXh0IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAncHJvdG8ucHViLnYxLm1vZGVscy5UZXh0JztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgVGV4dCgpO1xuICAgIFRleHQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBUZXh0KSB7XG4gICAgX2luc3RhbmNlLnRleHQgPSBfaW5zdGFuY2UudGV4dCB8fCAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihfaW5zdGFuY2U6IFRleHQsIF9yZWFkZXI6IEJpbmFyeVJlYWRlcikge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLnRleHQgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFRleHQucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoX2luc3RhbmNlOiBUZXh0LCBfd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoX2luc3RhbmNlLnRleHQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLnRleHQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3RleHQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBUZXh0IHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFRleHQuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMudGV4dCA9IF92YWx1ZS50ZXh0O1xuICAgIFRleHQucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCB0ZXh0KCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3RleHQ7XG4gIH1cbiAgc2V0IHRleHQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3RleHQgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBUZXh0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IFRleHQuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICB0ZXh0OiB0aGlzLnRleHRcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBUZXh0LkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGV4dDogdGhpcy50ZXh0XG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBUZXh0IHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBUZXh0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICB0ZXh0Pzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIFRleHRcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHRleHQ/OiBzdHJpbmc7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBwcm90by5wdWIudjEubW9kZWxzLlNoYXJlVWlkXG4gKi9cbmV4cG9ydCBjbGFzcyBTaGFyZVVpZCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ3Byb3RvLnB1Yi52MS5tb2RlbHMuU2hhcmVVaWQnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBTaGFyZVVpZCgpO1xuICAgIFNoYXJlVWlkLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogU2hhcmVVaWQpIHtcbiAgICBfaW5zdGFuY2UudWlkID0gX2luc3RhbmNlLnVpZCB8fCB1bmRlZmluZWQ7XG4gICAgX2luc3RhbmNlLnBob25lTnVtYmVyID0gX2luc3RhbmNlLnBob25lTnVtYmVyIHx8ICcnO1xuICAgIF9pbnN0YW5jZS5uYW1lID0gX2luc3RhbmNlLm5hbWUgfHwgJyc7XG4gICAgX2luc3RhbmNlLmpvaW5Ub2tlbiA9IF9pbnN0YW5jZS5qb2luVG9rZW4gfHwgJyc7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBTaGFyZVVpZCxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UudWlkID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS51aWQsXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLnBob25lTnVtYmVyID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBfaW5zdGFuY2UubmFtZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgX2luc3RhbmNlLmpvaW5Ub2tlbiA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgU2hhcmVVaWQucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoX2luc3RhbmNlOiBTaGFyZVVpZCwgX3dyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKF9pbnN0YW5jZS51aWQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAxLFxuICAgICAgICBfaW5zdGFuY2UudWlkIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UucGhvbmVOdW1iZXIpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMiwgX2luc3RhbmNlLnBob25lTnVtYmVyKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5uYW1lKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDMsIF9pbnN0YW5jZS5uYW1lKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5qb2luVG9rZW4pIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoNCwgX2luc3RhbmNlLmpvaW5Ub2tlbik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdWlkPzogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQ7XG4gIHByaXZhdGUgX3Bob25lTnVtYmVyPzogc3RyaW5nO1xuICBwcml2YXRlIF9uYW1lPzogc3RyaW5nO1xuICBwcml2YXRlIF9qb2luVG9rZW4/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBTaGFyZVVpZCB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxTaGFyZVVpZC5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy51aWQgPSBfdmFsdWUudWlkID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkKF92YWx1ZS51aWQpIDogdW5kZWZpbmVkO1xuICAgIHRoaXMucGhvbmVOdW1iZXIgPSBfdmFsdWUucGhvbmVOdW1iZXI7XG4gICAgdGhpcy5uYW1lID0gX3ZhbHVlLm5hbWU7XG4gICAgdGhpcy5qb2luVG9rZW4gPSBfdmFsdWUuam9pblRva2VuO1xuICAgIFNoYXJlVWlkLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgdWlkKCk6IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdWlkO1xuICB9XG4gIHNldCB1aWQodmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdWlkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHBob25lTnVtYmVyKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3Bob25lTnVtYmVyO1xuICB9XG4gIHNldCBwaG9uZU51bWJlcih2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcGhvbmVOdW1iZXIgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbmFtZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG4gIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGpvaW5Ub2tlbigpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9qb2luVG9rZW47XG4gIH1cbiAgc2V0IGpvaW5Ub2tlbih2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fam9pblRva2VuID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgU2hhcmVVaWQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogU2hhcmVVaWQuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICB1aWQ6IHRoaXMudWlkID8gdGhpcy51aWQudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIHBob25lTnVtYmVyOiB0aGlzLnBob25lTnVtYmVyLFxuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgam9pblRva2VuOiB0aGlzLmpvaW5Ub2tlblxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IFNoYXJlVWlkLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgdWlkOiB0aGlzLnVpZCA/IHRoaXMudWlkLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIHBob25lTnVtYmVyOiB0aGlzLnBob25lTnVtYmVyLFxuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgam9pblRva2VuOiB0aGlzLmpvaW5Ub2tlblxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgU2hhcmVVaWQge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIFNoYXJlVWlkXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICB1aWQ/OiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5Bc09iamVjdDtcbiAgICBwaG9uZU51bWJlcj86IHN0cmluZztcbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIGpvaW5Ub2tlbj86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBTaGFyZVVpZFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgdWlkPzogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHBob25lTnVtYmVyPzogc3RyaW5nO1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgam9pblRva2VuPzogc3RyaW5nO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3IgcHJvdG8ucHViLnYxLm1vZGVscy5NZXNzYWdlRGVsaXZlcnlBY2tcbiAqL1xuZXhwb3J0IGNsYXNzIE1lc3NhZ2VEZWxpdmVyeUFjayBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ3Byb3RvLnB1Yi52MS5tb2RlbHMuTWVzc2FnZURlbGl2ZXJ5QWNrJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgTWVzc2FnZURlbGl2ZXJ5QWNrKCk7XG4gICAgTWVzc2FnZURlbGl2ZXJ5QWNrLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogTWVzc2FnZURlbGl2ZXJ5QWNrKSB7XG4gICAgX2luc3RhbmNlLnBhY2tldElkID0gX2luc3RhbmNlLnBhY2tldElkIHx8ICcnO1xuICAgIF9pbnN0YW5jZS5pZCA9IF9pbnN0YW5jZS5pZCB8fCAnMCc7XG4gICAgX2luc3RhbmNlLnRpbWUgPSBfaW5zdGFuY2UudGltZSB8fCAnMCc7XG4gICAgX2luc3RhbmNlLmZyb20gPSBfaW5zdGFuY2UuZnJvbSB8fCB1bmRlZmluZWQ7XG4gICAgX2luc3RhbmNlLnRvID0gX2luc3RhbmNlLnRvIHx8IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IE1lc3NhZ2VEZWxpdmVyeUFjayxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UucGFja2V0SWQgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5pZCA9IF9yZWFkZXIucmVhZEludDY0U3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBfaW5zdGFuY2UudGltZSA9IF9yZWFkZXIucmVhZEludDY0U3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBfaW5zdGFuY2UuZnJvbSA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuZnJvbSxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBfaW5zdGFuY2UudG8gPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLnRvLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIE1lc3NhZ2VEZWxpdmVyeUFjay5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IE1lc3NhZ2VEZWxpdmVyeUFjayxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5wYWNrZXRJZCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2UucGFja2V0SWQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmlkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlSW50NjRTdHJpbmcoMiwgX2luc3RhbmNlLmlkKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS50aW1lKSB7XG4gICAgICBfd3JpdGVyLndyaXRlSW50NjRTdHJpbmcoMywgX2luc3RhbmNlLnRpbWUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmZyb20pIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA0LFxuICAgICAgICBfaW5zdGFuY2UuZnJvbSBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnRvKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgNSxcbiAgICAgICAgX2luc3RhbmNlLnRvIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcGFja2V0SWQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2lkPzogc3RyaW5nO1xuICBwcml2YXRlIF90aW1lPzogc3RyaW5nO1xuICBwcml2YXRlIF9mcm9tPzogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQ7XG4gIHByaXZhdGUgX3RvPzogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQ7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBNZXNzYWdlRGVsaXZlcnlBY2sgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8TWVzc2FnZURlbGl2ZXJ5QWNrLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnBhY2tldElkID0gX3ZhbHVlLnBhY2tldElkO1xuICAgIHRoaXMuaWQgPSBfdmFsdWUuaWQ7XG4gICAgdGhpcy50aW1lID0gX3ZhbHVlLnRpbWU7XG4gICAgdGhpcy5mcm9tID0gX3ZhbHVlLmZyb21cbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkKF92YWx1ZS5mcm9tKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy50byA9IF92YWx1ZS50byA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZChfdmFsdWUudG8pIDogdW5kZWZpbmVkO1xuICAgIE1lc3NhZ2VEZWxpdmVyeUFjay5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHBhY2tldElkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3BhY2tldElkO1xuICB9XG4gIHNldCBwYWNrZXRJZCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcGFja2V0SWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgaWQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5faWQ7XG4gIH1cbiAgc2V0IGlkKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9pZCA9IHZhbHVlO1xuICB9XG4gIGdldCB0aW1lKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3RpbWU7XG4gIH1cbiAgc2V0IHRpbWUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3RpbWUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZnJvbSgpOiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2Zyb207XG4gIH1cbiAgc2V0IGZyb20odmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZnJvbSA9IHZhbHVlO1xuICB9XG4gIGdldCB0bygpOiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3RvO1xuICB9XG4gIHNldCB0byh2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl90byA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIE1lc3NhZ2VEZWxpdmVyeUFjay5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBNZXNzYWdlRGVsaXZlcnlBY2suQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBwYWNrZXRJZDogdGhpcy5wYWNrZXRJZCxcbiAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgdGltZTogdGhpcy50aW1lLFxuICAgICAgZnJvbTogdGhpcy5mcm9tID8gdGhpcy5mcm9tLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICB0bzogdGhpcy50byA/IHRoaXMudG8udG9PYmplY3QoKSA6IHVuZGVmaW5lZFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IE1lc3NhZ2VEZWxpdmVyeUFjay5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhY2tldElkOiB0aGlzLnBhY2tldElkLFxuICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICB0aW1lOiB0aGlzLnRpbWUsXG4gICAgICBmcm9tOiB0aGlzLmZyb20gPyB0aGlzLmZyb20udG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgdG86IHRoaXMudG8gPyB0aGlzLnRvLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbFxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgTWVzc2FnZURlbGl2ZXJ5QWNrIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBNZXNzYWdlRGVsaXZlcnlBY2tcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIHBhY2tldElkPzogc3RyaW5nO1xuICAgIGlkPzogc3RyaW5nO1xuICAgIHRpbWU/OiBzdHJpbmc7XG4gICAgZnJvbT86IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLkFzT2JqZWN0O1xuICAgIHRvPzogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuQXNPYmplY3Q7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgTWVzc2FnZURlbGl2ZXJ5QWNrXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBwYWNrZXRJZD86IHN0cmluZztcbiAgICBpZD86IHN0cmluZztcbiAgICB0aW1lPzogc3RyaW5nO1xuICAgIGZyb20/OiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgdG8/OiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBwcm90by5wdWIudjEubW9kZWxzLk1lc3NhZ2VCcmllZlxuICovXG5leHBvcnQgY2xhc3MgTWVzc2FnZUJyaWVmIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAncHJvdG8ucHViLnYxLm1vZGVscy5NZXNzYWdlQnJpZWYnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBNZXNzYWdlQnJpZWYoKTtcbiAgICBNZXNzYWdlQnJpZWYuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBNZXNzYWdlQnJpZWYpIHtcbiAgICBfaW5zdGFuY2UucGFja2V0SWQgPSBfaW5zdGFuY2UucGFja2V0SWQgfHwgJyc7XG4gICAgX2luc3RhbmNlLmlkID0gX2luc3RhbmNlLmlkIHx8ICcwJztcbiAgICBfaW5zdGFuY2UudGltZSA9IF9pbnN0YW5jZS50aW1lIHx8ICcwJztcbiAgICBfaW5zdGFuY2UuZnJvbSA9IF9pbnN0YW5jZS5mcm9tIHx8IHVuZGVmaW5lZDtcbiAgICBfaW5zdGFuY2UudG8gPSBfaW5zdGFuY2UudG8gfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5tZXNzYWdlVHlwZSA9IF9pbnN0YW5jZS5tZXNzYWdlVHlwZSB8fCAwO1xuICAgIF9pbnN0YW5jZS50ZXh0ID0gX2luc3RhbmNlLnRleHQgfHwgJyc7XG4gICAgX2luc3RhbmNlLnRodW1ibmFpbFJlZmVyZW5jZSA9IF9pbnN0YW5jZS50aHVtYm5haWxSZWZlcmVuY2UgfHwgdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogTWVzc2FnZUJyaWVmLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5wYWNrZXRJZCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLmlkID0gX3JlYWRlci5yZWFkSW50NjRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIF9pbnN0YW5jZS50aW1lID0gX3JlYWRlci5yZWFkSW50NjRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIF9pbnN0YW5jZS5mcm9tID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5mcm9tLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIF9pbnN0YW5jZS50byA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UudG8sXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgX2luc3RhbmNlLm1lc3NhZ2VUeXBlID0gX3JlYWRlci5yZWFkRW51bSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgX2luc3RhbmNlLnRleHQgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA4OlxuICAgICAgICAgIF9pbnN0YW5jZS50aHVtYm5haWxSZWZlcmVuY2UgPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMS5GaWxlKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS50aHVtYm5haWxSZWZlcmVuY2UsXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAxLkZpbGUuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIE1lc3NhZ2VCcmllZi5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IE1lc3NhZ2VCcmllZixcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5wYWNrZXRJZCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2UucGFja2V0SWQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmlkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlSW50NjRTdHJpbmcoMiwgX2luc3RhbmNlLmlkKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS50aW1lKSB7XG4gICAgICBfd3JpdGVyLndyaXRlSW50NjRTdHJpbmcoMywgX2luc3RhbmNlLnRpbWUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmZyb20pIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA0LFxuICAgICAgICBfaW5zdGFuY2UuZnJvbSBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnRvKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgNSxcbiAgICAgICAgX2luc3RhbmNlLnRvIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UubWVzc2FnZVR5cGUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVFbnVtKDYsIF9pbnN0YW5jZS5tZXNzYWdlVHlwZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UudGV4dCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZyg3LCBfaW5zdGFuY2UudGV4dCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UudGh1bWJuYWlsUmVmZXJlbmNlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgOCxcbiAgICAgICAgX2luc3RhbmNlLnRodW1ibmFpbFJlZmVyZW5jZSBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDEuRmlsZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9wYWNrZXRJZD86IHN0cmluZztcbiAgcHJpdmF0ZSBfaWQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3RpbWU/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2Zyb20/OiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZDtcbiAgcHJpdmF0ZSBfdG8/OiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZDtcbiAgcHJpdmF0ZSBfbWVzc2FnZVR5cGU/OiBNZXNzYWdlQnJpZWYuTWVzc2FnZVR5cGVzO1xuICBwcml2YXRlIF90ZXh0Pzogc3RyaW5nO1xuICBwcml2YXRlIF90aHVtYm5haWxSZWZlcmVuY2U/OiBwcm90b1B1YlYxTW9kZWxzMDAxLkZpbGU7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBNZXNzYWdlQnJpZWYgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8TWVzc2FnZUJyaWVmLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnBhY2tldElkID0gX3ZhbHVlLnBhY2tldElkO1xuICAgIHRoaXMuaWQgPSBfdmFsdWUuaWQ7XG4gICAgdGhpcy50aW1lID0gX3ZhbHVlLnRpbWU7XG4gICAgdGhpcy5mcm9tID0gX3ZhbHVlLmZyb21cbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkKF92YWx1ZS5mcm9tKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy50byA9IF92YWx1ZS50byA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZChfdmFsdWUudG8pIDogdW5kZWZpbmVkO1xuICAgIHRoaXMubWVzc2FnZVR5cGUgPSBfdmFsdWUubWVzc2FnZVR5cGU7XG4gICAgdGhpcy50ZXh0ID0gX3ZhbHVlLnRleHQ7XG4gICAgdGhpcy50aHVtYm5haWxSZWZlcmVuY2UgPSBfdmFsdWUudGh1bWJuYWlsUmVmZXJlbmNlXG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAxLkZpbGUoX3ZhbHVlLnRodW1ibmFpbFJlZmVyZW5jZSlcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIE1lc3NhZ2VCcmllZi5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHBhY2tldElkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3BhY2tldElkO1xuICB9XG4gIHNldCBwYWNrZXRJZCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcGFja2V0SWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgaWQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5faWQ7XG4gIH1cbiAgc2V0IGlkKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9pZCA9IHZhbHVlO1xuICB9XG4gIGdldCB0aW1lKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3RpbWU7XG4gIH1cbiAgc2V0IHRpbWUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3RpbWUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZnJvbSgpOiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2Zyb207XG4gIH1cbiAgc2V0IGZyb20odmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZnJvbSA9IHZhbHVlO1xuICB9XG4gIGdldCB0bygpOiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3RvO1xuICB9XG4gIHNldCB0byh2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl90byA9IHZhbHVlO1xuICB9XG4gIGdldCBtZXNzYWdlVHlwZSgpOiBNZXNzYWdlQnJpZWYuTWVzc2FnZVR5cGVzIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbWVzc2FnZVR5cGU7XG4gIH1cbiAgc2V0IG1lc3NhZ2VUeXBlKHZhbHVlOiBNZXNzYWdlQnJpZWYuTWVzc2FnZVR5cGVzIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbWVzc2FnZVR5cGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdGV4dCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90ZXh0O1xuICB9XG4gIHNldCB0ZXh0KHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl90ZXh0ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHRodW1ibmFpbFJlZmVyZW5jZSgpOiBwcm90b1B1YlYxTW9kZWxzMDAxLkZpbGUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90aHVtYm5haWxSZWZlcmVuY2U7XG4gIH1cbiAgc2V0IHRodW1ibmFpbFJlZmVyZW5jZSh2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAwMS5GaWxlIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdGh1bWJuYWlsUmVmZXJlbmNlID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgTWVzc2FnZUJyaWVmLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IE1lc3NhZ2VCcmllZi5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhY2tldElkOiB0aGlzLnBhY2tldElkLFxuICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICB0aW1lOiB0aGlzLnRpbWUsXG4gICAgICBmcm9tOiB0aGlzLmZyb20gPyB0aGlzLmZyb20udG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIHRvOiB0aGlzLnRvID8gdGhpcy50by50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgbWVzc2FnZVR5cGU6IHRoaXMubWVzc2FnZVR5cGUsXG4gICAgICB0ZXh0OiB0aGlzLnRleHQsXG4gICAgICB0aHVtYm5haWxSZWZlcmVuY2U6IHRoaXMudGh1bWJuYWlsUmVmZXJlbmNlXG4gICAgICAgID8gdGhpcy50aHVtYm5haWxSZWZlcmVuY2UudG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IE1lc3NhZ2VCcmllZi5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhY2tldElkOiB0aGlzLnBhY2tldElkLFxuICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICB0aW1lOiB0aGlzLnRpbWUsXG4gICAgICBmcm9tOiB0aGlzLmZyb20gPyB0aGlzLmZyb20udG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgdG86IHRoaXMudG8gPyB0aGlzLnRvLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIG1lc3NhZ2VUeXBlOlxuICAgICAgICBNZXNzYWdlQnJpZWYuTWVzc2FnZVR5cGVzW1xuICAgICAgICAgIHRoaXMubWVzc2FnZVR5cGUgPT09IG51bGwgfHwgdGhpcy5tZXNzYWdlVHlwZSA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IDBcbiAgICAgICAgICAgIDogdGhpcy5tZXNzYWdlVHlwZVxuICAgICAgICBdLFxuICAgICAgdGV4dDogdGhpcy50ZXh0LFxuICAgICAgdGh1bWJuYWlsUmVmZXJlbmNlOiB0aGlzLnRodW1ibmFpbFJlZmVyZW5jZVxuICAgICAgICA/IHRoaXMudGh1bWJuYWlsUmVmZXJlbmNlLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbFxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgTWVzc2FnZUJyaWVmIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBNZXNzYWdlQnJpZWZcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIHBhY2tldElkPzogc3RyaW5nO1xuICAgIGlkPzogc3RyaW5nO1xuICAgIHRpbWU/OiBzdHJpbmc7XG4gICAgZnJvbT86IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLkFzT2JqZWN0O1xuICAgIHRvPzogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuQXNPYmplY3Q7XG4gICAgbWVzc2FnZVR5cGU/OiBNZXNzYWdlQnJpZWYuTWVzc2FnZVR5cGVzO1xuICAgIHRleHQ/OiBzdHJpbmc7XG4gICAgdGh1bWJuYWlsUmVmZXJlbmNlPzogcHJvdG9QdWJWMU1vZGVsczAwMS5GaWxlLkFzT2JqZWN0O1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIE1lc3NhZ2VCcmllZlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgcGFja2V0SWQ/OiBzdHJpbmc7XG4gICAgaWQ/OiBzdHJpbmc7XG4gICAgdGltZT86IHN0cmluZztcbiAgICBmcm9tPzogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHRvPzogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIG1lc3NhZ2VUeXBlPzogc3RyaW5nO1xuICAgIHRleHQ/OiBzdHJpbmc7XG4gICAgdGh1bWJuYWlsUmVmZXJlbmNlPzogcHJvdG9QdWJWMU1vZGVsczAwMS5GaWxlLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgfVxuICBleHBvcnQgZW51bSBNZXNzYWdlVHlwZXMge1xuICAgIE5PVF9TRVQgPSAwLFxuICAgIFRFWFQgPSAxLFxuICAgIEZJTEUgPSAyLFxuICAgIFNUSUNLRVIgPSAzLFxuICAgIExPQ0FUSU9OID0gNCxcbiAgICBMSVZFX0xPQ0FUSU9OID0gNSxcbiAgICBQT0xMID0gNixcbiAgICBUUkFOU0FDVElPTiA9IDcsXG4gICAgRk9STSA9IDgsXG4gICAgQlVUVE9OUyA9IDksXG4gICAgU0hBUkVfVUlEID0gMTAsXG4gICAgRk9STV9SRVNVTFQgPSAxMSxcbiAgICBDQUxMX0VORCA9IDEyLFxuICAgIENBTExfQlVTWSA9IDEzLFxuICAgIENBTExfREVDTElORUQgPSAxNCxcbiAgICBUQUJMRSA9IDE1LFxuICAgIFBFX0FTX05FV19DT05UQUNUX0FEREVEID0gMTYsXG4gICAgUEVfQlNfQk9UX05PVF9SRVNQT05ESU5HID0gMTcsXG4gICAgUEVfTVNfS0lDS19VU0VSID0gMTgsXG4gICAgUEVfTVNfQUREX1VTRVIgPSAxOSxcbiAgICBQRV9NU19QSU5fTUVTU0FHRSA9IDIwLFxuICAgIFBFX01TX05BTUVfQ0hBTkdFRCA9IDIxLFxuICAgIFBFX01TX0FWQVRBUl9DSEFOR0VEID0gMjIsXG4gICAgUEVfTVNfTVVDX0NSRUFURUQgPSAyMyxcbiAgICBQRV9NU19MRUFWRV9VU0VSID0gMjQsXG4gICAgUEVfTVNfSk9JTkVEX1VTRVIgPSAyNSxcbiAgICBQRV9NU19ERUxFVEVEID0gMjYsXG4gICAgUERUX1BIT05FX05VTUJFUiA9IDI3LFxuICAgIFBEVF9VU0VSTkFNRSA9IDI4LFxuICAgIFBEVF9FTUFJTCA9IDI5LFxuICAgIFBEVF9OQU1FID0gMzAsXG4gICAgUEFZTUVOVF9JTkZPUk1BVElPTiA9IDMxXG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBwcm90by5wdWIudjEubW9kZWxzLk1lc3NhZ2VcbiAqL1xuZXhwb3J0IGNsYXNzIE1lc3NhZ2UgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdwcm90by5wdWIudjEubW9kZWxzLk1lc3NhZ2UnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBNZXNzYWdlKCk7XG4gICAgTWVzc2FnZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IE1lc3NhZ2UpIHtcbiAgICBfaW5zdGFuY2UucGFja2V0SWQgPSBfaW5zdGFuY2UucGFja2V0SWQgfHwgJyc7XG4gICAgX2luc3RhbmNlLmlkID0gX2luc3RhbmNlLmlkIHx8ICcwJztcbiAgICBfaW5zdGFuY2UudGltZSA9IF9pbnN0YW5jZS50aW1lIHx8ICcwJztcbiAgICBfaW5zdGFuY2UuZnJvbSA9IF9pbnN0YW5jZS5mcm9tIHx8IHVuZGVmaW5lZDtcbiAgICBfaW5zdGFuY2UudG8gPSBfaW5zdGFuY2UudG8gfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5yZXBseVRvSWQgPSBfaW5zdGFuY2UucmVwbHlUb0lkIHx8ICcwJztcbiAgICBfaW5zdGFuY2UucmVwbGllZE1lc3NhZ2VCcmllZiA9IF9pbnN0YW5jZS5yZXBsaWVkTWVzc2FnZUJyaWVmIHx8IHVuZGVmaW5lZDtcbiAgICBfaW5zdGFuY2UuZm9yd2FyZEZyb20gPSBfaW5zdGFuY2UuZm9yd2FyZEZyb20gfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5nZW5lcmF0ZWRCeSA9IF9pbnN0YW5jZS5nZW5lcmF0ZWRCeSB8fCB1bmRlZmluZWQ7XG4gICAgX2luc3RhbmNlLmVkaXRlZCA9IF9pbnN0YW5jZS5lZGl0ZWQgfHwgZmFsc2U7XG4gICAgX2luc3RhbmNlLmVuY3J5cHRlZCA9IF9pbnN0YW5jZS5lbmNyeXB0ZWQgfHwgZmFsc2U7XG4gICAgX2luc3RhbmNlLnR0bCA9IF9pbnN0YW5jZS50dGwgfHwgMDtcbiAgICBfaW5zdGFuY2UudGhyZWFkID0gX2luc3RhbmNlLnRocmVhZCB8fCAnMCc7XG4gICAgX2luc3RhbmNlLnNob3VsZEJlUXVpZXQgPSBfaW5zdGFuY2Uuc2hvdWxkQmVRdWlldCB8fCBmYWxzZTtcbiAgICBfaW5zdGFuY2UubXVjTWluaW11bUFjY2Vzc0xldmVsID0gX2luc3RhbmNlLm11Y01pbmltdW1BY2Nlc3NMZXZlbCB8fCAwO1xuICAgIF9pbnN0YW5jZS5zcGVjaWFsVGFyZ2V0ID0gX2luc3RhbmNlLnNwZWNpYWxUYXJnZXQgfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5tZXNzYWdlTWFya3VwID0gX2luc3RhbmNlLm1lc3NhZ2VNYXJrdXAgfHwgdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogTWVzc2FnZSxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UucGFja2V0SWQgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5pZCA9IF9yZWFkZXIucmVhZEludDY0U3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBfaW5zdGFuY2UudGltZSA9IF9yZWFkZXIucmVhZEludDY0U3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBfaW5zdGFuY2UuZnJvbSA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuZnJvbSxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICBfaW5zdGFuY2UudG8gPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLnRvLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA3OlxuICAgICAgICAgIF9pbnN0YW5jZS5yZXBseVRvSWQgPSBfcmVhZGVyLnJlYWRJbnQ2NFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDMwOlxuICAgICAgICAgIF9pbnN0YW5jZS5yZXBsaWVkTWVzc2FnZUJyaWVmID0gbmV3IE1lc3NhZ2VCcmllZigpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UucmVwbGllZE1lc3NhZ2VCcmllZixcbiAgICAgICAgICAgIE1lc3NhZ2VCcmllZi5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgX2luc3RhbmNlLmZvcndhcmRGcm9tID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5mb3J3YXJkRnJvbSxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzM6XG4gICAgICAgICAgX2luc3RhbmNlLmdlbmVyYXRlZEJ5ID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5nZW5lcmF0ZWRCeSxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgOTpcbiAgICAgICAgICBfaW5zdGFuY2UuZWRpdGVkID0gX3JlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgIF9pbnN0YW5jZS5lbmNyeXB0ZWQgPSBfcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjM6XG4gICAgICAgICAgX2luc3RhbmNlLnR0bCA9IF9yZWFkZXIucmVhZEludDMyKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjg6XG4gICAgICAgICAgX2luc3RhbmNlLnRocmVhZCA9IF9yZWFkZXIucmVhZEludDY0U3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjk6XG4gICAgICAgICAgX2luc3RhbmNlLnNob3VsZEJlUXVpZXQgPSBfcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjQ6XG4gICAgICAgICAgX2luc3RhbmNlLm11Y01pbmltdW1BY2Nlc3NMZXZlbCA9IF9yZWFkZXIucmVhZEVudW0oKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyNTpcbiAgICAgICAgICBfaW5zdGFuY2Uuc3BlY2lhbFRhcmdldCA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2Uuc3BlY2lhbFRhcmdldCxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzQ6XG4gICAgICAgICAgX2luc3RhbmNlLm1lc3NhZ2VNYXJrdXAgPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAxNC5NZXNzYWdlTWFya3VwKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5tZXNzYWdlTWFya3VwLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxNC5NZXNzYWdlTWFya3VwLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgX2luc3RhbmNlLnRleHQgPSBuZXcgVGV4dCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoX2luc3RhbmNlLnRleHQsIFRleHQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICBfaW5zdGFuY2UuZmlsZSA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAxLkZpbGUoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmZpbGUsXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAxLkZpbGUuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICBfaW5zdGFuY2Uuc3RpY2tlciA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDA1LlN0aWNrZXIoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLnN0aWNrZXIsXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDA1LlN0aWNrZXIuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxNDpcbiAgICAgICAgICBfaW5zdGFuY2UubG9jYXRpb24gPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAwNi5Mb2NhdGlvbigpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UubG9jYXRpb24sXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDA2LkxvY2F0aW9uLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTU6XG4gICAgICAgICAgX2luc3RhbmNlLmxpdmVMb2NhdGlvbiA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDA2LkxpdmVMb2NhdGlvbigpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UubGl2ZUxvY2F0aW9uLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwNi5MaXZlTG9jYXRpb24uZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxNjpcbiAgICAgICAgICBfaW5zdGFuY2UucG9sbCA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDExLlBvbGwoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLnBvbGwsXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDExLlBvbGwuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxNzpcbiAgICAgICAgICBfaW5zdGFuY2UudHJhbnNhY3Rpb24gPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAwNy5UcmFuc2FjdGlvbigpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UudHJhbnNhY3Rpb24sXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDA3LlRyYW5zYWN0aW9uLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTg6XG4gICAgICAgICAgX2luc3RhbmNlLmZvcm0gPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAxMC5Gb3JtKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5mb3JtLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxMC5Gb3JtLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTk6XG4gICAgICAgICAgX2luc3RhbmNlLnBlcnNpc3RFdmVudCA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDA4LlBlcnNpc3RlbnRFdmVudCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UucGVyc2lzdEV2ZW50LFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwOC5QZXJzaXN0ZW50RXZlbnQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyMDpcbiAgICAgICAgICBfaW5zdGFuY2UuYnV0dG9ucyA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDEwLkJ1dHRvbnMoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmJ1dHRvbnMsXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDEwLkJ1dHRvbnMuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyMTpcbiAgICAgICAgICBfaW5zdGFuY2Uuc2hhcmVVaWQgPSBuZXcgU2hhcmVVaWQoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLnNoYXJlVWlkLFxuICAgICAgICAgICAgU2hhcmVVaWQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyMjpcbiAgICAgICAgICBfaW5zdGFuY2UuZm9ybVJlc3VsdCA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDEwLkZvcm1SZXN1bHQoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmZvcm1SZXN1bHQsXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDEwLkZvcm1SZXN1bHQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyNjpcbiAgICAgICAgICBfaW5zdGFuY2Uuc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QgPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAwOS5TaGFyZVByaXZhdGVEYXRhUmVxdWVzdCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2Uuc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QsXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDA5LlNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0XG4gICAgICAgICAgICAgIC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI3OlxuICAgICAgICAgIF9pbnN0YW5jZS5zaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZSA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDA5LlNoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5zaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZSxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDkuU2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2VcbiAgICAgICAgICAgICAgLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzE6XG4gICAgICAgICAgX2luc3RhbmNlLmNhbGxFdmVudCA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDEzLkNhbGxFdmVudCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuY2FsbEV2ZW50LFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxMy5DYWxsRXZlbnQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgICBfaW5zdGFuY2UudGFibGUgPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAxMC5UYWJsZSgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UudGFibGUsXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDEwLlRhYmxlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzU6XG4gICAgICAgICAgX2luc3RhbmNlLnBheW1lbnRJbmZvcm1hdGlvbiA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDA3LlBheW1lbnRJbmZvcm1hdGlvbigpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UucGF5bWVudEluZm9ybWF0aW9uLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwNy5QYXltZW50SW5mb3JtYXRpb24uZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIE1lc3NhZ2UucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoX2luc3RhbmNlOiBNZXNzYWdlLCBfd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoX2luc3RhbmNlLnBhY2tldElkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS5wYWNrZXRJZCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuaWQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQ2NFN0cmluZygyLCBfaW5zdGFuY2UuaWQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnRpbWUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQ2NFN0cmluZyg0LCBfaW5zdGFuY2UudGltZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZnJvbSkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDUsXG4gICAgICAgIF9pbnN0YW5jZS5mcm9tIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UudG8pIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA2LFxuICAgICAgICBfaW5zdGFuY2UudG8gYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5yZXBseVRvSWQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQ2NFN0cmluZyg3LCBfaW5zdGFuY2UucmVwbHlUb0lkKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5yZXBsaWVkTWVzc2FnZUJyaWVmKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMzAsXG4gICAgICAgIF9pbnN0YW5jZS5yZXBsaWVkTWVzc2FnZUJyaWVmIGFzIGFueSxcbiAgICAgICAgTWVzc2FnZUJyaWVmLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmZvcndhcmRGcm9tKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgOCxcbiAgICAgICAgX2luc3RhbmNlLmZvcndhcmRGcm9tIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZ2VuZXJhdGVkQnkpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAzMyxcbiAgICAgICAgX2luc3RhbmNlLmdlbmVyYXRlZEJ5IGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZWRpdGVkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlQm9vbCg5LCBfaW5zdGFuY2UuZWRpdGVkKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5lbmNyeXB0ZWQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVCb29sKDEwLCBfaW5zdGFuY2UuZW5jcnlwdGVkKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS50dGwpIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQzMigyMywgX2luc3RhbmNlLnR0bCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UudGhyZWFkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlSW50NjRTdHJpbmcoMjgsIF9pbnN0YW5jZS50aHJlYWQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnNob3VsZEJlUXVpZXQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVCb29sKDI5LCBfaW5zdGFuY2Uuc2hvdWxkQmVRdWlldCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UubXVjTWluaW11bUFjY2Vzc0xldmVsKSB7XG4gICAgICBfd3JpdGVyLndyaXRlRW51bSgyNCwgX2luc3RhbmNlLm11Y01pbmltdW1BY2Nlc3NMZXZlbCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uuc3BlY2lhbFRhcmdldCkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDI1LFxuICAgICAgICBfaW5zdGFuY2Uuc3BlY2lhbFRhcmdldCBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLm1lc3NhZ2VNYXJrdXApIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAzNCxcbiAgICAgICAgX2luc3RhbmNlLm1lc3NhZ2VNYXJrdXAgYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDE0Lk1lc3NhZ2VNYXJrdXAuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UudGV4dCkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDExLFxuICAgICAgICBfaW5zdGFuY2UudGV4dCBhcyBhbnksXG4gICAgICAgIFRleHQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZmlsZSkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDEyLFxuICAgICAgICBfaW5zdGFuY2UuZmlsZSBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDEuRmlsZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5zdGlja2VyKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMTMsXG4gICAgICAgIF9pbnN0YW5jZS5zdGlja2VyIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwNS5TdGlja2VyLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmxvY2F0aW9uKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMTQsXG4gICAgICAgIF9pbnN0YW5jZS5sb2NhdGlvbiBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDYuTG9jYXRpb24uc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UubGl2ZUxvY2F0aW9uKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMTUsXG4gICAgICAgIF9pbnN0YW5jZS5saXZlTG9jYXRpb24gYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDA2LkxpdmVMb2NhdGlvbi5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5wb2xsKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMTYsXG4gICAgICAgIF9pbnN0YW5jZS5wb2xsIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxMS5Qb2xsLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnRyYW5zYWN0aW9uKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMTcsXG4gICAgICAgIF9pbnN0YW5jZS50cmFuc2FjdGlvbiBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDcuVHJhbnNhY3Rpb24uc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZm9ybSkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDE4LFxuICAgICAgICBfaW5zdGFuY2UuZm9ybSBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMTAuRm9ybS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5wZXJzaXN0RXZlbnQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAxOSxcbiAgICAgICAgX2luc3RhbmNlLnBlcnNpc3RFdmVudCBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDguUGVyc2lzdGVudEV2ZW50LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmJ1dHRvbnMpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAyMCxcbiAgICAgICAgX2luc3RhbmNlLmJ1dHRvbnMgYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDEwLkJ1dHRvbnMuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uuc2hhcmVVaWQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAyMSxcbiAgICAgICAgX2luc3RhbmNlLnNoYXJlVWlkIGFzIGFueSxcbiAgICAgICAgU2hhcmVVaWQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZm9ybVJlc3VsdCkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDIyLFxuICAgICAgICBfaW5zdGFuY2UuZm9ybVJlc3VsdCBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMTAuRm9ybVJlc3VsdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDI2LFxuICAgICAgICBfaW5zdGFuY2Uuc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QgYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDA5LlNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnNoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMjcsXG4gICAgICAgIF9pbnN0YW5jZS5zaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZSBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDkuU2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2Uuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuY2FsbEV2ZW50KSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMzEsXG4gICAgICAgIF9pbnN0YW5jZS5jYWxsRXZlbnQgYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDEzLkNhbGxFdmVudC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS50YWJsZSkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDMyLFxuICAgICAgICBfaW5zdGFuY2UudGFibGUgYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDEwLlRhYmxlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnBheW1lbnRJbmZvcm1hdGlvbikge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDM1LFxuICAgICAgICBfaW5zdGFuY2UucGF5bWVudEluZm9ybWF0aW9uIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwNy5QYXltZW50SW5mb3JtYXRpb24uc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcGFja2V0SWQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2lkPzogc3RyaW5nO1xuICBwcml2YXRlIF90aW1lPzogc3RyaW5nO1xuICBwcml2YXRlIF9mcm9tPzogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQ7XG4gIHByaXZhdGUgX3RvPzogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQ7XG4gIHByaXZhdGUgX3JlcGx5VG9JZD86IHN0cmluZztcbiAgcHJpdmF0ZSBfcmVwbGllZE1lc3NhZ2VCcmllZj86IE1lc3NhZ2VCcmllZjtcbiAgcHJpdmF0ZSBfZm9yd2FyZEZyb20/OiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZDtcbiAgcHJpdmF0ZSBfZ2VuZXJhdGVkQnk/OiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZDtcbiAgcHJpdmF0ZSBfZWRpdGVkPzogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfZW5jcnlwdGVkPzogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfdHRsPzogbnVtYmVyO1xuICBwcml2YXRlIF90aHJlYWQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3Nob3VsZEJlUXVpZXQ/OiBib29sZWFuO1xuICBwcml2YXRlIF9tdWNNaW5pbXVtQWNjZXNzTGV2ZWw/OiBwcm90b1B1YlYxTW9kZWxzMDEyLlJvbGU7XG4gIHByaXZhdGUgX3NwZWNpYWxUYXJnZXQ/OiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZDtcbiAgcHJpdmF0ZSBfbWVzc2FnZU1hcmt1cD86IHByb3RvUHViVjFNb2RlbHMwMTQuTWVzc2FnZU1hcmt1cDtcbiAgcHJpdmF0ZSBfdGV4dD86IFRleHQ7XG4gIHByaXZhdGUgX2ZpbGU/OiBwcm90b1B1YlYxTW9kZWxzMDAxLkZpbGU7XG4gIHByaXZhdGUgX3N0aWNrZXI/OiBwcm90b1B1YlYxTW9kZWxzMDA1LlN0aWNrZXI7XG4gIHByaXZhdGUgX2xvY2F0aW9uPzogcHJvdG9QdWJWMU1vZGVsczAwNi5Mb2NhdGlvbjtcbiAgcHJpdmF0ZSBfbGl2ZUxvY2F0aW9uPzogcHJvdG9QdWJWMU1vZGVsczAwNi5MaXZlTG9jYXRpb247XG4gIHByaXZhdGUgX3BvbGw/OiBwcm90b1B1YlYxTW9kZWxzMDExLlBvbGw7XG4gIHByaXZhdGUgX3RyYW5zYWN0aW9uPzogcHJvdG9QdWJWMU1vZGVsczAwNy5UcmFuc2FjdGlvbjtcbiAgcHJpdmF0ZSBfZm9ybT86IHByb3RvUHViVjFNb2RlbHMwMTAuRm9ybTtcbiAgcHJpdmF0ZSBfcGVyc2lzdEV2ZW50PzogcHJvdG9QdWJWMU1vZGVsczAwOC5QZXJzaXN0ZW50RXZlbnQ7XG4gIHByaXZhdGUgX2J1dHRvbnM/OiBwcm90b1B1YlYxTW9kZWxzMDEwLkJ1dHRvbnM7XG4gIHByaXZhdGUgX3NoYXJlVWlkPzogU2hhcmVVaWQ7XG4gIHByaXZhdGUgX2Zvcm1SZXN1bHQ/OiBwcm90b1B1YlYxTW9kZWxzMDEwLkZvcm1SZXN1bHQ7XG4gIHByaXZhdGUgX3NoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0PzogcHJvdG9QdWJWMU1vZGVsczAwOS5TaGFyZVByaXZhdGVEYXRhUmVxdWVzdDtcbiAgcHJpdmF0ZSBfc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2U/OiBwcm90b1B1YlYxTW9kZWxzMDA5LlNoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlO1xuICBwcml2YXRlIF9jYWxsRXZlbnQ/OiBwcm90b1B1YlYxTW9kZWxzMDEzLkNhbGxFdmVudDtcbiAgcHJpdmF0ZSBfdGFibGU/OiBwcm90b1B1YlYxTW9kZWxzMDEwLlRhYmxlO1xuICBwcml2YXRlIF9wYXltZW50SW5mb3JtYXRpb24/OiBwcm90b1B1YlYxTW9kZWxzMDA3LlBheW1lbnRJbmZvcm1hdGlvbjtcblxuICBwcml2YXRlIF90eXBlOiBNZXNzYWdlLlR5cGVDYXNlID0gTWVzc2FnZS5UeXBlQ2FzZS5ub25lO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgTWVzc2FnZSB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxNZXNzYWdlLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnBhY2tldElkID0gX3ZhbHVlLnBhY2tldElkO1xuICAgIHRoaXMuaWQgPSBfdmFsdWUuaWQ7XG4gICAgdGhpcy50aW1lID0gX3ZhbHVlLnRpbWU7XG4gICAgdGhpcy5mcm9tID0gX3ZhbHVlLmZyb21cbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkKF92YWx1ZS5mcm9tKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy50byA9IF92YWx1ZS50byA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZChfdmFsdWUudG8pIDogdW5kZWZpbmVkO1xuICAgIHRoaXMucmVwbHlUb0lkID0gX3ZhbHVlLnJlcGx5VG9JZDtcbiAgICB0aGlzLnJlcGxpZWRNZXNzYWdlQnJpZWYgPSBfdmFsdWUucmVwbGllZE1lc3NhZ2VCcmllZlxuICAgICAgPyBuZXcgTWVzc2FnZUJyaWVmKF92YWx1ZS5yZXBsaWVkTWVzc2FnZUJyaWVmKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5mb3J3YXJkRnJvbSA9IF92YWx1ZS5mb3J3YXJkRnJvbVxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQoX3ZhbHVlLmZvcndhcmRGcm9tKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5nZW5lcmF0ZWRCeSA9IF92YWx1ZS5nZW5lcmF0ZWRCeVxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQoX3ZhbHVlLmdlbmVyYXRlZEJ5KVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5lZGl0ZWQgPSBfdmFsdWUuZWRpdGVkO1xuICAgIHRoaXMuZW5jcnlwdGVkID0gX3ZhbHVlLmVuY3J5cHRlZDtcbiAgICB0aGlzLnR0bCA9IF92YWx1ZS50dGw7XG4gICAgdGhpcy50aHJlYWQgPSBfdmFsdWUudGhyZWFkO1xuICAgIHRoaXMuc2hvdWxkQmVRdWlldCA9IF92YWx1ZS5zaG91bGRCZVF1aWV0O1xuICAgIHRoaXMubXVjTWluaW11bUFjY2Vzc0xldmVsID0gX3ZhbHVlLm11Y01pbmltdW1BY2Nlc3NMZXZlbDtcbiAgICB0aGlzLnNwZWNpYWxUYXJnZXQgPSBfdmFsdWUuc3BlY2lhbFRhcmdldFxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQoX3ZhbHVlLnNwZWNpYWxUYXJnZXQpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1lc3NhZ2VNYXJrdXAgPSBfdmFsdWUubWVzc2FnZU1hcmt1cFxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAxNC5NZXNzYWdlTWFya3VwKF92YWx1ZS5tZXNzYWdlTWFya3VwKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy50ZXh0ID0gX3ZhbHVlLnRleHQgPyBuZXcgVGV4dChfdmFsdWUudGV4dCkgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5maWxlID0gX3ZhbHVlLmZpbGVcbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMDEuRmlsZShfdmFsdWUuZmlsZSlcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuc3RpY2tlciA9IF92YWx1ZS5zdGlja2VyXG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDA1LlN0aWNrZXIoX3ZhbHVlLnN0aWNrZXIpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmxvY2F0aW9uID0gX3ZhbHVlLmxvY2F0aW9uXG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDA2LkxvY2F0aW9uKF92YWx1ZS5sb2NhdGlvbilcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMubGl2ZUxvY2F0aW9uID0gX3ZhbHVlLmxpdmVMb2NhdGlvblxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAwNi5MaXZlTG9jYXRpb24oX3ZhbHVlLmxpdmVMb2NhdGlvbilcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMucG9sbCA9IF92YWx1ZS5wb2xsXG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDExLlBvbGwoX3ZhbHVlLnBvbGwpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnRyYW5zYWN0aW9uID0gX3ZhbHVlLnRyYW5zYWN0aW9uXG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDA3LlRyYW5zYWN0aW9uKF92YWx1ZS50cmFuc2FjdGlvbilcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuZm9ybSA9IF92YWx1ZS5mb3JtXG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDEwLkZvcm0oX3ZhbHVlLmZvcm0pXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnBlcnNpc3RFdmVudCA9IF92YWx1ZS5wZXJzaXN0RXZlbnRcbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMDguUGVyc2lzdGVudEV2ZW50KF92YWx1ZS5wZXJzaXN0RXZlbnQpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmJ1dHRvbnMgPSBfdmFsdWUuYnV0dG9uc1xuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAxMC5CdXR0b25zKF92YWx1ZS5idXR0b25zKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5zaGFyZVVpZCA9IF92YWx1ZS5zaGFyZVVpZCA/IG5ldyBTaGFyZVVpZChfdmFsdWUuc2hhcmVVaWQpIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuZm9ybVJlc3VsdCA9IF92YWx1ZS5mb3JtUmVzdWx0XG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDEwLkZvcm1SZXN1bHQoX3ZhbHVlLmZvcm1SZXN1bHQpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0ID0gX3ZhbHVlLnNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0XG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDA5LlNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0KFxuICAgICAgICAgIF92YWx1ZS5zaGFyZVByaXZhdGVEYXRhUmVxdWVzdFxuICAgICAgICApXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlID0gX3ZhbHVlLnNoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlXG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDA5LlNoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlKFxuICAgICAgICAgIF92YWx1ZS5zaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZVxuICAgICAgICApXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmNhbGxFdmVudCA9IF92YWx1ZS5jYWxsRXZlbnRcbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMTMuQ2FsbEV2ZW50KF92YWx1ZS5jYWxsRXZlbnQpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnRhYmxlID0gX3ZhbHVlLnRhYmxlXG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDEwLlRhYmxlKF92YWx1ZS50YWJsZSlcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMucGF5bWVudEluZm9ybWF0aW9uID0gX3ZhbHVlLnBheW1lbnRJbmZvcm1hdGlvblxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAwNy5QYXltZW50SW5mb3JtYXRpb24oX3ZhbHVlLnBheW1lbnRJbmZvcm1hdGlvbilcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIE1lc3NhZ2UucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBwYWNrZXRJZCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wYWNrZXRJZDtcbiAgfVxuICBzZXQgcGFja2V0SWQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3BhY2tldElkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGlkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2lkO1xuICB9XG4gIHNldCBpZCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5faWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdGltZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90aW1lO1xuICB9XG4gIHNldCB0aW1lKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl90aW1lID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGZyb20oKTogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9mcm9tO1xuICB9XG4gIHNldCBmcm9tKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZCB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2Zyb20gPSB2YWx1ZTtcbiAgfVxuICBnZXQgdG8oKTogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90bztcbiAgfVxuICBzZXQgdG8odmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdG8gPSB2YWx1ZTtcbiAgfVxuICBnZXQgcmVwbHlUb0lkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcGx5VG9JZDtcbiAgfVxuICBzZXQgcmVwbHlUb0lkKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9yZXBseVRvSWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcmVwbGllZE1lc3NhZ2VCcmllZigpOiBNZXNzYWdlQnJpZWYgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9yZXBsaWVkTWVzc2FnZUJyaWVmO1xuICB9XG4gIHNldCByZXBsaWVkTWVzc2FnZUJyaWVmKHZhbHVlOiBNZXNzYWdlQnJpZWYgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9yZXBsaWVkTWVzc2FnZUJyaWVmID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGZvcndhcmRGcm9tKCk6IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZm9yd2FyZEZyb207XG4gIH1cbiAgc2V0IGZvcndhcmRGcm9tKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZCB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2ZvcndhcmRGcm9tID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGdlbmVyYXRlZEJ5KCk6IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZ2VuZXJhdGVkQnk7XG4gIH1cbiAgc2V0IGdlbmVyYXRlZEJ5KHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZCB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2dlbmVyYXRlZEJ5ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGVkaXRlZCgpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZWRpdGVkO1xuICB9XG4gIHNldCBlZGl0ZWQodmFsdWU6IGJvb2xlYW4gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9lZGl0ZWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZW5jcnlwdGVkKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9lbmNyeXB0ZWQ7XG4gIH1cbiAgc2V0IGVuY3J5cHRlZCh2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2VuY3J5cHRlZCA9IHZhbHVlO1xuICB9XG4gIGdldCB0dGwoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdHRsO1xuICB9XG4gIHNldCB0dGwodmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3R0bCA9IHZhbHVlO1xuICB9XG4gIGdldCB0aHJlYWQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdGhyZWFkO1xuICB9XG4gIHNldCB0aHJlYWQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3RocmVhZCA9IHZhbHVlO1xuICB9XG4gIGdldCBzaG91bGRCZVF1aWV0KCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zaG91bGRCZVF1aWV0O1xuICB9XG4gIHNldCBzaG91bGRCZVF1aWV0KHZhbHVlOiBib29sZWFuIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fc2hvdWxkQmVRdWlldCA9IHZhbHVlO1xuICB9XG4gIGdldCBtdWNNaW5pbXVtQWNjZXNzTGV2ZWwoKTogcHJvdG9QdWJWMU1vZGVsczAxMi5Sb2xlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbXVjTWluaW11bUFjY2Vzc0xldmVsO1xuICB9XG4gIHNldCBtdWNNaW5pbXVtQWNjZXNzTGV2ZWwodmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMTIuUm9sZSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX211Y01pbmltdW1BY2Nlc3NMZXZlbCA9IHZhbHVlO1xuICB9XG4gIGdldCBzcGVjaWFsVGFyZ2V0KCk6IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc3BlY2lhbFRhcmdldDtcbiAgfVxuICBzZXQgc3BlY2lhbFRhcmdldCh2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zcGVjaWFsVGFyZ2V0ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG1lc3NhZ2VNYXJrdXAoKTogcHJvdG9QdWJWMU1vZGVsczAxNC5NZXNzYWdlTWFya3VwIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbWVzc2FnZU1hcmt1cDtcbiAgfVxuICBzZXQgbWVzc2FnZU1hcmt1cCh2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAxNC5NZXNzYWdlTWFya3VwIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbWVzc2FnZU1hcmt1cCA9IHZhbHVlO1xuICB9XG4gIGdldCB0ZXh0KCk6IFRleHQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90ZXh0O1xuICB9XG4gIHNldCB0ZXh0KHZhbHVlOiBUZXh0IHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX2ZpbGUgPSB0aGlzLl9zdGlja2VyID0gdGhpcy5fbG9jYXRpb24gPSB0aGlzLl9saXZlTG9jYXRpb24gPSB0aGlzLl9wb2xsID0gdGhpcy5fdHJhbnNhY3Rpb24gPSB0aGlzLl9mb3JtID0gdGhpcy5fcGVyc2lzdEV2ZW50ID0gdGhpcy5fYnV0dG9ucyA9IHRoaXMuX3NoYXJlVWlkID0gdGhpcy5fZm9ybVJlc3VsdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0ID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UgPSB0aGlzLl9jYWxsRXZlbnQgPSB0aGlzLl90YWJsZSA9IHRoaXMuX3BheW1lbnRJbmZvcm1hdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBNZXNzYWdlLlR5cGVDYXNlLnRleHQ7XG4gICAgfVxuICAgIHRoaXMuX3RleHQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZmlsZSgpOiBwcm90b1B1YlYxTW9kZWxzMDAxLkZpbGUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9maWxlO1xuICB9XG4gIHNldCBmaWxlKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDAxLkZpbGUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fdGV4dCA9IHRoaXMuX3N0aWNrZXIgPSB0aGlzLl9sb2NhdGlvbiA9IHRoaXMuX2xpdmVMb2NhdGlvbiA9IHRoaXMuX3BvbGwgPSB0aGlzLl90cmFuc2FjdGlvbiA9IHRoaXMuX2Zvcm0gPSB0aGlzLl9wZXJzaXN0RXZlbnQgPSB0aGlzLl9idXR0b25zID0gdGhpcy5fc2hhcmVVaWQgPSB0aGlzLl9mb3JtUmVzdWx0ID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZSA9IHRoaXMuX2NhbGxFdmVudCA9IHRoaXMuX3RhYmxlID0gdGhpcy5fcGF5bWVudEluZm9ybWF0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IE1lc3NhZ2UuVHlwZUNhc2UuZmlsZTtcbiAgICB9XG4gICAgdGhpcy5fZmlsZSA9IHZhbHVlO1xuICB9XG4gIGdldCBzdGlja2VyKCk6IHByb3RvUHViVjFNb2RlbHMwMDUuU3RpY2tlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3N0aWNrZXI7XG4gIH1cbiAgc2V0IHN0aWNrZXIodmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMDUuU3RpY2tlciB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl90ZXh0ID0gdGhpcy5fZmlsZSA9IHRoaXMuX2xvY2F0aW9uID0gdGhpcy5fbGl2ZUxvY2F0aW9uID0gdGhpcy5fcG9sbCA9IHRoaXMuX3RyYW5zYWN0aW9uID0gdGhpcy5fZm9ybSA9IHRoaXMuX3BlcnNpc3RFdmVudCA9IHRoaXMuX2J1dHRvbnMgPSB0aGlzLl9zaGFyZVVpZCA9IHRoaXMuX2Zvcm1SZXN1bHQgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlID0gdGhpcy5fY2FsbEV2ZW50ID0gdGhpcy5fdGFibGUgPSB0aGlzLl9wYXltZW50SW5mb3JtYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gTWVzc2FnZS5UeXBlQ2FzZS5zdGlja2VyO1xuICAgIH1cbiAgICB0aGlzLl9zdGlja2VyID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGxvY2F0aW9uKCk6IHByb3RvUHViVjFNb2RlbHMwMDYuTG9jYXRpb24gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9sb2NhdGlvbjtcbiAgfVxuICBzZXQgbG9jYXRpb24odmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMDYuTG9jYXRpb24gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fdGV4dCA9IHRoaXMuX2ZpbGUgPSB0aGlzLl9zdGlja2VyID0gdGhpcy5fbGl2ZUxvY2F0aW9uID0gdGhpcy5fcG9sbCA9IHRoaXMuX3RyYW5zYWN0aW9uID0gdGhpcy5fZm9ybSA9IHRoaXMuX3BlcnNpc3RFdmVudCA9IHRoaXMuX2J1dHRvbnMgPSB0aGlzLl9zaGFyZVVpZCA9IHRoaXMuX2Zvcm1SZXN1bHQgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlID0gdGhpcy5fY2FsbEV2ZW50ID0gdGhpcy5fdGFibGUgPSB0aGlzLl9wYXltZW50SW5mb3JtYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gTWVzc2FnZS5UeXBlQ2FzZS5sb2NhdGlvbjtcbiAgICB9XG4gICAgdGhpcy5fbG9jYXRpb24gPSB2YWx1ZTtcbiAgfVxuICBnZXQgbGl2ZUxvY2F0aW9uKCk6IHByb3RvUHViVjFNb2RlbHMwMDYuTGl2ZUxvY2F0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbGl2ZUxvY2F0aW9uO1xuICB9XG4gIHNldCBsaXZlTG9jYXRpb24odmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMDYuTGl2ZUxvY2F0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3RleHQgPSB0aGlzLl9maWxlID0gdGhpcy5fc3RpY2tlciA9IHRoaXMuX2xvY2F0aW9uID0gdGhpcy5fcG9sbCA9IHRoaXMuX3RyYW5zYWN0aW9uID0gdGhpcy5fZm9ybSA9IHRoaXMuX3BlcnNpc3RFdmVudCA9IHRoaXMuX2J1dHRvbnMgPSB0aGlzLl9zaGFyZVVpZCA9IHRoaXMuX2Zvcm1SZXN1bHQgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlID0gdGhpcy5fY2FsbEV2ZW50ID0gdGhpcy5fdGFibGUgPSB0aGlzLl9wYXltZW50SW5mb3JtYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gTWVzc2FnZS5UeXBlQ2FzZS5saXZlTG9jYXRpb247XG4gICAgfVxuICAgIHRoaXMuX2xpdmVMb2NhdGlvbiA9IHZhbHVlO1xuICB9XG4gIGdldCBwb2xsKCk6IHByb3RvUHViVjFNb2RlbHMwMTEuUG9sbCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3BvbGw7XG4gIH1cbiAgc2V0IHBvbGwodmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMTEuUG9sbCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl90ZXh0ID0gdGhpcy5fZmlsZSA9IHRoaXMuX3N0aWNrZXIgPSB0aGlzLl9sb2NhdGlvbiA9IHRoaXMuX2xpdmVMb2NhdGlvbiA9IHRoaXMuX3RyYW5zYWN0aW9uID0gdGhpcy5fZm9ybSA9IHRoaXMuX3BlcnNpc3RFdmVudCA9IHRoaXMuX2J1dHRvbnMgPSB0aGlzLl9zaGFyZVVpZCA9IHRoaXMuX2Zvcm1SZXN1bHQgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlID0gdGhpcy5fY2FsbEV2ZW50ID0gdGhpcy5fdGFibGUgPSB0aGlzLl9wYXltZW50SW5mb3JtYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gTWVzc2FnZS5UeXBlQ2FzZS5wb2xsO1xuICAgIH1cbiAgICB0aGlzLl9wb2xsID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHRyYW5zYWN0aW9uKCk6IHByb3RvUHViVjFNb2RlbHMwMDcuVHJhbnNhY3Rpb24gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90cmFuc2FjdGlvbjtcbiAgfVxuICBzZXQgdHJhbnNhY3Rpb24odmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMDcuVHJhbnNhY3Rpb24gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fdGV4dCA9IHRoaXMuX2ZpbGUgPSB0aGlzLl9zdGlja2VyID0gdGhpcy5fbG9jYXRpb24gPSB0aGlzLl9saXZlTG9jYXRpb24gPSB0aGlzLl9wb2xsID0gdGhpcy5fZm9ybSA9IHRoaXMuX3BlcnNpc3RFdmVudCA9IHRoaXMuX2J1dHRvbnMgPSB0aGlzLl9zaGFyZVVpZCA9IHRoaXMuX2Zvcm1SZXN1bHQgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlID0gdGhpcy5fY2FsbEV2ZW50ID0gdGhpcy5fdGFibGUgPSB0aGlzLl9wYXltZW50SW5mb3JtYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gTWVzc2FnZS5UeXBlQ2FzZS50cmFuc2FjdGlvbjtcbiAgICB9XG4gICAgdGhpcy5fdHJhbnNhY3Rpb24gPSB2YWx1ZTtcbiAgfVxuICBnZXQgZm9ybSgpOiBwcm90b1B1YlYxTW9kZWxzMDEwLkZvcm0gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9mb3JtO1xuICB9XG4gIHNldCBmb3JtKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDEwLkZvcm0gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fdGV4dCA9IHRoaXMuX2ZpbGUgPSB0aGlzLl9zdGlja2VyID0gdGhpcy5fbG9jYXRpb24gPSB0aGlzLl9saXZlTG9jYXRpb24gPSB0aGlzLl9wb2xsID0gdGhpcy5fdHJhbnNhY3Rpb24gPSB0aGlzLl9wZXJzaXN0RXZlbnQgPSB0aGlzLl9idXR0b25zID0gdGhpcy5fc2hhcmVVaWQgPSB0aGlzLl9mb3JtUmVzdWx0ID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZSA9IHRoaXMuX2NhbGxFdmVudCA9IHRoaXMuX3RhYmxlID0gdGhpcy5fcGF5bWVudEluZm9ybWF0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IE1lc3NhZ2UuVHlwZUNhc2UuZm9ybTtcbiAgICB9XG4gICAgdGhpcy5fZm9ybSA9IHZhbHVlO1xuICB9XG4gIGdldCBwZXJzaXN0RXZlbnQoKTogcHJvdG9QdWJWMU1vZGVsczAwOC5QZXJzaXN0ZW50RXZlbnQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wZXJzaXN0RXZlbnQ7XG4gIH1cbiAgc2V0IHBlcnNpc3RFdmVudCh2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAwOC5QZXJzaXN0ZW50RXZlbnQgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fdGV4dCA9IHRoaXMuX2ZpbGUgPSB0aGlzLl9zdGlja2VyID0gdGhpcy5fbG9jYXRpb24gPSB0aGlzLl9saXZlTG9jYXRpb24gPSB0aGlzLl9wb2xsID0gdGhpcy5fdHJhbnNhY3Rpb24gPSB0aGlzLl9mb3JtID0gdGhpcy5fYnV0dG9ucyA9IHRoaXMuX3NoYXJlVWlkID0gdGhpcy5fZm9ybVJlc3VsdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0ID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UgPSB0aGlzLl9jYWxsRXZlbnQgPSB0aGlzLl90YWJsZSA9IHRoaXMuX3BheW1lbnRJbmZvcm1hdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBNZXNzYWdlLlR5cGVDYXNlLnBlcnNpc3RFdmVudDtcbiAgICB9XG4gICAgdGhpcy5fcGVyc2lzdEV2ZW50ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGJ1dHRvbnMoKTogcHJvdG9QdWJWMU1vZGVsczAxMC5CdXR0b25zIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fYnV0dG9ucztcbiAgfVxuICBzZXQgYnV0dG9ucyh2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAxMC5CdXR0b25zIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3RleHQgPSB0aGlzLl9maWxlID0gdGhpcy5fc3RpY2tlciA9IHRoaXMuX2xvY2F0aW9uID0gdGhpcy5fbGl2ZUxvY2F0aW9uID0gdGhpcy5fcG9sbCA9IHRoaXMuX3RyYW5zYWN0aW9uID0gdGhpcy5fZm9ybSA9IHRoaXMuX3BlcnNpc3RFdmVudCA9IHRoaXMuX3NoYXJlVWlkID0gdGhpcy5fZm9ybVJlc3VsdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0ID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UgPSB0aGlzLl9jYWxsRXZlbnQgPSB0aGlzLl90YWJsZSA9IHRoaXMuX3BheW1lbnRJbmZvcm1hdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBNZXNzYWdlLlR5cGVDYXNlLmJ1dHRvbnM7XG4gICAgfVxuICAgIHRoaXMuX2J1dHRvbnMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc2hhcmVVaWQoKTogU2hhcmVVaWQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zaGFyZVVpZDtcbiAgfVxuICBzZXQgc2hhcmVVaWQodmFsdWU6IFNoYXJlVWlkIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3RleHQgPSB0aGlzLl9maWxlID0gdGhpcy5fc3RpY2tlciA9IHRoaXMuX2xvY2F0aW9uID0gdGhpcy5fbGl2ZUxvY2F0aW9uID0gdGhpcy5fcG9sbCA9IHRoaXMuX3RyYW5zYWN0aW9uID0gdGhpcy5fZm9ybSA9IHRoaXMuX3BlcnNpc3RFdmVudCA9IHRoaXMuX2J1dHRvbnMgPSB0aGlzLl9mb3JtUmVzdWx0ID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZSA9IHRoaXMuX2NhbGxFdmVudCA9IHRoaXMuX3RhYmxlID0gdGhpcy5fcGF5bWVudEluZm9ybWF0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IE1lc3NhZ2UuVHlwZUNhc2Uuc2hhcmVVaWQ7XG4gICAgfVxuICAgIHRoaXMuX3NoYXJlVWlkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGZvcm1SZXN1bHQoKTogcHJvdG9QdWJWMU1vZGVsczAxMC5Gb3JtUmVzdWx0IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZm9ybVJlc3VsdDtcbiAgfVxuICBzZXQgZm9ybVJlc3VsdCh2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAxMC5Gb3JtUmVzdWx0IHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3RleHQgPSB0aGlzLl9maWxlID0gdGhpcy5fc3RpY2tlciA9IHRoaXMuX2xvY2F0aW9uID0gdGhpcy5fbGl2ZUxvY2F0aW9uID0gdGhpcy5fcG9sbCA9IHRoaXMuX3RyYW5zYWN0aW9uID0gdGhpcy5fZm9ybSA9IHRoaXMuX3BlcnNpc3RFdmVudCA9IHRoaXMuX2J1dHRvbnMgPSB0aGlzLl9zaGFyZVVpZCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0ID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UgPSB0aGlzLl9jYWxsRXZlbnQgPSB0aGlzLl90YWJsZSA9IHRoaXMuX3BheW1lbnRJbmZvcm1hdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBNZXNzYWdlLlR5cGVDYXNlLmZvcm1SZXN1bHQ7XG4gICAgfVxuICAgIHRoaXMuX2Zvcm1SZXN1bHQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QoKTpcbiAgICB8IHByb3RvUHViVjFNb2RlbHMwMDkuU2hhcmVQcml2YXRlRGF0YVJlcXVlc3RcbiAgICB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0O1xuICB9XG4gIHNldCBzaGFyZVByaXZhdGVEYXRhUmVxdWVzdChcbiAgICB2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAwOS5TaGFyZVByaXZhdGVEYXRhUmVxdWVzdCB8IHVuZGVmaW5lZFxuICApIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fdGV4dCA9IHRoaXMuX2ZpbGUgPSB0aGlzLl9zdGlja2VyID0gdGhpcy5fbG9jYXRpb24gPSB0aGlzLl9saXZlTG9jYXRpb24gPSB0aGlzLl9wb2xsID0gdGhpcy5fdHJhbnNhY3Rpb24gPSB0aGlzLl9mb3JtID0gdGhpcy5fcGVyc2lzdEV2ZW50ID0gdGhpcy5fYnV0dG9ucyA9IHRoaXMuX3NoYXJlVWlkID0gdGhpcy5fZm9ybVJlc3VsdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlID0gdGhpcy5fY2FsbEV2ZW50ID0gdGhpcy5fdGFibGUgPSB0aGlzLl9wYXltZW50SW5mb3JtYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gTWVzc2FnZS5UeXBlQ2FzZS5zaGFyZVByaXZhdGVEYXRhUmVxdWVzdDtcbiAgICB9XG4gICAgdGhpcy5fc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UoKTpcbiAgICB8IHByb3RvUHViVjFNb2RlbHMwMDkuU2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2VcbiAgICB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlO1xuICB9XG4gIHNldCBzaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZShcbiAgICB2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAwOS5TaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZSB8IHVuZGVmaW5lZFxuICApIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fdGV4dCA9IHRoaXMuX2ZpbGUgPSB0aGlzLl9zdGlja2VyID0gdGhpcy5fbG9jYXRpb24gPSB0aGlzLl9saXZlTG9jYXRpb24gPSB0aGlzLl9wb2xsID0gdGhpcy5fdHJhbnNhY3Rpb24gPSB0aGlzLl9mb3JtID0gdGhpcy5fcGVyc2lzdEV2ZW50ID0gdGhpcy5fYnV0dG9ucyA9IHRoaXMuX3NoYXJlVWlkID0gdGhpcy5fZm9ybVJlc3VsdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0ID0gdGhpcy5fY2FsbEV2ZW50ID0gdGhpcy5fdGFibGUgPSB0aGlzLl9wYXltZW50SW5mb3JtYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gTWVzc2FnZS5UeXBlQ2FzZS5zaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZTtcbiAgICB9XG4gICAgdGhpcy5fc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UgPSB2YWx1ZTtcbiAgfVxuICBnZXQgY2FsbEV2ZW50KCk6IHByb3RvUHViVjFNb2RlbHMwMTMuQ2FsbEV2ZW50IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fY2FsbEV2ZW50O1xuICB9XG4gIHNldCBjYWxsRXZlbnQodmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMTMuQ2FsbEV2ZW50IHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3RleHQgPSB0aGlzLl9maWxlID0gdGhpcy5fc3RpY2tlciA9IHRoaXMuX2xvY2F0aW9uID0gdGhpcy5fbGl2ZUxvY2F0aW9uID0gdGhpcy5fcG9sbCA9IHRoaXMuX3RyYW5zYWN0aW9uID0gdGhpcy5fZm9ybSA9IHRoaXMuX3BlcnNpc3RFdmVudCA9IHRoaXMuX2J1dHRvbnMgPSB0aGlzLl9zaGFyZVVpZCA9IHRoaXMuX2Zvcm1SZXN1bHQgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlID0gdGhpcy5fdGFibGUgPSB0aGlzLl9wYXltZW50SW5mb3JtYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gTWVzc2FnZS5UeXBlQ2FzZS5jYWxsRXZlbnQ7XG4gICAgfVxuICAgIHRoaXMuX2NhbGxFdmVudCA9IHZhbHVlO1xuICB9XG4gIGdldCB0YWJsZSgpOiBwcm90b1B1YlYxTW9kZWxzMDEwLlRhYmxlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdGFibGU7XG4gIH1cbiAgc2V0IHRhYmxlKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDEwLlRhYmxlIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3RleHQgPSB0aGlzLl9maWxlID0gdGhpcy5fc3RpY2tlciA9IHRoaXMuX2xvY2F0aW9uID0gdGhpcy5fbGl2ZUxvY2F0aW9uID0gdGhpcy5fcG9sbCA9IHRoaXMuX3RyYW5zYWN0aW9uID0gdGhpcy5fZm9ybSA9IHRoaXMuX3BlcnNpc3RFdmVudCA9IHRoaXMuX2J1dHRvbnMgPSB0aGlzLl9zaGFyZVVpZCA9IHRoaXMuX2Zvcm1SZXN1bHQgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlID0gdGhpcy5fY2FsbEV2ZW50ID0gdGhpcy5fcGF5bWVudEluZm9ybWF0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IE1lc3NhZ2UuVHlwZUNhc2UudGFibGU7XG4gICAgfVxuICAgIHRoaXMuX3RhYmxlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHBheW1lbnRJbmZvcm1hdGlvbigpOiBwcm90b1B1YlYxTW9kZWxzMDA3LlBheW1lbnRJbmZvcm1hdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3BheW1lbnRJbmZvcm1hdGlvbjtcbiAgfVxuICBzZXQgcGF5bWVudEluZm9ybWF0aW9uKFxuICAgIHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDA3LlBheW1lbnRJbmZvcm1hdGlvbiB8IHVuZGVmaW5lZFxuICApIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fdGV4dCA9IHRoaXMuX2ZpbGUgPSB0aGlzLl9zdGlja2VyID0gdGhpcy5fbG9jYXRpb24gPSB0aGlzLl9saXZlTG9jYXRpb24gPSB0aGlzLl9wb2xsID0gdGhpcy5fdHJhbnNhY3Rpb24gPSB0aGlzLl9mb3JtID0gdGhpcy5fcGVyc2lzdEV2ZW50ID0gdGhpcy5fYnV0dG9ucyA9IHRoaXMuX3NoYXJlVWlkID0gdGhpcy5fZm9ybVJlc3VsdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0ID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UgPSB0aGlzLl9jYWxsRXZlbnQgPSB0aGlzLl90YWJsZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBNZXNzYWdlLlR5cGVDYXNlLnBheW1lbnRJbmZvcm1hdGlvbjtcbiAgICB9XG4gICAgdGhpcy5fcGF5bWVudEluZm9ybWF0aW9uID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgTWVzc2FnZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBNZXNzYWdlLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFja2V0SWQ6IHRoaXMucGFja2V0SWQsXG4gICAgICBpZDogdGhpcy5pZCxcbiAgICAgIHRpbWU6IHRoaXMudGltZSxcbiAgICAgIGZyb206IHRoaXMuZnJvbSA/IHRoaXMuZnJvbS50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgdG86IHRoaXMudG8gPyB0aGlzLnRvLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICByZXBseVRvSWQ6IHRoaXMucmVwbHlUb0lkLFxuICAgICAgcmVwbGllZE1lc3NhZ2VCcmllZjogdGhpcy5yZXBsaWVkTWVzc2FnZUJyaWVmXG4gICAgICAgID8gdGhpcy5yZXBsaWVkTWVzc2FnZUJyaWVmLnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICBmb3J3YXJkRnJvbTogdGhpcy5mb3J3YXJkRnJvbSA/IHRoaXMuZm9yd2FyZEZyb20udG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGdlbmVyYXRlZEJ5OiB0aGlzLmdlbmVyYXRlZEJ5ID8gdGhpcy5nZW5lcmF0ZWRCeS50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgZWRpdGVkOiB0aGlzLmVkaXRlZCxcbiAgICAgIGVuY3J5cHRlZDogdGhpcy5lbmNyeXB0ZWQsXG4gICAgICB0dGw6IHRoaXMudHRsLFxuICAgICAgdGhyZWFkOiB0aGlzLnRocmVhZCxcbiAgICAgIHNob3VsZEJlUXVpZXQ6IHRoaXMuc2hvdWxkQmVRdWlldCxcbiAgICAgIG11Y01pbmltdW1BY2Nlc3NMZXZlbDogdGhpcy5tdWNNaW5pbXVtQWNjZXNzTGV2ZWwsXG4gICAgICBzcGVjaWFsVGFyZ2V0OiB0aGlzLnNwZWNpYWxUYXJnZXRcbiAgICAgICAgPyB0aGlzLnNwZWNpYWxUYXJnZXQudG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIG1lc3NhZ2VNYXJrdXA6IHRoaXMubWVzc2FnZU1hcmt1cFxuICAgICAgICA/IHRoaXMubWVzc2FnZU1hcmt1cC50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgdGV4dDogdGhpcy50ZXh0ID8gdGhpcy50ZXh0LnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBmaWxlOiB0aGlzLmZpbGUgPyB0aGlzLmZpbGUudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIHN0aWNrZXI6IHRoaXMuc3RpY2tlciA/IHRoaXMuc3RpY2tlci50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgbG9jYXRpb246IHRoaXMubG9jYXRpb24gPyB0aGlzLmxvY2F0aW9uLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBsaXZlTG9jYXRpb246IHRoaXMubGl2ZUxvY2F0aW9uXG4gICAgICAgID8gdGhpcy5saXZlTG9jYXRpb24udG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIHBvbGw6IHRoaXMucG9sbCA/IHRoaXMucG9sbC50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgdHJhbnNhY3Rpb246IHRoaXMudHJhbnNhY3Rpb24gPyB0aGlzLnRyYW5zYWN0aW9uLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBmb3JtOiB0aGlzLmZvcm0gPyB0aGlzLmZvcm0udG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIHBlcnNpc3RFdmVudDogdGhpcy5wZXJzaXN0RXZlbnRcbiAgICAgICAgPyB0aGlzLnBlcnNpc3RFdmVudC50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgYnV0dG9uczogdGhpcy5idXR0b25zID8gdGhpcy5idXR0b25zLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBzaGFyZVVpZDogdGhpcy5zaGFyZVVpZCA/IHRoaXMuc2hhcmVVaWQudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGZvcm1SZXN1bHQ6IHRoaXMuZm9ybVJlc3VsdCA/IHRoaXMuZm9ybVJlc3VsdC50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgc2hhcmVQcml2YXRlRGF0YVJlcXVlc3Q6IHRoaXMuc2hhcmVQcml2YXRlRGF0YVJlcXVlc3RcbiAgICAgICAgPyB0aGlzLnNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0LnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICBzaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZTogdGhpcy5zaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZVxuICAgICAgICA/IHRoaXMuc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UudG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIGNhbGxFdmVudDogdGhpcy5jYWxsRXZlbnQgPyB0aGlzLmNhbGxFdmVudC50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgdGFibGU6IHRoaXMudGFibGUgPyB0aGlzLnRhYmxlLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBwYXltZW50SW5mb3JtYXRpb246IHRoaXMucGF5bWVudEluZm9ybWF0aW9uXG4gICAgICAgID8gdGhpcy5wYXltZW50SW5mb3JtYXRpb24udG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IE1lc3NhZ2UuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBwYWNrZXRJZDogdGhpcy5wYWNrZXRJZCxcbiAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgdGltZTogdGhpcy50aW1lLFxuICAgICAgZnJvbTogdGhpcy5mcm9tID8gdGhpcy5mcm9tLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIHRvOiB0aGlzLnRvID8gdGhpcy50by50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICByZXBseVRvSWQ6IHRoaXMucmVwbHlUb0lkLFxuICAgICAgcmVwbGllZE1lc3NhZ2VCcmllZjogdGhpcy5yZXBsaWVkTWVzc2FnZUJyaWVmXG4gICAgICAgID8gdGhpcy5yZXBsaWVkTWVzc2FnZUJyaWVmLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbCxcbiAgICAgIGZvcndhcmRGcm9tOiB0aGlzLmZvcndhcmRGcm9tXG4gICAgICAgID8gdGhpcy5mb3J3YXJkRnJvbS50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICBnZW5lcmF0ZWRCeTogdGhpcy5nZW5lcmF0ZWRCeVxuICAgICAgICA/IHRoaXMuZ2VuZXJhdGVkQnkudG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsLFxuICAgICAgZWRpdGVkOiB0aGlzLmVkaXRlZCxcbiAgICAgIGVuY3J5cHRlZDogdGhpcy5lbmNyeXB0ZWQsXG4gICAgICB0dGw6IHRoaXMudHRsLFxuICAgICAgdGhyZWFkOiB0aGlzLnRocmVhZCxcbiAgICAgIHNob3VsZEJlUXVpZXQ6IHRoaXMuc2hvdWxkQmVRdWlldCxcbiAgICAgIG11Y01pbmltdW1BY2Nlc3NMZXZlbDpcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxMi5Sb2xlW1xuICAgICAgICAgIHRoaXMubXVjTWluaW11bUFjY2Vzc0xldmVsID09PSBudWxsIHx8XG4gICAgICAgICAgdGhpcy5tdWNNaW5pbXVtQWNjZXNzTGV2ZWwgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyAwXG4gICAgICAgICAgICA6IHRoaXMubXVjTWluaW11bUFjY2Vzc0xldmVsXG4gICAgICAgIF0sXG4gICAgICBzcGVjaWFsVGFyZ2V0OiB0aGlzLnNwZWNpYWxUYXJnZXRcbiAgICAgICAgPyB0aGlzLnNwZWNpYWxUYXJnZXQudG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsLFxuICAgICAgbWVzc2FnZU1hcmt1cDogdGhpcy5tZXNzYWdlTWFya3VwXG4gICAgICAgID8gdGhpcy5tZXNzYWdlTWFya3VwLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbCxcbiAgICAgIHRleHQ6IHRoaXMudGV4dCA/IHRoaXMudGV4dC50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICBmaWxlOiB0aGlzLmZpbGUgPyB0aGlzLmZpbGUudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgc3RpY2tlcjogdGhpcy5zdGlja2VyID8gdGhpcy5zdGlja2VyLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIGxvY2F0aW9uOiB0aGlzLmxvY2F0aW9uID8gdGhpcy5sb2NhdGlvbi50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICBsaXZlTG9jYXRpb246IHRoaXMubGl2ZUxvY2F0aW9uXG4gICAgICAgID8gdGhpcy5saXZlTG9jYXRpb24udG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsLFxuICAgICAgcG9sbDogdGhpcy5wb2xsID8gdGhpcy5wb2xsLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIHRyYW5zYWN0aW9uOiB0aGlzLnRyYW5zYWN0aW9uXG4gICAgICAgID8gdGhpcy50cmFuc2FjdGlvbi50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICBmb3JtOiB0aGlzLmZvcm0gPyB0aGlzLmZvcm0udG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgcGVyc2lzdEV2ZW50OiB0aGlzLnBlcnNpc3RFdmVudFxuICAgICAgICA/IHRoaXMucGVyc2lzdEV2ZW50LnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbCxcbiAgICAgIGJ1dHRvbnM6IHRoaXMuYnV0dG9ucyA/IHRoaXMuYnV0dG9ucy50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICBzaGFyZVVpZDogdGhpcy5zaGFyZVVpZCA/IHRoaXMuc2hhcmVVaWQudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgZm9ybVJlc3VsdDogdGhpcy5mb3JtUmVzdWx0XG4gICAgICAgID8gdGhpcy5mb3JtUmVzdWx0LnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbCxcbiAgICAgIHNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0OiB0aGlzLnNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0XG4gICAgICAgID8gdGhpcy5zaGFyZVByaXZhdGVEYXRhUmVxdWVzdC50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICBzaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZTogdGhpcy5zaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZVxuICAgICAgICA/IHRoaXMuc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UudG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsLFxuICAgICAgY2FsbEV2ZW50OiB0aGlzLmNhbGxFdmVudCA/IHRoaXMuY2FsbEV2ZW50LnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIHRhYmxlOiB0aGlzLnRhYmxlID8gdGhpcy50YWJsZS50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICBwYXltZW50SW5mb3JtYXRpb246IHRoaXMucGF5bWVudEluZm9ybWF0aW9uXG4gICAgICAgID8gdGhpcy5wYXltZW50SW5mb3JtYXRpb24udG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBNZXNzYWdlIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBNZXNzYWdlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBwYWNrZXRJZD86IHN0cmluZztcbiAgICBpZD86IHN0cmluZztcbiAgICB0aW1lPzogc3RyaW5nO1xuICAgIGZyb20/OiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5Bc09iamVjdDtcbiAgICB0bz86IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLkFzT2JqZWN0O1xuICAgIHJlcGx5VG9JZD86IHN0cmluZztcbiAgICByZXBsaWVkTWVzc2FnZUJyaWVmPzogTWVzc2FnZUJyaWVmLkFzT2JqZWN0O1xuICAgIGZvcndhcmRGcm9tPzogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuQXNPYmplY3Q7XG4gICAgZ2VuZXJhdGVkQnk/OiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5Bc09iamVjdDtcbiAgICBlZGl0ZWQ/OiBib29sZWFuO1xuICAgIGVuY3J5cHRlZD86IGJvb2xlYW47XG4gICAgdHRsPzogbnVtYmVyO1xuICAgIHRocmVhZD86IHN0cmluZztcbiAgICBzaG91bGRCZVF1aWV0PzogYm9vbGVhbjtcbiAgICBtdWNNaW5pbXVtQWNjZXNzTGV2ZWw/OiBwcm90b1B1YlYxTW9kZWxzMDEyLlJvbGU7XG4gICAgc3BlY2lhbFRhcmdldD86IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLkFzT2JqZWN0O1xuICAgIG1lc3NhZ2VNYXJrdXA/OiBwcm90b1B1YlYxTW9kZWxzMDE0Lk1lc3NhZ2VNYXJrdXAuQXNPYmplY3Q7XG4gICAgdGV4dD86IFRleHQuQXNPYmplY3Q7XG4gICAgZmlsZT86IHByb3RvUHViVjFNb2RlbHMwMDEuRmlsZS5Bc09iamVjdDtcbiAgICBzdGlja2VyPzogcHJvdG9QdWJWMU1vZGVsczAwNS5TdGlja2VyLkFzT2JqZWN0O1xuICAgIGxvY2F0aW9uPzogcHJvdG9QdWJWMU1vZGVsczAwNi5Mb2NhdGlvbi5Bc09iamVjdDtcbiAgICBsaXZlTG9jYXRpb24/OiBwcm90b1B1YlYxTW9kZWxzMDA2LkxpdmVMb2NhdGlvbi5Bc09iamVjdDtcbiAgICBwb2xsPzogcHJvdG9QdWJWMU1vZGVsczAxMS5Qb2xsLkFzT2JqZWN0O1xuICAgIHRyYW5zYWN0aW9uPzogcHJvdG9QdWJWMU1vZGVsczAwNy5UcmFuc2FjdGlvbi5Bc09iamVjdDtcbiAgICBmb3JtPzogcHJvdG9QdWJWMU1vZGVsczAxMC5Gb3JtLkFzT2JqZWN0O1xuICAgIHBlcnNpc3RFdmVudD86IHByb3RvUHViVjFNb2RlbHMwMDguUGVyc2lzdGVudEV2ZW50LkFzT2JqZWN0O1xuICAgIGJ1dHRvbnM/OiBwcm90b1B1YlYxTW9kZWxzMDEwLkJ1dHRvbnMuQXNPYmplY3Q7XG4gICAgc2hhcmVVaWQ/OiBTaGFyZVVpZC5Bc09iamVjdDtcbiAgICBmb3JtUmVzdWx0PzogcHJvdG9QdWJWMU1vZGVsczAxMC5Gb3JtUmVzdWx0LkFzT2JqZWN0O1xuICAgIHNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0PzogcHJvdG9QdWJWMU1vZGVsczAwOS5TaGFyZVByaXZhdGVEYXRhUmVxdWVzdC5Bc09iamVjdDtcbiAgICBzaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZT86IHByb3RvUHViVjFNb2RlbHMwMDkuU2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UuQXNPYmplY3Q7XG4gICAgY2FsbEV2ZW50PzogcHJvdG9QdWJWMU1vZGVsczAxMy5DYWxsRXZlbnQuQXNPYmplY3Q7XG4gICAgdGFibGU/OiBwcm90b1B1YlYxTW9kZWxzMDEwLlRhYmxlLkFzT2JqZWN0O1xuICAgIHBheW1lbnRJbmZvcm1hdGlvbj86IHByb3RvUHViVjFNb2RlbHMwMDcuUGF5bWVudEluZm9ybWF0aW9uLkFzT2JqZWN0O1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIE1lc3NhZ2VcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHBhY2tldElkPzogc3RyaW5nO1xuICAgIGlkPzogc3RyaW5nO1xuICAgIHRpbWU/OiBzdHJpbmc7XG4gICAgZnJvbT86IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICB0bz86IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICByZXBseVRvSWQ/OiBzdHJpbmc7XG4gICAgcmVwbGllZE1lc3NhZ2VCcmllZj86IE1lc3NhZ2VCcmllZi5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgZm9yd2FyZEZyb20/OiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgZ2VuZXJhdGVkQnk/OiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgZWRpdGVkPzogYm9vbGVhbjtcbiAgICBlbmNyeXB0ZWQ/OiBib29sZWFuO1xuICAgIHR0bD86IG51bWJlcjtcbiAgICB0aHJlYWQ/OiBzdHJpbmc7XG4gICAgc2hvdWxkQmVRdWlldD86IGJvb2xlYW47XG4gICAgbXVjTWluaW11bUFjY2Vzc0xldmVsPzogc3RyaW5nO1xuICAgIHNwZWNpYWxUYXJnZXQ/OiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgbWVzc2FnZU1hcmt1cD86IHByb3RvUHViVjFNb2RlbHMwMTQuTWVzc2FnZU1hcmt1cC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgdGV4dD86IFRleHQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIGZpbGU/OiBwcm90b1B1YlYxTW9kZWxzMDAxLkZpbGUuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHN0aWNrZXI/OiBwcm90b1B1YlYxTW9kZWxzMDA1LlN0aWNrZXIuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIGxvY2F0aW9uPzogcHJvdG9QdWJWMU1vZGVsczAwNi5Mb2NhdGlvbi5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgbGl2ZUxvY2F0aW9uPzogcHJvdG9QdWJWMU1vZGVsczAwNi5MaXZlTG9jYXRpb24uQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHBvbGw/OiBwcm90b1B1YlYxTW9kZWxzMDExLlBvbGwuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHRyYW5zYWN0aW9uPzogcHJvdG9QdWJWMU1vZGVsczAwNy5UcmFuc2FjdGlvbi5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgZm9ybT86IHByb3RvUHViVjFNb2RlbHMwMTAuRm9ybS5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgcGVyc2lzdEV2ZW50PzogcHJvdG9QdWJWMU1vZGVsczAwOC5QZXJzaXN0ZW50RXZlbnQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIGJ1dHRvbnM/OiBwcm90b1B1YlYxTW9kZWxzMDEwLkJ1dHRvbnMuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHNoYXJlVWlkPzogU2hhcmVVaWQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIGZvcm1SZXN1bHQ/OiBwcm90b1B1YlYxTW9kZWxzMDEwLkZvcm1SZXN1bHQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0PzogcHJvdG9QdWJWMU1vZGVsczAwOS5TaGFyZVByaXZhdGVEYXRhUmVxdWVzdC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2U/OiBwcm90b1B1YlYxTW9kZWxzMDA5LlNoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBjYWxsRXZlbnQ/OiBwcm90b1B1YlYxTW9kZWxzMDEzLkNhbGxFdmVudC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgdGFibGU/OiBwcm90b1B1YlYxTW9kZWxzMDEwLlRhYmxlLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBwYXltZW50SW5mb3JtYXRpb24/OiBwcm90b1B1YlYxTW9kZWxzMDA3LlBheW1lbnRJbmZvcm1hdGlvbi5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gIH1cbiAgZXhwb3J0IGVudW0gVHlwZUNhc2Uge1xuICAgIG5vbmUgPSAwLFxuICAgIHRleHQgPSAxLFxuICAgIGZpbGUgPSAyLFxuICAgIHN0aWNrZXIgPSAzLFxuICAgIGxvY2F0aW9uID0gNCxcbiAgICBsaXZlTG9jYXRpb24gPSA1LFxuICAgIHBvbGwgPSA2LFxuICAgIHRyYW5zYWN0aW9uID0gNyxcbiAgICBmb3JtID0gOCxcbiAgICBwZXJzaXN0RXZlbnQgPSA5LFxuICAgIGJ1dHRvbnMgPSAxMCxcbiAgICBzaGFyZVVpZCA9IDExLFxuICAgIGZvcm1SZXN1bHQgPSAxMixcbiAgICBzaGFyZVByaXZhdGVEYXRhUmVxdWVzdCA9IDEzLFxuICAgIHNoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlID0gMTQsXG4gICAgY2FsbEV2ZW50ID0gMTUsXG4gICAgdGFibGUgPSAxNixcbiAgICBwYXltZW50SW5mb3JtYXRpb24gPSAxN1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3IgcHJvdG8ucHViLnYxLm1vZGVscy5NZXNzYWdlQnlDbGllbnRcbiAqL1xuZXhwb3J0IGNsYXNzIE1lc3NhZ2VCeUNsaWVudCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ3Byb3RvLnB1Yi52MS5tb2RlbHMuTWVzc2FnZUJ5Q2xpZW50JztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgTWVzc2FnZUJ5Q2xpZW50KCk7XG4gICAgTWVzc2FnZUJ5Q2xpZW50LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogTWVzc2FnZUJ5Q2xpZW50KSB7XG4gICAgX2luc3RhbmNlLnBhY2tldElkID0gX2luc3RhbmNlLnBhY2tldElkIHx8ICcnO1xuICAgIF9pbnN0YW5jZS50byA9IF9pbnN0YW5jZS50byB8fCB1bmRlZmluZWQ7XG4gICAgX2luc3RhbmNlLnJlcGx5VG9JZCA9IF9pbnN0YW5jZS5yZXBseVRvSWQgfHwgJzAnO1xuICAgIF9pbnN0YW5jZS5mb3J3YXJkRnJvbSA9IF9pbnN0YW5jZS5mb3J3YXJkRnJvbSB8fCB1bmRlZmluZWQ7XG4gICAgX2luc3RhbmNlLmVuY3J5cHRlZCA9IF9pbnN0YW5jZS5lbmNyeXB0ZWQgfHwgZmFsc2U7XG4gICAgX2luc3RhbmNlLnR0bCA9IF9pbnN0YW5jZS50dGwgfHwgMDtcbiAgICBfaW5zdGFuY2UudGhyZWFkID0gX2luc3RhbmNlLnRocmVhZCB8fCAnMCc7XG4gICAgX2luc3RhbmNlLnNob3VsZEJlUXVpZXQgPSBfaW5zdGFuY2Uuc2hvdWxkQmVRdWlldCB8fCBmYWxzZTtcbiAgICBfaW5zdGFuY2UuZ2VuZXJhdGVkQnkgPSBfaW5zdGFuY2UuZ2VuZXJhdGVkQnkgfHwgdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogTWVzc2FnZUJ5Q2xpZW50LFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5wYWNrZXRJZCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgX2luc3RhbmNlLnRvID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS50byxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNzpcbiAgICAgICAgICBfaW5zdGFuY2UucmVwbHlUb0lkID0gX3JlYWRlci5yZWFkSW50NjRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA4OlxuICAgICAgICAgIF9pbnN0YW5jZS5mb3J3YXJkRnJvbSA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuZm9yd2FyZEZyb20sXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgIF9pbnN0YW5jZS5lbmNyeXB0ZWQgPSBfcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjM6XG4gICAgICAgICAgX2luc3RhbmNlLnR0bCA9IF9yZWFkZXIucmVhZEludDMyKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjg6XG4gICAgICAgICAgX2luc3RhbmNlLnRocmVhZCA9IF9yZWFkZXIucmVhZEludDY0U3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjk6XG4gICAgICAgICAgX2luc3RhbmNlLnNob3VsZEJlUXVpZXQgPSBfcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzM6XG4gICAgICAgICAgX2luc3RhbmNlLmdlbmVyYXRlZEJ5ID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5nZW5lcmF0ZWRCeSxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgX2luc3RhbmNlLnRleHQgPSBuZXcgVGV4dCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoX2luc3RhbmNlLnRleHQsIFRleHQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICBfaW5zdGFuY2UuZmlsZSA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAxLkZpbGUoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmZpbGUsXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAxLkZpbGUuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICBfaW5zdGFuY2Uuc3RpY2tlciA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDA1LlN0aWNrZXIoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLnN0aWNrZXIsXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDA1LlN0aWNrZXIuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxNDpcbiAgICAgICAgICBfaW5zdGFuY2UubG9jYXRpb24gPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAwNi5Mb2NhdGlvbigpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UubG9jYXRpb24sXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDA2LkxvY2F0aW9uLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTU6XG4gICAgICAgICAgX2luc3RhbmNlLmxpdmVMb2NhdGlvbiA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDA2LkxpdmVMb2NhdGlvbigpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UubGl2ZUxvY2F0aW9uLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwNi5MaXZlTG9jYXRpb24uZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxNjpcbiAgICAgICAgICBfaW5zdGFuY2UucG9sbCA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDExLlBvbGwoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLnBvbGwsXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDExLlBvbGwuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxODpcbiAgICAgICAgICBfaW5zdGFuY2UuZm9ybSA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDEwLkZvcm0oKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmZvcm0sXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDEwLkZvcm0uZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyMDpcbiAgICAgICAgICBfaW5zdGFuY2UuYnV0dG9ucyA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDEwLkJ1dHRvbnMoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmJ1dHRvbnMsXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDEwLkJ1dHRvbnMuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyMTpcbiAgICAgICAgICBfaW5zdGFuY2Uuc2hhcmVVaWQgPSBuZXcgU2hhcmVVaWQoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLnNoYXJlVWlkLFxuICAgICAgICAgICAgU2hhcmVVaWQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyMjpcbiAgICAgICAgICBfaW5zdGFuY2UuZm9ybVJlc3VsdCA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDEwLkZvcm1SZXN1bHQoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmZvcm1SZXN1bHQsXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDEwLkZvcm1SZXN1bHQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyNjpcbiAgICAgICAgICBfaW5zdGFuY2Uuc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QgPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAwOS5TaGFyZVByaXZhdGVEYXRhUmVxdWVzdCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2Uuc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QsXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDA5LlNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0XG4gICAgICAgICAgICAgIC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI3OlxuICAgICAgICAgIF9pbnN0YW5jZS5zaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZSA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDA5LlNoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5zaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZSxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDkuU2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2VcbiAgICAgICAgICAgICAgLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzE6XG4gICAgICAgICAgX2luc3RhbmNlLmNhbGxFdmVudCA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDEzLkNhbGxFdmVudCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuY2FsbEV2ZW50LFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxMy5DYWxsRXZlbnQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgICBfaW5zdGFuY2UudGFibGUgPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAxMC5UYWJsZSgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UudGFibGUsXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDEwLlRhYmxlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBNZXNzYWdlQnlDbGllbnQucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBNZXNzYWdlQnlDbGllbnQsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UucGFja2V0SWQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLnBhY2tldElkKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS50bykge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDYsXG4gICAgICAgIF9pbnN0YW5jZS50byBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnJlcGx5VG9JZCkge1xuICAgICAgX3dyaXRlci53cml0ZUludDY0U3RyaW5nKDcsIF9pbnN0YW5jZS5yZXBseVRvSWQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmZvcndhcmRGcm9tKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgOCxcbiAgICAgICAgX2luc3RhbmNlLmZvcndhcmRGcm9tIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZW5jcnlwdGVkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlQm9vbCgxMCwgX2luc3RhbmNlLmVuY3J5cHRlZCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UudHRsKSB7XG4gICAgICBfd3JpdGVyLndyaXRlSW50MzIoMjMsIF9pbnN0YW5jZS50dGwpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnRocmVhZCkge1xuICAgICAgX3dyaXRlci53cml0ZUludDY0U3RyaW5nKDI4LCBfaW5zdGFuY2UudGhyZWFkKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5zaG91bGRCZVF1aWV0KSB7XG4gICAgICBfd3JpdGVyLndyaXRlQm9vbCgyOSwgX2luc3RhbmNlLnNob3VsZEJlUXVpZXQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmdlbmVyYXRlZEJ5KSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMzMsXG4gICAgICAgIF9pbnN0YW5jZS5nZW5lcmF0ZWRCeSBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnRleHQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAxMSxcbiAgICAgICAgX2luc3RhbmNlLnRleHQgYXMgYW55LFxuICAgICAgICBUZXh0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmZpbGUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAxMixcbiAgICAgICAgX2luc3RhbmNlLmZpbGUgYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAxLkZpbGUuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uuc3RpY2tlcikge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDEzLFxuICAgICAgICBfaW5zdGFuY2Uuc3RpY2tlciBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDUuU3RpY2tlci5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5sb2NhdGlvbikge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDE0LFxuICAgICAgICBfaW5zdGFuY2UubG9jYXRpb24gYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDA2LkxvY2F0aW9uLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmxpdmVMb2NhdGlvbikge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDE1LFxuICAgICAgICBfaW5zdGFuY2UubGl2ZUxvY2F0aW9uIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwNi5MaXZlTG9jYXRpb24uc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UucG9sbCkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDE2LFxuICAgICAgICBfaW5zdGFuY2UucG9sbCBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMTEuUG9sbC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5mb3JtKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMTgsXG4gICAgICAgIF9pbnN0YW5jZS5mb3JtIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxMC5Gb3JtLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmJ1dHRvbnMpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAyMCxcbiAgICAgICAgX2luc3RhbmNlLmJ1dHRvbnMgYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDEwLkJ1dHRvbnMuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uuc2hhcmVVaWQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAyMSxcbiAgICAgICAgX2luc3RhbmNlLnNoYXJlVWlkIGFzIGFueSxcbiAgICAgICAgU2hhcmVVaWQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZm9ybVJlc3VsdCkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDIyLFxuICAgICAgICBfaW5zdGFuY2UuZm9ybVJlc3VsdCBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMTAuRm9ybVJlc3VsdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDI2LFxuICAgICAgICBfaW5zdGFuY2Uuc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QgYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDA5LlNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnNoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMjcsXG4gICAgICAgIF9pbnN0YW5jZS5zaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZSBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDkuU2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2Uuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuY2FsbEV2ZW50KSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMzEsXG4gICAgICAgIF9pbnN0YW5jZS5jYWxsRXZlbnQgYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDEzLkNhbGxFdmVudC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS50YWJsZSkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDMyLFxuICAgICAgICBfaW5zdGFuY2UudGFibGUgYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDEwLlRhYmxlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3BhY2tldElkPzogc3RyaW5nO1xuICBwcml2YXRlIF90bz86IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkO1xuICBwcml2YXRlIF9yZXBseVRvSWQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2ZvcndhcmRGcm9tPzogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQ7XG4gIHByaXZhdGUgX2VuY3J5cHRlZD86IGJvb2xlYW47XG4gIHByaXZhdGUgX3R0bD86IG51bWJlcjtcbiAgcHJpdmF0ZSBfdGhyZWFkPzogc3RyaW5nO1xuICBwcml2YXRlIF9zaG91bGRCZVF1aWV0PzogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfZ2VuZXJhdGVkQnk/OiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZDtcbiAgcHJpdmF0ZSBfdGV4dD86IFRleHQ7XG4gIHByaXZhdGUgX2ZpbGU/OiBwcm90b1B1YlYxTW9kZWxzMDAxLkZpbGU7XG4gIHByaXZhdGUgX3N0aWNrZXI/OiBwcm90b1B1YlYxTW9kZWxzMDA1LlN0aWNrZXI7XG4gIHByaXZhdGUgX2xvY2F0aW9uPzogcHJvdG9QdWJWMU1vZGVsczAwNi5Mb2NhdGlvbjtcbiAgcHJpdmF0ZSBfbGl2ZUxvY2F0aW9uPzogcHJvdG9QdWJWMU1vZGVsczAwNi5MaXZlTG9jYXRpb247XG4gIHByaXZhdGUgX3BvbGw/OiBwcm90b1B1YlYxTW9kZWxzMDExLlBvbGw7XG4gIHByaXZhdGUgX2Zvcm0/OiBwcm90b1B1YlYxTW9kZWxzMDEwLkZvcm07XG4gIHByaXZhdGUgX2J1dHRvbnM/OiBwcm90b1B1YlYxTW9kZWxzMDEwLkJ1dHRvbnM7XG4gIHByaXZhdGUgX3NoYXJlVWlkPzogU2hhcmVVaWQ7XG4gIHByaXZhdGUgX2Zvcm1SZXN1bHQ/OiBwcm90b1B1YlYxTW9kZWxzMDEwLkZvcm1SZXN1bHQ7XG4gIHByaXZhdGUgX3NoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0PzogcHJvdG9QdWJWMU1vZGVsczAwOS5TaGFyZVByaXZhdGVEYXRhUmVxdWVzdDtcbiAgcHJpdmF0ZSBfc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2U/OiBwcm90b1B1YlYxTW9kZWxzMDA5LlNoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlO1xuICBwcml2YXRlIF9jYWxsRXZlbnQ/OiBwcm90b1B1YlYxTW9kZWxzMDEzLkNhbGxFdmVudDtcbiAgcHJpdmF0ZSBfdGFibGU/OiBwcm90b1B1YlYxTW9kZWxzMDEwLlRhYmxlO1xuXG4gIHByaXZhdGUgX3R5cGU6IE1lc3NhZ2VCeUNsaWVudC5UeXBlQ2FzZSA9IE1lc3NhZ2VCeUNsaWVudC5UeXBlQ2FzZS5ub25lO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgTWVzc2FnZUJ5Q2xpZW50IHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPE1lc3NhZ2VCeUNsaWVudC5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5wYWNrZXRJZCA9IF92YWx1ZS5wYWNrZXRJZDtcbiAgICB0aGlzLnRvID0gX3ZhbHVlLnRvID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkKF92YWx1ZS50bykgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5yZXBseVRvSWQgPSBfdmFsdWUucmVwbHlUb0lkO1xuICAgIHRoaXMuZm9yd2FyZEZyb20gPSBfdmFsdWUuZm9yd2FyZEZyb21cbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkKF92YWx1ZS5mb3J3YXJkRnJvbSlcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuZW5jcnlwdGVkID0gX3ZhbHVlLmVuY3J5cHRlZDtcbiAgICB0aGlzLnR0bCA9IF92YWx1ZS50dGw7XG4gICAgdGhpcy50aHJlYWQgPSBfdmFsdWUudGhyZWFkO1xuICAgIHRoaXMuc2hvdWxkQmVRdWlldCA9IF92YWx1ZS5zaG91bGRCZVF1aWV0O1xuICAgIHRoaXMuZ2VuZXJhdGVkQnkgPSBfdmFsdWUuZ2VuZXJhdGVkQnlcbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkKF92YWx1ZS5nZW5lcmF0ZWRCeSlcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMudGV4dCA9IF92YWx1ZS50ZXh0ID8gbmV3IFRleHQoX3ZhbHVlLnRleHQpIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuZmlsZSA9IF92YWx1ZS5maWxlXG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAxLkZpbGUoX3ZhbHVlLmZpbGUpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnN0aWNrZXIgPSBfdmFsdWUuc3RpY2tlclxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAwNS5TdGlja2VyKF92YWx1ZS5zdGlja2VyKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5sb2NhdGlvbiA9IF92YWx1ZS5sb2NhdGlvblxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAwNi5Mb2NhdGlvbihfdmFsdWUubG9jYXRpb24pXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmxpdmVMb2NhdGlvbiA9IF92YWx1ZS5saXZlTG9jYXRpb25cbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMDYuTGl2ZUxvY2F0aW9uKF92YWx1ZS5saXZlTG9jYXRpb24pXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnBvbGwgPSBfdmFsdWUucG9sbFxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAxMS5Qb2xsKF92YWx1ZS5wb2xsKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5mb3JtID0gX3ZhbHVlLmZvcm1cbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMTAuRm9ybShfdmFsdWUuZm9ybSlcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuYnV0dG9ucyA9IF92YWx1ZS5idXR0b25zXG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDEwLkJ1dHRvbnMoX3ZhbHVlLmJ1dHRvbnMpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNoYXJlVWlkID0gX3ZhbHVlLnNoYXJlVWlkID8gbmV3IFNoYXJlVWlkKF92YWx1ZS5zaGFyZVVpZCkgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5mb3JtUmVzdWx0ID0gX3ZhbHVlLmZvcm1SZXN1bHRcbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMTAuRm9ybVJlc3VsdChfdmFsdWUuZm9ybVJlc3VsdClcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QgPSBfdmFsdWUuc2hhcmVQcml2YXRlRGF0YVJlcXVlc3RcbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMDkuU2hhcmVQcml2YXRlRGF0YVJlcXVlc3QoXG4gICAgICAgICAgX3ZhbHVlLnNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0XG4gICAgICAgIClcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UgPSBfdmFsdWUuc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2VcbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMDkuU2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UoXG4gICAgICAgICAgX3ZhbHVlLnNoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlXG4gICAgICAgIClcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuY2FsbEV2ZW50ID0gX3ZhbHVlLmNhbGxFdmVudFxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAxMy5DYWxsRXZlbnQoX3ZhbHVlLmNhbGxFdmVudClcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMudGFibGUgPSBfdmFsdWUudGFibGVcbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMTAuVGFibGUoX3ZhbHVlLnRhYmxlKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgTWVzc2FnZUJ5Q2xpZW50LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgcGFja2V0SWQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcGFja2V0SWQ7XG4gIH1cbiAgc2V0IHBhY2tldElkKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9wYWNrZXRJZCA9IHZhbHVlO1xuICB9XG4gIGdldCB0bygpOiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3RvO1xuICB9XG4gIHNldCB0byh2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl90byA9IHZhbHVlO1xuICB9XG4gIGdldCByZXBseVRvSWQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcmVwbHlUb0lkO1xuICB9XG4gIHNldCByZXBseVRvSWQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3JlcGx5VG9JZCA9IHZhbHVlO1xuICB9XG4gIGdldCBmb3J3YXJkRnJvbSgpOiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2ZvcndhcmRGcm9tO1xuICB9XG4gIHNldCBmb3J3YXJkRnJvbSh2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9mb3J3YXJkRnJvbSA9IHZhbHVlO1xuICB9XG4gIGdldCBlbmNyeXB0ZWQoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2VuY3J5cHRlZDtcbiAgfVxuICBzZXQgZW5jcnlwdGVkKHZhbHVlOiBib29sZWFuIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZW5jcnlwdGVkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHR0bCgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90dGw7XG4gIH1cbiAgc2V0IHR0bCh2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdHRsID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHRocmVhZCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90aHJlYWQ7XG4gIH1cbiAgc2V0IHRocmVhZCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdGhyZWFkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHNob3VsZEJlUXVpZXQoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3VsZEJlUXVpZXQ7XG4gIH1cbiAgc2V0IHNob3VsZEJlUXVpZXQodmFsdWU6IGJvb2xlYW4gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zaG91bGRCZVF1aWV0ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGdlbmVyYXRlZEJ5KCk6IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZ2VuZXJhdGVkQnk7XG4gIH1cbiAgc2V0IGdlbmVyYXRlZEJ5KHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZCB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2dlbmVyYXRlZEJ5ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHRleHQoKTogVGV4dCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3RleHQ7XG4gIH1cbiAgc2V0IHRleHQodmFsdWU6IFRleHQgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fZmlsZSA9IHRoaXMuX3N0aWNrZXIgPSB0aGlzLl9sb2NhdGlvbiA9IHRoaXMuX2xpdmVMb2NhdGlvbiA9IHRoaXMuX3BvbGwgPSB0aGlzLl9mb3JtID0gdGhpcy5fYnV0dG9ucyA9IHRoaXMuX3NoYXJlVWlkID0gdGhpcy5fZm9ybVJlc3VsdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0ID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UgPSB0aGlzLl9jYWxsRXZlbnQgPSB0aGlzLl90YWJsZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBNZXNzYWdlQnlDbGllbnQuVHlwZUNhc2UudGV4dDtcbiAgICB9XG4gICAgdGhpcy5fdGV4dCA9IHZhbHVlO1xuICB9XG4gIGdldCBmaWxlKCk6IHByb3RvUHViVjFNb2RlbHMwMDEuRmlsZSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbGU7XG4gIH1cbiAgc2V0IGZpbGUodmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMDEuRmlsZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl90ZXh0ID0gdGhpcy5fc3RpY2tlciA9IHRoaXMuX2xvY2F0aW9uID0gdGhpcy5fbGl2ZUxvY2F0aW9uID0gdGhpcy5fcG9sbCA9IHRoaXMuX2Zvcm0gPSB0aGlzLl9idXR0b25zID0gdGhpcy5fc2hhcmVVaWQgPSB0aGlzLl9mb3JtUmVzdWx0ID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZSA9IHRoaXMuX2NhbGxFdmVudCA9IHRoaXMuX3RhYmxlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IE1lc3NhZ2VCeUNsaWVudC5UeXBlQ2FzZS5maWxlO1xuICAgIH1cbiAgICB0aGlzLl9maWxlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHN0aWNrZXIoKTogcHJvdG9QdWJWMU1vZGVsczAwNS5TdGlja2VyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc3RpY2tlcjtcbiAgfVxuICBzZXQgc3RpY2tlcih2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAwNS5TdGlja2VyIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3RleHQgPSB0aGlzLl9maWxlID0gdGhpcy5fbG9jYXRpb24gPSB0aGlzLl9saXZlTG9jYXRpb24gPSB0aGlzLl9wb2xsID0gdGhpcy5fZm9ybSA9IHRoaXMuX2J1dHRvbnMgPSB0aGlzLl9zaGFyZVVpZCA9IHRoaXMuX2Zvcm1SZXN1bHQgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlID0gdGhpcy5fY2FsbEV2ZW50ID0gdGhpcy5fdGFibGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gTWVzc2FnZUJ5Q2xpZW50LlR5cGVDYXNlLnN0aWNrZXI7XG4gICAgfVxuICAgIHRoaXMuX3N0aWNrZXIgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbG9jYXRpb24oKTogcHJvdG9QdWJWMU1vZGVsczAwNi5Mb2NhdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2xvY2F0aW9uO1xuICB9XG4gIHNldCBsb2NhdGlvbih2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAwNi5Mb2NhdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl90ZXh0ID0gdGhpcy5fZmlsZSA9IHRoaXMuX3N0aWNrZXIgPSB0aGlzLl9saXZlTG9jYXRpb24gPSB0aGlzLl9wb2xsID0gdGhpcy5fZm9ybSA9IHRoaXMuX2J1dHRvbnMgPSB0aGlzLl9zaGFyZVVpZCA9IHRoaXMuX2Zvcm1SZXN1bHQgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlID0gdGhpcy5fY2FsbEV2ZW50ID0gdGhpcy5fdGFibGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gTWVzc2FnZUJ5Q2xpZW50LlR5cGVDYXNlLmxvY2F0aW9uO1xuICAgIH1cbiAgICB0aGlzLl9sb2NhdGlvbiA9IHZhbHVlO1xuICB9XG4gIGdldCBsaXZlTG9jYXRpb24oKTogcHJvdG9QdWJWMU1vZGVsczAwNi5MaXZlTG9jYXRpb24gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9saXZlTG9jYXRpb247XG4gIH1cbiAgc2V0IGxpdmVMb2NhdGlvbih2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAwNi5MaXZlTG9jYXRpb24gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fdGV4dCA9IHRoaXMuX2ZpbGUgPSB0aGlzLl9zdGlja2VyID0gdGhpcy5fbG9jYXRpb24gPSB0aGlzLl9wb2xsID0gdGhpcy5fZm9ybSA9IHRoaXMuX2J1dHRvbnMgPSB0aGlzLl9zaGFyZVVpZCA9IHRoaXMuX2Zvcm1SZXN1bHQgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlID0gdGhpcy5fY2FsbEV2ZW50ID0gdGhpcy5fdGFibGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gTWVzc2FnZUJ5Q2xpZW50LlR5cGVDYXNlLmxpdmVMb2NhdGlvbjtcbiAgICB9XG4gICAgdGhpcy5fbGl2ZUxvY2F0aW9uID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHBvbGwoKTogcHJvdG9QdWJWMU1vZGVsczAxMS5Qb2xsIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcG9sbDtcbiAgfVxuICBzZXQgcG9sbCh2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAxMS5Qb2xsIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3RleHQgPSB0aGlzLl9maWxlID0gdGhpcy5fc3RpY2tlciA9IHRoaXMuX2xvY2F0aW9uID0gdGhpcy5fbGl2ZUxvY2F0aW9uID0gdGhpcy5fZm9ybSA9IHRoaXMuX2J1dHRvbnMgPSB0aGlzLl9zaGFyZVVpZCA9IHRoaXMuX2Zvcm1SZXN1bHQgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlID0gdGhpcy5fY2FsbEV2ZW50ID0gdGhpcy5fdGFibGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gTWVzc2FnZUJ5Q2xpZW50LlR5cGVDYXNlLnBvbGw7XG4gICAgfVxuICAgIHRoaXMuX3BvbGwgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZm9ybSgpOiBwcm90b1B1YlYxTW9kZWxzMDEwLkZvcm0gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9mb3JtO1xuICB9XG4gIHNldCBmb3JtKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDEwLkZvcm0gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fdGV4dCA9IHRoaXMuX2ZpbGUgPSB0aGlzLl9zdGlja2VyID0gdGhpcy5fbG9jYXRpb24gPSB0aGlzLl9saXZlTG9jYXRpb24gPSB0aGlzLl9wb2xsID0gdGhpcy5fYnV0dG9ucyA9IHRoaXMuX3NoYXJlVWlkID0gdGhpcy5fZm9ybVJlc3VsdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0ID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UgPSB0aGlzLl9jYWxsRXZlbnQgPSB0aGlzLl90YWJsZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBNZXNzYWdlQnlDbGllbnQuVHlwZUNhc2UuZm9ybTtcbiAgICB9XG4gICAgdGhpcy5fZm9ybSA9IHZhbHVlO1xuICB9XG4gIGdldCBidXR0b25zKCk6IHByb3RvUHViVjFNb2RlbHMwMTAuQnV0dG9ucyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2J1dHRvbnM7XG4gIH1cbiAgc2V0IGJ1dHRvbnModmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMTAuQnV0dG9ucyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl90ZXh0ID0gdGhpcy5fZmlsZSA9IHRoaXMuX3N0aWNrZXIgPSB0aGlzLl9sb2NhdGlvbiA9IHRoaXMuX2xpdmVMb2NhdGlvbiA9IHRoaXMuX3BvbGwgPSB0aGlzLl9mb3JtID0gdGhpcy5fc2hhcmVVaWQgPSB0aGlzLl9mb3JtUmVzdWx0ID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZSA9IHRoaXMuX2NhbGxFdmVudCA9IHRoaXMuX3RhYmxlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IE1lc3NhZ2VCeUNsaWVudC5UeXBlQ2FzZS5idXR0b25zO1xuICAgIH1cbiAgICB0aGlzLl9idXR0b25zID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHNoYXJlVWlkKCk6IFNoYXJlVWlkIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc2hhcmVVaWQ7XG4gIH1cbiAgc2V0IHNoYXJlVWlkKHZhbHVlOiBTaGFyZVVpZCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl90ZXh0ID0gdGhpcy5fZmlsZSA9IHRoaXMuX3N0aWNrZXIgPSB0aGlzLl9sb2NhdGlvbiA9IHRoaXMuX2xpdmVMb2NhdGlvbiA9IHRoaXMuX3BvbGwgPSB0aGlzLl9mb3JtID0gdGhpcy5fYnV0dG9ucyA9IHRoaXMuX2Zvcm1SZXN1bHQgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhUmVxdWVzdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlID0gdGhpcy5fY2FsbEV2ZW50ID0gdGhpcy5fdGFibGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gTWVzc2FnZUJ5Q2xpZW50LlR5cGVDYXNlLnNoYXJlVWlkO1xuICAgIH1cbiAgICB0aGlzLl9zaGFyZVVpZCA9IHZhbHVlO1xuICB9XG4gIGdldCBmb3JtUmVzdWx0KCk6IHByb3RvUHViVjFNb2RlbHMwMTAuRm9ybVJlc3VsdCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2Zvcm1SZXN1bHQ7XG4gIH1cbiAgc2V0IGZvcm1SZXN1bHQodmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMTAuRm9ybVJlc3VsdCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl90ZXh0ID0gdGhpcy5fZmlsZSA9IHRoaXMuX3N0aWNrZXIgPSB0aGlzLl9sb2NhdGlvbiA9IHRoaXMuX2xpdmVMb2NhdGlvbiA9IHRoaXMuX3BvbGwgPSB0aGlzLl9mb3JtID0gdGhpcy5fYnV0dG9ucyA9IHRoaXMuX3NoYXJlVWlkID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QgPSB0aGlzLl9zaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZSA9IHRoaXMuX2NhbGxFdmVudCA9IHRoaXMuX3RhYmxlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IE1lc3NhZ2VCeUNsaWVudC5UeXBlQ2FzZS5mb3JtUmVzdWx0O1xuICAgIH1cbiAgICB0aGlzLl9mb3JtUmVzdWx0ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0KCk6XG4gICAgfCBwcm90b1B1YlYxTW9kZWxzMDA5LlNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0XG4gICAgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zaGFyZVByaXZhdGVEYXRhUmVxdWVzdDtcbiAgfVxuICBzZXQgc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QoXG4gICAgdmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMDkuU2hhcmVQcml2YXRlRGF0YVJlcXVlc3QgfCB1bmRlZmluZWRcbiAgKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3RleHQgPSB0aGlzLl9maWxlID0gdGhpcy5fc3RpY2tlciA9IHRoaXMuX2xvY2F0aW9uID0gdGhpcy5fbGl2ZUxvY2F0aW9uID0gdGhpcy5fcG9sbCA9IHRoaXMuX2Zvcm0gPSB0aGlzLl9idXR0b25zID0gdGhpcy5fc2hhcmVVaWQgPSB0aGlzLl9mb3JtUmVzdWx0ID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UgPSB0aGlzLl9jYWxsRXZlbnQgPSB0aGlzLl90YWJsZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBNZXNzYWdlQnlDbGllbnQuVHlwZUNhc2Uuc2hhcmVQcml2YXRlRGF0YVJlcXVlc3Q7XG4gICAgfVxuICAgIHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHNoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlKCk6XG4gICAgfCBwcm90b1B1YlYxTW9kZWxzMDA5LlNoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlXG4gICAgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZTtcbiAgfVxuICBzZXQgc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UoXG4gICAgdmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMDkuU2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UgfCB1bmRlZmluZWRcbiAgKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3RleHQgPSB0aGlzLl9maWxlID0gdGhpcy5fc3RpY2tlciA9IHRoaXMuX2xvY2F0aW9uID0gdGhpcy5fbGl2ZUxvY2F0aW9uID0gdGhpcy5fcG9sbCA9IHRoaXMuX2Zvcm0gPSB0aGlzLl9idXR0b25zID0gdGhpcy5fc2hhcmVVaWQgPSB0aGlzLl9mb3JtUmVzdWx0ID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QgPSB0aGlzLl9jYWxsRXZlbnQgPSB0aGlzLl90YWJsZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBNZXNzYWdlQnlDbGllbnQuVHlwZUNhc2Uuc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2U7XG4gICAgfVxuICAgIHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGNhbGxFdmVudCgpOiBwcm90b1B1YlYxTW9kZWxzMDEzLkNhbGxFdmVudCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2NhbGxFdmVudDtcbiAgfVxuICBzZXQgY2FsbEV2ZW50KHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDEzLkNhbGxFdmVudCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl90ZXh0ID0gdGhpcy5fZmlsZSA9IHRoaXMuX3N0aWNrZXIgPSB0aGlzLl9sb2NhdGlvbiA9IHRoaXMuX2xpdmVMb2NhdGlvbiA9IHRoaXMuX3BvbGwgPSB0aGlzLl9mb3JtID0gdGhpcy5fYnV0dG9ucyA9IHRoaXMuX3NoYXJlVWlkID0gdGhpcy5fZm9ybVJlc3VsdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0ID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UgPSB0aGlzLl90YWJsZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBNZXNzYWdlQnlDbGllbnQuVHlwZUNhc2UuY2FsbEV2ZW50O1xuICAgIH1cbiAgICB0aGlzLl9jYWxsRXZlbnQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdGFibGUoKTogcHJvdG9QdWJWMU1vZGVsczAxMC5UYWJsZSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3RhYmxlO1xuICB9XG4gIHNldCB0YWJsZSh2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAxMC5UYWJsZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl90ZXh0ID0gdGhpcy5fZmlsZSA9IHRoaXMuX3N0aWNrZXIgPSB0aGlzLl9sb2NhdGlvbiA9IHRoaXMuX2xpdmVMb2NhdGlvbiA9IHRoaXMuX3BvbGwgPSB0aGlzLl9mb3JtID0gdGhpcy5fYnV0dG9ucyA9IHRoaXMuX3NoYXJlVWlkID0gdGhpcy5fZm9ybVJlc3VsdCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0ID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UgPSB0aGlzLl9jYWxsRXZlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gTWVzc2FnZUJ5Q2xpZW50LlR5cGVDYXNlLnRhYmxlO1xuICAgIH1cbiAgICB0aGlzLl90YWJsZSA9IHZhbHVlO1xuICB9XG4gIGdldCB0eXBlKCkge1xuICAgIHJldHVybiB0aGlzLl90eXBlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIE1lc3NhZ2VCeUNsaWVudC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBNZXNzYWdlQnlDbGllbnQuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBwYWNrZXRJZDogdGhpcy5wYWNrZXRJZCxcbiAgICAgIHRvOiB0aGlzLnRvID8gdGhpcy50by50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgcmVwbHlUb0lkOiB0aGlzLnJlcGx5VG9JZCxcbiAgICAgIGZvcndhcmRGcm9tOiB0aGlzLmZvcndhcmRGcm9tID8gdGhpcy5mb3J3YXJkRnJvbS50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgZW5jcnlwdGVkOiB0aGlzLmVuY3J5cHRlZCxcbiAgICAgIHR0bDogdGhpcy50dGwsXG4gICAgICB0aHJlYWQ6IHRoaXMudGhyZWFkLFxuICAgICAgc2hvdWxkQmVRdWlldDogdGhpcy5zaG91bGRCZVF1aWV0LFxuICAgICAgZ2VuZXJhdGVkQnk6IHRoaXMuZ2VuZXJhdGVkQnkgPyB0aGlzLmdlbmVyYXRlZEJ5LnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICB0ZXh0OiB0aGlzLnRleHQgPyB0aGlzLnRleHQudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGZpbGU6IHRoaXMuZmlsZSA/IHRoaXMuZmlsZS50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgc3RpY2tlcjogdGhpcy5zdGlja2VyID8gdGhpcy5zdGlja2VyLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBsb2NhdGlvbjogdGhpcy5sb2NhdGlvbiA/IHRoaXMubG9jYXRpb24udG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGxpdmVMb2NhdGlvbjogdGhpcy5saXZlTG9jYXRpb25cbiAgICAgICAgPyB0aGlzLmxpdmVMb2NhdGlvbi50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgcG9sbDogdGhpcy5wb2xsID8gdGhpcy5wb2xsLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBmb3JtOiB0aGlzLmZvcm0gPyB0aGlzLmZvcm0udG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGJ1dHRvbnM6IHRoaXMuYnV0dG9ucyA/IHRoaXMuYnV0dG9ucy50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgc2hhcmVVaWQ6IHRoaXMuc2hhcmVVaWQgPyB0aGlzLnNoYXJlVWlkLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBmb3JtUmVzdWx0OiB0aGlzLmZvcm1SZXN1bHQgPyB0aGlzLmZvcm1SZXN1bHQudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIHNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0OiB0aGlzLnNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0XG4gICAgICAgID8gdGhpcy5zaGFyZVByaXZhdGVEYXRhUmVxdWVzdC50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2U6IHRoaXMuc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2VcbiAgICAgICAgPyB0aGlzLnNoYXJlUHJpdmF0ZURhdGFBY2NlcHRhbmNlLnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICBjYWxsRXZlbnQ6IHRoaXMuY2FsbEV2ZW50ID8gdGhpcy5jYWxsRXZlbnQudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIHRhYmxlOiB0aGlzLnRhYmxlID8gdGhpcy50YWJsZS50b09iamVjdCgpIDogdW5kZWZpbmVkXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogTWVzc2FnZUJ5Q2xpZW50LkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFja2V0SWQ6IHRoaXMucGFja2V0SWQsXG4gICAgICB0bzogdGhpcy50byA/IHRoaXMudG8udG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgcmVwbHlUb0lkOiB0aGlzLnJlcGx5VG9JZCxcbiAgICAgIGZvcndhcmRGcm9tOiB0aGlzLmZvcndhcmRGcm9tXG4gICAgICAgID8gdGhpcy5mb3J3YXJkRnJvbS50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICBlbmNyeXB0ZWQ6IHRoaXMuZW5jcnlwdGVkLFxuICAgICAgdHRsOiB0aGlzLnR0bCxcbiAgICAgIHRocmVhZDogdGhpcy50aHJlYWQsXG4gICAgICBzaG91bGRCZVF1aWV0OiB0aGlzLnNob3VsZEJlUXVpZXQsXG4gICAgICBnZW5lcmF0ZWRCeTogdGhpcy5nZW5lcmF0ZWRCeVxuICAgICAgICA/IHRoaXMuZ2VuZXJhdGVkQnkudG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsLFxuICAgICAgdGV4dDogdGhpcy50ZXh0ID8gdGhpcy50ZXh0LnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIGZpbGU6IHRoaXMuZmlsZSA/IHRoaXMuZmlsZS50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICBzdGlja2VyOiB0aGlzLnN0aWNrZXIgPyB0aGlzLnN0aWNrZXIudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgbG9jYXRpb246IHRoaXMubG9jYXRpb24gPyB0aGlzLmxvY2F0aW9uLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIGxpdmVMb2NhdGlvbjogdGhpcy5saXZlTG9jYXRpb25cbiAgICAgICAgPyB0aGlzLmxpdmVMb2NhdGlvbi50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICBwb2xsOiB0aGlzLnBvbGwgPyB0aGlzLnBvbGwudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgZm9ybTogdGhpcy5mb3JtID8gdGhpcy5mb3JtLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIGJ1dHRvbnM6IHRoaXMuYnV0dG9ucyA/IHRoaXMuYnV0dG9ucy50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICBzaGFyZVVpZDogdGhpcy5zaGFyZVVpZCA/IHRoaXMuc2hhcmVVaWQudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgZm9ybVJlc3VsdDogdGhpcy5mb3JtUmVzdWx0XG4gICAgICAgID8gdGhpcy5mb3JtUmVzdWx0LnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbCxcbiAgICAgIHNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0OiB0aGlzLnNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0XG4gICAgICAgID8gdGhpcy5zaGFyZVByaXZhdGVEYXRhUmVxdWVzdC50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICBzaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZTogdGhpcy5zaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZVxuICAgICAgICA/IHRoaXMuc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UudG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsLFxuICAgICAgY2FsbEV2ZW50OiB0aGlzLmNhbGxFdmVudCA/IHRoaXMuY2FsbEV2ZW50LnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIHRhYmxlOiB0aGlzLnRhYmxlID8gdGhpcy50YWJsZS50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGxcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIE1lc3NhZ2VCeUNsaWVudCB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgTWVzc2FnZUJ5Q2xpZW50XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBwYWNrZXRJZD86IHN0cmluZztcbiAgICB0bz86IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLkFzT2JqZWN0O1xuICAgIHJlcGx5VG9JZD86IHN0cmluZztcbiAgICBmb3J3YXJkRnJvbT86IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLkFzT2JqZWN0O1xuICAgIGVuY3J5cHRlZD86IGJvb2xlYW47XG4gICAgdHRsPzogbnVtYmVyO1xuICAgIHRocmVhZD86IHN0cmluZztcbiAgICBzaG91bGRCZVF1aWV0PzogYm9vbGVhbjtcbiAgICBnZW5lcmF0ZWRCeT86IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLkFzT2JqZWN0O1xuICAgIHRleHQ/OiBUZXh0LkFzT2JqZWN0O1xuICAgIGZpbGU/OiBwcm90b1B1YlYxTW9kZWxzMDAxLkZpbGUuQXNPYmplY3Q7XG4gICAgc3RpY2tlcj86IHByb3RvUHViVjFNb2RlbHMwMDUuU3RpY2tlci5Bc09iamVjdDtcbiAgICBsb2NhdGlvbj86IHByb3RvUHViVjFNb2RlbHMwMDYuTG9jYXRpb24uQXNPYmplY3Q7XG4gICAgbGl2ZUxvY2F0aW9uPzogcHJvdG9QdWJWMU1vZGVsczAwNi5MaXZlTG9jYXRpb24uQXNPYmplY3Q7XG4gICAgcG9sbD86IHByb3RvUHViVjFNb2RlbHMwMTEuUG9sbC5Bc09iamVjdDtcbiAgICBmb3JtPzogcHJvdG9QdWJWMU1vZGVsczAxMC5Gb3JtLkFzT2JqZWN0O1xuICAgIGJ1dHRvbnM/OiBwcm90b1B1YlYxTW9kZWxzMDEwLkJ1dHRvbnMuQXNPYmplY3Q7XG4gICAgc2hhcmVVaWQ/OiBTaGFyZVVpZC5Bc09iamVjdDtcbiAgICBmb3JtUmVzdWx0PzogcHJvdG9QdWJWMU1vZGVsczAxMC5Gb3JtUmVzdWx0LkFzT2JqZWN0O1xuICAgIHNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0PzogcHJvdG9QdWJWMU1vZGVsczAwOS5TaGFyZVByaXZhdGVEYXRhUmVxdWVzdC5Bc09iamVjdDtcbiAgICBzaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZT86IHByb3RvUHViVjFNb2RlbHMwMDkuU2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UuQXNPYmplY3Q7XG4gICAgY2FsbEV2ZW50PzogcHJvdG9QdWJWMU1vZGVsczAxMy5DYWxsRXZlbnQuQXNPYmplY3Q7XG4gICAgdGFibGU/OiBwcm90b1B1YlYxTW9kZWxzMDEwLlRhYmxlLkFzT2JqZWN0O1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIE1lc3NhZ2VCeUNsaWVudFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgcGFja2V0SWQ/OiBzdHJpbmc7XG4gICAgdG8/OiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgcmVwbHlUb0lkPzogc3RyaW5nO1xuICAgIGZvcndhcmRGcm9tPzogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIGVuY3J5cHRlZD86IGJvb2xlYW47XG4gICAgdHRsPzogbnVtYmVyO1xuICAgIHRocmVhZD86IHN0cmluZztcbiAgICBzaG91bGRCZVF1aWV0PzogYm9vbGVhbjtcbiAgICBnZW5lcmF0ZWRCeT86IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICB0ZXh0PzogVGV4dC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgZmlsZT86IHByb3RvUHViVjFNb2RlbHMwMDEuRmlsZS5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgc3RpY2tlcj86IHByb3RvUHViVjFNb2RlbHMwMDUuU3RpY2tlci5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgbG9jYXRpb24/OiBwcm90b1B1YlYxTW9kZWxzMDA2LkxvY2F0aW9uLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBsaXZlTG9jYXRpb24/OiBwcm90b1B1YlYxTW9kZWxzMDA2LkxpdmVMb2NhdGlvbi5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgcG9sbD86IHByb3RvUHViVjFNb2RlbHMwMTEuUG9sbC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgZm9ybT86IHByb3RvUHViVjFNb2RlbHMwMTAuRm9ybS5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgYnV0dG9ucz86IHByb3RvUHViVjFNb2RlbHMwMTAuQnV0dG9ucy5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgc2hhcmVVaWQ/OiBTaGFyZVVpZC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgZm9ybVJlc3VsdD86IHByb3RvUHViVjFNb2RlbHMwMTAuRm9ybVJlc3VsdC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgc2hhcmVQcml2YXRlRGF0YVJlcXVlc3Q/OiBwcm90b1B1YlYxTW9kZWxzMDA5LlNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0LkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBzaGFyZVByaXZhdGVEYXRhQWNjZXB0YW5jZT86IHByb3RvUHViVjFNb2RlbHMwMDkuU2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIGNhbGxFdmVudD86IHByb3RvUHViVjFNb2RlbHMwMTMuQ2FsbEV2ZW50LkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICB0YWJsZT86IHByb3RvUHViVjFNb2RlbHMwMTAuVGFibGUuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICB9XG4gIGV4cG9ydCBlbnVtIFR5cGVDYXNlIHtcbiAgICBub25lID0gMCxcbiAgICB0ZXh0ID0gMSxcbiAgICBmaWxlID0gMixcbiAgICBzdGlja2VyID0gMyxcbiAgICBsb2NhdGlvbiA9IDQsXG4gICAgbGl2ZUxvY2F0aW9uID0gNSxcbiAgICBwb2xsID0gNixcbiAgICBmb3JtID0gNyxcbiAgICBidXR0b25zID0gOCxcbiAgICBzaGFyZVVpZCA9IDksXG4gICAgZm9ybVJlc3VsdCA9IDEwLFxuICAgIHNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0ID0gMTEsXG4gICAgc2hhcmVQcml2YXRlRGF0YUFjY2VwdGFuY2UgPSAxMixcbiAgICBjYWxsRXZlbnQgPSAxMyxcbiAgICB0YWJsZSA9IDE0XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBwcm90by5wdWIudjEubW9kZWxzLk1lc3NhZ2VCeUJvdFxuICovXG5leHBvcnQgY2xhc3MgTWVzc2FnZUJ5Qm90IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAncHJvdG8ucHViLnYxLm1vZGVscy5NZXNzYWdlQnlCb3QnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBNZXNzYWdlQnlCb3QoKTtcbiAgICBNZXNzYWdlQnlCb3QuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBNZXNzYWdlQnlCb3QpIHtcbiAgICBfaW5zdGFuY2UucGFja2V0SWQgPSBfaW5zdGFuY2UucGFja2V0SWQgfHwgJyc7XG4gICAgX2luc3RhbmNlLmZyb20gPSBfaW5zdGFuY2UuZnJvbSB8fCB1bmRlZmluZWQ7XG4gICAgX2luc3RhbmNlLnRvID0gX2luc3RhbmNlLnRvIHx8IHVuZGVmaW5lZDtcbiAgICBfaW5zdGFuY2UucmVwbHlUb0lkID0gX2luc3RhbmNlLnJlcGx5VG9JZCB8fCAnMCc7XG4gICAgX2luc3RhbmNlLmZvcndhcmRGcm9tID0gX2luc3RhbmNlLmZvcndhcmRGcm9tIHx8IHVuZGVmaW5lZDtcbiAgICBfaW5zdGFuY2UuZW5jcnlwdGVkID0gX2luc3RhbmNlLmVuY3J5cHRlZCB8fCBmYWxzZTtcbiAgICBfaW5zdGFuY2UudHRsID0gX2luc3RhbmNlLnR0bCB8fCAwO1xuICAgIF9pbnN0YW5jZS50aHJlYWQgPSBfaW5zdGFuY2UudGhyZWFkIHx8ICcwJztcbiAgICBfaW5zdGFuY2Uuc2hvdWxkQmVRdWlldCA9IF9pbnN0YW5jZS5zaG91bGRCZVF1aWV0IHx8IGZhbHNlO1xuICAgIF9pbnN0YW5jZS5tZXNzYWdlTWFya3VwID0gX2luc3RhbmNlLm1lc3NhZ2VNYXJrdXAgfHwgdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogTWVzc2FnZUJ5Qm90LFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5wYWNrZXRJZCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgX2luc3RhbmNlLmZyb20gPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmZyb20sXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgX2luc3RhbmNlLnRvID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS50byxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNzpcbiAgICAgICAgICBfaW5zdGFuY2UucmVwbHlUb0lkID0gX3JlYWRlci5yZWFkSW50NjRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA4OlxuICAgICAgICAgIF9pbnN0YW5jZS5mb3J3YXJkRnJvbSA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuZm9yd2FyZEZyb20sXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgIF9pbnN0YW5jZS5lbmNyeXB0ZWQgPSBfcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjM6XG4gICAgICAgICAgX2luc3RhbmNlLnR0bCA9IF9yZWFkZXIucmVhZEludDMyKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjg6XG4gICAgICAgICAgX2luc3RhbmNlLnRocmVhZCA9IF9yZWFkZXIucmVhZEludDY0U3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjk6XG4gICAgICAgICAgX2luc3RhbmNlLnNob3VsZEJlUXVpZXQgPSBfcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzQ6XG4gICAgICAgICAgX2luc3RhbmNlLm1lc3NhZ2VNYXJrdXAgPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAxNC5NZXNzYWdlTWFya3VwKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5tZXNzYWdlTWFya3VwLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxNC5NZXNzYWdlTWFya3VwLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgX2luc3RhbmNlLnRleHQgPSBuZXcgVGV4dCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoX2luc3RhbmNlLnRleHQsIFRleHQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICBfaW5zdGFuY2UuZmlsZSA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAxLkZpbGUoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmZpbGUsXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAxLkZpbGUuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICBfaW5zdGFuY2Uuc3RpY2tlciA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDA1LlN0aWNrZXIoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLnN0aWNrZXIsXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDA1LlN0aWNrZXIuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxNDpcbiAgICAgICAgICBfaW5zdGFuY2UubG9jYXRpb24gPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAwNi5Mb2NhdGlvbigpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UubG9jYXRpb24sXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDA2LkxvY2F0aW9uLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTg6XG4gICAgICAgICAgX2luc3RhbmNlLmZvcm0gPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAxMC5Gb3JtKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5mb3JtLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxMC5Gb3JtLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjA6XG4gICAgICAgICAgX2luc3RhbmNlLmJ1dHRvbnMgPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAxMC5CdXR0b25zKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5idXR0b25zLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxMC5CdXR0b25zLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjE6XG4gICAgICAgICAgX2luc3RhbmNlLnNoYXJlVWlkID0gbmV3IFNoYXJlVWlkKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5zaGFyZVVpZCxcbiAgICAgICAgICAgIFNoYXJlVWlkLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjY6XG4gICAgICAgICAgX2luc3RhbmNlLnNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0ID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMDkuU2hhcmVQcml2YXRlRGF0YVJlcXVlc3QoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLnNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0LFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwOS5TaGFyZVByaXZhdGVEYXRhUmVxdWVzdFxuICAgICAgICAgICAgICAuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOTpcbiAgICAgICAgICBfaW5zdGFuY2UuYm90U3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQgPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAwOC5Cb3RTcGVjaWZpY1BlcnNpc3RlbnRFdmVudCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuYm90U3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQsXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDA4LkJvdFNwZWNpZmljUGVyc2lzdGVudEV2ZW50XG4gICAgICAgICAgICAgIC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgIF9pbnN0YW5jZS50YWJsZSA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDEwLlRhYmxlKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS50YWJsZSxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMTAuVGFibGUuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIE1lc3NhZ2VCeUJvdC5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IE1lc3NhZ2VCeUJvdCxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5wYWNrZXRJZCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2UucGFja2V0SWQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmZyb20pIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA1LFxuICAgICAgICBfaW5zdGFuY2UuZnJvbSBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnRvKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgNixcbiAgICAgICAgX2luc3RhbmNlLnRvIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UucmVwbHlUb0lkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlSW50NjRTdHJpbmcoNywgX2luc3RhbmNlLnJlcGx5VG9JZCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZm9yd2FyZEZyb20pIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA4LFxuICAgICAgICBfaW5zdGFuY2UuZm9yd2FyZEZyb20gYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5lbmNyeXB0ZWQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVCb29sKDEwLCBfaW5zdGFuY2UuZW5jcnlwdGVkKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS50dGwpIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQzMigyMywgX2luc3RhbmNlLnR0bCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UudGhyZWFkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlSW50NjRTdHJpbmcoMjgsIF9pbnN0YW5jZS50aHJlYWQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnNob3VsZEJlUXVpZXQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVCb29sKDI5LCBfaW5zdGFuY2Uuc2hvdWxkQmVRdWlldCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UubWVzc2FnZU1hcmt1cCkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDM0LFxuICAgICAgICBfaW5zdGFuY2UubWVzc2FnZU1hcmt1cCBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMTQuTWVzc2FnZU1hcmt1cC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS50ZXh0KSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMTEsXG4gICAgICAgIF9pbnN0YW5jZS50ZXh0IGFzIGFueSxcbiAgICAgICAgVGV4dC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5maWxlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMTIsXG4gICAgICAgIF9pbnN0YW5jZS5maWxlIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMS5GaWxlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnN0aWNrZXIpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAxMyxcbiAgICAgICAgX2luc3RhbmNlLnN0aWNrZXIgYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDA1LlN0aWNrZXIuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UubG9jYXRpb24pIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAxNCxcbiAgICAgICAgX2luc3RhbmNlLmxvY2F0aW9uIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwNi5Mb2NhdGlvbi5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5mb3JtKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMTgsXG4gICAgICAgIF9pbnN0YW5jZS5mb3JtIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxMC5Gb3JtLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmJ1dHRvbnMpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAyMCxcbiAgICAgICAgX2luc3RhbmNlLmJ1dHRvbnMgYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDEwLkJ1dHRvbnMuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uuc2hhcmVVaWQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAyMSxcbiAgICAgICAgX2luc3RhbmNlLnNoYXJlVWlkIGFzIGFueSxcbiAgICAgICAgU2hhcmVVaWQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uuc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAyNixcbiAgICAgICAgX2luc3RhbmNlLnNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0IGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwOS5TaGFyZVByaXZhdGVEYXRhUmVxdWVzdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5ib3RTcGVjaWZpY1BlcnNpc3RlbnRFdmVudCkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDE5LFxuICAgICAgICBfaW5zdGFuY2UuYm90U3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQgYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDA4LkJvdFNwZWNpZmljUGVyc2lzdGVudEV2ZW50LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnRhYmxlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMzIsXG4gICAgICAgIF9pbnN0YW5jZS50YWJsZSBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMTAuVGFibGUuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcGFja2V0SWQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2Zyb20/OiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZDtcbiAgcHJpdmF0ZSBfdG8/OiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZDtcbiAgcHJpdmF0ZSBfcmVwbHlUb0lkPzogc3RyaW5nO1xuICBwcml2YXRlIF9mb3J3YXJkRnJvbT86IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkO1xuICBwcml2YXRlIF9lbmNyeXB0ZWQ/OiBib29sZWFuO1xuICBwcml2YXRlIF90dGw/OiBudW1iZXI7XG4gIHByaXZhdGUgX3RocmVhZD86IHN0cmluZztcbiAgcHJpdmF0ZSBfc2hvdWxkQmVRdWlldD86IGJvb2xlYW47XG4gIHByaXZhdGUgX21lc3NhZ2VNYXJrdXA/OiBwcm90b1B1YlYxTW9kZWxzMDE0Lk1lc3NhZ2VNYXJrdXA7XG4gIHByaXZhdGUgX3RleHQ/OiBUZXh0O1xuICBwcml2YXRlIF9maWxlPzogcHJvdG9QdWJWMU1vZGVsczAwMS5GaWxlO1xuICBwcml2YXRlIF9zdGlja2VyPzogcHJvdG9QdWJWMU1vZGVsczAwNS5TdGlja2VyO1xuICBwcml2YXRlIF9sb2NhdGlvbj86IHByb3RvUHViVjFNb2RlbHMwMDYuTG9jYXRpb247XG4gIHByaXZhdGUgX2Zvcm0/OiBwcm90b1B1YlYxTW9kZWxzMDEwLkZvcm07XG4gIHByaXZhdGUgX2J1dHRvbnM/OiBwcm90b1B1YlYxTW9kZWxzMDEwLkJ1dHRvbnM7XG4gIHByaXZhdGUgX3NoYXJlVWlkPzogU2hhcmVVaWQ7XG4gIHByaXZhdGUgX3NoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0PzogcHJvdG9QdWJWMU1vZGVsczAwOS5TaGFyZVByaXZhdGVEYXRhUmVxdWVzdDtcbiAgcHJpdmF0ZSBfYm90U3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQ/OiBwcm90b1B1YlYxTW9kZWxzMDA4LkJvdFNwZWNpZmljUGVyc2lzdGVudEV2ZW50O1xuICBwcml2YXRlIF90YWJsZT86IHByb3RvUHViVjFNb2RlbHMwMTAuVGFibGU7XG5cbiAgcHJpdmF0ZSBfdHlwZTogTWVzc2FnZUJ5Qm90LlR5cGVDYXNlID0gTWVzc2FnZUJ5Qm90LlR5cGVDYXNlLm5vbmU7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBNZXNzYWdlQnlCb3QgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8TWVzc2FnZUJ5Qm90LkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnBhY2tldElkID0gX3ZhbHVlLnBhY2tldElkO1xuICAgIHRoaXMuZnJvbSA9IF92YWx1ZS5mcm9tXG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZChfdmFsdWUuZnJvbSlcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMudG8gPSBfdmFsdWUudG8gPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQoX3ZhbHVlLnRvKSA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnJlcGx5VG9JZCA9IF92YWx1ZS5yZXBseVRvSWQ7XG4gICAgdGhpcy5mb3J3YXJkRnJvbSA9IF92YWx1ZS5mb3J3YXJkRnJvbVxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQoX3ZhbHVlLmZvcndhcmRGcm9tKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5lbmNyeXB0ZWQgPSBfdmFsdWUuZW5jcnlwdGVkO1xuICAgIHRoaXMudHRsID0gX3ZhbHVlLnR0bDtcbiAgICB0aGlzLnRocmVhZCA9IF92YWx1ZS50aHJlYWQ7XG4gICAgdGhpcy5zaG91bGRCZVF1aWV0ID0gX3ZhbHVlLnNob3VsZEJlUXVpZXQ7XG4gICAgdGhpcy5tZXNzYWdlTWFya3VwID0gX3ZhbHVlLm1lc3NhZ2VNYXJrdXBcbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMTQuTWVzc2FnZU1hcmt1cChfdmFsdWUubWVzc2FnZU1hcmt1cClcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMudGV4dCA9IF92YWx1ZS50ZXh0ID8gbmV3IFRleHQoX3ZhbHVlLnRleHQpIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuZmlsZSA9IF92YWx1ZS5maWxlXG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAxLkZpbGUoX3ZhbHVlLmZpbGUpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnN0aWNrZXIgPSBfdmFsdWUuc3RpY2tlclxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAwNS5TdGlja2VyKF92YWx1ZS5zdGlja2VyKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5sb2NhdGlvbiA9IF92YWx1ZS5sb2NhdGlvblxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAwNi5Mb2NhdGlvbihfdmFsdWUubG9jYXRpb24pXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmZvcm0gPSBfdmFsdWUuZm9ybVxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAxMC5Gb3JtKF92YWx1ZS5mb3JtKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5idXR0b25zID0gX3ZhbHVlLmJ1dHRvbnNcbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMTAuQnV0dG9ucyhfdmFsdWUuYnV0dG9ucylcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuc2hhcmVVaWQgPSBfdmFsdWUuc2hhcmVVaWQgPyBuZXcgU2hhcmVVaWQoX3ZhbHVlLnNoYXJlVWlkKSA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0ID0gX3ZhbHVlLnNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0XG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDA5LlNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0KFxuICAgICAgICAgIF92YWx1ZS5zaGFyZVByaXZhdGVEYXRhUmVxdWVzdFxuICAgICAgICApXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmJvdFNwZWNpZmljUGVyc2lzdGVudEV2ZW50ID0gX3ZhbHVlLmJvdFNwZWNpZmljUGVyc2lzdGVudEV2ZW50XG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDA4LkJvdFNwZWNpZmljUGVyc2lzdGVudEV2ZW50KFxuICAgICAgICAgIF92YWx1ZS5ib3RTcGVjaWZpY1BlcnNpc3RlbnRFdmVudFxuICAgICAgICApXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnRhYmxlID0gX3ZhbHVlLnRhYmxlXG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDEwLlRhYmxlKF92YWx1ZS50YWJsZSlcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIE1lc3NhZ2VCeUJvdC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHBhY2tldElkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3BhY2tldElkO1xuICB9XG4gIHNldCBwYWNrZXRJZCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcGFja2V0SWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZnJvbSgpOiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2Zyb207XG4gIH1cbiAgc2V0IGZyb20odmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZnJvbSA9IHZhbHVlO1xuICB9XG4gIGdldCB0bygpOiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3RvO1xuICB9XG4gIHNldCB0byh2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl90byA9IHZhbHVlO1xuICB9XG4gIGdldCByZXBseVRvSWQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcmVwbHlUb0lkO1xuICB9XG4gIHNldCByZXBseVRvSWQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3JlcGx5VG9JZCA9IHZhbHVlO1xuICB9XG4gIGdldCBmb3J3YXJkRnJvbSgpOiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2ZvcndhcmRGcm9tO1xuICB9XG4gIHNldCBmb3J3YXJkRnJvbSh2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9mb3J3YXJkRnJvbSA9IHZhbHVlO1xuICB9XG4gIGdldCBlbmNyeXB0ZWQoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2VuY3J5cHRlZDtcbiAgfVxuICBzZXQgZW5jcnlwdGVkKHZhbHVlOiBib29sZWFuIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZW5jcnlwdGVkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHR0bCgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90dGw7XG4gIH1cbiAgc2V0IHR0bCh2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdHRsID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHRocmVhZCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90aHJlYWQ7XG4gIH1cbiAgc2V0IHRocmVhZCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdGhyZWFkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHNob3VsZEJlUXVpZXQoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3VsZEJlUXVpZXQ7XG4gIH1cbiAgc2V0IHNob3VsZEJlUXVpZXQodmFsdWU6IGJvb2xlYW4gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zaG91bGRCZVF1aWV0ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG1lc3NhZ2VNYXJrdXAoKTogcHJvdG9QdWJWMU1vZGVsczAxNC5NZXNzYWdlTWFya3VwIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbWVzc2FnZU1hcmt1cDtcbiAgfVxuICBzZXQgbWVzc2FnZU1hcmt1cCh2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAxNC5NZXNzYWdlTWFya3VwIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbWVzc2FnZU1hcmt1cCA9IHZhbHVlO1xuICB9XG4gIGdldCB0ZXh0KCk6IFRleHQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90ZXh0O1xuICB9XG4gIHNldCB0ZXh0KHZhbHVlOiBUZXh0IHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX2ZpbGUgPSB0aGlzLl9zdGlja2VyID0gdGhpcy5fbG9jYXRpb24gPSB0aGlzLl9mb3JtID0gdGhpcy5fYnV0dG9ucyA9IHRoaXMuX3NoYXJlVWlkID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QgPSB0aGlzLl9ib3RTcGVjaWZpY1BlcnNpc3RlbnRFdmVudCA9IHRoaXMuX3RhYmxlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IE1lc3NhZ2VCeUJvdC5UeXBlQ2FzZS50ZXh0O1xuICAgIH1cbiAgICB0aGlzLl90ZXh0ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGZpbGUoKTogcHJvdG9QdWJWMU1vZGVsczAwMS5GaWxlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZmlsZTtcbiAgfVxuICBzZXQgZmlsZSh2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAwMS5GaWxlIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3RleHQgPSB0aGlzLl9zdGlja2VyID0gdGhpcy5fbG9jYXRpb24gPSB0aGlzLl9mb3JtID0gdGhpcy5fYnV0dG9ucyA9IHRoaXMuX3NoYXJlVWlkID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QgPSB0aGlzLl9ib3RTcGVjaWZpY1BlcnNpc3RlbnRFdmVudCA9IHRoaXMuX3RhYmxlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IE1lc3NhZ2VCeUJvdC5UeXBlQ2FzZS5maWxlO1xuICAgIH1cbiAgICB0aGlzLl9maWxlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHN0aWNrZXIoKTogcHJvdG9QdWJWMU1vZGVsczAwNS5TdGlja2VyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc3RpY2tlcjtcbiAgfVxuICBzZXQgc3RpY2tlcih2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAwNS5TdGlja2VyIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3RleHQgPSB0aGlzLl9maWxlID0gdGhpcy5fbG9jYXRpb24gPSB0aGlzLl9mb3JtID0gdGhpcy5fYnV0dG9ucyA9IHRoaXMuX3NoYXJlVWlkID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QgPSB0aGlzLl9ib3RTcGVjaWZpY1BlcnNpc3RlbnRFdmVudCA9IHRoaXMuX3RhYmxlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IE1lc3NhZ2VCeUJvdC5UeXBlQ2FzZS5zdGlja2VyO1xuICAgIH1cbiAgICB0aGlzLl9zdGlja2VyID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGxvY2F0aW9uKCk6IHByb3RvUHViVjFNb2RlbHMwMDYuTG9jYXRpb24gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9sb2NhdGlvbjtcbiAgfVxuICBzZXQgbG9jYXRpb24odmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMDYuTG9jYXRpb24gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fdGV4dCA9IHRoaXMuX2ZpbGUgPSB0aGlzLl9zdGlja2VyID0gdGhpcy5fZm9ybSA9IHRoaXMuX2J1dHRvbnMgPSB0aGlzLl9zaGFyZVVpZCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0ID0gdGhpcy5fYm90U3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQgPSB0aGlzLl90YWJsZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBNZXNzYWdlQnlCb3QuVHlwZUNhc2UubG9jYXRpb247XG4gICAgfVxuICAgIHRoaXMuX2xvY2F0aW9uID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGZvcm0oKTogcHJvdG9QdWJWMU1vZGVsczAxMC5Gb3JtIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZm9ybTtcbiAgfVxuICBzZXQgZm9ybSh2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAxMC5Gb3JtIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3RleHQgPSB0aGlzLl9maWxlID0gdGhpcy5fc3RpY2tlciA9IHRoaXMuX2xvY2F0aW9uID0gdGhpcy5fYnV0dG9ucyA9IHRoaXMuX3NoYXJlVWlkID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QgPSB0aGlzLl9ib3RTcGVjaWZpY1BlcnNpc3RlbnRFdmVudCA9IHRoaXMuX3RhYmxlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IE1lc3NhZ2VCeUJvdC5UeXBlQ2FzZS5mb3JtO1xuICAgIH1cbiAgICB0aGlzLl9mb3JtID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGJ1dHRvbnMoKTogcHJvdG9QdWJWMU1vZGVsczAxMC5CdXR0b25zIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fYnV0dG9ucztcbiAgfVxuICBzZXQgYnV0dG9ucyh2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAxMC5CdXR0b25zIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3RleHQgPSB0aGlzLl9maWxlID0gdGhpcy5fc3RpY2tlciA9IHRoaXMuX2xvY2F0aW9uID0gdGhpcy5fZm9ybSA9IHRoaXMuX3NoYXJlVWlkID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QgPSB0aGlzLl9ib3RTcGVjaWZpY1BlcnNpc3RlbnRFdmVudCA9IHRoaXMuX3RhYmxlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IE1lc3NhZ2VCeUJvdC5UeXBlQ2FzZS5idXR0b25zO1xuICAgIH1cbiAgICB0aGlzLl9idXR0b25zID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHNoYXJlVWlkKCk6IFNoYXJlVWlkIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc2hhcmVVaWQ7XG4gIH1cbiAgc2V0IHNoYXJlVWlkKHZhbHVlOiBTaGFyZVVpZCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl90ZXh0ID0gdGhpcy5fZmlsZSA9IHRoaXMuX3N0aWNrZXIgPSB0aGlzLl9sb2NhdGlvbiA9IHRoaXMuX2Zvcm0gPSB0aGlzLl9idXR0b25zID0gdGhpcy5fc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QgPSB0aGlzLl9ib3RTcGVjaWZpY1BlcnNpc3RlbnRFdmVudCA9IHRoaXMuX3RhYmxlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IE1lc3NhZ2VCeUJvdC5UeXBlQ2FzZS5zaGFyZVVpZDtcbiAgICB9XG4gICAgdGhpcy5fc2hhcmVVaWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QoKTpcbiAgICB8IHByb3RvUHViVjFNb2RlbHMwMDkuU2hhcmVQcml2YXRlRGF0YVJlcXVlc3RcbiAgICB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0O1xuICB9XG4gIHNldCBzaGFyZVByaXZhdGVEYXRhUmVxdWVzdChcbiAgICB2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAwOS5TaGFyZVByaXZhdGVEYXRhUmVxdWVzdCB8IHVuZGVmaW5lZFxuICApIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fdGV4dCA9IHRoaXMuX2ZpbGUgPSB0aGlzLl9zdGlja2VyID0gdGhpcy5fbG9jYXRpb24gPSB0aGlzLl9mb3JtID0gdGhpcy5fYnV0dG9ucyA9IHRoaXMuX3NoYXJlVWlkID0gdGhpcy5fYm90U3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQgPSB0aGlzLl90YWJsZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBNZXNzYWdlQnlCb3QuVHlwZUNhc2Uuc2hhcmVQcml2YXRlRGF0YVJlcXVlc3Q7XG4gICAgfVxuICAgIHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGJvdFNwZWNpZmljUGVyc2lzdGVudEV2ZW50KCk6XG4gICAgfCBwcm90b1B1YlYxTW9kZWxzMDA4LkJvdFNwZWNpZmljUGVyc2lzdGVudEV2ZW50XG4gICAgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9ib3RTcGVjaWZpY1BlcnNpc3RlbnRFdmVudDtcbiAgfVxuICBzZXQgYm90U3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQoXG4gICAgdmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMDguQm90U3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQgfCB1bmRlZmluZWRcbiAgKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3RleHQgPSB0aGlzLl9maWxlID0gdGhpcy5fc3RpY2tlciA9IHRoaXMuX2xvY2F0aW9uID0gdGhpcy5fZm9ybSA9IHRoaXMuX2J1dHRvbnMgPSB0aGlzLl9zaGFyZVVpZCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0ID0gdGhpcy5fdGFibGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gTWVzc2FnZUJ5Qm90LlR5cGVDYXNlLmJvdFNwZWNpZmljUGVyc2lzdGVudEV2ZW50O1xuICAgIH1cbiAgICB0aGlzLl9ib3RTcGVjaWZpY1BlcnNpc3RlbnRFdmVudCA9IHZhbHVlO1xuICB9XG4gIGdldCB0YWJsZSgpOiBwcm90b1B1YlYxTW9kZWxzMDEwLlRhYmxlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdGFibGU7XG4gIH1cbiAgc2V0IHRhYmxlKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDEwLlRhYmxlIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3RleHQgPSB0aGlzLl9maWxlID0gdGhpcy5fc3RpY2tlciA9IHRoaXMuX2xvY2F0aW9uID0gdGhpcy5fZm9ybSA9IHRoaXMuX2J1dHRvbnMgPSB0aGlzLl9zaGFyZVVpZCA9IHRoaXMuX3NoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0ID0gdGhpcy5fYm90U3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gTWVzc2FnZUJ5Qm90LlR5cGVDYXNlLnRhYmxlO1xuICAgIH1cbiAgICB0aGlzLl90YWJsZSA9IHZhbHVlO1xuICB9XG4gIGdldCB0eXBlKCkge1xuICAgIHJldHVybiB0aGlzLl90eXBlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIE1lc3NhZ2VCeUJvdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBNZXNzYWdlQnlCb3QuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBwYWNrZXRJZDogdGhpcy5wYWNrZXRJZCxcbiAgICAgIGZyb206IHRoaXMuZnJvbSA/IHRoaXMuZnJvbS50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgdG86IHRoaXMudG8gPyB0aGlzLnRvLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICByZXBseVRvSWQ6IHRoaXMucmVwbHlUb0lkLFxuICAgICAgZm9yd2FyZEZyb206IHRoaXMuZm9yd2FyZEZyb20gPyB0aGlzLmZvcndhcmRGcm9tLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBlbmNyeXB0ZWQ6IHRoaXMuZW5jcnlwdGVkLFxuICAgICAgdHRsOiB0aGlzLnR0bCxcbiAgICAgIHRocmVhZDogdGhpcy50aHJlYWQsXG4gICAgICBzaG91bGRCZVF1aWV0OiB0aGlzLnNob3VsZEJlUXVpZXQsXG4gICAgICBtZXNzYWdlTWFya3VwOiB0aGlzLm1lc3NhZ2VNYXJrdXBcbiAgICAgICAgPyB0aGlzLm1lc3NhZ2VNYXJrdXAudG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIHRleHQ6IHRoaXMudGV4dCA/IHRoaXMudGV4dC50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgZmlsZTogdGhpcy5maWxlID8gdGhpcy5maWxlLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBzdGlja2VyOiB0aGlzLnN0aWNrZXIgPyB0aGlzLnN0aWNrZXIudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGxvY2F0aW9uOiB0aGlzLmxvY2F0aW9uID8gdGhpcy5sb2NhdGlvbi50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgZm9ybTogdGhpcy5mb3JtID8gdGhpcy5mb3JtLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBidXR0b25zOiB0aGlzLmJ1dHRvbnMgPyB0aGlzLmJ1dHRvbnMudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIHNoYXJlVWlkOiB0aGlzLnNoYXJlVWlkID8gdGhpcy5zaGFyZVVpZC50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgc2hhcmVQcml2YXRlRGF0YVJlcXVlc3Q6IHRoaXMuc2hhcmVQcml2YXRlRGF0YVJlcXVlc3RcbiAgICAgICAgPyB0aGlzLnNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0LnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICBib3RTcGVjaWZpY1BlcnNpc3RlbnRFdmVudDogdGhpcy5ib3RTcGVjaWZpY1BlcnNpc3RlbnRFdmVudFxuICAgICAgICA/IHRoaXMuYm90U3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQudG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIHRhYmxlOiB0aGlzLnRhYmxlID8gdGhpcy50YWJsZS50b09iamVjdCgpIDogdW5kZWZpbmVkXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogTWVzc2FnZUJ5Qm90LkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFja2V0SWQ6IHRoaXMucGFja2V0SWQsXG4gICAgICBmcm9tOiB0aGlzLmZyb20gPyB0aGlzLmZyb20udG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgdG86IHRoaXMudG8gPyB0aGlzLnRvLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIHJlcGx5VG9JZDogdGhpcy5yZXBseVRvSWQsXG4gICAgICBmb3J3YXJkRnJvbTogdGhpcy5mb3J3YXJkRnJvbVxuICAgICAgICA/IHRoaXMuZm9yd2FyZEZyb20udG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsLFxuICAgICAgZW5jcnlwdGVkOiB0aGlzLmVuY3J5cHRlZCxcbiAgICAgIHR0bDogdGhpcy50dGwsXG4gICAgICB0aHJlYWQ6IHRoaXMudGhyZWFkLFxuICAgICAgc2hvdWxkQmVRdWlldDogdGhpcy5zaG91bGRCZVF1aWV0LFxuICAgICAgbWVzc2FnZU1hcmt1cDogdGhpcy5tZXNzYWdlTWFya3VwXG4gICAgICAgID8gdGhpcy5tZXNzYWdlTWFya3VwLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbCxcbiAgICAgIHRleHQ6IHRoaXMudGV4dCA/IHRoaXMudGV4dC50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICBmaWxlOiB0aGlzLmZpbGUgPyB0aGlzLmZpbGUudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgc3RpY2tlcjogdGhpcy5zdGlja2VyID8gdGhpcy5zdGlja2VyLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIGxvY2F0aW9uOiB0aGlzLmxvY2F0aW9uID8gdGhpcy5sb2NhdGlvbi50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICBmb3JtOiB0aGlzLmZvcm0gPyB0aGlzLmZvcm0udG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgYnV0dG9uczogdGhpcy5idXR0b25zID8gdGhpcy5idXR0b25zLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIHNoYXJlVWlkOiB0aGlzLnNoYXJlVWlkID8gdGhpcy5zaGFyZVVpZC50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICBzaGFyZVByaXZhdGVEYXRhUmVxdWVzdDogdGhpcy5zaGFyZVByaXZhdGVEYXRhUmVxdWVzdFxuICAgICAgICA/IHRoaXMuc2hhcmVQcml2YXRlRGF0YVJlcXVlc3QudG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsLFxuICAgICAgYm90U3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQ6IHRoaXMuYm90U3BlY2lmaWNQZXJzaXN0ZW50RXZlbnRcbiAgICAgICAgPyB0aGlzLmJvdFNwZWNpZmljUGVyc2lzdGVudEV2ZW50LnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbCxcbiAgICAgIHRhYmxlOiB0aGlzLnRhYmxlID8gdGhpcy50YWJsZS50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGxcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIE1lc3NhZ2VCeUJvdCB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgTWVzc2FnZUJ5Qm90XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBwYWNrZXRJZD86IHN0cmluZztcbiAgICBmcm9tPzogcHJvdG9QdWJWMU1vZGVsczAwMi5VaWQuQXNPYmplY3Q7XG4gICAgdG8/OiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5Bc09iamVjdDtcbiAgICByZXBseVRvSWQ/OiBzdHJpbmc7XG4gICAgZm9yd2FyZEZyb20/OiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5Bc09iamVjdDtcbiAgICBlbmNyeXB0ZWQ/OiBib29sZWFuO1xuICAgIHR0bD86IG51bWJlcjtcbiAgICB0aHJlYWQ/OiBzdHJpbmc7XG4gICAgc2hvdWxkQmVRdWlldD86IGJvb2xlYW47XG4gICAgbWVzc2FnZU1hcmt1cD86IHByb3RvUHViVjFNb2RlbHMwMTQuTWVzc2FnZU1hcmt1cC5Bc09iamVjdDtcbiAgICB0ZXh0PzogVGV4dC5Bc09iamVjdDtcbiAgICBmaWxlPzogcHJvdG9QdWJWMU1vZGVsczAwMS5GaWxlLkFzT2JqZWN0O1xuICAgIHN0aWNrZXI/OiBwcm90b1B1YlYxTW9kZWxzMDA1LlN0aWNrZXIuQXNPYmplY3Q7XG4gICAgbG9jYXRpb24/OiBwcm90b1B1YlYxTW9kZWxzMDA2LkxvY2F0aW9uLkFzT2JqZWN0O1xuICAgIGZvcm0/OiBwcm90b1B1YlYxTW9kZWxzMDEwLkZvcm0uQXNPYmplY3Q7XG4gICAgYnV0dG9ucz86IHByb3RvUHViVjFNb2RlbHMwMTAuQnV0dG9ucy5Bc09iamVjdDtcbiAgICBzaGFyZVVpZD86IFNoYXJlVWlkLkFzT2JqZWN0O1xuICAgIHNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0PzogcHJvdG9QdWJWMU1vZGVsczAwOS5TaGFyZVByaXZhdGVEYXRhUmVxdWVzdC5Bc09iamVjdDtcbiAgICBib3RTcGVjaWZpY1BlcnNpc3RlbnRFdmVudD86IHByb3RvUHViVjFNb2RlbHMwMDguQm90U3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQuQXNPYmplY3Q7XG4gICAgdGFibGU/OiBwcm90b1B1YlYxTW9kZWxzMDEwLlRhYmxlLkFzT2JqZWN0O1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIE1lc3NhZ2VCeUJvdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgcGFja2V0SWQ/OiBzdHJpbmc7XG4gICAgZnJvbT86IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICB0bz86IHByb3RvUHViVjFNb2RlbHMwMDIuVWlkLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICByZXBseVRvSWQ/OiBzdHJpbmc7XG4gICAgZm9yd2FyZEZyb20/OiBwcm90b1B1YlYxTW9kZWxzMDAyLlVpZC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgZW5jcnlwdGVkPzogYm9vbGVhbjtcbiAgICB0dGw/OiBudW1iZXI7XG4gICAgdGhyZWFkPzogc3RyaW5nO1xuICAgIHNob3VsZEJlUXVpZXQ/OiBib29sZWFuO1xuICAgIG1lc3NhZ2VNYXJrdXA/OiBwcm90b1B1YlYxTW9kZWxzMDE0Lk1lc3NhZ2VNYXJrdXAuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHRleHQ/OiBUZXh0LkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBmaWxlPzogcHJvdG9QdWJWMU1vZGVsczAwMS5GaWxlLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBzdGlja2VyPzogcHJvdG9QdWJWMU1vZGVsczAwNS5TdGlja2VyLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBsb2NhdGlvbj86IHByb3RvUHViVjFNb2RlbHMwMDYuTG9jYXRpb24uQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIGZvcm0/OiBwcm90b1B1YlYxTW9kZWxzMDEwLkZvcm0uQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIGJ1dHRvbnM/OiBwcm90b1B1YlYxTW9kZWxzMDEwLkJ1dHRvbnMuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHNoYXJlVWlkPzogU2hhcmVVaWQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0PzogcHJvdG9QdWJWMU1vZGVsczAwOS5TaGFyZVByaXZhdGVEYXRhUmVxdWVzdC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgYm90U3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQ/OiBwcm90b1B1YlYxTW9kZWxzMDA4LkJvdFNwZWNpZmljUGVyc2lzdGVudEV2ZW50LkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICB0YWJsZT86IHByb3RvUHViVjFNb2RlbHMwMTAuVGFibGUuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICB9XG4gIGV4cG9ydCBlbnVtIFR5cGVDYXNlIHtcbiAgICBub25lID0gMCxcbiAgICB0ZXh0ID0gMSxcbiAgICBmaWxlID0gMixcbiAgICBzdGlja2VyID0gMyxcbiAgICBsb2NhdGlvbiA9IDQsXG4gICAgZm9ybSA9IDUsXG4gICAgYnV0dG9ucyA9IDYsXG4gICAgc2hhcmVVaWQgPSA3LFxuICAgIHNoYXJlUHJpdmF0ZURhdGFSZXF1ZXN0ID0gOCxcbiAgICBib3RTcGVjaWZpY1BlcnNpc3RlbnRFdmVudCA9IDksXG4gICAgdGFibGUgPSAxMFxuICB9XG59XG4iXX0=