<template>
  
</template>

<script>
export default {
    name: "ConfirmView",
    async mounted(){
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        if(urlParams.get("token")){
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            var raw = JSON.stringify({
            });
            var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw
            };
            const res = await fetch("http://localhost:8080/api/v1/confirm/" + urlParams.get("token"), requestOptions).then(res => {if(res.status == 200){
                this.$router.push("/login")
            }}
            )
            .catch(error => console.log('error: ', error));
        }
      }
}
</script>
