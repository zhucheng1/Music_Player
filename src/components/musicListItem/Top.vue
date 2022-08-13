<script>
import { reactive } from 'vue'
export default {
  props: ['playlist'],
  setup (props) {
    // 通过props进行传值，判断如果数据拿不到，则从本地读取数据
    let creator = reactive({})

    if ((props.playlist.creator === '')) {
      creator = JSON.parse(sessionStorage.getItem('itemDetail')).playlist.creator
    }

    // 对播放量进行处理
    const changeCount = (num) => {
      if (num >= 100000000) {
        // toFixed(1)显示一位小数
        return (num / 100000000).toFixed(1) + '亿'
      } else if (num >= 10000) {
        return (num / 10000).toFixed(1) + '万'
      }
    }
    return {
      props,
      creator,
      changeCount
    }
  }

}

</script>

<template>
  <div class="itemMusicTop">
    <!-- 背景图片 -->
    <img :src="playlist.coverImgUrl" class="bgimg">
    <div class="itemLeft">
      <!-- 返回按钮 -->
      <!-- 现代的辅助技术能够识别并朗读由 CSS 生成的内容和特定的 Unicode 字符。为了避免 屏幕识读设备抓取非故意的和可能产生混淆的输出内容（尤其是当图标纯粹作为装饰用途时），我们为这些图标设置了 aria-hidden="true" 属性。 -->
      <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
        <use xlink:href="#icon-zuojiantou"></use>
      </svg>
      <span>歌单</span>
    </div>
    <!-- 右边图标 -->
    <div class="itemRight">
      <!-- 搜索图标 -->
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-sousuo"></use>
      </svg>
      <!-- 选项图标 -->
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-liebiao"></use>
      </svg>
    </div>
  </div>
  <!-- 内容区域 -->
  <div class="itemMusicContent">
    <!-- 封面部分 -->
    <div class="top">
      <div class="itemimg">
        <!-- 歌单封面 -->
        <img :src="playlist.coverImgUrl">
        <span class="playCount">
          <!-- 播放图标 -->
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-a-24gl-play1"></use>
          </svg>
          <!-- 播放量 -->
          {{ changeCount(playlist.playCount) }}
        </span>
      </div>
      <!-- 封面右侧的内容 -->
      <div class="text">
        <!-- 歌单名 -->
        <span class="name">{{ playlist.name }}</span>
        <!-- 歌单作者 -->
        <div class="creator">
          <div class="avatar">
            <!-- 头像 -->
            <img :src="creator.avatarUrl">
            <!-- 名字 -->
            <span>{{ creator.nickname }}
              <!-- 箭头图标 -->
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-youjiantou"></use>
              </svg>
            </span>
          </div>
          <!-- 歌单描述 -->
          <div class="description">
            <span>{{ playlist.description }}</span>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-youjiantou"></use>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部一行 -->
    <div class="bottem">
      <!-- 评论 -->
      <div class="item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-iconfontzhizuobiaozhun023110"></use>
        </svg>
        <span>{{ playlist.subscribedCount }}</span>
      </div>
      <!-- 分享 -->
      <div class="item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fenxiang"></use>
        </svg>
        <span>{{ playlist.shareCount }}</span>
      </div>
      <!-- 下载 -->
      <div class="item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-iconfontzhizuobiaozhun023146"></use>
        </svg>
        <span>下载</span>
      </div>
      <!-- 多选 -->
      <div class="item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-show_duoxuan"></use>
        </svg>
        <span>多选</span>
      </div>
    </div>
  </div>
</template>

<style lang='less' scoped>
.itemMusicTop {
  width: 100%;
  height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // padding: .2rem;
  position: relative;

  .itemLeft,
  .itemRight {
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 .2rem;

    span {
      font-size: .4rem;
      color: white;
    }

    .icon {
      fill: white; //填充颜色
    }
  }

  .bgimg {
    width: 100%;
    height: 11rem;
    position: fixed;
    z-index: -1;
    //虚化
    filter: blur(0.6rem);
  }
}

.itemMusicContent {
  width: 100%;
  height: 5rem;

  .top {
    display: flex;
    justify-content: space-between;

    .itemimg {
      margin: .2rem;
      position: relative;

      img {
        height: 3rem;
        border-radius: .4rem;
      }

      .playCount {
        position: absolute;
        top: .1rem;
        right: .1rem;
        font-size: .24rem;
        color: white;

        .icon {
          width: .24rem;
          fill: white;
          vertical-align: middle;
        }
      }
    }

    .text {
      display: flex;
      flex-direction: column;
      padding: .25rem 0;
      justify-content: space-between;
      color: rgb(207, 205, 205);

      .name {
        font-weight: 500;
        color: white;
        text-align: left;
      }

      .avatar {
        margin-bottom: .2rem;

        img {
          height: .6rem;
          border-radius: .3rem;
          vertical-align: middle;

        }

        span {
          .icon {
            height: .24rem;
            fill: white;
            vertical-align: middle;
          }
        }

      }

      .description {
        font-size: .24rem;
        height: .6rem;
        display: flex;
        justify-content: space-around;
        align-items: center;

        span {
          width: 80%;
          height: .6rem;
          text-overflow: ellipsis;
          overflow: hidden;
          display: -webkit-box; //使用自适应布局
          -webkit-line-clamp: 2; //设置超出行数，要设置超出几行显示省略号就把这里改成几
          -webkit-box-orient: vertical;
        }

        .icon {
          width: 10%;
          height: .24rem;
          margin-right: .3rem;
          fill: white;
          vertical-align: middle;
        }
      }
    }
  }

  .bottem {
    display: flex;
    /* 均匀排列每个元素，为每个元素分配相同的空间 */
    justify-content: space-around;

    color: white;
    margin-top: .2rem;

    .item {
      // 居中对齐弹性盒的各项元素
      align-items: center;
      display: flex;
      // 灵活的项目将垂直显示，正如一个列一样
      flex-direction: column;

      /* 均匀排列每个元素首个元素放置于起点，末尾元素放置于终点 */
      justify-content: space-between;

      .icon {
        // 填充为白色
        fill: white;

        margin-bottom: .1rem;
      }
    }
  }
}
</style>
