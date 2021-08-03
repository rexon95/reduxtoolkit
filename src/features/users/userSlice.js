// import axios from 'axios'
// eslint-disable-next-line no-unused-vars
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// export const getUsers = createAsyncThunk(
//      "users/getUsers",
//      async (dispatch,getState) =>{
//       const {data} = await axios.get(`${process.env.REACT_APP_BASE_URL}/users`)
//       return data    
//      }
// )

// export const editUsers = createAsyncThunk(
//     "users/editUsers",
//     async (formData,dispatch,getState) =>{
//      const {data} = await axios.put(`${process.env.REACT_APP_BASE_URL}/users/${formData.id}`,formData)
//      return data
//     }
// )

const userSlice = createSlice({
    name :"user",
    initialState : {
        users : [],
        status : null
    },

    reducers : {

        usersDataSaga : (state,action) => {
            state.users = action.payload.data
            state.status = action.payload.status? 'success' : 'failed'
        },

        editUserSaga : (state,action) => {
            console.log(action,'hello')
            state.users = state.users.map((user,i)=>{
                if(user.id === action.payload.id){
                    return {...user,...action.payload}
                }else{
                    return user
                }
            })
        },
        
        deleteUserSaga : (state,action) => {
        state.users = state.users.filter((user,i)=>{
            return user.id !== action.payload
        })
           
        },

        addUserSaga : (state,action) => {
            state.users = [...state.users,action.payload]
        },
    },
    extraReducers : {
        // [getUsers.fulfilled] : (state,action) =>{
        //     state.status = "Success"
        //     state.users = action.payload
            
        // },
        // [getUsers.rejected] : (state,action) =>{
        //      state.status = "Failed"
        //      alert(action.error.message)
        // },
    //     [editUsers.fulfilled] : (state,action) =>{
    //          state.users = state.users.map((user,i)=>{
    //             if(user.id === action.payload.id){
    //                 return {...user,...action.payload}
    //             }else{
    //                 return user
    //             }
    //       })
    //    },
    //     [editUsers.rejected] : (state,action) =>{
    //         alert(action.error.message)
    //    }
    }
})

export const {deleteUserSaga,addUserSaga,usersDataSaga,editUserSaga} = userSlice.actions

// export const deleteUserAction = (id) => (dispatch,getState) =>{
//          const prevState = getState().usersData.users
//          const newState = prevState.filter((user)=>{
//              return user.id !== id
//          })
//          dispatch(deleteUser(newState))
// }

// export const addUserAction = (formData) => (dispatch,getState) => {
//          const prevState = getState().usersData.users
//         //  const newState = [...prevState,formData]
//          axios.post(`${process.env.REACT_APP_BASE_URL}/users`,formData)
//          .then(res=>{
//             dispatch(addUser([...prevState,res.data]))
//          })
//          .catch(err=>{
//              alert(err.message)
//          })
// }

// export const editUserAction = (formData) => (dispatch,getState) => {
//          const prevState = getState().usersData.users
//          const newState = prevState.map((user,i)=>{
//                if(user.id === formData.id){
//                    return {...user,...formData}
//                }else{
//                    return user
//                }
//          })
//          dispatch(editUser(newState))
// }
export default userSlice.reducer