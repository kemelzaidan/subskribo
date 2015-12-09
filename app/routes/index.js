import Ember from 'ember';

export default Ember.Route.extend({
  // this.route('index', { path: '/' });
  model(params) {
    return Ember.Object.create ({
      nome: "João Silva",
      cargo: "Desenvolvedor web",
      email: "joao.silva@locaweb.com.br",
      telefone: "11 33420718",
      ramal: "207",
      celular: "11 97174-7414",
      skype: "joao_silva"
    })
  }
});
