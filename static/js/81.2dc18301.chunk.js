(this.webpackJsonpkiwiyard=this.webpackJsonpkiwiyard||[]).push([[81],{1166:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(6),i=a(67),r=a(68),c=a(70),o=a(69),m=a(334),u=a(393),d=a(394),p=a(442),f=a(1066),h=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={files:[]},e}return Object(r.a)(a,[{key:"onDrop",value:function(e){this.setState({files:e})}},{key:"onCancel",value:function(){this.setState({files:[]})}},{key:"render",value:function(){var e=this.state.files.map((function(e){return l.a.createElement(m.a,{key:e.name},e.name," - ",e.size," bytes")}));return l.a.createElement(n.Fragment,null,l.a.createElement(p.a,{severity:"warning"},"This example does not actually upload any of the selected files, only simulates the upload process!"),l.a.createElement(u.a,{container:!0,spacing:4,className:"mt-4"},l.a.createElement(u.a,{item:!0,xs:12,sm:6},l.a.createElement("div",{className:"dropzone"},l.a.createElement(f.a,{onDrop:this.onDrop.bind(this),onFileDialogCancel:this.onCancel.bind(this)},(function(e){var t=e.getRootProps,a=e.getInputProps;return l.a.createElement("div",t(),l.a.createElement("input",a()),l.a.createElement("div",{className:"dz-message"},l.a.createElement("div",{className:"dx-text"},"Try dropping some files here, or click to select files to upload.")))})))),l.a.createElement(u.a,{item:!0,md:6,className:"d-flex justify-content-center align-items-center"},l.a.createElement("div",{className:"w-100"},0===this.state.files.length&&l.a.createElement(p.a,{severity:"success"},"Files uploaded for demo purposes will appear here!"),this.state.files.length>0&&l.a.createElement(d.a,null,l.a.createElement(m.a,{className:"font-weight-bold text-center"},"Uploaded Files"),e)))))}}]),a}(n.Component);function E(){return l.a.createElement(n.Fragment,null,l.a.createElement(s.e,{titleHeading:"Upload",titleDescription:"Handle your file uploads on the server easily and with style."}),l.a.createElement(s.b,{sectionHeading:"Dropzone"},l.a.createElement(h,null)))}a.d(t,"default",(function(){return E}))}}]);