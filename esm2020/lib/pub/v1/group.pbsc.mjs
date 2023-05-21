/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { Inject, Injectable, Optional } from '@angular/core';
import { GrpcCallType, GrpcMetadata } from '@ngx-grpc/common';
import { GRPC_CLIENT_FACTORY, takeMessages, throwStatusErrors } from '@ngx-grpc/core';
import * as thisProto from './group.pb';
import { GRPC_GROUP_SERVICE_CLIENT_SETTINGS } from './group.pbconf';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-grpc/core";
/**
 * Service client implementation for proto.pub.v1.group.GroupService
 */
export class GroupServiceClient {
    constructor(settings, clientFactory, handler) {
        this.handler = handler;
        /**
         * Raw RPC implementation for each service client method.
         * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
         * Attention: these methods do not throw errors when non-zero status codes are received.
         */
        this.$raw = {
            /**
             * Unary call: /proto.pub.v1.group.GroupService/CreateGroup
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.CreateGroupRes>>
             */
            createGroup: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.group.GroupService/CreateGroup',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.CreateGroupReq,
                    responseClass: thisProto.CreateGroupRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.group.GroupService/ModifyGroup
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.ModifyGroupRes>>
             */
            modifyGroup: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.group.GroupService/ModifyGroup',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.ModifyGroupReq,
                    responseClass: thisProto.ModifyGroupRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.group.GroupService/GetGroup
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.GetGroupRes>>
             */
            getGroup: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.group.GroupService/GetGroup',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.GetGroupReq,
                    responseClass: thisProto.GetGroupRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.group.GroupService/ChangeRole
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.ChangeRoleRes>>
             */
            changeRole: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.group.GroupService/ChangeRole',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.ChangeRoleReq,
                    responseClass: thisProto.ChangeRoleRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.group.GroupService/RemoveGroup
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.RemoveGroupRes>>
             */
            removeGroup: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.group.GroupService/RemoveGroup',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.RemoveGroupReq,
                    responseClass: thisProto.RemoveGroupRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.group.GroupService/AddMembers
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.AddMembersRes>>
             */
            addMembers: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.group.GroupService/AddMembers',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.AddMembersReq,
                    responseClass: thisProto.AddMembersRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.group.GroupService/KickMembers
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.KickMembersRes>>
             */
            kickMembers: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.group.GroupService/KickMembers',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.KickMembersReq,
                    responseClass: thisProto.KickMembersRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.group.GroupService/BanMember
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.BanMemberRes>>
             */
            banMember: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.group.GroupService/BanMember',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.BanMemberReq,
                    responseClass: thisProto.BanMemberRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.group.GroupService/UnbanMember
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.UnbanMemberRes>>
             */
            unbanMember: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.group.GroupService/UnbanMember',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.UnbanMemberReq,
                    responseClass: thisProto.UnbanMemberRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.group.GroupService/GetMembers
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.GetMembersRes>>
             */
            getMembers: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.group.GroupService/GetMembers',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.GetMembersReq,
                    responseClass: thisProto.GetMembersRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.group.GroupService/JoinGroup
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.JoinGroupRes>>
             */
            joinGroup: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.group.GroupService/JoinGroup',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.JoinGroupReq,
                    responseClass: thisProto.JoinGroupRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.group.GroupService/LeaveGroup
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.LeaveGroupRes>>
             */
            leaveGroup: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.group.GroupService/LeaveGroup',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.LeaveGroupReq,
                    responseClass: thisProto.LeaveGroupRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.group.GroupService/CreateToken
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.CreateTokenRes>>
             */
            createToken: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.group.GroupService/CreateToken',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.CreateTokenReq,
                    responseClass: thisProto.CreateTokenRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.group.GroupService/DeleteToken
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.DeleteTokenRes>>
             */
            deleteToken: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.group.GroupService/DeleteToken',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.DeleteTokenReq,
                    responseClass: thisProto.DeleteTokenRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.group.GroupService/PinMessage
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.PinMessageRes>>
             */
            pinMessage: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.group.GroupService/PinMessage',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.PinMessageReq,
                    responseClass: thisProto.PinMessageRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.group.GroupService/UnpinMessage
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.UnpinMessageRes>>
             */
            unpinMessage: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.group.GroupService/UnpinMessage',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.UnpinMessageReq,
                    responseClass: thisProto.UnpinMessageRes
                });
            }
        };
        this.client = clientFactory.createClient('proto.pub.v1.group.GroupService', settings);
    }
    /**
     * Unary call @/proto.pub.v1.group.GroupService/CreateGroup
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.CreateGroupRes>
     */
    createGroup(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .createGroup(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.group.GroupService/ModifyGroup
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ModifyGroupRes>
     */
    modifyGroup(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .modifyGroup(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.group.GroupService/GetGroup
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetGroupRes>
     */
    getGroup(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .getGroup(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.group.GroupService/ChangeRole
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
     * Unary call @/proto.pub.v1.group.GroupService/RemoveGroup
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.RemoveGroupRes>
     */
    removeGroup(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .removeGroup(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.group.GroupService/AddMembers
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
     * Unary call @/proto.pub.v1.group.GroupService/KickMembers
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
     * Unary call @/proto.pub.v1.group.GroupService/BanMember
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
     * Unary call @/proto.pub.v1.group.GroupService/UnbanMember
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
     * Unary call @/proto.pub.v1.group.GroupService/GetMembers
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
     * Unary call @/proto.pub.v1.group.GroupService/JoinGroup
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.JoinGroupRes>
     */
    joinGroup(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .joinGroup(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.group.GroupService/LeaveGroup
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.LeaveGroupRes>
     */
    leaveGroup(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .leaveGroup(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.group.GroupService/CreateToken
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
     * Unary call @/proto.pub.v1.group.GroupService/DeleteToken
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
     * Unary call @/proto.pub.v1.group.GroupService/PinMessage
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
     * Unary call @/proto.pub.v1.group.GroupService/UnpinMessage
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
GroupServiceClient.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: GroupServiceClient, deps: [{ token: GRPC_GROUP_SERVICE_CLIENT_SETTINGS, optional: true }, { token: GRPC_CLIENT_FACTORY }, { token: i1.GrpcHandler }], target: i0.ɵɵFactoryTarget.Injectable });
GroupServiceClient.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: GroupServiceClient, providedIn: 'any' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: GroupServiceClient, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'any' }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [GRPC_GROUP_SERVICE_CLIENT_SETTINGS]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [GRPC_CLIENT_FACTORY]
                }] }, { type: i1.GrpcHandler }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXAucGJzYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Byb3RvL3NyYy9saWIvcHViL3YxL2dyb3VwLnBic2MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixjQUFjO0FBQ2QsRUFBRTtBQUNGLDJCQUEyQjtBQUMzQiw4Q0FBOEM7QUFDOUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFDTCxZQUFZLEVBSVosWUFBWSxFQUNiLE1BQU0sa0JBQWtCLENBQUM7QUFDMUIsT0FBTyxFQUNMLG1CQUFtQixFQUVuQixZQUFZLEVBQ1osaUJBQWlCLEVBQ2xCLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEIsT0FBTyxLQUFLLFNBQVMsTUFBTSxZQUFZLENBQUM7QUFJeEMsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUNwRTs7R0FFRztBQUVILE1BQU0sT0FBTyxrQkFBa0I7SUEyVjdCLFlBQzBELFFBQWEsRUFDeEMsYUFBcUMsRUFDMUQsT0FBb0I7UUFBcEIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtRQTNWOUI7Ozs7V0FJRztRQUNILFNBQUksR0FBRztZQUNMOzs7Ozs7ZUFNRztZQUNILFdBQVcsRUFBRSxDQUNYLFdBQXFDLEVBQ3JDLGVBQWUsR0FBRyxJQUFJLFlBQVksRUFBRSxFQUNhLEVBQUU7Z0JBQ25ELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7b0JBQ3pCLElBQUksRUFBRSxZQUFZLENBQUMsS0FBSztvQkFDeEIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO29CQUNuQixJQUFJLEVBQUUsOENBQThDO29CQUNwRCxXQUFXO29CQUNYLGVBQWU7b0JBQ2YsWUFBWSxFQUFFLFNBQVMsQ0FBQyxjQUFjO29CQUN0QyxhQUFhLEVB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QixrQkE0VlAsa0NBQWtDLDZCQUM5QyxtQkFBbUI7bUhBN1ZsQixrQkFBa0IsY0FETCxLQUFLOzJGQUNsQixrQkFBa0I7a0JBRDlCLFVBQVU7bUJBQUMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFOzswQkE2VjVCLFFBQVE7OzBCQUFJLE1BQU07MkJBQUMsa0NBQWtDOzswQkFDckQsTUFBTTsyQkFBQyxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgKi9cbi8vIEB0cy1ub2NoZWNrXG4vL1xuLy8gVEhJUyBJUyBBIEdFTkVSQVRFRCBGSUxFXG4vLyBETyBOT1QgTU9ESUZZIElUISBZT1VSIENIQU5HRVMgV0lMTCBCRSBMT1NUXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBHcnBjQ2FsbFR5cGUsXG4gIEdycGNDbGllbnQsXG4gIEdycGNDbGllbnRGYWN0b3J5LFxuICBHcnBjRXZlbnQsXG4gIEdycGNNZXRhZGF0YVxufSBmcm9tICdAbmd4LWdycGMvY29tbW9uJztcbmltcG9ydCB7XG4gIEdSUENfQ0xJRU5UX0ZBQ1RPUlksXG4gIEdycGNIYW5kbGVyLFxuICB0YWtlTWVzc2FnZXMsXG4gIHRocm93U3RhdHVzRXJyb3JzXG59IGZyb20gJ0BuZ3gtZ3JwYy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCAqIGFzIHRoaXNQcm90byBmcm9tICcuL2dyb3VwLnBiJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMDAgZnJvbSAnLi4vLi4vcHViL3YxL21vZGVscy9jYXRlZ29yaWVzLnBiJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMDEgZnJvbSAnLi4vLi4vcHViL3YxL21vZGVscy91aWQucGInO1xuaW1wb3J0ICogYXMgcHJvdG9QdWJWMU1vZGVsczAwMiBmcm9tICcuLi8uLi9wdWIvdjEvbW9kZWxzL211Yy5wYic7XG5pbXBvcnQgeyBHUlBDX0dST1VQX1NFUlZJQ0VfQ0xJRU5UX1NFVFRJTkdTIH0gZnJvbSAnLi9ncm91cC5wYmNvbmYnO1xuLyoqXG4gKiBTZXJ2aWNlIGNsaWVudCBpbXBsZW1lbnRhdGlvbiBmb3IgcHJvdG8ucHViLnYxLmdyb3VwLkdyb3VwU2VydmljZVxuICovXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdhbnknIH0pXG5leHBvcnQgY2xhc3MgR3JvdXBTZXJ2aWNlQ2xpZW50IHtcbiAgcHJpdmF0ZSBjbGllbnQ6IEdycGNDbGllbnQ8YW55PjtcblxuICAvKipcbiAgICogUmF3IFJQQyBpbXBsZW1lbnRhdGlvbiBmb3IgZWFjaCBzZXJ2aWNlIGNsaWVudCBtZXRob2QuXG4gICAqIFRoZSByYXcgbWV0aG9kcyBwcm92aWRlIG1vcmUgY29udHJvbCBvbiB0aGUgaW5jb21pbmcgZGF0YSBhbmQgZXZlbnRzLiBFLmcuIHRoZXkgY2FuIGJlIHVzZWZ1bCB0byByZWFkIHN0YXR1cyBgT0tgIG1ldGFkYXRhLlxuICAgKiBBdHRlbnRpb246IHRoZXNlIG1ldGhvZHMgZG8gbm90IHRocm93IGVycm9ycyB3aGVuIG5vbi16ZXJvIHN0YXR1cyBjb2RlcyBhcmUgcmVjZWl2ZWQuXG4gICAqL1xuICAkcmF3ID0ge1xuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9wcm90by5wdWIudjEuZ3JvdXAuR3JvdXBTZXJ2aWNlL0NyZWF0ZUdyb3VwXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkNyZWF0ZUdyb3VwUmVzPj5cbiAgICAgKi9cbiAgICBjcmVhdGVHcm91cDogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5DcmVhdGVHcm91cFJlcSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5DcmVhdGVHcm91cFJlcz4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL3Byb3RvLnB1Yi52MS5ncm91cC5Hcm91cFNlcnZpY2UvQ3JlYXRlR3JvdXAnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5DcmVhdGVHcm91cFJlcSxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLkNyZWF0ZUdyb3VwUmVzXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9wcm90by5wdWIudjEuZ3JvdXAuR3JvdXBTZXJ2aWNlL01vZGlmeUdyb3VwXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLk1vZGlmeUdyb3VwUmVzPj5cbiAgICAgKi9cbiAgICBtb2RpZnlHcm91cDogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5Nb2RpZnlHcm91cFJlcSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5Nb2RpZnlHcm91cFJlcz4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL3Byb3RvLnB1Yi52MS5ncm91cC5Hcm91cFNlcnZpY2UvTW9kaWZ5R3JvdXAnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5Nb2RpZnlHcm91cFJlcSxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLk1vZGlmeUdyb3VwUmVzXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9wcm90by5wdWIudjEuZ3JvdXAuR3JvdXBTZXJ2aWNlL0dldEdyb3VwXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkdldEdyb3VwUmVzPj5cbiAgICAgKi9cbiAgICBnZXRHcm91cDogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5HZXRHcm91cFJlcSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5HZXRHcm91cFJlcz4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL3Byb3RvLnB1Yi52MS5ncm91cC5Hcm91cFNlcnZpY2UvR2V0R3JvdXAnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5HZXRHcm91cFJlcSxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLkdldEdyb3VwUmVzXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9wcm90by5wdWIudjEuZ3JvdXAuR3JvdXBTZXJ2aWNlL0NoYW5nZVJvbGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uQ2hhbmdlUm9sZVJlcz4+XG4gICAgICovXG4gICAgY2hhbmdlUm9sZTogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5DaGFuZ2VSb2xlUmVxLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkNoYW5nZVJvbGVSZXM+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9wcm90by5wdWIudjEuZ3JvdXAuR3JvdXBTZXJ2aWNlL0NoYW5nZVJvbGUnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5DaGFuZ2VSb2xlUmVxLFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uQ2hhbmdlUm9sZVJlc1xuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvcHJvdG8ucHViLnYxLmdyb3VwLkdyb3VwU2VydmljZS9SZW1vdmVHcm91cFxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5SZW1vdmVHcm91cFJlcz4+XG4gICAgICovXG4gICAgcmVtb3ZlR3JvdXA6IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uUmVtb3ZlR3JvdXBSZXEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uUmVtb3ZlR3JvdXBSZXM+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9wcm90by5wdWIudjEuZ3JvdXAuR3JvdXBTZXJ2aWNlL1JlbW92ZUdyb3VwJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uUmVtb3ZlR3JvdXBSZXEsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5SZW1vdmVHcm91cFJlc1xuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvcHJvdG8ucHViLnYxLmdyb3VwLkdyb3VwU2VydmljZS9BZGRNZW1iZXJzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkFkZE1lbWJlcnNSZXM+PlxuICAgICAqL1xuICAgIGFkZE1lbWJlcnM6IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uQWRkTWVtYmVyc1JlcSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5BZGRNZW1iZXJzUmVzPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvcHJvdG8ucHViLnYxLmdyb3VwLkdyb3VwU2VydmljZS9BZGRNZW1iZXJzJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uQWRkTWVtYmVyc1JlcSxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLkFkZE1lbWJlcnNSZXNcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL3Byb3RvLnB1Yi52MS5ncm91cC5Hcm91cFNlcnZpY2UvS2lja01lbWJlcnNcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uS2lja01lbWJlcnNSZXM+PlxuICAgICAqL1xuICAgIGtpY2tNZW1iZXJzOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLktpY2tNZW1iZXJzUmVxLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLktpY2tNZW1iZXJzUmVzPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvcHJvdG8ucHViLnYxLmdyb3VwLkdyb3VwU2VydmljZS9LaWNrTWVtYmVycycsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLktpY2tNZW1iZXJzUmVxLFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uS2lja01lbWJlcnNSZXNcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL3Byb3RvLnB1Yi52MS5ncm91cC5Hcm91cFNlcnZpY2UvQmFuTWVtYmVyXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkJhbk1lbWJlclJlcz4+XG4gICAgICovXG4gICAgYmFuTWVtYmVyOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkJhbk1lbWJlclJlcSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5CYW5NZW1iZXJSZXM+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9wcm90by5wdWIudjEuZ3JvdXAuR3JvdXBTZXJ2aWNlL0Jhbk1lbWJlcicsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkJhbk1lbWJlclJlcSxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLkJhbk1lbWJlclJlc1xuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvcHJvdG8ucHViLnYxLmdyb3VwLkdyb3VwU2VydmljZS9VbmJhbk1lbWJlclxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5VbmJhbk1lbWJlclJlcz4+XG4gICAgICovXG4gICAgdW5iYW5NZW1iZXI6IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uVW5iYW5NZW1iZXJSZXEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uVW5iYW5NZW1iZXJSZXM+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9wcm90by5wdWIudjEuZ3JvdXAuR3JvdXBTZXJ2aWNlL1VuYmFuTWVtYmVyJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uVW5iYW5NZW1iZXJSZXEsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5VbmJhbk1lbWJlclJlc1xuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvcHJvdG8ucHViLnYxLmdyb3VwLkdyb3VwU2VydmljZS9HZXRNZW1iZXJzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkdldE1lbWJlcnNSZXM+PlxuICAgICAqL1xuICAgIGdldE1lbWJlcnM6IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uR2V0TWVtYmVyc1JlcSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5HZXRNZW1iZXJzUmVzPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvcHJvdG8ucHViLnYxLmdyb3VwLkdyb3VwU2VydmljZS9HZXRNZW1iZXJzJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uR2V0TWVtYmVyc1JlcSxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLkdldE1lbWJlcnNSZXNcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL3Byb3RvLnB1Yi52MS5ncm91cC5Hcm91cFNlcnZpY2UvSm9pbkdyb3VwXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkpvaW5Hcm91cFJlcz4+XG4gICAgICovXG4gICAgam9pbkdyb3VwOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkpvaW5Hcm91cFJlcSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5Kb2luR3JvdXBSZXM+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9wcm90by5wdWIudjEuZ3JvdXAuR3JvdXBTZXJ2aWNlL0pvaW5Hcm91cCcsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkpvaW5Hcm91cFJlcSxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLkpvaW5Hcm91cFJlc1xuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvcHJvdG8ucHViLnYxLmdyb3VwLkdyb3VwU2VydmljZS9MZWF2ZUdyb3VwXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkxlYXZlR3JvdXBSZXM+PlxuICAgICAqL1xuICAgIGxlYXZlR3JvdXA6IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uTGVhdmVHcm91cFJlcSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5MZWF2ZUdyb3VwUmVzPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvcHJvdG8ucHViLnYxLmdyb3VwLkdyb3VwU2VydmljZS9MZWF2ZUdyb3VwJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uTGVhdmVHcm91cFJlcSxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLkxlYXZlR3JvdXBSZXNcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL3Byb3RvLnB1Yi52MS5ncm91cC5Hcm91cFNlcnZpY2UvQ3JlYXRlVG9rZW5cbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uQ3JlYXRlVG9rZW5SZXM+PlxuICAgICAqL1xuICAgIGNyZWF0ZVRva2VuOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkNyZWF0ZVRva2VuUmVxLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkNyZWF0ZVRva2VuUmVzPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvcHJvdG8ucHViLnYxLmdyb3VwLkdyb3VwU2VydmljZS9DcmVhdGVUb2tlbicsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkNyZWF0ZVRva2VuUmVxLFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uQ3JlYXRlVG9rZW5SZXNcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL3Byb3RvLnB1Yi52MS5ncm91cC5Hcm91cFNlcnZpY2UvRGVsZXRlVG9rZW5cbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uRGVsZXRlVG9rZW5SZXM+PlxuICAgICAqL1xuICAgIGRlbGV0ZVRva2VuOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkRlbGV0ZVRva2VuUmVxLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkRlbGV0ZVRva2VuUmVzPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvcHJvdG8ucHViLnYxLmdyb3VwLkdyb3VwU2VydmljZS9EZWxldGVUb2tlbicsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkRlbGV0ZVRva2VuUmVxLFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uRGVsZXRlVG9rZW5SZXNcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL3Byb3RvLnB1Yi52MS5ncm91cC5Hcm91cFNlcnZpY2UvUGluTWVzc2FnZVxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5QaW5NZXNzYWdlUmVzPj5cbiAgICAgKi9cbiAgICBwaW5NZXNzYWdlOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLlBpbk1lc3NhZ2VSZXEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uUGluTWVzc2FnZVJlcz4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL3Byb3RvLnB1Yi52MS5ncm91cC5Hcm91cFNlcnZpY2UvUGluTWVzc2FnZScsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLlBpbk1lc3NhZ2VSZXEsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5QaW5NZXNzYWdlUmVzXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9wcm90by5wdWIudjEuZ3JvdXAuR3JvdXBTZXJ2aWNlL1VucGluTWVzc2FnZVxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5VbnBpbk1lc3NhZ2VSZXM+PlxuICAgICAqL1xuICAgIHVucGluTWVzc2FnZTogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5VbnBpbk1lc3NhZ2VSZXEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uVW5waW5NZXNzYWdlUmVzPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvcHJvdG8ucHViLnYxLmdyb3VwLkdyb3VwU2VydmljZS9VbnBpbk1lc3NhZ2UnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5VbnBpbk1lc3NhZ2VSZXEsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5VbnBpbk1lc3NhZ2VSZXNcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KEdSUENfR1JPVVBfU0VSVklDRV9DTElFTlRfU0VUVElOR1MpIHNldHRpbmdzOiBhbnksXG4gICAgQEluamVjdChHUlBDX0NMSUVOVF9GQUNUT1JZKSBjbGllbnRGYWN0b3J5OiBHcnBjQ2xpZW50RmFjdG9yeTxhbnk+LFxuICAgIHByaXZhdGUgaGFuZGxlcjogR3JwY0hhbmRsZXJcbiAgKSB7XG4gICAgdGhpcy5jbGllbnQgPSBjbGllbnRGYWN0b3J5LmNyZWF0ZUNsaWVudChcbiAgICAgICdwcm90by5wdWIudjEuZ3JvdXAuR3JvdXBTZXJ2aWNlJyxcbiAgICAgIHNldHRpbmdzXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvcHJvdG8ucHViLnYxLmdyb3VwLkdyb3VwU2VydmljZS9DcmVhdGVHcm91cFxuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5DcmVhdGVHcm91cFJlcz5cbiAgICovXG4gIGNyZWF0ZUdyb3VwKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uQ3JlYXRlR3JvdXBSZXEsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLkNyZWF0ZUdyb3VwUmVzPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmNyZWF0ZUdyb3VwKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL3Byb3RvLnB1Yi52MS5ncm91cC5Hcm91cFNlcnZpY2UvTW9kaWZ5R3JvdXBcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uTW9kaWZ5R3JvdXBSZXM+XG4gICAqL1xuICBtb2RpZnlHcm91cChcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLk1vZGlmeUdyb3VwUmVxLFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5Nb2RpZnlHcm91cFJlcz4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5tb2RpZnlHcm91cChyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9wcm90by5wdWIudjEuZ3JvdXAuR3JvdXBTZXJ2aWNlL0dldEdyb3VwXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLkdldEdyb3VwUmVzPlxuICAgKi9cbiAgZ2V0R3JvdXAoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5HZXRHcm91cFJlcSxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uR2V0R3JvdXBSZXM+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAuZ2V0R3JvdXAocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvcHJvdG8ucHViLnYxLmdyb3VwLkdyb3VwU2VydmljZS9DaGFuZ2VSb2xlXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLkNoYW5nZVJvbGVSZXM+XG4gICAqL1xuICBjaGFuZ2VSb2xlKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uQ2hhbmdlUm9sZVJlcSxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uQ2hhbmdlUm9sZVJlcz4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5jaGFuZ2VSb2xlKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL3Byb3RvLnB1Yi52MS5ncm91cC5Hcm91cFNlcnZpY2UvUmVtb3ZlR3JvdXBcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uUmVtb3ZlR3JvdXBSZXM+XG4gICAqL1xuICByZW1vdmVHcm91cChcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLlJlbW92ZUdyb3VwUmVxLFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5SZW1vdmVHcm91cFJlcz4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5yZW1vdmVHcm91cChyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9wcm90by5wdWIudjEuZ3JvdXAuR3JvdXBTZXJ2aWNlL0FkZE1lbWJlcnNcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uQWRkTWVtYmVyc1Jlcz5cbiAgICovXG4gIGFkZE1lbWJlcnMoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5BZGRNZW1iZXJzUmVxLFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5BZGRNZW1iZXJzUmVzPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmFkZE1lbWJlcnMocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvcHJvdG8ucHViLnYxLmdyb3VwLkdyb3VwU2VydmljZS9LaWNrTWVtYmVyc1xuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5LaWNrTWVtYmVyc1Jlcz5cbiAgICovXG4gIGtpY2tNZW1iZXJzKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uS2lja01lbWJlcnNSZXEsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLktpY2tNZW1iZXJzUmVzPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmtpY2tNZW1iZXJzKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL3Byb3RvLnB1Yi52MS5ncm91cC5Hcm91cFNlcnZpY2UvQmFuTWVtYmVyXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLkJhbk1lbWJlclJlcz5cbiAgICovXG4gIGJhbk1lbWJlcihcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkJhbk1lbWJlclJlcSxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uQmFuTWVtYmVyUmVzPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmJhbk1lbWJlcihyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9wcm90by5wdWIudjEuZ3JvdXAuR3JvdXBTZXJ2aWNlL1VuYmFuTWVtYmVyXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLlVuYmFuTWVtYmVyUmVzPlxuICAgKi9cbiAgdW5iYW5NZW1iZXIoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5VbmJhbk1lbWJlclJlcSxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uVW5iYW5NZW1iZXJSZXM+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAudW5iYW5NZW1iZXIocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvcHJvdG8ucHViLnYxLmdyb3VwLkdyb3VwU2VydmljZS9HZXRNZW1iZXJzXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLkdldE1lbWJlcnNSZXM+XG4gICAqL1xuICBnZXRNZW1iZXJzKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uR2V0TWVtYmVyc1JlcSxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uR2V0TWVtYmVyc1Jlcz4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5nZXRNZW1iZXJzKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL3Byb3RvLnB1Yi52MS5ncm91cC5Hcm91cFNlcnZpY2UvSm9pbkdyb3VwXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLkpvaW5Hcm91cFJlcz5cbiAgICovXG4gIGpvaW5Hcm91cChcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkpvaW5Hcm91cFJlcSxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uSm9pbkdyb3VwUmVzPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmpvaW5Hcm91cChyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9wcm90by5wdWIudjEuZ3JvdXAuR3JvdXBTZXJ2aWNlL0xlYXZlR3JvdXBcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uTGVhdmVHcm91cFJlcz5cbiAgICovXG4gIGxlYXZlR3JvdXAoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5MZWF2ZUdyb3VwUmVxLFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5MZWF2ZUdyb3VwUmVzPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmxlYXZlR3JvdXAocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvcHJvdG8ucHViLnYxLmdyb3VwLkdyb3VwU2VydmljZS9DcmVhdGVUb2tlblxuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5DcmVhdGVUb2tlblJlcz5cbiAgICovXG4gIGNyZWF0ZVRva2VuKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uQ3JlYXRlVG9rZW5SZXEsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLkNyZWF0ZVRva2VuUmVzPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmNyZWF0ZVRva2VuKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL3Byb3RvLnB1Yi52MS5ncm91cC5Hcm91cFNlcnZpY2UvRGVsZXRlVG9rZW5cbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uRGVsZXRlVG9rZW5SZXM+XG4gICAqL1xuICBkZWxldGVUb2tlbihcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkRlbGV0ZVRva2VuUmVxLFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5EZWxldGVUb2tlblJlcz4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5kZWxldGVUb2tlbihyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9wcm90by5wdWIudjEuZ3JvdXAuR3JvdXBTZXJ2aWNlL1Bpbk1lc3NhZ2VcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uUGluTWVzc2FnZVJlcz5cbiAgICovXG4gIHBpbk1lc3NhZ2UoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5QaW5NZXNzYWdlUmVxLFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5QaW5NZXNzYWdlUmVzPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLnBpbk1lc3NhZ2UocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvcHJvdG8ucHViLnYxLmdyb3VwLkdyb3VwU2VydmljZS9VbnBpbk1lc3NhZ2VcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uVW5waW5NZXNzYWdlUmVzPlxuICAgKi9cbiAgdW5waW5NZXNzYWdlKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uVW5waW5NZXNzYWdlUmVxLFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5VbnBpbk1lc3NhZ2VSZXM+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAudW5waW5NZXNzYWdlKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cbn1cbiJdfQ==