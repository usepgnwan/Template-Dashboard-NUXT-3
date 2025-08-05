<script setup lang="ts">
let {hbar ,wbar} = useSideBarData();

watch(hbar, (newVal, oldVal) => { 
   hbar.value = newVal;
})
</script>

<template>
    <div class="h-(--ui-header-height) shrink-0 flex items-center justify-between  px-4 sm:px-6 gap-1.5 sticky top-0 bg-white border-b border-default"> 
        <div class="flex justify-between w-full">
          <div class="flex space-x-2 items-center">
            <button class="leading-none cursor-pointer" @click="hideSidebar">
              <UIcon :name="hbar ? 'i-mynaui-panel-right-close-solid' : 'i-mynaui-panel-left-close-solid' " class="w-6 h-6" />
            </button>
            <div class="font-semibold">Home</div>
          </div>
          <div class="flex items-end space-x-3">
            <div class="rounded-3xl px-3 py-1  shadow text-white  bg-gradient-to-b from-pool-50 to-pool-50/55 items-center flex space-x-2">
              <UAvatar src="https://github.com/benjamincanac.png" /> 
              <p>Usep</p> 
            </div>
          </div>
        </div>
    </div>
</template>