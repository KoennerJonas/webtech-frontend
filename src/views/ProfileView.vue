<template>
    <button @click="logout" class=" border-gray-700 border-2 rounded-full text-xl">
    <h3 class=" pl-5 pr-5">Logout</h3>
    </button>
</template>

<script>
export default {
    name:"ProfileView",
    methods:{
        logout() {
            localStorage.removeItem("token")
            this.$router.push("/")
        }
    }
}
</script>

<style>

</style>