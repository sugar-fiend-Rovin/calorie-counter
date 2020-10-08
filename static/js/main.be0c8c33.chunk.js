(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{131:function(e,t){},174:function(e,t,a){e.exports=a(333)},179:function(e,t,a){},187:function(e,t,a){},190:function(e,t,a){},191:function(e,t,a){},192:function(e,t,a){},195:function(e,t,a){},229:function(e,t){},333:function(e,t,a){"use strict";a.r(t);var n=a(18),r=a(0),o=a.n(r),l=a(72),c=a.n(l),u=(a(179),a(108),a(86),a(35)),i=(a(187),a(127),a(30)),s=a(10);function m(){var e=Object(i.a)(["\n  query login($username: String!, $password: String!) {\n    login(username: $username, password: $password) {\n      username\n      email\n      token\n    }\n  }\n"]);return m=function(){return e},e}function d(){var e=Object(i.a)(["\n  mutation register(\n    $username: String!\n    $email: String!\n    $password: String!\n    $confirmPassword: String!\n  ) {\n    register(\n      username: $username\n      email: $email\n      password: $password\n      confirmPassword: $confirmPassword\n    ) {\n      username\n      email\n    }\n  }\n"]);return d=function(){return e},e}function f(){var e=Object(i.a)(["\n  mutation($food_entry: String!, $date: String!) {\n    updateEntryMinus(food_entry: $food_entry, date: $date) {\n      food_entry\n      date\n      quantity\n    }\n  }\n"]);return f=function(){return e},e}function g(){var e=Object(i.a)(["\n  mutation($food_entry: String!, $date: String!) {\n    updateEntryPlus(food_entry: $food_entry, date: $date) {\n      food_entry\n      date\n      quantity\n    }\n  }\n"]);return g=function(){return e},e}function E(){var e=Object(i.a)(["\n  mutation($food_entry: String!, $date: String!) {\n    deleteEntry(food_entry: $food_entry, date: $date)\n  }\n"]);return E=function(){return e},e}function b(){var e=Object(i.a)(["\n  mutation($name: String!) {\n    addUser(username: $name) {\n      username\n    }\n  }\n"]);return b=function(){return e},e}function y(){var e=Object(i.a)(["\n  mutation($food_entry: String!, $date: String!, $quantity: Float!) {\n    createEntry(food_entry: $food_entry, date: $date, quantity: $quantity) {\n      food_entry\n      date\n      quantity\n    }\n  }\n"]);return y=function(){return e},e}function p(){var e=Object(i.a)(["\n  mutation(\n    $food_name: String!\n    $type: String!\n    $calories: Float!\n    $carbohydrates: Float!\n    $proteins: Float!\n    $fats: Float!\n  ) {\n    addFood(\n      food_name: $food_name\n      type: $type\n      calories: $calories\n      carbohydrates: $carbohydrates\n      proteins: $proteins\n      fats: $fats\n    ) {\n      food_name\n      type\n      calories\n      carbohydrates\n      proteins\n      fats\n    }\n  }\n"]);return p=function(){return e},e}function h(){var e=Object(i.a)(["\n  query {\n    getFoods {\n      food_name\n      type\n      calories\n      carbohydrates\n      proteins\n      fats\n    }\n  }\n"]);return h=function(){return e},e}function v(){var e=Object(i.a)(["\n  query($date: String!) {\n    getEntries(date: $date) {\n      username\n      food_entry\n      date\n      quantity\n      food_en {\n        food_name\n        type\n        calories\n        carbohydrates\n        proteins\n        fats\n      }\n    }\n  }\n"]);return v=function(){return e},e}function O(){var e=Object(i.a)(["\n  query {\n    getUser {\n      id\n      email\n      username\n      daily_calories\n      carbohydrates\n      proteins\n      fats\n    }\n  }\n"]);return O=function(){return e},e}function j(){var e=Object(i.a)(["\n  query($name: String!) {\n    getFood(food_name: $name) {\n      food_name\n      type\n      calories\n      carbohydrates\n      proteins\n      fats\n    }\n  }\n"]);return j=function(){return e},e}Object(s.gql)(j());var w=Object(s.gql)(O()),x=Object(s.gql)(v()),_=Object(s.gql)(h()),k=(Object(s.gql)(p()),Object(s.gql)(y())),$=(Object(s.gql)(b()),Object(s.gql)(E())),Y=Object(s.gql)(g()),N=Object(s.gql)(f()),C=Object(s.gql)(d()),S=Object(s.gql)(m()),q=a(14),M=a(36),D=a.n(M),L=a(337),F=a(154),I=a(335),P=a(44),Q=a(45);a(190);function B(e){var t=e.Food,a=t.food_name,n=(t.type,t.calories),r=t.carbohydrates,l=t.proteins,c=t.fats,u=e.date,i=Object(s.useMutation)(k,{refetchQueries:["EntryQuery"]}),m=Object(q.a)(i,2),d=m[0];m[1].data;return o.a.createElement(L.a,{className:" align-items-center border-col ",style:{height:"50px"}},o.a.createElement(F.a,null,a),o.a.createElement(F.a,null,r),o.a.createElement(F.a,null,c),o.a.createElement(F.a,null,l),o.a.createElement(F.a,null,n),o.a.createElement(F.a,null,o.a.createElement(I.a,{variant:"primary",onClick:function(){return d({variables:{food_entry:a,date:u,quantity:1},context:{headers:{authentication:"Bearer ".concat(localStorage.getItem("token"))}}})}},o.a.createElement(P.a,{icon:Q.d}))))}a(191),a(192);function G(e){var t=e.Food,a=t.food_name,n=(t.type,t.calories),r=t.carbohydrates,l=t.proteins,c=t.fats,u=e.count,i=e.date,m=Object(s.useMutation)($,{refetchQueries:["EntryQuery"]}),d=Object(q.a)(m,2),f=d[0],g=(d[1].data3,Object(s.useMutation)(Y,{refetchQueries:["EntryQuery"]})),E=Object(q.a)(g,2),b=E[0],y=(E[1].data2,Object(s.useMutation)(N,{update:function(e,t){console.log(t.data.updateEntryMinus.food_entry),0===t.data.updateEntryMinus.quantity&&(console.log("completed"),f({variables:{food_entry:t.data.updateEntryMinus.food_entry,date:i}}))}},{refetchQueries:["EntryQuery"]})),p=Object(q.a)(y,2),h=p[0];p[1].data;return o.a.createElement(L.a,{className:" align-items-center border-col ",style:{height:"50px"}},o.a.createElement(F.a,null,a),o.a.createElement(F.a,null,r*u),o.a.createElement(F.a,null,c*u),o.a.createElement(F.a,null,l*u),o.a.createElement(F.a,null,n*u),o.a.createElement(F.a,null,o.a.createElement(I.a,{variant:"primary",onClick:function(){return h({variables:{food_entry:a,date:i},context:{headers:{authentication:"Bearer ".concat(localStorage.getItem("token"))}}})}},o.a.createElement(P.a,{icon:Q.c})),u,o.a.createElement(I.a,{style:{marginRight:"30px"},variant:"primary",onClick:function(){return b({variables:{food_entry:a,date:i},context:{headers:{authentication:"Bearer ".concat(localStorage.getItem("token"))}}})}},o.a.createElement(P.a,{icon:Q.d})),o.a.createElement(I.a,{variant:"danger",onClick:function(){return f({variables:{food_entry:a,date:i},context:{headers:{authentication:"Bearer ".concat(localStorage.getItem("token"))}}})}},o.a.createElement(P.a,{icon:Q.e}))))}var R=a(155),U=a.n(R),A=Object(r.createContext)(),H=Object(r.createContext)(),T=null,z=localStorage.getItem("token");if(z){var J=U()(z),W=new Date(1e3*J.exp);new Date>W?(localStorage.removeItem("token"),console.log("expired")):T=J}else console.log("No token found");var K=function(e,t){switch(t.type){case"LOGIN":return localStorage.setItem("token",t.payload.token),Object(n.a)(Object(n.a)({},e),{},{user:t.payload});case"LOGOUT":return localStorage.removeItem("token"),Object(n.a)(Object(n.a)({},e),{},{user:null});default:throw new Error("Unknown action type: ".concat(t.type))}},V=function(e){var t=e.children,a=Object(r.useReducer)(K,{user:T}),n=Object(q.a)(a,2),l=n[0],c=n[1];return o.a.createElement(H.Provider,{value:c},o.a.createElement(A.Provider,{value:l},t))},X=function(){return Object(r.useContext)(H)};var Z=function(e){var t=Object(r.useContext)(oe),a=Object(q.a)(t,2),n=a[0],l=(a[1],Object(r.useState)(void 0)),c=Object(q.a)(l,2),u=(c[0],c[1],Object(s.useQuery)(x,{variables:{date:n.format("MM-DD-YYYY")},pollInterval:1e-4,context:{headers:{authentication:"Bearer ".concat(localStorage.getItem("token"))}}})),i=(u.loading,u.error,u.data),m=Object(s.useQuery)(w,{context:{headers:{authentication:"Bearer ".concat(localStorage.getItem("token"))}}}),d=(m.data,m.error,m.loading,i.getEntries.filter((function(e){return"breakfast"===e.food_en.type&&e.date===n.format("MM-DD-YYYY")}))),f=d.reduce((function(e,t){return e+t.food_en.calories*t.quantity}),0),g=i.getEntries.filter((function(e){return"lunch"===e.food_en.type})),E=g.reduce((function(e,t){return e+t.food_en.calories*t.quantity}),0),b=i.getEntries.filter((function(e){return"dinner"===e.food_en.type})),y=b.reduce((function(e,t){return e+t.food_en.calories*t.quantity}),0),p=i.getEntries.reduce((function(e,t){return e+t.food_en.calories*t.quantity}),0),h=i.getEntries.reduce((function(e,t){return e+t.food_en.carbohydrates*t.quantity}),0),v=i.getEntries.reduce((function(e,t){return e+t.food_en.fats*t.quantity}),0),O=i.getEntries.reduce((function(e,t){return e+t.food_en.proteins*t.quantity}),0);return o.a.createElement(r.Fragment,null,o.a.createElement(L.a,{className:"border-col align-items-center",style:{height:"50px"}},o.a.createElement(F.a,{className:"",style:{}}),o.a.createElement(F.a,{className:"",style:{}},"carbohydrates"),o.a.createElement(F.a,{className:"",style:{}},"fats"),o.a.createElement(F.a,{className:"",style:{}},"proteins"),o.a.createElement(F.a,{className:"",style:{}},"calories"),o.a.createElement(F.a,{className:"",style:{}})),o.a.createElement(L.a,{className:"text-white border-col align-items-center",style:{backgroundColor:"red",height:"50px"}},o.a.createElement(F.a,null,"daily goal"),o.a.createElement(F.a,null)),o.a.createElement(L.a,{className:"text-white border-col align-items-center",style:{backgroundColor:"grey",height:"50px"}},o.a.createElement(F.a,null,"total"),o.a.createElement(F.a,null,h),o.a.createElement(F.a,null,v),o.a.createElement(F.a,null,O),o.a.createElement(F.a,null,p),o.a.createElement(F.a,null)),o.a.createElement(L.a,{className:"text-white border-col align-items-center",style:{backgroundColor:"blue",height:"50px"}},o.a.createElement(F.a,null,"breakfast"),o.a.createElement(F.a,null),o.a.createElement(F.a,null),o.a.createElement(F.a,null),o.a.createElement(F.a,null,f),o.a.createElement(F.a,null)),d.map((function(e){return o.a.createElement(G,{key:e.food_en.id,Food:e.food_en,count:e.quantity,date:n.format("MM-DD-YYYY")})})),o.a.createElement(L.a,{className:"text-white border-col align-items-center",style:{backgroundColor:"blue",height:"50px"}},o.a.createElement(F.a,null,"lunch"),o.a.createElement(F.a,null),o.a.createElement(F.a,null),o.a.createElement(F.a,null),o.a.createElement(F.a,null,E),o.a.createElement(F.a,null)),g.map((function(e){return o.a.createElement(G,{key:e.food_en.id,Food:e.food_en,count:e.quantity,date:n.format("MM-DD-YYYY")})})),o.a.createElement(L.a,{className:"text-white border-col align-items-center",style:{backgroundColor:"blue",height:"50px"}},o.a.createElement(F.a,null,"dinner"),o.a.createElement(F.a,null),o.a.createElement(F.a,null),o.a.createElement(F.a,null),o.a.createElement(F.a,null,y),o.a.createElement(F.a,null)),b.map((function(e){return o.a.createElement(G,{key:e.food_en.id,Food:e.food_en,count:e.quantity,date:n.format("MM-DD-YYYY")})})))},ee=a(51),te=(a(195),a(339)),ae=(a(80),a(83));function ne(e){var t,a,l=Object(r.useState)({username:"",password:""}),c=Object(q.a)(l,2),u=c[0],i=c[1],m=Object(r.useState)({}),d=Object(q.a)(m,2),f=d[0],g=d[1],E=X(),b=Object(s.useLazyQuery)(S,{onError:function(e){console.log(e),g(e.graphQLErrors[0].extensions.errors)},onCompleted:function(t){console.log(t),E({type:"LOGIN",payload:t.login}),e.history.push("/")}}),y=Object(q.a)(b,2),p=y[0],h=y[1].loading;return o.a.createElement(L.a,{className:"bg-white py-5 justify-content-center"},o.a.createElement(F.a,{sm:8,md:6,lg:4},o.a.createElement("h1",{className:"text-center"},"Login"),o.a.createElement(te.a,{onSubmit:function(e){e.preventDefault(),p({variables:u})}},o.a.createElement(te.a.Group,null,o.a.createElement(te.a.Label,{className:f.username&&"text-danger"},null!==(t=f.username)&&void 0!==t?t:"Username"),o.a.createElement(te.a.Control,{type:"text",value:u.username,className:f.username&&"is-invalid",onChange:function(e){return i(Object(n.a)(Object(n.a)({},u),{},{username:e.target.value}))}})),o.a.createElement(te.a.Group,null,o.a.createElement(te.a.Label,{className:f.password&&"text-danger"},null!==(a=f.password)&&void 0!==a?a:"Password"),o.a.createElement(te.a.Control,{type:"password",value:u.password,className:f.password&&"is-invalid",onChange:function(e){return i(Object(n.a)(Object(n.a)({},u),{},{password:e.target.value}))}})),o.a.createElement("div",{className:"text-center"},o.a.createElement(I.a,{variant:"success",type:"submit",disabled:h},h?"loading..":"Login"),o.a.createElement("br",null),o.a.createElement("small",null,"Don't have an account? ",o.a.createElement(ae.NavHashLink,{to:"/register"},"Register"))))))}a(131);function re(e){var t,a,l,c,u=Object(r.useState)({email:"",username:"",password:"",confirmPassword:""}),i=Object(q.a)(u,2),m=i[0],d=i[1],f=Object(r.useState)({}),g=Object(q.a)(f,2),E=g[0],b=g[1],y=Object(s.useMutation)(C,{update:function(t,a){return e.history.push("/login")},onError:function(e){return b(e.graphQLErrors[0].extensions.errors)}}),p=Object(q.a)(y,2),h=p[0],v=p[1].loading;return o.a.createElement(L.a,{className:"bg-white py-5 justify-content-center"},o.a.createElement(F.a,{sm:8,md:6,lg:4},o.a.createElement("h1",{className:"text-center"},"Register"),o.a.createElement(te.a,{onSubmit:function(e){e.preventDefault(),h({variables:m})}},o.a.createElement(te.a.Group,null,o.a.createElement(te.a.Label,{className:E.email&&"text-danger"},null!==(t=E.email)&&void 0!==t?t:"Email address"),o.a.createElement(te.a.Control,{type:"email",value:m.email,className:E.email&&"is-invalid",onChange:function(e){return d(Object(n.a)(Object(n.a)({},m),{},{email:e.target.value}))}})),o.a.createElement(te.a.Group,null,o.a.createElement(te.a.Label,{className:E.username&&"text-danger"},null!==(a=E.username)&&void 0!==a?a:"Username"),o.a.createElement(te.a.Control,{type:"text",value:m.username,className:E.username&&"is-invalid",onChange:function(e){return d(Object(n.a)(Object(n.a)({},m),{},{username:e.target.value}))}})),o.a.createElement(te.a.Group,null,o.a.createElement(te.a.Label,{className:E.password&&"text-danger"},null!==(l=E.password)&&void 0!==l?l:"Password"),o.a.createElement(te.a.Control,{type:"password",value:m.password,className:E.password&&"is-invalid",onChange:function(e){return d(Object(n.a)(Object(n.a)({},m),{},{password:e.target.value}))}})),o.a.createElement(te.a.Group,null,o.a.createElement(te.a.Label,{className:E.confirmPassword&&"text-danger"},null!==(c=E.confirmPassword)&&void 0!==c?c:"Confirm password"),o.a.createElement(te.a.Control,{type:"password",value:m.confirmPassword,className:E.confirmPassword&&"is-invalid",onChange:function(e){return d(Object(n.a)(Object(n.a)({},m),{},{confirmPassword:e.target.value}))}})),o.a.createElement("div",{className:"text-center"},o.a.createElement(I.a,{variant:"success",type:"submit",disabled:v},v?"loading..":"Register"),o.a.createElement("br",null),o.a.createElement("small",null,"Already have an account? ",o.a.createElement(ae.NavHashLink,{to:"/login"},"Login"))))))}var oe=o.a.createContext();o.a.createContext();var le=function(e){var t=e.history,a=X(),n=Object(r.useState)(D()()),l=Object(q.a)(n,2),c=l[0],i=l[1],m=Object(s.useLazyQuery)(w),d=Object(q.a)(m,2),f=d[0],g=d[1];g.loading,g.data,f();var E=Object(s.useQuery)(x,{variables:{date:c.format("MM-DD-YYYY")},pollInterval:1e-4}),b=E.loading,y=E.error,p=E.data;if(b)return null;if(y)return"Error! ".concat(y);var h=p.getEntries.map((function(e){return e.food_en.food_name}));return o.a.createElement("div",{className:"App"},o.a.createElement(L.a,{className:"bg-white justify-content-around mb-1"},o.a.createElement(ee.Link,{to:"/login"},o.a.createElement(I.a,{variant:"link"},"Login")),o.a.createElement(ee.Link,{to:"/register"},o.a.createElement(I.a,{variant:"link"},"Register")),o.a.createElement(I.a,{variant:"link",onClick:function(){a({type:"LOGOUT"}),t.push("/login")}},"Logout")),o.a.createElement(oe.Provider,{value:[c,i]},o.a.createElement(se,null),o.a.createElement(Z,null)),o.a.createElement(u.Query,{query:_,pollInterval:1e-4},(function(e){var t=e.loading,a=e.error,n=e.data;if(t)return o.a.createElement("h4",null,"Loading...");a&&console.log(a),console.log(n);var l=n.getFoods.filter((function(e){return"breakfast"===e.type&&!h.includes(e.food_name)})),u=n.getFoods.filter((function(e){return"lunch"===e.type&&!h.includes(e.food_name)})),i=n.getFoods.filter((function(e){return"dinner"===e.type&&!h.includes(e.food_name)}));return o.a.createElement(r.Fragment,null,o.a.createElement(L.a,{className:"text-white text-center border-col align-items-center",style:{backgroundColor:"green",height:"50px"}},o.a.createElement(F.a,null,"Today's Menu")),o.a.createElement(L.a,{className:"text-white border-col align-items-center",style:{backgroundColor:"blue",height:"50px"}},o.a.createElement(F.a,null,"breakfast"),o.a.createElement(F.a,null),o.a.createElement(F.a,null),o.a.createElement(F.a,null),o.a.createElement(F.a,null),o.a.createElement(F.a,null)),l.map((function(e){return o.a.createElement(B,{key:e.id,Food:e,date:c.format("MM-DD-YYYY")})})),o.a.createElement(L.a,{className:"text-white border-col align-items-center",style:{backgroundColor:"blue",height:"50px"}},o.a.createElement(F.a,null,"lunch"),o.a.createElement(F.a,null),o.a.createElement(F.a,null),o.a.createElement(F.a,null),o.a.createElement(F.a,null),o.a.createElement(F.a,null)),u.map((function(e){return o.a.createElement(B,{key:e.id,Food:e,date:c.format("MM-DD-YYYY")})})),o.a.createElement(L.a,{className:"text-white border-col align-items-center",style:{backgroundColor:"blue",height:"50px"}},o.a.createElement(F.a,null,"dinner"),o.a.createElement(F.a,null),o.a.createElement(F.a,null),o.a.createElement(F.a,null),o.a.createElement(F.a,null),o.a.createElement(F.a,null)),i.map((function(e){return o.a.createElement(B,{key:e.id,Food:e,date:c.format("MM-DD-YYYY")})})))})))},ce=a(169),ue=(a(172),a(156)),ie=a(173);a(227);var se=function(e){var t=Object(r.useContext)(oe),a=Object(q.a)(t,2),n=a[0],l=a[1];return console.log(n),o.a.createElement("div",{style:{marginBottom:"30px"}},o.a.createElement(ce.a,{"aria-label":"Basic example"},o.a.createElement("button",{type:"button",onClick:function(){l(D()(n).subtract(1,"days")),console.log(n.format("MM-DD-YYYY"))},className:"btn btn-primary btn-lg active"},o.a.createElement(P.a,{icon:Q.a})),o.a.createElement(ue.a,{trigger:o.a.createElement("button",{type:"button",className:"btn btn-primary btn-lg active"},n.format("ddd MM-DD-YYYY")),position:"bottom center"},o.a.createElement("div",null,o.a.createElement(ie.a,{onSelect:function(e){return l(D()(e))},width:400,height:300,disabledDays:[0,6]}))),o.a.createElement("button",{type:"button",onClick:function(){l(D()(n).subtract(-1,"days")),console.log(n.format("MM-DD-YYYY"))},className:"btn btn-primary btn-lg active"},o.a.createElement(P.a,{icon:Q.b}))," "))},me=a(20),de=(a(228),a(229),a(338));a(170);function fe(e){var t=Object(r.useContext)(A).user;return e.authenticated&&!t?o.a.createElement(me.c,{to:"/login"}):e.guest&&t?o.a.createElement(me.c,{to:"/"}):o.a.createElement(me.d,Object.assign({component:e.component},e))}o.a.createContext(),o.a.createContext();var ge=function(){return o.a.createElement(V,null,o.a.createElement(ee.BrowserRouter,null,o.a.createElement(de.a,{className:"pt-5"},o.a.createElement(me.g,null,o.a.createElement(fe,{exact:!0,path:"/",component:le,authenticated:!0}),o.a.createElement(fe,{path:"/register",component:re,guest:!0}),o.a.createElement(fe,{path:"/login",component:ne,guest:!0})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(323),a(324),a(3);var Ee=a(33),be=a(171),ye=Object(s.createHttpLink)({uri:"http://localhost:4000"}),pe=Object(be.a)((function(e,t){var a=t.headers,r=localStorage.getItem("token");return{headers:Object(n.a)(Object(n.a)({},a),{},{authentication:r?"Bearer ".concat(r):""})}})),he=new s.ApolloClient({link:pe.concat(ye),cache:new Ee.InMemoryCache});c.a.render(o.a.createElement(s.ApolloProvider,{client:he},o.a.createElement(ge,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[174,1,2]]]);
//# sourceMappingURL=main.be0c8c33.chunk.js.map