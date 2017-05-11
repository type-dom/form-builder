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
      <div class="smart-fs-h1">市农委认可犬类免疫点名录</div>
      <div class="mui-content">
        <div class="mui-text-center mui-row mui-text">
          <span @click='dogCardNetwork' class="mui-tab-bar mui-col-xs-6" :class="{'mui-tab-bar-active': !isActive}">犬证办理网点</span>
          <span @click='petPreventionNetwork' class="mui-tab-bar mui-col-xs-6" :class="{'mui-tab-bar-active':isActive}">宠物防疫网点</span>
        </div>
        <ul class="mui-table-view">
          <template v-for="item in items">
            <li class="mui-table-view-cell mui-row">
              <div class="mui-col-xs-4">
                <img :src="'static/images/certification/'+ item.pic"/>
              </div>
              <div class="mui-col-xs-8">
                <h4 class="mui-h4">{{item.title}}</h4>
                <div class="mui-row">
                  <p class="mui-col-xs-1">
                    <img src="static/images/tel.png" alt=""/>
                  </p>
                  <p class="mui-col-xs-11">
                    <a :href ="'tel:' + item.phone"> {{item.phone}}</a>
                    &nbsp; <a :href="'tel:' + item.mobile">{{item.mobile}}</a>
                  </p>
                </div>
                <div class="mui-row">
                  <p class="mui-col-xs-1">
                    <img src="static/images/address.png" alt=""/>
                  </p>
                  <p class="mui-col-xs-11">{{item.address}}</p>
                </div>
              </div>
            </li>
          </template>
        </ul>
      </div>
    </main>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'flow',
    data () {
      return {
        items: [],
        isActive: false,
        flag: 0,  // 判断是否第一次加载
        dots: null
      }
    },
    created () {
      this.fetchData()
    },
    updated () {
      var aImages = document.querySelectorAll('img[data-original]')  // 获取所有图片元素
      this.lazyLoadImages(aImages) // 打开页面时加载
      var vm = this
      window.onscroll = function () { // 如果页面有滚动则加载
        vm.lazyLoadImages(aImages)
      }
    },
    methods: {
      fetchData () {
        axios.get('static/dots.json').then((res) => {
          console.log(JSON.stringify(res.data))
          this.dots = res.data
          this.items = this.dots.polices
        })
      },
      dogCardNetwork () {
        this.items = []
        this.items = this.dots.polices
        console.log(this.items)
        this.isActive = false
      },
      petPreventionNetwork () {
        this.items = []
        this.items = this.dots.hospitals
        this.isActive = true
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body{
    background-color: #fff;
  }
  .left-btn{
    color: #fff;
    position: absolute;
    left: 15px;
    top: 0;
  }
  .service-img,
  .service-img img,
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
  .mui-text{
    padding:0px 10px 20px;
    background-color: #fff;
  }
  .mui-tab-bar-active{
    color: #2E91E6;
    border-bottom: 2px solid #248FE7;
  }
  .mui-tab-bar{
    padding: 10px 0;
  }
  .mui-col-xs-11{
    padding-left: 5px;
    color: #444;
    font-size: 12px;
  }
  .mui-col-xs-1 img{
    width: 15px;
    line-height: 21px;
  }
  .mui-col-xs-4 img{
    width: 90px;
  }
  .mui-ios .mui-table-view-cell{
    border-bottom: 1px solid #D6D5D5;
    box-shadow: 2px 2px 5px #D6D5D5;
  }
  .mui-h4{
    font-size: 14px;
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
