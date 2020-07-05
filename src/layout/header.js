import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';



function Affiche(props){
     const [firstName,setFirstName]=useState("");
     const [lasttName,setlastName]=useState("");
     const [surnom,setSurnom]=useState("");
     const [email,setEmail]=useState("");
     const [phone,setPhone]=useState("");
     const [company,setCompany]=useState("");



  
    const handleClickOpen = () => {
      props.setOpen(true);
    };
  
    const handleClose = () => {
      props.setOpen(false);
    };
    const onChangeFirstName=()=>{
      setFirstName(firstName);
    };
    const onChangeLastName=()=>{
      setlastName(lasttName);
    };
    const onChangeSurname=()=>{
      setSurnom(surnom);
    };
    const onChangeEmail=()=>{
      setEmail(email);
    };
    const onChangePhone=()=>{
      setPhone(phone);
    };
    const onChangeCompany=()=>{
      setCompany(company);
    };
   

  
    return (
      <div>
          
       
        <Dialog open={props.open} onClose={handleClose} aria-labelledby="form-dialog-title">
          
          <DialogTitle id="form-dialog-title">Contacts</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Ajouter un contacts.
            </DialogContentText>
           <form>
           <TextField  required id="standard-required" label="Nom " onChange={onChangeFirstName} />
           <TextField required id="standard-required" label="Prenom" onChange={onChangeLastName} />
           <TextField required id="standard-required" label="Surnom" onChange={onChangeSurname} />
           <TextField required id="standard-required" label="Email" onChange={onChangeEmail} />
           <TextField required id="standard-required" label="Phone" onChange={onChangePhone} />  
           <TextField required id="standard-required" label="société" onChange={onChangeCompany} />
           </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Anuller
            </Button>
            <Button onClick={handleClose} color="primary">
              Ajouter
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }







export default Affiche