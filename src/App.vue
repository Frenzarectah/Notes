<script setup>
  import { ref } from 'vue';
  const id = ref(1);
  const showModal = ref(false);
  const error = ref("");
  const newNote = ref("");
  const notes = ref([]);

  const randomLightColor = () => {
  return `hsl(${Math.random() * 360}, 100%, 75%, 0.20)`;
}

  const addNotes = () =>{
   if(newNote.value.trim.length < 10){
    error.value = "The note needs minimum 10 character";
    return
   }
    notes.value.push({
      id : id.value++,
      text : newNote.value,
      date : new Date(),
      color: randomLightColor()
  })
  showModal.value = false;
  newNote.value = "";
  error.value = "";
  }
</script>
<template>
  <main>
    <div v-if="showModal" class="overlay">
      <div class="modal">
        <textarea v-model="newNote" name="note" id="note" cols="30" rows="10"></textarea>
        <p v-if="error">{{ error }}</p>
          <button @click="addNotes">Add note!</button>
          <button class="close" @click="showModal = false">Close</button>
      </div>
      </div>
    <div class="container">
      <header>
        <h1>Notes 🎵</h1>
        <button @click="showModal = true">+</button>
      </header>
      <div class="cards-container">

       <div v-for="note in notes" class="card" :key="note.id.value" :style="{backgroundColor: note.color}">
        <p class="main-text">{{note.text}}</p>
        <p class="date">{{note.date.toLocaleDateString("it-IT")}}</p>
       </div> 
      </div>
    </div>
  </main>
</template>
<style scoped>
  main{
     height:100vh;
     width: 100%; 
     background-image: url('/src/assets/bgcolor.jpeg');
     font-family:"Roboto", sans-serif;
  }
  .container{
    max-width:100%;
    padding:10px;
    margin: 0 auto;
  }
  header{
    display:flex;
    width:100%;
    justify-content: space-between;    
    align-items: center;
  }
  h1{
    font-weight: bold;
    margin-bottom:20px;
    font-size:60px;
  }
  header button{
    border:none;
    display:flex;
    justify-content: center;
    align-items: center;
    padding:10px;
    width:50px;
    height: 50px;
    cursor: pointer;
    background-color: rgba(237, 188, 44,0.5);
    color:white;
    font-size: 40px;
    border-radius: 15px;
  }
  .cards-container{
    display:flex;
    flex-wrap: wrap;
  }
  .card{
    width:200px;
    height:200px;
    background-color: rgba(237, 188, 44,0.5);
    padding:10px;
    border-radius: 15px;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 20px;
    margin-left: 20px;
    white-space: normal;
    word-wrap: break-word;
    overflow-wrap: break-word;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(9.4px);
    -webkit-backdrop-filter: blur(9.4px);
    border:none;
  }
  .overlay{
    position: absolute;
    width:100%;
    height:100%;
    background-color: rgba(0,0,0,0.77);
    z-index:10;
    display:flex;
    align-items: center;
    justify-content: center;
  }
  .modal{
    width:750px;
    background-color: rgba(255, 255, 255,0.3);
    border-radius: 5px;
    padding:30px;
    position:relative;
    display:flex;
    flex-direction: column;
  }
  .modal button{
    margin-top:5px;
    padding:10px;
    font-size:20px;
    width:100%;
    background-color: blueviolet;
    color:white;
    border-radius: 15px;
    cursor:pointer;
  }
  .modal .close{
    background-color: red;
    margin-top: 5px;
  }
</style>