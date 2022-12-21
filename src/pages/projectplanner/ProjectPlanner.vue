<template>
  <q-page padding>
    <div class="q-gutter-y-md" >
      <q-tabs
        v-model="tab"
        class="text-teal"
      >
        <q-tab name="project(s)" icon="difference" label="Project(s)" @click="() => {showProjects = true,addProject = false}"/>
        <q-tab name="add_new_project" icon="add_box" label="Add New Project " @click="() => {addProject = true,showProjects = false}"/>
      </q-tabs>

      <!-- show projects -->
      <template v-if="showProjects">
        <q-tabs
        v-model="innerTab"
        class="bg-primary text-white shadow-2"
        >
        <q-tab name="view_all" icon="apps" label="View All" @click="showAllProjects = true"/>
        <q-tab name="completed" icon="download_done" label="Completed" @click="completedProjects = true"/>
        <q-tab name="on_going" icon="pending" label="On Going" @click="onGoingProjects = true"/>
      </q-tabs>
      
      </template>

    </div>
  </q-page>
</template>


<script setup lang="ts">
import {ref} from 'vue';

const tab = ref('difference')
const innerTab = ref('apps')
const showProjects = ref(false)
const addProject = ref(false)
const showAllProjects = ref(false)
const completedProjects = ref(false)
const onGoingProjects = ref(false)



</script>
