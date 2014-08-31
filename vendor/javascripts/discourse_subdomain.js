$(".cooked p").text(function () {
	var subdomain;
	user = Discourse.User.current();
	if (user.custom_fields.subdomain) {
		subdomain = user.custom_fields.subdomain;
	} else {
		subdomain = "sample"
	}
    return $(this).text().replace("app_subdomain", 'https://' + subdomain + '.monitoringclient.com'); 
});​​​​​