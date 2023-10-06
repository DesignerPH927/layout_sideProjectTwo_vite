import{g as Me,r as $e,a as Be,b as ke,c as je,d as We,e as Ve}from"./openModal-1f5b7380.js";var ee={},Ie={get exports(){return ee},set exports(t){ee=t}},M="top",W="bottom",V="right",$="left",Dt="auto",yt=[M,W,V,$],st="start",dt="end",pe="clippingParents",kt="viewport",lt="popper",ue="reference",Mt=yt.reduce(function(t,e){return t.concat([e+"-"+st,e+"-"+dt])},[]),jt=[].concat(yt,[Dt]).reduce(function(t,e){return t.concat([e,e+"-"+st,e+"-"+dt])},[]),le="beforeRead",de="read",ve="afterRead",he="beforeMain",me="main",ge="afterMain",ye="beforeWrite",be="write",we="afterWrite",Oe=[le,de,ve,he,me,ge,ye,be,we];function F(t){return t?(t.nodeName||"").toLowerCase():null}function I(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function ct(t){var e=I(t).Element;return t instanceof e||t instanceof Element}function H(t){var e=I(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function Wt(t){if(typeof ShadowRoot>"u")return!1;var e=I(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function He(t){var e=t.state;Object.keys(e.elements).forEach(function(r){var o=e.styles[r]||{},n=e.attributes[r]||{},a=e.elements[r];!H(a)||!F(a)||(Object.assign(a.style,o),Object.keys(n).forEach(function(c){var i=n[c];i===!1?a.removeAttribute(c):a.setAttribute(c,i===!0?"":i)}))})}function qe(t){var e=t.state,r={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,r.popper),e.styles=r,e.elements.arrow&&Object.assign(e.elements.arrow.style,r.arrow),function(){Object.keys(e.elements).forEach(function(o){var n=e.elements[o],a=e.attributes[o]||{},c=Object.keys(e.styles.hasOwnProperty(o)?e.styles[o]:r[o]),i=c.reduce(function(s,u){return s[u]="",s},{});!H(n)||!F(n)||(Object.assign(n.style,i),Object.keys(a).forEach(function(s){n.removeAttribute(s)}))})}}const Vt={name:"applyStyles",enabled:!0,phase:"write",fn:He,effect:qe,requires:["computeStyles"]};function K(t){return t.split("-")[0]}var at=Math.max,Ct=Math.min,vt=Math.round;function $t(){var t=navigator.userAgentData;return t!=null&&t.brands&&Array.isArray(t.brands)?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function Ee(){return!/^((?!chrome|android).)*safari/i.test($t())}function ht(t,e,r){e===void 0&&(e=!1),r===void 0&&(r=!1);var o=t.getBoundingClientRect(),n=1,a=1;e&&H(t)&&(n=t.offsetWidth>0&&vt(o.width)/t.offsetWidth||1,a=t.offsetHeight>0&&vt(o.height)/t.offsetHeight||1);var c=ct(t)?I(t):window,i=c.visualViewport,s=!Ee()&&r,u=(o.left+(s&&i?i.offsetLeft:0))/n,f=(o.top+(s&&i?i.offsetTop:0))/a,g=o.width/n,v=o.height/a;return{width:g,height:v,top:f,right:u+g,bottom:f+v,left:u,x:u,y:f}}function It(t){var e=ht(t),r=t.offsetWidth,o=t.offsetHeight;return Math.abs(e.width-r)<=1&&(r=e.width),Math.abs(e.height-o)<=1&&(o=e.height),{x:t.offsetLeft,y:t.offsetTop,width:r,height:o}}function xe(t,e){var r=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(r&&Wt(r)){var o=e;do{if(o&&t.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function tt(t){return I(t).getComputedStyle(t)}function Ye(t){return["table","td","th"].indexOf(F(t))>=0}function rt(t){return((ct(t)?t.ownerDocument:t.document)||window.document).documentElement}function Nt(t){return F(t)==="html"?t:t.assignedSlot||t.parentNode||(Wt(t)?t.host:null)||rt(t)}function re(t){return!H(t)||tt(t).position==="fixed"?null:t.offsetParent}function Ue(t){var e=/firefox/i.test($t()),r=/Trident/i.test($t());if(r&&H(t)){var o=tt(t);if(o.position==="fixed")return null}var n=Nt(t);for(Wt(n)&&(n=n.host);H(n)&&["html","body"].indexOf(F(n))<0;){var a=tt(n);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||e&&a.willChange==="filter"||e&&a.filter&&a.filter!=="none")return n;n=n.parentNode}return null}function At(t){for(var e=I(t),r=re(t);r&&Ye(r)&&tt(r).position==="static";)r=re(r);return r&&(F(r)==="html"||F(r)==="body"&&tt(r).position==="static")?e:r||Ue(t)||e}function Ht(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function Et(t,e,r){return at(t,Ct(e,r))}function Ke(t,e,r){var o=Et(t,e,r);return o>r?r:o}function Ae(){return{top:0,right:0,bottom:0,left:0}}function _e(t){return Object.assign({},Ae(),t)}function Te(t,e){return e.reduce(function(r,o){return r[o]=t,r},{})}var Fe=function(e,r){return e=typeof e=="function"?e(Object.assign({},r.rects,{placement:r.placement})):e,_e(typeof e!="number"?e:Te(e,yt))};function Xe(t){var e,r=t.state,o=t.name,n=t.options,a=r.elements.arrow,c=r.modifiersData.popperOffsets,i=K(r.placement),s=Ht(i),u=[$,V].indexOf(i)>=0,f=u?"height":"width";if(!(!a||!c)){var g=Fe(n.padding,r),v=It(a),l=s==="y"?M:$,E=s==="y"?W:V,h=r.rects.reference[f]+r.rects.reference[s]-c[s]-r.rects.popper[f],m=c[s]-r.rects.reference[s],O=At(a),_=O?s==="y"?O.clientHeight||0:O.clientWidth||0:0,T=h/2-m/2,d=g[l],y=_-v[f]-g[E],b=_/2-v[f]/2+T,A=Et(d,b,y),C=s;r.modifiersData[o]=(e={},e[C]=A,e.centerOffset=A-b,e)}}function ze(t){var e=t.state,r=t.options,o=r.element,n=o===void 0?"[data-popper-arrow]":o;n!=null&&(typeof n=="string"&&(n=e.elements.popper.querySelector(n),!n)||xe(e.elements.popper,n)&&(e.elements.arrow=n))}const Pe={name:"arrow",enabled:!0,phase:"main",fn:Xe,effect:ze,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function mt(t){return t.split("-")[1]}var Ge={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Qe(t,e){var r=t.x,o=t.y,n=e.devicePixelRatio||1;return{x:vt(r*n)/n||0,y:vt(o*n)/n||0}}function ne(t){var e,r=t.popper,o=t.popperRect,n=t.placement,a=t.variation,c=t.offsets,i=t.position,s=t.gpuAcceleration,u=t.adaptive,f=t.roundOffsets,g=t.isFixed,v=c.x,l=v===void 0?0:v,E=c.y,h=E===void 0?0:E,m=typeof f=="function"?f({x:l,y:h}):{x:l,y:h};l=m.x,h=m.y;var O=c.hasOwnProperty("x"),_=c.hasOwnProperty("y"),T=$,d=M,y=window;if(u){var b=At(r),A="clientHeight",C="clientWidth";if(b===I(r)&&(b=rt(r),tt(b).position!=="static"&&i==="absolute"&&(A="scrollHeight",C="scrollWidth")),b=b,n===M||(n===$||n===V)&&a===dt){d=W;var D=g&&b===y&&y.visualViewport?y.visualViewport.height:b[A];h-=D-o.height,h*=s?1:-1}if(n===$||(n===M||n===W)&&a===dt){T=V;var x=g&&b===y&&y.visualViewport?y.visualViewport.width:b[C];l-=x-o.width,l*=s?1:-1}}var N=Object.assign({position:i},u&&Ge),B=f===!0?Qe({x:l,y:h},I(r)):{x:l,y:h};if(l=B.x,h=B.y,s){var L;return Object.assign({},N,(L={},L[d]=_?"0":"",L[T]=O?"0":"",L.transform=(y.devicePixelRatio||1)<=1?"translate("+l+"px, "+h+"px)":"translate3d("+l+"px, "+h+"px, 0)",L))}return Object.assign({},N,(e={},e[d]=_?h+"px":"",e[T]=O?l+"px":"",e.transform="",e))}function Je(t){var e=t.state,r=t.options,o=r.gpuAcceleration,n=o===void 0?!0:o,a=r.adaptive,c=a===void 0?!0:a,i=r.roundOffsets,s=i===void 0?!0:i,u={placement:K(e.placement),variation:mt(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:n,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,ne(Object.assign({},u,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:c,roundOffsets:s})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,ne(Object.assign({},u,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const qt={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Je,data:{}};var Tt={passive:!0};function Ze(t){var e=t.state,r=t.instance,o=t.options,n=o.scroll,a=n===void 0?!0:n,c=o.resize,i=c===void 0?!0:c,s=I(e.elements.popper),u=[].concat(e.scrollParents.reference,e.scrollParents.popper);return a&&u.forEach(function(f){f.addEventListener("scroll",r.update,Tt)}),i&&s.addEventListener("resize",r.update,Tt),function(){a&&u.forEach(function(f){f.removeEventListener("scroll",r.update,Tt)}),i&&s.removeEventListener("resize",r.update,Tt)}}const Yt={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Ze,data:{}};var tr={left:"right",right:"left",bottom:"top",top:"bottom"};function Pt(t){return t.replace(/left|right|bottom|top/g,function(e){return tr[e]})}var er={start:"end",end:"start"};function oe(t){return t.replace(/start|end/g,function(e){return er[e]})}function Ut(t){var e=I(t),r=e.pageXOffset,o=e.pageYOffset;return{scrollLeft:r,scrollTop:o}}function Kt(t){return ht(rt(t)).left+Ut(t).scrollLeft}function rr(t,e){var r=I(t),o=rt(t),n=r.visualViewport,a=o.clientWidth,c=o.clientHeight,i=0,s=0;if(n){a=n.width,c=n.height;var u=Ee();(u||!u&&e==="fixed")&&(i=n.offsetLeft,s=n.offsetTop)}return{width:a,height:c,x:i+Kt(t),y:s}}function nr(t){var e,r=rt(t),o=Ut(t),n=(e=t.ownerDocument)==null?void 0:e.body,a=at(r.scrollWidth,r.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),c=at(r.scrollHeight,r.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),i=-o.scrollLeft+Kt(t),s=-o.scrollTop;return tt(n||r).direction==="rtl"&&(i+=at(r.clientWidth,n?n.clientWidth:0)-a),{width:a,height:c,x:i,y:s}}function Ft(t){var e=tt(t),r=e.overflow,o=e.overflowX,n=e.overflowY;return/auto|scroll|overlay|hidden/.test(r+n+o)}function Ce(t){return["html","body","#document"].indexOf(F(t))>=0?t.ownerDocument.body:H(t)&&Ft(t)?t:Ce(Nt(t))}function xt(t,e){var r;e===void 0&&(e=[]);var o=Ce(t),n=o===((r=t.ownerDocument)==null?void 0:r.body),a=I(o),c=n?[a].concat(a.visualViewport||[],Ft(o)?o:[]):o,i=e.concat(c);return n?i:i.concat(xt(Nt(c)))}function Bt(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function or(t,e){var r=ht(t,!1,e==="fixed");return r.top=r.top+t.clientTop,r.left=r.left+t.clientLeft,r.bottom=r.top+t.clientHeight,r.right=r.left+t.clientWidth,r.width=t.clientWidth,r.height=t.clientHeight,r.x=r.left,r.y=r.top,r}function ie(t,e,r){return e===kt?Bt(rr(t,r)):ct(e)?or(e,r):Bt(nr(rt(t)))}function ir(t){var e=xt(Nt(t)),r=["absolute","fixed"].indexOf(tt(t).position)>=0,o=r&&H(t)?At(t):t;return ct(o)?e.filter(function(n){return ct(n)&&xe(n,o)&&F(n)!=="body"}):[]}function ar(t,e,r,o){var n=e==="clippingParents"?ir(t):[].concat(e),a=[].concat(n,[r]),c=a[0],i=a.reduce(function(s,u){var f=ie(t,u,o);return s.top=at(f.top,s.top),s.right=Ct(f.right,s.right),s.bottom=Ct(f.bottom,s.bottom),s.left=at(f.left,s.left),s},ie(t,c,o));return i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}function De(t){var e=t.reference,r=t.element,o=t.placement,n=o?K(o):null,a=o?mt(o):null,c=e.x+e.width/2-r.width/2,i=e.y+e.height/2-r.height/2,s;switch(n){case M:s={x:c,y:e.y-r.height};break;case W:s={x:c,y:e.y+e.height};break;case V:s={x:e.x+e.width,y:i};break;case $:s={x:e.x-r.width,y:i};break;default:s={x:e.x,y:e.y}}var u=n?Ht(n):null;if(u!=null){var f=u==="y"?"height":"width";switch(a){case st:s[u]=s[u]-(e[f]/2-r[f]/2);break;case dt:s[u]=s[u]+(e[f]/2-r[f]/2);break}}return s}function gt(t,e){e===void 0&&(e={});var r=e,o=r.placement,n=o===void 0?t.placement:o,a=r.strategy,c=a===void 0?t.strategy:a,i=r.boundary,s=i===void 0?pe:i,u=r.rootBoundary,f=u===void 0?kt:u,g=r.elementContext,v=g===void 0?lt:g,l=r.altBoundary,E=l===void 0?!1:l,h=r.padding,m=h===void 0?0:h,O=_e(typeof m!="number"?m:Te(m,yt)),_=v===lt?ue:lt,T=t.rects.popper,d=t.elements[E?_:v],y=ar(ct(d)?d:d.contextElement||rt(t.elements.popper),s,f,c),b=ht(t.elements.reference),A=De({reference:b,element:T,strategy:"absolute",placement:n}),C=Bt(Object.assign({},T,A)),D=v===lt?C:b,x={top:y.top-D.top+O.top,bottom:D.bottom-y.bottom+O.bottom,left:y.left-D.left+O.left,right:D.right-y.right+O.right},N=t.modifiersData.offset;if(v===lt&&N){var B=N[n];Object.keys(x).forEach(function(L){var X=[V,W].indexOf(L)>=0?1:-1,z=[M,W].indexOf(L)>=0?"y":"x";x[L]+=B[z]*X})}return x}function sr(t,e){e===void 0&&(e={});var r=e,o=r.placement,n=r.boundary,a=r.rootBoundary,c=r.padding,i=r.flipVariations,s=r.allowedAutoPlacements,u=s===void 0?jt:s,f=mt(o),g=f?i?Mt:Mt.filter(function(E){return mt(E)===f}):yt,v=g.filter(function(E){return u.indexOf(E)>=0});v.length===0&&(v=g);var l=v.reduce(function(E,h){return E[h]=gt(t,{placement:h,boundary:n,rootBoundary:a,padding:c})[K(h)],E},{});return Object.keys(l).sort(function(E,h){return l[E]-l[h]})}function cr(t){if(K(t)===Dt)return[];var e=Pt(t);return[oe(t),e,oe(e)]}function fr(t){var e=t.state,r=t.options,o=t.name;if(!e.modifiersData[o]._skip){for(var n=r.mainAxis,a=n===void 0?!0:n,c=r.altAxis,i=c===void 0?!0:c,s=r.fallbackPlacements,u=r.padding,f=r.boundary,g=r.rootBoundary,v=r.altBoundary,l=r.flipVariations,E=l===void 0?!0:l,h=r.allowedAutoPlacements,m=e.options.placement,O=K(m),_=O===m,T=s||(_||!E?[Pt(m)]:cr(m)),d=[m].concat(T).reduce(function(et,q){return et.concat(K(q)===Dt?sr(e,{placement:q,boundary:f,rootBoundary:g,padding:u,flipVariations:E,allowedAutoPlacements:h}):q)},[]),y=e.rects.reference,b=e.rects.popper,A=new Map,C=!0,D=d[0],x=0;x<d.length;x++){var N=d[x],B=K(N),L=mt(N)===st,X=[M,W].indexOf(B)>=0,z=X?"width":"height",P=gt(e,{placement:N,boundary:f,rootBoundary:g,altBoundary:v,padding:u}),k=X?L?V:$:L?W:M;y[z]>b[z]&&(k=Pt(k));var G=Pt(k),Q=[];if(a&&Q.push(P[B]<=0),i&&Q.push(P[k]<=0,P[G]<=0),Q.every(function(et){return et})){D=N,C=!1;break}A.set(N,Q)}if(C)for(var ft=E?3:1,bt=function(q){var ot=d.find(function(ut){var J=A.get(ut);if(J)return J.slice(0,q).every(function(wt){return wt})});if(ot)return D=ot,"break"},nt=ft;nt>0;nt--){var pt=bt(nt);if(pt==="break")break}e.placement!==D&&(e.modifiersData[o]._skip=!0,e.placement=D,e.reset=!0)}}const Ne={name:"flip",enabled:!0,phase:"main",fn:fr,requiresIfExists:["offset"],data:{_skip:!1}};function ae(t,e,r){return r===void 0&&(r={x:0,y:0}),{top:t.top-e.height-r.y,right:t.right-e.width+r.x,bottom:t.bottom-e.height+r.y,left:t.left-e.width-r.x}}function se(t){return[M,V,W,$].some(function(e){return t[e]>=0})}function pr(t){var e=t.state,r=t.name,o=e.rects.reference,n=e.rects.popper,a=e.modifiersData.preventOverflow,c=gt(e,{elementContext:"reference"}),i=gt(e,{altBoundary:!0}),s=ae(c,o),u=ae(i,n,a),f=se(s),g=se(u);e.modifiersData[r]={referenceClippingOffsets:s,popperEscapeOffsets:u,isReferenceHidden:f,hasPopperEscaped:g},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":g})}const Re={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:pr};function ur(t,e,r){var o=K(t),n=[$,M].indexOf(o)>=0?-1:1,a=typeof r=="function"?r(Object.assign({},e,{placement:t})):r,c=a[0],i=a[1];return c=c||0,i=(i||0)*n,[$,V].indexOf(o)>=0?{x:i,y:c}:{x:c,y:i}}function lr(t){var e=t.state,r=t.options,o=t.name,n=r.offset,a=n===void 0?[0,0]:n,c=jt.reduce(function(f,g){return f[g]=ur(g,e.rects,a),f},{}),i=c[e.placement],s=i.x,u=i.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=s,e.modifiersData.popperOffsets.y+=u),e.modifiersData[o]=c}const Le={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:lr};function dr(t){var e=t.state,r=t.name;e.modifiersData[r]=De({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}const Xt={name:"popperOffsets",enabled:!0,phase:"read",fn:dr,data:{}};function vr(t){return t==="x"?"y":"x"}function hr(t){var e=t.state,r=t.options,o=t.name,n=r.mainAxis,a=n===void 0?!0:n,c=r.altAxis,i=c===void 0?!1:c,s=r.boundary,u=r.rootBoundary,f=r.altBoundary,g=r.padding,v=r.tether,l=v===void 0?!0:v,E=r.tetherOffset,h=E===void 0?0:E,m=gt(e,{boundary:s,rootBoundary:u,padding:g,altBoundary:f}),O=K(e.placement),_=mt(e.placement),T=!_,d=Ht(O),y=vr(d),b=e.modifiersData.popperOffsets,A=e.rects.reference,C=e.rects.popper,D=typeof h=="function"?h(Object.assign({},e.rects,{placement:e.placement})):h,x=typeof D=="number"?{mainAxis:D,altAxis:D}:Object.assign({mainAxis:0,altAxis:0},D),N=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,B={x:0,y:0};if(b){if(a){var L,X=d==="y"?M:$,z=d==="y"?W:V,P=d==="y"?"height":"width",k=b[d],G=k+m[X],Q=k-m[z],ft=l?-C[P]/2:0,bt=_===st?A[P]:C[P],nt=_===st?-C[P]:-A[P],pt=e.elements.arrow,et=l&&pt?It(pt):{width:0,height:0},q=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:Ae(),ot=q[X],ut=q[z],J=Et(0,A[P],et[P]),wt=T?A[P]/2-ft-J-ot-x.mainAxis:bt-J-ot-x.mainAxis,Lt=T?-A[P]/2+ft+J+ut+x.mainAxis:nt+J+ut+x.mainAxis,Ot=e.elements.arrow&&At(e.elements.arrow),j=Ot?d==="y"?Ot.clientTop||0:Ot.clientLeft||0:0,Y=(L=N==null?void 0:N[d])!=null?L:0,p=k+wt-Y-j,w=k+Lt-Y,R=Et(l?Ct(G,p):G,k,l?at(Q,w):Q);b[d]=R,B[d]=R-k}if(i){var S,it=d==="x"?M:$,Z=d==="x"?W:V,U=b[y],_t=y==="y"?"height":"width",zt=U+m[it],Gt=U-m[Z],St=[M,$].indexOf(O)!==-1,Qt=(S=N==null?void 0:N[y])!=null?S:0,Jt=St?zt:U-A[_t]-C[_t]-Qt+x.altAxis,Zt=St?U+A[_t]+C[_t]-Qt-x.altAxis:Gt,te=l&&St?Ke(Jt,U,Zt):Et(l?Jt:zt,U,l?Zt:Gt);b[y]=te,B[y]=te-U}e.modifiersData[o]=B}}const Se={name:"preventOverflow",enabled:!0,phase:"main",fn:hr,requiresIfExists:["offset"]};function mr(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function gr(t){return t===I(t)||!H(t)?Ut(t):mr(t)}function yr(t){var e=t.getBoundingClientRect(),r=vt(e.width)/t.offsetWidth||1,o=vt(e.height)/t.offsetHeight||1;return r!==1||o!==1}function br(t,e,r){r===void 0&&(r=!1);var o=H(e),n=H(e)&&yr(e),a=rt(e),c=ht(t,n,r),i={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(o||!o&&!r)&&((F(e)!=="body"||Ft(a))&&(i=gr(e)),H(e)?(s=ht(e,!0),s.x+=e.clientLeft,s.y+=e.clientTop):a&&(s.x=Kt(a))),{x:c.left+i.scrollLeft-s.x,y:c.top+i.scrollTop-s.y,width:c.width,height:c.height}}function wr(t){var e=new Map,r=new Set,o=[];t.forEach(function(a){e.set(a.name,a)});function n(a){r.add(a.name);var c=[].concat(a.requires||[],a.requiresIfExists||[]);c.forEach(function(i){if(!r.has(i)){var s=e.get(i);s&&n(s)}}),o.push(a)}return t.forEach(function(a){r.has(a.name)||n(a)}),o}function Or(t){var e=wr(t);return Oe.reduce(function(r,o){return r.concat(e.filter(function(n){return n.phase===o}))},[])}function Er(t){var e;return function(){return e||(e=new Promise(function(r){Promise.resolve().then(function(){e=void 0,r(t())})})),e}}function xr(t){var e=t.reduce(function(r,o){var n=r[o.name];return r[o.name]=n?Object.assign({},n,o,{options:Object.assign({},n.options,o.options),data:Object.assign({},n.data,o.data)}):o,r},{});return Object.keys(e).map(function(r){return e[r]})}var ce={placement:"bottom",modifiers:[],strategy:"absolute"};function fe(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return!e.some(function(o){return!(o&&typeof o.getBoundingClientRect=="function")})}function Rt(t){t===void 0&&(t={});var e=t,r=e.defaultModifiers,o=r===void 0?[]:r,n=e.defaultOptions,a=n===void 0?ce:n;return function(i,s,u){u===void 0&&(u=a);var f={placement:"bottom",orderedModifiers:[],options:Object.assign({},ce,a),modifiersData:{},elements:{reference:i,popper:s},attributes:{},styles:{}},g=[],v=!1,l={state:f,setOptions:function(O){var _=typeof O=="function"?O(f.options):O;h(),f.options=Object.assign({},a,f.options,_),f.scrollParents={reference:ct(i)?xt(i):i.contextElement?xt(i.contextElement):[],popper:xt(s)};var T=Or(xr([].concat(o,f.options.modifiers)));return f.orderedModifiers=T.filter(function(d){return d.enabled}),E(),l.update()},forceUpdate:function(){if(!v){var O=f.elements,_=O.reference,T=O.popper;if(fe(_,T)){f.rects={reference:br(_,At(T),f.options.strategy==="fixed"),popper:It(T)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach(function(x){return f.modifiersData[x.name]=Object.assign({},x.data)});for(var d=0;d<f.orderedModifiers.length;d++){if(f.reset===!0){f.reset=!1,d=-1;continue}var y=f.orderedModifiers[d],b=y.fn,A=y.options,C=A===void 0?{}:A,D=y.name;typeof b=="function"&&(f=b({state:f,options:C,name:D,instance:l})||f)}}}},update:Er(function(){return new Promise(function(m){l.forceUpdate(),m(f)})}),destroy:function(){h(),v=!0}};if(!fe(i,s))return l;l.setOptions(u).then(function(m){!v&&u.onFirstUpdate&&u.onFirstUpdate(m)});function E(){f.orderedModifiers.forEach(function(m){var O=m.name,_=m.options,T=_===void 0?{}:_,d=m.effect;if(typeof d=="function"){var y=d({state:f,name:O,instance:l,options:T}),b=function(){};g.push(y||b)}})}function h(){g.forEach(function(m){return m()}),g=[]}return l}}var Ar=Rt(),_r=[Yt,Xt,qt,Vt],Tr=Rt({defaultModifiers:_r}),Pr=[Yt,Xt,qt,Vt,Le,Ne,Se,Pe,Re],Cr=Rt({defaultModifiers:Pr});const Dr=Object.freeze(Object.defineProperty({__proto__:null,afterMain:ge,afterRead:ve,afterWrite:we,applyStyles:Vt,arrow:Pe,auto:Dt,basePlacements:yt,beforeMain:he,beforeRead:le,beforeWrite:ye,bottom:W,clippingParents:pe,computeStyles:qt,createPopper:Cr,createPopperBase:Ar,createPopperLite:Tr,detectOverflow:gt,end:dt,eventListeners:Yt,flip:Ne,hide:Re,left:$,main:me,modifierPhases:Oe,offset:Le,placements:jt,popper:lt,popperGenerator:Rt,popperOffsets:Xt,preventOverflow:Se,read:de,reference:ue,right:V,start:st,top:M,variationPlacements:Mt,viewport:kt,write:be},Symbol.toStringTag,{value:"Module"})),Nr=Me(Dr);/*!
  * Bootstrap dropdown.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(t,e){(function(r,o){t.exports=o(Nr,$e(),Be(),ke(),je(),We())})(Ve,function(r,o,n,a,c,i){function s(Y){const p=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(Y){for(const w in Y)if(w!=="default"){const R=Object.getOwnPropertyDescriptor(Y,w);Object.defineProperty(p,w,R.get?R:{enumerable:!0,get:()=>Y[w]})}}return p.default=Y,Object.freeze(p)}const u=s(r),f="dropdown",v=".bs.dropdown",l=".data-api",E="Escape",h="Tab",m="ArrowUp",O="ArrowDown",_=2,T=`hide${v}`,d=`hidden${v}`,y=`show${v}`,b=`shown${v}`,A=`click${v}${l}`,C=`keydown${v}${l}`,D=`keyup${v}${l}`,x="show",N="dropup",B="dropend",L="dropstart",X="dropup-center",z="dropdown-center",P='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',k=`${P}.${x}`,G=".dropdown-menu",Q=".navbar",ft=".navbar-nav",bt=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",nt=i.isRTL()?"top-end":"top-start",pt=i.isRTL()?"top-start":"top-end",et=i.isRTL()?"bottom-end":"bottom-start",q=i.isRTL()?"bottom-start":"bottom-end",ot=i.isRTL()?"left-start":"right-start",ut=i.isRTL()?"right-start":"left-start",J="top",wt="bottom",Lt={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},Ot={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class j extends o{constructor(p,w){super(p,w),this._popper=null,this._parent=this._element.parentNode,this._menu=c.next(this._element,G)[0]||c.prev(this._element,G)[0]||c.findOne(G,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return Lt}static get DefaultType(){return Ot}static get NAME(){return f}toggle(){return this._isShown()?this.hide():this.show()}show(){if(i.isDisabled(this._element)||this._isShown())return;const p={relatedTarget:this._element};if(!n.trigger(this._element,y,p).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(ft))for(const R of[].concat(...document.body.children))n.on(R,"mouseover",i.noop);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(x),this._element.classList.add(x),n.trigger(this._element,b,p)}}hide(){if(i.isDisabled(this._element)||!this._isShown())return;const p={relatedTarget:this._element};this._completeHide(p)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(p){if(!n.trigger(this._element,T,p).defaultPrevented){if("ontouchstart"in document.documentElement)for(const R of[].concat(...document.body.children))n.off(R,"mouseover",i.noop);this._popper&&this._popper.destroy(),this._menu.classList.remove(x),this._element.classList.remove(x),this._element.setAttribute("aria-expanded","false"),a.removeDataAttribute(this._menu,"popper"),n.trigger(this._element,d,p)}}_getConfig(p){if(p=super._getConfig(p),typeof p.reference=="object"&&!i.isElement(p.reference)&&typeof p.reference.getBoundingClientRect!="function")throw new TypeError(`${f.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return p}_createPopper(){if(typeof u>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let p=this._element;this._config.reference==="parent"?p=this._parent:i.isElement(this._config.reference)?p=i.getElement(this._config.reference):typeof this._config.reference=="object"&&(p=this._config.reference);const w=this._getPopperConfig();this._popper=u.createPopper(p,this._menu,w)}_isShown(){return this._menu.classList.contains(x)}_getPlacement(){const p=this._parent;if(p.classList.contains(B))return ot;if(p.classList.contains(L))return ut;if(p.classList.contains(X))return J;if(p.classList.contains(z))return wt;const w=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return p.classList.contains(N)?w?pt:nt:w?q:et}_detectNavbar(){return this._element.closest(Q)!==null}_getOffset(){const{offset:p}=this._config;return typeof p=="string"?p.split(",").map(w=>Number.parseInt(w,10)):typeof p=="function"?w=>p(w,this._element):p}_getPopperConfig(){const p={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(a.setDataAttribute(this._menu,"popper","static"),p.modifiers=[{name:"applyStyles",enabled:!1}]),{...p,...i.execute(this._config.popperConfig,[p])}}_selectMenuItem({key:p,target:w}){const R=c.find(bt,this._menu).filter(S=>i.isVisible(S));R.length&&i.getNextActiveElement(R,w,p===O,!R.includes(w)).focus()}static jQueryInterface(p){return this.each(function(){const w=j.getOrCreateInstance(this,p);if(typeof p=="string"){if(typeof w[p]>"u")throw new TypeError(`No method named "${p}"`);w[p]()}})}static clearMenus(p){if(p.button===_||p.type==="keyup"&&p.key!==h)return;const w=c.find(k);for(const R of w){const S=j.getInstance(R);if(!S||S._config.autoClose===!1)continue;const it=p.composedPath(),Z=it.includes(S._menu);if(it.includes(S._element)||S._config.autoClose==="inside"&&!Z||S._config.autoClose==="outside"&&Z||S._menu.contains(p.target)&&(p.type==="keyup"&&p.key===h||/input|select|option|textarea|form/i.test(p.target.tagName)))continue;const U={relatedTarget:S._element};p.type==="click"&&(U.clickEvent=p),S._completeHide(U)}}static dataApiKeydownHandler(p){const w=/input|textarea/i.test(p.target.tagName),R=p.key===E,S=[m,O].includes(p.key);if(!S&&!R||w&&!R)return;p.preventDefault();const it=this.matches(P)?this:c.prev(this,P)[0]||c.next(this,P)[0]||c.findOne(P,p.delegateTarget.parentNode),Z=j.getOrCreateInstance(it);if(S){p.stopPropagation(),Z.show(),Z._selectMenuItem(p);return}Z._isShown()&&(p.stopPropagation(),Z.hide(),it.focus())}}return n.on(document,C,P,j.dataApiKeydownHandler),n.on(document,C,G,j.dataApiKeydownHandler),n.on(document,A,j.clearMenus),n.on(document,D,j.clearMenus),n.on(document,A,P,function(Y){Y.preventDefault(),j.getOrCreateInstance(this).toggle()}),i.defineJQueryPlugin(j),j})})(Ie);