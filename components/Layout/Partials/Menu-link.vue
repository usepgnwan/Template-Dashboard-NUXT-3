<script setup lang="ts">
import type { itemMenu } from '~/interface'; 
const route = useRoute()
let props =defineProps<{
    item : itemMenu,
    ismobile: boolean
}>()
let uri = ref<string>(route.fullPath) 
const localItem = ref(structuredClone(props.item));

watch(() => route.fullPath, (newPath) => {
  uri.value = newPath
  renewMenu(uri.value, localItem.value) 
})
 

onMounted(()=>{ 
  renewMenu(uri.value, localItem.value)
})

function renewMenu(newPath : string, item : itemMenu){
    if (item.children) {
        localItem.value.active = newPath.startsWith(item.parent_to ?? '') ;
        localItem.value.class = item.active ? '!text-primary  before:!bg-elevated ' : '';
        localItem.value.defaultOpen = item.active;
        localItem.value.children = item.children.map((child) => ({
        ...child,
        active: child.to === newPath,
        class : child.to === newPath  ? '!text-primary before:!bg-elevated/50' : 'text-white hover:text-elevated'
        }))
    } 
}
</script>
<template>
        <ul class="isolate min-w-0 space-y-1.5 mb-1 " orienta v-if="localItem.children == null"> 
          <li data-state="closed" data-orientation="vertical" class="min-w-0">  
            <NuxtLink :href="localItem.to" class="group relative w-full flex items-center gap-1.5 font-medium text-sm before:absolute before:z-[-1]  rounded-md focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-2 focus-visible:before:ring-primary flex-row px-2.5 py-1.5 before:inset-y-px " v-if="!ismobile" :class="uri === localItem.to ? 'text-primary bg-elevated':'text-white hover:text-primary hover:bg-elevated'" >
                <UIcon :name="localItem.icon" class="h-5 w-5" />
                <span class="truncate">{{ localItem.label }}  </span>   
            </NuxtLink> 
            <!-- saat button hide full --> 
            <UTooltip
                :content="{
                  align: 'center',
                  side: 'right',
                  sideOffset: 8
                }" 
                v-if="ismobile" 
              >

             
                <UButton  variant="subtle" :class="uri === localItem.to ? 'text-primary bg-elevated' : 'text-white hover:text-primary hover:!bg-elevated !bg-transparent !ring-0 active:!bg-transparent '"  > 
                <slot name="label">
                    
                    <UIcon :name="localItem.icon" class="h-5 w-5" />
                </slot>
                </UButton>
                <template #content>
                  <div class="py-3 px-1 ">
                      <NuxtLink :to="localItem.to" class="block hover:text-primary cursor-pointer">  {{ localItem.label }}   </NuxtLink> 
                  </div> 
                </template>
                 
              </UTooltip> 
          </li> 
        </ul> 
     
 
      <UNavigationMenu   
                        orientation="vertical"
                        :items="[localItem]"
                        v-if="localItem.children != null && !ismobile"
                        class="data-[orientation=vertical]:w-full mb-1"
                        :ui="{
                            wrapper: 'w-full',                       // wrapper utama
                            list: 'space-y-1',                       // daftar menu
                            item: 'w-full',                          // item wrapper
                            link: 'flex items-center gap-2 px-3 py-2 text-white hover:text-primary rounded-md transition-all', // link utama 
                            linkIcon: 'text-white group-hover:text-primary', // icon di link
                            linkLeadingIcon: 'text-white group-hover:text-primary', // ikon awal
                            child: 'ml-4 border-l border-white pl-3',         // sub-menu
                            childLink: 'block text-white hover:text-primary py-1', // link di sub-menu
                            childLinkActive: 'text-primary font-bold', // aktif di sub-menu
                            childLinkDescription: 'text-xs text-gray-400', // deskripsi sub-menu
                        }"
                        />

         <ul class="isolate min-w-0 space-y-1.5 mb-1" orienta  v-if="localItem.children != null && ismobile"> 
          <li data-state="closed" data-orientation="vertical" class="min-w-0">  
            <NuxtLink :href="localItem.to" class="group relative w-full flex items-center gap-1.5 font-medium text-sm before:absolute before:z-[-1]  rounded-md focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-2 focus-visible:before:ring-primary flex-row px-2.5 py-1.5 before:inset-y-px text-white hover:text-primary hover:bg-elevated" v-if="!ismobile" >
                <UIcon :name="localItem.icon" class="h-5 w-5" />
                <span class="truncate">{{ localItem.label }}</span>   
            </NuxtLink> 
            <!-- saat button hide full --> 
            <UTooltip
                :content="{
                  align: 'center',
                  side: 'right',
                //   sideOffset: 8
                 
               
                }" 
                v-if="ismobile"  
                :ui="{ content:'!h-auto !w-auto !flex-wrap !flex-col'}"
              >    
            
                <UButton  variant="subtle" :class="'text-white hover:text-primary hover:!bg-elevated !bg-transparent !ring-0 active:!bg-transparent '"  > 
                <slot name="label">
                    <UIcon :name="localItem.icon" class="h-5 w-5" />
                </slot>
                </UButton>
                <template #content>  
                        <div class="flex flex-col relative px-1 py-0.5 space-y-1">
                            <p class="  font-semibold mb-1">{{ localItem.label }}</p>  
                            <NuxtLink v-for="(value, index) in localItem.children"
                                :to="value.to"
                                :key="index"
                                class="block hover:text-primary cursor-pointer"
                                >
                                {{ value.label }}
                            </NuxtLink>
                         
                        </div>
                     
                </template>
                 
              </UTooltip> 
          </li> 
        </ul>
</template>