import {
    GET_FORM_REQUEST, GET_FORM_SUCCESS, GET_FORM_FAILURE,
    GET_FORM_REQUEST_FOR_EDIT, GET_FORM_SUCCESS_FOR_EDIT, GET_FORM_FAILURE_FOR_EDIT,
    DELETE_FORM_REQUEST, DELETE_FORM_SUCCESS, DELETE_FORM_ERROR,
    SHOW_LOADER, HIDE_LOADER
} from './constant'

const initialState = {
    formPageLoading: '',
    data: [],
    dataWithId: [],
    item: {},
    status: '',
    error: '',
    loading: false
}

export default function ImageListReducer(state = initialState, action) {
    switch (action.type) {
        case GET_FORM_REQUEST:
            return Object.assign({}, state, {
                formPageLoading: true,
            })

        case GET_FORM_SUCCESS:
            return {
                formPageLoading: false,
                data: action.response.data,
                status: 200,
                error: false
            }

        case GET_FORM_FAILURE:
            return Object.assign({}, state, {
                formPageLoading: false,
                data: '',
                error: true

            })

        case GET_FORM_REQUEST_FOR_EDIT:
            return Object.assign({}, state, {
                formPageLoading: true,
            })

        case GET_FORM_SUCCESS_FOR_EDIT:
            return {
                formPageLoading: false,
                dataWithId: action.response.dataWithId,
                status: 200,
                error: false
            }

        case GET_FORM_FAILURE_FOR_EDIT:
            return Object.assign({}, state, {
                formPageLoading: false,
                dataWithId: '',
                error: true

            })

        case DELETE_FORM_REQUEST:
            console.log('request DELETE')
            return Object.assign({}, state, {
                formPageLoading: true,
            })

        case DELETE_FORM_SUCCESS:
            console.log('success DELETE')

            return {
                ...state,
                data: state.data.filter(item =>
                    item.id === action.payload ? false : true),
                formPageLoading: false
            }

        case DELETE_FORM_ERROR:
            console.log('error DELETE')
            return Object.assign({}, state, {
                formPageLoading: false,
                data: '',
                error: true
            })

        case SHOW_LOADER:
            return { ...state, loading: true };

        case HIDE_LOADER:
            return { ...state, loading: false };


        default: return state
    }
}

