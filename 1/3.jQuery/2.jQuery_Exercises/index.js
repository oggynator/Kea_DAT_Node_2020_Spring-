
//Align text to center
$( document ).ready(function() {
    $("body").css("text-align","center");


//Chances text
$("#title h2").text("New Title")


//Change background color of subtitle box
$(".subtitle-box").css("background-color","blue");

//Hide DOM element
$( ".temp" ).hide();

//Adds a border style to the ID
$("#first-list").css("border-style","dotted");

//First list is parent, we make all child "li" bold
$( "#first-list > li" ).css( "font-weight","bold" );

//last li
$( "#first-list > li:last" ).css( "text-decoration", "underline" );

//second li
$( "#first-list > li:eq(1)" ).css( "text-decoration", "line-through" );

//Change all elements in list to italics
$( ".second-list > li" ).css( "font-style","italic" );

//Half size of the span size
$( "span" ).css( "font-size","0.5em" );

//remove DOM
$( ".unused-box > label" ).remove();

//add DOM
$( ".unused-box" ).append( "<p>Second Sentence</p>" );

//add before
$( ".unused-box > p" ).before( "<p>First sentence</p>" );

//Change class name
$( ".unused-box" ).removeClass("unused-box").addClass("used-box");

//Toggle class name by click
$('.used-box').click(function() {
    $(".used-box").toggleClass("used-boxed-clicked");
});



});


