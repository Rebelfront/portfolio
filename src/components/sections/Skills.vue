<template>
    <section id="skills" class="d-flex justify-center align-center mb-15">
        <v-container>
            <h2 class="text-h3 poppins-medium mb-5">Compétences</h2>
            <h3 class="mb-10">Les technologies que je maitrise :</h3>
            <v-row class="mb-10">
                <v-col cols="4" md="1" v-for="skill in skills">
                    <i :class="skill.iconClass"></i>
                </v-col>
            </v-row>
            <h3>Je me forme sur :</h3>
            <i class="devicon-nuxtjs-plain-wordmark colored nuxt-icon"></i>
        </v-container>
    </section>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import { Skill } from '@/models/skill.model';

    const skills = ref<Skill[]>([
        {
            iconClass: 'devicon-vuejs-plain-wordmark colored'
        },
        {
            iconClass: 'devicon-typescript-plain colored'
        },
        {
            iconClass: 'devicon-javascript-plain colored'
        },
        {
            iconClass: 'devicon-html5-plain-wordmark colored'
        },
        {
            iconClass: 'devicon-css3-plain-wordmark colored'
        },
        {
            iconClass: 'devicon-sass-original colored'
        },
        {
            iconClass: 'devicon-git-plain-wordmark colored'
        }
    ]);
</script>