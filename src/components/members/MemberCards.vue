<script setup>
import MemberCard from '@/components/members/MemberCard.vue'

const props = defineProps({
  data: {
    type: Array
  }
})
</script>

<template>
  <el-row :gutter="20">
    <el-col :span="6" v-for="(memberInfo, index) in props.data" :key="memberInfo.id.value">
      <MemberCard :member-info="memberInfo" :user-id="index + 1" />
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
  margin-bottom: 20px;
}
</style>
