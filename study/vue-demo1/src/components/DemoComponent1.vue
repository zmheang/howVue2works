<template>
  <input type="text">
</template>

<script>
  export default {
    name: "DemoComponent1",
    mounted(){
      console.log(this)
      console.log('Comp 1 mounted')
    },
    activated(){
      console.log('Comp 1 activated')
    },
    deactivated(){
      console.log('Comp 1 deactivated')
    }
  }
</script>

<style scoped>

</style>
