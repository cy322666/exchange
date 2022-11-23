$(document).ready(function() {
	$('.closer').on('click',function(){
		$(this).parent().parent().parent().fadeOut('slow');
	});
	////////////
	$('.sending-pair .select-pair').on('click',function(){
		$('#sending-pair').fadeIn('slow');
	});
	$('.reciving-pair .select-pair').on('click',function(){
		$('#reciving-pair').fadeIn('slow');
	});
	$('.money-sended').on('click',function(){
		$('#aprove-popup').fadeIn('slow');
	});

	$("#confirm-money").on("change", function(){
		if($('input[name="confirm-money"]').is(':checked')){
		  // checked
			$(this).parent().parent().parent().find('.next-step').prop('disabled', false);
		}else{
		 // unchecked
			$(this).parent().parent().parent().find('.next-step').prop('disabled', true);

		}
	});

});