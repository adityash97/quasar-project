<template>
  <essential-link
    v-for="link in links"
    :key="link.title"
    v-bind="link"
  ></essential-link>
</template>
<script setup lang="ts">
import EssentialLink from 'components/EssentialLink.vue';

const links = [
  {
    title: 'Home',
    icon: 'home',
    to: { name: 'test-home' },
    level: 0,
    children: [],
  },
  {
    title: 'Test Sub page1',
    icon: 'search',
    to: { name: 'test-subpage1' },
    level: 0,
    children: [],
  },
  {
    title: 'Test Sub page 2',
    icon: 'search',
    to: { name: 'test-subpage2' },
    level: 0,
    children: [],
  },
  {
    title: 'Test Sub page 3',
    icon: 'search',
    to: { name: 'test-subpage3' },
    level: 0,
    children: [],
  },
  {
    title: 'Job',
    icon: 'group',
    to: { name: 'jobs' },
    level: 0,
    children: [],
  }
];
</script>
