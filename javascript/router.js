Todos.Router.map(function() {
  this.resource('todos', { path: '/' }, function () {
  	    this.route('active');
  });
});

Todos.TodosRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('todo');
    return this.modelFor('todos');
    return this.store.filter('todo', function(todo) {
      return !todo.get('isCompleted');
    });
  },
  renderTemplate: function(controller) {
    this.render('todos/index', {controller: controller});
  }
});