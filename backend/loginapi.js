import express from 'express'
import bodyParser from 'body-parser'
var app = express(); //include the module .this give us the capability the read the body.

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
let users = ["vineeta:test123","meenu:test123","pankaj:test123","rakesh:test123"];
app.post("/login", function (request, response) {
  let user1 = request.body.username;
  let passwd = request.body.password;
  if(!user1) {
      response.status(400).json("enter username");
// stop further execution in this callback
      return;
  }
  if(!passwd) {
      response.status(400).json("enter password");
// stop further execution in this callback
      return;
  }
  const val = users.includes(user1+':'+ passwd);
  if(val){
      response.status(200).json("user authenticated");
      return;
  } else {
      response.status(400).json("user does not exist");
      return;
  }

});
app.listen(4000);
