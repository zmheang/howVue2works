<template>
  <input type="text">
</template>

<script>
  export default {
    name: "DemoComponent2",
    mounted(){
      console.log('Comp 2 mounted')
    },
    activated(){
      console.log('Comp 2 activated')
    },
    deactivated(){
      console.log('Comp 2 deactivated')
    }
  }
</script>

<style scoped>

</style>
