(this.webpackJsonpkiwiyard=this.webpackJsonpkiwiyard||[]).push([[74],{1153:function(e,t,a){"use strict";a.r(t);var l=a(0),c=a.n(l),n=a(6),r=a(74),i=a(75),s=a(77),m=a(76),o=a(403),p=a(333),d=a(659),u=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(r.a)(this,a);for(var l=arguments.length,c=new Array(l),n=0;n<l;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={displayColorPicker:!1,displayColorPicker2:!1},e.handleClick=function(){e.setState({displayColorPicker:!e.state.displayColorPicker})},e.handleClose=function(){e.setState({displayColorPicker:!1})},e.handleClick2=function(){e.setState({displayColorPicker2:!e.state.displayColorPicker2})},e.handleClose2=function(){e.setState({displayColorPicker2:!1})},e}return Object(i.a)(a,[{key:"render",value:function(){var e={position:"absolute",zIndex:"2",top:"48px",opacity:"1",visibility:"visible"},t={position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"};return c.a.createElement(l.Fragment,null,c.a.createElement(o.a,{container:!0,spacing:4},c.a.createElement(o.a,{item:!0,xs:12,sm:6},c.a.createElement(p.a,{color:"primary",variant:"contained",className:"w-100",onClick:this.handleClick},"Custom Picker Wrapper 1"),this.state.displayColorPicker?c.a.createElement("div",{className:"dropdown-menu p-0 m-0",style:e},c.a.createElement("div",{style:t,onClick:this.handleClose}),c.a.createElement(d.TwitterPicker,null)):null),c.a.createElement(o.a,{item:!0,xs:12,sm:6},c.a.createElement(p.a,{color:"primary",variant:"contained",className:"w-100",onClick:this.handleClick2},"Custom Picker Wrapper 2"),this.state.displayColorPicker2?c.a.createElement("div",{className:"dropdown-menu p-0 m-0",style:e},c.a.createElement("div",{style:t,onClick:this.handleClose2}),c.a.createElement(d.BlockPicker,{className:"m-0 border-0 w-100 mx-auto"})):null)))}}]),a}(l.Component);function k(){return c.a.createElement(l.Fragment,null,c.a.createElement("div",{className:"d-flex flex-row flex-wrap justify-content-center"},c.a.createElement("div",{className:"d-flex justify-content-center align-items-center p-5"},c.a.createElement("div",null,c.a.createElement(d.AlphaPicker,null),c.a.createElement("p",{className:"text-center pt-3 mb-0 text-black-50"},"Alpha colorpicker"))),c.a.createElement("div",{className:"d-flex justify-content-center align-items-center p-5"},c.a.createElement("div",null,c.a.createElement(d.BlockPicker,null),c.a.createElement("p",{className:"text-center pt-3 mb-0 text-black-50"},"Block colorpicker"))),c.a.createElement("div",{className:"d-flex justify-content-center align-items-center p-5"},c.a.createElement("div",null,c.a.createElement(d.ChromePicker,null),c.a.createElement("p",{className:"text-center pt-3 mb-0 text-black-50"},"Chrome colorpicker"))),c.a.createElement("div",{className:"d-flex justify-content-center align-items-center p-5"},c.a.createElement("div",null,c.a.createElement(d.CirclePicker,null),c.a.createElement("p",{className:"text-center pt-3 mb-0 text-black-50"},"Circle colorpicker"))),c.a.createElement("div",{className:"d-flex justify-content-center align-items-center p-5"},c.a.createElement("div",null,c.a.createElement(d.CompactPicker,null),c.a.createElement("p",{className:"text-center pt-3 mb-0 text-black-50"},"Compact colorpicker"))),c.a.createElement("div",{className:"d-flex justify-content-center align-items-center p-5"},c.a.createElement("div",null,c.a.createElement(d.GithubPicker,null),c.a.createElement("p",{className:"text-center pt-3 mb-0 text-black-50"},"Github colorpicker"))),c.a.createElement("div",{className:"d-flex justify-content-center align-items-center p-5"},c.a.createElement("div",null,c.a.createElement(d.HuePicker,null),c.a.createElement("p",{className:"text-center pt-3 mb-0 text-black-50"},"Hue colorpicker"))),c.a.createElement("div",{className:"d-flex justify-content-center align-items-center p-5"},c.a.createElement("div",null,c.a.createElement(d.PhotoshopPicker,null),c.a.createElement("p",{className:"text-center pt-3 mb-0 text-black-50"},"Photoshop colorpicker"))),c.a.createElement("div",{className:"d-flex justify-content-center align-items-center p-5"},c.a.createElement("div",null,c.a.createElement(d.SketchPicker,null),c.a.createElement("p",{className:"text-center pt-3 mb-0 text-black-50"},"Sketch colorpicker"))),c.a.createElement("div",{className:"d-flex justify-content-center align-items-center p-5"},c.a.createElement("div",null,c.a.createElement(d.SliderPicker,null),c.a.createElement("p",{className:"text-center pt-3 mb-0 text-black-50"},"Slider colorpicker"))),c.a.createElement("div",{className:"d-flex justify-content-center align-items-center p-5"},c.a.createElement("div",null,c.a.createElement(d.SwatchesPicker,null),c.a.createElement("p",{className:"text-center pt-3 mb-0 text-black-50"},"Swatches colorpicker"))),c.a.createElement("div",{className:"d-flex justify-content-center align-items-center p-5"},c.a.createElement("div",null,c.a.createElement(d.TwitterPicker,null),c.a.createElement("p",{className:"text-center pt-3 mb-0 text-black-50"},"Twitter colorpicker")))))}function E(){return c.a.createElement(l.Fragment,null,c.a.createElement(n.e,{titleHeading:"Colorpicker",titleDescription:"Color Pickers following the design from Photoshop, Sketch, Chrome, Twitter and more."}),c.a.createElement(n.b,{sectionHeading:"Basic"},c.a.createElement(u,null)),c.a.createElement(n.b,{sectionHeading:"Permanent"},c.a.createElement(k,null)))}a.d(t,"default",(function(){return E}))}}]);