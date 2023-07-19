import { defineStore } from "pinia";

export const useModalStore = defineStore("modalStore", {
  state: () => ({
    isVisible: false,
    type: "",
    text: "",
  }),
  actions: {
    show(type, text) {
      this.type = type;
      this.text = text;
      this.isVisible = true;
    },
    hide() {
      this.type = "";
      this.text = "";
      this.isVisible = false;
    },
  },
});
