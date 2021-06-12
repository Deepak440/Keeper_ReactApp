import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Notes from './Notes';
import CreateArea from './CreateArea';
import axios from 'axios';


 function App()
 {
    const [notes , setNotes] = useState([]);

     axios.get('http://localhost:5000/')
      .then(res => {
        setNotes(res.data);

      })
      .catch(err => console.log(err));



     function Addnote(note)
     {
       
        setNotes(prev => {
          return [...prev, note ]
        });

     }

     function RemoveNote(id)
     {
         setNotes(prev => {
           return prev.filter( (noteItem , index) => {
                return index !== id;

            });
         });
     }
     return <div>
         <Header />
         <CreateArea 
          onAdd = {Addnote}
         />
        {notes.map((noteItem , index) => {
             return( <Notes 
             key = {index}
             id  = {index}
             title  = {noteItem.title}
             content = {noteItem.Content}
             deleteNote = {RemoveNote}
              />)
         })
        }
        

         <Footer />
     </div>
 }

 export default App;