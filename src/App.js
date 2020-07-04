import React from 'react';
import MaterialTable from 'material-table';

import Affiche from './layout/header';


export default function MaterialTableDemo() {
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState({
    columns: [
      { title: 'Nom', field: 'nom' },
      { title: 'Prenom', field: 'prenom' },
      { title: 'Surnom', field: 'surnom' },
      { title: 'Prenom', field: 'surname' },
      { title: 'Email', field: 'email' },


      
      {
        title: 'Birth Place',
        field: 'birthCity',
        lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
      },
    ],
    data: [
      
      
    ],
  });

  return (
    <>
    <MaterialTable
      title="Contacts Manager"
      columns={state.columns}
      data={state.data}
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
      editable={{
       
        
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
    <Affiche open={open}   setOpen={setOpen}/>
    
    </>
  );
}
