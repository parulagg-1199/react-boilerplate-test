import { POST_API } from "../../../middleware/symbols";

import {

    POST_FORM_REQUEST, POST_FORM_SUCCESS, POST_FORM_ERROR,

} from './constant';

import { baseApi } from "../../../common/actions/index";

const BASE_URL = baseApi()

export function postData(data) {
    return {
        [POST_API]: {
            endpoint: "https://jsonplaceholder.typicode.com" + "/photos",
            authenticated: true,
            types: [POST_FORM_REQUEST, POST_FORM_SUCCESS, POST_FORM_ERROR],
            body: data
        }
    }
}
