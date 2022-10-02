<template>
  <div class="card-toolbar">
    <div class="card-toolbar__more">
      <span>More</span>
    </div>
    <div class="card-toolbar__wrapper">
      <div class="card-toolbar__edit">
        <IconBase width="20" height="20" icon-name="write" icon-color="#7caf8a">
          <IconPencil />
        </IconBase>
      </div>
      <div class="card-toolbar__remove">
        <IconBase width="20" height="20" icon-name="write" icon-color="#7caf8a">
          <IconDelete />
        </IconBase>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.card-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem 0;

  &__more {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 1.15px;
    text-transform: uppercase;
    color: #7caf8a;
  }

  &__remove {
    margin-left: 2.4rem;
  }

  &__wrapper {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
}
</style>
<script setup lang="ts">
import IconBase from "@/components/icons/IconBase.vue";
import IconCoaches from "@/components/icons/IconCoach.vue";
import IconDelete from "@/components/icons/IconDelete.vue";
import IconPencil from "@/components/icons/IconPencil.vue";
</script>
