//capture enter key press
document.getElementById('coords').addEventListener('keypress', function (e) {
    e.preventDefault // Do not submit form
    if (e.which == 13) { // check if enter is pressed
        const lat = document.getElementById('paw-form-lat').value || 0;
        const lon = document.getElementById('paw-form-lon').value || 0;
        const max = document.getElementById('paw-form-max').value || 0;
        station(lat, lon, max);
    }
});


function station(latitude, longitude, maxResults) {

    latitude = latitude || 0;
    longitude = longitude || 0;
    maxResults = maxResults || 0;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {

            let response = JSON.parse(xhttp.response);
            processResponse(response, maxResults);

        }
    }

    xhttp.open("GET", `https://api.openchargemap.io/v3/poi/?output=json&latitude=${latitude}&longitude==${longitude}&maxresults==${maxResults}`, true);
    xhttp.send();
}

function processResponse(response, maxResults) {
    let tbody = document.getElementById("tbody");
    let country, lat, lon, address;

    for (let i = 0; i < maxResults; i++) {
        country = response[i]["AddressInfo"]["Country"]["ISOCode"];
        lat = response[i]["AddressInfo"]["Latitude"];
        lon = response[i]["AddressInfo"]["Longitude"];
        address = response[i]["AddressInfo"]["AddressLine1"];

        addLine(tbody, country, lat, lon, address);
    }
}

function addLine(tableBody, country, lat, lon, address) {

    let row = tableBody.insertRow(0);
    row.insertCell(0).innerHTML = country;
    row.insertCell(1).innerHTML = lat;
    row.insertCell(2).innerHTML = lon;
    row.insertCell(3).innerHTML = address;

}