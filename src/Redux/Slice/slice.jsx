import { createSlice, isPending } from '@reduxjs/toolkit' 
import postData from '../Action/action'

const initialState = {
    data: [],
    isLoading: false,
    value:null,
    error: null,
  };

const PostSlice = createSlice({
    name : 'user',
    initialState,
    reducers :{},
    extraReducers : (builder) =>
    {
       builder
       .addCase(postData.pending, (state) =>
    {
         state.isLoading = true ;
         state.error = false;
    })
    .addCase(postData.fulfilled, (state, {payload}) =>
        {
             state.isLoading = false;
             state.data = payload;
             state.error = false;
        })
        .addCase(postData.rejected, (state, {payload}) =>
            {
                 state.isLoading = false;
                 state.error = payload;
            })
    }
})

export default PostSlice.reducer