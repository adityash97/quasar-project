<template>
  <q-card>
    <q-card-section>
      <q-item v-for="job in jobs" :key="job.id" clickable v-ripple>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
        </q-item-section>
        <q-item-section>{{job.name}} : [{{job.email}}]</q-item-section>

      </q-item>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import {ref} from 'vue';
const jobs = ref([{}])

jobs.value = [
    {id:1,name:'Ram', email:'Ram@gmail.com'},
    {id:2,name:'Bob', email:'bob32@gmail.com'},
    {id:3,name:'Bob Marly', email:'bob323@gmail.com'}
]


</script>
