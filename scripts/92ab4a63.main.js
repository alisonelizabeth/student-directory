CompleteDirectoryView=Backbone.View.extend({template:_.template($("#grid-template").text()),className:"complete-view",events:{"click #activate":"activate"},initialize:function(){$(".container").append(this.el),this.render()},render:function(){this.$el.append(this.template({student:this.model}))},activate:function(){this.$el.find("#activate").attr("href","#/students/"+this.model.get("id"))}}),PersonView=Backbone.View.extend({template:_.template($("#profile-template").text()),className:"person-view",events:{"click #edit":"edit","click #delete":"destroy","click #save":"save"},initialize:function(){$(".container").append(this.el),this.render()},render:function(){$(".person-view").html(""),this.$el.append(this.template({student:this.model}))},edit:function(){$(".person-view").html("");var a=_.template($("#edit-template").text());this.$el.append(a({student:this.model}))},destroy:function(){this.remove()},save:function(){var a=this.$el.find("input#name").val(),b=this.$el.find("input#email").val(),c=this.$el.find("input#github").val();this.model.set("name",a),this.model.set("email",b),this.model.set("github",c),this.render()}}),CompleteStaffView=Backbone.View.extend({template:_.template($("#staff-template").text()),className:"complete-staff-view",initialize:function(){$(".container").append(this.el),this.render()},render:function(){this.$el.append(this.template({staff:this.model}))}}),Student=Backbone.Model.extend({defaults:{name:"Information not provided",id:"new-student",email:"",github:"",photo:"images/hendley.png"},initialize:function(){console.log("new student created")}}),StudentCollection=Backbone.Collection.extend({initialize:function(){console.log("new collection created"),this.on("add",function(a){new CompleteDirectoryView({model:a})})},model:Student});var data=[{name:"Caleb Bradley",id:"caleb-bradley",email:"calebbradley30@yahoo.com",github:"github.com/calebbradley",photo:"images/bradley.jpeg"},{name:"Andy Flack",id:"andy-flack",email:"flack.ap@gmail.com",github:"github.com/FlackAP",photo:"images/flack.png"},{name:"Jake Hendley",id:"jake-hendley",email:"jhendley25@gmail.com",github:"github.com/jhendley25",photo:"images/hendley.png"},{name:"Keeron Marc",id:"keeron-marc",email:"keeronmarc@gmail.com",github:"github.com/keeronmarc",photo:"images/marc.jpeg"},{name:"Alison Miller",id:"alison-miller",email:"alisonmllr20@gmail.com",github:"github.com/alisonelizabeth",photo:"images/amiller.jpeg"},{name:"Brandon Miller",id:"brandon-miller",email:"bmiller@gmail.com",github:"github.com/BrandonEMiller",photo:"images/bmiller.jpeg"},{name:"Tyler Phillips",id:"tyler-phillips",email:"tylerfphillips@gmail.com",github:"github.com/tylerphillips",photo:"images/phillips.jpeg"},{name:"Ari Picker",id:"ari-picker",email:"picker10024@yahoo.com",github:"github.com/Pickra",photo:"images/picker.jpeg"},{name:"Ryan Ponce",id:"ryan-ponce",email:"ryanponce@gmail.com",github:"github.com/ryanponce",photo:"images/ponce.png"},{name:"Ryan Poplin",id:"ryan-poplin",email:"mobileupstate@gmail.com",github:"github.com/ryanpoplin",photo:"images/poplin.jpeg"},{name:"Joe Tamburro",id:"joe-tamburro",email:"joetamburro38@gmail.com",github:"github.com/joetamburro",photo:"images/tamburro.jpeg"},{name:"Joe Vanleeuwen",id:"joe-vanleeuwen",email:"jvnlwn@gmail.com",github:"github.com/joe-vanleeuwen",photo:"images/vanleeuwen.png"}];Staff=Backbone.Model.extend({defaults:{name:"Information not provided",id:"new-staff",email:"",github:"",photo:"images/hendley.png"},initialize:function(){console.log("new staff member created")}}),StaffCollection=Backbone.Collection.extend({initialize:function(){console.log("new collection created"),this.on("add",function(a){new CompleteStaffView({model:a})})},model:Staff});var staffData=[{name:"Mason Stewart",id:"mason-stewart",title:"Teacher",email:"mason@theironyard.com",github:"github.com/masondesu",photo:"images/stewart.jpg"},{name:"Eric Dodds",id:"eric-dodds",title:"Program Manager",email:"eric@theironyard.com",github:"github.com/ericdodds",photo:"images/dodds.jpg"},{name:"Daniel Jeffords",id:"daniel-jeffords",title:"Teacher's Assistant",email:"daniel@theironyard.com",github:"github.com/DJSrA",photo:"images/jeffords.jpeg"}];AppRouter=Backbone.Router.extend({initialize:function(){console.log("new route created")},routes:{students:"showStudents","students/:id":"showStudent",staff:"showStaff"},showStudents:function(){var a=_.template($("#add-template").text());$(".container").html(""),$(".container-add").html(""),this.students=new StudentCollection,this.students.add(data),$(".container-add").append(a).css({"background-color":"#1187E4"}),$("#add").click(function(){var a=$("#student-name").val(),b=$("#email").val(),c=$("#github").val(),d=new Student({name:a,id:a,email:b,github:c});new CompleteDirectoryView({model:d}),data.push(d),$("input").val("")})},showStudent:function(a){$(".container").html(""),$(".container-add").html("").css({"background-color":"white"});var b=this.students.get(a);new PersonView({model:b}),console.log("Student ID: ",a)},showStaff:function(){console.log("going to show staff"),$(".container").html(""),$(".container-add").html("").css({"background-color":"white"}),this.staffMembers=new StaffCollection,this.staffMembers.add(staffData)}});var router=new AppRouter;Backbone.history.start();