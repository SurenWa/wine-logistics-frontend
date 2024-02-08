// third-party
import { combineReducers } from 'redux';
// import { persistReducer } from 'redux-persist';
//import storage from 'redux-persist/lib/storage';

// project imports
import snackbarReducer from './slices/snackbar';
import customerReducer from './slices/customer';
import menuReducer from './slices/menu';
import userReducer from './slices/user';
import authReducer from './slices/auth/authSlices';

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
    snackbar: snackbarReducer,
    customer: customerReducer,
    menu: menuReducer,
    user: userReducer,
    auth: authReducer
});

export default reducer;