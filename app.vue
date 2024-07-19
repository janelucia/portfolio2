<template>
  <NuxtLayout>
    <div class="flex flex-col w-full gap-4 p-4 items-center">
      <div class="w-2/3">
        <NuxtImg src="./images/Jane.jpg" class="rounded "/>
      </div>
      <div class="w-full flex flex-col gap-4">
        <div class="w-full flex flex-col gap-2">
          <SectionHeader title="Hello" bgColor="bg-secondary" text-size="text-2xl" />
          <h1 class="text-4xl text-text-light">I am Jane,</h1>
          <p>
            a frontend developer based in Kiel, currently doing my studies at the University of Applied Sciences Kiel.
            <br>
            As a former Sociology and educational science major I am particularly interested in the intersection of
            technology and society.
            <br>
            Helping building a digital world which suits the needs of everyone is my main goal.
          </p>
        </div>
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
        <div class="flex gap-4 self-end">
          <a v-for="contact in contactInfos" :key="contact" :href="contact.url">
            <Icon :name="contact.icon" class="text-2xl"/>
          </a>
        </div>
      </div>
    </div>
    <div class="bg-background px-4 py-12 flex flex-col gap-4">
      <SectionHeader title="About Me" bgColor="bg-accent" text-size="text-2xl"/>
      <div class="flex flex-col gap-4">
        <ul v-for="info in generalInfos" :key="info.icon">
          <li class="flex gap-2 items-center text-lg"> {{info.icon}} <p>{{ info.info }}</p></li>
        </ul>
      </div>
      <LiteYouTubeEmbed videoid="sR6hhkqADF0" title="Mein Studium an der FH Kiel: Informatik" muted ></LiteYouTubeEmbed>
    </div>
    <div class="bg-white px-4 py-12 flex flex-col gap-4">
      <SectionHeader title="Skills" bgColor="bg-accent" text-size="text-lg" />
      <div class="flex flex-wrap gap-4 justify-around">
        <a v-for="skill in skillInfos" :key="skill.name" :href="skill.url" class="flex flex-col items-center gap-2 w-1/3 hover:bg-background cursor-pointer" target="_blank">
            <Icon v-if="skill.icon" :name="skill.icon" alt="Logo" class="w-16 h-16" />
            {{ skill.name }}
        </a>
      </div>
    </div>
    <Section text-size="text-lg" bg-color="bg-accent" section-title="Education" bg-color-section="bg-background">
      <ul v-for="education in educationInfos" :key="education.program">
          <Card :title="education.institution" :additional-information="education.period" :subtitle="education.program">
            <p v-if="education.grade" class="text-gray-700" > (Current) Grade: {{ education.grade }} </p>
            <ul class="text-gray-700 list-disc list-inside" v-for="detail in education.details">
              <li>{{ detail }}</li>
            </ul>
          </Card>
      </ul>
    </Section>
    <Section text-size="text-lg" bg-color="bg-accent" section-title="Work" bg-color-section="bg-white">
      <ul v-for="work in workInfos" :key="work.company">
          <Card :title="work.company" :additional-information="work.period" :subtitle="work.position">
            <ul class="text-gray-700 list-disc list-inside" v-for="detail in work.details">
              <li>{{ detail }}</li>
            </ul>
          </Card>
      </ul>
    </Section>
    <Section text-size="text-2xl" bg-color="bg-primary" section-title="Projects" bg-color-section="bg-background">
      <ul v-for="project in projectInfos" :key="project.name">
        <li>
          <Card :title="project.name" :additional-information="project.currentState" :image="project.image">
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
  </NuxtLayout>
</template>

<script setup lang="ts">

import Section from "~/components/Section.vue";
import {General, Skills, Education, Work, Contact, Project} from "~/helper/types";

import LiteYouTubeEmbed from 'vue-lite-youtube-embed'
import 'vue-lite-youtube-embed/style.css'

import aboutJson from '~/helper/about.json';
import projectJson from '~/helper/projects.json';

const generalInfos: General[] = aboutJson.general;
const skillInfos: Skills[] = aboutJson.skills;
const educationInfos: Education[] = aboutJson.education;
const workInfos: Work[] = aboutJson.work;
const contactInfos: Contact = aboutJson.contact;
const projectInfos: Project[] = projectJson;

const { data: latestCommit } = useFetch("/api/github/latestCommit");
</script>
