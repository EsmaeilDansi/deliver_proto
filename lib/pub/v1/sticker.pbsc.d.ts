import { GrpcClientFactory, GrpcEvent, GrpcMetadata } from '@ngx-grpc/common';
import { GrpcHandler } from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './sticker.pb';
import * as i0 from "@angular/core";
/**
 * Service client implementation for proto.pub.v1.sticker.StickerService
 */
export declare class StickerServiceClient {
    private handler;
    private client;
    /**
     * Raw RPC implementation for each service client method.
     * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
     * Attention: these methods do not throw errors when non-zero status codes are received.
     */
    $raw: {
        /**
         * Unary call: /proto.pub.v1.sticker.StickerService/GetTrendSets
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.GetTrendSetsRes>>
         */
        getTrendSets: (requestData: thisProto.GetTrendSetsReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.GetTrendSetsRes>>;
        /**
         * Unary call: /proto.pub.v1.sticker.StickerService/GetStickerSetByUUID
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.GetStickerSetByUUIDRes>>
         */
        getStickerSetByUUID: (requestData: thisProto.GetStickerSetByUUIDReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.GetStickerSetByUUIDRes>>;
        /**
         * Unary call: /proto.pub.v1.sticker.StickerService/GetStickerSetByID
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.GetStickerSetByIDRes>>
         */
        getStickerSetByID: (requestData: thisProto.GetStickerSetByIDReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.GetStickerSetByIDRes>>;
    };
    constructor(settings: any, clientFactory: GrpcClientFactory<any>, handler: GrpcHandler);
    /**
     * Unary call @/proto.pub.v1.sticker.StickerService/GetTrendSets
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetTrendSetsRes>
     */
    getTrendSets(requestData: thisProto.GetTrendSetsReq, requestMetadata?: GrpcMetadata): Observable<thisProto.GetTrendSetsRes>;
    /**
     * Unary call @/proto.pub.v1.sticker.StickerService/GetStickerSetByUUID
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetStickerSetByUUIDRes>
     */
    getStickerSetByUUID(requestData: thisProto.GetStickerSetByUUIDReq, requestMetadata?: GrpcMetadata): Observable<thisProto.GetStickerSetByUUIDRes>;
    /**
     * Unary call @/proto.pub.v1.sticker.StickerService/GetStickerSetByID
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetStickerSetByIDRes>
     */
    getStickerSetByID(requestData: thisProto.GetStickerSetByIDReq, requestMetadata?: GrpcMetadata): Observable<thisProto.GetStickerSetByIDRes>;
    static ɵfac: i0.ɵɵFactoryDeclaration<StickerServiceClient, [{ optional: true; }, null, null]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StickerServiceClient>;
}
