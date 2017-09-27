$(document.body).on("click","#info-btn", function() {
  var apikey = "";
  var queryURL = "http://www.bungie.net/Platform/Destiny2/Manifest/";

  // Performing our AJAX GET request
  $.ajax({
  	url: queryURL,
  	method: "GET",
  	Host: "www.bungie.net",
  	Connection: "keep-alive",
  	X-API-Key: apikey,
  	Cookie: "bungledid=B6BGVMQFOKdJsTAWEnsW/ko5xn4glmfRCAAA; bungled=2796665744958383183" 

  })
  // After the data comes back from the API
  .done(function(response){
  	console.log(results);
  });
});
