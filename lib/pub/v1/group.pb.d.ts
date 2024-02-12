import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as protoPubV1Models001 from '../../pub/v1/models/uid.pb';
import * as protoPubV1Models002 from '../../pub/v1/models/muc.pb';
/**
 * Message implementation for proto.pub.v1.group.GroupInfo
 */
export declare class GroupInfo implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GroupInfo;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GroupInfo): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GroupInfo, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GroupInfo, _writer: BinaryWriter): void;
    private _name?;
    private _info?;
    private _messagingTimeInterval?;
    private _isSendingMessageDisabled?;
    private _lastUpdatedTime?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GroupInfo to deeply clone from
     */
    constructor(_value?: RecursivePartial<GroupInfo.AsObject>);
    get name(): string | undefined;
    set name(value: string | undefined);
    get info(): string | undefined;
    set info(value: string | undefined);
    get messagingTimeInterval(): string | undefined;
    set messagingTimeInterval(value: string | undefined);
    get isSendingMessageDisabled(): boolean | undefined;
    set isSendingMessageDisabled(value: boolean | undefined);
    get lastUpdatedTime(): string | undefined;
    set lastUpdatedTime(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GroupInfo.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GroupInfo.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GroupInfo.AsProtobufJSON;
}
export declare module GroupInfo {
    /**
     * Standard JavaScript object representation for GroupInfo
     */
    interface AsObject {
        name?: string;
        info?: string;
        messagingTimeInterval?: string;
        isSendingMessageDisabled?: boolean;
        lastUpdatedTime?: string;
    }
    /**
     * Protobuf JSON representation for GroupInfo
     */
    interface AsProtobufJSON {
        name?: string;
        info?: string;
        messagingTimeInterval?: string;
        isSendingMessageDisabled?: boolean;
        lastUpdatedTime?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.group.CreateGroupReq
 */
export declare class CreateGroupReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): CreateGroupReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CreateGroupReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: CreateGroupReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: CreateGroupReq, _writer: BinaryWriter): void;
    private _name?;
    private _info?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CreateGroupReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<CreateGroupReq.AsObject>);
    get name(): string | undefined;
    set name(value: string | undefined);
    get info(): string | undefined;
    set info(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): CreateGroupReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): CreateGroupReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): CreateGroupReq.AsProtobufJSON;
}
export declare module CreateGroupReq {
    /**
     * Standard JavaScript object representation for CreateGroupReq
     */
    interface AsObject {
        name?: string;
        info?: string;
    }
    /**
     * Protobuf JSON representation for CreateGroupReq
     */
    interface AsProtobufJSON {
        name?: string;
        info?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.group.CreateLocalGroupReq
 */
export declare class CreateLocalGroupReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): CreateLocalGroupReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CreateLocalGroupReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: CreateLocalGroupReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: CreateLocalGroupReq, _writer: BinaryWriter): void;
    private _name?;
    private _info?;
    private _groupNode?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CreateLocalGroupReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<CreateLocalGroupReq.AsObject>);
    get name(): string | undefined;
    set name(value: string | undefined);
    get info(): string | undefined;
    set info(value: string | undefined);
    get groupNode(): string | undefined;
    set groupNode(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): CreateLocalGroupReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): CreateLocalGroupReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): CreateLocalGroupReq.AsProtobufJSON;
}
export declare module CreateLocalGroupReq {
    /**
     * Standard JavaScript object representation for CreateLocalGroupReq
     */
    interface AsObject {
        name?: string;
        info?: string;
        groupNode?: string;
    }
    /**
     * Protobuf JSON representation for CreateLocalGroupReq
     */
    interface AsProtobufJSON {
        name?: string;
        info?: string;
        groupNode?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.group.CreateGroupRes
 */
export declare class CreateGroupRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): CreateGroupRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CreateGroupRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: CreateGroupRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: CreateGroupRes, _writer: BinaryWriter): void;
    private _uid?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CreateGroupRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<CreateGroupRes.AsObject>);
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
    toObject(): CreateGroupRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): CreateGroupRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): CreateGroupRes.AsProtobufJSON;
}
export declare module CreateGroupRes {
    /**
     * Standard JavaScript object representation for CreateGroupRes
     */
    interface AsObject {
        uid?: protoPubV1Models001.Uid.AsObject;
    }
    /**
     * Protobuf JSON representation for CreateGroupRes
     */
    interface AsProtobufJSON {
        uid?: protoPubV1Models001.Uid.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.group.ModifyGroupReq
 */
export declare class ModifyGroupReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ModifyGroupReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ModifyGroupReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ModifyGroupReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ModifyGroupReq, _writer: BinaryWriter): void;
    private _uid?;
    private _info?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ModifyGroupReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<ModifyGroupReq.AsObject>);
    get uid(): protoPubV1Models001.Uid | undefined;
    set uid(value: protoPubV1Models001.Uid | undefined);
    get info(): GroupInfo | undefined;
    set info(value: GroupInfo | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ModifyGroupReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ModifyGroupReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ModifyGroupReq.AsProtobufJSON;
}
export declare module ModifyGroupReq {
    /**
     * Standard JavaScript object representation for ModifyGroupReq
     */
    interface AsObject {
        uid?: protoPubV1Models001.Uid.AsObject;
        info?: GroupInfo.AsObject;
    }
    /**
     * Protobuf JSON representation for ModifyGroupReq
     */
    interface AsProtobufJSON {
        uid?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        info?: GroupInfo.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.group.ModifyGroupRes
 */
export declare class ModifyGroupRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ModifyGroupRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ModifyGroupRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ModifyGroupRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ModifyGroupRes, _writer: BinaryWriter): void;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ModifyGroupRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<ModifyGroupRes.AsObject>);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ModifyGroupRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ModifyGroupRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ModifyGroupRes.AsProtobufJSON;
}
export declare module ModifyGroupRes {
    /**
     * Standard JavaScript object representation for ModifyGroupRes
     */
    interface AsObject {
    }
    /**
     * Protobuf JSON representation for ModifyGroupRes
     */
    interface AsProtobufJSON {
    }
}
/**
 * Message implementation for proto.pub.v1.group.ChangeRoleReq
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
    private _group?;
    private _member?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ChangeRoleReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<ChangeRoleReq.AsObject>);
    get group(): protoPubV1Models001.Uid | undefined;
    set group(value: protoPubV1Models001.Uid | undefined);
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
        group?: protoPubV1Models001.Uid.AsObject;
        member?: protoPubV1Models002.Member.AsObject;
    }
    /**
     * Protobuf JSON representation for ChangeRoleReq
     */
    interface AsProtobufJSON {
        group?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        member?: protoPubV1Models002.Member.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.group.ChangeRoleRes
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
 * Message implementation for proto.pub.v1.group.RemoveGroupReq
 */
export declare class RemoveGroupReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): RemoveGroupReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: RemoveGroupReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: RemoveGroupReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: RemoveGroupReq, _writer: BinaryWriter): void;
    private _uid?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of RemoveGroupReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<RemoveGroupReq.AsObject>);
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
    toObject(): RemoveGroupReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): RemoveGroupReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): RemoveGroupReq.AsProtobufJSON;
}
export declare module RemoveGroupReq {
    /**
     * Standard JavaScript object representation for RemoveGroupReq
     */
    interface AsObject {
        uid?: protoPubV1Models001.Uid.AsObject;
    }
    /**
     * Protobuf JSON representation for RemoveGroupReq
     */
    interface AsProtobufJSON {
        uid?: protoPubV1Models001.Uid.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.group.RemoveGroupRes
 */
export declare class RemoveGroupRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): RemoveGroupRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: RemoveGroupRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: RemoveGroupRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: RemoveGroupRes, _writer: BinaryWriter): void;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of RemoveGroupRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<RemoveGroupRes.AsObject>);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): RemoveGroupRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): RemoveGroupRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): RemoveGroupRes.AsProtobufJSON;
}
export declare module RemoveGroupRes {
    /**
     * Standard JavaScript object representation for RemoveGroupRes
     */
    interface AsObject {
    }
    /**
     * Protobuf JSON representation for RemoveGroupRes
     */
    interface AsProtobufJSON {
    }
}
/**
 * Message implementation for proto.pub.v1.group.AddMembersReq
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
    private _group?;
    private _members?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of AddMembersReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<AddMembersReq.AsObject>);
    get group(): protoPubV1Models001.Uid | undefined;
    set group(value: protoPubV1Models001.Uid | undefined);
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
        group?: protoPubV1Models001.Uid.AsObject;
        members?: protoPubV1Models002.Member.AsObject[];
    }
    /**
     * Protobuf JSON representation for AddMembersReq
     */
    interface AsProtobufJSON {
        group?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        members?: protoPubV1Models002.Member.AsProtobufJSON[] | null;
    }
}
/**
 * Message implementation for proto.pub.v1.group.AddMembersRes
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
 * Message implementation for proto.pub.v1.group.KickMembersReq
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
    private _group?;
    private _members?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of KickMembersReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<KickMembersReq.AsObject>);
    get group(): protoPubV1Models001.Uid | undefined;
    set group(value: protoPubV1Models001.Uid | undefined);
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
        group?: protoPubV1Models001.Uid.AsObject;
        members?: protoPubV1Models001.Uid.AsObject[];
    }
    /**
     * Protobuf JSON representation for KickMembersReq
     */
    interface AsProtobufJSON {
        group?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        members?: protoPubV1Models001.Uid.AsProtobufJSON[] | null;
    }
}
/**
 * Message implementation for proto.pub.v1.group.KickMembersRes
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
 * Message implementation for proto.pub.v1.group.BanMemberReq
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
    private _group?;
    private _member?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of BanMemberReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<BanMemberReq.AsObject>);
    get group(): protoPubV1Models001.Uid | undefined;
    set group(value: protoPubV1Models001.Uid | undefined);
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
        group?: protoPubV1Models001.Uid.AsObject;
        member?: protoPubV1Models001.Uid.AsObject;
    }
    /**
     * Protobuf JSON representation for BanMemberReq
     */
    interface AsProtobufJSON {
        group?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        member?: protoPubV1Models001.Uid.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.group.BanMemberRes
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
 * Message implementation for proto.pub.v1.group.UnbanMemberReq
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
    private _group?;
    private _member?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of UnbanMemberReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<UnbanMemberReq.AsObject>);
    get group(): protoPubV1Models001.Uid | undefined;
    set group(value: protoPubV1Models001.Uid | undefined);
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
        group?: protoPubV1Models001.Uid.AsObject;
        member?: protoPubV1Models001.Uid.AsObject;
    }
    /**
     * Protobuf JSON representation for UnbanMemberReq
     */
    interface AsProtobufJSON {
        group?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        member?: protoPubV1Models001.Uid.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.group.UnbanMemberRes
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
 * Message implementation for proto.pub.v1.group.GetGroupReq
 */
export declare class GetGroupReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetGroupReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetGroupReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetGroupReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetGroupReq, _writer: BinaryWriter): void;
    private _uid?;
    private _token?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetGroupReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetGroupReq.AsObject>);
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
    toObject(): GetGroupReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetGroupReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetGroupReq.AsProtobufJSON;
}
export declare module GetGroupReq {
    /**
     * Standard JavaScript object representation for GetGroupReq
     */
    interface AsObject {
        uid?: protoPubV1Models001.Uid.AsObject;
        token?: string;
    }
    /**
     * Protobuf JSON representation for GetGroupReq
     */
    interface AsProtobufJSON {
        uid?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        token?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.group.GetGroupRes
 */
export declare class GetGroupRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetGroupRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetGroupRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetGroupRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetGroupRes, _writer: BinaryWriter): void;
    private _info?;
    private _population?;
    private _token?;
    private _pinMessages?;
    private _lastMessageId?;
    private _requesterRole?;
    private _rollToken?;
    private _lastUpdate?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetGroupRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetGroupRes.AsObject>);
    get info(): GroupInfo | undefined;
    set info(value: GroupInfo | undefined);
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
    get rollToken(): string | undefined;
    set rollToken(value: string | undefined);
    get lastUpdate(): string | undefined;
    set lastUpdate(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetGroupRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetGroupRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetGroupRes.AsProtobufJSON;
}
export declare module GetGroupRes {
    /**
     * Standard JavaScript object representation for GetGroupRes
     */
    interface AsObject {
        info?: GroupInfo.AsObject;
        population?: string;
        token?: string;
        pinMessages?: string[];
        lastMessageId?: string;
        requesterRole?: protoPubV1Models002.Role;
        rollToken?: string;
        lastUpdate?: string;
    }
    /**
     * Protobuf JSON representation for GetGroupRes
     */
    interface AsProtobufJSON {
        info?: GroupInfo.AsProtobufJSON | null;
        population?: string;
        token?: string;
        pinMessages?: string[];
        lastMessageId?: string;
        requesterRole?: string;
        rollToken?: string;
        lastUpdate?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.group.GetMembersReq
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
    private _query?;
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
    get query(): string | undefined;
    set query(value: string | undefined);
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
        query?: string;
    }
    /**
     * Protobuf JSON representation for GetMembersReq
     */
    interface AsProtobufJSON {
        uid?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        pointer?: number;
        limit?: number;
        query?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.group.GetMembersRes
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
 * Message implementation for proto.pub.v1.group.JoinGroupReq
 */
export declare class JoinGroupReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): JoinGroupReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: JoinGroupReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: JoinGroupReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: JoinGroupReq, _writer: BinaryWriter): void;
    private _group?;
    private _token?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of JoinGroupReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<JoinGroupReq.AsObject>);
    get group(): protoPubV1Models001.Uid | undefined;
    set group(value: protoPubV1Models001.Uid | undefined);
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
    toObject(): JoinGroupReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): JoinGroupReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): JoinGroupReq.AsProtobufJSON;
}
export declare module JoinGroupReq {
    /**
     * Standard JavaScript object representation for JoinGroupReq
     */
    interface AsObject {
        group?: protoPubV1Models001.Uid.AsObject;
        token?: string;
    }
    /**
     * Protobuf JSON representation for JoinGroupReq
     */
    interface AsProtobufJSON {
        group?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        token?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.group.JoinGroupRes
 */
export declare class JoinGroupRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): JoinGroupRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: JoinGroupRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: JoinGroupRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: JoinGroupRes, _writer: BinaryWriter): void;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of JoinGroupRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<JoinGroupRes.AsObject>);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): JoinGroupRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): JoinGroupRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): JoinGroupRes.AsProtobufJSON;
}
export declare module JoinGroupRes {
    /**
     * Standard JavaScript object representation for JoinGroupRes
     */
    interface AsObject {
    }
    /**
     * Protobuf JSON representation for JoinGroupRes
     */
    interface AsProtobufJSON {
    }
}
/**
 * Message implementation for proto.pub.v1.group.LeaveGroupReq
 */
export declare class LeaveGroupReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): LeaveGroupReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: LeaveGroupReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: LeaveGroupReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: LeaveGroupReq, _writer: BinaryWriter): void;
    private _group?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of LeaveGroupReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<LeaveGroupReq.AsObject>);
    get group(): protoPubV1Models001.Uid | undefined;
    set group(value: protoPubV1Models001.Uid | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): LeaveGroupReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): LeaveGroupReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): LeaveGroupReq.AsProtobufJSON;
}
export declare module LeaveGroupReq {
    /**
     * Standard JavaScript object representation for LeaveGroupReq
     */
    interface AsObject {
        group?: protoPubV1Models001.Uid.AsObject;
    }
    /**
     * Protobuf JSON representation for LeaveGroupReq
     */
    interface AsProtobufJSON {
        group?: protoPubV1Models001.Uid.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.group.LeaveGroupRes
 */
export declare class LeaveGroupRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): LeaveGroupRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: LeaveGroupRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: LeaveGroupRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: LeaveGroupRes, _writer: BinaryWriter): void;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of LeaveGroupRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<LeaveGroupRes.AsObject>);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): LeaveGroupRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): LeaveGroupRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): LeaveGroupRes.AsProtobufJSON;
}
export declare module LeaveGroupRes {
    /**
     * Standard JavaScript object representation for LeaveGroupRes
     */
    interface AsObject {
    }
    /**
     * Protobuf JSON representation for LeaveGroupRes
     */
    interface AsProtobufJSON {
    }
}
/**
 * Message implementation for proto.pub.v1.group.CreateTokenReq
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
 * Message implementation for proto.pub.v1.group.CreateTokenRes
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
 * Message implementation for proto.pub.v1.group.DeleteTokenReq
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
 * Message implementation for proto.pub.v1.group.DeleteTokenRes
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
 * Message implementation for proto.pub.v1.group.PinMessageReq
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
 * Message implementation for proto.pub.v1.group.PinMessageRes
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
 * Message implementation for proto.pub.v1.group.UnpinMessageReq
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
 * Message implementation for proto.pub.v1.group.UnpinMessageRes
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
/**
 * Message implementation for proto.pub.v1.group.LastUpdate
 */
export declare class LastUpdate implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): LastUpdate;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: LastUpdate): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: LastUpdate, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: LastUpdate, _writer: BinaryWriter): void;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of LastUpdate to deeply clone from
     */
    constructor(_value?: RecursivePartial<LastUpdate.AsObject>);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): LastUpdate.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): LastUpdate.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): LastUpdate.AsProtobufJSON;
}
export declare module LastUpdate {
    /**
     * Standard JavaScript object representation for LastUpdate
     */
    interface AsObject {
    }
    /**
     * Protobuf JSON representation for LastUpdate
     */
    interface AsProtobufJSON {
    }
}
