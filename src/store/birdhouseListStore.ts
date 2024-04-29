import { defineStore } from "pinia";
import { AxiosError } from "axios";
import api_axios from "../api";
import { reactive } from "vue";

export const useBirdhouseList = defineStore({
  id: "birdhouselist",
  state: () => ({
    birdhouses: reactive([]),
    loading: false,
    error: "",
    loaded: false,
  }),
  getters: {
    birdhouselist: (state) => {
      return state.birdhouses;
    },
  },
  actions: {
    async fetchBirdhouses() {
      try {
        this.loading = true;
        const response = await api_axios.get("house");
        this.birdhouses = response.data;
        console.log(response.data);
      } catch (error) {
        // console.error(error.message);
        if (error instanceof AxiosError) this.error = error.message;
      } finally {
        this.loading = false;
        this.loaded = true;
      }
    },
  },
});
