import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as protoPubV1Models000 from '../../pub/v1/models/platform.pb';
import * as protoPubV1Models001 from '../../pub/v1/models/file.pb';
/**
 * Message implementation for proto.pub.v1.analytics.SendFeedbackReq
 */
export declare class SendFeedbackReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): SendFeedbackReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: SendFeedbackReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: SendFeedbackReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: SendFeedbackReq, _writer: BinaryWriter): void;
    private _feedbackType?;
    private _description?;
    private _platform?;
    private _severity?;
    private _logs?;
    private _file?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of SendFeedbackReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<SendFeedbackReq.AsObject>);
    get feedbackType(): SendFeedbackReq.FeedbackType | undefined;
    set feedbackType(value: SendFeedbackReq.FeedbackType | undefined);
    get description(): string | undefined;
    set description(value: string | undefined);
    get platform(): protoPubV1Models000.Platform | undefined;
    set platform(value: protoPubV1Models000.Platform | undefined);
    get severity(): string | undefined;
    set severity(value: string | undefined);
    get logs(): string | undefined;
    set logs(value: string | undefined);
    get file(): protoPubV1Models001.File | undefined;
    set file(value: protoPubV1Models001.File | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): SendFeedbackReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): SendFeedbackReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): SendFeedbackReq.AsProtobufJSON;
}
export declare module SendFeedbackReq {
    /**
     * Standard JavaScript object representation for SendFeedbackReq
     */
    interface AsObject {
        feedbackType?: SendFeedbackReq.FeedbackType;
        description?: string;
        platform?: protoPubV1Models000.Platform.AsObject;
        severity?: string;
        logs?: string;
        file?: protoPubV1Models001.File.AsObject;
    }
    /**
     * Protobuf JSON representation for SendFeedbackReq
     */
    interface AsProtobufJSON {
        feedbackType?: string;
        description?: string;
        platform?: protoPubV1Models000.Platform.AsProtobufJSON | null;
        severity?: string;
        logs?: string;
        file?: protoPubV1Models001.File.AsProtobufJSON | null;
    }
    enum FeedbackType {
        REPORT = 0,
        PROPOSAL = 1
    }
}
/**
 * Message implementation for proto.pub.v1.analytics.SendFeedbackRes
 */
export declare class SendFeedbackRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): SendFeedbackRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: SendFeedbackRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: SendFeedbackRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: SendFeedbackRes, _writer: BinaryWriter): void;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of SendFeedbackRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<SendFeedbackRes.AsObject>);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): SendFeedbackRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): SendFeedbackRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): SendFeedbackRes.AsProtobufJSON;
}
export declare module SendFeedbackRes {
    /**
     * Standard JavaScript object representation for SendFeedbackRes
     */
    interface AsObject {
    }
    /**
     * Protobuf JSON representation for SendFeedbackRes
     */
    interface AsProtobufJSON {
    }
}
/**
 * Message implementation for proto.pub.v1.analytics.ReportCrashReq
 */
export declare class ReportCrashReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ReportCrashReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ReportCrashReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ReportCrashReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ReportCrashReq, _writer: BinaryWriter): void;
    private _crashes?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ReportCrashReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<ReportCrashReq.AsObject>);
    get crashes(): AnalyticsCrash[] | undefined;
    set crashes(value: AnalyticsCrash[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ReportCrashReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ReportCrashReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ReportCrashReq.AsProtobufJSON;
}
export declare module ReportCrashReq {
    /**
     * Standard JavaScript object representation for ReportCrashReq
     */
    interface AsObject {
        crashes?: AnalyticsCrash.AsObject[];
    }
    /**
     * Protobuf JSON representation for ReportCrashReq
     */
    interface AsProtobufJSON {
        crashes?: AnalyticsCrash.AsProtobufJSON[] | null;
    }
}
/**
 * Message implementation for proto.pub.v1.analytics.AnalyticsCrash
 */
export declare class AnalyticsCrash implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): AnalyticsCrash;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: AnalyticsCrash): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: AnalyticsCrash, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: AnalyticsCrash, _writer: BinaryWriter): void;
    private _timestamp?;
    private _error?;
    private _stackTraces?;
    private _platform?;
    private _level?;
    private _logs?;
    private _labels?;
    private _customKeys?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of AnalyticsCrash to deeply clone from
     */
    constructor(_value?: RecursivePartial<AnalyticsCrash.AsObject>);
    get timestamp(): string | undefined;
    set timestamp(value: string | undefined);
    get error(): string | undefined;
    set error(value: string | undefined);
    get stackTraces(): string[] | undefined;
    set stackTraces(value: string[] | undefined);
    get platform(): protoPubV1Models000.Platform | undefined;
    set platform(value: protoPubV1Models000.Platform | undefined);
    get level(): string | undefined;
    set level(value: string | undefined);
    get logs(): string[] | undefined;
    set logs(value: string[] | undefined);
    get labels(): string[] | undefined;
    set labels(value: string[] | undefined);
    get customKeys(): {
        [prop: string]: string;
    } | undefined;
    set customKeys(value: {
        [prop: string]: string;
    } | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): AnalyticsCrash.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): AnalyticsCrash.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): AnalyticsCrash.AsProtobufJSON;
}
export declare module AnalyticsCrash {
    /**
     * Standard JavaScript object representation for AnalyticsCrash
     */
    interface AsObject {
        timestamp?: string;
        error?: string;
        stackTraces?: string[];
        platform?: protoPubV1Models000.Platform.AsObject;
        level?: string;
        logs?: string[];
        labels?: string[];
        customKeys?: {
            [prop: string]: string;
        };
    }
    /**
     * Protobuf JSON representation for AnalyticsCrash
     */
    interface AsProtobufJSON {
        timestamp?: string;
        error?: string;
        stackTraces?: string[];
        platform?: protoPubV1Models000.Platform.AsProtobufJSON | null;
        level?: string;
        logs?: string[];
        labels?: string[];
        customKeys?: {
            [prop: string]: string;
        };
    }
    /**
     * Message implementation for proto.pub.v1.analytics.CustomKeysEntry
     */
    class CustomKeysEntry implements GrpcMessage {
        static id: string;
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes: ByteSource): CustomKeysEntry;
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance: CustomKeysEntry): void;
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        static deserializeBinaryFromReader(_instance: CustomKeysEntry, _reader: BinaryReader): void;
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance: CustomKeysEntry, _writer: BinaryWriter): void;
        private _key?;
        private _value?;
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of CustomKeysEntry to deeply clone from
         */
        constructor(_value?: RecursivePartial<CustomKeysEntry.AsObject>);
        get key(): string | undefined;
        set key(value: string | undefined);
        get value(): string | undefined;
        set value(value: string | undefined);
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        serializeBinary(): Uint8Array;
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        toObject(): CustomKeysEntry.AsObject;
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        toJSON(): CustomKeysEntry.AsObject;
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        toProtobufJSON(options?: ToProtobufJSONOptions): CustomKeysEntry.AsProtobufJSON;
    }
    module CustomKeysEntry {
        /**
         * Standard JavaScript object representation for CustomKeysEntry
         */
        interface AsObject {
            key?: string;
            value?: string;
        }
        /**
         * Protobuf JSON representation for CustomKeysEntry
         */
        interface AsProtobufJSON {
            key?: string;
            value?: string;
        }
    }
}
/**
 * Message implementation for proto.pub.v1.analytics.ReportCrashRes
 */
export declare class ReportCrashRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ReportCrashRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ReportCrashRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ReportCrashRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ReportCrashRes, _writer: BinaryWriter): void;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ReportCrashRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<ReportCrashRes.AsObject>);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ReportCrashRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ReportCrashRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ReportCrashRes.AsProtobufJSON;
}
export declare module ReportCrashRes {
    /**
     * Standard JavaScript object representation for ReportCrashRes
     */
    interface AsObject {
    }
    /**
     * Protobuf JSON representation for ReportCrashRes
     */
    interface AsProtobufJSON {
    }
}
/**
 * Message implementation for proto.pub.v1.analytics.ReportEventReq
 */
export declare class ReportEventReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ReportEventReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ReportEventReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ReportEventReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ReportEventReq, _writer: BinaryWriter): void;
    private _events?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ReportEventReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<ReportEventReq.AsObject>);
    get events(): AnalyticsEvent[] | undefined;
    set events(value: AnalyticsEvent[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ReportEventReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ReportEventReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ReportEventReq.AsProtobufJSON;
}
export declare module ReportEventReq {
    /**
     * Standard JavaScript object representation for ReportEventReq
     */
    interface AsObject {
        events?: AnalyticsEvent.AsObject[];
    }
    /**
     * Protobuf JSON representation for ReportEventReq
     */
    interface AsProtobufJSON {
        events?: AnalyticsEvent.AsProtobufJSON[] | null;
    }
}
/**
 * Message implementation for proto.pub.v1.analytics.AnalyticsEvent
 */
export declare class AnalyticsEvent implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): AnalyticsEvent;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: AnalyticsEvent): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: AnalyticsEvent, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: AnalyticsEvent, _writer: BinaryWriter): void;
    private _timestamp?;
    private _eventDetails?;
    private _logs?;
    private _labels?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of AnalyticsEvent to deeply clone from
     */
    constructor(_value?: RecursivePartial<AnalyticsEvent.AsObject>);
    get timestamp(): string | undefined;
    set timestamp(value: string | undefined);
    get eventDetails(): {
        [prop: string]: string;
    } | undefined;
    set eventDetails(value: {
        [prop: string]: string;
    } | undefined);
    get logs(): string[] | undefined;
    set logs(value: string[] | undefined);
    get labels(): string[] | undefined;
    set labels(value: string[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): AnalyticsEvent.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): AnalyticsEvent.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): AnalyticsEvent.AsProtobufJSON;
}
export declare module AnalyticsEvent {
    /**
     * Standard JavaScript object representation for AnalyticsEvent
     */
    interface AsObject {
        timestamp?: string;
        eventDetails?: {
            [prop: string]: string;
        };
        logs?: string[];
        labels?: string[];
    }
    /**
     * Protobuf JSON representation for AnalyticsEvent
     */
    interface AsProtobufJSON {
        timestamp?: string;
        eventDetails?: {
            [prop: string]: string;
        };
        logs?: string[];
        labels?: string[];
    }
    /**
     * Message implementation for proto.pub.v1.analytics.EventDetailsEntry
     */
    class EventDetailsEntry implements GrpcMessage {
        static id: string;
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes: ByteSource): EventDetailsEntry;
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance: EventDetailsEntry): void;
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        static deserializeBinaryFromReader(_instance: EventDetailsEntry, _reader: BinaryReader): void;
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance: EventDetailsEntry, _writer: BinaryWriter): void;
        private _key?;
        private _value?;
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of EventDetailsEntry to deeply clone from
         */
        constructor(_value?: RecursivePartial<EventDetailsEntry.AsObject>);
        get key(): string | undefined;
        set key(value: string | undefined);
        get value(): string | undefined;
        set value(value: string | undefined);
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        serializeBinary(): Uint8Array;
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        toObject(): EventDetailsEntry.AsObject;
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        toJSON(): EventDetailsEntry.AsObject;
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        toProtobufJSON(options?: ToProtobufJSONOptions): EventDetailsEntry.AsProtobufJSON;
    }
    module EventDetailsEntry {
        /**
         * Standard JavaScript object representation for EventDetailsEntry
         */
        interface AsObject {
            key?: string;
            value?: string;
        }
        /**
         * Protobuf JSON representation for EventDetailsEntry
         */
        interface AsProtobufJSON {
            key?: string;
            value?: string;
        }
    }
}
/**
 * Message implementation for proto.pub.v1.analytics.ReportEventRes
 */
export declare class ReportEventRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ReportEventRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ReportEventRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ReportEventRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ReportEventRes, _writer: BinaryWriter): void;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ReportEventRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<ReportEventRes.AsObject>);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ReportEventRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ReportEventRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ReportEventRes.AsProtobufJSON;
}
export declare module ReportEventRes {
    /**
     * Standard JavaScript object representation for ReportEventRes
     */
    interface AsObject {
    }
    /**
     * Protobuf JSON representation for ReportEventRes
     */
    interface AsProtobufJSON {
    }
}
