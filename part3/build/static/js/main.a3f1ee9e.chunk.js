(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{16:function(e,t,n){e.exports=n(40)},21:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(15),u=n.n(c),o=(n(21),n(3)),s=n(2),i=n.n(s),l=n(4),f=n(5),m=n.n(f),p="/api/persons",d={getPersons:function(){var e=Object(l.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=m.a.get(p),e.next=3,t;case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),postPerson:function(){var e=Object(l.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=m.a.post(p,t),e.next=3,n;case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),deletePerson:function(){var e=Object(l.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=m.a.delete("".concat(p,"/").concat(t)),e.next=3,n;case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),putPerson:function(){var e=Object(l.a)(i.a.mark((function e(t,n){var a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=m.a.put("".concat(p,"/").concat(n),t),e.next=3,a;case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},b=function(e){var t=e.notify;if(null===t)return null;var n=t.message,a=t.className;return r.a.createElement("div",{className:a},n)},h=function(e){var t=e.filterPersons,n=e.handleDelete;return t.map((function(e){return r.a.createElement("p",{key:e.id},e.name," ",e.number," ",r.a.createElement("button",{onClick:function(){return n(e.id,e.name)}},"delete"))}))},v=function(e){var t=e.setPersons,n=e.persons,c=e.setMessage,u=Object(a.useState)(""),s=Object(o.a)(u,2),i=s[0],l=s[1],f=Object(a.useState)(""),m=Object(o.a)(f,2),p=m[0],b=m[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a={name:i,number:p},r=n.find((function(e){return e.name===i}));void 0!==r?window.confirm("".concat(i," is already added to phonebook, replace the old number with a new one?"))&&d.putPerson(a,r.id).then((function(e){t(n.map((function(t){return t.id===e.id?e:t}))),c({message:"Updated ".concat(e.name),className:"success"}),setTimeout((function(){c(null)}),5e3)})).catch((function(e){c({message:e.response.data.error,className:"error"}),setTimeout((function(){c(null)}),5e3)})):d.postPerson(a).then((function(e){t(n.concat(e)),c({message:"Added ".concat(e.name),className:"success"}),setTimeout((function(){c(null)}),5e3)})).catch((function(e){c({message:e.response.data.error,className:"error"}),setTimeout((function(){c(null)}),5e3)})),l(""),b("")}},r.a.createElement("div",null,"name: ",r.a.createElement("input",{onChange:function(e){return l(e.target.value)},value:i})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{onChange:function(e){return b(e.target.value)},value:p})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},E=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)(""),s=Object(o.a)(u,2),i=s[0],l=s[1],f=Object(a.useState)(n),m=Object(o.a)(f,2),p=m[0],E=m[1],w=Object(a.useState)(null),g=Object(o.a)(w,2),O=g[0],j=g[1],P=function(e,t){window.confirm("Delete ".concat(t))&&d.deletePerson(e).then((function(){d.getPersons().then((function(e){c(e)}))})).catch((function(e){j({message:"Information of ".concat(t," has already been removed from server"),className:"error"}),setTimeout((function(){j(null)}),5e3)}))};return Object(a.useEffect)((function(){d.getPersons().then((function(e){c(e)}))}),[]),r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement("div",null,"filter shown with ",r.a.createElement("input",{onChange:function(e){l(e.target.value),E(n.filter((function(t){return-1!==t.name.toLowerCase().indexOf(e.target.value.toLowerCase())})))},value:i})),r.a.createElement(b,{notify:O}),r.a.createElement("h2",null,"add a new"),r.a.createElement(v,{setPersons:c,setMessage:j,persons:n}),r.a.createElement("h2",null,"Numbers"),""===i?r.a.createElement(h,{handleDelete:P,filterPersons:n}):r.a.createElement(h,{handleDelete:P,filterPersons:p}))};u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.a3f1ee9e.chunk.js.map