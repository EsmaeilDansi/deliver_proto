import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as protoPubV1Models001 from '../../pub/v1/models/uid.pb';
/**
 * Message implementation for proto.pub.v1.broadcast.BroadcastInfo
 */
export declare class BroadcastInfo implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): BroadcastInfo;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: BroadcastInfo): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: BroadcastInfo, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: BroadcastInfo, _writer: BinaryWriter): void;
    private _name?;
    private _info?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of BroadcastInfo to deeply clone from
     */
    constructor(_value?: RecursivePartial<BroadcastInfo.AsObject>);
    get name(): string | undefined;
    set name(value: string | undefined);
    get info(): string | undefined;
    set info(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): BroadcastInfo.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): BroadcastInfo.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): BroadcastInfo.AsProtobufJSON;
}
export declare module BroadcastInfo {
    /**
     * Standard JavaScript object representation for BroadcastInfo
     */
    interface AsObject {
        name?: string;
        info?: string;
    }
    /**
     * Protobuf JSON representation for BroadcastInfo
     */
    interface AsProtobufJSON {
        name?: string;
        info?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.broadcast.CreateBroadcastReq
 */
export declare class CreateBroadcastReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): CreateBroadcastReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CreateBroadcastReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: CreateBroadcastReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: CreateBroadcastReq, _writer: BinaryWriter): void;
    private _name?;
    private _info?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CreateBroadcastReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<CreateBroadcastReq.AsObject>);
    get name(): string | undefined;
    set name(value: string | undefined);
    get info(): string | undefined;
    set info(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): CreateBroadcastReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): CreateBroadcastReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): CreateBroadcastReq.AsProtobufJSON;
}
export declare module CreateBroadcastReq {
    /**
     * Standard JavaScript object representation for CreateBroadcastReq
     */
    interface AsObject {
        name?: string;
        info?: string;
    }
    /**
     * Protobuf JSON representation for CreateBroadcastReq
     */
    interface AsProtobufJSON {
        name?: string;
        info?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.broadcast.CreateBroadcastRes
 */
export declare class CreateBroadcastRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): CreateBroadcastRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CreateBroadcastRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: CreateBroadcastRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: CreateBroadcastRes, _writer: BinaryWriter): void;
    private _uid?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CreateBroadcastRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<CreateBroadcastRes.AsObject>);
    get uid(): protoPubV1Models001.Uid | undefined;
    set uid(value: protoPubV1Models001.Uid | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): CreateBroadcastRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): CreateBroadcastRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): CreateBroadcastRes.AsProtobufJSON;
}
export declare module CreateBroadcastRes {
    /**
     * Standard JavaScript object representation for CreateBroadcastRes
     */
    interface AsObject {
        uid?: protoPubV1Models001.Uid.AsObject;
    }
    /**
     * Protobuf JSON representation for CreateBroadcastRes
     */
    interface AsProtobufJSON {
        uid?: protoPubV1Models001.Uid.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.broadcast.ModifyBroadcastReq
 */
export declare class ModifyBroadcastReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ModifyBroadcastReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ModifyBroadcastReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ModifyBroadcastReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ModifyBroadcastReq, _writer: BinaryWriter): void;
    private _uid?;
    private _info?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ModifyBroadcastReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<ModifyBroadcastReq.AsObject>);
    get uid(): protoPubV1Models001.Uid | undefined;
    set uid(value: protoPubV1Models001.Uid | undefined);
    get info(): BroadcastInfo | undefined;
    set info(value: BroadcastInfo | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ModifyBroadcastReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ModifyBroadcastReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ModifyBroadcastReq.AsProtobufJSON;
}
export declare module ModifyBroadcastReq {
    /**
     * Standard JavaScript object representation for ModifyBroadcastReq
     */
    interface AsObject {
        uid?: protoPubV1Models001.Uid.AsObject;
        info?: BroadcastInfo.AsObject;
    }
    /**
     * Protobuf JSON representation for ModifyBroadcastReq
     */
    interface AsProtobufJSON {
        uid?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        info?: BroadcastInfo.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.broadcast.ModifyBroadcastRes
 */
export declare class ModifyBroadcastRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ModifyBroadcastRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ModifyBroadcastRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ModifyBroadcastRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ModifyBroadcastRes, _writer: BinaryWriter): void;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ModifyBroadcastRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<ModifyBroadcastRes.AsObject>);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ModifyBroadcastRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ModifyBroadcastRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ModifyBroadcastRes.AsProtobufJSON;
}
export declare module ModifyBroadcastRes {
    /**
     * Standard JavaScript object representation for ModifyBroadcastRes
     */
    interface AsObject {
    }
    /**
     * Protobuf JSON representation for ModifyBroadcastRes
     */
    interface AsProtobufJSON {
    }
}
/**
 * Message implementation for proto.pub.v1.broadcast.RemoveBroadcastReq
 */
export declare class RemoveBroadcastReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): RemoveBroadcastReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: RemoveBroadcastReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: RemoveBroadcastReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: RemoveBroadcastReq, _writer: BinaryWriter): void;
    private _uid?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of RemoveBroadcastReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<RemoveBroadcastReq.AsObject>);
    get uid(): protoPubV1Models001.Uid | undefined;
    set uid(value: protoPubV1Models001.Uid | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): RemoveBroadcastReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): RemoveBroadcastReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): RemoveBroadcastReq.AsProtobufJSON;
}
export declare module RemoveBroadcastReq {
    /**
     * Standard JavaScript object representation for RemoveBroadcastReq
     */
    interface AsObject {
        uid?: protoPubV1Models001.Uid.AsObject;
    }
    /**
     * Protobuf JSON representation for RemoveBroadcastReq
     */
    interface AsProtobufJSON {
        uid?: protoPubV1Models001.Uid.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.broadcast.RemoveBroadcastRes
 */
export declare class RemoveBroadcastRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): RemoveBroadcastRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: RemoveBroadcastRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: RemoveBroadcastRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: RemoveBroadcastRes, _writer: BinaryWriter): void;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of RemoveBroadcastRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<RemoveBroadcastRes.AsObject>);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): RemoveBroadcastRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): RemoveBroadcastRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): RemoveBroadcastRes.AsProtobufJSON;
}
export declare module RemoveBroadcastRes {
    /**
     * Standard JavaScript object representation for RemoveBroadcastRes
     */
    interface AsObject {
    }
    /**
     * Protobuf JSON representation for RemoveBroadcastRes
     */
    interface AsProtobufJSON {
    }
}
/**
 * Message implementation for proto.pub.v1.broadcast.AddMembersReq
 */
export declare class AddMembersReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): AddMembersReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: AddMembersReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: AddMembersReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: AddMembersReq, _writer: BinaryWriter): void;
    private _broadcast?;
    private _members?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of AddMembersReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<AddMembersReq.AsObject>);
    get broadcast(): protoPubV1Models001.Uid | undefined;
    set broadcast(value: protoPubV1Models001.Uid | undefined);
    get members(): protoPubV1Models001.Uid[] | undefined;
    set members(value: protoPubV1Models001.Uid[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): AddMembersReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): AddMembersReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): AddMembersReq.AsProtobufJSON;
}
export declare module AddMembersReq {
    /**
     * Standard JavaScript object representation for AddMembersReq
     */
    interface AsObject {
        broadcast?: protoPubV1Models001.Uid.AsObject;
        members?: protoPubV1Models001.Uid.AsObject[];
    }
    /**
     * Protobuf JSON representation for AddMembersReq
     */
    interface AsProtobufJSON {
        broadcast?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        members?: protoPubV1Models001.Uid.AsProtobufJSON[] | null;
    }
}
/**
 * Message implementation for proto.pub.v1.broadcast.AddMembersRes
 */
export declare class AddMembersRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): AddMembersRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: AddMembersRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: AddMembersRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: AddMembersRes, _writer: BinaryWriter): void;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of AddMembersRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<AddMembersRes.AsObject>);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): AddMembersRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): AddMembersRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): AddMembersRes.AsProtobufJSON;
}
export declare module AddMembersRes {
    /**
     * Standard JavaScript object representation for AddMembersRes
     */
    interface AsObject {
    }
    /**
     * Protobuf JSON representation for AddMembersRes
     */
    interface AsProtobufJSON {
    }
}
/**
 * Message implementation for proto.pub.v1.broadcast.KickMembersReq
 */
export declare class KickMembersReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): KickMembersReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: KickMembersReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: KickMembersReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: KickMembersReq, _writer: BinaryWriter): void;
    private _broadcast?;
    private _members?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of KickMembersReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<KickMembersReq.AsObject>);
    get broadcast(): protoPubV1Models001.Uid | undefined;
    set broadcast(value: protoPubV1Models001.Uid | undefined);
    get members(): protoPubV1Models001.Uid[] | undefined;
    set members(value: protoPubV1Models001.Uid[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): KickMembersReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): KickMembersReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): KickMembersReq.AsProtobufJSON;
}
export declare module KickMembersReq {
    /**
     * Standard JavaScript object representation for KickMembersReq
     */
    interface AsObject {
        broadcast?: protoPubV1Models001.Uid.AsObject;
        members?: protoPubV1Models001.Uid.AsObject[];
    }
    /**
     * Protobuf JSON representation for KickMembersReq
     */
    interface AsProtobufJSON {
        broadcast?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        members?: protoPubV1Models001.Uid.AsProtobufJSON[] | null;
    }
}
/**
 * Message implementation for proto.pub.v1.broadcast.KickMembersRes
 */
export declare class KickMembersRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): KickMembersRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: KickMembersRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: KickMembersRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: KickMembersRes, _writer: BinaryWriter): void;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of KickMembersRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<KickMembersRes.AsObject>);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): KickMembersRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): KickMembersRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): KickMembersRes.AsProtobufJSON;
}
export declare module KickMembersRes {
    /**
     * Standard JavaScript object representation for KickMembersRes
     */
    interface AsObject {
    }
    /**
     * Protobuf JSON representation for KickMembersRes
     */
    interface AsProtobufJSON {
    }
}
/**
 * Message implementation for proto.pub.v1.broadcast.GetBroadcastReq
 */
export declare class GetBroadcastReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetBroadcastReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetBroadcastReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetBroadcastReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetBroadcastReq, _writer: BinaryWriter): void;
    private _uid?;
    private _token?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetBroadcastReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetBroadcastReq.AsObject>);
    get uid(): protoPubV1Models001.Uid | undefined;
    set uid(value: protoPubV1Models001.Uid | undefined);
    get token(): string | undefined;
    set token(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetBroadcastReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetBroadcastReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetBroadcastReq.AsProtobufJSON;
}
export declare module GetBroadcastReq {
    /**
     * Standard JavaScript object representation for GetBroadcastReq
     */
    interface AsObject {
        uid?: protoPubV1Models001.Uid.AsObject;
        token?: string;
    }
    /**
     * Protobuf JSON representation for GetBroadcastReq
     */
    interface AsProtobufJSON {
        uid?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        token?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.broadcast.GetBroadcastRes
 */
export declare class GetBroadcastRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetBroadcastRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetBroadcastRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetBroadcastRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetBroadcastRes, _writer: BinaryWriter): void;
    private _info?;
    private _population?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetBroadcastRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetBroadcastRes.AsObject>);
    get info(): BroadcastInfo | undefined;
    set info(value: BroadcastInfo | undefined);
    get population(): string | undefined;
    set population(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetBroadcastRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetBroadcastRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetBroadcastRes.AsProtobufJSON;
}
export declare module GetBroadcastRes {
    /**
     * Standard JavaScript object representation for GetBroadcastRes
     */
    interface AsObject {
        info?: BroadcastInfo.AsObject;
        population?: string;
    }
    /**
     * Protobuf JSON representation for GetBroadcastRes
     */
    interface AsProtobufJSON {
        info?: BroadcastInfo.AsProtobufJSON | null;
        population?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.broadcast.GetMembersReq
 */
export declare class GetMembersReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetMembersReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetMembersReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetMembersReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetMembersReq, _writer: BinaryWriter): void;
    private _uid?;
    private _pointer?;
    private _limit?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetMembersReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetMembersReq.AsObject>);
    get uid(): protoPubV1Models001.Uid | undefined;
    set uid(value: protoPubV1Models001.Uid | undefined);
    get pointer(): number | undefined;
    set pointer(value: number | undefined);
    get limit(): number | undefined;
    set limit(value: number | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetMembersReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetMembersReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetMembersReq.AsProtobufJSON;
}
export declare module GetMembersReq {
    /**
     * Standard JavaScript object representation for GetMembersReq
     */
    interface AsObject {
        uid?: protoPubV1Models001.Uid.AsObject;
        pointer?: number;
        limit?: number;
    }
    /**
     * Protobuf JSON representation for GetMembersReq
     */
    interface AsProtobufJSON {
        uid?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        pointer?: number;
        limit?: number;
    }
}
/**
 * Message implementation for proto.pub.v1.broadcast.GetMembersRes
 */
export declare class GetMembersRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetMembersRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetMembersRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetMembersRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetMembersRes, _writer: BinaryWriter): void;
    private _members?;
    private _finished?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetMembersRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetMembersRes.AsObject>);
    get members(): protoPubV1Models001.Uid[] | undefined;
    set members(value: protoPubV1Models001.Uid[] | undefined);
    get finished(): boolean | undefined;
    set finished(value: boolean | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetMembersRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetMembersRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetMembersRes.AsProtobufJSON;
}
export declare module GetMembersRes {
    /**
     * Standard JavaScript object representation for GetMembersRes
     */
    interface AsObject {
        members?: protoPubV1Models001.Uid.AsObject[];
        finished?: boolean;
    }
    /**
     * Protobuf JSON representation for GetMembersRes
     */
    interface AsProtobufJSON {
        members?: protoPubV1Models001.Uid.AsProtobufJSON[] | null;
        finished?: boolean;
    }
}
