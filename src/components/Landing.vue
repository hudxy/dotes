<template>
    <div class="landing">
        <h1>{{msg}}</h1>
        <form action="/api/steam_submission" method="post" >
            <input type="text" placeholder="Your Steam ID, scrub..." name="steamid"> 
            <input type="submit" value="Submit">
        </form>
    </div>
</template>

<script>
export default {
    name: 'Landing',
    props: {
        msg: String
    }
}
</script>


<style scoped>
.landing, input, select, textarea{
    color: red;
}
</style>