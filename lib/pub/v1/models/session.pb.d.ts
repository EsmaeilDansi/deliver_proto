import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as protoPubV1Models000 from '../../../pub/v1/models/platform.pb';
/**
 * Message implementation for proto.pub.v1.models.Session
 */
export declare class Session implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): Session;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Session): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: Session, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: Session, _writer: BinaryWriter): void;
    private _sessionId?;
    private _node?;
    private _device?;
    private _ip?;
    private _createdOn?;
    private _platform?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Session to deeply clone from
     */
    constructor(_value?: RecursivePartial<Session.AsObject>);
    get sessionId(): string | undefined;
    set sessionId(value: string | undefined);
    get node(): string | undefined;
    set node(value: string | undefined);
    get device(): string | undefined;
    set device(value: string | undefined);
    get ip(): string | undefined;
    set ip(value: string | undefined);
    get createdOn(): string | undefined;
    set createdOn(value: string | undefined);
    get platform(): protoPubV1Models000.Platform | undefined;
    set platform(value: protoPubV1Models000.Platform | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Session.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): Session.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): Session.AsProtobufJSON;
}
export declare module Session {
    /**
     * Standard JavaScript object representation for Session
     */
    interface AsObject {
        sessionId?: string;
        node?: string;
        device?: string;
        ip?: string;
        createdOn?: string;
        platform?: protoPubV1Models000.Platform.AsObject;
    }
    /**
     * Protobuf JSON representation for Session
     */
    interface AsProtobufJSON {
        sessionId?: string;
        node?: string;
        device?: string;
        ip?: string;
        createdOn?: string;
        platform?: protoPubV1Models000.Platform.AsProtobufJSON | null;
    }
}
