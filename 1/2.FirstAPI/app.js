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

app.get("/date", (req, res)=>{


    let date = new Date();
    let day = String(date.getDay());
    let dateInfo = String(date.getDate());
    let month = String(date.getMonth() + 1);
    let year = String(date.getFullYear());
    let weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    let n = weekday[date.getDay()];
    let today = "Day:"+ n + " " + dateInfo+ "/" + month+ "/" + year;

    res.send(today)
})




app.listen(3000, error=>{
    if(error){
        console.error(error);
    }
    console.error("Server is alive and running on port:", 3000);
    
});

