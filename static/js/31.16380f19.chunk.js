(this.webpackJsonpkiwiyard=this.webpackJsonpkiwiyard||[]).push([[31],{1100:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(6),r=t(400),s=t(10),m=t(77),i=t(2),o=t(182),d=t(181),p=t(125),u=t(183);var E=t(72),b=t(5),f=(t(48),t(4),t(3)),x=t(412),g=t(151),N=t(7);var v=l.a.createContext({}),h=t(101),w=l.a.forwardRef((function(e,a){var t,n=e.children,c=e.classes,r=e.className,s=e.defaultExpanded,m=void 0!==s&&s,N=e.disabled,w=void 0!==N&&N,k=e.expanded,y=e.onChange,z=e.square,j=void 0!==z&&z,C=e.TransitionComponent,I=void 0===C?x.a:C,O=e.TransitionProps,R=Object(b.a)(e,["children","classes","className","defaultExpanded","disabled","expanded","onChange","square","TransitionComponent","TransitionProps"]),A=Object(h.a)({controlled:k,default:m,name:"ExpansionPanel"}),P=Object(E.a)(A,2),B=P[0],M=P[1],D=l.a.useCallback((function(e){M(!B),y&&y(e,!B)}),[B,y,M]),F=l.a.Children.toArray(n),$=(t=F,Object(o.a)(t)||Object(d.a)(t)||Object(p.a)(t)||Object(u.a)()),q=$[0],S=$.slice(1),T=l.a.useMemo((function(){return{expanded:B,disabled:w,toggle:D}}),[B,w,D]);return l.a.createElement(g.a,Object(i.a)({className:Object(f.a)(c.root,r,B&&c.expanded,w&&c.disabled,!j&&c.rounded),ref:a,square:j},R),l.a.createElement(v.Provider,{value:T},q),l.a.createElement(I,Object(i.a)({in:B,timeout:"auto"},O),l.a.createElement("div",{"aria-labelledby":q.props.id,id:q.props["aria-controls"],role:"region"},S)))})),k=Object(N.a)((function(e){var a={duration:e.transitions.duration.shortest};return{root:{position:"relative",transition:e.transitions.create(["margin"],a),"&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:e.palette.divider,transition:e.transitions.create(["opacity","background-color"],a)},"&:first-child":{"&:before":{display:"none"}},"&$expanded":{margin:"16px 0","&:first-child":{marginTop:0},"&:last-child":{marginBottom:0},"&:before":{opacity:0}},"&$expanded + &":{"&:before":{display:"none"}},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},rounded:{borderRadius:0,"&:first-child":{borderTopLeftRadius:e.shape.borderRadius,borderTopRightRadius:e.shape.borderRadius},"&:last-child":{borderBottomLeftRadius:e.shape.borderRadius,borderBottomRightRadius:e.shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},expanded:{},disabled:{}}}),{name:"MuiExpansionPanel"})(w),y=l.a.forwardRef((function(e,a){var t=e.classes,n=e.className,c=Object(b.a)(e,["classes","className"]);return l.a.createElement("div",Object(i.a)({className:Object(f.a)(t.root,n),ref:a},c))})),z=Object(N.a)({root:{display:"flex",padding:"8px 24px 24px"}},{name:"MuiExpansionPanelDetails"})(y),j=t(106),C=t(328),I=l.a.forwardRef((function(e,a){var t=e.children,n=e.classes,c=e.className,r=e.expandIcon,s=e.IconButtonProps,m=e.onBlur,o=e.onClick,d=e.onFocusVisible,p=Object(b.a)(e,["children","classes","className","expandIcon","IconButtonProps","onBlur","onClick","onFocusVisible"]),u=l.a.useState(!1),E=u[0],x=u[1],g=l.a.useContext(v),N=g.disabled,h=void 0!==N&&N,w=g.expanded,k=g.toggle;return l.a.createElement(j.a,Object(i.a)({focusRipple:!1,disableRipple:!0,disabled:h,component:"div","aria-expanded":w,className:Object(f.a)(n.root,c,h&&n.disabled,w&&n.expanded,E&&n.focused),onFocusVisible:function(e){x(!0),d&&d(e)},onBlur:function(e){x(!1),m&&m(e)},onClick:function(e){k&&k(e),o&&o(e)},ref:a},p),l.a.createElement("div",{className:Object(f.a)(n.content,w&&n.expanded)},t),r&&l.a.createElement(C.a,Object(i.a)({className:Object(f.a)(n.expandIcon,w&&n.expanded),edge:"end",component:"div",tabIndex:null,role:null,"aria-hidden":!0},s),r))})),O=Object(N.a)((function(e){var a={duration:e.transitions.duration.shortest};return{root:{display:"flex",minHeight:48,transition:e.transitions.create(["min-height","background-color"],a),padding:"0 24px 0 24px","&:hover:not($disabled)":{cursor:"pointer"},"&$expanded":{minHeight:64},"&$focused":{backgroundColor:e.palette.grey[300]},"&$disabled":{opacity:.38}},expanded:{},focused:{},disabled:{},content:{display:"flex",flexGrow:1,transition:e.transitions.create(["margin"],a),margin:"12px 0","&$expanded":{margin:"20px 0"}},expandIcon:{transform:"rotate(0deg)",transition:e.transitions.create("transform",a),"&:hover":{backgroundColor:"transparent"},"&$expanded":{transform:"rotate(180deg)"}}}}),{name:"MuiExpansionPanelSummary"})(I),R=t(510),A=t.n(R);function P(){var e=l.a.useState(!1),a=Object(s.a)(e,2),t=a[0],c=a[1],r=function(e){return function(a,t){c(!!t&&e)}};return l.a.createElement(n.Fragment,null,l.a.createElement(k,{expanded:"panel1"===t,onChange:r("panel1")},l.a.createElement(O,{expandIcon:l.a.createElement(A.a,null),"aria-controls":"panel1bh-content",id:"panel1bh-header"},l.a.createElement(m.a,null,"General settings")),l.a.createElement(z,null,l.a.createElement(m.a,null,"Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam."))),l.a.createElement(k,{expanded:"panel2"===t,onChange:r("panel2")},l.a.createElement(O,{expandIcon:l.a.createElement(A.a,null),"aria-controls":"panel2bh-content",id:"panel2bh-header"},l.a.createElement(m.a,null,"Users")),l.a.createElement(z,null,l.a.createElement(m.a,null,"Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet."))),l.a.createElement(k,{expanded:"panel3"===t,onChange:r("panel3")},l.a.createElement(O,{expandIcon:l.a.createElement(A.a,null),"aria-controls":"panel3bh-content",id:"panel3bh-header"},l.a.createElement(m.a,null,"Advanced settings")),l.a.createElement(z,null,l.a.createElement(m.a,null,"Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue."))),l.a.createElement(k,{expanded:"panel4"===t,onChange:r("panel4")},l.a.createElement(O,{expandIcon:l.a.createElement(A.a,null),"aria-controls":"panel4bh-content",id:"panel4bh-header"},l.a.createElement(m.a,null,"Personal data")),l.a.createElement(z,null,l.a.createElement(m.a,null,"Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue."))))}var B=t(424),M=t(452);function D(){var e,a=l.a.useState(!1),t=Object(s.a)(a,2),c=t[0],r=t[1];return l.a.createElement(n.Fragment,null,l.a.createElement(k,{expanded:"panel1"===c,onChange:(e="panel1",function(a,t){r(!!t&&e)})},l.a.createElement(O,{expandIcon:l.a.createElement(A.a,null),"aria-label":"Expand","aria-controls":"additional-actions1-content",id:"additional-actions1-header"},l.a.createElement(B.a,{"aria-label":"Acknowledge",className:"mb-0",onClick:function(e){return e.stopPropagation()},onFocus:function(e){return e.stopPropagation()},control:l.a.createElement(M.a,null),label:"I acknowledge that I should stop the click event propagation"})),l.a.createElement(z,null,l.a.createElement(m.a,{color:"textSecondary"},"The click event of the nested action will propagate up and expand the panel unless you explicitly stop it."))))}var F=t(1),$=t(401),q=t(334),S=t(398),T=t(330),H=t(335),L=t(399);function _(){var e=l.a.useState(!1),a=Object(s.a)(e,2),t=a[0],c=a[1],r=function(e){return function(a,t){c(!!t&&e)}};return l.a.createElement(n.Fragment,null,l.a.createElement(k,{expanded:"panel1"===t,onChange:r("panel1")},l.a.createElement(O,{expandIcon:l.a.createElement(A.a,null),"aria-controls":"panel1bh-content",id:"panel1bh-header"},l.a.createElement(m.a,null,"Navigation menu")),l.a.createElement(z,{className:"d-block p-0"},l.a.createElement("div",null,l.a.createElement("div",{className:"bg-composed-wrapper bg-asteroid"},l.a.createElement("div",{className:"bg-composed-wrapper--image bg-composed-img-2"}),l.a.createElement("div",{className:"bg-composed-wrapper--content text-light p-4"},l.a.createElement("h5",{className:"mb-1"},"Navigation"),l.a.createElement("p",{className:"mb-0 opacity-7"},"This is a composed background"))),l.a.createElement($.a,null,l.a.createElement(q.a,{button:!0,className:"align-items-center d-flex pl-3"},l.a.createElement(F.a,{icon:["far","user"],className:"nav-icon-wrapper text-primary font-size-lg mr-2"}),l.a.createElement("span",null,"My profile")),l.a.createElement(q.a,{button:!0,className:"align-items-center d-flex pl-3"},l.a.createElement(F.a,{icon:["far","bell"],className:"nav-icon-wrapper text-info font-size-lg mr-2"}),l.a.createElement("span",null,"Notifications")),l.a.createElement(q.a,{button:!0,className:"align-items-center d-flex pl-3"},l.a.createElement(F.a,{icon:["fas","award"],className:"nav-icon-wrapper text-danger font-size-lg mr-2"}),l.a.createElement("span",null,"Awards"),l.a.createElement("span",{className:"ml-auto badge badge-danger"},"29")),l.a.createElement(q.a,{button:!0,className:"align-items-center d-flex pl-3"},l.a.createElement(F.a,{icon:["far","calendar-alt"],className:"nav-icon-wrapper text-success font-size-lg mr-2"}),l.a.createElement("span",null,"Events"),l.a.createElement("span",{className:"ml-auto badge badge-info"},"48")),l.a.createElement(q.a,{button:!0,className:"align-items-center d-flex pl-3"},l.a.createElement(F.a,{icon:["fas","sliders-h"],className:"nav-icon-wrapper text-warning font-size-lg mr-2"}),l.a.createElement("span",null,"Account settings"))),l.a.createElement(S.a,null),l.a.createElement("div",{className:"card-body d-block text-center"},l.a.createElement(T.a,{size:"small",variant:"contained",color:"primary"},l.a.createElement("span",{className:"btn-wrapper--icon"},l.a.createElement(F.a,{icon:["fas","lemon"]})),l.a.createElement("span",{className:"btn-wrapper--label"},"Details")))))),l.a.createElement(k,{expanded:"panel2"===t,onChange:r("panel2")},l.a.createElement(O,{expandIcon:l.a.createElement(A.a,null),"aria-controls":"panel2bh-content",id:"panel2bh-header"},l.a.createElement(m.a,null,"List blocks")),l.a.createElement(z,{className:"d-block p-0"},l.a.createElement(S.a,null),l.a.createElement($.a,{className:"py-0"},l.a.createElement(q.a,{className:"pt-4 pb-4 d-block"},l.a.createElement("div",{className:"d-flex align-items-center flex-column flex-sm-row"},l.a.createElement("div",null,l.a.createElement("div",{className:"bg-premium-dark text-center text-white font-size-xl d-50 rounded-circle mb-3 mb-sm-0"},l.a.createElement(F.a,{icon:["far","lightbulb"]}))),l.a.createElement("div",{className:"pl-0 pl-sm-4"},l.a.createElement("div",{className:"d-block text-center d-sm-flex align-items-center"},l.a.createElement("span",{className:"font-size-lg"},"Business"),l.a.createElement("span",{className:"text-info ml-2 badge badge-neutral-info"},"New")),l.a.createElement("p",{className:"text-black-50 mb-0"},"Grow familiar with the countless...")),l.a.createElement("div",{className:"mt-3 mt-sm-0 ml-sm-auto"},l.a.createElement(H.a,{color:"secondary"},l.a.createElement("span",{className:"btn-wrapper--icon"},l.a.createElement(F.a,{icon:["far","comment-dots"]})))))),l.a.createElement(S.a,null),l.a.createElement(q.a,{className:"pt-4 pb-4 d-block"},l.a.createElement("div",{className:"d-flex align-items-center flex-column flex-sm-row"},l.a.createElement("div",null,l.a.createElement("div",{className:"bg-warning text-center text-white font-size-xl d-50 rounded-circle mb-3 mb-sm-0"},l.a.createElement(F.a,{icon:["far","eye"]}))),l.a.createElement("div",{className:"pl-0 pl-sm-4"},l.a.createElement("div",{className:"d-block text-center d-sm-flex align-items-center"},l.a.createElement("span",{className:"font-size-lg"},"Images")),l.a.createElement("p",{className:"text-black-50 mb-0"},"Absorbed in the exquisite sense...")),l.a.createElement("div",{className:"mt-3 mt-sm-0 ml-sm-auto"},l.a.createElement(H.a,{color:"secondary"},l.a.createElement("span",{className:"btn-wrapper--icon"},l.a.createElement(F.a,{icon:["far","object-group"]})))))),l.a.createElement(S.a,null),l.a.createElement(q.a,{className:"pt-4 pb-4 d-block"},l.a.createElement("div",{className:"d-flex align-items-center flex-column flex-sm-row"},l.a.createElement("div",null,l.a.createElement("div",{className:"bg-white border-primary border-2 text-center text-primary font-size-xl d-50 rounded-circle mb-3 mb-sm-0"},l.a.createElement(F.a,{icon:["fas","lemon"]}))),l.a.createElement("div",{className:"pl-0 pl-sm-4"},l.a.createElement("div",{className:"d-block text-center d-sm-flex align-items-center"},l.a.createElement("span",{className:"font-size-lg"},"Finance")),l.a.createElement("p",{className:"text-black-50 mb-0"},"A wonderful serenity has taken ...")),l.a.createElement("div",{className:"mt-3 mt-sm-0 ml-sm-auto"},l.a.createElement(H.a,{color:"primary"},l.a.createElement("span",{className:"btn-wrapper--icon"},l.a.createElement(F.a,{icon:["fas","lemon"]}))))))))),l.a.createElement(k,{expanded:"panel3"===t,onChange:r("panel3")},l.a.createElement(O,{expandIcon:l.a.createElement(A.a,null),"aria-controls":"panel3bh-content",id:"panel3bh-header"},l.a.createElement(m.a,null,"Alternate navs")),l.a.createElement(z,{className:"d-block p-0"},l.a.createElement(S.a,null),l.a.createElement($.a,{className:"py-0"},l.a.createElement(q.a,{button:!0,className:"align-box-row"},l.a.createElement(F.a,{icon:["far","file-excel"],className:"text-success font-size-lg mr-3"}),l.a.createElement("div",null,l.a.createElement("div",null,"Excel_doc.csv")),l.a.createElement("div",{className:"ml-auto"},l.a.createElement(F.a,{icon:["fas","caret-right"],className:"text-black-50"}))),l.a.createElement(q.a,{button:!0,className:"align-box-row"},l.a.createElement(F.a,{icon:["far","file-archive"],className:"text-warning font-size-lg mr-3"}),l.a.createElement("div",null,"Archive_docs.zip"),l.a.createElement("div",{className:"ml-auto"},l.a.createElement(F.a,{icon:["fas","caret-right"],className:"text-black-50"}))),l.a.createElement(q.a,{button:!0,className:"align-box-row"},l.a.createElement("div",null,l.a.createElement(F.a,{icon:["far","file-pdf"],className:"text-danger font-size-lg mr-3"}),"Adobe_file.pdf",l.a.createElement(L.a,{color:"primary",className:"ml-2"},"New")),l.a.createElement("div",{className:"ml-auto"},l.a.createElement(F.a,{icon:["fas","caret-right"],className:"text-black-50"}))),l.a.createElement(q.a,{button:!0,className:"align-box-row"},l.a.createElement("div",null,l.a.createElement(F.a,{icon:["far","file-word"],className:"text-first font-size-lg mr-3"}),"Word_file.docx"),l.a.createElement("div",{className:"ml-auto"},l.a.createElement(F.a,{icon:["fas","caret-right"],className:"text-black-50"})))))))}var G=t(421),V=t(331),J=t(94),W=t.n(J),U=t(95),K=t.n(U);function Q(){var e=l.a.useState(!1),a=Object(s.a)(e,2),t=a[0],c=a[1],i=function(e){return function(a,t){c(!!t&&e)}};return l.a.createElement(n.Fragment,null,l.a.createElement(k,{expanded:"panel1"===t,onChange:i("panel1")},l.a.createElement(O,{expandIcon:l.a.createElement(A.a,null),"aria-controls":"panel1bh-content",id:"panel1bh-header"},l.a.createElement(m.a,null,"Latest blog posts")),l.a.createElement(z,{className:"d-block p-0"},l.a.createElement(S.a,null),l.a.createElement($.a,{className:"py-0"},l.a.createElement(q.a,{className:"py-4"},l.a.createElement("div",{className:"d-flex flex-column flex-sm-row align-items-start"},l.a.createElement("div",null,l.a.createElement(G.a,{className:"card-transparent mb-3 mb-sm-0"},l.a.createElement("a",{href:"#/",onClick:function(e){return e.preventDefault()},className:"card-img-wrapper rounded"},l.a.createElement("div",{className:"img-wrapper-overlay"},l.a.createElement("div",{className:"overlay-btn-wrapper"},l.a.createElement(H.a,{size:"small",color:"secondary",className:"mx-auto d-flex align-items-center"},l.a.createElement(F.a,{icon:["fas","plus-circle"],className:"font-size-lg"})))),l.a.createElement("img",{alt:"...",className:"card-img-top rounded",src:K.a,style:{width:160}})))),l.a.createElement("div",{className:"pl-0 pl-sm-4"},l.a.createElement("div",{className:"mb-1"},l.a.createElement("a",{className:"font-size-lg",href:"#/",onClick:function(e){return e.preventDefault()}},"Meeting minutes")),l.a.createElement("div",null,l.a.createElement("div",{className:"text-info badge badge-neutral-info"},"Articles"),l.a.createElement("div",{className:"text-danger ml-2 badge badge-neutral-danger"},"Posts")),l.a.createElement("p",{className:"mb-0 mt-2 text-black-50"},"A wonderful serenity has taken possession of my entire soul, like these sweet mornings ...")))),l.a.createElement(q.a,{className:"py-4"},l.a.createElement("div",{className:"d-flex flex-column flex-sm-row align-items-start"},l.a.createElement("div",null,l.a.createElement(G.a,{className:"card-transparent mb-3 mb-sm-0"},l.a.createElement("a",{href:"#/",onClick:function(e){return e.preventDefault()},className:"card-img-wrapper rounded"},l.a.createElement("div",{className:"img-wrapper-overlay"},l.a.createElement("div",{className:"overlay-btn-wrapper"},l.a.createElement(H.a,{size:"small",color:"secondary",className:"mx-auto d-flex align-items-center"},l.a.createElement(F.a,{icon:["fas","plus-circle"],className:"font-size-lg"})))),l.a.createElement("img",{alt:"...",className:"card-img-top rounded",src:W.a,style:{width:160}})))),l.a.createElement("div",{className:"pl-0 pl-sm-4"},l.a.createElement("div",{className:"mb-1"},l.a.createElement("a",{className:"font-size-lg",href:"#/",onClick:function(e){return e.preventDefault()}},"Sales reports for this week")),l.a.createElement("div",null,l.a.createElement("div",{className:"text-success badge badge-neutral-success"},"Blog")),l.a.createElement("p",{className:"mt-2 text-black-50"},"Who formed us in his own image, and the breath ...")))),l.a.createElement(q.a,{className:"bg-secondary d-block text-center p-3"},l.a.createElement(V.a,{arrow:!0,title:"Facebook"},l.a.createElement(T.a,{color:"default",className:"text-facebook"},l.a.createElement("span",{className:"btn-wrapper--icon"},l.a.createElement(F.a,{icon:["fab","facebook"]})))),l.a.createElement(V.a,{arrow:!0,title:"Dribbble"},l.a.createElement(T.a,{color:"default",className:"text-dribbble mr-2 ml-2"},l.a.createElement("span",{className:"btn-wrapper--icon"},l.a.createElement(F.a,{icon:["fab","dribbble"]})))),l.a.createElement(V.a,{arrow:!0,title:"Twitter"},l.a.createElement(T.a,{color:"default",className:"text-twitter"},l.a.createElement("span",{className:"btn-wrapper--icon"},l.a.createElement(F.a,{icon:["fab","twitter"]})))))))),l.a.createElement(k,{expanded:"panel2"===t,onChange:i("panel2")},l.a.createElement(O,{expandIcon:l.a.createElement(A.a,null),"aria-controls":"panel2bh-content",id:"panel2bh-header"},l.a.createElement(m.a,null,"Chart boxes")),l.a.createElement(z,{className:"d-block p-0"},l.a.createElement(S.a,null),l.a.createElement("div",{className:"px-3 pt-3"},l.a.createElement(r.a,{container:!0,spacing:4},l.a.createElement(r.a,{xs:12,sm:4,item:!0},l.a.createElement("div",{className:"bg-secondary p-3 text-center rounded"},l.a.createElement("div",null,l.a.createElement(F.a,{icon:["far","user"],className:"font-size-xxl text-warning"})),l.a.createElement("div",{className:"mt-2 line-height-sm"},l.a.createElement("b",{className:"font-size-lg"},"2,345"),l.a.createElement("span",{className:"text-black-50 d-block"},"users")))),l.a.createElement(r.a,{xs:12,sm:4,item:!0},l.a.createElement("div",{className:"bg-secondary p-3 text-center rounded"},l.a.createElement("div",null,l.a.createElement(F.a,{icon:["fas","lemon"],className:"font-size-xxl text-success"})),l.a.createElement("div",{className:"mt-2 line-height-sm"},l.a.createElement("b",{className:"font-size-lg"},"$3,586"),l.a.createElement("span",{className:"text-black-50 d-block"},"sales")))),l.a.createElement(r.a,{xs:12,sm:4,item:!0},l.a.createElement("div",{className:"bg-secondary p-3 text-center rounded"},l.a.createElement("div",null,l.a.createElement(F.a,{icon:["far","chart-bar"],className:"font-size-xxl text-info"})),l.a.createElement("div",{className:"mt-2 line-height-sm"},l.a.createElement("b",{className:"font-size-lg"},"$9,693"),l.a.createElement("span",{className:"text-black-50 d-block"},"revenue")))))),l.a.createElement(S.a,{className:"my-3"}),l.a.createElement("div",{className:"text-center d-flex align-items-center justify-content-center mb-3"},l.a.createElement(V.a,{arrow:!0,title:"Menu Example"},l.a.createElement(T.a,{color:"primary",variant:"outlined",className:"m-1 d-inline-flex align-items-center justify-content-center text-center font-size-xxl d-50 rounded"},l.a.createElement(F.a,{icon:["far","building"],className:"font-size-lg"}))),l.a.createElement(V.a,{arrow:!0,title:"Menu Example"},l.a.createElement(T.a,{color:"primary",variant:"outlined",className:"m-1 d-inline-flex align-items-center justify-content-center text-center font-size-xxl d-50 rounded"},l.a.createElement(F.a,{icon:["far","lightbulb"],className:"font-size-lg"}))),l.a.createElement(V.a,{arrow:!0,title:"Menu Example"},l.a.createElement(T.a,{color:"primary",variant:"outlined",className:"m-1 d-inline-flex align-items-center justify-content-center text-center font-size-xxl d-50 rounded"},l.a.createElement(F.a,{icon:["far","object-group"],className:"font-size-lg"})))))),l.a.createElement(k,{expanded:"panel3"===t,onChange:i("panel3")},l.a.createElement(O,{expandIcon:l.a.createElement(A.a,null),"aria-controls":"panel3bh-content",id:"panel3bh-header"},l.a.createElement(m.a,null,"Statistics blocks")),l.a.createElement(z,{className:"d-block p-0"},l.a.createElement(S.a,null),l.a.createElement("div",{className:"grid-menu grid-menu-2col"},l.a.createElement(r.a,{container:!0,spacing:0},l.a.createElement(r.a,{item:!0,sm:6},l.a.createElement(T.a,{color:"primary",className:"p-4 w-100"},l.a.createElement("div",{className:"align-box-row align-items-start"},l.a.createElement("div",{className:"mr-3"},l.a.createElement("div",{className:"bg-love-kiss text-center text-white font-size-xl d-50 rounded-circle"},l.a.createElement(F.a,{icon:["fas","save"]}))),l.a.createElement("div",{className:"text-left"},l.a.createElement("div",{className:"font-weight-bold"},l.a.createElement("small",{className:"text-black-50 d-block mb-1 text-uppercase"},"New Accounts"),l.a.createElement("span",{className:"font-size-xxl mt-1"},"586,356")),l.a.createElement("div",{className:"mt-1"},l.a.createElement(F.a,{icon:["fas","arrow-up"],className:"text-success"}),l.a.createElement("span",{className:"text-success px-1"},"15.4%"),l.a.createElement("span",{className:"text-black-50"},"increase"))),l.a.createElement("div",{className:"ml-auto card-hover-indicator align-self-center"},l.a.createElement(F.a,{icon:["fas","chevron-right"],className:"font-size-xl"}))))),l.a.createElement(r.a,{item:!0,sm:6},l.a.createElement(T.a,{color:"primary",className:"p-4 w-100"},l.a.createElement("div",{className:"align-box-row align-items-start"},l.a.createElement("div",{className:"mr-3"},l.a.createElement("div",{className:"bg-happy-fisher text-center text-white font-size-xl d-50 rounded-circle"},l.a.createElement(F.a,{icon:["far","building"]}))),l.a.createElement("div",{className:"text-left"},l.a.createElement("div",{className:"font-weight-bold"},l.a.createElement("small",{className:"text-black-50 d-block mb-1 text-uppercase"},"Sales"),l.a.createElement("span",{className:"font-size-xxl mt-1"},"23,274")),l.a.createElement("div",{className:"mt-1"},l.a.createElement(F.a,{icon:["fas","arrow-up"],className:"text-warning"}),l.a.createElement("span",{className:"text-warning px-1"},"7.4%"),l.a.createElement("span",{className:"text-black-50"},"more sales"))),l.a.createElement("div",{className:"ml-auto card-hover-indicator align-self-center"},l.a.createElement(F.a,{icon:["fas","chevron-right"],className:"font-size-xl"}))))))),l.a.createElement(S.a,null),l.a.createElement("div",{className:"card-footer d-block text-center"},l.a.createElement(T.a,{color:"primary",className:"m-3 border-0 p-0 shadow-sm bg-sunny-morning d-inline-block text-center text-white font-size-xxl d-70 rounded"},l.a.createElement(F.a,{icon:["far","comment-dots"],className:"font-size-lg"})),l.a.createElement(T.a,{color:"primary",className:"m-3 border-0 p-0 shadow-sm bg-strong-bliss d-inline-block text-center text-white font-size-xxl d-70 rounded"},l.a.createElement(F.a,{icon:["far","question-circle"],className:"font-size-lg"})),l.a.createElement(T.a,{color:"primary",className:"m-3 border-0 p-0 shadow-sm bg-night-sky d-inline-block text-center text-white font-size-xxl d-70 rounded"},l.a.createElement(F.a,{icon:["far","lightbulb"],className:"font-size-lg"}))))))}function X(){return l.a.createElement(n.Fragment,null,l.a.createElement(c.e,{titleHeading:"Accordions",titleDescription:"Accordions represent collapsable component with extended functionality."}),l.a.createElement(r.a,{container:!0,spacing:4},l.a.createElement(r.a,{item:!0,xs:12,lg:6},l.a.createElement(c.a,{sectionHeading:"Basic"},l.a.createElement(P,null)),l.a.createElement(c.a,{sectionHeading:"Integrations examples I"},l.a.createElement(_,null))),l.a.createElement(r.a,{item:!0,xs:12,lg:6},l.a.createElement(c.a,{sectionHeading:"Collapse"},l.a.createElement(D,null)),l.a.createElement(c.a,{sectionHeading:"Integrations examples II"},l.a.createElement(Q,null)))))}t.d(a,"default",(function(){return X}))},510:function(e,a,t){"use strict";var n=t(12);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var l=n(t(0)),c=(0,n(t(14)).default)(l.default.createElement("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");a.default=c}}]);