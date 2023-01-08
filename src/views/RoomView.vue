<template>
  <header>
    <Navbar></Navbar>
  </header>
  <body>
    <div class="all mt">
      <div class="content bg-light_gray rounded-md">
        <div class="leftSide">
          <div class="gruppenbeschreibung bg-dark_gray rounded-md">
            <div class="header">
              <p class="font-primary font-semibold text-white text-xl">{{ raumname }}</p>
            </div>
            <div class="body bodyGruppenbeschreibung">
              <div class="beschreibung font-primary text-white flex flex-col items-center">
                <div class=" bg-light_gray w-4/5 h-full mb-5 rounded-xl p-5">
                  <h2>{{ gruppenbeschreibung }}</h2>
                </div>
              </div>
            </div>
          </div>
          <div class="itemHinzufuegen bg-dark_gray rounded-md">
            <div class="header">
              <p class="font-primary font-semibold text-white text-xl">
                Gegenstand hinzufügen
              </p>
            </div>
            <div class="body itemContent">
              <form class="flex items-center justify-center" v-on:submit.prevent="createNewItem">
                <input
                  v-model="itemName"
                  id="item-text"
                  type="text"
                  class="itemInput text-lg font-semibold border placeholder-placeholder border-gray-300 rounded-3xl bg-transparent text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Gegenstände"
                  required
                />
                <input
                  v-model="ammount"
                  id="ammount"
                  type="number"
                  min="1"
                  max="999"
                  class="itemInputAnzahl text-lg font-semibold border placeholder-placeholder border-gray-300 rounded-3xl bg-transparent text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
                <button
                  name="items"
                  class="itemButton bg-primary rounded-full font-bold text-white font-primary w-11 h-11"
                >
                  +
                </button>
              </form>
            </div>
          </div>
        </div>
        <div class="middle">
          <div class="checklisteItems bg-dark_gray rounded-md">
            <div class="header">
              <p class="font-primary text-white text-xl font-semibold">Wer bringt was mit?</p>
            </div>
            <div class="body itemContainer">
              <div class="items">
                <div class="  font-primary" v-for="item in itemlist" :key="item.name">
                  <div class=" mr-5 items-center h-8 flex justify-between font-primary text-white mt-5 pl-3 pr-3 bg-light_gray rounded-md">
                  <div class="flex">
                  <div>{{ item.ammount }}x</div>
                  <div class=" ml-2 font-semibold">{{ item.name }}</div>

                </div>
                  <div class="flex">
                  <div class="mr-5">{{ item.username }} </div>
                  <div class="flex">
                    <input class=" accent-primary " @change="check($event,item.id)" oncheck type="checkbox" />
                    <!-- <button class="removeItems text-red-600" @click.prevent="selectItem">-</button> -->
                  </div>
                </div>
                </div>
                </div>
              </div>
            </div>
          </div>
          <div>
        </div>
        </div>
        <div class="rightSide">
          <div class="mitglieder  bg-dark_gray rounded-md">
            <div class="header">
              <p class="font-primary text-white text-xl font-semibold">Mitglieder</p>
            </div>
            <div class="mitglieder-con  w-4/5">
              <div class="  mr-5 font-primary text-white font-bold  " v-for="user in userlist" :key="user.id">
                <div class=" mt-7 flex items-center  h-8 rounded-xl bg-light_gray">
                  <Avataaars :circle-color="'#FFC979'" class="w-12 mb-2  "></Avataaars>
                 <div class="ml-3"> {{ user.username }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="itemHinzufuegen bg-dark_gray rounded-md">
            <div class="header">
              <p class=" font-semibold font-primary text-white text-xl">
                Mitglied hinzufügen
              </p>
            </div>
            <div class="body itemContent">
              <form v-on:submit.prevent="addMember">
                <input
                  v-model="username"
                  id="user-text"
                  type="text"
                  class="usernameInput  text-lg font-semibold border placeholder-placeholder border-gray-300 rounded-3xl bg-transparent text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Username"
                  required
                />

                <button
                  name="username"
                  class="itemButton bg-primary rounded-full font-bold text-white font-primary w-11 h-11"
                >
                  +
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

  </body>
</template>

<script>
import Navbar from "@/components/Navbar";
import Avataaars from 'vuejs-avataaars/src/Avataaars.vue'

export default {
  name: "RoomView",
  components: {
    Navbar,
    Avataaars
  },

  data() {
    return {
      itemName: "",
      ammount: 1,
      roomId: "",
      gruppenbeschreibung: "",
      itemlist: [],
      userlist: [],
      username: "",
      raumname:""
    };
  },
  methods: {
    check: async function(e,itemId){
      var id = await this.getToken()

      console.log(id)
      var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    var linkUsernameItem = "http://localhost:8080/api/v1/username_item/"+ itemId +"/"+ id;
    fetch(linkUsernameItem, requestOptions).then(response => console.log(response))

      .catch((error) => console.log("error", error));
    this.$forceUpdate();
    },


    async selectitem(){

    },
    async saveDescription(){
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        description: this.gruppenbeschreibung,
      });

      var requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      await fetch("http://localhost:8080/api/v1/description/" + this.roomId, requestOptions)
        .catch((error) => console.log("error", error));
    },
    async addMember(){

      document.getElementById("user-text").value = "";

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        username: this.username,
      });

      var requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      await fetch("http://localhost:8080/api/v1/add_user/"+this.roomId, requestOptions)
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

      await fetch("http://localhost:8080/api/v1/current_user", requestOptions)
        .then(response => response.json()).then(res => userid =res)
        .catch(error => console.log('error', error));
      var userid = userid.id
      return userid

      },

    async createNewItem() {
      document.getElementById("item-text").value = "";
      document.getElementById("ammount").value = 1;
      this.getRoomId();

      this.itemlist.push(
        { "name": this.itemName,
          "ammount":this.ammount,
          "raumid": this.raumid
        }
      )
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        name: this.itemName,
        ammount: this.ammount,
        raumid: this.roomId,
      });

      var requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      await fetch("http://localhost:8080/api/v1/rooms/additems", requestOptions)
        .then((response) => response.text())
        .catch((error) => console.log("error", error));
    },

    getRoomId() {
      let urlParams = new URLSearchParams(window.location.search);
      this.roomId = this.$route.path;
      this.roomId = this.roomId.split("/");
      this.roomId = this.roomId[2];
    },
  },

  mounted() {
    this.getRoomId();
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    var linkGetItems = "http://localhost:8080/api/v1/rooms/getitems/" + this.roomId;
    fetch(linkGetItems, requestOptions)
      .then((response) => response.json())
      .then((result) =>
        result.forEach((resItem) => {
          this.itemlist.push(resItem);

        })
      )
      .catch((error) => console.log("error", error));

    var linkGetUser = "http://localhost:8080/api/v1/rooms/getuser/" + this.roomId;
    fetch(linkGetUser, requestOptions)
      .then((response) => response.json())
      .then((result) =>
        result.forEach((resUser) => {
          this.userlist.push(resUser);
        })
      )
      .catch((error) => console.log("error", error));
        var linkGetDescription = "http://localhost:8080/api/v1/description/" + this.roomId;
      fetch(linkGetDescription, requestOptions)
        .then((response) => response.json())
        .then((result) =>
          this.gruppenbeschreibung = result.description


      )
      .catch((error) => console.log("error", error));
    var linkGetRoomName = "http://localhost:8080/api/v1/room_name/" + this.roomId;

    fetch(linkGetRoomName, requestOptions)
      .then((response) => response.json())
      .then((result) =>this.raumname = result.roomName)

      .catch((error) => console.log("error", error));

    }


  ,
};
</script>

<style scoped>
.nav {
  height: 10%;
}
.all {
  display: flex;
  height: 100vh;

  justify-content: center;
  align-items: center;
}

.content {
  display: flex;
  margin-top:40px;
  width: 85%;
  height: 80%;
}

.leftSide {
  display: flex;
  flex-direction: column;
  width: 33%;
  margin-top: 3%;
  margin-left: 3%;
  margin-bottom: 3%;
}
.middle {
  display: flex;
  flex-direction: column;
  width: 33%;
  margin-top: 3%;
  margin-left: 3%;
  margin-bottom: 3%;
}
.rightSide {
  display: flex;
  flex-direction: column;
  width: 33%;
  margin-top: 3%;
  margin-left: 3%;
  margin-bottom: 3%;
  margin-right: 3%;
}

.gruppenbeschreibung {
  display: flex;
  height: 65%;
  margin-bottom: 10%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.itemHinzufuegen {
  display: flex;
  height: 35%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.checklisteItems {
  display: flex;
  width: 100%;
  height: 100%;
  margin-right: 5%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.mitglieder {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 65%;
  margin-bottom: 10%;
}
.mitglieder-con{
  overflow-y: scroll;
}
.header {
  margin-top: 5px;
}
.itemInput {
  width: 50%;
  padding: 10px 10px 10px 10px;
  margin-right: 10px;
}
.itemInputAnzahl {
  width: 20%;
  padding: 10px 10px 10px 10px;
  margin-right: 10px;
}
.usernameInput {
  width: 80%;
  padding: 10px 10px 10px 10px;
  margin-right: 10px;
}
.body {
  margin-top: 5%;
  margin-left: 3%;
  margin-right: 3%;
  margin-bottom: 3%;
}
.itemContent {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 15%;
}
.bodyGruppenbeschreibung {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
}
.beschreibung {

  width: 100%;
}
.raumPlaceholder {
  width: 100%;
  height: 80%;
  resize: none;
}
.itemContainer {
  overflow-y: scroll;
  width: 90%;
  height: 90%;
}
.removeItems{
  margin-left: 2%;

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
