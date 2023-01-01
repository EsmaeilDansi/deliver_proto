/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { Inject, Injectable, Optional } from '@angular/core';
import { GrpcCallType, GrpcMetadata } from '@ngx-grpc/common';
import { GRPC_CLIENT_FACTORY, takeMessages, throwStatusErrors } from '@ngx-grpc/core';
import * as thisProto from './channel.pb';
import { GRPC_CHANNEL_SERVICE_CLIENT_SETTINGS } from './channel.pbconf';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-grpc/core";
/**
 * Service client implementation for proto.pub.v1.channel.ChannelService
 */
export class ChannelServiceClient {
    constructor(settings, clientFactory, handler) {
        this.handler = handler;
        /**
         * Raw RPC implementation for each service client method.
         * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
         * Attention: these methods do not throw errors when non-zero status codes are received.
         */
        this.$raw = {
            /**
             * Unary call: /proto.pub.v1.channel.ChannelService/CreateChannel
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.CreateChannelRes>>
             */
            createChannel: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.channel.ChannelService/CreateChannel',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.CreateChannelReq,
                    responseClass: thisProto.CreateChannelRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.channel.ChannelService/GetChannel
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.GetChannelRes>>
             */
            getChannel: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.channel.ChannelService/GetChannel',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.GetChannelReq,
                    responseClass: thisProto.GetChannelRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.channel.ChannelService/ModifyChannel
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.ModifyChannelRes>>
             */
            modifyChannel: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.channel.ChannelService/ModifyChannel',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.ModifyChannelReq,
                    responseClass: thisProto.ModifyChannelRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.channel.ChannelService/ChangeRole
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.ChangeRoleRes>>
             */
            changeRole: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.channel.ChannelService/ChangeRole',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.ChangeRoleReq,
                    responseClass: thisProto.ChangeRoleRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.channel.ChannelService/RemoveChannel
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.RemoveChannelRes>>
             */
            removeChannel: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.channel.ChannelService/RemoveChannel',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.RemoveChannelReq,
                    responseClass: thisProto.RemoveChannelRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.channel.ChannelService/AddMembers
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.AddMembersRes>>
             */
            addMembers: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.channel.ChannelService/AddMembers',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.AddMembersReq,
                    responseClass: thisProto.AddMembersRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.channel.ChannelService/KickMembers
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.KickMembersRes>>
             */
            kickMembers: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.channel.ChannelService/KickMembers',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.KickMembersReq,
                    responseClass: thisProto.KickMembersRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.channel.ChannelService/BanMember
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.BanMemberRes>>
             */
            banMember: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.channel.ChannelService/BanMember',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.BanMemberReq,
                    responseClass: thisProto.BanMemberRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.channel.ChannelService/UnbanMember
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.UnbanMemberRes>>
             */
            unbanMember: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.channel.ChannelService/UnbanMember',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.UnbanMemberReq,
                    responseClass: thisProto.UnbanMemberRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.channel.ChannelService/GetMembers
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.GetMembersRes>>
             */
            getMembers: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.channel.ChannelService/GetMembers',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.GetMembersReq,
                    responseClass: thisProto.GetMembersRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.channel.ChannelService/JoinChannel
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.JoinChannelRes>>
             */
            joinChannel: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.channel.ChannelService/JoinChannel',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.JoinChannelReq,
                    responseClass: thisProto.JoinChannelRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.channel.ChannelService/LeaveChannel
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.LeaveChannelRes>>
             */
            leaveChannel: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.channel.ChannelService/LeaveChannel',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.LeaveChannelReq,
                    responseClass: thisProto.LeaveChannelRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.channel.ChannelService/CreateToken
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.CreateTokenRes>>
             */
            createToken: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.channel.ChannelService/CreateToken',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.CreateTokenReq,
                    responseClass: thisProto.CreateTokenRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.channel.ChannelService/DeleteToken
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.DeleteTokenRes>>
             */
            deleteToken: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.channel.ChannelService/DeleteToken',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.DeleteTokenReq,
                    responseClass: thisProto.DeleteTokenRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.channel.ChannelService/PinMessage
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.PinMessageRes>>
             */
            pinMessage: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.channel.ChannelService/PinMessage',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.PinMessageReq,
                    responseClass: thisProto.PinMessageRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.channel.ChannelService/UnpinMessage
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.UnpinMessageRes>>
             */
            unpinMessage: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.channel.ChannelService/UnpinMessage',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.UnpinMessageReq,
                    responseClass: thisProto.UnpinMessageRes
                });
            }
        };
        this.client = clientFactory.createClient('proto.pub.v1.channel.ChannelService', settings);
    }
    /**
     * Unary call @/proto.pub.v1.channel.ChannelService/CreateChannel
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.CreateChannelRes>
     */
    createChannel(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .createChannel(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.channel.ChannelService/GetChannel
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetChannelRes>
     */
    getChannel(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .getChannel(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.channel.ChannelService/ModifyChannel
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ModifyChannelRes>
     */
    modifyChannel(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .modifyChannel(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.channel.ChannelService/ChangeRole
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ChangeRoleRes>
     */
    changeRole(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .changeRole(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.channel.ChannelService/RemoveChannel
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.RemoveChannelRes>
     */
    removeChannel(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .removeChannel(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.channel.ChannelService/AddMembers
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.AddMembersRes>
     */
    addMembers(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .addMembers(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.channel.ChannelService/KickMembers
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.KickMembersRes>
     */
    kickMembers(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .kickMembers(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.channel.ChannelService/BanMember
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.BanMemberRes>
     */
    banMember(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .banMember(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.channel.ChannelService/UnbanMember
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.UnbanMemberRes>
     */
    unbanMember(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .unbanMember(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.channel.ChannelService/GetMembers
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetMembersRes>
     */
    getMembers(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .getMembers(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.channel.ChannelService/JoinChannel
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.JoinChannelRes>
     */
    joinChannel(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .joinChannel(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.channel.ChannelService/LeaveChannel
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.LeaveChannelRes>
     */
    leaveChannel(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .leaveChannel(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.channel.ChannelService/CreateToken
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.CreateTokenRes>
     */
    createToken(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .createToken(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.channel.ChannelService/DeleteToken
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.DeleteTokenRes>
     */
    deleteToken(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .deleteToken(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.channel.ChannelService/PinMessage
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.PinMessageRes>
     */
    pinMessage(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .pinMessage(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.channel.ChannelService/UnpinMessage
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.UnpinMessageRes>
     */
    unpinMessage(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .unpinMessage(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
}
ChannelServiceClient.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: ChannelServiceClient, deps: [{ token: GRPC_CHANNEL_SERVICE_CLIENT_SETTINGS, optional: true }, { token: GRPC_CLIENT_FACTORY }, { token: i1.GrpcHandler }], target: i0.ɵɵFactoryTarget.Injectable });
ChannelServiceClient.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: ChannelServiceClient, providedIn: 'any' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: ChannelServiceClient, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'any' }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [GRPC_CHANNEL_SERVICE_CLIENT_SETTINGS]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [GRPC_CLIENT_FACTORY]
                }] }, { type: i1.GrpcHandler }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbm5lbC5wYnNjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcHJvdG8vc3JjL2xpYi9wdWIvdjEvY2hhbm5lbC5wYnNjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsY0FBYztBQUNkLEVBQUU7QUFDRiwyQkFBMkI7QUFDM0IsOENBQThDO0FBQzlDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQ0wsWUFBWSxFQUlaLFlBQVksRUFDYixNQUFNLGtCQUFrQixDQUFDO0FBQzFCLE9BQU8sRUFDTCxtQkFBbUIsRUFFbkIsWUFBWSxFQUNaLGlCQUFpQixFQUNsQixNQUFNLGdCQUFnQixDQUFDO0FBRXhCLE9BQU8sS0FBSyxTQUFTLE1BQU0sY0FBYyxDQUFDO0FBSTFDLE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7QUFDeEU7O0dBRUc7QUFFSCxNQUFNLE9BQU8sb0JBQW9CO0lBMlYvQixZQUM0RCxRQUFhLEVBQzFDLGFBQXFDLEVBQzFELE9BQW9CO1FBQXBCLFlBQU8sR0FBUCxPQUFPLENBQWE7UUEzVjlCOzs7O1dBSUc7UUFDSCxTQUFJLEdBQUc7WUFDTDs7Ozs7O2VBTUc7WUFDSCxhQUFhLEVBQUUsQ0FDYixXQUF1QyxFQUN2QyxlQUFlLEdBQUcsSUFBSSxZQUFZLEVBQUUsRUFDZSxFQUFFO2dCQUNyRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO29CQUN6QixJQUFJLEVBQUUsWUFBWSxDQUFDLEtBQUs7b0JBQ3hCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtvQkFDbkIsSUFBSSxFQUFFLG9EQUFvRDtvQkFDMUQsV0FBVztvQkFDWCxlQUFlO29CQUNmLFlBQVksRUFBRSxTQUFTLENBQUMsZ0JBQWdCO29CQUN4Qyxh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ZUFBZSxDQUFDO2FBQ3pDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILFNBQVMsQ0FDUCxXQUFtQyxFQUNuQyxlQUFlLEdBQUcsSUFBSSxZQUFZLEVBQUU7UUFFcEMsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLFNBQVMsQ0FBQyxXQUFXLEVBQUUsZUFBZSxDQUFDO2FBQ3ZDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILFdBQVcsQ0FDVCxXQUFxQyxFQUNyQyxlQUFlLEdBQUcsSUFBSSxZQUFZLEVBQUU7UUFFcEMsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLFdBQVcsQ0FBQyxXQUFXLEVBQUUsZUFBZSxDQUFDO2FBQ3pDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILFVBQVUsQ0FDUixXQUFvQyxFQUNwQyxlQUFlLEdBQUcsSUFBSSxZQUFZLEVBQUU7UUFFcEMsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLFVBQVUsQ0FBQyxXQUFXLEVBQUUsZUFBZSxDQUFDO2FBQ3hDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILFdBQVcsQ0FDVCxXQUFxQyxFQUNyQyxlQUFlLEdBQUcsSUFBSSxZQUFZLEVBQUU7UUFFcEMsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLFdBQVcsQ0FBQyxXQUFXLEVBQUUsZUFBZSxDQUFDO2FBQ3pDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILFlBQVksQ0FDVixXQUFzQyxFQUN0QyxlQUFlLEdBQUcsSUFBSSxZQUFZLEVBQUU7UUFFcEMsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLFlBQVksQ0FBQyxXQUFXLEVBQUUsZUFBZSxDQUFDO2FBQzFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILFdBQVcsQ0FDVCxXQUFxQyxFQUNyQyxlQUFlLEdBQUcsSUFBSSxZQUFZLEVBQUU7UUFFcEMsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLFdBQVcsQ0FBQyxXQUFXLEVBQUUsZUFBZSxDQUFDO2FBQ3pDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILFdBQVcsQ0FDVCxXQUFxQyxFQUNyQyxlQUFlLEdBQUcsSUFBSSxZQUFZLEVBQUU7UUFFcEMsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLFdBQVcsQ0FBQyxXQUFXLEVBQUUsZUFBZSxDQUFDO2FBQ3pDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILFVBQVUsQ0FDUixXQUFvQyxFQUNwQyxlQUFlLEdBQUcsSUFBSSxZQUFZLEVBQUU7UUFFcEMsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLFVBQVUsQ0FBQyxXQUFXLEVBQUUsZUFBZSxDQUFDO2FBQ3hDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILFlBQVksQ0FDVixXQUFzQyxFQUN0QyxlQUFlLEdBQUcsSUFBSSxZQUFZLEVBQUU7UUFFcEMsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLFlBQVksQ0FBQyxXQUFXLEVBQUUsZUFBZSxDQUFDO2FBQzFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7aUhBcG1CVSxvQkFBb0Isa0JBNFZULG9DQUFvQyw2QkFDaEQsbUJBQW1CO3FIQTdWbEIsb0JBQW9CLGNBRFAsS0FBSzsyRkFDbEIsb0JBQW9CO2tCQURoQyxVQUFVO21CQUFDLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRTs7MEJBNlY1QixRQUFROzswQkFBSSxNQUFNOzJCQUFDLG9DQUFvQzs7MEJBQ3ZELE1BQU07MkJBQUMsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGUgKi9cbi8qIGVzbGludC1kaXNhYmxlICovXG4vLyBAdHMtbm9jaGVja1xuLy9cbi8vIFRISVMgSVMgQSBHRU5FUkFURUQgRklMRVxuLy8gRE8gTk9UIE1PRElGWSBJVCEgWU9VUiBDSEFOR0VTIFdJTEwgQkUgTE9TVFxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgR3JwY0NhbGxUeXBlLFxuICBHcnBjQ2xpZW50LFxuICBHcnBjQ2xpZW50RmFjdG9yeSxcbiAgR3JwY0V2ZW50LFxuICBHcnBjTWV0YWRhdGFcbn0gZnJvbSAnQG5neC1ncnBjL2NvbW1vbic7XG5pbXBvcnQge1xuICBHUlBDX0NMSUVOVF9GQUNUT1JZLFxuICBHcnBjSGFuZGxlcixcbiAgdGFrZU1lc3NhZ2VzLFxuICB0aHJvd1N0YXR1c0Vycm9yc1xufSBmcm9tICdAbmd4LWdycGMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgKiBhcyB0aGlzUHJvdG8gZnJvbSAnLi9jaGFubmVsLnBiJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMDAgZnJvbSAnLi4vLi4vcHViL3YxL21vZGVscy9jYXRlZ29yaWVzLnBiJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMDEgZnJvbSAnLi4vLi4vcHViL3YxL21vZGVscy91aWQucGInO1xuaW1wb3J0ICogYXMgcHJvdG9QdWJWMU1vZGVsczAwMiBmcm9tICcuLi8uLi9wdWIvdjEvbW9kZWxzL211Yy5wYic7XG5pbXBvcnQgeyBHUlBDX0NIQU5ORUxfU0VSVklDRV9DTElFTlRfU0VUVElOR1MgfSBmcm9tICcuL2NoYW5uZWwucGJjb25mJztcbi8qKlxuICogU2VydmljZSBjbGllbnQgaW1wbGVtZW50YXRpb24gZm9yIHByb3RvLnB1Yi52MS5jaGFubmVsLkNoYW5uZWxTZXJ2aWNlXG4gKi9cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ2FueScgfSlcbmV4cG9ydCBjbGFzcyBDaGFubmVsU2VydmljZUNsaWVudCB7XG4gIHByaXZhdGUgY2xpZW50OiBHcnBjQ2xpZW50PGFueT47XG5cbiAgLyoqXG4gICAqIFJhdyBSUEMgaW1wbGVtZW50YXRpb24gZm9yIGVhY2ggc2VydmljZSBjbGllbnQgbWV0aG9kLlxuICAgKiBUaGUgcmF3IG1ldGhvZHMgcHJvdmlkZSBtb3JlIGNvbnRyb2wgb24gdGhlIGluY29taW5nIGRhdGEgYW5kIGV2ZW50cy4gRS5nLiB0aGV5IGNhbiBiZSB1c2VmdWwgdG8gcmVhZCBzdGF0dXMgYE9LYCBtZXRhZGF0YS5cbiAgICogQXR0ZW50aW9uOiB0aGVzZSBtZXRob2RzIGRvIG5vdCB0aHJvdyBlcnJvcnMgd2hlbiBub24temVybyBzdGF0dXMgY29kZXMgYXJlIHJlY2VpdmVkLlxuICAgKi9cbiAgJHJhdyA9IHtcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvcHJvdG8ucHViLnYxLmNoYW5uZWwuQ2hhbm5lbFNlcnZpY2UvQ3JlYXRlQ2hhbm5lbFxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5DcmVhdGVDaGFubmVsUmVzPj5cbiAgICAgKi9cbiAgICBjcmVhdGVDaGFubmVsOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkNyZWF0ZUNoYW5uZWxSZXEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uQ3JlYXRlQ2hhbm5lbFJlcz4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL3Byb3RvLnB1Yi52MS5jaGFubmVsLkNoYW5uZWxTZXJ2aWNlL0NyZWF0ZUNoYW5uZWwnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5DcmVhdGVDaGFubmVsUmVxLFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uQ3JlYXRlQ2hhbm5lbFJlc1xuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvcHJvdG8ucHViLnYxLmNoYW5uZWwuQ2hhbm5lbFNlcnZpY2UvR2V0Q2hhbm5lbFxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5HZXRDaGFubmVsUmVzPj5cbiAgICAgKi9cbiAgICBnZXRDaGFubmVsOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkdldENoYW5uZWxSZXEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uR2V0Q2hhbm5lbFJlcz4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL3Byb3RvLnB1Yi52MS5jaGFubmVsLkNoYW5uZWxTZXJ2aWNlL0dldENoYW5uZWwnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5HZXRDaGFubmVsUmVxLFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uR2V0Q2hhbm5lbFJlc1xuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvcHJvdG8ucHViLnYxLmNoYW5uZWwuQ2hhbm5lbFNlcnZpY2UvTW9kaWZ5Q2hhbm5lbFxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5Nb2RpZnlDaGFubmVsUmVzPj5cbiAgICAgKi9cbiAgICBtb2RpZnlDaGFubmVsOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLk1vZGlmeUNoYW5uZWxSZXEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uTW9kaWZ5Q2hhbm5lbFJlcz4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL3Byb3RvLnB1Yi52MS5jaGFubmVsLkNoYW5uZWxTZXJ2aWNlL01vZGlmeUNoYW5uZWwnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5Nb2RpZnlDaGFubmVsUmVxLFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uTW9kaWZ5Q2hhbm5lbFJlc1xuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvcHJvdG8ucHViLnYxLmNoYW5uZWwuQ2hhbm5lbFNlcnZpY2UvQ2hhbmdlUm9sZVxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5DaGFuZ2VSb2xlUmVzPj5cbiAgICAgKi9cbiAgICBjaGFuZ2VSb2xlOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkNoYW5nZVJvbGVSZXEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uQ2hhbmdlUm9sZVJlcz4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL3Byb3RvLnB1Yi52MS5jaGFubmVsLkNoYW5uZWxTZXJ2aWNlL0NoYW5nZVJvbGUnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5DaGFuZ2VSb2xlUmVxLFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uQ2hhbmdlUm9sZVJlc1xuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvcHJvdG8ucHViLnYxLmNoYW5uZWwuQ2hhbm5lbFNlcnZpY2UvUmVtb3ZlQ2hhbm5lbFxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5SZW1vdmVDaGFubmVsUmVzPj5cbiAgICAgKi9cbiAgICByZW1vdmVDaGFubmVsOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLlJlbW92ZUNoYW5uZWxSZXEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uUmVtb3ZlQ2hhbm5lbFJlcz4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL3Byb3RvLnB1Yi52MS5jaGFubmVsLkNoYW5uZWxTZXJ2aWNlL1JlbW92ZUNoYW5uZWwnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5SZW1vdmVDaGFubmVsUmVxLFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uUmVtb3ZlQ2hhbm5lbFJlc1xuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvcHJvdG8ucHViLnYxLmNoYW5uZWwuQ2hhbm5lbFNlcnZpY2UvQWRkTWVtYmVyc1xuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5BZGRNZW1iZXJzUmVzPj5cbiAgICAgKi9cbiAgICBhZGRNZW1iZXJzOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkFkZE1lbWJlcnNSZXEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uQWRkTWVtYmVyc1Jlcz4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL3Byb3RvLnB1Yi52MS5jaGFubmVsLkNoYW5uZWxTZXJ2aWNlL0FkZE1lbWJlcnMnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5BZGRNZW1iZXJzUmVxLFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uQWRkTWVtYmVyc1Jlc1xuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvcHJvdG8ucHViLnYxLmNoYW5uZWwuQ2hhbm5lbFNlcnZpY2UvS2lja01lbWJlcnNcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uS2lja01lbWJlcnNSZXM+PlxuICAgICAqL1xuICAgIGtpY2tNZW1iZXJzOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLktpY2tNZW1iZXJzUmVxLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLktpY2tNZW1iZXJzUmVzPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvcHJvdG8ucHViLnYxLmNoYW5uZWwuQ2hhbm5lbFNlcnZpY2UvS2lja01lbWJlcnMnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5LaWNrTWVtYmVyc1JlcSxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLktpY2tNZW1iZXJzUmVzXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9wcm90by5wdWIudjEuY2hhbm5lbC5DaGFubmVsU2VydmljZS9CYW5NZW1iZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uQmFuTWVtYmVyUmVzPj5cbiAgICAgKi9cbiAgICBiYW5NZW1iZXI6IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uQmFuTWVtYmVyUmVxLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkJhbk1lbWJlclJlcz4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL3Byb3RvLnB1Yi52MS5jaGFubmVsLkNoYW5uZWxTZXJ2aWNlL0Jhbk1lbWJlcicsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkJhbk1lbWJlclJlcSxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLkJhbk1lbWJlclJlc1xuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvcHJvdG8ucHViLnYxLmNoYW5uZWwuQ2hhbm5lbFNlcnZpY2UvVW5iYW5NZW1iZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uVW5iYW5NZW1iZXJSZXM+PlxuICAgICAqL1xuICAgIHVuYmFuTWVtYmVyOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLlVuYmFuTWVtYmVyUmVxLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlVuYmFuTWVtYmVyUmVzPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvcHJvdG8ucHViLnYxLmNoYW5uZWwuQ2hhbm5lbFNlcnZpY2UvVW5iYW5NZW1iZXInLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5VbmJhbk1lbWJlclJlcSxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLlVuYmFuTWVtYmVyUmVzXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9wcm90by5wdWIudjEuY2hhbm5lbC5DaGFubmVsU2VydmljZS9HZXRNZW1iZXJzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkdldE1lbWJlcnNSZXM+PlxuICAgICAqL1xuICAgIGdldE1lbWJlcnM6IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uR2V0TWVtYmVyc1JlcSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5HZXRNZW1iZXJzUmVzPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvcHJvdG8ucHViLnYxLmNoYW5uZWwuQ2hhbm5lbFNlcnZpY2UvR2V0TWVtYmVycycsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkdldE1lbWJlcnNSZXEsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5HZXRNZW1iZXJzUmVzXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9wcm90by5wdWIudjEuY2hhbm5lbC5DaGFubmVsU2VydmljZS9Kb2luQ2hhbm5lbFxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5Kb2luQ2hhbm5lbFJlcz4+XG4gICAgICovXG4gICAgam9pbkNoYW5uZWw6IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uSm9pbkNoYW5uZWxSZXEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uSm9pbkNoYW5uZWxSZXM+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9wcm90by5wdWIudjEuY2hhbm5lbC5DaGFubmVsU2VydmljZS9Kb2luQ2hhbm5lbCcsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkpvaW5DaGFubmVsUmVxLFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uSm9pbkNoYW5uZWxSZXNcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL3Byb3RvLnB1Yi52MS5jaGFubmVsLkNoYW5uZWxTZXJ2aWNlL0xlYXZlQ2hhbm5lbFxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5MZWF2ZUNoYW5uZWxSZXM+PlxuICAgICAqL1xuICAgIGxlYXZlQ2hhbm5lbDogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5MZWF2ZUNoYW5uZWxSZXEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uTGVhdmVDaGFubmVsUmVzPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvcHJvdG8ucHViLnYxLmNoYW5uZWwuQ2hhbm5lbFNlcnZpY2UvTGVhdmVDaGFubmVsJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uTGVhdmVDaGFubmVsUmVxLFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uTGVhdmVDaGFubmVsUmVzXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9wcm90by5wdWIudjEuY2hhbm5lbC5DaGFubmVsU2VydmljZS9DcmVhdGVUb2tlblxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5DcmVhdGVUb2tlblJlcz4+XG4gICAgICovXG4gICAgY3JlYXRlVG9rZW46IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uQ3JlYXRlVG9rZW5SZXEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uQ3JlYXRlVG9rZW5SZXM+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9wcm90by5wdWIudjEuY2hhbm5lbC5DaGFubmVsU2VydmljZS9DcmVhdGVUb2tlbicsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkNyZWF0ZVRva2VuUmVxLFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uQ3JlYXRlVG9rZW5SZXNcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL3Byb3RvLnB1Yi52MS5jaGFubmVsLkNoYW5uZWxTZXJ2aWNlL0RlbGV0ZVRva2VuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkRlbGV0ZVRva2VuUmVzPj5cbiAgICAgKi9cbiAgICBkZWxldGVUb2tlbjogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5EZWxldGVUb2tlblJlcSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5EZWxldGVUb2tlblJlcz4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL3Byb3RvLnB1Yi52MS5jaGFubmVsLkNoYW5uZWxTZXJ2aWNlL0RlbGV0ZVRva2VuJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uRGVsZXRlVG9rZW5SZXEsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5EZWxldGVUb2tlblJlc1xuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvcHJvdG8ucHViLnYxLmNoYW5uZWwuQ2hhbm5lbFNlcnZpY2UvUGluTWVzc2FnZVxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5QaW5NZXNzYWdlUmVzPj5cbiAgICAgKi9cbiAgICBwaW5NZXNzYWdlOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLlBpbk1lc3NhZ2VSZXEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uUGluTWVzc2FnZVJlcz4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL3Byb3RvLnB1Yi52MS5jaGFubmVsLkNoYW5uZWxTZXJ2aWNlL1Bpbk1lc3NhZ2UnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5QaW5NZXNzYWdlUmVxLFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uUGluTWVzc2FnZVJlc1xuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvcHJvdG8ucHViLnYxLmNoYW5uZWwuQ2hhbm5lbFNlcnZpY2UvVW5waW5NZXNzYWdlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlVucGluTWVzc2FnZVJlcz4+XG4gICAgICovXG4gICAgdW5waW5NZXNzYWdlOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLlVucGluTWVzc2FnZVJlcSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5VbnBpbk1lc3NhZ2VSZXM+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9wcm90by5wdWIudjEuY2hhbm5lbC5DaGFubmVsU2VydmljZS9VbnBpbk1lc3NhZ2UnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5VbnBpbk1lc3NhZ2VSZXEsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5VbnBpbk1lc3NhZ2VSZXNcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KEdSUENfQ0hBTk5FTF9TRVJWSUNFX0NMSUVOVF9TRVRUSU5HUykgc2V0dGluZ3M6IGFueSxcbiAgICBASW5qZWN0KEdSUENfQ0xJRU5UX0ZBQ1RPUlkpIGNsaWVudEZhY3Rvcnk6IEdycGNDbGllbnRGYWN0b3J5PGFueT4sXG4gICAgcHJpdmF0ZSBoYW5kbGVyOiBHcnBjSGFuZGxlclxuICApIHtcbiAgICB0aGlzLmNsaWVudCA9IGNsaWVudEZhY3RvcnkuY3JlYXRlQ2xpZW50KFxuICAgICAgJ3Byb3RvLnB1Yi52MS5jaGFubmVsLkNoYW5uZWxTZXJ2aWNlJyxcbiAgICAgIHNldHRpbmdzXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvcHJvdG8ucHViLnYxLmNoYW5uZWwuQ2hhbm5lbFNlcnZpY2UvQ3JlYXRlQ2hhbm5lbFxuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5DcmVhdGVDaGFubmVsUmVzPlxuICAgKi9cbiAgY3JlYXRlQ2hhbm5lbChcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkNyZWF0ZUNoYW5uZWxSZXEsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLkNyZWF0ZUNoYW5uZWxSZXM+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAuY3JlYXRlQ2hhbm5lbChyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9wcm90by5wdWIudjEuY2hhbm5lbC5DaGFubmVsU2VydmljZS9HZXRDaGFubmVsXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLkdldENoYW5uZWxSZXM+XG4gICAqL1xuICBnZXRDaGFubmVsKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uR2V0Q2hhbm5lbFJlcSxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uR2V0Q2hhbm5lbFJlcz4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5nZXRDaGFubmVsKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL3Byb3RvLnB1Yi52MS5jaGFubmVsLkNoYW5uZWxTZXJ2aWNlL01vZGlmeUNoYW5uZWxcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uTW9kaWZ5Q2hhbm5lbFJlcz5cbiAgICovXG4gIG1vZGlmeUNoYW5uZWwoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5Nb2RpZnlDaGFubmVsUmVxLFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5Nb2RpZnlDaGFubmVsUmVzPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLm1vZGlmeUNoYW5uZWwocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvcHJvdG8ucHViLnYxLmNoYW5uZWwuQ2hhbm5lbFNlcnZpY2UvQ2hhbmdlUm9sZVxuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5DaGFuZ2VSb2xlUmVzPlxuICAgKi9cbiAgY2hhbmdlUm9sZShcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkNoYW5nZVJvbGVSZXEsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLkNoYW5nZVJvbGVSZXM+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAuY2hhbmdlUm9sZShyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9wcm90by5wdWIudjEuY2hhbm5lbC5DaGFubmVsU2VydmljZS9SZW1vdmVDaGFubmVsXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLlJlbW92ZUNoYW5uZWxSZXM+XG4gICAqL1xuICByZW1vdmVDaGFubmVsKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uUmVtb3ZlQ2hhbm5lbFJlcSxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uUmVtb3ZlQ2hhbm5lbFJlcz4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5yZW1vdmVDaGFubmVsKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL3Byb3RvLnB1Yi52MS5jaGFubmVsLkNoYW5uZWxTZXJ2aWNlL0FkZE1lbWJlcnNcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uQWRkTWVtYmVyc1Jlcz5cbiAgICovXG4gIGFkZE1lbWJlcnMoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5BZGRNZW1iZXJzUmVxLFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5BZGRNZW1iZXJzUmVzPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmFkZE1lbWJlcnMocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvcHJvdG8ucHViLnYxLmNoYW5uZWwuQ2hhbm5lbFNlcnZpY2UvS2lja01lbWJlcnNcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uS2lja01lbWJlcnNSZXM+XG4gICAqL1xuICBraWNrTWVtYmVycyhcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLktpY2tNZW1iZXJzUmVxLFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5LaWNrTWVtYmVyc1Jlcz4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5raWNrTWVtYmVycyhyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9wcm90by5wdWIudjEuY2hhbm5lbC5DaGFubmVsU2VydmljZS9CYW5NZW1iZXJcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uQmFuTWVtYmVyUmVzPlxuICAgKi9cbiAgYmFuTWVtYmVyKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uQmFuTWVtYmVyUmVxLFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5CYW5NZW1iZXJSZXM+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAuYmFuTWVtYmVyKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL3Byb3RvLnB1Yi52MS5jaGFubmVsLkNoYW5uZWxTZXJ2aWNlL1VuYmFuTWVtYmVyXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLlVuYmFuTWVtYmVyUmVzPlxuICAgKi9cbiAgdW5iYW5NZW1iZXIoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5VbmJhbk1lbWJlclJlcSxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uVW5iYW5NZW1iZXJSZXM+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAudW5iYW5NZW1iZXIocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvcHJvdG8ucHViLnYxLmNoYW5uZWwuQ2hhbm5lbFNlcnZpY2UvR2V0TWVtYmVyc1xuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5HZXRNZW1iZXJzUmVzPlxuICAgKi9cbiAgZ2V0TWVtYmVycyhcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkdldE1lbWJlcnNSZXEsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLkdldE1lbWJlcnNSZXM+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAuZ2V0TWVtYmVycyhyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9wcm90by5wdWIudjEuY2hhbm5lbC5DaGFubmVsU2VydmljZS9Kb2luQ2hhbm5lbFxuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5Kb2luQ2hhbm5lbFJlcz5cbiAgICovXG4gIGpvaW5DaGFubmVsKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uSm9pbkNoYW5uZWxSZXEsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLkpvaW5DaGFubmVsUmVzPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmpvaW5DaGFubmVsKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL3Byb3RvLnB1Yi52MS5jaGFubmVsLkNoYW5uZWxTZXJ2aWNlL0xlYXZlQ2hhbm5lbFxuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5MZWF2ZUNoYW5uZWxSZXM+XG4gICAqL1xuICBsZWF2ZUNoYW5uZWwoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5MZWF2ZUNoYW5uZWxSZXEsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLkxlYXZlQ2hhbm5lbFJlcz4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5sZWF2ZUNoYW5uZWwocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvcHJvdG8ucHViLnYxLmNoYW5uZWwuQ2hhbm5lbFNlcnZpY2UvQ3JlYXRlVG9rZW5cbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uQ3JlYXRlVG9rZW5SZXM+XG4gICAqL1xuICBjcmVhdGVUb2tlbihcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkNyZWF0ZVRva2VuUmVxLFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5DcmVhdGVUb2tlblJlcz4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5jcmVhdGVUb2tlbihyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9wcm90by5wdWIudjEuY2hhbm5lbC5DaGFubmVsU2VydmljZS9EZWxldGVUb2tlblxuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5EZWxldGVUb2tlblJlcz5cbiAgICovXG4gIGRlbGV0ZVRva2VuKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uRGVsZXRlVG9rZW5SZXEsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLkRlbGV0ZVRva2VuUmVzPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmRlbGV0ZVRva2VuKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL3Byb3RvLnB1Yi52MS5jaGFubmVsLkNoYW5uZWxTZXJ2aWNlL1Bpbk1lc3NhZ2VcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uUGluTWVzc2FnZVJlcz5cbiAgICovXG4gIHBpbk1lc3NhZ2UoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5QaW5NZXNzYWdlUmVxLFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5QaW5NZXNzYWdlUmVzPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLnBpbk1lc3NhZ2UocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvcHJvdG8ucHViLnYxLmNoYW5uZWwuQ2hhbm5lbFNlcnZpY2UvVW5waW5NZXNzYWdlXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLlVucGluTWVzc2FnZVJlcz5cbiAgICovXG4gIHVucGluTWVzc2FnZShcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLlVucGluTWVzc2FnZVJlcSxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uVW5waW5NZXNzYWdlUmVzPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLnVucGluTWVzc2FnZShyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG59XG4iXX0=