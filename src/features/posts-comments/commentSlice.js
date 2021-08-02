import axios from 'axios'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getComments = createAsyncThunk(
     "comments/getComments",
     async (id,dispatch,getState) =>{
      const {data} = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts/${id}/comments`)
      console.log(data)
      return data    
     }
)

const commentSlice = createSlice({
    name :"comment",
    initialState : {
        comments : [],
        status : null
    },
    extraReducers : {
        [getComments.fulfilled] : (state,action) =>{
            state.status = "Success"
            state.comments = action.payload
        },
        [getComments.rejected] : (state,action) =>{
             state.status = "Failed"
             alert(action.error.message)
        }
    }
})

export default commentSlice.reducer