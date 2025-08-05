 

<script setup lang="ts">
import { useWindowSize } from '@vueuse/core';
 
let {hbar, wbar} = useSideBarData()
 
 
const { width } = useWindowSize()

 
const isBelowLg = computed(() => width.value < 1024)

watch(isBelowLg, (newVal, oldVal) => {
  if (!newVal && hbar.value) { 
    hbar.value = !newVal
  }
}) 
</script>
<template>
    <div id="sidebard-dahsboard" class="transition-all duration-300 transform relative hidden lg:flex flex-col min-h-svh min-w-16  *: shrink-0 border-r border-default bg-elevated/25 w-(--width) bg-gradient-to-r from-pool-50 to-pool-50/55  " :style="{ '--width': wbar }">
      <div class=" shrink-0 flex items-center gap-1.5 px-4  h-(--ui-header-height) text-white justify-center space-x-2">
        <NuxtImg format="webp" src="/img/logo.png" width="50" placeholder />
        <NuxtImg format="webp" src="/img/logo1.png" width="100" placeholder :class="!hbar?'':'hidden'"/>
      </div>
      <!-- INI UNTUK VERSI MOBILE --> 
      <UDrawer v-if="isBelowLg" v-model:open="hbar" direction="left" class="!rounded-r-none !bg-gradient-to-r !from-pool-50 !to-pool-50/55 !overflow-hidden" 
          :handle="false" 
          :ui="{  
          container: '!pl-4  !pr-0 !pt-4 !pb-0 !overflow-hidden ', 
          header: 'flex items-center justify-between !px-4', body:'w-96 overflow-y-auto' }"
      >  
          <template #header>
              <div class="flex items-center space-x-2 justify-center "> 
              <NuxtImg src="/img/logo.png" width="50" placeholder format="webp"/>
              <NuxtImg src="/img/logo1.png" width="100" placeholder format="webp" />
              </div>
          <UButton color="neutral" variant="ghost" icon="i-lucide-x" @click="hideSidebar" class="cursor-pointer"/>
          </template>
          <template #body> 
            <div class="pr-4">
                    <div v-for="(item, index) in menu":key="index">
                      <h4 class="font-semibold text-white mb-3 text-xl"  >{{ item.label }}</h4>  
                        <LayoutPartialsMenuLink
                            v-for="(data, i) in item.data"
                            :key="i"
                            :item="data" 
                            :ismobile="false"
                          />
                      
                    </div>

         
            </div>
          </template>
      </UDrawer>

      

      <!-- INI UNTUK VERSI WEB -->
      <div class="flex flex-col gap-1 flex-1 overflow-y-auto px-4 overflow-x-hidden scrollbar-none   hover:scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100   py-2">
        
        <div v-for="(item, index) in menu":key="index">
          <h4 class="font-semibold text-white mb-3" :class="hbar ? 'text-xs text-wrap text-center':'text-lg '" >{{ item.label }}</h4> 
         
            <LayoutPartialsMenuLink
              v-for="(data, i) in item.data"
              :key="i"
              :item="data"
              :ismobile="hbar"
              />
           
        </div>
      </div>

      <div class="shrink-0 flex items-center gap-1.5 px-4 py-2" style="box-shadow: 0 -2px 4px -1px rgba(0, 0, 0, 0.06);"> 
        
        <button type="button"  class="rounded-md font-medium  flex items-center disabled:cursor-not-allowed aria-disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:opacity-75 transition-colors px-2.5 py-1.5 text-sm  w-full justify-center  space-x-1 hover:bg-pool-50  group text-white"> 
          <span>Poolpack v.4.0</span>
          <UIcon name="i-icon-park-outline-share" class="lucide lucide-external-link w-4 h-4 group-hover:rotate-45 transform transition-all duration-300 "></UIcon>
        </button> 
      </div>
    </div>
</template>