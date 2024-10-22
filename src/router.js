import { createRouter, createWebHistory } from 'vue-router';
import PageHome from './pages/PageHome.vue';
import PagePortfolio from './pages/PagePortfolio.vue';
import PageSingleProject from './pages/PageSingleProject.vue';
import PageContacts from './pages/PageContacts.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path :'/',
            name: 'homepage',
            component: PageHome
        },
        {
            path: '/portfolio/:slug',
            name: 'single-project',
            component: PageSingleProject
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            component: PagePortfolio
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: PageContacts,
        }

    ]
})

export { router }