<script setup>
import Raffles from './Raffles.vue'

</script>
<template>
    <Suspense>
        <template #default>
            <Raffles />
        </template>
        <template #fallback>
            Loading...
        </template>
    </Suspense>
</template>

<style scoped>

</style>