<template>
  <body>
  <Logo></Logo>
  <Navbar></Navbar>

    <div class="content ">
      <button class="font-primary font-extrabold bg-primary rounded-full h-14 w-40">RAUM ERSTELLEN</button>
    </div>
  </body>
</template>

<script>
import Navbar from '@/components/Navbar'
import Logo from '@/components/Logo'
export default {
  name: 'StartView',
  components: {
    Navbar,
    Logo

  }

}
</script>


<style scoped>

.content{
  width: 100%;
  position: absolute;
  top: 60%;
  transform: translateY(-50%);
  text-align: center;

}




</style>
