<template>
  <!-- <project-display-card
    v-for="project in projects"
    :key="project.id"
    :project="project"
    @showProjectForm="showProjectForm"
    @toggleCompleted="toggelCompleted"
    @onDelete="onDelete"
  /> -->

  <vue-draggable v-model="projects" item-key="index">
    <template #item="{ index }">
      <div>
        <project-display-card
          v-model="projects[index]"
          :project="projects[index]"
          @showProjectForm="showProjectForm"
          @toggleCompleted="toggelCompleted"
          @onDelete="onDelete"
        />
      </div>
    </template>
  </vue-draggable>
</template>

<script setup lang="ts">
import ProjectDisplayCard from './ProjectDisplayCard.vue';
import { computed } from 'vue';
const emit = defineEmits([
  'show-project-form',
  'toggle-completed',
  'on-delete',
]);
const props = defineProps({
  modelValue: {
    type: Object,
    default: () => {
      return {};
    },
  },
});

const projects = computed(() => props.modelValue);

const showProjectForm = (data: object, isEdit: boolean) => {
  emit('show-project-form', data, isEdit);
};

const toggelCompleted = (data: object) => {
  emit('toggle-completed', data);
};

const onDelete = (data: object) => {
  emit('on-delete', data);
};
</script>
