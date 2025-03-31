require("dotenv").config(); //require dot env as it returns to process object reqquire is used as we use common js 

const express = require("express"); //require express and store the returned  to a variable

const cors = require("cors");//cross orgin resource sharing used for communication 

const router=require('./routes/routes')
require('./database/dbConnection')

//server creation
const pfServer = express();


pfServer.use(cors());//informing server to accept datas from all servers

pfServer.use(express.json()); //json is a middlewear here

pfServer.use(router)

const PORT = 3000 || process.env.PORT;



pfServer.listen(PORT, () => {
  console.log(
    `server runnning succesfully in ${PORT} waiting for client request`
  );
});
