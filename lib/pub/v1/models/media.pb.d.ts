import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as protoPubV1Models001 from '../../../pub/v1/models/file.pb';
import * as protoPubV1Models002 from '../../../pub/v1/models/uid.pb';
/**
 * Message implementation for proto.pub.v1.models.Media
 */
export declare class Media implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): Media;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Media): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: Media, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: Media, _writer: BinaryWriter): void;
    private _createdOn?;
    private _createdBy?;
    private _messageId?;
    private _encrypted?;
    private _file?;
    private _link?;
    private _type;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Media to deeply clone from
     */
    constructor(_value?: RecursivePartial<Media.AsObject>);
    get createdOn(): string | undefined;
    set createdOn(value: string | undefined);
    get createdBy(): protoPubV1Models002.Uid | undefined;
    set createdBy(value: protoPubV1Models002.Uid | undefined);
    get messageId(): string | undefined;
    set messageId(value: string | undefined);
    get encrypted(): boolean | undefined;
    set encrypted(value: boolean | undefined);
    get file(): protoPubV1Models001.File | undefined;
    set file(value: protoPubV1Models001.File | undefined);
    get link(): string | undefined;
    set link(value: string | undefined);
    get type(): Media.TypeCase;
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Media.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): Media.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): Media.AsProtobufJSON;
}
export declare module Media {
    /**
     * Standard JavaScript object representation for Media
     */
    interface AsObject {
        createdOn?: string;
        createdBy?: protoPubV1Models002.Uid.AsObject;
        messageId?: string;
        encrypted?: boolean;
        file?: protoPubV1Models001.File.AsObject;
        link?: string;
    }
    /**
     * Protobuf JSON representation for Media
     */
    interface AsProtobufJSON {
        createdOn?: string;
        createdBy?: protoPubV1Models002.Uid.AsProtobufJSON | null;
        messageId?: string;
        encrypted?: boolean;
        file?: protoPubV1Models001.File.AsProtobufJSON | null;
        link?: string | null;
    }
    enum TypeCase {
        none = 0,
        file = 1,
        link = 2
    }
}
