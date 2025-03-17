import {model, Schema} from "mongoose"

const messageSchema = new Schema({
    name: { type: String, required: true },
    number: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const Message = model("Message", messageSchema);
export default Message;
