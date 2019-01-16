export default (function initMap() {
    var e = {
            lat: 34.864382,
            lng: -111.795104,
        },
        t = new google.maps.Map(document.getElementById('map'), {
            zoom: 10,
            center: e,
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.SMALL,
                position: google.maps.ControlPosition.LEFT_TOP,
            },
        });
    new google.maps.Marker({
        map: map,
        animation: google.maps.Animation.DROP,
        position: e,
        map: t,
    });
});
