<template>
    <section id="skills" class="d-flex justify-center align-center">
        <v-container>
                <h2 class="text-h3 poppins-black text-decoration-underline mb-10">Mes compétences</h2>
                <p class="mb-3">Voici les technologies que je maitrise !</p>
                <ul class="d-flex">
                    <li v-for="skill in skills">
                        <i :class="skill.iconClass"></i>
                    </li>
                </ul>
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