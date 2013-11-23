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
  
});