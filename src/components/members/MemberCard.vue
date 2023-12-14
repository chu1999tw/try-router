<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  memberInfo: {
    type: Object,
    required: true
  },
  userId: {
    type: Number
  }
})

// 註冊於 el-card 把點擊事件綁定在 el-card 上
const handleClick = (userId) => {
  router.push({ name: 'member_detail', params: { id: userId } })
}
</script>

<template>
  <router-link :to="`/members/member_detail/${userId}`">
    <el-card
      :body-style="{
        padding: '24px 16px',
        display: 'flex',
        'flex-direction': 'column',
        'justify-content': 'center',
        'align-items': 'center',
        gap: '40px',
        cursor: 'pointer'
      }"
    >
      <el-avatar :size="80" :src="memberInfo.picture.medium" />
      <div :style="{ padding: ' 0px', 'text-align': 'center' }">
        <span>{{ `${memberInfo.name.first} - ${memberInfo.name.last}` }}</span>
        <div class="bottom">
          <p class="text">{{ memberInfo.dob.age }}歲</p>
          <p class="text">國家：{{ memberInfo.location.country }}</p>
          <p class="text">電話： {{ memberInfo.phone }}</p>
        </div>
      </div>
    </el-card>
  </router-link>

  <!-- 第二種寫法 與上面寫法相同功能-->
  <!-- <el-card
    :body-style="{
      padding: '24px 16px',
      display: 'flex',
      'flex-direction': 'column',
      'justify-content': 'center',
      'align-items': 'center',
      gap: '40px',
      cursor: 'pointer'
    }"
    @click="handleClick(props.userId)"
  >
    <el-avatar :size="80" :src="memberInfo.picture.medium" />
    <div :style="{ padding: ' 0px', 'text-align': 'center' }">
      <span>{{ `${memberInfo.name.first} - ${memberInfo.name.last}` }}</span>
      <div class="bottom">
        <p class="text">{{ memberInfo.dob.age }}歲</p>
        <p class="text">國家：{{ memberInfo.location.country }}</p>
        <p class="text">電話： {{ memberInfo.phone }}</p>
      </div>
    </div>
  </el-card> -->
</template>

<style lang="scss" scoped>
.el-card {
  transition: all 0.2s ease-in-out;
  &:hover {
    background: #ddd;
  }
}
.text {
  font-size: 12px;
  color: #999;
  word-break: break-all;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  /* justify-content: space-between; */
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}
</style>
