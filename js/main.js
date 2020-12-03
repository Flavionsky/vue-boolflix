//attivazione di vue tools web
Vue.config.devtools = true;
var app = new Vue({
  el: '#app',
  data: {
    movies:[],
    display: null,
    inputQuery: "",
    nextPage: 1,
    isActive: false,
    imgsrc: "https://image.tmdb.org/t/p/w500"
  },
  methods:{
    getMovie(){

      const API_KEY = 'b6953a45324a16a37c8d476e528ee699';

        axios.get('https://api.themoviedb.org/3/search/movie/', {
          params:{
            'api_key' : API_KEY,
            query : this.inputQuery,
            page : this.nextPage
          }
        }).then((mymovie)=> {
             this.movies = mymovie.data.results;
        });
        axios.get('https://api.themoviedb.org/3/search/tv/', {
            params:{
              'api_key' : API_KEY,
              query : this.inputQuery,
              page : this.nextPage
            }
          }).then((tv)=> {
              this.movies = this.movies.concat(tv.data.results);
          });
          this.isActive = true;
    },
    imgSrc(mov){
      let mysource = this.imgsrc + mov.poster_path;
      if(mov.poster_path == null){
         mysource = "img/not-found.png";
      }
      return mysource;
    },
    myNext(){
      this.nextPage++;
      this.getMovie();
    },
    myBack(){
      this.nextPage--;
      if(this.nextPage == 0){
        this.nextPage = 1;
      }
      this.getMovie();
    },
    changeTitle(mov){
      let title = mov.title;
      if(!mov.title){
        title = mov.name;
      }
      return title;
    }
  }
});