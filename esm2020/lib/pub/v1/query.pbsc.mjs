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
             * Unary call: /proto.pub.v1.query.QueryService/DeleteOtherMessage
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.DeleteMessageRes>>
             */
            deleteOtherMessage: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.query.QueryService/DeleteOtherMessage',
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
            },
            /**
             * Unary call: /proto.pub.v1.query.QueryService/CheckCallAvailabilityStatus
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.CheckCallAvailabilityStatusRes>>
             */
            checkCallAvailabilityStatus: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.query.QueryService/CheckCallAvailabilityStatus',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.CheckCallAvailabilityStatusReq,
                    responseClass: thisProto.CheckCallAvailabilityStatusRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.query.QueryService/SaveLocalMessages
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.SaveLocalMessageRes>>
             */
            saveLocalMessages: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.query.QueryService/SaveLocalMessages',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.SaveLocalMessageReq,
                    responseClass: thisProto.SaveLocalMessageRes
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
     * Unary call @/proto.pub.v1.query.QueryService/DeleteOtherMessage
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.DeleteMessageRes>
     */
    deleteOtherMessage(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .deleteOtherMessage(requestData, requestMetadata)
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
    /**
     * Unary call @/proto.pub.v1.query.QueryService/CheckCallAvailabilityStatus
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.CheckCallAvailabilityStatusRes>
     */
    checkCallAvailabilityStatus(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .checkCallAvailabilityStatus(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.query.QueryService/SaveLocalMessages
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.SaveLocalMessageRes>
     */
    saveLocalMessages(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .saveLocalMessages(requestData, requestMetadata)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnkucGJzYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Byb3RvL3NyYy9saWIvcHViL3YxL3F1ZXJ5LnBic2MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixjQUFjO0FBQ2QsRUFBRTtBQUNGLDJCQUEyQjtBQUMzQiw4Q0FBOEM7QUFDOUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFDTCxZQUFZLEVBSVosWUFBWSxFQUNiLE1BQU0sa0JBQWtCLENBQUM7QUFDMUIsT0FBTyxFQUNMLG1CQUFtQixFQUVuQixZQUFZLEVBQ1osaUJBQWlCLEVBQ2xCLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEIsT0FBTyxLQUFLLFNBQVMsTUFBTSxZQUFZLENBQUM7QUF1QnhDLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFDcEU7O0dBRUc7QUFFSCxNQUFNLE9BQU8sa0JBQWtCO0lBdTZCN0IsWUFDMEQsUUFBYSxFQUN4QyxhQUFxQyxFQUMxRCxPQUFvQjtRQUFwQixZQUFPLEdBQVAsT0FBTyxDQUFhO1FBdjZCOUI7Ozs7V0FJRztRQUNILFNBQUksR0FBRztZQUNMOzs7Ozs7ZUFNRztZQUNILE9BQU8sRUFBRSxDQUNQLFdBQWlDLEVBQ2pDLGVBQWUsR0FBRyxJQUFJLFlBQVksRUFBRSxFQUNTLEVBQUU7Z0JBQy9DLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7b0JBQ3pCLElBQUksRUFBRSxZQUFZLENBQUMsS0FBSztvQkFDeEIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO29CQUNuQixJQUFJLEVBQUUsMENBQTBDO29CQUNoRCxXQUFXO29CQUNYLGVBQWU7b0JBQ2YsWUFBWSxFQUFFLFNBQVMsQ0FBQyxVQUFVO29CQUNsQyxhQUFh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WSxFQUFFO1FBRXBDLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYiwyQkFBMkIsQ0FBQyxXQUFXLEVBQUUsZUFBZSxDQUFDO2FBQ3pELElBQUksQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILGlCQUFpQixDQUNmLFdBQTBDLEVBQzFDLGVBQWUsR0FBRyxJQUFJLFlBQVksRUFBRTtRQUVwQyxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsaUJBQWlCLENBQUMsV0FBVyxFQUFFLGVBQWUsQ0FBQzthQUMvQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7OytHQWhuRFUsa0JBQWtCLGtCQXc2QlAsa0NBQWtDLDZCQUM5QyxtQkFBbUI7bUhBejZCbEIsa0JBQWtCLGNBREwsS0FBSzsyRkFDbEIsa0JBQWtCO2tCQUQ5QixVQUFVO21CQUFDLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRTs7MEJBeTZCNUIsUUFBUTs7MEJBQUksTUFBTTsyQkFBQyxrQ0FBa0M7OzBCQUNyRCxNQUFNOzJCQUFDLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuLy8gQHRzLW5vY2hlY2tcbi8vXG4vLyBUSElTIElTIEEgR0VORVJBVEVEIEZJTEVcbi8vIERPIE5PVCBNT0RJRlkgSVQhIFlPVVIgQ0hBTkdFUyBXSUxMIEJFIExPU1RcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEdycGNDYWxsVHlwZSxcbiAgR3JwY0NsaWVudCxcbiAgR3JwY0NsaWVudEZhY3RvcnksXG4gIEdycGNFdmVudCxcbiAgR3JwY01ldGFkYXRhXG59IGZyb20gJ0BuZ3gtZ3JwYy9jb21tb24nO1xuaW1wb3J0IHtcbiAgR1JQQ19DTElFTlRfRkFDVE9SWSxcbiAgR3JwY0hhbmRsZXIsXG4gIHRha2VNZXNzYWdlcyxcbiAgdGhyb3dTdGF0dXNFcnJvcnNcbn0gZnJvbSAnQG5neC1ncnBjL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0ICogYXMgdGhpc1Byb3RvIGZyb20gJy4vcXVlcnkucGInO1xuaW1wb3J0ICogYXMgcHJvdG9QdWJWMU1vZGVsczAwMCBmcm9tICcuLi8uLi9wdWIvdjEvbW9kZWxzL3VpZC5wYic7XG5pbXBvcnQgKiBhcyBwcm90b1B1YlYxTW9kZWxzMDAxIGZyb20gJy4uLy4uL3B1Yi92MS9tb2RlbHMvZmlsZS5wYic7XG5pbXBvcnQgKiBhcyBwcm90b1B1YlYxTW9kZWxzMDAyIGZyb20gJy4uLy4uL3B1Yi92MS9tb2RlbHMvc3RpY2tlci5wYic7XG5pbXBvcnQgKiBhcyBwcm90b1B1YlYxTW9kZWxzMDAzIGZyb20gJy4uLy4uL3B1Yi92MS9tb2RlbHMvbG9jYXRpb24ucGInO1xuaW1wb3J0ICogYXMgcHJvdG9QdWJWMU1vZGVsczAwNCBmcm9tICcuLi8uLi9wdWIvdjEvbW9kZWxzL3BheW1lbnQucGInO1xuaW1wb3J0ICogYXMgcHJvdG9QdWJWMU1vZGVsczAwNSBmcm9tICcuLi8uLi9wdWIvdjEvbW9kZWxzL3BlcnNpc3RlbnQtZXZlbnQucGInO1xuaW1wb3J0ICogYXMgcHJvdG9QdWJWMU1vZGVsczAwNiBmcm9tICcuLi8uLi9wdWIvdjEvbW9kZWxzL3NoYXJlLXByaXZhdGUtZGF0YS5wYic7XG5pbXBvcnQgKiBhcyBwcm90b1B1YlYxTW9kZWxzMDA3IGZyb20gJy4uLy4uL3B1Yi92MS9tb2RlbHMvZm9ybS5wYic7XG5pbXBvcnQgKiBhcyBwcm90b1B1YlYxTW9kZWxzMDA4IGZyb20gJy4uLy4uL3B1Yi92MS9tb2RlbHMvcG9sbC5wYic7XG5pbXBvcnQgKiBhcyBwcm90b1B1YlYxTW9kZWxzMDA5IGZyb20gJy4uLy4uL3B1Yi92MS9tb2RlbHMvbXVjLnBiJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMTAgZnJvbSAnLi4vLi4vcHViL3YxL21vZGVscy9jYWxsLnBiJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMTEgZnJvbSAnLi4vLi4vcHViL3YxL21vZGVscy9tYXJrdXAucGInO1xuaW1wb3J0ICogYXMgcHJvdG9QdWJWMU1vZGVsczAxMiBmcm9tICcuLi8uLi9wdWIvdjEvbW9kZWxzL2NhdGVnb3JpZXMucGInO1xuaW1wb3J0ICogYXMgcHJvdG9QdWJWMU1vZGVsczAxMyBmcm9tICcuLi8uLi9wdWIvdjEvbW9kZWxzL3NldHRpbmdzLnBiJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMTQgZnJvbSAnLi4vLi4vcHViL3YxL21vZGVscy9tZXNzYWdlLnBiJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMTUgZnJvbSAnLi4vLi4vcHViL3YxL21vZGVscy9tZWRpYS5wYic7XG5pbXBvcnQgKiBhcyBwcm90b1B1YlYxTW9kZWxzMDE2IGZyb20gJy4uLy4uL3B1Yi92MS9tb2RlbHMvbWV0YS5wYic7XG5pbXBvcnQgKiBhcyBwcm90b1B1YlYxTW9kZWxzMDE3IGZyb20gJy4uLy4uL3B1Yi92MS9tb2RlbHMvc2Vlbi5wYic7XG5pbXBvcnQgKiBhcyBwcm90b1B1YlYxTW9kZWxzMDE4IGZyb20gJy4uLy4uL3B1Yi92MS9tb2RlbHMvcm9vbS1tZXRhZGF0YS5wYic7XG5pbXBvcnQgKiBhcyBwcm90b1B1YlYxTW9kZWxzMDE5IGZyb20gJy4uLy4uL3B1Yi92MS9tb2RlbHMvYXZhdGFyLnBiJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMjAgZnJvbSAnLi4vLi4vcHViL3YxL21vZGVscy9wbGF0Zm9ybS5wYic7XG5pbXBvcnQgKiBhcyBwcm90b1B1YlYxTW9kZWxzMDIxIGZyb20gJy4uLy4uL3B1Yi92MS9tb2RlbHMvbGFzdC1zZWVuLnBiJztcbmltcG9ydCB7IEdSUENfUVVFUllfU0VSVklDRV9DTElFTlRfU0VUVElOR1MgfSBmcm9tICcuL3F1ZXJ5LnBiY29uZic7XG4vKipcbiAqIFNlcnZpY2UgY2xpZW50IGltcGxlbWVudGF0aW9uIGZvciBwcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlXG4gKi9cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ2FueScgfSlcbmV4cG9ydCBjbGFzcyBRdWVyeVNlcnZpY2VDbGllbnQge1xuICBwcml2YXRlIGNsaWVudDogR3JwY0NsaWVudDxhbnk+O1xuXG4gIC8qKlxuICAgKiBSYXcgUlBDIGltcGxlbWVudGF0aW9uIGZvciBlYWNoIHNlcnZpY2UgY2xpZW50IG1ldGhvZC5cbiAgICogVGhlIHJhdyBtZXRob2RzIHByb3ZpZGUgbW9yZSBjb250cm9sIG9uIHRoZSBpbmNvbWluZyBkYXRhIGFuZCBldmVudHMuIEUuZy4gdGhleSBjYW4gYmUgdXNlZnVsIHRvIHJlYWQgc3RhdHVzIGBPS2AgbWV0YWRhdGEuXG4gICAqIEF0dGVudGlvbjogdGhlc2UgbWV0aG9kcyBkbyBub3QgdGhyb3cgZXJyb3JzIHdoZW4gbm9uLXplcm8gc3RhdHVzIGNvZGVzIGFyZSByZWNlaXZlZC5cbiAgICovXG4gICRyYXcgPSB7XG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvR2V0VGltZVxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5HZXRUaW1lUmVzPj5cbiAgICAgKi9cbiAgICBnZXRUaW1lOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkdldFRpbWVSZXEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uR2V0VGltZVJlcz4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvR2V0VGltZScsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkdldFRpbWVSZXEsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5HZXRUaW1lUmVzXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL0lkSXNBdmFpbGFibGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uSWRJc0F2YWlsYWJsZVJlcz4+XG4gICAgICovXG4gICAgaWRJc0F2YWlsYWJsZTogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5JZElzQXZhaWxhYmxlUmVxLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLklkSXNBdmFpbGFibGVSZXM+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL0lkSXNBdmFpbGFibGUnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5JZElzQXZhaWxhYmxlUmVxLFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uSWRJc0F2YWlsYWJsZVJlc1xuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9TZXRJZFxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5TZXRJZFJlcz4+XG4gICAgICovXG4gICAgc2V0SWQ6IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uU2V0SWRSZXEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uU2V0SWRSZXM+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL1NldElkJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uU2V0SWRSZXEsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5TZXRJZFJlc1xuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9CbG9ja1VpZFxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5CbG9ja1VpZFJlcz4+XG4gICAgICovXG4gICAgYmxvY2tVaWQ6IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uQmxvY2tVaWRSZXEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uQmxvY2tVaWRSZXM+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL0Jsb2NrVWlkJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uQmxvY2tVaWRSZXEsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5CbG9ja1VpZFJlc1xuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9VbmJsb2NrVWlkXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlVuYmxvY2tVaWRSZXM+PlxuICAgICAqL1xuICAgIHVuYmxvY2tVaWQ6IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uVW5ibG9ja1VpZFJlcSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5VbmJsb2NrVWlkUmVzPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9VbmJsb2NrVWlkJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uVW5ibG9ja1VpZFJlcSxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLlVuYmxvY2tVaWRSZXNcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvUmVwb3J0XG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlJlcG9ydFJlcz4+XG4gICAgICovXG4gICAgcmVwb3J0OiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLlJlcG9ydFJlcSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5SZXBvcnRSZXM+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL1JlcG9ydCcsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLlJlcG9ydFJlcSxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLlJlcG9ydFJlc1xuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9HZXRCbG9ja2VkTGlzdFxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5HZXRCbG9ja2VkTGlzdFJlcz4+XG4gICAgICovXG4gICAgZ2V0QmxvY2tlZExpc3Q6IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uR2V0QmxvY2tlZExpc3RSZXEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uR2V0QmxvY2tlZExpc3RSZXM+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL0dldEJsb2NrZWRMaXN0JyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uR2V0QmxvY2tlZExpc3RSZXEsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5HZXRCbG9ja2VkTGlzdFJlc1xuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9HZXRJZEJ5VWlkXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkdldElkQnlVaWRSZXM+PlxuICAgICAqL1xuICAgIGdldElkQnlVaWQ6IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uR2V0SWRCeVVpZFJlcSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5HZXRJZEJ5VWlkUmVzPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9HZXRJZEJ5VWlkJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uR2V0SWRCeVVpZFJlcSxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLkdldElkQnlVaWRSZXNcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvR2V0VWlkQnlJZFxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5HZXRVaWRCeUlkUmVzPj5cbiAgICAgKi9cbiAgICBnZXRVaWRCeUlkOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkdldFVpZEJ5SWRSZXEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uR2V0VWlkQnlJZFJlcz4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvR2V0VWlkQnlJZCcsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkdldFVpZEJ5SWRSZXEsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5HZXRVaWRCeUlkUmVzXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL0dldElzVmVyaWZpZWRcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uR2V0SXNWZXJpZmllZFJlcz4+XG4gICAgICovXG4gICAgZ2V0SXNWZXJpZmllZDogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5HZXRJc1ZlcmlmaWVkUmVxLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkdldElzVmVyaWZpZWRSZXM+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL0dldElzVmVyaWZpZWQnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5HZXRJc1ZlcmlmaWVkUmVxLFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uR2V0SXNWZXJpZmllZFJlc1xuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9TZWFyY2hVaWRcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uU2VhcmNoVWlkUmVzPj5cbiAgICAgKi9cbiAgICBzZWFyY2hVaWQ6IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uU2VhcmNoVWlkUmVxLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlNlYXJjaFVpZFJlcz4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvU2VhcmNoVWlkJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uU2VhcmNoVWlkUmVxLFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uU2VhcmNoVWlkUmVzXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL0dldExhc3RBY3Rpdml0eVxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5HZXRMYXN0QWN0aXZpdHlSZXM+PlxuICAgICAqL1xuICAgIGdldExhc3RBY3Rpdml0eTogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5HZXRMYXN0QWN0aXZpdHlSZXEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uR2V0TGFzdEFjdGl2aXR5UmVzPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9HZXRMYXN0QWN0aXZpdHknLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5HZXRMYXN0QWN0aXZpdHlSZXEsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5HZXRMYXN0QWN0aXZpdHlSZXNcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvRmV0Y2hNZXNzYWdlc1xuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5GZXRjaE1lc3NhZ2VzUmVzPj5cbiAgICAgKi9cbiAgICBmZXRjaE1lc3NhZ2VzOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkZldGNoTWVzc2FnZXNSZXEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uRmV0Y2hNZXNzYWdlc1Jlcz4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvRmV0Y2hNZXNzYWdlcycsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkZldGNoTWVzc2FnZXNSZXEsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5GZXRjaE1lc3NhZ2VzUmVzXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL0NvdW50SXNIaWRkZW5NZXNzYWdlc1xuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5Db3VudElzSGlkZGVuTWVzc2FnZXNSZXM+PlxuICAgICAqL1xuICAgIGNvdW50SXNIaWRkZW5NZXNzYWdlczogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5Db3VudElzSGlkZGVuTWVzc2FnZXNSZXEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uQ291bnRJc0hpZGRlbk1lc3NhZ2VzUmVzPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9Db3VudElzSGlkZGVuTWVzc2FnZXMnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5Db3VudElzSGlkZGVuTWVzc2FnZXNSZXEsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5Db3VudElzSGlkZGVuTWVzc2FnZXNSZXNcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvR2V0QWxsVXNlclJvb21NZXRhXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkdldEFsbFVzZXJSb29tTWV0YVJlcz4+XG4gICAgICovXG4gICAgZ2V0QWxsVXNlclJvb21NZXRhOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkdldEFsbFVzZXJSb29tTWV0YVJlcSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5HZXRBbGxVc2VyUm9vbU1ldGFSZXM+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL0dldEFsbFVzZXJSb29tTWV0YScsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkdldEFsbFVzZXJSb29tTWV0YVJlcSxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLkdldEFsbFVzZXJSb29tTWV0YVJlc1xuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9HZXRVc2VyUm9vbU1ldGFcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uR2V0VXNlclJvb21NZXRhUmVzPj5cbiAgICAgKi9cbiAgICBnZXRVc2VyUm9vbU1ldGE6IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uR2V0VXNlclJvb21NZXRhUmVxLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkdldFVzZXJSb29tTWV0YVJlcz4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvR2V0VXNlclJvb21NZXRhJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uR2V0VXNlclJvb21NZXRhUmVxLFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uR2V0VXNlclJvb21NZXRhUmVzXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL0dldFVzZXJMYXN0RGVsaXZlcnlBY2tcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uR2V0VXNlckxhc3REZWxpdmVyeUFja1Jlcz4+XG4gICAgICovXG4gICAgZ2V0VXNlckxhc3REZWxpdmVyeUFjazogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5HZXRVc2VyTGFzdERlbGl2ZXJ5QWNrUmVxLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkdldFVzZXJMYXN0RGVsaXZlcnlBY2tSZXM+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL0dldFVzZXJMYXN0RGVsaXZlcnlBY2snLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5HZXRVc2VyTGFzdERlbGl2ZXJ5QWNrUmVxLFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uR2V0VXNlckxhc3REZWxpdmVyeUFja1Jlc1xuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9HZXRNZWRpYU1ldGFkYXRhXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkdldE1lZGlhTWV0YWRhdGFSZXM+PlxuICAgICAqL1xuICAgIGdldE1lZGlhTWV0YWRhdGE6IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uR2V0TWVkaWFNZXRhZGF0YVJlcSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5HZXRNZWRpYU1ldGFkYXRhUmVzPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9HZXRNZWRpYU1ldGFkYXRhJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uR2V0TWVkaWFNZXRhZGF0YVJlcSxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLkdldE1lZGlhTWV0YWRhdGFSZXNcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvRmV0Y2hNZWRpYXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uRmV0Y2hNZWRpYXNSZXM+PlxuICAgICAqL1xuICAgIGZldGNoTWVkaWFzOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkZldGNoTWVkaWFzUmVxLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkZldGNoTWVkaWFzUmVzPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9GZXRjaE1lZGlhcycsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkZldGNoTWVkaWFzUmVxLFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uRmV0Y2hNZWRpYXNSZXNcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvR2V0TWV0YUNvdW50c1xuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5HZXRNZXRhQ291bnRzUmVzPj5cbiAgICAgKi9cbiAgICBnZXRNZXRhQ291bnRzOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkdldE1ldGFDb3VudHNSZXEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uR2V0TWV0YUNvdW50c1Jlcz4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvR2V0TWV0YUNvdW50cycsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkdldE1ldGFDb3VudHNSZXEsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5HZXRNZXRhQ291bnRzUmVzXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL0ZldGNoTWV0YUxpc3RcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uRmV0Y2hNZXRhTGlzdFJlcz4+XG4gICAgICovXG4gICAgZmV0Y2hNZXRhTGlzdDogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5GZXRjaE1ldGFMaXN0UmVxLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkZldGNoTWV0YUxpc3RSZXM+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL0ZldGNoTWV0YUxpc3QnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5GZXRjaE1ldGFMaXN0UmVxLFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uRmV0Y2hNZXRhTGlzdFJlc1xuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9GZXRjaE1lc3NhZ2VNZXRhSW5kZXhcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uRmV0Y2hNZXNzYWdlTWV0YUluZGV4UmVzPj5cbiAgICAgKi9cbiAgICBmZXRjaE1lc3NhZ2VNZXRhSW5kZXg6IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uRmV0Y2hNZXNzYWdlTWV0YUluZGV4UmVxLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkZldGNoTWVzc2FnZU1ldGFJbmRleFJlcz4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvRmV0Y2hNZXNzYWdlTWV0YUluZGV4JyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uRmV0Y2hNZXNzYWdlTWV0YUluZGV4UmVxLFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uRmV0Y2hNZXNzYWdlTWV0YUluZGV4UmVzXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL0ZldGNoTWV0YURlbGV0ZWRJbmRleGVzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkZldGNoTWV0YURlbGV0ZWRJbmRleGVzUmVzPj5cbiAgICAgKi9cbiAgICBmZXRjaE1ldGFEZWxldGVkSW5kZXhlczogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5GZXRjaE1ldGFEZWxldGVkSW5kZXhlc1JlcSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5GZXRjaE1ldGFEZWxldGVkSW5kZXhlc1Jlcz4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvRmV0Y2hNZXRhRGVsZXRlZEluZGV4ZXMnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5GZXRjaE1ldGFEZWxldGVkSW5kZXhlc1JlcSxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLkZldGNoTWV0YURlbGV0ZWRJbmRleGVzUmVzXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL0ZldGNoTWVudGlvbkxpc3RcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uRmV0Y2hNZW50aW9uTGlzdFJlcz4+XG4gICAgICovXG4gICAgZmV0Y2hNZW50aW9uTGlzdDogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5GZXRjaE1lbnRpb25MaXN0UmVxLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkZldGNoTWVudGlvbkxpc3RSZXM+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL0ZldGNoTWVudGlvbkxpc3QnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5GZXRjaE1lbnRpb25MaXN0UmVxLFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uRmV0Y2hNZW50aW9uTGlzdFJlc1xuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9GZXRjaEN1cnJlbnRVc2VyU2VlbkRhdGFcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uRmV0Y2hDdXJyZW50VXNlclNlZW5EYXRhUmVzPj5cbiAgICAgKi9cbiAgICBmZXRjaEN1cnJlbnRVc2VyU2VlbkRhdGE6IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uRmV0Y2hDdXJyZW50VXNlclNlZW5EYXRhUmVxLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkZldGNoQ3VycmVudFVzZXJTZWVuRGF0YVJlcz4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvRmV0Y2hDdXJyZW50VXNlclNlZW5EYXRhJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uRmV0Y2hDdXJyZW50VXNlclNlZW5EYXRhUmVxLFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uRmV0Y2hDdXJyZW50VXNlclNlZW5EYXRhUmVzXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL0ZldGNoTGFzdE90aGVyVXNlclNlZW5EYXRhXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkZldGNoTGFzdE90aGVyVXNlclNlZW5EYXRhUmVzPj5cbiAgICAgKi9cbiAgICBmZXRjaExhc3RPdGhlclVzZXJTZWVuRGF0YTogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5GZXRjaExhc3RPdGhlclVzZXJTZWVuRGF0YVJlcSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5GZXRjaExhc3RPdGhlclVzZXJTZWVuRGF0YVJlcz4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvRmV0Y2hMYXN0T3RoZXJVc2VyU2VlbkRhdGEnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5GZXRjaExhc3RPdGhlclVzZXJTZWVuRGF0YVJlcSxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLkZldGNoTGFzdE90aGVyVXNlclNlZW5EYXRhUmVzXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL0ZldGNoU2VlbkNvdW50T2ZDaGFubmVsTWVzc2FnZVxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5GZXRjaFNlZW5Db3VudE9mQ2hhbm5lbE1lc3NhZ2VSZXM+PlxuICAgICAqL1xuICAgIGZldGNoU2VlbkNvdW50T2ZDaGFubmVsTWVzc2FnZTogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5GZXRjaFNlZW5Db3VudE9mQ2hhbm5lbE1lc3NhZ2VSZXEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uRmV0Y2hTZWVuQ291bnRPZkNoYW5uZWxNZXNzYWdlUmVzPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9GZXRjaFNlZW5Db3VudE9mQ2hhbm5lbE1lc3NhZ2UnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5GZXRjaFNlZW5Db3VudE9mQ2hhbm5lbE1lc3NhZ2VSZXEsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5GZXRjaFNlZW5Db3VudE9mQ2hhbm5lbE1lc3NhZ2VSZXNcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvRmV0Y2hVc2VyQ2FsbHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uRmV0Y2hVc2VyQ2FsbHNSZXM+PlxuICAgICAqL1xuICAgIGZldGNoVXNlckNhbGxzOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkZldGNoVXNlckNhbGxzUmVxLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkZldGNoVXNlckNhbGxzUmVzPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9GZXRjaFVzZXJDYWxscycsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkZldGNoVXNlckNhbGxzUmVxLFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uRmV0Y2hVc2VyQ2FsbHNSZXNcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvVXBkYXRlTWVzc2FnZVxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5VcGRhdGVNZXNzYWdlUmVzPj5cbiAgICAgKi9cbiAgICB1cGRhdGVNZXNzYWdlOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLlVwZGF0ZU1lc3NhZ2VSZXEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uVXBkYXRlTWVzc2FnZVJlcz4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvVXBkYXRlTWVzc2FnZScsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLlVwZGF0ZU1lc3NhZ2VSZXEsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5VcGRhdGVNZXNzYWdlUmVzXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL0RlbGV0ZU1lc3NhZ2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uRGVsZXRlTWVzc2FnZVJlcz4+XG4gICAgICovXG4gICAgZGVsZXRlTWVzc2FnZTogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5EZWxldGVNZXNzYWdlUmVxLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkRlbGV0ZU1lc3NhZ2VSZXM+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL0RlbGV0ZU1lc3NhZ2UnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5EZWxldGVNZXNzYWdlUmVxLFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uRGVsZXRlTWVzc2FnZVJlc1xuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9EZWxldGVPdGhlck1lc3NhZ2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uRGVsZXRlTWVzc2FnZVJlcz4+XG4gICAgICovXG4gICAgZGVsZXRlT3RoZXJNZXNzYWdlOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkRlbGV0ZU1lc3NhZ2VSZXEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uRGVsZXRlTWVzc2FnZVJlcz4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvRGVsZXRlT3RoZXJNZXNzYWdlJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uRGVsZXRlTWVzc2FnZVJlcSxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLkRlbGV0ZU1lc3NhZ2VSZXNcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvRm9yd2FyZE1lc3NhZ2VzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkZvcndhcmRNZXNzYWdlc1Jlcz4+XG4gICAgICovXG4gICAgZm9yd2FyZE1lc3NhZ2VzOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkZvcndhcmRNZXNzYWdlc1JlcSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5Gb3J3YXJkTWVzc2FnZXNSZXM+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL0ZvcndhcmRNZXNzYWdlcycsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkZvcndhcmRNZXNzYWdlc1JlcSxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLkZvcndhcmRNZXNzYWdlc1Jlc1xuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9BZGRBdmF0YXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uQWRkQXZhdGFyUmVzPj5cbiAgICAgKi9cbiAgICBhZGRBdmF0YXI6IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uQWRkQXZhdGFyUmVxLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkFkZEF2YXRhclJlcz4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvQWRkQXZhdGFyJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uQWRkQXZhdGFyUmVxLFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uQWRkQXZhdGFyUmVzXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL1JlbW92ZUF2YXRhclxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5SZW1vdmVBdmF0YXJSZXM+PlxuICAgICAqL1xuICAgIHJlbW92ZUF2YXRhcjogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5SZW1vdmVBdmF0YXJSZXEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uUmVtb3ZlQXZhdGFyUmVzPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9SZW1vdmVBdmF0YXInLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5SZW1vdmVBdmF0YXJSZXEsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5SZW1vdmVBdmF0YXJSZXNcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvUmVtb3ZlUHJpdmF0ZVJvb21cbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uUmVtb3ZlUHJpdmF0ZVJvb21SZXM+PlxuICAgICAqL1xuICAgIHJlbW92ZVByaXZhdGVSb29tOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLlJlbW92ZVByaXZhdGVSb29tUmVxLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlJlbW92ZVByaXZhdGVSb29tUmVzPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9SZW1vdmVQcml2YXRlUm9vbScsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLlJlbW92ZVByaXZhdGVSb29tUmVxLFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uUmVtb3ZlUHJpdmF0ZVJvb21SZXNcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvU2VhcmNoSW5NZXNzYWdlc1xuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5TZWFyY2hJbk1lc3NhZ2VzUmVzPj5cbiAgICAgKi9cbiAgICBzZWFyY2hJbk1lc3NhZ2VzOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLlNlYXJjaEluTWVzc2FnZXNSZXEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uU2VhcmNoSW5NZXNzYWdlc1Jlcz4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvU2VhcmNoSW5NZXNzYWdlcycsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLlNlYXJjaEluTWVzc2FnZXNSZXEsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5TZWFyY2hJbk1lc3NhZ2VzUmVzXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL1NlbmRHbGl0Y2hcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uU2VuZEdsaXRjaFJlcz4+XG4gICAgICovXG4gICAgc2VuZEdsaXRjaDogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5TZW5kR2xpdGNoUmVxLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlNlbmRHbGl0Y2hSZXM+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL1NlbmRHbGl0Y2gnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5TZW5kR2xpdGNoUmVxLFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uU2VuZEdsaXRjaFJlc1xuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9DcmVhdGVHcm91cENhbGxcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uQ3JlYXRlR3JvdXBDYWxsUmVzPj5cbiAgICAgKi9cbiAgICBjcmVhdGVHcm91cENhbGw6IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uQ3JlYXRlR3JvdXBDYWxsUmVxLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkNyZWF0ZUdyb3VwQ2FsbFJlcz4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvQ3JlYXRlR3JvdXBDYWxsJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uQ3JlYXRlR3JvdXBDYWxsUmVxLFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uQ3JlYXRlR3JvdXBDYWxsUmVzXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL0VuZEdyb3VwQ2FsbFxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5FbmRHcm91cENhbGxSZXM+PlxuICAgICAqL1xuICAgIGVuZEdyb3VwQ2FsbDogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5FbmRHcm91cENhbGxSZXEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uRW5kR3JvdXBDYWxsUmVzPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9FbmRHcm91cENhbGwnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5FbmRHcm91cENhbGxSZXEsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5FbmRHcm91cENhbGxSZXNcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvU2V0TXV0ZVNldHRpbmdzT2ZSb29tXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlNldE11dGVTZXR0aW5nc09mUm9vbVJlcz4+XG4gICAgICovXG4gICAgc2V0TXV0ZVNldHRpbmdzT2ZSb29tOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLlNldE11dGVTZXR0aW5nc09mUm9vbVJlcSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5TZXRNdXRlU2V0dGluZ3NPZlJvb21SZXM+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL1NldE11dGVTZXR0aW5nc09mUm9vbScsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLlNldE11dGVTZXR0aW5nc09mUm9vbVJlcSxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLlNldE11dGVTZXR0aW5nc09mUm9vbVJlc1xuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9VcGRhdGVTZXR0aW5nc1xuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5VcGRhdGVTZXR0aW5nc1Jlcz4+XG4gICAgICovXG4gICAgdXBkYXRlU2V0dGluZ3M6IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uVXBkYXRlU2V0dGluZ3NSZXEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uVXBkYXRlU2V0dGluZ3NSZXM+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL1VwZGF0ZVNldHRpbmdzJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uVXBkYXRlU2V0dGluZ3NSZXEsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5VcGRhdGVTZXR0aW5nc1Jlc1xuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9HZXRTZXR0aW5nc1xuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5HZXRTZXR0aW5nc1Jlcz4+XG4gICAgICovXG4gICAgZ2V0U2V0dGluZ3M6IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uR2V0U2V0dGluZ3NSZXEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uR2V0U2V0dGluZ3NSZXM+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL0dldFNldHRpbmdzJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uR2V0U2V0dGluZ3NSZXEsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5HZXRTZXR0aW5nc1Jlc1xuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9DaGVja0NhbGxBdmFpbGFiaWxpdHlTdGF0dXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uQ2hlY2tDYWxsQXZhaWxhYmlsaXR5U3RhdHVzUmVzPj5cbiAgICAgKi9cbiAgICBjaGVja0NhbGxBdmFpbGFiaWxpdHlTdGF0dXM6IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uQ2hlY2tDYWxsQXZhaWxhYmlsaXR5U3RhdHVzUmVxLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkNoZWNrQ2FsbEF2YWlsYWJpbGl0eVN0YXR1c1Jlcz4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvQ2hlY2tDYWxsQXZhaWxhYmlsaXR5U3RhdHVzJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uQ2hlY2tDYWxsQXZhaWxhYmlsaXR5U3RhdHVzUmVxLFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uQ2hlY2tDYWxsQXZhaWxhYmlsaXR5U3RhdHVzUmVzXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL1NhdmVMb2NhbE1lc3NhZ2VzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlNhdmVMb2NhbE1lc3NhZ2VSZXM+PlxuICAgICAqL1xuICAgIHNhdmVMb2NhbE1lc3NhZ2VzOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLlNhdmVMb2NhbE1lc3NhZ2VSZXEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uU2F2ZUxvY2FsTWVzc2FnZVJlcz4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvU2F2ZUxvY2FsTWVzc2FnZXMnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5TYXZlTG9jYWxNZXNzYWdlUmVxLFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uU2F2ZUxvY2FsTWVzc2FnZVJlc1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoR1JQQ19RVUVSWV9TRVJWSUNFX0NMSUVOVF9TRVRUSU5HUykgc2V0dGluZ3M6IGFueSxcbiAgICBASW5qZWN0KEdSUENfQ0xJRU5UX0ZBQ1RPUlkpIGNsaWVudEZhY3Rvcnk6IEdycGNDbGllbnRGYWN0b3J5PGFueT4sXG4gICAgcHJpdmF0ZSBoYW5kbGVyOiBHcnBjSGFuZGxlclxuICApIHtcbiAgICB0aGlzLmNsaWVudCA9IGNsaWVudEZhY3RvcnkuY3JlYXRlQ2xpZW50KFxuICAgICAgJ3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UnLFxuICAgICAgc2V0dGluZ3NcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL0dldFRpbWVcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uR2V0VGltZVJlcz5cbiAgICovXG4gIGdldFRpbWUoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5HZXRUaW1lUmVxLFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5HZXRUaW1lUmVzPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmdldFRpbWUocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9JZElzQXZhaWxhYmxlXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLklkSXNBdmFpbGFibGVSZXM+XG4gICAqL1xuICBpZElzQXZhaWxhYmxlKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uSWRJc0F2YWlsYWJsZVJlcSxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uSWRJc0F2YWlsYWJsZVJlcz4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5pZElzQXZhaWxhYmxlKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvU2V0SWRcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uU2V0SWRSZXM+XG4gICAqL1xuICBzZXRJZChcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLlNldElkUmVxLFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5TZXRJZFJlcz4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5zZXRJZChyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL0Jsb2NrVWlkXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLkJsb2NrVWlkUmVzPlxuICAgKi9cbiAgYmxvY2tVaWQoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5CbG9ja1VpZFJlcSxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uQmxvY2tVaWRSZXM+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAuYmxvY2tVaWQocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9VbmJsb2NrVWlkXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLlVuYmxvY2tVaWRSZXM+XG4gICAqL1xuICB1bmJsb2NrVWlkKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uVW5ibG9ja1VpZFJlcSxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uVW5ibG9ja1VpZFJlcz4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC51bmJsb2NrVWlkKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvUmVwb3J0XG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLlJlcG9ydFJlcz5cbiAgICovXG4gIHJlcG9ydChcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLlJlcG9ydFJlcSxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uUmVwb3J0UmVzPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLnJlcG9ydChyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL0dldEJsb2NrZWRMaXN0XG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLkdldEJsb2NrZWRMaXN0UmVzPlxuICAgKi9cbiAgZ2V0QmxvY2tlZExpc3QoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5HZXRCbG9ja2VkTGlzdFJlcSxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uR2V0QmxvY2tlZExpc3RSZXM+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAuZ2V0QmxvY2tlZExpc3QocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9HZXRJZEJ5VWlkXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLkdldElkQnlVaWRSZXM+XG4gICAqL1xuICBnZXRJZEJ5VWlkKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uR2V0SWRCeVVpZFJlcSxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uR2V0SWRCeVVpZFJlcz4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5nZXRJZEJ5VWlkKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvR2V0VWlkQnlJZFxuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5HZXRVaWRCeUlkUmVzPlxuICAgKi9cbiAgZ2V0VWlkQnlJZChcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkdldFVpZEJ5SWRSZXEsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLkdldFVpZEJ5SWRSZXM+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAuZ2V0VWlkQnlJZChyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL0dldElzVmVyaWZpZWRcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uR2V0SXNWZXJpZmllZFJlcz5cbiAgICovXG4gIGdldElzVmVyaWZpZWQoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5HZXRJc1ZlcmlmaWVkUmVxLFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5HZXRJc1ZlcmlmaWVkUmVzPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmdldElzVmVyaWZpZWQocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9TZWFyY2hVaWRcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uU2VhcmNoVWlkUmVzPlxuICAgKi9cbiAgc2VhcmNoVWlkKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uU2VhcmNoVWlkUmVxLFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5TZWFyY2hVaWRSZXM+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAuc2VhcmNoVWlkKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvR2V0TGFzdEFjdGl2aXR5XG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLkdldExhc3RBY3Rpdml0eVJlcz5cbiAgICovXG4gIGdldExhc3RBY3Rpdml0eShcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkdldExhc3RBY3Rpdml0eVJlcSxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uR2V0TGFzdEFjdGl2aXR5UmVzPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmdldExhc3RBY3Rpdml0eShyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL0ZldGNoTWVzc2FnZXNcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uRmV0Y2hNZXNzYWdlc1Jlcz5cbiAgICovXG4gIGZldGNoTWVzc2FnZXMoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5GZXRjaE1lc3NhZ2VzUmVxLFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5GZXRjaE1lc3NhZ2VzUmVzPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmZldGNoTWVzc2FnZXMocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9Db3VudElzSGlkZGVuTWVzc2FnZXNcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uQ291bnRJc0hpZGRlbk1lc3NhZ2VzUmVzPlxuICAgKi9cbiAgY291bnRJc0hpZGRlbk1lc3NhZ2VzKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uQ291bnRJc0hpZGRlbk1lc3NhZ2VzUmVxLFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5Db3VudElzSGlkZGVuTWVzc2FnZXNSZXM+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAuY291bnRJc0hpZGRlbk1lc3NhZ2VzKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvR2V0QWxsVXNlclJvb21NZXRhXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLkdldEFsbFVzZXJSb29tTWV0YVJlcz5cbiAgICovXG4gIGdldEFsbFVzZXJSb29tTWV0YShcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkdldEFsbFVzZXJSb29tTWV0YVJlcSxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uR2V0QWxsVXNlclJvb21NZXRhUmVzPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmdldEFsbFVzZXJSb29tTWV0YShyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL0dldFVzZXJSb29tTWV0YVxuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5HZXRVc2VyUm9vbU1ldGFSZXM+XG4gICAqL1xuICBnZXRVc2VyUm9vbU1ldGEoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5HZXRVc2VyUm9vbU1ldGFSZXEsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLkdldFVzZXJSb29tTWV0YVJlcz4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5nZXRVc2VyUm9vbU1ldGEocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9HZXRVc2VyTGFzdERlbGl2ZXJ5QWNrXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLkdldFVzZXJMYXN0RGVsaXZlcnlBY2tSZXM+XG4gICAqL1xuICBnZXRVc2VyTGFzdERlbGl2ZXJ5QWNrKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uR2V0VXNlckxhc3REZWxpdmVyeUFja1JlcSxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uR2V0VXNlckxhc3REZWxpdmVyeUFja1Jlcz4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5nZXRVc2VyTGFzdERlbGl2ZXJ5QWNrKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvR2V0TWVkaWFNZXRhZGF0YVxuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5HZXRNZWRpYU1ldGFkYXRhUmVzPlxuICAgKi9cbiAgZ2V0TWVkaWFNZXRhZGF0YShcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkdldE1lZGlhTWV0YWRhdGFSZXEsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLkdldE1lZGlhTWV0YWRhdGFSZXM+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAuZ2V0TWVkaWFNZXRhZGF0YShyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL0ZldGNoTWVkaWFzXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLkZldGNoTWVkaWFzUmVzPlxuICAgKi9cbiAgZmV0Y2hNZWRpYXMoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5GZXRjaE1lZGlhc1JlcSxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uRmV0Y2hNZWRpYXNSZXM+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAuZmV0Y2hNZWRpYXMocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9HZXRNZXRhQ291bnRzXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLkdldE1ldGFDb3VudHNSZXM+XG4gICAqL1xuICBnZXRNZXRhQ291bnRzKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uR2V0TWV0YUNvdW50c1JlcSxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uR2V0TWV0YUNvdW50c1Jlcz4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5nZXRNZXRhQ291bnRzKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvRmV0Y2hNZXRhTGlzdFxuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5GZXRjaE1ldGFMaXN0UmVzPlxuICAgKi9cbiAgZmV0Y2hNZXRhTGlzdChcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkZldGNoTWV0YUxpc3RSZXEsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLkZldGNoTWV0YUxpc3RSZXM+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAuZmV0Y2hNZXRhTGlzdChyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL0ZldGNoTWVzc2FnZU1ldGFJbmRleFxuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5GZXRjaE1lc3NhZ2VNZXRhSW5kZXhSZXM+XG4gICAqL1xuICBmZXRjaE1lc3NhZ2VNZXRhSW5kZXgoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5GZXRjaE1lc3NhZ2VNZXRhSW5kZXhSZXEsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLkZldGNoTWVzc2FnZU1ldGFJbmRleFJlcz4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5mZXRjaE1lc3NhZ2VNZXRhSW5kZXgocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9GZXRjaE1ldGFEZWxldGVkSW5kZXhlc1xuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5GZXRjaE1ldGFEZWxldGVkSW5kZXhlc1Jlcz5cbiAgICovXG4gIGZldGNoTWV0YURlbGV0ZWRJbmRleGVzKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uRmV0Y2hNZXRhRGVsZXRlZEluZGV4ZXNSZXEsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLkZldGNoTWV0YURlbGV0ZWRJbmRleGVzUmVzPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmZldGNoTWV0YURlbGV0ZWRJbmRleGVzKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvRmV0Y2hNZW50aW9uTGlzdFxuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5GZXRjaE1lbnRpb25MaXN0UmVzPlxuICAgKi9cbiAgZmV0Y2hNZW50aW9uTGlzdChcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkZldGNoTWVudGlvbkxpc3RSZXEsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLkZldGNoTWVudGlvbkxpc3RSZXM+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAuZmV0Y2hNZW50aW9uTGlzdChyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL0ZldGNoQ3VycmVudFVzZXJTZWVuRGF0YVxuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5GZXRjaEN1cnJlbnRVc2VyU2VlbkRhdGFSZXM+XG4gICAqL1xuICBmZXRjaEN1cnJlbnRVc2VyU2VlbkRhdGEoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5GZXRjaEN1cnJlbnRVc2VyU2VlbkRhdGFSZXEsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLkZldGNoQ3VycmVudFVzZXJTZWVuRGF0YVJlcz4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5mZXRjaEN1cnJlbnRVc2VyU2VlbkRhdGEocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9GZXRjaExhc3RPdGhlclVzZXJTZWVuRGF0YVxuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5GZXRjaExhc3RPdGhlclVzZXJTZWVuRGF0YVJlcz5cbiAgICovXG4gIGZldGNoTGFzdE90aGVyVXNlclNlZW5EYXRhKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uRmV0Y2hMYXN0T3RoZXJVc2VyU2VlbkRhdGFSZXEsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLkZldGNoTGFzdE90aGVyVXNlclNlZW5EYXRhUmVzPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmZldGNoTGFzdE90aGVyVXNlclNlZW5EYXRhKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvRmV0Y2hTZWVuQ291bnRPZkNoYW5uZWxNZXNzYWdlXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLkZldGNoU2VlbkNvdW50T2ZDaGFubmVsTWVzc2FnZVJlcz5cbiAgICovXG4gIGZldGNoU2VlbkNvdW50T2ZDaGFubmVsTWVzc2FnZShcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkZldGNoU2VlbkNvdW50T2ZDaGFubmVsTWVzc2FnZVJlcSxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uRmV0Y2hTZWVuQ291bnRPZkNoYW5uZWxNZXNzYWdlUmVzPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmZldGNoU2VlbkNvdW50T2ZDaGFubmVsTWVzc2FnZShyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL0ZldGNoVXNlckNhbGxzXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLkZldGNoVXNlckNhbGxzUmVzPlxuICAgKi9cbiAgZmV0Y2hVc2VyQ2FsbHMoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5GZXRjaFVzZXJDYWxsc1JlcSxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uRmV0Y2hVc2VyQ2FsbHNSZXM+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAuZmV0Y2hVc2VyQ2FsbHMocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9VcGRhdGVNZXNzYWdlXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLlVwZGF0ZU1lc3NhZ2VSZXM+XG4gICAqL1xuICB1cGRhdGVNZXNzYWdlKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uVXBkYXRlTWVzc2FnZVJlcSxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uVXBkYXRlTWVzc2FnZVJlcz4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC51cGRhdGVNZXNzYWdlKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvRGVsZXRlTWVzc2FnZVxuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5EZWxldGVNZXNzYWdlUmVzPlxuICAgKi9cbiAgZGVsZXRlTWVzc2FnZShcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkRlbGV0ZU1lc3NhZ2VSZXEsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLkRlbGV0ZU1lc3NhZ2VSZXM+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAuZGVsZXRlTWVzc2FnZShyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL0RlbGV0ZU90aGVyTWVzc2FnZVxuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5EZWxldGVNZXNzYWdlUmVzPlxuICAgKi9cbiAgZGVsZXRlT3RoZXJNZXNzYWdlKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uRGVsZXRlTWVzc2FnZVJlcSxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uRGVsZXRlTWVzc2FnZVJlcz4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5kZWxldGVPdGhlck1lc3NhZ2UocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9Gb3J3YXJkTWVzc2FnZXNcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uRm9yd2FyZE1lc3NhZ2VzUmVzPlxuICAgKi9cbiAgZm9yd2FyZE1lc3NhZ2VzKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uRm9yd2FyZE1lc3NhZ2VzUmVxLFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5Gb3J3YXJkTWVzc2FnZXNSZXM+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAuZm9yd2FyZE1lc3NhZ2VzKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvQWRkQXZhdGFyXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLkFkZEF2YXRhclJlcz5cbiAgICovXG4gIGFkZEF2YXRhcihcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkFkZEF2YXRhclJlcSxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uQWRkQXZhdGFyUmVzPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmFkZEF2YXRhcihyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL1JlbW92ZUF2YXRhclxuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5SZW1vdmVBdmF0YXJSZXM+XG4gICAqL1xuICByZW1vdmVBdmF0YXIoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5SZW1vdmVBdmF0YXJSZXEsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLlJlbW92ZUF2YXRhclJlcz4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5yZW1vdmVBdmF0YXIocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9SZW1vdmVQcml2YXRlUm9vbVxuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5SZW1vdmVQcml2YXRlUm9vbVJlcz5cbiAgICovXG4gIHJlbW92ZVByaXZhdGVSb29tKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uUmVtb3ZlUHJpdmF0ZVJvb21SZXEsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLlJlbW92ZVByaXZhdGVSb29tUmVzPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLnJlbW92ZVByaXZhdGVSb29tKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvU2VhcmNoSW5NZXNzYWdlc1xuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5TZWFyY2hJbk1lc3NhZ2VzUmVzPlxuICAgKi9cbiAgc2VhcmNoSW5NZXNzYWdlcyhcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLlNlYXJjaEluTWVzc2FnZXNSZXEsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLlNlYXJjaEluTWVzc2FnZXNSZXM+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAuc2VhcmNoSW5NZXNzYWdlcyhyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL1NlbmRHbGl0Y2hcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uU2VuZEdsaXRjaFJlcz5cbiAgICovXG4gIHNlbmRHbGl0Y2goXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5TZW5kR2xpdGNoUmVxLFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5TZW5kR2xpdGNoUmVzPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLnNlbmRHbGl0Y2gocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9DcmVhdGVHcm91cENhbGxcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uQ3JlYXRlR3JvdXBDYWxsUmVzPlxuICAgKi9cbiAgY3JlYXRlR3JvdXBDYWxsKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uQ3JlYXRlR3JvdXBDYWxsUmVxLFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5DcmVhdGVHcm91cENhbGxSZXM+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAuY3JlYXRlR3JvdXBDYWxsKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvRW5kR3JvdXBDYWxsXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLkVuZEdyb3VwQ2FsbFJlcz5cbiAgICovXG4gIGVuZEdyb3VwQ2FsbChcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkVuZEdyb3VwQ2FsbFJlcSxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uRW5kR3JvdXBDYWxsUmVzPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmVuZEdyb3VwQ2FsbChyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL1NldE11dGVTZXR0aW5nc09mUm9vbVxuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5TZXRNdXRlU2V0dGluZ3NPZlJvb21SZXM+XG4gICAqL1xuICBzZXRNdXRlU2V0dGluZ3NPZlJvb20oXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5TZXRNdXRlU2V0dGluZ3NPZlJvb21SZXEsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLlNldE11dGVTZXR0aW5nc09mUm9vbVJlcz4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5zZXRNdXRlU2V0dGluZ3NPZlJvb20ocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9VcGRhdGVTZXR0aW5nc1xuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5VcGRhdGVTZXR0aW5nc1Jlcz5cbiAgICovXG4gIHVwZGF0ZVNldHRpbmdzKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uVXBkYXRlU2V0dGluZ3NSZXEsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLlVwZGF0ZVNldHRpbmdzUmVzPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLnVwZGF0ZVNldHRpbmdzKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL3Byb3RvLnB1Yi52MS5xdWVyeS5RdWVyeVNlcnZpY2UvR2V0U2V0dGluZ3NcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uR2V0U2V0dGluZ3NSZXM+XG4gICAqL1xuICBnZXRTZXR0aW5ncyhcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkdldFNldHRpbmdzUmVxLFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5HZXRTZXR0aW5nc1Jlcz4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5nZXRTZXR0aW5ncyhyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9wcm90by5wdWIudjEucXVlcnkuUXVlcnlTZXJ2aWNlL0NoZWNrQ2FsbEF2YWlsYWJpbGl0eVN0YXR1c1xuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5DaGVja0NhbGxBdmFpbGFiaWxpdHlTdGF0dXNSZXM+XG4gICAqL1xuICBjaGVja0NhbGxBdmFpbGFiaWxpdHlTdGF0dXMoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5DaGVja0NhbGxBdmFpbGFiaWxpdHlTdGF0dXNSZXEsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLkNoZWNrQ2FsbEF2YWlsYWJpbGl0eVN0YXR1c1Jlcz4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5jaGVja0NhbGxBdmFpbGFiaWxpdHlTdGF0dXMocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvcHJvdG8ucHViLnYxLnF1ZXJ5LlF1ZXJ5U2VydmljZS9TYXZlTG9jYWxNZXNzYWdlc1xuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5TYXZlTG9jYWxNZXNzYWdlUmVzPlxuICAgKi9cbiAgc2F2ZUxvY2FsTWVzc2FnZXMoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5TYXZlTG9jYWxNZXNzYWdlUmVxLFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5TYXZlTG9jYWxNZXNzYWdlUmVzPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLnNhdmVMb2NhbE1lc3NhZ2VzKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cbn1cbiJdfQ==