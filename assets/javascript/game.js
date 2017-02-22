$(".marco").on("click", function(background){
	setTimeout(function() {
		$(".container-fluid").css('background', 'url(' + "assets/images/background.gif" + ') no-repeat center center');
		$(".container-fluid").css('width', '100%');
		//$(".container-fluid").css('height', '420px');
		$(".container-fluid").css('background-size', '100%');
	}, 800);
});

$(".marco").on("click", function(marco){
	setTimeout(function() {
		$("#p1").css('opacity', '1');
	}, 1000);
});
