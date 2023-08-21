import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as protoPubV1Models001 from '../../../pub/v1/models/uid.pb';
import * as protoPubV1Models002 from '../../../pub/v1/models/file.pb';
import * as protoPubV1Models003 from '../../../pub/v1/models/pin-code-settings.pb';
/**
 * Message implementation for proto.pub.v1.models.Showcase
 */
export declare class Showcase implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): Showcase;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Showcase): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: Showcase, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: Showcase, _writer: BinaryWriter): void;
    private _isAdvertisement?;
    private _primary?;
    private _groupedRooms?;
    private _singleBanner?;
    private _groupedBanners?;
    private _singleUrl?;
    private _groupedUrl?;
    private _type;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Showcase to deeply clone from
     */
    constructor(_value?: RecursivePartial<Showcase.AsObject>);
    get isAdvertisement(): boolean | undefined;
    set isAdvertisement(value: boolean | undefined);
    get primary(): boolean | undefined;
    set primary(value: boolean | undefined);
    get groupedRooms(): GroupedRooms | undefined;
    set groupedRooms(value: GroupedRooms | undefined);
    get singleBanner(): BannerCase | undefined;
    set singleBanner(value: BannerCase | undefined);
    get groupedBanners(): GroupedBanners | undefined;
    set groupedBanners(value: GroupedBanners | undefined);
    get singleUrl(): UrlCase | undefined;
    set singleUrl(value: UrlCase | undefined);
    get groupedUrl(): GroupedUrls | undefined;
    set groupedUrl(value: GroupedUrls | undefined);
    get type(): Showcase.TypeCase;
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Showcase.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): Showcase.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): Showcase.AsProtobufJSON;
}
export declare module Showcase {
    /**
     * Standard JavaScript object representation for Showcase
     */
    interface AsObject {
        isAdvertisement?: boolean;
        primary?: boolean;
        groupedRooms?: GroupedRooms.AsObject;
        singleBanner?: BannerCase.AsObject;
        groupedBanners?: GroupedBanners.AsObject;
        singleUrl?: UrlCase.AsObject;
        groupedUrl?: GroupedUrls.AsObject;
    }
    /**
     * Protobuf JSON representation for Showcase
     */
    interface AsProtobufJSON {
        isAdvertisement?: boolean;
        primary?: boolean;
        groupedRooms?: GroupedRooms.AsProtobufJSON | null;
        singleBanner?: BannerCase.AsProtobufJSON | null;
        groupedBanners?: GroupedBanners.AsProtobufJSON | null;
        singleUrl?: UrlCase.AsProtobufJSON | null;
        groupedUrl?: GroupedUrls.AsProtobufJSON | null;
    }
    enum TypeCase {
        none = 0,
        groupedRooms = 1,
        singleBanner = 2,
        groupedBanners = 3,
        singleUrl = 4,
        groupedUrl = 5
    }
}
/**
 * Message implementation for proto.pub.v1.models.GroupedRooms
 */
export declare class GroupedRooms implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GroupedRooms;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GroupedRooms): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GroupedRooms, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GroupedRooms, _writer: BinaryWriter): void;
    private _name?;
    private _roomsList?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GroupedRooms to deeply clone from
     */
    constructor(_value?: RecursivePartial<GroupedRooms.AsObject>);
    get name(): string | undefined;
    set name(value: string | undefined);
    get roomsList(): RoomCase[] | undefined;
    set roomsList(value: RoomCase[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GroupedRooms.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GroupedRooms.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GroupedRooms.AsProtobufJSON;
}
export declare module GroupedRooms {
    /**
     * Standard JavaScript object representation for GroupedRooms
     */
    interface AsObject {
        name?: string;
        roomsList?: RoomCase.AsObject[];
    }
    /**
     * Protobuf JSON representation for GroupedRooms
     */
    interface AsProtobufJSON {
        name?: string;
        roomsList?: RoomCase.AsProtobufJSON[] | null;
    }
}
/**
 * Message implementation for proto.pub.v1.models.GroupedBanners
 */
export declare class GroupedBanners implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GroupedBanners;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GroupedBanners): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GroupedBanners, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GroupedBanners, _writer: BinaryWriter): void;
    private _name?;
    private _bannersList?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GroupedBanners to deeply clone from
     */
    constructor(_value?: RecursivePartial<GroupedBanners.AsObject>);
    get name(): string | undefined;
    set name(value: string | undefined);
    get bannersList(): BannerCase[] | undefined;
    set bannersList(value: BannerCase[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GroupedBanners.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GroupedBanners.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GroupedBanners.AsProtobufJSON;
}
export declare module GroupedBanners {
    /**
     * Standard JavaScript object representation for GroupedBanners
     */
    interface AsObject {
        name?: string;
        bannersList?: BannerCase.AsObject[];
    }
    /**
     * Protobuf JSON representation for GroupedBanners
     */
    interface AsProtobufJSON {
        name?: string;
        bannersList?: BannerCase.AsProtobufJSON[] | null;
    }
}
/**
 * Message implementation for proto.pub.v1.models.GroupedUrls
 */
export declare class GroupedUrls implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GroupedUrls;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GroupedUrls): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GroupedUrls, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GroupedUrls, _writer: BinaryWriter): void;
    private _name?;
    private _urlsList?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GroupedUrls to deeply clone from
     */
    constructor(_value?: RecursivePartial<GroupedUrls.AsObject>);
    get name(): string | undefined;
    set name(value: string | undefined);
    get urlsList(): UrlCase[] | undefined;
    set urlsList(value: UrlCase[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GroupedUrls.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GroupedUrls.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GroupedUrls.AsProtobufJSON;
}
export declare module GroupedUrls {
    /**
     * Standard JavaScript object representation for GroupedUrls
     */
    interface AsObject {
        name?: string;
        urlsList?: UrlCase.AsObject[];
    }
    /**
     * Protobuf JSON representation for GroupedUrls
     */
    interface AsProtobufJSON {
        name?: string;
        urlsList?: UrlCase.AsProtobufJSON[] | null;
    }
}
/**
 * Message implementation for proto.pub.v1.models.BannerCase
 */
export declare class BannerCase implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): BannerCase;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: BannerCase): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: BannerCase, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: BannerCase, _writer: BinaryWriter): void;
    private _img?;
    private _uid?;
    private _description?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of BannerCase to deeply clone from
     */
    constructor(_value?: RecursivePartial<BannerCase.AsObject>);
    get img(): protoPubV1Models002.File | undefined;
    set img(value: protoPubV1Models002.File | undefined);
    get uid(): protoPubV1Models001.Uid | undefined;
    set uid(value: protoPubV1Models001.Uid | undefined);
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
    toObject(): BannerCase.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): BannerCase.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): BannerCase.AsProtobufJSON;
}
export declare module BannerCase {
    /**
     * Standard JavaScript object representation for BannerCase
     */
    interface AsObject {
        img?: protoPubV1Models002.File.AsObject;
        uid?: protoPubV1Models001.Uid.AsObject;
        description?: string;
    }
    /**
     * Protobuf JSON representation for BannerCase
     */
    interface AsProtobufJSON {
        img?: protoPubV1Models002.File.AsProtobufJSON | null;
        uid?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        description?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.models.RoomCase
 */
export declare class RoomCase implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): RoomCase;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: RoomCase): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: RoomCase, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: RoomCase, _writer: BinaryWriter): void;
    private _uid?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of RoomCase to deeply clone from
     */
    constructor(_value?: RecursivePartial<RoomCase.AsObject>);
    get uid(): protoPubV1Models001.Uid | undefined;
    set uid(value: protoPubV1Models001.Uid | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): RoomCase.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): RoomCase.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): RoomCase.AsProtobufJSON;
}
export declare module RoomCase {
    /**
     * Standard JavaScript object representation for RoomCase
     */
    interface AsObject {
        uid?: protoPubV1Models001.Uid.AsObject;
    }
    /**
     * Protobuf JSON representation for RoomCase
     */
    interface AsProtobufJSON {
        uid?: protoPubV1Models001.Uid.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.models.UrlCase
 */
export declare class UrlCase implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): UrlCase;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: UrlCase): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: UrlCase, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: UrlCase, _writer: BinaryWriter): void;
    private _name?;
    private _description?;
    private _img?;
    private _url?;
    private _botCallback?;
    private _botWebview?;
    private _type;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of UrlCase to deeply clone from
     */
    constructor(_value?: RecursivePartial<UrlCase.AsObject>);
    get name(): string | undefined;
    set name(value: string | undefined);
    get description(): string | undefined;
    set description(value: string | undefined);
    get img(): protoPubV1Models002.File | undefined;
    set img(value: protoPubV1Models002.File | undefined);
    get url(): SimpleUrl | undefined;
    set url(value: SimpleUrl | undefined);
    get botCallback(): BotCallback | undefined;
    set botCallback(value: BotCallback | undefined);
    get botWebview(): BotWebview | undefined;
    set botWebview(value: BotWebview | undefined);
    get type(): UrlCase.TypeCase;
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): UrlCase.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): UrlCase.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): UrlCase.AsProtobufJSON;
}
export declare module UrlCase {
    /**
     * Standard JavaScript object representation for UrlCase
     */
    interface AsObject {
        name?: string;
        description?: string;
        img?: protoPubV1Models002.File.AsObject;
        url?: SimpleUrl.AsObject;
        botCallback?: BotCallback.AsObject;
        botWebview?: BotWebview.AsObject;
    }
    /**
     * Protobuf JSON representation for UrlCase
     */
    interface AsProtobufJSON {
        name?: string;
        description?: string;
        img?: protoPubV1Models002.File.AsProtobufJSON | null;
        url?: SimpleUrl.AsProtobufJSON | null;
        botCallback?: BotCallback.AsProtobufJSON | null;
        botWebview?: BotWebview.AsProtobufJSON | null;
    }
    enum TypeCase {
        none = 0,
        url = 1,
        botCallback = 2,
        botWebview = 3
    }
}
/**
 * Message implementation for proto.pub.v1.models.SimpleUrl
 */
export declare class SimpleUrl implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): SimpleUrl;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: SimpleUrl): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: SimpleUrl, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: SimpleUrl, _writer: BinaryWriter): void;
    private _url?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of SimpleUrl to deeply clone from
     */
    constructor(_value?: RecursivePartial<SimpleUrl.AsObject>);
    get url(): string | undefined;
    set url(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): SimpleUrl.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): SimpleUrl.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): SimpleUrl.AsProtobufJSON;
}
export declare module SimpleUrl {
    /**
     * Standard JavaScript object representation for SimpleUrl
     */
    interface AsObject {
        url?: string;
    }
    /**
     * Protobuf JSON representation for SimpleUrl
     */
    interface AsProtobufJSON {
        url?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.models.BotCallback
 */
export declare class BotCallback implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): BotCallback;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: BotCallback): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: BotCallback, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: BotCallback, _writer: BinaryWriter): void;
    private _bot?;
    private _data?;
    private _pinCodeSettings?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of BotCallback to deeply clone from
     */
    constructor(_value?: RecursivePartial<BotCallback.AsObject>);
    get bot(): protoPubV1Models001.Uid | undefined;
    set bot(value: protoPubV1Models001.Uid | undefined);
    get data(): string | undefined;
    set data(value: string | undefined);
    get pinCodeSettings(): protoPubV1Models003.PinCodeSettings | undefined;
    set pinCodeSettings(value: protoPubV1Models003.PinCodeSettings | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): BotCallback.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): BotCallback.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): BotCallback.AsProtobufJSON;
}
export declare module BotCallback {
    /**
     * Standard JavaScript object representation for BotCallback
     */
    interface AsObject {
        bot?: protoPubV1Models001.Uid.AsObject;
        data?: string;
        pinCodeSettings?: protoPubV1Models003.PinCodeSettings.AsObject;
    }
    /**
     * Protobuf JSON representation for BotCallback
     */
    interface AsProtobufJSON {
        bot?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        data?: string;
        pinCodeSettings?: protoPubV1Models003.PinCodeSettings.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.models.BotWebview
 */
export declare class BotWebview implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): BotWebview;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: BotWebview): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: BotWebview, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: BotWebview, _writer: BinaryWriter): void;
    private _bot?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of BotWebview to deeply clone from
     */
    constructor(_value?: RecursivePartial<BotWebview.AsObject>);
    get bot(): protoPubV1Models001.Uid | undefined;
    set bot(value: protoPubV1Models001.Uid | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): BotWebview.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): BotWebview.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): BotWebview.AsProtobufJSON;
}
export declare module BotWebview {
    /**
     * Standard JavaScript object representation for BotWebview
     */
    interface AsObject {
        bot?: protoPubV1Models001.Uid.AsObject;
    }
    /**
     * Protobuf JSON representation for BotWebview
     */
    interface AsProtobufJSON {
        bot?: protoPubV1Models001.Uid.AsProtobufJSON | null;
    }
}
