$(document).ready(function() {
	setTimeout(replace(), 2000);
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
    live_url = '<a href="' + custom_url + '"> ' + custom_url + '</a>';
    return $(this).html().replace("app_subdomain", live_url);

});
}
