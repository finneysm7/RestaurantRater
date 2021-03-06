Getable.Views.RestsShow = Backbone.CompositeView.extend({
  template: JST["restaurants/show"],

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(
      this.model.ratings(), "add", this.addRating
    );
    this.listenTo(
      this.model.ratings(), "remove", this.removeRating
    );

    var ratingNewView =
      new Getable.Views.RatingsNew({ model: this.model });
    this.addSubview(".ratings-new", ratingNewView);

    this.model.ratings().each(this.addRating.bind(this));
  },
  
  averageStars: function () {
	  var sum = 0;
  	this.model.ratings().each(function (rate){
  		sum += rate.get('value');
  	});
	var avg = sum / this.model.ratings().models.length;
	this.$('.star-avg').html(avg);
  },
  
  addRating: function (rating) {
    var ratingsShow =
      new Getable.Views.RatingsShow({ model: rating });
    this.addSubview(".ratings", ratingsShow);
	this.averageStars();
  },

  removeRating: function (rating) {
    var subview = _.find(
      this.subviews(".ratings"),
      function (subview) {
        return subview.model === rating;
      }
    );

    this.removeSubview(".ratings", subview);
	this.averageStars();
  },

  render: function () {
    var view = this;
    var renderedContent = this.template({
      restaurant: this.model
    });

    this.$el.html(renderedContent);
    this.attachSubviews();
	this.averageStars();
    return this;
  }
  
 
});