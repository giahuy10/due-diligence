(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{188:function(t,e,r){var content=r(198);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("c67dc718",content,!0,{sourceMap:!1})},197:function(t,e,r){"use strict";var n=r(188);r.n(n).a},198:function(t,e,r){(t.exports=r(17)(!1)).push([t.i,".result-qr{padding:80px 10px 10px;height:100vh;font-size:13px;background:#fff}.result-qr table tr td{padding:5px!important;border:2px solid #fff;border-radius:8px}.result-qr table tr td.data{background:#eee;color:#686868}.result-qr table tr td.label{background:#453f41;vertical-align:middle;color:#fff;text-align:center}.result-qr table tr td.label.review{background:#ed5565}.result-qr table tr td.heading-label{background:#cdcdcd;text-align:center}.result-qr table tr td.item-status{color:#fff}.result-qr table tr td.item-status.D{background:#24cf00}.result-qr table tr td.item-status.E{background:#ff7100}.result-qr table tr td.item-status.S{background:#ed5565}.item-status{vertical-align:middle!important}button.btn.btn-save.btn-block{background:#453f41;color:#fff}button.btn.btn-reload{background:#ed5565;color:#fff;display:block;width:100%;margin-top:5px}button.btn.btn-yes.btn-sm{background:#212529;color:#fff}button.btn.btn-no.btn-sm{border:1px solid #ccc}button.btn.btn-search.btn-block{background:#232021;color:#fff}",""])},225:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{searchedSAP:!1,searchedAsset:!1,searchSAP:{SAP_ASSET_NO:"",SERIAL_NO:"",MODEL_SPEC:"",EMP_ID:""},searchAsset:{ASSET_NO:"",SERIAL_NO:"",MODEL_SPEC:"",EMP_ID:""},listSAP:[],listAsset:[],editding:!1,validateAssetNo:!0,isEmployee:!0,item:{},review:{USE_EMP_ID:!1,SERIAL_NO:!1,ASSET_GROUP:!1,ASSET_NO:!1,SAP_ASSET_NO:!1},assetStatus:{S:"실사 준비",E:"사용자 실사 완료",D:"관리자 실사 완료"},modalText:"",modalTitle:"",dueDiligenceSchedule:{},ASSET_TYPE:{N:"노트북",D:"데스크탑",M:"모니터",T:"태블릿",P:"PDA",C:"휴대전화",Z:"기타"},ddUser:{},showListUser:!1,depts:[],selectedDept:0,users:[],assetNo:"",newValue:{USE_EMP_ID:"",SERIAL_NO:"",ASSET_GROUP:"",ASSET_NO:"",SAP_ASSET_NO:""},canCheck:!0}},watch:{newAssetNo:function(t,e){this.editding=!0,0==t.length&&(this.editding=!1),9==t.length&&this.checkExistence("ASSET_NO")},newSAPAssetNo:function(t,e){this.editding=!0,0==t.length&&(this.editding=!1),5==t.length&&this.checkExistence("SAP_ASSET_NO")}},mounted:function(){var t=this;if(localStorage.getItem("user")){var e=JSON.parse(localStorage.getItem("user"));"A"===e.data.ADMIN_STATUS&&(this.isEmployee=!1),this.ddUser=e.data,this.$axios.post("/hradmin/verifyTokenkey",{token:e.token,adminStatus:e.data.ADMIN_STATUS}).then(function(e){e.data?t.dueDiligenceSchedule=e.data:(t.$notify({duration:2e3,group:"foo",type:"error",title:"Error",text:"실사기간 아닙니다"}),t.$router.push("/"))}).catch(function(e){t.$router.push("/login")})}else this.$router.push("/login");if(localStorage.getItem("assetDetail")){var r=JSON.parse(localStorage.getItem("assetDetail")),n=this;this.$axios.post("/getAssetInfo",{assetNo:r.ASSET_NO?r.ASSET_NO:r.SAP_ASSET_NO,YEAR:n.dueDiligenceSchedule.YEAR,TRIAL:n.dueDiligenceSchedule.TRIAL}).then(function(e){console.log(e),e.data&&(n.item=e.data,t.getUsers(),n.item.ASSET_NO&&n.item.SAP_ASSET_NO||(n.item.ASSET_NO&&!n.item.SAP_ASSET_NO?(n.modalTitle="스티커 유무 확인",n.review.SAP_ASSET_NO=!0,n.modalText="* 41XXXXX(ex. 4101234)형태의 7자리 SAP자산번호 스티커가 해당 자산에 부착돼 었습니까?",n.$refs.myModalRef.show()):(n.review.ASSET_NO=!0,n.modalTitle="스티커 유무 확인 ",n.modalText="* Lxxxxxxxxx (ex. L161011234) 형태의 10자리 QR코드번호 스티커가 해당 자산에 부착돼 있습니까?",n.$refs.myModalRef.show())))}).catch(function(t){return console.log(t)}),this.assetNo=this.item.ASSET_NO?this.item.ASSET_NO:this.item.SAP_ASSET_NO,"E"===this.ddUser.ADMIN_STATUS&&"S"!=this.item.DD_STATUS&&(this.canCheck=!1),this.getDepts()}else this.$router.push({path:"/check"})},methods:{updateSAPNumber:function(){this.item.SAP_ASSET_NO=this.newValue.SAP_ASSET_NO,this.searchedSAP=!1,this.searchSAP={SAP_ASSET_NO:"",SERIAL_NO:"",MODEL_SPEC:"",EMP_ID:""},this.listSAP=[],this.newValue.SAP_ASSET_NO=""},updateAssetNumber:function(){this.item.ASSET_NO=this.newValue.ASSET_NO,this.searchedAsset=!1,this.searchAsset={ASSET_NO:"",SERIAL_NO:"",MODEL_SPEC:"",EMP_ID:""},this.listAsset=[],this.newValue.ASSET_NO=""},getSAPList:function(){var t=this;this.$axios.post("/getSAPList",this.searchSAP).then(function(e){console.log(e),t.listSAP=e.data,t.searchedSAP=!0}).catch(function(t){return console.log(t)})},getAssetList:function(){var t=this;console.log(this.searchAsset),this.$axios.post("/getAssetList",this.searchAsset).then(function(e){console.log(e),t.listAsset=e.data,t.searchedAsset=!0}).catch(function(t){return console.log(t)})},handleSearchSAP:function(){this.item.SAP_ASSET_NO||this.$refs.searchSAP.show()},handleSearchAsset:function(){this.item.ASSET_NO||this.$refs.searchAsset.show()},checkExistence:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"SAP_ASSET_NO";if(this.validateAssetNo){var r=!0,data={type:e,assetNo:"41"+this.newValue.SAP_ASSET_NO,YEAR:this.dueDiligenceSchedule.YEAR,TRIAL:this.dueDiligenceSchedule.TRIAL},n="ASSET_NO"===e?"존재하지 않는 QR코드입니다":"존재하지 않는 SAP자산번호입니다",o="ASSET_NO"===e?"존재하는 자산번호입니다":"존재하는 SAP번호입니다",l="ASSET_NO"===e?"유효한 속성 코드":"유효한 SAP 코드";"ASSET_NO"===e?10==(data={type:e,assetNo:"L"+this.newValue.ASSET_NO,YEAR:this.dueDiligenceSchedule.YEAR,TRIAL:this.dueDiligenceSchedule.TRIAL}).assetNo.length&&this.isValid(data.assetNo)||(r=!1,this.$notify({duration:2e3,group:"foo",type:"error",title:"Error",text:"자산번호 포맷이 맞지 않습니다 : Lxxxxxxxxxx5"}),this.newValue.ASSET_NO="",this.editding=!1):7==data.assetNo.length&&this.isValid(data.assetNo)||(r=!1,this.$notify({duration:2e3,group:"foo",type:"error",title:"Error",text:"SAP번호 포맷이 맞지 않습니다: 41xxxxx"}),this.newValue.SAP_ASSET_NO="",this.editding=!1),r&&this.$axios.post("/checkAssetMaster",data).then(function(r){console.log(r),r.data?("ASSET_NO"===e?(t.newValue.ASSET_NO="",t.editding=!1):(t.newValue.SAP_ASSET_NO="",t.editding=!1),t.$notify({duration:2e3,group:"foo",type:"error",title:"Error",text:o})):t.$notify({duration:2e3,group:"foo",type:"success",title:"Success",text:l})}).catch(function(r){"ASSET_NO"===e?(t.newValue.ASSET_NO="",t.editding=!1):(t.newValue.SAP_ASSET_NO="",t.editding=!1),t.$notify({duration:2e3,group:"foo",type:"error",title:"Error",text:n})})}this.editding=!1},isValid:function(t){return!/[~`!#$%\^&*+=\-\[\]\\';,\/{}|\\":<>\?]/g.test(t)},closeModal:function(){this.$refs.myModalRef.hide()},updateUseEmp:function(){this.review.USE_EMP_ID=!0},getDepts:function(){var t=this;this.$axios.get("getDeptList").then(function(e){t.depts=e.data}).catch(function(t){return console.log(t)})},handleDeptSelect:function(){this.showListUser=!0,this.item.USE_EMP_ID="",this.getUsers(),this.newValue.USE_EMP_ID=""},getUsers:function(){var t=this;console.log("get user"),console.log(this.item.emDeptCD),this.$axios.get("getUserList/"+this.item.emDeptCD).then(function(e){t.users=e.data}).catch(function(t){return console.log(t)})},updateDueDiligenceMaster:function(){var t=!0;this.item.USE_EMP_ID||(t=!1,this.$notify({duration:2e3,group:"foo",type:"error",title:"Error",text:"소유자를 선택하십시오"})),this.review.ASSET_NO&&this.validateAssetNo&&!this.item.ASSET_NO&&(this.$notify({duration:2e3,group:"foo",type:"error",title:"Error",text:"자산 번호를 입력하십시오"}),t=!1),this.review.SAP_ASSET_NO&&this.validateAssetNo&&!this.item.SAP_ASSET_NO&&(this.$notify({duration:2e3,group:"foo",type:"error",title:"Error",text:"SAP번호를 입력하십시오"}),t=!1),t&&(this.ddUser.empDetail&&(this.item.DD_EMP_ID=this.ddUser.empDetail),this.item.DD_STATUS="D",this.item.UPT_EMP_ID=this.ddUser.empDetail?this.ddUser.empDetail.EMP_ID:0,this.$axios.post("/updateDueDiligenceMaster/",this.item).then(function(t){return console.log(t)}).catch(function(t){return console.log(t)}),this.storeDueDiligenceCheckList(),this.$notify({duration:2e3,group:"foo",type:"success",title:"Success",text:"사용자 실사가 완료되었습니다 "}))},storeDueDiligenceCheckList:function(){var t=this,e=[],r=this.review.USE_EMP_ID?"N":"Y";e.push({YEAR:this.dueDiligenceSchedule.YEAR,TRIAL:this.dueDiligenceSchedule.TRIAL,ASSET_NO:this.item.ASSET_NO?this.item.ASSET_NO:this.item.SAP_ASSET_NO,DD_CHK_TYPE:"USER",CHECK_YN:r,CHECK_NOTE:"N"==r?this.item.USE_EMP_ID:""});var n=this.review.SERIAL_NO?"N":"Y";e.push({YEAR:this.dueDiligenceSchedule.YEAR,TRIAL:this.dueDiligenceSchedule.TRIAL,ASSET_NO:this.item.ASSET_NO?this.item.ASSET_NO:this.item.SAP_ASSET_NO,DD_CHK_TYPE:"SN",CHECK_YN:n,CHECK_NOTE:"N"==n?this.item.SERIAL_NO:""});var o=this.review.ASSET_GROUP?"N":"Y";e.push({YEAR:this.dueDiligenceSchedule.YEAR,TRIAL:this.dueDiligenceSchedule.TRIAL,ASSET_NO:this.item.ASSET_NO?this.item.ASSET_NO:this.item.SAP_ASSET_NO,DD_CHK_TYPE:"ASTT",CHECK_YN:o,CHECK_NOTE:"N"==o?this.item.ASSET_GROUP:""}),e.forEach(function(e){t.$axios.post("storeDueDiligenceCheckList",e).then(function(t){console.log(t)}).catch(function(t){return console.log(t)})})}},computed:{newAssetNo:function(){return this.newValue.ASSET_NO},newSAPAssetNo:function(){return this.newValue.SAP_ASSET_NO}}},o=(r(197),r(14)),component=Object(o.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"result-qr"},[r("table",{staticClass:"table"},[r("tr",[t._m(0),t._v(" "),r("td",{staticClass:"data"},[t._v("임시번호")]),t._v(" "),r("td",{staticClass:"item-status text-center",class:t.item.DD_STATUS,attrs:{rowspan:"3",width:"110"}},[t._v("\n        [상태] "),r("br"),t._v("\n        "+t._s(t.assetStatus[t.item.DD_STATUS])+"\n      ")])]),t._v(" "),r("tr",[r("td",{staticClass:"heading-label"},[r("i",{staticClass:"fa fa-search",attrs:{"aria-hidden":"true"},on:{click:t.handleSearchSAP}}),t._v("SAP번호 ")]),t._v(" "),r("td",{staticClass:"data"},[t._v(t._s(t.item.SAP_ASSET_NO?t.item.SAP_ASSET_NO:" SAP번호"))])]),t._v(" "),r("tr",[r("td",{staticClass:"heading-label"},[r("i",{staticClass:"fa fa-search",attrs:{"aria-hidden":"true"},on:{click:t.handleSearchAsset}}),t._v("자산번호")]),t._v(" "),r("td",{staticClass:"data"},[t._v(t._s(t.item.ASSET_NO?t.item.ASSET_NO:"자산번호"))])])]),t._v(" "),r("table",{staticClass:"table"},[r("tr",[r("td",{staticClass:"label",attrs:{width:"110"}},[t._v("소유자 부서 ")]),t._v(" "),r("td",{staticClass:"data"},[t.isEmployee?r("div",[t._v("\n        "+t._s(t.item.useEmpDeptName?t.item.useEmpDeptName:"")+"\n        ")]):r("select",{directives:[{name:"model",rawName:"v-model",value:t.item.emDeptCD,expression:"item.emDeptCD"}],staticClass:"form-control",attrs:{name:"",id:""},on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.item,"emDeptCD",e.target.multiple?r:r[0])},t.handleDeptSelect]}},[r("option",{attrs:{value:"0"}},[t._v("부서 선택")]),t._v(" "),t._l(t.depts,function(e,n){return r("option",{key:n,domProps:{value:e.DEPT_CD}},[t._v(t._s(e.DEPT_NM))])})],2)])]),t._v(" "),r("tr",[r("td",{staticClass:"label",attrs:{width:"110"}},[t._v("소유자 이름 ")]),t._v(" "),r("td",{staticClass:"data"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.item.USE_EMP_ID,expression:"item.USE_EMP_ID"}],staticClass:"form-control",attrs:{name:"",id:""},on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.item,"USE_EMP_ID",e.target.multiple?r:r[0])},function(e){t.review.USE_EMP_ID=!0}]}},[r("option",{attrs:{value:""}},[t._v("소유자를 선택하십시오")]),t._v(" "),t._l(t.users,function(e,n){return r("option",{key:n,domProps:{value:e.EMP_ID}},[t._v(t._s(e.EMP_NM))])})],2)])]),t._v(" "),r("tr",[r("td",{staticClass:"label",attrs:{width:"110"}},[t._v("자산 종류")]),t._v(" "),r("td",{staticClass:"data"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.item.ASSET_GROUP,expression:"item.ASSET_GROUP"}],staticClass:"form-control",attrs:{name:"",id:""},on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.item,"ASSET_GROUP",e.target.multiple?r:r[0])},function(e){t.review.ASSET_GROUP=!0}]}},[r("option",{attrs:{value:""}},[t._v("종류를 선택하십시오")]),t._v(" "),r("option",{attrs:{value:"N"}},[t._v("노트북")]),t._v(" "),r("option",{attrs:{value:"D"}},[t._v("데스크탑")]),t._v(" "),r("option",{attrs:{value:"M"}},[t._v("모니터")]),t._v(" "),r("option",{attrs:{value:"T"}},[t._v("태블릿")]),t._v(" "),r("option",{attrs:{value:"P"}},[t._v("PDA")]),t._v(" "),r("option",{attrs:{value:"C"}},[t._v("휴대전화")]),t._v(" "),r("option",{attrs:{value:"Z"}},[t._v("기타")])])])]),t._v(" "),r("tr",[r("td",{staticClass:"label",attrs:{width:"110"}},[t._v("시리얼 번호")]),t._v(" "),r("td",{staticClass:"data"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.item.SERIAL_NO,expression:"item.SERIAL_NO"}],staticClass:"form-control",attrs:{type:"text",placeholder:t.item.SERIAL_NO},domProps:{value:t.item.SERIAL_NO},on:{change:function(e){t.review.SERIAL_NO=!0},input:function(e){e.target.composing||t.$set(t.item,"SERIAL_NO",e.target.value)}}})])]),t._v(" "),r("tr",[r("td",{staticClass:"label",attrs:{width:"110"}},[t._v("취득일")]),t._v(" "),r("td",{staticClass:"data"},[r("input",{staticClass:"form-control",attrs:{readonly:""},domProps:{value:t.item.GET_DATE}})])]),t._v(" "),r("tr",[r("td",{staticClass:"label",attrs:{width:"110"}},[t._v("실사자 부서")]),t._v(" "),r("td",{staticClass:"data"},[r("input",{staticClass:"form-control",attrs:{readonly:""},domProps:{value:t.item.ddEmpDeptName?t.item.ddEmpDeptName:""}})])]),t._v(" "),r("tr",[r("td",{staticClass:"label",attrs:{width:"110"}},[t._v("실사자 이름")]),t._v(" "),r("td",{staticClass:"data"},[r("input",{staticClass:"form-control",attrs:{readonly:""},domProps:{value:t.item.ddEmpName}})])]),t._v(" "),r("tr",[r("td",{staticClass:"label",attrs:{width:"110"}},[t._v("특기 사항")]),t._v(" "),r("td",{staticClass:"data"},[r("input",{staticClass:"form-control",domProps:{value:t.item.note}})])]),t._v(" "),t._m(1)]),t._v(" "),t.canCheck&&!t.editding?r("button",{staticClass:"btn btn-save btn-block",on:{click:function(e){return e.preventDefault(),t.updateDueDiligenceMaster(e)}}},[t._v("저장")]):t._e(),t._v(" "),t.canCheck?t._e():r("div",{staticClass:"alert alert-warning"},[t._v("\n    관리자 만 실사를 편집 할 수 있습니다.\n  ")]),t._v(" "),t.editding?r("div",{staticClass:"alert alert-warning"},[t._v("\n    입력 확인\n  ")]):t._e(),t._v(" "),r("b-modal",{ref:"myModalRef",attrs:{id:"modal1",centered:"",title:t.modalTitle}},[r("p",{staticClass:"my-4",domProps:{textContent:t._s(t.modalText)}}),t._v(" "),r("div",{staticClass:"w-100",attrs:{slot:"modal-footer"},slot:"modal-footer"},[r("b-btn",{attrs:{size:"sm",variant:"yes"},on:{click:t.closeModal}},[t._v("\n         예\n       ")]),t._v(" "),r("b-btn",{attrs:{size:"sm",variant:"no"},on:{click:function(e){t.validateAssetNo=!1,t.$refs.myModalRef.hide()}}},[t._v("\n         아니오\n       ")])],1)]),t._v(" "),r("b-modal",{ref:"searchSAP",attrs:{id:"searchSAP",centered:"",title:"SAP번호 검색"}},[r("div",{staticClass:"modal-mobdy"},[r("table",{staticClass:"table"},[r("tr",[r("td",[t._v("SAP번호")]),t._v(" "),r("td",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.searchSAP.SAP_ASSET_NO,expression:"searchSAP.SAP_ASSET_NO"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.searchSAP.SAP_ASSET_NO},on:{input:function(e){e.target.composing||t.$set(t.searchSAP,"SAP_ASSET_NO",e.target.value)}}})])]),t._v(" "),r("tr",[r("td",[t._v("시리얼번호")]),t._v(" "),r("td",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.searchSAP.SERIAL_NO,expression:"searchSAP.SERIAL_NO"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.searchSAP.SERIAL_NO},on:{input:function(e){e.target.composing||t.$set(t.searchSAP,"SERIAL_NO",e.target.value)}}})])]),t._v(" "),r("tr",[r("td",[t._v("모델명")]),t._v(" "),r("td",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.searchSAP.MODEL_SPEC,expression:"searchSAP.MODEL_SPEC"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.searchSAP.MODEL_SPEC},on:{input:function(e){e.target.composing||t.$set(t.searchSAP,"MODEL_SPEC",e.target.value)}}})])]),t._v(" "),r("tr",[r("td",[t._v("소유자")]),t._v(" "),r("td",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.searchSAP.EMP_ID,expression:"searchSAP.EMP_ID"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.searchSAP.EMP_ID},on:{input:function(e){e.target.composing||t.$set(t.searchSAP,"EMP_ID",e.target.value)}}})])]),t._v(" "),r("tr",[r("td",{attrs:{colspan:"2"}},[r("button",{staticClass:"btn btn-search btn-block",on:{click:function(e){return e.preventDefault(),t.getSAPList(e)}}},[t._v("검색")])])])]),t._v(" "),t.listSAP.length>0&&t.searchedSAP?r("div",{staticClass:"alert alert-success"},[t._v("\n        "+t._s(t.listSAP.length)+" 개의 적절한 SAP번호를 찾았습니다\n      ")]):t._e(),t._v(" "),0==t.listSAP.length&&t.searchedSAP?r("div",{staticClass:"alert alert-warning"},[t._v("\n        적절한 SAP번호 찾지 못 했습니다 \n      ")]):t._e(),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.newValue.SAP_ASSET_NO,expression:"newValue.SAP_ASSET_NO"}],staticClass:"form-control",attrs:{name:"",id:""},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.newValue,"SAP_ASSET_NO",e.target.multiple?r:r[0])}}},[r("option",{attrs:{value:""}},[t._v("*해당되는 SAP번호를 선택하세요")]),t._v(" "),t._l(t.listSAP,function(e,n){return r("option",{key:n,domProps:{value:e.SAP_ASSET_NO}},[t._v("\n          "+t._s(e.SAP_ASSET_NO)+"/"+t._s(e.useEmpDeptName)+"/"+t._s(e.useEmpName)+"\n        ")])})],2)]),t._v(" "),r("div",{staticClass:"w-100",attrs:{slot:"modal-footer"},slot:"modal-footer"},[r("b-btn",{attrs:{size:"sm",variant:"yes"},on:{click:function(e){t.$refs.searchSAP.hide(),t.updateSAPNumber()}}},[t._v("\n         선택\n       ")]),t._v(" "),r("b-btn",{attrs:{size:"sm",variant:"no"},on:{click:function(e){return t.$refs.searchSAP.hide()}}},[t._v("\n         취소\n       ")])],1)]),t._v(" "),r("b-modal",{ref:"searchAsset",attrs:{id:"searchAsset",centered:"",title:"SAP번호 검색"}},[r("div",{staticClass:"modal-mobdy"},[r("table",{staticClass:"table"},[r("tr",[r("td",[t._v("SAP번호")]),t._v(" "),r("td",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.searchAsset.ASSET_NO,expression:"searchAsset.ASSET_NO"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.searchAsset.ASSET_NO},on:{input:function(e){e.target.composing||t.$set(t.searchAsset,"ASSET_NO",e.target.value)}}})])]),t._v(" "),r("tr",[r("td",[t._v("시리얼번호")]),t._v(" "),r("td",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.searchAsset.SERIAL_NO,expression:"searchAsset.SERIAL_NO"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.searchAsset.SERIAL_NO},on:{input:function(e){e.target.composing||t.$set(t.searchAsset,"SERIAL_NO",e.target.value)}}})])]),t._v(" "),r("tr",[r("td",[t._v("모델명")]),t._v(" "),r("td",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.searchAsset.MODEL_SPEC,expression:"searchAsset.MODEL_SPEC"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.searchAsset.MODEL_SPEC},on:{input:function(e){e.target.composing||t.$set(t.searchAsset,"MODEL_SPEC",e.target.value)}}})])]),t._v(" "),r("tr",[r("td",[t._v("소유자")]),t._v(" "),r("td",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.searchAsset.EMP_ID,expression:"searchAsset.EMP_ID"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.searchAsset.EMP_ID},on:{input:function(e){e.target.composing||t.$set(t.searchAsset,"EMP_ID",e.target.value)}}})])]),t._v(" "),r("tr",[r("td",{attrs:{colspan:"2"}},[r("button",{staticClass:"btn btn-search btn-block",on:{click:function(e){return e.preventDefault(),t.getAssetList(e)}}},[t._v("검색")])])])]),t._v(" "),t.listAsset.length>0&&t.searchedAsset?r("div",{staticClass:"alert alert-success"},[t._v("\n        "+t._s(t.listAsset.length)+" 개의 적절한 SAP번호를 찾았습니다\n      ")]):t._e(),t._v(" "),0==t.listAsset.length&&t.searchedAsset?r("div",{staticClass:"alert alert-warning"},[t._v("\n        적절한 SAP번호 찾지 못 했습니다 \n      ")]):t._e(),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.newValue.ASSET_NO,expression:"newValue.ASSET_NO"}],staticClass:"form-control",attrs:{name:"",id:""},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.newValue,"ASSET_NO",e.target.multiple?r:r[0])}}},[r("option",{attrs:{value:""}},[t._v("*해당되는 SAP번호를 선택하세요")]),t._v(" "),t._l(t.listAsset,function(e,n){return r("option",{key:n,domProps:{value:e.ASSET_NO}},[t._v("\n          "+t._s(e.ASSET_NO)+"/"+t._s(e.useEmpDeptName)+"/"+t._s(e.useEmpName)+"\n        ")])})],2)]),t._v(" "),r("div",{staticClass:"w-100",attrs:{slot:"modal-footer"},slot:"modal-footer"},[r("b-btn",{attrs:{size:"sm",variant:"yes"},on:{click:function(e){return t.$refs.searchSAP.hide()}}},[t._v("\n         선택\n       ")]),t._v(" "),r("b-btn",{attrs:{size:"sm",variant:"no"},on:{click:function(e){return t.$refs.searchSAP.hide()}}},[t._v("\n         취소\n       ")])],1)])],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"heading-label",attrs:{width:"110"}},[e("i",{staticClass:"fa fa-search",attrs:{"aria-hidden":"true"}}),this._v("임시번호")])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticClass:"label",attrs:{width:"110"}},[this._v("폐기 정보\n\n        \n      ")]),this._v(" "),e("td",{staticClass:"data"},[e("input",{staticClass:"form-control",attrs:{readonly:""}})])])}],!1,null,null,null);e.default=component.exports}}]);