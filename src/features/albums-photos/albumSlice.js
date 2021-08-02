import axios from 'axios'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getAlbums = createAsyncThunk(
     "albums/getAlbums",
     async (dispatch,getState) =>{
      const {data} = await axios.get(`${process.env.REACT_APP_BASE_URL}/albums`)
      return data    
     }
)

export const getphotos = createAsyncThunk(
    "photos/getphotos",
    async (id,dispatch,getState) => {
        const {data : photos} = await axios.get(`${process.env.REACT_APP_BASE_URL}/albums/${id}/photos`)
        return photos
      
    }
)

const albumSlice = createSlice({
    name :"album",
    initialState : {
        albums : [],
        status : null,
        photos : []
    },
    extraReducers : {
        [getAlbums.fulfilled] : (state,action) =>{
            state.status = "Success"
            state.albums = action.payload
        },
        [getAlbums.rejected] : (state,action) =>{
             state.status = "Failed"
             alert(action.error.message)
        },
        [getphotos.fulfilled] : (state,action) =>{
            state.photos = action.payload
        },
        [getphotos.rejected] : (state,action) =>{
            alert(action.error.message)
        }
    }
})

export default albumSlice.reducer