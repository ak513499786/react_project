import express from "express";
import cors from "cors";
import mysql from "mysql";
import bodyParser from "body-parser";
import webroute from "./routes/routes.js";
import nodemailer from "nodemailer";

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use(bodyParser.json());

app.use("/code", webroute);

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "dashboard",
});
db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Database Connected");
  }
});

app.listen(5000, () => {
  console.log("port started at port 5000");
});

export default db;
