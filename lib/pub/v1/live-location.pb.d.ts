import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as protoPubV1Models001 from '../../pub/v1/models/uid.pb';
import * as protoPubV1Models002 from '../../pub/v1/models/location.pb';
/**
 * Message implementation for proto.pub.v1.live_location.CreateLiveLocationReq
 */
export declare class CreateLiveLocationReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): CreateLiveLocationReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CreateLiveLocationReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: CreateLiveLocationReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: CreateLiveLocationReq, _writer: BinaryWriter): void;
    private _room?;
    private _duration?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CreateLiveLocationReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<CreateLiveLocationReq.AsObject>);
    get room(): protoPubV1Models001.Uid | undefined;
    set room(value: protoPubV1Models001.Uid | undefined);
    get duration(): string | undefined;
    set duration(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): CreateLiveLocationReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): CreateLiveLocationReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): CreateLiveLocationReq.AsProtobufJSON;
}
export declare module CreateLiveLocationReq {
    /**
     * Standard JavaScript object representation for CreateLiveLocationReq
     */
    interface AsObject {
        room?: protoPubV1Models001.Uid.AsObject;
        duration?: string;
    }
    /**
     * Protobuf JSON representation for CreateLiveLocationReq
     */
    interface AsProtobufJSON {
        room?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        duration?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.live_location.CreateLiveLocationRes
 */
export declare class CreateLiveLocationRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): CreateLiveLocationRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CreateLiveLocationRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: CreateLiveLocationRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: CreateLiveLocationRes, _writer: BinaryWriter): void;
    private _uuid?;
    private _endAt?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CreateLiveLocationRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<CreateLiveLocationRes.AsObject>);
    get uuid(): string | undefined;
    set uuid(value: string | undefined);
    get endAt(): string | undefined;
    set endAt(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): CreateLiveLocationRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): CreateLiveLocationRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): CreateLiveLocationRes.AsProtobufJSON;
}
export declare module CreateLiveLocationRes {
    /**
     * Standard JavaScript object representation for CreateLiveLocationRes
     */
    interface AsObject {
        uuid?: string;
        endAt?: string;
    }
    /**
     * Protobuf JSON representation for CreateLiveLocationRes
     */
    interface AsProtobufJSON {
        uuid?: string;
        endAt?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.live_location.UpdateLocationReq
 */
export declare class UpdateLocationReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): UpdateLocationReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: UpdateLocationReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: UpdateLocationReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: UpdateLocationReq, _writer: BinaryWriter): void;
    private _location?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of UpdateLocationReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<UpdateLocationReq.AsObject>);
    get location(): protoPubV1Models002.Location | undefined;
    set location(value: protoPubV1Models002.Location | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): UpdateLocationReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): UpdateLocationReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): UpdateLocationReq.AsProtobufJSON;
}
export declare module UpdateLocationReq {
    /**
     * Standard JavaScript object representation for UpdateLocationReq
     */
    interface AsObject {
        location?: protoPubV1Models002.Location.AsObject;
    }
    /**
     * Protobuf JSON representation for UpdateLocationReq
     */
    interface AsProtobufJSON {
        location?: protoPubV1Models002.Location.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.live_location.UpdateLocationRes
 */
export declare class UpdateLocationRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): UpdateLocationRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: UpdateLocationRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: UpdateLocationRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: UpdateLocationRes, _writer: BinaryWriter): void;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of UpdateLocationRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<UpdateLocationRes.AsObject>);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): UpdateLocationRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): UpdateLocationRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): UpdateLocationRes.AsProtobufJSON;
}
export declare module UpdateLocationRes {
    /**
     * Standard JavaScript object representation for UpdateLocationRes
     */
    interface AsObject {
    }
    /**
     * Protobuf JSON representation for UpdateLocationRes
     */
    interface AsProtobufJSON {
    }
}
/**
 * Message implementation for proto.pub.v1.live_location.ShouldSendLiveLocationReq
 */
export declare class ShouldSendLiveLocationReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ShouldSendLiveLocationReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ShouldSendLiveLocationReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ShouldSendLiveLocationReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ShouldSendLiveLocationReq, _writer: BinaryWriter): void;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ShouldSendLiveLocationReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<ShouldSendLiveLocationReq.AsObject>);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ShouldSendLiveLocationReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ShouldSendLiveLocationReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ShouldSendLiveLocationReq.AsProtobufJSON;
}
export declare module ShouldSendLiveLocationReq {
    /**
     * Standard JavaScript object representation for ShouldSendLiveLocationReq
     */
    interface AsObject {
    }
    /**
     * Protobuf JSON representation for ShouldSendLiveLocationReq
     */
    interface AsProtobufJSON {
    }
}
/**
 * Message implementation for proto.pub.v1.live_location.ShouldSendLiveLocationRes
 */
export declare class ShouldSendLiveLocationRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ShouldSendLiveLocationRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ShouldSendLiveLocationRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ShouldSendLiveLocationRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ShouldSendLiveLocationRes, _writer: BinaryWriter): void;
    private _shouldSend?;
    private _endAt?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ShouldSendLiveLocationRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<ShouldSendLiveLocationRes.AsObject>);
    get shouldSend(): boolean | undefined;
    set shouldSend(value: boolean | undefined);
    get endAt(): string | undefined;
    set endAt(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ShouldSendLiveLocationRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ShouldSendLiveLocationRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ShouldSendLiveLocationRes.AsProtobufJSON;
}
export declare module ShouldSendLiveLocationRes {
    /**
     * Standard JavaScript object representation for ShouldSendLiveLocationRes
     */
    interface AsObject {
        shouldSend?: boolean;
        endAt?: string;
    }
    /**
     * Protobuf JSON representation for ShouldSendLiveLocationRes
     */
    interface AsProtobufJSON {
        shouldSend?: boolean;
        endAt?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.live_location.GetLastUpdatedLiveLocationReq
 */
export declare class GetLastUpdatedLiveLocationReq implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetLastUpdatedLiveLocationReq;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetLastUpdatedLiveLocationReq): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetLastUpdatedLiveLocationReq, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetLastUpdatedLiveLocationReq, _writer: BinaryWriter): void;
    private _uuid?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetLastUpdatedLiveLocationReq to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetLastUpdatedLiveLocationReq.AsObject>);
    get uuid(): string | undefined;
    set uuid(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetLastUpdatedLiveLocationReq.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetLastUpdatedLiveLocationReq.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetLastUpdatedLiveLocationReq.AsProtobufJSON;
}
export declare module GetLastUpdatedLiveLocationReq {
    /**
     * Standard JavaScript object representation for GetLastUpdatedLiveLocationReq
     */
    interface AsObject {
        uuid?: string;
    }
    /**
     * Protobuf JSON representation for GetLastUpdatedLiveLocationReq
     */
    interface AsProtobufJSON {
        uuid?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.live_location.GetLastUpdatedLiveLocationRes
 */
export declare class GetLastUpdatedLiveLocationRes implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetLastUpdatedLiveLocationRes;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetLastUpdatedLiveLocationRes): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetLastUpdatedLiveLocationRes, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetLastUpdatedLiveLocationRes, _writer: BinaryWriter): void;
    private _liveLocations?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetLastUpdatedLiveLocationRes to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetLastUpdatedLiveLocationRes.AsObject>);
    get liveLocations(): protoPubV1Models002.LiveLocation[] | undefined;
    set liveLocations(value: protoPubV1Models002.LiveLocation[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetLastUpdatedLiveLocationRes.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetLastUpdatedLiveLocationRes.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetLastUpdatedLiveLocationRes.AsProtobufJSON;
}
export declare module GetLastUpdatedLiveLocationRes {
    /**
     * Standard JavaScript object representation for GetLastUpdatedLiveLocationRes
     */
    interface AsObject {
        liveLocations?: protoPubV1Models002.LiveLocation.AsObject[];
    }
    /**
     * Protobuf JSON representation for GetLastUpdatedLiveLocationRes
     */
    interface AsProtobufJSON {
        liveLocations?: protoPubV1Models002.LiveLocation.AsProtobufJSON[] | null;
    }
}
