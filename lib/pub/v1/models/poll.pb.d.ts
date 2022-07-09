import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
/**
 * Message implementation for proto.pub.v1.models.Poll
 */
export declare class Poll implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): Poll;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Poll): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: Poll, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: Poll, _writer: BinaryWriter): void;
    private _uuid?;
    private _title?;
    private _options?;
    private _allowMultipleAnswers?;
    private _isAnonymous?;
    private _isQuiz?;
    private _correctAnswer?;
    private _expireTime?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Poll to deeply clone from
     */
    constructor(_value?: RecursivePartial<Poll.AsObject>);
    get uuid(): string | undefined;
    set uuid(value: string | undefined);
    get title(): string | undefined;
    set title(value: string | undefined);
    get options(): string[] | undefined;
    set options(value: string[] | undefined);
    get allowMultipleAnswers(): boolean | undefined;
    set allowMultipleAnswers(value: boolean | undefined);
    get isAnonymous(): boolean | undefined;
    set isAnonymous(value: boolean | undefined);
    get isQuiz(): boolean | undefined;
    set isQuiz(value: boolean | undefined);
    get correctAnswer(): number | undefined;
    set correctAnswer(value: number | undefined);
    get expireTime(): string | undefined;
    set expireTime(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Poll.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): Poll.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): Poll.AsProtobufJSON;
}
export declare module Poll {
    /**
     * Standard JavaScript object representation for Poll
     */
    interface AsObject {
        uuid?: string;
        title?: string;
        options?: string[];
        allowMultipleAnswers?: boolean;
        isAnonymous?: boolean;
        isQuiz?: boolean;
        correctAnswer?: number;
        expireTime?: string;
    }
    /**
     * Protobuf JSON representation for Poll
     */
    interface AsProtobufJSON {
        uuid?: string;
        title?: string;
        options?: string[];
        allowMultipleAnswers?: boolean;
        isAnonymous?: boolean;
        isQuiz?: boolean;
        correctAnswer?: number;
        expireTime?: string;
    }
}
