$(function(){

	var duration = 300;

	$('#buttons button:nth-child(1)')
		.on('mouseover', function(){
			$(this).stop(true).animate({
				backgroundColor: '#ae5e98',
				color: '#ffffff'
			}, duration);
		})
		.on('mouseout', function(){
			$(this).stop(true).animate({
				backgroundColor: '#fffff',
				color: '#ff9400'
			}, duration);
		});

	$('#buttons button:nth-child(2)')
		.on('mouseover', function(){
			$(this).stop(true).animate({
				borderWidth: '16px',
				color: '#ae5e98'
			}, duration, 'easeOutSine');
		})
		.on('mouseout', function(){
			$(this).stop(true).animate({
				borderWidth: '0px',
				color: '#ff9400'
			}, duration, 'easeOutSine');
		});

	$('#buttons button:nth-child(3)')
		.on('mouseenter', function(){
			$(this).find('> span').stop(true).animate({
				width: '100%'
			}, duration, 'easeOutQuad');
		})
		.on('mouseleave', function(){
			$(this).find('> span').stop(true).animate({
				width: '0%'
			}, duration, 'easeOutQuad');
		});
});