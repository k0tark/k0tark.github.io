function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return JSON.parse(Httpreq.responseText);          
}
    var data = Get("https://covid19.mathdro.id/api/countries/tunisia");
    var confirmed=data['confirmed']["value"]
    var recovered=data['recovered']["value"]
    var deaths=data['deaths']["value"]
    document.getElementById("confirmed").innerText=confirmed
    document.getElementById("recovered").innerText=recovered
    document.getElementById("deaths").innerText=deaths
