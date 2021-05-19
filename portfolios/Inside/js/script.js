$(document).ready(function(){
	$('#main_navigation a').click(function(){
		// ********
		var target = $(this).attr('data-target');
		$(':not([data-name='+target+'])').removeClass('active');
		$('[data-name='+target+']').addClass('active');
	});

	$('#character a:nth-child(1)').click(function(){
		$('#character article').removeClass('show');
		$().addClass('show');
	});


	var currentPosition =1;

	// right button
	$('#character a:nth-child(2)').click(function(){
		curruentPosition+=1;
		if (currentPosition>3) {
			currentPosition=1;
		}
		$('#character article').removeClass('show');
		$('article :nth-of-type('+curruentPosition+')').addClass('show');
	});
	
});