import { defineStore } from "pinia";

export const useModalStore = defineStore("modalStore", {
  state: () => ({
    isVisible: false,
    type: "",
    text: "",
    id: false,
  }),
  actions: {
    show(type, text, id = false) {
      this.type = type;
      this.text = text;
      if (id) {
        this.id = id;
      }
      this.isVisible = true;
    },
    hide() {
      this.type = "";
      this.text = "";
      this.id = false;
      this.isVisible = false;
    },
  },
});
