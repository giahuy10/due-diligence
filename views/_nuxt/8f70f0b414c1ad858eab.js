(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{190:function(e,r,t){var content=t(217);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(18).default)("3ab4bee8",content,!0,{sourceMap:!1})},216:function(e,r,t){"use strict";var o=t(190);t.n(o).a},217:function(e,r,t){(e.exports=t(17)(!1)).push([e.i,".login{color:#fff;display:flex;align-items:center;height:100vh;justify-content:center;background:#453f41}.login .btn-login{background:#428bca;color:#fff}.login input{background-repeat:no-repeat;padding-left:30px;background-size:24px;background-position:0}.login input#loginId{background-image:url(/user.png)}.login input#exampleInputPassword1{background-image:url(/key_stroke.png)}",""])},228:function(e,r,t){"use strict";t.r(r);var o={data:function(){return{user:{loginId:"",pass:"",remember:0,rememberId:0}}},mounted:function(){localStorage.getItem("loginId")&&(this.user.loginId=localStorage.getItem("loginId"))},methods:{postLogin:function(){var e=this;this.user.rememberId&&localStorage.setItem("loginId",this.user.loginId),this.$axios.post("/hradmin/login",this.user).then(function(r){console.log(r),localStorage.setItem("user",JSON.stringify({token:r.headers.authorization,data:r.data})),e.$router.push("/")}).catch(function(r){e.$notify({duration:2e3,group:"foo",type:"error",title:"Login fail",text:r.response.data})})}},layout:"login"},n=(t(216),t(14)),component=Object(n.a)(o,function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"login"},[t("div",{staticClass:"container"},[t("h1",{staticClass:"text-center"},[e._v("자산관리 시스템")]),e._v(" "),t("br"),e._v(" "),t("br"),e._v(" "),t("div",[t("form",{attrs:{action:""},on:{submit:function(r){return r.preventDefault(),e.postLogin(r)}}},[t("div",{staticClass:"form-group"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.loginId,expression:"user.loginId"}],staticClass:"form-control",attrs:{type:"text",id:"loginId",placeholder:"Login ID"},domProps:{value:e.user.loginId},on:{input:function(r){r.target.composing||e.$set(e.user,"loginId",r.target.value)}}})]),e._v(" "),t("div",{staticClass:"form-group"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.pass,expression:"user.pass"}],staticClass:"form-control",attrs:{type:"password",id:"exampleInputPassword1",placeholder:"Password"},domProps:{value:e.user.pass},on:{input:function(r){r.target.composing||e.$set(e.user,"pass",r.target.value)}}})]),e._v(" "),t("div",{staticClass:"form-group form-check"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.rememberId,expression:"user.rememberId"}],staticClass:"form-check-input",attrs:{type:"checkbox",value:"1",id:"exampleCheck2"},domProps:{checked:Array.isArray(e.user.rememberId)?e._i(e.user.rememberId,"1")>-1:e.user.rememberId},on:{change:function(r){var t=e.user.rememberId,o=r.target,n=!!o.checked;if(Array.isArray(t)){var c=e._i(t,"1");o.checked?c<0&&e.$set(e.user,"rememberId",t.concat(["1"])):c>-1&&e.$set(e.user,"rememberId",t.slice(0,c).concat(t.slice(c+1)))}else e.$set(e.user,"rememberId",n)}}}),e._v(" "),t("label",{staticClass:"form-check-label",attrs:{for:"exampleCheck2"}},[e._v(" ID 저장")])]),e._v(" "),t("div",{staticClass:"form-group form-check"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.remember,expression:"user.remember"}],staticClass:"form-check-input",attrs:{type:"checkbox",value:"1",id:"exampleCheck1"},domProps:{checked:Array.isArray(e.user.remember)?e._i(e.user.remember,"1")>-1:e.user.remember},on:{change:function(r){var t=e.user.remember,o=r.target,n=!!o.checked;if(Array.isArray(t)){var c=e._i(t,"1");o.checked?c<0&&e.$set(e.user,"remember",t.concat(["1"])):c>-1&&e.$set(e.user,"remember",t.slice(0,c).concat(t.slice(c+1)))}else e.$set(e.user,"remember",n)}}}),e._v(" "),t("label",{staticClass:"form-check-label",attrs:{for:"exampleCheck1"}},[e._v("로그인 유지")])]),e._v(" "),t("button",{staticClass:"btn btn-login btn-block",on:{click:function(r){return r.preventDefault(),e.postLogin(r)}}},[e._v("로그인")])])])])])},[],!1,null,null,null);r.default=component.exports}}]);