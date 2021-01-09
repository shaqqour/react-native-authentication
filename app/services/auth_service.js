import Axios from "axios";

import * as c from '../constants';

export async function register(data) {
    try {
        let res = await Axios.post(c.REGISTER, data);
        return res.data;
    } catch (e) {
        throw handler(e)
    }
}

export async function login(data) {
    try {
        let res = await axios.post(c.LOGIN, data);
        return res.data;
    } catch (e) {
        throw handler(e);
    }
}

export async function forgotPassword(data) {
    try {
        let res = await axios.post(c.FORGOT_PASSWORD, data);
        return res.data;
    } catch (e) {
        throw handler(e);
    }
}

export async function updateProfile(userId, data) {
    try {
        const options = {
            headers: {
                Accept: "application/json",
                "Content-Type": "multipart/form-data"
            }
        };

        const form_data = new FormData();
        for (let key in data)
            form_data.append(key, data[key]);

        let res = await axios.put(`${c.UPDATE_PROFILE}/${userId}`, form_data, options);
        return res.data;
    } catch (e) {
        throw handler(e);
    }
}