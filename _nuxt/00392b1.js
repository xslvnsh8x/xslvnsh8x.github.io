(window.webpackJsonp=window.webpackJsonp||[]).push([[6,7],{231:function(t,n,e){var r=e(2);n.f=r},232:function(t,n,e){var content=e(239);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(31).default)("4822ccb9",content,!0,{sourceMap:!1})},233:function(t,n,e){"use strict";e.r(n);e(234),e(237);var r=e(1).a.extend({name:"CatalogListItem",props:{item:{type:Object,required:!0}},computed:{image:function(){return this.item.image},title:function(){return this.item.title},description:function(){return this.item.description},price:function(){return this.item.price}}}),o=(e(238),e(17)),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"item"},[e("div",{staticClass:"imageWrapper"},[e("img",{staticClass:"image",attrs:{src:t.image,alt:"item-pic"}})]),t._v(" "),e("div",{staticClass:"desc"},[e("h3",{staticClass:"price"},[t._v("\n      "+t._s(t.price)+"\n    ")]),t._v(" "),e("h4",{staticClass:"title"},[t._v("\n      "+t._s(t.title)+"\n    ")]),t._v(" "),e("button",{staticClass:"addBtn"},[t._v("\n      Добавить в корзину\n    ")])])])}),[],!1,null,"d4dc6a4a",null);n.default=component.exports},234:function(t,n,e){"use strict";var r=e(4),o=e(3),c=e(28),f=e(23),l=e(14),d=e(102),v=e(161),m=e(5),y=e(13),h=e(64),w=e(8),S=e(6),O=e(24),x=e(26),j=e(61),C=e(37),_=e(66),P=e(46),E=e(98),k=e(235),I=e(101),L=e(36),N=e(19),J=e(60),$=e(20),W=e(15),B=e(99),F=e(62),M=e(63),T=e(100),A=e(2),D=e(231),Q=e(236),z=e(38),G=e(27),H=e(65).forEach,K=F("hidden"),R="Symbol",U=A("toPrimitive"),V=G.set,X=G.getterFor(R),Y=Object.prototype,Z=o.Symbol,tt=c("JSON","stringify"),nt=L.f,et=N.f,it=k.f,ot=J.f,at=B("symbols"),st=B("op-symbols"),ct=B("string-to-symbol-registry"),ut=B("symbol-to-string-registry"),ft=B("wks"),lt=o.QObject,pt=!lt||!lt.prototype||!lt.prototype.findChild,vt=l&&m((function(){return 7!=_(et({},"a",{get:function(){return et(this,"a",{value:7}).a}})).a}))?function(t,n,e){var r=nt(Y,n);r&&delete Y[n],et(t,n,e),r&&t!==Y&&et(Y,n,r)}:et,mt=function(t,n){var symbol=at[t]=_(Z.prototype);return V(symbol,{type:R,tag:t,description:n}),l||(symbol.description=n),symbol},yt=v?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof Z},gt=function(t,n,e){t===Y&&gt(st,n,e),S(t);var r=j(n,!0);return S(e),y(at,r)?(e.enumerable?(y(t,K)&&t[K][r]&&(t[K][r]=!1),e=_(e,{enumerable:C(0,!1)})):(y(t,K)||et(t,K,C(1,{})),t[K][r]=!0),vt(t,r,e)):et(t,r,e)},bt=function(t,n){S(t);var e=x(n),r=P(e).concat(Ot(e));return H(r,(function(n){l&&!ht.call(e,n)||gt(t,n,e[n])})),t},ht=function(t){var n=j(t,!0),e=ot.call(this,n);return!(this===Y&&y(at,n)&&!y(st,n))&&(!(e||!y(this,n)||!y(at,n)||y(this,K)&&this[K][n])||e)},wt=function(t,n){var e=x(t),r=j(n,!0);if(e!==Y||!y(at,r)||y(st,r)){var o=nt(e,r);return!o||!y(at,r)||y(e,K)&&e[K][r]||(o.enumerable=!0),o}},St=function(t){var n=it(x(t)),e=[];return H(n,(function(t){y(at,t)||y(M,t)||e.push(t)})),e},Ot=function(t){var n=t===Y,e=it(n?st:x(t)),r=[];return H(e,(function(t){!y(at,t)||n&&!y(Y,t)||r.push(at[t])})),r};(d||(W((Z=function(){if(this instanceof Z)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,n=T(t),e=function(t){this===Y&&e.call(st,t),y(this,K)&&y(this[K],n)&&(this[K][n]=!1),vt(this,n,C(1,t))};return l&&pt&&vt(Y,n,{configurable:!0,set:e}),mt(n,t)}).prototype,"toString",(function(){return X(this).tag})),W(Z,"withoutSetter",(function(t){return mt(T(t),t)})),J.f=ht,N.f=gt,L.f=wt,E.f=k.f=St,I.f=Ot,D.f=function(t){return mt(A(t),t)},l&&(et(Z.prototype,"description",{configurable:!0,get:function(){return X(this).description}}),f||W(Y,"propertyIsEnumerable",ht,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!d,sham:!d},{Symbol:Z}),H(P(ft),(function(t){Q(t)})),r({target:R,stat:!0,forced:!d},{for:function(t){var n=String(t);if(y(ct,n))return ct[n];var symbol=Z(n);return ct[n]=symbol,ut[symbol]=n,symbol},keyFor:function(t){if(!yt(t))throw TypeError(t+" is not a symbol");if(y(ut,t))return ut[t]},useSetter:function(){pt=!0},useSimple:function(){pt=!1}}),r({target:"Object",stat:!0,forced:!d,sham:!l},{create:function(t,n){return void 0===n?_(t):bt(_(t),n)},defineProperty:gt,defineProperties:bt,getOwnPropertyDescriptor:wt}),r({target:"Object",stat:!0,forced:!d},{getOwnPropertyNames:St,getOwnPropertySymbols:Ot}),r({target:"Object",stat:!0,forced:m((function(){I.f(1)}))},{getOwnPropertySymbols:function(t){return I.f(O(t))}}),tt)&&r({target:"JSON",stat:!0,forced:!d||m((function(){var symbol=Z();return"[null]"!=tt([symbol])||"{}"!=tt({a:symbol})||"{}"!=tt(Object(symbol))}))},{stringify:function(t,n,e){for(var r,o=[t],c=1;arguments.length>c;)o.push(arguments[c++]);if(r=n,(w(n)||void 0!==t)&&!yt(t))return h(n)||(n=function(t,n){if("function"==typeof r&&(n=r.call(this,t,n)),!yt(n))return n}),o[1]=n,tt.apply(null,o)}});Z.prototype[U]||$(Z.prototype,U,Z.prototype.valueOf),z(Z,R),M[K]=!0},235:function(t,n,e){var r=e(26),o=e(98).f,c={}.toString,f="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return f&&"[object Window]"==c.call(t)?function(t){try{return o(t)}catch(t){return f.slice()}}(t):o(r(t))}},236:function(t,n,e){var path=e(160),r=e(13),o=e(231),c=e(19).f;t.exports=function(t){var n=path.Symbol||(path.Symbol={});r(n,t)||c(n,t,{value:o.f(t)})}},237:function(t,n,e){"use strict";var r=e(4),o=e(14),c=e(3),f=e(13),l=e(8),d=e(19).f,v=e(159),m=c.Symbol;if(o&&"function"==typeof m&&(!("description"in m.prototype)||void 0!==m().description)){var y={},h=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),n=this instanceof h?new m(t):void 0===t?m():m(t);return""===t&&(y[n]=!0),n};v(h,m);var w=h.prototype=m.prototype;w.constructor=h;var S=w.toString,O="Symbol(test)"==String(m("test")),x=/^Symbol\((.*)\)[^)]+$/;d(w,"description",{configurable:!0,get:function(){var symbol=l(this)?this.valueOf():this,t=S.call(symbol);if(f(y,symbol))return"";var desc=O?t.slice(7,-1):t.replace(x,"$1");return""===desc?void 0:desc}}),r({global:!0,forced:!0},{Symbol:h})}},238:function(t,n,e){"use strict";e(232)},239:function(t,n,e){var r=e(30)(!1);r.push([t.i,"\n.item[data-v-d4dc6a4a] {\n  display: grid;\n  grid-template-rows: 250px auto;\n}\n.imageWrapper[data-v-d4dc6a4a] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.image[data-v-d4dc6a4a] {\n  height: 250px;\n  object-fit: cover;\n}\n.desc[data-v-d4dc6a4a] {\n  display: grid;\n  grid-template-rows: 50px 70px 1fr;\n  justify-items: start;\n}\n.title[data-v-d4dc6a4a] {\n  font-weight: 500;\n}\n.addBtn[data-v-d4dc6a4a] {\n}\n",""]),t.exports=r},240:function(t,n,e){var content=e(242);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(31).default)("4f49f8a8",content,!0,{sourceMap:!1})},241:function(t,n,e){"use strict";e(240)},242:function(t,n,e){var r=e(30)(!1);r.push([t.i,"\n.wrapper[data-v-9d0bf904] {\n  display: flex;\n  flex-direction: column;\n}\n.list[data-v-9d0bf904] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 314px);\n  justify-content: center;\n  gap: 24px;\n}\n",""]),t.exports=r},245:function(t,n,e){"use strict";e.r(n);var r=e(1),o=e(233),c=r.a.extend({name:"CatalogList",components:{CatalogListItem:o.default},props:{items:{type:Array,default:function(){return[]}}}}),f=(e(241),e(17)),component=Object(f.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"wrapper"},[e("h2",[t._v("Категория товаров 1")]),t._v(" "),e("div",{staticClass:"list"},t._l(t.items,(function(t){return e("CatalogListItem",{key:t.id,attrs:{item:t}})})),1)])}),[],!1,null,"9d0bf904",null);n.default=component.exports;installComponents(component,{CatalogListItem:e(233).default})}}]);