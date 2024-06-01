<template>
    <section id="home" class="d-flex justify-center align-center h-screen">
        <v-container>
            <v-row align="center">
                <v-col cols="9">
                    <p class="text-white poppins-medium mb-3">Bonjour ! Je suis -</p>
                    <h1 class="text-h1 poppins-bold mb-5">Arnaud <span class="text-indigo-lighten-1">Rebel</span></h1>
                    <h2 class="text-h5 poppins-bold mb-7">Développeur Web Frontend <span class="text-indigo-lighten-1">.</span></h2>
                    <div class="d-flex">
                        <v-btn class="mr-6 bg-indigo-lighten-1" href="tel:+33647858942">
                            <v-icon size="30" aria-hidden="true" icon="mdi-phone"></v-icon>
                        </v-btn>
                        <v-btn class="mr-6 bg-indigo-lighten-1" href="mailto:arnaud.rebel@gmail.com">
                            <v-icon size="30" aria-hidden="true" icon="mdi-email"></v-icon>
                        </v-btn>
                        <v-btn class="mr-6 bg-indigo-lighten-1" href="https://www.linkedin.com/in/arnaudrebel/">
                            <v-icon class="mr-2" size="30" aria-hidden="true" icon="mdi-linkedin"></v-icon>
                            LinkedIn
                        </v-btn>
                        <v-btn class="bg-indigo-lighten-1" href="https://github.com/Rebelfront">
                            <v-icon  class="mr-2"size="30" aria-hidden="true" icon="mdi-github"></v-icon>
                            Github
                        </v-btn>
                    </div>
                </v-col>
                <v-col cols="3">
                    <img class="w-100" src="@imgs/backgrounds/bg-arnaud.png" alt="">
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script setup lang="ts"></script>