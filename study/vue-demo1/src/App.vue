<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <button @click="switchComp('demo-component-1')">组件1</button>
    <button @click="switchComp('demo-component-2')">组件2</button>
    <keep-alive>
      <component :is="chooseComponent"></component>
    </keep-alive>
<!--    <demo-component-1></demo-component-1>-->
<!--    <demo-component-1></demo-component-1>-->
  </div>
</template>

<script>
  // import HelloWorld from './components/HelloWorld.vue'
  import DemoComponent1 from './components/DemoComponent1'
  import DemoComponent2 from './components/DemoComponent2'

  export default {
    name: 'App',
    components: {
      DemoComponent1,
      DemoComponent2
    },
    mounted() {
      console.log(this)
    },
    data() {
      return {
        chooseComponent: 'demo-component-1'
      }
    },
    methods: {
      switchComp(componentName) {
        this.chooseComponent = componentName
      }
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
