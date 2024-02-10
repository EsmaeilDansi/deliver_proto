import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as protoPubV1Models001 from '../../pub/v1/models/sticker.pb';
/**
 * Message implementation for proto.pub.v1.sticker.GetStickerSetByUUIDReq
 */
export declare class GetStickerSetByUUIDReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetStickerSetByUUIDReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetStickerSetByUUIDReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetStickerSetByUUIDReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetStickerSetByUUIDReq, _writer: BinaryWriter): void;
    private _uuid?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetStickerSetByUUIDReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetStickerSetByUUIDReq.AsObject>);
    get uuid(): string | undefined;
    set uuid(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetStickerSetByUUIDReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetStickerSetByUUIDReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetStickerSetByUUIDReq.AsProtobufJSON;
}
export declare module GetStickerSetByUUIDReq {
    /**
     * Standard JavaScript object representation for GetStickerSetByUUIDReq
     */
    interface AsObject {
        uuid?: string;
    }
    /**
     * Protobuf JSON representation for GetStickerSetByUUIDReq
     */
    interface AsProtobufJSON {
        uuid?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.sticker.GetStickerSetByUUIDRes
 */
export declare class GetStickerSetByUUIDRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetStickerSetByUUIDRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetStickerSetByUUIDRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetStickerSetByUUIDRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetStickerSetByUUIDRes, _writer: BinaryWriter): void;
    private _set?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetStickerSetByUUIDRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetStickerSetByUUIDRes.AsObject>);
    get set(): protoPubV1Models001.StickerSet | undefined;
    set set(value: protoPubV1Models001.StickerSet | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetStickerSetByUUIDRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetStickerSetByUUIDRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetStickerSetByUUIDRes.AsProtobufJSON;
}
export declare module GetStickerSetByUUIDRes {
    /**
     * Standard JavaScript object representation for GetStickerSetByUUIDRes
     */
    interface AsObject {
        set?: protoPubV1Models001.StickerSet.AsObject;
    }
    /**
     * Protobuf JSON representation for GetStickerSetByUUIDRes
     */
    interface AsProtobufJSON {
        set?: protoPubV1Models001.StickerSet.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.sticker.GetStickerSetByIDReq
 */
export declare class GetStickerSetByIDReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetStickerSetByIDReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetStickerSetByIDReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetStickerSetByIDReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetStickerSetByIDReq, _writer: BinaryWriter): void;
    private _id?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetStickerSetByIDReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetStickerSetByIDReq.AsObject>);
    get id(): string | undefined;
    set id(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetStickerSetByIDReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetStickerSetByIDReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetStickerSetByIDReq.AsProtobufJSON;
}
export declare module GetStickerSetByIDReq {
    /**
     * Standard JavaScript object representation for GetStickerSetByIDReq
     */
    interface AsObject {
        id?: string;
    }
    /**
     * Protobuf JSON representation for GetStickerSetByIDReq
     */
    interface AsProtobufJSON {
        id?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.sticker.GetStickerSetByIDRes
 */
export declare class GetStickerSetByIDRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetStickerSetByIDRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetStickerSetByIDRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetStickerSetByIDRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetStickerSetByIDRes, _writer: BinaryWriter): void;
    private _set?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetStickerSetByIDRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetStickerSetByIDRes.AsObject>);
    get set(): protoPubV1Models001.StickerSet | undefined;
    set set(value: protoPubV1Models001.StickerSet | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetStickerSetByIDRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetStickerSetByIDRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetStickerSetByIDRes.AsProtobufJSON;
}
export declare module GetStickerSetByIDRes {
    /**
     * Standard JavaScript object representation for GetStickerSetByIDRes
     */
    interface AsObject {
        set?: protoPubV1Models001.StickerSet.AsObject;
    }
    /**
     * Protobuf JSON representation for GetStickerSetByIDRes
     */
    interface AsProtobufJSON {
        set?: protoPubV1Models001.StickerSet.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.sticker.GetTrendSetsReq
 */
export declare class GetTrendSetsReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetTrendSetsReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetTrendSetsReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetTrendSetsReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetTrendSetsReq, _writer: BinaryWriter): void;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetTrendSetsReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetTrendSetsReq.AsObject>);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetTrendSetsReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetTrendSetsReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetTrendSetsReq.AsProtobufJSON;
}
export declare module GetTrendSetsReq {
    /**
     * Standard JavaScript object representation for GetTrendSetsReq
     */
    interface AsObject {
    }
    /**
     * Protobuf JSON representation for GetTrendSetsReq
     */
    interface AsProtobufJSON {
    }
}
/**
 * Message implementation for proto.pub.v1.sticker.GetTrendSetsRes
 */
export declare class GetTrendSetsRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetTrendSetsRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetTrendSetsRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetTrendSetsRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetTrendSetsRes, _writer: BinaryWriter): void;
    private _setIdList?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetTrendSetsRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetTrendSetsRes.AsObject>);
    get setIdList(): string[] | undefined;
    set setIdList(value: string[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetTrendSetsRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetTrendSetsRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetTrendSetsRes.AsProtobufJSON;
}
export declare module GetTrendSetsRes {
    /**
     * Standard JavaScript object representation for GetTrendSetsRes
     */
    interface AsObject {
        setIdList?: string[];
    }
    /**
     * Protobuf JSON representation for GetTrendSetsRes
     */
    interface AsProtobufJSON {
        setIdList?: string[];
    }
}
