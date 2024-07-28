$(function(){


    // 텍스트 애니메이션 호출
    $(window).one('scroll',function(){
        motto()
    }) // 스크롤할때 한번만 이벤트

    //인스타 more
    $('.more_btn').click(function(e){
        e.preventDefault()
        var doc = $(document).width()
        if(doc >= 1024){ // pc
            $('.insta_content').css({height : '1970px'})
        }else if(doc < 1024 && doc >767){ //테블릿
            $('.insta_content').css({height : '1580px'})
        }else if(doc < 765 && doc > 480){ //모바일
            $('.insta_content').css({height : '1975px'})
        }else{ //모바일
            $('.insta_content').css({height : '1980px'})
        }
        $('.more_btn').hide()
    })
})

// 인스타그램 호출
var token = '' // token 값 입력 만료되서 제거 
var feed = new Instafeed({
    target : 'gallery',
    template : '<li class="box"><a href="{{link}}"><img title="{{caption}}" src="{{image}}" sizes="cover" alt ="instagram_img"/></a></li>',
    accessToken: token
});
feed.run();
