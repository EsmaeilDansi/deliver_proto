import { GrpcClientFactory, GrpcEvent, GrpcMetadata } from '@ngx-grpc/common';
import { GrpcHandler } from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './profile.pb';
import * as i0 from "@angular/core";
/**
 * Service client implementation for proto.pub.v1.profile.ContactService
 */
export declare class ContactServiceClient {
    private handler;
    private client;
    /**
     * Raw RPC implementation for each service client method.
     * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
     * Attention: these methods do not throw errors when non-zero status codes are received.
     */
    $raw: {
        /**
         * Unary call: /proto.pub.v1.profile.ContactService/SaveContacts
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.SaveContactsRes>>
         */
        saveContacts: (requestData: thisProto.SaveContactsReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.SaveContactsRes>>;
        /**
         * Unary call: /proto.pub.v1.profile.ContactService/GetContactList
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.GetContactListRes>>
         */
        getContactList: (requestData: thisProto.GetContactListReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.GetContactListRes>>;
        /**
         * Unary call: /proto.pub.v1.profile.ContactService/GetContactListUsers
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.GetContactListUsersRes>>
         */
        getContactListUsers: (requestData: thisProto.GetContactListUsersReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.GetContactListUsersRes>>;
        /**
         * Unary call: /proto.pub.v1.profile.ContactService/GetUserByUid
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.GetUserByUidRes>>
         */
        getUserByUid: (requestData: thisProto.GetUserByUidReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.GetUserByUidRes>>;
        /**
         * Unary call: /proto.pub.v1.profile.ContactService/SearchUserByName
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.UserSearchRes>>
         */
        searchUserByName: (requestData: thisProto.UserSearchReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.UserSearchRes>>;
    };
    constructor(settings: any, clientFactory: GrpcClientFactory<any>, handler: GrpcHandler);
    /**
     * Unary call @/proto.pub.v1.profile.ContactService/SaveContacts
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.SaveContactsRes>
     */
    saveContacts(requestData: thisProto.SaveContactsReq, requestMetadata?: GrpcMetadata): Observable<thisProto.SaveContactsRes>;
    /**
     * Unary call @/proto.pub.v1.profile.ContactService/GetContactList
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetContactListRes>
     */
    getContactList(requestData: thisProto.GetContactListReq, requestMetadata?: GrpcMetadata): Observable<thisProto.GetContactListRes>;
    /**
     * Unary call @/proto.pub.v1.profile.ContactService/GetContactListUsers
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetContactListUsersRes>
     */
    getContactListUsers(requestData: thisProto.GetContactListUsersReq, requestMetadata?: GrpcMetadata): Observable<thisProto.GetContactListUsersRes>;
    /**
     * Unary call @/proto.pub.v1.profile.ContactService/GetUserByUid
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetUserByUidRes>
     */
    getUserByUid(requestData: thisProto.GetUserByUidReq, requestMetadata?: GrpcMetadata): Observable<thisProto.GetUserByUidRes>;
    /**
     * Unary call @/proto.pub.v1.profile.ContactService/SearchUserByName
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.UserSearchRes>
     */
    searchUserByName(requestData: thisProto.UserSearchReq, requestMetadata?: GrpcMetadata): Observable<thisProto.UserSearchRes>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ContactServiceClient, [{ optional: true; }, null, null]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ContactServiceClient>;
}
/**
 * Service client implementation for proto.pub.v1.profile.UserService
 */
export declare class UserServiceClient {
    private handler;
    private client;
    /**
     * Raw RPC implementation for each service client method.
     * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
     * Attention: these methods do not throw errors when non-zero status codes are received.
     */
    $raw: {
        /**
         * Unary call: /proto.pub.v1.profile.UserService/SaveUserProfile
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.SaveUserProfileRes>>
         */
        saveUserProfile: (requestData: thisProto.SaveUserProfileReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.SaveUserProfileRes>>;
        /**
         * Unary call: /proto.pub.v1.profile.UserService/UpdateEmail
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.UpdateEmailRes>>
         */
        updateEmail: (requestData: thisProto.UpdateEmailReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.UpdateEmailRes>>;
        /**
         * Unary call: /proto.pub.v1.profile.UserService/ResendEmailVerification
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ResendEmailVerificationRes>>
         */
        resendEmailVerification: (requestData: thisProto.ResendEmailVerificationReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ResendEmailVerificationRes>>;
        /**
         * Unary call: /proto.pub.v1.profile.UserService/UpdatePassword
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.UpdatePasswordRes>>
         */
        updatePassword: (requestData: thisProto.UpdatePasswordReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.UpdatePasswordRes>>;
        /**
         * Unary call: /proto.pub.v1.profile.UserService/GetUserProfile
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.GetUserProfileRes>>
         */
        getUserProfile: (requestData: thisProto.GetUserProfileReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.GetUserProfileRes>>;
        /**
         * Unary call: /proto.pub.v1.profile.UserService/GetWebViewIdentifyToken
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.GetWebViewIdentifyTokenRes>>
         */
        getWebViewIdentifyToken: (requestData: thisProto.GetWebViewIdentifyTokenReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.GetWebViewIdentifyTokenRes>>;
    };
    constructor(settings: any, clientFactory: GrpcClientFactory<any>, handler: GrpcHandler);
    /**
     * Unary call @/proto.pub.v1.profile.UserService/SaveUserProfile
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.SaveUserProfileRes>
     */
    saveUserProfile(requestData: thisProto.SaveUserProfileReq, requestMetadata?: GrpcMetadata): Observable<thisProto.SaveUserProfileRes>;
    /**
     * Unary call @/proto.pub.v1.profile.UserService/UpdateEmail
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.UpdateEmailRes>
     */
    updateEmail(requestData: thisProto.UpdateEmailReq, requestMetadata?: GrpcMetadata): Observable<thisProto.UpdateEmailRes>;
    /**
     * Unary call @/proto.pub.v1.profile.UserService/ResendEmailVerification
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ResendEmailVerificationRes>
     */
    resendEmailVerification(requestData: thisProto.ResendEmailVerificationReq, requestMetadata?: GrpcMetadata): Observable<thisProto.ResendEmailVerificationRes>;
    /**
     * Unary call @/proto.pub.v1.profile.UserService/UpdatePassword
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.UpdatePasswordRes>
     */
    updatePassword(requestData: thisProto.UpdatePasswordReq, requestMetadata?: GrpcMetadata): Observable<thisProto.UpdatePasswordRes>;
    /**
     * Unary call @/proto.pub.v1.profile.UserService/GetUserProfile
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetUserProfileRes>
     */
    getUserProfile(requestData: thisProto.GetUserProfileReq, requestMetadata?: GrpcMetadata): Observable<thisProto.GetUserProfileRes>;
    /**
     * Unary call @/proto.pub.v1.profile.UserService/GetWebViewIdentifyToken
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetWebViewIdentifyTokenRes>
     */
    getWebViewIdentifyToken(requestData: thisProto.GetWebViewIdentifyTokenReq, requestMetadata?: GrpcMetadata): Observable<thisProto.GetWebViewIdentifyTokenRes>;
    static ɵfac: i0.ɵɵFactoryDeclaration<UserServiceClient, [{ optional: true; }, null, null]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UserServiceClient>;
}
/**
 * Service client implementation for proto.pub.v1.profile.AuthService
 */
export declare class AuthServiceClient {
    private handler;
    private client;
    /**
     * Raw RPC implementation for each service client method.
     * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
     * Attention: these methods do not throw errors when non-zero status codes are received.
     */
    $raw: {
        /**
         * Unary call: /proto.pub.v1.profile.AuthService/GetVerificationCode
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.GetVerificationCodeRes>>
         */
        getVerificationCode: (requestData: thisProto.GetVerificationCodeReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.GetVerificationCodeRes>>;
        /**
         * Unary call: /proto.pub.v1.profile.AuthService/VerifyAndGetToken
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.AccessTokenRes>>
         */
        verifyAndGetToken: (requestData: thisProto.VerifyCodeReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.AccessTokenRes>>;
        /**
         * Unary call: /proto.pub.v1.profile.AuthService/CheckQrCodeIsVerifiedAndLogin
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.AccessTokenRes>>
         */
        checkQrCodeIsVerifiedAndLogin: (requestData: thisProto.CheckQrCodeIsVerifiedAndLoginReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.AccessTokenRes>>;
        /**
         * Unary call: /proto.pub.v1.profile.AuthService/RenewAccessToken
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.RenewAccessTokenRes>>
         */
        renewAccessToken: (requestData: thisProto.RenewAccessTokenReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.RenewAccessTokenRes>>;
        /**
         * Unary call: /proto.pub.v1.profile.AuthService/VerifyEmailAddress
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.VerifyEmailAddressRes>>
         */
        verifyEmailAddress: (requestData: thisProto.VerifyEmailAddressReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.VerifyEmailAddressRes>>;
        /**
         * Unary call: /proto.pub.v1.profile.AuthService/SendErasePasswordEmail
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.SendErasePasswordEmailRes>>
         */
        sendErasePasswordEmail: (requestData: thisProto.SendErasePasswordEmailReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.SendErasePasswordEmailRes>>;
        /**
         * Unary call: /proto.pub.v1.profile.AuthService/ErasePassword
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ErasePasswordRes>>
         */
        erasePassword: (requestData: thisProto.ErasePasswordReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ErasePasswordRes>>;
    };
    constructor(settings: any, clientFactory: GrpcClientFactory<any>, handler: GrpcHandler);
    /**
     * Unary call @/proto.pub.v1.profile.AuthService/GetVerificationCode
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetVerificationCodeRes>
     */
    getVerificationCode(requestData: thisProto.GetVerificationCodeReq, requestMetadata?: GrpcMetadata): Observable<thisProto.GetVerificationCodeRes>;
    /**
     * Unary call @/proto.pub.v1.profile.AuthService/VerifyAndGetToken
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.AccessTokenRes>
     */
    verifyAndGetToken(requestData: thisProto.VerifyCodeReq, requestMetadata?: GrpcMetadata): Observable<thisProto.AccessTokenRes>;
    /**
     * Unary call @/proto.pub.v1.profile.AuthService/CheckQrCodeIsVerifiedAndLogin
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.AccessTokenRes>
     */
    checkQrCodeIsVerifiedAndLogin(requestData: thisProto.CheckQrCodeIsVerifiedAndLoginReq, requestMetadata?: GrpcMetadata): Observable<thisProto.AccessTokenRes>;
    /**
     * Unary call @/proto.pub.v1.profile.AuthService/RenewAccessToken
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.RenewAccessTokenRes>
     */
    renewAccessToken(requestData: thisProto.RenewAccessTokenReq, requestMetadata?: GrpcMetadata): Observable<thisProto.RenewAccessTokenRes>;
    /**
     * Unary call @/proto.pub.v1.profile.AuthService/VerifyEmailAddress
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.VerifyEmailAddressRes>
     */
    verifyEmailAddress(requestData: thisProto.VerifyEmailAddressReq, requestMetadata?: GrpcMetadata): Observable<thisProto.VerifyEmailAddressRes>;
    /**
     * Unary call @/proto.pub.v1.profile.AuthService/SendErasePasswordEmail
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.SendErasePasswordEmailRes>
     */
    sendErasePasswordEmail(requestData: thisProto.SendErasePasswordEmailReq, requestMetadata?: GrpcMetadata): Observable<thisProto.SendErasePasswordEmailRes>;
    /**
     * Unary call @/proto.pub.v1.profile.AuthService/ErasePassword
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ErasePasswordRes>
     */
    erasePassword(requestData: thisProto.ErasePasswordReq, requestMetadata?: GrpcMetadata): Observable<thisProto.ErasePasswordRes>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthServiceClient, [{ optional: true; }, null, null]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthServiceClient>;
}
/**
 * Service client implementation for proto.pub.v1.profile.SessionService
 */
export declare class SessionServiceClient {
    private handler;
    private client;
    /**
     * Raw RPC implementation for each service client method.
     * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
     * Attention: these methods do not throw errors when non-zero status codes are received.
     */
    $raw: {
        /**
         * Unary call: /proto.pub.v1.profile.SessionService/VerifyQrCodeToken
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.VerifyQrCodeTokenRes>>
         */
        verifyQrCodeToken: (requestData: thisProto.VerifyQrCodeTokenReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.VerifyQrCodeTokenRes>>;
        /**
         * Unary call: /proto.pub.v1.profile.SessionService/GetMySessions
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.GetMySessionsRes>>
         */
        getMySessions: (requestData: thisProto.GetMySessionsReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.GetMySessionsRes>>;
        /**
         * Unary call: /proto.pub.v1.profile.SessionService/UpdateSessionPlatformInformation
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.UpdateSessionPlatformInformationRes>>
         */
        updateSessionPlatformInformation: (requestData: thisProto.UpdateSessionPlatformInformationReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.UpdateSessionPlatformInformationRes>>;
        /**
         * Unary call: /proto.pub.v1.profile.SessionService/LogoutSession
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.LogoutSessionRes>>
         */
        logoutSession: (requestData: thisProto.LogoutSessionReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.LogoutSessionRes>>;
        /**
         * Unary call: /proto.pub.v1.profile.SessionService/RevokeSession
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.RevokeSessionRes>>
         */
        revokeSession: (requestData: thisProto.RevokeSessionReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.RevokeSessionRes>>;
        /**
         * Unary call: /proto.pub.v1.profile.SessionService/RevokeAllOtherSessions
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.RevokeAllOtherSessionsRes>>
         */
        revokeAllOtherSessions: (requestData: thisProto.RevokeAllOtherSessionsReq, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.RevokeAllOtherSessionsRes>>;
    };
    constructor(settings: any, clientFactory: GrpcClientFactory<any>, handler: GrpcHandler);
    /**
     * Unary call @/proto.pub.v1.profile.SessionService/VerifyQrCodeToken
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.VerifyQrCodeTokenRes>
     */
    verifyQrCodeToken(requestData: thisProto.VerifyQrCodeTokenReq, requestMetadata?: GrpcMetadata): Observable<thisProto.VerifyQrCodeTokenRes>;
    /**
     * Unary call @/proto.pub.v1.profile.SessionService/GetMySessions
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetMySessionsRes>
     */
    getMySessions(requestData: thisProto.GetMySessionsReq, requestMetadata?: GrpcMetadata): Observable<thisProto.GetMySessionsRes>;
    /**
     * Unary call @/proto.pub.v1.profile.SessionService/UpdateSessionPlatformInformation
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.UpdateSessionPlatformInformationRes>
     */
    updateSessionPlatformInformation(requestData: thisProto.UpdateSessionPlatformInformationReq, requestMetadata?: GrpcMetadata): Observable<thisProto.UpdateSessionPlatformInformationRes>;
    /**
     * Unary call @/proto.pub.v1.profile.SessionService/LogoutSession
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.LogoutSessionRes>
     */
    logoutSession(requestData: thisProto.LogoutSessionReq, requestMetadata?: GrpcMetadata): Observable<thisProto.LogoutSessionRes>;
    /**
     * Unary call @/proto.pub.v1.profile.SessionService/RevokeSession
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.RevokeSessionRes>
     */
    revokeSession(requestData: thisProto.RevokeSessionReq, requestMetadata?: GrpcMetadata): Observable<thisProto.RevokeSessionRes>;
    /**
     * Unary call @/proto.pub.v1.profile.SessionService/RevokeAllOtherSessions
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.RevokeAllOtherSessionsRes>
     */
    revokeAllOtherSessions(requestData: thisProto.RevokeAllOtherSessionsReq, requestMetadata?: GrpcMetadata): Observable<thisProto.RevokeAllOtherSessionsRes>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SessionServiceClient, [{ optional: true; }, null, null]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SessionServiceClient>;
}
