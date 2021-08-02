import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Row} from 'reactstrap'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { Link } from 'react-router-dom';
import { getphotos } from './albumSlice';
// import TextField from '@material-ui/core/TextField';
// import Grid from '@material-ui/core/Grid';
// import SearchIcon from '@material-ui/icons/Search';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { useStylesSelect } from './selectStyles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function AlbumList(props) {
    const classes = useStyles();
    const classesSelect = useStylesSelect();
    const {albums} = props
    const [search,setSearch] = useState('')
    const {users} = useSelector(state=>state.usersData)
    const [filterAlbums,setFilterAlbums] = useState([])
    // const [toggle,setToggle] = useState(false)

      useEffect(()=>{
          setFilterAlbums([...albums])
      },[albums])
     const dispatch = useDispatch()
     const handleDetails = (id) => {
        dispatch(getphotos(id))
     }

    // ----old filter by user name code-----
    // const handleSearch = (e) => {
    //     let id = ''
    //     const res = e.target.value
    //     setSearch(e.target.value)
    //     const user = users.filter(user=>{
    //         return user.name.toLowerCase().includes(res.toLowerCase())
    //     })
    //     if(res.length === 0 || user[0] === undefined){
    //         if(user[0] === undefined){
    //             setToggle(true)
    //         }
    //         id = ''  
    //         const flist = albums.filter(album=>{
    //             return String(album.userId).includes(id)
    //         })
    //         console.log(flist)
    //         setFilterAlbums([...flist]) 
    //     }else{
    //         setToggle(false)
    //         id = user[0].id
    //         console.log(user[0].id)
    //         const flist = albums.filter(album=>{
    //             return album.userId === id
    //         })
    //         setFilterAlbums([...flist])
    //     }
    // }  ----old filter by user name code-----

    const handleSearch = (e) => {
        setSearch(e.target.value)
         if(e.target.value !== 'All'){
                         const flist = albums.filter(album=>{
                                return album.userId === e.target.value
                                    })
                     setFilterAlbums([...flist])
                }else{
                    setFilterAlbums([...albums])
                }

    }
     
     const findUsername = (id) => {
        
          const user = users.filter((usr)=>{
              return usr.id === id
          })
          if(user[0] !== undefined){
          return user[0].name
          }
     }
    return (
        <div>
             <Row>
                 <h1 className="text-center mt-3 mb-4">AlbumsList</h1>
             </Row>
             {/* <Grid item className="mb-3">
                 <SearchIcon className="mt-3"/>&nbsp;&nbsp;&nbsp;<TextField id="input-with-icon-grid" label="Search by userName" size='small' value={search} onChange={handleSearch}/>
             </Grid> */}
             <FormControl className={classesSelect.formControl}>
                        <InputLabel id="demo-simple-select-label">Filter by User</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={search}
                        onChange={handleSearch}
                        >  
                        <MenuItem value='All'>All</MenuItem>
                        {users.map((user,i)=>{
                           return <MenuItem value={user.id} key={user.id}>{user.name}</MenuItem>
                        })}
                         </Select>
             </FormControl>
              
             <div className={classes.root}>
                    <List component="nav">
                       {
                         filterAlbums.map((album,i)=>{

                            return <React.Fragment key={album.id}> <ListItem button key={album.id}>
                                            <ListItemIcon>
                                                 {i+1}
                                            </ListItemIcon>
                                        <ListItemText primary={album.title}/>
                                        <Link className="btn btn-success" to='/dashboard/albums/details' onClick={()=>{handleDetails(album.id)}}>Details</Link>
                                    </ListItem><span style={{marginLeft:'75px'}}>User : {findUsername(album.userId)}</span>
                                     <Divider /> </React.Fragment>
                         })

                       } 
                    </List>
             </div>
        </div>
    )
}
