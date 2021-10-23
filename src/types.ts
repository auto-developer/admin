export type Client = {
    _id: string;
    logo: string;
    description: string;
    name: string;
    grants: string[];
    redirectUris: string[];
}

export enum Gender {
    male = 'male',
    female = 'female',
}

export enum RegisterSource {
    username = 'username',
    mobile = 'mobile',
    email = 'email',
    wechat = "wechat",
    qq = "qq",
    weibo = "weibo"
}

export type User = {
    _id: string;
    username: string;
    nickname: string;
    mobile: string;
    email: string;
    avatar: string;
    gender: Gender;
    registerSource: RegisterSource;
}

export type Pagination = {
    total: number;
}

type TokenRequestParam = {
    client_id: string;
    client_secret?: string;
    grant_type: string;
    redirect_uri: string;
    code: string;
}
type TokenRefreshParam = {
    client_id: string;
    client_secret?: string;
    grant_type: string;
    refresh_token: string;
}

export type TokenParam = TokenRequestParam | TokenRefreshParam

export interface Token {
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
    scope: string;
    tokenType: string;
}
