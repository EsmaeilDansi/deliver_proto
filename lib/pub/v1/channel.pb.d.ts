import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as protoPubV1Models001 from '../../pub/v1/models/uid.pb';
import * as protoPubV1Models002 from '../../pub/v1/models/muc.pb';
export declare enum ChannelType {
    PRIVATE = 0,
    PUBLIC = 1
}
/**
 * Message implementation for proto.pub.v1.channel.ChannelInfo
 */
export declare class ChannelInfo implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ChannelInfo;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ChannelInfo): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ChannelInfo, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ChannelInfo, _writer: BinaryWriter): void;
    private _name?;
    private _info?;
    private _type?;
    private _id?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ChannelInfo to deeply clone from
     */
    constructor(_value?: RecursivePartial<ChannelInfo.AsObject>);
    get name(): string | undefined;
    set name(value: string | undefined);
    get info(): string | undefined;
    set info(value: string | undefined);
    get type(): ChannelType | undefined;
    set type(value: ChannelType | undefined);
    get id(): string | undefined;
    set id(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ChannelInfo.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ChannelInfo.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ChannelInfo.AsProtobufJSON;
}
export declare module ChannelInfo {
    /**
     * Standard JavaScript object representation for ChannelInfo
     */
    interface AsObject {
        name?: string;
        info?: string;
        type?: ChannelType;
        id?: string;
    }
    /**
     * Protobuf JSON representation for ChannelInfo
     */
    interface AsProtobufJSON {
        name?: string;
        info?: string;
        type?: string;
        id?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.channel.ChannelAdmin
 */
export declare class ChannelAdmin implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ChannelAdmin;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ChannelAdmin): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ChannelAdmin, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ChannelAdmin, _writer: BinaryWriter): void;
    private _admin?;
    private _channel?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ChannelAdmin to deeply clone from
     */
    constructor(_value?: RecursivePartial<ChannelAdmin.AsObject>);
    get admin(): protoPubV1Models001.Uid | undefined;
    set admin(value: protoPubV1Models001.Uid | undefined);
    get channel(): protoPubV1Models001.Uid | undefined;
    set channel(value: protoPubV1Models001.Uid | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ChannelAdmin.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ChannelAdmin.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ChannelAdmin.AsProtobufJSON;
}
export declare module ChannelAdmin {
    /**
     * Standard JavaScript object representation for ChannelAdmin
     */
    interface AsObject {
        admin?: protoPubV1Models001.Uid.AsObject;
        channel?: protoPubV1Models001.Uid.AsObject;
    }
    /**
     * Protobuf JSON representation for ChannelAdmin
     */
    interface AsProtobufJSON {
        admin?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        channel?: protoPubV1Models001.Uid.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.channel.CreateChannelReq
 */
export declare class CreateChannelReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): CreateChannelReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CreateChannelReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: CreateChannelReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: CreateChannelReq, _writer: BinaryWriter): void;
    private _id?;
    private _name?;
    private _info?;
    private _type?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CreateChannelReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<CreateChannelReq.AsObject>);
    get id(): string | undefined;
    set id(value: string | undefined);
    get name(): string | undefined;
    set name(value: string | undefined);
    get info(): string | undefined;
    set info(value: string | undefined);
    get type(): ChannelType | undefined;
    set type(value: ChannelType | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): CreateChannelReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): CreateChannelReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): CreateChannelReq.AsProtobufJSON;
}
export declare module CreateChannelReq {
    /**
     * Standard JavaScript object representation for CreateChannelReq
     */
    interface AsObject {
        id?: string;
        name?: string;
        info?: string;
        type?: ChannelType;
    }
    /**
     * Protobuf JSON representation for CreateChannelReq
     */
    interface AsProtobufJSON {
        id?: string;
        name?: string;
        info?: string;
        type?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.channel.CreateChannelRes
 */
export declare class CreateChannelRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): CreateChannelRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CreateChannelRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: CreateChannelRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: CreateChannelRes, _writer: BinaryWriter): void;
    private _uid?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CreateChannelRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<CreateChannelRes.AsObject>);
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
    toObject(): CreateChannelRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): CreateChannelRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): CreateChannelRes.AsProtobufJSON;
}
export declare module CreateChannelRes {
    /**
     * Standard JavaScript object representation for CreateChannelRes
     */
    interface AsObject {
        uid?: protoPubV1Models001.Uid.AsObject;
    }
    /**
     * Protobuf JSON representation for CreateChannelRes
     */
    interface AsProtobufJSON {
        uid?: protoPubV1Models001.Uid.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.channel.ModifyChannelReq
 */
export declare class ModifyChannelReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ModifyChannelReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ModifyChannelReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ModifyChannelReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ModifyChannelReq, _writer: BinaryWriter): void;
    private _uid?;
    private _info?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ModifyChannelReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<ModifyChannelReq.AsObject>);
    get uid(): protoPubV1Models001.Uid | undefined;
    set uid(value: protoPubV1Models001.Uid | undefined);
    get info(): ChannelInfo | undefined;
    set info(value: ChannelInfo | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ModifyChannelReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ModifyChannelReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ModifyChannelReq.AsProtobufJSON;
}
export declare module ModifyChannelReq {
    /**
     * Standard JavaScript object representation for ModifyChannelReq
     */
    interface AsObject {
        uid?: protoPubV1Models001.Uid.AsObject;
        info?: ChannelInfo.AsObject;
    }
    /**
     * Protobuf JSON representation for ModifyChannelReq
     */
    interface AsProtobufJSON {
        uid?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        info?: ChannelInfo.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.channel.ModifyChannelRes
 */
export declare class ModifyChannelRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ModifyChannelRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ModifyChannelRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ModifyChannelRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ModifyChannelRes, _writer: BinaryWriter): void;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ModifyChannelRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<ModifyChannelRes.AsObject>);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ModifyChannelRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ModifyChannelRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ModifyChannelRes.AsProtobufJSON;
}
export declare module ModifyChannelRes {
    /**
     * Standard JavaScript object representation for ModifyChannelRes
     */
    interface AsObject {
    }
    /**
     * Protobuf JSON representation for ModifyChannelRes
     */
    interface AsProtobufJSON {
    }
}
/**
 * Message implementation for proto.pub.v1.channel.ChangeRoleReq
 */
export declare class ChangeRoleReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ChangeRoleReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ChangeRoleReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ChangeRoleReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ChangeRoleReq, _writer: BinaryWriter): void;
    private _channel?;
    private _member?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ChangeRoleReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<ChangeRoleReq.AsObject>);
    get channel(): protoPubV1Models001.Uid | undefined;
    set channel(value: protoPubV1Models001.Uid | undefined);
    get member(): protoPubV1Models002.Member | undefined;
    set member(value: protoPubV1Models002.Member | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ChangeRoleReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ChangeRoleReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ChangeRoleReq.AsProtobufJSON;
}
export declare module ChangeRoleReq {
    /**
     * Standard JavaScript object representation for ChangeRoleReq
     */
    interface AsObject {
        channel?: protoPubV1Models001.Uid.AsObject;
        member?: protoPubV1Models002.Member.AsObject;
    }
    /**
     * Protobuf JSON representation for ChangeRoleReq
     */
    interface AsProtobufJSON {
        channel?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        member?: protoPubV1Models002.Member.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.channel.ChangeRoleRes
 */
export declare class ChangeRoleRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ChangeRoleRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ChangeRoleRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ChangeRoleRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ChangeRoleRes, _writer: BinaryWriter): void;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ChangeRoleRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<ChangeRoleRes.AsObject>);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ChangeRoleRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ChangeRoleRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ChangeRoleRes.AsProtobufJSON;
}
export declare module ChangeRoleRes {
    /**
     * Standard JavaScript object representation for ChangeRoleRes
     */
    interface AsObject {
    }
    /**
     * Protobuf JSON representation for ChangeRoleRes
     */
    interface AsProtobufJSON {
    }
}
/**
 * Message implementation for proto.pub.v1.channel.RemoveChannelReq
 */
export declare class RemoveChannelReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): RemoveChannelReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: RemoveChannelReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: RemoveChannelReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: RemoveChannelReq, _writer: BinaryWriter): void;
    private _uid?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of RemoveChannelReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<RemoveChannelReq.AsObject>);
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
    toObject(): RemoveChannelReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): RemoveChannelReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): RemoveChannelReq.AsProtobufJSON;
}
export declare module RemoveChannelReq {
    /**
     * Standard JavaScript object representation for RemoveChannelReq
     */
    interface AsObject {
        uid?: protoPubV1Models001.Uid.AsObject;
    }
    /**
     * Protobuf JSON representation for RemoveChannelReq
     */
    interface AsProtobufJSON {
        uid?: protoPubV1Models001.Uid.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.channel.RemoveChannelRes
 */
export declare class RemoveChannelRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): RemoveChannelRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: RemoveChannelRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: RemoveChannelRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: RemoveChannelRes, _writer: BinaryWriter): void;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of RemoveChannelRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<RemoveChannelRes.AsObject>);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): RemoveChannelRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): RemoveChannelRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): RemoveChannelRes.AsProtobufJSON;
}
export declare module RemoveChannelRes {
    /**
     * Standard JavaScript object representation for RemoveChannelRes
     */
    interface AsObject {
    }
    /**
     * Protobuf JSON representation for RemoveChannelRes
     */
    interface AsProtobufJSON {
    }
}
/**
 * Message implementation for proto.pub.v1.channel.AddMembersReq
 */
export declare class AddMembersReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): AddMembersReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: AddMembersReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: AddMembersReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: AddMembersReq, _writer: BinaryWriter): void;
    private _channel?;
    private _members?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of AddMembersReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<AddMembersReq.AsObject>);
    get channel(): protoPubV1Models001.Uid | undefined;
    set channel(value: protoPubV1Models001.Uid | undefined);
    get members(): protoPubV1Models002.Member[] | undefined;
    set members(value: protoPubV1Models002.Member[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): AddMembersReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): AddMembersReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): AddMembersReq.AsProtobufJSON;
}
export declare module AddMembersReq {
    /**
     * Standard JavaScript object representation for AddMembersReq
     */
    interface AsObject {
        channel?: protoPubV1Models001.Uid.AsObject;
        members?: protoPubV1Models002.Member.AsObject[];
    }
    /**
     * Protobuf JSON representation for AddMembersReq
     */
    interface AsProtobufJSON {
        channel?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        members?: protoPubV1Models002.Member.AsProtobufJSON[] | null;
    }
}
/**
 * Message implementation for proto.pub.v1.channel.AddMembersRes
 */
export declare class AddMembersRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): AddMembersRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: AddMembersRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: AddMembersRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: AddMembersRes, _writer: BinaryWriter): void;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of AddMembersRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<AddMembersRes.AsObject>);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): AddMembersRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): AddMembersRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): AddMembersRes.AsProtobufJSON;
}
export declare module AddMembersRes {
    /**
     * Standard JavaScript object representation for AddMembersRes
     */
    interface AsObject {
    }
    /**
     * Protobuf JSON representation for AddMembersRes
     */
    interface AsProtobufJSON {
    }
}
/**
 * Message implementation for proto.pub.v1.channel.KickMembersReq
 */
export declare class KickMembersReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): KickMembersReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: KickMembersReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: KickMembersReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: KickMembersReq, _writer: BinaryWriter): void;
    private _channel?;
    private _members?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of KickMembersReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<KickMembersReq.AsObject>);
    get channel(): protoPubV1Models001.Uid | undefined;
    set channel(value: protoPubV1Models001.Uid | undefined);
    get members(): protoPubV1Models001.Uid[] | undefined;
    set members(value: protoPubV1Models001.Uid[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): KickMembersReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): KickMembersReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): KickMembersReq.AsProtobufJSON;
}
export declare module KickMembersReq {
    /**
     * Standard JavaScript object representation for KickMembersReq
     */
    interface AsObject {
        channel?: protoPubV1Models001.Uid.AsObject;
        members?: protoPubV1Models001.Uid.AsObject[];
    }
    /**
     * Protobuf JSON representation for KickMembersReq
     */
    interface AsProtobufJSON {
        channel?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        members?: protoPubV1Models001.Uid.AsProtobufJSON[] | null;
    }
}
/**
 * Message implementation for proto.pub.v1.channel.KickMembersRes
 */
export declare class KickMembersRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): KickMembersRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: KickMembersRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: KickMembersRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: KickMembersRes, _writer: BinaryWriter): void;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of KickMembersRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<KickMembersRes.AsObject>);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): KickMembersRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): KickMembersRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): KickMembersRes.AsProtobufJSON;
}
export declare module KickMembersRes {
    /**
     * Standard JavaScript object representation for KickMembersRes
     */
    interface AsObject {
    }
    /**
     * Protobuf JSON representation for KickMembersRes
     */
    interface AsProtobufJSON {
    }
}
/**
 * Message implementation for proto.pub.v1.channel.BanMemberReq
 */
export declare class BanMemberReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): BanMemberReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: BanMemberReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: BanMemberReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: BanMemberReq, _writer: BinaryWriter): void;
    private _channel?;
    private _member?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of BanMemberReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<BanMemberReq.AsObject>);
    get channel(): protoPubV1Models001.Uid | undefined;
    set channel(value: protoPubV1Models001.Uid | undefined);
    get member(): protoPubV1Models001.Uid | undefined;
    set member(value: protoPubV1Models001.Uid | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): BanMemberReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): BanMemberReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): BanMemberReq.AsProtobufJSON;
}
export declare module BanMemberReq {
    /**
     * Standard JavaScript object representation for BanMemberReq
     */
    interface AsObject {
        channel?: protoPubV1Models001.Uid.AsObject;
        member?: protoPubV1Models001.Uid.AsObject;
    }
    /**
     * Protobuf JSON representation for BanMemberReq
     */
    interface AsProtobufJSON {
        channel?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        member?: protoPubV1Models001.Uid.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.channel.BanMemberRes
 */
export declare class BanMemberRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): BanMemberRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: BanMemberRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: BanMemberRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: BanMemberRes, _writer: BinaryWriter): void;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of BanMemberRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<BanMemberRes.AsObject>);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): BanMemberRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): BanMemberRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): BanMemberRes.AsProtobufJSON;
}
export declare module BanMemberRes {
    /**
     * Standard JavaScript object representation for BanMemberRes
     */
    interface AsObject {
    }
    /**
     * Protobuf JSON representation for BanMemberRes
     */
    interface AsProtobufJSON {
    }
}
/**
 * Message implementation for proto.pub.v1.channel.UnbanMemberReq
 */
export declare class UnbanMemberReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): UnbanMemberReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: UnbanMemberReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: UnbanMemberReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: UnbanMemberReq, _writer: BinaryWriter): void;
    private _channel?;
    private _member?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of UnbanMemberReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<UnbanMemberReq.AsObject>);
    get channel(): protoPubV1Models001.Uid | undefined;
    set channel(value: protoPubV1Models001.Uid | undefined);
    get member(): protoPubV1Models001.Uid | undefined;
    set member(value: protoPubV1Models001.Uid | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): UnbanMemberReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): UnbanMemberReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): UnbanMemberReq.AsProtobufJSON;
}
export declare module UnbanMemberReq {
    /**
     * Standard JavaScript object representation for UnbanMemberReq
     */
    interface AsObject {
        channel?: protoPubV1Models001.Uid.AsObject;
        member?: protoPubV1Models001.Uid.AsObject;
    }
    /**
     * Protobuf JSON representation for UnbanMemberReq
     */
    interface AsProtobufJSON {
        channel?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        member?: protoPubV1Models001.Uid.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.channel.UnbanMemberRes
 */
export declare class UnbanMemberRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): UnbanMemberRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: UnbanMemberRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: UnbanMemberRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: UnbanMemberRes, _writer: BinaryWriter): void;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of UnbanMemberRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<UnbanMemberRes.AsObject>);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): UnbanMemberRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): UnbanMemberRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): UnbanMemberRes.AsProtobufJSON;
}
export declare module UnbanMemberRes {
    /**
     * Standard JavaScript object representation for UnbanMemberRes
     */
    interface AsObject {
    }
    /**
     * Protobuf JSON representation for UnbanMemberRes
     */
    interface AsProtobufJSON {
    }
}
/**
 * Message implementation for proto.pub.v1.channel.GetChannelReq
 */
export declare class GetChannelReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetChannelReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetChannelReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetChannelReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetChannelReq, _writer: BinaryWriter): void;
    private _uid?;
    private _token?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetChannelReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetChannelReq.AsObject>);
    get uid(): protoPubV1Models001.Uid | undefined;
    set uid(value: protoPubV1Models001.Uid | undefined);
    get token(): string | undefined;
    set token(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetChannelReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetChannelReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetChannelReq.AsProtobufJSON;
}
export declare module GetChannelReq {
    /**
     * Standard JavaScript object representation for GetChannelReq
     */
    interface AsObject {
        uid?: protoPubV1Models001.Uid.AsObject;
        token?: string;
    }
    /**
     * Protobuf JSON representation for GetChannelReq
     */
    interface AsProtobufJSON {
        uid?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        token?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.channel.GetChannelRes
 */
export declare class GetChannelRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetChannelRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetChannelRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetChannelRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetChannelRes, _writer: BinaryWriter): void;
    private _info?;
    private _population?;
    private _token?;
    private _pinMessages?;
    private _lastMessageId?;
    private _requesterRole?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetChannelRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetChannelRes.AsObject>);
    get info(): ChannelInfo | undefined;
    set info(value: ChannelInfo | undefined);
    get population(): string | undefined;
    set population(value: string | undefined);
    get token(): string | undefined;
    set token(value: string | undefined);
    get pinMessages(): string[] | undefined;
    set pinMessages(value: string[] | undefined);
    get lastMessageId(): string | undefined;
    set lastMessageId(value: string | undefined);
    get requesterRole(): protoPubV1Models002.Role | undefined;
    set requesterRole(value: protoPubV1Models002.Role | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetChannelRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetChannelRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetChannelRes.AsProtobufJSON;
}
export declare module GetChannelRes {
    /**
     * Standard JavaScript object representation for GetChannelRes
     */
    interface AsObject {
        info?: ChannelInfo.AsObject;
        population?: string;
        token?: string;
        pinMessages?: string[];
        lastMessageId?: string;
        requesterRole?: protoPubV1Models002.Role;
    }
    /**
     * Protobuf JSON representation for GetChannelRes
     */
    interface AsProtobufJSON {
        info?: ChannelInfo.AsProtobufJSON | null;
        population?: string;
        token?: string;
        pinMessages?: string[];
        lastMessageId?: string;
        requesterRole?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.channel.GetMembersReq
 */
export declare class GetMembersReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetMembersReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetMembersReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetMembersReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetMembersReq, _writer: BinaryWriter): void;
    private _uid?;
    private _pointer?;
    private _limit?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetMembersReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetMembersReq.AsObject>);
    get uid(): protoPubV1Models001.Uid | undefined;
    set uid(value: protoPubV1Models001.Uid | undefined);
    get pointer(): number | undefined;
    set pointer(value: number | undefined);
    get limit(): number | undefined;
    set limit(value: number | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetMembersReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetMembersReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetMembersReq.AsProtobufJSON;
}
export declare module GetMembersReq {
    /**
     * Standard JavaScript object representation for GetMembersReq
     */
    interface AsObject {
        uid?: protoPubV1Models001.Uid.AsObject;
        pointer?: number;
        limit?: number;
    }
    /**
     * Protobuf JSON representation for GetMembersReq
     */
    interface AsProtobufJSON {
        uid?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        pointer?: number;
        limit?: number;
    }
}
/**
 * Message implementation for proto.pub.v1.channel.GetMembersRes
 */
export declare class GetMembersRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetMembersRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetMembersRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetMembersRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetMembersRes, _writer: BinaryWriter): void;
    private _members?;
    private _finished?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetMembersRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetMembersRes.AsObject>);
    get members(): protoPubV1Models002.Member[] | undefined;
    set members(value: protoPubV1Models002.Member[] | undefined);
    get finished(): boolean | undefined;
    set finished(value: boolean | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetMembersRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetMembersRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetMembersRes.AsProtobufJSON;
}
export declare module GetMembersRes {
    /**
     * Standard JavaScript object representation for GetMembersRes
     */
    interface AsObject {
        members?: protoPubV1Models002.Member.AsObject[];
        finished?: boolean;
    }
    /**
     * Protobuf JSON representation for GetMembersRes
     */
    interface AsProtobufJSON {
        members?: protoPubV1Models002.Member.AsProtobufJSON[] | null;
        finished?: boolean;
    }
}
/**
 * Message implementation for proto.pub.v1.channel.JoinChannelReq
 */
export declare class JoinChannelReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): JoinChannelReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: JoinChannelReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: JoinChannelReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: JoinChannelReq, _writer: BinaryWriter): void;
    private _channel?;
    private _token?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of JoinChannelReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<JoinChannelReq.AsObject>);
    get channel(): protoPubV1Models001.Uid | undefined;
    set channel(value: protoPubV1Models001.Uid | undefined);
    get token(): string | undefined;
    set token(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): JoinChannelReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): JoinChannelReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): JoinChannelReq.AsProtobufJSON;
}
export declare module JoinChannelReq {
    /**
     * Standard JavaScript object representation for JoinChannelReq
     */
    interface AsObject {
        channel?: protoPubV1Models001.Uid.AsObject;
        token?: string;
    }
    /**
     * Protobuf JSON representation for JoinChannelReq
     */
    interface AsProtobufJSON {
        channel?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        token?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.channel.JoinChannelRes
 */
export declare class JoinChannelRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): JoinChannelRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: JoinChannelRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: JoinChannelRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: JoinChannelRes, _writer: BinaryWriter): void;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of JoinChannelRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<JoinChannelRes.AsObject>);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): JoinChannelRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): JoinChannelRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): JoinChannelRes.AsProtobufJSON;
}
export declare module JoinChannelRes {
    /**
     * Standard JavaScript object representation for JoinChannelRes
     */
    interface AsObject {
    }
    /**
     * Protobuf JSON representation for JoinChannelRes
     */
    interface AsProtobufJSON {
    }
}
/**
 * Message implementation for proto.pub.v1.channel.LeaveChannelReq
 */
export declare class LeaveChannelReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): LeaveChannelReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: LeaveChannelReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: LeaveChannelReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: LeaveChannelReq, _writer: BinaryWriter): void;
    private _channel?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of LeaveChannelReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<LeaveChannelReq.AsObject>);
    get channel(): protoPubV1Models001.Uid | undefined;
    set channel(value: protoPubV1Models001.Uid | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): LeaveChannelReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): LeaveChannelReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): LeaveChannelReq.AsProtobufJSON;
}
export declare module LeaveChannelReq {
    /**
     * Standard JavaScript object representation for LeaveChannelReq
     */
    interface AsObject {
        channel?: protoPubV1Models001.Uid.AsObject;
    }
    /**
     * Protobuf JSON representation for LeaveChannelReq
     */
    interface AsProtobufJSON {
        channel?: protoPubV1Models001.Uid.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.channel.LeaveChannelRes
 */
export declare class LeaveChannelRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): LeaveChannelRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: LeaveChannelRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: LeaveChannelRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: LeaveChannelRes, _writer: BinaryWriter): void;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of LeaveChannelRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<LeaveChannelRes.AsObject>);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): LeaveChannelRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): LeaveChannelRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): LeaveChannelRes.AsProtobufJSON;
}
export declare module LeaveChannelRes {
    /**
     * Standard JavaScript object representation for LeaveChannelRes
     */
    interface AsObject {
    }
    /**
     * Protobuf JSON representation for LeaveChannelRes
     */
    interface AsProtobufJSON {
    }
}
/**
 * Message implementation for proto.pub.v1.channel.CreateTokenReq
 */
export declare class CreateTokenReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): CreateTokenReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CreateTokenReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: CreateTokenReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: CreateTokenReq, _writer: BinaryWriter): void;
    private _uid?;
    private _validUntil?;
    private _numberOfAvailableJoins?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CreateTokenReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<CreateTokenReq.AsObject>);
    get uid(): protoPubV1Models001.Uid | undefined;
    set uid(value: protoPubV1Models001.Uid | undefined);
    get validUntil(): string | undefined;
    set validUntil(value: string | undefined);
    get numberOfAvailableJoins(): string | undefined;
    set numberOfAvailableJoins(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): CreateTokenReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): CreateTokenReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): CreateTokenReq.AsProtobufJSON;
}
export declare module CreateTokenReq {
    /**
     * Standard JavaScript object representation for CreateTokenReq
     */
    interface AsObject {
        uid?: protoPubV1Models001.Uid.AsObject;
        validUntil?: string;
        numberOfAvailableJoins?: string;
    }
    /**
     * Protobuf JSON representation for CreateTokenReq
     */
    interface AsProtobufJSON {
        uid?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        validUntil?: string;
        numberOfAvailableJoins?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.channel.CreateTokenRes
 */
export declare class CreateTokenRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): CreateTokenRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CreateTokenRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: CreateTokenRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: CreateTokenRes, _writer: BinaryWriter): void;
    private _joinToken?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CreateTokenRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<CreateTokenRes.AsObject>);
    get joinToken(): string | undefined;
    set joinToken(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): CreateTokenRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): CreateTokenRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): CreateTokenRes.AsProtobufJSON;
}
export declare module CreateTokenRes {
    /**
     * Standard JavaScript object representation for CreateTokenRes
     */
    interface AsObject {
        joinToken?: string;
    }
    /**
     * Protobuf JSON representation for CreateTokenRes
     */
    interface AsProtobufJSON {
        joinToken?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.channel.DeleteTokenReq
 */
export declare class DeleteTokenReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): DeleteTokenReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: DeleteTokenReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: DeleteTokenReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: DeleteTokenReq, _writer: BinaryWriter): void;
    private _uid?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of DeleteTokenReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<DeleteTokenReq.AsObject>);
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
    toObject(): DeleteTokenReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): DeleteTokenReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): DeleteTokenReq.AsProtobufJSON;
}
export declare module DeleteTokenReq {
    /**
     * Standard JavaScript object representation for DeleteTokenReq
     */
    interface AsObject {
        uid?: protoPubV1Models001.Uid.AsObject;
    }
    /**
     * Protobuf JSON representation for DeleteTokenReq
     */
    interface AsProtobufJSON {
        uid?: protoPubV1Models001.Uid.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.channel.DeleteTokenRes
 */
export declare class DeleteTokenRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): DeleteTokenRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: DeleteTokenRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: DeleteTokenRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: DeleteTokenRes, _writer: BinaryWriter): void;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of DeleteTokenRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<DeleteTokenRes.AsObject>);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): DeleteTokenRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): DeleteTokenRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): DeleteTokenRes.AsProtobufJSON;
}
export declare module DeleteTokenRes {
    /**
     * Standard JavaScript object representation for DeleteTokenRes
     */
    interface AsObject {
    }
    /**
     * Protobuf JSON representation for DeleteTokenRes
     */
    interface AsProtobufJSON {
    }
}
/**
 * Message implementation for proto.pub.v1.channel.PinMessageReq
 */
export declare class PinMessageReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): PinMessageReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: PinMessageReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: PinMessageReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: PinMessageReq, _writer: BinaryWriter): void;
    private _uid?;
    private _messageId?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of PinMessageReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<PinMessageReq.AsObject>);
    get uid(): protoPubV1Models001.Uid | undefined;
    set uid(value: protoPubV1Models001.Uid | undefined);
    get messageId(): string | undefined;
    set messageId(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): PinMessageReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): PinMessageReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): PinMessageReq.AsProtobufJSON;
}
export declare module PinMessageReq {
    /**
     * Standard JavaScript object representation for PinMessageReq
     */
    interface AsObject {
        uid?: protoPubV1Models001.Uid.AsObject;
        messageId?: string;
    }
    /**
     * Protobuf JSON representation for PinMessageReq
     */
    interface AsProtobufJSON {
        uid?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        messageId?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.channel.PinMessageRes
 */
export declare class PinMessageRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): PinMessageRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: PinMessageRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: PinMessageRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: PinMessageRes, _writer: BinaryWriter): void;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of PinMessageRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<PinMessageRes.AsObject>);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): PinMessageRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): PinMessageRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): PinMessageRes.AsProtobufJSON;
}
export declare module PinMessageRes {
    /**
     * Standard JavaScript object representation for PinMessageRes
     */
    interface AsObject {
    }
    /**
     * Protobuf JSON representation for PinMessageRes
     */
    interface AsProtobufJSON {
    }
}
/**
 * Message implementation for proto.pub.v1.channel.UnpinMessageReq
 */
export declare class UnpinMessageReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): UnpinMessageReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: UnpinMessageReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: UnpinMessageReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: UnpinMessageReq, _writer: BinaryWriter): void;
    private _uid?;
    private _messageId?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of UnpinMessageReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<UnpinMessageReq.AsObject>);
    get uid(): protoPubV1Models001.Uid | undefined;
    set uid(value: protoPubV1Models001.Uid | undefined);
    get messageId(): string | undefined;
    set messageId(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): UnpinMessageReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): UnpinMessageReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): UnpinMessageReq.AsProtobufJSON;
}
export declare module UnpinMessageReq {
    /**
     * Standard JavaScript object representation for UnpinMessageReq
     */
    interface AsObject {
        uid?: protoPubV1Models001.Uid.AsObject;
        messageId?: string;
    }
    /**
     * Protobuf JSON representation for UnpinMessageReq
     */
    interface AsProtobufJSON {
        uid?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        messageId?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.channel.UnpinMessageRes
 */
export declare class UnpinMessageRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): UnpinMessageRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: UnpinMessageRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: UnpinMessageRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: UnpinMessageRes, _writer: BinaryWriter): void;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of UnpinMessageRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<UnpinMessageRes.AsObject>);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): UnpinMessageRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): UnpinMessageRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): UnpinMessageRes.AsProtobufJSON;
}
export declare module UnpinMessageRes {
    /**
     * Standard JavaScript object representation for UnpinMessageRes
     */
    interface AsObject {
    }
    /**
     * Protobuf JSON representation for UnpinMessageRes
     */
    interface AsProtobufJSON {
    }
}
