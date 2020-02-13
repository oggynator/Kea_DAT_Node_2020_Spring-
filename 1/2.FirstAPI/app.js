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

app.listen(3000, error=>{
    if(error){
        console.error(error);
    }
    console.error("Server is running on port:", 3000);
    
});

