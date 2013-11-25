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
  
  /*
   * eMail form
   */
   
  //Add a new email form in contact form
  $('a#addemail').click(function() {
    addemail();
  });
  
  function addemail() {
    
    // grab the prototype template
    var newemail = $('div#email-form-prototype').attr('data-prototype');
    var count = $('div.inline.fields').length;
    
    // replace the "$count$" used in the id and name of the prototype
    // with a number that's unique to our emails
    // end name attribute looks like name="contact[emails][2]"
    newemail = newemail.replace(/\$count\$/g, count);
    
    // create a new list element and add it to our list
    var newLine = $('<div class="inline fields"></div>').html(newemail);
    newLine.appendTo($('div#email-list'));
	
    //Active new dropdown menu
    $(".ui.dropdown").dropdown({action: "updateForm"});
    
    //Select email input
    $("#contact_emails_attributes_"+count+"_email").select();
  }
  
  //Remove email form on icon remove click
  $("#email-list").on("click", "i.remove.icon", function(){
    $(this).parent().parent().parent().remove();
  });
  
  /*
   * Phone form
   */
  
  //Add a new email form in contact form
  $('a#addphone').click(function() {
    addphone();
  });
  
  function addphone() {
    
    // grab the prototype template
    var newphone = $('div#phone-form-prototype').attr('data-prototype');
    var count = $('div.inline.fields').length;
    
    // replace the "$count$" used in the id and name of the prototype
    // with a number that's unique to our emails
    // end name attribute looks like name="contact[emails][2]"
    newphone = newphone.replace(/\$count\$/g, count);
    
    // create a new list element and add it to our list
    var newLine = $('<div class="inline fields"></div>').html(newphone);
    newLine.appendTo($('div#phone-list'));
	
    //Active new dropdown menu
    $(".ui.dropdown").dropdown({action: "updateForm"});
    
    //Select phone input
    $("#contact_phones_attributes_"+count+"_phone").select();
  }
  
  //Remove phone form on icon remove click
  $("#phone-list").on("click", "i.remove.icon", function(){
    $(this).parent().parent().parent().remove();
  });
  
  /*
   * Address form
   */
  
  //Add a new email form in contact form
  $('a#addaddress').click(function() {
    addaddress();
  });
  
  function addaddress() {
    
    // grab the prototype template
    var newaddress = $('div#address-form-prototype').attr('data-prototype');
    var count = $('div.inline.fields').length;
    
    // replace the "$count$" used in the id and name of the prototype
    // with a number that's unique to our emails
    // end name attribute looks like name="contact[emails][2]"
    newaddress = newaddress.replace(/\$count\$/g, count);
    
    // create a new list element and add it to our list
    var newLine = $('<div class="fields"></div>').html(newaddress);
    newLine.appendTo($('div#address-list'));
	
    //Active new dropdown menu
    $(".ui.dropdown").dropdown({action: "updateForm"});
    
    //Select phone input
    $("#contact_addresses_attributes_"+count+"_street1").select();
  }
  
  //Remove phone form on icon remove click
  $("#address-list").on("click", "i.remove.icon", function(){
    $(this).parent().parent().parent().parent().remove();
  });
});