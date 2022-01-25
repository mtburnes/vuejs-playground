import { createWebHistory, createRouter } from "vue-router";
// import Home from "@/views/Home.vue"
import PageNotFound from '@/views/PageNotFound.vue'
import AboutMe from '@/views/AboutMe.vue'

const routes = [
    {
        path: "/",
        alias: "/index.html",
        name: "AboutMe",
        component: AboutMe,
    },
    {
        path: '/:catchAll(.*)*',
        name: "PageNotFound",
        component: PageNotFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router