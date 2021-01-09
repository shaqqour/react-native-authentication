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