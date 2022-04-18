import axios from 'axios';

import { MAIN_URL } from "./constants";

class Api {
    constructor(options) {
        this._url = options.url;
    }

    _sendRequest = async (path, method, options) => {
        const requestOptions = {
            url: `${MAIN_URL}${path}`,
            method,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json;charset=UTF-8",
            },
            ...options
        };

        try {
            const { data } = await axios(requestOptions);
            return data;
        } catch (error) {
            return error;
        }
    };

    getAllCards = () => this._sendRequest(`?albumId=1`, 'GET');
};

const api = new Api({ url: MAIN_URL });

export default api;