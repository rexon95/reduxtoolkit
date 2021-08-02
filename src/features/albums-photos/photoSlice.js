import axios from 'axios'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPhotos = createAsyncThunk(
     "photos/getPhotos",
     async (dispatch,getState) =>{
      const {data} = await axios.get('https://jsonplaceholder.typicode.com/photos')
      return data    
     }
)

const PhotoSlice = createSlice({
    name :"Photo",
    initialState : {
        photos : [],
        status : null
    },
    extraReducers : {
        [getPhotos.fulfilled] : (state,action) =>{
            state.status = "Success"
            state.photos = action.payload
        },
        [getPhotos.rejected] : (state,action) =>{
             state.status = "Failed"
             alert(action.error.message)
        }
    }
})

export default PhotoSlice.reducer