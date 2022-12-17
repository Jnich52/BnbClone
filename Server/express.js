const express = require("express");
const { Client } = require("pg");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
const PORT = 8000;
// const config = require("./config")[process.env.NODE_ENV || "dev"];
// const PORT = config.port;

const connectionString = "postgresql://postgres:docker@127.0.0.1:5432/todolist";
const client = new Client({
  // connectionString: config.connectionString,
  connectionString: connectionString,
});

client.connect();

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

app.use(express.static("insertname"));

app.get("/insertname", (req, res) => {
  client
    .query("SELECT * FROM insertname")
    .then((result) => {
      // console.log(result.rows[0])
      res.send(result.rows);
    })
    .catch((e) => console.error(e.stack));
});

app.get("/insertname", (req, res) => {
  client
    .query("SELECT * FROM insertname", [req.params.id])
    .then((result) => {
      console.log(result.rows[0]);
      res.send(result.rows);
    })
    .catch((e) => console.error(e.stack));
});

app.post("/insertname", (req, res) => {
  let goal = req.body;
  let myGoal = goal.gdescription;
  console.log(goal);
  client
    .query("INSERT INTO insertname VALUES ($1)", [insertname])

    .then((result) => {
      res.status(200).send(result.rows);
    });
});

app.delete("/insertname", (req, res) => {
  var id = req.params.goal_id;
  client
    .query(`DELETE FROM users WHERE insertname=${id}`)
    .then((result) => {
      res.send("insertname " + id + " has been deleted");
    })
    .catch((err) => console.error(err.stack));
});

app.listen(PORT, () => {
  console.log(`Our app running on ${PORT}`);
});
