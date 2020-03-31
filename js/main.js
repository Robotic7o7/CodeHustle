$(document).ready(function(){

	//======== FLIEXSLIDER PLUGIN =============//
	$('.flexslider').flexslider({
	animation: "fade",
	start: function(slider){
	$('body').removeClass('loading');
	}
	});

	//======== TWITTERFEED PLUGIN =============//
	$('#tweets').tweetable({
	username: 'envato', 
		time: true,
		rotate: true,
		speed: 6000, 
		limit: 5,
		replies: false,
		position: 'append',
		failed: "Sorry, twitter is currently unavailable for this user.",
		html5: true,
		onComplete:function($ul){
		$('time').timeago();
		}
	});
});
