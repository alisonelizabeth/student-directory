AppRouter = Backbone.Router.extend({

	initialize: function(){
		console.log('new route created')
	},

	routes: {
		"students"		: "showStudents",
		"students/:id"	: "showStudent",
		"staff"			: "showStaff"
		// "staff/:id"		: "showStaffMember"
	},

	showStudents: function(){
		var template = _.template($('#add-template').text())

		$('.container').html('');
		this.students = new StudentCollection();
		this.students.add(data);
		
		$('.container-add').append(template);
		$('#add').click(function() {
			newName= $('#student-name').val();
			newEmail= $('#email').val();
			newGithub= $('#github').val();

			newClassmate = new Student ({name:newName, id: newName, email: newEmail, github: newGithub});
			newView = new CompleteDirectoryView ({model: newClassmate});

			data.push(newClassmate)

			$('input').val('')
		});
	},

	showStudent: function(id){
		$('.container').html('');
		$('.container-add').html('');
		var studentToShow = this.students.get(id);
		new PersonView({model: studentToShow});
		console.log('Student ID: ', id)
	},

	showStaff: function(){
		console.log('going to show staff');
		$('.container').html('');
		this.staffMembers = new StaffCollection();
		this.staffMembers.add(staffData);
	}

	// showStaffMember: function(id){
	// 	$('.container').html('');
	// 	var staffMemberToShow = this.staffMembers.get(id);
	// 	new PersonView({model: staffMemberToShow});
	// 	console.log('Staff ID: ', id)
	// }
});

var router = new AppRouter();
Backbone.history.start();