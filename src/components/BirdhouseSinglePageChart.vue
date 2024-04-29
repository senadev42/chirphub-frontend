<script lang="ts" setup>
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Filler
} from "chart.js";

import { ref, watchEffect } from "vue";
import { Line } from "vue-chartjs";
import { format, parse } from 'date-fns';

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const props = defineProps({
    logs: { type: Array, required: true },
});


const chartlogs = ref<Log[]>([]);
const data = ref();

watchEffect(() => {
    chartlogs.value = [...props.logs] as Log[];

    data.value = {
        labels: chartlogs.value.map((log) => {
            const date = parse(log.createdAt.split("T")[0], 'yyyy-mm-dd', new Date());
            return format(date, 'EEEE');
        }).reverse(),
        datasets: [
            {
                label: "Birds",
                data: chartlogs.value.map((log) => log.birds).reverse(),
                borderColor: "rgba(116, 79, 153, 0.8)",
                tension: 0.3,
                fill: 'start',
                backgroundColor: "rgba(116, 79, 153, 0.1)"
            },
            {
                label: "Eggs",
                data: chartlogs.value.map((log) => log.eggs).reverse(),
                borderColor: "rgb(80, 81, 249, 0.8)",
                tension: 0.3,
                fill: "start",
                backgroundColor: "rgba(80, 81, 249, 0.1)",
            },
        ],
    };
});



const options = ref({
    responsive: true,
});
</script>

<template>
    <div class="h-[60vh] flex flex-row justify-center relative">
        <Line :data="data" :options="options" style="height: 60vh; width: 90vw;" />
    </div>

</template>
