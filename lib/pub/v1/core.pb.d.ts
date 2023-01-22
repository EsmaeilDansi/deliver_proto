import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as protoPubV1Models000 from '../../pub/v1/models/uid.pb';
import * as protoPubV1Models003 from '../../pub/v1/models/location.pb';
import * as protoPubV1Models010 from '../../pub/v1/models/call.pb';
import * as protoPubV1Models013 from '../../pub/v1/models/message.pb';
import * as protoPubV1Models014 from '../../pub/v1/models/seen.pb';
import * as protoPubV1Models015 from '../../pub/v1/models/activity.pb';
import * as protoPubV1Models016 from '../../pub/v1/models/room-metadata.pb';
/**
 * Message implementation for proto.pub.v1.core.EstablishServerSideStreamReq
 */
export declare class EstablishServerSideStreamReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): EstablishServerSideStreamReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: EstablishServerSideStreamReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: EstablishServerSideStreamReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: EstablishServerSideStreamReq, _writer: BinaryWriter): void;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of EstablishServerSideStreamReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<EstablishServerSideStreamReq.AsObject>);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): EstablishServerSideStreamReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): EstablishServerSideStreamReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): EstablishServerSideStreamReq.AsProtobufJSON;
}
export declare module EstablishServerSideStreamReq {
    /**
     * Standard JavaScript object representation for EstablishServerSideStreamReq
     */
    interface AsObject {
    }
    /**
     * Protobuf JSON representation for EstablishServerSideStreamReq
     */
    interface AsProtobufJSON {
    }
}
/**
 * Message implementation for proto.pub.v1.core.SendClientPacketRes
 */
export declare class SendClientPacketRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): SendClientPacketRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: SendClientPacketRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: SendClientPacketRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: SendClientPacketRes, _writer: BinaryWriter): void;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of SendClientPacketRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<SendClientPacketRes.AsObject>);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): SendClientPacketRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): SendClientPacketRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): SendClientPacketRes.AsProtobufJSON;
}
export declare module SendClientPacketRes {
    /**
     * Standard JavaScript object representation for SendClientPacketRes
     */
    interface AsObject {
    }
    /**
     * Protobuf JSON representation for SendClientPacketRes
     */
    interface AsProtobufJSON {
    }
}
/**
 * Message implementation for proto.pub.v1.core.Ping
 */
export declare class Ping implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): Ping;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Ping): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: Ping, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: Ping, _writer: BinaryWriter): void;
    private _lastPongTime?;
    private _clientIsActive?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Ping to deeply clone from
     */
    constructor(_value?: RecursivePartial<Ping.AsObject>);
    get lastPongTime(): string | undefined;
    set lastPongTime(value: string | undefined);
    get clientIsActive(): boolean | undefined;
    set clientIsActive(value: boolean | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Ping.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): Ping.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): Ping.AsProtobufJSON;
}
export declare module Ping {
    /**
     * Standard JavaScript object representation for Ping
     */
    interface AsObject {
        lastPongTime?: string;
        clientIsActive?: boolean;
    }
    /**
     * Protobuf JSON representation for Ping
     */
    interface AsProtobufJSON {
        lastPongTime?: string;
        clientIsActive?: boolean;
    }
}
/**
 * Message implementation for proto.pub.v1.core.Pong
 */
export declare class Pong implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): Pong;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Pong): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: Pong, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: Pong, _writer: BinaryWriter): void;
    private _packetId?;
    private _serverTime?;
    private _streamInputCapabilityStatus?;
    private _lastMessageDeliveryAck?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Pong to deeply clone from
     */
    constructor(_value?: RecursivePartial<Pong.AsObject>);
    get packetId(): string | undefined;
    set packetId(value: string | undefined);
    get serverTime(): string | undefined;
    set serverTime(value: string | undefined);
    get streamInputCapabilityStatus(): Pong.StreamInputCapabilityStatus | undefined;
    set streamInputCapabilityStatus(value: Pong.StreamInputCapabilityStatus | undefined);
    get lastMessageDeliveryAck(): protoPubV1Models013.MessageDeliveryAck | undefined;
    set lastMessageDeliveryAck(value: protoPubV1Models013.MessageDeliveryAck | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Pong.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): Pong.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): Pong.AsProtobufJSON;
}
export declare module Pong {
    /**
     * Standard JavaScript object representation for Pong
     */
    interface AsObject {
        packetId?: string;
        serverTime?: string;
        streamInputCapabilityStatus?: Pong.StreamInputCapabilityStatus;
        lastMessageDeliveryAck?: protoPubV1Models013.MessageDeliveryAck.AsObject;
    }
    /**
     * Protobuf JSON representation for Pong
     */
    interface AsProtobufJSON {
        packetId?: string;
        serverTime?: string;
        streamInputCapabilityStatus?: string;
        lastMessageDeliveryAck?: protoPubV1Models013.MessageDeliveryAck.AsProtobufJSON | null;
    }
    enum StreamInputCapabilityStatus {
        HIGH_AVAILABILITY = 0,
        NOT_AVAILABLE = 1,
        LOW_AVAILABILITY = 2
    }
}
/**
 * Message implementation for proto.pub.v1.core.ExpletivePacket
 */
export declare class ExpletivePacket implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ExpletivePacket;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ExpletivePacket): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ExpletivePacket, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ExpletivePacket, _writer: BinaryWriter): void;
    private _body?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ExpletivePacket to deeply clone from
     */
    constructor(_value?: RecursivePartial<ExpletivePacket.AsObject>);
    get body(): string | undefined;
    set body(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ExpletivePacket.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ExpletivePacket.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ExpletivePacket.AsProtobufJSON;
}
export declare module ExpletivePacket {
    /**
     * Standard JavaScript object representation for ExpletivePacket
     */
    interface AsObject {
        body?: string;
    }
    /**
     * Protobuf JSON representation for ExpletivePacket
     */
    interface AsProtobufJSON {
        body?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.core.RoomPresenceTypeChanged
 */
export declare class RoomPresenceTypeChanged implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): RoomPresenceTypeChanged;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: RoomPresenceTypeChanged): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: RoomPresenceTypeChanged, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: RoomPresenceTypeChanged, _writer: BinaryWriter): void;
    private _uid?;
    private _presenceType?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of RoomPresenceTypeChanged to deeply clone from
     */
    constructor(_value?: RecursivePartial<RoomPresenceTypeChanged.AsObject>);
    get uid(): protoPubV1Models000.Uid | undefined;
    set uid(value: protoPubV1Models000.Uid | undefined);
    get presenceType(): protoPubV1Models016.PresenceType | undefined;
    set presenceType(value: protoPubV1Models016.PresenceType | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): RoomPresenceTypeChanged.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): RoomPresenceTypeChanged.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): RoomPresenceTypeChanged.AsProtobufJSON;
}
export declare module RoomPresenceTypeChanged {
    /**
     * Standard JavaScript object representation for RoomPresenceTypeChanged
     */
    interface AsObject {
        uid?: protoPubV1Models000.Uid.AsObject;
        presenceType?: protoPubV1Models016.PresenceType;
    }
    /**
     * Protobuf JSON representation for RoomPresenceTypeChanged
     */
    interface AsProtobufJSON {
        uid?: protoPubV1Models000.Uid.AsProtobufJSON | null;
        presenceType?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.core.ErrorOnPacket
 */
export declare class ErrorOnPacket implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ErrorOnPacket;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ErrorOnPacket): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ErrorOnPacket, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ErrorOnPacket, _writer: BinaryWriter): void;
    private _packetId?;
    private _error?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ErrorOnPacket to deeply clone from
     */
    constructor(_value?: RecursivePartial<ErrorOnPacket.AsObject>);
    get packetId(): string | undefined;
    set packetId(value: string | undefined);
    get error(): ErrorOnPacket.Error | undefined;
    set error(value: ErrorOnPacket.Error | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ErrorOnPacket.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ErrorOnPacket.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ErrorOnPacket.AsProtobufJSON;
}
export declare module ErrorOnPacket {
    /**
     * Standard JavaScript object representation for ErrorOnPacket
     */
    interface AsObject {
        packetId?: string;
        error?: ErrorOnPacket.Error;
    }
    /**
     * Protobuf JSON representation for ErrorOnPacket
     */
    interface AsProtobufJSON {
        packetId?: string;
        error?: string;
    }
    enum Error {
        UNKNOWN = 0,
        BAD_REQUEST = 1,
        UNAUTHENTICATED = 2,
        PERMISSION_DENIED = 3,
        NOT_FOUND = 4,
        CONFLICT = 5,
        RESOURCE_EXHAUSTED = 6,
        INTERNAL = 7,
        UNIMPLEMENTED = 8,
        UNAVAILABLE = 9,
        DEADLINE_EXCEEDED = 10
    }
}
/**
 * Message implementation for proto.pub.v1.core.ServerPacket
 */
export declare class ServerPacket implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ServerPacket;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ServerPacket): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ServerPacket, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ServerPacket, _writer: BinaryWriter): void;
    private _error?;
    private _message?;
    private _seen?;
    private _activity?;
    private _roomPresenceTypeChanged?;
    private _liveLocationStatusChanged?;
    private _pong?;
    private _messageDeliveryAck?;
    private _callOffer?;
    private _callAnswer?;
    private _expletivePacket?;
    private _packetPadding?;
    private _type;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ServerPacket to deeply clone from
     */
    constructor(_value?: RecursivePartial<ServerPacket.AsObject>);
    get error(): ErrorOnPacket | undefined;
    set error(value: ErrorOnPacket | undefined);
    get message(): protoPubV1Models013.Message | undefined;
    set message(value: protoPubV1Models013.Message | undefined);
    get seen(): protoPubV1Models014.Seen | undefined;
    set seen(value: protoPubV1Models014.Seen | undefined);
    get activity(): protoPubV1Models015.Activity | undefined;
    set activity(value: protoPubV1Models015.Activity | undefined);
    get roomPresenceTypeChanged(): RoomPresenceTypeChanged | undefined;
    set roomPresenceTypeChanged(value: RoomPresenceTypeChanged | undefined);
    get liveLocationStatusChanged(): protoPubV1Models003.LiveLocation | undefined;
    set liveLocationStatusChanged(value: protoPubV1Models003.LiveLocation | undefined);
    get pong(): Pong | undefined;
    set pong(value: Pong | undefined);
    get messageDeliveryAck(): protoPubV1Models013.MessageDeliveryAck | undefined;
    set messageDeliveryAck(value: protoPubV1Models013.MessageDeliveryAck | undefined);
    get callOffer(): protoPubV1Models010.CallOffer | undefined;
    set callOffer(value: protoPubV1Models010.CallOffer | undefined);
    get callAnswer(): protoPubV1Models010.CallAnswer | undefined;
    set callAnswer(value: protoPubV1Models010.CallAnswer | undefined);
    get expletivePacket(): ExpletivePacket | undefined;
    set expletivePacket(value: ExpletivePacket | undefined);
    get packetPadding(): string | undefined;
    set packetPadding(value: string | undefined);
    get type(): ServerPacket.TypeCase;
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ServerPacket.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ServerPacket.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ServerPacket.AsProtobufJSON;
}
export declare module ServerPacket {
    /**
     * Standard JavaScript object representation for ServerPacket
     */
    interface AsObject {
        error?: ErrorOnPacket.AsObject;
        message?: protoPubV1Models013.Message.AsObject;
        seen?: protoPubV1Models014.Seen.AsObject;
        activity?: protoPubV1Models015.Activity.AsObject;
        roomPresenceTypeChanged?: RoomPresenceTypeChanged.AsObject;
        liveLocationStatusChanged?: protoPubV1Models003.LiveLocation.AsObject;
        pong?: Pong.AsObject;
        messageDeliveryAck?: protoPubV1Models013.MessageDeliveryAck.AsObject;
        callOffer?: protoPubV1Models010.CallOffer.AsObject;
        callAnswer?: protoPubV1Models010.CallAnswer.AsObject;
        expletivePacket?: ExpletivePacket.AsObject;
        packetPadding?: string;
    }
    /**
     * Protobuf JSON representation for ServerPacket
     */
    interface AsProtobufJSON {
        error?: ErrorOnPacket.AsProtobufJSON | null;
        message?: protoPubV1Models013.Message.AsProtobufJSON | null;
        seen?: protoPubV1Models014.Seen.AsProtobufJSON | null;
        activity?: protoPubV1Models015.Activity.AsProtobufJSON | null;
        roomPresenceTypeChanged?: RoomPresenceTypeChanged.AsProtobufJSON | null;
        liveLocationStatusChanged?: protoPubV1Models003.LiveLocation.AsProtobufJSON | null;
        pong?: Pong.AsProtobufJSON | null;
        messageDeliveryAck?: protoPubV1Models013.MessageDeliveryAck.AsProtobufJSON | null;
        callOffer?: protoPubV1Models010.CallOffer.AsProtobufJSON | null;
        callAnswer?: protoPubV1Models010.CallAnswer.AsProtobufJSON | null;
        expletivePacket?: ExpletivePacket.AsProtobufJSON | null;
        packetPadding?: string;
    }
    enum TypeCase {
        none = 0,
        error = 1,
        message = 2,
        seen = 3,
        activity = 4,
        roomPresenceTypeChanged = 5,
        liveLocationStatusChanged = 6,
        pong = 7,
        messageDeliveryAck = 8,
        callOffer = 9,
        callAnswer = 10,
        expletivePacket = 11
    }
}
/**
 * Message implementation for proto.pub.v1.core.ClientPacket
 */
export declare class ClientPacket implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ClientPacket;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ClientPacket): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ClientPacket, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ClientPacket, _writer: BinaryWriter): void;
    private _id?;
    private _message?;
    private _seen?;
    private _activity?;
    private _ping?;
    private _callOffer?;
    private _callAnswer?;
    private _type;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ClientPacket to deeply clone from
     */
    constructor(_value?: RecursivePartial<ClientPacket.AsObject>);
    get id(): string | undefined;
    set id(value: string | undefined);
    get message(): protoPubV1Models013.MessageByClient | undefined;
    set message(value: protoPubV1Models013.MessageByClient | undefined);
    get seen(): protoPubV1Models014.SeenByClient | undefined;
    set seen(value: protoPubV1Models014.SeenByClient | undefined);
    get activity(): protoPubV1Models015.ActivityByClient | undefined;
    set activity(value: protoPubV1Models015.ActivityByClient | undefined);
    get ping(): Ping | undefined;
    set ping(value: Ping | undefined);
    get callOffer(): protoPubV1Models010.CallOfferByClient | undefined;
    set callOffer(value: protoPubV1Models010.CallOfferByClient | undefined);
    get callAnswer(): protoPubV1Models010.CallAnswerByClient | undefined;
    set callAnswer(value: protoPubV1Models010.CallAnswerByClient | undefined);
    get type(): ClientPacket.TypeCase;
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ClientPacket.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ClientPacket.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ClientPacket.AsProtobufJSON;
}
export declare module ClientPacket {
    /**
     * Standard JavaScript object representation for ClientPacket
     */
    interface AsObject {
        id?: string;
        message?: protoPubV1Models013.MessageByClient.AsObject;
        seen?: protoPubV1Models014.SeenByClient.AsObject;
        activity?: protoPubV1Models015.ActivityByClient.AsObject;
        ping?: Ping.AsObject;
        callOffer?: protoPubV1Models010.CallOfferByClient.AsObject;
        callAnswer?: protoPubV1Models010.CallAnswerByClient.AsObject;
    }
    /**
     * Protobuf JSON representation for ClientPacket
     */
    interface AsProtobufJSON {
        id?: string;
        message?: protoPubV1Models013.MessageByClient.AsProtobufJSON | null;
        seen?: protoPubV1Models014.SeenByClient.AsProtobufJSON | null;
        activity?: protoPubV1Models015.ActivityByClient.AsProtobufJSON | null;
        ping?: Ping.AsProtobufJSON | null;
        callOffer?: protoPubV1Models010.CallOfferByClient.AsProtobufJSON | null;
        callAnswer?: protoPubV1Models010.CallAnswerByClient.AsProtobufJSON | null;
    }
    enum TypeCase {
        none = 0,
        message = 1,
        seen = 2,
        activity = 3,
        ping = 4,
        callOffer = 5,
        callAnswer = 6
    }
}
