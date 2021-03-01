<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="counter">
      {{$store.state.counter}}
    </div>
    <div class="counter-squared">
      {{$store.state.counter}}
      <sup>2</sup> = {{$store.getters.counterSquared}}
    </div>
    <div class="buttons">
      <button @click="$store.dispatch('decreasCounter')">-</button>
      <button @click="$store.dispatch('increasCounter')">+</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'


export default {
  name: 'Home',

  setup(){
    
    return{}
  }
 
}
</script>

<style>
  div{
    margin-bottom: 10px;
  }
  .counter{
    font-size: 80px;
  }

  .buttons button{
    font-size: 40px;
    width: 100px;
    margin: 0 10px;
  }
</style>