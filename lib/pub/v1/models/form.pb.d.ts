import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
/**
 * Message implementation for proto.pub.v1.models.Form
 */
export declare class Form implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): Form;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Form): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: Form, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: Form, _writer: BinaryWriter): void;
    private _id?;
    private _title?;
    private _fields?;
    private _lockAfter?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Form to deeply clone from
     */
    constructor(_value?: RecursivePartial<Form.AsObject>);
    get id(): string | undefined;
    set id(value: string | undefined);
    get title(): string | undefined;
    set title(value: string | undefined);
    get fields(): Form.Field[] | undefined;
    set fields(value: Form.Field[] | undefined);
    get lockAfter(): string | undefined;
    set lockAfter(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Form.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): Form.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): Form.AsProtobufJSON;
}
export declare module Form {
    /**
     * Standard JavaScript object representation for Form
     */
    interface AsObject {
        id?: string;
        title?: string;
        fields?: Form.Field.AsObject[];
        lockAfter?: string;
    }
    /**
     * Protobuf JSON representation for Form
     */
    interface AsProtobufJSON {
        id?: string;
        title?: string;
        fields?: Form.Field.AsProtobufJSON[] | null;
        lockAfter?: string;
    }
    /**
     * Message implementation for proto.pub.v1.models.Form.TextField
     */
    class TextField implements GrpcMessage {
        static id: string;
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes: ByteSource): TextField;
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance: TextField): void;
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        static deserializeBinaryFromReader(_instance: TextField, _reader: BinaryReader): void;
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance: TextField, _writer: BinaryWriter): void;
        private _defaultText?;
        private _min?;
        private _max?;
        private _preValidationRegex?;
        private _placeholder?;
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of TextField to deeply clone from
         */
        constructor(_value?: RecursivePartial<TextField.AsObject>);
        get defaultText(): string | undefined;
        set defaultText(value: string | undefined);
        get min(): number | undefined;
        set min(value: number | undefined);
        get max(): number | undefined;
        set max(value: number | undefined);
        get preValidationRegex(): string | undefined;
        set preValidationRegex(value: string | undefined);
        get placeholder(): string | undefined;
        set placeholder(value: string | undefined);
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        serializeBinary(): Uint8Array;
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        toObject(): TextField.AsObject;
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        toJSON(): TextField.AsObject;
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        toProtobufJSON(options?: ToProtobufJSONOptions): TextField.AsProtobufJSON;
    }
    module TextField {
        /**
         * Standard JavaScript object representation for TextField
         */
        interface AsObject {
            defaultText?: string;
            min?: number;
            max?: number;
            preValidationRegex?: string;
            placeholder?: string;
        }
        /**
         * Protobuf JSON representation for TextField
         */
        interface AsProtobufJSON {
            defaultText?: string;
            min?: number;
            max?: number;
            preValidationRegex?: string;
            placeholder?: string;
        }
    }
    /**
     * Message implementation for proto.pub.v1.models.Form.FormattedTextField
     */
    class FormattedTextField implements GrpcMessage {
        static id: string;
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes: ByteSource): FormattedTextField;
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance: FormattedTextField): void;
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        static deserializeBinaryFromReader(_instance: FormattedTextField, _reader: BinaryReader): void;
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance: FormattedTextField, _writer: BinaryWriter): void;
        private _partitionsSizes?;
        private _defaultText?;
        private _preValidationRegex?;
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of FormattedTextField to deeply clone from
         */
        constructor(_value?: RecursivePartial<FormattedTextField.AsObject>);
        get partitionsSizes(): number[] | undefined;
        set partitionsSizes(value: number[] | undefined);
        get defaultText(): string | undefined;
        set defaultText(value: string | undefined);
        get preValidationRegex(): string | undefined;
        set preValidationRegex(value: string | undefined);
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        serializeBinary(): Uint8Array;
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        toObject(): FormattedTextField.AsObject;
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        toJSON(): FormattedTextField.AsObject;
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        toProtobufJSON(options?: ToProtobufJSONOptions): FormattedTextField.AsProtobufJSON;
    }
    module FormattedTextField {
        /**
         * Standard JavaScript object representation for FormattedTextField
         */
        interface AsObject {
            partitionsSizes?: number[];
            defaultText?: string;
            preValidationRegex?: string;
        }
        /**
         * Protobuf JSON representation for FormattedTextField
         */
        interface AsProtobufJSON {
            partitionsSizes?: number[];
            defaultText?: string;
            preValidationRegex?: string;
        }
    }
    /**
     * Message implementation for proto.pub.v1.models.Form.RichFormattedTextField
     */
    class RichFormattedTextField implements GrpcMessage {
        static id: string;
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes: ByteSource): RichFormattedTextField;
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance: RichFormattedTextField): void;
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        static deserializeBinaryFromReader(_instance: RichFormattedTextField, _reader: BinaryReader): void;
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance: RichFormattedTextField, _writer: BinaryWriter): void;
        private _partitions?;
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of RichFormattedTextField to deeply clone from
         */
        constructor(_value?: RecursivePartial<RichFormattedTextField.AsObject>);
        get partitions(): Form.TextField[] | undefined;
        set partitions(value: Form.TextField[] | undefined);
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        serializeBinary(): Uint8Array;
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        toObject(): RichFormattedTextField.AsObject;
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        toJSON(): RichFormattedTextField.AsObject;
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        toProtobufJSON(options?: ToProtobufJSONOptions): RichFormattedTextField.AsProtobufJSON;
    }
    module RichFormattedTextField {
        /**
         * Standard JavaScript object representation for RichFormattedTextField
         */
        interface AsObject {
            partitions?: Form.TextField.AsObject[];
        }
        /**
         * Protobuf JSON representation for RichFormattedTextField
         */
        interface AsProtobufJSON {
            partitions?: Form.TextField.AsProtobufJSON[] | null;
        }
    }
    /**
     * Message implementation for proto.pub.v1.models.Form.NumberField
     */
    class NumberField implements GrpcMessage {
        static id: string;
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes: ByteSource): NumberField;
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance: NumberField): void;
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        static deserializeBinaryFromReader(_instance: NumberField, _reader: BinaryReader): void;
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance: NumberField, _writer: BinaryWriter): void;
        private _defaultNumber?;
        private _min?;
        private _max?;
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of NumberField to deeply clone from
         */
        constructor(_value?: RecursivePartial<NumberField.AsObject>);
        get defaultNumber(): number | undefined;
        set defaultNumber(value: number | undefined);
        get min(): number | undefined;
        set min(value: number | undefined);
        get max(): number | undefined;
        set max(value: number | undefined);
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        serializeBinary(): Uint8Array;
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        toObject(): NumberField.AsObject;
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        toJSON(): NumberField.AsObject;
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        toProtobufJSON(options?: ToProtobufJSONOptions): NumberField.AsProtobufJSON;
    }
    module NumberField {
        /**
         * Standard JavaScript object representation for NumberField
         */
        interface AsObject {
            defaultNumber?: number;
            min?: number;
            max?: number;
        }
        /**
         * Protobuf JSON representation for NumberField
         */
        interface AsProtobufJSON {
            defaultNumber?: number;
            min?: number;
            max?: number;
        }
    }
    /**
     * Message implementation for proto.pub.v1.models.Form.DateField
     */
    class DateField implements GrpcMessage {
        static id: string;
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes: ByteSource): DateField;
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance: DateField): void;
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        static deserializeBinaryFromReader(_instance: DateField, _reader: BinaryReader): void;
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance: DateField, _writer: BinaryWriter): void;
        private _defaultDate?;
        private _isHijriShamsi?;
        private _validStartDate?;
        private _validEndDate?;
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of DateField to deeply clone from
         */
        constructor(_value?: RecursivePartial<DateField.AsObject>);
        get defaultDate(): string | undefined;
        set defaultDate(value: string | undefined);
        get isHijriShamsi(): boolean | undefined;
        set isHijriShamsi(value: boolean | undefined);
        get validStartDate(): string | undefined;
        set validStartDate(value: string | undefined);
        get validEndDate(): string | undefined;
        set validEndDate(value: string | undefined);
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        serializeBinary(): Uint8Array;
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        toObject(): DateField.AsObject;
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        toJSON(): DateField.AsObject;
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        toProtobufJSON(options?: ToProtobufJSONOptions): DateField.AsProtobufJSON;
    }
    module DateField {
        /**
         * Standard JavaScript object representation for DateField
         */
        interface AsObject {
            defaultDate?: string;
            isHijriShamsi?: boolean;
            validStartDate?: string;
            validEndDate?: string;
        }
        /**
         * Protobuf JSON representation for DateField
         */
        interface AsProtobufJSON {
            defaultDate?: string;
            isHijriShamsi?: boolean;
            validStartDate?: string;
            validEndDate?: string;
        }
    }
    /**
     * Message implementation for proto.pub.v1.models.Form.TimeField
     */
    class TimeField implements GrpcMessage {
        static id: string;
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes: ByteSource): TimeField;
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance: TimeField): void;
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        static deserializeBinaryFromReader(_instance: TimeField, _reader: BinaryReader): void;
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance: TimeField, _writer: BinaryWriter): void;
        private _defaultTime?;
        private _validStartTime?;
        private _validEndTime?;
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of TimeField to deeply clone from
         */
        constructor(_value?: RecursivePartial<TimeField.AsObject>);
        get defaultTime(): string | undefined;
        set defaultTime(value: string | undefined);
        get validStartTime(): string | undefined;
        set validStartTime(value: string | undefined);
        get validEndTime(): string | undefined;
        set validEndTime(value: string | undefined);
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        serializeBinary(): Uint8Array;
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        toObject(): TimeField.AsObject;
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        toJSON(): TimeField.AsObject;
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        toProtobufJSON(options?: ToProtobufJSONOptions): TimeField.AsProtobufJSON;
    }
    module TimeField {
        /**
         * Standard JavaScript object representation for TimeField
         */
        interface AsObject {
            defaultTime?: string;
            validStartTime?: string;
            validEndTime?: string;
        }
        /**
         * Protobuf JSON representation for TimeField
         */
        interface AsProtobufJSON {
            defaultTime?: string;
            validStartTime?: string;
            validEndTime?: string;
        }
    }
    /**
     * Message implementation for proto.pub.v1.models.Form.DataAndTimeField
     */
    class DataAndTimeField implements GrpcMessage {
        static id: string;
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes: ByteSource): DataAndTimeField;
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance: DataAndTimeField): void;
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        static deserializeBinaryFromReader(_instance: DataAndTimeField, _reader: BinaryReader): void;
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance: DataAndTimeField, _writer: BinaryWriter): void;
        private _defaultDate?;
        private _isHijriShamsi?;
        private _validStartDate?;
        private _validEndDate?;
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of DataAndTimeField to deeply clone from
         */
        constructor(_value?: RecursivePartial<DataAndTimeField.AsObject>);
        get defaultDate(): string | undefined;
        set defaultDate(value: string | undefined);
        get isHijriShamsi(): boolean | undefined;
        set isHijriShamsi(value: boolean | undefined);
        get validStartDate(): string | undefined;
        set validStartDate(value: string | undefined);
        get validEndDate(): string | undefined;
        set validEndDate(value: string | undefined);
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        serializeBinary(): Uint8Array;
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        toObject(): DataAndTimeField.AsObject;
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        toJSON(): DataAndTimeField.AsObject;
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        toProtobufJSON(options?: ToProtobufJSONOptions): DataAndTimeField.AsProtobufJSON;
    }
    module DataAndTimeField {
        /**
         * Standard JavaScript object representation for DataAndTimeField
         */
        interface AsObject {
            defaultDate?: string;
            isHijriShamsi?: boolean;
            validStartDate?: string;
            validEndDate?: string;
        }
        /**
         * Protobuf JSON representation for DataAndTimeField
         */
        interface AsProtobufJSON {
            defaultDate?: string;
            isHijriShamsi?: boolean;
            validStartDate?: string;
            validEndDate?: string;
        }
    }
    /**
     * Message implementation for proto.pub.v1.models.Form.CheckBox
     */
    class CheckBox implements GrpcMessage {
        static id: string;
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes: ByteSource): CheckBox;
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance: CheckBox): void;
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        static deserializeBinaryFromReader(_instance: CheckBox, _reader: BinaryReader): void;
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance: CheckBox, _writer: BinaryWriter): void;
        private _defaultSelected?;
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of CheckBox to deeply clone from
         */
        constructor(_value?: RecursivePartial<CheckBox.AsObject>);
        get defaultSelected(): boolean | undefined;
        set defaultSelected(value: boolean | undefined);
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        serializeBinary(): Uint8Array;
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        toObject(): CheckBox.AsObject;
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        toJSON(): CheckBox.AsObject;
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        toProtobufJSON(options?: ToProtobufJSONOptions): CheckBox.AsProtobufJSON;
    }
    module CheckBox {
        /**
         * Standard JavaScript object representation for CheckBox
         */
        interface AsObject {
            defaultSelected?: boolean;
        }
        /**
         * Protobuf JSON representation for CheckBox
         */
        interface AsProtobufJSON {
            defaultSelected?: boolean;
        }
    }
    /**
     * Message implementation for proto.pub.v1.models.Form.RadioButtonList
     */
    class RadioButtonList implements GrpcMessage {
        static id: string;
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes: ByteSource): RadioButtonList;
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance: RadioButtonList): void;
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        static deserializeBinaryFromReader(_instance: RadioButtonList, _reader: BinaryReader): void;
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance: RadioButtonList, _writer: BinaryWriter): void;
        private _values?;
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of RadioButtonList to deeply clone from
         */
        constructor(_value?: RecursivePartial<RadioButtonList.AsObject>);
        get values(): string[] | undefined;
        set values(value: string[] | undefined);
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        serializeBinary(): Uint8Array;
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        toObject(): RadioButtonList.AsObject;
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        toJSON(): RadioButtonList.AsObject;
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        toProtobufJSON(options?: ToProtobufJSONOptions): RadioButtonList.AsProtobufJSON;
    }
    module RadioButtonList {
        /**
         * Standard JavaScript object representation for RadioButtonList
         */
        interface AsObject {
            values?: string[];
        }
        /**
         * Protobuf JSON representation for RadioButtonList
         */
        interface AsProtobufJSON {
            values?: string[];
        }
    }
    /**
     * Message implementation for proto.pub.v1.models.Form.List
     */
    class List implements GrpcMessage {
        static id: string;
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes: ByteSource): List;
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance: List): void;
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        static deserializeBinaryFromReader(_instance: List, _reader: BinaryReader): void;
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance: List, _writer: BinaryWriter): void;
        private _values?;
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of List to deeply clone from
         */
        constructor(_value?: RecursivePartial<List.AsObject>);
        get values(): string[] | undefined;
        set values(value: string[] | undefined);
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        serializeBinary(): Uint8Array;
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        toObject(): List.AsObject;
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        toJSON(): List.AsObject;
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        toProtobufJSON(options?: ToProtobufJSONOptions): List.AsProtobufJSON;
    }
    module List {
        /**
         * Standard JavaScript object representation for List
         */
        interface AsObject {
            values?: string[];
        }
        /**
         * Protobuf JSON representation for List
         */
        interface AsProtobufJSON {
            values?: string[];
        }
    }
    /**
     * Message implementation for proto.pub.v1.models.Form.Field
     */
    class Field implements GrpcMessage {
        static id: string;
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes: ByteSource): Field;
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance: Field): void;
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        static deserializeBinaryFromReader(_instance: Field, _reader: BinaryReader): void;
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance: Field, _writer: BinaryWriter): void;
        private _id?;
        private _hint?;
        private _isOptional?;
        private _textField?;
        private _formattedTextField?;
        private _richFormattedTextField?;
        private _numberField?;
        private _dateField?;
        private _timeField?;
        private _dateAndTimeField?;
        private _checkbox?;
        private _radioButtonList?;
        private _list?;
        private _type;
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of Field to deeply clone from
         */
        constructor(_value?: RecursivePartial<Field.AsObject>);
        get id(): string | undefined;
        set id(value: string | undefined);
        get hint(): string | undefined;
        set hint(value: string | undefined);
        get isOptional(): boolean | undefined;
        set isOptional(value: boolean | undefined);
        get textField(): Form.TextField | undefined;
        set textField(value: Form.TextField | undefined);
        get formattedTextField(): Form.FormattedTextField | undefined;
        set formattedTextField(value: Form.FormattedTextField | undefined);
        get richFormattedTextField(): Form.RichFormattedTextField | undefined;
        set richFormattedTextField(value: Form.RichFormattedTextField | undefined);
        get numberField(): Form.NumberField | undefined;
        set numberField(value: Form.NumberField | undefined);
        get dateField(): Form.DateField | undefined;
        set dateField(value: Form.DateField | undefined);
        get timeField(): Form.TimeField | undefined;
        set timeField(value: Form.TimeField | undefined);
        get dateAndTimeField(): Form.DataAndTimeField | undefined;
        set dateAndTimeField(value: Form.DataAndTimeField | undefined);
        get checkbox(): Form.CheckBox | undefined;
        set checkbox(value: Form.CheckBox | undefined);
        get radioButtonList(): Form.RadioButtonList | undefined;
        set radioButtonList(value: Form.RadioButtonList | undefined);
        get list(): Form.List | undefined;
        set list(value: Form.List | undefined);
        get type(): Field.TypeCase;
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        serializeBinary(): Uint8Array;
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        toObject(): Field.AsObject;
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        toJSON(): Field.AsObject;
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        toProtobufJSON(options?: ToProtobufJSONOptions): Field.AsProtobufJSON;
    }
    module Field {
        /**
         * Standard JavaScript object representation for Field
         */
        interface AsObject {
            id?: string;
            hint?: string;
            isOptional?: boolean;
            textField?: Form.TextField.AsObject;
            formattedTextField?: Form.FormattedTextField.AsObject;
            richFormattedTextField?: Form.RichFormattedTextField.AsObject;
            numberField?: Form.NumberField.AsObject;
            dateField?: Form.DateField.AsObject;
            timeField?: Form.TimeField.AsObject;
            dateAndTimeField?: Form.DataAndTimeField.AsObject;
            checkbox?: Form.CheckBox.AsObject;
            radioButtonList?: Form.RadioButtonList.AsObject;
            list?: Form.List.AsObject;
        }
        /**
         * Protobuf JSON representation for Field
         */
        interface AsProtobufJSON {
            id?: string;
            hint?: string;
            isOptional?: boolean;
            textField?: Form.TextField.AsProtobufJSON | null;
            formattedTextField?: Form.FormattedTextField.AsProtobufJSON | null;
            richFormattedTextField?: Form.RichFormattedTextField.AsProtobufJSON | null;
            numberField?: Form.NumberField.AsProtobufJSON | null;
            dateField?: Form.DateField.AsProtobufJSON | null;
            timeField?: Form.TimeField.AsProtobufJSON | null;
            dateAndTimeField?: Form.DataAndTimeField.AsProtobufJSON | null;
            checkbox?: Form.CheckBox.AsProtobufJSON | null;
            radioButtonList?: Form.RadioButtonList.AsProtobufJSON | null;
            list?: Form.List.AsProtobufJSON | null;
        }
        enum TypeCase {
            none = 0,
            textField = 1,
            formattedTextField = 2,
            richFormattedTextField = 3,
            numberField = 4,
            dateField = 5,
            timeField = 6,
            dateAndTimeField = 7,
            checkbox = 8,
            radioButtonList = 9,
            list = 10
        }
    }
}
/**
 * Message implementation for proto.pub.v1.models.Buttons
 */
export declare class Buttons implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): Buttons;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Buttons): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: Buttons, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: Buttons, _writer: BinaryWriter): void;
    private _text?;
    private _buttons?;
    private _lockAfter?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Buttons to deeply clone from
     */
    constructor(_value?: RecursivePartial<Buttons.AsObject>);
    get text(): string | undefined;
    set text(value: string | undefined);
    get buttons(): string[] | undefined;
    set buttons(value: string[] | undefined);
    get lockAfter(): string | undefined;
    set lockAfter(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Buttons.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): Buttons.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): Buttons.AsProtobufJSON;
}
export declare module Buttons {
    /**
     * Standard JavaScript object representation for Buttons
     */
    interface AsObject {
        text?: string;
        buttons?: string[];
        lockAfter?: string;
    }
    /**
     * Protobuf JSON representation for Buttons
     */
    interface AsProtobufJSON {
        text?: string;
        buttons?: string[];
        lockAfter?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.models.FormResult
 */
export declare class FormResult implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): FormResult;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: FormResult): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: FormResult, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: FormResult, _writer: BinaryWriter): void;
    private _id?;
    private _values?;
    private _previewOverride?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of FormResult to deeply clone from
     */
    constructor(_value?: RecursivePartial<FormResult.AsObject>);
    get id(): string | undefined;
    set id(value: string | undefined);
    get values(): {
        [prop: string]: string;
    } | undefined;
    set values(value: {
        [prop: string]: string;
    } | undefined);
    get previewOverride(): {
        [prop: string]: string;
    } | undefined;
    set previewOverride(value: {
        [prop: string]: string;
    } | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): FormResult.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): FormResult.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): FormResult.AsProtobufJSON;
}
export declare module FormResult {
    /**
     * Standard JavaScript object representation for FormResult
     */
    interface AsObject {
        id?: string;
        values?: {
            [prop: string]: string;
        };
        previewOverride?: {
            [prop: string]: string;
        };
    }
    /**
     * Protobuf JSON representation for FormResult
     */
    interface AsProtobufJSON {
        id?: string;
        values?: {
            [prop: string]: string;
        };
        previewOverride?: {
            [prop: string]: string;
        };
    }
    /**
     * Message implementation for proto.pub.v1.models.FormResult.ValuesEntry
     */
    class ValuesEntry implements GrpcMessage {
        static id: string;
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes: ByteSource): ValuesEntry;
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance: ValuesEntry): void;
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        static deserializeBinaryFromReader(_instance: ValuesEntry, _reader: BinaryReader): void;
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance: ValuesEntry, _writer: BinaryWriter): void;
        private _key?;
        private _value?;
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of ValuesEntry to deeply clone from
         */
        constructor(_value?: RecursivePartial<ValuesEntry.AsObject>);
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
        toObject(): ValuesEntry.AsObject;
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        toJSON(): ValuesEntry.AsObject;
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        toProtobufJSON(options?: ToProtobufJSONOptions): ValuesEntry.AsProtobufJSON;
    }
    module ValuesEntry {
        /**
         * Standard JavaScript object representation for ValuesEntry
         */
        interface AsObject {
            key?: string;
            value?: string;
        }
        /**
         * Protobuf JSON representation for ValuesEntry
         */
        interface AsProtobufJSON {
            key?: string;
            value?: string;
        }
    }
    /**
     * Message implementation for proto.pub.v1.models.FormResult.PreviewOverrideEntry
     */
    class PreviewOverrideEntry implements GrpcMessage {
        static id: string;
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes: ByteSource): PreviewOverrideEntry;
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance: PreviewOverrideEntry): void;
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        static deserializeBinaryFromReader(_instance: PreviewOverrideEntry, _reader: BinaryReader): void;
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance: PreviewOverrideEntry, _writer: BinaryWriter): void;
        private _key?;
        private _value?;
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of PreviewOverrideEntry to deeply clone from
         */
        constructor(_value?: RecursivePartial<PreviewOverrideEntry.AsObject>);
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
        toObject(): PreviewOverrideEntry.AsObject;
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        toJSON(): PreviewOverrideEntry.AsObject;
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        toProtobufJSON(options?: ToProtobufJSONOptions): PreviewOverrideEntry.AsProtobufJSON;
    }
    module PreviewOverrideEntry {
        /**
         * Standard JavaScript object representation for PreviewOverrideEntry
         */
        interface AsObject {
            key?: string;
            value?: string;
        }
        /**
         * Protobuf JSON representation for PreviewOverrideEntry
         */
        interface AsProtobufJSON {
            key?: string;
            value?: string;
        }
    }
}
/**
 * Message implementation for proto.pub.v1.models.TableRow
 */
export declare class TableRow implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): TableRow;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: TableRow): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: TableRow, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: TableRow, _writer: BinaryWriter): void;
    private _columns?;
    private _highlight?;
    private _bold?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of TableRow to deeply clone from
     */
    constructor(_value?: RecursivePartial<TableRow.AsObject>);
    get columns(): string[] | undefined;
    set columns(value: string[] | undefined);
    get highlight(): boolean | undefined;
    set highlight(value: boolean | undefined);
    get bold(): boolean | undefined;
    set bold(value: boolean | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): TableRow.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): TableRow.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): TableRow.AsProtobufJSON;
}
export declare module TableRow {
    /**
     * Standard JavaScript object representation for TableRow
     */
    interface AsObject {
        columns?: string[];
        highlight?: boolean;
        bold?: boolean;
    }
    /**
     * Protobuf JSON representation for TableRow
     */
    interface AsProtobufJSON {
        columns?: string[];
        highlight?: boolean;
        bold?: boolean;
    }
}
/**
 * Message implementation for proto.pub.v1.models.Table
 */
export declare class Table implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): Table;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Table): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: Table, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: Table, _writer: BinaryWriter): void;
    private _rows?;
    private _columnWidths?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Table to deeply clone from
     */
    constructor(_value?: RecursivePartial<Table.AsObject>);
    get rows(): TableRow[] | undefined;
    set rows(value: TableRow[] | undefined);
    get columnWidths(): number[] | undefined;
    set columnWidths(value: number[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Table.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): Table.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): Table.AsProtobufJSON;
}
export declare module Table {
    /**
     * Standard JavaScript object representation for Table
     */
    interface AsObject {
        rows?: TableRow.AsObject[];
        columnWidths?: number[];
    }
    /**
     * Protobuf JSON representation for Table
     */
    interface AsProtobufJSON {
        rows?: TableRow.AsProtobufJSON[] | null;
        columnWidths?: number[];
    }
}
