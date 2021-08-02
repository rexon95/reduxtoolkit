import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import userReducer from '../features/users/userSlice'
import postReducer from '../features/posts-comments/postSlice'
import commentReducer from '../features/posts-comments/commentSlice'
import albumReducer from '../features/albums-photos/albumSlice'
import photoReducer from '../features/albums-photos/photoSlice'
import statReducer from '../features/stats/statSlice'
import rootSaga from '../sagas'

const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({  
        reducer: {
            statsData : statReducer,
            usersData:userReducer,
            postsData : postReducer,
            commentsData : commentReducer,
            albumsData : albumReducer,
            photoData : photoReducer
        },
        middleware : [thunk,sagaMiddleware]
    })
sagaMiddleware.run(rootSaga)