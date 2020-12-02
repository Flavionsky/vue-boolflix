//attivazione di vue tools web
Vue.config.devtools = true;
var app = new Vue({
  el: '#app',
  data: {
    movies:[],
    inputQuery: "",
    imgsrc: "https://image.tmdb.org/t/p/w500"
  },
  methods:{
    getMovie(){

      const API_KEY = 'b6953a45324a16a37c8d476e528ee699';
  
      axios.get('https://api.themoviedb.org/3/search/movie/', {
        params:{
          'api_key' : API_KEY,
          query : this.inputQuery
        }
      }).then((mymovie)=> {
           this.movies = mymovie.data.results;
      });
    },
    imgSrc(mov){
      let mysource = this.imgsrc + mov.poster_path;
      if(mov.poster_path == null){
         mysource = "img/not-found.png";
      }
      return mysource;
    },
    flagLanguage(mov){
      let langsrc = "img/" + mov.original_language + ".svg";
      return langsrc;
    }

  }
});