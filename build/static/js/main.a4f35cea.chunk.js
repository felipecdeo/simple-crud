(this["webpackJsonpsimple-crud"]=this["webpackJsonpsimple-crud"]||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var i,c,d,o,r,a,l,u,s,b,m,x=n(1),p=n(6),j=n.n(p),y=n(2),h=n(3),f=Object(h.a)(i||(i=Object(y.a)(["\n  body {\n    width: 100%:\n    height: 100%;\n    margin: 0;\n    background-color: #252B42;\n    padding: 5px;\n    overflow: hidden;\n  }\n"]))),g=h.b.div(c||(c=Object(y.a)(["\n  text-align: center;\n  width: 100%;\n  border: solid 1px black;\n  border-radius: 10px;\n  position: relative;\n"]))),O=h.b.h1(d||(d=Object(y.a)(["\n  font-size: 34px;\n  color: white;\n"]))),v=n(0),E=function(e){return Object(v.jsx)(g,{children:Object(v.jsx)(O,{children:" Lista de Clientes "})})},C=n(4),B=(h.b.thead(o||(o=Object(y.a)(["\n  position: absolute;\n  border: solid 1px black;\n  border-radius: 10px;\n  color: white;\n  display: flex;\n  font-size: 20px;\n  flex-direction: column;\n  padding: 0 100px;\n"]))),h.b.button(r||(r=Object(y.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #7B5E7B;\n  border: solid black 2px;\n  border-radius: 20px;\n  margin: 30px auto 10px;\n  width: 200px;\n  height: 40px;\n  cursor: pointer;\n"])))),I=h.b.div(a||(a=Object(y.a)(["\n  position: fixed;\n  flex-direction: column;\n  align-items: center;\n  min-height: 500px;\n  width: 700px;\n  background: black;\n  margin: auto;\n  left: 0;\n  right: 0;\n  border-radius: 15px;\n  z-index: 2;\n"]))),w=h.b.h1(l||(l=Object(y.a)(["\n  color: white;\n  font-size: 30px;\n  text-align: center;\n"]))),k=h.b.form(u||(u=Object(y.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 50%;\n  margin: 0 auto;\n"]))),S=h.b.input(s||(s=Object(y.a)(["\n  margin: 15px 0;\n  height: 30px;\n  border-radius: 20px;\n  border: none;\n  padding: 2px 10px;\n"]))),q=h.b.div(b||(b=Object(y.a)(["\n  margin: 20px 0;\n  display: flex;\n  flex-direction: row;\n"]))),F=h.b.button(m||(m=Object(y.a)(["\n  margin: 0 30px;\n  width: 100px;\n  height: 30px;\n"]))),A=(n(22),function(){var e=function(){var e;return null!==(e=JSON.parse(localStorage.getItem("db_client")))&&void 0!==e?e:[]},t=function(e){return localStorage.setItem("db_client",JSON.stringify(e))},n=function(){return e()},i=function(i){if(n().forEach(c),document.getElementById("form").reportValidity()){var o={name:document.getElementById("name").value,email:document.getElementById("email").value,contact:document.getElementById("contact").value,city:document.getElementById("city").value},a=document.getElementById("name").dataset.index;"new"===a?(!function(n){var i=e();i.push(n),t(i)}(o),document.querySelectorAll("ModalInput").forEach((function(e){return e.value=""})),d(),r()):(!function(e,i){var c=n();c[e]=i,t(c)}(a,o),d(),r())}},c=function(e,t){var n=document.createElement("tr");n.innerHTML="\n        <td>".concat(e.name,"</td>\n        <td>").concat(e.email,"</td>\n        <td>").concat(e.contact,"</td>\n        <td>").concat(e.city,'</td>\n        <td>\n          <button type="button" id="edit-').concat(t,'"> Editar </button>\n          <button type="button" id="delete-').concat(t,'"> Excluir </button>\n        </td>\n      '),document.querySelector("#listContainer>tbody").appendChild(n)},d=function(){var e=n();document.querySelectorAll("#listContainer>tbody tr").forEach((function(e){return e.parentNode.removeChild(e)})),e.forEach(c)},o=function(e){var t=n()[e];t.index=e,function(e){document.getElementById("name").value=e.name,document.getElementById("email").value=e.email,document.getElementById("contact").value=e.contact,document.getElementById("city").value=e.city,document.getElementById("name").dataset.index=e.index}(t)},r=function(){var e=document.getElementById("modal");"none"===e.style.display?e.style.display="flex":e.style.display="none"};null===document.querySelector("#listContainer>tbody")||document.querySelector("#listContainer>tbody").addEventListener("click",(function(e){if("button"===e.target.type){var i=e.target.id.split("-"),c=Object(C.a)(i,2),a=c[0],l=c[1];"edit"===a?(o(l),r()):function(e){var i=n();i.splice(e,1),t(i),d()}(l)}}));var a=Object(x.useState)(!0),l=Object(C.a)(a,2),u=(l[0],l[1],Object(x.useState)(!1)),s=Object(C.a)(u,2);s[0],s[1];return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(B,{type:"checkbox",onClick:function(){return function(){var e=document.getElementById("modal");"none"===e.style.display?(e.style.display="flex",document.getElementById("name").removeAttribute("data-index"),document.getElementById("name").setAttribute("data-index","new")):(e.style.display="none",document.getElementById("name").removeAttribute("data-index"))}()}}),Object(v.jsxs)("table",{id:"listContainer",style:{position:"absolute"},children:[Object(v.jsx)("thead",{children:Object(v.jsxs)("tr",{style:{margin:"0 100px",fontSize:"24px",color:"orange"},children:[Object(v.jsx)("td",{children:" Nome "}),Object(v.jsx)("td",{children:" E-mail "}),Object(v.jsx)("td",{children:" Celular "}),Object(v.jsx)("td",{children:" Cidade "}),Object(v.jsx)("td",{children:" A\xe7\xf5es "})]})}),Object(v.jsx)("tbody",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between",width:"1440px",margin:"0 100px"}})]}),Object(v.jsxs)(I,{id:"modal",style:{display:"none"},children:[Object(v.jsx)(w,{children:"Novo Cliente:"}),Object(v.jsxs)(k,{form:"true",id:"form",children:[Object(v.jsx)(S,{id:"name","data-index":"new",type:"text",placeholder:"Nome do(a) Cliente",required:!0}),Object(v.jsx)(S,{id:"email",type:"email",placeholder:"E-mail do(a) Cliente",required:!0}),Object(v.jsx)(S,{id:"contact",type:"text",placeholder:"Celular do(a) Cliente",required:!0}),Object(v.jsx)(S,{id:"city",type:"text",placeholder:"Cidade do(a) Cliente",required:!0})]}),Object(v.jsxs)(q,{children:[Object(v.jsx)(F,{onClick:function(){return i()},children:" Salvar "}),Object(v.jsx)(F,{onClick:function(){return r()},children:" Cancelar "})]})]})]})});var N=function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(f,{}),Object(v.jsx)(E,{}),Object(v.jsx)(A,{})]})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,d=t.getLCP,o=t.getTTFB;n(e),i(e),c(e),d(e),o(e)}))};j.a.render(Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(N,{})}),document.getElementById("root")),z()}},[[23,1,2]]]);
//# sourceMappingURL=main.a4f35cea.chunk.js.map