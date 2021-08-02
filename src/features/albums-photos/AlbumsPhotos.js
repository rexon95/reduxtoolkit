import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { getUsers } from '../users/userSlice'
import AlbumList from './AlbumList'
import { getAlbums } from './albumSlice'
import Details  from './Details'

export default function AlbumsPhotos() {

    const {albums} = useSelector(state=> state.albumsData)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAlbums())
        dispatch(getUsers())
    },[dispatch])
    
    return (
        <div>
            <Switch>
            <Route path='/dashboard/albums' render={(props)=>{
                 return <AlbumList {...props} albums={albums}/>
            }} exact={true} />
            <Route path="/dashboard/albums/details" render={(props)=>{
                return <Details {...props} albums={albums}/>
            }} exact={true}/>
            </Switch>
            
        </div>
    )
}
