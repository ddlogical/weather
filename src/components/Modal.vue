<script setup>
import CustomButton from "./CustomButton.vue";
import { useModalStore } from "../stores/modalStore";
import { useWeatherStore } from "../stores/weatherStore";

const modalStore = useModalStore();
const weatherStore = useWeatherStore();

const handleConfirmClick = () => {
  if (modalStore.type === "warn") {
    modalStore.hide();
  }
  if (modalStore.type === "delete") {
    if (!modalStore.isFavorites) {
      if (weatherStore.index === 0) {
        modalStore.hide();
        modalStore.show("warn", "You can't delete last city.");
      } else {
        weatherStore.deleteWeather(modalStore.id);
        modalStore.hide();
      }
    } else {
    }
  }
};
</script>

<template>
  <div class="modal" @click="modalStore.hide()">
    <div class="modal-content" @click.stop="">
      <div class="modal-data">
        <p>{{ modalStore.text }}</p>
        <div class="modal-btns">
          <CustomButton class="modal-btn" @clickHandler="handleConfirmClick"
            >OK</CustomButton
          >
          <CustomButton
            v-if="modalStore.type === 'delete'"
            class="modal-btn"
            @clickHandler="modalStore.hide()"
            >No</CustomButton
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal {
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5000;
  width: 100%;
  transition: all 0.3s;
}
.modal-content,
.modal-data {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.modal-content {
  width: 50%;
  min-height: 30rem;
  background-color: var(--color-accent-lightest);
  padding: 2rem;
  font-size: 3rem;
  text-align: center;
  border-radius: 5px;
}

.modal-data > p {
  margin-bottom: 3rem;
}

.modal-btns {
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.modal-btn {
  cursor: pointer;
  background-color: transparent;
  width: 10rem;
  height: 4rem;
  font-size: 2rem;
  border: 1px solid var(--color-white);
  color: var(--color-white);
  border-radius: 3px;
  transition: all 0.2s ease-in;
}
.modal-btn:focus {
  outline: none;
}
.modal-btn:hover {
  color: var(--color-accent-lightest);
  background-color: var(--color-white);
}
</style>
