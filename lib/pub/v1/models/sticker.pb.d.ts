import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as protoPubV1Models000 from '../../../pub/v1/models/file.pb';
/**
 * Message implementation for proto.pub.v1.models.Sticker
 */
export declare class Sticker implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): Sticker;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Sticker): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: Sticker, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: Sticker, _writer: BinaryWriter): void;
    private _file?;
    private _emojis?;
    private _isAnimated?;
    private _isVideo?;
    private _stickerSetId?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Sticker to deeply clone from
     */
    constructor(_value?: RecursivePartial<Sticker.AsObject>);
    get file(): protoPubV1Models000.File | undefined;
    set file(value: protoPubV1Models000.File | undefined);
    get emojis(): string[] | undefined;
    set emojis(value: string[] | undefined);
    get isAnimated(): boolean | undefined;
    set isAnimated(value: boolean | undefined);
    get isVideo(): boolean | undefined;
    set isVideo(value: boolean | undefined);
    get stickerSetId(): string | undefined;
    set stickerSetId(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Sticker.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): Sticker.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): Sticker.AsProtobufJSON;
}
export declare module Sticker {
    /**
     * Standard JavaScript object representation for Sticker
     */
    interface AsObject {
        file?: protoPubV1Models000.File.AsObject;
        emojis?: string[];
        isAnimated?: boolean;
        isVideo?: boolean;
        stickerSetId?: string;
    }
    /**
     * Protobuf JSON representation for Sticker
     */
    interface AsProtobufJSON {
        file?: protoPubV1Models000.File.AsProtobufJSON | null;
        emojis?: string[];
        isAnimated?: boolean;
        isVideo?: boolean;
        stickerSetId?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.models.StickerSet
 */
export declare class StickerSet implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): StickerSet;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: StickerSet): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: StickerSet, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: StickerSet, _writer: BinaryWriter): void;
    private _id?;
    private _name?;
    private _thumbnail?;
    private _stickers?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of StickerSet to deeply clone from
     */
    constructor(_value?: RecursivePartial<StickerSet.AsObject>);
    get id(): string | undefined;
    set id(value: string | undefined);
    get name(): string | undefined;
    set name(value: string | undefined);
    get thumbnail(): protoPubV1Models000.File | undefined;
    set thumbnail(value: protoPubV1Models000.File | undefined);
    get stickers(): Sticker[] | undefined;
    set stickers(value: Sticker[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): StickerSet.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): StickerSet.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): StickerSet.AsProtobufJSON;
}
export declare module StickerSet {
    /**
     * Standard JavaScript object representation for StickerSet
     */
    interface AsObject {
        id?: string;
        name?: string;
        thumbnail?: protoPubV1Models000.File.AsObject;
        stickers?: Sticker.AsObject[];
    }
    /**
     * Protobuf JSON representation for StickerSet
     */
    interface AsProtobufJSON {
        id?: string;
        name?: string;
        thumbnail?: protoPubV1Models000.File.AsProtobufJSON | null;
        stickers?: Sticker.AsProtobufJSON[] | null;
    }
}
