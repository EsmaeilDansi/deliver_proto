import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as protoPubV1Models001 from '../../../pub/v1/models/uid.pb';
import * as protoPubV1Models002 from '../../../pub/v1/models/file.pb';
export declare enum PrivateDataType {
    PHONE_NUMBER = 0,
    USERNAME = 1,
    EMAIL = 2,
    NAME = 3,
    LOCATION = 4,
    FILE = 5
}
/**
 * Message implementation for proto.pub.v1.models.SharePrivateDataRequest
 */
export declare class SharePrivateDataRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): SharePrivateDataRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: SharePrivateDataRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: SharePrivateDataRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: SharePrivateDataRequest, _writer: BinaryWriter): void;
    private _data?;
    private _fileMemeTypeFilters?;
    private _token?;
    private _description?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of SharePrivateDataRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<SharePrivateDataRequest.AsObject>);
    get data(): PrivateDataType | undefined;
    set data(value: PrivateDataType | undefined);
    get fileMemeTypeFilters(): protoPubV1Models002.MemeType[] | undefined;
    set fileMemeTypeFilters(value: protoPubV1Models002.MemeType[] | undefined);
    get token(): string | undefined;
    set token(value: string | undefined);
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
    toObject(): SharePrivateDataRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): SharePrivateDataRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): SharePrivateDataRequest.AsProtobufJSON;
}
export declare module SharePrivateDataRequest {
    /**
     * Standard JavaScript object representation for SharePrivateDataRequest
     */
    interface AsObject {
        data?: PrivateDataType;
        fileMemeTypeFilters?: protoPubV1Models002.MemeType.AsObject[];
        token?: string;
        description?: string;
    }
    /**
     * Protobuf JSON representation for SharePrivateDataRequest
     */
    interface AsProtobufJSON {
        data?: string;
        fileMemeTypeFilters?: protoPubV1Models002.MemeType.AsProtobufJSON[] | null;
        token?: string;
        description?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.models.SharePrivateDataAcceptance
 */
export declare class SharePrivateDataAcceptance implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): SharePrivateDataAcceptance;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: SharePrivateDataAcceptance): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: SharePrivateDataAcceptance, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: SharePrivateDataAcceptance, _writer: BinaryWriter): void;
    private _data?;
    private _token?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of SharePrivateDataAcceptance to deeply clone from
     */
    constructor(_value?: RecursivePartial<SharePrivateDataAcceptance.AsObject>);
    get data(): PrivateDataType | undefined;
    set data(value: PrivateDataType | undefined);
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
    toObject(): SharePrivateDataAcceptance.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): SharePrivateDataAcceptance.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): SharePrivateDataAcceptance.AsProtobufJSON;
}
export declare module SharePrivateDataAcceptance {
    /**
     * Standard JavaScript object representation for SharePrivateDataAcceptance
     */
    interface AsObject {
        data?: PrivateDataType;
        token?: string;
    }
    /**
     * Protobuf JSON representation for SharePrivateDataAcceptance
     */
    interface AsProtobufJSON {
        data?: string;
        token?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.models.SharePrivateDataAcceptanceData
 */
export declare class SharePrivateDataAcceptanceData implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): SharePrivateDataAcceptanceData;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: SharePrivateDataAcceptanceData): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: SharePrivateDataAcceptanceData, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: SharePrivateDataAcceptanceData, _writer: BinaryWriter): void;
    private _typeOfData?;
    private _token?;
    private _data?;
    private _time?;
    private _from?;
    private _to?;
    private _messageId?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of SharePrivateDataAcceptanceData to deeply clone from
     */
    constructor(_value?: RecursivePartial<SharePrivateDataAcceptanceData.AsObject>);
    get typeOfData(): PrivateDataType | undefined;
    set typeOfData(value: PrivateDataType | undefined);
    get token(): string | undefined;
    set token(value: string | undefined);
    get data(): string | undefined;
    set data(value: string | undefined);
    get time(): string | undefined;
    set time(value: string | undefined);
    get from(): protoPubV1Models001.Uid | undefined;
    set from(value: protoPubV1Models001.Uid | undefined);
    get to(): protoPubV1Models001.Uid | undefined;
    set to(value: protoPubV1Models001.Uid | undefined);
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
    toObject(): SharePrivateDataAcceptanceData.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): SharePrivateDataAcceptanceData.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): SharePrivateDataAcceptanceData.AsProtobufJSON;
}
export declare module SharePrivateDataAcceptanceData {
    /**
     * Standard JavaScript object representation for SharePrivateDataAcceptanceData
     */
    interface AsObject {
        typeOfData?: PrivateDataType;
        token?: string;
        data?: string;
        time?: string;
        from?: protoPubV1Models001.Uid.AsObject;
        to?: protoPubV1Models001.Uid.AsObject;
        messageId?: string;
    }
    /**
     * Protobuf JSON representation for SharePrivateDataAcceptanceData
     */
    interface AsProtobufJSON {
        typeOfData?: string;
        token?: string;
        data?: string;
        time?: string;
        from?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        to?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        messageId?: string;
    }
}
