import { defineStore } from "pinia";
import axios from "axios";

export const useRegisterStore = defineStore("register", {
  //state
  state: () => {
    return {
      user: {
        username: "",
        password: "",
      },
      //   username: "",
      //   password: "",;;
    };
  },
  //getters
  getters: {
    // getUsername: (state) => state.username,
    // getPassword: (state) => state.password
    // getUser: (state) => state.user
  },
  //actions
  actions: {
    registerUser(user) {
      async function reg() {
        try {
          const res = await axios.post("http://localhost:1001/register", user);
          alert(res.data);
        } catch (error) {
          alert(error.response.data)
        }
      }
      reg();
    },
  },
});
