const express = require('express');
const cors = require('cors');
const {Client} = require('pg');

const config = require('./config.js')[process.env.NODE_ENV||"dev"];
const PORT = config.port;
const client = new Client ({connectionString: config.connectionString});
client.connect();

const app = express();
app.use(cors());
app.use(express.json());

//Routes
app.get('/', (req,res)=>{
    res.status(200).send('Hello World!');
});

app.get('/api/', (req, res) => {
    
    async function fromAll() {
        try {
          client.query()
          .then(result =>{
            res.status(200).send(result.rows)
          })
        } catch (error) {
          console.error(error);
          res.status(404).send("Page Not Found")
        }
      }
    fromAll();
})

//GETS REVIEWS AND USER WHO SUBMITTED
app.get('/api/reviews', (req,res) =>{
  async function getReviews(){
    try {
      client.query(`SELECT reviews.id,
       users.name,
       reviews.comment,
       reviews.cleanliness,
       reviews.checkin,
       reviews.location,
       reviews.communication,
       reviews.accuracy
       FROM reviews 
       INNER JOIN 
       users on users.id = reviews.user_id;`)
      .then(result =>{
        res.status(200).send(result.rows)
      })

    } catch (error) {
      res.status(404).send("Page Not Found")
    }
  }
  getReviews();
})

app.get('/api/users', (req, res) => {
    
  async function getUsers() {
      try {
        client.query(`SELECT * FROM users`)
        .then(result =>{
          res.status(200).send(result.rows)
        })
      } catch (error) {
        console.error(error);
        res.status(404).send("Page Not Found")
      }
    }
  getUsers();
})

app.listen(PORT,()=>{
    console.log(`
    Server Status: Live
    Server Port: ${PORT}
    Waiting For Requests`
    )
});
