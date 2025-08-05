<script setup>
const tabData = useTabData()
</script>

<template>

  
  <div>
    <h1>Tab Layout</h1>
    <div class="flex space-x-3"> 
      <div  v-for="item in tabData" :key="item.to" class="rounded-3xl space-x-3 py-1 border px-3">
        <NuxtLink :to="item.to"  class="flex space-x-1.5">  <span v-if="item.icon !== ''" v-html="item.icon"></span>  {{ item.title }}</NuxtLink> 
      </div> 
    </div>
    <slot />
  </div>
</template>