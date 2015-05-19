var http = require("http"),
    url = require("url"),
    path = require("path"),
    fs = require("fs"),
    port = process.argv[2] || 8000;

var getData = require("./logSearch");


http.createServer(function(request, response) {

  
  var uri = url.parse(request.url).pathname, 
    filename = path.join(process.cwd(), uri),
    pathkey = uri.substr(uri.lastIndexOf('/') + 1);

//console.log("ok", uri, filename, pathkey);

      if (pathkey == "search") {
        var incoming = '';

        request.on('data', function(data) {

          incoming += data;
//console.log(" we got: " + incoming);
        
        });

        request.on("end", function() {

           if(incoming) {
//console.log("start", new Date());
            getData.logSearch(JSON.parse(incoming), function(arraydata) {

              
//console.log("results", arraydata);
  //   response.setHeader("Content-Type", "text/plain");
  //   response.setHeader("Access-Control-Allow-Origin", "*");   
  //   response.end(JSON.stringify(mainObj.objArray)); 
//console.log("end", new Date());
              response.end(JSON.stringify(arraydata));
            });

            
            
          } 
                
        });


    } else {


      //STATIC FILES
      if (fs.statSync(filename).isDirectory()) filename += '/index.html';

      fs.readFile(filename, "binary", function(err, file) {
        if(err) {        
          response.writeHead(500, {"Content-Type": "text/plain"});
          response.write(err + "\n");
          response.end();
          return;
        }

        response.writeHead(200);
        response.write(file, "binary");
        response.end();
      });


    }

}).listen(parseInt(port, 10));

console.log("Server running at\n  => http://localhost:" + port + "/\nCTRL + C to shutdown");
