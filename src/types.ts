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


export type TokenResponse = {
    access_token: string;
    refresh_token: string;
    scope: string;
    expires_in: number;
    token_type: string;
}

export interface Token {
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
    scope: string;
    tokenType: string;
}
