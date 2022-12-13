<template>

  <div class="navbar">
    <ul class="font-primary dont font-extrabold caret-amber-300 ">
      <li>Meine Räume</li>
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
  width: 85%;
  margin: auto;
  padding:  23px 0 0 0;
  display: flex;
  justify-content: space-between;
}

.navbar ul li{
  display: inline-block;
  margin: 0 20px;
  text-transform: uppercase;
  position: relative;
}
</style>
