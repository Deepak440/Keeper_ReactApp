import React ,{useState} from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';



function CreateArea(props)
{
    const [noteTitle , setNoteTitle] = useState("");
    const [noteContent , setNoteContent] = useState("");

    function HandleInput(event)
    {
       setNoteTitle(event.target.value);
       console.log(noteTitle);
    }  

    function HandleText(event)
    {
        setNoteContent(event.target.value);
    }
    function HandleClick(event)
    {
        props.onAdd({noteTitle , noteContent});
        event.preventDefault();
        setNoteTitle("");
        setNoteContent("");

    }


    return(

        <div className = "CreateArea"> 
            <form action="">
                <input onChange = {HandleInput} value = {noteTitle} type="text" name="title" placeholder = "Title" />
                <textarea onChange = {HandleText} value = {noteContent} name="content" placeholder = "Take a note..."  rows="3"></textarea>
                <button onClick = {HandleClick}> <AddCircleIcon /> </button>
            </form>

        </div>
    );
}

export default  CreateArea;

