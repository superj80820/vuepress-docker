(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-221ca550"],{"7cc6":function(e,t,n){"use strict";var r=n("b37f"),o=n.n(r);o.a},b2ac:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("input",{ref:"input",attrs:{type:"file",name:"image",accept:"image/*"},on:{change:e.setImage}}),e._v(" "),n("div",{staticClass:"content"},[n("section",{staticClass:"cropper-area"},[n("div",{staticClass:"img-cropper"},[n("vue-cropper",{ref:"cropper",attrs:{src:e.imgSrc}})],1),e._v(" "),n("div",{staticClass:"actions"})])]),e._v(" "),n("div",[n("el-form",{ref:"form",attrs:{model:e.form,"label-width":"70px"}},[n("el-form-item",[e._v("\n        準備開上傳 "+e._s(e.form.name)+" 的照片~\n      ")]),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:e.showFileChooser}},[e._v("\n          選圖\n        ")]),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.rotate(90)}}},[e._v("\n          旋轉\n        ")]),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:e.reset}},[e._v("\n          重置\n        ")])],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"success"},on:{click:e.onSubmit}},[e._v("\n          上傳\n        ")])],1)],1)],1)])},o=[],a=(n("a481"),n("7f7f"),n("db72")),c=n("95c3"),i=n.n(c),s=(n("6107"),n("2f62")),l=n("bc3a"),p=n.n(l),f={components:{VueCropper:i.a},data:function(){return{imgSrc:"".concat("/projects/star_line_bot_admin/","selectImageInfo.png"),name:"",infoId:"",cropImg:"",cropped:null,form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}}},computed:Object(a["a"])({},Object(s["b"])(["token"])),created:function(){this.infoId=this.$route.query.infoId,this.form.name=this.$route.query.name},methods:{reset:function(){this.$refs.cropper.reset()},rotate:function(e){this.$refs.cropper.rotate(e)},setImage:function(e){var t=this,n=e.target.files[0];if(-1!==n.type.indexOf("image/"))if("function"===typeof FileReader){var r=new FileReader;r.onload=function(e){t.imgSrc=e.target.result,t.$refs.cropper.replace(e.target.result)},r.readAsDataURL(n)}else alert("Sorry, FileReader API not supported");else alert("Please select an image file")},showFileChooser:function(){this.$refs.input.click()},onSubmit:function(){var e=this,t=this.$loading({lock:!0,text:"上傳中"});this.$refs.cropper.getCroppedCanvas().toBlob((function(n){var r=new FormData;r.append("image",n,"filename.png"),r.append("infoId",e.infoId),p()({method:"post",url:"".concat("https://c9f75df3.ngrok.io","/api/faceService/face"),headers:{Authorization:"Bearer ".concat(e.token)},data:r}).then((function(n){console.log(n),t.close(),e.$message("成功")})).catch((function(n){console.log(n),t.close(),e.$message("失敗")}))}))}}},u=f,m=(n("7cc6"),n("2877")),d=Object(m["a"])(u,r,o,!1,null,null,null);t["default"]=d.exports},b37f:function(e,t,n){}}]);