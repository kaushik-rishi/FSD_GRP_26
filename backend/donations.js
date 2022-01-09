import express from 'express'
import bodyParser from 'body-parser'
import fs from 'fs'
import cors from 'cors'
import { format } from 'date-fns'

var app = express(); //include the module .this give us the capability the read the body.

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(cors())
// let users = ["vineeta:test123","meenu:test123","pankaj:test123","rakesh:test123"];
app.get("/dnations", function (request, response) {
  var obj = JSON.parse(fs.readFileSync('./data/donations.json'));
  console.log(obj)
  response.status(200).json(obj);
  const pd = new Date(Date.now())
  console.log(format(pd, 'dd.MM.yyyy HH:mm:ss'))
  console.log(format(new Date(Date.now()), 'dd/MM/yyyy HH:mm:ss'))
  return 
})
app.post("/dnations", function (request, response) {
  let uname = request.body.name;
  let email = request.body.email;
  let cat = request.body.dcat;
  let title = request.body.dtitle;
  let udesc = request.body.ddesc;
//   console.log(donations)
  if(!uname) {
      response.status(400).json("Empty name request");
// stop further execution in this callback
      return;
  }
  if(!email) {
      response.status(400).json("Undefined email request");
// stop further execution in this callback
      return;
  }
  if(!cat) {
    response.status(400).json("No category found");
// stop further execution in this callback
    return;
  }
  if(!title) {
    response.status(400).json("Donation title missing");
// stop further execution in this callback
    return;
  }
  if(!udesc) {
    response.status(400).json("Description not found");
// stop further execution in this callback
    return;
  }
  var obj = JSON.parse(fs.readFileSync('./data/donations.json'));
  const keyC = Object.keys(obj).length + 1
  var pdate = new Date(Date.now())
  obj.push({"key":keyC,"date":pdate,"name":uname,"email":email,"cat":cat,"title":title,"desc":udesc});
  console.log(obj)
  const jsonStr = JSON.stringify(obj);
  fs.writeFile('./data/donations.json', jsonStr, (err) => {
    if (err) console.log('Error writing file:', err);
  })

  response.status(200).json("user authenticated");
  return
});
app.listen(4000);
