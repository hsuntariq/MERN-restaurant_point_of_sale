import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import tableService from './tableService'


const initialState = {
    table: [],
    isLoading: false,
    isSuccess: false,
    isError:false,
    message: '',
}


// create thunck function for getting tables

export const getTableData = createAsyncThunk('table/getTable', async (_, thunkApi) => {
    try {
        return await tableService.getTables;
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) ||
            error.message || error.toString();
        return thunkApi.rejectWithValue(message);
    }
})

// create the slice

export const tableSlice =  createSlice({
    name: 'table',
    initialState,
    reducers: {
        reset: (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = false;
        state.message = '';
        }
    },
    extraReducers:()=>{}
})

export const { reset } = tableSlice.actions;
export default tableSlice.reducer;


