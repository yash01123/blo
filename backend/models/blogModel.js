const { model, Schema } = require("../connection")
const myschema = new Schema({
    title: { type: String, require: true },
    category: { type: String, require: true },
    user: { type: Schema.Types.ObjectId, ref: 'user' },
    image: { type: String },
    content: { type: String},
    description: { type: String, require: true },
    comment: { type: String },
    createdAt: {type : Date, default: Date.now}
})
module.exports = model('blog', myschema)