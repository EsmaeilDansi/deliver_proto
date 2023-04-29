import { GrpcClientFactory, GrpcEvent, GrpcMetadata } from '@ngx-grpc/common';
import { GrpcHandler } from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './payment.pb';
import * as i0 from "@angular/core";
/**
 * Service client implementation for proto.pub.v1.payment.PaymentService
 */
export declare class PaymentServiceClient {
    private handler;
    private client;
    /**
     * Raw RPC implementation for each service client method.
     * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
     * Attention: these methods do not throw errors when non-zero status codes are received.
     */
    $raw: {
        /**
         * Unary call: /proto.pub.v1.payment.PaymentService/GetUserInfo
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.GetUserInfoRes>>
         */
        getUserInfo: (requestData: thisProto.GetUserInfoReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.GetUserInfoRes>>;
        /**
         * Unary call: /proto.pub.v1.payment.PaymentService/GetTransactionsCount
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.GetTransactionsCountRes>>
         */
        getTransactionsCount: (requestData: thisProto.GetTransactionsCountReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.GetTransactionsCountRes>>;
        /**
         * Unary call: /proto.pub.v1.payment.PaymentService/GetTransactions
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.GetTransactionsRes>>
         */
        getTransactions: (requestData: thisProto.GetTransactionsReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.GetTransactionsRes>>;
        /**
         * Unary call: /proto.pub.v1.payment.PaymentService/GetWithdrawsCount
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.GetWithdrawsCountRes>>
         */
        getWithdrawsCount: (requestData: thisProto.GetWithdrawsCountReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.GetWithdrawsCountRes>>;
        /**
         * Unary call: /proto.pub.v1.payment.PaymentService/GetWithdraws
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.GetWithdrawsRes>>
         */
        getWithdraws: (requestData: thisProto.GetWithdrawsReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.GetWithdrawsRes>>;
        /**
         * Unary call: /proto.pub.v1.payment.PaymentService/GetWithdrawTariff
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.GetWithdrawTariffRes>>
         */
        getWithdrawTariff: (requestData: thisProto.GetWithdrawTariffReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.GetWithdrawTariffRes>>;
        /**
         * Unary call: /proto.pub.v1.payment.PaymentService/GetPaymentInformation
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.GetPaymentInformationRes>>
         */
        getPaymentInformation: (requestData: thisProto.GetPaymentInformationReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.GetPaymentInformationRes>>;
        /**
         * Unary call: /proto.pub.v1.payment.PaymentService/GetWithdrawStatus
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.GetWithdrawStatusRes>>
         */
        getWithdrawStatus: (requestData: thisProto.GetWithdrawStatusReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.GetWithdrawStatusRes>>;
        /**
         * Unary call: /proto.pub.v1.payment.PaymentService/CreatePayment
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.CreatePaymentRes>>
         */
        createPayment: (requestData: thisProto.CreatePaymentReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.CreatePaymentRes>>;
        /**
         * Unary call: /proto.pub.v1.payment.PaymentService/Pay
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.PayRes>>
         */
        pay: (requestData: thisProto.PayReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.PayRes>>;
        /**
         * Unary call: /proto.pub.v1.payment.PaymentService/PayConfirm
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.PayConfirmRes>>
         */
        payConfirm: (requestData: thisProto.PayConfirmReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.PayConfirmRes>>;
        /**
         * Unary call: /proto.pub.v1.payment.PaymentService/Transfer
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.TransferRes>>
         */
        transfer: (requestData: thisProto.TransferReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.TransferRes>>;
        /**
         * Unary call: /proto.pub.v1.payment.PaymentService/Withdraw
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.WithdrawRes>>
         */
        withdraw: (requestData: thisProto.WithdrawReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.WithdrawRes>>;
    };
    constructor(settings: any, clientFactory: GrpcClientFactory<any>, handler: GrpcHandler);
    /**
     * Unary call @/proto.pub.v1.payment.PaymentService/GetUserInfo
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetUserInfoRes>
     */
    getUserInfo(requestData: thisProto.GetUserInfoReq, requestMetadata?: GrpcMetadata): Observable<thisProto.GetUserInfoRes>;
    /**
     * Unary call @/proto.pub.v1.payment.PaymentService/GetTransactionsCount
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetTransactionsCountRes>
     */
    getTransactionsCount(requestData: thisProto.GetTransactionsCountReq, requestMetadata?: GrpcMetadata): Observable<thisProto.GetTransactionsCountRes>;
    /**
     * Unary call @/proto.pub.v1.payment.PaymentService/GetTransactions
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetTransactionsRes>
     */
    getTransactions(requestData: thisProto.GetTransactionsReq, requestMetadata?: GrpcMetadata): Observable<thisProto.GetTransactionsRes>;
    /**
     * Unary call @/proto.pub.v1.payment.PaymentService/GetWithdrawsCount
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetWithdrawsCountRes>
     */
    getWithdrawsCount(requestData: thisProto.GetWithdrawsCountReq, requestMetadata?: GrpcMetadata): Observable<thisProto.GetWithdrawsCountRes>;
    /**
     * Unary call @/proto.pub.v1.payment.PaymentService/GetWithdraws
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetWithdrawsRes>
     */
    getWithdraws(requestData: thisProto.GetWithdrawsReq, requestMetadata?: GrpcMetadata): Observable<thisProto.GetWithdrawsRes>;
    /**
     * Unary call @/proto.pub.v1.payment.PaymentService/GetWithdrawTariff
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetWithdrawTariffRes>
     */
    getWithdrawTariff(requestData: thisProto.GetWithdrawTariffReq, requestMetadata?: GrpcMetadata): Observable<thisProto.GetWithdrawTariffRes>;
    /**
     * Unary call @/proto.pub.v1.payment.PaymentService/GetPaymentInformation
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetPaymentInformationRes>
     */
    getPaymentInformation(requestData: thisProto.GetPaymentInformationReq, requestMetadata?: GrpcMetadata): Observable<thisProto.GetPaymentInformationRes>;
    /**
     * Unary call @/proto.pub.v1.payment.PaymentService/GetWithdrawStatus
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetWithdrawStatusRes>
     */
    getWithdrawStatus(requestData: thisProto.GetWithdrawStatusReq, requestMetadata?: GrpcMetadata): Observable<thisProto.GetWithdrawStatusRes>;
    /**
     * Unary call @/proto.pub.v1.payment.PaymentService/CreatePayment
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.CreatePaymentRes>
     */
    createPayment(requestData: thisProto.CreatePaymentReq, requestMetadata?: GrpcMetadata): Observable<thisProto.CreatePaymentRes>;
    /**
     * Unary call @/proto.pub.v1.payment.PaymentService/Pay
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.PayRes>
     */
    pay(requestData: thisProto.PayReq, requestMetadata?: GrpcMetadata): Observable<thisProto.PayRes>;
    /**
     * Unary call @/proto.pub.v1.payment.PaymentService/PayConfirm
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.PayConfirmRes>
     */
    payConfirm(requestData: thisProto.PayConfirmReq, requestMetadata?: GrpcMetadata): Observable<thisProto.PayConfirmRes>;
    /**
     * Unary call @/proto.pub.v1.payment.PaymentService/Transfer
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.TransferRes>
     */
    transfer(requestData: thisProto.TransferReq, requestMetadata?: GrpcMetadata): Observable<thisProto.TransferRes>;
    /**
     * Unary call @/proto.pub.v1.payment.PaymentService/Withdraw
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.WithdrawRes>
     */
    withdraw(requestData: thisProto.WithdrawReq, requestMetadata?: GrpcMetadata): Observable<thisProto.WithdrawRes>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PaymentServiceClient, [{ optional: true; }, null, null]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PaymentServiceClient>;
}
