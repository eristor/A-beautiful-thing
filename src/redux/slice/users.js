import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk('fetchUsers', async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    return response.json();
});

const usersSlice = createSlice({
    name: 'user',
    initialState: {
        isLoading: false,
        data: [],
        isError: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
            console.log('Error', action.payload);
            state.isError = true;
        })
    }
});

export default usersSlice.reducer;