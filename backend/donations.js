import express from "express";
import bodyParser from "body-parser";
import fs from "fs";
import cors from "cors";
import { format } from "date-fns";
import cookieParser from 'cookie-parser';
import csrf from 'csurf';
import multer from 'multer';
import path from 'path'
import morgan from "morgan";
import fsr from "file-stream-rotator";
import connectDonDB from './config/dondb.js';
import dpRoutes from "./routes/dpRoutes.js";
import YAML from "yamljs";
import swaggerUI from "swagger-ui-express";

const swaggerJSDocs = YAML.load("./backend/donationAPI.yaml");

connectDonDB()
// const __dirname = path.join('backend','static','public') ;
const __dirname = path.join('backend') ;
// __dirname = __dirname + '/backend'
console.log(__dirname)
var app = express(); //include the module .this give us the capability the read the body.

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);
app.use(cors());

morgan.token('clientIPA', function(req, res){
  return req.ip;
})

morgan.token('ts', function(req, res){ // req time stamp
  return new Date(Date.now());
})

// var accessLogStream = fsr.createStream('access.log', {
// 	interval: '1d', // rotate daily
// 	path: path.join(__dirname, 'log')
// })
const  pstream = path.join(__dirname,"logs","donation","donations.log")
let logsinfo = fsr.getStream({filename:pstream, frequency:"1h", verbose: true});
app.use(morgan(
// 'wbdaccess'
function (tokens, req, res) {
  return [
    tokens['clientIPA'](req, res),
    tokens['ts'](req, res),
    tokens.method(req, res),
    tokens.url(req, res),
  //   tokens.status(req, res),
  //   tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms'
  ].join(' ')
}
, {stream: logsinfo}))
// app.use(express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
  res.send("hi")
})

app.use("/dnations",dpRoutes)

// app.get("/dnations", function (request, response) {
//   // console.log(__dirname)
//   var obj = JSON.parse(fs.readFileSync('./backend/data/donations.json'));
//   // var obj = JSON.parse(fs.readFileSync("./backend/data/donations.json"));
//   // console.log(obj)
//   response.status(200).json(obj);
//   const pd = new Date(Date.now())
//   // console.log(format(pd, 'dd.MM.yyyy HH:mm:ss'))
//   // console.log(format(new Date(Date.now()), 'dd/MM/yyyy HH:mm:ss'))
//   return 
// })

// let csrfProtect = csrf({ cookie: true })
// parse cookies
// we need this because "cookie" is true in csrfProtection
// app.use(cookieParser())

// app.get('/getCSRFToken', csrfProtect, (req, res) => {
//   res.json({ csrfToken: req.csrfToken() });
// });


const upload = multer({ 
  storage: multer.diskStorage({
      destination: (req, file, cb) => {
          cb(null,path.join(__dirname,'static','public'))
      },
      filename: (req, file, cb) => {
          // console.log(file.originalname)
          // console.log(__dirname)
          const uniquePrefix = Date.now() + '-' + Math.round(Math.random() * 1E6)
          cb(null, uniquePrefix+'-'+file.originalname)
      }
  })
});

// app.post("/dnations",  upload.single("file"), 
// function (request, response) {
// 	let uname = request.body.name;
// 	let email = request.body.email;
// 	let cat = request.body.dcat;
// 	let title = request.body.dtitle;
// 	let udesc = request.body.ddesc;
// 	// console.log(request.body.file)
// 	// console.log(request.file)
// 	if (!uname) {
// 		response.status(400).json("Empty name request");
// 		// stop further execution in this callback
// 		return;
// 	}
// 	if (!email) {
// 		response.status(400).json("Undefined email request");
// 		// stop further execution in this callback
// 		return;
// 	}
// 	if (!cat) {
// 		response.status(400).json("No category found");
// 		// stop further execution in this callback
// 		return;
// 	}
// 	if (!title) {
// 		response.status(400).json("Donation title missing");
// 		// stop further execution in this callback
// 		return;
// 	}
// 	if (!udesc) {
// 		response.status(400).json("Description not found");
// 		// stop further execution in this callback
// 		return;
// 	}
// 	var obj = JSON.parse(fs.readFileSync("./backend/data/donations.json"));
// 	const keyC = Object.keys(obj).length + 1;
// 	var pdate = new Date(Date.now());
// 	obj.push({
// 		key: keyC,
// 		date: pdate,
// 		name: uname,
// 		email: email,
// 		cat: cat,
// 		title: title,
// 		desc: udesc,
// 	});
// 	const jsonStr = JSON.stringify(obj);
// 	fs.writeFile("./backend/data/donations.json", jsonStr, (err) => {
// 		if (err) console.log("Error writing file:", err);
// 	});

// 	response.status(200).json("donation uploaded");
// 	return;
// });

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJSDocs));

app.get("/recycle", function (request, response) {
  var obj = JSON.parse(fs.readFileSync('./backend/data/recycle.json'));
  response.status(200).json(obj);
  return 
})
app.post("/recycle", function (request, response) {
  let cRow = request.body.row;
  let cKey = request.body.ckey;
  let imgPath = request.body.cimg;
  let cttl = request.body.ctitle;
  let cdsc = request.body.cdesc;
//   console.log(donations)
  if(!cRow) {
      response.status(400).json("Target row required");
// stop further execution in this callback
      return;
  }
  if(!imgPath) {
      response.status(400).json("Image path unknown");
// stop further execution in this callback
      return;
  }
  if(!cttl) {
    response.status(400).json("No card title found");
// stop further execution in this callback
    return;
  }
  if(!cdsc) {
    response.status(400).json("No card description found");
// stop further execution in this callback
    return;
  }
  if(!cKey) {
    response.status(400).json("Card key not found");
// stop further execution in this callback
    return;
  }
  var obj = JSON.parse(fs.readFileSync('./backend/data/recycle.json'));
  if(obj[cRow-1].length>=3)
  {
    response.status(400).json("Card capacity for the given row full!");
// stop further execution in this callback
    return;
  }
  else
  {
    obj[cRow-1].push({"ckey":cKey,"cimg":imgPath,"ctitle":cttl,"cdesc":cdsc});
    const jsonStr = JSON.stringify(obj);
    fs.writeFile('./backend/data/recycle.json', jsonStr, (err) => {
      if (err) console.log('Error writing database file:', err);
    })
  }
  response.status(200).json("New card entry added");
  return

});

app.get("/reproduced", function (request, response) {
  var obj = JSON.parse(fs.readFileSync('./backend/data/reproduced.json'));
  response.status(200).json(obj);
  return 
})
app.post("/reproduced", function (request, response) {
  let cRow = request.body.row;
  let cKey = request.body.ckey;
  let imgPath = request.body.cimg;
  let cttl = request.body.ctitle;
  let cdsc = request.body.cdesc;
//   console.log(donations)
  if(!cRow) {
      response.status(400).json("Target row required");
// stop further execution in this callback
      return;
  }
  if(!imgPath) {
      response.status(400).json("Image path unknown");
// stop further execution in this callback
      return;
  }
  if(!cttl) {
    response.status(400).json("No card title found");
// stop further execution in this callback
    return;
  }
  if(!cdsc) {
    response.status(400).json("No card description found");
// stop further execution in this callback
    return;
  }
  if(!cKey) {
    response.status(400).json("Card key not found");
// stop further execution in this callback
    return;
  }
  var obj = JSON.parse(fs.readFileSync('./backend/data/reproduced.json'));
  if(obj[cRow-1].length>=3)
  {
    response.status(400).json("Card capacity for the given row full!");
// stop further execution in this callback
    return;
  }
  else
  {
    obj[cRow-1].push({"ckey":cKey,"cimg":imgPath,"ctitle":cttl,"cdesc":cdsc});
    const jsonStr = JSON.stringify(obj);
    fs.writeFile('./backend/data/reproduced.json', jsonStr, (err) => {
      if (err) console.log('Error writing database file:', err);
    })
  }
  response.status(200).json("New card entry added");
  return

});

app.listen(4000);
