import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as protoPubV1Models001 from '../../pub/v1/models/uid.pb';
import * as protoPubV1Models002 from '../../pub/v1/models/payment.pb';
/**
 * Message implementation for proto.pub.v1.payment.GetUserInfoReq
 */
export declare class GetUserInfoReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetUserInfoReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetUserInfoReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetUserInfoReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetUserInfoReq, _writer: BinaryWriter): void;
    private _forceToSyncWithPaymentProvider?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetUserInfoReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetUserInfoReq.AsObject>);
    get forceToSyncWithPaymentProvider(): boolean | undefined;
    set forceToSyncWithPaymentProvider(value: boolean | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetUserInfoReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetUserInfoReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetUserInfoReq.AsProtobufJSON;
}
export declare module GetUserInfoReq {
    /**
     * Standard JavaScript object representation for GetUserInfoReq
     */
    interface AsObject {
        forceToSyncWithPaymentProvider?: boolean;
    }
    /**
     * Protobuf JSON representation for GetUserInfoReq
     */
    interface AsProtobufJSON {
        forceToSyncWithPaymentProvider?: boolean;
    }
}
/**
 * Message implementation for proto.pub.v1.payment.GetUserInfoRes
 */
export declare class GetUserInfoRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetUserInfoRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetUserInfoRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetUserInfoRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetUserInfoRes, _writer: BinaryWriter): void;
    private _lastUpdateTime?;
    private _balance?;
    private _withdrawLimit?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetUserInfoRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetUserInfoRes.AsObject>);
    get lastUpdateTime(): string | undefined;
    set lastUpdateTime(value: string | undefined);
    get balance(): string | undefined;
    set balance(value: string | undefined);
    get withdrawLimit(): string | undefined;
    set withdrawLimit(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetUserInfoRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetUserInfoRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetUserInfoRes.AsProtobufJSON;
}
export declare module GetUserInfoRes {
    /**
     * Standard JavaScript object representation for GetUserInfoRes
     */
    interface AsObject {
        lastUpdateTime?: string;
        balance?: string;
        withdrawLimit?: string;
    }
    /**
     * Protobuf JSON representation for GetUserInfoRes
     */
    interface AsProtobufJSON {
        lastUpdateTime?: string;
        balance?: string;
        withdrawLimit?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.payment.GetTransactionsCountReq
 */
export declare class GetTransactionsCountReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetTransactionsCountReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetTransactionsCountReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetTransactionsCountReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetTransactionsCountReq, _writer: BinaryWriter): void;
    private _startFrom?;
    private _endAt?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetTransactionsCountReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetTransactionsCountReq.AsObject>);
    get startFrom(): string | undefined;
    set startFrom(value: string | undefined);
    get endAt(): string | undefined;
    set endAt(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetTransactionsCountReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetTransactionsCountReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetTransactionsCountReq.AsProtobufJSON;
}
export declare module GetTransactionsCountReq {
    /**
     * Standard JavaScript object representation for GetTransactionsCountReq
     */
    interface AsObject {
        startFrom?: string;
        endAt?: string;
    }
    /**
     * Protobuf JSON representation for GetTransactionsCountReq
     */
    interface AsProtobufJSON {
        startFrom?: string;
        endAt?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.payment.GetTransactionsCountRes
 */
export declare class GetTransactionsCountRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetTransactionsCountRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetTransactionsCountRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetTransactionsCountRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetTransactionsCountRes, _writer: BinaryWriter): void;
    private _count?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetTransactionsCountRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetTransactionsCountRes.AsObject>);
    get count(): string | undefined;
    set count(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetTransactionsCountRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetTransactionsCountRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetTransactionsCountRes.AsProtobufJSON;
}
export declare module GetTransactionsCountRes {
    /**
     * Standard JavaScript object representation for GetTransactionsCountRes
     */
    interface AsObject {
        count?: string;
    }
    /**
     * Protobuf JSON representation for GetTransactionsCountRes
     */
    interface AsProtobufJSON {
        count?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.payment.GetWithdrawsCountReq
 */
export declare class GetWithdrawsCountReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetWithdrawsCountReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetWithdrawsCountReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetWithdrawsCountReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetWithdrawsCountReq, _writer: BinaryWriter): void;
    private _startFrom?;
    private _endAt?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetWithdrawsCountReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetWithdrawsCountReq.AsObject>);
    get startFrom(): string | undefined;
    set startFrom(value: string | undefined);
    get endAt(): string | undefined;
    set endAt(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetWithdrawsCountReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetWithdrawsCountReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetWithdrawsCountReq.AsProtobufJSON;
}
export declare module GetWithdrawsCountReq {
    /**
     * Standard JavaScript object representation for GetWithdrawsCountReq
     */
    interface AsObject {
        startFrom?: string;
        endAt?: string;
    }
    /**
     * Protobuf JSON representation for GetWithdrawsCountReq
     */
    interface AsProtobufJSON {
        startFrom?: string;
        endAt?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.payment.GetWithdrawsCountRes
 */
export declare class GetWithdrawsCountRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetWithdrawsCountRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetWithdrawsCountRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetWithdrawsCountRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetWithdrawsCountRes, _writer: BinaryWriter): void;
    private _count?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetWithdrawsCountRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetWithdrawsCountRes.AsObject>);
    get count(): string | undefined;
    set count(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetWithdrawsCountRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetWithdrawsCountRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetWithdrawsCountRes.AsProtobufJSON;
}
export declare module GetWithdrawsCountRes {
    /**
     * Standard JavaScript object representation for GetWithdrawsCountRes
     */
    interface AsObject {
        count?: string;
    }
    /**
     * Protobuf JSON representation for GetWithdrawsCountRes
     */
    interface AsProtobufJSON {
        count?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.payment.GetTransactionsReq
 */
export declare class GetTransactionsReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetTransactionsReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetTransactionsReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetTransactionsReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetTransactionsReq, _writer: BinaryWriter): void;
    private _pointer?;
    private _limit?;
    private _startFrom?;
    private _endAt?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetTransactionsReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetTransactionsReq.AsObject>);
    get pointer(): number | undefined;
    set pointer(value: number | undefined);
    get limit(): number | undefined;
    set limit(value: number | undefined);
    get startFrom(): string | undefined;
    set startFrom(value: string | undefined);
    get endAt(): string | undefined;
    set endAt(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetTransactionsReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetTransactionsReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetTransactionsReq.AsProtobufJSON;
}
export declare module GetTransactionsReq {
    /**
     * Standard JavaScript object representation for GetTransactionsReq
     */
    interface AsObject {
        pointer?: number;
        limit?: number;
        startFrom?: string;
        endAt?: string;
    }
    /**
     * Protobuf JSON representation for GetTransactionsReq
     */
    interface AsProtobufJSON {
        pointer?: number;
        limit?: number;
        startFrom?: string;
        endAt?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.payment.GetTransactionsRes
 */
export declare class GetTransactionsRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetTransactionsRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetTransactionsRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetTransactionsRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetTransactionsRes, _writer: BinaryWriter): void;
    private _transactionList?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetTransactionsRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetTransactionsRes.AsObject>);
    get transactionList(): protoPubV1Models002.Transaction[] | undefined;
    set transactionList(value: protoPubV1Models002.Transaction[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetTransactionsRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetTransactionsRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetTransactionsRes.AsProtobufJSON;
}
export declare module GetTransactionsRes {
    /**
     * Standard JavaScript object representation for GetTransactionsRes
     */
    interface AsObject {
        transactionList?: protoPubV1Models002.Transaction.AsObject[];
    }
    /**
     * Protobuf JSON representation for GetTransactionsRes
     */
    interface AsProtobufJSON {
        transactionList?: protoPubV1Models002.Transaction.AsProtobufJSON[] | null;
    }
}
/**
 * Message implementation for proto.pub.v1.payment.GetWithdrawsReq
 */
export declare class GetWithdrawsReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetWithdrawsReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetWithdrawsReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetWithdrawsReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetWithdrawsReq, _writer: BinaryWriter): void;
    private _pointer?;
    private _limit?;
    private _startFrom?;
    private _endAt?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetWithdrawsReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetWithdrawsReq.AsObject>);
    get pointer(): number | undefined;
    set pointer(value: number | undefined);
    get limit(): number | undefined;
    set limit(value: number | undefined);
    get startFrom(): string | undefined;
    set startFrom(value: string | undefined);
    get endAt(): string | undefined;
    set endAt(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetWithdrawsReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetWithdrawsReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetWithdrawsReq.AsProtobufJSON;
}
export declare module GetWithdrawsReq {
    /**
     * Standard JavaScript object representation for GetWithdrawsReq
     */
    interface AsObject {
        pointer?: number;
        limit?: number;
        startFrom?: string;
        endAt?: string;
    }
    /**
     * Protobuf JSON representation for GetWithdrawsReq
     */
    interface AsProtobufJSON {
        pointer?: number;
        limit?: number;
        startFrom?: string;
        endAt?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.payment.GetWithdrawsRes
 */
export declare class GetWithdrawsRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetWithdrawsRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetWithdrawsRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetWithdrawsRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetWithdrawsRes, _writer: BinaryWriter): void;
    private _withdrawList?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetWithdrawsRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetWithdrawsRes.AsObject>);
    get withdrawList(): protoPubV1Models002.Withdraw[] | undefined;
    set withdrawList(value: protoPubV1Models002.Withdraw[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetWithdrawsRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetWithdrawsRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetWithdrawsRes.AsProtobufJSON;
}
export declare module GetWithdrawsRes {
    /**
     * Standard JavaScript object representation for GetWithdrawsRes
     */
    interface AsObject {
        withdrawList?: protoPubV1Models002.Withdraw.AsObject[];
    }
    /**
     * Protobuf JSON representation for GetWithdrawsRes
     */
    interface AsProtobufJSON {
        withdrawList?: protoPubV1Models002.Withdraw.AsProtobufJSON[] | null;
    }
}
/**
 * Message implementation for proto.pub.v1.payment.TransferReq
 */
export declare class TransferReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): TransferReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: TransferReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: TransferReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: TransferReq, _writer: BinaryWriter): void;
    private _to?;
    private _amount?;
    private _description?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of TransferReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<TransferReq.AsObject>);
    get to(): protoPubV1Models001.Uid | undefined;
    set to(value: protoPubV1Models001.Uid | undefined);
    get amount(): string | undefined;
    set amount(value: string | undefined);
    get description(): string | undefined;
    set description(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): TransferReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): TransferReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): TransferReq.AsProtobufJSON;
}
export declare module TransferReq {
    /**
     * Standard JavaScript object representation for TransferReq
     */
    interface AsObject {
        to?: protoPubV1Models001.Uid.AsObject;
        amount?: string;
        description?: string;
    }
    /**
     * Protobuf JSON representation for TransferReq
     */
    interface AsProtobufJSON {
        to?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        amount?: string;
        description?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.payment.TransferRes
 */
export declare class TransferRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): TransferRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: TransferRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: TransferRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: TransferRes, _writer: BinaryWriter): void;
    private _transaction?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of TransferRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<TransferRes.AsObject>);
    get transaction(): protoPubV1Models002.Transaction | undefined;
    set transaction(value: protoPubV1Models002.Transaction | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): TransferRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): TransferRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): TransferRes.AsProtobufJSON;
}
export declare module TransferRes {
    /**
     * Standard JavaScript object representation for TransferRes
     */
    interface AsObject {
        transaction?: protoPubV1Models002.Transaction.AsObject;
    }
    /**
     * Protobuf JSON representation for TransferRes
     */
    interface AsProtobufJSON {
        transaction?: protoPubV1Models002.Transaction.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.payment.CreatePaymentReq
 */
export declare class CreatePaymentReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): CreatePaymentReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CreatePaymentReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: CreatePaymentReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: CreatePaymentReq, _writer: BinaryWriter): void;
    private _amount?;
    private _description?;
    private _expireAt?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CreatePaymentReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<CreatePaymentReq.AsObject>);
    get amount(): string | undefined;
    set amount(value: string | undefined);
    get description(): string | undefined;
    set description(value: string | undefined);
    get expireAt(): string | undefined;
    set expireAt(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): CreatePaymentReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): CreatePaymentReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): CreatePaymentReq.AsProtobufJSON;
}
export declare module CreatePaymentReq {
    /**
     * Standard JavaScript object representation for CreatePaymentReq
     */
    interface AsObject {
        amount?: string;
        description?: string;
        expireAt?: string;
    }
    /**
     * Protobuf JSON representation for CreatePaymentReq
     */
    interface AsProtobufJSON {
        amount?: string;
        description?: string;
        expireAt?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.payment.CreatePaymentRes
 */
export declare class CreatePaymentRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): CreatePaymentRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CreatePaymentRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: CreatePaymentRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: CreatePaymentRes, _writer: BinaryWriter): void;
    private _payment?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CreatePaymentRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<CreatePaymentRes.AsObject>);
    get payment(): protoPubV1Models002.Payment | undefined;
    set payment(value: protoPubV1Models002.Payment | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): CreatePaymentRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): CreatePaymentRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): CreatePaymentRes.AsProtobufJSON;
}
export declare module CreatePaymentRes {
    /**
     * Standard JavaScript object representation for CreatePaymentRes
     */
    interface AsObject {
        payment?: protoPubV1Models002.Payment.AsObject;
    }
    /**
     * Protobuf JSON representation for CreatePaymentRes
     */
    interface AsProtobufJSON {
        payment?: protoPubV1Models002.Payment.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.payment.PayReq
 */
export declare class PayReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): PayReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: PayReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: PayReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: PayReq, _writer: BinaryWriter): void;
    private _paymentId?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of PayReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<PayReq.AsObject>);
    get paymentId(): string | undefined;
    set paymentId(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): PayReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): PayReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): PayReq.AsProtobufJSON;
}
export declare module PayReq {
    /**
     * Standard JavaScript object representation for PayReq
     */
    interface AsObject {
        paymentId?: string;
    }
    /**
     * Protobuf JSON representation for PayReq
     */
    interface AsProtobufJSON {
        paymentId?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.payment.PayRes
 */
export declare class PayRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): PayRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: PayRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: PayRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: PayRes, _writer: BinaryWriter): void;
    private _paymentId?;
    private _guid?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of PayRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<PayRes.AsObject>);
    get paymentId(): string | undefined;
    set paymentId(value: string | undefined);
    get guid(): string | undefined;
    set guid(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): PayRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): PayRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): PayRes.AsProtobufJSON;
}
export declare module PayRes {
    /**
     * Standard JavaScript object representation for PayRes
     */
    interface AsObject {
        paymentId?: string;
        guid?: string;
    }
    /**
     * Protobuf JSON representation for PayRes
     */
    interface AsProtobufJSON {
        paymentId?: string;
        guid?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.payment.PayConfirmReq
 */
export declare class PayConfirmReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): PayConfirmReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: PayConfirmReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: PayConfirmReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: PayConfirmReq, _writer: BinaryWriter): void;
    private _confirmSms?;
    private _paymentId?;
    private _guid?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of PayConfirmReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<PayConfirmReq.AsObject>);
    get confirmSms(): string | undefined;
    set confirmSms(value: string | undefined);
    get paymentId(): string | undefined;
    set paymentId(value: string | undefined);
    get guid(): string | undefined;
    set guid(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): PayConfirmReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): PayConfirmReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): PayConfirmReq.AsProtobufJSON;
}
export declare module PayConfirmReq {
    /**
     * Standard JavaScript object representation for PayConfirmReq
     */
    interface AsObject {
        confirmSms?: string;
        paymentId?: string;
        guid?: string;
    }
    /**
     * Protobuf JSON representation for PayConfirmReq
     */
    interface AsProtobufJSON {
        confirmSms?: string;
        paymentId?: string;
        guid?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.payment.PayConfirmRes
 */
export declare class PayConfirmRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): PayConfirmRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: PayConfirmRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: PayConfirmRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: PayConfirmRes, _writer: BinaryWriter): void;
    private _transaction?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of PayConfirmRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<PayConfirmRes.AsObject>);
    get transaction(): protoPubV1Models002.Transaction | undefined;
    set transaction(value: protoPubV1Models002.Transaction | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): PayConfirmRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): PayConfirmRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): PayConfirmRes.AsProtobufJSON;
}
export declare module PayConfirmRes {
    /**
     * Standard JavaScript object representation for PayConfirmRes
     */
    interface AsObject {
        transaction?: protoPubV1Models002.Transaction.AsObject;
    }
    /**
     * Protobuf JSON representation for PayConfirmRes
     */
    interface AsProtobufJSON {
        transaction?: protoPubV1Models002.Transaction.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.payment.GetWithdrawTariffReq
 */
export declare class GetWithdrawTariffReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetWithdrawTariffReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetWithdrawTariffReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetWithdrawTariffReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetWithdrawTariffReq, _writer: BinaryWriter): void;
    private _amount?;
    private _sheba?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetWithdrawTariffReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetWithdrawTariffReq.AsObject>);
    get amount(): string | undefined;
    set amount(value: string | undefined);
    get sheba(): string | undefined;
    set sheba(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetWithdrawTariffReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetWithdrawTariffReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetWithdrawTariffReq.AsProtobufJSON;
}
export declare module GetWithdrawTariffReq {
    /**
     * Standard JavaScript object representation for GetWithdrawTariffReq
     */
    interface AsObject {
        amount?: string;
        sheba?: string;
    }
    /**
     * Protobuf JSON representation for GetWithdrawTariffReq
     */
    interface AsProtobufJSON {
        amount?: string;
        sheba?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.payment.GetWithdrawTariffRes
 */
export declare class GetWithdrawTariffRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetWithdrawTariffRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetWithdrawTariffRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetWithdrawTariffRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetWithdrawTariffRes, _writer: BinaryWriter): void;
    private _tariff?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetWithdrawTariffRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetWithdrawTariffRes.AsObject>);
    get tariff(): string | undefined;
    set tariff(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetWithdrawTariffRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetWithdrawTariffRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetWithdrawTariffRes.AsProtobufJSON;
}
export declare module GetWithdrawTariffRes {
    /**
     * Standard JavaScript object representation for GetWithdrawTariffRes
     */
    interface AsObject {
        tariff?: string;
    }
    /**
     * Protobuf JSON representation for GetWithdrawTariffRes
     */
    interface AsProtobufJSON {
        tariff?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.payment.WithdrawReq
 */
export declare class WithdrawReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): WithdrawReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: WithdrawReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: WithdrawReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: WithdrawReq, _writer: BinaryWriter): void;
    private _sheba?;
    private _amount?;
    private _destinationFirstName?;
    private _destinationLastName?;
    private _description?;
    private _destinationPaymentId?;
    private _ipAddress?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of WithdrawReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<WithdrawReq.AsObject>);
    get sheba(): string | undefined;
    set sheba(value: string | undefined);
    get amount(): string | undefined;
    set amount(value: string | undefined);
    get destinationFirstName(): string | undefined;
    set destinationFirstName(value: string | undefined);
    get destinationLastName(): string | undefined;
    set destinationLastName(value: string | undefined);
    get description(): string | undefined;
    set description(value: string | undefined);
    get destinationPaymentId(): string | undefined;
    set destinationPaymentId(value: string | undefined);
    get ipAddress(): string | undefined;
    set ipAddress(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): WithdrawReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): WithdrawReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): WithdrawReq.AsProtobufJSON;
}
export declare module WithdrawReq {
    /**
     * Standard JavaScript object representation for WithdrawReq
     */
    interface AsObject {
        sheba?: string;
        amount?: string;
        destinationFirstName?: string;
        destinationLastName?: string;
        description?: string;
        destinationPaymentId?: string;
        ipAddress?: string;
    }
    /**
     * Protobuf JSON representation for WithdrawReq
     */
    interface AsProtobufJSON {
        sheba?: string;
        amount?: string;
        destinationFirstName?: string;
        destinationLastName?: string;
        description?: string;
        destinationPaymentId?: string;
        ipAddress?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.payment.WithdrawRes
 */
export declare class WithdrawRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): WithdrawRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: WithdrawRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: WithdrawRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: WithdrawRes, _writer: BinaryWriter): void;
    private _withdraw?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of WithdrawRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<WithdrawRes.AsObject>);
    get withdraw(): protoPubV1Models002.Withdraw | undefined;
    set withdraw(value: protoPubV1Models002.Withdraw | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): WithdrawRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): WithdrawRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): WithdrawRes.AsProtobufJSON;
}
export declare module WithdrawRes {
    /**
     * Standard JavaScript object representation for WithdrawRes
     */
    interface AsObject {
        withdraw?: protoPubV1Models002.Withdraw.AsObject;
    }
    /**
     * Protobuf JSON representation for WithdrawRes
     */
    interface AsProtobufJSON {
        withdraw?: protoPubV1Models002.Withdraw.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.payment.GetWithdrawStatusReq
 */
export declare class GetWithdrawStatusReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetWithdrawStatusReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetWithdrawStatusReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetWithdrawStatusReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetWithdrawStatusReq, _writer: BinaryWriter): void;
    private _guid?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetWithdrawStatusReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetWithdrawStatusReq.AsObject>);
    get guid(): string | undefined;
    set guid(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetWithdrawStatusReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetWithdrawStatusReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetWithdrawStatusReq.AsProtobufJSON;
}
export declare module GetWithdrawStatusReq {
    /**
     * Standard JavaScript object representation for GetWithdrawStatusReq
     */
    interface AsObject {
        guid?: string;
    }
    /**
     * Protobuf JSON representation for GetWithdrawStatusReq
     */
    interface AsProtobufJSON {
        guid?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.payment.GetWithdrawStatusRes
 */
export declare class GetWithdrawStatusRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetWithdrawStatusRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetWithdrawStatusRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetWithdrawStatusRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetWithdrawStatusRes, _writer: BinaryWriter): void;
    private _withdraw?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetWithdrawStatusRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetWithdrawStatusRes.AsObject>);
    get withdraw(): protoPubV1Models002.Withdraw | undefined;
    set withdraw(value: protoPubV1Models002.Withdraw | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetWithdrawStatusRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetWithdrawStatusRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetWithdrawStatusRes.AsProtobufJSON;
}
export declare module GetWithdrawStatusRes {
    /**
     * Standard JavaScript object representation for GetWithdrawStatusRes
     */
    interface AsObject {
        withdraw?: protoPubV1Models002.Withdraw.AsObject;
    }
    /**
     * Protobuf JSON representation for GetWithdrawStatusRes
     */
    interface AsProtobufJSON {
        withdraw?: protoPubV1Models002.Withdraw.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.payment.GetPaymentStatusReq
 */
export declare class GetPaymentStatusReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetPaymentStatusReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetPaymentStatusReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetPaymentStatusReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetPaymentStatusReq, _writer: BinaryWriter): void;
    private _paymentId?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetPaymentStatusReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetPaymentStatusReq.AsObject>);
    get paymentId(): string | undefined;
    set paymentId(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetPaymentStatusReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetPaymentStatusReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetPaymentStatusReq.AsProtobufJSON;
}
export declare module GetPaymentStatusReq {
    /**
     * Standard JavaScript object representation for GetPaymentStatusReq
     */
    interface AsObject {
        paymentId?: string;
    }
    /**
     * Protobuf JSON representation for GetPaymentStatusReq
     */
    interface AsProtobufJSON {
        paymentId?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.payment.GetPaymentStatusRes
 */
export declare class GetPaymentStatusRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetPaymentStatusRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetPaymentStatusRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetPaymentStatusRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetPaymentStatusRes, _writer: BinaryWriter): void;
    private _payment?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetPaymentStatusRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetPaymentStatusRes.AsObject>);
    get payment(): protoPubV1Models002.Payment | undefined;
    set payment(value: protoPubV1Models002.Payment | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetPaymentStatusRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetPaymentStatusRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetPaymentStatusRes.AsProtobufJSON;
}
export declare module GetPaymentStatusRes {
    /**
     * Standard JavaScript object representation for GetPaymentStatusRes
     */
    interface AsObject {
        payment?: protoPubV1Models002.Payment.AsObject;
    }
    /**
     * Protobuf JSON representation for GetPaymentStatusRes
     */
    interface AsProtobufJSON {
        payment?: protoPubV1Models002.Payment.AsProtobufJSON | null;
    }
}
