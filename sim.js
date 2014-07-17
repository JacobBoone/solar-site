//  Need logic to:
// 1. Emit random rays of energy from sun.
// 2. panel will collect x% of the energy from random rays and pass x% to battery
// 3. battery collects power from panel pulls it when < full, does not collect >= full, energy amount available viewable by color, green, yellow, red
// 4. power use in home, can increase/ decrease on clicks which increases rate from battery< if battery is 'low' power will shut off (view by house color?)

var Simulator = (function(){


// constants
	var NUM_SUNS= 1;



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
	Sun.prototype.getRays =function(){

		return Math.floor(Math.random() * (20 - 0)) + 0;

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


	}
	Battery.prototype.create =function(){
		this.el = $('<i class="batt icon-battery">');
		return this.el;
	}



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
		// for(var i=0; i<NUM_SUNS; i++) {
			var sun = new Sun();
			var sunEl = sun.create();
			var battLevel = 0;
			var houseUse = 0;
			
			$('.energy-btn').click(function(){
				houseUse-=2
				$('.house').addClass('house-shine') // need to make is so the power glow turns off when battery = 100% and no energy is in use.
				console.log('use power',  houseUse)
					})

			$('.off-btn').click(function(){
				houseUse+=2
				// put in condition where removes house on light if 100% but no energy being used
				console.log('stop use',  houseUse)
				})

			$('.sky').append(sunEl);
			 setInterval(function(){
				sunEl.remove()
				var sumRays = sun.getRays();
				battLevel+=sumRays;
				console.log(battLevel)
				var sunSize = sumRays*10;
				// console.log(sunSize)
				sunEl.css('font-size', sunSize)
				$('.sky').append(sunEl);
				console.log(sumRays)

				if (battLevel > 100){
					battLevel = 100
				}
				
// house stuff`
				console.log('prev level', battLevel)
					
				battLevel+=houseUse;

				console.log('adjusted level', battLevel)


				if (battLevel >= 95){
					$('.batt').css("color",'green')

				}
				else if (battLevel < 95 && battLevel >=60){
					$('.batt').css("color",'gold')
					// $('.house').css('color', 'orange')
					// $('.house').addClass('house-shine')
				}
				else{
					$('.batt').css("color",'red')
					$('.house').css('color', 'black')
					$('.house').removeClass('house-shine')
					// $('.house').addClass('house-shine')

				}
			},2000);

			suns.push(sun);
			
			
			
		}
	// }


	return{
		init: init
	};

})();





$(document).on('ready', function() {
console.log('doc ready')
	
	Simulator.init();




});
