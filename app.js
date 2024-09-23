const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name:""
    };
  },
  methods:{
    consy(){
       this.counter++;
    },
    consymeno(){
      this.counter--;
    },
    setName(event,cognome){
      this.name = event.target.value + ' ' + cognome
    },
    handlesub(event){
      event.preventDefault();
      alert("dioboia!");
    }
  }
});

app.mount('#events');
