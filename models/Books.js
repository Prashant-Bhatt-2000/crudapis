const mongoose = require('mongoose')

const Schema = mongoose.Schema

const BooksSchema = new Schema ( {
     title : { 
        type: String, 
        required : [true, 'Title of Book is required']
     }, 
     author: { 
        type: String, 
        required : [true, 'Author of Book is required']
     }, 
     description: { 
        type: String, 
        required : [true, 'Description of Book is required']
     }, 
     
}, {timestamps: true})

const Books = mongoose.model('Books', BooksSchema);

module.exports = Books;

