<template>
  <div class="page">
    <header class="mui-bar-nav">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" style="margin-top: 10px;"></a>
      <h1 class="mui-title" style="line-height: 47px;">欢迎使用金陵汪微线上犬证办理服务</h1>
    </header>
    <main>
      <div class="service-img">
        <img src="static/images/service.png" alt=""/>
      </div>
      <div class="smart-fs-h1">
        办理流程
      </div>
      <div class="smart-row smart-whitespace">
        <div class="flow-chart">
          <img src="static/images/loading1.gif" data-original='static/images/flowchart.png' alt=""/>
        </div>
        <router-link to="/"><button class="smart-button primary">返回</button></router-link>
      </div>

    </main>
  </div>
</template>

<script>
  import {lazyLoadImages, aftLoadImg} from '../../static/js/Images.js'
  export default {
    name: 'flow',
    mounted () {
      var aImages = document.querySelectorAll('img[data-original]')  // 获取所有图片元素
      lazyLoadImages(aImages) // 打开页面时加载
//    var vm = this
      window.onscroll = function () { // 如果页面有滚动则加载
        aftLoadImg(aImages)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .left-btn{
    color: #fff;
    position: absolute;
    left: 15px;
    top: 0;
  }
  .primary{
    width: 100%;
    margin: 20px 0;
  }
  .service-img,
  .service-img img,
  .flow-chart,
  .flow-chart img{
    width: 100%;
    display: block;
  }
  .smart-fs-h1{
    text-align: center;
    padding: 10px 0;
    margin-bottom: 10px;
    border-bottom: 1px solid #D6D5D5;
    box-shadow: 2px 2px 5px #D6D5D5;
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
</style>
