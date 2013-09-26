CompleteDirectoryView = Backbone.View.extend({

	template: _.template($('#grid-template').text()),

	className: 'complete-view',

	// events: {
		
	// }

	initialize: function() {
		$('.container').append(this.el);
		this.render();
	},

	render: function(){
		this.$el.find('.activate').attr('href', "#/students/" + this.model.get('id') )
		this.$el.append(this.template({student: this.model }) )
	}
});

PersonView = Backbone.View.extend({
	template: _.template($('#profile-template').text()),

	className: 'person-view',

	events: {
		// "click #edit"	: "edit",
		"click #delete"	: "destroy"
	},

	initialize: function (){
		$('.container').append(this.el);
		this.render();
	},

	render: function(){
		this.$el.append(this.template({student: this.model}) )
	},

	// edit: function() {

	// },

	destroy: function() {
		this.remove();
	}
});

// PersonEditView = Backbone.View.extend({
// 	template: _.template($('#edit-template').text()),

// 	className: 'person-edit-view',
// })