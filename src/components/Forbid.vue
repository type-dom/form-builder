<template>
  <div class="page">
    <header class="mui-bar-nav">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" style="margin-top: 10px;"></a>
      <h1 class="mui-title" style="line-height: 47px;">欢迎使用金陵汪微线上犬证办理服务</h1>
    </header>
    <main>
      <div class="service-img">
        <!--<img src="static/images/service.png" alt=""/>-->
      </div>
      <div class="smart-fs-h1">
        禁养犬种图录
    </div>
      <div class="smart-row smart-whitespace mui-row">
        <div class="mui-col-xs-4">
          <div v-for="dog in categories[0]" class="img-content">
            <img class="img" src="static/images/loading1.gif" :data-original="'static/images/categories/'+dog.imgUrl" data-preview-src="" data-preview-group="1" data-preview-footer="" alt="禁养犬"/>
            <p class="dog-title">{{dog.name}}</p>
          </div>
        </div>
        <div class="mui-col-xs-4">
          <div v-for="dog in categories[1]" class="img-content">
            <img class="img" src="static/images/loading1.gif" :data-original="'static/images/categories/'+dog.imgUrl" alt="" data-preview-src="" data-preview-group="1"/>
            <p class="dog-title">{{dog.name}}</p>
          </div>
        </div>
        <div class="mui-col-xs-4">
          <div v-for="dog in categories[2]" class="img-content">
            <img class="img" src="static/images/loading1.gif" :data-original="'static/images/categories/'+dog.imgUrl" data-preview-src="" data-preview-group="1" alt=""/>
            <p class="dog-title">{{dog.name}}</p>
          </div>
        </div>
        <router-link to="/"><button class="smart-button primary">返回</button></router-link>
      </div>
    </main>
  </div>
</template>

<script>
  import axios from 'axios'
//  import mui from '../../static/js/mui.previewimage'
//    window.app = Object.assign({}, {mui})
//  mui.init()
//  mui.PreviewImage()
  import {lazyLoadImages} from '../../static/js/Images.js'
  export default {
    name: 'forbid',
    data () {
      return {
        categories: []
      }
    },
    created () {
      this.fetchData()
    },
    methods: {
      fetchData () {
        axios.get('static/dogCategories.json').then((res) => {
          console.log(JSON.stringify(res.data))
          this.categories = res.data
        })
      }
    },
    updated () {
      var aImages = document.querySelectorAll('img[data-original]') // 获取所有含有data-original属性的图片元素
      lazyLoadImages(aImages) // 打开页面时加载
      // 如果页面有滚动则加载
//      var vm = this
      window.onscroll = function () {
        lazyLoadImages(aImages)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  main{
    background-color: #f2f7fe;
  }
  .left-btn{
    color: #fff;
    position: absolute;
    left: 15px;
    top: 0;
  }
  .service-img,
  .service-img img,
  .img{
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
  .img-content{
    box-shadow: 0 0 5px 1px #A7CAD7;
    border-radius: 5px 5px 0 0;
    margin-bottom: 5px;
  }
  .dog-title{
    color: #444;
    margin-top: 0;
    text-align: center;
    background-color: #fff;
    border-top: 1px solid #f2f2f2;
    padding: 3px 0;
    font-size: 13px;
  }
  .smart-whitespace{
    background-color: #F1F8FD;
    padding: 5px 10px 20px;
  }
  .mui-col-xs-4{
    padding: 0 1%;
  }

  .mui-preview-image.mui-fullscreen {
    position: fixed;
    z-index: 20;
    background-color: #000;
  }
  .mui-preview-header,
  .mui-preview-footer {
    position: absolute;
    width: 100%;
    left: 0;
    z-index: 10;
  }
  .mui-preview-header {
    height: 44px;
    top: 0;
  }
  .mui-preview-footer {
    height: 50px;
    bottom: 0px;
  }
  .mui-preview-header .mui-preview-indicator {
    display: block;
    line-height: 25px;
    color: #fff;
    text-align: center;
    /*margin: 15px auto 4;*/
    width: 70px;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 12px;
    font-size: 16px;
  }
  .mui-preview-image {
    display: none;
    -webkit-animation-duration: 0.5s;
    animation-duration: 0.5s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
  .mui-preview-image.mui-preview-in {
    -webkit-animation-name: fadeIn;
    animation-name: fadeIn;
  }
  .mui-preview-image.mui-preview-out {
    background: none;
    -webkit-animation-name: fadeOut;
    animation-name: fadeOut;
  }
  .mui-preview-image.mui-preview-out .mui-preview-header,
  .mui-preview-image.mui-preview-out .mui-preview-footer {
    display: none;
  }
  .mui-slider-img-content {
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
    color: white;
    text-align: center;
    line-height: 21px
  }
  .mui-zoom-scroller {
    position: absolute;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    -webkit-backface-visibility: hidden;
  }
  .mui-zoom {
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
  }
  .mui-slider .mui-slider-group .mui-slider-item img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
  .mui-android-4-1 .mui-slider .mui-slider-group .mui-slider-item img {
    width: 100%;
  }
  .mui-android-4-1 .mui-slider.mui-preview-image .mui-slider-group .mui-slider-item {
    display: inline-table;
  }
  .mui-android-4-1 .mui-slider.mui-preview-image .mui-zoom-scroller img {
    display: table-cell;
    vertical-align: middle;
  }
  .mui-preview-loading {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: none;
  }
  .mui-preview-loading.mui-active {
    display: block;
  }
  .mui-preview-loading .mui-spinner-white {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -25px;
    margin-top: -25px;
    height: 50px;
    width: 50px;
  }
  .mui-preview-image img.mui-transitioning {
    -webkit-transition: -webkit-transform 0.5s ease, opacity 0.5s ease;
    transition: transform 0.5s ease, opacity 0.5s ease;
  }
  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @-webkit-keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  .img-content img {
    max-width: 100%;
    min-height:80px;
    height: auto;
  }
  .mui-preview-header .mui-preview-indicator{
    text-align: center ;
    width: 100%;
    margin-top: 20px;
  }
  .primary{
    margin-top: 10px;
    width: 100%;
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
  /*.page{*/
  /*position: absolute; top: 0; left: 0; right: 0; bottom: 0;*/
  /*overflow-y: auto; -webkit-overflow-scrolling: touch;*/
  /*}*/
</style>
