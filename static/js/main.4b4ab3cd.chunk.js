(this["webpackJsonpdevelopers-portfolio"]=this["webpackJsonpdevelopers-portfolio"]||[]).push([[0],{16:function(e,a,t){e.exports=t.p+"static/media/arnav_CV.f3c6d0fd.pdf"},2:function(e){e.exports=JSON.parse('{"a":"Arnav","c":"","b":"Chauhan","f":"| Engineer | Programmer | Web Developer | App Developer | Athlete | Gamer ","j":[{"id":0,"image":"fa-github","url":"https://github.com/foxy17","style":"socialicons"},{"id":1,"image":"fa-facebook","url":"https://www.facebook.com/","style":"socialicons"},{"id":2,"image":"fa-instagram","url":"https://www.instagram.com/renegade.mess/","style":"socialicons"},{"id":3,"image":"fa-linkedin","url":"https://www.linkedin.com/in/arnavschauhan/","style":"socialicons"}],"e":"About Me","q":false,"k":"https://www.instagram.com/","m":"renegademess","l":"/?__a=1","d":"I\'m Computer Engineer from Bennett University, Delhi with 3+ years of experience in web development. I\u2019m currently working as a MEAN Stack and Flutter Developer in Newsg8r. I\'m passionate about exploring latest technologies and making designs come to life! I also work as freelancers and have expirience in making customized CMS systems.","n":"Recent Projects","g":"https://api.github.com/users/","i":"foxy17","h":"/repos?sort=updated&direction=desc","o":2,"r":true,"p":false}')},34:function(e,a,t){e.exports=t.p+"static/media/youngun.d11e0b83.JPG"},40:function(e,a,t){e.exports=t(72)},45:function(e,a,t){},49:function(e,a,t){},69:function(e,a,t){},72:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(32),i=t.n(l),c=(t(45),t(14)),s=t(10),o=(t(46),t(47),t(49),t(2)),m=t(39),u=t(3),d=t(33),p=t.n(d),g=function(){var e=Object(n.useState)(new Array(o.j.length).fill("socialicons")),a=Object(u.a)(e,2),t=a[0],l=a[1],i=function(e){var a=Object(m.a)(t);return"enter"===e.event?(a[e.icon.id]="socialiconshover",l(a)):"leave"===e.event?(a[e.icon.id]="socialicons",l(a)):void 0};return r.a.createElement("div",null,r.a.createElement("div",{id:"home",className:"title jumbotron jumbotron-fluid bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"},r.a.createElement("div",{id:"stars"}),r.a.createElement("div",{className:"container container-fluid text-center "},r.a.createElement("h1",{className:"display-1"},o.a+" "+o.c+" "+o.b),r.a.createElement(p.a,{className:"lead"}," ",o.f),r.a.createElement("div",{className:"p-5"},o.j.map((function(e){return r.a.createElement("a",{key:e.id,target:"_blank",rel:"noopener noreferrer",href:e.url,"aria-label":"My ".concat(e.image.split("-")[1])},r.a.createElement("i",{className:"fab ".concat(e.image,"  fa-3x ").concat(t[e.id]),onMouseOver:function(){return i({icon:e,event:"enter"})},onMouseOut:function(){return i({icon:e,event:"leave"})}}))}))),r.a.createElement("a",{className:"btn btn-outline-light btn-lg",href:"#aboutme",role:"button","aria-label":"Learn more about me"},"More about me"))))},b=t(12),h=t.n(b),f=t(16),E=t.n(f),v=function(){var e=Object(n.useState)(""),a=Object(u.a)(e,2),t=a[0],l=a[1],i=Object(n.useState)(o.q),c=Object(u.a)(i,2),s=c[0],m=c[1],d=Object(n.useState)(E.a),p=Object(u.a)(d,1)[0];Object(n.useEffect)((function(){s&&g()}),[s]);var g=function(e){h.a.get(o.k+o.m+o.l).then((function(e){return l(e.data.graphql.user.profile_pic_url_hd)})).catch((function(e){return m(!1),console.error(e.message)})).finally((function(){}))};return r.a.createElement("div",{id:"aboutme",className:"jumbotron jumbotron-fluid m-0"},r.a.createElement("div",{className:"container container-fluid p-5"},r.a.createElement("div",{className:"row"},s&&r.a.createElement("div",{className:"col-5 d-none d-lg-block align-self-center"},r.a.createElement("img",{className:"border border-secondary rounded-circle",src:t,alt:"profilepicture"})),r.a.createElement("div",{className:"col-lg-".concat(s?"7":"12")},r.a.createElement("h1",{className:"display-4 mb-5 text-center"},o.e),r.a.createElement("p",{className:"lead text-center"},o.d),p&&r.a.createElement("p",{className:"lead text-center"},r.a.createElement("a",{className:"btn btn-outline-dark btn-lg",href:E.a,target:"_blank",rel:"noreferrer noopener",role:"button","aria-label":"Resume/CV"},"Resume"))))))},N=function(e){var a=e.value,t=Object(n.useState)([]),l=Object(u.a)(t,2),i=l[0],c=l[1],s=Object(n.useCallback)((function(e){h.a.get(a).then((function(e){return c(e.data)})).catch((function(e){return console.error(e.message)})).finally((function(){}))}),[a]);Object(n.useEffect)((function(){s()}),[s]);var o=[],m=0;for(var d in i)o.push(d),m+=i[d];return r.a.createElement("div",{className:"pb-3"},"Languages:"," ",o.map((function(e){return r.a.createElement("p",{key:e,className:"badge badge-light card-link"},e,": ",Math.trunc(i[e]/m*1e3)/10," %")})))},w=function(e){var a=e.value,t=Object(n.useState)("0 mints"),l=Object(u.a)(t,2),i=l[0],c=l[1],s=Object(n.useCallback)((function(e){var t=new Date(a.pushed_at),n=(new Date).getTime()-t.getTime(),r=Math.trunc(n/1e3/60/60);if(r<24)return c("".concat(r.toString()," hours ago"));var l=t.getDate(),i=t.getMonth(),s=t.getFullYear();return c("on ".concat(l," ").concat(["January","February","March","April","May","June","July","August","September","October","November","December"][i]," ").concat(s))}),[a.pushed_at]);Object(n.useEffect)((function(){s()}),[s]);var o=a.name,m=a.description,d=a.svn_url,p=a.stargazers_count,g=a.languages_url;return r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"card shadow-lg p-3 mb-5 bg-white rounded"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},o," "),r.a.createElement("p",{className:"card-text"},m," "),r.a.createElement("a",{href:"".concat(d,"/archive/master.zip"),className:"btn btn-outline-secondary mr-3"},r.a.createElement("i",{className:"fab fa-github"})," Clone Project"),r.a.createElement("a",{href:d,target:" _blank",className:"btn btn-outline-secondary"},r.a.createElement("i",{className:"fab fa-github"})," Repo"),r.a.createElement("hr",null),r.a.createElement(N,{value:g}),r.a.createElement("p",{className:"card-text"},r.a.createElement("span",{className:"text-dark card-link mr-4"},r.a.createElement("i",{className:"fab fa-github"})," Stars"," ",r.a.createElement("span",{className:"badge badge-dark"},p)),r.a.createElement("small",{className:"text-muted"},"Updated ",i)))))},y=function(){var e=Object(n.useState)([]),a=Object(u.a)(e,2),t=a[0],l=a[1],i=Object(n.useCallback)((function(e){h.a.get(o.g+o.i+o.h).then((function(e){return l(e.data.slice(0,o.o))})).catch((function(e){return console.error(e.message)})).finally((function(){}))}),[]);return Object(n.useEffect)((function(){i()}),[i]),r.a.createElement("div",{id:"projects",className:"jumbotron jumbotron-fluid bg-transparent m-0"},t.length&&r.a.createElement("div",{className:"container container-fluid p-5"},r.a.createElement("h1",{className:"display-4 pb-5"},o.n),r.a.createElement("div",{className:"row"},t.map((function(e){return r.a.createElement(w,{key:e.id,id:e.id,value:e})})))))},k=t(34),j=t.n(k);function x(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}var q=t(35),O=t.n(q),S=(t(69),t(74)),P=t(75),A=t(76),C=function(){var e=function(){var e=Object(n.useState)(x()),a=Object(u.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)((function(){function e(){r(x())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),t}(),a=e.height,t={width:.9*e.width,height:"450"};return r.a.createElement("div",{id:"freelance",className:"jumbotron jumbotron-fluid m-0 ",style:{backgroundColor:"white",height:a}},r.a.createElement("div",{className:"container container-fluid align-self-center "},r.a.createElement("div",{className:"row "},r.a.createElement("div",{className:"col d-lg-inline align-self-center"},r.a.createElement("h1",{className:"display-4 mb-3 text-center"},"Freelance Feedbacks"),r.a.createElement("br",null),r.a.createElement("div",{style:t,className:"col d-lg-inline align-self-center"},r.a.createElement(O.a,{className:"aws-btn "},r.a.createElement("div",null,r.a.createElement(S.a,null,r.a.createElement(P.a,{xs:!0,className:"lead"},r.a.createElement("b",null,"Arnav")," showed great responsibility and dedication towards his work and was the one who started the end to end tech automation planning and execution for our Ad agency, Ad agenicies that are well know for their messed up operations.He managed to streamline the process for us by understanding all the potential gaps.Few qualities that we loved about him :",r.a.createElement("ul",null,r.a.createElement("li",null,"smart approach towards the tech solutions that he plan/executes."),r.a.createElement("li",null,"always on toes when it comes to fixing bugs and understands the urgency of work."),r.a.createElement("li",null,"takes full responsibility about his work."))),r.a.createElement(P.a,{xs:!0,className:"m-auto"},r.a.createElement("a",{href:"https://youngun.in",target:"_blank"},r.a.createElement(A.a,{className:"d-block mx-auto ",src:j.a,alt:"SEC",fluid:!0})," "),r.a.createElement(S.a,{className:"lead d-block mx-auto"},r.a.createElement("b",{className:"h3"},"-Saksham Jadon"),r.a.createElement("br",null),"\xa0\xa0Founder Youngun"))))))))))},_=function(){var e=Object(n.useState)({backgroundColor:"#f5f5f5"}),a=Object(u.a)(e,1)[0];return r.a.createElement("footer",{style:a,className:"mt-auto py-3 text-center"},r.a.createElement("i",{className:"fas fa-code"})," with ",r.a.createElement("i",{className:"fas fa-heart"})," by"," ",r.a.createElement("a",{className:"badge badge-dark",rel:"noopener",href:"https://github.com/foxy17","aria-label":"My GitHub"},"Arnav Chauhan")," ","using ",r.a.createElement("i",{className:"fab fa-react"}))},M=function(e){var a=Object(n.useState)(!0),t=Object(u.a)(a,2),l=t[0],i=t[1];return Object(n.useEffect)((function(){document.addEventListener("scroll",(function(){var e=window.scrollY<200;e!==l&&i(e)}))}),[l]),r.a.createElement("nav",{className:"navbar navbar-expand-lg fixed-top navbar-light ".concat(l?"bg-transparent":"bg-gradient"," ")},r.a.createElement("a",{className:"navbar-brand",href:"/#home"},"<".concat(o.a," />")),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo02","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo02"},r.a.createElement("ul",{className:"navbar-nav mr-auto mt-2 mt-lg-0"},o.p&&r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{className:"nav-link lead",to:"/blog"},"Blog")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link lead",href:"/#aboutme"},r.a.createElement("b",null,"About"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link lead",href:"/#freelance"},r.a.createElement("b",null,"Freelance"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link lead",href:"/#projects"},r.a.createElement("b",null,"Projects"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link lead",href:E.a,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("b",null,"Resume"))))))},D=t(38),L=function e(a){var t=this,l=a.title,i=a.image,c=a.description;Object(D.a)(this,e),this.list=[],this.addParagraph=function(e){return t.list.push(r.a.createElement("p",{key:t.list.length,className:"lead"},e)),t},this.addHeading=function(e){return t.list.push(r.a.createElement(n.Fragment,{key:t.list.length},r.a.createElement("h1",{className:""},e),r.a.createElement("hr",null))),t},this.getBlog=function(){return r.a.createElement("div",{className:"container-lg"},t.list)},this.title=l,this.image=i,this.description=c},F=[],H=new L({title:"My First Blog",image:"img",description:"Description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, dolores? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia provident similique corporis rem ullam odio excepturi voluptas harum, architecto sit!"}).addHeading("Heading").addParagraph("1st Paragraph Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur vero reiciendis quas, autem sit culpa? Quibusdam, cupiditate voluptate a non nulla aliquid enim doloremque ullam, facilis quisquam similique hic omnis!").addParagraph("2nd Paragraph Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ad, temporibus quae obcaecati eum expedita pariatur aspernatur recusandae beatae iste soluta sunt blanditiis dolore ipsam quia laboriosam quas perspiciatis architecto?"),B=new L({title:"My Second Blog",image:"img",description:"Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempore aut neque consectetur voluptatem quam nihil, facere earum adipisci, animi beatae dicta maiores, ipsam delectus ab molestias dolorum aperiam? Sapiente?"}).addHeading("Heading").addParagraph("1st Paragraph Aspernatur vero reiciendis quas, autem sit culpa? Quibusdam, cupiditate voluptate a non nulla aliquid enim doloremque ullam, facilis quisquam similique hic omnis!").addParagraph("2nd Paragraph Consequuntur ad, temporibus quae obcaecati eum expedita pariatur aspernatur recusandae beatae iste soluta sunt blanditiis dolore ipsam quia laboriosam quas perspiciatis architecto?").addHeading("New Heading").addParagraph("1st Paragraph Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur vero reiciendis quas, autem sit culpa? Quibusdam, cupiditate voluptate a non nulla aliquid enim doloremque ullam, facilis quisquam similique hic omnis!").addParagraph("2nd Paragraph Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ad, temporibus quae obcaecati eum expedita pariatur aspernatur recusandae beatae iste soluta sunt blanditiis dolore ipsam quia laboriosam quas perspiciatis architecto?");F.push(B),F.push(H);var J=F,I=function(e){return r.a.createElement("div",{className:"container-lg mt-5 bg-blue"},r.a.createElement("h1",{className:"text-center"},"Blogs"),J.map((function(e,a){return r.a.createElement(R,{key:a,title:e.title,description:e.description,index:a})})))},R=function(e){var a=e.index,t=e.title,n=(e.image,e.description);return r.a.createElement("div",{className:"m-5"},r.a.createElement("div",{className:""},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-4 col-lg-12"}),r.a.createElement("div",{className:"col-8 col-lg-12"},r.a.createElement("div",{className:""},r.a.createElement("h1",{className:""},t),r.a.createElement("p",{className:"lead"},n),r.a.createElement(c.b,{to:"".concat("","blog/").concat(a)},"Read more..."," ")))),r.a.createElement("hr",null)))},T=function(e){var a=e.match.params.id,t=J[a];return r.a.createElement("div",{className:"container-lg mt-5"},t&&r.a.createElement("div",null,r.a.createElement("h1",{className:"display-2 text-center"},t.title),r.a.createElement("img",{className:"img-fluid mb-2",src:t.image,alt:t.title}),t.getBlog()),!t&&r.a.createElement("h1",{className:"display-1 text-center"},"404 - Page not found"))},z=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(g,null),r.a.createElement(v,null),r.a.createElement(C,null),r.a.createElement(y,null))},Q=function(){return r.a.createElement(c.a,{basename:"/"},o.r&&r.a.createElement(M,null),r.a.createElement(s.a,{path:"/",exact:!0,component:z}),o.p&&r.a.createElement(s.a,{path:"/blog",exact:!0,component:I}),o.p&&r.a.createElement(s.a,{path:"/blog/:id",component:T}),r.a.createElement(_,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[40,1,2]]]);
//# sourceMappingURL=main.4b4ab3cd.chunk.js.map