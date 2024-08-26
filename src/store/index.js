import { createStore } from "vuex";
import juegos from "../store/juegos.json";

export default createStore({
  state: {
    juegos: juegos
  },

  // Mutaciones
  mutations: {
    incrementStock(state, index) {
      state.juegos[index].stock++;
    },
    decrementStock(state, index) {
      if (state.juegos[index].stock > 0) {
        state.juegos[index].stock--;
      }
    },
  },

  // Acciones
  actions: {
    incrementStock(context, index) {
      context.commit("incrementStock", index);
    },
    decrementStock(context, index) {
      context.commit("decrementStock", index);
    },
  },
});


