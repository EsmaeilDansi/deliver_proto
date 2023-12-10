import { GrpcClientFactory, GrpcEvent, GrpcMetadata } from '@ngx-grpc/common';
import { GrpcHandler } from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './avatar.pb';
import * as i0 from "@angular/core";
/**
 * Service client implementation for proto.pub.v1.avatar.AvatarService
 */
export declare class AvatarServiceClient {
    private handler;
    private client;
    /**
     * Raw RPC implementation for each service client method.
     * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
     * Attention: these methods do not throw errors when non-zero status codes are received.
     */
    $raw: {
        /**
         * Unary call: /proto.pub.v1.avatar.AvatarService/GetAvatar
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.GetAvatarRes>>
         */
        getAvatar: (requestData: thisProto.GetAvatarReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.GetAvatarRes>>;
    };
    constructor(settings: any, clientFactory: GrpcClientFactory<any>, handler: GrpcHandler);
    /**
     * Unary call @/proto.pub.v1.avatar.AvatarService/GetAvatar
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetAvatarRes>
     */
    getAvatar(requestData: thisProto.GetAvatarReq, requestMetadata?: GrpcMetadata): Observable<thisProto.GetAvatarRes>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AvatarServiceClient, [{ optional: true; }, null, null]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AvatarServiceClient>;
}
