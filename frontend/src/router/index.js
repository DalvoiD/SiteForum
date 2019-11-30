import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Questions from "../views/Questions.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: '/question/:slug',
        name: 'question',
        component: Questions,
        props: true
    }
];

const router = new VueRouter({
    mode: "history",
    routes
});

export default router;
