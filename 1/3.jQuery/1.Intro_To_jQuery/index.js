$("#tpButton").click(()=>{
    let toTeleport = $(".inputLeft").val();
    $(".inputRight").val(toTeleport);
    $(".inputLeft").val("");
});



$(document).ready(function(){
	$('.showbtn').click(function(){
   		$('.myimgdivshowhide').show();
	});
  	$('.hidebtn').click(function(){
   		$('.myimgdivshowhide').hide();
	});
});