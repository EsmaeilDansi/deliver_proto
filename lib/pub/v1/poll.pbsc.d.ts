import { GrpcClientFactory, GrpcEvent, GrpcMetadata } from '@ngx-grpc/common';
import { GrpcHandler } from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './poll.pb';
import * as i0 from "@angular/core";
/**
 * Service client implementation for proto.pub.v1.live_location.PollService
 */
export declare class PollServiceClient {
    private handler;
    private client;
    /**
     * Raw RPC implementation for each service client method.
     * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
     * Attention: these methods do not throw errors when non-zero status codes are received.
     */
    $raw: {
        /**
         * Unary call: /proto.pub.v1.live_location.PollService/CreatePoll
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.CreatePollRes>>
         */
        createPoll: (requestData: thisProto.CreatePollReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.CreatePollRes>>;
        /**
         * Unary call: /proto.pub.v1.live_location.PollService/DoPoll
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.DoPollRes>>
         */
        doPoll: (requestData: thisProto.DoPollReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.DoPollRes>>;
        /**
         * Unary call: /proto.pub.v1.live_location.PollService/GetMe
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.GetMeRes>>
         */
        getMe: (requestData: thisProto.GetMeReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.GetMeRes>>;
        /**
         * Unary call: /proto.pub.v1.live_location.PollService/GetOverallResult
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.GetOverallResultRes>>
         */
        getOverallResult: (requestData: thisProto.GetOverallResultReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.GetOverallResultRes>>;
        /**
         * Unary call: /proto.pub.v1.live_location.PollService/GetUsersSelectedOptionResult
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.GetUsersSelectedOptionResultRes>>
         */
        getUsersSelectedOptionResult: (requestData: thisProto.GetUsersSelectedOptionResultReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.GetUsersSelectedOptionResultRes>>;
        /**
         * Unary call: /proto.pub.v1.live_location.PollService/EditExpireTime
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.EditPollExpireTimeRes>>
         */
        editExpireTime: (requestData: thisProto.EditPollExpireTimeReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.EditPollExpireTimeRes>>;
    };
    constructor(settings: any, clientFactory: GrpcClientFactory<any>, handler: GrpcHandler);
    /**
     * Unary call @/proto.pub.v1.live_location.PollService/CreatePoll
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.CreatePollRes>
     */
    createPoll(requestData: thisProto.CreatePollReq, requestMetadata?: GrpcMetadata): Observable<thisProto.CreatePollRes>;
    /**
     * Unary call @/proto.pub.v1.live_location.PollService/DoPoll
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.DoPollRes>
     */
    doPoll(requestData: thisProto.DoPollReq, requestMetadata?: GrpcMetadata): Observable<thisProto.DoPollRes>;
    /**
     * Unary call @/proto.pub.v1.live_location.PollService/GetMe
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetMeRes>
     */
    getMe(requestData: thisProto.GetMeReq, requestMetadata?: GrpcMetadata): Observable<thisProto.GetMeRes>;
    /**
     * Unary call @/proto.pub.v1.live_location.PollService/GetOverallResult
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetOverallResultRes>
     */
    getOverallResult(requestData: thisProto.GetOverallResultReq, requestMetadata?: GrpcMetadata): Observable<thisProto.GetOverallResultRes>;
    /**
     * Unary call @/proto.pub.v1.live_location.PollService/GetUsersSelectedOptionResult
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetUsersSelectedOptionResultRes>
     */
    getUsersSelectedOptionResult(requestData: thisProto.GetUsersSelectedOptionResultReq, requestMetadata?: GrpcMetadata): Observable<thisProto.GetUsersSelectedOptionResultRes>;
    /**
     * Unary call @/proto.pub.v1.live_location.PollService/EditExpireTime
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.EditPollExpireTimeRes>
     */
    editExpireTime(requestData: thisProto.EditPollExpireTimeReq, requestMetadata?: GrpcMetadata): Observable<thisProto.EditPollExpireTimeRes>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PollServiceClient, [{ optional: true; }, null, null]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PollServiceClient>;
}
