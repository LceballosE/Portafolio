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
        <a btn-type="primary" :href="link" target="_blank" class="text-sm">ver dashboard</a>
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

</script>
