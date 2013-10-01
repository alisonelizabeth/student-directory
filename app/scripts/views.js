// view of all students in class
CompleteDirectoryView = Backbone.View.extend({

	template: _.template($('#grid-template').text()),

	className: 'complete-view',

	events: {
		"click #activate"	: "activate",
	},

	initialize: function() {
		$('.container').append(this.el);
		this.render();
	},

	render: function(){
		this.$el.append(this.template({student: this.model }) );
	},

	activate: function() {
		this.$el.find('#activate').attr('href', "#/students/" + this.model.get('id') );
	}
});

// view for individual students
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
		$('.person-view').html('');
		this.$el.append(this.template({student: this.model}) );
	},

	edit: function() {
		$('.person-view').html('');
		var editTemplate = _.template($("#edit-template").text());
		this.$el.append(editTemplate({student: this.model}) );
	},

	destroy: function() {
		this.model.remove();
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

// view for all staff members
CompleteStaffView = Backbone.View.extend({

	template: _.template($('#staff-template').text()),

	className: 'complete-staff-view',

	initialize: function() {
		$('.container').append(this.el);
		this.render();
	},

	render: function(){
		this.$el.append(this.template({staff: this.model }) );
	}
});