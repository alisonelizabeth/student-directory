// view of all students in class
CompleteDirectoryView = Backbone.View.extend({

	gridTemplate: _.template($('#grid-template').text()),

	className: 'complete-view',

	events: {
		"click #activate"	: "activate"
	},

	initialize: function() {
		$('.container').append(this.el);
		this.render();
	},

	render: function(){
		this.$el.append(this.gridTemplate({student: this.model }) );
	},

	activate: function() {
		this.$el.find('#activate').attr('href', "#/students/" + this.model.get('_id') );
	},
});

// add new person to directory 
AddPersonView = Backbone.View.extend({
	addTemplate: _.template($('#add-template').text()),

	el: '.container-add',

	events: {
		"click #add": "addPerson"
	},

	initialize: function(){
		console.log('added input field')
		this.render();
	},

	render: function () {
		this.$el.html('');
		this.$el.append(this.addTemplate()).css({'background-color':'#1187E4'});
	},

	addPerson: function() {		
		var newName = $('input#student-name').val();
		var newEmail = $('input#student-email').val();
		var newGithub = $('input#student-github').val();

		var newClassmate = new Student({name: newName, id: newName, email: newEmail, github: newGithub});
		this.collection.add(newClassmate);
		newClassmate.save({}, {
			success: function(classmate) {
				new CompleteDirectoryView ({model: classmate});
				$('input').val('');
			}
		});
	},
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
		if (confirm('Are you sure you want to delete this person?') === true) {
		this.model.destroy({
			success: function() {
				Backbone.history.navigate("#/students", {trigger:true});
			}
		});
		} 
	},

	save: function() {
		var editedName = this.$el.find('input#name').val();
		var editedEmail = this.$el.find('input#email').val();
		var editedGithub = this.$el.find('input#github').val();

		this.model.save({'name': editedName, 'email': editedEmail, 'github': editedGithub})
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