(this.webpackJsonpkiwiyard=this.webpackJsonpkiwiyard||[]).push([[36],{1127:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),i=a(9),o=a(333),l=a(331),s=a(5),u=a(21),m=a(2),d=(a(4),a(3)),f=a(7),b=a(46),E=a(30),g=a.n(E),p=a(53),v=a(26),h=a(62),O=a(54);function k(e){return e.substring(2).toLowerCase()}var j=r.a.forwardRef((function(e,t){var a=e.children,n=e.mouseEvent,c=void 0===n?"onClick":n,i=e.touchEvent,o=void 0===i?"onTouchEnd":i,l=e.onClickAway,s=r.a.useRef(!1),u=r.a.useRef(null),m=r.a.useRef(!1);r.a.useEffect((function(){return m.current=!0,function(){m.current=!1}}),[]);var d=Object(v.a)(u,t),f=r.a.useCallback((function(e){Object(h.a)(d,g.a.findDOMNode(e))}),[d]),b=Object(v.a)(a.ref,f),E=Object(O.a)((function(e){if(m.current)if(s.current)s.current=!1;else if(u.current){var t=Object(p.a)(u.current);t.documentElement&&t.documentElement.contains(e.target)&&!u.current.contains(e.target)&&l(e)}})),j=r.a.useCallback((function(){s.current=!0}),[]);return r.a.useEffect((function(){if(!1!==o){var e=k(o),t=Object(p.a)(u.current);return t.addEventListener(e,E),t.addEventListener("touchmove",j),function(){t.removeEventListener(e,E),t.removeEventListener("touchmove",j)}}}),[E,j,o]),r.a.useEffect((function(){if(!1!==c){var e=k(c),t=Object(p.a)(u.current);return t.addEventListener(e,E),function(){t.removeEventListener(e,E)}}}),[E,c]),r.a.createElement(r.a.Fragment,null,r.a.cloneElement(a,{ref:b}))})),x=a(12),N=a(88),w=a(267),y=a(176),C=a(23),L=r.a.forwardRef((function(e,t){var a=e.action,n=e.classes,c=e.className,i=e.message,o=e.role,l=void 0===o?"alert":o,u=Object(s.a)(e,["action","classes","className","message","role"]);return r.a.createElement(y.a,Object(m.a)({role:l,square:!0,elevation:6,className:Object(d.a)(n.root,c),ref:t},u),r.a.createElement("div",{className:n.message},i),a?r.a.createElement("div",{className:n.action},a):null)})),T=Object(f.a)((function(e){var t="light"===e.palette.type?.8:.98,a=Object(C.b)(e.palette.background.default,t);return{root:Object(m.a)({},e.typography.body2,Object(u.a)({color:e.palette.getContrastText(a),backgroundColor:a,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:e.shape.borderRadius,flexGrow:1},e.breakpoints.up("sm"),{flexGrow:"initial",minWidth:288})),message:{padding:"8px 0"},action:{display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}}}),{name:"MuiSnackbarContent"})(L),z=r.a.forwardRef((function(e,t){var a=e.action,n=e.anchorOrigin,c=(n=void 0===n?{vertical:"bottom",horizontal:"center"}:n).vertical,i=n.horizontal,o=e.autoHideDuration,l=void 0===o?null:o,u=e.children,f=e.classes,E=e.className,g=e.ClickAwayListenerProps,p=e.ContentProps,v=e.disableWindowBlurListener,h=void 0!==v&&v,k=e.message,y=e.onClose,C=e.onEnter,L=e.onEntered,z=e.onEntering,D=e.onExit,R=e.onExited,S=e.onExiting,M=e.onMouseEnter,H=e.onMouseLeave,I=e.open,P=e.resumeHideDuration,B=e.TransitionComponent,F=void 0===B?w.a:B,W=e.transitionDuration,A=void 0===W?{enter:b.b.enteringScreen,exit:b.b.leavingScreen}:W,q=e.TransitionProps,G=Object(s.a)(e,["action","anchorOrigin","autoHideDuration","children","classes","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onClose","onEnter","onEntered","onEntering","onExit","onExited","onExiting","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"]),J=r.a.useRef(),_=r.a.useState(!0),U=_[0],X=_[1],K=Object(O.a)((function(){y&&y.apply(void 0,arguments)})),Q=Object(O.a)((function(e){y&&null!=e&&(clearTimeout(J.current),J.current=setTimeout((function(){K(null,"timeout")}),e))}));r.a.useEffect((function(){return I&&Q(l),function(){clearTimeout(J.current)}}),[I,l,Q]);var V=function(){clearTimeout(J.current)},Y=r.a.useCallback((function(){null!=l&&Q(null!=P?P:.5*l)}),[l,P,Q]);return r.a.useEffect((function(){if(!h&&I)return window.addEventListener("focus",Y),window.addEventListener("blur",V),function(){window.removeEventListener("focus",Y),window.removeEventListener("blur",V)}}),[h,Y,I]),!I&&U?null:r.a.createElement(j,Object(m.a)({onClickAway:function(e){y&&y(e,"clickaway")}},g),r.a.createElement("div",Object(m.a)({className:Object(d.a)(f.root,f["anchorOrigin".concat(Object(x.a)(c)).concat(Object(x.a)(i))],E),onMouseEnter:function(e){M&&M(e),V()},onMouseLeave:function(e){H&&H(e),Y()},ref:t},G),r.a.createElement(F,Object(m.a)({appear:!0,in:I,onEnter:Object(N.a)((function(){X(!1)}),C),onEntered:L,onEntering:z,onExit:D,onExited:Object(N.a)((function(){X(!0)}),R),onExiting:S,timeout:A,direction:"top"===c?"down":"up"},q),u||r.a.createElement(T,Object(m.a)({message:k,action:a},p)))))})),D=Object(f.a)((function(e){var t={top:8},a={bottom:8},n={justifyContent:"flex-end"},r={justifyContent:"flex-start"},c={top:24},i={bottom:24},o={right:24},l={left:24},s={left:"50%",right:"auto",transform:"translateX(-50%)"};return{root:{zIndex:e.zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},anchorOriginTopCenter:Object(m.a)({},t,Object(u.a)({},e.breakpoints.up("sm"),Object(m.a)({},c,{},s))),anchorOriginBottomCenter:Object(m.a)({},a,Object(u.a)({},e.breakpoints.up("sm"),Object(m.a)({},i,{},s))),anchorOriginTopRight:Object(m.a)({},t,{},n,Object(u.a)({},e.breakpoints.up("sm"),Object(m.a)({left:"auto"},c,{},o))),anchorOriginBottomRight:Object(m.a)({},a,{},n,Object(u.a)({},e.breakpoints.up("sm"),Object(m.a)({left:"auto"},i,{},o))),anchorOriginTopLeft:Object(m.a)({},t,{},r,Object(u.a)({},e.breakpoints.up("sm"),Object(m.a)({right:"auto"},c,{},l))),anchorOriginBottomLeft:Object(m.a)({},a,{},r,Object(u.a)({},e.breakpoints.up("sm"),Object(m.a)({right:"auto"},i,{},l)))}}),{flip:!1,name:"MuiSnackbar"})(z),R=a(837),S=a.n(R);function M(){var e=r.a.useState(!1),t=Object(i.a)(e,2),a=t[0],c=t[1],s=function(e,t){"clickaway"!==t&&c(!1)};return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"text-center"},r.a.createElement(o.a,{className:"m-2",size:"large",color:"primary",variant:"contained",onClick:function(){c(!0)}},"Top Centered Snackbar"),r.a.createElement(D,{anchorOrigin:{vertical:"top",horizontal:"center"},open:a,autoHideDuration:6e3,onClose:s,message:"Note archived",action:r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{color:"primary",size:"small",onClick:s},"UNDO"),r.a.createElement(l.a,{size:"small","aria-label":"close",color:"inherit",onClick:s},r.a.createElement(S.a,{fontSize:"small"})))})))}var H=a(454);function I(){return r.a.createElement(n.Fragment,null,r.a.createElement(H.a,{className:"mb-4",severity:"success"},r.a.createElement("div",{className:"d-flex align-items-center align-content-center"},r.a.createElement("span",null,r.a.createElement("strong",{className:"d-block"},"Success!")," This is a success alert\u2014check it out!"))),r.a.createElement(H.a,{className:"mb-4",severity:"info"},r.a.createElement("div",{className:"d-flex align-items-center align-content-center"},r.a.createElement("span",null,r.a.createElement("strong",{className:"d-block"},"Info!")," This is an info alert\u2014check it out!"))),r.a.createElement(H.a,{className:"mb-4",severity:"warning"},r.a.createElement("div",{className:"d-flex align-items-center align-content-center"},r.a.createElement("span",null,r.a.createElement("strong",{className:"d-block"},"Warning!")," This is a warning alert\u2014check it out!"))),r.a.createElement(H.a,{className:"mb-4",severity:"error"},r.a.createElement("div",{className:"d-flex align-items-center align-content-center"},r.a.createElement("span",null,r.a.createElement("strong",{className:"d-block"},"Danger!")," This is an error alert\u2014check it out!"))))}var P=a(1),B=a(36),F=a.n(B);function W(){return r.a.createElement(n.Fragment,null,r.a.createElement(H.a,{variant:"outlined",className:"alerts-alternate mb-4",color:"success"},r.a.createElement("div",{className:"d-flex align-items-center align-content-start"},r.a.createElement("span",{className:"font-size-lg d-block d-40 mr-3 text-center bg-success text-white rounded-sm"},r.a.createElement(P.a,{icon:["far","object-group"]})),r.a.createElement("span",null,r.a.createElement("strong",{className:"d-block"},"Success!")," This is a success alert\u2014check it out!"))),r.a.createElement(H.a,{variant:"outlined",className:"alerts-alternate mb-4",color:"info"},r.a.createElement("div",{className:"d-flex align-items-center align-content-start"},r.a.createElement("span",{className:"font-size-lg d-block d-40 mr-3 text-center bg-info text-white rounded-sm"},r.a.createElement(F.a,null)),r.a.createElement("span",null,r.a.createElement("strong",{className:"d-block"},"Info!")," This is an info alert\u2014check it out!"))),r.a.createElement(H.a,{variant:"outlined",className:"alerts-alternate mb-4",color:"warning"},r.a.createElement("div",{className:"d-flex align-items-center align-content-start"},r.a.createElement("span",{className:"font-size-lg d-block d-40 mr-3 text-center bg-warning text-white rounded-sm"},r.a.createElement(P.a,{icon:["far","question-circle"]})),r.a.createElement("span",null,r.a.createElement("strong",{className:"d-block"},"Warning!")," This is a warning alert\u2014check it out!"))),r.a.createElement(H.a,{variant:"outlined",className:"alerts-alternate mb-4",color:"error"},r.a.createElement("div",{className:"d-flex align-items-center align-content-start"},r.a.createElement("span",{className:"font-size-lg d-block d-40 mr-3 text-center bg-danger text-white rounded-sm"},r.a.createElement(P.a,{icon:["far","keyboard"]})),r.a.createElement("span",null,r.a.createElement("strong",{className:"d-block"},"Danger!")," This is an error alert\u2014check it out!"))))}function A(){return r.a.createElement(n.Fragment,null,r.a.createElement(c.e,{titleHeading:"Notifications",titleDescription:"Show beautiful, animated growl like notifications or alerts on your pages screens."}),r.a.createElement(c.b,{sectionHeading:"Snackbars"},r.a.createElement(M,null)),r.a.createElement(c.b,{sectionHeading:"Basic alerts"},r.a.createElement(I,null)),r.a.createElement(c.b,{sectionHeading:"Alerts alternate style"},r.a.createElement(W,null)))}a.d(t,"default",(function(){return A}))},837:function(e,t,a){"use strict";var n=a(13);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),c=(0,n(a(14)).default)(r.default.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");t.default=c}}]);