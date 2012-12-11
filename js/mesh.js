(function(exports, Bezier, Models, Shaders) {
	
	'use strict';
	
	var _meshData,
		_topCurve,
		_bottomCurve,
		_leftCurve,
		_rightCurve,
		
		_steps = 20,
	
	mesh = {
		
		startup: function() {
			methods.setupData(Models, "mesh1");
		},
		
		drawMesh: function(context) {
			
			/*
			for (var c in _meshData) {
				Bezier.drawCurve(
					_meshData[c].start, _meshData[c].ctrl1, _meshData[c].ctrl2, _meshData[c].end,
					10, context, "#F00"
				);
			}
			*/
			
			var startPoint, endPoint,
				ctrl1Point, ctrl2Point,
				time;
			
			for (var y = 0; y<=_steps; y++) {
			
				time = y / _steps;
			
				startPoint = Bezier.findPoint(
					_leftCurve.start, _leftCurve.ctrl1, _leftCurve.ctrl2, _leftCurve.end, time
				);
				
				endPoint = Bezier.findPoint(
					_rightCurve.start, _rightCurve.ctrl1, _rightCurve.ctrl2, _rightCurve.end, time
				);
			
				ctrl1Point = Bezier.interpolateLinear(_topCurve.ctrl1, _bottomCurve.ctrl1, time);
				ctrl2Point = Bezier.interpolateLinear(_topCurve.ctrl2, _bottomCurve.ctrl2, time);
			
				Bezier.drawCurve(
					startPoint, ctrl1Point, ctrl2Point, endPoint,
					20, context, methods.chooseColor(0.1, time)
				);
			
			}
			
			
		}
		
	};
	exports.Mesh = mesh;
	
	var	methods = {
		
		setupData: function () {
			_meshData = Models.data.testMesh;
			_topCurve = _meshData.top;
			_bottomCurve = _meshData.bottom;
			_leftCurve = _meshData.left;
			_rightCurve = _meshData.right;
		},
		
		chooseColor: function (xLoc, yLoc) {
			//return "rgba(0,128,128,0.2)";
			return "rgba(0,128,128," + Shaders.calcGradient(xLoc, yLoc)*0.2 + ")";
		
		
		}
	};
	
	
}(window.Mike, window.Mike.Bezier, window.Mike.Models, window.Mike.Shaders));