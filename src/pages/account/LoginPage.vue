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
      <div class="col-6">
        <div class="row justify-center items-center full-height">
          <div class="col-md-8 offset-md-1 q-gutter-lg">
            <p class="text-h4 text-weight-medium text-center q-pa-md text-justify">
              Login to continue
            </p>
            <login-form />
            

          </div>
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
}
</style>
