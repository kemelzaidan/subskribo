import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('locaweb-signature', 'Integration | Component | locaweb signature', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{locaweb-signature}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#locaweb-signature}}
      template block text
    {{/locaweb-signature}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
