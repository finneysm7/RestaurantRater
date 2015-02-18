Getable.Views.RestsNew = Backbone.View.extend({
	template: JST["templates/restaurants/new"],
	
	events: {
		"submit form": "submit"
	},
	
	render: function () {
		var renderedContent = this.template();
		this.$el.html(renderedContent);
		
		return this;
	},
	
	submit: function (event){
		event.preventDefault();
		debugger
		var params = $(event.currentTarget).serializeJSON();
		var newRest = new Getable.Models.Restautant(params["restaurant"]);
		
		newRest.save({}, {
			success: function (){
				Getable.Collections.todos.add(newTodo);
				Backbone.history.navigate("/", { trigger: true })
			}
		})
	}
})