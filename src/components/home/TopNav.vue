<template>
<!-- 头部区域 -->
<div class="topNav">
    <!-- 左边 -->
    <div class="topLeft">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-liebiao2"></use>
      </svg>
    </div>
    <!-- 中间 -->
    <div class="topContent">
      <!-- <span @click="$router.push('/infoUser')">我的</span> -->
      <span @click="$router.push('/infoUser')">我的</span>
      <span class="active">发现</span>
      <span>视频</span>
    </div>
    <!-- 右边 -->
    <div class="topRight">
      <!-- <svg class="icon" aria-hidden="true" @click="$router.push('/search')"> -->
      <!-- 选中一行的快捷键：CTRL + L -->
      <svg class="icon" aria-hidden="true" @click="$router.push('/search')">
        <use xlink:href="#icon-sousuo"></use>
      </svg>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang='less' scoped>
.topNav {
  width: 100%;
  height: 1rem;
  padding: 0.2rem;
  display: flex;
  /* 均匀排列每个元素，首个元素放置于起点，末尾元素放置于终点 */
  justify-content: space-between;
  // 在该行的纵轴上居中
  align-items: center;

  .topContent {
    width: 65%;
    height: 100%;
    display: flex;
    /* 均匀排列每个元素，每个元素周围分配相同的空间 */
    justify-content: space-around;
    
    font-size: .36rem;

    .active {
      font-weight: 900;
    }
  }
}
</style>