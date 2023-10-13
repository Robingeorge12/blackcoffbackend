const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const { connection } = require("./db");
const { listRouter } = require("./route/List.route");

app.use(cors());
app.use(express.json());

const PORTvalue = process.env.PORT || 6300;
 
    

app.use("/listdata", listRouter);  



app.use("/", (req, res) => {
    res.send("welcome home page");
  }); 


app.listen(PORTvalue, async () => {
  try {
    await connection;
    console.log(PORTvalue, "connected");
  } catch (err) {
    console.log(err);
  }
});

// function x(u,v){
//     if(Math.random()>.5){ 
//         let [a,b,c] = fun1(v)
//         u=u+2
//     }else{
//         let [a,b,c] = fun2(v)
//         u=u-2
//     }
//     return Math.abs(a*u)+Math.abs(b*u)+Math.abs(c-u)

// }

// x(2,4)
