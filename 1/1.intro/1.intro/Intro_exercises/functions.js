

function addition (a,b,){
return a + b;
}
//console.log(addition(2,3));


function pokeMe(){
    console.log("u poked me");
}
//pokeMe();

function approachSomeone(someOneToPoke){
    console.log("steps steps steps");
    someOneToPoke();
}
//approachSomeone(pokeMe);

const introduce = (name)=>{
    console.log("Hallo my name is:", name);
}
//introduce("August");

const prepareIntroduction = (introducerFunction, name)=>{
    console.log("Hmmmmm");
    introducerFunction(name);
}
//prepareIntroduction(introduce, "August");

let me = {
    hobby : "Gaming"
    };

const aboutMe = (me) =>{
    console.log("My hobby is:", me.hobby);
}
//aboutMe(me);

const callLater = {
    toCall:  ()=> {
        console.log("London Calling");
    }
};

callLater.toCall();




var test; // Dont use, global scope
let test1; //block scope
const test2=1; //Constant variable, cant be changed
