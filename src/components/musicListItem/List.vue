<script setup>
import { defineProps } from 'vue'
// 利用了webpack的resolve.alias特性，webpack.config.js的配制代码如下，在webpack打包时，会把路径引用中的@符号，转换为相对应的路径
import { FooterMusicStore } from '@/store/FooterMusic.js'
const store = FooterMusicStore()
// 获取组件传值
const props = defineProps(['itemList', 'subscribedCount'])
console.log(props)
/* 点击播放音乐将音乐列表数据和点击的歌曲索引传进去 */
const playMusic = (index) => {
  store.updatePlayList(props.itemList)
  store.updateplayListIndex(index)
}

</script>

<template>
  <div class="box">
    <!-- 播放列表顶上的一行 -->
    <div class="top">
      <!-- 左侧部分 -->
      <div class="left">
        <!-- 播放图标 -->
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-24gl-playCircle"></use>
        </svg>播放全部
        <span>（共{{ itemList.length }}首）</span>
      </div>
      <!-- 右侧部分 -->
      <div class="right">
        <van-button type="danger">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-jiahao1"></use>
          </svg>
          收藏<span>({{ subscribedCount }})</span>
        </van-button>
      </div>
    </div>
    <!-- 歌曲列表 -->
    <div class="itemlist">
      <!-- 循环渲染歌曲列表 -->
      <div class="item" v-for="(item, index) in itemList" :key="item">
        <!-- 歌曲序号 -->
        <span class="id">{{ index + 1 }}</span>
        <div class="songmsg" @click="playMusic(index)">
          <!-- 歌名 -->
          <p class="song">{{ item.name }}</p>
          <!-- 歌手名 -->
          <span class="singer" v-for="(item1, i) in item.ar" :key="i">{{ item1.name }}</span>
        </div>
        <div>
          <!-- 视频图标 -->
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shipin" v-if="item.mv != 0"></use>
          </svg>
          <!-- 选择图标 -->
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-liebiao2"></use>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang='less' scoped>
.box {
  background-color: white;
  border-top-left-radius: .4rem;
  border-top-right-radius: .4rem;
  padding-bottom: 1.4rem;

  .top {
    display: flex;
    justify-content: space-between;
    padding: .2rem;
    height: 1.2rem;
    align-items: center;

    .left {
      height: 100%;
      font-size: .28rm;
      margin-top: .2rem;
      font-weight: 600;

      .icon {
        width: .5rem;
        vertical-align: middle;
        margin-right: .1rem;
      }

      span {
        font-size: .2rem;
        color: gray;
      }
    }

    .right {

      .van-button {
        border-radius: .5rem;

        .icon {
          fill: white;
          width: .4rem;
          vertical-align: middle;
        }
      }
    }
  }

  .itemlist {
    .item {
      display: flex;
      justify-content: space-between;
      height: 1.2rem;
      align-items: center;
      padding: .3rem 0;

      .id {
        flex: 1;
        width: .2rem;
        margin-left: .3rem;
      }

      .songmsg {
        flex: 8;

        .song {
          font-weight: 600;
          // text-align: left;
        }

        .singer {
          margin-top: .04rem;
          font-size: .2rem;
          color: gray;
          // margin-left: -205px;
        }
      }

      .icon {
        flex: 1;
        width: .5rem;
        margin: 0 .1rem 0 .2rem;
      }
    }
  }
}
</style>
