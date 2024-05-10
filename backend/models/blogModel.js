const { model, Schema } = require("../connection")
const myschema = new Schema({
    title: { type: String, require: true },
    category: { type: String, require: true },
   
    image: { type: String },
    content: { type: String},
    description: { type: String, require: true },
    
    createdAt: {type : Date, default: Date.now}
})
module.exports = model('blog', myschema)