const express = require('express');
const memberRouter = require('./routers/memberRouter');
let cors= require('cors')

let app= express();
app.use(cors())
require('./configs/database');

app.use(express.json())



app.use('/api/member', memberRouter)

app.listen(8000);