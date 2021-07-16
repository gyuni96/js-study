$(function(){
    var $slider = $('.slider'),
        $firstSlide = $slider.find('li').first() // 첫번째 슬라이드
        .stop(true).animate({'opacity':1},200); // 첫번째 슬라이드만 보이게 하기
    var $sliderHeight = $('.slider li img').height()
    var $sliderWidth = $('.slider li img').width()
    $slider.css({'height' : $sliderHeight, 'width' : $sliderWidth})  
    $('.slider li').css({'height' : $sliderHeight, 'width' : $sliderWidth}) 
    
    
    
    function NextSlide(){ // 다음 버튼 함수
        stopSlide();startSlide(); //타이머 초기화
        $firstSlide = $slider.find('li').first() // 첫 번째 슬라이드
        .appendTo($slider); // 맨 마지막으로 보내기
        var $lastSlide = $slider.find('li').last() // 맨 마지막으로 보낸 슬라이드
        .stop(true).animate({'opacity':0},400); // fadeOut시키기
        $firstSlide = $slider.find('li').first()// 맨 처음 슬라이드
        .stop(true).animate({'opacity':1},400);// fadeIn 시키기
    }
    startSlide(); // 자동 슬라이드 시작
    var theInterval;

    function startSlide() {
        theInterval = setInterval(NextSlide, 3000); //자동 슬라이드 설정
    }

    function stopSlide() { //자동 멈추기
        clearInterval(theInterval);
    }
    
    $('.slider').hover(function(){ //마우스 오버시 슬라이드 멈춤
        stopSlide();
    }, function (){
        startSlide();
    });

});