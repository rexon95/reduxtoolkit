import { takeEvery, fork } from "@redux-saga/core/effects";
import { call, put } from "redux-saga/effects";
import * as actions from '../actions/users'
import axios from 'axios'
import { usersDataSaga } from "../features/users/userSlice";


function* getUsers(){
     try{
        console.log('hello saga')
       const {data} = yield call(axios.get,`${process.env.REACT_APP_BASE_URL}/users`)
        yield put(usersDataSaga(data))
     }
     catch(e) {
        alert(e.message)
     }
}

function* watchGetUsersRequest(){

     yield takeEvery(actions.Types.GET_USERS_REQUEST,getUsers)
}

 const usersSagas = [
     fork(watchGetUsersRequest)
 ]

export default usersSagas