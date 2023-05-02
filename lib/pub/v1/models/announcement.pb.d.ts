import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as protoPubV1Models000 from '../../../pub/v1/models/file.pb';
export declare enum AnnouncementSeverity {
    INFO = 0,
    WARNING = 1,
    FATAL = 2
}
/**
 * Message implementation for proto.pub.v1.models.Announcement
 */
export declare class Announcement implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): Announcement;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Announcement): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: Announcement, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: Announcement, _writer: BinaryWriter): void;
    private _title?;
    private _url?;
    private _severity?;
    private _details?;
    private _isAdvertisement?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Announcement to deeply clone from
     */
    constructor(_value?: RecursivePartial<Announcement.AsObject>);
    get title(): string | undefined;
    set title(value: string | undefined);
    get url(): string | undefined;
    set url(value: string | undefined);
    get severity(): AnnouncementSeverity | undefined;
    set severity(value: AnnouncementSeverity | undefined);
    get details(): AnnouncementDetails | undefined;
    set details(value: AnnouncementDetails | undefined);
    get isAdvertisement(): boolean | undefined;
    set isAdvertisement(value: boolean | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Announcement.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): Announcement.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): Announcement.AsProtobufJSON;
}
export declare module Announcement {
    /**
     * Standard JavaScript object representation for Announcement
     */
    interface AsObject {
        title?: string;
        url?: string;
        severity?: AnnouncementSeverity;
        details?: AnnouncementDetails.AsObject;
        isAdvertisement?: boolean;
    }
    /**
     * Protobuf JSON representation for Announcement
     */
    interface AsProtobufJSON {
        title?: string;
        url?: string;
        severity?: string;
        details?: AnnouncementDetails.AsProtobufJSON | null;
        isAdvertisement?: boolean;
    }
}
/**
 * Message implementation for proto.pub.v1.models.AnnouncementDetails
 */
export declare class AnnouncementDetails implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): AnnouncementDetails;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: AnnouncementDetails): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: AnnouncementDetails, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: AnnouncementDetails, _writer: BinaryWriter): void;
    private _title?;
    private _description?;
    private _urlLabel?;
    private _primaryColor?;
    private _backgroundImage?;
    private _animation?;
    private _time?;
    private _viewConfiguration?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of AnnouncementDetails to deeply clone from
     */
    constructor(_value?: RecursivePartial<AnnouncementDetails.AsObject>);
    get title(): string | undefined;
    set title(value: string | undefined);
    get description(): string | undefined;
    set description(value: string | undefined);
    get urlLabel(): string | undefined;
    set urlLabel(value: string | undefined);
    get primaryColor(): string | undefined;
    set primaryColor(value: string | undefined);
    get backgroundImage(): protoPubV1Models000.File | undefined;
    set backgroundImage(value: protoPubV1Models000.File | undefined);
    get animation(): protoPubV1Models000.File | undefined;
    set animation(value: protoPubV1Models000.File | undefined);
    get time(): string | undefined;
    set time(value: string | undefined);
    get viewConfiguration(): AnnouncementDetailsViewConfiguration | undefined;
    set viewConfiguration(value: AnnouncementDetailsViewConfiguration | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): AnnouncementDetails.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): AnnouncementDetails.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): AnnouncementDetails.AsProtobufJSON;
}
export declare module AnnouncementDetails {
    /**
     * Standard JavaScript object representation for AnnouncementDetails
     */
    interface AsObject {
        title?: string;
        description?: string;
        urlLabel?: string;
        primaryColor?: string;
        backgroundImage?: protoPubV1Models000.File.AsObject;
        animation?: protoPubV1Models000.File.AsObject;
        time?: string;
        viewConfiguration?: AnnouncementDetailsViewConfiguration.AsObject;
    }
    /**
     * Protobuf JSON representation for AnnouncementDetails
     */
    interface AsProtobufJSON {
        title?: string;
        description?: string;
        urlLabel?: string;
        primaryColor?: string;
        backgroundImage?: protoPubV1Models000.File.AsProtobufJSON | null;
        animation?: protoPubV1Models000.File.AsProtobufJSON | null;
        time?: string;
        viewConfiguration?: AnnouncementDetailsViewConfiguration.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.models.AnnouncementDetailsViewConfiguration
 */
export declare class AnnouncementDetailsViewConfiguration implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): AnnouncementDetailsViewConfiguration;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: AnnouncementDetailsViewConfiguration): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: AnnouncementDetailsViewConfiguration, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: AnnouncementDetailsViewConfiguration, _writer: BinaryWriter): void;
    private _showAsDetailedViewSince?;
    private _showAsDetailedViewUntil?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of AnnouncementDetailsViewConfiguration to deeply clone from
     */
    constructor(_value?: RecursivePartial<AnnouncementDetailsViewConfiguration.AsObject>);
    get showAsDetailedViewSince(): string | undefined;
    set showAsDetailedViewSince(value: string | undefined);
    get showAsDetailedViewUntil(): string | undefined;
    set showAsDetailedViewUntil(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): AnnouncementDetailsViewConfiguration.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): AnnouncementDetailsViewConfiguration.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): AnnouncementDetailsViewConfiguration.AsProtobufJSON;
}
export declare module AnnouncementDetailsViewConfiguration {
    /**
     * Standard JavaScript object representation for AnnouncementDetailsViewConfiguration
     */
    interface AsObject {
        showAsDetailedViewSince?: string;
        showAsDetailedViewUntil?: string;
    }
    /**
     * Protobuf JSON representation for AnnouncementDetailsViewConfiguration
     */
    interface AsProtobufJSON {
        showAsDetailedViewSince?: string;
        showAsDetailedViewUntil?: string;
    }
}
