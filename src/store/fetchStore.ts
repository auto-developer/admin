import {CLIENT_ID, CLIENT_SECRET, REDIRECT_URI} from "../common/config";
import {TokenParam} from "../types";
import {makeAutoObservable} from "mobx";

class FetchStore {

    private fetchCount: number = 0;

    constructor() {
        window.fetch = new Proxy(fetch, {
            apply: async (target: (input: RequestInfo, init?: RequestInit) => Promise<Response>, thisArg: any, argArray: any[]) => {
                this.setFetchCount(this.fetchCount + 1)
                const result = await target(argArray[0], argArray[1])
                this.setFetchCount(this.fetchCount - 1)
                return result
            }
        })
        makeAutoObservable(this)
    }

    get fetching(): boolean {
        return this.fetchCount > 0
    };

    private static get accessToken() {
        return localStorage.getItem('access_token') || ''
    }

    private static set accessToken(accessToken: string) {
        localStorage.setItem('access_token', accessToken)
    }

    private static get refreshToken() {
        return localStorage.getItem('refresh_token') || ''
    }

    private static set refreshToken(refreshToken: string) {
        localStorage.setItem('refresh_token', refreshToken)
    }

    private static get scope(): string {
        return localStorage.getItem('scope') || ''
    }

    private static set scope(scope: string) {
        localStorage.setItem('scope', scope)
    }

    private static get tokenType(): string {
        return localStorage.getItem('token_type') || ''
    }

    private static set tokenType(tokenType: string) {
        localStorage.setItem('token_type', tokenType)
    }

    private static get expiresIn(): number {
        return Number(localStorage.getItem('token_type')) || NaN
    }

    private static set expiresIn(expireIn: number) {
        localStorage.setItem('token_type', String(expireIn))
    }

    setFetchCount(count: number) {
        this.fetchCount = count
    }

    async postResource(url: string, params: any): Promise<any> {
        const p = new URLSearchParams(params)
        const post = () => fetch(url, {
            method: 'POST',
            headers: {Authorization: `${FetchStore.tokenType} ${FetchStore.accessToken}`},
            body: p
        })
        try {
            const response = await post()
            if (response.ok) {
                return await response.json()
            } else {
                const error = await response.json()
                console.log(error)
                const r = await this.postRefreshToken()
                console.log(r)
                const again = await post()
                return again.json()
            }
        } catch (e) {
            console.log('exception')
            console.log(e)
            const r = await this.postRefreshToken()
            console.log(r)
            const again = await post()
            return again.json()
        }
    }

    async getResource(url: string, params = {}): Promise<any> {
        const p = new URLSearchParams(params)
        const get = () => fetch(url + p.toString(), {
            method: 'GET',
            headers: {Authorization: `${FetchStore.tokenType} ${FetchStore.accessToken}`},
        })
        try {
            const response = await get()
            if (response.ok) {
                return response.json()
            } else {
                const error = await response.json()
                console.log(error)
                const r = await this.postRefreshToken()
                console.log(r)
                const again = await get()
                return again.json()
            }
        } catch (e) {
            console.log('exception')
            console.log(e)
            const r = await this.postRefreshToken()
            console.log(r)
            const again = await get()
            return again.json()
        }
    }

    async postToken(code: string | null): Promise<void> {
        if (!code) throw Error('code is required.')
        const params = {
            'client_id': CLIENT_ID,
            'client_secret': CLIENT_SECRET,
            'redirect_uri': REDIRECT_URI,
            'grant_type': 'authorization_code',
            'code': code,
        }
        await this.fetchToken(params)
    }

    private async postRefreshToken() {
        const params = {
            'client_id': CLIENT_ID,
            'client_secret': CLIENT_SECRET,
            'grant_type': 'refresh_token',
            'refresh_token': FetchStore.refreshToken,
        }
        await this.fetchToken(params)
    }

    private async fetchToken(params: TokenParam) {
        const response = await fetch('/oauth/token', {
            method: 'POST',
            body: new URLSearchParams(params)
        })
        const token = await response.json()
        FetchStore.accessToken = (token['access_token'])
        FetchStore.refreshToken = (token['refresh_token'])
        FetchStore.scope = (token['scope'])
        FetchStore.expiresIn = (token['expires_in'])
        FetchStore.tokenType = (token['token_type'])
    }

}

export default new FetchStore()
