import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as protoPubV1Models000 from '../../../pub/v1/models/categories.pb';
/**
 * Message implementation for proto.pub.v1.models.Uid
 */
export declare class Uid implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): Uid;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Uid): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: Uid, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: Uid, _writer: BinaryWriter): void;
    private _category?;
    private _node?;
    private _sessionId?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Uid to deeply clone from
     */
    constructor(_value?: RecursivePartial<Uid.AsObject>);
    get category(): protoPubV1Models000.Categories | undefined;
    set category(value: protoPubV1Models000.Categories | undefined);
    get node(): string | undefined;
    set node(value: string | undefined);
    get sessionId(): string | undefined;
    set sessionId(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Uid.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): Uid.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): Uid.AsProtobufJSON;
}
export declare module Uid {
    /**
     * Standard JavaScript object representation for Uid
     */
    interface AsObject {
        category?: protoPubV1Models000.Categories;
        node?: string;
        sessionId?: string;
    }
    /**
     * Protobuf JSON representation for Uid
     */
    interface AsProtobufJSON {
        category?: string;
        node?: string;
        sessionId?: string;
    }
}
