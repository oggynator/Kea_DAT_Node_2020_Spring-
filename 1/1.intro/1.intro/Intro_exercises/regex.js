//The test shows if the pattern appears in the string
//i flag = case insensitive
const myRegEx = /Hello/i;
const result = myRegEx.test("hello world");

//console.log(result);

//pipe = or
const petString = "Anders has an alpaca"
const petRegEx = /alpaca|cow|sheep/;
//console.log(petRegEx.test(petString));

//match
const extractString = "Extract this word from the string";
const wordRegEx = /word/;
//console.log(extractString.match(wordRegEx));

//The G flag, finds all matches
//console.log("Repeat, Repeat, Repeat".match(/Repeat/g));
let twinkleStarSong = "Twinkle, twinkle, little star";
const twinkleRegEx = /Twinkle/gi;
//console.log(twinkleStarSong.match(twinkleRegEx));

//Wildcards matches everything after "."
const humStr = "That's humbug!";
const hugStr = "I need a hug.";
const huRegEx = /hu./;
//console.log(humStr.match(huRegEx));
//console.log(hugStr.match(huRegEx));

//Wildcard 2, one of the following letters
//console.log("I found a big bugs in my bag".match(/b[aiu]g/ig));
//console.log("I found a big bugs in my bag".match(/[ouia]/ig));

//Range, takes everything in a range between two letters or numbers
//console.log("123abc456".match(/[0-9]/g));
//console.log(twinkleStarSong.match(/[a-z]/gi));
