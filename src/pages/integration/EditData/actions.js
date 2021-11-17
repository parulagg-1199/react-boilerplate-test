import { PUT_API } from "../../../middleware/symbols";

import {

    PUT_FORM_REQUEST, PUT_FORM_SUCCESS, PUT_FORM_ERROR,

} from './constant';


import { baseApi } from "../../../common/actions/index";

const BASE_URL = baseApi()

export function putData(item, data) {
    console.log('edit action')
    return {
        [PUT_API]: {
            endpoint: "https://jsonplaceholder.typicode.com" + "/photos/${item.id}",
            authenticated: true,
            types: [PUT_FORM_REQUEST, PUT_FORM_SUCCESS, PUT_FORM_ERROR],
            body: data
        }
    }
}



