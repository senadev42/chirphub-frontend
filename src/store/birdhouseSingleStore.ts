import { defineStore } from "pinia";
import { AxiosError } from "axios";
import api_axios from "../api";
import { reactive } from "vue";

interface SingleBirdhousePayload extends Payload {
  singlebirdhouse: BirdhouseWithLog;
}

export const useBirdhouseSingle = defineStore({
  id: "birdhousesingle",
  state: (): SingleBirdhousePayload => ({
    singlebirdhouse: reactive({}) as BirdhouseWithLog,
    loading: false,
    error: "",
    loaded: false,
  }),
  getters: {
    getbirdhouse: (state) => {
      return state.singlebirdhouse;
    },
  },
  actions: {
    async fetchSingleBirdhouse() {
      try {
        this.loading = true;
        //[ ] update with dynamic url later when dropping mock server
        const response = await api_axios.get("singlebirdhouse");
        this.singlebirdhouse = response.data;
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
