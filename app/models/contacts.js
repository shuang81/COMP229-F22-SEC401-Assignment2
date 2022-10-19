import mongoose from "mongoose";

const Schema = mongoose.Schema;

//JSON Parameters
const ContactSchema = new Schema({
    name: String,
    phone: String,
    email: String
}, {
    timestamps: true,
    collection: 'contacts'
});

export default mongoose.model('Contacts', ContactSchema);