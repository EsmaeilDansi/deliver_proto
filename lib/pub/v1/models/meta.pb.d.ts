import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as protoPubV1Models001 from '../../../pub/v1/models/uid.pb';
import * as protoPubV1Models002 from '../../../pub/v1/models/file.pb';
import * as protoPubV1Models003 from '../../../pub/v1/models/call.pb';
/**
 * Message implementation for proto.pub.v1.models.Meta
 */
export declare class Meta implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): Meta;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Meta): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: Meta, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: Meta, _writer: BinaryWriter): void;
    private _createdOn?;
    private _index?;
    private _sender?;
    private _messageId?;
    private _encrypted?;
    private _file?;
    private _link?;
    private _callInfo?;
    private _metaType;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Meta to deeply clone from
     */
    constructor(_value?: RecursivePartial<Meta.AsObject>);
    get createdOn(): string | undefined;
    set createdOn(value: string | undefined);
    get index(): string | undefined;
    set index(value: string | undefined);
    get sender(): protoPubV1Models001.Uid | undefined;
    set sender(value: protoPubV1Models001.Uid | undefined);
    get messageId(): string | undefined;
    set messageId(value: string | undefined);
    get encrypted(): boolean | undefined;
    set encrypted(value: boolean | undefined);
    get file(): protoPubV1Models002.File | undefined;
    set file(value: protoPubV1Models002.File | undefined);
    get link(): Link | undefined;
    set link(value: Link | undefined);
    get callInfo(): protoPubV1Models003.CallInfo | undefined;
    set callInfo(value: protoPubV1Models003.CallInfo | undefined);
    get metaType(): Meta.MetaTypeCase;
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Meta.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): Meta.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): Meta.AsProtobufJSON;
}
export declare module Meta {
    /**
     * Standard JavaScript object representation for Meta
     */
    interface AsObject {
        createdOn?: string;
        index?: string;
        sender?: protoPubV1Models001.Uid.AsObject;
        messageId?: string;
        encrypted?: boolean;
        file?: protoPubV1Models002.File.AsObject;
        link?: Link.AsObject;
        callInfo?: protoPubV1Models003.CallInfo.AsObject;
    }
    /**
     * Protobuf JSON representation for Meta
     */
    interface AsProtobufJSON {
        createdOn?: string;
        index?: string;
        sender?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        messageId?: string;
        encrypted?: boolean;
        file?: protoPubV1Models002.File.AsProtobufJSON | null;
        link?: Link.AsProtobufJSON | null;
        callInfo?: protoPubV1Models003.CallInfo.AsProtobufJSON | null;
    }
    enum MetaTypeCase {
        none = 0,
        file = 1,
        link = 2,
        callInfo = 3
    }
}
/**
 * Message implementation for proto.pub.v1.models.Link
 */
export declare class Link implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): Link;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Link): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: Link, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: Link, _writer: BinaryWriter): void;
    private _urls?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Link to deeply clone from
     */
    constructor(_value?: RecursivePartial<Link.AsObject>);
    get urls(): string[] | undefined;
    set urls(value: string[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Link.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): Link.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): Link.AsProtobufJSON;
}
export declare module Link {
    /**
     * Standard JavaScript object representation for Link
     */
    interface AsObject {
        urls?: string[];
    }
    /**
     * Protobuf JSON representation for Link
     */
    interface AsProtobufJSON {
        urls?: string[];
    }
}
