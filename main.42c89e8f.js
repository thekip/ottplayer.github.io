webpackJsonp([0],{117:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),a=n.n(r),i=n(306),s=n.n(i),o=n(172),c=(n.n(o),n(121));s.a.render(a.a.createElement(c.a,null),document.getElementById("root"))},119:function(e,t,n){"use strict";function r(e){return{chId:+e.ch_id,name:e.name,startTime:e.time,endTime:e.time_to,duration:+e.duration,descr:e.descr}}function a(e,t){return i.b(this,void 0,void 0,function(){var n,a;return i.c(this,function(i){return n=[],a=t.map(function(t){return window.fetch(e+"channel/"+t).then(function(e){return e.json()}).then(function(e){return Object.keys(e).forEach(function(t){return n.push(r(e[t]))})})}),[2,Promise.all(a).then(function(){return n})]})})}t.a=a;var i=n(1)},120:function(e,t,n){"use strict";function r(e){return window.fetch("http://"+e+"/ottplayer/playlist.m3u").then(function(e){return e.text()}).then(function(e){var t=(new a.a).parse(e);if(t.errors.length)throw new Error(t.errors[0]);return t.playlist})}t.a=r;var a=n(143)},121:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var r=n(1),a=n(0),i=n.n(a),s=n(7),o=n(53),c=n(155),u=n.n(c),l=n(135),p=n(139),h=n(140),f=n(146),d=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.a(t,e),t.prototype.render=function(){return i.a.createElement(s.a,{store:f.a},i.a.createElement(o.a,null,i.a.createElement("div",{className:u.a.appWrap},i.a.createElement(l.a,null),i.a.createElement("div",{className:u.a.container},i.a.createElement(o.b,null,i.a.createElement(o.c,{path:"/settings",component:p.a}),i.a.createElement(o.c,{path:"/:channelSlug*",component:h.a}))))))},t}(a.Component)},122:function(e,t,n){"use strict";function r(e){window.__onGCastApiAvailable=function(t){if(t){var n=cast.framework.CastContext.getInstance();n.setOptions({receiverApplicationId:chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID,autoJoinPolicy:chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED}),n.addEventListener(cast.framework.CastContextEventType.CAST_STATE_CHANGED,function(t){return e.dispatch(new a.b({state:t.castState}))}),n.addEventListener(cast.framework.CastContextEventType.SESSION_STATE_CHANGED,function(t){return e.dispatch(new a.c({state:t.sessionState}))})}}}t.a=r;var a=n(63)},123:function(e,t,n){"use strict";n.d(t,"a",function(){return y});var r=n(1),a=n(0),i=n.n(a),s=n(7),o=n(314),c=n.n(o),u=n(313),l=n.n(u),p=n(156),h=n.n(p),f=n(19),d=n.n(f),m=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.a(t,e),t.prototype.isConnected=function(){return"CONNECTED"===this.props.castState},t.prototype.requestCastSession=function(){cast.framework.CastContext.getInstance().requestSession()},t.prototype.render=function(){return i.a.createElement("button",{className:this.isConnected()?h.a.active:h.a.default,onClick:this.requestCastSession,title:"Cast to...",type:"button"},this.isConnected()?i.a.createElement(l.a,null):i.a.createElement(c.a,null))},r.f([d.a],t.prototype,"requestCastSession",null),t}(a.PureComponent),v=function(e){return{castState:e.casting.castState}},y=n.i(s.b)(v)(m)},124:function(e,t,n){"use strict";function r(e){var t=e.findIndex(s.a);return e.slice(t)}function a(e,t){return{entries:r(e.epg.entries[t.channelId])}}n.d(t,"a",function(){return c});var i=n(7),s=n(21),o=n(125),c=n.i(i.b)(a)(o.a)},125:function(e,t,n){"use strict";n.d(t,"a",function(){return m});var r=n(1),a=n(0),i=n.n(a),s=n(21),o=n(157),c=n.n(o),u=n(58),l=n(57),p=n(88),h=n.n(p),f=n(134),d=n(133),m=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.a(t,e),t.prototype.render=function(){return i.a.createElement("div",{className:c.a.host},i.a.createElement(h.a,{autoHide:!0},i.a.createElement("div",{className:c.a.entries},this.props.entries.map(function(e){return i.a.createElement("div",{className:n.i(s.a)(e)?c.a.entryActive:c.a.entry,key:e.startTime},i.a.createElement("div",{className:c.a.mainInfo},i.a.createElement("h5",{className:c.a.name},e.name),n.i(s.a)(e)&&i.a.createElement(u.a,{startTime:e.startTime,endTime:e.endTime}),!n.i(s.a)(e)&&i.a.createElement("div",{className:c.a.timing},i.a.createElement("div",{className:c.a.startTime},i.a.createElement(l.a,null,e.startTime)),i.a.createElement("div",{className:c.a.endTime},i.a.createElement(l.a,null,e.endTime)))),i.a.createElement("div",{className:c.a.sideInfo},i.a.createElement("span",{className:c.a.date},i.a.createElement(d.a,null,e.startTime)),i.a.createElement("span",{className:c.a.duration},i.a.createElement(f.a,null,e.duration))))}))))},t}(a.PureComponent)},126:function(e,t,n){"use strict";function r(e,t){return e.filter(function(e){return t.includes(e.id)})}n.d(t,"a",function(){return l});var a=n(7),i=n(62),s=n(35),o=n(127),c=function(e){return{favourites:r(e.playlist.channels,e.favourites),channels:e.playlist.channels,currentEpg:e.epg,listMode:e.uiPreferences.channelListMode}},u=function(e){return{onChangeListMode:function(t){e(new i.a({mode:t}))}}},l=n.i(s.a)(n.i(a.b)(c,u)(o.a))},127:function(e,t,n){"use strict";n.d(t,"a",function(){return h});var r=n(1),a=n(0),i=n.n(a),s=n(59),o=n(129),c=n(34),u=n(136),l=n(36),p=n(137),h=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.a(t,e),Object.defineProperty(t.prototype,"listMode",{get:function(){return this.props.listMode},enumerable:!0,configurable:!0}),t.prototype.getChannelsListElement=function(){var e={channels:this.props.channels,current:this.props.currentChannel,onChangeChannel:this.props.onChangeChannel,scrollbarController:this.scrollbarController};return this.listMode===l.a.grouped?i.a.createElement(o.a,r.e({},e)):this.listMode===l.a.favourites?0===this.props.favourites.length?i.a.createElement(p.a,null):i.a.createElement(c.a,r.e({},e,{channels:this.props.favourites})):i.a.createElement(c.a,r.e({},e))},t.prototype.render=function(){var e=this,t=i.a.createElement(u.a,{onSwitch:this.props.onChangeListMode,current:this.props.listMode});return i.a.createElement(s.a,{provideScrollbarCtrl:function(t){return e.scrollbarController=t},header:t,body:this.getChannelsListElement()})},t}(a.PureComponent)},128:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var r=n(1),a=n(0),i=n.n(a),s=n(7),o=n(21),c=n(57),u=n(58),l=n(158),p=n.n(l),h=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.a(t,e),t.prototype.getEpg=function(){var e=this.props.epg.find(o.a),t=this.props.epg.indexOf(e),n=null;return t+1<=this.props.epg.length&&(n=this.props.epg[t+1]),{current:e,next:n}},t.prototype.componentDidMount=function(){var e=this;this.timerId=window.setInterval(function(){e.setState({time:Date.now()})},5e3)},t.prototype.componentWillUnmount=function(){window.clearInterval(this.timerId)},t.prototype.render=function(){var e=this.getEpg();return i.a.createElement("div",{className:p.a.details},i.a.createElement("h5",{title:this.props.channel.name,className:p.a.name},this.props.channel.name),e.current&&i.a.createElement("div",{title:"\u0421\u0435\u0439\u0447\u0430\u0441: "+e.current.name,className:p.a.currentProgram},i.a.createElement("span",{className:p.a.time},i.a.createElement(c.a,null,e.current.startTime)),e.current.name),e.current&&i.a.createElement(u.a,{startTime:e.current.startTime,endTime:e.current.endTime}),e.next&&i.a.createElement("div",{title:"\u0414\u0430\u043b\u0435\u0435: "+e.next.name,className:p.a.nextProgram},i.a.createElement("span",{className:p.a.time},i.a.createElement(c.a,null,e.next.startTime)),e.next.name))},t}(a.PureComponent),f=function(e,t){return{epg:e.epg.entries[t.channel.id]||[]}},d=n.i(s.b)(f)(h)},129:function(e,t,n){"use strict";n.d(t,"a",function(){return f});var r=n(1),a=n(0),i=n.n(a),s=n(34),o=n(160),c=n.n(o),u=n(282),l=n.n(u),p=n(308),h=n.n(p),f=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.groups=[],t.state={expanded:{}},t}return r.a(t,e),t.prototype.componentWillMount=function(){this.prepareData(this.props.channels,this.props.current)},t.prototype.componentWillReceiveProps=function(e){this.prepareData(e.channels,e.current)},t.prototype.expandGroup=function(e){this.setState({expanded:r.e({},this.state.expanded,(t={},t[e.name]=!0,t))});var t},t.prototype.toggleGroup=function(e){this.setState({expanded:r.e({},this.state.expanded,(t={},t[e.name]=!this.state.expanded[e.name],t))});var t},t.prototype.isExpanded=function(e){return this.state.expanded[e.name]},t.prototype.prepareData=function(e,t){var n=this,r=l()(e,function(e){return e.groupTitle});this.groups=Object.keys(r).map(function(e){var a={name:e,channels:r[e]};return t&&a.channels.includes(t)&&n.expandGroup(a),a})},t.prototype.render=function(){var e=this;return i.a.createElement("div",{className:c.a.host},this.groups.map(function(t,n){return i.a.createElement("div",{className:e.isExpanded(t)?c.a.groupExpanded:c.a.groupCollapsed,key:n},i.a.createElement("div",{onClick:function(){return e.toggleGroup(t)},className:c.a.header},t.name,i.a.createElement("div",{className:c.a.arrowIcon},i.a.createElement(h.a,null))),i.a.createElement("div",{className:c.a.body},i.a.createElement(s.a,r.e({},e.props,{channels:t.channels}))))}))},t}(a.Component)},130:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var r=n(1),a=n(0),i=n.n(a),s=n(161),o=n.n(s),c=n(34),u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.a(t,e),t.prototype.handleCheckBoxChange=function(e){var t;t=this.isSelected(e)?this.props.selected.filter(function(t){return t!==e.id}):r.g(this.props.selected,[e.id]),this.props.onSelectionChange(t)},t.prototype.isSelected=function(e){return this.props.selected.includes(e.id)},t.prototype.getControl=function(){var e=this;return function(t){return i.a.createElement("div",{onClick:function(e){return e.stopPropagation()},className:o.a.checkbox},i.a.createElement("input",{defaultChecked:e.isSelected(t),type:"checkbox",id:"channel"+t.id,onChange:function(){return e.handleCheckBoxChange(t)}}),i.a.createElement("label",{htmlFor:"channel"+t.id},"Select"))}},t.prototype.render=function(){return i.a.createElement(c.a,r.e({},this.props,{control:this.getControl()}))},t}(a.PureComponent)},131:function(e,t,n){"use strict";function r(e){return{channels:e.playlist.channels,favourites:e.favourites}}function a(e,t){return{onSave:function(n){e(new p.a({favourites:n})),t.history.push("/")},onCancel:function(){return t.history.push("/")}}}n.d(t,"a",function(){return y});var i=n(1),s=n(19),o=n.n(s),c=n(0),u=n.n(c),l=n(7),p=n(60),h=n(130),f=n(35),d=n(59),m=n(132),v=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={selectedChannels:t.props.favourites,touched:!1},t}return i.a(t,e),t.prototype.handleSelectionChange=function(e){this.setState({selectedChannels:e,touched:!0})},t.prototype.render=function(){var e=this,t=u.a.createElement(m.a,{saveDisabled:!this.state.selectedChannels.length||!this.state.touched,onSave:function(){return e.props.onSave(e.state.selectedChannels)},onCancel:this.props.onCancel}),n=u.a.createElement(h.a,{channels:this.props.channels,selected:this.state.selectedChannels,onChangeChannel:this.props.onChangeChannel,onSelectionChange:this.handleSelectionChange});return u.a.createElement(d.a,{header:t,body:n})},i.f([o.a],t.prototype,"handleSelectionChange",null),t}(c.Component),y=n.i(f.a)(n.i(l.b)(r,a)(v))},132:function(e,t,n){"use strict";n.d(t,"a",function(){return h});var r=n(1),a=n(0),i=n.n(a),s=n(309),o=n.n(s),c=n(312),u=n.n(c),l=n(162),p=n.n(l),h=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.a(t,e),t.prototype.render=function(){return i.a.createElement("div",{className:p.a.saveBar},i.a.createElement("div",{className:p.a.btns},i.a.createElement("button",{className:p.a.btnSave,disabled:this.props.saveDisabled,title:"Save",onClick:this.props.onSave},i.a.createElement(o.a,null)),i.a.createElement("button",{className:p.a.btnCancel,title:"Cancel",onClick:this.props.onCancel},i.a.createElement(u.a,null))))},t}(a.PureComponent)},133:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var r=n(1),a=n(0),i=n.n(a),s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.a(t,e),t.prototype.format=function(e){return new Date(1e3*e).toLocaleDateString()},t.prototype.render=function(){return i.a.createElement("span",null,this.format(this.props.children))},t}(a.Component)},134:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var r=n(1),a=n(0),i=n.n(a),s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.a(t,e),t.prototype.format=function(e){var t=e/60;if(t<60)return t+" min";var n=Math.floor(t/60);return n+"h "+(t-60*n)+" min"},t.prototype.render=function(){return i.a.createElement("span",null,this.format(this.props.children))},t}(a.Component)},135:function(e,t,n){"use strict";n.d(t,"a",function(){return m});var r=n(1),a=n(0),i=n.n(a),s=n(163),o=n.n(s),c=n(310),u=n.n(c),l=n(19),p=n.n(l),h=n(101),f=n(123),d=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.a(t,e),t.prototype.goToSettings=function(){this.props.history.push("/settings")},t.prototype.render=function(){return i.a.createElement("header",{className:o.a.host},i.a.createElement("div",{className:o.a.channelsBtns}),i.a.createElement("div",{className:o.a.settingsBtns},i.a.createElement(f.a,null),i.a.createElement("button",{className:o.a.btn,onClick:this.goToSettings,title:"Settings",type:"button"},i.a.createElement(u.a,null))))},r.f([p.a],t.prototype,"goToSettings",null),t}(a.PureComponent),m=n.i(h.b)(d)},136:function(e,t,n){"use strict";n.d(t,"a",function(){return m});var r=n(1),a=n(0),i=n.n(a),s=n(89),o=n.n(s),c=n(307),u=n.n(c),l=n(311),p=n.n(l),h=n(36),f=n(164),d=n.n(f),m=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.options=[{btnTitle:"Show favourites",title:"Favourites",icon:i.a.createElement(o.a,null),type:h.a.favourites},{btnTitle:"Show all",title:"All",icon:i.a.createElement(u.a,null),type:h.a.all},{btnTitle:"Show by categories",title:"Categories",icon:i.a.createElement(p.a,null),type:h.a.grouped}],t}return r.a(t,e),t.prototype.isCurrent=function(e){return e.type===this.props.current},Object.defineProperty(t.prototype,"current",{get:function(){return this.options.find(this.isCurrent.bind(this))},enumerable:!0,configurable:!0}),t.prototype.render=function(){var e=this;return i.a.createElement("div",{className:d.a.listSwitcher},i.a.createElement("h3",{className:d.a.currentModeTitle},this.current.title),i.a.createElement("div",{className:d.a.options},this.options.map(function(t,n){return i.a.createElement("button",{className:e.isCurrent(t)?d.a.optionCurrent:d.a.option,key:n,onClick:function(){return e.props.onSwitch(t.type)},title:t.btnTitle},t.icon)})))},t}(a.PureComponent)},137:function(e,t,n){"use strict";n.d(t,"a",function(){return p});var r=n(1),a=n(0),i=n.n(a),s=n(53),o=n(89),c=n.n(o),u=n(165),l=n.n(u),p=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.a(t,e),t.prototype.render=function(){return i.a.createElement("div",{className:l.a.host},i.a.createElement("div",{className:l.a.noFavIcon},i.a.createElement(c.a,null)),i.a.createElement("div",{className:l.a.text},"Favorites are not set yet ",i.a.createElement("br",null),i.a.createElement(s.d,{className:l.a.action,to:"/edit-favourites"},"Set Now..")))},t}(a.PureComponent)},138:function(e,t,n){"use strict";function r(e){return{currentKey:e.settings.currentKey,castingSessionState:e.casting.sessionState}}n.d(t,"a",function(){return d});var a=n(1),i=n(0),s=n.n(i),o=n(141),c=n(166),u=n.n(c),l=n(124),p=n(7),h=n(35),f=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a.a(t,e),t.prototype.getStreamUrl=function(e){return(e&&e.stream||"").replace("{KEY}",this.props.currentKey)},t.prototype.componentWillReceiveProps=function(e){this.setMediaToCast(e.castingSessionState,e.currentChannel)},t.prototype.setMediaToCast=function(e,t){if(this.isCastingEnabled(e)&&t){var n=chrome.cast.media,r=cast.framework.CastContext.getInstance().getCurrentSession(),a=new n.MediaInfo(this.getStreamUrl(t),"application/x-mpegURL"),i=new n.LoadRequest(a);a.metadata=new n.GenericMediaMetadata,a.metadata.title=t.name,r.loadMedia(i)}},t.prototype.isCastingEnabled=function(e){return["SESSION_STARTED","SESSION_RESUMED"].includes(e)},t.prototype.render=function(){return s.a.createElement("div",{className:u.a.mainPanel},this.isCastingEnabled(this.props.castingSessionState)?null:s.a.createElement("div",{className:u.a.playerContainer},s.a.createElement(o.a,{src:this.getStreamUrl(this.props.currentChannel)})),this.props.currentChannel&&s.a.createElement(l.a,{channelId:this.props.currentChannel.id}))},t}(i.PureComponent),d=n.i(h.a)(n.i(p.b)(r)(f))},139:function(e,t,n){"use strict";function r(e){return e.settings}function a(e,t){return{onSubmit:function(n){e(new p.a({settings:n})),t.history.push("/")},onCancel:function(){return t.history.push("/")}}}n.d(t,"a",function(){return m});var i=n(1),s=n(19),o=n.n(s),c=n(0),u=n.n(c),l=n(7),p=n(61),h=n(168),f=n.n(h),d=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i.a(t,e),t.prototype.handleSubmit=function(e){e.preventDefault(),this.props.onSubmit({playlistUrl:this.playlistInput.value,currentKey:this.keyInput.value})},t.prototype.handleCancel=function(){this.props.onCancel()},t.prototype.render=function(){var e=this;return u.a.createElement("div",{className:f.a.host},u.a.createElement("h2",{className:f.a.title},"Settings"),u.a.createElement("form",{onSubmit:this.handleSubmit,className:f.a.gridForm},u.a.createElement("label",{className:f.a.blockField},u.a.createElement("input",{ref:function(t){return e.playlistInput=t},defaultValue:this.props.playlistUrl,type:"text",name:"playlist-url"}),u.a.createElement("span",{className:f.a.fieldLabel},"Playlist Url")),u.a.createElement("label",{className:f.a.blockField},u.a.createElement("input",{ref:function(t){return e.keyInput=t},defaultValue:this.props.currentKey,type:"text",name:"auth-key"}),u.a.createElement("span",{className:f.a.fieldLabel},"Key")),u.a.createElement("div",{className:f.a.formActions},u.a.createElement("button",{className:f.a.submitBtn,type:"submit"},"Save"),u.a.createElement("button",{className:f.a.cancelBtn,onClick:this.handleCancel,type:"button"},"Cancel"))))},i.f([o.a],t.prototype,"handleSubmit",null),i.f([o.a],t.prototype,"handleCancel",null),t}(c.PureComponent),m=n.i(l.b)(r,a)(d)},140:function(e,t,n){"use strict";function r(e){return{currentKey:e.settings.currentKey,playlistUrl:e.settings.playlistUrl}}function a(e){var t=this;return{onFetchData:function(n){return i.b(t,void 0,void 0,function(){return i.c(this,function(t){return e(new h.a({playlistUrl:n})),[2]})})},onUnmount:function(){e(new p.a)}}}n.d(t,"a",function(){return E});var i=n(1),s=n(0),o=n.n(s),c=n(7),u=n(101),l=n(53),p=n(20),h=n(37),f=n(126),d=n(131),m=n(138),v=n(170),y=n.n(v),g=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i.a(t,e),t.prototype.componentDidMount=function(){this.props.playlistUrl&&this.props.onFetchData(this.props.playlistUrl)},t.prototype.componentWillUnmount=function(){this.props.onUnmount()},t.prototype.render=function(){return o.a.createElement("div",{className:y.a.host},this.props.playlistUrl?null:o.a.createElement(u.a,{to:"/settings"}),o.a.createElement(l.b,null,o.a.createElement(l.c,{exact:!0,path:"/edit-favourites",component:d.a}),o.a.createElement(l.c,{path:this.props.match.path,component:f.a})),o.a.createElement(l.c,{path:this.props.match.path,component:m.a}))},t}(s.PureComponent),E=n.i(c.b)(r,a)(g)},141:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n(1),a=n(0),i=n.n(a),s=n(145),o=n(171),c=(n.n(o),function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.a(t,e),t.prototype.componentDidMount=function(){this.player=n.i(s.a)(this.refs.video,{autoplay:!0,fluid:!0,controls:!0}),this.props.src&&this.updateSrc(this.props.src)},t.prototype.componentWillUnmount=function(){this.player&&this.player.dispose()},t.prototype.componentWillReceiveProps=function(e){this.player&&e.src&&e.src!==this.props.src&&this.updateSrc(e.src)},t.prototype.updateSrc=function(e){this.player.ready(function(){this.src({src:e,type:"application/x-mpegURL"})})},t.prototype.shouldComponentUpdate=function(){return!1},t.prototype.render=function(){return i.a.createElement("div",{"data-vjs-player":!0,className:"video-js vjs-big-play-centered"},i.a.createElement("video",{ref:"video"}))},t}(a.Component))},142:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var r=n(1),a=n(154),i=function(e){function t(){var t=e.call(this,"OttPlayerDb")||this;return t.version(1).stores({epg:"++, *chId"}),t}return r.a(t,e),t}(a.a),s=new i},143:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(1),a=function(){function e(){this.errors=[],this.result=new o}return e.prototype.parse=function(e){return e?(e=e.trim(),i.check(e)?(e.match(/[^\r\n]+/g).forEach(this.parseLine.bind(this)),{errors:this.errors,playlist:this.result.getResult()}):this.throwError("Playlist file should starts from #EXTM3U tag")):this.throwError("no data specified")},e.prototype.throwError=function(e){return this.errors.push(e),{errors:this.errors,playlist:null}},e.prototype.parseLine=function(e,t){if(0===t&&i.check(e)){var n=this.mapKeyValue(i.parse(e));this.result.setGlobalData(n)}else if(s.check(e)){var r=this.mapKeyValue(s.parse(e));this.result.addChannel(r)}else this.result.setChannelStream(e)},e.prototype.mapKeyValue=function(e){return e.reduce(function(e,t){var n=t.key,r=t.value;return e[n]=r,e},{})},e}(),i=function(){function e(){}return e.check=function(e){return 0===e.indexOf("#EXTM3U")},e.parse=function(e){return e.match(/([a-z-]+)="(.+?)"/g).map(function(e){var t=r.d(e.replace(/"/g,"").split("="),2);return{key:t[0],value:t[1]}})},e}(),s=function(){function e(){}return e.check=function(e){return 0===e.indexOf("#EXTINF")},e.parse=function(e){var t=i.parse(e);return t.push({key:"channel-name",value:e.match(/,\s?(.+)/)[1]}),t},e}(),o=function(){function e(){this.data={urlEpg:null,urlLogo:null,keyRequired:null,channels:[]}}return e.prototype.getResult=function(){return this.data},e.prototype.setGlobalData=function(e){this.data.urlEpg=e["url-epg"],this.data.urlLogo=e["url-logo"]},e.prototype.addChannel=function(e){this.data.channels.push({id:+e["tvg-id"],name:e["channel-name"],logo:this.data.urlLogo+e["tvg-logo"],archive:"1"===e["tvg-rec"],groupTitle:e["group-title"],stream:null})},e.prototype.setChannelStream=function(e){this.data.keyRequired||(this.data.keyRequired=-1!==e.indexOf("{KEY}")),this.data.channels[this.data.channels.length-1].stream=e},e}()},144:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r=function(){function e(){}return e.create=function(e){return new a(e,window.localStorage)},e}(),a=function(){function e(e,t){this.key=e,this.storage=t}return e.prototype.get=function(e){var t=JSON.parse(this.storage.getItem(this.key));return this.lastValue=t,null===t?e:t},e.prototype.set=function(e){this.lastValue!==e&&(this.lastValue=e,this.storage.setItem(this.key,JSON.stringify(e)))},e.prototype.remove=function(){this.storage.removeItem(this.key)},e}()},145:function(e,t,n){"use strict";var r=n(115),a=n.n(r),i=n(357);n.n(i);t.a=a.a},146:function(e,t,n){"use strict";n.d(t,"a",function(){return N});var r=n(110),a=n(103),i=n(340),s=n.n(i),o=n(122),c=n(144),u=n(63),l=n(21),p=n(147),h=n(148),f=n(149),d=n(150),m=n(152),v=n.i(r.b)({playlist:h.a,favourites:p.a,settings:f.a,epg:l.b,uiPreferences:d.a,casting:u.a}),y=n.i(a.a)(),g=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||r.c,E=c.a.create("favourites"),b=c.a.create("settings"),C=c.a.create("ui-preferences"),_=c.a.create("epgLastUpdate"),S={favourites:E.get(),uiPreferences:C.get(),settings:b.get(),epg:{entries:{},lastUpdate:_.get()}},N=n.i(r.d)(v,S,g(n.i(r.e)(s.a,y)));y.run(m.a),N.subscribe(function(){var e=N.getState();E.set(e.favourites),b.set(e.settings),C.set(e.uiPreferences),_.set(e.epg.lastUpdate)}),n.i(o.a)(N)},147:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var r=n(6),a=n(60),i=[],s=n.i(r.d)([n.i(r.e)(a.a,function(e,t){return t.payload.favourites})],i)},148:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var r=n(6),a=n(37),i={urlEpg:null,urlLogo:null,channels:[]},s=n.i(r.d)([n.i(r.e)(a.b,function(e,t){return t.payload.playlist})],i)},149:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n(1),a=n(6),i=n(61),s={playlistUrl:"",currentKey:""},o=n.i(a.d)([n.i(a.e)(i.a,function(e,t){var n=t.payload;return r.e({},n.settings)})],s)},150:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n(1),a=n(6),i=n(62),s=n(36),o={channelListMode:s.a.grouped},c=n.i(a.d)([n.i(a.e)(i.a,function(e,t){var n=t.payload;return r.e({},e,{channelListMode:n.mode})})],o)},151:function(e,t,n){"use strict";function r(e){return!e||Date.now()-e>=1e3*d*60*60}function a(){var e,t,r;return c.c(this,function(a){switch(a.label){case 0:return[4,n.i(l.e)()];case 1:return e=a.sent(),t=e.playlist.channels.map(function(e){return e.id}),[4,n.i(l.f)(i,e.playlist.urlEpg,t)];case 2:return r=a.sent(),[4,n.i(l.b)(h.a.type)];case 3:return a.sent(),[4,n.i(l.g)(r)];case 4:return a.sent(),[3,0];case 5:return[2]}})}function i(e,t){var a,i;return c.c(this,function(s){switch(s.label){case 0:s.trys.push([0,,10,14]),s.label=1;case 1:return[4,n.i(l.e)()];case 2:return a=s.sent(),r(a.epg.lastUpdate)?[4,n.i(l.c)(p.a,e,t)]:[3,7];case 3:return i=s.sent(),[4,n.i(l.d)(new h.b({epg:i,finishTime:Date.now()}))];case 4:return s.sent(),[4,n.i(l.c)([f.a.epg,"clear"])];case 5:return s.sent(),[4,n.i(l.c)([f.a.epg,"bulkAdd"],i)];case 6:s.sent(),s.label=7;case 7:return[4,n.i(l.c)(u.b,36e5)];case 8:return s.sent(),[3,1];case 9:return[3,14];case 10:return[4,n.i(l.h)()];case 11:return s.sent()?[4,n.i(l.d)(new h.d({error:"Cancelled"}))]:[3,13];case 12:s.sent(),s.label=13;case 13:return[7];case 14:return[2]}})}function s(){var e,t;return c.c(this,function(i){switch(i.label){case 0:return[4,n.i(l.b)(h.c.type)];case 1:return i.sent(),[4,n.i(l.e)()];case 2:return e=i.sent(),r(e.epg.lastUpdate)?[3,5]:[4,n.i(l.c)([f.a.epg,"toArray"])];case 3:return t=i.sent(),[4,n.i(l.d)(new h.b({epg:t,finishTime:e.epg.lastUpdate}))];case 4:i.sent(),i.label=5;case 5:return[4,a()];case 6:return i.sent(),[3,0];case 7:return[2]}})}function o(){return c.c(this,function(e){switch(e.label){case 0:return[4,s()];case 1:return e.sent(),[2]}})}t.a=o;var c=n(1),u=n(103),l=n(32),p=n(119),h=n(20),f=n(142),d=6},152:function(e,t,n){"use strict";function r(){return a.c(this,function(e){switch(e.label){case 0:return[4,n.i(i.a)([n.i(s.a)(),n.i(o.a)()])];case 1:return e.sent(),[2]}})}t.a=r;var a=n(1),i=n(32),s=n(151),o=n(153)},153:function(e,t,n){"use strict";function r(){var e,t;return a.c(this,function(r){switch(r.label){case 0:return[4,n.i(i.b)(c.a.type)];case 1:return e=r.sent(),[4,n.i(i.c)(s.a,e.payload.playlistUrl)];case 2:return t=r.sent(),[4,n.i(i.d)(new c.b({playlist:t}))];case 3:return r.sent(),[4,n.i(i.d)(new o.c)];case 4:return r.sent(),[3,0];case 5:return[2]}})}t.a=r;var a=n(1),i=n(32),s=n(120),o=n(20),c=n(37)},155:function(e,t){e.exports={appWrap:"app__appWrap--UH-yP",container:"app__container--2xPNi"}},156:function(e,t){e.exports={default:"cast-button__default--Bu6K3",active:"cast-button__active--2cPnv"}},157:function(e,t){e.exports={host:"channel-epg__host--24usi",entry:"channel-epg__entry--20qZg",entryActive:"channel-epg__entryActive--3SLJQ",mainInfo:"channel-epg__mainInfo--1kcUU",name:"channel-epg__name--VaptA",timing:"channel-epg__timing--3ApOl",endTime:"channel-epg__endTime--1UADV",sideInfo:"channel-epg__sideInfo--2H_zS",date:"channel-epg__date--pMi80",startTime:"channel-epg__startTime--3Gkql",duration:"channel-epg__duration--3snaL"}},158:function(e,t){e.exports={details:"channels-detail__details--30vfY",name:"channels-detail__name--3_GWx",currentProgram:"channels-detail__currentProgram--2bPhR",nextProgram:"channels-detail__nextProgram--3V11S",time:"channels-detail__time--2Ge5U"}},159:function(e,t){e.exports={item:"channels-list__item--2HTnI",itemActive:"channels-list__itemActive--3wsKl",icon:"channels-list__icon--2xa6T"}},160:function(e,t){e.exports={groupCollapsed:"grouped-channels-list__groupCollapsed--2Y-7c",groupExpanded:"grouped-channels-list__groupExpanded--3b8ar",header:"grouped-channels-list__header--ojiGT",body:"grouped-channels-list__body--2sOkX",arrowIcon:"grouped-channels-list__arrowIcon--1WGmb"}},161:function(e,t){e.exports={checkbox:"selectable-channels-list__checkbox--ISE-J"}},162:function(e,t){e.exports={saveBar:"save-bar__saveBar--VoKOr",btns:"save-bar__btns--2yULT",btnSave:"save-bar__btnSave--31a-O",btnCancel:"save-bar__btnCancel--1K9wo"}},163:function(e,t){e.exports={host:"header__host--10_Ga",btn:"header__btn--2atgb",settingsBtns:"header__settingsBtns--3Kypt"}},164:function(e,t){e.exports={listSwitcher:"list-switcher__listSwitcher--3eRsU",currentModeTitle:"list-switcher__currentModeTitle--24MKV",options:"list-switcher__options--1ZD-2",option:"list-switcher__option--3AHrS",optionCurrent:"list-switcher__optionCurrent--1hhda"}},165:function(e,t){e.exports={host:"no-favourites__host--36nM8",noFavIcon:"no-favourites__noFavIcon--1H2f3",text:"no-favourites__text--Of-mo"}},166:function(e,t){e.exports={mainPanel:"player-area__mainPanel--2sT_T",playerContainer:"player-area__playerContainer--2W2t-"}},167:function(e,t){e.exports={host:"progress-bar__host--1_cqD",bar:"progress-bar__bar--c0k7T",inner:"progress-bar__inner--2d7G2"}},168:function(e,t){e.exports={host:"settings__host--2VOZe",title:"settings__title--5c6zd",gridForm:"settings__gridForm--2WOdT",blockField:"settings__blockField--2oiC2",formActions:"settings__formActions--27vk8",fieldLabel:"settings__fieldLabel--lgbII",submitBtn:"settings__submitBtn--16zHh",cancelBtn:"settings__cancelBtn--2V6mF"}},169:function(e,t){e.exports={host:"side-panel__host--1VsZL",header:"side-panel__header--eBJYe",body:"side-panel__body--8iJH8"}},170:function(e,t){e.exports={host:"tv-portal__host--1xRMV"}},171:function(e,t){e.exports={"video-player":"video-player__video-player--2wp8w","vjs-spinner-spin":"video-player__vjs-spinner-spin--2SzGG","vjs-spinner-fade":"video-player__vjs-spinner-fade--3fvQZ"}},172:function(e,t){},20:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"d",function(){return i}),n.d(t,"c",function(){return s}),n.d(t,"a",function(){return o});var r=n(6),a=n.i(r.a)("[EPG] Receive epg",n.i(r.b)()),i=n.i(r.a)("[EPG] Failed load channel",n.i(r.b)()),s=n.i(r.a)("[EPG] Get epg"),o=n.i(r.a)("[EPG] Stop sync channel")},21:function(e,t,n){"use strict";function r(e){var t=Date.now()/1e3;return e.startTime<=t&&e.endTime>=t}function a(e){return e.reduce(function(e,t){return e[t.chId]?e[t.chId].push(t):e[t.chId]=[t],e},{})}t.a=r,n.d(t,"b",function(){return u});var i=n(1),s=n(6),o=n(20),c={lastUpdate:null,entries:{}},u=n.i(s.d)([n.i(s.e)(o.b,function(e,t){var n=t.payload;return i.e({},e,{entries:a(n.epg),lastUpdate:n.finishTime})})],c)},34:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var r=n(1),a=n(0),i=n.n(a),s=n(128),o=n(159),c=n.n(o),u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.isInitiallyScrolled=!1,t}return r.a(t,e),t.prototype.isActive=function(e){return e===this.props.current},t.prototype.scrollToActiveChannel=function(){var e=this;!this.isInitiallyScrolled&&this.props.scrollbarController&&this.activeElementRef&&(this.isInitiallyScrolled=!0,setTimeout(function(){var t=e.props.scrollbarController.getValues(),n=t.scrollTop,r=t.clientHeight+t.scrollTop,a=e.activeElementRef.offsetTop;n<a&&r<a&&e.props.scrollbarController.scrollTop(a)}))},t.prototype.componentDidMount=function(){this.scrollToActiveChannel()},t.prototype.componentDidUpdate=function(){this.scrollToActiveChannel()},t.prototype.render=function(){var e=this;return i.a.createElement("div",{className:c.a.channelsList},this.props.channels.map(function(t){return i.a.createElement("div",{className:e.isActive(t)?c.a.itemActive:c.a.item,ref:function(n){return e.isActive(t)&&(e.activeElementRef=n)},onClick:function(){return e.props.onChangeChannel(t)},key:t.id},i.a.createElement("div",{className:c.a.icon},e.props.control&&e.props.control(t),i.a.createElement("img",{src:t.logo,alt:""})),i.a.createElement(s.a,{channel:t}))}))},t}(a.PureComponent)},35:function(e,t,n){"use strict";function r(e){return e.displayName||e.name||"Component"}n.d(t,"a",function(){return c});var a=n(1),i=n(0),s=n.n(i),o=n(7),c=function(e){function t(e){return{channels:e.playlist.channels}}var c=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return a.a(n,t),n.prototype.getCurrentChannel=function(e,t){if(!e.length||!t)return null;var n=a.d(t.match(/^[^-]+/),1),r=n[0];return r?e.find(function(e){return e.id===+r}):null},n.prototype.getChannelSlug=function(e){return e.id},n.prototype.render=function(){var t=this,n=a.e({currentChannel:this.getCurrentChannel(this.props.channels,this.props.match.params.channelSlug),onChangeChannel:function(e){return t.props.history.push("/"+t.getChannelSlug(e))}},this.props);return s.a.createElement(e,a.e({},n))},n.displayName="WithChannelNavigation("+r(e)+")",n}(i.PureComponent);return n.i(o.b)(t)(c)}},36:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r;!function(e){e[e.favourites=1]="favourites",e[e.all=2]="all",e[e.grouped=3]="grouped"}(r||(r={}))},365:function(e,t){},366:function(e,t,n){e.exports=n(117)},37:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return i});var r=n(6),a=n.i(r.a)("[Playlist] Request",n.i(r.b)()),i=n.i(r.a)("[Playlist] Receive",n.i(r.b)());n.i(r.c)({RequestPlaylist:a,ReceivePlaylist:i})},57:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var r=n(1),a=n(0),i=n.n(a),s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.a(t,e),t.prototype.format=function(e){return new Date(1e3*e).toTimeString().split(":").slice(0,2).join(":")},t.prototype.render=function(){return i.a.createElement("span",null,this.format(this.props.children))},t}(a.Component)},58:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n(1),a=n(0),i=n.n(a),s=n(167),o=n.n(s),c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.oldValue=null,t}return r.a(t,e),t.prototype.componentDidMount=function(){this.watch()},t.prototype.watch=function(){var e=this;if(!this.isUnmounted){this.value-this.oldValue>5&&this.forceUpdate(),this.value<100&&setTimeout(function(){return requestAnimationFrame(e.watch.bind(e))},500)}},t.prototype.componentWillUnmount=function(){this.isUnmounted=!0},Object.defineProperty(t.prototype,"value",{get:function(){var e=this.props.endTime-this.props.startTime,t=Math.floor(Date.now()/1e3)-this.props.startTime,n=Math.round(t/e*100);return n>100?100:n},enumerable:!0,configurable:!0}),t.prototype.render=function(){return this.oldValue=this.value,i.a.createElement("div",{className:o.a.host},i.a.createElement("div",{className:o.a.bar},i.a.createElement("div",{className:o.a.inner,style:{width:this.value+"%"}})))},t}(a.Component)},59:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var r=n(1),a=n(0),i=n.n(a),s=n(169),o=n.n(s),c=n(88),u=n.n(c),l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.a(t,e),t.prototype.render=function(){return i.a.createElement("div",{className:o.a.host},i.a.createElement("div",{className:o.a.header},this.props.header),i.a.createElement("div",{className:o.a.body},i.a.createElement(u.a,{autoHide:!0,ref:this.props.provideScrollbarCtrl},this.props.body)))},t}(a.PureComponent)},60:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(6),a=n.i(r.a)("[Favourites] Save",n.i(r.b)());n.i(r.c)({SaveFavourites:a})},61:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(6),a=n.i(r.a)("[Settings] Change",n.i(r.b)());n.i(r.c)({ChangeSettings:a})},62:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(6),a=n.i(r.a)("[UI] Set channel list mode",n.i(r.b)());n.i(r.c)({SetChannelsListMode:a})},63:function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"c",function(){return s}),n.d(t,"a",function(){return c});var r=n(1),a=n(6),i=n.i(a.a)("[Casting] Cast state changed",n.i(a.b)()),s=n.i(a.a)("[Casting] Session state changed",n.i(a.b)()),o={castState:null,sessionState:null},c=n.i(a.d)([n.i(a.e)(s,function(e,t){var n=t.payload;return r.e({},e,{sessionState:n.state})}),n.i(a.e)(i,function(e,t){var n=t.payload;return r.e({},e,{castState:n.state})})],o)}},[366]);
//# sourceMappingURL=main.42c89e8f.js.map