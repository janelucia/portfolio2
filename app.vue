<template>
  <NuxtLayout>
    <div class="flex flex-col md:flex-row-reverse w-full gap-4 p-4 items-center md:items-start lg:max-w-screen-xl">
      <div class="w-2/3 md:w-1/3">
        <NuxtImg src="./images/Jane.jpg" class="rounded "/>
      </div>
      <div class="w-full flex flex-col gap-4">
          <SectionHeader title="Hello" bgColor="bg-secondary" text-size="text-2xl lg:text-4xl" />
          <div class="h-full flex flex-col gap-2 items-center">
            <h1 class="text-4xl lg:text-6xl text-text-light">I am Jane,</h1>
            <p class="lg:text-lg">
              a frontend developer based in Kiel, currently doing my studies at the University of Applied Sciences Kiel.
              <br>
              As a former Sociology and educational science major I am particularly interested in the intersection of
              technology and society.
              <br>
              Helping building a digital world which suits the needs of everyone is my main goal.
            </p>
            <div class="flex gap-8 self-end sm:self-start items-center w-full">
              <NuxtLink to="#" class="px-4 py-2 bg-primary rounded hover:bg-secondary shadow-sm lg:text-lg">
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
    </div>
    <Section text-size="text-2xl" bg-color="bg-accent" section-title="About Me" bg-color-section="bg-background">
      <div class="flex flex-col gap-4">
        <ul v-for="info in generalInfos" :key="info.icon">
          <li class="flex gap-2 items-center text-lg"> {{info.icon}} <p>{{ info.info }}</p></li>
        </ul>
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
        />
      </div>
      <LiteYouTubeEmbed id="sR6hhkqADF0" title="Mein Studium an der FH Kiel: Informatik" muted></LiteYouTubeEmbed>
    </Section>
    <Section text-size="text-lg" bg-color="bg-accent" section-title="Skills" bg-color-section="bg-white">
      <div class="flex flex-wrap gap-4 justify-around">
        <a v-for="skill in skillInfos" :key="skill.name" :href="skill.url" class="flex flex-col items-center gap-2 w-1/3 hover:bg-background cursor-pointer" target="_blank">
          <Icon v-if="skill.icon" :name="skill.icon" alt="Logo" class="w-16 h-16" />
          {{ skill.name }}
        </a>
      </div>
    </Section>
    <Section text-size="text-lg" bg-color="bg-accent" section-title="Education" bg-color-section="bg-background">
      <ul v-for="education in educationInfos" :key="education.program">
          <Card :title="education.institution" :additional-information="education.period" :subtitle="education.program" bg-card-color="bg-white">
            <p v-if="education.grade" class="text-gray-700" > (Current) Grade: {{ education.grade }} </p>
            <ul class="text-gray-700 list-disc list-inside" v-for="detail in education.details">
              <li>{{ detail }}</li>
            </ul>
          </Card>
      </ul>
    </Section>
    <Section text-size="text-lg" bg-color="bg-accent" section-title="Work" bg-color-section="bg-white">
      <ul v-for="work in workInfos" :key="work.company">
          <Card :title="work.company" :additional-information="work.period" :subtitle="work.position" bg-card-color="bg-background">
            <ul class="text-gray-700 list-disc list-inside" v-for="detail in work.details">
              <li>{{ detail }}</li>
            </ul>
          </Card>
      </ul>
    </Section>
    <Section text-size="text-2xl" bg-color="bg-primary" section-title="Projects" bg-color-section="bg-background">
      <ul v-for="project in projectInfos" :key="project.name">
        <li>
          <Card :title="project.name" :additional-information="project.currentState" :image="project.image" bg-card-color="bg-white">
            <p>{{ project.description }}</p>
            <div class="flex items-center justify-end gap-4">
              <a :href="project.githubUrl" class="text-2xl">
                <Icon :name="contactInfos.github.icon" />
              </a>
              <a v-if="project.liveUrl" class="px-4 py-2 bg-primary rounded hover:bg-secondary shadow-sm" :href="project.liveUrl" target="_blank">
                Try it out
              </a>
            </div>
          </Card>
        </li>
    </ul>
    </Section>
    <Section text-size="text-2xl" bg-color="bg-secondary" section-title="Contact" bg-color-section="bg-white">
      <div class="flex flex-col gap-4">
        <h3 class="font-bold text-4xl">Let's create together</h3>
        <p>
          I am always open for new projects and collaborations.
          <br>
          If you have an idea or a project in mind, feel free to contact me.
        </p>
        <div class="flex items-center justify-center w-full">
          <a :href="`mailto: ${contactInfos.email.url}`" class="text-lg" >
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
