<script setup>
const props = defineProps({
  text: String,
});
</script>

<template>
  <button @click="$emit('clickHandler')">{{ text }}</button>
</template>
