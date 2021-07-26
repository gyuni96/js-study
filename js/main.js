// $(document).ready(()=>{
//     $('#searchForm').on('submit', (e)=>{
//         let serachText = $('#searchTxt').val()
//         getMovies(serachText)
//         e.preventDefault();
//     })
// })
// function getMovies(serachText){
//     axios.get('https://api.themoviedb.org/3/search/movie/550?api_key=c45b33f39988e53b642592a7241ef43b' + serachText)
//         .then((res)=>{
//             console.log(res)
//             let movies = res.data.serachText
//             let output = ''
//             console.log(movies.Title)
//         })
//         .catch((err)=>{
//             console.log(err)
//         })
// }
var api_basic = 'https://api.themoviedb.org/3/'
var api_key = '?api_key=c45b33f39988e53b642592a7241ef43b&language=ko'
var img = 'https://image.tmdb.org/t/p/' // 사이즈 추가할거 / 
function popularMovie(){
    axios.get(api_basic + 'movie/popular' + api_key)
        .then((res)=>{
            var upmovies = res.data.results;
            var output = ''
            for(i in upmovies){
                output += '<div>'+upmovies[i].title+'</div>'

                $('#movies').html(output)
            }
            // console.log(upmovies)

            
        })
        //뽑아 내기 
}
popularMovie()

function getImg(){
    axios.get(api_basic+'movie/'+ 아이디 +'/images'+api_key)
        .then((res)=>{
            var img = res.data.posters
            var output = ''
            for(i in img){
                output += '<img src="https://image.tmdb.org/t/p/w500/' + img[i].file_path + '" alt = "poster">'
                $('#poster').html(output)
            }
        })
}
getImg()