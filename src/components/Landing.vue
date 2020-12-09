<template>
    <div class="landing">
        <h1>{{msg}}</h1>
        <input type="text" placeholder="Your Steam ID, scrub...">
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