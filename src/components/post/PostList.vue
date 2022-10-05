<template>
  <div class="row">
    <slot></slot>
  </div>
</template>
<style lang="scss" scoped>
.row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}
</style>
