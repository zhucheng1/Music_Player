<script setup>
import FooterMusic from '@/components/item/FooterMusic.vue'
import { FooterMusicStore } from '@/store/FooterMusic.js'
const store = FooterMusicStore()

</script>

<template>
  <router-view/>
  <FooterMusic v-show="store.isFooterMusic"></FooterMusic>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} 

/* 初始化样式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.icon {
  width: .4rem;
  height: .4rem;
} 
a {
  color: black;
} 
</style>
