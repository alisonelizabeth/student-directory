AppRouter = Backbone.Router.extend({
	initialize: function(){
		console.log('new route created')
		// this.students = new StudentCollection()
		// this.students.add(data)
	},

	routes: {
		"students"		: "showStudents",
		"students/:id"	: "showStudent",
		"staff"			: "showStaff"
		// "staff/:id"		: "showStaffMember"
	},

	showStudents: function(){
		console.log('going to show all the students');
		$('.container').html('');
		this.students = new StudentCollection();
		this.students.add(data);
	},

	showStudent: function(id){
		$('.container').html('');
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

// bigview = 
// render:
// this.collection.each() function(item)
// newItemView ({model: item})