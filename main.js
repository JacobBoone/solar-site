// i want the image to render in order on the page. LOOP thru each Bank Item??
// want Hover function to have a "glow around the icon"
// I want the description to go to a div that toggles open upon click of the image. and goes away if another icon is clicked


// namesake
// var SolarSite = (function(){
		// constructor
		var SolarItem = function(name, description, image){
			this.name = name;
			this.description = description;
			this.image = image;

		}

		// click handler to display the decription later below the jumbotron div

		// SolarItem.prototype.clickHandler = function(){
		// 		// var self = this;
		// 		this.on('click', function(){
		// 		$('.description').append(this.decription)
		// 		// }
				
		// }



		// Declaring the images as objects
		var imgPanel = $('<img id="solarpanel" class="solar-icon col-md-2">').attr('src', 'images/panel.png');
		var imgController = $('<img id="chargecontroller" class="solar-icon col-md-1">').attr('src', 'images/controller.png');
		var imgBattery = $('<img id="battery" class="solar-icon col-md-2">').attr('src', 'images/batt2.png');
		var imgInverter = $('<img id="inverter" class="solar-icon col-md-1">').attr('src', 'images/inverter.png');
		var imgHome = $('<img id="house" class="solar-icon col-md-2">').attr('src', 'images/home.png');

		// Bank Items with 'description' and the varible for the the image objects
		var panel = new SolarItem('solarpanel', 'Panel description', imgPanel);
		var controller = new SolarItem('chargecontroller','Charge controller description', imgController);
		var battery = new SolarItem('battery','Battery description', imgBattery);
		var inverter = new SolarItem('inverter','Inverter description', imgInverter);
		var home = new SolarItem('house','Power On', imgHome);





		
		// Declare array of the system.
		var system = [panel, controller, battery, inverter, home];


		// var information = null;

		// var init = function(){
		// 	// create the system
		// 	var solarEl = ?.create();
		// 	$('#full-system').append(this);

		// }

// })();

$(document).on('ready', function() {
 
	
		// // loop thru the array of system to display the image on the page
		var putimagesonpage = function(arr){
			// var arrSystem = arr.image.splice()['~~>']
			for (var i = 0; i < arr.length; i++) {
				
				if(i === arr.length-1){
					$('#full-system').append(arr[i].image)
				}
				else{
					$('#full-system').append(arr[i].image).append('<i class="icon-right-big col-md-1"></i>')
				}
			}
		}

		putimagesonpage(system);
		
		
		$('.solar-icon').click(function(){
			$('#information').empty()
			var info = $('<div class="container information"><div class="jumbotron"><div class="row"><p class="col-md-12 description"></p></div></div></div>')
			$('#information').append(info)
			// $('.information').append(info)
			
			var idVal= $(this).attr('id')
			var output = _.findWhere(system,{name: idVal})
				console.log(output)
			$('.description').append(output.description);

				
			
		 

			console.log("clicked")
		});

	

		
// render the page with image and description
  // SolarSite.init();


	// $('#full-system').append(panel.image);
	// $('#full-system').append(controller.image);
	// $('#full-system').append(battery.image);
	// $('#full-system').append(inverter.image);
	// $('#full-system').append(home.image);


});




