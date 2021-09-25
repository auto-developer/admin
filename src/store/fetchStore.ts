import {CLIENT_ID, CLIENT_SECRET, REDIRECT_URI} from "../common/config";
import {TokenParam} from "../types";

class Fetcher {

    fetching: boolean = false;

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

    async postResource(url: string, params: any): Promise<any> {
        const p = new URLSearchParams(params)
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    Authorization: `${Fetcher.tokenType} ${Fetcher.accessToken}`
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
                        Authorization: `${Fetcher.tokenType} ${Fetcher.accessToken}`
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
                    Authorization: `${Fetcher.tokenType} ${Fetcher.accessToken}`
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
                        Authorization: `${Fetcher.tokenType} ${Fetcher.accessToken}`
                    },
                })
                return again.json()
            }
        } catch (e) {
            console.log('exception')
            console.log(e)
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
            'refresh_token': Fetcher.refreshToken,
        }
        await this.fetchToken(params)
    }

    private async fetchToken(params: TokenParam) {
        const response = await fetch('/token', {
            method: 'POST',
            body: new URLSearchParams(params)
        })
        const token = await response.json()
        Fetcher.accessToken = (token['access_token'])
        Fetcher.refreshToken = (token['refresh_token'])
        Fetcher.scope = (token['scope'])
        Fetcher.expiresIn = (token['expires_in'])
        Fetcher.tokenType = (token['token_type'])
    }
}

export default new Fetcher()
