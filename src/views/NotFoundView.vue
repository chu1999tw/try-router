<template>
  <div class="container">
    <img src="@/assets/image/404PageNotFoundImage.svg" alt="404notFound" />
  </div>
</template>

<style lang="scss" scoped>
.container {
  @include flex(center, center);
  width: 100%;
  height: 100%;

  img {
    width: 341px;
    height: 500px;
  }
}
</style>
