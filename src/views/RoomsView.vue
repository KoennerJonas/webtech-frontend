<template>
  <header>

    <Navbar></Navbar>
  </header>
  <body>
    <div class="all">
      <div class="content">
        <div class="roomfield bg-light_gray rounded-l-md	">
          <div class="suche font-primary text-white text-xl ">
            Durchsuche deine Räume: <input v-model="search" class=" bg-dark_gray ">
          </div>
          <div class="roomlist" >
            <div></div>
            <div class=" room bg-dark_gray" v-for="room in filteredList" :key="room.roomName">
              <div class="roomIcon">
                <img src="../assets/livingroom-svgrepo-com.svg" class="roomsvg">
              </div>
              <div class="w-full flex justify-between">
                <div class=" font-semibold ml-5 font-primary text-white">
                  {{ room.roomName }}
                </div>
                <div class=" font-primary text-white text-opacity-50">
                  {{ room.beschreibung.substring(0,20) }}...
                </div>
                <div class="flex">
                <div class=" items-center mr-5 flex font-primary text-white">
                  <img class="h-5 mr-1 " src="../assets/user.svg"/>
                   {{ room.users.length }}</div>
                <button @click="this.$router.push('/room/'+room.id)" class=" mr-5 border-primary  bg-primary border rounded-xl pl-3 pr-3 font-primary text-white">Öffnen</button>
              </div>
              </div>
            </div>

          </div>
        </div>
        <div class="image bg-dark_gray rounded-r-md	">
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

export default {
  name: 'RoomsView.vue',
  components:{
    Navbar,

  },
  data(){
    return{
      rooms: [],
      search: ""
    }
    
  },
  methods:{


    async getToken(){
      var usertoken = localStorage.getItem("token")

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        "token": usertoken
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      var userid
      await fetch("http://localhost:8080/api/v1/current_user", requestOptions)
        .then(response => response.json()).then(res => userid =res)
        .catch(error => console.log('error', error));
      userid = userid.id
      return userid
      }
    
  },
  mounted(){
    var id = this.getToken().then(
      res => {
        console.log("id: "+id)
        var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        }
        fetch('http://localhost:8080/api/v1/user_room/'+res, requestOptions)
          .then(response => response.json())
          .then(result => this.rooms =result)
          .catch(error => console.log('error', error))
          }
          
        )

  },
  computed: {
    filteredList() {
      return this.rooms.filter(room => {
        return room.roomName.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
} 
</script>

<style scoped>
.all {
  display: flex;
  height: 100vh;

  justify-content: center;
  align-items: center;
  
}

.content {
  display: flex;
  width: 85%;
  height: 80%;
  margin-top: 40px;
  
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
  height: 10%;
  padding: 2%;
}
.roomlist{
  display: flex;
  height: 92%;
  padding: 3%;
  flex-direction: column;
  overflow-y: scroll;
  margin-bottom: 40px;
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
  max-width: 80%;
  height: 40px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  margin-top: 20px;
  
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
  padding-left: 20px;
  padding-right: 20px;

  margin-left: 1%;
  border-radius: 25px;
  height: 80%;
}
::-webkit-scrollbar-track {
  background-color: transparent;
}
::-webkit-scrollbar {
  width: 20px;
}
::-webkit-scrollbar-thumb {
  background-color: #FFC979;
  border-radius: 20px;
}
</style>
