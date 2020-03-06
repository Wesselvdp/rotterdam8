import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lang: "nl",
    country: "nl",
  },
  mutations: {
    setLocales(state, newLang) {
      const country = newLang === "nl" ? newLang : "be";
      state.lang = newLang;
      state.country = country;
      // Create global vars for easy referencing copy
      Vue.prototype.$country = country;
      Vue.prototype.$lang = newLang;
    },
  },
  actions: {

  },
});
