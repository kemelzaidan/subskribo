import Ember from 'ember';

export default Ember.Route.extend({
  // this.route('index', { path: '/' });
  model(params) {
    return Ember.Object.create ({
      nome: "Kemel Zaidan",
      cargo: "Evangelista locaweb",
      email: "kemel.zaidan@locaweb.com.br",
      telefone: "11 3544-0444",
      ramal: "270",
      celular: "11 97174-0000",
      skype: "kemel_zaidan"
    })
  }
});
