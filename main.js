function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}
var data = JSON.parse(Get("https://covid19.mathdro.id/api/countries/tn"));
var confirmed=data['confirmed']["value"];
var recovered=data['recovered']["value"];
var deaths=data['deaths']["value"];
document.getElementById("confirmed").innerText=confirmed;
document.getElementById("recovered").innerText=recovered;
document.getElementById("deaths").innerText=deaths;
