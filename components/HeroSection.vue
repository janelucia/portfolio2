<template>
  <Section
    bg-color-section="bg-white"
    section-title=""
    bg-color="bg-accent"
    text-size="text-2xl md:text-4xl"
    anchor-ref="hello"
    padding-t-b="pt-0"
  >
    <div class="flex flex-col-reverse items-center gap-6 md:flex-row">
      <div class="flex flex-col justify-between flex-1 h-full gap-4">
        <h1 class="text-4xl md:text-5xl lg:text-6xl text-text-light">
          Moin, I am Jane.
        </h1>
        <p class="leading-relaxed md:text-lg">
          a {{ old() }} y/o frontend developer based in Kiel, currently doing my
          computer science studies at the University of Applied Sciences Kiel.
          <br />
          As a former Sociology and educational science major I am particularly
          interested in the intersection of technology and society.
          <br />
          Helping build a digital world which suits the needs of everyone is my
          main goal.
        </p>
        <div
          class="flex flex-col w-full gap-4 lg:flex-row lg:justify-between lg:items-end"
        >
          <div class="flex flex-col w-full gap-2 lg:w-1/2">
            <p class="md:text-lg">Here is the last thing I did:</p>
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
          <div class="flex flex-col items-center gap-4 md:flex-row">
            <a
              href="#contact"
              class="px-4 py-2 rounded shadow-sm bg-accent hover:bg-primary md:text-lg"
            >
              Contact Me
            </a>
            <div class="flex gap-4">
              <a
                v-for="contact in contactInfos"
                :key="contact.url"
                :href="contact.url"
              >
                <Icon :name="contact.icon" class="text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex justify-center w-full sm:w-1/2 lg:w-1/3 lg:max-w-sm md:justify-start"
      >
        <NuxtPicture
          format="webp"
          src="/images/Jane.jpg"
          :img-attrs="{
            class: 'rounded w-full h-auto md:h-full object-cover',
          }"
        />
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
