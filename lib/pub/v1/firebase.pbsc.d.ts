import { GrpcClientFactory, GrpcEvent, GrpcMetadata } from '@ngx-grpc/common';
import { GrpcHandler } from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './firebase.pb';
import * as i0 from "@angular/core";
/**
 * Service client implementation for proto.pub.v1.firebase.FirebaseService
 */
export declare class FirebaseServiceClient {
    private handler;
    private client;
    /**
     * Raw RPC implementation for each service client method.
     * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
     * Attention: these methods do not throw errors when non-zero status codes are received.
     */
    $raw: {
        /**
         * Unary call: /proto.pub.v1.firebase.FirebaseService/Registration
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.RegistrationRes>>
         */
        registration: (requestData: thisProto.RegistrationReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.RegistrationRes>>;
    };
    constructor(settings: any, clientFactory: GrpcClientFactory<any>, handler: GrpcHandler);
    /**
     * Unary call @/proto.pub.v1.firebase.FirebaseService/Registration
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.RegistrationRes>
     */
    registration(requestData: thisProto.RegistrationReq, requestMetadata?: GrpcMetadata): Observable<thisProto.RegistrationRes>;
    static ɵfac: i0.ɵɵFactoryDeclaration<FirebaseServiceClient, [{ optional: true; }, null, null]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FirebaseServiceClient>;
}
