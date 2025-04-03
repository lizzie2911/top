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
        lat: 45.109544,
        lng: 7.641281,
        zoom: 13,
        title: "Juventus Stadium",
        nr: 1,
        user: "vintiyannick",
    },
    {
        nr: 2,
        title: "Schrammsteinaussicht",
        user: "Ellinnaa",
        lat: 50.914167,
        lng: 14.203333,
        zoom: 15,
    },
    {
        nr: 3,
        title: "Boston",
        user: "samuesl",
        lat: 42.35,
        lng: -71.05,
        zoom: 13,
    },
    {
        nr: 4,
        title: "Grevelingen",
        user: "Gregorysprenger2001",
        lat: 51.755833,
        lng: 3.8925,
        zoom: 11,
    },
    {
        nr: 5,
        title: "Puerto Escondido",
        user: "lukas6020",
        lat: 15.87,
        lng: -97.07,
        zoom: 13,
    },
    {
        nr: 6,
        title: "Vancouver",
        user: "johannauniibk",
        lat: 49.28098,
        lng: -123.12244,
        zoom: 11,
    },
    {
        nr: 7,
        title: "Istanbul",
        user: "sam-uze",
        lat: 41.01,
        lng: 28.96,
        zoom: 13,
    },
    {
        nr: 8,
        title: "La Push",
        user: "webmapping",
        lat: 47.908683,
        lng: -124.636604,
        zoom: 13,
    },
{

    nr: 9,
    title: "Konstanz",
    user: "cs4151",
    lat: 47.6633,
    lng: 9.175,
    zoom: 14,
},
    {
       title: "Azoren",
  user: "pauly0602",
  nr: 10,
  lat: 37.77,
  lng: -25.46,
  zoom: 11,
    },
    {
        nr: 11,
        title: "Sardinien",
        user: "lujehle",
        lat: 40.027778,
        lng: 9.069444,
        zoom: 7,
    },
    {
        nr: 12,
        title: "Axamer Lizum",
        user: "benmertens",
        lat: 47.193889,
        lng: 11.302222,
        zoom: 11,
    },
     {
    nr: 13,
    title: "Buenos Aires",
    user: "johaschra",
    lat: -34.603486,
    lng: -58.381639,
    zoom: 13,
    },
    {
        nr: 16,
        title: "Provence",
        user: "lizzie2911",
        lat: 43.5,
        lng: 5.5,
        zoom: 13,
    },
    {
        nr: 17,
        title: "Ulriken",
        user: "Kathleenuniibk",
        lat: 60.383333,
        lng: 5.383333,
        zoom: 13,
    },

    {nr: 18,
    title: "Volksparkstadion",
    user: "Pruje839",
    lat: 53.587153,
    lng: 9.898643,
    zoom: 12,
    },
    {
        nr: 20,
        title: "Singapur",
        user: "florentinebusch",
        lat: 1.283333,
        lng: 103.833333,
        zoom: 11,
    },
    {
nr: 21,
title: "Tafraoute",
user: "moplatt",
lat: 29.72222,
lng: -8.97194,
zoom: 11,
    },
{
    nr: 23,
    title: "Habicht",
    user: "fritzcrone",
    lat: 47.043611,
    lng: 11.289444,
    zoom: 15
},
    {
        nr: 24,
    title: "Sevilla",
    user: "StephanPumpernik",
    lat: 37.3925,
    lng: -5.9925,
    zoom: 13,
    },

    {
        lat: 49.577037,
        lng: 6.114122,
        zoom: 11,
        title: "Stade de Luxembourg",
        nr: 25,
        user: "PriPh625",
    },
    {
        title: "Kalmit",
        nr: 26,
        user: "Basti-10",
        zoom: 13,
        lat: 49.31,
        lng: 8.08,
    },
    {
        
nr: 29,
    title: 'Utrecht',
    user: 'jessimeteo',
    lat: 52.088889,
    lng: 5.115556,
    zoom: 13
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