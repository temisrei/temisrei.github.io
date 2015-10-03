$(function(){
	//
	var duration = 300;

	//
	$('#buttons2 button').each(function(index){
		// var pos = index * 40 - 40;
		var pos = Math.random() * 80 - 40;
		$(this).css('top', pos);
	})
	.on('mouseover', function(){
		var $btn = $(this).stop(true).animate({
			backgroundColor: '#f9e200',
			color: '#000'
		}, duration);
		$btn.find('img:nth-child(1)').stop(true).animate({
			opacity: 0
		}, duration);
		$btn.find('img:nth-child(2)').stop(true).animate({
			opacity: 1
		}, duration);
	})
	.on('mouseout', function(){
		var $btn = $(this).stop(true).animate({
			backgroundColor: '#fff',
			color: '#3f51b5'
		}, duration);
		$btn.find('img:nth-child(1)').stop(true).animate({
			opacity: 1
		}, duration);
		$btn.find('img:nth-child(2)').stop(true).animate({
			opacity: 0
		}, duration);
	});
});