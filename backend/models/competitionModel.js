const { model, Schema } = require('../connection');

const mySchema = new Schema({
    title: { type: String, require: true },
    description: { type: String },
    endDate: { type: Date },
    banner: { type: String },
    prize: { type: String },
    winner:  { type: Schema.Types.ObjectId, ref: 'user' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = model('competition', mySchema);