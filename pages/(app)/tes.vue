<script setup> 
const tabData = useTabData()
tabData.value = [
  { to: '/tes', title: 'tes', icon: '' },
  { to: '/tes/detail', title: 'tes detail', icon: '' }, 
]
</script>
<template>
  <NuxtLayout  name="tab">
    <NuxtPage />
  </NuxtLayout>
</template>
