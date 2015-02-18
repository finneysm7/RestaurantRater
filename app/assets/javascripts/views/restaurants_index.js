// window.Getable.Views.RestIndexRow = Backbone.View.extend({
// 	template: JST["restaurants/index_row"],
// 	tagName: "tr",
//
// 	render: function (){
// 		var renderedContent = this.template({ restaurant: this.model });
// 		this.$el.html(renderedContent);
//
// 		return this;
// 	}
// });

window.Getable.Views.RestIndex = Backbone.View.extend({
	template: JST["templates/restaurants/index"],
	
	initialize: function () {
		this.listenTo(this.collection, "add change:title remove reset", this.render)
	},
	
	render: function () {
		var renderedContent = this.template({
			restaurants: this.collection
		});
		this.$el.html(renderedContent);
		// this.attachSubviews();
		return this;
	}
});

