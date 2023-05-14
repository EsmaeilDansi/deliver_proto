import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as protoPubV1Models001 from '../../pub/v1/models/uid.pb';
import * as protoPubV1Models002 from '../../pub/v1/models/poll.pb';
/**
 * Message implementation for proto.pub.v1.live_location.CreatePollReq
 */
export declare class CreatePollReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): CreatePollReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CreatePollReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: CreatePollReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: CreatePollReq, _writer: BinaryWriter): void;
    private _poll?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CreatePollReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<CreatePollReq.AsObject>);
    get poll(): protoPubV1Models002.Poll | undefined;
    set poll(value: protoPubV1Models002.Poll | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): CreatePollReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): CreatePollReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): CreatePollReq.AsProtobufJSON;
}
export declare module CreatePollReq {
    /**
     * Standard JavaScript object representation for CreatePollReq
     */
    interface AsObject {
        poll?: protoPubV1Models002.Poll.AsObject;
    }
    /**
     * Protobuf JSON representation for CreatePollReq
     */
    interface AsProtobufJSON {
        poll?: protoPubV1Models002.Poll.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.live_location.CreatePollRes
 */
export declare class CreatePollRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): CreatePollRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CreatePollRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: CreatePollRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: CreatePollRes, _writer: BinaryWriter): void;
    private _poll?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CreatePollRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<CreatePollRes.AsObject>);
    get poll(): protoPubV1Models002.Poll | undefined;
    set poll(value: protoPubV1Models002.Poll | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): CreatePollRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): CreatePollRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): CreatePollRes.AsProtobufJSON;
}
export declare module CreatePollRes {
    /**
     * Standard JavaScript object representation for CreatePollRes
     */
    interface AsObject {
        poll?: protoPubV1Models002.Poll.AsObject;
    }
    /**
     * Protobuf JSON representation for CreatePollRes
     */
    interface AsProtobufJSON {
        poll?: protoPubV1Models002.Poll.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.live_location.GetMeReq
 */
export declare class GetMeReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetMeReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetMeReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetMeReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetMeReq, _writer: BinaryWriter): void;
    private _uuid?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetMeReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetMeReq.AsObject>);
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
    toObject(): GetMeReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetMeReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetMeReq.AsProtobufJSON;
}
export declare module GetMeReq {
    /**
     * Standard JavaScript object representation for GetMeReq
     */
    interface AsObject {
        uuid?: string;
    }
    /**
     * Protobuf JSON representation for GetMeReq
     */
    interface AsProtobufJSON {
        uuid?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.live_location.GetMeRes
 */
export declare class GetMeRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetMeRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetMeRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetMeRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetMeRes, _writer: BinaryWriter): void;
    private _selectedOptions?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetMeRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetMeRes.AsObject>);
    get selectedOptions(): number[] | undefined;
    set selectedOptions(value: number[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetMeRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetMeRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetMeRes.AsProtobufJSON;
}
export declare module GetMeRes {
    /**
     * Standard JavaScript object representation for GetMeRes
     */
    interface AsObject {
        selectedOptions?: number[];
    }
    /**
     * Protobuf JSON representation for GetMeRes
     */
    interface AsProtobufJSON {
        selectedOptions?: number[];
    }
}
/**
 * Message implementation for proto.pub.v1.live_location.DoPollReq
 */
export declare class DoPollReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): DoPollReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: DoPollReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: DoPollReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: DoPollReq, _writer: BinaryWriter): void;
    private _uuid?;
    private _options?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of DoPollReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<DoPollReq.AsObject>);
    get uuid(): string | undefined;
    set uuid(value: string | undefined);
    get options(): number[] | undefined;
    set options(value: number[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): DoPollReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): DoPollReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): DoPollReq.AsProtobufJSON;
}
export declare module DoPollReq {
    /**
     * Standard JavaScript object representation for DoPollReq
     */
    interface AsObject {
        uuid?: string;
        options?: number[];
    }
    /**
     * Protobuf JSON representation for DoPollReq
     */
    interface AsProtobufJSON {
        uuid?: string;
        options?: number[];
    }
}
/**
 * Message implementation for proto.pub.v1.live_location.DoPollRes
 */
export declare class DoPollRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): DoPollRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: DoPollRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: DoPollRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: DoPollRes, _writer: BinaryWriter): void;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of DoPollRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<DoPollRes.AsObject>);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): DoPollRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): DoPollRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): DoPollRes.AsProtobufJSON;
}
export declare module DoPollRes {
    /**
     * Standard JavaScript object representation for DoPollRes
     */
    interface AsObject {
    }
    /**
     * Protobuf JSON representation for DoPollRes
     */
    interface AsProtobufJSON {
    }
}
/**
 * Message implementation for proto.pub.v1.live_location.GetOverallResultReq
 */
export declare class GetOverallResultReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetOverallResultReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetOverallResultReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetOverallResultReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetOverallResultReq, _writer: BinaryWriter): void;
    private _uuid?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetOverallResultReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetOverallResultReq.AsObject>);
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
    toObject(): GetOverallResultReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetOverallResultReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetOverallResultReq.AsProtobufJSON;
}
export declare module GetOverallResultReq {
    /**
     * Standard JavaScript object representation for GetOverallResultReq
     */
    interface AsObject {
        uuid?: string;
    }
    /**
     * Protobuf JSON representation for GetOverallResultReq
     */
    interface AsProtobufJSON {
        uuid?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.live_location.GetOverallResultRes
 */
export declare class GetOverallResultRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetOverallResultRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetOverallResultRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetOverallResultRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetOverallResultRes, _writer: BinaryWriter): void;
    private _results?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetOverallResultRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetOverallResultRes.AsObject>);
    get results(): {
        [prop: number]: number;
    } | undefined;
    set results(value: {
        [prop: number]: number;
    } | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetOverallResultRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetOverallResultRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetOverallResultRes.AsProtobufJSON;
}
export declare module GetOverallResultRes {
    /**
     * Standard JavaScript object representation for GetOverallResultRes
     */
    interface AsObject {
        results?: {
            [prop: number]: number;
        };
    }
    /**
     * Protobuf JSON representation for GetOverallResultRes
     */
    interface AsProtobufJSON {
        results?: {
            [prop: number]: number;
        };
    }
    /**
     * Message implementation for proto.pub.v1.live_location.GetOverallResultRes.ResultsEntry
     */
    class ResultsEntry implements GrpcMessage {
        static id: string;
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes: ByteSource): ResultsEntry;
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance: ResultsEntry): void;
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        static deserializeBinaryFromReader(_instance: ResultsEntry, _reader: BinaryReader): void;
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance: ResultsEntry, _writer: BinaryWriter): void;
        private _key?;
        private _value?;
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of ResultsEntry to deeply clone from
         */
        constructor(_value?: RecursivePartial<ResultsEntry.AsObject>);
        get key(): number | undefined;
        set key(value: number | undefined);
        get value(): number | undefined;
        set value(value: number | undefined);
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        serializeBinary(): Uint8Array;
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        toObject(): ResultsEntry.AsObject;
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        toJSON(): ResultsEntry.AsObject;
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        toProtobufJSON(options?: ToProtobufJSONOptions): ResultsEntry.AsProtobufJSON;
    }
    module ResultsEntry {
        /**
         * Standard JavaScript object representation for ResultsEntry
         */
        interface AsObject {
            key?: number;
            value?: number;
        }
        /**
         * Protobuf JSON representation for ResultsEntry
         */
        interface AsProtobufJSON {
            key?: number;
            value?: number;
        }
    }
}
/**
 * Message implementation for proto.pub.v1.live_location.EditPollExpireTimeReq
 */
export declare class EditPollExpireTimeReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): EditPollExpireTimeReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: EditPollExpireTimeReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: EditPollExpireTimeReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: EditPollExpireTimeReq, _writer: BinaryWriter): void;
    private _uuid?;
    private _expireTime?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of EditPollExpireTimeReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<EditPollExpireTimeReq.AsObject>);
    get uuid(): string | undefined;
    set uuid(value: string | undefined);
    get expireTime(): string | undefined;
    set expireTime(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): EditPollExpireTimeReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): EditPollExpireTimeReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): EditPollExpireTimeReq.AsProtobufJSON;
}
export declare module EditPollExpireTimeReq {
    /**
     * Standard JavaScript object representation for EditPollExpireTimeReq
     */
    interface AsObject {
        uuid?: string;
        expireTime?: string;
    }
    /**
     * Protobuf JSON representation for EditPollExpireTimeReq
     */
    interface AsProtobufJSON {
        uuid?: string;
        expireTime?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.live_location.EditPollExpireTimeRes
 */
export declare class EditPollExpireTimeRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): EditPollExpireTimeRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: EditPollExpireTimeRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: EditPollExpireTimeRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: EditPollExpireTimeRes, _writer: BinaryWriter): void;
    private _poll?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of EditPollExpireTimeRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<EditPollExpireTimeRes.AsObject>);
    get poll(): protoPubV1Models002.Poll | undefined;
    set poll(value: protoPubV1Models002.Poll | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): EditPollExpireTimeRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): EditPollExpireTimeRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): EditPollExpireTimeRes.AsProtobufJSON;
}
export declare module EditPollExpireTimeRes {
    /**
     * Standard JavaScript object representation for EditPollExpireTimeRes
     */
    interface AsObject {
        poll?: protoPubV1Models002.Poll.AsObject;
    }
    /**
     * Protobuf JSON representation for EditPollExpireTimeRes
     */
    interface AsProtobufJSON {
        poll?: protoPubV1Models002.Poll.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.live_location.GetUsersSelectedOptionResultReq
 */
export declare class GetUsersSelectedOptionResultReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetUsersSelectedOptionResultReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetUsersSelectedOptionResultReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetUsersSelectedOptionResultReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetUsersSelectedOptionResultReq, _writer: BinaryWriter): void;
    private _uuid?;
    private _option?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetUsersSelectedOptionResultReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetUsersSelectedOptionResultReq.AsObject>);
    get uuid(): string | undefined;
    set uuid(value: string | undefined);
    get option(): number | undefined;
    set option(value: number | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetUsersSelectedOptionResultReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetUsersSelectedOptionResultReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetUsersSelectedOptionResultReq.AsProtobufJSON;
}
export declare module GetUsersSelectedOptionResultReq {
    /**
     * Standard JavaScript object representation for GetUsersSelectedOptionResultReq
     */
    interface AsObject {
        uuid?: string;
        option?: number;
    }
    /**
     * Protobuf JSON representation for GetUsersSelectedOptionResultReq
     */
    interface AsProtobufJSON {
        uuid?: string;
        option?: number;
    }
}
/**
 * Message implementation for proto.pub.v1.live_location.GetUsersSelectedOptionResultRes
 */
export declare class GetUsersSelectedOptionResultRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetUsersSelectedOptionResultRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetUsersSelectedOptionResultRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetUsersSelectedOptionResultRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetUsersSelectedOptionResultRes, _writer: BinaryWriter): void;
    private _totalCount?;
    private _users?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetUsersSelectedOptionResultRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetUsersSelectedOptionResultRes.AsObject>);
    get totalCount(): number | undefined;
    set totalCount(value: number | undefined);
    get users(): protoPubV1Models001.Uid[] | undefined;
    set users(value: protoPubV1Models001.Uid[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetUsersSelectedOptionResultRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetUsersSelectedOptionResultRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetUsersSelectedOptionResultRes.AsProtobufJSON;
}
export declare module GetUsersSelectedOptionResultRes {
    /**
     * Standard JavaScript object representation for GetUsersSelectedOptionResultRes
     */
    interface AsObject {
        totalCount?: number;
        users?: protoPubV1Models001.Uid.AsObject[];
    }
    /**
     * Protobuf JSON representation for GetUsersSelectedOptionResultRes
     */
    interface AsProtobufJSON {
        totalCount?: number;
        users?: protoPubV1Models001.Uid.AsProtobufJSON[] | null;
    }
}
