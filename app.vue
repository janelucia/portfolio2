<template>
  <NuxtLayout>
    <div class="flex flex-col w-full gap-4 p-4 items-center md:items-start lg:max-w-screen-xl xl:px-0">
      <div class="w-full flex flex-col gap-4">
        <SectionHeader title="Hello" bgColor="bg-accent" text-size="text-2xl md:text-4xl" id="hello" />
        <div class="flex flex-col-reverse items-center gap-6 md:flex-row">
          <div class="flex flex-col gap-4 justify-between lg:flex-1 h-full">
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
                    bg-color="bg-accent"
                />
              </div>
              <div class="flex flex-col md:flex-row gap-4 items-center">
                <NuxtLink to="#" class="px-4 py-2 bg-accent rounded hover:bg-primary shadow-sm md:text-lg">
                  Contact Me
                </NuxtLink>
                <div class="flex gap-4">
                  <a v-for="contact in contactInfos" :key="contact" :href="contact.url">
                    <Icon :name="contact.icon" class="text-2xl"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full sm:w-1/2 md:w-full lg:w-1/3 lg:max-w-sm flex justify-center md:justify-start">
            <NuxtPicture format="webp" src="/images/Jane.jpg" :img-attrs="{ class: 'rounded w-full h-auto md:h-full object-cover' }"/>
          </div>
        </div>
      </div>
    </div>
    <Section text-size="text-2xl md:text-4xl" bg-color="bg-accent" section-title="About Me" bg-color-section="bg-background" id="about-me">
      <p class="text-lg">I had the pleasure to speak on behalf of my studies: computer science at the University of Applied Sciences.</p>
      <LiteYouTubeEmbed id="sR6hhkqADF0" title="Mein Studium an der FH Kiel: Informatik" muted></LiteYouTubeEmbed>
    </Section>
    <Section text-size="text-lg md:text-2xl" bg-color="bg-accent" section-title="Skills" bg-color-section="bg-white">
      <div class="flex flex-wrap gap-4 justify-around">
        <a v-for="skill in skillInfos" :key="skill.name" :href="skill.url" class="flex flex-col items-center gap-2 w-1/3 md:w-1/5 hover:bg-background cursor-pointer" target="_blank">
          <Icon v-if="skill.icon" :name="skill.icon" alt="Logo" class="w-16 h-16" />
          {{ skill.name }}
        </a>
      </div>
    </Section>
    <Section text-size="text-lg md:text-2xl" bg-color="bg-accent" section-title="Education" bg-color-section="bg-background">
      <ul v-for="education in educationInfos" :key="education.program">
          <Card :title="education.institution" :additional-information="education.period" :subtitle="education.program" bg-card-color="bg-white">
            <p v-if="education.grade" class="text-gray-700" > (Current) Grade: {{ education.grade }} </p>
            <ul class="text-gray-700 list-disc list-inside" v-for="detail in education.details">
              <li>{{ detail }}</li>
            </ul>
          </Card>
      </ul>
    </Section>
    <Section text-size="text-lg md:text-2xl" bg-color="bg-accent" section-title="Work" bg-color-section="bg-white">
      <ul v-for="work in workInfos" :key="work.company">
          <Card :title="work.company" :additional-information="work.period" :subtitle="work.position" bg-card-color="bg-background">
            <ul class="text-gray-700 list-disc list-inside" v-for="detail in work.details">
              <li>{{ detail }}</li>
            </ul>
          </Card>
      </ul>
    </Section>
    <Section text-size="text-2xl md:text-4xl" bg-color="bg-primary" section-title="Projects" bg-color-section="bg-background" id="projects">
      <ul v-for="project in projectInfos" :key="project.name">
        <li>
          <Card :title="project.name" :additional-information="project.currentState" :image="project.image" bg-card-color="bg-white">
            <p>{{ project.description }}</p>
            <div class="flex items-center justify-end gap-4">
              <a :href="project.githubUrl" class="text-2xl">
                <Icon :name="contactInfos.github.icon" />
              </a>
              <a v-if="project.liveUrl" class="px-4 py-2 bg-primary rounded hover:bg-secondary shadow-sm text-lg md:text-2xl" :href="project.liveUrl" target="_blank">
                Try it out
              </a>
            </div>
          </Card>
        </li>
    </ul>
    </Section>
    <Section text-size="text-2xl md:text-4xl" bg-color="bg-secondary" section-title="Contact" bg-color-section="bg-white" id="contact">
      <div class="flex flex-col gap-4">
        <h3 class="font-bold text-4xl">Let's create together</h3>
        <p class="text-lg md:text-xl">
          I am always open for new projects and collaborations.
          <br>
          If you have an idea or a project in mind, feel free to contact me.
        </p>
        <div class="flex items-center justify-center w-full">
          <a :href="`mailto: ${contactInfos.email.url}`" class="text-lg md:text-xl" >
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

const generalInfos = aboutJson.general;
const skillInfos = aboutJson.skills;
const educationInfos = aboutJson.education;
const workInfos = aboutJson.work;
const contactInfos = aboutJson.contact;
const projectInfos = projectJson;

const { data: latestCommit } = useFetch("/api/github/latestCommit");
</script>
