(this.webpackJsonpkiwiyard=this.webpackJsonpkiwiyard||[]).push([[76],{1165:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),u=a(6),i=a(59),l=a(18),c=a(9),m=a(35),o=a(403),s=a(406),f=a(953),p=a.n(f),d=a(954);function b(e){var t=e.inputRef,a=Object(m.a)(e,["inputRef"]);return r.a.createElement(p.a,Object.assign({},a,{ref:function(e){t(e?e.inputElement:null)},mask:["(",/[1-9]/,/\d/,/\d/,")"," ",/\d/,/\d/,/\d/,"-",/\d/,/\d/,/\d/,/\d/],placeholderChar:"\u2000",showMask:!0}))}function g(e){var t=e.inputRef,a=e.onChange,n=Object(m.a)(e,["inputRef","onChange"]);return r.a.createElement(d.a,Object.assign({},n,{getInputRef:t,onValueChange:function(e){a({target:{value:e.value}})},thousandSeparator:!0,isNumericString:!0,prefix:"$"}))}function h(){var e=r.a.useState({textmask:"(1\u2000\u2000) \u2000\u2000\u2000-\u2000\u2000\u2000\u2000",numberformat:"1320"}),t=Object(c.a)(e,2),a=t[0],u=t[1],m=function(e){return function(t){u(Object(l.a)(Object(l.a)({},a),{},Object(i.a)({},e,t.target.value)))}};return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"my-5 p-5"},r.a.createElement(o.a,{container:!0,spacing:4},r.a.createElement(o.a,{item:!0,xs:6},r.a.createElement(s.a,{fullWidth:!0,variant:"outlined",label:"react-text-mask",value:a.textmask,onChange:m("textmask"),id:"formatted-numberformat-input",InputProps:{inputComponent:b}})),r.a.createElement(o.a,{item:!0,xs:6},r.a.createElement(s.a,{fullWidth:!0,variant:"outlined",label:"react-number-format",value:a.numberformat,onChange:m("numberformat"),id:"formatted-numberformat-input",InputProps:{inputComponent:g}})))))}function E(){return r.a.createElement(n.Fragment,null,r.a.createElement(u.e,{titleHeading:"Input Mask",titleDescription:"Add all kind of input masks for inputs for a better user experience."}),r.a.createElement(u.b,{sectionHeading:"Basic"},r.a.createElement(h,null)))}a.d(t,"default",(function(){return E}))}}]);