<script lang="ts">
  import { browser } from "$app/environment";
  import { Chart, registerables } from "chart.js";
  import { onMount } from "svelte";

  export let data: any;

  Chart.register(...registerables);
  let barChartElement: HTMLCanvasElement;

  onMount(() => {
    if (browser) {
      new Chart(barChartElement, {
        type: "line",
        data: data,
        options: {
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              grid: {
                color: "rgba(255, 255, 255, 30%)",
              },
              ticks: { color: "white", padding: 10 },
            },
            y: {
              beginAtZero: false,
              grid: {
                color: "transparent",
              },
              ticks: { color: "white", font: { size: 14 }, padding: 10 },
            },
          },
        },
      });
    }
  });
</script>

<div class="p-6 min-h-[250px]">
  <canvas bind:this={barChartElement} />
</div>
