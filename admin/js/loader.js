var div_box = "<div id='load-screen'><div id='loading'></div></div>";
$("body").prepend(div_box);

$('#load-screen').delay(300).fadeOut(600, function(){
	$(this).remove();
});

