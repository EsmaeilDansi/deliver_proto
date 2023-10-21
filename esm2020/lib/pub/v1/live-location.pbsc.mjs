/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { Inject, Injectable, Optional } from '@angular/core';
import { GrpcCallType, GrpcMetadata } from '@ngx-grpc/common';
import { GRPC_CLIENT_FACTORY, takeMessages, throwStatusErrors } from '@ngx-grpc/core';
import * as thisProto from './live-location.pb';
import { GRPC_LIVE_LOCATION_SERVICE_CLIENT_SETTINGS } from './live-location.pbconf';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-grpc/core";
/**
 * Service client implementation for proto.pub.v1.live_location.LiveLocationService
 */
export class LiveLocationServiceClient {
    constructor(settings, clientFactory, handler) {
        this.handler = handler;
        /**
         * Raw RPC implementation for each service client method.
         * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
         * Attention: these methods do not throw errors when non-zero status codes are received.
         */
        this.$raw = {
            /**
             * Unary call: /proto.pub.v1.live_location.LiveLocationService/CreateLiveLocation
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.CreateLiveLocationRes>>
             */
            createLiveLocation: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.live_location.LiveLocationService/CreateLiveLocation',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.CreateLiveLocationReq,
                    responseClass: thisProto.CreateLiveLocationRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.live_location.LiveLocationService/UpdateLocation
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.UpdateLocationRes>>
             */
            updateLocation: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.live_location.LiveLocationService/UpdateLocation',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.UpdateLocationReq,
                    responseClass: thisProto.UpdateLocationRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.live_location.LiveLocationService/ShouldSendLiveLocation
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.ShouldSendLiveLocationRes>>
             */
            shouldSendLiveLocation: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.live_location.LiveLocationService/ShouldSendLiveLocation',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.ShouldSendLiveLocationReq,
                    responseClass: thisProto.ShouldSendLiveLocationRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.live_location.LiveLocationService/GetLastUpdatedLiveLocation
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.GetLastUpdatedLiveLocationRes>>
             */
            getLastUpdatedLiveLocation: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.live_location.LiveLocationService/GetLastUpdatedLiveLocation',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.GetLastUpdatedLiveLocationReq,
                    responseClass: thisProto.GetLastUpdatedLiveLocationRes
                });
            }
        };
        this.client = clientFactory.createClient('proto.pub.v1.live_location.LiveLocationService', settings);
    }
    /**
     * Unary call @/proto.pub.v1.live_location.LiveLocationService/CreateLiveLocation
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.CreateLiveLocationRes>
     */
    createLiveLocation(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .createLiveLocation(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.live_location.LiveLocationService/UpdateLocation
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.UpdateLocationRes>
     */
    updateLocation(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .updateLocation(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.live_location.LiveLocationService/ShouldSendLiveLocation
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ShouldSendLiveLocationRes>
     */
    shouldSendLiveLocation(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .shouldSendLiveLocation(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.live_location.LiveLocationService/GetLastUpdatedLiveLocation
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetLastUpdatedLiveLocationRes>
     */
    getLastUpdatedLiveLocation(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .getLastUpdatedLiveLocation(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
}
LiveLocationServiceClient.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: LiveLocationServiceClient, deps: [{ token: GRPC_LIVE_LOCATION_SERVICE_CLIENT_SETTINGS, optional: true }, { token: GRPC_CLIENT_FACTORY }, { token: i1.GrpcHandler }], target: i0.ɵɵFactoryTarget.Injectable });
LiveLocationServiceClient.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: LiveLocationServiceClient, providedIn: 'any' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: LiveLocationServiceClient, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'any' }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [GRPC_LIVE_LOCATION_SERVICE_CLIENT_SETTINGS]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [GRPC_CLIENT_FACTORY]
                }] }, { type: i1.GrpcHandler }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGl2ZS1sb2NhdGlvbi5wYnNjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcHJvdG8vc3JjL2xpYi9wdWIvdjEvbGl2ZS1sb2NhdGlvbi5wYnNjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsY0FBYztBQUNkLEVBQUU7QUFDRiwyQkFBMkI7QUFDM0IsOENBQThDO0FBQzlDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQ0wsWUFBWSxFQUlaLFlBQVksRUFDYixNQUFNLGtCQUFrQixDQUFDO0FBQzFCLE9BQU8sRUFDTCxtQkFBbUIsRUFFbkIsWUFBWSxFQUNaLGlCQUFpQixFQUNsQixNQUFNLGdCQUFnQixDQUFDO0FBRXhCLE9BQU8sS0FBSyxTQUFTLE1BQU0sb0JBQW9CLENBQUM7QUFJaEQsT0FBTyxFQUFFLDBDQUEwQyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7OztBQUNwRjs7R0FFRztBQUVILE1BQU0sT0FBTyx5QkFBeUI7SUFrR3BDLFlBR0UsUUFBYSxFQUNnQixhQUFxQyxFQUMxRCxPQUFvQjtRQUFwQixZQUFPLEdBQVAsT0FBTyxDQUFhO1FBcEc5Qjs7OztXQUlHO1FBQ0gsU0FBSSxHQUFHO1lBQ0w7Ozs7OztlQU1HO1lBQ0gsa0JBQWtCLEVBQUUsQ0FDbEIsV0FBNEMsRUFDNUMsZUFBZSxHQUFHLElBQUksWUFBWSxFQUFFLEVBQ29CLEVBQUU7Z0JBQzFELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7b0JBQ3pCLElBQUksRUFBRSxZQUFZLENBQUMsS0FBSztvQkFDeEIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO29CQUNuQixJQUFJLEVBQ0Ysb0VBQW9FO29CQUN0RSxXQUFXO29CQUNYLGVBQWU7b0JBQ2YsWUFBWSxFQUFFLFNBQVMsQ0FB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LElBQUksWUFBWSxFQUFFO1FBRXBDLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYiwwQkFBMEIsQ0FBQyxXQUFXLEVBQUUsZUFBZSxDQUFDO2FBQ3hELElBQUksQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7c0hBN0tVLHlCQUF5QixrQkFvRzFCLDBDQUEwQyw2QkFFMUMsbUJBQW1COzBIQXRHbEIseUJBQXlCLGNBRFosS0FBSzsyRkFDbEIseUJBQXlCO2tCQURyQyxVQUFVO21CQUFDLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRTs7MEJBb0c1QixRQUFROzswQkFDUixNQUFNOzJCQUFDLDBDQUEwQzs7MEJBRWpELE1BQU07MkJBQUMsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGUgKi9cbi8qIGVzbGludC1kaXNhYmxlICovXG4vLyBAdHMtbm9jaGVja1xuLy9cbi8vIFRISVMgSVMgQSBHRU5FUkFURUQgRklMRVxuLy8gRE8gTk9UIE1PRElGWSBJVCEgWU9VUiBDSEFOR0VTIFdJTEwgQkUgTE9TVFxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgR3JwY0NhbGxUeXBlLFxuICBHcnBjQ2xpZW50LFxuICBHcnBjQ2xpZW50RmFjdG9yeSxcbiAgR3JwY0V2ZW50LFxuICBHcnBjTWV0YWRhdGFcbn0gZnJvbSAnQG5neC1ncnBjL2NvbW1vbic7XG5pbXBvcnQge1xuICBHUlBDX0NMSUVOVF9GQUNUT1JZLFxuICBHcnBjSGFuZGxlcixcbiAgdGFrZU1lc3NhZ2VzLFxuICB0aHJvd1N0YXR1c0Vycm9yc1xufSBmcm9tICdAbmd4LWdycGMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgKiBhcyB0aGlzUHJvdG8gZnJvbSAnLi9saXZlLWxvY2F0aW9uLnBiJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMDAgZnJvbSAnLi4vLi4vcHViL3YxL21vZGVscy9jYXRlZ29yaWVzLnBiJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMDEgZnJvbSAnLi4vLi4vcHViL3YxL21vZGVscy91aWQucGInO1xuaW1wb3J0ICogYXMgcHJvdG9QdWJWMU1vZGVsczAwMiBmcm9tICcuLi8uLi9wdWIvdjEvbW9kZWxzL2xvY2F0aW9uLnBiJztcbmltcG9ydCB7IEdSUENfTElWRV9MT0NBVElPTl9TRVJWSUNFX0NMSUVOVF9TRVRUSU5HUyB9IGZyb20gJy4vbGl2ZS1sb2NhdGlvbi5wYmNvbmYnO1xuLyoqXG4gKiBTZXJ2aWNlIGNsaWVudCBpbXBsZW1lbnRhdGlvbiBmb3IgcHJvdG8ucHViLnYxLmxpdmVfbG9jYXRpb24uTGl2ZUxvY2F0aW9uU2VydmljZVxuICovXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdhbnknIH0pXG5leHBvcnQgY2xhc3MgTGl2ZUxvY2F0aW9uU2VydmljZUNsaWVudCB7XG4gIHByaXZhdGUgY2xpZW50OiBHcnBjQ2xpZW50PGFueT47XG5cbiAgLyoqXG4gICAqIFJhdyBSUEMgaW1wbGVtZW50YXRpb24gZm9yIGVhY2ggc2VydmljZSBjbGllbnQgbWV0aG9kLlxuICAgKiBUaGUgcmF3IG1ldGhvZHMgcHJvdmlkZSBtb3JlIGNvbnRyb2wgb24gdGhlIGluY29taW5nIGRhdGEgYW5kIGV2ZW50cy4gRS5nLiB0aGV5IGNhbiBiZSB1c2VmdWwgdG8gcmVhZCBzdGF0dXMgYE9LYCBtZXRhZGF0YS5cbiAgICogQXR0ZW50aW9uOiB0aGVzZSBtZXRob2RzIGRvIG5vdCB0aHJvdyBlcnJvcnMgd2hlbiBub24temVybyBzdGF0dXMgY29kZXMgYXJlIHJlY2VpdmVkLlxuICAgKi9cbiAgJHJhdyA9IHtcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvcHJvdG8ucHViLnYxLmxpdmVfbG9jYXRpb24uTGl2ZUxvY2F0aW9uU2VydmljZS9DcmVhdGVMaXZlTG9jYXRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uQ3JlYXRlTGl2ZUxvY2F0aW9uUmVzPj5cbiAgICAgKi9cbiAgICBjcmVhdGVMaXZlTG9jYXRpb246IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uQ3JlYXRlTGl2ZUxvY2F0aW9uUmVxLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkNyZWF0ZUxpdmVMb2NhdGlvblJlcz4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOlxuICAgICAgICAgICcvcHJvdG8ucHViLnYxLmxpdmVfbG9jYXRpb24uTGl2ZUxvY2F0aW9uU2VydmljZS9DcmVhdGVMaXZlTG9jYXRpb24nLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5DcmVhdGVMaXZlTG9jYXRpb25SZXEsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5DcmVhdGVMaXZlTG9jYXRpb25SZXNcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL3Byb3RvLnB1Yi52MS5saXZlX2xvY2F0aW9uLkxpdmVMb2NhdGlvblNlcnZpY2UvVXBkYXRlTG9jYXRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uVXBkYXRlTG9jYXRpb25SZXM+PlxuICAgICAqL1xuICAgIHVwZGF0ZUxvY2F0aW9uOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLlVwZGF0ZUxvY2F0aW9uUmVxLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlVwZGF0ZUxvY2F0aW9uUmVzPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvcHJvdG8ucHViLnYxLmxpdmVfbG9jYXRpb24uTGl2ZUxvY2F0aW9uU2VydmljZS9VcGRhdGVMb2NhdGlvbicsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLlVwZGF0ZUxvY2F0aW9uUmVxLFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uVXBkYXRlTG9jYXRpb25SZXNcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL3Byb3RvLnB1Yi52MS5saXZlX2xvY2F0aW9uLkxpdmVMb2NhdGlvblNlcnZpY2UvU2hvdWxkU2VuZExpdmVMb2NhdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5TaG91bGRTZW5kTGl2ZUxvY2F0aW9uUmVzPj5cbiAgICAgKi9cbiAgICBzaG91bGRTZW5kTGl2ZUxvY2F0aW9uOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLlNob3VsZFNlbmRMaXZlTG9jYXRpb25SZXEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uU2hvdWxkU2VuZExpdmVMb2NhdGlvblJlcz4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOlxuICAgICAgICAgICcvcHJvdG8ucHViLnYxLmxpdmVfbG9jYXRpb24uTGl2ZUxvY2F0aW9uU2VydmljZS9TaG91bGRTZW5kTGl2ZUxvY2F0aW9uJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uU2hvdWxkU2VuZExpdmVMb2NhdGlvblJlcSxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLlNob3VsZFNlbmRMaXZlTG9jYXRpb25SZXNcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL3Byb3RvLnB1Yi52MS5saXZlX2xvY2F0aW9uLkxpdmVMb2NhdGlvblNlcnZpY2UvR2V0TGFzdFVwZGF0ZWRMaXZlTG9jYXRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uR2V0TGFzdFVwZGF0ZWRMaXZlTG9jYXRpb25SZXM+PlxuICAgICAqL1xuICAgIGdldExhc3RVcGRhdGVkTGl2ZUxvY2F0aW9uOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkdldExhc3RVcGRhdGVkTGl2ZUxvY2F0aW9uUmVxLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkdldExhc3RVcGRhdGVkTGl2ZUxvY2F0aW9uUmVzPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6XG4gICAgICAgICAgJy9wcm90by5wdWIudjEubGl2ZV9sb2NhdGlvbi5MaXZlTG9jYXRpb25TZXJ2aWNlL0dldExhc3RVcGRhdGVkTGl2ZUxvY2F0aW9uJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uR2V0TGFzdFVwZGF0ZWRMaXZlTG9jYXRpb25SZXEsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5HZXRMYXN0VXBkYXRlZExpdmVMb2NhdGlvblJlc1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChHUlBDX0xJVkVfTE9DQVRJT05fU0VSVklDRV9DTElFTlRfU0VUVElOR1MpXG4gICAgc2V0dGluZ3M6IGFueSxcbiAgICBASW5qZWN0KEdSUENfQ0xJRU5UX0ZBQ1RPUlkpIGNsaWVudEZhY3Rvcnk6IEdycGNDbGllbnRGYWN0b3J5PGFueT4sXG4gICAgcHJpdmF0ZSBoYW5kbGVyOiBHcnBjSGFuZGxlclxuICApIHtcbiAgICB0aGlzLmNsaWVudCA9IGNsaWVudEZhY3RvcnkuY3JlYXRlQ2xpZW50KFxuICAgICAgJ3Byb3RvLnB1Yi52MS5saXZlX2xvY2F0aW9uLkxpdmVMb2NhdGlvblNlcnZpY2UnLFxuICAgICAgc2V0dGluZ3NcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9wcm90by5wdWIudjEubGl2ZV9sb2NhdGlvbi5MaXZlTG9jYXRpb25TZXJ2aWNlL0NyZWF0ZUxpdmVMb2NhdGlvblxuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5DcmVhdGVMaXZlTG9jYXRpb25SZXM+XG4gICAqL1xuICBjcmVhdGVMaXZlTG9jYXRpb24oXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5DcmVhdGVMaXZlTG9jYXRpb25SZXEsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLkNyZWF0ZUxpdmVMb2NhdGlvblJlcz4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5jcmVhdGVMaXZlTG9jYXRpb24ocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvcHJvdG8ucHViLnYxLmxpdmVfbG9jYXRpb24uTGl2ZUxvY2F0aW9uU2VydmljZS9VcGRhdGVMb2NhdGlvblxuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5VcGRhdGVMb2NhdGlvblJlcz5cbiAgICovXG4gIHVwZGF0ZUxvY2F0aW9uKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uVXBkYXRlTG9jYXRpb25SZXEsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLlVwZGF0ZUxvY2F0aW9uUmVzPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLnVwZGF0ZUxvY2F0aW9uKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL3Byb3RvLnB1Yi52MS5saXZlX2xvY2F0aW9uLkxpdmVMb2NhdGlvblNlcnZpY2UvU2hvdWxkU2VuZExpdmVMb2NhdGlvblxuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5TaG91bGRTZW5kTGl2ZUxvY2F0aW9uUmVzPlxuICAgKi9cbiAgc2hvdWxkU2VuZExpdmVMb2NhdGlvbihcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLlNob3VsZFNlbmRMaXZlTG9jYXRpb25SZXEsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLlNob3VsZFNlbmRMaXZlTG9jYXRpb25SZXM+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAuc2hvdWxkU2VuZExpdmVMb2NhdGlvbihyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9wcm90by5wdWIudjEubGl2ZV9sb2NhdGlvbi5MaXZlTG9jYXRpb25TZXJ2aWNlL0dldExhc3RVcGRhdGVkTGl2ZUxvY2F0aW9uXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLkdldExhc3RVcGRhdGVkTGl2ZUxvY2F0aW9uUmVzPlxuICAgKi9cbiAgZ2V0TGFzdFVwZGF0ZWRMaXZlTG9jYXRpb24oXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5HZXRMYXN0VXBkYXRlZExpdmVMb2NhdGlvblJlcSxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uR2V0TGFzdFVwZGF0ZWRMaXZlTG9jYXRpb25SZXM+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAuZ2V0TGFzdFVwZGF0ZWRMaXZlTG9jYXRpb24ocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxufVxuIl19