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
    private _lastCurrentUserSentMessagePacketId?;
    private _lastSeenId?;
    private _firstMessageId?;
    private _presenceType?;
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
    get lastCurrentUserSentMessagePacketId(): string | undefined;
    set lastCurrentUserSentMessagePacketId(value: string | undefined);
    get lastSeenId(): string | undefined;
    set lastSeenId(value: string | undefined);
    get firstMessageId(): string | undefined;
    set firstMessageId(value: string | undefined);
    get presenceType(): PresenceType | undefined;
    set presenceType(value: PresenceType | undefined);
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
        lastCurrentUserSentMessagePacketId?: string;
        lastSeenId?: string;
        firstMessageId?: string;
        presenceType?: PresenceType;
    }
    /**
     * Protobuf JSON representation for RoomMetadata
     */
    interface AsProtobufJSON {
        roomUid?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        lastMessageId?: string;
        lastUpdate?: string;
        lastCurrentUserSentMessageId?: string;
        lastCurrentUserSentMessagePacketId?: string;
        lastSeenId?: string;
        firstMessageId?: string;
        presenceType?: string;
    }
}
