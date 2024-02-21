
const { Schema, model } = require("mongoose")


const bookSchema = new Schema ({
    title: String,
    author: String,
    category: {
        type: String,
        enum: ["Fantasy", "Science Fiction", "Mystery", "Thriller", "Romance", "Horror", "Historical Fiction", "Biography", "Self-help", "Young Adult", "Non-fiction", "Poetry", "Humor", "Adventure", "Dystopian", "Crime", "Children's", "Graphic Novel", "Memoir", "Cookbook"],
        default: ' '
    },
    status: {
        type: String,
        enum: ['Available', 'Checked Out', 'Pending'],
        default: ' '
    }
})

const Book = model('Book', bookSchema);
module.exports = Book