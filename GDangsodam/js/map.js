var HOME_PATH = window.HOME_PATH || '.';
var dangsodam = new naver.maps.LatLng(37.448245, 126.695597),
    map = new naver.maps.Map('map', {
        center: dangsodam.destinationPoint(0,6),
        zoom: 25
    }),
    marker = new naver.maps.Marker({
        map: map,
        position: dangsodam.destinationPoint(6,5)
    });

var contentString = [
        '<div class="map_info">',
        '<a href="https://map.naver.com/v5/entry/place/1286649585?c=14103689.5552968,4501777.1553890,13,0,0,0,dh&placePath=%2Fhome%3Fentry=plt" target="_blank">',
        '<h3>당소담 사진관</h3>',
        '<p>인천광역시 남동구 인주대로 522번길 53</p>',
        '<p>010-5497-1157</p>',
        '</a>',
        '</div>'
    ].join('');

var infowindow = new naver.maps.InfoWindow({
    content: contentString,
    borderWidth: 0,
    disableAnchor: true,
    backgroundColor: 'transparent',
});

naver.maps.Event.addListener(marker, "click", function(e) {
    if (infowindow.getMap()) {
        infowindow.close();
    } else {
        infowindow.open(map, marker);
    }
});

infowindow.open(map, marker);