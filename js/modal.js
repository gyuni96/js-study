// modal 
$(function(){
    //모달창 열기
    $('.modal_btn').on('click',function(e){
        e.preventDefault()
        $('#modal').css({'display':'block'})
    })
    //종료
    $('#modal .btn').on('click',function(e){
        e.preventDefault()
        $('#modal').css({'display':'none'})
    })
})

$(document).ready(function(){

            
    $.getJSON('https://gist.githubusercontent.com/Gyunnam/36eea8d690e03323a110fb04058e5d4e/raw/fefd5805b146097b0f75b0c8a6d0557043cc8461/color.json', function(data){
        var str = ''
        
        var maxIdx = 53
        for(var i = 0 ; i < maxIdx; i++){
            str += '<li>'
            str += '<div>'
            str += '<p>' + data.color[i].num + '</p>'
            str += '<p>' + data.color[i].kr + '</p>'
            str += '</div>'
            str += '<div style = "background-color:' + data.color[i].code + ';"></div>'
        }
        console.log(str)
        $('#modal ul').html(str)
    })    
})