AppRouter = Backbone.Router.extend({

	initialize: function(){
		console.log('new route created')
		this.students = new StudentCollection();
		this.staffMembers = new StaffCollection();

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

		this.students.fetch({
			success: function(students) {
				students.each(function(student){
					new CompleteDirectoryView({model: student})
				});
			}
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

$('document').ready(function() {
	var router = new AppRouter();
	Backbone.history.start();
});
