import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as protoPubV1Models001 from '../../pub/v1/models/uid.pb';
import * as protoPubV1Models002 from '../../pub/v1/models/avatar.pb';
/**
 * Message implementation for proto.pub.v1.avatar.GetAvatarReq
 */
export declare class GetAvatarReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetAvatarReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetAvatarReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetAvatarReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetAvatarReq, _writer: BinaryWriter): void;
    private _uidList?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetAvatarReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetAvatarReq.AsObject>);
    get uidList(): protoPubV1Models001.Uid[] | undefined;
    set uidList(value: protoPubV1Models001.Uid[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetAvatarReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetAvatarReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetAvatarReq.AsProtobufJSON;
}
export declare module GetAvatarReq {
    /**
     * Standard JavaScript object representation for GetAvatarReq
     */
    interface AsObject {
        uidList?: protoPubV1Models001.Uid.AsObject[];
    }
    /**
     * Protobuf JSON representation for GetAvatarReq
     */
    interface AsProtobufJSON {
        uidList?: protoPubV1Models001.Uid.AsProtobufJSON[] | null;
    }
}
/**
 * Message implementation for proto.pub.v1.avatar.GetAvatarRes
 */
export declare class GetAvatarRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetAvatarRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetAvatarRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetAvatarRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetAvatarRes, _writer: BinaryWriter): void;
    private _avatar?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetAvatarRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetAvatarRes.AsObject>);
    get avatar(): protoPubV1Models002.Avatar[] | undefined;
    set avatar(value: protoPubV1Models002.Avatar[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetAvatarRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetAvatarRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetAvatarRes.AsProtobufJSON;
}
export declare module GetAvatarRes {
    /**
     * Standard JavaScript object representation for GetAvatarRes
     */
    interface AsObject {
        avatar?: protoPubV1Models002.Avatar.AsObject[];
    }
    /**
     * Protobuf JSON representation for GetAvatarRes
     */
    interface AsProtobufJSON {
        avatar?: protoPubV1Models002.Avatar.AsProtobufJSON[] | null;
    }
}
