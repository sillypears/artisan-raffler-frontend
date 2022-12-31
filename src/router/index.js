import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../components/Home.vue';
import RaffleView from '../components/RafflePage.vue';


const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomeView,
            display: true
        },
        {
            path: '/raffle/:id',
            name: 'Raffle',
            component: RaffleView,
            display: false
        },
    ]
})

export default router;