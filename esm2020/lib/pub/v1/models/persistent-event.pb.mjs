import { BinaryReader, BinaryWriter } from 'google-protobuf';
import * as protoPubV1Models001 from '../../../pub/v1/models/uid.pb';
import * as protoPubV1Models002 from '../../../pub/v1/models/avatar.pb';
/**
 * Message implementation for proto.pub.v1.models.PersistentEvent
 */
export class PersistentEvent {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of PersistentEvent to deeply clone from
     */
    constructor(_value) {
        this._type = PersistentEvent.TypeCase.none;
        _value = _value || {};
        this.mucSpecificPersistentEvent = _value.mucSpecificPersistentEvent
            ? new MucSpecificPersistentEvent(_value.mucSpecificPersistentEvent)
            : undefined;
        this.messageManipulationPersistentEvent = _value.messageManipulationPersistentEvent
            ? new MessageManipulationPersistentEvent(_value.messageManipulationPersistentEvent)
            : undefined;
        this.adminSpecificPersistentEvent = _value.adminSpecificPersistentEvent
            ? new AdminSpecificPersistentEvent(_value.adminSpecificPersistentEvent)
            : undefined;
        this.botSpecificPersistentEvent = _value.botSpecificPersistentEvent
            ? new BotSpecificPersistentEvent(_value.botSpecificPersistentEvent)
            : undefined;
        PersistentEvent.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new PersistentEvent();
        PersistentEvent.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
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
                case 1:
                    _instance.mucSpecificPersistentEvent = new MucSpecificPersistentEvent();
                    _reader.readMessage(_instance.mucSpecificPersistentEvent, MucSpecificPersistentEvent.deserializeBinaryFromReader);
                    break;
                case 2:
                    _instance.messageManipulationPersistentEvent = new MessageManipulationPersistentEvent();
                    _reader.readMessage(_instance.messageManipulationPersistentEvent, MessageManipulationPersistentEvent.deserializeBinaryFromReader);
                    break;
                case 3:
                    _instance.adminSpecificPersistentEvent = new AdminSpecificPersistentEvent();
                    _reader.readMessage(_instance.adminSpecificPersistentEvent, AdminSpecificPersistentEvent.deserializeBinaryFromReader);
                    break;
                case 4:
                    _instance.botSpecificPersistentEvent = new BotSpecificPersistentEvent();
                    _reader.readMessage(_instance.botSpecificPersistentEvent, BotSpecificPersistentEvent.deserializeBinaryFromReader);
                    break;
                default:
                    _reader.skipField();
            }
        }
        PersistentEvent.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.mucSpecificPersistentEvent) {
            _writer.writeMessage(1, _instance.mucSpecificPersistentEvent, MucSpecificPersistentEvent.serializeBinaryToWriter);
        }
        if (_instance.messageManipulationPersistentEvent) {
            _writer.writeMessage(2, _instance.messageManipulationPersistentEvent, MessageManipulationPersistentEvent.serializeBinaryToWriter);
        }
        if (_instance.adminSpecificPersistentEvent) {
            _writer.writeMessage(3, _instance.adminSpecificPersistentEvent, AdminSpecificPersistentEvent.serializeBinaryToWriter);
        }
        if (_instance.botSpecificPersistentEvent) {
            _writer.writeMessage(4, _instance.botSpecificPersistentEvent, BotSpecificPersistentEvent.serializeBinaryToWriter);
        }
    }
    get mucSpecificPersistentEvent() {
        return this._mucSpecificPersistentEvent;
    }
    set mucSpecificPersistentEvent(value) {
        if (value !== undefined && value !== null) {
            this._messageManipulationPersistentEvent = this._adminSpecificPersistentEvent = this._botSpecificPersistentEvent = undefined;
            this._type = PersistentEvent.TypeCase.mucSpecificPersistentEvent;
        }
        this._mucSpecificPersistentEvent = value;
    }
    get messageManipulationPersistentEvent() {
        return this._messageManipulationPersistentEvent;
    }
    set messageManipulationPersistentEvent(value) {
        if (value !== undefined && value !== null) {
            this._mucSpecificPersistentEvent = this._adminSpecificPersistentEvent = this._botSpecificPersistentEvent = undefined;
            this._type = PersistentEvent.TypeCase.messageManipulationPersistentEvent;
        }
        this._messageManipulationPersistentEvent = value;
    }
    get adminSpecificPersistentEvent() {
        return this._adminSpecificPersistentEvent;
    }
    set adminSpecificPersistentEvent(value) {
        if (value !== undefined && value !== null) {
            this._mucSpecificPersistentEvent = this._messageManipulationPersistentEvent = this._botSpecificPersistentEvent = undefined;
            this._type = PersistentEvent.TypeCase.adminSpecificPersistentEvent;
        }
        this._adminSpecificPersistentEvent = value;
    }
    get botSpecificPersistentEvent() {
        return this._botSpecificPersistentEvent;
    }
    set botSpecificPersistentEvent(value) {
        if (value !== undefined && value !== null) {
            this._mucSpecificPersistentEvent = this._messageManipulationPersistentEvent = this._adminSpecificPersistentEvent = undefined;
            this._type = PersistentEvent.TypeCase.botSpecificPersistentEvent;
        }
        this._botSpecificPersistentEvent = value;
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
        PersistentEvent.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            mucSpecificPersistentEvent: this.mucSpecificPersistentEvent
                ? this.mucSpecificPersistentEvent.toObject()
                : undefined,
            messageManipulationPersistentEvent: this
                .messageManipulationPersistentEvent
                ? this.messageManipulationPersistentEvent.toObject()
                : undefined,
            adminSpecificPersistentEvent: this.adminSpecificPersistentEvent
                ? this.adminSpecificPersistentEvent.toObject()
                : undefined,
            botSpecificPersistentEvent: this.botSpecificPersistentEvent
                ? this.botSpecificPersistentEvent.toObject()
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
            mucSpecificPersistentEvent: this.mucSpecificPersistentEvent
                ? this.mucSpecificPersistentEvent.toProtobufJSON(options)
                : null,
            messageManipulationPersistentEvent: this
                .messageManipulationPersistentEvent
                ? this.messageManipulationPersistentEvent.toProtobufJSON(options)
                : null,
            adminSpecificPersistentEvent: this.adminSpecificPersistentEvent
                ? this.adminSpecificPersistentEvent.toProtobufJSON(options)
                : null,
            botSpecificPersistentEvent: this.botSpecificPersistentEvent
                ? this.botSpecificPersistentEvent.toProtobufJSON(options)
                : null
        };
    }
}
PersistentEvent.id = 'proto.pub.v1.models.PersistentEvent';
(function (PersistentEvent) {
    let TypeCase;
    (function (TypeCase) {
        TypeCase[TypeCase["none"] = 0] = "none";
        TypeCase[TypeCase["mucSpecificPersistentEvent"] = 1] = "mucSpecificPersistentEvent";
        TypeCase[TypeCase["messageManipulationPersistentEvent"] = 2] = "messageManipulationPersistentEvent";
        TypeCase[TypeCase["adminSpecificPersistentEvent"] = 3] = "adminSpecificPersistentEvent";
        TypeCase[TypeCase["botSpecificPersistentEvent"] = 4] = "botSpecificPersistentEvent";
    })(TypeCase = PersistentEvent.TypeCase || (PersistentEvent.TypeCase = {}));
})(PersistentEvent || (PersistentEvent = {}));
/**
 * Message implementation for proto.pub.v1.models.MucSpecificPersistentEvent
 */
export class MucSpecificPersistentEvent {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of MucSpecificPersistentEvent to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.issuer = _value.issuer
            ? new protoPubV1Models001.Uid(_value.issuer)
            : undefined;
        this.issue = _value.issue;
        this.assignee = _value.assignee
            ? new protoPubV1Models001.Uid(_value.assignee)
            : undefined;
        this.messageId = _value.messageId;
        this.avatar = _value.avatar
            ? new protoPubV1Models002.Avatar(_value.avatar)
            : undefined;
        this.name = _value.name;
        MucSpecificPersistentEvent.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new MucSpecificPersistentEvent();
        MucSpecificPersistentEvent.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.issuer = _instance.issuer || undefined;
        _instance.issue = _instance.issue || 0;
        _instance.assignee = _instance.assignee || undefined;
        _instance.messageId = _instance.messageId || '0';
        _instance.avatar = _instance.avatar || undefined;
        _instance.name = _instance.name || '';
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
                    _instance.issuer = new protoPubV1Models001.Uid();
                    _reader.readMessage(_instance.issuer, protoPubV1Models001.Uid.deserializeBinaryFromReader);
                    break;
                case 2:
                    _instance.issue = _reader.readEnum();
                    break;
                case 3:
                    _instance.assignee = new protoPubV1Models001.Uid();
                    _reader.readMessage(_instance.assignee, protoPubV1Models001.Uid.deserializeBinaryFromReader);
                    break;
                case 4:
                    _instance.messageId = _reader.readInt64String();
                    break;
                case 5:
                    _instance.avatar = new protoPubV1Models002.Avatar();
                    _reader.readMessage(_instance.avatar, protoPubV1Models002.Avatar.deserializeBinaryFromReader);
                    break;
                case 6:
                    _instance.name = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        MucSpecificPersistentEvent.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.issuer) {
            _writer.writeMessage(1, _instance.issuer, protoPubV1Models001.Uid.serializeBinaryToWriter);
        }
        if (_instance.issue) {
            _writer.writeEnum(2, _instance.issue);
        }
        if (_instance.assignee) {
            _writer.writeMessage(3, _instance.assignee, protoPubV1Models001.Uid.serializeBinaryToWriter);
        }
        if (_instance.messageId) {
            _writer.writeInt64String(4, _instance.messageId);
        }
        if (_instance.avatar) {
            _writer.writeMessage(5, _instance.avatar, protoPubV1Models002.Avatar.serializeBinaryToWriter);
        }
        if (_instance.name) {
            _writer.writeString(6, _instance.name);
        }
    }
    get issuer() {
        return this._issuer;
    }
    set issuer(value) {
        this._issuer = value;
    }
    get issue() {
        return this._issue;
    }
    set issue(value) {
        this._issue = value;
    }
    get assignee() {
        return this._assignee;
    }
    set assignee(value) {
        this._assignee = value;
    }
    get messageId() {
        return this._messageId;
    }
    set messageId(value) {
        this._messageId = value;
    }
    get avatar() {
        return this._avatar;
    }
    set avatar(value) {
        this._avatar = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        MucSpecificPersistentEvent.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            issuer: this.issuer ? this.issuer.toObject() : undefined,
            issue: this.issue,
            assignee: this.assignee ? this.assignee.toObject() : undefined,
            messageId: this.messageId,
            avatar: this.avatar ? this.avatar.toObject() : undefined,
            name: this.name
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
            issuer: this.issuer ? this.issuer.toProtobufJSON(options) : null,
            issue: MucSpecificPersistentEvent.Issue[this.issue === null || this.issue === undefined ? 0 : this.issue],
            assignee: this.assignee ? this.assignee.toProtobufJSON(options) : null,
            messageId: this.messageId,
            avatar: this.avatar ? this.avatar.toProtobufJSON(options) : null,
            name: this.name
        };
    }
}
MucSpecificPersistentEvent.id = 'proto.pub.v1.models.MucSpecificPersistentEvent';
(function (MucSpecificPersistentEvent) {
    let Issue;
    (function (Issue) {
        Issue[Issue["KICK_USER"] = 0] = "KICK_USER";
        Issue[Issue["ADD_USER"] = 1] = "ADD_USER";
        Issue[Issue["PIN_MESSAGE"] = 2] = "PIN_MESSAGE";
        Issue[Issue["NAME_CHANGED"] = 3] = "NAME_CHANGED";
        Issue[Issue["AVATAR_CHANGED"] = 4] = "AVATAR_CHANGED";
        Issue[Issue["MUC_CREATED"] = 5] = "MUC_CREATED";
        Issue[Issue["LEAVE_USER"] = 6] = "LEAVE_USER";
        Issue[Issue["JOINED_USER"] = 7] = "JOINED_USER";
        Issue[Issue["DELETED"] = 8] = "DELETED";
    })(Issue = MucSpecificPersistentEvent.Issue || (MucSpecificPersistentEvent.Issue = {}));
})(MucSpecificPersistentEvent || (MucSpecificPersistentEvent = {}));
/**
 * Message implementation for proto.pub.v1.models.MessageManipulationPersistentEvent
 */
export class MessageManipulationPersistentEvent {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of MessageManipulationPersistentEvent to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.action = _value.action;
        this.messageId = _value.messageId;
        this.manipulationTime = _value.manipulationTime;
        MessageManipulationPersistentEvent.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new MessageManipulationPersistentEvent();
        MessageManipulationPersistentEvent.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.action = _instance.action || 0;
        _instance.messageId = _instance.messageId || '0';
        _instance.manipulationTime = _instance.manipulationTime || '0';
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
                    _instance.action = _reader.readEnum();
                    break;
                case 2:
                    _instance.messageId = _reader.readInt64String();
                    break;
                case 3:
                    _instance.manipulationTime = _reader.readInt64String();
                    break;
                default:
                    _reader.skipField();
            }
        }
        MessageManipulationPersistentEvent.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.action) {
            _writer.writeEnum(1, _instance.action);
        }
        if (_instance.messageId) {
            _writer.writeInt64String(2, _instance.messageId);
        }
        if (_instance.manipulationTime) {
            _writer.writeInt64String(3, _instance.manipulationTime);
        }
    }
    get action() {
        return this._action;
    }
    set action(value) {
        this._action = value;
    }
    get messageId() {
        return this._messageId;
    }
    set messageId(value) {
        this._messageId = value;
    }
    get manipulationTime() {
        return this._manipulationTime;
    }
    set manipulationTime(value) {
        this._manipulationTime = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        MessageManipulationPersistentEvent.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            action: this.action,
            messageId: this.messageId,
            manipulationTime: this.manipulationTime
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
            action: MessageManipulationPersistentEvent.Action[this.action === null || this.action === undefined ? 0 : this.action],
            messageId: this.messageId,
            manipulationTime: this.manipulationTime
        };
    }
}
MessageManipulationPersistentEvent.id = 'proto.pub.v1.models.MessageManipulationPersistentEvent';
(function (MessageManipulationPersistentEvent) {
    let Action;
    (function (Action) {
        Action[Action["EDITED"] = 0] = "EDITED";
        Action[Action["DELETED"] = 1] = "DELETED";
    })(Action = MessageManipulationPersistentEvent.Action || (MessageManipulationPersistentEvent.Action = {}));
})(MessageManipulationPersistentEvent || (MessageManipulationPersistentEvent = {}));
/**
 * Message implementation for proto.pub.v1.models.AdminSpecificPersistentEvent
 */
export class AdminSpecificPersistentEvent {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of AdminSpecificPersistentEvent to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.event = _value.event;
        AdminSpecificPersistentEvent.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new AdminSpecificPersistentEvent();
        AdminSpecificPersistentEvent.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.event = _instance.event || 0;
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
                    _instance.event = _reader.readEnum();
                    break;
                default:
                    _reader.skipField();
            }
        }
        AdminSpecificPersistentEvent.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.event) {
            _writer.writeEnum(1, _instance.event);
        }
    }
    get event() {
        return this._event;
    }
    set event(value) {
        this._event = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        AdminSpecificPersistentEvent.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            event: this.event
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
            event: AdminSpecificPersistentEvent.Event[this.event === null || this.event === undefined ? 0 : this.event]
        };
    }
}
AdminSpecificPersistentEvent.id = 'proto.pub.v1.models.AdminSpecificPersistentEvent';
(function (AdminSpecificPersistentEvent) {
    let Event;
    (function (Event) {
        Event[Event["NEW_CONTACT_ADDED"] = 0] = "NEW_CONTACT_ADDED";
    })(Event = AdminSpecificPersistentEvent.Event || (AdminSpecificPersistentEvent.Event = {}));
})(AdminSpecificPersistentEvent || (AdminSpecificPersistentEvent = {}));
/**
 * Message implementation for proto.pub.v1.models.BotSpecificPersistentEvent
 */
export class BotSpecificPersistentEvent {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of BotSpecificPersistentEvent to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.event = _value.event;
        this.messageId = _value.messageId;
        this.errorMessage = _value.errorMessage;
        BotSpecificPersistentEvent.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new BotSpecificPersistentEvent();
        BotSpecificPersistentEvent.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.event = _instance.event || 0;
        _instance.messageId = _instance.messageId || '0';
        _instance.errorMessage = _instance.errorMessage || '';
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
                    _instance.event = _reader.readEnum();
                    break;
                case 2:
                    _instance.messageId = _reader.readInt64String();
                    break;
                case 3:
                    _instance.errorMessage = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        BotSpecificPersistentEvent.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.event) {
            _writer.writeEnum(1, _instance.event);
        }
        if (_instance.messageId) {
            _writer.writeInt64String(2, _instance.messageId);
        }
        if (_instance.errorMessage) {
            _writer.writeString(3, _instance.errorMessage);
        }
    }
    get event() {
        return this._event;
    }
    set event(value) {
        this._event = value;
    }
    get messageId() {
        return this._messageId;
    }
    set messageId(value) {
        this._messageId = value;
    }
    get errorMessage() {
        return this._errorMessage;
    }
    set errorMessage(value) {
        this._errorMessage = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        BotSpecificPersistentEvent.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            event: this.event,
            messageId: this.messageId,
            errorMessage: this.errorMessage
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
            event: BotSpecificPersistentEvent.BotEvent[this.event === null || this.event === undefined ? 0 : this.event],
            messageId: this.messageId,
            errorMessage: this.errorMessage
        };
    }
}
BotSpecificPersistentEvent.id = 'proto.pub.v1.models.BotSpecificPersistentEvent';
(function (BotSpecificPersistentEvent) {
    let BotEvent;
    (function (BotEvent) {
        BotEvent[BotEvent["BOT_NOT_RESPONDING"] = 0] = "BOT_NOT_RESPONDING";
    })(BotEvent = BotSpecificPersistentEvent.BotEvent || (BotSpecificPersistentEvent.BotEvent = {}));
})(BotSpecificPersistentEvent || (BotSpecificPersistentEvent = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc2lzdGVudC1ldmVudC5wYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Byb3RvL3NyYy9saWIvcHViL3YxL21vZGVscy9wZXJzaXN0ZW50LWV2ZW50LnBiLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdBLE9BQU8sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFjLE1BQU0saUJBQWlCLENBQUM7QUFFekUsT0FBTyxLQUFLLG1CQUFtQixNQUFNLCtCQUErQixDQUFDO0FBQ3JFLE9BQU8sS0FBSyxtQkFBbUIsTUFBTSxrQ0FBa0MsQ0FBQztBQUN4RTs7R0FFRztBQUNILE1BQU0sT0FBTyxlQUFlO0lBcUgxQjs7O09BR0c7SUFDSCxZQUFZLE1BQW1EO1FBTnZELFVBQUssR0FBNkIsZUFBZSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFPdEUsTUFBTSxHQUFHLE1BQU0sSUFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLDBCQUEwQixHQUFHLE1BQU0sQ0FBQywwQkFBMEI7WUFDakUsQ0FBQyxDQUFDLElBQUksMEJBQTBCLENBQUMsTUFBTSxDQUFDLDBCQUEwQixDQUFDO1lBQ25FLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDZCxJQUFJLENBQUMsa0NBQWtDLEdBQUcsTUFBTSxDQUFDLGtDQUFrQztZQUNqRixDQUFDLENBQUMsSUFBSSxrQ0FBa0MsQ0FDcEMsTUFBTSxDQUFDLGtDQUFrQyxDQUMxQztZQUNILENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDZCxJQUFJLENBQUMsNEJBQTRCLEdBQUcsTUFBTSxDQUFDLDRCQUE0QjtZQUNyRSxDQUFDLENBQUMsSUFBSSw0QkFBNEIsQ0FBQyxNQUFNLENBQUMsNEJBQTRCLENBQUM7WUFDdkUsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNkLElBQUksQ0FBQywwQkFBMEIsR0FBRyxNQUFNLENBQUMsMEJBQTBCO1lBQ2pFLENBQUMsQ0FBQyxJQUFJLDBC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QUFLO1lBQ2pCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7U0FDaEMsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGNBQWM7SUFDWixhQUFhO0lBQ2IsT0FBK0I7UUFFL0IsT0FBTztZQUNMLEtBQUssRUFDSCwwQkFBMEIsQ0FBQyxRQUFRLENBQ2pDLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQ2pFO1lBQ0gsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtTQUNoQyxDQUFDO0lBQ0osQ0FBQzs7QUExSk0sNkJBQUUsR0FBRyxnREFBZ0QsQ0FBQztBQTRKL0QsV0FBYywwQkFBMEI7SUFrQnRDLElBQVksUUFFWDtJQUZELFdBQVksUUFBUTtRQUNsQixtRUFBc0IsQ0FBQTtJQUN4QixDQUFDLEVBRlcsUUFBUSxHQUFSLG1DQUFRLEtBQVIsbUNBQVEsUUFFbkI7QUFDSCxDQUFDLEVBckJhLDBCQUEwQixLQUExQiwwQkFBMEIsUUFxQnZDIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGUgKi9cbi8qIGVzbGludC1kaXNhYmxlICovXG4vLyBAdHMtbm9jaGVja1xuLy9cbi8vIFRISVMgSVMgQSBHRU5FUkFURUQgRklMRVxuLy8gRE8gTk9UIE1PRElGWSBJVCEgWU9VUiBDSEFOR0VTIFdJTEwgQkUgTE9TVFxuaW1wb3J0IHtcbiAgR3JwY01lc3NhZ2UsXG4gIFJlY3Vyc2l2ZVBhcnRpYWwsXG4gIFRvUHJvdG9idWZKU09OT3B0aW9uc1xufSBmcm9tICdAbmd4LWdycGMvY29tbW9uJztcbmltcG9ydCB7IEJpbmFyeVJlYWRlciwgQmluYXJ5V3JpdGVyLCBCeXRlU291cmNlIH0gZnJvbSAnZ29vZ2xlLXByb3RvYnVmJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMDAgZnJvbSAnLi4vLi4vLi4vcHViL3YxL21vZGVscy9jYXRlZ29yaWVzLnBiJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMDEgZnJvbSAnLi4vLi4vLi4vcHViL3YxL21vZGVscy91aWQucGInO1xuaW1wb3J0ICogYXMgcHJvdG9QdWJWMU1vZGVsczAwMiBmcm9tICcuLi8uLi8uLi9wdWIvdjEvbW9kZWxzL2F2YXRhci5wYic7XG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIHByb3RvLnB1Yi52MS5tb2RlbHMuUGVyc2lzdGVudEV2ZW50XG4gKi9cbmV4cG9ydCBjbGFzcyBQZXJzaXN0ZW50RXZlbnQgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdwcm90by5wdWIudjEubW9kZWxzLlBlcnNpc3RlbnRFdmVudCc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFBlcnNpc3RlbnRFdmVudCgpO1xuICAgIFBlcnNpc3RlbnRFdmVudC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IFBlcnNpc3RlbnRFdmVudCkge31cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBQZXJzaXN0ZW50RXZlbnQsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLm11Y1NwZWNpZmljUGVyc2lzdGVudEV2ZW50ID0gbmV3IE11Y1NwZWNpZmljUGVyc2lzdGVudEV2ZW50KCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5tdWNTcGVjaWZpY1BlcnNpc3RlbnRFdmVudCxcbiAgICAgICAgICAgIE11Y1NwZWNpZmljUGVyc2lzdGVudEV2ZW50LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UubWVzc2FnZU1hbmlwdWxhdGlvblBlcnNpc3RlbnRFdmVudCA9IG5ldyBNZXNzYWdlTWFuaXB1bGF0aW9uUGVyc2lzdGVudEV2ZW50KCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5tZXNzYWdlTWFuaXB1bGF0aW9uUGVyc2lzdGVudEV2ZW50LFxuICAgICAgICAgICAgTWVzc2FnZU1hbmlwdWxhdGlvblBlcnNpc3RlbnRFdmVudC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgX2luc3RhbmNlLmFkbWluU3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQgPSBuZXcgQWRtaW5TcGVjaWZpY1BlcnNpc3RlbnRFdmVudCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuYWRtaW5TcGVjaWZpY1BlcnNpc3RlbnRFdmVudCxcbiAgICAgICAgICAgIEFkbWluU3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIF9pbnN0YW5jZS5ib3RTcGVjaWZpY1BlcnNpc3RlbnRFdmVudCA9IG5ldyBCb3RTcGVjaWZpY1BlcnNpc3RlbnRFdmVudCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuYm90U3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQsXG4gICAgICAgICAgICBCb3RTcGVjaWZpY1BlcnNpc3RlbnRFdmVudC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgUGVyc2lzdGVudEV2ZW50LnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogUGVyc2lzdGVudEV2ZW50LFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLm11Y1NwZWNpZmljUGVyc2lzdGVudEV2ZW50KSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMSxcbiAgICAgICAgX2luc3RhbmNlLm11Y1NwZWNpZmljUGVyc2lzdGVudEV2ZW50IGFzIGFueSxcbiAgICAgICAgTXVjU3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UubWVzc2FnZU1hbmlwdWxhdGlvblBlcnNpc3RlbnRFdmVudCkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDIsXG4gICAgICAgIF9pbnN0YW5jZS5tZXNzYWdlTWFuaXB1bGF0aW9uUGVyc2lzdGVudEV2ZW50IGFzIGFueSxcbiAgICAgICAgTWVzc2FnZU1hbmlwdWxhdGlvblBlcnNpc3RlbnRFdmVudC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5hZG1pblNwZWNpZmljUGVyc2lzdGVudEV2ZW50KSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMyxcbiAgICAgICAgX2luc3RhbmNlLmFkbWluU3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQgYXMgYW55LFxuICAgICAgICBBZG1pblNwZWNpZmljUGVyc2lzdGVudEV2ZW50LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmJvdFNwZWNpZmljUGVyc2lzdGVudEV2ZW50KSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgNCxcbiAgICAgICAgX2luc3RhbmNlLmJvdFNwZWNpZmljUGVyc2lzdGVudEV2ZW50IGFzIGFueSxcbiAgICAgICAgQm90U3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfbXVjU3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQ/OiBNdWNTcGVjaWZpY1BlcnNpc3RlbnRFdmVudDtcbiAgcHJpdmF0ZSBfbWVzc2FnZU1hbmlwdWxhdGlvblBlcnNpc3RlbnRFdmVudD86IE1lc3NhZ2VNYW5pcHVsYXRpb25QZXJzaXN0ZW50RXZlbnQ7XG4gIHByaXZhdGUgX2FkbWluU3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQ/OiBBZG1pblNwZWNpZmljUGVyc2lzdGVudEV2ZW50O1xuICBwcml2YXRlIF9ib3RTcGVjaWZpY1BlcnNpc3RlbnRFdmVudD86IEJvdFNwZWNpZmljUGVyc2lzdGVudEV2ZW50O1xuXG4gIHByaXZhdGUgX3R5cGU6IFBlcnNpc3RlbnRFdmVudC5UeXBlQ2FzZSA9IFBlcnNpc3RlbnRFdmVudC5UeXBlQ2FzZS5ub25lO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgUGVyc2lzdGVudEV2ZW50IHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFBlcnNpc3RlbnRFdmVudC5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5tdWNTcGVjaWZpY1BlcnNpc3RlbnRFdmVudCA9IF92YWx1ZS5tdWNTcGVjaWZpY1BlcnNpc3RlbnRFdmVudFxuICAgICAgPyBuZXcgTXVjU3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQoX3ZhbHVlLm11Y1NwZWNpZmljUGVyc2lzdGVudEV2ZW50KVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5tZXNzYWdlTWFuaXB1bGF0aW9uUGVyc2lzdGVudEV2ZW50ID0gX3ZhbHVlLm1lc3NhZ2VNYW5pcHVsYXRpb25QZXJzaXN0ZW50RXZlbnRcbiAgICAgID8gbmV3IE1lc3NhZ2VNYW5pcHVsYXRpb25QZXJzaXN0ZW50RXZlbnQoXG4gICAgICAgICAgX3ZhbHVlLm1lc3NhZ2VNYW5pcHVsYXRpb25QZXJzaXN0ZW50RXZlbnRcbiAgICAgICAgKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5hZG1pblNwZWNpZmljUGVyc2lzdGVudEV2ZW50ID0gX3ZhbHVlLmFkbWluU3BlY2lmaWNQZXJzaXN0ZW50RXZlbnRcbiAgICAgID8gbmV3IEFkbWluU3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQoX3ZhbHVlLmFkbWluU3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmJvdFNwZWNpZmljUGVyc2lzdGVudEV2ZW50ID0gX3ZhbHVlLmJvdFNwZWNpZmljUGVyc2lzdGVudEV2ZW50XG4gICAgICA/IG5ldyBCb3RTcGVjaWZpY1BlcnNpc3RlbnRFdmVudChfdmFsdWUuYm90U3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICBQZXJzaXN0ZW50RXZlbnQucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBtdWNTcGVjaWZpY1BlcnNpc3RlbnRFdmVudCgpOiBNdWNTcGVjaWZpY1BlcnNpc3RlbnRFdmVudCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX211Y1NwZWNpZmljUGVyc2lzdGVudEV2ZW50O1xuICB9XG4gIHNldCBtdWNTcGVjaWZpY1BlcnNpc3RlbnRFdmVudChcbiAgICB2YWx1ZTogTXVjU3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQgfCB1bmRlZmluZWRcbiAgKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX21lc3NhZ2VNYW5pcHVsYXRpb25QZXJzaXN0ZW50RXZlbnQgPSB0aGlzLl9hZG1pblNwZWNpZmljUGVyc2lzdGVudEV2ZW50ID0gdGhpcy5fYm90U3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gUGVyc2lzdGVudEV2ZW50LlR5cGVDYXNlLm11Y1NwZWNpZmljUGVyc2lzdGVudEV2ZW50O1xuICAgIH1cbiAgICB0aGlzLl9tdWNTcGVjaWZpY1BlcnNpc3RlbnRFdmVudCA9IHZhbHVlO1xuICB9XG4gIGdldCBtZXNzYWdlTWFuaXB1bGF0aW9uUGVyc2lzdGVudEV2ZW50KCk6XG4gICAgfCBNZXNzYWdlTWFuaXB1bGF0aW9uUGVyc2lzdGVudEV2ZW50XG4gICAgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9tZXNzYWdlTWFuaXB1bGF0aW9uUGVyc2lzdGVudEV2ZW50O1xuICB9XG4gIHNldCBtZXNzYWdlTWFuaXB1bGF0aW9uUGVyc2lzdGVudEV2ZW50KFxuICAgIHZhbHVlOiBNZXNzYWdlTWFuaXB1bGF0aW9uUGVyc2lzdGVudEV2ZW50IHwgdW5kZWZpbmVkXG4gICkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9tdWNTcGVjaWZpY1BlcnNpc3RlbnRFdmVudCA9IHRoaXMuX2FkbWluU3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQgPSB0aGlzLl9ib3RTcGVjaWZpY1BlcnNpc3RlbnRFdmVudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBQZXJzaXN0ZW50RXZlbnQuVHlwZUNhc2UubWVzc2FnZU1hbmlwdWxhdGlvblBlcnNpc3RlbnRFdmVudDtcbiAgICB9XG4gICAgdGhpcy5fbWVzc2FnZU1hbmlwdWxhdGlvblBlcnNpc3RlbnRFdmVudCA9IHZhbHVlO1xuICB9XG4gIGdldCBhZG1pblNwZWNpZmljUGVyc2lzdGVudEV2ZW50KCk6IEFkbWluU3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9hZG1pblNwZWNpZmljUGVyc2lzdGVudEV2ZW50O1xuICB9XG4gIHNldCBhZG1pblNwZWNpZmljUGVyc2lzdGVudEV2ZW50KFxuICAgIHZhbHVlOiBBZG1pblNwZWNpZmljUGVyc2lzdGVudEV2ZW50IHwgdW5kZWZpbmVkXG4gICkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9tdWNTcGVjaWZpY1BlcnNpc3RlbnRFdmVudCA9IHRoaXMuX21lc3NhZ2VNYW5pcHVsYXRpb25QZXJzaXN0ZW50RXZlbnQgPSB0aGlzLl9ib3RTcGVjaWZpY1BlcnNpc3RlbnRFdmVudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBQZXJzaXN0ZW50RXZlbnQuVHlwZUNhc2UuYWRtaW5TcGVjaWZpY1BlcnNpc3RlbnRFdmVudDtcbiAgICB9XG4gICAgdGhpcy5fYWRtaW5TcGVjaWZpY1BlcnNpc3RlbnRFdmVudCA9IHZhbHVlO1xuICB9XG4gIGdldCBib3RTcGVjaWZpY1BlcnNpc3RlbnRFdmVudCgpOiBCb3RTcGVjaWZpY1BlcnNpc3RlbnRFdmVudCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2JvdFNwZWNpZmljUGVyc2lzdGVudEV2ZW50O1xuICB9XG4gIHNldCBib3RTcGVjaWZpY1BlcnNpc3RlbnRFdmVudChcbiAgICB2YWx1ZTogQm90U3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQgfCB1bmRlZmluZWRcbiAgKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX211Y1NwZWNpZmljUGVyc2lzdGVudEV2ZW50ID0gdGhpcy5fbWVzc2FnZU1hbmlwdWxhdGlvblBlcnNpc3RlbnRFdmVudCA9IHRoaXMuX2FkbWluU3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gUGVyc2lzdGVudEV2ZW50LlR5cGVDYXNlLmJvdFNwZWNpZmljUGVyc2lzdGVudEV2ZW50O1xuICAgIH1cbiAgICB0aGlzLl9ib3RTcGVjaWZpY1BlcnNpc3RlbnRFdmVudCA9IHZhbHVlO1xuICB9XG4gIGdldCB0eXBlKCkge1xuICAgIHJldHVybiB0aGlzLl90eXBlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFBlcnNpc3RlbnRFdmVudC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBQZXJzaXN0ZW50RXZlbnQuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBtdWNTcGVjaWZpY1BlcnNpc3RlbnRFdmVudDogdGhpcy5tdWNTcGVjaWZpY1BlcnNpc3RlbnRFdmVudFxuICAgICAgICA/IHRoaXMubXVjU3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQudG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIG1lc3NhZ2VNYW5pcHVsYXRpb25QZXJzaXN0ZW50RXZlbnQ6IHRoaXNcbiAgICAgICAgLm1lc3NhZ2VNYW5pcHVsYXRpb25QZXJzaXN0ZW50RXZlbnRcbiAgICAgICAgPyB0aGlzLm1lc3NhZ2VNYW5pcHVsYXRpb25QZXJzaXN0ZW50RXZlbnQudG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIGFkbWluU3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQ6IHRoaXMuYWRtaW5TcGVjaWZpY1BlcnNpc3RlbnRFdmVudFxuICAgICAgICA/IHRoaXMuYWRtaW5TcGVjaWZpY1BlcnNpc3RlbnRFdmVudC50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgYm90U3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQ6IHRoaXMuYm90U3BlY2lmaWNQZXJzaXN0ZW50RXZlbnRcbiAgICAgICAgPyB0aGlzLmJvdFNwZWNpZmljUGVyc2lzdGVudEV2ZW50LnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWRcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBQZXJzaXN0ZW50RXZlbnQuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBtdWNTcGVjaWZpY1BlcnNpc3RlbnRFdmVudDogdGhpcy5tdWNTcGVjaWZpY1BlcnNpc3RlbnRFdmVudFxuICAgICAgICA/IHRoaXMubXVjU3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQudG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsLFxuICAgICAgbWVzc2FnZU1hbmlwdWxhdGlvblBlcnNpc3RlbnRFdmVudDogdGhpc1xuICAgICAgICAubWVzc2FnZU1hbmlwdWxhdGlvblBlcnNpc3RlbnRFdmVudFxuICAgICAgICA/IHRoaXMubWVzc2FnZU1hbmlwdWxhdGlvblBlcnNpc3RlbnRFdmVudC50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICBhZG1pblNwZWNpZmljUGVyc2lzdGVudEV2ZW50OiB0aGlzLmFkbWluU3BlY2lmaWNQZXJzaXN0ZW50RXZlbnRcbiAgICAgICAgPyB0aGlzLmFkbWluU3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQudG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsLFxuICAgICAgYm90U3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQ6IHRoaXMuYm90U3BlY2lmaWNQZXJzaXN0ZW50RXZlbnRcbiAgICAgICAgPyB0aGlzLmJvdFNwZWNpZmljUGVyc2lzdGVudEV2ZW50LnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbFxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgUGVyc2lzdGVudEV2ZW50IHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBQZXJzaXN0ZW50RXZlbnRcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIG11Y1NwZWNpZmljUGVyc2lzdGVudEV2ZW50PzogTXVjU3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQuQXNPYmplY3Q7XG4gICAgbWVzc2FnZU1hbmlwdWxhdGlvblBlcnNpc3RlbnRFdmVudD86IE1lc3NhZ2VNYW5pcHVsYXRpb25QZXJzaXN0ZW50RXZlbnQuQXNPYmplY3Q7XG4gICAgYWRtaW5TcGVjaWZpY1BlcnNpc3RlbnRFdmVudD86IEFkbWluU3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQuQXNPYmplY3Q7XG4gICAgYm90U3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQ/OiBCb3RTcGVjaWZpY1BlcnNpc3RlbnRFdmVudC5Bc09iamVjdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBQZXJzaXN0ZW50RXZlbnRcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIG11Y1NwZWNpZmljUGVyc2lzdGVudEV2ZW50PzogTXVjU3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIG1lc3NhZ2VNYW5pcHVsYXRpb25QZXJzaXN0ZW50RXZlbnQ/OiBNZXNzYWdlTWFuaXB1bGF0aW9uUGVyc2lzdGVudEV2ZW50LkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBhZG1pblNwZWNpZmljUGVyc2lzdGVudEV2ZW50PzogQWRtaW5TcGVjaWZpY1BlcnNpc3RlbnRFdmVudC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgYm90U3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQ/OiBCb3RTcGVjaWZpY1BlcnNpc3RlbnRFdmVudC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gIH1cbiAgZXhwb3J0IGVudW0gVHlwZUNhc2Uge1xuICAgIG5vbmUgPSAwLFxuICAgIG11Y1NwZWNpZmljUGVyc2lzdGVudEV2ZW50ID0gMSxcbiAgICBtZXNzYWdlTWFuaXB1bGF0aW9uUGVyc2lzdGVudEV2ZW50ID0gMixcbiAgICBhZG1pblNwZWNpZmljUGVyc2lzdGVudEV2ZW50ID0gMyxcbiAgICBib3RTcGVjaWZpY1BlcnNpc3RlbnRFdmVudCA9IDRcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIHByb3RvLnB1Yi52MS5tb2RlbHMuTXVjU3BlY2lmaWNQZXJzaXN0ZW50RXZlbnRcbiAqL1xuZXhwb3J0IGNsYXNzIE11Y1NwZWNpZmljUGVyc2lzdGVudEV2ZW50IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAncHJvdG8ucHViLnYxLm1vZGVscy5NdWNTcGVjaWZpY1BlcnNpc3RlbnRFdmVudCc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IE11Y1NwZWNpZmljUGVyc2lzdGVudEV2ZW50KCk7XG4gICAgTXVjU3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBNdWNTcGVjaWZpY1BlcnNpc3RlbnRFdmVudCkge1xuICAgIF9pbnN0YW5jZS5pc3N1ZXIgPSBfaW5zdGFuY2UuaXNzdWVyIHx8IHVuZGVmaW5lZDtcbiAgICBfaW5zdGFuY2UuaXNzdWUgPSBfaW5zdGFuY2UuaXNzdWUgfHwgMDtcbiAgICBfaW5zdGFuY2UuYXNzaWduZWUgPSBfaW5zdGFuY2UuYXNzaWduZWUgfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5tZXNzYWdlSWQgPSBfaW5zdGFuY2UubWVzc2FnZUlkIHx8ICcwJztcbiAgICBfaW5zdGFuY2UuYXZhdGFyID0gX2luc3RhbmNlLmF2YXRhciB8fCB1bmRlZmluZWQ7XG4gICAgX2luc3RhbmNlLm5hbWUgPSBfaW5zdGFuY2UubmFtZSB8fCAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IE11Y1NwZWNpZmljUGVyc2lzdGVudEV2ZW50LFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5pc3N1ZXIgPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmlzc3VlcixcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDEuVWlkLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UuaXNzdWUgPSBfcmVhZGVyLnJlYWRFbnVtKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBfaW5zdGFuY2UuYXNzaWduZWUgPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmFzc2lnbmVlLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIF9pbnN0YW5jZS5tZXNzYWdlSWQgPSBfcmVhZGVyLnJlYWRJbnQ2NFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgX2luc3RhbmNlLmF2YXRhciA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAyLkF2YXRhcigpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuYXZhdGFyLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMi5BdmF0YXIuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIF9pbnN0YW5jZS5uYW1lID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBNdWNTcGVjaWZpY1BlcnNpc3RlbnRFdmVudC5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IE11Y1NwZWNpZmljUGVyc2lzdGVudEV2ZW50LFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLmlzc3Vlcikge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDEsXG4gICAgICAgIF9pbnN0YW5jZS5pc3N1ZXIgYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5pc3N1ZSkge1xuICAgICAgX3dyaXRlci53cml0ZUVudW0oMiwgX2luc3RhbmNlLmlzc3VlKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5hc3NpZ25lZSkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDMsXG4gICAgICAgIF9pbnN0YW5jZS5hc3NpZ25lZSBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDEuVWlkLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLm1lc3NhZ2VJZCkge1xuICAgICAgX3dyaXRlci53cml0ZUludDY0U3RyaW5nKDQsIF9pbnN0YW5jZS5tZXNzYWdlSWQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmF2YXRhcikge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDUsXG4gICAgICAgIF9pbnN0YW5jZS5hdmF0YXIgYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAyLkF2YXRhci5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5uYW1lKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDYsIF9pbnN0YW5jZS5uYW1lKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9pc3N1ZXI/OiBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZDtcbiAgcHJpdmF0ZSBfaXNzdWU/OiBNdWNTcGVjaWZpY1BlcnNpc3RlbnRFdmVudC5Jc3N1ZTtcbiAgcHJpdmF0ZSBfYXNzaWduZWU/OiBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZDtcbiAgcHJpdmF0ZSBfbWVzc2FnZUlkPzogc3RyaW5nO1xuICBwcml2YXRlIF9hdmF0YXI/OiBwcm90b1B1YlYxTW9kZWxzMDAyLkF2YXRhcjtcbiAgcHJpdmF0ZSBfbmFtZT86IHN0cmluZztcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIE11Y1NwZWNpZmljUGVyc2lzdGVudEV2ZW50IHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPE11Y1NwZWNpZmljUGVyc2lzdGVudEV2ZW50LkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmlzc3VlciA9IF92YWx1ZS5pc3N1ZXJcbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMDEuVWlkKF92YWx1ZS5pc3N1ZXIpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmlzc3VlID0gX3ZhbHVlLmlzc3VlO1xuICAgIHRoaXMuYXNzaWduZWUgPSBfdmFsdWUuYXNzaWduZWVcbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMDEuVWlkKF92YWx1ZS5hc3NpZ25lZSlcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMubWVzc2FnZUlkID0gX3ZhbHVlLm1lc3NhZ2VJZDtcbiAgICB0aGlzLmF2YXRhciA9IF92YWx1ZS5hdmF0YXJcbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMDIuQXZhdGFyKF92YWx1ZS5hdmF0YXIpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLm5hbWUgPSBfdmFsdWUubmFtZTtcbiAgICBNdWNTcGVjaWZpY1BlcnNpc3RlbnRFdmVudC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGlzc3VlcigpOiBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2lzc3VlcjtcbiAgfVxuICBzZXQgaXNzdWVyKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZCB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2lzc3VlciA9IHZhbHVlO1xuICB9XG4gIGdldCBpc3N1ZSgpOiBNdWNTcGVjaWZpY1BlcnNpc3RlbnRFdmVudC5Jc3N1ZSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2lzc3VlO1xuICB9XG4gIHNldCBpc3N1ZSh2YWx1ZTogTXVjU3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQuSXNzdWUgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9pc3N1ZSA9IHZhbHVlO1xuICB9XG4gIGdldCBhc3NpZ25lZSgpOiBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2Fzc2lnbmVlO1xuICB9XG4gIHNldCBhc3NpZ25lZSh2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9hc3NpZ25lZSA9IHZhbHVlO1xuICB9XG4gIGdldCBtZXNzYWdlSWQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbWVzc2FnZUlkO1xuICB9XG4gIHNldCBtZXNzYWdlSWQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX21lc3NhZ2VJZCA9IHZhbHVlO1xuICB9XG4gIGdldCBhdmF0YXIoKTogcHJvdG9QdWJWMU1vZGVsczAwMi5BdmF0YXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9hdmF0YXI7XG4gIH1cbiAgc2V0IGF2YXRhcih2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAwMi5BdmF0YXIgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9hdmF0YXIgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbmFtZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG4gIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgTXVjU3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogTXVjU3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBpc3N1ZXI6IHRoaXMuaXNzdWVyID8gdGhpcy5pc3N1ZXIudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGlzc3VlOiB0aGlzLmlzc3VlLFxuICAgICAgYXNzaWduZWU6IHRoaXMuYXNzaWduZWUgPyB0aGlzLmFzc2lnbmVlLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBtZXNzYWdlSWQ6IHRoaXMubWVzc2FnZUlkLFxuICAgICAgYXZhdGFyOiB0aGlzLmF2YXRhciA/IHRoaXMuYXZhdGFyLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBuYW1lOiB0aGlzLm5hbWVcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBNdWNTcGVjaWZpY1BlcnNpc3RlbnRFdmVudC5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzc3VlcjogdGhpcy5pc3N1ZXIgPyB0aGlzLmlzc3Vlci50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICBpc3N1ZTpcbiAgICAgICAgTXVjU3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQuSXNzdWVbXG4gICAgICAgICAgdGhpcy5pc3N1ZSA9PT0gbnVsbCB8fCB0aGlzLmlzc3VlID09PSB1bmRlZmluZWQgPyAwIDogdGhpcy5pc3N1ZVxuICAgICAgICBdLFxuICAgICAgYXNzaWduZWU6IHRoaXMuYXNzaWduZWUgPyB0aGlzLmFzc2lnbmVlLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIG1lc3NhZ2VJZDogdGhpcy5tZXNzYWdlSWQsXG4gICAgICBhdmF0YXI6IHRoaXMuYXZhdGFyID8gdGhpcy5hdmF0YXIudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgbmFtZTogdGhpcy5uYW1lXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBNdWNTcGVjaWZpY1BlcnNpc3RlbnRFdmVudCB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgTXVjU3BlY2lmaWNQZXJzaXN0ZW50RXZlbnRcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIGlzc3Vlcj86IHByb3RvUHViVjFNb2RlbHMwMDEuVWlkLkFzT2JqZWN0O1xuICAgIGlzc3VlPzogTXVjU3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQuSXNzdWU7XG4gICAgYXNzaWduZWU/OiBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZC5Bc09iamVjdDtcbiAgICBtZXNzYWdlSWQ/OiBzdHJpbmc7XG4gICAgYXZhdGFyPzogcHJvdG9QdWJWMU1vZGVsczAwMi5BdmF0YXIuQXNPYmplY3Q7XG4gICAgbmFtZT86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBNdWNTcGVjaWZpY1BlcnNpc3RlbnRFdmVudFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgaXNzdWVyPzogcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIGlzc3VlPzogc3RyaW5nO1xuICAgIGFzc2lnbmVlPzogcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIG1lc3NhZ2VJZD86IHN0cmluZztcbiAgICBhdmF0YXI/OiBwcm90b1B1YlYxTW9kZWxzMDAyLkF2YXRhci5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgbmFtZT86IHN0cmluZztcbiAgfVxuICBleHBvcnQgZW51bSBJc3N1ZSB7XG4gICAgS0lDS19VU0VSID0gMCxcbiAgICBBRERfVVNFUiA9IDEsXG4gICAgUElOX01FU1NBR0UgPSAyLFxuICAgIE5BTUVfQ0hBTkdFRCA9IDMsXG4gICAgQVZBVEFSX0NIQU5HRUQgPSA0LFxuICAgIE1VQ19DUkVBVEVEID0gNSxcbiAgICBMRUFWRV9VU0VSID0gNixcbiAgICBKT0lORURfVVNFUiA9IDcsXG4gICAgREVMRVRFRCA9IDhcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIHByb3RvLnB1Yi52MS5tb2RlbHMuTWVzc2FnZU1hbmlwdWxhdGlvblBlcnNpc3RlbnRFdmVudFxuICovXG5leHBvcnQgY2xhc3MgTWVzc2FnZU1hbmlwdWxhdGlvblBlcnNpc3RlbnRFdmVudCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ3Byb3RvLnB1Yi52MS5tb2RlbHMuTWVzc2FnZU1hbmlwdWxhdGlvblBlcnNpc3RlbnRFdmVudCc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IE1lc3NhZ2VNYW5pcHVsYXRpb25QZXJzaXN0ZW50RXZlbnQoKTtcbiAgICBNZXNzYWdlTWFuaXB1bGF0aW9uUGVyc2lzdGVudEV2ZW50LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogTWVzc2FnZU1hbmlwdWxhdGlvblBlcnNpc3RlbnRFdmVudCkge1xuICAgIF9pbnN0YW5jZS5hY3Rpb24gPSBfaW5zdGFuY2UuYWN0aW9uIHx8IDA7XG4gICAgX2luc3RhbmNlLm1lc3NhZ2VJZCA9IF9pbnN0YW5jZS5tZXNzYWdlSWQgfHwgJzAnO1xuICAgIF9pbnN0YW5jZS5tYW5pcHVsYXRpb25UaW1lID0gX2luc3RhbmNlLm1hbmlwdWxhdGlvblRpbWUgfHwgJzAnO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogTWVzc2FnZU1hbmlwdWxhdGlvblBlcnNpc3RlbnRFdmVudCxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UuYWN0aW9uID0gX3JlYWRlci5yZWFkRW51bSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLm1lc3NhZ2VJZCA9IF9yZWFkZXIucmVhZEludDY0U3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBfaW5zdGFuY2UubWFuaXB1bGF0aW9uVGltZSA9IF9yZWFkZXIucmVhZEludDY0U3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBNZXNzYWdlTWFuaXB1bGF0aW9uUGVyc2lzdGVudEV2ZW50LnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogTWVzc2FnZU1hbmlwdWxhdGlvblBlcnNpc3RlbnRFdmVudCxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5hY3Rpb24pIHtcbiAgICAgIF93cml0ZXIud3JpdGVFbnVtKDEsIF9pbnN0YW5jZS5hY3Rpb24pO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLm1lc3NhZ2VJZCkge1xuICAgICAgX3dyaXRlci53cml0ZUludDY0U3RyaW5nKDIsIF9pbnN0YW5jZS5tZXNzYWdlSWQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLm1hbmlwdWxhdGlvblRpbWUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQ2NFN0cmluZygzLCBfaW5zdGFuY2UubWFuaXB1bGF0aW9uVGltZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfYWN0aW9uPzogTWVzc2FnZU1hbmlwdWxhdGlvblBlcnNpc3RlbnRFdmVudC5BY3Rpb247XG4gIHByaXZhdGUgX21lc3NhZ2VJZD86IHN0cmluZztcbiAgcHJpdmF0ZSBfbWFuaXB1bGF0aW9uVGltZT86IHN0cmluZztcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIE1lc3NhZ2VNYW5pcHVsYXRpb25QZXJzaXN0ZW50RXZlbnQgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8TWVzc2FnZU1hbmlwdWxhdGlvblBlcnNpc3RlbnRFdmVudC5Bc09iamVjdD5cbiAgKSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMuYWN0aW9uID0gX3ZhbHVlLmFjdGlvbjtcbiAgICB0aGlzLm1lc3NhZ2VJZCA9IF92YWx1ZS5tZXNzYWdlSWQ7XG4gICAgdGhpcy5tYW5pcHVsYXRpb25UaW1lID0gX3ZhbHVlLm1hbmlwdWxhdGlvblRpbWU7XG4gICAgTWVzc2FnZU1hbmlwdWxhdGlvblBlcnNpc3RlbnRFdmVudC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGFjdGlvbigpOiBNZXNzYWdlTWFuaXB1bGF0aW9uUGVyc2lzdGVudEV2ZW50LkFjdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGlvbjtcbiAgfVxuICBzZXQgYWN0aW9uKHZhbHVlOiBNZXNzYWdlTWFuaXB1bGF0aW9uUGVyc2lzdGVudEV2ZW50LkFjdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2FjdGlvbiA9IHZhbHVlO1xuICB9XG4gIGdldCBtZXNzYWdlSWQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbWVzc2FnZUlkO1xuICB9XG4gIHNldCBtZXNzYWdlSWQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX21lc3NhZ2VJZCA9IHZhbHVlO1xuICB9XG4gIGdldCBtYW5pcHVsYXRpb25UaW1lKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX21hbmlwdWxhdGlvblRpbWU7XG4gIH1cbiAgc2V0IG1hbmlwdWxhdGlvblRpbWUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX21hbmlwdWxhdGlvblRpbWUgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBNZXNzYWdlTWFuaXB1bGF0aW9uUGVyc2lzdGVudEV2ZW50LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IE1lc3NhZ2VNYW5pcHVsYXRpb25QZXJzaXN0ZW50RXZlbnQuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBhY3Rpb246IHRoaXMuYWN0aW9uLFxuICAgICAgbWVzc2FnZUlkOiB0aGlzLm1lc3NhZ2VJZCxcbiAgICAgIG1hbmlwdWxhdGlvblRpbWU6IHRoaXMubWFuaXB1bGF0aW9uVGltZVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IE1lc3NhZ2VNYW5pcHVsYXRpb25QZXJzaXN0ZW50RXZlbnQuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBhY3Rpb246XG4gICAgICAgIE1lc3NhZ2VNYW5pcHVsYXRpb25QZXJzaXN0ZW50RXZlbnQuQWN0aW9uW1xuICAgICAgICAgIHRoaXMuYWN0aW9uID09PSBudWxsIHx8IHRoaXMuYWN0aW9uID09PSB1bmRlZmluZWQgPyAwIDogdGhpcy5hY3Rpb25cbiAgICAgICAgXSxcbiAgICAgIG1lc3NhZ2VJZDogdGhpcy5tZXNzYWdlSWQsXG4gICAgICBtYW5pcHVsYXRpb25UaW1lOiB0aGlzLm1hbmlwdWxhdGlvblRpbWVcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIE1lc3NhZ2VNYW5pcHVsYXRpb25QZXJzaXN0ZW50RXZlbnQge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIE1lc3NhZ2VNYW5pcHVsYXRpb25QZXJzaXN0ZW50RXZlbnRcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIGFjdGlvbj86IE1lc3NhZ2VNYW5pcHVsYXRpb25QZXJzaXN0ZW50RXZlbnQuQWN0aW9uO1xuICAgIG1lc3NhZ2VJZD86IHN0cmluZztcbiAgICBtYW5pcHVsYXRpb25UaW1lPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIE1lc3NhZ2VNYW5pcHVsYXRpb25QZXJzaXN0ZW50RXZlbnRcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIGFjdGlvbj86IHN0cmluZztcbiAgICBtZXNzYWdlSWQ/OiBzdHJpbmc7XG4gICAgbWFuaXB1bGF0aW9uVGltZT86IHN0cmluZztcbiAgfVxuICBleHBvcnQgZW51bSBBY3Rpb24ge1xuICAgIEVESVRFRCA9IDAsXG4gICAgREVMRVRFRCA9IDFcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIHByb3RvLnB1Yi52MS5tb2RlbHMuQWRtaW5TcGVjaWZpY1BlcnNpc3RlbnRFdmVudFxuICovXG5leHBvcnQgY2xhc3MgQWRtaW5TcGVjaWZpY1BlcnNpc3RlbnRFdmVudCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ3Byb3RvLnB1Yi52MS5tb2RlbHMuQWRtaW5TcGVjaWZpY1BlcnNpc3RlbnRFdmVudCc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEFkbWluU3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQoKTtcbiAgICBBZG1pblNwZWNpZmljUGVyc2lzdGVudEV2ZW50LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogQWRtaW5TcGVjaWZpY1BlcnNpc3RlbnRFdmVudCkge1xuICAgIF9pbnN0YW5jZS5ldmVudCA9IF9pbnN0YW5jZS5ldmVudCB8fCAwO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogQWRtaW5TcGVjaWZpY1BlcnNpc3RlbnRFdmVudCxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UuZXZlbnQgPSBfcmVhZGVyLnJlYWRFbnVtKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBBZG1pblNwZWNpZmljUGVyc2lzdGVudEV2ZW50LnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogQWRtaW5TcGVjaWZpY1BlcnNpc3RlbnRFdmVudCxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5ldmVudCkge1xuICAgICAgX3dyaXRlci53cml0ZUVudW0oMSwgX2luc3RhbmNlLmV2ZW50KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9ldmVudD86IEFkbWluU3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQuRXZlbnQ7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBBZG1pblNwZWNpZmljUGVyc2lzdGVudEV2ZW50IHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEFkbWluU3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQuQXNPYmplY3Q+XG4gICkge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmV2ZW50ID0gX3ZhbHVlLmV2ZW50O1xuICAgIEFkbWluU3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBldmVudCgpOiBBZG1pblNwZWNpZmljUGVyc2lzdGVudEV2ZW50LkV2ZW50IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZXZlbnQ7XG4gIH1cbiAgc2V0IGV2ZW50KHZhbHVlOiBBZG1pblNwZWNpZmljUGVyc2lzdGVudEV2ZW50LkV2ZW50IHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZXZlbnQgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBBZG1pblNwZWNpZmljUGVyc2lzdGVudEV2ZW50LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IEFkbWluU3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBldmVudDogdGhpcy5ldmVudFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IEFkbWluU3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBldmVudDpcbiAgICAgICAgQWRtaW5TcGVjaWZpY1BlcnNpc3RlbnRFdmVudC5FdmVudFtcbiAgICAgICAgICB0aGlzLmV2ZW50ID09PSBudWxsIHx8IHRoaXMuZXZlbnQgPT09IHVuZGVmaW5lZCA/IDAgOiB0aGlzLmV2ZW50XG4gICAgICAgIF1cbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEFkbWluU3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIEFkbWluU3BlY2lmaWNQZXJzaXN0ZW50RXZlbnRcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIGV2ZW50PzogQWRtaW5TcGVjaWZpY1BlcnNpc3RlbnRFdmVudC5FdmVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBBZG1pblNwZWNpZmljUGVyc2lzdGVudEV2ZW50XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBldmVudD86IHN0cmluZztcbiAgfVxuICBleHBvcnQgZW51bSBFdmVudCB7XG4gICAgTkVXX0NPTlRBQ1RfQURERUQgPSAwXG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBwcm90by5wdWIudjEubW9kZWxzLkJvdFNwZWNpZmljUGVyc2lzdGVudEV2ZW50XG4gKi9cbmV4cG9ydCBjbGFzcyBCb3RTcGVjaWZpY1BlcnNpc3RlbnRFdmVudCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ3Byb3RvLnB1Yi52MS5tb2RlbHMuQm90U3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBCb3RTcGVjaWZpY1BlcnNpc3RlbnRFdmVudCgpO1xuICAgIEJvdFNwZWNpZmljUGVyc2lzdGVudEV2ZW50LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogQm90U3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQpIHtcbiAgICBfaW5zdGFuY2UuZXZlbnQgPSBfaW5zdGFuY2UuZXZlbnQgfHwgMDtcbiAgICBfaW5zdGFuY2UubWVzc2FnZUlkID0gX2luc3RhbmNlLm1lc3NhZ2VJZCB8fCAnMCc7XG4gICAgX2luc3RhbmNlLmVycm9yTWVzc2FnZSA9IF9pbnN0YW5jZS5lcnJvck1lc3NhZ2UgfHwgJyc7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBCb3RTcGVjaWZpY1BlcnNpc3RlbnRFdmVudCxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UuZXZlbnQgPSBfcmVhZGVyLnJlYWRFbnVtKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UubWVzc2FnZUlkID0gX3JlYWRlci5yZWFkSW50NjRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIF9pbnN0YW5jZS5lcnJvck1lc3NhZ2UgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEJvdFNwZWNpZmljUGVyc2lzdGVudEV2ZW50LnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogQm90U3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UuZXZlbnQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVFbnVtKDEsIF9pbnN0YW5jZS5ldmVudCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UubWVzc2FnZUlkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlSW50NjRTdHJpbmcoMiwgX2luc3RhbmNlLm1lc3NhZ2VJZCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZXJyb3JNZXNzYWdlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDMsIF9pbnN0YW5jZS5lcnJvck1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2V2ZW50PzogQm90U3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQuQm90RXZlbnQ7XG4gIHByaXZhdGUgX21lc3NhZ2VJZD86IHN0cmluZztcbiAgcHJpdmF0ZSBfZXJyb3JNZXNzYWdlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgQm90U3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8Qm90U3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMuZXZlbnQgPSBfdmFsdWUuZXZlbnQ7XG4gICAgdGhpcy5tZXNzYWdlSWQgPSBfdmFsdWUubWVzc2FnZUlkO1xuICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gX3ZhbHVlLmVycm9yTWVzc2FnZTtcbiAgICBCb3RTcGVjaWZpY1BlcnNpc3RlbnRFdmVudC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGV2ZW50KCk6IEJvdFNwZWNpZmljUGVyc2lzdGVudEV2ZW50LkJvdEV2ZW50IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZXZlbnQ7XG4gIH1cbiAgc2V0IGV2ZW50KHZhbHVlOiBCb3RTcGVjaWZpY1BlcnNpc3RlbnRFdmVudC5Cb3RFdmVudCB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2V2ZW50ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG1lc3NhZ2VJZCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9tZXNzYWdlSWQ7XG4gIH1cbiAgc2V0IG1lc3NhZ2VJZCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbWVzc2FnZUlkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGVycm9yTWVzc2FnZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9lcnJvck1lc3NhZ2U7XG4gIH1cbiAgc2V0IGVycm9yTWVzc2FnZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZXJyb3JNZXNzYWdlID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgQm90U3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogQm90U3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBldmVudDogdGhpcy5ldmVudCxcbiAgICAgIG1lc3NhZ2VJZDogdGhpcy5tZXNzYWdlSWQsXG4gICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuZXJyb3JNZXNzYWdlXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogQm90U3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBldmVudDpcbiAgICAgICAgQm90U3BlY2lmaWNQZXJzaXN0ZW50RXZlbnQuQm90RXZlbnRbXG4gICAgICAgICAgdGhpcy5ldmVudCA9PT0gbnVsbCB8fCB0aGlzLmV2ZW50ID09PSB1bmRlZmluZWQgPyAwIDogdGhpcy5ldmVudFxuICAgICAgICBdLFxuICAgICAgbWVzc2FnZUlkOiB0aGlzLm1lc3NhZ2VJZCxcbiAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5lcnJvck1lc3NhZ2VcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEJvdFNwZWNpZmljUGVyc2lzdGVudEV2ZW50IHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBCb3RTcGVjaWZpY1BlcnNpc3RlbnRFdmVudFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgZXZlbnQ/OiBCb3RTcGVjaWZpY1BlcnNpc3RlbnRFdmVudC5Cb3RFdmVudDtcbiAgICBtZXNzYWdlSWQ/OiBzdHJpbmc7XG4gICAgZXJyb3JNZXNzYWdlPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIEJvdFNwZWNpZmljUGVyc2lzdGVudEV2ZW50XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBldmVudD86IHN0cmluZztcbiAgICBtZXNzYWdlSWQ/OiBzdHJpbmc7XG4gICAgZXJyb3JNZXNzYWdlPzogc3RyaW5nO1xuICB9XG4gIGV4cG9ydCBlbnVtIEJvdEV2ZW50IHtcbiAgICBCT1RfTk9UX1JFU1BPTkRJTkcgPSAwXG4gIH1cbn1cbiJdfQ==