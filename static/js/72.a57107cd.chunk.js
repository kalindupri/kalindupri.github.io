(this.webpackJsonpkiwiyard=this.webpackJsonpkiwiyard||[]).push([[72],{1102:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(6),c=n(1094),l=n(725),o=n(9),u=n(1148),d=n(1149),m="card",g=a.a.forwardRef((function(e,t){var n=e.text,i=e.isDragging,c=e.connectDragSource,l=e.connectDropTarget,o=Object(r.useRef)(null);c(o),l(o);var u=i?0:1;return Object(r.useImperativeHandle)(t,(function(){return{getNode:function(){return o.current}}})),a.a.createElement("div",{className:"card card-box px-4 py-2 m-2 font-weight-bold",ref:o,style:{opacity:u}},n)})),s=Object(u.a)(m,{hover:function(e,t,n){if(!n)return null;var r=n.getNode();if(!r)return null;var a=t.getItem().index,i=e.index;if(a!==i){var c=r.getBoundingClientRect(),l=(c.bottom-c.top)/2,o=t.getClientOffset().y-c.top;a<i&&o<l||a>i&&o>l||(e.moveCard(a,i),t.getItem().index=i)}}},(function(e){return{connectDropTarget:e.dropTarget()}}))(Object(d.a)(m,{beginDrag:function(e){return{id:e.id,index:e.index}}},(function(e,t){return{connectDragSource:e.dragSource(),isDragging:t.isDragging()}}))(g)),f=n(839),b=n.n(f),v=function(){var e=Object(r.useState)([{id:1,text:"Banana Boat"},{id:2,text:"Orange Juice"},{id:3,text:"Cuban Cigar"},{id:4,text:"Terrible Comedian"},{id:5,text:"Anxious Cab Driver"},{id:6,text:"Green Orange Potatoes"},{id:7,text:"Castles in the sky"}]),t=Object(o.a)(e,2),n=t[0],i=t[1],c=function(e,t){var r=n[e];i(b()(n,{$splice:[[e,1],[t,0,r]]}))};return a.a.createElement("div",{className:"col-md-6 my-4 p-0 mx-auto"},n.map((function(e,t){return a.a.createElement(s,{key:e.id,index:t,id:e.id,text:e.text,moveCard:c})})))};function p(){return a.a.createElement(r.Fragment,null,a.a.createElement(c.a,{backend:l.a},a.a.createElement(v,null)))}var E="box";function x(e){return{border:"1px solid rgba(0,0,0,0.2)",minHeight:"8rem",minWidth:"8rem",color:"white",backgroundColor:e,padding:"2rem",borderRadius:"0.5rem",paddingTop:"1rem",margin:"1rem",textAlign:"center",float:"left",fontSize:"1rem"}}var y=a.a.forwardRef((function(e,t){var n=e.greedy,i=e.isOver,c=e.isOverCurrent,l=e.connectDropTarget,u=e.children,d=Object(r.useState)(!1),m=Object(o.a)(d,2),g=m[0],s=m[1],f=Object(r.useState)(!1),b=Object(o.a)(f,2),v=b[0],p=b[1];Object(r.useImperativeHandle)(t,(function(){return{onDrop:function(e){p(e),s(!0)}}}),[]);var E=n?"greedy":"not greedy",y="rgba(60, 68, 177, 0.35)";return(c||i&&n)&&(y="#1bc943"),l(a.a.createElement("div",{style:x(y)},E,a.a.createElement("br",null),g&&a.a.createElement("span",null,"dropped ",v&&" on child"),a.a.createElement("div",null,u)))})),O=Object(u.a)(E,{drop:function(e,t,n){if(n){var r=t.didDrop();r&&!e.greedy||n.onDrop(r)}}},(function(e,t){return{connectDropTarget:e.dropTarget(),isOver:t.isOver(),isOverCurrent:t.isOver({shallow:!0})}}))(y),D=n(333),h=Object(d.a)(E,{beginDrag:function(){return{}}},(function(e){return{connectDragSource:e.dragSource()}}))((function(e){return(0,e.connectDragSource)(a.a.createElement("div",null,a.a.createElement(D.a,{size:"large",variant:"contained",color:"secondary"},"Drag me")))})),j=n(403),w=function(){return a.a.createElement("div",null,a.a.createElement("div",{className:"text-center"},a.a.createElement(h,null)),a.a.createElement("div",{className:"divider my-4"}),a.a.createElement(j.a,{container:!0,spacing:4},a.a.createElement(j.a,{item:!0,lg:6,className:"d-flex justify-content-center"},a.a.createElement(O,{greedy:!0},a.a.createElement(O,{greedy:!0},a.a.createElement(O,{greedy:!0})))),a.a.createElement(j.a,{item:!0,lg:6,className:"d-flex justify-content-center"},a.a.createElement(O,null,a.a.createElement(O,null,a.a.createElement(O,null))))))};function C(){return a.a.createElement(r.Fragment,null,a.a.createElement(c.a,{backend:l.a},a.a.createElement(w,null)))}function k(){return a.a.createElement(r.Fragment,null,a.a.createElement(i.e,{titleHeading:"Drag & Drop",titleDescription:"Enable draggable functionality on any DOM element. Move the draggable object by clicking on it with the mouse and dragging it anywhere within the viewport."}),a.a.createElement(i.b,{sectionHeading:"Basic"},a.a.createElement(p,null)),a.a.createElement(i.b,{sectionHeading:"Lists"},a.a.createElement(C,null)))}n.d(t,"default",(function(){return k}))}}]);