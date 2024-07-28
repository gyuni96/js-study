
const keyValue = '' // api 키값 입력 

var api_basic = 'https://api.themoviedb.org/3/'
var api_key = '?api_key=' + keyValue + '&language=ko'
var img = 'https://image.tmdb.org/t/p/w500';


//메인화면 뽑기
function popularMovie(){//영화
    axios.get(api_basic + 'movie/popular' + api_key)
        .then((res)=>{
            var popularMovie = res.data.results;
            var output = ''
            for(var i = 0 ; i < popularMovie.length ; i++){
                output += '<li>'
                output += '<a href ="#" id="'+ popularMovie[i].id+'" onclick = "getIdMovie(this);return false">'
                output += '<img src = "' + img + popularMovie[i].poster_path + '" alt ="poster" class="movie_poster">'
                output += '<div class="movie_score">'
                output += '<p>'+ popularMovie[i].vote_average +'</p>'
                output += '</div>'
                output += '<div class="movie_detail">'
                output += '<p>' + popularMovie[i].title +'</p>'
                output += '<p>' + popularMovie[i].release_date + '</p>' +'</div>'
                output += '</div>'
                output += '</a>'
                output += '</li>'

                $('.slide.first').html(output)
                
            }
                
        })
        //뽑아 내기 
}
function popularTv(){//티비
    axios.get(api_basic + 'tv/popular' + api_key)
        .then((res)=>{
            var popularTv = res.data.results
            var output = ''

            for(var i = 0 ; i < popularTv.length ; i++){
                if(popularTv[i].poster_path != null){
                    output += '<li>'
                    output += '<a href="#" id="'+ popularTv[i].id+'" onclick = "getIdTv(this);return false">'
                    output += '<img src = "' + img + popularTv[i].poster_path + '" alt ="poster" class="tv_poster">'
                    output += '<div class="tv_score">'
                    output += '<p>'+ popularTv[i].vote_average +'</p>'
                    output += '</div>'
                    output += '<div class="tv_detail">'
                    output += '<p>' + popularTv[i].name +'</p>'
                    output += '<p>' + popularTv[i].first_air_date + '</p>' +'</div>'
                    output += '</div>'
                    output += '</a>'
                    output += '</li>'

                    $('.slide.second').html(output)
                
                }
                
            }
        })
}

//영화 뽑기

function moviePopular(){
    axios.get(api_basic + 'movie/popular' + api_key)
        .then((res)=>{
            var data = res.data.results
            var output = ''

            for(var i = 0 ; i<20; i++){
                output += '<a href="#" id="'+ data[i].id + '" onclick = "getIdMovie(this);return false" >'
                output += '<div>'
                output += '<div class="imgbox">'
                output += '<div class="img" style="background-image: url('+ img+data[i].poster_path +')"></div>'
                output += '<span>'
                output += '<span role="img" aria-label="rating">★</span>'
                output += data[i].vote_average +'/10'
                output += '</span>'
                output += '<div class="blank"></div>'
                output += '</div>'
                output += '</div>'
                output += '</a>'

                $('.popular_group').html(output)
            }
            
        })
}
function movieNow(){
    axios.get(api_basic + 'movie/now_playing' + api_key)
        .then((res)=>{
            var data = res.data.results
            var output = ''

            for(var i = 0 ; i<20; i++){
                output += '<a href="#" id="'+ data[i].id + '" onclick = "getIdMovie(this);return false">'
                output += '<div>'
                output += '<div class="imgbox">'
                output += '<div class="img" style="background-image: url('+ img+data[i].poster_path +')"></div>'
                output += '<span>'
                output += '<span role="img" aria-label="rating">★</span>'
                output += data[i].vote_average +'/10'
                output += '</span>'
                output += '<div class="blank"></div>'
                output += '</div>'
                output += '</div>'
                output += '</a>'

                $('.now_group').html(output)
            }
            
        })
}
function movieUpcoming(){
    axios.get(api_basic + 'movie/upcoming' + api_key)
        .then((res)=>{
            var data = res.data.results
            var output = ''

            for(var i = 0 ; i<20; i++){
                output += '<a href="#" id="'+ data[i].id + '" onclick = "getIdMovie(this);return false">'
                output += '<div>'
                output += '<div class="imgbox">'
                output += '<div class="img" style="background-image: url('+ img+data[i].poster_path +')"></div>'
                output += '<span>'
                output += '<span role="img" aria-label="rating">★</span>'
                output += data[i].vote_average +'/10'
                output += '</span>'
                output += '<div class="blank"></div>'
                output += '</div>'
                output += '</div>'
                output += '</a>'

                $('.upcoming_group').html(output)
            }
            
        })
}


// tv 뽑기
function tvPopular(){
    axios.get(api_basic + 'tv/popular' + api_key)
        .then((res)=>{
            var data = res.data.results
            var output = ''
            
            for(var i = 0 ; i<20; i++){
                if(data[i].poster_path != null){
                    output += '<a href="#" id="'+ data[i].id + '" onclick = "getIdTv(this);return false">'
                    output += '<div>'
                    output += '<div class="imgbox">'
                    output += '<div class="img" style="background-image: url('+ img+data[i].poster_path +')"></div>'
                    output += '<span>'
                    output += '<span role="img" aria-label="rating">★</span>'
                    output += data[i].vote_average +'/10'
                    output += '</span>'
                    output += '<div class="blank"></div>'
                    output += '</div>'
                    output += '</div>'
                    output += '</a>'
                    $('.popular_group').html(output)
                }
            }
        })
}
function tvNow(){
    axios.get(api_basic + 'tv/airing_today' + api_key)
        .then((res)=>{
            var data = res.data.results
            var output = ''
            
            for(var i = 0 ; i<20; i++){
                if(data[i].poster_path != null){
                    output += '<a href="#" id="'+ data[i].id + '" onclick = "getIdTv(this);return false">'
                    output += '<div>'
                    output += '<div class="imgbox">'
                    output += '<div class="img" style="background-image: url('+ img+data[i].poster_path +')"></div>'
                    output += '<span>'
                    output += '<span role="img" aria-label="rating">★</span>'
                    output += data[i].vote_average +'/10'
                    output += '</span>'
                    output += '<div class="blank"></div>'
                    output += '</div>'
                    output += '</div>'
                    output += '</a>'
                    $('.now_group').html(output)
                }
            }
        })
}


//search

$(document).ready(()=>{
    $('.search_form').submit((e)=>{
        var searchTxt = $('.search_bar').val()
        e.preventDefault()
        search(searchTxt)
    })
})

function search(searchTxt){
    var frame =`
            <div id="movie" class="content">
            <span>Movie Result</span>
            <div>
            </div>
            </div>
            <div id="tv" class="content">
            <span>TV Result</span>
            <div>
            </div>
            </div>
            `
    $('#result').html(frame)
    axios(api_basic + 'search/movie' + api_key + '&query=' + searchTxt + '&page=1')
        .then((res)=>{
            var data = res.data.results
            console.log(data)
            var output =''
            
            if(data.length == 0){
                $('#result').html(frame)
                var noresult = '<div class="no_result">검색 결과가 없습니다.</div>'
                $('#movie > div').html(noresult)
                console.log('없당!')
            }else{
                

                for(var i = 0 ; i < data.length ; i++){
                    if(data[i].poster_path != null){
                        output += '<a href="#" id="'+ data[i].id +'" onclick = "getIdMovie(this)">'
                        output += '<div>'
                        output += '<div class="imgbox">'
                        output += '<div class="img" style="background-image: url('+ img+data[i].poster_path +')"></div>'
                        output += '<div class="blank"></div>'
                        output += '<span>'
                        output += '<span role="img" aria-label="rating">★</span>'
                        output += data[i].vote_average + '/10'
                        output += '</span>'
                        output += '</div>'
                        output += '<span>'+ data[i].title +'</span>'
                        output += '<span>'+ data[i].release_date +'</span>'
                        output += '</div>'
                        output += '</a>'
                        $('#movie > div').html(output)
                    }
                    
                }
                
            }
        })
    axios(api_basic + 'search/tv' + api_key + '&query=' + searchTxt + '&page=1')
        .then((res)=>{
            var data = res.data.results
            console.log(data)
            var output = ''
            if(data.length == 0){
                var noresult = '<div class="no_result">검색 결과가 없습니다.</div>'
                $('#tv > div').html(noresult)
                console.log('없당!')
            }else{
                for(var i = 0 ; i < data.length ; i++){
                    if(data[i].poster_path != null){
                        output += '<a href="#" id="'+ data[i].id +'" onclick = "getIdTv(this)">'
                        output += '<div>'
                        output += '<div class="imgbox">'
                        output += '<div class="img" style="background-image: url('+ img+data[i].poster_path +')"></div>'
                        output += '<div class="blank"></div>'
                        output += '<span>'
                        output += '<span role="img" aria-label="rating">★</span>'
                        output += data[i].vote_average + '/10'
                        output += '</span>'
                        output += '</div>'
                        output += '<span>'+ data[i].name +'</span>'
                        output += '<span>'+ data[i].first_air_date +'</span>'
                        output += '</div>'
                        output += '</a>'
    
                        $('#tv > div').html(output)
                    }
                    
                }
                
            }
        })
}


// 클릭시 디테일 정보

function getIdMovie(t){

    var detailId = document.getElementById(t.getAttribute('id')).getAttribute('id')
    detailMovie(detailId)
    setTimeout(() => {
        detailOpen()
    }, 500);
    
}
function getIdTv(t){
    var detailId = document.getElementById(t.getAttribute('id')).getAttribute('id')
    detailTv(detailId)
    setTimeout(() => {
        detailOpen()
    }, 500);
}
function detailOpen(){
    var detail = $('#detail')
    // detail.css({'display' : 'block'})
    detail.css({'width' : '100%'})
}   
// $('#detail_end').click(()=>{
//     detailClose()
//     console.log('뿅');
// })
function detailClose(){
    var detail = $('#detail')
    
    detail.css({'width' : '0%'})
}

function detailMovie(detailId){
    axios(api_basic+'movie/'+detailId+api_key)
        .then((res)=>{
            var data = res.data
            // console.log(data.backdrop_path)
            var bgImg = 'https://image.tmdb.org/t/p/original'
            var output =''
            if(data.overview==''){
                data.overview = '한글을 지원하지 않습니다.'
            }
            output += '<div id="detail">'
            output += '<div class="wrap">'
            output += '<a href="#" id="detail_end" onclick="detailClose();return false">'
            output += '<i class="fas fa-times"></i>'
            output += '</a>'
            output += '<div class="detail_img" style="background-image : url('+ img+data.poster_path +')">'
            output += '</div>'
            output += '<div class="detail_info">'
            output += '<h3>'+ data.title +'</h3>'
            output += '<p>'+ data.tagline +'</p>'
            output += '<div>'
            output += '<span>'+ data.release_date +'</span>'
            output += '<span>'+ data.runtime +'</span>'
            output += '<span class ="genre">'+  +'</span>'
            output += '</div>'
            output += '<p>' + data.overview +'</p>'
            output += '</div>'
            output += '<div id="detail_bg" style="background-image : url('+ bgImg+data.backdrop_path +')"></div>'
            output += '</div>'

            $('nav').html(output)
            getGenres(data)
            console.log(data)
            
        })
}

function detailTv(detailId){
    axios(api_basic+'tv/'+detailId+api_key)
        .then((res)=>{
            var data = res.data
            var bgImg = 'https://image.tmdb.org/t/p/original'
            var output =''
            if(data.overview==''){
                data.overview = '한글을 지원하지 않습니다.'
            }
            output += '<div id="detail">'
            output += '<div class="wrap">'
            output += '<a href="#" id="detail_end" onclick="detailClose();return false">'
            output += '<i class="fas fa-times"></i>'
            output += '</a>'
            output += '<div class="detail_img" style="background-image : url('+ img+data.poster_path +')">'
            output += '</div>'
            output += '<div class="detail_info">'
            output += '<h3>'+ data.name +'</h3>'
            output += '<p>'+ data.tagline +'</p>'
            output += '<div>'
            output += '<span>'+ data.first_air_date +'</span>'
            output += '<span>'+ data.episode_run_time +'</span>'
            output += '<span class ="genre">'+  +'</span>'
            output += '</div>'
            output += '<p>' + data.overview +'</p>'
            output += '</div>'
            output += '<div id="detail_bg" style="background-image : url('+ bgImg+data.backdrop_path +')"></div>'
            output += '</div>'

            $('nav').html(output)
            getGenres(data)
            console.log(data)
        })
}


//장르 뽑기
function getGenres(data){
    var genres = data.genres
    var output = ''
    for(i in genres){
        output += '<span>' + genres[i].name + '</span>'
        $('.genre').html(output)

    }
}
