// const http = require("http");

const express = require("express");
const app = express();
app.get("/", (req, res) => {
  return res.end("Hello from HomePage");
});
app.get("/about", (req, res) => {
  return res.end("Hello from About Page" + "Hey" + req.query.name);
});

// const myServer = http.createServer(app);

// myServer.listen(8000, () => {
//   console.log("Server is started");
// });
app.listen(8000,()=>{
    console.log("Server Started")
})
