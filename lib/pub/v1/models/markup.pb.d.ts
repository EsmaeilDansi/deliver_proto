import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
/**
 * Message implementation for proto.pub.v1.models.MessageMarkup
 */
export declare class MessageMarkup implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): MessageMarkup;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: MessageMarkup): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: MessageMarkup, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: MessageMarkup, _writer: BinaryWriter): void;
    private _inlineKeyboardMarkup?;
    private _replyKeyboardMarkup?;
    private _inputFieldPlaceholder?;
    private _inputSuggestions?;
    private _removeReplyKeyboardMarkup?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of MessageMarkup to deeply clone from
     */
    constructor(_value?: RecursivePartial<MessageMarkup.AsObject>);
    get inlineKeyboardMarkup(): InlineKeyboardMarkup | undefined;
    set inlineKeyboardMarkup(value: InlineKeyboardMarkup | undefined);
    get replyKeyboardMarkup(): ReplyKeyboardMarkup | undefined;
    set replyKeyboardMarkup(value: ReplyKeyboardMarkup | undefined);
    get inputFieldPlaceholder(): string | undefined;
    set inputFieldPlaceholder(value: string | undefined);
    get inputSuggestions(): string[] | undefined;
    set inputSuggestions(value: string[] | undefined);
    get removeReplyKeyboardMarkup(): boolean | undefined;
    set removeReplyKeyboardMarkup(value: boolean | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): MessageMarkup.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): MessageMarkup.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): MessageMarkup.AsProtobufJSON;
}
export declare module MessageMarkup {
    /**
     * Standard JavaScript object representation for MessageMarkup
     */
    interface AsObject {
        inlineKeyboardMarkup?: InlineKeyboardMarkup.AsObject;
        replyKeyboardMarkup?: ReplyKeyboardMarkup.AsObject;
        inputFieldPlaceholder?: string;
        inputSuggestions?: string[];
        removeReplyKeyboardMarkup?: boolean;
    }
    /**
     * Protobuf JSON representation for MessageMarkup
     */
    interface AsProtobufJSON {
        inlineKeyboardMarkup?: InlineKeyboardMarkup.AsProtobufJSON | null;
        replyKeyboardMarkup?: ReplyKeyboardMarkup.AsProtobufJSON | null;
        inputFieldPlaceholder?: string;
        inputSuggestions?: string[];
        removeReplyKeyboardMarkup?: boolean;
    }
}
/**
 * Message implementation for proto.pub.v1.models.InlineKeyboardMarkup
 */
export declare class InlineKeyboardMarkup implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): InlineKeyboardMarkup;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: InlineKeyboardMarkup): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: InlineKeyboardMarkup, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: InlineKeyboardMarkup, _writer: BinaryWriter): void;
    private _rows?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of InlineKeyboardMarkup to deeply clone from
     */
    constructor(_value?: RecursivePartial<InlineKeyboardMarkup.AsObject>);
    get rows(): InlineKeyboardRow[] | undefined;
    set rows(value: InlineKeyboardRow[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): InlineKeyboardMarkup.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): InlineKeyboardMarkup.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): InlineKeyboardMarkup.AsProtobufJSON;
}
export declare module InlineKeyboardMarkup {
    /**
     * Standard JavaScript object representation for InlineKeyboardMarkup
     */
    interface AsObject {
        rows?: InlineKeyboardRow.AsObject[];
    }
    /**
     * Protobuf JSON representation for InlineKeyboardMarkup
     */
    interface AsProtobufJSON {
        rows?: InlineKeyboardRow.AsProtobufJSON[] | null;
    }
}
/**
 * Message implementation for proto.pub.v1.models.InlineKeyboardRow
 */
export declare class InlineKeyboardRow implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): InlineKeyboardRow;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: InlineKeyboardRow): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: InlineKeyboardRow, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: InlineKeyboardRow, _writer: BinaryWriter): void;
    private _buttons?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of InlineKeyboardRow to deeply clone from
     */
    constructor(_value?: RecursivePartial<InlineKeyboardRow.AsObject>);
    get buttons(): InlineKeyboardButton[] | undefined;
    set buttons(value: InlineKeyboardButton[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): InlineKeyboardRow.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): InlineKeyboardRow.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): InlineKeyboardRow.AsProtobufJSON;
}
export declare module InlineKeyboardRow {
    /**
     * Standard JavaScript object representation for InlineKeyboardRow
     */
    interface AsObject {
        buttons?: InlineKeyboardButton.AsObject[];
    }
    /**
     * Protobuf JSON representation for InlineKeyboardRow
     */
    interface AsProtobufJSON {
        buttons?: InlineKeyboardButton.AsProtobufJSON[] | null;
    }
}
/**
 * Message implementation for proto.pub.v1.models.InlineKeyboardButton
 */
export declare class InlineKeyboardButton implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): InlineKeyboardButton;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: InlineKeyboardButton): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: InlineKeyboardButton, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: InlineKeyboardButton, _writer: BinaryWriter): void;
    private _text?;
    private _url?;
    private _callback?;
    private _type;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of InlineKeyboardButton to deeply clone from
     */
    constructor(_value?: RecursivePartial<InlineKeyboardButton.AsObject>);
    get text(): string | undefined;
    set text(value: string | undefined);
    get url(): InlineKeyboardButtonUrl | undefined;
    set url(value: InlineKeyboardButtonUrl | undefined);
    get callback(): InlineKeyboardButtonCallback | undefined;
    set callback(value: InlineKeyboardButtonCallback | undefined);
    get type(): InlineKeyboardButton.TypeCase;
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): InlineKeyboardButton.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): InlineKeyboardButton.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): InlineKeyboardButton.AsProtobufJSON;
}
export declare module InlineKeyboardButton {
    /**
     * Standard JavaScript object representation for InlineKeyboardButton
     */
    interface AsObject {
        text?: string;
        url?: InlineKeyboardButtonUrl.AsObject;
        callback?: InlineKeyboardButtonCallback.AsObject;
    }
    /**
     * Protobuf JSON representation for InlineKeyboardButton
     */
    interface AsProtobufJSON {
        text?: string;
        url?: InlineKeyboardButtonUrl.AsProtobufJSON | null;
        callback?: InlineKeyboardButtonCallback.AsProtobufJSON | null;
    }
    enum TypeCase {
        none = 0,
        url = 1,
        callback = 2
    }
}
/**
 * Message implementation for proto.pub.v1.models.InlineKeyboardButtonUrl
 */
export declare class InlineKeyboardButtonUrl implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): InlineKeyboardButtonUrl;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: InlineKeyboardButtonUrl): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: InlineKeyboardButtonUrl, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: InlineKeyboardButtonUrl, _writer: BinaryWriter): void;
    private _url?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of InlineKeyboardButtonUrl to deeply clone from
     */
    constructor(_value?: RecursivePartial<InlineKeyboardButtonUrl.AsObject>);
    get url(): string | undefined;
    set url(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): InlineKeyboardButtonUrl.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): InlineKeyboardButtonUrl.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): InlineKeyboardButtonUrl.AsProtobufJSON;
}
export declare module InlineKeyboardButtonUrl {
    /**
     * Standard JavaScript object representation for InlineKeyboardButtonUrl
     */
    interface AsObject {
        url?: string;
    }
    /**
     * Protobuf JSON representation for InlineKeyboardButtonUrl
     */
    interface AsProtobufJSON {
        url?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.models.InlineKeyboardButtonCallback
 */
export declare class InlineKeyboardButtonCallback implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): InlineKeyboardButtonCallback;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: InlineKeyboardButtonCallback): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: InlineKeyboardButtonCallback, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: InlineKeyboardButtonCallback, _writer: BinaryWriter): void;
    private _data?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of InlineKeyboardButtonCallback to deeply clone from
     */
    constructor(_value?: RecursivePartial<InlineKeyboardButtonCallback.AsObject>);
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
    toObject(): InlineKeyboardButtonCallback.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): InlineKeyboardButtonCallback.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): InlineKeyboardButtonCallback.AsProtobufJSON;
}
export declare module InlineKeyboardButtonCallback {
    /**
     * Standard JavaScript object representation for InlineKeyboardButtonCallback
     */
    interface AsObject {
        data?: string;
    }
    /**
     * Protobuf JSON representation for InlineKeyboardButtonCallback
     */
    interface AsProtobufJSON {
        data?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.models.ReplyKeyboardMarkup
 */
export declare class ReplyKeyboardMarkup implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ReplyKeyboardMarkup;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ReplyKeyboardMarkup): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ReplyKeyboardMarkup, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ReplyKeyboardMarkup, _writer: BinaryWriter): void;
    private _rows?;
    private _oneTimeKeyboard?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ReplyKeyboardMarkup to deeply clone from
     */
    constructor(_value?: RecursivePartial<ReplyKeyboardMarkup.AsObject>);
    get rows(): ReplyKeyboardRow[] | undefined;
    set rows(value: ReplyKeyboardRow[] | undefined);
    get oneTimeKeyboard(): boolean | undefined;
    set oneTimeKeyboard(value: boolean | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ReplyKeyboardMarkup.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ReplyKeyboardMarkup.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ReplyKeyboardMarkup.AsProtobufJSON;
}
export declare module ReplyKeyboardMarkup {
    /**
     * Standard JavaScript object representation for ReplyKeyboardMarkup
     */
    interface AsObject {
        rows?: ReplyKeyboardRow.AsObject[];
        oneTimeKeyboard?: boolean;
    }
    /**
     * Protobuf JSON representation for ReplyKeyboardMarkup
     */
    interface AsProtobufJSON {
        rows?: ReplyKeyboardRow.AsProtobufJSON[] | null;
        oneTimeKeyboard?: boolean;
    }
}
/**
 * Message implementation for proto.pub.v1.models.ReplyKeyboardRow
 */
export declare class ReplyKeyboardRow implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ReplyKeyboardRow;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ReplyKeyboardRow): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ReplyKeyboardRow, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ReplyKeyboardRow, _writer: BinaryWriter): void;
    private _buttons?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ReplyKeyboardRow to deeply clone from
     */
    constructor(_value?: RecursivePartial<ReplyKeyboardRow.AsObject>);
    get buttons(): ReplyKeyboardButton[] | undefined;
    set buttons(value: ReplyKeyboardButton[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ReplyKeyboardRow.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ReplyKeyboardRow.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ReplyKeyboardRow.AsProtobufJSON;
}
export declare module ReplyKeyboardRow {
    /**
     * Standard JavaScript object representation for ReplyKeyboardRow
     */
    interface AsObject {
        buttons?: ReplyKeyboardButton.AsObject[];
    }
    /**
     * Protobuf JSON representation for ReplyKeyboardRow
     */
    interface AsProtobufJSON {
        buttons?: ReplyKeyboardButton.AsProtobufJSON[] | null;
    }
}
/**
 * Message implementation for proto.pub.v1.models.ReplyKeyboardButton
 */
export declare class ReplyKeyboardButton implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ReplyKeyboardButton;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ReplyKeyboardButton): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ReplyKeyboardButton, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ReplyKeyboardButton, _writer: BinaryWriter): void;
    private _text?;
    private _sendOnClick?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ReplyKeyboardButton to deeply clone from
     */
    constructor(_value?: RecursivePartial<ReplyKeyboardButton.AsObject>);
    get text(): string | undefined;
    set text(value: string | undefined);
    get sendOnClick(): boolean | undefined;
    set sendOnClick(value: boolean | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ReplyKeyboardButton.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ReplyKeyboardButton.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ReplyKeyboardButton.AsProtobufJSON;
}
export declare module ReplyKeyboardButton {
    /**
     * Standard JavaScript object representation for ReplyKeyboardButton
     */
    interface AsObject {
        text?: string;
        sendOnClick?: boolean;
    }
    /**
     * Protobuf JSON representation for ReplyKeyboardButton
     */
    interface AsProtobufJSON {
        text?: string;
        sendOnClick?: boolean;
    }
}
