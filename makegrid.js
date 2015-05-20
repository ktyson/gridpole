exports.makeGrid = function() {

	var assocArr = {};

	for(var x = 0; x < 12; x++) {

			  for(var y = 1; y < 50; y++) {


			  var ratio = x/y;
			  var rad = Math.atan(ratio);
			  var deg = rad*180/Math.PI;
			  var dist = Math.sqrt(x*x + y*y);

			  assocArr[x + "_" + y] = {"x":x,"y":y,"ratio":ratio,"rad":rad,"deg":deg, "dist":dist};

		  }
	}	
	return assocArr;
}


