(function(t){function e(e){for(var i,n,o=e[0],l=e[1],c=e[2],u=0,f=[];u<o.length;u++)n=o[u],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&f.push(r[n][0]),r[n]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);d&&d(e);while(f.length)f.shift()();return a.push.apply(a,c||[]),s()}function s(){for(var t,e=0;e<a.length;e++){for(var s=a[e],i=!0,n=1;n<s.length;n++){var l=s[n];0!==r[l]&&(i=!1)}i&&(a.splice(e--,1),t=o(o.s=s[0]))}return t}var i={},r={app:0},a=[];function n(t){return o.p+"js/"+({about:"about"}[t]||t)+".js"}function o(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.e=function(t){var e=[],s=r[t];if(0!==s)if(s)e.push(s[2]);else{var i=new Promise((function(e,i){s=r[t]=[e,i]}));e.push(s[2]=i);var a,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=n(t);var c=new Error;a=function(e){l.onerror=l.onload=null,clearTimeout(u);var s=r[t];if(0!==s){if(s){var i=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",c.name="ChunkLoadError",c.type=i,c.request=a,s[1](c)}r[t]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:l})}),12e4);l.onerror=l.onload=a,document.head.appendChild(l)}return Promise.all(e)},o.m=t,o.c=i,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(s,i,function(e){return t[e]}.bind(null,i));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=c;a.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("cd49")},"034f":function(t,e,s){"use strict";var i=s("85ec"),r=s.n(i);r.a},1390:function(t,e,s){"use strict";var i=s("3d05"),r=s.n(i);r.a},"3d05":function(t,e,s){},4195:function(t,e,s){"use strict";var i=s("9d9f"),r=s.n(i);r.a},"85ec":function(t,e,s){},"9d9f":function(t,e,s){},cd49:function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var i=s("2b0e"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},a=[],n=(s("034f"),s("2877")),o={},l=Object(n["a"])(o,r,a,!1,null,null,null),c=l.exports,u=s("8c4f"),d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main"},[t.mobileView?s("div",{staticClass:"head"},[s("div",{staticClass:"logo"},[s("img",{staticClass:"brand",attrs:{src:"/dl-sim/logo-new.png"}}),s("div",{staticClass:"menu",on:{click:function(e){t.asideHidden=!1}}},[s("i",{staticClass:"el-icon-s-operation"})])])]):t._e(),s("div",{staticClass:"main-scrollbar"},[t.mobileView?s("ul",{staticClass:"mobile-holder"},[t.mobileView?s("virtual-list",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"virtual-list",attrs:{"data-key":"id","data-sources":t.filtered,"data-component":t.dpsMobile,"element-loading-spinner":"el-icon-loading","element-loading-text":"loading..."}}):t._e()],1):t._e(),t.mobileView?t._e():s("ul",{staticClass:"holder"},[t._m(0),t.mobileView?t._e():s("virtual-list",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"virtual-list",attrs:{"data-key":"id","data-sources":t.filtered,"data-component":t.dpsEntry,"element-loading-spinner":"el-icon-loading","element-loading-text":"loading..."}})],1)]),t.mobileView?s("div",{staticClass:"aside-invisible-closer",class:{show:t.mobileView&&!t.asideHidden},on:{click:function(e){t.asideHidden=!0}}}):t._e(),s("div",{staticClass:"aside the-filter",class:{show:t.mobileView&&!t.asideHidden}},[s("div",{staticClass:"aside-container"},[t._m(1),t.mobileView?s("div",{staticClass:"closer fr",on:{click:function(e){t.asideHidden=!0}}},[t._v(" × ")]):t._e(),t._m(2),s("div",{staticClass:"splitter"}),s("div",{staticClass:"last-modified"},[s("div",{staticClass:"mb-5"},[t._v("Last modified: "+t._s(t.lastModifiedTime))]),s("div",[s("div",[t._v("Changed:")]),s("div",{staticClass:"last-modified-icons"},t._l(t.lastModifiedList,(function(t){return s("img",{key:t,attrs:{src:"/dl-sim/pic/character/"+t+".png"}})})),0)])]),s("div",{staticClass:"splitter"}),s("div",{staticClass:"title"},[t._v(" Legend "),t.dpsCategories.length<t.allCategories.length?s("span",[s("a",{staticClass:"toggle",on:{click:function(e){return t.toggleFactor()}}},[t._v("Reset")])]):t._e()]),s("div",{staticClass:"legend",staticStyle:{"line-height":"25px"}},t._l(t.allCategories,(function(e){return s("div",{key:e,staticClass:"dib",class:{"c-gray":!t.dpsCategories.includes(e)},on:{click:function(s){return t.toggleFactor(e)}}},[s("span",{staticClass:"dib"},[s("div",{staticClass:"indic",class:"c-"+e})]),s("span",{staticClass:"dib"},[s("div",{staticClass:"label"},[t._v(t._s(e))])])])})),0),s("div",{staticClass:"splitter"}),s("div",{staticClass:"title"},[t._v("Mode")]),s("div",{staticClass:"filter"},[s("el-radio-group",{staticClass:"rg-filter",attrs:{size:"mini"},on:{change:function(e){return t.reload()}},model:{value:t.category,callback:function(e){t.category=e},expression:"category"}},[s("el-radio-button",{attrs:{label:"180"}},[t._v("180s")]),s("el-radio-button",{attrs:{label:"120"}},[t._v("120s")]),s("el-radio-button",{attrs:{label:"60"}},[t._v("60s")]),s("el-radio-button",{attrs:{label:"sp",value:"sp"}},[t._v("Special")])],1)],1),s("div",{staticClass:"title"},[t._v(" Team DPS "),s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"Team DPS is the total personal damage of your OTHER team members",placement:"top-start"}},[s("i",{staticClass:"el-icon-question"})])],1),s("div",{staticClass:"filter"},[s("el-input-number",{attrs:{min:0,step:5e3,size:"mini"},on:{change:function(e){return t.reload()}},model:{value:t.teamDPS,callback:function(e){t.teamDPS=e},expression:"teamDPS"}})],1),s("div",{staticClass:"title"},[t._v("Affliction")]),s("div",{staticClass:"filter"},[s("el-radio-group",{staticClass:"rg-filter",attrs:{size:"mini"},on:{change:function(e){return t.reload()}},model:{value:t.aff,callback:function(e){t.aff=e},expression:"aff"}},[s("el-radio-button",{attrs:{label:"affliction"}},[t._v("100%")]),s("el-radio-button",{attrs:{label:"_"}},[t._v("None")])],1)],1),s("div",{staticClass:"splitter"}),s("div",{staticClass:"title"},[t._v(" Rarity "),t.rarities.length<t.allRarities.length?s("span",[s("a",{staticClass:"toggle",on:{click:function(e){return t.toggleRarity()}}},[t._v("Reset")])]):t._e()]),s("div",{staticClass:"filter"},[s("el-checkbox-group",{staticClass:"cb-filter",attrs:{size:"mini"},model:{value:t.rarities,callback:function(e){t.rarities=e},expression:"rarities"}},t._l(t.allRarities,(function(e){return s("el-checkbox",{key:e,attrs:{label:e},on:{change:function(s){return t.toggleRarity(e)}}},[s("img",{staticClass:"icon-rarity",attrs:{src:"/dl-sim/pic/rarity/"+e+".png",alt:"K"}})])})),1)],1),s("div",{staticClass:"title"},[t._v(" Element "),t.elements.length<t.allElements.length?s("span",[s("a",{staticClass:"toggle",on:{click:function(e){return t.toggleElement()}}},[t._v("Reset")])]):t._e()]),s("div",{staticClass:"filter"},[s("el-checkbox-group",{staticClass:"cb-filter",attrs:{size:"mini"},model:{value:t.elements,callback:function(e){t.elements=e},expression:"elements"}},t._l(t.allElements,(function(e){return s("el-checkbox",{key:e,attrs:{label:e},on:{change:function(s){return t.toggleElement(e)}}},[s("img",{staticClass:"icon-element",attrs:{src:"/dl-sim/pic/icons/"+e+".png",alt:"K"}})])})),1)],1),s("div",{staticClass:"title"},[t._v(" Class "),t.weapons.length<t.allWeapons.length?s("span",[s("a",{staticClass:"toggle",on:{click:function(e){return t.toggleWeapon()}}},[t._v("Reset")])]):t._e()]),s("div",{staticClass:"filter"},[s("el-checkbox-group",{staticClass:"cb-filter",attrs:{size:"mini"},model:{value:t.weapons,callback:function(e){t.weapons=e},expression:"weapons"}},t._l(t.allWeapons,(function(e){return s("el-checkbox",{key:e,attrs:{label:e},on:{change:function(s){return t.toggleWeapon(e)}}},[s("img",{staticClass:"icon-weapon",attrs:{src:"/dl-sim/pic/icons/"+e+".png"}})])})),1)],1),s("div",{staticClass:"splitter"}),t._m(3)])])])},f=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{staticClass:"title h-40"},[s("div",{staticClass:"dib name"},[s("div",{staticClass:"dfac h-40",staticStyle:{"padding-left":"33px"}},[t._v("Adventurer")])]),s("div",{staticClass:"dib dps"},[s("div",{staticClass:"dfac h-40"},[t._v("DPS Distribution")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"the-brand"},[s("img",{staticClass:"brand",attrs:{src:"/dl-sim/logo-new.png"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"title custom-build"},[s("a",{attrs:{href:"https://wildshinobu.pythonanywhere.com/ui/dl_simc.html",target:"websim"}},[t._v("Custom Sim")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"filter footer"},[s("div",{staticClass:"links"},[s("a",{attrs:{href:"https://github.com/dl-stuff/dl/wiki"}},[t._v("About")]),s("a",{staticClass:"pl-15",attrs:{href:"https://github.com/dl-stuff/dl/issues/new"}},[t._v("Feedback")])])])}],p=(s("2397"),s("6762"),s("2fdb"),s("28a5"),s("6b54"),s("55dd"),s("ac6a"),s("96cf"),s("1da1")),h=s("d4ec"),m=s("bee2"),v=s("262e"),g=s("99de"),b=s("7e84"),w=s("9ab4"),y=s("60a3"),C=s("bc3a"),_=s.n(C),k=function(){function t(){Object(h["a"])(this,t)}return Object(m["a"])(t,null,[{key:"Get",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"json",s={method:"GET",url:t,responseType:e,timeout:36e4,headers:{"Access-Control-Allow-Origin":"*"}};return new Promise((function(t,e){_()(s).then((function(e){t(e.data)})).catch((function(t){e(t)}))}))}}]),t}();s("ac4d"),s("8a81"),s("5df3"),s("1c4c"),s("7f7f"),s("a481"),s("b54a");function x(t,e){var s;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(s=O(t))||e&&t&&"number"===typeof t.length){s&&(t=s);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,n=!0,o=!1;return{s:function(){s=t[Symbol.iterator]()},n:function(){var t=s.next();return n=t.done,t},e:function(t){o=!0,a=t},f:function(){try{n||null==s.return||s.return()}finally{if(o)throw a}}}}function O(t,e){if(t){if("string"===typeof t)return j(t,e);var s=Object.prototype.toString.call(t).slice(8,-1);return"Object"===s&&t.constructor&&(s=t.constructor.name),"Map"===s||"Set"===s?Array.from(t):"Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?j(t,e):void 0}}function j(t,e){(null==e||e>t.length)&&(e=t.length);for(var s=0,i=new Array(e);s<e;s++)i[s]=t[s];return i}var S=["x","fs","other","team","s1","s2","s3","s4","dx","ds"],R=function(){function t(e,s,i){Object(h["a"])(this,t),this.width=0,this.name=e,this.kind=e.split("_")[0],"fs"==this.kind.substr(0,2)?this.kind="fs":S.includes(this.kind)||(this.kind="other"),this.value=s,this.scale=i||0}return Object(m["a"])(t,[{key:"scaled",get:function(){return"team"===this.name?Math.round(this.value*this.scale/100):Math.round(this.value)}}]),t}(),E=function(){function t(e,s){Object(h["a"])(this,t),this.factors=[],this.filtered=[],this.filter=S.slice();var i,r=x(e);try{for(r.s();!(i=r.n()).done;){var a=i.value,n=a.split(":");this.factors.push(new R(n[0],parseInt(n[1])))}}catch(o){r.e(o)}finally{r.f()}this.team=new R("team",0,s),s>0&&this.factors.push(this.team),this.filterFactors()}return Object(m["a"])(t,[{key:"filterFactors",value:function(t){var e=this;this.filter=t||this.filter,this.filtered=this.factors.filter((function(t){return t.name&&e.filter.includes(t.kind)}))}},{key:"updateWidths",value:function(t){var e,s=x(this.filtered);try{for(s.s();!(e=s.n()).done;){var i=e.value;i.width=Math.floor(i.scaled/t*1e3)/10}}catch(r){s.e(r)}finally{s.f()}}},{key:"total",get:function(){return this.filtered.reduce((function(t,e){return t+e.scaled}),0)}}]),t}();function $(t,e){var s;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(s=P(t))||e&&t&&"number"===typeof t.length){s&&(t=s);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,n=!0,o=!1;return{s:function(){s=t[Symbol.iterator]()},n:function(){var t=s.next();return n=t.done,t},e:function(t){o=!0,a=t},f:function(){try{n||null==s.return||s.return()}finally{if(o)throw a}}}}function P(t,e){if(t){if("string"===typeof t)return M(t,e);var s=Object.prototype.toString.call(t).slice(8,-1);return"Object"===s&&t.constructor&&(s=t.constructor.name),"Map"===s||"Set"===s?Array.from(t):"Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?M(t,e):void 0}}function M(t,e){(null==e||e>t.length)&&(e=t.length);for(var s=0,i=new Array(e);s<e;s++)i[s]=t[s];return i}var T=["5","4","3"],A=["flame","water","wind","light","shadow"],D=["sword","blade","dagger","axe","lance","bow","wand","staff","gun"],I=s("2dd5"),W="<NO>",V={Blade:"Strength_%2B10%25_(Co-ability)",Wand:"Skill_Damage_%2B15%25_(Co-ability)",Dagger:"Critical_Rate_%2B10%25_(Co-ability)",Bow:"Skill_Haste_%2B15%25_(Co-ability)",Axe2:"Critical_Damage_%2B30%25_(Co-ability)",Dagger2:"Standard_Attack_Damage_%2B20%25"},F=function(){function t(e,s,i,r){Object(h["a"])(this,t),this.generic=!1,this.name=e,this.icon=s,this.cat=i||"character",this.link=r||encodeURI(e)}return Object(m["a"])(t,[{key:"src",get:function(){return"/dl-sim/pic/".concat(this.cat,"/").concat(this.icon,".png")}},{key:"wiki",get:function(){return this.link!=W?"https://dragalialost.gamepedia.com/".concat(this.link):""}},{key:"qual",get:function(){return I(this.name).replace(/[^0-9a-zA-Z ]/g,"").replace(/ /g,"_")}}]),t}(),L=function(){function t(e){Object(h["a"])(this,t),this.wps=[],this.coabs=[],this.share=[],this.stats=[],this.chara=new F(e[1],e[2]),this.id=this.chara.name,this.rarity=e[2].slice(-1),this.ele=e[3],this.wt=e[4],this.drg=new F(e[6],e[7],"dragon"),this.wep=new F(e[8],e[9],"weapon");for(var s=10;s<19;s+=2)this.wps.push(new F(e[s],e[s+1],"amulet"));for(var i=[],r=[],a=20;a<26;a+=2){var n=e[a];if(n){var o=e[a+1];o?i.push(new F(n,o)):r.push(new F(n,n,"coabs",V[n]))}}this.coabs=i.concat(r),"Weapon"===e[26]?this.share.push(new F(e[26],"weaponskill","icons",W)):this.share.push(new F(e[26],e[27])),e[28]&&this.share.push(new F(e[28],e[29])),this.condition=e[30],this.comment=e[31];var l,c=0,u=$(e[32].split(";"));try{for(u.s();!(l=u.n()).done;){var d=l.value;if(d){var f=d.split(":");"team"===f[0]?(c=parseFloat(f[1]),this.stats.push(new F((Math.round(10*c)/10).toFixed(1)+"%",f[0],"icons",W))):this.stats.push(new F(f[1],f[0],"icons",W))}}}catch(p){u.e(p)}finally{u.f()}this.dps=new E(e.slice(33),c)}return Object(m["a"])(t,null,[{key:"ParseCSV",value:function(e){var s,i=e.split(/\n/),r=[],a=$(i);try{for(a.s();!(s=a.n()).done;){var n=s.value;try{var o=n.split(",");if(o.length<26)continue;r.push(new t(o))}catch(l){continue}}}catch(c){a.e(c)}finally{a.f()}return r}},{key:"sort",value:function(t){return t.sort((function(t,e){return e.dps.total-t.dps.total}))}}]),t}(),U=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("div",{staticClass:"dib name h-70 mb-5"},[s("div",{staticClass:"avatar-slot-grid"},[s("popper",{attrs:{trigger:"hover",options:{placement:"top"}}},[s("div",{staticClass:"popper"},[t._v(t._s(t.source.chara.name))]),s("a",{staticClass:"d-f avatar",attrs:{slot:"reference",href:t.source.chara.wiki,target:"wiki"},slot:"reference"},[s("img",{attrs:{src:t.source.chara.src}})])]),s("popper",{attrs:{trigger:"hover",options:{placement:"top"}}},[s("div",{staticClass:"popper"},[t._v(t._s(t.source.drg.name))]),s("a",{attrs:{slot:"reference",href:t.source.drg.wiki,target:"wiki"},slot:"reference"},[s("img",{staticClass:"d-f wyrmprint",attrs:{src:t.source.drg.src}})])]),s("div"),t._l([0,1,2],(function(e){return s("popper",{key:"sl"+t.source.wps[e].name,attrs:{trigger:"hover",options:{placement:"top"}}},[s("div",{staticClass:"popper"},[t._v(t._s(t.source.wps[e].name))]),s("a",{attrs:{slot:"reference",href:t.source.wps[e].wiki,target:"wiki"},slot:"reference"},[s("img",{staticClass:"d-f wyrmprint",attrs:{src:t.source.wps[e].src}})])])})),s("div"),t._l(t.source.coabs,(function(e){return s("popper",{key:"ca"+e.name,attrs:{trigger:"hover",options:{placement:"top"}}},[s("div",{staticClass:"popper"},[t._v(t._s(e.name))]),s("a",{attrs:{slot:"reference",href:e.wiki,target:"wiki"},slot:"reference"},[s("img",{staticClass:"d-f wyrmprint",class:{generic:e.generic},attrs:{src:e.src}})])])})),s("popper",{attrs:{trigger:"hover",options:{placement:"top"}}},[s("div",{staticClass:"popper"},[t._v(t._s(t.source.wep.name))]),s("a",{attrs:{slot:"reference",href:t.source.wep.wiki,target:"wiki"},slot:"reference"},[s("img",{staticClass:"d-f wyrmprint",attrs:{src:t.source.wep.src}})])]),s("div"),s("div",{staticClass:"skillshare"},[s("img",{staticClass:"d-f",attrs:{src:"/dl-sim/pic/icons/amulet.png"}})]),t._l([3,4],(function(e){return s("popper",{key:"sl"+t.source.wps[e].name,attrs:{trigger:"hover",options:{placement:"top"}}},[s("div",{staticClass:"popper"},[t._v(t._s(t.source.wps[e].name))]),s("a",{attrs:{slot:"reference",href:t.source.wps[e].wiki,target:"wiki"},slot:"reference"},[s("img",{staticClass:"d-f wyrmprint",attrs:{src:t.source.wps[e].src}})])])})),s("div"),s("div",{staticClass:"skillshare"},[s("img",{staticClass:"d-f",attrs:{src:"/dl-sim/pic/icons/skillshare.png"}})]),t._l(t.source.share,(function(e,i){return s("popper",{key:"sh"+t.source.share[i].name,attrs:{trigger:"hover",options:{placement:"top"}}},[s("div",{staticClass:"popper"},[t._v("S"+t._s(i+3)+" "+t._s(t.source.share[i].name))]),s("a",{attrs:{slot:"reference",href:t.source.share[i].wiki,target:"wiki"},slot:"reference"},[s("img",{staticClass:"d-f wyrmprint",attrs:{src:t.source.share[i].src}})])])}))],2)]),s("div",{staticClass:"dib dps shift"},[s("a",{staticClass:"custom-sim-link",attrs:{href:"https://wildshinobu.pythonanywhere.com/ui/dl_simc.html?adv_name="+t.source.chara.qual,target:"websim"}},[s("span",[t._v("Customize")])]),s("div",{staticClass:"dps-holder"},[s("div",{staticClass:"factors mb-1"},[s("popper",{attrs:{trigger:"hover",options:{placement:"top"}}},[s("div",{staticClass:"popper dps-details"},t._l(t.source.dps.filtered,(function(e,i){return s("span",{key:"fa"+e.name},[s("span",{staticClass:"f-title"},[t._v(t._s((i>0?", ":"")+e.name)+":")]),t._v(" "+t._s(e.scaled)+" ")])})),0),s("div",{staticClass:"dps-progress",attrs:{slot:"reference"},slot:"reference"},[t._l(t.source.dps.filtered.filter((function(t){return t.width>0})),(function(t){return s("div",{key:t.factor,staticClass:"factor",class:"c-"+t.kind,style:{width:t.width+"%"}})})),s("div",{staticClass:"full"},[s("b",[t._v(t._s(t.source.dps.total))])])],2)])],1),s("div",{staticClass:"mb-1"},t._l(t.source.stats,(function(e){return s("popper",{key:"st"+e.icon,attrs:{trigger:"hover",options:{placement:"top"}}},[s("div",{staticClass:"popper"},[t._v(t._s(e.icon+": "+e.name))]),s("span",{staticClass:"stats",attrs:{slot:"reference"},slot:"reference"},[s("img",{staticClass:"stats-icon",attrs:{src:e.src}}),s("span",{staticClass:"stats-txt"},[t._v(t._s(e.name))])])])})),1),s("div",{staticClass:"comment"},[" "!=t.source.condition?s("span",[t._v("<"+t._s(t.source.condition)+">")]):t._e(),s("span",{domProps:{innerHTML:t._s(t.source.comment)}})])])])])},H=[],z=(s("c5f6"),s("526e")),B=s.n(z);y["b"].component("Popper",B.a);var G={name:"adv-component-full",props:{index:{type:Number},source:{type:L,default:function(){return{}}}}},N=G,q=Object(n["a"])(N,U,H,!1,null,null,null),J=q.exports,K=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{staticClass:"mb-10"},[s("div",{staticClass:"dib"},[s("a",{staticClass:"avatar-box",attrs:{href:"https://wildshinobu.pythonanywhere.com/ui/dl_simc.html?adv_name="+t.source.chara.qual,target:"websim"}},[s("a",{attrs:{slot:"reference",href:t.source.chara.wiki,target:"wiki"},slot:"reference"},[s("img",{staticClass:"avatar",attrs:{src:t.source.chara.src}})]),s("span",[t._v("Custom")])])]),s("div",{staticClass:"dib content"},[s("div",{staticClass:"mt-2"},[s("div",{staticClass:"dib chains"},[s("div",{staticClass:"dib"},[s("a",{attrs:{slot:"reference",href:t.source.drg.wiki},slot:"reference"},[s("img",{staticClass:"wyrmprint",attrs:{src:t.source.drg.src}})])]),s("div",{staticClass:"dib"},[s("a",{attrs:{slot:"reference",href:t.source.wep.wiki},slot:"reference"},[s("img",{staticClass:"wyrmprint",attrs:{src:t.source.wep.src}})])])]),s("div",{staticClass:"dib chains"},t._l(t.source.coabs,(function(t){return s("div",{key:"ca"+t.name,staticClass:"dib"},[s("a",{attrs:{slot:"reference",href:t.wiki,target:"wiki"},slot:"reference"},[s("img",{staticClass:"wyrmprint",class:{generic:t.generic},attrs:{src:t.src}})])])})),0),s("div",{staticClass:"dib chains"},t._l(t.source.share,(function(t){return s("div",{key:"sh"+t.name,staticClass:"dib"},[s("a",{attrs:{slot:"reference",href:t.wiki,target:"wiki"},slot:"reference"},[s("img",{staticClass:"wyrmprint",attrs:{src:t.src}})])])})),0),s("div",{staticClass:"dib"},t._l(t.source.wps,(function(t){return s("div",{key:"sl"+t.name,staticClass:"dib"},[s("a",{attrs:{slot:"reference",href:t.wiki},slot:"reference"},[s("img",{staticClass:"wyrmprint",attrs:{src:t.src}})])])})),0)]),s("div",{staticClass:"dib dps ml-4"},[s("div",{staticClass:"factors dps mb-1"},[t._l(t.source.dps.filtered,(function(t){return s("div",{key:"fa"+t.name,staticClass:"dps factor",class:"c-"+t.kind,style:{width:t.width+"%"}})})),s("div",{staticClass:"full"},[s("b",[t._v(t._s(t.source.dps.total))])])],2),s("div",t._l(t.source.stats,(function(e){return s("span",{key:"st"+e.icon,staticClass:"stats"},[s("img",{staticClass:"stats-icon",attrs:{src:e.src}}),s("span",{staticClass:"stats-txt"},[t._v(t._s(e.name))])])})),0)]),s("div",{staticClass:"mobile-comment"},[" "!=t.source.condition?s("div",[t._v("<"+t._s(t.source.condition)+">")]):t._e(),s("span",{domProps:{innerHTML:t._s(t.source.comment)}})])])])},Z=[],Q={name:"adv-component-mobile",props:{index:{type:Number},source:{type:L,default:function(){return{}}}}},X=Q,Y=Object(n["a"])(X,K,Z,!1,null,null,null),tt=Y.exports,et=s("89c1"),st=s.n(et);s("3b2b");function it(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Date,s=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0;s=s||{past:[{ceiling:60,text:"$seconds seconds ago"},{ceiling:3600,text:"$minutes minutes ago"},{ceiling:86400,text:"$hours hours ago"},{ceiling:2629744,text:"$days days ago"},{ceiling:31556926,text:"$months months ago"},{ceiling:null,text:"$years years ago"}],future:[{ceiling:60,text:"in $seconds seconds"},{ceiling:3600,text:"in $minutes minutes"},{ceiling:86400,text:"in $hours hours"},{ceiling:2629744,text:"in $days days"},{ceiling:31556926,text:"in $months months"},{ceiling:null,text:"in $years years"}]},i=i||[[31556926,"years"],[2629744,"months"],[86400,"days"],[3600,"hours"],[60,"minutes"],[1,"seconds"]];var r=(e.getTime()-t.getTime())/1e3,a="past";function n(){for(var t in s[a])if(null===s[a][t].ceiling||r<=s[a][t].ceiling)return s[a][t];return null}function o(){var t={},e=r;return i.forEach((function(s){var i=Math.floor(e/s[0]);e-=s[0]*i,t[s[1]]=i})),t}function l(t){var e=o(),s=t.text.replace(/\$(\w+)/g,(function(){return e[arguments[1]]}));return c(s,e)}function c(t,e){for(var s in e)if(1===e[s]){var i=new RegExp("\\b"+s+"\\b");t=t.replace(i,(function(){return arguments[0].replace(/s\b/g,"")}))}return t}return r<0&&(a="future",r=0-r),l(n())}function rt(t){var e=at();return function(){var s,i=Object(b["a"])(t);if(e){var r=Object(b["a"])(this).constructor;s=Reflect.construct(i,arguments,r)}else s=i.apply(this,arguments);return Object(g["a"])(this,s)}}function at(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var nt=function(t){Object(v["a"])(s,t);var e=rt(s);function s(){var t;return Object(h["a"])(this,s),t=e.apply(this,arguments),t.dpsEntry=J,t.dpsMobile=tt,t.category="180",t.aff="affliction",t.teamDPS=3e4,t.allRarities=T,t.prevRarities=T.slice(),t.rarities=T.slice(),t.allElements=A,t.prevElements=A.slice(),t.elements=A.slice(),t.allWeapons=D,t.prevWeapons=D.slice(),t.weapons=D.slice(),t.lastModifiedTime="",t.lastModifiedList=[],t.allCategories=S,t.dpsCategories=S.slice(),t.mobileView=!1,t.asideHidden=!0,t.loading=!0,t.cachedCsvUrl="",t.adventurers=[],t.filtered=[],t.rendered=[],t}return Object(m["a"])(s,[{key:"reload",value:function(){var t=Object(p["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,t.next=3,this.$nextTick();case 3:return t.next=5,this.reloadOps();case 5:return t.next=7,this.$nextTick();case 7:this.loading=!1;case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"reloadOps",value:function(){var t=Object(p["a"])(regeneratorRuntime.mark((function t(){var e,s,i=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.csvUrl===this.cachedCsvUrl){t.next=8;break}return t.next=3,this.loadCsv();case 3:if(e=t.sent,e){t.next=6;break}return t.abrupt("return");case 6:this.adventurers=L.ParseCSV(e),this.cachedCsvUrl=this.adventurers.length>0?this.csvUrl:"";case 8:this.adventurers.forEach((function(t){t.dps.team.value=i.teamDPS,t.dps.filterFactors(i.dpsCategories)})),this.filtered=L.sort(this.adventurers.filter(this.matched)),s=this.filtered.length>0?this.filtered[0].dps.total:0,this.adventurers.forEach((function(t){t.dps.updateWidths(s)})),localStorage.setItem("teamdps",this.teamDPS.toString()),localStorage.setItem("rarities",this.rarities.join()),localStorage.setItem("elements",this.elements.join()),localStorage.setItem("weapons",this.weapons.join());case 16:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"mounted",value:function(){var t=this;window.$dps=this,window.$http=k,localStorage.getItem("teamdps")&&(this.teamDPS=parseInt(localStorage.getItem("teamdps"),10));for(var e=0,s=["rarities","elements","weapons"];e<s.length;e++){var i=s[e],r=localStorage.getItem(i);r&&(this[i]=r.split(","))}window.onresize=function(){t.mobileView=window.outerWidth<=800},this.mobileView=window.outerWidth<=800,this.loadLastModified(),this.reload()}},{key:"toggleCheckboxGroup",value:function(t,e,s){return t&&0!==e.length?e.length===s.length?[t]:(e.includes(t)?(1===e.length&&(e=s.slice()),e.splice(e.indexOf(t),1)):e.length==s.length-1?e=[t]:e.push(t),e):s.slice()}},{key:"toggleRarity",value:function(t){this.rarities=this.toggleCheckboxGroup(t,this.prevRarities,this.allRarities),this.prevRarities=this.rarities,this.reload()}},{key:"toggleElement",value:function(t){this.elements=this.toggleCheckboxGroup(t,this.prevElements,this.allElements),this.prevElements=this.elements,this.reload()}},{key:"toggleWeapon",value:function(t){this.weapons=this.toggleCheckboxGroup(t,this.prevWeapons,this.allWeapons),this.prevWeapons=this.weapons,this.reload()}},{key:"toggleFactor",value:function(){var t=Object(p["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,t.next=3,this.$nextTick();case 3:return t.next=5,this.toggleFactorOps(e);case 5:return t.next=7,this.$nextTick();case 7:this.loading=!1;case 8:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"toggleFactorOps",value:function(){var t=Object(p["a"])(regeneratorRuntime.mark((function t(e){var s,i=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e?this.dpsCategories.includes(e)?(1===this.dpsCategories.length&&(this.dpsCategories=this.allCategories.slice()),this.dpsCategories.splice(this.dpsCategories.indexOf(e),1)):this.dpsCategories.length==this.allCategories.length-1?this.dpsCategories=[e]:this.dpsCategories.push(e):this.dpsCategories=this.allCategories.slice(),this.filtered.forEach((function(t){t.dps.filterFactors(i.dpsCategories)})),L.sort(this.filtered),s=this.filtered.length>0?this.filtered[0].dps.total:0,this.adventurers.forEach((function(t){t.dps.updateWidths(s)}));case 5:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"sleeep",value:function(t){return new Promise((function(e,s){setTimeout((function(){e(!0)}),t)}))}},{key:"loadCsv",value:function(){var t=Object(p["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,k.Get(this.csvUrl,"text");case 3:return e=t.sent,t.abrupt("return",e);case 7:return t.prev=7,t.t0=t["catch"](0),t.abrupt("return","");case 10:case"end":return t.stop()}}),t,this,[[0,7]])})));function e(){return t.apply(this,arguments)}return e}()},{key:"loadLastModified",value:function(){var t=Object(p["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,k.Get("/dl-sim/page/lastmodified.json","json");case 2:e=t.sent,this.lastModifiedTime=it(new Date(parseInt(e.timestamp))),this.lastModifiedList=e.message;case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"matched",value:function(t){return!(this.rarities.length>0&&!this.rarities.includes(t.rarity))&&(!(this.elements.length>0&&!this.elements.includes(t.ele))&&!(this.weapons.length>0&&!this.weapons.includes(t.wt)))}},{key:"csvUrl",get:function(){return"/dl-sim/page/".concat(this.category,"_").concat(this.aff,".csv")}}]),s}(y["b"]);nt=Object(w["a"])([Object(y["a"])({components:{Popper:B.a,"virtual-list":st.a}})],nt);var ot=nt,lt=ot,ct=(s("4195"),s("1390"),Object(n["a"])(lt,d,f,!1,null,null,null)),ut=ct.exports;i["default"].use(u["a"]);var dt=new u["a"]({routes:[{path:"/",name:"dps",component:ut},{path:"/about",name:"about",component:function(){return s.e("about").then(s.bind(null,"f820"))}}]}),ft=s("5c96"),pt=s.n(ft),ht=(s("0fae"),s("a101"),s("a584"));i["default"].config.productionTip=!1,i["default"].use(pt.a),i["default"].use(ht["a"],{config:{id:"UA-159918955-1"}}),new i["default"]({router:dt,render:function(t){return t(c)}}).$mount("#app")}});