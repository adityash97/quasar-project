<template>
  <q-card padding class="q-ma-lg">
    <q-card-section>
      <q-item v-for="job in jobs" :key="job.id" clickable v-ripple @click="onClick(job)">
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
import {useRouter} from 'vue-router'
import useTestStore from 'src/stores/test-store'

const testStore = useTestStore()

const router = useRouter()
const jobs = ref([{}])

jobs.value = [
    {id:1,name:'Ram', email:'Ram@gmail.com'},
    {id:2,name:'Bob', email:'bob32@gmail.com'},
    {id:3,name:'Bob Marly', email:'bob323@gmail.com'}
]
const onClick = (job : any) =>{
  console.log(testStore.jobs)
  router.push({
    name:'JobDetails',
    params:{id:job.id}
  })
}

</script>
