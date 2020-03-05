const express = require ("express");
const app = express();

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

let devices= [
    {id: 1, type: "computer"},
    {id: 2, type: "Smart Watch"}
];
nextDeviceId=3;

app.get("/",(req, res) =>{
return res.send({response: "This website is all about devices"});
});

app.get("/devices",(req, res) =>{ //HTTP GET
 return res.send({response: devices});
});

app.get("/devices/:id", (req,res)=>{ //HTTP GET BY ID
    const device = devices.find(device => device.id===Number(req.params.id));
    return res.send({response: devices [req.params.id] });
});

app.post("/devices",(req,res)=>{ //HTTP POST

let newDevice = {}
newDevice.id=nextDeviceId++;
newDevice.type= req.body.type;
if(!newDevice.type){
    return res.status(400).send({message: "Missing a device type, try again noob"});
}
/* let maxId= devices.reduce((previous, current)=>{
    if (current.id > previous.id){
        return current.id;
    }
    else{
        return previous,id;
    }
}); // bad solution */
devices.push(newDevice);
return res.send({body: req.body});
});

app.delete("/devices/:id",(req,res)=>{ //HTTP delete
    devices = devices.filter(device=>device.id !== Number(req.params.id));

    return res.send({response: devices});
});


app.put("/devices/:id",(req,res)=>{ //HTTP PUT
    const foundIndex = devices.findIndex(device=>device.id === Number(req.params.id));
    delete req.body.id;
    const newDevice = { ...devices[foundIndex], ...req.body};
    devices[foundIndex] =newDevice

    return res.send({response: devices});
});



const server= app.listen(3000, error=>{
    if(error){
        console.error(error);
    }
    console.error("Server is alive and running on port:", server.address().port);
    
});
