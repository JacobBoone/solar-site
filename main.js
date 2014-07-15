// i want the image to render in order on the page. LOOP thru each Bank Item??
// want Hover function to have a "glow around the icon"
// I want the description to go to a div that toggles open upon click of the image. and goes away if another icon is clicked

// constructor
var SolarItem = function(name, description, image){
	this.name = name;
	this.description = description;
	this.image = image;

}


// Declaring the images as objects
var imgPanel = $('<img id="solarpanel" class="solar-icon col-xs-2">').attr('src', 'images/panel.png');
var imgController = $('<img id="chargecontroller" class="solar-icon col-xs-1">').attr('src', 'images/controller.png');
var imgBattery = $('<img id="battery" class="solar-icon col-xs-2">').attr('src', 'images/batt2.png');
var imgInverter = $('<img id="inverter" class="solar-icon col-xs-1">').attr('src', 'images/inverter.png');
var imgHome	 = $('<img id="house" class="solar-icon col-xs-2">').attr('src', 'images/home.png');

// Bank Items with 'description' and the varible for the the image objects
var panel = new SolarItem('solarpanel', '<strong>Solar Panel:</strong><br><br>Selecting a solar panel for your new system can seem a mystery. Your may want one or a few. You may want to mount them for permanent sun exposure or the convenience to store it when not in use. What ever your goal you want the panel you select to collect the energy you need efficiently.<br><br>Panels have different watt ratings. This is their potential for energy collection. However having more that one panel may in fact increase the wattage of energy collected as they can compound on one another.<br><br>I have one 80 watt panel for my 12 volt system. It works great. A good deal of power is collected in the heat of the sun and trickle charges on less than sunny days. However for faster charging a second panel or one with a higher wattage rating could charge your batteries faster. <br><br>The panels have specific connectors for properly wiring the panel to the rest of the system. These wires connect to the <strong>+</strong> and <strong>-</strong> outputs and gets connected directly to the <em>Charge Controller</em>.', imgPanel);
var controller = new SolarItem('chargecontroller','<strong>Charge Controller:</strong><br><br>This is the boss of your system as the name suggests it controls what energy comes in from the solar panels and into your battery bank. Lets review what the controller monitors.<br><br>Panel:<br>-Amps from your solar panels. This is the amount of energy it is collecting from the sun.<br><br>Battery Bank:<br>-Volts are monitored in the battery bank. It knows how much is being stored and if there is any room to pass it more energy.<br><br>Be sure to get one with a display so you are able to monitor your energy at a glance.', imgController);
var battery = new SolarItem('battery','Battery Bank:<br><br>Your batteries will likely be the most costly part of your solar generator investment. Get deepcycle batteries. This will allow the charge to hold, be used and be replenished.<br><br>So you have batteries now. What do you do with them?<br><br>They can be connected in Series or Parallel. (I prefer a 10 gauge wire)<br>-Series will increase the voltage.<br>-Parallel will connect the batteries without changing the voltage.<br><br>This will determine the voltage of your system. 12 and 24 volt systems are the most common. But remember all other components must be compatible with the voltage you select. A 12 volt panel will likely not go well with a 24 volt battery bank.<br><br>Also your power is being stored, but is not usable yet as it is in the DC current. Your household items run on AC current. Sending the harvested energy to the inverter will allow you to plug and play.', imgBattery);
var inverter = new SolarItem('inverter','Inverter:<br><br>The inverter is what converts the harvested DC current to usable AC current.<br><br>This has a wide range of Watt capacity. A smaller system may not need a large inverter. However if you plan to expand your system starting with one slightly larger than your needs might come in handy.<br><br>The inverter will also keep tabs on the voltage level in the batteries. Just think of volts as water pressure running through a hose. As you use your stored energy the \'pressure decreases\'. A good inverter will shut off the power to avoid damage to the batteries if the power level gets too low.<br><br>Now your all set. PLUG AND PLAY!!! ', imgInverter);
var home = new SolarItem('house','Plug it in!!!<br><br>No more worrying the lights will be off in a power outage. And you will be envy of your neighbors as you get to watch TV while their lights are off. <br><br>You are now using energy FREE FROM THE SUN!!!', imgHome);

		
// Declare array of the system.
var system = [panel, controller, battery, inverter, home];



// // loop thru the array of system to display the image on the page
var putimagesonpage = function(arr){
	// var arrSystem = arr.image.splice()['~~>']
	for (var i = 0; i < arr.length; i++) {
		$('#full-system').append(arr[i].image)
		if(i !== arr.length-1){
			$('#full-system').append('<i class="icon-right-big col-xs-1"></i>')
		}
		
	}
}






$(document).on('ready', function() {

		putimagesonpage(system);
		$('#information').slideUp(800)
		
		$('.solar-icon').click(function(){
			var self =this;
			$('#information').slideUp(800)
			$('#information').queue(function(){
				$('#information').empty()
				console.log('work')
				var info = $('<div class="container information"><div class="jumbotron desc-slide"><i class="icon-target-2 desc-close"></i><div class="row"><p class="col-xs-12 description"></p></div></div></div>')
				$('#information').append(info);

				
				var idVal= $(self).attr('id')
				var output = _.findWhere(system,{name: idVal})
					console.log(output)
				$('.description').append(output.description)
				$(this).dequeue()
// closes any info
				$('.desc-close').click(function(){
					$('#information').slideUp(800).empty()
				})

// experiment to close more fluidly
				// $('.desc-close').click(function(){
				// 	$('#information').slideUp(600).empty()
				// })

			})
			
			
			$('#information').slideDown(800)
		
			console.log("clicked")



		});


});




