import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as protoPubV1Models001 from '../../../pub/v1/models/uid.pb';
export declare enum Role {
    NONE = 0,
    MEMBER = 1,
    ADMIN = 2,
    OWNER = 3
}
/**
 * Message implementation for proto.pub.v1.models.Member
 */
export declare class Member implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): Member;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Member): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: Member, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: Member, _writer: BinaryWriter): void;
    private _uid?;
    private _role?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Member to deeply clone from
     */
    constructor(_value?: RecursivePartial<Member.AsObject>);
    get uid(): protoPubV1Models001.Uid | undefined;
    set uid(value: protoPubV1Models001.Uid | undefined);
    get role(): Role | undefined;
    set role(value: Role | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Member.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): Member.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): Member.AsProtobufJSON;
}
export declare module Member {
    /**
     * Standard JavaScript object representation for Member
     */
    interface AsObject {
        uid?: protoPubV1Models001.Uid.AsObject;
        role?: Role;
    }
    /**
     * Protobuf JSON representation for Member
     */
    interface AsProtobufJSON {
        uid?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        role?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.models.Ban
 */
export declare class Ban implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): Ban;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Ban): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: Ban, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: Ban, _writer: BinaryWriter): void;
    private _banned?;
    private _banner?;
    private _bannedFrom?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Ban to deeply clone from
     */
    constructor(_value?: RecursivePartial<Ban.AsObject>);
    get banned(): protoPubV1Models001.Uid | undefined;
    set banned(value: protoPubV1Models001.Uid | undefined);
    get banner(): protoPubV1Models001.Uid | undefined;
    set banner(value: protoPubV1Models001.Uid | undefined);
    get bannedFrom(): protoPubV1Models001.Uid | undefined;
    set bannedFrom(value: protoPubV1Models001.Uid | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Ban.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): Ban.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): Ban.AsProtobufJSON;
}
export declare module Ban {
    /**
     * Standard JavaScript object representation for Ban
     */
    interface AsObject {
        banned?: protoPubV1Models001.Uid.AsObject;
        banner?: protoPubV1Models001.Uid.AsObject;
        bannedFrom?: protoPubV1Models001.Uid.AsObject;
    }
    /**
     * Protobuf JSON representation for Ban
     */
    interface AsProtobufJSON {
        banned?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        banner?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        bannedFrom?: protoPubV1Models001.Uid.AsProtobufJSON | null;
    }
}
