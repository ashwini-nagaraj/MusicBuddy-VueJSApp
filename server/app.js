//imports
require('dotenv').config();
const express = require('express');
const mongoose =  require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 7000;

//middleware

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("artists"));


//database connection
mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true,
    family: 4,
}).then(()=> console.log('connected to the DB')).catch((err)=> console.log(err))

//routes prefix
app.use("/api/artist", require('./routes/routes'))

if(process.env.NODE_ENV==='production'){
    app.use(express.static(__dirname+'/dist/'));
    app.get('*',(req, res)=>{
        res.sendFile(__dirname+'/dist/index.html')
    })
}

//start server
app.listen(port, ()=> console.log('server has started'))
