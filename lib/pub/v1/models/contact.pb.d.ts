import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as protoPubV1Models001 from '../../../pub/v1/models/uid.pb';
import * as protoPubV1Models002 from '../../../pub/v1/models/phone.pb';
/**
 * Message implementation for proto.pub.v1.models.Contact
 */
export declare class Contact implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): Contact;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Contact): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: Contact, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: Contact, _writer: BinaryWriter): void;
    private _uuid?;
    private _owner?;
    private _phoneNumber?;
    private _firstName?;
    private _lastName?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Contact to deeply clone from
     */
    constructor(_value?: RecursivePartial<Contact.AsObject>);
    get uuid(): string | undefined;
    set uuid(value: string | undefined);
    get owner(): protoPubV1Models001.Uid | undefined;
    set owner(value: protoPubV1Models001.Uid | undefined);
    get phoneNumber(): protoPubV1Models002.PhoneNumber | undefined;
    set phoneNumber(value: protoPubV1Models002.PhoneNumber | undefined);
    get firstName(): string | undefined;
    set firstName(value: string | undefined);
    get lastName(): string | undefined;
    set lastName(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Contact.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): Contact.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): Contact.AsProtobufJSON;
}
export declare module Contact {
    /**
     * Standard JavaScript object representation for Contact
     */
    interface AsObject {
        uuid?: string;
        owner?: protoPubV1Models001.Uid.AsObject;
        phoneNumber?: protoPubV1Models002.PhoneNumber.AsObject;
        firstName?: string;
        lastName?: string;
    }
    /**
     * Protobuf JSON representation for Contact
     */
    interface AsProtobufJSON {
        uuid?: string;
        owner?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        phoneNumber?: protoPubV1Models002.PhoneNumber.AsProtobufJSON | null;
        firstName?: string;
        lastName?: string;
    }
}
