<template>
  <Section
    text-size="text-2xl md:text-4xl"
    bg-color="bg-secondary"
    section-title="Contact"
    bg-color-section="bg-background"
    anchor-ref="contact"
  >
    <div
      class="flex flex-col items-center w-full gap-4 md:flex-row md:items-end md:justify-between"
    >
      <div class="flex flex-col w-full gap-4">
        <h3 class="text-4xl font-bold">Let's create together</h3>
        <p class="text-lg md:text-xl">
          I am always open for new projects and collaborations.
          <br />
          If you have an idea or a project in mind, feel free to contact me.
        </p>
      </div>
      <div>
        <a
          :href="`mailto: ${contactInfos.email.url}`"
          class="text-lg md:text-lg"
        >
          <button class="px-4 py-2 rounded shadow-sm bg-secondary">
            janeluciaschoenfeld@gmail.com
          </button>
        </a>
      </div>
    </div>
  </Section>
</template>

<script setup lang="ts">
import Section from "~/components/Section.vue";
import aboutJson from "~/helper/about.json";

const contactInfos = aboutJson.contact;
</script>