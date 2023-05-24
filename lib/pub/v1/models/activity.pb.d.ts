import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as protoPubV1Models001 from '../../../pub/v1/models/uid.pb';
export declare enum ActivityType {
    NO_ACTIVITY = 0,
    TYPING = 1,
    SENDING_FILE = 2,
    SENDING_IMAGE = 6,
    SENDING_VIDEO = 7,
    SENDING_VOICE = 8,
    RECORDING_VOICE = 3,
    RECORDING_VIDEO = 4,
    CHOOSING_STICKER = 5
}
/**
 * Message implementation for proto.pub.v1.models.Activity
 */
export declare class Activity implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): Activity;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Activity): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: Activity, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: Activity, _writer: BinaryWriter): void;
    private _from?;
    private _to?;
    private _typeOfActivity?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Activity to deeply clone from
     */
    constructor(_value?: RecursivePartial<Activity.AsObject>);
    get from(): protoPubV1Models001.Uid | undefined;
    set from(value: protoPubV1Models001.Uid | undefined);
    get to(): protoPubV1Models001.Uid | undefined;
    set to(value: protoPubV1Models001.Uid | undefined);
    get typeOfActivity(): ActivityType | undefined;
    set typeOfActivity(value: ActivityType | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Activity.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): Activity.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): Activity.AsProtobufJSON;
}
export declare module Activity {
    /**
     * Standard JavaScript object representation for Activity
     */
    interface AsObject {
        from?: protoPubV1Models001.Uid.AsObject;
        to?: protoPubV1Models001.Uid.AsObject;
        typeOfActivity?: ActivityType;
    }
    /**
     * Protobuf JSON representation for Activity
     */
    interface AsProtobufJSON {
        from?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        to?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        typeOfActivity?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.models.ActivityByClient
 */
export declare class ActivityByClient implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ActivityByClient;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ActivityByClient): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ActivityByClient, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ActivityByClient, _writer: BinaryWriter): void;
    private _to?;
    private _typeOfActivity?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ActivityByClient to deeply clone from
     */
    constructor(_value?: RecursivePartial<ActivityByClient.AsObject>);
    get to(): protoPubV1Models001.Uid | undefined;
    set to(value: protoPubV1Models001.Uid | undefined);
    get typeOfActivity(): ActivityType | undefined;
    set typeOfActivity(value: ActivityType | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ActivityByClient.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ActivityByClient.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ActivityByClient.AsProtobufJSON;
}
export declare module ActivityByClient {
    /**
     * Standard JavaScript object representation for ActivityByClient
     */
    interface AsObject {
        to?: protoPubV1Models001.Uid.AsObject;
        typeOfActivity?: ActivityType;
    }
    /**
     * Protobuf JSON representation for ActivityByClient
     */
    interface AsProtobufJSON {
        to?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        typeOfActivity?: string;
    }
}
