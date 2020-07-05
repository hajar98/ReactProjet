import React,{useState, useEffect} from 'react';
import MaterialTable from 'material-table';
import Axios from 'axios';
import Affiche from './layout/header';
import {URL} from './constants'

export default function MaterialTableDemo() {
  const [open, setOpen] = React.useState(false);

  const [contactsData, setContactsData] = useState([]);

  

  useEffect(() => {
    getContacts();
  }, []);
  
  const getContacts = ()=>{
    Axios.get(`${URL}/Contacts`
    ).then(
      (response)=>{
      setContactsData(response.data);
    }
    ).catch((error)=>{
      console.log(error);
    });
  };

  const delelteContact = (id)=>{
    Axios.delete(`${URL}/delete/${id}`
    ).then(
      (response)=>{
      getContacts();
    }
    ).catch((error)=>{
      console.log(error);
    });
  };

  const updateContact = (contact) => {
    Axios.put(`${URL}/update`,contact
    ).then(
      (response)=>{
      getContacts();
    }
    ).catch((error)=>{
      console.log(error);
    });
  };

  return (
    <>
    <MaterialTable
      title="Contacts Manager"
      columns= {[
        // { title: 'Nom', field: 'nom' },
        { title: 'Nom', field: 'name' },
        // { title: 'Prenom', field: 'prenom' },
        // { title: 'Surnom', field: 'surnom' },
        { title: 'Email', field: 'email' },
        // { title: 'Email', field: 'surname' },
        { title: 'Numéro de téléphone', field: 'phoneNumber' },
        // { title: 'Société', field: 'email' },
      ]}
      data={contactsData}
      actions={[
        {
          icon: 'add',
          tooltip: 'Add contact',
          isFreeAction: true,
          onClick: (event, rowData) => {
           setOpen(true);
            
          }
          
        }
        
      ]}
      localization={{
        body: {
          emptyDataSourceMessage: 'Aucun garage à afficher'
        }
      }}
      editable={{
       
        
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                updateContact(newData);
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              delelteContact(oldData.id);
            }, 600);
          }),
      }}
    />
    <Affiche open={open} setOpen={setOpen} getContacts={getContacts}/>
    
    </>
  );
}
