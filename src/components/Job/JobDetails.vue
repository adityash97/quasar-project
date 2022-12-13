<template>
    <q-card padding class="q-ma-lg">
        <q-card-section>
            <div class="text-h4">ID : {{personId}}</div>
        </q-card-section>
        <q-card-section>
            <div class="text-h4">Name : {{personName}}</div>
        </q-card-section>

        <q-card-section>
            <div class="text-h4">Email : {{personEmail}}</div>
        </q-card-section>

    </q-card>
</template>

<script setup lang="ts">
import useTestStore from 'src/stores/test-store'
import { useRoute } from 'vue-router'
import { ref,onMounted,computed } from 'vue';
const testStore = useTestStore()
const route = useRoute()
const personData = ref({})
const personId = computed(() =>  personData.value? personData.value.id : '')
const personName = computed(() =>  personData.value ? personData.value.name : '')
const personEmail = computed(() =>  personData.value? personData.value.email : '')

onMounted(() =>{
    personData.value = testStore.getPersonDetails(route.params.id)
})


</script>
