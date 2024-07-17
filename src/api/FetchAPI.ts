import { FetchResponse, FetchOptions } from "../types/types";

export class FetchAPI {
    private baseURL: string;
    private token: string | null;
    
    constructor ( baseURL: string){
        this.baseURL = baseURL;
        this.token = localStorage.getItem('token');
    }

    private async request<T>(
        path: string,
        options: FetchOptions = {},
    ): Promise<FetchResponse<T>> {
        const url = `${this.baseURL}${path}`;
        try{
            const reqHeader = new Headers();
            reqHeader.append("Content-Type", "application/json");

            if(this.token) {
                reqHeader.append("Authorization", `Bearer ${this.token}`);
            }

            const reqOptions = {...options, headers: reqHeader};
            const response = await fetch(url, reqOptions);
            if(!response.ok){
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }

            const data = await response.json();
            return {data};

        }catch(error){
            const err = error as Error;
            return {error: err.message};
        }
    }

    get<T>(
        path: string,
        headers: {[key: string]: string} = {}
    ): Promise<FetchResponse<T>> {
        return this.request<T>(path, { method: "GET", headers});
    }

    post<T>(
        path: string,
        body: unknown,
        headers: {[key: string]: string} = {}
    ): Promise<FetchResponse<T>> {
        return this.request<T>(path, {method: "POST", headers, body: JSON.stringify(body)});
    }

    delete<T>(
        path: string,
        headers: {[key: string]: string} = {}
    ): Promise<FetchResponse<T>>{
        return this.request<T>(path, {method: "DELETE", headers});
    }

    put<T>(
        path: string,
        headers: {[key: string]: string} = {},
        body: unknown,
    ): Promise<FetchResponse<T>> {
        return this.request(path, {method: "PUT", headers, body: JSON.stringify(body)});
    }

}