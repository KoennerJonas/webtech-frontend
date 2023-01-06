<template>

  <div class="navbar">
    <ul class="font-primary dont font-extrabold caret-amber-300 ">
      <li class=" cursor-pointer" @click="this.$router.push('/rooms')">Meine Räume</li>
      <li>stuff</li>
      <li>stuff</li>
    </ul>
  </div>

</template>

<script>
export default {
name: "Navbar"

}
</script>

<style>
.navbar{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-left: 12%;
  padding-top: 21px;
  height: 20%;

}

.navbar ul li{
  display: inline;
  padding: 20px
  

}
</style>
