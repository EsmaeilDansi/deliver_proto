import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
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
export declare class Text implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): Text;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Text): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: Text, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: Text, _writer: BinaryWriter): void;
    private _text?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Text to deeply clone from
     */
    constructor(_value?: RecursivePartial<Text.AsObject>);
    get text(): string | undefined;
    set text(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Text.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): Text.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): Text.AsProtobufJSON;
}
export declare module Text {
    /**
     * Standard JavaScript object representation for Text
     */
    interface AsObject {
        text?: string;
    }
    /**
     * Protobuf JSON representation for Text
     */
    interface AsProtobufJSON {
        text?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.models.ShareUid
 */
export declare class ShareUid implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ShareUid;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ShareUid): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ShareUid, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ShareUid, _writer: BinaryWriter): void;
    private _uid?;
    private _phoneNumber?;
    private _name?;
    private _joinToken?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ShareUid to deeply clone from
     */
    constructor(_value?: RecursivePartial<ShareUid.AsObject>);
    get uid(): protoPubV1Models002.Uid | undefined;
    set uid(value: protoPubV1Models002.Uid | undefined);
    get phoneNumber(): string | undefined;
    set phoneNumber(value: string | undefined);
    get name(): string | undefined;
    set name(value: string | undefined);
    get joinToken(): string | undefined;
    set joinToken(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ShareUid.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ShareUid.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ShareUid.AsProtobufJSON;
}
export declare module ShareUid {
    /**
     * Standard JavaScript object representation for ShareUid
     */
    interface AsObject {
        uid?: protoPubV1Models002.Uid.AsObject;
        phoneNumber?: string;
        name?: string;
        joinToken?: string;
    }
    /**
     * Protobuf JSON representation for ShareUid
     */
    interface AsProtobufJSON {
        uid?: protoPubV1Models002.Uid.AsProtobufJSON | null;
        phoneNumber?: string;
        name?: string;
        joinToken?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.models.MessageDeliveryAck
 */
export declare class MessageDeliveryAck implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): MessageDeliveryAck;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: MessageDeliveryAck): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: MessageDeliveryAck, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: MessageDeliveryAck, _writer: BinaryWriter): void;
    private _packetId?;
    private _id?;
    private _time?;
    private _from?;
    private _to?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of MessageDeliveryAck to deeply clone from
     */
    constructor(_value?: RecursivePartial<MessageDeliveryAck.AsObject>);
    get packetId(): string | undefined;
    set packetId(value: string | undefined);
    get id(): string | undefined;
    set id(value: string | undefined);
    get time(): string | undefined;
    set time(value: string | undefined);
    get from(): protoPubV1Models002.Uid | undefined;
    set from(value: protoPubV1Models002.Uid | undefined);
    get to(): protoPubV1Models002.Uid | undefined;
    set to(value: protoPubV1Models002.Uid | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): MessageDeliveryAck.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): MessageDeliveryAck.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): MessageDeliveryAck.AsProtobufJSON;
}
export declare module MessageDeliveryAck {
    /**
     * Standard JavaScript object representation for MessageDeliveryAck
     */
    interface AsObject {
        packetId?: string;
        id?: string;
        time?: string;
        from?: protoPubV1Models002.Uid.AsObject;
        to?: protoPubV1Models002.Uid.AsObject;
    }
    /**
     * Protobuf JSON representation for MessageDeliveryAck
     */
    interface AsProtobufJSON {
        packetId?: string;
        id?: string;
        time?: string;
        from?: protoPubV1Models002.Uid.AsProtobufJSON | null;
        to?: protoPubV1Models002.Uid.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.models.MessageBrief
 */
export declare class MessageBrief implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): MessageBrief;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: MessageBrief): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: MessageBrief, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: MessageBrief, _writer: BinaryWriter): void;
    private _packetId?;
    private _id?;
    private _time?;
    private _from?;
    private _to?;
    private _messageType?;
    private _text?;
    private _thumbnailReference?;
    private _isLocalMessage?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of MessageBrief to deeply clone from
     */
    constructor(_value?: RecursivePartial<MessageBrief.AsObject>);
    get packetId(): string | undefined;
    set packetId(value: string | undefined);
    get id(): string | undefined;
    set id(value: string | undefined);
    get time(): string | undefined;
    set time(value: string | undefined);
    get from(): protoPubV1Models002.Uid | undefined;
    set from(value: protoPubV1Models002.Uid | undefined);
    get to(): protoPubV1Models002.Uid | undefined;
    set to(value: protoPubV1Models002.Uid | undefined);
    get messageType(): MessageBrief.MessageTypes | undefined;
    set messageType(value: MessageBrief.MessageTypes | undefined);
    get text(): string | undefined;
    set text(value: string | undefined);
    get thumbnailReference(): protoPubV1Models001.File | undefined;
    set thumbnailReference(value: protoPubV1Models001.File | undefined);
    get isLocalMessage(): boolean | undefined;
    set isLocalMessage(value: boolean | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): MessageBrief.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): MessageBrief.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): MessageBrief.AsProtobufJSON;
}
export declare module MessageBrief {
    /**
     * Standard JavaScript object representation for MessageBrief
     */
    interface AsObject {
        packetId?: string;
        id?: string;
        time?: string;
        from?: protoPubV1Models002.Uid.AsObject;
        to?: protoPubV1Models002.Uid.AsObject;
        messageType?: MessageBrief.MessageTypes;
        text?: string;
        thumbnailReference?: protoPubV1Models001.File.AsObject;
        isLocalMessage?: boolean;
    }
    /**
     * Protobuf JSON representation for MessageBrief
     */
    interface AsProtobufJSON {
        packetId?: string;
        id?: string;
        time?: string;
        from?: protoPubV1Models002.Uid.AsProtobufJSON | null;
        to?: protoPubV1Models002.Uid.AsProtobufJSON | null;
        messageType?: string;
        text?: string;
        thumbnailReference?: protoPubV1Models001.File.AsProtobufJSON | null;
        isLocalMessage?: boolean;
    }
    enum MessageTypes {
        NOT_SET = 0,
        TEXT = 1,
        FILE = 2,
        STICKER = 3,
        LOCATION = 4,
        LIVE_LOCATION = 5,
        POLL = 6,
        TRANSACTION = 7,
        FORM = 8,
        BUTTONS = 9,
        SHARE_UID = 10,
        FORM_RESULT = 11,
        CALL_END = 12,
        CALL_BUSY = 13,
        CALL_DECLINED = 14,
        TABLE = 15,
        PE_AS_NEW_CONTACT_ADDED = 16,
        PE_BS_BOT_NOT_RESPONDING = 17,
        PE_MS_KICK_USER = 18,
        PE_MS_ADD_USER = 19,
        PE_MS_PIN_MESSAGE = 20,
        PE_MS_NAME_CHANGED = 21,
        PE_MS_AVATAR_CHANGED = 22,
        PE_MS_MUC_CREATED = 23,
        PE_MS_LEAVE_USER = 24,
        PE_MS_JOINED_USER = 25,
        PE_MS_DELETED = 26,
        PDT_PHONE_NUMBER = 27,
        PDT_USERNAME = 28,
        PDT_EMAIL = 29,
        PDT_NAME = 30,
        PAYMENT_INFORMATION = 31,
        SEARCH_ABLE = 32
    }
}
/**
 * Message implementation for proto.pub.v1.models.Message
 */
export declare class Message implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): Message;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Message): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: Message, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: Message, _writer: BinaryWriter): void;
    private _packetId?;
    private _id?;
    private _time?;
    private _from?;
    private _to?;
    private _replyToId?;
    private _repliedMessageBrief?;
    private _forwardFrom?;
    private _generatedBy?;
    private _edited?;
    private _encrypted?;
    private _ttl?;
    private _thread?;
    private _shouldBeQuiet?;
    private _mucMinimumAccessLevel?;
    private _specialTarget?;
    private _messageMarkup?;
    private _isLocalMessage?;
    private _deletedUid?;
    private _text?;
    private _file?;
    private _sticker?;
    private _location?;
    private _liveLocation?;
    private _poll?;
    private _transaction?;
    private _form?;
    private _persistEvent?;
    private _buttons?;
    private _shareUid?;
    private _formResult?;
    private _sharePrivateDataRequest?;
    private _sharePrivateDataAcceptance?;
    private _callEvent?;
    private _callLog?;
    private _table?;
    private _paymentInformation?;
    private _type;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Message to deeply clone from
     */
    constructor(_value?: RecursivePartial<Message.AsObject>);
    get packetId(): string | undefined;
    set packetId(value: string | undefined);
    get id(): string | undefined;
    set id(value: string | undefined);
    get time(): string | undefined;
    set time(value: string | undefined);
    get from(): protoPubV1Models002.Uid | undefined;
    set from(value: protoPubV1Models002.Uid | undefined);
    get to(): protoPubV1Models002.Uid | undefined;
    set to(value: protoPubV1Models002.Uid | undefined);
    get replyToId(): string | undefined;
    set replyToId(value: string | undefined);
    get repliedMessageBrief(): MessageBrief | undefined;
    set repliedMessageBrief(value: MessageBrief | undefined);
    get forwardFrom(): protoPubV1Models002.Uid | undefined;
    set forwardFrom(value: protoPubV1Models002.Uid | undefined);
    get generatedBy(): protoPubV1Models002.Uid | undefined;
    set generatedBy(value: protoPubV1Models002.Uid | undefined);
    get edited(): boolean | undefined;
    set edited(value: boolean | undefined);
    get encrypted(): boolean | undefined;
    set encrypted(value: boolean | undefined);
    get ttl(): number | undefined;
    set ttl(value: number | undefined);
    get thread(): string | undefined;
    set thread(value: string | undefined);
    get shouldBeQuiet(): boolean | undefined;
    set shouldBeQuiet(value: boolean | undefined);
    get mucMinimumAccessLevel(): protoPubV1Models012.Role | undefined;
    set mucMinimumAccessLevel(value: protoPubV1Models012.Role | undefined);
    get specialTarget(): protoPubV1Models002.Uid | undefined;
    set specialTarget(value: protoPubV1Models002.Uid | undefined);
    get messageMarkup(): protoPubV1Models014.MessageMarkup | undefined;
    set messageMarkup(value: protoPubV1Models014.MessageMarkup | undefined);
    get isLocalMessage(): boolean | undefined;
    set isLocalMessage(value: boolean | undefined);
    get deletedUid(): protoPubV1Models002.Uid[] | undefined;
    set deletedUid(value: protoPubV1Models002.Uid[] | undefined);
    get text(): Text | undefined;
    set text(value: Text | undefined);
    get file(): protoPubV1Models001.File | undefined;
    set file(value: protoPubV1Models001.File | undefined);
    get sticker(): protoPubV1Models005.Sticker | undefined;
    set sticker(value: protoPubV1Models005.Sticker | undefined);
    get location(): protoPubV1Models006.Location | undefined;
    set location(value: protoPubV1Models006.Location | undefined);
    get liveLocation(): protoPubV1Models006.LiveLocation | undefined;
    set liveLocation(value: protoPubV1Models006.LiveLocation | undefined);
    get poll(): protoPubV1Models011.Poll | undefined;
    set poll(value: protoPubV1Models011.Poll | undefined);
    get transaction(): protoPubV1Models007.Transaction | undefined;
    set transaction(value: protoPubV1Models007.Transaction | undefined);
    get form(): protoPubV1Models010.Form | undefined;
    set form(value: protoPubV1Models010.Form | undefined);
    get persistEvent(): protoPubV1Models008.PersistentEvent | undefined;
    set persistEvent(value: protoPubV1Models008.PersistentEvent | undefined);
    get buttons(): protoPubV1Models010.Buttons | undefined;
    set buttons(value: protoPubV1Models010.Buttons | undefined);
    get shareUid(): ShareUid | undefined;
    set shareUid(value: ShareUid | undefined);
    get formResult(): protoPubV1Models010.FormResult | undefined;
    set formResult(value: protoPubV1Models010.FormResult | undefined);
    get sharePrivateDataRequest(): protoPubV1Models009.SharePrivateDataRequest | undefined;
    set sharePrivateDataRequest(value: protoPubV1Models009.SharePrivateDataRequest | undefined);
    get sharePrivateDataAcceptance(): protoPubV1Models009.SharePrivateDataAcceptance | undefined;
    set sharePrivateDataAcceptance(value: protoPubV1Models009.SharePrivateDataAcceptance | undefined);
    get callEvent(): protoPubV1Models013.CallEvent | undefined;
    set callEvent(value: protoPubV1Models013.CallEvent | undefined);
    get callLog(): protoPubV1Models013.CallLog | undefined;
    set callLog(value: protoPubV1Models013.CallLog | undefined);
    get table(): protoPubV1Models010.Table | undefined;
    set table(value: protoPubV1Models010.Table | undefined);
    get paymentInformation(): protoPubV1Models007.PaymentInformation | undefined;
    set paymentInformation(value: protoPubV1Models007.PaymentInformation | undefined);
    get type(): Message.TypeCase;
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Message.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): Message.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): Message.AsProtobufJSON;
}
export declare module Message {
    /**
     * Standard JavaScript object representation for Message
     */
    interface AsObject {
        packetId?: string;
        id?: string;
        time?: string;
        from?: protoPubV1Models002.Uid.AsObject;
        to?: protoPubV1Models002.Uid.AsObject;
        replyToId?: string;
        repliedMessageBrief?: MessageBrief.AsObject;
        forwardFrom?: protoPubV1Models002.Uid.AsObject;
        generatedBy?: protoPubV1Models002.Uid.AsObject;
        edited?: boolean;
        encrypted?: boolean;
        ttl?: number;
        thread?: string;
        shouldBeQuiet?: boolean;
        mucMinimumAccessLevel?: protoPubV1Models012.Role;
        specialTarget?: protoPubV1Models002.Uid.AsObject;
        messageMarkup?: protoPubV1Models014.MessageMarkup.AsObject;
        isLocalMessage?: boolean;
        deletedUid?: protoPubV1Models002.Uid.AsObject[];
        text?: Text.AsObject;
        file?: protoPubV1Models001.File.AsObject;
        sticker?: protoPubV1Models005.Sticker.AsObject;
        location?: protoPubV1Models006.Location.AsObject;
        liveLocation?: protoPubV1Models006.LiveLocation.AsObject;
        poll?: protoPubV1Models011.Poll.AsObject;
        transaction?: protoPubV1Models007.Transaction.AsObject;
        form?: protoPubV1Models010.Form.AsObject;
        persistEvent?: protoPubV1Models008.PersistentEvent.AsObject;
        buttons?: protoPubV1Models010.Buttons.AsObject;
        shareUid?: ShareUid.AsObject;
        formResult?: protoPubV1Models010.FormResult.AsObject;
        sharePrivateDataRequest?: protoPubV1Models009.SharePrivateDataRequest.AsObject;
        sharePrivateDataAcceptance?: protoPubV1Models009.SharePrivateDataAcceptance.AsObject;
        callEvent?: protoPubV1Models013.CallEvent.AsObject;
        callLog?: protoPubV1Models013.CallLog.AsObject;
        table?: protoPubV1Models010.Table.AsObject;
        paymentInformation?: protoPubV1Models007.PaymentInformation.AsObject;
    }
    /**
     * Protobuf JSON representation for Message
     */
    interface AsProtobufJSON {
        packetId?: string;
        id?: string;
        time?: string;
        from?: protoPubV1Models002.Uid.AsProtobufJSON | null;
        to?: protoPubV1Models002.Uid.AsProtobufJSON | null;
        replyToId?: string;
        repliedMessageBrief?: MessageBrief.AsProtobufJSON | null;
        forwardFrom?: protoPubV1Models002.Uid.AsProtobufJSON | null;
        generatedBy?: protoPubV1Models002.Uid.AsProtobufJSON | null;
        edited?: boolean;
        encrypted?: boolean;
        ttl?: number;
        thread?: string;
        shouldBeQuiet?: boolean;
        mucMinimumAccessLevel?: string;
        specialTarget?: protoPubV1Models002.Uid.AsProtobufJSON | null;
        messageMarkup?: protoPubV1Models014.MessageMarkup.AsProtobufJSON | null;
        isLocalMessage?: boolean;
        deletedUid?: protoPubV1Models002.Uid.AsProtobufJSON[] | null;
        text?: Text.AsProtobufJSON | null;
        file?: protoPubV1Models001.File.AsProtobufJSON | null;
        sticker?: protoPubV1Models005.Sticker.AsProtobufJSON | null;
        location?: protoPubV1Models006.Location.AsProtobufJSON | null;
        liveLocation?: protoPubV1Models006.LiveLocation.AsProtobufJSON | null;
        poll?: protoPubV1Models011.Poll.AsProtobufJSON | null;
        transaction?: protoPubV1Models007.Transaction.AsProtobufJSON | null;
        form?: protoPubV1Models010.Form.AsProtobufJSON | null;
        persistEvent?: protoPubV1Models008.PersistentEvent.AsProtobufJSON | null;
        buttons?: protoPubV1Models010.Buttons.AsProtobufJSON | null;
        shareUid?: ShareUid.AsProtobufJSON | null;
        formResult?: protoPubV1Models010.FormResult.AsProtobufJSON | null;
        sharePrivateDataRequest?: protoPubV1Models009.SharePrivateDataRequest.AsProtobufJSON | null;
        sharePrivateDataAcceptance?: protoPubV1Models009.SharePrivateDataAcceptance.AsProtobufJSON | null;
        callEvent?: protoPubV1Models013.CallEvent.AsProtobufJSON | null;
        callLog?: protoPubV1Models013.CallLog.AsProtobufJSON | null;
        table?: protoPubV1Models010.Table.AsProtobufJSON | null;
        paymentInformation?: protoPubV1Models007.PaymentInformation.AsProtobufJSON | null;
    }
    enum TypeCase {
        none = 0,
        text = 1,
        file = 2,
        sticker = 3,
        location = 4,
        liveLocation = 5,
        poll = 6,
        transaction = 7,
        form = 8,
        persistEvent = 9,
        buttons = 10,
        shareUid = 11,
        formResult = 12,
        sharePrivateDataRequest = 13,
        sharePrivateDataAcceptance = 14,
        callEvent = 15,
        callLog = 16,
        table = 17,
        paymentInformation = 18
    }
}
/**
 * Message implementation for proto.pub.v1.models.MessageByClient
 */
export declare class MessageByClient implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): MessageByClient;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: MessageByClient): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: MessageByClient, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: MessageByClient, _writer: BinaryWriter): void;
    private _packetId?;
    private _to?;
    private _replyToId?;
    private _forwardFrom?;
    private _encrypted?;
    private _ttl?;
    private _thread?;
    private _shouldBeQuiet?;
    private _generatedBy?;
    private _isLocalMessage?;
    private _text?;
    private _file?;
    private _sticker?;
    private _location?;
    private _liveLocation?;
    private _poll?;
    private _form?;
    private _buttons?;
    private _shareUid?;
    private _formResult?;
    private _sharePrivateDataRequest?;
    private _sharePrivateDataAcceptance?;
    private _callEvent?;
    private _table?;
    private _type;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of MessageByClient to deeply clone from
     */
    constructor(_value?: RecursivePartial<MessageByClient.AsObject>);
    get packetId(): string | undefined;
    set packetId(value: string | undefined);
    get to(): protoPubV1Models002.Uid | undefined;
    set to(value: protoPubV1Models002.Uid | undefined);
    get replyToId(): string | undefined;
    set replyToId(value: string | undefined);
    get forwardFrom(): protoPubV1Models002.Uid | undefined;
    set forwardFrom(value: protoPubV1Models002.Uid | undefined);
    get encrypted(): boolean | undefined;
    set encrypted(value: boolean | undefined);
    get ttl(): number | undefined;
    set ttl(value: number | undefined);
    get thread(): string | undefined;
    set thread(value: string | undefined);
    get shouldBeQuiet(): boolean | undefined;
    set shouldBeQuiet(value: boolean | undefined);
    get generatedBy(): protoPubV1Models002.Uid | undefined;
    set generatedBy(value: protoPubV1Models002.Uid | undefined);
    get isLocalMessage(): boolean | undefined;
    set isLocalMessage(value: boolean | undefined);
    get text(): Text | undefined;
    set text(value: Text | undefined);
    get file(): protoPubV1Models001.File | undefined;
    set file(value: protoPubV1Models001.File | undefined);
    get sticker(): protoPubV1Models005.Sticker | undefined;
    set sticker(value: protoPubV1Models005.Sticker | undefined);
    get location(): protoPubV1Models006.Location | undefined;
    set location(value: protoPubV1Models006.Location | undefined);
    get liveLocation(): protoPubV1Models006.LiveLocation | undefined;
    set liveLocation(value: protoPubV1Models006.LiveLocation | undefined);
    get poll(): protoPubV1Models011.Poll | undefined;
    set poll(value: protoPubV1Models011.Poll | undefined);
    get form(): protoPubV1Models010.Form | undefined;
    set form(value: protoPubV1Models010.Form | undefined);
    get buttons(): protoPubV1Models010.Buttons | undefined;
    set buttons(value: protoPubV1Models010.Buttons | undefined);
    get shareUid(): ShareUid | undefined;
    set shareUid(value: ShareUid | undefined);
    get formResult(): protoPubV1Models010.FormResult | undefined;
    set formResult(value: protoPubV1Models010.FormResult | undefined);
    get sharePrivateDataRequest(): protoPubV1Models009.SharePrivateDataRequest | undefined;
    set sharePrivateDataRequest(value: protoPubV1Models009.SharePrivateDataRequest | undefined);
    get sharePrivateDataAcceptance(): protoPubV1Models009.SharePrivateDataAcceptance | undefined;
    set sharePrivateDataAcceptance(value: protoPubV1Models009.SharePrivateDataAcceptance | undefined);
    get callEvent(): protoPubV1Models013.CallEvent | undefined;
    set callEvent(value: protoPubV1Models013.CallEvent | undefined);
    get table(): protoPubV1Models010.Table | undefined;
    set table(value: protoPubV1Models010.Table | undefined);
    get type(): MessageByClient.TypeCase;
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): MessageByClient.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): MessageByClient.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): MessageByClient.AsProtobufJSON;
}
export declare module MessageByClient {
    /**
     * Standard JavaScript object representation for MessageByClient
     */
    interface AsObject {
        packetId?: string;
        to?: protoPubV1Models002.Uid.AsObject;
        replyToId?: string;
        forwardFrom?: protoPubV1Models002.Uid.AsObject;
        encrypted?: boolean;
        ttl?: number;
        thread?: string;
        shouldBeQuiet?: boolean;
        generatedBy?: protoPubV1Models002.Uid.AsObject;
        isLocalMessage?: boolean;
        text?: Text.AsObject;
        file?: protoPubV1Models001.File.AsObject;
        sticker?: protoPubV1Models005.Sticker.AsObject;
        location?: protoPubV1Models006.Location.AsObject;
        liveLocation?: protoPubV1Models006.LiveLocation.AsObject;
        poll?: protoPubV1Models011.Poll.AsObject;
        form?: protoPubV1Models010.Form.AsObject;
        buttons?: protoPubV1Models010.Buttons.AsObject;
        shareUid?: ShareUid.AsObject;
        formResult?: protoPubV1Models010.FormResult.AsObject;
        sharePrivateDataRequest?: protoPubV1Models009.SharePrivateDataRequest.AsObject;
        sharePrivateDataAcceptance?: protoPubV1Models009.SharePrivateDataAcceptance.AsObject;
        callEvent?: protoPubV1Models013.CallEvent.AsObject;
        table?: protoPubV1Models010.Table.AsObject;
    }
    /**
     * Protobuf JSON representation for MessageByClient
     */
    interface AsProtobufJSON {
        packetId?: string;
        to?: protoPubV1Models002.Uid.AsProtobufJSON | null;
        replyToId?: string;
        forwardFrom?: protoPubV1Models002.Uid.AsProtobufJSON | null;
        encrypted?: boolean;
        ttl?: number;
        thread?: string;
        shouldBeQuiet?: boolean;
        generatedBy?: protoPubV1Models002.Uid.AsProtobufJSON | null;
        isLocalMessage?: boolean;
        text?: Text.AsProtobufJSON | null;
        file?: protoPubV1Models001.File.AsProtobufJSON | null;
        sticker?: protoPubV1Models005.Sticker.AsProtobufJSON | null;
        location?: protoPubV1Models006.Location.AsProtobufJSON | null;
        liveLocation?: protoPubV1Models006.LiveLocation.AsProtobufJSON | null;
        poll?: protoPubV1Models011.Poll.AsProtobufJSON | null;
        form?: protoPubV1Models010.Form.AsProtobufJSON | null;
        buttons?: protoPubV1Models010.Buttons.AsProtobufJSON | null;
        shareUid?: ShareUid.AsProtobufJSON | null;
        formResult?: protoPubV1Models010.FormResult.AsProtobufJSON | null;
        sharePrivateDataRequest?: protoPubV1Models009.SharePrivateDataRequest.AsProtobufJSON | null;
        sharePrivateDataAcceptance?: protoPubV1Models009.SharePrivateDataAcceptance.AsProtobufJSON | null;
        callEvent?: protoPubV1Models013.CallEvent.AsProtobufJSON | null;
        table?: protoPubV1Models010.Table.AsProtobufJSON | null;
    }
    enum TypeCase {
        none = 0,
        text = 1,
        file = 2,
        sticker = 3,
        location = 4,
        liveLocation = 5,
        poll = 6,
        form = 7,
        buttons = 8,
        shareUid = 9,
        formResult = 10,
        sharePrivateDataRequest = 11,
        sharePrivateDataAcceptance = 12,
        callEvent = 13,
        table = 14
    }
}
/**
 * Message implementation for proto.pub.v1.models.LocalNetworkEmptyMessage
 */
export declare class LocalNetworkEmptyMessage implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): LocalNetworkEmptyMessage;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: LocalNetworkEmptyMessage): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: LocalNetworkEmptyMessage, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: LocalNetworkEmptyMessage, _writer: BinaryWriter): void;
    private _to?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of LocalNetworkEmptyMessage to deeply clone from
     */
    constructor(_value?: RecursivePartial<LocalNetworkEmptyMessage.AsObject>);
    get to(): protoPubV1Models002.Uid | undefined;
    set to(value: protoPubV1Models002.Uid | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): LocalNetworkEmptyMessage.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): LocalNetworkEmptyMessage.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): LocalNetworkEmptyMessage.AsProtobufJSON;
}
export declare module LocalNetworkEmptyMessage {
    /**
     * Standard JavaScript object representation for LocalNetworkEmptyMessage
     */
    interface AsObject {
        to?: protoPubV1Models002.Uid.AsObject;
    }
    /**
     * Protobuf JSON representation for LocalNetworkEmptyMessage
     */
    interface AsProtobufJSON {
        to?: protoPubV1Models002.Uid.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.models.MessageByBot
 */
export declare class MessageByBot implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): MessageByBot;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: MessageByBot): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: MessageByBot, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: MessageByBot, _writer: BinaryWriter): void;
    private _packetId?;
    private _from?;
    private _to?;
    private _replyToId?;
    private _forwardFrom?;
    private _encrypted?;
    private _ttl?;
    private _thread?;
    private _shouldBeQuiet?;
    private _messageMarkup?;
    private _text?;
    private _file?;
    private _sticker?;
    private _location?;
    private _form?;
    private _buttons?;
    private _shareUid?;
    private _sharePrivateDataRequest?;
    private _botSpecificPersistentEvent?;
    private _table?;
    private _type;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of MessageByBot to deeply clone from
     */
    constructor(_value?: RecursivePartial<MessageByBot.AsObject>);
    get packetId(): string | undefined;
    set packetId(value: string | undefined);
    get from(): protoPubV1Models002.Uid | undefined;
    set from(value: protoPubV1Models002.Uid | undefined);
    get to(): protoPubV1Models002.Uid | undefined;
    set to(value: protoPubV1Models002.Uid | undefined);
    get replyToId(): string | undefined;
    set replyToId(value: string | undefined);
    get forwardFrom(): protoPubV1Models002.Uid | undefined;
    set forwardFrom(value: protoPubV1Models002.Uid | undefined);
    get encrypted(): boolean | undefined;
    set encrypted(value: boolean | undefined);
    get ttl(): number | undefined;
    set ttl(value: number | undefined);
    get thread(): string | undefined;
    set thread(value: string | undefined);
    get shouldBeQuiet(): boolean | undefined;
    set shouldBeQuiet(value: boolean | undefined);
    get messageMarkup(): protoPubV1Models014.MessageMarkup | undefined;
    set messageMarkup(value: protoPubV1Models014.MessageMarkup | undefined);
    get text(): Text | undefined;
    set text(value: Text | undefined);
    get file(): protoPubV1Models001.File | undefined;
    set file(value: protoPubV1Models001.File | undefined);
    get sticker(): protoPubV1Models005.Sticker | undefined;
    set sticker(value: protoPubV1Models005.Sticker | undefined);
    get location(): protoPubV1Models006.Location | undefined;
    set location(value: protoPubV1Models006.Location | undefined);
    get form(): protoPubV1Models010.Form | undefined;
    set form(value: protoPubV1Models010.Form | undefined);
    get buttons(): protoPubV1Models010.Buttons | undefined;
    set buttons(value: protoPubV1Models010.Buttons | undefined);
    get shareUid(): ShareUid | undefined;
    set shareUid(value: ShareUid | undefined);
    get sharePrivateDataRequest(): protoPubV1Models009.SharePrivateDataRequest | undefined;
    set sharePrivateDataRequest(value: protoPubV1Models009.SharePrivateDataRequest | undefined);
    get botSpecificPersistentEvent(): protoPubV1Models008.BotSpecificPersistentEvent | undefined;
    set botSpecificPersistentEvent(value: protoPubV1Models008.BotSpecificPersistentEvent | undefined);
    get table(): protoPubV1Models010.Table | undefined;
    set table(value: protoPubV1Models010.Table | undefined);
    get type(): MessageByBot.TypeCase;
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): MessageByBot.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): MessageByBot.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): MessageByBot.AsProtobufJSON;
}
export declare module MessageByBot {
    /**
     * Standard JavaScript object representation for MessageByBot
     */
    interface AsObject {
        packetId?: string;
        from?: protoPubV1Models002.Uid.AsObject;
        to?: protoPubV1Models002.Uid.AsObject;
        replyToId?: string;
        forwardFrom?: protoPubV1Models002.Uid.AsObject;
        encrypted?: boolean;
        ttl?: number;
        thread?: string;
        shouldBeQuiet?: boolean;
        messageMarkup?: protoPubV1Models014.MessageMarkup.AsObject;
        text?: Text.AsObject;
        file?: protoPubV1Models001.File.AsObject;
        sticker?: protoPubV1Models005.Sticker.AsObject;
        location?: protoPubV1Models006.Location.AsObject;
        form?: protoPubV1Models010.Form.AsObject;
        buttons?: protoPubV1Models010.Buttons.AsObject;
        shareUid?: ShareUid.AsObject;
        sharePrivateDataRequest?: protoPubV1Models009.SharePrivateDataRequest.AsObject;
        botSpecificPersistentEvent?: protoPubV1Models008.BotSpecificPersistentEvent.AsObject;
        table?: protoPubV1Models010.Table.AsObject;
    }
    /**
     * Protobuf JSON representation for MessageByBot
     */
    interface AsProtobufJSON {
        packetId?: string;
        from?: protoPubV1Models002.Uid.AsProtobufJSON | null;
        to?: protoPubV1Models002.Uid.AsProtobufJSON | null;
        replyToId?: string;
        forwardFrom?: protoPubV1Models002.Uid.AsProtobufJSON | null;
        encrypted?: boolean;
        ttl?: number;
        thread?: string;
        shouldBeQuiet?: boolean;
        messageMarkup?: protoPubV1Models014.MessageMarkup.AsProtobufJSON | null;
        text?: Text.AsProtobufJSON | null;
        file?: protoPubV1Models001.File.AsProtobufJSON | null;
        sticker?: protoPubV1Models005.Sticker.AsProtobufJSON | null;
        location?: protoPubV1Models006.Location.AsProtobufJSON | null;
        form?: protoPubV1Models010.Form.AsProtobufJSON | null;
        buttons?: protoPubV1Models010.Buttons.AsProtobufJSON | null;
        shareUid?: ShareUid.AsProtobufJSON | null;
        sharePrivateDataRequest?: protoPubV1Models009.SharePrivateDataRequest.AsProtobufJSON | null;
        botSpecificPersistentEvent?: protoPubV1Models008.BotSpecificPersistentEvent.AsProtobufJSON | null;
        table?: protoPubV1Models010.Table.AsProtobufJSON | null;
    }
    enum TypeCase {
        none = 0,
        text = 1,
        file = 2,
        sticker = 3,
        location = 4,
        form = 5,
        buttons = 6,
        shareUid = 7,
        sharePrivateDataRequest = 8,
        botSpecificPersistentEvent = 9,
        table = 10
    }
}
/**
 * Message implementation for proto.pub.v1.models.LocalChatMessage
 */
export declare class LocalChatMessage implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): LocalChatMessage;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: LocalChatMessage): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: LocalChatMessage, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: LocalChatMessage, _writer: BinaryWriter): void;
    private _from?;
    private _time?;
    private _localNetworkId?;
    private _messageByClient?;
    private _callEvent?;
    private _localNetworkEmptyMessage?;
    private _packet;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of LocalChatMessage to deeply clone from
     */
    constructor(_value?: RecursivePartial<LocalChatMessage.AsObject>);
    get from(): protoPubV1Models002.Uid | undefined;
    set from(value: protoPubV1Models002.Uid | undefined);
    get time(): string | undefined;
    set time(value: string | undefined);
    get localNetworkId(): string | undefined;
    set localNetworkId(value: string | undefined);
    get messageByClient(): MessageByClient | undefined;
    set messageByClient(value: MessageByClient | undefined);
    get callEvent(): protoPubV1Models013.CallEventV2 | undefined;
    set callEvent(value: protoPubV1Models013.CallEventV2 | undefined);
    get localNetworkEmptyMessage(): LocalNetworkEmptyMessage | undefined;
    set localNetworkEmptyMessage(value: LocalNetworkEmptyMessage | undefined);
    get packet(): LocalChatMessage.PacketCase;
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): LocalChatMessage.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): LocalChatMessage.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): LocalChatMessage.AsProtobufJSON;
}
export declare module LocalChatMessage {
    /**
     * Standard JavaScript object representation for LocalChatMessage
     */
    interface AsObject {
        from?: protoPubV1Models002.Uid.AsObject;
        time?: string;
        localNetworkId?: string;
        messageByClient?: MessageByClient.AsObject;
        callEvent?: protoPubV1Models013.CallEventV2.AsObject;
        localNetworkEmptyMessage?: LocalNetworkEmptyMessage.AsObject;
    }
    /**
     * Protobuf JSON representation for LocalChatMessage
     */
    interface AsProtobufJSON {
        from?: protoPubV1Models002.Uid.AsProtobufJSON | null;
        time?: string;
        localNetworkId?: string;
        messageByClient?: MessageByClient.AsProtobufJSON | null;
        callEvent?: protoPubV1Models013.CallEventV2.AsProtobufJSON | null;
        localNetworkEmptyMessage?: LocalNetworkEmptyMessage.AsProtobufJSON | null;
    }
    enum PacketCase {
        none = 0,
        messageByClient = 1,
        callEvent = 2,
        localNetworkEmptyMessage = 3
    }
}
