let tests=document.getElementById("tests_placeholder")
let total=document.getElementById("total_placeholder")
let active=document.getElementById("active_placeholder")
let newCases=document.getElementById("new_placeholder")
let newDeaths=document.getElementById("newdeaths_placeholder")
let deaths=document.getElementById("deaths_placeholder")
let recovered=document.getElementById("recovered_placeholder")
let critical=document.getElementById("critical_placeholder")
let td=document.getElementById("todayDeaths")
let tc=document.getElementById("todayCases")
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
newDeaths.innerText=data.todayDeaths
newCases.innerText=data.todayCases
if ((data.todayCases==0)&& (data.todayDeaths==0)){
    newCases.innerHTML="<p>pas de données encore disponibles</p>"
    newDeaths.innerHTML="<p>pas de données encore disponibles </p>"
    td.classList.add("nodata");
    tc.classList.add("nodata");


}