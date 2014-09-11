$(document).ready(function() {
  setTimeout(replace(), 4000);
  Discourse.ClickTrack.trackClick = function() { return false; }
});
function replace() {
 $(".cooked p").html(function () {
   var subdomain;
   var custom_url;
   var user;
   var live_url;
   user = Discourse.User.current();   
   if (user.custom_fields == null) {
            subdomain = "sample"
    } else {
        if (user.custom_fields.subdomain) {
            subdomain = user.custom_fields.subdomain;
        } else {
           subdomain = "sample";
        }
    }
    custom_url = 'https://' + subdomain + '.monitoringclient.com';
    return $(this).html().replace(/app_subdomain(\/.*?)(\s|$)/gi, '<a href="' + custom_url + "$1" + '">' + custom_url + "$1" + '</a>' + "$2");;
  });
}