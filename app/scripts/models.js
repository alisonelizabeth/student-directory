Student = Backbone.Model.extend({
	defaults: {
		name: 'Information not provided',
		id: 'new-student',
		email: '',
		github: '',
		photo: 'https://1.gravatar.com/avatar/a4d6a575778b5aea9afddd13471f5178?d=https%3A%2F%2Fidenticons.github.com%2F9745e271f4fb0ac83b37286d6ac03942.png&s=420'
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
	photo: 'https://0.gravatar.com/avatar/6e1409c2af985ad17320157ffd13b67c?d=https%3A%2F%2Fidenticons.github.com%2F5b515ef064cf164fa1bd61f03eb6d9fa.png&s=420'

},

{
	name: 'Andy Flack',
	id: 'andy-flack',
	email: 'flack.ap@gmail.com',
	github: 'github.com/FlackAP',
	photo: 'https://1.gravatar.com/avatar/b05691109d08ca754b4d92984b53b23a?d=https%3A%2F%2Fidenticons.github.com%2F1f05bde9094f992be5264d254dc63842.png&s=420'

},

{
	name: 'Jake Hendley',
	id: 'jake-hendley',
	email: 'jhendley25@gmail.com',
	github: 'github.com/jhendley25',
	photo: 'https://1.gravatar.com/avatar/a4d6a575778b5aea9afddd13471f5178?d=https%3A%2F%2Fidenticons.github.com%2F9745e271f4fb0ac83b37286d6ac03942.png&s=420'

},

{
	name: 'Keeron Marc',
	id: 'keeron-marc',
	email: 'keeronmarc@gmail.com',
	github: 'github.com/keeronmarc',
	photo: 'https://1.gravatar.com/avatar/df54465365bd3da38d5bf73dd066ee67?d=https%3A%2F%2Fidenticons.github.com%2Fd6b54b90ab365523f9fe803ff79220a9.png&s=420'

},

{
	name: 'Alison Miller',
	id: 'alison-miller',
	email: 'alisonmllr20@gmail.com',
	github: 'github.com/alisonelizabeth',
	photo: 'https://1.gravatar.com/avatar/813a803a55adc044dcfd8d2b2b199850?d=https%3A%2F%2Fidenticons.github.com%2F98bd02ede9382c4aaa7dbe198f57a3f3.png&s=420'

},

{
	name: 'Brandon Miller',
	id: 'brandon-miller',
	email: 'bmiller@gmail.com',
	github: 'github.com/BrandonEMiller',
	photo: 'https://2.gravatar.com/avatar/fde9536a0b1ce7a6508f7343ea321074?d=https%3A%2F%2Fidenticons.github.com%2Fac01ab7bdce94d899fcb1828416cf54d.png&s=420'

},

{
	name: 'Tyler Phillips',
	id: 'tyler-phillips',
	email: 'tylerfphillips@gmail.com',
	github: 'github.com/tylerphillips',
	photo: 'https://2.gravatar.com/avatar/f036b006d9a9ef19dc02a75a28defb53?d=https%3A%2F%2Fidenticons.github.com%2F6bbbe379ea34bb31d3e52ed80a1bc43d.png&s=420'

},

{
	name: 'Ari Picker',
	id: 'ari-picker',
	email: 'picker10024@yahoo.com',
	github: 'github.com/Pickra',
	photo: 'https://1.gravatar.com/avatar/79185f7299489ac6b12e5e53134d2b2d?d=https%3A%2F%2Fidenticons.github.com%2F75ebb9f3853403af8fd0e2aa59768174.png&s=420'

},

{
	name: 'Ryan Ponce',
	id: 'ryan-ponce',
	email: 'ryanponce@gmail.com',
	github: 'github.com/ryanponce',
	photo: 'https://1.gravatar.com/avatar/88b0fab1e3c5ca7be992583b5901c78e?d=https%3A%2F%2Fidenticons.github.com%2Fa9d62848402941aedeb651541aa76930.png&s=420'

},

{
	name: 'Ryan Poplin',
	id: 'ryan-poplin',
	email: 'mobileupstate@gmail.com',
	github: 'github.com/ryanpoplin',
	photo: 'https://2.gravatar.com/avatar/5f82bfa696bada6b49afcac4569017cb?d=https%3A%2F%2Fidenticons.github.com%2Fce1b18b1d3e7b2cb1527db14040458e9.png&s=420'

},

{
	name: 'Joe Tamburro',
	id: 'joe-tamburro',
	email: 'joetamburro38@gmail.com',
	github: 'github.com/joetamburro',
	photo: 'https://0.gravatar.com/avatar/68832c35b4a14e91197ebc989d70694b?d=https%3A%2F%2Fidenticons.github.com%2Fab95055bbcfd4dcb4725994058c98e0c.png&s=420'

},

{
	name: 'Joe Vanleeuwen',
	id: 'joe-vanleeuwen',
	email: 'jvnlwn@gmail.com',
	github: 'github.com/joe-vanleeuwen',
	photo: 'https://0.gravatar.com/avatar/9630334f86049b7af41ae84c5c52a166?d=https%3A%2F%2Fidenticons.github.com%2Fd8ffb2214e1db5dd70ebac58b9c6bdde.png&s=420'

}
]

// staff model
Staff = Backbone.Model.extend({
	defaults: {
		name: 'Information not provided',
		id: 'new-staff',
		email: '',
		github: '',
		photo: 'https://1.gravatar.com/avatar/a4d6a575778b5aea9afddd13471f5178?d=https%3A%2F%2Fidenticons.github.com%2F9745e271f4fb0ac83b37286d6ac03942.png&s=420'
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
	photo: 'http://theironyard.com/images/about/mason-stewart.jpg'

},

{
	name: 'Eric Dodds',
	id: 'eric-dodds',
	title: 'Program Manager',
	email: 'eric@theironyard.com',
	github: 'github.com/ericdodds',
	photo: 'http://theironyard.com/images/about/eric-dodds.jpg'

},

{
	name: 'Daniel Jeffords',
	id: 'daniel-jeffords',
	title: "Teacher's Assistant",
	email: 'daniel@theironyard.com',
	github: 'github.com/DJSrA',
	photo: 'https://1.gravatar.com/avatar/da8a5a98804afce7c9598230ac702868?d=https%3A%2F%2Fidenticons.github.com%2Fa55edf1f0ff4b0ce8ff22eba31ddb99f.png&s=420'

}
]