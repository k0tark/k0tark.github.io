let tests=document.getElementById("tests_placeholder")
let total=document.getElementById("total_placeholder")
let active=document.getElementById("active_placeholder")
let deaths=document.getElementById("deaths_placeholder")
let recovered=document.getElementById("recovered_placeholder")
let critical=document.getElementById("critical_placeholder")
function parse(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return JSON.parse(Httpreq.responseText);          
}
let data = parse("https://disease.sh/v3/covid-19/countries/tunisia?strict=true");
tests.innerText=data.tests
total.innerText=data.cases
active.innerText=data.active
recovered.innerText=data.recovered
critical.innerText=data.critical
deaths.innerText=data.deaths

