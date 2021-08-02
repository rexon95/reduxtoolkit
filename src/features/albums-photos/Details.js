import React from 'react'
import {useSelector} from 'react-redux'
import ImageListComp from './ImageListComp'

export default function Details(props) {
     const {photos} = useSelector(state => state.albumsData)
     const {albums} = props

     console.log(photos,'photos')
    const handleBack = ()=>{
        props.history.push('/dashboard/albums')
    }
    return (
        <div>
             <button className='btn btn-warning text-dark mb-3' onClick={handleBack}>Back to AlbumsList</button>
           <ImageListComp photos={photos} albums={albums}/>
        </div>
    )
}
