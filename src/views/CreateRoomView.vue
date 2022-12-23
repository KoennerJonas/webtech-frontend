<template>
  <header>
    <Logo class="logo"></Logo>
    <Navbar class="navbar"></Navbar>
  </header>
  <body >
    <div class="display">
      <div class="boxFormular bg-light_gray">
        <form action="?" class="form">
          <h2 className="text-white font-primary font-black text-3xl mb-20 ">Raum anlegen</h2>
          <input v-model="username" type="text" class=" text-lg block w-full p-4 pl-10 font-semibold border placeholder-placeholder border-gray-300 rounded-3xl bg-transparent text-gray-100 leading-tight focus:outline-none focus:shadow-outline " placeholder="Raumname" required/>
          <input v-model="username" type="password" class=" text-lg block w-full p-4 pl-10 font-semibold border placeholder-placeholder border-gray-300 rounded-3xl bg-transparent text-gray-100 leading-tight focus:outline-none focus:shadow-outline " placeholder="Kennwort" required/>
          <div class="gegenstaende">
            <input v-model="items" type="text" class=" itemInput text-lg block w-full p-4 pl-10 font-semibold border placeholder-placeholder border-gray-300 rounded-3xl bg-transparent text-gray-100 leading-tight focus:outline-none focus:shadow-outline " placeholder="Gegenstände" required/>
            <button name="items" class=" itemButton bg-primary rounded-full font-bold text-white font-primary w-9 h-9">+</button>
          </div>

          <div class="itemList">
          
          </div>
          
          <button class="  bg-primary rounded-full font-bold text-white font-primary w-36 h-12 mt-16">Raum anlegen</button>
        </form>
        
      </div>
    </div>
  
  </body>
</template>

<script>
import Navbar from '@/components/Navbar'
import Logo from '@/components/Logo'

export default {
  name: 'CreateRoomView',
  components:{
    Navbar,
    Logo

  }
}
</script>

<style scoped>

.display{
 height: 100vh;
 border: 3px solid black;
 display: flex;
 justify-content: center;
 align-items: center;
}

.boxFormular{
  height: 60%;
  width: 40%;

 border: 3px solid black;
 display: flex;
 justify-content: center;
 align-items: center;
}
input{
  margin-top: 15px;
}
.form{

 height: 80%;
 flex-direction: column;
 display: flex;
 justify-content: flex-start;
 align-items: center;
 

}
.gegenstaende{
 display: flex;
margin-top: 15px;
flex-direction: row;
justify-content:flex-start;
align-items: center;
}
.itemInput{
  width: 80%;
  margin-top: 0%;
}
.itemButton{
widows: 20%;
margin-left: 5%;
}

.itemList{
  margin-top: 15px;
  border: 1px solid gainsboro;
  width: 100%
  ;
}



</style>
