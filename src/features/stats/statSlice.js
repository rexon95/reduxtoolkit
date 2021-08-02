import axios from 'axios'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getStats = createAsyncThunk(
     "stats/getstats",
     async (dispatch,getState) =>{
      const {data:users} = await axios.get(`${process.env.REACT_APP_BASE_URL}/users`)
      const {data:posts} = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts`)
      const {data:albums} = await axios.get(`${process.env.REACT_APP_BASE_URL}/albums`)
      const {data:photos} = await axios.get(`${process.env.REACT_APP_BASE_URL}/photos`)
      const {data:comments} = await axios.get(`${process.env.REACT_APP_BASE_URL}/comments`)
      return [users.length,posts.length,albums.length,photos.length,comments.length]    
     }
)

const statSlice = createSlice({
    name :"stat",
    initialState : {
        usercount : 0,
        postcount : 0,
        albumcount :0,
        photocount :0,
        commentcount:0

    },


    extraReducers : {
        [getStats.fulfilled] : (state,action) =>{
            state.usercount = action.payload[0]
            state.postcount = action.payload[1]
            state.albumcount = action.payload[2]
            state.photocount = action.payload[3]
            state.commentcount = action.payload[4]
        },
        [getStats.rejected] : (state,action) =>{
             alert(action.error.message)
        }
    }
})

export default statSlice.reducer