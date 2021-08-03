export const Types = {
    GET_USERS_REQUEST : 'users/getusers_request',
    GET_USERS_SUCCESS : 'users/getusers_success',
    POST_USER_REQUEST : 'users/postuser_request',
    PUT_USER_REQUEST : 'users/putuser_request',
    DELETE_USER_REQUEST : 'users/deleteuser_request'
}

export const getUsersRequest = () => {
   return { 
           type : Types.GET_USERS_REQUEST
          }
}

export const postUserRequest = (userData) => {
    return {
          type : Types.POST_USER_REQUEST,
          payload : userData
    }
}

export const putUserRequest = (userData) => {
    return {
          type : Types.PUT_USER_REQUEST,
          payload : userData
    }
}

export const deleteUserRequest = (id) => {
    return {
        type : Types.DELETE_USER_REQUEST,
        payload : id
    }
}


