/*global describe, it */
'use strict';
(function () {
  describe('The student directory', function(){ 
    it('should display all items in the collection on page load', function(){
      var testData = [ {
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@gmail.com',
        github: 'github.com/johndoe',
        photo: '<img class="photo" src="images/hendley.png>'
      },    

      {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'janedoe@gmail.com',
        github: 'github.com/janedoe',
        photo: '<img class="photo" src="images/hendley.png>'
      }
    ]

    var students = new StudentCollection();
    students.add(testData);

    expect(students.length).to.equal(2)

    }); // end it()
  
    // it ('should save a person ', function(done) {
    //   var randomTask = 'Task #'+ Math.floor(Math.random()*10000000)
    //   $('#form-input').val(randomTask)
    //   $('.add').click();

    //   setTimeout(function(){
    //     expect($('.task ul li').last().text()).to.equal(randomTask)
    //     done();
    //   },2000)
    // }); // end it()



  }); // end of describe ()
})();



