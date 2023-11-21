import { BinaryReader, BinaryWriter } from 'google-protobuf';
import * as protoPubV1Models001 from '../../../pub/v1/models/uid.pb';
export var PaymentProviderType;
(function (PaymentProviderType) {
    PaymentProviderType[PaymentProviderType["MONEASY"] = 0] = "MONEASY";
})(PaymentProviderType || (PaymentProviderType = {}));
export var AcceptableCurrencies;
(function (AcceptableCurrencies) {
    AcceptableCurrencies[AcceptableCurrencies["IRR"] = 0] = "IRR";
})(AcceptableCurrencies || (AcceptableCurrencies = {}));
export var WithdrawStatus;
(function (WithdrawStatus) {
    WithdrawStatus[WithdrawStatus["WITHDRAW_INITIALIZED"] = 0] = "WITHDRAW_INITIALIZED";
    WithdrawStatus[WithdrawStatus["WITHDRAW_PENDING_TO_CONFIRM"] = 1] = "WITHDRAW_PENDING_TO_CONFIRM";
    WithdrawStatus[WithdrawStatus["WITHDRAW_FAILED"] = 2] = "WITHDRAW_FAILED";
    WithdrawStatus[WithdrawStatus["WITHDRAW_REFUNDED"] = 3] = "WITHDRAW_REFUNDED";
    WithdrawStatus[WithdrawStatus["WITHDRAW_DONE"] = 4] = "WITHDRAW_DONE";
    WithdrawStatus[WithdrawStatus["WITHDRAW_UNKNOWN"] = 5] = "WITHDRAW_UNKNOWN";
})(WithdrawStatus || (WithdrawStatus = {}));
export var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus[PaymentStatus["PAYMENT_INITIALIZED"] = 0] = "PAYMENT_INITIALIZED";
    PaymentStatus[PaymentStatus["PAYMENT_DONE"] = 1] = "PAYMENT_DONE";
    PaymentStatus[PaymentStatus["PAYMENT_REFUNDED"] = 2] = "PAYMENT_REFUNDED";
    PaymentStatus[PaymentStatus["PAYMENT_REVOKED"] = 3] = "PAYMENT_REVOKED";
})(PaymentStatus || (PaymentStatus = {}));
/**
 * Message implementation for proto.pub.v1.models.Commodity
 */
export class Commodity {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Commodity to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.id = _value.id;
        this.name = _value.name;
        this.price = _value.price;
        this.discountPrice = _value.discountPrice;
        this.count = _value.count;
        Commodity.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new Commodity();
        Commodity.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.id = _instance.id || '';
        _instance.name = _instance.name || '';
        _instance.price = _instance.price || '0';
        _instance.discountPrice = _instance.discountPrice || '0';
        _instance.count = _instance.count || '0';
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
                    _instance.name = _reader.readString();
                    break;
                case 3:
                    _instance.price = _reader.readInt64String();
                    break;
                case 4:
                    _instance.discountPrice = _reader.readInt64String();
                    break;
                case 5:
                    _instance.count = _reader.readInt64String();
                    break;
                default:
                    _reader.skipField();
            }
        }
        Commodity.refineValues(_instance);
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
        if (_instance.name) {
            _writer.writeString(2, _instance.name);
        }
        if (_instance.price) {
            _writer.writeInt64String(3, _instance.price);
        }
        if (_instance.discountPrice) {
            _writer.writeInt64String(4, _instance.discountPrice);
        }
        if (_instance.count) {
            _writer.writeInt64String(5, _instance.count);
        }
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }
    get discountPrice() {
        return this._discountPrice;
    }
    set discountPrice(value) {
        this._discountPrice = value;
    }
    get count() {
        return this._count;
    }
    set count(value) {
        this._count = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        Commodity.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            id: this.id,
            name: this.name,
            price: this.price,
            discountPrice: this.discountPrice,
            count: this.count
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
            name: this.name,
            price: this.price,
            discountPrice: this.discountPrice,
            count: this.count
        };
    }
}
Commodity.id = 'proto.pub.v1.models.Commodity';
/**
 * Message implementation for proto.pub.v1.models.Payment
 */
export class Payment {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Payment to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.paymentId = _value.paymentId;
        this.amount = _value.amount;
        this.issuer = _value.issuer
            ? new protoPubV1Models001.Uid(_value.issuer)
            : undefined;
        this.payer = _value.payer
            ? new protoPubV1Models001.Uid(_value.payer)
            : undefined;
        this.description = _value.description;
        this.commodities = (_value.commodities || []).map(m => new Commodity(m));
        this.currency = _value.currency;
        this.paymentProvider = (_value.paymentProvider || []).map(m => new PaymentProvider(m));
        this.createAt = _value.createAt;
        this.expireAt = _value.expireAt;
        Payment.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new Payment();
        Payment.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.paymentId = _instance.paymentId || '';
        _instance.amount = _instance.amount || '0';
        _instance.issuer = _instance.issuer || undefined;
        _instance.payer = _instance.payer || undefined;
        _instance.description = _instance.description || '';
        _instance.commodities = _instance.commodities || [];
        _instance.currency = _instance.currency || 0;
        _instance.paymentProvider = _instance.paymentProvider || [];
        _instance.createAt = _instance.createAt || '0';
        _instance.expireAt = _instance.expireAt || '0';
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
                    _instance.paymentId = _reader.readString();
                    break;
                case 2:
                    _instance.amount = _reader.readInt64String();
                    break;
                case 3:
                    _instance.issuer = new protoPubV1Models001.Uid();
                    _reader.readMessage(_instance.issuer, protoPubV1Models001.Uid.deserializeBinaryFromReader);
                    break;
                case 4:
                    _instance.payer = new protoPubV1Models001.Uid();
                    _reader.readMessage(_instance.payer, protoPubV1Models001.Uid.deserializeBinaryFromReader);
                    break;
                case 5:
                    _instance.description = _reader.readString();
                    break;
                case 6:
                    const messageInitializer6 = new Commodity();
                    _reader.readMessage(messageInitializer6, Commodity.deserializeBinaryFromReader);
                    (_instance.commodities = _instance.commodities || []).push(messageInitializer6);
                    break;
                case 7:
                    _instance.currency = _reader.readEnum();
                    break;
                case 8:
                    const messageInitializer8 = new PaymentProvider();
                    _reader.readMessage(messageInitializer8, PaymentProvider.deserializeBinaryFromReader);
                    (_instance.paymentProvider = _instance.paymentProvider || []).push(messageInitializer8);
                    break;
                case 9:
                    _instance.createAt = _reader.readInt64String();
                    break;
                case 10:
                    _instance.expireAt = _reader.readInt64String();
                    break;
                default:
                    _reader.skipField();
            }
        }
        Payment.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.paymentId) {
            _writer.writeString(1, _instance.paymentId);
        }
        if (_instance.amount) {
            _writer.writeInt64String(2, _instance.amount);
        }
        if (_instance.issuer) {
            _writer.writeMessage(3, _instance.issuer, protoPubV1Models001.Uid.serializeBinaryToWriter);
        }
        if (_instance.payer) {
            _writer.writeMessage(4, _instance.payer, protoPubV1Models001.Uid.serializeBinaryToWriter);
        }
        if (_instance.description) {
            _writer.writeString(5, _instance.description);
        }
        if (_instance.commodities && _instance.commodities.length) {
            _writer.writeRepeatedMessage(6, _instance.commodities, Commodity.serializeBinaryToWriter);
        }
        if (_instance.currency) {
            _writer.writeEnum(7, _instance.currency);
        }
        if (_instance.paymentProvider && _instance.paymentProvider.length) {
            _writer.writeRepeatedMessage(8, _instance.paymentProvider, PaymentProvider.serializeBinaryToWriter);
        }
        if (_instance.createAt) {
            _writer.writeInt64String(9, _instance.createAt);
        }
        if (_instance.expireAt) {
            _writer.writeInt64String(10, _instance.expireAt);
        }
    }
    get paymentId() {
        return this._paymentId;
    }
    set paymentId(value) {
        this._paymentId = value;
    }
    get amount() {
        return this._amount;
    }
    set amount(value) {
        this._amount = value;
    }
    get issuer() {
        return this._issuer;
    }
    set issuer(value) {
        this._issuer = value;
    }
    get payer() {
        return this._payer;
    }
    set payer(value) {
        this._payer = value;
    }
    get description() {
        return this._description;
    }
    set description(value) {
        this._description = value;
    }
    get commodities() {
        return this._commodities;
    }
    set commodities(value) {
        this._commodities = value;
    }
    get currency() {
        return this._currency;
    }
    set currency(value) {
        this._currency = value;
    }
    get paymentProvider() {
        return this._paymentProvider;
    }
    set paymentProvider(value) {
        this._paymentProvider = value;
    }
    get createAt() {
        return this._createAt;
    }
    set createAt(value) {
        this._createAt = value;
    }
    get expireAt() {
        return this._expireAt;
    }
    set expireAt(value) {
        this._expireAt = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        Payment.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            paymentId: this.paymentId,
            amount: this.amount,
            issuer: this.issuer ? this.issuer.toObject() : undefined,
            payer: this.payer ? this.payer.toObject() : undefined,
            description: this.description,
            commodities: (this.commodities || []).map(m => m.toObject()),
            currency: this.currency,
            paymentProvider: (this.paymentProvider || []).map(m => m.toObject()),
            createAt: this.createAt,
            expireAt: this.expireAt
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
            paymentId: this.paymentId,
            amount: this.amount,
            issuer: this.issuer ? this.issuer.toProtobufJSON(options) : null,
            payer: this.payer ? this.payer.toProtobufJSON(options) : null,
            description: this.description,
            commodities: (this.commodities || []).map(m => m.toProtobufJSON(options)),
            currency: AcceptableCurrencies[this.currency === null || this.currency === undefined
                ? 0
                : this.currency],
            paymentProvider: (this.paymentProvider || []).map(m => m.toProtobufJSON(options)),
            createAt: this.createAt,
            expireAt: this.expireAt
        };
    }
}
Payment.id = 'proto.pub.v1.models.Payment';
/**
 * Message implementation for proto.pub.v1.models.PaymentProvider
 */
export class PaymentProvider {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of PaymentProvider to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.paymentProviderType = _value.paymentProviderType;
        this.requiredPaymentIdentityInfo = _value.requiredPaymentIdentityInfo
            ? new RequiredPaymentIdentityInfo(_value.requiredPaymentIdentityInfo)
            : undefined;
        PaymentProvider.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new PaymentProvider();
        PaymentProvider.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.paymentProviderType = _instance.paymentProviderType || 0;
        _instance.requiredPaymentIdentityInfo =
            _instance.requiredPaymentIdentityInfo || undefined;
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
                    _instance.paymentProviderType = _reader.readEnum();
                    break;
                case 2:
                    _instance.requiredPaymentIdentityInfo = new RequiredPaymentIdentityInfo();
                    _reader.readMessage(_instance.requiredPaymentIdentityInfo, RequiredPaymentIdentityInfo.deserializeBinaryFromReader);
                    break;
                default:
                    _reader.skipField();
            }
        }
        PaymentProvider.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.paymentProviderType) {
            _writer.writeEnum(1, _instance.paymentProviderType);
        }
        if (_instance.requiredPaymentIdentityInfo) {
            _writer.writeMessage(2, _instance.requiredPaymentIdentityInfo, RequiredPaymentIdentityInfo.serializeBinaryToWriter);
        }
    }
    get paymentProviderType() {
        return this._paymentProviderType;
    }
    set paymentProviderType(value) {
        this._paymentProviderType = value;
    }
    get requiredPaymentIdentityInfo() {
        return this._requiredPaymentIdentityInfo;
    }
    set requiredPaymentIdentityInfo(value) {
        this._requiredPaymentIdentityInfo = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        PaymentProvider.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            paymentProviderType: this.paymentProviderType,
            requiredPaymentIdentityInfo: this.requiredPaymentIdentityInfo
                ? this.requiredPaymentIdentityInfo.toObject()
                : undefined
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
            paymentProviderType: PaymentProviderType[this.paymentProviderType === null ||
                this.paymentProviderType === undefined
                ? 0
                : this.paymentProviderType],
            requiredPaymentIdentityInfo: this.requiredPaymentIdentityInfo
                ? this.requiredPaymentIdentityInfo.toProtobufJSON(options)
                : null
        };
    }
}
PaymentProvider.id = 'proto.pub.v1.models.PaymentProvider';
/**
 * Message implementation for proto.pub.v1.models.RequiredPaymentIdentityInfo
 */
export class RequiredPaymentIdentityInfo {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of RequiredPaymentIdentityInfo to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.isAddressRequired = _value.isAddressRequired;
        this.isPostCodeRequired = _value.isPostCodeRequired;
        this.isNationalCodeRequired = _value.isNationalCodeRequired;
        RequiredPaymentIdentityInfo.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new RequiredPaymentIdentityInfo();
        RequiredPaymentIdentityInfo.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.isAddressRequired = _instance.isAddressRequired || false;
        _instance.isPostCodeRequired = _instance.isPostCodeRequired || false;
        _instance.isNationalCodeRequired =
            _instance.isNationalCodeRequired || false;
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
                    _instance.isAddressRequired = _reader.readBool();
                    break;
                case 2:
                    _instance.isPostCodeRequired = _reader.readBool();
                    break;
                case 3:
                    _instance.isNationalCodeRequired = _reader.readBool();
                    break;
                default:
                    _reader.skipField();
            }
        }
        RequiredPaymentIdentityInfo.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.isAddressRequired) {
            _writer.writeBool(1, _instance.isAddressRequired);
        }
        if (_instance.isPostCodeRequired) {
            _writer.writeBool(2, _instance.isPostCodeRequired);
        }
        if (_instance.isNationalCodeRequired) {
            _writer.writeBool(3, _instance.isNationalCodeRequired);
        }
    }
    get isAddressRequired() {
        return this._isAddressRequired;
    }
    set isAddressRequired(value) {
        this._isAddressRequired = value;
    }
    get isPostCodeRequired() {
        return this._isPostCodeRequired;
    }
    set isPostCodeRequired(value) {
        this._isPostCodeRequired = value;
    }
    get isNationalCodeRequired() {
        return this._isNationalCodeRequired;
    }
    set isNationalCodeRequired(value) {
        this._isNationalCodeRequired = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        RequiredPaymentIdentityInfo.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            isAddressRequired: this.isAddressRequired,
            isPostCodeRequired: this.isPostCodeRequired,
            isNationalCodeRequired: this.isNationalCodeRequired
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
            isAddressRequired: this.isAddressRequired,
            isPostCodeRequired: this.isPostCodeRequired,
            isNationalCodeRequired: this.isNationalCodeRequired
        };
    }
}
RequiredPaymentIdentityInfo.id = 'proto.pub.v1.models.RequiredPaymentIdentityInfo';
/**
 * Message implementation for proto.pub.v1.models.PaymentInformation
 */
export class PaymentInformation {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of PaymentInformation to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.paymentId = _value.paymentId;
        this.guid = _value.guid;
        this.payment = _value.payment ? new Payment(_value.payment) : undefined;
        this.status = _value.status;
        this.transaction = _value.transaction
            ? new Transaction(_value.transaction)
            : undefined;
        this.paymentIdentityInfo = _value.paymentIdentityInfo
            ? new PaymentIdentityInfo(_value.paymentIdentityInfo)
            : undefined;
        PaymentInformation.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new PaymentInformation();
        PaymentInformation.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.paymentId = _instance.paymentId || '';
        _instance.guid = _instance.guid || '';
        _instance.payment = _instance.payment || undefined;
        _instance.status = _instance.status || 0;
        _instance.transaction = _instance.transaction || undefined;
        _instance.paymentIdentityInfo = _instance.paymentIdentityInfo || undefined;
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
                    _instance.paymentId = _reader.readString();
                    break;
                case 2:
                    _instance.guid = _reader.readString();
                    break;
                case 3:
                    _instance.payment = new Payment();
                    _reader.readMessage(_instance.payment, Payment.deserializeBinaryFromReader);
                    break;
                case 4:
                    _instance.status = _reader.readEnum();
                    break;
                case 5:
                    _instance.transaction = new Transaction();
                    _reader.readMessage(_instance.transaction, Transaction.deserializeBinaryFromReader);
                    break;
                case 6:
                    _instance.paymentIdentityInfo = new PaymentIdentityInfo();
                    _reader.readMessage(_instance.paymentIdentityInfo, PaymentIdentityInfo.deserializeBinaryFromReader);
                    break;
                default:
                    _reader.skipField();
            }
        }
        PaymentInformation.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.paymentId) {
            _writer.writeString(1, _instance.paymentId);
        }
        if (_instance.guid) {
            _writer.writeString(2, _instance.guid);
        }
        if (_instance.payment) {
            _writer.writeMessage(3, _instance.payment, Payment.serializeBinaryToWriter);
        }
        if (_instance.status) {
            _writer.writeEnum(4, _instance.status);
        }
        if (_instance.transaction) {
            _writer.writeMessage(5, _instance.transaction, Transaction.serializeBinaryToWriter);
        }
        if (_instance.paymentIdentityInfo) {
            _writer.writeMessage(6, _instance.paymentIdentityInfo, PaymentIdentityInfo.serializeBinaryToWriter);
        }
    }
    get paymentId() {
        return this._paymentId;
    }
    set paymentId(value) {
        this._paymentId = value;
    }
    get guid() {
        return this._guid;
    }
    set guid(value) {
        this._guid = value;
    }
    get payment() {
        return this._payment;
    }
    set payment(value) {
        this._payment = value;
    }
    get status() {
        return this._status;
    }
    set status(value) {
        this._status = value;
    }
    get transaction() {
        return this._transaction;
    }
    set transaction(value) {
        this._transaction = value;
    }
    get paymentIdentityInfo() {
        return this._paymentIdentityInfo;
    }
    set paymentIdentityInfo(value) {
        this._paymentIdentityInfo = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        PaymentInformation.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            paymentId: this.paymentId,
            guid: this.guid,
            payment: this.payment ? this.payment.toObject() : undefined,
            status: this.status,
            transaction: this.transaction ? this.transaction.toObject() : undefined,
            paymentIdentityInfo: this.paymentIdentityInfo
                ? this.paymentIdentityInfo.toObject()
                : undefined
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
            paymentId: this.paymentId,
            guid: this.guid,
            payment: this.payment ? this.payment.toProtobufJSON(options) : null,
            status: PaymentStatus[this.status === null || this.status === undefined ? 0 : this.status],
            transaction: this.transaction
                ? this.transaction.toProtobufJSON(options)
                : null,
            paymentIdentityInfo: this.paymentIdentityInfo
                ? this.paymentIdentityInfo.toProtobufJSON(options)
                : null
        };
    }
}
PaymentInformation.id = 'proto.pub.v1.models.PaymentInformation';
/**
 * Message implementation for proto.pub.v1.models.PaymentIdentityInfo
 */
export class PaymentIdentityInfo {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of PaymentIdentityInfo to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.name = _value.name;
        this.phoneNumber = _value.phoneNumber;
        this.address = _value.address;
        this.postCode = _value.postCode;
        PaymentIdentityInfo.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new PaymentIdentityInfo();
        PaymentIdentityInfo.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.name = _instance.name || '';
        _instance.phoneNumber = _instance.phoneNumber || '';
        _instance.address = _instance.address || '';
        _instance.postCode = _instance.postCode || '';
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
                    _instance.name = _reader.readString();
                    break;
                case 2:
                    _instance.phoneNumber = _reader.readString();
                    break;
                case 3:
                    _instance.address = _reader.readString();
                    break;
                case 4:
                    _instance.postCode = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        PaymentIdentityInfo.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.name) {
            _writer.writeString(1, _instance.name);
        }
        if (_instance.phoneNumber) {
            _writer.writeString(2, _instance.phoneNumber);
        }
        if (_instance.address) {
            _writer.writeString(3, _instance.address);
        }
        if (_instance.postCode) {
            _writer.writeString(4, _instance.postCode);
        }
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get phoneNumber() {
        return this._phoneNumber;
    }
    set phoneNumber(value) {
        this._phoneNumber = value;
    }
    get address() {
        return this._address;
    }
    set address(value) {
        this._address = value;
    }
    get postCode() {
        return this._postCode;
    }
    set postCode(value) {
        this._postCode = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        PaymentIdentityInfo.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            name: this.name,
            phoneNumber: this.phoneNumber,
            address: this.address,
            postCode: this.postCode
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
            name: this.name,
            phoneNumber: this.phoneNumber,
            address: this.address,
            postCode: this.postCode
        };
    }
}
PaymentIdentityInfo.id = 'proto.pub.v1.models.PaymentIdentityInfo';
/**
 * Message implementation for proto.pub.v1.models.Transaction
 */
export class Transaction {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Transaction to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.when = _value.when;
        this.amount = _value.amount;
        this.trxCode = _value.trxCode;
        this.description = _value.description;
        this.balance = _value.balance;
        this.source = _value.source
            ? new protoPubV1Models001.Uid(_value.source)
            : undefined;
        this.destination = _value.destination
            ? new protoPubV1Models001.Uid(_value.destination)
            : undefined;
        this.guid = _value.guid;
        Transaction.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new Transaction();
        Transaction.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.when = _instance.when || '0';
        _instance.amount = _instance.amount || '0';
        _instance.trxCode = _instance.trxCode || '';
        _instance.description = _instance.description || '';
        _instance.balance = _instance.balance || '0';
        _instance.source = _instance.source || undefined;
        _instance.destination = _instance.destination || undefined;
        _instance.guid = _instance.guid || '';
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
                    _instance.when = _reader.readInt64String();
                    break;
                case 2:
                    _instance.amount = _reader.readInt64String();
                    break;
                case 3:
                    _instance.trxCode = _reader.readString();
                    break;
                case 4:
                    _instance.description = _reader.readString();
                    break;
                case 5:
                    _instance.balance = _reader.readInt64String();
                    break;
                case 6:
                    _instance.source = new protoPubV1Models001.Uid();
                    _reader.readMessage(_instance.source, protoPubV1Models001.Uid.deserializeBinaryFromReader);
                    break;
                case 7:
                    _instance.destination = new protoPubV1Models001.Uid();
                    _reader.readMessage(_instance.destination, protoPubV1Models001.Uid.deserializeBinaryFromReader);
                    break;
                case 8:
                    _instance.guid = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        Transaction.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.when) {
            _writer.writeInt64String(1, _instance.when);
        }
        if (_instance.amount) {
            _writer.writeInt64String(2, _instance.amount);
        }
        if (_instance.trxCode) {
            _writer.writeString(3, _instance.trxCode);
        }
        if (_instance.description) {
            _writer.writeString(4, _instance.description);
        }
        if (_instance.balance) {
            _writer.writeInt64String(5, _instance.balance);
        }
        if (_instance.source) {
            _writer.writeMessage(6, _instance.source, protoPubV1Models001.Uid.serializeBinaryToWriter);
        }
        if (_instance.destination) {
            _writer.writeMessage(7, _instance.destination, protoPubV1Models001.Uid.serializeBinaryToWriter);
        }
        if (_instance.guid) {
            _writer.writeString(8, _instance.guid);
        }
    }
    get when() {
        return this._when;
    }
    set when(value) {
        this._when = value;
    }
    get amount() {
        return this._amount;
    }
    set amount(value) {
        this._amount = value;
    }
    get trxCode() {
        return this._trxCode;
    }
    set trxCode(value) {
        this._trxCode = value;
    }
    get description() {
        return this._description;
    }
    set description(value) {
        this._description = value;
    }
    get balance() {
        return this._balance;
    }
    set balance(value) {
        this._balance = value;
    }
    get source() {
        return this._source;
    }
    set source(value) {
        this._source = value;
    }
    get destination() {
        return this._destination;
    }
    set destination(value) {
        this._destination = value;
    }
    get guid() {
        return this._guid;
    }
    set guid(value) {
        this._guid = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        Transaction.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            when: this.when,
            amount: this.amount,
            trxCode: this.trxCode,
            description: this.description,
            balance: this.balance,
            source: this.source ? this.source.toObject() : undefined,
            destination: this.destination ? this.destination.toObject() : undefined,
            guid: this.guid
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
            when: this.when,
            amount: this.amount,
            trxCode: this.trxCode,
            description: this.description,
            balance: this.balance,
            source: this.source ? this.source.toProtobufJSON(options) : null,
            destination: this.destination
                ? this.destination.toProtobufJSON(options)
                : null,
            guid: this.guid
        };
    }
}
Transaction.id = 'proto.pub.v1.models.Transaction';
/**
 * Message implementation for proto.pub.v1.models.Withdraw
 */
export class Withdraw {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Withdraw to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.guid = _value.guid;
        this.amount = _value.amount;
        this.destinationName = _value.destinationName;
        this.createAt = _value.createAt;
        this.doneAt = _value.doneAt;
        this.description = _value.description;
        this.status = _value.status;
        this.amountWithoutTariff = _value.amountWithoutTariff;
        this.accountId = _value.accountId;
        this.bankReference = _value.bankReference;
        this.bankFullMessage = _value.bankFullMessage;
        this.destinationPaymentId = _value.destinationPaymentId;
        Withdraw.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new Withdraw();
        Withdraw.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.guid = _instance.guid || '';
        _instance.amount = _instance.amount || '0';
        _instance.destinationName = _instance.destinationName || '';
        _instance.createAt = _instance.createAt || '0';
        _instance.doneAt = _instance.doneAt || '0';
        _instance.description = _instance.description || '';
        _instance.status = _instance.status || 0;
        _instance.amountWithoutTariff = _instance.amountWithoutTariff || '0';
        _instance.accountId = _instance.accountId || '';
        _instance.bankReference = _instance.bankReference || '';
        _instance.bankFullMessage = _instance.bankFullMessage || '';
        _instance.destinationPaymentId = _instance.destinationPaymentId || '';
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
                    _instance.guid = _reader.readString();
                    break;
                case 2:
                    _instance.amount = _reader.readInt64String();
                    break;
                case 3:
                    _instance.destinationName = _reader.readString();
                    break;
                case 4:
                    _instance.createAt = _reader.readInt64String();
                    break;
                case 5:
                    _instance.doneAt = _reader.readInt64String();
                    break;
                case 6:
                    _instance.description = _reader.readString();
                    break;
                case 7:
                    _instance.status = _reader.readEnum();
                    break;
                case 8:
                    _instance.amountWithoutTariff = _reader.readInt64String();
                    break;
                case 9:
                    _instance.accountId = _reader.readString();
                    break;
                case 10:
                    _instance.bankReference = _reader.readString();
                    break;
                case 11:
                    _instance.bankFullMessage = _reader.readString();
                    break;
                case 12:
                    _instance.destinationPaymentId = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        Withdraw.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.guid) {
            _writer.writeString(1, _instance.guid);
        }
        if (_instance.amount) {
            _writer.writeInt64String(2, _instance.amount);
        }
        if (_instance.destinationName) {
            _writer.writeString(3, _instance.destinationName);
        }
        if (_instance.createAt) {
            _writer.writeInt64String(4, _instance.createAt);
        }
        if (_instance.doneAt) {
            _writer.writeInt64String(5, _instance.doneAt);
        }
        if (_instance.description) {
            _writer.writeString(6, _instance.description);
        }
        if (_instance.status) {
            _writer.writeEnum(7, _instance.status);
        }
        if (_instance.amountWithoutTariff) {
            _writer.writeInt64String(8, _instance.amountWithoutTariff);
        }
        if (_instance.accountId) {
            _writer.writeString(9, _instance.accountId);
        }
        if (_instance.bankReference) {
            _writer.writeString(10, _instance.bankReference);
        }
        if (_instance.bankFullMessage) {
            _writer.writeString(11, _instance.bankFullMessage);
        }
        if (_instance.destinationPaymentId) {
            _writer.writeString(12, _instance.destinationPaymentId);
        }
    }
    get guid() {
        return this._guid;
    }
    set guid(value) {
        this._guid = value;
    }
    get amount() {
        return this._amount;
    }
    set amount(value) {
        this._amount = value;
    }
    get destinationName() {
        return this._destinationName;
    }
    set destinationName(value) {
        this._destinationName = value;
    }
    get createAt() {
        return this._createAt;
    }
    set createAt(value) {
        this._createAt = value;
    }
    get doneAt() {
        return this._doneAt;
    }
    set doneAt(value) {
        this._doneAt = value;
    }
    get description() {
        return this._description;
    }
    set description(value) {
        this._description = value;
    }
    get status() {
        return this._status;
    }
    set status(value) {
        this._status = value;
    }
    get amountWithoutTariff() {
        return this._amountWithoutTariff;
    }
    set amountWithoutTariff(value) {
        this._amountWithoutTariff = value;
    }
    get accountId() {
        return this._accountId;
    }
    set accountId(value) {
        this._accountId = value;
    }
    get bankReference() {
        return this._bankReference;
    }
    set bankReference(value) {
        this._bankReference = value;
    }
    get bankFullMessage() {
        return this._bankFullMessage;
    }
    set bankFullMessage(value) {
        this._bankFullMessage = value;
    }
    get destinationPaymentId() {
        return this._destinationPaymentId;
    }
    set destinationPaymentId(value) {
        this._destinationPaymentId = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        Withdraw.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            guid: this.guid,
            amount: this.amount,
            destinationName: this.destinationName,
            createAt: this.createAt,
            doneAt: this.doneAt,
            description: this.description,
            status: this.status,
            amountWithoutTariff: this.amountWithoutTariff,
            accountId: this.accountId,
            bankReference: this.bankReference,
            bankFullMessage: this.bankFullMessage,
            destinationPaymentId: this.destinationPaymentId
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
            guid: this.guid,
            amount: this.amount,
            destinationName: this.destinationName,
            createAt: this.createAt,
            doneAt: this.doneAt,
            description: this.description,
            status: WithdrawStatus[this.status === null || this.status === undefined ? 0 : this.status],
            amountWithoutTariff: this.amountWithoutTariff,
            accountId: this.accountId,
            bankReference: this.bankReference,
            bankFullMessage: this.bankFullMessage,
            destinationPaymentId: this.destinationPaymentId
        };
    }
}
Withdraw.id = 'proto.pub.v1.models.Withdraw';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC5wYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Byb3RvL3NyYy9saWIvcHViL3YxL21vZGVscy9wYXltZW50LnBiLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdBLE9BQU8sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFjLE1BQU0saUJBQWlCLENBQUM7QUFFekUsT0FBTyxLQUFLLG1CQUFtQixNQUFNLCtCQUErQixDQUFDO0FBQ3JFLE1BQU0sQ0FBTixJQUFZLG1CQUVYO0FBRkQsV0FBWSxtQkFBbUI7SUFDN0IsbUVBQVcsQ0FBQTtBQUNiLENBQUMsRUFGVyxtQkFBbUIsS0FBbkIsbUJBQW1CLFFBRTlCO0FBQ0QsTUFBTSxDQUFOLElBQVksb0JBRVg7QUFGRCxXQUFZLG9CQUFvQjtJQUM5Qiw2REFBTyxDQUFBO0FBQ1QsQ0FBQyxFQUZXLG9CQUFvQixLQUFwQixvQkFBb0IsUUFFL0I7QUFDRCxNQUFNLENBQU4sSUFBWSxjQU9YO0FBUEQsV0FBWSxjQUFjO0lBQ3hCLG1GQUF3QixDQUFBO0lBQ3hCLGlHQUErQixDQUFBO0lBQy9CLHlFQUFtQixDQUFBO0lBQ25CLDZFQUFxQixDQUFBO0lBQ3JCLHFFQUFpQixDQUFBO0lBQ2pCLDJFQUFvQixDQUFBO0FBQ3RCLENBQUMsRUFQVyxjQUFjLEtBQWQsY0FBYyxRQU96QjtBQUNELE1BQU0sQ0FBTixJQUFZLGFBS1g7QUFMRCxXQUFZLGFBQWE7SUFDdkIsK0VBQXVCLENBQUE7SUFDdkIsaUVBQWdCLENBQUE7SUFDaEIseUVBQW9CLENBQUE7SUFDcEIsdUVBQW1CLENBQUE7QUFDckIsQ0FBQyxFQUxXLGFBQWEsS0FBYixhQUFhLFFBS3hCO0FBQ0Q7O0dBRUc7QUFDSCxNQUFNLE9BQU8sU0FBUztJQTBGcEI7OztPQUdHO0lBQ0gsWUFBWSxNQUE2QztRQUN2RCxNQUFNLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENB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Q0FBQyxlQUFlO1lBQ3JDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxvQkFBb0I7U0FDaEQsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGNBQWM7SUFDWixhQUFhO0lBQ2IsT0FBK0I7UUFFL0IsT0FBTztZQUNMLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7WUFDckMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsTUFBTSxFQUNKLGNBQWMsQ0FDWixJQUFJLENBQUMsTUFBTSxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUNwRTtZQUNILG1CQUFtQixFQUFFLElBQUksQ0FBQyxtQkFBbUI7WUFDN0MsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUNqQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7WUFDckMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLG9CQUFvQjtTQUNoRCxDQUFDO0lBQ0osQ0FBQzs7QUE3U00sV0FBRSxHQUFHLDhCQUE4QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGUgKi9cbi8qIGVzbGludC1kaXNhYmxlICovXG4vLyBAdHMtbm9jaGVja1xuLy9cbi8vIFRISVMgSVMgQSBHRU5FUkFURUQgRklMRVxuLy8gRE8gTk9UIE1PRElGWSBJVCEgWU9VUiBDSEFOR0VTIFdJTEwgQkUgTE9TVFxuaW1wb3J0IHtcbiAgR3JwY01lc3NhZ2UsXG4gIFJlY3Vyc2l2ZVBhcnRpYWwsXG4gIFRvUHJvdG9idWZKU09OT3B0aW9uc1xufSBmcm9tICdAbmd4LWdycGMvY29tbW9uJztcbmltcG9ydCB7IEJpbmFyeVJlYWRlciwgQmluYXJ5V3JpdGVyLCBCeXRlU291cmNlIH0gZnJvbSAnZ29vZ2xlLXByb3RvYnVmJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMDAgZnJvbSAnLi4vLi4vLi4vcHViL3YxL21vZGVscy9jYXRlZ29yaWVzLnBiJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMDEgZnJvbSAnLi4vLi4vLi4vcHViL3YxL21vZGVscy91aWQucGInO1xuZXhwb3J0IGVudW0gUGF5bWVudFByb3ZpZGVyVHlwZSB7XG4gIE1PTkVBU1kgPSAwXG59XG5leHBvcnQgZW51bSBBY2NlcHRhYmxlQ3VycmVuY2llcyB7XG4gIElSUiA9IDBcbn1cbmV4cG9ydCBlbnVtIFdpdGhkcmF3U3RhdHVzIHtcbiAgV0lUSERSQVdfSU5JVElBTElaRUQgPSAwLFxuICBXSVRIRFJBV19QRU5ESU5HX1RPX0NPTkZJUk0gPSAxLFxuICBXSVRIRFJBV19GQUlMRUQgPSAyLFxuICBXSVRIRFJBV19SRUZVTkRFRCA9IDMsXG4gIFdJVEhEUkFXX0RPTkUgPSA0LFxuICBXSVRIRFJBV19VTktOT1dOID0gNVxufVxuZXhwb3J0IGVudW0gUGF5bWVudFN0YXR1cyB7XG4gIFBBWU1FTlRfSU5JVElBTElaRUQgPSAwLFxuICBQQVlNRU5UX0RPTkUgPSAxLFxuICBQQVlNRU5UX1JFRlVOREVEID0gMixcbiAgUEFZTUVOVF9SRVZPS0VEID0gM1xufVxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBwcm90by5wdWIudjEubW9kZWxzLkNvbW1vZGl0eVxuICovXG5leHBvcnQgY2xhc3MgQ29tbW9kaXR5IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAncHJvdG8ucHViLnYxLm1vZGVscy5Db21tb2RpdHknO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBDb21tb2RpdHkoKTtcbiAgICBDb21tb2RpdHkuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBDb21tb2RpdHkpIHtcbiAgICBfaW5zdGFuY2UuaWQgPSBfaW5zdGFuY2UuaWQgfHwgJyc7XG4gICAgX2luc3RhbmNlLm5hbWUgPSBfaW5zdGFuY2UubmFtZSB8fCAnJztcbiAgICBfaW5zdGFuY2UucHJpY2UgPSBfaW5zdGFuY2UucHJpY2UgfHwgJzAnO1xuICAgIF9pbnN0YW5jZS5kaXNjb3VudFByaWNlID0gX2luc3RhbmNlLmRpc2NvdW50UHJpY2UgfHwgJzAnO1xuICAgIF9pbnN0YW5jZS5jb3VudCA9IF9pbnN0YW5jZS5jb3VudCB8fCAnMCc7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBDb21tb2RpdHksXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLmlkID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UubmFtZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgX2luc3RhbmNlLnByaWNlID0gX3JlYWRlci5yZWFkSW50NjRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIF9pbnN0YW5jZS5kaXNjb3VudFByaWNlID0gX3JlYWRlci5yZWFkSW50NjRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIF9pbnN0YW5jZS5jb3VudCA9IF9yZWFkZXIucmVhZEludDY0U3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBDb21tb2RpdHkucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoX2luc3RhbmNlOiBDb21tb2RpdHksIF93cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChfaW5zdGFuY2UuaWQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLmlkKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5uYW1lKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDIsIF9pbnN0YW5jZS5uYW1lKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5wcmljZSkge1xuICAgICAgX3dyaXRlci53cml0ZUludDY0U3RyaW5nKDMsIF9pbnN0YW5jZS5wcmljZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZGlzY291bnRQcmljZSkge1xuICAgICAgX3dyaXRlci53cml0ZUludDY0U3RyaW5nKDQsIF9pbnN0YW5jZS5kaXNjb3VudFByaWNlKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5jb3VudCkge1xuICAgICAgX3dyaXRlci53cml0ZUludDY0U3RyaW5nKDUsIF9pbnN0YW5jZS5jb3VudCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaWQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX25hbWU/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3ByaWNlPzogc3RyaW5nO1xuICBwcml2YXRlIF9kaXNjb3VudFByaWNlPzogc3RyaW5nO1xuICBwcml2YXRlIF9jb3VudD86IHN0cmluZztcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIENvbW1vZGl0eSB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxDb21tb2RpdHkuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMuaWQgPSBfdmFsdWUuaWQ7XG4gICAgdGhpcy5uYW1lID0gX3ZhbHVlLm5hbWU7XG4gICAgdGhpcy5wcmljZSA9IF92YWx1ZS5wcmljZTtcbiAgICB0aGlzLmRpc2NvdW50UHJpY2UgPSBfdmFsdWUuZGlzY291bnRQcmljZTtcbiAgICB0aGlzLmNvdW50ID0gX3ZhbHVlLmNvdW50O1xuICAgIENvbW1vZGl0eS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGlkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2lkO1xuICB9XG4gIHNldCBpZCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5faWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbmFtZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG4gIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHByaWNlKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3ByaWNlO1xuICB9XG4gIHNldCBwcmljZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcHJpY2UgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZGlzY291bnRQcmljZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9kaXNjb3VudFByaWNlO1xuICB9XG4gIHNldCBkaXNjb3VudFByaWNlKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9kaXNjb3VudFByaWNlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGNvdW50KCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2NvdW50O1xuICB9XG4gIHNldCBjb3VudCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fY291bnQgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBDb21tb2RpdHkuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogQ29tbW9kaXR5LkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICBwcmljZTogdGhpcy5wcmljZSxcbiAgICAgIGRpc2NvdW50UHJpY2U6IHRoaXMuZGlzY291bnRQcmljZSxcbiAgICAgIGNvdW50OiB0aGlzLmNvdW50XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogQ29tbW9kaXR5LkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICBwcmljZTogdGhpcy5wcmljZSxcbiAgICAgIGRpc2NvdW50UHJpY2U6IHRoaXMuZGlzY291bnRQcmljZSxcbiAgICAgIGNvdW50OiB0aGlzLmNvdW50XG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBDb21tb2RpdHkge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIENvbW1vZGl0eVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgaWQ/OiBzdHJpbmc7XG4gICAgbmFtZT86IHN0cmluZztcbiAgICBwcmljZT86IHN0cmluZztcbiAgICBkaXNjb3VudFByaWNlPzogc3RyaW5nO1xuICAgIGNvdW50Pzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIENvbW1vZGl0eVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgaWQ/OiBzdHJpbmc7XG4gICAgbmFtZT86IHN0cmluZztcbiAgICBwcmljZT86IHN0cmluZztcbiAgICBkaXNjb3VudFByaWNlPzogc3RyaW5nO1xuICAgIGNvdW50Pzogc3RyaW5nO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3IgcHJvdG8ucHViLnYxLm1vZGVscy5QYXltZW50XG4gKi9cbmV4cG9ydCBjbGFzcyBQYXltZW50IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAncHJvdG8ucHViLnYxLm1vZGVscy5QYXltZW50JztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgUGF5bWVudCgpO1xuICAgIFBheW1lbnQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBQYXltZW50KSB7XG4gICAgX2luc3RhbmNlLnBheW1lbnRJZCA9IF9pbnN0YW5jZS5wYXltZW50SWQgfHwgJyc7XG4gICAgX2luc3RhbmNlLmFtb3VudCA9IF9pbnN0YW5jZS5hbW91bnQgfHwgJzAnO1xuICAgIF9pbnN0YW5jZS5pc3N1ZXIgPSBfaW5zdGFuY2UuaXNzdWVyIHx8IHVuZGVmaW5lZDtcbiAgICBfaW5zdGFuY2UucGF5ZXIgPSBfaW5zdGFuY2UucGF5ZXIgfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5kZXNjcmlwdGlvbiA9IF9pbnN0YW5jZS5kZXNjcmlwdGlvbiB8fCAnJztcbiAgICBfaW5zdGFuY2UuY29tbW9kaXRpZXMgPSBfaW5zdGFuY2UuY29tbW9kaXRpZXMgfHwgW107XG4gICAgX2luc3RhbmNlLmN1cnJlbmN5ID0gX2luc3RhbmNlLmN1cnJlbmN5IHx8IDA7XG4gICAgX2luc3RhbmNlLnBheW1lbnRQcm92aWRlciA9IF9pbnN0YW5jZS5wYXltZW50UHJvdmlkZXIgfHwgW107XG4gICAgX2luc3RhbmNlLmNyZWF0ZUF0ID0gX2luc3RhbmNlLmNyZWF0ZUF0IHx8ICcwJztcbiAgICBfaW5zdGFuY2UuZXhwaXJlQXQgPSBfaW5zdGFuY2UuZXhwaXJlQXQgfHwgJzAnO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogUGF5bWVudCxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UucGF5bWVudElkID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UuYW1vdW50ID0gX3JlYWRlci5yZWFkSW50NjRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIF9pbnN0YW5jZS5pc3N1ZXIgPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmlzc3VlcixcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDEuVWlkLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBfaW5zdGFuY2UucGF5ZXIgPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLnBheWVyLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIF9pbnN0YW5jZS5kZXNjcmlwdGlvbiA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyNiA9IG5ldyBDb21tb2RpdHkoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyNixcbiAgICAgICAgICAgIENvbW1vZGl0eS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIChfaW5zdGFuY2UuY29tbW9kaXRpZXMgPSBfaW5zdGFuY2UuY29tbW9kaXRpZXMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXI2XG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA3OlxuICAgICAgICAgIF9pbnN0YW5jZS5jdXJyZW5jeSA9IF9yZWFkZXIucmVhZEVudW0oKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA4OlxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2VJbml0aWFsaXplcjggPSBuZXcgUGF5bWVudFByb3ZpZGVyKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjgsXG4gICAgICAgICAgICBQYXltZW50UHJvdmlkZXIuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICAoX2luc3RhbmNlLnBheW1lbnRQcm92aWRlciA9IF9pbnN0YW5jZS5wYXltZW50UHJvdmlkZXIgfHwgW10pLnB1c2goXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXI4XG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA5OlxuICAgICAgICAgIF9pbnN0YW5jZS5jcmVhdGVBdCA9IF9yZWFkZXIucmVhZEludDY0U3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgX2luc3RhbmNlLmV4cGlyZUF0ID0gX3JlYWRlci5yZWFkSW50NjRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFBheW1lbnQucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoX2luc3RhbmNlOiBQYXltZW50LCBfd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoX2luc3RhbmNlLnBheW1lbnRJZCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2UucGF5bWVudElkKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5hbW91bnQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQ2NFN0cmluZygyLCBfaW5zdGFuY2UuYW1vdW50KTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5pc3N1ZXIpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAzLFxuICAgICAgICBfaW5zdGFuY2UuaXNzdWVyIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UucGF5ZXIpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA0LFxuICAgICAgICBfaW5zdGFuY2UucGF5ZXIgYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5kZXNjcmlwdGlvbikge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZyg1LCBfaW5zdGFuY2UuZGVzY3JpcHRpb24pO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmNvbW1vZGl0aWVzICYmIF9pbnN0YW5jZS5jb21tb2RpdGllcy5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZE1lc3NhZ2UoXG4gICAgICAgIDYsXG4gICAgICAgIF9pbnN0YW5jZS5jb21tb2RpdGllcyBhcyBhbnksXG4gICAgICAgIENvbW1vZGl0eS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5jdXJyZW5jeSkge1xuICAgICAgX3dyaXRlci53cml0ZUVudW0oNywgX2luc3RhbmNlLmN1cnJlbmN5KTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5wYXltZW50UHJvdmlkZXIgJiYgX2luc3RhbmNlLnBheW1lbnRQcm92aWRlci5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZE1lc3NhZ2UoXG4gICAgICAgIDgsXG4gICAgICAgIF9pbnN0YW5jZS5wYXltZW50UHJvdmlkZXIgYXMgYW55LFxuICAgICAgICBQYXltZW50UHJvdmlkZXIuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuY3JlYXRlQXQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQ2NFN0cmluZyg5LCBfaW5zdGFuY2UuY3JlYXRlQXQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmV4cGlyZUF0KSB7XG4gICAgICBfd3JpdGVyLndyaXRlSW50NjRTdHJpbmcoMTAsIF9pbnN0YW5jZS5leHBpcmVBdCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcGF5bWVudElkPzogc3RyaW5nO1xuICBwcml2YXRlIF9hbW91bnQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2lzc3Vlcj86IHByb3RvUHViVjFNb2RlbHMwMDEuVWlkO1xuICBwcml2YXRlIF9wYXllcj86IHByb3RvUHViVjFNb2RlbHMwMDEuVWlkO1xuICBwcml2YXRlIF9kZXNjcmlwdGlvbj86IHN0cmluZztcbiAgcHJpdmF0ZSBfY29tbW9kaXRpZXM/OiBDb21tb2RpdHlbXTtcbiAgcHJpdmF0ZSBfY3VycmVuY3k/OiBBY2NlcHRhYmxlQ3VycmVuY2llcztcbiAgcHJpdmF0ZSBfcGF5bWVudFByb3ZpZGVyPzogUGF5bWVudFByb3ZpZGVyW107XG4gIHByaXZhdGUgX2NyZWF0ZUF0Pzogc3RyaW5nO1xuICBwcml2YXRlIF9leHBpcmVBdD86IHN0cmluZztcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIFBheW1lbnQgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8UGF5bWVudC5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5wYXltZW50SWQgPSBfdmFsdWUucGF5bWVudElkO1xuICAgIHRoaXMuYW1vdW50ID0gX3ZhbHVlLmFtb3VudDtcbiAgICB0aGlzLmlzc3VlciA9IF92YWx1ZS5pc3N1ZXJcbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMDEuVWlkKF92YWx1ZS5pc3N1ZXIpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnBheWVyID0gX3ZhbHVlLnBheWVyXG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZChfdmFsdWUucGF5ZXIpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gX3ZhbHVlLmRlc2NyaXB0aW9uO1xuICAgIHRoaXMuY29tbW9kaXRpZXMgPSAoX3ZhbHVlLmNvbW1vZGl0aWVzIHx8IFtdKS5tYXAobSA9PiBuZXcgQ29tbW9kaXR5KG0pKTtcbiAgICB0aGlzLmN1cnJlbmN5ID0gX3ZhbHVlLmN1cnJlbmN5O1xuICAgIHRoaXMucGF5bWVudFByb3ZpZGVyID0gKF92YWx1ZS5wYXltZW50UHJvdmlkZXIgfHwgW10pLm1hcChcbiAgICAgIG0gPT4gbmV3IFBheW1lbnRQcm92aWRlcihtKVxuICAgICk7XG4gICAgdGhpcy5jcmVhdGVBdCA9IF92YWx1ZS5jcmVhdGVBdDtcbiAgICB0aGlzLmV4cGlyZUF0ID0gX3ZhbHVlLmV4cGlyZUF0O1xuICAgIFBheW1lbnQucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBwYXltZW50SWQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcGF5bWVudElkO1xuICB9XG4gIHNldCBwYXltZW50SWQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3BheW1lbnRJZCA9IHZhbHVlO1xuICB9XG4gIGdldCBhbW91bnQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fYW1vdW50O1xuICB9XG4gIHNldCBhbW91bnQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2Ftb3VudCA9IHZhbHVlO1xuICB9XG4gIGdldCBpc3N1ZXIoKTogcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9pc3N1ZXI7XG4gIH1cbiAgc2V0IGlzc3Vlcih2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9pc3N1ZXIgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcGF5ZXIoKTogcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wYXllcjtcbiAgfVxuICBzZXQgcGF5ZXIodmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMDEuVWlkIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcGF5ZXIgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZGVzY3JpcHRpb24oKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb247XG4gIH1cbiAgc2V0IGRlc2NyaXB0aW9uKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IHZhbHVlO1xuICB9XG4gIGdldCBjb21tb2RpdGllcygpOiBDb21tb2RpdHlbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbW1vZGl0aWVzO1xuICB9XG4gIHNldCBjb21tb2RpdGllcyh2YWx1ZTogQ29tbW9kaXR5W10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9jb21tb2RpdGllcyA9IHZhbHVlO1xuICB9XG4gIGdldCBjdXJyZW5jeSgpOiBBY2NlcHRhYmxlQ3VycmVuY2llcyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbmN5O1xuICB9XG4gIHNldCBjdXJyZW5jeSh2YWx1ZTogQWNjZXB0YWJsZUN1cnJlbmNpZXMgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9jdXJyZW5jeSA9IHZhbHVlO1xuICB9XG4gIGdldCBwYXltZW50UHJvdmlkZXIoKTogUGF5bWVudFByb3ZpZGVyW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wYXltZW50UHJvdmlkZXI7XG4gIH1cbiAgc2V0IHBheW1lbnRQcm92aWRlcih2YWx1ZTogUGF5bWVudFByb3ZpZGVyW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9wYXltZW50UHJvdmlkZXIgPSB2YWx1ZTtcbiAgfVxuICBnZXQgY3JlYXRlQXQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fY3JlYXRlQXQ7XG4gIH1cbiAgc2V0IGNyZWF0ZUF0KHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9jcmVhdGVBdCA9IHZhbHVlO1xuICB9XG4gIGdldCBleHBpcmVBdCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9leHBpcmVBdDtcbiAgfVxuICBzZXQgZXhwaXJlQXQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2V4cGlyZUF0ID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgUGF5bWVudC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBQYXltZW50LkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgcGF5bWVudElkOiB0aGlzLnBheW1lbnRJZCxcbiAgICAgIGFtb3VudDogdGhpcy5hbW91bnQsXG4gICAgICBpc3N1ZXI6IHRoaXMuaXNzdWVyID8gdGhpcy5pc3N1ZXIudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIHBheWVyOiB0aGlzLnBheWVyID8gdGhpcy5wYXllci50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICBjb21tb2RpdGllczogKHRoaXMuY29tbW9kaXRpZXMgfHwgW10pLm1hcChtID0+IG0udG9PYmplY3QoKSksXG4gICAgICBjdXJyZW5jeTogdGhpcy5jdXJyZW5jeSxcbiAgICAgIHBheW1lbnRQcm92aWRlcjogKHRoaXMucGF5bWVudFByb3ZpZGVyIHx8IFtdKS5tYXAobSA9PiBtLnRvT2JqZWN0KCkpLFxuICAgICAgY3JlYXRlQXQ6IHRoaXMuY3JlYXRlQXQsXG4gICAgICBleHBpcmVBdDogdGhpcy5leHBpcmVBdFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IFBheW1lbnQuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBwYXltZW50SWQ6IHRoaXMucGF5bWVudElkLFxuICAgICAgYW1vdW50OiB0aGlzLmFtb3VudCxcbiAgICAgIGlzc3VlcjogdGhpcy5pc3N1ZXIgPyB0aGlzLmlzc3Vlci50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICBwYXllcjogdGhpcy5wYXllciA/IHRoaXMucGF5ZXIudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICBjb21tb2RpdGllczogKHRoaXMuY29tbW9kaXRpZXMgfHwgW10pLm1hcChtID0+IG0udG9Qcm90b2J1ZkpTT04ob3B0aW9ucykpLFxuICAgICAgY3VycmVuY3k6XG4gICAgICAgIEFjY2VwdGFibGVDdXJyZW5jaWVzW1xuICAgICAgICAgIHRoaXMuY3VycmVuY3kgPT09IG51bGwgfHwgdGhpcy5jdXJyZW5jeSA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IDBcbiAgICAgICAgICAgIDogdGhpcy5jdXJyZW5jeVxuICAgICAgICBdLFxuICAgICAgcGF5bWVudFByb3ZpZGVyOiAodGhpcy5wYXltZW50UHJvdmlkZXIgfHwgW10pLm1hcChtID0+XG4gICAgICAgIG0udG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICksXG4gICAgICBjcmVhdGVBdDogdGhpcy5jcmVhdGVBdCxcbiAgICAgIGV4cGlyZUF0OiB0aGlzLmV4cGlyZUF0XG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBQYXltZW50IHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBQYXltZW50XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBwYXltZW50SWQ/OiBzdHJpbmc7XG4gICAgYW1vdW50Pzogc3RyaW5nO1xuICAgIGlzc3Vlcj86IHByb3RvUHViVjFNb2RlbHMwMDEuVWlkLkFzT2JqZWN0O1xuICAgIHBheWVyPzogcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQuQXNPYmplY3Q7XG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gICAgY29tbW9kaXRpZXM/OiBDb21tb2RpdHkuQXNPYmplY3RbXTtcbiAgICBjdXJyZW5jeT86IEFjY2VwdGFibGVDdXJyZW5jaWVzO1xuICAgIHBheW1lbnRQcm92aWRlcj86IFBheW1lbnRQcm92aWRlci5Bc09iamVjdFtdO1xuICAgIGNyZWF0ZUF0Pzogc3RyaW5nO1xuICAgIGV4cGlyZUF0Pzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIFBheW1lbnRcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHBheW1lbnRJZD86IHN0cmluZztcbiAgICBhbW91bnQ/OiBzdHJpbmc7XG4gICAgaXNzdWVyPzogcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHBheWVyPzogcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgIGNvbW1vZGl0aWVzPzogQ29tbW9kaXR5LkFzUHJvdG9idWZKU09OW10gfCBudWxsO1xuICAgIGN1cnJlbmN5Pzogc3RyaW5nO1xuICAgIHBheW1lbnRQcm92aWRlcj86IFBheW1lbnRQcm92aWRlci5Bc1Byb3RvYnVmSlNPTltdIHwgbnVsbDtcbiAgICBjcmVhdGVBdD86IHN0cmluZztcbiAgICBleHBpcmVBdD86IHN0cmluZztcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIHByb3RvLnB1Yi52MS5tb2RlbHMuUGF5bWVudFByb3ZpZGVyXG4gKi9cbmV4cG9ydCBjbGFzcyBQYXltZW50UHJvdmlkZXIgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdwcm90by5wdWIudjEubW9kZWxzLlBheW1lbnRQcm92aWRlcic7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFBheW1lbnRQcm92aWRlcigpO1xuICAgIFBheW1lbnRQcm92aWRlci5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IFBheW1lbnRQcm92aWRlcikge1xuICAgIF9pbnN0YW5jZS5wYXltZW50UHJvdmlkZXJUeXBlID0gX2luc3RhbmNlLnBheW1lbnRQcm92aWRlclR5cGUgfHwgMDtcbiAgICBfaW5zdGFuY2UucmVxdWlyZWRQYXltZW50SWRlbnRpdHlJbmZvID1cbiAgICAgIF9pbnN0YW5jZS5yZXF1aXJlZFBheW1lbnRJZGVudGl0eUluZm8gfHwgdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogUGF5bWVudFByb3ZpZGVyLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5wYXltZW50UHJvdmlkZXJUeXBlID0gX3JlYWRlci5yZWFkRW51bSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLnJlcXVpcmVkUGF5bWVudElkZW50aXR5SW5mbyA9IG5ldyBSZXF1aXJlZFBheW1lbnRJZGVudGl0eUluZm8oKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLnJlcXVpcmVkUGF5bWVudElkZW50aXR5SW5mbyxcbiAgICAgICAgICAgIFJlcXVpcmVkUGF5bWVudElkZW50aXR5SW5mby5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgUGF5bWVudFByb3ZpZGVyLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogUGF5bWVudFByb3ZpZGVyLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLnBheW1lbnRQcm92aWRlclR5cGUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVFbnVtKDEsIF9pbnN0YW5jZS5wYXltZW50UHJvdmlkZXJUeXBlKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5yZXF1aXJlZFBheW1lbnRJZGVudGl0eUluZm8pIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAyLFxuICAgICAgICBfaW5zdGFuY2UucmVxdWlyZWRQYXltZW50SWRlbnRpdHlJbmZvIGFzIGFueSxcbiAgICAgICAgUmVxdWlyZWRQYXltZW50SWRlbnRpdHlJbmZvLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3BheW1lbnRQcm92aWRlclR5cGU/OiBQYXltZW50UHJvdmlkZXJUeXBlO1xuICBwcml2YXRlIF9yZXF1aXJlZFBheW1lbnRJZGVudGl0eUluZm8/OiBSZXF1aXJlZFBheW1lbnRJZGVudGl0eUluZm87XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBQYXltZW50UHJvdmlkZXIgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8UGF5bWVudFByb3ZpZGVyLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnBheW1lbnRQcm92aWRlclR5cGUgPSBfdmFsdWUucGF5bWVudFByb3ZpZGVyVHlwZTtcbiAgICB0aGlzLnJlcXVpcmVkUGF5bWVudElkZW50aXR5SW5mbyA9IF92YWx1ZS5yZXF1aXJlZFBheW1lbnRJZGVudGl0eUluZm9cbiAgICAgID8gbmV3IFJlcXVpcmVkUGF5bWVudElkZW50aXR5SW5mbyhfdmFsdWUucmVxdWlyZWRQYXltZW50SWRlbnRpdHlJbmZvKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgUGF5bWVudFByb3ZpZGVyLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgcGF5bWVudFByb3ZpZGVyVHlwZSgpOiBQYXltZW50UHJvdmlkZXJUeXBlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcGF5bWVudFByb3ZpZGVyVHlwZTtcbiAgfVxuICBzZXQgcGF5bWVudFByb3ZpZGVyVHlwZSh2YWx1ZTogUGF5bWVudFByb3ZpZGVyVHlwZSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3BheW1lbnRQcm92aWRlclR5cGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcmVxdWlyZWRQYXltZW50SWRlbnRpdHlJbmZvKCk6IFJlcXVpcmVkUGF5bWVudElkZW50aXR5SW5mbyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcXVpcmVkUGF5bWVudElkZW50aXR5SW5mbztcbiAgfVxuICBzZXQgcmVxdWlyZWRQYXltZW50SWRlbnRpdHlJbmZvKFxuICAgIHZhbHVlOiBSZXF1aXJlZFBheW1lbnRJZGVudGl0eUluZm8gfCB1bmRlZmluZWRcbiAgKSB7XG4gICAgdGhpcy5fcmVxdWlyZWRQYXltZW50SWRlbnRpdHlJbmZvID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgUGF5bWVudFByb3ZpZGVyLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IFBheW1lbnRQcm92aWRlci5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBheW1lbnRQcm92aWRlclR5cGU6IHRoaXMucGF5bWVudFByb3ZpZGVyVHlwZSxcbiAgICAgIHJlcXVpcmVkUGF5bWVudElkZW50aXR5SW5mbzogdGhpcy5yZXF1aXJlZFBheW1lbnRJZGVudGl0eUluZm9cbiAgICAgICAgPyB0aGlzLnJlcXVpcmVkUGF5bWVudElkZW50aXR5SW5mby50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogUGF5bWVudFByb3ZpZGVyLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGF5bWVudFByb3ZpZGVyVHlwZTpcbiAgICAgICAgUGF5bWVudFByb3ZpZGVyVHlwZVtcbiAgICAgICAgICB0aGlzLnBheW1lbnRQcm92aWRlclR5cGUgPT09IG51bGwgfHxcbiAgICAgICAgICB0aGlzLnBheW1lbnRQcm92aWRlclR5cGUgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyAwXG4gICAgICAgICAgICA6IHRoaXMucGF5bWVudFByb3ZpZGVyVHlwZVxuICAgICAgICBdLFxuICAgICAgcmVxdWlyZWRQYXltZW50SWRlbnRpdHlJbmZvOiB0aGlzLnJlcXVpcmVkUGF5bWVudElkZW50aXR5SW5mb1xuICAgICAgICA/IHRoaXMucmVxdWlyZWRQYXltZW50SWRlbnRpdHlJbmZvLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbFxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgUGF5bWVudFByb3ZpZGVyIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBQYXltZW50UHJvdmlkZXJcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIHBheW1lbnRQcm92aWRlclR5cGU/OiBQYXltZW50UHJvdmlkZXJUeXBlO1xuICAgIHJlcXVpcmVkUGF5bWVudElkZW50aXR5SW5mbz86IFJlcXVpcmVkUGF5bWVudElkZW50aXR5SW5mby5Bc09iamVjdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBQYXltZW50UHJvdmlkZXJcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHBheW1lbnRQcm92aWRlclR5cGU/OiBzdHJpbmc7XG4gICAgcmVxdWlyZWRQYXltZW50SWRlbnRpdHlJbmZvPzogUmVxdWlyZWRQYXltZW50SWRlbnRpdHlJbmZvLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIHByb3RvLnB1Yi52MS5tb2RlbHMuUmVxdWlyZWRQYXltZW50SWRlbnRpdHlJbmZvXG4gKi9cbmV4cG9ydCBjbGFzcyBSZXF1aXJlZFBheW1lbnRJZGVudGl0eUluZm8gaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdwcm90by5wdWIudjEubW9kZWxzLlJlcXVpcmVkUGF5bWVudElkZW50aXR5SW5mbyc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFJlcXVpcmVkUGF5bWVudElkZW50aXR5SW5mbygpO1xuICAgIFJlcXVpcmVkUGF5bWVudElkZW50aXR5SW5mby5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IFJlcXVpcmVkUGF5bWVudElkZW50aXR5SW5mbykge1xuICAgIF9pbnN0YW5jZS5pc0FkZHJlc3NSZXF1aXJlZCA9IF9pbnN0YW5jZS5pc0FkZHJlc3NSZXF1aXJlZCB8fCBmYWxzZTtcbiAgICBfaW5zdGFuY2UuaXNQb3N0Q29kZVJlcXVpcmVkID0gX2luc3RhbmNlLmlzUG9zdENvZGVSZXF1aXJlZCB8fCBmYWxzZTtcbiAgICBfaW5zdGFuY2UuaXNOYXRpb25hbENvZGVSZXF1aXJlZCA9XG4gICAgICBfaW5zdGFuY2UuaXNOYXRpb25hbENvZGVSZXF1aXJlZCB8fCBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IFJlcXVpcmVkUGF5bWVudElkZW50aXR5SW5mbyxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UuaXNBZGRyZXNzUmVxdWlyZWQgPSBfcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UuaXNQb3N0Q29kZVJlcXVpcmVkID0gX3JlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgX2luc3RhbmNlLmlzTmF0aW9uYWxDb2RlUmVxdWlyZWQgPSBfcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSZXF1aXJlZFBheW1lbnRJZGVudGl0eUluZm8ucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBSZXF1aXJlZFBheW1lbnRJZGVudGl0eUluZm8sXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UuaXNBZGRyZXNzUmVxdWlyZWQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVCb29sKDEsIF9pbnN0YW5jZS5pc0FkZHJlc3NSZXF1aXJlZCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuaXNQb3N0Q29kZVJlcXVpcmVkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlQm9vbCgyLCBfaW5zdGFuY2UuaXNQb3N0Q29kZVJlcXVpcmVkKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5pc05hdGlvbmFsQ29kZVJlcXVpcmVkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlQm9vbCgzLCBfaW5zdGFuY2UuaXNOYXRpb25hbENvZGVSZXF1aXJlZCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaXNBZGRyZXNzUmVxdWlyZWQ/OiBib29sZWFuO1xuICBwcml2YXRlIF9pc1Bvc3RDb2RlUmVxdWlyZWQ/OiBib29sZWFuO1xuICBwcml2YXRlIF9pc05hdGlvbmFsQ29kZVJlcXVpcmVkPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIFJlcXVpcmVkUGF5bWVudElkZW50aXR5SW5mbyB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxSZXF1aXJlZFBheW1lbnRJZGVudGl0eUluZm8uQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMuaXNBZGRyZXNzUmVxdWlyZWQgPSBfdmFsdWUuaXNBZGRyZXNzUmVxdWlyZWQ7XG4gICAgdGhpcy5pc1Bvc3RDb2RlUmVxdWlyZWQgPSBfdmFsdWUuaXNQb3N0Q29kZVJlcXVpcmVkO1xuICAgIHRoaXMuaXNOYXRpb25hbENvZGVSZXF1aXJlZCA9IF92YWx1ZS5pc05hdGlvbmFsQ29kZVJlcXVpcmVkO1xuICAgIFJlcXVpcmVkUGF5bWVudElkZW50aXR5SW5mby5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGlzQWRkcmVzc1JlcXVpcmVkKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9pc0FkZHJlc3NSZXF1aXJlZDtcbiAgfVxuICBzZXQgaXNBZGRyZXNzUmVxdWlyZWQodmFsdWU6IGJvb2xlYW4gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9pc0FkZHJlc3NSZXF1aXJlZCA9IHZhbHVlO1xuICB9XG4gIGdldCBpc1Bvc3RDb2RlUmVxdWlyZWQoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2lzUG9zdENvZGVSZXF1aXJlZDtcbiAgfVxuICBzZXQgaXNQb3N0Q29kZVJlcXVpcmVkKHZhbHVlOiBib29sZWFuIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5faXNQb3N0Q29kZVJlcXVpcmVkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGlzTmF0aW9uYWxDb2RlUmVxdWlyZWQoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2lzTmF0aW9uYWxDb2RlUmVxdWlyZWQ7XG4gIH1cbiAgc2V0IGlzTmF0aW9uYWxDb2RlUmVxdWlyZWQodmFsdWU6IGJvb2xlYW4gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9pc05hdGlvbmFsQ29kZVJlcXVpcmVkID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgUmVxdWlyZWRQYXltZW50SWRlbnRpdHlJbmZvLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IFJlcXVpcmVkUGF5bWVudElkZW50aXR5SW5mby5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzQWRkcmVzc1JlcXVpcmVkOiB0aGlzLmlzQWRkcmVzc1JlcXVpcmVkLFxuICAgICAgaXNQb3N0Q29kZVJlcXVpcmVkOiB0aGlzLmlzUG9zdENvZGVSZXF1aXJlZCxcbiAgICAgIGlzTmF0aW9uYWxDb2RlUmVxdWlyZWQ6IHRoaXMuaXNOYXRpb25hbENvZGVSZXF1aXJlZFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IFJlcXVpcmVkUGF5bWVudElkZW50aXR5SW5mby5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzQWRkcmVzc1JlcXVpcmVkOiB0aGlzLmlzQWRkcmVzc1JlcXVpcmVkLFxuICAgICAgaXNQb3N0Q29kZVJlcXVpcmVkOiB0aGlzLmlzUG9zdENvZGVSZXF1aXJlZCxcbiAgICAgIGlzTmF0aW9uYWxDb2RlUmVxdWlyZWQ6IHRoaXMuaXNOYXRpb25hbENvZGVSZXF1aXJlZFxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgUmVxdWlyZWRQYXltZW50SWRlbnRpdHlJbmZvIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBSZXF1aXJlZFBheW1lbnRJZGVudGl0eUluZm9cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIGlzQWRkcmVzc1JlcXVpcmVkPzogYm9vbGVhbjtcbiAgICBpc1Bvc3RDb2RlUmVxdWlyZWQ/OiBib29sZWFuO1xuICAgIGlzTmF0aW9uYWxDb2RlUmVxdWlyZWQ/OiBib29sZWFuO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIFJlcXVpcmVkUGF5bWVudElkZW50aXR5SW5mb1xuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgaXNBZGRyZXNzUmVxdWlyZWQ/OiBib29sZWFuO1xuICAgIGlzUG9zdENvZGVSZXF1aXJlZD86IGJvb2xlYW47XG4gICAgaXNOYXRpb25hbENvZGVSZXF1aXJlZD86IGJvb2xlYW47XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBwcm90by5wdWIudjEubW9kZWxzLlBheW1lbnRJbmZvcm1hdGlvblxuICovXG5leHBvcnQgY2xhc3MgUGF5bWVudEluZm9ybWF0aW9uIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAncHJvdG8ucHViLnYxLm1vZGVscy5QYXltZW50SW5mb3JtYXRpb24nO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBQYXltZW50SW5mb3JtYXRpb24oKTtcbiAgICBQYXltZW50SW5mb3JtYXRpb24uZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBQYXltZW50SW5mb3JtYXRpb24pIHtcbiAgICBfaW5zdGFuY2UucGF5bWVudElkID0gX2luc3RhbmNlLnBheW1lbnRJZCB8fCAnJztcbiAgICBfaW5zdGFuY2UuZ3VpZCA9IF9pbnN0YW5jZS5ndWlkIHx8ICcnO1xuICAgIF9pbnN0YW5jZS5wYXltZW50ID0gX2luc3RhbmNlLnBheW1lbnQgfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5zdGF0dXMgPSBfaW5zdGFuY2Uuc3RhdHVzIHx8IDA7XG4gICAgX2luc3RhbmNlLnRyYW5zYWN0aW9uID0gX2luc3RhbmNlLnRyYW5zYWN0aW9uIHx8IHVuZGVmaW5lZDtcbiAgICBfaW5zdGFuY2UucGF5bWVudElkZW50aXR5SW5mbyA9IF9pbnN0YW5jZS5wYXltZW50SWRlbnRpdHlJbmZvIHx8IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IFBheW1lbnRJbmZvcm1hdGlvbixcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UucGF5bWVudElkID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UuZ3VpZCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgX2luc3RhbmNlLnBheW1lbnQgPSBuZXcgUGF5bWVudCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UucGF5bWVudCxcbiAgICAgICAgICAgIFBheW1lbnQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIF9pbnN0YW5jZS5zdGF0dXMgPSBfcmVhZGVyLnJlYWRFbnVtKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBfaW5zdGFuY2UudHJhbnNhY3Rpb24gPSBuZXcgVHJhbnNhY3Rpb24oKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLnRyYW5zYWN0aW9uLFxuICAgICAgICAgICAgVHJhbnNhY3Rpb24uZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIF9pbnN0YW5jZS5wYXltZW50SWRlbnRpdHlJbmZvID0gbmV3IFBheW1lbnRJZGVudGl0eUluZm8oKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLnBheW1lbnRJZGVudGl0eUluZm8sXG4gICAgICAgICAgICBQYXltZW50SWRlbnRpdHlJbmZvLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBQYXltZW50SW5mb3JtYXRpb24ucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBQYXltZW50SW5mb3JtYXRpb24sXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UucGF5bWVudElkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS5wYXltZW50SWQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmd1aWQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMiwgX2luc3RhbmNlLmd1aWQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnBheW1lbnQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAzLFxuICAgICAgICBfaW5zdGFuY2UucGF5bWVudCBhcyBhbnksXG4gICAgICAgIFBheW1lbnQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uuc3RhdHVzKSB7XG4gICAgICBfd3JpdGVyLndyaXRlRW51bSg0LCBfaW5zdGFuY2Uuc3RhdHVzKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS50cmFuc2FjdGlvbikge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDUsXG4gICAgICAgIF9pbnN0YW5jZS50cmFuc2FjdGlvbiBhcyBhbnksXG4gICAgICAgIFRyYW5zYWN0aW9uLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnBheW1lbnRJZGVudGl0eUluZm8pIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA2LFxuICAgICAgICBfaW5zdGFuY2UucGF5bWVudElkZW50aXR5SW5mbyBhcyBhbnksXG4gICAgICAgIFBheW1lbnRJZGVudGl0eUluZm8uc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcGF5bWVudElkPzogc3RyaW5nO1xuICBwcml2YXRlIF9ndWlkPzogc3RyaW5nO1xuICBwcml2YXRlIF9wYXltZW50PzogUGF5bWVudDtcbiAgcHJpdmF0ZSBfc3RhdHVzPzogUGF5bWVudFN0YXR1cztcbiAgcHJpdmF0ZSBfdHJhbnNhY3Rpb24/OiBUcmFuc2FjdGlvbjtcbiAgcHJpdmF0ZSBfcGF5bWVudElkZW50aXR5SW5mbz86IFBheW1lbnRJZGVudGl0eUluZm87XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBQYXltZW50SW5mb3JtYXRpb24gdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8UGF5bWVudEluZm9ybWF0aW9uLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnBheW1lbnRJZCA9IF92YWx1ZS5wYXltZW50SWQ7XG4gICAgdGhpcy5ndWlkID0gX3ZhbHVlLmd1aWQ7XG4gICAgdGhpcy5wYXltZW50ID0gX3ZhbHVlLnBheW1lbnQgPyBuZXcgUGF5bWVudChfdmFsdWUucGF5bWVudCkgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5zdGF0dXMgPSBfdmFsdWUuc3RhdHVzO1xuICAgIHRoaXMudHJhbnNhY3Rpb24gPSBfdmFsdWUudHJhbnNhY3Rpb25cbiAgICAgID8gbmV3IFRyYW5zYWN0aW9uKF92YWx1ZS50cmFuc2FjdGlvbilcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMucGF5bWVudElkZW50aXR5SW5mbyA9IF92YWx1ZS5wYXltZW50SWRlbnRpdHlJbmZvXG4gICAgICA/IG5ldyBQYXltZW50SWRlbnRpdHlJbmZvKF92YWx1ZS5wYXltZW50SWRlbnRpdHlJbmZvKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgUGF5bWVudEluZm9ybWF0aW9uLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgcGF5bWVudElkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3BheW1lbnRJZDtcbiAgfVxuICBzZXQgcGF5bWVudElkKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9wYXltZW50SWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZ3VpZCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9ndWlkO1xuICB9XG4gIHNldCBndWlkKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9ndWlkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHBheW1lbnQoKTogUGF5bWVudCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3BheW1lbnQ7XG4gIH1cbiAgc2V0IHBheW1lbnQodmFsdWU6IFBheW1lbnQgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9wYXltZW50ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHN0YXR1cygpOiBQYXltZW50U3RhdHVzIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdHVzO1xuICB9XG4gIHNldCBzdGF0dXModmFsdWU6IFBheW1lbnRTdGF0dXMgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zdGF0dXMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdHJhbnNhY3Rpb24oKTogVHJhbnNhY3Rpb24gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90cmFuc2FjdGlvbjtcbiAgfVxuICBzZXQgdHJhbnNhY3Rpb24odmFsdWU6IFRyYW5zYWN0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdHJhbnNhY3Rpb24gPSB2YWx1ZTtcbiAgfVxuICBnZXQgcGF5bWVudElkZW50aXR5SW5mbygpOiBQYXltZW50SWRlbnRpdHlJbmZvIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcGF5bWVudElkZW50aXR5SW5mbztcbiAgfVxuICBzZXQgcGF5bWVudElkZW50aXR5SW5mbyh2YWx1ZTogUGF5bWVudElkZW50aXR5SW5mbyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3BheW1lbnRJZGVudGl0eUluZm8gPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBQYXltZW50SW5mb3JtYXRpb24uc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogUGF5bWVudEluZm9ybWF0aW9uLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgcGF5bWVudElkOiB0aGlzLnBheW1lbnRJZCxcbiAgICAgIGd1aWQ6IHRoaXMuZ3VpZCxcbiAgICAgIHBheW1lbnQ6IHRoaXMucGF5bWVudCA/IHRoaXMucGF5bWVudC50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgc3RhdHVzOiB0aGlzLnN0YXR1cyxcbiAgICAgIHRyYW5zYWN0aW9uOiB0aGlzLnRyYW5zYWN0aW9uID8gdGhpcy50cmFuc2FjdGlvbi50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgcGF5bWVudElkZW50aXR5SW5mbzogdGhpcy5wYXltZW50SWRlbnRpdHlJbmZvXG4gICAgICAgID8gdGhpcy5wYXltZW50SWRlbnRpdHlJbmZvLnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWRcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBQYXltZW50SW5mb3JtYXRpb24uQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBwYXltZW50SWQ6IHRoaXMucGF5bWVudElkLFxuICAgICAgZ3VpZDogdGhpcy5ndWlkLFxuICAgICAgcGF5bWVudDogdGhpcy5wYXltZW50ID8gdGhpcy5wYXltZW50LnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIHN0YXR1czpcbiAgICAgICAgUGF5bWVudFN0YXR1c1tcbiAgICAgICAgICB0aGlzLnN0YXR1cyA9PT0gbnVsbCB8fCB0aGlzLnN0YXR1cyA9PT0gdW5kZWZpbmVkID8gMCA6IHRoaXMuc3RhdHVzXG4gICAgICAgIF0sXG4gICAgICB0cmFuc2FjdGlvbjogdGhpcy50cmFuc2FjdGlvblxuICAgICAgICA/IHRoaXMudHJhbnNhY3Rpb24udG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsLFxuICAgICAgcGF5bWVudElkZW50aXR5SW5mbzogdGhpcy5wYXltZW50SWRlbnRpdHlJbmZvXG4gICAgICAgID8gdGhpcy5wYXltZW50SWRlbnRpdHlJbmZvLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbFxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgUGF5bWVudEluZm9ybWF0aW9uIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBQYXltZW50SW5mb3JtYXRpb25cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIHBheW1lbnRJZD86IHN0cmluZztcbiAgICBndWlkPzogc3RyaW5nO1xuICAgIHBheW1lbnQ/OiBQYXltZW50LkFzT2JqZWN0O1xuICAgIHN0YXR1cz86IFBheW1lbnRTdGF0dXM7XG4gICAgdHJhbnNhY3Rpb24/OiBUcmFuc2FjdGlvbi5Bc09iamVjdDtcbiAgICBwYXltZW50SWRlbnRpdHlJbmZvPzogUGF5bWVudElkZW50aXR5SW5mby5Bc09iamVjdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBQYXltZW50SW5mb3JtYXRpb25cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHBheW1lbnRJZD86IHN0cmluZztcbiAgICBndWlkPzogc3RyaW5nO1xuICAgIHBheW1lbnQ/OiBQYXltZW50LkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBzdGF0dXM/OiBzdHJpbmc7XG4gICAgdHJhbnNhY3Rpb24/OiBUcmFuc2FjdGlvbi5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgcGF5bWVudElkZW50aXR5SW5mbz86IFBheW1lbnRJZGVudGl0eUluZm8uQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3IgcHJvdG8ucHViLnYxLm1vZGVscy5QYXltZW50SWRlbnRpdHlJbmZvXG4gKi9cbmV4cG9ydCBjbGFzcyBQYXltZW50SWRlbnRpdHlJbmZvIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAncHJvdG8ucHViLnYxLm1vZGVscy5QYXltZW50SWRlbnRpdHlJbmZvJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgUGF5bWVudElkZW50aXR5SW5mbygpO1xuICAgIFBheW1lbnRJZGVudGl0eUluZm8uZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBQYXltZW50SWRlbnRpdHlJbmZvKSB7XG4gICAgX2luc3RhbmNlLm5hbWUgPSBfaW5zdGFuY2UubmFtZSB8fCAnJztcbiAgICBfaW5zdGFuY2UucGhvbmVOdW1iZXIgPSBfaW5zdGFuY2UucGhvbmVOdW1iZXIgfHwgJyc7XG4gICAgX2luc3RhbmNlLmFkZHJlc3MgPSBfaW5zdGFuY2UuYWRkcmVzcyB8fCAnJztcbiAgICBfaW5zdGFuY2UucG9zdENvZGUgPSBfaW5zdGFuY2UucG9zdENvZGUgfHwgJyc7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBQYXltZW50SWRlbnRpdHlJbmZvLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5uYW1lID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UucGhvbmVOdW1iZXIgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIF9pbnN0YW5jZS5hZGRyZXNzID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBfaW5zdGFuY2UucG9zdENvZGUgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFBheW1lbnRJZGVudGl0eUluZm8ucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBQYXltZW50SWRlbnRpdHlJbmZvLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLm5hbWUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLm5hbWUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnBob25lTnVtYmVyKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDIsIF9pbnN0YW5jZS5waG9uZU51bWJlcik7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuYWRkcmVzcykge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygzLCBfaW5zdGFuY2UuYWRkcmVzcyk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UucG9zdENvZGUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoNCwgX2luc3RhbmNlLnBvc3RDb2RlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9uYW1lPzogc3RyaW5nO1xuICBwcml2YXRlIF9waG9uZU51bWJlcj86IHN0cmluZztcbiAgcHJpdmF0ZSBfYWRkcmVzcz86IHN0cmluZztcbiAgcHJpdmF0ZSBfcG9zdENvZGU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBQYXltZW50SWRlbnRpdHlJbmZvIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFBheW1lbnRJZGVudGl0eUluZm8uQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMubmFtZSA9IF92YWx1ZS5uYW1lO1xuICAgIHRoaXMucGhvbmVOdW1iZXIgPSBfdmFsdWUucGhvbmVOdW1iZXI7XG4gICAgdGhpcy5hZGRyZXNzID0gX3ZhbHVlLmFkZHJlc3M7XG4gICAgdGhpcy5wb3N0Q29kZSA9IF92YWx1ZS5wb3N0Q29kZTtcbiAgICBQYXltZW50SWRlbnRpdHlJbmZvLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgbmFtZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG4gIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHBob25lTnVtYmVyKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3Bob25lTnVtYmVyO1xuICB9XG4gIHNldCBwaG9uZU51bWJlcih2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcGhvbmVOdW1iZXIgPSB2YWx1ZTtcbiAgfVxuICBnZXQgYWRkcmVzcygpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9hZGRyZXNzO1xuICB9XG4gIHNldCBhZGRyZXNzKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9hZGRyZXNzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHBvc3RDb2RlKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3Bvc3RDb2RlO1xuICB9XG4gIHNldCBwb3N0Q29kZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcG9zdENvZGUgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBQYXltZW50SWRlbnRpdHlJbmZvLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IFBheW1lbnRJZGVudGl0eUluZm8uQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICBwaG9uZU51bWJlcjogdGhpcy5waG9uZU51bWJlcixcbiAgICAgIGFkZHJlc3M6IHRoaXMuYWRkcmVzcyxcbiAgICAgIHBvc3RDb2RlOiB0aGlzLnBvc3RDb2RlXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogUGF5bWVudElkZW50aXR5SW5mby5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIHBob25lTnVtYmVyOiB0aGlzLnBob25lTnVtYmVyLFxuICAgICAgYWRkcmVzczogdGhpcy5hZGRyZXNzLFxuICAgICAgcG9zdENvZGU6IHRoaXMucG9zdENvZGVcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIFBheW1lbnRJZGVudGl0eUluZm8ge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIFBheW1lbnRJZGVudGl0eUluZm9cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgcGhvbmVOdW1iZXI/OiBzdHJpbmc7XG4gICAgYWRkcmVzcz86IHN0cmluZztcbiAgICBwb3N0Q29kZT86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBQYXltZW50SWRlbnRpdHlJbmZvXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIHBob25lTnVtYmVyPzogc3RyaW5nO1xuICAgIGFkZHJlc3M/OiBzdHJpbmc7XG4gICAgcG9zdENvZGU/OiBzdHJpbmc7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBwcm90by5wdWIudjEubW9kZWxzLlRyYW5zYWN0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBUcmFuc2FjdGlvbiBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ3Byb3RvLnB1Yi52MS5tb2RlbHMuVHJhbnNhY3Rpb24nO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBUcmFuc2FjdGlvbigpO1xuICAgIFRyYW5zYWN0aW9uLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogVHJhbnNhY3Rpb24pIHtcbiAgICBfaW5zdGFuY2Uud2hlbiA9IF9pbnN0YW5jZS53aGVuIHx8ICcwJztcbiAgICBfaW5zdGFuY2UuYW1vdW50ID0gX2luc3RhbmNlLmFtb3VudCB8fCAnMCc7XG4gICAgX2luc3RhbmNlLnRyeENvZGUgPSBfaW5zdGFuY2UudHJ4Q29kZSB8fCAnJztcbiAgICBfaW5zdGFuY2UuZGVzY3JpcHRpb24gPSBfaW5zdGFuY2UuZGVzY3JpcHRpb24gfHwgJyc7XG4gICAgX2luc3RhbmNlLmJhbGFuY2UgPSBfaW5zdGFuY2UuYmFsYW5jZSB8fCAnMCc7XG4gICAgX2luc3RhbmNlLnNvdXJjZSA9IF9pbnN0YW5jZS5zb3VyY2UgfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5kZXN0aW5hdGlvbiA9IF9pbnN0YW5jZS5kZXN0aW5hdGlvbiB8fCB1bmRlZmluZWQ7XG4gICAgX2luc3RhbmNlLmd1aWQgPSBfaW5zdGFuY2UuZ3VpZCB8fCAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IFRyYW5zYWN0aW9uLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS53aGVuID0gX3JlYWRlci5yZWFkSW50NjRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5hbW91bnQgPSBfcmVhZGVyLnJlYWRJbnQ2NFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgX2luc3RhbmNlLnRyeENvZGUgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIF9pbnN0YW5jZS5kZXNjcmlwdGlvbiA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgX2luc3RhbmNlLmJhbGFuY2UgPSBfcmVhZGVyLnJlYWRJbnQ2NFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgX2luc3RhbmNlLnNvdXJjZSA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2Uuc291cmNlLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA3OlxuICAgICAgICAgIF9pbnN0YW5jZS5kZXN0aW5hdGlvbiA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuZGVzdGluYXRpb24sXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgX2luc3RhbmNlLmd1aWQgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFRyYW5zYWN0aW9uLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogVHJhbnNhY3Rpb24sXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2Uud2hlbikge1xuICAgICAgX3dyaXRlci53cml0ZUludDY0U3RyaW5nKDEsIF9pbnN0YW5jZS53aGVuKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5hbW91bnQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQ2NFN0cmluZygyLCBfaW5zdGFuY2UuYW1vdW50KTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS50cnhDb2RlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDMsIF9pbnN0YW5jZS50cnhDb2RlKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5kZXNjcmlwdGlvbikge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZyg0LCBfaW5zdGFuY2UuZGVzY3JpcHRpb24pO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmJhbGFuY2UpIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQ2NFN0cmluZyg1LCBfaW5zdGFuY2UuYmFsYW5jZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uuc291cmNlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgNixcbiAgICAgICAgX2luc3RhbmNlLnNvdXJjZSBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDEuVWlkLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmRlc3RpbmF0aW9uKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgNyxcbiAgICAgICAgX2luc3RhbmNlLmRlc3RpbmF0aW9uIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZ3VpZCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZyg4LCBfaW5zdGFuY2UuZ3VpZCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfd2hlbj86IHN0cmluZztcbiAgcHJpdmF0ZSBfYW1vdW50Pzogc3RyaW5nO1xuICBwcml2YXRlIF90cnhDb2RlPzogc3RyaW5nO1xuICBwcml2YXRlIF9kZXNjcmlwdGlvbj86IHN0cmluZztcbiAgcHJpdmF0ZSBfYmFsYW5jZT86IHN0cmluZztcbiAgcHJpdmF0ZSBfc291cmNlPzogcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQ7XG4gIHByaXZhdGUgX2Rlc3RpbmF0aW9uPzogcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQ7XG4gIHByaXZhdGUgX2d1aWQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBUcmFuc2FjdGlvbiB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxUcmFuc2FjdGlvbi5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy53aGVuID0gX3ZhbHVlLndoZW47XG4gICAgdGhpcy5hbW91bnQgPSBfdmFsdWUuYW1vdW50O1xuICAgIHRoaXMudHJ4Q29kZSA9IF92YWx1ZS50cnhDb2RlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBfdmFsdWUuZGVzY3JpcHRpb247XG4gICAgdGhpcy5iYWxhbmNlID0gX3ZhbHVlLmJhbGFuY2U7XG4gICAgdGhpcy5zb3VyY2UgPSBfdmFsdWUuc291cmNlXG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZChfdmFsdWUuc291cmNlKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5kZXN0aW5hdGlvbiA9IF92YWx1ZS5kZXN0aW5hdGlvblxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQoX3ZhbHVlLmRlc3RpbmF0aW9uKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5ndWlkID0gX3ZhbHVlLmd1aWQ7XG4gICAgVHJhbnNhY3Rpb24ucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCB3aGVuKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3doZW47XG4gIH1cbiAgc2V0IHdoZW4odmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3doZW4gPSB2YWx1ZTtcbiAgfVxuICBnZXQgYW1vdW50KCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2Ftb3VudDtcbiAgfVxuICBzZXQgYW1vdW50KHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9hbW91bnQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdHJ4Q29kZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90cnhDb2RlO1xuICB9XG4gIHNldCB0cnhDb2RlKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl90cnhDb2RlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGRlc2NyaXB0aW9uKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uO1xuICB9XG4gIHNldCBkZXNjcmlwdGlvbih2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgfVxuICBnZXQgYmFsYW5jZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9iYWxhbmNlO1xuICB9XG4gIHNldCBiYWxhbmNlKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9iYWxhbmNlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHNvdXJjZSgpOiBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3NvdXJjZTtcbiAgfVxuICBzZXQgc291cmNlKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZCB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3NvdXJjZSA9IHZhbHVlO1xuICB9XG4gIGdldCBkZXN0aW5hdGlvbigpOiBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2Rlc3RpbmF0aW9uO1xuICB9XG4gIHNldCBkZXN0aW5hdGlvbih2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAwMS5VaWQgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9kZXN0aW5hdGlvbiA9IHZhbHVlO1xuICB9XG4gIGdldCBndWlkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2d1aWQ7XG4gIH1cbiAgc2V0IGd1aWQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2d1aWQgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBUcmFuc2FjdGlvbi5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBUcmFuc2FjdGlvbi5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdoZW46IHRoaXMud2hlbixcbiAgICAgIGFtb3VudDogdGhpcy5hbW91bnQsXG4gICAgICB0cnhDb2RlOiB0aGlzLnRyeENvZGUsXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgIGJhbGFuY2U6IHRoaXMuYmFsYW5jZSxcbiAgICAgIHNvdXJjZTogdGhpcy5zb3VyY2UgPyB0aGlzLnNvdXJjZS50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgZGVzdGluYXRpb246IHRoaXMuZGVzdGluYXRpb24gPyB0aGlzLmRlc3RpbmF0aW9uLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBndWlkOiB0aGlzLmd1aWRcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBUcmFuc2FjdGlvbi5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdoZW46IHRoaXMud2hlbixcbiAgICAgIGFtb3VudDogdGhpcy5hbW91bnQsXG4gICAgICB0cnhDb2RlOiB0aGlzLnRyeENvZGUsXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgIGJhbGFuY2U6IHRoaXMuYmFsYW5jZSxcbiAgICAgIHNvdXJjZTogdGhpcy5zb3VyY2UgPyB0aGlzLnNvdXJjZS50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICBkZXN0aW5hdGlvbjogdGhpcy5kZXN0aW5hdGlvblxuICAgICAgICA/IHRoaXMuZGVzdGluYXRpb24udG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsLFxuICAgICAgZ3VpZDogdGhpcy5ndWlkXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBUcmFuc2FjdGlvbiB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgVHJhbnNhY3Rpb25cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIHdoZW4/OiBzdHJpbmc7XG4gICAgYW1vdW50Pzogc3RyaW5nO1xuICAgIHRyeENvZGU/OiBzdHJpbmc7XG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gICAgYmFsYW5jZT86IHN0cmluZztcbiAgICBzb3VyY2U/OiBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZC5Bc09iamVjdDtcbiAgICBkZXN0aW5hdGlvbj86IHByb3RvUHViVjFNb2RlbHMwMDEuVWlkLkFzT2JqZWN0O1xuICAgIGd1aWQ/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgVHJhbnNhY3Rpb25cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHdoZW4/OiBzdHJpbmc7XG4gICAgYW1vdW50Pzogc3RyaW5nO1xuICAgIHRyeENvZGU/OiBzdHJpbmc7XG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gICAgYmFsYW5jZT86IHN0cmluZztcbiAgICBzb3VyY2U/OiBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgZGVzdGluYXRpb24/OiBwcm90b1B1YlYxTW9kZWxzMDAxLlVpZC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgZ3VpZD86IHN0cmluZztcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIHByb3RvLnB1Yi52MS5tb2RlbHMuV2l0aGRyYXdcbiAqL1xuZXhwb3J0IGNsYXNzIFdpdGhkcmF3IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAncHJvdG8ucHViLnYxLm1vZGVscy5XaXRoZHJhdyc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFdpdGhkcmF3KCk7XG4gICAgV2l0aGRyYXcuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBXaXRoZHJhdykge1xuICAgIF9pbnN0YW5jZS5ndWlkID0gX2luc3RhbmNlLmd1aWQgfHwgJyc7XG4gICAgX2luc3RhbmNlLmFtb3VudCA9IF9pbnN0YW5jZS5hbW91bnQgfHwgJzAnO1xuICAgIF9pbnN0YW5jZS5kZXN0aW5hdGlvbk5hbWUgPSBfaW5zdGFuY2UuZGVzdGluYXRpb25OYW1lIHx8ICcnO1xuICAgIF9pbnN0YW5jZS5jcmVhdGVBdCA9IF9pbnN0YW5jZS5jcmVhdGVBdCB8fCAnMCc7XG4gICAgX2luc3RhbmNlLmRvbmVBdCA9IF9pbnN0YW5jZS5kb25lQXQgfHwgJzAnO1xuICAgIF9pbnN0YW5jZS5kZXNjcmlwdGlvbiA9IF9pbnN0YW5jZS5kZXNjcmlwdGlvbiB8fCAnJztcbiAgICBfaW5zdGFuY2Uuc3RhdHVzID0gX2luc3RhbmNlLnN0YXR1cyB8fCAwO1xuICAgIF9pbnN0YW5jZS5hbW91bnRXaXRob3V0VGFyaWZmID0gX2luc3RhbmNlLmFtb3VudFdpdGhvdXRUYXJpZmYgfHwgJzAnO1xuICAgIF9pbnN0YW5jZS5hY2NvdW50SWQgPSBfaW5zdGFuY2UuYWNjb3VudElkIHx8ICcnO1xuICAgIF9pbnN0YW5jZS5iYW5rUmVmZXJlbmNlID0gX2luc3RhbmNlLmJhbmtSZWZlcmVuY2UgfHwgJyc7XG4gICAgX2luc3RhbmNlLmJhbmtGdWxsTWVzc2FnZSA9IF9pbnN0YW5jZS5iYW5rRnVsbE1lc3NhZ2UgfHwgJyc7XG4gICAgX2luc3RhbmNlLmRlc3RpbmF0aW9uUGF5bWVudElkID0gX2luc3RhbmNlLmRlc3RpbmF0aW9uUGF5bWVudElkIHx8ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogV2l0aGRyYXcsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLmd1aWQgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5hbW91bnQgPSBfcmVhZGVyLnJlYWRJbnQ2NFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgX2luc3RhbmNlLmRlc3RpbmF0aW9uTmFtZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgX2luc3RhbmNlLmNyZWF0ZUF0ID0gX3JlYWRlci5yZWFkSW50NjRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIF9pbnN0YW5jZS5kb25lQXQgPSBfcmVhZGVyLnJlYWRJbnQ2NFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgX2luc3RhbmNlLmRlc2NyaXB0aW9uID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNzpcbiAgICAgICAgICBfaW5zdGFuY2Uuc3RhdHVzID0gX3JlYWRlci5yZWFkRW51bSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgX2luc3RhbmNlLmFtb3VudFdpdGhvdXRUYXJpZmYgPSBfcmVhZGVyLnJlYWRJbnQ2NFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgX2luc3RhbmNlLmFjY291bnRJZCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgIF9pbnN0YW5jZS5iYW5rUmVmZXJlbmNlID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgX2luc3RhbmNlLmJhbmtGdWxsTWVzc2FnZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgIF9pbnN0YW5jZS5kZXN0aW5hdGlvblBheW1lbnRJZCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgV2l0aGRyYXcucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoX2luc3RhbmNlOiBXaXRoZHJhdywgX3dyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5ndWlkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS5ndWlkKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5hbW91bnQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQ2NFN0cmluZygyLCBfaW5zdGFuY2UuYW1vdW50KTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5kZXN0aW5hdGlvbk5hbWUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMywgX2luc3RhbmNlLmRlc3RpbmF0aW9uTmFtZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuY3JlYXRlQXQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQ2NFN0cmluZyg0LCBfaW5zdGFuY2UuY3JlYXRlQXQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmRvbmVBdCkge1xuICAgICAgX3dyaXRlci53cml0ZUludDY0U3RyaW5nKDUsIF9pbnN0YW5jZS5kb25lQXQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmRlc2NyaXB0aW9uKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDYsIF9pbnN0YW5jZS5kZXNjcmlwdGlvbik7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uuc3RhdHVzKSB7XG4gICAgICBfd3JpdGVyLndyaXRlRW51bSg3LCBfaW5zdGFuY2Uuc3RhdHVzKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5hbW91bnRXaXRob3V0VGFyaWZmKSB7XG4gICAgICBfd3JpdGVyLndyaXRlSW50NjRTdHJpbmcoOCwgX2luc3RhbmNlLmFtb3VudFdpdGhvdXRUYXJpZmYpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmFjY291bnRJZCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZyg5LCBfaW5zdGFuY2UuYWNjb3VudElkKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5iYW5rUmVmZXJlbmNlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEwLCBfaW5zdGFuY2UuYmFua1JlZmVyZW5jZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuYmFua0Z1bGxNZXNzYWdlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDExLCBfaW5zdGFuY2UuYmFua0Z1bGxNZXNzYWdlKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5kZXN0aW5hdGlvblBheW1lbnRJZCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxMiwgX2luc3RhbmNlLmRlc3RpbmF0aW9uUGF5bWVudElkKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9ndWlkPzogc3RyaW5nO1xuICBwcml2YXRlIF9hbW91bnQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2Rlc3RpbmF0aW9uTmFtZT86IHN0cmluZztcbiAgcHJpdmF0ZSBfY3JlYXRlQXQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2RvbmVBdD86IHN0cmluZztcbiAgcHJpdmF0ZSBfZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3N0YXR1cz86IFdpdGhkcmF3U3RhdHVzO1xuICBwcml2YXRlIF9hbW91bnRXaXRob3V0VGFyaWZmPzogc3RyaW5nO1xuICBwcml2YXRlIF9hY2NvdW50SWQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2JhbmtSZWZlcmVuY2U/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2JhbmtGdWxsTWVzc2FnZT86IHN0cmluZztcbiAgcHJpdmF0ZSBfZGVzdGluYXRpb25QYXltZW50SWQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBXaXRoZHJhdyB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxXaXRoZHJhdy5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5ndWlkID0gX3ZhbHVlLmd1aWQ7XG4gICAgdGhpcy5hbW91bnQgPSBfdmFsdWUuYW1vdW50O1xuICAgIHRoaXMuZGVzdGluYXRpb25OYW1lID0gX3ZhbHVlLmRlc3RpbmF0aW9uTmFtZTtcbiAgICB0aGlzLmNyZWF0ZUF0ID0gX3ZhbHVlLmNyZWF0ZUF0O1xuICAgIHRoaXMuZG9uZUF0ID0gX3ZhbHVlLmRvbmVBdDtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gX3ZhbHVlLmRlc2NyaXB0aW9uO1xuICAgIHRoaXMuc3RhdHVzID0gX3ZhbHVlLnN0YXR1cztcbiAgICB0aGlzLmFtb3VudFdpdGhvdXRUYXJpZmYgPSBfdmFsdWUuYW1vdW50V2l0aG91dFRhcmlmZjtcbiAgICB0aGlzLmFjY291bnRJZCA9IF92YWx1ZS5hY2NvdW50SWQ7XG4gICAgdGhpcy5iYW5rUmVmZXJlbmNlID0gX3ZhbHVlLmJhbmtSZWZlcmVuY2U7XG4gICAgdGhpcy5iYW5rRnVsbE1lc3NhZ2UgPSBfdmFsdWUuYmFua0Z1bGxNZXNzYWdlO1xuICAgIHRoaXMuZGVzdGluYXRpb25QYXltZW50SWQgPSBfdmFsdWUuZGVzdGluYXRpb25QYXltZW50SWQ7XG4gICAgV2l0aGRyYXcucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBndWlkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2d1aWQ7XG4gIH1cbiAgc2V0IGd1aWQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2d1aWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgYW1vdW50KCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2Ftb3VudDtcbiAgfVxuICBzZXQgYW1vdW50KHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9hbW91bnQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZGVzdGluYXRpb25OYW1lKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2Rlc3RpbmF0aW9uTmFtZTtcbiAgfVxuICBzZXQgZGVzdGluYXRpb25OYW1lKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9kZXN0aW5hdGlvbk5hbWUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgY3JlYXRlQXQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fY3JlYXRlQXQ7XG4gIH1cbiAgc2V0IGNyZWF0ZUF0KHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9jcmVhdGVBdCA9IHZhbHVlO1xuICB9XG4gIGdldCBkb25lQXQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZG9uZUF0O1xuICB9XG4gIHNldCBkb25lQXQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2RvbmVBdCA9IHZhbHVlO1xuICB9XG4gIGdldCBkZXNjcmlwdGlvbigpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbjtcbiAgfVxuICBzZXQgZGVzY3JpcHRpb24odmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHN0YXR1cygpOiBXaXRoZHJhd1N0YXR1cyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXR1cztcbiAgfVxuICBzZXQgc3RhdHVzKHZhbHVlOiBXaXRoZHJhd1N0YXR1cyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3N0YXR1cyA9IHZhbHVlO1xuICB9XG4gIGdldCBhbW91bnRXaXRob3V0VGFyaWZmKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2Ftb3VudFdpdGhvdXRUYXJpZmY7XG4gIH1cbiAgc2V0IGFtb3VudFdpdGhvdXRUYXJpZmYodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2Ftb3VudFdpdGhvdXRUYXJpZmYgPSB2YWx1ZTtcbiAgfVxuICBnZXQgYWNjb3VudElkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2FjY291bnRJZDtcbiAgfVxuICBzZXQgYWNjb3VudElkKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9hY2NvdW50SWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgYmFua1JlZmVyZW5jZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9iYW5rUmVmZXJlbmNlO1xuICB9XG4gIHNldCBiYW5rUmVmZXJlbmNlKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9iYW5rUmVmZXJlbmNlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGJhbmtGdWxsTWVzc2FnZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9iYW5rRnVsbE1lc3NhZ2U7XG4gIH1cbiAgc2V0IGJhbmtGdWxsTWVzc2FnZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fYmFua0Z1bGxNZXNzYWdlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGRlc3RpbmF0aW9uUGF5bWVudElkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2Rlc3RpbmF0aW9uUGF5bWVudElkO1xuICB9XG4gIHNldCBkZXN0aW5hdGlvblBheW1lbnRJZCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZGVzdGluYXRpb25QYXltZW50SWQgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBXaXRoZHJhdy5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBXaXRoZHJhdy5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGd1aWQ6IHRoaXMuZ3VpZCxcbiAgICAgIGFtb3VudDogdGhpcy5hbW91bnQsXG4gICAgICBkZXN0aW5hdGlvbk5hbWU6IHRoaXMuZGVzdGluYXRpb25OYW1lLFxuICAgICAgY3JlYXRlQXQ6IHRoaXMuY3JlYXRlQXQsXG4gICAgICBkb25lQXQ6IHRoaXMuZG9uZUF0LFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICBzdGF0dXM6IHRoaXMuc3RhdHVzLFxuICAgICAgYW1vdW50V2l0aG91dFRhcmlmZjogdGhpcy5hbW91bnRXaXRob3V0VGFyaWZmLFxuICAgICAgYWNjb3VudElkOiB0aGlzLmFjY291bnRJZCxcbiAgICAgIGJhbmtSZWZlcmVuY2U6IHRoaXMuYmFua1JlZmVyZW5jZSxcbiAgICAgIGJhbmtGdWxsTWVzc2FnZTogdGhpcy5iYW5rRnVsbE1lc3NhZ2UsXG4gICAgICBkZXN0aW5hdGlvblBheW1lbnRJZDogdGhpcy5kZXN0aW5hdGlvblBheW1lbnRJZFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IFdpdGhkcmF3LkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgZ3VpZDogdGhpcy5ndWlkLFxuICAgICAgYW1vdW50OiB0aGlzLmFtb3VudCxcbiAgICAgIGRlc3RpbmF0aW9uTmFtZTogdGhpcy5kZXN0aW5hdGlvbk5hbWUsXG4gICAgICBjcmVhdGVBdDogdGhpcy5jcmVhdGVBdCxcbiAgICAgIGRvbmVBdDogdGhpcy5kb25lQXQsXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgIHN0YXR1czpcbiAgICAgICAgV2l0aGRyYXdTdGF0dXNbXG4gICAgICAgICAgdGhpcy5zdGF0dXMgPT09IG51bGwgfHwgdGhpcy5zdGF0dXMgPT09IHVuZGVmaW5lZCA/IDAgOiB0aGlzLnN0YXR1c1xuICAgICAgICBdLFxuICAgICAgYW1vdW50V2l0aG91dFRhcmlmZjogdGhpcy5hbW91bnRXaXRob3V0VGFyaWZmLFxuICAgICAgYWNjb3VudElkOiB0aGlzLmFjY291bnRJZCxcbiAgICAgIGJhbmtSZWZlcmVuY2U6IHRoaXMuYmFua1JlZmVyZW5jZSxcbiAgICAgIGJhbmtGdWxsTWVzc2FnZTogdGhpcy5iYW5rRnVsbE1lc3NhZ2UsXG4gICAgICBkZXN0aW5hdGlvblBheW1lbnRJZDogdGhpcy5kZXN0aW5hdGlvblBheW1lbnRJZFxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgV2l0aGRyYXcge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIFdpdGhkcmF3XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBndWlkPzogc3RyaW5nO1xuICAgIGFtb3VudD86IHN0cmluZztcbiAgICBkZXN0aW5hdGlvbk5hbWU/OiBzdHJpbmc7XG4gICAgY3JlYXRlQXQ/OiBzdHJpbmc7XG4gICAgZG9uZUF0Pzogc3RyaW5nO1xuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgIHN0YXR1cz86IFdpdGhkcmF3U3RhdHVzO1xuICAgIGFtb3VudFdpdGhvdXRUYXJpZmY/OiBzdHJpbmc7XG4gICAgYWNjb3VudElkPzogc3RyaW5nO1xuICAgIGJhbmtSZWZlcmVuY2U/OiBzdHJpbmc7XG4gICAgYmFua0Z1bGxNZXNzYWdlPzogc3RyaW5nO1xuICAgIGRlc3RpbmF0aW9uUGF5bWVudElkPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIFdpdGhkcmF3XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBndWlkPzogc3RyaW5nO1xuICAgIGFtb3VudD86IHN0cmluZztcbiAgICBkZXN0aW5hdGlvbk5hbWU/OiBzdHJpbmc7XG4gICAgY3JlYXRlQXQ/OiBzdHJpbmc7XG4gICAgZG9uZUF0Pzogc3RyaW5nO1xuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgIHN0YXR1cz86IHN0cmluZztcbiAgICBhbW91bnRXaXRob3V0VGFyaWZmPzogc3RyaW5nO1xuICAgIGFjY291bnRJZD86IHN0cmluZztcbiAgICBiYW5rUmVmZXJlbmNlPzogc3RyaW5nO1xuICAgIGJhbmtGdWxsTWVzc2FnZT86IHN0cmluZztcbiAgICBkZXN0aW5hdGlvblBheW1lbnRJZD86IHN0cmluZztcbiAgfVxufVxuIl19