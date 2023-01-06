<template>
  <header>
    <Logo></Logo>
    <Navbar></Navbar>
  </header>
  <body>
    <div class="all">
      <div class="content">
        <div class="roomfield bg-light_gray">
          <div class="suche font-primary text-white text-xl ">
            Durchsuche deine Räume: <input class=" bg-dark_gray ">
          </div>
          <div class="roomlist">

            <div class="room bg-dark_gray">
              <div class="roomIcon">
                <img src="../assets/livingroom-svgrepo-com.svg" class="roomsvg">
              </div>
              <div class="roomName font-primary text-white">
                Geburtstagsfeier für den 23 Januar 2023
              </div>
            </div>

          </div>
        </div>
        <div class="image bg-dark_gray">
          <div class="imgtop">
            <img src="../assets/undraw_having_fun_re_vj4h.svg"/>
          </div>
          <div class="imgbottom">
            <img src="../assets/undraw_pizza_sharing_wxop.svg"/>
          </div>
            
        </div>
      </div>
    </div>
  </body>
</template>


<script>
import Navbar from "@/components/Navbar";
import Logo from "@/components/Logo";
export default {
  name: 'RoomsView.vue',
  components:{
    Navbar,
    Logo,
  }
}
</script>

<style scoped>
.all {
  display: flex;
  height: 95vh;

  justify-content: center;
  align-items: center;
  
}

.content {
  display: flex;
  width: 85%;
  height: 80%;
  border-radius: 20px;
}
.roomfield{
  display: flex;
  width: 60%;
  height: 100%;
  flex-direction: column;
}
.suche{
  display: flex;
  align-items: center;
  height: 8%;
  padding: 2%;
}
.roomlist{
  display: flex;
  height: 92%;
  padding: 3%;
}
.image{
  display: flex;
  width: 40%;
  height: 100%;
  flex-direction: column;

}
.imgtop{
  display: flex;
  justify-content: center;
  height: 50%;
  background-size: 10px 1px;
  background-image: linear-gradient(to right, #ffc979 33%, rgba(255,201,121,0) 0%);
  background-position: bottom;
  background-size: 20px 2px;
  background-repeat: repeat-x;  
}
.imgbottom{
  display: flex;
  height: 50%;
  justify-content: center;
}
.room{
  margin-left: 10%;
  width: 60%;
  height: 7%;
  border-radius: 25px;
  display: flex;
  align-items: center;
  
}
.roomIcon{
 height: 100%;
}
.roomsvg{
  
  height: 100%;
  width: 100%;
}
.roomName{
  padding-left: 3%;
}

input{
  margin-left: 1%;
  border-radius: 25px;
  height: 80%;
}
</style>
