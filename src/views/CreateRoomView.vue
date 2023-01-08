<template>
  <header>
    <Navbar class="navbar"></Navbar>
  </header>
  <body>
    <div class="display">
      <div class="boxFormular bg-light_gray rounded-md	">
        <form v-on:submit.prevent="createNewRoom" class="form">
          <h2 className="text-white font-primary font-black text-3xl mb-8 ">
            Raum anlegen
          </h2>
          <input
            id="raumName"
            v-model="roomName"
            type="text"
            class=" text-lg block w-full p-4 pl-10 font-semibold border  border-gray-300 rounded-3xl bg-transparent text-gray-100 leading-tight focus:outline-none focus:shadow-outline placeholder:text-white text-opacity-60 "
            placeholder="Raumname"
            required
          />
          <textarea v-model="beschreibung" class="w-full h-4/5 bg-transparent font-primary text-white border-white mt-5 g-dark_gray rounded-md border resize-none border-white p-4 placeholder:text-white text-opacity-60" placeholder="Raumbeschreibung..."></textarea>

          <button
            class="bg-primary rounded-full font-bold text-white font-primary w-36 h-20 mt-5"
          >
            Raum anlegen
          </button>
        </form>

      </div>
    </div>
  </body>
</template>

<script>
import Navbar from "@/components/Navbar";


export default {
  name: "CreateRoomView",
  components: {
    Navbar,

  },
  data() {
    return {
      owner: "",
      roomName: "",
      beschreibung:"",
      members: {}
    };
  },
  methods: {
    async createNewRoom() {

      var ownerid = await this.getToken()

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        roomName: this.roomName,
        keyword: null,
        beschreibung: this.beschreibung,
        owner: ownerid,
        members: null,
        items: null,
        users: null,
        
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };


      const result = await fetch(
        "http://localhost:8080/api/v1/create_room",
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => {

          this.$router.push({ name: "Room", params: { rid: result } });
        })
        .catch((error) => console.log("error", error));
    },

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
};
</script>

<style scoped>
.display {
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
}

.boxFormular {
  height: 50%;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
}
input {
  margin-top: 15px;
}
.form {
  height: 80%;
  flex-direction: column;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.gegenstaende {
  display: flex;
  margin-top: 15px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.itemInput {
  width: 80%;
  margin-top: 0%;
}
.itemButton {
  widows: 20%;
  margin-left: 5%;
}

.itemList {
  margin-top: 15px;
  border: 1px solid gainsboro;
  width: 100%;
}
</style>
