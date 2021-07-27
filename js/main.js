//슬라이드
$(document).ready(function(){
    var firstImgs;
    var firstImgCount;
    var firstImgPosition = 1;
    var secondImgs;
    var secondImgCount;
    var secondImgPosition = 1;

    firstImgs = $('.slide.first');
    firstImgCount =  firstImgs.children().length;
    secondImgs = $('.slide.second');
    secondImgCount =  secondImgs.children().length;

    $('.left.first').click(function(e){
        e.preventDefault()
        firstBack()
    })
    $('.right.first').click(function(e){
        e.preventDefault()
        firstNext()
    })
    $('.left.second').click(function(e){
        e.preventDefault()
        secondBack()
    })
    $('.right.second').click(function(e){
        e.preventDefault()
        secondNext()
    })

    function firstBack(){
        if(1 < firstImgPosition){
            firstImgs.animate({
                left:'+=165px'
            });
            firstImgPosition--;
        }        
    }
    function firstNext(){
        if(firstImgCount-5 > firstImgPosition){
            firstImgs.animate({
                left:'-=165px'
            });
            firstImgPosition++;
        }
    }
    function secondBack(){
        if(1 < secondImgPosition){
            secondImgs.animate({
                left:'+=165px'
            });
            secondImgPosition--;
        }
    }
    function secondNext(){
        if(secondImgCount-3 > secondImgPosition){
            secondImgs.animate({
                left:'-=165px'
            });
            secondImgPosition++;
        }
    }
})

//데이터 호출

//영화
popularMovie()
//tv
popularTv()