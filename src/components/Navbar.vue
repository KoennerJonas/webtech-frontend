<template>

  <div class=" mt-5 absolute flex flex-wrap items-center justify-between w-full">
    <div  class=" flex items-center justify-center ml-20  cursor-pointer" >
      <h1 @click="this.$router.push('/')" class=" font-primary font-bold text-2xl text-black duration-200 hover:text-primary">Bringify</h1>
    </div>
    <ul class=" mr-20 flex flex-row items-center font-primary  font-extrabold caret-amber-300 ">
      <li v-if="isLoggedIn" class=" cursor-pointer mr-20" @click="this.$router.push('/rooms')">Meine Räume</li>
      <li v-if="isLoggedIn" id="login" class=" cursor-pointer mr-10" @click="loginLogout">Logout</li>
      <li v-if="!isLoggedIn" id="login" class=" cursor-pointer mr-10" @click="loginLogout">Login</li>
      <Avataaars v-if="isLoggedIn" :circle-color="'#FFC979'" id="avatar" class="w-12 mb-2  "></Avataaars> 
    </ul>
  </div>

</template>

<script>
import Avataaars from 'vuejs-avataaars/src/Avataaars.vue'
export default {
name: "Navbar",
components:{
  Avataaars
},
  data() {
    return {
      isLoggedIn: false
    };
  },
methods:{
  loginLogout() {
    if(this.isLoggedIn=== false){
      this.$router.push("/login")
    }else{
      localStorage.removeItem("token")
      this.$router.push("/")
      location.reload();
      
    }
    
    }

  }
,
mounted(){
  if(localStorage.getItem("token") === null){
    this.isLoggedIn = false
  }else{
    this.isLoggedIn = true
  }
}
}
</script>
