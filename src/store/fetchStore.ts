import {makeAutoObservable} from "mobx";
import {CLIENT_ID, CLIENT_SECRET, REDIRECT_URI} from "../common/config";
import {Token, TokenResponse} from "../types";

class FetchStore implements Token {

    fetching: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    get accessToken() {
        return localStorage.getItem('access_token') || ''
    }

    set accessToken(accessToken: string) {
        localStorage.setItem('access_token', accessToken)
    }

    get refreshToken() {
        return localStorage.getItem('refresh_token') || ''
    }

    set refreshToken(refreshToken: string) {
        localStorage.setItem('refresh_token', refreshToken)
    }

    get scope(): string {
        return localStorage.getItem('scope') || ''
    }

    set scope(scope: string) {
        localStorage.setItem('scope', scope)
    }

    get tokenType(): string {
        return localStorage.getItem('token_type') || ''
    }

    set tokenType(tokenType: string) {
        localStorage.setItem('token_type', tokenType)
    }

    get expiresIn(): number {
        return Number(localStorage.getItem('token_type')) || NaN
    }

    set expiresIn(expireIn: number) {
        localStorage.setItem('token_type', String(expireIn))
    }

    async postResource(url: string, params: any): Promise<any> {
        const p = new URLSearchParams(params)
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    Authorization: `${this.tokenType} ${this.accessToken}`
                },
                body: p
            })
            if (response.ok) {
                return await response.json()
            } else {
                const error = await response.json()
                console.log(error)

                const r = await this.postRefreshToken()
                console.log(r)
                const again = await fetch(url + p.toString(), {
                    method: 'GET',
                    headers: {
                        Authorization: `${this.tokenType} ${this.accessToken}`
                    },
                })
                return again.json()
            }

        } catch (e) {
            console.log('exception')
            console.log(e)
        }
    }

    async getResource(url: string, params = {}): Promise<any> {
        const p = new URLSearchParams(params)
        try {
            const response = await fetch(url + p.toString(), {
                method: 'GET',
                headers: {
                    Authorization: `${this.tokenType} ${this.accessToken}`
                },
            })
            if (response.ok) {
                return response.json()
            } else {
                const error = await response.json()
                console.log(error)

                const r = await this.postRefreshToken()
                console.log(r)
                const again = await fetch(url + p.toString(), {
                    method: 'GET',
                    headers: {
                        Authorization: `${this.tokenType} ${this.accessToken}`
                    },
                })
                return again.json()
            }

        } catch (e) {
            console.log('exception')
            console.log(e)
        }
    }

    async postToken(code: string | null): Promise<TokenResponse> {
        if (!code) throw Error('code is required.')
        const params = {
            'client_id': CLIENT_ID,
            'client_secret': CLIENT_SECRET,
            'redirect_uri': REDIRECT_URI,
            'grant_type': 'authorization_code',
            'code': code,
        }
        const response = await fetch('/token', {
            method: 'POST',
            body: new URLSearchParams(params)
        })
        const token = await response.json()
        this.accessToken = (token['access_token'])
        this.refreshToken = (token['refresh_token'])
        this.scope = (token['scope'])
        this.expiresIn = (token['expires_in'])
        this.tokenType = (token['token_type'])
        return token
    }

    async postRefreshToken() {
        const params = {
            'client_id': CLIENT_ID,
            'client_secret': CLIENT_SECRET,
            'grant_type': 'refresh_token',
            'refresh_token': this.refreshToken,
        }
        const response = await fetch('/token', {
            method: 'POST',
            body: new URLSearchParams(params)
        })
        const token = await response.json()
        this.accessToken = (token['access_token'])
        this.refreshToken = (token['refresh_token'])
        this.scope = (token['scope'])
        this.expiresIn = (token['expires_in'])
        this.tokenType = (token['token_type'])
        return token
    }
}

export default new FetchStore()
