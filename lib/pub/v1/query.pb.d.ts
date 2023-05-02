import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as protoPubV1Models000 from '../../pub/v1/models/uid.pb';
import * as protoPubV1Models010 from '../../pub/v1/models/call.pb';
import * as protoPubV1Models012 from '../../pub/v1/models/categories.pb';
import * as protoPubV1Models013 from '../../pub/v1/models/message.pb';
import * as protoPubV1Models014 from '../../pub/v1/models/media.pb';
import * as protoPubV1Models015 from '../../pub/v1/models/meta.pb';
import * as protoPubV1Models016 from '../../pub/v1/models/seen.pb';
import * as protoPubV1Models017 from '../../pub/v1/models/room-metadata.pb';
import * as protoPubV1Models018 from '../../pub/v1/models/avatar.pb';
export declare enum QueryDirection {
    FORWARD_INCLUSIVE = 0,
    BACKWARD_INCLUSIVE = 1
}
/**
 * Message implementation for proto.pub.v1.query.IdIsAvailableReq
 */
export declare class IdIsAvailableReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): IdIsAvailableReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: IdIsAvailableReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: IdIsAvailableReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: IdIsAvailableReq, _writer: BinaryWriter): void;
    private _id?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of IdIsAvailableReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<IdIsAvailableReq.AsObject>);
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
    toObject(): IdIsAvailableReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): IdIsAvailableReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): IdIsAvailableReq.AsProtobufJSON;
}
export declare module IdIsAvailableReq {
    /**
     * Standard JavaScript object representation for IdIsAvailableReq
     */
    interface AsObject {
        id?: string;
    }
    /**
     * Protobuf JSON representation for IdIsAvailableReq
     */
    interface AsProtobufJSON {
        id?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.query.IdIsAvailableRes
 */
export declare class IdIsAvailableRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): IdIsAvailableRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: IdIsAvailableRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: IdIsAvailableRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: IdIsAvailableRes, _writer: BinaryWriter): void;
    private _isAvailable?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of IdIsAvailableRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<IdIsAvailableRes.AsObject>);
    get isAvailable(): boolean | undefined;
    set isAvailable(value: boolean | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): IdIsAvailableRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): IdIsAvailableRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): IdIsAvailableRes.AsProtobufJSON;
}
export declare module IdIsAvailableRes {
    /**
     * Standard JavaScript object representation for IdIsAvailableRes
     */
    interface AsObject {
        isAvailable?: boolean;
    }
    /**
     * Protobuf JSON representation for IdIsAvailableRes
     */
    interface AsProtobufJSON {
        isAvailable?: boolean;
    }
}
/**
 * Message implementation for proto.pub.v1.query.SetIdReq
 */
export declare class SetIdReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): SetIdReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: SetIdReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: SetIdReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: SetIdReq, _writer: BinaryWriter): void;
    private _id?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of SetIdReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<SetIdReq.AsObject>);
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
    toObject(): SetIdReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): SetIdReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): SetIdReq.AsProtobufJSON;
}
export declare module SetIdReq {
    /**
     * Standard JavaScript object representation for SetIdReq
     */
    interface AsObject {
        id?: string;
    }
    /**
     * Protobuf JSON representation for SetIdReq
     */
    interface AsProtobufJSON {
        id?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.query.SetIdRes
 */
export declare class SetIdRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): SetIdRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: SetIdRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: SetIdRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: SetIdRes, _writer: BinaryWriter): void;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of SetIdRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<SetIdRes.AsObject>);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): SetIdRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): SetIdRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): SetIdRes.AsProtobufJSON;
}
export declare module SetIdRes {
    /**
     * Standard JavaScript object representation for SetIdRes
     */
    interface AsObject {
    }
    /**
     * Protobuf JSON representation for SetIdRes
     */
    interface AsProtobufJSON {
    }
}
/**
 * Message implementation for proto.pub.v1.query.SubscribeOnGroupActivityReq
 */
export declare class SubscribeOnGroupActivityReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): SubscribeOnGroupActivityReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: SubscribeOnGroupActivityReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: SubscribeOnGroupActivityReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: SubscribeOnGroupActivityReq, _writer: BinaryWriter): void;
    private _uid?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of SubscribeOnGroupActivityReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<SubscribeOnGroupActivityReq.AsObject>);
    get uid(): protoPubV1Models000.Uid | undefined;
    set uid(value: protoPubV1Models000.Uid | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): SubscribeOnGroupActivityReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): SubscribeOnGroupActivityReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): SubscribeOnGroupActivityReq.AsProtobufJSON;
}
export declare module SubscribeOnGroupActivityReq {
    /**
     * Standard JavaScript object representation for SubscribeOnGroupActivityReq
     */
    interface AsObject {
        uid?: protoPubV1Models000.Uid.AsObject;
    }
    /**
     * Protobuf JSON representation for SubscribeOnGroupActivityReq
     */
    interface AsProtobufJSON {
        uid?: protoPubV1Models000.Uid.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.query.SubscribeOnGroupActivityRes
 */
export declare class SubscribeOnGroupActivityRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): SubscribeOnGroupActivityRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: SubscribeOnGroupActivityRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: SubscribeOnGroupActivityRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: SubscribeOnGroupActivityRes, _writer: BinaryWriter): void;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of SubscribeOnGroupActivityRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<SubscribeOnGroupActivityRes.AsObject>);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): SubscribeOnGroupActivityRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): SubscribeOnGroupActivityRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): SubscribeOnGroupActivityRes.AsProtobufJSON;
}
export declare module SubscribeOnGroupActivityRes {
    /**
     * Standard JavaScript object representation for SubscribeOnGroupActivityRes
     */
    interface AsObject {
    }
    /**
     * Protobuf JSON representation for SubscribeOnGroupActivityRes
     */
    interface AsProtobufJSON {
    }
}
/**
 * Message implementation for proto.pub.v1.query.BlockUidReq
 */
export declare class BlockUidReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): BlockUidReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: BlockUidReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: BlockUidReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: BlockUidReq, _writer: BinaryWriter): void;
    private _uid?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of BlockUidReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<BlockUidReq.AsObject>);
    get uid(): protoPubV1Models000.Uid | undefined;
    set uid(value: protoPubV1Models000.Uid | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): BlockUidReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): BlockUidReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): BlockUidReq.AsProtobufJSON;
}
export declare module BlockUidReq {
    /**
     * Standard JavaScript object representation for BlockUidReq
     */
    interface AsObject {
        uid?: protoPubV1Models000.Uid.AsObject;
    }
    /**
     * Protobuf JSON representation for BlockUidReq
     */
    interface AsProtobufJSON {
        uid?: protoPubV1Models000.Uid.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.query.BlockUidRes
 */
export declare class BlockUidRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): BlockUidRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: BlockUidRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: BlockUidRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: BlockUidRes, _writer: BinaryWriter): void;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of BlockUidRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<BlockUidRes.AsObject>);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): BlockUidRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): BlockUidRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): BlockUidRes.AsProtobufJSON;
}
export declare module BlockUidRes {
    /**
     * Standard JavaScript object representation for BlockUidRes
     */
    interface AsObject {
    }
    /**
     * Protobuf JSON representation for BlockUidRes
     */
    interface AsProtobufJSON {
    }
}
/**
 * Message implementation for proto.pub.v1.query.GetBlockedListReq
 */
export declare class GetBlockedListReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetBlockedListReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetBlockedListReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetBlockedListReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetBlockedListReq, _writer: BinaryWriter): void;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetBlockedListReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetBlockedListReq.AsObject>);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetBlockedListReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetBlockedListReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetBlockedListReq.AsProtobufJSON;
}
export declare module GetBlockedListReq {
    /**
     * Standard JavaScript object representation for GetBlockedListReq
     */
    interface AsObject {
    }
    /**
     * Protobuf JSON representation for GetBlockedListReq
     */
    interface AsProtobufJSON {
    }
}
/**
 * Message implementation for proto.pub.v1.query.GetBlockedListRes
 */
export declare class GetBlockedListRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetBlockedListRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetBlockedListRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetBlockedListRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetBlockedListRes, _writer: BinaryWriter): void;
    private _uidList?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetBlockedListRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetBlockedListRes.AsObject>);
    get uidList(): protoPubV1Models000.Uid[] | undefined;
    set uidList(value: protoPubV1Models000.Uid[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetBlockedListRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetBlockedListRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetBlockedListRes.AsProtobufJSON;
}
export declare module GetBlockedListRes {
    /**
     * Standard JavaScript object representation for GetBlockedListRes
     */
    interface AsObject {
        uidList?: protoPubV1Models000.Uid.AsObject[];
    }
    /**
     * Protobuf JSON representation for GetBlockedListRes
     */
    interface AsProtobufJSON {
        uidList?: protoPubV1Models000.Uid.AsProtobufJSON[] | null;
    }
}
/**
 * Message implementation for proto.pub.v1.query.UnblockUidReq
 */
export declare class UnblockUidReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): UnblockUidReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: UnblockUidReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: UnblockUidReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: UnblockUidReq, _writer: BinaryWriter): void;
    private _uid?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of UnblockUidReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<UnblockUidReq.AsObject>);
    get uid(): protoPubV1Models000.Uid | undefined;
    set uid(value: protoPubV1Models000.Uid | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): UnblockUidReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): UnblockUidReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): UnblockUidReq.AsProtobufJSON;
}
export declare module UnblockUidReq {
    /**
     * Standard JavaScript object representation for UnblockUidReq
     */
    interface AsObject {
        uid?: protoPubV1Models000.Uid.AsObject;
    }
    /**
     * Protobuf JSON representation for UnblockUidReq
     */
    interface AsProtobufJSON {
        uid?: protoPubV1Models000.Uid.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.query.UnblockUidRes
 */
export declare class UnblockUidRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): UnblockUidRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: UnblockUidRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: UnblockUidRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: UnblockUidRes, _writer: BinaryWriter): void;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of UnblockUidRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<UnblockUidRes.AsObject>);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): UnblockUidRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): UnblockUidRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): UnblockUidRes.AsProtobufJSON;
}
export declare module UnblockUidRes {
    /**
     * Standard JavaScript object representation for UnblockUidRes
     */
    interface AsObject {
    }
    /**
     * Protobuf JSON representation for UnblockUidRes
     */
    interface AsProtobufJSON {
    }
}
/**
 * Message implementation for proto.pub.v1.query.ReportReq
 */
export declare class ReportReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ReportReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ReportReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ReportReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ReportReq, _writer: BinaryWriter): void;
    private _uid?;
    private _type?;
    private _reason?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ReportReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<ReportReq.AsObject>);
    get uid(): protoPubV1Models000.Uid | undefined;
    set uid(value: protoPubV1Models000.Uid | undefined);
    get type(): string | undefined;
    set type(value: string | undefined);
    get reason(): string | undefined;
    set reason(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ReportReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ReportReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ReportReq.AsProtobufJSON;
}
export declare module ReportReq {
    /**
     * Standard JavaScript object representation for ReportReq
     */
    interface AsObject {
        uid?: protoPubV1Models000.Uid.AsObject;
        type?: string;
        reason?: string;
    }
    /**
     * Protobuf JSON representation for ReportReq
     */
    interface AsProtobufJSON {
        uid?: protoPubV1Models000.Uid.AsProtobufJSON | null;
        type?: string;
        reason?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.query.ReportRes
 */
export declare class ReportRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ReportRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ReportRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ReportRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ReportRes, _writer: BinaryWriter): void;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ReportRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<ReportRes.AsObject>);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ReportRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ReportRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ReportRes.AsProtobufJSON;
}
export declare module ReportRes {
    /**
     * Standard JavaScript object representation for ReportRes
     */
    interface AsObject {
    }
    /**
     * Protobuf JSON representation for ReportRes
     */
    interface AsProtobufJSON {
    }
}
/**
 * Message implementation for proto.pub.v1.query.GetIdByUidReq
 */
export declare class GetIdByUidReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetIdByUidReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetIdByUidReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetIdByUidReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetIdByUidReq, _writer: BinaryWriter): void;
    private _uid?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetIdByUidReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetIdByUidReq.AsObject>);
    get uid(): protoPubV1Models000.Uid | undefined;
    set uid(value: protoPubV1Models000.Uid | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetIdByUidReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetIdByUidReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetIdByUidReq.AsProtobufJSON;
}
export declare module GetIdByUidReq {
    /**
     * Standard JavaScript object representation for GetIdByUidReq
     */
    interface AsObject {
        uid?: protoPubV1Models000.Uid.AsObject;
    }
    /**
     * Protobuf JSON representation for GetIdByUidReq
     */
    interface AsProtobufJSON {
        uid?: protoPubV1Models000.Uid.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.query.GetIdByUidRes
 */
export declare class GetIdByUidRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetIdByUidRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetIdByUidRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetIdByUidRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetIdByUidRes, _writer: BinaryWriter): void;
    private _id?;
    private _isVerified?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetIdByUidRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetIdByUidRes.AsObject>);
    get id(): string | undefined;
    set id(value: string | undefined);
    get isVerified(): boolean | undefined;
    set isVerified(value: boolean | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetIdByUidRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetIdByUidRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetIdByUidRes.AsProtobufJSON;
}
export declare module GetIdByUidRes {
    /**
     * Standard JavaScript object representation for GetIdByUidRes
     */
    interface AsObject {
        id?: string;
        isVerified?: boolean;
    }
    /**
     * Protobuf JSON representation for GetIdByUidRes
     */
    interface AsProtobufJSON {
        id?: string;
        isVerified?: boolean;
    }
}
/**
 * Message implementation for proto.pub.v1.query.GetUidByIdReq
 */
export declare class GetUidByIdReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetUidByIdReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetUidByIdReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetUidByIdReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetUidByIdReq, _writer: BinaryWriter): void;
    private _id?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetUidByIdReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetUidByIdReq.AsObject>);
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
    toObject(): GetUidByIdReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetUidByIdReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetUidByIdReq.AsProtobufJSON;
}
export declare module GetUidByIdReq {
    /**
     * Standard JavaScript object representation for GetUidByIdReq
     */
    interface AsObject {
        id?: string;
    }
    /**
     * Protobuf JSON representation for GetUidByIdReq
     */
    interface AsProtobufJSON {
        id?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.query.GetUidByIdRes
 */
export declare class GetUidByIdRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetUidByIdRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetUidByIdRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetUidByIdRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetUidByIdRes, _writer: BinaryWriter): void;
    private _uid?;
    private _isVerified?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetUidByIdRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetUidByIdRes.AsObject>);
    get uid(): protoPubV1Models000.Uid | undefined;
    set uid(value: protoPubV1Models000.Uid | undefined);
    get isVerified(): boolean | undefined;
    set isVerified(value: boolean | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetUidByIdRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetUidByIdRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetUidByIdRes.AsProtobufJSON;
}
export declare module GetUidByIdRes {
    /**
     * Standard JavaScript object representation for GetUidByIdRes
     */
    interface AsObject {
        uid?: protoPubV1Models000.Uid.AsObject;
        isVerified?: boolean;
    }
    /**
     * Protobuf JSON representation for GetUidByIdRes
     */
    interface AsProtobufJSON {
        uid?: protoPubV1Models000.Uid.AsProtobufJSON | null;
        isVerified?: boolean;
    }
}
/**
 * Message implementation for proto.pub.v1.query.GetLastActivityReq
 */
export declare class GetLastActivityReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetLastActivityReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetLastActivityReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetLastActivityReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetLastActivityReq, _writer: BinaryWriter): void;
    private _uid?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetLastActivityReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetLastActivityReq.AsObject>);
    get uid(): protoPubV1Models000.Uid | undefined;
    set uid(value: protoPubV1Models000.Uid | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetLastActivityReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetLastActivityReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetLastActivityReq.AsProtobufJSON;
}
export declare module GetLastActivityReq {
    /**
     * Standard JavaScript object representation for GetLastActivityReq
     */
    interface AsObject {
        uid?: protoPubV1Models000.Uid.AsObject;
    }
    /**
     * Protobuf JSON representation for GetLastActivityReq
     */
    interface AsProtobufJSON {
        uid?: protoPubV1Models000.Uid.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.query.GetLastActivityRes
 */
export declare class GetLastActivityRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetLastActivityRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetLastActivityRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetLastActivityRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetLastActivityRes, _writer: BinaryWriter): void;
    private _lastActivityTime?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetLastActivityRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetLastActivityRes.AsObject>);
    get lastActivityTime(): string | undefined;
    set lastActivityTime(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetLastActivityRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetLastActivityRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetLastActivityRes.AsProtobufJSON;
}
export declare module GetLastActivityRes {
    /**
     * Standard JavaScript object representation for GetLastActivityRes
     */
    interface AsObject {
        lastActivityTime?: string;
    }
    /**
     * Protobuf JSON representation for GetLastActivityRes
     */
    interface AsProtobufJSON {
        lastActivityTime?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.query.SearchUidReq
 */
export declare class SearchUidReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): SearchUidReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: SearchUidReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: SearchUidReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: SearchUidReq, _writer: BinaryWriter): void;
    private _text?;
    private _filterByCategory?;
    private _category?;
    private _justSearchInId?;
    private _justSearchInName?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of SearchUidReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<SearchUidReq.AsObject>);
    get text(): string | undefined;
    set text(value: string | undefined);
    get filterByCategory(): boolean | undefined;
    set filterByCategory(value: boolean | undefined);
    get category(): protoPubV1Models012.Categories | undefined;
    set category(value: protoPubV1Models012.Categories | undefined);
    get justSearchInId(): boolean | undefined;
    set justSearchInId(value: boolean | undefined);
    get justSearchInName(): boolean | undefined;
    set justSearchInName(value: boolean | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): SearchUidReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): SearchUidReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): SearchUidReq.AsProtobufJSON;
}
export declare module SearchUidReq {
    /**
     * Standard JavaScript object representation for SearchUidReq
     */
    interface AsObject {
        text?: string;
        filterByCategory?: boolean;
        category?: protoPubV1Models012.Categories;
        justSearchInId?: boolean;
        justSearchInName?: boolean;
    }
    /**
     * Protobuf JSON representation for SearchUidReq
     */
    interface AsProtobufJSON {
        text?: string;
        filterByCategory?: boolean;
        category?: string;
        justSearchInId?: boolean;
        justSearchInName?: boolean;
    }
}
/**
 * Message implementation for proto.pub.v1.query.SearchUidRes
 */
export declare class SearchUidRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): SearchUidRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: SearchUidRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: SearchUidRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: SearchUidRes, _writer: BinaryWriter): void;
    private _itemList?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of SearchUidRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<SearchUidRes.AsObject>);
    get itemList(): SearchUidRes.SearchUidItem[] | undefined;
    set itemList(value: SearchUidRes.SearchUidItem[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): SearchUidRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): SearchUidRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): SearchUidRes.AsProtobufJSON;
}
export declare module SearchUidRes {
    /**
     * Standard JavaScript object representation for SearchUidRes
     */
    interface AsObject {
        itemList?: SearchUidRes.SearchUidItem.AsObject[];
    }
    /**
     * Protobuf JSON representation for SearchUidRes
     */
    interface AsProtobufJSON {
        itemList?: SearchUidRes.SearchUidItem.AsProtobufJSON[] | null;
    }
    /**
     * Message implementation for proto.pub.v1.query.SearchUidRes.SearchUidItem
     */
    class SearchUidItem implements GrpcMessage {
        static id: string;
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes: ByteSource): SearchUidItem;
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance: SearchUidItem): void;
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        static deserializeBinaryFromReader(_instance: SearchUidItem, _reader: BinaryReader): void;
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance: SearchUidItem, _writer: BinaryWriter): void;
        private _uid?;
        private _id?;
        private _name?;
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of SearchUidItem to deeply clone from
         */
        constructor(_value?: RecursivePartial<SearchUidItem.AsObject>);
        get uid(): protoPubV1Models000.Uid | undefined;
        set uid(value: protoPubV1Models000.Uid | undefined);
        get id(): string | undefined;
        set id(value: string | undefined);
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
        toObject(): SearchUidItem.AsObject;
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        toJSON(): SearchUidItem.AsObject;
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        toProtobufJSON(options?: ToProtobufJSONOptions): SearchUidItem.AsProtobufJSON;
    }
    module SearchUidItem {
        /**
         * Standard JavaScript object representation for SearchUidItem
         */
        interface AsObject {
            uid?: protoPubV1Models000.Uid.AsObject;
            id?: string;
            name?: string;
        }
        /**
         * Protobuf JSON representation for SearchUidItem
         */
        interface AsProtobufJSON {
            uid?: protoPubV1Models000.Uid.AsProtobufJSON | null;
            id?: string;
            name?: string;
        }
    }
}
/**
 * Message implementation for proto.pub.v1.query.FetchMessagesReq
 */
export declare class FetchMessagesReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): FetchMessagesReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: FetchMessagesReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: FetchMessagesReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: FetchMessagesReq, _writer: BinaryWriter): void;
    private _roomUid?;
    private _pointer?;
    private _type?;
    private _justNotHiddenMessages?;
    private _justHiddenMessages?;
    private _limit?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of FetchMessagesReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<FetchMessagesReq.AsObject>);
    get roomUid(): protoPubV1Models000.Uid | undefined;
    set roomUid(value: protoPubV1Models000.Uid | undefined);
    get pointer(): string | undefined;
    set pointer(value: string | undefined);
    get type(): FetchMessagesReq.Type | undefined;
    set type(value: FetchMessagesReq.Type | undefined);
    get justNotHiddenMessages(): boolean | undefined;
    set justNotHiddenMessages(value: boolean | undefined);
    get justHiddenMessages(): boolean | undefined;
    set justHiddenMessages(value: boolean | undefined);
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
    toObject(): FetchMessagesReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): FetchMessagesReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): FetchMessagesReq.AsProtobufJSON;
}
export declare module FetchMessagesReq {
    /**
     * Standard JavaScript object representation for FetchMessagesReq
     */
    interface AsObject {
        roomUid?: protoPubV1Models000.Uid.AsObject;
        pointer?: string;
        type?: FetchMessagesReq.Type;
        justNotHiddenMessages?: boolean;
        justHiddenMessages?: boolean;
        limit?: number;
    }
    /**
     * Protobuf JSON representation for FetchMessagesReq
     */
    interface AsProtobufJSON {
        roomUid?: protoPubV1Models000.Uid.AsProtobufJSON | null;
        pointer?: string;
        type?: string;
        justNotHiddenMessages?: boolean;
        justHiddenMessages?: boolean;
        limit?: number;
    }
    enum Type {
        FORWARD_FETCH = 0,
        BACKWARD_FETCH = 1
    }
}
/**
 * Message implementation for proto.pub.v1.query.FetchMessagesRes
 */
export declare class FetchMessagesRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): FetchMessagesRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: FetchMessagesRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: FetchMessagesRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: FetchMessagesRes, _writer: BinaryWriter): void;
    private _messages?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of FetchMessagesRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<FetchMessagesRes.AsObject>);
    get messages(): protoPubV1Models013.Message[] | undefined;
    set messages(value: protoPubV1Models013.Message[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): FetchMessagesRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): FetchMessagesRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): FetchMessagesRes.AsProtobufJSON;
}
export declare module FetchMessagesRes {
    /**
     * Standard JavaScript object representation for FetchMessagesRes
     */
    interface AsObject {
        messages?: protoPubV1Models013.Message.AsObject[];
    }
    /**
     * Protobuf JSON representation for FetchMessagesRes
     */
    interface AsProtobufJSON {
        messages?: protoPubV1Models013.Message.AsProtobufJSON[] | null;
    }
}
/**
 * Message implementation for proto.pub.v1.query.CountIsHiddenMessagesReq
 */
export declare class CountIsHiddenMessagesReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): CountIsHiddenMessagesReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CountIsHiddenMessagesReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: CountIsHiddenMessagesReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: CountIsHiddenMessagesReq, _writer: BinaryWriter): void;
    private _roomUid?;
    private _messageId?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CountIsHiddenMessagesReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<CountIsHiddenMessagesReq.AsObject>);
    get roomUid(): protoPubV1Models000.Uid | undefined;
    set roomUid(value: protoPubV1Models000.Uid | undefined);
    get messageId(): string | undefined;
    set messageId(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): CountIsHiddenMessagesReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): CountIsHiddenMessagesReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): CountIsHiddenMessagesReq.AsProtobufJSON;
}
export declare module CountIsHiddenMessagesReq {
    /**
     * Standard JavaScript object representation for CountIsHiddenMessagesReq
     */
    interface AsObject {
        roomUid?: protoPubV1Models000.Uid.AsObject;
        messageId?: string;
    }
    /**
     * Protobuf JSON representation for CountIsHiddenMessagesReq
     */
    interface AsProtobufJSON {
        roomUid?: protoPubV1Models000.Uid.AsProtobufJSON | null;
        messageId?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.query.CountIsHiddenMessagesRes
 */
export declare class CountIsHiddenMessagesRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): CountIsHiddenMessagesRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CountIsHiddenMessagesRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: CountIsHiddenMessagesRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: CountIsHiddenMessagesRes, _writer: BinaryWriter): void;
    private _count?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CountIsHiddenMessagesRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<CountIsHiddenMessagesRes.AsObject>);
    get count(): number | undefined;
    set count(value: number | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): CountIsHiddenMessagesRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): CountIsHiddenMessagesRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): CountIsHiddenMessagesRes.AsProtobufJSON;
}
export declare module CountIsHiddenMessagesRes {
    /**
     * Standard JavaScript object representation for CountIsHiddenMessagesRes
     */
    interface AsObject {
        count?: number;
    }
    /**
     * Protobuf JSON representation for CountIsHiddenMessagesRes
     */
    interface AsProtobufJSON {
        count?: number;
    }
}
/**
 * Message implementation for proto.pub.v1.query.GetAllUserRoomMetaReq
 */
export declare class GetAllUserRoomMetaReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetAllUserRoomMetaReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetAllUserRoomMetaReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetAllUserRoomMetaReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetAllUserRoomMetaReq, _writer: BinaryWriter): void;
    private _pointer?;
    private _limit?;
    private _after?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetAllUserRoomMetaReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetAllUserRoomMetaReq.AsObject>);
    get pointer(): number | undefined;
    set pointer(value: number | undefined);
    get limit(): number | undefined;
    set limit(value: number | undefined);
    get after(): string | undefined;
    set after(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetAllUserRoomMetaReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetAllUserRoomMetaReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetAllUserRoomMetaReq.AsProtobufJSON;
}
export declare module GetAllUserRoomMetaReq {
    /**
     * Standard JavaScript object representation for GetAllUserRoomMetaReq
     */
    interface AsObject {
        pointer?: number;
        limit?: number;
        after?: string;
    }
    /**
     * Protobuf JSON representation for GetAllUserRoomMetaReq
     */
    interface AsProtobufJSON {
        pointer?: number;
        limit?: number;
        after?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.query.GetAllUserRoomMetaRes
 */
export declare class GetAllUserRoomMetaRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetAllUserRoomMetaRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetAllUserRoomMetaRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetAllUserRoomMetaRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetAllUserRoomMetaRes, _writer: BinaryWriter): void;
    private _roomsMeta?;
    private _finished?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetAllUserRoomMetaRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetAllUserRoomMetaRes.AsObject>);
    get roomsMeta(): protoPubV1Models017.RoomMetadata[] | undefined;
    set roomsMeta(value: protoPubV1Models017.RoomMetadata[] | undefined);
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
    toObject(): GetAllUserRoomMetaRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetAllUserRoomMetaRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetAllUserRoomMetaRes.AsProtobufJSON;
}
export declare module GetAllUserRoomMetaRes {
    /**
     * Standard JavaScript object representation for GetAllUserRoomMetaRes
     */
    interface AsObject {
        roomsMeta?: protoPubV1Models017.RoomMetadata.AsObject[];
        finished?: boolean;
    }
    /**
     * Protobuf JSON representation for GetAllUserRoomMetaRes
     */
    interface AsProtobufJSON {
        roomsMeta?: protoPubV1Models017.RoomMetadata.AsProtobufJSON[] | null;
        finished?: boolean;
    }
}
/**
 * Message implementation for proto.pub.v1.query.GetUserRoomMetaReq
 */
export declare class GetUserRoomMetaReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetUserRoomMetaReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetUserRoomMetaReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetUserRoomMetaReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetUserRoomMetaReq, _writer: BinaryWriter): void;
    private _roomUid?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetUserRoomMetaReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetUserRoomMetaReq.AsObject>);
    get roomUid(): protoPubV1Models000.Uid | undefined;
    set roomUid(value: protoPubV1Models000.Uid | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetUserRoomMetaReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetUserRoomMetaReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetUserRoomMetaReq.AsProtobufJSON;
}
export declare module GetUserRoomMetaReq {
    /**
     * Standard JavaScript object representation for GetUserRoomMetaReq
     */
    interface AsObject {
        roomUid?: protoPubV1Models000.Uid.AsObject;
    }
    /**
     * Protobuf JSON representation for GetUserRoomMetaReq
     */
    interface AsProtobufJSON {
        roomUid?: protoPubV1Models000.Uid.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.query.GetUserRoomMetaRes
 */
export declare class GetUserRoomMetaRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetUserRoomMetaRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetUserRoomMetaRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetUserRoomMetaRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetUserRoomMetaRes, _writer: BinaryWriter): void;
    private _roomMeta?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetUserRoomMetaRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetUserRoomMetaRes.AsObject>);
    get roomMeta(): protoPubV1Models017.RoomMetadata | undefined;
    set roomMeta(value: protoPubV1Models017.RoomMetadata | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetUserRoomMetaRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetUserRoomMetaRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetUserRoomMetaRes.AsProtobufJSON;
}
export declare module GetUserRoomMetaRes {
    /**
     * Standard JavaScript object representation for GetUserRoomMetaRes
     */
    interface AsObject {
        roomMeta?: protoPubV1Models017.RoomMetadata.AsObject;
    }
    /**
     * Protobuf JSON representation for GetUserRoomMetaRes
     */
    interface AsProtobufJSON {
        roomMeta?: protoPubV1Models017.RoomMetadata.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.query.GetUserLastDeliveryAckReq
 */
export declare class GetUserLastDeliveryAckReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetUserLastDeliveryAckReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetUserLastDeliveryAckReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetUserLastDeliveryAckReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetUserLastDeliveryAckReq, _writer: BinaryWriter): void;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetUserLastDeliveryAckReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetUserLastDeliveryAckReq.AsObject>);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetUserLastDeliveryAckReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetUserLastDeliveryAckReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetUserLastDeliveryAckReq.AsProtobufJSON;
}
export declare module GetUserLastDeliveryAckReq {
    /**
     * Standard JavaScript object representation for GetUserLastDeliveryAckReq
     */
    interface AsObject {
    }
    /**
     * Protobuf JSON representation for GetUserLastDeliveryAckReq
     */
    interface AsProtobufJSON {
    }
}
/**
 * Message implementation for proto.pub.v1.query.GetUserLastDeliveryAckRes
 */
export declare class GetUserLastDeliveryAckRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetUserLastDeliveryAckRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetUserLastDeliveryAckRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetUserLastDeliveryAckRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetUserLastDeliveryAckRes, _writer: BinaryWriter): void;
    private _lastMessageDeliveryAck?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetUserLastDeliveryAckRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetUserLastDeliveryAckRes.AsObject>);
    get lastMessageDeliveryAck(): protoPubV1Models013.MessageDeliveryAck | undefined;
    set lastMessageDeliveryAck(value: protoPubV1Models013.MessageDeliveryAck | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetUserLastDeliveryAckRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetUserLastDeliveryAckRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetUserLastDeliveryAckRes.AsProtobufJSON;
}
export declare module GetUserLastDeliveryAckRes {
    /**
     * Standard JavaScript object representation for GetUserLastDeliveryAckRes
     */
    interface AsObject {
        lastMessageDeliveryAck?: protoPubV1Models013.MessageDeliveryAck.AsObject;
    }
    /**
     * Protobuf JSON representation for GetUserLastDeliveryAckRes
     */
    interface AsProtobufJSON {
        lastMessageDeliveryAck?: protoPubV1Models013.MessageDeliveryAck.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.query.GetMediaMetadataReq
 */
export declare class GetMediaMetadataReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetMediaMetadataReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetMediaMetadataReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetMediaMetadataReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetMediaMetadataReq, _writer: BinaryWriter): void;
    private _with?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetMediaMetadataReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetMediaMetadataReq.AsObject>);
    get with(): protoPubV1Models000.Uid | undefined;
    set with(value: protoPubV1Models000.Uid | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetMediaMetadataReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetMediaMetadataReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetMediaMetadataReq.AsProtobufJSON;
}
export declare module GetMediaMetadataReq {
    /**
     * Standard JavaScript object representation for GetMediaMetadataReq
     */
    interface AsObject {
        with?: protoPubV1Models000.Uid.AsObject;
    }
    /**
     * Protobuf JSON representation for GetMediaMetadataReq
     */
    interface AsProtobufJSON {
        with?: protoPubV1Models000.Uid.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.query.GetMediaMetadataRes
 */
export declare class GetMediaMetadataRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetMediaMetadataRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetMediaMetadataRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetMediaMetadataRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetMediaMetadataRes, _writer: BinaryWriter): void;
    private _allImagesCount?;
    private _allVideosCount?;
    private _allFilesCount?;
    private _allAudiosCount?;
    private _allMusicsCount?;
    private _allDocumentsCount?;
    private _allLinksCount?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetMediaMetadataRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetMediaMetadataRes.AsObject>);
    get allImagesCount(): string | undefined;
    set allImagesCount(value: string | undefined);
    get allVideosCount(): string | undefined;
    set allVideosCount(value: string | undefined);
    get allFilesCount(): string | undefined;
    set allFilesCount(value: string | undefined);
    get allAudiosCount(): string | undefined;
    set allAudiosCount(value: string | undefined);
    get allMusicsCount(): string | undefined;
    set allMusicsCount(value: string | undefined);
    get allDocumentsCount(): string | undefined;
    set allDocumentsCount(value: string | undefined);
    get allLinksCount(): string | undefined;
    set allLinksCount(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetMediaMetadataRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetMediaMetadataRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetMediaMetadataRes.AsProtobufJSON;
}
export declare module GetMediaMetadataRes {
    /**
     * Standard JavaScript object representation for GetMediaMetadataRes
     */
    interface AsObject {
        allImagesCount?: string;
        allVideosCount?: string;
        allFilesCount?: string;
        allAudiosCount?: string;
        allMusicsCount?: string;
        allDocumentsCount?: string;
        allLinksCount?: string;
    }
    /**
     * Protobuf JSON representation for GetMediaMetadataRes
     */
    interface AsProtobufJSON {
        allImagesCount?: string;
        allVideosCount?: string;
        allFilesCount?: string;
        allAudiosCount?: string;
        allMusicsCount?: string;
        allDocumentsCount?: string;
        allLinksCount?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.query.FetchMediasReq
 */
export declare class FetchMediasReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): FetchMediasReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: FetchMediasReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: FetchMediasReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: FetchMediasReq, _writer: BinaryWriter): void;
    private _roomUid?;
    private _pointer?;
    private _year?;
    private _mediaType?;
    private _fetchingDirectionType?;
    private _limit?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of FetchMediasReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<FetchMediasReq.AsObject>);
    get roomUid(): protoPubV1Models000.Uid | undefined;
    set roomUid(value: protoPubV1Models000.Uid | undefined);
    get pointer(): string | undefined;
    set pointer(value: string | undefined);
    get year(): number | undefined;
    set year(value: number | undefined);
    get mediaType(): FetchMediasReq.MediaType | undefined;
    set mediaType(value: FetchMediasReq.MediaType | undefined);
    get fetchingDirectionType(): FetchMediasReq.FetchingDirectionType | undefined;
    set fetchingDirectionType(value: FetchMediasReq.FetchingDirectionType | undefined);
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
    toObject(): FetchMediasReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): FetchMediasReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): FetchMediasReq.AsProtobufJSON;
}
export declare module FetchMediasReq {
    /**
     * Standard JavaScript object representation for FetchMediasReq
     */
    interface AsObject {
        roomUid?: protoPubV1Models000.Uid.AsObject;
        pointer?: string;
        year?: number;
        mediaType?: FetchMediasReq.MediaType;
        fetchingDirectionType?: FetchMediasReq.FetchingDirectionType;
        limit?: number;
    }
    /**
     * Protobuf JSON representation for FetchMediasReq
     */
    interface AsProtobufJSON {
        roomUid?: protoPubV1Models000.Uid.AsProtobufJSON | null;
        pointer?: string;
        year?: number;
        mediaType?: string;
        fetchingDirectionType?: string;
        limit?: number;
    }
    enum MediaType {
        IMAGES = 0,
        VIDEOS = 1,
        FILES = 2,
        AUDIOS = 3,
        MUSICS = 4,
        DOCUMENTS = 5,
        LINKS = 6
    }
    enum FetchingDirectionType {
        FORWARD_FETCH = 0,
        BACKWARD_FETCH = 1
    }
}
/**
 * Message implementation for proto.pub.v1.query.FetchMediasRes
 */
export declare class FetchMediasRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): FetchMediasRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: FetchMediasRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: FetchMediasRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: FetchMediasRes, _writer: BinaryWriter): void;
    private _medias?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of FetchMediasRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<FetchMediasRes.AsObject>);
    get medias(): protoPubV1Models014.Media[] | undefined;
    set medias(value: protoPubV1Models014.Media[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): FetchMediasRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): FetchMediasRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): FetchMediasRes.AsProtobufJSON;
}
export declare module FetchMediasRes {
    /**
     * Standard JavaScript object representation for FetchMediasRes
     */
    interface AsObject {
        medias?: protoPubV1Models014.Media.AsObject[];
    }
    /**
     * Protobuf JSON representation for FetchMediasRes
     */
    interface AsProtobufJSON {
        medias?: protoPubV1Models014.Media.AsProtobufJSON[] | null;
    }
}
/**
 * Message implementation for proto.pub.v1.query.GetMetaCountsReq
 */
export declare class GetMetaCountsReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetMetaCountsReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetMetaCountsReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetMetaCountsReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetMetaCountsReq, _writer: BinaryWriter): void;
    private _roomUid?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetMetaCountsReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetMetaCountsReq.AsObject>);
    get roomUid(): protoPubV1Models000.Uid | undefined;
    set roomUid(value: protoPubV1Models000.Uid | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetMetaCountsReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetMetaCountsReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetMetaCountsReq.AsProtobufJSON;
}
export declare module GetMetaCountsReq {
    /**
     * Standard JavaScript object representation for GetMetaCountsReq
     */
    interface AsObject {
        roomUid?: protoPubV1Models000.Uid.AsObject;
    }
    /**
     * Protobuf JSON representation for GetMetaCountsReq
     */
    interface AsProtobufJSON {
        roomUid?: protoPubV1Models000.Uid.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.query.GetMetaCountsRes
 */
export declare class GetMetaCountsRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetMetaCountsRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetMetaCountsRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetMetaCountsRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetMetaCountsRes, _writer: BinaryWriter): void;
    private _allMediaCount?;
    private _allFilesCount?;
    private _allMusicsCount?;
    private _allVoicesCount?;
    private _allLinksCount?;
    private _allCallCount?;
    private _allMediaDeletedCount?;
    private _allFilesDeletedCount?;
    private _allMusicsDeletedCount?;
    private _allVoicesDeletedCount?;
    private _allLinksDeletedCount?;
    private _allCallDeletedCount?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetMetaCountsRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetMetaCountsRes.AsObject>);
    get allMediaCount(): string | undefined;
    set allMediaCount(value: string | undefined);
    get allFilesCount(): string | undefined;
    set allFilesCount(value: string | undefined);
    get allMusicsCount(): string | undefined;
    set allMusicsCount(value: string | undefined);
    get allVoicesCount(): string | undefined;
    set allVoicesCount(value: string | undefined);
    get allLinksCount(): string | undefined;
    set allLinksCount(value: string | undefined);
    get allCallCount(): string | undefined;
    set allCallCount(value: string | undefined);
    get allMediaDeletedCount(): string | undefined;
    set allMediaDeletedCount(value: string | undefined);
    get allFilesDeletedCount(): string | undefined;
    set allFilesDeletedCount(value: string | undefined);
    get allMusicsDeletedCount(): string | undefined;
    set allMusicsDeletedCount(value: string | undefined);
    get allVoicesDeletedCount(): string | undefined;
    set allVoicesDeletedCount(value: string | undefined);
    get allLinksDeletedCount(): string | undefined;
    set allLinksDeletedCount(value: string | undefined);
    get allCallDeletedCount(): string | undefined;
    set allCallDeletedCount(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetMetaCountsRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetMetaCountsRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetMetaCountsRes.AsProtobufJSON;
}
export declare module GetMetaCountsRes {
    /**
     * Standard JavaScript object representation for GetMetaCountsRes
     */
    interface AsObject {
        allMediaCount?: string;
        allFilesCount?: string;
        allMusicsCount?: string;
        allVoicesCount?: string;
        allLinksCount?: string;
        allCallCount?: string;
        allMediaDeletedCount?: string;
        allFilesDeletedCount?: string;
        allMusicsDeletedCount?: string;
        allVoicesDeletedCount?: string;
        allLinksDeletedCount?: string;
        allCallDeletedCount?: string;
    }
    /**
     * Protobuf JSON representation for GetMetaCountsRes
     */
    interface AsProtobufJSON {
        allMediaCount?: string;
        allFilesCount?: string;
        allMusicsCount?: string;
        allVoicesCount?: string;
        allLinksCount?: string;
        allCallCount?: string;
        allMediaDeletedCount?: string;
        allFilesDeletedCount?: string;
        allMusicsDeletedCount?: string;
        allVoicesDeletedCount?: string;
        allLinksDeletedCount?: string;
        allCallDeletedCount?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.query.FetchMetaListReq
 */
export declare class FetchMetaListReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): FetchMetaListReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: FetchMetaListReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: FetchMetaListReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: FetchMetaListReq, _writer: BinaryWriter): void;
    private _roomUid?;
    private _pointer?;
    private _group?;
    private _direction?;
    private _limit?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of FetchMetaListReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<FetchMetaListReq.AsObject>);
    get roomUid(): protoPubV1Models000.Uid | undefined;
    set roomUid(value: protoPubV1Models000.Uid | undefined);
    get pointer(): string | undefined;
    set pointer(value: string | undefined);
    get group(): protoPubV1Models015.MetaGroup | undefined;
    set group(value: protoPubV1Models015.MetaGroup | undefined);
    get direction(): QueryDirection | undefined;
    set direction(value: QueryDirection | undefined);
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
    toObject(): FetchMetaListReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): FetchMetaListReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): FetchMetaListReq.AsProtobufJSON;
}
export declare module FetchMetaListReq {
    /**
     * Standard JavaScript object representation for FetchMetaListReq
     */
    interface AsObject {
        roomUid?: protoPubV1Models000.Uid.AsObject;
        pointer?: string;
        group?: protoPubV1Models015.MetaGroup;
        direction?: QueryDirection;
        limit?: number;
    }
    /**
     * Protobuf JSON representation for FetchMetaListReq
     */
    interface AsProtobufJSON {
        roomUid?: protoPubV1Models000.Uid.AsProtobufJSON | null;
        pointer?: string;
        group?: string;
        direction?: string;
        limit?: number;
    }
}
/**
 * Message implementation for proto.pub.v1.query.FetchMetaListRes
 */
export declare class FetchMetaListRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): FetchMetaListRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: FetchMetaListRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: FetchMetaListRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: FetchMetaListRes, _writer: BinaryWriter): void;
    private _metaList?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of FetchMetaListRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<FetchMetaListRes.AsObject>);
    get metaList(): protoPubV1Models015.Meta[] | undefined;
    set metaList(value: protoPubV1Models015.Meta[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): FetchMetaListRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): FetchMetaListRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): FetchMetaListRes.AsProtobufJSON;
}
export declare module FetchMetaListRes {
    /**
     * Standard JavaScript object representation for FetchMetaListRes
     */
    interface AsObject {
        metaList?: protoPubV1Models015.Meta.AsObject[];
    }
    /**
     * Protobuf JSON representation for FetchMetaListRes
     */
    interface AsProtobufJSON {
        metaList?: protoPubV1Models015.Meta.AsProtobufJSON[] | null;
    }
}
/**
 * Message implementation for proto.pub.v1.query.FetchMessageMetaIndexReq
 */
export declare class FetchMessageMetaIndexReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): FetchMessageMetaIndexReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: FetchMessageMetaIndexReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: FetchMessageMetaIndexReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: FetchMessageMetaIndexReq, _writer: BinaryWriter): void;
    private _roomUid?;
    private _messageId?;
    private _group?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of FetchMessageMetaIndexReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<FetchMessageMetaIndexReq.AsObject>);
    get roomUid(): protoPubV1Models000.Uid | undefined;
    set roomUid(value: protoPubV1Models000.Uid | undefined);
    get messageId(): string | undefined;
    set messageId(value: string | undefined);
    get group(): protoPubV1Models015.MetaGroup | undefined;
    set group(value: protoPubV1Models015.MetaGroup | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): FetchMessageMetaIndexReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): FetchMessageMetaIndexReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): FetchMessageMetaIndexReq.AsProtobufJSON;
}
export declare module FetchMessageMetaIndexReq {
    /**
     * Standard JavaScript object representation for FetchMessageMetaIndexReq
     */
    interface AsObject {
        roomUid?: protoPubV1Models000.Uid.AsObject;
        messageId?: string;
        group?: protoPubV1Models015.MetaGroup;
    }
    /**
     * Protobuf JSON representation for FetchMessageMetaIndexReq
     */
    interface AsProtobufJSON {
        roomUid?: protoPubV1Models000.Uid.AsProtobufJSON | null;
        messageId?: string;
        group?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.query.FetchMessageMetaIndexRes
 */
export declare class FetchMessageMetaIndexRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): FetchMessageMetaIndexRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: FetchMessageMetaIndexRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: FetchMessageMetaIndexRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: FetchMessageMetaIndexRes, _writer: BinaryWriter): void;
    private _index?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of FetchMessageMetaIndexRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<FetchMessageMetaIndexRes.AsObject>);
    get index(): string | undefined;
    set index(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): FetchMessageMetaIndexRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): FetchMessageMetaIndexRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): FetchMessageMetaIndexRes.AsProtobufJSON;
}
export declare module FetchMessageMetaIndexRes {
    /**
     * Standard JavaScript object representation for FetchMessageMetaIndexRes
     */
    interface AsObject {
        index?: string;
    }
    /**
     * Protobuf JSON representation for FetchMessageMetaIndexRes
     */
    interface AsProtobufJSON {
        index?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.query.FetchMetaDeletedIndexesReq
 */
export declare class FetchMetaDeletedIndexesReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): FetchMetaDeletedIndexesReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: FetchMetaDeletedIndexesReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: FetchMetaDeletedIndexesReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: FetchMetaDeletedIndexesReq, _writer: BinaryWriter): void;
    private _roomUid?;
    private _pointer?;
    private _group?;
    private _direction?;
    private _limit?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of FetchMetaDeletedIndexesReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<FetchMetaDeletedIndexesReq.AsObject>);
    get roomUid(): protoPubV1Models000.Uid | undefined;
    set roomUid(value: protoPubV1Models000.Uid | undefined);
    get pointer(): string | undefined;
    set pointer(value: string | undefined);
    get group(): protoPubV1Models015.MetaGroup | undefined;
    set group(value: protoPubV1Models015.MetaGroup | undefined);
    get direction(): QueryDirection | undefined;
    set direction(value: QueryDirection | undefined);
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
    toObject(): FetchMetaDeletedIndexesReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): FetchMetaDeletedIndexesReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): FetchMetaDeletedIndexesReq.AsProtobufJSON;
}
export declare module FetchMetaDeletedIndexesReq {
    /**
     * Standard JavaScript object representation for FetchMetaDeletedIndexesReq
     */
    interface AsObject {
        roomUid?: protoPubV1Models000.Uid.AsObject;
        pointer?: string;
        group?: protoPubV1Models015.MetaGroup;
        direction?: QueryDirection;
        limit?: number;
    }
    /**
     * Protobuf JSON representation for FetchMetaDeletedIndexesReq
     */
    interface AsProtobufJSON {
        roomUid?: protoPubV1Models000.Uid.AsProtobufJSON | null;
        pointer?: string;
        group?: string;
        direction?: string;
        limit?: number;
    }
}
/**
 * Message implementation for proto.pub.v1.query.FetchMetaDeletedIndexesRes
 */
export declare class FetchMetaDeletedIndexesRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): FetchMetaDeletedIndexesRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: FetchMetaDeletedIndexesRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: FetchMetaDeletedIndexesRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: FetchMetaDeletedIndexesRes, _writer: BinaryWriter): void;
    private _deletedIndexes?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of FetchMetaDeletedIndexesRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<FetchMetaDeletedIndexesRes.AsObject>);
    get deletedIndexes(): string[] | undefined;
    set deletedIndexes(value: string[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): FetchMetaDeletedIndexesRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): FetchMetaDeletedIndexesRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): FetchMetaDeletedIndexesRes.AsProtobufJSON;
}
export declare module FetchMetaDeletedIndexesRes {
    /**
     * Standard JavaScript object representation for FetchMetaDeletedIndexesRes
     */
    interface AsObject {
        deletedIndexes?: string[];
    }
    /**
     * Protobuf JSON representation for FetchMetaDeletedIndexesRes
     */
    interface AsProtobufJSON {
        deletedIndexes?: string[];
    }
}
/**
 * Message implementation for proto.pub.v1.query.FetchMentionListReq
 */
export declare class FetchMentionListReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): FetchMentionListReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: FetchMentionListReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: FetchMentionListReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: FetchMentionListReq, _writer: BinaryWriter): void;
    private _group?;
    private _afterId?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of FetchMentionListReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<FetchMentionListReq.AsObject>);
    get group(): protoPubV1Models000.Uid | undefined;
    set group(value: protoPubV1Models000.Uid | undefined);
    get afterId(): string | undefined;
    set afterId(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): FetchMentionListReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): FetchMentionListReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): FetchMentionListReq.AsProtobufJSON;
}
export declare module FetchMentionListReq {
    /**
     * Standard JavaScript object representation for FetchMentionListReq
     */
    interface AsObject {
        group?: protoPubV1Models000.Uid.AsObject;
        afterId?: string;
    }
    /**
     * Protobuf JSON representation for FetchMentionListReq
     */
    interface AsProtobufJSON {
        group?: protoPubV1Models000.Uid.AsProtobufJSON | null;
        afterId?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.query.FetchMentionListRes
 */
export declare class FetchMentionListRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): FetchMentionListRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: FetchMentionListRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: FetchMentionListRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: FetchMentionListRes, _writer: BinaryWriter): void;
    private _idList?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of FetchMentionListRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<FetchMentionListRes.AsObject>);
    get idList(): string[] | undefined;
    set idList(value: string[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): FetchMentionListRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): FetchMentionListRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): FetchMentionListRes.AsProtobufJSON;
}
export declare module FetchMentionListRes {
    /**
     * Standard JavaScript object representation for FetchMentionListRes
     */
    interface AsObject {
        idList?: string[];
    }
    /**
     * Protobuf JSON representation for FetchMentionListRes
     */
    interface AsProtobufJSON {
        idList?: string[];
    }
}
/**
 * Message implementation for proto.pub.v1.query.FetchCurrentUserSeenDataReq
 */
export declare class FetchCurrentUserSeenDataReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): FetchCurrentUserSeenDataReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: FetchCurrentUserSeenDataReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: FetchCurrentUserSeenDataReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: FetchCurrentUserSeenDataReq, _writer: BinaryWriter): void;
    private _roomUid?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of FetchCurrentUserSeenDataReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<FetchCurrentUserSeenDataReq.AsObject>);
    get roomUid(): protoPubV1Models000.Uid | undefined;
    set roomUid(value: protoPubV1Models000.Uid | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): FetchCurrentUserSeenDataReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): FetchCurrentUserSeenDataReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): FetchCurrentUserSeenDataReq.AsProtobufJSON;
}
export declare module FetchCurrentUserSeenDataReq {
    /**
     * Standard JavaScript object representation for FetchCurrentUserSeenDataReq
     */
    interface AsObject {
        roomUid?: protoPubV1Models000.Uid.AsObject;
    }
    /**
     * Protobuf JSON representation for FetchCurrentUserSeenDataReq
     */
    interface AsProtobufJSON {
        roomUid?: protoPubV1Models000.Uid.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.query.FetchCurrentUserSeenDataRes
 */
export declare class FetchCurrentUserSeenDataRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): FetchCurrentUserSeenDataRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: FetchCurrentUserSeenDataRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: FetchCurrentUserSeenDataRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: FetchCurrentUserSeenDataRes, _writer: BinaryWriter): void;
    private _seen?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of FetchCurrentUserSeenDataRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<FetchCurrentUserSeenDataRes.AsObject>);
    get seen(): protoPubV1Models016.Seen | undefined;
    set seen(value: protoPubV1Models016.Seen | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): FetchCurrentUserSeenDataRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): FetchCurrentUserSeenDataRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): FetchCurrentUserSeenDataRes.AsProtobufJSON;
}
export declare module FetchCurrentUserSeenDataRes {
    /**
     * Standard JavaScript object representation for FetchCurrentUserSeenDataRes
     */
    interface AsObject {
        seen?: protoPubV1Models016.Seen.AsObject;
    }
    /**
     * Protobuf JSON representation for FetchCurrentUserSeenDataRes
     */
    interface AsProtobufJSON {
        seen?: protoPubV1Models016.Seen.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.query.FetchLastOtherUserSeenDataReq
 */
export declare class FetchLastOtherUserSeenDataReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): FetchLastOtherUserSeenDataReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: FetchLastOtherUserSeenDataReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: FetchLastOtherUserSeenDataReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: FetchLastOtherUserSeenDataReq, _writer: BinaryWriter): void;
    private _roomUid?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of FetchLastOtherUserSeenDataReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<FetchLastOtherUserSeenDataReq.AsObject>);
    get roomUid(): protoPubV1Models000.Uid | undefined;
    set roomUid(value: protoPubV1Models000.Uid | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): FetchLastOtherUserSeenDataReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): FetchLastOtherUserSeenDataReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): FetchLastOtherUserSeenDataReq.AsProtobufJSON;
}
export declare module FetchLastOtherUserSeenDataReq {
    /**
     * Standard JavaScript object representation for FetchLastOtherUserSeenDataReq
     */
    interface AsObject {
        roomUid?: protoPubV1Models000.Uid.AsObject;
    }
    /**
     * Protobuf JSON representation for FetchLastOtherUserSeenDataReq
     */
    interface AsProtobufJSON {
        roomUid?: protoPubV1Models000.Uid.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.query.FetchLastOtherUserSeenDataRes
 */
export declare class FetchLastOtherUserSeenDataRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): FetchLastOtherUserSeenDataRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: FetchLastOtherUserSeenDataRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: FetchLastOtherUserSeenDataRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: FetchLastOtherUserSeenDataRes, _writer: BinaryWriter): void;
    private _seen?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of FetchLastOtherUserSeenDataRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<FetchLastOtherUserSeenDataRes.AsObject>);
    get seen(): protoPubV1Models016.Seen | undefined;
    set seen(value: protoPubV1Models016.Seen | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): FetchLastOtherUserSeenDataRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): FetchLastOtherUserSeenDataRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): FetchLastOtherUserSeenDataRes.AsProtobufJSON;
}
export declare module FetchLastOtherUserSeenDataRes {
    /**
     * Standard JavaScript object representation for FetchLastOtherUserSeenDataRes
     */
    interface AsObject {
        seen?: protoPubV1Models016.Seen.AsObject;
    }
    /**
     * Protobuf JSON representation for FetchLastOtherUserSeenDataRes
     */
    interface AsProtobufJSON {
        seen?: protoPubV1Models016.Seen.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.query.FetchSeenCountOfChannelMessageReq
 */
export declare class FetchSeenCountOfChannelMessageReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): FetchSeenCountOfChannelMessageReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: FetchSeenCountOfChannelMessageReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: FetchSeenCountOfChannelMessageReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: FetchSeenCountOfChannelMessageReq, _writer: BinaryWriter): void;
    private _roomUid?;
    private _pointer?;
    private _limit?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of FetchSeenCountOfChannelMessageReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<FetchSeenCountOfChannelMessageReq.AsObject>);
    get roomUid(): protoPubV1Models000.Uid | undefined;
    set roomUid(value: protoPubV1Models000.Uid | undefined);
    get pointer(): string | undefined;
    set pointer(value: string | undefined);
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
    toObject(): FetchSeenCountOfChannelMessageReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): FetchSeenCountOfChannelMessageReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): FetchSeenCountOfChannelMessageReq.AsProtobufJSON;
}
export declare module FetchSeenCountOfChannelMessageReq {
    /**
     * Standard JavaScript object representation for FetchSeenCountOfChannelMessageReq
     */
    interface AsObject {
        roomUid?: protoPubV1Models000.Uid.AsObject;
        pointer?: string;
        limit?: number;
    }
    /**
     * Protobuf JSON representation for FetchSeenCountOfChannelMessageReq
     */
    interface AsProtobufJSON {
        roomUid?: protoPubV1Models000.Uid.AsProtobufJSON | null;
        pointer?: string;
        limit?: number;
    }
}
/**
 * Message implementation for proto.pub.v1.query.FetchSeenCountOfChannelMessageRes
 */
export declare class FetchSeenCountOfChannelMessageRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): FetchSeenCountOfChannelMessageRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: FetchSeenCountOfChannelMessageRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: FetchSeenCountOfChannelMessageRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: FetchSeenCountOfChannelMessageRes, _writer: BinaryWriter): void;
    private _seenCounts?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of FetchSeenCountOfChannelMessageRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<FetchSeenCountOfChannelMessageRes.AsObject>);
    get seenCounts(): FetchSeenCountOfChannelMessageRes.SeenCount[] | undefined;
    set seenCounts(value: FetchSeenCountOfChannelMessageRes.SeenCount[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): FetchSeenCountOfChannelMessageRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): FetchSeenCountOfChannelMessageRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): FetchSeenCountOfChannelMessageRes.AsProtobufJSON;
}
export declare module FetchSeenCountOfChannelMessageRes {
    /**
     * Standard JavaScript object representation for FetchSeenCountOfChannelMessageRes
     */
    interface AsObject {
        seenCounts?: FetchSeenCountOfChannelMessageRes.SeenCount.AsObject[];
    }
    /**
     * Protobuf JSON representation for FetchSeenCountOfChannelMessageRes
     */
    interface AsProtobufJSON {
        seenCounts?: FetchSeenCountOfChannelMessageRes.SeenCount.AsProtobufJSON[] | null;
    }
    /**
     * Message implementation for proto.pub.v1.query.FetchSeenCountOfChannelMessageRes.SeenCount
     */
    class SeenCount implements GrpcMessage {
        static id: string;
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes: ByteSource): SeenCount;
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance: SeenCount): void;
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        static deserializeBinaryFromReader(_instance: SeenCount, _reader: BinaryReader): void;
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance: SeenCount, _writer: BinaryWriter): void;
        private _count?;
        private _messageId?;
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of SeenCount to deeply clone from
         */
        constructor(_value?: RecursivePartial<SeenCount.AsObject>);
        get count(): string | undefined;
        set count(value: string | undefined);
        get messageId(): string | undefined;
        set messageId(value: string | undefined);
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        serializeBinary(): Uint8Array;
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        toObject(): SeenCount.AsObject;
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        toJSON(): SeenCount.AsObject;
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        toProtobufJSON(options?: ToProtobufJSONOptions): SeenCount.AsProtobufJSON;
    }
    module SeenCount {
        /**
         * Standard JavaScript object representation for SeenCount
         */
        interface AsObject {
            count?: string;
            messageId?: string;
        }
        /**
         * Protobuf JSON representation for SeenCount
         */
        interface AsProtobufJSON {
            count?: string;
            messageId?: string;
        }
    }
}
/**
 * Message implementation for proto.pub.v1.query.FetchUserCallsReq
 */
export declare class FetchUserCallsReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): FetchUserCallsReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: FetchUserCallsReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: FetchUserCallsReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: FetchUserCallsReq, _writer: BinaryWriter): void;
    private _roomUid?;
    private _pointer?;
    private _year?;
    private _month?;
    private _fetchingDirectionType?;
    private _limit?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of FetchUserCallsReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<FetchUserCallsReq.AsObject>);
    get roomUid(): protoPubV1Models000.Uid | undefined;
    set roomUid(value: protoPubV1Models000.Uid | undefined);
    get pointer(): string | undefined;
    set pointer(value: string | undefined);
    get year(): number | undefined;
    set year(value: number | undefined);
    get month(): number | undefined;
    set month(value: number | undefined);
    get fetchingDirectionType(): FetchUserCallsReq.FetchingDirectionType | undefined;
    set fetchingDirectionType(value: FetchUserCallsReq.FetchingDirectionType | undefined);
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
    toObject(): FetchUserCallsReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): FetchUserCallsReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): FetchUserCallsReq.AsProtobufJSON;
}
export declare module FetchUserCallsReq {
    /**
     * Standard JavaScript object representation for FetchUserCallsReq
     */
    interface AsObject {
        roomUid?: protoPubV1Models000.Uid.AsObject;
        pointer?: string;
        year?: number;
        month?: number;
        fetchingDirectionType?: FetchUserCallsReq.FetchingDirectionType;
        limit?: number;
    }
    /**
     * Protobuf JSON representation for FetchUserCallsReq
     */
    interface AsProtobufJSON {
        roomUid?: protoPubV1Models000.Uid.AsProtobufJSON | null;
        pointer?: string;
        year?: number;
        month?: number;
        fetchingDirectionType?: string;
        limit?: number;
    }
    enum FetchingDirectionType {
        FORWARD_FETCH = 0,
        BACKWARD_FETCH = 1
    }
}
/**
 * Message implementation for proto.pub.v1.query.FetchUserCallsRes
 */
export declare class FetchUserCallsRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): FetchUserCallsRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: FetchUserCallsRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: FetchUserCallsRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: FetchUserCallsRes, _writer: BinaryWriter): void;
    private _cellEvents?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of FetchUserCallsRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<FetchUserCallsRes.AsObject>);
    get cellEvents(): protoPubV1Models010.CallInfo[] | undefined;
    set cellEvents(value: protoPubV1Models010.CallInfo[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): FetchUserCallsRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): FetchUserCallsRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): FetchUserCallsRes.AsProtobufJSON;
}
export declare module FetchUserCallsRes {
    /**
     * Standard JavaScript object representation for FetchUserCallsRes
     */
    interface AsObject {
        cellEvents?: protoPubV1Models010.CallInfo.AsObject[];
    }
    /**
     * Protobuf JSON representation for FetchUserCallsRes
     */
    interface AsProtobufJSON {
        cellEvents?: protoPubV1Models010.CallInfo.AsProtobufJSON[] | null;
    }
}
/**
 * Message implementation for proto.pub.v1.query.UpdateMessageReq
 */
export declare class UpdateMessageReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): UpdateMessageReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: UpdateMessageReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: UpdateMessageReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: UpdateMessageReq, _writer: BinaryWriter): void;
    private _messageId?;
    private _message?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of UpdateMessageReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<UpdateMessageReq.AsObject>);
    get messageId(): string | undefined;
    set messageId(value: string | undefined);
    get message(): protoPubV1Models013.MessageByClient | undefined;
    set message(value: protoPubV1Models013.MessageByClient | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): UpdateMessageReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): UpdateMessageReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): UpdateMessageReq.AsProtobufJSON;
}
export declare module UpdateMessageReq {
    /**
     * Standard JavaScript object representation for UpdateMessageReq
     */
    interface AsObject {
        messageId?: string;
        message?: protoPubV1Models013.MessageByClient.AsObject;
    }
    /**
     * Protobuf JSON representation for UpdateMessageReq
     */
    interface AsProtobufJSON {
        messageId?: string;
        message?: protoPubV1Models013.MessageByClient.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.query.UpdateMessageRes
 */
export declare class UpdateMessageRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): UpdateMessageRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: UpdateMessageRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: UpdateMessageRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: UpdateMessageRes, _writer: BinaryWriter): void;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of UpdateMessageRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<UpdateMessageRes.AsObject>);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): UpdateMessageRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): UpdateMessageRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): UpdateMessageRes.AsProtobufJSON;
}
export declare module UpdateMessageRes {
    /**
     * Standard JavaScript object representation for UpdateMessageRes
     */
    interface AsObject {
    }
    /**
     * Protobuf JSON representation for UpdateMessageRes
     */
    interface AsProtobufJSON {
    }
}
/**
 * Message implementation for proto.pub.v1.query.DeleteMessageReq
 */
export declare class DeleteMessageReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): DeleteMessageReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: DeleteMessageReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: DeleteMessageReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: DeleteMessageReq, _writer: BinaryWriter): void;
    private _messageId?;
    private _roomUid?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of DeleteMessageReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<DeleteMessageReq.AsObject>);
    get messageId(): string | undefined;
    set messageId(value: string | undefined);
    get roomUid(): protoPubV1Models000.Uid | undefined;
    set roomUid(value: protoPubV1Models000.Uid | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): DeleteMessageReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): DeleteMessageReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): DeleteMessageReq.AsProtobufJSON;
}
export declare module DeleteMessageReq {
    /**
     * Standard JavaScript object representation for DeleteMessageReq
     */
    interface AsObject {
        messageId?: string;
        roomUid?: protoPubV1Models000.Uid.AsObject;
    }
    /**
     * Protobuf JSON representation for DeleteMessageReq
     */
    interface AsProtobufJSON {
        messageId?: string;
        roomUid?: protoPubV1Models000.Uid.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.query.DeleteMessageRes
 */
export declare class DeleteMessageRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): DeleteMessageRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: DeleteMessageRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: DeleteMessageRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: DeleteMessageRes, _writer: BinaryWriter): void;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of DeleteMessageRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<DeleteMessageRes.AsObject>);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): DeleteMessageRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): DeleteMessageRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): DeleteMessageRes.AsProtobufJSON;
}
export declare module DeleteMessageRes {
    /**
     * Standard JavaScript object representation for DeleteMessageRes
     */
    interface AsObject {
    }
    /**
     * Protobuf JSON representation for DeleteMessageRes
     */
    interface AsProtobufJSON {
    }
}
/**
 * Message implementation for proto.pub.v1.query.RemovePrivateRoomReq
 */
export declare class RemovePrivateRoomReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): RemovePrivateRoomReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: RemovePrivateRoomReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: RemovePrivateRoomReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: RemovePrivateRoomReq, _writer: BinaryWriter): void;
    private _roomUid?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of RemovePrivateRoomReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<RemovePrivateRoomReq.AsObject>);
    get roomUid(): protoPubV1Models000.Uid | undefined;
    set roomUid(value: protoPubV1Models000.Uid | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): RemovePrivateRoomReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): RemovePrivateRoomReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): RemovePrivateRoomReq.AsProtobufJSON;
}
export declare module RemovePrivateRoomReq {
    /**
     * Standard JavaScript object representation for RemovePrivateRoomReq
     */
    interface AsObject {
        roomUid?: protoPubV1Models000.Uid.AsObject;
    }
    /**
     * Protobuf JSON representation for RemovePrivateRoomReq
     */
    interface AsProtobufJSON {
        roomUid?: protoPubV1Models000.Uid.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.query.RemovePrivateRoomRes
 */
export declare class RemovePrivateRoomRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): RemovePrivateRoomRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: RemovePrivateRoomRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: RemovePrivateRoomRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: RemovePrivateRoomRes, _writer: BinaryWriter): void;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of RemovePrivateRoomRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<RemovePrivateRoomRes.AsObject>);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): RemovePrivateRoomRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): RemovePrivateRoomRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): RemovePrivateRoomRes.AsProtobufJSON;
}
export declare module RemovePrivateRoomRes {
    /**
     * Standard JavaScript object representation for RemovePrivateRoomRes
     */
    interface AsObject {
    }
    /**
     * Protobuf JSON representation for RemovePrivateRoomRes
     */
    interface AsProtobufJSON {
    }
}
/**
 * Message implementation for proto.pub.v1.query.AddAvatarReq
 */
export declare class AddAvatarReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): AddAvatarReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: AddAvatarReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: AddAvatarReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: AddAvatarReq, _writer: BinaryWriter): void;
    private _avatar?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of AddAvatarReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<AddAvatarReq.AsObject>);
    get avatar(): protoPubV1Models018.Avatar | undefined;
    set avatar(value: protoPubV1Models018.Avatar | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): AddAvatarReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): AddAvatarReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): AddAvatarReq.AsProtobufJSON;
}
export declare module AddAvatarReq {
    /**
     * Standard JavaScript object representation for AddAvatarReq
     */
    interface AsObject {
        avatar?: protoPubV1Models018.Avatar.AsObject;
    }
    /**
     * Protobuf JSON representation for AddAvatarReq
     */
    interface AsProtobufJSON {
        avatar?: protoPubV1Models018.Avatar.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.query.AddAvatarRes
 */
export declare class AddAvatarRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): AddAvatarRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: AddAvatarRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: AddAvatarRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: AddAvatarRes, _writer: BinaryWriter): void;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of AddAvatarRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<AddAvatarRes.AsObject>);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): AddAvatarRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): AddAvatarRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): AddAvatarRes.AsProtobufJSON;
}
export declare module AddAvatarRes {
    /**
     * Standard JavaScript object representation for AddAvatarRes
     */
    interface AsObject {
    }
    /**
     * Protobuf JSON representation for AddAvatarRes
     */
    interface AsProtobufJSON {
    }
}
/**
 * Message implementation for proto.pub.v1.query.RemoveAvatarReq
 */
export declare class RemoveAvatarReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): RemoveAvatarReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: RemoveAvatarReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: RemoveAvatarReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: RemoveAvatarReq, _writer: BinaryWriter): void;
    private _avatar?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of RemoveAvatarReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<RemoveAvatarReq.AsObject>);
    get avatar(): protoPubV1Models018.Avatar | undefined;
    set avatar(value: protoPubV1Models018.Avatar | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): RemoveAvatarReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): RemoveAvatarReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): RemoveAvatarReq.AsProtobufJSON;
}
export declare module RemoveAvatarReq {
    /**
     * Standard JavaScript object representation for RemoveAvatarReq
     */
    interface AsObject {
        avatar?: protoPubV1Models018.Avatar.AsObject;
    }
    /**
     * Protobuf JSON representation for RemoveAvatarReq
     */
    interface AsProtobufJSON {
        avatar?: protoPubV1Models018.Avatar.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.query.RemoveAvatarRes
 */
export declare class RemoveAvatarRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): RemoveAvatarRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: RemoveAvatarRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: RemoveAvatarRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: RemoveAvatarRes, _writer: BinaryWriter): void;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of RemoveAvatarRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<RemoveAvatarRes.AsObject>);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): RemoveAvatarRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): RemoveAvatarRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): RemoveAvatarRes.AsProtobufJSON;
}
export declare module RemoveAvatarRes {
    /**
     * Standard JavaScript object representation for RemoveAvatarRes
     */
    interface AsObject {
    }
    /**
     * Protobuf JSON representation for RemoveAvatarRes
     */
    interface AsProtobufJSON {
    }
}
/**
 * Message implementation for proto.pub.v1.query.SearchInMessagesReq
 */
export declare class SearchInMessagesReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): SearchInMessagesReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: SearchInMessagesReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: SearchInMessagesReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: SearchInMessagesReq, _writer: BinaryWriter): void;
    private _searchTerm?;
    private _pointer?;
    private _limit?;
    private _rooms?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of SearchInMessagesReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<SearchInMessagesReq.AsObject>);
    get searchTerm(): string | undefined;
    set searchTerm(value: string | undefined);
    get pointer(): string | undefined;
    set pointer(value: string | undefined);
    get limit(): string | undefined;
    set limit(value: string | undefined);
    get rooms(): protoPubV1Models000.Uid[] | undefined;
    set rooms(value: protoPubV1Models000.Uid[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): SearchInMessagesReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): SearchInMessagesReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): SearchInMessagesReq.AsProtobufJSON;
}
export declare module SearchInMessagesReq {
    /**
     * Standard JavaScript object representation for SearchInMessagesReq
     */
    interface AsObject {
        searchTerm?: string;
        pointer?: string;
        limit?: string;
        rooms?: protoPubV1Models000.Uid.AsObject[];
    }
    /**
     * Protobuf JSON representation for SearchInMessagesReq
     */
    interface AsProtobufJSON {
        searchTerm?: string;
        pointer?: string;
        limit?: string;
        rooms?: protoPubV1Models000.Uid.AsProtobufJSON[] | null;
    }
}
/**
 * Message implementation for proto.pub.v1.query.MessageMetadata
 */
export declare class MessageMetadata implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): MessageMetadata;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: MessageMetadata): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: MessageMetadata, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: MessageMetadata, _writer: BinaryWriter): void;
    private _id?;
    private _time?;
    private _from?;
    private _to?;
    private _text?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of MessageMetadata to deeply clone from
     */
    constructor(_value?: RecursivePartial<MessageMetadata.AsObject>);
    get id(): string | undefined;
    set id(value: string | undefined);
    get time(): string | undefined;
    set time(value: string | undefined);
    get from(): protoPubV1Models000.Uid | undefined;
    set from(value: protoPubV1Models000.Uid | undefined);
    get to(): protoPubV1Models000.Uid | undefined;
    set to(value: protoPubV1Models000.Uid | undefined);
    get text(): string | undefined;
    set text(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): MessageMetadata.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): MessageMetadata.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): MessageMetadata.AsProtobufJSON;
}
export declare module MessageMetadata {
    /**
     * Standard JavaScript object representation for MessageMetadata
     */
    interface AsObject {
        id?: string;
        time?: string;
        from?: protoPubV1Models000.Uid.AsObject;
        to?: protoPubV1Models000.Uid.AsObject;
        text?: string;
    }
    /**
     * Protobuf JSON representation for MessageMetadata
     */
    interface AsProtobufJSON {
        id?: string;
        time?: string;
        from?: protoPubV1Models000.Uid.AsProtobufJSON | null;
        to?: protoPubV1Models000.Uid.AsProtobufJSON | null;
        text?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.query.SearchInMessagesRes
 */
export declare class SearchInMessagesRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): SearchInMessagesRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: SearchInMessagesRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: SearchInMessagesRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: SearchInMessagesRes, _writer: BinaryWriter): void;
    private _messages?;
    private _finished?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of SearchInMessagesRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<SearchInMessagesRes.AsObject>);
    get messages(): MessageMetadata[] | undefined;
    set messages(value: MessageMetadata[] | undefined);
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
    toObject(): SearchInMessagesRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): SearchInMessagesRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): SearchInMessagesRes.AsProtobufJSON;
}
export declare module SearchInMessagesRes {
    /**
     * Standard JavaScript object representation for SearchInMessagesRes
     */
    interface AsObject {
        messages?: MessageMetadata.AsObject[];
        finished?: boolean;
    }
    /**
     * Protobuf JSON representation for SearchInMessagesRes
     */
    interface AsProtobufJSON {
        messages?: MessageMetadata.AsProtobufJSON[] | null;
        finished?: boolean;
    }
}
/**
 * Message implementation for proto.pub.v1.query.SendGlitchReq
 */
export declare class SendGlitchReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): SendGlitchReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: SendGlitchReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: SendGlitchReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: SendGlitchReq, _writer: BinaryWriter): void;
    private _offlineNotification?;
    private _glitch;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of SendGlitchReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<SendGlitchReq.AsObject>);
    get offlineNotification(): GlitchOfOfflineNotification | undefined;
    set offlineNotification(value: GlitchOfOfflineNotification | undefined);
    get glitch(): SendGlitchReq.GlitchCase;
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): SendGlitchReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): SendGlitchReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): SendGlitchReq.AsProtobufJSON;
}
export declare module SendGlitchReq {
    /**
     * Standard JavaScript object representation for SendGlitchReq
     */
    interface AsObject {
        offlineNotification?: GlitchOfOfflineNotification.AsObject;
    }
    /**
     * Protobuf JSON representation for SendGlitchReq
     */
    interface AsProtobufJSON {
        offlineNotification?: GlitchOfOfflineNotification.AsProtobufJSON | null;
    }
    enum GlitchCase {
        none = 0,
        offlineNotification = 1
    }
}
/**
 * Message implementation for proto.pub.v1.query.GlitchOfOfflineNotification
 */
export declare class GlitchOfOfflineNotification implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GlitchOfOfflineNotification;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GlitchOfOfflineNotification): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GlitchOfOfflineNotification, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GlitchOfOfflineNotification, _writer: BinaryWriter): void;
    private _room?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GlitchOfOfflineNotification to deeply clone from
     */
    constructor(_value?: RecursivePartial<GlitchOfOfflineNotification.AsObject>);
    get room(): protoPubV1Models000.Uid | undefined;
    set room(value: protoPubV1Models000.Uid | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GlitchOfOfflineNotification.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GlitchOfOfflineNotification.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GlitchOfOfflineNotification.AsProtobufJSON;
}
export declare module GlitchOfOfflineNotification {
    /**
     * Standard JavaScript object representation for GlitchOfOfflineNotification
     */
    interface AsObject {
        room?: protoPubV1Models000.Uid.AsObject;
    }
    /**
     * Protobuf JSON representation for GlitchOfOfflineNotification
     */
    interface AsProtobufJSON {
        room?: protoPubV1Models000.Uid.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.query.SendGlitchRes
 */
export declare class SendGlitchRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): SendGlitchRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: SendGlitchRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: SendGlitchRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: SendGlitchRes, _writer: BinaryWriter): void;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of SendGlitchRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<SendGlitchRes.AsObject>);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): SendGlitchRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): SendGlitchRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): SendGlitchRes.AsProtobufJSON;
}
export declare module SendGlitchRes {
    /**
     * Standard JavaScript object representation for SendGlitchRes
     */
    interface AsObject {
    }
    /**
     * Protobuf JSON representation for SendGlitchRes
     */
    interface AsProtobufJSON {
    }
}
/**
 * Message implementation for proto.pub.v1.query.GetTimeReq
 */
export declare class GetTimeReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetTimeReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetTimeReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetTimeReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetTimeReq, _writer: BinaryWriter): void;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetTimeReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetTimeReq.AsObject>);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetTimeReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetTimeReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetTimeReq.AsProtobufJSON;
}
export declare module GetTimeReq {
    /**
     * Standard JavaScript object representation for GetTimeReq
     */
    interface AsObject {
    }
    /**
     * Protobuf JSON representation for GetTimeReq
     */
    interface AsProtobufJSON {
    }
}
/**
 * Message implementation for proto.pub.v1.query.GetTimeRes
 */
export declare class GetTimeRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetTimeRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetTimeRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetTimeRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetTimeRes, _writer: BinaryWriter): void;
    private _currentTime?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetTimeRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetTimeRes.AsObject>);
    get currentTime(): string | undefined;
    set currentTime(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetTimeRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetTimeRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetTimeRes.AsProtobufJSON;
}
export declare module GetTimeRes {
    /**
     * Standard JavaScript object representation for GetTimeRes
     */
    interface AsObject {
        currentTime?: string;
    }
    /**
     * Protobuf JSON representation for GetTimeRes
     */
    interface AsProtobufJSON {
        currentTime?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.query.ForwardMessagesReq
 */
export declare class ForwardMessagesReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ForwardMessagesReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ForwardMessagesReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ForwardMessagesReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ForwardMessagesReq, _writer: BinaryWriter): void;
    private _fromRoom?;
    private _toRoom?;
    private _messageIdList?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ForwardMessagesReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<ForwardMessagesReq.AsObject>);
    get fromRoom(): protoPubV1Models000.Uid | undefined;
    set fromRoom(value: protoPubV1Models000.Uid | undefined);
    get toRoom(): protoPubV1Models000.Uid | undefined;
    set toRoom(value: protoPubV1Models000.Uid | undefined);
    get messageIdList(): string[] | undefined;
    set messageIdList(value: string[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ForwardMessagesReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ForwardMessagesReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ForwardMessagesReq.AsProtobufJSON;
}
export declare module ForwardMessagesReq {
    /**
     * Standard JavaScript object representation for ForwardMessagesReq
     */
    interface AsObject {
        fromRoom?: protoPubV1Models000.Uid.AsObject;
        toRoom?: protoPubV1Models000.Uid.AsObject;
        messageIdList?: string[];
    }
    /**
     * Protobuf JSON representation for ForwardMessagesReq
     */
    interface AsProtobufJSON {
        fromRoom?: protoPubV1Models000.Uid.AsProtobufJSON | null;
        toRoom?: protoPubV1Models000.Uid.AsProtobufJSON | null;
        messageIdList?: string[];
    }
}
/**
 * Message implementation for proto.pub.v1.query.ForwardMessagesRes
 */
export declare class ForwardMessagesRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ForwardMessagesRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ForwardMessagesRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ForwardMessagesRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ForwardMessagesRes, _writer: BinaryWriter): void;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ForwardMessagesRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<ForwardMessagesRes.AsObject>);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ForwardMessagesRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ForwardMessagesRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ForwardMessagesRes.AsProtobufJSON;
}
export declare module ForwardMessagesRes {
    /**
     * Standard JavaScript object representation for ForwardMessagesRes
     */
    interface AsObject {
    }
    /**
     * Protobuf JSON representation for ForwardMessagesRes
     */
    interface AsProtobufJSON {
    }
}
/**
 * Message implementation for proto.pub.v1.query.CreateGroupCallReq
 */
export declare class CreateGroupCallReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): CreateGroupCallReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CreateGroupCallReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: CreateGroupCallReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: CreateGroupCallReq, _writer: BinaryWriter): void;
    private _room?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CreateGroupCallReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<CreateGroupCallReq.AsObject>);
    get room(): protoPubV1Models000.Uid | undefined;
    set room(value: protoPubV1Models000.Uid | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): CreateGroupCallReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): CreateGroupCallReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): CreateGroupCallReq.AsProtobufJSON;
}
export declare module CreateGroupCallReq {
    /**
     * Standard JavaScript object representation for CreateGroupCallReq
     */
    interface AsObject {
        room?: protoPubV1Models000.Uid.AsObject;
    }
    /**
     * Protobuf JSON representation for CreateGroupCallReq
     */
    interface AsProtobufJSON {
        room?: protoPubV1Models000.Uid.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.query.CreateGroupCallRes
 */
export declare class CreateGroupCallRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): CreateGroupCallRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CreateGroupCallRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: CreateGroupCallRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: CreateGroupCallRes, _writer: BinaryWriter): void;
    private _token?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CreateGroupCallRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<CreateGroupCallRes.AsObject>);
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
    toObject(): CreateGroupCallRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): CreateGroupCallRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): CreateGroupCallRes.AsProtobufJSON;
}
export declare module CreateGroupCallRes {
    /**
     * Standard JavaScript object representation for CreateGroupCallRes
     */
    interface AsObject {
        token?: string;
    }
    /**
     * Protobuf JSON representation for CreateGroupCallRes
     */
    interface AsProtobufJSON {
        token?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.query.EndGroupCallReq
 */
export declare class EndGroupCallReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): EndGroupCallReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: EndGroupCallReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: EndGroupCallReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: EndGroupCallReq, _writer: BinaryWriter): void;
    private _room?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of EndGroupCallReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<EndGroupCallReq.AsObject>);
    get room(): protoPubV1Models000.Uid | undefined;
    set room(value: protoPubV1Models000.Uid | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): EndGroupCallReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): EndGroupCallReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): EndGroupCallReq.AsProtobufJSON;
}
export declare module EndGroupCallReq {
    /**
     * Standard JavaScript object representation for EndGroupCallReq
     */
    interface AsObject {
        room?: protoPubV1Models000.Uid.AsObject;
    }
    /**
     * Protobuf JSON representation for EndGroupCallReq
     */
    interface AsProtobufJSON {
        room?: protoPubV1Models000.Uid.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.query.EndGroupCallRes
 */
export declare class EndGroupCallRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): EndGroupCallRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: EndGroupCallRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: EndGroupCallRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: EndGroupCallRes, _writer: BinaryWriter): void;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of EndGroupCallRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<EndGroupCallRes.AsObject>);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): EndGroupCallRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): EndGroupCallRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): EndGroupCallRes.AsProtobufJSON;
}
export declare module EndGroupCallRes {
    /**
     * Standard JavaScript object representation for EndGroupCallRes
     */
    interface AsObject {
    }
    /**
     * Protobuf JSON representation for EndGroupCallRes
     */
    interface AsProtobufJSON {
    }
}
