import {connect} from "mongoose";
const DB_LINK = "mongodb+srv://admin:3y3vaye1@mave.cr3de.mongodb.net/?retryWrites=true&w=majority&appName=mave";


const connect_db = async () => {
  try {
    connect(DB_LINK);
    console.log("Database Server Established");
  } catch(err) {
    console.error(err);
  }
}

export default connect_db;
