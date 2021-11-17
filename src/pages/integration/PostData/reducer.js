import {
    POST_FORM_REQUEST, POST_FORM_SUCCESS, POST_FORM_ERROR,
} from './constant'

const initialState = {
    formPageLoading: '',
    data: [],
    error: '',
    message: '',
}

export default function ImagePostReducer(state = initialState, action) {
    switch (action.type) {
        case POST_FORM_REQUEST:
            return Object.assign({}, state, {
                formPageLoading: true,
                message: ''
            })

        case POST_FORM_SUCCESS:
            return Object.assign({}, state, {
                formPageLoading: false,
                data: action.payload,
                error: false,
                message: "Image has been added successfully"
            })

        case POST_FORM_ERROR:
            return Object.assign({}, state, {
                formPageLoading: false,
                data: '',
                error: true

            })

        default: return state
    }
}

