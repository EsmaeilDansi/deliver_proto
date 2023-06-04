import { GrpcClientFactory, GrpcEvent, GrpcMetadata } from '@ngx-grpc/common';
import { GrpcHandler } from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './broadcast.pb';
import * as i0 from "@angular/core";
/**
 * Service client implementation for proto.pub.v1.broadcast.BroadcastService
 */
export declare class BroadcastServiceClient {
    private handler;
    private client;
    /**
     * Raw RPC implementation for each service client method.
     * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
     * Attention: these methods do not throw errors when non-zero status codes are received.
     */
    $raw: {
        /**
         * Unary call: /proto.pub.v1.broadcast.BroadcastService/CreateBroadcast
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.CreateBroadcastRes>>
         */
        createBroadcast: (requestData: thisProto.CreateBroadcastReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.CreateBroadcastRes>>;
        /**
         * Unary call: /proto.pub.v1.broadcast.BroadcastService/GetBroadcast
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.GetBroadcastRes>>
         */
        getBroadcast: (requestData: thisProto.GetBroadcastReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.GetBroadcastRes>>;
        /**
         * Unary call: /proto.pub.v1.broadcast.BroadcastService/ModifyBroadcast
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ModifyBroadcastRes>>
         */
        modifyBroadcast: (requestData: thisProto.ModifyBroadcastReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ModifyBroadcastRes>>;
        /**
         * Unary call: /proto.pub.v1.broadcast.BroadcastService/RemoveBroadcast
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.RemoveBroadcastRes>>
         */
        removeBroadcast: (requestData: thisProto.RemoveBroadcastReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.RemoveBroadcastRes>>;
        /**
         * Unary call: /proto.pub.v1.broadcast.BroadcastService/AddMembers
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.AddMembersRes>>
         */
        addMembers: (requestData: thisProto.AddMembersReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.AddMembersRes>>;
        /**
         * Unary call: /proto.pub.v1.broadcast.BroadcastService/KickMembers
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.KickMembersRes>>
         */
        kickMembers: (requestData: thisProto.KickMembersReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.KickMembersRes>>;
        /**
         * Unary call: /proto.pub.v1.broadcast.BroadcastService/GetMembers
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.GetMembersRes>>
         */
        getMembers: (requestData: thisProto.GetMembersReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.GetMembersRes>>;
    };
    constructor(settings: any, clientFactory: GrpcClientFactory<any>, handler: GrpcHandler);
    /**
     * Unary call @/proto.pub.v1.broadcast.BroadcastService/CreateBroadcast
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.CreateBroadcastRes>
     */
    createBroadcast(requestData: thisProto.CreateBroadcastReq, requestMetadata?: GrpcMetadata): Observable<thisProto.CreateBroadcastRes>;
    /**
     * Unary call @/proto.pub.v1.broadcast.BroadcastService/GetBroadcast
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetBroadcastRes>
     */
    getBroadcast(requestData: thisProto.GetBroadcastReq, requestMetadata?: GrpcMetadata): Observable<thisProto.GetBroadcastRes>;
    /**
     * Unary call @/proto.pub.v1.broadcast.BroadcastService/ModifyBroadcast
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ModifyBroadcastRes>
     */
    modifyBroadcast(requestData: thisProto.ModifyBroadcastReq, requestMetadata?: GrpcMetadata): Observable<thisProto.ModifyBroadcastRes>;
    /**
     * Unary call @/proto.pub.v1.broadcast.BroadcastService/RemoveBroadcast
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.RemoveBroadcastRes>
     */
    removeBroadcast(requestData: thisProto.RemoveBroadcastReq, requestMetadata?: GrpcMetadata): Observable<thisProto.RemoveBroadcastRes>;
    /**
     * Unary call @/proto.pub.v1.broadcast.BroadcastService/AddMembers
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.AddMembersRes>
     */
    addMembers(requestData: thisProto.AddMembersReq, requestMetadata?: GrpcMetadata): Observable<thisProto.AddMembersRes>;
    /**
     * Unary call @/proto.pub.v1.broadcast.BroadcastService/KickMembers
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.KickMembersRes>
     */
    kickMembers(requestData: thisProto.KickMembersReq, requestMetadata?: GrpcMetadata): Observable<thisProto.KickMembersRes>;
    /**
     * Unary call @/proto.pub.v1.broadcast.BroadcastService/GetMembers
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetMembersRes>
     */
    getMembers(requestData: thisProto.GetMembersReq, requestMetadata?: GrpcMetadata): Observable<thisProto.GetMembersRes>;
    static ɵfac: i0.ɵɵFactoryDeclaration<BroadcastServiceClient, [{ optional: true; }, null, null]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<BroadcastServiceClient>;
}
