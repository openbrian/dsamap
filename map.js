async function init() {
    var map = L.map('map', {attributionControl: false})
    map.setView([38, -98], 5);
    var layer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxNativeZoom: 18,
            maxZoom: 19,
        }
    );
    layer.addTo(map)

    // this could also be a real url, but it would need to contain your airtable api key
    var url = "http://localhost:8000/dsa.json";

    var markers = L.markerClusterGroup();
    let response = await fetch(url);
    let data = await response.json();
    data.records.forEach((record) => {
        if (!record.hasOwnProperty('Latitude')) {
            return;
        }
        if (!record.hasOwnProperty('Longitude')) {
            return;
        }
//      let fields = record.fields;  // from airtable api
        let fields = record; // from csv export converted to json
        var popupContent = `
            <div>
                <h3>${fields['Name']}</h3>
                <h4>Status: ${fields['Status']}</h4>
                <h4>Website: ${fields['Website']}</h4>
            </div>`;
        var marker = L.marker([fields['Latitude'], fields['Longitude']]);
        marker.bindPopup(popupContent, {
            width: "350px"
        });
        markers.addLayer(marker);
    });
    map.addLayer(markers);
}

init();
