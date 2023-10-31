import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cliente from "./controllers/cliente.js";
const app = express();
const port = 3000;
dotenv.config();
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(cliente);
app.use(bodyParser.json());
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
