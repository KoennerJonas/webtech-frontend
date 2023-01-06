<template>
  <div className="flex items-center justify-center h-screen hover">
          <div className="flex flex-row w-3/5 h-4/6">
              <div className="flex flex-col justify-center items-center w-2/5 h-full bg-light_gray">
                  <h2 className="text-white font-primary font-black text-3xl ">Logge dich ein</h2>
                  <form v-on:submit.prevent="handleSignin"  class=" w-2/3">
                      <h3 id="invalid" class=" hidden text-center font-primary text-black">Invalide Anmeldedaten!</h3>
                      <h3 id="verified" class=" hidden text-center font-primary text-black">Email noch nicht verifiziert!</h3>

                  <div id="mag" class=" mt-10 relative">
                      <div class="absolute  inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <img src="../assets/user.svg"/>
                      </div>
                      <input id="username" v-model="username" type="text" class=" text-lg block w-full p-4 pl-10 font-semibold border placeholder-placeholder border-gray-300 rounded-3xl bg-transparent text-gray-100 leading-tight focus:outline-none focus:shadow-outline " placeholder="Username" required/>
               </div>
               <div class=" mt-5 relative">
                      <div class="absolute  inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <img src="../assets/lock.svg"/>
                      </div>
                      <input  id="password" v-model="password" type="password" class="  block w-full p-4 pl-10 font-semibold border text-lg placeholder-placeholder border-gray-300 rounded-3xl bg-transparent text-gray-100 leading-tight focus:outline-none focus:shadow-outline " placeholder="Password" required/>
               </div>
              <div class="mt-5 flex items-center">
              <button  class=" bg-primary rounded-full font-bold text-white font-primary w-28 h-10">Login</button>
              <a class="ml-5 text-white text-opacity-40 font-bold font-primary" href="/password_reset">Forgot Password?</a>
              </div>
          </form>
          <div>
          <h3 @click="this.$router.push('/register')" class=" cursor-pointer mt-5 text-gray-600 font-semibold font-primary text-sm">Du hast noch kein Account? <span class=" text-primary">Registrieren</span></h3>
          </div>
              </div>
              <div className="relative flex items-center w-3/5 h-full bg-dark_gray">
                  <img class=" p-5" src="../assets/mod.svg"/>
              </div>
              
          </div>
      </div>
  </template>
  
  <script>

  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'LoginView',
    data(){
      return{
          username: "",
          password:""
      }
    },
      
    methods:{
      
      async handleSignin(){
          document.getElementById("verified").style.display = "none";
          document.getElementById("invalid").style.display = "none";
          
          var myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");
          var raw = JSON.stringify({
          "username": this.username.toLowerCase(),
          "password": this.password
          });
          var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw
          };
          const res = await fetch("http://localhost:8080/api/v1/signin", requestOptions).then(async res => {if(res.status == 200){
              const json = await res.json()
              localStorage.setItem("token", json.token)
              this.$router.push("/")
          }else if(res.status == 404){
              document.getElementById("invalid").style.display = "block";
              document.getElementById("mag").style.marginTop = 0;

              document.getElementById("password").value ="";
              this.password = ""
          }else{
              document.getElementById("verified").style.display = "block";
              document.getElementById("username").value ="";
              document.getElementById("mag").style.marginTop = 0;
              this.password = ""
              this.username = ""

          }
          })
          .catch(error => console.log('error: ', error));

          }
      }
  }
  </script>
  
  <style scoped>
  
  </style>

  