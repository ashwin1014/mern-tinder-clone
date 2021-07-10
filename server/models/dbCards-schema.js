import mongoose from 'mongoose';

const { Schema } = mongoose;


const cardSchema = new Schema({
    name: String,
    imgUrl: String,
    id: mongoose.Types.ObjectId
});

export default mongoose.model('cards', cardSchema);

