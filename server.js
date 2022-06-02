import express, { text } from "express";

// state management
let state = "on";
const toggleState = () => {
  state = state === "on" ? "off" : "on";
};

// server config
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(text());

app.get("/api/button", (req, res) => {
  res.send(state);
});

app.post("/api/button", (req, res) => {
  toggleState();
  console.log("new State: " + state);
  res.send(state);
});

// server start
app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
