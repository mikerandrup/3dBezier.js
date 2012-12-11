(function(exports) {
	
	'use strict';
	
	var models = {
		data: {
			testMesh: {
				top: {
					start: { x: 100, y: 100 },
					ctrl1: { x: 200, y: -50 },
					ctrl2: { x: 300, y: 50  },
					end:   { x: 400, y: 100 }
				},
				bottom: {
					start: { x: 100, y: 400 },
					ctrl1: { x: 150, y: 450 },
					ctrl2: { x: 300, y: 500 },
					end:   { x: 400, y: 400 }
				},
				left: {
					start: { x: 100, y: 100 },
					ctrl1: { x: 0,   y: 200 },
					ctrl2: { x: 0,   y: 300 },
					end:   { x: 100, y: 400 }
				},
				right: {
					start: { x: 400, y: 100 },
					ctrl1: { x: 500, y: 200 },
					ctrl2: { x: 425, y: 400 },
					end:   { x: 400, y: 400 }
				}
			}
		},

		classes: {
	
		},
		
		instances: {
			
		}
	};
	exports.Models = models;
	
}(window.Mike));