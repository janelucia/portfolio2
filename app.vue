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
          <a v-for="contact in infos.contact" :key="contact.platform" :href="contact.url">
            <Icon :name="contact.icon" class="text-2xl"/>
          </a>
        </div>
      </div>
    </div>
    <div class="bg-background px-4 py-12 flex flex-col gap-4">
      <SectionHeader title="About Me" bgColor="bg-accent" text-size="text-2xl"/>
      <div class="flex flex-col gap-4">
        <ul v-for="info in infos.general" :key="info.info">
          <li class="flex gap-2 items-center text-lg"> {{info.icon}} <p>{{ info.info }}</p></li>
        </ul>
      </div>
      <LiteYouTubeEmbed videoid="sR6hhkqADF0" title="Mein Studium an der FH Kiel: Informatik" muted ></LiteYouTubeEmbed>
    </div>
    <div class="bg-white px-4 py-12 flex flex-col gap-4">
      <SectionHeader title="Skills" bgColor="bg-accent" text-size="text-lg" />
      <div class="flex flex-wrap gap-4 justify-around">
        <a  v-for="skill in infos.skills" :key="skill.name" :href="skill.url" class="flex flex-col items-center gap-2 w-1/3 hover:bg-background cursor-pointer" target="_blank">
            <Icon v-if="skill.icon" :name="skill.icon" alt="Logo" class="w-16 h-16" />
            {{ skill.name }}
        </a>
      </div>
    </div>
    <Section text-size="text-lg" bg-color="bg-white" section-title="Education" bg-color-section="bg-accent">
      <ul v-for="education in infos.education" :key="education.program">
        <li class="p-4 flex flex-col gap-2 bg-white rounded shadow-md">
          <p class="text-xl font-bold">{{ education.institution }}</p>
          <p class="text-gray-700">{{ education.period }}</p>
          <p class="font-bold">{{ education.program }}</p>
          <p v-if="education.grade" class="text-gray-700" > (Current) Grade: {{ education.grade }} </p>
          <ul class="text-gray-700 list-disc list-inside" v-for="detail in education.details">
            <li>{{ detail }}</li>
          </ul>
        </li>
      </ul>
    </Section>
    <Section text-size="text-lg" bg-color="bg-accent" section-title="Work" bg-color-section="bg-white">
      <ul v-for="work in infos.work" :key="work.company">
        <li class="p-4 flex flex-col gap-2 bg-background rounded shadow-md">
          <p class="text-xl font-bold">{{ work.company }}</p>
          <p class="text-gray-700">{{ work.period }}</p>
          <p class="font-bold">{{ work.position }}</p>
          <ul class="text-gray-700 list-disc list-inside" v-for="detail in work.details">
            <li>{{ detail }}</li>
          </ul>
        </li>
      </ul>
    </Section>
    <div class="flex px-4 py-12 bg-background">
      <SectionHeader title="Projects" bgColor="bg-primary" text-size="text-lg" />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">

import Section from "~/components/Section.vue";

interface Infos {
  general: Array<{ icon: string; info: string }>;
  education: Array<{
    program: string;
    institution: string;
    period: string;
    grade?: string | undefined;
    details: string[];
  }>;
  work: Array<{
    position: string;
    company: string;
    period: string;
    details: string[];
  }>;
  skills: Array<{
    name: string;
    icon: string;
    url: string;
  }>;
  contact: Array<{
    platform: string;
    icon: string;
    url: string;
  }>;
}

import LiteYouTubeEmbed from 'vue-lite-youtube-embed'
import 'vue-lite-youtube-embed/style.css'

import infosJson from '~/helper/about.json';
const infos: Infos = infosJson;

const { data: latestCommit } = useFetch("/api/github/latestCommit");
</script>
