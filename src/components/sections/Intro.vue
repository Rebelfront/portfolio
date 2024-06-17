<template>
    <v-parallax 
        :src="bgIntro"
        class="h-screen mb-15"
    >
        <section id="home" class="d-flex justify-center align-center fill-height position-relative">
            <v-container>
                <v-row align="end">
                    <v-col md="7">
                        <p class="text-white poppins-medium mb-3">Bonjour ! Je suis</p>
                        <h2 class="text-md-h1 text-h2 poppins-bold mb-5">Arnaud <span class="text-indigo-lighten-1">Rebel</span></h2>
                        <h1 class="text-h5 poppins-bold mb-7">Développeur Web Frontend <span class="text-indigo-lighten-1">.</span></h1>
                    </v-col>
                </v-row>
                <ContactLinks />
            </v-container>
            <v-btn icon="mdi-arrow-down" aria-label="scroller vers la section parcours" class="scroll-down-btn" @click="goTo('#about', {duration: 1000, offset: -100})"></v-btn>
        </section>
    </v-parallax>
</template>

<script setup lang="ts">
    import bgIntro from "@imgs/backgrounds/bg-intro.jpg";
    import ContactLinks from "@components/ContactLinks.vue";
    import { useGoTo } from 'vuetify';

    const goTo = useGoTo();
</script>