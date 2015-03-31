var timer = setInterval(function() {
    if (($('.list-container').hasClass('hidden')) && (!$('body').hasClass('busy'))) {
        $('body').addClass('busy');
        
        var timer2 = setInterval(function() {
            if (!$('.list-container').hasClass('hidden')) {
                // do stuff here
                replace()
                
                clearInterval(timer2);
                $('body').removeClass('busy');
            }
        }, 20);
    }
}, 20);

$(window).load(function() {
  Discourse.ClickTrack.trackClick = function() { return false; }
});
function replace() {
  try {
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
  $(".cooked p").html(function () {
    return $(this).html().replace(/link_url(\/.*?)(\s|$)/gi, '<a target="_blank" href="' + custom_url + "$1" + '">' + custom_url + "$1" + '</a>' + "$2");
  });
  $(".cooked p").html(function () {
    return $(this).html().replace(/show_url(\/.*?)(\s|$)/gi, custom_url + "$1" + "$2");
  });
  } catch(err) {
  }
}
