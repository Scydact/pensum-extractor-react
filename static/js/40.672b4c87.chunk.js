"use strict";(self.webpackChunkpensum_extractor_react=self.webpackChunkpensum_extractor_react||[]).push([[40],{40:function(e,t,r){r.r(t),r.d(t,{default:function(){return p},extractPensum:function(){return h},legactExtractPensum:function(){return v}});var n=r(381),a=r(824),o=r.n(a),c=r(125),i=["","https://api.allorigins.win/raw?url=","https://yacdn.org/serve/","https://cors-anywhere.herokuapp.com/","https://crossorigin.me/","https://cors-proxy.htmldriven.com/?url=","https://thingproxy.freeboard.io/fetch/","http://www.whateverorigin.org/get?url="];function s(e){return u.apply(this,arguments)}function u(){return u=(0,n.Z)(o().mark((function e(t){var r,n,a,c,s,u,l,p=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=p.length>1&&void 0!==p[1]?p[1]:{},n=p.length>2?p[2]:void 0,a=p.length>3&&void 0!==p[3]?p[3]:i,c=0,s=o().mark((function e(){var i,s,l,p,d,h,v,f;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=a[c],s=(new Date).getTime(),l=i+t,p=new AbortController,d=p.signal,r.signal=d,h=setTimeout((function(){p.abort(),console.warn("Timed out!")}),4e3),e.prev=7,n&&n("attempt",i,c),e.next=11,fetch(l,r);case 11:if(u=e.sent,n&&n("request",i,c),clearTimeout(h),!u.ok){e.next=24;break}return v=(new Date).getTime(),console.info("CORS proxy '".concat(l,"' succeeded in ").concat(v-s," ms.'")),n&&n("success",i,c),e.next=20,u.text();case 20:return e.t0=e.sent,e.abrupt("return",{v:e.t0});case 24:throw new Error("Response was not OK!");case 25:e.next=34;break;case 27:e.prev=27,e.t1=e.catch(7),clearTimeout(h),f=(new Date).getTime(),console.warn("CORS proxy '".concat(i,"' failed in ").concat(f-s,"ms.'")),console.warn(e.t1),n&&n("error",i,c);case 34:return e.prev=34,++c,e.finish(34);case 37:case"end":return e.stop()}}),e,null,[[7,27,34,37]])}));case 5:if(!(c<a.length)){e.next=12;break}return e.delegateYield(s(),"t0",7);case 7:if("object"!==typeof(l=e.t0)){e.next=10;break}return e.abrupt("return",l.v);case 10:e.next=5;break;case 12:return e.abrupt("return",null);case 13:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}var l=r(655);function p(e,t){return d.apply(this,arguments)}function d(){return d=(0,n.Z)(o().mark((function e(t,r){var n,a,c,i,u,l,p,d=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=d.length>2&&void 0!==d[2]?d[2]:"https://servicios.unapec.edu.do/pensum/Main/Detalles/",a=n+t,c={cache:"force-cache"},e.next=5,s(a,c,r);case 5:if(i=e.sent){e.next=8;break}return e.abrupt("return",null);case 8:return u=new DOMParser,l=u.parseFromString(i,"text/xml"),p=h(l,a),e.abrupt("return",p);case 12:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}function h(e,t){try{var r=v(e),n=(0,c.qi)(r,"unapec");return n.fetchDate=(0,l.kN)(new Date),n.src={type:"online",date:n.fetchDate,url:t},n}catch(a){return console.error(a),null}}function v(e){var t,r,n,a,o,c,i={carrera:"",codigo:"",vigencia:"",infoCarrera:[],cuats:[],version:2};if(0===e.getElementsByClassName("contPensum").length||e.getElementsByClassName("contPensum")[0].children.length<2)throw new Error("Document has no pensum inside!");var s=e.getElementsByClassName("cabPensum")[0];if(!s)throw new Error("Unable to get table element.");i.carrera=(null===s||void 0===s||null===(t=s.firstElementChild)||void 0===t||null===(r=t.textContent)||void 0===r?void 0:r.trim())||"";var u=s.getElementsByTagName("p")[0].children;if(i.codigo=(null===(n=u[0])||void 0===n||null===(a=n.textContent)||void 0===a?void 0:a.trim())||"",i.vigencia=(null===(o=u[1])||void 0===o||null===(c=o.textContent)||void 0===c?void 0:c.trim())||"",""===i.carrera)throw new Error("Unable to get pensum name");if(""===i.codigo)throw new Error("Unable to get pensum code");for(var l=e.getElementsByClassName("infoCarrera")[0].children,p=0;p<l.length;++p){var d,h,v;i.infoCarrera.push((null===(d=l[p])||void 0===d||null===(h=d.textContent)||void 0===h||null===(v=h.replace(/\n/g," "))||void 0===v?void 0:v.trim())||"")}for(var f=e.getElementsByClassName("cuatrim"),m=0;m<f.length;++m){for(var g=f[m].children,w=[],x=1;x<g.length;++x){var b,C,y,E,k,D,T={codigo:"",asignatura:"",creditos:0},N=[],B=[];T.prereq=N,T.prereqExtra=B;var P=g[x].children;if(T.codigo=(null===(b=P[0])||void 0===b||null===(C=b.textContent)||void 0===C?void 0:C.trim())||"",T.asignatura=(null===(y=P[1])||void 0===y||null===(E=y.textContent)||void 0===E?void 0:E.trim())||"",T.creditos=parseFloat((null===(k=P[2])||void 0===k?void 0:k.textContent)||"-Infinity"),""===T.codigo)throw new Error("Unable to get code for mat ".concat(T.asignatura," @ cuat ").concat(m+1));if(""===T.asignatura)throw new Error("Unable to get name for mat ".concat(T.codigo," @ cuat ").concat(m+1));if(T.creditos===-1/0)throw new Error("Unable to get creds for mat ".concat(T.codigo,":").concat(T.asignatura," @ cuat ").concat(m+1));for(var U=((null===(D=P[3])||void 0===D?void 0:D.textContent)||"").replace(/\n/g,",").split(",").map((function(e){return e.trim()})).filter((function(e){return""!==e})),q=0;q<U.length;q++){var O=U[q];O.length<8?N.push(O):B.push(O)}w.push(T)}i.cuats.push(w)}return i}}}]);
//# sourceMappingURL=40.672b4c87.chunk.js.map