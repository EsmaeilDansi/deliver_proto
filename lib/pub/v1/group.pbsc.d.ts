import { GrpcClientFactory, GrpcEvent, GrpcMetadata } from '@ngx-grpc/common';
import { GrpcHandler } from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './group.pb';
import * as i0 from "@angular/core";
/**
 * Service client implementation for proto.pub.v1.group.GroupService
 */
export declare class GroupServiceClient {
    private handler;
    private client;
    /**
     * Raw RPC implementation for each service client method.
     * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
     * Attention: these methods do not throw errors when non-zero status codes are received.
     */
    $raw: {
        /**
         * Unary call: /proto.pub.v1.group.GroupService/CreateGroup
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.CreateGroupRes>>
         */
        createGroup: (requestData: thisProto.CreateGroupReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.CreateGroupRes>>;
        /**
         * Unary call: /proto.pub.v1.group.GroupService/ModifyGroup
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ModifyGroupRes>>
         */
        modifyGroup: (requestData: thisProto.ModifyGroupReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ModifyGroupRes>>;
        /**
         * Unary call: /proto.pub.v1.group.GroupService/GetGroup
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.GetGroupRes>>
         */
        getGroup: (requestData: thisProto.GetGroupReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.GetGroupRes>>;
        /**
         * Unary call: /proto.pub.v1.group.GroupService/ChangeRole
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ChangeRoleRes>>
         */
        changeRole: (requestData: thisProto.ChangeRoleReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ChangeRoleRes>>;
        /**
         * Unary call: /proto.pub.v1.group.GroupService/RemoveGroup
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.RemoveGroupRes>>
         */
        removeGroup: (requestData: thisProto.RemoveGroupReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.RemoveGroupRes>>;
        /**
         * Unary call: /proto.pub.v1.group.GroupService/AddMembers
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.AddMembersRes>>
         */
        addMembers: (requestData: thisProto.AddMembersReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.AddMembersRes>>;
        /**
         * Unary call: /proto.pub.v1.group.GroupService/KickMembers
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.KickMembersRes>>
         */
        kickMembers: (requestData: thisProto.KickMembersReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.KickMembersRes>>;
        /**
         * Unary call: /proto.pub.v1.group.GroupService/BanMember
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.BanMemberRes>>
         */
        banMember: (requestData: thisProto.BanMemberReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.BanMemberRes>>;
        /**
         * Unary call: /proto.pub.v1.group.GroupService/UnbanMember
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.UnbanMemberRes>>
         */
        unbanMember: (requestData: thisProto.UnbanMemberReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.UnbanMemberRes>>;
        /**
         * Unary call: /proto.pub.v1.group.GroupService/GetMembers
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.GetMembersRes>>
         */
        getMembers: (requestData: thisProto.GetMembersReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.GetMembersRes>>;
        /**
         * Unary call: /proto.pub.v1.group.GroupService/JoinGroup
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.JoinGroupRes>>
         */
        joinGroup: (requestData: thisProto.JoinGroupReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.JoinGroupRes>>;
        /**
         * Unary call: /proto.pub.v1.group.GroupService/LeaveGroup
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.LeaveGroupRes>>
         */
        leaveGroup: (requestData: thisProto.LeaveGroupReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.LeaveGroupRes>>;
        /**
         * Unary call: /proto.pub.v1.group.GroupService/CreateToken
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.CreateTokenRes>>
         */
        createToken: (requestData: thisProto.CreateTokenReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.CreateTokenRes>>;
        /**
         * Unary call: /proto.pub.v1.group.GroupService/DeleteToken
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.DeleteTokenRes>>
         */
        deleteToken: (requestData: thisProto.DeleteTokenReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.DeleteTokenRes>>;
        /**
         * Unary call: /proto.pub.v1.group.GroupService/PinMessage
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.PinMessageRes>>
         */
        pinMessage: (requestData: thisProto.PinMessageReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.PinMessageRes>>;
        /**
         * Unary call: /proto.pub.v1.group.GroupService/UnpinMessage
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.UnpinMessageRes>>
         */
        unpinMessage: (requestData: thisProto.UnpinMessageReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.UnpinMessageRes>>;
    };
    constructor(settings: any, clientFactory: GrpcClientFactory<any>, handler: GrpcHandler);
    /**
     * Unary call @/proto.pub.v1.group.GroupService/CreateGroup
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.CreateGroupRes>
     */
    createGroup(requestData: thisProto.CreateGroupReq, requestMetadata?: GrpcMetadata): Observable<thisProto.CreateGroupRes>;
    /**
     * Unary call @/proto.pub.v1.group.GroupService/ModifyGroup
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ModifyGroupRes>
     */
    modifyGroup(requestData: thisProto.ModifyGroupReq, requestMetadata?: GrpcMetadata): Observable<thisProto.ModifyGroupRes>;
    /**
     * Unary call @/proto.pub.v1.group.GroupService/GetGroup
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetGroupRes>
     */
    getGroup(requestData: thisProto.GetGroupReq, requestMetadata?: GrpcMetadata): Observable<thisProto.GetGroupRes>;
    /**
     * Unary call @/proto.pub.v1.group.GroupService/ChangeRole
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ChangeRoleRes>
     */
    changeRole(requestData: thisProto.ChangeRoleReq, requestMetadata?: GrpcMetadata): Observable<thisProto.ChangeRoleRes>;
    /**
     * Unary call @/proto.pub.v1.group.GroupService/RemoveGroup
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.RemoveGroupRes>
     */
    removeGroup(requestData: thisProto.RemoveGroupReq, requestMetadata?: GrpcMetadata): Observable<thisProto.RemoveGroupRes>;
    /**
     * Unary call @/proto.pub.v1.group.GroupService/AddMembers
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.AddMembersRes>
     */
    addMembers(requestData: thisProto.AddMembersReq, requestMetadata?: GrpcMetadata): Observable<thisProto.AddMembersRes>;
    /**
     * Unary call @/proto.pub.v1.group.GroupService/KickMembers
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.KickMembersRes>
     */
    kickMembers(requestData: thisProto.KickMembersReq, requestMetadata?: GrpcMetadata): Observable<thisProto.KickMembersRes>;
    /**
     * Unary call @/proto.pub.v1.group.GroupService/BanMember
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.BanMemberRes>
     */
    banMember(requestData: thisProto.BanMemberReq, requestMetadata?: GrpcMetadata): Observable<thisProto.BanMemberRes>;
    /**
     * Unary call @/proto.pub.v1.group.GroupService/UnbanMember
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.UnbanMemberRes>
     */
    unbanMember(requestData: thisProto.UnbanMemberReq, requestMetadata?: GrpcMetadata): Observable<thisProto.UnbanMemberRes>;
    /**
     * Unary call @/proto.pub.v1.group.GroupService/GetMembers
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetMembersRes>
     */
    getMembers(requestData: thisProto.GetMembersReq, requestMetadata?: GrpcMetadata): Observable<thisProto.GetMembersRes>;
    /**
     * Unary call @/proto.pub.v1.group.GroupService/JoinGroup
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.JoinGroupRes>
     */
    joinGroup(requestData: thisProto.JoinGroupReq, requestMetadata?: GrpcMetadata): Observable<thisProto.JoinGroupRes>;
    /**
     * Unary call @/proto.pub.v1.group.GroupService/LeaveGroup
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.LeaveGroupRes>
     */
    leaveGroup(requestData: thisProto.LeaveGroupReq, requestMetadata?: GrpcMetadata): Observable<thisProto.LeaveGroupRes>;
    /**
     * Unary call @/proto.pub.v1.group.GroupService/CreateToken
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.CreateTokenRes>
     */
    createToken(requestData: thisProto.CreateTokenReq, requestMetadata?: GrpcMetadata): Observable<thisProto.CreateTokenRes>;
    /**
     * Unary call @/proto.pub.v1.group.GroupService/DeleteToken
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.DeleteTokenRes>
     */
    deleteToken(requestData: thisProto.DeleteTokenReq, requestMetadata?: GrpcMetadata): Observable<thisProto.DeleteTokenRes>;
    /**
     * Unary call @/proto.pub.v1.group.GroupService/PinMessage
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.PinMessageRes>
     */
    pinMessage(requestData: thisProto.PinMessageReq, requestMetadata?: GrpcMetadata): Observable<thisProto.PinMessageRes>;
    /**
     * Unary call @/proto.pub.v1.group.GroupService/UnpinMessage
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.UnpinMessageRes>
     */
    unpinMessage(requestData: thisProto.UnpinMessageReq, requestMetadata?: GrpcMetadata): Observable<thisProto.UnpinMessageRes>;
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupServiceClient, [{ optional: true; }, null, null]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<GroupServiceClient>;
}
