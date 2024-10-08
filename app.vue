<template>
  <NuxtLayout>
    <Section bg-color-section="bg-white" section-title="Hello" bg-color="bg-accent" text-size="text-2xl md:text-4xl" anchor-ref="hello" padding-t-b="pt-0">
      <div class="flex flex-col-reverse items-center gap-6 md:flex-row">
        <div class="flex flex-col gap-4 justify-between flex-1 h-full">
          <h1 class="text-4xl md:text-5xl lg:text-6xl text-text-light">I am Jane,</h1>
          <p class="md:text-lg leading-relaxed">
            a 27 y/o frontend developer based in Kiel, currently doing my computer science studies at the University of Applied Sciences Kiel.
            <br>
            As a former Sociology and educational science major I am particularly interested in the intersection of
            technology and society.
            <br>
            Helping build a digital world which suits the needs of everyone is my main goal.
          </p>
          <div class="w-full flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-end">
            <div class="flex flex-col gap-2 w-full lg:w-1/2">
              <p class="md:text-lg">Here is the last thing I did:</p>
              <CommitCard
                  :avatar-url="latestCommit.committer.avatar_url"
                  :repository-name="latestCommit.repository.name"
                  :owner-name="latestCommit.repository.owner.name"
                  :commit-message="latestCommit.message"
                  :committer-name="latestCommit.committer.name"
                  :commit-date="latestCommit.date"
                  :repository-url="latestCommit.repository.html_url"
                  :owner-url="latestCommit.repository.owner.html_url"
                  :committer-url="latestCommit.committer.html_url"
                  :commit-url="latestCommit.html_url"
                  bg-color="bg-accent"
              />
            </div>
            <div class="flex flex-col md:flex-row gap-4 items-center">
              <a href="#contact" class="px-4 py-2 bg-accent rounded hover:bg-primary shadow-sm md:text-lg">
                Contact Me
              </a>
              <div class="flex gap-4">
                <a v-for="contact in contactInfos" :key="contact" :href="contact.url">
                  <Icon :name="contact.icon" class="text-2xl"/>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full sm:w-1/2 lg:w-1/3 lg:max-w-sm flex justify-center md:justify-start">
          <NuxtPicture format="webp" src="/images/Jane.jpg" :img-attrs="{ class: 'rounded w-full h-auto md:h-full object-cover' }"/>
        </div>
      </div>
      <div v-if="!isScrolled" class="w-full flex justify-center absolute bottom-0 left-0 lg:hidden">
        <Icon class="text-5xl bg-white rounded-full animate-bounce"  name="bi:arrow-down-short"/>
      </div>
    </Section>
    <Section text-size="text-lg md:text-2xl" bg-color="bg-accent" section-title="Skills" bg-color-section="bg-background">
      <div class="flex flex-wrap gap-4 justify-center md:justify-between relative" >
        <a
            v-for="skill in skillInfos"
            :key="skill.name"
            class="flex flex-col items-center gap-2 w-1/3 md:w-1/5 cursor-pointer"
        >
          <div
              class="hover:bg-accent rounded p-4 flex flex-col items-center"
              @click.stop="setActiveSkill(skill.name)"
              @mouseenter="setActiveSkill(skill.name)"
              @mouseleave="clearActiveSkill"
          >
            <Icon
                v-if="skill.icon"
                :name="skill.icon"
                alt="Logo"
                class="w-16 h-16"
            />
            {{ skill.name }}
              <Card v-if="activeSkill === skill.name" :title="skill.name" :icon="skill.icon" :close-icon="clearActiveSkill" bg-card-color="bg-secondary text-text-light rounded shadow-lg z-10 w-full lg:w-1/2 p-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" >
                {{skill.description}}
              </Card>
          </div>
        </a>
      </div>
    </Section>
    <Section text-size="text-lg md:text-2xl" bg-color="bg-accent" section-title="Education" bg-color-section="bg-white">
      <div class="flex flex-col gap-4 lg:flex-row justify-between">
        <div class="flex flex-col gap-4 w-full">
          <ul v-for="education in educationInfos" :key="education.program">
            <Card :title="education.institution" :additional-information="education.period" :subtitle="education.program" bg-card-color="bg-background">
              <p v-if="education.grade" class="text-gray-700" > {{ education.grade }} </p>
              <ul class="text-gray-700 list-disc list-inside" v-for="detail in education.details">
                <li>{{ detail }}</li>
              </ul>
            </Card>
          </ul>
        </div>
        <div class="lg:w-1/2">
          <LiteYouTubeEmbed id="sR6hhkqADF0" title="Mein Studium an der FH Kiel: Informatik" muted></LiteYouTubeEmbed>
          <div class="w-full relative flex justify-end">
            <Icon name="material-symbols:info-outline" class="text-2xl cursor-pointer text-text-light" @click="toggleTooltip" @mouseover="showTooltip(true)" @mouseleave="showTooltip(false)"/>
            <div v-if="isTooltipVisible" class="absolute top-full mt-2 p-2 bg-secondary text-text-light rounded shadow-lg">
              <p class="text-lg">I had the pleasure to speak on behalf of my studies: computer science at the University of Applied Sciences.</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
    <Section text-size="text-lg md:text-2xl" bg-color="bg-accent" section-title="Work" bg-color-section="bg-background">
      <ul v-for="work in workInfos" :key="work.company">
          <Card :title="work.company" :additional-information="work.period" :subtitle="work.position" bg-card-color="bg-white">
            <ul class="text-gray-700 list-disc list-inside" v-for="detail in work.details">
              <li>{{ detail }}</li>
            </ul>
          </Card>
      </ul>
    </Section>
    <Section text-size="text-2xl md:text-4xl" bg-color="bg-primary" section-title="Projects" bg-color-section="bg-white" anchor-ref="projects">
      <ul v-for="project in projectInfos" :key="project.name">
        <li>
          <Card :title="project.name" :additional-information="project.currentState" :image="project.image" bg-card-color="bg-background">
            <p>{{ project.description }}</p>
            <div class="flex items-center justify-end gap-4">
              <a :href="project.githubUrl" class="text-2xl">
                <Icon :name="contactInfos.github.icon" />
              </a>
              <a v-if="project.liveUrl" class="px-4 py-2 bg-primary rounded hover:bg-accent shadow-sm text-lg md:text-lg" :href="project.liveUrl" target="_blank">
                Try it out
              </a>
            </div>
          </Card>
        </li>
    </ul>
    </Section>
    <Section text-size="text-2xl md:text-4xl" bg-color="bg-secondary" section-title="Contact" bg-color-section="bg-background" anchor-ref="contact">
      <div class="flex flex-col gap-4 md:flex-row items-center md:items-end md:justify-between w-full">
        <div class="flex flex-col w-full gap-4">
          <h3 class="font-bold text-4xl">Let's create together</h3>
          <p class="text-lg md:text-xl">
            I am always open for new projects and collaborations.
            <br>
            If you have an idea or a project in mind, feel free to contact me.
          </p>
        </div>
        <div>
          <a :href="`mailto: ${contactInfos.email.url}`" class="text-lg md:text-lg" >
            <button class="px-4 py-2 bg-secondary rounded shadow-sm">
              janeluciaschoenfeld@gmail.com
            </button>
          </a>
        </div>
      </div>
    </Section>
  </NuxtLayout>
</template>

<script setup lang="ts">

import Section from "~/components/Section.vue";

import LiteYouTubeEmbed from 'vue-lite-youtube-embed'
import 'vue-lite-youtube-embed/style.css'

import aboutJson from '~/helper/about.json';
import projectJson from '~/helper/projects.json';
import {ref} from "vue";

const skillInfos = aboutJson.skills;
const educationInfos = aboutJson.education;
const workInfos = aboutJson.work;
const contactInfos = aboutJson.contact;
const projectInfos = projectJson;

const { data: latestCommit } = useFetch("/api/github/latestCommit");

const isTooltipVisible = ref(false);
const activeSkill = ref('');
const isScrolled = ref(false);

function checkScroll() {
  const scrollY = window.scrollY;
  isScrolled.value = scrollY > 0;
}

function toggleTooltip() {
  isTooltipVisible.value = !isTooltipVisible.value;
}

function setActiveSkill(skillName : string) {
  activeSkill.value = skillName
}

function showTooltip(show : boolean) {
  isTooltipVisible.value = show;
}

function clearActiveSkill() {
    activeSkill.value = '';
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll);
  setTimeout(() => {
    isScrolled.value = true;
  }, 5000);
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll);
});
</script>
