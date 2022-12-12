<template>
  <body>
  <Navbar></Navbar>
    <div class="navbar">
      <ul class="font-primary dont font-extrabold caret-amber-300 ">
        <li>Meine Räume</li>
        <li>stuff</li>
        <li>stuff</li>
      </ul>
    </div>
    <div class="content ">
      <button class="font-primary font-extrabold bg-primary rounded-full h-14 w-40">RAUM ERSTELLEN</button>
    </div>
  </body>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  name: 'StartView',
  components: {
    Navbar
  }

}
</script>


<style scoped>
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
.content{
  width: 100%;
  position: absolute;
  top: 60%;
  transform: translateY(-50%);
  text-align: center;

}




</style>
