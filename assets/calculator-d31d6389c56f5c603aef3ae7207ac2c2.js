"use strict"
define("calculator/adapters/application",["exports","ember-data"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a=t.default.JSONAPIAdapter.extend({host:"https://cors-anywhere.herokuapp.com/https://s3.amazonaws.com/gavant-public"})
e.default=a}),define("calculator/adapters/theme",["exports","ember-data"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a=t.default.JSONAPIAdapter.extend({host:"https://cors-anywhere.herokuapp.com/https://s3.amazonaws.com/gavant-public"})
e.default=a}),define("calculator/app",["exports","calculator/resolver","ember-load-initializers","calculator/config/environment"],function(e,t,a,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var o=Ember.Application.extend({modulePrefix:n.default.modulePrefix,podModulePrefix:n.default.podModulePrefix,Resolver:t.default});(0,a.default)(o,n.default.modulePrefix)
var l=o
e.default=l}),define("calculator/components/calc",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Component.extend({init:function(){this._super()
var e=document.getElementsByTagName("body")
this.set("theme",e[1].className)},number:"0",total:0,theme:"Light",equal:!1,actions:{setNum:function(e){var t=["/","*","-","+"]
if(document.getElementById("myAudio").play(),"="===e){this.set("equal",!0)
var a,n,o=this.number.split(/([\*\+\-\/])/g),l=0
for(a=0;a<4;a++)for(n=0;n<o.length;n+=2){var r=Number(o[n]),i=o[n+1],u=Number(o[n+2])
if(i===t[a]){switch(a){case 0:l=r/u
break
case 1:l=r*u
break
case 2:l=r-u
break
case 3:l=r+u}o.splice(n+1,2),o[n]=l}}this.set("number",l)}else"c"===e?(this.set("number","0"),this.set("equal",!1)):"0"!==this.number||t.includes(e)?(!0!==this.equal||t.includes(e)?this.set("number",this.number+e):this.set("number",e),this.set("equal",!1)):this.set("number",e)}}})
e.default=t}),define("calculator/components/theme",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Component.extend({actions:{changeTheme:function(e){var t,a=document.getElementsByTagName("body")
for(t=0;t<a.length;t++)a[t].className=e}}})
e.default=t}),define("calculator/helpers/app-version",["exports","calculator/config/environment","ember-cli-app-version/utils/regexp"],function(e,t,a){function n(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=t.default.APP.version,l=n.versionOnly||n.hideSha,r=n.shaOnly||n.hideVersion,i=null
return l&&(n.showExtended&&(i=o.match(a.versionExtendedRegExp)),i||(i=o.match(a.versionRegExp))),r&&(i=o.match(a.shaRegExp)),i?i[0]:o}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=n,e.default=void 0
var o=Ember.Helper.helper(n)
e.default=o}),define("calculator/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a=t.default
e.default=a}),define("calculator/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a=t.default
e.default=a}),define("calculator/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","calculator/config/environment"],function(e,t,a){var n,o
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a.default.APP&&(n=a.default.APP.name,o=a.default.APP.version)
var l={name:"App Version",initialize:(0,t.default)(n,o)}
e.default=l}),define("calculator/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}
e.default=a}),define("calculator/initializers/ember-data",["exports","ember-data/setup-container","ember-data"],function(e,t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n={name:"ember-data",initialize:t.default}
e.default=n}),define("calculator/initializers/export-application-global",["exports","calculator/config/environment"],function(e,t){function a(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var a
if("undefined"!=typeof window)a=window
else if("undefined"!=typeof global)a=global
else{if("undefined"==typeof self)return
a=self}var n,o=t.default.exportApplicationGlobal
n="string"==typeof o?o:Ember.String.classify(t.default.modulePrefix),a[n]||(a[n]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete a[n]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=a,e.default=void 0
var n={name:"export-application-global",initialize:a}
e.default=n}),define("calculator/instance-initializers/ember-data",["exports","ember-data/initialize-store-service"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a={name:"ember-data",initialize:t.default}
e.default=a}),define("calculator/models/theme",["exports","ember-data"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a=t.default.Model.extend({type:t.default.attr(),name:t.default.attr(),className:t.default.attr()})
e.default=a}),define("calculator/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a=t.default
e.default=a}),define("calculator/router",["exports","calculator/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
a.map(function(){this.route("colors"),this.route("home"),this.route("theme")})
var n=a
e.default=n}),define("calculator/routes/colors",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Route.extend({model:function(){return this.store.findAll("theme")}})
e.default=t}),define("calculator/routes/home",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Route.extend({})
e.default=t}),define("calculator/routes/index",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Route.extend({redirect:function(){this.transitionTo("home")}})
e.default=t}),define("calculator/routes/theme",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Route.extend({model:function(){return this.store.findAll("theme")}})
e.default=t}),define("calculator/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("calculator/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"wlXixfVG",block:'{"symbols":[],"statements":[[0,"\\n"],[7,"body"],[11,"class","Light"],[9],[0,"\\n  "],[7,"h1"],[9],[0,"Calculator App"],[10],[0,"\\n\\n  "],[7,"nav"],[11,"class","links"],[9],[0,"\\n    "],[7,"p"],[9],[0," "],[4,"link-to",null,[["route"],["home"]],{"statements":[[0," "],[7,"button"],[11,"class","btn-nav"],[9],[0," Home  "],[10],[0," "]],"parameters":[]},null],[0," "],[10],[0,"\\n    "],[7,"p"],[9],[0," "],[4,"link-to",null,[["route"],["theme"]],{"statements":[[0," "],[7,"button"],[11,"class","button"],[9],[0," Colors "],[10],[0," "]],"parameters":[]},null],[0," "],[10],[0,"\\n  "],[10],[0,"\\n  "],[1,[23,"outlet"],false],[0,"\\n"],[10],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"calculator/templates/application.hbs"}})
e.default=t}),define("calculator/templates/components/calc",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"akgVl3gJ",block:'{"symbols":[],"statements":[[7,"audio"],[11,"id","myAudio"],[9],[0,"\\n  "],[7,"source"],[11,"src","assets/sounds/beep.mp3"],[11,"type","audio/mpeg"],[9],[10],[0,"\\n"],[10],[0,"\\n\\n\\n"],[7,"div"],[11,"class","center"],[9],[0,"\\n  "],[7,"h3"],[9],[1,[24,0,["theme"]],false],[10],[0,"\\n\\n  "],[7,"input"],[12,"value",[24,0,["number"]]],[11,"disabled",""],[9],[10],[0," "],[7,"br"],[9],[10],[0,"\\n\\n  "],[7,"button"],[9],[0,"Clear"],[3,"action",[[24,0,[]],"setNum","c"]],[10],[0,"\\n  "],[7,"br"],[9],[10],[0,"\\n  "],[7,"button"],[9],[0,"7"],[3,"action",[[24,0,[]],"setNum","7"]],[10],[0,"\\n  "],[7,"button"],[9],[0,"8"],[3,"action",[[24,0,[]],"setNum","8"]],[10],[0,"\\n  "],[7,"button"],[9],[0,"9"],[3,"action",[[24,0,[]],"setNum","9"]],[10],[0,"\\n  "],[7,"button"],[11,"id","func"],[9],[0,"*"],[3,"action",[[24,0,[]],"setNum","*"]],[10],[0,"\\n  "],[7,"br"],[9],[10],[0,"\\n  "],[7,"button"],[9],[0,"4"],[3,"action",[[24,0,[]],"setNum","4"]],[10],[0,"\\n  "],[7,"button"],[9],[0,"5"],[3,"action",[[24,0,[]],"setNum","5"]],[10],[0,"\\n  "],[7,"button"],[9],[0,"6"],[3,"action",[[24,0,[]],"setNum","6"]],[10],[0,"\\n  "],[7,"button"],[11,"id","func"],[9],[0,"-"],[3,"action",[[24,0,[]],"setNum","-"]],[10],[0,"\\n  "],[7,"br"],[9],[10],[0,"\\n  "],[7,"button"],[9],[0,"1"],[3,"action",[[24,0,[]],"setNum","1"]],[10],[0,"\\n  "],[7,"button"],[9],[0,"2"],[3,"action",[[24,0,[]],"setNum","2"]],[10],[0,"\\n  "],[7,"button"],[9],[0,"3"],[3,"action",[[24,0,[]],"setNum","3"]],[10],[0,"\\n  "],[7,"button"],[11,"id","func"],[9],[0,"+"],[3,"action",[[24,0,[]],"setNum","+"]],[10],[0,"\\n  "],[7,"br"],[9],[10],[0,"\\n  "],[7,"button"],[9],[0,"0"],[3,"action",[[24,0,[]],"setNum","0"]],[10],[0,"\\n  "],[7,"button"],[9],[0,"."],[3,"action",[[24,0,[]],"setNum","."]],[10],[0,"\\n  "],[7,"button"],[9],[0,"="],[3,"action",[[24,0,[]],"setNum","="]],[10],[0,"\\n  "],[7,"button"],[11,"id","func"],[9],[0,"/"],[3,"action",[[24,0,[]],"setNum","/"]],[10],[0,"\\n"],[10],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"calculator/templates/components/calc.hbs"}})
e.default=t}),define("calculator/templates/components/theme",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"7NDVher7",block:'{"symbols":[],"statements":[[4,"link-to",null,[["route"],["home"]],{"statements":[[7,"button"],[9],[0," "],[1,[24,0,["thisTheme"]],false],[0," "],[3,"action",[[24,0,[]],"changeTheme",[24,0,["thisTheme"]]]],[10],[0," "]],"parameters":[]},null],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"calculator/templates/components/theme.hbs"}})
e.default=t}),define("calculator/templates/home",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"Su+jr7SL",block:'{"symbols":[],"statements":[[0,"\\n"],[5,"calc",[],[[],[]],{"statements":[],"parameters":[]}],[0,"\\n\\n"],[1,[23,"outlet"],false],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"calculator/templates/home.hbs"}})
e.default=t}),define("calculator/templates/index",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"5FN0MOma",block:'{"symbols":[],"statements":[[1,[23,"outlet"],false]],"hasEval":false}',meta:{moduleName:"calculator/templates/index.hbs"}})
e.default=t}),define("calculator/templates/theme",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"YLHM4CIH",block:'{"symbols":["theme"],"statements":[[7,"h2"],[9],[0," Choose Color Sceme Here "],[10],[0,"\\n\\n"],[4,"each",[[24,0,["model"]]],null,{"statements":[[0,"  "],[5,"theme",[],[["@thisTheme"],[[24,1,["name"]]]],{"statements":[],"parameters":[]}],[0,"\\n"]],"parameters":[1]},null]],"hasEval":false}',meta:{moduleName:"calculator/templates/theme.hbs"}})
e.default=t}),define("calculator/config/environment",[],function(){try{var e="calculator/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),a={default:JSON.parse(decodeURIComponent(t))}
return Object.defineProperty(a,"__esModule",{value:!0}),a}catch(n){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("calculator/app").default.create({name:"calculator",version:"0.0.0+b8c4b6e2"})
