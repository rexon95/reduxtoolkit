import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { getPosts } from './postSlice';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from '@material-ui/core/Divider';
import { getComments } from './commentSlice';
import { Link } from 'react-router-dom';
// import { getUsers } from '../users/userSlice';
import { getUsersRequest } from '../../actions/users';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function PostsList() {
        const classes = useStyles();
        const dispatch = useDispatch()
        useEffect(()=>{
            //  dispatch(getUsers())
                dispatch(getUsersRequest())
             dispatch(getPosts())
           
        },[dispatch])

        const postDetails = (id) => {
            dispatch(getComments(id))
        }
         
     const {posts} = useSelector(state => state.postsData)
        return (
            <>
            <h1 className='text-center'>PostsList</h1>
            <div className={classes.root}>
                <List component="nav" aria-label="main mailbox folders">
                {posts.map((post,i)=>{
                    return <React.Fragment key={post.id}>    
                                <Link to='/dashboard/posts/details' style={{ textDecoration: 'none', color: 'inherit' }}><ListItem button onClick={()=>{postDetails(post.id)}}>
                                <ListItemIcon>
                                {i+1}
                                </ListItemIcon>
                                <ListItemText primary={post.title} />
                                </ListItem></Link>
                                <Divider />
                           </React.Fragment>  
                })}
                </List>
            </div></>
        );
}
