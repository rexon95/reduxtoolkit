export const Types = {
    GET_USERS_REQUEST : 'users/getusers_request',
    GET_USERS_SUCCESS : 'users/getusers_success'
}

export const getUsersRequest = () => {
   return { 
           type : Types.GET_USERS_REQUEST
          }
}

// export const getUsersSuccess = () => {
//     return {
//            type : Types.GET_USERS_SUCCESS,
//            payload : null
//     }
// }
