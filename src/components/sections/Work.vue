<template>
    <section id="work" class="d-flex justify-center align-center mb-15">
        <v-container>
            <h2 class="text-h3 poppins-medium mb-10">Projets</h2>
            <p class="mb-6">Les projets web sur lesquels je travaille sur mon temps libre.</p>
            <v-row align="center">
                <v-col v-for="card in workCards" cols="3">
                    <v-card hover :image="card.image">
                        <v-card-item>
                            <v-card-title>{{ card.title }}</v-card-title>
                            <v-card-subtitle v-if="card.subtitle">{{ card.subtitle }}</v-card-subtitle>
                        </v-card-item>
                        <v-card-text>
                            {{ card.description }}
                        </v-card-text>
                        <v-card-actions>
                            <v-btn v-if="card.liveUrl" class="bg-indigo-lighten-1" :href="card.liveUrl">Voir le site</v-btn>
                            <v-btn v-if="card.codeUrl" class="bg-indigo-lighten-1" :href="card.codeUrl">Voir le code</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import introBg from '@imgs/backgrounds/bg-intro.jpg';

    const workCards = ref([
        {
            title: "Mon portfolio",
            subtitle: "",
            description: "Technos: Vue.js 3 (composition API), Vite, Vuetify, Vercel",
            image: introBg,
            liveUrl: "",
            codeUrl: "https://www.magnolia.fr/"
        },
        {
            title: "Mon prochain projet",
            subtitle: "Work in progress",
            description: "Technos: Vue.js 3, Nuxt 3, tailwind",
            image: introBg,
            liveUrl: "",
            codeUrl: ""
        },
    ])

</script>