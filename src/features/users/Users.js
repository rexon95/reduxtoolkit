import React,{useState,useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {StyledTableCell, StyledTableRow} from './styles'
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
// import {getUsers} from './userSlice'
// import { deleteUserAction } from './userSlice';
import AddEditForm from './add-edit-form/AddEditForm'
// import { addUserAction } from './userSlice';
// import { editUsers } from './userSlice';
import { getUsersRequest, putUserRequest, postUserRequest, deleteUserRequest } from '../../actions/users';


const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function Users() {
  const { users } = useSelector(state=>state.usersData)
  const classes = useStyles();
  const [search,setSearch] = useState('')
  const [filterData,setFilterData] = useState([...users])
  const [open, setOpen] = useState(false);
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [id,setId] = useState('')

  const handleOpen = (id) => {
    setOpen(true);
    if(id){
      const data = users.filter((user,i)=>{
        return id === user.id
      })
      setName(data[0].name)
      setEmail(data[0].email)
      setId(data[0].id)
    }else{
      setEmail('')
      setName('')
      setId('')
    }
  };

  const handleClose = () => {
    setOpen(false);
  };
      const dispatch = useDispatch()
      useEffect(()=>{
          // dispatch(getUsers())
          dispatch(getUsersRequest())
      },[dispatch])

      useEffect(()=>{
          setFilterData([...users])
      },[users])
       
    
  // console.log('users',users,'flist',filterData)
  //filter
  const handleSearch = (e) =>{
     setSearch(e.target.value)
     const  data = users.filter((user)=>{
          return user.name.toLowerCase().includes(e.target.value.toLowerCase())
     })
     setFilterData(data)
  }

  //delete
  const handleDelete = (id) =>{
      //  dispatch(deleteUserAction(id))
       dispatch(deleteUserRequest(id))
  }

  //add edit form submit
  const handleSubmit = (e) =>{
    e.preventDefault()
    const formData = {
      id : (id)? id : users.length + 1,
      name : name,
      email : email
    }
    if(id){
      // dispatch(editUsers(formData))
      dispatch(putUserRequest(formData))
    }else{
      //  dispatch(addUserAction(formData))
       dispatch(postUserRequest(formData))
    }
    // console.log(formData)
    handleClose()
    setName('')
    setEmail('')
}
  return (
    <>
       <h4 className="text-center">UserList</h4>
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <SearchIcon/>
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Search by name" value={search} onChange={handleSearch}/>
          </Grid>
          <Grid item>
             <button className="btn btn-success text-white" onClick={()=>{handleOpen(null)}}>Add newUser</button>
          </Grid>
        </Grid>
      </div>
    <TableContainer component={Paper} className="mt-5">
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left" >Id</StyledTableCell>
            <StyledTableCell align="left">Name</StyledTableCell>
            <StyledTableCell align="left">Email</StyledTableCell>
            {/* <StyledTableCell align="left">Add</StyledTableCell> */}
            <StyledTableCell align="left">Edit</StyledTableCell>
            <StyledTableCell align="left">Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filterData.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell align="left">{row.id}</StyledTableCell>
              <StyledTableCell align="left">{row.name}</StyledTableCell>
              <StyledTableCell align="left">{row.email}</StyledTableCell>
              {/* <StyledTableCell align="left"><Button variant="contained" className="bg-success text-white" onClick={()=>{handleOpen(null)}}>Add</Button></StyledTableCell> */}
              <StyledTableCell align="left"><Button variant="contained" className="bg-primary text-white" onClick={()=>{handleOpen(row.id)}}>Edit</Button></StyledTableCell>
              <StyledTableCell align="left"><Button onClick={()=>{handleDelete(row.id)}} variant="contained" className="bg-danger text-white">Delete</Button></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <AddEditForm open={open} 
                 handleClose={handleClose} 
                 handleSubmit={handleSubmit} 
                 name={name} 
                 email={email} 
                 setName={setName} 
                 setEmail={setEmail}/>
    </>
  );
}
