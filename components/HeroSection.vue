<template>
  <Section
    bg-color-section="bg-white"
    section-title=""
    bg-color="bg-accent"
    text-size="text-2xl md:text-4xl"
    anchor-ref="hello"
    padding-t-b="pt-0">
    <div
      class="grid items-center min-h-screen grid-cols-1 gap-8 md:grid-cols-2">
      <div class="flex items-center justify-center order-1 md:order-2">
        <div class="w-full max-w-lg">
          <NuxtPicture
            format="webp"
            src="/images/Jane.jpg"
            alt="Portrait of Jane, a frontend developer from Kiel"
            :img-attrs="{
              class: 'w-full h-auto object-contain rounded-2xl shadow-2xl',
            }"
          />
        </div>
      </div>

      <div class="flex flex-col justify-center order-2 gap-8 md:order-1">
        <div class="flex flex-col gap-6">
          <h1
            class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
            {{ $t("hero.greeting") }}<br />
            {{ $t("hero.intro") }} <span class="text-primary">Jane</span>
          </h1>

          <div
            class="flex flex-col gap-4 text-lg md:text-xl leading-relaxed text-gray-600">
            <p>{{ old() }} {{ $t("hero.description1") }}</p>
            <p>
              {{ $t("hero.description2") }}
            </p>
            <p class="font-semibold text-gray-900">
              {{ $t("hero.description3") }}
            </p>
          </div>
        </div>

        <div class="flex flex-wrap items-center gap-6">
          <a
            href="#contact"
            class="inline-flex items-center justify-center w-full h-12 px-4 text-lg font-medium text-white transition-colors rounded-lg bg-primary hover:bg-accent min-w-32 md:w-auto focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            aria-label="Navigate to contact section">
            {{ $t("hero.getInTouch") }}
          </a>

          <nav
            aria-label="Social media links"
            class="flex items-center w-full gap-4 justify-evenly md:w-auto">
            <a
              v-for="contact in contactInfos"
              :key="contact.url"
              :href="contact.url"
              :aria-label="`Visit ${contact.name || 'social media'} profile`"
              class="text-2xl text-gray-600 transition-colors rounded hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              target="_blank"
              rel="noopener noreferrer">
              <Icon :name="contact.icon" />
            </a>
          </nav>
        </div>

        <section
          aria-labelledby="latest-activity-heading"
          class="flex flex-col gap-6 mt-12 md:mt-0">
          <div class="flex flex-col items-center gap-2 text-center md:hidden">
            <p
              class="text-sm font-semibold tracking-widest text-gray-500 uppercase"
              aria-hidden="true">
              {{ $t("hero.activity") }}
            </p>
            <h3
              id="latest-activity-heading"
              class="text-2xl font-bold text-gray-900">
              {{ $t("hero.latestActivity") }}
            </h3>
          </div>

          <div class="hidden md:flex md:flex-col md:gap-1">
            <h3
              id="latest-activity-heading"
              class="text-xl font-semibold text-gray-900">
              {{ $t("hero.latestActivity") }}
            </h3>
          </div>
          <div
            class="overflow-hidden border border-gray-200 bg-gray-50 rounded-xl">
            <CommitCard
              :avatar-url="latestCommit?.committer.avatar_url"
              :repository-name="latestCommit?.repository.name"
              :owner-name="latestCommit?.repository.owner.name"
              :commit-message="latestCommit?.message"
              :committer-name="latestCommit?.committer.name"
              :commit-date="latestCommit?.date"
              :repository-url="latestCommit?.repository.html_url"
              :owner-url="latestCommit?.repository.owner.html_url"
              :committer-url="latestCommit?.committer.html_url"
              :commit-url="latestCommit?.html_url"
            />
          </div>
        </section>
      </div>
    </div>

    <div
      v-if="!isScrolled"
      class="absolute bottom-0 left-0 flex justify-center w-full lg:hidden">
      <Icon
        class="text-5xl bg-white rounded-full animate-bounce"
        name="bi:arrow-down-short"
      />
    </div>
  </Section>
</template>

<script setup lang="ts">
import Section from "~/components/Section.vue";
import aboutJson from "~/helper/about.json";

const contactInfos = aboutJson.contact;

const { data: latestCommit } = useFetch("/api/github/latestCommit");

const isScrolled = ref(false);

function checkScroll() {
  const scrollY = window.scrollY;
  isScrolled.value = scrollY > 0;
}

const old = () => {
  const currentDate = new Date();
  let yearOld = currentDate.getFullYear() - 1996;
  if (currentDate.getMonth() < 11 && currentDate.getDate() < 26) {
    yearOld -= 1;
  }
  return yearOld;
};

onMounted(() => {
  window.addEventListener("scroll", checkScroll);
  setTimeout(() => {
    isScrolled.value = true;
  }, 5000);
});

onUnmounted(() => {
  window.removeEventListener("scroll", checkScroll);
});
</script>

<style scoped>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-scroll {
  animation: scroll 30s linear infinite;
}
</style>
