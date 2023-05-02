import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as protoPubV1Models001 from '../../../pub/v1/models/uid.pb';
/**
 * Message implementation for proto.pub.v1.models.Location
 */
export declare class Location implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): Location;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Location): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: Location, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: Location, _writer: BinaryWriter): void;
    private _latitude?;
    private _longitude?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Location to deeply clone from
     */
    constructor(_value?: RecursivePartial<Location.AsObject>);
    get latitude(): number | undefined;
    set latitude(value: number | undefined);
    get longitude(): number | undefined;
    set longitude(value: number | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Location.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): Location.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): Location.AsProtobufJSON;
}
export declare module Location {
    /**
     * Standard JavaScript object representation for Location
     */
    interface AsObject {
        latitude?: number;
        longitude?: number;
    }
    /**
     * Protobuf JSON representation for Location
     */
    interface AsProtobufJSON {
        latitude?: number;
        longitude?: number;
    }
}
/**
 * Message implementation for proto.pub.v1.models.LiveLocation
 */
export declare class LiveLocation implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): LiveLocation;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: LiveLocation): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: LiveLocation, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: LiveLocation, _writer: BinaryWriter): void;
    private _uuid?;
    private _from?;
    private _to?;
    private _time?;
    private _location?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of LiveLocation to deeply clone from
     */
    constructor(_value?: RecursivePartial<LiveLocation.AsObject>);
    get uuid(): string | undefined;
    set uuid(value: string | undefined);
    get from(): protoPubV1Models001.Uid | undefined;
    set from(value: protoPubV1Models001.Uid | undefined);
    get to(): protoPubV1Models001.Uid | undefined;
    set to(value: protoPubV1Models001.Uid | undefined);
    get time(): string | undefined;
    set time(value: string | undefined);
    get location(): Location | undefined;
    set location(value: Location | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): LiveLocation.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): LiveLocation.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): LiveLocation.AsProtobufJSON;
}
export declare module LiveLocation {
    /**
     * Standard JavaScript object representation for LiveLocation
     */
    interface AsObject {
        uuid?: string;
        from?: protoPubV1Models001.Uid.AsObject;
        to?: protoPubV1Models001.Uid.AsObject;
        time?: string;
        location?: Location.AsObject;
    }
    /**
     * Protobuf JSON representation for LiveLocation
     */
    interface AsProtobufJSON {
        uuid?: string;
        from?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        to?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        time?: string;
        location?: Location.AsProtobufJSON | null;
    }
}
