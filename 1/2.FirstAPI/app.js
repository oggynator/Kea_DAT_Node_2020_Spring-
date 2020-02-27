const app = require("express")();



app.get("/", (req,res)=>{
res.send("yo");
});

app.get("/aboutMe", (req,res)=>{
    let aboutMe = {
        person1 : {
        Name : "August",
        Age : 23,
        City : "Søborg"
            },
        person2 : {
                Name : "Tsugua ",
                Age : 99,
                City : "Rødovre"
            }
        }
res.send(aboutMe);
});

app.get("/aboutThisWebsite", (req,res)=>{
    let aboutThisWebsite= {
        created : 2020,
        hostedBy : "Locally",
        Webmaster: "August"
    };
    res.send(aboutThisWebsite);
})

const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday" ]

app.get("/date", (req, res)=>{


    let date = new Date();
    let day = String(date.getDay());
    let dateInfo = String(date.getDate());
    let month = String(date.getMonth() + 1);
    let year = String(date.getFullYear());
    let n = weekdays[date.getDay()];
    let today =  dateInfo+ "/" + month+ "/" + year;

    return res.send({
        weekday: n,
        date: today
    });
});

app.get("/user/:id",(req, res)=>{
    console.log(req.params);
    return res.send({
        ID: req.params.id
    });
});

app.get("/search/", (req,res)=>{

    return res.send(req.query);
});

const request = require('request'); //Import Request

app.get("/google/",(req,res)=>{

    request('http://www.google.com', (error, response, body)=> {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
   // console.log('body:', body); // Print the HTML for the Google homepage.
    return res.send(body);
    });
    
});

app.get("/documentation", (req,res)=>{
    
    return res.sendfile(__dirname + "/public/documentation.html");
});
app.get("/documentation2", (req,res)=>{
    
    
    return res.sendfile(__dirname + "/public/documentation2.html");
});


app.listen(3000, error=>{
    if(error){
        console.error(error);
    }
    console.error("Server is alive and running on port:", 3000);
    
});

