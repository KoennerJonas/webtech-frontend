<template>
  <div class=" absolute ">
    <div  class=" flex justify-between ml-4 mt-4 cursor-pointer" >
      <h1 @click="this.$router.push('/')" class=" font-primary font-bold text-2xl text-black duration-200 hover:text-primary">Bringify</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Logo'
}
</script>

<style scoped>

</style>
