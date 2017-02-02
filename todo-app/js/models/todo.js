/*global Backbone */
var app = app || {};

// Anonymous function, wrapped in () and immediately invoked; any variables declared inside won't pollute the global scope.
(function () {
	'use strict';

	// Todo Model
	// ----------

	// Our basic **Todo** model has `title`, `order`, and `completed` attributes.
	app.Todo = Backbone.Model.extend({
		// Default attributes for the todo
		// and ensure that each todo created has `title` and `completed` keys.
		defaults: {
			title: '',
			completed: false,
			priority: false
		},

		// Toggle the '"priority"' state of model
		togglePriority: function() {
			this.save({
				priority: !this.get('priority')
			});
		},

		// Toggle the `completed` state of this todo item.
		toggle: function () {
			this.save({
				completed: !this.get('completed')
			});
		}
	});
})();
