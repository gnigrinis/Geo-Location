var x = document.getElementById("button");
x.addEventListener("click", findPosition);

function findPosition(){
    var output = document.getElementById('map');
    // Verifying if GPS is compatible
    if (navigator.geolocation) {
        document.getElementById('mapid').innerHTML = "Navigator is compatible with GPS";
    }else{
        document.getElementById('mapid').innerHTML = "Navigator is not compatible with GPS";
    }
    // Get position of navigator
    function location(position){
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        var mymap = L.map('mapid').setView([latitude, longitude], 13);
        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'pk.eyJ1IjoiZ25pZ3JpbmlzIiwiYSI6ImNrcjdsMTRicTNxZ3Eyb21uOGxkeHdxeXIifQ.jzrFhIl7qBF0QqqGthJdzg'
        }).addTo(mymap);
        var marker = L.marker([latitude, longitude],).addTo(mymap);
        

        L.marker([latitude, longitude]).addTo(mymap)
            .bindPopup('You are Here.')
            .openPopup();
    }
    function error(){
        document.getElementById('mapid').innerHTML = "Error loading map. Please try again";
    }
    navigator.geolocation.getCurrentPosition(location,error);
}