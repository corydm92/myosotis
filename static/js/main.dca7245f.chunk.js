(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,t,n){},36:function(e,t,n){},41:function(e){e.exports={trefle:{TOKEN:"a2NscWtXRkx4dEI5UlpIQ01FWVJOdz09"}}},43:function(e,t,n){e.exports=n(85)},52:function(e,t,n){},53:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),l=n(21),r=n.n(l),c=n(5),o=n(13),s=n(38),u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH_TERM":return t.payload;default:return e}},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TREFLE_QUERY":return t.payload;default:return e}},d=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case"IS_LOADING":return!0;case"DONE_LOADING":return!1;default:return e}},p=n(15),h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PLANT_LIST_ITEM":return[].concat(Object(p.a)(e),[t.payload]);default:return e}},f={bool:!1,id:null},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ITEM_DETAILS_LOADING":return{bool:!0,id:t.payload};case"ITEM_DETAILS_DONE":return f;default:return e}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PREVIOUS_DETAIL_IDS":return[].concat(Object(p.a)(e),[t.payload]);default:return e}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TO_COLLECTION":return[].concat(Object(p.a)(e),[t.payload]);case"REMOVE_FROM_COLLECTION":return Object(p.a)(e).filter(function(e){return e.id!==t.payload});default:return e}},y=Object(o.combineReducers)({searchTerm:u,currentSearch:m,isLoading:d,plantListItems:h,isLoadingDetails:E,previousDetailIds:v,collection:b}),g=n(16),O=n(2),N=n(3),I=n(6),j=n(4),L=n(7),w=n(14),k=(n(52),function(e){return i.a.createElement("div",{className:"lrg-header bg-main-blue font-main-white header-component"},i.a.createElement("p",null,"Myosotis"))}),_=(n(53),function(e){function t(){return Object(O.a)(this,t),Object(I.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(L.a)(t,e),Object(N.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{style:{marginTop:this.props.marginTop},className:"nav-bar two ui buttons"},i.a.createElement(g.b,{className:"ui button",to:"/"},"Search"),i.a.createElement(g.b,{className:"ui button",to:"/collection"},"Collection"))}}]),t}(i.a.Component)),T=n(20),D=n.n(T),C=n(27),S=n(40),R=n.n(S),A=n(41).trefle.TOKEN,M=R.a.create({baseURL:"https://cors-anywhere.herokuapp.com/https://trefle.io/api/plants",headers:{Authorization:"Bearer ".concat(A)}}),x=function(e){return{type:"ITEM_DETAILS_LOADING",payload:e}},F=function(e){return function(){var t=Object(C.a)(D.a.mark(function t(n,a){var i;return D.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!a().previousDetailIds.includes(e)){t.next=3;break}return n({type:"ITEM_DETAILS_DONE"}),t.abrupt("return",null);case 3:return n({type:"PREVIOUS_DETAIL_IDS",payload:e}),t.next=6,M.get("/".concat(e));case 6:i=t.sent,n({type:"PLANT_LIST_ITEM",payload:i.data}),n({type:"ITEM_DETAILS_DONE"});case 9:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()},H=function(e){return{type:"ADD_TO_COLLECTION",payload:e}},G=(n(80),function(e){function t(){var e,n;Object(O.a)(this,t);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return(n=Object(I.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(i)))).handleSubmit=function(e){e.preventDefault(),n.props.isLoading(),n.props.trefleQuery(n.props.term)},n}return Object(L.a)(t,e),Object(N.a)(t,[{key:"componentDidMount",value:function(){}},{key:"handleOnChange",value:function(e){this.props.searchTerm(e)}},{key:"render",value:function(){var e=this;return console.log(this.props),i.a.createElement("div",{className:"search-bar-wrapper bg-main-white"},i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("div",{className:"ui fluid icon input"},i.a.createElement("input",{onChange:function(t){return e.handleOnChange(t.target.value)},value:this.props.term,type:"text",placeholder:"Search for a plant..."}),i.a.createElement("i",{className:"search icon"}))))}}]),t}(i.a.Component)),U=Object(c.b)(function(e){return{term:e.searchTerm}},{searchTerm:function(e){return console.log(e),{type:"SEARCH_TERM",payload:e}},trefleQuery:function(e){return function(){var t=Object(C.a)(D.a.mark(function t(n){var a;return D.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M.get("",{params:{q:e}});case 2:a=t.sent,n({type:"TREFLE_QUERY",payload:a.data}),n({type:"DONE_LOADING"});case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},isLoading:function(){return{type:"IS_LOADING"}}})(G),Q=(n(35),Object(c.b)(function(e){return{collection:e.collection}},{addToCollection:H})(function(e){var t=e.selectedItem;function n(e){return e||"Not Available"}return i.a.createElement("div",{style:{margin:"1em 0"},key:t.id,className:"plant-details ui segment"},i.a.createElement("div",{className:"img-wrapper"},function(e){if(e.length>0){var t=[];return e.forEach(function(e){t.push(i.a.createElement("img",{key:e.url,alt:e.url,src:e.url}))}),t}return i.a.createElement("p",null,"Image: Not Available")}(t.images)),i.a.createElement("p",null,"Duration: ",n(t.duration)),i.a.createElement("p",null,"Family: ",n(t.family_common_name)),i.a.createElement("div",{className:"add-to-collection-wrapper"},function(){var t=!1;return e.collection.length>0&&e.collection.map(function(n){n.id===e.selectedItem.id&&(t=!0)}),!0===t?i.a.createElement("p",{className:"sm-font font-main-green"},"Item in Collection ",i.a.createElement("i",{class:"check icon"})):i.a.createElement("button",{className:"ui button bg-main-green font-main-white",onClick:function(){return e.addToCollection(e.selectedItem)}},"Add To Collection")}()))})),V=(n(36),function(e){function t(){var e,n;Object(O.a)(this,t);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return(n=Object(I.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(i)))).handleSelectedItem=function(){n.props.isLoadingDetails(n.props.item.id),n.props.plantListItem(n.props.item.id)},n}return Object(L.a)(t,e),Object(N.a)(t,[{key:"handleLoader",value:function(){var e=this.props,t=e.loadingDetails,n=e.item;return console.log(t.id),console.log(t),t.bool&&n.id===t.id?i.a.createElement("div",{className:"loader-wrapper right floated content"},i.a.createElement("div",{style:{zIndex:"0",marginTop:"16px"},className:"ui active inline loader"})):null}},{key:"handleShowHide",value:function(e){document.getElementById(e).classList.toggle("hide")}},{key:"render",value:function(){var e=this,t=this.props,n=t.item,a=t.selectedItems,l=[],r=[];return a.map(function(t){return n.id===t.id&&(l.push(i.a.createElement("div",{key:t.id,id:t.id},i.a.createElement(Q,{key:t.id,selectedItem:t}))),r.push(i.a.createElement("div",{key:"show/hide",className:"right floated content"},i.a.createElement("button",{onClick:function(){return e.handleShowHide(t.id)},className:"ui button show font-main-white bg-main-blue"},"Show / Hide")))),null}),i.a.createElement("div",{className:"plant-list-item item"},i.a.createElement("div",{style:{height:"auto"},className:"content"},this.handleLoader(),r,i.a.createElement("div",{style:{display:"inline-block",lineHeight:"1.2em"},onClick:this.handleSelectedItem,className:"plant-results plant-name header font-main-green med-font"},n.common_name?n.common_name:n.scientific_name),i.a.createElement("div",{className:"description font-disabled sm-font"},n.common_name?"Common Name":"Scientific Name"),l))}}]),t}(i.a.Component)),B=Object(c.b)(function(e){return{selectedItems:e.plantListItems,loadingDetails:e.isLoadingDetails}},{plantListItem:F,isLoadingDetails:x})(V),P=(n(81),function(e){function t(){return Object(O.a)(this,t),Object(I.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(L.a)(t,e),Object(N.a)(t,[{key:"handleIsLoading",value:function(){return i.a.createElement("div",{className:"plant-results-loader  ui active inverted dimmer"},i.a.createElement("div",{className:"ui text loader"},"Loading"))}},{key:"handleNoResults",value:function(){return i.a.createElement("div",{style:{marginTop:"1em"},className:"plant-results no-results font-disabled med-font ui header"},"No Results")}},{key:"handleResults",value:function(e){return e.length<1?this.handleNoResults():e.map(function(e){return i.a.createElement(B,{key:e.id,item:e})})}},{key:"render",value:function(){var e=this.props,t=e.plantResults;return!0===e.isLoading?this.handleIsLoading():t?i.a.createElement("div",{className:"plant-results-wrapper ui middle aligned divided list"},this.handleResults(t)):this.handleNoResults()}}]),t}(i.a.Component)),W=Object(c.b)(function(e){return{plantResults:e.currentSearch,isLoading:e.isLoading}})(P),z=function(e){return i.a.createElement("div",{style:{maxWidth:"100%"},className:"home-link"},i.a.createElement(U,null),i.a.createElement(_,{marginTop:"66px"}),i.a.createElement("div",{className:"plant-results-wrapper"},i.a.createElement(W,null)))},J=(n(82),Object(c.b)(function(e){return{collection:e.collection}},{addToCollection:H,removeFromCollection:function(e){return{type:"REMOVE_FROM_COLLECTION",payload:e}}})(function(e){var t=e.selectedItem;function n(e){return e||"Not Available"}return i.a.createElement("div",{style:{margin:"1em 0"},key:t.id,className:"plant-details ui segment"},i.a.createElement("div",{className:"img-wrapper"},function(e){if(e.length>0){var t=[];return e.forEach(function(e){t.push(i.a.createElement("img",{key:e.url,alt:e.url,src:e.url}))}),t}return i.a.createElement("p",null,"Image: Not Available")}(t.images)),i.a.createElement("p",null,"Duration: ",n(t.duration)),i.a.createElement("p",null,"Family: ",n(t.family_common_name)),i.a.createElement("div",{className:"add-to-collection-wrapper"},i.a.createElement("button",{className:"ui button red font-main-white",onClick:function(){return e.removeFromCollection(e.selectedItem.id)}},"Remove From Collection")))})),q=function(e){function t(){return Object(O.a)(this,t),Object(I.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(L.a)(t,e),Object(N.a)(t,[{key:"handleShowHide",value:function(e){document.getElementById(e).classList.toggle("hide")}},{key:"componentDidMount",value:function(){document.getElementById(this.props.item.id).classList.toggle("hide")}},{key:"render",value:function(){var e=this,t=this.props.item;return i.a.createElement("div",{className:"plant-list-item item"},i.a.createElement("div",{className:"content"},i.a.createElement("div",{key:"show/hide",className:"right floated content"},i.a.createElement("button",{onClick:function(){return e.handleShowHide(t.id)},className:"ui button show font-main-white bg-main-blue"},"Show / Hide")),i.a.createElement("div",{style:{display:"inline-block",lineHeight:"1.2em"},className:"plant-results plant-name header font-main-green med-font"},t.common_name?t.common_name:t.scientific_name),i.a.createElement("div",{className:"description font-disabled sm-font"},t.common_name?"Common Name":"Scientific Name"),i.a.createElement("div",{key:t.id,id:t.id},i.a.createElement(J,{key:t.id,selectedItem:t}))))}}]),t}(i.a.Component),K=Object(c.b)(function(e){return console.log(e),{selectedItems:e.plantListItems,isLoadingDetails:e.isLoadingDetails}},{plantListItem:F,isLoadingDetails:x})(q),Y=function(e){function t(){return Object(O.a)(this,t),Object(I.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(L.a)(t,e),Object(N.a)(t,[{key:"handleNoResults",value:function(){return i.a.createElement("div",{className:"plant-results no-results font-disabled med-font ui header"},"No Results")}},{key:"handleResults",value:function(e){return e.length<1?this.handleNoResults():e.map(function(e){return console.log(e),i.a.createElement(K,{key:e.id,item:e})})}},{key:"render",value:function(){console.log(this.props);var e=this.props.collection;return e?i.a.createElement("div",{className:"plant-results-wrapper ui middle aligned divided list"},this.handleResults(e)):this.handleNoResults()}}]),t}(i.a.Component),X=Object(c.b)(function(e){return console.log(e),{collection:e.collection}})(Y),Z=function(e){function t(){return Object(O.a)(this,t),Object(I.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(L.a)(t,e),Object(N.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"collection-link"},i.a.createElement(_,null),i.a.createElement(X,null))}}]),t}(i.a.Component),$=(n(83),n(84),function(e){function t(){return Object(O.a)(this,t),Object(I.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(L.a)(t,e),Object(N.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"app-wrapper bg-main-white"},i.a.createElement(k,null),i.a.createElement("div",{className:"ui container main-content"},i.a.createElement(w.a,{exact:!0,path:"/",component:z}),i.a.createElement(w.a,{path:"/collection",component:Z})))}}]),t}(i.a.Component)),ee=n(42),te=Object(o.createStore)(y,Object(ee.composeWithDevTools)(Object(o.applyMiddleware)(s.a)));r.a.render(i.a.createElement(g.a,null,i.a.createElement(c.a,{store:te},i.a.createElement($,null))),document.querySelector("#root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.dca7245f.chunk.js.map