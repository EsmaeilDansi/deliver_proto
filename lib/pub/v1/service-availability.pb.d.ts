import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
export declare enum Services {
    PROFILE_SERVICES = 0,
    CORE_SERVICES = 1,
    FIREBASE_SERVICES = 2,
    GROUP_SERVICES = 3,
    CHANNEL_SERVICES = 4,
    QUERY_SERVICES = 5,
    AVATAR_SERVICES = 6,
    STICKER_SERVICES = 7,
    BOT_SERVICES = 8,
    POLL_SERVICES = 9,
    LIVE_LOCATION_SERVICES = 10,
    PAYMENT_SERVICE = 11,
    FILE_SERVICE = 12,
    VOICE_CHAT_SERVICES = 13
}
export declare enum ServiceStatus {
    UP = 0,
    THERE_ARE_SOME_ISSUES = 1,
    DOWN = 2
}
/**
 * Message implementation for proto.pub.v1.service_availability.GetQuerySettingsReq
 */
export declare class GetQuerySettingsReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetQuerySettingsReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetQuerySettingsReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetQuerySettingsReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetQuerySettingsReq, _writer: BinaryWriter): void;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetQuerySettingsReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetQuerySettingsReq.AsObject>);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetQuerySettingsReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetQuerySettingsReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetQuerySettingsReq.AsProtobufJSON;
}
export declare module GetQuerySettingsReq {
    /**
     * Standard JavaScript object representation for GetQuerySettingsReq
     */
    interface AsObject {
    }
    /**
     * Protobuf JSON representation for GetQuerySettingsReq
     */
    interface AsProtobufJSON {
    }
}
/**
 * Message implementation for proto.pub.v1.service_availability.GetQuerySettingsRes
 */
export declare class GetQuerySettingsRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetQuerySettingsRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetQuerySettingsRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetQuerySettingsRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetQuerySettingsRes, _writer: BinaryWriter): void;
    private _regions?;
    private _languages?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetQuerySettingsRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetQuerySettingsRes.AsObject>);
    get regions(): string[] | undefined;
    set regions(value: string[] | undefined);
    get languages(): string[] | undefined;
    set languages(value: string[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetQuerySettingsRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetQuerySettingsRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetQuerySettingsRes.AsProtobufJSON;
}
export declare module GetQuerySettingsRes {
    /**
     * Standard JavaScript object representation for GetQuerySettingsRes
     */
    interface AsObject {
        regions?: string[];
        languages?: string[];
    }
    /**
     * Protobuf JSON representation for GetQuerySettingsRes
     */
    interface AsProtobufJSON {
        regions?: string[];
        languages?: string[];
    }
}
/**
 * Message implementation for proto.pub.v1.service_availability.GetServiceAvailabilityReq
 */
export declare class GetServiceAvailabilityReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetServiceAvailabilityReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetServiceAvailabilityReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetServiceAvailabilityReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetServiceAvailabilityReq, _writer: BinaryWriter): void;
    private _service?;
    private _region?;
    private _language?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetServiceAvailabilityReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetServiceAvailabilityReq.AsObject>);
    get service(): Services | undefined;
    set service(value: Services | undefined);
    get region(): string | undefined;
    set region(value: string | undefined);
    get language(): string | undefined;
    set language(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetServiceAvailabilityReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetServiceAvailabilityReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetServiceAvailabilityReq.AsProtobufJSON;
}
export declare module GetServiceAvailabilityReq {
    /**
     * Standard JavaScript object representation for GetServiceAvailabilityReq
     */
    interface AsObject {
        service?: Services;
        region?: string;
        language?: string;
    }
    /**
     * Protobuf JSON representation for GetServiceAvailabilityReq
     */
    interface AsProtobufJSON {
        service?: string;
        region?: string;
        language?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.service_availability.GetServiceAvailabilityRes
 */
export declare class GetServiceAvailabilityRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetServiceAvailabilityRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetServiceAvailabilityRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetServiceAvailabilityRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetServiceAvailabilityRes, _writer: BinaryWriter): void;
    private _services?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetServiceAvailabilityRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetServiceAvailabilityRes.AsObject>);
    get services(): {
        [prop: string]: ServiceStatusDetails;
    } | undefined;
    set services(value: {
        [prop: string]: ServiceStatusDetails;
    } | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetServiceAvailabilityRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetServiceAvailabilityRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetServiceAvailabilityRes.AsProtobufJSON;
}
export declare module GetServiceAvailabilityRes {
    /**
     * Standard JavaScript object representation for GetServiceAvailabilityRes
     */
    interface AsObject {
        services?: {
            [prop: string]: ServiceStatusDetails;
        };
    }
    /**
     * Protobuf JSON representation for GetServiceAvailabilityRes
     */
    interface AsProtobufJSON {
        services?: {
            [prop: string]: ServiceStatusDetails;
        };
    }
    /**
     * Message implementation for proto.pub.v1.service_availability.ServicesEntry
     */
    class ServicesEntry implements GrpcMessage {
        static id: string;
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes: ByteSource): ServicesEntry;
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance: ServicesEntry): void;
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        static deserializeBinaryFromReader(_instance: ServicesEntry, _reader: BinaryReader): void;
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance: ServicesEntry, _writer: BinaryWriter): void;
        private _key?;
        private _value?;
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of ServicesEntry to deeply clone from
         */
        constructor(_value?: RecursivePartial<ServicesEntry.AsObject>);
        get key(): string | undefined;
        set key(value: string | undefined);
        get value(): ServiceStatusDetails | undefined;
        set value(value: ServiceStatusDetails | undefined);
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        serializeBinary(): Uint8Array;
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        toObject(): ServicesEntry.AsObject;
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        toJSON(): ServicesEntry.AsObject;
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        toProtobufJSON(options?: ToProtobufJSONOptions): ServicesEntry.AsProtobufJSON;
    }
    module ServicesEntry {
        /**
         * Standard JavaScript object representation for ServicesEntry
         */
        interface AsObject {
            key?: string;
            value?: ServiceStatusDetails.AsObject;
        }
        /**
         * Protobuf JSON representation for ServicesEntry
         */
        interface AsProtobufJSON {
            key?: string;
            value?: ServiceStatusDetails.AsProtobufJSON | null;
        }
    }
}
/**
 * Message implementation for proto.pub.v1.service_availability.ServiceStatusDetails
 */
export declare class ServiceStatusDetails implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ServiceStatusDetails;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ServiceStatusDetails): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ServiceStatusDetails, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ServiceStatusDetails, _writer: BinaryWriter): void;
    private _status?;
    private _message?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ServiceStatusDetails to deeply clone from
     */
    constructor(_value?: RecursivePartial<ServiceStatusDetails.AsObject>);
    get status(): ServiceStatus | undefined;
    set status(value: ServiceStatus | undefined);
    get message(): string | undefined;
    set message(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ServiceStatusDetails.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ServiceStatusDetails.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ServiceStatusDetails.AsProtobufJSON;
}
export declare module ServiceStatusDetails {
    /**
     * Standard JavaScript object representation for ServiceStatusDetails
     */
    interface AsObject {
        status?: ServiceStatus;
        message?: string;
    }
    /**
     * Protobuf JSON representation for ServiceStatusDetails
     */
    interface AsProtobufJSON {
        status?: string;
        message?: string;
    }
}
