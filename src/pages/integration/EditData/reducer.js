import {
    PUT_FORM_REQUEST, PUT_FORM_SUCCESS, PUT_FORM_ERROR,
} from './constant'

const initialState = {
    formPageLoading: '',
    data: [],
    item: {},
    error: '',
}

export default function ImageEditReducer(state = initialState, action) {
    switch (action.type) {
        case PUT_FORM_REQUEST:
            return Object.assign({}, state, {
                formPageLoading: true,
            })

        case PUT_FORM_SUCCESS:
            console.log('success PUT', action)
            return {
                ...state,
                data: state.data.map(item => {
                    if (item.id === action.response.data.id) {
                        return {
                            ...item,
                            item: action.response.data
                        }
                    }
                    else return item;
                })
            }

        case PUT_FORM_ERROR:
            return Object.assign({}, state, {
                formPageLoading: false,
                data: '',
                error: true
            })

        default: return state
    }
}

