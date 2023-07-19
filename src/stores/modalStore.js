import { defineStore } from "pinia";

export const useModalStore = defineStore("modalStore", {
  state: () => ({
    isVisible: false,
    type: "",
    text: "",
    id: false,
    isFavorites: false,
  }),
  actions: {
    show(type, text, isFavorites = false, id = false) {
      this.type = type;
      this.text = text;
      if (isFavorites) {
        this.isFavorites = isFavorites;
      }
      if (id) {
        this.id = id;
      }
      this.isVisible = true;
    },
    hide() {
      this.type = "";
      this.text = "";
      this.id = false;
      this.isFavorites = false;
      this.isVisible = false;
    },
  },
});
