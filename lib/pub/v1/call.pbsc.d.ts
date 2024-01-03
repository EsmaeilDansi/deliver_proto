import { GrpcClientFactory, GrpcEvent, GrpcMetadata } from '@ngx-grpc/common';
import { GrpcHandler } from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './call.pb';
import * as i0 from "@angular/core";
/**
 * Service client implementation for proto.pub.v1.call.CallService
 */
export declare class CallServiceClient {
    private handler;
    private client;
    /**
     * Raw RPC implementation for each service client method.
     * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
     * Attention: these methods do not throw errors when non-zero status codes are received.
     */
    $raw: {
        /**
         * Unary call: /proto.pub.v1.call.CallService/JoinCall
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.JoinCallRes>>
         */
        joinCall: (requestData: thisProto.JoinCallReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.JoinCallRes>>;
        /**
         * Unary call: /proto.pub.v1.call.CallService/EndCall
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.EndCallRes>>
         */
        endCall: (requestData: thisProto.EndCallReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.EndCallRes>>;
    };
    constructor(settings: any, clientFactory: GrpcClientFactory<any>, handler: GrpcHandler);
    /**
     * Unary call @/proto.pub.v1.call.CallService/JoinCall
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.JoinCallRes>
     */
    joinCall(requestData: thisProto.JoinCallReq, requestMetadata?: GrpcMetadata): Observable<thisProto.JoinCallRes>;
    /**
     * Unary call @/proto.pub.v1.call.CallService/EndCall
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.EndCallRes>
     */
    endCall(requestData: thisProto.EndCallReq, requestMetadata?: GrpcMetadata): Observable<thisProto.EndCallRes>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CallServiceClient, [{ optional: true; }, null, null]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CallServiceClient>;
}
