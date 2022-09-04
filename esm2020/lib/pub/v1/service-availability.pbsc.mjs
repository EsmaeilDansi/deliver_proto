/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { Inject, Injectable, Optional } from '@angular/core';
import { GrpcCallType, GrpcMetadata } from '@ngx-grpc/common';
import { GRPC_CLIENT_FACTORY, takeMessages, throwStatusErrors } from '@ngx-grpc/core';
import * as thisProto from './service-availability.pb';
import { GRPC_SERVICE_AVAILABILITY_CLIENT_SETTINGS } from './service-availability.pbconf';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-grpc/core";
/**
 * Service client implementation for proto.pub.v1.service_availability.ServiceAvailability
 */
export class ServiceAvailabilityClient {
    constructor(settings, clientFactory, handler) {
        this.handler = handler;
        /**
         * Raw RPC implementation for each service client method.
         * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
         * Attention: these methods do not throw errors when non-zero status codes are received.
         */
        this.$raw = {
            /**
             * Unary call: /proto.pub.v1.service_availability.ServiceAvailability/GetQuerySettings
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.GetQuerySettingsRes>>
             */
            getQuerySettings: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.service_availability.ServiceAvailability/GetQuerySettings',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.GetQuerySettingsReq,
                    responseClass: thisProto.GetQuerySettingsRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.service_availability.ServiceAvailability/GetServiceAvailability
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.GetServiceAvailabilityRes>>
             */
            getServiceAvailability: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.service_availability.ServiceAvailability/GetServiceAvailability',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.GetServiceAvailabilityReq,
                    responseClass: thisProto.GetServiceAvailabilityRes
                });
            }
        };
        this.client = clientFactory.createClient('proto.pub.v1.service_availability.ServiceAvailability', settings);
    }
    /**
     * Unary call @/proto.pub.v1.service_availability.ServiceAvailability/GetQuerySettings
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetQuerySettingsRes>
     */
    getQuerySettings(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .getQuerySettings(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.service_availability.ServiceAvailability/GetServiceAvailability
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetServiceAvailabilityRes>
     */
    getServiceAvailability(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .getServiceAvailability(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
}
ServiceAvailabilityClient.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: ServiceAvailabilityClient, deps: [{ token: GRPC_SERVICE_AVAILABILITY_CLIENT_SETTINGS, optional: true }, { token: GRPC_CLIENT_FACTORY }, { token: i1.GrpcHandler }], target: i0.ɵɵFactoryTarget.Injectable });
ServiceAvailabilityClient.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: ServiceAvailabilityClient, providedIn: 'any' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: ServiceAvailabilityClient, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'any' }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [GRPC_SERVICE_AVAILABILITY_CLIENT_SETTINGS]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [GRPC_CLIENT_FACTORY]
                }] }, { type: i1.GrpcHandler }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS1hdmFpbGFiaWxpdHkucGJzYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Byb3RvL3NyYy9saWIvcHViL3YxL3NlcnZpY2UtYXZhaWxhYmlsaXR5LnBic2MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixjQUFjO0FBQ2QsRUFBRTtBQUNGLDJCQUEyQjtBQUMzQiw4Q0FBOEM7QUFDOUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFDTCxZQUFZLEVBSVosWUFBWSxFQUNiLE1BQU0sa0JBQWtCLENBQUM7QUFDMUIsT0FBTyxFQUNMLG1CQUFtQixFQUVuQixZQUFZLEVBQ1osaUJBQWlCLEVBQ2xCLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEIsT0FBTyxLQUFLLFNBQVMsTUFBTSwyQkFBMkIsQ0FBQztBQUN2RCxPQUFPLEVBQUUseUNBQXlDLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7O0FBQzFGOztHQUVHO0FBRUgsTUFBTSxPQUFPLHlCQUF5QjtJQXVEcEMsWUFHRSxRQUFhLEVBQ2dCLGFBQXFDLEVBQzFELE9BQW9CO1FBQXBCLFlBQU8sR0FBUCxPQUFPLENBQWE7UUF6RDlCOzs7O1dBSUc7UUFDSCxTQUFJLEdBQUc7WUFDTDs7Ozs7O2VBTUc7WUFDSCxnQkFBZ0IsRUFBRSxDQUNoQixXQUEwQyxFQUMxQyxlQUFlLEdBQUcsSUFBSSxZQUFZLEVBQUUsRUFDa0IsRUFBRTtnQkFDeEQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztvQkFDekIsSUFBSSxFQUFFLFlBQVksQ0FBQyxLQUFLO29CQUN4QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07b0JBQ25CLElBQUksRUFDRix5RUFBeUU7b0JBQzNFLFdBQVc7b0JBQ1gsZUFBZTtvQkFDZixZQUFZLEVBQUUsU0FBUyxDQUFDLG1CQUFtQjtvQkFDM0MsYUFBYSxFQUFFLFNBQVMsQ0FBQyxtQkFBbUI7aUJBQzdDLENBQUMsQ0FBQztZQUNMLENBQUM7WUFDRDs7Ozs7O2VBTUc7WUFDSCxzQkFBc0IsRUFBRSxDQUN0QixXQUFnRCxFQUNoRCxlQUFlLEdBQUcsSUFBSSxZQUFZLEVBQUUsRUFDd0IsRUFBRTtnQkFDOUQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztvQkFDekIsSUFBSSxFQUFFLFlBQVksQ0FBQyxLQUFLO29CQUN4QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07b0JBQ25CLElBQUksRUFDRiwrRUFBK0U7b0JBQ2pGLFdBQVc7b0JBQ1gsZUFBZTtvQkFDZixZQUFZLEVBQUUsU0FBUyxDQUFDLHlCQUF5QjtvQkFDakQsYUFBYSxFQUFFLFNBQVMsQ0FBQyx5QkFBeUI7aUJBQ25ELENBQUMsQ0FBQztZQUNMLENBQUM7U0FDRixDQUFDO1FBU0EsSUFBSSxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUMsWUFBWSxDQUN0Qyx1REFBdUQsRUFDdkQsUUFBUSxDQUNULENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsZ0JBQWdCLENBQ2QsV0FBMEMsRUFDMUMsZUFBZSxHQUFHLElBQUksWUFBWSxFQUFFO1FBRXBDLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsZUFBZSxDQUFDO2FBQzlDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILHNCQUFzQixDQUNwQixXQUFnRCxFQUNoRCxlQUFlLEdBQUcsSUFBSSxZQUFZLEVBQUU7UUFFcEMsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLHNCQUFzQixDQUFDLFdBQVcsRUFBRSxlQUFlLENBQUM7YUFDcEQsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDOztzSEFsR1UseUJBQXlCLGtCQXlEMUIseUNBQXlDLDZCQUV6QyxtQkFBbUI7MEhBM0RsQix5QkFBeUIsY0FEWixLQUFLOzJGQUNsQix5QkFBeUI7a0JBRHJDLFVBQVU7bUJBQUMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFOzswQkF5RDVCLFFBQVE7OzBCQUNSLE1BQU07MkJBQUMseUNBQXlDOzswQkFFaEQsTUFBTTsyQkFBQyxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgKi9cbi8vIEB0cy1ub2NoZWNrXG4vL1xuLy8gVEhJUyBJUyBBIEdFTkVSQVRFRCBGSUxFXG4vLyBETyBOT1QgTU9ESUZZIElUISBZT1VSIENIQU5HRVMgV0lMTCBCRSBMT1NUXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBHcnBjQ2FsbFR5cGUsXG4gIEdycGNDbGllbnQsXG4gIEdycGNDbGllbnRGYWN0b3J5LFxuICBHcnBjRXZlbnQsXG4gIEdycGNNZXRhZGF0YVxufSBmcm9tICdAbmd4LWdycGMvY29tbW9uJztcbmltcG9ydCB7XG4gIEdSUENfQ0xJRU5UX0ZBQ1RPUlksXG4gIEdycGNIYW5kbGVyLFxuICB0YWtlTWVzc2FnZXMsXG4gIHRocm93U3RhdHVzRXJyb3JzXG59IGZyb20gJ0BuZ3gtZ3JwYy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCAqIGFzIHRoaXNQcm90byBmcm9tICcuL3NlcnZpY2UtYXZhaWxhYmlsaXR5LnBiJztcbmltcG9ydCB7IEdSUENfU0VSVklDRV9BVkFJTEFCSUxJVFlfQ0xJRU5UX1NFVFRJTkdTIH0gZnJvbSAnLi9zZXJ2aWNlLWF2YWlsYWJpbGl0eS5wYmNvbmYnO1xuLyoqXG4gKiBTZXJ2aWNlIGNsaWVudCBpbXBsZW1lbnRhdGlvbiBmb3IgcHJvdG8ucHViLnYxLnNlcnZpY2VfYXZhaWxhYmlsaXR5LlNlcnZpY2VBdmFpbGFiaWxpdHlcbiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAnYW55JyB9KVxuZXhwb3J0IGNsYXNzIFNlcnZpY2VBdmFpbGFiaWxpdHlDbGllbnQge1xuICBwcml2YXRlIGNsaWVudDogR3JwY0NsaWVudDxhbnk+O1xuXG4gIC8qKlxuICAgKiBSYXcgUlBDIGltcGxlbWVudGF0aW9uIGZvciBlYWNoIHNlcnZpY2UgY2xpZW50IG1ldGhvZC5cbiAgICogVGhlIHJhdyBtZXRob2RzIHByb3ZpZGUgbW9yZSBjb250cm9sIG9uIHRoZSBpbmNvbWluZyBkYXRhIGFuZCBldmVudHMuIEUuZy4gdGhleSBjYW4gYmUgdXNlZnVsIHRvIHJlYWQgc3RhdHVzIGBPS2AgbWV0YWRhdGEuXG4gICAqIEF0dGVudGlvbjogdGhlc2UgbWV0aG9kcyBkbyBub3QgdGhyb3cgZXJyb3JzIHdoZW4gbm9uLXplcm8gc3RhdHVzIGNvZGVzIGFyZSByZWNlaXZlZC5cbiAgICovXG4gICRyYXcgPSB7XG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL3Byb3RvLnB1Yi52MS5zZXJ2aWNlX2F2YWlsYWJpbGl0eS5TZXJ2aWNlQXZhaWxhYmlsaXR5L0dldFF1ZXJ5U2V0dGluZ3NcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uR2V0UXVlcnlTZXR0aW5nc1Jlcz4+XG4gICAgICovXG4gICAgZ2V0UXVlcnlTZXR0aW5nczogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5HZXRRdWVyeVNldHRpbmdzUmVxLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkdldFF1ZXJ5U2V0dGluZ3NSZXM+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDpcbiAgICAgICAgICAnL3Byb3RvLnB1Yi52MS5zZXJ2aWNlX2F2YWlsYWJpbGl0eS5TZXJ2aWNlQXZhaWxhYmlsaXR5L0dldFF1ZXJ5U2V0dGluZ3MnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5HZXRRdWVyeVNldHRpbmdzUmVxLFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uR2V0UXVlcnlTZXR0aW5nc1Jlc1xuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvcHJvdG8ucHViLnYxLnNlcnZpY2VfYXZhaWxhYmlsaXR5LlNlcnZpY2VBdmFpbGFiaWxpdHkvR2V0U2VydmljZUF2YWlsYWJpbGl0eVxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5HZXRTZXJ2aWNlQXZhaWxhYmlsaXR5UmVzPj5cbiAgICAgKi9cbiAgICBnZXRTZXJ2aWNlQXZhaWxhYmlsaXR5OiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkdldFNlcnZpY2VBdmFpbGFiaWxpdHlSZXEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uR2V0U2VydmljZUF2YWlsYWJpbGl0eVJlcz4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOlxuICAgICAgICAgICcvcHJvdG8ucHViLnYxLnNlcnZpY2VfYXZhaWxhYmlsaXR5LlNlcnZpY2VBdmFpbGFiaWxpdHkvR2V0U2VydmljZUF2YWlsYWJpbGl0eScsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkdldFNlcnZpY2VBdmFpbGFiaWxpdHlSZXEsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5HZXRTZXJ2aWNlQXZhaWxhYmlsaXR5UmVzXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KEdSUENfU0VSVklDRV9BVkFJTEFCSUxJVFlfQ0xJRU5UX1NFVFRJTkdTKVxuICAgIHNldHRpbmdzOiBhbnksXG4gICAgQEluamVjdChHUlBDX0NMSUVOVF9GQUNUT1JZKSBjbGllbnRGYWN0b3J5OiBHcnBjQ2xpZW50RmFjdG9yeTxhbnk+LFxuICAgIHByaXZhdGUgaGFuZGxlcjogR3JwY0hhbmRsZXJcbiAgKSB7XG4gICAgdGhpcy5jbGllbnQgPSBjbGllbnRGYWN0b3J5LmNyZWF0ZUNsaWVudChcbiAgICAgICdwcm90by5wdWIudjEuc2VydmljZV9hdmFpbGFiaWxpdHkuU2VydmljZUF2YWlsYWJpbGl0eScsXG4gICAgICBzZXR0aW5nc1xuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL3Byb3RvLnB1Yi52MS5zZXJ2aWNlX2F2YWlsYWJpbGl0eS5TZXJ2aWNlQXZhaWxhYmlsaXR5L0dldFF1ZXJ5U2V0dGluZ3NcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uR2V0UXVlcnlTZXR0aW5nc1Jlcz5cbiAgICovXG4gIGdldFF1ZXJ5U2V0dGluZ3MoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5HZXRRdWVyeVNldHRpbmdzUmVxLFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5HZXRRdWVyeVNldHRpbmdzUmVzPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmdldFF1ZXJ5U2V0dGluZ3MocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvcHJvdG8ucHViLnYxLnNlcnZpY2VfYXZhaWxhYmlsaXR5LlNlcnZpY2VBdmFpbGFiaWxpdHkvR2V0U2VydmljZUF2YWlsYWJpbGl0eVxuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5HZXRTZXJ2aWNlQXZhaWxhYmlsaXR5UmVzPlxuICAgKi9cbiAgZ2V0U2VydmljZUF2YWlsYWJpbGl0eShcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkdldFNlcnZpY2VBdmFpbGFiaWxpdHlSZXEsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLkdldFNlcnZpY2VBdmFpbGFiaWxpdHlSZXM+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAuZ2V0U2VydmljZUF2YWlsYWJpbGl0eShyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG59XG4iXX0=