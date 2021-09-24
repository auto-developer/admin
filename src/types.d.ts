export type Client = {
    _id: string;
    logo: string;
    description: string;
    name: string;
    grants: string[];
    redirectUris: string[];
}

export type User = {
    _id:string;
    username: string;
    nickname: string;
    mobile: string;
    email: string;
}

export type Pagination = {
    total: number;
}


type TokenResponse = {
    access_token: string;
    refresh_token: string;
    scope: string;
    expires_in: number;
    token_type: string;
}

interface Token {
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
    scope: string;
    tokenType: string;
}
