<template>
    <section id="about" class="d-flex justify-center align-center mb-15">
        <v-container>
            <v-row align="center">
                <v-col md="6">
                    <h2 class="text-h3 poppins-medium mb-10">A propos</h2>
                    <p class="mb-3">Suite à un début de carrière dans l'ingénieurie du son et la musique, je suis développeur web Frontend depuis 2018.</p>
                    <p class="mb-3">J'ai travaillé pour des clients grand-comptes dans des secteurs très diverses (banque, assurance, événementiel...) avec des contraintes métier et techniques complexes et variées.</p>
                    <p class="mb-10">Fort de cette expérience riche et doté d'une forte sensibilité UI, je me mets au service de vos projets web pour créer des interfaces et une codebase de qualité.</p>
                    <p class="mb-10">Vous voulez en savoir plus sur mon parcours ?</p>
                    <v-btn aria-label="Télécharger mon cv" href="" download class=" mr-6">
                        cv
                        <v-icon class="mr-2"size="30" aria-hidden="true" icon="mdi-download"></v-icon>
                    </v-btn>
                    <v-btn aria-label="aller sur mon linkedin - ouvre un nouvel onglet" class="mr-6" target="_blank" href="https://www.linkedin.com/in/arnaudrebel/">
                        <v-icon class="mr-2" size="30" aria-hidden="true" icon="mdi-linkedin"></v-icon>
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script setup lang="ts">
    import cvBg from "@imgs/backgrounds/bg-cv.svg";
</script>