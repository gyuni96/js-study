$(document).ready(function(){
    $.getJSON('http://api.openweathermap.org/data/2.5/weather?id=1843564&appid=0bce82898713873b55aa12dc00ea599c&units=metric&lang=kr',function(data){
    
        // 오늘 날씨
        var $cTemp = data.main.temp.toFixed(0); //현재 온도
        var $minTemp = data.main.temp_min; //최저온도
        var $maxTemp = data.main.temp_max; //최고온도
        var $cWeather = data.weather[0].description; //현재 날씨
        var $sunRise = data.sys.sunrise; // 일출 시간
        var $sunSet = data.sys.sunset; //일몰 시간

        var sunRise = new Date($sunRise * 1000);
        var sunSet = new Date($sunSet * 1000);
        // 시간ㅇ변환 유닉스 시간

        var $humidity = data.main.humidity; //습도
        
        var $wind = data.wind.speed ; //풍향 풍속
        var $feelsLike = data.main.feels_like; // 체감온도
        var $level = data.main.pressure; // 대기압

        function windDeg(){
            var a = data.wind.deg;
            if(a==360 && a<45){
                return('북')
            }if(a<=45 && a<90){
                return('북동')
            }if(a<=90 && a<135){
                return('동')
            }if(a<=135 && a<180){
                return('남동')
            }if(a<=180 && a<225){
                return('남')
            }if(a<=225 && a<270){
                return('남서')
            }if(a<=270 && a<315){
                return('서')
            }if(a<=315 && a<360){
                return('북서')
            }
        };  

        // 메인 날씨
        $('.main-temp').prepend($cTemp); //현재 온도
        $('.top_weather_box > ul > li:last-child').append($minTemp); //최저온도
        $('.top_weather_box > ul > li:first-child').append($maxTemp); //최고온도
        $('.main-weather').append($cWeather); //현재 날씨

        // 디테일쪽
        $('.sunrise').append(sunRise.getHours()+'시'+sunRise.getMinutes()+'분'); // 일출시간
        $('.sunset').append(sunSet.getHours()+'시'+sunSet.getMinutes()+'분'); // 일모시간
        $('.humidity').prepend($humidity); //습도
        $('.wind').append(windDeg()+'풍'+'/'+$wind); // 바람 (풍향 풍속)
        $('.feellike').append($feelsLike); // 체감온도
        $('.level').append($level); // 대기압
    
    });
});