(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-68b69b30"],{6220:function(e,t,o){"use strict";var a=o("9185"),n=o.n(a);n.a},9185:function(e,t,o){},e37e:function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"app-container"},[o("input",{ref:"input",attrs:{type:"file",name:"image",accept:"image/*"},on:{change:e.setImage}}),e._v(" "),o("div",{staticClass:"content"},[o("section",{staticClass:"cropper-area"},[o("div",{staticClass:"img-cropper"},[o("vue-cropper",{ref:"cropper",attrs:{autoCropArea:1,src:e.imgSrc}})],1),e._v(" "),o("div",{staticClass:"actions"})])]),e._v(" "),o("div",[o("el-form",{ref:"form",attrs:{model:e.form,"label-width":"120px"}},[o("el-form-item",{attrs:{label:"名子"}},[o("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"羅馬拼音"}},[o("el-input",{model:{value:e.form.romanization,callback:function(t){e.$set(e.form,"romanization",t)},expression:"form.romanization"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"附註"}},[o("el-input",{attrs:{type:"textarea"},model:{value:e.form.detail,callback:function(t){e.$set(e.form,"detail",t)},expression:"form.detail"}})],1),e._v(" "),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:e.showFileChooser}},[e._v("選圖")]),e._v(" "),o("el-button",{attrs:{type:"success"},on:{click:e.onCreate}},[e._v("創建")]),e._v(" "),o("el-button",{attrs:{type:"warning"},on:{click:e.onUpload}},[e._v("更新")])],1)],1)],1)])},n=[],r=(o("a481"),o("7f7f"),o("db72")),i=o("95c3"),s=o.n(i),c=(o("6107"),o("2f62")),l=o("bc3a"),p=o.n(l),m={components:{VueCropper:s.a},data:function(){return{imgSrc:"".concat("/projects/star_line_bot_admin/","selectImageInfo.png"),id:"",form:{name:"",romanization:"",detail:""}}},computed:Object(r["a"])({},Object(c["b"])(["token"])),created:function(){this.form.name=this.$route.query.name,this.form.romanization=this.$route.query.romanization,this.form.detail=this.$route.query.detail,this.imgSrc=this.$route.query.preview||this.imgSrc,this.id=this.$route.query.id},methods:{reset:function(){this.$refs.cropper.reset()},rotate:function(e){this.$refs.cropper.rotate(e)},setImage:function(e){var t=this,o=e.target.files[0];if(-1!==o.type.indexOf("image/"))if("function"===typeof FileReader){var a=new FileReader;a.onload=function(e){t.imgSrc=e.target.result,t.$refs.cropper.replace(e.target.result)},a.readAsDataURL(o)}else alert("Sorry, FileReader API not supported");else alert("Please select an image file")},showFileChooser:function(){this.$refs.input.click()},onUpload:function(){var e=this,t=this.$loading({lock:!0,text:"上傳中"});this.$refs.cropper.getCroppedCanvas().toBlob((function(o){var a=new FormData;a.append("preview",o,"filename.png"),a.append("name",e.form.name),a.append("romanization",e.form.romanization),a.append("detail",e.form.detail),p()({method:"put",url:"".concat("https://c9f75df3.ngrok.io","/api/faceService/info/").concat(e.id),headers:{Authorization:"Bearer ".concat(e.token)},data:a}).then((function(o){console.log(o),t.close(),e.$message("成功")})).catch((function(o){console.log(o),t.close(),e.$message("失敗")}))}))},onCreate:function(){var e=this,t=this.$loading({lock:!0,text:"上傳中"});this.$refs.cropper.getCroppedCanvas().toBlob((function(o){var a=new FormData;a.append("preview",o,"filename.png"),a.append("name",e.form.name),a.append("romanization",e.form.romanization),a.append("detail",e.form.detail),p()({method:"post",url:"".concat("https://c9f75df3.ngrok.io","/api/faceService/info"),headers:{Authorization:"Bearer ".concat(e.token)},data:a}).then((function(o){console.log(o),t.close(),e.$message("成功")})).catch((function(o){console.log(o),t.close(),e.$message("失敗")}))}))}}},f=m,u=(o("6220"),o("2877")),d=Object(u["a"])(f,a,n,!1,null,null,null);t["default"]=d.exports}}]);