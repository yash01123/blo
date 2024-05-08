const { model, Schema } = require("../connection")
const myschema = new Schema({
    title: { type: String, require: true },
    category: { type: String, require: true },
    content: { type: String, require: true },
    image: { type: String },
    createdAt: {type : Date, default: Date.now}
})
module.exports = model('blog', myschema)