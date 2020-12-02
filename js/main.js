//attivazione di vue tools web
Vue.config.devtools = true;
var app = new Vue({
  el: '#app',
  data: {

  },
  mounted(){
    //prelevo i dati tramite axios
    axios.get('').then(()=> {
    });

  },
  computed:{
  }
});