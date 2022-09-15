import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as protoPubV1Models001 from '../../../pub/v1/models/uid.pb';
/**
 * Message implementation for proto.pub.v1.models.CallEvent
 */
export declare class CallEvent implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): CallEvent;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CallEvent): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: CallEvent, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: CallEvent, _writer: BinaryWriter): void;
    private _callId?;
    private _callStatus?;
    private _callType?;
    private _callDuration?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CallEvent to deeply clone from
     */
    constructor(_value?: RecursivePartial<CallEvent.AsObject>);
    get callId(): string | undefined;
    set callId(value: string | undefined);
    get callStatus(): CallEvent.CallStatus | undefined;
    set callStatus(value: CallEvent.CallStatus | undefined);
    get callType(): CallEvent.CallType | undefined;
    set callType(value: CallEvent.CallType | undefined);
    get callDuration(): string | undefined;
    set callDuration(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): CallEvent.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): CallEvent.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): CallEvent.AsProtobufJSON;
}
export declare module CallEvent {
    /**
     * Standard JavaScript object representation for CallEvent
     */
    interface AsObject {
        callId?: string;
        callStatus?: CallEvent.CallStatus;
        callType?: CallEvent.CallType;
        callDuration?: string;
    }
    /**
     * Protobuf JSON representation for CallEvent
     */
    interface AsProtobufJSON {
        callId?: string;
        callStatus?: string;
        callType?: string;
        callDuration?: string;
    }
    enum CallStatus {
        CREATED = 0,
        IS_RINGING = 1,
        DECLINED = 2,
        BUSY = 3,
        ENDED = 4
    }
    enum CallType {
        VIDEO = 0,
        AUDIO = 1,
        GROUP_VIDEO = 2,
        GROUP_AUDIO = 3
    }
}
/**
 * Message implementation for proto.pub.v1.models.CallOffer
 */
export declare class CallOffer implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): CallOffer;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CallOffer): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: CallOffer, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: CallOffer, _writer: BinaryWriter): void;
    private _from?;
    private _to?;
    private _id?;
    private _body?;
    private _candidates?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CallOffer to deeply clone from
     */
    constructor(_value?: RecursivePartial<CallOffer.AsObject>);
    get from(): protoPubV1Models001.Uid | undefined;
    set from(value: protoPubV1Models001.Uid | undefined);
    get to(): protoPubV1Models001.Uid | undefined;
    set to(value: protoPubV1Models001.Uid | undefined);
    get id(): string | undefined;
    set id(value: string | undefined);
    get body(): string | undefined;
    set body(value: string | undefined);
    get candidates(): string | undefined;
    set candidates(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): CallOffer.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): CallOffer.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): CallOffer.AsProtobufJSON;
}
export declare module CallOffer {
    /**
     * Standard JavaScript object representation for CallOffer
     */
    interface AsObject {
        from?: protoPubV1Models001.Uid.AsObject;
        to?: protoPubV1Models001.Uid.AsObject;
        id?: string;
        body?: string;
        candidates?: string;
    }
    /**
     * Protobuf JSON representation for CallOffer
     */
    interface AsProtobufJSON {
        from?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        to?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        id?: string;
        body?: string;
        candidates?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.models.CallAnswer
 */
export declare class CallAnswer implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): CallAnswer;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CallAnswer): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: CallAnswer, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: CallAnswer, _writer: BinaryWriter): void;
    private _from?;
    private _to?;
    private _id?;
    private _body?;
    private _candidates?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CallAnswer to deeply clone from
     */
    constructor(_value?: RecursivePartial<CallAnswer.AsObject>);
    get from(): protoPubV1Models001.Uid | undefined;
    set from(value: protoPubV1Models001.Uid | undefined);
    get to(): protoPubV1Models001.Uid | undefined;
    set to(value: protoPubV1Models001.Uid | undefined);
    get id(): string | undefined;
    set id(value: string | undefined);
    get body(): string | undefined;
    set body(value: string | undefined);
    get candidates(): string | undefined;
    set candidates(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): CallAnswer.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): CallAnswer.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): CallAnswer.AsProtobufJSON;
}
export declare module CallAnswer {
    /**
     * Standard JavaScript object representation for CallAnswer
     */
    interface AsObject {
        from?: protoPubV1Models001.Uid.AsObject;
        to?: protoPubV1Models001.Uid.AsObject;
        id?: string;
        body?: string;
        candidates?: string;
    }
    /**
     * Protobuf JSON representation for CallAnswer
     */
    interface AsProtobufJSON {
        from?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        to?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        id?: string;
        body?: string;
        candidates?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.models.CallOfferByClient
 */
export declare class CallOfferByClient implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): CallOfferByClient;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CallOfferByClient): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: CallOfferByClient, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: CallOfferByClient, _writer: BinaryWriter): void;
    private _to?;
    private _id?;
    private _body?;
    private _candidates?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CallOfferByClient to deeply clone from
     */
    constructor(_value?: RecursivePartial<CallOfferByClient.AsObject>);
    get to(): protoPubV1Models001.Uid | undefined;
    set to(value: protoPubV1Models001.Uid | undefined);
    get id(): string | undefined;
    set id(value: string | undefined);
    get body(): string | undefined;
    set body(value: string | undefined);
    get candidates(): string | undefined;
    set candidates(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): CallOfferByClient.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): CallOfferByClient.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): CallOfferByClient.AsProtobufJSON;
}
export declare module CallOfferByClient {
    /**
     * Standard JavaScript object representation for CallOfferByClient
     */
    interface AsObject {
        to?: protoPubV1Models001.Uid.AsObject;
        id?: string;
        body?: string;
        candidates?: string;
    }
    /**
     * Protobuf JSON representation for CallOfferByClient
     */
    interface AsProtobufJSON {
        to?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        id?: string;
        body?: string;
        candidates?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.models.CallAnswerByClient
 */
export declare class CallAnswerByClient implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): CallAnswerByClient;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CallAnswerByClient): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: CallAnswerByClient, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: CallAnswerByClient, _writer: BinaryWriter): void;
    private _to?;
    private _id?;
    private _body?;
    private _candidates?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CallAnswerByClient to deeply clone from
     */
    constructor(_value?: RecursivePartial<CallAnswerByClient.AsObject>);
    get to(): protoPubV1Models001.Uid | undefined;
    set to(value: protoPubV1Models001.Uid | undefined);
    get id(): string | undefined;
    set id(value: string | undefined);
    get body(): string | undefined;
    set body(value: string | undefined);
    get candidates(): string | undefined;
    set candidates(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): CallAnswerByClient.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): CallAnswerByClient.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): CallAnswerByClient.AsProtobufJSON;
}
export declare module CallAnswerByClient {
    /**
     * Standard JavaScript object representation for CallAnswerByClient
     */
    interface AsObject {
        to?: protoPubV1Models001.Uid.AsObject;
        id?: string;
        body?: string;
        candidates?: string;
    }
    /**
     * Protobuf JSON representation for CallAnswerByClient
     */
    interface AsProtobufJSON {
        to?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        id?: string;
        body?: string;
        candidates?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.models.CallInfo
 */
export declare class CallInfo implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): CallInfo;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CallInfo): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: CallInfo, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: CallInfo, _writer: BinaryWriter): void;
    private _from?;
    private _to?;
    private _callEvent?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CallInfo to deeply clone from
     */
    constructor(_value?: RecursivePartial<CallInfo.AsObject>);
    get from(): protoPubV1Models001.Uid | undefined;
    set from(value: protoPubV1Models001.Uid | undefined);
    get to(): protoPubV1Models001.Uid | undefined;
    set to(value: protoPubV1Models001.Uid | undefined);
    get callEvent(): CallEvent | undefined;
    set callEvent(value: CallEvent | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): CallInfo.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): CallInfo.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): CallInfo.AsProtobufJSON;
}
export declare module CallInfo {
    /**
     * Standard JavaScript object representation for CallInfo
     */
    interface AsObject {
        from?: protoPubV1Models001.Uid.AsObject;
        to?: protoPubV1Models001.Uid.AsObject;
        callEvent?: CallEvent.AsObject;
    }
    /**
     * Protobuf JSON representation for CallInfo
     */
    interface AsProtobufJSON {
        from?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        to?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        callEvent?: CallEvent.AsProtobufJSON | null;
    }
}
