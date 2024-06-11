<template>
    <section id="contact" class="d-flex justify-center align-center">
        <v-container>
            <h2 class="text-h3 poppins-medium mb-10">Contact</h2>
            <p class="mb-15">Vous êtes intéréssé par mon profil ? N'hésitez pas à me contacter !</p>
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
        </v-container>
    </section>
</template>

<script setup lang="ts">
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