<script setup>
  import { ref } from 'vue';
  const showModal = ref(false);
</script>
<template>
  <main>
    <div v-if="showModal" class="overlay">
      <div class="modal">
        <textarea name="note" id="note" cols="30" rows="10"></textarea>
          <button>Addnoting!</button>
          <button class="close" @click="showModal = false">Close</button>
      </div>
      </div>
    <div class="container">
      <header>
        <h1>Notes 🎵</h1>
        <button @click="showModal = true">+</button>
      </header>
      <div class="cards-container">
       <div class="card">
        <p class="main-text">duewhrewiuhewiouhewiueheiufhewfiuhewfiuhwefiwuhcweicudscjb</p>
        <p class="date">24/06/2025</p>
       </div> 
      </div>
    </div>
  </main>
</template>
<style scoped>
  main{
     height:100vh;
     width: 100%; 
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
  button{
    border:none;
    padding:10px;
    width:50px;
    height: 50px;
    cursor: pointer;
    background-color: bisque;
    color:white;
    font-size: 40px;
  }
  .cards-container{
    display:flex;
    flex-wrap: wrap;
  }
  .card{
    width:200px;
    height:200px;
    background-color: rgb(237, 188, 44);
    padding:10px;
    border-radius: 10px;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 20px;
    margin-left: 20px;
    white-space: normal;
    word-wrap: break-word;
    overflow-wrap: break-word;
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
    background-color: white;
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
    cursor:pointer;
  }
  .modal .close{
    background-color: red;
    margin-top: 5px;
  }
</style>