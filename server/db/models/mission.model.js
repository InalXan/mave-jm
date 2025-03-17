import {model, Schema} from "mongoose";


const missionSchema = new Schema({
  mission: {
    type: String,
    required: true,
  }
})

const Mission = model("Mission", missionSchema);

export default Mission;
