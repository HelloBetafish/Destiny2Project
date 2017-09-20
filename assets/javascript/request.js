// Include the request npm package (Don't forget to run "npm install request" in this folder first!)
var request = require("request");

const HOST = 'www.bungie.net/Platfom/Destiny2/'

destinyKey = "6b0538962054452e841ece2b6229c1d1";

var baseRequest = request.defaults({headers: {'X-API-Key': destinyKey}});

// Need to figure out how to make ajax calls in node.js

$.ajax({
  url: baseRequest("http://www.bungie.net/Platform/Destiny2/Manifest/", callback),
  method: "GET"
}).done(function(response) {
  console.log(response);
});

// Example code from http://destinyapiguide.azurewebsites.net/firstRequest
	// app.get('/test',function(req,res) {
	//   if (!err && response.statusCode < 400) {
	//    baseRequest(HOST + '2/Stats/GetMembershipIdByDisplayName/' + credentials.defaultUserName + '/',
	//      function (err, response, body) {

	// 	   var context = {};
	// 		   context.test = JSON.stringify(JSON.parse(body), null, 4);
	// 		   res.render('test', context);
	// 	    });
	// 	  }
	// 	});