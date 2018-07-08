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
      component: HomePage,
      meta: {
        progress: {
          func: [
            {
              call: "color",
              modifier: "temp",
              argument: "#ffffff"
            },
            { call: "fail", modifier: "temp", argument: "#6e0000" },
            { call: "location", modifier: "temp", argument: "top" },
            {
              call: "transition",
              modifier: "temp",
              argument: {
                speed: "2s",
                opacity: "0.6s",
                termination: 400
              }
            }
          ]
        }
      }
    },
    {
      path: "/about",
      name: "about",
      component: AboutPage,
      meta: {
        progress: {
          func: [
            {
              call: "color",
              modifier: "temp",
              argument: "#ffffff"
            },
            { call: "fail", modifier: "temp", argument: "#6e0000" },
            { call: "location", modifier: "temp", argument: "top" },
            {
              call: "transition",
              modifier: "temp",
              argument: {
                speed: "2s",
                opacity: "0.6s",
                termination: 400
              }
            }
          ]
        }
      }
    },
    {
      path: "/history",
      name: "history",
      component: HistoryPage,
      meta: {
        progress: {
          func: [
            {
              call: "color",
              modifier: "temp",
              argument: "#ffffff"
            },
            { call: "fail", modifier: "temp", argument: "#6e0000" },
            { call: "location", modifier: "temp", argument: "top" },
            {
              call: "transition",
              modifier: "temp",
              argument: {
                speed: "2s",
                opacity: "0.6s",
                termination: 400
              }
            }
          ]
        }
      }
    }
  ]
});
