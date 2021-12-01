function initMap() {
    const loc = { 
        lat: 47.897508,
        lng: 106.925983
    }

    const map = new google.maps.Map (
        document.querySelector(".map"),
        {
            zoom: 14,
            center: loc
        })

    const marker = new google.maps.Marker (
        {
        position: loc,
        map: map
    })
};
