import { GrpcClientFactory, GrpcEvent, GrpcMetadata } from '@ngx-grpc/common';
import { GrpcHandler } from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './channel.pb';
import * as i0 from "@angular/core";
/**
 * Service client implementation for proto.pub.v1.channel.ChannelService
 */
export declare class ChannelServiceClient {
    private handler;
    private client;
    /**
     * Raw RPC implementation for each service client method.
     * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
     * Attention: these methods do not throw errors when non-zero status codes are received.
     */
    $raw: {
        /**
         * Unary call: /proto.pub.v1.channel.ChannelService/CreateChannel
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.CreateChannelRes>>
         */
        createChannel: (requestData: thisProto.CreateChannelReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.CreateChannelRes>>;
        /**
         * Unary call: /proto.pub.v1.channel.ChannelService/GetChannel
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.GetChannelRes>>
         */
        getChannel: (requestData: thisProto.GetChannelReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.GetChannelRes>>;
        /**
         * Unary call: /proto.pub.v1.channel.ChannelService/ModifyChannel
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ModifyChannelRes>>
         */
        modifyChannel: (requestData: thisProto.ModifyChannelReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ModifyChannelRes>>;
        /**
         * Unary call: /proto.pub.v1.channel.ChannelService/ChangeRole
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ChangeRoleRes>>
         */
        changeRole: (requestData: thisProto.ChangeRoleReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ChangeRoleRes>>;
        /**
         * Unary call: /proto.pub.v1.channel.ChannelService/RemoveChannel
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.RemoveChannelRes>>
         */
        removeChannel: (requestData: thisProto.RemoveChannelReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.RemoveChannelRes>>;
        /**
         * Unary call: /proto.pub.v1.channel.ChannelService/AddMembers
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.AddMembersRes>>
         */
        addMembers: (requestData: thisProto.AddMembersReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.AddMembersRes>>;
        /**
         * Unary call: /proto.pub.v1.channel.ChannelService/KickMembers
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.KickMembersRes>>
         */
        kickMembers: (requestData: thisProto.KickMembersReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.KickMembersRes>>;
        /**
         * Unary call: /proto.pub.v1.channel.ChannelService/BanMember
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.BanMemberRes>>
         */
        banMember: (requestData: thisProto.BanMemberReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.BanMemberRes>>;
        /**
         * Unary call: /proto.pub.v1.channel.ChannelService/UnbanMember
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.UnbanMemberRes>>
         */
        unbanMember: (requestData: thisProto.UnbanMemberReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.UnbanMemberRes>>;
        /**
         * Unary call: /proto.pub.v1.channel.ChannelService/GetMembers
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.GetMembersRes>>
         */
        getMembers: (requestData: thisProto.GetMembersReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.GetMembersRes>>;
        /**
         * Unary call: /proto.pub.v1.channel.ChannelService/JoinChannel
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.JoinChannelRes>>
         */
        joinChannel: (requestData: thisProto.JoinChannelReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.JoinChannelRes>>;
        /**
         * Unary call: /proto.pub.v1.channel.ChannelService/LeaveChannel
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.LeaveChannelRes>>
         */
        leaveChannel: (requestData: thisProto.LeaveChannelReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.LeaveChannelRes>>;
        /**
         * Unary call: /proto.pub.v1.channel.ChannelService/CreateToken
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.CreateTokenRes>>
         */
        createToken: (requestData: thisProto.CreateTokenReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.CreateTokenRes>>;
        /**
         * Unary call: /proto.pub.v1.channel.ChannelService/DeleteToken
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.DeleteTokenRes>>
         */
        deleteToken: (requestData: thisProto.DeleteTokenReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.DeleteTokenRes>>;
        /**
         * Unary call: /proto.pub.v1.channel.ChannelService/PinMessage
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.PinMessageRes>>
         */
        pinMessage: (requestData: thisProto.PinMessageReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.PinMessageRes>>;
        /**
         * Unary call: /proto.pub.v1.channel.ChannelService/UnpinMessage
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.UnpinMessageRes>>
         */
        unpinMessage: (requestData: thisProto.UnpinMessageReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.UnpinMessageRes>>;
    };
    constructor(settings: any, clientFactory: GrpcClientFactory<any>, handler: GrpcHandler);
    /**
     * Unary call @/proto.pub.v1.channel.ChannelService/CreateChannel
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.CreateChannelRes>
     */
    createChannel(requestData: thisProto.CreateChannelReq, requestMetadata?: GrpcMetadata): Observable<thisProto.CreateChannelRes>;
    /**
     * Unary call @/proto.pub.v1.channel.ChannelService/GetChannel
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetChannelRes>
     */
    getChannel(requestData: thisProto.GetChannelReq, requestMetadata?: GrpcMetadata): Observable<thisProto.GetChannelRes>;
    /**
     * Unary call @/proto.pub.v1.channel.ChannelService/ModifyChannel
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ModifyChannelRes>
     */
    modifyChannel(requestData: thisProto.ModifyChannelReq, requestMetadata?: GrpcMetadata): Observable<thisProto.ModifyChannelRes>;
    /**
     * Unary call @/proto.pub.v1.channel.ChannelService/ChangeRole
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ChangeRoleRes>
     */
    changeRole(requestData: thisProto.ChangeRoleReq, requestMetadata?: GrpcMetadata): Observable<thisProto.ChangeRoleRes>;
    /**
     * Unary call @/proto.pub.v1.channel.ChannelService/RemoveChannel
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.RemoveChannelRes>
     */
    removeChannel(requestData: thisProto.RemoveChannelReq, requestMetadata?: GrpcMetadata): Observable<thisProto.RemoveChannelRes>;
    /**
     * Unary call @/proto.pub.v1.channel.ChannelService/AddMembers
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.AddMembersRes>
     */
    addMembers(requestData: thisProto.AddMembersReq, requestMetadata?: GrpcMetadata): Observable<thisProto.AddMembersRes>;
    /**
     * Unary call @/proto.pub.v1.channel.ChannelService/KickMembers
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.KickMembersRes>
     */
    kickMembers(requestData: thisProto.KickMembersReq, requestMetadata?: GrpcMetadata): Observable<thisProto.KickMembersRes>;
    /**
     * Unary call @/proto.pub.v1.channel.ChannelService/BanMember
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.BanMemberRes>
     */
    banMember(requestData: thisProto.BanMemberReq, requestMetadata?: GrpcMetadata): Observable<thisProto.BanMemberRes>;
    /**
     * Unary call @/proto.pub.v1.channel.ChannelService/UnbanMember
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.UnbanMemberRes>
     */
    unbanMember(requestData: thisProto.UnbanMemberReq, requestMetadata?: GrpcMetadata): Observable<thisProto.UnbanMemberRes>;
    /**
     * Unary call @/proto.pub.v1.channel.ChannelService/GetMembers
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetMembersRes>
     */
    getMembers(requestData: thisProto.GetMembersReq, requestMetadata?: GrpcMetadata): Observable<thisProto.GetMembersRes>;
    /**
     * Unary call @/proto.pub.v1.channel.ChannelService/JoinChannel
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.JoinChannelRes>
     */
    joinChannel(requestData: thisProto.JoinChannelReq, requestMetadata?: GrpcMetadata): Observable<thisProto.JoinChannelRes>;
    /**
     * Unary call @/proto.pub.v1.channel.ChannelService/LeaveChannel
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.LeaveChannelRes>
     */
    leaveChannel(requestData: thisProto.LeaveChannelReq, requestMetadata?: GrpcMetadata): Observable<thisProto.LeaveChannelRes>;
    /**
     * Unary call @/proto.pub.v1.channel.ChannelService/CreateToken
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.CreateTokenRes>
     */
    createToken(requestData: thisProto.CreateTokenReq, requestMetadata?: GrpcMetadata): Observable<thisProto.CreateTokenRes>;
    /**
     * Unary call @/proto.pub.v1.channel.ChannelService/DeleteToken
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.DeleteTokenRes>
     */
    deleteToken(requestData: thisProto.DeleteTokenReq, requestMetadata?: GrpcMetadata): Observable<thisProto.DeleteTokenRes>;
    /**
     * Unary call @/proto.pub.v1.channel.ChannelService/PinMessage
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.PinMessageRes>
     */
    pinMessage(requestData: thisProto.PinMessageReq, requestMetadata?: GrpcMetadata): Observable<thisProto.PinMessageRes>;
    /**
     * Unary call @/proto.pub.v1.channel.ChannelService/UnpinMessage
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.UnpinMessageRes>
     */
    unpinMessage(requestData: thisProto.UnpinMessageReq, requestMetadata?: GrpcMetadata): Observable<thisProto.UnpinMessageRes>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChannelServiceClient, [{ optional: true; }, null, null]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ChannelServiceClient>;
}
