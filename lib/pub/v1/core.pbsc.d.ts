import { GrpcClientFactory, GrpcEvent, GrpcMetadata } from '@ngx-grpc/common';
import { GrpcHandler } from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './core.pb';
import * as i0 from "@angular/core";
/**
 * Service client implementation for proto.pub.v1.core.CoreService
 */
export declare class CoreServiceClient {
    private handler;
    private client;
    /**
     * Raw RPC implementation for each service client method.
     * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
     * Attention: these methods do not throw errors when non-zero status codes are received.
     */
    $raw: {
        /**
         * Bidirectional streaming: /proto.pub.v1.core.CoreService/EstablishStream
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ServerPacket>>
         */
        establishStream: (requestData: Observable<thisProto.ClientPacket>, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ServerPacket>>;
        /**
         * Server streaming: /proto.pub.v1.core.CoreService/EstablishServerSideStream
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ServerPacket>>
         */
        establishServerSideStream: (requestData: thisProto.EstablishServerSideStreamReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ServerPacket>>;
        /**
         * Unary call: /proto.pub.v1.core.CoreService/SendClientPacket
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.SendClientPacketRes>>
         */
        sendClientPacket: (requestData: thisProto.ClientPacket, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.SendClientPacketRes>>;
    };
    constructor(settings: any, clientFactory: GrpcClientFactory<any>, handler: GrpcHandler);
    /**
     * Bidirectional streaming @/proto.pub.v1.core.CoreService/EstablishStream
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ServerPacket>
     */
    establishStream(requestData: Observable<thisProto.ClientPacket>, requestMetadata?: GrpcMetadata): Observable<thisProto.ServerPacket>;
    /**
     * Server streaming @/proto.pub.v1.core.CoreService/EstablishServerSideStream
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ServerPacket>
     */
    establishServerSideStream(requestData: thisProto.EstablishServerSideStreamReq, requestMetadata?: GrpcMetadata): Observable<thisProto.ServerPacket>;
    /**
     * Unary call @/proto.pub.v1.core.CoreService/SendClientPacket
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.SendClientPacketRes>
     */
    sendClientPacket(requestData: thisProto.ClientPacket, requestMetadata?: GrpcMetadata): Observable<thisProto.SendClientPacketRes>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CoreServiceClient, [{ optional: true; }, null, null]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CoreServiceClient>;
}
