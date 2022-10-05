<template>
  <div class="reset__body">
    <form class="reset__form">
      <VFieldInput class="reset__field" name-label="Coach">
        <VInput class="reset__input" v-model="newUser.name" placeholder="-" />
      </VFieldInput>
      <VFieldInput class="reset__field" name-label="Email">
        <VInput class="reset__input" v-model="newUser.email" placeholder="-" />
      </VFieldInput>

      <div class="reset__btn-wrapper">
        <VButton class="reset__btn-cancel">{{ props.btnFirstName }} </VButton>
        <VButton class="reset__btn-add" @click="addNewUser"
          >{{ props.btnTwoName }}
        </VButton>
      </div>
    </form>
  </div>
</template>
<script setup lang="ts">
import IconCancel from "@/components/icons/IconCancel.vue";
import IconBase from "@/components/icons/IconBase.vue";
import VInput from "@/components/UI/VInput.vue";
import VButton from "@/components/UI/VButton.vue";
import { ref } from "vue";
import VFieldInput from "@/components/UI/VFieldInput.vue";
import VSelect from "@/components/UI/VSelect.vue";

const props = defineProps<{
  title: string;
  btnFirstName: string;
  btnTwoName: string;
}>();

const emit = defineEmits(["addNewUser"]);

const newUser = ref({ id: Date.now(), name: "", email: "", perm: "" });

const selectPermission = [
  { value: "user", name: "User" },
  { value: "admin", name: "Admin" },
];

const addNewUser = (): void => {
  emit("addNewUser", newUser.value);
  newUser.value.name = "";
  newUser.value.email = "";
  newUser.value.perm = "";
};
</script>
<style lang="scss" scoped>
.reset {
  background: #ffffff;
  border-radius: 8px;
  width: 37.5rem;

  &__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1.6rem;
  }

  &__header {
    display: flex;
    align-items: center;
    margin-bottom: 2.4rem;

    &-title {
      margin-left: auto;
      font-family: "Anton", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 27px;
      text-align: center;
      color: #616972;
    }

    &-cancel {
      margin-left: auto;
    }
  }

  &__form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__btn {
    &-wrapper {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }

    &-cancel {
      padding: 1.2rem 2rem;
      background: transparent;
      border: 1px solid #616972;
      border-radius: 24px;
      font-family: "Roboto", sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 18px;
      text-align: center;
      letter-spacing: 0.15px;
      color: #616972;
    }

    &-add {
      padding: 1.2rem 2rem;
      margin-left: 0.8rem;
      background: #ddaf45;
      border-radius: 24px;
      font-family: "Roboto", sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 18px;
      text-align: center;
      letter-spacing: 0.15px;
      color: #ffffff;
    }
  }

  &__field {
    margin-bottom: 2.4rem;
  }

  &__input {
    width: 100%;
    background: #f6f8f9;
    border-radius: 4px;
    padding: 3.4rem 1.2rem 1.6rem;
  }
}
</style>
