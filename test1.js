var pts = require ("./makegrid.js");


var ptsArr = pts.makeGrid();
for(var key in ptsArr) {

	var val = ptsArr[key];
	  console.log (key + " " +  val.x + " " + val.y + " " + val.ratio + " " + val.rad + " " + val.deg + " " + val.dist);


}

