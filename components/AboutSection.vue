<template>
  <Section
    :section-title="$t('about.title')"
    :section-subtitle="$t('about.subtitle')"
    :highlight-word="$t('about.highlight')"
    anchor-ref="about"
    padding-t-b="py-16">
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
            class="flex flex-col gap-4 text-lg md:text-xl leading-relaxed text-gray-600">
            <p v-for="paragraph in $tm('about.text')" :key="paragraph">
              {{ $rt(paragraph) }}
            </p>
            <p class="font-semibold text-gray-900">
              {{ $t("about.textHighlight") }}
            </p>
          </div>
        </div>

        <div class="flex flex-col gap-4">
          <h3 class="text-lg md:text-xl font-semibold text-gray-900">
            {{ $t("about.whatDrivesMe") }}
          </h3>
          <ul class="flex flex-col gap-3">
            <ListItem
              v-for="paragraph in $tm('about.whatDrivesMeText')"
              :text="$rt(paragraph)"
              disk-color="bg-accent"
            />
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
