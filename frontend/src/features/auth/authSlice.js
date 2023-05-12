import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './authService';

// get the user from the local storage
const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
    user: user ? user : null,
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: ''
};


// create the thunk to handle the registration

export const registerUser = createAsyncThunk('auth/register', async (userData, thunkApi) => {
    try {
        return authService.registerUser(userData);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
            || error.message || error.toString();
        return thunkApi.rejectWithValue(message);
    }
})


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = false;
            state.message = ''
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending,(state)=>{
                state.isLoading = true
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.user = null;
                state.message = action.payload;
            })
            .addCase(registerUser.fulfilled,(state,action)=>{
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
            })
    }
})


export const { reset } = authSlice.actions;
export default authSlice.reducer;  