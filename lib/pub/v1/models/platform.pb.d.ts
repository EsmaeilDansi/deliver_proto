import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
export declare enum PlatformsType {
    ANDROID = 0,
    IOS = 1,
    MAC_OS = 2,
    LINUX = 3,
    WINDOWS = 4,
    WEB = 5
}
export declare enum Applications {
    we = 0,
    inta = 1,
    noor = 2,
    bmk = 3,
    mokeb = 4
}
export declare enum Sources {
    DIRECT = 0,
    CAFE_BAZAAR = 1,
    MYKET = 2,
    SIB_APP = 3,
    GOOGLE_PLAY = 4
}
/**
 * Message implementation for proto.pub.v1.models.Platform
 */
export declare class Platform implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): Platform;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Platform): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: Platform, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: Platform, _writer: BinaryWriter): void;
    private _platformType?;
    private _osVersion?;
    private _application?;
    private _version?;
    private _revision?;
    private _source?;
    private _ip?;
    private _clientVersion?;
    private _applicationName?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Platform to deeply clone from
     */
    constructor(_value?: RecursivePartial<Platform.AsObject>);
    get platformType(): PlatformsType | undefined;
    set platformType(value: PlatformsType | undefined);
    get osVersion(): string | undefined;
    set osVersion(value: string | undefined);
    get application(): Applications | undefined;
    set application(value: Applications | undefined);
    get version(): number | undefined;
    set version(value: number | undefined);
    get revision(): number | undefined;
    set revision(value: number | undefined);
    get source(): Sources | undefined;
    set source(value: Sources | undefined);
    get ip(): string | undefined;
    set ip(value: string | undefined);
    get clientVersion(): string | undefined;
    set clientVersion(value: string | undefined);
    get applicationName(): string | undefined;
    set applicationName(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Platform.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): Platform.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): Platform.AsProtobufJSON;
}
export declare module Platform {
    /**
     * Standard JavaScript object representation for Platform
     */
    interface AsObject {
        platformType?: PlatformsType;
        osVersion?: string;
        application?: Applications;
        version?: number;
        revision?: number;
        source?: Sources;
        ip?: string;
        clientVersion?: string;
        applicationName?: string;
    }
    /**
     * Protobuf JSON representation for Platform
     */
    interface AsProtobufJSON {
        platformType?: string;
        osVersion?: string;
        application?: string;
        version?: number;
        revision?: number;
        source?: string;
        ip?: string;
        clientVersion?: string;
        applicationName?: string;
    }
}
