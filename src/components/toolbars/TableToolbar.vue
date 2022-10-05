<template>
  <div class="toolbar">
    <MyButton class="toolbar__btn" color="#7CAF8A" @click="showAddModal">
      <IconBase width="20" height="20" icon-name="write" icon-color="#FFFFFF">
        <IconPlusSmall />
      </IconBase>
      <span>New user</span>
    </MyButton>
    <MyButton
      class="toolbar__btn"
      @click="editUser"
      :class="{ 'toolbar__btn--disable': !props.userSelectedId }"
      :disabled="!props.userSelectedId"
      >Edit</MyButton
    >
    <p
      class="toolbar__reset"
      :class="{ 'toolbar__reset--active': props.userSelectedId }"
      @click="resetPassword"
    >
      Reset password
    </p>
  </div>
</template>
<script setup lang="ts">
import MyButton from "@/components/UI/VButton.vue";
import IconBase from "@/components/icons/IconBase.vue";
import IconPlusSmall from "@/components/icons/IconPlusSmall.vue";

const emit = defineEmits(["showAddModal", "editUser", "resetPassword"]);

const props = defineProps<{
  userSelectedId: number | null;
}>();

const showAddModal = () => {
  emit("showAddModal");
};

const editUser = () => {
  emit("editUser");
};

const resetPassword = () => {
  if (props.userSelectedId) emit("resetPassword");
};
</script>
<style scoped lang="scss">
.toolbar {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem 1.6rem;
  background: #2f4a69;
  border-radius: 4px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.15px;
  color: #ffffff;

  &__btn {
    background: #7caf8a;
    border-radius: 24px;
    padding: 0.7rem 1.6rem;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    text-align: center;
    letter-spacing: 0.15px;
    color: #ffffff;

    &:not(:last-of-type) {
      margin-right: 0.8rem;
    }

    &:last-of-type {
      margin-right: 2.4rem;
    }

    &--disable {
      opacity: 0.5;
    }
  }

  &__reset {
    opacity: 0.5;
    cursor: pointer;

    &--active {
      opacity: 1;
    }
  }
}
</style>
