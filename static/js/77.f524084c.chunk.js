(this.webpackJsonpkiwiyard=this.webpackJsonpkiwiyard||[]).push([[77],{1167:function(e,a,t){"use strict";t.r(a);var l=t(0),r=t.n(l),i=t(6),s=t(82),n=t(220),u=t(1172),c=Object(n.a)((function(e){return{root:{margin:"0 auto",padding:e.spacing(3)},margin:{height:e.spacing(3)}}})),m=[{value:0,label:"0\xb0C"},{value:20,label:"20\xb0C"},{value:37,label:"37\xb0C"},{value:100,label:"100\xb0C"}];function d(){return"\xb0C"}function o(e){return m.findIndex((function(a){return a.value===e}))+1}function g(){var e=c();return r.a.createElement(l.Fragment,null,r.a.createElement("div",{className:e.root},r.a.createElement(s.a,{id:"discrete-slider",gutterBottom:!0},"Temperature"),r.a.createElement(u.a,{defaultValue:30,getAriaValueText:d,"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",step:10,marks:!0,min:10,max:110}),r.a.createElement("div",{className:e.margin}),r.a.createElement(s.a,{id:"discrete-slider-small-steps",gutterBottom:!0},"Small steps"),r.a.createElement(u.a,{defaultValue:5e-8,getAriaValueText:d,"aria-labelledby":"discrete-slider-small-steps",step:1e-8,marks:!0,min:-5e-8,max:1e-7,valueLabelDisplay:"auto"}),r.a.createElement("div",{className:e.margin}),r.a.createElement(s.a,{id:"discrete-slider-custom",gutterBottom:!0},"Custom marks"),r.a.createElement(u.a,{defaultValue:20,getAriaValueText:d,"aria-labelledby":"discrete-slider-custom",step:10,valueLabelDisplay:"auto",marks:m}),r.a.createElement("div",{className:e.margin}),r.a.createElement(s.a,{id:"discrete-slider-restrict",gutterBottom:!0},"Restricted values"),r.a.createElement(u.a,{defaultValue:20,valueLabelFormat:o,getAriaValueText:d,"aria-labelledby":"discrete-slider-restrict",step:null,valueLabelDisplay:"auto",marks:m}),r.a.createElement("div",{className:e.margin}),r.a.createElement(s.a,{id:"discrete-slider-always",gutterBottom:!0},"Always visible"),r.a.createElement(u.a,{defaultValue:80,getAriaValueText:d,"aria-labelledby":"discrete-slider-always",step:10,marks:m,valueLabelDisplay:"on"})))}function b(){return r.a.createElement(l.Fragment,null,r.a.createElement(i.e,{titleHeading:"Slider",titleDescription:"Create sliders and range sliders with these React form widgets."}),r.a.createElement(i.b,{sectionHeading:"Material"},r.a.createElement(g,null)))}t.d(a,"default",(function(){return b}))}}]);