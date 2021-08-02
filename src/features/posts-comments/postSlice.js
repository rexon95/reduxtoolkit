import axios from 'axios'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk(
     "posts/getPosts",
     async (dispatch,getState) =>{
      const {data} = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts`)
      return data    
     }
)

const postSlice = createSlice({
    name :"post",
    initialState : {
        posts : [],
        status : null
    },
    extraReducers : {
        [getPosts.fulfilled] : (state,action) =>{
            state.status = "Success"
            state.posts = action.payload
        },
        [getPosts.rejected] : (state,action) =>{
             state.status = "Failed"
             alert(action.error.message)
        }
    }
})

export default postSlice.reducer