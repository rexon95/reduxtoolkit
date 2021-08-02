import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal(props) {
  const classes = useStyles();
  const {open, handleClose, handleSubmit,name,email,setName,setEmail} = props
   
   const handleName = (e) =>{
      setName(e.target.value)
   }
   const handleEmail = (e) =>{
    setEmail(e.target.value)
 }
  
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
          <form onSubmit={handleSubmit}>
                <div className="form-group row mb-3">
                  <label htmlFor="name" className="col-sm-3 col-form-label">Name</label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control" value={name} onChange={handleName}id="name" placeholder="Name" />
                  </div>
                </div>
                <div className="form-group row mb-3">
                  <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">Email</label>
                  <div className="col-sm-9">
                    <input type="email" className="form-control" value={email} onChange={handleEmail} id="inputEmail3" placeholder="Email" />
                  </div>
                </div>
                <div className="form-group row">
                     <input type="submit" className="btn btn-info col-sm-3 text-white offset-3" value="Save" /><br/>
                     <input type="button" className="btn btn-warning col-sm-3 text-white" onClick={handleClose} value="Cancel"/>
                </div>
              
          </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
