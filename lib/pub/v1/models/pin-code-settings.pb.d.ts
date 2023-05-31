import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
/**
 * Message implementation for proto.pub.v1.models.PinCodeSettings
 */
export declare class PinCodeSettings implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): PinCodeSettings;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: PinCodeSettings): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: PinCodeSettings, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: PinCodeSettings, _writer: BinaryWriter): void;
    private _isNeeded?;
    private _length?;
    private _isRepeatNeeded?;
    private _hint?;
    private _isOutsideFirstRedirectionEnabled?;
    private _outsideFirstRedirectionAlert?;
    private _outsideFirstRedirectionText?;
    private _enableBiometric?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of PinCodeSettings to deeply clone from
     */
    constructor(_value?: RecursivePartial<PinCodeSettings.AsObject>);
    get isNeeded(): boolean | undefined;
    set isNeeded(value: boolean | undefined);
    get length(): number | undefined;
    set length(value: number | undefined);
    get isRepeatNeeded(): boolean | undefined;
    set isRepeatNeeded(value: boolean | undefined);
    get hint(): string | undefined;
    set hint(value: string | undefined);
    get isOutsideFirstRedirectionEnabled(): boolean | undefined;
    set isOutsideFirstRedirectionEnabled(value: boolean | undefined);
    get outsideFirstRedirectionAlert(): string | undefined;
    set outsideFirstRedirectionAlert(value: string | undefined);
    get outsideFirstRedirectionText(): string | undefined;
    set outsideFirstRedirectionText(value: string | undefined);
    get enableBiometric(): boolean | undefined;
    set enableBiometric(value: boolean | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): PinCodeSettings.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): PinCodeSettings.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): PinCodeSettings.AsProtobufJSON;
}
export declare module PinCodeSettings {
    /**
     * Standard JavaScript object representation for PinCodeSettings
     */
    interface AsObject {
        isNeeded?: boolean;
        length?: number;
        isRepeatNeeded?: boolean;
        hint?: string;
        isOutsideFirstRedirectionEnabled?: boolean;
        outsideFirstRedirectionAlert?: string;
        outsideFirstRedirectionText?: string;
        enableBiometric?: boolean;
    }
    /**
     * Protobuf JSON representation for PinCodeSettings
     */
    interface AsProtobufJSON {
        isNeeded?: boolean;
        length?: number;
        isRepeatNeeded?: boolean;
        hint?: string;
        isOutsideFirstRedirectionEnabled?: boolean;
        outsideFirstRedirectionAlert?: string;
        outsideFirstRedirectionText?: string;
        enableBiometric?: boolean;
    }
}
