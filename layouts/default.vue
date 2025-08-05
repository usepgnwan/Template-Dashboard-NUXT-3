
<template> 
  <div class="fixed inset-0 flex overflow-hidden">
    <LayoutSideBar></LayoutSideBar>
    <div  class="  flex flex-col min-w-0 min-h-svh lg:not-last:border-r lg:not-last:border-default flex-1 overflow-y-auto sticky top-0" style=""> 
      <LayoutHeader></LayoutHeader>
      <div class="p-4">
          <slot />
      </div> 
    </div>
  </div> 
</template>