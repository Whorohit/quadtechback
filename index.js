const express = require('express')
const cors = require('cors')
const mongoose  =require('mongoose')

const port = process.env.PORT|| 80;
const app = express();
app.use(express.urlencoded());
app.use(express.json());
app.use(cors());
mongoose.connect('mongodb+srv://ram211296:root@cluster0.boyeksu.mongodb.net/sample_airbnb?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));
 
    
const keeperSchema = mongoose.Schema({
    base_unit: String,
    quote_unit: String,
    low: String,
    high: String,
    last:String,
    type: String,
    open: String,
    volume: String,
    sell: String,
    buy:String,
    at:Number,
    Name: String
})
const taskdata  = mongoose.model('taskinfo', keeperSchema)
app.get("/find", async (req, res) => {
  
    taskdata.find({}).limit(10)
        .then(data => {
            console.log("Database Courses:")
            // res.send(data);
            console.log(data)
            res.json(data)
        })
    })
app.listen(port, (req, res) => {
        console.log(`the  server is running at ${port}`);
    })
