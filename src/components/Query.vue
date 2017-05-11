<template>
  <div class="page">
    <header class="mui-bar-nav">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" style="margin-top: 10px;"></a>
      <h1 class="mui-title" style="line-height: 47px;">查看办理进度</h1>
    </header>
    <main class="mui-content">
      <template v-if="infos">
        <ul class="mui-table-view">
          <li  v-for="info in infos" class="mui-table-view-cell">
            <a class="mui-navigate-right" @click="toDetail(info.yqsqbh)">
              <p><span class="red" v-text="info.yqrxm"></span>办理的犬证</p>
              <p>办理进度：{{info.sbzt|statusText}} {{info.bz}}</p>
              <p>申请时间：{{info.apply_time|applyTime}}</p>
            </a>
          </li>
          <li class="mui-table-view-cell">
            <h4 style="text-align: center;color: #666">进度图示</h4>
          </li>
          <li class='mui-table-view-cell mui-text-center'>
            <img class="mui-text-center" src="static/images/loading1.gif" data-original='static/images/progress.png' alt="进度图示" width="100%"/>
          </li>
        </ul>
      </template>
      <template v-else>
        <ul class="info">
          您还没有申请办理的犬证
      </ul>
      </template>
    </main>
  </div>
</template>

<script>
  import axios from 'axios'
  import {lazyLoadImages} from '../../static/js/Images.js'
  export default {
    name: 'Query',
    data () {
      return {
        applyStatus: {
          0: '无申请',
          1: '待审核',
          2: '审核成功',
          3: '审核失败'
//        4:"待发证",
//        5:"已发证",
//        6:"不予发证"
        },
        infos: []
      }
    },
    filters: {
      statusText: function (value) {
        return this.applyStatus[value]
      },
      applyTime: function (applyTime) {
        return new Date(parseInt(applyTime) * 1000).toLocaleDateString()
      }
    },
    created: function () {
      this.fetchData()
    },
    mounted: function () {
      var aImages = document.querySelectorAll('img[data-original]')  // 获取所有图片元素
      lazyLoadImages(aImages) // 打开页面时加载
      window.onscroll = function () { // 如果页面有滚动则加载
        lazyLoadImages(aImages)
      }
    },
    methods: {
      fetchData: function () {
        alert('fetchData begins')
        axios.post(this.site + 'Apply/getMyApplies', {
          openid: 'openid'
        }).then((res) => {
          console.log(JSON.stringify(res.data))
          this.infos = res.data
        })
      },
      toDetail: function (pk) {
//                alert('pk is ' +pk);
//                console.log('跳转到申请的页面');
        location.href = 'progress_detail.html#' + pk
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .red{
    color:red;
  }
  .left-btn{
    color: #fff;
    position: absolute;
    left: 15px;
    top: 0;
  }
  .info{
    position: absolute;
    top: 0;
    left: 50%;
    text-align: center;
    margin-top: 70%;
    margin-left: -102px;
  }
  .mui-bar-nav{
    position: relative;
    width: 100%;
    height: 45px;
    line-height: 45px;
    background-color: #258ee7;
    color: #ffffff;
    font-size: 1.6rem;
    text-align: center;
    box-shadow: none;
    -webkit-box-shadow: none;
  }
  .mui-title{
    color: #fff;
    width: 80%;
    margin: 0 10%;
  }
  .mui-icon{
    color: #fff;
    margin-top: 9px;
    margin-left: 5px;
  }
  .mui-content{
    padding-top: 0px!important;
  }
</style>
