
const { Schema, model } = require("mongoose")


const bookSchema = new Schema ({
    title: String,
    author: String,
    category: [{type: mongoose.Schema.ObjectId, ref: "Genre"}],
    status: {
        type: String,
        enum: ['Available', 'Checked Out', 'Pending'],
        default: ' '
    }
})

const Book = model('Book', bookSchema);
module.exports = Book