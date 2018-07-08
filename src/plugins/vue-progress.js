import Vue from "vue";
import VueProgressBar from "vue-progressbar";

const options = {
  color: "#ffffff",
  failedColor: "red",
  thickness: "5px",
  transition: {
    speed: "2s",
    opacity: "0.6s",
    termination: 300
  },
  autoRevert: true,
  location: "left",
  inverse: false,
  autofinish: false
};

Vue.use(VueProgressBar, options);
