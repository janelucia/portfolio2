<template>
  <Section
    :section-title="$t('contact.title')"
    :section-subtitle="$t('contact.subtitle')"
    :highlight-word="$t('contact.highlight')"
    anchor-ref="contact"
    padding-t-b="py-16"
  >
    <div class="flex flex-col max-w-4xl gap-8 mx-auto">
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-4 text-center">
          <p class="text-lg leading-relaxed text-gray-600 md:text-xl">
            {{ $t("contact.description") }}
          </p>
        </div>

        <div class="flex flex-col gap-4">
          <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <ContactButton
              :url="contactInfos.linkedin.url"
              :icon="contactInfos.linkedin.icon"
              icon-class="text-blue-600"
              contact-name="LinkedIn"
            />

            <ContactButton
              :url="contactInfos.xing.url"
              :icon="contactInfos.xing.icon"
              icon-class="text-green-600"
              contact-name="Xing"
            />

            <ContactButton
              :url="contactInfos.github.url"
              :icon="contactInfos.github.icon"
              icon-class="text-gray-900"
              contact-name="GitHub"
            />

            <ContactButton
              :url="contactInfos.email.url"
              :icon="contactInfos.email.icon"
              icon-class="text-red-600"
              contact-name="Email"
            />
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>

<script setup lang="ts">
import Section from "~/components/Section.vue";
import aboutJson from "~/helper/about.json";

const contactInfos = aboutJson.contact;
</script>
