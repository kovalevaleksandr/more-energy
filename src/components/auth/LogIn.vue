<template>
  <h2>{{ formTitle }}</h2>
  <form class="log-in">
    <label class="log-in__item">
      Login
      <MyInput class="log-in__input" v-model="login" />
    </label>

    <label class="log-in__">
      <MyInput v-model="login" />

      <MyButton class="log-in__btn"><span>LOGIN</span></MyButton>
    </label>
  </form>

  <div class="div">
    <span>Forgot your password?</span>
  </div>
</template>
<script setup lang="ts">
import MyInput from "@/components/UI/VInput.vue";
import { ref } from "vue";
import MyButton from "@/components/UI/VButton.vue";
const login = ref("");
const formTitle = "Log in";
</script>
<style lang="scss" scoped>
.log-in {
  .&__btn {
    background: #7caf8a;
    border-radius: 24px;
  }
}
</style>
