const { Schema, model } = require("mongoose")

const genreSchema = new Schema ({
    name: {
        type: String,
        enum: ["Fantasy", "Science Fiction", "Mystery", "Thriller", "Romance", "Horror", "Historical Fiction", "Biography", "Self-help", "Young Adult", "Non-fiction", "Poetry", "Humor", "Adventure", "Dystopian", "Crime", "Children's", "Graphic Novel", "Memoir", "Cookbook"],
        default: ' '
    }
    
})

const Genre = model("Genre", genreSchema)
module.exports = Genre;