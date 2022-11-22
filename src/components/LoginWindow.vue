<template>
    <div className="flex items-center justify-center h-screen">
            <div className="flex flex-row w-3/5 h-4/6">
                <div className="flex flex-col justify-center items-center w-2/5 h-full bg-left">
                    <h2 className="text-white font-primary font-black text-3xl ">Logge dich ein</h2>
                    <div class=" mt-10 relative w-2/3">
                        <div class="absolute  inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <img src="../assets/user.svg"/>
                        </div>
                        <input type="text" class=" text-lg block w-full p-4 pl-10 font-semibold border placeholder-placeholder border-gray-300 rounded-3xl bg-transparent text-gray-100 leading-tight focus:outline-none focus:shadow-outline " placeholder="Email or Username" required/>
                 </div>
                 <div class=" mt-5 relative w-2/3">
                        <div class="absolute  inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <img src="../assets/lock.svg"/>
                        </div>
                        <input type="text" class="  block w-full p-4 pl-10 font-semibold border text-lg placeholder-placeholder border-gray-300 rounded-3xl bg-transparent text-gray-100 leading-tight focus:outline-none focus:shadow-outline " placeholder="Password" required/>
                 </div>
                <div class="mt-5 flex items-center">
                <button class="  bg-primary rounded-full font-bold text-white font-primary w-28 h-10">Login</button>
                <a class="ml-5 text-white text-opacity-40 font-bold font-primary" href="/reset">Forgot Password?</a>
                </div>
                </div>
                <div className="relative flex items-center w-3/5 h-full bg-right">
                    <img class=" p-5" src="../assets/mod.svg"/>
                </div>
            </div>
        </div>
    </template>
    
    <script>
    export default {
      // eslint-disable-next-line vue/multi-word-component-names
      name: 'Login'
    }
    </script>
    
    <style scoped>
    
    </style>

    