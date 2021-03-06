Student = Backbone.Model.extend({
	defaults: {
		name: 'Information not provided',
		id: 'new-student',
		email: '',
		github: '',
		photo: 'https://1.gravatar.com/avatar/a4d6a575778b5aea9afddd13471f5178?d=https%3A%2F%2Fidenticons.github.com%2F9745e271f4fb0ac83b37286d6ac03942.png&s=420'
	}, 

	idAttribute: "_id",

	// url: 'http://0.0.0.0:3000/collections/studentdata',

	initialize: function(){
		console.log('new student created')
	}
});

StudentCollection = Backbone.Collection.extend({
	initialize: function(){
		console.log('new student collection created')
	},

	model: Student,

	url: 'http://0.0.0.0:3000/collections/studentdata'
});

// staff model
Staff = Backbone.Model.extend({
	defaults: {
		name: 'Information not provided',
		id: 'new-staff',
		email: '',
		github: '',
		photo: 'https://1.gravatar.com/avatar/a4d6a575778b5aea9afddd13471f5178?d=https%3A%2F%2Fidenticons.github.com%2F9745e271f4fb0ac83b37286d6ac03942.png&s=420'
	}, 

	idAttribute: "_id",

	initialize: function(){
		console.log('new staff member created')
	}
});

// staff collection 
StaffCollection = Backbone.Collection.extend({
	initialize: function(){
		console.log('new staff collection created')
	},

	model: Staff,

	url: 'http://0.0.0.0:3000/collections/staffdata'

});