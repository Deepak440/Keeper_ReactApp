import React ,{useState} from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import axios from 'axios';



function CreateArea(props)
{
    const [note, setNote] = useState({
        title : "",
        Content : ""
    });
    

    function HandleChange(event)
    {
        const {name , value} = event.target;
       setNote(prevNote => {
           return {
               ...prevNote,
               [name] : value
           };
       });
    
    } 
    function HandleClick(event)
    {
        props.onAdd(note);
        event.preventDefault();
        

        axios({
            method :'post',
            url : 'http://localhost:5000/add',
            data : {
              title : note.title,
              Content : note.content
            }
           
        }).then(() => console.log("Notes Created"))
          .catch(err => console.log(err));

       setNote({title : "",
       content : ""});
        

    }
    return(

        <div className = "CreateArea"> 
            <form action="">
                <input onChange = {HandleChange} value = {note.title} type="text" name="title" placeholder = "Title" />
                <textarea onChange = {HandleChange} value = {note.content} name="content" placeholder = "Take a note..."  rows="3"></textarea>
                <button onClick = {HandleClick}> <AddCircleIcon /> </button>
            </form>

        </div>
    );
}

export default  CreateArea;

