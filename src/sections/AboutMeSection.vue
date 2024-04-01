<template>
    <!-- Features Section Start -->
    <div id="about-me" class="container mx-auto px-5">
        <section class="py-16">
            <div class="w-4/5 md:w-3/5 mx-auto">
                <h2 class="text-3xl md:text-4xl font-semibold font-theme-heading text-center">{{ descriptions.aboutMe }}</h2>
                <p class="text-theme-grayish-blue text-center mt-7 font-theme-content text-lg">{{descriptions.aboutMeDescription}}</p>
            </div>
            <div class="mt-10">
                <!-- Tab Content -->
                <template v-for="(details, index) in descriptions.aboutMeDescriptionDetails" :key="details.id">
  
                    <div id="dashboard-section" class="container mx-auto px-5 md:w-3/5">
                            <div>
                                <h3 class="font-theme-heading text-2xl md:text-3xl font-medium text-center lg:text-left">{{ details.title }}</h3>
                                <p class="mt-7 font-theme-content text-lg text-theme-grayish-blue text-center lg:text-left">{{ details.text }}</p>
                        </div>
                    </div>
                </template>
                <!-- Tab Content -->
            </div>
            <div class="w-4/5 md:w-3/5 mx-auto">
                <h2 class="text-3xl md:text-4xl font-semibold font-theme-heading text-center">{{ descriptions.aboutMe }}</h2>
                <p class="text-theme-grayish-blue text-center mt-7 font-theme-content text-lg">{{descriptions.aboutMeDescription}}</p>
            </div>

            <div class="container grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 mx-auto px-5 md:w-4/5">
                <div v-for="(details, index) in descriptions.aboutMehabilities" :key="details.id">
                    <div class="px-5 md:w-4/5 w-3/5 shadow-lg rounded-lg">
                            <div>
                                <div class="flex justify-center mt-12 m-5">
                                    <img :src="details.icon" alt="Browser Logo" />
                                </div>
                                <h3 class="font-theme-heading text-2xl md:text-3xl font-medium text-center lg:text-left">{{ details.title }}</h3>
                                <p class="mt-7 font-theme-content text-lg text-theme-grayish-blue text-center lg:text-left">{{ details.text }}</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    </div>
    <!-- Features Section End -->
</template>

<script setup>

import features from '../data/features.js';
import { ref } from 'vue';
import descriptions from '../data/descriptions.js';
import Dashboards from "../components/DashboardSection.vue";

let isOpen = ref(1);

</script>
