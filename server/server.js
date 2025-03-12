import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import cors from 'cors';
// database connection
import connect_db from "./db/connection.js";
// routes
import router from "./router/visit.router.js";

const a = express();
const PORT = 5000;
a.use(morgan('dev'));
// parsers
a.use(cookieParser());
a.use(bodyParser.urlencoded({ extended: true }));
a.use(bodyParser.json({ type: 'application/*+json' }))
a.use(cors({ origin: "http://localhost:5173", credentials: true }));
a.use(router);

a.listen(PORT, () => {
  // server
  console.log("running" + " " + `http://localhost:${PORT}` + " " + "port");
  // database connection
  connect_db();
})
