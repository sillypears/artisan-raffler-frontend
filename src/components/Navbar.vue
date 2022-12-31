<script setup>
import router from '../router/index';
const data = router.getRoutes()

</script>

<template>
    <div class="m-5 p-5">
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item" v-for="route in data">
                    <a class="nav-link" :href=route.path> {{ route.name }} </a>
                </li>
            </ul>
        </div>
    </nav>
    <router-view></router-view>
    </div>
</template>

<style scoped>

</style>