(this.webpackJsonprestapp=this.webpackJsonprestapp||[]).push([[0],{37:function(e,t,n){},44:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),c=n(30),i=n.n(c),r=n(9),o=n(2),l=n(4),j=n(5),d=n(7),h=n(6),u=(n(37),n(0)),b=function(e){return Object(u.jsxs)("div",{class:"quickSearchContainer",children:[Object(u.jsx)("p",{class:"quickSearchHeading",children:"Quick Searches"}),Object(u.jsx)("p",{class:"quickSearchSubHeading",children:"Discover R\xe9staurants By Meal Type"}),function(e){var t=e.quickData;if(t)return t.map((function(e){return Object(u.jsx)(r.b,{to:"/listing/".concat(e._id),children:Object(u.jsxs)("div",{class:"tileContainer",children:[Object(u.jsx)("div",{class:"tileComponent1",children:Object(u.jsx)("img",{src:"/images/".concat(e.name,".png"),className:"imageStyle"})}),Object(u.jsxs)("div",{class:"tileComponent2",children:[Object(u.jsx)("div",{class:"componentHeading",children:e.name}),Object(u.jsxs)("div",{class:"componentSubHeading",children:["Start Your Day with Exclusive ",e.name," Options"]})]})]})})}))}(e)]})},m=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={mealType:""},e}return Object(j.a)(n,[{key:"render",value:function(){return Object(u.jsx)(b,{quickData:this.state.mealType})}},{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:9900/meal",{method:"GET"}).then((function(e){return e.json()})).then((function(t){return e.setState({mealType:t})}))}}]),n}(s.Component),O=(n(44),function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).renderCity=function(e){if(e)return e.map((function(e){return Object(u.jsxs)("option",{value:e.city,children:[e.name," | ",e.city_name]})}))},s.renderRest=function(e){if(e)return e.map((function(e){return Object(u.jsxs)("option",{value:e._id,children:[e.name," | ",e.locality," "]})}))},s.handleCity=function(e){console.log(e.target.value);var t=e.target.value;fetch("".concat("http://localhost:9900/rest?city=").concat(t),{method:"GET"}).then((function(e){return e.json()})).then((function(e){s.setState({rest:e})}))},s.handleRest=function(e){s.props.history.push("/details/".concat(e.target.value))},s.conditionalButton=function(){return console.log(sessionStorage.getItem("username")),console.log(">>>>>>>this.state",s.state),null==sessionStorage.getItem("username")||void 0==sessionStorage.getItem("username")?Object(u.jsx)("a",{href:"https://github.com/login/oauth/authorize?client_id=089406082637802259c4",children:"Login with Git"}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("img",{src:s.state.imgurl,style:{height:100,width:100}}),"Hi ",s.state.username]})},s.state={city:"",rest:"",imgurl:"",username:""},s}return Object(j.a)(n,[{key:"render",value:function(){return console.log(">>>>>>",this.props),Object(u.jsx)(a.a.Fragment,{children:Object(u.jsxs)("div",{className:"imageContainer",children:[Object(u.jsxs)("div",{style:{textAlign:"right"},children:[this.conditionalButton(),Object(u.jsx)("a",{className:"fb myfont",href:"https://www.facebook.com/",target:"_blank",children:Object(u.jsx)("img",{src:"/images/facebook.png",className:"social_logo"})}),Object(u.jsx)("a",{className:"yt myfont",href:"https://www.youtube.com/developerfunnel",target:"_blank",children:Object(u.jsx)("img",{src:"/images/youtube.png",className:"social_logo"})})]}),Object(u.jsx)("div",{id:"logo",children:Object(u.jsx)("b",{children:"e!"})}),Object(u.jsx)("div",{id:"heading",children:"Find B\xe9st Restaurants, Caf\xe9s, bars"}),Object(u.jsxs)("div",{className:"locationSelector",children:[Object(u.jsxs)("select",{className:"dropdown",onChange:this.handleCity,children:[Object(u.jsx)("option",{value:"1",children:"SELECT CITY"}),this.renderCity(this.state.city)]}),Object(u.jsxs)("select",{className:"dropdown",onChange:this.handleRest,children:[Object(u.jsx)("option",{value:"1",children:"SELECT RESTAURANT"}),this.renderRest(this.state.rest)]})]})]})})}},{key:"componentDidMount",value:function(){var e=this,t=this.props.location.search.split("=")[1];if(t){var n={code:t};console.log(">>>>requested data",n),fetch("http://localhost:6700/users",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(t){var n=t.login,s=t.avatar_url;sessionStorage.setItem("username",n),fetch("http://localhost:9900/city",{method:"GET"}).then((function(e){return e.json()})).then((function(t){return e.setState({city:t,username:n,imgurl:s})}))}))}}}]),n}(s.Component)),p=Object(o.e)(O),x=function(e){return console.log(e),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(p,{}),Object(u.jsx)(m,{})]})},g=n(12),v=n.n(g),f=(n(63),function(e){return Object(u.jsx)(u.Fragment,{children:function(e){var t=e.restaurantList;return t?t.map((function(e){return Object(u.jsxs)("div",{className:"first",children:[Object(u.jsxs)("div",{className:"maindiv",children:[Object(u.jsx)("div",{className:"image",children:Object(u.jsx)("img",{src:e.thumb,className:"imgClass"})}),Object(u.jsxs)("div",{className:"details",children:[Object(u.jsx)("h1",{children:Object(u.jsx)(r.b,{to:"/details/".concat(e._id),children:e.name})}),Object(u.jsxs)("p",{children:["Rs. ",e.cost," per two"]}),Object(u.jsx)("p",{children:e.city_name})]})]}),Object(u.jsx)("hr",{}),Object(u.jsxs)("div",{className:"moredetails",children:[Object(u.jsx)("h2",{children:"Address"}),Object(u.jsx)("p",{children:e.locality}),Object(u.jsx)("p",{children:e.address})]})]})})):Object(u.jsx)("div",{children:Object(u.jsx)("img",{src:"/images/loader.gif"})})}(e)})}),y=(n(64),function(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{id:"header",children:[Object(u.jsx)(r.b,{to:"/",className:"logo",children:"Edureka"}),Object(u.jsx)("span",{className:"leftopt",style:{float:"right"},children:"Developer Funnel"})]})})}),N="http://localhost:9900/rest?mealtype=",k=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).Cuisinefilter=function(t){var n,s=sessionStorage.getItem("mealId"),a=t.target.value;n=""==a?"".concat(N).concat(s):"".concat(N).concat(s,"&cuisine=").concat(a),v.a.get(n).then((function(t){e.props.restPerCuisine(t.data)}))},e}return Object(j.a)(n,[{key:"render",value:function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("center",{children:"Cuisine"}),Object(u.jsxs)("div",{onChange:this.Cuisinefilter,children:[Object(u.jsxs)("label",{className:"radio",children:[Object(u.jsx)("input",{type:"radio",value:"",name:"cuisine"}),"All"]}),Object(u.jsxs)("label",{className:"radio",children:[Object(u.jsx)("input",{type:"radio",value:"",name:"cuisine"}),"North India"]}),Object(u.jsxs)("label",{className:"radio",children:[Object(u.jsx)("input",{type:"radio",value:"",name:"cuisine"}),"South India"]}),Object(u.jsxs)("label",{className:"radio",children:[Object(u.jsx)("input",{type:"radio",value:"",name:"cuisine"}),"Chinese"]}),Object(u.jsxs)("label",{className:"radio",children:[Object(u.jsx)("input",{type:"radio",value:"",name:"cuisine"}),"Fast Food"]}),Object(u.jsxs)("label",{className:"radio",children:[Object(u.jsx)("input",{type:"radio",value:"",name:"cuisine"}),"Street Food"]})]})]})}}]),n}(s.Component),C="http://localhost:9900/rest?mealtype=",S=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).Costfilter=function(t){var n,s=sessionStorage.getItem("mealId"),a=t.target.value.split(","),c=a[0],i=a[1];n=""==a?"".concat(C).concat(s):"".concat(C).concat(s,"&lcost=").concat(c,"&hcost=").concat(i),v.a.get(n).then((function(t){e.props.restPerCost(t.data)}))},e}return Object(j.a)(n,[{key:"render",value:function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("center",{children:"Cost"}),Object(u.jsxs)("div",{onChange:this.Costfilter,children:[Object(u.jsxs)("label",{className:"radio",children:[Object(u.jsx)("input",{type:"radio",value:"",name:"cuisine"}),"All"]}),Object(u.jsxs)("label",{className:"radio",children:[Object(u.jsx)("input",{type:"radio",value:"0,100",name:"cuisine"}),"0-100"]}),Object(u.jsxs)("label",{className:"radio",children:[Object(u.jsx)("input",{type:"radio",value:"101,200",name:"cuisine"}),"101-200"]}),Object(u.jsxs)("label",{className:"radio",children:[Object(u.jsx)("input",{type:"radio",value:"201,300",name:"cuisine"}),"201-300"]}),Object(u.jsxs)("label",{className:"radio",children:[Object(u.jsx)("input",{type:"radio",value:"301,400",name:"cuisine"}),"301-400"]}),Object(u.jsxs)("label",{className:"radio",children:[Object(u.jsx)("input",{type:"radio",value:"401,1000",name:"cuisine"}),"401-1000"]})]})]})}}]),n}(s.Component),w="http://localhost:9900/rest?mealtype=",I=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).Sortfilter=function(t){var n=sessionStorage.getItem("mealId"),s=t.target.value,a="".concat(w).concat(n,"&sort=").concat(s);v.a.get(a).then((function(t){e.props.restPerSort(t.data)}))},e}return Object(j.a)(n,[{key:"render",value:function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("center",{children:"Sost"}),Object(u.jsxs)("div",{onChange:this.Sortfilter,children:[Object(u.jsxs)("label",{className:"radio",children:[Object(u.jsx)("input",{type:"radio",value:"1",name:"cuisine"}),"Low - High"]}),Object(u.jsxs)("label",{className:"radio",children:[Object(u.jsx)("input",{type:"radio",value:"-1",name:"cuisine"}),"High - Low"]})]})]})}}]),n}(s.Component),F=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).setDataPerFilter=function(e){s.setState({restlist:e})},s.state={restlist:""},s}return Object(j.a)(n,[{key:"render",value:function(){var e=this;return console.log(">>>>>>>>",this.state.restlist),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)(y,{}),Object(u.jsxs)("div",{style:{marginLeft:"5%"},children:[Object(u.jsxs)("div",{className:"col-md-2",style:{height:2e3},children:[Object(u.jsx)(k,{restPerCuisine:function(t){e.setDataPerFilter(t)}}),Object(u.jsx)(S,{restPerCost:function(t){e.setDataPerFilter(t)}}),Object(u.jsx)(I,{restPerSort:function(t){e.setDataPerFilter(t)}})]}),Object(u.jsx)("div",{className:"cod-md-10",children:Object(u.jsx)(f,{restaurantList:this.state.restlist})})]})]})}},{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;sessionStorage.setItem("mealId",t),v.a.get("".concat("http://localhost:9900/rest?mealtype=").concat(t)).then((function(t){e.setState({restlist:t.data})}))}}]),n}(s.Component),P=n(16),T=(n(65),function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={details:""},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this.state.details;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(y,{}),Object(u.jsx)("br",{}),Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"panel panel-primary",children:[Object(u.jsx)("div",{className:"panel-heading",children:Object(u.jsx)("h3",{children:this.state.details.name})}),Object(u.jsxs)("div",{className:"panel-body",children:[Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-md-12",children:Object(u.jsx)("img",{className:"img-responsive",style:{height:350,width:1100},src:e.thumb})}),Object(u.jsxs)("div",{className:"col-md-6",children:[Object(u.jsx)("h3",{children:e.name}),Object(u.jsx)("h3",{children:e.locality}),Object(u.jsx)("h3",{children:e.address})]})]}),Object(u.jsx)("hr",{}),Object(u.jsxs)(P.d,{children:[Object(u.jsxs)(P.b,{children:[Object(u.jsx)(P.a,{children:"Over View"}),Object(u.jsx)(P.a,{children:"Content"})]}),Object(u.jsxs)(P.c,{children:[Object(u.jsx)("h2",{children:"About this place"}),Object(u.jsxs)("p",{children:[e.name," is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing                                        software like Aldus PageMaker including versions of Lorem Ipsum."]})]}),Object(u.jsxs)(P.c,{children:[Object(u.jsx)("h2",{children:"Contact Us"}),Object(u.jsx)("h3",{children:e.address}),Object(u.jsx)("h3",{children:"Phone no:122324478"})]})]}),Object(u.jsx)(r.b,{to:"/",className:"btn btn-danger",children:"Back"}),"\xa0",Object(u.jsx)(r.b,{to:"/booking/".concat(e.name),className:"btn btn-success",children:"Proceed Order"})]})]})})]})}},{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;v.a.get("".concat("https://edurekaapidata.herokuapp.com/rest","/").concat(t)).then((function(t){e.setState({details:t.data[0]})}))}}]),n}(s.Component)),_=function(e){return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("center",{children:Object(u.jsx)("h3",{children:"Booking List"})}),Object(u.jsxs)("table",{className:"table table-responsive",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"OrderId"}),Object(u.jsx)("th",{children:"Rest"}),Object(u.jsx)("th",{children:"Name"}),Object(u.jsx)("th",{children:"Phone"}),Object(u.jsx)("th",{children:"Address"})]})}),Object(u.jsx)("tbody",{children:function(e){var t=e.bookdata;if(t)return t.map((function(e){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:e._id}),Object(u.jsx)("td",{children:e.rest_id}),Object(u.jsx)("td",{children:e.name}),Object(u.jsx)("td",{children:e.phone}),Object(u.jsx)("td",{children:e.address})]})}))}(e)})]})]})},A=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={booking:""},e}return Object(j.a)(n,[{key:"render",value:function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(_,{bookdata:this.state.booking})})}},{key:"componentDidMount",value:function(){var e=this;v.a.get("http://edurekaapidata.herokuapp.com/orders").then((function(t){e.setState({booking:t.data})}))}}]),n}(s.Component),D=n(32),L=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).handleSubmit=function(){console.log(s.state),fetch("http://edurekaapidata.herokuapp.com/placeorder",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(s.state)}).then(s.props.history.push("/viewBooking"))},s.handleChange=function(e){s.setState(Object(D.a)({},e.target.name,e.target.value))},s.state={id:Math.floor(1e3*Math.random()),hotel_name:s.props.match.params.name,name:sessionStorage.getItem("username"),phone:""},s}return Object(j.a)(n,[{key:"render",value:function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(y,{}),Object(u.jsx)("br",{}),Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"panel panel-info",children:[Object(u.jsx)("div",{className:"panel-heading",children:"Place Booking"}),Object(u.jsxs)("div",{className:"panel-body",children:[Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{children:"Hotel Name"}),Object(u.jsx)("input",{name:"hotel_name",value:this.state.hotel_name,readOnly:!0,className:"form-control"})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{children:"Name"}),Object(u.jsx)("input",{name:"name",value:this.state.name,className:"form-control",onChange:this.handleChange})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{children:"Phone"}),Object(u.jsx)("input",{name:"phone",value:this.state.phone,className:"form-control",onChange:this.handleChange})]}),Object(u.jsx)("button",{className:"btn btn-success",onClick:this.handleSubmit,children:"Place Booking"})]})]})})]})}}]),n}(s.Component),E=function(){return Object(u.jsxs)(r.a,{children:[Object(u.jsx)(o.a,{exact:!0,path:"/",component:x}),Object(u.jsx)(o.a,{path:"/listing/:id",component:F}),Object(u.jsx)(o.a,{path:"/details/:id",component:T}),Object(u.jsx)(o.a,{path:"/viewbooking",component:A}),Object(u.jsx)(o.a,{path:"/booking/:name",component:L})]})};i.a.render(Object(u.jsx)(E,{}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.bdaf4464.chunk.js.map