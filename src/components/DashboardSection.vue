<template>
    <!-- Download Section Start -->
    <div class="flex justify-center mt-12 m-5">
        <img :src="icon" alt="Browser Logo" />
    </div>
    <h3 class="text-2xl font-theme-heading font-medium text-center mt-6">{{ title }}</h3>
    <p class="text-md font-theme-content text-theme-grayish-blue text-center mt-3">{{ description }}</p>
    <div class="my-7">
        <img class="w-full" src="/images/bg-dots.svg" alt="Dot Backaground" />
    </div>
    <div class="flex justify-center mb-8">
                                
        <a :href="link" target="_blank" class="font-theme-heading font-medium bg-theme-primary px-6 py-2 text-white rounded shadow-md hover:bg-white border-2 border-transparent hover:border-theme-primary hover:text-theme-primary cursor-pointer transition duration-200 mr-5">
                                  {{descriptions.viewDashboard}}                                   
        </a>
    </div>
    <!-- Download Section End -->
</template>
<script setup>
defineProps({
  icon: String,
  title: String,
  link: String,
  description: String,
})

import descriptions from '../data/descriptions.js';

</script>
