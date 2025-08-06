<script setup lang="ts">
import { PartialsInputFloating, UIcon } from '#components';
import lottie from 'lottie-web'
// import login_animate from '~/public/file/login_animate.json'
const lottieContainer = ref(null)
definePageMeta({
    layout: 'auth'
});
const isLoading = ref<Boolean>(true)
onMounted(() => {
 const animation = lottie.loadAnimation({
    container: lottieContainer.value,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/file/login_screen.json'
  });
  console.log(isLoading.value)
  animation.addEventListener('DOMLoaded', () => {
    isLoading.value = false
    console.log(isLoading.value)
  })
});


interface ruleform {
    username?: string;
    password? :any;
}

let form  = reactive<ruleform>({
    username : '',
    password : ''
})

watch(form , (val)=>{
    console.log(val)
})

let typePassword = ref<string>('password');
let iconPassword = ref<string>('i-mdi-show');
function show(){
    typePassword.value = typePassword.value == 'password' ? 'text' : 'password';
    iconPassword.value = typePassword.value == 'password' ? 'i-mdi-show' : 'i-humbleicons-eye-close';
}
</script>
<template>
    <div class="w-full h-screen  relative">
        <div class="grid grid-cols-1 lg:grid-cols-2 h-full"> 
            <div class=" items-center justify-center hidden lg:flex h-full">
                <div v-if="isLoading"  class="w-3/4 h-72 inset-0 bg-gray-200 animate-pulse rounded-xl  "  ></div>
                <div ref="lottieContainer" class="w-[40rem] relative "   :class="!isLoading ? '' : 'hidden'">
                    <div class="  absolute bottom-32  text-white shadow-sm text-center  bg-pool-50 px-4 rounded-3xl  left-4"> 
                        Poolpack v.4.0 
                    </div>
                </div>
            </div>
            <div class="items-center justify-center flex h-full flex-col bg-gradient-to-r from-pool-50 to-pool-50/55 space-y-6">
                <div class=" shrink-0 flex items-center gap-1.5 px-4  h-(--ui-header-height) text-white justify-center space-x-2">
                    <NuxtImg format="webp" src="/img/logo.png" width="60" placeholder />
                    <NuxtImg format="webp" src="/img/logo1.png" width="150" placeholder  />
                </div>
                <div class="w-3/4 bg-white shadow-md rounded-2xl p-4 flex flex-col space-y-5">
                    <h3 class="font-semibold text-xl">
                        Login to Your Account
                    </h3>
                    <div class="space-y-3 py-5">
                       <PartialsInputFloating
                        v-model:value="form.username"   
                       id="email"
                       name="email"
                       label="Email / Nohp / Username"
                       /> 
                       <div class="relative">
                        <PartialsInputFloating
                        v-model:value="form.password"   
                        id="password"
                        name="password"
                        :type="typePassword"
                        label="Password"
                        /> 

                        <UIcon :name="iconPassword" class="absolute right-0 top-1/2 -translate-1/2 cursor-po" v-on:click="show"></UIcon>
                       </div>
                        <div class="flex justify-between">
                            <UCheckbox label="Remember me" />
                            <p class="text-pool-50">Forgot Password?</p>
                        </div>
                    </div>
                    <UButton 
                        :ui="{ 
                        base: [
                            ' text-lg rounded-md font-medium inline-flex items-center disabled:cursor-not-allowed aria-disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:opacity-75 justify-center text-white !bg-pool-50/90  hover:!bg-pool-50 active:!bg-pool-50 cursor-pointer',
                            'transition-colors'
                            ],
                        }"
                        >
                        Login
                    </UButton>
                </div>
                 
            </div>
        </div>
      
    </div>
</template>