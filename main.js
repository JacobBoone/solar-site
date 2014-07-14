// i want the image to render in order on the page. LOOP thru each Bank Item??
// want Hover function to have a "glow around the icon"
// I want the description to go to a div that toggles open upon click of the image. and goes away if another icon is clicked




// constructor
var SolarItem = function(description, image){
	this.description = description;
	this.image = image;

}

SolarItem.prototype.create = function(){

}

// Bank Items

var panel = new SolarItem('Panel description', imgPanel)
var controller = new SolarItem('Charge controller description', imgController)
var battery = new SolarItem('Battery description', imgBattery)
var inverter = new SolarItem('Inverter description', imgInverter)
var home = new SolarItem('Power On', imgHome)



var imgPanel = $('<img>').attr('src', 'images/panel.png')
var imgController = $('<img>').attr('src', 'images/controller.png')
var imgBattery = $('<img>').attr('src', 'images/batt2.png')
var imgInverter = $('<img>').attr('src', 'images/inverter.png')
var imgHome = $('<img>').attr('src', 'images/home.png')



$(document).on('ready', function() {
 




});