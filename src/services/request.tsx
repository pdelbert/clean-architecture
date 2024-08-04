
type fetchTypes = 'GET' | 'POST' | 'PUT';

export interface FetchOptions {
    method: fetchTypes;
    headers?: { [key: string]: string };
    body?: string | FormData;
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
  
// Example usage:
    interface User {
    id: number;
    name: string;
}
  
const fetchUser = async () => {
    const url = 'https://jsonplaceholder.typicode.com/comments';
    const options: FetchOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    };

    try {
        const response: FetchResponse<User> = await fetchRequest(url, options);
        console.log(response.data); // User object
    } catch (error) {
        console.error(error);
    }
};