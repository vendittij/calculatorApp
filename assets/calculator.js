'use strict';



;define("calculator/adapters/application", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberData.default.JSONAPIAdapter.extend({
    host: 'https://cors-anywhere.herokuapp.com/https://s3.amazonaws.com/gavant-public'
  });

  _exports.default = _default;
});
;define("calculator/adapters/theme", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberData.default.JSONAPIAdapter.extend({
    host: 'https://cors-anywhere.herokuapp.com/https://s3.amazonaws.com/gavant-public'
  });

  _exports.default = _default;
});
;define("calculator/app", ["exports", "calculator/resolver", "ember-load-initializers", "calculator/config/environment"], function (_exports, _resolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
  var _default = App;
  _exports.default = _default;
});
;define("calculator/components/calc", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    init() {
      this._super();

      var temp = document.getElementsByTagName("body");
      this.set('theme', temp[1].className);
    },

    number: '0',
    total: 0,
    theme: 'Light',
    equal: false,
    actions: {
      setNum(value) {
        var operands = ['/', '*', '-', '+'];
        var audio = document.getElementById("myAudio");
        audio.play();

        if (value === '=') {
          this.set('equal', true); //Parse the string and create an equation array

          var array = this.number.split(/([\*\+\-\/])/g); //parse the array and apply PEMDAS

          var i;
          var j;
          var newNum = 0;

          for (i = 0; i < 4; i++) {
            for (j = 0; j < array.length; j += 2) {
              var curNum = Number(array[j]);
              var operation = array[j + 1];
              var secondNum = Number(array[j + 2]);

              if (operation === operands[i]) {
                switch (i) {
                  case 0:
                    newNum = curNum / secondNum;
                    break;

                  case 1:
                    newNum = curNum * secondNum;
                    break;

                  case 2:
                    newNum = curNum - secondNum;
                    break;

                  case 3:
                    newNum = curNum + secondNum;
                    break;
                }

                array.splice(j + 1, 2);
                array[j] = newNum;
              }
            }
          }

          this.set('number', newNum);
        } else if (value === 'c') {
          this.set('number', '0');
          this.set('equal', false);
        } else if (this.number === '0' && !operands.includes(value)) {
          this.set('number', value);
        } else {
          if (this.equal === true && !operands.includes(value)) {
            this.set('number', value);
          } else {
            this.set("number", this.number + value);
          }

          this.set('equal', false);
        }
      }

    }
  });

  _exports.default = _default;
});
;define("calculator/components/theme", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    actions: {
      changeTheme(theme) {
        //Get every <body> step through them and change the class name
        var temp = document.getElementsByTagName("body");
        var i;

        for (i = 0; i < temp.length; i++) {
          temp[i].className = theme;
        }
      }

    }
  });

  _exports.default = _default;
});
;define("calculator/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("calculator/helpers/app-version", ["exports", "calculator/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("calculator/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("calculator/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("calculator/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "calculator/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("calculator/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("calculator/initializers/ember-data", ["exports", "ember-data/setup-container", "ember-data"], function (_exports, _setupContainer, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    ```app/services/store.js
    import DS from 'ember-data';
  
    export default DS.Store.extend({
      adapter: 'custom'
    });
    ```
  
    ```app/controllers/posts.js
    import { Controller } from '@ember/controller';
  
    export default Controller.extend({
      // ...
    });
  
    When the application is initialized, `ApplicationStore` will automatically be
    instantiated, and the instance of `PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("calculator/initializers/export-application-global", ["exports", "calculator/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("calculator/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (_exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
  _exports.default = _default;
});
;define("calculator/models/theme", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const {
    Model
  } = _emberData.default;

  var _default = Model.extend({
    type: _emberData.default.attr(),
    name: _emberData.default.attr(),
    className: _emberData.default.attr()
  });

  _exports.default = _default;
});
;define("calculator/resolver", ["exports", "ember-resolver"], function (_exports, _emberResolver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _emberResolver.default;
  _exports.default = _default;
});
;define("calculator/router", ["exports", "calculator/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });
  Router.map(function () {
    this.route('colors');
    this.route('home');
    this.route('theme');
  });
  var _default = Router;
  _exports.default = _default;
});
;define("calculator/routes/colors", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    model() {
      return this.store.findAll('theme');
    }

  });

  _exports.default = _default;
});
;define("calculator/routes/home", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({});

  _exports.default = _default;
});
;define("calculator/routes/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    redirect() {
      this.transitionTo('home');
    }

  });

  _exports.default = _default;
});
;define("calculator/routes/theme", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    model() {
      return this.store.findAll('theme');
    }

  });

  _exports.default = _default;
});
;define("calculator/services/ajax", ["exports", "ember-ajax/services/ajax"], function (_exports, _ajax) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
;define("calculator/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "wlXixfVG",
    "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[7,\"body\"],[11,\"class\",\"Light\"],[9],[0,\"\\n  \"],[7,\"h1\"],[9],[0,\"Calculator App\"],[10],[0,\"\\n\\n  \"],[7,\"nav\"],[11,\"class\",\"links\"],[9],[0,\"\\n    \"],[7,\"p\"],[9],[0,\" \"],[4,\"link-to\",null,[[\"route\"],[\"home\"]],{\"statements\":[[0,\" \"],[7,\"button\"],[11,\"class\",\"btn-nav\"],[9],[0,\" Home  \"],[10],[0,\" \"]],\"parameters\":[]},null],[0,\" \"],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\" \"],[4,\"link-to\",null,[[\"route\"],[\"theme\"]],{\"statements\":[[0,\" \"],[7,\"button\"],[11,\"class\",\"button\"],[9],[0,\" Colors \"],[10],[0,\" \"]],\"parameters\":[]},null],[0,\" \"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[1,[23,\"outlet\"],false],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "calculator/templates/application.hbs"
    }
  });

  _exports.default = _default;
});
;define("calculator/templates/components/calc", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "akgVl3gJ",
    "block": "{\"symbols\":[],\"statements\":[[7,\"audio\"],[11,\"id\",\"myAudio\"],[9],[0,\"\\n  \"],[7,\"source\"],[11,\"src\",\"assets/sounds/beep.mp3\"],[11,\"type\",\"audio/mpeg\"],[9],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\\n\"],[7,\"div\"],[11,\"class\",\"center\"],[9],[0,\"\\n  \"],[7,\"h3\"],[9],[1,[24,0,[\"theme\"]],false],[10],[0,\"\\n\\n  \"],[7,\"input\"],[12,\"value\",[24,0,[\"number\"]]],[11,\"disabled\",\"\"],[9],[10],[0,\" \"],[7,\"br\"],[9],[10],[0,\"\\n\\n  \"],[7,\"button\"],[9],[0,\"Clear\"],[3,\"action\",[[24,0,[]],\"setNum\",\"c\"]],[10],[0,\"\\n  \"],[7,\"br\"],[9],[10],[0,\"\\n  \"],[7,\"button\"],[9],[0,\"7\"],[3,\"action\",[[24,0,[]],\"setNum\",\"7\"]],[10],[0,\"\\n  \"],[7,\"button\"],[9],[0,\"8\"],[3,\"action\",[[24,0,[]],\"setNum\",\"8\"]],[10],[0,\"\\n  \"],[7,\"button\"],[9],[0,\"9\"],[3,\"action\",[[24,0,[]],\"setNum\",\"9\"]],[10],[0,\"\\n  \"],[7,\"button\"],[11,\"id\",\"func\"],[9],[0,\"*\"],[3,\"action\",[[24,0,[]],\"setNum\",\"*\"]],[10],[0,\"\\n  \"],[7,\"br\"],[9],[10],[0,\"\\n  \"],[7,\"button\"],[9],[0,\"4\"],[3,\"action\",[[24,0,[]],\"setNum\",\"4\"]],[10],[0,\"\\n  \"],[7,\"button\"],[9],[0,\"5\"],[3,\"action\",[[24,0,[]],\"setNum\",\"5\"]],[10],[0,\"\\n  \"],[7,\"button\"],[9],[0,\"6\"],[3,\"action\",[[24,0,[]],\"setNum\",\"6\"]],[10],[0,\"\\n  \"],[7,\"button\"],[11,\"id\",\"func\"],[9],[0,\"-\"],[3,\"action\",[[24,0,[]],\"setNum\",\"-\"]],[10],[0,\"\\n  \"],[7,\"br\"],[9],[10],[0,\"\\n  \"],[7,\"button\"],[9],[0,\"1\"],[3,\"action\",[[24,0,[]],\"setNum\",\"1\"]],[10],[0,\"\\n  \"],[7,\"button\"],[9],[0,\"2\"],[3,\"action\",[[24,0,[]],\"setNum\",\"2\"]],[10],[0,\"\\n  \"],[7,\"button\"],[9],[0,\"3\"],[3,\"action\",[[24,0,[]],\"setNum\",\"3\"]],[10],[0,\"\\n  \"],[7,\"button\"],[11,\"id\",\"func\"],[9],[0,\"+\"],[3,\"action\",[[24,0,[]],\"setNum\",\"+\"]],[10],[0,\"\\n  \"],[7,\"br\"],[9],[10],[0,\"\\n  \"],[7,\"button\"],[9],[0,\"0\"],[3,\"action\",[[24,0,[]],\"setNum\",\"0\"]],[10],[0,\"\\n  \"],[7,\"button\"],[9],[0,\".\"],[3,\"action\",[[24,0,[]],\"setNum\",\".\"]],[10],[0,\"\\n  \"],[7,\"button\"],[9],[0,\"=\"],[3,\"action\",[[24,0,[]],\"setNum\",\"=\"]],[10],[0,\"\\n  \"],[7,\"button\"],[11,\"id\",\"func\"],[9],[0,\"/\"],[3,\"action\",[[24,0,[]],\"setNum\",\"/\"]],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "calculator/templates/components/calc.hbs"
    }
  });

  _exports.default = _default;
});
;define("calculator/templates/components/theme", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "7NDVher7",
    "block": "{\"symbols\":[],\"statements\":[[4,\"link-to\",null,[[\"route\"],[\"home\"]],{\"statements\":[[7,\"button\"],[9],[0,\" \"],[1,[24,0,[\"thisTheme\"]],false],[0,\" \"],[3,\"action\",[[24,0,[]],\"changeTheme\",[24,0,[\"thisTheme\"]]]],[10],[0,\" \"]],\"parameters\":[]},null],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "calculator/templates/components/theme.hbs"
    }
  });

  _exports.default = _default;
});
;define("calculator/templates/home", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "Su+jr7SL",
    "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[5,\"calc\",[],[[],[]],{\"statements\":[],\"parameters\":[]}],[0,\"\\n\\n\"],[1,[23,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "calculator/templates/home.hbs"
    }
  });

  _exports.default = _default;
});
;define("calculator/templates/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "5FN0MOma",
    "block": "{\"symbols\":[],\"statements\":[[1,[23,\"outlet\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "calculator/templates/index.hbs"
    }
  });

  _exports.default = _default;
});
;define("calculator/templates/theme", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "YLHM4CIH",
    "block": "{\"symbols\":[\"theme\"],\"statements\":[[7,\"h2\"],[9],[0,\" Choose Color Sceme Here \"],[10],[0,\"\\n\\n\"],[4,\"each\",[[24,0,[\"model\"]]],null,{\"statements\":[[0,\"  \"],[5,\"theme\",[],[[\"@thisTheme\"],[[24,1,[\"name\"]]]],{\"statements\":[],\"parameters\":[]}],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "calculator/templates/theme.hbs"
    }
  });

  _exports.default = _default;
});
;

;define('calculatorApp/config/environment', [], function() {
  var prefix = 'calculatorApp';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("calculatorApp/app")["default"].create({"name":"calculator","version":"0.0.0+60e672ec"});
          }
        
//# sourceMappingURL=calculator.map
