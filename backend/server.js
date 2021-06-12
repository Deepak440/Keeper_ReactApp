//jshint esversion:6

const express  = require('express');
const cors = require('cors');
const mongoose = require('mongoose');




require('dotenv').config();
const app = express();
app.use(cors());

app.use(express.json());

const pass = process.env.PASSWORD;

mongoose.connect("mongodb+srv://deepak123:"+pass+"@cluster0.j9rk2.mongodb.net/notesDB" , {useNewUrlParser: true, useUnifiedTopology: true});

//Schema 
const notesSchema = new mongoose.Schema(
    {
      title : String,
      Content : String  
    });

// Notes Model
const Note = mongoose.model('Note' , notesSchema);


app.get('/' , (req ,res) => {

    Note.find()
     .then( notes => res.json(notes))
     .catch( err => res.status(400).json('Error: '+ err ));

})


//Notes Added
app.post('/add' , (req ,res) =>{
     
    console.log(req);
    const noteTitle = req.body.title;
    const noteContent = req.body.Content;
    
    const note = new Note({
        title : noteTitle,
        Content : noteContent
    });

    note.save()
     .then(() => res.json('Note added'))
     .catch(err => res.status(400).json('Error: ' + err));     


});

app.delete('/delete' ,(req ,res) => {
    Note.deleteOne({title:req.body.title})
      .then(() => res.json("Notes deleted"))
      .catch(err => res.status(400).json("Eror: " + err)); 
    
})


app.listen(5000 , () => {
    console.log('Server is running on port : 5000 ');
})