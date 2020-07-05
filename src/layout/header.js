import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Axios from 'axios';
import {URL} from '../constants'


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
    const onChangeFirstName=(e)=>{
      setFirstName(e.target.value);
    };
    const onChangeLastName=(e)=>{
      setlastName(e.target.value);
    };
    const onChangeSurname=(e)=>{
      setSurnom(e.target.value);
    };
    const onChangeEmail=(e)=>{
      setEmail(e.target.value);
    };
    const onChangePhone=(e)=>{
      setPhone(e.target.value);
    };
    const onChangeCompany=(e)=>{
      setCompany(e.target.value);
    };
   const handleSubmit =() => {

     Axios.post(`${URL}/addContact`,{
       email: email,
       name: `${firstName}  ${lasttName}`,
       phoneNumber: phone,
       company: company
     },
     ).then(
       (response)=>{
       props.setOpen(false);
       props.getContacts();
        console.log(response);

     }
     ).catch((error)=>{
       console.log(error);
     });
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
           <TextField required id="standard-required" type='email' label="Email" onChange={onChangeEmail} />
           <TextField required id="standard-required" label="Phone" onChange={onChangePhone} />  
           <TextField required id="standard-required" label="société" onChange={onChangeCompany} />
           </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Anuller
            </Button>
            <Button onClick={handleSubmit} color="primary">
              Ajouter
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }







export default Affiche