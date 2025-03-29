/*
Script for favourite place
*/

let lat = 43.5;
let lng = 5.5;
let zoom = 13;

let stop = {
    number: 16,
    title: "Provence",
    user: "lizzie2911",
    lat: 43.5,
    lng: 5.5,
    zoom: 13,
};

const STOPS = [
    {
        number: 16,
        title: "Provence",
        user: "lizzie2911",
        lat: 43.5,
        lng: 5.5,
        zoom: 13,
    },

];

// Map initialisation
let map = L.map('map');

// Background map defined
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Ettapen:
for (let i=0; i < STOPS.length; i++)  {
    //console.log(i, STOPS[i], STOPS[i].title);
    // create Marker
    let marker = L.marker([STOPS[i].lat, STOPS[i].lng]).addTo(map);

    // Popup defined
    marker.bindPopup(`
        <h2> ${STOPS[i].title} </h2>
        <ul>
            <li> Geogr. Breiter:${STOPS[i].lat.toFixed(5)}° </li>
            <li> Geogr. Länger: ${STOPS[i].lng.toFixed(5)}° </li>
        </ul>
        `);
    
    // auf eigene Etappe blicken und Popup öffnen
    if (STOPS[i].user == "lizzie2911") {
        console.log(STOPS[i].user, "meine Etappe :)")
        map.setView([STOPS[i].lat, STOPS[i].lng], STOPS[i].zoom);
        marker.openPopup();
    }

    //Pulldownmenü befüllen
    let option = document.createElement("option");
    option.value = STOPS[i].user;
    option.text = STOPS[i].title;
    if (STOPS[i].user == "lizzie2911") {
        option.selected = true;
    }
    document.querySelector("#pulldown select").appendChild(option);
    
}


// auf Änderungen beim Pulldown reagieren
document.querySelector("#pulldown select").onchange = function(evt) {
    let url = `https://${evt.target.value}.github.io/nz`;
    //console.log(evt.target.value);
    //console.log(url);
    window.location = url;
}