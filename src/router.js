import Vue from "vue";
import Router from "vue-router";
import HomePage from "./views/Home.vue";
import AboutPage from "./views/About.vue";
import HistoryPage from "./views/History.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage
    },
    {
      path: "/about",
      name: "about",
      component: AboutPage
    },
    {
      path: "/history",
      name: "history",
      component: HistoryPage
    }
  ]
});
