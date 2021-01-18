function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return JSON.parse(Httpreq.responseText);          
}
var requestUrl = "http://ip-api.com/json";
$.ajax({
  url: requestUrl,
  type: 'GET',
  success: function(json)
  {
    var data = Get("https://covid19.mathdro.id/api/countries/"+json.country);
    document.getElementById("country").innerText=json.country
    var confirmed=data['confirmed']["value"]
    var recovered=data['recovered']["value"]
    var deaths=data['deaths']["value"]
    document.getElementById("confirmed").innerText=confirmed
    document.getElementById("recovered").innerText=recovered
    document.getElementById("deaths").innerText=deaths  },
  error: function(err)
  {
    alert("country not found in database!");
  }
});
