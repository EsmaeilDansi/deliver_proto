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
    private _callEventOld?;
    private _callEvent?;
    private _time?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CallInfo to deeply clone from
     */
    constructor(_value?: RecursivePartial<CallInfo.AsObject>);
    get from(): protoPubV1Models001.Uid | undefined;
    set from(value: protoPubV1Models001.Uid | undefined);
    get to(): protoPubV1Models001.Uid | undefined;
    set to(value: protoPubV1Models001.Uid | undefined);
    get callEventOld(): CallEvent | undefined;
    set callEventOld(value: CallEvent | undefined);
    get callEvent(): CallEventV2 | undefined;
    set callEvent(value: CallEventV2 | undefined);
    get time(): string | undefined;
    set time(value: string | undefined);
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
        callEventOld?: CallEvent.AsObject;
        callEvent?: CallEventV2.AsObject;
        time?: string;
    }
    /**
     * Protobuf JSON representation for CallInfo
     */
    interface AsProtobufJSON {
        from?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        to?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        callEventOld?: CallEvent.AsProtobufJSON | null;
        callEvent?: CallEventV2.AsProtobufJSON | null;
        time?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.models.CallEventOffer
 */
export declare class CallEventOffer implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): CallEventOffer;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CallEventOffer): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: CallEventOffer, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: CallEventOffer, _writer: BinaryWriter): void;
    private _body?;
    private _candidates?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CallEventOffer to deeply clone from
     */
    constructor(_value?: RecursivePartial<CallEventOffer.AsObject>);
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
    toObject(): CallEventOffer.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): CallEventOffer.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): CallEventOffer.AsProtobufJSON;
}
export declare module CallEventOffer {
    /**
     * Standard JavaScript object representation for CallEventOffer
     */
    interface AsObject {
        body?: string;
        candidates?: string;
    }
    /**
     * Protobuf JSON representation for CallEventOffer
     */
    interface AsProtobufJSON {
        body?: string;
        candidates?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.models.CallEventRinging
 */
export declare class CallEventRinging implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): CallEventRinging;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CallEventRinging): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: CallEventRinging, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: CallEventRinging, _writer: BinaryWriter): void;
    private _fromAnswerSide?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CallEventRinging to deeply clone from
     */
    constructor(_value?: RecursivePartial<CallEventRinging.AsObject>);
    get fromAnswerSide(): boolean | undefined;
    set fromAnswerSide(value: boolean | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): CallEventRinging.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): CallEventRinging.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): CallEventRinging.AsProtobufJSON;
}
export declare module CallEventRinging {
    /**
     * Standard JavaScript object representation for CallEventRinging
     */
    interface AsObject {
        fromAnswerSide?: boolean;
    }
    /**
     * Protobuf JSON representation for CallEventRinging
     */
    interface AsProtobufJSON {
        fromAnswerSide?: boolean;
    }
}
/**
 * Message implementation for proto.pub.v1.models.CallEventAnswer
 */
export declare class CallEventAnswer implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): CallEventAnswer;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CallEventAnswer): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: CallEventAnswer, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: CallEventAnswer, _writer: BinaryWriter): void;
    private _body?;
    private _candidates?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CallEventAnswer to deeply clone from
     */
    constructor(_value?: RecursivePartial<CallEventAnswer.AsObject>);
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
    toObject(): CallEventAnswer.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): CallEventAnswer.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): CallEventAnswer.AsProtobufJSON;
}
export declare module CallEventAnswer {
    /**
     * Standard JavaScript object representation for CallEventAnswer
     */
    interface AsObject {
        body?: string;
        candidates?: string;
    }
    /**
     * Protobuf JSON representation for CallEventAnswer
     */
    interface AsProtobufJSON {
        body?: string;
        candidates?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.models.CallEventEnd
 */
export declare class CallEventEnd implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): CallEventEnd;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CallEventEnd): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: CallEventEnd, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: CallEventEnd, _writer: BinaryWriter): void;
    private _callDuration?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CallEventEnd to deeply clone from
     */
    constructor(_value?: RecursivePartial<CallEventEnd.AsObject>);
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
    toObject(): CallEventEnd.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): CallEventEnd.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): CallEventEnd.AsProtobufJSON;
}
export declare module CallEventEnd {
    /**
     * Standard JavaScript object representation for CallEventEnd
     */
    interface AsObject {
        callDuration?: string;
    }
    /**
     * Protobuf JSON representation for CallEventEnd
     */
    interface AsProtobufJSON {
        callDuration?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.models.CallEventDecline
 */
export declare class CallEventDecline implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): CallEventDecline;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CallEventDecline): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: CallEventDecline, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: CallEventDecline, _writer: BinaryWriter): void;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CallEventDecline to deeply clone from
     */
    constructor(_value?: RecursivePartial<CallEventDecline.AsObject>);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): CallEventDecline.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): CallEventDecline.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): CallEventDecline.AsProtobufJSON;
}
export declare module CallEventDecline {
    /**
     * Standard JavaScript object representation for CallEventDecline
     */
    interface AsObject {
    }
    /**
     * Protobuf JSON representation for CallEventDecline
     */
    interface AsProtobufJSON {
    }
}
/**
 * Message implementation for proto.pub.v1.models.CallEventBusy
 */
export declare class CallEventBusy implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): CallEventBusy;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CallEventBusy): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: CallEventBusy, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: CallEventBusy, _writer: BinaryWriter): void;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CallEventBusy to deeply clone from
     */
    constructor(_value?: RecursivePartial<CallEventBusy.AsObject>);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): CallEventBusy.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): CallEventBusy.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): CallEventBusy.AsProtobufJSON;
}
export declare module CallEventBusy {
    /**
     * Standard JavaScript object representation for CallEventBusy
     */
    interface AsObject {
    }
    /**
     * Protobuf JSON representation for CallEventBusy
     */
    interface AsProtobufJSON {
    }
}
/**
 * Message implementation for proto.pub.v1.models.CallEventV2ByClient
 */
export declare class CallEventV2ByClient implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): CallEventV2ByClient;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CallEventV2ByClient): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: CallEventV2ByClient, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: CallEventV2ByClient, _writer: BinaryWriter): void;
    private _offer?;
    private _ringing?;
    private _answer?;
    private _end?;
    private _decline?;
    private _busy?;
    private _id?;
    private _to?;
    private _isVideo?;
    private _type;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CallEventV2ByClient to deeply clone from
     */
    constructor(_value?: RecursivePartial<CallEventV2ByClient.AsObject>);
    get offer(): CallEventOffer | undefined;
    set offer(value: CallEventOffer | undefined);
    get ringing(): CallEventRinging | undefined;
    set ringing(value: CallEventRinging | undefined);
    get answer(): CallEventAnswer | undefined;
    set answer(value: CallEventAnswer | undefined);
    get end(): CallEventEnd | undefined;
    set end(value: CallEventEnd | undefined);
    get decline(): CallEventDecline | undefined;
    set decline(value: CallEventDecline | undefined);
    get busy(): CallEventBusy | undefined;
    set busy(value: CallEventBusy | undefined);
    get id(): string | undefined;
    set id(value: string | undefined);
    get to(): protoPubV1Models001.Uid | undefined;
    set to(value: protoPubV1Models001.Uid | undefined);
    get isVideo(): boolean | undefined;
    set isVideo(value: boolean | undefined);
    get type(): CallEventV2ByClient.TypeCase;
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): CallEventV2ByClient.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): CallEventV2ByClient.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): CallEventV2ByClient.AsProtobufJSON;
}
export declare module CallEventV2ByClient {
    /**
     * Standard JavaScript object representation for CallEventV2ByClient
     */
    interface AsObject {
        offer?: CallEventOffer.AsObject;
        ringing?: CallEventRinging.AsObject;
        answer?: CallEventAnswer.AsObject;
        end?: CallEventEnd.AsObject;
        decline?: CallEventDecline.AsObject;
        busy?: CallEventBusy.AsObject;
        id?: string;
        to?: protoPubV1Models001.Uid.AsObject;
        isVideo?: boolean;
    }
    /**
     * Protobuf JSON representation for CallEventV2ByClient
     */
    interface AsProtobufJSON {
        offer?: CallEventOffer.AsProtobufJSON | null;
        ringing?: CallEventRinging.AsProtobufJSON | null;
        answer?: CallEventAnswer.AsProtobufJSON | null;
        end?: CallEventEnd.AsProtobufJSON | null;
        decline?: CallEventDecline.AsProtobufJSON | null;
        busy?: CallEventBusy.AsProtobufJSON | null;
        id?: string;
        to?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        isVideo?: boolean;
    }
    enum TypeCase {
        none = 0,
        offer = 1,
        ringing = 2,
        answer = 3,
        end = 4,
        decline = 5,
        busy = 6
    }
}
/**
 * Message implementation for proto.pub.v1.models.CallEventV2
 */
export declare class CallEventV2 implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): CallEventV2;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CallEventV2): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: CallEventV2, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: CallEventV2, _writer: BinaryWriter): void;
    private _offer?;
    private _ringing?;
    private _answer?;
    private _end?;
    private _decline?;
    private _busy?;
    private _id?;
    private _to?;
    private _from?;
    private _time?;
    private _isVideo?;
    private _type;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CallEventV2 to deeply clone from
     */
    constructor(_value?: RecursivePartial<CallEventV2.AsObject>);
    get offer(): CallEventOffer | undefined;
    set offer(value: CallEventOffer | undefined);
    get ringing(): CallEventRinging | undefined;
    set ringing(value: CallEventRinging | undefined);
    get answer(): CallEventAnswer | undefined;
    set answer(value: CallEventAnswer | undefined);
    get end(): CallEventEnd | undefined;
    set end(value: CallEventEnd | undefined);
    get decline(): CallEventDecline | undefined;
    set decline(value: CallEventDecline | undefined);
    get busy(): CallEventBusy | undefined;
    set busy(value: CallEventBusy | undefined);
    get id(): string | undefined;
    set id(value: string | undefined);
    get to(): protoPubV1Models001.Uid | undefined;
    set to(value: protoPubV1Models001.Uid | undefined);
    get from(): protoPubV1Models001.Uid | undefined;
    set from(value: protoPubV1Models001.Uid | undefined);
    get time(): string | undefined;
    set time(value: string | undefined);
    get isVideo(): boolean | undefined;
    set isVideo(value: boolean | undefined);
    get type(): CallEventV2.TypeCase;
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): CallEventV2.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): CallEventV2.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): CallEventV2.AsProtobufJSON;
}
export declare module CallEventV2 {
    /**
     * Standard JavaScript object representation for CallEventV2
     */
    interface AsObject {
        offer?: CallEventOffer.AsObject;
        ringing?: CallEventRinging.AsObject;
        answer?: CallEventAnswer.AsObject;
        end?: CallEventEnd.AsObject;
        decline?: CallEventDecline.AsObject;
        busy?: CallEventBusy.AsObject;
        id?: string;
        to?: protoPubV1Models001.Uid.AsObject;
        from?: protoPubV1Models001.Uid.AsObject;
        time?: string;
        isVideo?: boolean;
    }
    /**
     * Protobuf JSON representation for CallEventV2
     */
    interface AsProtobufJSON {
        offer?: CallEventOffer.AsProtobufJSON | null;
        ringing?: CallEventRinging.AsProtobufJSON | null;
        answer?: CallEventAnswer.AsProtobufJSON | null;
        end?: CallEventEnd.AsProtobufJSON | null;
        decline?: CallEventDecline.AsProtobufJSON | null;
        busy?: CallEventBusy.AsProtobufJSON | null;
        id?: string;
        to?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        from?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        time?: string;
        isVideo?: boolean;
    }
    enum TypeCase {
        none = 0,
        offer = 1,
        ringing = 2,
        answer = 3,
        end = 4,
        decline = 5,
        busy = 6
    }
}
/**
 * Message implementation for proto.pub.v1.models.CallLog
 */
export declare class CallLog implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): CallLog;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CallLog): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: CallLog, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: CallLog, _writer: BinaryWriter): void;
    private _end?;
    private _decline?;
    private _busy?;
    private _id?;
    private _to?;
    private _from?;
    private _isVideo?;
    private _type;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CallLog to deeply clone from
     */
    constructor(_value?: RecursivePartial<CallLog.AsObject>);
    get end(): CallEventEnd | undefined;
    set end(value: CallEventEnd | undefined);
    get decline(): CallEventDecline | undefined;
    set decline(value: CallEventDecline | undefined);
    get busy(): CallEventBusy | undefined;
    set busy(value: CallEventBusy | undefined);
    get id(): string | undefined;
    set id(value: string | undefined);
    get to(): protoPubV1Models001.Uid | undefined;
    set to(value: protoPubV1Models001.Uid | undefined);
    get from(): protoPubV1Models001.Uid | undefined;
    set from(value: protoPubV1Models001.Uid | undefined);
    get isVideo(): boolean | undefined;
    set isVideo(value: boolean | undefined);
    get type(): CallLog.TypeCase;
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): CallLog.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): CallLog.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): CallLog.AsProtobufJSON;
}
export declare module CallLog {
    /**
     * Standard JavaScript object representation for CallLog
     */
    interface AsObject {
        end?: CallEventEnd.AsObject;
        decline?: CallEventDecline.AsObject;
        busy?: CallEventBusy.AsObject;
        id?: string;
        to?: protoPubV1Models001.Uid.AsObject;
        from?: protoPubV1Models001.Uid.AsObject;
        isVideo?: boolean;
    }
    /**
     * Protobuf JSON representation for CallLog
     */
    interface AsProtobufJSON {
        end?: CallEventEnd.AsProtobufJSON | null;
        decline?: CallEventDecline.AsProtobufJSON | null;
        busy?: CallEventBusy.AsProtobufJSON | null;
        id?: string;
        to?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        from?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        isVideo?: boolean;
    }
    enum TypeCase {
        none = 0,
        end = 1,
        decline = 2,
        busy = 3
    }
}
