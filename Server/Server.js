const express = require('express');
const cors = require('cors');
const {Client} = require('pg');

const config = require('./config')[process.env.NODE_ENV||"dev"];
const port = config.port;
const client = new Client ({connectionString: config.connectionString});
client.connect();

const app = express();
app.use(cors());
app.use(express.json());

//Routes
app.get('/', (req,res)=>{
    res.status(200).send('Hello World');
});

app.get('/api/#####', (req, res) => {
    
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


app.listen(port,()=>{
    console.log(`
    Server Status: Live
    Server Port: ${port}
    Waiting For Requests`
    )
});
