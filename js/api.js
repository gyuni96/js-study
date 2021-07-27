var api_basic = 'https://api.themoviedb.org/3/'
var api_key = '?api_key=c45b33f39988e53b642592a7241ef43b&language=ko'
var img = 'https://image.tmdb.org/t/p/w500';

//메인화면 뽑기
function popularMovie(){//영화
    axios.get(api_basic + 'movie/popular' + api_key)
        .then((res)=>{
            var popularMovie = res.data.results;
            var output = ''
            for(var i = 0 ; i < 10 ; i++){
                output += '<li>'
                output += '<a href ="#" id="'+ popularMovie[i].id+'">'
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

            for(var i = 0 ; i < 10 ; i++){
                output += '<li>'
                output += '<a href="#" id="'+ popularTv[i].id+'">'
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
        })
}

//영화 뽑기

function moviePopular(){
    axios.get(api_basic + 'movie/popular' + api_key)
        .then((res)=>{
            var data = res.data.results
            var output = ''

            for(var i = 0 ; i<20; i++){
                output += '<a href="#" id="'+ data[i].id + '">'
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
                output += '<a href="#" id="'+ data[i].id + '">'
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
                output += '<a href="#" id="'+ data[i].id + '">'
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
                    output += '<a href="#" id="'+ data[i].id + '">'
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
                    output += '<a href="#" id="'+ data[i].id + '">'
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
function tvUpcoming(){
    axios.get(api_basic + 'tv/latest' + api_key)
        .then((res)=>{
            var data = res.data.results
            var output = ''
            
            for(var i = 0 ; i<20; i++){
                if(data[i].poster_path != null){
                    output += '<a href="#" id="'+ data[i].id + '">'
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
            }
        })
}
