<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{
  error: NuxtError
}>()

useSeoMeta({
  title: 'Page not found',
  description: 'We are sorry but this page could not be found.'
})

useHead({
  htmlAttrs: {
    lang: 'en'
  }
})
 
</script>

<template>
  <UApp>
    <!-- <UError :error="props.error.message" /> -->
     <div class="flex w-full h-screen   items-center justify-center "> 
        {{ props.error.statusCode }}
        {{ props.error.message }}
     </div>
  </UApp>
</template>
