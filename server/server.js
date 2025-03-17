import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";

// Database connection
import connect_db from "./db/connection.js";

// Routes
import router from "./router/visit.router.js";
import authRouter from "./router/auth.router.js";
import aboutRouter from "./router/about.router.js";
import missionRouter from "./router/mission.router.js";
import corporativeRouter from "./router/corporative.router.js"
import orderRouter from "./router/order.router.js";
const app = express();
const PORT = 5000;

app.use(morgan("dev"));

// Parsers
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

// Routes
app.use("/api/auth", authRouter);
app.use(router);
app.use("/api/about", aboutRouter);
app.use("/api/mission", missionRouter);
app.use("/api/messages", corporativeRouter);
app.use("/api/orders", orderRouter);
app.listen(PORT, () => {
  console.log(`Running at http://localhost:${PORT}`);
  connect_db();
});
