module.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=16)}([function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat["components/Button"]},function(t,e,r){t.exports=r(14)},function(t,e){t.exports=flarum.core.compat.Model},function(t,e){t.exports=flarum.core.compat["utils/DiscussionControls"]},function(t,e){t.exports=flarum.core.compat["components/DiscussionPage"]},function(t,e){t.exports=flarum.core.compat["components/Modal"]},function(t,e){t.exports=flarum.core.compat["components/PostStream"]},function(t,e){t.exports=flarum.core.compat["components/Search"]},function(t,e){t.exports=flarum.core.compat["utils/ItemList"]},function(t,e){t.exports=flarum.core.compat["helpers/highlight"]},function(t,e){t.exports=flarum.core.compat["components/EventPost"]},function(t,e){t.exports=flarum.core.compat["helpers/punctuateSeries"]},,function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,i=Object.create(o.prototype),a=new O(n||[]);return i._invoke=function(t,e,r){var n=l;return function(o,i){if(n===f)throw new Error("Generator is already running");if(n===h){if("throw"===o)throw i;return j()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var s=E(a,r);if(s){if(s===d)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=f;var c=u(t,e,r);if("normal"===c.type){if(n=r.done?h:p,c.arg===d)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=h,r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var l="suspendedStart",p="suspendedYield",f="executing",h="completed",d={};function m(){}function g(){}function v(){}var y={};y[i]=function(){return this};var w=Object.getPrototypeOf,b=w&&w(w(S([])));b&&b!==r&&n.call(b,i)&&(y=b);var x=v.prototype=m.prototype=Object.create(y);function L(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function _(t){var e;this._invoke=function(r,o){function i(){return new Promise(function(e,i){!function e(r,o,i,a){var s=u(t[r],t,o);if("throw"!==s.type){var c=s.arg,l=c.value;return l&&"object"==typeof l&&n.call(l,"__await")?Promise.resolve(l.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(l).then(function(t){c.value=t,i(c)},function(t){return e("throw",t,i,a)})}a(s.arg)}(r,o,e,i)})}return e=e?e.then(i,i):i()}}function E(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,E(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=u(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function S(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:j}}function j(){return{value:e,done:!0}}return g.prototype=x.constructor=v,v.constructor=g,v[s]=g.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},L(_.prototype),_.prototype[a]=function(){return this},t.AsyncIterator=_,t.async=function(e,r,n,o){var i=new _(c(e,r,n,o));return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},L(x),x[s]="Generator",x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=S,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(N),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return s.type="throw",s.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),N(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;N(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:S(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}},function(t,e){t.exports=flarum.core.compat["models/Discussion"]},function(t,e,r){"use strict";r.r(e);var n=r(0),o=r(3),i=r.n(o),a=r(4),s=r.n(a),c=r(1),u=r.n(c),l=r(2),p=r.n(l);function f(t,e,r,n,o,i,a){try{var s=t[i](a),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,o)}function h(t){return function(){var e=this,r=arguments;return new Promise(function(n,o){var i=t.apply(e,r);function a(t){f(i,n,o,a,s,"next",t)}function s(t){f(i,n,o,a,s,"throw",t)}a(void 0)})}}function d(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var g=r(5),v=r.n(g),y=r(6),w=r.n(y),b=r(7),x=r.n(b),L=(r(15),r(8)),_=r.n(L),E=r(9),P=r.n(E),N=r(10),O=r.n(N),S=function(){function t(t,e){this.results={},this.onSelect=t,this.ignore=e}var e=t.prototype;return e.search=function(t){var e=this;t=t.toLowerCase(),this.results[t]=[];var r={filter:{q:t},page:{limit:4}};return app.store.find("discussions",r).then(function(r){e.results[t]=r.filter(function(t){return t.id()!==e.ignore})})},e.view=function(t){var e=this;return t=t.toLowerCase(),[(this.results[t]||[]).map(function(r){return m("li",{className:"DiscussionSearchResult","data-index":"discussions"+r.id()},m("a",{onclick:function(){return e.onSelect(r)}},m("div",{className:"DiscussionSearchResult-title"},m("i",null,r.id())," ~ ",O()(r.title(),t))))})]},t}(),j=function(t){function e(){return t.apply(this,arguments)||this}d(e,t);var r=e.prototype;return r.view=function(){this.hasFocus=!0;var e=t.prototype.view.call(this);return e.attrs.className="MergeDiscussions-Search "+(this.value()&&"open")+" "+e.attrs.className.replace(/(focused|open)/g,""),e},r.sourceItems=function(){var t=new P.a;return t.add("discussions",new S(this.props.onSelect,this.props.ignore)),t},e}(_.a),D=function(t){function e(e){var r;return(r=t.call(this)||this).discussion=e,r.merging=[],r}d(e,t);var r=e.prototype;return r.init=function(){t.prototype.init.call(this),this.query=m.prop(""),this.results=[],this.preview=null,this.loadingPreview=!1},r.title=function(){return app.translator.trans("fof-merge-discussions.forum.modal.title")},r.className=function(){return"FoFMergeDiscussionsModal Modal--large"},r.content=function(){var t=this;return m("div",{className:"Modal-body"},m("div",{className:"Form"},m("div",{className:"Form-group"},j.component({onSelect:this.select.bind(this),ignore:this.discussion.id()})),m("div",{className:"Form-group MergeDiscussions-Discussions"},m("ul",null,this.merging.map(function(e){return m("li",null,m("i",{className:"fas fa-trash DeleteEntry-Button",onclick:function(){return t.remove(e)}})," ",m("a",{href:app.forum.attribute("baseUrl")+"/d/"+e.id(),target:"_blank"},m("i",null,e.id())," ~ ",e.title()))}))),m("div",{className:"Form-group MergeDiscussions-Preview"},u.a.component({className:"Button Button--danger",onclick:this.loadPreview.bind(this),loading:this.loadingPreview,disabled:!this.discussion||!this.merging.length,children:app.translator.trans("fof-merge-discussions.forum.modal.load_preview_button")}),this.preview&&m("div",{className:"MergeDiscussions-PostStream"},this.preview.render())),m("div",{className:"Form-group"},u.a.component({className:"Button Button--primary Button--block",type:"submit",onclick:this.submit.bind(this),loading:this.loading,disabled:!this.discussion||!this.merging.length,children:app.translator.trans("fof-merge-discussions.forum.modal.submit_button")}))))},r.select=function(t){t&&t.id()===this.discussion.id()||this.merging.includes(t)||this.merging.push(t)},r.remove=function(t){this.merging.splice(this.merging.indexOf(this.merging.filter(function(e){return e.id()===t.id()})[0]),1)},r.loadPreview=function(){var t=this;return this.loadingPreview=!0,app.request(this.getRequestData("GET")).then(function(e){var r=1;e.included&&e.included.map(app.store.pushObject.bind(app.store)),e.data.relationships.posts.data.map(function(t){return app.store.getById("posts",t.id)}).sort(function(t,e){return t.createdAt()-e.createdAt()}).forEach(function(t,n){t.number(r++),console.log(t.number()+" => "+app.store.getById("posts",t.id()).number()),e.data.relationships.posts.data[n]={type:"posts",id:t.id()}});var n=app.store.createRecord(e.data.type,e.data);n.payload=e,t.loadingPreview=!1;var o=n.posts();t.preview=new x.a({discussion:n,includedPosts:o}),m.lazyRedraw()}).catch(function(){return t.loadingPreview=!1})},r.submit=function(t){var e=this;return t.preventDefault(),this.loading=!0,app.request(this.getRequestData()).then(h(p.a.mark(function t(){return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(app.current instanceof v.a)){t.next=4;break}return t.next=3,app.current.refresh();case 3:app.current.stream.update();case 4:app.cache.discussionList&&e.merging.forEach(function(t){return app.cache.discussionList.removeDiscussion(t)}),m.redraw(),app.modal.close();case 7:case"end":return t.stop()}},t)}))).catch(function(){return e.loading=!1})},r.getRequestData=function(t){return void 0===t&&(t="POST"),{method:t,url:""+app.forum.attribute("apiUrl")+this.discussion.apiEndpoint()+"/merge",data:{ids:this.merging.map(function(t){return t.id()})},errorHandler:this.onerror.bind(this)}},e}(w.a),M=r(11),k=r.n(M),F=r(12),B=r.n(F),G=function(t){function e(){return t.apply(this,arguments)||this}d(e,t);var r=e.prototype;return r.icon=function(){return"fas fa-code-branch fa-flip-vertical"},r.descriptionKey=function(){return"fof-merge-discussions.forum.post.merged"},r.descriptionData=function(){var t=this.props.post.content();return Array.isArray(t.titles)&&(t.titles=B()(t.titles).join("")),t},e}(k.a);app.initializers.add("fof/merge-discussions",function(){app.store.models.discussions.prototype.canMerge=i.a.attribute("canMerge"),app.postComponents.discussionMerged=G,Object(n.extend)(s.a,"moderationControls",function(t,e){e.canMerge()&&t.add("fof-merge",u.a.component({icon:"fas fa-code-branch fa-flip-vertical",children:app.translator.trans("fof-merge-discussions.forum.discussion.merge"),onclick:function(){return app.modal.show(new D(e))}}))})})}]);
//# sourceMappingURL=forum.js.map