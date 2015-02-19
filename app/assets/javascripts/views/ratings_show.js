Getable.Views.RatingsShow = Backbone.View.extend({
  template: JST["templates/ratings/show"],

  events: {
    "click button.destroy": "destroyRating",
    "dblclick div.content": "beginEditing",
    "submit form": "endEditing"
  },

  initialize: function (options) {
    this.open = false;
    this.listenTo(this.model, "change", this.render);
  },

  beginEditing: function () {
    this.open = true;
    this.render();
  },

  destroyRating: function (event) {
    event.preventDefault();
    this.model.destroy();
  },

  endEditing: function (event) {
    event.preventDefault();
    this.open = false;

    var params = $(event.currentTarget).serializeJSON();
    this.model.set(params["comment"]);
    this.model.save();

    this.render();
  },

  render: function () {
    var renderedContent = this.template({ rating: this.model });
    this.$el.html(renderedContent);

    return this;
  }
});