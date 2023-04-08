import { GrpcClientFactory, GrpcEvent, GrpcMetadata } from '@ngx-grpc/common';
import { GrpcHandler } from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './query.pb';
import * as i0 from "@angular/core";
/**
 * Service client implementation for proto.pub.v1.query.QueryService
 */
export declare class QueryServiceClient {
    private handler;
    private client;
    /**
     * Raw RPC implementation for each service client method.
     * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
     * Attention: these methods do not throw errors when non-zero status codes are received.
     */
    $raw: {
        /**
         * Unary call: /proto.pub.v1.query.QueryService/GetTime
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.GetTimeRes>>
         */
        getTime: (requestData: thisProto.GetTimeReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.GetTimeRes>>;
        /**
         * Unary call: /proto.pub.v1.query.QueryService/IdIsAvailable
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.IdIsAvailableRes>>
         */
        idIsAvailable: (requestData: thisProto.IdIsAvailableReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.IdIsAvailableRes>>;
        /**
         * Unary call: /proto.pub.v1.query.QueryService/SetId
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.SetIdRes>>
         */
        setId: (requestData: thisProto.SetIdReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.SetIdRes>>;
        /**
         * Unary call: /proto.pub.v1.query.QueryService/BlockUid
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.BlockUidRes>>
         */
        blockUid: (requestData: thisProto.BlockUidReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.BlockUidRes>>;
        /**
         * Unary call: /proto.pub.v1.query.QueryService/UnblockUid
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.UnblockUidRes>>
         */
        unblockUid: (requestData: thisProto.UnblockUidReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.UnblockUidRes>>;
        /**
         * Unary call: /proto.pub.v1.query.QueryService/Report
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ReportRes>>
         */
        report: (requestData: thisProto.ReportReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ReportRes>>;
        /**
         * Unary call: /proto.pub.v1.query.QueryService/GetBlockedList
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.GetBlockedListRes>>
         */
        getBlockedList: (requestData: thisProto.GetBlockedListReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.GetBlockedListRes>>;
        /**
         * Unary call: /proto.pub.v1.query.QueryService/GetIdByUid
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.GetIdByUidRes>>
         */
        getIdByUid: (requestData: thisProto.GetIdByUidReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.GetIdByUidRes>>;
        /**
         * Unary call: /proto.pub.v1.query.QueryService/GetUidById
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.GetUidByIdRes>>
         */
        getUidById: (requestData: thisProto.GetUidByIdReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.GetUidByIdRes>>;
        /**
         * Unary call: /proto.pub.v1.query.QueryService/SearchUid
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.SearchUidRes>>
         */
        searchUid: (requestData: thisProto.SearchUidReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.SearchUidRes>>;
        /**
         * Unary call: /proto.pub.v1.query.QueryService/GetLastActivity
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.GetLastActivityRes>>
         */
        getLastActivity: (requestData: thisProto.GetLastActivityReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.GetLastActivityRes>>;
        /**
         * Unary call: /proto.pub.v1.query.QueryService/FetchMessages
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.FetchMessagesRes>>
         */
        fetchMessages: (requestData: thisProto.FetchMessagesReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.FetchMessagesRes>>;
        /**
         * Unary call: /proto.pub.v1.query.QueryService/CountIsHiddenMessages
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.CountIsHiddenMessagesRes>>
         */
        countIsHiddenMessages: (requestData: thisProto.CountIsHiddenMessagesReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.CountIsHiddenMessagesRes>>;
        /**
         * Unary call: /proto.pub.v1.query.QueryService/GetAllUserRoomMeta
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.GetAllUserRoomMetaRes>>
         */
        getAllUserRoomMeta: (requestData: thisProto.GetAllUserRoomMetaReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.GetAllUserRoomMetaRes>>;
        /**
         * Unary call: /proto.pub.v1.query.QueryService/GetUserRoomMeta
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.GetUserRoomMetaRes>>
         */
        getUserRoomMeta: (requestData: thisProto.GetUserRoomMetaReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.GetUserRoomMetaRes>>;
        /**
         * Unary call: /proto.pub.v1.query.QueryService/GetUserLastDeliveryAck
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.GetUserLastDeliveryAckRes>>
         */
        getUserLastDeliveryAck: (requestData: thisProto.GetUserLastDeliveryAckReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.GetUserLastDeliveryAckRes>>;
        /**
         * Unary call: /proto.pub.v1.query.QueryService/GetMediaMetadata
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.GetMediaMetadataRes>>
         */
        getMediaMetadata: (requestData: thisProto.GetMediaMetadataReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.GetMediaMetadataRes>>;
        /**
         * Unary call: /proto.pub.v1.query.QueryService/FetchMedias
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.FetchMediasRes>>
         */
        fetchMedias: (requestData: thisProto.FetchMediasReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.FetchMediasRes>>;
        /**
         * Unary call: /proto.pub.v1.query.QueryService/GetMetaCounts
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.GetMetaCountsRes>>
         */
        getMetaCounts: (requestData: thisProto.GetMetaCountsReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.GetMetaCountsRes>>;
        /**
         * Unary call: /proto.pub.v1.query.QueryService/FetchMetaList
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.FetchMetaListRes>>
         */
        fetchMetaList: (requestData: thisProto.FetchMetaListReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.FetchMetaListRes>>;
        /**
         * Unary call: /proto.pub.v1.query.QueryService/FetchMessageMetaIndex
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.FetchMessageMetaIndexRes>>
         */
        fetchMessageMetaIndex: (requestData: thisProto.FetchMessageMetaIndexReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.FetchMessageMetaIndexRes>>;
        /**
         * Unary call: /proto.pub.v1.query.QueryService/FetchMetaDeletedIndexes
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.FetchMetaDeletedIndexesRes>>
         */
        fetchMetaDeletedIndexes: (requestData: thisProto.FetchMetaDeletedIndexesReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.FetchMetaDeletedIndexesRes>>;
        /**
         * Unary call: /proto.pub.v1.query.QueryService/FetchMentionList
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.FetchMentionListRes>>
         */
        fetchMentionList: (requestData: thisProto.FetchMentionListReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.FetchMentionListRes>>;
        /**
         * Unary call: /proto.pub.v1.query.QueryService/FetchCurrentUserSeenData
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.FetchCurrentUserSeenDataRes>>
         */
        fetchCurrentUserSeenData: (requestData: thisProto.FetchCurrentUserSeenDataReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.FetchCurrentUserSeenDataRes>>;
        /**
         * Unary call: /proto.pub.v1.query.QueryService/FetchLastOtherUserSeenData
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.FetchLastOtherUserSeenDataRes>>
         */
        fetchLastOtherUserSeenData: (requestData: thisProto.FetchLastOtherUserSeenDataReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.FetchLastOtherUserSeenDataRes>>;
        /**
         * Unary call: /proto.pub.v1.query.QueryService/FetchSeenCountOfChannelMessage
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.FetchSeenCountOfChannelMessageRes>>
         */
        fetchSeenCountOfChannelMessage: (requestData: thisProto.FetchSeenCountOfChannelMessageReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.FetchSeenCountOfChannelMessageRes>>;
        /**
         * Unary call: /proto.pub.v1.query.QueryService/FetchUserCalls
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.FetchUserCallsRes>>
         */
        fetchUserCalls: (requestData: thisProto.FetchUserCallsReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.FetchUserCallsRes>>;
        /**
         * Unary call: /proto.pub.v1.query.QueryService/UpdateMessage
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.UpdateMessageRes>>
         */
        updateMessage: (requestData: thisProto.UpdateMessageReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.UpdateMessageRes>>;
        /**
         * Unary call: /proto.pub.v1.query.QueryService/DeleteMessage
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.DeleteMessageRes>>
         */
        deleteMessage: (requestData: thisProto.DeleteMessageReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.DeleteMessageRes>>;
        /**
         * Unary call: /proto.pub.v1.query.QueryService/ForwardMessages
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ForwardMessagesRes>>
         */
        forwardMessages: (requestData: thisProto.ForwardMessagesReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ForwardMessagesRes>>;
        /**
         * Unary call: /proto.pub.v1.query.QueryService/AddAvatar
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.AddAvatarRes>>
         */
        addAvatar: (requestData: thisProto.AddAvatarReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.AddAvatarRes>>;
        /**
         * Unary call: /proto.pub.v1.query.QueryService/RemoveAvatar
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.RemoveAvatarRes>>
         */
        removeAvatar: (requestData: thisProto.RemoveAvatarReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.RemoveAvatarRes>>;
        /**
         * Unary call: /proto.pub.v1.query.QueryService/RemovePrivateRoom
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.RemovePrivateRoomRes>>
         */
        removePrivateRoom: (requestData: thisProto.RemovePrivateRoomReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.RemovePrivateRoomRes>>;
        /**
         * Unary call: /proto.pub.v1.query.QueryService/SearchInMessages
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.SearchInMessagesRes>>
         */
        searchInMessages: (requestData: thisProto.SearchInMessagesReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.SearchInMessagesRes>>;
        /**
         * Unary call: /proto.pub.v1.query.QueryService/SendGlitch
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.SendGlitchRes>>
         */
        sendGlitch: (requestData: thisProto.SendGlitchReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.SendGlitchRes>>;
        /**
         * Unary call: /proto.pub.v1.query.QueryService/CreateGroupCall
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.CreateGroupCallRes>>
         */
        createGroupCall: (requestData: thisProto.CreateGroupCallReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.CreateGroupCallRes>>;
        /**
         * Unary call: /proto.pub.v1.query.QueryService/EndGroupCall
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.EndGroupCallRes>>
         */
        endGroupCall: (requestData: thisProto.EndGroupCallReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.EndGroupCallRes>>;
    };
    constructor(settings: any, clientFactory: GrpcClientFactory<any>, handler: GrpcHandler);
    /**
     * Unary call @/proto.pub.v1.query.QueryService/GetTime
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetTimeRes>
     */
    getTime(requestData: thisProto.GetTimeReq, requestMetadata?: GrpcMetadata): Observable<thisProto.GetTimeRes>;
    /**
     * Unary call @/proto.pub.v1.query.QueryService/IdIsAvailable
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.IdIsAvailableRes>
     */
    idIsAvailable(requestData: thisProto.IdIsAvailableReq, requestMetadata?: GrpcMetadata): Observable<thisProto.IdIsAvailableRes>;
    /**
     * Unary call @/proto.pub.v1.query.QueryService/SetId
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.SetIdRes>
     */
    setId(requestData: thisProto.SetIdReq, requestMetadata?: GrpcMetadata): Observable<thisProto.SetIdRes>;
    /**
     * Unary call @/proto.pub.v1.query.QueryService/BlockUid
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.BlockUidRes>
     */
    blockUid(requestData: thisProto.BlockUidReq, requestMetadata?: GrpcMetadata): Observable<thisProto.BlockUidRes>;
    /**
     * Unary call @/proto.pub.v1.query.QueryService/UnblockUid
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.UnblockUidRes>
     */
    unblockUid(requestData: thisProto.UnblockUidReq, requestMetadata?: GrpcMetadata): Observable<thisProto.UnblockUidRes>;
    /**
     * Unary call @/proto.pub.v1.query.QueryService/Report
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ReportRes>
     */
    report(requestData: thisProto.ReportReq, requestMetadata?: GrpcMetadata): Observable<thisProto.ReportRes>;
    /**
     * Unary call @/proto.pub.v1.query.QueryService/GetBlockedList
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetBlockedListRes>
     */
    getBlockedList(requestData: thisProto.GetBlockedListReq, requestMetadata?: GrpcMetadata): Observable<thisProto.GetBlockedListRes>;
    /**
     * Unary call @/proto.pub.v1.query.QueryService/GetIdByUid
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetIdByUidRes>
     */
    getIdByUid(requestData: thisProto.GetIdByUidReq, requestMetadata?: GrpcMetadata): Observable<thisProto.GetIdByUidRes>;
    /**
     * Unary call @/proto.pub.v1.query.QueryService/GetUidById
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetUidByIdRes>
     */
    getUidById(requestData: thisProto.GetUidByIdReq, requestMetadata?: GrpcMetadata): Observable<thisProto.GetUidByIdRes>;
    /**
     * Unary call @/proto.pub.v1.query.QueryService/SearchUid
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.SearchUidRes>
     */
    searchUid(requestData: thisProto.SearchUidReq, requestMetadata?: GrpcMetadata): Observable<thisProto.SearchUidRes>;
    /**
     * Unary call @/proto.pub.v1.query.QueryService/GetLastActivity
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetLastActivityRes>
     */
    getLastActivity(requestData: thisProto.GetLastActivityReq, requestMetadata?: GrpcMetadata): Observable<thisProto.GetLastActivityRes>;
    /**
     * Unary call @/proto.pub.v1.query.QueryService/FetchMessages
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.FetchMessagesRes>
     */
    fetchMessages(requestData: thisProto.FetchMessagesReq, requestMetadata?: GrpcMetadata): Observable<thisProto.FetchMessagesRes>;
    /**
     * Unary call @/proto.pub.v1.query.QueryService/CountIsHiddenMessages
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.CountIsHiddenMessagesRes>
     */
    countIsHiddenMessages(requestData: thisProto.CountIsHiddenMessagesReq, requestMetadata?: GrpcMetadata): Observable<thisProto.CountIsHiddenMessagesRes>;
    /**
     * Unary call @/proto.pub.v1.query.QueryService/GetAllUserRoomMeta
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetAllUserRoomMetaRes>
     */
    getAllUserRoomMeta(requestData: thisProto.GetAllUserRoomMetaReq, requestMetadata?: GrpcMetadata): Observable<thisProto.GetAllUserRoomMetaRes>;
    /**
     * Unary call @/proto.pub.v1.query.QueryService/GetUserRoomMeta
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetUserRoomMetaRes>
     */
    getUserRoomMeta(requestData: thisProto.GetUserRoomMetaReq, requestMetadata?: GrpcMetadata): Observable<thisProto.GetUserRoomMetaRes>;
    /**
     * Unary call @/proto.pub.v1.query.QueryService/GetUserLastDeliveryAck
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetUserLastDeliveryAckRes>
     */
    getUserLastDeliveryAck(requestData: thisProto.GetUserLastDeliveryAckReq, requestMetadata?: GrpcMetadata): Observable<thisProto.GetUserLastDeliveryAckRes>;
    /**
     * Unary call @/proto.pub.v1.query.QueryService/GetMediaMetadata
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetMediaMetadataRes>
     */
    getMediaMetadata(requestData: thisProto.GetMediaMetadataReq, requestMetadata?: GrpcMetadata): Observable<thisProto.GetMediaMetadataRes>;
    /**
     * Unary call @/proto.pub.v1.query.QueryService/FetchMedias
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.FetchMediasRes>
     */
    fetchMedias(requestData: thisProto.FetchMediasReq, requestMetadata?: GrpcMetadata): Observable<thisProto.FetchMediasRes>;
    /**
     * Unary call @/proto.pub.v1.query.QueryService/GetMetaCounts
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetMetaCountsRes>
     */
    getMetaCounts(requestData: thisProto.GetMetaCountsReq, requestMetadata?: GrpcMetadata): Observable<thisProto.GetMetaCountsRes>;
    /**
     * Unary call @/proto.pub.v1.query.QueryService/FetchMetaList
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.FetchMetaListRes>
     */
    fetchMetaList(requestData: thisProto.FetchMetaListReq, requestMetadata?: GrpcMetadata): Observable<thisProto.FetchMetaListRes>;
    /**
     * Unary call @/proto.pub.v1.query.QueryService/FetchMessageMetaIndex
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.FetchMessageMetaIndexRes>
     */
    fetchMessageMetaIndex(requestData: thisProto.FetchMessageMetaIndexReq, requestMetadata?: GrpcMetadata): Observable<thisProto.FetchMessageMetaIndexRes>;
    /**
     * Unary call @/proto.pub.v1.query.QueryService/FetchMetaDeletedIndexes
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.FetchMetaDeletedIndexesRes>
     */
    fetchMetaDeletedIndexes(requestData: thisProto.FetchMetaDeletedIndexesReq, requestMetadata?: GrpcMetadata): Observable<thisProto.FetchMetaDeletedIndexesRes>;
    /**
     * Unary call @/proto.pub.v1.query.QueryService/FetchMentionList
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.FetchMentionListRes>
     */
    fetchMentionList(requestData: thisProto.FetchMentionListReq, requestMetadata?: GrpcMetadata): Observable<thisProto.FetchMentionListRes>;
    /**
     * Unary call @/proto.pub.v1.query.QueryService/FetchCurrentUserSeenData
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.FetchCurrentUserSeenDataRes>
     */
    fetchCurrentUserSeenData(requestData: thisProto.FetchCurrentUserSeenDataReq, requestMetadata?: GrpcMetadata): Observable<thisProto.FetchCurrentUserSeenDataRes>;
    /**
     * Unary call @/proto.pub.v1.query.QueryService/FetchLastOtherUserSeenData
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.FetchLastOtherUserSeenDataRes>
     */
    fetchLastOtherUserSeenData(requestData: thisProto.FetchLastOtherUserSeenDataReq, requestMetadata?: GrpcMetadata): Observable<thisProto.FetchLastOtherUserSeenDataRes>;
    /**
     * Unary call @/proto.pub.v1.query.QueryService/FetchSeenCountOfChannelMessage
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.FetchSeenCountOfChannelMessageRes>
     */
    fetchSeenCountOfChannelMessage(requestData: thisProto.FetchSeenCountOfChannelMessageReq, requestMetadata?: GrpcMetadata): Observable<thisProto.FetchSeenCountOfChannelMessageRes>;
    /**
     * Unary call @/proto.pub.v1.query.QueryService/FetchUserCalls
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.FetchUserCallsRes>
     */
    fetchUserCalls(requestData: thisProto.FetchUserCallsReq, requestMetadata?: GrpcMetadata): Observable<thisProto.FetchUserCallsRes>;
    /**
     * Unary call @/proto.pub.v1.query.QueryService/UpdateMessage
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.UpdateMessageRes>
     */
    updateMessage(requestData: thisProto.UpdateMessageReq, requestMetadata?: GrpcMetadata): Observable<thisProto.UpdateMessageRes>;
    /**
     * Unary call @/proto.pub.v1.query.QueryService/DeleteMessage
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.DeleteMessageRes>
     */
    deleteMessage(requestData: thisProto.DeleteMessageReq, requestMetadata?: GrpcMetadata): Observable<thisProto.DeleteMessageRes>;
    /**
     * Unary call @/proto.pub.v1.query.QueryService/ForwardMessages
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ForwardMessagesRes>
     */
    forwardMessages(requestData: thisProto.ForwardMessagesReq, requestMetadata?: GrpcMetadata): Observable<thisProto.ForwardMessagesRes>;
    /**
     * Unary call @/proto.pub.v1.query.QueryService/AddAvatar
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.AddAvatarRes>
     */
    addAvatar(requestData: thisProto.AddAvatarReq, requestMetadata?: GrpcMetadata): Observable<thisProto.AddAvatarRes>;
    /**
     * Unary call @/proto.pub.v1.query.QueryService/RemoveAvatar
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.RemoveAvatarRes>
     */
    removeAvatar(requestData: thisProto.RemoveAvatarReq, requestMetadata?: GrpcMetadata): Observable<thisProto.RemoveAvatarRes>;
    /**
     * Unary call @/proto.pub.v1.query.QueryService/RemovePrivateRoom
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.RemovePrivateRoomRes>
     */
    removePrivateRoom(requestData: thisProto.RemovePrivateRoomReq, requestMetadata?: GrpcMetadata): Observable<thisProto.RemovePrivateRoomRes>;
    /**
     * Unary call @/proto.pub.v1.query.QueryService/SearchInMessages
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.SearchInMessagesRes>
     */
    searchInMessages(requestData: thisProto.SearchInMessagesReq, requestMetadata?: GrpcMetadata): Observable<thisProto.SearchInMessagesRes>;
    /**
     * Unary call @/proto.pub.v1.query.QueryService/SendGlitch
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.SendGlitchRes>
     */
    sendGlitch(requestData: thisProto.SendGlitchReq, requestMetadata?: GrpcMetadata): Observable<thisProto.SendGlitchRes>;
    /**
     * Unary call @/proto.pub.v1.query.QueryService/CreateGroupCall
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.CreateGroupCallRes>
     */
    createGroupCall(requestData: thisProto.CreateGroupCallReq, requestMetadata?: GrpcMetadata): Observable<thisProto.CreateGroupCallRes>;
    /**
     * Unary call @/proto.pub.v1.query.QueryService/EndGroupCall
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.EndGroupCallRes>
     */
    endGroupCall(requestData: thisProto.EndGroupCallReq, requestMetadata?: GrpcMetadata): Observable<thisProto.EndGroupCallRes>;
    static ɵfac: i0.ɵɵFactoryDeclaration<QueryServiceClient, [{ optional: true; }, null, null]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<QueryServiceClient>;
}
