import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as protoPubV1Models001 from '../../../pub/v1/models/uid.pb';
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
    PAYMENT_DONE = 1
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
    private _status?;
    private _amount?;
    private _issuer?;
    private _description?;
    private _expireAt?;
    private _transaction?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Payment to deeply clone from
     */
    constructor(_value?: RecursivePartial<Payment.AsObject>);
    get guid(): string | undefined;
    set guid(value: string | undefined);
    get status(): PaymentStatus | undefined;
    set status(value: PaymentStatus | undefined);
    get amount(): string | undefined;
    set amount(value: string | undefined);
    get issuer(): protoPubV1Models001.Uid | undefined;
    set issuer(value: protoPubV1Models001.Uid | undefined);
    get description(): string | undefined;
    set description(value: string | undefined);
    get expireAt(): string | undefined;
    set expireAt(value: string | undefined);
    get transaction(): Transaction | undefined;
    set transaction(value: Transaction | undefined);
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
        status?: PaymentStatus;
        amount?: string;
        issuer?: protoPubV1Models001.Uid.AsObject;
        description?: string;
        expireAt?: string;
        transaction?: Transaction.AsObject;
    }
    /**
     * Protobuf JSON representation for Payment
     */
    interface AsProtobufJSON {
        guid?: string;
        status?: string;
        amount?: string;
        issuer?: protoPubV1Models001.Uid.AsProtobufJSON | null;
        description?: string;
        expireAt?: string;
        transaction?: Transaction.AsProtobufJSON | null;
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
