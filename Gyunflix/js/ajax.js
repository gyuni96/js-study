var api_basic = 'https://api.themoviedb.org/3/'
var api_key = '?api_key=c45b33f39988e53b642592a7241ef43b&language=ko'
var img = 'https://image.tmdb.org/t/p/w500';

popularMovie()
popularTv()
//메인화면 뽑기
function popularMovie(){//영화
    $.ajax({
        url: api_basic + 'movie/popular' + api_key,
        method : 'GET',
        success : function(res){
            console.log(res)
            var popularMovie = res.results;
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
        }

    })
        //뽑아 내기 
}
function popularTv(){//티비

    $.ajax({
        url: api_basic + 'tv/popular' + api_key,
        method : 'GET',
        success : function(res){
            var popularTv = res.results
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
        }
    })
}
