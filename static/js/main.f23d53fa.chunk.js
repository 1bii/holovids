(this.webpackJsonpholovids=this.webpackJsonpholovids||[]).push([[0],{16:function(e,t,i){},17:function(e,t,i){},20:function(e,t,i){},22:function(e,t,i){},23:function(e,t,i){"use strict";i.r(t);var n=i(1),r=i.n(n),o=i(11),u=i.n(o),a=(i(16),i(17),i(10)),p=i(2),s=i.n(p),d=i(8),c=i(3),l=i(4),g=i(6),h=i(5),j={gura:{id:"UCoSrY_IQQVpmIRZ9Xf-y93g",group:"en"},calli:{id:"UCL_qhgtOy0dy1Agp8vkySQg",group:"en"},kiara:{id:"UCHsx4Hqa-1ORjQTh9TYDhww",group:"en"},ina:{id:"UCMwGHR0BTZuLsmjY_NT5Pwg",group:"en"},ame:{id:"UCyl1z3jo3XHR1riLFKG5UAg",group:"en"},irys:{id:"UC8rcEBzJSleTkf_-agPM20g",group:"en"},miko:{id:"UC-hM6YJuNYVAmUWxeIr9FeA",group:"jp0"},suisei:{id:"UC5CwaMl1eIgY8h02uZw7u8A",group:"jp0"},sora:{id:"UCp6993wxpyDPHUpavwDFqgg",group:"jp0"},roboco:{id:"UCDqI2jOz0weumE8s7paEk6g",group:"jp0"},fubuki:{id:"UCdn5BQ06XqgXoAxIhbqw5Rg",group:"jp1"},haachama:{id:"UC1CfXB_kRs3C-zaeTG3oGyg",group:"jp1"},matsuri:{id:"UCQ0UDLQCjY0rmuxCDE38FGg",group:"jp1"},mel:{id:"UCD8HOxPs4Xvsm8H0ZxXGiBw",group:"jp1"},aki:{id:"UCFTLzh12_nrtzqBPsTCqenA",group:"jp1"},aqua:{id:"UC1opHUrw8rvnsadT-iGp7Cg",group:"jp2"},subaru:{id:"UCvzGlP9oQwU--Y0r9id_jnA",group:"jp2"},ayame:{id:"UC7fk0CB07ly8oSl0aqKkqFg",group:"jp2"},shion:{id:"UCXTpFs_3PqI41qX2d9tL2Rw",group:"jp2"},choco:{id:"UC1suqwovbL1kzsoaZgFZLKg",group:"jp2"},pekora:{id:"UC1DCedRgGHBdm81E1llLhOQ",group:"jp3"},marine:{id:"UCCzUftO8KOVkV4wQG1vkUvg",group:"jp3"},rushia:{id:"UCl_gCybOJRIgOXw6Qb4qJzQ",group:"jp3"},noel:{id:"UCdyqAaZDKHXg4Ahi7VENThQ",group:"jp3"},flare:{id:"UCvInZx9h3jC2JzsIzoOebWg",group:"jp3"},coco:{id:"UCS9uQI-jC3DE0L4IpXyvr6w",group:"jp4"},watame:{id:"UCqm3BQLlJfvkTsX_hvm0UmA",group:"jp4"},kanata:{id:"UCZlDXzGoo7d44bwdNObFacg",group:"jp4"},towa:{id:"UC1uv2Oq6kNxgATlCiez59hw",group:"jp4"},luna:{id:"UCa9Y57gfeY0Zro_noHRVrnw",group:"jp4"},botan:{id:"UCUKD-uaobj9jiqB-VXt71mA",group:"jp5"},polka:{id:"UCK9V2B22uJYu3N7eR_BT9QA",group:"jp5"},lamy:{id:"UCFKOVgVbGmX65RxO3EtH3iw",group:"jp5"},nene:{id:"UCAWSyEs_Io8MtpY3m-zqILA",group:"jp5"},okayu:{id:"UCvaTdHTWBGv3MKj3KVqJVCw",group:"gamer"},korone:{id:"UChAnqc_AY5_I3Px5dig3X1Q",group:"gamer"},mio:{id:"UCp-5t9SrOQwXMU7iIjQfARg",group:"gamer"},moona:{id:"UCP0BspO_AMEe3aQqqpo89Dg",group:"id1"},risu:{id:"UCOyYb1c43VlX9rc_lT6NKQw",group:"id1"},iofi:{id:"UCAoy6rzhSf4ydcYjJw3WoVg",group:"id1"},ollie:{id:"UCYz_5n-uDuChHtLo7My1HnQ",group:"id2"},reine:{id:"UChgTyjG-pdNvxxhdsXfHQ5Q",group:"id2"},anya:{id:"UC727SQYUvx5pDDGQpTICNWg",group:"id2"},azki:{id:"UC0TXe_LYZ4scaW2XMyi5_kw",group:"music"}},v=["song","sing","\u6b4c","\u66f2","MV","original","cover","karaoke"],f=i(9),C=i.n(f),U=(i(20),i(0)),b=function(e){Object(g.a)(i,e);var t=Object(h.a)(i);function i(){return Object(c.a)(this,i),t.apply(this,arguments)}return Object(l.a)(i,[{key:"imageUrl",get:function(){var e,t,i,n=this.props.obj.thumbnails;return(null===(e=n.high)||void 0===e?void 0:e.url)||(null===(t=n.medium)||void 0===t?void 0:t.url)||(null===(i=n.default)||void 0===i?void 0:i.url)}},{key:"title",get:function(){return this.props.obj.title}},{key:"openLink",value:function(){var e="https://www.youtube.com/watch?v=".concat(this.props.obj.videoId);window.open(e,"_blank")}},{key:"render",value:function(){var e=this;return Object(U.jsxs)("div",{className:"video-container",onClick:function(){return e.openLink()},children:[Object(U.jsx)("img",{className:"video",src:this.imageUrl,alt:this.title,width:"500",height:"600"}),Object(U.jsx)("div",{className:"title",children:this.title})]})}}]),i}(r.a.Component),m=(i(22),function(e){Object(g.a)(i,e);var t=Object(h.a)(i);function i(e){var n;return Object(c.a)(this,i),(n=t.call(this,e)).state={videos:[]},n}return Object(l.a)(i,[{key:"getRequestUrl",value:function(e){return"https://www.googleapis.com/youtube/v3/search?key=".concat("AIzaSyC07DKA5esMUe01Gukw5b5EMCRjtuGqDYc","&channelId=").concat(e,"&part=snippet,id&order=date&maxResults=").concat(100,"&type=video")}},{key:"getVideo",value:function(){var e=Object(d.a)(s.a.mark((function e(t){var i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i=localStorage.getItem(t))||"undefined"===i){e.next=3;break}return e.abrupt("return",JSON.parse(i));case 3:return e.next=5,this.fetchVideo(t);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"fetchVideo",value:function(){var e=Object(d.a)(s.a.mark((function e(t){var i,n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=j[t].id,n=this.getRequestUrl(i),e.next=4,fetch(n).then((function(e){return e.json()})).then((function(e){var t;return null===e||void 0===e||null===(t=e.items)||void 0===t?void 0:t.map((function(e){return{videoId:e.id.videoId,thumbnails:e.snippet.thumbnails,title:e.snippet.title,description:e.snippet.description,publishedAt:C()(e.snippet.publishedAt)}}))}));case 4:return r=e.sent,localStorage.setItem(t,JSON.stringify(r)),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getAllVideos",value:function(){var e=this,t=Object.keys(j);Promise.all(t.map((function(t){return e.getVideo(t)}))).then((function(t){var i=e.preprocessVideos(t.flatMap((function(t){return t?e.filterVideos(t):[]})));e.sortVideos(i),e.setState({videos:i}),console.log(i)}))}},{key:"sortVideos",value:function(e){e.sort((function(e,t){return t.publishedAt.diff(e.publishedAt)}))}},{key:"filterVideos",value:function(e){return e.filter((function(e){return e.videoId&&v.some((function(t){return e.title.toLowerCase().includes(t.toLowerCase())}))}))}},{key:"preprocessVideos",value:function(e){return e.map((function(e){return Object(a.a)(Object(a.a)({},e),{},{publishedAt:C()(e.publishedAt)})}))}},{key:"componentDidMount",value:function(){this.getAllVideos()}},{key:"render",value:function(){return Object(U.jsx)("div",{className:"video-wrapper",children:this.state.videos.map((function(e){return Object(U.jsx)(b,{obj:e})}))})}}]),i}(r.a.Component));var k=function(){return Object(U.jsx)("div",{className:"App",children:Object(U.jsx)(m,{})})},w=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,24)).then((function(t){var i=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,u=t.getTTFB;i(e),n(e),r(e),o(e),u(e)}))};u.a.render(Object(U.jsx)(r.a.StrictMode,{children:Object(U.jsx)(k,{})}),document.getElementById("root")),w()}},[[23,1,2]]]);
//# sourceMappingURL=main.f23d53fa.chunk.js.map