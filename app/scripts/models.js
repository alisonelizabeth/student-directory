Student = Backbone.Model.extend({
	defaults: {
		name: 'Information not provided',
		id: 'new-student',
		email: '',
		github: '',
		photo: '/images/hendley.png'
	}, 

	initialize: function(){
		console.log('new student created')
	}
});

StudentCollection = Backbone.Collection.extend({
	initialize: function(){
		console.log('new collection created')
	
	this.on('add', function(student){
		new CompleteDirectoryView({model:student})
	});
	},

	model: Student 
});

// student data 
var data = [
{
	name: 'Caleb Bradley',
	id: 'caleb-bradley',
	email: 'calebbradley30@yahoo.com',
	github: 'github.com/calebbradley',
	photo: '/images/bradley.jpeg'

},

{
	name: 'Andy Flack',
	id: 'andy-flack',
	email: 'flack.ap@gmail.com',
	github: 'github.com/FlackAP',
	photo: '/images/flack.png'

},

{
	name: 'Jake Hendley',
	id: 'jake-hendley',
	email: 'jhendley25@gmail.com',
	github: 'github.com/jhendley25',
	photo: '/images/hendley.png'

},

{
	name: 'Keeron Marc',
	id: 'keeron-marc',
	email: 'keeronmarc@gmail.com',
	github: 'github.com/keeronmarc',
	photo: '/images/marc.jpeg'

},

{
	name: 'Alison Miller',
	id: 'alison-miller',
	email: 'alisonmllr20@gmail.com',
	github: 'github.com/alisonelizabeth',
	photo: '/images/amiller.jpeg'

},

{
	name: 'Brandon Miller',
	id: 'brandon-miller',
	email: 'bmiller@gmail.com',
	github: 'github.com/BrandonEMiller',
	photo: '/images/bmiller.jpeg'

},

{
	name: 'Tyler Phillips',
	id: 'tyler-phillips',
	email: 'tylerfphillips@gmail.com',
	github: 'github.com/tylerphillips',
	photo: '/images/phillips.jpeg'

},

{
	name: 'Ari Picker',
	id: 'ari-picker',
	email: 'picker10024@yahoo.com',
	github: 'github.com/Pickra',
	photo: '/images/picker.jpeg'

},

{
	name: 'Ryan Ponce',
	id: 'ryan-ponce',
	email: 'ryanponce@gmail.com',
	github: 'github.com/ryanponce',
	photo: '/images/ponce.png'

},

{
	name: 'Ryan Poplin',
	id: 'ryan-poplin',
	email: 'mobileupstate@gmail.com',
	github: 'github.com/ryanpoplin',
	photo: '/images/poplin.jpeg'

},

{
	name: 'Joe Tamburro',
	id: 'joe-tamburro',
	email: 'joetamburro38@gmail.com',
	github: 'github.com/joetamburro',
	photo: '/images/tamburro.jpeg'

},

{
	name: 'Joe Vanleeuwen',
	id: 'joe-vanleeuwen',
	email: 'jvnlwn@gmail.com',
	github: 'github.com/joe-vanleeuwen',
	photo: '/images/vanleeuwen.png'

}
]

// staff model
Staff = Backbone.Model.extend({
	defaults: {
		name: 'Information not provided',
		id: 'new-staff',
		email: '',
		github: '',
		photo: '/images/hendley.png'
	}, 

	initialize: function(){
		console.log('new staff member created')
	}
});

// staff collection 
StaffCollection = Backbone.Collection.extend({
	initialize: function(){
		console.log('new collection created')
	
	this.on('add', function(staff){
		new CompleteStaffView({model:staff})
	});
	},

	model: Staff
});

// staff data 
var staffData = [
{
	name: 'Mason Stewart',
	id: 'mason-stewart',
	title: 'Teacher',
	email: 'mason@theironyard.com',
	github: 'github.com/masondesu',
	photo: '/images/stewart.jpg'

},

{
	name: 'Eric Dodds',
	id: 'eric-dodds',
	title: 'Program Manager',
	email: 'eric@theironyard.com',
	github: 'github.com/ericdodds',
	photo: '/images/dodds.jpg'

},

{
	name: 'Daniel Jeffords',
	id: 'daniel-jeffords',
	title: "Teacher's Assistant",
	email: 'daniel@theironyard.com',
	github: 'github.com/DJSrA',
	photo: '/images/jeffords.jpeg'

}
]