(this["webpackJsonpmettle-works"]=this["webpackJsonpmettle-works"]||[]).push([[0],{22:function(e,t,n){},31:function(e,t,n){},34:function(e,t,n){},37:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var i=n(0),s=n.n(i),o=n(24),a=n.n(o),c=(n(31),n(12)),r=n(13),l=n(15),d=n(14),m=n(11),u=n(2),h=n(9),p=n.n(h),g=n(16),f=n(7),v=(n(25),n(1)),b=function(e){e.isScrolling;var t=e.contents;return Object(v.jsx)("div",{className:"page-container",children:Object(v.jsx)("div",{id:"root",className:"App",children:Object(v.jsx)("div",{dangerouslySetInnerHTML:{__html:t},className:"mw-content-ltr sitedir-ltr ltr mw-body-content parsoid-body mediawiki mw-parser-output"})})})},y=(n(34),n(35),n(22),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(c.a)(this,n),(i=t.call(this,e)).state={mousedown:!1},i}return Object(r.a)(n,[{key:"componentWillMount",value:function(){var e=document.getElementsByClassName("minimap-treeview")[0],t=document.getElementsByClassName("miniregion")[0];"undefined"!==typeof e&&null!==e&&e.parentNode.removeChild(e),"undefined"!==typeof t&&null!==t&&t.parentNode.removeChild(t)}},{key:"componentDidMount",value:function(){var e=document.getElementById(this.props.rootId);if("undefined"===typeof e&&null===e)return!1;e.className="react-minimap-component";var t=document.createElement("div");t.className="minimap-treeview";var n=document.getElementsByClassName("minimap-container")[0];n.appendChild(t);var i=e.cloneNode(!0);(i=this.highlightSection(i)).className="minimap noselect "+this.props.rootId;var s=document.createElement("div");s.className="miniregion",n.appendChild(s),t.appendChild(i);var o=document.getElementsByClassName("minimap")[0],a=document.createElement("div");a.className="minimap-overlay",o.appendChild(a),this.onResizeHandler(o),console.log("componentDidMount"),window.addEventListener("resize",this.onResizeHandler.bind(this,e),!1),window.addEventListener("scroll",this.onScrollHandler.bind(this),!1),s.addEventListener("mousedown",this.onMouseDownHandler.bind(this),!1),s.addEventListener("mouseup",this.onMouseUpHandler.bind(this),!1),s.addEventListener("mousemove",this.onMouseMoveHandler.bind(this),!1),s.addEventListener("click",this.onClickHandler.bind(this),!1),o.addEventListener("mousedown",this.onMouseDownHandler.bind(this),!1),o.addEventListener("mouseup",this.onMouseUpHandler.bind(this),!1),o.addEventListener("mousemove",this.onMouseMoveHandler.bind(this),!1),o.addEventListener("click",this.onClickHandler.bind(this),!1),t.addEventListener("click",this.onClickHandler.bind(this),!1)}},{key:"getHighlightedText",value:function(e,t){return console.log("getHighlightedText"),e.replace(t,"<span style='color:red;' >".concat(t,"</span>"))}},{key:"highlightSection",value:function(e){console.log("highlightSection");var t=this.props.searchQuery;return t?(e.querySelectorAll("p").forEach((function(e,n){e.textContent.toLowerCase().includes(t.toLowerCase())?e.style.backgroundColor="#ffff00":e.style.backgroundColor="transparent"})),e):e}},{key:"componentDidUpdate",value:function(){this.props.searchQuery;var e=document.getElementsByClassName("minimap")[0],t=document.getElementsByClassName("miniregion")[0];t.parentNode.removeChild(t),e.parentNode.removeChild(e);var n=document.getElementById(this.props.rootId),i=document.getElementsByClassName("minimap-treeview")[0],s=document.getElementsByClassName("minimap-container")[0],o=n.cloneNode(n);console.log("componentDidUpdate"),(o=this.highlightSection(o)).className="minimap noselect "+this.props.rootId;var a=document.createElement("div");a.className="miniregion",s.appendChild(a),i.appendChild(o);var c=document.getElementsByClassName("minimap")[0],r=document.createElement("div");r.className="minimap-overlay",c.appendChild(r),this.onResizeHandler(this),c.addEventListener("mousemove",this.onMouseMoveHandler.bind(this)),c.addEventListener("click",this.onClickHandler.bind(this),!1),a.addEventListener("mousedown",this.onMouseDownHandler.bind(this),!1),a.addEventListener("mouseup",this.onMouseUpHandler.bind(this),!1),a.addEventListener("mousemove",this.onMouseMoveHandler.bind(this),!1),a.addEventListener("click",this.onClickHandler.bind(this),!1)}},{key:"onResizeHandler",value:function(e){console.log("onResizeHandler");var t=this.props,n=t.offsetHeightRatio,i=t.offsetWidthRatio,s=t.widthRatio,o=t.heightRatio,a=t.style,c=t.position;if(!t.toggle)return!1;var r=document.getElementsByClassName("minimap")[0];if("undefined"===typeof r)return!1;var l,d,m,u,h=document.getElementsByClassName("minimap-overlay")[0],p=document.getElementsByClassName("minimap-treeview")[0],g=this.scale(),f=document.documentElement.clientHeight*n,v=document.documentElement.clientWidth*i;d=document.documentElement.clientWidth*(1/g.x)*s,m=document.documentElement*(1/g.y)*o,r.clientHeight,g.y,r.clientWidth,g.x,u={"-webkit-transform":l="scale3d("+g.x+","+g.y+",1)","-moz-transform":l,"-ms-transform":l,"-o-transform":l,transforn:l,width:d+"px",height:m+"px",margin:"0px",padding:"0px"},Object.assign(r.style,this._mergeStyles(u,a)),Object.assign(h.style,{height:m+"px",width:"475px"});var b={height:document.documentElement.clientHeight+"px"};b[c]="5px",Object.assign(p.style,this._mergeStyles(b,a)),this._miniRegion(e)}},{key:"onScrollHandler",value:function(){console.log("onScrollHandler")}},{key:"onClickHandler",value:function(e){console.log("onClickHandler"),this._scrollTop(e),this.setState({mousedown:!1})}},{key:"onMouseMoveHandler",value:function(e){if(console.log("onMouseMoveHandler"),!this.state.mousedown)return this.setState({mousedown:!1}),!1;this._scrollTop(e)}},{key:"onMouseDownHandler",value:function(e){console.log("onMouseDownHandler"),this.setState({mousedown:!0});var t=document.getElementsByClassName("miniregion")[0],n=document.getElementsByClassName("minimap")[0];this.addClass(t,"dragging"),this.addClass(n,"noselect")}},{key:"onMouseUpHandler",value:function(e){console.log("onMouseUpHandler");var t=document.getElementsByClassName("miniregion")[0],n=document.getElementsByClassName("minimap")[0];this.removeClass(t,"dragging"),this.removeClass(n,"noselect"),this.setState({mousedown:!1})}},{key:"scale",value:function(){console.log("scale");var e=this.props,t=(e.widthRatio,e.heightRatio,document.getElementsByClassName("minimap")[0]),n=document.getElementById(this.props.rootId);if("undefined"===typeof t)return!1;if("undefined"===typeof n)return!1;if(t.offsetHeight<=7e3){return{x:document.getElementById(this.props.rootId).clientWidth/t.clientWidth*.07,y:document.getElementById(this.props.rootId).clientHeight/t.clientHeight*.1}}return{x:document.documentElement.clientWidth/t.clientWidth*.08,y:document.documentElement.clientHeight/t.clientHeight*.95}}},{key:"onScrollChecker",value:function(e){return console.log("onScrollChecker"),document.getElementById(e).scrollHeight>document.getElementById(e).clientHeight}},{key:"_mergeStyles",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Object.assign.apply(Object,[{}].concat(t))}},{key:"_miniRegion",value:function(){console.log("_miniRegion");var e=this.props,t=e.offsetHeightRatio,n=e.offsetWidthRatio,i=e.position,s=e.style,o=document.getElementsByClassName("minimap")[0];if("undefined"===typeof o)return!1;var a=o.getBoundingClientRect(),c=this.scale(),r=a.top*c.y,l=document.documentElement.clientWidth*n,d={width:document.getElementsByClassName("minimap-treeview")[0].clientWidth+5+"px",height:window.innerHeight*c.y+"px",margin:"0px",top:window.pageYOffset*c.y+document.documentElement.clientHeight*t-r+"px",display:"block"};d[i]=l+"px",Object.assign(document.getElementsByClassName("miniregion")[0].style,this._mergeStyles(d,s))}},{key:"_scrollTop",value:function(e){console.log("_scrollTop");var t=this.props,n=t.offsetHeightRatio,i=t.toggle,s=t.smoothScrollDelay,o=t.smoothScroll;if(!i)return!1;var a=document.getElementsByClassName("minimap")[0].getBoundingClientRect(),c=this.scale(),r=document.documentElement.clientHeight*n,l=a.top*c.y,d=document.getElementsByClassName("miniregion")[0].offsetHeight,m=(e.clientY-d/2-r+l)/c.y;if("click"===e.type&&o){var u=window.pageYOffset,h=document.getElementsByClassName("minimap")[0].offsetHeight,p=(m=Math.max(m,Math.min(m,h)))>u,g=s,f=Math.abs(u-m),v=g/f,b=1,y=4;v>=4?y=parseInt(b,15):b=v>=1?4*parseInt(v,15):parseInt(4/v,15);var j=u,A=parseInt(f/b,8),w=window.setInterval((function(){j+=p?b:-b,--A<=0&&(clearInterval(w),j=m),window.scrollTo(0,j)}),y)}else window.scrollTo(0,m);e.stopPropagation()}},{key:"addClass",value:function(e,t){e.className?e.classList.add(t):this.hasClass(e,t)||(e.className+=" "+t)}},{key:"hasClass",value:function(e,t){return e.classList?e.classList.contains(t):!!e.className.match(new RegExp("(\\b"+t+"(\\b)"))}},{key:"removeClass",value:function(e,t){if(e.classList)e.classList.remove(t);else if(this.hasClass(e,t)){var n=new RegExp("(\\b"+t+"(\\b)");e.className=e.className.replace(n," ")}}},{key:"render",value:function(){return Object(v.jsx)("div",{})}}]),n}(i.Component));y.defaultProps={heightRatio:.95,widthRatio:.05,offsetHeightRatio:.01,offsetWidthRatio:.002,position:"right",smoothScroll:!0,smoothScrollDelay:200,toggle:!0};var j=function(e){e.contentToHighlight,e.submitForm;var t=e.showMinimap,n=Object(i.useState)(t),s=Object(f.a)(n,2),o=(s[0],s[1]);return Object(i.useEffect)((function(){window.addEventListener("scroll",(function(){o(!0)}),!1)}),[]),Object(v.jsx)("div",{children:!1})},A=(n(37),function(){var e=[];e.push('here<div style="background-color: green;">Green text goes here</div>here');var t=Object(u.f)(),n=Object(i.useState)([]),s=Object(f.a)(n,2),o=s[0],a=s[1],c=Object(i.useState)(!1),r=Object(f.a)(c,2),l=(r[0],r[1],Object(i.useState)()),d=Object(f.a)(l,2),m=(d[0],d[1],Object(i.useState)("")),h=Object(f.a)(m,2),y=h[0],A=h[1],w=Object(i.useState)(),E=Object(f.a)(w,2),C=E[0],x=E[1],O=Object(i.useState)(""),k=Object(f.a)(O,2),H=(k[0],k[1],Object(i.useState)(!1)),N=Object(f.a)(H,2),B=N[0],S=N[1];function R(){return L.apply(this,arguments)}function L(){return(L=Object(g.a)(p.a.mark((function e(){var n,i,s,o,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URLSearchParams(t.search),i=n.get("query"),s=i&&i.substring(i.lastIndexOf("/")+1),e.next=5,fetch("https://en.wikipedia.org/w/rest.php/v1/page/".concat(s,"/html"),{"Api-User-Agent":"MediaWiki REST API docs examples/0.1 (https://www.mediawiki.org/wiki/API_talk:REST_API)"});case 5:return o=e.sent,e.next=8,o.text();case 8:return a=e.sent,e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(){return(M=Object(g.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R();case 3:t=e.sent,a(t),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}Object(i.useEffect)((function(){!function(){M.apply(this,arguments)}()}),[]);Object(i.useEffect)((function(){var e=setTimeout((function(){x(y),y&&y.length&&S(!0)}),1e3);return function(){return clearTimeout(e)}}),[y]);return Object(v.jsxs)("div",{className:"page-section",children:[Object(v.jsx)("input",{placeholder:"Enter search query",className:"search-query",type:"text",name:"name",value:y,onChange:function(e){A(e.target.value)}}),Object(v.jsx)("hr",{}),Object(v.jsx)(b,{contents:o}),Object(v.jsx)(j,{contentToHighlight:e,submitForm:C,showMinimap:B})]})}),w=(n(42),function(){return Object(v.jsx)(s.a.Fragment,{children:Object(v.jsxs)("div",{children:[Object(v.jsx)("h3",{children:"Home Page of Mettle Works (Under Progress)"}),Object(v.jsxs)("h4",{children:["Click ",Object(v.jsx)(m.b,{to:"/details?query=https://en.m.wikipedia.org/wiki/Seattle_metropolitan_area",children:"here"})," to redirect to Details page"]})]})})}),E=function(){return Object(v.jsxs)(m.a,{children:[Object(v.jsx)(u.c,{children:Object(v.jsx)(u.a,{exact:!0,path:"/",component:w})}),Object(v.jsx)(u.c,{children:Object(v.jsx)(u.a,{exact:!0,path:"/details",component:A})})]})},C=(n(43),n(44),function(){return Object(v.jsx)(s.a.Fragment,{children:Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)("div",{className:"menu-bar",children:Object(v.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAG6ADAAQAAAABAAAAGwAAAADVx3bDAAABBUlEQVRIDe2UwWrCQBCGZzZptEHxoCBsoGLfRHyBPmT1FXwAvUuP9dRCExoaeiokGjPbPYjC5JCMB/Gwe9mZ4Z/Z5efbBXDLOXAvDiC/SNTvD/1OJ+B1Sf6ZZb9Wv+c9PisofzB4UehNWV2QktFavyZJ8s6b+GFUEm26Bt+4sH1+hLwovtvrnVLoQI3GZ62fCCAUzjnLDzaycHzZ7e9cPAUcEAXgzT1PXU1jF9FEo2gRZ/Gu6TA6KLP26bjlQkmeZ7GjUWKYTFujcTKeTCuoerIxFzVCaYo0/fhpRWNAswe4/m9EVFRpvbT8N/+NkOerKgwfL3eVRWjRt+8slXU5tXPg1g78Aw5rSQg3SrIBAAAAAElFTkSuQmCC",alt:"menu",height:"36px",width:"36px"})}),Object(v.jsx)("div",{className:"icon-brand",children:"MettleWorks"})]})})}),x=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)(C,{}),Object(v.jsx)(E,{})]})}}]),n}(i.Component),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),i(e),s(e),o(e),a(e)}))};a.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(x,{})}),document.getElementById("root")),O()}},[[45,1,2]]]);
//# sourceMappingURL=main.cfa94375.chunk.js.map