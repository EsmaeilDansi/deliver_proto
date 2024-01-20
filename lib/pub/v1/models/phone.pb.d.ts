import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
/**
 * Message implementation for proto.pub.v1.models.PhoneNumber
 */
export declare class PhoneNumber implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): PhoneNumber;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: PhoneNumber): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: PhoneNumber, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: PhoneNumber, _writer: BinaryWriter): void;
    private _countryCode?;
    private _nationalNumber?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of PhoneNumber to deeply clone from
     */
    constructor(_value?: RecursivePartial<PhoneNumber.AsObject>);
    get countryCode(): number | undefined;
    set countryCode(value: number | undefined);
    get nationalNumber(): string | undefined;
    set nationalNumber(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): PhoneNumber.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): PhoneNumber.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): PhoneNumber.AsProtobufJSON;
}
export declare module PhoneNumber {
    /**
     * Standard JavaScript object representation for PhoneNumber
     */
    interface AsObject {
        countryCode?: number;
        nationalNumber?: string;
    }
    /**
     * Protobuf JSON representation for PhoneNumber
     */
    interface AsProtobufJSON {
        countryCode?: number;
        nationalNumber?: string;
    }
}
