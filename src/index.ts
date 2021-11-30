import express from "express";
import cors from "cors";
import morgan from "morgan";

const PORT = process.env.PORT || 4000;
const app = express();

app.use(cors());
app.use(morgan("short"));

app.get("/ping", (_, res) => {
  res.json({ ping: "pong" });
});

app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`);
});
