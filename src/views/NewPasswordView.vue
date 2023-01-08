<template>
    <Logo></Logo>
    <div className="flex items-center justify-center h-screen hover">
            <div className="flex flex-row w-3/5 h-4/6">
                <div className="flex flex-col justify-center  w-2/5 h-full bg-light_gray rounded-l-md">
                    <h2 className="text-white font-primary text-center font-black text-3xl ">Neues Password</h2>
                    <p class=" text-center opacity-50 text-sm mt-5 ml-20 mr-20 text-white font-primary font-medium">Du kannst nun ein neues Password vergeben.</p>

                <form v-on:submit.prevent="handleSubmit">
                <div class=" ml-20 mt-10 relative w-2/3">
                        <div class="absolute  inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <img src="../assets/lock.svg"/>
                        </div>
                        <input v-model="password" type="password" class="  block w-full p-4 pl-10 font-semibold border text-lg placeholder-placeholder border-gray-300 rounded-3xl bg-transparent text-gray-100 leading-tight focus:outline-none focus:shadow-outline " placeholder="Password" required/>
                </div>
                <div class=" ml-20 mt-5 w-2/3 left">
                <button  class="  bg-primary rounded-full font-bold text-white font-primary w-28 h-10">Speichern</button>
                </div>
                <h2 id="invalid" class=" hidden ml-24 mt-5 fixed font-primary text-center text-white">falscher oder abgelaufener Link,<br/> frage einen neuen an!</h2>
                </form>
                </div>
                <div className="relative flex items-center w-3/5 h-full bg-dark_gray rounded-r-md">
                    <img class=" p-5" src="../assets/mod.svg"/>
                </div>
            </div>
        </div>
    </template>

    <script>
    import Logo from '@/components/Logo'
    export default {
      // eslint-disable-next-line vue/multi-word-component-names
      name: 'NewPasswordView',
      components: { Logo },
      data(){
        return{
            password:""
        }
      },
      methods:{
        async handleSubmit(){
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            var raw = JSON.stringify({
            "password": this.password,
            "token": urlParams.get("token")
            });
            const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            };
            await fetch("http://localhost:8080/api/v1/reset_password", requestOptions).then(res => {if(res.status==200){this.$router.push("/login")}
            else{
                document.getElementById("invalid").style.display = "block";
            }})
            .catch(error => console.log('error: ', error));
        }
      }
    }
    </script>

