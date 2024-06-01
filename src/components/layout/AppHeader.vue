<template>
    <v-app-bar>
        <v-container class="mx-auto d-flex align-center justify-center">
            <v-app-bar-title>
                <span class="font-weight-bold">Arnaud REBEL</span> <span class="text-indigo-lighten-1 font-weight-bold">Dev</span>
            </v-app-bar-title>
            <v-btn v-for="anchor in headerAnchors" :href="anchor.link">{{ anchor.text }}</v-btn>
        </v-container>
    </v-app-bar>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const headerAnchors = ref([
    {
        text: 'Parcours',
        link: '#about'
    },
    {
        text: 'Compétences',
        link: '#skills'
    },
    {
        text: 'Réalisations',
        link: '#work'
    },
    {
        text: 'Contact',
        link: '#contact'
    },
])

</script>