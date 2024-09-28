const http = require("http");
const fs = require("fs");
const url = require("url")

const myServer = http.createServer((req, res) => {
    if(req.url === "/favicon.ico") return res.end()
  const log = `${Date.now()} ${req.url}:New Request Recieved\n`;
const myUrl = url.parse(req.url , true)
console.log(myUrl)
  fs.appendFile("log.txt",log,(err,data)=>{
    switch(myUrl.pathname){
        case "/": res.end("Hello from server");
        break
        case "/about":
            const username = myUrl.query.name
             res.end(`Hello from ${username}`); 
        break
        default : res.end("404 Page Not Found"); 
    }

  })
})
  



myServer.listen(8000, () => {
  console.log("Server is started");
});
