<template>
    <form   name="sheetId" action="/raffle" method="POST" @submit.prevent="onSubmit">
        <label for="rafflePicker">Raffles: &nbsp;</label>
        <select id="rafflePicker" name="sheetId" v-model="sheetId">
            <option value=null disabled selected>Pick One</option>
            <option  v-for="raffle in raffles" :value="raffle.id">{{ raffle.name }}</option>
        </select>
        <button type="submit" class="mx-4 btn" name="theButton" value="gsheet" >
            List it
        </button>
    </form>
</template>

<script>
import { ref } from 'vue';
import router from '../router';

export default {
    name: "Raffles",
    async setup() {
        console.log(import.meta.env)
        const raffles = ref(null);
        const API_URL = `http${import.meta.env.VITE_APP_SECURE}://${import.meta.env.VITE_APP_URI}:${import.meta.env.VITE_APP_PORT}/api`;
        const entries = await fetch(`${API_URL}/getRaffles`);
        raffles.value = await entries.json()

        return { raffles }
    },
    methods: {
        onSubmit() {
            const sheetId = this.sheetId
            console.log(this.sheetId)
            router.push({name: "Raffle", params: {id: sheetId}})
        }
    }
}
</script>

<style>
</style>