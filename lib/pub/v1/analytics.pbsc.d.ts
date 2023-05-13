import { GrpcClientFactory, GrpcEvent, GrpcMetadata } from '@ngx-grpc/common';
import { GrpcHandler } from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './analytics.pb';
import * as i0 from "@angular/core";
/**
 * Service client implementation for proto.pub.v1.analytics.Analytics
 */
export declare class AnalyticsClient {
    private handler;
    private client;
    /**
     * Raw RPC implementation for each service client method.
     * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
     * Attention: these methods do not throw errors when non-zero status codes are received.
     */
    $raw: {
        /**
         * Unary call: /proto.pub.v1.analytics.Analytics/SendFeedback
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.SendFeedbackRes>>
         */
        sendFeedback: (requestData: thisProto.SendFeedbackReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.SendFeedbackRes>>;
        /**
         * Unary call: /proto.pub.v1.analytics.Analytics/ReportCrash
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ReportCrashRes>>
         */
        reportCrash: (requestData: thisProto.ReportCrashReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ReportCrashRes>>;
        /**
         * Unary call: /proto.pub.v1.analytics.Analytics/ReportEvent
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ReportEventRes>>
         */
        reportEvent: (requestData: thisProto.ReportEventReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ReportEventRes>>;
    };
    constructor(settings: any, clientFactory: GrpcClientFactory<any>, handler: GrpcHandler);
    /**
     * Unary call @/proto.pub.v1.analytics.Analytics/SendFeedback
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.SendFeedbackRes>
     */
    sendFeedback(requestData: thisProto.SendFeedbackReq, requestMetadata?: GrpcMetadata): Observable<thisProto.SendFeedbackRes>;
    /**
     * Unary call @/proto.pub.v1.analytics.Analytics/ReportCrash
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ReportCrashRes>
     */
    reportCrash(requestData: thisProto.ReportCrashReq, requestMetadata?: GrpcMetadata): Observable<thisProto.ReportCrashRes>;
    /**
     * Unary call @/proto.pub.v1.analytics.Analytics/ReportEvent
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ReportEventRes>
     */
    reportEvent(requestData: thisProto.ReportEventReq, requestMetadata?: GrpcMetadata): Observable<thisProto.ReportEventRes>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AnalyticsClient, [{ optional: true; }, null, null]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AnalyticsClient>;
}
