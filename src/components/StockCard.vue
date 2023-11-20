<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  stock: {
    type: Object,
    required: true,
  }
})
const getBackgroundColor = () =>{
  if(props.stock?.tradeComparision==='high'){
    return "bg-green-100";
  }
  else if(props.stock?.tradeComparision==='low'){
    return "bg-red-100"
  }
  else{
    return "bg-gray-100"
  }
  
}
const getSVGPath = () =>{
  if(props.stock?.tradeComparision==='low'){
    return "M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181"
  }
  else{
    return "M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
  }
  
}
const getTextColor = () => {
  if(props.stock?.tradeComparision==='high'){
    return "text-green-600"
  }
  else if(props.stock?.tradeComparision==='low'){
    return "text-red-600"
  }
  else{
    return "text-gray-500"
  }
}
const getStrokeColor = () => {
  if(props.stock?.tradeComparision==='high'){
    return "green";
  }
  else if(props.stock?.tradeComparision==='low'){
    return "red"
  }
  else{
    return "gray"
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
      <div :class="[getBackgroundColor(), 'flex ml-4 rounded text-left']">
          <div class="p-2 w-16">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" :stroke-width="1.5" :stroke="getStrokeColor()" class="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" :d="getSVGPath()" />
            </svg>
            <span :class="getTextColor()">{{ stock?.peRatio }}%</span>
          </div>
      </div>
    </div>
    <p class="text-left text-sm text-gray-500">
        Updated {{ stock?.updatedDate }} {{ stock?.marketCloseTime }}
    </p>
  </div>
</template>
  