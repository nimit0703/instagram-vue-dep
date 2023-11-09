import { createStore } from "vuex";
import state from "./types/state";
import getters from "./types/getters";
import mutations from "./types/mutations";
import actions from "./types/actions";

const store = createStore({
  state,
  mutations,
  actions,
  getters,
});

export default store;
