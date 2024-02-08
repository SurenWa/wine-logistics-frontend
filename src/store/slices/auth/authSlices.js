import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'src/utils/axios';

// initialstate
const INITIAL_STATE = {
    token: localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null,
    loading: false,
    error: false,
    users: [],
    user: null,
    success: false,
    message: '',
    isLogin: false,
    isUpdate: false,
    isLoggedOut: false,    
};

export const loginAction = createAsyncThunk('auth/login-user', async (payload, thunkApi) => {
    // make request
    try {
        const res = await axios.post('/auth/login', payload);
        //console.log(res.data);
        //! save the user into localstorage
        localStorage.setItem('token', JSON.stringify(res.data.accessToken));
        return res.data.accessToken;
    } catch (err) {
        //console.log(err)
        let message;
        if (Array.isArray(err?.message)) {
            message = err.message[0];
        } else {
            message = err?.message;
        }
        return thunkApi.rejectWithValue(message);
    }
});

// get-current-user
export const getCurrentUserAction = createAsyncThunk('users/get-current-user', async (_, thunkApi) => {
    try {
        const token = thunkApi.getState().auth.token;
        // console.log('token1=>', token);
        // return;
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        // console.log('current config', config.headers);
        const res = await axios.get('/auth/current-user', config);
        console.log('user', res.data);
        // eslint-disable-next-line no-useless-return
        // return;
        return res.data;
    } catch (error) {
        let message;
        console.log(message)
        if (Array.isArray(error?.response?.data?.message)) {
            message = error.response.data.message[0];
        } else {
            message = error?.response?.data?.message;
        }
        // eslint-disable-next-line consistent-return
        return thunkApi.rejectWithValue(message);
    }
});



// Auth slices
const authSlice = createSlice({
    name: 'auth',
    initialState: INITIAL_STATE,
    reducers: {
        reset: (state) => {
            state.loading = false;
            state.success = false;
            state.error = false;
            state.message = '';
            state.isUpdate = false;
        }
    },
    extraReducers: (builder) => {        
        // Login
        builder.addCase(loginAction.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(loginAction.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.isLogin = true;
            state.token = action.payload;
            state.error = false;
            state.message = action.payload;
        });
        builder.addCase(loginAction.rejected, (state, action) => {
            state.loading = false;
            state.success = false;
            state.isLogin = false;
            state.token = null;
            state.message = action.payload;
            state.error = true;
        }); 
        
        // Get Current User Action
        builder.addCase(getCurrentUserAction.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getCurrentUserAction.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.error = false;
            state.user = action.payload;
        });
        builder.addCase(getCurrentUserAction.rejected, (state, action) => {
            state.loading = false;
            state.success = false;
            state.isLogin = false;
            state.message = action.payload;
            state.error = true;
            state.user = null;
        });
    }
});

// generate reducer
const authReducer = authSlice.reducer;
export const { reset } = authSlice.actions;
export default authReducer;

