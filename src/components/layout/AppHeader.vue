<template>
    <v-app-bar id="home">
        <v-container class="mx-auto d-flex align-center justify-center">
            <v-app-bar-nav-icon 
                variant="text" 
                @click.stop="drawer = !drawer"
                v-if="$vuetify.display.smAndDown"
            >
            </v-app-bar-nav-icon>
            <v-app-bar-title class="text-uppercase">
                <v-btn @click="goTo('#home')">
                    <span class="font-weight-bold">Arnaud rebel</span>&nbsp;<span class="text-indigo-lighten-1 font-weight-bold">dev</span>
                </v-btn>
            </v-app-bar-title>
            <template v-if="$vuetify.display.mdAndUp">
                <v-btn 
                    :class="anchor.highlight && 'bg-indigo-lighten-1'" 
                    v-for="anchor in headerAnchors" 
                    @click="goTo(anchor.link, { offset: -100})"
                >
                    {{ anchor.text }}
                </v-btn>
            </template>
        </v-container>
    </v-app-bar>
    <v-navigation-drawer
        v-if="$vuetify.display.smAndDown"
        v-model="drawer"    
    >
        <div class="d-flex flex-column pa-5">
            <v-btn 
                :class="anchor.highlight && 'bg-indigo-lighten-1'" 
                v-for="anchor in headerAnchors" 
                @click="goTo(anchor.link, {duration: 1000, offset: -100})"
            >
            {{ anchor.text }}
        </v-btn>
        </div>
    </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useGoTo } from 'vuetify';

const goTo = useGoTo();
const drawer = ref(false);

const headerAnchors = ref([
    {
        text: 'Parcours',
        link: '#about',
        highlight: false
    },
    {
        text: 'Compétences',
        link: '#skills',
        highlight: false
    },
    {
        text: 'Projets',
        link: '#work',
        highlight: false
    },
    {
        text: 'Contact',
        link: '#contact',
        highlight: true
    },
])

</script>