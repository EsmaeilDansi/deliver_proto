import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
/**
 * Message implementation for proto.pub.v1.models.File
 */
export declare class File implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): File;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: File): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: File, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: File, _writer: BinaryWriter): void;
    private _uuid?;
    private _size?;
    private _type?;
    private _name?;
    private _caption?;
    private _width?;
    private _height?;
    private _duration?;
    private _blurHash?;
    private _audioWaveform?;
    private _sign?;
    private _hash?;
    private _tempLink?;
    private _isDanger?;
    private _singVersion?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of File to deeply clone from
     */
    constructor(_value?: RecursivePartial<File.AsObject>);
    get uuid(): string | undefined;
    set uuid(value: string | undefined);
    get size(): string | undefined;
    set size(value: string | undefined);
    get type(): string | undefined;
    set type(value: string | undefined);
    get name(): string | undefined;
    set name(value: string | undefined);
    get caption(): string | undefined;
    set caption(value: string | undefined);
    get width(): number | undefined;
    set width(value: number | undefined);
    get height(): number | undefined;
    set height(value: number | undefined);
    get duration(): number | undefined;
    set duration(value: number | undefined);
    get blurHash(): string | undefined;
    set blurHash(value: string | undefined);
    get audioWaveform(): AudioWaveform | undefined;
    set audioWaveform(value: AudioWaveform | undefined);
    get sign(): string | undefined;
    set sign(value: string | undefined);
    get hash(): string | undefined;
    set hash(value: string | undefined);
    get tempLink(): string | undefined;
    set tempLink(value: string | undefined);
    get isDanger(): boolean | undefined;
    set isDanger(value: boolean | undefined);
    get singVersion(): string | undefined;
    set singVersion(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): File.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): File.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): File.AsProtobufJSON;
}
export declare module File {
    /**
     * Standard JavaScript object representation for File
     */
    interface AsObject {
        uuid?: string;
        size?: string;
        type?: string;
        name?: string;
        caption?: string;
        width?: number;
        height?: number;
        duration?: number;
        blurHash?: string;
        audioWaveform?: AudioWaveform.AsObject;
        sign?: string;
        hash?: string;
        tempLink?: string;
        isDanger?: boolean;
        singVersion?: string;
    }
    /**
     * Protobuf JSON representation for File
     */
    interface AsProtobufJSON {
        uuid?: string;
        size?: string;
        type?: string;
        name?: string;
        caption?: string;
        width?: number;
        height?: number;
        duration?: number;
        blurHash?: string;
        audioWaveform?: AudioWaveform.AsProtobufJSON | null;
        sign?: string;
        hash?: string;
        tempLink?: string;
        isDanger?: boolean;
        singVersion?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.models.MemeType
 */
export declare class MemeType implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): MemeType;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: MemeType): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: MemeType, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: MemeType, _writer: BinaryWriter): void;
    private _superType?;
    private _subType?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of MemeType to deeply clone from
     */
    constructor(_value?: RecursivePartial<MemeType.AsObject>);
    get superType(): string | undefined;
    set superType(value: string | undefined);
    get subType(): string | undefined;
    set subType(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): MemeType.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): MemeType.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): MemeType.AsProtobufJSON;
}
export declare module MemeType {
    /**
     * Standard JavaScript object representation for MemeType
     */
    interface AsObject {
        superType?: string;
        subType?: string;
    }
    /**
     * Protobuf JSON representation for MemeType
     */
    interface AsProtobufJSON {
        superType?: string;
        subType?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.models.AudioWaveform
 */
export declare class AudioWaveform implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): AudioWaveform;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: AudioWaveform): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: AudioWaveform, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: AudioWaveform, _writer: BinaryWriter): void;
    private _version?;
    private _channels?;
    private _sampleRate?;
    private _samplesPerPixel?;
    private _bits?;
    private _length?;
    private _data?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of AudioWaveform to deeply clone from
     */
    constructor(_value?: RecursivePartial<AudioWaveform.AsObject>);
    get version(): number | undefined;
    set version(value: number | undefined);
    get channels(): number | undefined;
    set channels(value: number | undefined);
    get sampleRate(): number | undefined;
    set sampleRate(value: number | undefined);
    get samplesPerPixel(): number | undefined;
    set samplesPerPixel(value: number | undefined);
    get bits(): number | undefined;
    set bits(value: number | undefined);
    get length(): number | undefined;
    set length(value: number | undefined);
    get data(): number[] | undefined;
    set data(value: number[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): AudioWaveform.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): AudioWaveform.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): AudioWaveform.AsProtobufJSON;
}
export declare module AudioWaveform {
    /**
     * Standard JavaScript object representation for AudioWaveform
     */
    interface AsObject {
        version?: number;
        channels?: number;
        sampleRate?: number;
        samplesPerPixel?: number;
        bits?: number;
        length?: number;
        data?: number[];
    }
    /**
     * Protobuf JSON representation for AudioWaveform
     */
    interface AsProtobufJSON {
        version?: number;
        channels?: number;
        sampleRate?: number;
        samplesPerPixel?: number;
        bits?: number;
        length?: number;
        data?: number[];
    }
}
