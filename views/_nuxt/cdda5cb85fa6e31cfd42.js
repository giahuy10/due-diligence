(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{191:function(t,e,n){var content=n(219);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("02a059a6",content,!0,{sourceMap:!1})},218:function(t,e,n){"use strict";var o=n(191);n.n(o).a},219:function(t,e,n){(t.exports=n(17)(!1)).push([t.i,".scan-qr{display:flex;align-items:center;height:50vh;justify-content:center}.search-box{background:#ccc;padding:10px;font-size:12px}.search-box input{border-radius:5px;margin:0;border:0;width:280px;background:url(/keyboard.png) no-repeat #fff;background-size:40px 45px;padding:10px 10px 10px 45px;background-position:2px -7px}.search-box button{background:#453f41;border-color:#453f41}.stopScanner{position:fixed;bottom:0;background:#4d4d4d;color:#fff;width:100%;padding:10px;text-align:center}.check{min-height:100vh;background:#453f41;padding-top:56px}.check.scanning{padding-top:0}.square{width:100%;height:100%;display:flex;justify-content:center;align-items:center}.square .inner{width:250px;height:250px;border:3px solid #fff}.scan-button button{background:#428bca;border-color:#428bca}footer{color:#ccc;text-align:center;padding:10px}",""])},229:function(t,e,n){"use strict";n.r(e);n(103),n(71);var o=n(72),r=n.n(o),c={components:{QrcodeStream:n(194).QrcodeStream,"no-ssr":r.a},data:function(){return{qrCode:"",onScanner:!1}},mounted:function(){},beforeCreate:function(){var t=this;if(localStorage.getItem("user")){var e=JSON.parse(localStorage.getItem("user"));this.$axios.post("/hradmin/verifyTokenkey",{token:e.token,adminStatus:e.data.ADMIN_STATUS}).then(function(t){console.log(t)}).catch(function(e){t.$router.push("/login")})}else this.$router.push("/login")},methods:{onDecode:function(t){var e=this;this.qrCode=t,setTimeout(function(){e.viewResult()},1e3)},isValid:function(t){if(this.validURL(t)){var e=t.split("=");return console.log(e),this.qrCode=e[1],!0}return!/[~`!#$%\^&*+=\-\[\]\\';,\/{}|\\":<>\?]/g.test(t)},validURL:function(t){return!!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(t)},viewResult:function(){var t=this;this.qrCode?this.isValid(this.qrCode)?this.$axios.post("/getAssetInfo",{assetNo:this.qrCode}).then(function(e){e.data?(localStorage.setItem("assetDetailQuery",JSON.stringify(e.data)),t.$router.push("/resultquery")):(t.$notify({duration:2e3,group:"foo",type:"error",title:"Error",text:"존재하지 않는 자산입니다"}),t.qrCode="")}).catch(function(t){return console.log(t)}):this.$notify({duration:2e3,group:"foo",type:"warn",title:"Error",text:"QRcode not valid"}):this.$notify({duration:2e3,group:"foo",type:"warn",title:"Error",text:"존재하지 않는 자산입니다"})}}},d=(n(218),n(14)),component=Object(d.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"check",class:{scanning:t.onScanner}},[t.onScanner?n("div",[n("qrcode-stream",{on:{decode:t.onDecode}},[n("div",{staticClass:"square"},[n("div",{staticClass:"inner"})])]),t._v(" "),n("div",{staticClass:"stopScanner",on:{click:function(e){t.onScanner=!1}}},[t._v("\n      Stop scan\n    ")])],1):n("div",[n("div",{staticClass:"search-box"},[n("p",[t._v("QR 코드를 스캔 할 수없는 경우 QR 코드를 입력하십시오.")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.qrCode,expression:"qrCode"}],attrs:{type:"text",placeholder:"여기에 QR 코드 또는 SAP 번호를 입력하십시오."},domProps:{value:t.qrCode},on:{keyup:function(e){t.onScanner=!1},input:function(e){e.target.composing||(t.qrCode=e.target.value)}}}),t._v(" "),n("b-button",{attrs:{variant:"primary"},on:{click:t.viewResult}},[t._v("검사")])],1),t._v(" "),n("div",{staticClass:"scan-qr"},[n("div",{staticClass:"scan-button"},[n("button",{staticClass:"btn btn-info",on:{click:function(e){t.onScanner=!0}}},[t._v("QR 코드 스캐너 사용")])])])])])},[],!1,null,null,null);e.default=component.exports}}]);