<template>
  <div class="data">
    <div class="data__header">
      <div class="data__title">New Coach</div>
      <div class="data__cancel">
        <IconBase width="20" height="20" icon-name="write" icon-color="#383E45"
          ><IconCancel
        /></IconBase>
      </div>
    </div>
    <div class="data__body">
      <form>
        <VInput v-model="newUser.name"></VInput>
        <VInput v-model="newUser.email"></VInput>
        <div class="add-coach">
          <VButton class="add-coach__btn-cancel">Cancel</VButton>
          <VButton class="add-coach__btn-add">Add</VButton>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup lang="ts">
import IconCancel from "@/components/icons/IconCancel";
import IconBase from "@/components/icons/IconBase.vue";
</script>
