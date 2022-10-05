<template>
  <div class="edit">
    <div class="edit__container">
      <div class="edit__header">
        <div class="edit__header-title">{{ props.title }}</div>
        <div class="edit__header-cancel" @click="hideEditModal">
          <IconBase
            width="20"
            height="20"
            icon-name="write"
            icon-color="#383E45"
            ><IconCancel
          /></IconBase>
        </div>
      </div>
      <div class="edit__body">
        <form class="edit__form">
          <VFieldInput class="edit__field" name-label="Name">
            <VInput class="edit__input" v-model="newValue.name"></VInput>
          </VFieldInput>
          <VFieldInput class="edit__field" name-label="Email">
            <VInput class="edit__input" v-model="newValue.email"></VInput>
          </VFieldInput>
          <VFieldInput class="edit__field" name-label="Permission">
            <VSelect
              class="edit__input"
              v-model="newValue.perm"
              :options="selectPermission"
            />
          </VFieldInput>
          <div class="edit__btn-wrapper">
            <VButton class="edit__btn-cancel" @click="cancelClient">
              {{ props.btnFirstName }}
            </VButton>
            <VButton class="edit__btn-add" @click="changeClient">
              {{ props.btnTwoName }}
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
import VFieldInput from "@/components/UI/VFieldInput.vue";
import VSelect from "@/components/UI/VSelect.vue";
import { ref } from "vue";

const props = defineProps<{
  title: string;
  btnFirstName: string;
  btnTwoName: string;
  userSelected: object;
}>();

const emit = defineEmits(["editUser", "changeClient", "hideEditModal"]);

const newValue = ref({
  name: props.userSelected.name,
  email: props.userSelected.email,
  perm: props.userSelected.perm,
});

const hideEditModal = () => {
  emit("hideEditModal");
};

const cancelClient = () => {
  newValue.value.name = props.userSelected.name;
  newValue.value.email = props.userSelected.email;
  newValue.value.perm = props.userSelected.perm;
};

const changeClient = () => {
  emit("changeClient", props.userSelected, newValue.value);
};
</script>
<style lang="scss" scoped>
.edit {
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
      cursor: pointer;
    }
  }

  &__form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
