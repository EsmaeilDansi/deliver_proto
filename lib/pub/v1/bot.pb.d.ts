import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as protoPubV1Models001 from '../../pub/v1/models/uid.pb';
import * as protoPubV1Models002 from '../../pub/v1/models/file.pb';
import * as protoPubV1Models004 from '../../pub/v1/models/location.pb';
import * as protoPubV1Models008 from '../../pub/v1/models/form.pb';
import * as protoPubV1Models013 from '../../pub/v1/models/avatar.pb';
import * as protoPubV1Models014 from '../../pub/v1/models/message.pb';
/**
 * Message implementation for proto.pub.v1.bot.GetInfoReq
 */
export declare class GetInfoReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetInfoReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetInfoReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetInfoReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetInfoReq, _writer: BinaryWriter): void;
    private _bot?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetInfoReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetInfoReq.AsObject>);
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
    toObject(): GetInfoReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetInfoReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetInfoReq.AsProtobufJSON;
}
export declare module GetInfoReq {
    /**
     * Standard JavaScript object representation for GetInfoReq
     */
    interface AsObject {
        bot?: protoPubV1Models001.Uid.AsObject;
    }
    /**
     * Protobuf JSON representation for GetInfoReq
     */
    interface AsProtobufJSON {
        bot?: protoPubV1Models001.Uid.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.bot.GetInfoRes
 */
export declare class GetInfoRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetInfoRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetInfoRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetInfoRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetInfoRes, _writer: BinaryWriter): void;
    private _name?;
    private _description?;
    private _commands?;
    private _isOwner?;
    private _isSupportingInlineQueries?;
    private _canBeAddInGroupsAndChannels?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetInfoRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetInfoRes.AsObject>);
    get name(): string | undefined;
    set name(value: string | undefined);
    get description(): string | undefined;
    set description(value: string | undefined);
    get commands(): {
        [prop: string]: string;
    } | undefined;
    set commands(value: {
        [prop: string]: string;
    } | undefined);
    get isOwner(): boolean | undefined;
    set isOwner(value: boolean | undefined);
    get isSupportingInlineQueries(): boolean | undefined;
    set isSupportingInlineQueries(value: boolean | undefined);
    get canBeAddInGroupsAndChannels(): boolean | undefined;
    set canBeAddInGroupsAndChannels(value: boolean | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetInfoRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetInfoRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetInfoRes.AsProtobufJSON;
}
export declare module GetInfoRes {
    /**
     * Standard JavaScript object representation for GetInfoRes
     */
    interface AsObject {
        name?: string;
        description?: string;
        commands?: {
            [prop: string]: string;
        };
        isOwner?: boolean;
        isSupportingInlineQueries?: boolean;
        canBeAddInGroupsAndChannels?: boolean;
    }
    /**
     * Protobuf JSON representation for GetInfoRes
     */
    interface AsProtobufJSON {
        name?: string;
        description?: string;
        commands?: {
            [prop: string]: string;
        };
        isOwner?: boolean;
        isSupportingInlineQueries?: boolean;
        canBeAddInGroupsAndChannels?: boolean;
    }
    /**
     * Message implementation for proto.pub.v1.bot.CommandsEntry
     */
    class CommandsEntry implements GrpcMessage {
        static id: string;
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes: ByteSource): CommandsEntry;
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance: CommandsEntry): void;
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        static deserializeBinaryFromReader(_instance: CommandsEntry, _reader: BinaryReader): void;
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance: CommandsEntry, _writer: BinaryWriter): void;
        private _key?;
        private _value?;
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of CommandsEntry to deeply clone from
         */
        constructor(_value?: RecursivePartial<CommandsEntry.AsObject>);
        get key(): string | undefined;
        set key(value: string | undefined);
        get value(): string | undefined;
        set value(value: string | undefined);
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        serializeBinary(): Uint8Array;
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        toObject(): CommandsEntry.AsObject;
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        toJSON(): CommandsEntry.AsObject;
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        toProtobufJSON(options?: ToProtobufJSONOptions): CommandsEntry.AsProtobufJSON;
    }
    module CommandsEntry {
        /**
         * Standard JavaScript object representation for CommandsEntry
         */
        interface AsObject {
            key?: string;
            value?: string;
        }
        /**
         * Protobuf JSON representation for CommandsEntry
         */
        interface AsProtobufJSON {
            key?: string;
            value?: string;
        }
    }
}
/**
 * Message implementation for proto.pub.v1.bot.AddAvatarReq
 */
export declare class AddAvatarReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): AddAvatarReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: AddAvatarReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: AddAvatarReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: AddAvatarReq, _writer: BinaryWriter): void;
    private _avatar?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of AddAvatarReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<AddAvatarReq.AsObject>);
    get avatar(): protoPubV1Models013.Avatar | undefined;
    set avatar(value: protoPubV1Models013.Avatar | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): AddAvatarReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): AddAvatarReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): AddAvatarReq.AsProtobufJSON;
}
export declare module AddAvatarReq {
    /**
     * Standard JavaScript object representation for AddAvatarReq
     */
    interface AsObject {
        avatar?: protoPubV1Models013.Avatar.AsObject;
    }
    /**
     * Protobuf JSON representation for AddAvatarReq
     */
    interface AsProtobufJSON {
        avatar?: protoPubV1Models013.Avatar.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.bot.AddAvatarRes
 */
export declare class AddAvatarRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): AddAvatarRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: AddAvatarRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: AddAvatarRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: AddAvatarRes, _writer: BinaryWriter): void;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of AddAvatarRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<AddAvatarRes.AsObject>);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): AddAvatarRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): AddAvatarRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): AddAvatarRes.AsProtobufJSON;
}
export declare module AddAvatarRes {
    /**
     * Standard JavaScript object representation for AddAvatarRes
     */
    interface AsObject {
    }
    /**
     * Protobuf JSON representation for AddAvatarRes
     */
    interface AsProtobufJSON {
    }
}
/**
 * Message implementation for proto.pub.v1.bot.RemoveAvatarReq
 */
export declare class RemoveAvatarReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): RemoveAvatarReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: RemoveAvatarReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: RemoveAvatarReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: RemoveAvatarReq, _writer: BinaryWriter): void;
    private _avatar?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of RemoveAvatarReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<RemoveAvatarReq.AsObject>);
    get avatar(): protoPubV1Models013.Avatar | undefined;
    set avatar(value: protoPubV1Models013.Avatar | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): RemoveAvatarReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): RemoveAvatarReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): RemoveAvatarReq.AsProtobufJSON;
}
export declare module RemoveAvatarReq {
    /**
     * Standard JavaScript object representation for RemoveAvatarReq
     */
    interface AsObject {
        avatar?: protoPubV1Models013.Avatar.AsObject;
    }
    /**
     * Protobuf JSON representation for RemoveAvatarReq
     */
    interface AsProtobufJSON {
        avatar?: protoPubV1Models013.Avatar.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.bot.RemoveAvatarRes
 */
export declare class RemoveAvatarRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): RemoveAvatarRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: RemoveAvatarRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: RemoveAvatarRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: RemoveAvatarRes, _writer: BinaryWriter): void;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of RemoveAvatarRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<RemoveAvatarRes.AsObject>);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): RemoveAvatarRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): RemoveAvatarRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): RemoveAvatarRes.AsProtobufJSON;
}
export declare module RemoveAvatarRes {
    /**
     * Standard JavaScript object representation for RemoveAvatarRes
     */
    interface AsObject {
    }
    /**
     * Protobuf JSON representation for RemoveAvatarRes
     */
    interface AsProtobufJSON {
    }
}
/**
 * Message implementation for proto.pub.v1.bot.InlineQueryReq
 */
export declare class InlineQueryReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): InlineQueryReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: InlineQueryReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: InlineQueryReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: InlineQueryReq, _writer: BinaryWriter): void;
    private _id?;
    private _bot?;
    private _query?;
    private _offset?;
    private _chat?;
    private _location?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of InlineQueryReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<InlineQueryReq.AsObject>);
    get id(): string | undefined;
    set id(value: string | undefined);
    get bot(): protoPubV1Models001.Uid | undefined;
    set bot(value: protoPubV1Models001.Uid | undefined);
    get query(): string | undefined;
    set query(value: string | undefined);
    get offset(): string | undefined;
    set offset(value: string | undefined);
    get chat(): protoPubV1Models001.Uid | undefined;
    set chat(value: protoPubV1Models001.Uid | undefined);
    get location(): protoPubV1Models004.Location | undefined;
    set location(value: protoPubV1Models004.Location | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): InlineQueryReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): InlineQueryReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): InlineQueryReq.AsProtobufJSON;
}
export declare module InlineQueryReq {
    /**
     * Standard JavaScript object representation for InlineQueryReq
     */
    interface AsObject {
        id?: string;
        bot?: protoPubV1Models001.Uid.AsObject;
        query?: string;
        offset?: string;
        chat?: protoPubV1Models001.Uid.AsObject;
        location?: protoPubV1Models004.Location.AsObject;
    }
    /**
     * Protobuf JSON representation for InlineQueryReq
     */
    interface AsProtobufJSON {
        id?: string;
        bot?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        query?: string;
        offset?: string;
        chat?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        location?: protoPubV1Models004.Location.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.bot.InlineQueryRes
 */
export declare class InlineQueryRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): InlineQueryRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: InlineQueryRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: InlineQueryRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: InlineQueryRes, _writer: BinaryWriter): void;
    private _inlineQueryId?;
    private _results?;
    private _cacheTime?;
    private _nextOffset?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of InlineQueryRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<InlineQueryRes.AsObject>);
    get inlineQueryId(): string | undefined;
    set inlineQueryId(value: string | undefined);
    get results(): InlineQueryResult[] | undefined;
    set results(value: InlineQueryResult[] | undefined);
    get cacheTime(): string | undefined;
    set cacheTime(value: string | undefined);
    get nextOffset(): string | undefined;
    set nextOffset(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): InlineQueryRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): InlineQueryRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): InlineQueryRes.AsProtobufJSON;
}
export declare module InlineQueryRes {
    /**
     * Standard JavaScript object representation for InlineQueryRes
     */
    interface AsObject {
        inlineQueryId?: string;
        results?: InlineQueryResult.AsObject[];
        cacheTime?: string;
        nextOffset?: string;
    }
    /**
     * Protobuf JSON representation for InlineQueryRes
     */
    interface AsProtobufJSON {
        inlineQueryId?: string;
        results?: InlineQueryResult.AsProtobufJSON[] | null;
        cacheTime?: string;
        nextOffset?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.bot.InlineQueryResult
 */
export declare class InlineQueryResult implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): InlineQueryResult;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: InlineQueryResult): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: InlineQueryResult, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: InlineQueryResult, _writer: BinaryWriter): void;
    private _text?;
    private _file?;
    private _sticker?;
    private _location?;
    private _shareUid?;
    private _table?;
    private _type;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of InlineQueryResult to deeply clone from
     */
    constructor(_value?: RecursivePartial<InlineQueryResult.AsObject>);
    get text(): protoPubV1Models014.Text | undefined;
    set text(value: protoPubV1Models014.Text | undefined);
    get file(): protoPubV1Models002.File | undefined;
    set file(value: protoPubV1Models002.File | undefined);
    get sticker(): protoPubV1Models002.File | undefined;
    set sticker(value: protoPubV1Models002.File | undefined);
    get location(): protoPubV1Models004.Location | undefined;
    set location(value: protoPubV1Models004.Location | undefined);
    get shareUid(): protoPubV1Models014.ShareUid | undefined;
    set shareUid(value: protoPubV1Models014.ShareUid | undefined);
    get table(): protoPubV1Models008.Table | undefined;
    set table(value: protoPubV1Models008.Table | undefined);
    get type(): InlineQueryResult.TypeCase;
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): InlineQueryResult.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): InlineQueryResult.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): InlineQueryResult.AsProtobufJSON;
}
export declare module InlineQueryResult {
    /**
     * Standard JavaScript object representation for InlineQueryResult
     */
    interface AsObject {
        text?: protoPubV1Models014.Text.AsObject;
        file?: protoPubV1Models002.File.AsObject;
        sticker?: protoPubV1Models002.File.AsObject;
        location?: protoPubV1Models004.Location.AsObject;
        shareUid?: protoPubV1Models014.ShareUid.AsObject;
        table?: protoPubV1Models008.Table.AsObject;
    }
    /**
     * Protobuf JSON representation for InlineQueryResult
     */
    interface AsProtobufJSON {
        text?: protoPubV1Models014.Text.AsProtobufJSON | null;
        file?: protoPubV1Models002.File.AsProtobufJSON | null;
        sticker?: protoPubV1Models002.File.AsProtobufJSON | null;
        location?: protoPubV1Models004.Location.AsProtobufJSON | null;
        shareUid?: protoPubV1Models014.ShareUid.AsProtobufJSON | null;
        table?: protoPubV1Models008.Table.AsProtobufJSON | null;
    }
    enum TypeCase {
        none = 0,
        text = 1,
        file = 2,
        sticker = 3,
        location = 4,
        shareUid = 5,
        table = 6
    }
}
/**
 * Message implementation for proto.pub.v1.bot.FormQueryReq
 */
export declare class FormQueryReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): FormQueryReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: FormQueryReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: FormQueryReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: FormQueryReq, _writer: BinaryWriter): void;
    private _id?;
    private _bot?;
    private _messagePacketId?;
    private _messageId?;
    private _formId?;
    private _fieldId?;
    private _query?;
    private _offset?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of FormQueryReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<FormQueryReq.AsObject>);
    get id(): string | undefined;
    set id(value: string | undefined);
    get bot(): protoPubV1Models001.Uid | undefined;
    set bot(value: protoPubV1Models001.Uid | undefined);
    get messagePacketId(): string | undefined;
    set messagePacketId(value: string | undefined);
    get messageId(): string | undefined;
    set messageId(value: string | undefined);
    get formId(): string | undefined;
    set formId(value: string | undefined);
    get fieldId(): string | undefined;
    set fieldId(value: string | undefined);
    get query(): string | undefined;
    set query(value: string | undefined);
    get offset(): string | undefined;
    set offset(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): FormQueryReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): FormQueryReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): FormQueryReq.AsProtobufJSON;
}
export declare module FormQueryReq {
    /**
     * Standard JavaScript object representation for FormQueryReq
     */
    interface AsObject {
        id?: string;
        bot?: protoPubV1Models001.Uid.AsObject;
        messagePacketId?: string;
        messageId?: string;
        formId?: string;
        fieldId?: string;
        query?: string;
        offset?: string;
    }
    /**
     * Protobuf JSON representation for FormQueryReq
     */
    interface AsProtobufJSON {
        id?: string;
        bot?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        messagePacketId?: string;
        messageId?: string;
        formId?: string;
        fieldId?: string;
        query?: string;
        offset?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.bot.FormQueryRes
 */
export declare class FormQueryRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): FormQueryRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: FormQueryRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: FormQueryRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: FormQueryRes, _writer: BinaryWriter): void;
    private _formQueryId?;
    private _results?;
    private _cacheTime?;
    private _isPersonal?;
    private _nextOffset?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of FormQueryRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<FormQueryRes.AsObject>);
    get formQueryId(): string | undefined;
    set formQueryId(value: string | undefined);
    get results(): FormQueryResult[] | undefined;
    set results(value: FormQueryResult[] | undefined);
    get cacheTime(): string | undefined;
    set cacheTime(value: string | undefined);
    get isPersonal(): boolean | undefined;
    set isPersonal(value: boolean | undefined);
    get nextOffset(): string | undefined;
    set nextOffset(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): FormQueryRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): FormQueryRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): FormQueryRes.AsProtobufJSON;
}
export declare module FormQueryRes {
    /**
     * Standard JavaScript object representation for FormQueryRes
     */
    interface AsObject {
        formQueryId?: string;
        results?: FormQueryResult.AsObject[];
        cacheTime?: string;
        isPersonal?: boolean;
        nextOffset?: string;
    }
    /**
     * Protobuf JSON representation for FormQueryRes
     */
    interface AsProtobufJSON {
        formQueryId?: string;
        results?: FormQueryResult.AsProtobufJSON[] | null;
        cacheTime?: string;
        isPersonal?: boolean;
        nextOffset?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.bot.FormQueryResult
 */
export declare class FormQueryResult implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): FormQueryResult;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: FormQueryResult): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: FormQueryResult, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: FormQueryResult, _writer: BinaryWriter): void;
    private _text?;
    private _type;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of FormQueryResult to deeply clone from
     */
    constructor(_value?: RecursivePartial<FormQueryResult.AsObject>);
    get text(): string | undefined;
    set text(value: string | undefined);
    get type(): FormQueryResult.TypeCase;
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): FormQueryResult.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): FormQueryResult.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): FormQueryResult.AsProtobufJSON;
}
export declare module FormQueryResult {
    /**
     * Standard JavaScript object representation for FormQueryResult
     */
    interface AsObject {
        text?: string;
    }
    /**
     * Protobuf JSON representation for FormQueryResult
     */
    interface AsProtobufJSON {
        text?: string | null;
    }
    enum TypeCase {
        none = 0,
        text = 1
    }
}
/**
 * Message implementation for proto.pub.v1.bot.CallbackQueryReq
 */
export declare class CallbackQueryReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): CallbackQueryReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CallbackQueryReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: CallbackQueryReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: CallbackQueryReq, _writer: BinaryWriter): void;
    private _id?;
    private _messagePacketId?;
    private _messageId?;
    private _data?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CallbackQueryReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<CallbackQueryReq.AsObject>);
    get id(): string | undefined;
    set id(value: string | undefined);
    get messagePacketId(): string | undefined;
    set messagePacketId(value: string | undefined);
    get messageId(): string | undefined;
    set messageId(value: string | undefined);
    get data(): string | undefined;
    set data(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): CallbackQueryReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): CallbackQueryReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): CallbackQueryReq.AsProtobufJSON;
}
export declare module CallbackQueryReq {
    /**
     * Standard JavaScript object representation for CallbackQueryReq
     */
    interface AsObject {
        id?: string;
        messagePacketId?: string;
        messageId?: string;
        data?: string;
    }
    /**
     * Protobuf JSON representation for CallbackQueryReq
     */
    interface AsProtobufJSON {
        id?: string;
        messagePacketId?: string;
        messageId?: string;
        data?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.bot.CallbackQueryRes
 */
export declare class CallbackQueryRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): CallbackQueryRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CallbackQueryRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: CallbackQueryRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: CallbackQueryRes, _writer: BinaryWriter): void;
    private _callbackQueryId?;
    private _text?;
    private _showAlert?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CallbackQueryRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<CallbackQueryRes.AsObject>);
    get callbackQueryId(): string | undefined;
    set callbackQueryId(value: string | undefined);
    get text(): string | undefined;
    set text(value: string | undefined);
    get showAlert(): boolean | undefined;
    set showAlert(value: boolean | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): CallbackQueryRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): CallbackQueryRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): CallbackQueryRes.AsProtobufJSON;
}
export declare module CallbackQueryRes {
    /**
     * Standard JavaScript object representation for CallbackQueryRes
     */
    interface AsObject {
        callbackQueryId?: string;
        text?: string;
        showAlert?: boolean;
    }
    /**
     * Protobuf JSON representation for CallbackQueryRes
     */
    interface AsProtobufJSON {
        callbackQueryId?: string;
        text?: string;
        showAlert?: boolean;
    }
}
