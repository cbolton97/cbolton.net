(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e,t,n){e.exports={Header:"Header_Header__1CTzX",NameBox:"Header_NameBox__2n62h",Name:"Header_Name__3-Q06",First:"Header_First__3wQLp",Second:"Header_Second__3snCz","scroll-first":"Header_scroll-first__24s_3",SubHeading:"Header_SubHeading__2B16j"}},function(e,t,n){e.exports={Project:"Project_Project__qD3K6",Icon:"Project_Icon__2o3pT",spin:"Project_spin__BZGSd",depth:"Project_depth__1o78Z",Title:"Project_Title__2p_9i",swing:"Project_swing__3a5bM",Description:"Project_Description__36wOj"}},function(e,t,n){e.exports={App:"App_App__3owNu",Section:"App_Section__3UGfa",Heading:"App_Heading__3MBJZ",rainbow:"App_rainbow__TLt6L"}},function(e,t,n){e.exports={LetterBox:"Title_LetterBox__1r3bW",Letter:"Title_Letter__2B2DG",rainbow:"Title_rainbow__1fWaj"}},,,function(e,t,n){e.exports={Projects:"Projects_Projects__3BrIo"}},function(e){e.exports=[{icon:"B",title:"Biome Search",description:"Unified search arcoss all of your favourite business apps",url:"https://www.trybiome.com/",color:"#52D19A"},{icon:"\ud83d\uddfa",title:"Mapping Myself",description:"Tracking a month of school and life with Mapbox and plain JS",url:"https://map.cbolton.net"},{icon:"A",title:"Shopify Hack Days",description:"Building Shopify's internal Hackathon engine with code and culture design",url:"https://medium.com/@cbolton97/my-eight-month-shopify-sprint-e22a2b3a23d2",color:"#F9464A"},{icon:"\ud83d\uddd3",title:"Calendar Scripting",description:"Writing a domain specific language to master calendar scheduling",url:"https://github.com/shannonjanehogan/google-calendar-dsl"},{icon:"\ud83d\udcc8",title:"Code Coverage Viz",description:"Analyzing performance to drive code testing strategies",url:"https://github.com/lydiachoi/test-percentage-visualizer"},{icon:"\ud83d\udd53",title:"Homework Ops",description:"Building the ultimate school workflow with Trello and Google Calendar",url:"https://medium.com/@cbolton97/operationalizing-homework-with-trello-and-google-calendar-195d8a150353"},{icon:"N",title:"nwPlus Hackathons",description:"Delievering technical workshops to hundreds of hackers",url:"https://www.linkedin.com/feed/update/urn:li:activity:6589939569251229696/",color:"#0AE3C6"},{icon:"\ud83d\udcaa",title:"YWCA Culture Shift",description:"Confronting gender discrimination across media, tech, and society",url:"https://ywcavan.org/programs/combating-sexualization/cultureshift/culture-shift-advisory-council"},{icon:"\ud83c\udfdb",title:"Commerce Student Society",description:"Writing policy for UBC's largest undergraduate society",url:"http://cus.ca/wp-content/uploads/2018/01/Community-Report.pdf"},{icon:"W",title:"UBC BizTech",description:"Bringing hands-on learning and career opportunities to 400 members",url:"http://ow.ly/y3M53075F4A",color:"#ffffff"},{icon:"\ud83d\udc6f\u200d\u2640\ufe0f",title:"BizTech Team",description:"Leading a team of 20 execs to run 19 events, all while still having fun",url:"https://medium.com/@cbolton97/making-the-dream-work-e6c883839076"},{icon:"\ud83d\udca1",title:"The Next Big Thing",description:"Empowering young entreprenuers to shape the future of technology",url:"https://hootsuite.com/newsroom/press-releases/the-next-big-thing"}]},function(e,t,n){e.exports=n(16)},,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o={};n.r(o),n.d(o,"register",function(){return s}),n.d(o,"unregister",function(){return u});var r=n(0),i=n.n(r),a=n(6),c=n.n(a),l=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function s(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");l?(!function(e,t){fetch(e).then(function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):d(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):d(t,e)})}}function d(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}function u(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}var p=n(3),m=n.n(p),h=n(4),g=n.n(h);function f(e){var t=e.children,n=t.split("").map(function(e,t){return i.a.createElement("div",{key:t,className:g.a.LetterBox,role:"presentation","aria-hidden":"true"},i.a.createElement("span",{className:g.a.Letter,"data-shadow":e},e))});return i.a.createElement("h1",{"aria-label":t},n)}var _=n(1),w=n.n(_);function v(e){var t=e.marquee,n=e.subheading;return i.a.createElement("header",{className:w.a.Header},i.a.createElement("div",{className:w.a.NameBox},i.a.createElement("div",{className:w.a.Name},i.a.createElement("div",{className:w.a.First},i.a.createElement(f,null,t[0])),i.a.createElement("div",{className:w.a.Second},i.a.createElement(f,null,t[1])))),i.a.createElement("div",{className:w.a.SubHeading},i.a.createElement("p",null,n.description),i.a.createElement("ul",null,n.links.map(function(e){var t=e.label,n=e.url;return i.a.createElement("li",{key:n},i.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},t))}))))}var b=n(7),y=n.n(b),E=n(2),k=n.n(E);function N(e){var t=e.icon,n=e.color,o=e.title,r=e.description,a=e.url;return i.a.createElement("a",{className:k.a.Project,href:a,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("div",{className:k.a.IconContainer,role:"presentation"},i.a.createElement("div",{className:k.a.Icon,style:{color:n||"inherit"}},t)),i.a.createElement("div",{className:k.a.Text},i.a.createElement("h3",{className:k.a.Title},o),i.a.createElement("p",{className:k.a.Description},r)))}function j(e){var t=e.projects;return i.a.createElement("div",{className:y.a.Projects},t.map(function(e){return i.a.createElement(N,Object.assign({key:e.title},e))}))}var B=n(8);n(15);c.a.render(i.a.createElement(function(){return i.a.createElement("div",{className:m.a.App},i.a.createElement(v,{marquee:["chrisbolton","cbolton.net"],subheading:{description:"Building on and off the internet.",links:[{label:"LinkedIn",url:"https://www.linkedin.com/in/cbolton97"},{label:"Medium",url:"http://medium.com/@cbolton97"},{label:"Github",url:"http://github.com/cbolton97"}]}}),i.a.createElement("div",{className:m.a.Section},i.a.createElement("h2",{className:m.a.Heading},"Projects"),i.a.createElement(j,{projects:B})))},null),document.getElementById("ui-root")),o.unregister()}],[[9,1,2]]]);
//# sourceMappingURL=main.c4305c3a.chunk.js.map