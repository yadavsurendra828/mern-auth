import axios from "axios";
export const BASE_URL = process.env.REACT_APP_SERVER_URL as string;

// Request for Post Request
export const postRequest = (requestUrl: string, postData: any) => {
    const url: string =  BASE_URL+requestUrl
    return axios.post(url, postData);
}
