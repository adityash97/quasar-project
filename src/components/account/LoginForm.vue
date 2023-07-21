<template>
  <q-form>
    <div class="col q-gutter-md">
      <q-input class="full-width" outlined label="Email" dense />
      <q-input class="full-width" outlined label="Password" dense />
      <div class="row justify-between full-width">
        <q-checkbox v-model="remember_me" label="Remember Me" />
        <q-btn flat size="md" label="forgot password?" />
      </div>
      <q-btn
        color="indigo-12 "
        class="full-width"
        unelevated
        size="md"
        label="Login"
      />
    </div>
  </q-form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const remember_me = ref(true);
</script>

