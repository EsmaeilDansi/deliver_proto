import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as protoPubV1Models001 from '../../../pub/v1/models/uid.pb';
export declare enum PresenceType {
    ACTIVE = 0,
    DELETED = 1,
    KICKED = 2,
    LEFT = 3,
    BANNED = 4
}
/**
 * Message implementation for proto.pub.v1.models.RoomMetadata
 */
export declare class RoomMetadata implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): RoomMetadata;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: RoomMetadata): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: RoomMetadata, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: RoomMetadata, _writer: BinaryWriter): void;
    private _roomUid?;
    private _lastMessageId?;
    private _lastUpdate?;
    private _lastCurrentUserSentMessageId?;
    private _lastSeenId?;
    private _firstMessageId?;
    private _presenceType?;
    private _roomStatus?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of RoomMetadata to deeply clone from
     */
    constructor(_value?: RecursivePartial<RoomMetadata.AsObject>);
    get roomUid(): protoPubV1Models001.Uid | undefined;
    set roomUid(value: protoPubV1Models001.Uid | undefined);
    get lastMessageId(): string | undefined;
    set lastMessageId(value: string | undefined);
    get lastUpdate(): string | undefined;
    set lastUpdate(value: string | undefined);
    get lastCurrentUserSentMessageId(): string | undefined;
    set lastCurrentUserSentMessageId(value: string | undefined);
    get lastSeenId(): string | undefined;
    set lastSeenId(value: string | undefined);
    get firstMessageId(): string | undefined;
    set firstMessageId(value: string | undefined);
    get presenceType(): PresenceType | undefined;
    set presenceType(value: PresenceType | undefined);
    get roomStatus(): RoomStatus | undefined;
    set roomStatus(value: RoomStatus | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): RoomMetadata.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): RoomMetadata.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): RoomMetadata.AsProtobufJSON;
}
export declare module RoomMetadata {
    /**
     * Standard JavaScript object representation for RoomMetadata
     */
    interface AsObject {
        roomUid?: protoPubV1Models001.Uid.AsObject;
        lastMessageId?: string;
        lastUpdate?: string;
        lastCurrentUserSentMessageId?: string;
        lastSeenId?: string;
        firstMessageId?: string;
        presenceType?: PresenceType;
        roomStatus?: RoomStatus.AsObject;
    }
    /**
     * Protobuf JSON representation for RoomMetadata
     */
    interface AsProtobufJSON {
        roomUid?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        lastMessageId?: string;
        lastUpdate?: string;
        lastCurrentUserSentMessageId?: string;
        lastSeenId?: string;
        firstMessageId?: string;
        presenceType?: string;
        roomStatus?: RoomStatus.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.models.RoomStatus
 */
export declare class RoomStatus implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): RoomStatus;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: RoomStatus): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: RoomStatus, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: RoomStatus, _writer: BinaryWriter): void;
    private _activatedInRoom?;
    private _deletedRoom?;
    private _kickedFromRoom?;
    private _leftFromRoom?;
    private _bannedFromRoom?;
    private _blockedRoom?;
    private _status;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of RoomStatus to deeply clone from
     */
    constructor(_value?: RecursivePartial<RoomStatus.AsObject>);
    get activatedInRoom(): ActivatedInRoom | undefined;
    set activatedInRoom(value: ActivatedInRoom | undefined);
    get deletedRoom(): DeletedRoom | undefined;
    set deletedRoom(value: DeletedRoom | undefined);
    get kickedFromRoom(): KickedFromRoom | undefined;
    set kickedFromRoom(value: KickedFromRoom | undefined);
    get leftFromRoom(): LeftFromRoom | undefined;
    set leftFromRoom(value: LeftFromRoom | undefined);
    get bannedFromRoom(): BannedFromRoom | undefined;
    set bannedFromRoom(value: BannedFromRoom | undefined);
    get blockedRoom(): BlockedRoom | undefined;
    set blockedRoom(value: BlockedRoom | undefined);
    get status(): RoomStatus.StatusCase;
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): RoomStatus.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): RoomStatus.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): RoomStatus.AsProtobufJSON;
}
export declare module RoomStatus {
    /**
     * Standard JavaScript object representation for RoomStatus
     */
    interface AsObject {
        activatedInRoom?: ActivatedInRoom.AsObject;
        deletedRoom?: DeletedRoom.AsObject;
        kickedFromRoom?: KickedFromRoom.AsObject;
        leftFromRoom?: LeftFromRoom.AsObject;
        bannedFromRoom?: BannedFromRoom.AsObject;
        blockedRoom?: BlockedRoom.AsObject;
    }
    /**
     * Protobuf JSON representation for RoomStatus
     */
    interface AsProtobufJSON {
        activatedInRoom?: ActivatedInRoom.AsProtobufJSON | null;
        deletedRoom?: DeletedRoom.AsProtobufJSON | null;
        kickedFromRoom?: KickedFromRoom.AsProtobufJSON | null;
        leftFromRoom?: LeftFromRoom.AsProtobufJSON | null;
        bannedFromRoom?: BannedFromRoom.AsProtobufJSON | null;
        blockedRoom?: BlockedRoom.AsProtobufJSON | null;
    }
    enum StatusCase {
        none = 0,
        activatedInRoom = 1,
        deletedRoom = 2,
        kickedFromRoom = 3,
        leftFromRoom = 4,
        bannedFromRoom = 5,
        blockedRoom = 6
    }
}
/**
 * Message implementation for proto.pub.v1.models.ActivatedInRoom
 */
export declare class ActivatedInRoom implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ActivatedInRoom;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ActivatedInRoom): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ActivatedInRoom, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ActivatedInRoom, _writer: BinaryWriter): void;
    private _by?;
    private _time?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ActivatedInRoom to deeply clone from
     */
    constructor(_value?: RecursivePartial<ActivatedInRoom.AsObject>);
    get by(): protoPubV1Models001.Uid | undefined;
    set by(value: protoPubV1Models001.Uid | undefined);
    get time(): string | undefined;
    set time(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ActivatedInRoom.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ActivatedInRoom.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ActivatedInRoom.AsProtobufJSON;
}
export declare module ActivatedInRoom {
    /**
     * Standard JavaScript object representation for ActivatedInRoom
     */
    interface AsObject {
        by?: protoPubV1Models001.Uid.AsObject;
        time?: string;
    }
    /**
     * Protobuf JSON representation for ActivatedInRoom
     */
    interface AsProtobufJSON {
        by?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        time?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.models.DeletedRoom
 */
export declare class DeletedRoom implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): DeletedRoom;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: DeletedRoom): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: DeletedRoom, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: DeletedRoom, _writer: BinaryWriter): void;
    private _by?;
    private _time?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of DeletedRoom to deeply clone from
     */
    constructor(_value?: RecursivePartial<DeletedRoom.AsObject>);
    get by(): protoPubV1Models001.Uid | undefined;
    set by(value: protoPubV1Models001.Uid | undefined);
    get time(): string | undefined;
    set time(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): DeletedRoom.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): DeletedRoom.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): DeletedRoom.AsProtobufJSON;
}
export declare module DeletedRoom {
    /**
     * Standard JavaScript object representation for DeletedRoom
     */
    interface AsObject {
        by?: protoPubV1Models001.Uid.AsObject;
        time?: string;
    }
    /**
     * Protobuf JSON representation for DeletedRoom
     */
    interface AsProtobufJSON {
        by?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        time?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.models.KickedFromRoom
 */
export declare class KickedFromRoom implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): KickedFromRoom;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: KickedFromRoom): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: KickedFromRoom, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: KickedFromRoom, _writer: BinaryWriter): void;
    private _by?;
    private _time?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of KickedFromRoom to deeply clone from
     */
    constructor(_value?: RecursivePartial<KickedFromRoom.AsObject>);
    get by(): protoPubV1Models001.Uid | undefined;
    set by(value: protoPubV1Models001.Uid | undefined);
    get time(): string | undefined;
    set time(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): KickedFromRoom.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): KickedFromRoom.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): KickedFromRoom.AsProtobufJSON;
}
export declare module KickedFromRoom {
    /**
     * Standard JavaScript object representation for KickedFromRoom
     */
    interface AsObject {
        by?: protoPubV1Models001.Uid.AsObject;
        time?: string;
    }
    /**
     * Protobuf JSON representation for KickedFromRoom
     */
    interface AsProtobufJSON {
        by?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        time?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.models.LeftFromRoom
 */
export declare class LeftFromRoom implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): LeftFromRoom;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: LeftFromRoom): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: LeftFromRoom, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: LeftFromRoom, _writer: BinaryWriter): void;
    private _time?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of LeftFromRoom to deeply clone from
     */
    constructor(_value?: RecursivePartial<LeftFromRoom.AsObject>);
    get time(): string | undefined;
    set time(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): LeftFromRoom.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): LeftFromRoom.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): LeftFromRoom.AsProtobufJSON;
}
export declare module LeftFromRoom {
    /**
     * Standard JavaScript object representation for LeftFromRoom
     */
    interface AsObject {
        time?: string;
    }
    /**
     * Protobuf JSON representation for LeftFromRoom
     */
    interface AsProtobufJSON {
        time?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.models.BannedFromRoom
 */
export declare class BannedFromRoom implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): BannedFromRoom;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: BannedFromRoom): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: BannedFromRoom, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: BannedFromRoom, _writer: BinaryWriter): void;
    private _by?;
    private _time?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of BannedFromRoom to deeply clone from
     */
    constructor(_value?: RecursivePartial<BannedFromRoom.AsObject>);
    get by(): protoPubV1Models001.Uid | undefined;
    set by(value: protoPubV1Models001.Uid | undefined);
    get time(): string | undefined;
    set time(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): BannedFromRoom.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): BannedFromRoom.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): BannedFromRoom.AsProtobufJSON;
}
export declare module BannedFromRoom {
    /**
     * Standard JavaScript object representation for BannedFromRoom
     */
    interface AsObject {
        by?: protoPubV1Models001.Uid.AsObject;
        time?: string;
    }
    /**
     * Protobuf JSON representation for BannedFromRoom
     */
    interface AsProtobufJSON {
        by?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        time?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.models.BlockedRoom
 */
export declare class BlockedRoom implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): BlockedRoom;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: BlockedRoom): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: BlockedRoom, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: BlockedRoom, _writer: BinaryWriter): void;
    private _time?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of BlockedRoom to deeply clone from
     */
    constructor(_value?: RecursivePartial<BlockedRoom.AsObject>);
    get time(): string | undefined;
    set time(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): BlockedRoom.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): BlockedRoom.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): BlockedRoom.AsProtobufJSON;
}
export declare module BlockedRoom {
    /**
     * Standard JavaScript object representation for BlockedRoom
     */
    interface AsObject {
        time?: string;
    }
    /**
     * Protobuf JSON representation for BlockedRoom
     */
    interface AsProtobufJSON {
        time?: string;
    }
}
