<template>
    <div class="landing">
        <h1>{{msg}}</h1>
        <form action="/api/steam_submission" method="post" >
            <input type="text" placeholder="Your Steam ID, scrub..." name="steamid"> 
            <input type="submit" value="Submit">
        </form>
        <input type="text" id="matchid" placeholder="Enter Match ID..." name="matchid">
        <button v-on:click="submitMatchInfo()">Get Match Info!</button>
    <div>{{match}}</div>
    </div>
</template>

<script>
import DotaService from '@/DotaService';
export default {
    name: 'Landing',
    props: {
        msg: String
    },
    data() {
        return {
            match: {}
        }
    },
    created() {
        // this loads things when page is initially created
    },
    methods: {
        async getMatch(match_id) {
           DotaService.getMatch(match_id).then(match => {
               this.$set(this, "match", match);
           }).bind(this)
        },
        submitMatchInfo() {
            let match_id = document.getElementById('matchid').value;
            if (match_id === "")
            {
                this.$set(this, "match", "empty string in input..");
                return;
            }
            for (var x of match_id)
            {
                if (x < '0' || x > '9')
                {
                    this.$set(this, "match", "input was not all numbers...");
                    return;
                }
            }
            console.log(match_id)
            this.getMatch(match_id);
        }
    }
}
</script>


<style scoped>
.landing, input, select, textarea{
    color: red;
}
</style>