// COMPLETED

const mongoose = require('mongoose')

mongoose
.connect('mongodb://127.0.0.1:27017/moviesDatabase')
.then(() => {
    console.log('Successfully Connected to MongoDB.')
})
.catch((e) => {
    console.error('Connection Error', e.message)
})

const db = mongoose.connection

module.exports = db