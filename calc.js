


$(document).on('ready', function() {

	

// Calculator

	var extraForm = ('<form class="form-inline loadEntry" role="form"><div class="form-group"><input type="text" class="form-control margin" id="appliance" placeholder="Appliance"></div><div class="form-group"><input type="number" class="form-control margin quantity"  id="quantity" placeholder="Quantity"></div><span>X</span><div class="form-group"><input type="number" class="form-control margin ac-watts"  id="ac-watts" placeholder="AC Watts"></div><span>X</span><div class="form-group"><input type="number" class="form-control margin hours-on"  id="hours-on" placeholder="Hours On"></div><span>=</span><div class="form-group"><input type="number" class="form-control margin total-day"  id="total-day" placeholder="Watt hrs. per day"></div><i class="icon-minus-circled remove-form"></i>');

	$('.add-load').click(function(){
		
		$('.main-form').append(extraForm)
		
		$('.remove-form').click(function(){
			console.log('remove me')
			$(this).closest('.loadEntry').remove();
		})

	})
	


	var arrWatts = []

	$('.add-total').click(function(){
		arrWatts.length=0;

		$('.loadEntry').each(function(){
	
		var quant = $(this).find('.quantity').val()
		var energy = $(this).find('.ac-watts').val()
		var timeon = $(this).find('.hours-on').val()

		$(this).find('.total-day').val(quant*energy*timeon)
		
		var totalTime = $(this).find('.total-day').val()
			arrWatts.push(totalTime)
			console.log(arrWatts)



		})
		console.log(arrWatts.length)


			var grandTotal = eval(arrWatts.join('+'));
			$('.grandTotal').remove()
			$('.reset').remove()

			$('.add-total').after('<span class="grandTotal"> Total Watts: ' +grandTotal+ ' </span><button type="submit" class="btn btn-default reset">Reset</button>')


		$('.reset').click(function(){
			location.reload()
		})

		

	});


	




// getTotal('#quantity', '#ac-watts', '#hours-on')


});
