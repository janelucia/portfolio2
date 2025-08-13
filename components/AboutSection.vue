<template>
  <Section
    section-title="My journey into technology"
    section-subtitle="About me"
    highlight-word="journey"
    anchor-ref="about"
    padding-t-b="py-16"
  >
    <div class="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
      <div class="flex items-center justify-center order-2 md:order-1">
        <div class="w-full max-w-lg">
          <div class="overflow-hidden shadow-2xl rounded-2xl">
            <LiteYouTubeEmbed
              id="sR6hhkqADF0"
              title="Mein Studium an der FH Kiel: Informatik"
              muted
            />
          </div>
        </div>
      </div>

      <div class="flex flex-col justify-center order-1 gap-8 md:order-2">
        <div class="flex flex-col gap-6">
          <div
            class="flex flex-col gap-4 text-lg leading-relaxed text-gray-600 md:text-xl"
          >
            <p>
              My path into tech started in an unexpected way. Studying Sociology
              and Educational Science taught me how technology can influence
              people and communities.
            </p>
            <p>
              Now, while studying Computer Science at the University of Applied
              Sciences Kiel, I’m learning to combine technical skills with an
              awareness of human needs.
            </p>
            <p class="font-semibold text-gray-900">
              I aim to create digital solutions that are useful, thoughtful, and
              accessible.
            </p>
          </div>
        </div>

        <div class="flex flex-col gap-4">
          <h3 class="text-xl font-semibold text-gray-900">What drives me</h3>
          <ul class="flex flex-col gap-3">
            <li class="flex items-start gap-3">
              <div
                class="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-primary"
              ></div>
              <span class="text-gray-600"
                >Creating inclusive digital experiences</span
              >
            </li>
            <li class="flex items-start gap-3">
              <div
                class="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-primary"
              ></div>
              <span class="text-gray-600"
                >Exploring how technology can support people</span
              >
            </li>
            <li class="flex items-start gap-3">
              <div
                class="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-primary"
              ></div>
              <span class="text-gray-600">Continuous learning and growth</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Section>
</template>

<script setup lang="ts">
import Section from "~/components/Section.vue";
import LiteYouTubeEmbed from "vue-lite-youtube-embed";
import "vue-lite-youtube-embed/style.css";
</script>
