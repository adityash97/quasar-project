<template>

  <q-card style="min-width: 50vw">
    <div class="text-h5 text-weight-medium text-center">Add/Edit Project Form</div>
    <q-form
      @submit="onSubmit"
      class="q-gutter-md"
    >

    <q-card-section>
      <q-input v-model="title" dense hint="Title"/>
    </q-card-section>
    <q-card-section>
      <q-input
      v-model="details"
      autogrow
      hint="Details"
    />
    </q-card-section>
    <q-card-section>
      <q-toggle v-model="completed" label="Completed" />
    </q-card-section>

      <q-card-actions vertical align="right">
        <q-btn type="submit" color="primary">Save</q-btn>
      </q-card-actions>

  </q-form>
  </q-card>


</template>

<script setup lang="ts">
import {ref} from 'vue'
const title = ref('')
const details = ref('')
const completed = ref(false)

const onSubmit = () => {
  console.log('form submitted')
}


</script>


