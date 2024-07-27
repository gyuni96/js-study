$(function(){

    //헤드
    $(window).on('scroll', function(e){
        var scroll_top = $(window).scrollTop()

        if(scroll_top > 0){
            $('.gnb').css({background:'rgba(255, 255, 255, 1)'})
            $('.gnb').css({animationName : 'fade'})
            $('.gnb').css({animationDuration : '0.3s'})
            $('.gnb .menu_list li a').css({color : '#000'})
            $('#trigger').css({'color':'#000'})
            $('.logo').css({'color':'#000'})
            
        }else if(scroll_top == 0){
            $('.gnb').css({background:'rgba(255, 255, 255, 0)'})
            $('.gnb').css({animationName : 'reversefade'})
            $('.gnb').css({animationDuration : '0.3s'})
            
            $('.gnb .menu_list li a').css({'color' : '#fff'})
            $('#trigger').css({'color':'#fff'})
            $('.logo').css({'color':'#fff'})

        }
    })
    
    // 모바일 메뉴
    var menuDuration = 700
    // 열기
    function showMenu(){
        $('.mobile_list').css({'display' : 'block'})
        $('.mobile_list').css({'right' : '-100%'})
        $('.blank').css({'display' : 'block'})

        $('.mobile_list').animate({right : '0'},400)
    }
    // 닫기
    function hideMneu(){

        $('.mobile_list').animate({right : '-100%'},400)

        setTimeout(function(){
            $('.mobile_list').css({'display' : 'none'})
            $('.blank').css({'display' : 'none'})
        },400)
        
    }

    $('#trigger').on('click', function(e){
        e.preventDefault()
        showMenu()
    })
    $('.end_btn').on('click', function(e){
        e.preventDefault()
        hideMneu()
    })
    $(window).resize(function(){
        var width = $(window).width()

        if(width > 766){
            $('.mobile_list').css({'display' : 'none'})
        }
    })

    // top버튼

    // top버튼 생겻다 없어졋다
    $(window).scroll(function(){
        if($(this).scrollTop() > 400){
            $('.btn.top').fadeIn()
        }else{
            $('.btn.top').fadeOut()
        }
    })
    // 누르면 위로
    $('.btn.top').click(function(e){
        e.preventDefault()
        $('html,body').animate({
            scrollTop : 0
        },600)
        return false
    })
})

// 새로고침할때 맨위로 복구
history.scrollRestoration = "manual"