$(window).load(function() {
  setTimeout(replace(), 2000);
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
    return $(this).html().replace(/link_url(\/.*?)(\s|$)/gi, '<a targt="_blank" href="' + custom_url + "$1" + '">' + custom_url + "$1" + '</a>' + "$2");;
  });
}