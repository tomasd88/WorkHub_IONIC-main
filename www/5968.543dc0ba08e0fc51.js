"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5968],{5968:(kt,kn,fn)=>{fn.d(kn,{c:()=>Wn});const cn=typeof window<"u"?window:void 0;typeof document<"u"&&document;var F=fn(9248);let q;const Tn=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),J=i=>(void 0===q&&(q=void 0===i.style.animationName&&void 0!==i.style.webkitAnimationName?"-webkit-":""),q),f=(i,o,s)=>{const u=o.startsWith("animation")?J(i):"";i.style.setProperty(u+o,s)},E=(i,o)=>{const s=o.startsWith("animation")?J(i):"";i.style.removeProperty(s+o)},un=[],V=(i=[],o)=>{if(void 0!==o){const s=Array.isArray(o)?o:[o];return[...i,...s]}return i},Wn=i=>{let o,s,u,l,A,v,m,G,T,W,_,O,r,c=[],Q=[],X=[],$=!1,Y={},nn=[],tn=[],en={},P=0,j=!1,B=!1,x=!0,L=!1,I=!0,H=!1;const ln=i,on=[],N=[],Z=[],h=[],p=[],rn=[],dn=[],mn=[],hn=[],pn=[],S=[],Ln="function"==typeof AnimationEffect||void 0!==cn&&"function"==typeof cn.AnimationEffect,C="function"==typeof Element&&"function"==typeof Element.prototype.animate&&Ln,yn=()=>S,gn=(n,t)=>{const e=t.findIndex(a=>a.c===n);e>-1&&t.splice(e,1)},sn=(n,t)=>((null!=t&&t.oneTimeCallback?N:on).push({c:n,o:t}),r),En=()=>{if(C)S.forEach(n=>{n.cancel()}),S.length=0;else{const n=h.slice();(0,F.r)(()=>{n.forEach(t=>{E(t,"animation-name"),E(t,"animation-duration"),E(t,"animation-timing-function"),E(t,"animation-iteration-count"),E(t,"animation-delay"),E(t,"animation-play-state"),E(t,"animation-fill-mode"),E(t,"animation-direction")})})}},An=()=>{rn.forEach(n=>{null!=n&&n.parentNode&&n.parentNode.removeChild(n)}),rn.length=0},z=()=>void 0!==A?A:m?m.getFill():"both",D=()=>void 0!==T?T:void 0!==v?v:m?m.getDirection():"normal",M=()=>j?"linear":void 0!==u?u:m?m.getEasing():"linear",b=()=>B?0:void 0!==W?W:void 0!==s?s:m?m.getDuration():0,w=()=>void 0!==l?l:m?m.getIterations():1,K=()=>void 0!==_?_:void 0!==o?o:m?m.getDelay():0,R=()=>{0!==P&&(P--,0===P&&((()=>{an(),hn.forEach(d=>d()),pn.forEach(d=>d());const n=x?1:0,t=nn,e=tn,a=en;h.forEach(d=>{const g=d.classList;t.forEach(k=>g.add(k)),e.forEach(k=>g.remove(k));for(const k in a)a.hasOwnProperty(k)&&f(d,k,a[k])}),W=void 0,T=void 0,_=void 0,on.forEach(d=>d.c(n,r)),N.forEach(d=>d.c(n,r)),N.length=0,I=!0,x&&(L=!0),x=!0})(),m&&m.animationFinish()))},Cn=(n=!0)=>{An();const t=(i=>(i.forEach(o=>{for(const s in o)if(o.hasOwnProperty(s)){const u=o[s];if("easing"===s)o["animation-timing-function"]=u,delete o[s];else{const l=Tn(s);l!==s&&(o[l]=u,delete o[s])}}}),i))(c);h.forEach(e=>{if(t.length>0){const a=((i=[])=>i.map(o=>{const s=o.offset,u=[];for(const l in o)o.hasOwnProperty(l)&&"offset"!==l&&u.push(`${l}: ${o[l]};`);return`${100*s}% { ${u.join(" ")} }`}).join(" "))(t);O=void 0!==i?i:(i=>{let o=un.indexOf(i);return o<0&&(o=un.push(i)-1),`ion-animation-${o}`})(a);const d=((i,o,s)=>{var u;const l=(i=>{const o=void 0!==i.getRootNode?i.getRootNode():i;return o.head||o})(s),A=J(s),v=l.querySelector("#"+i);if(v)return v;const c=(null!==(u=s.ownerDocument)&&void 0!==u?u:document).createElement("style");return c.id=i,c.textContent=`@${A}keyframes ${i} { ${o} } @${A}keyframes ${i}-alt { ${o} }`,l.appendChild(c),c})(O,a,e);rn.push(d),f(e,"animation-duration",`${b()}ms`),f(e,"animation-timing-function",M()),f(e,"animation-delay",`${K()}ms`),f(e,"animation-fill-mode",z()),f(e,"animation-direction",D());const g=w()===1/0?"infinite":w().toString();f(e,"animation-iteration-count",g),f(e,"animation-play-state","paused"),n&&f(e,"animation-name",`${d.id}-alt`),(0,F.r)(()=>{f(e,"animation-name",d.id||null)})}})},bn=(n=!0)=>{(()=>{dn.forEach(a=>a()),mn.forEach(a=>a());const n=Q,t=X,e=Y;h.forEach(a=>{const d=a.classList;n.forEach(g=>d.add(g)),t.forEach(g=>d.remove(g));for(const g in e)e.hasOwnProperty(g)&&f(a,g,e[g])})})(),c.length>0&&(C?(h.forEach(n=>{const t=n.animate(c,{id:ln,delay:K(),duration:b(),easing:M(),iterations:w(),fill:z(),direction:D()});t.pause(),S.push(t)}),S.length>0&&(S[0].onfinish=()=>{R()})):Cn(n)),$=!0},U=n=>{if(n=Math.min(Math.max(n,0),.9999),C)S.forEach(t=>{t.currentTime=t.effect.getComputedTiming().delay+b()*n,t.pause()});else{const t=`-${b()*n}ms`;h.forEach(e=>{c.length>0&&(f(e,"animation-delay",t),f(e,"animation-play-state","paused"))})}},Sn=n=>{S.forEach(t=>{t.effect.updateTiming({delay:K(),duration:b(),easing:M(),iterations:w(),fill:z(),direction:D()})}),void 0!==n&&U(n)},vn=(n=!0,t)=>{(0,F.r)(()=>{h.forEach(e=>{f(e,"animation-name",O||null),f(e,"animation-duration",`${b()}ms`),f(e,"animation-timing-function",M()),f(e,"animation-delay",void 0!==t?`-${t*b()}ms`:`${K()}ms`),f(e,"animation-fill-mode",z()||null),f(e,"animation-direction",D()||null);const a=w()===1/0?"infinite":w().toString();f(e,"animation-iteration-count",a),n&&f(e,"animation-name",`${O}-alt`),(0,F.r)(()=>{f(e,"animation-name",O||null)})})})},y=(n=!1,t=!0,e)=>(n&&p.forEach(a=>{a.update(n,t,e)}),C?Sn(e):vn(t,e),r),wn=()=>{$&&(C?S.forEach(n=>{n.pause()}):h.forEach(n=>{f(n,"animation-play-state","paused")}),H=!0)},bt=()=>{G=void 0,R()},an=()=>{G&&clearTimeout(G)},Fn=n=>new Promise(t=>{null!=n&&n.sync&&(B=!0,sn(()=>B=!1,{oneTimeCallback:!0})),$||bn(),L&&(C?(U(0),Sn()):vn(),L=!1),I&&(P=p.length+1,I=!1);const e=()=>{gn(a,N),t()},a=()=>{gn(e,Z),t()};sn(a,{oneTimeCallback:!0}),((n,t)=>{Z.push({c:n,o:{oneTimeCallback:!0}})})(e),p.forEach(d=>{d.play()}),C?(S.forEach(n=>{n.play()}),(0===c.length||0===h.length)&&R()):(()=>{if(an(),(0,F.r)(()=>{h.forEach(n=>{c.length>0&&f(n,"animation-play-state","running")})}),0===c.length||0===h.length)R();else{const n=K()||0,t=b()||0,e=w()||1;isFinite(e)&&(G=setTimeout(bt,n+t*e+100)),((i,o)=>{let s;const u={passive:!0},A=v=>{i===v.target&&(s&&s(),an(),(0,F.r)(()=>{h.forEach(n=>{E(n,"animation-duration"),E(n,"animation-delay"),E(n,"animation-play-state")}),(0,F.r)(R)}))};i&&(i.addEventListener("webkitAnimationEnd",A,u),i.addEventListener("animationend",A,u),s=()=>{i.removeEventListener("webkitAnimationEnd",A,u),i.removeEventListener("animationend",A,u)})})(h[0])}})(),H=!1}),$n=(n,t)=>{const e=c[0];return void 0===e||void 0!==e.offset&&0!==e.offset?c=[{offset:0,[n]:t},...c]:e[n]=t,r};return r={parentAnimation:m,elements:h,childAnimations:p,id:ln,animationFinish:R,from:$n,to:(n,t)=>{const e=c[c.length-1];return void 0===e||void 0!==e.offset&&1!==e.offset?c=[...c,{offset:1,[n]:t}]:e[n]=t,r},fromTo:(n,t,e)=>$n(n,t).to(n,e),parent:n=>(m=n,r),play:Fn,pause:()=>(p.forEach(n=>{n.pause()}),wn(),r),stop:()=>{p.forEach(n=>{n.stop()}),$&&(En(),$=!1),j=!1,B=!1,I=!0,T=void 0,W=void 0,_=void 0,P=0,L=!1,x=!0,H=!1,Z.forEach(n=>n.c(0,r)),Z.length=0},destroy:n=>(p.forEach(t=>{t.destroy(n)}),(n=>{En(),n&&An()})(n),h.length=0,p.length=0,c.length=0,on.length=0,N.length=0,$=!1,I=!0,r),keyframes:n=>{const t=c!==n;return c=n,t&&(n=>{C?yn().forEach(t=>{const e=t.effect;if(e.setKeyframes)e.setKeyframes(n);else{const a=new KeyframeEffect(e.target,n,e.getTiming());t.effect=a}}):Cn()})(c),r},addAnimation:n=>{if(null!=n)if(Array.isArray(n))for(const t of n)t.parent(r),p.push(t);else n.parent(r),p.push(n);return r},addElement:n=>{if(null!=n)if(1===n.nodeType)h.push(n);else if(n.length>=0)for(let t=0;t<n.length;t++)h.push(n[t]);else console.error("Invalid addElement value");return r},update:y,fill:n=>(A=n,y(!0),r),direction:n=>(v=n,y(!0),r),iterations:n=>(l=n,y(!0),r),duration:n=>(!C&&0===n&&(n=1),s=n,y(!0),r),easing:n=>(u=n,y(!0),r),delay:n=>(o=n,y(!0),r),getWebAnimations:yn,getKeyframes:()=>c,getFill:z,getDirection:D,getDelay:K,getIterations:w,getEasing:M,getDuration:b,afterAddRead:n=>(hn.push(n),r),afterAddWrite:n=>(pn.push(n),r),afterClearStyles:(n=[])=>{for(const t of n)en[t]="";return r},afterStyles:(n={})=>(en=n,r),afterRemoveClass:n=>(tn=V(tn,n),r),afterAddClass:n=>(nn=V(nn,n),r),beforeAddRead:n=>(dn.push(n),r),beforeAddWrite:n=>(mn.push(n),r),beforeClearStyles:(n=[])=>{for(const t of n)Y[t]="";return r},beforeStyles:(n={})=>(Y=n,r),beforeRemoveClass:n=>(X=V(X,n),r),beforeAddClass:n=>(Q=V(Q,n),r),onFinish:sn,isRunning:()=>0!==P&&!H,progressStart:(n=!1,t)=>(p.forEach(e=>{e.progressStart(n,t)}),wn(),j=n,$||bn(),y(!1,!0,t),r),progressStep:n=>(p.forEach(t=>{t.progressStep(n)}),U(n),r),progressEnd:(n,t,e)=>(j=!1,p.forEach(a=>{a.progressEnd(n,t,e)}),void 0!==e&&(W=e),L=!1,x=!0,0===n?(T="reverse"===D()?"normal":"reverse","reverse"===T&&(x=!1),C?(y(),U(1-t)):(_=(1-t)*b()*-1,y(!1,!1))):1===n&&(C?(y(),U(t)):(_=t*b()*-1,y(!1,!1))),void 0!==n&&!m&&Fn(),r)}}}}]);