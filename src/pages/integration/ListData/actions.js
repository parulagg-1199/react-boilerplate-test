import { GET_API, DELETE_API } from "../../../middleware/symbols";

import {
    GET_FORM_REQUEST, GET_FORM_SUCCESS, GET_FORM_FAILURE,

    GET_FORM_REQUEST_FOR_EDIT, GET_FORM_SUCCESS_FOR_EDIT, GET_FORM_FAILURE_FOR_EDIT,

    DELETE_FORM_REQUEST, DELETE_FORM_SUCCESS, DELETE_FORM_ERROR
} from './constant';

import { SHOW_LOADER, HIDE_LOADER } from './constant';

import { baseApi } from "../../../common/actions/index";

const BASE_URL = baseApi()

export function getData() {
    return {
        [GET_API]: {
            endpoint: "https://jsonplaceholder.typicode.com" + "/photos",
            authenticated: true,
            types: [GET_FORM_REQUEST, GET_FORM_SUCCESS, GET_FORM_FAILURE],
        }
    }
}

export function getDataWithId(id, dataWithId) {
    return {
        [GET_API]: {
            endpoint: "https://jsonplaceholder.typicode.com" + "/photos/" + id,
            authenticated: true,
            types: [GET_FORM_REQUEST_FOR_EDIT, GET_FORM_SUCCESS_FOR_EDIT, GET_FORM_FAILURE_FOR_EDIT],
            body: dataWithId
        }
    }
}

export function deleteData(id) {
    console.log('delete')
    return {

        [DELETE_API]: {
            endpoint: "https://jsonplaceholder.typicode.com" + "/photos/" + id,
            authenticated: true,
            types: [DELETE_FORM_REQUEST, DELETE_FORM_SUCCESS, DELETE_FORM_ERROR],
        }
    }
}

export function showLoader() {
    return {
        type: "SHOW_LOADER"
    }
}

export function hideLoader() {
    return {
        type: "HIDE_LOADER"
    }
}
