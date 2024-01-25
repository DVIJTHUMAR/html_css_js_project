$(window).scroll(function(){
	if ($(window).scrollTop() >=100) {
		$('header').addClass('head-after');
	}
	else{
	$('header').removeClass('head-after');
	}
});

$('.side-tog').click(function(){
	$('.side-togg').toggleClass('side-tog-2');
});

$(document).ready(function(){
	$('.variable-width').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		centerMode: true,
		variableWidth: true
	  });
  });