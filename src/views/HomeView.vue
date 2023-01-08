<template>

<body>
  <Navbar></Navbar>
  
  <div class="containerAll">
    <div class="vektorbg">
      <img src="../assets/Vector.svg" alt="">
    </div>
    <div class="containerLeft">
      <div class="powerSatz font-primary font-black font text-6xl leading-normal ">
        Organisiere <br> dein, Bringify!
      </div>
      <div class="beschreibung  mt-5 font-primary font-bold">
        Plane Treffen mit deinen Freunden gemeinsam.<br> Egal ob Party, Geburtstagsfeier oder ein Treffen im Park. 
      </div>
      <div class="button">
        <button class=" font-primary font-extrabold bg-primary rounded-full w-28 h-10">Starten</button>
      </div>
    </div>
    <div class="containerRight" >
      <img src="../assets/Party.svg" alt="Party">
    </div>

    
  </div>
  

</body>



</template>

<script>

import Navbar from "@/components/Navbar";


export default {
  name: 'HomeView',
  components: {

    Navbar,
    methods: {
      
    }
  }
}
</script>
<style scoped>
.containerAll{
  display: flex;
  height: 100vh;
  overflow: hidden;
  align-items: center;
 
  
}
.containerLeft{
  display: flex;
  height: 70%;
  width: 35%;
  margin-left: 4%;
  
  flex-direction: column;
  justify-content: center;
  
}
.containerRight{
  display: flex;
  height: 70%;
  width: 55%;
  margin-right: 4%;

}
.powerSatz{
  height: 20%;
  margin-left: 20%;
  margin-top:10%;
}
.beschreibung{
  margin-top: 10%;
  height: 10%;
  margin-left: 20%;
}
.button{
  height: 10%;
  margin-top: 5%;
  margin-left: 20%;
  display: flex;
  align-items: flex-start;
  

}
.vektorbg{
  position: fixed;
  top:-20px;
  
  bottom: 0;
  
  z-index: -1;
  width:100%;
  margin: 0;

}

</style>
