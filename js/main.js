window.onload = function(exports, Bezier, Mesh) {

	'use strict';	

	var methods = {
		
		
		
		
		
	},
	
	startup = function() {
		console.log("Startin' up.");
		
		// organize the scope of our plugin
		exports.Bezier = Bezier;
		window.bezier = undefined; // TODO: find good way to cleanup after plugin's globalness
		
		Mesh.startup();
		
	};
	return startup;
	
}(window.Mike, window.bezier, window.Mike.Mesh);