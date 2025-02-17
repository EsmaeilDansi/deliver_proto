import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as protoPubV1Models001 from '../../pub/v1/models/platform.pb';
import * as protoPubV1Models002 from '../../pub/v1/models/location.pb';
import * as protoPubV1Models003 from '../../pub/v1/models/file.pb';
export declare enum ServiceStatus {
    OK = 0,
    DOWN = 1
}
/**
 * Message implementation for proto.pub.v1.lb.ClientVersionLink
 */
export declare class ClientVersionLink implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ClientVersionLink;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ClientVersionLink): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ClientVersionLink, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ClientVersionLink, _writer: BinaryWriter): void;
    private _url?;
    private _label?;
    private _isDirectLink?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ClientVersionLink to deeply clone from
     */
    constructor(_value?: RecursivePartial<ClientVersionLink.AsObject>);
    get url(): string | undefined;
    set url(value: string | undefined);
    get label(): string | undefined;
    set label(value: string | undefined);
    get isDirectLink(): boolean | undefined;
    set isDirectLink(value: boolean | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ClientVersionLink.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ClientVersionLink.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ClientVersionLink.AsProtobufJSON;
}
export declare module ClientVersionLink {
    /**
     * Standard JavaScript object representation for ClientVersionLink
     */
    interface AsObject {
        url?: string;
        label?: string;
        isDirectLink?: boolean;
    }
    /**
     * Protobuf JSON representation for ClientVersionLink
     */
    interface AsProtobufJSON {
        url?: string;
        label?: string;
        isDirectLink?: boolean;
    }
}
/**
 * Message implementation for proto.pub.v1.lb.ClientVersion
 */
export declare class ClientVersion implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ClientVersion;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ClientVersion): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ClientVersion, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ClientVersion, _writer: BinaryWriter): void;
    private _version?;
    private _revision?;
    private _description?;
    private _size?;
    private _animation?;
    private _links?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ClientVersion to deeply clone from
     */
    constructor(_value?: RecursivePartial<ClientVersion.AsObject>);
    get version(): number | undefined;
    set version(value: number | undefined);
    get revision(): number | undefined;
    set revision(value: number | undefined);
    get description(): string | undefined;
    set description(value: string | undefined);
    get size(): string | undefined;
    set size(value: string | undefined);
    get animation(): protoPubV1Models003.File | undefined;
    set animation(value: protoPubV1Models003.File | undefined);
    get links(): ClientVersionLink[] | undefined;
    set links(value: ClientVersionLink[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ClientVersion.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ClientVersion.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ClientVersion.AsProtobufJSON;
}
export declare module ClientVersion {
    /**
     * Standard JavaScript object representation for ClientVersion
     */
    interface AsObject {
        version?: number;
        revision?: number;
        description?: string;
        size?: string;
        animation?: protoPubV1Models003.File.AsObject;
        links?: ClientVersionLink.AsObject[];
    }
    /**
     * Protobuf JSON representation for ClientVersion
     */
    interface AsProtobufJSON {
        version?: number;
        revision?: number;
        description?: string;
        size?: string;
        animation?: protoPubV1Models003.File.AsProtobufJSON | null;
        links?: ClientVersionLink.AsProtobufJSON[] | null;
    }
}
/**
 * Message implementation for proto.pub.v1.lb.ServiceConfig
 */
export declare class ServiceConfig implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ServiceConfig;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ServiceConfig): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ServiceConfig, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ServiceConfig, _writer: BinaryWriter): void;
    private _status?;
    private _bareAddresses?;
    private _extraHeaders?;
    private _extraConfigs?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ServiceConfig to deeply clone from
     */
    constructor(_value?: RecursivePartial<ServiceConfig.AsObject>);
    get status(): ServiceStatus | undefined;
    set status(value: ServiceStatus | undefined);
    get bareAddresses(): string[] | undefined;
    set bareAddresses(value: string[] | undefined);
    get extraHeaders(): {
        [prop: string]: string;
    } | undefined;
    set extraHeaders(value: {
        [prop: string]: string;
    } | undefined);
    get extraConfigs(): {
        [prop: string]: string;
    } | undefined;
    set extraConfigs(value: {
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
    toObject(): ServiceConfig.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ServiceConfig.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ServiceConfig.AsProtobufJSON;
}
export declare module ServiceConfig {
    /**
     * Standard JavaScript object representation for ServiceConfig
     */
    interface AsObject {
        status?: ServiceStatus;
        bareAddresses?: string[];
        extraHeaders?: {
            [prop: string]: string;
        };
        extraConfigs?: {
            [prop: string]: string;
        };
    }
    /**
     * Protobuf JSON representation for ServiceConfig
     */
    interface AsProtobufJSON {
        status?: string;
        bareAddresses?: string[];
        extraHeaders?: {
            [prop: string]: string;
        };
        extraConfigs?: {
            [prop: string]: string;
        };
    }
    /**
     * Message implementation for proto.pub.v1.lb.ServiceConfig.ExtraHeadersEntry
     */
    class ExtraHeadersEntry implements GrpcMessage {
        static id: string;
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes: ByteSource): ExtraHeadersEntry;
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance: ExtraHeadersEntry): void;
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        static deserializeBinaryFromReader(_instance: ExtraHeadersEntry, _reader: BinaryReader): void;
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance: ExtraHeadersEntry, _writer: BinaryWriter): void;
        private _key?;
        private _value?;
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of ExtraHeadersEntry to deeply clone from
         */
        constructor(_value?: RecursivePartial<ExtraHeadersEntry.AsObject>);
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
        toObject(): ExtraHeadersEntry.AsObject;
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        toJSON(): ExtraHeadersEntry.AsObject;
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        toProtobufJSON(options?: ToProtobufJSONOptions): ExtraHeadersEntry.AsProtobufJSON;
    }
    module ExtraHeadersEntry {
        /**
         * Standard JavaScript object representation for ExtraHeadersEntry
         */
        interface AsObject {
            key?: string;
            value?: string;
        }
        /**
         * Protobuf JSON representation for ExtraHeadersEntry
         */
        interface AsProtobufJSON {
            key?: string;
            value?: string;
        }
    }
    /**
     * Message implementation for proto.pub.v1.lb.ServiceConfig.ExtraConfigsEntry
     */
    class ExtraConfigsEntry implements GrpcMessage {
        static id: string;
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes: ByteSource): ExtraConfigsEntry;
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance: ExtraConfigsEntry): void;
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        static deserializeBinaryFromReader(_instance: ExtraConfigsEntry, _reader: BinaryReader): void;
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance: ExtraConfigsEntry, _writer: BinaryWriter): void;
        private _key?;
        private _value?;
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of ExtraConfigsEntry to deeply clone from
         */
        constructor(_value?: RecursivePartial<ExtraConfigsEntry.AsObject>);
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
        toObject(): ExtraConfigsEntry.AsObject;
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        toJSON(): ExtraConfigsEntry.AsObject;
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        toProtobufJSON(options?: ToProtobufJSONOptions): ExtraConfigsEntry.AsProtobufJSON;
    }
    module ExtraConfigsEntry {
        /**
         * Standard JavaScript object representation for ExtraConfigsEntry
         */
        interface AsObject {
            key?: string;
            value?: string;
        }
        /**
         * Protobuf JSON representation for ExtraConfigsEntry
         */
        interface AsProtobufJSON {
            key?: string;
            value?: string;
        }
    }
}
/**
 * Message implementation for proto.pub.v1.lb.WebRTCStunServiceConfig
 */
export declare class WebRTCStunServiceConfig implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): WebRTCStunServiceConfig;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: WebRTCStunServiceConfig): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: WebRTCStunServiceConfig, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: WebRTCStunServiceConfig, _writer: BinaryWriter): void;
    private _address?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of WebRTCStunServiceConfig to deeply clone from
     */
    constructor(_value?: RecursivePartial<WebRTCStunServiceConfig.AsObject>);
    get address(): string | undefined;
    set address(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): WebRTCStunServiceConfig.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): WebRTCStunServiceConfig.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): WebRTCStunServiceConfig.AsProtobufJSON;
}
export declare module WebRTCStunServiceConfig {
    /**
     * Standard JavaScript object representation for WebRTCStunServiceConfig
     */
    interface AsObject {
        address?: string;
    }
    /**
     * Protobuf JSON representation for WebRTCStunServiceConfig
     */
    interface AsProtobufJSON {
        address?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.lb.WebRTCTurnServiceConfig
 */
export declare class WebRTCTurnServiceConfig implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): WebRTCTurnServiceConfig;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: WebRTCTurnServiceConfig): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: WebRTCTurnServiceConfig, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: WebRTCTurnServiceConfig, _writer: BinaryWriter): void;
    private _address?;
    private _username?;
    private _password?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of WebRTCTurnServiceConfig to deeply clone from
     */
    constructor(_value?: RecursivePartial<WebRTCTurnServiceConfig.AsObject>);
    get address(): string | undefined;
    set address(value: string | undefined);
    get username(): string | undefined;
    set username(value: string | undefined);
    get password(): string | undefined;
    set password(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): WebRTCTurnServiceConfig.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): WebRTCTurnServiceConfig.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): WebRTCTurnServiceConfig.AsProtobufJSON;
}
export declare module WebRTCTurnServiceConfig {
    /**
     * Standard JavaScript object representation for WebRTCTurnServiceConfig
     */
    interface AsObject {
        address?: string;
        username?: string;
        password?: string;
    }
    /**
     * Protobuf JSON representation for WebRTCTurnServiceConfig
     */
    interface AsProtobufJSON {
        address?: string;
        username?: string;
        password?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.lb.WebRTCServicesConfig
 */
export declare class WebRTCServicesConfig implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): WebRTCServicesConfig;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: WebRTCServicesConfig): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: WebRTCServicesConfig, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: WebRTCServicesConfig, _writer: BinaryWriter): void;
    private _stunServices?;
    private _turnServices?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of WebRTCServicesConfig to deeply clone from
     */
    constructor(_value?: RecursivePartial<WebRTCServicesConfig.AsObject>);
    get stunServices(): WebRTCStunServiceConfig[] | undefined;
    set stunServices(value: WebRTCStunServiceConfig[] | undefined);
    get turnServices(): WebRTCTurnServiceConfig[] | undefined;
    set turnServices(value: WebRTCTurnServiceConfig[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): WebRTCServicesConfig.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): WebRTCServicesConfig.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): WebRTCServicesConfig.AsProtobufJSON;
}
export declare module WebRTCServicesConfig {
    /**
     * Standard JavaScript object representation for WebRTCServicesConfig
     */
    interface AsObject {
        stunServices?: WebRTCStunServiceConfig.AsObject[];
        turnServices?: WebRTCTurnServiceConfig.AsObject[];
    }
    /**
     * Protobuf JSON representation for WebRTCServicesConfig
     */
    interface AsProtobufJSON {
        stunServices?: WebRTCStunServiceConfig.AsProtobufJSON[] | null;
        turnServices?: WebRTCTurnServiceConfig.AsProtobufJSON[] | null;
    }
}
/**
 * Message implementation for proto.pub.v1.lb.ClientSettings
 */
export declare class ClientSettings implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ClientSettings;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ClientSettings): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ClientSettings, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ClientSettings, _writer: BinaryWriter): void;
    private _showStore?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ClientSettings to deeply clone from
     */
    constructor(_value?: RecursivePartial<ClientSettings.AsObject>);
    get showStore(): boolean | undefined;
    set showStore(value: boolean | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ClientSettings.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ClientSettings.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ClientSettings.AsProtobufJSON;
}
export declare module ClientSettings {
    /**
     * Standard JavaScript object representation for ClientSettings
     */
    interface AsObject {
        showStore?: boolean;
    }
    /**
     * Protobuf JSON representation for ClientSettings
     */
    interface AsProtobufJSON {
        showStore?: boolean;
    }
}
/**
 * Message implementation for proto.pub.v1.lb.GetInfoReq
 */
export declare class GetInfoReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetInfoReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetInfoReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetInfoReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetInfoReq, _writer: BinaryWriter): void;
    private _platform?;
    private _location?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetInfoReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetInfoReq.AsObject>);
    get platform(): protoPubV1Models001.Platform | undefined;
    set platform(value: protoPubV1Models001.Platform | undefined);
    get location(): protoPubV1Models002.Location | undefined;
    set location(value: protoPubV1Models002.Location | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetInfoReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetInfoReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetInfoReq.AsProtobufJSON;
}
export declare module GetInfoReq {
    /**
     * Standard JavaScript object representation for GetInfoReq
     */
    interface AsObject {
        platform?: protoPubV1Models001.Platform.AsObject;
        location?: protoPubV1Models002.Location.AsObject;
    }
    /**
     * Protobuf JSON representation for GetInfoReq
     */
    interface AsProtobufJSON {
        platform?: protoPubV1Models001.Platform.AsProtobufJSON | null;
        location?: protoPubV1Models002.Location.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.lb.GetInfoRes
 */
export declare class GetInfoRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetInfoRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetInfoRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetInfoRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetInfoRes, _writer: BinaryWriter): void;
    private _currentTime?;
    private _cacheTime?;
    private _outOfService?;
    private _lastVersion?;
    private _webrtc?;
    private _msProfile?;
    private _core?;
    private _query?;
    private _msFile?;
    private _msBot?;
    private _msSticker?;
    private _msAvatar?;
    private _msFirebase?;
    private _msLivelocation?;
    private _msSd?;
    private _clientSettings?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetInfoRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetInfoRes.AsObject>);
    get currentTime(): string | undefined;
    set currentTime(value: string | undefined);
    get cacheTime(): string | undefined;
    set cacheTime(value: string | undefined);
    get outOfService(): boolean | undefined;
    set outOfService(value: boolean | undefined);
    get lastVersion(): ClientVersion | undefined;
    set lastVersion(value: ClientVersion | undefined);
    get webrtc(): WebRTCServicesConfig | undefined;
    set webrtc(value: WebRTCServicesConfig | undefined);
    get msProfile(): ServiceConfig | undefined;
    set msProfile(value: ServiceConfig | undefined);
    get core(): ServiceConfig | undefined;
    set core(value: ServiceConfig | undefined);
    get query(): ServiceConfig | undefined;
    set query(value: ServiceConfig | undefined);
    get msFile(): ServiceConfig | undefined;
    set msFile(value: ServiceConfig | undefined);
    get msBot(): ServiceConfig | undefined;
    set msBot(value: ServiceConfig | undefined);
    get msSticker(): ServiceConfig | undefined;
    set msSticker(value: ServiceConfig | undefined);
    get msAvatar(): ServiceConfig | undefined;
    set msAvatar(value: ServiceConfig | undefined);
    get msFirebase(): ServiceConfig | undefined;
    set msFirebase(value: ServiceConfig | undefined);
    get msLivelocation(): ServiceConfig | undefined;
    set msLivelocation(value: ServiceConfig | undefined);
    get msSd(): ServiceConfig | undefined;
    set msSd(value: ServiceConfig | undefined);
    get clientSettings(): ClientSettings | undefined;
    set clientSettings(value: ClientSettings | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetInfoRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetInfoRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetInfoRes.AsProtobufJSON;
}
export declare module GetInfoRes {
    /**
     * Standard JavaScript object representation for GetInfoRes
     */
    interface AsObject {
        currentTime?: string;
        cacheTime?: string;
        outOfService?: boolean;
        lastVersion?: ClientVersion.AsObject;
        webrtc?: WebRTCServicesConfig.AsObject;
        msProfile?: ServiceConfig.AsObject;
        core?: ServiceConfig.AsObject;
        query?: ServiceConfig.AsObject;
        msFile?: ServiceConfig.AsObject;
        msBot?: ServiceConfig.AsObject;
        msSticker?: ServiceConfig.AsObject;
        msAvatar?: ServiceConfig.AsObject;
        msFirebase?: ServiceConfig.AsObject;
        msLivelocation?: ServiceConfig.AsObject;
        msSd?: ServiceConfig.AsObject;
        clientSettings?: ClientSettings.AsObject;
    }
    /**
     * Protobuf JSON representation for GetInfoRes
     */
    interface AsProtobufJSON {
        currentTime?: string;
        cacheTime?: string;
        outOfService?: boolean;
        lastVersion?: ClientVersion.AsProtobufJSON | null;
        webrtc?: WebRTCServicesConfig.AsProtobufJSON | null;
        msProfile?: ServiceConfig.AsProtobufJSON | null;
        core?: ServiceConfig.AsProtobufJSON | null;
        query?: ServiceConfig.AsProtobufJSON | null;
        msFile?: ServiceConfig.AsProtobufJSON | null;
        msBot?: ServiceConfig.AsProtobufJSON | null;
        msSticker?: ServiceConfig.AsProtobufJSON | null;
        msAvatar?: ServiceConfig.AsProtobufJSON | null;
        msFirebase?: ServiceConfig.AsProtobufJSON | null;
        msLivelocation?: ServiceConfig.AsProtobufJSON | null;
        msSd?: ServiceConfig.AsProtobufJSON | null;
        clientSettings?: ClientSettings.AsProtobufJSON | null;
    }
}
