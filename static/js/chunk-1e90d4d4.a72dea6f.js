/*!
 *  build: vue-admin-beautiful 
 *  vue-admin-beautiful author: chuzhixin 1204505056@qq.com 
 *  vue-admin-beautiful QQ Group(QQ群): 972435319、1139183756 
 *  time: 2021-2-8 09:42:45
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e90d4d4"],{"0599":function(t,e,s){},"6af5":function(t,e,s){"use strict";s("0599")},"9ed6":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login-container"},[s("el-alert",{staticStyle:{position:"fixed"},attrs:{title:"beautiful boys and girls欢迎加入vue-admin-beautifulQQ群：972435319",type:"success",closable:!1}}),s("el-row",[s("el-col",{attrs:{xs:24,sm:24,md:12,lg:16,xl:16}},[s("div",{staticStyle:{color:"transparent"}},[t._v("占位符")])]),s("el-col",{attrs:{xs:24,sm:24,md:12,lg:8,xl:8}},[s("el-form",{ref:"form",staticClass:"login-form",attrs:{model:t.form,rules:t.rules,"label-position":"left"}},[s("div",{staticClass:"title"},[t._v("hello !")]),s("div",{staticClass:"title-tips"},[t._v("欢迎来到"+t._s(t.title)+"！")]),s("el-form-item",{staticStyle:{"margin-top":"40px"},attrs:{prop:"username"}},[s("span",{staticClass:"svg-container svg-container-admin"},[s("vab-icon",{attrs:{icon:["fas","user"]}})],1),s("el-input",{directives:[{name:"focus",rawName:"v-focus"}],attrs:{placeholder:"请输入用户名",tabindex:"1",type:"text"},model:{value:t.form.username,callback:function(e){t.$set(t.form,"username","string"===typeof e?e.trim():e)},expression:"form.username"}})],1),s("el-form-item",{attrs:{prop:"password"}},[s("span",{staticClass:"svg-container"},[s("vab-icon",{attrs:{icon:["fas","lock"]}})],1),s("el-input",{key:t.passwordType,ref:"password",attrs:{type:t.passwordType,tabindex:"2",placeholder:"请输入密码"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleLogin(e)}},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password","string"===typeof e?e.trim():e)},expression:"form.password"}}),"password"===t.passwordType?s("span",{staticClass:"show-password",on:{click:t.handlePassword}},[s("vab-icon",{attrs:{icon:["fas","eye-slash"]}})],1):s("span",{staticClass:"show-password",on:{click:t.handlePassword}},[s("vab-icon",{attrs:{icon:["fas","eye"]}})],1)],1),s("el-button",{staticClass:"login-btn",attrs:{loading:t.loading,type:"primary"},on:{click:t.handleLogin}},[t._v(" 登录 ")]),s("router-link",{attrs:{to:"/register"}},[s("div",{staticStyle:{"margin-top":"20px"}},[t._v("注册")])])],1)],1)],1)],1)},o=[],a=s("61f7"),i={name:"Login",directives:{focus:{inserted:function(t){t.querySelector("input").focus()}}},data:function(){var t=function(t,e,s){""==e?s(new Error("用户名不能为空")):s()},e=function(t,e,s){Object(a["isPassword"])(e)?s():s(new Error("密码不能少于6位"))};return{nodeEnv:"production",title:this.$baseTitle,form:{username:"",password:""},rules:{username:[{required:!0,trigger:"blur",validator:t}],password:[{required:!0,trigger:"blur",validator:e}]},loading:!1,passwordType:"password",redirect:void 0}},watch:{$route:{handler:function(t){this.redirect=t.query&&t.query.redirect||"/"},immediate:!0}},created:function(){document.body.style.overflow="hidden"},beforeDestroy:function(){document.body.style.overflow="auto"},mounted:function(){var t=this;this.form.username="admin",this.form.password="123456",setTimeout((function(){t.handleLogin()}),3e3)},methods:{handlePassword:function(){var t=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){t.$refs.password.focus()}))},handleLogin:function(){var t=this;this.$refs.form.validate((function(e){if(!e)return!1;t.loading=!0,t.$store.dispatch("user/login",t.form).then((function(){var e="/404"===t.redirect||"/401"===t.redirect?"/":t.redirect;t.$router.push(e).catch((function(){})),t.loading=!1})).catch((function(){t.loading=!1}))}))}}},n=i,l=(s("6af5"),s("2877")),c=Object(l["a"])(n,r,o,!1,null,"256ce2fc",null);e["default"]=c.exports}}]);