$(document).ready(function() {
	$('.menu').on('click', function(){
		$('.icon_bar, .container, .options, .info, .setting').toggleClass('open');
	});

	var navHeight = $('nav').outerHeight();
	var dataArray = [{image: 'bp_data.png',
					  type: 'BLOOD PRESSURE'},
					 {image: 'bpm_data.png',
					  type: "PULSE"}, 
					 {image: 'sleep_data.png',
					  type: "SLEEP"}, 
					 {image: 'steps_data.png',
					  type: "ACTIVITY"}]
	$('.setting a').click(function (e) {
		e.preventDefault();
		var index = $(this).data("chart");
		switchDatatype(dataArray[index].type);
		$('.data img').fadeOut(300, function() {
			$('.data img').attr('src', "img/"+dataArray[index].image);
			$('.data img').fadeIn(300);
		});
		$('.setting a').removeClass('active');
		if ($(this).hasClass('bp')) {
			console.log(this);
			$('.navbar a').removeClass('active');
			$('.bp2').addClass('active');
		}
		else if ($(this).hasClass('bpm')) {
			$('.navbar a').removeClass('active');
			$('.bpm2').addClass('active');
		}
		else if ($(this).hasClass('hours')) {
			$('.navbar a').removeClass('active');
			$('.hours2').addClass('active');
		}
		else {
			$('.navbar a').removeClass('active');
			$('.steps2').addClass('active');
		}
		$(this).addClass('active');
		console.log($('.numbers').offset().top);
		var topPosition = $('.numbers').offset().top;
		var navHeight = 55;
		$('body,html').animate({
			scrollTop: (topPosition - navHeight)+"px" 
		}, 600);
	});
	$('.graph a').click(function (e){
		e.preventDefault();
	});
	$('.navbar a').click(function (e) {
		e.preventDefault();
		var index = $(this).data("chart");
		console.log($(this).data("chart"));
		switchDatatype(dataArray[index].type);
		$('.data img').fadeOut(300, function() {
			$('.data img').attr('src', "img/"+dataArray[index].image);
			$('.data img').fadeIn(300);
		});
		$('.setting a').removeClass('active');
		if ($(this).hasClass('bp2')) {
			$('.setting a').removeClass('active');
			$('.navbar a').removeClass('active');
			$('.bp2').addClass('active');
			$('.bp').addClass('active');
		}
		else if ($(this).hasClass('bpm2')) {
			$('.setting a').removeClass('active');
			$('.navbar a').removeClass('active');
			$('.bpm2').addClass('active');
			$('.bp').addClass('active');
		}
		else if ($(this).hasClass('hours2')) {
			$('.setting a').removeClass('active');
			$('.navbar a').removeClass('active');
			$('.hours2').addClass('active');
			$('.hours').addClass('active');
		}
		else {
			$('.setting a').removeClass('active');
			$('.navbar a').removeClass('active');
			$('.steps2').addClass('active');
			$('.steps').addClass('active');
		}	
	});
});

function switchDatatype(type) {
	document.getElementById('data_type').innerHTML = type;
}