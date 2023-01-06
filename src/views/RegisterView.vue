<template>
  <div className="flex items-center justify-center h-screen hover">
          <div className="flex flex-row w-3/5 h-4/6">
              <div className="flex flex-col justify-center items-center w-2/5 h-full bg-light_gray">
                  <h2 className="text-white font-primary font-black text-3xl ">Registriere dich</h2>
                  <form  v-on:submit.prevent="handleSignup" class="w-2/3">
                  <div class=" mt-10 relative">
                      <div class="absolute  inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <img src="../assets/user.svg"/>
                      </div>
                      <input v-model="username" type="text" class=" text-lg block w-full p-4 pl-10 font-semibold border placeholder-placeholder border-gray-300 rounded-3xl bg-transparent text-gray-100 leading-tight focus:outline-none focus:shadow-outline " placeholder="Username" required/>
               </div>
               <p id="user-taken" class=" font-primary hidden ml-5 text-white">User already taken!</p>

               <div class=" mt-5 relative ">
                      <div class="absolute  inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <img src="../assets/email.svg"/>
                      </div>
                      <input  v-model="email" type="email" class="  block w-full p-4 pl-10 font-semibold border text-lg placeholder-placeholder border-gray-300 rounded-3xl bg-transparent text-gray-100 leading-tight focus:outline-none focus:shadow-outline " placeholder="Email" required/>
                  </div>
                  <p id="email-taken" class=" font-primary hidden ml-5 text-white">Email already taken!</p>
               <div class=" mt-5 relative">
                      <div class="absolute  inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <img src="../assets/lock.svg"/>
                      </div>
                      <input  id="password" v-model="password" type="password" class="  block w-full p-4 pl-10 font-semibold border text-lg placeholder-placeholder border-gray-300 rounded-3xl bg-transparent text-gray-100 leading-tight focus:outline-none focus:shadow-outline " placeholder="Password" required/>
               </div>
              <div class=" mt-5 w-2/3 left">
                  <button class="  bg-primary rounded-full font-bold text-white font-primary w-28 h-10">Registrieren</button>
                  </div>
              </form>
              <h3 @click="this.$router.push('/login')" class=" cursor-pointer mt-5 text-gray-600 font-semibold font-primary text-sm">Du hast bereits ein Account? <span class=" text-primary">Login</span></h3>
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
    name: 'RegisterView',
    data(){
      return{
          username: "",
          email:"",
          password:""
      }
    },
    methods:{
      
      async handleSignup(){
          document.getElementById("email-taken").style.display = "none";
          document.getElementById("user-taken").style.display = "none";

          const myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");
          var raw = JSON.stringify({
          "username": this.username.toLowerCase(),
          "mail": this.email,
          "password": this.password
          });
          const requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw
          };
          await fetch("http://localhost:8080/api/v1/signup", requestOptions).then(res => {if(res.status==201){this.$router.push("/login")}
          else if(res.status == 409){
              document.getElementById("email-taken").style.display = "block";
              document.getElementById("password").value ="";
              this.password = ""
          }else if(res.status == 400){
              document.getElementById("user-taken").style.display = "block";
              document.getElementById("password").value ="";
              this.password = ""
          }}
          )
          .catch(error => console.log('error: ', error));
          
      }
    }     
  }
  </script>
  
  <style scoped>
  
  </style>

  