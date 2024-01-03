import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as protoPubV1Models000 from '../../../pub/v1/models/categories.pb';
/**
 * Message implementation for proto.pub.v1.models.Avatar
 */
export declare class Avatar implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): Avatar;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Avatar): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: Avatar, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: Avatar, _writer: BinaryWriter): void;
    private _category?;
    private _node?;
    private _createdOn?;
    private _fileUuid?;
    private _fileName?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Avatar to deeply clone from
     */
    constructor(_value?: RecursivePartial<Avatar.AsObject>);
    get category(): protoPubV1Models000.Categories | undefined;
    set category(value: protoPubV1Models000.Categories | undefined);
    get node(): string | undefined;
    set node(value: string | undefined);
    get createdOn(): string | undefined;
    set createdOn(value: string | undefined);
    get fileUuid(): string | undefined;
    set fileUuid(value: string | undefined);
    get fileName(): string | undefined;
    set fileName(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Avatar.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): Avatar.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): Avatar.AsProtobufJSON;
}
export declare module Avatar {
    /**
     * Standard JavaScript object representation for Avatar
     */
    interface AsObject {
        category?: protoPubV1Models000.Categories;
        node?: string;
        createdOn?: string;
        fileUuid?: string;
        fileName?: string;
    }
    /**
     * Protobuf JSON representation for Avatar
     */
    interface AsProtobufJSON {
        category?: string;
        node?: string;
        createdOn?: string;
        fileUuid?: string;
        fileName?: string;
    }
}
