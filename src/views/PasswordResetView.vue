<template>
  <Logo></Logo>
  <div className="flex items-center justify-center h-screen hover">
          <div className="flex flex-row w-3/5 h-4/6">
              <div className="flex flex-col justify-center  w-2/5 h-full bg-light_gray rounded-l-md	">
                  <h2 className="text-white font-primary text-center font-black text-3xl ">Password Vergessen?</h2>
                  <p class=" opacity-50 text-sm mt-5 ml-20 mr-20 text-white font-primary font-medium">Gebe deine Email-Adresse ein. Wir senden dir eine Email zu, mit welcher du dein Passwort zurücksetzen kannst.</p>
                  <form v-on:submit.prevent="requestEmail" class="">
                  <div class=" ml-20 mt-5 relative w-2/3 ">
                      <div class="absolute  inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <img src="../assets/email.svg"/>
                      </div>
                      <input v-model="email" type="text" class=" block w-full p-4 pl-10 font-semibold border text-lg placeholder-placeholder border-gray-300 rounded-3xl bg-transparent text-gray-100 leading-tight focus:outline-none focus:shadow-outline " placeholder="Email" required/>
              </div>
              <div class=" ml-20 mt-5 w-2/3 left">
              <button  class="  bg-primary rounded-full font-bold text-white font-primary w-28 h-10">Senden</button>
              </div>
                  </form>
              </div>
              <div className="relative flex items-center w-3/5 h-full bg-dark_gray rounded-r-md	">
                  <img class=" p-5" src="../assets/mod.svg"/>
              </div>
          </div>
      </div>
  </template>

  <script>
  import Logo from '@/components/Logo'
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'PasswordResetView',
    components: { Logo },
    data(){
      return{
          email:""
      }
    },
    methods:{
      async requestEmail(){
          const myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");
          var raw = JSON.stringify({
          "email": this.email,
          });
          const requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          };
          await fetch("http://localhost:8080/api/v1/request_email", requestOptions).then(res => {if(res.status==200){this.$router.push("/login")}})
          .catch(error => console.log('error: ', error));
      }
    }
  }
  </script>


