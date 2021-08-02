import React,{useEffect} from 'react'
import  {useSelector,useDispatch} from 'react-redux'
// import { getUsers } from '../userSlice'
// import { getPosts } from '../postSlice'
// import { getComments } from '../commentSlice'
// import { getAlbums } from '../albumSlice'
// import { getPhotos } from '../photoSlice'
import {Row} from 'reactstrap'
import Cardcomp from './card/Cardcomp'
import { getStats } from './statSlice'

const Stats = (props) => {
    const  { usercount } = useSelector(state => state.statsData)
    const  { postcount } = useSelector(state => state.statsData)
    const  { commentcount } = useSelector(state => state.statsData)
    const  { albumcount } = useSelector(state => state.statsData)
    const  { photocount } = useSelector(state => state.statsData)
    const dispatch = useDispatch()
    useEffect(()=>{
       dispatch(getStats())
    },[dispatch])
    return (
          <>
             <Row>
                 <h1 className="text-center mt-3 mb-4">Stats</h1>
             </Row>
            {/* <p>users :{users.length}</p>
            <p>posts :{posts.length}</p>
            <p>comments :{comments.length}</p>
            <p>albums : {albums.length}</p>
            <p className='btn btn-primary'>photos : {photos.length}</p>
            <Button className='btn-success'>heieo</Button> */}
            <Cardcomp data={[usercount,postcount,commentcount,albumcount,photocount]}></Cardcomp>
            
          </>
    )
}


export default Stats
