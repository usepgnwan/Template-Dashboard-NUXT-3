 

<script setup lang="ts">
import { useWindowSize } from '@vueuse/core';
import cloneDeep from 'lodash.clonedeep';
 
let {hbar, wbar} = useSideBarData()
let { data_menu } = useMenuData();
 
const { width } = useWindowSize()

 
const isBelowLg = computed(() => width.value < 1024)

watch(isBelowLg, (newVal, oldVal) => {
  if (!newVal && hbar.value) { 
    hbar.value = !newVal
  }
}) 
const rawData = toRaw(menu); // Removes Proxy wrapper
const cloned = cloneDeep(rawData); // Now it works! 
let menus = reactive<any[]>([])
onMounted(()=>{
  menus.splice(0, menus.length, ...cloned) 
});


const getValue = debounceValue((val: string, newdata: any, callback: (result: any) => void) => {
  let data = cloned;

  if (val !== '' && val !== null) {
    data = newdata
      .map((v: any) => {
        const filteredChildren = v.data?.filter((child: any) =>
          child.label.toLowerCase().includes(val.toLowerCase())
        ) || [];

        const isParentMatch = v.label.toLowerCase().includes(val.toLowerCase());

        if (isParentMatch || filteredChildren.length > 0) {
          return {
            ...v,
            data: filteredChildren,
          };
        }

        return null;
      })
      .filter(Boolean); // buang null
  }

  callback(data); // kirim hasil ke luar
}, 300);

let search = ref<string>('')
watch(search, (val)=>{
  const getNewval = (filteredData : any)=>{ 
      menus.splice(0, menus.length, ...filteredData)
  }

  getValue(val, cloned, getNewval);

})
</script>
<template>
    <div id="sidebard-dahsboard" class="transition-all duration-300 transform relative hidden lg:flex flex-col min-h-svh min-w-16  *: shrink-0 border-r border-default bg-elevated/25 w-(--width) bg-gradient-to-r from-pool-50 to-pool-50/55  " :style="{ '--width': wbar }">
      <div class=" shrink-0 flex items-center gap-1.5 px-4  h-(--ui-header-height) text-white justify-center space-x-2">
        <NuxtImg format="webp" src="/img/logo.png" width="50" placeholder />
        <NuxtImg format="webp" src="/img/logo1.png" width="100" placeholder :class="!hbar?'':'hidden'"/>
      </div>
      <div class="mb-2 relative mx-4 mt-2" v-if="!hbar" >
              <UIcon name="i-ion-search" class="absolute left-4 top-1/2 -translate-1/2 z-10" ></UIcon>
              <PartialsInputFloating :statFloat="false" addClass="bg-white !pl-8 !rounded-3xl" placeholder="cari menu..." v-model:value="search"></PartialsInputFloating>
        </div>
      <!-- INI UNTUK VERSI MOBILE --> 
      <UDrawer v-if="isBelowLg" v-model:open="hbar" direction="left" class="!rounded-r-none !bg-gradient-to-r !from-pool-50 !to-pool-50/55 !overflow-hidden" 
          :handle="false" 
          :ui="{  
          container: '!pl-4  !pr-0 !pt-4 !pb-0 !overflow-hidden ', 
          header: '', body:'w-96 overflow-y-auto' }"
      >  
          <template #header>
              <div class="flex items-center justify-between !px-4">
                  <div class="flex items-center space-x-2 justify-center "> 
                    <NuxtImg src="/img/logo.png" width="50" placeholder format="webp"/>
                    <NuxtImg src="/img/logo1.png" width="100" placeholder format="webp" />
                </div>
                <UButton color="neutral" variant="ghost" icon="i-lucide-x" @click="hideSidebar" class="cursor-pointer"/>
              </div>
              <div class=" relative pr-4 mt-8" >
                    <UIcon name="i-ion-search" class="absolute left-4 top-1/2 -translate-1/2 z-10" ></UIcon>
                    <PartialsInputFloating :statFloat="false" addClass="bg-white !pl-8 !rounded-3xl" placeholder="cari menu..." v-model:value="search"></PartialsInputFloating>
              </div>
          </template>
          <template #body> 
            <div class="pr-4">
                    <div v-for="(item, index) in menus":key="index">
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
        <div v-for="(item, index) in menus":key="index">
          <h4 class="font-semibold text-white mb-3" :class="hbar ? 'text-xs text-wrap text-center':'text-lg '" >{{ item.label }}</h4> 
         
             <!-- <pre> {{ item.data }}</pre> -->
             <LayoutPartialsMenuLink
                                v-for="(data, i) in item.data"
                                :key="i"
                                :item="data" 
                                :ismobile="false"
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