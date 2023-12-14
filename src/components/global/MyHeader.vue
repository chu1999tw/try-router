<script setup>
const props = defineProps({
  toggleSidebar: Function
})
</script>

<template>
  <header>
    <div class="header">
      <img src="@/assets/icon/hamburger.svg" alt="漢堡" @click="props.toggleSidebar" />

      <!-- 系統名稱與logo -->
      <div class="header__main">
        <div class="header__iconWrap">
          <img src="@/assets/icon/myProjectIcon.svg" alt="ford" />
        </div>

        <h1 class="header__title">vue router練習網</h1>
      </div>

      <!-- 右方功能列 -->
      <div class="header__userControl">
        <select name="language" id="language" class="languageSelector">
          <option value="0">學不動了</option>
          <option value="1">今天放假</option>
          <!-- 自行增加 -->
        </select>

        <div class="dividingLine"></div>

        <div class="userInfo">
          <div class="userInfo__name">大哥哥艾里</div>
          <div class="userInfo__identity">測試員</div>
        </div>

        <img src="@/assets/icon/logout.svg" alt="登出" />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
// header base
$header-height: 60px;
$header-padding: 0 $Padding_16;
$header-bg-color: $Primary-Color;
$header-box-shadow: $elevation-level-1;
$header-h1-color: $White;
$header-h1-icon-gap: 16px;

// logo
$header-main-logo-width: 84.8px;
$header-main-logo-height: 32px;

header {
  width: 100%;
}

.header {
  @include flex(flex-start, center);
  padding: $header-padding;
  background: $header-bg-color;
  height: $header-height;
  box-shadow: $header-box-shadow;

  img {
    cursor: pointer;
  }
}

.header__main {
  @include flex(flex-start, center, $header-h1-icon-gap);
  margin: 0 $Margin_32;
  .header__iconWrap {
    width: $header-main-logo-width;
    height: $header-main-logo-height;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .header__title {
    @include h1();
    color: $header-h1-color;
  }
}

.header__userControl {
  @include flex(start, center, 16px);
  margin-left: auto;

  .languageSelector {
    @include buttonMD();
    // 取消預設
    -webkit-appearance: none;
    appearance: none;
    color: $White;
    padding: $Padding_8 $Padding_40 $Padding_8 $Padding_8;
    background: $Primary-Color-Dark url('@/assets/icon/select_arrow_white.svg') no-repeat
      calc(100% - 8px) center;
    border: none;
    border-radius: $Corner-Radius-MD;
    // 使用背景添加dropdown icon 故設定固定高度
    height: 40px;
  }

  .dividingLine {
    width: 1px;
    height: 24px;
    background: $Black-Tone-80;
  }

  .userInfo {
    @include flex(start, center, 8px);

    &__name {
      @include title();
      color: $White;
    }

    &__identity {
      @include bodyLG();
      color: $Black-Tone-70;
    }
  }
}
</style>
