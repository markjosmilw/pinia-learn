import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  //state
  state: () => {
    return {
      count: 0,
    };
  },
  //getters
  getters: {
    getDoubleCount: (state) => state.count * 2,
    getCount: (state) => state.count
  },
  //actions
  actions: {
    increment() {
      this.count++;
    },
  },
});
