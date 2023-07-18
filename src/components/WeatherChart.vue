<script setup>
import { onMounted } from "vue";
import Chart from "chart.js/auto";

onMounted(() => {
  const chrt = document.getElementById("weather-chart");
  const chart = new Chart(chrt, {
    type: "line",
    data: [],
  });
  chart;
});
</script>

<template>
  <div>
    <canvas id="weather-chart"></canvas>
  </div>
</template>

<style scoped></style>
