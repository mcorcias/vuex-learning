<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="counter" :style="{color: colorCode}">
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

    <div>
      <input type="text" placeholder="Enter color code" v-model="colorCode">

    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'


export default {
  name: 'Home',
  setup(){},
  computed:{
    colorCode:{
        get(){
          return this.$store.state.colorCode
        },
        set(newValue){
          this.$store.commit('setColorCode',newValue)
        }
    }
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