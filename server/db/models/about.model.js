import {model, Schema} from "mongoose";


const aboutSchema = new Schema ({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  }
});


const About = model("About", aboutSchema);
export default About;
