(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["referencias"],{"2d68":function(t,n,a){},"3cd8":function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"container-fluid banner-interno"},[a("div",{staticClass:"banner-interno__fondo",style:{"background-image":"url("+t.globalData.fondoBannerPrincipal+")"}}),a("div",{staticClass:"container"},[a("div",{staticClass:"banner-interno__titulo py-5"},[t.icono.length?a("div",{staticClass:"banner-interno__titulo__icono me-3"},[a("i",{class:t.icono})]):t._e(),a("h1",{staticClass:"h3 mb-0"},[t._v(t._s(t.titulo))])])])])},i=[],r=a("cdd9"),c={name:"BannerInterno",props:{icono:{type:String,default:""},titulo:{type:String,default:""}},data:function(){return{globalData:r["c"]}}},s=c,o=(a("d75e"),a("2877")),l=Object(o["a"])(s,e,i,!1,null,"3f7f20c1",null);n["a"]=l.exports},7013:function(t,n,a){"use strict";a("ac63")},"7c1e":function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"curso-main-container referencias"},[a("BannerInterno",{attrs:{icono:"fas fa-book",titulo:"Referencias bibliográficas"}}),a("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5 mb-5"},t._l(t.orderedData,(function(n){return a("div",{key:n.link,staticClass:"referencias__item"},[t._v(" "+t._s(n.referencia)+" "),n.link?a("a",{attrs:{href:n.link,target:"_blank"}},[t._v(t._s(n.link)+" "),a("i",{staticClass:"fas fa-external-link-alt"})]):t._e(),a("hr",{staticClass:"my-3"})])})),0)],1)},i=[],r=a("2909"),c=(a("1276"),a("ac1f"),a("cdd9")),s=a("3cd8"),o={name:"Referencias",components:{BannerInterno:s["a"]},data:function(){return{referenciasData:c["f"]}},computed:{orderedData:function(){var t=Object(r["a"])(this.referenciasData).sort((function(t,n){var a=t.referencia.split(" ")[0],e=n.referencia.split(" ")[0];return a<e?-1:a>e?1:0}));return t}}},l=o,u=(a("7013"),a("2877")),f=Object(u["a"])(l,e,i,!1,null,"02c70b8e",null);n["default"]=f.exports},ac63:function(t,n,a){},d75e:function(t,n,a){"use strict";a("2d68")}}]);
//# sourceMappingURL=referencias.9443176e.js.map