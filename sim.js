

var Simulator = (function(){


// constants
	var NUM_SUNS= 1;

	// var batteryAutoIncrement = 0;

// Sun constructor
	var	Sun = function(){

	}
	Sun.prototype.create =function(){
		this.el = $('<i class="sun icon-sun-filled">');
		// move across screen code here??
		this.el.css({
			top: 70,
			left: 90
		})

		return this.el;
	}


// Panel constructor
	var	Panel = function(){

	}
	Panel.prototype.create =function(){
		this.el = $('<i class="spanel icon-th">');
		return this.el;
	}

// Battery constructor
	var	Battery = function(){
		// this.charge = 100;
		// this.status = 'full';
		// this.id = batteryAutoIncrement++;

	}
	Battery.prototype.create =function(){
		this.el = $('<i class="batt icon-battery">');
		return this.el;
	}

	// Battery.prototype.update =function(){
	// 	this.el

	// }


// House constructor
	var	House = function(){

	}
	House.prototype.create =function(){
		this.el = $('<i class="house icon-home-outline">');
		return this.el;
	}

	var	suns = []
	// var homebase =null;

// Homebase Constructor
	var Homebase = function(panel, battery, house){
		this.panel = panel;
		this.battery = battery;
		this.house =house;
	}

	Homebase.prototype.create = function(){
		var el = $('<div class="homebase">');
		el.append(this.panel.create(),this.battery.create(),this.house.create());
		el.css('bottom', 0)
		console.log(el)
		return el;
	}




//  create the homebase
	var init =function(){
		console.log('init called')
		var panel = new Panel();
		var battery = new Battery();
		var house = new House();
		var homebase = new Homebase(panel, battery, house);
		$('.sky').append(homebase.create());

		// create sun in the sky
		for(var i=0; i<NUM_SUNS; i++) {
			var sun = new Sun();
			var sunEl = sun.create();
			$('.sky').append(sunEl);
			suns.push(sun);
			
		}
	}


	return{
		init: init
	};

})();





$(document).on('ready', function() {
console.log('doc ready')
	
	Simulator.init();



});
