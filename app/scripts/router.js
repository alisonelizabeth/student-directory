AppRouter = Backbone.Router.extend({

	initialize: function(){
		console.log('new route created')
	},

	routes: {
		"students"		: "showStudents",
		"students/:id"	: "showStudent",
		"staff"			: "showStaff"
		},

	showStudents: function(){
		var template = _.template($('#add-template').text());

		$('.container').html('');
		$('.container-add').html('');

		this.students = new StudentCollection();
		var that = this

		$.getJSON("http://0.0.0.0:3000/collections/studentdata",function(results){
			that.students.add(results);
    	});
		
		$('.container-add').append(template).css({'background-color':'#1187E4'});
		$('#add').click(function() {
			var newName= $('#student-name').val();
			var newEmail= $('#email').val();
			var newGithub= $('#github').val();

			var newClassmate = new Student ({name:newName, id: newName, email: newEmail, github: newGithub});
			var newView = new CompleteDirectoryView ({model: newClassmate});

			$.post('http://0.0.0.0:3000/collections/studentdata', {name:newName, id: newName, email: newEmail, github: newGithub})

			$('input').val('');
		});
	},

	showStudent: function(id){
		$('.container').html('');
		$('.container-add').html('').css({'background-color': 'white'});

		var studentToShow = this.students.get(id);
		new PersonView({model: studentToShow});
	},

	showStaff: function(){
		console.log('going to show staff');
		$('.container').html('');
		$('.container-add').html('').css({'background-color': 'white'});

		$.getJSON("http://0.0.0.0:3000/collections/staffdata",function(results){
			this.staffMembers = new StaffCollection();
			this.staffMembers.add(results);
    	});
	}
});

var router = new AppRouter();
Backbone.history.start();