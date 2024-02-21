const mongoose = require('mongoose')

mongoose
    .connect("mongodb+srv://nogradinicholas1:Nicky020998@cluster1.7mpgfkc.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
        console.log('Connected to db')
    }).catch(err => {
        console.log('Error connecting to Db', err)
    })