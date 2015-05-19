

var heightMeters = 2;
var widthMeters = 0.2;
var scale = 20; //1 meter = [scale] pixels

var assocArr = {};

for(var x = 0; x < 4; x++) {

  for(var y = 4; y < 8; y++) {


  var ratio = x/y;
  var rad = Math.atan(ratio);
  var deg = rad*180/Math.PI;
  var dist = Math.sqrt(x*x + y*y);
  

  assocArr[x + "_" + y] = {"x":x,"y":y,"ratio":ratio,"rad":rad,"deg":deg, "dist":dist};



  }
 
}

for(var key in assocArr) {
var val = assocArr[key];
  console.log (key + " " +  val.x + " " + val.y + " " + val.ratio + " " + val.rad + " " + val.deg + " " + val.dist);


}
