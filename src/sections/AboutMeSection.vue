<template>
    <!-- Download Section Start -->
    <div id="about-me" class="container mx-auto px-5">
        <section class="py-16">
            <div class="mb-5">
                <h2 class="text-3xl md:text-4xl font-semibold font-theme-heading text-center">{{ descriptions.aboutMe }}</h2>
                <p class="text-theme-grayish-blue text-center mt-7 font-theme-content text-lg">{{ descriptions.aboutMeDescription}}</p>
            </div>

            <div class="items-center">
                <ul class="grid lg:grid-cols-2 items-center mt-10  gap-8">
                    <div>
                            <img class="z-10 w-full" :src="descriptions.image" />
                    </div>
                    <div class="grid items-center">
                        <template v-for="(details, index) in descriptions.aboutMeDescriptionDetails" :key="details.id">
                            <div>
                                <h3 class="font-theme-heading text-2xl md:text-3xl font-medium text-center lg:text-left">{{ details.title }}</h3>
                                <p class="mt-7 font-theme-content text-lg text-theme-grayish-blue text-center lg:text-left">{{ details.text }}</p>
                                <div class="flex justify-center lg:justify-center mt-7">
                                </div>
                            </div>
                    </template>
                    </div>
                </ul>
            </div>

        </section>
    </div>
    <!-- Download Section End -->
</template>
<script setup>
import descriptions from '../data/descriptions.js';

import { ref } from 'vue';

let isOpen = ref(1);
</script>
