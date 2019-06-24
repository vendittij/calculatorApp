'use strict';

define("calculator/tests/integration/components/calc-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | calc', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "VVyOEUbD",
        "block": "{\"symbols\":[],\"statements\":[[5,\"calc\",[],[[],[]]]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "cFpfVl2E",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"calc\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("calculator/tests/integration/components/theme-switch-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | theme-switch', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "l5YwKHSR",
        "block": "{\"symbols\":[],\"statements\":[[5,\"theme-switch\",[],[[],[]]]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "cVnLv/eI",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"theme-switch\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("calculator/tests/integration/components/theme-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | theme', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "MIKX90z0",
        "block": "{\"symbols\":[],\"statements\":[[5,\"theme\",[],[[],[]]]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "NeVwBJA5",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"theme\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("calculator/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });
  QUnit.test('adapters/theme.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/theme.js should pass ESLint\n\n');
  });
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('components/calc.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/calc.js should pass ESLint\n\n27:42 - Unnecessary escape character: \\*. (no-useless-escape)\n27:44 - Unnecessary escape character: \\+. (no-useless-escape)\n27:48 - Unnecessary escape character: \\/. (no-useless-escape)');
  });
  QUnit.test('components/theme.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/theme.js should pass ESLint\n\n');
  });
  QUnit.test('models/theme.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/theme.js should pass ESLint\n\n');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/colors.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/colors.js should pass ESLint\n\n');
  });
  QUnit.test('routes/home.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/home.js should pass ESLint\n\n');
  });
  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });
  QUnit.test('routes/theme.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/theme.js should pass ESLint\n\n');
  });
});
define("calculator/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('calculator/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'calculator/templates/application.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('calculator/templates/components/calc.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'calculator/templates/components/calc.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('calculator/templates/components/theme.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'calculator/templates/components/theme.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('calculator/templates/home.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'calculator/templates/home.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('calculator/templates/index.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'calculator/templates/index.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('calculator/templates/theme.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'calculator/templates/theme.hbs should pass TemplateLint.\n\n');
  });
});
define("calculator/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('integration/components/calc-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/calc-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/theme-switch-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/theme-switch-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/theme-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/theme-test.js should pass ESLint\n\n');
  });
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/adapters/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/adapters/colors-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/colors-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/adapters/server-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/server-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/adapters/themes-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/themes-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/attribute-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/attribute-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/attributes-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/attributes-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/theme-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/theme-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/themes-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/themes-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/colors-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/colors-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/home-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/home-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/theme-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/theme-test.js should pass ESLint\n\n');
  });
});
define("calculator/tests/test-helper", ["calculator/app", "calculator/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("calculator/tests/unit/adapters/application-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Adapter | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let adapter = this.owner.lookup('adapter:application');
      assert.ok(adapter);
    });
  });
});
define("calculator/tests/unit/adapters/colors-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Adapter | colors', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let adapter = this.owner.lookup('adapter:colors');
      assert.ok(adapter);
    });
  });
});
define("calculator/tests/unit/adapters/server-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Adapter | server', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let adapter = this.owner.lookup('adapter:server');
      assert.ok(adapter);
    });
  });
});
define("calculator/tests/unit/adapters/themes-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Adapter | themes', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let adapter = this.owner.lookup('adapter:themes');
      assert.ok(adapter);
    });
  });
});
define("calculator/tests/unit/models/attribute-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | attribute', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('attribute', {});
      assert.ok(model);
    });
  });
});
define("calculator/tests/unit/models/attributes-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | attributes', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('attributes', {});
      assert.ok(model);
    });
  });
});
define("calculator/tests/unit/models/theme-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | theme', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('theme', {});
      assert.ok(model);
    });
  });
});
define("calculator/tests/unit/models/themes-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | themes', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('themes', {});
      assert.ok(model);
    });
  });
});
define("calculator/tests/unit/routes/colors-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | colors', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:colors');
      assert.ok(route);
    });
  });
});
define("calculator/tests/unit/routes/home-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | home', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:home');
      assert.ok(route);
    });
  });
});
define("calculator/tests/unit/routes/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:index');
      assert.ok(route);
    });
  });
});
define("calculator/tests/unit/routes/theme-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | theme', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:theme');
      assert.ok(route);
    });
  });
});
define('calculator/config/environment', [], function() {
  var prefix = 'calculator';
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

require('calculator/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
