<script setup>

import features from '../data/features.js';
import { ref } from 'vue';
import descriptions from '../data/descriptions.js';
import Dashboards from "../components/DashboardSection.vue";

let isOpen = ref(1);

</script>

<template>
    <!-- Features Section Start -->
    <div id="features" class="container mx-auto px-5">
        <section class="py-16">
            <div class="w-4/5 md:w-3/5 mx-auto">
                <h2 class="text-3xl md:text-4xl font-semibold font-theme-heading text-center">{{ descriptions.myProjects }}</h2>
                <p class="text-theme-grayish-blue text-center mt-7 font-theme-content text-lg">{{descriptions.projectDescription}}</p>
            </div>

            <div class="mt-10">
                <ul class="flex flex-col items-center md:flex-row justify-center font-theme-heading">
                    <li v-for="feature in features" :key="feature.id" :class="isOpen === feature.id ? 'md:border-b-4 md:border-theme-secondary' : ''" class="w-full md:w-56 cursor-pointer hover:text-theme-secondary transition duration-200 border-b-2 border-t-2 md:border-t-0 flex justify-center">
                        <a @click.prevent="isOpen = feature.id" href="#" :class="isOpen === feature.id ? ' border-theme-secondary' : ''" class="py-5  md:border-b-0 border-b-4">{{ feature.name }}</a>
                    </li>
                </ul>
            </div>

            <div class="mt-16">
                <!-- Tab Content -->
                <template v-for="feature in features" :key="feature.id">
                    <div v-show="isOpen === feature.id" class="grid gap-32 lg:grid-cols-2 items-center">
                        <div class="relative">
                            <img class="z-10 w-full" :src="feature.details.imageUrl" />
                            <div class="-z-10 bg-theme-primary h-52 w-96 sm:h-80 sm:w-full rounded-r-full absolute -left-56 -bottom-16"></div>
                        </div>
                        <div>
                            <h3 class="font-theme-heading text-2xl md:text-3xl font-medium text-center lg:text-left">{{ feature.details.title }}</h3>
                            <p class="mt-7 font-theme-content text-lg text-theme-grayish-blue text-center lg:text-left">{{ feature.details.description }}</p>
                            <div class="flex justify-center lg:justify-start mt-7">
                                <a class="text-theme-grayish-blue" :href="feature.details.link" target="_blank">More Info</a>
                            </div>
                        </div>
                    </div>
                    <div v-show="isOpen === feature.id" id="dashboard-section" class="container mx-auto px-5 md:w-4/5">
                        <section class="pt-10">
                            <div class="w-4/5 md:w-3/5 mx-auto">
                                <h2 class="text-3xl md:text-4xl font-theme-heading font-medium text-center">Download the extension</h2>
                                <p class="text-theme-grayish-blue text-center text-lg font-theme-content mt-7">We've got more browsers in pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.</p>
                            </div>
                            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <div v-for="(dashboard, index) in feature.dashboards" :key="dashboard.id" class="shadow-lg rounded-lg">
                                <Dashboards :title ="dashboard.title" :icon="dashboard.icon" :link="dashboard.link" :description="dashboard.description">
                                </Dashboards>
                            </div>
                            </div>
                        </section>
                    </div>
                </template>
                

                <!-- Tab Content -->
            </div>
        </section>
    </div>
    <!-- Features Section End -->
</template>
