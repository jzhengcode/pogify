(this["webpackJsonpmichael-reeves-syncronized-player"]=this["webpackJsonpmichael-reeves-syncronized-player"]||[]).push([[0],{142:function(e,t,n){e.exports=n(267)},147:function(e,t,n){},168:function(e,t){},170:function(e,t){},181:function(e,t){},183:function(e,t){},209:function(e,t){},211:function(e,t){},212:function(e,t){},218:function(e,t){},220:function(e,t){},238:function(e,t){},240:function(e,t){},252:function(e,t){},255:function(e,t){},263:function(e,t,n){},266:function(e,t,n){},267:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(135),i=n.n(r),s=(n(147),n(21)),c=n(4),l=n(16),u=n(17),p=n(19),d=n(18),h=n(9),m=n.n(h),y=n(26),f=n(8),g=n.n(f),w=n(71),v=n.n(w),b="f15b994280f345438a06222ca529dc94";n(258).config();var k=window.location.origin+"/auth";function _(e){return S.apply(this,arguments)}function S(){return(S=Object(y.a)(m.a.mark((function e(t){var n,a,o,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(o in n={client_id:b,grant_type:"authorization_code",code:t,redirect_uri:k,code_verifier:window.sessionStorage.getItem("hashKey")},a=new URLSearchParams,n)a.append(o,n[o]);return e.next=5,g.a.post("https://accounts.spotify.com/api/token",a);case 5:return r=e.sent,window.sessionStorage.setItem("refresh_token",r.data.refresh_token),window.sessionStorage.setItem("expires_at",Date.now()+1e3*r.data.expires_in),window.sessionStorage.setItem("access_token",r.data.access_token),e.abrupt("return",r.data);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e){return O.apply(this,arguments)}function O(){return(O=Object(y.a)(m.a.mark((function e(t){var n,a,o,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(o in n={client_id:b,grant_type:"refresh_token",refresh_token:t},a=new URLSearchParams,n)a.append(o,n[o]);return e.next=5,g.a.post("https://accounts.spotify.com/api/token",a);case 5:return r=e.sent,window.sessionStorage.setItem("refresh_token",r.data.refresh_token),window.sessionStorage.setItem("expires_at",Date.now()+1e3*r.data.expires_in),window.sessionStorage.setItem("access_token",r.data.access_token),e.abrupt("return",r.data);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e){return C.apply(this,arguments)}function C(){return(C=Object(y.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return window.sessionStorage.setItem("redirectTo",t),e.next=3,x(128);case 3:n=e.sent,window.sessionStorage.setItem("hashKey",n[0]),window.sessionStorage.setItem("hashResult",n[1]),window.location.href="https://accounts.spotify.com/authorize?client_id=".concat(b,"&response_type=code&redirect_uri=").concat(encodeURIComponent(k),"&scope=streaming%20user-read-email%20user-read-private%20user-modify-playback-state&code_challenge_method=S256&code_challenge=").concat(n[1]);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return j.apply(this,arguments)}function j(){return(j=Object(y.a)(m.a.mark((function e(t){var n,a,o,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=new Uint8Array(t),window.crypto.getRandomValues(a),a=a.map((function(e){return n.charCodeAt(e%n.length)})),o=String.fromCharCode.apply(null,a),e.next=7,A(o);case 7:return r=e.sent,e.abrupt("return",[o,r]);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e){var t=(new TextEncoder).encode(e);return v.a.createHash("sha256").update(t).digest()}function P(e){return btoa(String.fromCharCode.apply(null,new Uint8Array(e))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function A(e){return D.apply(this,arguments)}function D(){return(D=Object(y.a)(m.a.mark((function e(t){var n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T(t);case 2:return n=e.sent,a=P(n),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}window.crypto2=v.a;var L=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=new URLSearchParams(window.location.search);t.has("code")&&_(t.get("code")).then((function(){e.props.history.replace("/session/".concat(window.sessionStorage.getItem("redirectTo")))}))}},{key:"render",value:function(){return o.a.createElement("div",null)}}]),n}(o.a.Component),R=n(42),U=n(43),z=function(e){return o.a.createElement("div",{style:{width:300,textAlign:"center",borderRadius:10,padding:30}},o.a.createElement("div",{style:{height:300,width:300,overflow:"hidden",borderRadius:10}},o.a.createElement("img",{src:e.coverArtURL,alt:"Cover art for ".concat(e.album)})),o.a.createElement("div",{style:{paddingBottom:10}},o.a.createElement("h3",null,e.title),e.artists.map((function(e){return e.name})).join(", ")," ",o.a.createElement("br",null),e.album),o.a.createElement("div",null,H(e.position),o.a.createElement("input",{style:{width:"70%"},type:"range",name:"position",id:"position",value:e.position,min:0,max:e.duration,readOnly:!0}),H(e.duration)),o.a.createElement("div",null,o.a.createElement(R.a,{icon:U.c}),o.a.createElement("input",{type:"range",name:"volume",id:"volume",value:e.volume,onChange:e.changeVolume,min:0,max:1,step:.01}),o.a.createElement(R.a,{icon:U.d})),o.a.createElement("div",{style:{cursor:"pointer"}},e.playing?o.a.createElement(R.a,{icon:U.a}):o.a.createElement(R.a,{icon:U.b})))};function H(e){var t=~~(e/3600),n=~~(e%3600/60),a=~~e%60,o="";return t>0&&(o+=t+":"+(n<10?"0":"")),o+=n+":"+(a<10?"0":""),o+=""+a}n(263);var N=function(e){return o.a.createElement("div",{style:{height:"100vh",width:"100vw",display:"flex",justifyContent:"center",alignItems:"center"}},o.a.createElement("div",{style:{background:"white",color:"#2C3A3A",padding:"2rem",borderRadius:"12.5px",boxShadow:"0px 3px 15px rgba(0,0,0,0.2)"}},e.children),o.a.createElement("p",{style:{position:"absolute",bottom:"0",left:"50%",transform:"translateX(-50%)",color:"white"}},"\xa9 ",o.a.createElement("a",{href:"https://www.pogify.net/",style:{color:"white"}},"Pogify")," 2020 | ",o.a.createElement(s.b,{to:"tos",style:{color:"white"}},"Terms of Service")," | ",o.a.createElement(s.b,{to:"privacy",style:{color:"white"}},"Privacy Policy")))},W=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={position:0,duration:0,connected:!1,uri:"",playing:!1,coverArtURL:"",title:"",artists:[],album:"",device_id:"",volume:.2,hostConnected:!1,connections:0,viewPlayer:!1,psoCounter:0},e.setHostEmitters=function(){g.a.get("/refresh"),e.refreshInterval=setInterval((function(){g.a.get("/refresh")}),18e5)},e.connect=function(){e.player.addListener("ready",(function(t){console.log(t),e.connectToPlayer(t.device_id),e.setHostEmitters(),console.log(window.sessionStorage.getItem("expires_at")),e.setState({device_id:t.device_id})})),e.player.addListener("not_ready",console.log),e.player.on("initialization_error",(function(e){var t=e.message;console.error("Failed to initialize",t)})),e.player.on("authentication_error",(function(e){var t=e.message;console.error("Failed to authenticate",t)})),e.player.on("account_error",(function(e){var t=e.message;console.error("Failed to validate Spotify account",t)})),e.player.on("playback_error",(function(e){var t=e.message;console.error("Failed to perform playback",t)})),e.player.connect()},e.initializePlayer=function(){e.player=new window.Spotify.Player({volume:.2,name:"Pogify Host",getOAuthToken:function(t){var n=window.sessionStorage.getItem("access_token"),a=window.sessionStorage.getItem("refresh_token"),o=window.sessionStorage.getItem("expires_at");if(Date.now()>o&&a)return E(a).then((function(n){e.setState({loggedIn:!0}),t(n.access_token)})).catch((function(t){(t.error_description="Refresh Token Revoked")&&(window.sessionStorage.removeItem("refresh_token"),window.sessionStorage.removeItem("access_token"),I(e.props.match.params.id))}));if(n)return e.setState({loggedIn:!0}),t(n);var r=window.sessionStorage.getItem("code");r?_(r).then((function(n){window.sessionStorage.removeItem("code"),console.log(n),e.setState({loggedIn:!0}),t(n.access_token)})):I(e.props.match.params.id)}}),e.player.on("player_state_changed",(function(t){console.log(t),e.state.psoCounter&&!t&&(e.props.socket.emit("HOST_DISCONNECT"),alert("Spotify disconnected. Check that you are connected to the 'Michael Reeves Player' on Spotify")),t&&(console.log("alksdfe",t),e.setState({playbackStateObj:t,position:t.position,psoCounter:e.state.psoCounter+1}))}))},e.connectToPlayer=function(t){return g.a.put("https://api.spotify.com/v1/me/player",{device_ids:[t||e.state.device_id],play:!1},{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(window.sessionStorage.getItem("access_token"))}}).then((function(){e.setState({connected:!0})}))},e.changeVolume=function(t){e.player.setVolume(t.target.value),e.setState({volume:t.target.value})},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){window.spotifyReady?this.initializePlayer():window.onSpotifyWebPlaybackSDKReady=this.initializePlayer}},{key:"componentDidUpdate",value:function(e,t){var n=this,a=t.playbackStateObj,o=t.psoCounter;if(1===this.state.psoCounter){var r=this.state.playbackStateObj,i=r.track_window.current_track.uri,s=r.position,c=r.paused;console.log(i),this.props.socket.emit("HOST_CONNECTED",i,s,!c)}else if(o!==this.state.psoCounter){var l=this.state.playbackStateObj,u=l.track_window.current_track.uri,p=l.position,d=l.paused;this.props.socket.emit("UPDATE",u,p,!d),g.a.post(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_SUB+"/pub",{timestamp:Date.now(),uri:u,position:p,playing:!d},{params:{id:"abc"}}),a.paused!==d&&(d?clearInterval(this.tickInterval):this.tickInterval=setInterval((function(){n.setState({position:n.state.position+1e3})}),1e3))}}},{key:"componentWillUnmount",value:function(){this.player.removeListener("ready"),this.props.socket.disconnect(),this.player.disconnect(),delete window.player}},{key:"render",value:function(){if(Date.now()>window.sessionStorage.getItem("expires_at"))return o.a.createElement(N,null,o.a.createElement("button",{onClick:this.connect},"Login with Spotify"));if(!this.state.playbackStateObj)return o.a.createElement(N,null,o.a.createElement("button",{onClick:this.connect},"Start Session"));var e=this.state.playbackStateObj,t=e.paused,n=e.duration,a=this.state.volume,r=this.state.position,i=this.state.playbackStateObj.track_window.current_track.album.images[0].url,s=this.state.playbackStateObj.track_window.current_track.album.name,c=this.state.playbackStateObj.track_window.current_track.artists,l=this.state.playbackStateObj.track_window.current_track.name;return o.a.createElement(o.a.Fragment,null,o.a.createElement(z,{position:r/1e3,duration:n/1e3,coverArtURL:i,album:s,title:l,artists:c,playing:!t,volume:a,changeVolume:this.changeVolume}),o.a.createElement("div",{style:{width:300,textAlign:"center",backgroundColor:"#424242",borderRadius:10,padding:30,marginTop:10}},"You are the host of this session. ",o.a.createElement("br",null),"Share the url below to listen with others:",o.a.createElement("div",{style:{margin:10}},o.a.createElement("input",{type:"text",readOnly:!0,value:window.location.href})),"Use Spotify as you usually would. ",o.a.createElement("br",null),"Your music is being played in this browser window. Don't close this window. ",o.a.createElement("br",null),this.state.connections," in this session."))}}]),n}(o.a.Component),V=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={hostConnected:!1,connected:!1,artists:[],position:0,uri:"",duration:0,volume:.2,playing:!1,coverArtURL:"#",title:"",album:"",connections:0},e.play=function(t,n){return console.log("play??",t,n),g.a.put("https://api.spotify.com/v1/me/player/play?device_id=".concat(e.state.device_id),{uris:[t],position_ms:n},{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(window.sessionStorage.getItem("access_token"))}})},e.setListenerListeners=function(){e.props.socket.on("HOST_DISCONNECT",(function(){e.player.pause(),alert("Host disconnected. Playback Paused")})),e.props.socket.once("INITIAL",(function(t){if(t){var n=t.uri,a=t.position,o=t.playing,r=t.when,i=o?a+Date.now()-r:a;console.log("intial",n,a,i,o,r),e.setState({uri:n,position:i,playing:o,hostConnected:!0,connected:!0})}else e.setState({connected:!0})})),e.props.socket.on("UPDATE",(function(t,n,a){console.log("update",t,n,a),e.setState({uri:t,position:n,playing:a,hostConnected:!0})})),e.props.socket.on("HOST_CONNECTED",(function(t,n,a){console.log("host_connected"),e.setState({uri:t,position:n,playing:a,hostConnected:!0})})),e.player.addListener("player_state_changed",(function(t){console.log("player_state_changed"),null!==t&&e.setState({pso:t})}))},e.connect=function(){console.log("once"),e.player.addListener("ready",(function(t){console.log(t),e.setListenerListeners(),e.connectToPlayer(t.device_id).then((function(){e.props.socket.emit("INITIAL")})),e.setState({device_id:t.device_id})})),e.player.on("player_state_changed",console.log),e.player.on("initialization_error",(function(e){var t=e.message;console.error("Failed to initialize",t)})),e.player.on("authentication_error",(function(e){var t=e.message;console.error("Failed to authenticate",t)})),e.player.on("account_error",(function(e){var t=e.message;console.error("Failed to validate Spotify account",t)})),e.player.on("playback_error",(function(e){var t=e.message;console.error("Failed to perform playback",t)})),e.player.connect().then(console.log),console.log("connect")},e.initializePlayer=function(){e.player=new window.Spotify.Player({volume:.2,name:"Pogify Listener",getOAuthToken:function(t){var n=window.sessionStorage.getItem("access_token"),a=window.sessionStorage.getItem("refresh_token"),o=window.sessionStorage.getItem("expires_at");if(Date.now()>o&&a)return E(a).then((function(e){t(e.access_token)})).catch((function(t){window.sessionStorage.removeItem("refresh_token"),window.sessionStorage.removeItem("access_token"),I(e.props.sessionId)}));if(n)return t(n);var r=window.sessionStorage.getItem("code");r?_(r).then((function(e){window.sessionStorage.removeItem("code"),console.log(e),t(e.access_token)})).catch((function(){I(e.props.sessionId)})):I(e.props.sessionId)}}),window.player=e.player,e.props.socket.on("CONNECTION_COUNT",(function(t){console.log(t,"connections"),e.setState({connections:t})}))},e.connectToPlayer=function(t){return g.a.put("https://api.spotify.com/v1/me/player",{device_ids:[t||e.state.device_id],play:!1},{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(window.sessionStorage.getItem("access_token"))}})},e.changeVolume=function(t){e.player.setVolume(t.target.value),e.setState({volume:t.target.value})},e}return Object(u.a)(n,[{key:"componentDidUpdate",value:function(){var e=Object(y.a)(m.a.mark((function e(t,n){var a=this;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.state.hostConnected||!this.state.pso){e.next=18;break}if(this.state.playing===!this.state.pso.paused){e.next=16;break}if(!this.state.playing){e.next=7;break}this.player.resume(),this.tick||(this.tick=setInterval((function(){a.setState({position:a.state.position+100})}),100)),e.next=16;break;case 7:return clearInterval(this.tick),delete this.tick,this.player.pause(),e.t0=this,e.next=13,this.player.getCurrentState();case 13:e.t1=e.sent,e.t2={pso:e.t1},e.t0.setState.call(e.t0,e.t2);case 16:Math.abs(this.state.position-n.position)>200&&this.player.seek(this.state.position),n.uri!==this.state.uri&&(console.log("setTrack",this.state.uri,this.state.position),this.play(this.state.uri,this.state.position));case 18:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.player&&this.player.disconnect()}},{key:"componentDidMount",value:function(){window.spotifyReady?this.initializePlayer():window.onSpotifyWebPlaybackSDKReady=this.initializePlayer}},{key:"render",value:function(){if(Date.now()>window.sessionStorage.getItem("expires_at"))return o.a.createElement(N,null,o.a.createElement("button",{onClick:this.connect},"Login with Spotify"));if(!this.state.connected)return o.a.createElement(N,null,o.a.createElement("button",{onClick:this.connect},"Join Session"));if(!this.state.hostConnected)return o.a.createElement(N,null,o.a.createElement("h2",null,"Waiting for Host...")," ",o.a.createElement("p",null,"Session Code: ",this.props.sessionId));if(!this.state.pso)return o.a.createElement(N,null,o.a.createElement("h2",null,"Pogify Disconnected")," ",o.a.createElement("p",null,"Return to home screen"));var e=this.state.pso,t=e.paused,n=e.duration,a=this.state.volume,r=this.state.position,i=this.state.pso.track_window.current_track.album.images[0].url,s=this.state.pso.track_window.current_track.album.name,c=this.state.pso.track_window.current_track.artists,l=this.state.pso.track_window.current_track.name;return o.a.createElement(N,null,o.a.createElement("div",null,o.a.createElement(z,{position:r/1e3,duration:n/1e3,coverArtURL:i,album:s,title:l,artists:c,playing:!t,volume:a,changeVolume:this.changeVolume}),o.a.createElement("div",{style:{width:300,textAlign:"center",borderRadius:10,padding:30,marginTop:10}},"You are listening to session ",this.props.sessionId,". ",o.a.createElement("br",null),"Playback is controlled by the host. ",o.a.createElement("br",null),"Pressing pause will pause playback locally only. On resume, playback will resyncronize with the host. ",o.a.createElement("br",null),this.state.connections," in this session.")))}}]),n}(o.a.Component),F=window.io,B=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={isHost:!1},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;console.log("room mount"),this.socket=F("/"+this.props.match.params.id),console.log("room mount"),this.socket.on("IS_HOST",(function(t){console.log("ishost",t),e.setState({isHost:t})})),this.socket.emit("IS_HOST")}},{key:"componentWillUnmount",value:function(){this.socket&&this.socket.disconnect()}},{key:"render",value:function(){return this.socket?o.a.createElement("div",{style:{display:"flex",justifyContent:"space-evenly",alignItems:"center",flexWrap:"wrap",height:"100vh"}},this.state.isHost?o.a.createElement(W,Object.assign({},this.props,{socket:this.socket})):o.a.createElement(V,{sessionId:this.props.match.params.id,socket:this.socket})):o.a.createElement(N,null,o.a.createElement("h2",null,"Loading..."))}}]),n}(o.a.Component),M=n(49),K=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={hosting:[]},a.create=a.create.bind(Object(M.a)(a)),a}return Object(u.a)(n,[{key:"create",value:function(){g.a.post("/create",this.state.session,{headers:{"Content-Type":"text/plain"}}).then((function(e){window.location.href="/session/".concat(e.data),console.log(e.data)})).catch(console.error)}},{key:"componentDidMount",value:function(){var e=this;g.a.get("/getSessions").then((function(t){e.setState({hosting:t.data})}))}},{key:"render",value:function(){return o.a.createElement(N,null,Boolean(this.state.hosting.length)&&o.a.createElement("div",null,"Your Current Listening Sessions:",o.a.createElement("ul",null,this.state.hosting.map((function(e){return o.a.createElement("li",{key:e},o.a.createElement(s.b,{to:"/session/".concat(e),style:{color:"unset"}},e))})))),o.a.createElement("button",{onClick:this.create},"Create New Listening Session"))}}]),n}(o.a.Component),Y=n(141),J=n(136);function G(){var e=Object(J.a)(["\n  width: calc(100% - 10px);\n  padding: 5px;\n  border-radius: 12px;\n  border-style: solid;\n  border-width: 0.5px;\n  border-color: rgb(44, 58, 58);\n  text-align: center;\n  transition: box-shadow 0.3s;\n\n  &:focus {\n    outline: none;\n    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24);\n  }\n"]);return G=function(){return e},e}var X=n(137).a.input(G()),$=function(){var e=o.a.useState(""),t=Object(Y.a)(e,2),n=t[0],a=t[1],r=Object(c.f)();return o.a.createElement(N,null,o.a.createElement("h2",{style:{marginTop:0}},"Enter Session Code"),o.a.createElement("form",{onSubmit:function(){r.push("/session/"+n)},style:{display:"inline"}},o.a.createElement("div",null,o.a.createElement(X,{type:"text",placeholder:"Code",onChange:function(e){return a(e.target.value)},style:{}})),o.a.createElement("div",null,o.a.createElement("button",{type:"submit",style:{width:"100%",margin:"auto",marginTop:"1rem"}},"Go"))))},q=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement(N,null,o.a.createElement("h1",{style:{textAlign:"center",fontSize:"5em",letterSpacing:"7px",margin:0,fontWeight:"bold"}},"POGIFY"),o.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},o.a.createElement(s.b,{to:"/session"},o.a.createElement("button",null,"I am a viewer")),o.a.createElement(s.b,{to:"/create"},o.a.createElement("button",{style:{marginLeft:10}},"I am a streamer"))))}}]),n}(o.a.Component);n(266);var Q=function(){return o.a.createElement(s.a,null,o.a.createElement(c.c,null,o.a.createElement(c.a,{path:"/",exact:!0,component:q}),o.a.createElement(c.a,{path:"/create",exact:!0,component:K}),o.a.createElement(c.a,{path:"/auth",exact:!0,component:L}),o.a.createElement(c.a,{path:"/session/:id",component:B}),o.a.createElement(c.a,{path:"/session",component:$,exact:!0}),o.a.createElement(c.a,{path:"/"},"404")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[142,1,2]]]);
//# sourceMappingURL=main.4f342444.chunk.js.map