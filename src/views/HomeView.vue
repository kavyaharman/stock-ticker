<script setup lang="ts">
import { reactive } from "vue";
import StockCard from '@/components/StockCard.vue';

const handleClick = (stock: { url: string; }) =>{
  window.location.href = stock.url;
}

const stocks = reactive([
  {
    name: "TMUS",
    price: "$134.13",
    tradeComparision: "high",
    peRatio: "2.02",
    updatedDate: "13/10/2023",
    marketClose: true,
    marketCloseTime: "12:50PM",
    url: "https://harman.com"
  },
  {
    name: "TMUS",
    price: "$146.13",
    tradeComparision: "low",
    peRatio: "3.02",
    updatedDate: "13/10/2023",
    marketClose: true,
    marketCloseTime: "Market Close",
    url: "https://harman.com"
  },
  {
    name: "TMUS",
    price: "$134.13",
    tradeComparision: "constant",
    peRatio: "0",
    updatedDate: "13/10/2023",
    marketClose: true,
    marketCloseTime: "12:50PM",
    url: "https://harman.com"
  }
]);
</script>

<template>
  <div class="flex flex-col items-center justify-center bg-pink-900 w-72 mx-auto mt-4">
    <StockCard class="hover:cursor-pointer" 
              v-for="stock in stocks" 
              :key="stock.name" 
              :stock="stock" 
              v-on:click="handleClick(stock)"/>
  </div>
</template>