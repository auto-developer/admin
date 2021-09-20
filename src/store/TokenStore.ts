import {makeAutoObservable} from "mobx";
import {CLIENT_ID, CLIENT_SECRET, REDIRECT_URI} from "../common/config";

export type TokenResponse = {
    access_token: string;
    refresh_token: string;
    scope: string;
    expires_in: number;
    token_type: string;
}

export default class TokenStore {

    accessToken: string;
    refreshToken: string;
    expiresIn: number;
    scope: string;
    tokenType: string;

    constructor() {
        this.accessToken = localStorage.getItem('access_token') || ''
        this.refreshToken = localStorage.getItem('refresh_token') || ''
        this.expiresIn = Number(localStorage.getItem('expires_in')) || NaN
        this.scope = localStorage.getItem('scope') || ''
        this.tokenType = localStorage.getItem('token_type') || ''
        makeAutoObservable(this);
    }

    setAccessToken(token: string) {
        localStorage.setItem('access_token', token)
        this.accessToken = token
    }

    setRefreshToken(token: string) {
        localStorage.setItem('refresh_token', token)
        this.refreshToken = token
    }

    setExpiresIn(expiresIn: number) {
        localStorage.setItem('expires_in', String(expiresIn))
        this.expiresIn = expiresIn
    }

    setScope(scope: string) {
        localStorage.setItem('scope', scope)
        this.scope = scope
    }

    setTokenType(tokenType: string) {
        localStorage.setItem('token_type', tokenType)
        this.tokenType = tokenType
    }

    async postToken(code: string): Promise<TokenResponse> {
        const params = new URLSearchParams()
        params.append('client_id', CLIENT_ID)
        params.append('client_secret', CLIENT_SECRET)
        params.append('redirect_uri', REDIRECT_URI)
        params.append('grant_type', 'authorization_code')
        params.append('code', code)
        const response = await fetch('/token', {
            method: 'POST',
            body: params
        })
        const token: TokenResponse = await response.json()
        this.setAccessToken(token['access_token'])
        this.setRefreshToken(token['refresh_token'])
        this.setScope(token['scope'])
        this.setExpiresIn(token['expires_in'])
        console.log('--------')
        console.log(typeof  token['expires_in'])
        this.setTokenType(token['token_type'])
        return token
    }
}
