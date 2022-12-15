const express = require('express');
const cors = require('cors');
const {Client} = require('pg');

const NODE_ENV = 'proudction';

const config = require('./config.js')[process.env.NODE_ENV||"dev"];
const PORT = config.port;
const client = new Client ({connectionString: config.connectionString});
client.connect();

const app = express();
app.use(cors());
app.use(express.json());

//Routes
app.get('/', (req,res)=>{
    res.status(200).send('Hello World');
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


app.listen(PORT,()=>{
    console.log(`
    Server Status: Live
    Server Port: ${PORT}
    Waiting For Requests`
    )
});
