/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { Inject, Injectable, Optional } from '@angular/core';
import { GrpcCallType, GrpcMetadata } from '@ngx-grpc/common';
import { GRPC_CLIENT_FACTORY, takeMessages, throwStatusErrors } from '@ngx-grpc/core';
import * as thisProto from './query.pb';
import { GRPC_QUERY_SERVICE_CLIENT_SETTINGS } from './query.pbconf';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-grpc/core";
/**
 * Service client implementation for proto.pub.v1.query.QueryService
 */
export class QueryServiceClient {
    constructor(settings, clientFactory, handler) {
        this.handler = handler;
        /**
         * Raw RPC implementation for each service client method.
         * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
         * Attention: these methods do not throw errors when non-zero status codes are received.
         */
        this.$raw = {
            /**
             * Unary call: /proto.pub.v1.query.QueryService/GetTime
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.GetTimeRes>>
             */
            getTime: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.query.QueryService/GetTime',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.GetTimeReq,
                    responseClass: thisProto.GetTimeRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.query.QueryService/IdIsAvailable
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.IdIsAvailableRes>>
             */
            idIsAvailable: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.query.QueryService/IdIsAvailable',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.IdIsAvailableReq,
                    responseClass: thisProto.IdIsAvailableRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.query.QueryService/SetId
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.SetIdRes>>
             */
            setId: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.query.QueryService/SetId',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.SetIdReq,
                    responseClass: thisProto.SetIdRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.query.QueryService/BlockUid
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.BlockUidRes>>
             */
            blockUid: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.query.QueryService/BlockUid',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.BlockUidReq,
                    responseClass: thisProto.BlockUidRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.query.QueryService/UnblockUid
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.UnblockUidRes>>
             */
            unblockUid: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.query.QueryService/UnblockUid',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.UnblockUidReq,
                    responseClass: thisProto.UnblockUidRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.query.QueryService/Report
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.ReportRes>>
             */
            report: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.query.QueryService/Report',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.ReportReq,
                    responseClass: thisProto.ReportRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.query.QueryService/GetBlockedList
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.GetBlockedListRes>>
             */
            getBlockedList: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.query.QueryService/GetBlockedList',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.GetBlockedListReq,
                    responseClass: thisProto.GetBlockedListRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.query.QueryService/GetIdByUid
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.GetIdByUidRes>>
             */
            getIdByUid: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.query.QueryService/GetIdByUid',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.GetIdByUidReq,
                    responseClass: thisProto.GetIdByUidRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.query.QueryService/GetUidById
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.GetUidByIdRes>>
             */
            getUidById: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.query.QueryService/GetUidById',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.GetUidByIdReq,
                    responseClass: thisProto.GetUidByIdRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.query.QueryService/GetIsVerified
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.GetIsVerifiedRes>>
             */
            getIsVerified: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.query.QueryService/GetIsVerified',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.GetIsVerifiedReq,
                    responseClass: thisProto.GetIsVerifiedRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.query.QueryService/SearchUid
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.SearchUidRes>>
             */
            searchUid: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.query.QueryService/SearchUid',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.SearchUidReq,
                    responseClass: thisProto.SearchUidRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.query.QueryService/GetLastActivity
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.GetLastActivityRes>>
             */
            getLastActivity: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.query.QueryService/GetLastActivity',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.GetLastActivityReq,
                    responseClass: thisProto.GetLastActivityRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.query.QueryService/FetchMessages
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.FetchMessagesRes>>
             */
            fetchMessages: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.query.QueryService/FetchMessages',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.FetchMessagesReq,
                    responseClass: thisProto.FetchMessagesRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.query.QueryService/CountIsHiddenMessages
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.CountIsHiddenMessagesRes>>
             */
            countIsHiddenMessages: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.query.QueryService/CountIsHiddenMessages',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.CountIsHiddenMessagesReq,
                    responseClass: thisProto.CountIsHiddenMessagesRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.query.QueryService/GetAllUserRoomMeta
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.GetAllUserRoomMetaRes>>
             */
            getAllUserRoomMeta: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.query.QueryService/GetAllUserRoomMeta',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.GetAllUserRoomMetaReq,
                    responseClass: thisProto.GetAllUserRoomMetaRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.query.QueryService/GetUserRoomMeta
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.GetUserRoomMetaRes>>
             */
            getUserRoomMeta: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.query.QueryService/GetUserRoomMeta',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.GetUserRoomMetaReq,
                    responseClass: thisProto.GetUserRoomMetaRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.query.QueryService/GetUserLastDeliveryAck
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.GetUserLastDeliveryAckRes>>
             */
            getUserLastDeliveryAck: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.query.QueryService/GetUserLastDeliveryAck',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.GetUserLastDeliveryAckReq,
                    responseClass: thisProto.GetUserLastDeliveryAckRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.query.QueryService/GetMediaMetadata
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.GetMediaMetadataRes>>
             */
            getMediaMetadata: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.query.QueryService/GetMediaMetadata',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.GetMediaMetadataReq,
                    responseClass: thisProto.GetMediaMetadataRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.query.QueryService/FetchMedias
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.FetchMediasRes>>
             */
            fetchMedias: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.query.QueryService/FetchMedias',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.FetchMediasReq,
                    responseClass: thisProto.FetchMediasRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.query.QueryService/GetMetaCounts
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.GetMetaCountsRes>>
             */
            getMetaCounts: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.query.QueryService/GetMetaCounts',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.GetMetaCountsReq,
                    responseClass: thisProto.GetMetaCountsRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.query.QueryService/FetchMetaList
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.FetchMetaListRes>>
             */
            fetchMetaList: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.query.QueryService/FetchMetaList',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.FetchMetaListReq,
                    responseClass: thisProto.FetchMetaListRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.query.QueryService/FetchMessageMetaIndex
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.FetchMessageMetaIndexRes>>
             */
            fetchMessageMetaIndex: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.query.QueryService/FetchMessageMetaIndex',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.FetchMessageMetaIndexReq,
                    responseClass: thisProto.FetchMessageMetaIndexRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.query.QueryService/FetchMetaDeletedIndexes
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.FetchMetaDeletedIndexesRes>>
             */
            fetchMetaDeletedIndexes: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.query.QueryService/FetchMetaDeletedIndexes',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.FetchMetaDeletedIndexesReq,
                    responseClass: thisProto.FetchMetaDeletedIndexesRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.query.QueryService/FetchMentionList
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.FetchMentionListRes>>
             */
            fetchMentionList: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.query.QueryService/FetchMentionList',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.FetchMentionListReq,
                    responseClass: thisProto.FetchMentionListRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.query.QueryService/FetchCurrentUserSeenData
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.FetchCurrentUserSeenDataRes>>
             */
            fetchCurrentUserSeenData: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.query.QueryService/FetchCurrentUserSeenData',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.FetchCurrentUserSeenDataReq,
                    responseClass: thisProto.FetchCurrentUserSeenDataRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.query.QueryService/FetchLastOtherUserSeenData
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.FetchLastOtherUserSeenDataRes>>
             */
            fetchLastOtherUserSeenData: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.query.QueryService/FetchLastOtherUserSeenData',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.FetchLastOtherUserSeenDataReq,
                    responseClass: thisProto.FetchLastOtherUserSeenDataRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.query.QueryService/FetchSeenCountOfChannelMessage
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.FetchSeenCountOfChannelMessageRes>>
             */
            fetchSeenCountOfChannelMessage: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.query.QueryService/FetchSeenCountOfChannelMessage',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.FetchSeenCountOfChannelMessageReq,
                    responseClass: thisProto.FetchSeenCountOfChannelMessageRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.query.QueryService/FetchUserCalls
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.FetchUserCallsRes>>
             */
            fetchUserCalls: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.query.QueryService/FetchUserCalls',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.FetchUserCallsReq,
                    responseClass: thisProto.FetchUserCallsRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.query.QueryService/UpdateMessage
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.UpdateMessageRes>>
             */
            updateMessage: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.query.QueryService/UpdateMessage',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.UpdateMessageReq,
                    responseClass: thisProto.UpdateMessageRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.query.QueryService/DeleteMessage
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.DeleteMessageRes>>
             */
            deleteMessage: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.query.QueryService/DeleteMessage',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.DeleteMessageReq,
                    responseClass: thisProto.DeleteMessageRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.query.QueryService/ForwardMessages
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.ForwardMessagesRes>>
             */
            forwardMessages: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.query.QueryService/ForwardMessages',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.ForwardMessagesReq,
                    responseClass: thisProto.ForwardMessagesRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.query.QueryService/AddAvatar
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.AddAvatarRes>>
             */
            addAvatar: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.query.QueryService/AddAvatar',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.AddAvatarReq,
                    responseClass: thisProto.AddAvatarRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.query.QueryService/RemoveAvatar
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.RemoveAvatarRes>>
             */
            removeAvatar: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.query.QueryService/RemoveAvatar',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.RemoveAvatarReq,
                    responseClass: thisProto.RemoveAvatarRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.query.QueryService/RemovePrivateRoom
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.RemovePrivateRoomRes>>
             */
            removePrivateRoom: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.query.QueryService/RemovePrivateRoom',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.RemovePrivateRoomReq,
                    responseClass: thisProto.RemovePrivateRoomRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.query.QueryService/SearchInMessages
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.SearchInMessagesRes>>
             */
            searchInMessages: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.query.QueryService/SearchInMessages',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.SearchInMessagesReq,
                    responseClass: thisProto.SearchInMessagesRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.query.QueryService/SendGlitch
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.SendGlitchRes>>
             */
            sendGlitch: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.query.QueryService/SendGlitch',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.SendGlitchReq,
                    responseClass: thisProto.SendGlitchRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.query.QueryService/CreateGroupCall
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.CreateGroupCallRes>>
             */
            createGroupCall: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.query.QueryService/CreateGroupCall',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.CreateGroupCallReq,
                    responseClass: thisProto.CreateGroupCallRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.query.QueryService/EndGroupCall
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.EndGroupCallRes>>
             */
            endGroupCall: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.query.QueryService/EndGroupCall',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.EndGroupCallReq,
                    responseClass: thisProto.EndGroupCallRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.query.QueryService/SetMuteSettingsOfRoom
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.SetMuteSettingsOfRoomRes>>
             */
            setMuteSettingsOfRoom: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.query.QueryService/SetMuteSettingsOfRoom',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.SetMuteSettingsOfRoomReq,
                    responseClass: thisProto.SetMuteSettingsOfRoomRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.query.QueryService/UpdateSettings
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.UpdateSettingsRes>>
             */
            updateSettings: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.query.QueryService/UpdateSettings',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.UpdateSettingsReq,
                    responseClass: thisProto.UpdateSettingsRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.query.QueryService/GetSettings
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.GetSettingsRes>>
             */
            getSettings: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.query.QueryService/GetSettings',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.GetSettingsReq,
                    responseClass: thisProto.GetSettingsRes
                });
            }
        };
        this.client = clientFactory.createClient('proto.pub.v1.query.QueryService', settings);
    }
    /**
     * Unary call @/proto.pub.v1.query.QueryService/GetTime
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetTimeRes>
     */
    getTime(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .getTime(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.query.QueryService/IdIsAvailable
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.IdIsAvailableRes>
     */
    idIsAvailable(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .idIsAvailable(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.query.QueryService/SetId
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.SetIdRes>
     */
    setId(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .setId(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.query.QueryService/BlockUid
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.BlockUidRes>
     */
    blockUid(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .blockUid(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.query.QueryService/UnblockUid
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.UnblockUidRes>
     */
    unblockUid(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .unblockUid(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.query.QueryService/Report
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ReportRes>
     */
    report(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .report(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.query.QueryService/GetBlockedList
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetBlockedListRes>
     */
    getBlockedList(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .getBlockedList(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.query.QueryService/GetIdByUid
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetIdByUidRes>
     */
    getIdByUid(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .getIdByUid(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.query.QueryService/GetUidById
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetUidByIdRes>
     */
    getUidById(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .getUidById(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.query.QueryService/GetIsVerified
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetIsVerifiedRes>
     */
    getIsVerified(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .getIsVerified(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.query.QueryService/SearchUid
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.SearchUidRes>
     */
    searchUid(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .searchUid(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.query.QueryService/GetLastActivity
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetLastActivityRes>
     */
    getLastActivity(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .getLastActivity(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.query.QueryService/FetchMessages
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.FetchMessagesRes>
     */
    fetchMessages(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .fetchMessages(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.query.QueryService/CountIsHiddenMessages
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.CountIsHiddenMessagesRes>
     */
    countIsHiddenMessages(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .countIsHiddenMessages(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.query.QueryService/GetAllUserRoomMeta
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetAllUserRoomMetaRes>
     */
    getAllUserRoomMeta(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .getAllUserRoomMeta(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.query.QueryService/GetUserRoomMeta
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetUserRoomMetaRes>
     */
    getUserRoomMeta(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .getUserRoomMeta(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.query.QueryService/GetUserLastDeliveryAck
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetUserLastDeliveryAckRes>
     */
    getUserLastDeliveryAck(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .getUserLastDeliveryAck(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.query.QueryService/GetMediaMetadata
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetMediaMetadataRes>
     */
    getMediaMetadata(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .getMediaMetadata(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.query.QueryService/FetchMedias
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.FetchMediasRes>
     */
    fetchMedias(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .fetchMedias(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.query.QueryService/GetMetaCounts
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetMetaCountsRes>
     */
    getMetaCounts(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .getMetaCounts(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.query.QueryService/FetchMetaList
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.FetchMetaListRes>
     */
    fetchMetaList(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .fetchMetaList(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.query.QueryService/FetchMessageMetaIndex
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.FetchMessageMetaIndexRes>
     */
    fetchMessageMetaIndex(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .fetchMessageMetaIndex(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.query.QueryService/FetchMetaDeletedIndexes
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.FetchMetaDeletedIndexesRes>
     */
    fetchMetaDeletedIndexes(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .fetchMetaDeletedIndexes(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.query.QueryService/FetchMentionList
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.FetchMentionListRes>
     */
    fetchMentionList(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .fetchMentionList(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.query.QueryService/FetchCurrentUserSeenData
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.FetchCurrentUserSeenDataRes>
     */
    fetchCurrentUserSeenData(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .fetchCurrentUserSeenData(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.query.QueryService/FetchLastOtherUserSeenData
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.FetchLastOtherUserSeenDataRes>
     */
    fetchLastOtherUserSeenData(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .fetchLastOtherUserSeenData(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.query.QueryService/FetchSeenCountOfChannelMessage
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.FetchSeenCountOfChannelMessageRes>
     */
    fetchSeenCountOfChannelMessage(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .fetchSeenCountOfChannelMessage(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.query.QueryService/FetchUserCalls
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.FetchUserCallsRes>
     */
    fetchUserCalls(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .fetchUserCalls(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.query.QueryService/UpdateMessage
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.UpdateMessageRes>
     */
    updateMessage(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .updateMessage(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.query.QueryService/DeleteMessage
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.DeleteMessageRes>
     */
    deleteMessage(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .deleteMessage(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.query.QueryService/ForwardMessages
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ForwardMessagesRes>
     */
    forwardMessages(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .forwardMessages(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.query.QueryService/AddAvatar
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.AddAvatarRes>
     */
    addAvatar(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .addAvatar(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.query.QueryService/RemoveAvatar
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.RemoveAvatarRes>
     */
    removeAvatar(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .removeAvatar(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.query.QueryService/RemovePrivateRoom
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.RemovePrivateRoomRes>
     */
    removePrivateRoom(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .removePrivateRoom(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.query.QueryService/SearchInMessages
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.SearchInMessagesRes>
     */
    searchInMessages(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .searchInMessages(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.query.QueryService/SendGlitch
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.SendGlitchRes>
     */
    sendGlitch(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .sendGlitch(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.query.QueryService/CreateGroupCall
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.CreateGroupCallRes>
     */
    createGroupCall(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .createGroupCall(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.query.QueryService/EndGroupCall
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.EndGroupCallRes>
     */
    endGroupCall(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .endGroupCall(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.query.QueryService/SetMuteSettingsOfRoom
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.SetMuteSettingsOfRoomRes>
     */
    setMuteSettingsOfRoom(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .setMuteSettingsOfRoom(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.query.QueryService/UpdateSettings
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.UpdateSettingsRes>
     */
    updateSettings(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .updateSettings(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.query.QueryService/GetSettings
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetSettingsRes>
     */
    getSettings(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .getSettings(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
}
QueryServiceClient.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: QueryServiceClient, deps: [{ token: GRPC_QUERY_SERVICE_CLIENT_SETTINGS, optional: true }, { token: GRPC_CLIENT_FACTORY }, { token: i1.GrpcHandler }], target: i0.ɵɵFactoryTarget.Injectable });
QueryServiceClient.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: QueryServiceClient, providedIn: 'any' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: QueryServiceClient, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'any' }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [GRPC_QUERY_SERVICE_CLIENT_SETTINGS]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [GRPC_CLIENT_FACTORY]
                }] }, { type: i1.GrpcHandler }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnkucGJzYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Byb3RvL3NyYy9saWIvcHViL3YxL3F1ZXJ5LnBic2MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixjQUFjO0FBQ2QsRUFBRTtBQUNGLDJCQUEyQjtBQUMzQiw4Q0FBOEM7QUFDOUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFDTCxZQUFZLEVBSVosWUFBWSxFQUNiLE1BQU0sa0JBQWtCLENBQUM7QUFDMUIsT0FBTyxFQUNMLG1CQUFtQixFQUVuQixZQUFZLEVBQ1osaUJBQWlCLEVBQ2xCLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEIsT0FBTyxLQUFLLFNBQVMsTUFBTSxZQUFZLENBQUM7QUFzQnhDLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFDcEU7O0dBRUc7QUFFSCxNQUFNLE9BQU8sa0JBQWtCO0lBdzJCN0IsWUFDMEQsUUFBYSxFQUN4QyxhQUFxQyxFQUMxRCxPQUFvQjtRQUFwQixZQUFPLEdBQVAsT0FBTyxDQUFhO1FBeDJCOUI7Ozs7V0FJRztRQUNILFNBQUksR0FBRztZQUNMOzs7Ozs7ZUFNRztZQUNILE9BQU8sRUFBRSxDQUNQLFdBQWlDLEVBQ2pDLGVBQWUsR0FBRyxJQUFJLFlBQVksRUFBRSxFQUNTLEVBQUU7Z0JBQy9DLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7b0JBQ3pCLElBQUksRUFBRSxZQUFZLENBQUMsS0FBSztvQkFDeEIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO29CQUNuQixJQUFJLEVBQUUsMENBQTBDO29CQUNoRCxXQUFXO29CQUNYLGVBQWU7b0JBQ2YsWUFBWSxFQUFFLFNBQVMsQ0FBQyxVQUFVO29CQUNsQyxhQUFh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RUFDL0MsZUFBZSxHQUFHLElBQUksWUFBWSxFQUFFO1FBRXBDLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixxQkFBcUIsQ0FBQyxXQUFXLEVBQUUsZUFBZSxDQUFDO2FBQ25ELElBQUksQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILGNBQWMsQ0FDWixXQUF3QyxFQUN4QyxlQUFlLEdBQUcsSUFBSSxZQUFZLEVBQUU7UUFFcEMsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLGNBQWMsQ0FBQyxXQUFXLEVBQUUsZUFBZSxDQUFDO2FBQzVDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILFdBQVcsQ0FDVCxXQUFxQyxFQUNyQyxlQUFlLEdBQUcsSUFBSSxZQUFZLEVBQUU7UUFFcEMsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLFdBQVcsQ0FBQyxXQUFXLEVBQUUsZUFBZSxDQUFDO2FBQ3pDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7K0dBamdEVSxrQkFBa0Isa0JBeTJCUCxrQ0FBa0MsNkJBQzlDLG1CQUFtQjttSEExMkJsQixrQkFBa0IsY0FETCxLQUFLOzJGQUNsQixrQkFBa0I7a0JBRDlCLFVBQVU7bUJBQUMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFOzswQkEwMkI1QixRQUFROzswQkFBSSxNQUFNOzJCQUFDLGtDQUFrQzs7MEJBQ3JELE1BQU07MkJBQUMsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGUgKi9cbi8qIGVzbGludC1kaXNhYmxlICovXG4vLyBAdHMtbm9jaGVja1xuLy9cbi8vIFRISVMgSVMgQSBHRU5FUkFURUQgRklMRVxuLy8gRE8gTk9UIE1PRElGWSBJVCEgWU9VUiBDSEFOR0VTIFdJTEwgQkUgTE9TVFxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgR3JwY0NhbGxUeXBlLFxuICBHcnBjQ2xpZW50LFxuICBHcnBjQ2xpZW50RmFjdG9yeSxcbiAgR3JwY0V2ZW50LFxuICBHcnBjTWV0YWRhdGFcbn0gZnJvbSAnQG5neC1ncnBjL2NvbW1vbic7XG5pbXBvcnQge1xuICBHUlBDX0NMSUVOVF9GQUNUT1JZLFxuICBHcnBjSGFuZGxlcixcbiAgdGFrZU1lc3NhZ2VzLFxuICB0aHJvd1N0YXR1c0Vycm9yc1xufSBmcm9tICdAbmd4LWdycGMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgKiBhcyB0aGlzUHJvdG8gZnJvbSAnLi9xdWVyeS5wYic7XG5pbXBvcnQgKiBhcyBwcm90b1B1YlYxTW9kZWxzMDAwIGZyb20gJy4uLy4uL3B1Yi92MS9tb2RlbHMvdWlkLnBiJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMDEgZnJvbSAnLi4vLi4vcHViL3YxL21vZGVscy9maWxlLnBiJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMDIgZnJvbSAnLi4vLi4vcHViL3YxL21vZGVscy9zdGlja2VyLnBiJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMDMgZnJvbSAnLi4vLi4vcHViL3YxL21vZGVscy9sb2NhdGlvbi5wYic7XG5pbXBvcnQgKiBhcyBwcm90b1B1YlYxTW9kZWxzMDA0IGZyb20gJy4uLy4uL3B1Yi92MS9tb2RlbHMvcGF5bWVudC5wYic7XG5pbXBvcnQgKiBhcyBwcm90b1B1YlYxTW9kZWxzMDA1IGZyb20gJy4uLy4uL3B1Yi92MS9tb2RlbHMvcGVyc2lzdGVudC1ldmVudC5wYic7XG5pbXBvcnQgKiBhcyBwcm90b1B1YlYxTW9kZWxzMDA2IGZyb20gJy4uLy4uL3B1Yi92MS9tb2RlbHMvc2hhcmUtcHJpdmF0ZS1kYXRhLnBiJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMDcgZnJvbSAnLi4vLi4vcHViL3YxL21vZGVscy9mb3JtLnBiJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMDggZnJvbSAnLi4vLi4vcHViL3YxL21vZGVscy9wb2xsLnBiJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMDkgZnJvbSAnLi4vLi4vcHViL3YxL21vZGVscy9tdWMucGInO1xuaW1wb3J0ICogYXMgcHJvdG9QdWJWMU1vZGVsczAxMCBmcm9tICcuLi8uLi9wdWIvdjEvbW9kZWxzL2NhbGwucGInO1xuaW1wb3J0ICogYXMgcHJvdG9QdWJWMU1vZGVsczAxMSBmcm9tICcuLi8uLi9wdWIvdjEvbW9kZWxzL21hcmt1cC5wYic7XG5pbXBvcnQgKiBhcyBwcm90b1B1YlYxTW9kZWxzMDEyIGZyb20gJy4uLy4uL3B1Yi92MS9tb2RlbHMvY2F0ZWdvcmllcy5wYic7XG5pbXBvcnQgKiBhcyBwcm90b1B1YlYxTW9kZWxzMDEzIGZyb20gJy4uLy4uL3B1Yi92MS9tb2RlbHMvc2V0dGluZ3MucGInO1xuaW1wb3J0ICogYXMgcHJvdG9QdWJWMU1vZGVsczAxNCBmcm9tICcuLi8uLi9wdWIvdjEvbW9kZWxzL21lc3NhZ2UucGInO1xuaW1wb3J0ICogYXMgcHJvdG9QdWJWMU1vZGVsczAxNSBmcm9tICcuLi8uLi9wdWIvdjEvbW9kZWxzL21lZGlhLnBiJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMTYgZnJvbSAnLi4vLi4vcHViL3YxL21vZGVscy9tZXRhLnBiJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMTcgZnJvbSAnLi4vLi4vcHViL3YxL21vZGVscy9zZWVuLnBiJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMTggZnJvbSAnLi4vLi4vcHViL3YxL21vZGVscy9yb29tLW1ldGFkYXRhLnBiJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMTkgZnJvbSAnLi4vLi4vcHViL3YxL21vZGVscy9hdmF0YXIucGInO1xuaW1wb3J0ICogYXMgcHJvdG9QdWJWMU1vZGVsczAyMCBmcm9tICcuLi8uLi9wdWIvdjEvbW9kZWxzL3BsYXRmb3JtLnBiJztcbmltcG9ydCB7IEdSUENfUVVFUllfU0VSVklDRV9DTElFTlRfU0VUVElOR1MgfSBmcm9tICcuL3F1ZXJ5LnBiY29uZic7XG4vKipcbiAqIFNlcnZpY2UgY2xpZW50IGltcGxlbWVudGF0aW9uIGZvciBwcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlXG4gKi9cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ2FueScgfSlcbmV4cG9ydCBjbGFzcyBRdWVyeVNlcnZpY2VDbGllbnQge1xuICBwcml2YXRlIGNsaWVudDogR3JwY0NsaWVudDxhbnk+O1xuXG4gIC8qKlxuICAgKiBSYXcgUlBDIGltcGxlbWVudGF0aW9uIGZvciBlYWNoIHNlcnZpY2UgY2xpZW50IG1ldGhvZC5cbiAgICogVGhlIHJhdyBtZXRob2RzIHByb3ZpZGUgbW9yZSBjb250cm9sIG9uIHRoZSBpbmNvbWluZyBkYXRhIGFuZCBldmVudHMuIEUuZy4gdGhleSBjYW4gYmUgdXNlZnVsIHRvIHJlYWQgc3RhdHVzIGBPS2AgbWV0YWRhdGEuXG4gICAqIEF0dGVudGlvbjogdGhlc2UgbWV0aG9kcyBkbyBub3QgdGhyb3cgZXJyb3JzIHdoZW4gbm9uLXplcm8gc3RhdHVzIGNvZGVzIGFyZSByZWNlaXZlZC5cbiAgICovXG4gICRyYXcgPSB7XG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvR2V0VGltZVxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5HZXRUaW1lUmVzPj5cbiAgICAgKi9cbiAgICBnZXRUaW1lOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkdldFRpbWVSZXEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uR2V0VGltZVJlcz4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvR2V0VGltZScsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkdldFRpbWVSZXEsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5HZXRUaW1lUmVzXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL0lkSXNBdmFpbGFibGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uSWRJc0F2YWlsYWJsZVJlcz4+XG4gICAgICovXG4gICAgaWRJc0F2YWlsYWJsZTogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5JZElzQXZhaWxhYmxlUmVxLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLklkSXNBdmFpbGFibGVSZXM+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL0lkSXNBdmFpbGFibGUnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5JZElzQXZhaWxhYmxlUmVxLFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uSWRJc0F2YWlsYWJsZVJlc1xuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9TZXRJZFxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5TZXRJZFJlcz4+XG4gICAgICovXG4gICAgc2V0SWQ6IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uU2V0SWRSZXEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uU2V0SWRSZXM+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL1NldElkJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uU2V0SWRSZXEsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5TZXRJZFJlc1xuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9CbG9ja1VpZFxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5CbG9ja1VpZFJlcz4+XG4gICAgICovXG4gICAgYmxvY2tVaWQ6IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uQmxvY2tVaWRSZXEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uQmxvY2tVaWRSZXM+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL0Jsb2NrVWlkJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uQmxvY2tVaWRSZXEsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5CbG9ja1VpZFJlc1xuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9VbmJsb2NrVWlkXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlVuYmxvY2tVaWRSZXM+PlxuICAgICAqL1xuICAgIHVuYmxvY2tVaWQ6IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uVW5ibG9ja1VpZFJlcSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5VbmJsb2NrVWlkUmVzPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9VbmJsb2NrVWlkJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uVW5ibG9ja1VpZFJlcSxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLlVuYmxvY2tVaWRSZXNcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvUmVwb3J0XG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlJlcG9ydFJlcz4+XG4gICAgICovXG4gICAgcmVwb3J0OiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLlJlcG9ydFJlcSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5SZXBvcnRSZXM+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL1JlcG9ydCcsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLlJlcG9ydFJlcSxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLlJlcG9ydFJlc1xuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9HZXRCbG9ja2VkTGlzdFxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5HZXRCbG9ja2VkTGlzdFJlcz4+XG4gICAgICovXG4gICAgZ2V0QmxvY2tlZExpc3Q6IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uR2V0QmxvY2tlZExpc3RSZXEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uR2V0QmxvY2tlZExpc3RSZXM+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL0dldEJsb2NrZWRMaXN0JyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uR2V0QmxvY2tlZExpc3RSZXEsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5HZXRCbG9ja2VkTGlzdFJlc1xuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9HZXRJZEJ5VWlkXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkdldElkQnlVaWRSZXM+PlxuICAgICAqL1xuICAgIGdldElkQnlVaWQ6IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uR2V0SWRCeVVpZFJlcSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5HZXRJZEJ5VWlkUmVzPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9HZXRJZEJ5VWlkJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uR2V0SWRCeVVpZFJlcSxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLkdldElkQnlVaWRSZXNcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvR2V0VWlkQnlJZFxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5HZXRVaWRCeUlkUmVzPj5cbiAgICAgKi9cbiAgICBnZXRVaWRCeUlkOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkdldFVpZEJ5SWRSZXEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uR2V0VWlkQnlJZFJlcz4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvR2V0VWlkQnlJZCcsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkdldFVpZEJ5SWRSZXEsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5HZXRVaWRCeUlkUmVzXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL0dldElzVmVyaWZpZWRcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uR2V0SXNWZXJpZmllZFJlcz4+XG4gICAgICovXG4gICAgZ2V0SXNWZXJpZmllZDogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5HZXRJc1ZlcmlmaWVkUmVxLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkdldElzVmVyaWZpZWRSZXM+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL0dldElzVmVyaWZpZWQnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5HZXRJc1ZlcmlmaWVkUmVxLFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uR2V0SXNWZXJpZmllZFJlc1xuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9TZWFyY2hVaWRcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uU2VhcmNoVWlkUmVzPj5cbiAgICAgKi9cbiAgICBzZWFyY2hVaWQ6IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uU2VhcmNoVWlkUmVxLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlNlYXJjaFVpZFJlcz4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvU2VhcmNoVWlkJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uU2VhcmNoVWlkUmVxLFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uU2VhcmNoVWlkUmVzXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL0dldExhc3RBY3Rpdml0eVxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5HZXRMYXN0QWN0aXZpdHlSZXM+PlxuICAgICAqL1xuICAgIGdldExhc3RBY3Rpdml0eTogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5HZXRMYXN0QWN0aXZpdHlSZXEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uR2V0TGFzdEFjdGl2aXR5UmVzPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9HZXRMYXN0QWN0aXZpdHknLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5HZXRMYXN0QWN0aXZpdHlSZXEsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5HZXRMYXN0QWN0aXZpdHlSZXNcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvRmV0Y2hNZXNzYWdlc1xuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5GZXRjaE1lc3NhZ2VzUmVzPj5cbiAgICAgKi9cbiAgICBmZXRjaE1lc3NhZ2VzOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkZldGNoTWVzc2FnZXNSZXEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uRmV0Y2hNZXNzYWdlc1Jlcz4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvRmV0Y2hNZXNzYWdlcycsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkZldGNoTWVzc2FnZXNSZXEsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5GZXRjaE1lc3NhZ2VzUmVzXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL0NvdW50SXNIaWRkZW5NZXNzYWdlc1xuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5Db3VudElzSGlkZGVuTWVzc2FnZXNSZXM+PlxuICAgICAqL1xuICAgIGNvdW50SXNIaWRkZW5NZXNzYWdlczogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5Db3VudElzSGlkZGVuTWVzc2FnZXNSZXEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uQ291bnRJc0hpZGRlbk1lc3NhZ2VzUmVzPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9Db3VudElzSGlkZGVuTWVzc2FnZXMnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5Db3VudElzSGlkZGVuTWVzc2FnZXNSZXEsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5Db3VudElzSGlkZGVuTWVzc2FnZXNSZXNcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvR2V0QWxsVXNlclJvb21NZXRhXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkdldEFsbFVzZXJSb29tTWV0YVJlcz4+XG4gICAgICovXG4gICAgZ2V0QWxsVXNlclJvb21NZXRhOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkdldEFsbFVzZXJSb29tTWV0YVJlcSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5HZXRBbGxVc2VyUm9vbU1ldGFSZXM+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL0dldEFsbFVzZXJSb29tTWV0YScsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkdldEFsbFVzZXJSb29tTWV0YVJlcSxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLkdldEFsbFVzZXJSb29tTWV0YVJlc1xuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9HZXRVc2VyUm9vbU1ldGFcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uR2V0VXNlclJvb21NZXRhUmVzPj5cbiAgICAgKi9cbiAgICBnZXRVc2VyUm9vbU1ldGE6IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uR2V0VXNlclJvb21NZXRhUmVxLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkdldFVzZXJSb29tTWV0YVJlcz4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvR2V0VXNlclJvb21NZXRhJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uR2V0VXNlclJvb21NZXRhUmVxLFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uR2V0VXNlclJvb21NZXRhUmVzXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL0dldFVzZXJMYXN0RGVsaXZlcnlBY2tcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uR2V0VXNlckxhc3REZWxpdmVyeUFja1Jlcz4+XG4gICAgICovXG4gICAgZ2V0VXNlckxhc3REZWxpdmVyeUFjazogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5HZXRVc2VyTGFzdERlbGl2ZXJ5QWNrUmVxLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkdldFVzZXJMYXN0RGVsaXZlcnlBY2tSZXM+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL0dldFVzZXJMYXN0RGVsaXZlcnlBY2snLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5HZXRVc2VyTGFzdERlbGl2ZXJ5QWNrUmVxLFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uR2V0VXNlckxhc3REZWxpdmVyeUFja1Jlc1xuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9HZXRNZWRpYU1ldGFkYXRhXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkdldE1lZGlhTWV0YWRhdGFSZXM+PlxuICAgICAqL1xuICAgIGdldE1lZGlhTWV0YWRhdGE6IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uR2V0TWVkaWFNZXRhZGF0YVJlcSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5HZXRNZWRpYU1ldGFkYXRhUmVzPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9HZXRNZWRpYU1ldGFkYXRhJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uR2V0TWVkaWFNZXRhZGF0YVJlcSxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLkdldE1lZGlhTWV0YWRhdGFSZXNcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvRmV0Y2hNZWRpYXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uRmV0Y2hNZWRpYXNSZXM+PlxuICAgICAqL1xuICAgIGZldGNoTWVkaWFzOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkZldGNoTWVkaWFzUmVxLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkZldGNoTWVkaWFzUmVzPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9GZXRjaE1lZGlhcycsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkZldGNoTWVkaWFzUmVxLFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uRmV0Y2hNZWRpYXNSZXNcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvR2V0TWV0YUNvdW50c1xuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5HZXRNZXRhQ291bnRzUmVzPj5cbiAgICAgKi9cbiAgICBnZXRNZXRhQ291bnRzOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkdldE1ldGFDb3VudHNSZXEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uR2V0TWV0YUNvdW50c1Jlcz4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvR2V0TWV0YUNvdW50cycsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkdldE1ldGFDb3VudHNSZXEsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5HZXRNZXRhQ291bnRzUmVzXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL0ZldGNoTWV0YUxpc3RcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uRmV0Y2hNZXRhTGlzdFJlcz4+XG4gICAgICovXG4gICAgZmV0Y2hNZXRhTGlzdDogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5GZXRjaE1ldGFMaXN0UmVxLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkZldGNoTWV0YUxpc3RSZXM+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL0ZldGNoTWV0YUxpc3QnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5GZXRjaE1ldGFMaXN0UmVxLFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uRmV0Y2hNZXRhTGlzdFJlc1xuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9GZXRjaE1lc3NhZ2VNZXRhSW5kZXhcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uRmV0Y2hNZXNzYWdlTWV0YUluZGV4UmVzPj5cbiAgICAgKi9cbiAgICBmZXRjaE1lc3NhZ2VNZXRhSW5kZXg6IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uRmV0Y2hNZXNzYWdlTWV0YUluZGV4UmVxLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkZldGNoTWVzc2FnZU1ldGFJbmRleFJlcz4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvRmV0Y2hNZXNzYWdlTWV0YUluZGV4JyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uRmV0Y2hNZXNzYWdlTWV0YUluZGV4UmVxLFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uRmV0Y2hNZXNzYWdlTWV0YUluZGV4UmVzXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL0ZldGNoTWV0YURlbGV0ZWRJbmRleGVzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkZldGNoTWV0YURlbGV0ZWRJbmRleGVzUmVzPj5cbiAgICAgKi9cbiAgICBmZXRjaE1ldGFEZWxldGVkSW5kZXhlczogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5GZXRjaE1ldGFEZWxldGVkSW5kZXhlc1JlcSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5GZXRjaE1ldGFEZWxldGVkSW5kZXhlc1Jlcz4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvRmV0Y2hNZXRhRGVsZXRlZEluZGV4ZXMnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5GZXRjaE1ldGFEZWxldGVkSW5kZXhlc1JlcSxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLkZldGNoTWV0YURlbGV0ZWRJbmRleGVzUmVzXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL0ZldGNoTWVudGlvbkxpc3RcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uRmV0Y2hNZW50aW9uTGlzdFJlcz4+XG4gICAgICovXG4gICAgZmV0Y2hNZW50aW9uTGlzdDogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5GZXRjaE1lbnRpb25MaXN0UmVxLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkZldGNoTWVudGlvbkxpc3RSZXM+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL0ZldGNoTWVudGlvbkxpc3QnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5GZXRjaE1lbnRpb25MaXN0UmVxLFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uRmV0Y2hNZW50aW9uTGlzdFJlc1xuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9GZXRjaEN1cnJlbnRVc2VyU2VlbkRhdGFcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uRmV0Y2hDdXJyZW50VXNlclNlZW5EYXRhUmVzPj5cbiAgICAgKi9cbiAgICBmZXRjaEN1cnJlbnRVc2VyU2VlbkRhdGE6IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uRmV0Y2hDdXJyZW50VXNlclNlZW5EYXRhUmVxLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkZldGNoQ3VycmVudFVzZXJTZWVuRGF0YVJlcz4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvRmV0Y2hDdXJyZW50VXNlclNlZW5EYXRhJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uRmV0Y2hDdXJyZW50VXNlclNlZW5EYXRhUmVxLFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uRmV0Y2hDdXJyZW50VXNlclNlZW5EYXRhUmVzXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL0ZldGNoTGFzdE90aGVyVXNlclNlZW5EYXRhXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkZldGNoTGFzdE90aGVyVXNlclNlZW5EYXRhUmVzPj5cbiAgICAgKi9cbiAgICBmZXRjaExhc3RPdGhlclVzZXJTZWVuRGF0YTogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5GZXRjaExhc3RPdGhlclVzZXJTZWVuRGF0YVJlcSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5GZXRjaExhc3RPdGhlclVzZXJTZWVuRGF0YVJlcz4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvRmV0Y2hMYXN0T3RoZXJVc2VyU2VlbkRhdGEnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5GZXRjaExhc3RPdGhlclVzZXJTZWVuRGF0YVJlcSxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLkZldGNoTGFzdE90aGVyVXNlclNlZW5EYXRhUmVzXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL0ZldGNoU2VlbkNvdW50T2ZDaGFubmVsTWVzc2FnZVxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5GZXRjaFNlZW5Db3VudE9mQ2hhbm5lbE1lc3NhZ2VSZXM+PlxuICAgICAqL1xuICAgIGZldGNoU2VlbkNvdW50T2ZDaGFubmVsTWVzc2FnZTogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5GZXRjaFNlZW5Db3VudE9mQ2hhbm5lbE1lc3NhZ2VSZXEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uRmV0Y2hTZWVuQ291bnRPZkNoYW5uZWxNZXNzYWdlUmVzPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9GZXRjaFNlZW5Db3VudE9mQ2hhbm5lbE1lc3NhZ2UnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5GZXRjaFNlZW5Db3VudE9mQ2hhbm5lbE1lc3NhZ2VSZXEsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5GZXRjaFNlZW5Db3VudE9mQ2hhbm5lbE1lc3NhZ2VSZXNcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvRmV0Y2hVc2VyQ2FsbHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uRmV0Y2hVc2VyQ2FsbHNSZXM+PlxuICAgICAqL1xuICAgIGZldGNoVXNlckNhbGxzOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkZldGNoVXNlckNhbGxzUmVxLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkZldGNoVXNlckNhbGxzUmVzPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9GZXRjaFVzZXJDYWxscycsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkZldGNoVXNlckNhbGxzUmVxLFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uRmV0Y2hVc2VyQ2FsbHNSZXNcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvVXBkYXRlTWVzc2FnZVxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5VcGRhdGVNZXNzYWdlUmVzPj5cbiAgICAgKi9cbiAgICB1cGRhdGVNZXNzYWdlOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLlVwZGF0ZU1lc3NhZ2VSZXEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uVXBkYXRlTWVzc2FnZVJlcz4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvVXBkYXRlTWVzc2FnZScsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLlVwZGF0ZU1lc3NhZ2VSZXEsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5VcGRhdGVNZXNzYWdlUmVzXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL0RlbGV0ZU1lc3NhZ2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uRGVsZXRlTWVzc2FnZVJlcz4+XG4gICAgICovXG4gICAgZGVsZXRlTWVzc2FnZTogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5EZWxldGVNZXNzYWdlUmVxLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkRlbGV0ZU1lc3NhZ2VSZXM+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL0RlbGV0ZU1lc3NhZ2UnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5EZWxldGVNZXNzYWdlUmVxLFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uRGVsZXRlTWVzc2FnZVJlc1xuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9Gb3J3YXJkTWVzc2FnZXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uRm9yd2FyZE1lc3NhZ2VzUmVzPj5cbiAgICAgKi9cbiAgICBmb3J3YXJkTWVzc2FnZXM6IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uRm9yd2FyZE1lc3NhZ2VzUmVxLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkZvcndhcmRNZXNzYWdlc1Jlcz4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvRm9yd2FyZE1lc3NhZ2VzJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uRm9yd2FyZE1lc3NhZ2VzUmVxLFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uRm9yd2FyZE1lc3NhZ2VzUmVzXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL0FkZEF2YXRhclxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5BZGRBdmF0YXJSZXM+PlxuICAgICAqL1xuICAgIGFkZEF2YXRhcjogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5BZGRBdmF0YXJSZXEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uQWRkQXZhdGFyUmVzPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9BZGRBdmF0YXInLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5BZGRBdmF0YXJSZXEsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5BZGRBdmF0YXJSZXNcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvUmVtb3ZlQXZhdGFyXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlJlbW92ZUF2YXRhclJlcz4+XG4gICAgICovXG4gICAgcmVtb3ZlQXZhdGFyOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLlJlbW92ZUF2YXRhclJlcSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5SZW1vdmVBdmF0YXJSZXM+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL1JlbW92ZUF2YXRhcicsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLlJlbW92ZUF2YXRhclJlcSxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLlJlbW92ZUF2YXRhclJlc1xuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9SZW1vdmVQcml2YXRlUm9vbVxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5SZW1vdmVQcml2YXRlUm9vbVJlcz4+XG4gICAgICovXG4gICAgcmVtb3ZlUHJpdmF0ZVJvb206IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uUmVtb3ZlUHJpdmF0ZVJvb21SZXEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uUmVtb3ZlUHJpdmF0ZVJvb21SZXM+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL1JlbW92ZVByaXZhdGVSb29tJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uUmVtb3ZlUHJpdmF0ZVJvb21SZXEsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5SZW1vdmVQcml2YXRlUm9vbVJlc1xuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9TZWFyY2hJbk1lc3NhZ2VzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlNlYXJjaEluTWVzc2FnZXNSZXM+PlxuICAgICAqL1xuICAgIHNlYXJjaEluTWVzc2FnZXM6IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uU2VhcmNoSW5NZXNzYWdlc1JlcSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5TZWFyY2hJbk1lc3NhZ2VzUmVzPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9TZWFyY2hJbk1lc3NhZ2VzJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uU2VhcmNoSW5NZXNzYWdlc1JlcSxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLlNlYXJjaEluTWVzc2FnZXNSZXNcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvU2VuZEdsaXRjaFxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5TZW5kR2xpdGNoUmVzPj5cbiAgICAgKi9cbiAgICBzZW5kR2xpdGNoOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLlNlbmRHbGl0Y2hSZXEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uU2VuZEdsaXRjaFJlcz4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvU2VuZEdsaXRjaCcsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLlNlbmRHbGl0Y2hSZXEsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5TZW5kR2xpdGNoUmVzXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL0NyZWF0ZUdyb3VwQ2FsbFxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5DcmVhdGVHcm91cENhbGxSZXM+PlxuICAgICAqL1xuICAgIGNyZWF0ZUdyb3VwQ2FsbDogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5DcmVhdGVHcm91cENhbGxSZXEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uQ3JlYXRlR3JvdXBDYWxsUmVzPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9DcmVhdGVHcm91cENhbGwnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5DcmVhdGVHcm91cENhbGxSZXEsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5DcmVhdGVHcm91cENhbGxSZXNcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvRW5kR3JvdXBDYWxsXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkVuZEdyb3VwQ2FsbFJlcz4+XG4gICAgICovXG4gICAgZW5kR3JvdXBDYWxsOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkVuZEdyb3VwQ2FsbFJlcSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5FbmRHcm91cENhbGxSZXM+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL0VuZEdyb3VwQ2FsbCcsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkVuZEdyb3VwQ2FsbFJlcSxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLkVuZEdyb3VwQ2FsbFJlc1xuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9TZXRNdXRlU2V0dGluZ3NPZlJvb21cbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uU2V0TXV0ZVNldHRpbmdzT2ZSb29tUmVzPj5cbiAgICAgKi9cbiAgICBzZXRNdXRlU2V0dGluZ3NPZlJvb206IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uU2V0TXV0ZVNldHRpbmdzT2ZSb29tUmVxLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlNldE11dGVTZXR0aW5nc09mUm9vbVJlcz4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvU2V0TXV0ZVNldHRpbmdzT2ZSb29tJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uU2V0TXV0ZVNldHRpbmdzT2ZSb29tUmVxLFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uU2V0TXV0ZVNldHRpbmdzT2ZSb29tUmVzXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL1VwZGF0ZVNldHRpbmdzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlVwZGF0ZVNldHRpbmdzUmVzPj5cbiAgICAgKi9cbiAgICB1cGRhdGVTZXR0aW5nczogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5VcGRhdGVTZXR0aW5nc1JlcSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5VcGRhdGVTZXR0aW5nc1Jlcz4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvVXBkYXRlU2V0dGluZ3MnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5VcGRhdGVTZXR0aW5nc1JlcSxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLlVwZGF0ZVNldHRpbmdzUmVzXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL0dldFNldHRpbmdzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkdldFNldHRpbmdzUmVzPj5cbiAgICAgKi9cbiAgICBnZXRTZXR0aW5nczogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5HZXRTZXR0aW5nc1JlcSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5HZXRTZXR0aW5nc1Jlcz4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvR2V0U2V0dGluZ3MnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5HZXRTZXR0aW5nc1JlcSxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLkdldFNldHRpbmdzUmVzXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChHUlBDX1FVRVJZX1NFUlZJQ0VfQ0xJRU5UX1NFVFRJTkdTKSBzZXR0aW5nczogYW55LFxuICAgIEBJbmplY3QoR1JQQ19DTElFTlRfRkFDVE9SWSkgY2xpZW50RmFjdG9yeTogR3JwY0NsaWVudEZhY3Rvcnk8YW55PixcbiAgICBwcml2YXRlIGhhbmRsZXI6IEdycGNIYW5kbGVyXG4gICkge1xuICAgIHRoaXMuY2xpZW50ID0gY2xpZW50RmFjdG9yeS5jcmVhdGVDbGllbnQoXG4gICAgICAncHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZScsXG4gICAgICBzZXR0aW5nc1xuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvR2V0VGltZVxuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5HZXRUaW1lUmVzPlxuICAgKi9cbiAgZ2V0VGltZShcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkdldFRpbWVSZXEsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLkdldFRpbWVSZXM+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAuZ2V0VGltZShyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL0lkSXNBdmFpbGFibGVcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uSWRJc0F2YWlsYWJsZVJlcz5cbiAgICovXG4gIGlkSXNBdmFpbGFibGUoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5JZElzQXZhaWxhYmxlUmVxLFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5JZElzQXZhaWxhYmxlUmVzPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmlkSXNBdmFpbGFibGUocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9TZXRJZFxuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5TZXRJZFJlcz5cbiAgICovXG4gIHNldElkKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uU2V0SWRSZXEsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLlNldElkUmVzPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLnNldElkKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvQmxvY2tVaWRcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uQmxvY2tVaWRSZXM+XG4gICAqL1xuICBibG9ja1VpZChcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkJsb2NrVWlkUmVxLFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5CbG9ja1VpZFJlcz4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5ibG9ja1VpZChyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL1VuYmxvY2tVaWRcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uVW5ibG9ja1VpZFJlcz5cbiAgICovXG4gIHVuYmxvY2tVaWQoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5VbmJsb2NrVWlkUmVxLFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5VbmJsb2NrVWlkUmVzPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLnVuYmxvY2tVaWQocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9SZXBvcnRcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uUmVwb3J0UmVzPlxuICAgKi9cbiAgcmVwb3J0KFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uUmVwb3J0UmVxLFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5SZXBvcnRSZXM+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAucmVwb3J0KHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvR2V0QmxvY2tlZExpc3RcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uR2V0QmxvY2tlZExpc3RSZXM+XG4gICAqL1xuICBnZXRCbG9ja2VkTGlzdChcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkdldEJsb2NrZWRMaXN0UmVxLFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5HZXRCbG9ja2VkTGlzdFJlcz4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5nZXRCbG9ja2VkTGlzdChyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL0dldElkQnlVaWRcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uR2V0SWRCeVVpZFJlcz5cbiAgICovXG4gIGdldElkQnlVaWQoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5HZXRJZEJ5VWlkUmVxLFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5HZXRJZEJ5VWlkUmVzPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmdldElkQnlVaWQocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9HZXRVaWRCeUlkXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLkdldFVpZEJ5SWRSZXM+XG4gICAqL1xuICBnZXRVaWRCeUlkKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uR2V0VWlkQnlJZFJlcSxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uR2V0VWlkQnlJZFJlcz4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5nZXRVaWRCeUlkKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvR2V0SXNWZXJpZmllZFxuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5HZXRJc1ZlcmlmaWVkUmVzPlxuICAgKi9cbiAgZ2V0SXNWZXJpZmllZChcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkdldElzVmVyaWZpZWRSZXEsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLkdldElzVmVyaWZpZWRSZXM+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAuZ2V0SXNWZXJpZmllZChyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL1NlYXJjaFVpZFxuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5TZWFyY2hVaWRSZXM+XG4gICAqL1xuICBzZWFyY2hVaWQoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5TZWFyY2hVaWRSZXEsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLlNlYXJjaFVpZFJlcz4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5zZWFyY2hVaWQocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9HZXRMYXN0QWN0aXZpdHlcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uR2V0TGFzdEFjdGl2aXR5UmVzPlxuICAgKi9cbiAgZ2V0TGFzdEFjdGl2aXR5KFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uR2V0TGFzdEFjdGl2aXR5UmVxLFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5HZXRMYXN0QWN0aXZpdHlSZXM+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAuZ2V0TGFzdEFjdGl2aXR5KHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvRmV0Y2hNZXNzYWdlc1xuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5GZXRjaE1lc3NhZ2VzUmVzPlxuICAgKi9cbiAgZmV0Y2hNZXNzYWdlcyhcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkZldGNoTWVzc2FnZXNSZXEsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLkZldGNoTWVzc2FnZXNSZXM+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAuZmV0Y2hNZXNzYWdlcyhyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL0NvdW50SXNIaWRkZW5NZXNzYWdlc1xuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5Db3VudElzSGlkZGVuTWVzc2FnZXNSZXM+XG4gICAqL1xuICBjb3VudElzSGlkZGVuTWVzc2FnZXMoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5Db3VudElzSGlkZGVuTWVzc2FnZXNSZXEsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLkNvdW50SXNIaWRkZW5NZXNzYWdlc1Jlcz4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5jb3VudElzSGlkZGVuTWVzc2FnZXMocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9HZXRBbGxVc2VyUm9vbU1ldGFcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uR2V0QWxsVXNlclJvb21NZXRhUmVzPlxuICAgKi9cbiAgZ2V0QWxsVXNlclJvb21NZXRhKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uR2V0QWxsVXNlclJvb21NZXRhUmVxLFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5HZXRBbGxVc2VyUm9vbU1ldGFSZXM+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAuZ2V0QWxsVXNlclJvb21NZXRhKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvR2V0VXNlclJvb21NZXRhXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLkdldFVzZXJSb29tTWV0YVJlcz5cbiAgICovXG4gIGdldFVzZXJSb29tTWV0YShcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkdldFVzZXJSb29tTWV0YVJlcSxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uR2V0VXNlclJvb21NZXRhUmVzPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmdldFVzZXJSb29tTWV0YShyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL0dldFVzZXJMYXN0RGVsaXZlcnlBY2tcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uR2V0VXNlckxhc3REZWxpdmVyeUFja1Jlcz5cbiAgICovXG4gIGdldFVzZXJMYXN0RGVsaXZlcnlBY2soXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5HZXRVc2VyTGFzdERlbGl2ZXJ5QWNrUmVxLFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5HZXRVc2VyTGFzdERlbGl2ZXJ5QWNrUmVzPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmdldFVzZXJMYXN0RGVsaXZlcnlBY2socmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9HZXRNZWRpYU1ldGFkYXRhXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLkdldE1lZGlhTWV0YWRhdGFSZXM+XG4gICAqL1xuICBnZXRNZWRpYU1ldGFkYXRhKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uR2V0TWVkaWFNZXRhZGF0YVJlcSxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uR2V0TWVkaWFNZXRhZGF0YVJlcz4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5nZXRNZWRpYU1ldGFkYXRhKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvRmV0Y2hNZWRpYXNcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uRmV0Y2hNZWRpYXNSZXM+XG4gICAqL1xuICBmZXRjaE1lZGlhcyhcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkZldGNoTWVkaWFzUmVxLFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5GZXRjaE1lZGlhc1Jlcz4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5mZXRjaE1lZGlhcyhyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL0dldE1ldGFDb3VudHNcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uR2V0TWV0YUNvdW50c1Jlcz5cbiAgICovXG4gIGdldE1ldGFDb3VudHMoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5HZXRNZXRhQ291bnRzUmVxLFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5HZXRNZXRhQ291bnRzUmVzPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmdldE1ldGFDb3VudHMocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9GZXRjaE1ldGFMaXN0XG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLkZldGNoTWV0YUxpc3RSZXM+XG4gICAqL1xuICBmZXRjaE1ldGFMaXN0KFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uRmV0Y2hNZXRhTGlzdFJlcSxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uRmV0Y2hNZXRhTGlzdFJlcz4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5mZXRjaE1ldGFMaXN0KHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvRmV0Y2hNZXNzYWdlTWV0YUluZGV4XG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLkZldGNoTWVzc2FnZU1ldGFJbmRleFJlcz5cbiAgICovXG4gIGZldGNoTWVzc2FnZU1ldGFJbmRleChcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkZldGNoTWVzc2FnZU1ldGFJbmRleFJlcSxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uRmV0Y2hNZXNzYWdlTWV0YUluZGV4UmVzPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmZldGNoTWVzc2FnZU1ldGFJbmRleChyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL0ZldGNoTWV0YURlbGV0ZWRJbmRleGVzXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLkZldGNoTWV0YURlbGV0ZWRJbmRleGVzUmVzPlxuICAgKi9cbiAgZmV0Y2hNZXRhRGVsZXRlZEluZGV4ZXMoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5GZXRjaE1ldGFEZWxldGVkSW5kZXhlc1JlcSxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uRmV0Y2hNZXRhRGVsZXRlZEluZGV4ZXNSZXM+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAuZmV0Y2hNZXRhRGVsZXRlZEluZGV4ZXMocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9GZXRjaE1lbnRpb25MaXN0XG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLkZldGNoTWVudGlvbkxpc3RSZXM+XG4gICAqL1xuICBmZXRjaE1lbnRpb25MaXN0KFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uRmV0Y2hNZW50aW9uTGlzdFJlcSxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uRmV0Y2hNZW50aW9uTGlzdFJlcz4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5mZXRjaE1lbnRpb25MaXN0KHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvRmV0Y2hDdXJyZW50VXNlclNlZW5EYXRhXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLkZldGNoQ3VycmVudFVzZXJTZWVuRGF0YVJlcz5cbiAgICovXG4gIGZldGNoQ3VycmVudFVzZXJTZWVuRGF0YShcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkZldGNoQ3VycmVudFVzZXJTZWVuRGF0YVJlcSxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uRmV0Y2hDdXJyZW50VXNlclNlZW5EYXRhUmVzPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmZldGNoQ3VycmVudFVzZXJTZWVuRGF0YShyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL0ZldGNoTGFzdE90aGVyVXNlclNlZW5EYXRhXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLkZldGNoTGFzdE90aGVyVXNlclNlZW5EYXRhUmVzPlxuICAgKi9cbiAgZmV0Y2hMYXN0T3RoZXJVc2VyU2VlbkRhdGEoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5GZXRjaExhc3RPdGhlclVzZXJTZWVuRGF0YVJlcSxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uRmV0Y2hMYXN0T3RoZXJVc2VyU2VlbkRhdGFSZXM+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAuZmV0Y2hMYXN0T3RoZXJVc2VyU2VlbkRhdGEocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9GZXRjaFNlZW5Db3VudE9mQ2hhbm5lbE1lc3NhZ2VcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uRmV0Y2hTZWVuQ291bnRPZkNoYW5uZWxNZXNzYWdlUmVzPlxuICAgKi9cbiAgZmV0Y2hTZWVuQ291bnRPZkNoYW5uZWxNZXNzYWdlKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uRmV0Y2hTZWVuQ291bnRPZkNoYW5uZWxNZXNzYWdlUmVxLFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5GZXRjaFNlZW5Db3VudE9mQ2hhbm5lbE1lc3NhZ2VSZXM+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAuZmV0Y2hTZWVuQ291bnRPZkNoYW5uZWxNZXNzYWdlKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvRmV0Y2hVc2VyQ2FsbHNcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uRmV0Y2hVc2VyQ2FsbHNSZXM+XG4gICAqL1xuICBmZXRjaFVzZXJDYWxscyhcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkZldGNoVXNlckNhbGxzUmVxLFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5GZXRjaFVzZXJDYWxsc1Jlcz4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5mZXRjaFVzZXJDYWxscyhyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL1VwZGF0ZU1lc3NhZ2VcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uVXBkYXRlTWVzc2FnZVJlcz5cbiAgICovXG4gIHVwZGF0ZU1lc3NhZ2UoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5VcGRhdGVNZXNzYWdlUmVxLFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5VcGRhdGVNZXNzYWdlUmVzPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLnVwZGF0ZU1lc3NhZ2UocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9EZWxldGVNZXNzYWdlXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLkRlbGV0ZU1lc3NhZ2VSZXM+XG4gICAqL1xuICBkZWxldGVNZXNzYWdlKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uRGVsZXRlTWVzc2FnZVJlcSxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uRGVsZXRlTWVzc2FnZVJlcz4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5kZWxldGVNZXNzYWdlKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvRm9yd2FyZE1lc3NhZ2VzXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLkZvcndhcmRNZXNzYWdlc1Jlcz5cbiAgICovXG4gIGZvcndhcmRNZXNzYWdlcyhcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkZvcndhcmRNZXNzYWdlc1JlcSxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uRm9yd2FyZE1lc3NhZ2VzUmVzPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmZvcndhcmRNZXNzYWdlcyhyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL0FkZEF2YXRhclxuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5BZGRBdmF0YXJSZXM+XG4gICAqL1xuICBhZGRBdmF0YXIoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5BZGRBdmF0YXJSZXEsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLkFkZEF2YXRhclJlcz4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5hZGRBdmF0YXIocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9SZW1vdmVBdmF0YXJcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uUmVtb3ZlQXZhdGFyUmVzPlxuICAgKi9cbiAgcmVtb3ZlQXZhdGFyKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uUmVtb3ZlQXZhdGFyUmVxLFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5SZW1vdmVBdmF0YXJSZXM+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAucmVtb3ZlQXZhdGFyKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvUmVtb3ZlUHJpdmF0ZVJvb21cbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uUmVtb3ZlUHJpdmF0ZVJvb21SZXM+XG4gICAqL1xuICByZW1vdmVQcml2YXRlUm9vbShcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLlJlbW92ZVByaXZhdGVSb29tUmVxLFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5SZW1vdmVQcml2YXRlUm9vbVJlcz4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5yZW1vdmVQcml2YXRlUm9vbShyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL1NlYXJjaEluTWVzc2FnZXNcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uU2VhcmNoSW5NZXNzYWdlc1Jlcz5cbiAgICovXG4gIHNlYXJjaEluTWVzc2FnZXMoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5TZWFyY2hJbk1lc3NhZ2VzUmVxLFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5TZWFyY2hJbk1lc3NhZ2VzUmVzPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLnNlYXJjaEluTWVzc2FnZXMocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9TZW5kR2xpdGNoXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLlNlbmRHbGl0Y2hSZXM+XG4gICAqL1xuICBzZW5kR2xpdGNoKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uU2VuZEdsaXRjaFJlcSxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uU2VuZEdsaXRjaFJlcz4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5zZW5kR2xpdGNoKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvQ3JlYXRlR3JvdXBDYWxsXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLkNyZWF0ZUdyb3VwQ2FsbFJlcz5cbiAgICovXG4gIGNyZWF0ZUdyb3VwQ2FsbChcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkNyZWF0ZUdyb3VwQ2FsbFJlcSxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uQ3JlYXRlR3JvdXBDYWxsUmVzPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmNyZWF0ZUdyb3VwQ2FsbChyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL0VuZEdyb3VwQ2FsbFxuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5FbmRHcm91cENhbGxSZXM+XG4gICAqL1xuICBlbmRHcm91cENhbGwoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5FbmRHcm91cENhbGxSZXEsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLkVuZEdyb3VwQ2FsbFJlcz4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5lbmRHcm91cENhbGwocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9TZXRNdXRlU2V0dGluZ3NPZlJvb21cbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uU2V0TXV0ZVNldHRpbmdzT2ZSb29tUmVzPlxuICAgKi9cbiAgc2V0TXV0ZVNldHRpbmdzT2ZSb29tKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uU2V0TXV0ZVNldHRpbmdzT2ZSb29tUmVxLFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5TZXRNdXRlU2V0dGluZ3NPZlJvb21SZXM+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAuc2V0TXV0ZVNldHRpbmdzT2ZSb29tKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvVXBkYXRlU2V0dGluZ3NcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uVXBkYXRlU2V0dGluZ3NSZXM+XG4gICAqL1xuICB1cGRhdGVTZXR0aW5ncyhcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLlVwZGF0ZVNldHRpbmdzUmVxLFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5VcGRhdGVTZXR0aW5nc1Jlcz4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC51cGRhdGVTZXR0aW5ncyhyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL0dldFNldHRpbmdzXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLkdldFNldHRpbmdzUmVzPlxuICAgKi9cbiAgZ2V0U2V0dGluZ3MoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5HZXRTZXR0aW5nc1JlcSxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uR2V0U2V0dGluZ3NSZXM+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAuZ2V0U2V0dGluZ3MocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxufVxuIl19