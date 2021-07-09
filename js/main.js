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
            $('.insta_content').css({height : '1600px'})
        }else if(doc < 1024 && doc >767){
            $('.insta_content').css({height : '1280px'})
        }else{
            $('.insta_content').css({height : '1600px'})
        }
        $('.more_btn').hide()
    })
})