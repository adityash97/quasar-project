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
        <q-card>

          <q-card-section>
            <q-tabs
            v-model="innerTab"
            class=""
            >
            <q-tab name="view_all" icon="apps" label="View All" @click="innerFlagSetter('showAllProjects')"/>
            <q-tab name="completed" icon="download_done" label="Completed" @click="innerFlagSetter('completedProjects')"/>
            <q-tab name="on_going" icon="pending" label="On Going" @click="innerFlagSetter('onGoingProjects')"/>
          </q-tabs>
          </q-card-section>

          <q-card-section v-if="showAllProjects">
            <show-all-projects/>
          </q-card-section>

          <q-card-section v-if="completedProjects">
            <completed-projects/>
          </q-card-section>

          <q-card-section v-if="onGoingProjects">
            <on-going-projects/>
          </q-card-section>
        </q-card>

      </template>



    </div>
  </q-page>
</template>


<script setup lang="ts">
import {ref,onMounted} from 'vue';
import ShowAllProjects from 'src/components/projectplanner/ShowAllProjects.vue';
import CompletedProjects from 'src/components/projectplanner/CompletedProjects.vue';
import OnGoingProjects from 'src/components/projectplanner/OnGoingProjects.vue';
import useProjectPlannerStore from 'src/stores/projectplannerstore'


const projectPlannerStore = useProjectPlannerStore()

const tab = ref('difference')
const innerTab = ref('apps')
const showProjects = ref(false)
const addProject = ref(false)
const showAllProjects = ref(false)
const completedProjects = ref(false)
const onGoingProjects = ref(false)


onMounted(()=>{
  console.log("getProjectData : ",projectPlannerStore.getProjectData())
})

const innerFlagSetter = (flag : any) =>{
  if(flag == 'showAllProjects'){
    showAllProjects.value = true
    completedProjects.value = false,
    onGoingProjects.value = false
  }else if(flag == 'completedProjects'){
    showAllProjects.value = false
    completedProjects.value = true
    onGoingProjects.value = false
  }else{
    showAllProjects.value = false
    completedProjects.value = false
    onGoingProjects.value = true
  }
}


</script>
