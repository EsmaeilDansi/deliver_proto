import { BinaryReader, BinaryWriter } from 'google-protobuf';
/**
 * Message implementation for proto.pub.v1.models.Form
 */
export class Form {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Form to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.id = _value.id;
        this.title = _value.title;
        this.fields = (_value.fields || []).map(m => new Form.Field(m));
        this.lockAfter = _value.lockAfter;
        Form.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new Form();
        Form.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.id = _instance.id || '';
        _instance.title = _instance.title || '';
        _instance.fields = _instance.fields || [];
        _instance.lockAfter = _instance.lockAfter || '0';
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.id = _reader.readString();
                    break;
                case 2:
                    _instance.title = _reader.readString();
                    break;
                case 3:
                    const messageInitializer3 = new Form.Field();
                    _reader.readMessage(messageInitializer3, Form.Field.deserializeBinaryFromReader);
                    (_instance.fields = _instance.fields || []).push(messageInitializer3);
                    break;
                case 4:
                    _instance.lockAfter = _reader.readInt64String();
                    break;
                default:
                    _reader.skipField();
            }
        }
        Form.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.id) {
            _writer.writeString(1, _instance.id);
        }
        if (_instance.title) {
            _writer.writeString(2, _instance.title);
        }
        if (_instance.fields && _instance.fields.length) {
            _writer.writeRepeatedMessage(3, _instance.fields, Form.Field.serializeBinaryToWriter);
        }
        if (_instance.lockAfter) {
            _writer.writeInt64String(4, _instance.lockAfter);
        }
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }
    get fields() {
        return this._fields;
    }
    set fields(value) {
        this._fields = value;
    }
    get lockAfter() {
        return this._lockAfter;
    }
    set lockAfter(value) {
        this._lockAfter = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        Form.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            id: this.id,
            title: this.title,
            fields: (this.fields || []).map(m => m.toObject()),
            lockAfter: this.lockAfter
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            id: this.id,
            title: this.title,
            fields: (this.fields || []).map(m => m.toProtobufJSON(options)),
            lockAfter: this.lockAfter
        };
    }
}
Form.id = 'proto.pub.v1.models.Form';
(function (Form) {
    /**
     * Message implementation for proto.pub.v1.models.Form.TextField
     */
    class TextField {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of TextField to deeply clone from
         */
        constructor(_value) {
            _value = _value || {};
            this.defaultText = _value.defaultText;
            this.min = _value.min;
            this.max = _value.max;
            this.preValidationRegex = _value.preValidationRegex;
            this.placeholder = _value.placeholder;
            TextField.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes) {
            const instance = new TextField();
            TextField.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
            return instance;
        }
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance) {
            _instance.defaultText = _instance.defaultText || '';
            _instance.min = _instance.min || 0;
            _instance.max = _instance.max || 0;
            _instance.preValidationRegex = _instance.preValidationRegex || '';
            _instance.placeholder = _instance.placeholder || '';
        }
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        static deserializeBinaryFromReader(_instance, _reader) {
            while (_reader.nextField()) {
                if (_reader.isEndGroup())
                    break;
                switch (_reader.getFieldNumber()) {
                    case 1:
                        _instance.defaultText = _reader.readString();
                        break;
                    case 2:
                        _instance.min = _reader.readInt32();
                        break;
                    case 3:
                        _instance.max = _reader.readInt32();
                        break;
                    case 4:
                        _instance.preValidationRegex = _reader.readString();
                        break;
                    case 5:
                        _instance.placeholder = _reader.readString();
                        break;
                    default:
                        _reader.skipField();
                }
            }
            TextField.refineValues(_instance);
        }
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance, _writer) {
            if (_instance.defaultText) {
                _writer.writeString(1, _instance.defaultText);
            }
            if (_instance.min) {
                _writer.writeInt32(2, _instance.min);
            }
            if (_instance.max) {
                _writer.writeInt32(3, _instance.max);
            }
            if (_instance.preValidationRegex) {
                _writer.writeString(4, _instance.preValidationRegex);
            }
            if (_instance.placeholder) {
                _writer.writeString(5, _instance.placeholder);
            }
        }
        get defaultText() {
            return this._defaultText;
        }
        set defaultText(value) {
            this._defaultText = value;
        }
        get min() {
            return this._min;
        }
        set min(value) {
            this._min = value;
        }
        get max() {
            return this._max;
        }
        set max(value) {
            this._max = value;
        }
        get preValidationRegex() {
            return this._preValidationRegex;
        }
        set preValidationRegex(value) {
            this._preValidationRegex = value;
        }
        get placeholder() {
            return this._placeholder;
        }
        set placeholder(value) {
            this._placeholder = value;
        }
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        serializeBinary() {
            const writer = new BinaryWriter();
            TextField.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        }
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        toObject() {
            return {
                defaultText: this.defaultText,
                min: this.min,
                max: this.max,
                preValidationRegex: this.preValidationRegex,
                placeholder: this.placeholder
            };
        }
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        toJSON() {
            return this.toObject();
        }
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        toProtobufJSON(
        // @ts-ignore
        options) {
            return {
                defaultText: this.defaultText,
                min: this.min,
                max: this.max,
                preValidationRegex: this.preValidationRegex,
                placeholder: this.placeholder
            };
        }
    }
    TextField.id = 'proto.pub.v1.models.Form.TextField';
    Form.TextField = TextField;
    /**
     * Message implementation for proto.pub.v1.models.Form.FormattedTextField
     */
    class FormattedTextField {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of FormattedTextField to deeply clone from
         */
        constructor(_value) {
            _value = _value || {};
            this.partitionsSizes = (_value.partitionsSizes || []).slice();
            this.defaultText = _value.defaultText;
            this.preValidationRegex = _value.preValidationRegex;
            FormattedTextField.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes) {
            const instance = new FormattedTextField();
            FormattedTextField.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
            return instance;
        }
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance) {
            _instance.partitionsSizes = _instance.partitionsSizes || [];
            _instance.defaultText = _instance.defaultText || '';
            _instance.preValidationRegex = _instance.preValidationRegex || '';
        }
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        static deserializeBinaryFromReader(_instance, _reader) {
            while (_reader.nextField()) {
                if (_reader.isEndGroup())
                    break;
                switch (_reader.getFieldNumber()) {
                    case 1:
                        (_instance.partitionsSizes = _instance.partitionsSizes || []).push(...(_reader.readPackedInt32() || []));
                        break;
                    case 2:
                        _instance.defaultText = _reader.readString();
                        break;
                    case 4:
                        _instance.preValidationRegex = _reader.readString();
                        break;
                    default:
                        _reader.skipField();
                }
            }
            FormattedTextField.refineValues(_instance);
        }
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance, _writer) {
            if (_instance.partitionsSizes && _instance.partitionsSizes.length) {
                _writer.writePackedInt32(1, _instance.partitionsSizes);
            }
            if (_instance.defaultText) {
                _writer.writeString(2, _instance.defaultText);
            }
            if (_instance.preValidationRegex) {
                _writer.writeString(4, _instance.preValidationRegex);
            }
        }
        get partitionsSizes() {
            return this._partitionsSizes;
        }
        set partitionsSizes(value) {
            this._partitionsSizes = value;
        }
        get defaultText() {
            return this._defaultText;
        }
        set defaultText(value) {
            this._defaultText = value;
        }
        get preValidationRegex() {
            return this._preValidationRegex;
        }
        set preValidationRegex(value) {
            this._preValidationRegex = value;
        }
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        serializeBinary() {
            const writer = new BinaryWriter();
            FormattedTextField.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        }
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        toObject() {
            return {
                partitionsSizes: (this.partitionsSizes || []).slice(),
                defaultText: this.defaultText,
                preValidationRegex: this.preValidationRegex
            };
        }
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        toJSON() {
            return this.toObject();
        }
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        toProtobufJSON(
        // @ts-ignore
        options) {
            return {
                partitionsSizes: (this.partitionsSizes || []).slice(),
                defaultText: this.defaultText,
                preValidationRegex: this.preValidationRegex
            };
        }
    }
    FormattedTextField.id = 'proto.pub.v1.models.Form.FormattedTextField';
    Form.FormattedTextField = FormattedTextField;
    /**
     * Message implementation for proto.pub.v1.models.Form.RichFormattedTextField
     */
    class RichFormattedTextField {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of RichFormattedTextField to deeply clone from
         */
        constructor(_value) {
            _value = _value || {};
            this.partitions = (_value.partitions || []).map(m => new Form.TextField(m));
            RichFormattedTextField.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes) {
            const instance = new RichFormattedTextField();
            RichFormattedTextField.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
            return instance;
        }
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance) {
            _instance.partitions = _instance.partitions || [];
        }
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        static deserializeBinaryFromReader(_instance, _reader) {
            while (_reader.nextField()) {
                if (_reader.isEndGroup())
                    break;
                switch (_reader.getFieldNumber()) {
                    case 1:
                        const messageInitializer1 = new Form.TextField();
                        _reader.readMessage(messageInitializer1, Form.TextField.deserializeBinaryFromReader);
                        (_instance.partitions = _instance.partitions || []).push(messageInitializer1);
                        break;
                    default:
                        _reader.skipField();
                }
            }
            RichFormattedTextField.refineValues(_instance);
        }
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance, _writer) {
            if (_instance.partitions && _instance.partitions.length) {
                _writer.writeRepeatedMessage(1, _instance.partitions, Form.TextField.serializeBinaryToWriter);
            }
        }
        get partitions() {
            return this._partitions;
        }
        set partitions(value) {
            this._partitions = value;
        }
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        serializeBinary() {
            const writer = new BinaryWriter();
            RichFormattedTextField.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        }
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        toObject() {
            return {
                partitions: (this.partitions || []).map(m => m.toObject())
            };
        }
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        toJSON() {
            return this.toObject();
        }
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        toProtobufJSON(
        // @ts-ignore
        options) {
            return {
                partitions: (this.partitions || []).map(m => m.toProtobufJSON(options))
            };
        }
    }
    RichFormattedTextField.id = 'proto.pub.v1.models.Form.RichFormattedTextField';
    Form.RichFormattedTextField = RichFormattedTextField;
    /**
     * Message implementation for proto.pub.v1.models.Form.NumberField
     */
    class NumberField {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of NumberField to deeply clone from
         */
        constructor(_value) {
            _value = _value || {};
            this.defaultNumber = _value.defaultNumber;
            this.min = _value.min;
            this.max = _value.max;
            NumberField.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes) {
            const instance = new NumberField();
            NumberField.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
            return instance;
        }
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance) {
            _instance.defaultNumber = _instance.defaultNumber || 0;
            _instance.min = _instance.min || 0;
            _instance.max = _instance.max || 0;
        }
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        static deserializeBinaryFromReader(_instance, _reader) {
            while (_reader.nextField()) {
                if (_reader.isEndGroup())
                    break;
                switch (_reader.getFieldNumber()) {
                    case 1:
                        _instance.defaultNumber = _reader.readDouble();
                        break;
                    case 2:
                        _instance.min = _reader.readDouble();
                        break;
                    case 3:
                        _instance.max = _reader.readDouble();
                        break;
                    default:
                        _reader.skipField();
                }
            }
            NumberField.refineValues(_instance);
        }
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance, _writer) {
            if (_instance.defaultNumber) {
                _writer.writeDouble(1, _instance.defaultNumber);
            }
            if (_instance.min) {
                _writer.writeDouble(2, _instance.min);
            }
            if (_instance.max) {
                _writer.writeDouble(3, _instance.max);
            }
        }
        get defaultNumber() {
            return this._defaultNumber;
        }
        set defaultNumber(value) {
            this._defaultNumber = value;
        }
        get min() {
            return this._min;
        }
        set min(value) {
            this._min = value;
        }
        get max() {
            return this._max;
        }
        set max(value) {
            this._max = value;
        }
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        serializeBinary() {
            const writer = new BinaryWriter();
            NumberField.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        }
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        toObject() {
            return {
                defaultNumber: this.defaultNumber,
                min: this.min,
                max: this.max
            };
        }
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        toJSON() {
            return this.toObject();
        }
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        toProtobufJSON(
        // @ts-ignore
        options) {
            return {
                defaultNumber: this.defaultNumber,
                min: this.min,
                max: this.max
            };
        }
    }
    NumberField.id = 'proto.pub.v1.models.Form.NumberField';
    Form.NumberField = NumberField;
    /**
     * Message implementation for proto.pub.v1.models.Form.DateField
     */
    class DateField {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of DateField to deeply clone from
         */
        constructor(_value) {
            _value = _value || {};
            this.defaultDate = _value.defaultDate;
            this.isHijriShamsi = _value.isHijriShamsi;
            this.validStartDate = _value.validStartDate;
            this.validEndDate = _value.validEndDate;
            DateField.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes) {
            const instance = new DateField();
            DateField.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
            return instance;
        }
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance) {
            _instance.defaultDate = _instance.defaultDate || '';
            _instance.isHijriShamsi = _instance.isHijriShamsi || false;
            _instance.validStartDate = _instance.validStartDate || '';
            _instance.validEndDate = _instance.validEndDate || '';
        }
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        static deserializeBinaryFromReader(_instance, _reader) {
            while (_reader.nextField()) {
                if (_reader.isEndGroup())
                    break;
                switch (_reader.getFieldNumber()) {
                    case 1:
                        _instance.defaultDate = _reader.readString();
                        break;
                    case 2:
                        _instance.isHijriShamsi = _reader.readBool();
                        break;
                    case 3:
                        _instance.validStartDate = _reader.readString();
                        break;
                    case 4:
                        _instance.validEndDate = _reader.readString();
                        break;
                    default:
                        _reader.skipField();
                }
            }
            DateField.refineValues(_instance);
        }
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance, _writer) {
            if (_instance.defaultDate) {
                _writer.writeString(1, _instance.defaultDate);
            }
            if (_instance.isHijriShamsi) {
                _writer.writeBool(2, _instance.isHijriShamsi);
            }
            if (_instance.validStartDate) {
                _writer.writeString(3, _instance.validStartDate);
            }
            if (_instance.validEndDate) {
                _writer.writeString(4, _instance.validEndDate);
            }
        }
        get defaultDate() {
            return this._defaultDate;
        }
        set defaultDate(value) {
            this._defaultDate = value;
        }
        get isHijriShamsi() {
            return this._isHijriShamsi;
        }
        set isHijriShamsi(value) {
            this._isHijriShamsi = value;
        }
        get validStartDate() {
            return this._validStartDate;
        }
        set validStartDate(value) {
            this._validStartDate = value;
        }
        get validEndDate() {
            return this._validEndDate;
        }
        set validEndDate(value) {
            this._validEndDate = value;
        }
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        serializeBinary() {
            const writer = new BinaryWriter();
            DateField.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        }
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        toObject() {
            return {
                defaultDate: this.defaultDate,
                isHijriShamsi: this.isHijriShamsi,
                validStartDate: this.validStartDate,
                validEndDate: this.validEndDate
            };
        }
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        toJSON() {
            return this.toObject();
        }
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        toProtobufJSON(
        // @ts-ignore
        options) {
            return {
                defaultDate: this.defaultDate,
                isHijriShamsi: this.isHijriShamsi,
                validStartDate: this.validStartDate,
                validEndDate: this.validEndDate
            };
        }
    }
    DateField.id = 'proto.pub.v1.models.Form.DateField';
    Form.DateField = DateField;
    /**
     * Message implementation for proto.pub.v1.models.Form.TimeField
     */
    class TimeField {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of TimeField to deeply clone from
         */
        constructor(_value) {
            _value = _value || {};
            this.defaultTime = _value.defaultTime;
            this.validStartTime = _value.validStartTime;
            this.validEndTime = _value.validEndTime;
            TimeField.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes) {
            const instance = new TimeField();
            TimeField.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
            return instance;
        }
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance) {
            _instance.defaultTime = _instance.defaultTime || '';
            _instance.validStartTime = _instance.validStartTime || '';
            _instance.validEndTime = _instance.validEndTime || '';
        }
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        static deserializeBinaryFromReader(_instance, _reader) {
            while (_reader.nextField()) {
                if (_reader.isEndGroup())
                    break;
                switch (_reader.getFieldNumber()) {
                    case 2:
                        _instance.defaultTime = _reader.readString();
                        break;
                    case 1:
                        _instance.validStartTime = _reader.readString();
                        break;
                    case 3:
                        _instance.validEndTime = _reader.readString();
                        break;
                    default:
                        _reader.skipField();
                }
            }
            TimeField.refineValues(_instance);
        }
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance, _writer) {
            if (_instance.defaultTime) {
                _writer.writeString(2, _instance.defaultTime);
            }
            if (_instance.validStartTime) {
                _writer.writeString(1, _instance.validStartTime);
            }
            if (_instance.validEndTime) {
                _writer.writeString(3, _instance.validEndTime);
            }
        }
        get defaultTime() {
            return this._defaultTime;
        }
        set defaultTime(value) {
            this._defaultTime = value;
        }
        get validStartTime() {
            return this._validStartTime;
        }
        set validStartTime(value) {
            this._validStartTime = value;
        }
        get validEndTime() {
            return this._validEndTime;
        }
        set validEndTime(value) {
            this._validEndTime = value;
        }
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        serializeBinary() {
            const writer = new BinaryWriter();
            TimeField.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        }
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        toObject() {
            return {
                defaultTime: this.defaultTime,
                validStartTime: this.validStartTime,
                validEndTime: this.validEndTime
            };
        }
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        toJSON() {
            return this.toObject();
        }
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        toProtobufJSON(
        // @ts-ignore
        options) {
            return {
                defaultTime: this.defaultTime,
                validStartTime: this.validStartTime,
                validEndTime: this.validEndTime
            };
        }
    }
    TimeField.id = 'proto.pub.v1.models.Form.TimeField';
    Form.TimeField = TimeField;
    /**
     * Message implementation for proto.pub.v1.models.Form.DataAndTimeField
     */
    class DataAndTimeField {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of DataAndTimeField to deeply clone from
         */
        constructor(_value) {
            _value = _value || {};
            this.defaultDate = _value.defaultDate;
            this.isHijriShamsi = _value.isHijriShamsi;
            this.validStartDate = _value.validStartDate;
            this.validEndDate = _value.validEndDate;
            DataAndTimeField.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes) {
            const instance = new DataAndTimeField();
            DataAndTimeField.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
            return instance;
        }
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance) {
            _instance.defaultDate = _instance.defaultDate || '';
            _instance.isHijriShamsi = _instance.isHijriShamsi || false;
            _instance.validStartDate = _instance.validStartDate || '';
            _instance.validEndDate = _instance.validEndDate || '';
        }
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        static deserializeBinaryFromReader(_instance, _reader) {
            while (_reader.nextField()) {
                if (_reader.isEndGroup())
                    break;
                switch (_reader.getFieldNumber()) {
                    case 1:
                        _instance.defaultDate = _reader.readString();
                        break;
                    case 2:
                        _instance.isHijriShamsi = _reader.readBool();
                        break;
                    case 3:
                        _instance.validStartDate = _reader.readString();
                        break;
                    case 4:
                        _instance.validEndDate = _reader.readString();
                        break;
                    default:
                        _reader.skipField();
                }
            }
            DataAndTimeField.refineValues(_instance);
        }
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance, _writer) {
            if (_instance.defaultDate) {
                _writer.writeString(1, _instance.defaultDate);
            }
            if (_instance.isHijriShamsi) {
                _writer.writeBool(2, _instance.isHijriShamsi);
            }
            if (_instance.validStartDate) {
                _writer.writeString(3, _instance.validStartDate);
            }
            if (_instance.validEndDate) {
                _writer.writeString(4, _instance.validEndDate);
            }
        }
        get defaultDate() {
            return this._defaultDate;
        }
        set defaultDate(value) {
            this._defaultDate = value;
        }
        get isHijriShamsi() {
            return this._isHijriShamsi;
        }
        set isHijriShamsi(value) {
            this._isHijriShamsi = value;
        }
        get validStartDate() {
            return this._validStartDate;
        }
        set validStartDate(value) {
            this._validStartDate = value;
        }
        get validEndDate() {
            return this._validEndDate;
        }
        set validEndDate(value) {
            this._validEndDate = value;
        }
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        serializeBinary() {
            const writer = new BinaryWriter();
            DataAndTimeField.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        }
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        toObject() {
            return {
                defaultDate: this.defaultDate,
                isHijriShamsi: this.isHijriShamsi,
                validStartDate: this.validStartDate,
                validEndDate: this.validEndDate
            };
        }
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        toJSON() {
            return this.toObject();
        }
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        toProtobufJSON(
        // @ts-ignore
        options) {
            return {
                defaultDate: this.defaultDate,
                isHijriShamsi: this.isHijriShamsi,
                validStartDate: this.validStartDate,
                validEndDate: this.validEndDate
            };
        }
    }
    DataAndTimeField.id = 'proto.pub.v1.models.Form.DataAndTimeField';
    Form.DataAndTimeField = DataAndTimeField;
    /**
     * Message implementation for proto.pub.v1.models.Form.CheckBox
     */
    class CheckBox {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of CheckBox to deeply clone from
         */
        constructor(_value) {
            _value = _value || {};
            this.defaultSelected = _value.defaultSelected;
            CheckBox.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes) {
            const instance = new CheckBox();
            CheckBox.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
            return instance;
        }
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance) {
            _instance.defaultSelected = _instance.defaultSelected || false;
        }
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        static deserializeBinaryFromReader(_instance, _reader) {
            while (_reader.nextField()) {
                if (_reader.isEndGroup())
                    break;
                switch (_reader.getFieldNumber()) {
                    case 1:
                        _instance.defaultSelected = _reader.readBool();
                        break;
                    default:
                        _reader.skipField();
                }
            }
            CheckBox.refineValues(_instance);
        }
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance, _writer) {
            if (_instance.defaultSelected) {
                _writer.writeBool(1, _instance.defaultSelected);
            }
        }
        get defaultSelected() {
            return this._defaultSelected;
        }
        set defaultSelected(value) {
            this._defaultSelected = value;
        }
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        serializeBinary() {
            const writer = new BinaryWriter();
            CheckBox.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        }
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        toObject() {
            return {
                defaultSelected: this.defaultSelected
            };
        }
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        toJSON() {
            return this.toObject();
        }
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        toProtobufJSON(
        // @ts-ignore
        options) {
            return {
                defaultSelected: this.defaultSelected
            };
        }
    }
    CheckBox.id = 'proto.pub.v1.models.Form.CheckBox';
    Form.CheckBox = CheckBox;
    /**
     * Message implementation for proto.pub.v1.models.Form.RadioButtonList
     */
    class RadioButtonList {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of RadioButtonList to deeply clone from
         */
        constructor(_value) {
            _value = _value || {};
            this.values = (_value.values || []).slice();
            this.multiSelection = _value.multiSelection;
            RadioButtonList.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes) {
            const instance = new RadioButtonList();
            RadioButtonList.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
            return instance;
        }
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance) {
            _instance.values = _instance.values || [];
            _instance.multiSelection = _instance.multiSelection || false;
        }
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        static deserializeBinaryFromReader(_instance, _reader) {
            while (_reader.nextField()) {
                if (_reader.isEndGroup())
                    break;
                switch (_reader.getFieldNumber()) {
                    case 1:
                        (_instance.values = _instance.values || []).push(_reader.readString());
                        break;
                    case 2:
                        _instance.multiSelection = _reader.readBool();
                        break;
                    default:
                        _reader.skipField();
                }
            }
            RadioButtonList.refineValues(_instance);
        }
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance, _writer) {
            if (_instance.values && _instance.values.length) {
                _writer.writeRepeatedString(1, _instance.values);
            }
            if (_instance.multiSelection) {
                _writer.writeBool(2, _instance.multiSelection);
            }
        }
        get values() {
            return this._values;
        }
        set values(value) {
            this._values = value;
        }
        get multiSelection() {
            return this._multiSelection;
        }
        set multiSelection(value) {
            this._multiSelection = value;
        }
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        serializeBinary() {
            const writer = new BinaryWriter();
            RadioButtonList.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        }
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        toObject() {
            return {
                values: (this.values || []).slice(),
                multiSelection: this.multiSelection
            };
        }
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        toJSON() {
            return this.toObject();
        }
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        toProtobufJSON(
        // @ts-ignore
        options) {
            return {
                values: (this.values || []).slice(),
                multiSelection: this.multiSelection
            };
        }
    }
    RadioButtonList.id = 'proto.pub.v1.models.Form.RadioButtonList';
    Form.RadioButtonList = RadioButtonList;
    /**
     * Message implementation for proto.pub.v1.models.Form.List
     */
    class List {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of List to deeply clone from
         */
        constructor(_value) {
            _value = _value || {};
            this.values = (_value.values || []).slice();
            this.multiSelection = _value.multiSelection;
            List.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes) {
            const instance = new List();
            List.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
            return instance;
        }
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance) {
            _instance.values = _instance.values || [];
            _instance.multiSelection = _instance.multiSelection || false;
        }
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        static deserializeBinaryFromReader(_instance, _reader) {
            while (_reader.nextField()) {
                if (_reader.isEndGroup())
                    break;
                switch (_reader.getFieldNumber()) {
                    case 1:
                        (_instance.values = _instance.values || []).push(_reader.readString());
                        break;
                    case 2:
                        _instance.multiSelection = _reader.readBool();
                        break;
                    default:
                        _reader.skipField();
                }
            }
            List.refineValues(_instance);
        }
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance, _writer) {
            if (_instance.values && _instance.values.length) {
                _writer.writeRepeatedString(1, _instance.values);
            }
            if (_instance.multiSelection) {
                _writer.writeBool(2, _instance.multiSelection);
            }
        }
        get values() {
            return this._values;
        }
        set values(value) {
            this._values = value;
        }
        get multiSelection() {
            return this._multiSelection;
        }
        set multiSelection(value) {
            this._multiSelection = value;
        }
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        serializeBinary() {
            const writer = new BinaryWriter();
            List.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        }
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        toObject() {
            return {
                values: (this.values || []).slice(),
                multiSelection: this.multiSelection
            };
        }
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        toJSON() {
            return this.toObject();
        }
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        toProtobufJSON(
        // @ts-ignore
        options) {
            return {
                values: (this.values || []).slice(),
                multiSelection: this.multiSelection
            };
        }
    }
    List.id = 'proto.pub.v1.models.Form.List';
    Form.List = List;
    /**
     * Message implementation for proto.pub.v1.models.Form.Field
     */
    class Field {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of Field to deeply clone from
         */
        constructor(_value) {
            this._type = Field.TypeCase.none;
            _value = _value || {};
            this.id = _value.id;
            this.hint = _value.hint;
            this.isOptional = _value.isOptional;
            this.textField = _value.textField
                ? new Form.TextField(_value.textField)
                : undefined;
            this.formattedTextField = _value.formattedTextField
                ? new Form.FormattedTextField(_value.formattedTextField)
                : undefined;
            this.richFormattedTextField = _value.richFormattedTextField
                ? new Form.RichFormattedTextField(_value.richFormattedTextField)
                : undefined;
            this.numberField = _value.numberField
                ? new Form.NumberField(_value.numberField)
                : undefined;
            this.dateField = _value.dateField
                ? new Form.DateField(_value.dateField)
                : undefined;
            this.timeField = _value.timeField
                ? new Form.TimeField(_value.timeField)
                : undefined;
            this.dateAndTimeField = _value.dateAndTimeField
                ? new Form.DataAndTimeField(_value.dateAndTimeField)
                : undefined;
            this.checkbox = _value.checkbox
                ? new Form.CheckBox(_value.checkbox)
                : undefined;
            this.radioButtonList = _value.radioButtonList
                ? new Form.RadioButtonList(_value.radioButtonList)
                : undefined;
            this.list = _value.list ? new Form.List(_value.list) : undefined;
            Field.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes) {
            const instance = new Field();
            Field.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
            return instance;
        }
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance) {
            _instance.id = _instance.id || '';
            _instance.hint = _instance.hint || '';
            _instance.isOptional = _instance.isOptional || false;
        }
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        static deserializeBinaryFromReader(_instance, _reader) {
            while (_reader.nextField()) {
                if (_reader.isEndGroup())
                    break;
                switch (_reader.getFieldNumber()) {
                    case 1:
                        _instance.id = _reader.readString();
                        break;
                    case 2:
                        _instance.hint = _reader.readString();
                        break;
                    case 3:
                        _instance.isOptional = _reader.readBool();
                        break;
                    case 4:
                        _instance.textField = new Form.TextField();
                        _reader.readMessage(_instance.textField, Form.TextField.deserializeBinaryFromReader);
                        break;
                    case 11:
                        _instance.formattedTextField = new Form.FormattedTextField();
                        _reader.readMessage(_instance.formattedTextField, Form.FormattedTextField.deserializeBinaryFromReader);
                        break;
                    case 12:
                        _instance.richFormattedTextField = new Form.RichFormattedTextField();
                        _reader.readMessage(_instance.richFormattedTextField, Form.RichFormattedTextField.deserializeBinaryFromReader);
                        break;
                    case 5:
                        _instance.numberField = new Form.NumberField();
                        _reader.readMessage(_instance.numberField, Form.NumberField.deserializeBinaryFromReader);
                        break;
                    case 6:
                        _instance.dateField = new Form.DateField();
                        _reader.readMessage(_instance.dateField, Form.DateField.deserializeBinaryFromReader);
                        break;
                    case 7:
                        _instance.timeField = new Form.TimeField();
                        _reader.readMessage(_instance.timeField, Form.TimeField.deserializeBinaryFromReader);
                        break;
                    case 13:
                        _instance.dateAndTimeField = new Form.DataAndTimeField();
                        _reader.readMessage(_instance.dateAndTimeField, Form.DataAndTimeField.deserializeBinaryFromReader);
                        break;
                    case 8:
                        _instance.checkbox = new Form.CheckBox();
                        _reader.readMessage(_instance.checkbox, Form.CheckBox.deserializeBinaryFromReader);
                        break;
                    case 9:
                        _instance.radioButtonList = new Form.RadioButtonList();
                        _reader.readMessage(_instance.radioButtonList, Form.RadioButtonList.deserializeBinaryFromReader);
                        break;
                    case 10:
                        _instance.list = new Form.List();
                        _reader.readMessage(_instance.list, Form.List.deserializeBinaryFromReader);
                        break;
                    default:
                        _reader.skipField();
                }
            }
            Field.refineValues(_instance);
        }
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance, _writer) {
            if (_instance.id) {
                _writer.writeString(1, _instance.id);
            }
            if (_instance.hint) {
                _writer.writeString(2, _instance.hint);
            }
            if (_instance.isOptional) {
                _writer.writeBool(3, _instance.isOptional);
            }
            if (_instance.textField) {
                _writer.writeMessage(4, _instance.textField, Form.TextField.serializeBinaryToWriter);
            }
            if (_instance.formattedTextField) {
                _writer.writeMessage(11, _instance.formattedTextField, Form.FormattedTextField.serializeBinaryToWriter);
            }
            if (_instance.richFormattedTextField) {
                _writer.writeMessage(12, _instance.richFormattedTextField, Form.RichFormattedTextField.serializeBinaryToWriter);
            }
            if (_instance.numberField) {
                _writer.writeMessage(5, _instance.numberField, Form.NumberField.serializeBinaryToWriter);
            }
            if (_instance.dateField) {
                _writer.writeMessage(6, _instance.dateField, Form.DateField.serializeBinaryToWriter);
            }
            if (_instance.timeField) {
                _writer.writeMessage(7, _instance.timeField, Form.TimeField.serializeBinaryToWriter);
            }
            if (_instance.dateAndTimeField) {
                _writer.writeMessage(13, _instance.dateAndTimeField, Form.DataAndTimeField.serializeBinaryToWriter);
            }
            if (_instance.checkbox) {
                _writer.writeMessage(8, _instance.checkbox, Form.CheckBox.serializeBinaryToWriter);
            }
            if (_instance.radioButtonList) {
                _writer.writeMessage(9, _instance.radioButtonList, Form.RadioButtonList.serializeBinaryToWriter);
            }
            if (_instance.list) {
                _writer.writeMessage(10, _instance.list, Form.List.serializeBinaryToWriter);
            }
        }
        get id() {
            return this._id;
        }
        set id(value) {
            this._id = value;
        }
        get hint() {
            return this._hint;
        }
        set hint(value) {
            this._hint = value;
        }
        get isOptional() {
            return this._isOptional;
        }
        set isOptional(value) {
            this._isOptional = value;
        }
        get textField() {
            return this._textField;
        }
        set textField(value) {
            if (value !== undefined && value !== null) {
                this._formattedTextField = this._richFormattedTextField = this._numberField = this._dateField = this._timeField = this._dateAndTimeField = this._checkbox = this._radioButtonList = this._list = undefined;
                this._type = Field.TypeCase.textField;
            }
            this._textField = value;
        }
        get formattedTextField() {
            return this._formattedTextField;
        }
        set formattedTextField(value) {
            if (value !== undefined && value !== null) {
                this._textField = this._richFormattedTextField = this._numberField = this._dateField = this._timeField = this._dateAndTimeField = this._checkbox = this._radioButtonList = this._list = undefined;
                this._type = Field.TypeCase.formattedTextField;
            }
            this._formattedTextField = value;
        }
        get richFormattedTextField() {
            return this._richFormattedTextField;
        }
        set richFormattedTextField(value) {
            if (value !== undefined && value !== null) {
                this._textField = this._formattedTextField = this._numberField = this._dateField = this._timeField = this._dateAndTimeField = this._checkbox = this._radioButtonList = this._list = undefined;
                this._type = Field.TypeCase.richFormattedTextField;
            }
            this._richFormattedTextField = value;
        }
        get numberField() {
            return this._numberField;
        }
        set numberField(value) {
            if (value !== undefined && value !== null) {
                this._textField = this._formattedTextField = this._richFormattedTextField = this._dateField = this._timeField = this._dateAndTimeField = this._checkbox = this._radioButtonList = this._list = undefined;
                this._type = Field.TypeCase.numberField;
            }
            this._numberField = value;
        }
        get dateField() {
            return this._dateField;
        }
        set dateField(value) {
            if (value !== undefined && value !== null) {
                this._textField = this._formattedTextField = this._richFormattedTextField = this._numberField = this._timeField = this._dateAndTimeField = this._checkbox = this._radioButtonList = this._list = undefined;
                this._type = Field.TypeCase.dateField;
            }
            this._dateField = value;
        }
        get timeField() {
            return this._timeField;
        }
        set timeField(value) {
            if (value !== undefined && value !== null) {
                this._textField = this._formattedTextField = this._richFormattedTextField = this._numberField = this._dateField = this._dateAndTimeField = this._checkbox = this._radioButtonList = this._list = undefined;
                this._type = Field.TypeCase.timeField;
            }
            this._timeField = value;
        }
        get dateAndTimeField() {
            return this._dateAndTimeField;
        }
        set dateAndTimeField(value) {
            if (value !== undefined && value !== null) {
                this._textField = this._formattedTextField = this._richFormattedTextField = this._numberField = this._dateField = this._timeField = this._checkbox = this._radioButtonList = this._list = undefined;
                this._type = Field.TypeCase.dateAndTimeField;
            }
            this._dateAndTimeField = value;
        }
        get checkbox() {
            return this._checkbox;
        }
        set checkbox(value) {
            if (value !== undefined && value !== null) {
                this._textField = this._formattedTextField = this._richFormattedTextField = this._numberField = this._dateField = this._timeField = this._dateAndTimeField = this._radioButtonList = this._list = undefined;
                this._type = Field.TypeCase.checkbox;
            }
            this._checkbox = value;
        }
        get radioButtonList() {
            return this._radioButtonList;
        }
        set radioButtonList(value) {
            if (value !== undefined && value !== null) {
                this._textField = this._formattedTextField = this._richFormattedTextField = this._numberField = this._dateField = this._timeField = this._dateAndTimeField = this._checkbox = this._list = undefined;
                this._type = Field.TypeCase.radioButtonList;
            }
            this._radioButtonList = value;
        }
        get list() {
            return this._list;
        }
        set list(value) {
            if (value !== undefined && value !== null) {
                this._textField = this._formattedTextField = this._richFormattedTextField = this._numberField = this._dateField = this._timeField = this._dateAndTimeField = this._checkbox = this._radioButtonList = undefined;
                this._type = Field.TypeCase.list;
            }
            this._list = value;
        }
        get type() {
            return this._type;
        }
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        serializeBinary() {
            const writer = new BinaryWriter();
            Field.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        }
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        toObject() {
            return {
                id: this.id,
                hint: this.hint,
                isOptional: this.isOptional,
                textField: this.textField ? this.textField.toObject() : undefined,
                formattedTextField: this.formattedTextField
                    ? this.formattedTextField.toObject()
                    : undefined,
                richFormattedTextField: this.richFormattedTextField
                    ? this.richFormattedTextField.toObject()
                    : undefined,
                numberField: this.numberField ? this.numberField.toObject() : undefined,
                dateField: this.dateField ? this.dateField.toObject() : undefined,
                timeField: this.timeField ? this.timeField.toObject() : undefined,
                dateAndTimeField: this.dateAndTimeField
                    ? this.dateAndTimeField.toObject()
                    : undefined,
                checkbox: this.checkbox ? this.checkbox.toObject() : undefined,
                radioButtonList: this.radioButtonList
                    ? this.radioButtonList.toObject()
                    : undefined,
                list: this.list ? this.list.toObject() : undefined
            };
        }
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        toJSON() {
            return this.toObject();
        }
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        toProtobufJSON(
        // @ts-ignore
        options) {
            return {
                id: this.id,
                hint: this.hint,
                isOptional: this.isOptional,
                textField: this.textField
                    ? this.textField.toProtobufJSON(options)
                    : null,
                formattedTextField: this.formattedTextField
                    ? this.formattedTextField.toProtobufJSON(options)
                    : null,
                richFormattedTextField: this.richFormattedTextField
                    ? this.richFormattedTextField.toProtobufJSON(options)
                    : null,
                numberField: this.numberField
                    ? this.numberField.toProtobufJSON(options)
                    : null,
                dateField: this.dateField
                    ? this.dateField.toProtobufJSON(options)
                    : null,
                timeField: this.timeField
                    ? this.timeField.toProtobufJSON(options)
                    : null,
                dateAndTimeField: this.dateAndTimeField
                    ? this.dateAndTimeField.toProtobufJSON(options)
                    : null,
                checkbox: this.checkbox ? this.checkbox.toProtobufJSON(options) : null,
                radioButtonList: this.radioButtonList
                    ? this.radioButtonList.toProtobufJSON(options)
                    : null,
                list: this.list ? this.list.toProtobufJSON(options) : null
            };
        }
    }
    Field.id = 'proto.pub.v1.models.Form.Field';
    Form.Field = Field;
    (function (Field) {
        let TypeCase;
        (function (TypeCase) {
            TypeCase[TypeCase["none"] = 0] = "none";
            TypeCase[TypeCase["textField"] = 1] = "textField";
            TypeCase[TypeCase["formattedTextField"] = 2] = "formattedTextField";
            TypeCase[TypeCase["richFormattedTextField"] = 3] = "richFormattedTextField";
            TypeCase[TypeCase["numberField"] = 4] = "numberField";
            TypeCase[TypeCase["dateField"] = 5] = "dateField";
            TypeCase[TypeCase["timeField"] = 6] = "timeField";
            TypeCase[TypeCase["dateAndTimeField"] = 7] = "dateAndTimeField";
            TypeCase[TypeCase["checkbox"] = 8] = "checkbox";
            TypeCase[TypeCase["radioButtonList"] = 9] = "radioButtonList";
            TypeCase[TypeCase["list"] = 10] = "list";
        })(TypeCase = Field.TypeCase || (Field.TypeCase = {}));
    })(Field = Form.Field || (Form.Field = {}));
})(Form || (Form = {}));
/**
 * Message implementation for proto.pub.v1.models.Buttons
 */
export class Buttons {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Buttons to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.text = _value.text;
        this.buttons = (_value.buttons || []).slice();
        this.lockAfter = _value.lockAfter;
        Buttons.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new Buttons();
        Buttons.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.text = _instance.text || '';
        _instance.buttons = _instance.buttons || [];
        _instance.lockAfter = _instance.lockAfter || '0';
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 3:
                    _instance.text = _reader.readString();
                    break;
                case 1:
                    (_instance.buttons = _instance.buttons || []).push(_reader.readString());
                    break;
                case 2:
                    _instance.lockAfter = _reader.readInt64String();
                    break;
                default:
                    _reader.skipField();
            }
        }
        Buttons.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.text) {
            _writer.writeString(3, _instance.text);
        }
        if (_instance.buttons && _instance.buttons.length) {
            _writer.writeRepeatedString(1, _instance.buttons);
        }
        if (_instance.lockAfter) {
            _writer.writeInt64String(2, _instance.lockAfter);
        }
    }
    get text() {
        return this._text;
    }
    set text(value) {
        this._text = value;
    }
    get buttons() {
        return this._buttons;
    }
    set buttons(value) {
        this._buttons = value;
    }
    get lockAfter() {
        return this._lockAfter;
    }
    set lockAfter(value) {
        this._lockAfter = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        Buttons.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            text: this.text,
            buttons: (this.buttons || []).slice(),
            lockAfter: this.lockAfter
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            text: this.text,
            buttons: (this.buttons || []).slice(),
            lockAfter: this.lockAfter
        };
    }
}
Buttons.id = 'proto.pub.v1.models.Buttons';
/**
 * Message implementation for proto.pub.v1.models.FormResult
 */
export class FormResult {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of FormResult to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.id = _value.id;
        (this.values = _value.values
            ? Object.keys(_value.values).reduce((r, k) => ({ ...r, [k]: _value.values[k] }), {})
            : {}),
            (this.previewOverride = _value.previewOverride
                ? Object.keys(_value.previewOverride).reduce((r, k) => ({ ...r, [k]: _value.previewOverride[k] }), {})
                : {}),
            FormResult.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new FormResult();
        FormResult.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.id = _instance.id || '';
        _instance.values = _instance.values || {};
        _instance.previewOverride = _instance.previewOverride || {};
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.id = _reader.readString();
                    break;
                case 2:
                    const msg_2 = {};
                    _reader.readMessage(msg_2, FormResult.ValuesEntry.deserializeBinaryFromReader);
                    _instance.values = _instance.values || {};
                    _instance.values[msg_2.key] = msg_2.value;
                    break;
                case 3:
                    const msg_3 = {};
                    _reader.readMessage(msg_3, FormResult.PreviewOverrideEntry.deserializeBinaryFromReader);
                    _instance.previewOverride = _instance.previewOverride || {};
                    _instance.previewOverride[msg_3.key] = msg_3.value;
                    break;
                default:
                    _reader.skipField();
            }
        }
        FormResult.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.id) {
            _writer.writeString(1, _instance.id);
        }
        if (!!_instance.values) {
            const keys_2 = Object.keys(_instance.values);
            if (keys_2.length) {
                const repeated_2 = keys_2
                    .map(key => ({ key: key, value: _instance.values[key] }))
                    .reduce((r, v) => [...r, v], []);
                _writer.writeRepeatedMessage(2, repeated_2, FormResult.ValuesEntry.serializeBinaryToWriter);
            }
        }
        if (!!_instance.previewOverride) {
            const keys_3 = Object.keys(_instance.previewOverride);
            if (keys_3.length) {
                const repeated_3 = keys_3
                    .map(key => ({
                    key: key,
                    value: _instance.previewOverride[key]
                }))
                    .reduce((r, v) => [...r, v], []);
                _writer.writeRepeatedMessage(3, repeated_3, FormResult.PreviewOverrideEntry.serializeBinaryToWriter);
            }
        }
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get values() {
        return this._values;
    }
    set values(value) {
        this._values = value;
    }
    get previewOverride() {
        return this._previewOverride;
    }
    set previewOverride(value) {
        this._previewOverride = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        FormResult.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            id: this.id,
            values: this.values
                ? Object.keys(this.values).reduce((r, k) => ({ ...r, [k]: this.values[k] }), {})
                : {},
            previewOverride: this.previewOverride
                ? Object.keys(this.previewOverride).reduce((r, k) => ({ ...r, [k]: this.previewOverride[k] }), {})
                : {}
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            id: this.id,
            values: this.values
                ? Object.keys(this.values).reduce((r, k) => ({ ...r, [k]: this.values[k] }), {})
                : {},
            previewOverride: this.previewOverride
                ? Object.keys(this.previewOverride).reduce((r, k) => ({ ...r, [k]: this.previewOverride[k] }), {})
                : {}
        };
    }
}
FormResult.id = 'proto.pub.v1.models.FormResult';
(function (FormResult) {
    /**
     * Message implementation for proto.pub.v1.models.FormResult.ValuesEntry
     */
    class ValuesEntry {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of ValuesEntry to deeply clone from
         */
        constructor(_value) {
            _value = _value || {};
            this.key = _value.key;
            this.value = _value.value;
            ValuesEntry.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes) {
            const instance = new ValuesEntry();
            ValuesEntry.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
            return instance;
        }
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance) {
            _instance.key = _instance.key || '';
            _instance.value = _instance.value || '';
        }
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        static deserializeBinaryFromReader(_instance, _reader) {
            while (_reader.nextField()) {
                if (_reader.isEndGroup())
                    break;
                switch (_reader.getFieldNumber()) {
                    case 1:
                        _instance.key = _reader.readString();
                        break;
                    case 2:
                        _instance.value = _reader.readString();
                        break;
                    default:
                        _reader.skipField();
                }
            }
            ValuesEntry.refineValues(_instance);
        }
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance, _writer) {
            if (_instance.key) {
                _writer.writeString(1, _instance.key);
            }
            if (_instance.value) {
                _writer.writeString(2, _instance.value);
            }
        }
        get key() {
            return this._key;
        }
        set key(value) {
            this._key = value;
        }
        get value() {
            return this._value;
        }
        set value(value) {
            this._value = value;
        }
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        serializeBinary() {
            const writer = new BinaryWriter();
            ValuesEntry.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        }
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        toObject() {
            return {
                key: this.key,
                value: this.value
            };
        }
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        toJSON() {
            return this.toObject();
        }
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        toProtobufJSON(
        // @ts-ignore
        options) {
            return {
                key: this.key,
                value: this.value
            };
        }
    }
    ValuesEntry.id = 'proto.pub.v1.models.FormResult.ValuesEntry';
    FormResult.ValuesEntry = ValuesEntry;
    /**
     * Message implementation for proto.pub.v1.models.FormResult.PreviewOverrideEntry
     */
    class PreviewOverrideEntry {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of PreviewOverrideEntry to deeply clone from
         */
        constructor(_value) {
            _value = _value || {};
            this.key = _value.key;
            this.value = _value.value;
            PreviewOverrideEntry.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes) {
            const instance = new PreviewOverrideEntry();
            PreviewOverrideEntry.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
            return instance;
        }
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance) {
            _instance.key = _instance.key || '';
            _instance.value = _instance.value || '';
        }
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        static deserializeBinaryFromReader(_instance, _reader) {
            while (_reader.nextField()) {
                if (_reader.isEndGroup())
                    break;
                switch (_reader.getFieldNumber()) {
                    case 1:
                        _instance.key = _reader.readString();
                        break;
                    case 2:
                        _instance.value = _reader.readString();
                        break;
                    default:
                        _reader.skipField();
                }
            }
            PreviewOverrideEntry.refineValues(_instance);
        }
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance, _writer) {
            if (_instance.key) {
                _writer.writeString(1, _instance.key);
            }
            if (_instance.value) {
                _writer.writeString(2, _instance.value);
            }
        }
        get key() {
            return this._key;
        }
        set key(value) {
            this._key = value;
        }
        get value() {
            return this._value;
        }
        set value(value) {
            this._value = value;
        }
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        serializeBinary() {
            const writer = new BinaryWriter();
            PreviewOverrideEntry.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        }
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        toObject() {
            return {
                key: this.key,
                value: this.value
            };
        }
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        toJSON() {
            return this.toObject();
        }
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        toProtobufJSON(
        // @ts-ignore
        options) {
            return {
                key: this.key,
                value: this.value
            };
        }
    }
    PreviewOverrideEntry.id = 'proto.pub.v1.models.FormResult.PreviewOverrideEntry';
    FormResult.PreviewOverrideEntry = PreviewOverrideEntry;
})(FormResult || (FormResult = {}));
/**
 * Message implementation for proto.pub.v1.models.TableRow
 */
export class TableRow {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of TableRow to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.columns = (_value.columns || []).slice();
        this.highlight = _value.highlight;
        this.bold = _value.bold;
        TableRow.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new TableRow();
        TableRow.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.columns = _instance.columns || [];
        _instance.highlight = _instance.highlight || false;
        _instance.bold = _instance.bold || false;
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    (_instance.columns = _instance.columns || []).push(_reader.readString());
                    break;
                case 2:
                    _instance.highlight = _reader.readBool();
                    break;
                case 3:
                    _instance.bold = _reader.readBool();
                    break;
                default:
                    _reader.skipField();
            }
        }
        TableRow.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.columns && _instance.columns.length) {
            _writer.writeRepeatedString(1, _instance.columns);
        }
        if (_instance.highlight) {
            _writer.writeBool(2, _instance.highlight);
        }
        if (_instance.bold) {
            _writer.writeBool(3, _instance.bold);
        }
    }
    get columns() {
        return this._columns;
    }
    set columns(value) {
        this._columns = value;
    }
    get highlight() {
        return this._highlight;
    }
    set highlight(value) {
        this._highlight = value;
    }
    get bold() {
        return this._bold;
    }
    set bold(value) {
        this._bold = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        TableRow.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            columns: (this.columns || []).slice(),
            highlight: this.highlight,
            bold: this.bold
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            columns: (this.columns || []).slice(),
            highlight: this.highlight,
            bold: this.bold
        };
    }
}
TableRow.id = 'proto.pub.v1.models.TableRow';
/**
 * Message implementation for proto.pub.v1.models.Table
 */
export class Table {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Table to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.rows = (_value.rows || []).map(m => new TableRow(m));
        this.columnWidths = (_value.columnWidths || []).slice();
        this.title = _value.title;
        Table.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new Table();
        Table.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.rows = _instance.rows || [];
        _instance.columnWidths = _instance.columnWidths || [];
        _instance.title = _instance.title || '';
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    const messageInitializer1 = new TableRow();
                    _reader.readMessage(messageInitializer1, TableRow.deserializeBinaryFromReader);
                    (_instance.rows = _instance.rows || []).push(messageInitializer1);
                    break;
                case 2:
                    (_instance.columnWidths = _instance.columnWidths || []).push(...(_reader.readPackedDouble() || []));
                    break;
                case 3:
                    _instance.title = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        Table.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.rows && _instance.rows.length) {
            _writer.writeRepeatedMessage(1, _instance.rows, TableRow.serializeBinaryToWriter);
        }
        if (_instance.columnWidths && _instance.columnWidths.length) {
            _writer.writePackedDouble(2, _instance.columnWidths);
        }
        if (_instance.title) {
            _writer.writeString(3, _instance.title);
        }
    }
    get rows() {
        return this._rows;
    }
    set rows(value) {
        this._rows = value;
    }
    get columnWidths() {
        return this._columnWidths;
    }
    set columnWidths(value) {
        this._columnWidths = value;
    }
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        Table.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            rows: (this.rows || []).map(m => m.toObject()),
            columnWidths: (this.columnWidths || []).slice(),
            title: this.title
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            rows: (this.rows || []).map(m => m.toProtobufJSON(options)),
            columnWidths: (this.columnWidths || []).slice(),
            title: this.title
        };
    }
}
Table.id = 'proto.pub.v1.models.Table';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5wYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Byb3RvL3NyYy9saWIvcHViL3YxL21vZGVscy9mb3JtLnBiLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdBLE9BQU8sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFjLE1BQU0saUJBQWlCLENBQUM7QUFFekU7O0dBRUc7QUFDSCxNQUFNLE9BQU8sSUFBSTtJQXdGZjs7O09BR0c7SUFDSCxZQUFZLE1BQXdDO1FBQ2xELE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQWhHRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsaUJBQWlCLENBQUMsS0FBaUI7UUFDeEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsMkJBQTJCLENBQUMsUUFBUSxFQUFFLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDcEUsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBZTtRQUNqQyxTQUFTLENBQUMsRUFBRSxHQUFHLFNBQVMs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QztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGNBQWM7SUFDWixhQUFhO0lBQ2IsT0FBK0I7UUFFL0IsT0FBTztZQUNMLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMzRCxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRTtZQUMvQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7U0FDbEIsQ0FBQztJQUNKLENBQUM7O0FBekpNLFFBQUUsR0FBRywyQkFBMkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuLy8gQHRzLW5vY2hlY2tcbi8vXG4vLyBUSElTIElTIEEgR0VORVJBVEVEIEZJTEVcbi8vIERPIE5PVCBNT0RJRlkgSVQhIFlPVVIgQ0hBTkdFUyBXSUxMIEJFIExPU1RcbmltcG9ydCB7XG4gIEdycGNNZXNzYWdlLFxuICBSZWN1cnNpdmVQYXJ0aWFsLFxuICBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbn0gZnJvbSAnQG5neC1ncnBjL2NvbW1vbic7XG5pbXBvcnQgeyBCaW5hcnlSZWFkZXIsIEJpbmFyeVdyaXRlciwgQnl0ZVNvdXJjZSB9IGZyb20gJ2dvb2dsZS1wcm90b2J1Zic7XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3IgcHJvdG8ucHViLnYxLm1vZGVscy5Gb3JtXG4gKi9cbmV4cG9ydCBjbGFzcyBGb3JtIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAncHJvdG8ucHViLnYxLm1vZGVscy5Gb3JtJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgRm9ybSgpO1xuICAgIEZvcm0uZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBGb3JtKSB7XG4gICAgX2luc3RhbmNlLmlkID0gX2luc3RhbmNlLmlkIHx8ICcnO1xuICAgIF9pbnN0YW5jZS50aXRsZSA9IF9pbnN0YW5jZS50aXRsZSB8fCAnJztcbiAgICBfaW5zdGFuY2UuZmllbGRzID0gX2luc3RhbmNlLmZpZWxkcyB8fCBbXTtcbiAgICBfaW5zdGFuY2UubG9ja0FmdGVyID0gX2luc3RhbmNlLmxvY2tBZnRlciB8fCAnMCc7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoX2luc3RhbmNlOiBGb3JtLCBfcmVhZGVyOiBCaW5hcnlSZWFkZXIpIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5pZCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLnRpdGxlID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBjb25zdCBtZXNzYWdlSW5pdGlhbGl6ZXIzID0gbmV3IEZvcm0uRmllbGQoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMyxcbiAgICAgICAgICAgIEZvcm0uRmllbGQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICAoX2luc3RhbmNlLmZpZWxkcyA9IF9pbnN0YW5jZS5maWVsZHMgfHwgW10pLnB1c2gobWVzc2FnZUluaXRpYWxpemVyMyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBfaW5zdGFuY2UubG9ja0FmdGVyID0gX3JlYWRlci5yZWFkSW50NjRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEZvcm0ucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoX2luc3RhbmNlOiBGb3JtLCBfd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoX2luc3RhbmNlLmlkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS5pZCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UudGl0bGUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMiwgX2luc3RhbmNlLnRpdGxlKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5maWVsZHMgJiYgX2luc3RhbmNlLmZpZWxkcy5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZE1lc3NhZ2UoXG4gICAgICAgIDMsXG4gICAgICAgIF9pbnN0YW5jZS5maWVsZHMgYXMgYW55LFxuICAgICAgICBGb3JtLkZpZWxkLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmxvY2tBZnRlcikge1xuICAgICAgX3dyaXRlci53cml0ZUludDY0U3RyaW5nKDQsIF9pbnN0YW5jZS5sb2NrQWZ0ZXIpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2lkPzogc3RyaW5nO1xuICBwcml2YXRlIF90aXRsZT86IHN0cmluZztcbiAgcHJpdmF0ZSBfZmllbGRzPzogRm9ybS5GaWVsZFtdO1xuICBwcml2YXRlIF9sb2NrQWZ0ZXI/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBGb3JtIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEZvcm0uQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMuaWQgPSBfdmFsdWUuaWQ7XG4gICAgdGhpcy50aXRsZSA9IF92YWx1ZS50aXRsZTtcbiAgICB0aGlzLmZpZWxkcyA9IChfdmFsdWUuZmllbGRzIHx8IFtdKS5tYXAobSA9PiBuZXcgRm9ybS5GaWVsZChtKSk7XG4gICAgdGhpcy5sb2NrQWZ0ZXIgPSBfdmFsdWUubG9ja0FmdGVyO1xuICAgIEZvcm0ucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBpZCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9pZDtcbiAgfVxuICBzZXQgaWQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHRpdGxlKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xuICB9XG4gIHNldCB0aXRsZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdGl0bGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZmllbGRzKCk6IEZvcm0uRmllbGRbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkcztcbiAgfVxuICBzZXQgZmllbGRzKHZhbHVlOiBGb3JtLkZpZWxkW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9maWVsZHMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbG9ja0FmdGVyKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2xvY2tBZnRlcjtcbiAgfVxuICBzZXQgbG9ja0FmdGVyKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9sb2NrQWZ0ZXIgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBGb3JtLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IEZvcm0uQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogdGhpcy5pZCxcbiAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgZmllbGRzOiAodGhpcy5maWVsZHMgfHwgW10pLm1hcChtID0+IG0udG9PYmplY3QoKSksXG4gICAgICBsb2NrQWZ0ZXI6IHRoaXMubG9ja0FmdGVyXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogRm9ybS5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICBmaWVsZHM6ICh0aGlzLmZpZWxkcyB8fCBbXSkubWFwKG0gPT4gbS50b1Byb3RvYnVmSlNPTihvcHRpb25zKSksXG4gICAgICBsb2NrQWZ0ZXI6IHRoaXMubG9ja0FmdGVyXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBGb3JtIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBGb3JtXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBpZD86IHN0cmluZztcbiAgICB0aXRsZT86IHN0cmluZztcbiAgICBmaWVsZHM/OiBGb3JtLkZpZWxkLkFzT2JqZWN0W107XG4gICAgbG9ja0FmdGVyPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIEZvcm1cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIGlkPzogc3RyaW5nO1xuICAgIHRpdGxlPzogc3RyaW5nO1xuICAgIGZpZWxkcz86IEZvcm0uRmllbGQuQXNQcm90b2J1ZkpTT05bXSB8IG51bGw7XG4gICAgbG9ja0FmdGVyPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIHByb3RvLnB1Yi52MS5tb2RlbHMuRm9ybS5UZXh0RmllbGRcbiAgICovXG4gIGV4cG9ydCBjbGFzcyBUZXh0RmllbGQgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gICAgc3RhdGljIGlkID0gJ3Byb3RvLnB1Yi52MS5tb2RlbHMuRm9ybS5UZXh0RmllbGQnO1xuXG4gICAgLyoqXG4gICAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICovXG4gICAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBUZXh0RmllbGQoKTtcbiAgICAgIFRleHRGaWVsZC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogVGV4dEZpZWxkKSB7XG4gICAgICBfaW5zdGFuY2UuZGVmYXVsdFRleHQgPSBfaW5zdGFuY2UuZGVmYXVsdFRleHQgfHwgJyc7XG4gICAgICBfaW5zdGFuY2UubWluID0gX2luc3RhbmNlLm1pbiB8fCAwO1xuICAgICAgX2luc3RhbmNlLm1heCA9IF9pbnN0YW5jZS5tYXggfHwgMDtcbiAgICAgIF9pbnN0YW5jZS5wcmVWYWxpZGF0aW9uUmVnZXggPSBfaW5zdGFuY2UucHJlVmFsaWRhdGlvblJlZ2V4IHx8ICcnO1xuICAgICAgX2luc3RhbmNlLnBsYWNlaG9sZGVyID0gX2luc3RhbmNlLnBsYWNlaG9sZGVyIHx8ICcnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgICAqL1xuICAgIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBfaW5zdGFuY2U6IFRleHRGaWVsZCxcbiAgICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICAgICkge1xuICAgICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIF9pbnN0YW5jZS5kZWZhdWx0VGV4dCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgX2luc3RhbmNlLm1pbiA9IF9yZWFkZXIucmVhZEludDMyKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBfaW5zdGFuY2UubWF4ID0gX3JlYWRlci5yZWFkSW50MzIoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgIF9pbnN0YW5jZS5wcmVWYWxpZGF0aW9uUmVnZXggPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgIF9pbnN0YW5jZS5wbGFjZWhvbGRlciA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgVGV4dEZpZWxkLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgICBfaW5zdGFuY2U6IFRleHRGaWVsZCxcbiAgICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICAgICkge1xuICAgICAgaWYgKF9pbnN0YW5jZS5kZWZhdWx0VGV4dCkge1xuICAgICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS5kZWZhdWx0VGV4dCk7XG4gICAgICB9XG4gICAgICBpZiAoX2luc3RhbmNlLm1pbikge1xuICAgICAgICBfd3JpdGVyLndyaXRlSW50MzIoMiwgX2luc3RhbmNlLm1pbik7XG4gICAgICB9XG4gICAgICBpZiAoX2luc3RhbmNlLm1heCkge1xuICAgICAgICBfd3JpdGVyLndyaXRlSW50MzIoMywgX2luc3RhbmNlLm1heCk7XG4gICAgICB9XG4gICAgICBpZiAoX2luc3RhbmNlLnByZVZhbGlkYXRpb25SZWdleCkge1xuICAgICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDQsIF9pbnN0YW5jZS5wcmVWYWxpZGF0aW9uUmVnZXgpO1xuICAgICAgfVxuICAgICAgaWYgKF9pbnN0YW5jZS5wbGFjZWhvbGRlcikge1xuICAgICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDUsIF9pbnN0YW5jZS5wbGFjZWhvbGRlcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZGVmYXVsdFRleHQ/OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfbWluPzogbnVtYmVyO1xuICAgIHByaXZhdGUgX21heD86IG51bWJlcjtcbiAgICBwcml2YXRlIF9wcmVWYWxpZGF0aW9uUmVnZXg/OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBUZXh0RmllbGQgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFRleHRGaWVsZC5Bc09iamVjdD4pIHtcbiAgICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICAgIHRoaXMuZGVmYXVsdFRleHQgPSBfdmFsdWUuZGVmYXVsdFRleHQ7XG4gICAgICB0aGlzLm1pbiA9IF92YWx1ZS5taW47XG4gICAgICB0aGlzLm1heCA9IF92YWx1ZS5tYXg7XG4gICAgICB0aGlzLnByZVZhbGlkYXRpb25SZWdleCA9IF92YWx1ZS5wcmVWYWxpZGF0aW9uUmVnZXg7XG4gICAgICB0aGlzLnBsYWNlaG9sZGVyID0gX3ZhbHVlLnBsYWNlaG9sZGVyO1xuICAgICAgVGV4dEZpZWxkLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgICB9XG4gICAgZ2V0IGRlZmF1bHRUZXh0KCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICByZXR1cm4gdGhpcy5fZGVmYXVsdFRleHQ7XG4gICAgfVxuICAgIHNldCBkZWZhdWx0VGV4dCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9kZWZhdWx0VGV4dCA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgbWluKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgICByZXR1cm4gdGhpcy5fbWluO1xuICAgIH1cbiAgICBzZXQgbWluKHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX21pbiA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgbWF4KCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgICByZXR1cm4gdGhpcy5fbWF4O1xuICAgIH1cbiAgICBzZXQgbWF4KHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX21heCA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgcHJlVmFsaWRhdGlvblJlZ2V4KCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICByZXR1cm4gdGhpcy5fcHJlVmFsaWRhdGlvblJlZ2V4O1xuICAgIH1cbiAgICBzZXQgcHJlVmFsaWRhdGlvblJlZ2V4KHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX3ByZVZhbGlkYXRpb25SZWdleCA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgcGxhY2Vob2xkZXIoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgIHJldHVybiB0aGlzLl9wbGFjZWhvbGRlcjtcbiAgICB9XG4gICAgc2V0IHBsYWNlaG9sZGVyKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX3BsYWNlaG9sZGVyID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAqL1xuICAgIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICAgIFRleHRGaWVsZC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICAgKi9cbiAgICB0b09iamVjdCgpOiBUZXh0RmllbGQuQXNPYmplY3Qge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGVmYXVsdFRleHQ6IHRoaXMuZGVmYXVsdFRleHQsXG4gICAgICAgIG1pbjogdGhpcy5taW4sXG4gICAgICAgIG1heDogdGhpcy5tYXgsXG4gICAgICAgIHByZVZhbGlkYXRpb25SZWdleDogdGhpcy5wcmVWYWxpZGF0aW9uUmVnZXgsXG4gICAgICAgIHBsYWNlaG9sZGVyOiB0aGlzLnBsYWNlaG9sZGVyXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgICAqL1xuICAgIHRvSlNPTigpIHtcbiAgICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgICAqL1xuICAgIHRvUHJvdG9idWZKU09OKFxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICAgICk6IFRleHRGaWVsZC5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkZWZhdWx0VGV4dDogdGhpcy5kZWZhdWx0VGV4dCxcbiAgICAgICAgbWluOiB0aGlzLm1pbixcbiAgICAgICAgbWF4OiB0aGlzLm1heCxcbiAgICAgICAgcHJlVmFsaWRhdGlvblJlZ2V4OiB0aGlzLnByZVZhbGlkYXRpb25SZWdleCxcbiAgICAgICAgcGxhY2Vob2xkZXI6IHRoaXMucGxhY2Vob2xkZXJcbiAgICAgIH07XG4gICAgfVxuICB9XG4gIGV4cG9ydCBtb2R1bGUgVGV4dEZpZWxkIHtcbiAgICAvKipcbiAgICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgVGV4dEZpZWxkXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgICBkZWZhdWx0VGV4dD86IHN0cmluZztcbiAgICAgIG1pbj86IG51bWJlcjtcbiAgICAgIG1heD86IG51bWJlcjtcbiAgICAgIHByZVZhbGlkYXRpb25SZWdleD86IHN0cmluZztcbiAgICAgIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIFRleHRGaWVsZFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgICAgZGVmYXVsdFRleHQ/OiBzdHJpbmc7XG4gICAgICBtaW4/OiBudW1iZXI7XG4gICAgICBtYXg/OiBudW1iZXI7XG4gICAgICBwcmVWYWxpZGF0aW9uUmVnZXg/OiBzdHJpbmc7XG4gICAgICBwbGFjZWhvbGRlcj86IHN0cmluZztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3IgcHJvdG8ucHViLnYxLm1vZGVscy5Gb3JtLkZvcm1hdHRlZFRleHRGaWVsZFxuICAgKi9cbiAgZXhwb3J0IGNsYXNzIEZvcm1hdHRlZFRleHRGaWVsZCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgICBzdGF0aWMgaWQgPSAncHJvdG8ucHViLnYxLm1vZGVscy5Gb3JtLkZvcm1hdHRlZFRleHRGaWVsZCc7XG5cbiAgICAvKipcbiAgICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEZvcm1hdHRlZFRleHRGaWVsZCgpO1xuICAgICAgRm9ybWF0dGVkVGV4dEZpZWxkLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgICAgaW5zdGFuY2UsXG4gICAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgICApO1xuICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAqL1xuICAgIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBGb3JtYXR0ZWRUZXh0RmllbGQpIHtcbiAgICAgIF9pbnN0YW5jZS5wYXJ0aXRpb25zU2l6ZXMgPSBfaW5zdGFuY2UucGFydGl0aW9uc1NpemVzIHx8IFtdO1xuICAgICAgX2luc3RhbmNlLmRlZmF1bHRUZXh0ID0gX2luc3RhbmNlLmRlZmF1bHRUZXh0IHx8ICcnO1xuICAgICAgX2luc3RhbmNlLnByZVZhbGlkYXRpb25SZWdleCA9IF9pbnN0YW5jZS5wcmVWYWxpZGF0aW9uUmVnZXggfHwgJyc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAgICovXG4gICAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIF9pbnN0YW5jZTogRm9ybWF0dGVkVGV4dEZpZWxkLFxuICAgICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICAgKSB7XG4gICAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgKF9pbnN0YW5jZS5wYXJ0aXRpb25zU2l6ZXMgPSBfaW5zdGFuY2UucGFydGl0aW9uc1NpemVzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgICAuLi4oX3JlYWRlci5yZWFkUGFja2VkSW50MzIoKSB8fCBbXSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBfaW5zdGFuY2UuZGVmYXVsdFRleHQgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgIF9pbnN0YW5jZS5wcmVWYWxpZGF0aW9uUmVnZXggPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIEZvcm1hdHRlZFRleHRGaWVsZC5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAgICovXG4gICAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgICAgX2luc3RhbmNlOiBGb3JtYXR0ZWRUZXh0RmllbGQsXG4gICAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgICApIHtcbiAgICAgIGlmIChfaW5zdGFuY2UucGFydGl0aW9uc1NpemVzICYmIF9pbnN0YW5jZS5wYXJ0aXRpb25zU2l6ZXMubGVuZ3RoKSB7XG4gICAgICAgIF93cml0ZXIud3JpdGVQYWNrZWRJbnQzMigxLCBfaW5zdGFuY2UucGFydGl0aW9uc1NpemVzKTtcbiAgICAgIH1cbiAgICAgIGlmIChfaW5zdGFuY2UuZGVmYXVsdFRleHQpIHtcbiAgICAgICAgX3dyaXRlci53cml0ZVN0cmluZygyLCBfaW5zdGFuY2UuZGVmYXVsdFRleHQpO1xuICAgICAgfVxuICAgICAgaWYgKF9pbnN0YW5jZS5wcmVWYWxpZGF0aW9uUmVnZXgpIHtcbiAgICAgICAgX3dyaXRlci53cml0ZVN0cmluZyg0LCBfaW5zdGFuY2UucHJlVmFsaWRhdGlvblJlZ2V4KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9wYXJ0aXRpb25zU2l6ZXM/OiBudW1iZXJbXTtcbiAgICBwcml2YXRlIF9kZWZhdWx0VGV4dD86IHN0cmluZztcbiAgICBwcml2YXRlIF9wcmVWYWxpZGF0aW9uUmVnZXg/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBGb3JtYXR0ZWRUZXh0RmllbGQgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEZvcm1hdHRlZFRleHRGaWVsZC5Bc09iamVjdD4pIHtcbiAgICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICAgIHRoaXMucGFydGl0aW9uc1NpemVzID0gKF92YWx1ZS5wYXJ0aXRpb25zU2l6ZXMgfHwgW10pLnNsaWNlKCk7XG4gICAgICB0aGlzLmRlZmF1bHRUZXh0ID0gX3ZhbHVlLmRlZmF1bHRUZXh0O1xuICAgICAgdGhpcy5wcmVWYWxpZGF0aW9uUmVnZXggPSBfdmFsdWUucHJlVmFsaWRhdGlvblJlZ2V4O1xuICAgICAgRm9ybWF0dGVkVGV4dEZpZWxkLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgICB9XG4gICAgZ2V0IHBhcnRpdGlvbnNTaXplcygpOiBudW1iZXJbXSB8IHVuZGVmaW5lZCB7XG4gICAgICByZXR1cm4gdGhpcy5fcGFydGl0aW9uc1NpemVzO1xuICAgIH1cbiAgICBzZXQgcGFydGl0aW9uc1NpemVzKHZhbHVlOiBudW1iZXJbXSB8IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fcGFydGl0aW9uc1NpemVzID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBkZWZhdWx0VGV4dCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRUZXh0O1xuICAgIH1cbiAgICBzZXQgZGVmYXVsdFRleHQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fZGVmYXVsdFRleHQgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IHByZVZhbGlkYXRpb25SZWdleCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgcmV0dXJuIHRoaXMuX3ByZVZhbGlkYXRpb25SZWdleDtcbiAgICB9XG4gICAgc2V0IHByZVZhbGlkYXRpb25SZWdleCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9wcmVWYWxpZGF0aW9uUmVnZXggPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICovXG4gICAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgICAgRm9ybWF0dGVkVGV4dEZpZWxkLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgICAqL1xuICAgIHRvT2JqZWN0KCk6IEZvcm1hdHRlZFRleHRGaWVsZC5Bc09iamVjdCB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYXJ0aXRpb25zU2l6ZXM6ICh0aGlzLnBhcnRpdGlvbnNTaXplcyB8fCBbXSkuc2xpY2UoKSxcbiAgICAgICAgZGVmYXVsdFRleHQ6IHRoaXMuZGVmYXVsdFRleHQsXG4gICAgICAgIHByZVZhbGlkYXRpb25SZWdleDogdGhpcy5wcmVWYWxpZGF0aW9uUmVnZXhcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAgICovXG4gICAgdG9KU09OKCkge1xuICAgICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAgICovXG4gICAgdG9Qcm90b2J1ZkpTT04oXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICAgKTogRm9ybWF0dGVkVGV4dEZpZWxkLkFzUHJvdG9idWZKU09OIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhcnRpdGlvbnNTaXplczogKHRoaXMucGFydGl0aW9uc1NpemVzIHx8IFtdKS5zbGljZSgpLFxuICAgICAgICBkZWZhdWx0VGV4dDogdGhpcy5kZWZhdWx0VGV4dCxcbiAgICAgICAgcHJlVmFsaWRhdGlvblJlZ2V4OiB0aGlzLnByZVZhbGlkYXRpb25SZWdleFxuICAgICAgfTtcbiAgICB9XG4gIH1cbiAgZXhwb3J0IG1vZHVsZSBGb3JtYXR0ZWRUZXh0RmllbGQge1xuICAgIC8qKlxuICAgICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBGb3JtYXR0ZWRUZXh0RmllbGRcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICAgIHBhcnRpdGlvbnNTaXplcz86IG51bWJlcltdO1xuICAgICAgZGVmYXVsdFRleHQ/OiBzdHJpbmc7XG4gICAgICBwcmVWYWxpZGF0aW9uUmVnZXg/OiBzdHJpbmc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgRm9ybWF0dGVkVGV4dEZpZWxkXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgICBwYXJ0aXRpb25zU2l6ZXM/OiBudW1iZXJbXTtcbiAgICAgIGRlZmF1bHRUZXh0Pzogc3RyaW5nO1xuICAgICAgcHJlVmFsaWRhdGlvblJlZ2V4Pzogc3RyaW5nO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBwcm90by5wdWIudjEubW9kZWxzLkZvcm0uUmljaEZvcm1hdHRlZFRleHRGaWVsZFxuICAgKi9cbiAgZXhwb3J0IGNsYXNzIFJpY2hGb3JtYXR0ZWRUZXh0RmllbGQgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gICAgc3RhdGljIGlkID0gJ3Byb3RvLnB1Yi52MS5tb2RlbHMuRm9ybS5SaWNoRm9ybWF0dGVkVGV4dEZpZWxkJztcblxuICAgIC8qKlxuICAgICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAqL1xuICAgIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgUmljaEZvcm1hdHRlZFRleHRGaWVsZCgpO1xuICAgICAgUmljaEZvcm1hdHRlZFRleHRGaWVsZC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICAgIGluc3RhbmNlLFxuICAgICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICAgKTtcbiAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogUmljaEZvcm1hdHRlZFRleHRGaWVsZCkge1xuICAgICAgX2luc3RhbmNlLnBhcnRpdGlvbnMgPSBfaW5zdGFuY2UucGFydGl0aW9ucyB8fCBbXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgX2luc3RhbmNlOiBSaWNoRm9ybWF0dGVkVGV4dEZpZWxkLFxuICAgICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICAgKSB7XG4gICAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyMSA9IG5ldyBGb3JtLlRleHRGaWVsZCgpO1xuICAgICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMSxcbiAgICAgICAgICAgICAgRm9ybS5UZXh0RmllbGQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgKF9pbnN0YW5jZS5wYXJ0aXRpb25zID0gX2luc3RhbmNlLnBhcnRpdGlvbnMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjFcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBSaWNoRm9ybWF0dGVkVGV4dEZpZWxkLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgICBfaW5zdGFuY2U6IFJpY2hGb3JtYXR0ZWRUZXh0RmllbGQsXG4gICAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgICApIHtcbiAgICAgIGlmIChfaW5zdGFuY2UucGFydGl0aW9ucyAmJiBfaW5zdGFuY2UucGFydGl0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgICAxLFxuICAgICAgICAgIF9pbnN0YW5jZS5wYXJ0aXRpb25zIGFzIGFueSxcbiAgICAgICAgICBGb3JtLlRleHRGaWVsZC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX3BhcnRpdGlvbnM/OiBGb3JtLlRleHRGaWVsZFtdO1xuXG4gICAgLyoqXG4gICAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgUmljaEZvcm1hdHRlZFRleHRGaWVsZCB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8UmljaEZvcm1hdHRlZFRleHRGaWVsZC5Bc09iamVjdD4pIHtcbiAgICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICAgIHRoaXMucGFydGl0aW9ucyA9IChfdmFsdWUucGFydGl0aW9ucyB8fCBbXSkubWFwKFxuICAgICAgICBtID0+IG5ldyBGb3JtLlRleHRGaWVsZChtKVxuICAgICAgKTtcbiAgICAgIFJpY2hGb3JtYXR0ZWRUZXh0RmllbGQucmVmaW5lVmFsdWVzKHRoaXMpO1xuICAgIH1cbiAgICBnZXQgcGFydGl0aW9ucygpOiBGb3JtLlRleHRGaWVsZFtdIHwgdW5kZWZpbmVkIHtcbiAgICAgIHJldHVybiB0aGlzLl9wYXJ0aXRpb25zO1xuICAgIH1cbiAgICBzZXQgcGFydGl0aW9ucyh2YWx1ZTogRm9ybS5UZXh0RmllbGRbXSB8IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fcGFydGl0aW9ucyA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgICBSaWNoRm9ybWF0dGVkVGV4dEZpZWxkLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgICAqL1xuICAgIHRvT2JqZWN0KCk6IFJpY2hGb3JtYXR0ZWRUZXh0RmllbGQuQXNPYmplY3Qge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFydGl0aW9uczogKHRoaXMucGFydGl0aW9ucyB8fCBbXSkubWFwKG0gPT4gbS50b09iamVjdCgpKVxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICAgKi9cbiAgICB0b0pTT04oKSB7XG4gICAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICAgKi9cbiAgICB0b1Byb3RvYnVmSlNPTihcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgICApOiBSaWNoRm9ybWF0dGVkVGV4dEZpZWxkLkFzUHJvdG9idWZKU09OIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhcnRpdGlvbnM6ICh0aGlzLnBhcnRpdGlvbnMgfHwgW10pLm1hcChtID0+IG0udG9Qcm90b2J1ZkpTT04ob3B0aW9ucykpXG4gICAgICB9O1xuICAgIH1cbiAgfVxuICBleHBvcnQgbW9kdWxlIFJpY2hGb3JtYXR0ZWRUZXh0RmllbGQge1xuICAgIC8qKlxuICAgICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBSaWNoRm9ybWF0dGVkVGV4dEZpZWxkXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgICBwYXJ0aXRpb25zPzogRm9ybS5UZXh0RmllbGQuQXNPYmplY3RbXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBSaWNoRm9ybWF0dGVkVGV4dEZpZWxkXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgICBwYXJ0aXRpb25zPzogRm9ybS5UZXh0RmllbGQuQXNQcm90b2J1ZkpTT05bXSB8IG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIHByb3RvLnB1Yi52MS5tb2RlbHMuRm9ybS5OdW1iZXJGaWVsZFxuICAgKi9cbiAgZXhwb3J0IGNsYXNzIE51bWJlckZpZWxkIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICAgIHN0YXRpYyBpZCA9ICdwcm90by5wdWIudjEubW9kZWxzLkZvcm0uTnVtYmVyRmllbGQnO1xuXG4gICAgLyoqXG4gICAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICovXG4gICAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBOdW1iZXJGaWVsZCgpO1xuICAgICAgTnVtYmVyRmllbGQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgICBpbnN0YW5jZSxcbiAgICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICAgICk7XG4gICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICovXG4gICAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IE51bWJlckZpZWxkKSB7XG4gICAgICBfaW5zdGFuY2UuZGVmYXVsdE51bWJlciA9IF9pbnN0YW5jZS5kZWZhdWx0TnVtYmVyIHx8IDA7XG4gICAgICBfaW5zdGFuY2UubWluID0gX2luc3RhbmNlLm1pbiB8fCAwO1xuICAgICAgX2luc3RhbmNlLm1heCA9IF9pbnN0YW5jZS5tYXggfHwgMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgX2luc3RhbmNlOiBOdW1iZXJGaWVsZCxcbiAgICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICAgICkge1xuICAgICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIF9pbnN0YW5jZS5kZWZhdWx0TnVtYmVyID0gX3JlYWRlci5yZWFkRG91YmxlKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBfaW5zdGFuY2UubWluID0gX3JlYWRlci5yZWFkRG91YmxlKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBfaW5zdGFuY2UubWF4ID0gX3JlYWRlci5yZWFkRG91YmxlKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBOdW1iZXJGaWVsZC5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAgICovXG4gICAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgICAgX2luc3RhbmNlOiBOdW1iZXJGaWVsZCxcbiAgICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICAgICkge1xuICAgICAgaWYgKF9pbnN0YW5jZS5kZWZhdWx0TnVtYmVyKSB7XG4gICAgICAgIF93cml0ZXIud3JpdGVEb3VibGUoMSwgX2luc3RhbmNlLmRlZmF1bHROdW1iZXIpO1xuICAgICAgfVxuICAgICAgaWYgKF9pbnN0YW5jZS5taW4pIHtcbiAgICAgICAgX3dyaXRlci53cml0ZURvdWJsZSgyLCBfaW5zdGFuY2UubWluKTtcbiAgICAgIH1cbiAgICAgIGlmIChfaW5zdGFuY2UubWF4KSB7XG4gICAgICAgIF93cml0ZXIud3JpdGVEb3VibGUoMywgX2luc3RhbmNlLm1heCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZGVmYXVsdE51bWJlcj86IG51bWJlcjtcbiAgICBwcml2YXRlIF9taW4/OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfbWF4PzogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgTnVtYmVyRmllbGQgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPE51bWJlckZpZWxkLkFzT2JqZWN0Pikge1xuICAgICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgICAgdGhpcy5kZWZhdWx0TnVtYmVyID0gX3ZhbHVlLmRlZmF1bHROdW1iZXI7XG4gICAgICB0aGlzLm1pbiA9IF92YWx1ZS5taW47XG4gICAgICB0aGlzLm1heCA9IF92YWx1ZS5tYXg7XG4gICAgICBOdW1iZXJGaWVsZC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gICAgfVxuICAgIGdldCBkZWZhdWx0TnVtYmVyKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgICByZXR1cm4gdGhpcy5fZGVmYXVsdE51bWJlcjtcbiAgICB9XG4gICAgc2V0IGRlZmF1bHROdW1iZXIodmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fZGVmYXVsdE51bWJlciA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgbWluKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgICByZXR1cm4gdGhpcy5fbWluO1xuICAgIH1cbiAgICBzZXQgbWluKHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX21pbiA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgbWF4KCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgICByZXR1cm4gdGhpcy5fbWF4O1xuICAgIH1cbiAgICBzZXQgbWF4KHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX21heCA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgICBOdW1iZXJGaWVsZC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICAgKi9cbiAgICB0b09iamVjdCgpOiBOdW1iZXJGaWVsZC5Bc09iamVjdCB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkZWZhdWx0TnVtYmVyOiB0aGlzLmRlZmF1bHROdW1iZXIsXG4gICAgICAgIG1pbjogdGhpcy5taW4sXG4gICAgICAgIG1heDogdGhpcy5tYXhcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAgICovXG4gICAgdG9KU09OKCkge1xuICAgICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAgICovXG4gICAgdG9Qcm90b2J1ZkpTT04oXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICAgKTogTnVtYmVyRmllbGQuQXNQcm90b2J1ZkpTT04ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGVmYXVsdE51bWJlcjogdGhpcy5kZWZhdWx0TnVtYmVyLFxuICAgICAgICBtaW46IHRoaXMubWluLFxuICAgICAgICBtYXg6IHRoaXMubWF4XG4gICAgICB9O1xuICAgIH1cbiAgfVxuICBleHBvcnQgbW9kdWxlIE51bWJlckZpZWxkIHtcbiAgICAvKipcbiAgICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgTnVtYmVyRmllbGRcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICAgIGRlZmF1bHROdW1iZXI/OiBudW1iZXI7XG4gICAgICBtaW4/OiBudW1iZXI7XG4gICAgICBtYXg/OiBudW1iZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgTnVtYmVyRmllbGRcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICAgIGRlZmF1bHROdW1iZXI/OiBudW1iZXI7XG4gICAgICBtaW4/OiBudW1iZXI7XG4gICAgICBtYXg/OiBudW1iZXI7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIHByb3RvLnB1Yi52MS5tb2RlbHMuRm9ybS5EYXRlRmllbGRcbiAgICovXG4gIGV4cG9ydCBjbGFzcyBEYXRlRmllbGQgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gICAgc3RhdGljIGlkID0gJ3Byb3RvLnB1Yi52MS5tb2RlbHMuRm9ybS5EYXRlRmllbGQnO1xuXG4gICAgLyoqXG4gICAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICovXG4gICAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBEYXRlRmllbGQoKTtcbiAgICAgIERhdGVGaWVsZC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogRGF0ZUZpZWxkKSB7XG4gICAgICBfaW5zdGFuY2UuZGVmYXVsdERhdGUgPSBfaW5zdGFuY2UuZGVmYXVsdERhdGUgfHwgJyc7XG4gICAgICBfaW5zdGFuY2UuaXNIaWpyaVNoYW1zaSA9IF9pbnN0YW5jZS5pc0hpanJpU2hhbXNpIHx8IGZhbHNlO1xuICAgICAgX2luc3RhbmNlLnZhbGlkU3RhcnREYXRlID0gX2luc3RhbmNlLnZhbGlkU3RhcnREYXRlIHx8ICcnO1xuICAgICAgX2luc3RhbmNlLnZhbGlkRW5kRGF0ZSA9IF9pbnN0YW5jZS52YWxpZEVuZERhdGUgfHwgJyc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAgICovXG4gICAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIF9pbnN0YW5jZTogRGF0ZUZpZWxkLFxuICAgICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICAgKSB7XG4gICAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgX2luc3RhbmNlLmRlZmF1bHREYXRlID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBfaW5zdGFuY2UuaXNIaWpyaVNoYW1zaSA9IF9yZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIF9pbnN0YW5jZS52YWxpZFN0YXJ0RGF0ZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgX2luc3RhbmNlLnZhbGlkRW5kRGF0ZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgRGF0ZUZpZWxkLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgICBfaW5zdGFuY2U6IERhdGVGaWVsZCxcbiAgICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICAgICkge1xuICAgICAgaWYgKF9pbnN0YW5jZS5kZWZhdWx0RGF0ZSkge1xuICAgICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS5kZWZhdWx0RGF0ZSk7XG4gICAgICB9XG4gICAgICBpZiAoX2luc3RhbmNlLmlzSGlqcmlTaGFtc2kpIHtcbiAgICAgICAgX3dyaXRlci53cml0ZUJvb2woMiwgX2luc3RhbmNlLmlzSGlqcmlTaGFtc2kpO1xuICAgICAgfVxuICAgICAgaWYgKF9pbnN0YW5jZS52YWxpZFN0YXJ0RGF0ZSkge1xuICAgICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDMsIF9pbnN0YW5jZS52YWxpZFN0YXJ0RGF0ZSk7XG4gICAgICB9XG4gICAgICBpZiAoX2luc3RhbmNlLnZhbGlkRW5kRGF0ZSkge1xuICAgICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDQsIF9pbnN0YW5jZS52YWxpZEVuZERhdGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2RlZmF1bHREYXRlPzogc3RyaW5nO1xuICAgIHByaXZhdGUgX2lzSGlqcmlTaGFtc2k/OiBib29sZWFuO1xuICAgIHByaXZhdGUgX3ZhbGlkU3RhcnREYXRlPzogc3RyaW5nO1xuICAgIHByaXZhdGUgX3ZhbGlkRW5kRGF0ZT86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIERhdGVGaWVsZCB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8RGF0ZUZpZWxkLkFzT2JqZWN0Pikge1xuICAgICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgICAgdGhpcy5kZWZhdWx0RGF0ZSA9IF92YWx1ZS5kZWZhdWx0RGF0ZTtcbiAgICAgIHRoaXMuaXNIaWpyaVNoYW1zaSA9IF92YWx1ZS5pc0hpanJpU2hhbXNpO1xuICAgICAgdGhpcy52YWxpZFN0YXJ0RGF0ZSA9IF92YWx1ZS52YWxpZFN0YXJ0RGF0ZTtcbiAgICAgIHRoaXMudmFsaWRFbmREYXRlID0gX3ZhbHVlLnZhbGlkRW5kRGF0ZTtcbiAgICAgIERhdGVGaWVsZC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gICAgfVxuICAgIGdldCBkZWZhdWx0RGF0ZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgcmV0dXJuIHRoaXMuX2RlZmF1bHREYXRlO1xuICAgIH1cbiAgICBzZXQgZGVmYXVsdERhdGUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fZGVmYXVsdERhdGUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IGlzSGlqcmlTaGFtc2koKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgICByZXR1cm4gdGhpcy5faXNIaWpyaVNoYW1zaTtcbiAgICB9XG4gICAgc2V0IGlzSGlqcmlTaGFtc2kodmFsdWU6IGJvb2xlYW4gfCB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX2lzSGlqcmlTaGFtc2kgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IHZhbGlkU3RhcnREYXRlKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICByZXR1cm4gdGhpcy5fdmFsaWRTdGFydERhdGU7XG4gICAgfVxuICAgIHNldCB2YWxpZFN0YXJ0RGF0ZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl92YWxpZFN0YXJ0RGF0ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgdmFsaWRFbmREYXRlKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICByZXR1cm4gdGhpcy5fdmFsaWRFbmREYXRlO1xuICAgIH1cbiAgICBzZXQgdmFsaWRFbmREYXRlKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX3ZhbGlkRW5kRGF0ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgICBEYXRlRmllbGQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAgICovXG4gICAgdG9PYmplY3QoKTogRGF0ZUZpZWxkLkFzT2JqZWN0IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRlZmF1bHREYXRlOiB0aGlzLmRlZmF1bHREYXRlLFxuICAgICAgICBpc0hpanJpU2hhbXNpOiB0aGlzLmlzSGlqcmlTaGFtc2ksXG4gICAgICAgIHZhbGlkU3RhcnREYXRlOiB0aGlzLnZhbGlkU3RhcnREYXRlLFxuICAgICAgICB2YWxpZEVuZERhdGU6IHRoaXMudmFsaWRFbmREYXRlXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgICAqL1xuICAgIHRvSlNPTigpIHtcbiAgICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgICAqL1xuICAgIHRvUHJvdG9idWZKU09OKFxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICAgICk6IERhdGVGaWVsZC5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkZWZhdWx0RGF0ZTogdGhpcy5kZWZhdWx0RGF0ZSxcbiAgICAgICAgaXNIaWpyaVNoYW1zaTogdGhpcy5pc0hpanJpU2hhbXNpLFxuICAgICAgICB2YWxpZFN0YXJ0RGF0ZTogdGhpcy52YWxpZFN0YXJ0RGF0ZSxcbiAgICAgICAgdmFsaWRFbmREYXRlOiB0aGlzLnZhbGlkRW5kRGF0ZVxuICAgICAgfTtcbiAgICB9XG4gIH1cbiAgZXhwb3J0IG1vZHVsZSBEYXRlRmllbGQge1xuICAgIC8qKlxuICAgICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBEYXRlRmllbGRcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICAgIGRlZmF1bHREYXRlPzogc3RyaW5nO1xuICAgICAgaXNIaWpyaVNoYW1zaT86IGJvb2xlYW47XG4gICAgICB2YWxpZFN0YXJ0RGF0ZT86IHN0cmluZztcbiAgICAgIHZhbGlkRW5kRGF0ZT86IHN0cmluZztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBEYXRlRmllbGRcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICAgIGRlZmF1bHREYXRlPzogc3RyaW5nO1xuICAgICAgaXNIaWpyaVNoYW1zaT86IGJvb2xlYW47XG4gICAgICB2YWxpZFN0YXJ0RGF0ZT86IHN0cmluZztcbiAgICAgIHZhbGlkRW5kRGF0ZT86IHN0cmluZztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3IgcHJvdG8ucHViLnYxLm1vZGVscy5Gb3JtLlRpbWVGaWVsZFxuICAgKi9cbiAgZXhwb3J0IGNsYXNzIFRpbWVGaWVsZCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgICBzdGF0aWMgaWQgPSAncHJvdG8ucHViLnYxLm1vZGVscy5Gb3JtLlRpbWVGaWVsZCc7XG5cbiAgICAvKipcbiAgICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFRpbWVGaWVsZCgpO1xuICAgICAgVGltZUZpZWxkLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAqL1xuICAgIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBUaW1lRmllbGQpIHtcbiAgICAgIF9pbnN0YW5jZS5kZWZhdWx0VGltZSA9IF9pbnN0YW5jZS5kZWZhdWx0VGltZSB8fCAnJztcbiAgICAgIF9pbnN0YW5jZS52YWxpZFN0YXJ0VGltZSA9IF9pbnN0YW5jZS52YWxpZFN0YXJ0VGltZSB8fCAnJztcbiAgICAgIF9pbnN0YW5jZS52YWxpZEVuZFRpbWUgPSBfaW5zdGFuY2UudmFsaWRFbmRUaW1lIHx8ICcnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgICAqL1xuICAgIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBfaW5zdGFuY2U6IFRpbWVGaWVsZCxcbiAgICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICAgICkge1xuICAgICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIF9pbnN0YW5jZS5kZWZhdWx0VGltZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgX2luc3RhbmNlLnZhbGlkU3RhcnRUaW1lID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBfaW5zdGFuY2UudmFsaWRFbmRUaW1lID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBUaW1lRmllbGQucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgICAqL1xuICAgIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICAgIF9pbnN0YW5jZTogVGltZUZpZWxkLFxuICAgICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICAgKSB7XG4gICAgICBpZiAoX2luc3RhbmNlLmRlZmF1bHRUaW1lKSB7XG4gICAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMiwgX2luc3RhbmNlLmRlZmF1bHRUaW1lKTtcbiAgICAgIH1cbiAgICAgIGlmIChfaW5zdGFuY2UudmFsaWRTdGFydFRpbWUpIHtcbiAgICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2UudmFsaWRTdGFydFRpbWUpO1xuICAgICAgfVxuICAgICAgaWYgKF9pbnN0YW5jZS52YWxpZEVuZFRpbWUpIHtcbiAgICAgICAgX3dyaXRlci53cml0ZVN0cmluZygzLCBfaW5zdGFuY2UudmFsaWRFbmRUaW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9kZWZhdWx0VGltZT86IHN0cmluZztcbiAgICBwcml2YXRlIF92YWxpZFN0YXJ0VGltZT86IHN0cmluZztcbiAgICBwcml2YXRlIF92YWxpZEVuZFRpbWU/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBUaW1lRmllbGQgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFRpbWVGaWVsZC5Bc09iamVjdD4pIHtcbiAgICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICAgIHRoaXMuZGVmYXVsdFRpbWUgPSBfdmFsdWUuZGVmYXVsdFRpbWU7XG4gICAgICB0aGlzLnZhbGlkU3RhcnRUaW1lID0gX3ZhbHVlLnZhbGlkU3RhcnRUaW1lO1xuICAgICAgdGhpcy52YWxpZEVuZFRpbWUgPSBfdmFsdWUudmFsaWRFbmRUaW1lO1xuICAgICAgVGltZUZpZWxkLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgICB9XG4gICAgZ2V0IGRlZmF1bHRUaW1lKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICByZXR1cm4gdGhpcy5fZGVmYXVsdFRpbWU7XG4gICAgfVxuICAgIHNldCBkZWZhdWx0VGltZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9kZWZhdWx0VGltZSA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgdmFsaWRTdGFydFRpbWUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgIHJldHVybiB0aGlzLl92YWxpZFN0YXJ0VGltZTtcbiAgICB9XG4gICAgc2V0IHZhbGlkU3RhcnRUaW1lKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX3ZhbGlkU3RhcnRUaW1lID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCB2YWxpZEVuZFRpbWUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgIHJldHVybiB0aGlzLl92YWxpZEVuZFRpbWU7XG4gICAgfVxuICAgIHNldCB2YWxpZEVuZFRpbWUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fdmFsaWRFbmRUaW1lID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAqL1xuICAgIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICAgIFRpbWVGaWVsZC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICAgKi9cbiAgICB0b09iamVjdCgpOiBUaW1lRmllbGQuQXNPYmplY3Qge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGVmYXVsdFRpbWU6IHRoaXMuZGVmYXVsdFRpbWUsXG4gICAgICAgIHZhbGlkU3RhcnRUaW1lOiB0aGlzLnZhbGlkU3RhcnRUaW1lLFxuICAgICAgICB2YWxpZEVuZFRpbWU6IHRoaXMudmFsaWRFbmRUaW1lXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgICAqL1xuICAgIHRvSlNPTigpIHtcbiAgICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgICAqL1xuICAgIHRvUHJvdG9idWZKU09OKFxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICAgICk6IFRpbWVGaWVsZC5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkZWZhdWx0VGltZTogdGhpcy5kZWZhdWx0VGltZSxcbiAgICAgICAgdmFsaWRTdGFydFRpbWU6IHRoaXMudmFsaWRTdGFydFRpbWUsXG4gICAgICAgIHZhbGlkRW5kVGltZTogdGhpcy52YWxpZEVuZFRpbWVcbiAgICAgIH07XG4gICAgfVxuICB9XG4gIGV4cG9ydCBtb2R1bGUgVGltZUZpZWxkIHtcbiAgICAvKipcbiAgICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgVGltZUZpZWxkXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgICBkZWZhdWx0VGltZT86IHN0cmluZztcbiAgICAgIHZhbGlkU3RhcnRUaW1lPzogc3RyaW5nO1xuICAgICAgdmFsaWRFbmRUaW1lPzogc3RyaW5nO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIFRpbWVGaWVsZFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgICAgZGVmYXVsdFRpbWU/OiBzdHJpbmc7XG4gICAgICB2YWxpZFN0YXJ0VGltZT86IHN0cmluZztcbiAgICAgIHZhbGlkRW5kVGltZT86IHN0cmluZztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3IgcHJvdG8ucHViLnYxLm1vZGVscy5Gb3JtLkRhdGFBbmRUaW1lRmllbGRcbiAgICovXG4gIGV4cG9ydCBjbGFzcyBEYXRhQW5kVGltZUZpZWxkIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICAgIHN0YXRpYyBpZCA9ICdwcm90by5wdWIudjEubW9kZWxzLkZvcm0uRGF0YUFuZFRpbWVGaWVsZCc7XG5cbiAgICAvKipcbiAgICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IERhdGFBbmRUaW1lRmllbGQoKTtcbiAgICAgIERhdGFBbmRUaW1lRmllbGQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgICBpbnN0YW5jZSxcbiAgICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICAgICk7XG4gICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICovXG4gICAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IERhdGFBbmRUaW1lRmllbGQpIHtcbiAgICAgIF9pbnN0YW5jZS5kZWZhdWx0RGF0ZSA9IF9pbnN0YW5jZS5kZWZhdWx0RGF0ZSB8fCAnJztcbiAgICAgIF9pbnN0YW5jZS5pc0hpanJpU2hhbXNpID0gX2luc3RhbmNlLmlzSGlqcmlTaGFtc2kgfHwgZmFsc2U7XG4gICAgICBfaW5zdGFuY2UudmFsaWRTdGFydERhdGUgPSBfaW5zdGFuY2UudmFsaWRTdGFydERhdGUgfHwgJyc7XG4gICAgICBfaW5zdGFuY2UudmFsaWRFbmREYXRlID0gX2luc3RhbmNlLnZhbGlkRW5kRGF0ZSB8fCAnJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgX2luc3RhbmNlOiBEYXRhQW5kVGltZUZpZWxkLFxuICAgICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICAgKSB7XG4gICAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgX2luc3RhbmNlLmRlZmF1bHREYXRlID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBfaW5zdGFuY2UuaXNIaWpyaVNoYW1zaSA9IF9yZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIF9pbnN0YW5jZS52YWxpZFN0YXJ0RGF0ZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgX2luc3RhbmNlLnZhbGlkRW5kRGF0ZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgRGF0YUFuZFRpbWVGaWVsZC5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAgICovXG4gICAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgICAgX2luc3RhbmNlOiBEYXRhQW5kVGltZUZpZWxkLFxuICAgICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICAgKSB7XG4gICAgICBpZiAoX2luc3RhbmNlLmRlZmF1bHREYXRlKSB7XG4gICAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLmRlZmF1bHREYXRlKTtcbiAgICAgIH1cbiAgICAgIGlmIChfaW5zdGFuY2UuaXNIaWpyaVNoYW1zaSkge1xuICAgICAgICBfd3JpdGVyLndyaXRlQm9vbCgyLCBfaW5zdGFuY2UuaXNIaWpyaVNoYW1zaSk7XG4gICAgICB9XG4gICAgICBpZiAoX2luc3RhbmNlLnZhbGlkU3RhcnREYXRlKSB7XG4gICAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMywgX2luc3RhbmNlLnZhbGlkU3RhcnREYXRlKTtcbiAgICAgIH1cbiAgICAgIGlmIChfaW5zdGFuY2UudmFsaWRFbmREYXRlKSB7XG4gICAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoNCwgX2luc3RhbmNlLnZhbGlkRW5kRGF0ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZGVmYXVsdERhdGU/OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfaXNIaWpyaVNoYW1zaT86IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBfdmFsaWRTdGFydERhdGU/OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfdmFsaWRFbmREYXRlPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgRGF0YUFuZFRpbWVGaWVsZCB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8RGF0YUFuZFRpbWVGaWVsZC5Bc09iamVjdD4pIHtcbiAgICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICAgIHRoaXMuZGVmYXVsdERhdGUgPSBfdmFsdWUuZGVmYXVsdERhdGU7XG4gICAgICB0aGlzLmlzSGlqcmlTaGFtc2kgPSBfdmFsdWUuaXNIaWpyaVNoYW1zaTtcbiAgICAgIHRoaXMudmFsaWRTdGFydERhdGUgPSBfdmFsdWUudmFsaWRTdGFydERhdGU7XG4gICAgICB0aGlzLnZhbGlkRW5kRGF0ZSA9IF92YWx1ZS52YWxpZEVuZERhdGU7XG4gICAgICBEYXRhQW5kVGltZUZpZWxkLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgICB9XG4gICAgZ2V0IGRlZmF1bHREYXRlKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICByZXR1cm4gdGhpcy5fZGVmYXVsdERhdGU7XG4gICAgfVxuICAgIHNldCBkZWZhdWx0RGF0ZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9kZWZhdWx0RGF0ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgaXNIaWpyaVNoYW1zaSgpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICAgIHJldHVybiB0aGlzLl9pc0hpanJpU2hhbXNpO1xuICAgIH1cbiAgICBzZXQgaXNIaWpyaVNoYW1zaSh2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5faXNIaWpyaVNoYW1zaSA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgdmFsaWRTdGFydERhdGUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgIHJldHVybiB0aGlzLl92YWxpZFN0YXJ0RGF0ZTtcbiAgICB9XG4gICAgc2V0IHZhbGlkU3RhcnREYXRlKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX3ZhbGlkU3RhcnREYXRlID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCB2YWxpZEVuZERhdGUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgIHJldHVybiB0aGlzLl92YWxpZEVuZERhdGU7XG4gICAgfVxuICAgIHNldCB2YWxpZEVuZERhdGUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fdmFsaWRFbmREYXRlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAqL1xuICAgIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICAgIERhdGFBbmRUaW1lRmllbGQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAgICovXG4gICAgdG9PYmplY3QoKTogRGF0YUFuZFRpbWVGaWVsZC5Bc09iamVjdCB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkZWZhdWx0RGF0ZTogdGhpcy5kZWZhdWx0RGF0ZSxcbiAgICAgICAgaXNIaWpyaVNoYW1zaTogdGhpcy5pc0hpanJpU2hhbXNpLFxuICAgICAgICB2YWxpZFN0YXJ0RGF0ZTogdGhpcy52YWxpZFN0YXJ0RGF0ZSxcbiAgICAgICAgdmFsaWRFbmREYXRlOiB0aGlzLnZhbGlkRW5kRGF0ZVxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICAgKi9cbiAgICB0b0pTT04oKSB7XG4gICAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICAgKi9cbiAgICB0b1Byb3RvYnVmSlNPTihcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgICApOiBEYXRhQW5kVGltZUZpZWxkLkFzUHJvdG9idWZKU09OIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRlZmF1bHREYXRlOiB0aGlzLmRlZmF1bHREYXRlLFxuICAgICAgICBpc0hpanJpU2hhbXNpOiB0aGlzLmlzSGlqcmlTaGFtc2ksXG4gICAgICAgIHZhbGlkU3RhcnREYXRlOiB0aGlzLnZhbGlkU3RhcnREYXRlLFxuICAgICAgICB2YWxpZEVuZERhdGU6IHRoaXMudmFsaWRFbmREYXRlXG4gICAgICB9O1xuICAgIH1cbiAgfVxuICBleHBvcnQgbW9kdWxlIERhdGFBbmRUaW1lRmllbGQge1xuICAgIC8qKlxuICAgICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBEYXRhQW5kVGltZUZpZWxkXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgICBkZWZhdWx0RGF0ZT86IHN0cmluZztcbiAgICAgIGlzSGlqcmlTaGFtc2k/OiBib29sZWFuO1xuICAgICAgdmFsaWRTdGFydERhdGU/OiBzdHJpbmc7XG4gICAgICB2YWxpZEVuZERhdGU/OiBzdHJpbmc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgRGF0YUFuZFRpbWVGaWVsZFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgICAgZGVmYXVsdERhdGU/OiBzdHJpbmc7XG4gICAgICBpc0hpanJpU2hhbXNpPzogYm9vbGVhbjtcbiAgICAgIHZhbGlkU3RhcnREYXRlPzogc3RyaW5nO1xuICAgICAgdmFsaWRFbmREYXRlPzogc3RyaW5nO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBwcm90by5wdWIudjEubW9kZWxzLkZvcm0uQ2hlY2tCb3hcbiAgICovXG4gIGV4cG9ydCBjbGFzcyBDaGVja0JveCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgICBzdGF0aWMgaWQgPSAncHJvdG8ucHViLnYxLm1vZGVscy5Gb3JtLkNoZWNrQm94JztcblxuICAgIC8qKlxuICAgICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAqL1xuICAgIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQ2hlY2tCb3goKTtcbiAgICAgIENoZWNrQm94LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAqL1xuICAgIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBDaGVja0JveCkge1xuICAgICAgX2luc3RhbmNlLmRlZmF1bHRTZWxlY3RlZCA9IF9pbnN0YW5jZS5kZWZhdWx0U2VsZWN0ZWQgfHwgZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAgICovXG4gICAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIF9pbnN0YW5jZTogQ2hlY2tCb3gsXG4gICAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgICApIHtcbiAgICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBfaW5zdGFuY2UuZGVmYXVsdFNlbGVjdGVkID0gX3JlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgQ2hlY2tCb3gucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgICAqL1xuICAgIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihfaW5zdGFuY2U6IENoZWNrQm94LCBfd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICAgIGlmIChfaW5zdGFuY2UuZGVmYXVsdFNlbGVjdGVkKSB7XG4gICAgICAgIF93cml0ZXIud3JpdGVCb29sKDEsIF9pbnN0YW5jZS5kZWZhdWx0U2VsZWN0ZWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2RlZmF1bHRTZWxlY3RlZD86IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBDaGVja0JveCB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8Q2hlY2tCb3guQXNPYmplY3Q+KSB7XG4gICAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgICB0aGlzLmRlZmF1bHRTZWxlY3RlZCA9IF92YWx1ZS5kZWZhdWx0U2VsZWN0ZWQ7XG4gICAgICBDaGVja0JveC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gICAgfVxuICAgIGdldCBkZWZhdWx0U2VsZWN0ZWQoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgICByZXR1cm4gdGhpcy5fZGVmYXVsdFNlbGVjdGVkO1xuICAgIH1cbiAgICBzZXQgZGVmYXVsdFNlbGVjdGVkKHZhbHVlOiBib29sZWFuIHwgdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9kZWZhdWx0U2VsZWN0ZWQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICovXG4gICAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgICAgQ2hlY2tCb3guc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAgICovXG4gICAgdG9PYmplY3QoKTogQ2hlY2tCb3guQXNPYmplY3Qge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGVmYXVsdFNlbGVjdGVkOiB0aGlzLmRlZmF1bHRTZWxlY3RlZFxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICAgKi9cbiAgICB0b0pTT04oKSB7XG4gICAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICAgKi9cbiAgICB0b1Byb3RvYnVmSlNPTihcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgICApOiBDaGVja0JveC5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkZWZhdWx0U2VsZWN0ZWQ6IHRoaXMuZGVmYXVsdFNlbGVjdGVkXG4gICAgICB9O1xuICAgIH1cbiAgfVxuICBleHBvcnQgbW9kdWxlIENoZWNrQm94IHtcbiAgICAvKipcbiAgICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgQ2hlY2tCb3hcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICAgIGRlZmF1bHRTZWxlY3RlZD86IGJvb2xlYW47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgQ2hlY2tCb3hcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICAgIGRlZmF1bHRTZWxlY3RlZD86IGJvb2xlYW47XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIHByb3RvLnB1Yi52MS5tb2RlbHMuRm9ybS5SYWRpb0J1dHRvbkxpc3RcbiAgICovXG4gIGV4cG9ydCBjbGFzcyBSYWRpb0J1dHRvbkxpc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gICAgc3RhdGljIGlkID0gJ3Byb3RvLnB1Yi52MS5tb2RlbHMuRm9ybS5SYWRpb0J1dHRvbkxpc3QnO1xuXG4gICAgLyoqXG4gICAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICovXG4gICAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBSYWRpb0J1dHRvbkxpc3QoKTtcbiAgICAgIFJhZGlvQnV0dG9uTGlzdC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICAgIGluc3RhbmNlLFxuICAgICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICAgKTtcbiAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogUmFkaW9CdXR0b25MaXN0KSB7XG4gICAgICBfaW5zdGFuY2UudmFsdWVzID0gX2luc3RhbmNlLnZhbHVlcyB8fCBbXTtcbiAgICAgIF9pbnN0YW5jZS5tdWx0aVNlbGVjdGlvbiA9IF9pbnN0YW5jZS5tdWx0aVNlbGVjdGlvbiB8fCBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgX2luc3RhbmNlOiBSYWRpb0J1dHRvbkxpc3QsXG4gICAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgICApIHtcbiAgICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAoX2luc3RhbmNlLnZhbHVlcyA9IF9pbnN0YW5jZS52YWx1ZXMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICAgIF9yZWFkZXIucmVhZFN0cmluZygpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgX2luc3RhbmNlLm11bHRpU2VsZWN0aW9uID0gX3JlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgUmFkaW9CdXR0b25MaXN0LnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgICBfaW5zdGFuY2U6IFJhZGlvQnV0dG9uTGlzdCxcbiAgICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICAgICkge1xuICAgICAgaWYgKF9pbnN0YW5jZS52YWx1ZXMgJiYgX2luc3RhbmNlLnZhbHVlcy5sZW5ndGgpIHtcbiAgICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkU3RyaW5nKDEsIF9pbnN0YW5jZS52YWx1ZXMpO1xuICAgICAgfVxuICAgICAgaWYgKF9pbnN0YW5jZS5tdWx0aVNlbGVjdGlvbikge1xuICAgICAgICBfd3JpdGVyLndyaXRlQm9vbCgyLCBfaW5zdGFuY2UubXVsdGlTZWxlY3Rpb24pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX3ZhbHVlcz86IHN0cmluZ1tdO1xuICAgIHByaXZhdGUgX211bHRpU2VsZWN0aW9uPzogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIFJhZGlvQnV0dG9uTGlzdCB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8UmFkaW9CdXR0b25MaXN0LkFzT2JqZWN0Pikge1xuICAgICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgICAgdGhpcy52YWx1ZXMgPSAoX3ZhbHVlLnZhbHVlcyB8fCBbXSkuc2xpY2UoKTtcbiAgICAgIHRoaXMubXVsdGlTZWxlY3Rpb24gPSBfdmFsdWUubXVsdGlTZWxlY3Rpb247XG4gICAgICBSYWRpb0J1dHRvbkxpc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICAgIH1cbiAgICBnZXQgdmFsdWVzKCk6IHN0cmluZ1tdIHwgdW5kZWZpbmVkIHtcbiAgICAgIHJldHVybiB0aGlzLl92YWx1ZXM7XG4gICAgfVxuICAgIHNldCB2YWx1ZXModmFsdWU6IHN0cmluZ1tdIHwgdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl92YWx1ZXMgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IG11bHRpU2VsZWN0aW9uKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgICAgcmV0dXJuIHRoaXMuX211bHRpU2VsZWN0aW9uO1xuICAgIH1cbiAgICBzZXQgbXVsdGlTZWxlY3Rpb24odmFsdWU6IGJvb2xlYW4gfCB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX211bHRpU2VsZWN0aW9uID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAqL1xuICAgIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICAgIFJhZGlvQnV0dG9uTGlzdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICAgKi9cbiAgICB0b09iamVjdCgpOiBSYWRpb0J1dHRvbkxpc3QuQXNPYmplY3Qge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWVzOiAodGhpcy52YWx1ZXMgfHwgW10pLnNsaWNlKCksXG4gICAgICAgIG11bHRpU2VsZWN0aW9uOiB0aGlzLm11bHRpU2VsZWN0aW9uXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgICAqL1xuICAgIHRvSlNPTigpIHtcbiAgICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgICAqL1xuICAgIHRvUHJvdG9idWZKU09OKFxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICAgICk6IFJhZGlvQnV0dG9uTGlzdC5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZXM6ICh0aGlzLnZhbHVlcyB8fCBbXSkuc2xpY2UoKSxcbiAgICAgICAgbXVsdGlTZWxlY3Rpb246IHRoaXMubXVsdGlTZWxlY3Rpb25cbiAgICAgIH07XG4gICAgfVxuICB9XG4gIGV4cG9ydCBtb2R1bGUgUmFkaW9CdXR0b25MaXN0IHtcbiAgICAvKipcbiAgICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgUmFkaW9CdXR0b25MaXN0XG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgICB2YWx1ZXM/OiBzdHJpbmdbXTtcbiAgICAgIG11bHRpU2VsZWN0aW9uPzogYm9vbGVhbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBSYWRpb0J1dHRvbkxpc3RcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICAgIHZhbHVlcz86IHN0cmluZ1tdO1xuICAgICAgbXVsdGlTZWxlY3Rpb24/OiBib29sZWFuO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBwcm90by5wdWIudjEubW9kZWxzLkZvcm0uTGlzdFxuICAgKi9cbiAgZXhwb3J0IGNsYXNzIExpc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gICAgc3RhdGljIGlkID0gJ3Byb3RvLnB1Yi52MS5tb2RlbHMuRm9ybS5MaXN0JztcblxuICAgIC8qKlxuICAgICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAqL1xuICAgIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgTGlzdCgpO1xuICAgICAgTGlzdC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogTGlzdCkge1xuICAgICAgX2luc3RhbmNlLnZhbHVlcyA9IF9pbnN0YW5jZS52YWx1ZXMgfHwgW107XG4gICAgICBfaW5zdGFuY2UubXVsdGlTZWxlY3Rpb24gPSBfaW5zdGFuY2UubXVsdGlTZWxlY3Rpb24gfHwgZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAgICovXG4gICAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihfaW5zdGFuY2U6IExpc3QsIF9yZWFkZXI6IEJpbmFyeVJlYWRlcikge1xuICAgICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIChfaW5zdGFuY2UudmFsdWVzID0gX2luc3RhbmNlLnZhbHVlcyB8fCBbXSkucHVzaChcbiAgICAgICAgICAgICAgX3JlYWRlci5yZWFkU3RyaW5nKClcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBfaW5zdGFuY2UubXVsdGlTZWxlY3Rpb24gPSBfcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBMaXN0LnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoX2luc3RhbmNlOiBMaXN0LCBfd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICAgIGlmIChfaW5zdGFuY2UudmFsdWVzICYmIF9pbnN0YW5jZS52YWx1ZXMubGVuZ3RoKSB7XG4gICAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZFN0cmluZygxLCBfaW5zdGFuY2UudmFsdWVzKTtcbiAgICAgIH1cbiAgICAgIGlmIChfaW5zdGFuY2UubXVsdGlTZWxlY3Rpb24pIHtcbiAgICAgICAgX3dyaXRlci53cml0ZUJvb2woMiwgX2luc3RhbmNlLm11bHRpU2VsZWN0aW9uKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF92YWx1ZXM/OiBzdHJpbmdbXTtcbiAgICBwcml2YXRlIF9tdWx0aVNlbGVjdGlvbj86IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBMaXN0IHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxMaXN0LkFzT2JqZWN0Pikge1xuICAgICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgICAgdGhpcy52YWx1ZXMgPSAoX3ZhbHVlLnZhbHVlcyB8fCBbXSkuc2xpY2UoKTtcbiAgICAgIHRoaXMubXVsdGlTZWxlY3Rpb24gPSBfdmFsdWUubXVsdGlTZWxlY3Rpb247XG4gICAgICBMaXN0LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgICB9XG4gICAgZ2V0IHZhbHVlcygpOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCB7XG4gICAgICByZXR1cm4gdGhpcy5fdmFsdWVzO1xuICAgIH1cbiAgICBzZXQgdmFsdWVzKHZhbHVlOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fdmFsdWVzID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBtdWx0aVNlbGVjdGlvbigpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICAgIHJldHVybiB0aGlzLl9tdWx0aVNlbGVjdGlvbjtcbiAgICB9XG4gICAgc2V0IG11bHRpU2VsZWN0aW9uKHZhbHVlOiBib29sZWFuIHwgdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9tdWx0aVNlbGVjdGlvbiA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgICBMaXN0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgICAqL1xuICAgIHRvT2JqZWN0KCk6IExpc3QuQXNPYmplY3Qge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWVzOiAodGhpcy52YWx1ZXMgfHwgW10pLnNsaWNlKCksXG4gICAgICAgIG11bHRpU2VsZWN0aW9uOiB0aGlzLm11bHRpU2VsZWN0aW9uXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgICAqL1xuICAgIHRvSlNPTigpIHtcbiAgICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgICAqL1xuICAgIHRvUHJvdG9idWZKU09OKFxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICAgICk6IExpc3QuQXNQcm90b2J1ZkpTT04ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWVzOiAodGhpcy52YWx1ZXMgfHwgW10pLnNsaWNlKCksXG4gICAgICAgIG11bHRpU2VsZWN0aW9uOiB0aGlzLm11bHRpU2VsZWN0aW9uXG4gICAgICB9O1xuICAgIH1cbiAgfVxuICBleHBvcnQgbW9kdWxlIExpc3Qge1xuICAgIC8qKlxuICAgICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBMaXN0XG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgICB2YWx1ZXM/OiBzdHJpbmdbXTtcbiAgICAgIG11bHRpU2VsZWN0aW9uPzogYm9vbGVhbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBMaXN0XG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgICB2YWx1ZXM/OiBzdHJpbmdbXTtcbiAgICAgIG11bHRpU2VsZWN0aW9uPzogYm9vbGVhbjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3IgcHJvdG8ucHViLnYxLm1vZGVscy5Gb3JtLkZpZWxkXG4gICAqL1xuICBleHBvcnQgY2xhc3MgRmllbGQgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gICAgc3RhdGljIGlkID0gJ3Byb3RvLnB1Yi52MS5tb2RlbHMuRm9ybS5GaWVsZCc7XG5cbiAgICAvKipcbiAgICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEZpZWxkKCk7XG4gICAgICBGaWVsZC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogRmllbGQpIHtcbiAgICAgIF9pbnN0YW5jZS5pZCA9IF9pbnN0YW5jZS5pZCB8fCAnJztcbiAgICAgIF9pbnN0YW5jZS5oaW50ID0gX2luc3RhbmNlLmhpbnQgfHwgJyc7XG4gICAgICBfaW5zdGFuY2UuaXNPcHRpb25hbCA9IF9pbnN0YW5jZS5pc09wdGlvbmFsIHx8IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgICAqL1xuICAgIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBfaW5zdGFuY2U6IEZpZWxkLFxuICAgICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICAgKSB7XG4gICAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgX2luc3RhbmNlLmlkID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBfaW5zdGFuY2UuaGludCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgX2luc3RhbmNlLmlzT3B0aW9uYWwgPSBfcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICBfaW5zdGFuY2UudGV4dEZpZWxkID0gbmV3IEZvcm0uVGV4dEZpZWxkKCk7XG4gICAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgICBfaW5zdGFuY2UudGV4dEZpZWxkLFxuICAgICAgICAgICAgICBGb3JtLlRleHRGaWVsZC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgX2luc3RhbmNlLmZvcm1hdHRlZFRleHRGaWVsZCA9IG5ldyBGb3JtLkZvcm1hdHRlZFRleHRGaWVsZCgpO1xuICAgICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgICAgX2luc3RhbmNlLmZvcm1hdHRlZFRleHRGaWVsZCxcbiAgICAgICAgICAgICAgRm9ybS5Gb3JtYXR0ZWRUZXh0RmllbGQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICAgIF9pbnN0YW5jZS5yaWNoRm9ybWF0dGVkVGV4dEZpZWxkID0gbmV3IEZvcm0uUmljaEZvcm1hdHRlZFRleHRGaWVsZCgpO1xuICAgICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgICAgX2luc3RhbmNlLnJpY2hGb3JtYXR0ZWRUZXh0RmllbGQsXG4gICAgICAgICAgICAgIEZvcm0uUmljaEZvcm1hdHRlZFRleHRGaWVsZC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICBfaW5zdGFuY2UubnVtYmVyRmllbGQgPSBuZXcgRm9ybS5OdW1iZXJGaWVsZCgpO1xuICAgICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgICAgX2luc3RhbmNlLm51bWJlckZpZWxkLFxuICAgICAgICAgICAgICBGb3JtLk51bWJlckZpZWxkLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgIF9pbnN0YW5jZS5kYXRlRmllbGQgPSBuZXcgRm9ybS5EYXRlRmllbGQoKTtcbiAgICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICAgIF9pbnN0YW5jZS5kYXRlRmllbGQsXG4gICAgICAgICAgICAgIEZvcm0uRGF0ZUZpZWxkLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgIF9pbnN0YW5jZS50aW1lRmllbGQgPSBuZXcgRm9ybS5UaW1lRmllbGQoKTtcbiAgICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICAgIF9pbnN0YW5jZS50aW1lRmllbGQsXG4gICAgICAgICAgICAgIEZvcm0uVGltZUZpZWxkLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICBfaW5zdGFuY2UuZGF0ZUFuZFRpbWVGaWVsZCA9IG5ldyBGb3JtLkRhdGFBbmRUaW1lRmllbGQoKTtcbiAgICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICAgIF9pbnN0YW5jZS5kYXRlQW5kVGltZUZpZWxkLFxuICAgICAgICAgICAgICBGb3JtLkRhdGFBbmRUaW1lRmllbGQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgX2luc3RhbmNlLmNoZWNrYm94ID0gbmV3IEZvcm0uQ2hlY2tCb3goKTtcbiAgICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICAgIF9pbnN0YW5jZS5jaGVja2JveCxcbiAgICAgICAgICAgICAgRm9ybS5DaGVja0JveC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICBfaW5zdGFuY2UucmFkaW9CdXR0b25MaXN0ID0gbmV3IEZvcm0uUmFkaW9CdXR0b25MaXN0KCk7XG4gICAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgICBfaW5zdGFuY2UucmFkaW9CdXR0b25MaXN0LFxuICAgICAgICAgICAgICBGb3JtLlJhZGlvQnV0dG9uTGlzdC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgX2luc3RhbmNlLmxpc3QgPSBuZXcgRm9ybS5MaXN0KCk7XG4gICAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgICBfaW5zdGFuY2UubGlzdCxcbiAgICAgICAgICAgICAgRm9ybS5MaXN0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIEZpZWxkLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoX2luc3RhbmNlOiBGaWVsZCwgX3dyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgICBpZiAoX2luc3RhbmNlLmlkKSB7XG4gICAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLmlkKTtcbiAgICAgIH1cbiAgICAgIGlmIChfaW5zdGFuY2UuaGludCkge1xuICAgICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDIsIF9pbnN0YW5jZS5oaW50KTtcbiAgICAgIH1cbiAgICAgIGlmIChfaW5zdGFuY2UuaXNPcHRpb25hbCkge1xuICAgICAgICBfd3JpdGVyLndyaXRlQm9vbCgzLCBfaW5zdGFuY2UuaXNPcHRpb25hbCk7XG4gICAgICB9XG4gICAgICBpZiAoX2luc3RhbmNlLnRleHRGaWVsZCkge1xuICAgICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgICA0LFxuICAgICAgICAgIF9pbnN0YW5jZS50ZXh0RmllbGQgYXMgYW55LFxuICAgICAgICAgIEZvcm0uVGV4dEZpZWxkLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAoX2luc3RhbmNlLmZvcm1hdHRlZFRleHRGaWVsZCkge1xuICAgICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgICAxMSxcbiAgICAgICAgICBfaW5zdGFuY2UuZm9ybWF0dGVkVGV4dEZpZWxkIGFzIGFueSxcbiAgICAgICAgICBGb3JtLkZvcm1hdHRlZFRleHRGaWVsZC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKF9pbnN0YW5jZS5yaWNoRm9ybWF0dGVkVGV4dEZpZWxkKSB7XG4gICAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIF9pbnN0YW5jZS5yaWNoRm9ybWF0dGVkVGV4dEZpZWxkIGFzIGFueSxcbiAgICAgICAgICBGb3JtLlJpY2hGb3JtYXR0ZWRUZXh0RmllbGQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmIChfaW5zdGFuY2UubnVtYmVyRmllbGQpIHtcbiAgICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgICAgNSxcbiAgICAgICAgICBfaW5zdGFuY2UubnVtYmVyRmllbGQgYXMgYW55LFxuICAgICAgICAgIEZvcm0uTnVtYmVyRmllbGQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmIChfaW5zdGFuY2UuZGF0ZUZpZWxkKSB7XG4gICAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAgIDYsXG4gICAgICAgICAgX2luc3RhbmNlLmRhdGVGaWVsZCBhcyBhbnksXG4gICAgICAgICAgRm9ybS5EYXRlRmllbGQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmIChfaW5zdGFuY2UudGltZUZpZWxkKSB7XG4gICAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAgIDcsXG4gICAgICAgICAgX2luc3RhbmNlLnRpbWVGaWVsZCBhcyBhbnksXG4gICAgICAgICAgRm9ybS5UaW1lRmllbGQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmIChfaW5zdGFuY2UuZGF0ZUFuZFRpbWVGaWVsZCkge1xuICAgICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgICAxMyxcbiAgICAgICAgICBfaW5zdGFuY2UuZGF0ZUFuZFRpbWVGaWVsZCBhcyBhbnksXG4gICAgICAgICAgRm9ybS5EYXRhQW5kVGltZUZpZWxkLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAoX2luc3RhbmNlLmNoZWNrYm94KSB7XG4gICAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAgIDgsXG4gICAgICAgICAgX2luc3RhbmNlLmNoZWNrYm94IGFzIGFueSxcbiAgICAgICAgICBGb3JtLkNoZWNrQm94LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAoX2luc3RhbmNlLnJhZGlvQnV0dG9uTGlzdCkge1xuICAgICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgICA5LFxuICAgICAgICAgIF9pbnN0YW5jZS5yYWRpb0J1dHRvbkxpc3QgYXMgYW55LFxuICAgICAgICAgIEZvcm0uUmFkaW9CdXR0b25MaXN0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAoX2luc3RhbmNlLmxpc3QpIHtcbiAgICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgX2luc3RhbmNlLmxpc3QgYXMgYW55LFxuICAgICAgICAgIEZvcm0uTGlzdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2lkPzogc3RyaW5nO1xuICAgIHByaXZhdGUgX2hpbnQ/OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfaXNPcHRpb25hbD86IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBfdGV4dEZpZWxkPzogRm9ybS5UZXh0RmllbGQ7XG4gICAgcHJpdmF0ZSBfZm9ybWF0dGVkVGV4dEZpZWxkPzogRm9ybS5Gb3JtYXR0ZWRUZXh0RmllbGQ7XG4gICAgcHJpdmF0ZSBfcmljaEZvcm1hdHRlZFRleHRGaWVsZD86IEZvcm0uUmljaEZvcm1hdHRlZFRleHRGaWVsZDtcbiAgICBwcml2YXRlIF9udW1iZXJGaWVsZD86IEZvcm0uTnVtYmVyRmllbGQ7XG4gICAgcHJpdmF0ZSBfZGF0ZUZpZWxkPzogRm9ybS5EYXRlRmllbGQ7XG4gICAgcHJpdmF0ZSBfdGltZUZpZWxkPzogRm9ybS5UaW1lRmllbGQ7XG4gICAgcHJpdmF0ZSBfZGF0ZUFuZFRpbWVGaWVsZD86IEZvcm0uRGF0YUFuZFRpbWVGaWVsZDtcbiAgICBwcml2YXRlIF9jaGVja2JveD86IEZvcm0uQ2hlY2tCb3g7XG4gICAgcHJpdmF0ZSBfcmFkaW9CdXR0b25MaXN0PzogRm9ybS5SYWRpb0J1dHRvbkxpc3Q7XG4gICAgcHJpdmF0ZSBfbGlzdD86IEZvcm0uTGlzdDtcblxuICAgIHByaXZhdGUgX3R5cGU6IEZpZWxkLlR5cGVDYXNlID0gRmllbGQuVHlwZUNhc2Uubm9uZTtcblxuICAgIC8qKlxuICAgICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIEZpZWxkIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxGaWVsZC5Bc09iamVjdD4pIHtcbiAgICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICAgIHRoaXMuaWQgPSBfdmFsdWUuaWQ7XG4gICAgICB0aGlzLmhpbnQgPSBfdmFsdWUuaGludDtcbiAgICAgIHRoaXMuaXNPcHRpb25hbCA9IF92YWx1ZS5pc09wdGlvbmFsO1xuICAgICAgdGhpcy50ZXh0RmllbGQgPSBfdmFsdWUudGV4dEZpZWxkXG4gICAgICAgID8gbmV3IEZvcm0uVGV4dEZpZWxkKF92YWx1ZS50ZXh0RmllbGQpXG4gICAgICAgIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5mb3JtYXR0ZWRUZXh0RmllbGQgPSBfdmFsdWUuZm9ybWF0dGVkVGV4dEZpZWxkXG4gICAgICAgID8gbmV3IEZvcm0uRm9ybWF0dGVkVGV4dEZpZWxkKF92YWx1ZS5mb3JtYXR0ZWRUZXh0RmllbGQpXG4gICAgICAgIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5yaWNoRm9ybWF0dGVkVGV4dEZpZWxkID0gX3ZhbHVlLnJpY2hGb3JtYXR0ZWRUZXh0RmllbGRcbiAgICAgICAgPyBuZXcgRm9ybS5SaWNoRm9ybWF0dGVkVGV4dEZpZWxkKF92YWx1ZS5yaWNoRm9ybWF0dGVkVGV4dEZpZWxkKVxuICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMubnVtYmVyRmllbGQgPSBfdmFsdWUubnVtYmVyRmllbGRcbiAgICAgICAgPyBuZXcgRm9ybS5OdW1iZXJGaWVsZChfdmFsdWUubnVtYmVyRmllbGQpXG4gICAgICAgIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kYXRlRmllbGQgPSBfdmFsdWUuZGF0ZUZpZWxkXG4gICAgICAgID8gbmV3IEZvcm0uRGF0ZUZpZWxkKF92YWx1ZS5kYXRlRmllbGQpXG4gICAgICAgIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy50aW1lRmllbGQgPSBfdmFsdWUudGltZUZpZWxkXG4gICAgICAgID8gbmV3IEZvcm0uVGltZUZpZWxkKF92YWx1ZS50aW1lRmllbGQpXG4gICAgICAgIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kYXRlQW5kVGltZUZpZWxkID0gX3ZhbHVlLmRhdGVBbmRUaW1lRmllbGRcbiAgICAgICAgPyBuZXcgRm9ybS5EYXRhQW5kVGltZUZpZWxkKF92YWx1ZS5kYXRlQW5kVGltZUZpZWxkKVxuICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuY2hlY2tib3ggPSBfdmFsdWUuY2hlY2tib3hcbiAgICAgICAgPyBuZXcgRm9ybS5DaGVja0JveChfdmFsdWUuY2hlY2tib3gpXG4gICAgICAgIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5yYWRpb0J1dHRvbkxpc3QgPSBfdmFsdWUucmFkaW9CdXR0b25MaXN0XG4gICAgICAgID8gbmV3IEZvcm0uUmFkaW9CdXR0b25MaXN0KF92YWx1ZS5yYWRpb0J1dHRvbkxpc3QpXG4gICAgICAgIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5saXN0ID0gX3ZhbHVlLmxpc3QgPyBuZXcgRm9ybS5MaXN0KF92YWx1ZS5saXN0KSA6IHVuZGVmaW5lZDtcbiAgICAgIEZpZWxkLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgICB9XG4gICAgZ2V0IGlkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICByZXR1cm4gdGhpcy5faWQ7XG4gICAgfVxuICAgIHNldCBpZCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9pZCA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgaGludCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgcmV0dXJuIHRoaXMuX2hpbnQ7XG4gICAgfVxuICAgIHNldCBoaW50KHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX2hpbnQgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IGlzT3B0aW9uYWwoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgICByZXR1cm4gdGhpcy5faXNPcHRpb25hbDtcbiAgICB9XG4gICAgc2V0IGlzT3B0aW9uYWwodmFsdWU6IGJvb2xlYW4gfCB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX2lzT3B0aW9uYWwgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IHRleHRGaWVsZCgpOiBGb3JtLlRleHRGaWVsZCB8IHVuZGVmaW5lZCB7XG4gICAgICByZXR1cm4gdGhpcy5fdGV4dEZpZWxkO1xuICAgIH1cbiAgICBzZXQgdGV4dEZpZWxkKHZhbHVlOiBGb3JtLlRleHRGaWVsZCB8IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5fZm9ybWF0dGVkVGV4dEZpZWxkID0gdGhpcy5fcmljaEZvcm1hdHRlZFRleHRGaWVsZCA9IHRoaXMuX251bWJlckZpZWxkID0gdGhpcy5fZGF0ZUZpZWxkID0gdGhpcy5fdGltZUZpZWxkID0gdGhpcy5fZGF0ZUFuZFRpbWVGaWVsZCA9IHRoaXMuX2NoZWNrYm94ID0gdGhpcy5fcmFkaW9CdXR0b25MaXN0ID0gdGhpcy5fbGlzdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5fdHlwZSA9IEZpZWxkLlR5cGVDYXNlLnRleHRGaWVsZDtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3RleHRGaWVsZCA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgZm9ybWF0dGVkVGV4dEZpZWxkKCk6IEZvcm0uRm9ybWF0dGVkVGV4dEZpZWxkIHwgdW5kZWZpbmVkIHtcbiAgICAgIHJldHVybiB0aGlzLl9mb3JtYXR0ZWRUZXh0RmllbGQ7XG4gICAgfVxuICAgIHNldCBmb3JtYXR0ZWRUZXh0RmllbGQodmFsdWU6IEZvcm0uRm9ybWF0dGVkVGV4dEZpZWxkIHwgdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLl90ZXh0RmllbGQgPSB0aGlzLl9yaWNoRm9ybWF0dGVkVGV4dEZpZWxkID0gdGhpcy5fbnVtYmVyRmllbGQgPSB0aGlzLl9kYXRlRmllbGQgPSB0aGlzLl90aW1lRmllbGQgPSB0aGlzLl9kYXRlQW5kVGltZUZpZWxkID0gdGhpcy5fY2hlY2tib3ggPSB0aGlzLl9yYWRpb0J1dHRvbkxpc3QgPSB0aGlzLl9saXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl90eXBlID0gRmllbGQuVHlwZUNhc2UuZm9ybWF0dGVkVGV4dEZpZWxkO1xuICAgICAgfVxuICAgICAgdGhpcy5fZm9ybWF0dGVkVGV4dEZpZWxkID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCByaWNoRm9ybWF0dGVkVGV4dEZpZWxkKCk6IEZvcm0uUmljaEZvcm1hdHRlZFRleHRGaWVsZCB8IHVuZGVmaW5lZCB7XG4gICAgICByZXR1cm4gdGhpcy5fcmljaEZvcm1hdHRlZFRleHRGaWVsZDtcbiAgICB9XG4gICAgc2V0IHJpY2hGb3JtYXR0ZWRUZXh0RmllbGQodmFsdWU6IEZvcm0uUmljaEZvcm1hdHRlZFRleHRGaWVsZCB8IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5fdGV4dEZpZWxkID0gdGhpcy5fZm9ybWF0dGVkVGV4dEZpZWxkID0gdGhpcy5fbnVtYmVyRmllbGQgPSB0aGlzLl9kYXRlRmllbGQgPSB0aGlzLl90aW1lRmllbGQgPSB0aGlzLl9kYXRlQW5kVGltZUZpZWxkID0gdGhpcy5fY2hlY2tib3ggPSB0aGlzLl9yYWRpb0J1dHRvbkxpc3QgPSB0aGlzLl9saXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl90eXBlID0gRmllbGQuVHlwZUNhc2UucmljaEZvcm1hdHRlZFRleHRGaWVsZDtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3JpY2hGb3JtYXR0ZWRUZXh0RmllbGQgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IG51bWJlckZpZWxkKCk6IEZvcm0uTnVtYmVyRmllbGQgfCB1bmRlZmluZWQge1xuICAgICAgcmV0dXJuIHRoaXMuX251bWJlckZpZWxkO1xuICAgIH1cbiAgICBzZXQgbnVtYmVyRmllbGQodmFsdWU6IEZvcm0uTnVtYmVyRmllbGQgfCB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuX3RleHRGaWVsZCA9IHRoaXMuX2Zvcm1hdHRlZFRleHRGaWVsZCA9IHRoaXMuX3JpY2hGb3JtYXR0ZWRUZXh0RmllbGQgPSB0aGlzLl9kYXRlRmllbGQgPSB0aGlzLl90aW1lRmllbGQgPSB0aGlzLl9kYXRlQW5kVGltZUZpZWxkID0gdGhpcy5fY2hlY2tib3ggPSB0aGlzLl9yYWRpb0J1dHRvbkxpc3QgPSB0aGlzLl9saXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl90eXBlID0gRmllbGQuVHlwZUNhc2UubnVtYmVyRmllbGQ7XG4gICAgICB9XG4gICAgICB0aGlzLl9udW1iZXJGaWVsZCA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgZGF0ZUZpZWxkKCk6IEZvcm0uRGF0ZUZpZWxkIHwgdW5kZWZpbmVkIHtcbiAgICAgIHJldHVybiB0aGlzLl9kYXRlRmllbGQ7XG4gICAgfVxuICAgIHNldCBkYXRlRmllbGQodmFsdWU6IEZvcm0uRGF0ZUZpZWxkIHwgdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLl90ZXh0RmllbGQgPSB0aGlzLl9mb3JtYXR0ZWRUZXh0RmllbGQgPSB0aGlzLl9yaWNoRm9ybWF0dGVkVGV4dEZpZWxkID0gdGhpcy5fbnVtYmVyRmllbGQgPSB0aGlzLl90aW1lRmllbGQgPSB0aGlzLl9kYXRlQW5kVGltZUZpZWxkID0gdGhpcy5fY2hlY2tib3ggPSB0aGlzLl9yYWRpb0J1dHRvbkxpc3QgPSB0aGlzLl9saXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl90eXBlID0gRmllbGQuVHlwZUNhc2UuZGF0ZUZpZWxkO1xuICAgICAgfVxuICAgICAgdGhpcy5fZGF0ZUZpZWxkID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCB0aW1lRmllbGQoKTogRm9ybS5UaW1lRmllbGQgfCB1bmRlZmluZWQge1xuICAgICAgcmV0dXJuIHRoaXMuX3RpbWVGaWVsZDtcbiAgICB9XG4gICAgc2V0IHRpbWVGaWVsZCh2YWx1ZTogRm9ybS5UaW1lRmllbGQgfCB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuX3RleHRGaWVsZCA9IHRoaXMuX2Zvcm1hdHRlZFRleHRGaWVsZCA9IHRoaXMuX3JpY2hGb3JtYXR0ZWRUZXh0RmllbGQgPSB0aGlzLl9udW1iZXJGaWVsZCA9IHRoaXMuX2RhdGVGaWVsZCA9IHRoaXMuX2RhdGVBbmRUaW1lRmllbGQgPSB0aGlzLl9jaGVja2JveCA9IHRoaXMuX3JhZGlvQnV0dG9uTGlzdCA9IHRoaXMuX2xpc3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX3R5cGUgPSBGaWVsZC5UeXBlQ2FzZS50aW1lRmllbGQ7XG4gICAgICB9XG4gICAgICB0aGlzLl90aW1lRmllbGQgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IGRhdGVBbmRUaW1lRmllbGQoKTogRm9ybS5EYXRhQW5kVGltZUZpZWxkIHwgdW5kZWZpbmVkIHtcbiAgICAgIHJldHVybiB0aGlzLl9kYXRlQW5kVGltZUZpZWxkO1xuICAgIH1cbiAgICBzZXQgZGF0ZUFuZFRpbWVGaWVsZCh2YWx1ZTogRm9ybS5EYXRhQW5kVGltZUZpZWxkIHwgdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLl90ZXh0RmllbGQgPSB0aGlzLl9mb3JtYXR0ZWRUZXh0RmllbGQgPSB0aGlzLl9yaWNoRm9ybWF0dGVkVGV4dEZpZWxkID0gdGhpcy5fbnVtYmVyRmllbGQgPSB0aGlzLl9kYXRlRmllbGQgPSB0aGlzLl90aW1lRmllbGQgPSB0aGlzLl9jaGVja2JveCA9IHRoaXMuX3JhZGlvQnV0dG9uTGlzdCA9IHRoaXMuX2xpc3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX3R5cGUgPSBGaWVsZC5UeXBlQ2FzZS5kYXRlQW5kVGltZUZpZWxkO1xuICAgICAgfVxuICAgICAgdGhpcy5fZGF0ZUFuZFRpbWVGaWVsZCA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgY2hlY2tib3goKTogRm9ybS5DaGVja0JveCB8IHVuZGVmaW5lZCB7XG4gICAgICByZXR1cm4gdGhpcy5fY2hlY2tib3g7XG4gICAgfVxuICAgIHNldCBjaGVja2JveCh2YWx1ZTogRm9ybS5DaGVja0JveCB8IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5fdGV4dEZpZWxkID0gdGhpcy5fZm9ybWF0dGVkVGV4dEZpZWxkID0gdGhpcy5fcmljaEZvcm1hdHRlZFRleHRGaWVsZCA9IHRoaXMuX251bWJlckZpZWxkID0gdGhpcy5fZGF0ZUZpZWxkID0gdGhpcy5fdGltZUZpZWxkID0gdGhpcy5fZGF0ZUFuZFRpbWVGaWVsZCA9IHRoaXMuX3JhZGlvQnV0dG9uTGlzdCA9IHRoaXMuX2xpc3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX3R5cGUgPSBGaWVsZC5UeXBlQ2FzZS5jaGVja2JveDtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2NoZWNrYm94ID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCByYWRpb0J1dHRvbkxpc3QoKTogRm9ybS5SYWRpb0J1dHRvbkxpc3QgfCB1bmRlZmluZWQge1xuICAgICAgcmV0dXJuIHRoaXMuX3JhZGlvQnV0dG9uTGlzdDtcbiAgICB9XG4gICAgc2V0IHJhZGlvQnV0dG9uTGlzdCh2YWx1ZTogRm9ybS5SYWRpb0J1dHRvbkxpc3QgfCB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuX3RleHRGaWVsZCA9IHRoaXMuX2Zvcm1hdHRlZFRleHRGaWVsZCA9IHRoaXMuX3JpY2hGb3JtYXR0ZWRUZXh0RmllbGQgPSB0aGlzLl9udW1iZXJGaWVsZCA9IHRoaXMuX2RhdGVGaWVsZCA9IHRoaXMuX3RpbWVGaWVsZCA9IHRoaXMuX2RhdGVBbmRUaW1lRmllbGQgPSB0aGlzLl9jaGVja2JveCA9IHRoaXMuX2xpc3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX3R5cGUgPSBGaWVsZC5UeXBlQ2FzZS5yYWRpb0J1dHRvbkxpc3Q7XG4gICAgICB9XG4gICAgICB0aGlzLl9yYWRpb0J1dHRvbkxpc3QgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IGxpc3QoKTogRm9ybS5MaXN0IHwgdW5kZWZpbmVkIHtcbiAgICAgIHJldHVybiB0aGlzLl9saXN0O1xuICAgIH1cbiAgICBzZXQgbGlzdCh2YWx1ZTogRm9ybS5MaXN0IHwgdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLl90ZXh0RmllbGQgPSB0aGlzLl9mb3JtYXR0ZWRUZXh0RmllbGQgPSB0aGlzLl9yaWNoRm9ybWF0dGVkVGV4dEZpZWxkID0gdGhpcy5fbnVtYmVyRmllbGQgPSB0aGlzLl9kYXRlRmllbGQgPSB0aGlzLl90aW1lRmllbGQgPSB0aGlzLl9kYXRlQW5kVGltZUZpZWxkID0gdGhpcy5fY2hlY2tib3ggPSB0aGlzLl9yYWRpb0J1dHRvbkxpc3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX3R5cGUgPSBGaWVsZC5UeXBlQ2FzZS5saXN0O1xuICAgICAgfVxuICAgICAgdGhpcy5fbGlzdCA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgdHlwZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLl90eXBlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgICBGaWVsZC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICAgKi9cbiAgICB0b09iamVjdCgpOiBGaWVsZC5Bc09iamVjdCB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgaGludDogdGhpcy5oaW50LFxuICAgICAgICBpc09wdGlvbmFsOiB0aGlzLmlzT3B0aW9uYWwsXG4gICAgICAgIHRleHRGaWVsZDogdGhpcy50ZXh0RmllbGQgPyB0aGlzLnRleHRGaWVsZC50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgICBmb3JtYXR0ZWRUZXh0RmllbGQ6IHRoaXMuZm9ybWF0dGVkVGV4dEZpZWxkXG4gICAgICAgICAgPyB0aGlzLmZvcm1hdHRlZFRleHRGaWVsZC50b09iamVjdCgpXG4gICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICAgIHJpY2hGb3JtYXR0ZWRUZXh0RmllbGQ6IHRoaXMucmljaEZvcm1hdHRlZFRleHRGaWVsZFxuICAgICAgICAgID8gdGhpcy5yaWNoRm9ybWF0dGVkVGV4dEZpZWxkLnRvT2JqZWN0KClcbiAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgICAgbnVtYmVyRmllbGQ6IHRoaXMubnVtYmVyRmllbGQgPyB0aGlzLm51bWJlckZpZWxkLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICAgIGRhdGVGaWVsZDogdGhpcy5kYXRlRmllbGQgPyB0aGlzLmRhdGVGaWVsZC50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgICB0aW1lRmllbGQ6IHRoaXMudGltZUZpZWxkID8gdGhpcy50aW1lRmllbGQudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgICAgZGF0ZUFuZFRpbWVGaWVsZDogdGhpcy5kYXRlQW5kVGltZUZpZWxkXG4gICAgICAgICAgPyB0aGlzLmRhdGVBbmRUaW1lRmllbGQudG9PYmplY3QoKVxuICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgICBjaGVja2JveDogdGhpcy5jaGVja2JveCA/IHRoaXMuY2hlY2tib3gudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgICAgcmFkaW9CdXR0b25MaXN0OiB0aGlzLnJhZGlvQnV0dG9uTGlzdFxuICAgICAgICAgID8gdGhpcy5yYWRpb0J1dHRvbkxpc3QudG9PYmplY3QoKVxuICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgICBsaXN0OiB0aGlzLmxpc3QgPyB0aGlzLmxpc3QudG9PYmplY3QoKSA6IHVuZGVmaW5lZFxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICAgKi9cbiAgICB0b0pTT04oKSB7XG4gICAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICAgKi9cbiAgICB0b1Byb3RvYnVmSlNPTihcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgICApOiBGaWVsZC5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgaGludDogdGhpcy5oaW50LFxuICAgICAgICBpc09wdGlvbmFsOiB0aGlzLmlzT3B0aW9uYWwsXG4gICAgICAgIHRleHRGaWVsZDogdGhpcy50ZXh0RmllbGRcbiAgICAgICAgICA/IHRoaXMudGV4dEZpZWxkLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgICAgOiBudWxsLFxuICAgICAgICBmb3JtYXR0ZWRUZXh0RmllbGQ6IHRoaXMuZm9ybWF0dGVkVGV4dEZpZWxkXG4gICAgICAgICAgPyB0aGlzLmZvcm1hdHRlZFRleHRGaWVsZC50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgcmljaEZvcm1hdHRlZFRleHRGaWVsZDogdGhpcy5yaWNoRm9ybWF0dGVkVGV4dEZpZWxkXG4gICAgICAgICAgPyB0aGlzLnJpY2hGb3JtYXR0ZWRUZXh0RmllbGQudG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgICA6IG51bGwsXG4gICAgICAgIG51bWJlckZpZWxkOiB0aGlzLm51bWJlckZpZWxkXG4gICAgICAgICAgPyB0aGlzLm51bWJlckZpZWxkLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgICAgOiBudWxsLFxuICAgICAgICBkYXRlRmllbGQ6IHRoaXMuZGF0ZUZpZWxkXG4gICAgICAgICAgPyB0aGlzLmRhdGVGaWVsZC50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgdGltZUZpZWxkOiB0aGlzLnRpbWVGaWVsZFxuICAgICAgICAgID8gdGhpcy50aW1lRmllbGQudG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgICA6IG51bGwsXG4gICAgICAgIGRhdGVBbmRUaW1lRmllbGQ6IHRoaXMuZGF0ZUFuZFRpbWVGaWVsZFxuICAgICAgICAgID8gdGhpcy5kYXRlQW5kVGltZUZpZWxkLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgICAgOiBudWxsLFxuICAgICAgICBjaGVja2JveDogdGhpcy5jaGVja2JveCA/IHRoaXMuY2hlY2tib3gudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgICByYWRpb0J1dHRvbkxpc3Q6IHRoaXMucmFkaW9CdXR0b25MaXN0XG4gICAgICAgICAgPyB0aGlzLnJhZGlvQnV0dG9uTGlzdC50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgbGlzdDogdGhpcy5saXN0ID8gdGhpcy5saXN0LnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbFxuICAgICAgfTtcbiAgICB9XG4gIH1cbiAgZXhwb3J0IG1vZHVsZSBGaWVsZCB7XG4gICAgLyoqXG4gICAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIEZpZWxkXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgICBpZD86IHN0cmluZztcbiAgICAgIGhpbnQ/OiBzdHJpbmc7XG4gICAgICBpc09wdGlvbmFsPzogYm9vbGVhbjtcbiAgICAgIHRleHRGaWVsZD86IEZvcm0uVGV4dEZpZWxkLkFzT2JqZWN0O1xuICAgICAgZm9ybWF0dGVkVGV4dEZpZWxkPzogRm9ybS5Gb3JtYXR0ZWRUZXh0RmllbGQuQXNPYmplY3Q7XG4gICAgICByaWNoRm9ybWF0dGVkVGV4dEZpZWxkPzogRm9ybS5SaWNoRm9ybWF0dGVkVGV4dEZpZWxkLkFzT2JqZWN0O1xuICAgICAgbnVtYmVyRmllbGQ/OiBGb3JtLk51bWJlckZpZWxkLkFzT2JqZWN0O1xuICAgICAgZGF0ZUZpZWxkPzogRm9ybS5EYXRlRmllbGQuQXNPYmplY3Q7XG4gICAgICB0aW1lRmllbGQ/OiBGb3JtLlRpbWVGaWVsZC5Bc09iamVjdDtcbiAgICAgIGRhdGVBbmRUaW1lRmllbGQ/OiBGb3JtLkRhdGFBbmRUaW1lRmllbGQuQXNPYmplY3Q7XG4gICAgICBjaGVja2JveD86IEZvcm0uQ2hlY2tCb3guQXNPYmplY3Q7XG4gICAgICByYWRpb0J1dHRvbkxpc3Q/OiBGb3JtLlJhZGlvQnV0dG9uTGlzdC5Bc09iamVjdDtcbiAgICAgIGxpc3Q/OiBGb3JtLkxpc3QuQXNPYmplY3Q7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgRmllbGRcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICAgIGlkPzogc3RyaW5nO1xuICAgICAgaGludD86IHN0cmluZztcbiAgICAgIGlzT3B0aW9uYWw/OiBib29sZWFuO1xuICAgICAgdGV4dEZpZWxkPzogRm9ybS5UZXh0RmllbGQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgICAgZm9ybWF0dGVkVGV4dEZpZWxkPzogRm9ybS5Gb3JtYXR0ZWRUZXh0RmllbGQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgICAgcmljaEZvcm1hdHRlZFRleHRGaWVsZD86IEZvcm0uUmljaEZvcm1hdHRlZFRleHRGaWVsZC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgICBudW1iZXJGaWVsZD86IEZvcm0uTnVtYmVyRmllbGQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgICAgZGF0ZUZpZWxkPzogRm9ybS5EYXRlRmllbGQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgICAgdGltZUZpZWxkPzogRm9ybS5UaW1lRmllbGQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgICAgZGF0ZUFuZFRpbWVGaWVsZD86IEZvcm0uRGF0YUFuZFRpbWVGaWVsZC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgICBjaGVja2JveD86IEZvcm0uQ2hlY2tCb3guQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgICAgcmFkaW9CdXR0b25MaXN0PzogRm9ybS5SYWRpb0J1dHRvbkxpc3QuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgICAgbGlzdD86IEZvcm0uTGlzdC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgfVxuICAgIGV4cG9ydCBlbnVtIFR5cGVDYXNlIHtcbiAgICAgIG5vbmUgPSAwLFxuICAgICAgdGV4dEZpZWxkID0gMSxcbiAgICAgIGZvcm1hdHRlZFRleHRGaWVsZCA9IDIsXG4gICAgICByaWNoRm9ybWF0dGVkVGV4dEZpZWxkID0gMyxcbiAgICAgIG51bWJlckZpZWxkID0gNCxcbiAgICAgIGRhdGVGaWVsZCA9IDUsXG4gICAgICB0aW1lRmllbGQgPSA2LFxuICAgICAgZGF0ZUFuZFRpbWVGaWVsZCA9IDcsXG4gICAgICBjaGVja2JveCA9IDgsXG4gICAgICByYWRpb0J1dHRvbkxpc3QgPSA5LFxuICAgICAgbGlzdCA9IDEwXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3IgcHJvdG8ucHViLnYxLm1vZGVscy5CdXR0b25zXG4gKi9cbmV4cG9ydCBjbGFzcyBCdXR0b25zIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAncHJvdG8ucHViLnYxLm1vZGVscy5CdXR0b25zJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQnV0dG9ucygpO1xuICAgIEJ1dHRvbnMuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBCdXR0b25zKSB7XG4gICAgX2luc3RhbmNlLnRleHQgPSBfaW5zdGFuY2UudGV4dCB8fCAnJztcbiAgICBfaW5zdGFuY2UuYnV0dG9ucyA9IF9pbnN0YW5jZS5idXR0b25zIHx8IFtdO1xuICAgIF9pbnN0YW5jZS5sb2NrQWZ0ZXIgPSBfaW5zdGFuY2UubG9ja0FmdGVyIHx8ICcwJztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IEJ1dHRvbnMsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgX2luc3RhbmNlLnRleHQgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIChfaW5zdGFuY2UuYnV0dG9ucyA9IF9pbnN0YW5jZS5idXR0b25zIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgX3JlYWRlci5yZWFkU3RyaW5nKClcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLmxvY2tBZnRlciA9IF9yZWFkZXIucmVhZEludDY0U3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBCdXR0b25zLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKF9pbnN0YW5jZTogQnV0dG9ucywgX3dyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKF9pbnN0YW5jZS50ZXh0KSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDMsIF9pbnN0YW5jZS50ZXh0KTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5idXR0b25zICYmIF9pbnN0YW5jZS5idXR0b25zLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkU3RyaW5nKDEsIF9pbnN0YW5jZS5idXR0b25zKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5sb2NrQWZ0ZXIpIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQ2NFN0cmluZygyLCBfaW5zdGFuY2UubG9ja0FmdGVyKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF90ZXh0Pzogc3RyaW5nO1xuICBwcml2YXRlIF9idXR0b25zPzogc3RyaW5nW107XG4gIHByaXZhdGUgX2xvY2tBZnRlcj86IHN0cmluZztcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIEJ1dHRvbnMgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8QnV0dG9ucy5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy50ZXh0ID0gX3ZhbHVlLnRleHQ7XG4gICAgdGhpcy5idXR0b25zID0gKF92YWx1ZS5idXR0b25zIHx8IFtdKS5zbGljZSgpO1xuICAgIHRoaXMubG9ja0FmdGVyID0gX3ZhbHVlLmxvY2tBZnRlcjtcbiAgICBCdXR0b25zLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgdGV4dCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90ZXh0O1xuICB9XG4gIHNldCB0ZXh0KHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl90ZXh0ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGJ1dHRvbnMoKTogc3RyaW5nW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9idXR0b25zO1xuICB9XG4gIHNldCBidXR0b25zKHZhbHVlOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2J1dHRvbnMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbG9ja0FmdGVyKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2xvY2tBZnRlcjtcbiAgfVxuICBzZXQgbG9ja0FmdGVyKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9sb2NrQWZ0ZXIgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBCdXR0b25zLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IEJ1dHRvbnMuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICB0ZXh0OiB0aGlzLnRleHQsXG4gICAgICBidXR0b25zOiAodGhpcy5idXR0b25zIHx8IFtdKS5zbGljZSgpLFxuICAgICAgbG9ja0FmdGVyOiB0aGlzLmxvY2tBZnRlclxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IEJ1dHRvbnMuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICB0ZXh0OiB0aGlzLnRleHQsXG4gICAgICBidXR0b25zOiAodGhpcy5idXR0b25zIHx8IFtdKS5zbGljZSgpLFxuICAgICAgbG9ja0FmdGVyOiB0aGlzLmxvY2tBZnRlclxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgQnV0dG9ucyB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgQnV0dG9uc1xuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgdGV4dD86IHN0cmluZztcbiAgICBidXR0b25zPzogc3RyaW5nW107XG4gICAgbG9ja0FmdGVyPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIEJ1dHRvbnNcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHRleHQ/OiBzdHJpbmc7XG4gICAgYnV0dG9ucz86IHN0cmluZ1tdO1xuICAgIGxvY2tBZnRlcj86IHN0cmluZztcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIHByb3RvLnB1Yi52MS5tb2RlbHMuRm9ybVJlc3VsdFxuICovXG5leHBvcnQgY2xhc3MgRm9ybVJlc3VsdCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ3Byb3RvLnB1Yi52MS5tb2RlbHMuRm9ybVJlc3VsdCc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEZvcm1SZXN1bHQoKTtcbiAgICBGb3JtUmVzdWx0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogRm9ybVJlc3VsdCkge1xuICAgIF9pbnN0YW5jZS5pZCA9IF9pbnN0YW5jZS5pZCB8fCAnJztcbiAgICBfaW5zdGFuY2UudmFsdWVzID0gX2luc3RhbmNlLnZhbHVlcyB8fCB7fTtcbiAgICBfaW5zdGFuY2UucHJldmlld092ZXJyaWRlID0gX2luc3RhbmNlLnByZXZpZXdPdmVycmlkZSB8fCB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IEZvcm1SZXN1bHQsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLmlkID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBjb25zdCBtc2dfMiA9IHt9IGFzIGFueTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgbXNnXzIsXG4gICAgICAgICAgICBGb3JtUmVzdWx0LlZhbHVlc0VudHJ5LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgX2luc3RhbmNlLnZhbHVlcyA9IF9pbnN0YW5jZS52YWx1ZXMgfHwge307XG4gICAgICAgICAgX2luc3RhbmNlLnZhbHVlc1ttc2dfMi5rZXldID0gbXNnXzIudmFsdWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBjb25zdCBtc2dfMyA9IHt9IGFzIGFueTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgbXNnXzMsXG4gICAgICAgICAgICBGb3JtUmVzdWx0LlByZXZpZXdPdmVycmlkZUVudHJ5LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgX2luc3RhbmNlLnByZXZpZXdPdmVycmlkZSA9IF9pbnN0YW5jZS5wcmV2aWV3T3ZlcnJpZGUgfHwge307XG4gICAgICAgICAgX2luc3RhbmNlLnByZXZpZXdPdmVycmlkZVttc2dfMy5rZXldID0gbXNnXzMudmFsdWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBGb3JtUmVzdWx0LnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKF9pbnN0YW5jZTogRm9ybVJlc3VsdCwgX3dyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5pZCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2UuaWQpO1xuICAgIH1cbiAgICBpZiAoISFfaW5zdGFuY2UudmFsdWVzKSB7XG4gICAgICBjb25zdCBrZXlzXzIgPSBPYmplY3Qua2V5cyhfaW5zdGFuY2UudmFsdWVzIGFzIGFueSk7XG5cbiAgICAgIGlmIChrZXlzXzIubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IHJlcGVhdGVkXzIgPSBrZXlzXzJcbiAgICAgICAgICAubWFwKGtleSA9PiAoeyBrZXk6IGtleSwgdmFsdWU6IChfaW5zdGFuY2UudmFsdWVzIGFzIGFueSlba2V5XSB9KSlcbiAgICAgICAgICAucmVkdWNlKChyLCB2KSA9PiBbLi4uciwgdl0sIFtdIGFzIGFueVtdKTtcblxuICAgICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgICAgIDIsXG4gICAgICAgICAgcmVwZWF0ZWRfMixcbiAgICAgICAgICBGb3JtUmVzdWx0LlZhbHVlc0VudHJ5LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghIV9pbnN0YW5jZS5wcmV2aWV3T3ZlcnJpZGUpIHtcbiAgICAgIGNvbnN0IGtleXNfMyA9IE9iamVjdC5rZXlzKF9pbnN0YW5jZS5wcmV2aWV3T3ZlcnJpZGUgYXMgYW55KTtcblxuICAgICAgaWYgKGtleXNfMy5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgcmVwZWF0ZWRfMyA9IGtleXNfM1xuICAgICAgICAgIC5tYXAoa2V5ID0+ICh7XG4gICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgIHZhbHVlOiAoX2luc3RhbmNlLnByZXZpZXdPdmVycmlkZSBhcyBhbnkpW2tleV1cbiAgICAgICAgICB9KSlcbiAgICAgICAgICAucmVkdWNlKChyLCB2KSA9PiBbLi4uciwgdl0sIFtdIGFzIGFueVtdKTtcblxuICAgICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgICAgIDMsXG4gICAgICAgICAgcmVwZWF0ZWRfMyxcbiAgICAgICAgICBGb3JtUmVzdWx0LlByZXZpZXdPdmVycmlkZUVudHJ5LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaWQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3ZhbHVlcz86IHsgW3Byb3A6IHN0cmluZ106IHN0cmluZyB9O1xuICBwcml2YXRlIF9wcmV2aWV3T3ZlcnJpZGU/OiB7IFtwcm9wOiBzdHJpbmddOiBzdHJpbmcgfTtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIEZvcm1SZXN1bHQgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8Rm9ybVJlc3VsdC5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5pZCA9IF92YWx1ZS5pZDtcbiAgICAodGhpcy52YWx1ZXMgPSBfdmFsdWUhLnZhbHVlc1xuICAgICAgPyBPYmplY3Qua2V5cyhfdmFsdWUhLnZhbHVlcykucmVkdWNlKFxuICAgICAgICAgIChyLCBrKSA9PiAoeyAuLi5yLCBba106IF92YWx1ZSEudmFsdWVzIVtrXSB9KSxcbiAgICAgICAgICB7fVxuICAgICAgICApXG4gICAgICA6IHt9KSxcbiAgICAgICh0aGlzLnByZXZpZXdPdmVycmlkZSA9IF92YWx1ZSEucHJldmlld092ZXJyaWRlXG4gICAgICAgID8gT2JqZWN0LmtleXMoX3ZhbHVlIS5wcmV2aWV3T3ZlcnJpZGUpLnJlZHVjZShcbiAgICAgICAgICAgIChyLCBrKSA9PiAoeyAuLi5yLCBba106IF92YWx1ZSEucHJldmlld092ZXJyaWRlIVtrXSB9KSxcbiAgICAgICAgICAgIHt9XG4gICAgICAgICAgKVxuICAgICAgICA6IHt9KSxcbiAgICAgIEZvcm1SZXN1bHQucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBpZCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9pZDtcbiAgfVxuICBzZXQgaWQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHZhbHVlcygpOiB7IFtwcm9wOiBzdHJpbmddOiBzdHJpbmcgfSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlcztcbiAgfVxuICBzZXQgdmFsdWVzKHZhbHVlOiB7IFtwcm9wOiBzdHJpbmddOiBzdHJpbmcgfSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3ZhbHVlcyA9IHZhbHVlO1xuICB9XG4gIGdldCBwcmV2aWV3T3ZlcnJpZGUoKTogeyBbcHJvcDogc3RyaW5nXTogc3RyaW5nIH0gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wcmV2aWV3T3ZlcnJpZGU7XG4gIH1cbiAgc2V0IHByZXZpZXdPdmVycmlkZSh2YWx1ZTogeyBbcHJvcDogc3RyaW5nXTogc3RyaW5nIH0gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9wcmV2aWV3T3ZlcnJpZGUgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBGb3JtUmVzdWx0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IEZvcm1SZXN1bHQuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogdGhpcy5pZCxcbiAgICAgIHZhbHVlczogdGhpcy52YWx1ZXNcbiAgICAgICAgPyBPYmplY3Qua2V5cyh0aGlzLnZhbHVlcykucmVkdWNlKFxuICAgICAgICAgICAgKHIsIGspID0+ICh7IC4uLnIsIFtrXTogdGhpcy52YWx1ZXMhW2tdIH0pLFxuICAgICAgICAgICAge31cbiAgICAgICAgICApXG4gICAgICAgIDoge30sXG4gICAgICBwcmV2aWV3T3ZlcnJpZGU6IHRoaXMucHJldmlld092ZXJyaWRlXG4gICAgICAgID8gT2JqZWN0LmtleXModGhpcy5wcmV2aWV3T3ZlcnJpZGUpLnJlZHVjZShcbiAgICAgICAgICAgIChyLCBrKSA9PiAoeyAuLi5yLCBba106IHRoaXMucHJldmlld092ZXJyaWRlIVtrXSB9KSxcbiAgICAgICAgICAgIHt9XG4gICAgICAgICAgKVxuICAgICAgICA6IHt9XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogRm9ybVJlc3VsdC5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgdmFsdWVzOiB0aGlzLnZhbHVlc1xuICAgICAgICA/IE9iamVjdC5rZXlzKHRoaXMudmFsdWVzKS5yZWR1Y2UoXG4gICAgICAgICAgICAociwgaykgPT4gKHsgLi4uciwgW2tdOiB0aGlzLnZhbHVlcyFba10gfSksXG4gICAgICAgICAgICB7fVxuICAgICAgICAgIClcbiAgICAgICAgOiB7fSxcbiAgICAgIHByZXZpZXdPdmVycmlkZTogdGhpcy5wcmV2aWV3T3ZlcnJpZGVcbiAgICAgICAgPyBPYmplY3Qua2V5cyh0aGlzLnByZXZpZXdPdmVycmlkZSkucmVkdWNlKFxuICAgICAgICAgICAgKHIsIGspID0+ICh7IC4uLnIsIFtrXTogdGhpcy5wcmV2aWV3T3ZlcnJpZGUhW2tdIH0pLFxuICAgICAgICAgICAge31cbiAgICAgICAgICApXG4gICAgICAgIDoge31cbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEZvcm1SZXN1bHQge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIEZvcm1SZXN1bHRcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIGlkPzogc3RyaW5nO1xuICAgIHZhbHVlcz86IHsgW3Byb3A6IHN0cmluZ106IHN0cmluZyB9O1xuICAgIHByZXZpZXdPdmVycmlkZT86IHsgW3Byb3A6IHN0cmluZ106IHN0cmluZyB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIEZvcm1SZXN1bHRcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIGlkPzogc3RyaW5nO1xuICAgIHZhbHVlcz86IHsgW3Byb3A6IHN0cmluZ106IHN0cmluZyB9O1xuICAgIHByZXZpZXdPdmVycmlkZT86IHsgW3Byb3A6IHN0cmluZ106IHN0cmluZyB9O1xuICB9XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIHByb3RvLnB1Yi52MS5tb2RlbHMuRm9ybVJlc3VsdC5WYWx1ZXNFbnRyeVxuICAgKi9cbiAgZXhwb3J0IGNsYXNzIFZhbHVlc0VudHJ5IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICAgIHN0YXRpYyBpZCA9ICdwcm90by5wdWIudjEubW9kZWxzLkZvcm1SZXN1bHQuVmFsdWVzRW50cnknO1xuXG4gICAgLyoqXG4gICAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICovXG4gICAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBWYWx1ZXNFbnRyeSgpO1xuICAgICAgVmFsdWVzRW50cnkuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgICBpbnN0YW5jZSxcbiAgICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICAgICk7XG4gICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICovXG4gICAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IFZhbHVlc0VudHJ5KSB7XG4gICAgICBfaW5zdGFuY2Uua2V5ID0gX2luc3RhbmNlLmtleSB8fCAnJztcbiAgICAgIF9pbnN0YW5jZS52YWx1ZSA9IF9pbnN0YW5jZS52YWx1ZSB8fCAnJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgX2luc3RhbmNlOiBWYWx1ZXNFbnRyeSxcbiAgICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICAgICkge1xuICAgICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIF9pbnN0YW5jZS5rZXkgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIF9pbnN0YW5jZS52YWx1ZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgVmFsdWVzRW50cnkucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgICAqL1xuICAgIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICAgIF9pbnN0YW5jZTogVmFsdWVzRW50cnksXG4gICAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgICApIHtcbiAgICAgIGlmIChfaW5zdGFuY2Uua2V5KSB7XG4gICAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLmtleSk7XG4gICAgICB9XG4gICAgICBpZiAoX2luc3RhbmNlLnZhbHVlKSB7XG4gICAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMiwgX2luc3RhbmNlLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9rZXk/OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfdmFsdWU/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBWYWx1ZXNFbnRyeSB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8VmFsdWVzRW50cnkuQXNPYmplY3Q+KSB7XG4gICAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgICB0aGlzLmtleSA9IF92YWx1ZS5rZXk7XG4gICAgICB0aGlzLnZhbHVlID0gX3ZhbHVlLnZhbHVlO1xuICAgICAgVmFsdWVzRW50cnkucmVmaW5lVmFsdWVzKHRoaXMpO1xuICAgIH1cbiAgICBnZXQga2V5KCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICByZXR1cm4gdGhpcy5fa2V5O1xuICAgIH1cbiAgICBzZXQga2V5KHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX2tleSA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgdmFsdWUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICB9XG4gICAgc2V0IHZhbHVlKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAqL1xuICAgIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICAgIFZhbHVlc0VudHJ5LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgICAqL1xuICAgIHRvT2JqZWN0KCk6IFZhbHVlc0VudHJ5LkFzT2JqZWN0IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGtleTogdGhpcy5rZXksXG4gICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgICAqL1xuICAgIHRvSlNPTigpIHtcbiAgICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgICAqL1xuICAgIHRvUHJvdG9idWZKU09OKFxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICAgICk6IFZhbHVlc0VudHJ5LkFzUHJvdG9idWZKU09OIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGtleTogdGhpcy5rZXksXG4gICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlXG4gICAgICB9O1xuICAgIH1cbiAgfVxuICBleHBvcnQgbW9kdWxlIFZhbHVlc0VudHJ5IHtcbiAgICAvKipcbiAgICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgVmFsdWVzRW50cnlcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICAgIGtleT86IHN0cmluZztcbiAgICAgIHZhbHVlPzogc3RyaW5nO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIFZhbHVlc0VudHJ5XG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgICBrZXk/OiBzdHJpbmc7XG4gICAgICB2YWx1ZT86IHN0cmluZztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3IgcHJvdG8ucHViLnYxLm1vZGVscy5Gb3JtUmVzdWx0LlByZXZpZXdPdmVycmlkZUVudHJ5XG4gICAqL1xuICBleHBvcnQgY2xhc3MgUHJldmlld092ZXJyaWRlRW50cnkgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gICAgc3RhdGljIGlkID0gJ3Byb3RvLnB1Yi52MS5tb2RlbHMuRm9ybVJlc3VsdC5QcmV2aWV3T3ZlcnJpZGVFbnRyeSc7XG5cbiAgICAvKipcbiAgICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFByZXZpZXdPdmVycmlkZUVudHJ5KCk7XG4gICAgICBQcmV2aWV3T3ZlcnJpZGVFbnRyeS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICAgIGluc3RhbmNlLFxuICAgICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICAgKTtcbiAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogUHJldmlld092ZXJyaWRlRW50cnkpIHtcbiAgICAgIF9pbnN0YW5jZS5rZXkgPSBfaW5zdGFuY2Uua2V5IHx8ICcnO1xuICAgICAgX2luc3RhbmNlLnZhbHVlID0gX2luc3RhbmNlLnZhbHVlIHx8ICcnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgICAqL1xuICAgIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBfaW5zdGFuY2U6IFByZXZpZXdPdmVycmlkZUVudHJ5LFxuICAgICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICAgKSB7XG4gICAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgX2luc3RhbmNlLmtleSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgX2luc3RhbmNlLnZhbHVlID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBQcmV2aWV3T3ZlcnJpZGVFbnRyeS5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAgICovXG4gICAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgICAgX2luc3RhbmNlOiBQcmV2aWV3T3ZlcnJpZGVFbnRyeSxcbiAgICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICAgICkge1xuICAgICAgaWYgKF9pbnN0YW5jZS5rZXkpIHtcbiAgICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2Uua2V5KTtcbiAgICAgIH1cbiAgICAgIGlmIChfaW5zdGFuY2UudmFsdWUpIHtcbiAgICAgICAgX3dyaXRlci53cml0ZVN0cmluZygyLCBfaW5zdGFuY2UudmFsdWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2tleT86IHN0cmluZztcbiAgICBwcml2YXRlIF92YWx1ZT86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIFByZXZpZXdPdmVycmlkZUVudHJ5IHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxQcmV2aWV3T3ZlcnJpZGVFbnRyeS5Bc09iamVjdD4pIHtcbiAgICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICAgIHRoaXMua2V5ID0gX3ZhbHVlLmtleTtcbiAgICAgIHRoaXMudmFsdWUgPSBfdmFsdWUudmFsdWU7XG4gICAgICBQcmV2aWV3T3ZlcnJpZGVFbnRyeS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gICAgfVxuICAgIGdldCBrZXkoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgIHJldHVybiB0aGlzLl9rZXk7XG4gICAgfVxuICAgIHNldCBrZXkodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fa2V5ID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCB2YWx1ZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgIH1cbiAgICBzZXQgdmFsdWUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICovXG4gICAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgICAgUHJldmlld092ZXJyaWRlRW50cnkuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAgICovXG4gICAgdG9PYmplY3QoKTogUHJldmlld092ZXJyaWRlRW50cnkuQXNPYmplY3Qge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAga2V5OiB0aGlzLmtleSxcbiAgICAgICAgdmFsdWU6IHRoaXMudmFsdWVcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAgICovXG4gICAgdG9KU09OKCkge1xuICAgICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAgICovXG4gICAgdG9Qcm90b2J1ZkpTT04oXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICAgKTogUHJldmlld092ZXJyaWRlRW50cnkuQXNQcm90b2J1ZkpTT04ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAga2V5OiB0aGlzLmtleSxcbiAgICAgICAgdmFsdWU6IHRoaXMudmFsdWVcbiAgICAgIH07XG4gICAgfVxuICB9XG4gIGV4cG9ydCBtb2R1bGUgUHJldmlld092ZXJyaWRlRW50cnkge1xuICAgIC8qKlxuICAgICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBQcmV2aWV3T3ZlcnJpZGVFbnRyeVxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgICAga2V5Pzogc3RyaW5nO1xuICAgICAgdmFsdWU/OiBzdHJpbmc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgUHJldmlld092ZXJyaWRlRW50cnlcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICAgIGtleT86IHN0cmluZztcbiAgICAgIHZhbHVlPzogc3RyaW5nO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIHByb3RvLnB1Yi52MS5tb2RlbHMuVGFibGVSb3dcbiAqL1xuZXhwb3J0IGNsYXNzIFRhYmxlUm93IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAncHJvdG8ucHViLnYxLm1vZGVscy5UYWJsZVJvdyc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFRhYmxlUm93KCk7XG4gICAgVGFibGVSb3cuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBUYWJsZVJvdykge1xuICAgIF9pbnN0YW5jZS5jb2x1bW5zID0gX2luc3RhbmNlLmNvbHVtbnMgfHwgW107XG4gICAgX2luc3RhbmNlLmhpZ2hsaWdodCA9IF9pbnN0YW5jZS5oaWdobGlnaHQgfHwgZmFsc2U7XG4gICAgX2luc3RhbmNlLmJvbGQgPSBfaW5zdGFuY2UuYm9sZCB8fCBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IFRhYmxlUm93LFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIChfaW5zdGFuY2UuY29sdW1ucyA9IF9pbnN0YW5jZS5jb2x1bW5zIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgX3JlYWRlci5yZWFkU3RyaW5nKClcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLmhpZ2hsaWdodCA9IF9yZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIF9pbnN0YW5jZS5ib2xkID0gX3JlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgVGFibGVSb3cucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoX2luc3RhbmNlOiBUYWJsZVJvdywgX3dyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5jb2x1bW5zICYmIF9pbnN0YW5jZS5jb2x1bW5zLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkU3RyaW5nKDEsIF9pbnN0YW5jZS5jb2x1bW5zKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5oaWdobGlnaHQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVCb29sKDIsIF9pbnN0YW5jZS5oaWdobGlnaHQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmJvbGQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVCb29sKDMsIF9pbnN0YW5jZS5ib2xkKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jb2x1bW5zPzogc3RyaW5nW107XG4gIHByaXZhdGUgX2hpZ2hsaWdodD86IGJvb2xlYW47XG4gIHByaXZhdGUgX2JvbGQ/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgVGFibGVSb3cgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8VGFibGVSb3cuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMuY29sdW1ucyA9IChfdmFsdWUuY29sdW1ucyB8fCBbXSkuc2xpY2UoKTtcbiAgICB0aGlzLmhpZ2hsaWdodCA9IF92YWx1ZS5oaWdobGlnaHQ7XG4gICAgdGhpcy5ib2xkID0gX3ZhbHVlLmJvbGQ7XG4gICAgVGFibGVSb3cucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBjb2x1bW5zKCk6IHN0cmluZ1tdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fY29sdW1ucztcbiAgfVxuICBzZXQgY29sdW1ucyh2YWx1ZTogc3RyaW5nW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9jb2x1bW5zID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGhpZ2hsaWdodCgpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5faGlnaGxpZ2h0O1xuICB9XG4gIHNldCBoaWdobGlnaHQodmFsdWU6IGJvb2xlYW4gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9oaWdobGlnaHQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgYm9sZCgpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fYm9sZDtcbiAgfVxuICBzZXQgYm9sZCh2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2JvbGQgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBUYWJsZVJvdy5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBUYWJsZVJvdy5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbHVtbnM6ICh0aGlzLmNvbHVtbnMgfHwgW10pLnNsaWNlKCksXG4gICAgICBoaWdobGlnaHQ6IHRoaXMuaGlnaGxpZ2h0LFxuICAgICAgYm9sZDogdGhpcy5ib2xkXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogVGFibGVSb3cuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBjb2x1bW5zOiAodGhpcy5jb2x1bW5zIHx8IFtdKS5zbGljZSgpLFxuICAgICAgaGlnaGxpZ2h0OiB0aGlzLmhpZ2hsaWdodCxcbiAgICAgIGJvbGQ6IHRoaXMuYm9sZFxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgVGFibGVSb3cge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIFRhYmxlUm93XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBjb2x1bW5zPzogc3RyaW5nW107XG4gICAgaGlnaGxpZ2h0PzogYm9vbGVhbjtcbiAgICBib2xkPzogYm9vbGVhbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBUYWJsZVJvd1xuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgY29sdW1ucz86IHN0cmluZ1tdO1xuICAgIGhpZ2hsaWdodD86IGJvb2xlYW47XG4gICAgYm9sZD86IGJvb2xlYW47XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBwcm90by5wdWIudjEubW9kZWxzLlRhYmxlXG4gKi9cbmV4cG9ydCBjbGFzcyBUYWJsZSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ3Byb3RvLnB1Yi52MS5tb2RlbHMuVGFibGUnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBUYWJsZSgpO1xuICAgIFRhYmxlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogVGFibGUpIHtcbiAgICBfaW5zdGFuY2Uucm93cyA9IF9pbnN0YW5jZS5yb3dzIHx8IFtdO1xuICAgIF9pbnN0YW5jZS5jb2x1bW5XaWR0aHMgPSBfaW5zdGFuY2UuY29sdW1uV2lkdGhzIHx8IFtdO1xuICAgIF9pbnN0YW5jZS50aXRsZSA9IF9pbnN0YW5jZS50aXRsZSB8fCAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihfaW5zdGFuY2U6IFRhYmxlLCBfcmVhZGVyOiBCaW5hcnlSZWFkZXIpIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2VJbml0aWFsaXplcjEgPSBuZXcgVGFibGVSb3coKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMSxcbiAgICAgICAgICAgIFRhYmxlUm93LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgKF9pbnN0YW5jZS5yb3dzID0gX2luc3RhbmNlLnJvd3MgfHwgW10pLnB1c2gobWVzc2FnZUluaXRpYWxpemVyMSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAoX2luc3RhbmNlLmNvbHVtbldpZHRocyA9IF9pbnN0YW5jZS5jb2x1bW5XaWR0aHMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICAuLi4oX3JlYWRlci5yZWFkUGFja2VkRG91YmxlKCkgfHwgW10pXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIF9pbnN0YW5jZS50aXRsZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgVGFibGUucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoX2luc3RhbmNlOiBUYWJsZSwgX3dyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5yb3dzICYmIF9pbnN0YW5jZS5yb3dzLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgMSxcbiAgICAgICAgX2luc3RhbmNlLnJvd3MgYXMgYW55LFxuICAgICAgICBUYWJsZVJvdy5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5jb2x1bW5XaWR0aHMgJiYgX2luc3RhbmNlLmNvbHVtbldpZHRocy5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVQYWNrZWREb3VibGUoMiwgX2luc3RhbmNlLmNvbHVtbldpZHRocyk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UudGl0bGUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMywgX2luc3RhbmNlLnRpdGxlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9yb3dzPzogVGFibGVSb3dbXTtcbiAgcHJpdmF0ZSBfY29sdW1uV2lkdGhzPzogbnVtYmVyW107XG4gIHByaXZhdGUgX3RpdGxlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgVGFibGUgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8VGFibGUuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMucm93cyA9IChfdmFsdWUucm93cyB8fCBbXSkubWFwKG0gPT4gbmV3IFRhYmxlUm93KG0pKTtcbiAgICB0aGlzLmNvbHVtbldpZHRocyA9IChfdmFsdWUuY29sdW1uV2lkdGhzIHx8IFtdKS5zbGljZSgpO1xuICAgIHRoaXMudGl0bGUgPSBfdmFsdWUudGl0bGU7XG4gICAgVGFibGUucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCByb3dzKCk6IFRhYmxlUm93W10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9yb3dzO1xuICB9XG4gIHNldCByb3dzKHZhbHVlOiBUYWJsZVJvd1tdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcm93cyA9IHZhbHVlO1xuICB9XG4gIGdldCBjb2x1bW5XaWR0aHMoKTogbnVtYmVyW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9jb2x1bW5XaWR0aHM7XG4gIH1cbiAgc2V0IGNvbHVtbldpZHRocyh2YWx1ZTogbnVtYmVyW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9jb2x1bW5XaWR0aHMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdGl0bGUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdGl0bGU7XG4gIH1cbiAgc2V0IHRpdGxlKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl90aXRsZSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFRhYmxlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IFRhYmxlLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgcm93czogKHRoaXMucm93cyB8fCBbXSkubWFwKG0gPT4gbS50b09iamVjdCgpKSxcbiAgICAgIGNvbHVtbldpZHRoczogKHRoaXMuY29sdW1uV2lkdGhzIHx8IFtdKS5zbGljZSgpLFxuICAgICAgdGl0bGU6IHRoaXMudGl0bGVcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBUYWJsZS5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJvd3M6ICh0aGlzLnJvd3MgfHwgW10pLm1hcChtID0+IG0udG9Qcm90b2J1ZkpTT04ob3B0aW9ucykpLFxuICAgICAgY29sdW1uV2lkdGhzOiAodGhpcy5jb2x1bW5XaWR0aHMgfHwgW10pLnNsaWNlKCksXG4gICAgICB0aXRsZTogdGhpcy50aXRsZVxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgVGFibGUge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIFRhYmxlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICByb3dzPzogVGFibGVSb3cuQXNPYmplY3RbXTtcbiAgICBjb2x1bW5XaWR0aHM/OiBudW1iZXJbXTtcbiAgICB0aXRsZT86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBUYWJsZVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgcm93cz86IFRhYmxlUm93LkFzUHJvdG9idWZKU09OW10gfCBudWxsO1xuICAgIGNvbHVtbldpZHRocz86IG51bWJlcltdO1xuICAgIHRpdGxlPzogc3RyaW5nO1xuICB9XG59XG4iXX0=