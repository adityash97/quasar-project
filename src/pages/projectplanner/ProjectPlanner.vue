<template>
  <q-page padding>
    <div class="q-gutter-y-md" >
      <q-tabs
        v-model="tab"
        class="text-teal"
      >
        <q-tab name="project(s)" icon="difference" label="Project(s)" @click="() => {showProjectsFlag = true,showAddProjectFlag = false}"/>
        <q-tab name="add_new_project" icon="add_box" label="Add New Project " @click="() => {showAddProjectFlag = true,showProjectsFlag = false}"/>
      </q-tabs>

      <!-- show projects -->
      <template v-if="showProjectsFlag">
        <q-card>

          <q-card-section>
            <q-tabs
            v-model="innerTab"
            class=""
            >
            <q-tab name="view_all" icon="apps" label="View All" @click="innerFlagSetter('showAllProjectsFlag')"/>
            <q-tab name="completed" icon="download_done" label="Completed" @click="innerFlagSetter('showcompletedProjectsFlag')"/>
            <q-tab name="on_going" icon="pending" label="On Going" @click="innerFlagSetter('showOnGoingProjectsFlag')"/>
          </q-tabs>
          </q-card-section>

          <q-card-section class="q-gutter-lg">
            <show-all-projects
            v-if="showAllProjectsFlag"
            @show-project-form="showProjectFormFlag = true"
            v-model="projectData"
            />

            <completed-projects
            v-else-if="showcompletedProjectsFlag"
            @show-project-form="showProjectFormFlag = true"
            v-model="completedProjectsData"
            />

            <on-going-projects
            v-else-if="showOnGoingProjectsFlag"
            v-model="onGoingProjectsData"
            />

          </q-card-section>


        </q-card>

      </template>



    </div>

    <q-dialog v-model="showProjectFormFlag">
      <project-form/>
    </q-dialog>
  </q-page>
</template>


<script setup lang="ts">
import {ref,onMounted,computed} from 'vue';
import ShowAllProjects from 'src/components/projectplanner/ShowAllProjects.vue';
import CompletedProjects from 'src/components/projectplanner/CompletedProjects.vue';
import OnGoingProjects from 'src/components/projectplanner/OnGoingProjects.vue';
import ProjectForm from 'src/components/projectplanner/ProjectForm.vue';
import useProjectPlannerStore from 'src/stores/projectplannerstore'


const projectPlannerStore = useProjectPlannerStore()

const tab = ref('difference')
const innerTab = ref('apps')
const showProjectsFlag = ref(false)
const showAddProjectFlag = ref(false)
const showAllProjectsFlag = ref(false)
const showcompletedProjectsFlag = ref(false)
const showOnGoingProjectsFlag = ref(false)
const showProjectFormFlag = ref(false)
const projectData = computed(() => projectPlannerStore.projectData)
const completedProjectsData = computed(() => projectPlannerStore.getCompletedProject())
const onGoingProjectsData = computed(() => projectPlannerStore.getOnGoingProject())

onMounted(()=>{
  projectPlannerStore.getProjectData()
})

const innerFlagSetter = (flag : string) =>{
  if(flag == 'showAllProjectsFlag'){
    showAllProjectsFlag.value = true
    showcompletedProjectsFlag.value = false,
    showOnGoingProjectsFlag.value = false
  }else if(flag == 'showcompletedProjectsFlag'){
    showAllProjectsFlag.value = false
    showcompletedProjectsFlag.value = true
    showOnGoingProjectsFlag.value = false
  }else{
    showAllProjectsFlag.value = false
    showcompletedProjectsFlag.value = false
    showOnGoingProjectsFlag.value = true
  }
}


</script>
