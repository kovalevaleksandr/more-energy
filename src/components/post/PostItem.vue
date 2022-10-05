<template>
  <div class="item">
    <div class="item__img">
      <img :src="props.object.url" alt="photo" />
    </div>
    <div class="item__wrapper">
      <div class="item__date">
        {{ props.object.id }}
      </div>
      <div class="item__title">
        123333333333
        {{ props.object.title }}
      </div>
      <div class="item__desc">
        {{ props.object.id }}
      </div>
      <!--      <VMore :title="props.object.title" @update:modelValue="abc" />-->
      <CardToolbar class="item__toolbar" />
    </div>
  </div>
</template>
<script setup lang="ts">
import CardToolbar from "@/components/toolbars/CardToolbar.vue";
import VMore from "@/components/post/VMore";
import { ref } from "vue";
const props = defineProps<{
  object: object;
}>();

const abc = ref("");
</script>
<style lang="scss" scoped>
.item {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #ffffff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.11);
  border-radius: 4px;

  &__wrapper {
    width: 100%;
    padding: 2rem 1.6rem;
  }

  &__img {
    margin-bottom: 2rem;

    & img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__date {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.15px;
    color: #616972;
    margin-bottom: 0.8rem;
  }

  &__title {
    font-family: "Anton", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    color: #616972;
    margin-bottom: 2rem;
  }

  &__desc {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #616972;
    margin-bottom: 2rem;
  }
}
</style>
