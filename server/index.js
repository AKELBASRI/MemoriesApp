const express = require('express');
//import bodyParser from 'body-parser';
const mongoose = require('mongoose');
const cors = require('cors');

const app =express();
app.use(express.json({ limit: '50mb',extended:true }));
app.use(express.urlencoded({ limit: '50mb',extended:true }));
app.use(cors());
require("dotenv").config();
const port = process.env.PORT || 3000;
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => console.log(`app is running on port ${port}`));
    console.log("db connected");
  })
  .catch((err) => {console.log(err.message);});


//mongoose.set('useFindAndModify',false);