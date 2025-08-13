<template>
  <Section
    bg-color-section="bg-white"
    section-title=""
    bg-color="bg-accent"
    text-size="text-2xl md:text-4xl"
    anchor-ref="hello"
    padding-t-b="pt-0"
  >
    <div
      class="grid items-center min-h-screen grid-cols-1 gap-8 md:grid-cols-2"
    >
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
            class="text-5xl font-bold leading-tight text-gray-900 md:text-6xl lg:text-7xl"
          >
            Moin,<br />
            I am <span class="text-primary">Jane</span>
          </h1>

          <div
            class="flex flex-col gap-4 text-lg leading-relaxed text-gray-600 md:text-xl"
          >
            <p>
              {{ old() }} year old frontend developer based in Kiel, currently
              studying computer science at the University of Applied Sciences.
            </p>
            <p>
              As a former Sociology and educational science major, I'm
              passionate about the intersection of technology and society.
            </p>
            <p class="font-semibold text-gray-900">
              Building a digital world that serves everyone.
            </p>
          </div>
        </div>

        <div class="flex flex-wrap items-center gap-6">
          <a
            href="#contact"
            class="inline-flex items-center justify-center w-full h-12 text-lg font-medium text-white transition-colors rounded-lg bg-primary hover:bg-accent min-w-32 md:w-auto focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            aria-label="Navigate to contact section"
          >
            Get in touch
          </a>

          <nav
            aria-label="Social media links"
            class="flex items-center w-full gap-4 justify-evenly md:w-auto"
          >
            <a
              v-for="contact in contactInfos"
              :key="contact.url"
              :href="contact.url"
              :aria-label="`Visit ${contact.name || 'social media'} profile`"
              class="text-2xl text-gray-600 transition-colors rounded hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon :name="contact.icon" />
            </a>
          </nav>
        </div>

        <section
          aria-labelledby="latest-activity-heading"
          class="flex flex-col gap-6 mt-12 md:mt-0"
        >
          <!-- Mobile: Corporate style for consistency -->
          <div class="flex flex-col items-center gap-2 text-center md:hidden">
            <p
              class="text-sm font-semibold tracking-widest text-gray-500 uppercase"
              aria-hidden="true"
            >
              Activity
            </p>
            <h3
              id="latest-activity-heading"
              class="text-2xl font-bold text-gray-900"
            >
              Latest activity
            </h3>
          </div>

          <!-- Desktop: Subtle style for content flow -->
          <div class="hidden md:flex md:flex-col md:gap-1">
            <h3
              id="latest-activity-heading"
              class="text-xl font-semibold text-gray-900"
            >
              Latest activity
            </h3>
          </div>
          <div
            class="overflow-hidden border border-gray-200 bg-gray-50 rounded-xl"
          >
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

    <section
      aria-labelledby="technologies-heading"
      class="flex justify-center mt-12 min-h-64 md:mt-0"
    >
      <div
        class="flex flex-col items-center justify-center w-full max-w-6xl gap-12"
      >
        <div class="flex flex-col items-center gap-2 text-center">
          <p
            class="text-sm font-semibold tracking-widest text-gray-500 uppercase"
            aria-hidden="true"
          >
            Skills
          </p>
          <h2
            id="technologies-heading"
            class="text-2xl font-bold text-gray-900"
          >
            <span class="text-primary">Technologies</span> I work with
          </h2>
        </div>

        <div
          class="flex flex-wrap items-center justify-center gap-x-12 gap-y-8"
          role="list"
          aria-label="Technology skills"
        >
          <button
            v-for="skill in skillInfos"
            :key="skill.name"
            type="button"
            class="flex items-center justify-center p-4 transition-all duration-300 rounded-lg cursor-pointer min-w-20 min-h-20 group hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            @click="setActiveSkill(skill.name)"
            :aria-label="`Learn more about ${skill.name}`"
            role="listitem"
          >
            <Icon
              v-if="skill.icon"
              :name="skill.icon"
              class="w-12 h-12 transition-colors md:w-16 md:h-16 text-primary group-hover:text-accent"
              :aria-hidden="true"
            />
            <span class="sr-only">{{ skill.name }}</span>
          </button>
        </div>

        <div class="flex justify-center text-center">
          <p class="max-w-2xl text-sm text-gray-600">
            I am always eager to learn new technologies and improve my skills.
            If you have a project in mind or want to collaborate, feel free to
            reach out!
          </p>
        </div>
      </div>
    </section>

    <div
      v-if="activeSkill"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
      @click="clearActiveSkill"
      role="dialog"
      aria-modal="true"
      :aria-labelledby="`skill-modal-title-${activeSkill}`"
      aria-describedby="skill-modal-description"
    >
      <div
        class="relative w-full max-w-sm p-6 bg-white rounded-lg shadow-xl"
        @click.stop
      >
        <button
          @click="clearActiveSkill"
          class="absolute text-gray-400 transition-colors rounded top-4 right-4 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          aria-label="Close skill details"
          type="button"
        >
          <Icon name="mdi:close" class="w-5 h-5" aria-hidden="true" />
        </button>

        <div class="pr-8">
          <div class="flex items-center gap-3 mb-3">
            <Icon
              v-if="skillInfos.find((s) => s.name === activeSkill)?.icon"
              :name="skillInfos.find((s) => s.name === activeSkill)?.icon"
              class="w-6 h-6 text-primary"
              aria-hidden="true"
            />
            <h3
              :id="`skill-modal-title-${activeSkill}`"
              class="text-lg font-semibold text-gray-900"
            >
              {{ skillInfos.find((s) => s.name === activeSkill)?.name }}
            </h3>
          </div>
          <p
            id="skill-modal-description"
            class="text-sm leading-relaxed text-gray-600"
          >
            {{ skillInfos.find((s) => s.name === activeSkill)?.description }}
          </p>
        </div>
      </div>
    </div>

    <div
      v-if="!isScrolled"
      class="absolute bottom-0 left-0 flex justify-center w-full lg:hidden"
    >
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
const skillInfos = aboutJson.skills;

const { data: latestCommit } = useFetch("/api/github/latestCommit");

const isScrolled = ref(false);
const activeSkill = ref("");

function checkScroll() {
  const scrollY = window.scrollY;
  isScrolled.value = scrollY > 0;
}

function setActiveSkill(skillName: string) {
  activeSkill.value = skillName;
}

function clearActiveSkill() {
  activeSkill.value = "";
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
