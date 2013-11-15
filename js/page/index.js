/**
 * Created with JetBrains PhpStorm.
 * User: ZoM
 * Date: 14/11/13
 * Time: 10:26 PM
 * To change this template use File | Settings | File Templates.
 */

function initialize() {
    window.geocoder = new google.maps.Geocoder();
    var mapOptions = {
        center: new google.maps.LatLng(49.19058, -123.10936),
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    window.locationSelectionMap = new google.maps.Map(document.getElementById("location-map"), mapOptions);
    getLocationSelectionMarkers();
}
google.maps.event.addDomListener(window, 'load', initialize);

function getLocationSelectionMarkers() {
    var addresses = [
        "9151 Van Horne Way, Richmond, BC V6X 1W2",
        "Suite 130-5800 Minoru Blvd, Richmond, BC V6X 2A9",
        "13100 Mitchell Road, Richmond, BC V6V 1M8",
        "#138-4551 No.3 RD Richmond, B.C, V6X 2C3"
    ];
    $.each(addresses, function(index, address){
        window.geocoder.geocode( { 'address': address}, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                var marker = new google.maps.Marker({
                    map: window.locationSelectionMap,
                    position: results[0].geometry.location
                });
            } else {
                console.log('Geocode was not successful for the following reason: ' + status);
            }
        });
    });
}

