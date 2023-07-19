<script setup>
import { ref, onMounted } from "vue";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { chartLabels } from "../helpers/chartLabels";
import { chartData } from "../helpers/chartData";
import { weatherByDays } from "../helpers/weatherByDays";
import CustomButton from "./CustomButton.vue";

Chart.register(ChartDataLabels);

const { weather, id } = defineProps({
  weather: Array,
  id: Number,
});

const chartId = `weather-chart ${id}`;

const defaultOption = ref(true);
const weatherForFiveDays = weatherByDays(weather);

const chartDataLabels = chartLabels(weather);
const chartDataTemp = chartData(weather);
let chart;

const handleOptionClick = (isOneDay) => {
  defaultOption.value = isOneDay;
  const chartDataLabels = isOneDay
    ? chartLabels(weather)
    : chartLabels(weatherForFiveDays, true);
  const chartDataTemp = isOneDay
    ? chartData(weather)
    : chartData(weatherForFiveDays, true);
  chart.data.labels = chartDataLabels;
  chart.data.datasets.data = chartDataTemp;
  chart.update();
};

onMounted(() => {
  const chrt = document.getElementById(chartId);
  chart = new Chart(chrt, {
    type: "line",
    data: {
      labels: chartDataLabels,
      datasets: [
        {
          data: chartDataTemp,
          borderWidth: 1,
          borderColor: "#fff",
          backgroundColor: "#fff",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      layout: {
        padding: {
          top: 50,
        },
      },
      events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
      animations: {
        tension: {
          duration: 1000,
          easing: "linear",
          from: 1,
          to: 0,
          loop: true,
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        datalabels: {
          anchor: "start",
          align: "top",
          color: "white",
          font: {
            weight: "bold",
          },
        },
      },
      scales: {
        x: {
          ticks: { color: "#fff", beginAtZero: true },
          grid: {
            display: false,
          },
        },
        y: {
          display: false,
          grid: {
            display: false,
          },
        },
      },
    },
  });
  chart;
});
</script>

<template>
  <div class="weather-chart-container">
    <h4 class="weather-chart-heading">Temperature</h4>
    <div class="weather-chart-btns">
      <CustomButton
        class="btn-option"
        :class="{ 'btn-option-active': defaultOption }"
        @clickHandler="handleOptionClick(true)"
        >1 day</CustomButton
      >
      <CustomButton
        class="btn-option"
        :class="{ 'btn-option-active': !defaultOption }"
        @clickHandler="handleOptionClick(false)"
        >5 days</CustomButton
      >
    </div>
    <canvas :id="chartId"></canvas>
  </div>
</template>

<style scoped>
.weather-chart-container {
  max-height: 30rem;
  position: relative;
}

.weather-chart-heading {
  position: absolute;
  right: 10rem;
  top: 0;
  color: var(--color-gold);
}

.weather-chart-btns {
  position: absolute;
  right: 0;
  top: 0;
}

.btn-option {
  background: transparent;
  color: var(--color-white);
  border: none;
  margin-right: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in;
}
.btn-option:focus {
  outline: none;
}

.btn-option:hover,
.btn-option-active {
  color: var(--color-gold);
}
</style>
