<template>
    <div class="wrapper">
        <h1 class="title">TODO with Vue 3 / Typescript / Pinia</h1>
        <div class="content">
            Content will be here...
        </div>
  </div>
</template>

<style lang="scss" scoped>
    .wrapper {
        .title {
            @apply font-bold text-green-500;
        }
        .content {
            height: calc(100vh - 20px);
            @apply mt-4;
        }
    }
</style>
