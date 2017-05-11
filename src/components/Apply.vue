<template>
  <div class="page">
    <header class="mui-bar-nav">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" style="margin-top: 10px;"></a>
      <h1 class="mui-title">填写申请</h1>
    </header>
    <main class="smart-row smart-whitespace">
      <h2 class="smart-fs-h1">
        <img src="static/images/info.png" alt="" class="info-img"/>
        养犬人信息
      </h2>
      <div class="smart-form-list">
        <div class="smart-form-text-item">
          <label>养犬人姓名</label>
          <input type="text" @blur="checkName" id="username" placeholder="请输入您的姓名" v-model="yqrxm"/>
        </div>
        <template v-if="tip.yqrxm">
          <p class="smart-fs-h4 smart-cl-warning" style="margin-bottom: 10px;">* {{tip.yqrxm}} </p>
        </template>
        <div class="smart-form-text-item">
          <label>性别</label>
          <label for="male_person" class="smart-form-radio-item">
            <input id="male_person" type="radio" name="person_sex" value="1" v-model="yqrxb"/>男
          </label>
          <label for="female_person" class="smart-form-radio-item">
            <input id="female_person" type="radio" name="person_sex" value="2" v-model="yqrxb"/>女
          </label>
        </div>
        <!--<div class="smart-form-text-item">-->
        <!--<label>养犬人证件类型</label>-->
        <!--<select class="smart-form-select-item" v-model="iSelected">-->
        <!--<option v-for="(value,index) in certification" :value="index">-->
        <!--{{ value }}-->
        <!--</option>-->
        <!--</select>-->
        <!--</div>-->
        <div class="smart-form-text-item">
          <label>证件号码</label>
          <input type="text" @blur="checkCertificationNo" id="certificationNo" maxlength="18" placeholder="请输入您的身份证号码" v-model="yqrsfzh"/>
        </div>
        <template v-if="tip.yqrsfzh">
          <p class="smart-fs-h4 smart-cl-warning" style="margin-bottom: 10px;">* {{tip.yqrsfzh}} </p>
        </template>

        <div class="upload-pic">
          <div>
            <label class="explain">
              请上传犬主身份证正面照
            </label>
            <!--<input type="button" class="pic" onclick="myfile1.click();" >-->
            <!--<input type="file" id="myfile1" onchange="input1.value=this.value" style="display:none">-->
            <!--<input type="text" id="input1" class="img-content"/>-->
            <!--<div style="clear: both"></div>-->
            <input type="button" class="pic" id="cardPic" @click="uploadCardImg">
            <div style="clear: both"></div>
          </div>
          <div class="img-div">
            <img :src="yqrsfzz?'../api/'+yqrsfzz:'static/images/loading2.gif'" :data-original="yqrsfzz?'../api/'+yqrsfzz:'static/images/cart.png'" id='card-img' alt=""/>
          </div>
        </div>
        <div class="smart-form-text-item">
          <label>养犬区划</label>
          <select class="smart-form-select-item" id="district" @blur="checkArea" v-model="yqqh">
            <option v-for="item in districts" :value="item.value" >{{item.text}}</option>
          </select>
        </div>
        <template v-if="tip.yqqh">
          <p class="smart-fs-h4 smart-cl-warning" style="margin-bottom: 10px;">{{tip.yqqh}} </p>
        </template>
        <div class="smart-form-text-item">
          <label>养犬地址</label>
          <input type="text" id="address" maxlength="100" @blur="checkAddress" v-model="yqxz" placeholder="请输入养犬地地址"/>
        </div>
        <template v-if="tip.yqxz">
          <p class="smart-fs-h4 smart-cl-warning" style="margin-bottom: 10px;">{{tip.yqxz}} </p>
        </template>
        <div class="upload-pic">
          <div>
            <label class="explain">如果不是南京市本地人口，请上传房屋产权书或居住证或购房合同或房屋租赁合同
            </label>
            <input type="button" class="pic" id="livePic" @click="uploadLiveImg" >
            <div style="clear: both"></div>
          </div>
          <div class="img-div">
            <img :src="yqrjzzmz?'../api/'+yqrjzzmz:'static/images/jzzm.jpg'" :data-original="yqrjzzmz?'../api/'+yqrjzzmz:'static/images/jzzm.jpg'" alt=""/>
          </div>
        </div>
        <!--</template>-->
        <div class="smart-form-text-item">
          <label>固定电话 &nbsp;&nbsp;025 -</label>
          <input type="tel" maxlength="8" id="telephone" @blur="checkTelephone" v-model="telephone" placeholder="请输入您的固定电话"/>
        </div>
        <template v-if="tip.telephone">
          <p class="smart-fs-h4 smart-cl-warning" style="margin-bottom: 10px;">{{tip.telephone}} </p>
        </template>
        <div class="smart-form-text-item">
          <label>移动电话</label>
          <input type="tel" @blur="checkMobile" id="mobile" v-model='mobile' maxlength="11" placeholder="请输入您的移动电话"/>

        </div>
        <template v-if="tip.mobile">
          <p class="smart-fs-h4 smart-cl-warning" style="margin-bottom: 10px;"> {{tip.mobile}} </p>
        </template>
      </div>
      <template v-if="tip.submit">
        <p class="smart-fs-h4 smart-cl-warning" style="margin-bottom: 10px;"> {{tip.submit}} </p>
      </template>
      <h2 class="smart-fs-h1">
        <img src="static/images/info.png" alt="" class="info-img"/>
        犬只信息
      </h2>
      <div class="smart-form-list">
        <div class="smart-form-text-item">
          <label>*犬只名称</label>
          <input type="text" maxlength="20" id="dog-name" @blur="checkEmpty('qm')"  placeholder="请输入犬只名称" v-model="qm"/>
        </div>
        <template v-if="tip.qm">
          <p class="smart-fs-h3 smart-cl-warning">请输入犬只的名称！</p>
        </template>
        <div class="smart-form-text-item">
          <label>*性别</label>
          <label for="female_dog" class="smart-form-radio-item">
            <input id="female_dog" type="radio" name="dog_sex" value="2" v-model="qxb"/>雌
          </label>
          <label for="male_dog" class="smart-form-radio-item">
            <input id="male_dog" type="radio" name="dog_sex" value="1" v-model="qxb"/>雄
          </label>
        </div>
        <div class="smart-form-text-item">
          <label>*生日</label>
          <input type="date" v-model="qcsrq" id="birthday"/>
        </div>
        <template v-if="tip.qcsrq">
          <p class="smart-fs-h3 smart-cl-warning">请输入犬只的出生日期！</p>
        </template>
        <div class="smart-form-text-item">
          <label>*犬种</label>
          <select  class="smart-form-select-item" id="dog-type" name="qzbm" v-model="qzbm">
            <option value="">请选择犬种</option>
            <option v-for="item in dogTypes" :value="item.value">{{item.text}}</option>
          </select>
        </div>
        <template v-if="tip.qzbm">
          <p class="smart-fs-h3 smart-cl-warning">请选择犬种编码！</p>
        </template>
        <div class="smart-form-text-item">
          <label>*毛色</label>
          <input type="text" maxlength="20" id="dog-color" @blur="checkEmpty('mstz')" placeholder="请输入犬只毛色,少于6字" v-model="mstz"/>
        </div>
        <template v-if="tip.mstz">
          <p class="smart-fs-h3 smart-cl-warning">请输入犬只的毛色特征！</p>
        </template>
        <div class="smart-form-text-item">
          <label>*免疫证号</label>
          <input type="text" maxlength="15" id="immune-id"  @blur="checkEmpty('kqymzh')"  placeholder="请输入犬只免疫证号" v-model="kqymzh"/>
        </div>
        <template v-if="tip.kqymzh">
          <p class="smart-fs-h3 smart-cl-warning">请输入犬只的免疫证号！</p>
        </template>
        <div class="smart-form-text-item">
          <label>*最近免疫时间</label>
          <input type="date" v-model="myrq" id="immune-date"/>
          <!--{{immunityDate}}-->
        </div>
        <template v-if="tip.myrq">
          <p class="smart-fs-h3 smart-cl-warning">请输入最近的免疫日期！</p>
        </template>
        <div class="smart-form-text-item">
          <label>*申请用途</label>
          <label for="use1" class="smart-form-radio-item">
            <input id="use1" type="radio" name="use" value="1" v-model="yqyt"/>观赏
          </label>
          <label for="use2" class="smart-form-radio-item">
            <input id="use2" type="radio" name="use" value="2" v-model="yqyt"/>扶助
          </label>
          <label for="use3" class="smart-form-radio-item">
            <input id="use3" type="radio" name="use" value="3" v-model="yqyt"/>导盲
          </label>
        </div>
        <div class="upload-pic">
          <div>
            <label class="explain">
              <p class="smart-fs-h3">请上传彩色犬只侧面全身照片</p>
              <p class="smart-fs-h4">照片清晰可见犬只的侧身全貌、以及犬只面部正面，像素分辨率不低于1440*960</p>
            </label>
            <input type="button" class="pic" @click="uploadDogImg">
            <div style="clear: both"></div>
          </div>
          <div class="img-div">
            <img :src="aqcmz?'../api/'+aqcmz:'static/images/loading2.gif'" :data-original="aqcmz?'../api/'+aqcmz:'static/images/dog.png'" id="dog-pic">
          </div>
        </div>
        <template v-if="tip.aqcmz">
          <p class="smart-fs-h3 smart-cl-warning">请输入爱犬的全身侧面照！</p>
        </template>
        <div class="upload-pic">
          <div>
            <label class="explain">
              <p class="smart-fs-h3">请上传有效免疫证明照片</p>
              <p class="smart-fs-h4">请上传免疫证的外部和内页共两张</p>
            </label>

            <!--<input type="button" class="pic" onclick="myfile2.click();"  onclick="uploadImgFileByWeixing('myzzp');">-->
            <!--<input type="file" id="myfile2" onchange="input1.value=this.value" style="display:none">-->
            <!--<input type="text" id="input1" class="img-content"/>-->
            <input type="button" class="pic" @click="uploadImmuneImg" id="immune-pic">
            <div style="clear: both"></div>
          </div>
          <div class="img-div">
            <img :src="myzzp?'../api/'+myzzp:'static/images/loading2.gif'" :data-original="myzzp?'../api/'+myzzp:'static/images/myz.jpg'" alt="" id="myz-img"/>
          </div>
        </div>
        <template v-if="tip.myzzp">
          <p class="smart-fs-h3 smart-cl-warning">请输入犬只的免疫证照片！</p>
        </template>
      </div>
      <div class="smart-form-list">
        <label for="agree" class="smart-form-checkbox-item" style="border-bottom: none;float: left;">
          <input type="checkbox" name="agree" id="agree"  v-model="agree"/>
          我已阅读
        </label>
        <a v-on:tap="rulesBtn" style="float: left;padding: 13px 0px;font-size: 1.4rem;">《南京市养犬管理条例》</a>

      </div>
      <!--<a v-bind:href="agreeRegulation?'submit.html':'javascript:;'">-->
      <!--<button  :disabled="!agree" @click='checkForm' class="smart-button primary">提交审核</button>-->
      <button class="smart-button primary" :disabled="!agree" @tap="checkForm">提交审核</button>
      <template v-if="tip.submit">
        <p class="smart-fs-h3 smart-cl-warning">{{tip.submit}}</p>
      </template>

      <!-- Modal -->
      <div class="modal" id="modal">
        <h4>提示信息</h4>
        <div class="modal-body">
          为使用腾讯的服务，您当阅读遵守《腾讯服务协议》和《QQ号码规则》。请您务必审慎阅读、充分理解条款内容，以及开通或使用某项服务的单独协议。限制、免责条款可能以黑体加粗或加下划线的形式提示您重点注意
        </div>
        <div>
          <button id="cancle"  @tap="cancle">
            取消
          </button>
          <!-- :disabled="isDisabled"-->
          <button id="ensure" @click='postInfo'>
            确认
          </button>
        </div>
      </div>
      <!-- Modal rules -->
      <div id="rulesmodal" class="rulesmodal">
        <h4>
          南京市养犬管理条例
          <img v-on:tap="canclerulesmodal" src="static/images/returen_icon.png" alt="" />
        </h4>
        <div class="mui-card">
          <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-collapse">
              <a class="smart-fs-h2 mui-navigate-right">第一章&nbsp;&nbsp;&nbsp;&nbsp;总 则</a>
              <div class="mui-collapse-content">
                <p class="smart-fs-h3">第一条 为了规范养犬和养犬管理行为，保障公民人身健康和安全，维护市容环境和公共秩序，根据有关法律、法规，结合本市实际，制定本条例。</p>
                <p class="smart-fs-h3">第二条 本市行政区域内养犬、从事养犬经营活动以及对养犬进行管理的单位和个人，应当遵守本条例。</p>
                <p class="smart-fs-h3">军用、警用犬等特种犬以及动物园、科研用犬的管理，国家有规定的从其规定。</p>
                <p class="smart-fs-h3">第三条 养犬管理实行管理和服务相结合，行政机关执法和基层组织参与管理相结合，养犬人自律和社会公众监督相结合的原则。</p>
                <p class="smart-fs-h3">第四条 机关、医院的办公服务区，学校、幼儿园的教学区、学生宿舍区，单位的集体宿舍区，禁止养犬。</p>
                <p class="smart-fs-h3">第五条 本市长江以南、绕城公路以内的区域为养犬重点管理区(以下简称“重点管理区”)。</p>
                <p class="smart-fs-h3">其他区域和前款所列区域内的农村，为养犬一般管理区(以下简称“一般管理区”)。</p>
                <p class="smart-fs-h3">一般管理区内的街道、建制镇和人口聚集的区域，经区、县人民政府确定并报市人民政府批准，按照重点管理区管理。</p>
                <p class="smart-fs-h3">第六条 本市各级人民政府负责本条例的组织实施。各级人民政府应当建立养犬管理协调工作机制。</p>
                <p class="smart-fs-h3">公安部门主管养犬管理工作，应当定期召开相关部门工作会议，研究、协调养犬管理工作。</p>
                <p class="smart-fs-h3">畜牧兽医、工商、卫生、城市管理行政执法(市容)、市政公用、物价、财政、房产、园林、民政等部门应当按照各自的职责，协同做好养犬管理工作。</p>
                <p class="smart-fs-h3">第七条 对犬只依法实行动物免疫制度。出生已满九十日的犬只未经注射狂犬病疫苗的，任何单位和个人不得饲养。</p>
                <p class="smart-fs-h3">第八条 养犬人的合法权益依法受保护。提倡文明养犬，养犬不得损害他人的合法权益。</p>
              </div>
            </li>
            <li class="mui-table-view-cell mui-collapse mui-active">
              <a class="smart-fs-h2 mui-navigate-right">第二章&nbsp;&nbsp;&nbsp;&nbsp;养犬登记</a>
              <div class="mui-collapse-content">
                <p class="smart-fs-h3">第九条 重点管理区养犬实行登记制度。犬只未经登记的，任何单位和个人不得饲养。</p>
                <p class="smart-fs-h3">第十条 重点管理区内个人申请养犬应当具备下列条件：</p>
                <p class="smart-fs-h3 smart-cl-warning">(一)具有本市常住户口或者暂住本市的合法证明;</p>
                <p class="smart-fs-h3 smart-cl-warning">(二)具有完全民事行为能力;</p>
                <p class="smart-fs-h3 smart-cl-warning">(三)有固定住所;</p>
                <p class="smart-fs-h3 smart-cl-warning">(四)犬只符合规定的种类和数量;</p>
                <p class="smart-fs-h3 smart-cl-warning">(五)取得合法有效的犬只免疫证明。</p>
                <p class="smart-fs-h3">第十一条 重点管理区内单位申请养犬应当具备下列条件：</p>
                <p class="smart-fs-h3">(一)用于重点仓储、施工场地、财务室的看护;</p>
                <p class="smart-fs-h3">(二)专人负责管理，管理人员应当经过专业培训，犬只应当经过训练;</p>
                <p class="smart-fs-h3">(三)有犬笼、犬舍、围墙等圈养设施和封闭条件;</p>
                <p class="smart-fs-h3">(四)取得合法有效的犬只免疫证明。</p>
                <p class="smart-fs-h3">第十二条 重点管理区内单位和个人申请养犬，应当填写养犬登记申请表。养犬登记申请表可以从居住地公安派出所、社区警务室领取，也可以从公安部门公布的网站下载。</p>
                <p class="smart-fs-h3">个人申请养犬的，应当由本人或者其委托的人，携犬到居住地公安分局、县公安局指定的地点申请登记。申请登记应当提交下列材料：</p>
                <p class="smart-fs-h3">(一)养犬登记申请表;</p>
                <p class="smart-fs-h3">(二)申请人本人身份证明，委托他人申请的，还应当提交被委托人身份证明、养犬人的委托书;</p>
                <p class="smart-fs-h3">(三)合法有效的犬只免疫证明。</p>
                <p class="smart-fs-h3">单位申请养犬的，应当向市公安部门申请登记。申请登记应当提交下列材料：</p>
                <p class="smart-fs-h3">(一)养犬登记申请表;</p>
                <p class="smart-fs-h3">(二)犬只品种证明;</p>
                <p class="smart-fs-h3">(三)合法有效的犬只免疫证明;</p>
                <p class="smart-fs-h3">(四)相关的培训、训练证明。</p>
                <p class="smart-fs-h3">饲养进口犬只的，还应当有出入境检验检疫机构出具的入境动物检验检疫证明。</p>
                <p class="smart-fs-h3">第十三条 饲养出生未满九十日的幼犬，应当自饲养之日起十日内到居住地公安派出所备案。犬只已满九十日的，应当依据本条例规定的程序办理登记手续。</p>
                <p class="smart-fs-h3">第十四条 申请人提交的材料齐全、符合法定形式的，公安部门应当受理申请;申请材料不齐全或者不符合法定形式的，公安部门应当当场一次性告知申请人需要补正的全部内容，申请人按照要求提交全部补正申请材料的，公安部门应当受理申请。</p>
                <p class="smart-fs-h3">公安部门受理个人申请的，应当当场对申请人提交的材料进行审查。对符合本条例第十条规定条件的，应当当场予以登记，发放犬牌，给犬只设置电子识别标识，并于十日内发放养犬登记证;对不符合条件的，应当自受理申请之日起十日内作出不予登记的书面决定，告知其理由和处理办法。</p>
                <p class="smart-fs-h3">公安部门受理单位申请的，应当自受理申请之日起十日内对申请人提交的材料进行审查，并指派两名以上工作人员进行实地核查，作出给予登记或者不给予登记的书面决定。对符合本条例第十一条规定条件的，应当予以登记，发放犬牌，给犬只设置电子识别标识，并于登记之日起十日内发放养犬登记证;对不符合条件的，应当作出不予登记的书面决定，告知其理由和处理办法。</p>
                <p class="smart-fs-h3">第十五条 养犬登记应当遵循便民原则。公安部门应当会同畜牧兽医主管部门定期实行免疫、登记一站式服务。每年实行一站式服务的时间、地点由市公安部门会同市畜牧兽医主管部门确定、公布。</p>
                <p class="smart-fs-h3">第十六条 养犬登记证有效期为一年。期满需要继续养犬的，应当在有效期届满三十日前申请办理延续手续。</p>
                <p class="smart-fs-h3">个人需要继续养犬的，应当持合法有效的犬只免疫证明、养犬登记证，携犬到居住地公安部门申请。单位需要继续养犬的，市公安部门应当进行实地核查。对符合条件的单位和个人，公安部门应当予以办理延续手续。</p>
                <p class="smart-fs-h3">第十七条 重点管理区养犬人有下列情形之一的，应当持养犬登记证到居住地公安部门办理变更、注销、备案和补办手续：</p>
                <p class="smart-fs-h3">(一)地址变更的，应当自变更之日起三十日内办理变更登记;</p>
                <p class="smart-fs-h3">(二)转让犬只的，应当自转让之日起十五日内与受让人共同办理变更登记;</p>
                <p class="smart-fs-h3">(三)放弃养犬的，应当转让犬只或者将犬只送交犬只留检、收留场所，并到居住地公安部门办理注销登记;</p>
                <p class="smart-fs-h3">(四)犬只死亡的，应当自死亡之日起十五日内办理注销登记;</p>
                <p class="smart-fs-h3">(五)犬只失踪的，应当自失踪之日起五日内向居住地公安部门备案;</p>
                <p class="smart-fs-h3">(六)遗失养犬登记证的，应当及时到居住地公安部门申请补办。</p>
                <p class="smart-fs-h3">第十八条　公安部门应当建立重点管理区养犬管理电子档案，记载下列事项：</p>
                <p class="smart-fs-h3">(一)养犬人姓名或者单位名称、地址、联系方式;</p>
                <p class="smart-fs-h3">(二)犬只品种、照片、主要体貌特征;</p>
                <p class="smart-fs-h3">(三)犬只免疫情况;</p>
                <p class="smart-fs-h3">(四)养犬登记证号码、发放时间;</p>
                <p class="smart-fs-h3">(五)养犬登记证的延续、变更、注销和补办情况;</p>
                <p class="smart-fs-h3">(六)养犬违法记录;</p>
                <p class="smart-fs-h3">(七)其他应当记载的事项。</p>
              </div>
            </li>
            <li class="mui-table-view-cell mui-collapse">
              <a class="smart-fs-h2 mui-navigate-right">第三章&nbsp;&nbsp;&nbsp;&nbsp;养犬行为规范</a>
              <div class="mui-collapse-content">
                <p class="smart-fs-h3">第十九条 养犬人应当按照国家有关规定定期为犬只接种预防狂犬病疫苗，还应当防治犬只的其他疫病。</p>
                <p class="smart-fs-h3">犬只染疫或者疑似染疫的，养犬人应当立即向当地畜牧兽医主管部门或者公安部门报告。</p>
                <p class="smart-fs-h3">犬只病死或者死因不明的，养犬人应当立即向当地畜牧兽医主管部门或者公安部门报告，并在其监督下进行无害化处理;无法作无害化处理的，予以销毁。</p>
                <p class="smart-fs-h3">犬只患狂犬病死亡的，养犬人应当立即向当地畜牧兽医主管部门报告，由畜牧兽医主管部门火化。</p>
                <p class="smart-fs-h3">第二十条　养犬不得危害公共利益，不得干扰他人正常生活，不得放任、驱使犬只恐吓、伤害他人。</p>
                <p class="smart-fs-h3">犬吠影响他人时，养犬人或者携犬人应当采取措施予以制止。</p>
                <p class="smart-fs-h3">犬只伤人的，养犬人或者携犬人应当立即将伤者送至医疗机构诊治，先行支付医疗费用，并依法承担民事责任。</p>
                <p class="smart-fs-h3">第二十一条 养犬人应当为犬只提供必要的饮食条件、活动空间和生活环境，不得虐待、遗弃犬只。</p>
                <p class="smart-fs-h3">任何人不得骚扰、虐待、无故伤害犬只。</p>
                <p class="smart-fs-h3">第二十二条　不得携犬进入机关、医院、学校、幼儿园、疗养院、少年儿童活动场所、体育场馆、博物馆、图书馆、影剧院、宾馆、饭店、商场、室内农贸市场、金融经营场所，以及设有犬只禁入标识的公园、风景名胜区等公共场所。</p>
                <p class="smart-fs-h3">第二十三条　不得携犬乘坐除小型出租汽车以外的公共交通工具。携犬乘坐小型出租汽车时，应当征得驾驶员同意。</p>
                <p class="smart-fs-h3">第二十四条　重点管理区养犬还应当遵守下列规定：</p>
                <p class="smart-fs-h3">(一)个人养犬每户限养一只，不得饲养烈性犬、大型犬。</p>
                <p class="smart-fs-h3">(二)不得在禁止遛犬的区域和时间内遛犬。</p>
                <p class="smart-fs-h3">(三)不得污染环境。犬只在户外排泄粪便的，携犬人应当立即清除。</p>
                <p class="smart-fs-h3">(四)不得在重点管理区掩埋和随意丢弃犬尸，应当对犬尸进行火化。</p>
                <p class="smart-fs-h3">(五)携犬乘坐电梯或者上下楼梯的，应当将犬只装入犬袋、犬笼，怀抱，或者戴嘴套，并避开高峰时间。</p>
                <p class="smart-fs-h3">(六)携犬出户的，犬只应当挂犬牌、束犬链，犬链长度不得超过一点五米，由具有完全民事行为能力的人牵领，遵守交通法规并主动避让行人和车辆。</p>
                <p class="smart-fs-h3">(七)单位养犬的，应当拴养或者圈养，因登记、免疫、诊疗、培训、配种需要外出的，应当将犬只装入犬笼或者束犬链、戴嘴套，由管理人员牵领。</p>
                <p class="smart-fs-h3">第二十五条　重点管理区提倡饲养绝育犬。</p>
                <p class="smart-fs-h3">重点管理区犬只产幼犬的，养犬人应当向居住地公安派出所备案，并自幼犬出生之日起九十日内，将超过限养数量的犬只转让他人或者送交犬只留检、收留场所。</p>
                <p class="smart-fs-h3">第二十六条　重点管理区养犬应当按年度缴纳养犬管理费。具体标准由市人民政府制定，报省有关部门批准后公布。</p>
                <p class="smart-fs-h3">饲养绝育犬的，凭畜牧兽医主管部门委托的机构出具的绝育证明，减半收取养犬管理费。</p>
                <p class="smart-fs-h3">盲人饲养导盲犬、肢体重度残疾人饲养扶助犬的，免缴养犬管理费。</p>
                <p class="smart-fs-h3">七十岁以上孤寡独居老人养犬的，酌情减免养犬管理费。</p>
                <p class="smart-fs-h3">养犬管理费由公安部门征收，纳入财政预算管理。管理费用于养犬档案管理、犬只留检以及犬只粪便清理等有关管理服务工作。</p>
              </div>
            </li>
            <li class="mui-table-view-cell mui-collapse">
              <a class="smart-fs-h2 mui-navigate-right">第四章&nbsp;&nbsp;&nbsp;&nbsp;犬只经营</a>
              <div class="mui-collapse-content">
                <p class="smart-fs-h3">第二十七条 从事犬只养殖、交易、培训等经营活动的，经营者应当依法办理有关手续，并向公安部门备案。</p>
                <p class="smart-fs-h3">禁止将患有狂犬病的犬只以及被其咬伤、咬死的畜禽剥皮、出售。</p>
                <p class="smart-fs-h3">第二十八条　从事犬只诊疗的人员应当符合有关法律、法规规定的条件。从事犬只诊疗活动，应当取得畜牧兽医主管部门的许可。</p>
                <p class="smart-fs-h3">第二十九条　禁止在住宅小区、商住楼内设立犬只养殖、交易、培训等经营场所。</p>
                <p class="smart-fs-h3">第三十条　从事犬只养殖、交易、培训等经营活动，应当遵守下列规定：</p>
                <p class="smart-fs-h3">(一)场所应当符合国家规定的防疫条件;</p>
                <p class="smart-fs-h3">(二)除免疫、诊疗、培训、配种和交易外，不得将所养犬只带出饲养场所;</p>
                <p class="smart-fs-h3">(三)除出生未满九十日的幼犬外，销售的犬只应当具有合法有效的犬只免疫证明;</p>
                <p class="smart-fs-h3">(四)记载养殖、交易犬只的品种、数量和流向，并向公安部门备案;</p>
                <p class="smart-fs-h3">(五)发现犬只染疫或者疑似染疫的，应当立即向当地畜牧兽医主管部门或者公安部门报告，并监护好现场，不得转移、出售和屠宰。</p>
              </div>
            </li>
            <li class="mui-table-view-cell mui-collapse">
              <a class="smart-fs-h2 mui-navigate-right">第五章&nbsp;&nbsp;&nbsp;&nbsp;监督管理</a>
              <div class="mui-collapse-content">
                <p class="smart-fs-h3">第三十一条　市和区、县人民政府根据需要，应当在重点管理区内规定禁止遛犬的区域和时间，并设立标识;在重大节日或者举办重大活动期间可以规定临时禁止遛犬的区域和时间，并设立标识。</p>
                <p class="smart-fs-h3">居民委员会、住宅小区业主大会、业主委员会可以依法组织居民、业主制定养犬公约，规定允许遛犬的区域和时间，设立标识并监督实施。住宅小区没有业主大会和业主委员会的，可以先由物业服务企业代为组织实施。</p>
                <p class="smart-fs-h3">第三十二条　公安部门应当履行下列监督管理职责：</p>
                <p class="smart-fs-h3">(一)对养犬登记的实施情况以及对不具备登记条件的犬只的处理情况进行监督检查。</p>
                <p class="smart-fs-h3">(二)统一印制发放犬只禁入标识。</p>
                <p class="smart-fs-h3">(三)捕捉、收留流浪、被放弃饲养和违反本条例规定被没收的犬只。</p>
                <p class="smart-fs-h3">(四)建立养犬管理和服务的电子信息系统，为公众和社会基层组织提供相关信息和服务。</p>
                <p class="smart-fs-h3">(五)受理有关养犬的投诉，及时调处养犬纠纷，按照本条例规定查处违法养犬行为。</p>
                <p class="smart-fs-h3">(六)建立养犬违法记录档案。养犬行为被多次举报、处罚或者所养犬只伤人的，应当进行重点监督管理。</p>
                <p class="smart-fs-h3">(七)指导、支持居民委员会、住宅小区业主大会、业主委员会和物业服务企业组织制定、实施养犬公约。</p>
                <p class="smart-fs-h3">第三十三条 公安部门设立犬只留检所，负责收留流浪、被放弃饲养和违反本条例规定被没收的犬只。</p>
                <p class="smart-fs-h3">鼓励有条件的民间动物保护组织和个人依法设立犬只收留场所，收留流浪、被放弃饲养的犬只。具体管理办法由市公安部门会同市畜牧兽医、民政等部门另行制定。</p>
                <p class="smart-fs-h3">犬只已办理登记的，犬只留检、收留场所应当自接收之日起五日内通知养犬人认领，养犬人应当在接到通知之日起十五日内认领;养犬人逾期不认领的视为无主犬，可以被他人领养。无人领养的犬只，可以由犬只留检、收留场所处理。</p>
                <p class="smart-fs-h3">犬只留检、收留场所应当符合国家规定的防疫条件。依法需要进行无害化处理的，按照国家有关规定处理。</p>
                <p class="smart-fs-h3">第三十四条 畜牧兽医行政管理部门应当依法对犬只的免疫、检疫以及疫病的预防、控制和扑灭工作进行监督管理，并组织监督对疫犬、犬尸的无害化处理。依法实施犬只诊疗许可制度。依法查处销售未经检疫的犬肉。</p>
                <p class="smart-fs-h3">第三十五条 工商行政管理部门应当依法加强对从事犬只经营活动的单位和个人的监督管理。</p>
                <p class="smart-fs-h3">第三十六条 卫生行政管理部门应当依法对人用狂犬病疫苗注射、狂犬病患者诊治和人患狂犬病疫情预防监控等事项，进行监督管理。</p>
                <p class="smart-fs-h3">第三十七条 城市管理行政执法(市容)部门应当依法对街巷占道销售犬只等影响市容环境卫生的行为进行查处，及时组织清理或者督促养犬人清理犬只粪便。</p>
                <p class="smart-fs-h3">第三十八条 发生狂犬病疫情时，市和区、县人民政府应当根据疫情划定疫点、疫区，并组织有关部门采取紧急措施。</p>
                <p class="smart-fs-h3">有关部门在监督检查中发现犬只不符合规定、未免疫，或者发现狂犬病等疫病的，应当及时做出处理。</p>
                <p class="smart-fs-h3">有关部门应当依照法定程序实施监督检查，将监督检查的情况和处理结果予以记录、归档。</p>
                <p class="smart-fs-h3">第三十九条 养犬行业协会应当按照章程规定，加强行业自律，倡导养犬人规范养犬行为，协助做好养犬管理工作。</p>
                <p class="smart-fs-h3">第四十条 任何单位和个人有权对违法养犬行为进行批评、劝阻，并举报、投诉。有关部门应当公布举报、投诉电话，对举报、投诉应当及时处理。</p>
              </div>
            </li>
            <li class="mui-table-view-cell mui-collapse">
              <a class="smart-fs-h2 mui-navigate-right">第六章&nbsp;&nbsp;&nbsp;&nbsp;法律责任</a>
              <div class="mui-collapse-content">
                <p class="smart-fs-h3">第四十一条 违反本条例第七条规定，未依法对犬只实施免疫的，由畜牧兽医主管部门依照动物防疫法律法规的规定处罚。</p>
                <p class="smart-fs-h3">第四十二条　违反本条例第九条规定，在重点管理区未经登记养犬的，由公安部门责令限期办理登记手续;逾期不办理的，没收犬只，对个人可以并处三百元以上一千元以下的罚款，对单位可以并处五百元以上二千元以下的罚款。</p>
                <p class="smart-fs-h3">第四十三条　违反本条例第十六条、第十七条规定，逾期不办理养犬登记证延续、变更、注销手续或者遗失养犬登记证不及时申请补办的，由公安部门责令限期改正，对个人处五十元以上二百元以下的罚款，对单位处二百元以上一千元以下的罚款。</p>
                <p class="smart-fs-h3">第四十四条　违反本条例第二十条第一款规定，养犬干扰他人正常生活，放任、驱使犬只恐吓、伤害他人的，由公安部门依据《中华人民共和国治安管理处罚法》的有关规定处罚;构成犯罪的，依法追究刑事责任。</p>
                <p class="smart-fs-h3">重点管理区养犬人违反本条例规定造成犬只伤害他人两次以上的，由公安部门吊销养犬登记证，并可以没收犬只。</p>
                <p class="smart-fs-h3">第四十五条　违反本条例第二十一条第一款、第二十二条、第二十三条规定，有下列行为之一的，由公安部门、园林部门或者其他主管部门按照各自职责予以批评教育，对个人处二十元以上二百元以下的罚款，对单位处五十元以上五百元以下的罚款。情节严重的，对个人处二百元以上一千元以下的罚款，对单位处五百元以上三千元以下的罚款;对重点管理区养犬人，由公安部门没收犬只，吊销养犬登记证，对个人可以并处二百元以上一千元以下的罚款，对单位可以并处五百元以上三千元以下的罚款：</p>
                <p class="smart-fs-h3">(一)虐待、遗弃所养犬只的;</p>
                <p class="smart-fs-h3">(二)携犬进入机关、医院、学校、幼儿园、疗养院、少年儿童活动场所、体育场馆、博物馆、图书馆、影剧院、宾馆、饭店、商场、室内农贸市场、金融经营场所，以及设有犬只禁入标识的公园、风景名胜区等公共场所的;</p>
                <p class="smart-fs-h3">(三)携犬乘坐除小型出租汽车以外的公共交通工具的。</p>
                <p class="smart-fs-h3">第四十六条 违反本条例第二十四条第(一)项规定，个人饲养烈性犬、大型犬的，由公安部门予以批评教育，并责令限期改正;逾期不改的，没收犬只，可以并处五百元以上二千元以下的罚款。</p>
                <p class="smart-fs-h3">违反本条例第二十四条第(一)项规定，个人养犬每户超过一只的，由公安部门予以批评教育，并责令限期改正;逾期不改的，没收其超出限养数量的犬只。</p>
                <p class="smart-fs-h3">第四十七条　违反本条例第二十四条第(二)项、第(五)项至第(七)项规定，在重点管理区有下列行为之一的，由公安部门予以批评教育，对个人处二十元以上二百元以下的罚款，对单位处五十元以上五百元以下的罚款。情节严重的，没收犬只，吊销养犬登记证，对个人可以并处二百元以上一千元以下的罚款，对单位可以并处五百元以上三千元以下的罚款：</p>
                <p class="smart-fs-h3">(一)在市和区、县人民政府规定的禁止遛犬的区域或者时间内遛犬的;</p>
                <p class="smart-fs-h3">(二)携犬乘坐电梯或者上下楼梯，未对犬只采取本条例规定的约束措施的;</p>
                <p class="smart-fs-h3">(三)携犬出户未挂犬牌或者未束犬链的;</p>
                <p class="smart-fs-h3">(四)单位未按规定拴养或者圈养犬只，携犬外出未对犬只采取本条例规定的约束措施的。</p>
                <p class="smart-fs-h3">违反本条例第二十四条第(六)项规定，携犬出户不遵守交通法规致使犬只伤亡的，由养犬人承担犬只伤亡责任。</p>
                <p class="smart-fs-h3">被吊销养犬登记证的，自吊销之日起二年内不予办理养犬登记。</p>
                <p class="smart-fs-h3">第四十八条 违反本条例第二十四条第(三)项规定，养犬污染环境或者携犬人不立即清除犬只粪便的，由城市管理行政执法部门依照城市市容和环境卫生管理法律法规的有关规定处罚。</p>
                <p class="smart-fs-h3">第四十九条　违反本条例第三十条第(二)项规定，从事犬只养殖、交易、培训等经营活动的人员将犬只带出规定场所的，由公安部门予以批评教育，处二十元以上二百元以下的罚款;情节严重的，没收犬只，可以并处二百元以上一千元以下的罚款。</p>
                <p class="smart-fs-h3">第五十条 执法人员有下列行为之一的，由其所在单位或者上级主管部门依法给予行政处分;构成犯罪的，依法追究刑事责任：</p>
                <p class="smart-fs-h3">(一)不依法履行职责或者相互推诿的;</p>
                <p class="smart-fs-h3">(二)不按规定登记、免疫或者故意拖延的;</p>
                <p class="smart-fs-h3">(三)对群众举报不及时处理造成后果的;</p>
                <p class="smart-fs-h3">(四)其他玩忽职守、滥用职权、徇私舞弊的行为。</p>
              </div>
            </li>
            <li class="mui-table-view-cell mui-collapse">
              <a class="smart-fs-h2 mui-navigate-right">第七章&nbsp;&nbsp;&nbsp;&nbsp;附 则</a>
              <div class="mui-collapse-content">
                <p class="smart-fs-h3">第五十一条 烈性犬、大型犬的品种和标准，由市公安部门会同市畜牧兽医主管部门确定、公布。</p>
                <p class="smart-fs-h3">第五十二条 军事管理区、军队干休所内的养犬管理工作，由军队有关部门按照本条例的有关规定负责。</p>
                <p class="smart-fs-h3">第五十三条 本条例自2007年11月1日起施行。2001年9月20日南京市人民政府颁布的《南京市犬类管理办法》同时废止。</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!--</a>-->
    </main>
  </div>
</template>

<script>
  import wx from 'weixin-js-sdk'
  import axios from 'axios'
  import {lazyLoadImages} from '../../static/js/Images.js'
  //  import commonDog from 'commonDog'
  export default {
    name: 'Apply',
    data () {
      return {
        // 养犬人信息
        isDisabled: false,
        districts: [],
        openid: '',  // 养犬人的openid
        yqrxm: '',
        yqqh: '',  // 原来是dSelected,养犬区划
        yqrsfzh: '', // 养犬人身份证
        yqrsfzz: '', // 养犬人身份证照片
        yqrjzzmz: '',   // 居住证明材料的照片
        yqxz: '',
        yqrxb: 1, // 1:男，2：女
        telephone: '',
        mobile: '',
        // 犬只信息
        dogTypes: [],
        qm: '', // 犬名
        qxb: 1, // 犬性别 1:雄性，2：雌性
        qcsrq: '',
        yqyt: 1,  // 用途
        aqcmz: '', // 爱犬侧面全身照片
        qzbm: '',    // 犬种编码
        mstz: '', // 毛色特征
        kqymzh: '', // 狂犬疫苗证号
        myrq: '', // 免疫日期
        myzzp: '',  // 免疫证照片
        agree: 1,
        tip: {'wechat': '', 'yqrxm': '', 'yqrsfzh': '', 'telephone': '', 'mobile': '', 'yqqh': '', 'yqxz': '', 'yqrsfzz': '', 'yqrjzzmz': '', 'qm': '', 'qzbm': '', 'yqyt': '', 'mstz': '', 'aqcmz': '', 'kqymzh': '', 'myrq': '', 'myzzp': '', 'submit': ''}

      }
    },
    computed: {
      yqrlxdh: {
        get () {
          if (this.telephone) {
            return this.mobile + ' 025-' + this.telephone
          } else {
            return this.mobile
          }
        },
        // TODO 只有getapplyInfo方法中用到，是否需要在这里计算？
        set (newValue) {  // 如果获取到了养犬人联系电话，则分解为固定电话和手机
          if (newValue.length === 0) {
            this.mobile = this.telephone = ''
          } else if (newValue.length === 11) { // 如果是11位，则是手机号码
            this.mobile = newValue
          } else if (newValue.length === 13) { // 如果是13位,则是固定电话
            this.telephone = newValue.substr(5)
          } else { // 如果都不是,则手机和固话都存在.
            var arr = newValue.split(' 025-')
//                        alert(arr);
            this.mobile = arr[0]
            this.telephone = arr[1]
          }
        }
      }
    },
    created () {
      this.fecthData() // 创建后获取数据
    },
    updated () {
      // 懒加载图片
      var aImages = document.querySelectorAll('img[data-original]') // 获取所有图片元素
      lazyLoadImages(aImages) // 打开页面时加载
      window.onscroll = function () { // 如果页面有滚动则加载
        lazyLoadImages(aImages)
      }
    },
    methods: {
      rulesBtn () {
        document.getElementById('rulesmodal').classList.add('rulesmodalshow')
      },
      canclerulesmodal () {
        document.getElementById('rulesmodal').classList.remove('rulesmodalshow')
      },
      // modal弹框
      modalshow () {
        document.getElementById('modal').classList.add('modalshow')
      },
      cancle () {
        document.getElementById('modal').classList.remove('modalshow')
      },
      // 初始化时获取数据
      fecthData () {
        axios.get('static/base.json').then((res) => {
          console.log(res.data)
          this.dogTypes = res.data.dogTypes
          this.districts = res.data.districts
        })

//        if (isWechat()) {
//          var openid = getOpenid()
//          if (openid) {
//            // alert(openid);
//            this.openid = openid
//          }
//        }
      },
      // 提交表单是验证
      checkForm () {
        // document.getElementById("modal").classList.remove("modalshow")
        // 先检查养犬人信息
        // alert('checkForm');
        if (this.checkName() && this.checkCertificationNo()) {
          // alert('checkname and yqrsfzh');
          if (this.mobile.length === 0 && this.telephone.length === 0) {
            // alert("mobile and telephone are both empty")
            this.tip.mobile = '固话或手机必须至少填写一项'
            return false
          } else {
            if (this.telephone.length > 0) {
              // alert('tel is not empty')
              this.tip.mobile = ''
              this.checkTelephone()
            }
            if (this.mobile.length > 0) {
              console.log('mobile is not empty')
              this.checkMobile()
            }

            if (this.checkArea() && this.checkAddress()) {
              // this.postInfo()
            } else {
              document.getElementById('district').onfocus()
            }
            // 检查犬只信息
            if (!this.checkItems()) {
              return false
            } else {
              this.modalshow()
            }
          }
        }
        // this.postInfo();
      },

      checkEmpty (key) {
        this.tip[key] = ''
        if (this[key].length === 0) {
          this.tip[key] = '该项目不能为空'
          return false
        }
      },
      // 设置需要验证不能为空的项目
      checkItems () {
        var options = [   // 设置检查的项目
          {title: 'qm', tip: '请输入犬名', node: 'dog-name'},
          {title: 'qcsrq', tip: '犬出生日期', node: 'birthday'},
          {title: 'qzbm', tip: '请输入犬种编码', node: 'dog-type'},
          {title: 'mstz', tip: '请输入犬毛色', node: 'dog-color'},
          {title: 'kqymzh', tip: '请输入免疫证号', node: 'immune-id'},
          {title: 'myrq', tip: '请输入免疫日期', node: 'immune-date'}
          // {title: 'aqcmz', tip: '请上传爱犬侧面全身照片', node: 'dog-pic'},
          // {title: 'myzzp', tip: '请上传免疫证照片', node:' immune-pic'}
        ]
//                console.log(this['qm']);
        for (var key in options) {
//                    var result = true;
          var str = this[options[key].title]
//                    console.log('options[item].key  is ' + options[key].title)
//                    console.log('str is ' + str)
//                    console.log('options[item].node is '+options[key].node)
          this.tip[options[key].title] = ''
          if (str.length === 0) {
            this.tip[options[key].title] = options[key].tip
            document.getElementById(options[key].node).focus()
            return false  // 退出循环
          }
        }
        return true
      },
      // 验证姓名
      checkName: function () {
        var str = this.yqrxm
        this.tip.yqrxm = ''
        var result = true
        if (str.length === 0) {
          this.tip.yqrxm = '请输入姓名'
          result = false
        } else if (str.length < 2) {
          this.tip.yqrxm = '姓名必须大于两位'
          result = false
        } else {
          var re = /^([\u4E00-\u9FA5 ·]{1,30})+$/
          if (re.test(str) === false) {
            this.tip.yqrxm = '请输入正确的中文姓名'
            result = false
          }
        }
        if (result === false) {
          document.getElementById('username').focus()
        }
        return result
      },
      // 手机号码验证
      checkMobile () {
        var result = true
        var mb = this.mobile
        this.tip.mobile = ''   // 清除提示语
        if (mb.length === 0 && this.telephone.length === 0) {
          this.tip.mobile = '请输入的手机号（与固话可以二选一）'
//                    result = false
        } else if (!mb.match(/^[0-9].*$/)) {
          this.tip.mobile = '手机号码必须是数字'
          result = false
        } else if (mb.length < 11) {
          this.tip.mobile = '号码小于11位'
          result = false
        } else {
          var mobileReg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(14[0-9]{1}|(17[0-9]{1})))+\d{8})$/  // 根据居住证申请中的正则判断
          if (mobileReg.test(mb) === false) {
            // alert("请输入正确的手机号码！")
            this.tip.mobile = '手机号码不合法'
            result = false
          }
//                    else{
//                        return true;
//                    }
        }
        if (result === false) {
          document.getElementById('mobile').focus()
        }
        return result
      },
      checkTelephone () {
        var result = true
        this.tip.telephone = ''
        var tel = this.telephone
        if (tel.length === 0) {
          this.tip.telephone = '请输入电话号码（与手机可以二选一）'
//                    document.getElementById('telephone').focus()
//                    result =  false
        } else if (tel.length < 8) {
          this.tip.telephone = '号码小于8位'
//                    document.getElementById('telephone').focus()
          return false
        } else if (!tel.match(/^\d{8}$/)) {
          this.tip.telephone = '电话号码必须是数字'
//                    document.getElementById('telephone').focus()
          result = false
        } else {
          var regTel = /^[3456789][\d]{7}$/
          if (regTel.test(tel) === false) {
            this.tip.telephone = '电话号码首位不能为1或2'
            result = false
          }
        }
        if (result === false) {
          document.getElementById('telephone').focus()
        }
        return result
      },
      // 根据南京微警务中的居住证的js调整编写。
      checkCertificationNo () {
        this.tip.yqrsfzh = ''
//                if (this.yqrsfzh == this.applyInfo.yqrsfzh) {  // 判断身份证是否提交过申请了
//                    this.tip.yqrsfzh = '该身份证已经提交过养犬申请了';
//                    return false
//                }
        var num = this.yqrsfzh
        if (num !== '') {
          var city = {11: '北京', 12: '天津', 13: '河北', 14: '山西', 15: '内蒙古', 21: '辽宁', 22: '吉林', 23: '黑龙江', 31: '上海', 32: '江苏', 33: '浙江', 34: '安徽', 35: '福建', 36: '江西', 37: '山东', 41: '河南', 42: '湖北', 43: '湖南', 44: '广东', 45: '广西', 46: '海南', 50: '重庆', 51: '四川', 52: '贵州', 53: '云南', 54: '西藏', 61: '陕西', 62: '甘肃', 63: '青海', 64: '宁夏', 65: '新疆', 71: '台湾', 81: '香港', 82: '澳门', 91: '国外'}
          num = num.replace(/ /g, '').toUpperCase() // 去掉字符串头尾空格并强制转换为大写
          console.log(num)
          console.log(num.length)
          if (!city[num.substr(0, 2)]) {
            this.tip.yqrsfzh = '地址编码错误'
            document.getElementById('certificationNo').focus()
            return false
          }
          // 校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
          // 下面分别分析出生日期和校验位
          var len, re, arrSplit, dtmBirth, bGoodDay, arrInt, arrCh, nTemp, i
          len = num.length
          if (len === 15) {
            if (!(/(^\d{15}$)/.test(num))) {
              //  n15位号码应全为数字，18位号码末位可以为数字或X
              this.tip.yqrsfzh = '15位号码应全为数字'
              document.getElementById('certificationNo').focus()
              return false
            }
            re = new RegExp(/^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/)
            arrSplit = num.match(re)
            // 检查生日日期是否正确
            dtmBirth = new Date('19' + arrSplit[2] + '/' + arrSplit[3] + '/' + arrSplit[4])
            bGoodDay = (dtmBirth.getYear() === Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) === Number(arrSplit[3])) && (dtmBirth.getDate() === Number(arrSplit[4]))
            if (!bGoodDay) {
              // 输入的身份证号里出生日期不对;
              this.tip.yqrsfzh = '出生日期不对'
              document.getElementById('certificationNo').focus()
              return false
            } else {
              // 将15位身份证转成18位
              // 校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
              arrInt = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
              arrCh = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']
              nTemp = 0
              num = num.substr(0, 6) + '19' + num.substr(6, num.length - 6)
              for (i = 0; i < 17; i++) {
                nTemp += num.substr(i, 1) * arrInt[i]
              }
              num += arrCh[nTemp % 11]
              console.log(num)
              return num
            }
          } else if (len === 18) {
            // 18位前17位为数字，最后一位是校验位，可能为数字或字符X。
            if (!(/(^\d{17}([0-9]|X)$)/.test(num))) {
              // 18位号码末位可以为数字或X;
              this.tip.yqrsfzh = '前17位是数字，18位号码末位可以为数字或X;'
              document.getElementById('certificationNo').focus()
              return false
            }
            re = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/)
//                        re = new RegExp(/^(\d{6})(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])(\d{3})(\d|X)$/)
            arrSplit = num.match(re)
            console.log(arrSplit)
            // 检查生日日期是否正确
            dtmBirth = new Date(arrSplit[2] + '/' + arrSplit[3] + '/' + arrSplit[4])
            console.log(dtmBirth.getFullYear())
            var now = new Date()
            bGoodDay = (dtmBirth < now) &&    // 生日不得晚于当前日期。
              (dtmBirth.getFullYear() === Number(arrSplit[2]) && dtmBirth.getFullYear() > 1800) &&   // 生日不得早于1800年
              ((dtmBirth.getMonth() + 1) === Number(arrSplit[3])) &&
              (dtmBirth.getDate() === Number(arrSplit[4]))
            console.log(bGoodDay)
            if (!bGoodDay) {
              // alert(dtmBirth.getYear())
              // alert(arrSplit[2])
              // 输入的身份证号不正确
              this.tip.yqrsfzh = '生日日期不正确'
              document.getElementById('certificationNo').focus()
              return false
            } else {
              // 检验18位身份证的校验码是否正确。
              // 校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
              var valnum
              arrInt = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
              arrCh = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']
              nTemp = 0
              for (i = 0; i < 17; i++) {
                nTemp += num.substr(i, 1) * arrInt[i]
              }
              valnum = arrCh[nTemp % 11]
              if (valnum !== num.substr(17, 1)) {
                // 输入的身份证号不正确
                this.tip.yqrsfzh = '校验码不正确'
                document.getElementById('certificationNo').focus()
                return false
              }
              return num
            }
          } else {
            this.tip.yqrsfzh = '位数不对！'
            document.getElementById('certificationNo').focus()
          }
          return false
        } else {
          this.tip.yqrsfzh = '证件号码不能为空'
          console.log('请输入身份证号码')
          document.getElementById('certificationNo').focus()
          return false
        }
      },
      checkAddress () {
        console.log('checkAddress begins')
        var str = this.yqxz
        this.tip.yqxz = ''
        var result = true
        if (str === '') {
          this.tip.yqxz = '请输入养犬地址'
          document.getElementById('address').focus()
          result = false
        } else {
          var re = /^[\u4E00-\u9FA5]{2}/   // 前二个必须是中文
          if (re.test(str) === false) {
            this.tip.yqxz = '请输入正确的中文开头的地址'
            result = false
          } else {
            if (this.checkArea()) {  // 检查是否选择养犬区划
              console.log('checkarea is ' + this.checkArea())
            } else {
              console.log('checkarea is false')
              document.getElementById('address').focus()
              result = false
            }
          }
        }
        return result
      },
      checkArea () {
        console.log('check district beging')
        this.tip.yqqh = ''
        if (this.yqqh === '') {
          console.log('未选行政区划')
          this.tip.yqqh = '请选择养犬区划'
          document.getElementById('district').focus()
          return false
        } else {
          console.log('已选行政区划')
          return true
        }
      },
      /* 微信端上传图片 */
      // 上传身份证照片
      uploadCardImg () {
        wx.ready(function () {
//                    alert('click uploadCardImg begins');
          // 微信端上传照片后，在服务器保存图片后获取的服务器上的图片信息。
//          uploadImg(function (result) {  // 回调函数
//             alert('image result is ' +JSON.stringify(result));
//            if (result.status === true) {
//              this.yqrsfzz = result.path  // 赋值给当前图片变量
//              // alert('yqrsfzz is '+this.yqrsfzz);
//            }
//          })
        })
      },
      // 上传居住证明照片
      uploadLiveImg () {
        wx.ready(function () {
          // alert('click uploadLiveImg begins');
          // 微信端上传照片后，在服务器保存图片后获取的服务器上的图片信息。
//          uploadImg(function (result) {  // 回调函数
//            // alert('image result is ' +JSON.stringify(result))
//            if (result.status === true) {
//              this.yqrjzzmz = result.path  // 赋值给当前图片变量
//              // alert('yqrjzzmz is '+vm.yqrjzzmz)
//            }
//          })
        })
      },
      // 微信端上传爱犬侧面全身照
      uploadDogImg () {
        wx.ready(function () {
//                    alert('click uploadLiveImg begins');
          // 微信端上传照片后，在服务器保存图片后获取的服务器上的图片信息。
//          uploadImg(function (result) {  // 回调函数
//            alert('image result is ' +JSON.stringify(result));
//            if (result.status === true) {
//              this.aqcmz = result.path  // 赋值给当前图片变量
//                  alert('aqcmz is '+vm.aqcmz);
//            }
//          })
        })
      },
      // 微信端上传免疫证照片
      uploadImmuneImg () {
        wx.ready(function () {
//                    alert('click uploadImmuneImg begins');
          // 微信端上传照片后，在服务器保存图片后获取的服务器上的图片信息。
//          uploadImg(function (result) {  // 回调函数
//            alert('image result is ' +JSON.stringify(result));
//            if (result.status === true) {
//              this.myzzp = result.path  // 赋值给当前图片变量
//                          alert('myzzp is '+vm.myzzp)
//            }
//          })
        })
      },
      // 提交表单信息
      postInfo () {
        // alert('postInfo begins')
        this.isDisabled = true
        this.cancle()

        var applyInfo = {
          // 养犬人信息
          'yqrxm': this.yqrxm,
          'yqrsfzh': this.yqrsfzh,
          'yqrsfzz': this.yqrsfzz,   // 养犬人身份证照片
          'yqrxb': this.yqrxb,
          'yqrlxdh': this.yqrlxdh,    // 养犬人联系电话
          'yqrwxh': this.openid,      // 养犬人openid
          'yqqh': this.yqqh,          // 行政区划  code>=320100
          'yqxz': this.yqxz,          // 犬类信息养犬区划+犬类信息养犬街路巷+犬类信息养犬详址
          'yqrjzzmz': this.yqrjzzmz,  // 养犬人居住证明

          // 犬只信息
          'qxb': this.qxb,            // 犬性别
          'qcsrq': this.qcsrq,        // 犬出生日期
          'yqyt': this.yqyt,          // 用途
          'qm': this.qm,              // 犬名
          'aqcmz': this.aqcmz,        // 爱犬侧面全身照片
          'qzbm': this.qzbm,          // 犬种编码
          'mstz': this.mstz,          // 毛色
          'kqymzh': this.kqymzh,
          'myrq': this.myrq,
          'myzzp': this.myzzp,
          'sbzt': 1                   // 新申请时。
        }
        // alert(JSON.stringify(applyInfo));
        axios.post(this.site + 'Apply/addApplyInfo', applyInfo).then((res) => {
          // alert('post result is ' +JSON.stringify(res))
          this.tip.submit = ''
          if (res.pk) {
            location.href = 'submit.html'
          } else {
            // 提交申请错误提示
            this.tip.submit = res.data.message
            return false
          }
        })
      }
    }
    //
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
