const express = require("express");
const cors = require("cors");
const { Client } = require("pg");

const config = require("./config.js")[process.env.NODE_ENV || "dev"];
const PORT = config.port;
const client = new Client({ connectionString: config.connectionString });
client.connect();

const app = express();
app.use(cors());
app.use(express.json());

//Routes
app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.get("/api/", (req, res) => {
  async function fromAll() {
    try {
      client.query().then((result) => {
        res.status(200).send(result.rows);
      });
    } catch (error) {
      console.error(error);
      res.status(404).send("Page Not Found");
    }
  }
  fromAll();
});

//GETS REVIEWS AND USER WHO SUBMITTED
app.get("/api/reviews", (req, res) => {
  async function getReviews() {
    try {
      client.query(`SELECT 
      reviews."id",
      users."name",
      users."joined",
      reviews."comment",
      reviews."Location",
      reviews."Communication",
      reviews."Cleanliness",
      reviews."Check-in",
      reviews."Accuracy"
      FROM reviews 
      INNER JOIN 
      users on users.id = reviews.user_id;`)
      .then(result =>{
        res.status(200).send(result.rows)
      })

    } catch (error) {
      res.status(404).send("Page Not Found");
    }
  }
  getReviews();
});

app.get("/api/users", (req, res) => {
  async function getUsers() {
    try {
      client.query(`SELECT * FROM users`).then((result) => {
        res.status(200).send(result.rows);
      });
    } catch (error) {
      console.error(error);
      res.status(404).send("Page Not Found");
    }
  }
  getUsers();
});

//GET ALL RESERVATION DATA
app.get("/api/reservations/", (req, res) => {
  async function getReservations() {
    try {
      client.query(`SELECT * FROM reservations`).then((result) => {
        res.status(200).send(result.rows);
      });
    } catch (error) {
      console.error(error);
      res.status(404).send("Page Not Found");
    }
  }
  getReservations();
});

//POST A NEW RESERVATION INTO THE DATABASE
app.post("/api/reservations/", (req, res, next) => {
  let reservation = req.body;
  console.log(reservation);
  if (
    reservation.adults &&
    reservation.checkin &&
    reservation.checkout &&
    reservation.children &&
    reservation.infants &&
    reservation.nightlyrate &&
    reservation.numberofnights &&
    reservation.pets
  ) {
    async function postReservation(reservation) {
      try {
        const result = await client.query(
          `
              INSERT INTO reservations (adults, checkIn, checkOut, children, infants, nightlyRate, numberOfNights, pets) 
              VALUES ($1, $2, $3, $4, $5, $6, $7, $8) 
              RETURNING *
              `,
          [
            reservation.adults,
            reservation.checkin,
            reservation.checkout,
            reservation.children,
            reservation.infants,
            reservation.nightlyrate,
            reservation.numberofnights,
            reservation.pets,
          ]
        );
        res.status(201).send(result.rows);
      } catch (err) {
        next(err);
      }
    }
    postReservation(reservation);
  } else {
    res.status(500).send("Did not enter a value for all fields!");
  }
});

app.listen(PORT, () => {
  console.log(`
    Server Status: Live
    Server Port: ${PORT}
    Waiting For Requests`);
});
