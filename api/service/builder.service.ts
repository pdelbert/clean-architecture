import { fetchRequest, FetchTypes, FetchOptions } from "./request";

interface User {
    title: string
    id: number
    name: string
}

export interface FetchResponse<T> {
    data: T;
    status: number;
    statusText: string;
}

export type BodyType = string | undefined;

export const fetchBuilder = async(URL:string, type:FetchTypes, body: BodyType) => {
    
    const options: FetchOptions = {
        method: type,
        headers: { 'Content-Type': 'application/json' },
        body: body
    };

    try {
        const response: FetchResponse<User> = await fetchRequest(URL, options);
        return response;
    } catch (error) {
        console.error(error);
    }
};
