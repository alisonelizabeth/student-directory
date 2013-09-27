CompleteDirectoryView = Backbone.View.extend({

	template: _.template($('#grid-template').text()),

	className: 'complete-view',

	// events: {
	// 	"click .activate" : "newView"
	// },

	tagName: 'a',

	initialize: function() {
		$('.container').append(this.el);
		this.render();
	},

	render: function(){
		// this.$el.find('.activate').attr('href', "#/students/" + this.model.get('id') )
		this.$el.attr('href', "#/students/" + this.model.get('id') )
		this.$el.append(this.template({student: this.model }) )
	},

	// newView: function(e){
	// 	e.preventDefault();
 //  		AppRouter.navigate("/students/" + this.model.get('id'), true);
	// }
});

PersonView = Backbone.View.extend({
	template: _.template($('#profile-template').text()),

	className: 'person-view',

	events: {
		"click #edit"	: "edit",
		"click #delete"	: "destroy",
		"click #save"	: "save"
	},

	initialize: function (){
		$('.container').append(this.el);
		this.render();
	},

	render: function(){
		$('.person-view').html('')
		this.$el.append(this.template({student: this.model}) )
	},

	edit: function() {
		$('.person-view').html('');
		var editTemplate = _.template($("#edit-template").text());
		this.$el.append(editTemplate({student: this.model}) );
	},

	destroy: function() {
		this.remove();
	},

	save: function() {
		var editedName = this.$el.find('input#name').val();
		var editedEmail = this.$el.find('input#email').val();
		var editedGithub = this.$el.find('input#github').val();

		this.model.set('name', editedName);
		this.model.set('email', editedEmail);
		this.model.set('github', editedGithub);

		this.render();
	}
});

// PersonEditView = Backbone.View.extend({
	
// 	template: _.template($('#profile-template').text()),

// 	// template: _.template($('#edit-template').text()),

// 	className: 'person-edit-view',

// 	events: {
// 		"click #save"	: "save"
// 	},

// 	initialize: function(){
// 		console.log('edit view')
// 		this.render()
// 	},

// 	render: function(){
// 		$('.person-view').html('');
// 		this.$el.append(this.template({student: this.model}) )
// 	},

// 	save: function() {
// 		var editedPerson = this.$el.find('input').val();
// 		this.model.set('name', editedPerson);
// 		this.render();
// 	}
// });


