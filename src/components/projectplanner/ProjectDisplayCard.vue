<template>
  <q-card >
    <q-card-section >
      <div class="row">
        <div class="col-9">
          <div class="row">
            <div class="text-h6">{{project.title}}</div>
          </div>
          <div class="row">
            <div class="text-body1">{{project.details}}</div>
          </div>
        </div>
        <div class="col-3 ">
          <div class="row flex-center">
            <!-- delete -->
            <div class="col">
            <q-btn round>
              <q-avatar  icon="delete"  text-color="negative" @click="$emit('onDelete',project)"/>
            </q-btn>
            </div>
            <!-- edit -->
            <div class="col">
              <div class="col">
                <q-btn round @click="$emit('showProjectForm',project,true)">
                  <q-avatar  icon="edit"  text-color="warning"/>
                </q-btn>
              </div>
            </div>
            <!-- completed or not -->
            <div class="col">
              <div class="col">
                <q-btn round>
                  <q-avatar  icon="check"  :text-color="project.completed ?  'positive' : '' " @click="$emit('toggleCompleted',project)"/>
                </q-btn>
              </div>
            </div>
          </div>

        </div>

      </div>
    </q-card-section>
  </q-card>
</template>


<script setup lang="ts">
import {computed} from 'vue'


defineEmits(['showProjectForm','toggleCompleted','onDelete'])
const props = defineProps({
  project:{
    type:Object,
    default:() => {
      return {};
    }
  }
})
const project = computed(() => props.project)




</script>
