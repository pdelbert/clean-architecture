import fetch from 'cross-fetch';

export type FetchTypes = 'GET' | 'POST' | 'PUT';

export interface FetchOptions {
    method: FetchTypes;
    headers?: { [key: string]: string };
    body?: string | FormData
}
  
export interface FetchResponse<T> {
    data: T;
    status: number;
    statusText: string;
}

export const fetchRequest = async <T,>(url: string, options: FetchOptions):Promise<FetchResponse<T>> => {
    try {
        const response = await fetch(url, options);
        const data: T = await response.json();
        return {
            data,
            status: response.status,
            statusText: response.statusText,
        };
    } catch (error) {
        throw error;
    }
}
