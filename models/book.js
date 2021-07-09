const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    // As described in spec
    id: {type: String, require: true},
    title: { type: String, require: true},
    authors: [{ type: String, require: true}],
    description: { type: String, require: true},
    image: { type: String, unique: true, dropDups: true},
    link: { type: String, required: true}
})

const GoogleBook = mongoose.model("GoogleBook", bookSchema);

module.exports = GoogleBook;