(function(exports) {
	
	'use strict';
	
	var shaders = exports.Shaders = {
		calcGradient: function (xLocation, yLocation) {
			
			// most intense in the center
			var xPeak = 0.5,
				yPeak = 0.5,
				xIntensity = 1 - Math.abs(xLocation - xPeak),
				yIntensity = 1 - Math.abs(yLocation - yPeak);
				
			return xIntensity * yIntensity;
		}

	},
	
	methods = {
		
	}
	
	
}(window.Mike));