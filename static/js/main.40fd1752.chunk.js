(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a(54)},30:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(23),r=a.n(s),c=(a(30),a(56)),o=a(58),i=a(57),u=a(2),m=a(3),h=a(5),p=a(4),d=a(6),E=a(55),b=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"header"},l.a.createElement("h1",{style:{color:"#FFF"}},"React Blog")),l.a.createElement("div",{className:"nav"},l.a.createElement(E.a,{to:"/"},"Home"),l.a.createElement(E.a,{to:"/gallery"},"Gallery"),l.a.createElement(E.a,{to:"/users"},"Users"),l.a.createElement(E.a,{to:"/about"},"About")),l.a.createElement("div",{className:"body"},this.props.children))}}]),t}(n.Component),v=function(){return l.a.createElement("div",{style:{width:"100%",textAlign:"center",marginTop:65}},l.a.createElement("div",{className:"lds-dual-ring"}))},f=a(8),y=a.n(f),j=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={user:null},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){var e=this;y.a.get("https://jsonplaceholder.typicode.com/users/".concat(this.props.post.userId)).then(function(t){e.setState({user:t.data})})}},{key:"render",value:function(){var e=this.props.post;return l.a.createElement("article",{key:e.id},l.a.createElement("h1",null,l.a.createElement(E.a,{to:"/postid/".concat(e.id)},e.title)),l.a.createElement("div",{className:"user"},this.state.user?l.a.createElement(E.a,{to:"/userid/".concat(this.state.user.id)},this.state.user.name):null),l.a.createElement("p",null,e.body),l.a.createElement(E.a,{to:"/postid/".concat(e.id)},"Details"))}}]),t}(n.Component),O=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={posts:[],loading:!0,postToShow:6},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){var e=this;setTimeout(function(){y.a.get("https://jsonplaceholder.typicode.com/posts").then(function(t){e.setState({posts:t.data,loading:!1})})},1e3)}},{key:"render",value:function(){var e=this,t=this.state.posts.slice(0,this.state.postToShow).map(function(e){return l.a.createElement(j,{post:e,key:e.id})}),a=l.a.createElement("button",{onClick:function(){return e.setState({postToShow:e.state.postToShow+=6})},style:{fontSize:20}},"Load More");return l.a.createElement(b,null,this.state.loading?l.a.createElement(v,null):l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"articles"},t),l.a.createElement("div",{style:{textAlign:"center"}},a)))}}]),t}(n.Component),g=a(15),w=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.comments.length;return l.a.createElement("div",{className:"comments"},l.a.createElement("h3",null,e," Comment",e>2?"s":""),this.props.comments.map(function(e){return l.a.createElement("div",{className:"comment"},l.a.createElement("b",null,"By ",e.email),l.a.createElement("p",null,e.body))}))}}]),t}(n.Component),k=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={post:null,comments:[],user:null,loading:!0},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){var e=this,t=y.a.get("https://jsonplaceholder.typicode.com/posts/".concat(this.props.match.params.id)),a=y.a.get("https://jsonplaceholder.typicode.com/comments?postId=".concat(this.props.match.params.id));Promise.all([t,a]).then(function(t){var a=Object(g.a)(t,2),n=a[0],l=a[1];e.setState({post:n.data,comments:l.data,loading:!1})})}},{key:"render",value:function(){return l.a.createElement(b,null,this.state.loading?l.a.createElement(v,null):l.a.createElement("div",null,l.a.createElement("h1",null,this.state.post?this.state.post.title:null),l.a.createElement("div",{className:"user"},this.state.user?l.a.createElement(E.a,{to:"/userid/".concat(this.state.user.id)},this.state.user.name):null),l.a.createElement("p",null,this.state.post?this.state.post.body:null),l.a.createElement("div",{className:"comments"},l.a.createElement(w,{comments:this.state.comments}))))}}]),t}(n.Component),N=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={user:null,posts:[],postToShow:5},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){var e=this,t=y.a.get("https://jsonplaceholder.typicode.com/users/".concat(this.props.match.params.userId)),a=y.a.get("https://jsonplaceholder.typicode.com/posts?userId=".concat(this.props.match.params.userId));Promise.all([t,a]).then(function(t){var a=Object(g.a)(t,2),n=a[0],l=a[1];e.setState({user:n.data,posts:l.data})})}},{key:"render",value:function(){var e=this,t=this.state.posts.slice(0,this.state.postToShow).map(function(e){return l.a.createElement(j,{post:e,key:e.id})}),a=l.a.createElement("button",{onClick:function(){return e.setState({postToShow:e.state.postToShow+=3})},style:{fontSize:20}},"Load More");return l.a.createElement(b,null,l.a.createElement("div",{className:"userinfo"},l.a.createElement("h1",null,this.state.user?this.state.user.name:null),l.a.createElement("h3",null,"Username: @",this.state.user?this.state.user.username:null),l.a.createElement("p",null,"Email: ",this.state.user?this.state.user.email:null),l.a.createElement("p",null,"Website:"," ",l.a.createElement("a",{href:this.state.user?"http://"+this.state.user.website:null,target:"_blank"},this.state.user?this.state.user.website:null))),l.a.createElement("mark",null,this.state.user?l.a.createElement("h3",null,this.state.user.name," has ",this.state.posts.length," ","articles"):null),l.a.createElement("div",{className:"posts"},this.state.loading?l.a.createElement(v,null):l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"articles"},t),l.a.createElement("div",{style:{textAlign:"center"}},a))))}}]),t}(n.Component),S=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement(b,null,l.a.createElement("h1",null,"About Me"),l.a.createElement("p",null,"I'm the best react developer in the planet"))}}]),t}(n.Component),A=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={photos:[],loading:!0},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){var e=this;setTimeout(function(){y.a.get("https://jsonplaceholder.typicode.com/photos").then(function(t){var a=t.data;e.setState({photos:a.slice(0,200),loading:!1})})},1e3)}},{key:"render",value:function(){return l.a.createElement(b,null,this.state.loading?l.a.createElement(v,null):l.a.createElement("div",{className:"gallery"},this.state.photos.map(function(e){return l.a.createElement("div",{className:"photo"},l.a.createElement("img",{src:e.url}),l.a.createElement("h3",null,e.title))})))}}]),t}(n.Component),C=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={users:[],loading:!0},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){var e=this;y.a.get("https://jsonplaceholder.typicode.com/users").then(function(t){var a=t.data;return e.setState({users:a,loading:!1})})}},{key:"render",value:function(){return l.a.createElement(b,null,this.state.loading?l.a.createElement(v,null):l.a.createElement("div",null,l.a.createElement("h3",null,this.state.users.length," awesome authors \ud83d\udd25\ud83d\udd25"),l.a.createElement("div",{className:"users"},this.state.users.map(function(e){return l.a.createElement("div",{className:"user",key:e.id},l.a.createElement("h3",null,e.name),l.a.createElement("p",null,l.a.createElement("b",null,"Email:")," ",e.email),l.a.createElement("p",null,l.a.createElement("b",null,"Phone"),": ",e.phone),l.a.createElement("p",null,l.a.createElement("b",null,"website"),": ",e.website),l.a.createElement(E.a,{to:"/userid/".concat(e.id)},"All Articles"))}))))}}]),t}(n.Component),T=function(){return l.a.createElement("h2",null,"Not founded")};r.a.render(l.a.createElement(function(){return l.a.createElement(c.a,null,l.a.createElement(o.a,null,l.a.createElement(i.a,{exact:!0,path:"/",component:O}),l.a.createElement(i.a,{exact:!0,path:"/postid/:id",component:k}),l.a.createElement(i.a,{exact:!0,path:"/userid/:userId",component:N}),l.a.createElement(i.a,{exact:!0,path:"/about/",component:S}),l.a.createElement(i.a,{exact:!0,path:"/gallery",component:A}),l.a.createElement(i.a,{exact:!0,path:"/users",component:C}),l.a.createElement(i.a,{component:T})))},null),document.querySelector("#root"))}},[[25,2,1]]]);
//# sourceMappingURL=main.40fd1752.chunk.js.map