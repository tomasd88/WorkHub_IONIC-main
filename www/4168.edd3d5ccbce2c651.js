"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4168],{4168:(re,N,f)=>{f.r(N),f.d(N,{ion_popover:()=>ee});var S=f(1528),d=f(2992),R=f(495),k=f(6384),F=f(3464),V=f(2032),T=f(3816),h=f(8523),g=f(5256),y=f(6256),v=f(388);f(4829),f(2784);const G=(t,e,o)=>{const r=e.getBoundingClientRect(),i=r.height;let n=r.width;return"cover"===t&&o&&(n=o.getBoundingClientRect().width),{contentWidth:n,contentHeight:i}},se=(t,e,o)=>{let r=[];switch(e){case"hover":let i;r=[{eventName:"mouseenter",callback:(n=(0,S.c)(function*(s){s.stopPropagation(),i&&clearTimeout(i),i=setTimeout(()=>{(0,k.r)(()=>{o.presentFromTrigger(s),i=void 0})},100)}),function(a){return n.apply(this,arguments)})},{eventName:"mouseleave",callback:n=>{i&&clearTimeout(i);const s=n.relatedTarget;s&&s.closest("ion-popover")!==o&&o.dismiss(void 0,void 0,!1)}},{eventName:"click",callback:n=>n.stopPropagation()},{eventName:"ionPopoverActivateTrigger",callback:n=>o.presentFromTrigger(n,!0)}];break;case"context-menu":r=[{eventName:"contextmenu",callback:n=>{n.preventDefault(),o.presentFromTrigger(n)}},{eventName:"click",callback:n=>n.stopPropagation()},{eventName:"ionPopoverActivateTrigger",callback:n=>o.presentFromTrigger(n,!0)}];break;default:r=[{eventName:"click",callback:n=>o.presentFromTrigger(n)},{eventName:"ionPopoverActivateTrigger",callback:n=>o.presentFromTrigger(n,!0)}]}var n;return r.forEach(({eventName:i,callback:n})=>t.addEventListener(i,n)),t.setAttribute("data-ion-popover-trigger","true"),()=>{r.forEach(({eventName:i,callback:n})=>t.removeEventListener(i,n)),t.removeAttribute("data-ion-popover-trigger")}},H=(t,e)=>e&&"ION-ITEM"===e.tagName?t.findIndex(o=>o===e):-1,z=t=>{const o=(0,k.g)(t).querySelector("button");o&&(0,k.r)(()=>o.focus())},de=t=>{const e=function(){var o=(0,S.c)(function*(r){var i;const n=document.activeElement;let s=[];const a=null===(i=r.target)||void 0===i?void 0:i.tagName;if("ION-POPOVER"===a||"ION-ITEM"===a){try{s=Array.from(t.querySelectorAll("ion-item:not(ion-popover ion-popover *):not([disabled])"))}catch{}switch(r.key){case"ArrowLeft":(yield t.getParentPopover())&&t.dismiss(void 0,void 0,!1);break;case"ArrowDown":r.preventDefault();const l=((t,e)=>t[H(t,e)+1])(s,n);void 0!==l&&z(l);break;case"ArrowUp":r.preventDefault();const w=((t,e)=>t[H(t,e)-1])(s,n);void 0!==w&&z(w);break;case"Home":r.preventDefault();const u=s[0];void 0!==u&&z(u);break;case"End":r.preventDefault();const b=s[s.length-1];void 0!==b&&z(b);break;case"ArrowRight":case" ":case"Enter":if(n&&(t=>t.hasAttribute("data-ion-popover-trigger"))(n)){const m=new CustomEvent("ionPopoverActivateTrigger");n.dispatchEvent(m)}}}});return function(i){return o.apply(this,arguments)}}();return t.addEventListener("keydown",e),()=>t.removeEventListener("keydown",e)},J=(t,e,o,r,i,n,s,a,p,l,w)=>{var u;let b={top:0,left:0,width:0,height:0};if("event"===n){if(!w)return p;b={top:w.clientY,left:w.clientX,width:1,height:1}}else{const L=l||(null===(u=null==w?void 0:w.detail)||void 0===u?void 0:u.ionShadowTarget)||(null==w?void 0:w.target);if(!L)return p;const E=L.getBoundingClientRect();b={top:E.top,left:E.left,width:E.width,height:E.height}}const m=he(s,b,e,o,r,i,t),P=ue(a,s,b,e,o),_=m.top+P.top,A=m.left+P.left,{arrowTop:x,arrowLeft:I}=fe(s,r,i,_,A,e,o,t),{originX:D,originY:O}=le(s,a,t);return{top:_,left:A,referenceCoordinates:b,arrowTop:x,arrowLeft:I,originX:D,originY:O}},le=(t,e,o)=>{switch(t){case"top":return{originX:Q(e),originY:"bottom"};case"bottom":return{originX:Q(e),originY:"top"};case"left":return{originX:"right",originY:U(e)};case"right":return{originX:"left",originY:U(e)};case"start":return{originX:o?"left":"right",originY:U(e)};case"end":return{originX:o?"right":"left",originY:U(e)}}},Q=t=>{switch(t){case"start":return"left";case"center":return"center";case"end":return"right"}},U=t=>{switch(t){case"start":return"top";case"center":return"center";case"end":return"bottom"}},fe=(t,e,o,r,i,n,s,a)=>{const p={arrowTop:r+s/2-e/2,arrowLeft:i+n-e/2},l={arrowTop:r+s/2-e/2,arrowLeft:i-1.5*e};switch(t){case"top":return{arrowTop:r+s,arrowLeft:i+n/2-e/2};case"bottom":return{arrowTop:r-o,arrowLeft:i+n/2-e/2};case"left":return p;case"right":return l;case"start":return a?l:p;case"end":return a?p:l;default:return{arrowTop:0,arrowLeft:0}}},he=(t,e,o,r,i,n,s)=>{const a={top:e.top,left:e.left-o-i},p={top:e.top,left:e.left+e.width+i};switch(t){case"top":return{top:e.top-r-n,left:e.left};case"right":return p;case"bottom":return{top:e.top+e.height+n,left:e.left};case"left":return a;case"start":return s?p:a;case"end":return s?a:p}},ue=(t,e,o,r,i)=>{switch(t){case"center":return me(e,o,r,i);case"end":return ve(e,o,r,i);default:return{top:0,left:0}}},ve=(t,e,o,r)=>{switch(t){case"start":case"end":case"left":case"right":return{top:-(r-e.height),left:0};default:return{top:0,left:-(o-e.width)}}},me=(t,e,o,r)=>{switch(t){case"start":case"end":case"left":case"right":return{top:-(r/2-e.height/2),left:0};default:return{top:0,left:-(o/2-e.width/2)}}},Z=(t,e,o,r,i,n,s,a,p,l,w,u,b=0,m=0,P=0)=>{let _=b;const A=m;let D,x=o,I=e,O=l,C=w,c=!1,L=!1;const E=u?u.top+u.height:n/2-a/2,M=u?u.height:0;let j=!1;return x<r+p?(x=r,c=!0,O="left"):s+r+x+p>i&&(L=!0,x=i-s-r,O="right"),E+M+a>n&&("top"===t||"bottom"===t)&&(E-a>0?(I=Math.max(12,E-a-M-(P-1)),_=I+a,C="bottom",j=!0):D=r),{top:I,left:x,bottom:D,originX:O,originY:C,checkSafeAreaLeft:c,checkSafeAreaRight:L,arrowTop:_,arrowLeft:A,addPopoverBottomClass:j}},xe=(t,e)=>{var o;const{event:r,size:i,trigger:n,reference:s,side:a,align:p}=e,l=t.ownerDocument,w="rtl"===l.dir,u=l.defaultView.innerWidth,b=l.defaultView.innerHeight,m=(0,k.g)(t),P=m.querySelector(".popover-content"),_=m.querySelector(".popover-arrow"),A=n||(null===(o=null==r?void 0:r.detail)||void 0===o?void 0:o.ionShadowTarget)||(null==r?void 0:r.target),{contentWidth:x,contentHeight:I}=G(i,P,A),{arrowWidth:D,arrowHeight:O}=(t=>{if(!t)return{arrowWidth:0,arrowHeight:0};const{width:e,height:o}=t.getBoundingClientRect();return{arrowWidth:e,arrowHeight:o}})(_),c=J(w,x,I,D,O,s,a,p,{top:b/2-I/2,left:u/2-x/2,originX:w?"right":"left",originY:"top"},n,r),L="cover"===i?0:5,E="cover"===i?0:25,{originX:M,originY:j,top:$,left:W,bottom:K,checkSafeAreaLeft:X,checkSafeAreaRight:Ae,arrowTop:Ie,arrowLeft:Te,addPopoverBottomClass:Oe}=Z(a,c.top,c.left,L,u,b,x,I,E,c.originX,c.originY,c.referenceCoordinates,c.arrowTop,c.arrowLeft,O),Ce=(0,v.c)(),te=(0,v.c)(),oe=(0,v.c)();return te.addElement(m.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),oe.addElement(m.querySelector(".popover-arrow")).addElement(m.querySelector(".popover-content")).fromTo("opacity",.01,1),Ce.easing("ease").duration(100).beforeAddWrite(()=>{"cover"===i&&t.style.setProperty("--width",`${x}px`),Oe&&t.classList.add("popover-bottom"),void 0!==K&&P.style.setProperty("bottom",`${K}px`);let q=`${W}px`;X&&(q=`${W}px + var(--ion-safe-area-left, 0)`),Ae&&(q=`${W}px - var(--ion-safe-area-right, 0)`),P.style.setProperty("top",`calc(${$}px + var(--offset-y, 0))`),P.style.setProperty("left",`calc(${q} + var(--offset-x, 0))`),P.style.setProperty("transform-origin",`${j} ${M}`),null!==_&&(((t,e=!1,o,r)=>!(!o&&!r||"top"!==t&&"bottom"!==t&&e))(a,c.top!==$||c.left!==W,r,n)?(_.style.setProperty("top",`calc(${Ie}px + var(--offset-y, 0))`),_.style.setProperty("left",`calc(${Te}px + var(--offset-x, 0))`)):_.style.setProperty("display","none"))}).addAnimation([te,oe])},ye=t=>{const e=(0,k.g)(t),o=e.querySelector(".popover-content"),r=e.querySelector(".popover-arrow"),i=(0,v.c)(),n=(0,v.c)(),s=(0,v.c)();return n.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),s.addElement(e.querySelector(".popover-arrow")).addElement(e.querySelector(".popover-content")).fromTo("opacity",.99,0),i.easing("ease").afterAddWrite(()=>{t.style.removeProperty("--width"),t.classList.remove("popover-bottom"),o.style.removeProperty("top"),o.style.removeProperty("left"),o.style.removeProperty("bottom"),o.style.removeProperty("transform-origin"),r&&(r.style.removeProperty("top"),r.style.removeProperty("left"),r.style.removeProperty("display"))}).duration(300).addAnimation([n,s])},Pe=(t,e)=>{var o;const{event:r,size:i,trigger:n,reference:s,side:a,align:p}=e,l=t.ownerDocument,w="rtl"===l.dir,u=l.defaultView.innerWidth,b=l.defaultView.innerHeight,m=(0,k.g)(t),P=m.querySelector(".popover-content"),_=n||(null===(o=null==r?void 0:r.detail)||void 0===o?void 0:o.ionShadowTarget)||(null==r?void 0:r.target),{contentWidth:A,contentHeight:x}=G(i,P,_),D=J(w,A,x,0,0,s,a,p,{top:b/2-x/2,left:u/2-A/2,originX:w?"right":"left",originY:"top"},n,r),O="cover"===i?0:12,{originX:C,originY:c,top:L,left:E,bottom:M}=Z(a,D.top,D.left,O,u,b,A,x,0,D.originX,D.originY,D.referenceCoordinates),j=(0,v.c)(),$=(0,v.c)(),W=(0,v.c)(),K=(0,v.c)(),X=(0,v.c)();return $.addElement(m.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),W.addElement(m.querySelector(".popover-wrapper")).duration(150).fromTo("opacity",.01,1),K.addElement(P).beforeStyles({top:`calc(${L}px + var(--offset-y, 0px))`,left:`calc(${E}px + var(--offset-x, 0px))`,"transform-origin":`${c} ${C}`}).beforeAddWrite(()=>{void 0!==M&&P.style.setProperty("bottom",`${M}px`)}).fromTo("transform","scale(0.8)","scale(1)"),X.addElement(m.querySelector(".popover-viewport")).fromTo("opacity",.01,1),j.easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).beforeAddWrite(()=>{"cover"===i&&t.style.setProperty("--width",`${A}px`),"bottom"===c&&t.classList.add("popover-bottom")}).addAnimation([$,W,K,X])},ke=t=>{const e=(0,k.g)(t),o=e.querySelector(".popover-content"),r=(0,v.c)(),i=(0,v.c)(),n=(0,v.c)();return i.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),n.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),r.easing("ease").afterAddWrite(()=>{t.style.removeProperty("--width"),t.classList.remove("popover-bottom"),o.style.removeProperty("top"),o.style.removeProperty("left"),o.style.removeProperty("bottom"),o.style.removeProperty("transform-origin")}).duration(150).addAnimation([i,n])},ee=class{constructor(t){(0,d.r)(this,t),this.didPresent=(0,d.d)(this,"ionPopoverDidPresent",7),this.willPresent=(0,d.d)(this,"ionPopoverWillPresent",7),this.willDismiss=(0,d.d)(this,"ionPopoverWillDismiss",7),this.didDismiss=(0,d.d)(this,"ionPopoverDidDismiss",7),this.didPresentShorthand=(0,d.d)(this,"didPresent",7),this.willPresentShorthand=(0,d.d)(this,"willPresent",7),this.willDismissShorthand=(0,d.d)(this,"willDismiss",7),this.didDismissShorthand=(0,d.d)(this,"didDismiss",7),this.ionMount=(0,d.d)(this,"ionMount",7),this.parentPopover=null,this.coreDelegate=(0,R.C)(),this.lockController=(0,F.c)(),this.inline=!1,this.focusDescendantOnPresent=!1,this.onBackdropTap=()=>{this.dismiss(void 0,T.B)},this.onLifecycle=e=>{const o=this.usersElement,r=Ee[e.type];if(o&&r){const i=new CustomEvent(r,{bubbles:!1,cancelable:!1,detail:e.detail});o.dispatchEvent(i)}},this.configureTriggerInteraction=()=>{const{trigger:e,triggerAction:o,el:r,destroyTriggerInteraction:i}=this;if(i&&i(),void 0===e)return;const n=this.triggerEl=void 0!==e?document.getElementById(e):null;n?this.destroyTriggerInteraction=se(n,o,r):(0,V.p)(`A trigger element with the ID "${e}" was not found in the DOM. The trigger element must be in the DOM when the "trigger" property is set on ion-popover.`,this.el)},this.configureKeyboardInteraction=()=>{const{destroyKeyboardInteraction:e,el:o}=this;e&&e(),this.destroyKeyboardInteraction=de(o)},this.configureDismissInteraction=()=>{const{destroyDismissInteraction:e,parentPopover:o,triggerAction:r,triggerEl:i,el:n}=this;!o||!i||(e&&e(),this.destroyDismissInteraction=((t,e,o,r)=>{let i=[];const s=(0,k.g)(r).querySelector(".popover-content");return i="hover"===e?[{eventName:"mouseenter",callback:a=>{document.elementFromPoint(a.clientX,a.clientY)!==t&&o.dismiss(void 0,void 0,!1)}}]:[{eventName:"click",callback:a=>{a.target.closest("[data-ion-popover-trigger]")!==t?o.dismiss(void 0,void 0,!1):a.stopPropagation()}}],i.forEach(({eventName:a,callback:p})=>s.addEventListener(a,p)),()=>{i.forEach(({eventName:a,callback:p})=>s.removeEventListener(a,p))}})(i,r,n,o))},this.presented=!1,this.hasController=!1,this.delegate=void 0,this.overlayIndex=void 0,this.enterAnimation=void 0,this.leaveAnimation=void 0,this.component=void 0,this.componentProps=void 0,this.keyboardClose=!0,this.cssClass=void 0,this.backdropDismiss=!0,this.event=void 0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.htmlAttributes=void 0,this.triggerAction="click",this.trigger=void 0,this.size="auto",this.dismissOnSelect=!1,this.reference="trigger",this.side="bottom",this.alignment=void 0,this.arrow=!0,this.isOpen=!1,this.keyboardEvents=!1,this.keepContentsMounted=!1}onTriggerChange(){this.configureTriggerInteraction()}onIsOpenChange(t,e){!0===t&&!1===e?this.present():!1===t&&!0===e&&this.dismiss()}connectedCallback(){const{configureTriggerInteraction:t,el:e}=this;(0,T.j)(e),t()}disconnectedCallback(){const{destroyTriggerInteraction:t}=this;t&&t()}componentWillLoad(){const{el:t}=this,e=(0,T.k)(t);this.parentPopover=t.closest(`ion-popover:not(#${e})`),void 0===this.alignment&&(this.alignment="ios"===(0,h.b)(this)?"center":"start")}componentDidLoad(){const{parentPopover:t,isOpen:e}=this;!0===e&&(0,k.r)(()=>this.present()),t&&(0,k.a)(t,"ionPopoverWillDismiss",()=>{this.dismiss(void 0,void 0,!1)}),this.configureTriggerInteraction()}presentFromTrigger(t,e=!1){var o=this;return(0,S.c)(function*(){o.focusDescendantOnPresent=e,yield o.present(t),o.focusDescendantOnPresent=!1})()}getDelegate(t=!1){if(this.workingDelegate&&!t)return{delegate:this.workingDelegate,inline:this.inline};const o=this.inline=null!==this.el.parentNode&&!this.hasController;return{inline:o,delegate:this.workingDelegate=o?this.delegate||this.coreDelegate:this.delegate}}present(t){var e=this;return(0,S.c)(function*(){const o=yield e.lockController.lock();if(e.presented)return void o();const{el:r}=e,{inline:i,delegate:n}=e.getDelegate(!0);e.ionMount.emit(),e.usersElement=yield(0,R.a)(n,r,e.component,["popover-viewport"],e.componentProps,i),e.keyboardEvents||e.configureKeyboardInteraction(),e.configureDismissInteraction(),(0,k.m)(r)?yield(0,y.e)(e.usersElement):e.keepContentsMounted||(yield(0,y.w)()),yield(0,T.f)(e,"popoverEnter",xe,Pe,{event:t||e.event,size:e.size,trigger:e.triggerEl,reference:e.reference,side:e.side,align:e.alignment}),e.focusDescendantOnPresent&&(0,T.n)(e.el,e.el),o()})()}dismiss(t,e,o=!0){var r=this;return(0,S.c)(function*(){const i=yield r.lockController.lock(),{destroyKeyboardInteraction:n,destroyDismissInteraction:s}=r;o&&r.parentPopover&&r.parentPopover.dismiss(t,e,o);const a=yield(0,T.g)(r,t,e,"popoverLeave",ye,ke,r.event);if(a){n&&(n(),r.destroyKeyboardInteraction=void 0),s&&(s(),r.destroyDismissInteraction=void 0);const{delegate:p}=r.getDelegate();yield(0,R.d)(p,r.usersElement)}return i(),a})()}getParentPopover(){var t=this;return(0,S.c)(function*(){return t.parentPopover})()}onDidDismiss(){return(0,T.h)(this.el,"ionPopoverDidDismiss")}onWillDismiss(){return(0,T.h)(this.el,"ionPopoverWillDismiss")}render(){const t=(0,h.b)(this),{onLifecycle:e,parentPopover:o,dismissOnSelect:r,side:i,arrow:n,htmlAttributes:s}=this,a=(0,h.a)("desktop"),p=n&&!o;return(0,d.h)(d.H,Object.assign({key:"104a5bf92a9bbd2efc71d499a8500e5d55f81711","aria-modal":"true","no-router":!0,tabindex:"-1"},s,{style:{zIndex:`${2e4+this.overlayIndex}`},class:Object.assign(Object.assign({},(0,g.g)(this.cssClass)),{[t]:!0,"popover-translucent":this.translucent,"overlay-hidden":!0,"popover-desktop":a,[`popover-side-${i}`]:!0,"popover-nested":!!o}),onIonPopoverDidPresent:e,onIonPopoverWillPresent:e,onIonPopoverWillDismiss:e,onIonPopoverDidDismiss:e,onIonBackdropTap:this.onBackdropTap}),!o&&(0,d.h)("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop,part:"backdrop"}),(0,d.h)("div",{key:"ef0baa04c22444d4bc705220235a892308d67586",class:"popover-wrapper ion-overlay-wrapper",onClick:r?()=>this.dismiss():void 0},p&&(0,d.h)("div",{class:"popover-arrow",part:"arrow"}),(0,d.h)("div",{key:"5cc5f5c353de614e484e9cfeacecfca9fbfde0e0",class:"popover-content",part:"content"},(0,d.h)("slot",{key:"2d85c591cdc85efa98afbf40f676525f1402efcf"}))))}get el(){return(0,d.f)(this)}static get watchers(){return{trigger:["onTriggerChange"],triggerAction:["onTriggerChange"],isOpen:["onIsOpenChange"]}}},Ee={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"};ee.style={ios:':host{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;--offset-x:0px;--offset-y:0px;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}:host(.popover-nested){pointer-events:none}:host(.popover-nested) .popover-wrapper{pointer-events:auto}:host(.overlay-hidden){display:none}.popover-wrapper{z-index:10}.popover-content{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}::slotted(.popover-viewport){--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden}:host(.popover-nested.popover-side-left){--offset-x:5px}:host(.popover-nested.popover-side-right){--offset-x:-5px}:host(.popover-nested.popover-side-start){--offset-x:5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-start),:host-context([dir=rtl]).popover-nested.popover-side-start{--offset-x:-5px}@supports selector(:dir(rtl)){:host(.popover-nested.popover-side-start:dir(rtl)){--offset-x:-5px}}:host(.popover-nested.popover-side-end){--offset-x:-5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-end),:host-context([dir=rtl]).popover-nested.popover-side-end{--offset-x:5px}@supports selector(:dir(rtl)){:host(.popover-nested.popover-side-end:dir(rtl)){--offset-x:5px}}:host{--width:200px;--max-height:90%;--box-shadow:none;--backdrop-opacity:var(--ion-backdrop-opacity, 0.08)}:host(.popover-desktop){--box-shadow:0px 4px 16px 0px rgba(0, 0, 0, 0.12)}.popover-content{border-radius:10px}:host(.popover-desktop) .popover-content{border:0.5px solid var(--ion-color-step-100, #e6e6e6)}.popover-arrow{display:block;position:absolute;width:20px;height:10px;overflow:hidden;z-index:11}.popover-arrow::after{top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:"";z-index:10}@supports (inset-inline-start: 0){.popover-arrow::after{inset-inline-start:3px}}@supports not (inset-inline-start: 0){.popover-arrow::after{left:3px}:host-context([dir=rtl]) .popover-arrow::after{left:unset;right:unset;right:3px}[dir=rtl] .popover-arrow::after{left:unset;right:unset;right:3px}@supports selector(:dir(rtl)){.popover-arrow::after:dir(rtl){left:unset;right:unset;right:3px}}}:host(.popover-bottom) .popover-arrow{top:auto;bottom:-10px}:host(.popover-bottom) .popover-arrow::after{top:-6px}:host(.popover-side-left) .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}:host(.popover-side-right) .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host(.popover-side-top) .popover-arrow{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host(.popover-side-start) .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}:host-context([dir=rtl]):host(.popover-side-start) .popover-arrow,:host-context([dir=rtl]).popover-side-start .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}@supports selector(:dir(rtl)){:host(.popover-side-start:dir(rtl)) .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}}:host(.popover-side-end) .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host-context([dir=rtl]):host(.popover-side-end) .popover-arrow,:host-context([dir=rtl]).popover-side-end .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}@supports selector(:dir(rtl)){:host(.popover-side-end:dir(rtl)) .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}}.popover-arrow,.popover-content{opacity:0}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.popover-translucent) .popover-content,:host(.popover-translucent) .popover-arrow::after{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}',md:":host{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;--offset-x:0px;--offset-y:0px;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}:host(.popover-nested){pointer-events:none}:host(.popover-nested) .popover-wrapper{pointer-events:auto}:host(.overlay-hidden){display:none}.popover-wrapper{z-index:10}.popover-content{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}::slotted(.popover-viewport){--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden}:host(.popover-nested.popover-side-left){--offset-x:5px}:host(.popover-nested.popover-side-right){--offset-x:-5px}:host(.popover-nested.popover-side-start){--offset-x:5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-start),:host-context([dir=rtl]).popover-nested.popover-side-start{--offset-x:-5px}@supports selector(:dir(rtl)){:host(.popover-nested.popover-side-start:dir(rtl)){--offset-x:-5px}}:host(.popover-nested.popover-side-end){--offset-x:-5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-end),:host-context([dir=rtl]).popover-nested.popover-side-end{--offset-x:5px}@supports selector(:dir(rtl)){:host(.popover-nested.popover-side-end:dir(rtl)){--offset-x:5px}}:host{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}.popover-content{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}:host-context([dir=rtl]) .popover-content{-webkit-transform-origin:right top;transform-origin:right top}[dir=rtl] .popover-content{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){.popover-content:dir(rtl){-webkit-transform-origin:right top;transform-origin:right top}}.popover-viewport{-webkit-transition-delay:100ms;transition-delay:100ms}.popover-wrapper{opacity:0}"}},5256:(re,N,f)=>{f.d(N,{c:()=>R,g:()=>F,h:()=>d,o:()=>T});var S=f(1528);const d=(h,g)=>null!==g.closest(h),R=(h,g)=>"string"==typeof h&&h.length>0?Object.assign({"ion-color":!0,[`ion-color-${h}`]:!0},g):g,F=h=>{const g={};return(h=>void 0!==h?(Array.isArray(h)?h:h.split(" ")).filter(y=>null!=y).map(y=>y.trim()).filter(y=>""!==y):[])(h).forEach(y=>g[y]=!0),g},V=/^[a-z][a-z0-9+\-.]*:/,T=function(){var h=(0,S.c)(function*(g,y,v,B){if(null!=g&&"#"!==g[0]&&!V.test(g)){const Y=document.querySelector("ion-router");if(Y)return null!=y&&y.preventDefault(),Y.push(g,v,B)}return!1});return function(y,v,B,Y){return h.apply(this,arguments)}}()}}]);