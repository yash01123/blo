const { model, Schema } = require('../connection');

const mySchema = new Schema({
    title: { type: String, require: true },
    description: { type: String, require: true },
    endDate: { type: Date },
    banner: { type: String },
    textarea: { type: String, require: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = model('admin', mySchema);