<script setup>
import Entrants from './Entrants.vue'
import { useRoute } from 'vue-router';

const sheetId = useRoute().params.id
</script>

<template>
    <Suspense>
        <template #default>
            <Entrants :sheetId=sheetId />
        </template>
        <template #fallback>
            Loading...
        </template>
    </Suspense>
</template>
    

<style>

</style>