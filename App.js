const mongoose = require('mongoose')
require('dotenv').config()
const url = 'mongodb+srv://saanviv0089:06gbZn0ijilows3M@python.al97p.mongodb.net/'
const port = 3000
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB connection error:", err));
mongoose.connect(url)

const schema = mongoose.Schema({
    date: String,
    title: String,
    description: String,
    imageurl: String,
})

const python_model = mongoose.model('python_collection', schema)

const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

app.post('/pythonapp', async(req, res)=>{
    let data = new python_model(req.body)
    console.log(req.body)
    let result = await data.save()
    console.log(result)
    res.send(result)
})

app.get('/get', async(req, res)=>{
    let data = await python_model.find()
    res.send(data)
})

app.put('/hupdate/:_id', async (req, res) => {
    console.log(req.body)
    let result = await python_model.updateOne(
        req.params,
         {$set:req.body}
);
    res.send(result);
});

app.delete('/delete/:_id', async (req, res) => {
    console.log(req.params)
    let result = await python_model.deleteOne(req.params);
    res.send(result)
});

app.listen(port, () => {
    console.log('App is running on server 3000');
});
