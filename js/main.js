window.onload = function(exports, Mesh, Models) {

	'use strict';	

	var _canvasEl,
		_context,
	
	methods = {
		updateScreen: function (evt) {
		
			evt.preventDefault();
		
			var newPoint = {
				x: evt.clientX || 0,
				y: evt.clientY || 0
			}
			Models.data.testMesh.right.end = newPoint;
			Models.data.testMesh.bottom.end = newPoint;
		
			_context.clearRect(0,0,_canvasEl.width,_canvasEl.height);
			Mesh.drawMesh(_context);
		}
	},
	
	startup = function() {
		console.log("Startin' up.");
		
		Mesh.startup();
		
		_canvasEl = document.getElementById("stage");
		_context = _canvasEl.getContext("2d");

		Mesh.drawMesh(_context);
		
		_canvasEl.addEventListener("mousemove", methods.updateScreen, false);
		//_canvasEl.addEventListener("touchmove", methods.updateScreen, false);
		
	};
	return startup;
	
}(window.Mike, window.Mike.Mesh, window.Mike.Models);