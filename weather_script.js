$(document).ready(function(){
    $.getJSON('http://api.openweathermap.org/data/2.5/weather?id=1843564&appid=0bce82898713873b55aa12dc00ea599c&units=metric&lang=kr',function(data){
    
        // 오늘 날씨
        var $cTemp = data.main.temp.toFixed(0); //현재 온도
        var $minTemp = data.main.temp_min; //최저온도
        var $maxTemp = data.main.temp_max; //최고온도
        var $cWeather = data.weather[0].description; //현재 날씨
        var $cIcon = data.weather[0].icon;
        
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
        $('.main-weather').append('<img src="http://openweathermap.org/img/wn/' + $cIcon+ '@2x.png"/>' + $cWeather); //현재 날씨

        // 디테일쪽
        $('.sunrise').append(sunRise.getHours()+'시'+sunRise.getMinutes()+'분'); // 일출시간
        $('.sunset').append(sunSet.getHours()+'시'+sunSet.getMinutes()+'분'); // 일모시간
        $('.humidity').prepend($humidity); //습도
        $('.wind').append(windDeg()+'풍'+'/'+$wind); // 바람 (풍향 풍속)
        $('.feellike').append($feelsLike); // 체감온도
        $('.level').append($level); // 대기압
    
    });
});


//  시간별(12시간) 날짜별(1주일) 예보
$(document).ready(function(){
    $.getJSON('https://api.openweathermap.org/data/2.5/onecall?lat=37.450&lon=126.732&lang=kr&exclude=current,minutely&appid=0bce82898713873b55aa12dc00ea599c&units=metric' ,function(data){
        var $hourly = data.hourly //시간별
        var $daily = data.daily // 날짜별

        // 시간별 날씨 예보
        if($hourly){
            var maxIdx = 12;
            if(maxIdx > $hourly.length){
                maxIdx = $hourly.length;
            }
            var hourlyResult = "";
            for(var i = 0 ; i<maxIdx ; i++){
                var thisDate = new Date($hourly[i].dt * 1000);
                hourlyResult += '<li>';
                hourlyResult += '<div class="time_weahter">';
                hourlyResult += '<span>' + thisDate.getHours() + '시' +'</span>';
                hourlyResult += '<span>'+ '<img src="http://openweathermap.org/img/wn/' + $hourly[i].weather[0].icon  + '@2x.png"/>'+'</span>';
                hourlyResult += '<span>' + $hourly[i].temp.toFixed(1) + '°' +'</sapn>';
                hourlyResult += '</div>';
                hourlyResult += '</li>';
            }
            $('.slide').html(hourlyResult);
        }
        // 날짜별 날씨 예보
        if($daily){
            var maxIdx = 8;
            if(maxIdx > $daily.length){
                maxIdx = $daily.length;
            }
            var dailyHtml = "";
            for(var i = 1 ; i<maxIdx ; i++){
                var thisDate = new Date($daily[i].dt * 1000);
                
                function dayLabel(){
                    var week = new Array('일요일','월요일','화요일','수요일','목요일','금요일','토요일');
                    var today = thisDate;
                    var todayLabel = week[today.getDay()];

                    return todayLabel;
                }

                dailyHtml += '<tr align="center">';
                dailyHtml += '<td class="week-day">'+ dayLabel() +'</td>';
                dailyHtml += '<td class="week-icon">'+ '<img src="http://openweathermap.org/img/wn/' + $daily[i].weather[0].icon  + '@2x.png"/>' + '</td>';
                dailyHtml += '<td class="week-max">' + $daily[i].temp.max.toFixed(1) + '</td>';
                dailyHtml += '<td class="week-min">' + $daily[i].temp.min.toFixed(1) + '</td>';
                dailyHtml += '</tr>';
            }
            $('.weather_table').html(dailyHtml);
        }
    })
})