<template>
  <div id="app">
    <div>
      <Throttle :time="2000" events="click" :isDebounce="true">
        <button @click="add(1)">button1</button>
      </Throttle>
    </div>
    <div>
      <Throttle :time="2000" events="click" >
        <button @click="add(2)">button2</button>
      </Throttle>
    </div>
    <div>
      <button @click="reset">reset</button>
      <!--{{times1}}      {{times2}}-->
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
      add (num) {
        console.log(num)
        this['times' + num]++
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
