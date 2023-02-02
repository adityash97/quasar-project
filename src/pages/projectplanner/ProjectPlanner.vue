<template>
  <q-page padding>
    <div class="q-gutter-y-md">
      <q-tabs v-model="tab" class="text-teal">
        <q-tab
          name="projects"
          icon="difference"
          label="Project(s)"
          @click="
            () => {
              (showProjectsFlag = true), (showAddProjectFlag = false);
            }
          "
        />
        <q-tab
          name="add_new_project"
          icon="add_box"
          label="Add New Project "
          @click="
            () => {
              (showAddProjectFlag = true), (showProjectsFlag = false);
            }
          "
        />
      </q-tabs>

      <!-- show projects -->
      <template v-if="showProjectsFlag">
        <q-card class="">
          <q-card-section>
            <q-tabs v-model="innerTab" class="">
              <q-tab
                name="view_all"
                icon="apps"
                label="View All"
                @click="innerFlagSetter('showAllProjectsFlag')"
              />
              <q-tab
                name="completed"
                icon="download_done"
                label="Completed"
                @click="innerFlagSetter('showcompletedProjectsFlag')"
              />
              <q-tab
                name="on_going"
                icon="pending"
                label="On Going"
                @click="innerFlagSetter('showOnGoingProjectsFlag')"
              />
            </q-tabs>
          </q-card-section>
        </q-card>
        <div class="row q-gutter-x-sm">
          <div class="col-9 q-gutter-sm">
            <q-scroll-area style="height: 55vw; width: 55vw;">
              <show-all-projects
              v-if="showAllProjectsFlag"
              v-model="projectData"
              @show-project-form="showProjectFormHandler"
              @toggle-completed="toggelCompleted"
              @on-delete="onDelete"
            />

            <completed-projects
              v-else-if="showcompletedProjectsFlag"
              v-model="completedProjectsData"
              @show-project-form="showProjectFormHandler"
              @toggle-completed="toggelCompleted"
              @on-delete="onDelete"
            />

            <on-going-projects
              v-else-if="showOnGoingProjectsFlag"
              v-model="onGoingProjectsData"
              @show-project-form="showProjectFormHandler"
              @toggle-completed="toggelCompleted"
              @on-delete="onDelete"
            />
          </q-scroll-area>

          </div>

          <div class="col ">
            <q-card style="min-height: 54vw">
              <q-card-section class="bg-primary text-white">
                <div class="text-h6">Unplanned Projects</div>
                <div class="text-weight-light">Drag Projects here in this area</div>
              </q-card-section>

              <q-separator />
            </q-card>
          </div>
        </div>
      </template>

      <!-- Add Project  -->

      <template v-if="showAddProjectFlag">
        <project-form @on-submit="onSubmitProjectForm" />
      </template>
    </div>
    <!-- Edit dialog -->
    <q-dialog v-model="showProjectFormFlag">
      <project-form
        :project-form-data="projectFormData"
        :is-edit="isEditProject"
        @on-submit="onSubmitProjectForm"
        @on-cancel="showProjectFormFlag = false"
      />
    </q-dialog>
  </q-page>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import ShowAllProjects from 'src/components/projectplanner/ShowAllProjects.vue';
import CompletedProjects from 'src/components/projectplanner/CompletedProjects.vue';
import OnGoingProjects from 'src/components/projectplanner/OnGoingProjects.vue';
import ProjectForm from 'src/components/projectplanner/ProjectForm.vue';
import useProjectPlannerStore from 'src/stores/projectplannerstore';
import { useQuasar } from 'quasar';

const quasar = useQuasar();

const projectPlannerStore = useProjectPlannerStore();

const tab = ref('projects');
const innerTab = ref('view_all');
const showProjectsFlag = ref(true);
const showAddProjectFlag = ref(false);
const showAllProjectsFlag = ref(true);
const showcompletedProjectsFlag = ref(false);
const showOnGoingProjectsFlag = ref(false);
const showProjectFormFlag = ref(false);
const isEditProject = ref(false);
const projectFormData = ref();
const projectData = computed(() => projectPlannerStore.projectData);
const completedProjectsData = computed(() =>
  projectPlannerStore.getCompletedProject()
);
const onGoingProjectsData = computed(() =>
  projectPlannerStore.getOnGoingProject()
);

onMounted(() => {
  projectPlannerStore.getProjectData();
});

const innerFlagSetter = (flag: string) => {
  if (flag == 'showAllProjectsFlag') {
    showAllProjectsFlag.value = true;
    (showcompletedProjectsFlag.value = false),
      (showOnGoingProjectsFlag.value = false);
  } else if (flag == 'showcompletedProjectsFlag') {
    showAllProjectsFlag.value = false;
    showcompletedProjectsFlag.value = true;
    showOnGoingProjectsFlag.value = false;
  } else {
    showAllProjectsFlag.value = false;
    showcompletedProjectsFlag.value = false;
    showOnGoingProjectsFlag.value = true;
  }
};

const onSubmitProjectForm = async (data: object, isEdit: boolean) => {
  try {
    projectPlannerStore.updateProject(data, isEdit);
    showProjectFormFlag.value = false;
    tab.value = 'projects';
    showProjectsFlag.value = true;
    showAddProjectFlag.value = false;
    quasar.notify('Saved Successfully');
  } catch (error) {
    quasar.notify('Falied To Update');
  }
};

const showProjectFormHandler = (data: object, isEdit: boolean) => {
  showProjectFormFlag.value = true;
  projectFormData.value = data;
  isEditProject.value = isEdit;
};

const toggelCompleted = async (projectObject: object) => {
  try {
    projectPlannerStore.toggleCompleted(projectObject);
    quasar.notify('Saved Successfully');
  } catch (error) {
    quasar.notify('Falied To Update');
  }
};

const onDelete = async (projectObject: object) => {
  try {
    projectPlannerStore.deleteProject(projectObject);
    quasar.notify('Deleted Successfully');
  } catch (error) {
    quasar.notify('Falied To Delete');
  }
};
</script>
