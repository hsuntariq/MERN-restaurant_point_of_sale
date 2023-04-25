import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import itemService from "./itemService";

// define the initialState
const initialState = {
    items: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: '',
};

// handle posting of the data

export const postItems = createAsyncThunk('items/postItems', async (itemData,thunkApi) => {
    try {
        return await itemService.postItem(itemData);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
            || error.message || error.toString();
        return thunkApi.rejectWithValue(message);
    }
})


// create the slice
export const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        resetState: (state) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = false;
            state.message = ''
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(postItems.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(postItems.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(postItems.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.items = action.payload;
            })
    }
})

export const { resetState } = itemSlice.actions;
export default itemSlice.reducer