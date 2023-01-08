<template>

<body>
    <Navbar></Navbar>
  <div className=" flex items-center h-screen" >
    <ul>
      <li>
        <div className=" mt-24 ml-44 font-primary font-bold font text-5xl leading-normal">Organisiere <br> deine, Bringify!</div>
      </li>
      <li>
        <div class="ml-44 mt-5 font-primary font-bold"> Lorem ipsum dolor sit amet consectetur. <br> Sem pulvinar ultrices hendrerit quisque pulvinar.</div>
      </li>
      <div class=" mt-10">
        <router-link to="/createRoom">
          <button class="ml-44 mt-10 font-primary font-extrabold bg-primary rounded-full w-28 h-10">Starten</button>
        </router-link>
      </div>
    </ul>
    <div class=" bg-cover">
      <img src="../assets/Party.svg" alt="Party">
    </div>

  </div>

</body>



</template>

<script>

import Navbar from "@/components/Navbar";


export default {
  name: 'HomeView',
  components: {

    Navbar,
    methods: {
      
    }
  }
}
</script>
