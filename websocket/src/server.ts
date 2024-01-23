import express, { Express, Request, Response } from "express";
import { config } from "dotenv";
import { WebSocketServer } from "ws";

config();

const app: Express = express();
const PORT: string | number = process.env.PORT || 9000;

const wss = new WebSocketServer({ port: +PORT });

wss.on("connection", (ws) => {
  console.log("new connection");
  ws.send("hello from the server");
  ws.on("message", (mess) => {
    console.log(mess.toString("utf-8"));
  });
});

// app.get("/", (req: Request, res: Response) => {
//   res.send("this is a home route");
// });
// app.get("/user", (req: Request, res: Response) => {
//   res.send("this is a user route");
// });

// app.listen(PORT, () => {
//   console.log(`server is running on http://localhost:${PORT}`);
// });
