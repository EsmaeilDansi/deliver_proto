import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as protoPubV1Models001 from '../../../pub/v1/models/uid.pb';
import * as protoPubV1Models002 from '../../../pub/v1/models/avatar.pb';
/**
 * Message implementation for proto.pub.v1.models.PersistentEvent
 */
export declare class PersistentEvent implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): PersistentEvent;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: PersistentEvent): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: PersistentEvent, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: PersistentEvent, _writer: BinaryWriter): void;
    private _mucSpecificPersistentEvent?;
    private _messageManipulationPersistentEvent?;
    private _adminSpecificPersistentEvent?;
    private _botSpecificPersistentEvent?;
    private _type;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of PersistentEvent to deeply clone from
     */
    constructor(_value?: RecursivePartial<PersistentEvent.AsObject>);
    get mucSpecificPersistentEvent(): MucSpecificPersistentEvent | undefined;
    set mucSpecificPersistentEvent(value: MucSpecificPersistentEvent | undefined);
    get messageManipulationPersistentEvent(): MessageManipulationPersistentEvent | undefined;
    set messageManipulationPersistentEvent(value: MessageManipulationPersistentEvent | undefined);
    get adminSpecificPersistentEvent(): AdminSpecificPersistentEvent | undefined;
    set adminSpecificPersistentEvent(value: AdminSpecificPersistentEvent | undefined);
    get botSpecificPersistentEvent(): BotSpecificPersistentEvent | undefined;
    set botSpecificPersistentEvent(value: BotSpecificPersistentEvent | undefined);
    get type(): PersistentEvent.TypeCase;
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): PersistentEvent.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): PersistentEvent.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): PersistentEvent.AsProtobufJSON;
}
export declare module PersistentEvent {
    /**
     * Standard JavaScript object representation for PersistentEvent
     */
    interface AsObject {
        mucSpecificPersistentEvent?: MucSpecificPersistentEvent.AsObject;
        messageManipulationPersistentEvent?: MessageManipulationPersistentEvent.AsObject;
        adminSpecificPersistentEvent?: AdminSpecificPersistentEvent.AsObject;
        botSpecificPersistentEvent?: BotSpecificPersistentEvent.AsObject;
    }
    /**
     * Protobuf JSON representation for PersistentEvent
     */
    interface AsProtobufJSON {
        mucSpecificPersistentEvent?: MucSpecificPersistentEvent.AsProtobufJSON | null;
        messageManipulationPersistentEvent?: MessageManipulationPersistentEvent.AsProtobufJSON | null;
        adminSpecificPersistentEvent?: AdminSpecificPersistentEvent.AsProtobufJSON | null;
        botSpecificPersistentEvent?: BotSpecificPersistentEvent.AsProtobufJSON | null;
    }
    enum TypeCase {
        none = 0,
        mucSpecificPersistentEvent = 1,
        messageManipulationPersistentEvent = 2,
        adminSpecificPersistentEvent = 3,
        botSpecificPersistentEvent = 4
    }
}
/**
 * Message implementation for proto.pub.v1.models.MucSpecificPersistentEvent
 */
export declare class MucSpecificPersistentEvent implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): MucSpecificPersistentEvent;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: MucSpecificPersistentEvent): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: MucSpecificPersistentEvent, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: MucSpecificPersistentEvent, _writer: BinaryWriter): void;
    private _issuer?;
    private _issue?;
    private _assignee?;
    private _messageId?;
    private _avatar?;
    private _name?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of MucSpecificPersistentEvent to deeply clone from
     */
    constructor(_value?: RecursivePartial<MucSpecificPersistentEvent.AsObject>);
    get issuer(): protoPubV1Models001.Uid | undefined;
    set issuer(value: protoPubV1Models001.Uid | undefined);
    get issue(): MucSpecificPersistentEvent.Issue | undefined;
    set issue(value: MucSpecificPersistentEvent.Issue | undefined);
    get assignee(): protoPubV1Models001.Uid | undefined;
    set assignee(value: protoPubV1Models001.Uid | undefined);
    get messageId(): string | undefined;
    set messageId(value: string | undefined);
    get avatar(): protoPubV1Models002.Avatar | undefined;
    set avatar(value: protoPubV1Models002.Avatar | undefined);
    get name(): string | undefined;
    set name(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): MucSpecificPersistentEvent.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): MucSpecificPersistentEvent.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): MucSpecificPersistentEvent.AsProtobufJSON;
}
export declare module MucSpecificPersistentEvent {
    /**
     * Standard JavaScript object representation for MucSpecificPersistentEvent
     */
    interface AsObject {
        issuer?: protoPubV1Models001.Uid.AsObject;
        issue?: MucSpecificPersistentEvent.Issue;
        assignee?: protoPubV1Models001.Uid.AsObject;
        messageId?: string;
        avatar?: protoPubV1Models002.Avatar.AsObject;
        name?: string;
    }
    /**
     * Protobuf JSON representation for MucSpecificPersistentEvent
     */
    interface AsProtobufJSON {
        issuer?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        issue?: string;
        assignee?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        messageId?: string;
        avatar?: protoPubV1Models002.Avatar.AsProtobufJSON | null;
        name?: string;
    }
    enum Issue {
        KICK_USER = 0,
        ADD_USER = 1,
        PIN_MESSAGE = 2,
        NAME_CHANGED = 3,
        AVATAR_CHANGED = 4,
        MUC_CREATED = 5,
        LEAVE_USER = 6,
        JOINED_USER = 7,
        DELETED = 8
    }
}
/**
 * Message implementation for proto.pub.v1.models.MessageManipulationPersistentEvent
 */
export declare class MessageManipulationPersistentEvent implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): MessageManipulationPersistentEvent;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: MessageManipulationPersistentEvent): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: MessageManipulationPersistentEvent, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: MessageManipulationPersistentEvent, _writer: BinaryWriter): void;
    private _action?;
    private _messageId?;
    private _manipulationTime?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of MessageManipulationPersistentEvent to deeply clone from
     */
    constructor(_value?: RecursivePartial<MessageManipulationPersistentEvent.AsObject>);
    get action(): MessageManipulationPersistentEvent.Action | undefined;
    set action(value: MessageManipulationPersistentEvent.Action | undefined);
    get messageId(): string | undefined;
    set messageId(value: string | undefined);
    get manipulationTime(): string | undefined;
    set manipulationTime(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): MessageManipulationPersistentEvent.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): MessageManipulationPersistentEvent.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): MessageManipulationPersistentEvent.AsProtobufJSON;
}
export declare module MessageManipulationPersistentEvent {
    /**
     * Standard JavaScript object representation for MessageManipulationPersistentEvent
     */
    interface AsObject {
        action?: MessageManipulationPersistentEvent.Action;
        messageId?: string;
        manipulationTime?: string;
    }
    /**
     * Protobuf JSON representation for MessageManipulationPersistentEvent
     */
    interface AsProtobufJSON {
        action?: string;
        messageId?: string;
        manipulationTime?: string;
    }
    enum Action {
        EDITED = 0,
        DELETED = 1,
        OTHER_DELETED = 2
    }
}
/**
 * Message implementation for proto.pub.v1.models.AdminSpecificPersistentEvent
 */
export declare class AdminSpecificPersistentEvent implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): AdminSpecificPersistentEvent;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: AdminSpecificPersistentEvent): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: AdminSpecificPersistentEvent, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: AdminSpecificPersistentEvent, _writer: BinaryWriter): void;
    private _event?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of AdminSpecificPersistentEvent to deeply clone from
     */
    constructor(_value?: RecursivePartial<AdminSpecificPersistentEvent.AsObject>);
    get event(): AdminSpecificPersistentEvent.Event | undefined;
    set event(value: AdminSpecificPersistentEvent.Event | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): AdminSpecificPersistentEvent.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): AdminSpecificPersistentEvent.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): AdminSpecificPersistentEvent.AsProtobufJSON;
}
export declare module AdminSpecificPersistentEvent {
    /**
     * Standard JavaScript object representation for AdminSpecificPersistentEvent
     */
    interface AsObject {
        event?: AdminSpecificPersistentEvent.Event;
    }
    /**
     * Protobuf JSON representation for AdminSpecificPersistentEvent
     */
    interface AsProtobufJSON {
        event?: string;
    }
    enum Event {
        NEW_CONTACT_ADDED = 0
    }
}
/**
 * Message implementation for proto.pub.v1.models.BotSpecificPersistentEvent
 */
export declare class BotSpecificPersistentEvent implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): BotSpecificPersistentEvent;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: BotSpecificPersistentEvent): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: BotSpecificPersistentEvent, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: BotSpecificPersistentEvent, _writer: BinaryWriter): void;
    private _event?;
    private _messageId?;
    private _errorMessage?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of BotSpecificPersistentEvent to deeply clone from
     */
    constructor(_value?: RecursivePartial<BotSpecificPersistentEvent.AsObject>);
    get event(): BotSpecificPersistentEvent.BotEvent | undefined;
    set event(value: BotSpecificPersistentEvent.BotEvent | undefined);
    get messageId(): string | undefined;
    set messageId(value: string | undefined);
    get errorMessage(): string | undefined;
    set errorMessage(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): BotSpecificPersistentEvent.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): BotSpecificPersistentEvent.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): BotSpecificPersistentEvent.AsProtobufJSON;
}
export declare module BotSpecificPersistentEvent {
    /**
     * Standard JavaScript object representation for BotSpecificPersistentEvent
     */
    interface AsObject {
        event?: BotSpecificPersistentEvent.BotEvent;
        messageId?: string;
        errorMessage?: string;
    }
    /**
     * Protobuf JSON representation for BotSpecificPersistentEvent
     */
    interface AsProtobufJSON {
        event?: string;
        messageId?: string;
        errorMessage?: string;
    }
    enum BotEvent {
        BOT_NOT_RESPONDING = 0
    }
}
