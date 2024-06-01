<template>
    <section id="skills" class="d-flex justify-center align-center mb-15">
        <v-container>
                <h2 class="text-h3 poppins-medium mb-5">Compétences</h2>
                <p class="mb-10">Voici les technologies que je maitrise !</p>
                <v-row>
                    <v-col cols="1" v-for="skill in skills">
                        <i :class="skill.iconClass"></i>
                    </v-col>
                </v-row>
        </v-container>
    </section>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const skills = ref([
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