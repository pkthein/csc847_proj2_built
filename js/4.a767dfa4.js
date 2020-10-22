(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"8b24":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{attrs:{align:""}},[a("div",{staticClass:"q-mt-lg q-px-lg",attrs:{align:"center"}},[a("q-btn",{attrs:{round:"",icon:"add",color:"secondary"},on:{click:function(e){t.dialog.active=!0,t.dialog.option="add",t.newObject={},t.done=!1}}}),a("q-card",{staticClass:"q-mt-md"},[a("q-tabs",{staticClass:"text-grey",attrs:{dense:"","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("q-tab",{attrs:{name:"all",label:"All"}}),a("q-separator",{attrs:{vertical:"",inset:""}}),a("q-tab",{attrs:{name:"animals",label:"Animals"}}),a("q-separator",{attrs:{vertical:"",inset:""}}),a("q-tab",{attrs:{name:"flowers",label:"Flowers"}}),a("q-separator",{attrs:{vertical:"",inset:""}}),a("q-tab",{attrs:{name:"people",label:"People"}}),a("q-separator",{attrs:{vertical:"",inset:""}}),a("q-tab",{attrs:{name:"other",label:"Other"}}),a("q-separator",{attrs:{vertical:"",inset:""}})],1)],1),a("div",{staticClass:"q-mt-md q-gutter-sm"},t._l(t.data,(function(e,i){return a("q-img",{key:e.id,staticClass:"rounded-borders cursor-pointer grow",staticStyle:{width:"300px"},attrs:{src:e.img?"https://storage.googleapis.com/uploaded-pictures-csc847-290519/"+e.img:t.url,ratio:"1","spinner-color":"white"},on:{click:function(e){return t.editStudent(i)}}})})),1)],1),a("q-dialog",{attrs:{persistent:"",maximized:"","transition-show":"slide-up","transition-hide":"slide-down"},model:{value:t.dialog.active,callback:function(e){t.$set(t.dialog,"active",e)},expression:"dialog.active"}},[a("q-card",{attrs:{disabled:t.loading}},["add"===t.dialog.option?a("q-card-section",[a("q-page",[a("div",{staticClass:"text-bold",staticStyle:{"font-size":"2em"}},[t._v("\n            Add Photo\n            "),a("hr",{staticStyle:{"margin-top":"-4px"}})]),a("div",{staticClass:"q-gutter-sm"},[a("q-input",{attrs:{dense:"",rounded:"",outlined:"",placeholder:"Filename"},model:{value:t.newObject.name,callback:function(e){t.$set(t.newObject,"name",e)},expression:"newObject.name"}}),a("form",{staticClass:"q-pa-xs",attrs:{method:"POST",action:"/api/pictures",enctype:"multipart/form-data"}},[a("input",{ref:"img",staticClass:"file-input",attrs:{type:"file",name:"picture",accept:"image/png, image/jpeg"},on:{click:function(e){t.done=!0}}}),a("button",{staticClass:"button is-link float-right",attrs:{disabled:!(t.done&&t.newObject.name)},on:{click:t.addnewObject}},[t._v("\n                Submit\n              ")])])],1)])],1):t._e(),"edit"===t.dialog.option?a("q-card-section",[a("q-page",[a("div",{staticClass:"text-bold",staticStyle:{"font-size":"2em"}},[t._v("\n            Edit Photo\n            "),a("hr",{staticStyle:{"margin-top":"-4px"}})]),a("div",{staticClass:"q-gutter-sm"},[a("div",{attrs:{align:"center"}},[a("q-img",{staticClass:"rounded-borders cursor-pointer",staticStyle:{width:"300px"},attrs:{src:t.newObject.img?"https://storage.googleapis.com/uploaded-pictures-csc847-290519/"+t.newObject.img:t.url,ratio:"1","spinner-color":"white"}}),a("div",{staticClass:"q-ma-xs"},[a("q-btn",{staticStyle:{width:"300px"},attrs:{rounded:"",dense:"",color:"primary",icon:"delete"},on:{click:function(e){return t.deleteObject(t.newObject.uid)}}},[t._v("Delete")])],1)],1),a("q-input",{attrs:{dense:"",rounded:"",outlined:"",placeholder:"Filename"},model:{value:t.newObject.name,callback:function(e){t.$set(t.newObject,"name",e)},expression:"newObject.name"}}),a("q-input",{attrs:{dense:"",rounded:"",outlined:"",placeholder:"Category"},model:{value:t.newObject.category,callback:function(e){t.$set(t.newObject,"category",e)},expression:"newObject.category"}}),a("form",{staticClass:"q-pa-xs",attrs:{method:"POST",action:"/api/pictures",enctype:"multipart/form-data"}},[a("input",{ref:"img",staticClass:"file-input",attrs:{type:"file",name:"picture",accept:"image/png, image/jpeg"},on:{click:function(e){t.done=!0}}}),a("button",{staticClass:"button is-link float-right",attrs:{disabled:!t.done},on:{click:t.addUpdate}},[t._v("Upload")])]),a("div",{staticClass:"q-pr-xs",attrs:{align:"right"}},[a("q-btn",{attrs:{outline:"",rounded:""},on:{click:t.addUpdate}},[t._v("Save Changes")])],1)],1)])],1):t._e(),a("q-btn",{staticClass:"absolute i-dialog-close",attrs:{round:"",dense:"",color:"secondary",icon:"close"},on:{click:function(e){t.dialog.active=!1}}})],1)],1)],1)},s=[],n=a("59ca"),o=a.n(n);a("e71f");const c={apiKey:"AIzaSyAqQDuKPxqpEQZvPBZtZv_uoIbuKm9oqCk",authDomain:"csc847-290519.firebaseapp.com",databaseURL:"https://csc847-290519.firebaseio.com",projectId:"csc847-290519",storageBucket:"csc847-290519.appspot.com",messagingSenderId:"684614736719",appId:"1:684614736719:web:63916f6c0348c287fc033a"},l=o.a.initializeApp(c),r=l.firestore();var d={name:"PageIndex",components:{},created(){this.db=r,this.getData()},data(){return{db:null,tab:"all",done:!1,data:[],newObject:{},dialog:{active:!1,option:null},loading:!1,url:"https://placeimg.com/500/300/nature"}},methods:{addnewObject:function(){if(this.loading=!0,this.newObject.name){const t=this.$refs.img.files[0].name;return this.newObject.uid=t,this.newObject.img=t,this.newObject.category="Other",this.db.collection("pictures").doc(t).set(this.newObject).then((()=>{setTimeout((()=>{this.dialog.active=!1,this.loading=!1,this.data=[],this.getData(),this.$q.notify({type:"positive",message:"Added sucessfully!",timeout:500})}),5e3)}))}},addUpdate:function(){if(this.newObject.name&&this.newObject.category){this.loading=!0;const t=this.newObject.uid;return this.db.collection("pictures").doc(t).update(this.newObject).then((()=>{setTimeout((()=>{this.loading=!1,this.dialog.active=!1,this.data=[],this.getData(),this.$q.notify({type:"positive",message:"Added sucessfully!",timeout:500})}),500)}))}},getData:function(){return this.db.collection("pictures").get().then((t=>{t.forEach((t=>{const e=t.data();e.uid=t.id,this.data.push(e)}))})).catch((t=>{}))},deleteObject:function(t){this.$q.dialog({title:"Confirmation to Delete",message:`Delete ${t}?`,ok:!0,cancel:!0}).onOk((()=>(this.loading=!0,this.db.collection("pictures").doc(t).delete().then((()=>{setTimeout((()=>{this.loading=!1,this.data=[],this.getData(),this.$q.notify({type:"positive",message:"Deleted sucessfully!",timeout:500})}),500)})).catch((t=>{}))))).onCancel((()=>{}))},editStudent:function(t){this.newObject=this.data[t],console.log(this.newObject),this.dialog.active=!0,this.dialog.option="edit"}}},p=d,u=a("2877"),g=a("9989"),m=a("9c40"),b=a("f09f"),h=a("429b"),f=a("7460"),q=a("eb85"),w=a("068f"),v=a("24e8"),y=a("a370"),O=a("27f9"),j=a("eebe"),C=a.n(j),k=Object(u["a"])(p,i,s,!1,null,null,null);e["default"]=k.exports;C()(k,"components",{QPage:g["a"],QBtn:m["a"],QCard:b["a"],QTabs:h["a"],QTab:f["a"],QSeparator:q["a"],QImg:w["a"],QDialog:v["a"],QCardSection:y["a"],QInput:O["a"]})}}]);