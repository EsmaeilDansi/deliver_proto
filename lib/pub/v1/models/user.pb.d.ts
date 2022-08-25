import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as protoPubV1Models001 from '../../../pub/v1/models/uid.pb';
import * as protoPubV1Models002 from '../../../pub/v1/models/phone.pb';
/**
 * Message implementation for proto.pub.v1.models.UserAsContact
 */
export declare class UserAsContact implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): UserAsContact;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: UserAsContact): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: UserAsContact, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: UserAsContact, _writer: BinaryWriter): void;
    private _uid?;
    private _phoneNumber?;
    private _firstName?;
    private _lastName?;
    private _description?;
    private _email?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of UserAsContact to deeply clone from
     */
    constructor(_value?: RecursivePartial<UserAsContact.AsObject>);
    get uid(): protoPubV1Models001.Uid | undefined;
    set uid(value: protoPubV1Models001.Uid | undefined);
    get phoneNumber(): protoPubV1Models002.PhoneNumber | undefined;
    set phoneNumber(value: protoPubV1Models002.PhoneNumber | undefined);
    get firstName(): string | undefined;
    set firstName(value: string | undefined);
    get lastName(): string | undefined;
    set lastName(value: string | undefined);
    get description(): string | undefined;
    set description(value: string | undefined);
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
    toObject(): UserAsContact.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): UserAsContact.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): UserAsContact.AsProtobufJSON;
}
export declare module UserAsContact {
    /**
     * Standard JavaScript object representation for UserAsContact
     */
    interface AsObject {
        uid?: protoPubV1Models001.Uid.AsObject;
        phoneNumber?: protoPubV1Models002.PhoneNumber.AsObject;
        firstName?: string;
        lastName?: string;
        description?: string;
        email?: string;
    }
    /**
     * Protobuf JSON representation for UserAsContact
     */
    interface AsProtobufJSON {
        uid?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        phoneNumber?: protoPubV1Models002.PhoneNumber.AsProtobufJSON | null;
        firstName?: string;
        lastName?: string;
        description?: string;
        email?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.models.UserPrivateData
 */
export declare class UserPrivateData implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): UserPrivateData;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: UserPrivateData): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: UserPrivateData, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: UserPrivateData, _writer: BinaryWriter): void;
    private _uid?;
    private _phoneNumber?;
    private _firstName?;
    private _lastName?;
    private _description?;
    private _email?;
    private _isPasswordProtected?;
    private _isEmailVerified?;
    private _passwordHash?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of UserPrivateData to deeply clone from
     */
    constructor(_value?: RecursivePartial<UserPrivateData.AsObject>);
    get uid(): protoPubV1Models001.Uid | undefined;
    set uid(value: protoPubV1Models001.Uid | undefined);
    get phoneNumber(): protoPubV1Models002.PhoneNumber | undefined;
    set phoneNumber(value: protoPubV1Models002.PhoneNumber | undefined);
    get firstName(): string | undefined;
    set firstName(value: string | undefined);
    get lastName(): string | undefined;
    set lastName(value: string | undefined);
    get description(): string | undefined;
    set description(value: string | undefined);
    get email(): string | undefined;
    set email(value: string | undefined);
    get isPasswordProtected(): boolean | undefined;
    set isPasswordProtected(value: boolean | undefined);
    get isEmailVerified(): boolean | undefined;
    set isEmailVerified(value: boolean | undefined);
    get passwordHash(): string | undefined;
    set passwordHash(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): UserPrivateData.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): UserPrivateData.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): UserPrivateData.AsProtobufJSON;
}
export declare module UserPrivateData {
    /**
     * Standard JavaScript object representation for UserPrivateData
     */
    interface AsObject {
        uid?: protoPubV1Models001.Uid.AsObject;
        phoneNumber?: protoPubV1Models002.PhoneNumber.AsObject;
        firstName?: string;
        lastName?: string;
        description?: string;
        email?: string;
        isPasswordProtected?: boolean;
        isEmailVerified?: boolean;
        passwordHash?: string;
    }
    /**
     * Protobuf JSON representation for UserPrivateData
     */
    interface AsProtobufJSON {
        uid?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        phoneNumber?: protoPubV1Models002.PhoneNumber.AsProtobufJSON | null;
        firstName?: string;
        lastName?: string;
        description?: string;
        email?: string;
        isPasswordProtected?: boolean;
        isEmailVerified?: boolean;
        passwordHash?: string;
    }
}
