<script setup lang="ts">
import { reactive } from "vue";
import StockCard from '@/components/StockCard.vue';

const stocks = reactive([
  {
    name: "TMUS",
    price: "$134.13",
    tradeComparision: "high",
    peRatio: "2.02",
    updatedDate: "13/10/2023",
    marketClose: true,
    marketCloseTime: "13/10/2023"
  },
  {
    name: "TMUS",
    price: "$146.13",
    tradeComparision: "low",
    peRatio: "3.02",
    updatedDate: "13/10/2023",
    marketClose: true,
    marketCloseTime: "13/10/2023"
  },
  {
    name: "TMUS",
    price: "$134.13",
    tradeComparision: "constant",
    peRatio: "0",
    updatedDate: "13/10/2023",
    marketClose: true,
    marketCloseTime: "13/10/2023"
  }
]);
</script>

<template>
  <div class="flex flex-col items-center justify-center bg-pink-900 w-96 mx-auto mt-4">
    <StockCard v-for="stock in stocks" :key="stock.name" :stock="stock" />
  </div>
</template>