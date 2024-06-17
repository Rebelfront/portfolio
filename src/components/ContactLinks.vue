<template>
    <v-row>
        <v-col cols="3" md="1" v-for="btn in btns">
            <v-btn  
                class="mr-6" 
                :href="btn.href"
                :target="btn.external ? '_blank' : '_self'"
                :aria-label="btn.ariaLabel"
            >
                <v-icon size="30" aria-hidden="true" :icon="btn.icon"></v-icon>
            </v-btn>
        </v-col>
    </v-row>
</template>

<script setup lang="ts">
    import { ref } from "vue";
    import { ContactLink } from "@/models/contactLink.model";

    const btns = ref<ContactLink[]>([
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