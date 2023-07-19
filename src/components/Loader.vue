<script setup>
const { active } = defineProps({ active: Boolean, text: String });
</script>

<template>
  <div v-if="active" class="loader-wrapper">
    <div class="loader">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <p>{{ text }}</p>
  </div>
</template>

<style scoped>
p {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 300;
  letter-spacing: 1px;
  font-size: 3rem;
  color: var(--color-white);
}

.loader-wrapper {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.loader {
  display: inline-block;
  position: relative;
  width: 21.6rem;
  height: 21.6rem;
}
.loader div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 20rem;
  height: 20rem;
  margin: 8px;
  border: 8px solid #6916a0;
  border-radius: 50%;
  animation: loader 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #6916a0 transparent transparent transparent;
}
.loader div:nth-child(1) {
  animation-delay: -0.45s;
}
.loader div:nth-child(2) {
  animation-delay: -0.3s;
}
.loader div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes loader {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
