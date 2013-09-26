AppRouter = Backbone.Router.extend({
	initialize: function(){
		console.log('new route created')
		// this.students = new StudentCollection()
		// this.students.add(data)
	},

	routes: {
		"students"		: "showStudents",
		"students/:id"	: "showStudent"
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
	}
});


var router = new AppRouter();
Backbone.history.start();