import { GrpcClientFactory, GrpcEvent, GrpcMetadata } from '@ngx-grpc/common';
import { GrpcHandler } from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './live-location.pb';
import * as i0 from "@angular/core";
/**
 * Service client implementation for proto.pub.v1.live_location.LiveLocationService
 */
export declare class LiveLocationServiceClient {
    private handler;
    private client;
    /**
     * Raw RPC implementation for each service client method.
     * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
     * Attention: these methods do not throw errors when non-zero status codes are received.
     */
    $raw: {
        /**
         * Unary call: /proto.pub.v1.live_location.LiveLocationService/CreateLiveLocation
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.CreateLiveLocationRes>>
         */
        createLiveLocation: (requestData: thisProto.CreateLiveLocationReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.CreateLiveLocationRes>>;
        /**
         * Unary call: /proto.pub.v1.live_location.LiveLocationService/UpdateLocation
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.UpdateLocationRes>>
         */
        updateLocation: (requestData: thisProto.UpdateLocationReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.UpdateLocationRes>>;
        /**
         * Unary call: /proto.pub.v1.live_location.LiveLocationService/ShouldSendLiveLocation
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ShouldSendLiveLocationRes>>
         */
        shouldSendLiveLocation: (requestData: thisProto.ShouldSendLiveLocationReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ShouldSendLiveLocationRes>>;
        /**
         * Unary call: /proto.pub.v1.live_location.LiveLocationService/GetLastUpdatedLiveLocation
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.GetLastUpdatedLiveLocationRes>>
         */
        getLastUpdatedLiveLocation: (requestData: thisProto.GetLastUpdatedLiveLocationReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.GetLastUpdatedLiveLocationRes>>;
    };
    constructor(settings: any, clientFactory: GrpcClientFactory<any>, handler: GrpcHandler);
    /**
     * Unary call @/proto.pub.v1.live_location.LiveLocationService/CreateLiveLocation
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.CreateLiveLocationRes>
     */
    createLiveLocation(requestData: thisProto.CreateLiveLocationReq, requestMetadata?: GrpcMetadata): Observable<thisProto.CreateLiveLocationRes>;
    /**
     * Unary call @/proto.pub.v1.live_location.LiveLocationService/UpdateLocation
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.UpdateLocationRes>
     */
    updateLocation(requestData: thisProto.UpdateLocationReq, requestMetadata?: GrpcMetadata): Observable<thisProto.UpdateLocationRes>;
    /**
     * Unary call @/proto.pub.v1.live_location.LiveLocationService/ShouldSendLiveLocation
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ShouldSendLiveLocationRes>
     */
    shouldSendLiveLocation(requestData: thisProto.ShouldSendLiveLocationReq, requestMetadata?: GrpcMetadata): Observable<thisProto.ShouldSendLiveLocationRes>;
    /**
     * Unary call @/proto.pub.v1.live_location.LiveLocationService/GetLastUpdatedLiveLocation
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetLastUpdatedLiveLocationRes>
     */
    getLastUpdatedLiveLocation(requestData: thisProto.GetLastUpdatedLiveLocationReq, requestMetadata?: GrpcMetadata): Observable<thisProto.GetLastUpdatedLiveLocationRes>;
    static ɵfac: i0.ɵɵFactoryDeclaration<LiveLocationServiceClient, [{ optional: true; }, null, null]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LiveLocationServiceClient>;
}
