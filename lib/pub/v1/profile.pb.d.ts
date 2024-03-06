import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as protoPubV1Models000 from '../../pub/v1/models/uid.pb';
import * as protoPubV1Models001 from '../../pub/v1/models/phone.pb';
import * as protoPubV1Models003 from '../../pub/v1/models/platform.pb';
import * as protoPubV1Models004 from '../../pub/v1/models/contact.pb';
import * as protoPubV1Models005 from '../../pub/v1/models/user.pb';
import * as protoPubV1Models006 from '../../pub/v1/models/session.pb';
export declare enum VerificationType {
    MESSAGE = 0,
    SMS = 1
}
/**
 * Message implementation for proto.pub.v1.profile.DownloadLink
 */
export declare class DownloadLink implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): DownloadLink;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: DownloadLink): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: DownloadLink, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: DownloadLink, _writer: BinaryWriter): void;
    private _url?;
    private _label?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of DownloadLink to deeply clone from
     */
    constructor(_value?: RecursivePartial<DownloadLink.AsObject>);
    get url(): string | undefined;
    set url(value: string | undefined);
    get label(): string | undefined;
    set label(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): DownloadLink.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): DownloadLink.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): DownloadLink.AsProtobufJSON;
}
export declare module DownloadLink {
    /**
     * Standard JavaScript object representation for DownloadLink
     */
    interface AsObject {
        url?: string;
        label?: string;
    }
    /**
     * Protobuf JSON representation for DownloadLink
     */
    interface AsProtobufJSON {
        url?: string;
        label?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.profile.NewerVersionInformation
 */
export declare class NewerVersionInformation implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): NewerVersionInformation;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: NewerVersionInformation): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: NewerVersionInformation, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: NewerVersionInformation, _writer: BinaryWriter): void;
    private _version?;
    private _description?;
    private _size?;
    private _downloadLinks?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of NewerVersionInformation to deeply clone from
     */
    constructor(_value?: RecursivePartial<NewerVersionInformation.AsObject>);
    get version(): string | undefined;
    set version(value: string | undefined);
    get description(): string | undefined;
    set description(value: string | undefined);
    get size(): string | undefined;
    set size(value: string | undefined);
    get downloadLinks(): DownloadLink[] | undefined;
    set downloadLinks(value: DownloadLink[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): NewerVersionInformation.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): NewerVersionInformation.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): NewerVersionInformation.AsProtobufJSON;
}
export declare module NewerVersionInformation {
    /**
     * Standard JavaScript object representation for NewerVersionInformation
     */
    interface AsObject {
        version?: string;
        description?: string;
        size?: string;
        downloadLinks?: DownloadLink.AsObject[];
    }
    /**
     * Protobuf JSON representation for NewerVersionInformation
     */
    interface AsProtobufJSON {
        version?: string;
        description?: string;
        size?: string;
        downloadLinks?: DownloadLink.AsProtobufJSON[] | null;
    }
}
/**
 * Message implementation for proto.pub.v1.profile.GetVerificationCodeReq
 */
export declare class GetVerificationCodeReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetVerificationCodeReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetVerificationCodeReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetVerificationCodeReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetVerificationCodeReq, _writer: BinaryWriter): void;
    private _phoneNumber?;
    private _type?;
    private _platform?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetVerificationCodeReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetVerificationCodeReq.AsObject>);
    get phoneNumber(): protoPubV1Models001.PhoneNumber | undefined;
    set phoneNumber(value: protoPubV1Models001.PhoneNumber | undefined);
    get type(): VerificationType | undefined;
    set type(value: VerificationType | undefined);
    get platform(): protoPubV1Models003.Platform | undefined;
    set platform(value: protoPubV1Models003.Platform | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetVerificationCodeReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetVerificationCodeReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetVerificationCodeReq.AsProtobufJSON;
}
export declare module GetVerificationCodeReq {
    /**
     * Standard JavaScript object representation for GetVerificationCodeReq
     */
    interface AsObject {
        phoneNumber?: protoPubV1Models001.PhoneNumber.AsObject;
        type?: VerificationType;
        platform?: protoPubV1Models003.Platform.AsObject;
    }
    /**
     * Protobuf JSON representation for GetVerificationCodeReq
     */
    interface AsProtobufJSON {
        phoneNumber?: protoPubV1Models001.PhoneNumber.AsProtobufJSON | null;
        type?: string;
        platform?: protoPubV1Models003.Platform.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.profile.GetVerificationCodeRes
 */
export declare class GetVerificationCodeRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetVerificationCodeRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetVerificationCodeRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetVerificationCodeRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetVerificationCodeRes, _writer: BinaryWriter): void;
    private _type?;
    private _newerVersionInformation?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetVerificationCodeRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetVerificationCodeRes.AsObject>);
    get type(): VerificationType | undefined;
    set type(value: VerificationType | undefined);
    get newerVersionInformation(): NewerVersionInformation | undefined;
    set newerVersionInformation(value: NewerVersionInformation | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetVerificationCodeRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetVerificationCodeRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetVerificationCodeRes.AsProtobufJSON;
}
export declare module GetVerificationCodeRes {
    /**
     * Standard JavaScript object representation for GetVerificationCodeRes
     */
    interface AsObject {
        type?: VerificationType;
        newerVersionInformation?: NewerVersionInformation.AsObject;
    }
    /**
     * Protobuf JSON representation for GetVerificationCodeRes
     */
    interface AsProtobufJSON {
        type?: string;
        newerVersionInformation?: NewerVersionInformation.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.profile.VerifyCodeReq
 */
export declare class VerifyCodeReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): VerifyCodeReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: VerifyCodeReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: VerifyCodeReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: VerifyCodeReq, _writer: BinaryWriter): void;
    private _phoneNumber?;
    private _code?;
    private _device?;
    private _password?;
    private _platform?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of VerifyCodeReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<VerifyCodeReq.AsObject>);
    get phoneNumber(): protoPubV1Models001.PhoneNumber | undefined;
    set phoneNumber(value: protoPubV1Models001.PhoneNumber | undefined);
    get code(): string | undefined;
    set code(value: string | undefined);
    get device(): string | undefined;
    set device(value: string | undefined);
    get password(): string | undefined;
    set password(value: string | undefined);
    get platform(): protoPubV1Models003.Platform | undefined;
    set platform(value: protoPubV1Models003.Platform | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): VerifyCodeReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): VerifyCodeReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): VerifyCodeReq.AsProtobufJSON;
}
export declare module VerifyCodeReq {
    /**
     * Standard JavaScript object representation for VerifyCodeReq
     */
    interface AsObject {
        phoneNumber?: protoPubV1Models001.PhoneNumber.AsObject;
        code?: string;
        device?: string;
        password?: string;
        platform?: protoPubV1Models003.Platform.AsObject;
    }
    /**
     * Protobuf JSON representation for VerifyCodeReq
     */
    interface AsProtobufJSON {
        phoneNumber?: protoPubV1Models001.PhoneNumber.AsProtobufJSON | null;
        code?: string;
        device?: string;
        password?: string;
        platform?: protoPubV1Models003.Platform.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.profile.CheckQrCodeIsVerifiedAndLoginReq
 */
export declare class CheckQrCodeIsVerifiedAndLoginReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): CheckQrCodeIsVerifiedAndLoginReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CheckQrCodeIsVerifiedAndLoginReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: CheckQrCodeIsVerifiedAndLoginReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: CheckQrCodeIsVerifiedAndLoginReq, _writer: BinaryWriter): void;
    private _token?;
    private _device?;
    private _password?;
    private _platform?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CheckQrCodeIsVerifiedAndLoginReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<CheckQrCodeIsVerifiedAndLoginReq.AsObject>);
    get token(): string | undefined;
    set token(value: string | undefined);
    get device(): string | undefined;
    set device(value: string | undefined);
    get password(): string | undefined;
    set password(value: string | undefined);
    get platform(): protoPubV1Models003.Platform | undefined;
    set platform(value: protoPubV1Models003.Platform | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): CheckQrCodeIsVerifiedAndLoginReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): CheckQrCodeIsVerifiedAndLoginReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): CheckQrCodeIsVerifiedAndLoginReq.AsProtobufJSON;
}
export declare module CheckQrCodeIsVerifiedAndLoginReq {
    /**
     * Standard JavaScript object representation for CheckQrCodeIsVerifiedAndLoginReq
     */
    interface AsObject {
        token?: string;
        device?: string;
        password?: string;
        platform?: protoPubV1Models003.Platform.AsObject;
    }
    /**
     * Protobuf JSON representation for CheckQrCodeIsVerifiedAndLoginReq
     */
    interface AsProtobufJSON {
        token?: string;
        device?: string;
        password?: string;
        platform?: protoPubV1Models003.Platform.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.profile.GetWebViewIdentifyTokenReq
 */
export declare class GetWebViewIdentifyTokenReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetWebViewIdentifyTokenReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetWebViewIdentifyTokenReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetWebViewIdentifyTokenReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetWebViewIdentifyTokenReq, _writer: BinaryWriter): void;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetWebViewIdentifyTokenReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetWebViewIdentifyTokenReq.AsObject>);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetWebViewIdentifyTokenReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetWebViewIdentifyTokenReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetWebViewIdentifyTokenReq.AsProtobufJSON;
}
export declare module GetWebViewIdentifyTokenReq {
    /**
     * Standard JavaScript object representation for GetWebViewIdentifyTokenReq
     */
    interface AsObject {
    }
    /**
     * Protobuf JSON representation for GetWebViewIdentifyTokenReq
     */
    interface AsProtobufJSON {
    }
}
/**
 * Message implementation for proto.pub.v1.profile.GetWebViewIdentifyTokenRes
 */
export declare class GetWebViewIdentifyTokenRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetWebViewIdentifyTokenRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetWebViewIdentifyTokenRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetWebViewIdentifyTokenRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetWebViewIdentifyTokenRes, _writer: BinaryWriter): void;
    private _identifyToken?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetWebViewIdentifyTokenRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetWebViewIdentifyTokenRes.AsObject>);
    get identifyToken(): string | undefined;
    set identifyToken(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetWebViewIdentifyTokenRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetWebViewIdentifyTokenRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetWebViewIdentifyTokenRes.AsProtobufJSON;
}
export declare module GetWebViewIdentifyTokenRes {
    /**
     * Standard JavaScript object representation for GetWebViewIdentifyTokenRes
     */
    interface AsObject {
        identifyToken?: string;
    }
    /**
     * Protobuf JSON representation for GetWebViewIdentifyTokenRes
     */
    interface AsProtobufJSON {
        identifyToken?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.profile.AccessTokenRes
 */
export declare class AccessTokenRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): AccessTokenRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: AccessTokenRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: AccessTokenRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: AccessTokenRes, _writer: BinaryWriter): void;
    private _status?;
    private _accessToken?;
    private _refreshToken?;
    private _passwordHint?;
    private _forgotEmailHint?;
    private _newerVersionInformation?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of AccessTokenRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<AccessTokenRes.AsObject>);
    get status(): AccessTokenRes.Status | undefined;
    set status(value: AccessTokenRes.Status | undefined);
    get accessToken(): string | undefined;
    set accessToken(value: string | undefined);
    get refreshToken(): string | undefined;
    set refreshToken(value: string | undefined);
    get passwordHint(): string | undefined;
    set passwordHint(value: string | undefined);
    get forgotEmailHint(): string | undefined;
    set forgotEmailHint(value: string | undefined);
    get newerVersionInformation(): NewerVersionInformation | undefined;
    set newerVersionInformation(value: NewerVersionInformation | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): AccessTokenRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): AccessTokenRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): AccessTokenRes.AsProtobufJSON;
}
export declare module AccessTokenRes {
    /**
     * Standard JavaScript object representation for AccessTokenRes
     */
    interface AsObject {
        status?: AccessTokenRes.Status;
        accessToken?: string;
        refreshToken?: string;
        passwordHint?: string;
        forgotEmailHint?: string;
        newerVersionInformation?: NewerVersionInformation.AsObject;
    }
    /**
     * Protobuf JSON representation for AccessTokenRes
     */
    interface AsProtobufJSON {
        status?: string;
        accessToken?: string;
        refreshToken?: string;
        passwordHint?: string;
        forgotEmailHint?: string;
        newerVersionInformation?: NewerVersionInformation.AsProtobufJSON | null;
    }
    enum Status {
        OK = 0,
        PASSWORD_PROTECTED = 1
    }
}
/**
 * Message implementation for proto.pub.v1.profile.RenewAccessTokenReq
 */
export declare class RenewAccessTokenReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): RenewAccessTokenReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: RenewAccessTokenReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: RenewAccessTokenReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: RenewAccessTokenReq, _writer: BinaryWriter): void;
    private _refreshToken?;
    private _platform?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of RenewAccessTokenReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<RenewAccessTokenReq.AsObject>);
    get refreshToken(): string | undefined;
    set refreshToken(value: string | undefined);
    get platform(): protoPubV1Models003.Platform | undefined;
    set platform(value: protoPubV1Models003.Platform | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): RenewAccessTokenReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): RenewAccessTokenReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): RenewAccessTokenReq.AsProtobufJSON;
}
export declare module RenewAccessTokenReq {
    /**
     * Standard JavaScript object representation for RenewAccessTokenReq
     */
    interface AsObject {
        refreshToken?: string;
        platform?: protoPubV1Models003.Platform.AsObject;
    }
    /**
     * Protobuf JSON representation for RenewAccessTokenReq
     */
    interface AsProtobufJSON {
        refreshToken?: string;
        platform?: protoPubV1Models003.Platform.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.profile.RenewAccessTokenRes
 */
export declare class RenewAccessTokenRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): RenewAccessTokenRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: RenewAccessTokenRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: RenewAccessTokenRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: RenewAccessTokenRes, _writer: BinaryWriter): void;
    private _accessToken?;
    private _refreshToken?;
    private _newerVersionInformation?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of RenewAccessTokenRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<RenewAccessTokenRes.AsObject>);
    get accessToken(): string | undefined;
    set accessToken(value: string | undefined);
    get refreshToken(): string | undefined;
    set refreshToken(value: string | undefined);
    get newerVersionInformation(): NewerVersionInformation | undefined;
    set newerVersionInformation(value: NewerVersionInformation | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): RenewAccessTokenRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): RenewAccessTokenRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): RenewAccessTokenRes.AsProtobufJSON;
}
export declare module RenewAccessTokenRes {
    /**
     * Standard JavaScript object representation for RenewAccessTokenRes
     */
    interface AsObject {
        accessToken?: string;
        refreshToken?: string;
        newerVersionInformation?: NewerVersionInformation.AsObject;
    }
    /**
     * Protobuf JSON representation for RenewAccessTokenRes
     */
    interface AsProtobufJSON {
        accessToken?: string;
        refreshToken?: string;
        newerVersionInformation?: NewerVersionInformation.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.profile.VerifyEmailAddressReq
 */
export declare class VerifyEmailAddressReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): VerifyEmailAddressReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: VerifyEmailAddressReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: VerifyEmailAddressReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: VerifyEmailAddressReq, _writer: BinaryWriter): void;
    private _hash?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of VerifyEmailAddressReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<VerifyEmailAddressReq.AsObject>);
    get hash(): string | undefined;
    set hash(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): VerifyEmailAddressReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): VerifyEmailAddressReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): VerifyEmailAddressReq.AsProtobufJSON;
}
export declare module VerifyEmailAddressReq {
    /**
     * Standard JavaScript object representation for VerifyEmailAddressReq
     */
    interface AsObject {
        hash?: string;
    }
    /**
     * Protobuf JSON representation for VerifyEmailAddressReq
     */
    interface AsProtobufJSON {
        hash?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.profile.VerifyEmailAddressRes
 */
export declare class VerifyEmailAddressRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): VerifyEmailAddressRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: VerifyEmailAddressRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: VerifyEmailAddressRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: VerifyEmailAddressRes, _writer: BinaryWriter): void;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of VerifyEmailAddressRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<VerifyEmailAddressRes.AsObject>);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): VerifyEmailAddressRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): VerifyEmailAddressRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): VerifyEmailAddressRes.AsProtobufJSON;
}
export declare module VerifyEmailAddressRes {
    /**
     * Standard JavaScript object representation for VerifyEmailAddressRes
     */
    interface AsObject {
    }
    /**
     * Protobuf JSON representation for VerifyEmailAddressRes
     */
    interface AsProtobufJSON {
    }
}
/**
 * Message implementation for proto.pub.v1.profile.SendErasePasswordEmailReq
 */
export declare class SendErasePasswordEmailReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): SendErasePasswordEmailReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: SendErasePasswordEmailReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: SendErasePasswordEmailReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: SendErasePasswordEmailReq, _writer: BinaryWriter): void;
    private _phoneNumber?;
    private _platform?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of SendErasePasswordEmailReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<SendErasePasswordEmailReq.AsObject>);
    get phoneNumber(): protoPubV1Models001.PhoneNumber | undefined;
    set phoneNumber(value: protoPubV1Models001.PhoneNumber | undefined);
    get platform(): protoPubV1Models003.Platform | undefined;
    set platform(value: protoPubV1Models003.Platform | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): SendErasePasswordEmailReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): SendErasePasswordEmailReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): SendErasePasswordEmailReq.AsProtobufJSON;
}
export declare module SendErasePasswordEmailReq {
    /**
     * Standard JavaScript object representation for SendErasePasswordEmailReq
     */
    interface AsObject {
        phoneNumber?: protoPubV1Models001.PhoneNumber.AsObject;
        platform?: protoPubV1Models003.Platform.AsObject;
    }
    /**
     * Protobuf JSON representation for SendErasePasswordEmailReq
     */
    interface AsProtobufJSON {
        phoneNumber?: protoPubV1Models001.PhoneNumber.AsProtobufJSON | null;
        platform?: protoPubV1Models003.Platform.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.profile.SendErasePasswordEmailRes
 */
export declare class SendErasePasswordEmailRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): SendErasePasswordEmailRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: SendErasePasswordEmailRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: SendErasePasswordEmailRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: SendErasePasswordEmailRes, _writer: BinaryWriter): void;
    private _newerVersionInformation?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of SendErasePasswordEmailRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<SendErasePasswordEmailRes.AsObject>);
    get newerVersionInformation(): NewerVersionInformation | undefined;
    set newerVersionInformation(value: NewerVersionInformation | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): SendErasePasswordEmailRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): SendErasePasswordEmailRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): SendErasePasswordEmailRes.AsProtobufJSON;
}
export declare module SendErasePasswordEmailRes {
    /**
     * Standard JavaScript object representation for SendErasePasswordEmailRes
     */
    interface AsObject {
        newerVersionInformation?: NewerVersionInformation.AsObject;
    }
    /**
     * Protobuf JSON representation for SendErasePasswordEmailRes
     */
    interface AsProtobufJSON {
        newerVersionInformation?: NewerVersionInformation.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.profile.ErasePasswordReq
 */
export declare class ErasePasswordReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ErasePasswordReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ErasePasswordReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ErasePasswordReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ErasePasswordReq, _writer: BinaryWriter): void;
    private _hash?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ErasePasswordReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<ErasePasswordReq.AsObject>);
    get hash(): string | undefined;
    set hash(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ErasePasswordReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ErasePasswordReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ErasePasswordReq.AsProtobufJSON;
}
export declare module ErasePasswordReq {
    /**
     * Standard JavaScript object representation for ErasePasswordReq
     */
    interface AsObject {
        hash?: string;
    }
    /**
     * Protobuf JSON representation for ErasePasswordReq
     */
    interface AsProtobufJSON {
        hash?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.profile.ErasePasswordRes
 */
export declare class ErasePasswordRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ErasePasswordRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ErasePasswordRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ErasePasswordRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ErasePasswordRes, _writer: BinaryWriter): void;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ErasePasswordRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<ErasePasswordRes.AsObject>);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ErasePasswordRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ErasePasswordRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ErasePasswordRes.AsProtobufJSON;
}
export declare module ErasePasswordRes {
    /**
     * Standard JavaScript object representation for ErasePasswordRes
     */
    interface AsObject {
    }
    /**
     * Protobuf JSON representation for ErasePasswordRes
     */
    interface AsProtobufJSON {
    }
}
/**
 * Message implementation for proto.pub.v1.profile.SaveContactsReq
 */
export declare class SaveContactsReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): SaveContactsReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: SaveContactsReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: SaveContactsReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: SaveContactsReq, _writer: BinaryWriter): void;
    private _contactList?;
    private _returnUserContactByPhoneNumberList?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of SaveContactsReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<SaveContactsReq.AsObject>);
    get contactList(): protoPubV1Models004.Contact[] | undefined;
    set contactList(value: protoPubV1Models004.Contact[] | undefined);
    get returnUserContactByPhoneNumberList(): protoPubV1Models001.PhoneNumber[] | undefined;
    set returnUserContactByPhoneNumberList(value: protoPubV1Models001.PhoneNumber[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): SaveContactsReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): SaveContactsReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): SaveContactsReq.AsProtobufJSON;
}
export declare module SaveContactsReq {
    /**
     * Standard JavaScript object representation for SaveContactsReq
     */
    interface AsObject {
        contactList?: protoPubV1Models004.Contact.AsObject[];
        returnUserContactByPhoneNumberList?: protoPubV1Models001.PhoneNumber.AsObject[];
    }
    /**
     * Protobuf JSON representation for SaveContactsReq
     */
    interface AsProtobufJSON {
        contactList?: protoPubV1Models004.Contact.AsProtobufJSON[] | null;
        returnUserContactByPhoneNumberList?: protoPubV1Models001.PhoneNumber.AsProtobufJSON[] | null;
    }
}
/**
 * Message implementation for proto.pub.v1.profile.SaveContactsRes
 */
export declare class SaveContactsRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): SaveContactsRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: SaveContactsRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: SaveContactsRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: SaveContactsRes, _writer: BinaryWriter): void;
    private _userList?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of SaveContactsRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<SaveContactsRes.AsObject>);
    get userList(): protoPubV1Models005.UserAsContact[] | undefined;
    set userList(value: protoPubV1Models005.UserAsContact[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): SaveContactsRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): SaveContactsRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): SaveContactsRes.AsProtobufJSON;
}
export declare module SaveContactsRes {
    /**
     * Standard JavaScript object representation for SaveContactsRes
     */
    interface AsObject {
        userList?: protoPubV1Models005.UserAsContact.AsObject[];
    }
    /**
     * Protobuf JSON representation for SaveContactsRes
     */
    interface AsProtobufJSON {
        userList?: protoPubV1Models005.UserAsContact.AsProtobufJSON[] | null;
    }
}
/**
 * Message implementation for proto.pub.v1.profile.GetContactListUsersReq
 */
export declare class GetContactListUsersReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetContactListUsersReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetContactListUsersReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetContactListUsersReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetContactListUsersReq, _writer: BinaryWriter): void;
    private _pageSize?;
    private _pageNumber?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetContactListUsersReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetContactListUsersReq.AsObject>);
    get pageSize(): number | undefined;
    set pageSize(value: number | undefined);
    get pageNumber(): number | undefined;
    set pageNumber(value: number | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetContactListUsersReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetContactListUsersReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetContactListUsersReq.AsProtobufJSON;
}
export declare module GetContactListUsersReq {
    /**
     * Standard JavaScript object representation for GetContactListUsersReq
     */
    interface AsObject {
        pageSize?: number;
        pageNumber?: number;
    }
    /**
     * Protobuf JSON representation for GetContactListUsersReq
     */
    interface AsProtobufJSON {
        pageSize?: number;
        pageNumber?: number;
    }
}
/**
 * Message implementation for proto.pub.v1.profile.GetContactListUsersRes
 */
export declare class GetContactListUsersRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetContactListUsersRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetContactListUsersRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetContactListUsersRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetContactListUsersRes, _writer: BinaryWriter): void;
    private _userList?;
    private _nextPageNumber?;
    private _totalSize?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetContactListUsersRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetContactListUsersRes.AsObject>);
    get userList(): protoPubV1Models005.UserAsContact[] | undefined;
    set userList(value: protoPubV1Models005.UserAsContact[] | undefined);
    get nextPageNumber(): number | undefined;
    set nextPageNumber(value: number | undefined);
    get totalSize(): number | undefined;
    set totalSize(value: number | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetContactListUsersRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetContactListUsersRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetContactListUsersRes.AsProtobufJSON;
}
export declare module GetContactListUsersRes {
    /**
     * Standard JavaScript object representation for GetContactListUsersRes
     */
    interface AsObject {
        userList?: protoPubV1Models005.UserAsContact.AsObject[];
        nextPageNumber?: number;
        totalSize?: number;
    }
    /**
     * Protobuf JSON representation for GetContactListUsersRes
     */
    interface AsProtobufJSON {
        userList?: protoPubV1Models005.UserAsContact.AsProtobufJSON[] | null;
        nextPageNumber?: number;
        totalSize?: number;
    }
}
/**
 * Message implementation for proto.pub.v1.profile.GetContactListReq
 */
export declare class GetContactListReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetContactListReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetContactListReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetContactListReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetContactListReq, _writer: BinaryWriter): void;
    private _pageSize?;
    private _pageNumber?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetContactListReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetContactListReq.AsObject>);
    get pageSize(): number | undefined;
    set pageSize(value: number | undefined);
    get pageNumber(): number | undefined;
    set pageNumber(value: number | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetContactListReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetContactListReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetContactListReq.AsProtobufJSON;
}
export declare module GetContactListReq {
    /**
     * Standard JavaScript object representation for GetContactListReq
     */
    interface AsObject {
        pageSize?: number;
        pageNumber?: number;
    }
    /**
     * Protobuf JSON representation for GetContactListReq
     */
    interface AsProtobufJSON {
        pageSize?: number;
        pageNumber?: number;
    }
}
/**
 * Message implementation for proto.pub.v1.profile.GetContactListRes
 */
export declare class GetContactListRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetContactListRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetContactListRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetContactListRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetContactListRes, _writer: BinaryWriter): void;
    private _contactList?;
    private _nextPageNumber?;
    private _totalSize?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetContactListRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetContactListRes.AsObject>);
    get contactList(): protoPubV1Models004.Contact[] | undefined;
    set contactList(value: protoPubV1Models004.Contact[] | undefined);
    get nextPageNumber(): number | undefined;
    set nextPageNumber(value: number | undefined);
    get totalSize(): number | undefined;
    set totalSize(value: number | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetContactListRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetContactListRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetContactListRes.AsProtobufJSON;
}
export declare module GetContactListRes {
    /**
     * Standard JavaScript object representation for GetContactListRes
     */
    interface AsObject {
        contactList?: protoPubV1Models004.Contact.AsObject[];
        nextPageNumber?: number;
        totalSize?: number;
    }
    /**
     * Protobuf JSON representation for GetContactListRes
     */
    interface AsProtobufJSON {
        contactList?: protoPubV1Models004.Contact.AsProtobufJSON[] | null;
        nextPageNumber?: number;
        totalSize?: number;
    }
}
/**
 * Message implementation for proto.pub.v1.profile.GetUserByUidReq
 */
export declare class GetUserByUidReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetUserByUidReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetUserByUidReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetUserByUidReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetUserByUidReq, _writer: BinaryWriter): void;
    private _uid?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetUserByUidReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetUserByUidReq.AsObject>);
    get uid(): protoPubV1Models000.Uid | undefined;
    set uid(value: protoPubV1Models000.Uid | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetUserByUidReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetUserByUidReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetUserByUidReq.AsProtobufJSON;
}
export declare module GetUserByUidReq {
    /**
     * Standard JavaScript object representation for GetUserByUidReq
     */
    interface AsObject {
        uid?: protoPubV1Models000.Uid.AsObject;
    }
    /**
     * Protobuf JSON representation for GetUserByUidReq
     */
    interface AsProtobufJSON {
        uid?: protoPubV1Models000.Uid.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.profile.GetUserByUidRes
 */
export declare class GetUserByUidRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetUserByUidRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetUserByUidRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetUserByUidRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetUserByUidRes, _writer: BinaryWriter): void;
    private _user?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetUserByUidRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetUserByUidRes.AsObject>);
    get user(): protoPubV1Models005.UserAsContact | undefined;
    set user(value: protoPubV1Models005.UserAsContact | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetUserByUidRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetUserByUidRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetUserByUidRes.AsProtobufJSON;
}
export declare module GetUserByUidRes {
    /**
     * Standard JavaScript object representation for GetUserByUidRes
     */
    interface AsObject {
        user?: protoPubV1Models005.UserAsContact.AsObject;
    }
    /**
     * Protobuf JSON representation for GetUserByUidRes
     */
    interface AsProtobufJSON {
        user?: protoPubV1Models005.UserAsContact.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.profile.UserSearchReq
 */
export declare class UserSearchReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): UserSearchReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: UserSearchReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: UserSearchReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: UserSearchReq, _writer: BinaryWriter): void;
    private _name?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of UserSearchReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<UserSearchReq.AsObject>);
    get name(): string | undefined;
    set name(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): UserSearchReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): UserSearchReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): UserSearchReq.AsProtobufJSON;
}
export declare module UserSearchReq {
    /**
     * Standard JavaScript object representation for UserSearchReq
     */
    interface AsObject {
        name?: string;
    }
    /**
     * Protobuf JSON representation for UserSearchReq
     */
    interface AsProtobufJSON {
        name?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.profile.UserSearchRes
 */
export declare class UserSearchRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): UserSearchRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: UserSearchRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: UserSearchRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: UserSearchRes, _writer: BinaryWriter): void;
    private _userList?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of UserSearchRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<UserSearchRes.AsObject>);
    get userList(): protoPubV1Models005.UserAsContact[] | undefined;
    set userList(value: protoPubV1Models005.UserAsContact[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): UserSearchRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): UserSearchRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): UserSearchRes.AsProtobufJSON;
}
export declare module UserSearchRes {
    /**
     * Standard JavaScript object representation for UserSearchRes
     */
    interface AsObject {
        userList?: protoPubV1Models005.UserAsContact.AsObject[];
    }
    /**
     * Protobuf JSON representation for UserSearchRes
     */
    interface AsProtobufJSON {
        userList?: protoPubV1Models005.UserAsContact.AsProtobufJSON[] | null;
    }
}
/**
 * Message implementation for proto.pub.v1.profile.GetUserProfileReq
 */
export declare class GetUserProfileReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetUserProfileReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetUserProfileReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetUserProfileReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetUserProfileReq, _writer: BinaryWriter): void;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetUserProfileReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetUserProfileReq.AsObject>);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetUserProfileReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetUserProfileReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetUserProfileReq.AsProtobufJSON;
}
export declare module GetUserProfileReq {
    /**
     * Standard JavaScript object representation for GetUserProfileReq
     */
    interface AsObject {
    }
    /**
     * Protobuf JSON representation for GetUserProfileReq
     */
    interface AsProtobufJSON {
    }
}
/**
 * Message implementation for proto.pub.v1.profile.GetUserProfileRes
 */
export declare class GetUserProfileRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetUserProfileRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetUserProfileRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetUserProfileRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetUserProfileRes, _writer: BinaryWriter): void;
    private _profile?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetUserProfileRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetUserProfileRes.AsObject>);
    get profile(): protoPubV1Models005.UserPrivateData | undefined;
    set profile(value: protoPubV1Models005.UserPrivateData | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetUserProfileRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetUserProfileRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetUserProfileRes.AsProtobufJSON;
}
export declare module GetUserProfileRes {
    /**
     * Standard JavaScript object representation for GetUserProfileRes
     */
    interface AsObject {
        profile?: protoPubV1Models005.UserPrivateData.AsObject;
    }
    /**
     * Protobuf JSON representation for GetUserProfileRes
     */
    interface AsProtobufJSON {
        profile?: protoPubV1Models005.UserPrivateData.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.profile.SaveUserProfileReq
 */
export declare class SaveUserProfileReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): SaveUserProfileReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: SaveUserProfileReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: SaveUserProfileReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: SaveUserProfileReq, _writer: BinaryWriter): void;
    private _firstName?;
    private _lastName?;
    private _description?;
    private _deprecatedPasswordHash?;
    private _deprecatedEmail?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of SaveUserProfileReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<SaveUserProfileReq.AsObject>);
    get firstName(): string | undefined;
    set firstName(value: string | undefined);
    get lastName(): string | undefined;
    set lastName(value: string | undefined);
    get description(): string | undefined;
    set description(value: string | undefined);
    get deprecatedPasswordHash(): string | undefined;
    set deprecatedPasswordHash(value: string | undefined);
    get deprecatedEmail(): string | undefined;
    set deprecatedEmail(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): SaveUserProfileReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): SaveUserProfileReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): SaveUserProfileReq.AsProtobufJSON;
}
export declare module SaveUserProfileReq {
    /**
     * Standard JavaScript object representation for SaveUserProfileReq
     */
    interface AsObject {
        firstName?: string;
        lastName?: string;
        description?: string;
        deprecatedPasswordHash?: string;
        deprecatedEmail?: string;
    }
    /**
     * Protobuf JSON representation for SaveUserProfileReq
     */
    interface AsProtobufJSON {
        firstName?: string;
        lastName?: string;
        description?: string;
        deprecatedPasswordHash?: string;
        deprecatedEmail?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.profile.SaveUserProfileRes
 */
export declare class SaveUserProfileRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): SaveUserProfileRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: SaveUserProfileRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: SaveUserProfileRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: SaveUserProfileRes, _writer: BinaryWriter): void;
    private _profile?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of SaveUserProfileRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<SaveUserProfileRes.AsObject>);
    get profile(): protoPubV1Models005.UserPrivateData | undefined;
    set profile(value: protoPubV1Models005.UserPrivateData | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): SaveUserProfileRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): SaveUserProfileRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): SaveUserProfileRes.AsProtobufJSON;
}
export declare module SaveUserProfileRes {
    /**
     * Standard JavaScript object representation for SaveUserProfileRes
     */
    interface AsObject {
        profile?: protoPubV1Models005.UserPrivateData.AsObject;
    }
    /**
     * Protobuf JSON representation for SaveUserProfileRes
     */
    interface AsProtobufJSON {
        profile?: protoPubV1Models005.UserPrivateData.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.profile.UpdateEmailReq
 */
export declare class UpdateEmailReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): UpdateEmailReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: UpdateEmailReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: UpdateEmailReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: UpdateEmailReq, _writer: BinaryWriter): void;
    private _email?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of UpdateEmailReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<UpdateEmailReq.AsObject>);
    get email(): string | undefined;
    set email(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): UpdateEmailReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): UpdateEmailReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): UpdateEmailReq.AsProtobufJSON;
}
export declare module UpdateEmailReq {
    /**
     * Standard JavaScript object representation for UpdateEmailReq
     */
    interface AsObject {
        email?: string;
    }
    /**
     * Protobuf JSON representation for UpdateEmailReq
     */
    interface AsProtobufJSON {
        email?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.profile.UpdateEmailRes
 */
export declare class UpdateEmailRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): UpdateEmailRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: UpdateEmailRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: UpdateEmailRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: UpdateEmailRes, _writer: BinaryWriter): void;
    private _profile?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of UpdateEmailRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<UpdateEmailRes.AsObject>);
    get profile(): protoPubV1Models005.UserPrivateData | undefined;
    set profile(value: protoPubV1Models005.UserPrivateData | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): UpdateEmailRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): UpdateEmailRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): UpdateEmailRes.AsProtobufJSON;
}
export declare module UpdateEmailRes {
    /**
     * Standard JavaScript object representation for UpdateEmailRes
     */
    interface AsObject {
        profile?: protoPubV1Models005.UserPrivateData.AsObject;
    }
    /**
     * Protobuf JSON representation for UpdateEmailRes
     */
    interface AsProtobufJSON {
        profile?: protoPubV1Models005.UserPrivateData.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.profile.ResendEmailVerificationReq
 */
export declare class ResendEmailVerificationReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ResendEmailVerificationReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ResendEmailVerificationReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ResendEmailVerificationReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ResendEmailVerificationReq, _writer: BinaryWriter): void;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ResendEmailVerificationReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<ResendEmailVerificationReq.AsObject>);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ResendEmailVerificationReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ResendEmailVerificationReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ResendEmailVerificationReq.AsProtobufJSON;
}
export declare module ResendEmailVerificationReq {
    /**
     * Standard JavaScript object representation for ResendEmailVerificationReq
     */
    interface AsObject {
    }
    /**
     * Protobuf JSON representation for ResendEmailVerificationReq
     */
    interface AsProtobufJSON {
    }
}
/**
 * Message implementation for proto.pub.v1.profile.ResendEmailVerificationRes
 */
export declare class ResendEmailVerificationRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ResendEmailVerificationRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ResendEmailVerificationRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ResendEmailVerificationRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ResendEmailVerificationRes, _writer: BinaryWriter): void;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ResendEmailVerificationRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<ResendEmailVerificationRes.AsObject>);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ResendEmailVerificationRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ResendEmailVerificationRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ResendEmailVerificationRes.AsProtobufJSON;
}
export declare module ResendEmailVerificationRes {
    /**
     * Standard JavaScript object representation for ResendEmailVerificationRes
     */
    interface AsObject {
    }
    /**
     * Protobuf JSON representation for ResendEmailVerificationRes
     */
    interface AsProtobufJSON {
    }
}
/**
 * Message implementation for proto.pub.v1.profile.UpdatePasswordReq
 */
export declare class UpdatePasswordReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): UpdatePasswordReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: UpdatePasswordReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: UpdatePasswordReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: UpdatePasswordReq, _writer: BinaryWriter): void;
    private _newPassword?;
    private _currentPassword?;
    private _passwordHint?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of UpdatePasswordReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<UpdatePasswordReq.AsObject>);
    get newPassword(): string | undefined;
    set newPassword(value: string | undefined);
    get currentPassword(): string | undefined;
    set currentPassword(value: string | undefined);
    get passwordHint(): string | undefined;
    set passwordHint(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): UpdatePasswordReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): UpdatePasswordReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): UpdatePasswordReq.AsProtobufJSON;
}
export declare module UpdatePasswordReq {
    /**
     * Standard JavaScript object representation for UpdatePasswordReq
     */
    interface AsObject {
        newPassword?: string;
        currentPassword?: string;
        passwordHint?: string;
    }
    /**
     * Protobuf JSON representation for UpdatePasswordReq
     */
    interface AsProtobufJSON {
        newPassword?: string;
        currentPassword?: string;
        passwordHint?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.profile.UpdatePasswordRes
 */
export declare class UpdatePasswordRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): UpdatePasswordRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: UpdatePasswordRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: UpdatePasswordRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: UpdatePasswordRes, _writer: BinaryWriter): void;
    private _profile?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of UpdatePasswordRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<UpdatePasswordRes.AsObject>);
    get profile(): protoPubV1Models005.UserPrivateData | undefined;
    set profile(value: protoPubV1Models005.UserPrivateData | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): UpdatePasswordRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): UpdatePasswordRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): UpdatePasswordRes.AsProtobufJSON;
}
export declare module UpdatePasswordRes {
    /**
     * Standard JavaScript object representation for UpdatePasswordRes
     */
    interface AsObject {
        profile?: protoPubV1Models005.UserPrivateData.AsObject;
    }
    /**
     * Protobuf JSON representation for UpdatePasswordRes
     */
    interface AsProtobufJSON {
        profile?: protoPubV1Models005.UserPrivateData.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.profile.VerifyQrCodeTokenReq
 */
export declare class VerifyQrCodeTokenReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): VerifyQrCodeTokenReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: VerifyQrCodeTokenReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: VerifyQrCodeTokenReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: VerifyQrCodeTokenReq, _writer: BinaryWriter): void;
    private _token?;
    private _platform?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of VerifyQrCodeTokenReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<VerifyQrCodeTokenReq.AsObject>);
    get token(): string | undefined;
    set token(value: string | undefined);
    get platform(): protoPubV1Models003.Platform | undefined;
    set platform(value: protoPubV1Models003.Platform | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): VerifyQrCodeTokenReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): VerifyQrCodeTokenReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): VerifyQrCodeTokenReq.AsProtobufJSON;
}
export declare module VerifyQrCodeTokenReq {
    /**
     * Standard JavaScript object representation for VerifyQrCodeTokenReq
     */
    interface AsObject {
        token?: string;
        platform?: protoPubV1Models003.Platform.AsObject;
    }
    /**
     * Protobuf JSON representation for VerifyQrCodeTokenReq
     */
    interface AsProtobufJSON {
        token?: string;
        platform?: protoPubV1Models003.Platform.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.profile.VerifyQrCodeTokenRes
 */
export declare class VerifyQrCodeTokenRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): VerifyQrCodeTokenRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: VerifyQrCodeTokenRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: VerifyQrCodeTokenRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: VerifyQrCodeTokenRes, _writer: BinaryWriter): void;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of VerifyQrCodeTokenRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<VerifyQrCodeTokenRes.AsObject>);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): VerifyQrCodeTokenRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): VerifyQrCodeTokenRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): VerifyQrCodeTokenRes.AsProtobufJSON;
}
export declare module VerifyQrCodeTokenRes {
    /**
     * Standard JavaScript object representation for VerifyQrCodeTokenRes
     */
    interface AsObject {
    }
    /**
     * Protobuf JSON representation for VerifyQrCodeTokenRes
     */
    interface AsProtobufJSON {
    }
}
/**
 * Message implementation for proto.pub.v1.profile.UpdateSessionPlatformInformationReq
 */
export declare class UpdateSessionPlatformInformationReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): UpdateSessionPlatformInformationReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: UpdateSessionPlatformInformationReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: UpdateSessionPlatformInformationReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: UpdateSessionPlatformInformationReq, _writer: BinaryWriter): void;
    private _platform?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of UpdateSessionPlatformInformationReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<UpdateSessionPlatformInformationReq.AsObject>);
    get platform(): protoPubV1Models003.Platform | undefined;
    set platform(value: protoPubV1Models003.Platform | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): UpdateSessionPlatformInformationReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): UpdateSessionPlatformInformationReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): UpdateSessionPlatformInformationReq.AsProtobufJSON;
}
export declare module UpdateSessionPlatformInformationReq {
    /**
     * Standard JavaScript object representation for UpdateSessionPlatformInformationReq
     */
    interface AsObject {
        platform?: protoPubV1Models003.Platform.AsObject;
    }
    /**
     * Protobuf JSON representation for UpdateSessionPlatformInformationReq
     */
    interface AsProtobufJSON {
        platform?: protoPubV1Models003.Platform.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.profile.UpdateSessionPlatformInformationRes
 */
export declare class UpdateSessionPlatformInformationRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): UpdateSessionPlatformInformationRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: UpdateSessionPlatformInformationRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: UpdateSessionPlatformInformationRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: UpdateSessionPlatformInformationRes, _writer: BinaryWriter): void;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of UpdateSessionPlatformInformationRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<UpdateSessionPlatformInformationRes.AsObject>);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): UpdateSessionPlatformInformationRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): UpdateSessionPlatformInformationRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): UpdateSessionPlatformInformationRes.AsProtobufJSON;
}
export declare module UpdateSessionPlatformInformationRes {
    /**
     * Standard JavaScript object representation for UpdateSessionPlatformInformationRes
     */
    interface AsObject {
    }
    /**
     * Protobuf JSON representation for UpdateSessionPlatformInformationRes
     */
    interface AsProtobufJSON {
    }
}
/**
 * Message implementation for proto.pub.v1.profile.GetMySessionsReq
 */
export declare class GetMySessionsReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetMySessionsReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetMySessionsReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetMySessionsReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetMySessionsReq, _writer: BinaryWriter): void;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetMySessionsReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetMySessionsReq.AsObject>);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetMySessionsReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetMySessionsReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetMySessionsReq.AsProtobufJSON;
}
export declare module GetMySessionsReq {
    /**
     * Standard JavaScript object representation for GetMySessionsReq
     */
    interface AsObject {
    }
    /**
     * Protobuf JSON representation for GetMySessionsReq
     */
    interface AsProtobufJSON {
    }
}
/**
 * Message implementation for proto.pub.v1.profile.GetMySessionsRes
 */
export declare class GetMySessionsRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetMySessionsRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetMySessionsRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetMySessionsRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetMySessionsRes, _writer: BinaryWriter): void;
    private _sessions?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetMySessionsRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetMySessionsRes.AsObject>);
    get sessions(): protoPubV1Models006.Session[] | undefined;
    set sessions(value: protoPubV1Models006.Session[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetMySessionsRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetMySessionsRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetMySessionsRes.AsProtobufJSON;
}
export declare module GetMySessionsRes {
    /**
     * Standard JavaScript object representation for GetMySessionsRes
     */
    interface AsObject {
        sessions?: protoPubV1Models006.Session.AsObject[];
    }
    /**
     * Protobuf JSON representation for GetMySessionsRes
     */
    interface AsProtobufJSON {
        sessions?: protoPubV1Models006.Session.AsProtobufJSON[] | null;
    }
}
/**
 * Message implementation for proto.pub.v1.profile.RevokeSessionReq
 */
export declare class RevokeSessionReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): RevokeSessionReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: RevokeSessionReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: RevokeSessionReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: RevokeSessionReq, _writer: BinaryWriter): void;
    private _sessionIds?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of RevokeSessionReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<RevokeSessionReq.AsObject>);
    get sessionIds(): string[] | undefined;
    set sessionIds(value: string[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): RevokeSessionReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): RevokeSessionReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): RevokeSessionReq.AsProtobufJSON;
}
export declare module RevokeSessionReq {
    /**
     * Standard JavaScript object representation for RevokeSessionReq
     */
    interface AsObject {
        sessionIds?: string[];
    }
    /**
     * Protobuf JSON representation for RevokeSessionReq
     */
    interface AsProtobufJSON {
        sessionIds?: string[];
    }
}
/**
 * Message implementation for proto.pub.v1.profile.RevokeSessionRes
 */
export declare class RevokeSessionRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): RevokeSessionRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: RevokeSessionRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: RevokeSessionRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: RevokeSessionRes, _writer: BinaryWriter): void;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of RevokeSessionRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<RevokeSessionRes.AsObject>);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): RevokeSessionRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): RevokeSessionRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): RevokeSessionRes.AsProtobufJSON;
}
export declare module RevokeSessionRes {
    /**
     * Standard JavaScript object representation for RevokeSessionRes
     */
    interface AsObject {
    }
    /**
     * Protobuf JSON representation for RevokeSessionRes
     */
    interface AsProtobufJSON {
    }
}
/**
 * Message implementation for proto.pub.v1.profile.LogoutSessionReq
 */
export declare class LogoutSessionReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): LogoutSessionReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: LogoutSessionReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: LogoutSessionReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: LogoutSessionReq, _writer: BinaryWriter): void;
    private _sessionIds?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of LogoutSessionReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<LogoutSessionReq.AsObject>);
    get sessionIds(): string[] | undefined;
    set sessionIds(value: string[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): LogoutSessionReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): LogoutSessionReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): LogoutSessionReq.AsProtobufJSON;
}
export declare module LogoutSessionReq {
    /**
     * Standard JavaScript object representation for LogoutSessionReq
     */
    interface AsObject {
        sessionIds?: string[];
    }
    /**
     * Protobuf JSON representation for LogoutSessionReq
     */
    interface AsProtobufJSON {
        sessionIds?: string[];
    }
}
/**
 * Message implementation for proto.pub.v1.profile.LogoutSessionRes
 */
export declare class LogoutSessionRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): LogoutSessionRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: LogoutSessionRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: LogoutSessionRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: LogoutSessionRes, _writer: BinaryWriter): void;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of LogoutSessionRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<LogoutSessionRes.AsObject>);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): LogoutSessionRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): LogoutSessionRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): LogoutSessionRes.AsProtobufJSON;
}
export declare module LogoutSessionRes {
    /**
     * Standard JavaScript object representation for LogoutSessionRes
     */
    interface AsObject {
    }
    /**
     * Protobuf JSON representation for LogoutSessionRes
     */
    interface AsProtobufJSON {
    }
}
/**
 * Message implementation for proto.pub.v1.profile.RevokeAllOtherSessionsReq
 */
export declare class RevokeAllOtherSessionsReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): RevokeAllOtherSessionsReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: RevokeAllOtherSessionsReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: RevokeAllOtherSessionsReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: RevokeAllOtherSessionsReq, _writer: BinaryWriter): void;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of RevokeAllOtherSessionsReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<RevokeAllOtherSessionsReq.AsObject>);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): RevokeAllOtherSessionsReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): RevokeAllOtherSessionsReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): RevokeAllOtherSessionsReq.AsProtobufJSON;
}
export declare module RevokeAllOtherSessionsReq {
    /**
     * Standard JavaScript object representation for RevokeAllOtherSessionsReq
     */
    interface AsObject {
    }
    /**
     * Protobuf JSON representation for RevokeAllOtherSessionsReq
     */
    interface AsProtobufJSON {
    }
}
/**
 * Message implementation for proto.pub.v1.profile.RevokeAllOtherSessionsRes
 */
export declare class RevokeAllOtherSessionsRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): RevokeAllOtherSessionsRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: RevokeAllOtherSessionsRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: RevokeAllOtherSessionsRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: RevokeAllOtherSessionsRes, _writer: BinaryWriter): void;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of RevokeAllOtherSessionsRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<RevokeAllOtherSessionsRes.AsObject>);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): RevokeAllOtherSessionsRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): RevokeAllOtherSessionsRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): RevokeAllOtherSessionsRes.AsProtobufJSON;
}
export declare module RevokeAllOtherSessionsRes {
    /**
     * Standard JavaScript object representation for RevokeAllOtherSessionsRes
     */
    interface AsObject {
    }
    /**
     * Protobuf JSON representation for RevokeAllOtherSessionsRes
     */
    interface AsProtobufJSON {
    }
}
