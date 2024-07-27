$('#trigger').on('click',(e)=>{
    e.preventDefault()
    $('.nav_wrap').css({
        'display' : 'block',
        'right' : '-100%'
    })
    $('.nav_wrap').animate({
        right : '0'
    },700)
    setTimeout(()=>{
        $('#trigger').css({
            'display' : 'none'
        })
    },300)
})

$('#end_btn').on('click',(e)=>{
    e.preventDefault()
    $('.nav_wrap').animate({
        right : '-100%'
    },700)
    setTimeout(()=>{
        $('#trigger').css({
            'display' : 'block'
        })
        $('.nav_wrap').css({
            'display' : 'none'
        })
    },600)
})

$(window).resize(function(){
    var width = $(window).width()

    if(width > 1024){
        $('.nav_wrap').css({'display' : 'flex'})
        $('.nav_wrap').css({'flex-direction' : 'row'})
        $('#trigger').css({'display' : 'none'})
    }else if(width < 1024){
        // $('.nav_wrap').css({'display' : 'none'})
        $('.nav_wrap').css({'flex-direction' : 'column'})
        $('.nav_wrap').css({'right' : '-100%'})
        $('#trigger').css({'display' : 'block'})

    }
})
// 새로고침할때 맨위로 복구
// history.scrollRestoration = "manual"