<template>
  <header>
    <Logo class="logo"></Logo>
    <Navbar class="navbar"></Navbar>
  </header>
  <body>
    <div class="display">
      <div class="boxFormular bg-light_gray">
        <form v-on:submit.prevent="createNewRoom" class="form">
          <h2 className="text-white font-primary font-black text-3xl mb-20 ">
            Raum anlegen
          </h2>
          <input
            id="raumName"
            v-model="roomName"
            type="text"
            class="text-lg block w-full p-4 pl-10 font-semibold border placeholder-placeholder border-gray-300 rounded-3xl bg-transparent text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Raumname"
            required
          />
          <input
            v-model="kennwort"
            type="password"
            class="text-lg block w-full p-4 pl-10 font-semibold border placeholder-placeholder border-gray-300 rounded-3xl bg-transparent text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Kennwort"
            required
          />

          <button
            class="bg-primary rounded-full font-bold text-white font-primary w-36 h-12 mt-16"
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
import Logo from "@/components/Logo";

export default {
  name: "CreateRoomView",
  components: {
    Navbar,
    Logo,
  },
  data() {
    return {
      owner: "1",
      roomName: "",
      kennwort: "",
    };
  },
  methods: {
    async createNewRoom() {
      var requestOptions0 = {
        method: 'GET',
        body: raw,
        redirect: 'follow'
      };

      fetch("http://localhost:8080/api/v1/profile", requestOptions0)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        roomName: this.roomName,
        keyword: this.kennwort,
        //Hier noch tatsächliche id bekommen
        owner: 1,
        members: null,
        items: null,
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
          console.log(result);
          this.$router.push({ name: "Room", params: { rid: result } });
        })
        .catch((error) => console.log("error", error));
    },
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

  border: 3px solid black;
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
