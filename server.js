const express = require("express");
const mongoose = require("mongoose");
// const format = require('date-fns/format');
const app = express();
const PORT = process.env.PORT || 3001;

// middleware
 app.use(express.json());
 app.use(express.urlencoded({extended:true}));
 app.use(express.static("public"));


 mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/social_network', {
    useNewUrlParser: true,
    useUnifiedTopology: true    
 });


 // Use this to log mongo queries being executed!
mongoose.set('debug', true);

 
app.use(require('./routes'));

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));