<template>
  <q-page>
    <div class="row" style="height: 100vh">
      <div class="col-6">
        <q-img
          src="../../components/static/images/login_image.png"
          alt="login_image"
          :ratio="1"
          class="full-width-image"
        />
      </div>
      <div class="col-6 example-row-vertical-alignment">
        <div class="row items-center">
          <q-form class="q-pa-md">
            <div class="row">
              <q-input outlined v-model="Email" label="Email" dense />
            </div>
            <div class="row">
              <q-input outlined v-model="password" label="Password" dense />
            </div>
            <div class="row">
              <q-btn label="Login" />
            </div>
          </q-form>
        </div>
      </div>
    </div>
  </q-page>
</template>
<script setup lang="ts">
import LoginForm from 'src/components/account/LoginForm.vue';
import { ref } from 'vue';

const Email = ref('');
const password = ref('');
</script>

<style lang="scss">
.full-width-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
