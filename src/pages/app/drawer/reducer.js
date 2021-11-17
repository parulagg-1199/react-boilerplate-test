import {
    HANDLE_DRAWER_TOGGLE_CHANGE
} from './constants';

const initialState = {
  toggleStatus : true
};

export default function appReducer(state = initialState, action) {
    switch (action.type) {
        case HANDLE_DRAWER_TOGGLE_CHANGE:
        console.log('in reducer')
            return Object.assign({}, state, {
                toggleStatus: action.toggleStatus
            });
        default:
            return state
    }
}
