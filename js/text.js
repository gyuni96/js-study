
// 글씨 차례대로 타이포
function motto(){
    var typingBool = false
    var typingIdx = 0
    var typingTxt = $('.typing-txt').text()

    typingTxt = typingTxt.split('')

    if(typingBool == false){
        typingBool=true
        var tyInt = setInterval(typing,150)
        // 실행안되면 반복실행
    }
    function typing(){
        if(typingIdx < typingTxt.length){
            $('.typing').append(typingTxt[typingIdx])
            typingIdx++
        }else{
            clearInterval(tyInt)
            // 반복종료
        }
    }
}

