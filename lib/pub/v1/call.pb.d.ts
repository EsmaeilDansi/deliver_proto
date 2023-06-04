import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as protoPubV1Models001 from '../../pub/v1/models/uid.pb';
import * as protoPubV1Models002 from '../../pub/v1/models/call.pb';
/**
 * Message implementation for proto.pub.v1.call.JoinCallReq
 */
export declare class JoinCallReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): JoinCallReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: JoinCallReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: JoinCallReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: JoinCallReq, _writer: BinaryWriter): void;
    private _room?;
    private _token?;
    private _callOffer?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of JoinCallReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<JoinCallReq.AsObject>);
    get room(): protoPubV1Models001.Uid | undefined;
    set room(value: protoPubV1Models001.Uid | undefined);
    get token(): string | undefined;
    set token(value: string | undefined);
    get callOffer(): protoPubV1Models002.CallOfferByClient | undefined;
    set callOffer(value: protoPubV1Models002.CallOfferByClient | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): JoinCallReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): JoinCallReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): JoinCallReq.AsProtobufJSON;
}
export declare module JoinCallReq {
    /**
     * Standard JavaScript object representation for JoinCallReq
     */
    interface AsObject {
        room?: protoPubV1Models001.Uid.AsObject;
        token?: string;
        callOffer?: protoPubV1Models002.CallOfferByClient.AsObject;
    }
    /**
     * Protobuf JSON representation for JoinCallReq
     */
    interface AsProtobufJSON {
        room?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        token?: string;
        callOffer?: protoPubV1Models002.CallOfferByClient.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.call.JoinCallRes
 */
export declare class JoinCallRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): JoinCallRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: JoinCallRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: JoinCallRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: JoinCallRes, _writer: BinaryWriter): void;
    private _callAnswer?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of JoinCallRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<JoinCallRes.AsObject>);
    get callAnswer(): protoPubV1Models002.CallAnswerByClient | undefined;
    set callAnswer(value: protoPubV1Models002.CallAnswerByClient | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): JoinCallRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): JoinCallRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): JoinCallRes.AsProtobufJSON;
}
export declare module JoinCallRes {
    /**
     * Standard JavaScript object representation for JoinCallRes
     */
    interface AsObject {
        callAnswer?: protoPubV1Models002.CallAnswerByClient.AsObject;
    }
    /**
     * Protobuf JSON representation for JoinCallRes
     */
    interface AsProtobufJSON {
        callAnswer?: protoPubV1Models002.CallAnswerByClient.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.call.EndCallReq
 */
export declare class EndCallReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): EndCallReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: EndCallReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: EndCallReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: EndCallReq, _writer: BinaryWriter): void;
    private _room?;
    private _token?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of EndCallReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<EndCallReq.AsObject>);
    get room(): protoPubV1Models001.Uid | undefined;
    set room(value: protoPubV1Models001.Uid | undefined);
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
    toObject(): EndCallReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): EndCallReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): EndCallReq.AsProtobufJSON;
}
export declare module EndCallReq {
    /**
     * Standard JavaScript object representation for EndCallReq
     */
    interface AsObject {
        room?: protoPubV1Models001.Uid.AsObject;
        token?: string;
    }
    /**
     * Protobuf JSON representation for EndCallReq
     */
    interface AsProtobufJSON {
        room?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        token?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.call.EndCallRes
 */
export declare class EndCallRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): EndCallRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: EndCallRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: EndCallRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: EndCallRes, _writer: BinaryWriter): void;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of EndCallRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<EndCallRes.AsObject>);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): EndCallRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): EndCallRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): EndCallRes.AsProtobufJSON;
}
export declare module EndCallRes {
    /**
     * Standard JavaScript object representation for EndCallRes
     */
    interface AsObject {
    }
    /**
     * Protobuf JSON representation for EndCallRes
     */
    interface AsProtobufJSON {
    }
}
