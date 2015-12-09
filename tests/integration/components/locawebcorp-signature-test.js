import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('locawebcorp-signature', 'Integration | Component | locawebcorp signature', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{locawebcorp-signature}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#locawebcorp-signature}}
      template block text
    {{/locawebcorp-signature}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
