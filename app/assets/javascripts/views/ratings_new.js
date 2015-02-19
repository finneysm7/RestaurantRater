Getable.Views.RatingsNew = Backbone.View.extend({
  template: JST["ratings/new"],
  events: {
    "submit form": "submit",
    "keyup textarea": "renderPreview"
  },

  render: function () {
    var renderedContent = this.template({ restaurant: this.model });
    this.$el.html(renderedContent);

    return this;
  },

  renderPreview: function (event) {
    var content = $(event.currentTarget).val();
    this.$(".preview").html(_.escape(content));
  },

  submit: function (event) {
    var view = this;
    event.preventDefault();

    var params = $(event.currentTarget).serializeJSON();
    var rating = new Getable.Models.Rating(params["rating"]);
    rating.save({}, {
      success: function () {
        view.model.ratings().add(rating);
        // re-render to clear form/preview
        view.render();
      }
    });
  }
});