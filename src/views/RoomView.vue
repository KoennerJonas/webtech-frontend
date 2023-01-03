<template>
  <header>
    <Logo></Logo>
    <Navbar></Navbar>
  </header>
  <body>
    <div class="all">
      <div class="content bg-light_gray">
        <div class="leftSide">
          <div class="gruppenbeschreibung bg-dark_gray">
            <div class="header">
              <p class="font-primary text-white text-xl">Gruppenbeschreibung</p>
            </div>
            <div class="body bodyGruppenbeschreibung">
              <div class="beschreibung font-primary text-white">
                <textarea
                  class="raumPlaceholder bg-dark_gray"
                  placeholder="Beschreibe deine Feier"
                  v-model="gruppenbeschreibung"
                ></textarea>
              </div>
            </div>
          </div>
          <div class="itemHinzufuegen bg-dark_gray">
            <div class="header">
              <p class="font-primary text-white text-xl">
                Gegenstand hinzufügen
              </p>
            </div>
            <div class="body itemContent">
              <form v-on:submit.prevent="createNewItem">
                <input
                  v-model="itemName"
                  type="text"
                  class="itemInput text-lg font-semibold border placeholder-placeholder border-gray-300 rounded-3xl bg-transparent text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Gegenstände"
                  required
                />
                <input
                  v-model="ammount"
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
        <div class="rightSide">
          <div class="checklisteItems bg-dark_gray">
            <div class="header">
              <p class="font-primary text-white text-xl">Wer bringt was mit?</p>
            </div>
            <div class="body itemContainer">
              <div class="items">
                <div class="item font-primary" v-for="item in itemlist" :key="item.name">
                  {{ item.name }} | {{ item.ammount }} |
                  <input type="checkbox" /> | Jonas | <button class="removeItems text-red-600">-</button>
                </div>
              </div>
            </div>
          </div>
          <div class="mitglieder bg-dark_gray">
            <div class="header">
              <p class="font-primary text-white text-xl">Mitglieder</p>
            </div>
            <div class="body">
              <div class="item" v-for="user in userlist" :key="user.id">
                {{ user.username }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import Navbar from "@/components/Navbar";
import Logo from "@/components/Logo";
import watch from "vue";
export default {
  name: "RoomView",
  components: {
    Navbar,
    Logo,
  },

  data() {
    return {
      itemName: "",
      ammount: 1,
      roomId: "",

      itemlist: [],
      userlist: [],
    };
  },
  methods: {
    createNewItem() {
      this.getRoomId();

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

      fetch("http://localhost:8080/api/v1/rooms/additems", requestOptions)
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

    var linkGetItems =
      "http://localhost:8080/api/v1/rooms/getitems/" + this.roomId;
    fetch(linkGetItems, requestOptions)
      .then((response) => response.json())
      .then((result) =>
        result.forEach((resItem) => {
          this.itemlist.push(resItem);
        })
      )
      .catch((error) => console.log("error", error));

    var linkGetUser =
      "http://localhost:8080/api/v1/rooms/getuser/" + this.roomId;
    fetch(linkGetUser, requestOptions)
      .then((response) => response.json())
      .then((result) =>
        result.forEach((resUser) => {
          this.userlist.push(resUser);
        })
      )
      .catch((error) => console.log("error", error));
  },
};
</script>

<style scoped>
.nav {
  height: 10%;
}
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
}

.leftSide {
  display: flex;
  flex-direction: column;
  width: 30%;
  margin-top: 3%;
  margin-left: 3%;
  margin-bottom: 3%;
}
.rightSide {
  display: flex;
  width: 70%;
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
  width: 60%;
  margin-right: 5%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.mitglieder {
  display: flex;
  width: 40%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
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
  width: 85%;
}
.raumPlaceholder {
  width: 100%;
  height: 100%;
  resize: none;
}
.itemContainer {
  width: 90%;
  height: 90%;
}
.removeItems{
  margin-left: 2%;
  
}
</style>
