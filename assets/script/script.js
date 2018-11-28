$(document).ready(function() {
	
	$("#lightbox").hide();

	$(".ingredient").click(function() {
		$("#lightbox").show();
		$(".ingredientpage").hide();
		let ing = parseInt($(this).attr("id"));
		console.log(ing);
		$("#i" + ing).show();
	})

	$("#overlay, #close").click(function() {
		$("#lightbox").hide();
	})

	$(window).scroll(function() {
		console.log($(this).scrollTop());
		if ($(this).scrollTop() > 60 && $(this).scrollTop() < 1000) {
			$('body').addClass('changeColorPink');
			$('body').removeClass('changeColorOrange');
		}

		if ($(this).scrollTop() > 1000 && $(this).scrollTop() < 1700) {
			$('body').addClass('changeColorOrange');
			$('body').removeClass('changeColorGreen');
		}
		if ($(this).scrollTop() > 1700 && $(this).scrollTop() < 2400) {
			$('body').addClass('changeColorGreen');
			$('body').removeClass('changeColorYellow');
		}
		if ($(this).scrollTop() > 2400 && $(this).scrollTop() < 3100) {
			$('body').addClass('changeColorYellow');
			$('body').removeClass('changeColorPurple');
		}
		if ($(this).scrollTop() > 3100 && $(this).scrollTop() < 3800) {
			$('body').addClass('changeColorPurple');
			$('body').removeClass('changeColorPink2');
		}
		if ($(this).scrollTop() > 3800 && $(this).scrollTop() < 4500) {
			$('body').addClass('changeColorPink2');
			$('body').removeClass('changeColorOrange2');
		}
		if ($(this).scrollTop() > 4500 && $(this).scrollTop() < 5200) {
			$('body').addClass('changeColorOrange2');
			$('body').removeClass('changeColorBlue2');
		}
		if ($(this).scrollTop() > 5200) {
			$('body').addClass('changeColorBlue2');
		}
		if ($(this).scrollTop() < 60) {
			$('body').removeClass('changeColorPink');
		}
	})

});