<template>
<div class="container">
    <div class="row">
        <div class="col-lg-10">
            <h1>Results for: {{ results.title }} ({{ results.data.length }})</h1>
        </div>
        <div class="col-lg-2">
            <button class="btn btn-primary" @click="rollIt">Roll It!</button>
        </div>
    </div>
    <div class="row">
        <div class="col" id="entrantNames">
            <h3>Entrants</h3>
            <ul>
                <li v-for="entrant in results.data"> {{ entrant[4] }} </li>
            </ul>
        </div>
        <div class="col" id="winnerNames">
            <h3>Winners</h3>
            <ul>
                <li v-for="winner in picked">{{  winner[3] }}</li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';
export default {
    name: "Entrants",
    props: {
        'sheetId': String
    },
    async setup(props) {
        const raffles = ref(null);
        const API_URL = `http${import.meta.env.VITE_APP_SECURE}://${import.meta.env.VITE_APP_URI}:${import.meta.env.VITE_APP_PORT}/api`;
        console.log(`${API_URL}/getRaffleById/${props.sheetId}`)
        const resp = await axios.get(`${API_URL}/getRaffleById/${props.sheetId}`)
        console.log(resp)
        var results = {}
        const dataArray = resp.data.data
        const missing = dataArray.shift()
        results['data'] = dataArray
        results['title'] = resp.data.title
        console.log(dataArray)
        return { results }

    },
    data (props) {
        return {
            picked: []
        }
    },
    methods: {
        rollIt() {
            let winnerPicked = Math.floor(Math.random() * this.results.data.length)
            console.log(winnerPicked)
            this.picked.push(this.results.data[winnerPicked])
            console.log(this.picked)
        }
    }
}
</script>

<style>
</style>