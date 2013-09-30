/*global describe, it */
'use strict';
(function () {
  describe('The student directory', function(){ 
    it('should add a new student to the CompleteDirectoryView', function(){
        $('a.student').click();

        var randomName = $('#student-name').val('John Doe')
        var randomEmail = $('#email').val('johndoe@gmail.com') 
        var randomGithub = $('#github').val('johndoe.gihub.com')

        $('#add').click();

    expect($('li#name').last().text()).to.equal('John Doe')

    }); // end it()
  
   it ('should save a new name when a student directory is edited', function(){
        $('a.student').click();
        $('#activate').last().click();
        $('#edit').click();

        var newName = $('input#name').val('John Doe')

        $('#save').click();

        expect($('h1')).to.equal('John Doe')
   });

  }); // end of describe ()
})();



