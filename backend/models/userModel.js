const { model, Schema } = require('../connection');

const mySchema = new Schema({
    name: { type: String, require: true },
    email: { type: String, unique: true },
    password: String,
    isAdmin: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
});

module.exports = model('user', mySchema);