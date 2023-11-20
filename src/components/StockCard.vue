<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  stock: {
    type: Object,
    required: true,
  }
})
const getStyles = () =>{
  if(props.stock?.tradeComparision==='high'){
    return {
      bgColor: "bg-green-100",
      svgPath: "M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941",
      textColor: "text-green-600",
      strokeColor: "green"
    };
  }
  else if(props.stock?.tradeComparision==='low'){
    return {
      bgColor: "bg-red-100",
      svgPath: "M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181",
      textColor: "text-red-600",
      strokeColor: "red"
    };
  }
  else{
    return {
      bgColor: "bg-gray-100",
      svgPath: "M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941",
      textColor: "text-gray-500",
      strokeColor: "gray"
    }
  }
}
</script>

<template>
  <div class="flex flex-col bg-white p-4 m-4">
    <div class="flex flex-row mb-2">
      <!-- Left Column -->
      <div class="flex flex-col">
        <span class="text-left">{{ stock?.name }}</span>
        <span class="text-2xl font-extrabold">{{ stock?.price }}</span>
      </div>

      <!-- Right Column -->
      <div :class="[getStyles().bgColor, 'flex ml-4 rounded text-left']">
          <div class="p-2 w-16">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" :stroke-width="1.5" :stroke="getStyles().strokeColor" class="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" :d="getStyles().svgPath" />
            </svg>
            <span :class="getStyles().textColor">{{ stock?.peRatio }}%</span>
          </div>
      </div>
    </div>
    <p class="text-left text-sm text-gray-500">
        Updated {{ stock?.updatedDate }} {{ stock?.marketCloseTime }}
    </p>
  </div>
</template>
  