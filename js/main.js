$(function(){


    // 텍스트 애니메이션 호출
    $(window).one('scroll',function(){
        motto()
    }) // 스크롤할때 한번만 이벤트

    //인스타 more
    $('.more_btn').click(function(e){
        e.preventDefault()
        var doc = $(document).width()
        if(doc >= 1024){
            $('.insta_content').css({height : '1970px'})
        }else if(doc < 1024 && doc >767){
            $('.insta_content').css({height : '1600px'})
        }else if(doc < 765 && doc > 480){
            $('.insta_content').css({height : '1975px'})
        }else{
            $('.insta_content').css({height : '1980px'})
        }
        $('.more_btn').hide()
    })
})

// 인스타그램 호출
var token = 'IGQVJXZAVNRQTV1ZAzA3UE9WUFlpbjZAjYldrUnhOSzNJTHFDdmNrdG8ySzlvNUFncDhsRjdZASUlET2JWUXFGYVQtTzRhTW05V0ZAOc0t3S25FSmRDa0FmYmJlUFFBdms1dVk5bFdYdk1OMWQtcmVaeGhYdwZDZD'
var feed = new Instafeed({
    target : 'gallery',
    template : '<li class="box"><a href="{{link}}"><img title="{{caption}}" src="{{image}}" sizes="cover" /></a></li>',
    accessToken: token
});
feed.run();