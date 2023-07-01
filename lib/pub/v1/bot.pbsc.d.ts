import { GrpcClientFactory, GrpcEvent, GrpcMetadata } from '@ngx-grpc/common';
import { GrpcHandler } from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './bot.pb';
import * as i0 from "@angular/core";
/**
 * Service client implementation for proto.pub.v1.bot.BotService
 */
export declare class BotServiceClient {
    private handler;
    private client;
    /**
     * Raw RPC implementation for each service client method.
     * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
     * Attention: these methods do not throw errors when non-zero status codes are received.
     */
    $raw: {
        /**
         * Unary call: /proto.pub.v1.bot.BotService/GetInfo
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.GetInfoRes>>
         */
        getInfo: (requestData: thisProto.GetInfoReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.GetInfoRes>>;
        /**
         * Unary call: /proto.pub.v1.bot.BotService/AddAvatar
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.AddAvatarRes>>
         */
        addAvatar: (requestData: thisProto.AddAvatarReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.AddAvatarRes>>;
        /**
         * Unary call: /proto.pub.v1.bot.BotService/RemoveAvatar
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.RemoveAvatarRes>>
         */
        removeAvatar: (requestData: thisProto.RemoveAvatarReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.RemoveAvatarRes>>;
        /**
         * Unary call: /proto.pub.v1.bot.BotService/InlineQuery
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.InlineQueryRes>>
         */
        inlineQuery: (requestData: thisProto.InlineQueryReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.InlineQueryRes>>;
        /**
         * Unary call: /proto.pub.v1.bot.BotService/FormQuery
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.FormQueryRes>>
         */
        formQuery: (requestData: thisProto.FormQueryReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.FormQueryRes>>;
        /**
         * Unary call: /proto.pub.v1.bot.BotService/CallbackQuery
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.CallbackQueryRes>>
         */
        callbackQuery: (requestData: thisProto.CallbackQueryReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.CallbackQueryRes>>;
    };
    constructor(settings: any, clientFactory: GrpcClientFactory<any>, handler: GrpcHandler);
    /**
     * Unary call @/proto.pub.v1.bot.BotService/GetInfo
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetInfoRes>
     */
    getInfo(requestData: thisProto.GetInfoReq, requestMetadata?: GrpcMetadata): Observable<thisProto.GetInfoRes>;
    /**
     * Unary call @/proto.pub.v1.bot.BotService/AddAvatar
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.AddAvatarRes>
     */
    addAvatar(requestData: thisProto.AddAvatarReq, requestMetadata?: GrpcMetadata): Observable<thisProto.AddAvatarRes>;
    /**
     * Unary call @/proto.pub.v1.bot.BotService/RemoveAvatar
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.RemoveAvatarRes>
     */
    removeAvatar(requestData: thisProto.RemoveAvatarReq, requestMetadata?: GrpcMetadata): Observable<thisProto.RemoveAvatarRes>;
    /**
     * Unary call @/proto.pub.v1.bot.BotService/InlineQuery
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.InlineQueryRes>
     */
    inlineQuery(requestData: thisProto.InlineQueryReq, requestMetadata?: GrpcMetadata): Observable<thisProto.InlineQueryRes>;
    /**
     * Unary call @/proto.pub.v1.bot.BotService/FormQuery
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.FormQueryRes>
     */
    formQuery(requestData: thisProto.FormQueryReq, requestMetadata?: GrpcMetadata): Observable<thisProto.FormQueryRes>;
    /**
     * Unary call @/proto.pub.v1.bot.BotService/CallbackQuery
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.CallbackQueryRes>
     */
    callbackQuery(requestData: thisProto.CallbackQueryReq, requestMetadata?: GrpcMetadata): Observable<thisProto.CallbackQueryRes>;
    static ɵfac: i0.ɵɵFactoryDeclaration<BotServiceClient, [{ optional: true; }, null, null]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<BotServiceClient>;
}
