import { GrpcClientFactory, GrpcEvent, GrpcMetadata } from '@ngx-grpc/common';
import { GrpcHandler } from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './service-availability.pb';
import * as i0 from "@angular/core";
/**
 * Service client implementation for proto.pub.v1.service_availability.ServiceAvailability
 */
export declare class ServiceAvailabilityClient {
    private handler;
    private client;
    /**
     * Raw RPC implementation for each service client method.
     * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
     * Attention: these methods do not throw errors when non-zero status codes are received.
     */
    $raw: {
        /**
         * Unary call: /proto.pub.v1.service_availability.ServiceAvailability/GetQuerySettings
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.GetQuerySettingsRes>>
         */
        getQuerySettings: (requestData: thisProto.GetQuerySettingsReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.GetQuerySettingsRes>>;
        /**
         * Unary call: /proto.pub.v1.service_availability.ServiceAvailability/GetServiceAvailability
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.GetServiceAvailabilityRes>>
         */
        getServiceAvailability: (requestData: thisProto.GetServiceAvailabilityReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.GetServiceAvailabilityRes>>;
    };
    constructor(settings: any, clientFactory: GrpcClientFactory<any>, handler: GrpcHandler);
    /**
     * Unary call @/proto.pub.v1.service_availability.ServiceAvailability/GetQuerySettings
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetQuerySettingsRes>
     */
    getQuerySettings(requestData: thisProto.GetQuerySettingsReq, requestMetadata?: GrpcMetadata): Observable<thisProto.GetQuerySettingsRes>;
    /**
     * Unary call @/proto.pub.v1.service_availability.ServiceAvailability/GetServiceAvailability
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetServiceAvailabilityRes>
     */
    getServiceAvailability(requestData: thisProto.GetServiceAvailabilityReq, requestMetadata?: GrpcMetadata): Observable<thisProto.GetServiceAvailabilityRes>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ServiceAvailabilityClient, [{ optional: true; }, null, null]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ServiceAvailabilityClient>;
}
