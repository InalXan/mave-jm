import {Schema, model} from "mongoose";

const visitSchema = new Schema({
  visitorId: String,
  timestamp: { type: Date, default: Date.now },
});

const Visit = model("Visit", visitSchema);

export default Visit;
