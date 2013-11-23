$(document).ready(function() {
  
  /*
   * contacts list
   */
  
  $('#contact_search').submit(function () {
    $.get(this.action, $(this).serialize(), null, 'script');
    return false;
  });
  
  $('#contact_search #search').keyup(function () {
    $.get($("#contact_search").attr("action"), $("#contact_search").serialize(), null, "script");
    return false;
  });
  
  /*
   * contact form
   */

  $('.ui.form').form(
  {
    firstName: {
      identifier : 'contact_first_name',
      rules: [
        {
          type   : 'empty',
          prompt : 'Please enter your first name'
        },
		{
		  type   : 'length[2]',
          prompt : 'Your first name must be at least 2 characters'
        }
      ]
    },
    lastName: {
      identifier  : 'contact_last_name',
      rules: [
        {
          type   : 'empty',
          prompt : 'Please enter your last name'
        },
		{
		  type   : 'length[2]',
          prompt : 'Your last name must be at least 2 characters'
        }
      ]
    }
  },
  {
    inline : true,
    on     : 'blur'
  });

});