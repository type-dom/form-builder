<template>
  <div class="page">
    <header class="smart-header">
      <span>欢迎使用金陵汪微线上犬证办理服务</span>
    </header>
    <main class="smart-row smart-whitespace">
      <div class="bgimg"></div>
      <h1 class="smart-fs-h1">办理个人养犬基本要求</h1>
      <p class="smart-fs-h3">
        一、具有本市常住户口或者暂住本市的合法证明。
    </p>
      <p class="smart-fs-h3">
        二、具有完全民事行为能力。</p>
      <p class="smart-fs-h3">
        三、有固定住所。</p>
      <p class="smart-fs-h3">
        四、犬只符合规定的种类和数量（不得饲养<router-link to="/forbid">烈性犬</router-link>，每户限养一只）。
    </p>
      <p class="smart-fs-h3">
        五、取得合法有效的犬只免疫证明，养犬人应按要求到市农委认可的<router-link to="/dots">犬类免役点</router-link>办理免疫证明。</p>
      <p class="smart-fs-h3">
        六、根据 <router-link to="/rules">《南京市养犬管理条例》</router-link> 规定，烈性犬、大型犬（犬只站立时肩高超过61厘米的）不得办理养犬登记，并不得在南京市区内饲养。</p>
      <p class="smart-fs-h3">
        七、线上办理只限身份证用户，其他用户请线下办理。</p>
      <!--<p>{{ parent }}</p>-->
      <!--<p>{{msg}}</p>-->
      <div>
        <router-link to="/flow"><button class="smart-button primary small">流程预览</button></router-link>
        <router-link to="/apply"><button class="smart-button primary small">立即办理</button></router-link>
        <router-link to="/query"><button class="smart-button primary small">进度查询</button></router-link>
        <router-link to="/forbid"><button class="smart-button primary small">禁养烈性犬图录</button></router-link>
        <router-link to="/dots"><button class="smart-button primary small">市农委认可犬类免役点名录</button></router-link>
      </div>
    </main>
  </div>
</template>

<script>
//  import mui from '../../static/js/mui.js'
//  mui.init()
  import axios from 'axios'
//  import {sign} from '../../static/js/sign.js'
//  import {test} from '../../static/js/test.js'
  export default {
    name: 'index',
    data () {
      return {
        msg: 'Welcome to Index'
      }
    },
    props: ['parent'],
    created () {
//      test()
//      sign()
      this.getData()
    },
    methods: {
      getData () {
        axios.get('./static/dots.json').then((res) => {
          console.log(res.data)
          return res.data
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  main{
    background-color: #fff;
  }
  .left-btn{
    color: #fff;
    position: absolute;
    left: 15px;
    top: 0;
  }
  .info-img{
    height: 20px;
    vertical-align: middle;
    margin-top: -4px;
  }
  .smart-fs-h1{
    color: #258ee7;
    margin: 15px 0px 10px;
  }

  .smart-form-text-item{
    padding: 0 10px;
    margin: 10px 0;
    border: 1px solid #bfbfbf!important;
    border-radius: 3px;
  }
  .smart-form-text-item > label:first-child{
    width: inherit;
  }
  .smart-form-text-item input[type=text],
  .smart-form-text-item > textarea,
  .smart-form-text-item input[type=tel]{
    border: none;
  }

  .smart-form-select-item{
    -webkit-appearance: none;
    background: 0 0;
    padding: 6px;
    outline: 0;
    line-height: 25px;
    margin: 0px 4px;
    height: 39px;
    color: #333;
    border-radius: 5px;
    display: block;
    box-sizing: border-box;
    -webkit-box-flex: 10;
    border: none;
    font-size: inherit;
  }
  .smart-form-list{
    border-bottom: none;
  }
  .smart-button.primary{
    width: 100%;
    margin: 10px 0 20px;
  }
  .smart-form-radio-item{
    margin: 0 0 0 1.4em;
    padding: 6px 0;
    border-bottom: none!important;
  }
  input[type="date"],
  input[type="tel"],
  input[type="number"]{
    border: none;
    padding: 6px;
    outline: none;
    margin-bottom: 0px;
    line-height: 21px;
    font-size: inherit;
    width:200px;

  }
  .smart-form-checkbox-item input[type=checkbox]{
    top: 1px;
  }
  input[type="number"]{
    display: block;
    box-sizing: border-box;
    background: 0 0;
    padding: 6px;
    line-height: 25px;
    margin: 0px 4px;
    font-family: inherit;
    font-size: inherit;
    font-style: inherit;
    font-weight: inherit;
    outline: 0;
    color: #333333;
    border-radius: 4px;
    -webkit-box-flex: 10;
  }
  .upload-pic{
    display: table;
    width: 100%;
    margin-bottom: 10px;
    border-radius: 3px;
    padding: 6px 10px;
    border: 1px solid #bfbfbf;
  }
  .smart-fs-h4{
    line-height: 1.4rem;
    margin-top: 0.5rem;
  }
  .explain{
    width: 80%;
    display: block;
    float: left;
  }
  .img-content{
    display: none;
  }
  .pic{
    float: right;
    width: 18%;
    height: 14.8vw;
    margin: 6px 0 5px 2%;
    background:url(/static/images/img.png) no-repeat;
    background-size: contain;
    border: none;
  }
  .img-div{
    width: 100%;
    margin-top: 10px;
    /*display: inline-block;*/
    /*position: relative;*/
    /*font-size: 0;*/
  }
  .img-div img{
    width: 100%;
    min-height:80px;
    /*position: absolute;*/
    /*left: 0;*/
    /*top: 0;*/
  }
  /*.img-div:after{*/
  /*padding-top: 72%;*/
  /*display: block;*/
  /*content: "";*/
  /*}*/
  .smart-form-checkbox-item input[type=checkbox]:checked:after, .smart-form-radio-item input[type=checkbox]:checked:after{
    top: -2px!important;
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
    line-height:47px;
  }
  .mui-icon{
    color: #fff;
    margin-top: 9px;
    margin-left: 5px;
  }
  input[type='button']{
    border: none;
  }
  .smart-form-checkbox-item input[type=radio]:checked:after,
  .smart-form-radio-item input[type=radio]:checked:after{
    margin-top: -1px;
    -moz-osx-text-stroke-width: 0px;
    -webkit-text-stroke-width: 0px;
  }
  .modal{
    display: none;
    position: fixed;
    top: 40%;
    width: 80%;
    left: 10%;
    border-radius: 8px;
    background-color: #333;
    opacity: 0.9;
    z-index: 999;
    color: #fff;
    padding: 0 10px;
  }
  .modal h4{
    text-align: center;
    padding: 20px 0 10px;
  }
  .modal .modal-body{
    font-size: 1.4rem;
    text-align:justify;
  }
  .modal button{
    background-color: inherit;
    color: #fff;
    border: none;
    width: 50%;
    text-align: center;
    padding: 10px 0;
    float: left;
  }
  .modal button:active{
    background-color: inherit;
  }
  .modalshow{
    display: block;
  }
  .rulesmodal{
    display: none;
    position: fixed;
    top: 0px;
    left: 0px;
    height: 100%;
    right: 0px;
    background-color: #fff;
    overflow:auto;
  }
  .rulesmodal h4{
    text-align: center;
    padding: 10px 0 0px;
    position: relative;
  }
  .rulesmodal img{
    position: absolute;
    width: 20px;
    top: 12px;
    right: 22px;
  }
  .rulesmodal .mui-card{
    box-shadow: none;
  }
  .rulesmodalshow{
    display: block;
  }
</style>
