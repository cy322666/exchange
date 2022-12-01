$(document).ready(function() {
	$('.closer').on('click',function(){
		$(this).parent().parent().parent().fadeOut('slow');
	});
	////////////

	/*$('.money-sended').on('click',function(){
		$('#aprove-popup').fadeIn('slow');
	});*/

	$('.detail').on('click',function(){
		$('#detail').fadeIn('slow');
	});

	$('.support').on('click',function(){
		$('#help').fadeIn('slow');
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


	function digits_float(){

		val = $('#crypto').val().replace(/[^0-9.]/g, '');
		if (val.indexOf(".") != '-1') {
			val = val.substring(0, val.indexOf(".") + 3);
		}
		val = val.replace(/\B(?=(\d{3})+(?!\d))/g, "’");
		$('#crypto').val(val);


		val2 = $('#fiat').val().replace(/[^0-9.]/g, '');
		if (val2.indexOf(".") != '-1') {
			val2 = val2.substring(0, val2.indexOf(".") + 3);
		}
		val2 = val2.replace(/\B(?=(\d{3})+(?!\d))/g, "’");
		$('#fiat').val(val2);

	}
	function amount(){
		$('.amount').on('input', function(e){

				setTimeout(digits_float,500);
				val = $(this).val().replace(/[^0-9.]/g, '');
				var kurs = $('.curs span').text();
				id = $(this).attr('id');
				val_crypto = val*kurs;
				val_fiat = val/kurs;
				test = (val*1).toFixed(0);

				if (id == 'crypto'){

					$('#fiat').val(val_crypto.toFixed(2));
					$('#fiat_small span').text(val_crypto.toFixed(0));
					$('#crypto_small span').text(test);

				}else{
					$('#crypto').val(val_fiat.toFixed(2));
					$('#crypto_small span').text(val_fiat.toFixed(0));
					$('#fiat_small span').text(test);
				}

		});
	}
	amount();





	function kurs(target){

	}


	function kurs_upd(){
		console.log('kurs_upd');
		$('.sending-pair .amount').each(function(){
			val = $(this).val().replace(/[^0-9.]/g, '');
			test = (val*1).toFixed(0);
			id = $(this).attr('id');
			kurs = $('.curs span').text();
			val_crypto = val*kurs;
			val_fiat = val/kurs;
			console.log(val);
			if (id == 'crypto'){

				$('#fiat').val(val_crypto.toFixed(2));
				$('#fiat_small span').text(val_crypto.toFixed(0));
				$('#crypto_small span').text(test);

			}else{
				$('#crypto').val(val_fiat.toFixed(2));
				$('#crypto_small span').text(val_fiat.toFixed(0));
				$('#fiat_small span').text(test);
			}
		});
	}


	$('.sending-pair .select-pair').on('click',function(){
		$('#sending-pair').fadeIn('slow');
	});


	$('.reciving-pair .select-pair').on('click',function(){
		$('#reciving-pair').fadeIn('slow');


	});

	var all_p = {
		"TRC-20":{
			"id":"TRC-20",
			"number":"TDoQWKZ9qSZkEYDgA8sxt3ipiwybmD1pFU",
			"currency":'$',
			"abbr":"USDT",
			"name":"Tether USDT",
			"network":"TRC 20",
			"type":"crypto",
			"image":"tether.png",
			"minimal":"1000"
		},
		"ERC-20":{
			"id":"ERC-20",
			"number":"TDoQWKZ9qSZkEYDgA8sxt3ipiwybmD1pFU",
			"currency":'$',
			"abbr":"USDT",
			"name":"Tether USDT",
			"network":"ERC 20",
			"type":"crypto",
			"image":"assets/images/tether.png",
			"minimal":"1000"
		},
		"BEP-20":{
			"id":"BEP-20",
			"number":"TDoQWKZ9qSZkEYDgA8sxt3ipiwybmD1pFU",
			"currency":'$',
			"abbr":"USDT",
			"name":"Tether USDT",
			"network":"BEP 20",
			"type":"crypto",
			"image":"assets/images/tether.png",
			"minimal":"1000"
		},
		"tink-rub-trans":{
			"id":"tink-rub-trans",
			"number":"5555 5555 5555 5555",
			"currency":'₽',
			"abbr":"RUB",
			"name":"Tinkoff RUB",
			"network":"перевод",
			"type":"fiat",
			"image":"assets/images/tink.png",
			"minimal":"50000"
		},
		"tink-rub-cash":{
			"id":"tink-rub-cash",
			"number":"5555 5555 5555 5555",
			"currency":'₽',
			"abbr":"RUB",
			"name":"Tinkoff RUB",
			"network":"Cash in",
			"type":"fiat",
			"image":"assets/images/tink.png",
			"minimal":"50000"
		},
		"alfa-rub-trans":{
			"id":"alfa-rub-trans",
			"number":"5555 5555 5555 5555",
			"currency":'₽',
			"abbr":"RUB",
			"name":"Alfa-Bank RUB",
			"network":"перевод",
			"type":"fiat",
			"image":"assets/images/alfa.png",
			"minimal":"50000"
		},
		"alfa-rub-cash":{
			"id":"alfa-rub-cash",
			"number":"5555 5555 5555 5555",
			"currency":'₽',
			"abbr":"RUB",
			"name":"Alfa-Bank RUB",
			"network":"Cash in",
			"type":"fiat",
			"image":"assets/images/alfa.png",
			"minimal":"50000"
		},
		"sber":{
			"id":"sber",
			"number":"5555 5555 5555 5555",
			"currency":'₽',
			"abbr":"RUB",
			"name":"Sber RUB",
			"network":"перевод",
			"type":"fiat",
			"image":"assets/images/sber.png",
			"minimal":"50000"
		},
		"fiat-rub":{
			"id":"fiat-rub",
			"currency":'₽',
			"abbr":"RUB",
			"name":"Fiat RUB",
			"network":"наличные",
			"type":"fiat",
			"image":"assets/images/rub.png",
			"minimal":"50000"
		},
		"fiat-usd":{
			"id":"fiat-usd",
			"currency":'$',
			"abbr":"USD",
			"name":"Fiat USD",
			"network":"наличные",
			"type":"fiat",
			"image":"assets/images/doll.png",
			"minimal":"1000"
		},
	}


	for (key in all_p) {
	    $('#sending-pair .list-of-pair').append('<div class="single-pair flex" id="'+all_p[key]['id']+'" currency="'+ all_p[key]['currency'] +'" abbr="'+ all_p[key]['abbr'] +'" type="'+ all_p[key]['type'] +'" minimal="'+ all_p[key]['minimal'] +'"><div class="icon-sp flex mr-10"><img width="46px" src="/'+ all_p[key]['image'] +'"></div><div class="flex-column justify-center"><div class="text-2 name">'+ all_p[key]['name'] +'</div><div class="fw-bold tc-grey text-1 network-text">'+ all_p[key]['network'] +'</div></div></div>');
	}

	$('#sending-pair .single-pair').on('click',function() {

		id = $(this).attr('id');
		currency = $(this).attr('currency');
		abbr = $(this).attr('abbr');
		type = $(this).attr('type');
		minimal = $(this).attr('minimal');
		image = $(this).find('img').attr('src');
		name = $(this).find('.name').text();
		network = $(this).find('.network-text').text();
		$('#sending-pair').fadeOut('slow');
		$('.sending-pair').attr('id-ar',id);
		$('.sending-pair').attr('minimal',minimal);
		$('.sending-pair .p-1-1 img').attr('src',image);
		$('.sending-pair .p-1-2').text(abbr);
		$('.sending-pair .p-1-3').text(network);
		$('.sending-pair currency').text(currency);
		$('.sending-pair .amount').attr('id',type);
		$('#sending-pair .list-of-pair').html();
		$('.p-0-1').attr('id',type+"_small");

	});


	$('.reciving-pair .select-pair').on('click',function(){

		$('#reciving-pair .list-of-pair').html('');
		opposite = $('.sending-pair .amount').attr('id');
		console.log(opposite);
		if ( opposite == 'crypto'){
			for (key in all_p) {

				if (all_p[key]['type'] == 'fiat'){

					$('#reciving-pair .list-of-pair').append('<div class="single-pair flex" id="'+all_p[key]['id']+'" currency="'+ all_p[key]['currency'] +'" abbr="'+ all_p[key]['abbr'] +'" type="'+ all_p[key]['type'] +'" minimal="'+ all_p[key]['minimal'] +'"><div class="icon-sp flex mr-10"><img width="46px" src="/'+ all_p[key]['image'] +'"></div><div class="flex-column justify-center"><div class="text-2 name">'+ all_p[key]['name'] +'</div><div class="fw-bold tc-grey text-1 network-text">'+ all_p[key]['network'] +'</div></div></div>');

				}
			}

		}else{
			for (key in all_p) {

				if (all_p[key]['type'] == 'crypto'){

					$('#reciving-pair .list-of-pair').append('<div class="single-pair flex" id="'+all_p[key]['id']+'" currency="'+ all_p[key]['currency'] +'" abbr="'+ all_p[key]['abbr'] +'" type="'+ all_p[key]['type'] +'" minimal="'+ all_p[key]['minimal'] +'"><div class="icon-sp flex mr-10"><img width="46px" src="/'+ all_p[key]['image'] +'"></div><div class="flex-column justify-center"><div class="text-2 name">'+ all_p[key]['name'] +'</div><div class="fw-bold tc-grey text-1 network-text">'+ all_p[key]['network'] +'</div></div></div>');

				}
			}
		}
		$('#reciving-pair .single-pair').on('click',function() {
			id = $(this).attr('id');
			currency = $(this).attr('currency');
			abbr = $(this).attr('abbr');
			type = $(this).attr('type');
			minimal = $(this).attr('minimal');
			image = $(this).find('img').attr('src');
			name = $(this).find('.name').text();
			network = $(this).find('.network-text').text();
			$('#reciving-pair').fadeOut('slow');

			$('.reciving-pair').attr('minimal',minimal);
			$('.reciving-pair').attr('id-ar',id);
			$('.reciving-pair .p-2-1 img').attr('src',image);
			$('.reciving-pair .p-2-2').text(abbr);
			$('.reciving-pair .p-2-3').text(network);
			$('.reciving-pair currency').text(currency);
			$('.reciving-pair .amount').attr('id',type);

			$('.p-0-2').attr('id',type+"_small");
			amount();
			kurs_upd();
		});

	});

	$('.fon,.minimal').on('click',function(){
		$('.fon').fadeOut('slow');
		$('.minimal').fadeOut('slow');
	});

	//проверка на тип обмена и редирект
	$('.step-1 .next-step').on('click',function(){

		var reciver = $('.reciving-pair .amount').attr('id');
		var sender  = $('.sending-pair .amount').attr('id');
		var type = $('.reciving-pair .p-2-3').text();

		//пара и суммы.
		var sender_type = $('.sending-pair').attr('id-ar');
		var sender_amount = $('.sending-pair .amount').val();
		var minimal_s = $('.sending-pair').attr('minimal');

		var reciver_type = $('.reciving-pair').attr('id-ar');
		var reciver_amount = parseInt($('.reciving-pair .amount').val().replace('’', ""));
		var minimal_r = $('.reciving-pair').attr('minimal');


		console.log(reciver_amount);
		console.log(minimal_r);
		abbr_r = $('.p-2-2').text();

		var kurs = $('.curs span').text();

		var get_params = 'sender='+sender_type+'&sender_amount='+sender_amount+'&reciver='+reciver_type+'&reciver_amount='+reciver_amount+'&kurs='+kurs;

		/*if (minimal_r > reciver_amount){
			$('.minimal').fadeIn('slow');
			$('.fon').fadeIn('slow');
			$('.minimal .amount').text(minimal_r+ " "+abbr_r);
		}else{*/
		console.log(type);
			if (reciver == sender){
			alert('Выберите разные типы пар');
			}else if (type == 'наличные'){
				window.location.href = "/get-rub-cash.php?"+get_params;
			}else if (reciver == 'crypto'){
				window.location.href = "/get-usdt.php?"+get_params;
			}else if (type == 'Cash in' ){
				window.location.href = "/cashin.php?"+get_params;
			}else if (type == 'перевод'){
				window.location.href = "/get-rub.php?"+get_params;
			}
		/*}*/


	});



	var getUrlParameter = function getUrlParameter(sParam) {
	    var sPageURL = window.location.search.substring(1),
	        sURLVariables = sPageURL.split('&'),
	        sParameterName,
	        i;

	    for (i = 0; i < sURLVariables.length; i++) {
	        sParameterName = sURLVariables[i].split('=');

	        if (sParameterName[0] === sParam) {
	            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
	        }
	    }
	    return false;
	};

	function fill_data(){
		var sender = getUrlParameter('sender');
		var reciver = getUrlParameter('reciver');

		var amount_s = getUrlParameter('sender_amount');
		var amount_r = getUrlParameter('reciver_amount');

		var kurs = getUrlParameter('kurs');
		$('.kurs_inner span').text(kurs);

		//получаем
		console.dir(all_p);
		var currency_r = all_p[reciver]['currency'];
		var abbr_r = all_p[reciver]['abbr'];
		var name_r = all_p[reciver]['name'].replace(' RUB','');
		var network_r = all_p[reciver]['network'];
		var type_r = all_p[reciver]['type'];
		var image_r = all_p[reciver]['image'];
		var minimal_r = all_p[reciver]['minimal'];
		//получаем
		//отправляем
		var currency_s = all_p[sender]['currency'];
		var number_s = all_p[sender]['number'];
		var abbr_s = all_p[sender]['abbr'];
		var name_s = all_p[sender]['name'].replace(' RUB','');
		var network_s = all_p[sender]['network'];
		var type_s = all_p[sender]['type'];
		var image_s = all_p[sender]['image'];
		var minimal_s = all_p[sender]['minimal'];
		//отправляем

		$('.type-of-recive span').text(abbr_r+'('+network_r+')');
		$('.type-of-recive img').attr('src',image_r);
		$('.amount_r').text(amount_r);
		$('.abbr_r').text(abbr_r);
		$('.get-usdt .network_r').text(name_r);
		$('.get-rub .network_r').text(name_r);
		$('.image_r').attr('src',image_r);
		$('.bank-name').text(name_r);
		$('.abbr_s').text(abbr_s);
		$('.amount_s').text(amount_s);
		$('.get-usdt .network_s').text(name_s);
		$('.get-rub .network_s').text(network_s);
		$('.cashin .network_s').text(network_s);
		$('.image_s').attr('src',image_s);
		$('.number_s').text(number_s);
		var wallet_r = $('.wallet_r').text();
		var email = $('#email').val();

		var engame_data = {
			'email':email,
			'amount_s':amount_s,
			'amount_r':amount_r,
			'kurs':kurs,
			'sender':sender,
			'reciver':reciver,
			'wallet_r':wallet_r,
			'network_r':network_r,
			'network_s':network_s,
		};
		console.log(engame_data);


	}

	function go_back(){
		$('.prev-step').on('click',function(){
			if ($(this).parent().parent().parent().attr('id') == 'first'){
				window.location.href='https://obmenka.coupix.ru/';
			}else{
				$(this).parent().parent().parent().removeClass('active');
				$(this).parent().parent().parent().prev().addClass('active');
			}

		});

	}

	if ($('.inner').length){
		fill_data();
		go_back();
	}

	//get usdt
	$('.get-usdt .step-2 .next-step').on('click',function(){
		var wallet_r = $('#wallet_r').val();
		if (wallet_r == ""){
			alert('Введи адрес кошелька');
		}else{
			$('.wallet_r').text(wallet_r);
			$(this).parent().parent().parent().removeClass('active');
			$(this).parent().parent().parent().next().addClass('active');
		}

	});
	$('.get-usdt .step-3 .next-step').on('click',function(){
		$(this).parent().parent().parent().removeClass('active');
		$(this).parent().parent().parent().next().addClass('active');
	});
	$('.get-usdt .step-4 .next-step,.get-rub .step-4 .next-step,.cashin .step-4 .next-step').on('click',function(){
		var email = $('#email').val();
		 function validateEmail($email) {
		  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		  return emailReg.test( $email );
		}
		if (email == "" || !validateEmail(email)){
			alert('Введите вашу почту');
		}else{
			$(this).parent().parent().parent().removeClass('active');
			$(this).parent().parent().parent().next().addClass('active');
		}
	});

	$('.get-usdt .step-5 .next-step,.get-rub .step-5 .next-step,.cashin .step-5 .next-step').on('click',function(){
		$(this).parent().parent().parent().removeClass('active');
		$(this).parent().parent().parent().next().addClass('active');
	});

	// таймер


function get_response(){

	$.getJSON('/api/site/', function(data) {

    	var status = data.data.lead_status;
    	console.log(status);
    	switch (status) {
		  case 'Ожидаем оплату':
		  	$('#status').attr('class','');
		    $('#status').addClass('red-badge');
		    $('#status').text('Ожидаем оплату');
		    break;
		  case 'Заявка в работе':
			$('#status').attr('class','');
		    $('#status').addClass('blue-badge');
		    $('#status').text('Заявка в работе');
		    $('.step-7 .z-1').text('Меняем')
		    break;
		  case 'Выполнено':
		  	$('#status').attr('class','');
		    $('#status').addClass('green-badge');
		    $('#status').text('Выполнено');
		    break;

		}
	});

}


	$('.get-usdt .step-6 .next-step,.get-rub .step-6 .next-step,.cashin .step-6 .next-step').on('click',function(){
		fill_data();
		var timer = 25;
	    function countDown() {

	        if (--timer && $('#status').text() == "Ожидаем оплату") {

	        		setTimeout(get_response, 5000);
		            var minutes = timer % 60;
		            if (!minutes) {
		                minutes = '00';
		            }
		            $('#Timer5min').text(Math.floor(timer/60) + ':' + minutes);
		            setTimeout(countDown, 1000);





	        } else {
	        	if (	$('.cashin .active #status').text() == 'Заявка в работе'	){
	            	countDown2();
	        		$('.canseled').remove();
	        	}else if (	$('.active #status').text() == 'Заявка в работе'	){
	            	$('#Timer5min').text('15:00');
	        		$('.canseled').remove();
	        	}else if (	$('.active #status').text() == 'Выполнено'	){
	        		$('.active').removeClass('active');
	        		$('.step-8').addClass('active');
	        	}else if (	$('.active #status').text() == 'Не выполнено' || $('#status').text() == 'Ожидаем оплату'	){
	        		error_step();
	        	}



	        }
		}
		countDown();
		$(this).parent().parent().parent().removeClass('active');
		$(this).parent().parent().parent().next().addClass('active');

	});


	//get usdt
function countDown2() {
	    	var timer = 3600;
	        if (--timer) {

	        		setTimeout(get_response, 5000);
		            var minutes = timer % 60;
		            if (!minutes) {
		                minutes = '00';
		            }
		            $('#Timer5min').text(Math.floor(timer/60) + ':' + minutes);
		            setTimeout(countDown2, 1000);


	        }else{
	        	error_step();
	        }
}


function wait_again(){

	$('.active').removeClass('active');
	$('.error').addClass('active');
	$('.status').text('Не получили оплату');
	$('.status').addClass('red-badge');

	$('.error').removeClass('active');
	$('.status_page').addClass('active');
	var timer = 15;
	function countDown() {

	        if (--timer && $('#status').text() == "Ожидаем оплату") {

	        		setTimeout(get_response, 5000);
		            var minutes = timer % 60;
		            if (!minutes) {
		                minutes = '00';
		            }
		            $('#Timer5min').text(Math.floor(timer/60) + ':' + minutes);
		            setTimeout(countDown, 1000);





	        } else {
	        	if (	$('#status').text() == 'Заявка в работе'	){
	            	$('#Timer5min').text('15:00');
	        		$('.canseled').remove();
	        	}else if (	$('#status').text() == 'Выполнено'	){
	        		$('.active').removeClass('active');
	        		$('.step-8').addClass('active');
	        	}else if (	$('#status').text() == 'Не выполнено' || $('#status').text() == 'Ожидаем оплату'	){
	        		error_step();
	        	}



	        }
		}
	countDown();
}

$('.wait-again').on('click',function(){
	wait_again();
	$('.second_try').remove();
	$('.wait-again').addClass('second_try');
});

function error_step(){
	$('.active').removeClass('active');
	$('.error').addClass('active');
}

//копирование текста
function copyToClipboard(text) {
    if (window.clipboardData && window.clipboardData.setData) {
        // IE specific code path to prevent textarea being shown while dialog is visible.
        return clipboardData.setData("Text", text);

    } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
        document.body.appendChild(textarea);
        textarea.select();
        try {
            return document.execCommand("copy");  // Security exception may be thrown by some browsers.
        } catch (ex) {
            console.warn("Copy to clipboard failed.", ex);
            return false;
        } finally {
            document.body.removeChild(textarea);
        }
    }
}

$(".copy").on('click',function() {
	var text2 = $(this).parent().find('.number_s,.order_id').text();
    var result = copyToClipboard(text2);

});



$('.get-rub .step-2 .next-step,.cashin .step-2 .next-step').on('click',function(){
	var wallet_r = $('#wallet_r').val();
		if (wallet_r == ""){
			alert('Введи адрес кошелька');
		}else{
			$('.wallet_r').text(wallet_r);
			$(this).parent().parent().parent().removeClass('active');
			$(this).parent().parent().parent().next().addClass('active');
	}
});
$('.get-rub .step-3 .next-step,.cashin .step-3 .next-step').on('click',function(){
		$(this).parent().parent().parent().removeClass('active');
		$(this).parent().parent().parent().next().addClass('active');
});

$('.cashin .step-alert .next-step').on('click',function(){
		$(this).parent().parent().parent().removeClass('active');
		$(this).parent().parent().parent().next().addClass('active');
});



});
