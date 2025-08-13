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
          <p class="text-lg leading-relaxed text-gray-600">
            {{ $t("contact.description") }}
          </p>
        </div>

        <div class="flex flex-col gap-4">
          <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <a
              :href="`https://${contactInfos.linkedin.url}`"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-center gap-3 p-6 transition-all duration-300 border border-gray-200 bg-gray-50 rounded-xl hover:shadow-lg hover:border-blue-200 hover:bg-blue-50 group"
            >
              <Icon
                :name="contactInfos.linkedin.icon"
                class="w-8 h-8 text-blue-600 transition-transform group-hover:scale-110"
              />
              <span
                class="text-lg font-semibold text-gray-900 group-hover:text-blue-700"
                >LinkedIn</span
              >
            </a>

            <a
              :href="`https://${contactInfos.xing.url}`"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-center gap-3 p-6 transition-all duration-300 border border-gray-200 bg-gray-50 rounded-xl hover:shadow-lg hover:border-green-200 hover:bg-green-50 group"
            >
              <Icon
                :name="contactInfos.xing.icon"
                class="w-8 h-8 text-green-600 transition-transform group-hover:scale-110"
              />
              <span
                class="text-lg font-semibold text-gray-900 group-hover:text-green-700"
                >Xing</span
              >
            </a>

            <a
              :href="`https://${contactInfos.github.url}`"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-center gap-3 p-6 transition-all duration-300 border border-gray-200 bg-gray-50 rounded-xl hover:shadow-lg hover:border-gray-300 hover:bg-gray-100 group"
            >
              <Icon
                :name="contactInfos.github.icon"
                class="w-8 h-8 text-gray-900 transition-transform group-hover:scale-110"
              />
              <span class="text-lg font-semibold text-gray-900">GitHub</span>
            </a>

            <a
              :href="`mailto:${contactInfos.email.url}`"
              class="flex items-center justify-center gap-3 p-6 transition-all duration-300 border border-gray-200 bg-gray-50 rounded-xl hover:shadow-lg hover:border-red-200 hover:bg-red-50 group"
            >
              <Icon
                :name="contactInfos.email.icon"
                class="w-8 h-8 text-red-600 transition-transform group-hover:scale-110"
              />
              <span
                class="text-lg font-semibold text-gray-900 group-hover:text-red-700"
                >Email</span
              >
            </a>
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
