$('document').ready(function() {
	var router = new AppRouter();
	Backbone.history.start();
});

AppRouter = Backbone.Router.extend({

	initialize: function(){
		console.log('new route created')
		this.students = new StudentCollection();
		this.staffMembers = new StaffCollection();
	},

	routes: {
		""				: "home",
		"students"		: "showStudents",
		"students/:id"	: "showStudent",
		"staff"			: "showStaff"
		},

	home: function() {
		var homeTemplate = _.template($('#home-template').text());
		console.log('home route')
		$('.container').html('');
		$('.container-add').html('');

		$('.container').append(homeTemplate());
	},

	showStudents: function(){
		$('.container').html('');

		this.students.fetch({
			success: function(students) {
				students.each(function(student){
					new CompleteDirectoryView({model: student})
				});
			}
		});
		
		new AddPersonView();

		$('#add').click(function(){
			var newName = $('input#student-name').val();
			var newEmail = $('input#student-email').val();
			var newGithub = $('input#student-github').val();

			var newClassmate = new Student({name: newName, id: newName, email: newEmail, github: newGithub});
			collection = new StudentCollection();
			collection.add(newClassmate);
			newClassmate.save({}, {
				success: function(classmate) {
					new CompleteDirectoryView ({model: classmate});
					$('input').val('');
				}
			});
		});	
	},

	showStudent: function(id){
		$('.container').html('');
		$('.container-add').html('').css({'background-color': 'white'});

		var that = this  
		this.students.fetch({
			success: function() {
				studentToShow = that.students.get(id);
				new PersonView({model: studentToShow});
			}
		});
	},

	showStaff: function(){
		console.log('going to show staff');
		$('.container').html('');
		$('.container-add').html('').css({'background-color': 'white'});

		this.staffMembers.fetch({
			success: function(staffMembers) {
				staffMembers.each(function(staffMember){
					new CompleteStaffView({model: staffMember})
					});
				}
			});
		}
});