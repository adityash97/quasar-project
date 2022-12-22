<template>

  <q-card style="min-width: 50vw">
    <div class="text-h5 text-weight-medium text-center">Add/Edit Project Form</div>
    <q-form
      @submit="onSubmit"
      class="q-gutter-md"
    >

    <q-card-section>
      <q-input v-model="title" dense hint="Title"  lazy-rules
      :rules="[(val) => (val && val.length > 0) || 'Title']"/>
    </q-card-section>
    <q-card-section>
      <q-input
      v-model="details"
      autogrow
      hint="Details"
      lazy-rules
      :rules="[(val) => (val && val.length > 0) || 'Details']"
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
import {ref,onMounted} from 'vue'
const title = ref('')
const details = ref('')
const id = ref(0)
const completed = ref(false)
const emit = defineEmits(['on-submit'])

const props = defineProps({
  projectFormData:{
    type:Object,
    defualt: () =>{
      return {};
    }
  },
  isEdit:{
    type:Boolean,
    default:() =>{
      return false;
    }
  }
})

onMounted(() =>{
  if(props.isEdit){
    id.value = props.projectFormData?.id
    title.value = props.projectFormData?.title
    details.value = props.projectFormData?.details
    completed.value = props.projectFormData?.completed
  }
})


const onSubmit = () => {
  console.log('form submitted')
  const data = {
    id: props.isEdit ?  id.value : Number(Math.floor(1000 + Math.random() * 9000).toString()),
    title : title.value,
    details : details.value,
    completed : completed.value
  }
  emit('on-submit', data, props.isEdit)

    id.value = 0
    title.value = ''
    details.value = ''
    completed.value = false
}


</script>


