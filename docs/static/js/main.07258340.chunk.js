(this["webpackJsonp3d-website-test"]=this["webpackJsonp3d-website-test"]||[]).push([[0],{53:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){},66:function(e,t,c){"use strict";c.r(t);var n=c(5),s=c.n(n),i=c(45),r=c.n(i),o=(c(53),c(48)),a=c(15),j=(c(54),c(8)),l=c(10),d=c(25),u=c(71),b=c(72),O=c(73),h=c(39),x=(c(55),c(9)),f=function(){var e=Object(n.useRef)(),t=Object(n.useState)([0,0,50]),c=Object(l.a)(t,2),s=c[0],i=c[1],r=Object(n.useState)(0),o=Object(l.a)(r,2),a=(o[0],o[1],Object(n.useRef)()),f=[Object(n.useRef)(),Object(n.useRef)(),Object(n.useRef)(),Object(n.useRef)()],g=Object(n.useState)(!1),m=Object(l.a)(g,2),p=m[0],v=m[1],N=Object(n.useRef)();function w(){var e=Object(n.useRef)(),t=Array(3).fill().map((function(){return 500*(Math.random()-.5)}));return Object(x.jsx)(b.a,{ref:e,position:t,args:[.2],children:Object(x.jsx)("meshBasicMaterial",{})})}function R(e){var t=Object(n.useRef)();return Object(d.b)((function(e,c){t.current.rotation.x+=.005,t.current.rotation.y+=.005})),Object(x.jsx)(b.b,Object(j.a)(Object(j.a)({ref:t},e),{},{children:Object(x.jsx)("meshStandardMaterial",Object(j.a)({},e))}))}function y(){return Object(d.b)((function(e){e.clock;var t=e.camera;t.position.x=s[0],t.position.y=s[1],t.position.z=s[2]})),null}function M(e){return Object(x.jsx)(u.a,Object(j.a)(Object(j.a)({},e),{},{children:Object(x.jsx)("meshBasicMaterial",Object(j.a)({},e))}))}function k(){return Object(x.jsxs)(d.a,{style:{background:"black",width:"100vw",height:"100vh",position:"fixed",top:0,left:0},camera:{position:s},children:[Object(x.jsx)("ambientLight",{intensity:.1}),Object(x.jsx)("pointLight",{position:[40,40,0]}),Object(x.jsx)(y,{}),Object(x.jsx)(R,{wireframe:!0,args:[15,6,20,20],color:"#964dff"}),Object(x.jsx)(O.a,{color:"white",fontSize:20,position:[0,30,180],children:"ABOUT"}),Object(x.jsx)(O.a,{color:"black",fontSize:4,position:[0,5,181],children:"YOOOOO"}),Object(x.jsx)(M,{position:[-35,-10,180],radius:1,color:"white",args:[30,50,2]}),Object(x.jsx)(M,{position:[0,-10,180],radius:1,color:"white",args:[30,50,2]}),Object(x.jsx)(M,{position:[35,-10,180],color:"white",radius:1,args:[30,50,2]}),Array(800).fill().map(w),Object(x.jsxs)(h.a,{children:[Object(x.jsx)(h.c,{eskil:!1,offset:.2,darkness:1.1}),Object(x.jsx)(h.b,{opacity:.2})]})]})}function T(e){console.log(Number(e.target.id)-1),console.log(Number(e.target.id)),console.log("id:"),console.log(console.log(e.target.id)),f[Number(e.target.id)-1].current.style.borderBottomRightRadius="100px",f[Number(e.target.id)].current.style.borderTopRightRadius="100px"}function B(){for(var e=0;e<f.length;e++){var t=f[e];0===e?t.current.style.borderBottomRightRadius="30px":e===f.length-1?t.current.style.borderTopRightRadius="30px":(t.current.style.borderTopRightRadius="30px",t.current.style.borderBottomRightRadius="30px")}}return Object(n.useEffect)((function(){e.current.onscroll=function(t){t.preventDefault(),function(t){var c=e.current.scrollTop,n=s;n[2]=.2*c+50,i(n)}()}})),document.body.onmousemove=function(e){if(!p){var t={x:e.clientX,y:e.clientY},c=s;c[1]=.001+(t.y-window.innerHeight/2)/100,c[0]=.001+(t.x-window.innerWidth/2)/100,i(c)}},Object(n.useEffect)((function(){console.log(window.innerWidth),console.log(window.innerWidth<768),window.innerWidth<768&&v(!0),B()}),[]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(k,{}),Object(x.jsxs)("div",{ref:e,className:"website",children:[Object(x.jsx)("button",{className:"more-button",onClick:function(){a.current.classList.toggle("open"),N.current.classList.toggle("open")},children:Object(x.jsxs)("div",{ref:N,className:"hamburger",children:[Object(x.jsx)("div",{className:"line"}),Object(x.jsx)("div",{className:"line"}),Object(x.jsx)("div",{className:"line"})]})}),Object(x.jsxs)("ul",{className:"nav-links",ref:a,children:[Object(x.jsx)("div",{className:"round-edge-container",style:{marginTop:"15%"},children:Object(x.jsx)("div",{ref:f[0],className:"round-edge"})}),Object(x.jsx)("a",{href:"#",onMouseOver:T,onMouseOut:B,children:Object(x.jsx)("li",{id:"1",children:Object(x.jsx)("p",{id:"1",onMouseOver:T,onMouseOut:B,children:"About"})})}),Object(x.jsx)("div",{className:"round-edge-container",children:Object(x.jsx)("div",{ref:f[1],className:"round-edge"})}),Object(x.jsx)("a",{href:"#",onMouseOver:T,onMouseOut:B,children:Object(x.jsx)("li",{id:"2",onMouseOver:T,onMouseOut:B,children:Object(x.jsx)("p",{id:"2",children:"Contact"})})}),Object(x.jsx)("div",{className:"round-edge-container",children:Object(x.jsx)("div",{ref:f[2],className:"round-edge"})}),Object(x.jsx)("a",{href:"#",onMouseOver:T,onMouseOut:B,children:Object(x.jsx)("li",{id:"3",children:Object(x.jsx)("p",{id:"3",onMouseOver:T,onMouseOut:B,children:"Projects"})})}),Object(x.jsx)("div",{className:"round-edge-container",children:Object(x.jsx)("div",{ref:f[3],className:"round-edge"})})]}),Object(x.jsxs)("div",{className:"title-container",children:[Object(x.jsx)("p",{style:{},className:"title",children:"ITAI HAMMER."}),Object(x.jsx)("p",{style:{},className:"description",children:"Programmer \u2022 Designer \u2022 3D Artist \u2022 Photographer"})]}),Object(x.jsx)("div",{className:"empty"})]})]})};var g=function(){return Object(x.jsx)(o.a,{children:Object(x.jsx)(a.c,{children:Object(x.jsx)(a.a,{exact:!0,path:"/",component:f})})})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,74)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),i(e),r(e)}))};r.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(g,{})}),document.getElementById("root")),m()}},[[66,1,2]]]);
//# sourceMappingURL=main.07258340.chunk.js.map