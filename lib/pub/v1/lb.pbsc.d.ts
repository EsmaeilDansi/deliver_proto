import { GrpcClientFactory, GrpcEvent, GrpcMetadata } from '@ngx-grpc/common';
import { GrpcHandler } from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './lb.pb';
import * as i0 from "@angular/core";
/**
 * Service client implementation for proto.pub.v1.lb.LB
 */
export declare class LBClient {
    private handler;
    private client;
    /**
     * Raw RPC implementation for each service client method.
     * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
     * Attention: these methods do not throw errors when non-zero status codes are received.
     */
    $raw: {
        /**
         * Unary call: /proto.pub.v1.lb.LB/GetInfo
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.GetInfoRes>>
         */
        getInfo: (requestData: thisProto.GetInfoReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.GetInfoRes>>;
    };
    constructor(settings: any, clientFactory: GrpcClientFactory<any>, handler: GrpcHandler);
    /**
     * Unary call @/proto.pub.v1.lb.LB/GetInfo
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetInfoRes>
     */
    getInfo(requestData: thisProto.GetInfoReq, requestMetadata?: GrpcMetadata): Observable<thisProto.GetInfoRes>;
    static ɵfac: i0.ɵɵFactoryDeclaration<LBClient, [{ optional: true; }, null, null]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LBClient>;
}
