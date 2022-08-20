import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as protoPubV1Models001 from '../../../pub/v1/models/uid.pb';
export declare enum AcceptableCurrencies {
    IRR = 0
}
export declare enum WithdrawStatus {
    WITHDRAW_INITIALIZED = 0,
    WITHDRAW_PENDING_TO_CONFIRM = 1,
    WITHDRAW_FAILED = 2,
    WITHDRAW_REFUNDED = 3,
    WITHDRAW_DONE = 4,
    WITHDRAW_UNKNOWN = 5
}
export declare enum PaymentStatus {
    PAYMENT_INITIALIZED = 0,
    PAYMENT_DONE = 1,
    PAYMENT_REFUNDED = 2,
    PAYMENT_REVOKED = 3
}
/**
 * Message implementation for proto.pub.v1.models.Commodity
 */
export declare class Commodity implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): Commodity;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Commodity): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: Commodity, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: Commodity, _writer: BinaryWriter): void;
    private _id?;
    private _name?;
    private _price?;
    private _discountPrice?;
    private _count?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Commodity to deeply clone from
     */
    constructor(_value?: RecursivePartial<Commodity.AsObject>);
    get id(): string | undefined;
    set id(value: string | undefined);
    get name(): string | undefined;
    set name(value: string | undefined);
    get price(): string | undefined;
    set price(value: string | undefined);
    get discountPrice(): string | undefined;
    set discountPrice(value: string | undefined);
    get count(): string | undefined;
    set count(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Commodity.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): Commodity.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): Commodity.AsProtobufJSON;
}
export declare module Commodity {
    /**
     * Standard JavaScript object representation for Commodity
     */
    interface AsObject {
        id?: string;
        name?: string;
        price?: string;
        discountPrice?: string;
        count?: string;
    }
    /**
     * Protobuf JSON representation for Commodity
     */
    interface AsProtobufJSON {
        id?: string;
        name?: string;
        price?: string;
        discountPrice?: string;
        count?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.models.Payment
 */
export declare class Payment implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): Payment;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Payment): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: Payment, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: Payment, _writer: BinaryWriter): void;
    private _guid?;
    private _amount?;
    private _issuer?;
    private _payer?;
    private _description?;
    private _commodities?;
    private _currency?;
    private _requiredPaymentIdentityInfo?;
    private _createAt?;
    private _expireAt?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Payment to deeply clone from
     */
    constructor(_value?: RecursivePartial<Payment.AsObject>);
    get guid(): string | undefined;
    set guid(value: string | undefined);
    get amount(): string | undefined;
    set amount(value: string | undefined);
    get issuer(): protoPubV1Models001.Uid | undefined;
    set issuer(value: protoPubV1Models001.Uid | undefined);
    get payer(): protoPubV1Models001.Uid | undefined;
    set payer(value: protoPubV1Models001.Uid | undefined);
    get description(): string | undefined;
    set description(value: string | undefined);
    get commodities(): Commodity[] | undefined;
    set commodities(value: Commodity[] | undefined);
    get currency(): AcceptableCurrencies | undefined;
    set currency(value: AcceptableCurrencies | undefined);
    get requiredPaymentIdentityInfo(): RequiredPaymentIdentityInfo | undefined;
    set requiredPaymentIdentityInfo(value: RequiredPaymentIdentityInfo | undefined);
    get createAt(): string | undefined;
    set createAt(value: string | undefined);
    get expireAt(): string | undefined;
    set expireAt(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Payment.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): Payment.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): Payment.AsProtobufJSON;
}
export declare module Payment {
    /**
     * Standard JavaScript object representation for Payment
     */
    interface AsObject {
        guid?: string;
        amount?: string;
        issuer?: protoPubV1Models001.Uid.AsObject;
        payer?: protoPubV1Models001.Uid.AsObject;
        description?: string;
        commodities?: Commodity.AsObject[];
        currency?: AcceptableCurrencies;
        requiredPaymentIdentityInfo?: RequiredPaymentIdentityInfo.AsObject;
        createAt?: string;
        expireAt?: string;
    }
    /**
     * Protobuf JSON representation for Payment
     */
    interface AsProtobufJSON {
        guid?: string;
        amount?: string;
        issuer?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        payer?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        description?: string;
        commodities?: Commodity.AsProtobufJSON[] | null;
        currency?: string;
        requiredPaymentIdentityInfo?: RequiredPaymentIdentityInfo.AsProtobufJSON | null;
        createAt?: string;
        expireAt?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.models.RequiredPaymentIdentityInfo
 */
export declare class RequiredPaymentIdentityInfo implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): RequiredPaymentIdentityInfo;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: RequiredPaymentIdentityInfo): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: RequiredPaymentIdentityInfo, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: RequiredPaymentIdentityInfo, _writer: BinaryWriter): void;
    private _isAddressRequired?;
    private _isPostCodeRequired?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of RequiredPaymentIdentityInfo to deeply clone from
     */
    constructor(_value?: RecursivePartial<RequiredPaymentIdentityInfo.AsObject>);
    get isAddressRequired(): boolean | undefined;
    set isAddressRequired(value: boolean | undefined);
    get isPostCodeRequired(): boolean | undefined;
    set isPostCodeRequired(value: boolean | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): RequiredPaymentIdentityInfo.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): RequiredPaymentIdentityInfo.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): RequiredPaymentIdentityInfo.AsProtobufJSON;
}
export declare module RequiredPaymentIdentityInfo {
    /**
     * Standard JavaScript object representation for RequiredPaymentIdentityInfo
     */
    interface AsObject {
        isAddressRequired?: boolean;
        isPostCodeRequired?: boolean;
    }
    /**
     * Protobuf JSON representation for RequiredPaymentIdentityInfo
     */
    interface AsProtobufJSON {
        isAddressRequired?: boolean;
        isPostCodeRequired?: boolean;
    }
}
/**
 * Message implementation for proto.pub.v1.models.PaymentInformation
 */
export declare class PaymentInformation implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): PaymentInformation;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: PaymentInformation): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: PaymentInformation, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: PaymentInformation, _writer: BinaryWriter): void;
    private _guid?;
    private _payment?;
    private _status?;
    private _transaction?;
    private _paymentIdentityInfo?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of PaymentInformation to deeply clone from
     */
    constructor(_value?: RecursivePartial<PaymentInformation.AsObject>);
    get guid(): string | undefined;
    set guid(value: string | undefined);
    get payment(): Payment | undefined;
    set payment(value: Payment | undefined);
    get status(): PaymentStatus | undefined;
    set status(value: PaymentStatus | undefined);
    get transaction(): Transaction | undefined;
    set transaction(value: Transaction | undefined);
    get paymentIdentityInfo(): PaymentIdentityInfo | undefined;
    set paymentIdentityInfo(value: PaymentIdentityInfo | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): PaymentInformation.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): PaymentInformation.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): PaymentInformation.AsProtobufJSON;
}
export declare module PaymentInformation {
    /**
     * Standard JavaScript object representation for PaymentInformation
     */
    interface AsObject {
        guid?: string;
        payment?: Payment.AsObject;
        status?: PaymentStatus;
        transaction?: Transaction.AsObject;
        paymentIdentityInfo?: PaymentIdentityInfo.AsObject;
    }
    /**
     * Protobuf JSON representation for PaymentInformation
     */
    interface AsProtobufJSON {
        guid?: string;
        payment?: Payment.AsProtobufJSON | null;
        status?: string;
        transaction?: Transaction.AsProtobufJSON | null;
        paymentIdentityInfo?: PaymentIdentityInfo.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for proto.pub.v1.models.PaymentIdentityInfo
 */
export declare class PaymentIdentityInfo implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): PaymentIdentityInfo;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: PaymentIdentityInfo): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: PaymentIdentityInfo, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: PaymentIdentityInfo, _writer: BinaryWriter): void;
    private _name?;
    private _phoneNumber?;
    private _address?;
    private _postCode?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of PaymentIdentityInfo to deeply clone from
     */
    constructor(_value?: RecursivePartial<PaymentIdentityInfo.AsObject>);
    get name(): string | undefined;
    set name(value: string | undefined);
    get phoneNumber(): string | undefined;
    set phoneNumber(value: string | undefined);
    get address(): string | undefined;
    set address(value: string | undefined);
    get postCode(): string | undefined;
    set postCode(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): PaymentIdentityInfo.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): PaymentIdentityInfo.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): PaymentIdentityInfo.AsProtobufJSON;
}
export declare module PaymentIdentityInfo {
    /**
     * Standard JavaScript object representation for PaymentIdentityInfo
     */
    interface AsObject {
        name?: string;
        phoneNumber?: string;
        address?: string;
        postCode?: string;
    }
    /**
     * Protobuf JSON representation for PaymentIdentityInfo
     */
    interface AsProtobufJSON {
        name?: string;
        phoneNumber?: string;
        address?: string;
        postCode?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.models.Transaction
 */
export declare class Transaction implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): Transaction;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Transaction): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: Transaction, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: Transaction, _writer: BinaryWriter): void;
    private _when?;
    private _amount?;
    private _trxCode?;
    private _description?;
    private _balance?;
    private _source?;
    private _destination?;
    private _guid?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Transaction to deeply clone from
     */
    constructor(_value?: RecursivePartial<Transaction.AsObject>);
    get when(): string | undefined;
    set when(value: string | undefined);
    get amount(): string | undefined;
    set amount(value: string | undefined);
    get trxCode(): string | undefined;
    set trxCode(value: string | undefined);
    get description(): string | undefined;
    set description(value: string | undefined);
    get balance(): string | undefined;
    set balance(value: string | undefined);
    get source(): protoPubV1Models001.Uid | undefined;
    set source(value: protoPubV1Models001.Uid | undefined);
    get destination(): protoPubV1Models001.Uid | undefined;
    set destination(value: protoPubV1Models001.Uid | undefined);
    get guid(): string | undefined;
    set guid(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Transaction.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): Transaction.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): Transaction.AsProtobufJSON;
}
export declare module Transaction {
    /**
     * Standard JavaScript object representation for Transaction
     */
    interface AsObject {
        when?: string;
        amount?: string;
        trxCode?: string;
        description?: string;
        balance?: string;
        source?: protoPubV1Models001.Uid.AsObject;
        destination?: protoPubV1Models001.Uid.AsObject;
        guid?: string;
    }
    /**
     * Protobuf JSON representation for Transaction
     */
    interface AsProtobufJSON {
        when?: string;
        amount?: string;
        trxCode?: string;
        description?: string;
        balance?: string;
        source?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        destination?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        guid?: string;
    }
}
/**
 * Message implementation for proto.pub.v1.models.Withdraw
 */
export declare class Withdraw implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): Withdraw;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Withdraw): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: Withdraw, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: Withdraw, _writer: BinaryWriter): void;
    private _guid?;
    private _amount?;
    private _destinationName?;
    private _createAt?;
    private _doneAt?;
    private _description?;
    private _status?;
    private _amountWithoutTariff?;
    private _accountId?;
    private _bankReference?;
    private _bankFullMessage?;
    private _destinationPaymentId?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Withdraw to deeply clone from
     */
    constructor(_value?: RecursivePartial<Withdraw.AsObject>);
    get guid(): string | undefined;
    set guid(value: string | undefined);
    get amount(): string | undefined;
    set amount(value: string | undefined);
    get destinationName(): string | undefined;
    set destinationName(value: string | undefined);
    get createAt(): string | undefined;
    set createAt(value: string | undefined);
    get doneAt(): string | undefined;
    set doneAt(value: string | undefined);
    get description(): string | undefined;
    set description(value: string | undefined);
    get status(): WithdrawStatus | undefined;
    set status(value: WithdrawStatus | undefined);
    get amountWithoutTariff(): string | undefined;
    set amountWithoutTariff(value: string | undefined);
    get accountId(): string | undefined;
    set accountId(value: string | undefined);
    get bankReference(): string | undefined;
    set bankReference(value: string | undefined);
    get bankFullMessage(): string | undefined;
    set bankFullMessage(value: string | undefined);
    get destinationPaymentId(): string | undefined;
    set destinationPaymentId(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): Uint8Array;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Withdraw.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): Withdraw.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): Withdraw.AsProtobufJSON;
}
export declare module Withdraw {
    /**
     * Standard JavaScript object representation for Withdraw
     */
    interface AsObject {
        guid?: string;
        amount?: string;
        destinationName?: string;
        createAt?: string;
        doneAt?: string;
        description?: string;
        status?: WithdrawStatus;
        amountWithoutTariff?: string;
        accountId?: string;
        bankReference?: string;
        bankFullMessage?: string;
        destinationPaymentId?: string;
    }
    /**
     * Protobuf JSON representation for Withdraw
     */
    interface AsProtobufJSON {
        guid?: string;
        amount?: string;
        destinationName?: string;
        createAt?: string;
        doneAt?: string;
        description?: string;
        status?: string;
        amountWithoutTariff?: string;
        accountId?: string;
        bankReference?: string;
        bankFullMessage?: string;
        destinationPaymentId?: string;
    }
}
