<template>
    <section id="work" class="d-flex justify-center align-center mb-15">
        <v-container>
            <h2 class="text-h3 poppins-medium mb-10">Réalisations</h2>
            <p class="mb-6">Voici quelques un des projets web sur lesquels j'ai travaillé en tant que développeur front-end.</p>
            <v-row align="center">
                <v-col v-for="card in workCards" cols="6">
                    <v-card :image="card.image">
                        <v-card-item>
                            <v-card-title>{{ card.title }}</v-card-title>
                            <v-card-subtitle>{{ card.subtitle }}</v-card-subtitle>
                        </v-card-item>
                        <v-card-text>
                            {{ card.description }}
                        </v-card-text>
                        <v-card-actions>
                            <v-btn class="bg-indigo-lighten-1" :href="card.liveUrl">Voir le site</v-btn>
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

    const workCards = ref([
        {
            title: "",
            subtitle: "Comparateur d'assurances de prêt immobilier",
            description: "Technos utilisées: Vue.js 2, Twig, Bootstrap 5",
            image: "@imgs/backgrounds/bg-magnolia.jpg",
            liveUrl: "https://www.magnolia.fr/",
            codeUrl: ""
        },
        {
            title: "",
            subtitle: "Comparateur d'assurances de prêt immobilier",
            description: "Technos utilisées: Vue.js 2, Twig, Bootstrap 5",
            image: "@imgs/backgrounds/bg-magnolia.jpg",
            liveUrl: "https://www.magnolia.fr/",
            codeUrl: ""
        }
    ])

</script>