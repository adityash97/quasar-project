<template>

  <project-display-card
  v-for="project in projects"
  :key="project.id"
  :project="project"
  />
</template>

<script setup lang="ts">
import ProjectDisplayCard from './ProjectDisplayCard.vue';
import {computed} from 'vue';
const props = defineProps({
  modelValue:{
    type:Object,
    default:() => {
      return {};
    }
  }
})

const projects = computed(() => props.modelValue)



</script>
