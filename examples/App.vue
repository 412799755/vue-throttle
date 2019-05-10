<template>
  <div id="app">
    <div>
      <Throttle :time="2000" events="click" :isDebounce="true">
        <button @click="add1">{{times1}}</button>
      </Throttle>
    </div>
    <div>
      <Throttle :time="2000" events="click" >
        <button @click="add2">{{times2}}</button>
      </Throttle>
    </div>
    <div>
      <button @click="reset">reset</button>
    </div>
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'

  export default {
    name: 'app',
    components: {
      HelloWorld
    },
    data () {
      return {
        times1: 0,
        times2: 0
      }
    },
    methods: {
      add1 () {
       this.times1++
      },
      add2 () {
        this.times2++
      },
      reset () {
        this.times1 = 0
        this.times2 = 0
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
