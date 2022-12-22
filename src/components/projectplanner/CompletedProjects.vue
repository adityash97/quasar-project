<template>

  <project-display-card
  v-for="project in projects"
  :key="project.id"
  :project="project"
  @showProjectForm="showProjectForm"
  />
</template>

<script setup lang="ts">
import ProjectDisplayCard from './ProjectDisplayCard.vue';
import {computed} from 'vue';
const emit = defineEmits(['show-project-form'])
const props = defineProps({
  modelValue:{
    type:Object,
    default:() => {
      return {};
    }
  }
})

const projects = computed(() => props.modelValue)

const showProjectForm = () =>{
  emit('show-project-form')
}



</script>
