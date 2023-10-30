import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
export declare enum SettingsAvailabilityStatus {
    ALL = 0,
    NO_ONE = 1,
    CONTACT = 2
}
/**
 * Message implementation for proto.pub.v1.models.MuteSettings
 */
export declare class MuteSettings implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): MuteSettings;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: MuteSettings): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: MuteSettings, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: MuteSettings, _writer: BinaryWriter): void;
    private _isAllMuted?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of MuteSettings to deeply clone from
     */
    constructor(_value?: RecursivePartial<MuteSettings.AsObject>);
    get isAllMuted(): boolean | undefined;
    set isAllMuted(value: boolean | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): MuteSettings.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): MuteSettings.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): MuteSettings.AsProtobufJSON;
}
export declare module MuteSettings {
    /**
     * Standard JavaScript object representation for MuteSettings
     */
    interface AsObject {
        isAllMuted?: boolean;
    }
    /**
     * Protobuf JSON representation for MuteSettings
     */
    interface AsProtobufJSON {
        isAllMuted?: boolean;
    }
}
/**
 * Message implementation for proto.pub.v1.models.Settings
 */
export declare class Settings implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): Settings;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Settings): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: Settings, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: Settings, _writer: BinaryWriter): void;
    private _lastSeenAvailabilityStatus?;
    private _callAvailabilityStatus?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Settings to deeply clone from
     */
    constructor(_value?: RecursivePartial<Settings.AsObject>);
    get lastSeenAvailabilityStatus(): SettingsAvailabilityStatus | undefined;
    set lastSeenAvailabilityStatus(value: SettingsAvailabilityStatus | undefined);
    get callAvailabilityStatus(): SettingsAvailabilityStatus | undefined;
    set callAvailabilityStatus(value: SettingsAvailabilityStatus | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Settings.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): Settings.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): Settings.AsProtobufJSON;
}
export declare module Settings {
    /**
     * Standard JavaScript object representation for Settings
     */
    interface AsObject {
        lastSeenAvailabilityStatus?: SettingsAvailabilityStatus;
        callAvailabilityStatus?: SettingsAvailabilityStatus;
    }
    /**
     * Protobuf JSON representation for Settings
     */
    interface AsProtobufJSON {
        lastSeenAvailabilityStatus?: string;
        callAvailabilityStatus?: string;
    }
}
