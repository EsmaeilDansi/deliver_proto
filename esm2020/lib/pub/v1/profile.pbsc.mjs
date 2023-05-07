/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { Inject, Injectable, Optional } from '@angular/core';
import { GrpcCallType, GrpcMetadata } from '@ngx-grpc/common';
import { GRPC_CLIENT_FACTORY, takeMessages, throwStatusErrors } from '@ngx-grpc/core';
import * as thisProto from './profile.pb';
import { GRPC_CONTACT_SERVICE_CLIENT_SETTINGS, GRPC_USER_SERVICE_CLIENT_SETTINGS, GRPC_AUTH_SERVICE_CLIENT_SETTINGS, GRPC_SESSION_SERVICE_CLIENT_SETTINGS } from './profile.pbconf';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-grpc/core";
/**
 * Service client implementation for proto.pub.v1.profile.ContactService
 */
export class ContactServiceClient {
    constructor(settings, clientFactory, handler) {
        this.handler = handler;
        /**
         * Raw RPC implementation for each service client method.
         * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
         * Attention: these methods do not throw errors when non-zero status codes are received.
         */
        this.$raw = {
            /**
             * Unary call: /proto.pub.v1.profile.ContactService/SaveContacts
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.SaveContactsRes>>
             */
            saveContacts: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.profile.ContactService/SaveContacts',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.SaveContactsReq,
                    responseClass: thisProto.SaveContactsRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.profile.ContactService/GetContactList
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.GetContactListRes>>
             */
            getContactList: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.profile.ContactService/GetContactList',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.GetContactListReq,
                    responseClass: thisProto.GetContactListRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.profile.ContactService/GetContactListUsers
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.GetContactListUsersRes>>
             */
            getContactListUsers: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.profile.ContactService/GetContactListUsers',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.GetContactListUsersReq,
                    responseClass: thisProto.GetContactListUsersRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.profile.ContactService/GetUserByUid
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.GetUserByUidRes>>
             */
            getUserByUid: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.profile.ContactService/GetUserByUid',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.GetUserByUidReq,
                    responseClass: thisProto.GetUserByUidRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.profile.ContactService/SearchUserByName
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.UserSearchRes>>
             */
            searchUserByName: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.profile.ContactService/SearchUserByName',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.UserSearchReq,
                    responseClass: thisProto.UserSearchRes
                });
            }
        };
        this.client = clientFactory.createClient('proto.pub.v1.profile.ContactService', settings);
    }
    /**
     * Unary call @/proto.pub.v1.profile.ContactService/SaveContacts
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.SaveContactsRes>
     */
    saveContacts(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .saveContacts(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.profile.ContactService/GetContactList
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetContactListRes>
     */
    getContactList(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .getContactList(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.profile.ContactService/GetContactListUsers
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetContactListUsersRes>
     */
    getContactListUsers(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .getContactListUsers(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.profile.ContactService/GetUserByUid
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetUserByUidRes>
     */
    getUserByUid(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .getUserByUid(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.profile.ContactService/SearchUserByName
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.UserSearchRes>
     */
    searchUserByName(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .searchUserByName(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
}
ContactServiceClient.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: ContactServiceClient, deps: [{ token: GRPC_CONTACT_SERVICE_CLIENT_SETTINGS, optional: true }, { token: GRPC_CLIENT_FACTORY }, { token: i1.GrpcHandler }], target: i0.ɵɵFactoryTarget.Injectable });
ContactServiceClient.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: ContactServiceClient, providedIn: 'any' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: ContactServiceClient, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'any' }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [GRPC_CONTACT_SERVICE_CLIENT_SETTINGS]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [GRPC_CLIENT_FACTORY]
                }] }, { type: i1.GrpcHandler }]; } });
/**
 * Service client implementation for proto.pub.v1.profile.UserService
 */
export class UserServiceClient {
    constructor(settings, clientFactory, handler) {
        this.handler = handler;
        /**
         * Raw RPC implementation for each service client method.
         * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
         * Attention: these methods do not throw errors when non-zero status codes are received.
         */
        this.$raw = {
            /**
             * Unary call: /proto.pub.v1.profile.UserService/SaveUserProfile
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.SaveUserProfileRes>>
             */
            saveUserProfile: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.profile.UserService/SaveUserProfile',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.SaveUserProfileReq,
                    responseClass: thisProto.SaveUserProfileRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.profile.UserService/UpdateEmail
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.UpdateEmailRes>>
             */
            updateEmail: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.profile.UserService/UpdateEmail',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.UpdateEmailReq,
                    responseClass: thisProto.UpdateEmailRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.profile.UserService/ResendEmailVerification
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.ResendEmailVerificationRes>>
             */
            resendEmailVerification: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.profile.UserService/ResendEmailVerification',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.ResendEmailVerificationReq,
                    responseClass: thisProto.ResendEmailVerificationRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.profile.UserService/UpdatePassword
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.UpdatePasswordRes>>
             */
            updatePassword: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.profile.UserService/UpdatePassword',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.UpdatePasswordReq,
                    responseClass: thisProto.UpdatePasswordRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.profile.UserService/GetUserProfile
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.GetUserProfileRes>>
             */
            getUserProfile: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.profile.UserService/GetUserProfile',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.GetUserProfileReq,
                    responseClass: thisProto.GetUserProfileRes
                });
            }
        };
        this.client = clientFactory.createClient('proto.pub.v1.profile.UserService', settings);
    }
    /**
     * Unary call @/proto.pub.v1.profile.UserService/SaveUserProfile
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.SaveUserProfileRes>
     */
    saveUserProfile(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .saveUserProfile(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.profile.UserService/UpdateEmail
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.UpdateEmailRes>
     */
    updateEmail(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .updateEmail(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.profile.UserService/ResendEmailVerification
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ResendEmailVerificationRes>
     */
    resendEmailVerification(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .resendEmailVerification(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.profile.UserService/UpdatePassword
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.UpdatePasswordRes>
     */
    updatePassword(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .updatePassword(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.profile.UserService/GetUserProfile
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetUserProfileRes>
     */
    getUserProfile(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .getUserProfile(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
}
UserServiceClient.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: UserServiceClient, deps: [{ token: GRPC_USER_SERVICE_CLIENT_SETTINGS, optional: true }, { token: GRPC_CLIENT_FACTORY }, { token: i1.GrpcHandler }], target: i0.ɵɵFactoryTarget.Injectable });
UserServiceClient.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: UserServiceClient, providedIn: 'any' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: UserServiceClient, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'any' }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [GRPC_USER_SERVICE_CLIENT_SETTINGS]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [GRPC_CLIENT_FACTORY]
                }] }, { type: i1.GrpcHandler }]; } });
/**
 * Service client implementation for proto.pub.v1.profile.AuthService
 */
export class AuthServiceClient {
    constructor(settings, clientFactory, handler) {
        this.handler = handler;
        /**
         * Raw RPC implementation for each service client method.
         * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
         * Attention: these methods do not throw errors when non-zero status codes are received.
         */
        this.$raw = {
            /**
             * Unary call: /proto.pub.v1.profile.AuthService/GetVerificationCode
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.GetVerificationCodeRes>>
             */
            getVerificationCode: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.profile.AuthService/GetVerificationCode',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.GetVerificationCodeReq,
                    responseClass: thisProto.GetVerificationCodeRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.profile.AuthService/VerifyAndGetToken
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.AccessTokenRes>>
             */
            verifyAndGetToken: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.profile.AuthService/VerifyAndGetToken',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.VerifyCodeReq,
                    responseClass: thisProto.AccessTokenRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.profile.AuthService/CheckQrCodeIsVerifiedAndLogin
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.AccessTokenRes>>
             */
            checkQrCodeIsVerifiedAndLogin: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.profile.AuthService/CheckQrCodeIsVerifiedAndLogin',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.CheckQrCodeIsVerifiedAndLoginReq,
                    responseClass: thisProto.AccessTokenRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.profile.AuthService/RenewAccessToken
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.RenewAccessTokenRes>>
             */
            renewAccessToken: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.profile.AuthService/RenewAccessToken',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.RenewAccessTokenReq,
                    responseClass: thisProto.RenewAccessTokenRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.profile.AuthService/VerifyEmailAddress
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.VerifyEmailAddressRes>>
             */
            verifyEmailAddress: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.profile.AuthService/VerifyEmailAddress',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.VerifyEmailAddressReq,
                    responseClass: thisProto.VerifyEmailAddressRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.profile.AuthService/SendErasePasswordEmail
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.SendErasePasswordEmailRes>>
             */
            sendErasePasswordEmail: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.profile.AuthService/SendErasePasswordEmail',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.SendErasePasswordEmailReq,
                    responseClass: thisProto.SendErasePasswordEmailRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.profile.AuthService/ErasePassword
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.ErasePasswordRes>>
             */
            erasePassword: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.profile.AuthService/ErasePassword',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.ErasePasswordReq,
                    responseClass: thisProto.ErasePasswordRes
                });
            }
        };
        this.client = clientFactory.createClient('proto.pub.v1.profile.AuthService', settings);
    }
    /**
     * Unary call @/proto.pub.v1.profile.AuthService/GetVerificationCode
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetVerificationCodeRes>
     */
    getVerificationCode(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .getVerificationCode(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.profile.AuthService/VerifyAndGetToken
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.AccessTokenRes>
     */
    verifyAndGetToken(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .verifyAndGetToken(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.profile.AuthService/CheckQrCodeIsVerifiedAndLogin
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.AccessTokenRes>
     */
    checkQrCodeIsVerifiedAndLogin(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .checkQrCodeIsVerifiedAndLogin(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.profile.AuthService/RenewAccessToken
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.RenewAccessTokenRes>
     */
    renewAccessToken(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .renewAccessToken(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.profile.AuthService/VerifyEmailAddress
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.VerifyEmailAddressRes>
     */
    verifyEmailAddress(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .verifyEmailAddress(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.profile.AuthService/SendErasePasswordEmail
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.SendErasePasswordEmailRes>
     */
    sendErasePasswordEmail(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .sendErasePasswordEmail(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.profile.AuthService/ErasePassword
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ErasePasswordRes>
     */
    erasePassword(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .erasePassword(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
}
AuthServiceClient.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: AuthServiceClient, deps: [{ token: GRPC_AUTH_SERVICE_CLIENT_SETTINGS, optional: true }, { token: GRPC_CLIENT_FACTORY }, { token: i1.GrpcHandler }], target: i0.ɵɵFactoryTarget.Injectable });
AuthServiceClient.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: AuthServiceClient, providedIn: 'any' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: AuthServiceClient, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'any' }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [GRPC_AUTH_SERVICE_CLIENT_SETTINGS]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [GRPC_CLIENT_FACTORY]
                }] }, { type: i1.GrpcHandler }]; } });
/**
 * Service client implementation for proto.pub.v1.profile.SessionService
 */
export class SessionServiceClient {
    constructor(settings, clientFactory, handler) {
        this.handler = handler;
        /**
         * Raw RPC implementation for each service client method.
         * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
         * Attention: these methods do not throw errors when non-zero status codes are received.
         */
        this.$raw = {
            /**
             * Unary call: /proto.pub.v1.profile.SessionService/VerifyQrCodeToken
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.VerifyQrCodeTokenRes>>
             */
            verifyQrCodeToken: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.profile.SessionService/VerifyQrCodeToken',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.VerifyQrCodeTokenReq,
                    responseClass: thisProto.VerifyQrCodeTokenRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.profile.SessionService/GetMySessions
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.GetMySessionsRes>>
             */
            getMySessions: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.profile.SessionService/GetMySessions',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.GetMySessionsReq,
                    responseClass: thisProto.GetMySessionsRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.profile.SessionService/UpdateSessionPlatformInformation
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.UpdateSessionPlatformInformationRes>>
             */
            updateSessionPlatformInformation: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.profile.SessionService/UpdateSessionPlatformInformation',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.UpdateSessionPlatformInformationReq,
                    responseClass: thisProto.UpdateSessionPlatformInformationRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.profile.SessionService/LogoutSession
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.LogoutSessionRes>>
             */
            logoutSession: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.profile.SessionService/LogoutSession',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.LogoutSessionReq,
                    responseClass: thisProto.LogoutSessionRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.profile.SessionService/RevokeSession
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.RevokeSessionRes>>
             */
            revokeSession: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.profile.SessionService/RevokeSession',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.RevokeSessionReq,
                    responseClass: thisProto.RevokeSessionRes
                });
            },
            /**
             * Unary call: /proto.pub.v1.profile.SessionService/RevokeAllOtherSessions
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.RevokeAllOtherSessionsRes>>
             */
            revokeAllOtherSessions: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/proto.pub.v1.profile.SessionService/RevokeAllOtherSessions',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.RevokeAllOtherSessionsReq,
                    responseClass: thisProto.RevokeAllOtherSessionsRes
                });
            }
        };
        this.client = clientFactory.createClient('proto.pub.v1.profile.SessionService', settings);
    }
    /**
     * Unary call @/proto.pub.v1.profile.SessionService/VerifyQrCodeToken
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.VerifyQrCodeTokenRes>
     */
    verifyQrCodeToken(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .verifyQrCodeToken(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.profile.SessionService/GetMySessions
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetMySessionsRes>
     */
    getMySessions(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .getMySessions(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.profile.SessionService/UpdateSessionPlatformInformation
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.UpdateSessionPlatformInformationRes>
     */
    updateSessionPlatformInformation(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .updateSessionPlatformInformation(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.profile.SessionService/LogoutSession
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.LogoutSessionRes>
     */
    logoutSession(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .logoutSession(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.profile.SessionService/RevokeSession
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.RevokeSessionRes>
     */
    revokeSession(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .revokeSession(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/proto.pub.v1.profile.SessionService/RevokeAllOtherSessions
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.RevokeAllOtherSessionsRes>
     */
    revokeAllOtherSessions(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .revokeAllOtherSessions(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
}
SessionServiceClient.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: SessionServiceClient, deps: [{ token: GRPC_SESSION_SERVICE_CLIENT_SETTINGS, optional: true }, { token: GRPC_CLIENT_FACTORY }, { token: i1.GrpcHandler }], target: i0.ɵɵFactoryTarget.Injectable });
SessionServiceClient.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: SessionServiceClient, providedIn: 'any' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: SessionServiceClient, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'any' }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [GRPC_SESSION_SERVICE_CLIENT_SETTINGS]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [GRPC_CLIENT_FACTORY]
                }] }, { type: i1.GrpcHandler }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5wYnNjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcHJvdG8vc3JjL2xpYi9wdWIvdjEvcHJvZmlsZS5wYnNjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsY0FBYztBQUNkLEVBQUU7QUFDRiwyQkFBMkI7QUFDM0IsOENBQThDO0FBQzlDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQ0wsWUFBWSxFQUlaLFlBQVksRUFDYixNQUFNLGtCQUFrQixDQUFDO0FBQzFCLE9BQU8sRUFDTCxtQkFBbUIsRUFFbkIsWUFBWSxFQUNaLGlCQUFpQixFQUNsQixNQUFNLGdCQUFnQixDQUFDO0FBRXhCLE9BQU8sS0FBSyxTQUFTLE1BQU0sY0FBYyxDQUFDO0FBUTFDLE9BQU8sRUFDTCxvQ0FBb0MsRUFDcEMsaUNBQWlDLEVBQ2pDLGlDQUFpQyxFQUNqQyxvQ0FBb0MsRUFDckMsTUFBTSxrQkFBa0IsQ0FBQzs7O0FBQzFCOztHQUVHO0FBRUgsTUFBTSxPQUFPLG9CQUFvQjtJQW9IL0IsWUFDNEQsUUFBYSxFQUMxQyxhQUFxQyxFQUMxRCxPQUFvQjtRQUFwQixZQUFPLEdBQVAsT0FBTyxDQUFhO1FBcEg5Qjs7OztXQUlHO1FBQ0gsU0FBSSxHQUFHO1lBQ0w7Ozs7OztlQU1HO1lBQ0gsWUFBWSxFQUFFLENBQ1osV0FBc0MsRUFDdEMsZUFBZSxHQUFHLElBQUksWUFBWSxFQUFFLEVBQ2MsRUFBRTtnQkFDcEQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztvQkFDekIsSUFBSSxFQUFFLFlBQVksQ0FBQyxLQUFLO29CQUN4QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07b0JBQ25CLElBQUksRUFBRSxtREFBbUQ7b0JBQ3pELFdBQVc7b0JBQ1gsZUFBZTtv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RDs7Ozs7O09BTUc7SUFDSCxhQUFhLENBQ1gsV0FBdUMsRUFDdkMsZUFBZSxHQUFHLElBQUksWUFBWSxFQUFFO1FBRXBDLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixhQUFhLENBQUMsV0FBVyxFQUFFLGVBQWUsQ0FBQzthQUMzQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxhQUFhLENBQ1gsV0FBdUMsRUFDdkMsZUFBZSxHQUFHLElBQUksWUFBWSxFQUFFO1FBRXBDLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixhQUFhLENBQUMsV0FBVyxFQUFFLGVBQWUsQ0FBQzthQUMzQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxzQkFBc0IsQ0FDcEIsV0FBZ0QsRUFDaEQsZUFBZSxHQUFHLElBQUksWUFBWSxFQUFFO1FBRXBDLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixzQkFBc0IsQ0FBQyxXQUFXLEVBQUUsZUFBZSxDQUFDO2FBQ3BELElBQUksQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7aUhBblBVLG9CQUFvQixrQkEySVQsb0NBQW9DLDZCQUNoRCxtQkFBbUI7cUhBNUlsQixvQkFBb0IsY0FEUCxLQUFLOzJGQUNsQixvQkFBb0I7a0JBRGhDLFVBQVU7bUJBQUMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFOzswQkE0STVCLFFBQVE7OzBCQUFJLE1BQU07MkJBQUMsb0NBQW9DOzswQkFDdkQsTUFBTTsyQkFBQyxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgKi9cbi8vIEB0cy1ub2NoZWNrXG4vL1xuLy8gVEhJUyBJUyBBIEdFTkVSQVRFRCBGSUxFXG4vLyBETyBOT1QgTU9ESUZZIElUISBZT1VSIENIQU5HRVMgV0lMTCBCRSBMT1NUXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBHcnBjQ2FsbFR5cGUsXG4gIEdycGNDbGllbnQsXG4gIEdycGNDbGllbnRGYWN0b3J5LFxuICBHcnBjRXZlbnQsXG4gIEdycGNNZXRhZGF0YVxufSBmcm9tICdAbmd4LWdycGMvY29tbW9uJztcbmltcG9ydCB7XG4gIEdSUENfQ0xJRU5UX0ZBQ1RPUlksXG4gIEdycGNIYW5kbGVyLFxuICB0YWtlTWVzc2FnZXMsXG4gIHRocm93U3RhdHVzRXJyb3JzXG59IGZyb20gJ0BuZ3gtZ3JwYy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCAqIGFzIHRoaXNQcm90byBmcm9tICcuL3Byb2ZpbGUucGInO1xuaW1wb3J0ICogYXMgcHJvdG9QdWJWMU1vZGVsczAwMCBmcm9tICcuLi8uLi9wdWIvdjEvbW9kZWxzL3VpZC5wYic7XG5pbXBvcnQgKiBhcyBwcm90b1B1YlYxTW9kZWxzMDAxIGZyb20gJy4uLy4uL3B1Yi92MS9tb2RlbHMvcGhvbmUucGInO1xuaW1wb3J0ICogYXMgcHJvdG9QdWJWMU1vZGVsczAwMiBmcm9tICcuLi8uLi9wdWIvdjEvbW9kZWxzL2NhdGVnb3JpZXMucGInO1xuaW1wb3J0ICogYXMgcHJvdG9QdWJWMU1vZGVsczAwMyBmcm9tICcuLi8uLi9wdWIvdjEvbW9kZWxzL3BsYXRmb3JtLnBiJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMDQgZnJvbSAnLi4vLi4vcHViL3YxL21vZGVscy9jb250YWN0LnBiJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMDUgZnJvbSAnLi4vLi4vcHViL3YxL21vZGVscy91c2VyLnBiJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMDYgZnJvbSAnLi4vLi4vcHViL3YxL21vZGVscy9zZXNzaW9uLnBiJztcbmltcG9ydCB7XG4gIEdSUENfQ09OVEFDVF9TRVJWSUNFX0NMSUVOVF9TRVRUSU5HUyxcbiAgR1JQQ19VU0VSX1NFUlZJQ0VfQ0xJRU5UX1NFVFRJTkdTLFxuICBHUlBDX0FVVEhfU0VSVklDRV9DTElFTlRfU0VUVElOR1MsXG4gIEdSUENfU0VTU0lPTl9TRVJWSUNFX0NMSUVOVF9TRVRUSU5HU1xufSBmcm9tICcuL3Byb2ZpbGUucGJjb25mJztcbi8qKlxuICogU2VydmljZSBjbGllbnQgaW1wbGVtZW50YXRpb24gZm9yIHByb3RvLnB1Yi52MS5wcm9maWxlLkNvbnRhY3RTZXJ2aWNlXG4gKi9cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ2FueScgfSlcbmV4cG9ydCBjbGFzcyBDb250YWN0U2VydmljZUNsaWVudCB7XG4gIHByaXZhdGUgY2xpZW50OiBHcnBjQ2xpZW50PGFueT47XG5cbiAgLyoqXG4gICAqIFJhdyBSUEMgaW1wbGVtZW50YXRpb24gZm9yIGVhY2ggc2VydmljZSBjbGllbnQgbWV0aG9kLlxuICAgKiBUaGUgcmF3IG1ldGhvZHMgcHJvdmlkZSBtb3JlIGNvbnRyb2wgb24gdGhlIGluY29taW5nIGRhdGEgYW5kIGV2ZW50cy4gRS5nLiB0aGV5IGNhbiBiZSB1c2VmdWwgdG8gcmVhZCBzdGF0dXMgYE9LYCBtZXRhZGF0YS5cbiAgICogQXR0ZW50aW9uOiB0aGVzZSBtZXRob2RzIGRvIG5vdCB0aHJvdyBlcnJvcnMgd2hlbiBub24temVybyBzdGF0dXMgY29kZXMgYXJlIHJlY2VpdmVkLlxuICAgKi9cbiAgJHJhdyA9IHtcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvcHJvdG8ucHViLnYxLnByb2ZpbGUuQ29udGFjdFNlcnZpY2UvU2F2ZUNvbnRhY3RzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlNhdmVDb250YWN0c1Jlcz4+XG4gICAgICovXG4gICAgc2F2ZUNvbnRhY3RzOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLlNhdmVDb250YWN0c1JlcSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5TYXZlQ29udGFjdHNSZXM+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9wcm90by5wdWIudjEucHJvZmlsZS5Db250YWN0U2VydmljZS9TYXZlQ29udGFjdHMnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5TYXZlQ29udGFjdHNSZXEsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5TYXZlQ29udGFjdHNSZXNcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL3Byb3RvLnB1Yi52MS5wcm9maWxlLkNvbnRhY3RTZXJ2aWNlL0dldENvbnRhY3RMaXN0XG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkdldENvbnRhY3RMaXN0UmVzPj5cbiAgICAgKi9cbiAgICBnZXRDb250YWN0TGlzdDogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5HZXRDb250YWN0TGlzdFJlcSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5HZXRDb250YWN0TGlzdFJlcz4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL3Byb3RvLnB1Yi52MS5wcm9maWxlLkNvbnRhY3RTZXJ2aWNlL0dldENvbnRhY3RMaXN0JyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uR2V0Q29udGFjdExpc3RSZXEsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5HZXRDb250YWN0TGlzdFJlc1xuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvcHJvdG8ucHViLnYxLnByb2ZpbGUuQ29udGFjdFNlcnZpY2UvR2V0Q29udGFjdExpc3RVc2Vyc1xuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5HZXRDb250YWN0TGlzdFVzZXJzUmVzPj5cbiAgICAgKi9cbiAgICBnZXRDb250YWN0TGlzdFVzZXJzOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkdldENvbnRhY3RMaXN0VXNlcnNSZXEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uR2V0Q29udGFjdExpc3RVc2Vyc1Jlcz4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL3Byb3RvLnB1Yi52MS5wcm9maWxlLkNvbnRhY3RTZXJ2aWNlL0dldENvbnRhY3RMaXN0VXNlcnMnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5HZXRDb250YWN0TGlzdFVzZXJzUmVxLFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uR2V0Q29udGFjdExpc3RVc2Vyc1Jlc1xuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvcHJvdG8ucHViLnYxLnByb2ZpbGUuQ29udGFjdFNlcnZpY2UvR2V0VXNlckJ5VWlkXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkdldFVzZXJCeVVpZFJlcz4+XG4gICAgICovXG4gICAgZ2V0VXNlckJ5VWlkOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkdldFVzZXJCeVVpZFJlcSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5HZXRVc2VyQnlVaWRSZXM+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9wcm90by5wdWIudjEucHJvZmlsZS5Db250YWN0U2VydmljZS9HZXRVc2VyQnlVaWQnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5HZXRVc2VyQnlVaWRSZXEsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5HZXRVc2VyQnlVaWRSZXNcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL3Byb3RvLnB1Yi52MS5wcm9maWxlLkNvbnRhY3RTZXJ2aWNlL1NlYXJjaFVzZXJCeU5hbWVcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uVXNlclNlYXJjaFJlcz4+XG4gICAgICovXG4gICAgc2VhcmNoVXNlckJ5TmFtZTogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5Vc2VyU2VhcmNoUmVxLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlVzZXJTZWFyY2hSZXM+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9wcm90by5wdWIudjEucHJvZmlsZS5Db250YWN0U2VydmljZS9TZWFyY2hVc2VyQnlOYW1lJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uVXNlclNlYXJjaFJlcSxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLlVzZXJTZWFyY2hSZXNcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KEdSUENfQ09OVEFDVF9TRVJWSUNFX0NMSUVOVF9TRVRUSU5HUykgc2V0dGluZ3M6IGFueSxcbiAgICBASW5qZWN0KEdSUENfQ0xJRU5UX0ZBQ1RPUlkpIGNsaWVudEZhY3Rvcnk6IEdycGNDbGllbnRGYWN0b3J5PGFueT4sXG4gICAgcHJpdmF0ZSBoYW5kbGVyOiBHcnBjSGFuZGxlclxuICApIHtcbiAgICB0aGlzLmNsaWVudCA9IGNsaWVudEZhY3RvcnkuY3JlYXRlQ2xpZW50KFxuICAgICAgJ3Byb3RvLnB1Yi52MS5wcm9maWxlLkNvbnRhY3RTZXJ2aWNlJyxcbiAgICAgIHNldHRpbmdzXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvcHJvdG8ucHViLnYxLnByb2ZpbGUuQ29udGFjdFNlcnZpY2UvU2F2ZUNvbnRhY3RzXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLlNhdmVDb250YWN0c1Jlcz5cbiAgICovXG4gIHNhdmVDb250YWN0cyhcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLlNhdmVDb250YWN0c1JlcSxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uU2F2ZUNvbnRhY3RzUmVzPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLnNhdmVDb250YWN0cyhyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9wcm90by5wdWIudjEucHJvZmlsZS5Db250YWN0U2VydmljZS9HZXRDb250YWN0TGlzdFxuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5HZXRDb250YWN0TGlzdFJlcz5cbiAgICovXG4gIGdldENvbnRhY3RMaXN0KFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uR2V0Q29udGFjdExpc3RSZXEsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLkdldENvbnRhY3RMaXN0UmVzPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmdldENvbnRhY3RMaXN0KHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL3Byb3RvLnB1Yi52MS5wcm9maWxlLkNvbnRhY3RTZXJ2aWNlL0dldENvbnRhY3RMaXN0VXNlcnNcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uR2V0Q29udGFjdExpc3RVc2Vyc1Jlcz5cbiAgICovXG4gIGdldENvbnRhY3RMaXN0VXNlcnMoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5HZXRDb250YWN0TGlzdFVzZXJzUmVxLFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5HZXRDb250YWN0TGlzdFVzZXJzUmVzPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmdldENvbnRhY3RMaXN0VXNlcnMocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvcHJvdG8ucHViLnYxLnByb2ZpbGUuQ29udGFjdFNlcnZpY2UvR2V0VXNlckJ5VWlkXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLkdldFVzZXJCeVVpZFJlcz5cbiAgICovXG4gIGdldFVzZXJCeVVpZChcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkdldFVzZXJCeVVpZFJlcSxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uR2V0VXNlckJ5VWlkUmVzPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmdldFVzZXJCeVVpZChyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9wcm90by5wdWIudjEucHJvZmlsZS5Db250YWN0U2VydmljZS9TZWFyY2hVc2VyQnlOYW1lXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLlVzZXJTZWFyY2hSZXM+XG4gICAqL1xuICBzZWFyY2hVc2VyQnlOYW1lKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uVXNlclNlYXJjaFJlcSxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uVXNlclNlYXJjaFJlcz4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5zZWFyY2hVc2VyQnlOYW1lKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cbn1cbi8qKlxuICogU2VydmljZSBjbGllbnQgaW1wbGVtZW50YXRpb24gZm9yIHByb3RvLnB1Yi52MS5wcm9maWxlLlVzZXJTZXJ2aWNlXG4gKi9cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ2FueScgfSlcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZUNsaWVudCB7XG4gIHByaXZhdGUgY2xpZW50OiBHcnBjQ2xpZW50PGFueT47XG5cbiAgLyoqXG4gICAqIFJhdyBSUEMgaW1wbGVtZW50YXRpb24gZm9yIGVhY2ggc2VydmljZSBjbGllbnQgbWV0aG9kLlxuICAgKiBUaGUgcmF3IG1ldGhvZHMgcHJvdmlkZSBtb3JlIGNvbnRyb2wgb24gdGhlIGluY29taW5nIGRhdGEgYW5kIGV2ZW50cy4gRS5nLiB0aGV5IGNhbiBiZSB1c2VmdWwgdG8gcmVhZCBzdGF0dXMgYE9LYCBtZXRhZGF0YS5cbiAgICogQXR0ZW50aW9uOiB0aGVzZSBtZXRob2RzIGRvIG5vdCB0aHJvdyBlcnJvcnMgd2hlbiBub24temVybyBzdGF0dXMgY29kZXMgYXJlIHJlY2VpdmVkLlxuICAgKi9cbiAgJHJhdyA9IHtcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvcHJvdG8ucHViLnYxLnByb2ZpbGUuVXNlclNlcnZpY2UvU2F2ZVVzZXJQcm9maWxlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlNhdmVVc2VyUHJvZmlsZVJlcz4+XG4gICAgICovXG4gICAgc2F2ZVVzZXJQcm9maWxlOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLlNhdmVVc2VyUHJvZmlsZVJlcSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5TYXZlVXNlclByb2ZpbGVSZXM+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9wcm90by5wdWIudjEucHJvZmlsZS5Vc2VyU2VydmljZS9TYXZlVXNlclByb2ZpbGUnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5TYXZlVXNlclByb2ZpbGVSZXEsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5TYXZlVXNlclByb2ZpbGVSZXNcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL3Byb3RvLnB1Yi52MS5wcm9maWxlLlVzZXJTZXJ2aWNlL1VwZGF0ZUVtYWlsXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlVwZGF0ZUVtYWlsUmVzPj5cbiAgICAgKi9cbiAgICB1cGRhdGVFbWFpbDogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5VcGRhdGVFbWFpbFJlcSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5VcGRhdGVFbWFpbFJlcz4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL3Byb3RvLnB1Yi52MS5wcm9maWxlLlVzZXJTZXJ2aWNlL1VwZGF0ZUVtYWlsJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uVXBkYXRlRW1haWxSZXEsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5VcGRhdGVFbWFpbFJlc1xuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvcHJvdG8ucHViLnYxLnByb2ZpbGUuVXNlclNlcnZpY2UvUmVzZW5kRW1haWxWZXJpZmljYXRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uUmVzZW5kRW1haWxWZXJpZmljYXRpb25SZXM+PlxuICAgICAqL1xuICAgIHJlc2VuZEVtYWlsVmVyaWZpY2F0aW9uOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLlJlc2VuZEVtYWlsVmVyaWZpY2F0aW9uUmVxLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlJlc2VuZEVtYWlsVmVyaWZpY2F0aW9uUmVzPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvcHJvdG8ucHViLnYxLnByb2ZpbGUuVXNlclNlcnZpY2UvUmVzZW5kRW1haWxWZXJpZmljYXRpb24nLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5SZXNlbmRFbWFpbFZlcmlmaWNhdGlvblJlcSxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLlJlc2VuZEVtYWlsVmVyaWZpY2F0aW9uUmVzXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9wcm90by5wdWIudjEucHJvZmlsZS5Vc2VyU2VydmljZS9VcGRhdGVQYXNzd29yZFxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5VcGRhdGVQYXNzd29yZFJlcz4+XG4gICAgICovXG4gICAgdXBkYXRlUGFzc3dvcmQ6IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uVXBkYXRlUGFzc3dvcmRSZXEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uVXBkYXRlUGFzc3dvcmRSZXM+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9wcm90by5wdWIudjEucHJvZmlsZS5Vc2VyU2VydmljZS9VcGRhdGVQYXNzd29yZCcsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLlVwZGF0ZVBhc3N3b3JkUmVxLFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uVXBkYXRlUGFzc3dvcmRSZXNcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL3Byb3RvLnB1Yi52MS5wcm9maWxlLlVzZXJTZXJ2aWNlL0dldFVzZXJQcm9maWxlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkdldFVzZXJQcm9maWxlUmVzPj5cbiAgICAgKi9cbiAgICBnZXRVc2VyUHJvZmlsZTogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5HZXRVc2VyUHJvZmlsZVJlcSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5HZXRVc2VyUHJvZmlsZVJlcz4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL3Byb3RvLnB1Yi52MS5wcm9maWxlLlVzZXJTZXJ2aWNlL0dldFVzZXJQcm9maWxlJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uR2V0VXNlclByb2ZpbGVSZXEsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5HZXRVc2VyUHJvZmlsZVJlc1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoR1JQQ19VU0VSX1NFUlZJQ0VfQ0xJRU5UX1NFVFRJTkdTKSBzZXR0aW5nczogYW55LFxuICAgIEBJbmplY3QoR1JQQ19DTElFTlRfRkFDVE9SWSkgY2xpZW50RmFjdG9yeTogR3JwY0NsaWVudEZhY3Rvcnk8YW55PixcbiAgICBwcml2YXRlIGhhbmRsZXI6IEdycGNIYW5kbGVyXG4gICkge1xuICAgIHRoaXMuY2xpZW50ID0gY2xpZW50RmFjdG9yeS5jcmVhdGVDbGllbnQoXG4gICAgICAncHJvdG8ucHViLnYxLnByb2ZpbGUuVXNlclNlcnZpY2UnLFxuICAgICAgc2V0dGluZ3NcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9wcm90by5wdWIudjEucHJvZmlsZS5Vc2VyU2VydmljZS9TYXZlVXNlclByb2ZpbGVcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uU2F2ZVVzZXJQcm9maWxlUmVzPlxuICAgKi9cbiAgc2F2ZVVzZXJQcm9maWxlKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uU2F2ZVVzZXJQcm9maWxlUmVxLFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5TYXZlVXNlclByb2ZpbGVSZXM+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAuc2F2ZVVzZXJQcm9maWxlKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL3Byb3RvLnB1Yi52MS5wcm9maWxlLlVzZXJTZXJ2aWNlL1VwZGF0ZUVtYWlsXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLlVwZGF0ZUVtYWlsUmVzPlxuICAgKi9cbiAgdXBkYXRlRW1haWwoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5VcGRhdGVFbWFpbFJlcSxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uVXBkYXRlRW1haWxSZXM+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAudXBkYXRlRW1haWwocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvcHJvdG8ucHViLnYxLnByb2ZpbGUuVXNlclNlcnZpY2UvUmVzZW5kRW1haWxWZXJpZmljYXRpb25cbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uUmVzZW5kRW1haWxWZXJpZmljYXRpb25SZXM+XG4gICAqL1xuICByZXNlbmRFbWFpbFZlcmlmaWNhdGlvbihcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLlJlc2VuZEVtYWlsVmVyaWZpY2F0aW9uUmVxLFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5SZXNlbmRFbWFpbFZlcmlmaWNhdGlvblJlcz4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5yZXNlbmRFbWFpbFZlcmlmaWNhdGlvbihyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9wcm90by5wdWIudjEucHJvZmlsZS5Vc2VyU2VydmljZS9VcGRhdGVQYXNzd29yZFxuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5VcGRhdGVQYXNzd29yZFJlcz5cbiAgICovXG4gIHVwZGF0ZVBhc3N3b3JkKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uVXBkYXRlUGFzc3dvcmRSZXEsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLlVwZGF0ZVBhc3N3b3JkUmVzPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLnVwZGF0ZVBhc3N3b3JkKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL3Byb3RvLnB1Yi52MS5wcm9maWxlLlVzZXJTZXJ2aWNlL0dldFVzZXJQcm9maWxlXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLkdldFVzZXJQcm9maWxlUmVzPlxuICAgKi9cbiAgZ2V0VXNlclByb2ZpbGUoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5HZXRVc2VyUHJvZmlsZVJlcSxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uR2V0VXNlclByb2ZpbGVSZXM+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAuZ2V0VXNlclByb2ZpbGUocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxufVxuLyoqXG4gKiBTZXJ2aWNlIGNsaWVudCBpbXBsZW1lbnRhdGlvbiBmb3IgcHJvdG8ucHViLnYxLnByb2ZpbGUuQXV0aFNlcnZpY2VcbiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAnYW55JyB9KVxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlQ2xpZW50IHtcbiAgcHJpdmF0ZSBjbGllbnQ6IEdycGNDbGllbnQ8YW55PjtcblxuICAvKipcbiAgICogUmF3IFJQQyBpbXBsZW1lbnRhdGlvbiBmb3IgZWFjaCBzZXJ2aWNlIGNsaWVudCBtZXRob2QuXG4gICAqIFRoZSByYXcgbWV0aG9kcyBwcm92aWRlIG1vcmUgY29udHJvbCBvbiB0aGUgaW5jb21pbmcgZGF0YSBhbmQgZXZlbnRzLiBFLmcuIHRoZXkgY2FuIGJlIHVzZWZ1bCB0byByZWFkIHN0YXR1cyBgT0tgIG1ldGFkYXRhLlxuICAgKiBBdHRlbnRpb246IHRoZXNlIG1ldGhvZHMgZG8gbm90IHRocm93IGVycm9ycyB3aGVuIG5vbi16ZXJvIHN0YXR1cyBjb2RlcyBhcmUgcmVjZWl2ZWQuXG4gICAqL1xuICAkcmF3ID0ge1xuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9wcm90by5wdWIudjEucHJvZmlsZS5BdXRoU2VydmljZS9HZXRWZXJpZmljYXRpb25Db2RlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkdldFZlcmlmaWNhdGlvbkNvZGVSZXM+PlxuICAgICAqL1xuICAgIGdldFZlcmlmaWNhdGlvbkNvZGU6IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uR2V0VmVyaWZpY2F0aW9uQ29kZVJlcSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5HZXRWZXJpZmljYXRpb25Db2RlUmVzPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvcHJvdG8ucHViLnYxLnByb2ZpbGUuQXV0aFNlcnZpY2UvR2V0VmVyaWZpY2F0aW9uQ29kZScsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkdldFZlcmlmaWNhdGlvbkNvZGVSZXEsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5HZXRWZXJpZmljYXRpb25Db2RlUmVzXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9wcm90by5wdWIudjEucHJvZmlsZS5BdXRoU2VydmljZS9WZXJpZnlBbmRHZXRUb2tlblxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5BY2Nlc3NUb2tlblJlcz4+XG4gICAgICovXG4gICAgdmVyaWZ5QW5kR2V0VG9rZW46IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uVmVyaWZ5Q29kZVJlcSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5BY2Nlc3NUb2tlblJlcz4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL3Byb3RvLnB1Yi52MS5wcm9maWxlLkF1dGhTZXJ2aWNlL1ZlcmlmeUFuZEdldFRva2VuJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uVmVyaWZ5Q29kZVJlcSxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLkFjY2Vzc1Rva2VuUmVzXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9wcm90by5wdWIudjEucHJvZmlsZS5BdXRoU2VydmljZS9DaGVja1FyQ29kZUlzVmVyaWZpZWRBbmRMb2dpblxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5BY2Nlc3NUb2tlblJlcz4+XG4gICAgICovXG4gICAgY2hlY2tRckNvZGVJc1ZlcmlmaWVkQW5kTG9naW46IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uQ2hlY2tRckNvZGVJc1ZlcmlmaWVkQW5kTG9naW5SZXEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uQWNjZXNzVG9rZW5SZXM+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9wcm90by5wdWIudjEucHJvZmlsZS5BdXRoU2VydmljZS9DaGVja1FyQ29kZUlzVmVyaWZpZWRBbmRMb2dpbicsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkNoZWNrUXJDb2RlSXNWZXJpZmllZEFuZExvZ2luUmVxLFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uQWNjZXNzVG9rZW5SZXNcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL3Byb3RvLnB1Yi52MS5wcm9maWxlLkF1dGhTZXJ2aWNlL1JlbmV3QWNjZXNzVG9rZW5cbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uUmVuZXdBY2Nlc3NUb2tlblJlcz4+XG4gICAgICovXG4gICAgcmVuZXdBY2Nlc3NUb2tlbjogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5SZW5ld0FjY2Vzc1Rva2VuUmVxLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlJlbmV3QWNjZXNzVG9rZW5SZXM+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9wcm90by5wdWIudjEucHJvZmlsZS5BdXRoU2VydmljZS9SZW5ld0FjY2Vzc1Rva2VuJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uUmVuZXdBY2Nlc3NUb2tlblJlcSxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLlJlbmV3QWNjZXNzVG9rZW5SZXNcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL3Byb3RvLnB1Yi52MS5wcm9maWxlLkF1dGhTZXJ2aWNlL1ZlcmlmeUVtYWlsQWRkcmVzc1xuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5WZXJpZnlFbWFpbEFkZHJlc3NSZXM+PlxuICAgICAqL1xuICAgIHZlcmlmeUVtYWlsQWRkcmVzczogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5WZXJpZnlFbWFpbEFkZHJlc3NSZXEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uVmVyaWZ5RW1haWxBZGRyZXNzUmVzPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvcHJvdG8ucHViLnYxLnByb2ZpbGUuQXV0aFNlcnZpY2UvVmVyaWZ5RW1haWxBZGRyZXNzJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uVmVyaWZ5RW1haWxBZGRyZXNzUmVxLFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uVmVyaWZ5RW1haWxBZGRyZXNzUmVzXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9wcm90by5wdWIudjEucHJvZmlsZS5BdXRoU2VydmljZS9TZW5kRXJhc2VQYXNzd29yZEVtYWlsXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlNlbmRFcmFzZVBhc3N3b3JkRW1haWxSZXM+PlxuICAgICAqL1xuICAgIHNlbmRFcmFzZVBhc3N3b3JkRW1haWw6IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uU2VuZEVyYXNlUGFzc3dvcmRFbWFpbFJlcSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5TZW5kRXJhc2VQYXNzd29yZEVtYWlsUmVzPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvcHJvdG8ucHViLnYxLnByb2ZpbGUuQXV0aFNlcnZpY2UvU2VuZEVyYXNlUGFzc3dvcmRFbWFpbCcsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLlNlbmRFcmFzZVBhc3N3b3JkRW1haWxSZXEsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5TZW5kRXJhc2VQYXNzd29yZEVtYWlsUmVzXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9wcm90by5wdWIudjEucHJvZmlsZS5BdXRoU2VydmljZS9FcmFzZVBhc3N3b3JkXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkVyYXNlUGFzc3dvcmRSZXM+PlxuICAgICAqL1xuICAgIGVyYXNlUGFzc3dvcmQ6IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uRXJhc2VQYXNzd29yZFJlcSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5FcmFzZVBhc3N3b3JkUmVzPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvcHJvdG8ucHViLnYxLnByb2ZpbGUuQXV0aFNlcnZpY2UvRXJhc2VQYXNzd29yZCcsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkVyYXNlUGFzc3dvcmRSZXEsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5FcmFzZVBhc3N3b3JkUmVzXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChHUlBDX0FVVEhfU0VSVklDRV9DTElFTlRfU0VUVElOR1MpIHNldHRpbmdzOiBhbnksXG4gICAgQEluamVjdChHUlBDX0NMSUVOVF9GQUNUT1JZKSBjbGllbnRGYWN0b3J5OiBHcnBjQ2xpZW50RmFjdG9yeTxhbnk+LFxuICAgIHByaXZhdGUgaGFuZGxlcjogR3JwY0hhbmRsZXJcbiAgKSB7XG4gICAgdGhpcy5jbGllbnQgPSBjbGllbnRGYWN0b3J5LmNyZWF0ZUNsaWVudChcbiAgICAgICdwcm90by5wdWIudjEucHJvZmlsZS5BdXRoU2VydmljZScsXG4gICAgICBzZXR0aW5nc1xuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL3Byb3RvLnB1Yi52MS5wcm9maWxlLkF1dGhTZXJ2aWNlL0dldFZlcmlmaWNhdGlvbkNvZGVcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uR2V0VmVyaWZpY2F0aW9uQ29kZVJlcz5cbiAgICovXG4gIGdldFZlcmlmaWNhdGlvbkNvZGUoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5HZXRWZXJpZmljYXRpb25Db2RlUmVxLFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5HZXRWZXJpZmljYXRpb25Db2RlUmVzPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmdldFZlcmlmaWNhdGlvbkNvZGUocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvcHJvdG8ucHViLnYxLnByb2ZpbGUuQXV0aFNlcnZpY2UvVmVyaWZ5QW5kR2V0VG9rZW5cbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uQWNjZXNzVG9rZW5SZXM+XG4gICAqL1xuICB2ZXJpZnlBbmRHZXRUb2tlbihcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLlZlcmlmeUNvZGVSZXEsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLkFjY2Vzc1Rva2VuUmVzPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLnZlcmlmeUFuZEdldFRva2VuKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL3Byb3RvLnB1Yi52MS5wcm9maWxlLkF1dGhTZXJ2aWNlL0NoZWNrUXJDb2RlSXNWZXJpZmllZEFuZExvZ2luXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLkFjY2Vzc1Rva2VuUmVzPlxuICAgKi9cbiAgY2hlY2tRckNvZGVJc1ZlcmlmaWVkQW5kTG9naW4oXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5DaGVja1FyQ29kZUlzVmVyaWZpZWRBbmRMb2dpblJlcSxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uQWNjZXNzVG9rZW5SZXM+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAuY2hlY2tRckNvZGVJc1ZlcmlmaWVkQW5kTG9naW4ocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvcHJvdG8ucHViLnYxLnByb2ZpbGUuQXV0aFNlcnZpY2UvUmVuZXdBY2Nlc3NUb2tlblxuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5SZW5ld0FjY2Vzc1Rva2VuUmVzPlxuICAgKi9cbiAgcmVuZXdBY2Nlc3NUb2tlbihcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLlJlbmV3QWNjZXNzVG9rZW5SZXEsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLlJlbmV3QWNjZXNzVG9rZW5SZXM+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAucmVuZXdBY2Nlc3NUb2tlbihyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9wcm90by5wdWIudjEucHJvZmlsZS5BdXRoU2VydmljZS9WZXJpZnlFbWFpbEFkZHJlc3NcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uVmVyaWZ5RW1haWxBZGRyZXNzUmVzPlxuICAgKi9cbiAgdmVyaWZ5RW1haWxBZGRyZXNzKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uVmVyaWZ5RW1haWxBZGRyZXNzUmVxLFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5WZXJpZnlFbWFpbEFkZHJlc3NSZXM+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAudmVyaWZ5RW1haWxBZGRyZXNzKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL3Byb3RvLnB1Yi52MS5wcm9maWxlLkF1dGhTZXJ2aWNlL1NlbmRFcmFzZVBhc3N3b3JkRW1haWxcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uU2VuZEVyYXNlUGFzc3dvcmRFbWFpbFJlcz5cbiAgICovXG4gIHNlbmRFcmFzZVBhc3N3b3JkRW1haWwoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5TZW5kRXJhc2VQYXNzd29yZEVtYWlsUmVxLFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5TZW5kRXJhc2VQYXNzd29yZEVtYWlsUmVzPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLnNlbmRFcmFzZVBhc3N3b3JkRW1haWwocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvcHJvdG8ucHViLnYxLnByb2ZpbGUuQXV0aFNlcnZpY2UvRXJhc2VQYXNzd29yZFxuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5FcmFzZVBhc3N3b3JkUmVzPlxuICAgKi9cbiAgZXJhc2VQYXNzd29yZChcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkVyYXNlUGFzc3dvcmRSZXEsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLkVyYXNlUGFzc3dvcmRSZXM+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAuZXJhc2VQYXNzd29yZChyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG59XG4vKipcbiAqIFNlcnZpY2UgY2xpZW50IGltcGxlbWVudGF0aW9uIGZvciBwcm90by5wdWIudjEucHJvZmlsZS5TZXNzaW9uU2VydmljZVxuICovXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdhbnknIH0pXG5leHBvcnQgY2xhc3MgU2Vzc2lvblNlcnZpY2VDbGllbnQge1xuICBwcml2YXRlIGNsaWVudDogR3JwY0NsaWVudDxhbnk+O1xuXG4gIC8qKlxuICAgKiBSYXcgUlBDIGltcGxlbWVudGF0aW9uIGZvciBlYWNoIHNlcnZpY2UgY2xpZW50IG1ldGhvZC5cbiAgICogVGhlIHJhdyBtZXRob2RzIHByb3ZpZGUgbW9yZSBjb250cm9sIG9uIHRoZSBpbmNvbWluZyBkYXRhIGFuZCBldmVudHMuIEUuZy4gdGhleSBjYW4gYmUgdXNlZnVsIHRvIHJlYWQgc3RhdHVzIGBPS2AgbWV0YWRhdGEuXG4gICAqIEF0dGVudGlvbjogdGhlc2UgbWV0aG9kcyBkbyBub3QgdGhyb3cgZXJyb3JzIHdoZW4gbm9uLXplcm8gc3RhdHVzIGNvZGVzIGFyZSByZWNlaXZlZC5cbiAgICovXG4gICRyYXcgPSB7XG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL3Byb3RvLnB1Yi52MS5wcm9maWxlLlNlc3Npb25TZXJ2aWNlL1ZlcmlmeVFyQ29kZVRva2VuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlZlcmlmeVFyQ29kZVRva2VuUmVzPj5cbiAgICAgKi9cbiAgICB2ZXJpZnlRckNvZGVUb2tlbjogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5WZXJpZnlRckNvZGVUb2tlblJlcSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5WZXJpZnlRckNvZGVUb2tlblJlcz4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL3Byb3RvLnB1Yi52MS5wcm9maWxlLlNlc3Npb25TZXJ2aWNlL1ZlcmlmeVFyQ29kZVRva2VuJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uVmVyaWZ5UXJDb2RlVG9rZW5SZXEsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5WZXJpZnlRckNvZGVUb2tlblJlc1xuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvcHJvdG8ucHViLnYxLnByb2ZpbGUuU2Vzc2lvblNlcnZpY2UvR2V0TXlTZXNzaW9uc1xuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5HZXRNeVNlc3Npb25zUmVzPj5cbiAgICAgKi9cbiAgICBnZXRNeVNlc3Npb25zOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkdldE15U2Vzc2lvbnNSZXEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uR2V0TXlTZXNzaW9uc1Jlcz4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL3Byb3RvLnB1Yi52MS5wcm9maWxlLlNlc3Npb25TZXJ2aWNlL0dldE15U2Vzc2lvbnMnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5HZXRNeVNlc3Npb25zUmVxLFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uR2V0TXlTZXNzaW9uc1Jlc1xuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvcHJvdG8ucHViLnYxLnByb2ZpbGUuU2Vzc2lvblNlcnZpY2UvVXBkYXRlU2Vzc2lvblBsYXRmb3JtSW5mb3JtYXRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uVXBkYXRlU2Vzc2lvblBsYXRmb3JtSW5mb3JtYXRpb25SZXM+PlxuICAgICAqL1xuICAgIHVwZGF0ZVNlc3Npb25QbGF0Zm9ybUluZm9ybWF0aW9uOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLlVwZGF0ZVNlc3Npb25QbGF0Zm9ybUluZm9ybWF0aW9uUmVxLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlVwZGF0ZVNlc3Npb25QbGF0Zm9ybUluZm9ybWF0aW9uUmVzPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6XG4gICAgICAgICAgJy9wcm90by5wdWIudjEucHJvZmlsZS5TZXNzaW9uU2VydmljZS9VcGRhdGVTZXNzaW9uUGxhdGZvcm1JbmZvcm1hdGlvbicsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLlVwZGF0ZVNlc3Npb25QbGF0Zm9ybUluZm9ybWF0aW9uUmVxLFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uVXBkYXRlU2Vzc2lvblBsYXRmb3JtSW5mb3JtYXRpb25SZXNcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL3Byb3RvLnB1Yi52MS5wcm9maWxlLlNlc3Npb25TZXJ2aWNlL0xvZ291dFNlc3Npb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uTG9nb3V0U2Vzc2lvblJlcz4+XG4gICAgICovXG4gICAgbG9nb3V0U2Vzc2lvbjogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5Mb2dvdXRTZXNzaW9uUmVxLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkxvZ291dFNlc3Npb25SZXM+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9wcm90by5wdWIudjEucHJvZmlsZS5TZXNzaW9uU2VydmljZS9Mb2dvdXRTZXNzaW9uJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uTG9nb3V0U2Vzc2lvblJlcSxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLkxvZ291dFNlc3Npb25SZXNcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL3Byb3RvLnB1Yi52MS5wcm9maWxlLlNlc3Npb25TZXJ2aWNlL1Jldm9rZVNlc3Npb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uUmV2b2tlU2Vzc2lvblJlcz4+XG4gICAgICovXG4gICAgcmV2b2tlU2Vzc2lvbjogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5SZXZva2VTZXNzaW9uUmVxLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlJldm9rZVNlc3Npb25SZXM+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9wcm90by5wdWIudjEucHJvZmlsZS5TZXNzaW9uU2VydmljZS9SZXZva2VTZXNzaW9uJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uUmV2b2tlU2Vzc2lvblJlcSxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLlJldm9rZVNlc3Npb25SZXNcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL3Byb3RvLnB1Yi52MS5wcm9maWxlLlNlc3Npb25TZXJ2aWNlL1Jldm9rZUFsbE90aGVyU2Vzc2lvbnNcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uUmV2b2tlQWxsT3RoZXJTZXNzaW9uc1Jlcz4+XG4gICAgICovXG4gICAgcmV2b2tlQWxsT3RoZXJTZXNzaW9uczogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5SZXZva2VBbGxPdGhlclNlc3Npb25zUmVxLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlJldm9rZUFsbE90aGVyU2Vzc2lvbnNSZXM+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9wcm90by5wdWIudjEucHJvZmlsZS5TZXNzaW9uU2VydmljZS9SZXZva2VBbGxPdGhlclNlc3Npb25zJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uUmV2b2tlQWxsT3RoZXJTZXNzaW9uc1JlcSxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLlJldm9rZUFsbE90aGVyU2Vzc2lvbnNSZXNcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KEdSUENfU0VTU0lPTl9TRVJWSUNFX0NMSUVOVF9TRVRUSU5HUykgc2V0dGluZ3M6IGFueSxcbiAgICBASW5qZWN0KEdSUENfQ0xJRU5UX0ZBQ1RPUlkpIGNsaWVudEZhY3Rvcnk6IEdycGNDbGllbnRGYWN0b3J5PGFueT4sXG4gICAgcHJpdmF0ZSBoYW5kbGVyOiBHcnBjSGFuZGxlclxuICApIHtcbiAgICB0aGlzLmNsaWVudCA9IGNsaWVudEZhY3RvcnkuY3JlYXRlQ2xpZW50KFxuICAgICAgJ3Byb3RvLnB1Yi52MS5wcm9maWxlLlNlc3Npb25TZXJ2aWNlJyxcbiAgICAgIHNldHRpbmdzXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvcHJvdG8ucHViLnYxLnByb2ZpbGUuU2Vzc2lvblNlcnZpY2UvVmVyaWZ5UXJDb2RlVG9rZW5cbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uVmVyaWZ5UXJDb2RlVG9rZW5SZXM+XG4gICAqL1xuICB2ZXJpZnlRckNvZGVUb2tlbihcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLlZlcmlmeVFyQ29kZVRva2VuUmVxLFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5WZXJpZnlRckNvZGVUb2tlblJlcz4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC52ZXJpZnlRckNvZGVUb2tlbihyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9wcm90by5wdWIudjEucHJvZmlsZS5TZXNzaW9uU2VydmljZS9HZXRNeVNlc3Npb25zXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLkdldE15U2Vzc2lvbnNSZXM+XG4gICAqL1xuICBnZXRNeVNlc3Npb25zKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uR2V0TXlTZXNzaW9uc1JlcSxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uR2V0TXlTZXNzaW9uc1Jlcz4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5nZXRNeVNlc3Npb25zKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL3Byb3RvLnB1Yi52MS5wcm9maWxlLlNlc3Npb25TZXJ2aWNlL1VwZGF0ZVNlc3Npb25QbGF0Zm9ybUluZm9ybWF0aW9uXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLlVwZGF0ZVNlc3Npb25QbGF0Zm9ybUluZm9ybWF0aW9uUmVzPlxuICAgKi9cbiAgdXBkYXRlU2Vzc2lvblBsYXRmb3JtSW5mb3JtYXRpb24oXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5VcGRhdGVTZXNzaW9uUGxhdGZvcm1JbmZvcm1hdGlvblJlcSxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uVXBkYXRlU2Vzc2lvblBsYXRmb3JtSW5mb3JtYXRpb25SZXM+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAudXBkYXRlU2Vzc2lvblBsYXRmb3JtSW5mb3JtYXRpb24ocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvcHJvdG8ucHViLnYxLnByb2ZpbGUuU2Vzc2lvblNlcnZpY2UvTG9nb3V0U2Vzc2lvblxuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5Mb2dvdXRTZXNzaW9uUmVzPlxuICAgKi9cbiAgbG9nb3V0U2Vzc2lvbihcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkxvZ291dFNlc3Npb25SZXEsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLkxvZ291dFNlc3Npb25SZXM+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAubG9nb3V0U2Vzc2lvbihyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9wcm90by5wdWIudjEucHJvZmlsZS5TZXNzaW9uU2VydmljZS9SZXZva2VTZXNzaW9uXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLlJldm9rZVNlc3Npb25SZXM+XG4gICAqL1xuICByZXZva2VTZXNzaW9uKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uUmV2b2tlU2Vzc2lvblJlcSxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uUmV2b2tlU2Vzc2lvblJlcz4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5yZXZva2VTZXNzaW9uKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL3Byb3RvLnB1Yi52MS5wcm9maWxlLlNlc3Npb25TZXJ2aWNlL1Jldm9rZUFsbE90aGVyU2Vzc2lvbnNcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uUmV2b2tlQWxsT3RoZXJTZXNzaW9uc1Jlcz5cbiAgICovXG4gIHJldm9rZUFsbE90aGVyU2Vzc2lvbnMoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5SZXZva2VBbGxPdGhlclNlc3Npb25zUmVxLFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5SZXZva2VBbGxPdGhlclNlc3Npb25zUmVzPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLnJldm9rZUFsbE90aGVyU2Vzc2lvbnMocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxufVxuIl19