const express = require("express");
const app = express();
const PORT = 3000;

const apiRoutes = require("./routes/api");
const path =require("path");
const { userInfo } = require("os");


app.use(express.static(path.join(__dirname,"public")));

app.use("/api",apiRoutes);


app.listen(PORT,()=>{

    console.log(`Server runnig on port:${PORT}`);
})


function generateID (){

return Math.random().toString(36).substr(2,9);


}