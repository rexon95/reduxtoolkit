import { takeEvery, fork } from "@redux-saga/core/effects";
import { call, put, take, takeLatest } from "redux-saga/effects";
import * as actions from '../actions/users'
import axios from 'axios'
import { editUserSaga, usersDataSaga, addUserSaga, deleteUserSaga  } from "../features/users/userSlice";


function* getUsers(){
     try{
      //   console.log('hello saga')
       const {data, status} = yield call(axios.get,`${process.env.REACT_APP_BASE_URL}/users`)
        yield put(usersDataSaga({data,status}))
     }
     catch(e) {
        alert(e.message)
     }
}

function* watchGetUsersRequest(){

     yield takeEvery(actions.Types.GET_USERS_REQUEST,getUsers)
}

function* putUser(action){
    try{
       const {data} = yield call(axios.put,`${process.env.REACT_APP_BASE_URL}/users/${action.payload.id}`,action.payload)
         yield put(editUserSaga(data))
      }catch(e){
         alert(e.message)
    }
     
}

function* watchPutUserRequest(){
    yield takeLatest(actions.Types.PUT_USER_REQUEST,putUser)
}


function* postUser(action){
   try{
         const { data } = yield call(axios.post,`${process.env.REACT_APP_BASE_URL}/users`,action.payload)
          yield put(addUserSaga(data))
    }catch(e){
       alert(e.message)
   }
}

function* watchPostUserRequest(){
   yield takeLatest(actions.Types.POST_USER_REQUEST,postUser)
}

function* deleteUser(id){
      yield put(deleteUserSaga(id))
}
function* watchDeleteUserRequest(){
       while(true){
        const  {payload : id}  = yield take(actions.Types.DELETE_USER_REQUEST) 
         yield call(deleteUser,id)
        
       }
}

 const usersSagas = [
      fork(watchGetUsersRequest),
      fork(watchPutUserRequest),
      fork(watchPostUserRequest),
      fork(watchDeleteUserRequest)
 ]

export default usersSagas