webpackJsonp([6],{JC0w:function(t,e){},Quw4:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login"},[a("img",{staticClass:"bg",attrs:{src:s("yRcn")}}),t._v(" "),a("img",{staticClass:"title",attrs:{src:s("Cb4U")}}),t._v(" "),a("div",{staticClass:"login_bg"},[a("p",{staticClass:"login_title"},[t._v("登录")]),t._v(" "),a("div",{staticClass:"input_bg"},[a("img",{staticClass:"input_icon",attrs:{src:s("JhOT"),alt:"icon"}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.phoneType,expression:"phoneType"}],attrs:{type:"number",placeholder:"手机号"},domProps:{value:t.phoneType},on:{input:function(e){e.target.composing||(t.phoneType=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"input_bg"},[a("img",{staticClass:"input_icon",attrs:{src:s("aemX"),alt:"icon"}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.passwordType,expression:"passwordType"}],attrs:{type:"text",placeholder:"密码"},domProps:{value:t.passwordType},on:{input:function(e){e.target.composing||(t.passwordType=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"input_bg1"},[a("div",{staticClass:"input_left"},[a("img",{staticClass:"input_icon",attrs:{src:s("9OQK"),alt:"icon"}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.codeType,expression:"codeType"}],attrs:{type:"text",placeholder:"验证码"},domProps:{value:t.codeType},on:{input:function(e){e.target.composing||(t.codeType=e.target.value)}}})]),t._v(" "),t._m(0)]),t._v(" "),a("div",{staticClass:"button",on:{click:t.buttonFun}},[t._v("登录")])]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input_right"},[e("img",{staticClass:"code_img",attrs:{src:s("VkFz"),alt:"icon"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bottom"},[e("p",{staticClass:"bottom_text"},[this._v("© 一品天下餐饮管理有限公司")]),this._v(" "),e("img",{staticClass:"bottom_img",attrs:{src:s("W8/8"),alt:"icon"}}),this._v(" "),e("p",{staticClass:"bottom_text"},[this._v("咨询电话：028-87654321 / 87651234")])])}]};var i=s("VU/8")({name:"login",data:function(){return{automatic1:!1,phoneType:"",passwordType:"",codeType:""}},methods:{automaticFun:function(){this.automatic1=!this.automatic1},buttonFun:function(){""==this.phoneType?this.$message({message:"请输入电话号码",center:!0}):/^1[34578]\d{9}$/.test(this.phoneType)?""==this.passwordType?this.$message({message:"请输入密码",center:!0}):"123456"!=this.passwordType?this.$message({message:"请输入正确的密码",center:!0}):""==this.codeType?this.$message({message:"请输入验证码",center:!0}):"ktlu"!=this.codeType?this.$message({message:"请输入正确的验证码",center:!0}):this.$router.push("/index/index1"):this.$message({message:"请输入正确的电话号码",center:!0})}}},a,!1,function(t){s("JC0w")},"data-v-18cacf42",null);e.default=i.exports}});