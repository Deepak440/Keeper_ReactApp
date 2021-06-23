import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios';

function Notes(props)
{
    return (<div className = "note">
        <h1> {props.title} </h1>
         <p> {props.content}  </p>
         <button onClick = {() => 
         {
              axios.delete('http://localhost:5000/delete',
              {
                 data : {
                     title : props.title
                    }
              })
               .then(() => console.log("Deleted"))
               .catch(err => console.log(err));
        

         }}> < DeleteIcon /></button>
    </div>);
}

export  default Notes;