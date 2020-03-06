import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { sentryInit, Sentry } from "../utils/Sentry";

// Omni tagging
import "../utils/OmniTagging";

const VueAxe = require('vue-axe')

Vue.config.productionTip = false;

// Save language to store
// eslint-disable-next-line no-undef
const siteCode = typeof digitalData !== 'undefined' ? digitalData.page.pageInfo.siteCode : "nl";
store.commit("setLocales", siteCode);

// Initiate Sentry on during production only
if (process.env.NODE_ENV === "production") {
  sentryInit("0");
} else {
  console.log("running in development mode, Sentry is not initiated");
}

// We want to access the Vue devtools on Staging
if (process.env.VUE_APP_MODE !== 'staging') {
  Vue.config.devtools = true
}

if (process.env.NODE_ENV === 'development') {
  Vue.use(VueAxe, {
    config: {
      // ...
      rules: [
        { id: 'heading-order', enabled: true },
        { id: 'label-title-only', enabled: true },
        // and more
      ],
    },
  })
  Vue.config.productionTip = false
}

new Vue({
  Sentry,
  router,
  store,
  render: h => h(App),
}).$mount("#app");
