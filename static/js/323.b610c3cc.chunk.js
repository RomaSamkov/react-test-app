"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[323],{323:function(e,t,n){n.r(t),n.d(t,{default:function(){return C}});var a=n(439),o="container_container__BkJm9",s="container_title__plvyD",i=n(184),l=function(e){var t=e.title,n=e.children;return(0,i.jsxs)("div",{className:o,children:[(0,i.jsx)("h2",{className:s,children:t}),n]})},r=n(942),c=n(413),d=n(791),u=function(e){var t=e.initialState,n=e.onSubmit,o=(0,d.useState)((0,c.Z)({},t)),s=(0,a.Z)(o,2),i=s[0],l=s[1];return{state:i,setState:l,handleChange:function(e){var t=e.target,n=t.name,a=t.value,o=t.type,s=t.checked,i="checkbox"===o?s:a;l((function(e){return(0,c.Z)((0,c.Z)({},e),{},(0,r.Z)({},n,i))}))},handleSubmit:function(e){e.preventDefault(),n((0,c.Z)({},i)),l((0,c.Z)({},t))}}},h="form-add-book_group__fdn5a",m="form-add-book_label__sURj9",_="form-add-book_input__liT6K",b="form-add-book_btn__9lwqg",k={title:"",author:"",favorite:!1},x=function(e){var t=e.onSubmit,n=u({initialState:k,onSubmit:t}),a=n.state,o=n.handleChange,s=n.handleSubmit,l=a.title,r=a.author,c=a.favorite;return(0,i.jsxs)("form",{action:"",onSubmit:s,children:[(0,i.jsxs)("div",{className:h,children:[(0,i.jsx)("label",{className:m,htmlFor:"",children:"Title:"}),(0,i.jsx)("input",{value:l,name:"title",onChange:o,className:_,type:"text",placeholder:"Title of book"})]}),(0,i.jsxs)("div",{className:h,children:[(0,i.jsx)("label",{className:m,htmlFor:"",children:"Author:"}),(0,i.jsx)("input",{value:r,name:"author",onChange:o,className:_,type:"text",placeholder:"Author of book"})]}),(0,i.jsxs)("div",{className:h,children:[(0,i.jsx)("label",{className:m,htmlFor:"",children:"Favorite:"}),(0,i.jsx)("input",{name:"favorite",checked:c,onChange:o,type:"checkbox"})]}),(0,i.jsx)("div",{className:h,children:(0,i.jsx)("button",{type:"submit",className:b,children:"Add Book"})})]})},j="book-list_item__8jOCd",f="book-list_btn__MdT36",p="book-list_itemText__Hzn3k",v="book-list_list__L53tz",N="book-list_wrapper__swDp-",S=function(e){var t=e.books,n=e.removeBook,a=t.map((function(e){var t=e.id,a=e.title,o=e.author;return(0,i.jsx)("li",{className:j,children:(0,i.jsxs)("div",{className:N,children:[(0,i.jsxs)("p",{children:["Title :",(0,i.jsxs)("span",{className:p,children:[' "',a,'".']})]})," ",(0,i.jsxs)("p",{children:["Author: ",(0,i.jsxs)("span",{className:p,children:[" ",o,"."]})]}),(0,i.jsx)("button",{type:"button",className:f,onClick:function(){return n(t)},children:"X"})]})},t)}));return(0,i.jsx)("ol",{className:v,children:a})},g="my-books_books__fkbZD",Z=n(859),w=function(){var e=(0,Z.RT)(),t=e.data,n=void 0===t?[]:t,o=e.isLoading,s=e.isError,r=(0,Z.Jk)(),c=(0,a.Z)(r,2),d=c[0],u=(c[1],(0,Z.tt)()),h=(0,a.Z)(u,2),m=h[0];h[1];return(0,i.jsxs)("div",{className:g,children:[o&&(0,i.jsx)("p",{children:"...Loading Books"}),s&&(0,i.jsx)("p",{children:"...Error load Books"}),(0,i.jsx)(l,{title:"Add Book",children:(0,i.jsx)(x,{onSubmit:function(e){d(e).unwrap()}})}),(0,i.jsx)(l,{title:"List of books:",children:(0,i.jsx)(S,{books:n,removeBook:function(e){m(e).unwrap()}})})]})},C=function(){return(0,i.jsx)("div",{className:"container",children:(0,i.jsx)(w,{})})}}}]);
//# sourceMappingURL=323.b610c3cc.chunk.js.map