<template>
  <div>
  <!-- 头部组件 -->
  <TopNav></TopNav>
  <!-- 轮播图 -->
  <TopSwipe></TopSwipe>
  <!-- 图标列表 -->
  <IconList></IconList>
  <!-- 发现好歌单列表 -->
  <MusicList></MusicList>
  </div>
</template>

<script setup>
import TopNav from '@/components/home/TopNav.vue'
import TopSwipe from '@/components/home/TopSwipe.vue'
import IconList from '@/components/home/IconList.vue'
import MusicList from '../components/home/MusicList.vue'
</script>

<style>

</style>