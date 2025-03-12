import {Schema, model} from "mongoose";


const authSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true
  },
  number: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

const User = model("User", authSchema);
export default User;
