(this["webpackJsonpmettle-works"]=this["webpackJsonpmettle-works"]||[]).push([[0],{21:function(e,t,n){},31:function(e,t,n){},34:function(e,t,n){},36:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var i=n(0),s=n.n(i),o=n(23),a=n.n(o),c=(n(31),n(11)),r=n(12),l=n(14),d=n(13),m=n(10),u=n(2),h=n(17),p=n.n(h),g=n(24),v=n(8),f=n(1),y=function(e){e.isScrolling;var t=e.contents;return Object(f.jsx)("div",{className:"page-container",children:Object(f.jsx)("div",{id:"root",className:"App",children:t&&t.map((function(e){return Object(f.jsx)("div",{dangerouslySetInnerHTML:{__html:e}})}))})})},b=(n(34),n(25)),j=(n(21),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(c.a)(this,n),(i=t.call(this,e)).state={mousedown:!1},i}return Object(r.a)(n,[{key:"componentWillMount",value:function(){var e=document.getElementsByClassName("minimap-treeview")[0],t=document.getElementsByClassName("miniregion")[0];"undefined"!==typeof e&&null!==e&&e.parentNode.removeChild(e),"undefined"!==typeof t&&null!==t&&t.parentNode.removeChild(t)}},{key:"componentDidMount",value:function(){var e=document.getElementById(this.props.rootId);if("undefined"===typeof e&&null===e)return!1;e.className="react-minimap-component";var t=document.createElement("div");t.className="minimap-treeview";var n=document.getElementsByClassName("minimap-container")[0];n.appendChild(t);var i=e.cloneNode(!0);i.innerHTML=this.getHighlightedText(i.innerHTML,this.props.contentToHighlight),i.className="minimap noselect "+this.props.rootId;var s=document.createElement("div");s.className="miniregion",n.appendChild(s),t.appendChild(i);var o=document.getElementsByClassName("minimap")[0],a=document.createElement("div");a.className="minimap-overlay",o.appendChild(a),this.onResizeHandler(o),window.addEventListener("resize",this.onResizeHandler.bind(this,e),!1),window.addEventListener("scroll",this.onScrollHandler.bind(this),!1),s.addEventListener("mousedown",this.onMouseDownHandler.bind(this),!1),s.addEventListener("mouseup",this.onMouseUpHandler.bind(this),!1),s.addEventListener("mousemove",this.onMouseMoveHandler.bind(this),!1),s.addEventListener("click",this.onClickHandler.bind(this),!1),o.addEventListener("mousedown",this.onMouseDownHandler.bind(this),!1),o.addEventListener("mouseup",this.onMouseUpHandler.bind(this),!1),o.addEventListener("mousemove",this.onMouseMoveHandler.bind(this),!1),o.addEventListener("click",this.onClickHandler.bind(this),!1),t.addEventListener("click",this.onClickHandler.bind(this),!1)}},{key:"getHighlightedText",value:function(e,t){return e.replace(this.props.contentToHighlight[0],"<div style='background-color: red;' >".concat(this.props.contentToHighlight[0],"</div>"))}},{key:"componentDidUpdate",value:function(){var e=document.getElementsByClassName("minimap")[0],t=document.getElementsByClassName("miniregion")[0];t.parentNode.removeChild(t),e.parentNode.removeChild(e);var n=document.getElementById(this.props.rootId),i=document.getElementsByClassName("minimap-treeview")[0],s=document.getElementsByClassName("minimap-container")[0],o=n.cloneNode(n);o.innerHTML=this.getHighlightedText(o.innerHTML,this.props.contentToHighlight),o.className="minimap noselect "+this.props.rootId;var a=document.createElement("div");a.className="miniregion",s.appendChild(a),i.appendChild(o);var c=document.getElementsByClassName("minimap")[0],r=document.createElement("div");r.className="minimap-overlay",c.appendChild(r),this.onResizeHandler(this),c.addEventListener("mousemove",this.onMouseMoveHandler.bind(this)),c.addEventListener("click",this.onClickHandler.bind(this),!1),a.addEventListener("mousedown",this.onMouseDownHandler.bind(this),!1),a.addEventListener("mouseup",this.onMouseUpHandler.bind(this),!1),a.addEventListener("mousemove",this.onMouseMoveHandler.bind(this),!1),a.addEventListener("click",this.onClickHandler.bind(this),!1)}},{key:"onResizeHandler",value:function(e){var t=this.props,n=t.offsetHeightRatio,i=t.offsetWidthRatio,s=t.widthRatio,o=t.heightRatio,a=t.style,c=t.position;if(!t.toggle)return!1;var r=document.getElementsByClassName("minimap")[0];if("undefined"===typeof r)return!1;var l=document.getElementsByClassName("minimap-overlay")[0],d=document.getElementsByClassName("minimap-treeview")[0],m=this.scale();console.log(m);var u,h,p,g,v=document.documentElement.clientHeight*n,f=document.documentElement.clientWidth*i;h=document.documentElement.clientWidth*(1/m.x)*s,p=document.documentElement*(1/m.y)*o,r.clientHeight,m.y,r.clientWidth,m.x,g={"-webkit-transform":u="scale3d("+m.x+","+m.y+",1)","-moz-transform":u,"-ms-transform":u,"-o-transform":u,transforn:u,width:h+"px",height:p+"px",margin:"0px",padding:"0px"},Object.assign(r.style,this._mergeStyles(g,a)),Object.assign(l.style,{height:p+"px",width:"475px"});var y={height:document.documentElement.clientHeight+"px"};y[c]="5px",Object.assign(d.style,this._mergeStyles(y,a)),this._miniRegion(e)}},{key:"onScrollHandler",value:function(){var e=document.getElementsByClassName("minimap")[0];if("undefined"===typeof e)return!1;var t=document.getElementsByClassName("miniregion")[0],n=this.props.offsetHeightRatio;e=e.getBoundingClientRect();var i=this.scale(),s=window.innerHeight*n,o=e.top*i.y,a=window.pageYOffset*i.y,c=t.offsetHeight,r=e.offsetHeight*i.y+o;a+c+s<o||a>r?Object.assign(t.style,{display:"none"}):Object.assign(t.style,{top:a+s-o+"px",display:"block"})}},{key:"onClickHandler",value:function(e){this._scrollTop(e),this.setState({mousedown:!1})}},{key:"onMouseMoveHandler",value:function(e){if(!this.state.mousedown)return this.setState({mousedown:!1}),!1;this._scrollTop(e)}},{key:"onMouseDownHandler",value:function(e){this.setState({mousedown:!0});var t=document.getElementsByClassName("miniregion")[0],n=document.getElementsByClassName("minimap")[0];this.addClass(t,"dragging"),this.addClass(n,"noselect")}},{key:"onMouseUpHandler",value:function(e){var t=document.getElementsByClassName("miniregion")[0],n=document.getElementsByClassName("minimap")[0];this.removeClass(t,"dragging"),this.removeClass(n,"noselect"),this.setState({mousedown:!1})}},{key:"scale",value:function(){var e=this.props,t=(e.widthRatio,e.heightRatio,document.getElementsByClassName("minimap")[0]),n=document.getElementById(this.props.rootId);if("undefined"===typeof t)return!1;if("undefined"===typeof n)return!1;if(t.offsetHeight<=7e3){return{x:document.getElementById(this.props.rootId).clientWidth/t.clientWidth*.07,y:document.getElementById(this.props.rootId).clientHeight/t.clientHeight*.1}}return{x:document.documentElement.clientWidth/t.clientWidth*.08,y:document.documentElement.clientHeight/t.clientHeight*.95}}},{key:"onScrollChecker",value:function(e){return document.getElementById(e).scrollHeight>document.getElementById(e).clientHeight}},{key:"_mergeStyles",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Object.assign.apply(Object,[{}].concat(t))}},{key:"_miniRegion",value:function(){var e=this.props,t=e.offsetHeightRatio,n=e.offsetWidthRatio,i=e.position,s=e.style,o=document.getElementsByClassName("minimap")[0];if("undefined"===typeof o)return!1;var a=o.getBoundingClientRect(),c=this.scale(),r=a.top*c.y,l=document.documentElement.clientWidth*n,d={width:document.getElementsByClassName("minimap-treeview")[0].clientWidth+5+"px",height:window.innerHeight*c.y+"px",margin:"0px",top:window.pageYOffset*c.y+document.documentElement.clientHeight*t-r+"px",display:"block"};d[i]=l+"px",Object.assign(document.getElementsByClassName("miniregion")[0].style,this._mergeStyles(d,s))}},{key:"_scrollTop",value:function(e){var t=this.props,n=t.offsetHeightRatio,i=t.toggle,s=t.smoothScrollDelay,o=t.smoothScroll;if(!i)return!1;var a=document.getElementsByClassName("minimap")[0].getBoundingClientRect(),c=this.scale(),r=document.documentElement.clientHeight*n,l=a.top*c.y,d=document.getElementsByClassName("miniregion")[0].offsetHeight,m=(e.clientY-d/2-r+l)/c.y;if("click"===e.type&&o){var u=window.pageYOffset,h=document.getElementsByClassName("minimap")[0].offsetHeight,p=(m=Math.max(m,Math.min(m,h)))>u,g=s,v=Math.abs(u-m),f=g/v,y=1,b=4;f>=4?b=parseInt(y,15):y=f>=1?4*parseInt(f,15):parseInt(4/f,15);var j=u,A=parseInt(v/y,8),E=window.setInterval((function(){j+=p?y:-y,--A<=0&&(clearInterval(E),j=m),console.log(j),window.scrollTo(0,j)}),b)}else window.scrollTo(0,m);e.stopPropagation()}},{key:"addClass",value:function(e,t){e.className?e.classList.add(t):this.hasClass(e,t)||(e.className+=" "+t)}},{key:"hasClass",value:function(e,t){return e.classList?e.classList.contains(t):!!e.className.match(new RegExp("(\\b"+t+"(\\b)"))}},{key:"removeClass",value:function(e,t){if(e.classList)e.classList.remove(t);else if(this.hasClass(e,t)){var n=new RegExp("(\\b"+t+"(\\b)");e.className=e.className.replace(n," ")}}},{key:"render",value:function(){return Object(f.jsx)("div",{})}}]),n}(i.Component));j.defaultProps={heightRatio:.95,widthRatio:.05,offsetHeightRatio:.01,offsetWidthRatio:.002,position:"right",smoothScroll:!0,smoothScrollDelay:200,toggle:!0};var A=j,E=function(e){var t=e.contentToHighlight,n=Object(i.useState)(!1),s=Object(v.a)(n,2),o=s[0],a=s[1];return Object(i.useEffect)((function(){window.addEventListener("scroll",(function(){console.log("scrolling start"),a(!o)}),!1),window.addEventListener("scroll",Object(b.debounce)((function(){console.log("scrolling stopped"),a(!1)}),5e3))}),[]),Object(f.jsx)("div",{children:o&&Object(f.jsx)("div",{className:"minimap-container",children:Object(f.jsx)(A,{rootId:"root",position:"right",smoothScroll:!0,smoothScrollDelay:200,toggle:!0,contentToHighlight:t})})})},C=(n(36),function(){var e=[];e.push('here<div style="background-color: green;">Green text goes here</div>here');var t=Object(u.f)(),n=Object(i.useState)([]),s=Object(v.a)(n,2),o=s[0],a=s[1],c=Object(i.useState)(!1),r=Object(v.a)(c,2),l=(r[0],r[1]),d=Object(i.useState)(),m=Object(v.a)(d,2),h=(m[0],m[1]),b=function(e){var t=e.query.pages;return Object.keys(t).map((function(e){return t[e].extract}))},j=function(){var e=Object(g.a)(p.a.mark((function e(){var n,i,s,o,c,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URLSearchParams(t.search),i=n.get("query"),console.log(n.get("query"),i),s="https://en.wikipedia.org/w/api.php?action=query&origin=*&prop=extracts&format=json&titles="+i,c=[],l(!0),e.prev=6,e.next=9,fetch(s);case 9:return o=e.sent,e.next=12,o.json();case 12:r=e.sent,c=b(r),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(6),h(e.t0);case 19:return e.prev=19,l(!1),e.finish(19);case 22:a(c);case 23:case"end":return e.stop()}}),e,null,[[6,16,19,22]])})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){j()}),[]),Object(f.jsx)("div",{children:Object(f.jsxs)("div",{children:[Object(f.jsx)(y,{contents:o}),Object(f.jsx)(E,{contentToHighlight:e})]})})}),w=(n(41),function(){return Object(f.jsx)(s.a.Fragment,{children:Object(f.jsxs)("div",{children:[Object(f.jsx)("h3",{children:"Home Page of Mettle Works (Under Progress)"}),Object(f.jsxs)("h4",{children:["Click ",Object(f.jsx)(m.b,{to:"/details?query=seattle",children:"here"})," to redirect to Details page"]})]})})}),x=function(){return Object(f.jsxs)(m.a,{children:[Object(f.jsx)(u.c,{children:Object(f.jsx)(u.a,{exact:!0,path:"/",component:w})}),Object(f.jsx)(u.c,{children:Object(f.jsx)(u.a,{exact:!0,path:"/details",component:C})})]})},H=(n(42),n(43),function(){return Object(f.jsx)(s.a.Fragment,{children:Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("div",{className:"menu-bar",children:Object(f.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAG6ADAAQAAAABAAAAGwAAAADVx3bDAAABBUlEQVRIDe2UwWrCQBCGZzZptEHxoCBsoGLfRHyBPmT1FXwAvUuP9dRCExoaeiokGjPbPYjC5JCMB/Gwe9mZ4Z/Z5efbBXDLOXAvDiC/SNTvD/1OJ+B1Sf6ZZb9Wv+c9PisofzB4UehNWV2QktFavyZJ8s6b+GFUEm26Bt+4sH1+hLwovtvrnVLoQI3GZ62fCCAUzjnLDzaycHzZ7e9cPAUcEAXgzT1PXU1jF9FEo2gRZ/Gu6TA6KLP26bjlQkmeZ7GjUWKYTFujcTKeTCuoerIxFzVCaYo0/fhpRWNAswe4/m9EVFRpvbT8N/+NkOerKgwfL3eVRWjRt+8slXU5tXPg1g78Aw5rSQg3SrIBAAAAAElFTkSuQmCC",alt:"menu",height:"36px",width:"36px"})}),Object(f.jsx)("div",{className:"icon-brand",children:"MettleWorks"})]})})}),O=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(H,{}),Object(f.jsx)(x,{})]})}}]),n}(i.Component),N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),i(e),s(e),o(e),a(e)}))};a.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(O,{})}),document.getElementById("root")),N()}},[[44,1,2]]]);
//# sourceMappingURL=main.4abdc42a.chunk.js.map