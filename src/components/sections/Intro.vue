<template>
    <v-parallax 
        :src="bgIntro"
        class="h-screen mb-15"
    >
        <section id="home" class="d-flex justify-center align-center fill-height">
            <v-container>
                <v-row align="end">
                    <v-col md="7">
                        <p class="text-white poppins-medium mb-3">Bonjour ! Je suis</p>
                        <h2 class="text-md-h1 text-h2 poppins-bold mb-5">Arnaud <span class="text-indigo-lighten-1">Rebel</span></h2>
                        <h1 class="text-h5 poppins-bold mb-7">Développeur Web Frontend <span class="text-indigo-lighten-1">.</span></h1>
                        <div class="d-flex flex-wrap">
                            <v-btn 
                                v-for="btn in btns" 
                                class="mr-6" 
                                :href="btn.href"
                                :target="btn.external ? '_blank' : '_self'"
                                :aria-label="btn.ariaLabel"
                            >
                                <v-icon size="30" aria-hidden="true" :icon="btn.icon"></v-icon>
                            </v-btn>
                        </div>
                    </v-col>
                </v-row>
            </v-container> 
        </section>
    </v-parallax>
</template>

<script setup lang="ts">
    import bgIntro from "@imgs/backgrounds/bg-intro.jpg";
    import { ref } from "vue";

    const btns = ref([
        {
            href: "tel:+33647858942",
            icon: "mdi-phone",
            ariaLabel: "me téléphoner",
            external: false
        },
        {
            href: "mailto:arnaud.rebel@gmail.com",
            icon: "mdi-email",
            ariaLabel: "m'envoyer un mail",
            external: false
        },
        {
            href: "https://www.linkedin.com/in/arnaudrebel/",
            icon: "mdi-linkedin",
            ariaLabel: "aller sur mon linkedin - ouvre un nouvel onglet",
            external: true
        },
        {
            href: "https://github.com/Rebelfront",
            icon: "mdi-github",
            ariaLabel: "aller sur mon profil github - ouvre un nouvel onglet",
            external: true
        }
    ]);
</script>