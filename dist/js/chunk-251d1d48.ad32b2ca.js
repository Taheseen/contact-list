(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-251d1d48"],{"7f7f":function(t,a,e){var i=e("86cc").f,s=Function.prototype,n=/^\s*function ([^ (]*)/,o="name";o in s||e("9e1e")&&i(s,o,{configurable:!0,get:function(){try{return(""+this).match(n)[1]}catch(t){return""}}})},b8fa:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContactList")},s=[],n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.dataLoaded?e("div",{staticClass:"contacts__list"},[e("div",{staticClass:"carousel"},[e("ul",{staticClass:"carousel__images"},t._l(t.carouselList,function(a,i){return e("li",{key:i},[e("img",{attrs:{src:a.image,"on:dblclick":"scrollToProfile()"},on:{click:function(e){t.profiletab=a.email,t.scrollToProfile()}}}),e("p",{staticClass:"carousel__images__name"},[t._v(t._s(a.last)+" "+t._s(a.first)+" ")])])}),0)]),e("div",{staticClass:"contacts__list__all"},t._l(t.tabList,function(a,i){return e("div",{key:i,staticClass:"contacts__list__profile"},[e("a",{staticClass:"pagination active-tab",on:{click:function(e){t.activetab=a}}},[t._v(t._s(a))]),t._l(t.filtered[a],function(a,i){return e("div",{key:i,attrs:{id:"active-tab"+i}},[e("div",[e("a",{staticClass:"pagination",class:[t.profiletab===a.email?"active":""],on:{click:function(e){t.profiletab=a.email}}},[t._v(" "+t._s(a.name.last)+" "+t._s(a.name.first))]),t.profiletab===a.email?e("div",{staticClass:"contacts__list__profile__content"},[e("div",{staticClass:"contacts__list__profile__content__pic"},[e("img",{attrs:{src:a.picture.large,alt:""}})]),e("div",{staticClass:"contacts__list__profile__content__info"},[e("p",[e("b",[t._v("Email  : ")]),t._v(t._s(a.email))]),e("p",[e("b",[t._v("Phone  : ")]),t._v(t._s(a.phone))]),e("p",[e("b",[t._v("Street : ")]),t._v(t._s(a.location.street))]),e("p",[e("b",[t._v("City   : ")]),t._v(t._s(a.location.city))]),e("p",[e("b",[t._v("State  : ")]),t._v(t._s(a.location.state))]),e("p",[e("b",[t._v("Postcode:")]),t._v(t._s(a.location.postcode))])])]):t._e()])])})],2)}),0)]):t._e()},o=[],c=(e("7f7f"),{name:"Contact-List",data:function(){return{dataSet:"",activetab:"A",dataLoaded:!1,profiletab:"",carouselList:[],tabList:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]}},mounted:function(){var t=this;this.$http.get("https://randomuser.me/api/?results=50").then(function(a){t.dataSet=a.data,t.dataLoaded=!0})},computed:{filtered:function(){var t=this;return t.orderedList=[],t.dataSet.results.map(function(a){t.carouselList.push({image:a.picture.large,email:a.email}),console.log(t.tabList,"tablist"),t.tabList.filter(function(e){e.toLowerCase()===a.name.last.substring(0,1)&&(t.orderedList&&t.orderedList[e]||(t.orderedList[e]=[]),t.orderedList[e].push(a))})}),t.orderedList}},methods:{scrollToProfile:function(){var t=document.getElementsByClassName("active")[0];t.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"})}}}),l=c,r=e("2877"),_=Object(r["a"])(l,n,o,!1,null,null,null),u=_.exports,d={name:"Contact",components:{ContactList:u}},f=d,p=Object(r["a"])(f,i,s,!1,null,null,null);a["default"]=p.exports}}]);
//# sourceMappingURL=chunk-251d1d48.ad32b2ca.js.map