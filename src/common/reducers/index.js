import { combineReducers } from 'redux';
import appReducer from '../../pages/app/drawer/reducer';
import LoginReducer from './loginReducer'
import dataReducer from '../../pages/integration/ListData/reducer';
import ImageEditReducer from '../../pages/integration/EditData/reducer';
import ImagePostReducer from '../../pages/integration/PostData/reducer';
import ImageListReducer from '../../pages/integration/ListData/reducer';
// import reducers from the reducers export all, making this as root reducer
// export default combineReducers({
// })
export default combineReducers({
    appReducer,
    LoginReducer,
    dataReducer,
    ImageEditReducer,
    ImageListReducer,
    ImagePostReducer
});