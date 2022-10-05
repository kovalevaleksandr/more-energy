<template>
  <div class="add">
    <div class="add__container">
      <div class="add__header">
        <div class="add__header-title">{{ props.title }}</div>
        <div class="add__header-cancel">
          <IconBase
            width="20"
            height="20"
            icon-name="write"
            icon-color="#383E45"
          >
            <IconCancel />
          </IconBase>
        </div>
      </div>
      <div class="add__body">
        <form class="add__form">
          <VFieldInput class="add__field" name-label="Name">
            <VInput class="add__input" v-model="newUser.name" placeholder="-" />
          </VFieldInput>
          <VFieldInput class="add__field" name-label="Email">
            <VInput
              class="add__input"
              v-model="newUser.email"
              placeholder="-"
            />
          </VFieldInput>
          <VFieldInput class="add__field" name-label="Permission">
            <VSelect
              class="add__input"
              v-model="newUser.perm"
              :options="selectPermission"
            />
          </VFieldInput>

          <div class="add__btn-wrapper">
            <VButton class="add__btn-cancel">{{ props.btnFirstName }} </VButton>
            <VButton class="add__btn-add" @click="addNewUser"
              >{{ props.btnTwoName }}
            </VButton>
          </div>
        </form>
      </div>
    </div>
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
.add {
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
