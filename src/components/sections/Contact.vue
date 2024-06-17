<template>
    <section id="contact" class="d-flex justify-center align-center">
        <v-container>
            <h2 class="text-h3 poppins-medium mb-10">Contact</h2>
            <p class="mb-15">Vous êtes intéréssé par mon profil ? N'hésitez pas à me contacter !</p>
            <ContactLinks />
        </v-container>
    </section>
</template>

<script setup lang="ts">
    import ContactLinks from "@components/ContactLinks.vue";
</script>